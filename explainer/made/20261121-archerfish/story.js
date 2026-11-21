// ================= Flat-Vector Science, vertical 1080x1920: "How does an archerfish shoot bugs out of the air?" =================
// Unattended run: no storyboard step. Every frame is a pure function of t.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    {"s": 0.25, "e": 2.87, "w": {"could": 0.25, "you": 0.62, "spit": 0.85, "a": 1.15, "bug": 1.22, "off": 1.45, "a2": 1.67, "leaf": 1.75, "3": 2.05, "meters": 2.12, "away": 2.57}}, // 0
    {"s": 3.41, "e": 4.48, "w": {"this": 3.41, "fish": 3.8, "can": 4.19}}, // 1
    {"s": 4.77, "e": 6.22, "w": {"its": 4.77, "called": 4.97, "the": 5.36, "archerfish": 5.56}}, // 2
    {"s": 6.52, "e": 8.34, "w": {"it": 6.52, "hides": 6.66, "just": 7.01, "under": 7.29, "the": 7.64, "surface": 7.85}}, // 3
    {"s": 8.75, "e": 10.94, "w": {"and": 8.75, "spots": 8.96, "a": 9.31, "bug": 9.39, "sitting": 9.6, "on": 10.09, "a2": 10.23, "leaf": 10.3, "above": 10.59}}, // 4
    {"s": 11.41, "e": 12.99, "w": {"it": 11.41, "doesnt": 11.58, "jump": 12.07, "it2": 12.41, "spits": 12.57}}, // 5
    {"s": 13.36, "e": 14.67, "w": {"so": 13.36, "how": 13.52, "does": 13.75, "that": 14.05, "work": 14.36}}, // 6
    {"s": 15.14, "e": 18.79, "w": {"it": 15.14, "presses": 15.28, "its": 15.78, "tongue": 15.99, "against": 16.42, "a": 16.93, "groove": 17.0, "in": 17.43, "the": 17.57, "roof": 17.78, "of": 18.07, "its2": 18.21, "mouth": 18.43}}, // 7
    {"s": 19.16, "e": 21.82, "w": {"that": 19.16, "makes": 19.49, "a": 19.9, "tiny": 19.99, "tube": 20.32, "like": 20.65, "a2": 20.98, "gun": 21.07, "barrel": 21.32}}, // 8
    {"s": 22.2, "e": 24.0, "w": {"then": 22.2, "it": 22.46, "snaps": 22.59, "its": 22.91, "gill": 23.1, "covers": 23.36, "shut": 23.74}}, // 9
    {"s": 24.46, "e": 26.4, "w": {"and": 24.46, "water": 24.68, "blasts": 25.04, "out": 25.47, "of": 25.68, "that": 25.83, "tube": 26.11}}, // 10
    {"s": 26.8, "e": 28.32, "w": {"and": 26.8, "heres": 27.02, "the": 27.38, "clever": 27.59, "part": 28.03}}, // 11
    {"s": 28.71, "e": 31.03, "w": {"the": 28.71, "back": 28.9, "of": 29.14, "the2": 29.26, "jet": 29.45, "moves": 29.63, "faster": 29.93, "than": 30.3, "the3": 30.54, "front": 30.73}}, // 12
    {"s": 31.6, "e": 34.17, "w": {"so": 31.6, "the": 31.77, "water": 32.02, "bunches": 32.43, "into": 33.01, "one": 33.34, "big": 33.59, "blob": 33.84}}, // 13
    {"s": 34.56, "e": 35.8, "w": {"right": 34.56, "before": 34.93, "it": 35.36, "hits": 35.51}}, // 14
    {"s": 36.18, "e": 39.54, "w": {"big": 36.18, "archerfish": 36.41, "can": 37.2, "hit": 37.43, "a": 37.66, "bug": 37.74, "two": 37.98, "to": 38.21, "three": 38.37, "meters": 38.76, "away": 39.23}}, // 15
    {"s": 39.96, "e": 41.18, "w": {"smack": 39.96, "the": 40.35, "bug": 40.57, "drops": 40.8}}, // 16
    {"s": 41.25, "e": 43.6, "w": {"and": 41.25, "dinner": 41.48, "falls": 41.94, "right": 42.32, "into": 42.69, "the": 43.0, "water": 43.23}}, // 17
    {"s": 43.95, "e": 44.93, "w": {"so": 43.95, "be": 44.15, "honest": 44.34}}, // 18
    {"s": 45.29, "e": 47.03, "w": {"how": 45.29, "far": 45.47, "do": 45.66, "you": 45.79, "think": 45.97, "you2": 46.28, "could": 46.47, "spit": 46.78}}, // 19
  ];
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + i + ' ' + w); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;

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
  const ground = (ctx, y0, col, col2) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, y0); ctx.quadraticCurveTo(540, y0 - 60, W, y0); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.closePath(); ctx.fill(); if (col2) { ctx.fillStyle = col2; ctx.fillRect(0, y0 + 110, W, HH); } };
  const water = (ctx, y0, t, col = 'rgba(40,150,190,0.92)', col2 = '#8fe0f0') => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, y0); for (let x = 0; x <= W; x += 30) ctx.lineTo(x, y0 + Math.sin(x * 0.014 + t * 2.4) * 12); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = col2; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); for (let x = 0; x <= W; x += 30) { const yy = y0 + Math.sin(x * 0.014 + t * 2.4) * 12; x ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy); } ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.18)'; const r = H.rng(5); for (let i = 0; i < 8; i++) { const xx = ((r() * W + t * 40 * (i % 2 ? 1 : -1)) % W + W) % W; rr(ctx, xx, y0 + 80 + r() * 300, r.range(80, 180), 10, 5); ctx.fill(); } };

  const CUTS = { intro: 4.62, spit: 11.18, mouth: 14.9, gills: 21.99, physics: 26.6, range: 35.99, smack: 39.75, end: 43.78 };
  const FC = { body: '#eef2f4', back: '#c7cf6e', band: '#22262e', fin: '#d9b54a', fin2: '#b8963a', belly: '#ffffff', gill: '#d6dde2' };
  const JET = '#bff0ff', JET2 = '#5cc8f0';

  // ---------- archerfish: side view facing right, origin = body centre, snout at (+315, -12) ----------
  const bodyPath = (ctx) => { ctx.beginPath(); ctx.moveTo(318, -12); ctx.lineTo(250, -64); ctx.quadraticCurveTo(60, -104, -130, -100); ctx.lineTo(-235, -46); ctx.lineTo(-262, -30); ctx.lineTo(-262, 30); ctx.lineTo(-232, 52); ctx.quadraticCurveTo(30, 190, 240, 52); ctx.quadraticCurveTo(292, 26, 318, -12); ctx.closePath(); };
  const fish = (ctx, x, y, s, t, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(s, s);
    const wag = Math.sin(t * 5 + (o.seed || 0)) * 0.12, gill = o.gill || 0;
    const fins = (c) => {
      ctx.fillStyle = c || FC.fin;
      ctx.save(); ctx.translate(-258, 0); ctx.rotate(wag); ctx.beginPath(); ctx.moveTo(0, -30); ctx.lineTo(-110, -118); ctx.quadraticCurveTo(-70, 0, -110, 118); ctx.lineTo(0, 30); ctx.closePath(); ctx.fill(); ctx.restore();
      ctx.beginPath(); ctx.moveTo(-60, -98); ctx.lineTo(-150, -175); ctx.lineTo(-215, -150); ctx.lineTo(-225, -55); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-30, 128); ctx.lineTo(-150, 185); ctx.lineTo(-222, 150); ctx.lineTo(-222, 58); ctx.closePath(); ctx.fill();
    };
    longShadow(ctx, (c) => { fins(c); ctx.fillStyle = c || FC.body; bodyPath(ctx); ctx.fill(); }, o.sh ?? 20);
    // back tint + bands, clipped to body
    ctx.save(); bodyPath(ctx); ctx.clip();
    ctx.fillStyle = FC.back; ctx.beginPath(); ctx.moveTo(330, -40); ctx.quadraticCurveTo(40, -40, -280, -20); ctx.lineTo(-280, -200); ctx.lineTo(330, -200); ctx.closePath(); ctx.fill();
    ctx.fillStyle = FC.belly; ctx.beginPath(); ctx.ellipse(40, 110, 230, 50, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = FC.band;
    for (const [bx, len, w] of [[175, 70, 40], [60, 120, 56], [-70, 110, 52], [-185, 90, 46]]) { ctx.beginPath(); ctx.moveTo(bx - w / 2, -120); ctx.lineTo(bx + w / 2, -120); ctx.lineTo(bx + w * 0.15, -120 + len + 50); ctx.quadraticCurveTo(bx, -120 + len + 70, bx - w * 0.15, -120 + len + 50); ctx.closePath(); ctx.fill(); }
    ctx.restore();
    // gill cover (operculum): flares open with gill > 0
    ctx.save(); ctx.translate(170, -50);
    if (gill > 0.02) { ctx.fillStyle = '#e86a7a'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(-40 - 50 * gill, 55, -10, 110); ctx.lineTo(0, 110); ctx.closePath(); ctx.fill(); }
    ctx.fillStyle = FC.gill; ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(-30 - 55 * gill, 55, -6 - 20 * gill, 112); ctx.lineTo(20, 112); ctx.quadraticCurveTo(40, 55, 20, 0); ctx.closePath(); ctx.fill();
    ctx.restore();
    // pectoral fin
    ctx.save(); ctx.translate(120, 40); ctx.rotate(0.5 + Math.sin(t * 6 + 1) * 0.2); ctx.fillStyle = FC.fin2; ctx.beginPath(); ctx.ellipse(-30, 0, 48, 18, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    // mouth + eye
    limb(ctx, [[318, -12], [262, 6]], 8, '#6a6f78');
    circle(ctx, 232, -36, 32, PAL.white); circle(ctx, 238, -36, 20, PAL.ink); circle(ctx, 231, -44, 7, PAL.white);
    ctx.restore();
  };
  // mouth position in world coords for a fish drawn at (x,y,s,rot)
  const mouthAt = (x, y, s, rot) => [x + (318 * Math.cos(rot) + 12 * Math.sin(rot)) * s, y + (318 * Math.sin(rot) - 12 * Math.cos(rot)) * s];

  // ---------- bug: a little fly, origin = body centre ----------
  const bug = (ctx, x, y, s, t, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(s, s);
    const buzz = Math.sin(t * 40) * 0.15;
    limb(ctx, [[-20, 20], [-40, 50]], 7, PAL.ink); limb(ctx, [[0, 24], [0, 56]], 7, PAL.ink); limb(ctx, [[20, 20], [40, 50]], 7, PAL.ink);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#2c8f5a'; ctx.beginPath(); ctx.ellipse(-10, 0, 60, 34, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(52, -4, 26, 0, Math.PI * 2); ctx.fill(); }, 10);
    ctx.fillStyle = '#3fb874'; ctx.beginPath(); ctx.ellipse(-16, -8, 40, 16, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(220,240,255,0.85)';
    for (const sg of [-1, 1]) { ctx.save(); ctx.translate(-6, -22); ctx.rotate(-0.6 * sg * 0 - 0.5 + sg * 0.25 + buzz * sg); ctx.beginPath(); ctx.ellipse(-30, -24, 46, 20, -0.4, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
    circle(ctx, 62, -12, 13, '#c0303a'); circle(ctx, 66, -15, 4, PAL.white);
    ctx.restore();
  };
  const branch = (ctx, y, t, leafX = 640) => {
    limb(ctx, [[W + 40, y - 120], [860, y - 60], [leafX - 80, y - 30]], 26, '#7a5236');
    ctx.save(); ctx.translate(leafX, y); ctx.rotate(-0.08 + Math.sin(t * 1.3) * 0.02);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#3f9a4a'; ctx.beginPath(); ctx.moveTo(-170, 0); ctx.quadraticCurveTo(0, -90, 170, 0); ctx.quadraticCurveTo(0, 90, -170, 0); ctx.closePath(); ctx.fill(); }, 14);
    limb(ctx, [[-160, 0], [160, 0]], 6, '#2f7a3a'); ctx.restore();
  };
  // a jet of drops along a straight line, head at fraction k (0..1), tail behind it
  const jetLine = (ctx, x0, y0, x1, y1, k, t, n = 12, blob = 0) => {
    if (k <= 0) return; const r = H.rng(9);
    for (let i = 0; i < n; i++) { const f = k - i * 0.045; if (f < 0 || f > 1) continue; const xx = H.lerp(x0, x1, f), yy = H.lerp(y0, y1, f), rad = (i === 0 ? 20 + blob * 26 : 13 - i * 0.6) + r() * 3; circle(ctx, xx, yy, Math.max(4, rad), i % 3 ? JET : JET2); }
  };
  const splash = (ctx, x, y, k, col = JET) => { if (k <= 0 || k >= 1) return; const r = H.rng(4); ctx.save(); ctx.globalAlpha = 1 - k; for (let i = 0; i < 12; i++) { const a = r.range(0, Math.PI * 2), d = 30 + k * r.range(80, 170); circle(ctx, x + Math.cos(a) * d, y + Math.sin(a) * d, 14 * (1 - k * 0.6), col); } ctx.restore(); };
  const star = (ctx, x, y, r, k, col) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => { ctx.fillStyle = c || col; ctx.beginPath(); for (let i = 0; i < 20; i++) { const a = i / 20 * Math.PI * 2, rr2 = i % 2 ? r * 0.62 : r; ctx.lineTo(Math.cos(a) * rr2, Math.sin(a) * rr2); } ctx.closePath(); ctx.fill(); }, 14); ctx.restore(); };
  const ruler = (ctx, x0, y0, x1, y1, k, labels) => { if (k <= 0.01) return; const xe = H.lerp(x0, x1, k), ye = H.lerp(y0, y1, k); ctx.save(); ctx.setLineDash([26, 20]); limb(ctx, [[x0, y0], [xe, ye]], 10, PAL.white); ctx.restore(); circle(ctx, x0, y0, 14, PAL.white); circle(ctx, xe, ye, 14, PAL.white); };
  const underwater = (ctx, y0, t) => { // surface at y0, sky above already drawn
    const g = ctx.createLinearGradient(0, y0, 0, HH); g.addColorStop(0, '#2aa7c9'); g.addColorStop(1, '#0d5f86'); ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(0, y0); for (let x = 0; x <= W; x += 30) ctx.lineTo(x, y0 + Math.sin(x * 0.014 + t * 2.4) * 12); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#9ff0ff'; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); for (let x = 0; x <= W; x += 30) { const yy = y0 + Math.sin(x * 0.014 + t * 2.4) * 12; x ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy); } ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.10)'; for (let i = 0; i < 5; i++) { ctx.beginPath(); const x = 120 + i * 220 + Math.sin(t * 0.6 + i) * 30; ctx.moveTo(x, y0 + 20); ctx.lineTo(x + 70, y0 + 20); ctx.lineTo(x - 60, HH); ctx.lineTo(x - 150, HH); ctx.closePath(); ctx.fill(); }
    const r = H.rng(12); for (let i = 0; i < 10; i++) { const bx = r() * W, sp = r.range(40, 90), f = ((t * sp / 600 + r()) % 1); circle(ctx, bx + Math.sin(t * 2 + i) * 10, HH - 260 - f * (HH - 260 - y0 - 40), r.range(6, 12), 'rgba(255,255,255,0.35)'); }
    // reeds
    ctx.fillStyle = '#0b4f63'; for (let i = 0; i < 7; i++) { const x = 40 + i * 170, h = 220 + (i % 3) * 60, sw = Math.sin(t * 1.4 + i) * 20; ctx.beginPath(); ctx.moveTo(x - 18, HH); ctx.quadraticCurveTo(x + sw, HH - h * 0.6, x + sw * 1.5, HH - h); ctx.quadraticCurveTo(x + 10 + sw, HH - h * 0.6, x + 18, HH); ctx.closePath(); ctx.fill(); }
  };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#ffd98a', '#ff9f6a'); burst(ctx, 640, 760, t, 0.08);
    const z = 1 + 0.04 * EI(t, 0, 4.6); ctx.save(); ctx.translate(540, 960); ctx.scale(z, z); ctx.translate(-540, -960);
    const hit = T(1, 'can') + 0.25, knocked = ph(t, hit, hit + 0.5);
    branch(ctx, 760, t, 650);
    if (t < hit) bug(ctx, 650, 700 + Math.sin(t * 3) * 3, 1, t);
    else { const f = ph(t, hit, hit + 0.9); bug(ctx, 650 + f * 120, 700 + f * f * 600, 1, t, { rot: f * 6 }); }
    underwater(ctx, 1230, t);
    const up = EO(t, T(1, 'fish') - 0.3, T(1, 'fish') + 0.2), rot = -1.05;
    const fx = 380, fy = H.lerp(1900, 1480, up);
    fish(ctx, fx, fy, 0.72, t, { rot });
    const [mx, my] = mouthAt(fx, fy, 0.72, rot);
    const jk = ph(t, T(1, 'can') - 0.1, hit);
    if (t < hit + 0.3) jetLine(ctx, mx, my, 650, 700, jk, t, 14);
    splash(ctx, 650, 700, ph(t, hit, hit + 0.6));
    ctx.restore();
    const out = T(1, 'this') - 0.2;
    bigText(ctx, 'SPIT A BUG?', 540, 300, 150, PAL.ink, pop(t, T(0, 'spit') - 0.15, out), 16);
    pill(ctx, '3 METERS AWAY', 540, 470, { k: pop(t, T(0, '3') - 0.15, out), bg: PAL.blue, col: PAL.white, size: 64, rot: -0.03 });
    bigText(ctx, 'THIS FISH', 540, 300, 150, PAL.cream, pop(t, T(1, 'this') - 0.1), 18);
    pill(ctx, 'CAN!', 540, 470, { k: pop(t, T(1, 'can') - 0.15), bg: PAL.red, col: PAL.white, size: 80 });
  };
  S.intro = (ctx, t) => {
    sky(ctx, '#a8e6ff', '#d9f6ff');
    branch(ctx, 820, t, 680);
    const bk = pop(t, T(4, 'bug') - 0.2);
    if (bk > 0.01) bug(ctx, 680, 762 + Math.sin(t * 3) * 3, bk, t);
    underwater(ctx, 1120, t);
    const sx = H.lerp(-300, 420, EO(t, CUTS.intro - 0.2, CUTS.intro + 1.0)) + Math.sin(t * 1.5) * 12;
    const look = EI(t, T(4, 'spots') - 0.3, T(4, 'spots') + 0.4), rot = -0.45 * look;
    const fy = H.lerp(1460, 1330, EI(t, T(3, 'hides') - 0.2, T(3, 'surface')));
    fish(ctx, sx, fy, 0.95, t, { rot });
    // sight line
    const sk = EO(t, T(4, 'spots') - 0.1, T(4, 'leaf'));
    if (sk > 0) { const ex = sx + (232 * Math.cos(rot) + 36 * Math.sin(rot)) * 0.95, ey = fy + (232 * Math.sin(rot) - 36 * Math.cos(rot)) * 0.95; ctx.save(); ctx.setLineDash([22, 18]); ctx.lineDashOffset = -t * 60; limb(ctx, [[ex, ey], [H.lerp(ex, 670, sk), H.lerp(ey, 770, sk)]], 9, PAL.yellow); ctx.restore(); }
    bigText(ctx, 'ARCHERFISH', 540, 300, 150, PAL.ink, pop(t, T(2, 'archerfish') - 0.15, T(3, 'hides') - 0.1), 16);
    pill(ctx, 'JUST BELOW', 540, 300, { k: pop(t, T(3, 'under') - 0.15, T(4, 'spots') - 0.2), bg: PAL.teal, col: PAL.white, size: 66 });
    pill(ctx, 'THE SURFACE', 540, 440, { k: pop(t, T(3, 'surface') - 0.15, T(4, 'spots') - 0.2), bg: PAL.ink, col: PAL.white, size: 58 });
    bigText(ctx, 'SPOTS A BUG', 540, 330, 130, PAL.ink, pop(t, T(4, 'spots') - 0.1), 16);
    pill(ctx, 'ON A LEAF', 680, 600, { k: pop(t, T(4, 'leaf') - 0.15), bg: PAL.green, col: PAL.white, size: 52 });
  };
  S.spit = (ctx, t) => {
    sky(ctx, '#ffe3a6', '#ffc27a'); burst(ctx, 680, 760, t, 0.06);
    branch(ctx, 820, t, 680);
    const hit = T(5, 'spits') + 0.45;
    if (t < hit) bug(ctx, 680, 762 + Math.sin(t * 3) * 3, 1, t);
    else { const f = ph(t, hit, hit + 1.2); bug(ctx, 680 + f * 140, 762 + f * f * 700, 1, t, { rot: f * 7 }); }
    underwater(ctx, 1120, t);
    const rot = -0.62, fx = 300, fy = 1400;
    // ghost jump arc + cross
    const jk = EO(t, T(5, 'jump') - 0.3, T(5, 'jump') + 0.2), jOut = 1 - ph(t, T(5, 'it2') - 0.2, T(5, 'it2') + 0.1);
    if (jk > 0 && jOut > 0) { ctx.save(); ctx.globalAlpha = jOut; ctx.setLineDash([24, 20]); ctx.strokeStyle = PAL.white; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(fx, fy - 120); ctx.quadraticCurveTo(480, 600 - jk * 100, H.lerp(fx, 640, jk), H.lerp(fy, 760, jk)); ctx.stroke(); ctx.restore(); cross(ctx, 470, 900, 1, PAL.red, pop(t, T(5, 'jump') - 0.1) * jOut); }
    fish(ctx, fx, fy, 0.9, t, { rot });
    const [mx, my] = mouthAt(fx, fy, 0.9, rot);
    const k = ph(t, T(5, 'spits') - 0.1, hit);
    if (t < hit + 0.35) jetLine(ctx, mx, my, 680, 762, k, t, 16);
    splash(ctx, 680, 762, ph(t, hit, hit + 0.6));
    bigText(ctx, 'NO JUMP', 540, 300, 140, PAL.ink, pop(t, T(5, 'jump') - 0.15, T(5, 'it2') - 0.15), 16);
    bigText(ctx, 'IT SPITS!', 540, 300, 160, PAL.blue, pop(t, T(5, 'spits') - 0.15, T(6, 'so') - 0.1), 18);
    bigText(ctx, 'HOW?!', 540, 330, 200, PAL.ink, pop(t, T(6, 'how') - 0.15), 20);
  };
  // mouth cross-section, looking at the fish head-on
  S.mouth = (ctx, t) => {
    sky(ctx, '#ffd6e0', '#ff9fb8');
    const tube = T(8, 'tube'), up = EI(t, T(7, 'tongue') - 0.1, T(7, 'groove') + 0.4);
    const cx = 540, cy = 1000;
    const sideK = EO(t, T(8, 'gun') - 0.2, T(8, 'gun') + 0.3); // shift to side view of the tube
    ctx.save(); ctx.translate(0, -230 * sideK);
    // head outline (front view)
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#e7edf0'; ctx.beginPath(); ctx.ellipse(cx, cy, 380, 330, 0, 0, Math.PI * 2); ctx.fill(); }, 18);
    ctx.fillStyle = FC.back; ctx.beginPath(); ctx.ellipse(cx, cy - 250, 300, 90, 0, Math.PI, 0); ctx.fill();
    // mouth cavity
    ctx.fillStyle = '#7a2a3a'; ctx.beginPath(); ctx.ellipse(cx, cy + 20, 290, 210, 0, 0, Math.PI * 2); ctx.fill();
    // roof of the mouth with a groove in the middle
    ctx.fillStyle = '#f2a0ae'; ctx.beginPath(); ctx.moveTo(cx - 290, cy - 20); ctx.quadraticCurveTo(cx - 150, cy - 230, cx - 70, cy - 190); ctx.lineTo(cx - 60, cy - 120); ctx.arc(cx, cy - 120, 60, Math.PI, 0, false); ctx.lineTo(cx + 70, cy - 190); ctx.quadraticCurveTo(cx + 150, cy - 230, cx + 290, cy - 20); ctx.lineTo(cx + 290, cy - 260); ctx.lineTo(cx - 290, cy - 260); ctx.closePath(); ctx.save(); ctx.beginPath(); ctx.ellipse(cx, cy + 20, 290, 210, 0, 0, Math.PI * 2); ctx.clip(); ctx.fillStyle = '#f2a0ae'; ctx.beginPath(); ctx.moveTo(cx - 300, cy - 30); ctx.quadraticCurveTo(cx - 160, cy - 150, cx - 60, cy - 130); ctx.arc(cx, cy - 130, 60, Math.PI, 0, false); ctx.quadraticCurveTo(cx + 160, cy - 150, cx + 300, cy - 30); ctx.lineTo(cx + 300, cy - 300); ctx.lineTo(cx - 300, cy - 300); ctx.closePath(); ctx.fill();
    // tongue rising, its ridge fits into the groove
    const ty = H.lerp(cy + 150, cy - 70, up);
    ctx.fillStyle = '#e8687c'; ctx.beginPath(); ctx.moveTo(cx - 280, cy + 260); ctx.quadraticCurveTo(cx - 200, ty, cx - 62, ty); ctx.lineTo(cx + 62, ty); ctx.quadraticCurveTo(cx + 200, ty, cx + 280, cy + 260); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#f08597'; ctx.beginPath(); ctx.ellipse(cx, ty + 10, 52, 16, 0, Math.PI, 0); ctx.fill();
    // the tube: water channel left between groove and tongue
    const tk = ph(t, T(7, 'groove') + 0.2, T(7, 'groove') + 0.6);
    if (tk > 0) { const pulse = 1 + 0.06 * Math.sin(t * 8); circle(ctx, cx, cy - 128, 46 * tk * pulse, JET2); circle(ctx, cx - 10, cy - 140, 14 * tk, PAL.white); }
    ctx.restore();
    ctx.restore();
    const lo = T(8, 'that') - 0.15;
    pill(ctx, 'TONGUE', cx, cy + 420, { k: pop(t, T(7, 'tongue') - 0.15, lo), bg: PAL.red, col: PAL.white, size: 56 });
    const gk = pop(t, T(7, 'groove') - 0.15, lo);
    if (gk > 0.01) { arrow(ctx, 830, 620, 590, 850, PAL.ink, 16, gk); pill(ctx, 'GROOVE', 830, 560, { k: gk, bg: PAL.ink, col: PAL.white, size: 52 }); }
    pill(ctx, 'ROOF OF MOUTH', 540, 470, { k: pop(t, T(7, 'roof') - 0.15, lo), bg: PAL.purple, col: PAL.white, size: 54 });
    bigText(ctx, 'TINY TUBE', 540, 300, 150, PAL.ink, pop(t, T(8, 'tiny') - 0.15), 16);
    // side view: a gun barrel
    if (sideK > 0.01) {
      const y = 1420, k = sideK; ctx.save(); ctx.translate(540, y); ctx.scale(k, k);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.steel; rr(ctx, -380, -60, 760, 120, 60); ctx.fill(); }, 14);
      ctx.fillStyle = '#56688f'; rr(ctx, -380, -60, 760, 40, 20); ctx.fill();
      const f = (t * 1.2) % 1; for (let i = 0; i < 6; i++) { const xx = -340 + ((i / 6 + f) % 1) * 680; circle(ctx, xx, 0, 20, JET2); }
      ctx.restore();
      pill(ctx, 'LIKE A GUN BARREL', 540, 1600, { k: pop(t, T(8, 'barrel') - 0.2), bg: PAL.yellow, size: 54 });
    }
  };
  S.gills = (ctx, t) => {
    sky(ctx, '#7fd0f0', '#2b8fc4');
    const r = H.rng(21); ctx.fillStyle = 'rgba(255,255,255,0.12)'; for (let i = 0; i < 14; i++) circle(ctx, r() * W, 200 + r() * 1500, r.range(10, 30), ctx.fillStyle);
    const snap = T(9, 'snaps'), shut = ph(t, snap - 0.05, snap + 0.12);
    const gill = (1 - shut) * (0.7 + 0.3 * Math.sin(t * 5)) ;
    const rot = -0.32, fx = 470, fy = 1060, s = 1.25;
    const shake = shut > 0 && shut < 1 ? Math.sin(t * 90) * 6 : 0;
    fish(ctx, fx + shake, fy, s, t, { rot, gill });
    // squeeze arrows on the gill cover
    const ak = pop(t, snap - 0.15, T(10, 'water') - 0.1);
    if (ak > 0.01) { const gx = fx + 140 * s * Math.cos(rot) + 0 , gy = fy + 140 * s * Math.sin(rot) + 10; arrow(ctx, gx - 50, gy - 330, gx - 20, gy - 150, PAL.red, 20, ak); arrow(ctx, gx - 40, gy + 330, gx - 10, gy + 150, PAL.red, 20, ak); }
    // water racing forward through the tube to the mouth, then out
    const [mx, my] = mouthAt(fx, fy, s, rot);
    const bk = ph(t, T(10, 'blasts') - 0.15, T(10, 'blasts') + 0.7);
    if (bk > 0) { const ex = mx + Math.cos(rot) * 900, ey = my + Math.sin(rot) * 900; jetLine(ctx, mx, my, ex, ey, bk * 1.4, t, 16); }
    pill(ctx, 'GILL COVERS', 540, 470, { k: pop(t, T(9, 'gill') - 0.15, T(10, 'water') - 0.15), bg: PAL.ink, col: PAL.white, size: 58 });
    bigText(ctx, 'SNAP!', 540, 300, 180, PAL.red, pop(t, snap - 0.1, T(10, 'water') - 0.15), 18);
    bigText(ctx, 'BLAST!', 540, 300, 180, PAL.cream, pop(t, T(10, 'blasts') - 0.15), 18);
    pill(ctx, 'OUT OF THE TUBE', 540, 470, { k: pop(t, T(10, 'tube') - 0.2), bg: PAL.blue, col: PAL.white, size: 56 });
  };
  S.physics = (ctx, t) => {
    sky(ctx, '#2f2a5c', '#5a4aa0'); burst(ctx, 540, 1000, t, 0.05);
    // grid like a slow-motion lab shot
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 3; for (let x = 0; x <= W; x += 90) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HH); ctx.stroke(); } for (let y = 0; y <= HH; y += 90) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    const y = 1040, merge = EI(t, T(13, 'bunches') - 0.1, T(13, 'blob') + 0.1), hitT = T(14, 'hits');
    const fly = EI(t, T(14, 'right') - 0.1, hitT);
    const tx = 930;
    // target bug
    if (t < hitT) bug(ctx, tx, y - 10 + Math.sin(t * 3) * 3, 0.9, t, { rot: -1.57 });
    else { const f = ph(t, hitT, hitT + 0.8); bug(ctx, tx + f * 200, y - f * 300, 0.9, t, { rot: -1.57 + f * 5 }); }
    const N = 6, mergeX = 640;
    for (let i = 0; i < N; i++) { // 0 = front
      const x0 = 560 - i * 85 + Math.sin(t * 2) * 4, x = H.lerp(H.lerp(x0, mergeX, merge), tx - 70, fly);
      const rad = H.lerp(26, 10, merge) + (i === 0 ? merge * 58 : 0); if (i > 0 && merge > 0.97) continue;
      circle(ctx, x, y, rad, i % 2 ? JET : JET2);
      // speed arrows: back is faster
      const ak = pop(t, T(12, 'back') - 0.15) * (1 - merge);
      if (ak > 0.01) { const len = 40 + i * 30; arrow(ctx, x - len - 10, y + 70 + (i % 2) * 40, x + 10, y + 70 + (i % 2) * 40, i < 2 ? PAL.yellow : PAL.coral, 10, ak); }
    }
    splash(ctx, tx - 50, y, ph(t, hitT, hitT + 0.5));
    const lo = T(13, 'so') - 0.15;
    bigText(ctx, 'CLEVER PART', 540, 300, 140, PAL.yellow, pop(t, T(11, 'clever') - 0.15, T(12, 'back') - 0.25), 16);
    pill(ctx, 'BACK: FAST', 300, 1330, { k: pop(t, T(12, 'faster') - 0.15, lo), bg: PAL.coral, col: PAL.white, size: 54 });
    pill(ctx, 'FRONT: SLOW', 780, 1330, { k: pop(t, T(12, 'front') - 0.15, lo), bg: PAL.yellow, size: 54 });
    bigText(ctx, 'BACK CATCHES UP', 540, 300, 120, PAL.cream, pop(t, T(12, 'back') - 0.15, lo), 14);
    bigText(ctx, 'ONE BIG BLOB', 540, 300, 140, PAL.cream, pop(t, T(13, 'one') - 0.15), 16);
    pill(ctx, 'RIGHT BEFORE IMPACT', 540, 470, { k: pop(t, T(14, 'before') - 0.15), bg: PAL.red, col: PAL.white, size: 52 });
  };
  S.range = (ctx, t) => {
    sky(ctx, '#9be7d8', '#e9fff6');
    branch(ctx, 700, t, 760);
    const hit = T(15, 'hit') + 0.35;
    bug(ctx, 760, 642 + Math.sin(t * 3) * 3, 0.9, t);
    underwater(ctx, 1260, t);
    const rot = -0.9, fx = 240, fy = 1480;
    fish(ctx, fx, fy, 0.62, t, { rot });
    const [mx, my] = mouthAt(fx, fy, 0.62, rot);
    const rk = EO(t, T(15, 'big') - 0.1, T(15, 'two'));
    ruler(ctx, mx + 50, my + 30, 820, 700, rk);
    const k = ph(t, T(15, 'hit') - 0.2, hit);
    if (t < hit + 0.3) jetLine(ctx, mx, my, 760, 642, k, t, 18, 1);
    splash(ctx, 760, 642, ph(t, hit, hit + 0.6));
    const nk = pop(t, T(15, 'two') - 0.15);
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 980); ctx.rotate(-0.42); bigText(ctx, '2–3 m', 0, 0, 170, PAL.ink, nk, 18); ctx.restore(); }
    bigText(ctx, 'BIG ARCHERFISH', 540, 300, 120, PAL.ink, pop(t, T(15, 'archerfish') - 0.15), 14);
    pill(ctx, 'METERS AWAY', 540, 440, { k: pop(t, T(15, 'meters') - 0.15), bg: PAL.blue, col: PAL.white, size: 60 });
  };
  S.smack = (ctx, t) => {
    sky(ctx, '#ffcf6a', '#ff8f4a'); burst(ctx, 620, 620, t, 0.1);
    const hit = T(16, 'smack') - 0.05;
    branch(ctx, 700, t, 620);
    const fall = EI(t, hit + 0.15, T(16, 'drops') + 0.5);
    const eaten = T(17, 'right') - 0.05;
    if (t < eaten) bug(ctx, H.lerp(620, 600, fall), H.lerp(642, 1300, fall), 1, t, { rot: fall * 9 });
    star(ctx, 640, 640, 170, pop(t, hit, hit + 0.9) * 0.9, PAL.white);
    if (t < hit + 0.15) jetLine(ctx, 300, 1300, 620, 650, ph(t, hit - 0.35, hit), t, 10, 1);
    underwater(ctx, 1300, t);
    splash(ctx, 600, 1300, ph(t, T(16, 'drops') + 0.4, T(16, 'drops') + 1.0));
    // fish rises and gulps
    const rise = EO(t, T(17, 'dinner') - 0.3, eaten) * (1 - EI(t, eaten + 0.3, eaten + 1.2) * 0.6);
    fish(ctx, 600 - 140, H.lerp(1700, 1440, rise), 0.8, t, { rot: -1.2 });
    bigText(ctx, 'SMACK!', 540, 300, 190, PAL.red, pop(t, hit), 20);
    pill(ctx, 'DINNER!', 540, 470, { k: pop(t, T(17, 'dinner') - 0.15), bg: PAL.green, col: PAL.white, size: 72, rot: 0.03 });
  };
  S.end = (ctx, t) => {
    sky(ctx, '#8a5cf6', '#3a1c7a'); burst(ctx, 540, 1100, t, 0.08, 16);
    bigText(ctx, 'BE HONEST...', 540, 300, 130, PAL.cream, pop(t, T(18, 'honest') - 0.25, T(19, 'how') - 0.3), 16);
    bigText(ctx, 'HOW FAR COULD', 540, 300, 120, PAL.cream, pop(t, T(19, 'how') - 0.15), 14);
    bigText(ctx, 'YOU SPIT?', 540, 450, 150, PAL.yellow, pop(t, T(19, 'spit') - 0.2), 18);
    // ruler 0..3 m
    const rk = EO(t, T(18, 'so') - 0.1, T(18, 'honest') + 0.4); if (rk > 0.01) {
      const y = 1250, x0 = 140, x1 = H.lerp(140, 940, rk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.yellow; rr(ctx, x0 - 20, y - 50, x1 - x0 + 40, 100, 30); ctx.fill(); }, 12);
      for (let m = 0; m <= 3; m++) { const x = 140 + m * 800 / 3; if (x > x1 + 1) continue; limb(ctx, [[x, y - 50], [x, y + 10]], 8, PAL.ink); text(ctx, m + ' m', x, y + 110, 52, PAL.cream); }
    }
    const fk = pop(t, T(18, 'honest') + 0.2); if (fk > 0.01) { fish(ctx, 940, 1050, 0.32 * fk, t, { rot: 0, sh: 8 }); pill(ctx, 'ARCHERFISH', 900, 900, { k: fk, bg: PAL.teal, col: PAL.white, size: 44, sh: 8 }); }
    const yk = pop(t, T(19, 'you') - 0.15); if (yk > 0.01) { const x = 140 + Math.abs(Math.sin(t * 1.6)) * 420; arrow(ctx, x, 1500, x, 1330, PAL.white, 16, yk); pill(ctx, 'YOU?', x, 1560, { k: yk, bg: PAL.coral, col: PAL.white, size: 56 }); }
  };

  const ORDER = [['hook', 0], ['intro', CUTS.intro], ['spit', CUTS.spit], ['mouth', CUTS.mouth], ['gills', CUTS.gills], ['physics', CUTS.physics], ['range', CUTS.range], ['smack', CUTS.smack], ['end', CUTS.end]];
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
    const squirt = (t, d = 0.45) => k.noise(t, { dur: d, color: 'white', filter: 'bandpass', f: [[0, 2600], [d, 1400]], gain: 0.22, a: 0.02 });
    const splashAt = (t) => k.noise(t, { dur: 0.5, color: 'pink', filter: 'lowpass', f: [[0, 3000], [0.5, 600]], gain: 0.25, a: 0.01 });
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 104, gain: 0.22, chords: [['G3', 'B3', 'D4', 'F#4'], ['E3', 'G3', 'B3', 'D4'], ['C4', 'E4', 'G4', 'B4'], ['D4', 'F#4', 'A4', 'C5']] });
    k.play('stamp', T(0, 'spit') - 0.15, { gain: 0.5 }); popAt(T(0, '3') - 0.15, 700, 0.6, 0.2);
    k.play('swish', T(1, 'fish') - 0.3, { gain: 0.4 }); squirt(T(1, 'can') - 0.1, 0.35); k.play('slap', T(1, 'can') + 0.25, { gain: 0.5 }); k.play('impact', T(1, 'can') - 0.1, { gain: 0.4 });
    wipe(CUTS.intro);
    k.noise(CUTS.intro, { dur: CUTS.mouth - CUTS.intro, color: 'brown', filter: 'lowpass', f: [[0, 450]], gain: 0.08, a: 0.5 });
    k.play('stamp', T(2, 'archerfish') - 0.15, { gain: 0.45 }); popAt(T(3, 'under') - 0.15, 560, 0.5, -0.2); popAt(T(3, 'surface') - 0.15, 640, 0.5, 0.2);
    k.play('ding', T(4, 'spots') - 0.1, { f: 'E5', gain: 0.25 }); popAt(T(4, 'leaf') - 0.15, 760, 0.5, 0.3);
    wipe(CUTS.spit);
    k.play('jump', T(5, 'jump') - 0.25, { gain: 0.3 }); k.play('error', T(5, 'jump') - 0.05, { f: 'A3', gain: 0.25 });
    squirt(T(5, 'spits') - 0.1); k.play('slap', T(5, 'spits') + 0.45, { gain: 0.5 }); splashAt(T(5, 'spits') + 1.5);
    k.play('riser', T(6, 'how') - 0.6, { dur: 0.6, gain: 0.3 }); k.play('impact', T(6, 'how') - 0.1, { gain: 0.45 });
    wipe(CUTS.mouth);
    popAt(T(7, 'tongue') - 0.15, 560, 0.6, -0.2, false); k.play('swish', T(7, 'tongue'), { gain: 0.3 });
    popAt(T(7, 'groove') - 0.15, 700, 0.6, 0.3, false); popAt(T(7, 'roof') - 0.15, 620, 0.5, 0);
    k.play('click', T(7, 'groove') + 0.35, { gain: 0.4 }); k.play('sparkle', T(8, 'tube') - 0.15, { n: 4, gain: 0.3 });
    k.play('stamp', T(8, 'tiny') - 0.15, { gain: 0.4 }); k.play('swish', T(8, 'gun') - 0.2, { gain: 0.4 }); popAt(T(8, 'barrel') - 0.2, 520, 0.6, 0);
    wipe(CUTS.gills);
    popAt(T(9, 'gill') - 0.15, 600, 0.6, -0.3); k.play('slap', T(9, 'snaps') - 0.05, { gain: 0.6 }); k.play('thud', T(9, 'snaps'), { f: 90, gain: 0.5 });
    squirt(T(10, 'blasts') - 0.15, 0.7); k.play('whoosh', T(10, 'blasts') - 0.1, { dur: 0.5, gain: 0.5, top: 3000 }); popAt(T(10, 'tube') - 0.2, 680, 0.5, 0.3);
    wipe(CUTS.physics);
    k.play('ding', T(11, 'clever') - 0.1, { f: 'A5', gain: 0.3 });
    for (let i = 0; i < 6; i++) k.play('tick', T(12, 'back') + i * 0.3, { gain: 0.2, minor: true });
    popAt(T(12, 'faster') - 0.15, 720, 0.6, -0.4, false); popAt(T(12, 'front') - 0.15, 480, 0.6, 0.4, false);
    k.play('riser', T(13, 'bunches') - 0.2, { dur: 1.4, gain: 0.3 }); k.play('powerup', T(13, 'blob') - 0.15, { gain: 0.25 });
    k.play('slap', T(14, 'hits') - 0.02, { gain: 0.6 }); k.play('impact', T(14, 'hits') - 0.02, { gain: 0.45 });
    wipe(CUTS.range);
    k.play('stamp', T(15, 'archerfish') - 0.15, { gain: 0.4 }); squirt(T(15, 'hit') - 0.2, 0.5); k.play('slap', T(15, 'hit') + 0.35, { gain: 0.45 });
    for (let i = 0; i < 4; i++) k.play('tick', T(15, 'big') + i * 0.35, { gain: 0.2, minor: true });
    k.play('ding', T(15, 'two') - 0.1, { f: 'C6', gain: 0.3 }); popAt(T(15, 'meters') - 0.15, 640, 0.5, 0.2);
    wipe(CUTS.smack);
    k.play('slap', T(16, 'smack') - 0.05, { gain: 0.8 }); k.play('impact', T(16, 'smack') - 0.05, { gain: 0.5 });
    k.play('swish', T(16, 'drops') - 0.2, { gain: 0.25 }); splashAt(T(16, 'drops') + 0.4);
    popAt(T(17, 'dinner') - 0.15, 600, 0.7, 0, false); k.play('coin', T(17, 'right') - 0.05, { gain: 0.25 });
    wipe(CUTS.end);
    k.play('stamp', T(18, 'honest') - 0.25, { gain: 0.4 });
    for (let i = 0; i < 4; i++) k.play('tick', T(18, 'so') + i * 0.2, { gain: 0.18, minor: true });
    popAt(T(19, 'how') - 0.15, 600, 0.6, 0); popAt(T(19, 'you') - 0.15, 700, 0.6, 0.3, false);
    k.play('ding', T(19, 'spit') - 0.15, { f: 'C6', gain: 0.3 });
    k.tone(T(19, 'spit') + 0.4, { f: 'G4', type: 'triangle', dur: 0.9, gain: 0.1, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
