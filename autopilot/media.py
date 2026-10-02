"""Voiceover, visuals and final render (all free tools: edge-tts, Pexels, Cloudflare AI, FFmpeg)."""
import asyncio
import base64
import json
import os
import random
import subprocess

import edge_tts
import requests

from . import config

W, H, FPS = config.WIDTH, config.HEIGHT, config.FPS


def run(cmd):
    p = subprocess.run(cmd, capture_output=True, text=True)
    if p.returncode != 0:
        raise RuntimeError(f"Command failed: {' '.join(cmd[:6])}...\n{p.stderr[-1500:]}")
    return p.stdout


def duration(path):
    return float(run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                      "-of", "default=nw=1:nk=1", path]).strip())


# ---------------- Voice ----------------
async def _tts(text, mp3, words):
    com = edge_tts.Communicate(text, config.VOICE, rate="+8%", boundary="WordBoundary")
    with open(mp3, "wb") as f:
        async for chunk in com.stream():
            if chunk["type"] == "audio":
                f.write(chunk["data"])
            elif chunk["type"] == "WordBoundary":
                words.append({"start": chunk["offset"] / 1e7,
                              "end": (chunk["offset"] + chunk["duration"]) / 1e7,
                              "word": chunk["text"]})


def voiceover(text, out_dir):
    mp3 = os.path.join(out_dir, "voice.mp3")
    words = []
    asyncio.run(_tts(text, mp3, words))
    return mp3, words


# ---------------- Captions ----------------
def _ts(t):
    h, rem = divmod(max(t, 0), 3600)
    m, s = divmod(rem, 60)
    return f"{int(h)}:{int(m):02d}:{s:05.2f}"


def captions(words, path, group=3):
    head = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {W}
PlayResY: {H}

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,DejaVu Sans,86,&H00FFFFFF,&H00FFFFFF,&H00000000,&H64000000,1,0,0,0,100,100,0,0,1,6,3,2,80,80,620,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    lines = []
    for i in range(0, len(words), group):
        chunk = words[i:i + group]
        end = words[i + group]["start"] if i + group < len(words) else chunk[-1]["end"] + 0.3
        text = " ".join(w["word"] for w in chunk).upper().replace("{", "").replace("}", "")
        lines.append(f"Dialogue: 0,{_ts(chunk[0]['start'])},{_ts(end)},Default,,0,0,0,,{text}")
    with open(path, "w", encoding="utf-8") as f:
        f.write(head + "\n".join(lines) + "\n")
    return path


# ---------------- Visuals ----------------
def _pexels(path, params):
    r = requests.get(f"https://api.pexels.com/{path}", params=params, timeout=30,
                     headers={"Authorization": config.PEXELS_API_KEY})
    r.raise_for_status()
    return r.json()


def _download(url, path):
    with requests.get(url, stream=True, timeout=120) as r:
        r.raise_for_status()
        with open(path, "wb") as f:
            for c in r.iter_content(1 << 20):
                f.write(c)
    return path


def pexels_video(query, path, used):
    data = _pexels("videos/search", {"query": query, "orientation": "portrait", "size": "medium", "per_page": 10})
    for v in data.get("videos", []):
        if v["id"] in used:
            continue
        files = [f for f in v["video_files"] if f.get("height") and f["height"] >= 1280 and f["width"] < f["height"]]
        if not files:
            continue
        best = min(files, key=lambda f: f["height"])
        used.add(v["id"])
        _download(best["link"], path)
        return {"kind": "video", "path": path, "credit": f'{v["user"]["name"]} (Pexels) {v["url"]}'}
    return None


def pexels_photo(query, path, used):
    data = _pexels("v1/search", {"query": query, "orientation": "portrait", "per_page": 10})
    for p in data.get("photos", []):
        if p["id"] in used:
            continue
        used.add(p["id"])
        _download(p["src"]["large2x"], path)
        return {"kind": "image", "path": path, "credit": f'{p["photographer"]} (Pexels) {p["url"]}'}
    return None


def _pixabay(path, params):
    r = requests.get(f"https://pixabay.com/api/{path}", timeout=30,
                     params={"key": config.PIXABAY_API_KEY, "safesearch": "true", "per_page": 20, **params})
    r.raise_for_status()
    return r.json()


def pixabay_video(query, path, used):
    data = _pixabay("videos/", {"q": query[:100]})
    hits = sorted(data.get("hits", []), key=lambda h: h["videos"].get("large", {}).get("height", 0) < h["videos"].get("large", {}).get("width", 1))
    for v in hits:
        key = f"pxb{v['id']}"
        if key in used:
            continue
        files = [f for f in (v["videos"].get(s) for s in ("medium", "large", "small")) if f and f.get("url")]
        if not files:
            continue
        used.add(key)
        _download(files[0]["url"], path)
        return {"kind": "video", "path": path, "credit": f'{v["user"]} (Pixabay) {v["pageURL"]}'}
    return None


def pixabay_photo(query, path, used):
    data = _pixabay("", {"q": query[:100], "image_type": "photo", "orientation": "vertical"})
    for p in data.get("hits", []):
        key = f"pxb{p['id']}"
        if key in used:
            continue
        used.add(key)
        _download(p["largeImageURL"], path)
        return {"kind": "image", "path": path, "credit": f'{p["user"]} (Pixabay) {p["pageURL"]}'}
    return None


