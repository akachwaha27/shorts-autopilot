"""AI video clips via fal.ai (default model: Google Veo 3.1 Lite, vertical 9:16, no audio).

Used only where stock footage can't show what the line is about (e.g. "toe wrestling", "four teenagers
find a cave in 1940"), and for story videos if FAL_FOR_STORIES is on. Every clip is credited as
AI-generated, and uploads already carry YouTube's altered/synthetic content flag.
Spending is capped per video (FAL_MAX_CLIPS_PER_VIDEO) and per day (FAL_DAILY_BUDGET_USD).
"""
import json
import os
import time

import requests

from . import config, state

USAGE = os.path.join("state", "fal_usage.json")


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
    u = _usage()
    day = state.now().date().isoformat()
    u = {d: v for d, v in u.items() if d >= day[:8]}  # keep this month only
    u[day] = round(float(u.get(day, 0.0)) + usd, 3)
    os.makedirs(os.path.dirname(USAGE), exist_ok=True)
    with open(USAGE, "w") as f:
        json.dump(u, f, indent=1)


def _seconds_option(want):
    """Veo 3.1 Lite takes 4s / 6s / 8s."""
    for s in (4, 6, 8):
        if want <= s:
            return s
    return 8


def generate(prompt, seconds, out_path):
    """Returns {"kind": "video", "path", "credit"} or None (no key, over budget, or the model refused)."""
    if not available():
        return None
    secs = _seconds_option(seconds)
    est = secs * config.FAL_PRICE_PER_SECOND
    if spent_today() + est > config.FAL_DAILY_BUDGET_USD:
        print(f"fal.ai: daily budget ${config.FAL_DAILY_BUDGET_USD:.2f} reached; skipping AI clip")
        return None
    model = config.FAL_VIDEO_MODEL
    headers = {"Authorization": f"Key {config.FAL_KEY}", "Content-Type": "application/json"}
    body = {"prompt": prompt[:1800], "aspect_ratio": "9:16", "duration": f"{secs}s", "resolution": "720p",
            "generate_audio": False,
            "negative_prompt": "text, captions, subtitles, watermark, logo, cartoon, deformed hands, blurry"}
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
                "credit": f"AI-generated video clips ({model.split('/')[-2] if '/' in model else model} via fal.ai)"}
    except Exception as e:  # noqa: BLE001  refused prompt, no credit, network...
        print(f"fal.ai clip failed: {str(e)[:200]}")
        return None


def prompt_for(scene, subject, style=""):
    """A literal, filmable description of the shot (Veo follows plain visual descriptions best)."""
    return (f"Vertical 9:16 realistic video. {subject}. Context: {scene.get('text', '')[:220]} "
            f"{('Style: ' + style + '.') if style else ''} Natural, believable motion, documentary or "
            "stock-footage look, family-friendly. No text, captions, logos, brand names or famous people.")
