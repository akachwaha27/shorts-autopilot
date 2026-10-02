"""Gemini (free tier) helper that always returns parsed JSON."""
import json
import re
import time

import requests

from . import config

URL = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"


def ask_json(prompt, temperature=0.7, retries=3):
    body = {
        "contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": temperature, "responseMimeType": "application/json"},
    }
    last = None
    for attempt in range(retries):
        try:
            r = requests.post(URL.format(model=config.GEMINI_MODEL),
                              params={"key": config.GEMINI_API_KEY}, json=body, timeout=120)
            if r.status_code == 429:
                time.sleep(30 * (attempt + 1))
                continue
            r.raise_for_status()
            text = r.json()["candidates"][0]["content"]["parts"][0]["text"]
            text = re.sub(r"^```(?:json)?|```$", "", text.strip()).strip()
            return json.loads(text)
        except Exception as e:  # noqa: BLE001
            last = e
            time.sleep(5)
    raise RuntimeError(f"Gemini call failed: {last}")
