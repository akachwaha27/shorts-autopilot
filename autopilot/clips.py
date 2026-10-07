"""Funny animal clip rankings, made only from free-licensed stock footage (Pixabay / Pexels).

Unlike other formats, the footage comes first and the script is written around it:
  1. an AI picks searches for funny animal moments ("goat jumping", "dog shaking water", ...);
  2. candidate clips must be tagged with the animal; a small preview of each is downloaded and three
     frames (start, middle, end) are shown to Gemini, which describes what happens and rates how funny it is;
  3. the 7 funniest distinct clips become: intro, #5 ... #1 (funniest last), outro;
  4. the writer narrates exactly what happens in each clip.
No clip from YouTube, TikTok or any other creator is ever used.
"""
import os
import re
import subprocess

import requests

from . import config, llm
from .visuals import UA, _fetch_image, _mentions, _words

ANIMAL_WORDS = ("dog", "puppy", "cat", "kitten", "goat", "duck", "parrot", "bird", "monkey", "horse", "cow", "pig",
                "sheep", "llama", "alpaca", "rabbit", "hamster", "squirrel", "penguin", "seal", "otter", "bear",
                "panda", "raccoon", "fox", "chicken", "goose", "turtle", "frog", "giraffe", "elephant", "kangaroo")


def _queries(topic):
    prompt = f"""You help make a funny YouTube Short that ranks the funniest animal moments.
Topic: {topic['title']}. Idea: {topic.get('angle', '')}
We can only use free stock footage (Pixabay, Pexels). Give 12 searches that are likely to return clips of
animals DOING something funny on camera (an action, not a pose): e.g. "goat jumping", "dog shaking water",
"cat jumping fail", "puppy slipping", "parrot dancing", "duck chasing", "dog head tilt", "cat paw swat".
Plain words people tag stock videos with. Each gets "must": the animal word(s) the clip must be tagged with.
Return JSON: {{"searches": [{{"q": "2-3 words", "must": ["dog"]}}]}}"""
    try:
        data = llm.ask_json(prompt, temperature=0.6)
        qs = [q for q in data.get("searches") or [] if isinstance(q, dict) and q.get("q")]
    except Exception as e:  # noqa: BLE001
        print("clip searches failed, using defaults:", str(e)[:100])
        qs = []
    if not qs:
        qs = [{"q": q, "must": [q.split()[0]]} for q in (
            "goat jumping", "dog shaking water", "cat jumping", "puppy playing", "parrot dancing", "duck walking",
            "dog head tilt", "kitten playing", "monkey eating", "dog running beach", "cat paw", "funny dog")]
    for q in qs:
        q["q"] = str(q["q"])[:50]
        q["must"] = [str(m) for m in (q.get("must") or [])][:3] or [w for w in q["q"].split() if w in ANIMAL_WORDS][:1] or [q["q"].split()[0]]
    return qs[:12]


def _candidates(q, seen):
    out = []
    if config.PIXABAY_API_KEY:
        try:
            r = requests.get("https://pixabay.com/api/videos/", timeout=30, params={
                "key": config.PIXABAY_API_KEY, "q": q["q"], "safesearch": "true", "per_page": 15})
            r.raise_for_status()
            for v in r.json().get("hits", []):
                vids = v.get("videos", {})
                small = (vids.get("tiny") or vids.get("small") or {}).get("url")
                big = (vids.get("medium") or vids.get("large") or vids.get("small") or {}).get("url")
                if small and big and 3 <= v.get("duration", 0) <= 45:
                    out.append({"id": f"pxb{v['id']}", "text": v.get("tags", ""), "preview": small, "url": big,
                                "duration": v["duration"], "credit": f'{v["user"]} (Pixabay) {v["pageURL"]}'})
        except Exception as e:  # noqa: BLE001
            print(f"  pixabay clips failed for '{q['q']}': {str(e)[:100]}")
    if config.PEXELS_API_KEY:
        try:
            r = requests.get("https://api.pexels.com/videos/search", timeout=30,
                             headers={"Authorization": config.PEXELS_API_KEY}, params={"query": q["q"], "per_page": 15})
            r.raise_for_status()
            for v in r.json().get("videos", []):
                files = sorted([f for f in v["video_files"] if f.get("link") and f.get("height")],
                               key=lambda f: f["height"] * f["width"])
                good = [f for f in files if min(f["height"], f["width"]) >= 720]
                if files and good and 3 <= v.get("duration", 0) <= 45:
                    out.append({"id": f"pex{v['id']}", "text": v.get("url", "").rstrip("/").rsplit("/", 1)[-1].replace("-", " "),
                                "preview": files[0]["link"], "url": good[0]["link"], "duration": v["duration"],
                                "credit": f'{v["user"]["name"]} (Pexels) {v["url"]}'})
        except Exception as e:  # noqa: BLE001
            print(f"  pexels clips failed for '{q['q']}': {str(e)[:100]}")
    keep = []
    for c in out:
        if c["id"] in seen or not _mentions(_words(c["text"]), q["must"]):
            continue
        seen.add(c["id"])
        keep.append(c)
    return keep


