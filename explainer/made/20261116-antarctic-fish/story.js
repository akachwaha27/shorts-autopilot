// ================= Pictogram Motion (Lemo-Opuscar, MIT style guide), vertical 1080x1920: "Why don't Antarctic fish freeze solid?" =================
// Unattended run: no storyboard step. Drawing technique ported from the Pictogram Motion engine; all figures, story and layout are ours.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'hook', s: 0.25, e: 4.71, w: {'your': 0.25, 'goldfish': 0.59, 'would': 1.28, 'freeze': 1.71, 'solid': 2.22, 'in': 2.65, 'this': 2.82, 'minus': 3.17, '19': 3.59, 'degree': 3.77, 'water': 4.28} },
    { id: 'how', s: 5.18, e: 6.84, w: {'so': 5.18, 'how': 5.32, 'does': 5.53, 'this': 5.8, 'fish': 6.08, 'survive': 6.35} },
    { id: 'sea', s: 7.41, e: 9.63, w: {'the': 7.41, 'sea': 7.61, 'around': 7.81, 'antarctica': 8.21, 'stays': 8.89, 'liquid': 9.22} },
    { id: 'salt', s: 10.1, e: 12.35, w: {'because': 10.1, 'salt': 10.58, 'lowers': 10.85, 'its': 11.26, 'freezing': 11.46, 'point': 12.01} },
    { id: 'blood', s: 12.74, e: 17.01, w: {'but': 12.74, 'normal': 13.07, 'fish': 13.72, 'blood': 14.16, 'freezes': 14.71, 'at': 15.48, 'about': 15.7, 'minus': 16.24, '07': 16.79} },
    { id: 'pop', s: 17.43, e: 20.05, w: {'so': 17.43, 'a': 17.57, 'regular': 17.64, 'fish': 18.13, 'would': 18.42, 'turn': 18.77, 'into': 19.06, 'a2': 19.34, 'fishsicle': 19.41} },
    { id: 'trick', s: 20.45, e: 22.3, w: {'the': 20.45, 'trick': 20.67, 'is': 21.02, 'hiding': 21.16, 'in': 21.59, 'its': 21.73, 'blood': 21.94} },
    { id: 'afp', s: 22.7, e: 26.76, w: {'antarctic': 22.7, 'icefish': 23.39, 'and': 23.93, 'their': 24.16, 'cousins': 24.54, 'make': 25.08, 'antifreeze': 25.38, 'proteins': 26.15} },
    { id: 'crystal', s: 27.16, e: 29.56, w: {'when': 27.16, 'a': 27.47, 'tiny': 27.55, 'ice': 27.86, 'crystal': 28.09, 'sneaks': 28.63, 'inside': 29.1} },
    { id: 'grab', s: 30.14, e: 32.4, w: {'the': 30.14, 'proteins': 30.38, 'grab': 31.0, 'onto': 31.31, 'its': 31.62, 'surface': 31.86} },
    { id: 'stop', s: 32.47, e: 33.5, w: {'and': 32.47, 'stop': 32.63, 'it': 32.83, 'from': 32.93, 'growing': 33.14} },
    { id: 'small', s: 33.92, e: 36.18, w: {'the': 33.92, 'crystal': 34.14, 'stays': 34.65, 'too': 35.01, 'small': 35.23, 'to': 35.6, 'do': 35.74, 'harm': 35.89} },
    { id: 'found', s: 36.53, e: 38.46, w: {'scientists': 36.53, 'even': 37.41, 'found': 37.76, 'ice': 38.2} },
    { id: 'spleen', s: 38.54, e: 40.32, w: {'in': 38.54, 'their': 38.68, 'spleens': 39.02, 'all': 39.5, 'year': 39.71, 'round': 39.98} },
    { id: 'wild', s: 40.74, e: 42.02, w: {'and': 40.74, 'the': 40.96, 'wildest': 41.19, 'part': 41.72} },
    { id: 'gene', s: 42.58, e: 45.28, w: {'the': 42.58, 'antifreeze': 42.82, 'gene': 43.64, 'evolved': 43.97, 'from': 44.55, 'a': 44.87, 'gene2': 44.96} },
    { id: 'enzyme', s: 45.28, e: 46.84, w: {'for': 45.28, 'a': 45.53, 'digestive': 45.61, 'enzyme': 46.35} },
    { id: 'recycle', s: 47.31, e: 50.72, w: {'evolution': 47.31, 'recycled': 48.08, 'a': 48.76, 'gut': 48.85, 'gene': 49.1, 'into': 49.45, 'a2': 49.79, 'winter': 49.87, 'coat': 50.38} },
    { id: 'ask', s: 51.14, e: 54.08, w: {'so': 51.14, 'would': 51.3, 'you': 51.69, 'trade': 51.93, 'your': 52.33, 'blood': 52.65, 'for': 53.04, 'antifreeze': 53.28} },
    { id: 'ask2', s: 54.14, e: 56.63, w: {'and': 54.14, 'swim': 54.41, 'in': 54.78, 'minus': 54.97, '19': 55.43, 'degree': 55.61, 'water': 56.17} },
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

  // ---------- colour: polar set, five hues + one dark neutral, five tones each (names are ours) ----------
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const toHex = (c) => '#' + c.map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hex(a), Bc = hex(b); return toHex(A.map((v, i) => lerp(v, Bc[i], t))); };
  const rgba = (h, a) => { const c = hex(h); return `rgba(${c[0]},${c[1]},${c[2]},${a})`; };
  const CREAM = '#fbf6ec', INK = '#0f1b2e';
  const PAL = {
    deep:  { t: ['#0c2340', '#123058', '#1a4272', '#2f5d92', '#5a83b4'], fg: CREAM },
    floe:  { t: ['#6fb3d6', '#86c2e0', '#a0d1e8', '#bcdfef', '#d9eef7'], fg: INK },
    krill: { t: ['#b0322b', '#c84236', '#dc5a48', '#e77a66', '#efa08d'], fg: CREAM },
    kelp:  { t: ['#0a4f55', '#0f636a', '#167b82', '#36969b', '#68b3b5'], fg: CREAM },
    sun:   { t: ['#cf8f06', '#e1a312', '#efb829', '#f4c955', '#f8da88'], fg: '#22190a' },
    night: { t: ['#0a0f18', '#111826', '#192235', '#25304a', '#384463'], fg: CREAM, accent: '#9fd3ec' },
  };
  for (const k in PAL) PAL[k].far = mix(PAL[k].fg, PAL[k].t[2], 0.42);
  const ICE = '#e6f5fc', ICE2 = '#a9d8ee';

  // ---------- primitives (round caps, flat fills) ----------
  const disc = (ctx, x, y, r, col) => { if (r <= 0) return; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); };
  const seg = (ctx, a, b, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); };
  const poly = (ctx, pts, col) => { ctx.fillStyle = col; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); };
  const arcS = (ctx, x, y, r, a0, a1, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, r, a0, a1); ctx.stroke(); };
  const rrect = (ctx, x, y, w, h, r, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill(); };

  // ---------- pictograms ----------
  // fish facing right. (x,y) = body centre, s = body half-length. kind 'gold' | 'ice' (long flat snout, big head). wag = tail phase
  function fish(ctx, x, y, s, col, col2, wag = 0, kind = 'gold') {
    const tw = Math.sin(wag) * 0.12 * s;
    poly(ctx, [[x - 0.72 * s, y], [x - 1.25 * s, y - 0.5 * s + tw], [x - 1.1 * s, y + tw * 0.4], [x - 1.25 * s, y + 0.5 * s + tw]], col);
    if (kind === 'ice') {
      ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(x - 0.05 * s, y, 0.85 * s, 0.32 * s, 0, 0, Math.PI * 2); ctx.fill();
      poly(ctx, [[x + 0.45 * s, y - 0.26 * s], [x + 1.25 * s, y - 0.06 * s], [x + 1.22 * s, y + 0.1 * s], [x + 0.45 * s, y + 0.26 * s]], col); // flat duck-bill snout
      seg(ctx, [x - 0.35 * s, y - 0.34 * s], [x + 0.15 * s, y - 0.58 * s], 0.14 * s, col2); // tall dorsal fin
      seg(ctx, [x + 0.15 * s, y - 0.58 * s], [x + 0.3 * s, y - 0.32 * s], 0.14 * s, col2);
      disc(ctx, x + 0.62 * s, y - 0.1 * s, 0.09 * s, col2);
    } else {
      ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(x, y, 0.82 * s, 0.5 * s, 0, 0, Math.PI * 2); ctx.fill();
      poly(ctx, [[x - 0.3 * s, y - 0.42 * s], [x + 0.15 * s, y - 0.48 * s], [x - 0.15 * s, y - 0.78 * s]], col);
      disc(ctx, x + 0.45 * s, y - 0.12 * s, 0.1 * s, col2);
      seg(ctx, [x + 0.05 * s, y + 0.05 * s], [x - 0.15 * s, y + 0.28 * s], 0.1 * s, col2);
    }
  }
  // snowflake / ice crystal: six arms with side branches. g = growth 0..1
  function crystal(ctx, x, y, R, g, col, w, rot = 0) {
    if (g <= 0) return;
    for (let i = 0; i < 6; i++) { const a = rot + i * Math.PI / 3, c = Math.cos(a), s = Math.sin(a), L = R * g;
      seg(ctx, [x, y], [x + c * L, y + s * L], w, col);
      for (const f of [0.45, 0.75]) { if (g < f * 0.9) continue; const bx = x + c * L * f, by = y + s * L * f, bl = R * 0.28 * (1 - f * 0.5) * g;
        for (const sd of [-1, 1]) { const b = a + sd * Math.PI / 3; seg(ctx, [bx, by], [bx + Math.cos(b) * bl, by + Math.sin(b) * bl], w * 0.8, col); } } }
    disc(ctx, x, y, w * 0.9, col);
  }
  // antifreeze protein: a little capsule with a sugar "Y" (pictogram, not a model)
  function protein(ctx, x, y, s, ang, col, col2) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    seg(ctx, [0, -s * 0.5], [0, s * 0.5], s * 0.34, col);
    seg(ctx, [0, -s * 0.5], [-s * 0.35, -s * 0.85], s * 0.16, col2); seg(ctx, [0, -s * 0.5], [s * 0.35, -s * 0.85], s * 0.16, col2);
    disc(ctx, -s * 0.35, -s * 0.85, s * 0.14, col2); disc(ctx, s * 0.35, -s * 0.85, s * 0.14, col2);
    ctx.restore();
  }
  function bloodDrop(ctx, x, y, r, col) {
    ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, y - r * 2.4);
    ctx.quadraticCurveTo(x + r * 0.95, y - r * 0.9, x + r, y); ctx.arc(x, y, r, 0, Math.PI); ctx.quadraticCurveTo(x - r * 0.95, y - r * 0.9, x, y - r * 2.4); ctx.fill();
  }
  // thermometer: tube + bulb; lvl 0..1 fill
  function thermo(ctx, x, y, h, w, lvl, col, fill) {
    rrect(ctx, x - w / 2, y - h, w, h, w / 2, col); disc(ctx, x, y + w * 0.4, w * 0.95, col);
    disc(ctx, x, y + w * 0.4, w * 0.62, fill); const fh = (h - w * 0.5) * clamp(lvl);
    rrect(ctx, x - w * 0.22, y - fh, w * 0.44, fh + w * 0.4, w * 0.22, fill);
  }
  function iceberg(ctx, x, y, s, col, col2) {
    poly(ctx, [[x - s, y], [x - 0.55 * s, y - 0.6 * s], [x - 0.25 * s, y - 0.45 * s], [x + 0.1 * s, y - 1.0 * s], [x + 0.5 * s, y - 0.5 * s], [x + s, y]], col);
    poly(ctx, [[x + 0.1 * s, y - 1.0 * s], [x + 0.5 * s, y - 0.5 * s], [x + s, y], [x + 0.25 * s, y]], col2);
  }
  function waves(ctx, x0, x1, y, amp, ph, w, col) {
    ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath();
    for (let x = x0; x <= x1; x += 8) { const yy = y + Math.sin(x * 0.025 + ph) * amp; x === x0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy); } ctx.stroke();
  }
  function spleen(ctx, x, y, s, col) { // bean shape: capsule with a notch
    ctx.save(); ctx.translate(x, y); ctx.rotate(-0.35);
    ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(0, 0, s, s * 0.55, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  }
  function dna(ctx, x, y, h, wd, ph, c1, c2, p = 1) {
    const n = 14;
    for (let i = 0; i < n; i++) { const f = i / (n - 1); if (f > p) break; const yy = y - h / 2 + f * h, a = ph + f * Math.PI * 2.2, dx = Math.sin(a) * wd;
      seg(ctx, [x - dx, yy], [x + dx, yy], 14, i % 2 ? c2 : c1); disc(ctx, x - dx, yy, 18, c1); disc(ctx, x + dx, yy, 18, c2); }
  }
  function gut(ctx, x, y, s, col, w) { // a stomach: thick J-curve
    ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath();
    ctx.moveTo(x - 0.35 * s, y - 0.9 * s); ctx.lineTo(x - 0.25 * s, y - 0.35 * s);
    ctx.bezierCurveTo(x - 0.9 * s, y + 0.2 * s, x - 0.2 * s, y + 0.95 * s, x + 0.35 * s, y + 0.55 * s);
    ctx.bezierCurveTo(x + 0.75 * s, y + 0.25 * s, x + 0.6 * s, y - 0.25 * s, x + 0.15 * s, y - 0.3 * s); ctx.stroke();
  }
  function coat(ctx, x, y, s, col, col2) { // a winter coat sign
    poly(ctx, [[x - 0.35 * s, y - 0.8 * s], [x + 0.35 * s, y - 0.8 * s], [x + 0.6 * s, y + 0.8 * s], [x - 0.6 * s, y + 0.8 * s]], col);
    seg(ctx, [x - 0.4 * s, y - 0.7 * s], [x - 0.9 * s, y + 0.5 * s], 0.28 * s, col); seg(ctx, [x + 0.4 * s, y - 0.7 * s], [x + 0.9 * s, y + 0.5 * s], 0.28 * s, col);
    seg(ctx, [x, y - 0.65 * s], [x, y + 0.75 * s], 0.06 * s, col2);
    for (let i = 0; i < 3; i++) disc(ctx, x + 0.14 * s, y - 0.35 * s + i * 0.4 * s, 0.06 * s, col2);
    ctx.fillStyle = col2; ctx.beginPath(); ctx.arc(x, y - 0.8 * s, 0.32 * s, Math.PI, 0); ctx.fill();
  }
  function recycleArrows(ctx, x, y, R, ang, col, w) {
    for (let i = 0; i < 3; i++) { const a0 = ang + i * Math.PI * 2 / 3, a1 = a0 + Math.PI * 2 / 3 - 0.45;
      arcS(ctx, x, y, R, a0, a1, w, col); const hx = x + Math.cos(a1) * R, hy = y + Math.sin(a1) * R, ta = a1 + Math.PI / 2;
      poly(ctx, [[hx + Math.cos(ta) * w * 1.3, hy + Math.sin(ta) * w * 1.3], [hx + Math.cos(ta + 2.2) * w * 1.1, hy + Math.sin(ta + 2.2) * w * 1.1], [hx + Math.cos(ta - 2.2) * w * 1.1, hy + Math.sin(ta - 2.2) * w * 1.1]], col); }
  }

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
      case 3: { const k = s / 4; for (let row = 0; row < 5; row++) for (let i = -1; i < 5; i++) { const cx = i * k + (row % 2 ? k / 2 : 0), cy = row * k * 0.5 + k * 0.5; disc(ctx, cx, cy, k * 0.5, row % 2 ? b : cc); disc(ctx, cx, cy, k * 0.3, a); } break; }
      case 4: for (let i = 5; i >= 1; i--) disc(ctx, 0, s, (s * i) / 5, i % 2 ? b : a); break;
      case 5: disc(ctx, s / 2, s / 2, s * 0.46, b); disc(ctx, s * 0.66, s * 0.38, s * 0.4, a); break;
      case 6: disc(ctx, 0, s / 2, s / 2, b); disc(ctx, s, s / 2, s / 2, cc); break;
      case 7: { for (let i = 0; i < 4; i++) { ctx.strokeStyle = i % 2 ? b : cc; ctx.lineWidth = s * 0.06; ctx.lineCap = 'round'; ctx.beginPath(); for (let xx = 0; xx <= s; xx += 6) { const yy = s * (0.2 + i * 0.2) + Math.sin(xx * 0.06) * s * 0.05; xx ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); } break; } // waves
      // this film's own motifs (upright)
      case 12: crystal(ctx, s / 2, s / 2, s * 0.36, 1, b, s * 0.05); break;
      case 13: fish(ctx, s * 0.55, s / 2, s * 0.28, b, a, 0, 'ice'); break;
      case 14: { for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) rrect(ctx, s * (0.16 + i * 0.26), s * (0.16 + j * 0.26), s * 0.16, s * 0.16, s * 0.03, (i + j) % 2 ? b : cc); break; } // salt cubes
      case 15: bloodDrop(ctx, s / 2, s * 0.64, s * 0.2, b); break;
    }
    ctx.restore();
  }
  const LIB = [0, 1, 2, 3, 4, 5, 6, 7, 12, 12, 13, 14, 15];
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
    { id: 'hook',    t0: 0,                   pk: 'deep',  seed: 3,  full: true },
    { id: 'sea',     t0: B.sea.s - 0.15,      pk: 'floe',  seed: 11, tr: 'rows' },
    { id: 'blood',   t0: B.blood.s - 0.15,    pk: 'krill', seed: 5,  tr: 'quarter' },
    { id: 'pop',     t0: B.pop.s - 0.15,      pk: 'sun',   seed: 21, tr: 'cols', full: true },
    { id: 'trick',   t0: B.trick.s - 0.15,    pk: 'night', seed: 8,  tr: 'rows' },
    { id: 'afp',     t0: B.afp.s - 0.15,      pk: 'kelp',  seed: 31, tr: 'quarter' },
    { id: 'crystal', t0: B.crystal.s - 0.15,  pk: 'deep',  seed: 17, tr: 'cols' },
    { id: 'stop',    t0: B.stop.s - 0.15,     pk: 'floe',  seed: 44, tr: 'rows' },
    { id: 'spleen',  t0: B.found.s - 0.15,    pk: 'krill', seed: 9,  tr: 'quarter' },
    { id: 'gene',    t0: B.wild.s - 0.15,     pk: 'night', seed: 13, tr: 'cols', full: true },
    { id: 'recycle', t0: B.recycle.s - 0.15,  pk: 'kelp',  seed: 27, tr: 'rows' },
    { id: 'ask',     t0: B.ask.s - 0.15,      pk: 'deep',  seed: 61, tr: 'quarter' },
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
  function stageClip(ctx, r = SR, x = SX, y = SY) { ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.clip(); }
  function hud(ctx, idx, lt, P) {
    const fg = P.fg, dk = fg === CREAM ? '#fbf6ec' : INK, dim = rgba(dk, 0.55);
    typeText(ctx, 'ZORBLY · POLAR NOTES', 80, 250, F.mono(28), dim, inv(0.05, 0.5, lt));
    typeText(ctx, String(idx + 1).padStart(2, '0') + ' / ' + N, 1000, 250, F.mono(28), fg, inv(0.05, 0.3, lt), 'right');
    const x0 = 80, wd = 920, gap = 10, tw = (wd - gap * (N - 1)) / N;
    for (let i = 0; i < N; i++) { const cur = i === idx; ctx.fillStyle = cur ? fg : rgba(dk, i < idx ? 0.5 : 0.18); ctx.fillRect(x0 + i * (tw + gap), cur ? 284 : 290, tw, cur ? 14 : 6); }
  }
  const minusNum = (v, d = 1) => '−' + v.toFixed(d) + '°C';

  const S = {};
  // 01 hook: a goldfish freezes in -1.9 C water
  S.hook = (ctx, t, lt, sc, i) => {
    const P = PAL.deep; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const fz = oExp(inv(T('hook', 'freeze') - 0.1, T('hook', 'solid') + 0.2, t));
    stageClip(ctx); waves(ctx, SX - 420, SX + 420, SY - 260, 14, t * 2, 16, rgba(CREAM, 0.5)); ctx.restore();
    const wob = (1 - fz) * Math.sin(t * 6) * 10;
    fish(ctx, SX + wob, SY + 20, 210, PAL.sun.t[2], P.t[0], t * 8 * (1 - fz));
    if (fz > 0) { // ice block closes around it in bands
      for (let k = 0; k < 5; k++) { const kk = oExp(inv(T('hook', 'freeze') - 0.1 + k * 0.06, T('hook', 'solid') + k * 0.06, t)); if (kk <= 0) continue;
        ctx.save(); ctx.beginPath(); ctx.rect(SX - 330, SY - 200 + k * 88, 660 * kk, 88); ctx.clip(); rrect(ctx, SX - 330, SY - 200, 660, 440, 40, rgba(ICE, 0.72)); ctx.restore(); }
      ctx.globalAlpha = fz; seg(ctx, [SX - 270, SY - 150], [SX - 120, SY - 150], 18, CREAM); seg(ctx, [SX - 270, SY - 110], [SX - 200, SY - 110], 18, CREAM); ctx.globalAlpha = 1;
      crystal(ctx, SX + 250, SY - 150, 46, fz, CREAM, 9);
    }
    const n = 1.9 * oExp(inv(T('hook', 'goldfish'), T('hook', '19') + 0.1, t));
    maskText(ctx, minusNum(n), 80, 610, F.en(900, 270), CREAM, inv(T('hook', 'goldfish') - 0.1, T('hook', 'goldfish') + 0.4, t), { ls: '-8px' });
    if (t < T('how', 'so') - 0.1) maskText(ctx, 'FREEZES A GOLDFISH SOLID', 88, 700, F.en(800, 60), P.t[4], inv(T('hook', 'freeze') - 0.1, T('hook', 'freeze') + 0.35, t), { ls: '-1px' });
    else maskText(ctx, 'SO HOW DOES THIS FISH LIVE?', 88, 700, F.en(800, 60), PAL.sun.t[2], inv(T('how', 'so') - 0.1, T('how', 'so') + 0.3, t), { ls: '-1px' });
    // the Antarctic fish swims in at "this fish"
    const sw = oExp(inv(T('how', 'this') - 0.4, T('how', 'survive'), t));
    if (sw > 0) fish(ctx, lerp(W + 300, SX + 10, sw), SY + 330, 120, CREAM, P.t[0], t * 9, 'ice');
  };
  // 02 sea stays liquid: salt lowers its freezing point
  S.sea = (ctx, t, lt, sc, i) => {
    const P = PAL.floe; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    stageClip(ctx);
    ctx.fillStyle = PAL.deep.t[3]; ctx.fillRect(SX - SR, SY - 60, 2 * SR, SR + 60);
    for (let k = 0; k < 3; k++) waves(ctx, SX - SR, SX + SR, SY - 60 + k * 70, 10, t * 2 + k, 14, rgba(CREAM, 0.45 - k * 0.1));
    ctx.restore();
    const ib = oExp(inv(T('sea', 'antarctica') - 0.3, T('sea', 'antarctica') + 0.2, t));
    if (ib > 0) iceberg(ctx, SX - 120, SY - 60 + (1 - ib) * 300, 230, ICE, ICE2);
    fish(ctx, SX + 140 + Math.sin(t) * 20, SY + 160, 90, CREAM, PAL.deep.t[3], t * 9, 'ice');
    // salt cubes fall into the water
    const sT = T('salt', 'salt');
    for (let k = 0; k < 9; k++) { const at = sT - 0.25 + k * 0.09; if (t < at) continue; const p = clamp((t - at) * 1.6);
      const x = SX - 300 + k * 75 + (k % 2) * 20, y = lerp(SY - 360, SY + 40 + (k % 3) * 70, p); ctx.globalAlpha = 1 - clamp((t - at - 1.4) * 2);
      rrect(ctx, x - 16, y - 16, 32, 32, 6, CREAM); ctx.globalAlpha = 1; }
    if (t < B.salt.s - 0.2) textBlock(ctx, t, T('sea', 'sea') - 0.1, { title: 'STILL LIQUID', sub: 'THE SEA AROUND ANTARCTICA', fg: P.fg, sfg: PAL.deep.t[2], px: 210, tag: '−1.9°C', tbg: P.fg, tfg: CREAM, tagAt: T('sea', 'liquid') });
    else textBlock(ctx, t, T('salt', 'because') - 0.05, { title: 'SALT', sub: 'LOWERS THE FREEZING POINT', fg: P.fg, sfg: PAL.deep.t[2], px: 280, tag: 'SEAWATER', tbg: P.fg, tfg: CREAM, tagAt: T('salt', 'freezing') });
  };
  // 03 normal fish blood freezes at about -0.7 C: thermometer with two marks
  S.blood = (ctx, t, lt, sc, i) => {
    const P = PAL.krill; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const tx = SX - 150, ty = SY + 220, th = 560;
    const lvl = lerp(0.9, 0.2, io3(inv(T('blood', 'freezes'), T('blood', '07') + 0.4, t)));
    thermo(ctx, tx, ty, th, 70, lvl, CREAM, P.t[0]);
    const y07 = ty - (th - 35) * 0.55, y19 = ty - (th - 35) * 0.22;
    const m1 = oExp(inv(T('blood', '07') - 0.3, T('blood', '07'), t));
    if (m1 > 0) { seg(ctx, [tx + 60, y07], [tx + 60 + 90 * m1, y07], 14, CREAM); typeText(ctx, '−0.7° BLOOD', tx + 170, y07 + 12, F.mono(40), P.t[0], m1); bloodDrop(ctx, tx + 380, y07 - 70, 26, P.t[0]); }
    const m2 = oExp(inv(T('blood', 'blood') - 0.2, T('blood', 'blood') + 0.3, t));
    if (m2 > 0) { seg(ctx, [tx + 60, y19], [tx + 60 + 90 * m2, y19], 14, PAL.deep.t[2]); typeText(ctx, '−1.9° SEA', tx + 170, y19 + 12, F.mono(40), PAL.deep.t[1], m2); }
    const n = 0.7 * oExp(inv(T('blood', 'about') - 0.4, T('blood', '07') + 0.05, t));
    maskText(ctx, minusNum(n), 80, 600, F.en(900, 270), CREAM, inv(T('blood', 'normal') - 0.1, T('blood', 'normal') + 0.35, t), { ls: '-8px' });
    maskText(ctx, 'NORMAL FISH BLOOD FREEZES', 88, 690, F.en(800, 58), P.t[4], inv(T('blood', 'blood') - 0.1, T('blood', 'blood') + 0.35, t), { ls: '-1px' });
  };
  // 04 fishsicle: a fish frozen on a stick
  S.pop = (ctx, t, lt, sc, i) => {
    const P = PAL.sun; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const fT = T('pop', 'fishsicle'), k = oBack(inv(fT - 0.35, fT + 0.1, t));
    const bob = Math.sin(t * 2.4) * 10;
    rrect(ctx, SX - 34, SY + 120 + bob, 68, 300 * Math.max(0.01, k), 34, mix(P.t[0], '#8a5a10', 0.4));
    fish(ctx, SX + 10, SY - 30 + bob, 190, PAL.krill.t[2], P.t[0], 0);
    if (k > 0) { ctx.save(); ctx.translate(SX, SY - 30 + bob); ctx.scale(k, k); rrect(ctx, -280, -200, 560, 360, 120, rgba(ICE, 0.7));
      seg(ctx, [-210, -140], [-90, -140], 18, CREAM); ctx.restore(); }
    for (let d = 0; d < 3; d++) { const p = ((t - fT) * 0.8 + d / 3) % 1; if (t < fT) break; bloodDrop(ctx, SX - 150 + d * 150, SY + 170 + p * 180 + bob, 12, rgba(ICE2, 1 - p)); }
    textBlock(ctx, t, T('pop', 'regular') - 0.1, { title: 'FISHSICLE', sub: 'WHAT A REGULAR FISH WOULD BECOME', fg: P.fg, sfg: P.t[0], px: 230, tag: 'FROZEN', tbg: P.fg, tfg: P.t[3], tagAt: T('pop', 'fishsicle') });
  };
  // 05 the trick hides in the blood
  S.trick = (ctx, t, lt, sc, i) => {
    const P = PAL.night; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const dT = T('trick', 'blood'), k = oBack(inv(T('trick', 'hiding') - 0.3, dT + 0.1, t));
    if (k > 0) { ctx.save(); ctx.translate(SX, SY + 150); ctx.scale(k, k); bloodDrop(ctx, 0, 0, 200, PAL.krill.t[2]);
      fish(ctx, 0, -40, 110, CREAM, PAL.krill.t[2], t * 7, 'ice'); ctx.restore(); }
    const q = oExp(inv(T('trick', 'trick') - 0.2, T('trick', 'trick') + 0.3, t));
    if (q > 0) for (let s = 0; s < 4; s++) { const a = -Math.PI / 2 + (s - 1.5) * 0.5; seg(ctx, [SX + Math.cos(a) * 330, SY - 120 + Math.sin(a) * 120 * q], [SX + Math.cos(a) * (330 + 60 * q), SY - 120 + Math.sin(a) * 170 * q], 18, P.accent); }
    textBlock(ctx, t, T('trick', 'the') - 0.1, { title: 'THE TRICK', sub: 'IS HIDING IN ITS BLOOD', fg: CREAM, sfg: P.accent, px: 240, tag: 'BLOOD', tbg: PAL.krill.t[2], tfg: CREAM, tagAt: dT });
  };
  // 06 icefish make antifreeze proteins
  S.afp = (ctx, t, lt, sc, i) => {
    const P = PAL.kelp; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[3]);
    const fi = oExp(inv(T('afp', 'icefish') - 0.35, T('afp', 'icefish') + 0.15, t));
    fish(ctx, lerp(-400, SX + 30, fi), SY - 110, 230, CREAM, P.t[0], t * 6, 'ice');
    const c = oExp(inv(T('afp', 'cousins') - 0.3, T('afp', 'cousins') + 0.2, t));
    if (c > 0) { fish(ctx, lerp(W + 300, SX + 230, c), SY + 120, 90, P.far, P.t[1], t * 8, 'ice'); fish(ctx, lerp(W + 300, SX - 170, c), SY + 190, 80, P.far, P.t[1], t * 8 + 1, 'ice'); }
    const pT = T('afp', 'antifreeze');
    for (let k = 0; k < 9; k++) { const at = pT - 0.2 + k * 0.08, a = oBack(inv(at, at + 0.3, t)); if (a <= 0) continue;
      const x = SX - 300 + (k % 5) * 150 + (k > 4 ? 75 : 0), y = SY + (k > 4 ? 330 : 260) + Math.sin(t * 2 + k) * 10;
      protein(ctx, x, y, 70 * a, Math.sin(t + k) * 0.4, PAL.sun.t[2], CREAM); }
    textBlock(ctx, t, pT - 0.15, { title: 'ANTIFREEZE', sub: 'PROTEINS MADE BY ICEFISH', fg: CREAM, sfg: P.t[4], px: 230, tag: 'ICEFISH', tbg: P.t[3], tfg: CREAM, tagAt: T('afp', 'icefish') - 0.1 });
    maskText(ctx, 'ICEFISH', 80, 560, F.en(900, 230), CREAM, inv(T('afp', 'icefish') - 0.15, T('afp', 'icefish') + 0.3, t) * (t < pT - 0.15 ? 1 : 0), { ls: '-4px' });
  };
  // 07 a tiny ice crystal sneaks in; proteins grab its surface
  S.crystal = (ctx, t, lt, sc, i) => {
    const P = PAL.deep; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[3]);
    const g = 0.25 + 0.65 * oExp(inv(T('crystal', 'crystal') - 0.2, T('grab', 'grab'), t));
    const rot = t * 0.15;
    crystal(ctx, SX, SY, 260, g, ICE, 26, rot);
    const gk = T('grab', 'proteins');
    for (let k = 0; k < 6; k++) { const at = gk - 0.1 + k * 0.1, a = io3(inv(at, at + 0.55, t)); if (a <= 0) continue;
      const ang = rot + k * Math.PI / 3, R1 = 380, R0 = 260 * g + 50, R = lerp(R1, R0, a);
      protein(ctx, SX + Math.cos(ang) * R, SY + Math.sin(ang) * R, 64, ang + Math.PI / 2 + Math.PI, PAL.sun.t[2], CREAM); }
    if (t < B.grab.s - 0.15) textBlock(ctx, t, T('crystal', 'tiny') - 0.1, { title: 'ICE CRYSTAL', sub: 'A TINY ONE SNEAKS INSIDE', fg: CREAM, sfg: P.t[4], px: 220, tag: 'TINY', tbg: P.t[3], tfg: CREAM, tagAt: T('crystal', 'tiny') });
    else textBlock(ctx, t, T('grab', 'proteins') - 0.15, { title: 'GRAB', sub: 'PROTEINS STICK TO ITS SURFACE', fg: CREAM, sfg: P.t[4], px: 300, tag: 'BIND', tbg: PAL.sun.t[2], tfg: PAL.sun.fg, tagAt: T('grab', 'grab') });
  };
  // 08 growth stops: too small to harm
  S.stop = (ctx, t, lt, sc, i) => {
    const P = PAL.floe; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const g = 0.9 - 0.05 * oExp(inv(T('stop', 'stop'), T('stop', 'growing'), t));
    crystal(ctx, SX, SY - 40, 200, g, PAL.deep.t[3], 22, 0.3);
    for (let k = 0; k < 6; k++) { const ang = 0.3 + k * Math.PI / 3, R = 200 * g + 50; protein(ctx, SX + Math.cos(ang) * R, SY - 40 + Math.sin(ang) * R, 58, ang + Math.PI * 1.5, PAL.krill.t[2], P.fg); }
    // size bar: what it could grow to vs where it stays
    const sk = oExp(inv(T('small', 'small') - 0.3, T('small', 'small') + 0.2, t));
    if (sk > 0) { const bx = SX - 300, by = SY + 300; rrect(ctx, bx, by, 600, 40, 20, rgba(P.fg, 0.18)); rrect(ctx, bx, by, 600 * 0.12 * sk + 40, 40, 20, P.fg);
      typeText(ctx, 'STAYS TINY', bx, by + 100, F.mono(36), P.fg, sk); typeText(ctx, 'HARMLESS', bx + 600, by + 100, F.mono(36), PAL.deep.t[2], inv(T('small', 'harm') - 0.2, T('small', 'harm') + 0.2, t), 'right'); }
    if (t < B.small.s - 0.15) textBlock(ctx, t, T('stop', 'stop') - 0.15, { title: 'STOP', sub: 'NO MORE GROWING', fg: P.fg, sfg: PAL.deep.t[2], px: 300, tag: 'BLOCKED', tbg: PAL.krill.t[2], tfg: CREAM, tagAt: T('stop', 'growing') });
    else textBlock(ctx, t, T('small', 'too') - 0.15, { title: 'TOO SMALL', sub: 'TO DO ANY HARM', fg: P.fg, sfg: PAL.deep.t[2], px: 250 });
  };
  // 09 ice found in their spleens, all year round
  S.spleen = (ctx, t, lt, sc, i) => {
    const P = PAL.krill; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const sk = oBack(inv(T('spleen', 'spleens') - 0.3, T('spleen', 'spleens') + 0.1, t));
    fish(ctx, SX + 20, SY - 60, 300, rgba(CREAM, 0.35), P.t[1], t * 4, 'ice');
    if (sk > 0) { ctx.save(); ctx.translate(SX - 20, SY - 40); ctx.scale(sk, sk); spleen(ctx, 0, 0, 120, P.t[0]); ctx.restore(); }
    const iT = T('found', 'ice');
    for (let k = 0; k < 5; k++) { const a = oExp(inv(iT - 0.15 + k * 0.07, iT + 0.2 + k * 0.07, t)); crystal(ctx, SX - 80 + (k % 3) * 70, SY - 70 + Math.floor(k / 3) * 60, 22, a, ICE, 6, k); }
    // twelve month ticks: all year round
    const yT = T('spleen', 'year');
    for (let m = 0; m < 12; m++) { const a = oExp(inv(yT - 0.3 + m * 0.04, yT + m * 0.04, t)); if (a <= 0) continue;
      const x = SX - 330 + m * 60; rrect(ctx, x, SY + 260 - 60 * a, 36, 60 * a, 10, CREAM); crystal(ctx, x + 18, SY + 320, 14, a, ICE, 4); }
    if (t < B.spleen.s - 0.1) textBlock(ctx, t, T('found', 'found') - 0.1, { title: 'ICE INSIDE', sub: 'SCIENTISTS FOUND IT IN THE FISH', fg: CREAM, sfg: P.t[4], px: 230 });
    else textBlock(ctx, t, T('spleen', 'spleens') - 0.15, { title: 'SPLEEN ICE', sub: 'THERE ALL YEAR ROUND', fg: CREAM, sfg: P.t[4], px: 230, tag: '12 / 12 MONTHS', tbg: CREAM, tfg: P.t[0], tagAt: T('spleen', 'year') });
  };
  // 10 the wildest part: the antifreeze gene came from a digestive-enzyme gene
  S.gene = (ctx, t, lt, sc, i) => {
    const P = PAL.night; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const dp = oExp(inv(T('gene', 'gene') - 0.4, T('gene', 'evolved') + 0.2, t));
    if (dp > 0) dna(ctx, SX + 150, SY - 20, 600, 90, t * 1.5, P.accent, PAL.sun.t[2], dp);
    const gk = oBack(inv(T('enzyme', 'digestive') - 0.3, T('enzyme', 'digestive') + 0.1, t));
    if (gk > 0) { ctx.save(); ctx.translate(SX - 190, SY + 40); ctx.scale(gk, gk); gut(ctx, 0, 0, 170, PAL.krill.t[3], 60); ctx.restore();
      ctx.save(); ctx.setLineDash([2, 26]); ctx.lineCap = 'round'; ctx.lineWidth = 14; ctx.strokeStyle = CREAM; ctx.beginPath(); ctx.moveTo(SX - 80, SY - 160); ctx.quadraticCurveTo(SX + 20, SY - 330, SX + 120, SY - 260); ctx.stroke(); ctx.restore(); }
    if (t < B.gene.s - 0.1) { const qk = oBack(inv(T('wild', 'wildest') - 0.2, T('wild', 'wildest') + 0.2, t)); if (qk > 0) { ctx.save(); ctx.font = F.en(900, Math.round(420 * qk)); ctx.textAlign = 'center'; ctx.fillStyle = P.accent; ctx.fillText('?', SX, SY + 150 * qk); ctx.restore(); }
      maskText(ctx, 'WILDEST', 80, 560, F.en(900, fitPx(ctx, 'WILDEST', 900, 250, 900, '-6px')), CREAM, inv(T('wild', 'wildest') - 0.15, T('wild', 'wildest') + 0.3, t), { ls: '-6px' });
      maskText(ctx, 'PART?', 84, 650, F.en(800, 70), P.accent, inv(T('wild', 'part') - 0.1, T('wild', 'part') + 0.3, t)); }
    else if (t < B.enzyme.s - 0.1) textBlock(ctx, t, T('gene', 'antifreeze') - 0.1, { title: 'THE GENE', sub: 'FOR ANTIFREEZE EVOLVED FROM…', fg: CREAM, sfg: P.accent, px: 250 });
    else textBlock(ctx, t, T('enzyme', 'for') - 0.1, { title: 'A GUT GENE', sub: 'FOR A DIGESTIVE ENZYME', fg: CREAM, sfg: P.accent, px: 240, tag: 'TRYPSINOGEN', tbg: PAL.krill.t[2], tfg: CREAM, tagAt: T('enzyme', 'enzyme') });
  };
  // 11 icon wall: evolution recycled a gut gene into a winter coat
  S.recycle = (ctx, t, lt, sc, i) => {
    const P = PAL.kelp; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[3]);
    const rk = oExp(inv(T('recycle', 'recycled') - 0.2, T('recycle', 'recycled') + 0.3, t));
    if (rk > 0) recycleArrows(ctx, SX, SY, 300 * rk, t * 1.2, P.t[4], 34);
    const sw = io3(inv(T('recycle', 'into') - 0.2, T('recycle', 'coat'), t));
    ctx.globalAlpha = 1 - sw; if (sw < 1) gut(ctx, SX, SY, 120 * (1 - sw * 0.5), PAL.krill.t[3], 46); ctx.globalAlpha = 1;
    if (sw > 0) { ctx.save(); ctx.translate(SX, SY); ctx.scale(sw, sw); coat(ctx, 0, 0, 150, ICE, P.t[0]); ctx.restore();
      for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3 + t * 0.4; crystal(ctx, SX + Math.cos(a) * 230 * sw, SY + Math.sin(a) * 230 * sw, 26, sw, CREAM, 7, a); } }
    textBlock(ctx, t, T('recycle', 'evolution') - 0.1, { title: 'RECYCLED', sub: 'A GUT GENE BECAME A WINTER COAT', fg: CREAM, sfg: P.t[4], px: 250, tag: 'EVOLUTION', tbg: P.t[3], tfg: CREAM, tagAt: T('recycle', 'evolution') + 0.1 });
  };
  // 12 split screen: would you trade?
  S.ask = (ctx, t, lt, sc, i) => {
    const P = PAL.deep; base(ctx, sc, lt, i);
    const sp = oExp(inv(T('ask', 'antifreeze') - 0.2, T('ask', 'antifreeze') + 0.3, t)), sb = oExp(inv(T('ask2', 'swim') - 0.2, T('ask2', 'swim') + 0.3, t));
    const midY = 1260;
    ctx.fillStyle = PAL.kelp.t[1]; ctx.fillRect(0, BAND1, W * sp, midY - BAND1);
    ctx.fillStyle = PAL.floe.t[2]; ctx.fillRect(W * (1 - sb), midY, W * sb, 1620 - midY);
    if (sp > 0.02) { bloodDrop(ctx, 260, 1080, 70, PAL.krill.t[2]); crystal(ctx, 260, 1020, 30, sp, CREAM, 8); maskText(ctx, 'ANTIFREEZE', 400, 1040, F.en(900, 100), CREAM, sp, { ls: '-3px' }); typeText(ctx, 'TRADE YOUR BLOOD?', 406, 1110, F.mono(30), PAL.sun.t[2], sp); }
    if (sb > 0.02) { fish(ctx, 260, 1440, 110, CREAM, PAL.floe.t[0], t * 8, 'ice'); maskText(ctx, '−1.9°C', 400, 1480, F.en(900, 110), PAL.floe.fg, sb, { ls: '-3px' }); typeText(ctx, 'SWIM IN IT?', 406, 1550, F.mono(30), PAL.deep.t[1], sb); }
    textBlock(ctx, t, T('ask', 'would') - 0.15, { title: 'WOULD YOU?', sub: 'TELL US IN THE COMMENTS', fg: CREAM, sfg: P.t[4], px: 240 });
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

  // ---------- sound: percussion spine, an accent on every cut, clicks for type ----------
  function scoreSound(k) {
    SC.forEach((sc, idx) => { if (idx === 0) return;
      k.play('whoosh', sc.t0 - 0.25, { dur: 0.35, gain: 0.45, top: 2600 });
      k.play('thud', sc.t0 + 0.05, { f: 110, gain: 0.55 });
      k.play('tock', sc.t0 + 0.05, { f: 520, gain: 0.35, minor: true }); });
    for (let tb = 0.2; tb < DURATION - 0.6; tb += 0.6) k.play('tock', tb, { f: (Math.round(tb / 0.6) % 4 === 0) ? 180 : 260, gain: 0.12, minor: true });
    // hook: freeze crackle, count to -1.9
    k.play('thud', 0.25, { f: 90, gain: 0.7 });
    k.noise(T('hook', 'freeze') - 0.1, { dur: 0.7, color: 'white', filter: 'highpass', f: 3000, gain: 0.18, a: 0.05, verb: 0.2 });
    k.play('impact', T('hook', 'solid'), { gain: 0.6 });
    for (let f = Math.ceil((T('hook', 'minus') - 0.3) * 14); f < T('hook', '19') * 14; f++) k.play('count', f / 14, { gain: 0.45, minor: true });
    k.play('ding', T('hook', '19'), { f: 'E5', gain: 0.3 });
    k.play('pop', T('how', 'how') - 0.1, { f: 640, gain: 0.7 }); k.play('swish', T('how', 'this') - 0.3, { gain: 0.45, pan: 0.5 });
    // sea + salt
    k.play('swish', T('sea', 'antarctica') - 0.2, { gain: 0.4 });
    for (let r = 0; r < 9; r++) k.play('click', T('salt', 'salt') - 0.25 + r * 0.09 + 0.5, { gain: 0.3, minor: true });
    // blood thermometer
    k.play('riser', T('blood', 'freezes'), { dur: 1.8, gain: 0.3 }); k.play('impact', T('blood', '07'), { gain: 0.7 }); k.play('ding', T('blood', '07'), { f: 'A4', gain: 0.3 });
    // fishsicle
    k.play('stamp', T('pop', 'fishsicle'), { gain: 0.5 }); k.play('pop', T('pop', 'fishsicle') + 0.05, { f: 900, gain: 0.5 });
    // trick
    k.play('ding', T('trick', 'trick'), { f: 'C6', gain: 0.3 }); k.play('thud', T('trick', 'blood'), { f: 80, gain: 0.5 });
    // proteins appear
    for (let r = 0; r < 9; r++) k.play('blip', T('afp', 'antifreeze') - 0.2 + r * 0.08, { f: 500 + r * 70, gain: 0.25, minor: true });
    k.play('swish', T('afp', 'icefish') - 0.35, { gain: 0.5, pan: -0.4 });
    // crystal grows, proteins grab
    k.noise(T('crystal', 'crystal') - 0.2, { dur: 1.6, color: 'white', filter: 'bandpass', f: [[0, 2000], [1.6, 5000]], q: 2, gain: 0.12, a: 0.2, verb: 0.3 });
    for (let r = 0; r < 6; r++) k.play('tock', T('grab', 'proteins') + 0.45 + r * 0.1, { f: 600 + r * 50, gain: 0.35, minor: true });
    k.play('impact', T('grab', 'grab'), { gain: 0.5 });
    // stop
    k.play('error', T('stop', 'stop'), { f: 'A3', gain: 0.35 }); k.play('success', T('small', 'harm'), { f: 'C6', gain: 0.3 });
    // spleen + months
    k.play('pop', T('spleen', 'spleens'), { f: 500, gain: 0.5 });
    for (let m = 0; m < 12; m++) k.play('tock', T('spleen', 'year') - 0.3 + m * 0.04, { f: 400 + m * 25, gain: 0.25, minor: true });
    // gene
    k.play('thud', T('wild', 'wildest'), { f: 70, gain: 0.6 }); k.play('riser', T('gene', 'gene') - 0.4, { dur: 0.8, gain: 0.3 });
    k.play('impact', T('enzyme', 'digestive'), { gain: 0.7 }); ['C5', 'E5', 'G5'].forEach((n, j) => k.play('ding', T('enzyme', 'enzyme') + j * 0.03, { f: n, gain: 0.25 }));
    // recycle
    k.play('swish', T('recycle', 'recycled') - 0.2, { gain: 0.5 }); k.play('success', T('recycle', 'coat'), { f: 'E6', gain: 0.35 });
    // ask
    k.play('thud', T('ask', 'antifreeze'), { f: 100, gain: 0.5 }); k.play('thud', T('ask2', 'swim'), { f: 130, gain: 0.5 });
    k.play('ding', T('ask2', 'water') + 0.2, { f: 'C6', gain: 0.3 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
