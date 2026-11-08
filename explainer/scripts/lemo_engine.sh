#!/usr/bin/env bash
# AK_ Bundle a Lemo-Opuscar style's drawing engine (MIT) into one plain script for story.js, exposing window.LEMO.
# usage: bash scripts/lemo_engine.sh <slug> <out.js> [LEMO_DIR]
#   entry: <LEMO_DIR>/styles/<slug>/demo/engine/index.js, else demo/engine.js. Prints "none" if the style ships no
#   engine (then write the drawing code yourself from STYLE.md and the demo source).
# Build with it:  node scripts/build.js <shell> $W/story.js $W/out.html --pre $W/engine.js
set -e
SLUG=$1; OUT=$2; LEMO=${3:-/home/claude/lemo-opuscar}
D="$LEMO/styles/$SLUG/demo"; ENTRY=""
for c in engine/index.js engine.js; do if [ -f "$D/$c" ]; then ENTRY="$D/$c"; break; fi; done
[ -n "$ENTRY" ] || { echo "none"; exit 0; }
ESB=$HOME/.cache/lemo-esbuild
[ -d "$ESB/node_modules/esbuild" ] || npm install --silent --no-audit --no-fund --prefix "$ESB" esbuild@0.24.0 >/dev/null
NODE_PATH="$ESB/node_modules" node -e '
const [entry, out, lemo] = process.argv.slice(1), path = require("path");
require("esbuild").build({ entryPoints: [entry], bundle: true, format: "iife", globalName: "LEMO", outfile: out, logLevel: "warning",
  plugins: [{ name: "lemo-root", setup(b) { b.onResolve({ filter: /^\/core\// }, (a) => ({ path: path.join(lemo, a.path) })); } }],
}).catch(() => process.exit(1));' "$ENTRY" "$OUT.tmp" "$LEMO"
{ echo "// Lemo-Opuscar '$SLUG' engine - MIT License, (c) LemoLab, github.com/lemomo-ai/lemo-opuscar (bundled, unmodified)"; cat "$OUT.tmp"; echo "window.LEMO = LEMO;"; } > "$OUT"
rm -f "$OUT.tmp"; echo "bundled $ENTRY -> $OUT ($(wc -c < "$OUT") bytes)"
