// ================= Pictogram Motion (Lemo-Opuscar, MIT style guide), vertical 1080x1920: "Why do geese fly in a V?" =================
// Unattended run: no storyboard step. Drawing technique ported from the Pictogram Motion engine; all figures, story and layout are ours.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'hook', s: 0.25, e: 3.41, w: { birds: 0.25, in: 0.67, a: 0.83, v: 0.92, can: 1.0, cut: 1.25, their: 1.5, heart: 1.91, rate: 2.33, '14': 2.66, percent: 2.83 } },
    { id: 'why', s: 3.93, e: 5.29, w: { and: 3.93, youve: 4.13, never: 4.47, seen: 4.81, why: 5.08 } },
    { id: 'geese', s: 5.7, e: 8.18, w: { its: 5.7, the: 5.94, secret: 6.18, behind: 6.66, every: 7.14, v: 7.54, of: 7.62, geese: 7.78 } },
    { id: 'flap', s: 8.54, e: 10.84, w: { each: 8.54, flap: 8.81, pushes: 9.08, air: 9.49, down: 9.69, behind: 9.96, the: 10.37, wing: 10.57 } },
    { id: 'curl', s: 11.25, e: 14.31, w: { but: 11.25, at: 11.52, the: 11.7, wingtip: 11.97, air: 12.6, curls: 12.87, up: 13.32, and: 13.5, around: 13.77 } },
    { id: 'swirl', s: 14.38, e: 15.22, w: { into: 14.38, a: 14.57, spinning: 14.62, swirl: 14.99 } },
    { id: 'rise', s: 15.69, e: 18.37, w: { just: 15.69, outside: 16.01, that: 16.56, swirl: 16.87, the: 17.27, air: 17.5, is: 17.74, rising: 17.89 } },
    { id: 'slide', s: 18.8, e: 21.71, w: { so: 18.8, the: 18.95, bird: 19.18, behind: 19.48, slides: 19.94, into: 20.4, that: 20.71, exact: 21.02, spot: 21.4 } },
    { id: 'lift', s: 22.22, e: 24.21, w: { and: 22.22, gets: 22.45, free: 22.75, lift: 23.06, on: 23.37, every: 23.52, flap: 23.9 } },
    { id: 'line', s: 24.57, e: 26.05, w: { line: 24.57, everyone: 24.84, up: 25.38, like: 25.51, that: 25.78 } },
    { id: 'vee', s: 26.41, e: 27.34, w: { and: 26.41, you: 26.66, get: 26.92, a: 27.17, v: 27.26 } },
    { id: 'pel', s: 27.74, e: 29.55, w: { pelicans: 27.74, tracked: 28.3, in: 28.79, formation: 28.93 } },
    { id: 'pel2', s: 29.9, e: 34.07, w: { had: 29.9, heart: 30.18, rates: 30.64, up: 31.1, to: 31.29, '14': 31.47, percent: 31.66, lower: 32.31, than: 32.77, flying: 33.14, solo: 33.7 } },
    { id: 'ibis', s: 34.49, e: 37.71, w: { ibises: 34.49, even: 34.94, time: 35.24, their: 35.54, flaps: 35.91, to: 36.29, match: 36.44, the: 36.81, bird: 37.04, ahead: 37.33 } },
    { id: 'front', s: 38.07, e: 40.36, w: { but: 38.07, the: 38.31, front: 38.55, bird: 38.94, gets: 39.26, no: 39.57, free: 39.73, ride: 40.04 } },
    { id: 'turns', s: 40.75, e: 41.83, w: { so: 40.75, ibises: 40.88, take: 41.26, turns: 41.51 } },
    { id: 'swap', s: 41.93, e: 44.94, w: { swapping: 41.93, the: 42.71, tiring: 43.0, spot: 43.58, at: 43.97, the2: 44.17, front: 44.46 } },
    { id: 'team', s: 45.31, e: 47.9, w: { honestly: 45.31, thats: 45.87, teamwork: 46.22, with: 46.78, zero: 47.06, meetings: 47.34 } },
    { id: 'ask', s: 48.34, e: 50.16, w: { so: 48.34, which: 48.47, bird: 48.81, would: 49.08, you: 49.41, rather: 49.62, be: 50.02 } },
    { id: 'ask2', s: 50.45, e: 52.86, w: { the: 50.45, leader: 50.65, at: 51.05, the2: 51.18, front: 51.38, or: 51.72, the3: 51.85, one: 52.05, in: 52.26, the4: 52.39, back: 52.59 } },
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
  const EO = (t, a, d = 0.45) => oExp(inv(a, a + d, t));
  const rng = (seed) => { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let q = Math.imul(a ^ (a >>> 15), 1 | a); q = (q + Math.imul(q ^ (q >>> 7), 61 | q)) ^ q; return ((q ^ (q >>> 14)) >>> 0) / 4294967296; }; };

  // ---------- colour: five hues + one dark neutral, five tones each (names are ours) ----------
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const toHex = (c) => '#' + c.map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hex(a), Bc = hex(b); return toHex(A.map((v, i) => lerp(v, Bc[i], t))); };
  const rgba = (h, a) => { const c = hex(h); return `rgba(${c[0]},${c[1]},${c[2]},${a})`; };
  const CREAM = '#fbf6ec', INK = '#121620';
  const PAL = {
    dusk:  { t: ['#17234a', '#1f2f60', '#2b3f7a', '#435a95', '#6a80b2'], fg: CREAM },
    marsh: { t: ['#0d4c47', '#125f58', '#1a766c', '#3a9085', '#6aaea3'], fg: CREAM },
    cloud: { t: ['#5e98c0', '#74a9cd', '#8dbad8', '#a9cce3', '#c8e0ee'], fg: '#0e1e33' },
    beak:  { t: ['#a8401c', '#c24f24', '#d9662f', '#e5834f', '#eda277'], fg: CREAM },
    wheat: { t: ['#c98d0a', '#dba015', '#ebb52a', '#f1c553', '#f6d685'], fg: '#22190a' },
    night: { t: ['#0b0f17', '#121824', '#1a2131', '#262f43', '#384259'], fg: CREAM, accent: '#ebb52a' },
  };
  for (const k in PAL) PAL[k].far = mix(PAL[k].fg, PAL[k].t[2], 0.42);

  // ---------- primitives (round caps, flat fills) ----------
  const disc = (ctx, x, y, r, col) => { if (r <= 0) return; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); };
  const seg = (ctx, a, b, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); };
  const poly = (ctx, pts, col) => { ctx.fillStyle = col; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); };
  const arcS = (ctx, x, y, r, a0, a1, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, r, a0, a1); ctx.stroke(); };
  const rrect = (ctx, x, y, w, h, r, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill(); };

  // ---------- pictograms ----------
  // goose from above, heading up. s = body unit. span 0..1 (wing stroke), col body, col2 wings
  function gooseTop(ctx, x, y, s, span, col, col2) {
    const sp = 0.55 + 0.45 * span;
    seg(ctx, [x - 0.08 * s, y - 0.05 * s], [x - (0.14 + 0.92 * sp) * s, y + (0.12 - 0.1 * sp) * s], 0.2 * s, col2);
    seg(ctx, [x + 0.08 * s, y - 0.05 * s], [x + (0.14 + 0.92 * sp) * s, y + (0.12 - 0.1 * sp) * s], 0.2 * s, col2);
    poly(ctx, [[x - 0.13 * s, y + 0.42 * s], [x + 0.13 * s, y + 0.42 * s], [x, y + 0.62 * s]], col);
    seg(ctx, [x, y - 0.25 * s], [x, y + 0.42 * s], 0.34 * s, col);
    seg(ctx, [x, y - 0.3 * s], [x, y - 0.72 * s], 0.12 * s, col);
    disc(ctx, x, y - 0.78 * s, 0.11 * s, col);
  }
  // bird from the side, facing right. kind: 'goose' | 'pelican' | 'ibis'. wing: -1 (down) .. 1 (up)
  function birdSide(ctx, x, y, s, wing, col, col2, kind = 'goose', far = null) {
    const wa = -wing * 0.9; // radians, 0 = level back
    const sh = [x - 0.02 * s, y - 0.1 * s];
    const tipOf = (a, L) => [sh[0] - Math.cos(a) * L * 0.35 * s, sh[1] - Math.sin(-a) * 0 + Math.sin(a) * L * s];
    // far wing (behind body)
    const fa = wa * 0.85;
    seg(ctx, sh, [sh[0] - 0.25 * s, sh[1] + Math.sin(fa) * 0.75 * s - 0.05 * s], 0.2 * s, far || col2);
    // tail
    poly(ctx, [[x - 0.4 * s, y - 0.12 * s], [x - 0.4 * s, y + 0.12 * s], [x - 0.68 * s, y + 0.02 * s]], col);
    // body + neck + head
    seg(ctx, [x - 0.42 * s, y], [x + 0.3 * s, y], 0.38 * s, col);
    const nk = kind === 'pelican' ? [x + 0.5 * s, y - 0.18 * s] : [x + 0.72 * s, y - 0.2 * s];
    seg(ctx, [x + 0.25 * s, y - 0.04 * s], nk, kind === 'pelican' ? 0.2 * s : 0.12 * s, col);
    disc(ctx, nk[0] + 0.04 * s, nk[1] - 0.02 * s, (kind === 'pelican' ? 0.14 : 0.11) * s, col);
    if (kind === 'goose') seg(ctx, [nk[0] + 0.12 * s, nk[1] - 0.01 * s], [nk[0] + 0.24 * s, nk[1] + 0.01 * s], 0.07 * s, col2);
    if (kind === 'pelican') { seg(ctx, [nk[0] + 0.14 * s, nk[1] - 0.03 * s], [nk[0] + 0.72 * s, nk[1] + 0.04 * s], 0.07 * s, col2);
      poly(ctx, [[nk[0] + 0.14 * s, nk[1] + 0.02 * s], [nk[0] + 0.66 * s, nk[1] + 0.08 * s], [nk[0] + 0.3 * s, nk[1] + 0.2 * s]], col2); }
    if (kind === 'ibis') arcS(ctx, nk[0] + 0.12 * s, nk[1] + 0.32 * s, 0.34 * s, -Math.PI / 2, -0.25, 0.06 * s, col2);
    // near wing (front of body)
    const L = 0.95 * s;
    seg(ctx, sh, [sh[0] - 0.28 * s, sh[1] + Math.sin(wa) * L], 0.24 * s, col2);
  }
  function heart(ctx, x, y, s, col) {
    disc(ctx, x - 0.27 * s, y - 0.12 * s, 0.32 * s, col); disc(ctx, x + 0.27 * s, y - 0.12 * s, 0.32 * s, col);
    poly(ctx, [[x - 0.57 * s, y - 0.02 * s], [x + 0.57 * s, y - 0.02 * s], [x, y + 0.62 * s]], col);
  }
  function chevrons(ctx, x, y, s, col, n = 2, dir = -1) { // dir -1 = up
    ctx.lineJoin = 'round';
    for (let i = 0; i < n; i++) { const yy = y + dir * i * s * 0.55; ctx.strokeStyle = col; ctx.lineWidth = s * 0.16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x - s * 0.4, yy - dir * s * 0.25); ctx.lineTo(x, yy + dir * s * 0.12); ctx.lineTo(x + s * 0.4, yy - dir * s * 0.25); ctx.stroke(); }
  }
  // spinning swirl: nested arcs, ang = rotation
  function swirl(ctx, x, y, R, ang, cols, w) {
    for (let i = 0; i < 5; i++) { const r = R * (1 - i * 0.18); arcS(ctx, x, y, r, ang + i * 0.9, ang + i * 0.9 + Math.PI * 1.25, w, cols[i % cols.length]); }
    disc(ctx, x, y, R * 0.12, cols[0]);
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
      case 7: { const k = s / 6; disc(ctx, s / 2, s / 2, s / 2, b); ctx.save(); ctx.beginPath(); ctx.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2); ctx.clip(); for (let j = 0; j < 7; j++) for (let i = 0; i < 7; i++) disc(ctx, i * k + (j % 2 ? k / 2 : 0), j * k, k * 0.36, cc); ctx.restore(); break; }
      case 8: for (let i = 0; i < 4; i++) arcS(ctx, 0, s, s * (0.3 + i * 0.22), -Math.PI / 2, 0, s * 0.07, i % 2 ? b : cc); break; // wind arcs
      // this film's own motifs (upright)
      case 12: { // feather-scale chevrons: a little flock
        for (let i = 0; i < 3; i++) { const yy = s * (0.3 + i * 0.22); ctx.strokeStyle = i % 2 ? b : cc; ctx.lineWidth = s * 0.07; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(s * 0.2, yy + s * 0.14); ctx.lineTo(s * 0.5, yy); ctx.lineTo(s * 0.8, yy + s * 0.14); ctx.stroke(); } break; }
      case 13: gooseTop(ctx, s / 2, s * 0.55, s * 0.36, 0.7, b, cc); break;
      case 14: swirl(ctx, s / 2, s / 2, s * 0.38, rot, [b, cc], s * 0.06); break;
      case 15: chevrons(ctx, s / 2, s * 0.62, s * 0.5, b, 2); break;
    }
    ctx.restore();
  }
  const LIB = [0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 12, 13, 14, 15];
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
  function fitPx(ctx, text, w, px, weight = 900) { ctx.save(); ctx.font = F.en(weight, px); ctx.letterSpacing = '-4px'; const m = ctx.measureText(text).width; ctx.restore(); return m > w ? Math.floor(px * w / m) : px; }
  function typeText(ctx, text, x, y, font, col, p, align = 'left') { const n = Math.floor(text.length * clamp(p) + 0.001); ctx.save(); ctx.font = font; ctx.letterSpacing = '4px'; ctx.fillStyle = col; ctx.textAlign = align; ctx.fillText(text.slice(0, n), x, y); ctx.restore(); }
  function chip(ctx, text, x, y, bg, fg, p) {
    if (p <= 0) return; ctx.save(); ctx.font = F.mono(34); ctx.letterSpacing = '4px'; const w = ctx.measureText(text).width + 44;
    ctx.beginPath(); ctx.rect(x - 4, y - 40, (w + 8) * oExp(p), 64); ctx.clip(); rrect(ctx, x, y - 36, w, 56, 28, bg); ctx.fillStyle = fg; ctx.fillText(text, x + 22, y + 2); ctx.restore();
  }
  // title block in the band: title, a heavy second line ~0.08 s later, a mono tag after
  function textBlock(ctx, t, t0, o) {
    const x = 80, px = fitPx(ctx, o.title, 920, o.px || 200);
    maskText(ctx, o.title, x, o.y || 560, F.en(900, px), o.fg, inv(t0, t0 + 0.45, t), { ls: '-4px' });
    if (o.sub) maskText(ctx, o.sub, x + 4, (o.y || 560) + 86, F.en(800, o.spx || 58), o.sfg || o.fg, inv(t0 + 0.08, t0 + 0.55, t), { ls: '-1px' });
    if (o.tag) chip(ctx, o.tag, x + 4, (o.y || 560) + 166 - (o.sub ? 0 : 80), o.tbg, o.tfg, inv((o.tagAt ?? t0 + 0.25), (o.tagAt ?? t0 + 0.25) + 0.4, t));
  }

  // ---------- scenes ----------
  const SC = [
    { id: 'hook',  t0: 0,       pk: 'beak',  seed: 3,  full: true },
    { id: 'geese', t0: B.geese.s - 0.15, pk: 'dusk', seed: 11, tr: 'rows' },
    { id: 'flap',  t0: B.flap.s - 0.15,  pk: 'cloud', seed: 5, tr: 'quarter' },
    { id: 'swirl', t0: B.curl.s - 0.15,  pk: 'marsh', seed: 21, tr: 'cols' },
    { id: 'rise',  t0: B.rise.s - 0.15,  pk: 'wheat', seed: 8, tr: 'rows' },
    { id: 'slide', t0: B.slide.s - 0.15, pk: 'dusk', seed: 31, tr: 'quarter' },
    { id: 'line',  t0: B.line.s - 0.15,  pk: 'beak', seed: 17, tr: 'cols' },
    { id: 'pel',   t0: B.pel.s - 0.15,   pk: 'wheat', seed: 44, tr: 'rows', full: true },
    { id: 'ibis',  t0: B.ibis.s - 0.15,  pk: 'cloud', seed: 9, tr: 'quarter' },
    { id: 'front', t0: B.front.s - 0.15, pk: 'night', seed: 13, tr: 'cols' },
    { id: 'turns', t0: B.turns.s - 0.15, pk: 'marsh', seed: 27, tr: 'rows' },
    { id: 'team',  t0: B.team.s - 0.15,  pk: 'dusk', seed: 51, tr: 'quarter', full: true },
    { id: 'ask',   t0: B.ask.s - 0.15,   pk: 'beak', seed: 61, tr: 'cols' },
  ];
  const N = SC.length;

  const BAND0 = 180, BAND1 = 760, SX = 540, SY = 1210, SR = 400;
  function base(ctx, sc, lt, idx) {
    const P = PAL[sc.pk];
    ctx.fillStyle = P.t[2]; ctx.fillRect(0, 0, W, HH);
    const beatJump = sc.full ? Math.floor(lt / 0.6) * CELL * 0.25 : 0;
    drawPattern(ctx, pattern(sc.pk, sc.seed, sc.full ? 1 : 0.42), (j) => drift(lt)(j) + (j % 2 ? beatJump : -beatJump));
    // the type band: solid darkest/lightest tone over rows 1-3
    ctx.fillStyle = P.fg === CREAM ? P.t[0] : P.t[4]; ctx.fillRect(0, BAND0, W, BAND1 - BAND0);
    hud(ctx, idx, lt, P);
  }
  function stage(ctx, sc, lt, col, r = SR, x = SX, y = SY) {
    const k = oExp(inv(0, 0.5, lt));
    // stage arrives as horizontal bands sliding into register from alternating sides
    const n = 6; for (let i = 0; i < n; i++) { const y0 = y - r + (2 * r * i) / n, off = (1 - k) * (i % 2 ? 1 : -1) * 700;
      ctx.save(); ctx.beginPath(); ctx.rect(0, y0, W, 2 * r / n + 1); ctx.clip(); disc(ctx, x + off, y, r, col); ctx.restore(); }
    // one soft light sweep
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.clip();
    const sx = lerp(x - r * 1.6, x + r * 1.6, ((lt * 0.18) % 1)); const g = ctx.createLinearGradient(sx - 160, 0, sx + 160, 0);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,0.10)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, 2 * r, 2 * r); ctx.restore();
  }
  function hud(ctx, idx, lt, P) {
    const fg = P.fg, dim = rgba(fg === CREAM ? '#fbf6ec' : '#0e1e33', 0.55);
    typeText(ctx, 'ZORBLY · FLIGHT NOTES', 80, 250, F.mono(28), dim, inv(0.05, 0.5, lt));
    typeText(ctx, String(idx + 1).padStart(2, '0') + ' / ' + N, 1000, 250, F.mono(28), fg, inv(0.05, 0.3, lt), 'right');
    const x0 = 80, wd = 920, gap = 10, tw = (wd - gap * (N - 1)) / N;
    for (let i = 0; i < N; i++) { const cur = i === idx; ctx.fillStyle = cur ? fg : rgba(fg === CREAM ? '#fbf6ec' : '#0e1e33', i < idx ? 0.5 : 0.18); ctx.fillRect(x0 + i * (tw + gap), cur ? 284 : 290, tw, cur ? 14 : 6); }
  }

  const S = {};
  // 01 hook: the -14% heart
  S.hook = (ctx, t, lt, sc, i) => {
    const P = PAL.beak; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const beat = T('hook', 'heart'), pulse = 1 + 0.06 * Math.max(0, Math.sin((t - beat) * Math.PI * 2.2)) * (t > beat ? 1 : 0);
    const hk = oBack(inv(beat - 0.25, beat + 0.15, t));
    if (hk > 0) heart(ctx, SX, SY - 60, 330 * hk * pulse, CREAM);
    // a tiny V riding across the disc
    for (let k = 0; k < 5; k++) { const o = k === 0 ? 0 : Math.ceil(k / 2) * (k % 2 ? -1 : 1);
      const bx = SX + o * 70 + (lt * 40 % 1) * 0, by = SY + 250 + Math.abs(o) * 52 - oExp(inv(0.2, 1.0, t)) * 60;
      if (t > 0.2 + k * 0.08) gooseTop(ctx, bx, by, 34, 0.5 + 0.5 * Math.sin(t * 9 + k), P.t[0], P.t[0]); }
    const n = Math.round(14 * oExp(inv(T('hook', 'birds'), T('hook', '14'), t)));
    const nt = '−' + n + '%';
    maskText(ctx, nt, 80, 610, F.en(900, 300), CREAM, inv(T('hook', 'birds'), T('hook', 'birds') + 0.4, t), { ls: '-8px' });
    maskText(ctx, 'HEART RATE', 88, 700, F.en(800, 64), P.t[4], inv(T('hook', 'heart') - 0.1, T('hook', 'heart') + 0.35, t), { ls: '-1px' });
    chip(ctx, 'WHY?', 640, 700, CREAM, P.t[0], inv(T('why', 'why') - 0.15, T('why', 'why') + 0.25, t));
  };
  // 02 every V of geese
  S.geese = (ctx, t, lt, sc, i) => {
    const P = PAL.dusk; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[3]);
    const vT = T('geese', 'v');
    for (let k = 0; k < 9; k++) { const side = k === 0 ? 0 : (k % 2 ? -1 : 1), rank = Math.ceil(k / 2);
      const ap = oExp(inv(vT - 0.6 + rank * 0.12, vT + rank * 0.12, t)); if (ap <= 0) continue;
      const bx = SX + side * rank * 95, by = SY - 230 + rank * 92 + (1 - ap) * 900 + Math.sin(t * 2 + k) * 6;
      gooseTop(ctx, bx, by, 66, 0.5 + 0.5 * Math.sin(t * 7 + k * 0.7), CREAM, P.far); }
    textBlock(ctx, t, vT - 0.2, { title: 'THE V', sub: 'BEHIND EVERY FLOCK OF GEESE', fg: CREAM, sfg: P.t[4], px: 260, tag: 'SECRET', tbg: P.t[3], tfg: CREAM, tagAt: T('geese', 'secret') });
  };
  // 03 each flap pushes air down
  S.flap = (ctx, t, lt, sc, i) => {
    const P = PAL.cloud; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const ph = Math.sin(t * 5.2);
    birdSide(ctx, SX - 20, SY - 120, 300, ph, P.fg, mix(P.fg, P.t[2], 0.2), 'goose', P.far);
    const dT = T('flap', 'down');
    for (let k = 0; k < 7; k++) { const p = ((t - dT) * 1.1 + k / 7) % 1; if (t < dT - 0.15) break;
      const x = SX - 230 + k * 55, y0 = SY + 40 + p * 300; ctx.globalAlpha = clamp(1 - p) * clamp((t - dT + 0.15) * 5);
      seg(ctx, [x, y0], [x, y0 + 80], 18, P.t[0]); poly(ctx, [[x - 22, y0 + 80], [x + 22, y0 + 80], [x, y0 + 112]], P.t[0]); ctx.globalAlpha = 1; }
    textBlock(ctx, t, T('flap', 'pushes') - 0.1, { title: 'AIR DOWN', sub: 'EVERY FLAP PUSHES', fg: P.fg, sfg: P.t[0], px: 240, tag: 'LIFT', tbg: P.t[0], tfg: CREAM, tagAt: T('flap', 'wing') });
  };
  // 04 the wingtip swirl
  S.swirl = (ctx, t, lt, sc, i) => {
    const P = PAL.marsh; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[3]);
    // a wing seen from behind, tip at the right
    const tipX = SX + 150, tipY = SY - 40;
    seg(ctx, [SX - 330, SY - 10], [tipX, tipY], 52, CREAM); disc(ctx, SX - 330, SY - 10, 70, CREAM);
    const cT = T('curl', 'curls'), k = oExp(inv(cT - 0.2, T('swirl', 'swirl'), t));
    if (k > 0) { ctx.save(); ctx.translate(tipX + 40, tipY + 40); ctx.scale(k, k); swirl(ctx, 0, 0, 190, -t * 5, [CREAM, P.t[4], P.t[0]], 22); ctx.restore(); }
    textBlock(ctx, t, T('swirl', 'swirl') - 0.25, { title: 'SWIRL', sub: 'AIR CURLS OFF THE WINGTIP', fg: CREAM, sfg: P.t[4], px: 260, tag: 'VORTEX', tbg: P.t[3], tfg: CREAM });
    maskText(ctx, 'WINGTIP', 80, 560, F.en(900, 200), CREAM, inv(T('curl', 'wingtip') - 0.1, T('curl', 'wingtip') + 0.3, t) * (t < T('swirl', 'swirl') - 0.25 ? 1 : 0), { ls: '-4px' });
  };
  // 05 rising air just outside
  S.rise = (ctx, t, lt, sc, i) => {
    const P = PAL.wheat; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    swirl(ctx, SX - 150, SY + 40, 170, -t * 5, [P.fg, P.t[0]], 20);
    // down inside, up outside
    const rT = T('rise', 'rising');
    for (let k = 0; k < 3; k++) { const p = ((t * 0.9 + k / 3) % 1); const a = clamp((t - rT + 0.4) * 3);
      ctx.globalAlpha = a * Math.sin(p * Math.PI); chevrons(ctx, SX + 170, SY + 220 - p * 420, 110, P.t[0], 1); ctx.globalAlpha = 1; }
    const k2 = oExp(inv(T('rise', 'outside') - 0.2, T('rise', 'outside') + 0.3, t));
    if (k2 > 0) { ctx.save(); ctx.setLineDash([2, 26]); ctx.lineCap = 'round'; ctx.lineWidth = 14; ctx.strokeStyle = P.fg; ctx.beginPath(); ctx.arc(SX + 170, SY + 10, 150 * k2, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
    textBlock(ctx, t, T('rise', 'just') - 0.1, { title: 'RISING AIR', sub: 'JUST OUTSIDE THE SWIRL', fg: P.fg, sfg: P.t[0], px: 220, tag: 'UPWASH', tbg: P.t[0], tfg: CREAM });
  };
  // 06 the bird behind slides in: free lift
  S.slide = (ctx, t, lt, sc, i) => {
    const P = PAL.dusk; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[3]);
    const lead = [SX - 110, SY - 170];
    // the leader's upwash zone, off its right wingtip
    const zx = lead[0] + 200, zy = lead[1] + 230;
    const zk = oExp(inv(T('slide', 'spot') - 0.3, T('slide', 'spot') + 0.1, t));
    if (zk > 0) { disc(ctx, zx, zy, 120 * zk, rgba(PAL.wheat.t[2], 0.85)); chevrons(ctx, zx, zy + 40, 90, P.t[0], 2); }
    gooseTop(ctx, lead[0], lead[1], 110, 0.5 + 0.5 * Math.sin(t * 6), CREAM, P.far);
    const sl = io3(inv(T('slide', 'slides') - 0.1, T('slide', 'spot'), t));
    const lift = oBack(inv(T('lift', 'free') - 0.15, T('lift', 'lift') + 0.2, t));
    const fx = lerp(SX + 300, zx + 10, sl), fy = lerp(SY + 380, zy + 70, sl) - lift * 40;
    gooseTop(ctx, fx, fy, 110, 0.5 + 0.5 * Math.sin(t * 6 + 1.2) * (1 - lift * 0.6), PAL.wheat.t[2], PAL.wheat.t[0]);
    const showLift = t >= T('lift', 'free') - 0.2;
    if (!showLift) textBlock(ctx, t, T('slide', 'slides') - 0.15, { title: 'SLIDE IN', sub: 'THE BIRD BEHIND FINDS THE SPOT', fg: CREAM, sfg: P.t[4], px: 240 });
    else textBlock(ctx, t, T('lift', 'free') - 0.15, { title: 'FREE LIFT', sub: 'ON EVERY SINGLE FLAP', fg: CREAM, sfg: P.t[4], px: 240, tag: 'FOLLOWER', tbg: PAL.wheat.t[2], tfg: PAL.wheat.fg, tagAt: T('lift', 'flap') });
  };
  // 07 line everyone up: a V
  S.line = (ctx, t, lt, sc, i) => {
    const P = PAL.beak; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4], 430);
    const lT = T('line', 'line'), vT = T('vee', 'v');
    for (let k = 0; k < 11; k++) { const side = k === 0 ? 0 : (k % 2 ? 1 : -1), rank = Math.ceil(k / 2);
      const at = side >= 0 ? lT + rank * 0.28 : vT - 0.45 + rank * 0.07; const ap = oExp(inv(at - 0.25, at + 0.1, t)); if (ap <= 0) continue;
      const bx = SX + side * rank * 78 + (1 - ap) * side * 400, by = SY - 260 + rank * 92;
      gooseTop(ctx, bx, by, 54, 0.5 + 0.5 * Math.sin(t * 7 + k), side < 0 ? P.t[0] : CREAM, side < 0 ? P.t[0] : P.far); }
    if (t < vT - 0.2) textBlock(ctx, t, lT - 0.1, { title: 'LINE UP', sub: 'EACH ONE IN THE NEXT ONE’S SPOT', fg: CREAM, sfg: P.t[4], px: 250 });
    else textBlock(ctx, t, vT - 0.2, { title: '= A V', sub: 'MIRROR IT ON BOTH SIDES', fg: CREAM, sfg: P.t[4], px: 280 });
  };
  // 08 count-up slam: pelicans, heart rate up to 14% lower
  S.pel = (ctx, t, lt, sc, i) => {
    const P = PAL.wheat; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    birdSide(ctx, SX - 70, SY - 170, 190, Math.sin(t * 3.4), P.fg, P.t[0], 'pelican', P.far);
    const hT = T('pel2', 'heart'), nT = T('pel2', '14');
    const hk = oBack(inv(hT - 0.2, hT + 0.2, t)), beat = 1 + 0.05 * Math.max(0, Math.sin(t * Math.PI * 2 * 1.1));
    if (hk > 0) heart(ctx, SX - 10, SY + 170, 170 * hk * beat, P.t[0]);
    // the bar: SOLO 100 vs V 86
    const bk = oExp(inv(T('pel2', 'lower') - 0.1, T('pel2', 'lower') + 0.5, t)), sk = oExp(inv(T('pel2', 'solo') - 0.2, T('pel2', 'solo') + 0.3, t));
    if (sk > 0) { rrect(ctx, SX + 160, SY + 60, 54, 280 * sk, 27, P.t[0]); typeText(ctx, 'SOLO', SX + 187, SY + 400, F.mono(30), P.fg, sk, 'center'); }
    if (bk > 0) { rrect(ctx, SX + 240, SY + 60 + 280 * 0.14, 54, 280 * 0.86 * bk, 27, CREAM); typeText(ctx, 'IN V', SX + 267, SY + 400, F.mono(30), P.fg, bk, 'center'); }
    const n = Math.round(14 * oExp(inv(T('pel', 'pelicans'), nT, t)));
    maskText(ctx, '−' + n + '%', 80, 590, F.en(900, 290), P.fg, inv(T('pel', 'pelicans') - 0.1, T('pel', 'pelicans') + 0.35, t), { ls: '-8px' });
    maskText(ctx, 'PELICAN HEART RATE', 88, 680, F.en(800, 58), P.t[0], inv(T('pel', 'tracked'), T('pel', 'tracked') + 0.4, t), { ls: '-1px' });
    chip(ctx, 'UP TO · IN FORMATION', 88, 744, P.t[0], CREAM, inv(T('pel', 'formation'), T('pel', 'formation') + 0.4, t));
  };
  // 09 ibises flap in sync
  S.ibis = (ctx, t, lt, sc, i) => {
    const P = PAL.cloud; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const sT = T('ibis', 'match'), lagA = 0.55 * (1 - oExp(inv(sT - 0.3, sT + 0.3, t)));
    birdSide(ctx, SX + 90, SY - 180, 170, Math.sin(t * 5), P.fg, P.t[0], 'ibis', P.far);
    birdSide(ctx, SX - 150, SY + 90, 170, Math.sin(t * 5 - 2.2 - lagA * 0), P.fg, P.t[0], 'ibis', P.far);
    // timing ticks: two rows of beats that line up
    const k = oExp(inv(T('ibis', 'time') - 0.1, T('ibis', 'time') + 0.4, t));
    for (let j = 0; j < 6; j++) { const x = SX - 250 + j * 100; ctx.globalAlpha = k; rrect(ctx, x, SY + 300, 16, 50, 8, P.t[0]); rrect(ctx, x + lagA * 100, SY + 370, 16, 50, 8, P.fg); ctx.globalAlpha = 1; }
    textBlock(ctx, t, T('ibis', 'ibises') - 0.1, { title: 'IN SYNC', sub: 'FLAPS TIMED TO THE BIRD AHEAD', fg: P.fg, sfg: P.t[0], px: 250, tag: 'IBISES', tbg: P.t[0], tfg: CREAM });
  };
  // 10 the front bird: no free ride
  S.front = (ctx, t, lt, sc, i) => {
    const P = PAL.night; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    for (let k = 0; k < 6; k++) { const p = (t * 1.4 + k / 6) % 1, x = SX - 260 + k * 104, y = SY - 380 + p * 520;
      ctx.globalAlpha = Math.sin(p * Math.PI) * 0.9; seg(ctx, [x, y], [x, y + 90], 14, P.t[1]); ctx.globalAlpha = 1; }
    gooseTop(ctx, SX, SY - 40, 150, 0.5 + 0.5 * Math.sin(t * 9), P.accent, mix(P.accent, '#000000', 0.25));
    for (let k = 1; k < 5; k++) { const side = k % 2 ? -1 : 1, rank = Math.ceil(k / 2); gooseTop(ctx, SX + side * rank * 170, SY + 140 + rank * 120, 62, 0.5 + 0.5 * Math.sin(t * 6 + k), P.t[2], P.t[2]); }
    textBlock(ctx, t, T('front', 'no') - 0.2, { title: 'NO FREE RIDE', sub: 'THE LEADER DOES THE HARD WORK', fg: CREAM, sfg: P.accent, px: 200, tag: 'LEADER', tbg: P.accent, tfg: '#22190a', tagAt: T('front', 'front') });
  };
  // 11 taking turns
  S.turns = (ctx, t, lt, sc, i) => {
    const P = PAL.marsh; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[3]);
    const sw = io3(inv(T('swap', 'swapping') - 0.1, T('swap', 'front') + 0.1, t));
    const A = [SX, SY - 220], Bp = [SX + 160, SY + 0];
    // the gold leader drops back, a cream follower moves up: they trade places along a loop
    const ax = lerp(A[0], Bp[0], sw) + Math.sin(sw * Math.PI) * 170, ay = lerp(A[1], Bp[1], sw);
    const bx = lerp(Bp[0], A[0], sw) - Math.sin(sw * Math.PI) * 170, by = lerp(Bp[1], A[1], sw);
    gooseTop(ctx, SX - 160, SY + 0, 90, 0.5 + 0.5 * Math.sin(t * 6 + 2), P.far, P.far);
    gooseTop(ctx, SX - 320, SY + 220, 90, 0.5 + 0.5 * Math.sin(t * 6 + 3), P.far, P.far);
    gooseTop(ctx, SX + 320, SY + 220, 90, 0.5 + 0.5 * Math.sin(t * 6 + 4), P.far, P.far);
    gooseTop(ctx, ax, ay, 90, 0.5 + 0.5 * Math.sin(t * 6), PAL.wheat.t[2], PAL.wheat.t[0]);
    gooseTop(ctx, bx, by, 90, 0.5 + 0.5 * Math.sin(t * 6 + 1), CREAM, CREAM);
    if (sw > 0.05 && sw < 0.95) { ctx.save(); ctx.setLineDash([2, 24]); ctx.lineCap = 'round'; ctx.lineWidth = 12; ctx.strokeStyle = CREAM; ctx.beginPath(); ctx.ellipse(SX + 80, SY - 110, 190, 150, 0.6, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
    textBlock(ctx, t, T('turns', 'take') - 0.15, { title: 'TAKE TURNS', sub: 'SWAPPING THE TIRING FRONT SPOT', fg: CREAM, sfg: P.t[4], px: 230, tag: 'IBISES', tbg: P.t[3], tfg: CREAM, tagAt: T('turns', 'ibises') });
  };
  // 12 icon wall: everything returns as one colour
  S.team = (ctx, t, lt, sc, i) => {
    const P = PAL.dusk; base(ctx, sc, lt, i);
    const tw = T('team', 'teamwork'), one = oExp(inv(T('team', 'zero') - 0.2, T('team', 'meetings') + 0.1, t));
    const icons = ['goose', 'heart', 'swirl', 'chev', 'pel', 'goose', 'ibis', 'heart', 'swirl'];
    const pk = ['beak', 'cloud', 'marsh', 'wheat', 'wheat', 'dusk', 'cloud', 'beak', 'marsh'];
    for (let k = 0; k < 9; k++) { const cx = 120 + (k % 3) * 280, cy = 790 + Math.floor(k / 3) * 280, ap = oExp(inv(tw - 0.4 + k * 0.05, tw + k * 0.05, t)); if (ap <= 0) continue;
      const bg = mix(PAL[pk[k]].t[2], P.t[3], one), fg = mix(PAL[pk[k]].fg, CREAM, one);
      ctx.save(); ctx.beginPath(); ctx.rect(cx, cy + (1 - ap) * 280, 280, 280 * ap); ctx.clip();
      rrect(ctx, cx + 8, cy + 8, 264, 264, 0, bg); const mx = cx + 140, my = cy + 140;
      if (icons[k] === 'goose') gooseTop(ctx, mx, my + 20, 80, 0.5 + 0.5 * Math.sin(t * 6 + k), fg, fg);
      if (icons[k] === 'heart') heart(ctx, mx, my - 10, 150, fg);
      if (icons[k] === 'swirl') swirl(ctx, mx, my, 100, -t * 4, [fg], 14);
      if (icons[k] === 'chev') chevrons(ctx, mx, my + 50, 120, fg, 2);
      if (icons[k] === 'pel') birdSide(ctx, mx - 30, my, 80, Math.sin(t * 3), fg, fg, 'pelican', fg);
      if (icons[k] === 'ibis') birdSide(ctx, mx - 30, my, 90, Math.sin(t * 5), fg, fg, 'ibis', fg);
      ctx.restore(); }
    textBlock(ctx, t, tw - 0.2, { title: 'TEAMWORK', sub: 'WITH ZERO MEETINGS', fg: CREAM, sfg: P.t[4], px: 240, tag: 'HONESTLY', tbg: P.t[3], tfg: CREAM, tagAt: T('team', 'honestly') });
  };
  // 13 split screen along a grid line: leader or follower?
  S.ask = (ctx, t, lt, sc, i) => {
    const P = PAL.beak; base(ctx, sc, lt, i);
    const sp = oExp(inv(T('ask2', 'leader') - 0.2, T('ask2', 'leader') + 0.3, t)), sb = oExp(inv(T('ask2', 'back') - 0.3, T('ask2', 'back') + 0.1, t));
    const midY = 1260; // split on a grid line
    ctx.fillStyle = PAL.night.t[1]; ctx.fillRect(0, BAND1, W * sp, midY - BAND1);
    ctx.fillStyle = PAL.wheat.t[2]; ctx.fillRect(W * (1 - sb), midY, W * sb, 1620 - midY);
    if (sp > 0.02) { gooseTop(ctx, 330, 1010, 110, 0.5 + 0.5 * Math.sin(t * 9), PAL.night.accent, PAL.night.accent); maskText(ctx, 'LEADER', 560, 1040, F.en(900, 120), CREAM, sp, { ls: '-3px' }); typeText(ctx, 'FRONT · HARD WORK', 566, 1110, F.mono(30), PAL.night.accent, sp); }
    if (sb > 0.02) { gooseTop(ctx, 330, 1450, 110, 0.5 + 0.5 * Math.sin(t * 6), PAL.wheat.fg, PAL.wheat.t[0]); maskText(ctx, 'BACK', 560, 1480, F.en(900, 120), PAL.wheat.fg, sb, { ls: '-3px' }); typeText(ctx, 'FREE LIFT · FOLLOW', 566, 1550, F.mono(30), PAL.wheat.t[0], sb); }
    textBlock(ctx, t, T('ask', 'which') - 0.15, { title: 'WHICH ONE?', sub: 'TELL US IN THE COMMENTS', fg: CREAM, sfg: P.t[4], px: 240 });
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
    const nx = SC[i + 1];
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    if (i > 0 && t < SC[i].t0 + TR / 2) { // inside the transition into scene i
      const u = inv(SC[i].t0 - TR / 2, SC[i].t0 + TR / 2, t);
      drawScene(ctx, i - 1, t); ctx.save(); transClip(ctx, SC[i].tr, u); drawScene(ctx, i, t); ctx.restore();
    } else drawScene(ctx, i, t);
    ctx.restore();
    if (!GR || GR.width !== Wd) { GR = document.createElement('canvas'); GR.width = Wd; GR.height = Hd; const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound: percussion spine, an accent on every cut, clicks for type ----------
  function scoreSound(k) {
    // cut accents: a drum hit per card, the foley by chapter matter
    SC.forEach((sc, idx) => { if (idx === 0) return;
      k.play('whoosh', sc.t0 - 0.25, { dur: 0.35, gain: 0.45, top: 2600 });
      k.play('thud', sc.t0 + 0.05, { f: 110, gain: 0.55 });
      k.play('tock', sc.t0 + 0.05, { f: 520, gain: 0.35, minor: true }); });
    // a quiet frame-drum pulse under the whole film
    for (let tb = 0.2; tb < DURATION - 0.6; tb += 0.6) k.play('tock', tb, { f: (Math.round(tb / 0.6) % 4 === 0) ? 180 : 260, gain: 0.12, minor: true });
    // hook
    k.play('thud', 0.25, { f: 90, gain: 0.7 });
    for (let f = Math.ceil(T('hook', 'cut') * 14); f < T('hook', '14') * 14; f++) k.play('count', f / 14, { gain: 0.5, minor: true });
    k.play('impact', T('hook', '14'), { gain: 0.8 }); k.play('thud', T('hook', 'heart'), { f: 70, gain: 0.6 }); k.play('thud', T('hook', 'heart') + 0.22, { f: 70, gain: 0.45 });
    k.play('pop', T('why', 'why') - 0.1, { f: 640, gain: 0.7 });
    // geese
    for (let r = 0; r < 5; r++) k.play('swish', T('geese', 'v') - 0.5 + r * 0.12, { gain: 0.3, pan: (r - 2) * 0.3, minor: true });
    k.play('ding', T('geese', 'v'), { f: 'E5', gain: 0.3 });
    // flap
    k.play('swish', T('flap', 'down') - 0.2, { gain: 0.6 }); k.play('thud', T('flap', 'down'), { f: 140, gain: 0.4 });
    // swirl
    k.play('riser', T('curl', 'curls') - 0.1, { dur: 1.2, gain: 0.35 });
    k.noise(T('curl', 'curls'), { dur: 2.2, color: 'pink', filter: 'bandpass', f: [[0, 600], [1.2, 1800], [2.2, 900]], q: 1.4, gain: 0.18, a: 0.3, verb: 0.2 });
    k.play('ding', T('swirl', 'swirl'), { f: 'A5', gain: 0.3 });
    // rise
    for (let r = 0; r < 4; r++) k.play('blip', T('rise', 'rising') - 0.3 + r * 0.1, { f: 500 + r * 180, gain: 0.3, minor: true });
    // slide / lift
    k.play('swish', T('slide', 'slides') - 0.1, { gain: 0.5, pan: 0.4 }); k.play('tock', T('slide', 'spot'), { f: 700, gain: 0.5 });
    k.play('riser', T('lift', 'free') - 0.3, { dur: 0.5, gain: 0.4 }); k.play('success', T('lift', 'lift'), { f: 'C6', gain: 0.35 });
    // line
    for (let r = 0; r < 5; r++) k.play('tock', T('line', 'line') + r * 0.28, { f: 400 + r * 60, gain: 0.35, minor: true });
    k.play('impact', T('vee', 'v'), { gain: 0.6 }); k.play('ding', T('vee', 'v'), { f: 'G5', gain: 0.3 });
    // pelicans count-up slam, with half a beat of silence before the hit
    for (let f = Math.ceil(T('pel', 'pelicans') * 7) * 2; f < T('pel2', '14') * 14; f += 2) k.play('count', f / 14, { gain: 0.6, minor: true });
    k.play('impact', T('pel2', '14'), { gain: 0.9 }); ['C5', 'E5', 'G5'].forEach((n, j) => k.play('ding', T('pel2', '14') + j * 0.03, { f: n, gain: 0.3 }));
    k.play('thud', T('pel2', 'lower'), { f: 90, gain: 0.5 }); k.play('tock', T('pel2', 'solo'), { f: 330, gain: 0.4 });
    // ibis in sync
    for (let r = 0; r < 6; r++) k.play('click', T('ibis', 'time') + r * 0.3, { gain: 0.35, minor: true });
    k.play('ding', T('ibis', 'match'), { f: 'E6', gain: 0.25 });
    // front
    k.noise(T('front', 'front') - 0.2, { dur: 2.0, color: 'brown', filter: 'lowpass', f: 900, gain: 0.16, a: 0.3, verb: 0.1 });
    k.play('error', T('front', 'no'), { f: 'A3', gain: 0.35 });
    // turns
    k.play('swish', T('swap', 'swapping'), { gain: 0.5, pan: -0.3 }); k.play('swish', T('swap', 'front') - 0.2, { gain: 0.5, pan: 0.3 }); k.play('pop', T('swap', 'front'), { f: 700, gain: 0.5 });
    // team wall
    for (let r = 0; r < 9; r++) k.play('tock', T('team', 'teamwork') - 0.3 + r * 0.05, { f: 380 + r * 30, gain: 0.3, minor: true });
    k.play('stamp', T('team', 'meetings'), { gain: 0.4 });
    // ask
    k.play('thud', T('ask2', 'leader'), { f: 100, gain: 0.5 }); k.play('thud', T('ask2', 'back'), { f: 130, gain: 0.5 });
    k.play('ding', T('ask2', 'back') + 0.3, { f: 'C6', gain: 0.3 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
