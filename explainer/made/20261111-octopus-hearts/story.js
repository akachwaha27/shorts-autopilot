// ================= Flat-Vector Science, vertical 1080x1920: "Why does an octopus have three hearts?" =================
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    {"s": 0.25, "e": 1.85, "w": {"three": 0.25, "hearts": 0.65, "blue": 1.13, "blood": 1.45}},
    {"s": 2.31, "e": 4.89, "w": {"and": 2.31, "youd": 2.53, "never": 2.81, "guess": 3.17, "why": 3.53, "one": 3.74, "octopus": 3.96, "needs": 4.46, "n3": 4.82}},
    {"s": 5.3, "e": 7.47, "w": {"two": 5.3, "of": 5.51, "the": 5.64, "hearts": 5.84, "sit": 6.25, "right": 6.45, "by": 6.79, "gills": 7.13}},
    {"s": 7.85, "e": 10.2, "w": {"their": 7.85, "only": 8.17, "job": 8.42, "is": 8.61, "pushing": 8.74, "blood": 9.19, "through": 9.5, "them": 9.95}},
    {"s": 10.71, "e": 13.12, "w": {"so": 10.71, "it": 10.88, "can": 11.04, "grab": 11.29, "oxygen": 11.62, "from": 12.12, "the": 12.45, "water": 12.7}},
    {"s": 13.52, "e": 15.36, "w": {"the": 13.52, "third": 13.75, "heart": 14.13, "is": 14.52, "big": 14.9, "one": 15.13}},
    {"s": 15.78, "e": 18.3, "w": {"it": 15.78, "sends": 15.91, "that": 16.25, "fresh": 16.51, "blood": 16.84, "out": 17.17, "to": 17.37, "the": 17.51, "whole": 17.7, "body": 18.04}},
    {"s": 18.68, "e": 20.11, "w": {"so": 18.68, "why": 18.87, "not": 19.16, "just": 19.44, "one": 19.82}},
    {"s": 20.64, "e": 24.15, "w": {"octopus": 20.64, "blood": 21.23, "carries": 21.64, "oxygen": 22.23, "with": 22.73, "copper": 23.06, "not": 23.57, "iron": 23.82}},
    {"s": 24.5, "e": 26.33, "w": {"that": 24.5, "copper": 24.77, "is": 25.17, "what": 25.31, "makes": 25.58, "it": 25.92, "blue": 26.06}},
    {"s": 26.83, "e": 29.61, "w": {"and": 26.83, "its": 27.07, "worse": 27.32, "at": 27.73, "holding": 27.89, "oxygen": 28.47, "than": 28.96, "ours": 29.29}},
    {"s": 30.02, "e": 32.66, "w": {"so": 30.02, "the": 30.18, "octopus": 30.41, "needs": 30.95, "extra": 31.34, "pumping": 31.73, "power": 32.27}},
    {"s": 33.12, "e": 34.38, "w": {"now": 33.12, "the": 33.37, "weird": 33.63, "part": 34.04}},
    {"s": 34.73, "e": 36.09, "w": {"when": 34.73, "an": 35.04, "octopus": 35.19, "swims": 35.72}},
    {"s": 36.5, "e": 39.21, "w": {"that": 36.5, "main": 36.8, "body": 37.09, "heart": 37.38, "actually": 37.75, "stops": 38.33, "beating": 38.7}},
    {"s": 39.59, "e": 41.51, "w": {"swimming": 39.59, "tires": 40.29, "it": 40.73, "out": 40.9, "fast": 41.17}},
    {"s": 41.97, "e": 44.73, "w": {"which": 41.97, "is": 42.33, "why": 42.47, "octopuses": 42.68, "would": 43.31, "much": 43.67, "rather": 43.95, "crawl": 44.37}},
    {"s": 45.2, "e": 46.54, "w": {"if": 45.2, "you": 45.34, "had": 45.55, "three": 45.76, "hearts": 46.12}},
    {"s": 46.86, "e": 48.47, "w": {"what": 46.86, "would": 47.08, "you": 47.36, "do": 47.53, "with": 47.64, "the": 47.86, "spare": 48.03, "one": 48.3}},
  ];
  const T = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = { gills: 5.05, body: 13.3, copper: 20.36, oxygen: 26.58, swim: 32.86, crawl: 39.38, end: 44.95 };

  // ---------- helpers (Flat-Vector Science house kit) ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', coral: '#ff6b5b', coral2: '#e9503f', suck: '#ffc2b4', blue: '#2f7bff', blue2: '#7fd3ff', red: '#ef4a4a', yellow: '#ffd23f', teal: '#1fb6a6', white: '#ffffff', sand: '#f2c66d', copper: '#d9824a', iron: '#9a9aa8', green: '#3ccf7a', pink: '#ff9ec7' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(10,15,50,0.18)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 48, padX = size * 0.7, h = size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, 700); ctx.restore();
  };
  const bigText = (ctx, s, x, y, size, col, k = 1, sh = 20) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 14, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const rays = (ctx, t, a = 0.08) => { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; for (let i = 0; i < 6; i++) { const x = 80 + i * 190 + Math.sin(t * 0.4 + i) * 30; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 70, 0); ctx.lineTo(x + 260, HH); ctx.lineTo(x + 120, HH); ctx.closePath(); ctx.fill(); } ctx.restore(); };
  const bubbles = (ctx, t, seed, n = 18, col = 'rgba(255,255,255,0.35)') => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const x = r() * W, sp = 60 + r() * 90, sz = 6 + r() * 16, y = HH - ((t * sp + r() * HH) % (HH + 100)); circle(ctx, x + Math.sin(t * 2 + i) * 10, y, sz, col); } };
  const heartPath = (ctx, s) => { ctx.beginPath(); ctx.moveTo(0, s * 0.35); ctx.bezierCurveTo(-s * 0.05, s * 0.3, -s * 0.55, 0, -s * 0.55, -s * 0.28); ctx.bezierCurveTo(-s * 0.55, -s * 0.6, -s * 0.12, -s * 0.66, 0, -s * 0.36); ctx.bezierCurveTo(s * 0.12, -s * 0.66, s * 0.55, -s * 0.6, s * 0.55, -s * 0.28); ctx.bezierCurveTo(s * 0.55, 0, s * 0.05, s * 0.3, 0, s * 0.35); ctx.closePath(); };
  const beatK = (t, bpm = 80, amp = 0.1) => { const u = (t * bpm / 60) % 1; return 1 + amp * (u < 0.12 ? Math.sin(u / 0.12 * Math.PI) : u > 0.22 && u < 0.32 ? 0.6 * Math.sin((u - 0.22) / 0.1 * Math.PI) : 0); };
  const heart = (ctx, x, y, s, col, k = 1, sh = 16, shine = true) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => { ctx.fillStyle = c || col; heartPath(ctx, s); ctx.fill(); }, sh); if (shine) { ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.beginPath(); ctx.ellipse(-s * 0.3, -s * 0.33, s * 0.09, s * 0.14, -0.5, 0, Math.PI * 2); ctx.fill(); } ctx.restore(); };

  // flat octopus: mantle up, 8 tapered arms down. o: {col, col2, t, spread, trail, walk, eyes, xray}
  const octo = (ctx, x, y, s, o = {}) => {
    const t = o.t || 0, col = o.col || PAL.coral, col2 = o.col2 || PAL.coral2, spread = o.spread ?? 0.16, trail = o.trail || 0, walk = o.walk || 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(o.rot || 0);
    const drawArms = (front, c) => {
      for (let i = 0; i < 8; i++) {
        const isFront = i % 2 === 0; if (isFront !== front) continue;
        const side = i - 3.5, bx = side * 20, by = 70, L = 330 - Math.abs(side) * 10, N = 22;
        let px = bx, py = by, ang = Math.PI / 2 + side * spread * (1 - trail * 0.85);
        const left = [], right = [];
        for (let j = 0; j <= N; j++) {
          const u = j / N;
          const wav = Math.sin(t * (2.2 + walk * 3) + i * 1.3 - u * 4) * (0.5 - trail * 0.35) * u;
          const curl = (1 - trail) * u * u * 1.6 * Math.sign(side || 1) * (o.curl ?? 1);
          const a = ang + wav * 0.6 + curl * 0.5 + (walk ? Math.sin(t * 5 + i * 2) * 0.25 * u : 0);
          const wd = 25 * (1 - u * 0.85);
          left.push([px + Math.cos(a + Math.PI / 2) * wd, py + Math.sin(a + Math.PI / 2) * wd]);
          right.push([px - Math.cos(a + Math.PI / 2) * wd, py - Math.sin(a + Math.PI / 2) * wd]);
          px += Math.cos(a) * L / N; py += Math.sin(a) * L / N;
        }
        ctx.fillStyle = c || (front ? col : col2);
        ctx.beginPath(); left.forEach((p, k) => (k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); for (let k = right.length - 1; k >= 0; k--) ctx.lineTo(right[k][0], right[k][1]); ctx.closePath(); ctx.fill();
        if (!c && front) { ctx.fillStyle = PAL.suck; for (let j = 4; j < N - 2; j += 3) { const p = right[j], q = left[j]; circle(ctx, H.lerp(p[0], q[0], 0.25), H.lerp(p[1], q[1], 0.25), 6 * (1 - j / N) + 2, PAL.suck); } }
      }
    };
    const mantle = (c) => { ctx.fillStyle = c || col; ctx.beginPath(); ctx.ellipse(0, -40, 120, 150, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(0, 50, 105, 55, 0, 0, Math.PI * 2); ctx.fill(); };
    if (!o.noShadow) { ctx.save(); for (let i = 22; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); drawArms(false, 'rgba(10,15,50,0.07)'); drawArms(true, 'rgba(10,15,50,0.07)'); mantle('rgba(10,15,50,0.07)'); ctx.restore(); } ctx.restore(); }
    drawArms(false); mantle(); drawArms(true);
    if (o.xray) { ctx.save(); ctx.fillStyle = 'rgba(255,240,230,0.55)'; ctx.beginPath(); ctx.ellipse(0, -40, 98, 128, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
    if (!o.xray) { ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.ellipse(-50, -110, 26, 50, -0.4, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = col2; for (let k = 0; k < 5; k++) circle(ctx, 40 + (k % 2) * 30, -120 + k * 28, 9, col2); }
    if (o.eyes !== false) { const ey = 40, blink = (Math.sin(t * 1.3) > 0.985) ? 0.15 : 1; [-50, 50].forEach((ex) => { ctx.fillStyle = PAL.white; ctx.beginPath(); ctx.ellipse(ex, ey, 30, 30 * blink, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.ellipse(ex + 4, ey + 3, 14, 14 * blink, 0, 0, Math.PI * 2); ctx.fill(); }); if (o.smile !== false) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, 66, 18, 0.2, Math.PI - 0.2); ctx.stroke(); } }
    ctx.restore();
  };
  const gill = (ctx, x, y, s, side, col) => { // feathery gill: a stem with lamellae
    ctx.save(); ctx.translate(x, y); ctx.scale(s * side, s);
    ctx.fillStyle = col; rr(ctx, -10, -150, 20, 170, 10); ctx.fill();
    for (let i = 0; i < 9; i++) { const yy = -140 + i * 17, l = 48 - Math.abs(i - 4) * 4; ctx.beginPath(); ctx.ellipse(18 + l / 2, yy, l / 2 + 4, 8, 0.15, 0, Math.PI * 2); ctx.fill(); }
    ctx.restore();
  };
  const ecg = (ctx, x, y, w, h, t, stopAt) => { // scrolling heartbeat trace that flattens after stopAt
    ctx.save(); ctx.strokeStyle = t > stopAt ? PAL.red : PAL.green; ctx.lineWidth = 10; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i <= 120; i++) { const u = i / 120, tt = t - (1 - u) * 2.2, beat = (tt * 1.4) % 1; let v = 0; if (tt < stopAt) { v = beat > 0.4 && beat < 0.45 ? -1 : beat >= 0.45 && beat < 0.5 ? 0.6 : beat > 0.6 && beat < 0.7 ? -0.2 * Math.sin((beat - 0.6) / 0.1 * Math.PI) : 0; } ctx.lineTo(x + u * w, y + v * h / 2); }
    ctx.stroke(); ctx.restore();
  };

  // ---------- scenes: each draws its own background ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#127bc4', '#06305e'); rays(ctx, t); bubbles(ctx, t, 1);
    ctx.fillStyle = '#0a2346'; ctx.beginPath(); ctx.moveTo(0, 1700); for (let x = 0; x <= W; x += 30) ctx.lineTo(x, 1650 + Math.sin(x * 0.01) * 30); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.fill();
    const bob = Math.sin(t * 1.6) * 18;
    octo(ctx, 540, 1000 + bob, 1.4, { t });
    // three hearts in a row above its head
    [0, 1, 2].forEach((i) => heart(ctx, 290 + i * 250, 600 + bob * 0.4, 170, i === 1 ? PAL.red : PAL.blue, pop(t, T(0, 'hearts') - 0.1 + i * 0.12) * beatK(t + i * 0.1)));
    bigText(ctx, '3 HEARTS', 540, 330, 150, PAL.cream, pop(t, T(0, 'three') - 0.15));
    // blue blood drop
    const dk = pop(t, T(0, 'blue') - 0.1);
    pill(ctx, 'BLUE BLOOD', 540, 1520, { k: dk, bg: PAL.blue, col: PAL.white, size: 64 });
    bigText(ctx, 'WHY?', 860, 1300, 120, PAL.yellow, pop(t, T(1, 'why') - 0.1), 16);
  };
  S.gills = (ctx, t) => {
    sky(ctx, '#1fb6a6', '#0c5f72'); bubbles(ctx, t, 2, 14);
    const cx = 540, cy = 1000;
    octo(ctx, cx, cy, 2.1, { t: t * 0.4, xray: true, eyes: false, curl: 0.6 });
    const hk = (i) => pop(t, T(2, 'two') - 0.1 + i * 0.25);
    const gk = EO(t, T(2, 'gills') - 0.3, T(2, 'gills') + 0.2);
    // gills: blood dots flow up each gill, turning from dark to bright blue once they pass through
    [-1, 1].forEach((sd) => {
      const gx = cx + sd * 120, gy = cy - 40;
      if (gk > 0) { ctx.save(); ctx.globalAlpha = gk; gill(ctx, gx, gy, 1.5, sd, PAL.pink); ctx.restore(); }
      const fk = ph(t, T(3, 'pushing') - 0.1, T(3, 'pushing') + 0.4);
      if (fk > 0) for (let i = 0; i < 10; i++) { const u = ((t * 0.45 + i / 10) % 1); const px = gx + sd * (30 + Math.sin(u * 12 + i) * 30), py = gy + 10 - u * 230; const lit = u > 0.5 && t > T(4, 'oxygen'); circle(ctx, px, py, 13 * fk, lit ? PAL.blue2 : '#27407a'); }
      heart(ctx, gx, gy + 90, 110, PAL.blue, hk(sd < 0 ? 0 : 1) * beatK(t, 90, 0.12), 12);
    });
    pill(ctx, 'HEART 1', 290, 1290, { k: hk(0), size: 46 }); pill(ctx, 'HEART 2', 790, 1290, { k: hk(1), size: 46 });
    bigText(ctx, 'GILL HEARTS', 540, 340, 110, PAL.cream, pop(t, T(2, 'hearts') - 0.1));
    pill(ctx, 'GILLS', 540, 520, { k: pop(t, T(2, 'gills') - 0.1), bg: PAL.pink, size: 56 });
    // oxygen from the water
    const ok = ph(t, T(4, 'oxygen') - 0.15, T(4, 'oxygen') + 0.3);
    if (ok > 0) { for (let i = 0; i < 8; i++) { const u = (t * 0.7 + i / 8) % 1, sd = i % 2 ? 1 : -1; const px = H.lerp(sd > 0 ? 1020 : 60, cx + sd * 150, u), py = 820 + (i % 4) * 40; ctx.save(); ctx.globalAlpha = ok * (1 - u * 0.6); circle(ctx, px, py, 22, PAL.white); text(ctx, 'O₂', px, py + 2, 22, PAL.teal, 700); ctx.restore(); } }
    pill(ctx, '+ OXYGEN', 540, 1500, { k: pop(t, T(4, 'oxygen') - 0.1), bg: PAL.white, col: PAL.teal, size: 64 });
    pill(ctx, 'FROM THE WATER', 540, 1620, { k: pop(t, T(4, 'water') - 0.1), bg: PAL.teal, col: PAL.white, size: 44, sh: 10 });
  };
  S.body = (ctx, t) => {
    sky(ctx, '#ff9e7a', '#c2457a');
    const cx = 540, cy = 960;
    // sunburst
    ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.08)'; for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2 + t * 0.1; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, 1300, a, a + 0.12); ctx.closePath(); ctx.fill(); } ctx.restore();
    octo(ctx, cx, cy + 40, 2.0, { t: t * 0.5, col: '#ffd0c2', col2: '#f5b3a2', eyes: false, curl: 0.7 });
    // fresh blood flowing out along the arms
    const fk = ph(t, T(6, 'sends') - 0.1, T(6, 'blood'));
    if (fk > 0) for (let a = 0; a < 8; a++) { const ang = Math.PI / 2 + (a - 3.5) * 0.3, L = 650; for (let i = 0; i < 5; i++) { const u = ((t * 0.6 + i / 5 + a * 0.07) % 1) * fk; circle(ctx, cx + Math.cos(ang) * (60 + u * L) * 0.95, cy - 40 + Math.sin(ang) * (60 + u * L), 15 * (1 - u * 0.4), PAL.blue); } }
    const hk = pop(t, T(5, 'third') - 0.15);
    heart(ctx, cx, cy - 60, 300 * (1 + 0.12 * pop(t, T(5, 'big') - 0.1)), PAL.red, hk * beatK(t, 80, 0.1), 22);
    bigText(ctx, 'HEART 3', 540, 330, 130, PAL.cream, pop(t, T(5, 'heart') - 0.12));
    pill(ctx, 'THE BIG ONE', 540, 500, { k: pop(t, T(5, 'big') - 0.1), bg: PAL.yellow, size: 52 });
    pill(ctx, 'WHOLE BODY', 540, 1480, { k: pop(t, T(6, 'whole') - 0.1), bg: PAL.blue, col: PAL.white, size: 60 });
    const qk = pop(t, T(7, 'why') - 0.15);
    if (qk > 0.01) { ctx.save(); ctx.fillStyle = `rgba(29,29,58,${0.55 * Math.min(1, qk)})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); bigText(ctx, 'WHY NOT', 540, 820, 140, PAL.cream, qk); bigText(ctx, 'JUST ONE?', 540, 990, 140, PAL.yellow, pop(t, T(7, 'one') - 0.15)); }
  };
  const drop = (ctx, x, y, s, col, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => { ctx.fillStyle = c || col; ctx.beginPath(); ctx.moveTo(0, -120); ctx.bezierCurveTo(30, -60, 90, -10, 90, 40); ctx.arc(0, 40, 90, 0, Math.PI); ctx.bezierCurveTo(-90, -10, -30, -60, 0, -120); ctx.closePath(); ctx.fill(); }, 18); ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.beginPath(); ctx.ellipse(-40, 20, 14, 28, 0.3, 0, Math.PI * 2); ctx.fill(); ctx.restore(); };
  const atom = (ctx, x, y, r, sym, bg, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => circle(ctx, 0, 0, r, c || bg), 14); text(ctx, sym, 0, 4, r * 0.95, PAL.white, 700); ctx.restore(); };
  S.copper = (ctx, t) => {
    sky(ctx, '#fff1d6', '#ffd59a');
    ctx.fillStyle = '#f6c47a'; ctx.fillRect(0, 1500, W, HH);
    // octopus blood (big, right) vs ours (left)
    const ok = pop(t, T(8, 'blood') - 0.15);
    const blueU = EO(t, T(9, 'blue') - 0.5, T(9, 'blue') + 0.1);
    const dcol = H.rgba(H.mix('#8aa0b8', PAL.blue, blueU));
    drop(ctx, 720, 980, 2.2, dcol, ok);
    atom(ctx, 720, 1060, 85, 'Cu', PAL.copper, pop(t, T(8, 'copper') - 0.12) * (1 + 0.12 * pop(t, T(9, 'copper') - 0.1, T(9, 'copper') + 0.3)));
    // oxygen hitches a ride
    const o2 = pop(t, T(8, 'oxygen') - 0.12);
    [[-1, -0.6], [1, -0.6], [0, 1]].forEach(([a, b], i) => atom(ctx, 720 + a * 150, 1060 + b * 140 - (i === 2 ? -60 : 0), 46, 'O₂', PAL.teal, o2 * pop(t, T(8, 'oxygen') - 0.12 + i * 0.08)));
    pill(ctx, 'OCTOPUS', 720, 640, { k: ok, bg: PAL.ink, col: PAL.cream, size: 50 });
    const ik = pop(t, T(8, 'iron') - 0.2);
    drop(ctx, 250, 1200, 1.1, PAL.red, ik); atom(ctx, 250, 1240, 50, 'Fe', PAL.iron, ik);
    pill(ctx, 'YOU', 250, 970, { k: ik, bg: PAL.red, col: PAL.white, size: 46 });
    bigText(ctx, 'COPPER', 540, 340, 140, PAL.copper, pop(t, T(8, 'copper') - 0.15));
    pill(ctx, 'NOT IRON', 540, 500, { k: pop(t, T(8, 'not') - 0.1), bg: PAL.iron, col: PAL.white, size: 52 });
    bigText(ctx, '= BLUE!', 540, 1620, 120, PAL.blue, pop(t, T(9, 'blue') - 0.15), 16);
  };
  S.oxygen = (ctx, t) => {
    sky(ctx, '#2b2f77', '#5b3a9c');
    // capacity bars: ours vs theirs
    const bk = pop(t, T(10, 'worse') - 0.15);
    const fill = EO(t, T(10, 'holding') - 0.1, T(10, 'oxygen') + 0.4);
    const bars = [{ lab: 'OURS', col: PAL.red, n: 10, x: 300 }, { lab: 'OCTOPUS', col: PAL.blue, n: 4, x: 780 }];
    bars.forEach((b, j) => {
      ctx.save(); ctx.translate(b.x, 760); ctx.scale(bk, bk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -150, -320, 300, 520, 40); ctx.fill(); }, 20);
      const shown = Math.floor(b.n * fill + 1e-6);
      for (let i = 0; i < shown; i++) { const cx_ = -60 + (i % 2) * 120, cy_ = 150 - Math.floor(i / 2) * 95; circle(ctx, cx_, cy_, 40, PAL.teal); text(ctx, 'O₂', cx_, cy_ + 2, 34, PAL.white); }
      ctx.restore();
      pill(ctx, b.lab, b.x, 1060, { k: bk * (j === 0 ? 1 + 0.15 * pop(t, T(10, 'ours') - 0.1, T(10, 'ours') + 0.3) : 1), bg: b.col, col: PAL.white, size: 48 });
    });
    bigText(ctx, 'HOLDS LESS O₂', 540, 270, 104, PAL.cream, pop(t, T(10, 'worse') - 0.15));
    // extra pumping power: three hearts + gauge
    const pk = pop(t, T(11, 'octopus') - 0.15);
    const rate = t > T(11, 'pumping') ? 150 : 80;
    [PAL.blue, PAL.red, PAL.blue].forEach((c, i) => heart(ctx, 260 + i * 280, 1300, i === 1 ? 190 : 140, c, pop(t, T(11, 'octopus') - 0.15 + i * 0.1) * beatK(t + i * 0.13, rate, 0.14), 14));
    const gk = pop(t, T(11, 'extra') - 0.15);
    if (gk > 0.01) { ctx.save(); ctx.translate(540, 1610); ctx.scale(gk, gk);
      ctx.lineCap = 'round'; ctx.lineWidth = 34; ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.beginPath(); ctx.arc(0, 0, 120, Math.PI, 0); ctx.stroke();
      const lvl = EO(t, T(11, 'extra'), T(11, 'power') + 0.2); ctx.strokeStyle = H.rgba(H.mix(PAL.yellow, PAL.red, lvl)); ctx.beginPath(); ctx.arc(0, 0, 120, Math.PI, Math.PI + Math.PI * lvl * 0.97 + 0.01); ctx.stroke();
      ctx.rotate(Math.PI + Math.PI * lvl * 0.97); ctx.fillStyle = PAL.cream; rr(ctx, 0, -8, 100, 16, 8); ctx.fill(); ctx.restore(); circle(ctx, 540, 1610, 22 * gk, PAL.cream); }
    pill(ctx, 'EXTRA PRESSURE', 540, 1150, { k: pop(t, T(11, 'power') - 0.15), bg: PAL.yellow, size: 56 });
  };
  S.swim = (ctx, t) => {
    sky(ctx, '#0d5aa7', '#041b3d'); rays(ctx, t, 0.06);
    bubbles(ctx, t * 2.5, 5, 26);
    bigText(ctx, 'THE WEIRD PART', 540, 300, 112, PAL.yellow, pop(t, T(12, 'weird') - 0.2));
    // the octopus jets across, mantle first, arms trailing
    const sk = EI(t, T(13, 'when') - 0.3, BEATS[15].s + 0.3);
    const ox = H.lerp(-150, 1250, sk), oy = H.lerp(1000, 600, sk) + Math.sin(t * 6) * 10;
    if (t > T(13, 'when') - 0.4) { const pulse = 0.5 + 0.5 * Math.sin(t * 6); octo(ctx, ox, oy, 0.95 + 0.05 * pulse, { t: t * 2, rot: Math.PI * 0.62 + 0.0, trail: 0.85 + 0.1 * pulse, spread: 0.05, smile: false }); }
    pill(ctx, 'SWIMMING', 540, 1060, { k: pop(t, T(13, 'swims') - 0.12), bg: PAL.cream, size: 60 });
    // heart monitor card
    const ck = pop(t, T(14, 'main') - 0.15);
    if (ck > 0.01) { ctx.save(); ctx.translate(540, 1390); ctx.scale(ck, ck);
      longShadow(ctx, (c) => { ctx.fillStyle = c || '#14213d'; rr(ctx, -440, -200, 880, 400, 40); ctx.fill(); }, 20);
      const stopped = t > T(14, 'stops');
      heart(ctx, -320, 0, 170, stopped ? '#8a8fa3' : PAL.red, stopped ? 1 : beatK(t, 84, 0.12), 0, true);
      ecg(ctx, -200, 0, 600, 220, t, T(14, 'stops'));
      ctx.restore(); }
    const stk = pop(t, T(14, 'stops') - 0.1);
    if (stk > 0.01) { ctx.save(); ctx.translate(560, 1640 - 30); ctx.rotate(-0.08); ctx.scale(stk, stk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.red; rr(ctx, -230, -60, 460, 120, 30); ctx.fill(); }, 12); text(ctx, 'STOPS!', 0, 4, 92, PAL.white); ctx.restore(); }
  };
  S.crawl = (ctx, t) => {
    sky(ctx, '#3fb6d9', '#1a6f8f'); rays(ctx, t, 0.07); bubbles(ctx, t, 7, 10);
    // seafloor with rocks and kelp
    ctx.fillStyle = '#f2c66d'; ctx.beginPath(); ctx.moveTo(0, 1360); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, 1340 + Math.sin(x * 0.008 + 1) * 24); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.fill();
    ctx.fillStyle = '#e0a94c'; ctx.fillRect(0, 1560, W, HH - 1560);
    [[120, 1340, 90], [930, 1350, 120]].forEach(([x, y, r]) => { ctx.fillStyle = '#6b7a8f'; ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.6, 0, Math.PI, 0); ctx.fill(); });
    for (let k = 0; k < 4; k++) { const kx = 60 + k * 320 + (k % 2) * 60; ctx.strokeStyle = '#2f9e5b'; ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(kx, 1360); for (let j = 1; j <= 8; j++) ctx.lineTo(kx + Math.sin(t * 1.5 + j * 0.7 + k) * 22 * j / 8, 1360 - j * 70); ctx.stroke(); }
    // battery draining while swimming
    const bk = pop(t, T(15, 'swimming') - 0.15, T(16, 'which') - 0.1);
    if (bk > 0.01) { const lvl = 1 - EO(t, T(15, 'tires') - 0.2, T(15, 'fast') + 0.2); ctx.save(); ctx.translate(540, 800); ctx.scale(bk, bk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -200, -100, 400, 200, 30); ctx.fill(); rr(ctx, 200, -40, 34, 80, 12); ctx.fill(); }, 18);
      ctx.fillStyle = lvl > 0.4 ? PAL.green : lvl > 0.18 ? PAL.yellow : PAL.red; rr(ctx, -175, -75, Math.max(20, 350 * lvl), 150, 18); ctx.fill(); ctx.restore();
      bigText(ctx, 'SWIMMING', 540, 360, 120, PAL.cream, bk); pill(ctx, 'TIRES IT OUT', 540, 540, { k: pop(t, T(15, 'tires') - 0.1) * bk, bg: PAL.red, col: PAL.white, size: 56 }); }
    // the octopus would rather crawl
    const ck = EO(t, T(16, 'which') - 0.3, T(16, 'which') + 0.2);
    const ox = H.lerp(-300, 560, EO(t, T(16, 'which') - 0.3, T(16, 'crawl') + 0.2));
    if (ck > 0) octo(ctx, ox, 1110 + Math.sin(t * 5) * 6, 1.05, { t: t * 1.2, walk: 1, spread: 0.32, curl: 0.4 });
    if (ck > 0) heart(ctx, ox + 170, 830, 110, PAL.red, beatK(t, 70, 0.12) * pop(t, T(16, 'octopuses') - 0.1), 10);
    bigText(ctx, 'RATHER', 540, 360, 120, PAL.cream, pop(t, T(16, 'rather') - 0.15));
    bigText(ctx, 'CRAWL!', 540, 520, 140, PAL.yellow, pop(t, T(16, 'crawl') - 0.15));
  };
  const human = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#ffd7b5'; circle(ctx, 0, -330, 95, c || '#ffd7b5'); ctx.fillStyle = c || PAL.teal; rr(ctx, -150, -220, 300, 380, 80); ctx.fill(); ctx.fillStyle = c || '#24456b'; rr(ctx, -120, 140, 100, 220, 40); ctx.fill(); rr(ctx, 20, 140, 100, 220, 40); ctx.fill(); }, 24);
    ctx.fillStyle = PAL.ink; circle(ctx, -32, -335, 11, PAL.ink); circle(ctx, 32, -335, 11, PAL.ink); ctx.fillStyle = '#5a3a2a'; ctx.beginPath(); ctx.arc(0, -350, 98, Math.PI * 1.05, Math.PI * 1.95); ctx.fill();
    ctx.restore(); };
  S.end = (ctx, t) => {
    sky(ctx, '#8a5cf6', '#e0569b');
    ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.07)'; for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2 + t * 0.15; ctx.beginPath(); ctx.moveTo(540, 1000); ctx.arc(540, 1000, 1400, a, a + 0.11); ctx.closePath(); ctx.fill(); } ctx.restore();
    human(ctx, 540, 1180, 1.25);
    heart(ctx, 540, 1000, 150, PAL.red, beatK(t, 75, 0.1) * pop(t, T(17, 'you') - 0.1), 10);
    const sp = ph(t, T(18, 'spare') - 0.1, T(18, 'spare') + 0.6);
    heart(ctx, 230, 820 - Math.sin(t * 2) * 14, 140, PAL.blue, pop(t, T(17, 'three') - 0.12) * (1 + 0.2 * Math.sin(sp * Math.PI)), 12);
    heart(ctx, 850, 820 + Math.sin(t * 2) * 14, 140, PAL.blue, pop(t, T(17, 'hearts') - 0.2), 12);
    bigText(ctx, '3 HEARTS?', 540, 330, 140, PAL.cream, pop(t, T(17, 'three') - 0.15));
    bigText(ctx, '?', 230, 640, 120, PAL.yellow, pop(t, T(18, 'spare') - 0.12), 12);
    pill(ctx, 'THE SPARE ONE = ?', 540, 1560, { k: pop(t, T(18, 'spare') - 0.12), bg: PAL.yellow, size: 60 });
  };

  const ORDER = [['hook', 0], ['gills', CUTS.gills], ['body', CUTS.body], ['copper', CUTS.copper], ['oxygen', CUTS.oxygen], ['swim', CUTS.swim], ['crawl', CUTS.crawl], ['end', CUTS.end]];
  const WIPE = 0.5;
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
    H.vignette(ctx, Wd, Hd, 0.16, '20,10,50');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    const beat = (t0, t1, bpm, g = 0.35) => { for (let t = t0; t < t1; t += 60 / bpm) { k.play('thud', t, { f: 70, gain: g, minor: true }); k.play('thud', t + 0.22 * 60 / bpm, { f: 60, gain: g * 0.6, minor: true }); } };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 96, gain: 0.28, chords: [['D4', 'F4', 'A4', 'C5'], ['Bb3', 'D4', 'F4', 'A4'], ['G3', 'Bb3', 'D4', 'F4'], ['A3', 'C#4', 'E4', 'G4']] });
    k.noise(0, { dur: 4.5, color: 'brown', filter: 'lowpass', f: [[0, 400], [4.5, 300]], gain: 0.12, a: 0.5, verb: 0.3 });
    popAt(T(0, 'three') - 0.15, 520, 0.9, 0, false);
    [0, 1, 2].forEach((i) => popAt(T(0, 'hearts') - 0.1 + i * 0.12, 600 + i * 90, 0.8, -0.4 + i * 0.4, false));
    k.play('ding', T(0, 'blue'), { f: 'E6', gain: 0.3 }); popAt(T(0, 'blue') - 0.1, 800, 0.7, 0);
    k.play('stamp', T(1, 'why') - 0.05, { gain: 0.45, pan: 0.4 });
    wipe(CUTS.gills);
    popAt(T(2, 'hearts') - 0.1, 560, 0.8, 0, false); popAt(T(2, 'two') - 0.1, 700, 0.6, -0.4); popAt(T(2, 'two') + 0.15, 760, 0.6, 0.4);
    beat(T(2, 'hearts'), CUTS.body - 0.4, 90, 0.25);
    popAt(T(2, 'gills') - 0.1, 900, 0.7, 0, false);
    k.noise(T(3, 'pushing') - 0.1, { dur: 2.0, color: 'brown', filter: 'lowpass', f: [[0, 300], [1, 800], [2, 400]], gain: 0.18, a: 0.3, verb: 0.2 });
    for (let i = 0; i < 6; i++) k.play('blip', T(4, 'oxygen') - 0.15 + i * 0.12, { gain: 0.3, pan: (i % 2 ? 0.5 : -0.5), minor: true });
    popAt(T(4, 'oxygen') - 0.1, 1000, 0.8, 0, false); popAt(T(4, 'water') - 0.1, 700, 0.5, 0);
    wipe(CUTS.body);
    k.play('impact', T(5, 'third') - 0.1, { gain: 0.7 }); popAt(T(5, 'heart') - 0.12, 560, 0.8, 0, false);
    beat(T(5, 'third'), T(7, 'why') - 0.2, 80, 0.45);
    k.play('ding', T(5, 'big'), { f: 'A5', gain: 0.3 }); popAt(T(5, 'big') - 0.1, 700, 0.7, 0);
    k.play('riser', T(6, 'sends') - 0.2, { dur: 1.0, gain: 0.45 }); popAt(T(6, 'whole') - 0.1, 800, 0.8, 0, false);
    k.play('stamp', T(7, 'why') - 0.1, { gain: 0.5 }); k.play('stamp', T(7, 'one') - 0.1, { gain: 0.5, pan: 0.2 });
    wipe(CUTS.copper);
    popAt(T(8, 'blood') - 0.15, 600, 0.8, 0.4, false);
    [0, 1, 2].forEach((i) => popAt(T(8, 'oxygen') - 0.12 + i * 0.08, 900 + i * 100, 0.6, 0.4));
    k.play('impact', T(8, 'copper') - 0.1, { gain: 0.6 }); k.play('ding', T(8, 'copper'), { f: 'C6', gain: 0.3 });
    k.play('buzz', T(8, 'not'), { f: 110, dur: 0.25, gain: 0.3, pan: -0.4 }); popAt(T(8, 'iron') - 0.2, 500, 0.7, -0.5, false);
    k.play('sparkle', T(9, 'blue') - 0.3, { n: 7, gain: 0.7 }); k.play('ding', T(9, 'blue'), { f: 'E6', gain: 0.35 });
    wipe(CUTS.oxygen);
    popAt(T(10, 'worse') - 0.15, 560, 0.8, 0, false);
    for (let i = 0; i < 10; i++) k.play('tick', T(10, 'holding') - 0.1 + i * 0.09, { f: 3000, gain: 0.5, pan: -0.4, minor: true });
    k.play('error', T(10, 'oxygen') + 0.2, { f: 'A3', gain: 0.3 }); popAt(T(10, 'ours') - 0.1, 700, 0.6, -0.4);
    [0, 1, 2].forEach((i) => popAt(T(11, 'octopus') - 0.15 + i * 0.1, 600 + i * 80, 0.7, -0.4 + i * 0.4, false));
    beat(T(11, 'octopus'), T(11, 'pumping'), 80, 0.35); beat(T(11, 'pumping'), CUTS.swim - 0.3, 150, 0.35);
    k.play('riser', T(11, 'extra') - 0.1, { dur: 1.1, gain: 0.55 }); k.play('impact', T(11, 'power'), { gain: 0.8 });
    wipe(CUTS.swim);
    k.play('stamp', T(12, 'weird') - 0.2, { gain: 0.5 });
    k.play('whoosh', T(13, 'when') - 0.1, { dur: 1.2, gain: 0.7 }); k.noise(T(13, 'when'), { dur: 3.5, color: 'pink', filter: 'bandpass', f: [[0, 600], [3.5, 1500]], q: 1, gain: 0.15, a: 0.3, verb: 0.2 });
    popAt(T(13, 'swims') - 0.12, 640, 0.7, 0, false); popAt(T(14, 'main') - 0.15, 560, 0.7, 0);
    for (let t = T(14, 'main'); t < T(14, 'stops'); t += 60 / 84) k.play('blip', t, { gain: 0.35, minor: true });
    k.tone(T(14, 'stops'), { f: 'A5', type: 'sine', dur: 1.4, gain: 0.12 }); k.play('impact', T(14, 'stops') - 0.05, { gain: 0.9 });
    wipe(CUTS.crawl);
    popAt(T(15, 'swimming') - 0.15, 560, 0.7, 0, false);
    k.tone(T(15, 'tires') - 0.2, { f: [[0, 660], [1.2, 160]], type: 'triangle', dur: 1.3, gain: 0.12 });
    k.play('error', T(15, 'fast'), { f: 'G3', gain: 0.3 });
    for (let i = 0; i < 8; i++) k.play('tock', T(16, 'which') + i * 0.3, { f: 260 + (i % 2) * 40, gain: 0.3, minor: true });
    popAt(T(16, 'rather') - 0.15, 600, 0.8, 0, false); k.play('success', T(16, 'crawl') - 0.1, { f: 'C6', gain: 0.4 });
    wipe(CUTS.end);
    popAt(T(17, 'you') - 0.1, 560, 0.7, 0); popAt(T(17, 'three') - 0.15, 640, 0.9, 0, false); popAt(T(17, 'three') - 0.12, 760, 0.7, -0.5); popAt(T(17, 'hearts') - 0.2, 820, 0.7, 0.5);
    k.play('sparkle', T(18, 'spare') - 0.1, { n: 5, gain: 0.6 }); popAt(T(18, 'spare') - 0.12, 900, 0.8, 0, false);
    k.tone(T(18, 'one') + 0.3, { f: 'D3', type: 'triangle', dur: 1.0, gain: 0.1, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
