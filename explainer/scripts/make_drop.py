#!/usr/bin/env python3
"""Send a finished explainer to the bot: pushes it as its own branch drop/<id> (the bot uploads it, then
deletes the branch, so video files never pile up in the repo history).

usage: python3 scripts/make_drop.py <workdir> <id>
<workdir> must hold final.mp4 and meta.json; captions.srt and out/thumbnail.jpg are picked up when present.
meta.json: {"kind": "short"|"long", "title", "description", "hashtags": [...], "tags": [...], "pinned_comment",
            "thumbnail_text", "style", "topic", "script", "key_facts": [...], "category": "27"}
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile

REMOTE = os.environ.get("DROP_REMOTE", "https://github.com/akachwaha27/shorts-autopilot.git")
NEED = ("title", "description", "hashtags", "tags", "kind", "style")


def run(*a, cwd=None):
    r = subprocess.run(a, cwd=cwd, capture_output=True, text=True)
    if r.returncode:
        raise SystemExit(f"{' '.join(a)} failed:\n{r.stdout}\n{r.stderr}")
    return r.stdout


def main():
    work, did = sys.argv[1], sys.argv[2]
    meta = json.load(open(os.path.join(work, "meta.json"), encoding="utf-8"))
    missing = [k for k in NEED if not meta.get(k)]
    if missing:
        raise SystemExit(f"meta.json is missing {missing}")
    if len(meta["title"]) > 100:
        raise SystemExit("title is over 100 characters")
    video = os.path.join(work, "final.mp4")
    dur = float(run("ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", video))
    if meta["kind"] == "short" and dur > 60:  # Shorts must stay under a minute
        raise SystemExit(f"Short runs {dur:.1f}s; it must be 60 s or less")
    adur = run("ffprobe", "-v", "error", "-select_streams", "a", "-show_entries", "stream=duration", "-of", "csv=p=0", video).strip()
    if not adur or float(adur) < dur - 0.3:  # the old mix cut the last ~3 s of voice; never ship that again
        raise SystemExit(f"audio track ({adur or 'none'} s) is shorter than the video ({dur:.1f} s): re-run scripts/mix.sh")
    if os.path.getsize(video) > 95_000_000:
        raise SystemExit("video is over 95 MB; re-encode with a higher CRF")
    meta["duration"] = round(dur, 1)
    tmp = tempfile.mkdtemp()
    dest = os.path.join(tmp, "drops", did)
    os.makedirs(dest)
    shutil.copy(video, os.path.join(dest, "video.mp4"))
    for src, name in (("captions.srt", "captions.srt"), ("out/thumbnail.jpg", "thumbnail.jpg"),
                      ("thumbnail.jpg", "thumbnail.jpg")):
        if os.path.exists(os.path.join(work, src)):
            shutil.copy(os.path.join(work, src), os.path.join(dest, name))
    json.dump(meta, open(os.path.join(dest, "meta.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    branch = f"drop/{did}"
    run("git", "init", "-q", "-b", branch, cwd=tmp)
    run("git", "add", ".", cwd=tmp)
    run("git", "-c", "user.name=Claude", "-c", "user.email=noreply@anthropic.com", "commit", "-q", "-m",
        f"explainer drop: {meta['title']}", cwd=tmp)
    run("git", "push", "-q", REMOTE, f"HEAD:refs/heads/{branch}", cwd=tmp)
    shutil.rmtree(tmp, ignore_errors=True)
    print(f"pushed {branch} ({dur:.1f}s, {os.path.getsize(video) / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()
