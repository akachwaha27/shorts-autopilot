#!/usr/bin/env python3
"""Turn a voiceover recording + its script into phrase/word timings for the BEATS table.

usage: python3 scripts/voice_timing.py voice.mp3 script.txt > phrases.json

The script file holds one phrase per line (a phrase = a stretch of speech between pauses; split long
sentences at commas/colons where the narrator will breathe). Phrase bounds come from silence detection,
word times are estimated inside each phrase by character position. Good enough to land a label on its word;
if you have real word-level timestamps (SRT from the TTS service), use those instead.
"""
import json, re, subprocess, sys
import numpy as np

audio, script = sys.argv[1], sys.argv[2]
raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', audio, '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'], capture_output=True).stdout
a = np.frombuffer(raw, dtype=np.float32); sr = 16000; hop = 160
n = len(a) // hop
rms = np.array([np.sqrt(np.mean(a[i * hop:(i + 1) * hop] ** 2)) for i in range(n)])
db = 20 * np.log10(rms + 1e-9); voiced = db > db.max() - 38
GAP = float(sys.argv[3]) if len(sys.argv) > 3 else 0.28   # a pause longer than this splits phrases
segs, cur = [], None
for i, v in enumerate(voiced):
    t = i * hop / sr
    if v and cur is None: cur = [t, t]
    elif v: cur[1] = t
    elif cur and t - cur[1] > GAP: segs.append(cur); cur = None
if cur: segs.append(cur)
segs = [s for s in segs if s[1] - s[0] > 0.15]
phr = [l.strip() for l in open(script, encoding='utf-8') if l.strip()]
if len(phr) != len(segs):
    sys.stderr.write(f'WARNING: {len(phr)} script phrases but {len(segs)} speech segments found. Adjust the gap (3rd arg, now {GAP}) or re-split the script.\n')
    for s in segs: sys.stderr.write(f'  {s[0]:.2f}-{s[1]:.2f}\n')
out = []
for (s, e), p in zip(segs, phr):
    words = p.split(); total = sum(len(re.sub(r'\W', '', w)) for w in words) or 1; pos = 0; row = []
    for w in words:
        k = len(re.sub(r'\W', '', w)); row.append([re.sub(r'\W', '', w).lower(), round(s + (e - s) * pos / total, 2)]); pos += k
    out.append({'s': round(s, 2), 'e': round(e, 2), 'text': p, 'words': row})
print(json.dumps(out, indent=1))
sys.stderr.write(f'audio {len(a)/sr:.2f}s, {len(out)} phrases\n')
