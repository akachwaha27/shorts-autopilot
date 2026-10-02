"""Gemini (free tier) helper that always returns parsed JSON.

Google retires model names regularly, so if the configured model 404s we
ask the API which models exist and switch to the newest suitable "flash" one.
"""
import json
import re
import time

import requests

from . import config

BASE = "https://generativelanguage.googleapis.com/v1beta"
_model = None
SKIP = ("lite", "image", "tts", "live", "audio", "embedding", "thinking", "exp", "preview", "8b")


def _version(name):
    nums = re.findall(r"\d+(?:\.\d+)?", name)
    return float(nums[0]) if nums else 0.0


def pick_model():
    r = requests.get(f"{BASE}/models", params={"key": config.GEMINI_API_KEY, "pageSize": 200}, timeout=30)
    r.raise_for_status()
    names = [m["name"].split("/", 1)[1] for m in r.json().get("models", [])
             if "generateContent" in m.get("supportedGenerationMethods", [])]
    flash = [n for n in names if n.startswith("gemini") and "flash" in n and not any(s in n for s in SKIP)]
    if not flash:  # fall back to anything gemini that isn't a special-purpose model
        flash = [n for n in names if n.startswith("gemini") and not any(s in n for s in SKIP[1:])]
    if not flash:
        raise RuntimeError(f"No usable Gemini model found. Available: {names[:20]}")
    # newest version first; prefer the plain alias (e.g. gemini-3.5-flash) over dated variants
    flash.sort(key=lambda n: (_version(n), -len(n)), reverse=True)
    print("Gemini model auto-selected:", flash[0])
    return flash[0]


def _model_name():
    global _model
    if _model is None:
        _model = config.GEMINI_MODEL or pick_model()
    return _model


def ask_json(prompt, temperature=0.7, retries=3):
    global _model
    body = {
        "contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": temperature, "responseMimeType": "application/json"},
    }
    last = None
    for attempt in range(retries):
        try:
            r = requests.post(f"{BASE}/models/{_model_name()}:generateContent",
                              params={"key": config.GEMINI_API_KEY}, json=body, timeout=120)
            if r.status_code == 404:  # model retired or renamed -> discover a current one
                _model = pick_model()
                continue
            if r.status_code == 429:
                time.sleep(30 * (attempt + 1))
                continue
            if r.status_code >= 400:
                raise RuntimeError(f"HTTP {r.status_code}: {r.text[:300]}")
            text = r.json()["candidates"][0]["content"]["parts"][0]["text"]
            text = re.sub(r"^```(?:json)?|```$", "", text.strip()).strip()
            return json.loads(text)
        except Exception as e:  # noqa: BLE001
            last = e
            time.sleep(5)
    raise RuntimeError(f"Gemini call failed: {last}")
