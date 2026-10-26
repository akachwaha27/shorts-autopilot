#!/usr/bin/env python3
"""Pick the next topic from the explainer topic sheet and a style for it, avoiding the styles of the last few videos.

usage: python3 scripts/pick.py short|long          -> prints JSON {topic row, style, template, shell, size, recent_topics}
       python3 scripts/pick.py --done <row id> <video id>   -> marks that sheet row as made
The topic sheet is explainer/topics/queue.csv (explainer topics only, short and long; Ashu can edit it on GitHub).
Reads explainer/log.json (one row per video made, newest last).
"""
import csv
import json
import os
import random
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STYLES = {  # style -> template file (templates/*.txt live in the Explainer Toolkit artifact, not in git)
    "Claymation Set": "claymation-set.txt",
    "Kawaii Anime": "kawaii-anime.txt",
    "Ukiyo-e Woodblock": "ukiyo-e-woodblock.txt",
    "16-Bit Pixel Odyssey": "16-bit-pixel-odyssey.txt",
    "Chalkboard Lesson": "chalkboard-lesson.txt",
    "Cut-Paper Diorama": "cut-paper-diorama.txt",
    "Synthwave Outrun": "synthwave-outrun.txt",
    "Low-Poly Faceted": "low-poly-faceted.txt",
    "Napkin Sketch": "napkin-sketch.txt",
    "Flat-Vector Science": "flat-vector-science-vertical.md",
}


QUEUE = os.path.join(HERE, "topics", "queue.csv")
FIELDS = ["id", "kind", "status", "topic", "mechanism", "key_number", "styles", "made_id", "notes"]


def read_queue():
    return list(csv.DictReader(open(QUEUE, newline=""))) if os.path.exists(QUEUE) else []


def write_queue(rows):
    with open(QUEUE, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS, extrasaction="ignore")
        w.writeheader()
        w.writerows(rows)


def main():
    if len(sys.argv) > 1 and sys.argv[1] == "--done":
        rid, vid = sys.argv[2], sys.argv[3]
        rows = read_queue()
        hit = [r for r in rows if r["id"] == rid]
        if not hit:
            sys.exit(f"no row {rid} in {QUEUE}")
        hit[0]["status"], hit[0]["made_id"] = "made", vid
        write_queue(rows)
        return print(f"marked {rid} made ({vid})")
    kind = sys.argv[1] if len(sys.argv) > 1 else "short"
    path = os.path.join(HERE, "log.json")
    log = json.load(open(path)) if os.path.exists(path) else []
    rows = read_queue()
    ready = [r for r in rows if r["kind"] == kind and r["status"] == "ready"]
    row = ready[0] if ready else None
    recent = [r.get("style") for r in log[-4:]]
    wanted = [s for s in (row["styles"].split("|") if row and row.get("styles") else []) if s in STYLES]
    pool = [s for s in wanted if s not in recent] or [s for s in STYLES if s not in recent] or list(STYLES)
    style = random.SystemRandom().choice(pool)
    vertical = kind != "long"
    print(json.dumps({
        "kind": kind, "topic_row": row, "ready_left": len(ready),
        "style": style, "template": f"templates/{STYLES[style]}",
        "shell": "examples/ice-in-the-desert/shell-9x16.html" if vertical else "examples/ice-in-the-desert/shell-16x9.html",
        "size": [1080, 1920] if vertical else [1280, 720],
        "recent_topics": [r.get("topic") for r in log[-60:]],
    }, indent=1))


if __name__ == "__main__":
    main()
