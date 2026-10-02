"""Tiny persistent state, committed back to the repo by the workflow."""
import json
import os
from datetime import datetime, timezone

from . import config


def now():
    return datetime.now(timezone.utc)


def iso(dt=None):
    return (dt or now()).isoformat()


def parse(s):
    return datetime.fromisoformat(s)


def load():
    if os.path.exists(config.STATE_FILE):
        with open(config.STATE_FILE) as f:
            return json.load(f)
    return {"tg_offset": 0, "batches": {}, "videos": {}, "history": []}


def save(st):
    os.makedirs(os.path.dirname(config.STATE_FILE), exist_ok=True)
    # keep the file small: last 60 history entries, last 7 batches
    st["history"] = st.get("history", [])[-60:]
    for k in sorted(st.get("batches", {}))[:-7]:
        st["batches"].pop(k, None)
    done = [k for k, v in st.get("videos", {}).items() if v["status"] in ("published", "rejected", "failed")]
    for k in sorted(done)[:-30]:
        st["videos"].pop(k, None)
    with open(config.STATE_FILE, "w") as f:
        json.dump(st, f, indent=2)
