"""Collect trending signals and turn them into 5 safe, original video ideas."""
import re
import xml.etree.ElementTree as ET
from datetime import timedelta

import requests

from . import config, llm, state

# Hard filter: anything matching these never reaches the AI or you.
BLOCKLIST = re.compile(r"\b(" + "|".join([
    # politics / government
    "election", "elect", "vote", "voter", "ballot", "president", "senator", "congress", "parliament",
    "democrat", "republican", "gop", "trump", "biden", "harris", "vance", "modi", "putin", "zelensky",
    "netanyahu", "minister", "governor", "mayor", "campaign", "impeach", "tariff", "policy", "protest",
    "immigration", "border", "deport", "supreme court", "lawsuit", "sued", "indict", "trial", "verdict",
    # conflict / violence / tragedy
    "war", "attack", "shooting", "shooter", "gun", "killed", "kill", "dead", "death", "dies", "died",
    "murder", "stabbing", "terror", "bomb", "missile", "hostage", "gaza", "israel", "ukraine", "russia",
    "iran", "hamas", "crash", "accident", "fire", "earthquake", "hurricane", "flood", "tornado",
    "victim", "funeral", "obituary", "arrest", "police", "prison", "jail", "crime", "scandal",
    # sensitive / divisive
    "abortion", "religion", "church", "mosque", "islam", "christian", "jewish", "gay", "trans",
    "racist", "racism", "lgbt", "vaccine", "covid", "cancer", "overdose", "suicide", "drug",
    "nsfw", "onlyfans", "leak", "nude", "affair", "divorce", "cheating", "feud", "beef", "diss",
    "bitcoin", "crypto", "stock", "lottery", "betting", "casino",
]) + r")\b", re.I)


def google_trends():
    url = f"https://trends.google.com/trending/rss?geo={config.REGION}"
    ns = {"ht": "https://trends.google.com/trending/rss"}
    out = []
    try:
        root = ET.fromstring(requests.get(url, timeout=30).content)
        for item in root.iter("item"):
            title = item.findtext("title", "")
            traffic = item.findtext("ht:approx_traffic", "", ns)
            news = [n.findtext("ht:news_item_title", "", ns) for n in item.findall("ht:news_item", ns)]
            out.append({"source": "Google Trends", "title": title, "signal": traffic,
                        "context": " | ".join(news[:2])})
    except Exception as e:  # noqa: BLE001
        print("Google Trends failed:", e)
    return out


def youtube_trending():
    if not config.YOUTUBE_API_KEY:
        return []
    out = []
    base = "https://www.googleapis.com/youtube/v3"
    try:
        r = requests.get(f"{base}/videos", timeout=30, params={
            "part": "snippet,statistics", "chart": "mostPopular", "regionCode": config.REGION,
            "maxResults": 50, "key": config.YOUTUBE_API_KEY}).json()
        for v in r.get("items", []):
            s = v["snippet"]
            out.append({"source": "YouTube Trending", "title": s["title"],
                        "signal": f'{int(v["statistics"].get("viewCount", 0)):,} views',
                        "context": " ".join(s.get("tags", [])[:6])})
        # Short-form signal: most-viewed Shorts from the last 48h (covers TikTok/Reels-style trends)
        after = (state.now() - timedelta(hours=48)).strftime("%Y-%m-%dT%H:%M:%SZ")
        r = requests.get(f"{base}/search", timeout=30, params={
            "part": "snippet", "q": "#shorts", "type": "video", "videoDuration": "short",
            "order": "viewCount", "publishedAfter": after, "regionCode": config.REGION,
            "relevanceLanguage": config.LANGUAGE, "maxResults": 50, "key": config.YOUTUBE_API_KEY}).json()
        for v in r.get("items", []):
            out.append({"source": "YouTube Shorts (48h)", "title": v["snippet"]["title"],
                        "signal": "top viewed short", "context": v["snippet"].get("description", "")[:120]})
    except Exception as e:  # noqa: BLE001
        print("YouTube trends failed:", e)
    return out


def collect():
    raw = google_trends() + youtube_trending()
    safe = [t for t in raw if not BLOCKLIST.search(f'{t["title"]} {t["context"]}')]
    print(f"Collected {len(raw)} signals, {len(safe)} passed keyword filter")
    return safe


GENERIC = {"top", "5", "3", "why", "how", "what", "the", "a", "an", "of", "in", "on", "at", "to", "for", "and", "or",
           "you", "your", "are", "is", "that", "this", "these", "they", "do", "does", "can", "will", "way", "than",
           "think", "ever", "most", "really", "actually", "secretly", "didn", "t", "know", "need", "s", "with", "from",
           "about", "things", "thing", "every", "everyone", "completely", "absolute", "insane", "crazy", "weird", "weirdest",
           "funniest", "best", "worst", "facts", "fact", "ranked", "ranking", "explained", "it", "its", "has", "have"}


def _key(title):
    words = re.findall(r"[a-z0-9]+", title.lower().replace(",", ""))
    out = set()
    for w in words:
        if w in GENERIC:
            continue
        for suf in ("ies", "es", "s"):
            if len(w) > 4 and w.endswith(suf):
                w = w[: -len(suf)] + ("y" if suf == "ies" else "")
                break
        out.add(w)
    return out


def is_repeat(title, past_keys):
    """Same idea reworded? True when most of the meaningful words match an earlier idea."""
    k = _key(title)
    if not k:
        return False
    for pk in past_keys:
        if not pk:
            continue
        common = len(k & pk)
        ratio = common / min(len(k), len(pk))
        if k == pk or (common >= 3 and ratio >= 0.6) or (common >= 2 and ratio >= 0.75):
            return True
    return False


