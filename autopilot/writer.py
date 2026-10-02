"""Scripts + metadata for six Shorts formats, tuned for retention and YouTube policy.

Formats: ranking, story, funny, quiz, tips, explainer.
Each scene may carry on-screen overlays:
  badge  - big text at top ("#5", "Q1", "✓", "TIP 2")
  label  - smaller text under the badge (item name, question, answer)
and the package carries hook_text (on-screen hook over the first scene).
"""
from . import config, llm

# YouTube category ids: 1 Film & Animation, 22 People & Blogs, 23 Comedy, 24 Entertainment,
# 26 Howto & Style, 27 Education, 28 Science & Technology
FORMATS = {
    "ranking": {"emoji": "🏆", "name": "Top 5 countdown", "category": "27", "tag": "#top5"},
    "story": {"emoji": "📖", "name": "Short story", "category": "24", "tag": "#storytime"},
    "funny": {"emoji": "😂", "name": "Funny", "category": "23", "tag": "#funny"},
    "quiz": {"emoji": "❓", "name": "Quiz", "category": "24", "tag": "#quiz"},
    "tips": {"emoji": "💡", "name": "Quick tips", "category": "26", "tag": "#lifehacks"},
    "explainer": {"emoji": "🔬", "name": "Explainer", "category": "27", "tag": "#didyouknow"},
}


def fmt_of(topic):
    f = str(topic.get("format", "explainer")).lower()
    return next((k for k in FORMATS if f.startswith(k[:4])), "explainer")


RETENTION_RULES = f"""SHORTS RETENTION RULES (follow strictly - you are writing for the YouTube Shorts algorithm):
- The first sentence is the hook: max 12 words, creates curiosity or tension in the first second.
  Never start with greetings, "In this video", "Hey guys" or the channel name.
- Promise a payoff early and deliver it near the end, so viewers stay to the last second.
- Short, punchy spoken sentences (6-14 words). Conversational, energetic, no filler.
- Make the last line flow naturally back into the first line so the Short loops seamlessly.
- End by asking ONE specific question viewers can answer in the comments (drives comments), not "like and subscribe".
- Total about {int(config.TARGET_SECONDS * 2.6)} spoken words ({config.TARGET_SECONDS} seconds).
- "hook_text": 3-6 words shown on screen during the first scene (bold, curiosity-driven).

CONTENT POLICY (YouTube monetization-safe, advertiser-friendly, general audience 13+):
- No politics, religion, violence, crime, tragedy, sexual content, drugs, gambling, profanity or shock content.
- No medical, legal or financial advice. No claims about real living people. No stereotypes or jokes about any group.
- Facts must be accurate and widely verifiable. Never present fiction as true.
- Not aimed at young children (no "for kids" content).

FOR EVERY SCENE ALSO GIVE:
- "stock_queries": 2 different 2-4 word searches for generic stock footage of that moment
  (concrete, visual nouns; no brands, logos or people's names). A new shot appears every ~3 seconds.
- "image_prompt": vivid AI image prompt, vertical 9:16, no text, no logos, no real people.

METADATA (SEO for YouTube search and suggested):
- "title": max 60 characters, main keyword in the first 3 words, curiosity-driven but honest
  (the video must deliver what the title promises). No ALL CAPS words. At most one emoji.
- "description": line 1 = keyword-rich one-sentence summary (max 150 chars); line 2 = one more sentence of context.
- "thumbnail_text": 2-4 punchy words for the thumbnail (different from the title, high curiosity, no clickbait lies).
- "hashtags": exactly 4: "#shorts", one broad topic hashtag, one niche hashtag, and "{{format_tag}}".
- "tags": 10-15 search keywords/phrases people would type to find this (lowercase, no #).
- "key_facts": every factual claim made (empty list for pure fiction)."""

STRUCTURES = {
    "ranking": """FORMAT: "Top 5" countdown.
Exactly 7 scenes: 1 intro (badge "", label ""), then five ranked scenes counting DOWN from 5 to 1,
then 1 outro. Ranked scenes: start by saying the number naturally ("Number five...", "At number four...");
badge "#5" ... "#1"; label = item name in 1-4 words. Base the ranking on a clear, checkable measure.
Save the most impressive item for number one. Title starts with "Top 5".""",
    "story": """FORMAT: original short story, narrated.
6-8 scenes. A complete mini story with a vivid opening line, rising tension and a satisfying twist or
heartwarming ending in the final scene. Original characters only (no real people, no existing franchises).
Wholesome, mysterious, inspiring or funny - never dark or violent. Badges/labels empty except the last
scene may use badge "THE END" - optional. The description MUST include the sentence:
"This is an original fictional story." Do not claim it is true.""",
    "funny": """FORMAT: funny, family-friendly comedy short.
6-9 scenes. Observational or absurd humor about everyday life, animals, objects, science or history
(e.g. "things that make no sense", "relatable situations", funny-but-true facts). Build jokes in a rhythm:
setup, setup, punchline. Kind humor only: never mock real people or any group. label may hold a short
on-screen punchline word (optional); badge empty.""",
    "quiz": """FORMAT: quiz / trivia challenge.
Exactly 8 scenes: 1 intro ("Only a few people get all three right..."), then for each of 3 questions:
a question scene (badge "Q1"/"Q2"/"Q3", label = the question in max 8 words, narration reads the question
and ends with "3, 2, 1...") followed by an answer scene (badge "✓", label = the answer in 1-4 words,
narration gives the answer plus one surprising detail). Last scene: ask viewers to comment their score.
Questions get harder each round. Answers must be unambiguous and verifiable.""",
    "tips": """FORMAT: quick practical tips / life hacks.
6-8 scenes: intro, then 3-5 tips (badge "TIP 1", "TIP 2", ...; label = tip in 2-5 words), then outro.
Only safe, legal, genuinely useful everyday tips (home, tech, travel, cooking, productivity, organizing).
No health, medical, financial or dangerous advice.""",
    "explainer": """FORMAT: curiosity explainer.
6-9 scenes: a surprising question or fact, then a clear explanation building to an "aha" payoff.
Badges/labels optional: use label for one key number or term on screen when it helps.""",
}


