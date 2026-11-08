#!/usr/bin/env python3
"""Free offline voiceover with Kokoro (runs inside the Claude sandbox, no API, no credits).

usage: python3 scripts/tts.py script.txt outdir [--voice am_michael] [--speed 1.0] [--mode natural|phrase] [--dry]

script.txt holds one phrase per line (split long sentences at commas/colons where the narrator breathes).
Writes outdir/voice.wav, outdir/phrases.json, outdir/captions.srt.

AK_ --mode natural (default, Nov 8): each whole SENTENCE is spoken in one go, so the voice carries its intonation
across commas like a person talking instead of reading a list. Phrase boundaries inside a sentence are found from
the pauses Kokoro leaves at commas (snapped to the nearest real pause, else estimated by character position), so
phrases.json stays accurate to ~0.1 s. Sentence gaps vary a little, the speed drifts +-2 % per sentence, and the
finished track gets light warmth, presence and room tone (--dry turns that off). Uses the full fp32 model.
--mode phrase: the old behaviour (every line spoken alone, fixed gaps, exact phrase times, int8 model).

Model files download once from the kokoro-onnx GitHub release into ~/.cache/kokoro.
Most natural voices (Kokoro's own grading): af_heart, af_bella (female, US); am_michael, am_fenrir, am_puck (male, US);
bf_emma, bf_isabella (female, UK); bm_george, bm_fable (male, UK). Speed 1.0-1.08 sounds most natural.
"""
import json
import os
import random
import re
import subprocess
import sys
import urllib.request

import numpy as np

REL = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/"
CACHE = os.path.expanduser("~/.cache/kokoro")
SR = 24000


def ensure_model(fp32):
    os.makedirs(CACHE, exist_ok=True)
    names = ("kokoro-v1.0.onnx" if fp32 else "kokoro-v1.0.int8.onnx", "voices-v1.0.bin")
    for f in names:
        p = os.path.join(CACHE, f)
        lemo = os.path.join("/home/claude/lemo-opuscar/core/tts", f)  # reuse the Lemo library's copy when present
        if not os.path.lexists(p) and os.path.exists(lemo):
            os.symlink(lemo, p)
        if not os.path.exists(p) or os.path.getsize(p) < 1_000_000:
            print("downloading", f, file=sys.stderr)
            urllib.request.urlretrieve(REL + f, p + ".part")
            os.replace(p + ".part", p)
    return [os.path.join(CACHE, f) for f in names]


def srt_time(t):
    ms = int(round(t * 1000))
    return f"{ms // 3600000:02d}:{ms // 60000 % 60:02d}:{ms // 1000 % 60:02d},{ms % 1000:03d}"


def trim(audio, thr=0.01):
    nz = np.where(np.abs(audio) > thr)[0]
    return audio[max(0, nz[0] - int(0.02 * SR)): nz[-1] + int(0.06 * SR)] if len(nz) else audio


def clean(w):
    return re.sub(r"[^\w']", "", w).replace("'", "").lower()


def word_times(text, t0, dur):
    words = text.split()
    total = sum(len(clean(w)) or 1 for w in words) or 1
    pos, row = 0, []
    for w in words:
        row.append([clean(w), round(t0 + dur * pos / total, 2)])
        pos += len(clean(w)) or 1
    return row


def pauses(audio):
    """Mid-points (s) and lengths of quiet stretches >= 60 ms inside a clip."""
    hop = int(0.01 * SR)
    rms = np.sqrt(np.convolve(audio ** 2, np.ones(hop) / hop, "same")[::hop] + 1e-12)
    quiet = rms < max(rms) * 0.035
    out, i = [], 0
    while i < len(quiet):
        if quiet[i]:
            j = i
            while j < len(quiet) and quiet[j]:
                j += 1
            if j - i >= 6 and i > 0 and j < len(quiet):
                out.append(((i + j) / 2 * 0.01, (j - i) * 0.01))
            i = j
        else:
            i += 1
    return out