def _strip(c, work):
    """Download a small preview and put 3 frames (20% / 50% / 80%) side by side in one JPEG."""
    src = os.path.join(work, f"{c['id']}_prev.mp4")
    out = os.path.join(work, f"{c['id']}_strip.jpg")
    try:
        r = requests.get(c["preview"], timeout=60, headers=UA)
        r.raise_for_status()
        if len(r.content) > 25 << 20:
            return None
        with open(src, "wb") as f:
            f.write(r.content)
        d = max(1.0, float(c.get("duration") or 6))
        frames = []
        for k, t in enumerate((0.2, 0.5, 0.8)):
            fp = os.path.join(work, f"{c['id']}_f{k}.jpg")
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", f"{d * t:.2f}", "-i", src, "-frames:v", "1",
                            "-vf", "scale=-2:300", fp], check=True, timeout=60)
            frames.append(fp)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", frames[0], "-i", frames[1], "-i", frames[2],
                        "-filter_complex", "[0][1][2]hstack=inputs=3", "-q:v", "4", out], check=True, timeout=60)
        c["has_audio"] = has_sound(src)
        with open(out, "rb") as f:
            return f.read()
    except Exception as e:  # noqa: BLE001
        print(f"  preview failed for {c['id']}: {str(e)[:100]}")
        return None


def has_sound(path):
    """True if the clip has an audio track that isn't silence (real sound, not an empty track)."""
    try:
        r = subprocess.run(["ffmpeg", "-hide_banner", "-i", path, "-vn", "-af", "volumedetect", "-f", "null", "-"],
                           capture_output=True, text=True, timeout=60)
        m = re.search(r"mean_volume: (-?[\d.]+) dB", r.stderr)
        return bool(m) and float(m.group(1)) > -45
    except Exception:  # noqa: BLE001
        return False


def _rate(batch):
    imgs = [b for _, b in batch]
    prompt = f"""You pick clips for a family-friendly "funniest animal moments" ranking Short.
Each of Images 0-{len(imgs) - 1} shows 3 frames (start, middle, end, left to right) of ONE stock video clip.
For each clip: describe in max 15 words what the animal actually DOES (be concrete: "goat leaps off a rock
and lands clumsily"); give "animal"; rate "funny" 0-10 (10 = surprising, laugh-out-loud action; 5 = cute
and a bit silly; 1 = animal just standing or walking). Set "ok": false for visible text, captions,
watermarks or logos, people's faces as the main subject, injured or distressed animals, or anything not
family-friendly.
Return JSON: {{"clips": [{{"image": 0, "does": "...", "animal": "...", "funny": 7, "ok": true}}]}}"""
    res = llm.ask_vision_json(prompt, imgs)
    out = []
    for r in res.get("clips") or []:
        try:
            c = batch[int(r["image"])][0]
        except (KeyError, ValueError, IndexError, TypeError):
            continue
        if r.get("ok", True):
            c.update(desc=str(r.get("does", ""))[:120], animal=str(r.get("animal", ""))[:30],
                     funny=float(r.get("funny", 0)))
            out.append(c)
    return out


def find(topic, work, need=7):
    """Returns (mode, clips).
    mode "audio":   5 clips that have their own sound, ordered #5 ... #1 - ranked on screen, no voiceover.
    mode "narrate": 7 clips ordered intro, #5 ... #1, outro - the writer adds funny commentary.
    mode "none":    not enough good clips today."""
    if not llm.vision_available():
        print("funny clips need Gemini (vision) to watch clips; skipping")
        return "none", []
    os.makedirs(work, exist_ok=True)
    seen, pool = set(), []
    for q in _queries(topic):
        pool += _candidates(q, seen)[:4]
        if len(pool) >= 30:
            break
    print(f"funny clips: {len(pool)} candidates")
    rated, batch = [], []
    for c in pool:
        b = _strip(c, work)
        if b:
            batch.append((c, b))
        if len(batch) == 6:
            try:
                rated += _rate(batch)
            except Exception as e:  # noqa: BLE001
                print("  clip rating failed:", str(e)[:100])
            batch = []
    if batch:
        try:
            rated += _rate(batch)
        except Exception as e:  # noqa: BLE001
            print("  clip rating failed:", str(e)[:100])
    rated = [c for c in rated if c["funny"] >= config.CLIP_MIN_FUNNY]
    rated.sort(key=lambda c: c["funny"], reverse=True)
    with_sound = [c for c in rated if c.get("has_audio")]
    if config.CLIP_ORIGINAL_AUDIO and len(with_sound) >= 5:  # clips have their own sound: just rank them
        top5 = sorted(_variety(with_sound, 5), key=lambda c: c["funny"])
        for k, c in enumerate(top5):
            c["path"] = os.path.join(work, f"clip{k}_{c['id']}.mp4")
            if not os.path.exists(c["path"]):
                download(c)
        print("funny clips (original sound, no voiceover):", [(c["funny"], c["desc"]) for c in top5])
        return "audio", [_public(c) for c in top5]
    chosen = _variety(rated, need)
    if len(chosen) < 5:
        print(f"funny clips: only {len(chosen)} good clips found")
        return "none", []
    top5 = sorted(chosen[:5], key=lambda c: c["funny"])  # #5 (least funny) ... #1 (funniest)
    extra = chosen[5:7]
    intro = extra[0] if extra else top5[-1]
    outro = extra[1] if len(extra) > 1 else top5[-2]
    order = [intro] + top5 + [outro]
    for k, c in enumerate(order):
        c["path"] = os.path.join(work, f"clip{k}_{c['id']}.mp4")
        if not os.path.exists(c["path"]):
            download(c)
    print("funny clips chosen (with voiceover):", [(c["funny"], c["desc"]) for c in order])
    return "narrate", [_public(c) for c in order]


