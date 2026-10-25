#!/usr/bin/env python3
"""Free offline voiceover with Kokoro (runs inside the Claude sandbox, no API, no credits).

usage: python3 scripts/tts.py script.txt outdir [--voice am_michael] [--speed 1.0]

script.txt holds one phrase per line (split long sentences at commas/colons where the narrator breathes).
Each phrase is spoken separately and joined with a short pause, so the phrase timings in phrases.json are
exact; word times inside a phrase are estimated by character position.
Writes outdir/voice.wav, outdir/phrases.json, outdir/captions.srt.

Model files (~120 MB) download once from the kokoro-onnx GitHub release into ~/.cache/kokoro.
Good narrator voices: am_michael (default, warm male), am_fenrir, bm_george (British), af_heart, af_bella.
"""
import json
import os
import re
import subprocess
import sys
import urllib.request

import numpy as np

REL = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/"
CACHE = os.path.expanduser("~/.cache/kokoro")
FILES = ("kokoro-v1.0.int8.onnx", "voices-v1.0.bin")


def ensure_model():
    os.makedirs(CACHE, exist_ok=True)
    for f in FILES:
        p = os.path.join(CACHE, f)
        if not os.path.exists(p) or os.path.getsize(p) < 1_000_000:
            print("downloading", f, file=sys.stderr)
            urllib.request.urlretrieve(REL + f, p + ".part")
            os.replace(p + ".part", p)
    return [os.path.join(CACHE, f) for f in FILES]


def srt_time(t):
    ms = int(round(t * 1000))
    return f"{ms // 3600000:02d}:{ms // 60000 % 60:02d}:{ms // 1000 % 60:02d},{ms % 1000:03d}"


def main():
    args = sys.argv[1:]
    opt = lambda k, d: args[args.index("--" + k) + 1] if "--" + k in args else d  # noqa: E731
    script, out = args[0], args[1]
    voice, speed = opt("voice", "am_michael"), float(opt("speed", "1.0"))
    try:
        from kokoro_onnx import Kokoro
    except ImportError:
        subprocess.run([sys.executable, "-m", "pip", "install", "-q", "kokoro-onnx", "soundfile",
                        "--break-system-packages"], check=True)
        from kokoro_onnx import Kokoro
    import soundfile as sf

    os.makedirs(out, exist_ok=True)
    k = Kokoro(*ensure_model())
    phrases = [ln.strip() for ln in open(script, encoding="utf-8") if ln.strip()]
    sr, t, chunks, rows = 24000, 0.25, [], []
    chunks.append(np.zeros(int(0.25 * sr), dtype=np.float32))
    for i, p in enumerate(phrases):
        audio, sr = k.create(p, voice=voice, speed=speed, lang="en-us")
        audio = np.asarray(audio, dtype=np.float32)
        nz = np.where(np.abs(audio) > 0.01)[0]  # trim the model's own leading/trailing silence
        if len(nz):
            audio = audio[max(0, nz[0] - int(0.02 * sr)): nz[-1] + int(0.05 * sr)]
        dur = len(audio) / sr
        words, total, pos, wrow = p.split(), 0, 0, []
        total = sum(len(re.sub(r"\W", "", w)) for w in words) or 1
        for w in words:
            n = len(re.sub(r"\W", "", w))
            wrow.append([re.sub(r"\W", "", w).lower(), round(t + dur * pos / total, 2)])
            pos += n
        rows.append({"s": round(t, 2), "e": round(t + dur, 2), "text": p, "words": wrow})
        chunks.append(audio)
        t += dur
        last = i == len(phrases) - 1
        gap = 0.0 if last else (0.55 if re.search(r"[.!?]$", p) else 0.3)
        chunks.append(np.zeros(int(gap * sr), dtype=np.float32))
        t += gap
    chunks.append(np.zeros(int(0.6 * sr), dtype=np.float32))
    sf.write(os.path.join(out, "voice.wav"), np.concatenate(chunks), sr)
    json.dump(rows, open(os.path.join(out, "phrases.json"), "w"), indent=1)
    with open(os.path.join(out, "captions.srt"), "w", encoding="utf-8") as f:
        for i, r in enumerate(rows, 1):
            f.write(f"{i}\n{srt_time(r['s'])} --> {srt_time(r['e'])}\n{r['text']}\n\n")
    print(f"voice {t:.1f}s, {len(rows)} phrases, {sum(len(p.split()) for p in phrases)} words -> {out}", file=sys.stderr)


if __name__ == "__main__":
    main()
