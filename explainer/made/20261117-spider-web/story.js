// ===== Watercolor Brush (Lemo-Opuscar style), 9:16 1080x1920 Short: "Why don't spiders stick to their own webs?" =====
// Painted with the Lemo-Opuscar watercolor stroke engine (window.LEMO, bundled by scripts/lemo_engine.sh, MIT).
// Original story, drawings (web, spider, hairy leg, glue drops), layout and timing; only the stroke technique comes from the library.
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS (from phrases.json; w = first time each word starts) ----------
  const BEATS = [
    { s: 0.25, e: 2.13, w: { touch: 0.25, a: 0.59, spider: 0.65, web: 1.06, and: 1.26, youll: 1.46, stick: 1.8 } },
    { s: 2.47, e: 6.04, w: { so: 2.47, how: 2.64, does: 2.89, the: 3.22, spider: 3.47, touch: 3.97, its: 4.38, glue: 4.63, n1000: 4.96, times: 5.3, a: 5.71, web: 5.79 } },
    { s: 6.52, e: 8.44, w: { first: 6.52, not: 6.88, every: 7.09, thread: 7.45, is: 7.88, sticky: 8.02 } },
    { s: 8.8, e: 10.98, w: { the: 8.8, spokes: 9.02, and: 9.45, frame: 9.89, are: 10.25, dry: 10.47, silk: 10.69 } },
    { s: 11.46, e: 14.59, w: { only: 11.46, the: 11.79, spiral: 12.03, is: 12.53, beaded: 12.69, with: 13.19, tiny: 13.52, glue: 13.85, drops: 14.18 } },
    { s: 15.02, e: 17.09, w: { so: 15.02, the: 15.17, spider: 15.4, walks: 15.86, on: 16.25, spokes: 16.63 } },
    { s: 17.52, e: 18.4, w: { but: 17.52, while: 17.68, building: 17.96 } },
    { s: 18.82, e: 21.91, w: { it: 18.82, still: 18.96, bumps: 19.3, the: 19.64, glue: 19.85, hundreds: 20.13, to: 20.68, thousands: 20.81, of: 21.43, times: 21.57 } },
    { s: 22.39, e: 24.4, w: { the: 22.39, real: 22.64, secret: 22.98, is: 23.48, in: 23.65, its: 23.82, legs: 24.07 } },
    { s: 24.85, e: 27.07, w: { theyre: 24.85, covered: 25.26, in: 25.73, tiny: 25.86, branching: 26.13, hairs: 26.74 } },
    { s: 27.54, e: 29.87, w: { a: 27.54, glue: 27.62, drop: 27.91, only: 28.2, touches: 28.49, few: 29.07, hair: 29.29, tips: 29.58 } },
    { s: 30.2, e: 31.55, w: { and: 30.2, slides: 30.44, right: 30.91, off: 31.31 } },
    { s: 31.95, e: 34.29, w: { the: 31.95, legs: 32.18, also: 32.48, have: 32.78, a: 33.08, nonstick: 33.16, coating: 33.76 } },
    { s: 34.64, e: 36.13, w: { when: 34.64, scientists: 34.88, washed: 35.47, it: 35.83, off: 35.95 } },
    { s: 36.53, e: 38.52, w: { the: 36.53, legs: 36.73, suddenly: 37.01, stuck: 37.56, way: 37.9, harder: 38.11 } },
    { s: 38.95, e: 40.48, w: { and: 38.95, the: 39.12, spider: 39.3, moves: 39.65, carefully: 39.95 } },
    { s: 40.98, e: 43.59, w: { peeling: 40.98, each: 41.46, foot: 41.73, away: 42.01, at: 42.28, just: 42.42, the: 42.69, right: 42.9, angle: 43.24 } },
    { s: 44.01, e: 47.49, w: { dry: 44.01, spokes: 44.26, hairy: 44.76, feet: 45.17, and: 45.5, a: 45.75, builtin: 45.83, nonstick: 46.41, layer: 47.07 } },
    { s: 47.83, e: 49.75, w: { honestly: 47.83, thats: 48.45, kind: 48.83, of: 49.13, genius: 49.29 } },
    { s: 50.19, e: 52.77, w: { if: 50.19, a: 50.33, spider: 50.4, walked: 50.83, onto: 51.26, another: 51.55, spiders: 52.05, web: 52.55 } },
    { s: 53.12, e: 53.97, w: { would: 53.12, it: 53.4, get: 53.52, stuck: 53.69 } },
  ];
  const DURATION = 53.97 + 1.0;
  window.BEATS = BEATS; window.DURATION = DURATION;
  const L = window.LEMO;
  const { mk, drawS, drawList, withSeed, qcurve, rgba, mixc } = L; const PAPER = '#f1e9da', INK = '#2b2520';
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const ss = (x) => { x = clamp(x); return x * x * (3 - 2 * x); };
  const eio = (x) => { x = clamp(x); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
  const eo = (x) => 1 - Math.pow(1 - clamp(x), 3);
  const ei = (x) => Math.pow(clamp(x), 2.2);
  const hash = (n) => { n = Math.sin(n * 127.1 + 311.7) * 43758.5453; return n - Math.floor(n); };

  // ---------- palette (3-5 hues per scene + ink; ONE accent: amber glue) ----------
  const C = {
    paper: PAPER, ink: INK, ink2: '#5a4636',
    silk: '#b8a27a', silkDk: '#7d6a4c', glue: '#d9952a', glueDk: '#a8661a',
    sage: '#93a874', sageDk: '#5f7a4c', leaf: '#7f9c5e', sky: '#a9bfcf', skyDk: '#6f8ea6',
    spider: '#8a5a3a', spiderDk: '#4e3324', spiderLt: '#c08a5c', skin: '#e2b38f', skinDk: '#bf8462',
    water: '#7fa6bf', straw: '#e3cf98', rose: '#c98476',
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
    for (let i = 0; i < 5200; i++) { const x = r() * W, y = r() * HH, a = r() * 6.28, l = 3 + r() * 9; c.strokeStyle = r() < 0.5 ? 'rgba(120,95,70,0.07)' : 'rgba(255,255,255,0.12)'; c.lineWidth = 0.6; c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + Math.cos(a + 0.6) * l * 0.6, y + Math.sin(a + 0.6) * l * 0.6, x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke(); }
    PAPERCV = cv; return cv;
  }
  // a background = paper + one or two large pale washes, shape set by `kind` (laid out for 1080x1920)
  const BG = new Map();
  function bg(c, key, col, kind = 'band', col2 = null) {
    let cv = BG.get(key);
    if (!cv) {
      cv = document.createElement('canvas'); cv.width = W; cv.height = HH; const g = cv.getContext('2d');
      g.drawImage(paperBase(), 0, 0);
      withSeed(1000 + key.length * 31 + key.charCodeAt(0) * 7 + (key.charCodeAt(key.length - 1) || 0), () => {
        const sd = key.length + key.charCodeAt(1);
        if (kind === 'band') washPoly(g, [[-40, 1250], [300, 1226], [700, 1262], [1120, 1236], [1120, 1980], [-40, 1980]], col, 0.17, 8, sd);
        if (kind === 'top') washPoly(g, [[-40, -40], [1120, -40], [1120, 560], [760, 590], [360, 548], [-40, 580]], col, 0.17, 8, sd);
        if (kind === 'pool') washPoly(g, cr(blob(W / 2, HH / 2, 470, 640, sd, 0.12, 10), true, 6), col, 0.14, 8, sd);
        if (kind === 'diag') washPoly(g, [[-40, 600], [1120, 260], [1120, 1500], [-40, 1760]], col, 0.13, 8, sd);
        if (col2) washPoly(g, cr(blob(W * 0.74, HH * 0.2, 200, 130, sd + 3, 0.15, 8), true, 6), col2, 0.13, 6, sd + 1);
        for (let i = 0; i < 4; i++) { const x = L.rnd(40, W - 180), y = L.rnd() < 0.5 ? L.rnd(60, 120) : L.rnd(1800, 1870); drawS(g, mk(qcurve(x, y, x + L.rnd(70, 140), y + L.rnd(-10, 10), L.rnd(-8, 8), 8), L.rnd(10, 18), col2 || col, { a: 0.15 })); }
      });
      BG.set(key, cv); if (BG.size > 5) BG.delete(BG.keys().next().value);
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
    halo(c, txt, x, y, 12); c.fillStyle = rgba(o.col || C.ink, 0.88); c.fillText(txt, x, y); c.fillStyle = rgba(o.col || C.ink, 0.3); c.fillText(txt, x + 0.7, y + 0.5);
    c.restore();
  }
  // serif title / big numbers, fade + slight rise
  function serif(c, txt, x, y, p, o = {}) {
    if (p <= 0) return; const size = o.size || 56;
    c.save(); c.globalAlpha *= ss(p); c.font = SERIF(size, o.w || 600, o.it); c.textAlign = o.align || 'center'; c.textBaseline = 'middle';
    const yy = y + (1 - eo(p)) * 10; halo(c, txt, x, yy, 14); c.fillStyle = rgba(o.col || C.ink, 0.9); c.fillText(txt, x, yy); c.restore();
  }
  function mono(c, txt, x, y, p, o = {}) {
    if (p <= 0) return; const size = o.size || 18;
    if ((o.fade || 0) >= 1) return; c.save(); c.globalAlpha *= 1 - (o.fade || 0); c.font = MONO(size); c.textAlign = o.align || 'left'; c.textBaseline = 'middle';
    const sp = txt.split('').join(String.fromCharCode(8202)); const w = c.measureText(sp).width, x0 = (o.align === 'center') ? x - w / 2 : (o.align === 'right' ? x - w : x);
    c.beginPath(); c.rect(x0 - 6, y - size, (w + 12) * clamp(p), size * 2); c.clip();
    halo(c, sp, x, y, 10); c.fillStyle = rgba(o.col || C.ink2, 0.9); c.fillText(sp, x, y); c.restore();
  }
  // pen leader line that grows from the note to its specimen, ends in a dot
  function leader(c, x0, y0, x1, y1, p, o = {}) {
    if (p <= 0) return; const q = eo(p), bend = o.bend ?? 18;
    const mx = (x0 + x1) / 2 - (y1 - y0) / Math.hypot(x1 - x0, y1 - y0 || 1) * bend, my = (y0 + y1) / 2 + (x1 - x0) / Math.hypot(x1 - x0, y1 - y0 || 1) * bend;
    c.save(); c.strokeStyle = rgba(o.col || C.ink, 0.75); c.lineWidth = 3.2; c.lineCap = 'round'; c.beginPath(); c.moveTo(x0, y0);
    const N = 20; for (let i = 1; i <= N * q; i++) { const t = i / N, u = 1 - t; c.lineTo(u * u * x0 + 2 * u * t * mx + t * t * x1, u * u * y0 + 2 * u * t * my + t * t * y1); }
    c.stroke(); if (q > 0.97) { c.fillStyle = rgba(o.col || C.ink, 0.8); c.beginPath(); c.arc(x1, y1, 6, 0, 7); c.fill(); } c.restore();
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

  // ================= PAINTED SPECIMENS (original drawings) =================
  // ---------- the orb web: frame, spokes (dry), capture spiral (glue beads) ----------
  const WEB = (function () {
    const cx = 540, cy = 930;
    const frame = [[118, 452], [972, 418], [1004, 1408], [86, 1436]];
    const N = 18, spokes = [];
    // ray / polygon intersection: hub -> frame
    function hit(a) {
      const dx = Math.cos(a), dy = Math.sin(a); let best = 1e9;
      for (let i = 0; i < 4; i++) {
        const [x1, y1] = frame[i], [x2, y2] = frame[(i + 1) % 4], ex = x2 - x1, ey = y2 - y1;
        const den = dx * ey - dy * ex; if (Math.abs(den) < 1e-9) continue;
        const tt = ((x1 - cx) * ey - (y1 - cy) * ex) / den, u = ((x1 - cx) * dy - (y1 - cy) * dx) / den;
        if (tt > 0 && u >= 0 && u <= 1) best = Math.min(best, tt);
      }
      return best;
    }
    for (let i = 0; i < N; i++) { const a = (i / N) * Math.PI * 2 - Math.PI / 2 + 0.05, len = hit(a); spokes.push({ a, len, x: cx + Math.cos(a) * len, y: cy + Math.sin(a) * len }); }
    // capture spiral: points on each spoke, radius growing outward, gentle sag between spokes
    const spiral = []; const r0 = 92, pitch = 36;
    for (let k = 0; k < N * 11; k++) {
      const i = k % N, sp = spokes[i], th = k / N, r = r0 + pitch * th;
      if (r > sp.len * 0.93) { if (r > 470) break; continue; }
      const p = [cx + Math.cos(sp.a) * r, cy + Math.sin(sp.a) * r];
      if (spiral.length) {
        const q = spiral[spiral.length - 1], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, d = Math.hypot(mx - cx, my - cy);
        spiral.push([cx + (mx - cx) * (1 - 6 / d), cy + (my - cy) * (1 - 6 / d)]);
      }
      spiral.push(p);
    }
    // beads every ~17 px along the spiral
    const beads = []; let acc = 0;
    for (let i = 1; i < spiral.length; i++) {
      const [x0, y0] = spiral[i - 1], [x1, y1] = spiral[i], L0 = Math.hypot(x1 - x0, y1 - y0);
      for (let d = 17 - acc; d < L0; d += 17) beads.push([x0 + (x1 - x0) * d / L0, y0 + (y1 - y0) * d / L0, 3.8 + hash(beads.length * 3.3) * 2.2]);
      acc = (acc + L0) % 17;
    }
    return { cx, cy, frame, spokes, spiral, beads };
  })();
  const webStrokes = (function () {
    let S = null;
    return () => {
      if (S) return S;
      S = withSeed(77, () => ({
        frame: WEB.frame.map((p, i) => { const q = WEB.frame[(i + 1) % 4]; return mk(qcurve(p[0], p[1], q[0], q[1], 10 * (i % 2 ? 1 : -1), 14), 5.5, C.silkDk, { prof: 'even', nb: 0, a: 0.75, rough: 0.3 }); }),
        anchors: WEB.frame.map((p, i) => { const o = [[-1, -1], [1, -1], [1, 1], [-1, 1]][i]; return mk(qcurve(p[0], p[1], p[0] + o[0] * 160, p[1] + o[1] * 120, 8, 8), 4.5, C.silkDk, { prof: 'tip', nb: 0, a: 0.6 }); }),
        spokes: WEB.spokes.map((s) => mk(qcurve(WEB.cx, WEB.cy, s.x, s.y, L.rnd(-3, 3), 14), 4.2, C.silkDk, { prof: 'even', nb: 0, a: 0.72, rough: 0.3 })),
        spiral: mk(WEB.spiral, 3.2, C.silk, { prof: 'even', nb: 0, a: 0.8, rough: 0.25 }),
        hub: mk(cr(blob(WEB.cx, WEB.cy, 40, 40, 5, 0.2, 7), true, 5), 4, C.silkDk, { prof: 'even', nb: 0, a: 0.6 }),
      }));
      return S;
    };
  })();
  function beadsDraw(c, p, o = {}) {
    if (p <= 0) return; const B = WEB.beads, n = Math.floor(B.length * clamp(p)), a = o.a ?? 1;
    c.save();
    c.fillStyle = rgba(C.glue, 0.7 * a); c.beginPath(); for (let i = 0; i < n; i++) { const [x, y, r] = B[i]; c.moveTo(x + r, y); c.arc(x, y, r, 0, 7); } c.fill();
    c.fillStyle = rgba(C.glueDk, 0.45 * a); c.beginPath(); for (let i = 0; i < n; i++) { const [x, y, r] = B[i]; c.moveTo(x + r * 0.9, y + r * 0.3); c.arc(x + r * 0.2, y + r * 0.3, r * 0.6, 0, 7); } c.fill();
    c.fillStyle = rgba(C.paper, 0.85 * a); c.beginPath(); for (let i = 0; i < n; i++) { const [x, y, r] = B[i]; c.moveTo(x - r * 0.25, y - r * 0.35); c.arc(x - r * 0.35, y - r * 0.35, r * 0.28, 0, 7); } c.fill();
    c.restore();
  }
  // draw the web with stage progress: fr (frame+anchors), sp (spokes), spi (spiral), bd (beads); o.spokeCol / o.frameCol re-tint
  function web(c, st = {}) {
    const S = webStrokes(), fr = st.fr ?? 1, sp = st.sp ?? 1, spi = st.spi ?? 1, bd = st.bd ?? 1;
    drawList(c, S.anchors, fr, st.frameCol || null, st.frameA ?? 1); drawList(c, S.frame, fr, st.frameCol || null, st.frameA ?? 1);
    drawList(c, S.spokes, sp, st.spokeCol || null, st.spokeA ?? 1); drawS(c, S.hub, sp, st.spokeCol || null, st.spokeA ?? 1);
    drawS(c, S.spiral, spi, null, st.spiA ?? 1);
    beadsDraw(c, bd, { a: st.bdA ?? 1 });
  }
  let WEBFULL = null;
  function webFull() { if (!WEBFULL) { WEBFULL = document.createElement('canvas'); WEBFULL.width = W; WEBFULL.height = HH; web(WEBFULL.getContext('2d')); } return WEBFULL; }

  // ---------- the spider: two walking poses, facing up (-y), origin at the body centre ----------
  function spiderSprite(pose) {
    return sprite('spider' + pose, 520, 560, 260, 270, 300 + pose, (c) => {
      const sw = pose ? 0.16 : -0.16;
      for (const side of [-1, 1]) for (let i = 0; i < 4; i++) {
        const ax = side * 22, ay = -58 + i * 15, swing = (i % 2 ? sw : -sw);
        const th = [0.55, 1.2, 1.9, 2.55][i] + swing, dx = Math.sin(th) * side, dy = -Math.cos(th);
        const kneeX = ax + dx * 115, kneeY = ay + dy * 115 - 30;
        const footX = ax + dx * 215, footY = ay + dy * 215 + 10;
        drawS(c, mk(qcurve(ax, ay, kneeX, kneeY, 8 * side, 8), 13, C.spiderDk, { prof: 'even', a: 0.85, nb: 3 }));
        drawS(c, mk(qcurve(kneeX, kneeY, footX, footY, -10 * side, 8), 10, C.spiderDk, { prof: 'tip', a: 0.85, nb: 3 }));
        // fine leg hairs
        for (let h = 0; h < 4; h++) { const u = 0.25 + h * 0.18, hx = kneeX + (footX - kneeX) * u, hy = kneeY + (footY - kneeY) * u; drawS(c, mk(qcurve(hx, hy, hx + side * 9, hy - 12, 2, 4), 2.2, C.spiderDk, { prof: 'tip', nb: 0, a: 0.55 })); }
      }
      paintRegion(c, cr(blob(0, 66, 58, 80, 9, 0.06, 10), true, 6), C.spider, { a: 0.78, n: 9, ang: 1.4, seed: 3, ew: 4 });
      for (let k = 0; k < 3; k++) drawS(c, mk(qcurve(-30 + k * 2, 40 + k * 32, 30 - k * 2, 40 + k * 32, 10, 8), 9, C.spiderLt, { prof: 'leaf', a: 0.6, nb: 0 }));
      washPoly(c, cr(blob(-18, 40, 18, 30, 4, 0.2, 7), true, 5), C.paper, 0.35, 2, 5);
      paintRegion(c, cr(blob(0, -40, 38, 44, 12, 0.06, 9), true, 6), C.spiderDk, { a: 0.8, n: 6, ang: 0.4, seed: 6, ew: 3.5 });
      for (const [x, y] of [[-10, -76], [10, -76], [-20, -70], [20, -70]]) { c.fillStyle = rgba(C.ink, 0.85); c.beginPath(); c.arc(x, y, 4, 0, 7); c.fill(); }
      for (const s of [-1, 1]) drawS(c, mk(qcurve(s * 10, -82, s * 16, -100, s * 4, 5), 9, C.spiderDk, { prof: 'tip', nb: 0, a: 0.85 }));
    });
  }
  function spider(c, x, y, ang, s, t, walking = true) {
    const pose = walking ? Math.floor(t * 7) % 2 : 0;
    put(c, spiderSprite(pose), x, y, 1, { s, rot: ang + Math.PI / 2 });
  }
  // walk along a polyline at progress u: returns [x, y, angle]
  function along(pts, u) {
    let tot = 0; const seg = []; for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); tot += d; }
    let d = clamp(u) * tot, i = 0; while (i < seg.length - 1 && d > seg[i]) { d -= seg[i]; i++; }
    const f = seg[i] ? d / seg[i] : 0, a = pts[i], b = pts[i + 1] || a;
    return [lerp(a[0], b[0], f), lerp(a[1], b[1], f), Math.atan2(b[1] - a[1], b[0] - a[0])];
  }

  // ---------- a fingertip coming up from below (origin at the tip) ----------
  function finger() {
    return sprite('finger', 300, 760, 150, 40, 21, (c) => {
      const body = cr([[-78, 700], [-84, 300], [-80, 110], [-62, 30], [-30, 2], [0, -4], [30, 2], [62, 30], [80, 110], [84, 300], [78, 700]], false, 6);
      paintRegion(c, body, C.skin, { a: 0.75, n: 8, ang: 1.5, seed: 2, ew: 4 });
      washPoly(c, cr([[30, 40], [70, 120], [72, 600], [40, 600], [44, 120]], true, 5), C.skinDk, 0.3, 3, 4);
      paintRegion(c, cr(blob(0, 70, 44, 58, 3, 0.05, 8), true, 6), C.rose, { a: 0.35, n: 3, seed: 9, ew: 2.5 });
      for (const y of [300, 330]) drawS(c, mk(qcurve(-50, y, 50, y + 6, 6, 8), 3, C.skinDk, { prof: 'even', nb: 0, a: 0.5 }));
    });
  }

  // ---------- the leg up close: a hairy segment, hairs that branch near the tip ----------
  const LEG = { x0: -470, y0: 70, x1: 470, y1: -60, w: 120 };
  const legTop = (x) => lerp(LEG.y0, LEG.y1, (x - LEG.x0) / (LEG.x1 - LEG.x0)) - LEG.w / 2;
  const HAIRS = (function () { const out = []; for (let i = 0; i < 26; i++) { const x = -430 + i * 34 + (hash(i * 5.1) - 0.5) * 12, len = 120 + hash(i * 2.7) * 40, lean = 0.32 + (hash(i * 9.3) - 0.5) * 0.18; out.push({ x, y: legTop(x) + 6, len, lean, tx: x + Math.sin(lean) * len, ty: legTop(x) + 6 - Math.cos(lean) * len }); } return out; })();
  function legBody() {
    return sprite('legBody', 1080, 400, 540, 200, 31, (c) => {
      const { x0, y0, x1, y1, w } = LEG, nx = -(y1 - y0), ny = x1 - x0, nl = Math.hypot(nx, ny), ox = nx / nl * w / 2, oy = ny / nl * w / 2;
      const body = [[x0 + ox, y0 + oy], [lerp(x0, x1, 0.5) + ox * 1.06, lerp(y0, y1, 0.5) + oy * 1.06], [x1 + ox * 0.9, y1 + oy * 0.9], [x1 + 14, y1], [x1 - ox * 0.9, y1 - oy * 0.9], [lerp(x0, x1, 0.5) - ox * 1.04, lerp(y0, y1, 0.5) - oy * 1.04], [x0 - ox, y0 - oy], [x0 - 18, y0]];
      paintRegion(c, cr(body, true, 6), C.spider, { a: 0.75, n: 14, ang: -0.14, seed: 5, ew: 5 });
      washPoly(c, cr([[x0, y0 + 20], [x1, y1 + 20], [x1, y1 + 50], [x0, y0 + 56]], true, 4), C.spiderDk, 0.35, 3, 3);
      washPoly(c, cr([[x0 + 40, y0 - 34], [x1 - 40, y1 - 34], [x1 - 40, y1 - 16], [x0 + 40, y0 - 14]], true, 4), C.paper, 0.32, 3, 6);
      // joint ring at the right
      drawS(c, mk(qcurve(x1 - 70, y1 - 58, x1 - 60, y1 + 62, 14, 8), 6, C.spiderDk, { prof: 'even', nb: 0, a: 0.6 }));
      // short hairs underneath
      for (let i = 0; i < 18; i++) { const x = -420 + i * 50, yb = legTop(x) + LEG.w - 4; drawS(c, mk(qcurve(x, yb, x - 22, yb + 46, 4, 5), 4, C.spiderDk, { prof: 'tip', nb: 0, a: 0.65 })); }
    });
  }
  function hairsSprite() {
    return sprite('hairs', 1080, 520, 540, 360, 41, (c) => {
      for (const h of HAIRS) {
        drawS(c, mk(qcurve(h.x, h.y, h.tx, h.ty, -10, 8), 6, C.spiderDk, { prof: 'tip', nb: 0, a: 0.8 }));
        // branches near the tip
        for (let b = 0; b < 3; b++) { const u = 0.55 + b * 0.14, bx = lerp(h.x, h.tx, u), by = lerp(h.y, h.ty, u), s = b % 2 ? 1 : -1, bl = 20 + b * 4; drawS(c, mk(qcurve(bx, by, bx + s * bl * 0.9 + 8, by - bl, 2, 4), 2.6, C.spiderDk, { prof: 'tip', nb: 0, a: 0.7 })); }
      }
    });
  }
  function glueDrop(c, x, y, r, o = {}) {
    c.save(); if (o.a != null) c.globalAlpha *= o.a;
    const sq = o.sq ?? 1; c.translate(x, y); c.scale(1 / Math.sqrt(sq), sq);
    for (let k = 0; k < 3; k++) { c.beginPath(); for (let i = 0; i <= 14; i++) { const a = (i / 14) * Math.PI * 2, rr = r * (1 + (hash(i * 3 + k * 7) - 0.5) * 0.06); i ? c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : c.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); } c.closePath(); c.fillStyle = rgba(C.glue, 0.24); c.fill(); c.strokeStyle = rgba(C.glueDk, 0.22); c.lineWidth = 3; c.stroke(); }
    c.fillStyle = rgba(C.glueDk, 0.25); c.beginPath(); c.ellipse(r * 0.18, r * 0.25, r * 0.7, r * 0.55, 0, 0, 7); c.fill();
    c.fillStyle = rgba(C.paper, 0.75); c.beginPath(); c.ellipse(-r * 0.35, -r * 0.38, r * 0.22, r * 0.14, -0.6, 0, 7); c.fill();
    c.restore();
  }
  // the leg in a frame: x, y, scale, with hairs paint-in hp
  function legAt(c, x, y, s, bp = 1, hp = 1) { put(c, hairsSprite(), x, y, hp, { s, dir: 'lr', seed: 5 }); put(c, legBody(), x, y, bp, { s, dir: 'lr', seed: 2 }); }

  // ---------- one leg + foot for the "peel" scene (local, hip at origin) ----------
  const PEEL = { hx: 250, hy: 470, kx: 560, ky: 720, TY: 1240, fa0: Math.PI / 2 + 0.42 };
  PEEL.fl = (PEEL.TY - 12 - PEEL.ky) / Math.sin(PEEL.fa0); PEEL.cx = PEEL.kx + Math.cos(PEEL.fa0) * PEEL.fl; PEEL.cy = PEEL.TY - 12;
  function footLeg(c, lift) {
    const { hx, hy, kx, ky, fa0, fl } = PEEL, fa = fa0 + 0.85 * lift;
    const fx = kx + Math.cos(fa) * fl, fy = ky + Math.sin(fa) * fl;
    brush(c, 'femur', qcurve(hx, hy, kx, ky, -30, 12), 58, C.spider, 1, { prof: 'even', a: 0.85 });
    for (let h = 0; h < 8; h++) { const u = 0.15 + h * 0.1, x = lerp(hx, kx, u), y = lerp(hy, ky, u) - 22; brush(c, 'fh' + h, qcurve(x, y, x + 18, y - 34, 4, 4), 4.5, C.spiderDk, 1, { prof: 'tip', nb: 0, a: 0.65, seed: 500 + h }); }
    const q = Math.round(lift * 40);
    brush(c, 'tib' + q, qcurve(kx, ky, fx, fy, 18, 12), 40, C.spiderDk, 1, { prof: 'tip', a: 0.85, seed: 911 });
    const nx = -(fy - ky) / fl, ny = (fx - kx) / fl;
    for (let h = 0; h < 8; h++) { const u = 0.15 + h * 0.1, x = lerp(kx, fx, u) + nx * 18, y = lerp(ky, fy, u) + ny * 18; brush(c, 'th' + q + '_' + h, qcurve(x, y, x + nx * 34 + 8, y + ny * 34 - 8, 4, 4), 4.5, C.spiderDk, 1, { prof: 'tip', nb: 0, a: 0.6, seed: 300 + h }); }
    put(c, sprite('joint', 120, 120, 60, 60, 12, (g) => paintRegion(g, cr(blob(0, 0, 34, 30, 4, 0.1, 8), true, 5), C.spiderDk, { a: 0.8, n: 3, ew: 3 })), kx, ky, 1);
    return [fx, fy];
  }

  // ================= SCENES =================
  const SC = [];
  const scene = (t0, tr, draw) => SC.push({ t0, tr, draw });
  const T = (i, k) => (k == null ? BEATS[i].s : BEATS[i].w[k]);

  // --- S1 hook: a web paints itself, a finger touches it and sticks; then the spider arrives: 1,000x ---
  scene(0, 'cut', (c, t) => {
    bg(c, 'hook', C.sage, 'pool', C.sky);
    const z = 1 + 0.06 * ss(ph(t, 2.4, 6.4));
    c.save(); cam(c, z, WEB.cx, WEB.cy + 40);
    web(c, { fr: ph(t, 0.0, 0.55), sp: ph(t, 0.15, 0.85), spi: ph(t, 0.5, 1.45), bd: ph(t, 0.9, 1.7) });
    // finger: rises, touches at "stick", pulls back trailing glue threads
    const up = eo(ph(t, 1.15, 1.8)), back = eio(ph(t, 1.95, 2.5)), gone = ph(t, 2.5, 2.9);
    if (gone < 1) {
      const fy = lerp(1960, 1150, up) + back * 160 + gone * 700, fx = 600;
      if (t > 1.8) { // glue strands stretched between the fingertip and the spiral
        c.save(); c.strokeStyle = rgba(C.glueDk, 0.7 * (1 - gone)); c.lineWidth = 3; c.lineCap = 'round';
        for (const [ax, ay] of [[560, 1150], [600, 1146], [640, 1152], [585, 1180], [620, 1186]]) { c.beginPath(); c.moveTo(ax, ay); c.quadraticCurveTo((ax + fx) / 2, (ay + fy) / 2 + 20, fx + (ax - 600) * 0.4, fy + 8); c.stroke(); }
        c.restore();
      }
      put(c, finger(), fx, fy, 1, { s: 1 });
    }
    c.restore();
    hand(c, 'stuck!', 830, 1240, ph(t, 1.8, 2.25), { size: 84, rot: -0.08, col: C.glueDk, fade: ph(t, 2.5, 2.8) });
    // the spider walks in down the top spoke to the hub
    if (t > 2.6) {
      const sp = WEB.spokes[0], u = eio(ph(t, 2.6, 3.9));
      c.save(); cam(c, z, WEB.cx, WEB.cy + 40);
      const x = lerp(sp.x, WEB.cx, u), y = lerp(sp.y, WEB.cy - 10, u);
      spider(c, x, y, Math.atan2(WEB.cy - sp.y, WEB.cx - sp.x) + (u >= 1 ? 0 : 0), 0.62, t, u < 1);
      // glints where its feet touch glue
      for (const [k, tt] of [[0, 3.97], [1, 4.3], [2, 4.63]]) { const d = t - tt; if (d > 0 && d < 0.5) { const a = [[-80, 40], [90, 20], [-40, 120]][k]; c.save(); c.strokeStyle = rgba(C.glue, 0.9 * (1 - d / 0.5)); c.lineWidth = 5; c.beginPath(); c.arc(WEB.cx + a[0], WEB.cy + a[1], 14 + d * 60, 0, 7); c.stroke(); c.restore(); } }
      c.restore();
    }
    serif(c, '1,000×', 540, 300, ph(t, 4.9, 5.35), { size: 170, w: 700, col: C.glueDk });
    hand(c, 'glue touches per web', 540, 420, ph(t, 5.3, 6.0), { size: 60, align: 'center' });
  });

  // --- S2 the plate: not every thread is sticky (spokes + frame dry), the spiral is beaded with glue ---
  scene(T(2), 'wipe', (c, t) => {
    bg(c, 'plate', C.straw, 'top', C.sage);
    hand(c, 'not every thread is sticky', 540, 250, ph(t, 6.8, 8.3), { size: 66, align: 'center' });
    const showSpi = ph(t, 12.0, 13.4);
    c.save(); cam(c, 0.92, WEB.cx, WEB.cy + 60, 0, 40);
    const spokeHi = ph(t, 9.0, 9.7), frameHi = ph(t, 9.85, 10.5);
    web(c, { fr: 1, sp: 1, spi: showSpi, bd: ph(t, 12.7, 14.3), spokeCol: spokeHi > 0 ? mixc(C.silkDk, C.sageDk, spokeHi) : null, frameCol: frameHi > 0 ? mixc(C.silkDk, C.ink2, frameHi) : null, spiA: 0.95 });
    // the spider walks the dry spokes (in from the frame on the right)
    if (t > 15.0) {
      const sp = WEB.spokes[5], u = eio(ph(t, 15.1, 17.2));
      spider(c, lerp(sp.x, WEB.cx + (sp.x - WEB.cx) * 0.25, u), lerp(sp.y, WEB.cy + (sp.y - WEB.cy) * 0.25, u), Math.atan2(WEB.cy - sp.y, WEB.cx - sp.x), 0.5, t, u < 1);
    }
    c.restore();
    // labels (screen space)
    hand(c, 'dry spokes', 150, 1560, ph(t, 9.0, 9.7), { size: 58, col: C.sageDk });
    leader(c, 300, 1525, 420, 1270, ph(t, 9.3, 9.9), { col: C.sageDk });
    hand(c, 'frame', 870, 1560, ph(t, 9.9, 10.4), { size: 58, align: 'center' });
    leader(c, 870, 1520, 905, 1400, ph(t, 10.0, 10.5));
    mono(c, 'DRY SILK · NO GLUE', 540, 360, ph(t, 10.45, 11.2), { size: 44, align: 'center', fade: ph(t, 11.4, 11.9) });
    mono(c, 'CAPTURE SPIRAL · GLUE', 540, 360, ph(t, 12.0, 12.8), { size: 44, align: 'center', col: C.glueDk, fade: ph(t, 14.9, 15.3) });
    // loupe: the beaded thread up close
    const lp = ph(t, 13.4, 14.0), lf = ph(t, 15.0, 15.4);
    if (lp > 0 && lf < 1) {
      c.save(); c.globalAlpha *= ss(lp) * (1 - lf); const lx = 790, ly = 1570, R = 150;
      c.beginPath(); c.arc(lx, ly, R, 0, 7); c.fillStyle = rgba(C.paper, 0.97); c.fill(); c.clip();
      washPoly(c, cr(blob(lx, ly, R, R, 3, 0.05, 9), true, 5), C.straw, 0.25, 3, 2);
      brush(c, 'loupeThread', qcurve(lx - R - 10, ly + 14, lx + R + 10, ly - 10, -14, 12), 7, C.silk, 1, { prof: 'even', nb: 0, a: 0.85 });
      for (let i = 0; i < 6; i++) { const u = (i + 0.5) / 6, x = lerp(lx - R, lx + R, u), y = lerp(ly + 14, ly - 10, u) - Math.sin(u * Math.PI) * 7; glueDrop(c, x, y, i % 2 ? 16 : 22); }
      c.restore();
      c.save(); c.globalAlpha *= ss(lp) * (1 - lf); c.strokeStyle = rgba(C.ink, 0.7); c.lineWidth = 5; c.beginPath(); c.arc(lx, ly, 150, 0, 7); c.stroke(); c.restore();
      hand(c, 'glue drops', 470, 1600, ph(t, 14.1, 14.7), { size: 58, align: 'center', col: C.glueDk, fade: lf });
    }
    hand(c, 'it walks the dry spokes', 540, 360, ph(t, 15.8, 16.8), { size: 62, align: 'center', col: C.sageDk });
  });

  // --- S3 building: the spider lays the spiral and bumps the glue again and again (a counter) ---
  scene(T(6), 'page', (c, t) => {
    bg(c, 'build', C.sky, 'band', C.straw);
    hand(c, 'while building...', 540, 260, ph(t, 17.6, 18.5), { size: 70, align: 'center' });
    const u = 0.35 + 0.65 * ph(t, 17.6, 22.3);
    c.save(); cam(c, 0.9, WEB.cx, WEB.cy, 0, 20);
    web(c, { fr: 1, sp: 1, spi: u, bd: u });
    // spider at the spiral's growing end
    const n = WEB.spiral.length, m = Math.min(n - 2, Math.floor((n - 1) * u)), p = WEB.spiral[m], q = WEB.spiral[m + 1];
    spider(c, p[0], p[1], Math.atan2(q[1] - p[1], q[0] - p[0]), 0.48, t, true);
    // touch flashes
    for (let k = 0; k < 14; k++) { const tt = 18.9 + k * 0.2, d = t - tt; if (d > 0 && d < 0.4) { const a = k * 2.3; c.save(); c.strokeStyle = rgba(C.glue, 0.9 * (1 - d / 0.4)); c.lineWidth = 5; c.beginPath(); c.arc(p[0] + Math.cos(a) * 60, p[1] + Math.sin(a) * 60, 10 + d * 50, 0, 7); c.stroke(); c.restore(); } }
    c.restore();
    // counter
    const cp = ph(t, 18.82, 21.6), val = cp < 0.45 ? Math.round(lerp(0, 300, eo(cp / 0.45))) : Math.round(lerp(300, 1000, ss((cp - 0.45) / 0.55)));
    if (t > 18.8) { serif(c, val.toLocaleString('en-US') + (cp >= 1 ? '+' : ''), 540, 1480, 1, { size: 180, w: 700, col: C.glueDk }); }
    mono(c, 'GLUE TOUCHES', 540, 1610, ph(t, 19.3, 19.9), { size: 46, align: 'center' });
    hand(c, 'hundreds...', 260, 1340, ph(t, 20.13, 20.6), { size: 58, align: 'center', col: C.ink2 });
    hand(c, '...to thousands', 800, 1340, ph(t, 20.81, 21.4), { size: 58, align: 'center', col: C.ink2 });
  });

  // --- S4 the secret is in the legs: hairs that branch; a glue drop touches only a few tips and slides off ---
  scene(T(8), 'mist', (c, t) => {
    bg(c, 'legs', C.straw, 'diag', C.sky);
    serif(c, 'The secret:', 540, 270, ph(t, 22.9, 23.4), { size: 100, w: 700 });
    serif(c, 'its legs', 540, 390, ph(t, 23.9, 24.4), { size: 110, w: 700, it: true, col: C.spiderDk });
    const LX = 540, LY = 1060, LS = 0.95;
    legAt(c, LX, LY, LS, ph(t, 23.8, 24.8), ph(t, 25.9, 26.9));
    hand(c, 'branching hairs', 250, 640, ph(t, 26.4, 27.1), { size: 60, align: 'center' });
    leader(c, 270, 680, LX + (HAIRS[7].tx) * LS, LY + (HAIRS[7].ty + 30) * LS, ph(t, 26.6, 27.2));
    // the glue drop: falls in, sits on a few tips, then slides off down the slope
    const h1 = HAIRS[15], h2 = HAIRS[16], h3 = HAIRS[17];
    const restX = LX + (h2.tx) * LS, restY = LY + (Math.min(h1.ty, h2.ty, h3.ty)) * LS - 62;
    const fall = eo(ph(t, 27.5, 28.2)), slide = ei(ph(t, 30.4, 31.5));
    if (t > 27.5) {
      const x = restX - slide * 520, y = lerp(restY - 700, restY, fall) + slide * 70 + Math.pow(slide, 3) * 900;
      const sq = t < 28.4 ? 1 - 0.12 * Math.sin(ph(t, 28.1, 28.4) * Math.PI) : 1;
      glueDrop(c, x, y, 64, { sq });
    }
    // contact rings on the few tips touched
    const cp = ph(t, 29.0, 29.6), cf = ph(t, 30.3, 30.6);
    if (cp > 0 && cf < 1) for (const h of [h1, h2, h3]) { c.save(); c.strokeStyle = rgba(C.ink, 0.75 * ss(cp) * (1 - cf)); c.lineWidth = 4; c.beginPath(); c.arc(LX + h.tx * LS, LY + h.ty * LS, 18, 0, 7); c.stroke(); c.restore(); }
    hand(c, 'only a few tips touch', 760, 1450, ph(t, 29.1, 29.9), { size: 60, align: 'center', col: C.glueDk, fade: ph(t, 30.4, 30.8) });
    hand(c, 'and slides off', 360, 1500, ph(t, 30.5, 31.2), { size: 66, align: 'center' });
  });

  // --- S5 the non-stick coating; the solvent test: washed legs stick much harder ---
  scene(T(12), 'wipe', (c, t) => {
    bg(c, 'coat', C.sky, 'pool', C.sage);
    serif(c, 'Non-stick coating', 540, 300, ph(t, 33.1, 33.8), { size: 100, w: 700, col: C.skyDk });
    const LX = 540, LY = 1000, LS = 0.95;
    legAt(c, LX, LY, LS, 1, 1);
    // the coating: a glossy pale wash along the leg + sparkle ticks; later washed away left to right
    const coat = ph(t, 33.2, 33.9), wash = eio(ph(t, 35.4, 36.2));
    if (coat > 0) {
      c.save(); c.beginPath(); c.rect(lerp(-40, W + 40, wash), 0, W + 80, HH); c.clip();
      put(c, sprite('coat', 1080, 400, 540, 200, 61, (g) => {
        for (let k = 0; k < 7; k++) { const x = -420 + k * 130; drawS(g, mk(qcurve(x, legTop(x) + 18, x + 120, legTop(x + 120) + 18, -4, 8), 26, C.sky, { prof: 'leaf', a: 0.5, nb: 0 })); }
        for (let k = 0; k < 10; k++) { const x = -400 + k * 88, y = legTop(x) + 30; drawS(g, mk(qcurve(x, y, x + 22, y - 3, 2, 4), 7, '#ffffff', { prof: 'leaf', a: 0.55, nb: 0 })); }
      }), LX, LY, coat, { s: LS, dir: 'lr', seed: 8 });
      c.restore();
    }
    hand(c, 'scientists washed it off', 540, 430, ph(t, 34.7, 35.9), { size: 60, align: 'center' });
    // the water brush sweeping across
    if (wash > 0 && wash < 1) { const X = lerp(-40, W + 40, wash); c.save(); c.globalAlpha *= Math.sin(wash * Math.PI); washPoly(c, cr(blob(X - 60, LY - 40, 110, 240, 7, 0.15, 9), true, 5), C.water, 0.3, 6, 3); c.restore(); }
    // a drop lands and sticks: the leg pulls away and the glue stretches into strands
    const land = eo(ph(t, 36.6, 37.2)), pull = eio(ph(t, 37.5, 38.6));
    if (t > 36.6) {
      const tip = HAIRS[13], x = LX + tip.tx * LS, y0 = LY + tip.ty * LS - 60;
      const dy = pull * 300, yy = lerp(y0 - 600, y0, land) - dy;
      if (pull > 0) { c.save(); c.strokeStyle = rgba(C.glueDk, 0.8); c.lineWidth = 6; c.lineCap = 'round'; for (const ox of [-36, -12, 14, 38]) { c.beginPath(); c.moveTo(x + ox * 0.7, yy + 40); c.quadraticCurveTo(x + ox * 1.2, y0 - dy / 2, LX + HAIRS[13 + Math.sign(ox + 1)].tx * LS + ox * 0.3, LY + tip.ty * LS + 4); c.stroke(); } c.restore(); }
      glueDrop(c, x, yy, 60, { sq: 1 + pull * 0.25 });
    }
    hand(c, 'stuck way harder!', 540, 1480, ph(t, 37.5, 38.3), { size: 76, align: 'center', col: C.glueDk, rot: -0.04 });
    mono(c, 'LAB TEST: LEGS WASHED', 540, 1610, ph(t, 35.0, 35.8), { size: 40, align: 'center' });
  });

  // --- S6 careful footwork: the foot peels away from the sticky line at just the right angle ---
  scene(T(15), 'page', (c, t) => {
    bg(c, 'peel', C.sage, 'band', C.straw);
    hand(c, 'it moves carefully', 540, 260, ph(t, 39.4, 40.4), { size: 70, align: 'center' });
    // the sticky thread across the frame
    const TY = PEEL.TY;
    brush(c, 'peelThread', qcurve(-20, TY, 1100, TY - 10, -12, 18), 6, C.silk, 1, { prof: 'even', nb: 0, a: 0.85 });
    for (let i = 0; i < 16; i++) { const x = 20 + i * 70, y = TY - 5 - Math.sin((x / 1080) * Math.PI) * 6; glueDrop(c, x, y, i % 2 ? 11 : 15); }
    const lift = eio(ph(t, 40.9, 43.0));
    const [fx, fy] = footLeg(c, lift);
    if (lift > 0 && lift < 0.5) { c.save(); c.strokeStyle = rgba(C.glueDk, 0.75 * (1 - lift / 0.5)); c.lineWidth = 3; c.beginPath(); c.moveTo(fx, fy); c.quadraticCurveTo(PEEL.cx + 10, (fy + PEEL.cy) / 2, PEEL.cx, PEEL.cy); c.stroke(); c.restore(); }
    // the angle annotation at the old contact point: thread vs. the direction the foot left in
    const ap = ph(t, 42.5, 43.3);
    if (ap > 0) {
      const ang = Math.atan2(fy - PEEL.cy, fx - PEEL.cx);
      c.save(); c.strokeStyle = rgba(C.ink, 0.8); c.lineWidth = 4; c.setLineDash([14, 10]);
      c.beginPath(); c.moveTo(PEEL.cx, PEEL.cy); c.lineTo(PEEL.cx + Math.cos(ang) * 320 * eo(ap), PEEL.cy + Math.sin(ang) * 320 * eo(ap)); c.stroke(); c.setLineDash([]);
      c.beginPath(); c.arc(PEEL.cx, PEEL.cy, 120, Math.PI, Math.PI + (ang - Math.PI + (ang < 0 ? 2 * Math.PI : 0)) * eo(ap), false); c.stroke(); c.restore();
    }
    hand(c, 'just the right angle', 700, 1460, ph(t, 43.2, 43.9), { size: 66, align: 'center', col: C.sageDk });
  });

  // --- S7 recap: three specimens with notes ---
  scene(T(17), 'mist', (c, t) => {
    bg(c, 'recap', C.straw, 'pool', C.sky);
    // 1 dry spokes (a wedge of the web)
    c.save(); c.translate(320, 560); c.scale(0.42, 0.42); c.translate(-WEB.cx, -WEB.cy);
    put(c, { cv: webFull(), ox: 0, oy: 0, w: W, h: HH }, 0, 0, ph(t, 44.0, 44.6), { dir: 'lr' });
    c.restore();
    hand(c, 'dry spokes', 620, 560, ph(t, 44.26, 44.8), { size: 70, col: C.sageDk });
    // 2 hairy feet
    legAt(c, 360, 1010, 0.42, ph(t, 45.0, 45.5), ph(t, 45.1, 45.7));
    hand(c, 'hairy feet', 620, 1000, ph(t, 45.17, 45.7), { size: 70, col: C.spiderDk });
    // 3 non-stick layer: a drop sliding off a slanted line
    const sl = ph(t, 46.4, 47.6);
    brush(c, 'recapLine', qcurve(170, 1380, 540, 1300, 6, 10), 30, C.sky, ph(t, 46.0, 46.5), { prof: 'leaf', a: 0.6 });
    if (t > 46.3) glueDrop(c, lerp(470, 220, ei(sl)), lerp(1270, 1350, ei(sl)) + Math.pow(sl, 3) * 120, 36, { a: 1 - ph(t, 47.6, 48.0) });
    hand(c, 'non-stick layer', 600, 1350, ph(t, 46.41, 47.0), { size: 70, col: C.skyDk });
    hand(c, "kind of genius.", 540, 1560, ph(t, 48.8, 49.6), { size: 84, align: 'center', col: C.glueDk, rot: -0.05 });
  });

  // --- S8 the question: another spider's web? (loops back to the hook) ---
  scene(T(19), 'page', (c, t) => {
    bg(c, 'q', C.sage, 'top', C.straw);
    c.save(); c.translate(300, 900); c.scale(0.5, 0.5); c.translate(-WEB.cx, -WEB.cy); c.drawImage(webFull(), 0, 0); c.restore();
    c.save(); c.translate(800, 980); c.scale(0.46, 0.46); c.rotate(0.2); c.translate(-WEB.cx, -WEB.cy);
    put(c, { cv: webFull(), ox: 0, oy: 0, w: W, h: HH }, 0, 0, ph(t, 51.4, 52.4), { dir: 'tb' }); c.restore();
    hand(c, "another spider's web", 800, 700, ph(t, 51.8, 52.7), { size: 58, align: 'center', col: C.sageDk });
    const u = eio(ph(t, 50.6, 53.0));
    spider(c, lerp(380, 640, u), lerp(930, 1000, u), lerp(0, 0.25, u), 0.5, t, u < 1);
    serif(c, '?', 860, 1180, ph(t, 53.6, 54.0), { size: 300, w: 700, col: C.glueDk });
    serif(c, 'Would it get stuck?', 540, 1480, ph(t, 53.1, 53.8), { size: 96, w: 700, it: true });
  });

  // ================= FRAME: scenes + the medium's transitions =================
  const TRD = { wipe: 0.7, page: 0.8, mist: 1.1, cut: 0 };
  function explainer(ctx, Wc, Hc, t) {
    const c = ctx; c.save(); if (Wc !== W) c.scale(Wc / W, Hc / HH);
    let i = 0; while (i + 1 < SC.length && SC[i + 1].t0 <= t) i++;
    const cur = SC[i], prev = SC[i - 1], d = TRD[cur.tr] || 0, u = d ? (t - cur.t0) / d : 1;
    if (!prev || u >= 1 || cur.tr === 'cut') cur.draw(c, t);
    else if (cur.tr === 'mist') { if (u < 0.5) { prev.draw(c, t); mist(c, ss(u * 2), i); } else { cur.draw(c, t); mist(c, ss((1 - u) * 2), i + 3); } }
    else if (cur.tr === 'wipe') {
      prev.draw(c, t); const X = -80 + (W + 160) * eio(u);
      c.save(); c.beginPath(); c.moveTo(-10, -10); for (let k = 0; k <= 22; k++) { const y = (k / 22) * HH; c.lineTo(X + Math.sin(k * 1.4 + i) * 26 + (hash(k + i * 5) - 0.5) * 24, y); } c.lineTo(-10, HH + 10); c.closePath(); c.clip(); cur.draw(c, t); c.restore();
    } else if (cur.tr === 'page') {
      prev.draw(c, t); const X = W * (1 - eio(u));
      c.save(); const g = c.createLinearGradient(X - 40, 0, X, 0); g.addColorStop(0, 'rgba(60,40,20,0)'); g.addColorStop(1, 'rgba(60,40,20,0.22)'); c.fillStyle = g; c.fillRect(X - 40, 0, 40, HH);
      c.beginPath(); c.rect(X, 0, W, HH); c.clip(); c.translate(X * 0.15, 0); cur.draw(c, t); c.restore();
    }
    c.restore();
  }

  // ================= SOUND (voiceover mode) =================
  function scoreSound(k) {
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.3 });
    k.music('pad', 0, D, { bpm: 76, gain: 0.32, chords: [['G3', 'B3', 'D4', 'F#4'], ['E3', 'G3', 'B3', 'D4'], ['C4', 'E4', 'G4', 'B4'], ['D4', 'F#4', 'A4', 'C5']] });
    const paint = (t0, dur = 0.6, g = 0.45) => k.play('stroke', t0, { material: 'brush', dur, gain: g, minor: true });
    for (const t of [0.0, 0.5, 1.0, 9.0, 12.0, 12.7, 17.6, 23.8, 25.9, 33.2, 40.9, 44.0, 45.0, 46.0, 51.4]) paint(t);
    for (const s of SC) { if (s.tr === 'page') k.play('paper', s.t0, { dur: 0.45, gain: 0.5, minor: true }); if (s.tr === 'wipe') k.play('swish', s.t0 + 0.1, { dur: 0.4, gain: 0.25, minor: true }); if (s.tr === 'mist') k.play('whoosh', s.t0, { dur: 1.0, gain: 0.25, minor: true }); }
    k.play('slap', 1.8, { gain: 0.5 }); k.play('tape', 1.95, { dur: 0.5, gain: 0.5 });
    for (const t of [3.97, 4.3, 4.63]) k.play('pop', t, { f: 700, gain: 0.25, minor: true });
    k.play('ding', 4.96, { f: 'D6', gain: 0.3 });
    for (const t of [6.9, 7.3, 7.7, 9.0, 9.9, 14.1, 15.8, 17.6, 26.4, 29.1, 30.5, 34.7, 37.5, 39.4, 43.2, 44.26, 45.17, 46.41, 48.8, 51.8]) k.play('stroke', t, { material: 'pencil', dur: 0.35, gain: 0.35, minor: true });
    k.play('blip', 13.4, { f: 'A5', gain: 0.3 });
    for (let i = 0; i < 14; i++) k.play('tick', 18.9 + i * 0.2, { f: 3800 + i * 90, gain: 0.3, minor: true });
    k.play('success', 21.6, { gain: 0.25 });
    k.play('thud', 28.15, { f: 90, gain: 0.45 }); for (const t of [29.0, 29.15, 29.3]) k.play('tick', t, { gain: 0.35 });
    k.play('whoosh', 30.45, { dur: 0.9, gain: 0.3, top: 1800 });
    k.play('sparkle', 33.7, { n: 4, gain: 0.3 });
    k.noise(35.4, { dur: 0.9, color: 'pink', filter: 'bandpass', f: 900, q: 0.7, gain: 0.12, a: 0.2, hold: 0.5, minor: true });
    k.play('thud', 37.2, { f: 80, gain: 0.5 }); k.play('tape', 37.5, { dur: 1.0, gain: 0.55 });
    k.play('tape', 41.0, { dur: 0.6, gain: 0.25, minor: true }); k.play('pop', 42.2, { f: 900, gain: 0.25 });
    k.play('sparkle', 49.3, { n: 4, gain: 0.25 });
    k.play('ding', 53.7, { f: 'G5', gain: 0.25 });
  }

  // ================= THUMBNAIL =================
  function thumbnail(ctx, Wc, Hc) {
    const c = ctx; c.save(); if (Wc !== W) c.scale(Wc / W, Hc / HH);
    bg(c, 'thumb', C.sage, 'pool', C.straw);
    c.drawImage(webFull(), 0, 120);
    spider(c, WEB.cx, WEB.cy + 110, -Math.PI / 2, 0.75, 0, false);
    serif(c, 'NON-STICK', 540, 330, 1, { size: 150, w: 700 });
    serif(c, 'FEET', 540, 1600, 1, { size: 150, w: 700, col: C.glueDk });
    c.restore();
  }
  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
