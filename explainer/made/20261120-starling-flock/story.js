// ================= Pictogram Motion (Lemo-Opuscar, MIT style guide), vertical 1080x1920: "Why don't birds fly into each other in a flock?" =================
// Unattended run: no storyboard step. Drawing technique ported from the Pictogram Motion engine; all figures, story and layout are ours.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'hook', s: 0.25, e: 1.54, w: {'youd': 0.25, 'crash': 0.51, 'in': 0.83, 'this': 0.96, 'flock': 1.22} },
    { id: 'never', s: 1.84, e: 4.16, w: {'but': 1.84, 'ten': 2.07, 'thousand': 2.3, 'starlings': 2.92, 'never': 3.62, 'do': 4.01} },
    { id: 'swerve', s: 4.58, e: 6.21, w: {'they': 4.58, 'swerve': 4.84, 'just': 5.24, 'inches': 5.5, 'apart': 5.89} },
    { id: 'why', s: 6.66, e: 8.57, w: {'so': 6.66, 'why': 6.79, 'dont': 6.98, 'they': 7.24, 'slam': 7.49, 'into': 7.74, 'each': 8.0, 'other': 8.25} },
    { id: 'leader', s: 9.04, e: 10.92, w: {'theres': 9.04, 'no': 9.47, 'leader': 9.62, 'giving': 10.05, 'orders': 10.49} },
    { id: 'seven', s: 11.33, e: 14.48, w: {'instead': 11.33, 'each': 11.81, 'starling': 12.08, 'watches': 12.63, 'about': 13.11, 'seven': 13.46, 'neighbours': 13.8} },
    { id: 'far', s: 14.89, e: 16.53, w: {'close': 14.89, 'or': 15.24, 'far': 15.37, 'it': 15.58, 'doesnt': 15.71, 'matter': 16.12} },
    { id: 'always', s: 16.95, e: 18.53, w: {'its': 16.95, 'always': 17.18, 'roughly': 17.63, 'seven': 18.15} },
    { id: 'copies', s: 18.9, e: 20.99, w: {'it': 18.9, 'copies': 19.04, 'their': 19.44, 'speed': 19.78, 'and': 20.11, 'their2': 20.32, 'turns': 20.65} },
    { id: 'gap', s: 21.35, e: 22.73, w: {'and': 21.35, 'keeps': 21.61, 'a': 22.04, 'tiny': 22.13, 'gap': 22.47} },
    { id: 'turns', s: 23.18, e: 24.53, w: {'so': 23.18, 'when': 23.33, 'one': 23.63, 'bird': 23.86, 'turns': 24.16} },
    { id: 'nbrs', s: 24.53, e: 26.38, w: {'its': 24.53, 'seven': 24.75, 'neighbours': 25.12, 'turn': 25.86, 'too': 26.16} },
    { id: 'their', s: 26.84, e: 27.77, w: {'then': 26.84, 'their': 27.04, 'neighbours': 27.28} },
    { id: 'wave', s: 28.18, e: 30.9, w: {'and': 28.18, 'the': 28.38, 'turn': 28.58, 'ripples': 28.84, 'through': 29.31, 'the2': 29.77, 'flock': 29.97, 'like': 30.3, 'a': 30.56, 'wave': 30.63} },
    { id: 'sci', s: 31.27, e: 33.58, w: {'scientists': 31.27, 'found': 32.04, 'that': 32.43, 'wave': 32.74, 'travels': 33.04} },
    { id: 'faster', s: 33.76, e: 37.11, w: {'about': 33.76, 'three': 34.14, 'times': 34.52, 'faster': 34.9, 'than': 35.36, 'a': 35.67, 'single': 35.74, 'bird': 36.2, 'can': 36.5, 'react': 36.73} },
    { id: 'sees', s: 37.51, e: 38.92, w: {'each': 37.51, 'bird': 37.79, 'sees': 38.07, 'it': 38.36, 'coming': 38.5} },
    { id: 'chorus', s: 39.32, e: 41.24, w: {'like': 39.32, 'dancers': 39.64, 'in': 40.2, 'a': 40.36, 'chorus': 40.44, 'line': 40.92} },
    { id: 'sweet', s: 41.7, e: 43.73, w: {'and': 41.7, 'seven': 41.91, 'seems': 42.26, 'to': 42.61, 'be': 42.75, 'the': 42.89, 'sweet': 43.1, 'spot': 43.45} },
    { id: 'enough', s: 44.22, e: 45.4, w: {'enough': 44.22, 'to': 44.57, 'stay': 44.69, 'together': 44.93} },
    { id: 'without', s: 45.76, e: 47.76, w: {'without': 45.76, 'watching': 46.24, 'everyone': 46.79, 'at': 47.34, 'once': 47.48} },
    { id: 'ask', s: 48.18, e: 50.31, w: {'so': 48.18, 'could': 48.31, 'you': 48.64, 'dodge': 48.84, 'ten': 49.18, 'thousand': 49.38, 'people': 49.91} },
    { id: 'ask2', s: 50.31, e: 51.44, w: {'watching': 50.31, 'just': 50.84, 'seven': 51.11} },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = +(BEATS[BEATS.length - 1].e + 1.0).toFixed(2);
  // ---------- maths ----------
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const inv = (a, b, x) => clamp((x - a) / (b - a));
  const oExp = (t) => (t = clamp(t), t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const ioExp = (t) => (t = clamp(t), t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2);
  const io3 = (t) => (t = clamp(t), t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const oBack = (t, s = 1.7) => (t = clamp(t) - 1, t * t * ((s + 1) * t + s) + 1);
  const rng = (seed) => { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let q = Math.imul(a ^ (a >>> 15), 1 | a); q = (q + Math.imul(q ^ (q >>> 7), 61 | q)) ^ q; return ((q ^ (q >>> 14)) >>> 0) / 4294967296; }; };
  // ---------- colour: "reptile house" set, five hues + one dark neutral, five tones each (names are ours) ----------
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const toHex = (c) => '#' + c.map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hex(a), Bc = hex(b); return toHex(A.map((v, i) => lerp(v, Bc[i], t))); };
  const rgba = (h, a) => { const c = hex(h); return `rgba(${c[0]},${c[1]},${c[2]},${a})`; };
  // ---------- colour: "dusk murmuration" set, five hues + one dark neutral, five tones each (names are ours) ----------
  const CREAM = '#fbf6ec', INK = '#161a2b';
  const PAL = {
    dusk:    { t: ['#1b1e4b', '#262a63', '#34397d', '#4f5596', '#7479b2'], fg: CREAM },
    apricot: { t: ['#c4612e', '#d6733a', '#e5894c', '#eda36f', '#f3bf98'], fg: INK },
    sky:     { t: ['#3f8fb0', '#55a1c0', '#6fb4cf', '#92c7dc', '#b9dbe8'], fg: INK },
    plum:    { t: ['#5a2348', '#6e2d59', '#86396c', '#a05a88', '#bd85a8'], fg: CREAM },
    wheat:   { t: ['#c9a33c', '#d8b34e', '#e6c466', '#eed38c', '#f5e3b5'], fg: INK },
    night:   { t: ['#0d0f1a', '#141724', '#1c2031', '#282d42', '#3a4058'], fg: CREAM, accent: '#e6c466' },
  };
  for (const k in PAL) PAL[k].far = mix(PAL[k].fg, PAL[k].t[2], 0.42);
  const GOLD = '#ffc94a', EMBER = '#e8572e';
  // ---------- primitives (round caps, flat fills) ----------
  const disc = (ctx, x, y, r, col) => { if (r <= 0) return; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); };
  const seg = (ctx, a, b, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); };
  const poly = (ctx, pts, col) => { ctx.fillStyle = col; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); };
  const arcS = (ctx, x, y, r, a0, a1, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, r, a0, a1); ctx.stroke(); };
  const rrect = (ctx, x, y, w, h, r, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill(); };
  const ell = (ctx, x, y, rx, ry, col, rot = 0) => { ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), rot, 0, Math.PI * 2); ctx.fill(); };
  const path = (ctx, pts, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); };

  // ---------- pictograms ----------
  // starling seen from above, facing angle `ang` (0 = right). s = half length; flap 0..1 opens the wings
  function bird(ctx, x, y, s, ang, col, flap = 0.6, beak = null) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    const span = s * (0.55 + 0.5 * flap), tb = -s * (0.25 + 0.2 * flap);
    for (const sd of [-1, 1]) { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(s * 0.22, 0); ctx.quadraticCurveTo(s * 0.2, sd * span * 0.7, tb, sd * span); ctx.quadraticCurveTo(-s * 0.05, sd * span * 0.35, -s * 0.28, 0); ctx.closePath(); ctx.fill(); }
    ell(ctx, 0, 0, s * 0.5, s * 0.17, col); disc(ctx, s * 0.46, 0, s * 0.19, col);
    poly(ctx, [[-s * 0.35, 0], [-s * 0.78, -s * 0.24], [-s * 0.78, s * 0.24]], col);
    if (beak) poly(ctx, [[s * 0.62, -s * 0.07], [s * 0.9, 0], [s * 0.62, s * 0.07]], beak);
    ctx.restore();
  }
  const flapAt = (t, ph, sp = 13) => 0.5 + 0.5 * Math.sin(t * sp + ph);
  // person pictogram: disc head + capsule body. (x,y) = feet centre, s = height
  function person(ctx, x, y, s, col) { rrect(ctx, x - s * 0.17, y - s * 0.68, s * 0.34, s * 0.68, s * 0.17, col); disc(ctx, x, y - s * 0.86, s * 0.15, col); }
  function crown(ctx, x, y, s, col) { poly(ctx, [[x - s, y], [x - s, y - s * 0.9], [x - s * 0.5, y - s * 0.4], [x, y - s * 1.1], [x + s * 0.5, y - s * 0.4], [x + s, y - s * 0.9], [x + s, y]], col); }
  function arrow(ctx, a, b, w, col) { seg(ctx, a, b, w, col); const an = Math.atan2(b[1] - a[1], b[0] - a[0]), L = w * 2.4;
    poly(ctx, [[b[0] + Math.cos(an) * L * 0.6, b[1] + Math.sin(an) * L * 0.6], [b[0] + Math.cos(an + 2.4) * L, b[1] + Math.sin(an + 2.4) * L], [b[0] + Math.cos(an - 2.4) * L, b[1] + Math.sin(an - 2.4) * L]], col); }
  function cross(ctx, x, y, s, col, k) { if (k <= 0) return; seg(ctx, [x - s, y - s], [lerp(x - s, x + s, oExp(k)), lerp(y - s, y + s, oExp(k))], s * 0.3, col); const k2 = inv(0.4, 1, k); if (k2 > 0) seg(ctx, [x + s, y - s], [lerp(x + s, x - s, oExp(k2)), lerp(y - s, y + s, oExp(k2))], s * 0.3, col); }
  function bigNum(ctx, text, x, y, px, col, k, align = 'center') { if (k <= 0) return; ctx.save(); ctx.translate(x, y); const s = lerp(1.6, 1, oExp(k)); ctx.scale(s, s); ctx.globalAlpha = clamp(k * 3);
    ctx.font = F.en(900, px); ctx.letterSpacing = '-6px'; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillStyle = col; ctx.fillText(text, 0, 0); ctx.restore(); }

  // seeded scatter of points in a box (jittered lattice) + k-nearest-neighbour helpers
  function scatter(seed, cols, rows, x0, y0, x1, y1, jit = 0.35) {
    const r = rng(seed), pts = [], dx = (x1 - x0) / (cols - 1), dy = (y1 - y0) / (rows - 1);
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) pts.push({ x: x0 + i * dx + (r() - 0.5) * dx * jit * 2 + (j % 2 ? dx * 0.25 : -dx * 0.25), y: y0 + j * dy + (r() - 0.5) * dy * jit * 2, ph: r() * 6.28, q: r() });
    return pts;
  }
  function nearest(pts, i, k) { return pts.map((p, j) => [j, Math.hypot(p.x - pts[i].x, p.y - pts[i].y)]).filter((a) => a[0] !== i).sort((a, b) => a[1] - b[1]).slice(0, k).map((a) => a[0]); }
  function closestTo(pts, x, y) { let b = 0, bd = 1e9; pts.forEach((p, j) => { const d = Math.hypot(p.x - x, p.y - y); if (d < bd) { bd = d; b = j; } }); return b; }

  // ---------- grid pattern (cell = 1/6 of the frame width), rows cut and shifted ----------
  const CELL = 180;
  function motif(ctx, kind, x, y, s, c, r) {
    const [a, b, cc] = c; ctx.save(); ctx.beginPath(); ctx.rect(x, y, s, s); ctx.clip(); ctx.fillStyle = a; ctx.fillRect(x, y, s, s);
    const rot = Math.floor(r() * 4), upright = kind >= 12;
    ctx.translate(x + s / 2, y + s / 2); if (!upright) ctx.rotate(rot * Math.PI / 2); ctx.translate(-s / 2, -s / 2);
    switch (kind) {
      case 0: disc(ctx, 0, 0, s, b); break;
      case 1: disc(ctx, s / 2, s, s / 2, b); break;
      case 2: disc(ctx, s / 2, s / 2, s / 2, b); disc(ctx, s * 0.62, s * 0.42, s * 0.13, cc); break;
      case 3: { const k = s / 4; for (let row = 0; row < 5; row++) for (let i = -1; i < 5; i++) { const cx = i * k + (row % 2 ? k / 2 : 0), cy = row * k * 0.5 + k * 0.5; disc(ctx, cx, cy, k * 0.5, row % 2 ? b : cc); disc(ctx, cx, cy, k * 0.3, a); } break; } // feather scales
      case 4: for (let i = 5; i >= 1; i--) disc(ctx, 0, s, (s * i) / 5, i % 2 ? b : a); break; // ripple arcs
      case 5: disc(ctx, s / 2, s / 2, s * 0.46, b); disc(ctx, s * 0.66, s * 0.38, s * 0.4, a); break; // crescent
      case 6: disc(ctx, 0, s / 2, s / 2, b); disc(ctx, s, s / 2, s / 2, cc); break;
      case 7: { ctx.lineJoin = 'round'; ctx.strokeStyle = b; ctx.lineWidth = s * 0.09; ctx.lineCap = 'round'; // chevrons
        for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(s * 0.2, s * (0.25 + i * 0.22)); ctx.lineTo(s * 0.5, s * (0.12 + i * 0.22)); ctx.lineTo(s * 0.8, s * (0.25 + i * 0.22)); ctx.stroke(); } break; }
      // this film's own motifs (upright)
      case 12: bird(ctx, s / 2, s / 2, s * 0.34, -0.5, b, 0.8); break;
      case 13: for (let i = 0; i < 3; i++) bird(ctx, s * (0.25 + i * 0.25), s * (0.3 + (i % 2) * 0.35), s * 0.13, -0.4, i % 2 ? b : cc, 0.7); break; // tiny flock
      case 14: disc(ctx, s / 2, s / 2, s * 0.12, b); for (let i = 0; i < 7; i++) { const an = i / 7 * 6.283; disc(ctx, s / 2 + Math.cos(an) * s * 0.33, s / 2 + Math.sin(an) * s * 0.33, s * 0.07, cc); } break; // one + seven
    }
    ctx.restore();
  }
  const LIB = [0, 1, 2, 3, 4, 4, 5, 6, 7, 12, 12, 13, 14];

  const patCache = new Map();
  function pattern(pk, seed, spread, density = 0.5) {
    const key = pk + '|' + seed + '|' + spread;
    if (patCache.has(key)) { const v = patCache.get(key); patCache.delete(key); patCache.set(key, v); return v; }
    if (patCache.size > 6) patCache.delete(patCache.keys().next().value);
    const S = CELL, P = PAL[pk], base = P.t[2], Tn = P.t.map((c) => mix(base, c, spread));
    const cols = Math.ceil(W / S) + 3, rows = Math.ceil(HH / S) + 1;
    const cv = document.createElement('canvas'); cv.width = cols * S; cv.height = rows * S; const c = cv.getContext('2d');
    const r = rng(seed * 7919 + 13);
    c.fillStyle = Tn[1]; c.fillRect(0, 0, cv.width, cv.height);
    for (let j = -1; j < rows; j++) for (let i = -1; i < cols; i++) { const k = r(), cx = i * S, cy = j * S;
      if (k < 0.34) disc(c, cx + S, cy + S, S, Tn[Math.floor(r() * 4)]);
      else if (k < 0.5) { disc(c, cx + S, cy + S, S, Tn[3]); disc(c, cx + S, cy + S, S * 0.5, Tn[0]); } }
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) { if (r() > density) continue;
      const pick = () => Tn[Math.floor(r() * 5)]; let a = pick(), b = pick(); while (b === a) b = pick(); let cc = pick(); while (cc === b) cc = pick();
      motif(c, LIB[Math.floor(r() * LIB.length)], i * S, j * S, S, [a, b, cc], r); }
    patCache.set(key, cv); return cv;
  }
  function drawPattern(ctx, pat, offs, y0 = 0, y1 = HH) {
    const S = CELL;
    for (let j = Math.floor(y0 / S); j * S < y1; j++) { let dx = offs(j); dx = ((dx % S) + S) % S - S; ctx.drawImage(pat, 0, j * S, pat.width, S, dx, j * S, pat.width, S + 0.5); }
  }
  const drift = (lt, sp = 14) => (j) => (j % 2 ? 1 : -1) * lt * sp + (j % 3) * 37;

  // ---------- type ----------
  const F = { en: (w, px) => `${w} ${px}px "Inter Tight"`, mono: (px) => `500 ${px}px "DM Mono"` };
  function maskText(ctx, text, x, y, font, col, p, o = {}) {
    if (p <= 0) return 0;
    ctx.save(); ctx.font = font; ctx.letterSpacing = o.ls || '0px'; ctx.textAlign = o.align || 'left'; ctx.textBaseline = 'alphabetic';
    const m = ctx.measureText(text), asc = m.actualBoundingBoxAscent, desc = m.actualBoundingBoxDescent, h = asc + desc, w = m.width + 40;
    const x0 = o.align === 'center' ? x - w / 2 : o.align === 'right' ? x - w : x - 20;
    ctx.beginPath(); ctx.rect(x0, y - asc - 8, w, h + 16); ctx.clip();
    ctx.fillStyle = col; ctx.fillText(text, x, y + (1 - oExp(p)) * (h + 20)); ctx.restore(); return m.width;
  }
  function fitPx(ctx, text, w, px, weight = 900, ls = '-4px') { ctx.save(); ctx.font = F.en(weight, px); ctx.letterSpacing = ls; const m = ctx.measureText(text).width; ctx.restore(); return m > w ? Math.floor(px * w / m) : px; }
  function typeText(ctx, text, x, y, font, col, p, align = 'left') { const n = Math.floor(text.length * clamp(p) + 0.001); ctx.save(); ctx.font = font; ctx.letterSpacing = '4px'; ctx.fillStyle = col; ctx.textAlign = align; ctx.fillText(text.slice(0, n), x, y); ctx.restore(); }
  function chip(ctx, text, x, y, bg, fg, p) {
    if (p <= 0) return; ctx.save(); ctx.font = F.mono(34); ctx.letterSpacing = '4px'; const w = ctx.measureText(text).width + 44;
    ctx.beginPath(); ctx.rect(x - 4, y - 40, (w + 8) * oExp(p), 64); ctx.clip(); rrect(ctx, x, y - 36, w, 56, 28, bg); ctx.fillStyle = fg; ctx.fillText(text, x + 22, y + 2); ctx.restore();
  }
  // title block in the band: title, a heavy second line ~0.08 s later, a mono tag after
  function textBlock(ctx, t, t0, o) {
    const x = 80, y = o.y || 560, px = fitPx(ctx, o.title, 920, o.px || 200), spx = fitPx(ctx, o.sub || '', 920, o.spx || 58, 800, '-1px');
    maskText(ctx, o.title, x, y, F.en(900, px), o.fg, inv(t0, t0 + 0.45, t), { ls: '-4px' });
    if (o.sub) maskText(ctx, o.sub, x + 4, y + 86, F.en(800, spx), o.sfg || o.fg, inv(t0 + 0.08, t0 + 0.55, t), { ls: '-1px' });
    if (o.tag) chip(ctx, o.tag, x + 4, y + 166 - (o.sub ? 0 : 80), o.tbg, o.tfg, inv((o.tagAt ?? t0 + 0.25), (o.tagAt ?? t0 + 0.25) + 0.4, t));
  }


  // ---------- scenes ----------
  const SC = [
    { id: 'hook',   t0: 0,                 pk: 'dusk',    seed: 3,  full: true },
    { id: 'apart',  t0: B.swerve.s - 0.15, pk: 'sky',     seed: 11, tr: 'rows' },
    { id: 'leader', t0: B.leader.s - 0.15, pk: 'plum',    seed: 5,  tr: 'quarter' },
    { id: 'seven',  t0: B.seven.s - 0.15,  pk: 'night',   seed: 21, tr: 'cols' },
    { id: 'copy',   t0: B.copies.s - 0.15, pk: 'wheat',   seed: 8,  tr: 'rows' },
    { id: 'ripple', t0: B.turns.s - 0.15,  pk: 'dusk',    seed: 31, tr: 'quarter' },
    { id: 'faster', t0: B.sci.s - 0.15,    pk: 'apricot', seed: 17, tr: 'cols', full: true },
    { id: 'chorus', t0: B.sees.s - 0.15,   pk: 'plum',    seed: 44, tr: 'rows' },
    { id: 'sweet',  t0: B.sweet.s - 0.15,  pk: 'sky',     seed: 61, tr: 'quarter' },
    { id: 'ask',    t0: B.ask.s - 0.15,    pk: 'wheat',   seed: 72, tr: 'cols', full: true },
  ];
  const N = SC.length;


  const BAND0 = 180, BAND1 = 760, SX = 540, SY = 1210, SR = 400;
  function base(ctx, sc, lt, idx) {
    const P = PAL[sc.pk];
    ctx.fillStyle = P.t[2]; ctx.fillRect(0, 0, W, HH);
    const beatJump = sc.full ? Math.floor(lt / 0.6) * CELL * 0.25 : 0;
    drawPattern(ctx, pattern(sc.pk, sc.seed, sc.full ? 1 : 0.42), (j) => drift(lt)(j) + (j % 2 ? beatJump : -beatJump));
    ctx.fillStyle = P.fg === CREAM ? P.t[0] : P.t[4]; ctx.fillRect(0, BAND0, W, BAND1 - BAND0);
    hud(ctx, idx, lt, P);
  }
  function stage(ctx, sc, lt, col, r = SR, x = SX, y = SY) {
    const k = oExp(inv(0, 0.5, lt));
    const n = 6; for (let i = 0; i < n; i++) { const y0 = y - r + (2 * r * i) / n, off = (1 - k) * (i % 2 ? 1 : -1) * 700;
      ctx.save(); ctx.beginPath(); ctx.rect(0, y0, W, 2 * r / n + 1); ctx.clip(); disc(ctx, x + off, y, r, col); ctx.restore(); }
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.clip();
    const sx = lerp(x - r * 1.6, x + r * 1.6, ((lt * 0.18) % 1)); const g = ctx.createLinearGradient(sx - 160, 0, sx + 160, 0);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,0.10)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, 2 * r, 2 * r); ctx.restore();
  }
  function hud(ctx, idx, lt, P) {
    const fg = P.fg, dk = fg === CREAM ? '#fbf6ec' : INK, dim = rgba(dk, 0.55);
    typeText(ctx, 'ZORBLY · FIELD NOTES', 80, 250, F.mono(28), dim, inv(0.05, 0.5, lt));
    typeText(ctx, String(idx + 1).padStart(2, '0') + ' / ' + String(N).padStart(2, '0'), 1000, 250, F.mono(28), fg, inv(0.05, 0.3, lt), 'right');
    const x0 = 80, wd = 920, gap = 10, tw = (wd - gap * (N - 1)) / N;
    for (let i = 0; i < N; i++) { const cur = i === idx; ctx.fillStyle = cur ? fg : rgba(dk, i < idx ? 0.5 : 0.18); ctx.fillRect(x0 + i * (tw + gap), cur ? 284 : 290, tw, cur ? 14 : 6); }
  }

  const S = {};
  const clipStage = (ctx) => { ctx.save(); ctx.beginPath(); ctx.rect(0, BAND1 + 10, W, 1660 - BAND1 - 10); ctx.clip(); };

  // 01 hook: a murmuration swirling on the dusk disc; YOU'D CRASH / 10,000 STARLINGS / 0 CRASHES
  const MUR = (() => { const r = rng(91), a = []; for (let i = 0; i < 260; i++) { const an = r() * 6.283, rr = Math.sqrt(r()); a.push({ u: Math.cos(an) * rr, v: Math.sin(an) * rr, ph: r() * 6.28, q: r() }); } return a; })();
  function murPos(p, t, cx, cy, sc) {
    const rot = 0.35 * Math.sin(t * 0.45), sw = 1 + 0.18 * Math.sin(t * 0.7 + p.v);
    let x = (p.u * 330 + 70 * Math.sin(p.v * 3 + t * 0.9)) * sw, y = p.v * 190 + 55 * Math.sin(p.u * 2.6 + t * 1.2) - 60 * p.u * p.u;
    const c = Math.cos(rot), s = Math.sin(rot); return [cx + (x * c - y * s) * sc, cy + (x * s + y * c) * sc];
  }
  function murmuration(ctx, t, cx, cy, sc, col, size = 15) {
    for (const p of MUR) { const a = murPos(p, t, cx, cy, sc), b = murPos(p, t + 0.03, cx, cy, sc), ang = Math.atan2(b[1] - a[1], b[0] - a[0]) + 0.0001;
      bird(ctx, a[0], a[1], size * (0.8 + 0.4 * p.q), ang, col, flapAt(t, p.ph)); }
  }
  S.hook = (ctx, t, lt, sc, i) => {
    const P = PAL.dusk; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    clipStage(ctx); murmuration(ctx, t, SX, SY, 1.05, PAL.night.t[0], 15); ctx.restore();
    maskText(ctx, "YOU'D CRASH", 80, 440, F.en(900, fitPx(ctx, "YOU'D CRASH", 920, 190)), CREAM, inv(0, 0.35, t), { ls: '-4px' });
    maskText(ctx, '10,000 STARLINGS', 84, 580, F.en(900, fitPx(ctx, '10,000 STARLINGS', 910, 120)), GOLD, inv(T('never', 'ten') - 0.15, T('never', 'ten') + 0.3, t), { ls: '-3px' });
    chip(ctx, '0 CRASHES', 88, 700, GOLD, INK, inv(T('never', 'never') - 0.1, T('never', 'never') + 0.35, t));
  };
  // 02 two birds swerving inches apart; WHY NO CRASH?
  S.apart = (ctx, t, lt, sc, i) => {
    const P = PAL.sky; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const sw = Math.sin((t - B.swerve.s) * 2.2) * 150 * oExp(inv(T('swerve', 'swerve') - 0.2, T('swerve', 'swerve') + 0.4, t));
    const ang = -Math.PI / 2 + Math.cos((t - B.swerve.s) * 2.2) * 0.45 * oExp(inv(T('swerve', 'swerve') - 0.2, T('swerve', 'swerve') + 0.4, t));
    const gap = 150, x1 = SX - gap / 2 + sw, x2 = SX + gap / 2 + sw;
    clipStage(ctx);
    for (let k = 0; k < 9; k++) { const r = rng(k + 4), bx = 160 + r() * 760, by = 860 + r() * 760; if (Math.abs(bx - SX - sw) < 230 && Math.abs(by - SY) < 250) continue; bird(ctx, bx + sw * 0.5, by, 40, ang, P.t[0], flapAt(t, k)); }
    bird(ctx, x1, SY, 120, ang, INK, flapAt(t, 0.3), GOLD); bird(ctx, x2, SY + 30, 120, ang, INK, flapAt(t, 1.9), GOLD);
    ctx.restore();
    const bk = oExp(inv(T('swerve', 'inches') - 0.2, T('swerve', 'inches') + 0.2, t));
    if (bk > 0 && t < B.why.s) { const y = SY + 220, xa = x1 + 20, xb = lerp(xa, x2 - 20, bk); seg(ctx, [xa, y], [xb, y], 10, INK); seg(ctx, [xa, y - 22], [xa, y + 22], 10, INK); if (bk > 0.95) seg(ctx, [xb, y - 22], [xb, y + 22], 10, INK);
      typeText(ctx, 'INCHES', (xa + x2) / 2 - 20, y + 80, F.mono(48), INK, bk, 'center'); }
    const qk = oBack(inv(T('why', 'slam') - 0.2, T('why', 'slam') + 0.15, t));
    if (qk > 0) { ctx.save(); ctx.translate(SX + sw, SY - 250); ctx.scale(qk, qk); disc(ctx, 0, 0, 90, EMBER); ctx.font = F.en(900, 140); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = CREAM; ctx.fillText('?', 0, 8); ctx.restore(); }
    if (t < B.why.s - 0.15) textBlock(ctx, t, T('swerve', 'they') - 0.1, { title: 'INCHES APART', sub: 'SWERVING AT FULL SPEED', fg: INK, sfg: P.t[0], px: 190 });
    else textBlock(ctx, t, T('why', 'so') - 0.1, { title: 'WHY NO CRASH?', sub: 'THEY NEVER SLAM INTO EACH OTHER', fg: INK, sfg: P.t[0], px: 180 });
  };
  // 03 no leader giving orders: a crowned bird, crossed out
  S.leader = (ctx, t, lt, sc, i) => {
    const P = PAL.plum; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const k = oExp(inv(T('leader', 'theres') - 0.2, T('leader', 'theres') + 0.4, t));
    clipStage(ctx);
    for (let n = 0; n < 6; n++) { const an = -Math.PI / 2 + (n - 2.5) * 0.5, rr = 330; bird(ctx, SX + Math.cos(an + Math.PI / 2) * rr * 0.9, SY + 150 + Math.abs(n - 2.5) * 60, 60, -Math.PI / 2, P.t[1], flapAt(t, n)); }
    bird(ctx, SX, SY - 20 + (1 - k) * 200, 140, -Math.PI / 2, INK, flapAt(t, 0.4), GOLD);
    crown(ctx, SX, SY - 200 + (1 - k) * 200, 70, GOLD);
    // order lines going out
    const ok = oExp(inv(T('leader', 'giving') - 0.2, T('leader', 'orders') + 0.1, t));
    if (ok > 0) for (let n = 0; n < 6; n++) { const an = Math.PI * 0.15 + n * Math.PI * 0.14; ctx.save(); ctx.globalAlpha = 0.6; ctx.setLineDash([2, 22]); seg(ctx, [SX, SY], [SX + Math.cos(an) * 340 * ok, SY + Math.sin(an) * 340 * ok], 10, CREAM); ctx.restore(); }
    ctx.restore();
    cross(ctx, SX, SY - 90, 230, EMBER, inv(T('leader', 'no') - 0.05, T('leader', 'leader') + 0.25, t));
    textBlock(ctx, t, T('leader', 'theres') - 0.1, { title: 'NO LEADER', sub: 'NOBODY GIVES ORDERS', fg: CREAM, sfg: P.t[4], px: 230, tag: 'NO BOSS BIRD', tbg: EMBER, tfg: CREAM, tagAt: T('leader', 'orders') });
  };
  // 04 each starling watches ~7 neighbours; close or far, always ~7
  const SEV = scatter(7, 6, 5, 170, 880, 910, 1560, 0.28), SEV_H = closestTo(SEV, SX, SY), SEV_N = nearest(SEV, SEV_H, 7);
  S.seven = (ctx, t, lt, sc, i) => {
    const P = PAL.night; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const sp = 1 + 0.55 * io3(inv(T('far', 'far') - 0.25, T('far', 'far') + 0.5, t)) - 0.55 * io3(inv(T('far', 'matter') - 0.2, T('far', 'matter') + 0.6, t));
    const h = SEV[SEV_H], pos = (p) => [h.x + (p.x - h.x) * sp, h.y + (p.y - h.y) * sp];
    clipStage(ctx);
    const lineAt = (n) => T('seven', 'seven') - 0.1 + n * 0.08;
    SEV_N.forEach((j, n) => { const a = oExp(inv(lineAt(n), lineAt(n) + 0.3, t)); if (a <= 0) return; const p = pos(SEV[j]); seg(ctx, [h.x, h.y], [lerp(h.x, p[0], a), lerp(h.y, p[1], a)], 8, rgba(GOLD, 0.8)); });
    SEV.forEach((p, j) => { if (j === SEV_H) return; const q = pos(p), on = SEV_N.includes(j) && t > lineAt(SEV_N.indexOf(j)) + 0.2;
      if (on) disc(ctx, q[0], q[1], 56, rgba(GOLD, 0.25));
      bird(ctx, q[0], q[1], 42, -Math.PI / 2 + 0.2, on ? CREAM : mix(CREAM, P.t[4], 0.55), flapAt(t, p.ph)); });
    bird(ctx, h.x, h.y, 52, -Math.PI / 2 + 0.2, GOLD, flapAt(t, 0), INK);
    ctx.restore();
    if (t < B.far.s - 0.15) textBlock(ctx, t, T('seven', 'each') - 0.1, { title: 'WATCHES 7', sub: 'ITS NEAREST NEIGHBOURS ONLY', fg: CREAM, sfg: P.accent, px: 230, tag: '7 NEIGHBOURS', tbg: GOLD, tfg: INK, tagAt: T('seven', 'seven') });
    else if (t < B.always.s - 0.15) textBlock(ctx, t, T('far', 'close') - 0.1, { title: 'CLOSE OR FAR', sub: "DISTANCE DOESN'T MATTER", fg: CREAM, sfg: P.accent, px: 200 });
    else { maskText(ctx, 'ALWAYS', 80, 470, F.en(900, 170), CREAM, inv(T('always', 'always') - 0.15, T('always', 'always') + 0.3, t), { ls: '-4px' });
      maskText(ctx, '~7', 80, 700, F.en(900, 230), GOLD, inv(T('always', 'seven') - 0.15, T('always', 'seven') + 0.25, t), { ls: '-6px' }); }
  };
  // 05 copies their speed and turns, keeps a tiny gap
  const CP = [[0, 0], [-150, 120], [150, 120], [-260, -60], [260, -60], [-110, -190], [110, -190], [0, 260]];
  S.copy = (ctx, t, lt, sc, i) => {
    const P = PAL.wheat; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const turn = 0.75 * io3(inv(T('copies', 'turns') - 0.2, T('copies', 'turns') + 0.35, t)) - 0.75 * io3(inv(T('gap', 'keeps') - 0.1, T('gap', 'keeps') + 0.5, t));
    const ang = -Math.PI / 2 + turn, ca = Math.cos(turn), sa = Math.sin(turn);
    const spd = oExp(inv(T('copies', 'speed') - 0.2, T('copies', 'speed') + 0.3, t)) * (1 - inv(T('copies', 'turns') - 0.3, T('copies', 'turns'), t));
    clipStage(ctx);
    CP.forEach(([dx, dy], n) => { const x = SX + dx * ca - dy * sa, y = SY - 20 + dx * sa + dy * ca;
      if (spd > 0) for (let m = 1; m < 4; m++) seg(ctx, [x - Math.cos(ang) * (70 + m * 30), y - Math.sin(ang) * (70 + m * 30)], [x - Math.cos(ang) * (90 + m * 30 + 50 * spd), y - Math.sin(ang) * (90 + m * 30 + 50 * spd)], 6, rgba(INK, 0.35 * spd));
      bird(ctx, x, y, n ? 62 : 74, ang, n ? INK : PAL.plum.t[2], flapAt(t, n * 1.3), n ? null : GOLD); });
    const gk = oExp(inv(T('gap', 'tiny') - 0.2, T('gap', 'gap') + 0.15, t));
    if (gk > 0) { ctx.save(); ctx.setLineDash([3, 20]); ctx.globalAlpha = gk; arcS(ctx, SX, SY - 20, 110 * gk, 0, 6.283, 10, PAL.plum.t[1]); ctx.restore(); typeText(ctx, 'PERSONAL SPACE', SX, SY + 400, F.mono(46), INK, gk, 'center'); }
    ctx.restore();
    if (t < B.gap.s - 0.15) textBlock(ctx, t, T('copies', 'it') - 0.1, { title: 'COPY THEM', sub: 'THEIR SPEED AND THEIR TURNS', fg: INK, sfg: PAL.plum.t[1], px: 220 });
    else textBlock(ctx, t, T('gap', 'and') - 0.1, { title: 'KEEP A GAP', sub: 'A TINY BUBBLE OF SPACE', fg: INK, sfg: PAL.plum.t[1], px: 220, tag: 'NO BUMPS', tbg: PAL.plum.t[2], tfg: CREAM, tagAt: T('gap', 'gap') });
  };
  // 06 one turns -> its 7 turn -> their neighbours -> a wave through the flock (hops on the 7-nearest graph)
  const RP = scatter(13, 8, 7, 140, 860, 940, 1580, 0.3), RP_H = closestTo(RP, SX, SY), RP_N = RP.map((_, j) => nearest(RP, j, 7));
  const RP_HOP = (() => { const hop = RP.map(() => 99); hop[RP_H] = 0; const q = [RP_H];
    while (q.length) { const a = q.shift(); RP.forEach((_, b) => { if (hop[b] <= hop[a] + 1) return; if (RP_N[a].includes(b) || RP_N[b].includes(a)) { hop[b] = hop[a] + 1; q.push(b); } }); } return hop; })();
  const hopTime = (h) => [T('turns', 'turns'), T('nbrs', 'turn'), T('their', 'neighbours'), T('wave', 'ripples')][h] ?? T('wave', 'ripples') + (h - 3) * 0.5;
  S.ripple = (ctx, t, lt, sc, i) => {
    const P = PAL.dusk; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    clipStage(ctx);
    const h = RP[RP_H], lk = oExp(inv(T('nbrs', 'seven') - 0.1, T('nbrs', 'seven') + 0.3, t)) * (1 - inv(T('their', 'then'), T('their', 'then') + 0.4, t));
    if (lk > 0) RP_N[RP_H].forEach((j) => seg(ctx, [h.x, h.y], [lerp(h.x, RP[j].x, lk), lerp(h.y, RP[j].y, lk)], 8, rgba(GOLD, 0.8)));
    const wk = inv(T('wave', 'ripples') - 0.3, T('wave', 'wave') + 0.4, t);
    if (wk > 0 && wk < 1) { ctx.save(); ctx.globalAlpha = 0.5 * (1 - wk); arcS(ctx, h.x, h.y, 80 + wk * 650, 0, 6.283, 22, GOLD); ctx.restore(); }
    RP.forEach((p, j) => { const th = hopTime(RP_HOP[j]), k = io3(inv(th - 0.05, th + 0.3, t)), fl = clamp(1 - (t - th) / 0.8) * (t >= th ? 1 : 0);
      if (fl > 0) disc(ctx, p.x, p.y, 48, rgba(GOLD, 0.45 * fl));
      bird(ctx, p.x, p.y, j === RP_H ? 48 : 36, -Math.PI / 2 + k * 1.0, j === RP_H ? GOLD : mix(PAL.night.t[0], GOLD, fl * 0.7), flapAt(t, p.ph), j === RP_H ? INK : null); });
    ctx.restore();
    if (t < B.nbrs.s - 0.1) textBlock(ctx, t, T('turns', 'so') - 0.1, { title: 'ONE TURNS', sub: 'JUST ONE BIRD CHANGES COURSE', fg: CREAM, sfg: P.t[4], px: 220 });
    else if (t < B.wave.s - 0.15) { maskText(ctx, 'ITS 7 TURN', 80, 470, F.en(900, fitPx(ctx, 'ITS 7 TURN', 920, 170)), CREAM, inv(T('nbrs', 'its') - 0.1, T('nbrs', 'seven') + 0.2, t), { ls: '-4px' });
      maskText(ctx, 'THEN THEIRS', 80, 650, F.en(900, fitPx(ctx, 'THEN THEIRS', 920, 170)), GOLD, inv(T('their', 'then') - 0.1, T('their', 'their') + 0.2, t), { ls: '-4px' }); }
    else textBlock(ctx, t, T('wave', 'and') - 0.1, { title: 'A WAVE', sub: 'RIPPLING THROUGH THE FLOCK', fg: CREAM, sfg: P.t[4], px: 260, tag: 'NO ONE STEERS IT', tbg: GOLD, tfg: INK, tagAt: T('wave', 'wave') });
  };
  // 07 the wave travels about 3x faster than one bird can react: a race in two lanes
  S.faster = (ctx, t, lt, sc, i) => {
    const P = PAL.apricot; base(ctx, sc, lt, i);
    ctx.fillStyle = P.t[4]; ctx.fillRect(0, BAND1 + 60, W, 1600 - BAND1 - 60);
    const x0 = 140, x1 = 940, st = T('faster', 'about') + 0.1;
    const lanes = [{ y: 1060, lab: 'TURN WAVE', dur: 0.9, col: PAL.dusk.t[1] }, { y: 1400, lab: 'ONE BIRD REACTS', dur: 2.7, col: INK }];
    lanes.forEach((L, n) => { const lk = oExp(inv(B.sci.s + n * 0.15, B.sci.s + 0.5 + n * 0.15, t)); if (lk <= 0) return;
      seg(ctx, [x0, L.y + 70], [lerp(x0, x1, lk), L.y + 70], 8, rgba(INK, 0.3));
      for (let m = 0; m <= 8; m++) disc(ctx, lerp(x0, x1, m / 8), L.y + 70, 8, rgba(INK, 0.3 * lk));
      typeText(ctx, L.lab, x0, L.y - 70, F.mono(46), INK, lk);
      const p = inv(st, st + L.dur, t), x = lerp(x0, x1, n ? p : io3(p));
      seg(ctx, [x0, L.y + 70], [x, L.y + 70], 16, n ? INK : PAL.dusk.t[2]);
      bird(ctx, x, L.y, 50, 0, L.col, flapAt(t, n * 2, n ? 8 : 20), GOLD);
      if (p >= 1) { const fk = oBack(inv(st + L.dur, st + L.dur + 0.25, t)); ctx.save(); ctx.translate(x1 - 10, L.y - 80); ctx.scale(fk, fk); disc(ctx, 0, 0, 40, n ? INK : PAL.dusk.t[1]); typeText(ctx, n ? '1×' : '3×', 0, 14, F.mono(40), CREAM, 1, 'center'); ctx.restore(); } });
    if (t < T('faster', 'three') - 0.15) textBlock(ctx, t, T('sci', 'scientists') - 0.1, { title: 'MEASURED', sub: 'HOW FAST THE WAVE TRAVELS', fg: INK, sfg: P.t[0], px: 220 });
    else { bigNum(ctx, '3×', 230, 500, 280, INK, inv(T('faster', 'three') - 0.15, T('faster', 'three') + 0.25, t));
      maskText(ctx, 'FASTER', 450, 540, F.en(900, fitPx(ctx, 'FASTER', 540, 150)), INK, inv(T('faster', 'faster') - 0.15, T('faster', 'faster') + 0.25, t), { ls: '-4px' });
      maskText(ctx, 'THAN ONE BIRD CAN REACT', 84, 690, F.en(800, fitPx(ctx, 'THAN ONE BIRD CAN REACT', 910, 66, 800, '-1px')), P.t[0], inv(T('faster', 'than') - 0.1, T('faster', 'single') + 0.3, t), { ls: '-1px' }); }
  };
  // 08 each bird sees it coming: a chorus line of birds and of dancers
  S.chorus = (ctx, t, lt, sc, i) => {
    const P = PAL.plum; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const n = 7, xs = (k) => 150 + k * 130, t0 = T('sees', 'sees') - 0.2, per = 1.5, step = 0.16;
    const lift = (k) => { const u = ((t - t0 - k * step) % per + per) % per; return t < t0 + k * step ? 0 : Math.sin(clamp(u / 0.45) * Math.PI); };
    const dk = oExp(inv(T('chorus', 'dancers') - 0.2, T('chorus', 'dancers') + 0.3, t));
    clipStage(ctx);
    for (let k = 0; k < n; k++) { const l = lift(k); bird(ctx, xs(k), 1120 - l * 110 - (dk * 80), 52, -Math.PI / 2 + l * 0.6, INK, flapAt(t, k), GOLD); }
    // the "sees it coming" chevron runs ahead of the wave
    if (t > t0 && t < T('chorus', 'dancers')) { const u = ((t - t0) % per) / (step * n); if (u < 1.15) { const x = lerp(xs(0), xs(n - 1), clamp(u + 0.15)); arrow(ctx, [x - 60, 1300], [x + 40, 1300], 12, EMBER); } }
    if (dk > 0) { ctx.globalAlpha = dk; for (let k = 0; k < n; k++) { const l = lift(k), x = xs(k), y = 1560;
      person(ctx, x, y - (1 - dk) * 80, 230, CREAM);
      seg(ctx, [x, y - 20], [x + 50 * l, y - 20 - 120 * l], 34, CREAM); } ctx.globalAlpha = 1; }
    ctx.restore();
    if (t < B.chorus.s - 0.1) textBlock(ctx, t, T('sees', 'each') - 0.1, { title: 'SEES IT COMING', sub: 'AND MOVES BEFORE IT ARRIVES', fg: CREAM, sfg: P.t[4], px: 170 });
    else textBlock(ctx, t, T('chorus', 'like') - 0.1, { title: 'CHORUS LINE', sub: 'LIKE DANCERS KICKING IN TURN', fg: CREAM, sfg: P.t[4], px: 200, tag: 'TIMING, NOT ORDERS', tbg: GOLD, tfg: INK, tagAt: T('chorus', 'line') });
  };
  // 09 seven is the sweet spot: a dial from 1 to 20 that settles on 7
  S.sweet = (ctx, t, lt, sc, i) => {
    const P = PAL.sky; base(ctx, sc, lt, i);
    const cx = SX, cy = 1420, R = 390;
    ctx.fillStyle = P.t[4]; ctx.beginPath(); ctx.arc(cx, cy, R + 40, Math.PI, 0); ctx.closePath(); ctx.fill();
    const angOf = (v) => Math.PI + (v - 1) / 19 * Math.PI;
    for (let v = 1; v <= 20; v++) { const a = angOf(v), on = v === 7; seg(ctx, [cx + Math.cos(a) * (R - (on ? 70 : 40)), cy + Math.sin(a) * (R - (on ? 70 : 40))], [cx + Math.cos(a) * R, cy + Math.sin(a) * R], on ? 16 : 8, on ? EMBER : INK); }
    // green zone around 7
    ctx.save(); ctx.globalAlpha = 0.35; arcS(ctx, cx, cy, R - 110, angOf(5.5), angOf(8.5), 40, PAL.wheat.t[2]); ctx.restore();
    typeText(ctx, '1', cx - R - 10, cy + 70, F.mono(48), INK, 1, 'center'); typeText(ctx, '20', cx + R + 10, cy + 70, F.mono(48), INK, 1, 'center');
    const s1 = T('sweet', 'seven') - 0.1, v = t < s1 + 0.7 ? lerp(1, 20, io3(inv(s1, s1 + 0.7, t))) : lerp(20, 7, oBack(inv(s1 + 0.7, T('sweet', 'sweet'), t), 1.2));
    const a = angOf(v); seg(ctx, [cx, cy], [cx + Math.cos(a) * (R - 90), cy + Math.sin(a) * (R - 90)], 22, INK); disc(ctx, cx, cy, 40, INK); disc(ctx, cx, cy, 16, GOLD);
    bigNum(ctx, '7', cx, cy - 170, 170, EMBER, inv(T('sweet', 'sweet') - 0.1, T('sweet', 'spot') + 0.2, t));
    const ek = inv(T('enough', 'enough') - 0.1, T('enough', 'enough') + 0.4, t), wk = inv(T('without', 'without') - 0.1, T('without', 'without') + 0.4, t);
    chip(ctx, 'TOO FEW: DRIFT APART', 100, 1550, ek > 0 ? INK : P.t[0], CREAM, Math.max(ek, 0));
    chip(ctx, 'TOO MANY: OVERLOAD', 100, 1630 - 10, PAL.plum.t[1], CREAM, wk);
    if (t < B.enough.s - 0.15) textBlock(ctx, t, T('sweet', 'and') - 0.1, { title: 'SWEET SPOT', sub: 'SEVEN SEEMS TO WORK BEST', fg: INK, sfg: P.t[0], px: 210 });
    else textBlock(ctx, t, T('enough', 'enough') - 0.1, { title: 'JUST ENOUGH', sub: 'NOT EVERYONE AT ONCE', fg: INK, sfg: P.t[0], px: 210, tag: 'ROBUST + CHEAP', tbg: INK, tfg: CREAM, tagAt: T('without', 'everyone') });
  };
  // 10 ask: could you dodge 10,000 people watching just 7?
  const CR = scatter(29, 7, 5, 150, 960, 930, 1580, 0.3), CR_H = closestTo(CR, SX, 1270), CR_N = nearest(CR, CR_H, 7);
  S.ask = (ctx, t, lt, sc, i) => {
    const P = PAL.wheat; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    clipStage(ctx);
    const lineAt = (n) => T('ask2', 'seven') - 0.1 + n * 0.06, h = CR[CR_H];
    CR_N.forEach((j, n) => { const a = oExp(inv(lineAt(n), lineAt(n) + 0.25, t)); if (a > 0) seg(ctx, [h.x, h.y - 70], [lerp(h.x, CR[j].x, a), lerp(h.y - 70, CR[j].y - 70, a)], 8, rgba(EMBER, 0.9)); });
    CR.forEach((p, j) => { if (j === CR_H) return; const k = oExp(inv(T('ask', 'ten') - 0.2 + p.q * 0.6, T('ask', 'ten') + 0.2 + p.q * 0.6, t)); if (k <= 0) return;
      person(ctx, p.x, p.y + (1 - k) * 60, 130, CR_N.includes(j) && t > lineAt(CR_N.indexOf(j)) ? INK : P.t[0]); });
    const yk = oBack(inv(T('ask', 'you') - 0.2, T('ask', 'you') + 0.15, t));
    if (yk > 0) { person(ctx, h.x, h.y, 150 * yk, EMBER); typeText(ctx, 'YOU', h.x, h.y + 60, F.mono(44), INK, yk, 'center'); }
    ctx.restore();
    textBlock(ctx, t, T('ask', 'could') - 0.1, { title: 'COULD YOU?', sub: 'DODGE 10,000 PEOPLE WATCHING 7', fg: INK, sfg: PAL.plum.t[1], px: 240, tag: 'TELL US IN THE COMMENTS', tbg: INK, tfg: CREAM, tagAt: T('ask2', 'watching') });
  };
  // ---------- grid transitions ----------
  const TR = 0.42;
  function drawScene(ctx, idx, t) { const sc = SC[idx]; S[sc.id](ctx, t, t - sc.t0, sc, idx); }
  function transClip(ctx, kind, u) {
    ctx.beginPath();
    if (kind === 'rows') { const rows = Math.ceil(HH / CELL); for (let j = 0; j < rows; j++) { const uu = ioExp(clamp(u * 1.6 - j * 0.6 / rows)); const w = W * uu; ctx.rect(j % 2 ? W - w : 0, j * CELL, w, CELL + 1); } }
    else if (kind === 'cols') { const cols = W / CELL; for (let i = 0; i < cols; i++) { const uu = ioExp(clamp(u * 1.6 - i * 0.6 / cols)); ctx.rect(i * CELL, 0, CELL + 1, HH * uu); } }
    else { const cols = W / CELL, rows = Math.ceil(HH / CELL); for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) { const uu = ioExp(clamp(u * 1.5 - ((i + j) % 4) * 0.12)); if (uu <= 0) continue; const cx = i * CELL, cy = j * CELL; ctx.moveTo(cx, cy); ctx.arc(cx, cy, CELL * 1.42 * uu, 0, Math.PI / 2); ctx.closePath(); } }
    ctx.clip();
  }
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < N - 1 && t >= SC[i + 1].t0 - TR / 2) i++;
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    if (i > 0 && t < SC[i].t0 + TR / 2) {
      const u = inv(SC[i].t0 - TR / 2, SC[i].t0 + TR / 2, t);
      drawScene(ctx, i - 1, t); ctx.save(); transClip(ctx, SC[i].tr, u); drawScene(ctx, i, t); ctx.restore();
    } else drawScene(ctx, i, t);
    ctx.restore();
    if (!GR || GR.width !== Wd) { GR = document.createElement('canvas'); GR.width = Wd; GR.height = Hd; const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound: percussion spine, an accent on every cut, wing foley for each action ----------
  function scoreSound(k) {
    SC.forEach((sc, idx) => { if (idx === 0) return;
      k.play('whoosh', sc.t0 - 0.25, { dur: 0.35, gain: 0.45, top: 2600 });
      k.play('thud', sc.t0 + 0.05, { f: 110, gain: 0.55 });
      k.play('tock', sc.t0 + 0.05, { f: 520, gain: 0.35, minor: true }); });
    for (let tb = 0.2; tb < DURATION - 0.6; tb += 0.6) k.play('tock', tb, { f: (Math.round(tb / 0.6) % 4 === 0) ? 180 : 260, gain: 0.12, minor: true });
    // hook: a murmuration rush of wings
    k.noise(0, { dur: 4.4, color: 'pink', filter: 'bandpass', f: [[0, 900], [2, 1500], [4.4, 1100]], q: 0.8, gain: 0.1, a: 0.3, verb: 0.3 });
    k.play('impact', T('hook', 'crash'), { gain: 0.5 });
    k.play('pop', T('never', 'ten'), { f: 520, gain: 0.5 });
    k.play('success', T('never', 'never'), { f: 'C6', gain: 0.25 });
    // inches apart, why
    k.play('swish', T('swerve', 'swerve') - 0.1, { gain: 0.4, pan: -0.4 }); k.play('swish', T('swerve', 'apart'), { gain: 0.35, pan: 0.4 });
    k.play('click', T('swerve', 'inches'), { gain: 0.35 });
    k.play('pop', T('why', 'slam'), { f: 380, gain: 0.55 });
    // leader crossed out
    k.play('ding', T('leader', 'theres'), { f: 'G5', gain: 0.22 }); k.play('error', T('leader', 'leader'), { f: 'A3', gain: 0.3 });
    // seven lines
    for (let n = 0; n < 7; n++) k.play('tick', T('seven', 'seven') - 0.1 + n * 0.08, { gain: 0.35 });
    k.play('swish', T('far', 'far') - 0.2, { gain: 0.35 }); k.play('swish', T('far', 'matter') - 0.1, { gain: 0.3 });
    k.play('impact', T('always', 'seven'), { gain: 0.5 }); ['C5', 'E5', 'G5'].forEach((n, j) => k.play('ding', T('always', 'seven') + j * 0.03, { f: n, gain: 0.2 }));
    // copy speed, turn, gap
    k.play('riser', T('copies', 'speed') - 0.3, { dur: 0.6, gain: 0.25 });
    k.play('swish', T('copies', 'turns') - 0.15, { gain: 0.45 });
    k.play('pop', T('gap', 'gap'), { f: 600, gain: 0.4 });
    // ripple: one tick per hop, then the wave
    [0, 1, 2, 3, 4, 5].forEach((h) => k.play('tock', hopTime(h), { f: 300 + h * 70, gain: 0.4 - h * 0.04, pan: (h % 2 ? 0.3 : -0.3) }));
    k.noise(T('wave', 'ripples') - 0.2, { dur: 1.8, color: 'pink', filter: 'bandpass', f: [[0, 600], [1.8, 2200]], q: 1.2, gain: 0.14, a: 0.3, verb: 0.3 });
    // race
    k.play('click', T('faster', 'about') + 0.1, { gain: 0.4 });
    k.play('impact', T('faster', 'three'), { gain: 0.55 });
    k.play('ding', T('faster', 'about') + 1.0, { f: 'E6', gain: 0.3 }); k.play('ding', T('faster', 'about') + 2.8, { f: 'E4', gain: 0.25 });
    // chorus kicks
    for (let r = 0; r < 2; r++) for (let n = 0; n < 7; n++) k.play('tock', T('sees', 'sees') - 0.2 + r * 1.5 + n * 0.16, { f: 400 + n * 40, gain: 0.25, minor: true, pan: -0.6 + n * 0.2 });
    // sweet spot dial
    k.play('riser', T('sweet', 'seven') - 0.1, { dur: 0.7, gain: 0.25 }); k.play('thud', T('sweet', 'sweet'), { f: 120, gain: 0.5 }); k.play('ding', T('sweet', 'spot'), { f: 'A5', gain: 0.25 });
    k.play('pop', T('enough', 'enough'), { f: 450, gain: 0.4 }); k.play('pop', T('without', 'without'), { f: 550, gain: 0.4 });
    // ask
    k.play('pop', T('ask', 'you'), { f: 640, gain: 0.5 });
    for (let n = 0; n < 7; n++) k.play('tick', T('ask2', 'seven') - 0.1 + n * 0.06, { gain: 0.3 });
    k.play('ding', T('ask2', 'seven') + 0.4, { f: 'C6', gain: 0.3 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
