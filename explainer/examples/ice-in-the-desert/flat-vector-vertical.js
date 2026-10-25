// ================= Flat-Vector Science, vertical 1080x1920: "How did ancient people keep ice all summer?" =================
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: timing from the recorded voiceover (voice.mp3) ----------
  const BEATS = [
    { id: 'hook',    s: 0.04,  e: 3.53,  w: { ice: 1.19, summer: 1.62, desert: 3.22 } },
    { id: 'persia',  s: 4.69,  e: 10.71, w: { persia: 5.37, two: 6.12, ago: 7.31, built: 8.49, yakhchal: 9.03, icepit: 10.25 } },
    { id: 'qanat',   s: 11.62, e: 16.09, w: { underground: 11.62, canals: 12.4, qanats: 13.25, mountain: 14.17, water: 14.74, sand: 15.81 } },
    { id: 'winter',  s: 16.95, e: 24.68, w: { winter: 17.1, flooded: 18.15, pools: 19.21, wall: 20.41, sun: 21.76, morning: 23.07, ice: 24.36 } },
    { id: 'harvest', s: 25.52, e: 30.96, w: { workers: 25.52, cut: 26.01, blocks: 26.63, stacked: 27.25, pit: 28.5, five: 29.3, meters: 30.53 } },
    { id: 'insul',   s: 31.69, e: 36.65, w: { straw: 31.69, layers: 32.65, walls: 33.91, sarooj: 34.49, two: 35.49, thick: 36.23 } },
    { id: 'air',     s: 37.46, e: 42.79, w: { dome: 38.15, hot: 38.9, top: 40.62, cold: 41.22, ice: 42.57 } },
    { id: 'summer',  s: 43.6,  e: 49.06, w: { summer: 43.6, forty: 44.97, outside: 45.86, ice: 46.82, inside: 47.13, season: 48.04 } },
    { id: 'end',     s: 49.8,  e: 55.03, w: { no: 49.8, shade: 51.73, straw: 52.19, walls: 53.1, airflow: 54.39 } },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scene boundaries (circle wipes centred on these times)
  const CUTS = { persia: B.persia.s - 0.35, qanat: B.qanat.s - 0.4, winter: B.winter.s - 0.4, harvest: B.harvest.s - 0.4, insul: B.insul.s - 0.35, air: B.air.s - 0.35, summer: B.summer.s - 0.15, end: B.end.s - 0.3 };

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', sand: '#f2c66d', sand2: '#e4a94c', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', ice: '#cfeeff', teal: '#1fb6a6', brown: '#7b4a2d', straw: '#f1c232', white: '#ffffff' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  // long shadow: the flat style's signature. Draws fn() several times offset down-right in a dark tint, then fn() itself.
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); ctx.globalCompositeOperation = 'source-over'; fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center', font = 'Fredoka') => { ctx.save(); ctx.font = `${weight} ${size}px "${font}"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  // label pill with long shadow, scaled by k (pop-in)
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 44, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700);
    ctx.restore();
  };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 14, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const sun = (ctx, x, y, r, col = '#ffd23f', rays = true, t = 0) => { if (rays) { ctx.save(); ctx.fillStyle = 'rgba(255,220,100,0.35)'; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2 + t * 0.15; ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, r * 2.2, a, a + 0.16); ctx.closePath(); ctx.fill(); } ctx.restore(); } longShadow(ctx, (c) => circle(ctx, x, y, r, c || col), 30); };
  const dunes = (ctx, t, y0, cols) => { cols.forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(0, HH); ctx.lineTo(0, y0 + i * 120); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, y0 + i * 120 + Math.sin(x * 0.006 + i * 2 + 0.5) * 60 + Math.sin(x * 0.015 + i) * 25); ctx.lineTo(W, HH); ctx.closePath(); ctx.fill(); }); };
  const header = (ctx, t) => { // small persistent header once the hook is over
    const k = EO(t, B.hook.e + 0.3, B.hook.e + 0.8); if (k <= 0) return;
    ctx.save(); ctx.globalAlpha = k; pill(ctx, 'ICE IN THE DESERT?', 540, 110, { size: 40, bg: PAL.ink, col: PAL.cream, sh: 10 }); ctx.restore();
  };
  // a flat dome (yakhchal) drawn as stacked bands; prog builds it bottom-up
  const dome = (ctx, x, baseY, wdt, hgt, prog = 1, cutaway = false, colA = '#d9a066', colB = '#c88a4e') => {
    const n = 14; const built = Math.floor(prog * n + 1e-6);
    for (let i = 0; i < built; i++) {
      const u0 = i / n, u1 = (i + 1) / n, wa = wdt * Math.pow(1 - u0, 0.8), wb = wdt * Math.pow(1 - u1, 0.8), ya = baseY - u0 * hgt, yb = baseY - u1 * hgt;
      ctx.fillStyle = i % 2 ? colA : colB; ctx.beginPath(); ctx.moveTo(x - wa / 2, ya); ctx.lineTo(x + wa / 2, ya); ctx.lineTo(x + wb / 2, yb); ctx.lineTo(x - wb / 2, yb); ctx.closePath(); ctx.fill();
    }
    if (cutaway && built > 2) { // inner hollow
      ctx.fillStyle = '#5c3a22'; ctx.beginPath(); ctx.moveTo(x - wdt * 0.36, baseY); for (let i = 0; i <= 10; i++) { const u = i / 10; ctx.lineTo(x - wdt * 0.36 * (1 - u * u), baseY - u * hgt * 0.78); } for (let i = 10; i >= 0; i--) { const u = i / 10; ctx.lineTo(x + wdt * 0.36 * (1 - u * u), baseY - u * hgt * 0.78); } ctx.closePath(); ctx.fill(); }
  };
  const pitStack = (ctx, x, y, wdt, dep, prog, strawProg = 0) => { // blocks of ice in a pit, with straw between rows
    const rows = 6, cols = 5, bw = wdt / cols, bh = dep / rows, n = Math.floor(prog * rows * cols + 1e-6);
    for (let i = 0; i < n; i++) { const r = Math.floor(i / cols), c = i % cols; ctx.fillStyle = (r + c) % 2 ? PAL.ice : '#9fdcff'; rr(ctx, x - wdt / 2 + c * bw + 3, y - (r + 1) * bh + 3, bw - 6, bh - 6, 8); ctx.fill(); }
    const sn = Math.floor(strawProg * (rows - 1) + 1e-6);
    for (let r = 1; r <= sn; r++) { ctx.fillStyle = PAL.straw; rr(ctx, x - wdt / 2, y - r * bh - 7, wdt, 14, 6); ctx.fill(); }
  };
  const person = (ctx, x, y, s, step, col = PAL.orange) => { // flat worker, legs alternate with step
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-6, 0); ctx.lineTo(-14 + (step ? 10 : 0), 42); ctx.moveTo(6, 0); ctx.lineTo(14 - (step ? 10 : 0), 42); ctx.stroke();
    ctx.fillStyle = col; rr(ctx, -22, -70, 44, 74, 14); ctx.fill();
    circle(ctx, 0, -96, 24, '#f3c7a0'); ctx.fillStyle = PAL.ink; rr(ctx, -26, -124, 52, 20, 8); ctx.fill();
    ctx.strokeStyle = '#f3c7a0'; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(-18, -50); ctx.lineTo(-30, -110); ctx.moveTo(18, -50); ctx.lineTo(30, -110); ctx.stroke();
    ctx.fillStyle = PAL.ice; rr(ctx, -34, -160, 68, 48, 8); ctx.fill(); ctx.restore();
  };
  const thermo = (ctx, x, y, hgt, level, col) => {
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, x - 34, y - hgt, 68, hgt + 20, 34); ctx.fill(); circle(ctx, x, y + 40, 60, c || PAL.cream); }, 20);
    ctx.fillStyle = col; rr(ctx, x - 16, y - hgt * level + 10, 32, hgt * level + 10, 16); ctx.fill(); circle(ctx, x, y + 40, 42, col);
    ctx.fillStyle = PAL.ink; for (let i = 1; i <= 8; i++) ctx.fillRect(x + 40, y - hgt * i / 8 + 10, i % 2 ? 14 : 26, 5);
  };

  // ---------- scenes: each draws its own background ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#ffd98a', '#ff9a4a');
    sun(ctx, 820, 330, 120, '#ffe066', true, t);
    dunes(ctx, t, 1150, ['#f6c76a', '#e9a84f', '#d88c3e']);
    // ice cube with a face, sweating and melting
    const melt = EI(t, T('hook', 'ice') + 0.4, B.hook.e + 0.3);
    const cx = 540, cy = 1240, sz = 300 * (1 - melt * 0.55);
    ctx.fillStyle = '#66c2ff'; ctx.beginPath(); ctx.ellipse(cx, cy + 150, 140 + 220 * melt, 36 + 40 * melt, 0, 0, Math.PI * 2); ctx.fill();
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ice; rr(ctx, cx - sz / 2, cy + 150 - sz, sz, sz, 36); ctx.fill(); }, 34);
    ctx.fillStyle = 'rgba(255,255,255,0.6)'; rr(ctx, cx - sz / 2 + 24, cy + 150 - sz + 24, sz * 0.22, sz * 0.5, 14); ctx.fill();
    const fy = cy + 150 - sz * 0.55; circle(ctx, cx - sz * 0.18, fy, 12, PAL.ink); circle(ctx, cx + sz * 0.18, fy, 12, PAL.ink);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(cx, fy + sz * 0.22, sz * 0.12, Math.PI * 0.15, Math.PI * 0.85, true); ctx.stroke();
    for (let i = 0; i < 4; i++) { const dy = ((t * 120 + i * 90) % 260); ctx.fillStyle = '#3fa9f5'; ctx.beginPath(); ctx.ellipse(cx + sz * 0.5 + 18 + i * 8, cy + 150 - sz + 40 + dy, 9, 16, 0, 0, Math.PI * 2); ctx.fill(); }
    // title
    const k = pop(t, 0.1); const lines = ['ICE', 'IN THE', 'DESERT?'];
    ctx.save(); ctx.translate(540, 700); ctx.scale(k, k);
    lines.forEach((l, i) => { const sz2 = i === 1 ? 72 : 150; const y = -170 + i * 150; longShadow(ctx, (c) => text(ctx, l, 0, y, sz2, c || (i === 2 ? PAL.orange : PAL.ink), 700), 22); });
    ctx.restore();
    pill(ctx, 'MELTING...', 540, 1540, { k: pop(t, T('hook', 'ice') + 0.5), bg: PAL.blue, col: PAL.white, size: 48 });
    pill(ctx, 'HOT!', 820, 560, { k: pop(t, T('hook', 'summer') - 0.1), bg: PAL.red, col: PAL.white, size: 52 });
  };
  S.persia = (ctx, t) => {
    sky(ctx, '#3b2a6b', '#c45b8a'); // dusk
    sun(ctx, 540, 820, 150, '#ffb347', false);
    // ground
    ctx.fillStyle = '#2a1f4d'; ctx.fillRect(0, 1180, W, HH);
    ctx.fillStyle = '#35285f'; ctx.beginPath(); ctx.moveTo(0, 1200); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, 1190 + Math.sin(x * 0.01) * 18); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.fill();
    // the dome builds up band by band on "built"
    const prog = EO(t, T('persia', 'built') - 0.2, T('persia', 'yakhchal'));
    longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(540 - 260, 1200); ctx.lineTo(540 + 260, 1200); ctx.lineTo(540, 1200 - 560 * prog); ctx.closePath(); ctx.fill(); } else dome(ctx, 540, 1200, 520, 560, prog); }, 36);
    // stars
    const sr = H.rng(3); for (let i = 0; i < 40; i++) { const x = sr() * W, y = sr() * 600; circle(ctx, x, y, 2 + sr() * 3, `rgba(255,240,220,${0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i))})`); }
    pill(ctx, 'ANCIENT PERSIA', 540, 300, { k: pop(t, T('persia', 'persia') - 0.1), size: 56 });
    // timeline: a bar from 2,400 years ago to today, the marker slides left as the years count
    const tk = pop(t, T('persia', 'two') - 0.15);
    if (tk > 0.01) {
      const yrs = Math.round(2400 * EO(t, T('persia', 'two') - 0.1, T('persia', 'ago')) / 100) * 100;
      ctx.save(); ctx.globalAlpha = tk; ctx.strokeStyle = PAL.cream; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(160, 470); ctx.lineTo(920, 470); ctx.stroke();
      text(ctx, 'TODAY', 920, 530, 36, PAL.cream, 600); const mx = H.lerp(920, 160, yrs / 2400); circle(ctx, mx, 470, 22, PAL.orange);
      ctx.restore();
      pill(ctx, `${yrs.toLocaleString('en-US')} YEARS AGO`, 540, 620, { k: tk * bump(t, T('persia', 'ago')), bg: yrs >= 2400 ? PAL.orange : PAL.cream, col: yrs >= 2400 ? PAL.white : PAL.ink, size: 56 });
    }
    ctx.save(); ctx.translate(540, 1400); ctx.scale(pop(t, T('persia', 'yakhchal') - 0.1), 1); longShadow(ctx, (c) => text(ctx, 'YAKHCHAL', 0, 0, 120, c || PAL.cream, 700), 20); ctx.restore();
    pill(ctx, '= ICE PIT', 540, 1540, { k: pop(t, T('persia', 'icepit') - 0.1), bg: PAL.blue, col: PAL.white, size: 56 });
  };
  S.qanat = (ctx, t) => {
    sky(ctx, '#8fd3ff', '#cfeeff');
    // mountain, sand surface, deep earth cross-section
    ctx.fillStyle = '#6d7f99'; ctx.beginPath(); ctx.moveTo(-50, 760); ctx.lineTo(260, 330); ctx.lineTo(560, 760); ctx.closePath(); ctx.fill();
    ctx.fillStyle = PAL.white; ctx.beginPath(); ctx.moveTo(190, 430); ctx.lineTo(260, 330); ctx.lineTo(330, 430); ctx.lineTo(300, 445); ctx.lineTo(260, 420); ctx.lineTo(220, 448); ctx.closePath(); ctx.fill();
    ctx.fillStyle = PAL.sand; ctx.fillRect(0, 760, W, 120); ctx.fillStyle = '#9b5f3a'; ctx.fillRect(0, 880, W, 1100);
    for (let i = 0; i < 5; i++) { ctx.fillStyle = i % 2 ? '#8a5231' : '#9b5f3a'; ctx.fillRect(0, 880 + i * 200, W, 200); }
    // tunnel: gently sloping from under the mountain to the right
    const tx0 = 200, ty0 = 1060, tx1 = 1000, ty1 = 1180;
    ctx.strokeStyle = '#3d2314'; ctx.lineWidth = 70; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(tx0, ty0); ctx.lineTo(tx1, ty1); ctx.stroke();
    for (const sx of [420, 640, 860]) { const sy = ty0 + (sx - tx0) / (tx1 - tx0) * (ty1 - ty0); ctx.fillStyle = '#3d2314'; ctx.fillRect(sx - 22, 800, 44, sy - 800); ctx.fillStyle = '#c88a4e'; rr(ctx, sx - 50, 740, 100, 40, 14); ctx.fill(); }
    // water: a blue band growing along the tunnel, with moving dashes
    const wp = EO(t, T('qanat', 'water') - 0.6, T('qanat', 'sand'));
    if (wp > 0) { const ex = H.lerp(tx0, tx1, wp), ey = H.lerp(ty0, ty1, wp); ctx.strokeStyle = PAL.blue; ctx.lineWidth = 34; ctx.beginPath(); ctx.moveTo(tx0, ty0); ctx.lineTo(ex, ey); ctx.stroke();
      ctx.strokeStyle = PAL.ice; ctx.lineWidth = 8; ctx.setLineDash([30, 40]); ctx.lineDashOffset = -t * 260; ctx.beginPath(); ctx.moveTo(tx0, ty0 - 8); ctx.lineTo(ex, ey - 8); ctx.stroke(); ctx.setLineDash([]); }
    // snowmelt on the mountain
    ctx.strokeStyle = PAL.blue; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(250, 440); ctx.lineTo(230, 600); ctx.lineTo(210, 760); ctx.stroke();
    pill(ctx, 'UNDERGROUND', 540, 220, { k: pop(t, T('qanat', 'underground') - 0.05), bg: PAL.ink, col: PAL.cream, size: 52 });
    pill(ctx, 'SNOWMELT', 300, 640, { k: pop(t, T('qanat', 'mountain') - 0.1), bg: PAL.blue, col: PAL.white, size: 40 });
    ctx.save(); ctx.translate(560, 1450); ctx.scale(pop(t, T('qanat', 'qanats') - 0.1), 1); longShadow(ctx, (c) => text(ctx, 'QANAT', 0, 0, 130, c || PAL.cream, 700), 20); ctx.restore();
    pill(ctx, 'a sloping tunnel, miles long', 540, 1580, { k: pop(t, T('qanat', 'canals') + 0.3), size: 40, weight: 600 });
    pill(ctx, 'ACCESS SHAFTS', 640, 960, { k: pop(t, T('qanat', 'water') - 0.1), size: 36 });
    arrow(ctx, 980, 1120, 980, 900, PAL.orange, 14, EO(t, T('qanat', 'sand') - 0.4, T('qanat', 'sand') + 0.1));
    pill(ctx, 'TO THE FIELDS', 860, 1740, { k: pop(t, T('qanat', 'sand') - 0.1), bg: PAL.orange, col: PAL.white, size: 40 });
  };
  S.winter = (ctx, t) => {
    sky(ctx, '#0b1230', '#243a7a');
    const sr = H.rng(7); for (let i = 0; i < 90; i++) { const x = sr() * W, y = sr() * 900; circle(ctx, x, y, 2 + sr() * 3, `rgba(255,250,230,${0.3 + 0.7 * Math.abs(Math.sin(t * 2.5 + i))})`); }
    circle(ctx, 860, 300, 90, '#fff4d6'); circle(ctx, 820, 270, 72, '#0b1230');
    const morning = EO(t, T('winter', 'morning') - 0.2, T('winter', 'ice'));
    if (morning > 0) { ctx.fillStyle = `rgba(255,190,120,${morning * 0.55})`; ctx.fillRect(0, 0, W, HH); }
    // the low sun behind the wall (blocked)
    const sunY = H.lerp(1500, 1260, EO(t, T('winter', 'wall') - 0.2, T('winter', 'sun') + 0.2));
    sun(ctx, 540, sunY, 110, '#ffb347', true, t);
    // tall wall
    const wk = EO(t, T('winter', 'wall') - 0.35, T('winter', 'wall') + 0.1);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#c88a4e'; ctx.fillRect(140, 1380 - 520 * wk, 800, 520 * wk + 10); }, 30);
    for (let i = 0; i < 8; i++) { ctx.fillStyle = '#d9a066'; ctx.fillRect(140 + i * 100, 1380 - 520 * wk - 30, 60, 30 * wk); }
    // ground and three shallow pools
    ctx.fillStyle = '#2d2a55'; ctx.fillRect(0, 1390, W, HH);
    const fill = EO(t, T('winter', 'flooded') - 0.2, T('winter', 'pools') + 0.3), ice = EO(t, T('winter', 'ice') - 0.3, T('winter', 'ice') + 0.2);
    [240, 540, 840].forEach((px, i) => { ctx.fillStyle = '#1b1a3a'; ctx.beginPath(); ctx.ellipse(px, 1520, 140, 60, 0, 0, Math.PI * 2); ctx.fill();
      const f = H.clamp(fill * 1.4 - i * 0.2); if (f > 0) { ctx.fillStyle = H.rgba(H.mix(PAL.blue, PAL.ice, ice)); ctx.beginPath(); ctx.ellipse(px, 1520, 130 * f, 52 * f, 0, 0, Math.PI * 2); ctx.fill(); }
      if (ice > 0) for (let j = 0; j < 5; j++) { const a = Math.max(0, Math.sin(t * 6 + j * 1.3 + i)); ctx.fillStyle = `rgba(255,255,255,${a * ice})`; const sx = px - 90 + j * 45, sy = 1500 + (j % 2) * 30; ctx.fillRect(sx - 2, sy - 12, 4, 24); ctx.fillRect(sx - 12, sy - 2, 24, 4); } });
    // canal pipe feeding the pools
    ctx.strokeStyle = PAL.blue; ctx.lineWidth = 22; ctx.lineCap = 'round'; const cp = EO(t, T('winter', 'flooded') - 0.3, T('winter', 'flooded') + 0.3); ctx.beginPath(); ctx.moveTo(40, 1700); ctx.lineTo(40 + 180 * cp, 1700 - 150 * cp); ctx.stroke();
    pill(ctx, 'WINTER NIGHT', 540, 220, { k: pop(t, T('winter', 'winter') - 0.1), bg: PAL.ink, col: PAL.ice, size: 52 });
    pill(ctx, 'CANAL WATER', 230, 1760, { k: pop(t, T('winter', 'flooded') - 0.1, T('winter', 'ice') - 0.5), bg: PAL.blue, col: PAL.white, size: 36 });
    pill(ctx, 'SHALLOW POOLS', 540, 1660, { k: pop(t, T('winter', 'pools') - 0.1, T('winter', 'ice') - 0.5), size: 40 });
    pill(ctx, 'SHADE WALL', 540, 1000, { k: pop(t, T('winter', 'wall') - 0.1), size: 48 });
    pill(ctx, 'blocks the low winter sun', 540, 1090, { k: pop(t, T('winter', 'sun') - 0.1), size: 36, weight: 600 });
    pill(ctx, 'BY MORNING', 540, 420, { k: pop(t, T('winter', 'morning') - 0.1), bg: PAL.orange, col: PAL.white, size: 44 });
    ctx.save(); ctx.translate(540, 1660); ctx.scale(pop(t, T('winter', 'ice') - 0.08) * bump(t, T('winter', 'ice')), pop(t, T('winter', 'ice') - 0.08) * bump(t, T('winter', 'ice'))); longShadow(ctx, (c) => text(ctx, 'SOLID ICE', 0, 0, 120, c || PAL.ice, 700), 20); ctx.restore();
  };
  S.harvest = (ctx, t) => {
    sky(ctx, '#bfe9ff', '#eaf7ff');
    sun(ctx, 880, 260, 90, '#ffd23f', true, t);
    ctx.fillStyle = PAL.sand; ctx.fillRect(0, 1100, W, HH); ctx.fillStyle = PAL.sand2; ctx.fillRect(0, 1100, W, 24);
    // frozen pool at left with saw marks
    ctx.fillStyle = PAL.ice; ctx.beginPath(); ctx.ellipse(220, 1140, 170, 50, 0, 0, Math.PI * 2); ctx.fill();
    const cutp = EO(t, T('harvest', 'cut') - 0.1, T('harvest', 'blocks')); ctx.strokeStyle = PAL.blue; ctx.lineWidth = 6; for (let i = 0; i < 5; i++) { const x = 100 + i * 60; if (cutp * 5 > i) { ctx.beginPath(); ctx.moveTo(x, 1105); ctx.lineTo(x, 1175); ctx.stroke(); } }
    // pit cross-section
    ctx.fillStyle = '#5c3a22'; rr(ctx, 560, 1124, 440, 620, 30); ctx.fill(); ctx.fillStyle = '#3d2314'; rr(ctx, 600, 1124, 360, 580, 20); ctx.fill();
    const stack = EO(t, T('harvest', 'stacked') - 0.1, T('harvest', 'meters') - 0.1);
    pitStack(ctx, 780, 1704, 340, 560, stack);
    // worker walking with a block, stepping
    const wp = EI(t, T('harvest', 'workers') - 0.1, T('harvest', 'pit') - 0.2), wx = H.lerp(260, 500, wp), stepN = Math.floor(wp * 16);
    person(ctx, wx, 1070, 1.35, stepN % 2);
    // blocks arcing into the pit
    for (let j = 0; j < 4; j++) { const u = H.clamp((t - T('harvest', 'blocks') - j * 0.35) / 0.9); if (u <= 0 || u >= 1) continue; const x = H.lerp(520, 780, u), y = H.lerp(900, 1180, u) - Math.sin(u * Math.PI) * 260; ctx.fillStyle = PAL.ice; rr(ctx, x - 34, y - 24, 68, 48, 8); ctx.fill(); }
    pill(ctx, 'ICE BLOCKS', 300, 900, { k: pop(t, T('harvest', 'blocks') - 0.1, T('harvest', 'pit')), bg: PAL.blue, col: PAL.white, size: 44 });
    pill(ctx, 'DEEP PIT', 780, 1800, { k: pop(t, T('harvest', 'pit') - 0.1), size: 44 });
    const t0 = T('harvest', 'five') - 0.1, tn = T('harvest', 'meters'), cur = Math.round(5000 * EO(t, t0, tn) / 100) * 100, kk = pop(t, t0 - 0.1) * bump(t, tn);
    pill(ctx, 'UP TO', 540, 380, { k: kk, bg: PAL.ink, col: PAL.cream, size: 44 });
    pill(ctx, `${cur.toLocaleString('en-US')} m³`, 540, 540, { k: kk, bg: cur >= 5000 ? PAL.orange : PAL.cream, col: cur >= 5000 ? PAL.white : PAL.ink, size: 120, h: 200 });
    if (t > tn && t < tn + 0.8) { ctx.save(); ctx.globalAlpha = 1 - ph(t, tn, tn + 0.8); const r = 160 + 240 * EO(t, tn, tn + 0.8); ctx.strokeStyle = PAL.orange; ctx.lineWidth = 12; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(540 + Math.cos(a) * r, 540 + Math.sin(a) * r * 0.6); ctx.lineTo(540 + Math.cos(a) * (r + 40), 540 + Math.sin(a) * (r + 40) * 0.6); ctx.stroke(); } ctx.restore(); }
    pill(ctx, 'that is 2 Olympic pools of ice', 540, 700, { k: pop(t, tn + 0.3), size: 36, weight: 600 });
  };
  S.insul = (ctx, t) => {
    sky(ctx, '#fff1d6', '#ffd9a8');
    // big cross-section of the dome
    ctx.fillStyle = PAL.sand; ctx.fillRect(0, 1180, W, HH);
    const wallT = H.lerp(40, 110, EO(t, T('insul', 'walls') - 0.2, T('insul', 'two')));
    longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(140, 1200); ctx.lineTo(940, 1200); ctx.lineTo(540, 560); ctx.closePath(); ctx.fill(); } else dome(ctx, 540, 1200, 800, 640, 1, false, '#d9a066', '#c88a4e'); }, 30);
    // inner hollow grows as walls thicken (walls drawn as the ring between)
    ctx.fillStyle = '#5c3a22'; ctx.beginPath(); const iw = 400 - wallT, ih = 640 - wallT * 1.6; ctx.moveTo(540 - iw * 0.9, 1200); for (let i = 0; i <= 12; i++) { const u = i / 12; ctx.lineTo(540 - iw * 0.9 * Math.pow(1 - u, 0.8), 1200 - u * ih); } for (let i = 12; i >= 0; i--) { const u = i / 12; ctx.lineTo(540 + iw * 0.9 * Math.pow(1 - u, 0.8), 1200 - u * ih); } ctx.closePath(); ctx.fill();
    // pit below with ice + straw
    ctx.fillStyle = '#3d2314'; rr(ctx, 320, 1200, 440, 540, 20); ctx.fill();
    pitStack(ctx, 540, 1740, 400, 520, 1, EO(t, T('insul', 'straw') - 0.2, T('insul', 'layers')));
    pill(ctx, 'STRAW', 240, 1480, { k: pop(t, T('insul', 'straw') - 0.1), bg: PAL.straw, col: PAL.ink, size: 52 });
    pill(ctx, 'cheap insulation', 240, 1570, { k: pop(t, T('insul', 'layers') - 0.1), size: 34, weight: 600 });
    arrow(ctx, 330, 1480, 400, 1480, PAL.ink, 8, pop(t, T('insul', 'straw')));
    pill(ctx, 'SAROOJ MORTAR', 540, 300, { k: pop(t, T('insul', 'sarooj') - 0.1), bg: PAL.brown, col: PAL.cream, size: 52 });
    pill(ctx, 'sand · clay · lime · egg white · goat hair', 540, 390, { k: pop(t, T('insul', 'sarooj') + 0.3), size: 32, weight: 600 });
    // dimension line across the base wall
    const tw = T('insul', 'two'); const dk = pop(t, tw - 0.1);
    if (dk > 0.01) { const x0 = 150, x1 = 150 + wallT * 2.2, y = 1140; ctx.strokeStyle = PAL.red; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(H.lerp(x0, x1, dk), y); ctx.moveTo(x0, y - 30); ctx.lineTo(x0, y + 30); ctx.moveTo(x1, y - 30); ctx.lineTo(x1, y + 30); ctx.stroke(); }
    pill(ctx, '2 M THICK', 300, 1040, { k: dk * bump(t, T('insul', 'thick')), bg: PAL.red, col: PAL.white, size: 56 });
  };
  S.air = (ctx, t) => {
    sky(ctx, '#0f6e6a', '#1fb6a6');
    ctx.fillStyle = '#0c4f4c'; ctx.fillRect(0, 1240, W, HH);
    longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(140, 1260); ctx.lineTo(940, 1260); ctx.lineTo(540, 460); ctx.closePath(); ctx.fill(); } else dome(ctx, 540, 1260, 800, 800, 1, true, '#d9a066', '#c88a4e'); }, 30);
    ctx.fillStyle = '#3d2314'; rr(ctx, 360, 1260, 360, 420, 20); ctx.fill(); pitStack(ctx, 540, 1680, 320, 400, 1, 1);
    // vent at the top
    ctx.fillStyle = '#5c3a22'; rr(ctx, 510, 440, 60, 80, 10); ctx.fill();
    // hot air: red arrows rising inside and out the vent; cold air: blue arrows sinking along the walls
    const hp = EO(t, T('air', 'hot') - 0.15, T('air', 'top')), cp = EO(t, T('air', 'cold') - 0.15, T('air', 'ice'));
    for (let i = 0; i < 3; i++) { const u = ((t * 0.5 + i / 3) % 1); const y = 1180 - u * 820; if (hp > u) { ctx.save(); ctx.globalAlpha = 1 - Math.abs(u - 0.5) * 1.2; arrow(ctx, 540, y + 90, 540, y, PAL.red, 16); ctx.restore(); } }
    arrow(ctx, 540, 560, 540, 300, PAL.red, 18, hp);
    [-1, 1].forEach((sgn) => { for (let i = 0; i < 2; i++) { const u = ((t * 0.5 + i / 2) % 1); const x = 540 + sgn * (120 + u * 120), y = 760 + u * 440; if (cp > u) { ctx.save(); ctx.globalAlpha = 1 - Math.abs(u - 0.5) * 1.2; arrow(ctx, x, y - 90, x, y, PAL.blue, 16); ctx.restore(); } } });
    pill(ctx, 'TALL DOME', 540, 1800, { k: pop(t, T('air', 'dome') - 0.1), size: 56 });
    pill(ctx, 'HOT AIR OUT', 540, 200, { k: pop(t, T('air', 'hot') - 0.1), bg: PAL.red, col: PAL.white, size: 56 });
    pill(ctx, 'COLD AIR SINKS', 540, 980, { k: pop(t, T('air', 'cold') - 0.1), bg: PAL.blue, col: PAL.white, size: 48 });
    pill(ctx, 'onto the ice', 540, 1070, { k: pop(t, T('air', 'ice') - 0.1), bg: PAL.ice, col: '#1b6fa8', size: 40 });
  };
  S.summer = (ctx, t) => {
    sky(ctx, '#ff8a3d', '#ffd166');
    sun(ctx, 540, 420, 170 * (1 + 0.08 * Math.sin(t * 3)), '#ffe066', true, t);
    ctx.fillStyle = PAL.sand2; ctx.fillRect(0, 1260, W, HH);
    longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(240, 1280); ctx.lineTo(840, 1280); ctx.lineTo(540, 700); ctx.closePath(); ctx.fill(); } else dome(ctx, 540, 1280, 600, 580, 1, true); }, 30);
    ctx.fillStyle = '#3d2314'; rr(ctx, 400, 1280, 280, 320, 20); ctx.fill();
    const glow = 0.5 + 0.5 * Math.sin(t * 4); ctx.save(); ctx.globalAlpha = 0.5 * EO(t, T('summer', 'ice') - 0.1, T('summer', 'ice') + 0.3) * (0.7 + 0.3 * glow); const g = ctx.createRadialGradient(540, 1440, 10, 540, 1440, 300); g.addColorStop(0, '#dff6ff'); g.addColorStop(1, 'rgba(223,246,255,0)'); ctx.fillStyle = g; ctx.fillRect(240, 1140, 600, 600); ctx.restore();
    pitStack(ctx, 540, 1600, 240, 300, 1, 1);
    // heat shimmer lines
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 6; ctx.lineCap = 'round'; for (let i = 0; i < 6; i++) { const x = 120 + i * 170, y0 = 1180 - ((t * 120 + i * 50) % 260); ctx.beginPath(); for (let j = 0; j <= 6; j++) ctx.lineTo(x + Math.sin(j * 1.1 + t * 4 + i) * 12, y0 - j * 14); ctx.stroke(); } ctx.restore();
    pill(ctx, 'SUMMER', 540, 190, { k: pop(t, T('summer', 'summer') - 0.05), bg: PAL.red, col: PAL.white, size: 56 });
    const tf = T('summer', 'forty'), lvl = EO(t, tf - 0.2, tf + 0.4);
    if (t > tf - 0.3) { thermo(ctx, 880, 1100, 420, lvl, PAL.red); }
    pill(ctx, '40°C', 880, 560, { k: pop(t, tf - 0.1) * bump(t, tf), bg: PAL.red, col: PAL.white, size: 96, h: 160 });
    pill(ctx, 'OUTSIDE', 880, 680, { k: pop(t, T('summer', 'outside') - 0.1), bg: PAL.ink, col: PAL.cream, size: 40 });
    pill(ctx, 'ICE INSIDE', 300, 1400, { k: pop(t, T('summer', 'ice') - 0.1), bg: PAL.ice, col: '#1b6fa8', size: 56 });
    pill(ctx, 'all season long', 300, 1490, { k: pop(t, T('summer', 'season') - 0.1), size: 36, weight: 600 });
    // a cold drink pops in on "inside"
    const dk = pop(t, T('summer', 'inside') + 0.1); if (dk > 0.01) { ctx.save(); ctx.translate(880, 1700); ctx.scale(dk, dk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ice; rr(ctx, -60, -120, 120, 200, 16); ctx.fill(); }, 16); ctx.fillStyle = '#ff6b6b'; rr(ctx, -50, -60, 100, 130, 12); ctx.fill(); ctx.fillStyle = PAL.white; rr(ctx, -40, -100, 30, 30, 6); ctx.fill(); rr(ctx, 0, -110, 30, 30, 6); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(20, -100); ctx.lineTo(60, -200); ctx.stroke(); ctx.restore(); }
  };
  S.end = (ctx, t) => {
    sky(ctx, '#17323f', '#0f5e5a');
    // crossed-out plug
    const nk = pop(t, T('end', 'no') - 0.05);
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 520); ctx.scale(nk, nk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -90, -60, 180, 150, 30); ctx.fill(); }, 20); ctx.fillStyle = PAL.ink; ctx.fillRect(-50, -130, 24, 80); ctx.fillRect(26, -130, 24, 80); ctx.strokeStyle = PAL.red; ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-150, -170); ctx.lineTo(150, 150); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'NO ELECTRICITY', 540, 760, { k: nk, bg: PAL.ink, col: PAL.cream, size: 60 });
    const items = [['SHADE', T('end', 'shade'), PAL.brown, PAL.cream, (c) => { ctx.fillStyle = c; ctx.fillRect(-60, -40, 120, 80); }], ['STRAW', T('end', 'straw'), PAL.straw, PAL.ink, (c) => { ctx.strokeStyle = c; ctx.lineWidth = 10; for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 22, 40); ctx.lineTo(i * 22 + 10, -40); ctx.stroke(); } }], ['THICK WALLS', T('end', 'walls'), PAL.orange, PAL.white, (c) => { ctx.fillStyle = c; for (let r = 0; r < 3; r++) for (let q = 0; q < 2; q++) ctx.fillRect(-60 + q * 62 + (r % 2) * 20, -42 + r * 30, 50, 24); }], ['AIRFLOW', T('end', 'airflow'), PAL.blue, PAL.white, (c) => { ctx.strokeStyle = c; ctx.lineWidth = 10; ctx.lineCap = 'round'; for (let i = -1; i <= 1; i++) { ctx.beginPath(); for (let j = 0; j <= 6; j++) ctx.lineTo(-50 + j * 17, i * 28 + Math.sin(j * 1.2) * 10); ctx.stroke(); } }]];
    items.forEach(([txt, tt, bg, col, icon], i) => { const k = pop(t, tt - 0.12) * bump(t, tt); if (k <= 0.01) return; const x = i % 2 ? 790 : 290, y = i < 2 ? 1060 : 1400;
      ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => { ctx.fillStyle = c || bg; rr(ctx, -200, -130, 400, 260, 36); ctx.fill(); }, 22); ctx.save(); ctx.translate(0, -30); icon(col); ctx.restore(); text(ctx, txt, 0, 80, 44, col, 700); ctx.restore(); });
    const fk = EO(t, T('end', 'airflow') + 0.45, T('end', 'airflow') + 0.85);
    if (fk > 0) { ctx.save(); ctx.globalAlpha = fk; longShadow(ctx, (c) => text(ctx, '= ICE ALL SUMMER', 540, 1680, 84, c || PAL.cream, 700), 18); ctx.restore(); }
  };
  const ORDER = [['hook', 0], ['persia', CUTS.persia], ['qanat', CUTS.qanat], ['winter', CUTS.winter], ['harvest', CUTS.harvest], ['insul', CUTS.insul], ['air', CUTS.air], ['summer', CUTS.summer], ['end', CUTS.end]];
  const WIPE = 0.5;
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] - WIPE / 2) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    // circle wipe: the next scene opens from the centre over WIPE seconds around the cut time
    if (next && t >= next[1] - WIPE / 2) {
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

  // ---------- sound: pops, whooshes, ticks and dings, as a flat explainer would ----------
  function scoreSound(k) {
    const D = DURATION, R = H.rng(99);
    const inv = (u) => (u < 0.5 ? Math.cbrt(u / 4) : 1 - Math.cbrt((1 - u) * 2) / 2);
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.3, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    // hook
    ['ICE', 'IN THE', 'DESERT?'].forEach((_, i) => popAt(0.12 + i * 0.1, 520 + i * 60, 0.9, -0.3 + i * 0.3, false));
    popAt(T('hook', 'summer') - 0.1, 480, 0.7, 0.5); k.play('sparkle', T('hook', 'summer'), { n: 4, gain: 0.5 });
    for (let i = 0; i < 6; i++) k.tone(T('hook', 'ice') + 0.5 + i * 0.35, { f: [[0, 1400], [0.08, 700]], dur: 0.1, gain: 0.05, pan: 0.1, minor: true });
    popAt(T('hook', 'ice') + 0.5, 700, 0.8, 0);
    wipe(CUTS.persia);
    popAt(T('persia', 'persia') - 0.1, 600, 0.8, 0, false);
    for (let f = Math.ceil((T('persia', 'two') - 0.1) * 12); f < T('persia', 'ago') * 12; f += 2) k.play('tick', f / 12, { f: 3200, gain: 0.8, pan: -0.2, minor: true });
    k.play('stamp', T('persia', 'ago'), { gain: 0.45 });
    for (let n = 1; n <= 14; n++) k.play('tock', T('persia', 'built') - 0.2 + (T('persia', 'yakhchal') - T('persia', 'built') + 0.2) * (1 - Math.cbrt(1 - n / 14)), { f: 300 + n * 25, gain: 0.35, minor: true });
    k.play('whoosh', T('persia', 'yakhchal') - 0.25, { dur: 0.3, gain: 0.6 }); k.play('ding', T('persia', 'yakhchal'), { f: 'A5', gain: 0.35 });
    popAt(T('persia', 'icepit') - 0.1, 700, 0.8, 0, false);
    wipe(CUTS.qanat);
    popAt(T('qanat', 'underground') - 0.05, 500, 0.8, 0, false); popAt(T('qanat', 'mountain') - 0.1, 760, 0.7, -0.4);
    k.play('whoosh', T('qanat', 'qanats') - 0.25, { dur: 0.3, gain: 0.6 }); popAt(T('qanat', 'canals') + 0.3, 900, 0.6, 0);
    k.noise(T('qanat', 'water') - 0.6, { dur: 2.0, color: 'brown', filter: 'lowpass', f: [[0, 300], [0.8, 1000], [2.0, 500]], gain: 0.2, a: 0.4, verb: 0.2 });
    popAt(T('qanat', 'water') - 0.1, 800, 0.6, 0.2); k.play('swish', T('qanat', 'sand') - 0.4, { gain: 0.6, pan: 0.5 }); popAt(T('qanat', 'sand') - 0.1, 700, 0.8, 0.5, false);
    wipe(CUTS.winter);
    k.play('sparkle', T('winter', 'winter'), { n: 5, gain: 0.5 }); popAt(T('winter', 'winter') - 0.1, 520, 0.8, 0, false);
    k.noise(T('winter', 'flooded') - 0.3, { dur: 1.8, color: 'brown', filter: 'lowpass', f: [[0, 260], [0.8, 900], [1.8, 380]], gain: 0.2, a: 0.4, verb: 0.15, pan: -0.4 });
    popAt(T('winter', 'flooded') - 0.1, 900, 0.6, -0.5); popAt(T('winter', 'pools') - 0.1, 760, 0.7, 0);
    k.play('riser', T('winter', 'wall') - 0.35, { dur: 0.4, gain: 0.5 }); k.play('thud', T('winter', 'wall'), { f: 120, gain: 0.5 }); popAt(T('winter', 'wall') - 0.1, 600, 0.8, 0, false);
    popAt(T('winter', 'sun') - 0.1, 900, 0.5, 0); popAt(T('winter', 'morning') - 0.1, 560, 0.7, 0);
    for (let i = 0; i < 14; i++) k.play('tick', T('winter', 'ice') - 0.3 + i * 0.04, { f: 5200 + R() * 2400, gain: 0.5, pan: R() * 1.2 - 0.6, minor: true });
    k.play('impact', T('winter', 'ice'), { gain: 0.7 }); k.play('sparkle', T('winter', 'ice'), { n: 8, gain: 0.9 }); k.play('ding', T('winter', 'ice'), { f: 'E6', gain: 0.4 });
    wipe(CUTS.harvest);
    for (let i = 0; i < 5; i++) k.play('stroke', T('harvest', 'cut') - 0.1 + i * 0.2, { material: 'chalk', dur: 0.12, gain: 0.8, pan: -0.4, minor: true });
    for (let n = 1; n <= 16; n++) k.play('tock', T('harvest', 'workers') - 0.1 + (T('harvest', 'pit') - T('harvest', 'workers') - 0.1) * inv(n / 16), { f: 200 + (n % 2) * 40, gain: 0.3, pan: -0.2, minor: true });
    popAt(T('harvest', 'blocks') - 0.1, 700, 0.8, -0.3, false);
    for (let j = 0; j < 4; j++) { k.play('swish', T('harvest', 'blocks') + j * 0.35, { gain: 0.4, minor: true }); k.play('tock', T('harvest', 'blocks') + j * 0.35 + 0.85, { f: 500, gain: 0.5, pan: 0.3, minor: true }); }
    for (let n = 1; n <= 30; n += 2) k.play('tock', T('harvest', 'stacked') - 0.1 + (T('harvest', 'meters') - T('harvest', 'stacked')) * (1 - Math.cbrt(1 - n / 30)), { f: 380, gain: 0.3, pan: 0.3, minor: true });
    popAt(T('harvest', 'pit') - 0.1, 600, 0.8, 0.3, false);
    for (let f = Math.ceil((T('harvest', 'five') - 0.1) * 15); f < T('harvest', 'meters') * 15; f++) k.play('count', f / 15, { gain: 0.8, minor: true });
    k.play('impact', T('harvest', 'meters'), { gain: 1.2 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => k.play('ding', T('harvest', 'meters') + i * 0.03, { f: n, gain: 0.38 - i * 0.05, pan: (i - 1.5) * 0.25 }));
    popAt(T('harvest', 'meters') + 0.3, 800, 0.5, 0);
    wipe(CUTS.insul);
    k.play('paper', T('insul', 'straw') - 0.2, { dur: 0.9, gain: 1.0, pan: -0.3 }); popAt(T('insul', 'straw') - 0.1, 700, 0.8, -0.4, false); popAt(T('insul', 'layers') - 0.1, 900, 0.5, -0.4);
    k.play('riser', T('insul', 'walls') - 0.2, { dur: 1.6, gain: 0.4 }); popAt(T('insul', 'sarooj') - 0.1, 560, 0.8, 0, false); popAt(T('insul', 'sarooj') + 0.3, 900, 0.5, 0);
    k.play('stamp', T('insul', 'two'), { gain: 0.55, pan: -0.3 }); k.play('ding', T('insul', 'thick'), { f: 'A5', gain: 0.3 });
    wipe(CUTS.air);
    popAt(T('air', 'dome') - 0.1, 600, 0.8, 0, false);
    k.play('riser', T('air', 'hot') - 0.15, { dur: 1.6, gain: 0.6 }); popAt(T('air', 'hot') - 0.1, 520, 0.8, 0, false); popAt(T('air', 'top') - 0.05, 1100, 0.5, 0);
    k.noise(T('air', 'cold') - 0.15, { dur: 1.2, color: 'pink', filter: 'bandpass', f: [[0, 3200], [1.2, 400]], q: 1.1, gain: 0.25, a: 0.3, verb: 0.2 }); popAt(T('air', 'cold') - 0.1, 700, 0.8, 0, false);
    k.play('ding', T('air', 'ice'), { f: 'E6', gain: 0.3 }); popAt(T('air', 'ice') - 0.1, 1200, 0.6, 0);
    wipe(CUTS.summer); k.play('impact', CUTS.summer + 0.25, { gain: 0.8 }); k.play('sparkle', CUTS.summer + 0.3, { n: 6, gain: 0.6 });
    popAt(T('summer', 'summer') - 0.05, 600, 0.9, 0, false);
    k.play('riser', T('summer', 'forty') - 0.2, { dur: 0.6, gain: 0.6 }); k.play('thud', T('summer', 'forty'), { f: 140, gain: 0.6, pan: 0.5 }); k.play('buzz', T('summer', 'forty') + 0.02, { f: 98, dur: 0.35, gain: 0.5, pan: 0.5 });
    popAt(T('summer', 'outside') - 0.1, 600, 0.6, 0.5);
    k.play('sparkle', T('summer', 'ice') - 0.05, { n: 6, gain: 0.8 }); k.play('ding', T('summer', 'ice'), { f: 'C7', gain: 0.3 }); popAt(T('summer', 'ice') - 0.1, 1200, 0.9, -0.4, false);
    popAt(T('summer', 'inside') + 0.1, 900, 0.6, 0.5); popAt(T('summer', 'season') - 0.1, 800, 0.5, -0.4);
    wipe(CUTS.end);
    k.play('error', T('end', 'no'), { f: 'A3', gain: 0.5 }); popAt(T('end', 'no') - 0.05, 520, 0.9, 0, false);
    [['shade', -0.5], ['straw', 0.5], ['walls', -0.5], ['airflow', 0.5]].forEach(([w, p], i) => { popAt(T('end', w) - 0.1, 500 + i * 80, 0.9, p, false); k.play('ding', T('end', w), { f: ['C5', 'E5', 'G5', 'C6'][i], gain: 0.3, pan: p }); });
    k.tone(T('end', 'airflow') + 0.45, { f: 'C3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 }); k.play('success', T('end', 'airflow') + 0.5, { f: 'C6', gain: 0.4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