def ai_image(prompt, path):
    url = (f"https://api.cloudflare.com/client/v4/accounts/{config.CF_ACCOUNT_ID}"
           "/ai/run/@cf/black-forest-labs/flux-1-schnell")
    r = requests.post(url, headers={"Authorization": f"Bearer {config.CF_API_TOKEN}"}, timeout=120,
                      json={"prompt": prompt + ", vertical composition, cinematic, high detail, no text", "steps": 6})
    r.raise_for_status()
    with open(path, "wb") as f:
        f.write(base64.b64decode(r.json()["result"]["image"]))
    return {"kind": "image", "path": path, "credit": "AI image (FLUX.1-schnell via Cloudflare Workers AI)"}


def get_visual(scene, i, out_dir, used):
    use_ai = config.CF_ACCOUNT_ID and config.CF_API_TOKEN and (
        config.VISUALS == "ai" or (config.VISUALS == "mixed" and i % 2 == 1))
    attempts = []
    if use_ai:
        attempts.append(lambda: ai_image(scene["image_prompt"], f"{out_dir}/s{i}.png"))
    q = scene["stock_query"]
    if config.PEXELS_API_KEY:
        attempts += [lambda: pexels_video(q, f"{out_dir}/s{i}.mp4", used),
                     lambda: pexels_photo(q, f"{out_dir}/s{i}.jpg", used)]
    if config.PIXABAY_API_KEY:
        attempts += [lambda: pixabay_video(q, f"{out_dir}/s{i}.mp4", used),
                     lambda: pixabay_photo(q, f"{out_dir}/s{i}.jpg", used),
                     lambda: pixabay_video(q.split()[0], f"{out_dir}/s{i}.mp4", used)]
    if config.PEXELS_API_KEY:
        attempts.append(lambda: pexels_video(q.split()[0], f"{out_dir}/s{i}.mp4", used))
    if config.CF_ACCOUNT_ID and config.CF_API_TOKEN and not use_ai:
        attempts.append(lambda: ai_image(scene["image_prompt"], f"{out_dir}/s{i}.png"))
    for fn in attempts:
        try:
            res = fn()
            if res:
                return res
        except Exception as e:  # noqa: BLE001
            print(f"  visual attempt failed for scene {i}: {e}")
    return {"kind": "color", "path": None, "credit": None}


# ---------------- Render ----------------
FILL = f"scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},setsar=1"


def render_scene(vis, dur, out):
    common = ["-t", f"{dur:.3f}", "-r", str(FPS), "-an", "-c:v", "libx264", "-preset", "veryfast",
              "-crf", "22", "-pix_fmt", "yuv420p", out]
    if vis["kind"] == "video":
        run(["ffmpeg", "-y", "-stream_loop", "-1", "-i", vis["path"], "-vf", f"{FILL},fps={FPS}"] + common)
    elif vis["kind"] == "image":
        frames = int(dur * FPS) + 1
        zin = random.choice([True, False])
        z = "min(1+0.0009*on,1.15)" if zin else "max(1.15-0.0009*on,1)"
        vf = (f"scale={W * 2}:{H * 2}:force_original_aspect_ratio=increase,crop={W * 2}:{H * 2},"
              f"zoompan=z='{z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={W}x{H}:fps={FPS},setsar=1")
        run(["ffmpeg", "-y", "-loop", "1", "-i", vis["path"], "-vf", vf] + common)
    else:
        run(["ffmpeg", "-y", "-f", "lavfi", "-i", f"color=c=0x1d2b53:s={W}x{H}:r={FPS}"] + common)
    return out


def pick_music():
    folder = "assets/music"
    tracks = [f for f in os.listdir(folder) if f.lower().endswith((".mp3", ".m4a", ".wav"))] if os.path.isdir(folder) else []
    return os.path.join(folder, random.choice(tracks)) if tracks else None


def make_video(pkg, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    voice, words = voiceover(pkg["script"], out_dir)
    total = duration(voice) + 0.6
    ass = captions(words, os.path.join(out_dir, "captions.ass"))

    scenes = pkg["scenes"]
    counts = [max(len(s["text"].split()), 1) for s in scenes]
    durs = [total * c / sum(counts) for c in counts]

    used, credits, parts = set(), [], []
    for i, (scene, d) in enumerate(zip(scenes, durs)):
        vis = get_visual(scene, i, out_dir, used)
        if vis["credit"] and vis["credit"] not in credits:
            credits.append(vis["credit"])
        parts.append(render_scene(vis, d, os.path.join(out_dir, f"part{i:02d}.mp4")))

    concat = os.path.join(out_dir, "parts.txt")
    with open(concat, "w") as f:
        f.writelines(f"file '{os.path.abspath(p)}'\n" for p in parts)

    final = os.path.join(out_dir, "final.mp4")
    music = pick_music()
    cmd = ["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", concat, "-i", voice]
    if music:
        cmd += ["-stream_loop", "-1", "-i", music, "-filter_complex",
                "[2:a]volume=0.10[m];[1:a][m]amix=inputs=2:duration=first:dropout_transition=0[a]",
                "-map", "0:v", "-map", "[a]"]
        credits.append(f"Music: {os.path.basename(music)} (royalty-free, see assets/music/LICENSES.txt)")
    else:
        cmd += ["-map", "0:v", "-map", "1:a"]
    cmd += ["-vf", f"ass={ass}", "-c:v", "libx264", "-preset", "medium", "-crf", "21", "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "160k", "-ar", "44100", "-t", f"{total:.2f}", "-movflags", "+faststart", final]
    run(cmd)

    stock = [c for c in credits if "(Pexels)" in c or "(Pixabay)" in c]
    other = [c for c in credits if c not in stock]
    credit_lines = (["Stock footage/photos (Pexels/Pixabay Content License): " + "; ".join(stock)] if stock else []) + other
    with open(os.path.join(out_dir, "credits.json"), "w") as f:
        json.dump(credit_lines, f)
    return final, credit_lines