def _public(c):
    return {k: c.get(k) for k in ("id", "url", "path", "credit", "desc", "animal", "funny", "duration", "has_audio")}


def _variety(rated, n):
    """Funniest first, at most 2 clips of the same animal unless there aren't enough others."""
    chosen, per_animal = [], {}
    for c in rated:
        a = re.sub(r"s$", "", c["animal"].lower())
        if per_animal.get(a, 0) < 2:
            per_animal[a] = per_animal.get(a, 0) + 1
            chosen.append(c)
    chosen += [c for c in rated if c not in chosen]
    return chosen[:n]


def download(c):
    from .media import _download
    _download(c["url"], c["path"])
    return c["path"]


def notes(clips):
    names = ["INTRO clip"] + [f"#{n} clip" for n in range(5, 0, -1)] + ["OUTRO clip"]
    return "\n".join(f"- {names[k]}: {c['desc']}" for k, c in enumerate(clips))


def package(topic, clips):
    """Title, labels and metadata for a ranking that plays the clips' own sound (nothing is narrated)."""
    lines = "\n".join(f"#{5 - k}: {c['desc']}" for k, c in enumerate(clips))
    prompt = f"""Package a family-friendly YouTube Short that ranks 5 funny animal clips, shown with their own sound
(no voiceover). The clips, in the order they play (#5 first, #1 = funniest last):
{lines}
Topic idea: {topic['title']}

Return JSON: {{"title": "max 60 chars, starts with 'Ranking the' or 'Top 5', honest", "primary_keyword": "2-4 words",
"hook_text": "3-6 words on screen at the start", "thumbnail_text": "2-4 words",
"labels": ["funny 2-4 word name for #5", "#4", "#3", "#2", "#1"],
"end_text": "max 6 words asking which one was funniest",
"description": "2 sentences, contains the primary keyword", "hashtags": ["#shorts", "#funnyanimals", "...", "#animals"],
"tags": ["10-15 lowercase search phrases"], "pinned_comment": "max 220 chars, invites people to vote for their favourite"}}
Kind humor only: laugh with the animals, never at pain. No brand or people's names."""
    d = llm.ask_json(prompt, temperature=0.8)
    labels = (d.get("labels") or []) + [""] * 5
    scenes = [{"text": c["desc"], "badge": f"#{5 - k}", "label": str(labels[k])[:40], "clip": c}
              for k, c in enumerate(clips)]
    hashtags = [h if str(h).startswith("#") else f"#{h}" for h in (d.get("hashtags") or [])][:4]
    if "#shorts" not in hashtags:
        hashtags = ["#shorts"] + hashtags[:3]
    return {
        "format": "clips", "tone": "funny", "category": "15", "clip_audio": True, "clips": clips,
        "title": str(d.get("title") or topic["title"])[:100], "primary_keyword": str(d.get("primary_keyword", "")),
        "hook_text": str(d.get("hook_text", ""))[:40], "thumbnail_text": str(d.get("thumbnail_text", ""))[:30],
        "end_text": str(d.get("end_text") or "Which one won? Comment below")[:50],
        "description": str(d.get("description", "")), "hashtags": hashtags,
        "tags": [str(t) for t in d.get("tags") or []][:15], "pinned_comment": str(d.get("pinned_comment", ""))[:220],
        "key_facts": [], "scenes": scenes,
        "script": "On-screen ranking of funny animal clips (original sound, no voiceover): "
                  + "; ".join(f"#{5 - k} {c['desc']}" for k, c in enumerate(clips)),
    }
