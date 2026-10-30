// ================= Flat-Vector Science, vertical 1080x1920: "Why are you taller in the morning?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.73, w: {"you": 0.25, "lose": 0.46, "one": 0.73, "centimeter": 0.94, "of": 1.63, "height": 1.76, "every": 2.18, "day": 2.52} },  // You lose one centimeter of height every day,
    { id: 'p1', s: 3.03, e: 3.83, w: {"but": 3.03, "why": 3.43} },  // but why?
    { id: 'p2', s: 4.38, e: 6.39, w: {"your": 4.38, "spine": 4.7, "isnt": 5.1, "one": 5.42, "solid": 5.66, "bone": 6.06} },  // Your spine isn't one solid bone.
    { id: 'p3', s: 6.94, e: 8.50, w: {"its": 6.94, "a": 7.17, "stack": 7.25, "of": 7.64, "vertebrae": 7.79} },  // It's a stack of vertebrae,
    { id: 'p4', s: 8.80, e: 11.20, w: {"with": 8.8, "twentythree": 9.06, "squishy": 9.8, "discs": 10.26, "in": 10.6, "between": 10.73} },  // with twenty-three squishy discs in between.
    { id: 'p5', s: 11.75, e: 13.68, w: {"each": 11.75, "disc": 12.02, "is": 12.3, "like": 12.44, "a": 12.71, "jelly": 12.78, "doughnut": 13.13} },  // Each disc is like a jelly doughnut,
    { id: 'p6', s: 13.98, e: 15.60, w: {"with": 13.98, "a": 14.29, "soft": 14.37, "watery": 14.68, "middle": 15.14} },  // with a soft, watery middle.
    { id: 'p7', s: 16.15, e: 18.32, w: {"all": 16.15, "day": 16.39, "gravity": 16.62, "pushes": 17.16, "down": 17.62, "on": 17.93, "you": 18.09} },  // All day, gravity pushes down on you.
    { id: 'p8', s: 18.87, e: 20.26, w: {"every": 18.87, "step": 19.21, "and": 19.49, "every2": 19.7, "sit": 20.05} },  // Every step and every sit
    { id: 'p9', s: 20.56, e: 22.11, w: {"squeezes": 20.56, "a": 21.1, "little": 21.16, "water": 21.57, "out": 21.9} },  // squeezes a little water out,
    { id: 'p10', s: 22.41, e: 24.11, w: {"and": 22.41, "the": 22.6, "discs": 22.8, "flatten": 23.13, "a": 23.58, "tiny": 23.65, "bit": 23.91} },  // and the discs flatten a tiny bit.
    { id: 'p11', s: 24.66, e: 26.07, w: {"add": 24.66, "up": 24.88, "all": 25.03, "twentythree": 25.25} },  // Add up all twenty-three,
    { id: 'p12', s: 26.37, e: 28.87, w: {"and": 26.37, "youve": 26.56, "shrunk": 26.88, "about": 27.27, "a": 27.59, "centimeter": 27.65, "by": 28.29, "bedtime": 28.42} },  // and you've shrunk about a centimeter by bedtime.
    { id: 'p13', s: 29.42, e: 30.99, w: {"but": 29.42, "when": 29.62, "you": 29.88, "lie": 30.07, "down": 30.27, "to": 30.53, "sleep": 30.66} },  // But when you lie down to sleep,
    { id: 'p14', s: 31.29, e: 32.90, w: {"the": 31.29, "weight": 31.47, "comes": 31.85, "off": 32.16, "your": 32.34, "spine": 32.59} },  // the weight comes off your spine.
    { id: 'p15', s: 33.45, e: 35.03, w: {"the": 33.45, "discs": 33.66, "soak": 34.0, "water": 34.28, "back": 34.62, "up": 34.9} },  // The discs soak water back up,
    { id: 'p16', s: 35.33, e: 36.64, w: {"like": 35.33, "little": 35.64, "sponges": 36.1} },  // like little sponges,
    { id: 'p17', s: 36.94, e: 38.80, w: {"and": 36.94, "by": 37.15, "morning": 37.3, "youre": 37.8, "tall": 38.16, "again": 38.44} },  // and by morning, you're tall again.
    { id: 'p18', s: 39.35, e: 41.03, w: {"in": 39.35, "space": 39.52, "with": 39.94, "no": 40.27, "gravity": 40.44} },  // In space, with no gravity,
    { id: 'p19', s: 41.33, e: 43.61, w: {"astronauts": 41.33, "can": 41.98, "grow": 42.18, "three": 42.44, "percent": 42.76, "taller": 43.22} },  // astronauts can grow three percent taller!
    { id: 'p20', s: 44.16, e: 46.60, w: {"so": 44.16, "tonight": 44.31, "measure": 44.83, "yourself": 45.34, "before": 45.93, "bed": 46.38} },  // So tonight, measure yourself before bed,
    { id: 'p21', s: 46.90, e: 48.53, w: {"then": 46.9, "again": 47.2, "when": 47.57, "you": 47.86, "wake": 48.09, "up": 48.38} },  // then again when you wake up.
    { id: 'p22', s: 49.08, e: 51.84, w: {"will": 49.08, "you": 49.34, "be": 49.53, "one": 49.66, "centimeter": 49.85, "taller": 50.49, "tomorrow": 50.88, "morning": 51.39} },  // Will you be one centimeter taller tomorrow morning?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  const cutAt = (i) => (B[i - 1].e + B[i].s) / 2;
  const CUTS = { spine: cutAt(2), donut: cutAt(5), day: cutAt(7), add: cutAt(11), sleep: cutAt(13), refill: cutAt(15), space: cutAt(18), end: cutAt(20) };

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', ice: '#cfeeff', teal: '#1fb6a6', yellow: '#ffd23f', green: '#5ad17a', grey: '#8d93a6', white: '#ffffff', purple: '#7b5cff', pink: '#ff8fab',
    skin: '#f2b48c', skinD: '#d98f68', hair: '#5a3a2e', shirt: '#ff7a3d', pants: '#2f4b8f', bone: '#f6e7c8', boneD: '#e2cc9f', disc: '#3fa9f5', discL: '#a8e2ff', ring: '#f2a65a', ringL: '#f9c98f' };
  const rr = (ctx, x, y, w, h, r) => { r = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 48, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700);
    ctx.restore();
  };
  const big = (ctx, s, x, y, size, col, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col, 700), 20); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 14, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const skyMix = (ctx, a0, a1, b0, b1, u) => sky(ctx, H.rgba(H.mix(a0, b0, u)), H.rgba(H.mix(a1, b1, u)));
  const ground = (ctx, y, col) => { ctx.fillStyle = col; ctx.fillRect(0, y, W, HH - y); };
  const drop = (ctx, x, y, s, col = PAL.disc) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, -30); ctx.bezierCurveTo(14, -10, 22, 2, 22, 12); ctx.arc(0, 12, 22, 0, Math.PI); ctx.bezierCurveTo(-22, 2, -14, -10, 0, -30); ctx.fill(); circle(ctx, -7, 10, 6, 'rgba(255,255,255,0.6)'); ctx.restore(); };
  const sun = (ctx, x, y, r, t) => { ctx.save(); ctx.translate(x, y); ctx.rotate(t * 0.2); ctx.fillStyle = 'rgba(255,210,63,0.45)'; for (let i = 0; i < 12; i++) { ctx.rotate(Math.PI / 6); rr(ctx, r * 1.15, -12, r * 0.45, 24, 12); ctx.fill(); } ctx.restore(); circle(ctx, x, y, r, PAL.yellow); };
  const moon = (ctx, x, y, r, bg) => { circle(ctx, x, y, r, '#fff1c1'); circle(ctx, x + r * 0.45, y - r * 0.25, r * 0.85, bg); };
  const stars = (ctx, seed, n, t, y0 = 160, y1 = 1700) => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const x = r() * W, y = y0 + r() * (y1 - y0), s = 3 + r() * 5, tw = 0.5 + 0.5 * Math.sin(t * 2 + r() * 6); ctx.globalAlpha = 0.35 + 0.65 * tw; circle(ctx, x, y, s, PAL.white); } ctx.globalAlpha = 1; };

  // ---------- characters & props ----------
  const person = (ctx, x, foot, h, o = {}) => {
    const shirt = o.shirt || PAL.shirt, pants = o.pants || PAL.pants, skin = o.skin || PAL.skin;
    const draw = (c) => {
      ctx.fillStyle = c || pants; rr(ctx, x - h * 0.1, foot - h * 0.46, h * 0.085, h * 0.46, h * 0.04); ctx.fill(); rr(ctx, x + h * 0.015, foot - h * 0.46, h * 0.085, h * 0.46, h * 0.04); ctx.fill();
      ctx.fillStyle = c || shirt; rr(ctx, x - h * 0.14, foot - h * 0.8, h * 0.28, h * 0.4, h * 0.08); ctx.fill();
      ctx.fillStyle = c || shirt; rr(ctx, x - h * 0.2, foot - h * 0.78, h * 0.07, h * 0.34, h * 0.035); ctx.fill(); rr(ctx, x + h * 0.13, foot - h * 0.78, h * 0.07, h * 0.34, h * 0.035); ctx.fill();
      circle(ctx, x, foot - h * 0.89, h * 0.1, c || skin);
    };
    longShadow(ctx, draw, o.sh ?? 22);
    // hands, hair, face
    circle(ctx, x - h * 0.165, foot - h * 0.43, h * 0.035, skin); circle(ctx, x + h * 0.165, foot - h * 0.43, h * 0.035, skin);
    ctx.fillStyle = o.hair || PAL.hair; ctx.beginPath(); ctx.arc(x, foot - h * 0.9, h * 0.103, Math.PI * 1.02, Math.PI * 1.98); ctx.closePath(); ctx.fill();
    if (o.sleep) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = h * 0.008; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x - h * 0.035, foot - h * 0.885, h * 0.015, 0, Math.PI); ctx.moveTo(x + h * 0.05, foot - h * 0.885); ctx.arc(x + h * 0.035, foot - h * 0.885, h * 0.015, 0, Math.PI); ctx.stroke(); }
    else { circle(ctx, x - h * 0.035, foot - h * 0.89, h * 0.011, PAL.ink); circle(ctx, x + h * 0.035, foot - h * 0.89, h * 0.011, PAL.ink); }
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = h * 0.008; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, foot - h * 0.86, h * 0.03, 0.2 * Math.PI, 0.8 * Math.PI); ctx.stroke();
  };
  const ruler = (ctx, x, bottom, top, step = 30) => {
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.yellow; rr(ctx, x - 45, top, 90, bottom - top, 14); ctx.fill(); }, 16);
    ctx.fillStyle = 'rgba(29,29,58,0.55)'; let i = 0; for (let y = bottom - step; y > top + 10; y -= step, i++) { const l = i % 5 === 4 ? 50 : 26; ctx.fillRect(x - 45, y - 2, l, 4); }
  };
  const vert = (ctx, cx, y, w, h) => { // one vertebra body with little side wings, top at y
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.boneD; rr(ctx, cx - w * 0.72, y + h * 0.3, w * 1.44, h * 0.38, h * 0.19); ctx.fill(); ctx.fillStyle = c || PAL.bone; rr(ctx, cx - w / 2, y, w, h, Math.min(h * 0.3, 30)); ctx.fill(); }, Math.min(14, h * 0.25));
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; rr(ctx, cx - w * 0.38, y + h * 0.12, w * 0.4, h * 0.18, h * 0.09); ctx.fill();
  };
  const discSide = (ctx, cx, y, w, h, glow = 0) => { // side view of a disc between vertebrae
    if (glow > 0) { ctx.save(); ctx.globalAlpha = 0.45 * glow; ctx.fillStyle = PAL.yellow; rr(ctx, cx - w / 2 - 18, y - 12, w + 36, h + 24, (h + 24) / 2); ctx.fill(); ctx.restore(); }
    ctx.fillStyle = PAL.disc; rr(ctx, cx - w / 2, y, w, h, h / 2); ctx.fill();
    ctx.fillStyle = PAL.discL; rr(ctx, cx - w * 0.28, y + h * 0.25, w * 0.56, h * 0.5, h * 0.25); ctx.fill();
  };
  // stack from the bottom up: n vertebrae, n-1 discs; dh(i) = disc height of disc i (0 = lowest). Returns top y.
  const spineStack = (ctx, cx, bottom, n, vh, w, dh, glow = 0, appear = null) => {
    let y = bottom; const parts = [];
    for (let i = 0; i < n; i++) { y -= vh; parts.push(['v', y, i]); if (i < n - 1) { const d = dh(i); y -= d; parts.push(['d', y, i, d]); } }
    for (const p of parts) {
      const a = appear ? appear(p[2], p[0]) : 1; if (a <= 0.01) continue;
      ctx.save(); ctx.globalAlpha = Math.min(1, a); ctx.translate(0, (1 - Math.min(1, a)) * -160);
      if (p[0] === 'v') vert(ctx, cx, p[1], w, vh); else discSide(ctx, cx, p[1], w * 0.92, p[3], glow);
      ctx.restore();
    }
    return y;
  };
  const discTop = (ctx, cx, cy, r, sq, fill, t) => { // cross-section from above; sq = vertical squash, fill 0..1 nucleus fullness
    ctx.save(); ctx.translate(cx, cy); ctx.scale(1, sq);
    longShadow(ctx, (c) => { circle(ctx, 0, 0, r, c || PAL.ring); }, 26);
    for (let i = 1; i < 5; i++) { ctx.strokeStyle = i % 2 ? PAL.ringL : '#e8944a'; ctx.lineWidth = r * 0.05; ctx.beginPath(); ctx.arc(0, 0, r * (1 - i * 0.1), 0, Math.PI * 2); ctx.stroke(); }
    const nr = r * (0.3 + 0.22 * fill);
    ctx.fillStyle = PAL.disc; ctx.beginPath();
    for (let i = 0; i <= 48; i++) { const a = i / 48 * Math.PI * 2, rr2 = nr * (1 + 0.05 * Math.sin(a * 5 + t * 3) * (0.3 + fill)); ctx.lineTo(Math.cos(a) * rr2, Math.sin(a) * rr2); }
    ctx.closePath(); ctx.fill();
    circle(ctx, -nr * 0.3, -nr * 0.35, nr * 0.28, 'rgba(255,255,255,0.45)');
    ctx.restore();
  };
  const astronaut = (ctx, x, y, s, ang) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.scale(s, s);
    longShadow(ctx, (c) => {
      ctx.fillStyle = c || '#c9d3e6'; rr(ctx, -150, -230, 300, 300, 60); ctx.fill(); // backpack
      ctx.fillStyle = c || PAL.white; rr(ctx, -120, -250, 240, 330, 90); ctx.fill(); // body
      rr(ctx, -200, -220, 90, 230, 45); ctx.fill(); rr(ctx, 110, -240, 90, 230, 45); ctx.fill(); // arms
      rr(ctx, -110, 40, 95, 260, 45); ctx.fill(); rr(ctx, 15, 40, 95, 240, 45); ctx.fill(); // legs
      circle(ctx, 0, -340, 140, c || PAL.white); }, 22);
    ctx.fillStyle = '#25336b'; rr(ctx, -95, -410, 190, 140, 70); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; rr(ctx, -70, -395, 60, 40, 20); ctx.fill();
    ctx.fillStyle = PAL.orange; rr(ctx, -60, -170, 120, 60, 20); ctx.fill();
    ctx.fillStyle = PAL.blue; circle(ctx, -30, -140, 12, PAL.blue); circle(ctx, 20, -140, 12, PAL.red);
    ctx.restore();
  };

  const header = (ctx, t) => {
    const k = EO(t, B[1].e + 0.2, B[1].e + 0.7); if (k <= 0) return;
    ctx.save(); ctx.globalAlpha = k; pill(ctx, 'WHY YOU SHRINK EVERY DAY', 540, 215, { size: 40, bg: PAL.ink, col: PAL.cream, sh: 10 }); ctx.restore();
  };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    const dusk = EI(t, T(0, 'lose'), T(0, 'day') + 0.2);
    skyMix(ctx, '#ffe7a3', '#ffb35c', '#232a66', '#5b4aa8', dusk);
    sun(ctx, 200, H.lerp(420, 1500, dusk), 90, t);
    if (dusk > 0.2) { ctx.save(); ctx.globalAlpha = H.clamp((dusk - 0.2) * 2); moon(ctx, 860, H.lerp(1300, 470, dusk), 75, H.rgba(H.mix('#ffe7a3', '#232a66', dusk))); ctx.restore(); }
    ground(ctx, 1520, H.rgba(H.mix('#7cc47f', '#2e5d58', dusk)));
    const z = 1 + 0.05 * EI(t, 0, CUTS.spine);
    ctx.save(); ctx.translate(540, 1100); ctx.scale(z, z); ctx.translate(-540, -1100);
    const h0 = 880, h = h0 - 70 * EI(t, T(0, 'lose'), T(0, 'day'));
    ruler(ctx, 790, 1520, 520);
    person(ctx, 480, 1520, h);
    // morning mark stays, night mark follows the head
    const topM = 1520 - h0 * 0.99, topN = 1520 - h * 0.99;
    ctx.fillStyle = PAL.orange; ctx.fillRect(700, topM - 5, 200, 10);
    if (t > T(0, 'lose')) { ctx.fillStyle = PAL.white; ctx.fillRect(700, topN - 5, 200, 10); }
    ctx.restore();
    const nk = pop(t, T(0, 'one') - 0.15) * bump(t, T(0, 'centimeter'));
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 380); ctx.scale(nk, nk); longShadow(ctx, (c) => text(ctx, '−1 cm', 0, 0, 180, c || PAL.yellow, 700), 24, 'rgba(0,0,0,0.3)'); ctx.restore(); }
    pill(ctx, 'EVERY DAY', 540, 545, { k: pop(t, T(0, 'every') - 0.15), bg: PAL.red, col: PAL.white, size: 52 });
    big(ctx, 'BUT WHY?', 540, 1650, 120, PAL.yellow, pop(t, T(1, 'why') - 0.15) * bump(t, T(1, 'why')));
  };
  S.spine = (ctx, t) => {
    sky(ctx, '#d9f6f1', '#8fdcd0');
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; for (let i = 0; i < 6; i++) circle(ctx, 120 + i * 190, 1780 + Math.sin(i) * 40, 120, 'rgba(255,255,255,0.35)');
    const z = 1 + 0.06 * EI(t, CUTS.spine, CUTS.donut);
    ctx.save(); ctx.translate(540, 950); ctx.scale(z, z); ctx.translate(-540, -950);
    const tStack = T(3, 'stack') - 0.15, split = EO(t, tStack, tStack + 0.5);
    const n = 8, vh = 92, w = 250, bottom = 1450;
    // the "solid bone" version, which breaks apart into the stack
    if (split < 1) {
      ctx.save(); ctx.globalAlpha = 1 - split; const k = pop(t, T(2, 'spine') - 0.2);
      if (k > 0.01) { ctx.translate(540, 950); ctx.scale(k, k); ctx.translate(-540, -950); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.bone; rr(ctx, 540 - w / 2, 480, w, 970, 70); ctx.fill(); }, 20); }
      ctx.restore();
    }
    if (split > 0) {
      const appear = (i, kind) => kind === 'd' ? EO(t, T(4, 'squishy') - 0.2 + i * 0.05, T(4, 'squishy') + 0.2 + i * 0.05) : (split >= 1 ? 1 : EO(t, tStack + (n - 1 - i) * 0.06, tStack + 0.3 + (n - 1 - i) * 0.06));
      const glow = t > T(4, 'discs') - 0.2 ? 0.6 + 0.4 * Math.sin((t - T(4, 'discs')) * 8) : 0;
      spineStack(ctx, 540, bottom, n, vh, w, () => 36, glow * (1 - ph(t, T(4, 'between') + 0.5, T(4, 'between') + 1)), appear);
    }
    ctx.restore();
    // red X on "isn't one solid bone"
    const xk = pop(t, T(2, 'solid') - 0.15, tStack - 0.2);
    if (xk > 0.01) { ctx.save(); ctx.translate(540, 950); ctx.scale(xk, xk); ctx.strokeStyle = PAL.red; ctx.lineWidth = 46; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-200, -200); ctx.lineTo(200, 200); ctx.moveTo(200, -200); ctx.lineTo(-200, 200); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'YOUR SPINE', 540, 360, { k: pop(t, T(2, 'spine') - 0.15, T(2, 'solid') - 0.2), bg: PAL.ink, col: PAL.cream, size: 56 });
    pill(ctx, 'NOT ONE BONE', 540, 360, { k: pop(t, T(2, 'solid') - 0.15, tStack - 0.1), bg: PAL.red, col: PAL.white, size: 56 });
    pill(ctx, 'VERTEBRAE', 540, 360, { k: pop(t, T(3, 'vertebrae') - 0.15, T(4, 'twentythree') - 0.3), bg: PAL.bone, col: PAL.ink, size: 56 });
    const c = Math.round(23 * EO(t, T(4, 'twentythree') - 0.1, T(4, 'squishy')));
    const ck = pop(t, T(4, 'twentythree') - 0.15) * bump(t, T(4, 'discs'));
    if (ck > 0.01) { ctx.save(); ctx.translate(540, 370); ctx.scale(ck, ck); longShadow(ctx, (cc) => text(ctx, c + ' DISCS', 0, 0, 130, cc || PAL.disc, 700), 22); ctx.restore(); }
    pill(ctx, 'squishy!', 860, 1560, { k: pop(t, T(4, 'squishy') - 0.15), bg: PAL.disc, col: PAL.white, size: 48 });
  };
  S.donut = (ctx, t) => {
    sky(ctx, '#ffe3ec', '#ffb3c7');
    const fill = 1, sq = 1;
    const k = EO(t, CUTS.donut, CUTS.donut + 0.6);
    discTop(ctx, 540, 960, 360 * (0.85 + 0.15 * k), sq, fill, t);
    // sprinkles turn on with "doughnut"
    const sk = EO(t, T(5, 'doughnut') - 0.2, T(5, 'doughnut') + 0.3);
    if (sk > 0) { const r = H.rng(9), cols = [PAL.purple, PAL.green, PAL.yellow, PAL.white, PAL.red]; for (let i = 0; i < 40; i++) { const a = r() * 6.283, d = 230 + r() * 110; if (r() > sk) continue; ctx.save(); ctx.translate(540 + Math.cos(a) * d, 960 + Math.sin(a) * d); ctx.rotate(r() * 6.28); ctx.fillStyle = cols[i % 5]; rr(ctx, -16, -6, 32, 12, 6); ctx.fill(); ctx.restore(); } }
    // jiggle droplets in the middle on "soft"/"watery"
    const wk = EO(t, T(6, 'watery') - 0.2, T(6, 'watery') + 0.3);
    if (wk > 0) for (let i = 0; i < 5; i++) { const a = i / 5 * 6.28 + t; drop(ctx, 540 + Math.cos(a) * 80, 960 + Math.sin(a) * 80 + Math.sin(t * 5 + i) * 8, 0.9 * wk, PAL.discL); }
    pill(ctx, 'ONE DISC', 540, 360, { k: pop(t, T(5, 'disc') - 0.15, T(5, 'jelly') - 0.3), bg: PAL.ink, col: PAL.cream, size: 56 });
    big(ctx, 'JELLY DOUGHNUT', 540, 370, 104, PAL.red, pop(t, T(5, 'jelly') - 0.15));
    pill(ctx, 'TOUGH RING', 300, 1500, { k: pop(t, T(5, 'doughnut') - 0.1), bg: PAL.ring, col: PAL.ink, size: 48 });
    arrow(ctx, 300, 1440, 360, 1270, PAL.ink, 12, EO(t, T(5, 'doughnut'), T(5, 'doughnut') + 0.3));
    pill(ctx, 'WATERY MIDDLE', 680, 1640, { k: pop(t, T(6, 'watery') - 0.15) * bump(t, T(6, 'middle')), bg: PAL.disc, col: PAL.white, size: 52 });
    arrow(ctx, 680, 1570, 580, 1080, PAL.ink, 12, EO(t, T(6, 'middle'), T(6, 'middle') + 0.3));
  };
  // daytime squash of the zoomed discs
  const daySquash = (t) => EO(t, T(10, 'flatten') - 0.15, T(10, 'bit'));
  S.day = (ctx, t) => {
    sky(ctx, '#ffd98a', '#ff9f5a');
    sun(ctx, 900, 330, 80, t);
    ground(ctx, 1560, '#e0784a');
    const sq = daySquash(t);
    const press = EO(t, T(7, 'pushes') - 0.2, T(7, 'down'));
    const bob = 6 * Math.sin(t * 9) * press * (1 - sq);
    const top = spineStack(ctx, 540, 1300, 3, 170, 330, () => 74 - 34 * sq, 0);
    // gravity arrows pressing on top
    for (let i = 0; i < 3; i++) arrow(ctx, 400 + i * 140, top - 230 + bob, 400 + i * 140, top - 40 + bob, PAL.red, 22, press);
    pill(ctx, 'GRAVITY', 540, 360, { k: pop(t, T(7, 'gravity') - 0.15), bg: PAL.red, col: PAL.white, size: 60 });
    // water squeezed out of the discs
    const wq = ph(t, T(9, 'squeezes') - 0.1, T(9, 'out') + 1.2);
    if (wq > 0) { const r = H.rng(5); for (let i = 0; i < 8; i++) { const side = i % 2 ? 1 : -1, d = H.clamp(wq * 1.4 - r() * 0.4); if (d <= 0) continue; const disc = i % 4 < 2 ? 0 : 1; const dy = 1300 - 170 - disc * (170 + 74 - 34 * sq) - 37; drop(ctx, 540 + side * (170 + d * 230), dy + d * d * 120 + r() * 30, 0.9, PAL.disc); } }
    pill(ctx, 'WATER OUT', 540, 1640, { k: pop(t, T(9, 'water') - 0.15, T(10, 'flatten') - 0.3), bg: PAL.disc, col: PAL.white, size: 56 });
    pill(ctx, 'DISCS FLATTEN', 540, 1640, { k: pop(t, T(10, 'flatten') - 0.15) * bump(t, T(10, 'tiny')), bg: PAL.ink, col: PAL.cream, size: 56 });
    // step + sit icons
    const stk = pop(t, T(8, 'step') - 0.15, T(9, 'water') - 0.4), sik = pop(t, T(8, 'sit') - 0.15, T(9, 'water') - 0.4);
    if (stk > 0.01) { ctx.save(); ctx.translate(180, 1050); ctx.scale(stk, stk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -110, -110, 220, 220, 50); ctx.fill(); }, 14);
      ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.ellipse(-10, 10, 32, 55, -0.2, 0, Math.PI * 2); ctx.fill(); for (let i = 0; i < 4; i++) circle(ctx, -30 + i * 18, -60 - (i === 0 ? 8 : 0), 11, PAL.ink); text(ctx, 'STEP', 0, 150, 44, PAL.ink); ctx.restore(); }
    if (sik > 0.01) { ctx.save(); ctx.translate(900, 1050); ctx.scale(sik, sik); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -110, -110, 220, 220, 50); ctx.fill(); }, 14);
      ctx.fillStyle = PAL.ink; rr(ctx, -50, -70, 22, 140, 10); ctx.fill(); rr(ctx, -50, 0, 100, 22, 10); ctx.fill(); rr(ctx, 30, 0, 20, 70, 10); ctx.fill(); text(ctx, 'SIT', 0, 150, 44, PAL.ink); ctx.restore(); }
  };
  S.add = (ctx, t) => {
    const dusk = EI(t, T(12, 'shrunk'), T(12, 'bedtime'));
    skyMix(ctx, '#ffb47a', '#c46bb0', '#3a2f7a', '#1b2a5c', dusk);
    if (dusk > 0.1) { ctx.save(); ctx.globalAlpha = dusk; stars(ctx, 4, 40, t); moon(ctx, 860, 1250, 80, '#2d2b6e'); ctx.restore(); }
    const n = 24, vh = 38, w = 170, bottom = 1600;
    const t0 = T(11, 'add') - 0.1, t1 = T(11, 'twentythree') + 0.6;
    const dh = (i) => 18 - 8 * EO(t, t0 + i * (t1 - t0) / 23, t0 + i * (t1 - t0) / 23 + 0.3);
    const top0 = bottom - n * vh - 23 * 18;
    const top = spineStack(ctx, 330, bottom, n, vh, w, dh, 0);
    // height markers
    ctx.fillStyle = PAL.white; ctx.fillRect(180, top0 - 4, 300, 8);
    ctx.fillStyle = PAL.red; ctx.fillRect(180, top - 4, 300, 8);
    const gap = top - top0;
    if (gap > 4) arrow(ctx, 520, top0, 520, top, PAL.red, 10, 1);
    const cnt = Math.round(23 * EO(t, t0, t1 - 0.3));
    const ck = pop(t, T(11, 'add') - 0.15, T(12, 'centimeter') - 0.3);
    if (ck > 0.01) { ctx.save(); ctx.translate(780, 640); ctx.scale(ck, ck); longShadow(ctx, (c) => text(ctx, String(cnt), 0, 0, 200, c || PAL.white, 700), 22); text(ctx, 'discs', 0, 140, 56, PAL.white, 600); ctx.restore(); }
    big(ctx, '−1 cm', 780, 640, 150, PAL.yellow, pop(t, T(12, 'centimeter') - 0.15) * bump(t, T(12, 'centimeter')));
    pill(ctx, 'BY BEDTIME', 780, 1470, { k: pop(t, T(12, 'bedtime') - 0.15), bg: PAL.purple, col: PAL.white, size: 52 });
    pill(ctx, 'SHRUNK!', 780, 860, { k: pop(t, T(12, 'shrunk') - 0.15, T(12, 'centimeter') - 0.2), bg: PAL.red, col: PAL.white, size: 56 });
  };
  S.sleep = (ctx, t) => {
    sky(ctx, '#141b44', '#2c2f78');
    stars(ctx, 11, 50, t, 160, 900); moon(ctx, 820, 420, 90, '#161d48');
    ctx.fillStyle = '#3b3f8f'; ctx.fillRect(0, 1380, W, HH - 1380);
    // bed
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#7a4b33'; rr(ctx, 90, 1050, 60, 380, 20); ctx.fill(); rr(ctx, 930, 1150, 60, 280, 20); ctx.fill(); ctx.fillStyle = c || '#a8694a'; rr(ctx, 90, 1200, 900, 110, 30); ctx.fill(); }, 18);
    ctx.fillStyle = PAL.white; rr(ctx, 160, 1110, 230, 100, 45); ctx.fill();
    const lk = EO(t, T(13, 'lie') - 0.3, T(13, 'down') + 0.2);
    ctx.save(); ctx.translate(H.lerp(1050, 920, lk), 1180 - (1 - lk) * 300); ctx.rotate(-Math.PI / 2 * lk); person(ctx, 0, 0, 640, { sleep: t > T(13, 'sleep') - 0.2, sh: 10 }); ctx.restore();
    // blanket
    if (lk > 0.5) { ctx.save(); ctx.globalAlpha = H.clamp((lk - 0.5) * 2); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.purple; rr(ctx, 380, 1090, 580, 150, 50); ctx.fill(); }, 12); ctx.fillStyle = 'rgba(255,255,255,0.18)'; for (let i = 0; i < 4; i++) { rr(ctx, 430 + i * 130, 1110, 60, 110, 30); ctx.fill(); } ctx.restore(); }
    // Zzz
    if (t > T(13, 'sleep') - 0.1) for (let i = 0; i < 3; i++) { const u = ((t - T(13, 'sleep')) * 0.6 + i / 3) % 1; ctx.globalAlpha = 1 - u; text(ctx, 'Z', 300 + u * 200 + i * 20, 980 - u * 360, 60 + i * 18, PAL.white, 700); ctx.globalAlpha = 1; }
    // gravity arrows crossed out on "weight comes off"
    const gk = EO(t, T(14, 'weight') - 0.3, T(14, 'weight')), ok = pop(t, T(14, 'off') - 0.15);
    if (gk > 0) { ctx.save(); ctx.globalAlpha = 1 - 0.6 * ok; for (let i = 0; i < 3; i++) arrow(ctx, 470 + i * 180, 700, 470 + i * 180, 880, PAL.red, 20, gk); ctx.restore(); }
    if (ok > 0.01) { ctx.save(); ctx.translate(650, 790); ctx.scale(ok, ok); ctx.strokeStyle = PAL.white; ctx.lineWidth = 30; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-260, -130); ctx.lineTo(260, 130); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'SLEEP', 540, 360, { k: pop(t, T(13, 'sleep') - 0.15), bg: PAL.purple, col: PAL.white, size: 60 });
    pill(ctx, 'WEIGHT OFF YOUR SPINE', 540, 1600, { k: pop(t, T(14, 'off') - 0.15) * bump(t, T(14, 'spine')), bg: PAL.green, col: PAL.ink, size: 52 });
  };
  S.refill = (ctx, t) => {
    const dawn = EI(t, T(17, 'morning') - 0.3, T(17, 'morning') + 0.6);
    skyMix(ctx, '#18406b', '#2a7f9e', '#ffe7a3', '#ffb35c', dawn);
    if (dawn > 0) sun(ctx, 540, H.lerp(1900, 1300, dawn), 110, t);
    if (dawn < 1) { ctx.save(); ctx.globalAlpha = 1 - dawn; stars(ctx, 21, 30, t, 160, 700); ctx.restore(); }
    const fl = EO(t, T(15, 'soak') - 0.2, T(16, 'sponges') + 0.4);
    discTop(ctx, 540, 900, 330, 0.62 + 0.38 * fl, 0.25 + 0.75 * fl, t);
    // water drops flying in
    const wi = ph(t, T(15, 'soak') - 0.2, T(16, 'sponges') + 0.3);
    if (wi > 0 && wi < 1) { const r = H.rng(77); for (let i = 0; i < 12; i++) { const a = r() * 6.283, st = r() * 0.6, u = H.clamp((wi - st) / 0.4); if (u <= 0 || u >= 1) continue; const d = H.lerp(560, 60, H.ease.inOut(u)); drop(ctx, 540 + Math.cos(a) * d, 900 + Math.sin(a) * d * 0.9, 0.9, PAL.discL); } }
    pill(ctx, 'SOAK WATER BACK UP', 540, 360, { k: pop(t, T(15, 'soak') - 0.15, T(17, 'morning') - 0.3), bg: PAL.disc, col: PAL.white, size: 52 });
    // sponge
    const spk = pop(t, T(16, 'sponges') - 0.15, T(17, 'tall') - 0.3);
    if (spk > 0.01) { ctx.save(); ctx.translate(540, 1500); ctx.scale(spk, spk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.yellow; rr(ctx, -150, -80, 300, 160, 30); ctx.fill(); }, 16); ctx.fillStyle = '#e0b52a'; const r = H.rng(2); for (let i = 0; i < 9; i++) circle(ctx, -110 + r() * 220, -50 + r() * 100, 10 + r() * 10, '#e0b52a'); text(ctx, 'SPONGE', 0, 140, 52, PAL.white, 700); ctx.restore(); }
    big(ctx, '+1 cm', 540, 380, 150, PAL.green, pop(t, T(17, 'morning') - 0.1) * bump(t, T(17, 'again')));
    big(ctx, 'TALL AGAIN!', 540, 1560, 112, PAL.ink, pop(t, T(17, 'tall') - 0.15));
  };
  S.space = (ctx, t) => {
    sky(ctx, '#05071c', '#1a1450');
    stars(ctx, 33, 90, t, 0, 1920);
    circle(ctx, 140, 1900, 420, '#2f7fd6'); ctx.fillStyle = '#4fbf6f'; ctx.beginPath(); ctx.ellipse(60, 1620, 120, 70, 0.4, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(260, 1760, 90, 50, -0.3, 0, Math.PI * 2); ctx.fill();
    const fk = EO(t, CUTS.space - 0.2, CUTS.space + 0.8);
    const grow = EO(t, T(19, 'grow') - 0.15, T(19, 'taller'));
    const ys = 1 + 0.12 * grow;
    ctx.save(); ctx.translate(500, 1050 + Math.sin(t * 1.4) * 30 + (1 - fk) * 300); ctx.rotate(-0.12 + Math.sin(t * 0.8) * 0.08); ctx.scale(1, ys); astronaut(ctx, 0, 0, 0.95, 0); ctx.restore();
    // up/down stretch arrows
    if (grow > 0) { arrow(ctx, 860, 1050, 860, 700, PAL.green, 18, grow); arrow(ctx, 860, 1050, 860, 1400, PAL.green, 18, grow); }
    pill(ctx, 'NO GRAVITY', 540, 360, { k: pop(t, T(18, 'gravity') - 0.15, T(19, 'three') - 0.3), bg: PAL.purple, col: PAL.white, size: 60 });
    const nk = pop(t, T(19, 'three') - 0.15) * bump(t, T(19, 'percent'));
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 390); ctx.scale(nk, nk); longShadow(ctx, (c) => text(ctx, '+3%', 0, 0, 190, c || PAL.green, 700), 24, 'rgba(0,0,0,0.35)'); ctx.restore(); }
    pill(ctx, 'TALLER IN SPACE', 640, 1620, { k: pop(t, T(19, 'taller') - 0.15), bg: PAL.green, col: PAL.ink, size: 52 });
  };
  S.end = (ctx, t) => {
    sky(ctx, '#fff1cf', '#ffd98a');
    ctx.fillStyle = '#c98a5a'; ctx.fillRect(0, 1560, W, HH - 1560);
    // door frame with a height chart
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#9b6a45'; rr(ctx, 660, 380, 70, 1180, 12); ctx.fill(); }, 18);
    ruler(ctx, 800, 1560, 420, 28);
    person(ctx, 420, 1560, 860, { shirt: PAL.purple, pants: PAL.navy });
    const hTop = 1560 - 860 * 0.99;
    const mk1 = pop(t, T(20, 'bed') - 0.15), mk2 = pop(t, T(21, 'wake') - 0.15);
    if (mk1 > 0.01) { ctx.fillStyle = PAL.navy; ctx.fillRect(560, hTop + 18, 300 * mk1, 10); ctx.save(); ctx.translate(950, hTop + 23); ctx.scale(mk1, mk1); moon(ctx, 0, 0, 40, '#ffe7b0'); ctx.restore(); }
    if (mk2 > 0.01) { ctx.fillStyle = PAL.orange; ctx.fillRect(560, hTop - 18, 300 * mk2, 10); ctx.save(); ctx.translate(950, hTop - 70); ctx.scale(mk2, mk2); sun(ctx, 0, 0, 36, t); ctx.restore(); }
    pill(ctx, 'MEASURE TONIGHT', 540, 360, { k: pop(t, T(20, 'measure') - 0.15, T(21, 'wake') - 0.3), bg: PAL.navy, col: PAL.cream, size: 56 });
    pill(ctx, 'AND IN THE MORNING', 540, 360, { k: pop(t, T(21, 'wake') - 0.15), bg: PAL.orange, col: PAL.white, size: 56 });
    big(ctx, 'TALLER TOMORROW?', 540, 1560, 82, PAL.red, pop(t, T(22, 'taller') - 0.15) * bump(t, T(22, 'morning')));
    pill(ctx, 'tell me in the comments', 540, 1680, { k: pop(t, T(22, 'morning') - 0.1), size: 42, weight: 600 });
  };

  const ORDER = [['hook', 0], ['spine', CUTS.spine], ['donut', CUTS.donut], ['day', CUTS.day], ['add', CUTS.add], ['sleep', CUTS.sleep], ['refill', CUTS.refill], ['space', CUTS.space], ['end', CUTS.end]];
  const WIPE = 0.5;
  const SLIDE = { donut: true, add: true, end: true };
  const CENTER = { spine: [540, 950], day: [540, 1100], sleep: [820, 420], refill: [540, 900], space: [500, 1050] };
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] - WIPE / 2) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    if (next && t >= next[1] - WIPE / 2) {
      const u = H.ease.inOut(ph(t, next[1] - WIPE / 2, next[1] + WIPE / 2));
      if (SLIDE[next[0]]) {
        ctx.save(); ctx.translate(-W * u, 0); S[cur[0]](ctx, t); ctx.restore();
        ctx.save(); ctx.translate(W * (1 - u), 0); S[next[0]](ctx, t); ctx.restore();
      } else {
        const [cx, cy] = CENTER[next[0]] || [540, 960];
        if (u < 1) S[cur[0]](ctx, t);
        ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, u * 1700, 0, Math.PI * 2); ctx.clip(); S[next[0]](ctx, t); ctx.restore();
        if (u > 0 && u < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(cx, cy, u * 1700, 0, Math.PI * 2); ctx.stroke(); }
      }
    } else S[cur[0]](ctx, t);
    header(ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    const slide = (t) => k.play('swish', t - 0.2, { gain: 0.6 });
    const bigPop = (t) => { k.play('impact', t, { gain: 0.7 }); popAt(t - 0.05, 420, 1.0, 0, false); popAt(t, 900, 0.8, 0, false); };
    k.bed('room', 0, D, { gain: 0.18 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.28, chords: [['F3', 'A3', 'C4', 'E4'], ['D3', 'F3', 'A3', 'C4'], ['Bb3', 'D4', 'F4', 'A4'], ['C4', 'E4', 'G4', 'Bb4']] });
    // hook
    k.tone(T(0, 'lose'), { f: [[0, 520], [2.0, 260]], type: 'triangle', dur: 2.0, gain: 0.1 });
    bigPop(T(0, 'one') - 0.1); popAt(T(0, 'every') - 0.15, 700, 0.7, 0, false);
    k.play('impact', T(1, 'why'), { gain: 0.5 }); popAt(T(1, 'why') - 0.15, 520, 0.9, 0, false);
    wipe(CUTS.spine);
    popAt(T(2, 'spine') - 0.15, 600, 0.7, 0, false); k.play('error', T(2, 'solid') - 0.1, { f: 'A3', gain: 0.35 });
    for (let i = 0; i < 8; i++) k.play('tock', T(3, 'stack') - 0.15 + i * 0.06, { f: 380 + i * 40, gain: 0.35, minor: true });
    popAt(T(3, 'vertebrae') - 0.15, 650, 0.6, 0.2);
    for (let f = Math.ceil((T(4, 'twentythree') - 0.1) * 14); f < T(4, 'squishy') * 14; f++) k.play('count', f / 14, { gain: 0.6, minor: true });
    for (let i = 0; i < 7; i++) popAt(T(4, 'squishy') - 0.2 + i * 0.05, 500 + i * 60, 0.35, (i - 3) * 0.1);
    k.play('sparkle', T(4, 'discs') - 0.15, { n: 5, gain: 0.5 });
    slide(CUTS.donut);
    popAt(T(5, 'disc') - 0.15, 650, 0.7, 0, false); bigPop(T(5, 'jelly') - 0.1);
    k.play('sparkle', T(5, 'doughnut') - 0.15, { n: 6, gain: 0.5 });
    k.tone(T(6, 'soft'), { f: [[0, 300], [0.3, 420], [0.6, 300]], type: 'sine', dur: 0.6, gain: 0.12, minor: true });
    popAt(T(6, 'watery') - 0.15, 800, 0.7, 0.3, false);
    wipe(CUTS.day);
    popAt(T(7, 'gravity') - 0.15, 520, 0.8, 0, false);
    k.play('thud', T(7, 'pushes'), { f: 110, gain: 0.6 }); k.play('thud', T(7, 'down'), { f: 90, gain: 0.6 });
    popAt(T(8, 'step') - 0.15, 600, 0.7, -0.5, false); k.play('thud', T(8, 'step'), { f: 140, gain: 0.35 });
    popAt(T(8, 'sit') - 0.15, 700, 0.7, 0.5, false); k.play('thud', T(8, 'sit'), { f: 120, gain: 0.35 });
    k.noise(T(9, 'squeezes') - 0.1, { dur: 1.0, color: 'pink', filter: 'bandpass', f: [[0, 1500], [1.0, 700]], gain: 0.15, a: 0.05 });
    for (let i = 0; i < 4; i++) k.play('pop', T(9, 'water') - 0.1 + i * 0.12, { f: 900 + i * 120, gain: 0.35, minor: true });
    k.tone(T(10, 'flatten') - 0.1, { f: [[0, 400], [0.7, 200]], type: 'triangle', dur: 0.7, gain: 0.14 });
    slide(CUTS.add);
    for (let i = 0; i < 23; i++) k.play('count', T(11, 'add') - 0.1 + i * (T(11, 'twentythree') + 0.7 - T(11, 'add')) / 23, { gain: 0.5, minor: true });
    popAt(T(12, 'shrunk') - 0.15, 520, 0.8, 0, false); bigPop(T(12, 'centimeter') - 0.1);
    k.play('ding', T(12, 'bedtime'), { f: 'E5', gain: 0.3 });
    wipe(CUTS.sleep);
    k.tone(T(13, 'lie'), { f: [[0, 330], [0.8, 220]], type: 'sine', dur: 0.8, gain: 0.1 }); k.play('thud', T(13, 'down') + 0.1, { f: 100, gain: 0.35 });
    popAt(T(13, 'sleep') - 0.15, 600, 0.6, 0, false);
    k.play('swish', T(14, 'off') - 0.2, { gain: 0.5 }); popAt(T(14, 'off') - 0.15, 750, 0.8, 0, false);
    wipe(CUTS.refill);
    k.noise(T(15, 'soak') - 0.2, { dur: 2.2, color: 'pink', filter: 'bandpass', f: [[0, 700], [2.2, 1800]], gain: 0.14, a: 0.3 });
    for (let i = 0; i < 6; i++) k.play('pop', T(15, 'water') + i * 0.25, { f: 700 + i * 90, gain: 0.3, minor: true });
    popAt(T(16, 'sponges') - 0.15, 620, 0.8, 0, false);
    k.play('riser', T(17, 'morning') - 0.6, { dur: 0.7, gain: 0.35 }); bigPop(T(17, 'morning') - 0.05);
    ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => k.play('ding', T(17, 'tall') + i * 0.05, { f: n, gain: 0.3 - i * 0.05, pan: (i - 1.5) * 0.25 }));
    wipe(CUTS.space);
    k.tone(CUTS.space, { f: [[0, 220], [3, 260]], type: 'sine', dur: 3.5, gain: 0.08 });
    popAt(T(18, 'gravity') - 0.15, 600, 0.7, 0, false);
    k.play('riser', T(19, 'grow') - 0.2, { dur: 0.8, gain: 0.35 }); bigPop(T(19, 'three') - 0.1);
    popAt(T(19, 'taller') - 0.15, 700, 0.7, 0.3, false);
    slide(CUTS.end);
    popAt(T(20, 'measure') - 0.15, 600, 0.7, 0, false); k.play('swish', T(20, 'bed') - 0.15, { gain: 0.4 });
    popAt(T(21, 'wake') - 0.15, 700, 0.7, 0.2, false); k.play('swish', T(21, 'wake') - 0.15, { gain: 0.4 });
    bigPop(T(22, 'taller') - 0.1);
    k.play('success', B[22].e + 0.1, { f: 'C6', gain: 0.4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
