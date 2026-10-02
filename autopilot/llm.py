"""Gemini (free tier) helper that always returns parsed JSON.

Resilience:
- If the configured model 404s (retired/renamed), discover current models.
- If a model is overloaded (503/500) or rate-limited (429), wait and retry,
  then fall back to the next available model (newer Flash first, then Lite).
"""
import json
import re
import time

import requests

from . import config

BASE = "https://generativelanguage.googleapis.com/v1beta"
SKIP = ("image", "tts", "live", "audio", "embedding", "thinking", "exp", "preview", "8b")
_candidates = None  # ordered list of models to try
_idx = 0


def _version(name):
    nums = re.findall(r"\d+(?:\.\d+)?", name)
    return float(nums[0]) if nums else 0.0


def list_models():
    r = requests.get(f"{BASE}/models", params={"key": config.GEMINI_API_KEY, "pageSize": 200}, timeout=30)
    r.raise_for_status()
    names = [m["name"].split("/", 1)[1] for m in r.json().get("models", [])
             if "generateContent" in m.get("supportedGenerationMethods", [])]
    usable = [n for n in names if n.startswith("gemini") and not any(s in n for s in SKIP)]
    flash = [n for n in usable if "flash" in n and "lite" not in n]
    lite = [n for n in usable if "flash" in n and "lite" in n]
    order = lambda xs: sorted(xs, key=lambda n: (_version(n), -len(n)), reverse=True)  # noqa: E731
    models = order(flash) + order(lite)
    if not models:
        raise RuntimeError(f"No usable Gemini model found. Available: {names[:20]}")
    return models


def _models():
    global _candidates
    if _candidates is None:
        try:
            found = list_models()
        except Exception as e:  # noqa: BLE001
            print("Model listing failed, using defaults:", e)
            found = ["gemini-2.5-flash", "gemini-2.5-flash-lite"]
        pinned = [config.GEMINI_MODEL] if config.GEMINI_MODEL else []
        _candidates = pinned + [m for m in found if m not in pinned]
        print("Gemini model order:", _candidates[:4])
    return _candidates


def _next_model(reason):
    global _idx
    models = _models()
    _idx = (_idx + 1) % len(models)
    print(f"Switching Gemini model -> {models[_idx]} ({reason})")


def ask_json(prompt, temperature=0.7, attempts=8):
    body = {
        "contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": temperature, "responseMimeType": "application/json"},
    }
    last, busy_streak = None, 0
    for attempt in range(attempts):
        model = _models()[_idx]
        try:
            r = requests.post(f"{BASE}/models/{model}:generateContent",
                              params={"key": config.GEMINI_API_KEY}, json=body, timeout=180)
            if r.status_code == 404:
                _next_model("not found")
                continue
            if r.status_code in (429, 500, 502, 503, 504):
                last = RuntimeError(f"HTTP {r.status_code} from {model}: {r.text[:200]}")
                busy_streak += 1
                if busy_streak >= 2:  # this model is struggling; try another one
                    _next_model(f"HTTP {r.status_code}")
                    busy_streak = 0
                time.sleep(min(15 * (attempt + 1), 90))
                continue
            if r.status_code >= 400:
                raise RuntimeError(f"HTTP {r.status_code}: {r.text[:300]}")
            data = r.json()
            text = data["candidates"][0]["content"]["parts"][0]["text"]
            text = re.sub(r"^```(?:json)?|```$", "", text.strip()).strip()
            return json.loads(text)
        except (KeyError, IndexError, json.JSONDecodeError, requests.RequestException) as e:
            last = e  # empty/blocked/garbled answer or network blip: just retry
            time.sleep(5)
    raise RuntimeError(f"Gemini still unavailable after {attempts} tries: {last}")
