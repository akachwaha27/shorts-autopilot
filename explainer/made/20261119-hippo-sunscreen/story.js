// ================= Flat-Vector Science, vertical 1080x1920: "Why don't hippos get sunburned?" =================
// Unattended run: no storyboard step. Every frame is a pure function of t.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    {"s": 0.25, "e": 2.67, "w": {"hippos": 0.25, "sweat": 0.72, "bright": 1.11, "red": 1.58, "but": 1.81, "not": 2.05, "blood": 2.28}}, // 0
    {"s": 3.11, "e": 5.46, "w": {"how": 3.11, "do": 3.3, "they": 3.42, "never": 3.67, "get": 3.98, "sunburned": 4.16, "when": 4.72, "you": 4.97, "would": 5.15}}, // 1
    {"s": 6.04, "e": 8.92, "w": {"hippos": 6.04, "spend": 6.45, "their": 6.8, "days": 7.14, "soaking": 7.41, "in": 7.89, "african": 8.03, "rivers": 8.51}}, // 2
    {"s": 9.42, "e": 11.72, "w": {"but": 9.42, "they": 9.63, "often": 9.91, "haul": 10.26, "out": 10.54, "onto": 10.75, "sunny": 11.03, "banks": 11.37}}, // 3
    {"s": 12.12, "e": 15.01, "w": {"and": 12.12, "their": 12.37, "skin": 12.78, "has": 13.11, "a": 13.36, "super": 13.44, "thin": 13.86, "outer": 14.19, "layer": 14.6}}, // 4
    {"s": 15.01, "e": 16.32, "w": {"that": 15.01, "dries": 15.34, "out": 15.75, "fast": 15.99}}, // 5
    {"s": 16.72, "e": 18.75, "w": {"so": 16.72, "it": 16.91, "oozes": 17.09, "a": 17.55, "thick": 17.64, "oily": 18.1, "goo": 18.47}}, // 6
    {"s": 19.1, "e": 20.38, "w": {"at": 19.1, "first": 19.27, "its": 19.7, "clear": 19.96}}, // 7
    {"s": 20.72, "e": 21.73, "w": {"then": 20.72, "within": 20.96, "minutes": 21.32}}, // 8
    {"s": 21.79, "e": 22.84, "w": {"it": 21.79, "turns": 21.93, "bright": 22.25, "red": 22.65}}, // 9
    {"s": 23.11, "e": 24.06, "w": {"and": 23.11, "later": 23.33, "brown": 23.7}}, // 10
    {"s": 24.47, "e": 26.01, "w": {"people": 24.47, "call": 24.89, "it": 25.17, "blood": 25.31, "sweat": 25.66}}, // 11
    {"s": 26.3, "e": 27.32, "w": {"but": 26.3, "its": 26.52, "not": 26.74, "blood": 26.96}}, // 12
    {"s": 27.65, "e": 29.2, "w": {"and": 27.65, "its": 27.83, "not": 28.01, "really": 28.18, "sweat": 28.54, "either": 28.84}}, // 13
    {"s": 29.56, "e": 31.72, "w": {"scientists": 29.56, "found": 30.19, "two": 30.51, "pigments": 30.7, "inside": 31.21, "it": 31.59}}, // 14
    {"s": 32.19, "e": 34.0, "w": {"one": 32.19, "red": 32.49, "and": 32.79, "one2": 33.09, "orange": 33.39}}, // 15
    {"s": 34.34, "e": 36.24, "w": {"both": 34.34, "soak": 34.63, "up": 34.92, "ultraviolet": 35.07, "light": 35.87}}, // 16
    {"s": 36.62, "e": 38.01, "w": {"like": 36.62, "builtin": 36.9, "sunscreen": 37.39}}, // 17
    {"s": 38.39, "e": 40.21, "w": {"and": 38.39, "the": 38.6, "red": 38.81, "one": 39.02, "slows": 39.23, "down": 39.58, "germs": 39.86}}, // 18
    {"s": 40.33, "e": 43.13, "w": {"so": 40.33, "scrapes": 40.49, "from": 41.05, "hippo": 41.37, "fights": 41.77, "stay": 42.25, "cleaner": 42.57}}, // 19
    {"s": 43.5, "e": 45.07, "w": {"sunscreen": 43.5, "and": 44.12, "germ": 44.32, "fighter": 44.59}}, // 20
    {"s": 45.43, "e": 46.75, "w": {"in": 45.43, "one": 45.62, "gooey": 45.9, "coat": 46.38}}, // 21
    {"s": 47.21, "e": 49.05, "w": {"so": 47.21, "if": 47.34, "your": 47.47, "sweat": 47.73, "could": 48.06, "be": 48.39, "any": 48.52, "color": 48.72}}, // 22
    {"s": 49.38, "e": 50.49, "w": {"which": 49.38, "one": 49.66, "would": 49.82, "you": 50.1, "pick": 50.27}}, // 23
  ];
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + i + ' ' + w); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = { river: 5.75, skin: 11.92, ooze: 16.52, myth: 24.27, pigments: 29.38, germs: 38.2, combo: 43.32, end: 46.98 };

  // ---------- Flat-Vector Science house kit ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', red: '#ef4a4a', red2: '#c93636', blue: '#2f7bff', yellow: '#ffd23f', orange: '#ff9a1f', green: '#1f9e5a', lime: '#8fd94a', white: '#ffffff', coral: '#ff6b5b', teal: '#1fb6a6', purple: '#8a5cf6', steel: '#3b4a6b' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(10,15,50,0.18)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 48, padX = size * 0.7, h = size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, 700); ctx.restore();
  };
  const bigText = (ctx, s, x, y, size, col, k = 1, sh = 20) => { if (k <= 0.01) return; const mw = measure(ctx, s, size); const fit = Math.min(1, 980 / mw); ctx.save(); ctx.translate(x, y); ctx.scale(k * fit, k * fit); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const burst = (ctx, cx, cy, t, a = 0.08, n = 14) => { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; for (let i = 0; i < n; i++) { const an = i / n * Math.PI * 2 + t * 0.12; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, 1500, an, an + 0.12); ctx.closePath(); ctx.fill(); } ctx.restore(); };
  const limb = (ctx, pts, wdt, col) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore(); };
  const cross = (ctx, x, y, s, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => circle(ctx, 0, 0, 60, c || col), 12); limb(ctx, [[-22, -22], [22, 22]], 16, PAL.white); limb(ctx, [[22, -22], [-22, 22]], 16, PAL.white); ctx.restore(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 22, k = 1) => { if (k <= 0.01) return; const xe = x0 + (x1 - x0) * k, ye = y0 + (y1 - y0) * k, a = Math.atan2(ye - y0, xe - x0); limb(ctx, [[x0, y0], [xe - Math.cos(a) * 20, ye - Math.sin(a) * 20]], wdt, col); ctx.save(); ctx.translate(xe, ye); ctx.rotate(a); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt, -wdt * 1.5); ctx.lineTo(-wdt, wdt * 1.5); ctx.closePath(); ctx.fill(); ctx.restore(); };


  const HP = { body: '#8e7aa6', dark: '#6b5884', light: '#a996bf', belly: '#d9a3b4', inner: '#e98aa0' };
  const GOO = (c) => { // c: 0 clear .. 1 red .. 2 brown
    if (c <= 1) return H.mix('#dff3ff', '#e5302a', c);
    return H.mix('#e5302a', '#8a4a22', c - 1);
  };

  // ---------- the hippo: side view facing right; origin = body centre, feet at y ~ +262 ----------
  const DROPS = (() => { const r = H.rng(77); const a = []; for (let i = 0; i < 34; i++) { let x, y; if (i < 24) { const an = r.range(-2.7, -0.3), rad = r.range(0.45, 0.9); x = Math.cos(an) * 320 * rad; y = Math.sin(an) * 190 * rad + 10; } else { x = r.range(250, 520); y = r.range(-150, 40); } a.push({ x, y, s: r.range(0.7, 1.25), ph: r(), sp: r.range(0.12, 0.3), d: r() }); } return a; })();
  const drop = (ctx, x, y, r, col, a = 1) => { ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, y - r * 1.9); ctx.bezierCurveTo(x + r * 0.5, y - r, x + r, y - r * 0.3, x + r, y + r * 0.2); ctx.arc(x, y + r * 0.2, r, 0, Math.PI); ctx.bezierCurveTo(x - r, y - r * 0.3, x - r * 0.5, y - r, x, y - r * 1.9); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.beginPath(); ctx.ellipse(x - r * 0.35, y - r * 0.1, r * 0.2, r * 0.32, -0.3, 0, Math.PI * 2); ctx.fill(); ctx.restore(); };
  const hippo = (ctx, x, y, s, t, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.flip ? -1 : 1), s);
    const breathe = Math.sin(t * 2.2) * 4, jaw = o.jaw || 0, ear = Math.sin(t * 3.1) > 0.92 ? 0.25 : 0;
    const shape = (c) => {
      const col = (k) => c || HP[k];
      ctx.fillStyle = col('dark');
      for (const [lx, w] of [[-250, 96], [80, 100]]) { rr(ctx, lx, 70, w, 192, 34); ctx.fill(); }
      ctx.fillStyle = col('body');
      for (const [lx, w] of [[-150, 104], [190, 108]]) { rr(ctx, lx, 70, w, 196, 36); ctx.fill(); }
      ctx.beginPath(); ctx.ellipse(0, breathe * 0.3, 340, 205 + breathe, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(300, -50, 150, 135, 0.15, 0, Math.PI * 2); ctx.fill();
      ctx.save(); ctx.translate(430, 10); ctx.rotate(jaw * 0.35); ctx.beginPath(); ctx.ellipse(10, 40, 150, 70, 0.05, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      ctx.beginPath(); ctx.ellipse(450, -10, 158, 102, -0.05, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(355, -150, 46, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(530, -80, 38, 0, Math.PI * 2); ctx.fill();
      ctx.save(); ctx.translate(285, -175); ctx.rotate(-0.4 - ear); ctx.beginPath(); ctx.ellipse(0, -18, 24, 40, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      limb(ctx, [[-335, -20], [-372, 20 + Math.sin(t * 4) * 8]], 18, col('body'));
    };
    longShadow(ctx, shape, o.sh ?? 22);
    if (o.flat) { ctx.restore(); return; }
    ctx.fillStyle = HP.belly; ctx.beginPath(); ctx.ellipse(-10, 120, 270, 70, 0, Math.PI * 0.05, Math.PI * 0.95); ctx.fill();
    ctx.fillStyle = HP.light; ctx.beginPath(); ctx.ellipse(-60, -110, 200, 55, -0.08, 0, Math.PI * 2); ctx.globalAlpha = 0.45; ctx.fill(); ctx.globalAlpha = 1;
    ctx.save(); ctx.translate(285, -175); ctx.rotate(-0.4 - ear); ctx.fillStyle = HP.inner; ctx.beginPath(); ctx.ellipse(0, -16, 12, 26, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    // mouth line + open jaw
    if (jaw > 0.02) { ctx.save(); ctx.translate(430, 10); ctx.fillStyle = HP.inner; ctx.beginPath(); ctx.moveTo(-60, 20); ctx.quadraticCurveTo(80, 20 + jaw * 120, 170, 18); ctx.lineTo(170, 12); ctx.quadraticCurveTo(80, 18, -60, 14); ctx.closePath(); ctx.fill(); ctx.restore(); }
    limb(ctx, [[360, 40], [480, 52], [590, 30]], 9, HP.dark);
    const blink = (Math.sin(t * 1.3 + 1) > 0.97) ? 0.15 : 1;
    ctx.save(); ctx.translate(360, -158); ctx.scale(1, blink); circle(ctx, 0, 0, 17, PAL.ink); circle(ctx, -5, -6, 6, PAL.white); ctx.restore();
    for (const dx of [0, 34]) { ctx.fillStyle = HP.dark; ctx.beginPath(); ctx.ellipse(512 + dx, -88, 9, 14, 0.3, 0, Math.PI * 2); ctx.fill(); }
    // sweat
    const sw = o.sweat || 0;
    if (sw > 0.01) {
      const colA = GOO(o.goo ?? 1);
      DROPS.forEach((d, i) => { const k = H.clamp(sw * 1.6 - d.d * 0.6); if (k <= 0) return;
        const slide = ((t * d.sp + d.ph) % 1); const yy = d.y + slide * 34, a = Math.min(1, (1 - slide) * 3);
        ctx.save(); ctx.globalAlpha = 0.35 * k; ctx.fillStyle = H.rgba(colA); ctx.beginPath(); ctx.ellipse(d.x, d.y + 10, 30 * d.s, 18 * d.s, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        drop(ctx, d.x, yy, 13 * d.s * k, H.rgba(colA), a * (o.goo === 0 ? 0.75 : 1)); });
    }
    ctx.restore();
  };

  const sun = (ctx, x, y, r, t, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(t * 0.3);
    ctx.fillStyle = PAL.orange; for (let i = 0; i < 12; i++) { ctx.rotate(Math.PI / 6); ctx.beginPath(); ctx.moveTo(-r * 0.22, -r * 1.12); ctx.lineTo(0, -r * 1.55 - Math.sin(t * 4 + i) * 8); ctx.lineTo(r * 0.22, -r * 1.12); ctx.closePath(); ctx.fill(); }
    circle(ctx, 0, 0, r, PAL.yellow); circle(ctx, 0, 0, r * 0.72, '#ffe27a'); ctx.restore(); };
  const ground = (ctx, y0, col, col2) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, y0); ctx.quadraticCurveTo(540, y0 - 60, W, y0); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.closePath(); ctx.fill(); if (col2) { ctx.fillStyle = col2; ctx.fillRect(0, y0 + 110, W, HH); } };
  const acacia = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = '#7a5236'; ctx.beginPath(); ctx.moveTo(-14, 0); ctx.lineTo(-6, -200); ctx.lineTo(-70, -260); ctx.lineTo(-60, -270); ctx.lineTo(4, -220); ctx.lineTo(60, -280); ctx.lineTo(70, -270); ctx.lineTo(14, -200); ctx.lineTo(14, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#3f8f4a'; ctx.beginPath(); ctx.ellipse(0, -290, 190, 46, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#4fa85a'; ctx.beginPath(); ctx.ellipse(-30, -305, 130, 30, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); };
  const water = (ctx, y0, t, col = 'rgba(40,150,190,0.92)', col2 = '#8fe0f0') => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, y0); for (let x = 0; x <= W; x += 30) ctx.lineTo(x, y0 + Math.sin(x * 0.014 + t * 2.4) * 12); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = col2; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); for (let x = 0; x <= W; x += 30) { const yy = y0 + Math.sin(x * 0.014 + t * 2.4) * 12; x ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy); } ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.18)'; const r = H.rng(5); for (let i = 0; i < 8; i++) { const xx = ((r() * W + t * 40 * (i % 2 ? 1 : -1)) % W + W) % W; rr(ctx, xx, y0 + 80 + r() * 300, r.range(80, 180), 10, 5); ctx.fill(); } };
  const molRing = (ctx, x, y, s, col, k, t, seed) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); ctx.rotate(Math.sin(t * 1.2 + seed) * 0.08);
    const hexes = [[0, 0], [104, 60], [104, -60], [-104, 60], [-104, -60], [208, 0]]; if (seed > 1) hexes.pop();
    const draw = (c) => { ctx.strokeStyle = c || col; ctx.lineWidth = 18; ctx.lineJoin = 'round'; for (const [hx, hy] of hexes) { ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + Math.PI / 6; const px = hx + Math.cos(a) * 62, py = hy + Math.sin(a) * 62; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.closePath(); ctx.stroke(); }
      ctx.fillStyle = c || col; for (const [px, py] of [[-160, -110], [-160, 110], [262, -40]]) circle(ctx, px, py, 20, ctx.fillStyle); };
    longShadow(ctx, draw, 12); ctx.restore(); };
  const germ = (ctx, x, y, r, col, t, seed) => { ctx.save(); ctx.translate(x, y); ctx.rotate(t * 0.5 + seed); ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 8; ctx.lineCap = 'round';
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; ctx.beginPath(); ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r); ctx.lineTo(Math.cos(a) * r * 1.45, Math.sin(a) * r * 1.45); ctx.stroke(); circle(ctx, Math.cos(a) * r * 1.5, Math.sin(a) * r * 1.5, 8, col); }
    ctx.beginPath(); for (let i = 0; i <= 24; i++) { const a = i / 24 * Math.PI * 2, rr2 = r * (1 + 0.08 * Math.sin(a * 5 + t * 3 + seed)); i ? ctx.lineTo(Math.cos(a) * rr2, Math.sin(a) * rr2) : ctx.moveTo(Math.cos(a) * rr2, Math.sin(a) * rr2); } ctx.closePath(); ctx.fill();
    ctx.rotate(-(t * 0.5 + seed)); circle(ctx, -r * 0.3, -r * 0.15, r * 0.16, PAL.white); circle(ctx, r * 0.3, -r * 0.15, r * 0.16, PAL.white); circle(ctx, -r * 0.3, -r * 0.12, r * 0.08, PAL.ink); circle(ctx, r * 0.3, -r * 0.12, r * 0.08, PAL.ink); ctx.restore(); };
  const card = (ctx, x, y, k, label, bg, draw, w = 430, h = 460) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, 46); ctx.fill(); }, 18);
    draw(); ctx.restore(); pill(ctx, label, x, y + h / 2 - 10, { k, bg, col: PAL.white, size: 46, sh: 10 }); };
  const shield = (ctx, x, y, s, col) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, -120); ctx.quadraticCurveTo(70, -90, 110, -90); ctx.quadraticCurveTo(110, 60, 0, 130); ctx.quadraticCurveTo(-110, 60, -110, -90); ctx.quadraticCurveTo(-70, -90, 0, -120); ctx.closePath(); ctx.fill();
    limb(ctx, [[-45, 0], [-10, 40], [55, -40]], 22, PAL.white); ctx.restore(); };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#ffcf7a', '#ff8f5a'); burst(ctx, 540, 1150, t, 0.07);
    sun(ctx, 860, 700, 85, t, pop(t, T(1, 'sunburned') - 0.35));
    ground(ctx, 1380, '#e3b26a', '#d39d55');
    const z = 1 + 0.05 * EI(t, 0, 5.8);
    ctx.save(); ctx.translate(540, 1150); ctx.scale(z, z); ctx.translate(-540, -1150);
    hippo(ctx, 420, 1120, 0.98, t, { sweat: EO(t, T(0, 'red') - 0.5, T(0, 'red') + 0.4), goo: 1 });
    ctx.restore();
    bigText(ctx, 'RED SWEAT', 540, 330, 170, PAL.red2, pop(t, T(0, 'sweat') - 0.15, T(1, 'how') - 0.25), 18);
    pill(ctx, 'NOT BLOOD', 540, 520, { k: pop(t, T(0, 'not') - 0.15, T(1, 'how') - 0.25), bg: PAL.ink, col: PAL.white, size: 62, rot: -0.03 });
    cross(ctx, 830, 520, 0.7, PAL.red, pop(t, T(0, 'blood') - 0.1, T(1, 'how') - 0.25));
    bigText(ctx, 'NEVER', 540, 300, 150, PAL.ink, pop(t, T(1, 'never') - 0.15), 16);
    bigText(ctx, 'SUNBURNED?', 540, 450, 150, PAL.cream, pop(t, T(1, 'sunburned') - 0.15), 18);
  };
  S.river = (ctx, t) => {
    const up = EI(t, T(3, 'haul') - 0.25, T(3, 'banks') + 0.2);
    sky(ctx, H.rgba(H.mix('#7fd3ef', '#ffd27a', up)), H.rgba(H.mix('#3d9bd0', '#ff9f5a', up)));
    sun(ctx, 820, H.lerp(760, 600, up), H.lerp(60, 100, up), t, 1);
    burst(ctx, 820, 640, t, 0.08 * up);
    // far bank
    ctx.fillStyle = '#5aa35a'; ctx.beginPath(); ctx.moveTo(0, 1040); ctx.quadraticCurveTo(300, 980, 620, 1030); ctx.quadraticCurveTo(860, 1060, W, 1010); ctx.lineTo(W, 1200); ctx.lineTo(0, 1200); ctx.closePath(); ctx.fill();
    acacia(ctx, 880, 1040, 0.55); acacia(ctx, 180, 1030, 0.42);
    // near sandy bank rises under the hippo
    const by = H.lerp(1900, 1300, up);
    ctx.fillStyle = '#e8c27e'; ctx.beginPath(); ctx.moveTo(120, by + 60); ctx.quadraticCurveTo(540, by - 70, W + 40, by); ctx.lineTo(W, HH); ctx.lineTo(120, HH); ctx.closePath(); ctx.fill();
    const hy = H.lerp(1255, 1040, up), hx = H.lerp(420, 470, up);
    hippo(ctx, hx, hy, 0.92, t, { sweat: 0 });
    // drips falling off as it hauls out
    if (up > 0.05 && ph(t, T(3, 'haul'), T(3, 'banks') + 1.2) < 1) { const r = H.rng(31); for (let i = 0; i < 14; i++) { const x0 = hx + r.range(-280, 480) * 0.92, f = ((t * 1.4 + r()) % 1); drop(ctx, x0, hy - 100 + f * 340, 11, 'rgba(160,225,250,0.9)', 1 - f); } }
    water(ctx, H.lerp(1110, 1500, up), t);
    pill(ctx, 'ALL DAY', 540, 320, { k: pop(t, T(2, 'days') - 0.15, T(3, 'haul') - 0.3), bg: PAL.blue, col: PAL.white, size: 64 });
    bigText(ctx, 'AFRICAN RIVERS', 540, 470, 120, PAL.cream, pop(t, T(2, 'african') - 0.15, T(3, 'haul') - 0.3));
    bigText(ctx, 'HAUL OUT', 540, 320, 140, PAL.ink, pop(t, T(3, 'haul') - 0.15), 16);
    pill(ctx, 'SUNNY BANKS', 540, 470, { k: pop(t, T(3, 'sunny') - 0.15), bg: PAL.orange, col: PAL.white, size: 62 });
  };
  let SKIN = null;
  const skinBlock = (ctx) => {
    if (!SKIN) { SKIN = H.layer(W, HH); const c = SKIN.getContext('2d');
      c.fillStyle = '#f2d17a'; rr(c, 90, 1380, 900, 260, 30); c.fill(); c.fillStyle = '#e8c062'; for (let i = 0; i < 9; i++) { c.beginPath(); c.arc(150 + i * 100, 1470 + (i % 2) * 60, 44, 0, Math.PI * 2); c.fill(); }
      c.fillStyle = '#c99ab6'; c.fillRect(90, 960, 900, 440); c.strokeStyle = 'rgba(255,255,255,0.25)'; c.lineWidth = 8; c.lineCap = 'round';
      const r = H.rng(8); for (let i = 0; i < 14; i++) { const x = 120 + r() * 840, y = 1000 + r() * 360; c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + 40, y - 30, x + 90, y + 4); c.stroke(); } }
    ctx.drawImage(SKIN, 0, 0);
  };
  const GLANDS = [230, 540, 850];
  const gland = (ctx, x, col, fill) => { ctx.fillStyle = '#8f5f86'; ctx.beginPath(); ctx.ellipse(x, 1270, 62, 46, 0, 0, Math.PI * 2); ctx.fill(); limb(ctx, [[x, 1240], [x - 14, 1110], [x, 940]], 18, '#8f5f86');
    if (fill > 0) { ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(x, 1270, 44 * fill, 30 * fill, 0, 0, Math.PI * 2); ctx.fill(); } };
  S.skin = (ctx, t) => {
    sky(ctx, '#ffe0b0', '#ffb98a'); sun(ctx, 860, 640, 80, t, 1);
    skinBlock(ctx);
    const dry = ph(t, T(5, 'dries') - 0.2, T(5, 'fast') + 0.4);
    // thin outer layer
    const hl = 0.5 + 0.5 * Math.sin(t * 8); const hk = ph(t, T(4, 'thin') - 0.2, T(4, 'thin'));
    ctx.fillStyle = H.rgba(H.mix('#6b5884', '#ffd23f', hk * hl * 0.6)); ctx.fillRect(90, 930, 900, 34);
    GLANDS.forEach((x) => gland(ctx, x, H.rgba(GOO(0)), 0.6));
    // cracks when it dries
    if (dry > 0) { ctx.save(); ctx.strokeStyle = '#4a3a5e'; ctx.lineWidth = 6; ctx.globalAlpha = dry; const r = H.rng(14); for (let i = 0; i < 6; i++) { const x = 160 + i * 150 + r() * 40; ctx.beginPath(); ctx.moveTo(x, 930); ctx.lineTo(x + 14, 950); ctx.lineTo(x - 6, 966); ctx.stroke(); } ctx.restore(); }
    // water vapour leaving
    if (dry > 0) { const r = H.rng(19); for (let i = 0; i < 12; i++) { const x0 = 140 + r() * 800, f = ((t - T(5, 'dries') + 0.2) * 0.9 + r()) % 1; if (t < T(5, 'dries') - 0.2) continue; drop(ctx, x0 + Math.sin(f * 6 + i) * 20, 900 - f * 320, 14, 'rgba(90,180,240,0.9)', (1 - f) * dry); } }
    pill(ctx, 'HIPPO SKIN', 540, 1720 - 120, { k: pop(t, T(4, 'skin') - 0.15), bg: PAL.ink, col: PAL.white, size: 50, sh: 10 });
    const ak = EO(t, T(4, 'outer') - 0.2, T(4, 'outer') + 0.3);
    arrow(ctx, 330, 780, 330, 905, PAL.ink, 18, ak);
    pill(ctx, 'OUTER LAYER', 330, 720, { k: pop(t, T(4, 'outer') - 0.2), bg: PAL.purple, col: PAL.white, size: 50, sh: 10 });
    bigText(ctx, 'SUPER THIN', 540, 330, 150, PAL.ink, pop(t, T(4, 'thin') - 0.15, T(5, 'dries') - 0.25), 16);
    bigText(ctx, 'DRIES OUT', 540, 300, 150, PAL.ink, pop(t, T(5, 'dries') - 0.15), 16);
    bigText(ctx, 'FAST!', 540, 460, 150, PAL.red2, pop(t, T(5, 'fast') - 0.15), 16);
  };
  S.ooze = (ctx, t) => {
    const gc = ph(t, T(9, 'red') - 0.6, T(9, 'red') + 0.15) + ph(t, T(10, 'brown') - 0.5, T(10, 'brown') + 0.2);
    sky(ctx, '#bde8d8', '#5fbf9f'); burst(ctx, 640, 1180, t, 0.07);
    water(ctx, 1520, t, 'rgba(60,160,150,0.9)', '#c8f5e6');
    const sw = EO(t, T(6, 'oozes') - 0.3, T(6, 'goo') + 0.3);
    hippo(ctx, 150, 1260, 1.45, t, { sweat: sw, goo: gc });
    bigText(ctx, 'OILY GOO', 540, 330, 160, PAL.ink, pop(t, T(6, 'oozes') - 0.15, T(7, 'at') - 0.25), 16);
    // colour timeline
    const sw0 = pop(t, T(7, 'clear') - 0.15), sw1 = pop(t, T(9, 'red') - 0.15), sw2 = pop(t, T(10, 'brown') - 0.15);
    const sx = [200, 540, 880];
    [[sw0, 0, 'CLEAR'], [sw1, 1, 'RED'], [sw2, 2, 'BROWN']].forEach(([k, c, lab], i) => { if (k <= 0.01) return; ctx.save(); ctx.translate(sx[i], 330); ctx.scale(k, k); longShadow(ctx, (cc) => circle(ctx, 0, 0, 90, cc || PAL.cream), 14); drop(ctx, 0, 14, 44, H.rgba(GOO(c))); if (c === 0) { ctx.strokeStyle = '#9fc6dd'; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0, 23, 44, 0, Math.PI); ctx.stroke(); } ctx.restore();
      pill(ctx, lab, sx[i], 480, { k, bg: i === 0 ? PAL.steel : H.rgba(GOO(c)), col: PAL.white, size: 44, sh: 8 }); });
    const a1 = EO(t, T(8, 'then') - 0.1, T(8, 'minutes') + 0.2); arrow(ctx, 300, 330, 430, 330, PAL.ink, 14, a1);
    const a2 = EO(t, T(10, 'and') - 0.1, T(10, 'later') + 0.2); arrow(ctx, 640, 330, 770, 330, PAL.ink, 14, a2);
    pill(ctx, 'MINUTES', 540, 640, { k: pop(t, T(8, 'minutes') - 0.15, T(10, 'later') - 0.1), bg: PAL.yellow, size: 54 });
  };
  S.myth = (ctx, t) => {
    sky(ctx, '#7a1f3d', '#3a0d24'); burst(ctx, 540, 1000, t, 0.06);
    bigText(ctx, '"BLOOD SWEAT"', 540, 380, 140, PAL.cream, pop(t, T(11, 'blood') - 0.15), 18);
    card(ctx, 295, 1000, pop(t, T(12, 'blood') - 0.2), 'BLOOD', PAL.red2, () => { drop(ctx, 0, 30, 95, PAL.red2); });
    card(ctx, 785, 1000, pop(t, T(13, 'sweat') - 0.2), 'SWEAT', PAL.blue, () => { drop(ctx, 0, 30, 95, '#5aa9ff'); });
    cross(ctx, 420, 820, 0.85, PAL.red, pop(t, T(12, 'not') - 0.05));
    cross(ctx, 910, 820, 0.85, PAL.red, pop(t, T(13, 'not') - 0.05));
    pill(ctx, 'NOT REALLY', 785, 1400, { k: pop(t, T(13, 'really') - 0.15), bg: PAL.cream, size: 46, sh: 10 });
    hippo(ctx, 360, 1560, 0.42, t, { sweat: 1, goo: 1.2, sh: 10 });
  };
  S.pigments = (ctx, t) => {
    const mv = EI(t, T(16, 'both') - 0.3, T(16, 'soak') + 0.1);
    sky(ctx, H.rgba(H.mix('#2a2560', '#3a2d7a', mv)), H.rgba(H.mix('#16133a', '#1c1446', mv)));
    const r = H.rng(9); for (let i = 0; i < 30; i++) circle(ctx, r() * W, r() * HH, r.range(4, 12), 'rgba(255,255,255,0.06)');
    const my = H.lerp(1050, 560, mv), ms = H.lerp(1, 0.68, mv);
    bigText(ctx, '2 PIGMENTS', 540, 330, 150, PAL.cream, pop(t, T(14, 'two') - 0.15, T(16, 'both') - 0.3));
    molRing(ctx, H.lerp(290, 250, mv), my - (1 - mv) * 120, 0.78 * ms, '#ff3b30', pop(t, T(15, 'red') - 0.15), t, 1);
    molRing(ctx, H.lerp(790, 830, mv), my + (1 - mv) * 220, 0.78 * ms, PAL.orange, pop(t, T(15, 'orange') - 0.15), t, 2);
    pill(ctx, 'RED', H.lerp(290, 250, mv), my - (1 - mv) * 120 + H.lerp(200, 120, mv), { k: pop(t, T(15, 'red') - 0.1), bg: '#e5302a', col: PAL.white, size: H.lerp(56, 44, mv), sh: 10 });
    pill(ctx, 'ORANGE', H.lerp(790, 830, mv), my + (1 - mv) * 220 + H.lerp(200, 120, mv), { k: pop(t, T(15, 'orange') - 0.1), bg: PAL.orange, col: PAL.white, size: H.lerp(56, 44, mv), sh: 10 });
    if (mv > 0.01) {
      // skin with goo coat at the bottom, sun on top, UV zig-zags absorbed at the goo
      ctx.save(); ctx.globalAlpha = mv;
      ctx.fillStyle = HP.body; ctx.fillRect(0, 1390, W, HH); ctx.fillStyle = '#e5302a'; ctx.beginPath(); ctx.moveTo(0, 1360); for (let x = 0; x <= W; x += 40) ctx.lineTo(x, 1360 + Math.sin(x * 0.02 + t) * 10); ctx.lineTo(W, 1400); ctx.lineTo(0, 1400); ctx.closePath(); ctx.fill();
      const dr = H.rng(42); for (let i = 0; i < 9; i++) drop(ctx, 60 + i * 120 + dr() * 30, 1340, 16, '#e5302a');
      ctx.restore();
      sun(ctx, 540, 800, 90 * mv, t, 1);
      const uvk = ph(t, T(16, 'ultraviolet') - 0.2, T(16, 'ultraviolet') + 0.2);
      if (uvk > 0) for (let i = 0; i < 6; i++) { const ang = -0.55 + i * 0.22, f = ((t - T(16, 'ultraviolet')) * 0.9 + i * 0.17 + 1) % 1; const x0 = 540 + Math.sin(ang) * 140, y0 = 800 + Math.cos(ang) * 140; const x1 = 540 + Math.sin(ang) * 760, y1 = 1360;
        const seg = (u) => [H.lerp(x0, x1, u) + Math.sin(u * 40) * 16, H.lerp(y0, y1, u)]; const u0 = Math.max(0, f - 0.3), u1 = f;
        ctx.save(); ctx.globalAlpha = uvk; ctx.strokeStyle = '#c77dff'; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); for (let j = 0; j <= 14; j++) { const p = seg(H.lerp(u0, u1, j / 14)); j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); } ctx.stroke();
        if (f > 0.85) { const p = seg(1); ctx.globalAlpha = uvk * (1 - (f - 0.85) / 0.15); circle(ctx, p[0], p[1] - 6, 36 * (f - 0.85) / 0.15 + 10, 'rgba(255,230,120,0.8)'); } ctx.restore(); }
      pill(ctx, 'UV LIGHT', 540, 1150, { k: pop(t, T(16, 'ultraviolet') - 0.15), bg: PAL.purple, col: PAL.white, size: 54 });
      pill(ctx, 'ABSORBED', 540, 1270, { k: pop(t, T(16, 'light') - 0.1), bg: PAL.yellow, size: 46, sh: 10 });
      pill(ctx, 'HIPPO SKIN', 540, 1530, { k: mv, bg: PAL.ink, col: PAL.white, size: 50, sh: 10 });
      bigText(ctx, 'BUILT-IN', 540, 300, 140, PAL.yellow, pop(t, T(17, 'builtin') - 0.15), 16);
      bigText(ctx, 'SUNSCREEN', 540, 430, 140, PAL.cream, pop(t, T(17, 'sunscreen') - 0.15), 16);
    }
    bigText(ctx, 'BOTH SOAK UP', 540, 330, 130, PAL.cream, pop(t, T(16, 'both') - 0.15, T(17, 'builtin') - 0.25));
  };
  const GERMS = (() => { const r = H.rng(55); return Array.from({ length: 9 }, (_, i) => { const a = i / 9 * Math.PI * 2 + r.range(-0.2, 0.2); return { a, d0: r.range(560, 700), r: r.range(46, 62), s: r() * 6, v: r.range(150, 210) }; }); })();
  S.germs = (ctx, t) => {
    sky(ctx, '#c7b3db', '#9a84b5');
    const cx = 540, cy = 1080; const t0 = CUTS.germs, ts = T(18, 'slows') - 0.1;
    // skin texture
    const r = H.rng(66); ctx.fillStyle = 'rgba(255,255,255,0.12)'; for (let i = 0; i < 40; i++) circle(ctx, r() * W, 700 + r() * 1000, r.range(6, 16), ctx.fillStyle);
    // scrape
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(-0.35); longShadow(ctx, (c) => { ctx.fillStyle = c || '#b0304a'; rr(ctx, -230, -34, 460, 68, 34); ctx.fill(); }, 12); limb(ctx, [[-180, -6], [-60, 6], [60, -6], [180, 6]], 10, '#7a1830'); ctx.restore();
    // goo coat over the wound
    const gk = EO(t, T(18, 'red') - 0.3, T(18, 'one') + 0.2);
    if (gk > 0) { ctx.save(); ctx.globalAlpha = 0.85; ctx.fillStyle = '#e5302a'; ctx.beginPath(); for (let i = 0; i <= 30; i++) { const a = i / 30 * Math.PI * 2, rr2 = 320 * gk * (1 + 0.06 * Math.sin(a * 6 + t * 2)); const px = cx + Math.cos(a) * rr2 * 1.1, py = cy + Math.sin(a) * rr2 * 0.7; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.beginPath(); ctx.ellipse(cx - 120 * gk, cy - 110 * gk, 70 * gk, 22 * gk, -0.3, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
    GERMS.forEach((g, i) => { const run = Math.max(0, Math.min(t, ts) - t0) * g.v + Math.max(0, t - ts) * g.v * 0.12; const d = Math.max(g.d0 - run, 380); const x = cx + Math.cos(g.a) * d * 0.95, y = cy + Math.sin(g.a) * d * 0.75;
      const sl = ph(t, ts, ts + 0.6); const col = H.rgba(H.mix('#4fd16a', '#9aa39b', sl)); germ(ctx, x, y, g.r * (1 - 0.3 * sl), col, t * (1 - 0.8 * sl), g.s); });
    pill(ctx, 'GERMS', 540, 320, { k: pop(t, T(18, 'germs') - 0.15, T(19, 'hippo') - 0.25), bg: PAL.green, col: PAL.white, size: 64 });
    bigText(ctx, 'SLOWED DOWN', 540, 470, 120, PAL.ink, pop(t, T(18, 'slows') - 0.1, T(19, 'hippo') - 0.25), 16);
    pill(ctx, 'SCRAPE', 820, 1290, { k: pop(t, T(19, 'scrapes') - 0.15), bg: '#7a1830', col: PAL.white, size: 46, sh: 10 });
    bigText(ctx, 'HIPPO FIGHTS', 540, 330, 130, PAL.ink, pop(t, T(19, 'hippo') - 0.15), 16);
    bigText(ctx, 'STAY CLEANER', 540, 470, 120, PAL.cream, pop(t, T(19, 'cleaner') - 0.2), 16);
  };
  S.combo = (ctx, t) => {
    sky(ctx, '#9be7d8', '#2fae9e'); burst(ctx, 540, 1250, t, 0.08);
    ground(ctx, 1500, '#e8c27e');
    hippo(ctx, 400, 1280, 0.8, t, { sweat: 1, goo: 1.15, jaw: 0.5 + 0.5 * Math.sin(t * 2.5) > 0.8 ? 0.4 : 0 });
    card(ctx, 295, 640, pop(t, T(20, 'sunscreen') - 0.15), 'SUNSCREEN', PAL.orange, () => sun(ctx, 0, -20, 80, t, 1), 420, 400);
    card(ctx, 785, 640, pop(t, T(20, 'germ') - 0.15), 'GERM FIGHTER', PAL.green, () => shield(ctx, 0, -20, 1, PAL.green), 420, 400);
    bigText(ctx, 'IN ONE', 540, 260, 120, PAL.ink, pop(t, T(21, 'one') - 0.15), 14);
    pill(ctx, 'GOOEY COAT', 540, 1020, { k: pop(t, T(21, 'gooey') - 0.15), bg: '#e5302a', col: PAL.white, size: 64 });
  };
  const PALETTE = ['#e5302a', '#2f7bff', '#1f9e5a', '#ffd23f', '#8a5cf6', '#ff8fb1'];
  S.end = (ctx, t) => {
    sky(ctx, '#8a5cf6', '#3a1c7a'); burst(ctx, 540, 1100, t, 0.08, 16);
    bigText(ctx, 'YOUR SWEAT', 540, 300, 140, PAL.cream, pop(t, T(22, 'your') - 0.15));
    bigText(ctx, 'ANY COLOR?', 540, 450, 140, PAL.yellow, pop(t, T(22, 'color') - 0.2));
    PALETTE.forEach((c, i) => { const k = pop(t, T(22, 'any') - 0.2 + i * 0.12); if (k <= 0.01) return; const x = 210 + (i % 3) * 330, y = 820 + Math.floor(i / 3) * 330 + Math.sin(t * 2 + i) * 10; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (cc) => circle(ctx, 0, 0, 120, cc || PAL.cream), 14); drop(ctx, 0, 20, 62, c); ctx.restore(); });
    pill(ctx, 'WHICH ONE?', 540, 1500, { k: pop(t, T(23, 'which') - 0.15), bg: PAL.yellow, size: 70 });
  };

  const ORDER = [['hook', 0], ['river', CUTS.river], ['skin', CUTS.skin], ['ooze', CUTS.ooze], ['myth', CUTS.myth], ['pigments', CUTS.pigments], ['germs', CUTS.germs], ['combo', CUTS.combo], ['end', CUTS.end]];
  const WIPE = 0.45;
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
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.22, chords: [['F3', 'A3', 'C4', 'E4'], ['D3', 'F3', 'A3', 'C4'], ['Bb3', 'D4', 'F4', 'A4'], ['C4', 'E4', 'G4', 'Bb4']] });
    for (let i = 0; i < 5; i++) popAt(T(0, 'red') - 0.3 + i * 0.12, 900 + i * 80, 0.35, (i % 2 ? 0.3 : -0.3));
    k.play('stamp', T(0, 'sweat') - 0.15, { gain: 0.5 }); k.play('error', T(0, 'blood') - 0.1, { f: 'A3', gain: 0.25 });
    k.play('riser', T(1, 'sunburned') - 0.6, { dur: 0.7, gain: 0.35 }); k.play('impact', T(1, 'sunburned') - 0.05, { gain: 0.5 });
    wipe(CUTS.river);
    k.noise(CUTS.river, { dur: CUTS.skin - CUTS.river, color: 'brown', filter: 'lowpass', f: [[0, 500]], gain: 0.09, a: 0.5 });
    popAt(T(2, 'days') - 0.15, 600, 0.6, -0.2); popAt(T(2, 'african') - 0.15, 700, 0.5, 0.2);
    k.play('swish', T(3, 'haul') - 0.25, { gain: 0.5 }); k.play('thud', T(3, 'haul') + 0.3, { f: 90, gain: 0.5 }); k.play('ding', T(3, 'sunny') - 0.1, { f: 'E5', gain: 0.25 });
    wipe(CUTS.skin);
    popAt(T(4, 'skin') - 0.15, 560, 0.5, 0); popAt(T(4, 'outer') - 0.2, 700, 0.6, -0.3); k.play('stamp', T(4, 'thin') - 0.15, { gain: 0.45 });
    k.play('swish', T(5, 'dries') - 0.2, { gain: 0.4 }); k.play('error', T(5, 'fast') - 0.05, { f: 'A3', gain: 0.22 });
    wipe(CUTS.ooze);
    for (let i = 0; i < 6; i++) k.play('blip', T(6, 'oozes') + i * 0.25, { gain: 0.18, minor: true });
    k.play('stamp', T(6, 'goo') - 0.15, { gain: 0.4 });
    popAt(T(7, 'clear') - 0.15, 800, 0.6, -0.4, false); k.play('swish', T(8, 'then') - 0.1, { gain: 0.3 });
    popAt(T(9, 'red') - 0.15, 640, 0.7, 0, false); k.play('sparkle', T(9, 'red') - 0.1, { n: 4, gain: 0.3 });
    popAt(T(10, 'brown') - 0.15, 480, 0.7, 0.4, false);
    wipe(CUTS.myth);
    k.play('stamp', T(11, 'blood') - 0.15, { gain: 0.5 });
    popAt(T(12, 'blood') - 0.2, 560, 0.6, -0.4); k.play('error', T(12, 'not') - 0.05, { f: 'A3', gain: 0.25 });
    popAt(T(13, 'sweat') - 0.2, 660, 0.6, 0.4); k.play('error', T(13, 'not') - 0.05, { f: 'G3', gain: 0.25 });
    wipe(CUTS.pigments);
    k.play('ding', T(14, 'two') - 0.1, { f: 'A5', gain: 0.25 }); popAt(T(15, 'red') - 0.15, 600, 0.7, -0.4, false); popAt(T(15, 'orange') - 0.15, 720, 0.7, 0.4, false);
    k.play('swish', T(16, 'both') - 0.3, { gain: 0.4 });
    for (let i = 0; i < 8; i++) k.play('blip', T(16, 'ultraviolet') + i * 0.3, { gain: 0.15, minor: true });
    k.play('sparkle', T(17, 'builtin') - 0.15, { n: 5, gain: 0.4 }); k.play('success', T(17, 'sunscreen') - 0.05, { f: 'C6', gain: 0.25 });
    wipe(CUTS.germs);
    popAt(T(18, 'germs') - 0.15, 520, 0.6, 0, false); k.play('thud', T(18, 'slows') - 0.1, { f: 110, gain: 0.45 });
    popAt(T(19, 'scrapes') - 0.15, 600, 0.5, 0.3); k.play('stamp', T(19, 'hippo') - 0.15, { gain: 0.45 }); k.play('ding', T(19, 'cleaner') - 0.15, { f: 'G5', gain: 0.25 });
    wipe(CUTS.combo);
    popAt(T(20, 'sunscreen') - 0.15, 600, 0.7, -0.4, false); popAt(T(20, 'germ') - 0.15, 720, 0.7, 0.4, false);
    k.play('impact', T(21, 'one') - 0.1, { gain: 0.45 }); popAt(T(21, 'gooey') - 0.15, 500, 0.6, 0);
    wipe(CUTS.end);
    popAt(T(22, 'your') - 0.15, 600, 0.6, 0);
    for (let i = 0; i < 6; i++) popAt(T(22, 'any') - 0.2 + i * 0.12, 600 + i * 70, 0.45, (i % 3 - 1) * 0.4);
    k.play('ding', T(23, 'which') - 0.1, { f: 'C6', gain: 0.3 });
    k.tone(T(23, 'pick') + 0.4, { f: 'F4', type: 'triangle', dur: 0.9, gain: 0.1, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
