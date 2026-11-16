// ===== Watercolor Brush (Lemo-Opuscar style), 16:9 1280x720: "Your Heart Explained in Simple Words" =====
// Painted with the Lemo-Opuscar watercolor stroke engine (window.LEMO, bundled by scripts/lemo_engine.sh, MIT).
// Original story, heart drawings, layout and timing; only the stroke technique comes from the library.
(function () {
  const W = 1280, HH = 720;
  // ---------- BEATS (from phrases.json; w = first time each word starts) ----------
  const BEATS = [
    { s: 0.25, e: 2.73, w: { your: 0.25, heart: 0.59, beats: 1.02, n100000: 1.45, times: 1.96, a: 2.39, day: 2.47 } },
    { s: 3.07, e: 4.35, w: { and: 3.07, nobody: 3.28, tells: 3.71, it: 4.07, to: 4.21 } },
    { s: 4.82, e: 6.78, w: { its: 4.82, only: 5.02, about: 5.29, the: 5.63, size: 5.83, of: 6.1, your: 6.24, fist: 6.51 } },
    { s: 7.12, e: 8.53, w: { it: 7.12, weighs: 7.25, less: 7.63, than: 7.89, a: 8.14, pound: 8.21 } },
    { s: 9.02, e: 11.61, w: { and: 9.02, it: 9.2, hasnt: 9.31, taken: 9.61, a: 9.9, day: 9.96, off: 10.14, since: 10.31, before: 10.61, you: 10.96, were: 11.14, born: 11.37 } },
    { s: 12.03, e: 14.31, w: { so: 12.03, how: 12.17, does: 12.37, one: 12.64, lump: 12.84, of: 13.11, muscle: 13.24, keep: 13.64, that: 13.91, up: 14.18 } },
    { s: 14.77, e: 16.01, w: { lets: 14.77, paint: 15.1, it: 15.51, open: 15.68 } },
    { s: 17.69, e: 19.43, w: { part: 17.69, one: 18.04, two: 18.3, pumps: 18.56, in: 19.0 } },
    { s: 19.88, e: 21.64, w: { your: 19.88, heart: 20.15, isnt: 20.49, really: 20.76, one: 21.16, pump: 21.37 } },
    { s: 22.03, e: 24.76, w: { its: 22.03, two: 22.26, pumps: 22.5, side: 22.89, by: 23.2, sharing: 23.67, one: 24.21, wall: 24.45 } },
    { s: 25.23, e: 26.65, w: { each: 25.23, side: 25.53, has: 25.83, two: 26.06, rooms: 26.28 } },
    { s: 27.04, e: 28.38, w: { a: 27.04, small: 27.11, atrium: 27.51, on: 27.98, top: 28.14 } },
    { s: 28.68, e: 30.67, w: { and: 28.68, a: 28.9, big: 28.97, strong: 29.19, ventricle: 29.64, below: 30.3 } },
    { s: 31.05, e: 32.45, w: { four: 31.05, chambers: 31.35, in: 31.93, total: 32.08 } },
    { s: 32.76, e: 35.35, w: { the: 32.76, right: 32.94, side: 33.25, gets: 33.5, tired: 33.74, blood: 34.05, back: 34.36, from: 34.61, your: 34.85, body: 35.1 } },
    { s: 35.72, e: 36.79, w: { low: 35.72, on: 36.01, oxygen: 36.21 } },
    { s: 37.25, e: 39.89, w: { it: 37.25, squeezes: 37.38, that: 37.87, blood: 38.11, a: 38.42, short: 38.48, hop: 38.79, over: 38.97, to: 39.22, your: 39.34, lungs: 39.59 } },
    { s: 40.25, e: 43.86, w: { there: 40.25, it: 40.62, drops: 40.76, off: 41.13, carbon: 41.35, dioxide: 41.8, and: 42.31, picks: 42.53, up: 42.9, fresh: 43.05, oxygen: 43.42 } },
    { s: 44.27, e: 47.19, w: { then: 44.27, the: 44.53, bright: 44.73, red: 45.11, blood: 45.31, flows: 45.63, back: 45.96, into: 46.22, left: 46.67, side: 46.93 } },
    { s: 47.58, e: 49.39, w: { and: 47.58, the: 47.79, left: 48.0, side: 48.28, has: 48.55, big: 48.97, job: 49.18 } },
    { s: 49.74, e: 52.25, w: { it: 49.74, pushes: 49.87, blood: 50.25, all: 50.58, the: 50.77, way: 50.96, to: 51.15, your: 51.28, toes: 51.54, and: 51.8, back: 51.99 } },
    { s: 52.63, e: 55.52, w: { thats: 52.63, why: 52.96, its: 53.15, bottom: 53.34, wall: 53.73, is: 53.98, two: 54.11, to: 54.3, three: 54.43, times: 54.75, thicker: 55.07 } },
    { s: 55.9, e: 57.57, w: { its: 55.9, the: 56.08, bodybuilder: 56.26, of: 56.92, family: 57.21 } },
    { s: 59.38, e: 60.86, w: { part: 59.38, two: 59.75, the: 60.03, lubdub: 60.3 } },
    { s: 61.23, e: 62.79, w: { put: 61.23, your: 61.42, ear: 61.67, on: 61.85, someones: 61.98, chest: 62.48 } },
    { s: 63.19, e: 64.76, w: { lub: 63.19, dub: 63.58 } },
    { s: 65.04, e: 66.86, w: { you: 65.04, might: 65.19, think: 65.44, thats: 65.7, the: 65.95, muscle: 66.1, squeezing: 66.4 } },
    { s: 67.23, e: 69.26, w: { its: 67.23, actually: 67.41, the: 67.88, sound: 68.06, of: 68.36, doors: 68.48, slamming: 68.78 } },
    { s: 69.7, e: 71.09, w: { your: 69.7, heart: 69.95, has: 70.26, four: 70.45, valves: 70.71 } },
    { s: 71.39, e: 73.3, w: { little: 71.39, flaps: 71.78, that: 72.11, only: 72.38, open: 72.64, one: 72.9, way: 73.1 } },
    { s: 73.78, e: 74.97, w: { when: 73.78, the: 73.98, ventricles: 74.13, squeeze: 74.62 } },
    { s: 75.3, e: 78.05, w: { the: 75.3, valves: 75.49, between: 75.86, top: 76.49, and: 76.67, bottom: 76.86, rooms: 77.23, snap: 77.55, shut: 77.8 } },
    { s: 78.44, e: 79.26, w: { thats: 78.44, the: 78.81, lub: 79.04 } },
    { s: 79.61, e: 81.43, w: { a: 79.61, moment: 79.67, later: 80.04, the: 80.34, ventricles: 80.52, relax: 81.13 } },
    { s: 81.78, e: 85.32, w: { and: 81.78, the: 81.98, valves: 82.19, at: 82.6, exits: 82.94, snap: 83.28, shut: 83.55, so: 83.82, nothing: 83.96, flows: 84.44, backward: 84.78 } },
    { s: 85.67, e: 86.48, w: { thats: 85.67, the: 86.04, dub: 86.26 } },
    { s: 86.77, e: 90.42, w: { oneway: 86.77, doors: 87.16, thats: 87.49, the: 87.81, whole: 88.01, trick: 88.34, that: 88.66, keeps: 88.92, blood: 89.25, moving: 89.57, forward: 89.96 } },
    { s: 92.21, e: 94.03, w: { part: 92.21, three: 92.51, the: 92.89, builtin: 93.12, spark: 93.65 } },
    { s: 94.39, e: 95.88, w: { now: 94.39, the: 94.61, really: 94.82, weird: 95.24, part: 95.6 } },
    { s: 96.34, e: 99.09, w: { your: 96.34, heart: 96.58, doesnt: 96.89, wait: 97.26, for: 97.5, brain: 97.93, to: 98.23, tell: 98.35, it: 98.6, beat: 98.84 } },
    { s: 99.53, e: 100.84, w: { it: 99.53, has: 99.66, its: 99.86, own: 100.06, pacemaker: 100.25 } },
    { s: 101.25, e: 103.93, w: { a: 101.25, tiny: 101.32, patch: 101.59, of: 101.92, cells: 102.06, called: 102.39, the: 102.79, sinoatrial: 102.99, node: 103.66 } },
    { s: 104.29, e: 107.22, w: { about: 104.29, once: 104.66, a: 104.95, second: 105.02, it: 105.46, fires: 105.61, an: 105.98, electrical: 106.12, spark: 106.86 } },
    { s: 107.61, e: 109.81, w: { the: 107.61, spark: 107.81, races: 108.14, across: 108.48, top: 109.08, chambers: 109.28 } },
    { s: 110.13, e: 111.2, w: { and: 110.13, they: 110.3, squeeze: 110.53, first: 110.92 } },
    { s: 111.58, e: 114.44, w: { then: 111.58, it: 111.9, hits: 112.05, a: 112.37, second: 112.45, checkpoint: 112.93, the: 113.72, av: 113.96, node: 114.12 } },
    { s: 114.81, e: 117.15, w: { which: 114.81, holds: 115.09, the: 115.36, signal: 115.53, for: 115.87, about: 116.03, a: 116.31, tenth: 116.37, of: 116.65, second: 116.81 } },
    { s: 117.62, e: 118.79, w: { so: 117.62, the: 117.7, top: 117.83, rooms: 117.96, finish: 118.18, emptying: 118.44 } },
    { s: 118.86, e: 121.24, w: { before: 118.86, the: 119.39, big: 119.65, bottom: 119.92, rooms: 120.44, fire: 120.88 } },
    { s: 121.65, e: 123.71, w: { your: 121.65, brain: 121.9, can: 122.21, speed: 122.4, it: 122.71, up: 122.84, or: 122.96, slow: 123.08, down: 123.46 } },
    { s: 123.94, e: 125.63, w: { when: 123.94, you: 124.22, run: 124.43, or: 124.64, sleep: 125.28 } },
    { s: 126.06, e: 128.32, w: { but: 126.06, the: 126.24, beat: 126.43, itself: 126.68, starts: 127.06, inside: 127.44, heart: 128.0 } },
    { s: 128.75, e: 131.73, w: { thats: 128.75, why: 129.06, a: 129.25, donor: 129.31, heart: 129.62, can: 129.93, keep: 130.12, beating: 130.36, for: 130.8, little: 131.05, while: 131.42 } },
    { s: 132.12, e: 134.03, w: { even: 132.12, after: 132.35, its: 132.64, been: 132.82, taken: 133.05, out: 133.34, of: 133.51, the: 133.63, body: 133.8 } },
    { s: 135.78, e: 137.19, w: { part: 135.78, four: 136.09, the: 136.41, numbers: 136.64 } },
    { s: 137.49, e: 139.92, w: { a: 137.49, hundred: 137.56, thousand: 138.04, beats: 138.6, day: 139.02, adds: 139.23, up: 139.5, fast: 139.64 } },
    { s: 140.29, e: 143.48, w: { every: 140.29, day: 140.64, your: 140.85, heart: 141.12, pumps: 141.47, around: 141.82, n2000: 142.23, gallons: 142.51, of: 142.99, blood: 143.13 } },
    { s: 143.85, e: 146.51, w: { thats: 143.85, roughly: 144.19, a: 144.67, full: 144.73, bathtub: 145.01, every: 145.49, single: 145.83, hour: 146.24 } },
    { s: 146.87, e: 149.77, w: { one: 146.87, blood: 147.06, cell: 147.37, can: 147.62, loop: 147.81, your: 148.06, whole: 148.32, body: 148.63, in: 148.88, about: 149.01, a: 149.33, minute: 149.39 } },
    { s: 150.2, e: 151.41, w: { and: 150.2, over: 150.43, a: 150.73, long: 150.8, life: 151.11 } },
    { s: 151.74, e: 154.5, w: { your: 151.74, heart: 151.97, will: 152.26, beat: 152.49, more: 152.72, than: 152.95, two: 153.18, and: 153.35, a: 153.52, half: 153.58, billion: 153.81, times: 154.21 } },
    { s: 154.94, e: 156.31, w: { all: 154.94, without: 155.13, a: 155.56, single: 155.62, break: 156.0 } },
    { s: 158.08, e: 159.77, w: { part: 158.08, five: 158.38, feel: 158.69, it: 159.0, yourself: 159.15 } },
    { s: 160.19, e: 162.16, w: { every: 160.19, beat: 160.59, is: 160.9, a: 161.06, tiny: 161.14, relay: 161.45, race: 161.85 } },
    { s: 162.58, e: 164.14, w: { spark: 162.58, squeeze: 163.01, lub: 163.62, dub: 163.88 } },
    { s: 164.44, e: 166.14, w: { lungs: 164.44, body: 164.84, and: 165.17, back: 165.41, again: 165.73 } },
    { s: 166.49, e: 168.63, w: { put: 166.49, two: 166.67, fingers: 166.85, on: 167.28, the: 167.4, inside: 167.59, of: 167.95, your: 168.08, wrist: 168.32 } },
    { s: 169.11, e: 171.04, w: { that: 169.11, little: 169.35, tap: 169.71, is: 169.89, your: 170.01, left: 170.25, ventricle: 170.49 } },
    { s: 171.42, e: 173.49, w: { pushing: 171.42, blood: 171.83, all: 172.13, the: 172.3, way: 172.48, down: 172.66, to: 172.89, your: 173.01, hand: 173.25 } },
    { s: 173.89, e: 175.78, w: { next: 173.89, time: 174.16, well: 174.43, follow: 174.7, your: 175.11, breath: 175.38 } },
    { s: 176.21, e: 179.26, w: { how: 176.21, do: 176.43, your: 176.58, lungs: 176.88, pull: 177.25, in: 177.55, air: 177.7, over: 177.92, n20000: 178.22, times: 178.59, a: 178.96, day: 179.03 } },
  ];
  const DURATION = 179.26 + 1.0;
  window.BEATS = BEATS; window.DURATION = DURATION;
  const T = (i, k) => (k == null ? BEATS[i].s : BEATS[i].w[k]);

  // ---------- engine + easing ----------
  const L = window.LEMO;
  const { mk, drawS, drawList, withSeed, qcurve, rgba, mixc } = L; const PAPER = '#f1e9da', INK = '#2b2520';
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const ss = (x) => { x = clamp(x); return x * x * (3 - 2 * x); };
  const eio = (x) => { x = clamp(x); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
  const eo = (x) => 1 - Math.pow(1 - clamp(x), 3);
  const hash = (n) => { n = Math.sin(n * 127.1 + 311.7) * 43758.5453; return n - Math.floor(n); };

  // ---------- palette (3-5 hues per scene + ink; ONE accent: the gold spark) ----------
  const C = {
    paper: PAPER, ink: INK, ink2: '#5a4636',
    red: '#b5402f', redDeep: '#8a2a22', muscle: '#c98476', muscleDk: '#a65a4c',
    blue: '#4d6f92', blueDk: '#33506e', lung: '#d79a8e', lungDk: '#b46a60',
    skin: '#e2b38f', skinDk: '#bf8462', sage: '#93a874', straw: '#e3cf98', sky: '#a9bfcf',
    gold: '#e2a21f', water: '#7fa6bf',
  };

  // ---------- fonts: make the shell's READY also wait for this style's faces ----------
  const MYFONTS = ['700 40px "Caveat"', '600 60px "Cormorant Garamond"', '700 60px "Cormorant Garamond"', 'italic 600 40px "Cormorant Garamond"', '500 18px "IBM Plex Mono"'];
  const fontsP = Promise.all(MYFONTS.map((f) => document.fonts.load(f, 'AaZz09,.?×≈'))).catch(() => {});
  (function () { let R; Object.defineProperty(window, 'READY', { configurable: true, get: () => R, set: (v) => { R = Promise.all([v, fontsP]).then(() => document.fonts.ready); } }); })();
  const SERIF = (s, w = 600, it = false) => `${it ? 'italic ' : ''}${w} ${s}px "Cormorant Garamond", Georgia, serif`;
  const HAND = (s) => `700 ${s}px "Caveat", cursive`;
  const MONO = (s) => `500 ${s}px "IBM Plex Mono", monospace`;

  // ---------- geometry ----------
  // Catmull-Rom through points (closed or open) -> dense polyline
  function cr(pts, closed = true, n = 8) {
    const out = [], N = pts.length, g = (i) => pts[closed ? (i + N) % N : clamp(i, 0, N - 1)];
    const last = closed ? N : N - 1;
    for (let i = 0; i < last; i++) {
      const p0 = g(i - 1), p1 = g(i), p2 = g(i + 1), p3 = g(i + 2);
      for (let k = 0; k < n; k++) { const t = k / n, t2 = t * t, t3 = t2 * t;
        out.push([0.5 * (2 * p1[0] + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3),
          0.5 * (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)]); }
    }
    if (!closed) out.push(pts[N - 1]);
    return out;
  }
  const blob = (cx, cy, rx, ry, seed, wob = 0.08, n = 9) => { const p = []; for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2, r = 1 + (hash(seed + i * 7.3) * 2 - 1) * wob; p.push([cx + Math.cos(a) * rx * r, cy + Math.sin(a) * ry * r]); } return p; };
  const xf = (pts, dx = 0, dy = 0, s = 1) => pts.map(([x, y]) => [dx + x * s, dy + y * s]);

  // ---------- watercolour primitives (all built inside withSeed) ----------
  function washPoly(c, pts, col, a = 0.5, jit = 2.5, seed = 1) {
    for (let k = 0; k < 3; k++) {
      c.beginPath();
      pts.forEach(([x, y], i) => { const jx = (hash(seed * 13 + i * 3.1 + k * 17) - 0.5) * 2 * jit, jy = (hash(seed * 7 + i * 5.7 + k * 29) - 0.5) * 2 * jit; i ? c.lineTo(x + jx, y + jy) : c.moveTo(x + jx, y + jy); });
      c.closePath(); c.fillStyle = rgba(col, a / 3 + 0.04); c.fill();
      c.lineWidth = 1.6; c.strokeStyle = rgba(col, a / 4); c.stroke(); // pooled edge
    }
  }
  // a painted region: wash + interior brush strokes + a darker edge in 3 broken strokes
  function paintRegion(c, pts, col, o = {}) {
    const a = o.a ?? 0.55, dk = o.dk || mixc(col, '#2b2520', 0.35);
    washPoly(c, pts, col, a, o.jit ?? 2.5, o.seed ?? 1);
    if (o.inner !== false) {
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; for (const [x, y] of pts) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
      c.save(); c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath(); c.clip();
      const n = o.n ?? Math.round(Math.min(14, 3 + (x1 - x0) * (y1 - y0) / 5000)), ang = o.ang ?? -0.5;
      for (let i = 0; i < n; i++) {
        const cx = lerp(x0, x1, L.rnd()), cy = lerp(y0, y1, L.rnd()), len = (x1 - x0) * L.rnd(0.3, 0.7), aa = ang + L.rnd(-0.25, 0.25);
        drawS(c, mk(qcurve(cx - Math.cos(aa) * len / 2, cy - Math.sin(aa) * len / 2, cx + Math.cos(aa) * len / 2, cy + Math.sin(aa) * len / 2, L.rnd(-8, 8), 10), L.rnd(8, 18), L.rnd() < 0.5 ? col : dk, { a: L.rnd(0.12, 0.26), prof: 'leaf' }));
      }
      c.restore();
    }
    if (o.edge !== false) {
      const N = pts.length, ring = pts.concat([pts[0]]);
      for (let s = 0; s < 3; s++) { const i0 = Math.floor(s * N / 3), i1 = Math.floor((s + 1) * N / 3) + 1; const seg = ring.slice(i0, Math.min(ring.length, i1 + 1));
        if (seg.length > 2) drawS(c, mk(seg, o.ew ?? 3.2, dk, { prof: 'even', nb: 0, a: o.ea ?? 0.6, rough: 0.35 })); }
    }
  }
  // offscreen sprite cache: key -> {cv, ox, oy}; fn draws in local coords with origin at (ox, oy)
  const SPR = new Map();
  function sprite(key, w, h, ox, oy, seed, fn) {
    let s = SPR.get(key); if (s) return s;
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    const c = cv.getContext('2d'); c.translate(ox, oy); withSeed(seed, () => fn(c));
    s = { cv, ox, oy, w, h }; SPR.set(key, s); return s;
  }
  // draw a sprite centred on its origin at (x, y); p < 1 paints it in behind a wavy brush edge (dir: 'lr', 'bt', 'tb')
  function put(c, s, x, y, p = 1, o = {}) {
    if (p <= 0) return;
    const sc = o.s ?? 1, sx = (o.sx ?? 1) * sc, sy = (o.sy ?? 1) * sc;
    c.save(); c.translate(x, y); if (o.rot) c.rotate(o.rot); c.scale(sx, sy);
    if (o.a != null) c.globalAlpha *= o.a;
    if (p < 1) {
      const dir = o.dir || 'lr', w = s.w, h = s.h, seedp = o.seed ?? 3; c.beginPath();
      if (dir === 'lr') { const X = -s.ox + (w + 60) * eio(p) - 30; c.moveTo(-s.ox, -s.oy); for (let k = 0; k <= 12; k++) { const y = -s.oy + (k / 12) * h; c.lineTo(X + Math.sin(k * 1.7 + seedp) * 22 + (hash(k + seedp) - 0.5) * 18, y); } c.lineTo(-s.ox, -s.oy + h); }
      else { const up = dir === 'bt', Y = up ? -s.oy + h - (h + 60) * eio(p) + 30 : -s.oy + (h + 60) * eio(p) - 30; c.moveTo(-s.ox, up ? -s.oy + h : -s.oy); for (let k = 0; k <= 12; k++) { const x = -s.ox + (k / 12) * w; c.lineTo(x, Y + Math.sin(k * 1.9 + seedp) * 18 + (hash(k * 3 + seedp) - 0.5) * 14); } c.lineTo(-s.ox + w, up ? -s.oy + h : -s.oy); }
      c.closePath(); c.clip();
    }
    c.drawImage(s.cv, -s.ox, -s.oy); c.restore();
  }

  // ---------- paper + per-scene backgrounds ----------
  let PAPERCV = null;
  function paperBase() {
    if (PAPERCV) return PAPERCV;
    const cv = document.createElement('canvas'); cv.width = W; cv.height = HH; const c = cv.getContext('2d');
    const nz = window.H.makeNoise(11), base = [241, 233, 218], cell = 4;
    for (let y = 0; y < HH; y += cell) for (let x = 0; x < W; x += cell) {
      const v = nz.fbm2(x * 0.004, y * 0.004, 3) * 0.035 + nz.n2(x * 0.03, y * 0.03) * 0.012;
      const vg = 1 - 0.07 * Math.pow(Math.hypot((x - W / 2) / (W * 0.62), (y - HH / 2) / (HH * 0.62)), 2.2), s = (1 + v) * vg;
      c.fillStyle = `rgb(${base[0] * s | 0},${base[1] * s | 0},${base[2] * s | 0})`; c.fillRect(x, y, cell, cell);
    }
    const r = window.H.rng(5); c.lineCap = 'round';
    for (let i = 0; i < 2600; i++) { const x = r() * W, y = r() * HH, a = r() * 6.28, l = 3 + r() * 9; c.strokeStyle = r() < 0.5 ? 'rgba(120,95,70,0.07)' : 'rgba(255,255,255,0.12)'; c.lineWidth = 0.6; c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + Math.cos(a + 0.6) * l * 0.6, y + Math.sin(a + 0.6) * l * 0.6, x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke(); }
    PAPERCV = cv; return cv;
  }
  // a background = paper + one or two large pale washes, shape set by `kind`
  const BG = new Map();
  function bg(c, key, col, kind = 'band', col2 = null) {
    let cv = BG.get(key);
    if (!cv) {
      cv = document.createElement('canvas'); cv.width = W; cv.height = HH; const g = cv.getContext('2d');
      g.drawImage(paperBase(), 0, 0);
      withSeed(1000 + key.length * 31 + key.charCodeAt(0) * 7 + (key.charCodeAt(key.length - 1) || 0), () => {
        const sd = key.length + key.charCodeAt(1);
        if (kind === 'band') washPoly(g, [[-40, 470], [400, 452], [880, 476], [1320, 458], [1320, 780], [-40, 780]], col, 0.16, 6, sd);
        if (kind === 'top') washPoly(g, [[-40, -40], [1320, -40], [1320, 210], [900, 228], [420, 200], [-40, 222]], col, 0.16, 6, sd);
        if (kind === 'pool') washPoly(g, cr(blob(W / 2, HH / 2 + 10, 470, 260, sd, 0.12, 10), true, 6), col, 0.13, 6, sd);
        if (kind === 'left') washPoly(g, [[-40, -40], [560, -40], [520, 300], [600, 520], [540, 780], [-40, 780]], col, 0.14, 6, sd);
        if (kind === 'right') washPoly(g, [[740, -40], [1320, -40], [1320, 780], [700, 780], [760, 500], [690, 260]], col, 0.14, 6, sd);
        if (col2) washPoly(g, cr(blob(W * 0.78, HH * 0.22, 180, 100, sd + 3, 0.15, 8), true, 6), col2, 0.12, 5, sd + 1);
        // a few loose stray strokes at the margins, like a test swatch
        for (let i = 0; i < 3; i++) { const x = L.rnd(40, W - 140), y = L.rnd() < 0.5 ? L.rnd(20, 60) : L.rnd(660, 700); drawS(g, mk(qcurve(x, y, x + L.rnd(50, 110), y + L.rnd(-8, 8), L.rnd(-6, 6), 8), L.rnd(8, 14), col2 || col, { a: 0.14 })); }
      });
      BG.set(key, cv); if (BG.size > 6) BG.delete(BG.keys().next().value);
    }
    c.drawImage(cv, 0, 0);
  }

  // ---------- annotation layer ----------
  function halo(c, txt, x, y, lw) { c.save(); c.lineJoin = 'round'; c.strokeStyle = rgba(C.paper, 0.85); c.lineWidth = lw; c.strokeText(txt, x, y); c.restore(); }
  // hand-written note, revealed left to right like writing
  function hand(c, txt, x, y, p, o = {}) {
    if (p <= 0) return; const size = o.size || 34, al = o.align || 'left';
    if ((o.fade || 0) >= 1) return; c.save(); c.globalAlpha *= 1 - (o.fade || 0); c.font = HAND(size); c.textAlign = al; c.textBaseline = 'middle';
    const w = c.measureText(txt).width, x0 = al === 'center' ? x - w / 2 : al === 'right' ? x - w : x;
    c.beginPath(); c.rect(x0 - 10, y - size, (w + 20) * clamp(p * 1.05), size * 2); c.clip();
    if (o.rot) { c.translate(x, y); c.rotate(o.rot); c.translate(-x, -y); }
    halo(c, txt, x, y, 7); c.fillStyle = rgba(o.col || C.ink, 0.88); c.fillText(txt, x, y); c.fillStyle = rgba(o.col || C.ink, 0.3); c.fillText(txt, x + 0.7, y + 0.5);
    c.restore();
  }
  // serif title / big numbers, fade + slight rise
  function serif(c, txt, x, y, p, o = {}) {
    if (p <= 0) return; const size = o.size || 56;
    c.save(); c.globalAlpha *= ss(p); c.font = SERIF(size, o.w || 600, o.it); c.textAlign = o.align || 'center'; c.textBaseline = 'middle';
    const yy = y + (1 - eo(p)) * 10; halo(c, txt, x, yy, 8); c.fillStyle = rgba(o.col || C.ink, 0.9); c.fillText(txt, x, yy); c.restore();
  }
  function mono(c, txt, x, y, p, o = {}) {
    if (p <= 0) return; const size = o.size || 18;
    if ((o.fade || 0) >= 1) return; c.save(); c.globalAlpha *= 1 - (o.fade || 0); c.font = MONO(size); c.textAlign = o.align || 'left'; c.textBaseline = 'middle';
    const sp = txt.split('').join(String.fromCharCode(8202)); const w = c.measureText(sp).width, x0 = (o.align === 'center') ? x - w / 2 : (o.align === 'right' ? x - w : x);
    c.beginPath(); c.rect(x0 - 6, y - size, (w + 12) * clamp(p), size * 2); c.clip();
    halo(c, sp, x, y, 6); c.fillStyle = rgba(o.col || C.ink2, 0.9); c.fillText(sp, x, y); c.restore();
  }
  // pen leader line that grows from the note to its specimen, ends in a dot
  function leader(c, x0, y0, x1, y1, p, o = {}) {
    if (p <= 0) return; const q = eo(p), bend = o.bend ?? 18;
    const mx = (x0 + x1) / 2 - (y1 - y0) / Math.hypot(x1 - x0, y1 - y0 || 1) * bend, my = (y0 + y1) / 2 + (x1 - x0) / Math.hypot(x1 - x0, y1 - y0 || 1) * bend;
    c.save(); c.strokeStyle = rgba(o.col || C.ink, 0.75); c.lineWidth = 1.6; c.lineCap = 'round'; c.beginPath(); c.moveTo(x0, y0);
    const N = 20; for (let i = 1; i <= N * q; i++) { const t = i / N, u = 1 - t; c.lineTo(u * u * x0 + 2 * u * t * mx + t * t * x1, u * u * y0 + 2 * u * t * my + t * t * y1); }
    c.stroke(); if (q > 0.97) { c.fillStyle = rgba(o.col || C.ink, 0.8); c.beginPath(); c.arc(x1, y1, 3, 0, 7); c.fill(); } c.restore();
  }
  // a live brush stroke (small, built under a fixed seed each frame), painted to progress p
  const strokeCache = new Map();
  function brush(c, key, pts, w, col, p = 1, o = {}) {
    let s = strokeCache.get(key); if (!s) { s = withSeed(o.seed ?? (key.length * 977 + key.charCodeAt(0)), () => mk(pts, w, col, o)); strokeCache.set(key, s); }
    drawS(c, s, p, o.col2 || null, o.am ?? 1);
  }
  // an arrow painted as a stroke with a small head
  function arrow(c, key, pts, w, col, p, o = {}) {
    if (p <= 0) return; brush(c, key, pts, w, col, p, { prof: 'even', nb: 0, a: o.a ?? 0.8 });
    if (p > 0.95) { const n = pts.length, [x1, y1] = pts[n - 1], [x0, y0] = pts[n - 2], a = Math.atan2(y1 - y0, x1 - x0), hs = w * 2.6;
      c.save(); c.fillStyle = rgba(col, o.a ?? 0.8); c.beginPath(); c.moveTo(x1 + Math.cos(a) * hs * 0.6, y1 + Math.sin(a) * hs * 0.6); c.lineTo(x1 + Math.cos(a + 2.4) * hs, y1 + Math.sin(a + 2.4) * hs); c.lineTo(x1 + Math.cos(a - 2.4) * hs, y1 + Math.sin(a - 2.4) * hs); c.closePath(); c.fill(); c.restore(); }
  }
  // paper-coloured mist with a wavy edge; level 0..1 covers from the bottom up
  function mist(c, level, seed = 1) {
    if (level <= 0) return; const Y = HH + 40 - (HH + 120) * level;
    c.save(); const g = c.createLinearGradient(0, Y - 60, 0, Y + 80); g.addColorStop(0, rgba(C.paper, 0)); g.addColorStop(0.5, rgba(C.paper, 0.92)); g.addColorStop(1, rgba(C.paper, 1));
    c.fillStyle = g; c.beginPath(); c.moveTo(0, HH + 10); for (let k = 0; k <= 16; k++) c.lineTo((k / 16) * W, Y - 40 + Math.sin(k * 1.3 + seed) * 24 + Math.sin(k * 0.6 + seed * 2) * 16); c.lineTo(W, HH + 10); c.closePath(); c.fill();
    c.globalAlpha = 1; c.fillStyle = rgba(C.paper, 1); c.fillRect(0, Y + 80, W, HH);
    c.restore();
  }
  // a heartbeat envelope: sharp rise, slower fall. beats at times listed (or bpm grid)
  function pulse(t, times, w = 0.28) { let v = 0; for (const b of times) { const d = t - b; if (d >= 0 && d < w) v = Math.max(v, Math.sin((d / w) * Math.PI) * (d < w * 0.3 ? 1 : 1)); } return v; }
  const grid = (t0, t1, per) => { const a = []; for (let x = t0; x < t1; x += per) a.push(x); return a; };
  // a gentle camera: scale about a point + pan
  function cam(c, s, fx, fy, dx = 0, dy = 0) { c.translate(W / 2 + dx, HH / 2 + dy); c.scale(s, s); c.translate(-fx, -fy); }

  // ================= PAINTED SPECIMENS (original drawings; local coords, origin at centre) =================
  // --- the outside of the heart ---
  const HEART_BODY = cr([[-120, -60], [-62, -104], [18, -112], [96, -92], [136, -30], [132, 50], [92, 130], [32, 190], [2, 206], [-42, 172], [-100, 104], [-136, 22]], true, 8);
  function heartOutside() {
    return sprite('heartOut', 420, 520, 210, 270, 41, (c) => {
      // vessels behind
      drawS(c, mk(cr([[-104, -40], [-108, -120], [-112, -235]], false, 6), 30, C.blue, { prof: 'even', a: 0.75 }));
      drawS(c, mk(cr([[12, -90], [14, -170], [-30, -222], [-80, -200], [-96, -150]], false, 6), 34, C.red, { prof: 'even', a: 0.8 }));
      for (const [x, y] of [[-14, -214], [-38, -224], [-60, -218]]) drawS(c, mk(qcurve(x, y, x + 6, y - 40, 4, 6), 11, C.red, { prof: 'tip', a: 0.75 }));
      drawS(c, mk(cr([[-36, -88], [10, -140], [70, -150], [120, -132]], false, 6), 26, C.blue, { prof: 'even', a: 0.7 }));
      // muscle
      paintRegion(c, HEART_BODY, C.muscle, { a: 0.7, n: 12, ang: 0.9, seed: 4 });
      washPoly(c, cr([[40, -80], [120, -40], [120, 60], [60, 160], [10, 190], [40, 60]], true, 6), C.redDeep, 0.35, 3, 7); // shadow side
      washPoly(c, cr([[-90, -40], [-40, -70], [-20, 0], [-60, 60], [-100, 40]], true, 6), C.paper, 0.35, 3, 8); // highlight: lifted paint
      // coronary vessels
      drawS(c, mk(cr([[-20, -98], [-6, -30], [10, 60], [8, 150]], false, 6), 6, C.redDeep, { prof: 'tip', a: 0.75, nb: 0 }));
      drawS(c, mk(cr([[-6, -30], [50, 10], [96, 30]], false, 5), 4, C.redDeep, { prof: 'tip', a: 0.7, nb: 0 }));
      drawS(c, mk(cr([[2, 60], [-50, 90], [-80, 80]], false, 5), 4, C.redDeep, { prof: 'tip', a: 0.7, nb: 0 }));
      drawS(c, mk(cr([[-118, -30], [-90, 40], [-40, 130]], false, 6), 4, C.blueDk, { prof: 'tip', a: 0.5, nb: 0 }));
    });
  }

  // --- the cross-section diagram ---
  const HX = {
    RA: cr(blob(-78, -62, 60, 48, 3, 0.07), true, 6), LA: cr(blob(84, -80, 62, 44, 5, 0.07), true, 6),
    RV: cr([[-150, -2], [-16, -10], [-12, 90], [-26, 160], [-84, 118], [-142, 56]], true, 6),
    LV: cr([[16, -14], [150, -16], [152, 70], [110, 140], [32, 198], [12, 118]], true, 6),
    MUSCLE: cr([[-180, -40], [-158, -120], [-60, -130], [20, -142], [150, -134], [194, -60], [190, 40], [152, 138], [46, 232], [-16, 224], [-112, 152], [-174, 60]], true, 8),
    cRA: [-78, -62], cLA: [84, -80], cV: [0, -12],
    valves: { tri: [-80, -8, 1], mit: [84, -14, 1], pul: [-22, -122, -1], aor: [42, -132, -1] },
    SA: [-112, -100], AV: [-14, -22],
  };
  function chamberSprite(name, col, key) {
    return sprite('ch_' + name + key, 420, 520, 210, 260, 60 + name.length * 7 + key.length, (c) => paintRegion(c, HX[name], col, { a: 0.62, n: 6, ang: name.endsWith('V') ? 1.2 : -0.3, seed: name.charCodeAt(0) + name.charCodeAt(1), ew: 2.6 }));
  }
  function heartXBase() {
    return sprite('hxBase', 520, 600, 260, 330, 77, (c) => {
      // vessels on top of the heart: vena cava (blue, into the right atrium), aorta (red), pulmonary artery (blue), pulmonary vein (red)
      drawS(c, mk(cr([[-112, -96], [-116, -170], [-120, -300]], false, 6), 30, C.blue, { prof: 'even', a: 0.72 }));
      drawS(c, mk(cr([[-150, 30], [-200, 60], [-240, 120]], false, 6), 26, C.blue, { prof: 'even', a: 0.6 }));
      drawS(c, mk(cr([[42, -120], [44, -210], [-10, -268], [-70, -250], [-86, -205]], false, 6), 32, C.red, { prof: 'even', a: 0.78 }));
      drawS(c, mk(cr([[-22, -112], [0, -190], [70, -235], [130, -232]], false, 6), 24, C.blue, { prof: 'even', a: 0.7 }));
      drawS(c, mk(cr([[240, -110], [190, -96], [140, -86]], false, 6), 20, C.red, { prof: 'even', a: 0.7 }));
      paintRegion(c, HX.MUSCLE, C.muscle, { a: 0.5, n: 10, ang: 1.0, seed: 9, ew: 3.4 });
    });
  }
  // st: { fill, sA, sV, av (0 shut..1 open), ex, wall, sa, waveA, avn, waveV, flow }
  function heartX(c, x, y, s, st = {}) {
    const sA = st.sA || 0, sV = st.sV || 0, fill = st.fill ?? 1;
    c.save(); c.translate(x, y); c.scale(s, s);
    const base = heartXBase(); c.save(); c.translate(HX.cV[0], HX.cV[1]); c.scale(1 - sV * 0.035, 1 - sV * 0.05); c.translate(-HX.cV[0], -HX.cV[1]); c.drawImage(base.cv, -base.ox, -base.oy); c.restore();
    const ch = (name, col, cx, cy, k) => { const sp = chamberSprite(name, col, col === C.blue ? 'b' : 'r'); c.save(); c.globalAlpha *= fill; c.translate(cx, cy); c.scale(1 - k * 0.16, 1 - k * 0.2); c.translate(-cx, -cy); c.drawImage(sp.cv, -sp.ox, -sp.oy); c.restore(); };
    ch('RA', C.blue, HX.cRA[0], HX.cRA[1], sA); ch('LA', C.red, HX.cLA[0], HX.cLA[1], sA);
    ch('RV', C.blue, -70, 10, sV); ch('LV', C.red, 70, 10, sV);
    if (st.wall) { c.save(); c.globalAlpha *= st.wall; brush(c, 'septum', cr([[2, -132], [-2, -30], [4, 80], [12, 214]], false, 8), 9, C.redDeep, ss(st.wall), { prof: 'even', nb: 0, a: 0.8 }); c.restore(); }
    // valves: two flaps per valve; open angle follows flow (down for AV valves, up for exits)
    for (const [k, [vx, vy, dir]] of Object.entries(HX.valves)) {
      const open = k === 'tri' || k === 'mit' ? (st.av ?? 1) : (st.ex ?? 0), ang = open * 1.15 * dir;
      c.save(); c.strokeStyle = rgba(C.ink, 0.85); c.lineWidth = 4.2; c.lineCap = 'round';
      c.beginPath(); c.moveTo(vx - 24, vy); c.lineTo(vx - 24 + Math.cos(ang) * 22, vy + Math.sin(ang) * 22); c.moveTo(vx + 24, vy); c.lineTo(vx + 24 - Math.cos(ang) * 22, vy + Math.sin(ang) * 22); c.stroke();
      if (st.valveHi) { c.strokeStyle = rgba(C.gold, 0.5 * st.valveHi); c.lineWidth = 2; c.beginPath(); c.arc(vx, vy, 34, 0, 7); c.stroke(); }
      c.restore();
    }
    // electrical spark (the gold accent)
    const glow = (gx, gy, r, a) => { if (a <= 0) return; const g = c.createRadialGradient(gx, gy, 0, gx, gy, r); g.addColorStop(0, rgba(C.gold, 0.9 * a)); g.addColorStop(0.4, rgba(C.gold, 0.45 * a)); g.addColorStop(1, rgba(C.gold, 0)); c.fillStyle = g; c.beginPath(); c.arc(gx, gy, r, 0, 7); c.fill(); };
    const ring = (gx, gy, r, a, clipPts) => { if (a <= 0) return; c.save(); if (clipPts) { c.beginPath(); for (const P of clipPts) { P.forEach(([px, py], i) => (i ? c.lineTo(px, py) : c.moveTo(px, py))); c.closePath(); } c.clip(); }
      c.strokeStyle = rgba(C.gold, 0.7 * a); c.lineWidth = 16; c.beginPath(); c.arc(gx, gy, r, 0, 7); c.stroke(); c.fillStyle = rgba(C.gold, 0.16 * a); c.beginPath(); c.arc(gx, gy, r, 0, 7); c.fill(); c.restore(); };
    if (st.sa != null) glow(HX.SA[0], HX.SA[1], 22 + 30 * st.sa, 0.35 + 0.65 * st.sa);
    if (st.waveA) ring(HX.SA[0], HX.SA[1], 30 + 260 * eo(st.waveA), 1 - st.waveA * 0.6, [HX.RA, HX.LA]);
    if (st.avn != null) glow(HX.AV[0], HX.AV[1], 16 + 22 * st.avn, 0.3 + 0.7 * st.avn);
    if (st.waveV) ring(HX.AV[0], HX.AV[1] + 40, 20 + 260 * eo(st.waveV), 1 - st.waveV * 0.6, [HX.RV, HX.LV]);
    c.restore();
  }
  // where a local heart-diagram point lands on screen
  const hxp = (x, y, s, lx, ly) => [x + lx * s, y + ly * s];

  // --- lungs: two lobes with a branching airway ---
  function lungs() {
    return sprite('lungs', 460, 400, 230, 190, 91, (c) => {
      paintRegion(c, cr([[-30, -100], [-90, -120], [-160, -60], [-190, 60], [-170, 150], [-80, 170], [-40, 120], [-30, 0]], true, 6), C.lung, { a: 0.66, n: 10, ang: 1.2, seed: 2, ew: 3 });
      paintRegion(c, cr([[30, -100], [90, -120], [160, -60], [190, 60], [170, 150], [80, 170], [60, 110], [30, 0]], true, 6), C.lung, { a: 0.66, n: 10, ang: 1.9, seed: 3, ew: 3 });
      drawS(c, mk([[0, -180], [0, -60]], 18, C.lungDk, { prof: 'even', a: 0.6 }));
      const br = (x, y, a, len, w, d) => { if (d > 4 || len < 10) return; const x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len; drawS(c, mk(qcurve(x, y, x2, y2, L.rnd(-4, 4), 6), w, C.lungDk, { prof: 'tip', a: 0.55, nb: 0 })); br(x2, y2, a - 0.45 + L.rnd(-0.15, 0.15), len * 0.72, w * 0.68, d + 1); br(x2, y2, a + 0.45 + L.rnd(-0.15, 0.15), len * 0.72, w * 0.68, d + 1); };
      br(0, -60, Math.PI * 0.72, 60, 12, 0); br(0, -60, Math.PI * 0.28, 60, 12, 0);
    });
  }
  // --- a standing figure, pale wash ---
  function figure() {
    return sprite('figure', 260, 560, 130, 270, 101, (c) => {
      paintRegion(c, cr(blob(0, -220, 36, 42, 4, 0.05), true, 6), C.skin, { a: 0.45, n: 2, ew: 2.4 });
      paintRegion(c, cr([[-16, -180], [16, -180], [70, -150], [92, -40], [70, 30], [48, -60], [44, 40], [36, 250], [8, 250], [0, 70], [-8, 250], [-36, 250], [-44, 40], [-48, -60], [-70, 30], [-92, -40], [-70, -150]], true, 4), C.skin, { a: 0.42, n: 6, ang: 1.5, seed: 5, ew: 2.4 });
    });
  }
  // --- a closed fist ---
  function fist() {
    return sprite('fist', 300, 300, 150, 150, 111, (c) => {
      paintRegion(c, cr([[-90, -40], [-60, -95], [40, -100], [95, -60], [105, 20], [80, 90], [20, 120], [-60, 110], [-100, 50]], true, 6), C.skin, { a: 0.62, n: 8, ang: 0.3, seed: 6 });
      for (let i = 0; i < 4; i++) { const y = -70 + i * 38; drawS(c, mk(qcurve(-60, y + 14, 70, y, -10, 8), 5, C.skinDk, { prof: 'even', nb: 0, a: 0.6 })); }
      paintRegion(c, cr([[-110, 0], [-60, -20], [-10, 0], [-30, 30], [-100, 40]], true, 5), C.skin, { a: 0.5, n: 2, ew: 2.4, seed: 7 }); // thumb
      paintRegion(c, cr([[-40, 110], [50, 110], [60, 160], [-50, 160]], true, 4), C.skin, { a: 0.35, n: 2, ew: 2, seed: 8 }); // wrist
    });
  }
  // --- brain ---
  function brain() {
    return sprite('brain', 300, 240, 150, 120, 121, (c) => {
      paintRegion(c, cr(blob(0, 0, 120, 82, 9, 0.1, 10), true, 6), '#c9a0a6', { a: 0.6, n: 6, seed: 9 });
      for (let i = 0; i < 9; i++) { const x = L.rnd(-90, 80), y = L.rnd(-55, 45); drawS(c, mk(cr([[x, y], [x + 14, y - 14], [x + 28, y + 4], [x + 40, y - 10]], false, 4), 4, '#8e5f68', { prof: 'even', nb: 0, a: 0.55 })); }
      drawS(c, mk(qcurve(0, -80, 6, 70, 8, 8), 4, '#8e5f68', { prof: 'even', nb: 0, a: 0.5 }));
    });
  }
  // --- an ear ---
  function ear() {
    return sprite('ear', 200, 280, 100, 140, 131, (c) => {
      paintRegion(c, cr([[-10, -110], [50, -100], [70, -30], [40, 40], [20, 110], [-20, 100], [-10, 40], [-40, -20], [-40, -90]], true, 6), C.skin, { a: 0.6, n: 4, seed: 10 });
      drawS(c, mk(cr([[-10, -80], [36, -70], [40, -10], [10, 30], [6, 70]], false, 6), 6, C.skinDk, { prof: 'even', nb: 0, a: 0.6 }));
    });
  }
  // --- a wooden door in a frame (drawn live for the swing) ---
  function door(c, x, y, open, p = 1) {
    const fr = sprite('doorFrame', 260, 380, 130, 190, 141, (g) => { paintRegion(g, [[-110, -170], [110, -170], [110, 175], [-110, 175]], '#c9b393', { a: 0.4, n: 3, seed: 11 }); paintRegion(g, [[-90, -150], [90, -150], [90, 175], [-90, 175]], '#5b4a3c', { a: 0.55, n: 2, seed: 12, edge: false }); });
    const dr = sprite('doorLeaf', 220, 360, 10, 180, 151, (g) => { paintRegion(g, [[0, -150], [180, -150], [180, 175], [0, 175]], '#a8713f', { a: 0.75, n: 8, ang: 1.57, seed: 13 }); for (const yy of [-110, 20]) washPoly(g, [[30, yy], [150, yy], [150, yy + 110], [30, yy + 110]], '#7c4f2a', 0.35, 2, yy); const k = mk([[150, 20], [160, 20]], 10, C.ink2, { nb: 0, a: 0.8 }); drawS(g, k); });
    put(c, fr, x, y, p, { dir: 'bt' });
    if (p > 0.6) { c.save(); c.translate(x - 90, y); c.scale(Math.max(0.08, Math.cos(open * 1.35)), 1); c.drawImage(dr.cv, -dr.ox, -dr.oy); c.restore(); }
  }
  // --- bathtub with a water level ---
  function tub(c, x, y, level, p = 1) {
    const sp = sprite('tub', 480, 260, 240, 130, 161, (g) => {
      paintRegion(g, cr([[-200, -60], [200, -60], [190, 30], [140, 80], [-140, 80], [-190, 30]], true, 6), '#c8cfd2', { a: 0.5, n: 5, seed: 14 });
      for (const fx of [-150, 150]) drawS(g, mk(qcurve(fx, 70, fx + Math.sign(fx) * 14, 112, 4, 6), 12, C.ink2, { prof: 'tip', a: 0.7 }));
      drawS(g, mk(qcurve(-214, -62, 214, -62, 0, 10), 8, '#8f989c', { prof: 'even', nb: 0, a: 0.7 }));
    });
    put(c, sp, x, y, p, { dir: 'lr' });
    if (level > 0 && p >= 1) { const top = lerp(76, -54, level); c.save(); c.translate(x, y); c.beginPath(); c.moveTo(-188, 30); c.lineTo(-196, -56); c.lineTo(196, -56); c.lineTo(188, 30); c.lineTo(140, 78); c.lineTo(-140, 78); c.closePath(); c.clip();
      washPoly(c, [[-210, top], [-60, top - 4], [60, top + 3], [210, top], [210, 90], [-210, 90]], C.water, 0.55, 2, 5); c.restore(); }
  }
  // --- forearm + wrist with two fingers ---
  function wrist() {
    return sprite('wrist', 820, 380, 410, 190, 171, (c) => {
      paintRegion(c, cr([[-400, 40], [-100, -10], [160, -30], [330, -60], [360, 40], [180, 80], [-100, 110], [-400, 140]], true, 6), C.skin, { a: 0.55, n: 10, ang: -0.1, seed: 15 });
      for (const [dx, dy] of [[0, 0], [30, 26]]) { paintRegion(c, cr([[210 + dx, -170 + dy], [236 + dx, -150 + dy], [60 + dx, 12 + dy], [24 + dx, 14 + dy], [20 + dx, -10 + dy]], true, 5), C.skin, { a: 0.7, n: 3, seed: 16 + dx, ew: 2.6 }); washPoly(c, cr(blob(36 + dx, -2 + dy, 16, 10, 3 + dx, 0.05), true, 4), C.paper, 0.5, 1, dx); }
      drawS(c, mk(cr([[-300, 70], [-60, 40], [200, 6]], false, 6), 5, C.blue, { prof: 'even', nb: 0, a: 0.35 }));
    });
  }
  // --- a metronome (body cached, pendulum live) ---
  function metronome(c, x, y, ang, p = 1) {
    const sp = sprite('metro', 220, 300, 110, 150, 181, (g) => { paintRegion(g, [[-50, -120], [50, -120], [90, 130], [-90, 130]], '#9a6b45', { a: 0.6, n: 5, ang: 1.5, seed: 17 }); washPoly(g, [[-30, -100], [30, -100], [50, 90], [-50, 90]], '#e8d8bc', 0.5, 2, 3); });
    put(c, sp, x, y, p, { dir: 'bt' });
    if (p >= 1) { c.save(); c.translate(x, y + 90); c.rotate(ang); c.strokeStyle = rgba(C.ink, 0.85); c.lineWidth = 5; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, 0); c.lineTo(0, -180); c.stroke(); c.fillStyle = rgba(C.redDeep, 0.9); c.fillRect(-12, -130, 24, 18); c.restore(); }
  }

  // ================= SCENES =================
  const SC = [];
  const scene = (t0, tr, draw) => SC.push({ t0, tr, draw });
  const BEAT = 0.82; // resting beat spacing used for idle pulses
  // chapter card: a fresh sheet, a wash ribbon, part number and title
  function card(c, t, t0, key, col, num, title, tNum, tTitle) {
    bg(c, key, col, 'pool');
    const p = ph(t, t0 + 0.2, t0 + 1.3);
    c.save(); c.globalAlpha = 1; brush(c, key + 'rib', cr([[330, 400], [640, 388], [950, 404]], false, 10), 46, col, eo(p), { prof: 'brush', a: 0.55 }); c.restore();
    mono(c, num, W / 2, 268, ph(t, tNum - 0.1, tNum + 0.5), { align: 'center', size: 20 });
    serif(c, title, W / 2, 338, ph(t, tTitle - 0.15, tTitle + 0.5), { size: 74, w: 600, it: true });
  }

  // --- S1 hook: the heart paints itself; the day's counter runs to 100,000 ---
  scene(0, 'cut', (c, t) => {
    bg(c, 'hook', C.muscle, 'pool', C.straw);
    const beats = grid(1.0, 4.8, BEAT), pu = pulse(t, beats);
    put(c, heartOutside(), 450, 380, ph(t, 0.0, 0.95), { dir: 'bt', s: 0.92 * (1 + pu * 0.045) });
    mono(c, 'BEATS TODAY', 760, 262, ph(t, 0.9, 1.4), { size: 18 });
    const n = Math.round(100000 * eio(ph(t, 1.42, 2.6)) / 1000) * 1000;
    if (t > 1.3) serif(c, n.toLocaleString('en-US'), 760, 340, ph(t, 1.35, 1.6), { size: 112, align: 'left', w: 700, col: C.redDeep });
    hand(c, 'every single day', 768, 420, ph(t, 2.4, 3.0), { size: 40 });
    hand(c, '...and nobody tells it to', 768, 480, ph(t, 3.25, 4.1), { size: 36, col: C.ink2 });
    brush(c, 'hookUnder', qcurve(760, 384, 1110, 380, 3, 10), 6, C.redDeep, ph(t, 2.5, 2.9), { prof: 'even', nb: 0, a: 0.6 });
  });

  // --- S2 specimen plate: fist and heart, about the same size ---
  scene(4.6, 'wipe', (c, t) => {
    bg(c, 'fist', C.straw, 'band');
    put(c, fist(), 420, 360, ph(t, 4.9, 5.9), { dir: 'lr' });
    put(c, heartOutside(), 860, 360, ph(t, 5.5, 6.4), { dir: 'bt', s: 0.6 * (1 + pulse(t, grid(6.6, 9.5, BEAT)) * 0.04) });
    serif(c, '≈', 640, 350, ph(t, 6.3, 6.7), { size: 90, col: C.ink2 });
    hand(c, 'about the size of your fist', 640, 560, ph(t, 6.35, 7.1), { size: 40, align: 'center' });
    mono(c, 'WEIGHT: UNDER 1 LB', 860, 590, ph(t, 7.6, 8.3), { align: 'center', size: 18 });
    leader(c, 860, 572, 860, 520, ph(t, 8.0, 8.4), { bend: 0 });
    mono(c, 'PLATE 1 · COR', 70, 60, ph(t, 4.8, 5.4), { size: 14 });
  });

  // --- S3 a long handscroll of beats running back to before birth ---
  function beatTrace(c, x0, x1, y, amp, key, p) {
    // a brushy pulse trace: flat, then a lub-dub spike pair every 70 px
    const pts = []; for (let x = x0; x <= x1; x += 6) { const ph2 = ((x - x0) % 70) / 70; let yy = 0; if (ph2 > 0.40 && ph2 < 0.46) yy = -amp * Math.sin((ph2 - 0.40) / 0.06 * Math.PI); if (ph2 > 0.52 && ph2 < 0.57) yy = -amp * 0.45 * Math.sin((ph2 - 0.52) / 0.05 * Math.PI); pts.push([x, y + yy]); }
    brush(c, key, pts, 4.5, C.red, p, { prof: 'even', nb: 0, a: 0.8, rough: 0.2 });
  }
  scene(8.8, 'page', (c, t) => {
    bg(c, 'scroll', C.sky, 'top');
    const pan = -1500 * eio(ph(t, 9.0, 12.4));
    c.save(); c.translate(pan, 0);
    beatTrace(c, 80, 2700, 400, 70, 'trace1', ph(t, 8.9, 11.6));
    const marks = [[200, 'TODAY'], [700, '1 YEAR AGO'], [1250, '10 YEARS AGO'], [1800, '20 YEARS AGO'], [2450, 'BEFORE BIRTH']];
    for (const [x, lab] of marks) { const q = ph(t, 8.95 + x / 900, 9.4 + x / 900); brush(c, 'tick' + x, [[x, 470], [x, 500]], 3, C.ink2, q, { prof: 'even', nb: 0, a: 0.7 }); mono(c, lab, x, 528, q, { align: 'center', size: 16 }); }
    c.restore();
    hand(c, 'not one day off', 120, 210, ph(t, 9.3, 10.1), { size: 46 });
    hand(c, '...since before you were born', 160, 270, ph(t, 10.6, 11.6), { size: 38, col: C.ink2 });
  });

  // --- S4 the question, then the brush opens the page ---
  scene(11.8, 'mist', (c, t) => {
    bg(c, 'question', C.lung, 'pool');
    serif(c, 'How does one lump of muscle', W / 2, 270, ph(t, 12.0, 12.8), { size: 62, it: true });
    serif(c, 'keep that up?', W / 2, 350, ph(t, 13.5, 14.2), { size: 78, w: 700, col: C.redDeep });
    put(c, heartOutside(), W / 2, 540, ph(t, 12.6, 13.6), { dir: 'bt', s: 0.38 * (1 + pulse(t, grid(13.7, 17, BEAT)) * 0.05) });
    // "let's paint it open": a broad wet stroke sweeps across
    brush(c, 'openSweep', qcurve(-40, 470, 1320, 440, -40, 16), 120, C.red, ph(t, 15.0, 15.9), { prof: 'brush', a: 0.32 });
    hand(c, "let's paint it open", W / 2, 620, ph(t, 14.8, 15.6), { size: 38, align: 'center' });
  });

  // --- S5 chapter one card ---
  scene(16.6, 'mist', (c, t) => card(c, t, 16.6, 'card1', C.blue, 'PART ONE', 'Two pumps in one', T(7, 'part'), T(7, 'two')));

  // --- S6/S7 the cross-section: one pump? two pumps, one wall, four rooms ---
  function hxScene(c, t) {
    bg(c, 'hx1', C.sky, 'left', C.lung);
    // camera: wide, then a slow push for the room names
    const z = lerp(1, 1.12, eio(ph(t, 25.0, 27.0))), fy = lerp(360, 340, eio(ph(t, 25, 27)));
    c.save(); cam(c, z, 600, fy, 0, 0);
    const X = 600, Y = 400, S = 1.0;
    const blueIn = ph(t, 22.2, 22.8), redIn = ph(t, 22.5, 23.1);
    c.save(); const base = ph(t, 19.7, 21.0); c.beginPath(); c.rect(0, Y + 260 - 720 * eio(base), W * 2, 900); c.clip();
    heartX(c, X, Y, S, { fill: 0, ex: 0, av: 1 }); c.restore();
    // chambers wash in, right side blue first, left side red
    c.save(); c.globalAlpha = blueIn; heartXChambers(c, X, Y, S, 'R'); c.restore();
    c.save(); c.globalAlpha = redIn; heartXChambers(c, X, Y, S, 'L'); c.restore();
    if (t > 24.1) { c.save(); c.translate(X, Y); c.scale(S, S); brush(c, 'septum', cr([[2, -132], [-2, -30], [4, 80], [12, 214]], false, 8), 9, C.redDeep, ph(t, 24.2, 24.8), { prof: 'even', nb: 0, a: 0.8 }); c.restore(); }
    c.restore();
    // notes (screen space)
    hand(c, 'one pump?', 90, 160, ph(t, 20.6, 21.3), { fade: ph(t, 22.0, 22.3),  size: 44 });
    hand(c, 'pump 1', 160, 420, ph(t, 22.3, 22.9), { fade: ph(t, 26.4, 26.9), size: 40, col: C.blueDk }); leader(c, 230, 440, 440, 470, ph(t, 22.5, 23.0) * (1 - ph(t, 25.0, 25.3)));
    hand(c, 'pump 2', 1000, 420, ph(t, 22.6, 23.2), { fade: ph(t, 26.4, 26.9), size: 40, col: C.redDeep }); leader(c, 1000, 440, 780, 470, ph(t, 22.8, 23.3) * (1 - ph(t, 25.0, 25.3)));
    hand(c, 'one shared wall', 860, 640, ph(t, 24.3, 25.0), { fade: ph(t, 26.6, 27),  size: 36 }); leader(c, 860, 625, 620, 560, ph(t, 24.4, 24.9) * (1 - ph(t, 26.6, 27)));
    hand(c, 'atrium', 170, 200, ph(t, 27.4, 28.0), { size: 40 }); leader(c, 260, 215, 460, 300, ph(t, 27.5, 28.0));
    hand(c, 'atrium', 1010, 180, ph(t, 27.5, 28.1), { size: 40 }); leader(c, 1010, 200, 780, 280, ph(t, 27.6, 28.1));
    hand(c, 'ventricle', 120, 600, ph(t, 29.5, 30.1), { size: 40 }); leader(c, 250, 590, 470, 520, ph(t, 29.6, 30.1));
    hand(c, 'ventricle', 1000, 600, ph(t, 29.6, 30.2), { size: 40 }); leader(c, 1000, 590, 780, 520, ph(t, 29.7, 30.2));
    mono(c, '4 CHAMBERS', W / 2, 60, ph(t, 31.0, 31.6), { align: 'center', size: 22 });
  }
  // chamber washes alone (for washing them in separately)
  function heartXChambers(c, x, y, s, side) {
    c.save(); c.translate(x, y); c.scale(s, s);
    const d = (name, col) => { const sp = chamberSprite(name, col, col === C.blue ? 'b' : 'r'); c.drawImage(sp.cv, -sp.ox, -sp.oy); };
    if (side === 'R') { d('RA', C.blue); d('RV', C.blue); } else { d('LA', C.red); d('LV', C.red); }
    c.restore();
  }
  scene(19.6, 'wipe', hxScene);
  scene(25.0, 'cut', hxScene);

  // --- S8 transect: body -> right heart -> lungs (lateral dolly) ---
  const flowPath = { bodyToRA: cr([[150, 330], [260, 220], [420, 200], [560, 250]], false, 8), rvToLung: cr([[620, 380], [760, 300], [900, 250], [1050, 300]], false, 8),
    lungToLA: cr([[1050, 330], [930, 380], [820, 360], [700, 300]], false, 8) };
  function transect(c, t, cx, opts) {
    c.save(); c.translate(W / 2 - cx, 0);
    put(c, figure(), 150, 400, opts.fig ?? 1, { dir: 'bt', s: 0.8 });
    heartX(c, 620, 380, 0.5, { fill: 1, av: 1, ex: 0 });
    put(c, lungs(), 1120, 360, opts.lung ?? 1, { dir: 'bt', s: 0.62 });
    if (opts.blue1) arrow(c, 'bodyToRA', flowPath.bodyToRA, 10, C.blue, opts.blue1, { a: 0.75 });
    if (opts.blue2) arrow(c, 'rvToLung', flowPath.rvToLung, 10, C.blue, opts.blue2, { a: 0.75 });
    if (opts.red1) arrow(c, 'lungToLA', flowPath.lungToLA, 10, C.red, opts.red1, { a: 0.8 });
    c.restore();
  }
  scene(32.6, 'page', (c, t) => {
    bg(c, 'transect', C.sage, 'band', C.sky);
    const cx = lerp(470, 820, eio(ph(t, 33.0, 39.8)));
    transect(c, t, cx, { fig: ph(t, 32.8, 33.6), lung: ph(t, 37.0, 38.2), blue1: ph(t, 33.6, 35.2), blue2: ph(t, 37.4, 39.6) });
    hand(c, 'tired blood, low on oxygen', 90, 120, ph(t, 35.6, 36.6), { size: 38, col: C.blueDk });
    hand(c, 'a short hop to the lungs', 760, 610, ph(t, 38.7, 39.6), { size: 38 });
  });

  // --- S9 in the lungs: air sacs swap gases with a capillary ---
  scene(40.0, 'wipe', (c, t) => {
    bg(c, 'alveoli', C.lung, 'pool', C.sky);
    const z = lerp(1.0, 1.06, ph(t, 40, 44.3)); c.save(); cam(c, z, 640, 360);
    const sacs = sprite('sacs', 1000, 560, 500, 280, 201, (g) => { for (let i = 0; i < 9; i++) { const a = i / 9 * 6.28, r = i ? 170 : 0; paintRegion(g, cr(blob(Math.cos(a) * r * 1.6, Math.sin(a) * r * 0.8 - 30, 95, 80, 20 + i, 0.1), true, 6), C.lung, { a: 0.42, n: 3, seed: 30 + i, ew: 2.2 }); } });
    put(c, sacs, 640, 330, ph(t, 40.1, 41.0), { dir: 'lr' });
    // capillary: blue -> red once oxygen is in
    const red = ph(t, 43.0, 43.9), col = mixc(C.blue, C.red, red);
    brush(c, 'capA', cr([[-20, 560], [300, 520], [640, 560], [980, 520], [1300, 560]], false, 10), 40, C.blue, ph(t, 40.6, 41.4), { prof: 'even', a: 0.7, col2: col });
    // CO2 out (ink dots rising out of the blood), O2 in (gold-free: sky dots sinking in)
    for (let i = 0; i < 12; i++) {
      const x = 120 + i * 95, q1 = ph(t, 41.3 + i * 0.04, 42.6 + i * 0.04), q2 = ph(t, 42.9 + i * 0.04, 43.9 + i * 0.04);
      if (q1 > 0 && q1 < 1) { c.fillStyle = rgba(C.ink2, 0.6 * Math.sin(q1 * Math.PI)); c.beginPath(); c.arc(x, 540 - q1 * 260, 7, 0, 7); c.fill(); }
      if (q2 > 0 && q2 < 1) { c.strokeStyle = rgba(C.blueDk, 0.8 * Math.sin(q2 * Math.PI)); c.lineWidth = 3; c.beginPath(); c.arc(x + 40, 260 + q2 * 290, 8, 0, 7); c.stroke(); }
    }
    c.restore();
    mono(c, 'CARBON DIOXIDE  OUT ↑', 90, 70, ph(t, 41.3, 42.0), { size: 20 });
    mono(c, 'OXYGEN  IN ↓', 90, 108, ph(t, 42.9, 43.5), { size: 20, col: C.blueDk });
    hand(c, 'tiny air sacs', 1060, 120, ph(t, 40.6, 41.2), { size: 36, align: 'center' });
  });

  // --- S10 bright red blood flows back into the left side ---
  scene(44.0, 'wipe', (c, t) => {
    bg(c, 'transect2', C.lung, 'band', C.straw);
    transect(c, t, 820, { red1: ph(t, 44.6, 46.9) });
    // the left ventricle gets a ring: the big job
    const q = ph(t, 48.6, 49.3); if (q > 0) { c.save(); c.translate(W / 2 - 820, 0); brush(c, 'lvRing', cr(blob(655, 400, 70, 70, 33, 0.08, 9), true, 6).concat([[725, 395]]), 5, C.ink, q, { prof: 'even', nb: 0, a: 0.75 }); c.restore(); }
    hand(c, 'bright red, full of oxygen', 760, 120, ph(t, 44.8, 45.8), { size: 38, col: C.redDeep });
    hand(c, 'the left side has the big job', 120, 620, ph(t, 48.2, 49.3), { size: 40 });
  });

  // --- S11 the whole body: out to the toes and back ---
  scene(49.5, 'page', (c, t) => {
    bg(c, 'bodyLoop', C.straw, 'right', C.sage);
    put(c, figure(), 640, 380, ph(t, 49.6, 50.2), { dir: 'tb', s: 1.2 });
    const heartAt = [655, 250];
    put(c, heartOutside(), heartAt[0], heartAt[1], ph(t, 49.8, 50.3), { s: 0.12 * (1 + pulse(t, grid(50.4, 52.4, BEAT)) * 0.08) });
    arrow(c, 'toToes', cr([[670, 270], [700, 400], [690, 560], [690, 680]], false, 8), 9, C.red, ph(t, 49.9, 51.6), { a: 0.85 });
    arrow(c, 'fromToes', cr([[600, 690], [596, 540], [590, 400], [628, 268]], false, 8), 9, C.blue, ph(t, 51.7, 52.4), { a: 0.75 });
    hand(c, 'all the way to your toes', 760, 640, ph(t, 51.0, 51.8), { size: 38 });
    hand(c, '...and back', 380, 640, ph(t, 51.9, 52.4), { size: 38, col: C.blueDk });
  });

  // --- S12 two walls compared: the left one is 2-3 times thicker ---
  scene(52.4, 'wipe', (c, t) => {
    bg(c, 'walls', C.muscle, 'pool');
    const slab = (key, x, w, col, p) => put(c, sprite(key, w + 60, 420, (w + 60) / 2, 210, 300 + w, (g) => paintRegion(g, cr([[-w / 2, -170], [w / 2, -176], [w / 2 + 6, 0], [w / 2, 176], [-w / 2, 170], [-w / 2 - 6, 0]], true, 4), col, { a: 0.7, n: 6, ang: 1.5, seed: w })), x, 360, p, { dir: 'bt' });
    slab('wallR', 420, 46, C.muscle, ph(t, 52.7, 53.4));
    slab('wallL', 820, 130, C.muscleDk, ph(t, 53.3, 54.0));
    mono(c, 'RIGHT VENTRICLE WALL', 420, 580, ph(t, 52.9, 53.5), { align: 'center', size: 16 });
    mono(c, 'LEFT VENTRICLE WALL', 820, 580, ph(t, 53.5, 54.1), { align: 'center', size: 16 });
    serif(c, '2–3×', 620, 300, ph(t, 54.1, 54.6), { size: 96, w: 700, col: C.redDeep });
    serif(c, 'thicker', 620, 380, ph(t, 55.0, 55.5), { size: 48, it: true });
    // a painted dumbbell beside the thick wall
    const dq = ph(t, 56.2, 56.9); if (dq > 0) { brush(c, 'dbBar', [[960, 420], [1120, 420]], 8, C.ink2, dq, { prof: 'even', nb: 0, a: 0.8 }); for (const x of [970, 1110]) brush(c, 'db' + x, [[x, 385], [x, 455]], 26, C.ink2, dq, { prof: 'even', a: 0.75 }); }
    hand(c, 'the bodybuilder', 1040, 500, ph(t, 56.2, 57.2), { size: 40, align: 'center' });
  });

  // --- S13 chapter two card ---
  scene(57.9, 'mist', (c, t) => card(c, t, 57.9, 'card2', C.muscle, 'PART TWO', 'The lub-dub', T(23, 'part'), T(23, 'lubdub')));

  // --- S14 an ear to the chest: LUB, DUB ---
  scene(61.0, 'wipe', (c, t) => {
    bg(c, 'ear', C.sky, 'left');
    put(c, ear(), 330, 360, ph(t, 61.3, 62.2), { dir: 'bt', s: 1.2 });
    // the chest: a broad skin curve on the right
    const hits = [[T(25, 'lub'), 'LUB', 560, 300], [T(25, 'dub'), 'DUB', 980, 300], [63.98, 'LUB', 560, 450], [64.37, 'DUB', 980, 450]];
    for (const [ht, w, x, y] of hits) {
      const q = ph(t, ht - 0.05, ht + 0.12), sc = 1 + 0.25 * Math.max(0, 1 - (t - ht) / 0.25) * (t > ht ? 1 : 0);
      if (q > 0) { c.save(); c.translate(x, y); c.scale(sc, sc); serif(c, w, 0, 0, q, { size: 96, w: 700, col: w === 'LUB' ? C.redDeep : C.blueDk }); c.restore(); }
    }
    // ripples from the chest
    for (const ht of [63.19, 63.58, 63.98, 64.37]) { const d = t - ht; if (d > 0 && d < 0.8) { c.save(); c.strokeStyle = rgba(C.ink2, 0.5 * (1 - d / 0.8)); c.lineWidth = 3; c.beginPath(); c.arc(1240, 370, 120 + d * 560, Math.PI * 0.82, Math.PI * 1.18); c.stroke(); c.restore(); } }
  });

  // --- S15 not the squeeze: the sound of doors slamming ---
  scene(64.9, 'page', (c, t) => {
    bg(c, 'door', C.straw, 'band');
    const out = eio(ph(t, 67.1, 67.7));
    put(c, heartOutside(), 380 - out * 120, 360, ph(t, 65.0, 65.6), { s: 0.62 * (1 - 0.06 * pulse(t, grid(65.6, 67.2, 0.55), 0.35)), a: 1 - out * 0.65 });
    hand(c, 'the muscle squeezing?', 380, 640, ph(t, 65.5, 66.6), { fade: out * 0.6, size: 40, align: 'center' });
    if (out > 0) brush(c, 'strike', qcurve(240, 650, 520, 630, 4, 8), 6, C.redDeep, ph(t, 67.2, 67.6), { prof: 'even', nb: 0, a: 0.8 });
    const open = 1 - eio(ph(t, 68.45, 68.82));
    door(c, 900, 360, open, ph(t, 67.3, 68.0));
    const sl = t - 68.82; if (sl > 0 && sl < 0.6) { c.save(); c.strokeStyle = rgba(C.ink, 0.7 * (1 - sl / 0.6)); c.lineWidth = 4; c.lineCap = 'round'; for (let i = 0; i < 4; i++) { const yy = 260 + i * 60; c.beginPath(); c.moveTo(1010 + sl * 40, yy); c.lineTo(1060 + sl * 80, yy - 6); c.stroke(); } c.restore(); }
    hand(c, 'doors slamming!', 900, 620, ph(t, 68.7, 69.4), { size: 42, align: 'center' });
  });

  // --- S16-S18 the four valves, the lub, the dub ---
  function valveState(t) {
    // ventricles squeeze 74.1-74.7, relax 80.4-81.2; AV valves shut at "snap shut" (77.6), open again 84.6;
    // exit valves open after the AV snap (77.9), shut at the second "snap shut" (83.3)
    const sV = ph(t, 74.1, 74.7) * (1 - ph(t, 80.4, 81.2));
    const av = 1 - eio(ph(t, 77.5, 77.75)) + eio(ph(t, 84.6, 85.2));
    const ex = eio(ph(t, 77.9, 78.3)) * (1 - eio(ph(t, 83.25, 83.5)));
    return { sV, av: clamp(av), ex };
  }
  function valveScene(c, t) {
    bg(c, 'valves', C.sky, 'pool', C.lung);
    const st = valveState(t);
    const z = lerp(1.0, 1.18, eio(ph(t, 73.6, 75.0))) - lerp(0, 0.1, eio(ph(t, 86.0, 86.6))), fy = lerp(380, 330, eio(ph(t, 73.6, 75)));
    c.save(); cam(c, z, 640, fy);
    heartX(c, 640, 410, 0.95, { fill: 1, sV: st.sV, av: st.av, ex: st.ex, valveHi: ph(t, 70.6, 71.0) * (1 - ph(t, 73.4, 73.8)) });
    // flow arrows through the open valves (one way)
    const flowA = ph(t, 72.5, 73.3) * (1 - ph(t, 73.8, 74.2));
    if (flowA > 0) { c.save(); c.globalAlpha = flowA; arrow(c, 'fA1', [[640 - 76, 300], [640 - 76, 330], [640 - 76, 360]], 7, C.blueDk, ph(t, 72.5, 73.0)); arrow(c, 'fA2', [[640 + 80, 290], [640 + 80, 320], [640 + 80, 350]], 7, C.redDeep, ph(t, 72.6, 73.1)); c.restore(); }
    const up = st.ex * (1 - ph(t, 82.6, 83.2));
    if (up > 0.05) { c.save(); c.globalAlpha = up; arrow(c, 'fU1', [[620, 330], [618, 300], [614, 250]], 7, C.blueDk, ph(t, 78.0, 78.6)); arrow(c, 'fU2', [[680, 320], [682, 290], [684, 240]], 7, C.redDeep, ph(t, 78.1, 78.7)); c.restore(); }
    c.restore();
    mono(c, '4 VALVES', 90, 70, ph(t, 70.6, 71.2), { size: 22 });
    hand(c, 'little flaps that only open one way', 90, 120, ph(t, 71.6, 73.0), { fade: ph(t, 73.5, 73.9),  size: 36 });
    hand(c, 'ventricles squeeze', 900, 640, ph(t, 74.3, 75.1), { fade: ph(t, 79.4, 79.8),  size: 38 });
    hand(c, 'ventricles relax', 900, 640, ph(t, 80.6, 81.3), { fade: ph(t, 86.5, 86.8),  size: 38 });
    // stamps: LUB at the AV valves, DUB at the exits
    const stamp = (txt, x, y, ht, col, out) => { const q = ph(t, ht - 0.05, ht + 0.1); if (q <= 0) return; c.save(); c.globalAlpha = 1 - ph(t, out, out + 0.4); c.translate(x, y); c.rotate(-0.08); const s2 = 1 + 0.3 * Math.max(0, 1 - (t - ht) / 0.2); c.scale(s2, s2);
      c.strokeStyle = rgba(col, 0.8); c.lineWidth = 4; c.strokeRect(-92, -44, 184, 88); serif(c, txt, 0, 4, 1, { size: 70, w: 700, col }); c.restore(); };
    stamp('LUB', 1050, 380, 77.62, C.redDeep, 86.4); stamp('LUB', 1050, 380, T(32, 'lub'), C.redDeep, 86.4);
    stamp('DUB', 230, 380, 83.35, C.blueDk, 86.4); stamp('DUB', 230, 380, T(35, 'dub'), C.blueDk, 86.4);
    hand(c, 'top-to-bottom valves snap shut', 870, 470, ph(t, 77.5, 78.4), { fade: ph(t, 79.4, 79.8),  size: 32 });
    hand(c, 'exit valves snap shut', 90, 470, ph(t, 83.2, 84.0), { fade: ph(t, 86.4, 86.7),  size: 32 });
  }
  scene(69.5, 'wipe', valveScene);
  scene(73.6, 'cut', valveScene);
  scene(79.5, 'cut', valveScene);

  // --- S19 one-way doors along a tube; blood only goes forward ---
  scene(86.6, 'page', (c, t) => {
    bg(c, 'tube', C.lung, 'band', C.straw);
    const pan = -260 * eio(ph(t, 86.8, 91.2));
    c.save(); c.translate(pan, 0);
    put(c, sprite('tubeBody', 1700, 220, 30, 110, 401, (g) => { paintRegion(g, [[0, -70], [1640, -76], [1650, 70], [0, 76]], C.muscle, { a: 0.45, n: 10, ang: 0.05, seed: 40 }); }), 40, 380, ph(t, 86.7, 87.5), { dir: 'lr' });
    const flapsX = [300, 620, 940, 1260];
    const open = (i) => 0.5 + 0.5 * Math.sin((t - 87.4) * 4.2 - i * 0.9);
    for (let i = 0; i < 4; i++) { const x = flapsX[i], a = open(i) * 1.1; if (t < 87.0 + i * 0.12) continue; c.save(); c.strokeStyle = rgba(C.ink, 0.85); c.lineWidth = 5; c.lineCap = 'round'; c.beginPath(); c.moveTo(x, 310); c.lineTo(x + Math.sin(a) * 60, 310 + Math.cos(a) * 60); c.moveTo(x, 450); c.lineTo(x + Math.sin(a) * 60, 450 - Math.cos(a) * 60); c.stroke(); c.restore(); }
    // drops of blood moving forward
    for (let k = 0; k < 14; k++) { const x = ((t - 87.2) * 150 + k * 120) % 1600 + 40; if (t < 87.4) continue; c.fillStyle = rgba(C.red, 0.7); c.beginPath(); c.ellipse(x, 380 + Math.sin(k * 2.1) * 20, 16, 10, 0, 0, 7); c.fill(); }
    c.restore();
    hand(c, 'one-way doors', 90, 160, ph(t, 86.8, 87.6), { size: 48 });
    mono(c, 'BLOOD ONLY MOVES FORWARD  →', 90, 600, ph(t, 89.4, 90.2), { size: 22 });
  });

  // --- S20 chapter three card ---
  scene(91.6, 'mist', (c, t) => card(c, t, 91.6, 'card3', C.straw, 'PART THREE', 'The built-in spark', T(37, 'part'), T(37, 'builtin')));

  // --- S21 the brain doesn't send the beat ---
  scene(94.2, 'wipe', (c, t) => {
    bg(c, 'brainHeart', C.sky, 'top', C.lung);
    put(c, brain(), 300, 300, ph(t, 94.4, 95.3), { dir: 'lr' });
    put(c, heartOutside(), 940, 400, ph(t, 95.0, 95.9), { dir: 'bt', s: 0.6 * (1 + pulse(t, grid(96.0, 99.6, BEAT)) * 0.05) });
    // a dotted "command" line from brain to heart that gets struck out
    const q = ph(t, 96.8, 97.6); if (q > 0) { c.save(); c.setLineDash([8, 12]); c.strokeStyle = rgba(C.ink2, 0.7); c.lineWidth = 3; c.beginPath(); const N = 30; for (let i = 0; i <= N * q; i++) { const u = i / N; c.lineTo(lerp(420, 800, u), lerp(320, 380, u) - Math.sin(u * Math.PI) * 60); } c.stroke(); c.restore(); }
    const x = ph(t, 98.6, 99.1); if (x > 0) { brush(c, 'crossA', [[550, 240], [670, 360]], 15, C.redDeep, x, { prof: 'brush', a: 0.85 }); brush(c, 'crossB', [[670, 240], [550, 360]], 15, C.redDeep, ph(t, 98.8, 99.2), { prof: 'brush', a: 0.85 }); }
    hand(c, '"beat now"?', 610, 200, ph(t, 97.3, 98.0), { size: 40, align: 'center' });
    hand(c, 'it beats anyway', 940, 650, ph(t, 98.9, 99.5), { size: 40, align: 'center' });
  });

  // --- S22-S24 the pacemaker: SA node spark, the atria, the AV pause, the ventricles ---
  function sparkScene(c, t) {
    bg(c, 'spark', C.straw, 'pool', C.sky);
    // camera: push toward the SA node, back out to the whole heart, then down to the AV node
    const z = 1 + 0.35 * eio(ph(t, 99.5, 101.6)) - 0.35 * eio(ph(t, 104.0, 105.2)) + 0.18 * eio(ph(t, 111.4, 112.6)) - 0.18 * eio(ph(t, 118.6, 119.4));
    const fx = 640 + (-110 * eio(ph(t, 99.5, 101.6)) + 110 * eio(ph(t, 104.0, 105.2))), fy = 380 + (-100 * eio(ph(t, 99.5, 101.6)) + 100 * eio(ph(t, 104.0, 105.2)));
    c.save(); cam(c, z, fx, fy);
    const fire = t >= 106.8 ? Math.max(0, 1 - (t - 106.86) / 0.5) : 0, idle = 0.25 + 0.2 * Math.sin(t * 6);
    const sa = t < 100.2 ? null : clamp(Math.max(ph(t, 100.2, 100.8) * idle, fire) + (t > 106.8 && t < 111 ? 0.3 : 0));
    const waveA = ph(t, 107.7, 109.5) * (t < 110.2 ? 1 : 1 - ph(t, 110.2, 110.6));
    const sA = ph(t, 110.4, 110.8) * (1 - ph(t, 111.4, 111.9));
    const avn = t < 113.9 ? null : clamp(ph(t, 113.9, 114.3) * (0.8 + 0.2 * Math.sin(t * 9)) * (1 - ph(t, 120.6, 121.2)));
    const waveV = ph(t, 120.6, 121.4);
    const sV = ph(t, 120.85, 121.2);
    heartX(c, 640, 400, 1.0, { fill: 1, sa, waveA, sA, avn, waveV, sV, av: 1 - sV, ex: sV });
    c.restore();
    const S2 = (lx, ly) => { const sx = 640 + lx, sy = 400 + ly; return [W / 2 + (sx - fx) * z, HH / 2 + (sy - fy) * z]; };
    const [sax, say] = S2(HX.SA[0], HX.SA[1]), [avx, avy] = S2(HX.AV[0], HX.AV[1]);
    hand(c, 'its own pacemaker', 110, 120, ph(t, 99.8, 100.8), { fade: ph(t, 103.6, 104),  size: 42 });
    hand(c, 'sinoatrial node', sax + 120, say - 120, ph(t, 102.9, 103.7), { fade: ph(t, 104, 104.3),  size: 40 }); leader(c, sax + 140, say - 100, sax + 14, say - 10, ph(t, 103.1, 103.6) * (1 - ph(t, 104, 104.3)));
    mono(c, 'SA NODE · FIRES ~1× PER SECOND', 90, 70, ph(t, 104.6, 105.4), { fade: ph(t, 111.2, 111.6),  size: 18 });
    hand(c, 'spark!', sax - 40, say - 90, ph(t, 106.8, 107.2), { fade: ph(t, 108.6, 109),  size: 46, col: C.ink2 });
    hand(c, 'top chambers squeeze first', 820, 640, ph(t, 110.3, 111.2), { fade: ph(t, 111.8, 112.2),  size: 36 });
    hand(c, 'AV node: checkpoint', avx + 160, avy + 150, ph(t, 113.9, 114.7), { fade: ph(t, 118.4, 118.8),  size: 38 }); leader(c, avx + 170, avy + 130, avx + 10, avy + 14, ph(t, 114.0, 114.5) * (1 - ph(t, 118.4, 118.8)));
    // the pause: a little stopwatch dial
    const dq = ph(t, 115.3, 115.8) * (1 - ph(t, 120.4, 120.8));
    if (dq > 0) { c.save(); c.globalAlpha = dq; const cx = 1080, cy = 170; c.strokeStyle = rgba(C.ink, 0.8); c.lineWidth = 3; c.beginPath(); c.arc(cx, cy, 56, 0, 7); c.stroke(); c.fillRect(cx - 8, cy - 70, 16, 10);
      const sw = ph(t, 115.5, 116.8); c.fillStyle = rgba(C.straw, 0.8); c.beginPath(); c.moveTo(cx, cy); c.arc(cx, cy, 50, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * 0.1 * sw * 3); c.closePath(); c.fill();
      c.restore(); mono(c, '≈ 0.1 SECOND', 1080, 260, dq * ph(t, 116.3, 116.9), { align: 'center', size: 20 }); }
    hand(c, 'top rooms finish emptying...', 90, 600, ph(t, 117.6, 118.6), { fade: ph(t, 121.4, 121.6),  size: 36 });
    hand(c, '...then the big ones fire', 90, 650, ph(t, 119.4, 120.4), { fade: ph(t, 121.4, 121.6),  size: 36, col: C.redDeep });
  }
  scene(99.4, 'page', sparkScene);
  scene(104.1, 'cut', sparkScene);
  scene(111.4, 'cut', sparkScene);

  // --- S25 the brain only sets the tempo: faster to run, slower to sleep ---
  scene(121.5, 'wipe', (c, t) => {
    bg(c, 'tempo', C.sage, 'band', C.sky);
    // tempo: normal, then fast ("speed it up"), then slow ("slow it down"), with a running figure / a moon
    const fast = ph(t, 122.3, 122.6) * (1 - ph(t, 122.9, 123.1)) + ph(t, 124.3, 124.6) * (1 - ph(t, 124.8, 125.0));
    const slow = ph(t, 123.0, 123.3) * (1 - ph(t, 123.9, 124.1)) + ph(t, 125.1, 125.4);
    // integrate the phase analytically enough: piecewise speed
    let phase = 0; for (let x = 121.5; x < t; x += 1 / 60) { const f = ph(x, 122.3, 122.6) * (1 - ph(x, 122.9, 123.1)) + ph(x, 124.3, 124.6) * (1 - ph(x, 124.8, 125.0)), s2 = ph(x, 123.0, 123.3) * (1 - ph(x, 123.9, 124.1)) + ph(x, 125.1, 125.4); phase += (1 / 60) * (4.2 + 6 * f - 2.6 * s2); }
    metronome(c, 640, 380, Math.sin(phase) * 0.5, ph(t, 121.6, 122.3));
    put(c, brain(), 230, 170, ph(t, 121.7, 122.4), { s: 0.55 }); leader(c, 300, 200, 560, 260, ph(t, 122.0, 122.5));
    hand(c, 'speed it up', 940, 230, fast > 0.01 || t > 122.4 ? ph(t, 122.4, 123.0) : 0, { size: 40 });
    hand(c, 'slow it down', 940, 300, ph(t, 123.1, 123.7), { size: 40 });
    // run: three speed dashes + a striding figure (brush strokes); sleep: a crescent moon + z's
    const rq = ph(t, 124.3, 124.9); if (rq > 0) { for (let i = 0; i < 3; i++) brush(c, 'dash' + i, [[120 + i * 20, 470 + i * 34], [300 + i * 20, 470 + i * 34]], 9, C.ink2, rq, { prof: 'tip', nb: 0, a: 0.7 }); hand(c, 'run!', 340, 560, ph(t, 124.2, 124.6), { size: 52 }); }
    const mq = ph(t, 125.2, 125.8); if (mq > 0) { put(c, sprite('moon', 160, 160, 80, 80, 501, (g) => { paintRegion(g, cr([[0, -60], [40, -40], [56, 0], [40, 44], [0, 60], [24, 30], [30, 0], [22, -30]], true, 6), C.straw, { a: 0.8, n: 2, seed: 50 }); }), 1000, 500, mq, { dir: 'bt' }); hand(c, 'sleep  z z', 940, 600, ph(t, 125.1, 125.5), { size: 52 }); }
  });

  // --- S26 the beat starts inside the heart (a donor heart keeps going for a while) ---
  scene(125.9, 'page', (c, t) => {
    bg(c, 'inside', C.muscle, 'pool', C.straw);
    const beats = grid(126.3, 135.5, 0.9), pu = pulse(t, beats);
    // a soft tray-shaped wash under the heart
    brush(c, 'tray', qcurve(380, 560, 900, 560, -40, 12), 40, C.sky, ph(t, 129.2, 130.0), { prof: 'even', a: 0.45 });
    put(c, heartOutside(), 640, 340, ph(t, 126.0, 126.8), { dir: 'bt', s: 0.72 * (1 + pu * 0.05) });
    // the gold spark glows inside on each beat
    for (const b of beats) { const d = t - b; if (d > -0.05 && d < 0.4) { const g = c.createRadialGradient(560, 270, 0, 560, 270, 60); const a = Math.max(0, 1 - Math.abs(d - 0.05) / 0.35); g.addColorStop(0, rgba(C.gold, 0.8 * a)); g.addColorStop(1, rgba(C.gold, 0)); c.fillStyle = g; c.beginPath(); c.arc(560, 270, 60, 0, 7); c.fill(); } }
    hand(c, 'the beat starts inside', 640, 90, ph(t, 127.0, 128.2), { size: 46, align: 'center' });
    hand(c, 'a donor heart keeps beating for a little while', 640, 640, ph(t, 129.3, 131.5), { size: 36, align: 'center' });
    mono(c, 'ITS OWN ELECTRICAL SYSTEM', 640, 150, ph(t, 132.2, 133.0), { align: 'center', size: 18 });
  });

  // --- S27 chapter four card ---
  scene(135.2, 'mist', (c, t) => card(c, t, 135.2, 'card4', C.water, 'PART FOUR', 'The numbers', T(54, 'part'), T(54, 'numbers')));

  // --- S28 100,000 a day: a burst of tally marks fills the sheet ---
  scene(137.3, 'wipe', (c, t) => {
    bg(c, 'tally', C.straw, 'band');
    const N = 160, q = ph(t, 138.5, 139.8);
    for (let i = 0; i < N; i++) { const gx = i % 20, gy = Math.floor(i / 20), x = 140 + gx * 52 + (gy % 2) * 10, y = 300 + gy * 44;
      if (gx % 5 === 4) brush(c, 'tl' + i, [[x - 210, y + 18], [x + 6, y - 2]], 3.6, C.red, ph(q, i / N * 0.85, i / N * 0.85 + 0.15), { prof: 'even', nb: 0, a: 0.7 });
      else brush(c, 'tl' + i, [[x, y - 16], [x - 3, y + 18]], 3.6, C.redDeep, ph(q, i / N * 0.85, i / N * 0.85 + 0.15), { prof: 'even', nb: 0, a: 0.7 }); }
    serif(c, '100,000', W / 2, 150, ph(t, 137.5, 138.1), { size: 120, w: 700, col: C.redDeep });
    mono(c, 'BEATS EVERY DAY', W / 2, 232, ph(t, 138.5, 139.1), { align: 'center', size: 20 });
    hand(c, 'adds up fast', 1050, 680, ph(t, 139.3, 140.0), { size: 38, align: 'center' });
  });

  // --- S29 2,000 gallons a day = about a bathtub an hour ---
  scene(140.1, 'page', (c, t) => {
    bg(c, 'tub', C.water, 'band', C.sky);
    tub(c, 640, 430, 0.15 + 0.8 * eio(ph(t, 144.6, 146.4)), ph(t, 140.3, 141.2));
    // a pouring stream into the tub while it fills
    const pour = ph(t, 144.4, 144.7) * (1 - ph(t, 146.3, 146.6)); if (pour > 0) { c.save(); c.globalAlpha = pour; brush(c, 'pour', [[520, 120], [522, 250], [524, 380]], 22, C.water, 1, { prof: 'even', a: 0.6 }); c.restore(); }
    serif(c, '≈ 2,000 gallons', W / 2, 130, ph(t, 142.2, 142.8), { size: 78, w: 700, col: C.blueDk });
    mono(c, 'PUMPED EVERY DAY', W / 2, 200, ph(t, 142.6, 143.2), { align: 'center', size: 20 });
    hand(c, '≈ one full bathtub every hour', W / 2, 640, ph(t, 144.9, 146.2), { size: 42, align: 'center' });
  });

  // --- S30 one loop round the body in about a minute ---
  scene(146.7, 'wipe', (c, t) => {
    bg(c, 'loop', C.sage, 'left', C.lung);
    put(c, figure(), 640, 380, ph(t, 146.8, 147.4), { dir: 'tb', s: 1.2 });
    const loop = cr([[655, 240], [760, 300], [740, 520], [700, 680], [600, 680], [560, 480], [520, 300], [600, 210]], true, 10);
    brush(c, 'loopR', loop.slice(0, 40), 8, C.red, ph(t, 147.0, 147.9), { prof: 'even', nb: 0, a: 0.7 });
    brush(c, 'loopB', loop.slice(39).concat([loop[0]]), 8, C.blue, ph(t, 147.6, 148.4), { prof: 'even', nb: 0, a: 0.7 });
    // one red cell travels the loop
    const u = ph(t, 147.4, 149.4); if (u > 0 && u < 1) { const k = u * (loop.length - 1), i = Math.floor(k), f = k - i, a = loop[i], b = loop[Math.min(loop.length - 1, i + 1)];
      c.fillStyle = rgba(mixc(C.red, C.blue, u > 0.55 ? 1 : 0), 0.9); c.beginPath(); c.ellipse(lerp(a[0], b[0], f), lerp(a[1], b[1], f), 13, 9, 0.3, 0, 7); c.fill(); }
    hand(c, 'one blood cell, one full loop', 820, 160, ph(t, 147.0, 148.2), { size: 38 });
    serif(c, '≈ 1 minute', 980, 420, ph(t, 149.3, 149.8), { size: 70, it: true, col: C.redDeep });
  });

  // --- S31 a lifetime: 2.5 billion beats along a handscroll ---
  scene(150.0, 'page', (c, t) => {
    bg(c, 'life', C.lung, 'top', C.straw);
    const pan = -1100 * eio(ph(t, 150.2, 155.0));
    c.save(); c.translate(pan, 0);
    beatTrace(c, 60, 2500, 430, 60, 'trace2', ph(t, 150.1, 153.6));
    for (let i = 0; i <= 8; i++) { const x = 120 + i * 290, q = ph(t, 150.2 + i * 0.35, 150.6 + i * 0.35); mono(c, (i * 10) + ' YRS', x, 520, q, { align: 'center', size: 16 }); brush(c, 'ly' + i, [[x, 480], [x, 500]], 3, C.ink2, q, { prof: 'even', nb: 0, a: 0.7 }); }
    c.restore();
    serif(c, '2,500,000,000+', W / 2, 220, ph(t, 153.7, 154.4), { size: 104, w: 700, col: C.redDeep });
    hand(c, 'beats over a long life', W / 2, 300, ph(t, 154.1, 154.9), { size: 40, align: 'center' });
    hand(c, 'not a single break', W / 2, 640, ph(t, 155.0, 156.1), { size: 42, align: 'center' });
  });

  // --- S32 chapter five card ---
  scene(157.7, 'mist', (c, t) => card(c, t, 157.7, 'card5', C.lung, 'PART FIVE', 'Feel it yourself', T(62, 'part'), T(62, 'feel')));

  // --- S33 the relay: spark, squeeze, lub, dub, lungs, body, back ---
  scene(160.0, 'wipe', (c, t) => {
    bg(c, 'relay', C.straw, 'pool', C.sky);
    const R = 230, cx = 640, cy = 380, ring = []; for (let i = 0; i <= 48; i++) { const a = -Math.PI / 2 + (i / 48) * Math.PI * 2 * 0.96; ring.push([cx + Math.cos(a) * R * 1.35, cy + Math.sin(a) * R]); }
    arrow(c, 'relayRing', ring, 7, C.ink2, ph(t, 160.6, 161.9), { a: 0.6 });
    const st = [['spark', T(64, 'spark')], ['squeeze', T(64, 'squeeze')], ['lub', T(64, 'lub')], ['dub', T(64, 'dub')], ['lungs', T(65, 'lungs')], ['body', T(65, 'body')], ['back again', T(65, 'back')]];
    st.forEach(([lab, ht], i) => { const a = -Math.PI / 2 + (i / 7) * Math.PI * 2, x = cx + Math.cos(a) * R * 1.35, y = cy + Math.sin(a) * R, q = ph(t, ht - 0.1, ht + 0.25);
      if (q <= 0) return; const col = i === 0 ? C.gold : i < 4 ? C.red : i === 4 ? C.lung : i === 5 ? C.skin : C.blue;
      put(c, sprite('dot' + i, 120, 120, 60, 60, 600 + i, (g) => paintRegion(g, cr(blob(0, 0, 40, 40, 60 + i, 0.1), true, 6), col, { a: 0.75, n: 2, seed: 61 + i })), x, y, 1, { s: 0.4 + 0.6 * eo(q) });
      hand(c, lab, x, y + (y > cy ? 66 : -62), q, { size: 34, align: 'center' }); });
    hand(c, 'a tiny relay race', cx, cy, ph(t, 161.2, 162.0), { size: 46, align: 'center' });
  });

  // --- S34 two fingers on the wrist: that tap is the left ventricle ---
  scene(166.3, 'page', (c, t) => {
    bg(c, 'wrist', C.skin, 'band', C.lung);
    put(c, wrist(), 560, 430, ph(t, 166.5, 167.4), { dir: 'lr' });
    const beats = grid(167.6, 174, 0.85);
    for (const b of beats) { const d = t - b; if (d > 0 && d < 0.7) { c.save(); c.strokeStyle = rgba(C.red, 0.6 * (1 - d / 0.7)); c.lineWidth = 4; c.beginPath(); c.arc(590, 420, 30 + d * 120, 0, 7); c.stroke(); c.restore(); } }
    hand(c, 'tap... tap... tap', 590, 600, ph(t, 169.6, 170.4), { size: 40, align: 'center' });
    put(c, heartOutside(), 1080, 170, ph(t, 169.9, 170.6), { s: 0.32 * (1 + pulse(t, beats.map((b) => b - 0.1)) * 0.06), dir: 'bt' });
    hand(c, 'left ventricle', 1080, 330, ph(t, 170.3, 171.0), { size: 36, align: 'center' });
    arrow(c, 'toHand', cr([[1040, 230], [900, 260], [760, 330], [640, 400]], false, 8), 8, C.red, ph(t, 171.6, 173.2), { a: 0.8 });
  });

  // --- S35 teaser: the lungs, next time (the brush lifts mid-stroke) ---
  scene(173.7, 'mist', (c, t) => {
    bg(c, 'next', C.sky, 'pool', C.lung);
    hand(c, 'next time...', 140, 110, ph(t, 173.9, 174.7), { size: 44 });
    put(c, lungs(), 640, 390, ph(t, 174.4, 176.0), { dir: 'bt', s: 0.95 });
    serif(c, 'Your lungs', 640, 120, ph(t, 176.8, 177.4), { size: 80, w: 700, it: true, col: C.lungDk });
    mono(c, '20,000+ BREATHS A DAY?', 640, 650, ph(t, 178.1, 178.9), { align: 'center', size: 22 });
    brush(c, 'lastStroke', qcurve(860, 560, 1180, 540, -20, 12), 30, C.lung, 0.62 * ph(t, 178.6, 179.6), { prof: 'brush', a: 0.5 });
  });

  // ================= FRAME: scenes + the medium's transitions =================
  const TRD = { wipe: 0.7, page: 0.8, mist: 1.3, cut: 0 };
  function explainer(ctx, Wc, Hc, t) {
    const c = ctx; c.save(); if (Wc !== W) c.scale(Wc / W, Hc / HH);
    let i = 0; while (i + 1 < SC.length && SC[i + 1].t0 <= t) i++;
    const cur = SC[i], prev = SC[i - 1], d = TRD[cur.tr] || 0, u = d ? (t - cur.t0) / d : 1;
    if (!prev || u >= 1 || cur.tr === 'cut') cur.draw(c, t);
    else if (cur.tr === 'mist') { if (u < 0.5) { prev.draw(c, t); mist(c, ss(u * 2), i); } else { cur.draw(c, t); mist(c, ss((1 - u) * 2), i + 3); } }
    else if (cur.tr === 'wipe') {
      prev.draw(c, t); const X = -80 + (W + 160) * eio(u);
      c.save(); c.beginPath(); c.moveTo(-10, -10); for (let k = 0; k <= 14; k++) { const y = (k / 14) * HH; c.lineTo(X + Math.sin(k * 1.4 + i) * 26 + (hash(k + i * 5) - 0.5) * 24, y); } c.lineTo(-10, HH + 10); c.closePath(); c.clip(); cur.draw(c, t); c.restore();
    } else if (cur.tr === 'page') {
      prev.draw(c, t); const X = W * (1 - eio(u));
      c.save(); const g = c.createLinearGradient(X - 40, 0, X, 0); g.addColorStop(0, 'rgba(60,40,20,0)'); g.addColorStop(1, 'rgba(60,40,20,0.22)'); c.fillStyle = g; c.fillRect(X - 40, 0, 40, HH);
      c.beginPath(); c.rect(X, 0, W, HH); c.clip(); c.translate(X * 0.15, 0); cur.draw(c, t); c.restore();
    }
    c.restore();
  }

  // ================= SOUND (voiceover mode: effects sit under the narration) =================
  function scoreSound(k) {
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.3 });
    k.music('pad', 0, D, { bpm: 72, gain: 0.35, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    const paint = (t0, dur = 0.6, g = 0.45) => k.play('stroke', t0, { material: 'brush', dur, gain: g, minor: true });
    const heartbeat = (t0, g = 0.5) => { k.play('thud', t0, { f: 70, gain: g, minor: true }); k.play('thud', t0 + 0.22, { f: 58, gain: g * 0.7, minor: true }); };
    // painting-in rustles where things appear
    for (const t of [0.1, 4.9, 5.5, 9.0, 12.6, 15.0, 19.7, 22.2, 32.8, 37.0, 40.1, 44.6, 49.6, 52.7, 53.3, 61.3, 62.0, 65.0, 67.3, 86.7, 94.4, 95.0, 121.6, 126.0, 129.2, 140.3, 146.8, 150.1, 160.6, 166.5, 169.9, 174.4]) paint(t);
    // page turns and mist (chapter breaths)
    for (const s of SC) { if (s.tr === 'page') k.play('paper', s.t0, { dur: 0.45, gain: 0.5, minor: true }); if (s.tr === 'wipe') k.play('swish', s.t0 + 0.1, { dur: 0.4, gain: 0.25, minor: true }); if (s.tr === 'mist') k.play('whoosh', s.t0, { dur: 1.1, gain: 0.25, minor: true }); }
    // idle heartbeats under the hook and the "inside" scene
    for (const b of grid(1.0, 4.8, BEAT)) heartbeat(b, 0.45);
    for (const b of grid(126.3, 135.5, 0.9)) heartbeat(b, 0.35);
    for (const b of grid(167.6, 174, 0.85)) k.play('thud', b, { f: 66, gain: 0.3, minor: true });
    k.play('count', 1.45, { gain: 0.4 }); for (let i = 0; i < 10; i++) k.play('tick', 1.45 + i * 0.11, { f: 4200 + i * 120, gain: 0.25, minor: true });
    k.play('ding', 2.62, { f: 'D6', gain: 0.25 });
    // lub-dub demo: the real two-beat
    for (const [t, f] of [[63.19, 72], [63.58, 56], [63.98, 72], [64.37, 56]]) k.play('thud', t, { f, gain: 0.75 });
    k.play('slap', 68.82, { gain: 0.8 }); k.play('thud', 68.84, { f: 90, gain: 0.6 });
    // valves: lub (AV snap) and dub (exit snap)
    k.play('thud', 77.6, { f: 72, gain: 0.7 }); k.play('click', 77.6, { f: 1200, gain: 0.5 }); k.play('stamp', 79.04, { gain: 0.4 });
    k.play('thud', 83.3, { f: 56, gain: 0.6 }); k.play('click', 83.3, { f: 1500, gain: 0.5 }); k.play('stamp', 86.26, { gain: 0.4 });
    for (let i = 0; i < 4; i++) k.play('tock', 87.4 + i * 0.75, { f: 500 + i * 40, gain: 0.25, minor: true });
    // the spark
    k.play('sparkle', 100.25, { n: 3, gain: 0.25 }); k.play('riser', 106.0, { dur: 0.8, gain: 0.25 }); k.play('buzz', 106.86, { f: 220, dur: 0.25, gain: 0.25 });
    k.play('swish', 108.1, { dur: 0.6, gain: 0.25 }); k.play('thud', 110.55, { f: 80, gain: 0.5 });
    k.play('blip', 113.96, { f: 'A5', gain: 0.3 }); for (let i = 0; i < 4; i++) k.play('tick', 115.4 + i * 0.35, { gain: 0.3, minor: true });
    k.play('thud', 120.9, { f: 62, gain: 0.7 }); k.play('impact', 120.92, { gain: 0.2 });
    for (let i = 0; i < 6; i++) k.play('tock', 122.4 + i * 0.12, { f: 900, gain: 0.25, minor: true });
    for (let i = 0; i < 2; i++) k.play('tock', 123.1 + i * 0.5, { f: 700, gain: 0.25, minor: true });
    // numbers
    k.play('ding', 137.6, { f: 'E6', gain: 0.25 }); for (let i = 0; i < 18; i++) k.play('stroke', 138.5 + i * 0.07, { material: 'pencil', dur: 0.06, gain: 0.35, minor: true });
    k.noise(144.4, { dur: 2.0, color: 'pink', filter: 'bandpass', f: 1600, q: 0.6, gain: 0.08, a: 0.2, hold: 1.5, minor: true });
    k.play('ding', 142.25, { f: 'C6', gain: 0.25 }); k.play('ding', 149.4, { f: 'G5', gain: 0.25 }); k.play('success', 153.8, { gain: 0.25 });
    for (const t of [162.58, 163.01, 163.62, 163.88, 164.44, 164.84, 165.41]) k.play('pop', t, { f: 520, gain: 0.25 });
    k.play('sparkle', 176.9, { n: 4, gain: 0.25 });
  }

  // ================= THUMBNAIL: the painted heart + four huge words =================
  function thumbnail(ctx, Wc, Hc) {
    const c = ctx; c.save(); if (Wc !== W) c.scale(Wc / W, Hc / HH);
    bg(c, 'thumb', C.muscle, 'pool', C.straw);
    put(c, heartOutside(), 360, 380, 1, { s: 1.15 });
    const g = c.createRadialGradient(290, 300, 0, 290, 300, 70); g.addColorStop(0, rgba(C.gold, 0.85)); g.addColorStop(1, rgba(C.gold, 0)); c.fillStyle = g; c.beginPath(); c.arc(290, 300, 70, 0, 7); c.fill();
    serif(c, 'NO BRAIN', 900, 250, 1, { size: 132, w: 700 });
    serif(c, 'NEEDED', 900, 405, 1, { size: 150, w: 700, col: C.redDeep });
    hand(c, '100,000 beats a day', 905, 540, 1, { size: 64, align: 'center', col: C.ink2 });
    c.restore();
  }
  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
