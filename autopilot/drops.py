"""Explainer videos made inside Claude (see explainer/STUDIO.md) arrive as one git branch per video:

    drop/<id>  ->  drops/<id>/video.mp4, meta.json, captions.srt (optional), thumbnail.jpg (optional)

The bot picks each branch up, stores the files in the usual video Releases, queues the video for the normal
approval + upload flow (YouTube quota, publish slots), then deletes the branch so the repo stays small.
"""
import json
import os
import shutil
import subprocess
import tarfile
import io

from . import config, state, storage, telegram

PREFIX = "drop/"


def _git(*args, check=True, text=True):
    return subprocess.run(["git", *args], capture_output=True, text=text, check=check)


def _branches():
    out = _git("ls-remote", "--heads", "origin", f"refs/heads/{PREFIX}*", check=False).stdout or ""
    rows = []
    for line in out.splitlines():
        sha, ref = line.split("\t")
        rows.append((sha, ref[len("refs/heads/"):]))
    return rows


def _extract(sha, branch, dest):
    _git("fetch", "--quiet", "--depth=1", "origin", f"+refs/heads/{branch}:refs/drops/{branch}")
    tar = _git("archive", "--format=tar", sha, text=False).stdout
    shutil.rmtree(dest, ignore_errors=True)
    os.makedirs(dest, exist_ok=True)
    with tarfile.open(fileobj=io.BytesIO(tar)) as t:
        t.extractall(dest, filter="data")
    return dest


def _new_vid(st):
    day = state.now().date().isoformat()
    taken = [int(k.rsplit("-", 1)[-1]) for k in st["videos"] if k.startswith(day) and k.rsplit("-", 1)[-1].isdigit()]
    return f"{day}-{max([100] + [n for n in taken if n > 100]) + 1}"  # #101, #102... (bot's own videos stay #1-#6)


def ingest(st, notify=True):
    """Queue every waiting drop/* branch. Returns the new video ids."""
    if not storage.available():
        return []
    done = st.setdefault("drops_done", {})
    new = []
    for sha, branch in _branches():
        if branch in done:  # already queued on an earlier run: just clean up the branch
            _git("push", "--quiet", "origin", "--delete", branch, check=False)
            continue
        try:
            root = _extract(sha, branch, os.path.join(config.WORK_DIR, "drops", branch.replace("/", "_")))
            metas = [os.path.join(d, "meta.json") for d, _, fs in os.walk(root) if "meta.json" in fs]
            if not metas:
                raise ValueError("no meta.json in the branch")
            for mpath in metas:
                new.append(_queue(st, os.path.dirname(mpath), json.load(open(mpath, encoding="utf-8")), branch))
            done[branch] = new[-1]
            state.save(st)
            _git("push", "--quiet", "origin", "--delete", branch, check=False)
        except Exception as e:  # noqa: BLE001
            print(f"drop {branch} failed:", e)
            if notify and st.setdefault("drops_failed", {}).get(branch) != sha:
                st["drops_failed"][branch] = sha
                telegram.send(f"⚠️ Couldn't take in the Claude-made video on branch <code>{branch}</code>: {str(e)[:200]}")
    return new


def _queue(st, folder, meta, branch):
    video = os.path.join(folder, meta.get("video", "video.mp4"))
    if not os.path.exists(video):
        raise ValueError(f"{video} is missing")
    vid = _new_vid(st)
    tag = f"videos-{vid[:10]}"
    fmt = "long" if meta.get("kind") == "long" else "animated"
    pkg = {
        "title": str(meta["title"])[:95],
        "description": meta.get("description", ""),
        "hashtags": meta.get("hashtags") or ["#shorts", "#howitworks"],
        "tags": meta.get("tags", []),
        "category": str(meta.get("category", "27")),
        "pinned_comment": meta.get("pinned_comment", ""),
        "thumbnail_text": meta.get("thumbnail_text", ""),
        "hook_text": meta.get("hook", ""),
        "primary_keyword": meta.get("primary_keyword", ""),
        "script": meta.get("script", ""),
        "key_facts": meta.get("key_facts", []),
        "voice": meta.get("voice", "Kokoro"),
        "format": fmt,
        "style": meta.get("style", ""),
    }
    if fmt == "long":  # not a Short: drop #shorts
        pkg["hashtags"] = [h for h in pkg["hashtags"] if h.lower() != "#shorts"]
    v = {
        "topic": {"title": meta.get("topic", pkg["title"]), "format": fmt, "angle": meta.get("style", "")},
        "package": pkg, "status": "approved" if not config.REQUIRE_APPROVAL else "awaiting_approval",
        "by": "claude", "source": "claude", "branch": branch, "redos": 0, "updated": state.iso(),
        "credits": [f"Animation: code-drawn in Claude ({meta.get('style', 'explainer')} style). "
                    f"Voice: Kokoro text-to-speech."],
        "file": storage.store(video, tag, f"{vid}.mp4"),
    }
    thumb = os.path.join(folder, meta.get("thumbnail", "thumbnail.jpg"))
    v["thumb"] = storage.store(thumb, tag, f"{vid}-thumb.jpg") if os.path.exists(thumb) else None
    srt = os.path.join(folder, meta.get("captions", "captions.srt"))
    v["srt"] = open(srt, encoding="utf-8").read() if os.path.exists(srt) else None
    st["videos"][vid] = v
    if v["status"] == "awaiting_approval":
        from .main import num, esc
        sent = telegram.send_video(video, f"🎬 <b>Claude-made {'long video' if fmt == 'long' else 'Short'} #{num(vid)}</b> · "
                                          f"{esc(pkg['style'])}\n<b>{esc(pkg['title'])}</b>",
                                   [[("✅ Publish", f"ok:{vid}"), ("⏭ Skip", f"no:{vid}")]]) \
            if os.path.getsize(video) < 49_000_000 else telegram.send(
                f"🎬 <b>Claude-made long video #{num(vid)}</b>: <b>{esc(pkg['title'])}</b> (too big to preview here). "
                f"Reply <code>publish {num(vid)}</code> or <code>skip {num(vid)}</code>.")
        v["tg_msg"] = (sent or {}).get("message_id")
    return vid
