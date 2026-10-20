"""AI video clips via fal.ai (default model: MiniMax H3 Max Turbo, vertical 9:16; clip audio is dropped).

Also works with ByteDance Seedance (FAL_VIDEO_MODEL=bytedance/seedance-2.5/us/text-to-video) and Google Veo 3.1
Lite (fal-ai/veo3.1/lite): each family takes different duration formats and options, so the request is built
per model family.

Used only where stock footage can't show what the line is about (e.g. "toe wrestling", "four teenagers
find a cave in 1940"), and for story videos if FAL_FOR_STORIES is on. Every clip is credited as
AI-generated, and uploads already carry YouTube's altered/synthetic content flag.
Spending is capped per video (FAL_MAX_CLIPS_PER_VIDEO) and per day (FAL_DAILY_BUDGET_USD).
"""
import json
import os
import threading
import time
from concurrent.futures import ThreadPoolExecutor

import requests

from . import config, state

USAGE = os.path.join("state", "fal_usage.json")
_LOCK = threading.Lock()  # clips are generated in parallel; keep the spend log consistent


def available():
    return bool(config.FAL_KEY)


def _usage():
    try:
        with open(USAGE) as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


def spent_today():
    return float(_usage().get(state.now().date().isoformat(), 0.0))


def _add_cost(usd):
    with _LOCK:
        _add_cost_locked(usd)


def _add_cost_locked(usd):
    u = _usage()
    day = state.now().date().isoformat()
    u = {d: v for d, v in u.items() if d >= day[:8]}  # keep this month only
    u[day] = round(float(u.get(day, 0.0)) + usd, 3)
    os.makedirs(os.path.dirname(USAGE), exist_ok=True)
    with open(USAGE, "w") as f:
        json.dump(u, f, indent=1)


def _is_seedance(model):
    return "seedance" in (model or "").lower()


def _is_minimax(model):
    return "minimax" in (model or "").lower()


def _resolution(model):
    r = (config.FAL_RESOLUTION or "").strip()
    if _is_minimax(model):  # MiniMax takes 480P / 768P / 1080P
        return {"480p": "480P", "720p": "768P", "768p": "768P", "1080p": "1080P"}.get(r.lower(), "768P")
    return r.lower() or ("480p" if _is_seedance(model) else "720p")


