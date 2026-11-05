// Flat-Vector Science, vertical 1080x1920: "Why does toast turn brown and taste better?"
(function () {
  const BEATS = [{"id": "hook", "s": 0.25, "e": 7.68, "w": {"you": 0.25, "just": 0.5, "ate": 0.84, "molecules": 1.1, "your": 2.16, "bread": 2.47, "never": 2.87, "had": 3.26, "thats": 4.05, "what": 4.44, "toast": 4.75, "is": 5.14, "so": 5.84, "why": 5.97, "does": 6.17, "it": 6.43, "taste": 6.56, "much": 7.02, "better": 7.29}}, {"id": "ingred", "s": 8.23, "e": 17.92, "w": {"bread": 8.23, "holds": 8.59, "two": 8.95, "key": 9.17, "ingredients": 9.39, "sugars": 10.48, "and": 11.49, "amino": 11.78, "acids": 12.26, "the": 13.04, "building": 13.24, "blocks": 13.77, "of": 14.16, "protein": 14.29, "normally": 15.3, "they": 16.29, "mostly": 16.55, "ignore": 16.94, "each": 17.33, "other": 17.59}}, {"id": "toaster", "s": 18.47, "e": 22.36, "w": {"but": 18.47, "in": 18.69, "the": 18.83, "toaster": 19.05, "dry": 19.86, "heat": 20.09, "drives": 20.39, "water": 20.85, "out": 21.23, "of": 21.45, "surface": 21.83}}, {"id": "temp", "s": 22.91, "e": 27.67, "w": {"then": 22.91, "at": 23.22, "around": 23.37, "a": 23.84, "hundred": 23.92, "and": 24.46, "forty": 24.69, "degrees": 25.07, "celsius": 25.62, "they": 26.46, "start": 26.74, "reacting": 27.1}}, {"id": "maillard", "s": 28.22, "e": 32.21, "w": {"its": 28.22, "called": 28.4, "the": 28.77, "maillard": 28.96, "reaction": 29.45, "first": 30.25, "described": 30.58, "in": 31.17, "nineteen": 31.3, "twelve": 31.82}}, {"id": "flavors", "s": 32.76, "e": 37.26, "w": {"it": 32.76, "builds": 32.91, "hundreds": 33.36, "of": 33.96, "new": 34.11, "flavor": 34.34, "molecules": 34.79, "nutty": 35.77, "roasty": 36.2, "toasty": 36.73}}, {"id": "brown", "s": 37.81, "e": 42.39, "w": {"and": 37.81, "the": 38.05, "brown": 38.29, "thats": 39.25, "melanoidins": 39.64, "big": 40.81, "molecules": 41.55}}, {"id": "inside", "s": 42.94, "e": 47.03, "w": {"the": 42.94, "inside": 43.16, "stays": 43.6, "cooler": 43.96, "and": 44.39, "wetter": 44.61, "so": 45.34, "it": 45.51, "soft": 46.1, "pale": 46.69}}, {"id": "burn", "s": 47.58, "e": 50.98, "w": {"push": 47.58, "it": 47.86, "too": 47.99, "far": 48.2, "though": 48.41, "and": 49.13, "burns": 49.47, "to": 49.82, "bitter": 49.95, "black": 50.37, "char": 50.71}}, {"id": "end", "s": 51.53, "e": 55.16, "w": {"so": 51.53, "whats": 51.66, "your": 51.99, "perfect": 52.26, "toast": 52.72, "pale": 53.35, "gold": 53.68, "or": 54.01, "nearly": 54.17, "burned": 54.67}}];
  const W = 1080, HH = 1920;
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = {}; BEATS.slice(1).forEach((b, i) => { CUTS[b.id] = (BEATS[i].e + b.s) / 2; });
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { ink: '#2a1a3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', pink: '#ff6fa3', teal: '#1fb6a6', yellow: '#ffd23f', brown: '#7b4a2d', white: '#ffffff', navy: '#1b2a5c' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 52, padX = size * 0.7, h = size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 16);
    text(ctx, s, 0, 2, size, o.col || PAL.ink); ctx.restore();
  };
  const head = (ctx, s, x, y, size, col, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), 18); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 16, prog = 1) => { if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0); ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke(); ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore(); };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const floor = (ctx, y, c) => { ctx.fillStyle = c; ctx.fillRect(0, y, W, HH - y); };

  // toast colour: 0 pale bread, 1 golden, 2 deep brown, 3 charcoal
  const STOPS = [['#fff0cf', '#e8c48a'], ['#eeb45a', '#b9772f'], ['#a9622a', '#6d3a18'], ['#2b2320', '#15100e']];
  const toastCol = (c) => { const i = Math.min(2, Math.floor(c)), u = c - i; return [H.rgba(H.mix(STOPS[i][0], STOPS[i + 1][0], u)), H.rgba(H.mix(STOPS[i][1], STOPS[i + 1][1], u))]; };
  const slicePath = (ctx, s) => { ctx.beginPath(); ctx.moveTo(-0.42 * s, 0.5 * s); ctx.lineTo(-0.42 * s, -0.12 * s); ctx.bezierCurveTo(-0.62 * s, -0.2 * s, -0.6 * s, -0.56 * s, -0.25 * s, -0.54 * s); ctx.bezierCurveTo(-0.1 * s, -0.6 * s, 0.1 * s, -0.6 * s, 0.25 * s, -0.54 * s); ctx.bezierCurveTo(0.6 * s, -0.56 * s, 0.62 * s, -0.2 * s, 0.42 * s, -0.12 * s); ctx.lineTo(0.42 * s, 0.5 * s); ctx.quadraticCurveTo(0.42 * s, 0.56 * s, 0.36 * s, 0.56 * s); ctx.lineTo(-0.36 * s, 0.56 * s); ctx.quadraticCurveTo(-0.42 * s, 0.56 * s, -0.42 * s, 0.5 * s); ctx.closePath(); };
  const slice = (ctx, x, y, s, c, o = {}) => {
    const [face, crust] = toastCol(c);
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0);
    longShadow(ctx, (col) => { slicePath(ctx, s); ctx.fillStyle = col || crust; ctx.fill(); }, o.sh ?? 24);
    ctx.save(); ctx.scale(0.87, 0.87); ctx.translate(0, s * 0.01); slicePath(ctx, s); ctx.fillStyle = face; ctx.fill(); ctx.restore();
    if (c > 0.3) { const r = H.rng(11); ctx.fillStyle = H.rgba(crust, Math.min(0.55, c * 0.35)); for (let i = 0; i < 16; i++) { const sx = r.range(-0.28, 0.28), sy = r.range(-0.36, 0.42); if (o.face && Math.abs(sy + 0.02) < 0.17 && Math.abs(sx) < 0.26) { r(); r(); r(); continue; } ctx.beginPath(); ctx.ellipse(sx * s, sy * s, r.range(0.02, 0.05) * s, r.range(0.012, 0.03) * s, r() * 3, 0, 7); ctx.fill(); } }
    if (o.face) { const ey = -0.08 * s, ec = c > 2.4 ? '#fff' : PAL.ink; circle(ctx, -0.14 * s, ey, 0.03 * s, ec); circle(ctx, 0.14 * s, ey, 0.03 * s, ec); ctx.strokeStyle = ec; ctx.lineWidth = 0.016 * s; ctx.lineCap = 'round'; ctx.beginPath(); if (o.face === 'sad') ctx.arc(0, 0.1 * s, 0.07 * s, Math.PI * 1.15, Math.PI * 1.85); else ctx.arc(0, 0.01 * s, 0.08 * s, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke(); }
    ctx.restore();
  };
  // molecules
  const hexPath = (ctx, r) => { ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 - Math.PI / 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); };
  const eyes = (ctx, s, look = 0, mouth = 'smile') => { circle(ctx, -s * 0.3, -s * 0.1, s * 0.2, '#fff'); circle(ctx, s * 0.3, -s * 0.1, s * 0.2, '#fff'); circle(ctx, -s * 0.3 + look * s * 0.09, -s * 0.1, s * 0.1, PAL.ink); circle(ctx, s * 0.3 + look * s * 0.09, -s * 0.1, s * 0.1, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = s * 0.06; ctx.lineCap = 'round'; ctx.beginPath(); if (mouth === 'flat') { ctx.moveTo(-s * 0.15, s * 0.3); ctx.lineTo(s * 0.15, s * 0.3); } else ctx.arc(0, s * 0.18, s * 0.17, 0.2, Math.PI - 0.2); ctx.stroke(); };
  const sugar = (ctx, x, y, r, o = {}) => { ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); longShadow(ctx, (c) => { hexPath(ctx, r); ctx.fillStyle = c || PAL.pink; ctx.fill(); }, o.sh ?? 16); if (o.face) { ctx.rotate(-(o.rot || 0)); eyes(ctx, r * 0.8, o.look || 0, o.mouth); } ctx.restore(); };
  const amino = (ctx, x, y, r, o = {}) => { ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); const dots = [[-r * 1.3, 0, r * 0.42], [r * 1.3, 0, r * 0.42], [0, 0, r * 0.82]]; longShadow(ctx, (c) => { ctx.fillStyle = c || '#2b86cf'; ctx.fillRect(-r * 1.3, -r * 0.12, r * 2.6, r * 0.24); dots.forEach(([a, b, q], i) => circle(ctx, a, b, q, c || (i < 2 ? '#2b86cf' : PAL.blue))); }, o.sh ?? 16); if (o.face) { ctx.rotate(-(o.rot || 0)); eyes(ctx, r * 0.75, o.look || 0, o.mouth); } ctx.restore(); };
  const flavor = (ctx, x, y, r, seed, rot = 0) => { const q = H.rng(seed), cols = ['#ffd23f', '#ff7a3d', '#1fb6a6', '#ff6fa3', '#fff6e6']; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); const n = 3 + (seed % 3), base = cols[seed % 5]; ctx.strokeStyle = PAL.ink; ctx.lineWidth = r * 0.22; for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2 + q(); const dx = Math.cos(a) * r * 1.2, dy = Math.sin(a) * r * 1.2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(dx, dy); ctx.stroke(); circle(ctx, dx, dy, r * 0.55, cols[(seed + i + 1) % 5]); } circle(ctx, 0, 0, r * 0.75, base); ctx.restore(); };
  const melanoidin = (ctx, x, y, s, t, seed) => { const q = H.rng(seed), pts = []; let a = q() * 6, px = 0, py = 0; for (let i = 0; i < 9; i++) { pts.push([px, py]); a += q.range(-1.1, 1.1); px += Math.cos(a) * s * 0.9; py += Math.sin(a) * s * 0.9; } const cx = pts.reduce((m, p) => m + p[0], 0) / 9, cy = pts.reduce((m, p) => m + p[1], 0) / 9; ctx.save(); ctx.translate(x - cx, y - cy + Math.sin(t * 2 + seed) * 8); ctx.strokeStyle = '#fff6e6'; ctx.lineWidth = s * 1.3; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach(([u, v]) => ctx.lineTo(u, v)); ctx.stroke(); ctx.strokeStyle = '#4a2a14'; ctx.lineWidth = s * 0.5; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach(([u, v]) => ctx.lineTo(u, v)); ctx.stroke(); pts.forEach(([u, v], i) => circle(ctx, u, v, s * 0.5, i % 2 ? '#4a2a14' : '#6d3a18')); ctx.restore(); };
  const thermo = (ctx, x, y, hgt, level, col) => { longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, x - 46, y - hgt, 92, hgt + 20, 46); ctx.fill(); circle(ctx, x, y + 50, 80, c || PAL.cream); }, 22); ctx.fillStyle = col; rr(ctx, x - 24, y - (hgt - 30) * level, 48, (hgt - 30) * level + 30, 24); ctx.fill(); circle(ctx, x, y + 50, 58, col); ctx.fillStyle = PAL.ink; for (let i = 1; i <= 8; i++) ctx.fillRect(x + 56, y - (hgt - 30) * i / 8, i % 2 ? 16 : 30, 6); };
  const steam = (ctx, x, y, t, col, n = 3, h0 = 220) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 16; ctx.lineCap = 'round'; for (let i = 0; i < n; i++) { const off = (i - (n - 1) / 2) * 90; ctx.beginPath(); for (let u = 0; u <= 1; u += 0.1) ctx.lineTo(x + off + Math.sin(u * 6 + t * 3 + i) * 22, y - u * h0); ctx.stroke(); } ctx.restore(); };

  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#ffe2a8', '#ffb65c'); floor(ctx, 1380, '#e8884a'); ctx.fillStyle = '#d4733a'; ctx.fillRect(0, 1380, W, 26);
    const cook = EI(t, 1.0, 3.2);
    const y = 1080 + Math.sin(t * 2) * 8;
    slice(ctx, 540, y, 620, cook * 1.15, { face: 'smile' });
    // new molecules fly off the toast from "molecules"
    const tm = T('hook', 'molecules') - 0.15; const r = H.rng(5);
    for (let i = 0; i < 11; i++) { const a = -Math.PI * 0.92 + i / 10 * Math.PI * 0.84, d0 = r.range(450, 520), st = tm + i * 0.05, u = EO(t, st, st + 0.6); if (u <= 0) continue; flavor(ctx, 540 + Math.cos(a) * d0 * u, y - 20 + Math.sin(a) * d0 * u * 0.95 + Math.sin(t * 2 + i) * 8, 26 + (i % 3) * 7, i + 2, t * 0.5 + i); }
    head(ctx, 'NEW MOLECULES', 540, 310, 106, PAL.ink, pop(t, tm, T('hook', 'thats') - 0.2));
    pill(ctx, 'NOT IN YOUR BREAD', 540, 440, { k: pop(t, T('hook', 'bread') - 0.1, T('hook', 'thats') - 0.2), bg: PAL.red, col: PAL.white, size: 56 });
    head(ctx, "THAT'S TOAST", 540, 330, 126, PAL.orange, pop(t, T('hook', 'thats') - 0.05));
    pill(ctx, 'WHY SO TASTY?', 540, 1560, { k: pop(t, T('hook', 'why') - 0.1) * bump(t, T('hook', 'better')), bg: PAL.ink, col: PAL.cream, size: 72 });
  };
  S.ingred = (ctx, t) => {
    sky(ctx, '#bfe8ff', '#6fc3f2'); floor(ctx, 1500, '#4aa3d8');
    const a = T('ingred', 'bread'), ig = T('ingred', 'normally');
    // bread background shape behind a lens: bread texture circle
    const lens = EO(t, a - 0.1, a + 0.5) * 470;
    longShadow(ctx, (c) => circle(ctx, 540, 860, lens, c || '#fff0cf'), 30);
    if (lens > 20) { ctx.save(); ctx.beginPath(); ctx.arc(540, 860, lens - 6, 0, 7); ctx.clip(); const r = H.rng(8); ctx.fillStyle = '#f2dcae'; for (let i = 0; i < 40; i++) { ctx.beginPath(); ctx.ellipse(r.range(80, 1000), r.range(400, 1320), r.range(8, 34), r.range(6, 22), r() * 3, 0, 7); ctx.fill(); } ctx.restore(); }
    head(ctx, 'INSIDE BREAD', 540, 270, 104, PAL.ink, pop(t, a - 0.05));
    const sk = pop(t, T('ingred', 'sugars') - 0.15), ak = pop(t, T('ingred', 'amino') - 0.15);
    const apart = EI(t, ig - 0.1, ig + 0.5), fx = 290 - 30 * apart, ax = 790 + 30 * apart;
    const look = apart > 0.2 ? 1 : 0;
    if (sk > 0.01) { ctx.save(); ctx.translate(fx, 800); ctx.scale(sk, sk); sugar(ctx, 0, 0, 165, { face: true, look: -look, mouth: apart > 0.2 ? 'flat' : 'smile', rot: Math.sin(t) * 0.06 }); ctx.restore(); }
    if (ak > 0.01) { ctx.save(); ctx.translate(ax, 800); ctx.scale(ak, ak); amino(ctx, 0, 0, 130, { face: true, look, mouth: apart > 0.2 ? 'flat' : 'smile', rot: Math.sin(t + 1) * 0.06 }); ctx.restore(); }
    pill(ctx, 'SUGARS', 275, 1050, { k: sk, bg: PAL.pink, col: PAL.white, size: 60 });
    pill(ctx, 'AMINO ACIDS', 750, 1050, { k: ak, bg: PAL.blue, col: PAL.white, size: 60 });
    // building blocks: protein as blocks stacking
    const bk = pop(t, T('ingred', 'building') - 0.15, ig - 0.3);
    if (bk > 0.01) { ctx.save(); ctx.translate(790, 1220); ctx.scale(bk, bk); for (let i = 0; i < 5; i++) { const u = EO(t, T('ingred', 'building') + i * 0.14, T('ingred', 'building') + i * 0.14 + 0.25); circle(ctx, -176 + i * 88, 0, 42 * u, i % 2 ? PAL.blue : '#2b86cf'); } ctx.restore(); }
    pill(ctx, 'BUILD PROTEIN', 790, 1370, { k: pop(t, T('ingred', 'protein') - 0.15, ig - 0.3), size: 50 });
    pill(ctx, 'NORMALLY: NOTHING', 540, 1300, { k: pop(t, T('ingred', 'normally') - 0.05), bg: PAL.ink, col: PAL.cream, size: 62 });
    head(ctx, '...', 540, 760, 120, PAL.ink, pop(t, T('ingred', 'ignore') - 0.15));
  };
  const toaster = (ctx, x, y, glow) => { longShadow(ctx, (c) => { ctx.fillStyle = c || '#c7d2de'; rr(ctx, x - 390, y - 380, 780, 500, 90); ctx.fill(); }, 34); ctx.fillStyle = '#a6b4c3'; rr(ctx, x - 390, y + 40, 780, 80, 40); ctx.fill(); ctx.fillStyle = '#3b3550'; rr(ctx, x - 300, y - 300, 600, 300, 34); ctx.fill(); for (let i = 0; i < 6; i++) { ctx.fillStyle = H.rgba(H.mix('#5a4a55', '#ff4d1f', glow), 1); rr(ctx, x - 262 + i * 92, y - 280, 26, 260, 13); ctx.fill(); } ctx.fillStyle = PAL.ink; rr(ctx, x + 396, y - 200, 38, 150, 18); ctx.fill(); };
  S.toaster = (ctx, t) => {
    sky(ctx, '#ffb199', '#ff6a55'); floor(ctx, 1420, '#c23c3c');
    const glow = EO(t, T('toaster', 'dry') - 0.8, T('toaster', 'heat'));
    const y = 1240;
    toaster(ctx, 540, y, glow);
    slice(ctx, 540, y - 150, 330, EI(t, T('toaster', 'dry'), B.toaster.e) * 0.6, { sh: 0 });
    // heat arrows inward
    const hk = EO(t, T('toaster', 'dry') - 0.15, T('toaster', 'heat') + 0.1);
    [-1, 1].forEach((d) => [0, 1, 2].forEach((i) => arrow(ctx, 540 + d * 290, y - 250 + i * 90, 540 + d * 180, y - 250 + i * 90, PAL.yellow, 14, hk)));
    // water drops leave the surface, upwards
    const w0 = T('toaster', 'water') - 0.15; const r = H.rng(4);
    for (let i = 0; i < 14; i++) { const st = w0 + i * 0.1, u = (t - st) / 1.3; if (u <= 0) continue; const f = (u % 1), x = 540 + r.range(-170, 170) + Math.sin(f * 8 + i) * 18, yy = y - 280 - f * 460, a = 1 - f; ctx.fillStyle = H.rgba(PAL.blue, a); ctx.beginPath(); ctx.arc(x, yy, 22, 0, 7); ctx.fill(); ctx.beginPath(); ctx.moveTo(x - 18, yy - 12); ctx.lineTo(x, yy - 46); ctx.lineTo(x + 18, yy - 12); ctx.fill(); }
    head(ctx, 'DRY HEAT', 540, 290, 132, PAL.cream, pop(t, T('toaster', 'dry') - 0.15));
    pill(ctx, 'WATER OUT', 540, 440, { k: pop(t, T('toaster', 'water') - 0.15), bg: PAL.blue, col: PAL.white, size: 62 });
  };
  S.temp = (ctx, t) => {
    sky(ctx, '#3b2a6b', '#d9476a'); floor(ctx, 1500, '#2a1f4d');
    const c0 = T('temp', 'then'), c1 = T('temp', 'forty') + 0.2; const lv = EI(t, c0, c1), deg = Math.round(25 + lv * 115);
    thermo(ctx, 210, 1200, 760, lv * 0.92, H.rgba(H.mix('#3fa9f5', '#ef4a4a', lv)));
    head(ctx, `${deg}°C`, 660, 330, 190, deg >= 140 ? PAL.yellow : PAL.cream, pop(t, c0 - 0.1) * bump(t, c1));
    pill(ctx, `ABOUT ${Math.round(deg * 9 / 5 + 32)}°F`, 660, 490, { k: pop(t, c1 - 0.05), size: 52 });
    const go = T('temp', 'they') - 0.05, u = EI(t, go, T('temp', 'reacting')), mx = 660;
    sugar(ctx, H.lerp(mx - 220, mx - 120, u), 960, 110, { face: true, look: 1, rot: 0, mouth: 'smile' });
    amino(ctx, H.lerp(mx + 240, mx + 130, u), 960, 80, { face: true, look: -1, rot: 0, mouth: 'smile' });
    const hit = T('temp', 'reacting'); const b = ph(t, hit, hit + 0.5);
    if (b > 0 && b < 1 || t > hit) { const q = H.rng(2); for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283, d = 110 + b * 180 + 12 * Math.sin(t * 3 + i); ctx.fillStyle = i % 2 ? PAL.yellow : PAL.orange; ctx.beginPath(); ctx.arc(mx + Math.cos(a) * d, 960 + Math.sin(a) * d, 14 + q() * 12, 0, 7); ctx.fill(); } }
    pill(ctx, 'REACTION STARTS!', 650, 1290, { k: pop(t, hit - 0.15), bg: PAL.orange, col: PAL.white, size: 58 });
  };
  S.maillard = (ctx, t) => {
    sky(ctx, '#d6f5e6', '#7fd6b4'); floor(ctx, 1450, '#46b48b');
    const a = T('maillard', 'maillard') - 0.15;
    head(ctx, 'THE', 540, 330, 80, PAL.ink, pop(t, a - 0.2));
    head(ctx, 'MAILLARD', 540, 460, 170, PAL.orange, pop(t, a));
    head(ctx, 'REACTION', 540, 620, 130, PAL.ink, pop(t, T('maillard', 'reaction') - 0.15));
    pill(ctx, 'SAY: MY-YAR', 540, 770, { k: pop(t, a + 0.5), size: 50 });
    // old journal page with the year
    const pk = pop(t, T('maillard', 'first') - 0.15);
    if (pk > 0.01) { ctx.save(); ctx.translate(540, 1170); ctx.rotate(-0.04); ctx.scale(pk, pk); longShadow(ctx, (c) => { ctx.fillStyle = c || '#fff6e6'; rr(ctx, -290, -300, 580, 600, 26); ctx.fill(); }, 30); ctx.fillStyle = '#e0d2b6'; for (let i = 0; i < 4; i++) { rr(ctx, -220, -240 + i * 56, i === 3 ? 260 : 440, 22, 11); ctx.fill(); } const yk = pop(t, T('maillard', 'nineteen') - 0.1); ctx.save(); ctx.translate(0, 110); ctx.rotate(0.08); ctx.scale(yk, yk); text(ctx, '1912', 0, 0, 190, PAL.red); ctx.restore(); ctx.restore(); }
  };
  S.flavors = (ctx, t) => {
    sky(ctx, '#ffd98a', '#ff8f4a'); floor(ctx, 1460, '#d9642f');
    const y = 1240; slice(ctx, 540, y, 460, 1.25, { face: 'smile' });
    const st = T('flavors', 'builds') - 0.15, q = H.rng(21), N = 34, grow = EO(t, st, T('flavors', 'molecules') + 0.4);
    for (let i = 0; i < Math.floor(N * grow); i++) { const x = q.range(90, 990), yy = q.range(470, 960), s = q.range(26, 44); flavor(ctx, x + Math.sin(t + i) * 10, yy + Math.cos(t * 1.2 + i) * 10, s, i + 3, t * 0.3 + i); }
    head(ctx, 'HUNDREDS', 540, 290, 150, PAL.ink, pop(t, T('flavors', 'hundreds') - 0.15));
    pill(ctx, 'OF NEW FLAVORS', 540, 420, { k: pop(t, T('flavors', 'flavor') - 0.15), bg: PAL.red, col: PAL.white, size: 58 });
    pill(ctx, 'NUTTY', 240, 800, { k: pop(t, T('flavors', 'nutty') - 0.12), bg: PAL.teal, col: PAL.white, size: 66 });
    pill(ctx, 'ROASTY', 760, 640, { k: pop(t, T('flavors', 'roasty') - 0.12), bg: PAL.brown, col: PAL.white, size: 66 });
    pill(ctx, 'TOASTY', 700, 930, { k: pop(t, T('flavors', 'toasty') - 0.12), bg: PAL.orange, col: PAL.white, size: 66 });
  };
  S.brown = (ctx, t) => {
    sky(ctx, '#fff0d4', '#f0c98f'); floor(ctx, 1500, '#d9a764');
    const a = T('brown', 'melanoidins') - 0.2, br = EI(t, T('brown', 'brown') - 0.3, T('brown', 'big') + 0.4);
    slice(ctx, 540, 1040, 760, 0.3 + br * 1.45, {});
    head(ctx, 'THE BROWN?', 540, 300, 128, PAL.brown, pop(t, T('brown', 'brown') - 0.15, a - 0.2));
    head(ctx, 'MELANOIDINS', 540, 300, 128, PAL.brown, pop(t, a));
    const big = T('brown', 'big') - 0.15, pos = [[370, 880, 44, 3], [700, 830, 38, 9], [430, 1180, 40, 14], [710, 1170, 46, 21]];
    pos.forEach(([x, y, s, sd], i) => { const k = pop(t, big + i * 0.16); if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); melanoidin(ctx, 0, 0, s, t, sd); ctx.restore(); });
    pill(ctx, 'BIG BROWN MOLECULES', 540, 450, { k: pop(t, big), bg: PAL.ink, col: PAL.cream, size: 54 });
  };
  S.inside = (ctx, t) => {
    sky(ctx, '#d9d4ff', '#9a8df0'); floor(ctx, 1500, '#6f60cf');
    const a = T('inside', 'inside') - 0.15, x = 540, y = 960, ww = 860, hh = 420;
    // cross-section: a thick slab, surfaces brown, middle pale
    const k = EO(t, a - 0.1, a + 0.45);
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#a9622a'; rr(ctx, -ww / 2, -hh / 2, ww, hh, 44); ctx.fill(); }, 28);
    ctx.fillStyle = '#d99c4e'; rr(ctx, -ww / 2 + 16, -hh / 2 + 26, ww - 32, hh - 52, 30); ctx.fill();
    ctx.fillStyle = '#fff0cf'; rr(ctx, -ww / 2 + 26, -hh / 2 + 56, ww - 52, hh - 112, 26); ctx.fill();
    const r = H.rng(6); ctx.fillStyle = '#f0dcb0'; for (let i = 0; i < 26; i++) { ctx.beginPath(); ctx.ellipse(r.range(-370, 370), r.range(-110, 110), r.range(8, 24), r.range(6, 15), r() * 3, 0, 7); ctx.fill(); }
    ctx.restore();
    pill(ctx, 'BROWN CRUST', 540, y - 300, { k: pop(t, a + 0.1), bg: PAL.brown, col: PAL.white, size: 54 });
    head(ctx, 'INSIDE', 540, 340, 140, PAL.ink, pop(t, a));
    pill(ctx, 'COOLER', 300, y, { k: pop(t, T('inside', 'cooler') - 0.15), bg: PAL.blue, col: PAL.white, size: 62 });
    pill(ctx, 'WETTER', 780, y, { k: pop(t, T('inside', 'wetter') - 0.15), bg: PAL.teal, col: PAL.white, size: 62 });
    pill(ctx, 'SOFT + PALE', 540, y + 340, { k: pop(t, T('inside', 'soft') - 0.15), size: 72 });
  };
  S.burn = (ctx, t) => {
    sky(ctx, '#4a3a3a', '#1a1214'); floor(ctx, 1500, '#100b0c');
    const a = T('burn', 'push') - 0.1, u = EI(t, a, T('burn', 'char') + 0.1), c = 1.3 + u * 1.7;
    const y = 1040; if (u > 0.3) steam(ctx, 540, y - 400, t, H.rgba('#9a9090', Math.min(0.75, u)), 4, 340);
    slice(ctx, 540, y, 700, c, { face: u > 0.5 ? 'sad' : 'smile', sh: 30 });
    head(ctx, 'TOO FAR', 540, 300, 136, PAL.red, pop(t, T('burn', 'far') - 0.15, T('burn', 'burns') - 0.1));
    head(ctx, 'BURNED', 540, 300, 150, PAL.orange, pop(t, T('burn', 'burns') - 0.1));
    pill(ctx, 'BITTER', 280, 1480, { k: pop(t, T('burn', 'bitter') - 0.15), bg: PAL.yellow, size: 66 });
    pill(ctx, 'BLACK CHAR', 730, 1480, { k: pop(t, T('burn', 'black') - 0.15), bg: PAL.cream, size: 62 });
  };
  S.end = (ctx, t) => {
    sky(ctx, '#ffe2a8', '#ffb65c'); floor(ctx, 1440, '#e8884a');
    head(ctx, 'YOUR PERFECT', 540, 300, 118, PAL.ink, pop(t, T('end', 'whats') - 0.15));
    head(ctx, 'TOAST?', 540, 440, 156, PAL.orange, pop(t, T('end', 'toast') - 0.2) * bump(t, T('end', 'toast')));
    const items = [[210, 0.7, 'pale'], [540, 1.5, 'gold'], [870, 2.6, 'burned']];
    const ks = [pop(t, T('end', 'pale') - 0.15), pop(t, T('end', 'nearly') - 0.5), pop(t, T('end', 'burned') - 0.25)];
    items.forEach(([x, c], i) => { if (ks[i] <= 0.01) return; ctx.save(); ctx.translate(x, 1040); ctx.scale(ks[i], ks[i]); slice(ctx, 0, 0, 300, c, { face: i === 2 ? 'sad' : 'smile', sh: 16 }); ctx.restore(); });
    pill(ctx, 'PALE GOLD', 240, 1300, { k: ks[0], bg: PAL.yellow, size: 54 });
    pill(ctx, 'NEARLY BURNED', 690, 1300, { k: ks[2], bg: PAL.ink, col: PAL.cream, size: 54 });
    pill(ctx, 'TELL ME BELOW', 540, 1500, { k: pop(t, T('end', 'burned') + 0.3), bg: PAL.red, col: PAL.white, size: 62 });
  };

  const ORDER = BEATS.map((b, i) => [b.id, i ? CUTS[b.id] : 0]); const WIPE = 0.5;
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] - WIPE / 2) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    if (next && t >= next[1] - WIPE / 2) {
      const u = H.ease.inOut(ph(t, next[1] - WIPE / 2, next[1] + WIPE / 2));
      if (u < 1) S[cur[0]](ctx, t);
      ctx.save(); ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.clip(); S[next[0]](ctx, t); ctx.restore();
      if (u > 0 && u < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.stroke(); }
    } else S[cur[0]](ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.abs(n); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.3, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    k.play('sparkle', T('hook', 'molecules'), { n: 6, gain: 0.6 }); popAt(T('hook', 'molecules') - 0.15, 520, 0.9, 0, false); popAt(T('hook', 'bread') - 0.1, 700, 0.7);
    popAt(T('hook', 'thats') - 0.05, 560, 0.9, 0, false); popAt(T('hook', 'why') - 0.1, 760, 0.7);
    wipe(CUTS.ingred); popAt(T('ingred', 'sugars') - 0.15, 620, 0.9, -0.4, false); popAt(T('ingred', 'amino') - 0.15, 720, 0.9, 0.4, false);
    for (let i = 0; i < 5; i++) k.play('tock', T('ingred', 'building') + i * 0.14, { f: 380 + i * 40, gain: 0.35, pan: 0.3, minor: true });
    k.play('error', T('ingred', 'ignore'), { f: 'A3', gain: 0.25 });
    wipe(CUTS.toaster); k.play('riser', T('toaster', 'dry') - 0.6, { dur: 0.9, gain: 0.45 }); popAt(T('toaster', 'dry') - 0.15, 480, 0.9, 0, false);
    k.noise(T('toaster', 'water') - 0.1, { dur: 1.3, color: 'pink', filter: 'bandpass', f: [[0, 1200], [1.3, 3800]], q: 1.1, gain: 0.18, a: 0.2 });
    wipe(CUTS.temp); const c0 = T('temp', 'then'), c1 = T('temp', 'forty') + 0.2;
    for (let f = Math.ceil(c0 * 12); f < c1 * 12; f += 2) k.play('tick', f / 12, { f: 3200, gain: 0.7, minor: true });
    k.play('ding', c1, { f: 'A5', gain: 0.35 }); k.play('impact', T('temp', 'reacting'), { gain: 0.9 }); k.play('sparkle', T('temp', 'reacting'), { n: 8, gain: 0.7 });
    wipe(CUTS.maillard); popAt(T('maillard', 'maillard') - 0.15, 540, 0.9, 0, false); k.play('paper', T('maillard', 'first') - 0.15, { dur: 0.6, gain: 0.8 }); k.play('stamp', T('maillard', 'nineteen') - 0.05, { gain: 0.5 });
    wipe(CUTS.flavors); k.play('riser', T('flavors', 'builds'), { dur: 1.6, gain: 0.35 }); k.play('impact', T('flavors', 'hundreds') - 0.1, { gain: 0.7 });
    [['nutty', 620, -0.4], ['roasty', 740, 0.4], ['toasty', 880, 0.2]].forEach(([w, f, p]) => { popAt(T('flavors', w) - 0.12, f, 0.9, p, false); k.play('ding', T('flavors', w), { f: f * 2, gain: 0.22, pan: p }); });
    wipe(CUTS.brown); popAt(T('brown', 'melanoidins') - 0.2, 480, 0.9, 0, false); [0, 1, 2, 3].forEach((i) => popAt(T('brown', 'big') - 0.15 + i * 0.16, 420 + i * 60, 0.6));
    wipe(CUTS.inside); popAt(T('inside', 'cooler') - 0.15, 640, 0.8, -0.4, false); popAt(T('inside', 'wetter') - 0.15, 720, 0.8, 0.4, false); k.play('ding', T('inside', 'soft'), { f: 'E5', gain: 0.3 });
    wipe(CUTS.burn); k.noise(T('burn', 'burns') - 0.5, { dur: 1.6, color: 'pink', filter: 'bandpass', f: [[0, 700], [1.6, 2600]], q: 0.9, gain: 0.16, a: 0.3 }); k.play('thud', T('burn', 'char'), { f: 120, gain: 0.5 }); k.play('buzz', T('burn', 'char') + 0.02, { f: 98, dur: 0.3, gain: 0.35 });
    wipe(CUTS.end); popAt(T('end', 'toast') - 0.2, 560, 0.9, 0, false); popAt(T('end', 'pale') - 0.15, 640, 0.8, -0.5, false); popAt(T('end', 'nearly') - 0.5, 720, 0.8, 0, false); popAt(T('end', 'burned') - 0.25, 480, 0.9, 0.5, false); k.play('success', T('end', 'burned') + 0.4, { f: 'C6', gain: 0.4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
