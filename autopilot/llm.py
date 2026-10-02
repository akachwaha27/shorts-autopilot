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
    usable = [n for n in names if not any(s in n for s in SKIP)]
    flash = [n for n in usable if n.startswith("gemini") and "flash" in n and "lite" not in n]
    lite = [n for n in usable if n.startswith("gemini") and "flash" in n and "lite" in n]
    gemma = [n for n in usable if n.startswith("gemma") and "it" in n.split("-")]  # instruction-tuned open models
    order = lambda xs: sorted(xs, key=lambda n: (_version(n), -len(n)), reverse=True)  # noqa: E731
    # newest 3 Flash, newest 2 Lite, biggest Gemma: different capacity pools, so one is usually free
    gemma = sorted(gemma, key=lambda n: (_version(n), max([int(x[:-1]) for x in re.findall(r"\d+b", n)] or [0])), reverse=True)
    models = order(flash)[:3] + order(lite)[:2] + gemma[:1]
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


def _parse(text):
    text = re.sub(r"^```(?:json)?|```$", "", text.strip()).strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        m = re.search(r"\{.*\}", text, re.S)  # models without JSON mode may add chatter
        if m:
            return json.loads(m.group(0))
        raise


def ask_json(prompt, temperature=0.7, passes=2):
    """Try each candidate model once per pass; wait between passes."""
    global _idx
    models = _models()
    last = None
    for p in range(passes):
        for _ in range(len(models)):
            model = models[_idx]
            gen = {"temperature": temperature}
            if model.startswith("gemini"):
                gen["responseMimeType"] = "application/json"
            body = {"contents": [{"role": "user", "parts": [{"text": prompt}]}], "generationConfig": gen}
            try:
                r = requests.post(f"{BASE}/models/{model}:generateContent",
                                  params={"key": config.GEMINI_API_KEY}, json=body, timeout=180)
                if r.status_code >= 400:
                    raise RuntimeError(f"HTTP {r.status_code} from {model}: {r.text[:160]}")
                return _parse(r.json()["candidates"][0]["content"]["parts"][0]["text"])
            except Exception as e:  # noqa: BLE001  (busy, rate-limited, retired, empty or garbled answer)
                last = e
                print(f"Gemini {model} failed: {str(e)[:120]}")
                _idx = (_idx + 1) % len(models)
                time.sleep(8)
        if p < passes - 1:
            print("All models busy; waiting 90s before another pass")
            time.sleep(90)
    raise RuntimeError(f"All Gemini models busy right now ({len(models)} tried x{passes}). Last: {last}")
