// ================= Flat-Vector Science, vertical 1080x1920: "Why don't ducks' feet freeze on ice?" =================
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    {"s": 0.25, "e": 2.44, "w": {"ducks": 0.25, "stand": 0.6, "barefoot": 0.96, "on": 1.52, "ice": 1.66, "for": 1.87, "hours": 2.09}}, // 0
    {"s": 2.82, "e": 4.35, "w": {"and": 2.82, "their": 3.02, "feet": 3.35, "never": 3.62, "freeze": 3.95}}, // 1
    {"s": 4.72, "e": 5.88, "w": {"yours": 4.72, "would": 5.17, "why": 5.61}}, // 2
    {"s": 6.44, "e": 7.82, "w": {"a": 6.44, "ducks": 6.53, "body": 6.93, "runs": 7.26, "hot": 7.58}}, // 3
    {"s": 8.25, "e": 9.8, "w": {"around": 8.25, "41": 8.87, "degrees": 9.08}}, // 4
    {"s": 10.14, "e": 12.28, "w": {"if": 10.14, "that": 10.27, "warm": 10.54, "blood": 10.81, "rushed": 11.14, "into": 11.54, "its": 11.81, "feet": 12.01}}, // 5
    {"s": 12.78, "e": 14.76, "w": {"the": 12.78, "ice": 12.98, "would": 13.17, "suck": 13.5, "the2": 13.77, "heat": 13.97, "right": 14.23, "out": 14.56}}, // 6
    {"s": 15.2, "e": 17.48, "w": {"so": 15.2, "inside": 15.37, "each": 15.87, "leg": 16.21, "theres": 16.46, "a": 16.97, "trick": 17.06}}, // 7
    {"s": 17.86, "e": 19.99, "w": {"the": 17.86, "artery": 18.07, "carrying": 18.5, "warm": 19.07, "blood": 19.35, "down": 19.71}}, // 8
    {"s": 20.56, "e": 23.06, "w": {"runs": 20.56, "tight": 20.84, "against": 21.19, "the": 21.67, "veins": 21.88, "coming": 22.23, "back": 22.65, "up": 22.92}}, // 9
    {"s": 23.42, "e": 26.13, "w": {"as": 23.42, "they": 23.58, "pass": 23.9, "the": 24.22, "warm": 24.46, "blood": 24.78, "hands": 25.18, "its": 25.58, "heat": 25.82}}, // 10
    {"s": 26.2, "e": 27.89, "w": {"to": 26.2, "the": 26.34, "cold": 26.54, "blood": 26.81, "heading": 27.15, "home": 27.62}}, // 11
    {"s": 28.33, "e": 30.99, "w": {"scientists": 28.33, "call": 28.96, "it": 29.22, "countercurrent": 29.34, "heat": 30.23, "exchange": 30.48}}, // 12
    {"s": 31.41, "e": 34.08, "w": {"so": 31.41, "the": 31.56, "feet": 31.78, "only": 32.08, "get": 32.38, "blood": 32.6, "thats": 32.97, "barely": 33.34, "warm": 33.78}}, // 13
    {"s": 34.7, "e": 36.26, "w": {"just": 34.7, "enough": 34.94, "to": 35.3, "dodge": 35.42, "frostbite": 35.72}}, // 14
    {"s": 36.35, "e": 38.69, "w": {"and": 36.35, "the": 36.59, "heat": 36.83, "goes": 37.16, "back": 37.48, "into": 37.8, "the2": 38.12, "body": 38.37}}, // 15
    {"s": 39.12, "e": 41.92, "w": {"in": 39.12, "one": 39.32, "study": 39.62, "mallards": 40.12, "at": 40.92, "freezing": 41.12}}, // 16
    {"s": 41.98, "e": 45.26, "w": {"lost": 41.98, "only": 42.24, "about": 42.49, "5": 42.8, "percent": 42.87, "of": 43.31, "their": 43.43, "body": 43.75, "heat": 44.0, "through": 44.25, "their2": 44.7, "feet": 45.01}}, // 17
    {"s": 45.66, "e": 47.89, "w": {"and": 45.66, "duck": 45.87, "feet": 46.14, "are": 46.41, "mostly": 46.61, "bone": 47.02, "and2": 47.29, "tendon": 47.49}}, // 18
    {"s": 48.42, "e": 50.81, "w": {"with": 48.42, "hardly": 48.73, "any": 49.19, "soft": 49.43, "tissue": 49.73, "to": 50.19, "freeze": 50.35}}, // 19
    {"s": 51.28, "e": 52.51, "w": {"pretty": 51.28, "genius": 51.71, "right": 52.15}}, // 20
    {"s": 53.08, "e": 54.8, "w": {"so": 53.08, "would": 53.2, "you": 53.52, "swap": 53.71, "feet": 53.97, "with": 54.22, "a": 54.48, "duck": 54.54}}, // 21
    {"s": 55.14, "e": 56.34, "w": {"just": 55.14, "for": 55.44, "one": 55.66, "winter": 55.89}}, // 22
  ];
  const T = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = { hot: 6.16, leg: 14.98, name: 28.11, study: 38.9, bone: 45.46, end: 51.05 };

  // ---------- helpers (Flat-Vector Science house kit) ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', ice: '#bfe6ff', ice2: '#7cc4f2', ice3: '#4f9fd8', red: '#ef4a4a', red2: '#c93636', blue: '#2f7bff', blue2: '#1f56c4', yellow: '#ffd23f', orange: '#ff9a1f', orange2: '#e07a10', green: '#1f9e5a', green2: '#16804a', brown: '#8a5a3c', brown2: '#6d4430', grey: '#c8c4bc', grey2: '#9d988f', white: '#ffffff', coral: '#ff6b5b', teal: '#1fb6a6', purple: '#8a5cf6', skin: '#ffc9a3', bone: '#fff3d6', tendon: '#f4b8a8' };
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
  const bigText = (ctx, s, x, y, size, col, k = 1, sh = 20) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const burst = (ctx, cx, cy, t, a = 0.08, n = 14) => { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; for (let i = 0; i < n; i++) { const an = i / n * Math.PI * 2 + t * 0.12; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, 1500, an, an + 0.12); ctx.closePath(); ctx.fill(); } ctx.restore(); };
  const limb = (ctx, pts, wdt, col) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore(); };
  const cross = (ctx, x, y, s, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => circle(ctx, 0, 0, 60, c || col), 12); limb(ctx, [[-22, -22], [22, 22]], 16, PAL.white); limb(ctx, [[22, -22], [-22, 22]], 16, PAL.white); ctx.restore(); };
  const check = (ctx, x, y, s, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => circle(ctx, 0, 0, 60, c || col), 12); limb(ctx, [[-26, 2], [-6, 22], [28, -20]], 16, PAL.white); ctx.restore(); };
  const FLAKES = (() => { const r = H.rng(41); return Array.from({ length: 40 }, () => ({ x: r() * W, y: r() * HH, s: r.range(7, 18), v: r.range(70, 160), d: r() * 6 })); })();
  const snow = (ctx, t, a = 0.8) => { ctx.save(); ctx.globalAlpha = a; FLAKES.forEach((f) => { const y = (f.y + t * f.v) % (HH + 60) - 30, x = f.x + Math.sin(t * 1.3 + f.d) * 30; circle(ctx, x, y, f.s, PAL.white); }); ctx.restore(); };
  const heatWave = (ctx, x, y, len, t, a, col = PAL.orange, dir = -1) => { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 0; i <= 20; i++) { const yy = y + dir * i / 20 * len, xx = x + Math.sin(i * 0.9 - t * 8) * 14; i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); ctx.restore(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 22, k = 1) => { if (k <= 0.01) return; const xe = x0 + (x1 - x0) * k, ye = y0 + (y1 - y0) * k, a = Math.atan2(ye - y0, xe - x0); limb(ctx, [[x0, y0], [xe - Math.cos(a) * 20, ye - Math.sin(a) * 20]], wdt, col); ctx.save(); ctx.translate(xe, ye); ctx.rotate(a); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt, -wdt * 1.5); ctx.lineTo(-wdt, wdt * 1.5); ctx.closePath(); ctx.fill(); ctx.restore(); };
  const flake = (ctx, x, y, s, rot, col = PAL.white, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s * k, s * k); ctx.strokeStyle = col; ctx.lineWidth = 12; ctx.lineCap = 'round'; for (let i = 0; i < 6; i++) { ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -60); ctx.moveTo(0, -36); ctx.lineTo(-16, -50); ctx.moveTo(0, -36); ctx.lineTo(16, -50); ctx.stroke(); } ctx.restore(); };
  const thermo = (ctx, x, y, s, level, col, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -50, -360, 100, 380, 50); ctx.fill(); circle(ctx, 0, 40, 85, ctx.fillStyle); }, 14);
    ctx.fillStyle = col; circle(ctx, 0, 40, 60, col); const hgt = 40 + 280 * level; rr(ctx, -24, 40 - hgt, 48, hgt, 24); ctx.fill();
    ctx.fillStyle = 'rgba(29,29,58,0.25)'; for (let i = 0; i < 6; i++) ctx.fillRect(22, -300 + i * 50, 22, 8); ctx.restore(); };

  // ice pond floor with cracks (cached)
  let ICE = null;
  const iceFloor = (ctx, top) => {
    if (!ICE) { ICE = H.layer(W, 700); const c = ICE.getContext('2d'); const g = c.createLinearGradient(0, 0, 0, 700); g.addColorStop(0, '#dff3ff'); g.addColorStop(1, '#9dd4f5'); c.fillStyle = g; c.fillRect(0, 0, W, 700);
      const r = H.rng(77); c.strokeStyle = 'rgba(255,255,255,0.9)'; c.lineWidth = 6; c.lineCap = 'round'; for (let i = 0; i < 9; i++) { let x = r() * W, y = r() * 600 + 40; c.beginPath(); c.moveTo(x, y); for (let j = 0; j < 4; j++) { x += r.range(-120, 120); y += r.range(-30, 50); c.lineTo(x, y); } c.stroke(); }
      c.fillStyle = 'rgba(255,255,255,0.35)'; for (let i = 0; i < 5; i++) { c.beginPath(); c.ellipse(r() * W, r() * 600 + 50, r.range(80, 200), r.range(10, 24), 0, 0, Math.PI * 2); c.fill(); } }
    ctx.drawImage(ICE, 0, top);
  };

  // ---------- the mallard, side view facing right; origin = between the feet on the ground ----------
  const duck = (ctx, x, y, s, t, o = {}) => {
    const bob = Math.sin(t * 2.2) * 4, legCol = o.legCol || PAL.orange;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // shadow on ice
    ctx.fillStyle = 'rgba(40,90,140,0.18)'; ctx.beginPath(); ctx.ellipse(10, 6, 230, 26, 0, 0, Math.PI * 2); ctx.fill();
    // legs + webbed feet
    const legs = (c) => { const col = c || legCol;
      [[-50, -10], [50, 0]].forEach(([lx, off]) => { limb(ctx, [[lx, -230 + bob], [lx + 6, -40]], 30, col);
        ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(lx - 10, -46); ctx.lineTo(lx + 110, -4); ctx.lineTo(lx + 96, 6); ctx.lineTo(lx + 70, -2); ctx.lineTo(lx + 60, 8); ctx.lineTo(lx + 30, 0); ctx.lineTo(lx + 16, 8); ctx.lineTo(lx - 30, 4); ctx.closePath(); ctx.fill(); }); };
    longShadow(ctx, legs, 10);
    ctx.translate(0, bob);
    // body
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.grey; ctx.beginPath(); ctx.ellipse(-10, -330, 250, 140, -0.06, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-230, -380); ctx.lineTo(-330, -440); ctx.lineTo(-250, -300); ctx.closePath(); ctx.fill(); }, 18);
    ctx.fillStyle = PAL.brown; ctx.beginPath(); ctx.ellipse(140, -330, 110, 120, 0, -Math.PI / 2, Math.PI / 2); ctx.fill(); // chest
    ctx.fillStyle = PAL.grey2; ctx.beginPath(); ctx.ellipse(-60, -350, 170, 70, -0.1, 0, Math.PI * 2); ctx.fill(); // wing
    ctx.fillStyle = PAL.blue; rr(ctx, -150, -330, 110, 24, 12); ctx.fill(); // speculum
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.moveTo(-230, -390); ctx.lineTo(-300, -420); ctx.lineTo(-250, -350); ctx.closePath(); ctx.fill(); // tail curl
    // neck + head
    ctx.fillStyle = PAL.green; rr(ctx, 120, -560, 90, 200, 45); ctx.fill();
    ctx.fillStyle = PAL.white; rr(ctx, 118, -440, 94, 22, 11); ctx.fill(); // white collar
    longShadow(ctx, (c) => { circle(ctx, 180, -580, 95, c || PAL.green); }, 12);
    ctx.fillStyle = PAL.green2; ctx.beginPath(); ctx.arc(180, -580, 95, -0.4, 1.2); ctx.lineTo(180, -580); ctx.fill();
    // bill
    ctx.fillStyle = PAL.yellow; ctx.beginPath(); ctx.moveTo(250, -600); ctx.quadraticCurveTo(360, -600, 375, -565); ctx.quadraticCurveTo(330, -545, 255, -550); ctx.closePath(); ctx.fill();
    circle(ctx, 360, -580, 7, PAL.ink);
    // eye
    circle(ctx, 205, -605, 18, PAL.white); circle(ctx, 210, -605, 10, PAL.ink);
    ctx.restore();
  };

  // a cold human bare foot (side view, toes right)
  const humanFoot = (ctx, x, y, s, frost, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    const col = H.rgba(H.mix(PAL.skin, '#9ec4ff', frost));
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; ctx.beginPath(); ctx.moveTo(-160, -260); ctx.lineTo(-60, -260); ctx.lineTo(-40, -110); ctx.quadraticCurveTo(80, -100, 180, -60); ctx.quadraticCurveTo(220, -30, 200, 0); ctx.lineTo(-170, 0); ctx.quadraticCurveTo(-200, -40, -170, -110); ctx.closePath(); ctx.fill(); }, 12);
    for (let i = 0; i < 5; i++) circle(ctx, 190 - i * 34, -34 - i * 6, 22 - i * 2, col);
    ctx.restore(); };

  // ---------- leg close-up: artery down the middle, veins hugging it ----------
  // u = 0 top (body) .. 1 bottom (foot); returns colour for the artery/vein temperature along the leg
  const tempCol = (heat) => H.rgba(H.mix(PAL.blue, PAL.red, H.clamp(heat)));
  const legX0 = 540, legTop = 520, legBot = 1500;
  const vessels = (ctx, t, o) => {
    const L = legBot - legTop, aw = 70, vw = 52, gap = 64;
    const ex = o.exchange; // 0..1 how much heat swap is shown
    const N = 30;
    // artery (centre) runs down: hot at top, cooling toward the foot as exchange kicks in
    for (let i = 0; i < N; i++) { const u0 = i / N, u1 = (i + 1) / N, heat = 1 - ex * 0.8 * (u0 + u1) / 2;
      ctx.fillStyle = tempCol(heat); ctx.fillRect(legX0 - aw / 2, legTop + u0 * L, aw, L / N + 1); }
    // veins (both sides) run up: cold at bottom, warming toward the body
    if (o.vein > 0.01) [-1, 1].forEach((sd) => { ctx.save(); ctx.beginPath(); ctx.rect(0, legBot - (legBot - legTop) * o.vein, W, (legBot - legTop) * o.vein); ctx.clip(); for (let i = 0; i < N; i++) { const u0 = i / N, u1 = (i + 1) / N, heat = (ex * 0.8 * (1 - (u0 + u1) / 2)) + 0.0;
      ctx.fillStyle = tempCol(heat); ctx.fillRect(legX0 + sd * gap - vw / 2, legTop + u0 * L, vw, L / N + 1); } ctx.restore(); });
    // flow chevrons
    const cv = (x, y, dir, col) => { ctx.save(); ctx.translate(x, y); ctx.scale(1, dir); ctx.strokeStyle = col; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-16, -8); ctx.lineTo(0, 8); ctx.lineTo(16, -8); ctx.stroke(); ctx.restore(); };
    if (o.aFlow > 0) { ctx.save(); ctx.globalAlpha = o.aFlow; for (let i = 0; i < 9; i++) { const y = legTop + ((i / 9 + t * 0.35) % 1) * L; cv(legX0, y, 1, 'rgba(255,255,255,0.85)'); } ctx.restore(); }
    if (o.vFlow > 0) { ctx.save(); ctx.globalAlpha = o.vFlow; [-1, 1].forEach((sd) => { for (let i = 0; i < 9; i++) { const y = legTop + (1 - (i / 9 + t * 0.35) % 1) * L; cv(legX0 + sd * gap, y, -1, 'rgba(255,255,255,0.85)'); } }); ctx.restore(); }
    // heat dots hopping from artery to veins
    if (o.dots > 0) { ctx.save(); ctx.globalAlpha = o.dots; for (let i = 0; i < 12; i++) { const ph0 = (t * 0.9 + i * 0.37) % 1, y = legTop + 80 + (i / 12) * (L - 160), sd = i % 2 ? 1 : -1, x = legX0 + sd * gap * ph0; circle(ctx, x, y + Math.sin(ph0 * Math.PI) * -14, 14 * (1 - ph0 * 0.4), PAL.yellow); } ctx.restore(); }
  };
  const legSilhouette = (ctx, k) => { ctx.save(); ctx.globalAlpha = k;
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.orange; rr(ctx, legX0 - 150, legTop - 80, 300, legBot - legTop + 120, 150); ctx.fill(); }, 18);
    ctx.fillStyle = PAL.orange2; rr(ctx, legX0 - 120, legTop - 50, 240, legBot - legTop + 60, 120); ctx.fill(); ctx.restore(); };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#a9dcff', '#5aa6e8'); burst(ctx, 540, 1000, t, 0.08);
    iceFloor(ctx, 1300);
    snow(ctx, t, 0.6);
    const z = 1 + 0.08 * EI(t, 0, 6);
    const yk = ph(t, T(2, 'yours') - 0.25, T(2, 'yours') + 0.15);
    duck(ctx, 540 - 200 * EI(t, T(2, 'yours') - 0.3, T(2, 'yours') + 0.2), 1360, 1.15 * z * (1 - 0.25 * yk), t);
    pill(ctx, 'BAREFOOT', 280, 1520, { k: pop(t, T(0, 'barefoot') - 0.15, T(2, 'yours') - 0.3), bg: PAL.orange, col: PAL.white, size: 54, rot: -0.04 });
    pill(ctx, 'ON ICE', 800, 1520, { k: pop(t, T(0, 'ice') - 0.15, T(2, 'yours') - 0.3), bg: PAL.ice, size: 54, rot: 0.04 });
    bigText(ctx, 'NEVER', 540, 300, 140, PAL.cream, pop(t, T(1, 'never') - 0.15, T(2, 'yours') - 0.3));
    bigText(ctx, 'FREEZE!', 540, 450, 160, PAL.yellow, pop(t, T(1, 'freeze') - 0.15, T(2, 'yours') - 0.3));
    // human foot joins, frosting over
    const hk = pop(t, T(2, 'yours') - 0.15);
    humanFoot(ctx, 820, 1400, 1.0, ph(t, T(2, 'would') - 0.2, T(2, 'would') + 0.4), hk);
    cross(ctx, 820, 1080, 1.1, PAL.red, pop(t, T(2, 'would') - 0.12));
    pill(ctx, 'YOURS', 820, 1560, { k: hk, bg: PAL.cream, size: 52 });
    bigText(ctx, 'WHY?', 540, 380, 200, PAL.cream, pop(t, T(2, 'why') - 0.15));
  };
  S.hot = (ctx, t) => {
    sky(ctx, '#ffb36b', '#ff6b6b'); burst(ctx, 540, 900, t, 0.07);
    const iceUp = EI(t, T(5, 'feet') - 0.4, T(6, 'ice'));
    iceFloor(ctx, 1500 - 120 * iceUp);
    const fy = 1500 - 120 * iceUp + 30;
    duck(ctx, 430, fy, 1.05, t);
    // thermometer
    const tk = pop(t, T(3, 'hot') - 0.2, T(5, 'warm') - 0.3);
    const lv = EO(t, T(4, 'around') - 0.1, T(4, '41') + 0.2);
    thermo(ctx, 860, 860, 1.0, lv, PAL.red, tk);
    const deg = Math.round(H.lerp(20, 41, lv));
    bigText(ctx, '~' + deg + '°C', 540, 330, 150, PAL.cream, pop(t, T(4, '41') - 0.2, T(5, 'warm') - 0.3));
    bigText(ctx, 'RUNS HOT', 540, 330, 130, PAL.cream, pop(t, T(3, 'body') - 0.15, T(4, '41') - 0.3));
    // warm blood rushing down the legs
    const bk = ph(t, T(5, 'blood') - 0.2, T(5, 'feet'));
    if (bk > 0) { const lx = 430, top = fy - 270 * 1.05; for (let i = 0; i < 8; i++) { const u = ((t * 0.9 + i / 8) % 1); if (u > bk) continue; circle(ctx, lx - 50 * 1.05 + 4, top + u * 230, 15, PAL.red); circle(ctx, lx + 50 * 1.05 + 4, top + u * 230 + 10, 15, PAL.red); } }
    pill(ctx, 'WARM BLOOD', 540, 520, { k: pop(t, T(5, 'warm') - 0.15, T(6, 'ice') - 0.3), bg: PAL.red, col: PAL.white, size: 58 });
    // heat sucked into the ice
    const sk = ph(t, T(6, 'suck') - 0.2, T(6, 'suck') + 0.3);
    for (let i = 0; i < 5; i++) heatWave(ctx, 330 + i * 60, fy - 10, 160, t + i * 0.3, sk, PAL.orange, 1);
    pill(ctx, 'ICE STEALS HEAT', 540, 520, { k: pop(t, T(6, 'suck') - 0.15), bg: PAL.ice3, col: PAL.white, size: 58 });
    flake(ctx, 860, 1250, 1.3, t * 0.6, PAL.white, pop(t, T(6, 'ice') - 0.15));
    bigText(ctx, 'FROZEN FEET', 540, 340, 118, PAL.ink, pop(t, T(6, 'out') - 0.2), 14);
  };
  S.leg = (ctx, t) => {
    sky(ctx, '#20305e', '#101833');
    const r = H.rng(5); for (let i = 0; i < 26; i++) circle(ctx, r() * W, r() * HH, r.range(4, 10), 'rgba(255,255,255,0.07)');
    const zk = EO(t, CUTS.leg - 0.2, CUTS.leg + 0.6);
    ctx.save(); ctx.translate(540, 1000); ctx.scale(0.6 + 0.4 * zk, 0.6 + 0.4 * zk); ctx.translate(-540, -1000);
    legSilhouette(ctx, 1);
    const ak = ph(t, T(8, 'artery') - 0.2, T(8, 'artery') + 0.3), vk = ph(t, T(9, 'veins') - 0.2, T(9, 'veins') + 0.3);
    const ex = EI(t, T(10, 'pass') - 0.2, T(11, 'home'));
    ctx.save(); ctx.globalAlpha = Math.max(ak, 0.001); ctx.restore();
    if (ak > 0) { ctx.save(); ctx.beginPath(); ctx.rect(0, legTop, W, (legBot - legTop) * ak); ctx.clip();
      vessels(ctx, t, { exchange: ex, vein: vk, aFlow: ph(t, T(8, 'down') - 0.4, T(8, 'down')), vFlow: ph(t, T(9, 'up') - 0.4, T(9, 'up')), dots: ph(t, T(10, 'hands') - 0.3, T(10, 'hands')) });
      ctx.restore(); }
    ctx.restore();
    bigText(ctx, 'THE TRICK', 540, 300, 140, PAL.yellow, pop(t, T(7, 'trick') - 0.2, T(8, 'artery') - 0.2));
    bigText(ctx, 'INSIDE THE LEG', 540, 300, 104, PAL.cream, pop(t, T(7, 'leg') - 0.2, T(7, 'trick') - 0.25));
    pill(ctx, 'ARTERY', 540, 300, { k: pop(t, T(8, 'artery') - 0.15, T(10, 'hands') - 0.3), bg: PAL.red, col: PAL.white, size: 62 });
    pill(ctx, 'WARM, DOWN', 215, 720, { k: pop(t, T(8, 'warm') - 0.15), bg: PAL.red, col: PAL.white, size: 50 });
    pill(ctx, 'VEINS', 540, 420, { k: pop(t, T(9, 'veins') - 0.15, T(10, 'hands') - 0.3), bg: PAL.blue, col: PAL.white, size: 62 });
    pill(ctx, 'COLD, UP', 865, 1380, { k: pop(t, T(9, 'up') - 0.25), bg: PAL.blue, col: PAL.white, size: 50 });
    bigText(ctx, 'HEAT HANDOFF', 540, 330, 116, PAL.yellow, pop(t, T(10, 'hands') - 0.15));
    pill(ctx, 'BACK HOME', 865, 720, { k: pop(t, T(11, 'home') - 0.2), bg: PAL.cream, size: 50 });
    pill(ctx, 'TO THE FOOT', 215, 1380, { k: pop(t, T(10, 'pass') - 0.15), bg: PAL.cream, size: 46, sh: 10 });
  };
  S.name = (ctx, t) => {
    sky(ctx, '#8fe0c8', '#2fae9e'); burst(ctx, 540, 1000, t, 0.07);
    // body (top) and foot (bottom) blocks connected by a loop of arrows
    const bodyK = pop(t, CUTS.name), footK = pop(t, CUTS.name + 0.15);
    const lift = 140 * EI(t, T(13, 'so') - 0.3, T(13, 'feet'));
    if (bodyK > 0.01) { ctx.save(); ctx.translate(540, 870 - lift * 0.3); ctx.scale(bodyK, bodyK); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.grey; ctx.beginPath(); ctx.ellipse(0, 0, 230, 120, 0, 0, Math.PI * 2); ctx.fill(); }, 16); text(ctx, 'BODY', 0, 4, 64, PAL.ink); ctx.restore(); }
    // countercurrent arrows: red down left, blue up right
    const ak = ph(t, T(12, 'countercurrent') - 0.3, T(12, 'countercurrent') + 0.4);
    arrow(ctx, 470, 1000 - lift * 0.3, 470, 1330, PAL.red, 26, ak);
    arrow(ctx, 610, 1330, 610, 1000 - lift * 0.3, PAL.blue, 26, ak);
    if (ak > 0.5) for (let i = 0; i < 6; i++) { const y = 1060 + i * 46 - lift * 0.2, u = (t * 1.2 + i * 0.2) % 1; circle(ctx, 490 + u * 100, y, 10, PAL.yellow); }
    // foot block with thermometer
    if (footK > 0.01) { ctx.save(); ctx.translate(540, 1460); ctx.scale(footK, footK);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.orange; ctx.beginPath(); ctx.moveTo(-60, -70); ctx.lineTo(200, 40); ctx.lineTo(150, 70); ctx.lineTo(80, 50); ctx.lineTo(40, 76); ctx.lineTo(-20, 56); ctx.lineTo(-80, 76); ctx.lineTo(-200, 60); ctx.closePath(); ctx.fill(); }, 12);
      ctx.restore(); }
    bigText(ctx, 'COUNTERCURRENT', 540, 300, 104, PAL.cream, pop(t, T(12, 'countercurrent') - 0.15, T(13, 'so') - 0.2));
    bigText(ctx, 'HEAT EXCHANGE', 540, 440, 110, PAL.yellow, pop(t, T(12, 'exchange') - 0.2, T(13, 'so') - 0.2));
    bigText(ctx, 'BARELY WARM', 540, 320, 124, PAL.cream, pop(t, T(13, 'barely') - 0.15, T(15, 'heat') - 0.2));
    thermo(ctx, 870, 1350, 0.6, 0.14, PAL.blue, pop(t, T(13, 'barely') - 0.2));
    pill(ctx, 'NO FROSTBITE', 280, 1650, { k: pop(t, T(14, 'frostbite') - 0.2), bg: PAL.cream, size: 50 });
    check(ctx, 280, 1530, 0.8, PAL.green, pop(t, T(14, 'dodge') - 0.1));
    bigText(ctx, 'HEAT STAYS', 540, 300, 128, PAL.cream, pop(t, T(15, 'heat') - 0.15));
    bigText(ctx, 'IN THE BODY', 540, 440, 104, PAL.yellow, pop(t, T(15, 'body') - 0.2));
    const gk = ph(t, T(15, 'back') - 0.2, T(15, 'body'));
    if (gk > 0) { ctx.save(); ctx.globalAlpha = gk * (0.5 + 0.2 * Math.sin(t * 6)); const g = ctx.createRadialGradient(540, 870 - lift * 0.3, 40, 540, 870 - lift * 0.3, 360); g.addColorStop(0, 'rgba(255,170,60,0.9)'); g.addColorStop(1, 'rgba(255,170,60,0)'); ctx.fillStyle = g; ctx.fillRect(100, 450, 880, 900); ctx.restore(); }
  };
  S.study = (ctx, t) => {
    sky(ctx, '#3a1c5c', '#1d0f33'); burst(ctx, 540, 900, t, 0.06);
    iceFloor(ctx, 1450);
    duck(ctx, 300, 1490, 0.75, t);
    pill(ctx, 'MALLARD', 300, 1650, { k: pop(t, T(16, 'mallards') - 0.15), bg: PAL.green, col: PAL.white, size: 50 });
    bigText(ctx, 'ONE STUDY', 540, 300, 128, PAL.cream, pop(t, T(16, 'study') - 0.2, T(17, '5') - 0.3));
    pill(ctx, 'AT 0°C', 540, 470, { k: pop(t, T(16, 'freezing') - 0.2, T(17, '5') - 0.3), bg: PAL.ice, size: 56 });
    // stacked bar: body heat loss split
    const bk = pop(t, T(17, 'lost') - 0.2);
    if (bk > 0.01) {
      const x = 760, base = 1500, full = 900, g = EO(t, T(17, '5') - 0.4, T(17, 'percent') + 0.3), feet = full * 0.05 * g;
      ctx.save(); ctx.translate(x, base); ctx.scale(1, bk); ctx.translate(-x, -base);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.grey; rr(ctx, x - 130, base - full, 260, full, 34); ctx.fill(); }, 16);
      ctx.fillStyle = PAL.orange; rr(ctx, x - 130, base - feet, 260, Math.max(feet, 1), Math.min(20, feet / 2)); ctx.fill();
      ctx.restore();
      text(ctx, 'HEAD', x, base - full / 2 - 34, 50, PAL.ink); text(ctx, '+ BODY', x, base - full / 2 + 34, 50, PAL.ink); text(ctx, '~95%', x, base - full + 80, 60, PAL.ink);
      const nk = pop(t, T(17, '5') - 0.15);
      bigText(ctx, '~' + Math.max(1, Math.round(5 * g)) + '%', 540, 340, 200, PAL.yellow, nk);
      pill(ctx, 'FEET', x, base + 90, { k: pop(t, T(17, 'feet') - 0.2), bg: PAL.orange, col: PAL.white, size: 50 });
      arrow(ctx, x - 230, base - 120, x - 150, base - 30, PAL.orange, 16, pop(t, T(17, 'feet') - 0.2));
    }
  };
  S.bone = (ctx, t) => {
    sky(ctx, '#123a4a', '#0a1f2a');
    // x-ray grid
    ctx.strokeStyle = 'rgba(120,220,255,0.08)'; ctx.lineWidth = 2; for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HH); ctx.stroke(); } for (let y = 0; y < HH; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    const z = 1 + 0.06 * EI(t, CUTS.bone, CUTS.end);
    ctx.save(); ctx.translate(540, 1000); ctx.scale(z, z); ctx.translate(-540, -1000);
    // web silhouette (faint)
    ctx.fillStyle = 'rgba(255,154,31,0.22)'; ctx.beginPath(); ctx.moveTo(500, 600); ctx.lineTo(580, 600); ctx.lineTo(600, 1100); ctx.lineTo(920, 1430); ctx.lineTo(560, 1330); ctx.lineTo(240, 1460); ctx.lineTo(480, 1100); ctx.closePath(); ctx.fill();
    // bones
    const bk = pop(t, T(18, 'bone') - 0.2);
    if (bk > 0.01) { ctx.save(); ctx.globalAlpha = Math.min(1, bk);
      limb(ctx, [[540, 600], [545, 1080]], 46, PAL.bone); circle(ctx, 545, 1100, 44, PAL.bone);
      [[[545, 1100], [320, 1420]], [[545, 1100], [560, 1340]], [[545, 1100], [860, 1400]]].forEach((seg) => { const [a, b] = seg, m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; limb(ctx, [a, m], 30, PAL.bone); circle(ctx, m[0], m[1], 22, PAL.bone); limb(ctx, [m, b], 26, PAL.bone); });
      ctx.restore(); }
    // tendons along the bones
    const tk = ph(t, T(18, 'tendon') - 0.2, T(18, 'tendon') + 0.4);
    if (tk > 0) { ctx.save(); ctx.globalAlpha = tk; ctx.setLineDash([]); limb(ctx, [[580, 600], [580, 1090], [870, 1380]], 12, PAL.tendon); limb(ctx, [[505, 600], [510, 1090], [330, 1400]], 12, PAL.tendon); ctx.restore(); }
    ctx.restore();
    bigText(ctx, 'BONE', 300, 330, 140, PAL.bone, pop(t, T(18, 'bone') - 0.15));
    bigText(ctx, '+ TENDON', 700, 460, 110, PAL.tendon, pop(t, T(18, 'tendon') - 0.15));
    pill(ctx, 'HARDLY ANY SOFT TISSUE', 540, 1620, { k: pop(t, T(19, 'soft') - 0.25), bg: PAL.cream, size: 48 });
    flake(ctx, 880, 820, 0.9, t * 0.4, PAL.ice, pop(t, T(19, 'freeze') - 0.15));
    cross(ctx, 880, 820, 0.9, PAL.red, pop(t, T(19, 'freeze') + 0.05));
  };
  S.end = (ctx, t) => {
    sky(ctx, '#a9dcff', '#5aa6e8'); burst(ctx, 540, 1000, t, 0.09, 16);
    iceFloor(ctx, 1330);
    snow(ctx, t, 0.6);
    bigText(ctx, 'GENIUS', 540, 340, 180, PAL.yellow, pop(t, T(20, 'genius') - 0.15, T(21, 'would') - 0.2));
    const sw = EI(t, T(21, 'swap') - 0.3, T(21, 'feet') + 0.3);
    duck(ctx, 330, 1380, 0.95, t, { legCol: H.rgba(H.mix(PAL.orange, PAL.skin, sw)) });
    humanFoot(ctx, 820, 1420, 0.9, 0.5 * (1 - sw), pop(t, T(21, 'swap') - 0.25));
    // swap arrows
    const ak = pop(t, T(21, 'swap') - 0.15);
    if (ak > 0.01) { ctx.save(); ctx.translate(860, 1060); ctx.scale(ak, ak); ctx.rotate(t * 1.5 * (t > T(21, 'swap') ? 1 : 0)); ctx.strokeStyle = PAL.cream; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, 0, 70, 0.2, Math.PI - 0.2); ctx.stroke(); ctx.beginPath(); ctx.arc(0, 0, 70, Math.PI + 0.2, Math.PI * 2 - 0.2); ctx.stroke(); ctx.restore(); }
    bigText(ctx, 'SWAP FEET', 540, 300, 138, PAL.cream, pop(t, T(21, 'swap') - 0.15));
    bigText(ctx, 'WITH A DUCK?', 540, 450, 110, PAL.cream, pop(t, T(21, 'duck') - 0.15));
    pill(ctx, 'FOR ONE WINTER', 540, 620, { k: pop(t, T(22, 'one') - 0.2), bg: PAL.yellow, size: 56, rot: -0.03 });
    pill(ctx, 'YES', 300, 1640, { k: pop(t, T(22, 'winter') + 0.1), bg: PAL.green, col: PAL.white, size: 56 });
    pill(ctx, 'NO WAY', 780, 1640, { k: pop(t, T(22, 'winter') + 0.25), bg: PAL.coral, col: PAL.white, size: 56 });
  };

  const ORDER = [['hook', 0], ['hot', CUTS.hot], ['leg', CUTS.leg], ['name', CUTS.name], ['study', CUTS.study], ['bone', CUTS.bone], ['end', CUTS.end]];
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
    k.noise(0, { dur: D, color: 'pink', filter: 'bandpass', f: [[0, 700]], gain: 0.05, a: 0.5 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.24, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    popAt(T(0, 'barefoot') - 0.15, 600, 0.7, -0.4); popAt(T(0, 'ice') - 0.15, 760, 0.7, 0.4);
    k.play('stamp', T(1, 'never') - 0.1, { gain: 0.5 }); k.play('ding', T(1, 'freeze') - 0.05, { f: 'A5', gain: 0.3 });
    popAt(T(2, 'yours') - 0.15, 520, 0.8, 0.3, false); k.play('error', T(2, 'would') - 0.05, { f: 'A3', gain: 0.3 }); k.play('impact', T(2, 'why') - 0.1, { gain: 0.55 });
    wipe(CUTS.hot);
    popAt(T(3, 'body') - 0.15, 600, 0.6, 0);
    k.play('riser', T(4, 'around') - 0.3, { dur: 0.9, gain: 0.4 });
    for (let i = 0; i < 6; i++) k.play('tick', T(4, 'around') + i * 0.11, { f: 2200 + i * 150, gain: 0.45, minor: true });
    k.play('ding', T(4, '41') + 0.05, { f: 'E6', gain: 0.3 });
    popAt(T(5, 'warm') - 0.15, 560, 0.7, 0); k.noise(T(5, 'blood') - 0.2, { dur: 1.3, color: 'brown', filter: 'lowpass', f: [[0, 500], [1.3, 900]], gain: 0.2, a: 0.2 });
    k.play('swish', T(6, 'suck') - 0.15, { gain: 0.5 }); popAt(T(6, 'suck') - 0.15, 400, 0.6, 0);
    k.play('thud', T(6, 'out') - 0.1, { f: 90, gain: 0.5 });
    wipe(CUTS.leg);
    k.play('stamp', T(7, 'trick') - 0.15, { gain: 0.5 });
    popAt(T(8, 'artery') - 0.15, 520, 0.8, 0, false); popAt(T(8, 'warm') - 0.15, 660, 0.5, -0.4);
    popAt(T(9, 'veins') - 0.15, 720, 0.8, 0, false); popAt(T(9, 'up') - 0.25, 840, 0.5, 0.4);
    for (let i = 0; i < 8; i++) k.play('blip', T(10, 'hands') - 0.2 + i * 0.22, { gain: 0.22, minor: true });
    k.play('sparkle', T(10, 'heat') - 0.2, { n: 5, gain: 0.4 }); popAt(T(11, 'home') - 0.2, 760, 0.6, 0.4);
    wipe(CUTS.name);
    k.play('stamp', T(12, 'countercurrent') - 0.15, { gain: 0.55 }); k.play('ding', T(12, 'exchange') - 0.1, { f: 'D6', gain: 0.3 });
    popAt(T(13, 'barely') - 0.15, 600, 0.7, 0); k.play('success', T(14, 'frostbite') - 0.1, { f: 'C6', gain: 0.25 });
    k.play('riser', T(15, 'back') - 0.4, { dur: 0.8, gain: 0.35 }); popAt(T(15, 'body') - 0.2, 680, 0.6, 0);
    wipe(CUTS.study);
    popAt(T(16, 'study') - 0.2, 560, 0.7, 0); popAt(T(16, 'mallards') - 0.15, 660, 0.6, -0.4); popAt(T(16, 'freezing') - 0.2, 760, 0.6, 0.3);
    for (let i = 0; i < 5; i++) k.play('tick', T(17, '5') - 0.4 + i * 0.12, { f: 2400 + i * 200, gain: 0.5, minor: true });
    k.play('impact', T(17, '5') - 0.05, { gain: 0.6 }); popAt(T(17, 'feet') - 0.2, 820, 0.6, 0.4);
    wipe(CUTS.bone);
    k.play('thud', T(18, 'bone') - 0.15, { f: 140, gain: 0.5 }); k.play('swish', T(18, 'tendon') - 0.2, { gain: 0.4 });
    popAt(T(19, 'soft') - 0.25, 600, 0.6, 0); k.play('error', T(19, 'freeze') + 0.05, { f: 'A3', gain: 0.25 });
    wipe(CUTS.end);
    k.play('sparkle', T(20, 'genius') - 0.2, { n: 6, gain: 0.55 }); k.play('ding', T(20, 'genius'), { f: 'A5', gain: 0.3 });
    k.play('swish', T(21, 'swap') - 0.2, { gain: 0.5 }); popAt(T(21, 'duck') - 0.15, 640, 0.6, 0);
    popAt(T(22, 'one') - 0.2, 720, 0.6, 0); popAt(T(22, 'winter') + 0.1, 600, 0.6, -0.4); popAt(T(22, 'winter') + 0.25, 780, 0.6, 0.4);
    k.tone(T(22, 'winter') + 0.6, { f: 'D4', type: 'triangle', dur: 1.0, gain: 0.1, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