def natural(k, lines, voice, speed, rng):
    # group lines into sentences (a line ending in . ! ? closes one)
    sents, cur = [], []
    for ln in lines:
        cur.append(ln)
        if re.search(r"[.!?][\"')]?$", ln):
            sents.append(cur)
            cur = []
    if cur:
        sents.append(cur)
    t, chunks, rows = 0.25, [np.zeros(int(0.25 * SR), dtype=np.float32)], []
    for si, group in enumerate(sents):
        text = " ".join(group)
        sp = speed * (1 + rng.uniform(-0.02, 0.02))
        audio, _ = k.create(text, voice=voice, speed=sp, lang="en-us")
        audio = trim(np.asarray(audio, dtype=np.float32))
        dur = len(audio) / SR
        # phrase boundaries: estimate by characters, snap to the nearest real pause
        lens = [len(re.sub(r"\W", "", g)) or 1 for g in group]
        cum, tot, bounds, used = 0, sum(lens), [], set()
        gaps = pauses(audio)
        for L in lens[:-1]:
            cum += L
            est = dur * cum / tot
            best = min(((abs(m - est), i) for i, (m, _) in enumerate(gaps) if i not in used and abs(m - est) < 0.7), default=None)
            if best:
                used.add(best[1])
                m, ln = gaps[best[1]]
                bounds.append((m - ln / 2, m + ln / 2))
            else:
                bounds.append((est, est))
        starts = [0.0] + [b[1] for b in bounds]
        ends = [b[0] for b in bounds] + [dur]
        for g, s, e in zip(group, starts, ends):
            rows.append({"s": round(t + s, 2), "e": round(t + e, 2), "text": g, "words": word_times(g, t + s, max(0.1, e - s))})
        chunks.append(audio)
        t += dur
        if si < len(sents) - 1:
            words = len(text.split())
            gap = (0.5 if text.endswith("?") else 0.32 if words < 5 else 0.4) + rng.uniform(-0.06, 0.08)
            chunks.append(np.zeros(int(gap * SR), dtype=np.float32))
            t += gap
    return t, chunks, rows


def phrase_mode(k, lines, voice, speed):
    t, chunks, rows = 0.25, [np.zeros(int(0.25 * SR), dtype=np.float32)], []
    for i, p in enumerate(lines):
        audio, _ = k.create(p, voice=voice, speed=speed, lang="en-us")
        audio = trim(np.asarray(audio, dtype=np.float32))
        dur = len(audio) / SR
        rows.append({"s": round(t, 2), "e": round(t + dur, 2), "text": p, "words": word_times(p, t, dur)})
        chunks.append(audio)
        t += dur
        if i < len(lines) - 1:
            gap = 0.55 if re.search(r"[.!?]$", p) else 0.3
            chunks.append(np.zeros(int(gap * SR), dtype=np.float32))
            t += gap
    return t, chunks, rows


def main():
    args = sys.argv[1:]
    opt = lambda k, d: args[args.index("--" + k) + 1] if "--" + k in args else d  # noqa: E731
    script, out = args[0], args[1]
    voice, speed, mode = opt("voice", "am_michael"), float(opt("speed", "1.0")), opt("mode", "natural")
    try:
        from kokoro_onnx import Kokoro
    except ImportError:
        subprocess.run([sys.executable, "-m", "pip", "install", "-q", "kokoro-onnx", "soundfile",
                        "--break-system-packages"], check=True)
        from kokoro_onnx import Kokoro
    import soundfile as sf

    os.makedirs(out, exist_ok=True)
    k = Kokoro(*ensure_model(fp32=mode == "natural"))
    lines = [ln.strip() for ln in open(script, encoding="utf-8") if ln.strip()]
    rng = random.Random(script + voice)
    t, chunks, rows = natural(k, lines, voice, speed, rng) if mode == "natural" else phrase_mode(k, lines, voice, speed)
    chunks.append(np.zeros(int(0.6 * SR), dtype=np.float32))
    wav = os.path.join(out, "voice.wav")
    sf.write(wav, np.concatenate(chunks), SR)
    if mode == "natural" and "--dry" not in args:
        # AK_ light warmth + presence, gentle compression and a small room, so it sounds recorded rather than synthetic
        tmp = wav + ".tmp.wav"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-af",
                        "highpass=f=70,equalizer=f=180:t=q:w=1:g=1.5,equalizer=f=3200:t=q:w=1.2:g=1.8,"
                        "equalizer=f=7500:t=q:w=1:g=-1.5,acompressor=threshold=0.12:ratio=2.5:attack=8:release=120,"
                        "aecho=0.9:0.9:22|37:0.08|0.05,alimiter=limit=0.95", "-ar", str(SR), tmp], check=True)
        os.replace(tmp, wav)
    json.dump(rows, open(os.path.join(out, "phrases.json"), "w"), indent=1)
    with open(os.path.join(out, "captions.srt"), "w", encoding="utf-8") as f:
        for i, r in enumerate(rows, 1):
            f.write(f"{i}\n{srt_time(r['s'])} --> {srt_time(r['e'])}\n{r['text']}\n\n")
    print(f"voice {t:.1f}s, {len(rows)} phrases, {sum(len(p.split()) for p in lines)} words, mode {mode} -> {out}", file=sys.stderr)


if __name__ == "__main__":
    main()