def _seconds_option(want, model=None):
    """Veo 3.1 Lite takes 4s / 6s / 8s; Seedance 2.5 takes any whole second from 4 to 30; MiniMax 1-15 s."""
    if _is_minimax(model or config.FAL_VIDEO_MODEL):
        return max(2, min(15, int(-(-want // 1))))
    if _is_seedance(model or config.FAL_VIDEO_MODEL):
        return max(4, min(30, int(-(-want // 1))))  # round up to a whole second
    for s in (4, 6, 8):
        if want <= s:
            return s
    return 8


_PIXELS = {"480p": 480 * 854, "720p": 720 * 1280, "1080p": 1080 * 1920}


def price_per_second(model=None):
    """USD per clip-second, for the daily budget. Set a bit high on purpose."""
    model = model or config.FAL_VIDEO_MODEL
    if config.FAL_PRICE_PER_SECOND:
        return config.FAL_PRICE_PER_SECOND
    if _is_minimax(model):  # fal list price for H3 Max Turbo, Oct 2026 (set FAL_PRICE_PER_SECOND if it changes)
        return 0.0325 if "1080" in _resolution(model) else 0.01625
    if _is_seedance(model):  # fal bills Seedance by video tokens = height x width x fps x seconds / 1024
        tokens = _PIXELS.get(_resolution(model), _PIXELS["720p"]) * 24 / 1024
        return round(tokens / 1000 * config.FAL_SEEDANCE_PRICE_PER_1K_TOKENS, 3)
    return 0.05


def _body(prompt, secs, model):
    if _is_minimax(model):
        return {"prompt": prompt[:1800], "aspect_ratio": "9:16", "duration": secs,
                "resolution": _resolution(model), "prompt_expansion_mode": "balanced"}
    if _is_seedance(model):  # no negative_prompt field: the "no text/logos" rules live in the prompt
        return {"prompt": prompt[:1800], "aspect_ratio": "9:16", "duration": str(secs),
                "resolution": _resolution(model), "generate_audio": False}
    return {"prompt": prompt[:1800], "aspect_ratio": "9:16", "duration": f"{secs}s", "resolution": "720p",
            "generate_audio": False,
            "negative_prompt": "text, captions, subtitles, watermark, logo, cartoon, deformed hands, blurry"}


def model_label(model=None):
    """'bytedance/seedance-2.5/us/text-to-video' -> 'seedance-2.5'; 'fal-ai/veo3.1/lite' -> 'veo3.1'."""
    parts = [p for p in (model or config.FAL_VIDEO_MODEL).split("/") if p]
    for p in parts:
        if p.startswith(("seedance", "veo", "kling", "wan", "sora", "h3")):
            return p
    return parts[-2] if len(parts) > 1 else (parts[0] if parts else "fal.ai")


def generate(prompt, seconds, out_path):
    """Returns {"kind": "video", "path", "credit"} or None (no key, over budget, or the model refused)."""
    if not available():
        return None
    model = config.FAL_VIDEO_MODEL
    secs = _seconds_option(seconds, model)
    est = secs * price_per_second(model)
    if spent_today() + est > config.FAL_DAILY_BUDGET_USD:
        print(f"fal.ai: daily budget ${config.FAL_DAILY_BUDGET_USD:.2f} reached; skipping AI clip")
        return None
    headers = {"Authorization": f"Key {config.FAL_KEY}", "Content-Type": "application/json"}
    body = _body(prompt, secs, model)
    try:
        r = requests.post(f"https://queue.fal.run/{model}", headers=headers, json=body, timeout=60)
        r.raise_for_status()
        job = r.json()
        status_url = job.get("status_url") or f"https://queue.fal.run/{model}/requests/{job['request_id']}/status"
        result_url = job.get("response_url") or f"https://queue.fal.run/{model}/requests/{job['request_id']}"
        deadline = time.time() + 600
        while time.time() < deadline:
            st = requests.get(status_url, headers=headers, timeout=30).json()
            if st.get("status") == "COMPLETED":
                break
            if st.get("status") in ("FAILED", "ERROR", "CANCELLED"):
                raise RuntimeError(f"job {st.get('status')}: {str(st)[:150]}")
            time.sleep(6)
        else:
            raise RuntimeError("timed out after 10 minutes")
        res = requests.get(result_url, headers=headers, timeout=60).json()
        url = (res.get("video") or {}).get("url")
        if not url:
            raise RuntimeError(f"no video in result: {str(res)[:150]}")
        from .media import _download
        _download(url, out_path)
        _add_cost(est)
        print(f"fal.ai clip ({secs}s, ~${est:.2f}): {prompt[:80]}")
        return {"kind": "video", "path": out_path, "checked": True, "ai": True,
                "credit": f"AI-generated video clips ({model_label(model)} via fal.ai)"}
    except Exception as e:  # noqa: BLE001  refused prompt, no credit, network...
        print(f"fal.ai clip failed: {str(e)[:200]}")
        return None


ANIMATED_STYLE = ("Vertical 9:16 educational 3D animated explainer shot. Stylized clay-like 3D render with soft global "
                  "illumination, warm saturated colors, clean simple shapes, smooth confident camera moves, clear "
                  "cutaway cross-section views when showing how something works inside. Family-friendly. No text, "
                  "captions, subtitles, numbers, watermarks, logos, brand names or real people.")


def animated_prompt(scene, pkg):
    """One shot of a 3D animated explainer. Every shot repeats the same style block so the video looks like one piece."""
    shot = str(scene.get("shot") or scene.get("image_prompt") or scene.get("text", "")).strip()
    return (f"{ANIMATED_STYLE} Topic: {pkg.get('title', '')[:90]}. Shot: {shot[:600]} "
            f"(this shot illustrates the line: \"{scene.get('text', '')[:200]}\").")


def estimate(durations, model=None):
    """USD for one AI clip per scene of these lengths (each rounded up to what the model will bill)."""
    return round(sum(_seconds_option(d, model) for d in durations) * price_per_second(model), 2)


def generate_many(jobs, workers=10):
    """jobs: [(prompt, seconds, out_path)]. Submits them all to fal at once and waits for every one, so a
    9-shot video takes about as long as its slowest shot instead of the sum. Returns results in order (None = failed)."""
    if not jobs:
        return []
    with ThreadPoolExecutor(max_workers=min(workers, len(jobs))) as pool:
        return list(pool.map(lambda j: generate(*j), jobs))


def prompt_for(scene, subject, style=""):
    """A literal, filmable description of the shot (Veo and Seedance follow plain visual descriptions best)."""
    return (f"Vertical 9:16 realistic video. {subject}. Context: {scene.get('text', '')[:220]} "
            f"{('Style: ' + style + '.') if style else ''} Natural, believable motion, documentary or "
            "stock-footage look, family-friendly, sharp focus, natural hands. No text, captions, subtitles, "
            "watermarks, logos, brand names or famous people.")