def past_ideas(history=()):
    """Every idea ever sent to you or made into a video (permanent archive + recent state)."""
    from . import library
    titles = list(history)
    for day, b in sorted(library.load("ideas").items()):
        titles += [i.get("title", "") for i in b.get("ideas", [])]
    for v in library.load("videos").values():
        titles += [v.get("title", ""), v.get("idea_title", "")]
    seen, out = set(), []
    for t in titles:
        if t and t.lower() not in seen:
            seen.add(t.lower())
            out.append(t)
    return out


def pick_topics(signals, history):
    past = past_ideas(history)
    past_keys = [_key(t) for t in past]
    topics, rejected = [], []
    for attempt in range(2):  # second pass asks for replacements if any idea was a repeat
        need = config.TOPICS_PER_DAY - len(topics)
        fresh = _ask_topics(signals, past + [t["title"] for t in topics] + rejected, need if attempt else None)
        for t in fresh:
            if is_repeat(t["title"], past_keys + [_key(x["title"]) for x in topics]):
                print("skipping repeated idea:", t["title"])
                rejected.append(t["title"])
            elif len(topics) < config.TOPICS_PER_DAY:
                topics.append(t)
        if len(topics) >= config.TOPICS_PER_DAY:
            break
    topics.sort(key=lambda t: t.get("virality_score", 0) or 0, reverse=True)
    return topics


def _ask_topics(signals, covered, count=None):
    lines = "\n".join(f'- [{s["source"]}] {s["title"]} ({s["signal"]}) {s["context"]}' for s in signals[:120])
    prompt = f"""You are a YouTube Shorts growth strategist for a faceless, monetization-focused channel.
You know what the Shorts algorithm rewards: a strong hook, high swipe-through and completion rate,
rewatches/loops, comments and shares, and topics people are searching for right now.
Niche preference: {config.NICHE}. Audience region: {config.REGION}. Language: {config.LANGUAGE}.

Trending signals from the last 24-48h:
{lines}

ALREADY USED - every idea below was sent before. Do NOT repeat any of them, reword them, or pick the same subject
with a different title (e.g. if "Why soda cans explode at 30,000 feet" is listed, no soda-can-at-altitude idea at all).
Pick genuinely NEW subjects:
{chr(10).join('- ' + t for t in covered[-250:]) or 'none'}

Choose exactly {count or config.TOPICS_PER_DAY} ideas for ORIGINAL Shorts of about one minute (55-65 seconds). Use the trends as inspiration
(ride the curiosity around them with a SAFE ANGLE); if the trends are weak, use proven evergreen Shorts ideas.
Mix FORMATS - use at least 4 different ones across the list, max 2 of the same:
- "ranking": Top 5 countdown with a clear, checkable measure ("Top 5 fastest animals on Earth")
- "story": original wholesome/mystery/twist mini story, clearly fiction (e.g. inspired by a trending holiday or event mood)
- "funny": kind, family-friendly humor: relatable everyday situations, funny-but-true facts, absurd observations
- "quiz": 3-question trivia challenge viewers play along with
- "tips": quick, genuinely useful everyday tips/hacks (tech, home, cooking, travel, productivity)
- "explainer": surprising "why/how" curiosity facts
- "clips": "Ranking the funniest animal moments" - real free stock clips of animals doing funny things
  (dogs, cats, goats, ducks, parrots, monkeys...), ranked #5 to #1. Keep it about ANIMALS only (one animal
  type or animals in general), e.g. "Ranking the funniest goat moments", "Top 5 funniest dog reactions"
{f'Include at least {config.RANKINGS_PER_DAY} "ranking" ideas.' if config.RANKINGS_PER_DAY else ''}
{f'Include exactly {config.CLIPS_PER_DAY} "clips" idea(s) (tone "funny").' if config.CLIPS_PER_DAY else ''}
{f'''FUNNY IS REQUIRED: include at least {config.FUNNY_PER_DAY} ideas with "tone": "funny" - at least one "funny" format
idea AND at least one FUNNY "ranking" (a Top 5 that is played for laughs, e.g. "Top 5 animals with ridiculous
sleeping habits", "Top 5 inventions that made no sense", "Top 5 weirdest world records"). Funny ideas must be
kind and family-friendly, and must not be pushed to the bottom: give them honest virality scores.''' if config.FUNNY_PER_DAY else ''}
Every idea also gets "tone": "funny" (played for laughs) or "normal".

Hard rules - reject any idea that:
- involves politics, elections, government, war, crime, death, disasters, religion, health/medical or financial
  advice, lawsuits, celebrity gossip/drama, real living people, or anything divisive, shocking or likely to offend;
- would need someone else's footage, music, characters or likeness;
- makes claims that can't be verified; or is aimed at young children.
Every idea must be advertiser-friendly and suitable for a general 13+ audience.

Return JSON: {{"topics": [{{"title": "short catchy working title", "angle": "one sentence on the video idea",
"format": "ranking|story|funny|quiz|tips|explainer|clips", "tone": "funny|normal", "trend_source": "which signal inspired it (or evergreen)",
"virality_score": 1-10, "why": "why it can win in the Shorts feed"}}]}}
Sort by virality_score descending."""
    data = llm.ask_json(prompt, temperature=0.8)
    topics = data.get("topics", [])
    # second line of defence
    from .writer import fmt_of
    for t in topics:
        t["format"] = fmt_of(t)
        t["tone"] = "funny" if t["format"] == "funny" or str(t.get("tone", "")).lower().startswith("fun") else "normal"
    return [t for t in topics if not BLOCKLIST.search(t["title"] + " " + t["angle"])][: config.TOPICS_PER_DAY]
