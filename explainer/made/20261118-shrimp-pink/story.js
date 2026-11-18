// ================= Flat-Vector Science, vertical 1080x1920: "Why do shrimp turn pink when you cook them?" =================
// Unattended run: no storyboard step. Every frame is a pure function of t.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    {"s": 0.25, "e": 2.53, "w": {"your": 0.25, "shrimp": 0.52, "was": 0.92, "bluegray": 1.12, "two": 1.66, "minutes": 1.86, "ago": 2.33}}, // 0
    {"s": 2.98, "e": 4.35, "w": {"why": 2.98, "is": 3.27, "it": 3.47, "pink": 3.66, "now": 4.05}}, // 1
    {"s": 4.89, "e": 6.71, "w": {"the": 4.89, "pink": 5.1, "was": 5.36, "there": 5.57, "the2": 5.9, "whole": 6.1, "time": 6.44}}, // 2
    {"s": 7.06, "e": 8.68, "w": {"shrimp": 7.06, "eat": 7.6, "tiny": 7.87, "algae": 8.23}}, // 3
    {"s": 8.77, "e": 11.33, "w": {"packed": 8.77, "with": 9.17, "a": 9.44, "red": 9.51, "pigment": 9.71, "called": 10.18, "astaxanthin": 10.58}}, // 4
    {"s": 11.75, "e": 13.06, "w": {"but": 11.75, "inside": 11.93, "a": 12.29, "living": 12.35, "shrimp": 12.7}}, // 5
    {"s": 13.54, "e": 14.8, "w": {"a": 13.54, "protein": 13.59, "grabs": 13.96, "that": 14.22, "pigment": 14.43}}, // 6
    {"s": 14.91, "e": 16.66, "w": {"and": 14.91, "twists": 15.16, "it": 15.66, "out": 15.83, "of": 16.08, "shape": 16.24}}, // 7
    {"s": 17.09, "e": 19.97, "w": {"and": 17.09, "a": 17.33, "twisted": 17.4, "pigment": 17.95, "looks": 18.49, "bluegray": 18.88, "not": 19.5, "red": 19.74}}, // 8
    {"s": 20.41, "e": 21.44, "w": {"now": 20.41, "add": 20.72, "heat": 21.03}}, // 9
    {"s": 21.73, "e": 23.96, "w": {"the": 21.73, "protein": 21.98, "unravels": 22.55, "and": 23.21, "lets": 23.46, "go": 23.79}}, // 10
    {"s": 24.49, "e": 26.84, "w": {"and": 24.49, "the": 24.68, "pigment": 24.88, "snaps": 25.34, "back": 25.66, "to": 25.92, "its": 26.06, "true": 26.25, "color": 26.51}}, // 11
    {"s": 27.21, "e": 27.79, "w": {"pink": 27.21}}, // 12
    {"s": 28.14, "e": 30.86, "w": {"lobsters": 28.14, "and": 28.76, "crabs": 28.99, "do": 29.38, "the": 29.54, "exact": 29.77, "same": 30.16, "thing": 30.47}}, // 13
    {"s": 31.26, "e": 33.65, "w": {"and": 31.26, "that": 31.46, "same": 31.72, "pigment": 31.99, "is": 32.45, "why": 32.59, "salmon": 32.79, "are": 33.18, "pink": 33.38}}, // 14
    {"s": 34.19, "e": 36.4, "w": {"and": 34.19, "it": 34.4, "helps": 34.55, "paint": 34.9, "flamingos": 35.26, "pink": 35.9, "too": 36.19}}, // 15
    {"s": 36.84, "e": 38.62, "w": {"they": 36.84, "all": 37.11, "get": 37.3, "it": 37.5, "from": 37.63, "what": 37.9, "they2": 38.16, "eat": 38.42}}, // 16
    {"s": 38.97, "e": 40.91, "w": {"so": 38.97, "the": 39.11, "color": 39.33, "wasnt": 39.69, "made": 40.05, "in": 40.33, "the2": 40.48, "pan": 40.69}}, // 17
    {"s": 41.33, "e": 42.53, "w": {"it": 41.33, "was": 41.49, "just": 41.73, "hiding": 42.05}}, // 18
    {"s": 42.91, "e": 45.35, "w": {"be": 42.91, "honest": 43.05, "did": 43.46, "you": 43.66, "think": 43.86, "raw": 44.2, "shrimp": 44.4, "were": 44.81, "pink": 45.08}}, // 19
  ];
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + i + ' ' + w); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = { algae: 4.62, protein: 11.54, heat: 20.19, family: 27.97, diet: 36.62, pan: 38.8, end: 42.72 };

  // ---------- Flat-Vector Science house kit ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', red: '#ef4a4a', red2: '#c93636', blue: '#2f7bff', yellow: '#ffd23f', orange: '#ff9a1f', green: '#1f9e5a', green2: '#16804a', lime: '#8fd94a', grey: '#c8c4bc', white: '#ffffff', coral: '#ff6b5b', teal: '#1fb6a6', purple: '#8a5cf6', raw: '#7f93a3', raw2: '#5f7486', pink: '#ff7f66', pink2: '#e85a46', flam: '#ff8fb1', flam2: '#f0628f', salmon: '#ff8a5c', steel: '#3b4a6b' };
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
  const shrimpCol = (c) => [H.rgba(H.mix(PAL.raw, PAL.pink, c)), H.rgba(H.mix(PAL.raw2, PAL.pink2, c)), H.rgba(H.mix('#a9b8c4', '#ffb7a3', c))];

  // ---------- the shrimp: C-curled side view, head upper-left, tail curling under. c = 0 raw blue-gray .. 1 cooked pink ----------
  const shrimp = (ctx, x, y, s, c, t, o = {}) => {
    const [base, dark, light] = shrimpCol(c), R = 150, wig = o.wiggle ?? 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.flip ? -1 : 1), s); ctx.rotate(o.rot || 0);
    const P = (u) => { const a = H.lerp(-2.75, 1.25, u) + Math.sin(t * 6 + u * 4) * 0.04 * wig; return [Math.cos(a) * R, Math.sin(a) * R, a]; };
    const wid = (u) => H.lerp(118, 40, Math.pow(u, 0.9));
    const body = (col) => {
      // antennae
      const hp = P(0);
      limb(ctx, [[hp[0] - 40, hp[1] - 30], [hp[0] - 160, hp[1] - 190 + Math.sin(t * 2) * 10], [hp[0] - 60, hp[1] - 380]], 7, col || dark);
      limb(ctx, [[hp[0] - 30, hp[1] - 40], [hp[0] - 60, hp[1] - 240], [hp[0] + 120, hp[1] - 360 + Math.sin(t * 2.4) * 12]], 7, col || dark);
      // legs (toward the inside of the curl)
      for (let i = 0; i < 6; i++) { const u = 0.05 + i * 0.075, p = P(u), a = p[2]; const lx = p[0] - Math.cos(a) * 40, ly = p[1] - Math.sin(a) * 40; const sw = Math.sin(t * 8 + i) * 6 * wig; limb(ctx, [[lx, ly], [lx - Math.cos(a) * 70 + sw, ly - Math.sin(a) * 70 + 10]], 9, col || dark); }
      // tail fan
      const tp = P(1), ta = tp[2] + Math.PI / 2;
      ctx.fillStyle = col || dark; for (const d of [-0.5, 0, 0.5]) { ctx.save(); ctx.translate(tp[0], tp[1]); ctx.rotate(ta + d); ctx.beginPath(); ctx.moveTo(-14, 0); ctx.quadraticCurveTo(-34, 70, 0, 92); ctx.quadraticCurveTo(34, 70, 14, 0); ctx.closePath(); ctx.fill(); ctx.restore(); }
      // segments from tail to head
      for (let i = 12; i >= 0; i--) { const u = i / 12 * 0.95, p = P(u), w2 = wid(u); ctx.fillStyle = col || (i % 2 ? base : light); ctx.save(); ctx.translate(p[0], p[1]); ctx.rotate(p[2] + Math.PI / 2); ctx.beginPath(); ctx.ellipse(0, 0, w2 / 2, w2 * 0.42, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
      // head + rostrum
      ctx.fillStyle = col || base; ctx.save(); ctx.translate(hp[0], hp[1]); ctx.rotate(hp[2] + Math.PI / 2 + 0.3); ctx.beginPath(); ctx.ellipse(0, -20, 70, 92, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-20, -100); ctx.lineTo(10, -210); ctx.lineTo(24, -96); ctx.closePath(); ctx.fill(); ctx.restore();
    };
    longShadow(ctx, body, o.sh ?? 18);
    // back stripe + eye
    const hp = P(0);
    ctx.save(); ctx.strokeStyle = dark; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 0; i <= 20; i++) { const u = i / 20 * 0.9, p = P(u), a = p[2], r2 = wid(u) * 0.36; const xx = p[0] + Math.cos(a) * r2, yy = p[1] + Math.sin(a) * r2; i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); ctx.restore();
    circle(ctx, hp[0] - 34, hp[1] - 46, 20, PAL.ink); circle(ctx, hp[0] - 40, hp[1] - 52, 7, PAL.white);
    ctx.restore();
  };

  // ---------- astaxanthin: long zig-zag chain with a ring at each end. bend 0 straight .. 1 twisted; c 0 blue-gray .. 1 red ----------
  const molecule = (ctx, x, y, s, bend, c, o = {}) => {
    const col = H.rgba(H.mix('#6f8296', '#ff4d3a', c)), N = 16, L = 640;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const pts = []; for (let i = 0; i <= N; i++) { const u = i / N - 0.5; const bx = u * L, by = (i % 2 ? -22 : 22); const arc = bend * Math.sin(u * Math.PI * 2.2) * 120 + bend * (u * u) * 260; const tw = bend * Math.cos(u * 9) * 26; pts.push([bx * (1 - 0.25 * bend), by + arc + tw]); }
    const hexAt = (cx, cy, r, rot, f) => { ctx.beginPath(); for (let k = 0; k < 6; k++) { const a = rot + k * Math.PI / 3; const px = cx + Math.cos(a) * r, py = cy + Math.sin(a) * r; k ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.closePath(); f(); };
    const draw = (cc) => { const cl = cc || col; limb(ctx, pts, 22, cl);
      const a0 = pts[0], a1 = pts[N]; ctx.strokeStyle = cl; ctx.lineWidth = 20; ctx.lineJoin = 'round';
      hexAt(a0[0] - 66, a0[1], 62, 0, () => ctx.stroke()); hexAt(a1[0] + 66, a1[1], 62, 0, () => ctx.stroke());
      ctx.fillStyle = cl; for (const [px, py] of [[a0[0] - 130, a0[1] - 10], [a1[0] + 130, a1[1] + 10]]) circle(ctx, px, py, 20, cl); };
    longShadow(ctx, draw, o.sh ?? 14);
    if (o.glow > 0) { ctx.save(); ctx.globalAlpha = o.glow; ctx.globalCompositeOperation = 'lighter'; draw('rgba(255,140,90,0.35)'); ctx.restore(); }
    ctx.restore();
  };
  // crustacyanin protein: two blue lobes clamping the chain; open 0 closed .. 1 apart; unravel 0..1 turns lobes into drifting ribbons
  const protein = (ctx, x, y, s, open, unravel, t) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    for (const sd of [-1, 1]) {
      const oy = sd * (150 + 420 * open) + sd * unravel * 260, a = 1 - unravel;
      if (a > 0.01) { ctx.save(); ctx.globalAlpha = a; ctx.translate(0, oy);
        longShadow(ctx, (c) => { const col = c || PAL.blue; const r = H.rng(sd > 0 ? 11 : 12); for (let i = 0; i < 9; i++) circle(ctx, -260 + i * 65, sd * (r.range(-10, 50)), r.range(70, 100), col); }, 16);
        ctx.fillStyle = 'rgba(255,255,255,0.18)'; for (let i = 0; i < 5; i++) circle(ctx, -220 + i * 110, sd * 20, 26, ctx.fillStyle);
        ctx.restore(); }
      if (unravel > 0.01) { ctx.save(); ctx.globalAlpha = Math.min(1, unravel * 2) * (1 - ph(unravel, 0.75, 1)); ctx.strokeStyle = PAL.blue; ctx.lineWidth = 26; ctx.lineCap = 'round'; ctx.beginPath();
        for (let i = 0; i <= 40; i++) { const u = i / 40, xx = -420 + u * 840, yy = oy + Math.sin(u * 14 + t * 5 + sd) * 50 * unravel; i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); ctx.restore(); }
    }
    ctx.restore();
  };
  const flames = (ctx, t, k, top = 1500) => { if (k <= 0.01) return; ctx.save(); ctx.translate(0, (1 - k) * 500);
    for (let i = 0; i < 9; i++) { const x = 60 + i * 120, h = 260 + 90 * Math.sin(t * 7 + i * 1.7), w = 110; for (const [c, sc] of [[PAL.red, 1], [PAL.orange, 0.7], [PAL.yellow, 0.4]]) { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(x - w * sc, HH); ctx.quadraticCurveTo(x - w * sc * 0.8, top + 300 - h * sc, x + Math.sin(t * 9 + i) * 20, top + 260 - h * sc * 1.4); ctx.quadraticCurveTo(x + w * sc * 0.8, top + 300 - h * sc, x + w * sc, HH); ctx.closePath(); ctx.fill(); } }
    ctx.restore(); };
  const steam = (ctx, x, y, t, a) => { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha = a * 0.8; ctx.strokeStyle = PAL.white; ctx.lineWidth = 16; ctx.lineCap = 'round'; for (let j = 0; j < 3; j++) { ctx.beginPath(); for (let i = 0; i <= 16; i++) { const u = i / 16, yy = y - u * 260 - ((t * 120) % 60), xx = x + (j - 1) * 120 + Math.sin(u * 7 - t * 4 + j) * 26; i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); } ctx.restore(); };
  // frying pan, three-quarter top view
  const pan = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#2b2b3a'; rr(ctx, 360, -40, 420, 80, 40); ctx.fill(); ctx.beginPath(); ctx.ellipse(0, 0, 440, 330, 0, 0, Math.PI * 2); ctx.fill(); }, 22);
    ctx.fillStyle = '#3d3d52'; ctx.beginPath(); ctx.ellipse(0, 6, 395, 290, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.07)'; ctx.beginPath(); ctx.ellipse(-120, -90, 170, 80, -0.3, 0, Math.PI * 2); ctx.fill();
    ctx.restore(); };
  // counter backdrop with tiles (cached)
  let KIT = null;
  const kitchen = (ctx, tint) => {
    if (!KIT) { KIT = H.layer(W, HH); const c = KIT.getContext('2d'); c.fillStyle = '#ffe1b8'; c.fillRect(0, 0, W, HH); c.fillStyle = '#ffd39b'; for (let y = 0; y < 1180; y += 120) for (let x = (y / 120) % 2 ? 60 : 0; x < W; x += 120) { rr(c, x + 6, y + 6, 108, 108, 18); c.fill(); }
      c.fillStyle = '#c9845a'; c.fillRect(0, 1180, W, HH - 1180); c.fillStyle = '#b06f48'; c.fillRect(0, 1180, W, 40); }
    ctx.drawImage(KIT, 0, 0); if (tint) { ctx.fillStyle = tint; ctx.fillRect(0, 0, W, HH); }
  };
  const ALG = (() => { const r = H.rng(21); return Array.from({ length: 26 }, () => ({ x: r() * W, y: r.range(500, 1600), s: r.range(16, 30), v: r.range(10, 30), d: r() * 6 })); })();
  // simple icons for the family scene
  const lobster = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { const col = c || PAL.red; ctx.fillStyle = col;
      for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.ellipse(0, -60 + i * 38, 54 - i * 5, 26, 0, 0, Math.PI * 2); ctx.fill(); }
      ctx.beginPath(); ctx.moveTo(0, 150); ctx.lineTo(-60, 210); ctx.lineTo(60, 210); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.ellipse(0, -110, 60, 70, 0, 0, Math.PI * 2); ctx.fill();
      for (const sd of [-1, 1]) { limb(ctx, [[sd * 40, -140], [sd * 110, -190], [sd * 120, -230]], 18, col); ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(sd * 125, -270, 40, 58, sd * 0.2, 0, Math.PI * 2); ctx.fill(); limb(ctx, [[sd * 20, -170], [sd * 70, -300]], 6, col); } }, 14);
    circle(ctx, -22, -150, 9, PAL.ink); circle(ctx, 22, -150, 9, PAL.ink); ctx.restore(); };
  const crab = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { const col = c || PAL.coral; for (const sd of [-1, 1]) { for (let i = 0; i < 3; i++) limb(ctx, [[sd * 90, 10 + i * 30], [sd * 170, -10 + i * 40], [sd * 200, 60 + i * 40]], 14, col); limb(ctx, [[sd * 80, -40], [sd * 150, -110]], 18, col); ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(sd * 165, -150, 48, 40, sd * 0.5, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(0, 10, 140, 95, 0, 0, Math.PI * 2); ctx.fill(); }, 14);
    for (const sd of [-1, 1]) { limb(ctx, [[sd * 30, -70], [sd * 34, -110]], 8, PAL.coral); circle(ctx, sd * 34, -116, 14, PAL.ink); } ctx.restore(); };
  const salmon = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.salmon; ctx.beginPath(); ctx.moveTo(-170, -70); ctx.quadraticCurveTo(0, -120, 170, -60); ctx.quadraticCurveTo(200, 0, 160, 70); ctx.quadraticCurveTo(0, 110, -170, 70); ctx.quadraticCurveTo(-200, 0, -170, -70); ctx.closePath(); ctx.fill(); }, 14);
    ctx.strokeStyle = 'rgba(255,240,225,0.85)'; ctx.lineWidth = 9; for (let i = 0; i < 6; i++) { const xx = -120 + i * 50; ctx.beginPath(); ctx.moveTo(xx, -80); ctx.quadraticCurveTo(xx + 30, 0, xx, 80); ctx.stroke(); } ctx.restore(); };
  const flamingo = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    limb(ctx, [[0, 60], [0, 230]], 10, PAL.flam2); limb(ctx, [[0, 140], [40, 120], [20, 70]], 9, PAL.flam2);
    longShadow(ctx, (c) => { const col = c || PAL.flam; ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(0, 20, 110, 66, -0.15, 0, Math.PI * 2); ctx.fill();
      limb(ctx, [[70, 0], [110, -80], [60, -150], [80, -210]], 26, col); ctx.beginPath(); ctx.arc(95, -220, 30, 0, Math.PI * 2); ctx.fill(); }, 14);
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.moveTo(115, -225); ctx.lineTo(160, -200); ctx.lineTo(140, -170); ctx.lineTo(118, -205); ctx.closePath(); ctx.fill(); circle(ctx, 98, -230, 6, PAL.ink);
    ctx.fillStyle = PAL.flam2; ctx.beginPath(); ctx.ellipse(-30, 10, 70, 34, -0.2, 0, Math.PI * 2); ctx.fill(); ctx.restore(); };
  const card = (ctx, x, y, k, label, bg, draw) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -215, -230, 430, 460, 46); ctx.fill(); }, 18);
    draw(); ctx.restore(); pill(ctx, label, x, y + 220, { k, bg, col: PAL.white, size: 46, sh: 10 }); };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    kitchen(ctx); burst(ctx, 540, 1250, t, 0.06);
    const z = 1 + 0.06 * EI(t, 0, 4.6);
    ctx.save(); ctx.translate(540, 1280); ctx.scale(z, z); ctx.translate(-540, -1280);
    pan(ctx, 500, 1300, 1.0);
    const c = EI(t, T(1, 'pink') - 0.35, T(1, 'pink') + 0.25);
    shrimp(ctx, 510, 1300, 1.05, c, t, { rot: 0.15 });
    steam(ctx, 500, 1080, t, ph(t, T(1, 'pink') - 0.4, T(1, 'pink') + 0.2));
    ctx.restore();
    pill(ctx, 'BLUE-GRAY', 300, 820, { k: pop(t, T(0, 'bluegray') - 0.15, T(1, 'pink') - 0.3), bg: PAL.raw2, col: PAL.white, size: 56, rot: -0.04 });
    bigText(ctx, '2 MIN AGO', 540, 360, 150, PAL.ink, pop(t, T(0, 'two') - 0.15, T(1, 'why') - 0.25), 16);
    bigText(ctx, 'WHY', 540, 330, 170, PAL.ink, pop(t, T(1, 'why') - 0.15), 16);
    bigText(ctx, 'PINK?', 540, 500, 200, PAL.pink2, pop(t, T(1, 'pink') - 0.15), 18);
  };
  S.algae = (ctx, t) => {
    sky(ctx, '#58c7e0', '#11577f'); burst(ctx, 540, 0, t, 0.06, 12);
    // seabed
    ctx.fillStyle = '#e8c88a'; ctx.beginPath(); ctx.moveTo(0, 1620); ctx.quadraticCurveTo(540, 1540, W, 1620); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.closePath(); ctx.fill();
    for (let i = 0; i < 6; i++) { const x = 80 + i * 190; limb(ctx, [[x, 1640], [x + Math.sin(t * 1.5 + i) * 30, 1480], [x + Math.sin(t * 1.5 + i + 1) * 40, 1330]], 22, i % 2 ? PAL.green : PAL.green2); }
    bigText(ctx, 'THE PINK WAS', 540, 760, 120, PAL.cream, pop(t, T(2, 'pink') - 0.15, CUTS.algae + 2.3));
    bigText(ctx, 'THERE ALL ALONG', 540, 920, 110, PAL.yellow, pop(t, T(2, 'whole') - 0.2, CUTS.algae + 2.3));
    const sk = EO(t, T(3, 'shrimp') - 0.3, T(3, 'shrimp') + 0.4);
    const eat = ph(t, T(3, 'eat') - 0.2, T(4, 'astaxanthin') + 0.6);
    const red = ph(t, T(4, 'red') - 0.2, T(4, 'red') + 0.2);
    const mx = 380, my = 900; // mouth area
    ALG.forEach((a, i) => { const ax = a.x + Math.sin(t * 0.8 + a.d) * 30, ay = a.y + Math.cos(t * 0.6 + a.d) * 20 - a.v * (t - CUTS.algae);
      const pull = H.clamp(eat * 1.6 - (i % 8) * 0.12); const x = H.lerp(ax, mx, H.ease.inOut(pull)), y = H.lerp(((ay % 1400) + 1400) % 1400 + 300, my, H.ease.inOut(pull));
      if (pull > 0.97) return; const k = Math.min(1, sk + 0.4);
      ctx.save(); ctx.globalAlpha = k; circle(ctx, x, y, a.s * (1 - pull * 0.5), PAL.lime); circle(ctx, x, y, a.s * 0.45 * red, PAL.red); ctx.restore(); });
    if (sk > 0.01) shrimp(ctx, H.lerp(1300, 560, sk), 1130 + Math.sin(t * 2) * 14, 1.05, 0, t, { wiggle: 1, flip: true, rot: -0.1 });
    pill(ctx, 'TINY ALGAE', 540, 420, { k: pop(t, T(3, 'algae') - 0.2, T(4, 'pigment') - 0.25), bg: PAL.green, col: PAL.white, size: 60 });
    pill(ctx, 'RED PIGMENT', 540, 300, { k: pop(t, T(4, 'red') - 0.2), bg: PAL.red, col: PAL.white, size: 58 });
    const mk = pop(t, T(4, 'pigment') - 0.1);
    if (mk > 0.01) molecule(ctx, 540, 480, 0.6 * mk, 0, 1);
    pill(ctx, 'ASTAXANTHIN', 540, 640, { k: pop(t, T(4, 'astaxanthin') - 0.15), bg: PAL.cream, size: 66 });
  };
  S.protein = (ctx, t) => {
    sky(ctx, '#1c2a52', '#0d1430');
    const r = H.rng(9); for (let i = 0; i < 30; i++) circle(ctx, r() * W, r() * HH, r.range(4, 12), 'rgba(255,255,255,0.06)');
    // shell cut-away ring in the background
    ctx.save(); ctx.globalAlpha = 0.12; ctx.strokeStyle = PAL.raw; ctx.lineWidth = 60; ctx.beginPath(); ctx.arc(540, 1050, 520, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    bigText(ctx, 'INSIDE A', 540, 300, 120, PAL.cream, pop(t, T(5, 'inside') - 0.15, T(6, 'protein') - 0.3));
    bigText(ctx, 'LIVING SHRIMP', 540, 440, 110, PAL.yellow, pop(t, T(5, 'living') - 0.15, T(6, 'protein') - 0.3));
    const mk = EO(t, CUTS.protein + 0.2, CUTS.protein + 0.8);
    const bend = EI(t, T(7, 'twists') - 0.15, T(7, 'shape') + 0.1);
    const c = 1 - EI(t, T(8, 'looks') - 0.1, T(8, 'bluegray') + 0.1);
    const clamp = EI(t, T(6, 'protein') - 0.15, T(6, 'grabs') + 0.15);
    protein(ctx, 540, 1060, 1, 1 - clamp, 0, t);
    if (mk > 0.01) molecule(ctx, 540, 1060, 1.1 * mk, bend, c);
    pill(ctx, 'PROTEIN', 540, 300, { k: pop(t, T(6, 'protein') - 0.15, T(7, 'shape') + 0.3), bg: PAL.blue, col: PAL.white, size: 64 });
    pill(ctx, 'GRAB!', 860, 700, { k: pop(t, T(6, 'grabs') - 0.1, T(7, 'shape') + 0.3), bg: PAL.yellow, size: 52, rot: 0.08 });
    bigText(ctx, 'OUT OF SHAPE', 540, 440, 110, PAL.cream, pop(t, T(7, 'shape') - 0.2, T(8, 'twisted') - 0.25));
    bigText(ctx, 'TWISTED', 540, 320, 140, PAL.cream, pop(t, T(8, 'twisted') - 0.15));
    bigText(ctx, '= BLUE-GRAY', 540, 1560, 120, '#9fb3c6', pop(t, T(8, 'bluegray') - 0.15));
    cross(ctx, 880, 470, 0.8, PAL.red, pop(t, T(8, 'red') - 0.1));
    pill(ctx, 'NOT RED', 880, 600, { k: pop(t, T(8, 'not') - 0.1), bg: PAL.red, col: PAL.white, size: 44, sh: 10 });
  };
  S.heat = (ctx, t) => {
    const hk = EO(t, T(9, 'add') - 0.2, T(9, 'heat') + 0.3);
    sky(ctx, H.rgba(H.mix('#1c2a52', '#ffb347', hk)), H.rgba(H.mix('#0d1430', '#e8452c', hk))); burst(ctx, 540, 1060, t, 0.07 * hk);
    flames(ctx, t, hk);
    const un = EI(t, T(10, 'unravels') - 0.25, T(10, 'go') + 0.2);
    const snap = H.ease.back(ph(t, T(11, 'snaps') - 0.15, T(11, 'snaps') + 0.3));
    const c = EI(t, T(11, 'true') - 0.25, T(11, 'color') + 0.1);
    const pinkK = ph(t, T(12, 'pink') - 0.3, T(12, 'pink'));
    protein(ctx, 540, 1060, 1, 0, un, t);
    const shake = (1 - un) * hk * Math.sin(t * 40) * 6;
    if (pinkK < 1) { ctx.save(); ctx.globalAlpha = 1 - pinkK; molecule(ctx, 540 + shake, 1060, 1.1, 1 - snap, c, { glow: c * (0.5 + 0.3 * Math.sin(t * 6)) }); ctx.restore(); }
    const sk = pop(t, T(12, 'pink') - 0.25);
    if (sk > 0.01) shrimp(ctx, 560, 1080, 1.25 * sk, 1, t, { rot: 0.1 });
    bigText(ctx, 'ADD HEAT', 540, 330, 150, PAL.cream, pop(t, T(9, 'heat') - 0.15, T(10, 'unravels') - 0.3));
    pill(ctx, 'PROTEIN UNRAVELS', 540, 330, { k: pop(t, T(10, 'unravels') - 0.15, T(11, 'snaps') - 0.3), bg: PAL.blue, col: PAL.white, size: 60 });
    pill(ctx, 'LETS GO', 540, 470, { k: pop(t, T(10, 'lets') - 0.1, T(11, 'snaps') - 0.3), bg: PAL.cream, size: 52 });
    bigText(ctx, 'SNAP!', 540, 330, 160, PAL.yellow, pop(t, T(11, 'snaps') - 0.12, T(11, 'true') - 0.3));
    bigText(ctx, 'TRUE COLOR', 540, 330, 140, PAL.cream, pop(t, T(11, 'true') - 0.15, T(12, 'pink') - 0.3));
    bigText(ctx, 'PINK!', 540, 400, 230, PAL.pink, pop(t, T(12, 'pink') - 0.15), 22);
  };
  S.family = (ctx, t) => {
    sky(ctx, '#9be7d8', '#2fae9e'); burst(ctx, 540, 1000, t, 0.07);
    bigText(ctx, 'SAME TRICK', 540, 300, 140, PAL.cream, pop(t, T(13, 'same') - 0.2, T(14, 'same') - 0.3));
    bigText(ctx, 'SAME PIGMENT', 540, 300, 130, PAL.yellow, pop(t, T(14, 'same') - 0.15));
    card(ctx, 295, 720, pop(t, T(13, 'lobsters') - 0.15), 'LOBSTER', PAL.red, () => lobster(ctx, 0, 10, 0.75));
    card(ctx, 785, 720, pop(t, T(13, 'crabs') - 0.15), 'CRAB', PAL.coral, () => crab(ctx, 0, 30, 0.85));
    card(ctx, 295, 1290, pop(t, T(14, 'salmon') - 0.15), 'SALMON', PAL.salmon, () => salmon(ctx, 0, 0, 0.95));
    card(ctx, 785, 1290, pop(t, T(15, 'flamingos') - 0.15), 'FLAMINGO', PAL.flam2, () => flamingo(ctx, -20, -10, 0.85));
  };
  S.diet = (ctx, t) => {
    sky(ctx, '#ffd9a8', '#ff9a8b'); burst(ctx, 540, 900, t, 0.08);
    // shallow lagoon band
    ctx.fillStyle = '#6cc9e0'; ctx.beginPath(); ctx.moveTo(0, 1300); for (let x = 0; x <= W; x += 40) ctx.lineTo(x, 1300 + Math.sin(x * 0.012 + t * 2) * 14); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.closePath(); ctx.fill();
    bigText(ctx, 'IT COMES FROM', 540, 300, 110, PAL.ink, pop(t, T(16, 'get') - 0.2), 14);
    bigText(ctx, 'WHAT THEY EAT', 540, 440, 120, PAL.cream, pop(t, T(16, 'eat') - 0.2));
    const r = H.rng(4); const ak = pop(t, CUTS.diet + 0.05);
    for (let i = 0; i < 9; i++) { const x = 160 + r() * 180, y = 760 + r() * 240; circle(ctx, x, y, 26 * ak, PAL.lime); circle(ctx, x, y, 11 * ak, PAL.red); }
    pill(ctx, 'ALGAE', 250, 1080, { k: ak, bg: PAL.green, col: PAL.white, size: 46, sh: 10 });
    const sk = pop(t, T(16, 'all') - 0.15);
    if (sk > 0.01) shrimp(ctx, 760, 900, 0.62 * sk, 0.15, t, { wiggle: 1, flip: true });
    arrow(ctx, 380, 880, 560, 880, PAL.ink, 18, EO(t, T(16, 'get') - 0.2, T(16, 'get') + 0.3));
    const fk = pop(t, T(16, 'eat') - 0.25);
    if (fk > 0.01) { flamingo(ctx, 300, 1340, 0.9 * fk); salmon(ctx, 790, 1480, 0.7 * fk); }
    arrow(ctx, 700, 1060, 500, 1140, PAL.ink, 16, EO(t, T(16, 'what') - 0.2, T(16, 'eat') + 0.2));
    arrow(ctx, 790, 1080, 790, 1360, PAL.ink, 16, EO(t, T(16, 'what') - 0.2, T(16, 'eat') + 0.2));
  };
  S.pan = (ctx, t) => {
    kitchen(ctx, 'rgba(255,120,80,0.10)');
    pan(ctx, 500, 1300, 1.0);
    shrimp(ctx, 510, 1300, 1.05, 1, t, { rot: 0.15 });
    steam(ctx, 500, 1080, t, 0.6);
    bigText(ctx, 'NOT MADE', 540, 330, 140, PAL.ink, pop(t, T(17, 'made') - 0.15, T(18, 'hiding') - 0.3), 16);
    bigText(ctx, 'IN THE PAN', 540, 480, 130, PAL.ink, pop(t, T(17, 'pan') - 0.2, T(18, 'hiding') - 0.3), 16);
    cross(ctx, 860, 900, 0.9, PAL.red, pop(t, T(17, 'pan') - 0.05, T(18, 'hiding') - 0.3));
    bigText(ctx, 'JUST HIDING', 540, 400, 140, PAL.pink2, pop(t, T(18, 'hiding') - 0.15), 18);
    // peeking red pigment glow on "hiding"
    const gk = ph(t, T(18, 'hiding') - 0.1, T(18, 'hiding') + 0.4);
    if (gk > 0) { ctx.save(); ctx.globalAlpha = gk * 0.6; const g = ctx.createRadialGradient(510, 1300, 30, 510, 1300, 380); g.addColorStop(0, 'rgba(255,90,60,0.8)'); g.addColorStop(1, 'rgba(255,90,60,0)'); ctx.fillStyle = g; ctx.fillRect(100, 900, 880, 800); ctx.restore(); }
  };
  S.end = (ctx, t) => {
    sky(ctx, '#8a5cf6', '#3a1c7a'); burst(ctx, 540, 1100, t, 0.08, 16);
    bigText(ctx, 'BE HONEST', 540, 300, 130, PAL.yellow, pop(t, T(19, 'be') - 0.1));
    bigText(ctx, 'RAW SHRIMP', 540, 450, 120, PAL.cream, pop(t, T(19, 'raw') - 0.15));
    bigText(ctx, '= PINK?', 540, 590, 120, PAL.pink, pop(t, T(19, 'pink') - 0.15));
    shrimp(ctx, 330, 1150, 0.72, 0, t, { wiggle: 0.5 });
    shrimp(ctx, 790, 1150, 0.72, 1, t, { flip: true });
    pill(ctx, 'RAW', 300, 1400, { k: pop(t, CUTS.end + 0.1), bg: PAL.raw2, col: PAL.white, size: 48, sh: 10 });
    pill(ctx, 'COOKED', 780, 1400, { k: pop(t, CUTS.end + 0.25), bg: PAL.pink2, col: PAL.white, size: 48, sh: 10 });
    pill(ctx, 'YES', 320, 1580, { k: pop(t, T(19, 'pink') + 0.2), bg: PAL.green, col: PAL.white, size: 56 });
    pill(ctx, 'NO WAY', 760, 1580, { k: pop(t, T(19, 'pink') + 0.35), bg: PAL.coral, col: PAL.white, size: 56 });
  };

  const ORDER = [['hook', 0], ['algae', CUTS.algae], ['protein', CUTS.protein], ['heat', CUTS.heat], ['family', CUTS.family], ['diet', CUTS.diet], ['pan', CUTS.pan], ['end', CUTS.end]];
  const WIPE = 0.45;
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] - WIPE / 2) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    // heat continues the protein close-up as a continuous move (no wipe); others use the circle wipe
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
    k.music('pulse', 0.2, D, { bpm: 104, gain: 0.22, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    k.noise(0, { dur: 4.4, color: 'pink', filter: 'highpass', f: [[0, 3000]], gain: 0.05, a: 0.3 }); // pan sizzle
    popAt(T(0, 'bluegray') - 0.15, 520, 0.7, -0.4); k.play('stamp', T(0, 'two') - 0.1, { gain: 0.5 });
    k.play('riser', T(1, 'pink') - 0.6, { dur: 0.7, gain: 0.35 }); k.play('impact', T(1, 'pink') - 0.05, { gain: 0.5 });
    wipe(CUTS.algae);
    k.noise(CUTS.algae, { dur: CUTS.protein - CUTS.algae, color: 'brown', filter: 'lowpass', f: [[0, 400]], gain: 0.08, a: 0.5 });
    popAt(T(2, 'pink') - 0.15, 600, 0.6, 0); k.play('ding', T(2, 'whole') - 0.1, { f: 'E5', gain: 0.25 });
    k.play('swish', T(3, 'shrimp') - 0.3, { gain: 0.4 }); popAt(T(3, 'algae') - 0.2, 700, 0.6, 0);
    for (let i = 0; i < 6; i++) k.play('blip', T(3, 'eat') + i * 0.35, { gain: 0.18, minor: true });
    popAt(T(4, 'red') - 0.2, 760, 0.6, 0.3); k.play('sparkle', T(4, 'pigment') - 0.1, { n: 4, gain: 0.35 }); k.play('ding', T(4, 'astaxanthin') - 0.1, { f: 'A5', gain: 0.3 });
    wipe(CUTS.protein);
    k.play('stamp', T(5, 'inside') - 0.15, { gain: 0.45 });
    popAt(T(6, 'protein') - 0.15, 520, 0.7, 0, false); k.play('thud', T(6, 'grabs') - 0.05, { f: 120, gain: 0.5 });
    k.play('swish', T(7, 'twists') - 0.15, { gain: 0.45 }); popAt(T(7, 'shape') - 0.2, 640, 0.5, 0);
    k.play('stamp', T(8, 'twisted') - 0.15, { gain: 0.45 }); popAt(T(8, 'bluegray') - 0.15, 480, 0.6, 0); k.play('error', T(8, 'red') - 0.1, { f: 'A3', gain: 0.28 });
    wipe(CUTS.heat);
    k.noise(T(9, 'add') - 0.2, { dur: CUTS.family - T(9, 'add'), color: 'brown', filter: 'lowpass', f: [[0, 600], [2, 1200]], gain: 0.16, a: 0.4 }); // flame roar
    k.play('impact', T(9, 'heat') - 0.05, { gain: 0.5 });
    k.play('swish', T(10, 'unravels') - 0.2, { gain: 0.45 }); popAt(T(10, 'lets') - 0.1, 700, 0.5, 0);
    k.play('impact', T(11, 'snaps') - 0.05, { gain: 0.55 }); k.play('sparkle', T(11, 'true') - 0.2, { n: 5, gain: 0.4 });
    k.play('ding', T(12, 'pink') - 0.05, { f: 'C6', gain: 0.35 }); k.play('success', T(12, 'pink'), { f: 'C6', gain: 0.25 });
    wipe(CUTS.family);
    popAt(T(13, 'lobsters') - 0.15, 560, 0.7, -0.4, false); popAt(T(13, 'crabs') - 0.15, 660, 0.7, 0.4, false);
    k.play('ding', T(14, 'same') - 0.1, { f: 'G5', gain: 0.25 });
    popAt(T(14, 'salmon') - 0.15, 600, 0.7, -0.4, false); popAt(T(15, 'flamingos') - 0.15, 740, 0.7, 0.4, false);
    wipe(CUTS.diet);
    k.play('swish', T(16, 'get') - 0.2, { gain: 0.35 }); popAt(T(16, 'all') - 0.15, 600, 0.5, 0.3); popAt(T(16, 'eat') - 0.25, 720, 0.6, -0.3);
    wipe(CUTS.pan);
    k.noise(CUTS.pan, { dur: CUTS.end - CUTS.pan, color: 'pink', filter: 'highpass', f: [[0, 3000]], gain: 0.04, a: 0.3 });
    k.play('stamp', T(17, 'made') - 0.15, { gain: 0.45 }); k.play('error', T(17, 'pan') - 0.05, { f: 'A3', gain: 0.25 });
    k.play('sparkle', T(18, 'hiding') - 0.15, { n: 5, gain: 0.4 });
    wipe(CUTS.end);
    popAt(T(19, 'be') - 0.1, 600, 0.6, 0); popAt(T(19, 'raw') - 0.15, 680, 0.5, 0);
    popAt(T(19, 'pink') + 0.2, 600, 0.6, -0.4); popAt(T(19, 'pink') + 0.35, 780, 0.6, 0.4);
    k.tone(T(19, 'pink') + 0.6, { f: 'C4', type: 'triangle', dur: 0.9, gain: 0.1, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
