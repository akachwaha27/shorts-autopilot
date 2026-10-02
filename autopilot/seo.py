"""YouTube tag optimizer (free): real search phrases from YouTube autocomplete,
ranked the way tag-score tools (vidIQ / TubeBuddy) reward:
  - the primary keyword first, and tags that also appear in the title / description
  - phrases people actually type on YouTube (autocomplete = real search demand)
  - specific long-tail + broader tags, no duplicates, ~450-490 of the 500 allowed characters
  - every tag must stay relevant (shares a word with the title/description/keyword) - no misleading tags
"""
import json
import re

import requests

from . import config

STOP = {"the", "a", "an", "and", "or", "of", "to", "in", "on", "for", "is", "are", "you", "your", "this", "that",
        "with", "how", "why", "what", "can", "do", "does", "it", "its", "my", "be", "at", "by", "from", "these"}


# generic words that may appear in a tag without being in the title (they don't change what it's about)
MODIFIERS = {"quiz", "questions", "answers", "trivia", "facts", "fact", "hard", "easy", "for", "adults", "game",
             "challenge", "test", "explained", "shorts", "short", "top", "best", "funny", "story", "stories", "tips",
             "hacks", "hack", "ideas", "amazing", "interesting", "weird", "cool", "fun", "ranking", "ranked", "list",
             "5", "10", "things", "you", "didn't", "know", "most", "ever", "world", "why", "how", "what"}


def _norm(w):
    return w[:-1] if len(w) > 3 and w.endswith("s") and not w.endswith("ss") else w  # planets -> planet


MODIFIERS = {_norm(m) for m in MODIFIERS}


def _words(text):
    return [_norm(w) for w in re.findall(r"[a-z0-9']+", (text or "").lower()) if w not in STOP and len(w) > 1]


def autocomplete(q):
    try:
        r = requests.get("https://suggestqueries.google.com/complete/search", timeout=10, params={
            "client": "firefox", "ds": "yt", "q": q, "hl": config.LANGUAGE, "gl": config.REGION})
        return [s for s in json.loads(r.text)[1] if isinstance(s, str)]
    except Exception as e:  # noqa: BLE001
        print("autocomplete failed:", str(e)[:80])
        return []


def build_tags(pkg, limit_chars=490):
    title = re.sub(r"[^\w\s']", " ", pkg.get("title", ""))
    primary = (pkg.get("primary_keyword") or " ".join(_words(title)[:3])).lower().strip()
    desc = pkg.get("description", "")
    ai_tags = [t.lower().strip() for t in pkg.get("tags", []) if t]
    context = set(_words(title)) | set(_words(desc)) | set(_words(primary))

    seeds = list(dict.fromkeys([primary, " ".join(_words(title)[:4])] + ai_tags[:4]))
    suggested = set()
    for seed in seeds[:6]:
        if seed:
            suggested.update(s.lower().strip() for s in autocomplete(seed))

    candidates = dict.fromkeys([primary] + ai_tags + sorted(suggested))
    title_l, desc_l = title.lower(), desc.lower()
    scored = []
    for tag in candidates:
        tw = _words(tag)
        if not tw or len(tag) > 60 or len(tw) > 6:
            continue
        core = set(tw) - MODIFIERS
        overlap = len(core & context)
        # relevant only if it shares a real topic word AND has no unrelated topic words (names, brands, games...)
        if overlap == 0 or core - context:
            continue
        score = overlap * 2
        score += 4 if tag in title_l else 0
        score += 2 if tag in desc_l else 0
        score += 3 if tag in suggested else 0  # real search phrase
        score += 1 if 2 <= len(tw) <= 4 else 0  # long-tail sweet spot
        score += 10 if tag == primary else 0
        scored.append((score, tag))
    scored.sort(key=lambda x: (-x[0], len(x[1])))

    out, total, seen = [], 0, set()
    for _, tag in scored:
        key = " ".join(sorted(_words(tag)))
        if key in seen:  # near-duplicate ("space quiz" vs "quiz space")
            continue
        cost = len(tag) + (2 if " " in tag else 0) + 1  # YouTube counts quotes around multi-word tags + comma
        if total + cost > limit_chars:
            continue
        out.append(tag)
        seen.add(key)
        total += cost
    print(f"SEO tags ({total} chars): {out}")
    return out or ai_tags
