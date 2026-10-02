"""Research + script + scene prompts + metadata, with a separate safety review pass."""
from . import config, llm


def write_package(topic):
    words = int(config.TARGET_SECONDS * 2.6)
    prompt = f"""Write an ORIGINAL vertical short video package about:
Topic: {topic['title']}
Angle: {topic['angle']}
Language: {config.LANGUAGE}. Length: about {words} spoken words ({config.TARGET_SECONDS}s).

Requirements:
- Hook in the first sentence (question or surprising fact). Clear, accurate, widely-known facts only;
  no medical, legal or financial advice; no politics; no claims about real living people; no profanity.
- Plain spoken narration: no emojis, no stage directions, no hashtags inside the script.
- End with a soft call to action ("Follow for more ...").
- 6 to 9 scenes. For each scene give the narration chunk and:
  * "stock_query": 2-4 word search for generic stock footage (no brands, no people's names, no logos)
  * "image_prompt": a vivid prompt for an AI image, vertical 9:16, no text, no logos, no real people.
- Title: under 70 chars, curiosity-driven but NOT misleading or clickbait-false. No ALL CAPS.
- Description: 2-3 sentences summarizing the video.
- hashtags: 3-5 relevant hashtags (first one #shorts).
- key_facts: list of the factual claims made, so they can be checked.

Return JSON:
{{"title": "...", "description": "...", "hashtags": ["#shorts", "..."],
  "scenes": [{{"text": "...", "stock_query": "...", "image_prompt": "..."}}],
  "key_facts": ["..."]}}"""
    pkg = llm.ask_json(prompt, temperature=0.7)
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
             "Voiceover: AI-generated voice (Microsoft Edge neural text-to-speech).",
             "This video contains AI-generated or AI-assisted content."]
    lines += credits
    lines.append("Topic inspired by trending public interest; no third-party video footage or music was reused.")
    return "\n".join(lines)
