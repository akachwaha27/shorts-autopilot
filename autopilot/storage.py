"""Storage = GitHub Releases on your own repo (free). Videos survive between runs."""
import os
import shutil
import subprocess

from . import config


def _gh(*args, check=True):
    return subprocess.run(["gh", *args], capture_output=True, text=True, check=check)


def available():
    return bool(config.GITHUB_REPOSITORY and os.getenv("GH_TOKEN") and shutil.which("gh"))


def store(path, tag, name):
    """Upload a file and return a reference used to fetch it later."""
    if not available():
        keep = os.path.join("library", tag)
        os.makedirs(keep, exist_ok=True)
        dest = os.path.join(keep, name)
        shutil.copy(path, dest)
        return {"type": "local", "path": dest}
    if _gh("release", "view", tag, check=False).returncode != 0:
        _gh("release", "create", tag, "--title", f"Videos {tag}", "--notes", "Auto-generated shorts", "--latest=false")
    named = os.path.join(os.path.dirname(path), name)
    if named != path:
        shutil.copy(path, named)
    _gh("release", "upload", tag, named, "--clobber")
    return {"type": "release", "tag": tag, "name": name}


def fetch(ref, dest_dir):
    os.makedirs(dest_dir, exist_ok=True)
    if ref["type"] == "local":
        return ref["path"]
    _gh("release", "download", ref["tag"], "-p", ref["name"], "-D", dest_dir, "--clobber")
    return os.path.join(dest_dir, ref["name"])