def write_package(topic):
    fmt = fmt_of(topic)
    info = FORMATS[fmt]
    feedback = topic.get("feedback")
    prompt = f"""Write an ORIGINAL vertical YouTube Short package.
Topic: {topic['title']}
Angle: {topic.get('angle', '')}
Language: {config.LANGUAGE}.
{f'CHANNEL OWNER FEEDBACK ON THE PREVIOUS VERSION - apply it: {feedback}' if feedback else ''}

{STRUCTURES[fmt]}

{RETENTION_RULES.replace('{format_tag}', info['tag'])}

Return JSON:
{{"title": "...", "hook_text": "...", "thumbnail_text": "...", "description": "...", "hashtags": ["#shorts", "...", "...", "{info['tag']}"],
  "tags": ["..."], "scenes": [{{"text": "narration", "badge": "", "label": "",
  "stock_queries": ["...", "..."], "image_prompt": "..."}}], "key_facts": ["..."]}}"""
    pkg = llm.ask_json(prompt, temperature=0.8 if fmt in ("story", "funny") else 0.7)
    pkg["format"] = fmt
    pkg["category"] = info["category"]
    _normalize(pkg, fmt)
    pkg["script"] = " ".join(s["text"].strip() for s in pkg["scenes"])
    return pkg


def _normalize(pkg, fmt):
    scenes = [s for s in pkg.get("scenes", []) if str(s.get("text", "")).strip()]
    for s in scenes:
        q = s.get("stock_queries") or [s.get("stock_query", "")]
        s["stock_queries"] = [x for x in q if x][:3] or [pkg.get("title", "abstract background")]
        s["stock_query"] = s["stock_queries"][0]
        s["badge"] = str(s.get("badge") or "").strip()[:8]
        s["label"] = str(s.get("label") or "").strip()[:60]
    if fmt == "ranking":  # make sure the countdown badges exist even if the model slipped
        ranked = [s for s in scenes if s["badge"].startswith("#")]
        if len(ranked) < 3 and len(scenes) >= 7:
            for n, s in zip(range(5, 0, -1), scenes[1:6]):
                s["badge"] = f"#{n}"
        for s in scenes:
            if s["badge"].startswith("#") and not s["label"]:
                s["label"] = " ".join(s["stock_query"].split()[:3]).title()
    pkg["scenes"] = scenes
    tags = [t if t.startswith("#") else "#" + t for t in pkg.get("hashtags", []) if t]
    tags = [t.replace(" ", "") for t in tags]
    if "#shorts" not in [t.lower() for t in tags]:
        tags.insert(0, "#shorts")
    if FORMATS[fmt]["tag"] not in tags:
        tags.append(FORMATS[fmt]["tag"])
    pkg["hashtags"] = list(dict.fromkeys(tags))[:5]
    pkg["tags"] = [str(t).lstrip("#").strip() for t in pkg.get("tags", []) if t][:15]
    pkg["hook_text"] = str(pkg.get("hook_text") or "").strip()[:40]
    pkg["thumbnail_text"] = str(pkg.get("thumbnail_text") or pkg["hook_text"]).strip()[:40]
    pkg["title"] = str(pkg.get("title", "")).strip()[:95]
    if fmt == "story" and "fictional" not in pkg.get("description", "").lower():
        pkg["description"] = pkg.get("description", "").rstrip() + "\nThis is an original fictional story."


def review(pkg):
    """Independent pass: is this safe, advertiser-friendly and policy compliant?"""
    prompt = f"""You are a strict YouTube content-policy and advertiser-friendliness reviewer.
Review this Short and return JSON {{"approved": true/false, "issues": ["..."],
"fixed_title": "", "fixed_script_needed": true/false}}.

Reject (approved=false) if ANY of: political, religious or divisive content; violence, tragedy, crime;
health/medical/financial advice; statements about real living people; misleading or clickbait title that
the video doesn't deliver; likely false facts; fiction presented as true; sexual content; mocking any group;
content unsuitable for a general 13+ audience; copyrighted lyrics, quotes or characters.
For rankings and quizzes, also reject clearly wrong orders or answers.
Minor title issues only: approve and provide fixed_title (max 60 chars).

FORMAT: {pkg.get('format')}
TITLE: {pkg['title']}
DESCRIPTION: {pkg['description']}
SCRIPT: {pkg['script']}
FACTS: {pkg.get('key_facts')}"""
    verdict = llm.ask_json(prompt, temperature=0.0)
    if verdict.get("fixed_title"):
        pkg["title"] = str(verdict["fixed_title"])[:95]
    return bool(verdict.get("approved")) and not verdict.get("fixed_script_needed"), verdict.get("issues", [])


def build_description(pkg, credits, human_reviewed=False):
    tags = " ".join(pkg["hashtags"][:5])
    review_line = ("Original script written with AI assistance, checked by an automated safety review"
                   + (" and approved by the channel owner." if human_reviewed else "."))
    lines = [pkg["description"].strip(), "", tags, "", "— Credits & disclosure —", review_line,
             "This video contains AI-generated or AI-assisted content."]
    lines += credits
    lines.append("No other creators' videos were reused; stock footage and images are used under the "
                 "licenses credited above.")
    return "\n".join(lines)
