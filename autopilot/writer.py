"""Research + script + scene prompts + metadata, with a separate safety review pass.

Two formats:
  explainer - hook, facts, call to action (default)
  ranking   - "Top 5" countdown from #5 to #1 with on-screen rank badges
"""
from . import config, llm

COMMON_RULES = """- Clear, accurate, widely-known facts only; no medical, legal or financial advice; no politics;
  no claims about real living people; no profanity.
- Plain spoken narration: no emojis, no stage directions, no hashtags inside the script.
- For each scene also give:
  * "stock_query": 2-4 word search for generic stock footage of that scene (no brands, no people's names, no logos)
  * "image_prompt": a vivid prompt for an AI image, vertical 9:16, no text, no logos, no real people.
- Title: under 70 chars, curiosity-driven but NOT misleading or clickbait-false. No ALL CAPS.
- Description: 2-3 sentences summarizing the video.
- hashtags: 3-5 relevant hashtags (first one #shorts).
- key_facts: list of the factual claims made, so they can be checked."""


def _explainer_prompt(topic, words):
    return f"""Write an ORIGINAL vertical short video package about:
Topic: {topic['title']}
Angle: {topic['angle']}
Language: {config.LANGUAGE}. Length: about {words} spoken words ({config.TARGET_SECONDS}s).

Requirements:
- Hook in the first sentence (question or surprising fact).
- End with a soft call to action ("Follow for more ...").
- 6 to 9 scenes, each with a narration chunk.
{COMMON_RULES}

Return JSON:
{{"title": "...", "description": "...", "hashtags": ["#shorts", "..."],
  "scenes": [{{"text": "...", "stock_query": "...", "image_prompt": "..."}}],
  "key_facts": ["..."]}}"""


def _ranking_prompt(topic, words):
    return f"""Write an ORIGINAL "Top 5" countdown short video about:
Topic: {topic['title']}
Angle: {topic['angle']}
Language: {config.LANGUAGE}. Length: about {words} spoken words ({config.TARGET_SECONDS}s).

Structure (exactly 7 scenes, in this order):
1. Intro scene (rank null): one punchy hook line that says what is being ranked.
2-6. Five ranked scenes counting DOWN: rank 5, 4, 3, 2, 1. Each starts by saying the number naturally
   ("Number five...", "At number four...") then gives the item and one surprising, accurate fact or reason.
   Give each a "label": the item name in 1-4 words (shown on screen).
   Save the most impressive item for number one.
7. Outro scene (rank null): quick wrap-up and a soft call to action ("Follow for more ...").
The ranking must be based on a clear, checkable measure where possible (size, speed, height, age, etc.).
Title should start with "Top 5" and be honest about what is ranked.
{COMMON_RULES}

Return JSON:
{{"title": "Top 5 ...", "description": "...", "hashtags": ["#shorts", "..."],
  "scenes": [{{"text": "...", "rank": null, "label": "", "stock_query": "...", "image_prompt": "..."}},
             {{"text": "...", "rank": 5, "label": "...", "stock_query": "...", "image_prompt": "..."}}],
  "key_facts": ["..."]}}"""


def _fix_ranking(pkg):
    """Make sure the countdown is well-formed even if the model slips."""
    scenes = pkg["scenes"]
    ranked = [s for s in scenes if s.get("rank")]
    if len(ranked) < 3 and len(scenes) >= 5:  # model ignored ranks: number the middle scenes
        middle = scenes[1:-1][-5:]
        for n, s in zip(range(len(middle), 0, -1), middle):
            s["rank"] = n
    for s in scenes:
        if s.get("rank") and not s.get("label"):
            s["label"] = " ".join(s.get("stock_query", "").split()[:3]).title()
        if s.get("rank") is not None:
            try:
                s["rank"] = int(s["rank"])
            except (TypeError, ValueError):
                s["rank"] = None


def write_package(topic):
    words = int(config.TARGET_SECONDS * 2.6)
    fmt = topic.get("format", "explainer")
    prompt = _ranking_prompt(topic, words) if fmt == "ranking" else _explainer_prompt(topic, words)
    pkg = llm.ask_json(prompt, temperature=0.7)
    pkg["format"] = fmt
    if fmt == "ranking":
        _fix_ranking(pkg)
    else:
        for s in pkg["scenes"]:
            s.pop("rank", None)
    pkg["script"] = " ".join(s["text"].strip() for s in pkg["scenes"])
    return pkg


def review(pkg):
    """Independent pass: is this safe, non-controversial, policy compliant?"""
    prompt = f"""You are a strict content-policy reviewer for YouTube, TikTok and Instagram.
Review this short video package and return JSON {{"approved": true/false, "issues": ["..."],
"fixed_title": "...", "fixed_script_needed": true/false}}.

Reject (approved=false) if ANY of: political, religious or divisive content; violence, tragedy, crime;
health/medical/financial advice or claims; statements about real living people; misleading title;
likely false facts; sexual content; content unsuitable for a general audience; copyrighted lyrics/quotes.
For rankings, also reject if the order is clearly wrong or the ranking claims are unverifiable.
Minor title issues: approve but provide fixed_title.

TITLE: {pkg['title']}
DESCRIPTION: {pkg['description']}
SCRIPT: {pkg['script']}
FACTS: {pkg.get('key_facts')}"""
    verdict = llm.ask_json(prompt, temperature=0.0)
    if verdict.get("fixed_title"):
        pkg["title"] = verdict["fixed_title"][:95]
    return bool(verdict.get("approved")) and not verdict.get("fixed_script_needed"), verdict.get("issues", [])


def build_description(pkg, credits):
    tags = " ".join(pkg["hashtags"][:5])
    lines = [pkg["description"], "", tags, "", "— Credits & disclosure —",
             "Original script written with AI assistance and reviewed for accuracy.",
             "This video contains AI-generated or AI-assisted content."]
    lines += credits
    lines.append("Topic inspired by trending public interest. No other creators' videos were reused; "
                 "stock footage and images are used under the licenses credited above.")
    return "\n".join(lines)
