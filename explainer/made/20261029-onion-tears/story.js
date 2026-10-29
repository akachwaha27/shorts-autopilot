// ================= Flat-Vector Science, vertical 1080x1920: "Why do onions make you cry?" =================
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: copied from phrases.json (Kokoro voiceover) ----------
  const BEATS = [
    { id: 'hook1', s: 0.25, e: 2.57, w: {onions: 0.25, fire: 0.77, tear: 1.11, gas: 1.45, at: 1.71, your: 1.88, eyes: 2.23} },
    { id: 'hook2', s: 2.87, e: 4.86, w: {n30: 2.87, seconds: 3.04, after: 3.62, you: 4.03, cut: 4.28, them: 4.53} },
    { id: 'how', s: 5.41, e: 5.96, w: {how: 5.41} },
    { id: 'cell', s: 6.51, e: 8.15, w: {inside: 6.51, every: 7.0, onion: 7.41, cell: 7.82} },
    { id: 'apart', s: 8.45, e: 10.19, w: {two: 8.45, chemicals: 8.67, are: 9.32, kept: 9.54, apart: 9.83} },
    { id: 'rooms', s: 10.49, e: 11.92, w: {in: 10.49, separate: 10.63, little: 11.17, rooms: 11.58} },
    { id: 'sulfur', s: 12.47, e: 14.3, w: {one: 12.47, is: 12.75, a: 12.93, sulfur: 13.02, molecule: 13.57} },
    { id: 'enzyme', s: 14.85, e: 16.29, w: {the: 14.85, other: 15.09, is: 15.49, an: 15.65, enzyme: 15.81} },
    { id: 'knife', s: 16.84, e: 18.58, w: {your: 16.84, knife: 17.13, smashes: 17.49, the: 18.0, walls: 18.22} },
    { id: 'mix', s: 18.88, e: 20.22, w: {and: 18.88, they: 19.12, finally: 19.43, mix: 19.99} },
    { id: 'acid', s: 20.77, e: 23.3, w: {the: 20.77, enzyme: 21.0, turns: 21.46, sulfur: 22.07, into: 22.53, an: 22.84, acid: 22.99} },
    { id: 'second', s: 23.6, e: 24.92, w: {then: 23.6, a: 23.91, second: 23.99, enzyme: 24.46} },
    { id: 'disc', s: 25.22, e: 27.34, w: {only: 25.22, discovered: 25.65, in: 26.7, n2002: 26.92} },
    { id: 'gas', s: 27.64, e: 29.46, w: {flips: 27.64, that: 28.07, acid: 28.42, into: 28.77, a: 29.12, gas: 29.2} },
    { id: 'drift', s: 30.01, e: 30.91, w: {it: 30.01, drifts: 30.19, up: 30.73} },
    { id: 'peak', s: 31.21, e: 33.56, w: {and: 31.21, peaks: 31.43, about: 31.78, n30: 32.14, seconds: 32.28, after: 32.78, the: 33.14, cut: 33.35} },
    { id: 'hits', s: 34.11, e: 35.41, w: {when: 34.11, it: 34.4, hits: 34.54, your: 34.83, eyes: 35.12} },
    { id: 'nerves', s: 35.71, e: 37.26, w: {tiny: 35.71, nerves: 35.99, shout: 36.41, burning: 36.77} },
    { id: 'glands', s: 37.56, e: 39.52, w: {so: 37.56, your: 37.7, tear: 37.97, glands: 38.24, flood: 38.65, eyes: 39.25} },
    { id: 'wash', s: 39.82, e: 40.91, w: {to: 39.82, wash: 40.0, it: 40.37, away: 40.55} },
    { id: 'why', s: 41.46, e: 42.28, w: {why: 41.46, bother: 41.73} },
    { id: 'armor', s: 42.83, e: 43.63, w: {its: 42.83, armor: 43.13} },
    { id: 'animal', s: 44.18, e: 46.02, w: {any: 44.18, animal: 44.4, that: 44.85, bites: 45.14, an: 45.51, onion: 45.66} },
    { id: 'sting', s: 46.32, e: 47.85, w: {gets: 46.32, a: 46.63, face: 46.71, full: 47.01, of: 47.32, sting: 47.47} },
    { id: 'want', s: 48.4, e: 49.54, w: {want: 48.4, fewer: 48.73, tears: 49.14} },
    { id: 'water', s: 50.09, e: 51.8, w: {cut: 50.09, it: 50.33, under: 50.48, running: 50.87, water: 51.41} },
    { id: 'end', s: 52.35, e: 55.72, w: {so: 52.35, would: 52.49, you: 52.83, still: 53.04, eat: 53.38, a: 53.59, plant: 53.66, that: 54.0, fights: 54.27, back: 54.69, with: 54.96, tear: 55.24, gas: 55.51} },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = { cell: B.cell.s - 0.35, knife: B.knife.s - 0.3, chem: B.acid.s - 0.3, rise: B.drift.s - 0.3, eye: B.hits.s - 0.3, armor: B.why.s - 0.3, tip: B.want.s - 0.3, end: B.end.s - 0.3 };

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', purple: '#8a3f8f', purple2: '#b5609e', lilac: '#e7b8d8', gold: '#f2b84b', gold2: '#d8932f', green: '#5cc96b', lime: '#c8e85a', gas: '#d6f06a', red: '#ef4a4a', blue: '#3fa9f5', tear: '#7fd0ff', orange: '#ff7a3d', white: '#ffffff', steel: '#cfd8e3', steel2: '#9fb0c3', skin: '#f3c7a0' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 48, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size, o.weight || 700) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700);
    ctx.restore();
  };
  const big = (ctx, s, x, y, size, col, k = 1, sh = 22) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col, 700), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 14, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const tiles = (ctx, y0, y1, c0, c1, s = 120) => { for (let y = y0; y < y1; y += s) for (let x = 0; x < W; x += s) { ctx.fillStyle = ((x + y) / s) % 2 ? c0 : c1; ctx.fillRect(x, y, s, s); } };
  const counter = (ctx, y, top = '#e9d3b0', front = '#c99b6a') => { ctx.fillStyle = top; ctx.fillRect(0, y, W, 60); ctx.fillStyle = front; ctx.fillRect(0, y + 60, W, HH - y); };
  const board = (ctx, x, y, w, h) => longShadow(ctx, (c) => { ctx.fillStyle = c || '#e3a65c'; rr(ctx, x - w / 2, y - h / 2, w, h, 40); ctx.fill(); if (!c) { ctx.fillStyle = '#cf8f45'; circle(ctx, x + w / 2 - 70, y, 24, '#cf8f45'); } }, 24);
  // onion bulb: flat, no outline, lighter stripes, sprout and roots
  const onionPath = (ctx, x, y, r) => { ctx.beginPath(); ctx.moveTo(x, y - 1.35 * r); ctx.bezierCurveTo(x + 0.3 * r, y - 0.95 * r, x + 1.08 * r, y - 0.78 * r, x + 1.02 * r, y + 0.05 * r); ctx.bezierCurveTo(x + 0.98 * r, y + 0.78 * r, x + 0.45 * r, y + 1.0 * r, x, y + 1.0 * r); ctx.bezierCurveTo(x - 0.45 * r, y + 1.0 * r, x - 0.98 * r, y + 0.78 * r, x - 1.02 * r, y + 0.05 * r); ctx.bezierCurveTo(x - 1.08 * r, y - 0.78 * r, x - 0.3 * r, y - 0.95 * r, x, y - 1.35 * r); ctx.closePath(); };
  const onion = (ctx, x, y, r, o = {}) => {
    const col = o.col || PAL.purple, hi = o.hi || PAL.purple2;
    ctx.strokeStyle = '#e6d3a3'; ctx.lineWidth = r * 0.05; ctx.lineCap = 'round';
    for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(x + i * r * 0.1, y + r * 0.95); ctx.lineTo(x + i * r * 0.16, y + r * 1.18); ctx.stroke(); }
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; onionPath(ctx, x, y, r); ctx.fill(); }, o.sh ?? 28);
    ctx.save(); onionPath(ctx, x, y, r); ctx.clip(); ctx.fillStyle = hi;
    for (let i = -2; i <= 2; i++) { if (!i) continue; ctx.beginPath(); ctx.ellipse(x + i * r * 0.42, y, r * 0.06, r * 1.2, i * 0.06, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = 'rgba(255,255,255,0.28)'; ctx.beginPath(); ctx.ellipse(x - r * 0.45, y - r * 0.25, r * 0.16, r * 0.42, -0.3, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    ctx.fillStyle = PAL.green; ctx.beginPath(); ctx.moveTo(x - r * 0.06, y - r * 1.3); ctx.quadraticCurveTo(x - r * 0.1, y - r * 1.7, x + r * 0.12, y - r * 1.85); ctx.quadraticCurveTo(x + r * 0.05, y - r * 1.6, x + r * 0.06, y - r * 1.3); ctx.closePath(); ctx.fill();
    if (o.face) { const fy = y + r * 0.1, mood = o.face; circle(ctx, x - r * 0.3, fy, r * 0.09, PAL.ink); circle(ctx, x + r * 0.3, fy, r * 0.09, PAL.ink);
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = r * 0.06; ctx.lineCap = 'round';
      if (mood === 'angry') { ctx.beginPath(); ctx.moveTo(x - r * 0.45, fy - r * 0.25); ctx.lineTo(x - r * 0.18, fy - r * 0.14); ctx.moveTo(x + r * 0.45, fy - r * 0.25); ctx.lineTo(x + r * 0.18, fy - r * 0.14); ctx.stroke(); ctx.beginPath(); ctx.arc(x, fy + r * 0.38, r * 0.16, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke(); }
      else { ctx.beginPath(); ctx.arc(x, fy + r * 0.15, r * 0.16, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke(); }
      ctx.fillStyle = 'rgba(255,120,150,0.5)'; circle(ctx, x - r * 0.52, fy + r * 0.18, r * 0.1, 'rgba(255,120,150,0.5)'); circle(ctx, x + r * 0.52, fy + r * 0.18, r * 0.1, 'rgba(255,120,150,0.5)'); }
  };
  const halfOnion = (ctx, x, y, r) => { // cut face: concentric rings
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.purple; ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.92, 0, 0, Math.PI * 2); ctx.fill(); }, 24);
    for (let i = 0; i < 6; i++) { const k = 1 - i * 0.15; ctx.fillStyle = i % 2 ? PAL.lilac : '#f6e6f0'; ctx.beginPath(); ctx.ellipse(x, y, r * 0.9 * k, r * 0.84 * k, 0, 0, Math.PI * 2); ctx.fill(); }
  };
  const knifeShape = (ctx, x, y, s, rot) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.steel; ctx.beginPath(); ctx.moveTo(-40, 0); ctx.lineTo(360, 0); ctx.quadraticCurveTo(340, 70, 260, 90); ctx.lineTo(-40, 90); ctx.closePath(); ctx.fill(); ctx.fillStyle = c || PAL.ink; rr(ctx, -260, 10, 230, 70, 30); ctx.fill(); }, 18);
    ctx.fillStyle = PAL.white; ctx.fillRect(-30, 0, 360, 14); circle(ctx, -200, 45, 10, PAL.steel2); circle(ctx, -110, 45, 10, PAL.steel2); ctx.restore(); };
  // gas puffs: seeded blobs rising from (x,y) with spread; amount 0..1
  const GASR = H.rng(11), GASP = Array.from({ length: 40 }, () => ({ ox: GASR() * 2 - 1, sp: 0.6 + GASR() * 0.8, ph: GASR(), r: 0.6 + GASR() * 0.8 }));
  const gas = (ctx, t, x, y, spread, rise, amount, col = PAL.gas, n = 40, dx = 0) => {
    if (amount <= 0) return; ctx.save();
    for (let i = 0; i < n; i++) { const p = GASP[i % 40]; const u = (t * 0.35 * p.sp + p.ph) % 1; if (u > amount * 1.05) continue;
      const px = x + p.ox * spread * (0.4 + u) + Math.sin(t * 2 + i) * 18 + dx * u, py = y - u * rise; ctx.globalAlpha = 0.55 * Math.sin(u * Math.PI) * Math.min(1, amount * 1.5);
      circle(ctx, px, py, 34 * p.r * (0.6 + u), col); }
    ctx.restore();
  };
  const cloud = (ctx, x, y, s, col) => { [[-0.9, 0.1, 0.55], [-0.35, -0.3, 0.7], [0.35, -0.2, 0.65], [0.9, 0.15, 0.5], [0, 0.2, 0.7]].forEach(([a, b, r]) => circle(ctx, x + a * s, y + b * s, r * s, col)); };
  const molecule = (ctx, x, y, r, kind, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    if (kind === 'S') { longShadow(ctx, (c) => circle(ctx, 0, 0, r, c || PAL.gold), 12); circle(ctx, r * 0.9, -r * 0.5, r * 0.45, PAL.gold2); text(ctx, 'S', 0, 3, r * 1.1, PAL.ink, 700); }
    else if (kind === 'E') { longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.green; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r, 0.6, Math.PI * 2 - 0.6); ctx.closePath(); ctx.fill(); }, 12); circle(ctx, -r * 0.1, -r * 0.5, r * 0.14, PAL.ink); }
    else if (kind === 'A') { longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.orange; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + Math.PI / 6; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill(); }, 12); text(ctx, 'A', 0, 3, r * 0.9, PAL.white, 700); }
    else if (kind === 'G') { longShadow(ctx, (c) => cloud(ctx, 0, 0, r * 0.8, c || PAL.gas), 12); }
    ctx.restore(); };
  const timer = (ctx, x, y, r, sec, max, col = PAL.red) => {
    longShadow(ctx, (c) => circle(ctx, x, y, r, c || PAL.cream), 22); ctx.fillStyle = PAL.ink; rr(ctx, x - 26, y - r - 50, 52, 44, 10); ctx.fill();
    ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, r * 0.86, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (sec / max)); ctx.closePath(); ctx.fill();
    circle(ctx, x, y, r * 0.55, PAL.cream); text(ctx, `${Math.round(sec)}s`, x, y + 4, r * 0.5, PAL.ink, 700);
  };
  const drop = (ctx, x, y, s, col = PAL.tear) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, y - s * 1.6); ctx.quadraticCurveTo(x + s, y - s * 0.2, x + s * 0.9, y + s * 0.3); ctx.arc(x, y + s * 0.3, s * 0.9, 0, Math.PI); ctx.quadraticCurveTo(x - s, y - s * 0.2, x, y - s * 1.6); ctx.fill(); };
  const header = (ctx, t) => { const k = EO(t, B.how.e + 0.2, B.how.e + 0.7) * (1 - EO(t, CUTS.end - 0.2, CUTS.end + 0.2)); if (k <= 0) return; ctx.save(); ctx.globalAlpha = k; pill(ctx, 'WHY ONIONS MAKE YOU CRY', 540, 210, { size: 40, bg: PAL.ink, col: PAL.cream, sh: 10 }); ctx.restore(); };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#ffd98a', '#ffb067'); tiles(ctx, 0, 1300, 'rgba(255,255,255,0.10)', 'rgba(255,255,255,0)', 135);
    counter(ctx, 1300);
    board(ctx, 400, 1420, 620, 220);
    const shake = t > T('hook1', 'fire') && t < T('hook1', 'fire') + 0.4 ? Math.sin(t * 80) * 8 : 0;
    onion(ctx, 380 + shake, 1180, 190, { face: 'angry' });
    // gas jet toward the eye on the right
    const gk = EO(t, T('hook1', 'gas') - 0.4, T('hook1', 'eyes'));
    gas(ctx, t, 520, 1000, 60, 320, gk, PAL.gas, 40, 360);
    // big crying eye top right
    const ek = pop(t, T('hook1', 'eyes') - 0.2);
    if (ek > 0.01) { ctx.save(); ctx.translate(820, 720); ctx.scale(ek, ek);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; ctx.beginPath(); ctx.ellipse(0, 0, 170, 100, 0, 0, Math.PI * 2); ctx.fill(); }, 20);
      circle(ctx, 0, 6, 70, '#6b4a2b'); circle(ctx, 0, 6, 34, PAL.ink); circle(ctx, 18, -14, 14, PAL.white);
      ctx.fillStyle = PAL.skin; ctx.beginPath(); ctx.ellipse(0, -70, 190, 70, 0, Math.PI, 0); ctx.fill();
      for (let i = 0; i < 3; i++) { const u = ((t * 0.9 + i / 3) % 1); drop(ctx, -110 + i * 20, 110 + u * 260, 22); }
      ctx.restore(); }
    big(ctx, 'TEAR GAS?', 540, 470, 150, PAL.purple, pop(t, T('hook1', 'tear') - 0.15) * bump(t, T('hook1', 'gas')));
    const tk = pop(t, T('hook2', 'n30') - 0.15);
    if (tk > 0.01) { ctx.save(); ctx.translate(820, 1120); ctx.scale(tk, tk); timer(ctx, 0, 0, 130, 30 * EO(t, T('hook2', 'n30') - 0.1, T('hook2', 'seconds') + 0.6), 30); ctx.restore(); }
    pill(ctx, 'AFTER YOU CUT', 820, 1330, { k: pop(t, T('hook2', 'cut') - 0.15), bg: PAL.red, col: PAL.white, size: 48 });
    pill(ctx, 'HOW?', 540, 1600, { k: pop(t, T('how', 'how') - 0.1) * bump(t, T('how', 'how') + 0.05), bg: PAL.ink, col: PAL.cream, size: 90, h: 150 });
  };
  S.cell = (ctx, t) => {
    sky(ctx, '#dff5d0', '#b9e6a5');
    // slow push-in camera (continuous move)
    const z = 1 + 0.06 * ph(t, CUTS.cell, CUTS.knife);
    ctx.save(); ctx.translate(540, 1000); ctx.scale(z, z); ctx.translate(-540, -1000);
    // cell: big rounded rectangle with wall, two compartments
    const ck = EO(t, T('cell', 'inside') - 0.3, T('cell', 'cell'));
    ctx.save(); ctx.translate(540, 1000); ctx.scale(0.7 + 0.3 * ck, 0.7 + 0.3 * ck); ctx.translate(-540, -1000); ctx.globalAlpha = ck;
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#7fcf6a'; rr(ctx, 110, 560, 860, 900, 120); ctx.fill(); }, 30);
    ctx.fillStyle = '#eefbe2'; rr(ctx, 150, 600, 780, 820, 95); ctx.fill();
    // inner wall splitting the rooms
    const wallK = EO(t, T('apart', 'kept') - 0.2, T('apart', 'apart') + 0.2);
    ctx.fillStyle = '#7fcf6a'; rr(ctx, 520, 1010 - 400 * wallK, 40, 800 * wallK, 20); ctx.fill();
    // room tints
    const rk = EO(t, T('rooms', 'separate') - 0.2, T('rooms', 'rooms'));
    ctx.fillStyle = H.rgba('#fff0b8', rk); rr(ctx, 175, 625, 330, 770, 80); ctx.fill();
    ctx.fillStyle = H.rgba('#d3f3c2', rk); rr(ctx, 575, 625, 330, 770, 80); ctx.fill();
    ctx.restore();
    // two chemicals, one in each room, wobbling
    const r = H.rng(5);
    for (let i = 0; i < 6; i++) { const x = 250 + (i % 2) * 150 + r() * 30, y = 720 + Math.floor(i / 2) * 230 + r() * 40; const k = pop(t, T('apart', 'two') - 0.1 + i * 0.05) * (i < 6 ? 1 : 0); molecule(ctx, x + Math.sin(t * 2 + i) * 10, y + Math.cos(t * 1.7 + i) * 10, 52, 'S', k * bump(t, T('sulfur', 'sulfur'))); }
    for (let i = 0; i < 6; i++) { const x = 670 + (i % 2) * 150 + r() * 30, y = 720 + Math.floor(i / 2) * 230 + r() * 40; const k = pop(t, T('apart', 'chemicals') - 0.1 + i * 0.05); ctx.save(); ctx.translate(x + Math.sin(t * 2.2 + i) * 10, y); ctx.rotate(Math.sin(t * 3 + i) * 0.3); molecule(ctx, 0, 0, 54, 'E', k * bump(t, T('enzyme', 'enzyme'))); ctx.restore(); }
    ctx.restore();
    pill(ctx, 'ONE ONION CELL', 540, 400, { k: pop(t, T('cell', 'cell') - 0.15), bg: PAL.green, col: PAL.white, size: 56 });
    pill(ctx, 'KEPT APART', 540, 1560, { k: pop(t, T('apart', 'apart') - 0.15, T('sulfur', 'sulfur') - 0.3), bg: PAL.ink, col: PAL.cream, size: 60 });
    pill(ctx, 'SULFUR', 330, 1560, { k: pop(t, T('sulfur', 'sulfur') - 0.15), bg: PAL.gold, col: PAL.ink, size: 56 });
    pill(ctx, 'ENZYME', 750, 1560, { k: pop(t, T('enzyme', 'enzyme') - 0.15), bg: PAL.green, col: PAL.white, size: 56 });
  };
  S.knife = (ctx, t) => {
    sky(ctx, '#bfe3ff', '#8cc8f5'); tiles(ctx, 0, 1250, 'rgba(255,255,255,0.12)', 'rgba(255,255,255,0)', 135); counter(ctx, 1250, '#dfe6ee', '#9fb0c3');
    board(ctx, 540, 1380, 900, 240);
    const cutT = T('knife', 'smashes');
    const down = EI(t, T('knife', 'knife') - 0.2, cutT + 0.1);
    // row of cells being cut (cross-section), walls crack after the chop
    const crack = EO(t, cutT, T('knife', 'walls') + 0.2), mix = EO(t, T('mix', 'they') - 0.2, T('mix', 'mix') + 0.2);
    for (let i = 0; i < 3; i++) { const cx = 220 + i * 320, cy = 950; const off = (i === 1 ? 0 : (i === 0 ? -1 : 1)) * 40 * crack;
      ctx.save(); ctx.translate(cx + off, cy);
      longShadow(ctx, (c) => { ctx.fillStyle = c || '#7fcf6a'; rr(ctx, -140, -170, 280, 340, 60); ctx.fill(); }, 16);
      ctx.fillStyle = '#eefbe2'; rr(ctx, -118, -148, 236, 296, 46); ctx.fill();
      if (crack < 1) { ctx.globalAlpha = 1 - crack; ctx.fillStyle = '#7fcf6a'; ctx.fillRect(-8, -148, 16, 296); ctx.globalAlpha = 1; }
      const r = H.rng(20 + i);
      for (let j = 0; j < 3; j++) { const sx = H.lerp(-60, r() * 160 - 80, mix), sy = -90 + j * 90 + Math.sin(t * 3 + j) * 6; molecule(ctx, sx, sy, 30, 'S', 1); }
      for (let j = 0; j < 3; j++) { const ex = H.lerp(60, r() * 160 - 80, mix), ey = -60 + j * 80 + Math.cos(t * 3 + j) * 6; molecule(ctx, ex, ey + (mix ? 20 : 0), 30, 'E', 1); }
      ctx.restore(); }
    // knife chops down through the middle cell
    const ky = H.lerp(380, 860, down) + (t > cutT ? -60 * EO(t, cutT + 0.3, cutT + 1.2) : 0);
    knifeShape(ctx, 540, ky, 1.3, -0.08);
    if (t > cutT && t < cutT + 0.5) { ctx.save(); ctx.globalAlpha = 1 - ph(t, cutT, cutT + 0.5); ctx.strokeStyle = PAL.white; ctx.lineWidth = 12; for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2, rr2 = 120 + 180 * ph(t, cutT, cutT + 0.5); ctx.beginPath(); ctx.moveTo(540 + Math.cos(a) * rr2, 950 + Math.sin(a) * rr2); ctx.lineTo(540 + Math.cos(a) * (rr2 + 50), 950 + Math.sin(a) * (rr2 + 50)); ctx.stroke(); } ctx.restore(); }
    big(ctx, 'SMASH!', 540, 450, 140, PAL.red, pop(t, cutT - 0.1) * bump(t, T('knife', 'walls')));
    big(ctx, 'THEY MIX', 540, 1610, 120, PAL.ink, pop(t, T('mix', 'mix') - 0.15) * bump(t, T('mix', 'mix')), 18);
  };
  S.chem = (ctx, t) => {
    sky(ctx, '#3b2a6b', '#6a3f9a');
    const sr = H.rng(31); for (let i = 0; i < 26; i++) circle(ctx, sr() * W, sr() * HH, 4 + sr() * 8, 'rgba(255,255,255,0.08)');
    // vertical reaction chain: SULFUR -> (enzyme 1) -> ACID -> (enzyme 2) -> GAS
    const y1 = 560, y2 = 1000, y3 = 1450;
    const a1 = EO(t, T('acid', 'turns') - 0.2, T('acid', 'acid')), a2 = EO(t, T('gas', 'flips') - 0.2, T('gas', 'gas'));
    molecule(ctx, 540, y1, 90, 'S', pop(t, CUTS.chem + 0.1));
    pill(ctx, 'SULFUR', 800, y1, { k: pop(t, T('acid', 'sulfur') - 0.15), bg: PAL.gold, col: PAL.ink, size: 46 });
    arrow(ctx, 540, y1 + 110, 540, y2 - 120, PAL.cream, 16, a1);
    ctx.save(); ctx.translate(310, (y1 + y2) / 2); ctx.rotate(Math.sin(t * 6) * 0.15); molecule(ctx, 0, 0, 60, 'E', pop(t, T('acid', 'enzyme') - 0.15)); ctx.restore();
    pill(ctx, 'ENZYME 1', 310, (y1 + y2) / 2 + 100, { k: pop(t, T('acid', 'enzyme') - 0.1), bg: PAL.green, col: PAL.white, size: 44 });
    molecule(ctx, 540, y2, 90, 'A', pop(t, T('acid', 'acid') - 0.15) * bump(t, T('acid', 'acid')));
    pill(ctx, 'ACID', 760, y2, { k: pop(t, T('acid', 'acid') - 0.05), bg: PAL.orange, col: PAL.white, size: 46 });
    ctx.save(); ctx.translate(310, (y2 + y3) / 2); ctx.rotate(Math.sin(t * 6 + 1) * 0.15); molecule(ctx, 0, 0, 60, 'E', pop(t, T('second', 'second') - 0.15)); ctx.restore();
    pill(ctx, 'ENZYME 2', 310, (y2 + y3) / 2 + 100, { k: pop(t, T('second', 'enzyme') - 0.15), bg: PAL.green, col: PAL.white, size: 44 });
    arrow(ctx, 540, y2 + 110, 540, y3 - 140, PAL.cream, 16, a2);
    const gk = pop(t, T('gas', 'gas') - 0.2);
    molecule(ctx, 540, y3, 130, 'G', gk * bump(t, T('gas', 'gas')));
    gas(ctx, t, 540, y3 + 120, 200, 160, EO(t, T('gas', 'gas'), T('gas', 'gas') + 0.6));
    big(ctx, 'GAS!', 540, y3 + 10, 100, PAL.ink, gk, 0);
    pill(ctx, 'FOUND IN 2002', 780, (y2 + y3) / 2, { k: pop(t, T('disc', 'n2002') - 0.15) * bump(t, T('disc', 'n2002')), bg: PAL.cream, col: PAL.purple, size: 50 });
  };
  S.rise = (ctx, t) => {
    sky(ctx, '#7dd8cf', '#3fb1a6'); tiles(ctx, 0, 1300, 'rgba(255,255,255,0.10)', 'rgba(255,255,255,0)', 135); counter(ctx, 1300, '#e9d3b0', '#c99b6a');
    board(ctx, 540, 1420, 820, 220);
    halfOnion(ctx, 380, 1330, 150); onion(ctx, 720, 1250, 120, { sh: 18 });
    const drift = EO(t, T('drift', 'drifts') - 0.3, T('peak', 'cut') + 0.3);
    gas(ctx, t, 380, 1220, 140, 700, 0.25 + 0.75 * drift);
    pill(ctx, 'DRIFTS UP', 380, 820, { k: pop(t, T('drift', 'up') - 0.25), bg: PAL.lime, col: PAL.ink, size: 52 });
    const t0 = T('peak', 'peaks') - 0.1, sec = 30 * EO(t, t0, T('peak', 'n30') + 0.3);
    const tk = pop(t, t0 - 0.1);
    if (tk > 0.01) { ctx.save(); ctx.translate(770, 640); ctx.scale(tk * bump(t, T('peak', 'n30') + 0.3), tk * bump(t, T('peak', 'n30') + 0.3)); timer(ctx, 0, 0, 170, sec, 30); ctx.restore(); }
    big(ctx, 'PEAK', 770, 400, 110, PAL.red, pop(t, T('peak', 'peaks') - 0.1), 18);
    pill(ctx, 'AFTER THE CUT', 770, 900, { k: pop(t, T('peak', 'cut') - 0.15), bg: PAL.ink, col: PAL.cream, size: 44 });
  };
  S.eye = (ctx, t) => {
    sky(ctx, '#ffd6dc', '#ff9fb0');
    // giant eye, face skin around
    ctx.fillStyle = PAL.skin; ctx.fillRect(0, 520, W, 980);
    const ex = 540, ey = 960;
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; ctx.beginPath(); ctx.ellipse(ex, ey, 400, 230, 0, 0, Math.PI * 2); ctx.fill(); }, 24);
    const look = Math.sin(t * 1.3) * 20; circle(ctx, ex + look, ey + 10, 165, '#6b4a2b'); circle(ctx, ex + look, ey + 10, 80, PAL.ink); circle(ctx, ex + look + 45, ey - 40, 30, PAL.white);
    // nerves glow red
    const nk = EO(t, T('nerves', 'nerves') - 0.2, T('nerves', 'burning')), flash = nk * (0.6 + 0.4 * Math.sin(t * 18));
    if (nk > 0) { ctx.save(); ctx.strokeStyle = H.rgba(PAL.red, flash); ctx.lineWidth = 10; ctx.lineCap = 'round'; const r = H.rng(8); for (let i = 0; i < 9; i++) { const a = -Math.PI + i / 8 * Math.PI; let x = ex + Math.cos(a) * 320, y = ey + Math.sin(a) * 180; ctx.beginPath(); ctx.moveTo(x, y); for (let j = 0; j < 4; j++) { x += Math.cos(a) * 40 + (r() - 0.5) * 40; y += Math.sin(a) * 30 + (r() - 0.5) * 30; ctx.lineTo(x, y); } ctx.stroke(); } ctx.restore(); }
    // tear gland (upper outer corner) + tears
    const gl = pop(t, T('glands', 'glands') - 0.2);
    if (gl > 0.01) { ctx.save(); ctx.translate(860, 700); ctx.scale(gl, gl); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.blue; ctx.beginPath(); ctx.ellipse(0, 0, 90, 55, -0.4, 0, Math.PI * 2); ctx.fill(); }, 12); ctx.restore(); }
    const fl = EO(t, T('glands', 'flood') - 0.2, T('glands', 'eyes') + 0.3);
    if (fl > 0) { ctx.save(); ctx.globalAlpha = 0.45 * fl; ctx.fillStyle = PAL.tear; ctx.beginPath(); ctx.ellipse(ex, ey + 140 - 60 * fl, 380, 60 + 50 * fl, 0, 0, Math.PI); ctx.fill(); ctx.restore();
      for (let i = 0; i < 6; i++) { const u = ((t * 0.8 + i / 6) % 1); drop(ctx, 220 + i * 40 + (i % 2) * 300, 1180 + u * 420, 26 * fl); } }
    // eyelid
    ctx.fillStyle = '#e8b48c'; ctx.beginPath(); ctx.ellipse(ex, ey - 200, 440, 120, 0, Math.PI, 0); ctx.fill();
    // gas puffs drifting in, then washed away
    const wash = EO(t, T('wash', 'wash') - 0.2, T('wash', 'away') + 0.4);
    gas(ctx, t, 200, 1200, 120, 600, Math.max(0, 1 - wash) * EO(t, CUTS.eye, T('hits', 'hits')), PAL.gas, 30, 280);
    pill(ctx, 'GAS HITS', 300, 400, { k: pop(t, T('hits', 'hits') - 0.15), bg: PAL.lime, col: PAL.ink, size: 52 });
    big(ctx, 'BURNING!', 540, 1620, 130, PAL.red, pop(t, T('nerves', 'burning') - 0.15, T('glands', 'tear') - 0.2) * bump(t, T('nerves', 'burning')), 18);
    pill(ctx, 'TEAR GLAND', 760, 540, { k: pop(t, T('glands', 'glands') - 0.15), bg: PAL.blue, col: PAL.white, size: 46 });
    big(ctx, 'WASH IT AWAY', 540, 1620, 100, '#1b6fa8', pop(t, T('wash', 'wash') - 0.15), 16);
  };
  S.armor = (ctx, t) => {
    sky(ctx, '#bdf0ff', '#e9fbff'); ctx.fillStyle = '#8fd46a'; ctx.beginPath(); ctx.moveTo(0, 1260); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, 1250 + Math.sin(x * 0.008) * 30); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.fill(); ctx.fillStyle = '#6dbb4f'; ctx.fillRect(0, 1450, W, HH);
    big(ctx, 'WHY?', 540, 430, 150, PAL.ink, pop(t, T('why', 'why') - 0.15, T('armor', 'its') - 0.3));
    big(ctx, 'ARMOR', 540, 430, 150, PAL.purple, pop(t, T('armor', 'armor') - 0.15) * bump(t, T('armor', 'armor')));
    // onion in the ground with a shield glow
    const sk = pop(t, T('armor', 'armor') - 0.1);
    if (sk > 0.01) { ctx.save(); ctx.globalAlpha = 0.35 * sk; circle(ctx, 640, 1080, 300 * sk, PAL.lime); ctx.restore(); }
    onion(ctx, 640, 1120, 170, { face: t > T('sting', 'sting') ? 'happy' : 'angry' });
    // rabbit hops in, bites, recoils
    const hop = EI(t, T('animal', 'any') - 0.2, T('animal', 'bites')), recoil = EO(t, T('sting', 'gets'), T('sting', 'sting') + 0.3);
    const rx = H.lerp(-120, 360, hop) - 220 * recoil, ry = 1300 - Math.abs(Math.sin(hop * Math.PI * 3)) * 80 * (1 - recoil);
    ctx.save(); ctx.translate(rx, ry); ctx.rotate(-0.3 * recoil);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#e8e1d8'; ctx.beginPath(); ctx.ellipse(0, 0, 130, 95, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(110, -80, 70, 60, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(80, -190, 22, 75, -0.2, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(130, -190, 22, 75, 0.2, 0, Math.PI * 2); ctx.fill(); }, 16);
    ctx.fillStyle = '#ffb8c8'; ctx.beginPath(); ctx.ellipse(80, -190, 10, 55, -0.2, 0, Math.PI * 2); ctx.fill(); circle(ctx, -125, -10, 30, PAL.white);
    if (recoil > 0.2) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(115, -100); ctx.lineTo(140, -85); ctx.moveTo(140, -100); ctx.lineTo(115, -85); ctx.stroke(); for (let i = 0; i < 3; i++) drop(ctx, 150 + i * 12, -50 + ((t * 300 + i * 40) % 120), 12); }
    else circle(ctx, 128, -92, 10, PAL.ink);
    circle(ctx, 172, -72, 9, '#ff7d9b'); ctx.restore();
    if (recoil > 0) { gas(ctx, t, 470, 1150, 80, 300, recoil); for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2 + t * 3; ctx.save(); ctx.globalAlpha = recoil; circle(ctx, rx + 110 + Math.cos(a) * 120, ry - 120 + Math.sin(a) * 50, 14, PAL.gold); ctx.restore(); } }
    pill(ctx, 'BITE!', 300, 900, { k: pop(t, T('animal', 'bites') - 0.15, T('sting', 'gets')), bg: PAL.cream, col: PAL.ink, size: 56 });
    pill(ctx, 'FACE FULL OF STING', 540, 1620, { k: pop(t, T('sting', 'face') - 0.15) * bump(t, T('sting', 'sting')), bg: PAL.red, col: PAL.white, size: 56 });
  };
  S.tip = (ctx, t) => {
    sky(ctx, '#d4ecff', '#a7d4fa'); tiles(ctx, 0, 1300, 'rgba(255,255,255,0.14)', 'rgba(255,255,255,0)', 135); counter(ctx, 1300, '#dfe6ee', '#9fb0c3');
    // sink basin + tap
    ctx.fillStyle = '#7c8ea3'; rr(ctx, 140, 1270, 800, 300, 50); ctx.fill(); ctx.fillStyle = '#5d6f84'; rr(ctx, 170, 1290, 740, 250, 40); ctx.fill();
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.steel; rr(ctx, 500, 600, 80, 360, 30); ctx.fill(); rr(ctx, 500, 600, 330, 80, 40); ctx.fill(); rr(ctx, 770, 600, 80, 160, 30); ctx.fill(); }, 18);
    const wk = EO(t, T('water', 'running') - 0.3, T('water', 'water'));
    if (wk > 0) { ctx.fillStyle = PAL.tear; rr(ctx, 780, 760, 60, 520 * wk, 30); ctx.fill(); ctx.strokeStyle = PAL.white; ctx.lineWidth = 8; ctx.setLineDash([30, 40]); ctx.lineDashOffset = -t * 400; ctx.beginPath(); ctx.moveTo(810, 770); ctx.lineTo(810, 760 + 520 * wk); ctx.stroke(); ctx.setLineDash([]); }
    halfOnion(ctx, 700, 1360, 120);
    if (wk > 0.5) for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI - Math.PI, u = (t * 2 + i / 8) % 1; circle(ctx, 810 + Math.cos(a) * 140 * u, 1290 + Math.sin(a) * 80 * u + 60 * u * u, 10 * (1 - u), PAL.white); }
    const cut = EI(t, T('water', 'cut') - 0.2, T('water', 'under') + 0.2); knifeShape(ctx, 560, H.lerp(1000, 1160, cut), 0.8, -0.05);
    big(ctx, 'FEWER TEARS?', 540, 400, 110, PAL.navy, pop(t, T('want', 'want') - 0.15));
    pill(ctx, 'RUNNING WATER', 380, 1680, { k: pop(t, T('water', 'running') - 0.15) * bump(t, T('water', 'water')), bg: PAL.blue, col: PAL.white, size: 52 });
  };
  S.end = (ctx, t) => {
    sky(ctx, '#ffe39a', '#ffb067');
    const r = H.rng(44); for (let i = 0; i < 12; i++) { const x = r() * W, y = 300 + r() * 1300; ctx.save(); ctx.globalAlpha = 0.25; onionPath(ctx, x, y + Math.sin(t + i) * 20, 36); ctx.fillStyle = PAL.purple2; ctx.fill(); ctx.restore(); }
    onion(ctx, 540, 1080, 230, { face: 'angry' });
    gas(ctx, t, 540, 820, 160, 400, 1);
    big(ctx, 'WOULD YOU', 540, 400, 110, PAL.ink, pop(t, T('end', 'would') - 0.15), 18);
    big(ctx, 'STILL EAT IT?', 540, 530, 110, PAL.purple, pop(t, T('end', 'eat') - 0.15) * bump(t, T('end', 'eat')), 18);
    const ck = pop(t, T('end', 'fights') - 0.15);
    if (ck > 0.01) { ctx.save(); ctx.translate(540, 1530); ctx.scale(ck, ck); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, -340, -80, 680, 160, 50); ctx.fill(); ctx.beginPath(); ctx.moveTo(-200, 70); ctx.lineTo(-250, 140); ctx.lineTo(-140, 75); ctx.fill(); }, 16); text(ctx, 'YES or NO? 👇', 0, 4, 64, PAL.ink, 700); ctx.restore(); }
  };
  const ORDER = [['hook', 0], ['cell', CUTS.cell], ['knife', CUTS.knife], ['chem', CUTS.chem], ['rise', CUTS.rise], ['eye', CUTS.eye], ['armor', CUTS.armor], ['tip', CUTS.tip], ['end', CUTS.end]];
  const HARD = { end: true, rise: true }; // a couple of straight cuts with a punch-in, the rest circle wipes
  const WIPE = 0.5;
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] - (HARD[ORDER[i + 1][0]] ? 0 : WIPE / 2)) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    if (HARD[cur[0]] && t < cur[1] + 0.35) { const z = 1.08 - 0.08 * H.ease.out(ph(t, cur[1], cur[1] + 0.35)); ctx.save(); ctx.translate(540, 960); ctx.scale(z, z); ctx.translate(-540, -960); S[cur[0]](ctx, t); ctx.restore(); }
    else if (next && !HARD[next[0]] && t >= next[1] - WIPE / 2) {
      const u = H.ease.inOut(ph(t, next[1] - WIPE / 2, next[1] + WIPE / 2));
      if (u < 1) S[cur[0]](ctx, t);
      ctx.save(); ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.clip(); S[next[0]](ctx, t); ctx.restore();
      if (u > 0 && u < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.stroke(); }
    } else S[cur[0]](ctx, t);
    header(ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound ----------
  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    const cut = (t) => { k.play('impact', t, { gain: 0.6 }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 104, gain: 0.3, chords: [['D4', 'F4', 'A4', 'C5'], ['Bb3', 'D4', 'F4', 'A4'], ['G3', 'Bb3', 'D4', 'F4'], ['A3', 'C#4', 'E4', 'G4']] });
    // hook
    k.play('thud', T('hook1', 'fire'), { f: 140, gain: 0.6 }); popAt(T('hook1', 'tear') - 0.15, 520, 0.9, 0, false);
    k.noise(T('hook1', 'gas') - 0.4, { dur: 1.2, color: 'pink', filter: 'bandpass', f: [[0, 600], [1.2, 2400]], q: 1, gain: 0.25, a: 0.2, verb: 0.2, pan: 0.4 });
    popAt(T('hook1', 'eyes') - 0.2, 760, 0.8, 0.5, false);
    for (let f = Math.ceil((T('hook2', 'n30') - 0.1) * 12); f < (T('hook2', 'seconds') + 0.6) * 12; f += 1) k.play('tick', f / 12, { f: 3200, gain: 0.7, pan: 0.4, minor: true });
    k.play('ding', T('hook2', 'seconds') + 0.6, { f: 'A5', gain: 0.35 }); popAt(T('hook2', 'cut') - 0.15, 640, 0.8, 0.4);
    k.play('stamp', T('how', 'how') - 0.05, { gain: 0.5 });
    wipe(CUTS.cell);
    popAt(T('cell', 'cell') - 0.15, 560, 0.8, 0, false); k.play('riser', T('apart', 'kept') - 0.2, { dur: 0.6, gain: 0.4 });
    for (let i = 0; i < 6; i++) { popAt(T('apart', 'two') - 0.1 + i * 0.05, 700 + i * 40, 0.5, -0.4); popAt(T('apart', 'chemicals') - 0.1 + i * 0.05, 900 + i * 40, 0.5, 0.4); }
    popAt(T('apart', 'apart') - 0.15, 520, 0.8, 0, false); k.play('thud', T('apart', 'apart'), { f: 160, gain: 0.4 });
    popAt(T('sulfur', 'sulfur') - 0.15, 600, 0.9, -0.4, false); k.play('ding', T('sulfur', 'sulfur'), { f: 'D5', gain: 0.3, pan: -0.4 });
    popAt(T('enzyme', 'enzyme') - 0.15, 700, 0.9, 0.4, false); k.play('ding', T('enzyme', 'enzyme'), { f: 'A5', gain: 0.3, pan: 0.4 });
    wipe(CUTS.knife);
    k.play('swish', T('knife', 'smashes') - 0.25, { gain: 0.8 }); k.play('impact', T('knife', 'smashes'), { gain: 1.0 }); k.play('thud', T('knife', 'smashes'), { f: 110, gain: 0.7 });
    k.play('paper', T('knife', 'walls') - 0.1, { dur: 0.5, gain: 0.7 }); k.noise(T('mix', 'they') - 0.2, { dur: 1.0, color: 'brown', filter: 'lowpass', f: [[0, 300], [1, 900]], gain: 0.2, a: 0.2, verb: 0.2 });
    popAt(T('mix', 'mix') - 0.15, 620, 0.9, 0, false); k.play('sparkle', T('mix', 'mix'), { n: 5, gain: 0.5 });
    wipe(CUTS.chem);
    popAt(CUTS.chem + 0.1, 600, 0.7, 0); k.play('riser', T('acid', 'turns') - 0.2, { dur: 1.2, gain: 0.4 });
    popAt(T('acid', 'enzyme') - 0.15, 900, 0.6, -0.4); popAt(T('acid', 'acid') - 0.15, 560, 0.9, 0, false); k.play('ding', T('acid', 'acid'), { f: 'E5', gain: 0.3 });
    popAt(T('second', 'second') - 0.15, 950, 0.6, -0.4); k.play('stamp', T('disc', 'n2002'), { gain: 0.5, pan: 0.4 });
    k.play('riser', T('gas', 'flips') - 0.2, { dur: 1.4, gain: 0.5 }); k.play('impact', T('gas', 'gas'), { gain: 0.9 });
    k.noise(T('gas', 'gas'), { dur: 1.2, color: 'pink', filter: 'bandpass', f: [[0, 800], [1.2, 2800]], q: 1, gain: 0.3, a: 0.05, verb: 0.3 });
    cut(CUTS.rise);
    k.noise(T('drift', 'drifts') - 0.3, { dur: 1.6, color: 'pink', filter: 'bandpass', f: [[0, 500], [1.6, 2000]], q: 1, gain: 0.2, a: 0.4, verb: 0.3 });
    popAt(T('drift', 'up') - 0.25, 760, 0.7, -0.4, false); popAt(T('peak', 'peaks') - 0.1, 520, 0.8, 0.4, false);
    for (let f = Math.ceil((T('peak', 'peaks') - 0.1) * 12); f < (T('peak', 'n30') + 0.3) * 12; f++) k.play('count', f / 12, { gain: 0.7, minor: true });
    k.play('impact', T('peak', 'n30') + 0.3, { gain: 1.0 }); ['D5', 'F5', 'A5'].forEach((n, i) => k.play('ding', T('peak', 'n30') + 0.3 + i * 0.03, { f: n, gain: 0.3 }));
    popAt(T('peak', 'cut') - 0.15, 700, 0.6, 0.4);
    wipe(CUTS.eye);
    popAt(T('hits', 'hits') - 0.15, 640, 0.8, -0.4, false); k.play('buzz', T('nerves', 'nerves') - 0.1, { f: 110, dur: 0.8, gain: 0.35 });
    k.play('error', T('nerves', 'burning'), { f: 'A3', gain: 0.5 }); k.play('impact', T('nerves', 'burning'), { gain: 0.6 });
    popAt(T('glands', 'glands') - 0.15, 900, 0.7, 0.5, false);
    k.noise(T('glands', 'flood') - 0.2, { dur: 2.2, color: 'brown', filter: 'lowpass', f: [[0, 300], [1, 1100], [2.2, 400]], gain: 0.22, a: 0.3, verb: 0.2 });
    k.play('sparkle', T('wash', 'wash'), { n: 6, gain: 0.6 }); k.play('ding', T('wash', 'away'), { f: 'C6', gain: 0.3 });
    wipe(CUTS.armor);
    popAt(T('why', 'why') - 0.15, 520, 0.9, 0, false); k.play('stamp', T('armor', 'armor'), { gain: 0.6 }); k.play('sparkle', T('armor', 'armor'), { n: 5, gain: 0.5 });
    for (let i = 0; i < 3; i++) k.play('tock', T('animal', 'any') + i * 0.3, { f: 300, gain: 0.4, minor: true });
    popAt(T('animal', 'bites') - 0.15, 700, 0.9, -0.3, false); k.play('thud', T('animal', 'bites'), { f: 180, gain: 0.5 });
    k.play('swish', T('sting', 'gets'), { gain: 0.6, pan: -0.5 }); k.play('error', T('sting', 'sting'), { f: 'E3', gain: 0.4 }); popAt(T('sting', 'face') - 0.15, 600, 0.8, 0, false);
    wipe(CUTS.tip);
    popAt(T('want', 'want') - 0.15, 560, 0.9, 0, false);
    k.noise(T('water', 'running') - 0.3, { dur: 2.0, color: 'pink', filter: 'lowpass', f: [[0, 2200], [2, 1800]], gain: 0.2, a: 0.2, verb: 0.1, pan: 0.3 });
    k.play('stroke', T('water', 'cut'), { material: 'chalk', dur: 0.12, gain: 0.6, minor: true }); popAt(T('water', 'running') - 0.15, 760, 0.8, -0.3, false); k.play('ding', T('water', 'water'), { f: 'G5', gain: 0.3 });
    cut(CUTS.end);
    popAt(T('end', 'would') - 0.15, 520, 0.9, 0, false); popAt(T('end', 'eat') - 0.15, 640, 0.9, 0, false);
    popAt(T('end', 'fights') - 0.15, 760, 0.8, 0, false); k.play('success', T('end', 'gas') + 0.3, { f: 'D6', gain: 0.4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
