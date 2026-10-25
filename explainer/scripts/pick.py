#!/usr/bin/env python3
"""Pick today's random style for one explainer, avoiding the styles of the last few videos.

usage: python3 scripts/pick.py short|long        -> prints JSON {style, template, shell, size, log}
Reads/keeps explainer/log.json (one row per video made, newest last).
"""
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


def main():
    kind = sys.argv[1] if len(sys.argv) > 1 else "short"
    path = os.path.join(HERE, "log.json")
    log = json.load(open(path)) if os.path.exists(path) else []
    recent = [r.get("style") for r in log[-4:]]
    pool = [s for s in STYLES if s not in recent] or list(STYLES)
    style = random.SystemRandom().choice(pool)
    vertical = kind != "long"
    print(json.dumps({
        "kind": kind, "style": style, "template": f"templates/{STYLES[style]}",
        "shell": "examples/ice-in-the-desert/shell-9x16.html" if vertical else "examples/ice-in-the-desert/shell-16x9.html",
        "size": [1080, 1920] if vertical else [1280, 720],
        "recent_topics": [r.get("topic") for r in log[-60:]],
    }, indent=1))


if __name__ == "__main__":
    main()
