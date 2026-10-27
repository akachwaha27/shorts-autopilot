// ================= Flat-Vector Science, vertical 1080x1920: "Why do your ears pop on a plane?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.58, w: {"a": 0.25, "three": 0.31, "and": 0.61, "half": 0.85, "centimeter": 1.09, "tube": 1.68, "in": 1.92, "your": 2.04, "skull": 2.28} },  // A three and a half centimeter tube in your skull
    { id: 'p1', s: 2.88, e: 4.35, w: {"is": 2.88, "why": 3.06, "your": 3.34, "ears": 3.7, "pop": 4.07} },  // is why your ears pop.
    { id: 'p2', s: 4.90, e: 6.60, w: {"its": 4.9, "called": 5.09, "the": 5.48, "eustachian": 5.68, "tube": 6.33} },  // It's called the Eustachian tube,
    { id: 'p3', s: 6.90, e: 8.24, w: {"and": 6.9, "it": 7.07, "links": 7.19, "your": 7.48, "middle": 7.71, "ear": 8.07} },  // and it links your middle ear
    { id: 'p4', s: 8.54, e: 9.86, w: {"to": 8.54, "the": 8.67, "back": 8.85, "of": 9.1, "your": 9.23, "throat": 9.48} },  // to the back of your throat.
    { id: 'p5', s: 10.41, e: 13.09, w: {"behind": 10.41, "your": 10.84, "eardrum": 11.13, "sits": 11.64, "a": 11.93, "tiny": 12.0, "pocket": 12.29, "of": 12.73, "air": 12.88} },  // Behind your eardrum sits a tiny pocket of air.
    { id: 'p6', s: 13.64, e: 15.91, w: {"on": 13.64, "the": 13.78, "ground": 13.99, "it": 14.4, "matches": 14.54, "air": 15.23, "outside": 15.43} },  // On the ground, it matches the air outside.
    { id: 'p7', s: 16.46, e: 18.73, w: {"but": 16.46, "a": 16.68, "plane": 16.76, "cabin": 17.12, "is": 17.49, "only": 17.63, "pressurized": 17.92} },  // But a plane cabin is only pressurized
    { id: 'p8', s: 19.03, e: 20.92, w: {"like": 19.03, "an": 19.27, "eight": 19.39, "thousand": 19.7, "foot": 20.19, "mountain": 20.43} },  // like an eight thousand foot mountain.
    { id: 'p9', s: 21.47, e: 24.11, w: {"so": 21.47, "as": 21.62, "you": 21.77, "climb": 22.0, "the": 22.37, "outside": 22.6, "pressure": 23.13, "drops": 23.73} },  // So as you climb, the outside pressure drops,
    { id: 'p10', s: 24.41, e: 26.71, w: {"and": 24.41, "the": 24.6, "air": 24.8, "behind": 25.0, "your": 25.39, "eardrum": 25.66, "pushes": 26.12, "out": 26.51} },  // and the air behind your eardrum pushes out.
    { id: 'p11', s: 27.26, e: 29.29, w: {"your": 27.26, "eardrum": 27.54, "bulges": 28.03, "like": 28.45, "a": 28.73, "balloon": 28.8} },  // Your eardrum bulges like a balloon,
    { id: 'p12', s: 29.59, e: 31.13, w: {"until": 29.59, "the": 29.94, "tube": 30.15, "cracks": 30.43, "open": 30.85} },  // until the tube cracks open,
    { id: 'p13', s: 31.43, e: 32.81, w: {"air": 31.43, "puffs": 31.67, "out": 32.08, "and": 32.32, "pop": 32.57} },  // air puffs out, and pop!
    { id: 'p14', s: 33.36, e: 34.63, w: {"landing": 33.36, "is": 33.88, "trickier": 34.03} },  // Landing is trickier.
    { id: 'p15', s: 35.18, e: 36.89, w: {"now": 35.18, "the": 35.39, "cabin": 35.6, "air": 35.96, "squeezes": 36.17, "in": 36.74} },  // Now the cabin air squeezes in,
    { id: 'p16', s: 37.19, e: 39.09, w: {"and": 37.19, "that": 37.36, "pressure": 37.59, "pinches": 38.05, "the": 38.45, "tube": 38.63, "shut": 38.86} },  // and that pressure pinches the tube shut.
    { id: 'p17', s: 39.64, e: 41.31, w: {"so": 39.64, "you": 39.8, "swallow": 40.04, "or": 40.59, "yawn": 40.99} },  // So you swallow, or you yawn.
    { id: 'p18', s: 41.86, e: 44.00, w: {"tiny": 41.86, "muscles": 42.19, "yank": 42.76, "the": 43.09, "tube": 43.34, "open": 43.67} },  // Tiny muscles yank the tube open,
    { id: 'p19', s: 44.30, e: 45.31, w: {"air": 44.3, "rushes": 44.57, "in": 45.13} },  // air rushes in,
    { id: 'p20', s: 45.61, e: 47.42, w: {"and": 45.61, "your": 45.81, "eardrum": 46.08, "snaps": 46.55, "back": 46.89, "flat": 47.16} },  // and your eardrum snaps back flat.
    { id: 'p21', s: 47.97, e: 48.98, w: {"so": 47.97, "next": 48.14, "flight": 48.48} },  // So next flight,
    { id: 'p22', s: 49.28, e: 51.64, w: {"will": 49.28, "you": 49.56, "open": 49.77, "that": 50.05, "secret": 50.32, "tube": 50.74, "with": 51.02, "a": 51.3, "yawn": 51.36} },  // will you open that secret tube with a yawn,
    { id: 'p23', s: 51.94, e: 52.83, w: {"or": 51.94, "a": 52.12, "swallow": 52.21} },  // or a swallow?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  const cutAt = (i) => (B[i - 1].e + B[i].s) / 2;
  const CUTS = { anat: cutAt(2), cabin: cutAt(7), climb: cutAt(9), land: cutAt(14), yawn: cutAt(17), fix: cutAt(18), end: cutAt(21) };

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', ice: '#cfeeff', teal: '#1fb6a6', yellow: '#ffd23f', green: '#5ad17a', grey: '#8d93a6', smoke: '#6f7385', white: '#ffffff', purple: '#7b5cff' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
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
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 14, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };

  PAL.skin = '#f2b48c'; PAL.skinD = '#d98f68'; PAL.flesh = '#f7c9a8'; PAL.tube = '#d9667f'; PAL.drum = '#c2385f'; PAL.airIn = '#fff1e0'; PAL.pink = '#ff8fab';

  const header = (ctx, t) => {
    const k = EO(t, B[1].e + 0.2, B[1].e + 0.7); if (k <= 0) return;
    ctx.save(); ctx.globalAlpha = k; pill(ctx, 'WHY YOUR EARS POP', 540, 215, { size: 40, bg: PAL.ink, col: PAL.cream, sh: 10 }); ctx.restore();
  };

  // ---------- the ear cutaway (shared by anatomy / climb / landing / fix) ----------
  const E = { drumX: 650, drumY0: 730, drumY1: 930, ch: { x: 380, y: 690, w: 270, h: 280 }, canal: { x: 650, y: 770, w: 330, h: 120 },
    tube: [[440, 960], [360, 1120], [260, 1260]], throat: { x: 130, y: 1250, w: 200, h: 260 } };
  const tubePath = (ctx) => { const [a, b, c] = E.tube; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo(b[0], b[1], c[0], c[1]); };
  const tubePt = (u) => { const [a, b, c] = E.tube, m = 1 - u; return [m * m * a[0] + 2 * m * u * b[0] + u * u * c[0], m * m * a[1] + 2 * m * u * b[1] + u * u * c[1]]; };
  const inPts = (() => { const r = H.rng(31), a = []; for (let i = 0; i < 18; i++) a.push([E.ch.x + 30 + r() * (E.ch.w - 70), E.ch.y + 30 + r() * (E.ch.h - 60), r() * 6.28]); return a; })();
  const outPts = (() => { const r = H.rng(47), a = []; for (let i = 0; i < 26; i++) { if (i < 10) a.push([E.canal.x + 50 + r() * (E.canal.w - 80), E.canal.y + 20 + r() * (E.canal.h - 40), r() * 6.28]); else a.push([960 + r() * 90, 560 + r() * 640, r() * 6.28]); } return a; })();
  const dots = (ctx, pts, n, t, col, sp = 1) => { for (let i = 0; i < Math.min(n, pts.length); i++) { const [x, y, p] = pts[i]; circle(ctx, x + Math.sin(t * 2.2 * sp + p) * 10, y + Math.cos(t * 1.8 * sp + p * 1.3) * 10, 13, col); } };
  // st: pin, pout (0..1 pressure), open (0..1), squeeze (0..1), muscles (0..1), flowOut/flowIn (0..1 progress of a puff)
  const earCut = (ctx, t, st) => {
    // head tissue
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.skin; rr(ctx, 60, 560, 840, 1000, 90); ctx.fill(); }, 26);
    // outer ear (pinna) on the right edge
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.skinD; ctx.beginPath(); ctx.ellipse(950, 830, 90, 230, 0, 0, Math.PI * 2); ctx.fill(); }, 16);
    // ear canal
    ctx.fillStyle = PAL.airIn; rr(ctx, E.canal.x, E.canal.y, E.canal.w + 120, E.canal.h, 50); ctx.fill();
    // throat
    ctx.fillStyle = '#b8456a'; rr(ctx, E.throat.x - 16, E.throat.y - 16, E.throat.w + 32, E.throat.h + 300, 60); ctx.fill();
    ctx.fillStyle = '#7a2343'; rr(ctx, E.throat.x, E.throat.y, E.throat.w, E.throat.h + 300, 50); ctx.fill();
    // middle ear chamber
    ctx.fillStyle = PAL.airIn; rr(ctx, E.ch.x, E.ch.y, E.ch.w, E.ch.h, 60); ctx.fill();
    // tiny ear bones
    ctx.save(); ctx.fillStyle = '#e9dcc4'; ctx.translate(560, 760); ctx.rotate(0.3); rr(ctx, -18, -40, 36, 80, 18); ctx.fill(); ctx.restore();
    ctx.fillStyle = '#e9dcc4'; rr(ctx, 500, 790, 60, 26, 13); ctx.fill(); rr(ctx, 470, 800, 26, 60, 13); ctx.fill();
    // the tube: thick wall, lumen width set by open/squeeze
    ctx.save(); ctx.lineCap = 'round';
    ctx.strokeStyle = PAL.tube; ctx.lineWidth = 78; tubePath(ctx); ctx.stroke();
    const lum = 6 + 40 * H.clamp(st.open || 0) * (1 - 0.9 * (st.squeeze || 0));
    ctx.strokeStyle = (st.open || 0) > 0.1 ? PAL.airIn : '#8e2f4f'; ctx.lineWidth = lum; tubePath(ctx); ctx.stroke();
    ctx.restore();
    // muscles that yank it open
    if ((st.muscles || 0) > 0.01) {
      const m = st.muscles, [mx, my] = tubePt(0.5);
      ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = '#e8434f'; ctx.lineWidth = 34;
      ctx.beginPath(); ctx.moveTo(mx - 20, my + 10); ctx.lineTo(mx - 150 - 40 * m, my + 160 + 30 * m); ctx.stroke();
      ctx.lineWidth = 8; ctx.strokeStyle = 'rgba(255,255,255,0.45)'; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(mx - 40 - i * 30, my + 30 + i * 35); ctx.lineTo(mx - 20 - i * 30, my + 50 + i * 35); ctx.stroke(); }
      ctx.restore();
      arrow(ctx, mx - 120, my + 140, mx - 200, my + 210, PAL.yellow, 14, m);
    }
    // air dots: inside (middle ear) and outside (canal + world)
    dots(ctx, inPts, Math.round(4 + 14 * st.pin), t, PAL.orange);
    dots(ctx, outPts, Math.round(26 * st.pout), t, PAL.blue);
    // eardrum: bulges outward (right) when pin > pout
    const bulge = H.clamp((st.pin - st.pout) * 4, -1, 1) + (st.wobble || 0);
    ctx.save(); ctx.strokeStyle = PAL.drum; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(E.drumX, E.drumY0); ctx.quadraticCurveTo(E.drumX + bulge * 150, (E.drumY0 + E.drumY1) / 2, E.drumX, E.drumY1); ctx.stroke(); ctx.restore();
    // puffs travelling in the tube
    const puff = (u, col) => { for (let j = 0; j < 4; j++) { const uu = H.clamp(u - j * 0.08); if (uu <= 0 || uu >= 1) continue; const [x, y] = tubePt(uu); circle(ctx, x, y, 15, col); } };
    if (st.flowOut > 0 && st.flowOut < 1) puff(st.flowOut, PAL.orange);
    if (st.flowIn > 0 && st.flowIn < 1) puff(1 - st.flowIn, PAL.blue);
    // squeeze arrows on the tube
    if ((st.squeeze || 0) > 0.01) { const [x, y] = tubePt(0.45), s = st.squeeze; arrow(ctx, x - 150, y - 70, x - 55, y - 25, PAL.blue, 14, s); arrow(ctx, x + 150, y + 70, x + 55, y + 25, PAL.blue, 14, s); }
    return bulge;
  };
  const planeIcon = (ctx, x, y, s, ang, col = PAL.white) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -150, -26, 300, 52, 26); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-20, 0); ctx.lineTo(-90, 110); ctx.lineTo(-40, 110); ctx.lineTo(50, 0); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-20, 0); ctx.lineTo(-90, -110); ctx.lineTo(-40, -110); ctx.lineTo(50, 0); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-150, -10); ctx.lineTo(-190, -70); ctx.lineTo(-150, -70); ctx.lineTo(-110, -10); ctx.closePath(); ctx.fill(); }, 14);
    ctx.fillStyle = PAL.blue; for (let i = 0; i < 6; i++) { circle(ctx, -70 + i * 32, -4, 7, PAL.blue); }
    ctx.restore();
  };
  const gauge = (ctx, x, y, val, label, col) => { // simple pressure bar
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, x - 130, y - 200, 260, 400, 40); ctx.fill(); }, 18);
    ctx.fillStyle = '#e3d9c6'; rr(ctx, x - 50, y - 160, 100, 280, 30); ctx.fill();
    const h = 280 * H.clamp(val); ctx.fillStyle = col; rr(ctx, x - 50, y + 120 - h, 100, Math.max(h, 30), 30); ctx.fill();
    text(ctx, label, x, y + 160, 40, PAL.ink, 700);
  };

  // ---------- scenes ----------
  const S = {};
  const headProfile = (ctx, cx, cy) => {
    ctx.save(); ctx.translate(cx, cy);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.skin;
      ctx.beginPath(); ctx.arc(40, -80, 330, 0, Math.PI * 2); ctx.fill();
      rr(ctx, -300, -120, 420, 470, 120); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-290, -40); ctx.lineTo(-380, 110); ctx.lineTo(-290, 140); ctx.closePath(); ctx.fill();
      rr(ctx, -40, 200, 280, 520, 60); ctx.fill(); }, 28);
    ctx.fillStyle = '#5a3a2e'; ctx.beginPath(); ctx.arc(40, -110, 330, Math.PI * 1.02, Math.PI * 2.1); ctx.closePath(); ctx.fill();
    circle(ctx, -190, -20, 22, PAL.ink);
    ctx.fillStyle = PAL.skinD; ctx.beginPath(); ctx.ellipse(130, 20, 60, 100, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#b06a4a'; ctx.beginPath(); ctx.ellipse(130, 25, 24, 44, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  };
  S.hook = (ctx, t) => {
    sky(ctx, '#bfe6ff', '#7cc4f2');
    // clouds drifting
    for (let i = 0; i < 4; i++) { const x = ((i * 330 - t * 60) % 1500 + 1500) % 1500 - 200; ctx.fillStyle = 'rgba(255,255,255,0.85)'; rr(ctx, x, 420 + i * 300, 260, 70, 35); ctx.fill(); }
    const z = 1 + 0.08 * EI(t, 0, CUTS.anat);
    ctx.save(); ctx.translate(540, 1000); ctx.scale(z, z); ctx.translate(-540, -1000);
    headProfile(ctx, 520, 1000);
    // x-ray tube from ear to throat, drawn on "tube"
    const tk = EO(t, T(0, 'tube') - 0.2, T(0, 'skull') + 0.2);
    if (tk > 0) {
      ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = PAL.tube; ctx.lineWidth = 46;
      const pts = [[640, 1030], [560, 1150], [430, 1240]];
      const seg = (k) => { ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); const n = 30; for (let i = 1; i <= n * k; i++) { const u = i / n, m = 1 - u; ctx.lineTo(m * m * pts[0][0] + 2 * m * u * pts[1][0] + u * u * pts[2][0], m * m * pts[0][1] + 2 * m * u * pts[1][1] + u * u * pts[2][1]); } ctx.stroke(); };
      seg(tk); ctx.strokeStyle = PAL.airIn; ctx.lineWidth = 14; seg(tk); ctx.restore();
    }
    ctx.restore();
    // the number
    const n = (3.5 * EO(t, T(0, 'three') - 0.1, T(0, 'centimeter'))).toFixed(1);
    const nk = pop(t, T(0, 'three') - 0.15) * bump(t, T(0, 'centimeter'));
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 420); ctx.scale(nk, nk); longShadow(ctx, (c) => text(ctx, n + ' cm', 0, 0, 170, c || PAL.ink, 700), 24); ctx.restore(); }
    pill(ctx, 'A TUBE IN YOUR SKULL', 540, 590, { k: pop(t, T(0, 'tube') - 0.15), bg: PAL.tube, col: PAL.white, size: 52 });
    // POP burst at the ear
    const pk = pop(t, T(1, 'pop') - 0.12);
    if (pk > 0.01) {
      ctx.save(); ctx.translate(820, 900); ctx.scale(pk, pk); ctx.rotate(-0.15);
      ctx.fillStyle = PAL.yellow; ctx.beginPath(); for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2, r = i % 2 ? 110 : 190; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
      text(ctx, 'POP!', 0, 6, 100, PAL.red, 700); ctx.restore();
    }
    pill(ctx, 'WHY YOUR EARS POP', 540, 1660, { k: pop(t, T(1, 'why') - 0.1), bg: PAL.ink, col: PAL.cream, size: 56 });
  };
  S.anat = (ctx, t) => {
    sky(ctx, '#fff3df', '#ffd9b0');
    earCut(ctx, t, { pin: 0.75, pout: 0.75, open: 0 });
    // tube highlight on "Eustachian"
    const hk = EO(t, T(2, 'eustachian') - 0.2, T(2, 'tube'));
    if (hk > 0 && t < CUTS.cabin) { ctx.save(); ctx.globalAlpha = 0.35 * hk * (0.7 + 0.3 * Math.sin(t * 6)); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 120; ctx.lineCap = 'round'; tubePath(ctx); ctx.stroke(); ctx.restore(); }
    big(ctx, 'EUSTACHIAN', 540, 350, 110, PAL.tube, pop(t, T(2, 'eustachian') - 0.15));
    pill(ctx, 'TUBE', 540, 470, { k: pop(t, T(2, 'tube') - 0.15), bg: PAL.tube, col: PAL.white, size: 56 });
    pill(ctx, 'MIDDLE EAR', 515, 640, { k: pop(t, T(3, 'middle') - 0.15, T(5, 'behind') - 0.3), bg: PAL.ink, col: PAL.cream, size: 44 });
    pill(ctx, 'THROAT', 360, 1640, { k: pop(t, T(4, 'throat') - 0.15), bg: '#7a2343', col: PAL.white, size: 48 });
    pill(ctx, 'EARDRUM', 820, 640, { k: pop(t, T(5, 'eardrum') - 0.15), bg: PAL.drum, col: PAL.white, size: 44 });
    pill(ctx, 'AIR POCKET', 515, 640, { k: pop(t, T(5, 'air') - 0.15), bg: PAL.orange, col: PAL.white, size: 44 });
    // balance: inside = outside
    const bk = pop(t, T(6, 'matches') - 0.15);
    if (bk > 0.01) { ctx.save(); ctx.translate(500, 1660); ctx.scale(bk, bk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -0, -60, 360, 120, 60); ctx.fill(); }, 14);
      circle(ctx, 60, 0, 26, PAL.orange); text(ctx, '=', 180, 2, 80, PAL.ink); circle(ctx, 300, 0, 26, PAL.blue); ctx.restore(); }
    pill(ctx, 'inside', 560, 1770, { k: bk, size: 36, weight: 600, sh: 8 }); pill(ctx, 'outside', 800, 1770, { k: bk, size: 36, weight: 600, sh: 8 });
  };
  S.cabin = (ctx, t) => {
    sky(ctx, '#2b5fb8', '#8fd0ff');
    // mountain with height marker
    const mk = EO(t, T(8, 'mountain') - 0.5, T(8, 'mountain') + 0.2);
    ctx.save(); ctx.translate(0, (1 - mk) * 700);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#3c4a7a'; ctx.beginPath(); ctx.moveTo(-100, 1920); ctx.lineTo(560, 900); ctx.lineTo(1200, 1920); ctx.closePath(); ctx.fill(); }, 30);
    ctx.fillStyle = PAL.white; ctx.beginPath(); ctx.moveTo(560, 900); ctx.lineTo(470, 1040); ctx.lineTo(520, 1010); ctx.lineTo(560, 1050); ctx.lineTo(600, 1010); ctx.lineTo(650, 1040); ctx.closePath(); ctx.fill();
    ctx.restore();
    // plane cruising high above
    const px = H.lerp(-200, 1250, ph(t, CUTS.cabin - 0.3, CUTS.climb + 0.3));
    planeIcon(ctx, px, 560, 1.3, -0.04);
    const ck = pop(t, T(7, 'cabin') - 0.15);
    pill(ctx, 'CABIN AIR', 540, 380, { k: ck, bg: PAL.cream, size: 56 });
    // pressure gauges: ground vs cabin
    const gk = EO(t, T(7, 'pressurized') - 0.2, T(7, 'pressurized') + 0.4);
    if (gk > 0) { ctx.save(); ctx.globalAlpha = gk; gauge(ctx, 260, 880, 1, 'GROUND', PAL.green); gauge(ctx, 820, 880, H.lerp(1, 0.75, EO(t, T(7, 'only'), T(7, 'pressurized') + 0.5)), 'CABIN', PAL.orange); ctx.restore(); }
    const n = Math.round(8000 * EO(t, T(8, 'eight') - 0.1, T(8, 'foot')) / 100) * 100;
    const nk = pop(t, T(8, 'eight') - 0.15) * bump(t, T(8, 'mountain'));
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 1300); ctx.scale(nk, nk); longShadow(ctx, (c) => text(ctx, n.toLocaleString('en-US') + ' FT', 0, 0, 150, c || PAL.yellow, 700), 24); ctx.restore(); }
    pill(ctx, 'like a mountaintop', 540, 1460, { k: pop(t, T(8, 'mountain') - 0.1), size: 44, weight: 600 });
  };
  // climb physics
  const climbState = (t) => {
    const pout = H.lerp(0.95, 0.6, EO(t, T(9, 'climb') - 0.2, T(9, 'drops') + 0.4));
    const tOpen = T(12, 'cracks') - 0.1, tPop = T(13, 'pop');
    const open = EO(t, tOpen, tOpen + 0.3) * (1 - EO(t, tPop + 0.5, tPop + 1.0));
    const pin = H.lerp(0.95, pout, EO(t, T(13, 'air') - 0.1, tPop));
    const wob = t > tPop ? 0.25 * Math.sin((t - tPop) * 30) * Math.exp(-(t - tPop) * 6) : 0;
    return { pin, pout, open, flowOut: ph(t, T(13, 'air') - 0.1, tPop + 0.1), wobble: wob };
  };
  const planeCorner = (ctx, t, ang, label, k) => { // small plane badge at the top
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, 60, 300, 330, 180, 50); ctx.fill(); }, 14);
    planeIcon(ctx, 225, 380, 0.55, ang, PAL.blue);
    pill(ctx, label, 225, 520, { k, bg: PAL.ink, col: PAL.cream, size: 40, sh: 8 });
  };
  S.climb = (ctx, t) => {
    sky(ctx, '#e6f7ff', '#a9dcff');
    const st = climbState(t);
    const b = earCut(ctx, t, st);
    planeCorner(ctx, t, -0.35 + Math.sin(t * 2) * 0.03, 'CLIMBING', pop(t, T(9, 'climb') - 0.1));
    pill(ctx, 'OUTSIDE PRESSURE DROPS', 600, 1660, { k: pop(t, T(9, 'drops') - 0.15, T(11, 'bulges') - 0.3), bg: PAL.blue, col: PAL.white, size: 46 });
    if (t > T(10, 'pushes') - 0.2 && t < T(13, 'pop')) arrow(ctx, 700, 830, 840, 830, PAL.orange, 16, EO(t, T(10, 'pushes') - 0.2, T(10, 'out')));
    pill(ctx, 'EARDRUM BULGES', 600, 1660, { k: pop(t, T(11, 'bulges') - 0.15, T(12, 'cracks') - 0.3) * bump(t, T(11, 'balloon')), bg: PAL.drum, col: PAL.white, size: 52 });
    pill(ctx, 'TUBE OPENS', 600, 1660, { k: pop(t, T(12, 'cracks') - 0.15, T(13, 'pop') - 0.2), bg: PAL.tube, col: PAL.white, size: 56 });
    const pk = pop(t, T(13, 'pop') - 0.12);
    if (pk > 0.01) { ctx.save(); ctx.translate(780, 1660); ctx.scale(pk, pk); ctx.fillStyle = PAL.yellow; ctx.beginPath(); for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2, r = i % 2 ? 100 : 170; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill(); text(ctx, 'POP!', 0, 6, 90, PAL.red, 700); ctx.restore(); }
  };
  const landState = (t) => {
    const pout = H.lerp(0.6, 1, EO(t, T(15, 'squeezes') - 0.3, T(16, 'pressure') + 0.3));
    return { pin: 0.6, pout, open: 0, squeeze: EO(t, T(16, 'pinches') - 0.2, T(16, 'shut')) };
  };
  S.land = (ctx, t) => {
    sky(ctx, '#ffe1d1', '#ffb08f');
    const st = landState(t);
    earCut(ctx, t, st);
    planeCorner(ctx, t, 0.3 + Math.sin(t * 2) * 0.03, 'LANDING', pop(t, T(14, 'landing') - 0.1));
    big(ctx, 'TRICKIER!', 720, 400, 96, PAL.red, pop(t, T(14, 'trickier') - 0.1, CUTS.yawn));
    if (t > T(15, 'squeezes') - 0.3) arrow(ctx, 900, 830, 720, 830, PAL.blue, 16, EO(t, T(15, 'squeezes') - 0.3, T(15, 'in')));
    pill(ctx, 'AIR SQUEEZES IN', 600, 1660, { k: pop(t, T(15, 'squeezes') - 0.15, T(16, 'shut') - 0.3), bg: PAL.blue, col: PAL.white, size: 52 });
    const sk = pop(t, T(16, 'shut') - 0.15) * bump(t, T(16, 'shut'));
    pill(ctx, 'TUBE PINCHED SHUT', 600, 1660, { k: sk, bg: PAL.red, col: PAL.white, size: 52 });
    if (sk > 0.01) { const [x, y] = tubePt(0.45); ctx.save(); ctx.translate(x + 110, y); ctx.scale(sk, sk); circle(ctx, 0, 0, 50, PAL.red); ctx.strokeStyle = PAL.white; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-20, -20); ctx.lineTo(20, 20); ctx.moveTo(20, -20); ctx.lineTo(-20, 20); ctx.stroke(); ctx.restore(); }
  };
  // swallow / yawn faces
  const face = (ctx, x, y, s, mode, k) => { // mode 'gulp' | 'yawn'
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { circle(ctx, 0, 0, 170, c || PAL.skin); ctx.fillStyle = c || PAL.skin; rr(ctx, -70, 120, 140, 180, 40); ctx.fill(); }, 20);
    ctx.fillStyle = '#5a3a2e'; ctx.beginPath(); ctx.arc(0, -20, 172, Math.PI * 1.05, Math.PI * 1.95); ctx.closePath(); ctx.fill();
    if (mode === 'yawn') {
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 10; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(-80, -10); ctx.lineTo(-30, -20); ctx.moveTo(80, -10); ctx.lineTo(30, -20); ctx.stroke();
      ctx.fillStyle = '#7a2343'; ctx.beginPath(); ctx.ellipse(0, 75, 45, 25 + 45 * k, 0, 0, Math.PI * 2); ctx.fill();
    } else {
      circle(ctx, -55, -15, 14, PAL.ink); circle(ctx, 55, -15, 14, PAL.ink);
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-40, 80); ctx.lineTo(40, 80); ctx.stroke();
      // gulp bead going down the neck
      if (k > 0 && k < 1) circle(ctx, 0, H.lerp(130, 290, k), 26, PAL.skinD);
    }
    ctx.restore();
  };
  S.yawn = (ctx, t) => {
    sky(ctx, '#e9e2ff', '#bfaeff');
    const gk = pop(t, T(17, 'swallow') - 0.2), yk = pop(t, T(17, 'yawn') - 0.2);
    if (gk > 0.01) { ctx.save(); ctx.translate(290, 950); ctx.scale(gk, gk); face(ctx, 0, 0, 1, 'gulp', ph(t, T(17, 'swallow'), T(17, 'swallow') + 0.8)); ctx.restore(); }
    if (yk > 0.01) { ctx.save(); ctx.translate(790, 950); ctx.scale(yk, yk); face(ctx, 0, 0, 1, 'yawn', EO(t, T(17, 'yawn'), T(17, 'yawn') + 0.5)); ctx.restore(); }
    pill(ctx, 'SWALLOW', 290, 1360, { k: gk, bg: PAL.purple, col: PAL.white, size: 56 });
    pill(ctx, 'YAWN', 790, 1360, { k: yk, bg: PAL.purple, col: PAL.white, size: 56 });
    big(ctx, 'THE FIX', 540, 470, 120, PAL.ink, pop(t, T(17, 'so') - 0.1));
    if (gk > 0.5) text(ctx, 'or', 540, 960, 64, PAL.ink, 700);
  };
  const fixState = (t) => {
    const m = EO(t, T(18, 'yank') - 0.2, T(18, 'open'));
    const fl = ph(t, T(19, 'air') - 0.1, T(19, 'in') + 0.4);
    const pin = H.lerp(0.6, 1, EO(t, T(19, 'air'), T(20, 'snaps')));
    const ts = T(20, 'snaps'); const wob = t > ts ? 0.25 * Math.sin((t - ts) * 30) * Math.exp(-(t - ts) * 6) : 0;
    return { pin, pout: 1, open: m * (1 - EO(t, T(20, 'flat') + 0.2, T(20, 'flat') + 0.8)), muscles: m, flowIn: fl, wobble: wob };
  };
  S.fix = (ctx, t) => {
    sky(ctx, '#dcfbe8', '#93e3b4');
    earCut(ctx, t, fixState(t));
    pill(ctx, 'TINY MUSCLES', 540, 400, { k: pop(t, T(18, 'muscles') - 0.15), bg: '#e8434f', col: PAL.white, size: 56 });
    pill(ctx, 'YANK IT OPEN', 600, 1660, { k: pop(t, T(18, 'yank') - 0.15, T(19, 'air') - 0.3), bg: PAL.tube, col: PAL.white, size: 52 });
    pill(ctx, 'AIR RUSHES IN', 600, 1660, { k: pop(t, T(19, 'air') - 0.15, T(20, 'snaps') - 0.3), bg: PAL.blue, col: PAL.white, size: 52 });
    pill(ctx, 'FLAT AGAIN!', 600, 1660, { k: pop(t, T(20, 'snaps') - 0.1) * bump(t, T(20, 'flat')), bg: PAL.green, col: PAL.ink, size: 64 });
  };
  S.end = (ctx, t) => {
    sky(ctx, '#ffe9a8', '#ffc65c');
    planeIcon(ctx, H.lerp(-250, 1300, ph(t, CUTS.end, DURATION)), 380, 0.9, -0.08);
    const c1 = pop(t, T(22, 'yawn') - 0.15) * bump(t, T(22, 'yawn')), c2 = pop(t, T(23, 'swallow') - 0.15) * bump(t, T(23, 'swallow'));
    if (c1 > 0.01) { ctx.save(); ctx.translate(290, 950); ctx.scale(c1, c1); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -200, -280, 400, 560, 50); ctx.fill(); }, 22); face(ctx, 0, -60, 0.8, 'yawn', 1); text(ctx, 'YAWN', 0, 210, 64, PAL.ink); ctx.restore(); }
    if (c2 > 0.01) { ctx.save(); ctx.translate(790, 950); ctx.scale(c2, c2); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -200, -280, 400, 560, 50); ctx.fill(); }, 22); face(ctx, 0, -60, 0.8, 'gulp', (t * 0.8) % 1); text(ctx, 'SWALLOW', 0, 210, 60, PAL.ink); ctx.restore(); }
    if (c1 > 0.5) text(ctx, 'or', 540, 950, 64, PAL.ink, 700);
    pill(ctx, 'NEXT FLIGHT...', 540, 560, { k: pop(t, T(21, 'next') - 0.15), bg: PAL.ink, col: PAL.cream, size: 56 });
    big(ctx, 'WHICH DO YOU DO?', 540, 1420, 88, PAL.ink, pop(t, T(23, 'or') - 0.1));
    pill(ctx, 'tell me in the comments', 540, 1560, { k: pop(t, T(23, 'swallow')), size: 42, weight: 600 });
  };

  const ORDER = [['hook', 0], ['anat', CUTS.anat], ['cabin', CUTS.cabin], ['climb', CUTS.climb], ['land', CUTS.land], ['yawn', CUTS.yawn], ['fix', CUTS.fix], ['end', CUTS.end]];
  const WIPE = 0.5;
  const SLIDE = { climb: false, fix: true, yawn: true };
  const CENTER = { anat: [820, 900] };
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
        ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, u * 1500, 0, Math.PI * 2); ctx.clip(); S[next[0]](ctx, t); ctx.restore();
        if (u > 0 && u < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(cx, cy, u * 1500, 0, Math.PI * 2); ctx.stroke(); }
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
    k.music('pulse', 0.2, D, { bpm: 104, gain: 0.28, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    // hook
    for (let f = Math.ceil((T(0, 'three') - 0.1) * 12); f < T(0, 'centimeter') * 12; f++) k.play('count', f / 12, { gain: 0.6, minor: true });
    popAt(T(0, 'three') - 0.15, 600, 0.8, 0, false); k.play('riser', T(0, 'tube') - 0.3, { dur: 0.6, gain: 0.35 }); popAt(T(0, 'tube') - 0.15, 700, 0.7, -0.3, false);
    bigPop(T(1, 'pop') - 0.05); popAt(T(1, 'why') - 0.1, 650, 0.6, 0.3);
    wipe(CUTS.anat);
    k.play('sparkle', T(2, 'eustachian') - 0.15, { n: 5, gain: 0.6 }); popAt(T(2, 'eustachian') - 0.15, 600, 0.8, 0, false); popAt(T(2, 'tube') - 0.15, 800, 0.7, 0, false);
    popAt(T(3, 'middle') - 0.15, 700, 0.6, 0.2); popAt(T(4, 'throat') - 0.15, 500, 0.6, -0.3); popAt(T(5, 'eardrum') - 0.15, 800, 0.6, 0.4); popAt(T(5, 'air') - 0.15, 650, 0.6, 0);
    k.play('ding', T(6, 'matches'), { f: 'E5', gain: 0.3 });
    wipe(CUTS.cabin);
    k.noise(CUTS.cabin, { dur: 2.5, color: 'brown', filter: 'lowpass', f: [[0, 300], [2.5, 500]], gain: 0.12, a: 0.4, verb: 0.2 });
    popAt(T(7, 'cabin') - 0.15, 650, 0.7, 0, false);
    k.tone(T(7, 'only'), { f: [[0, 500], [0.8, 330]], type: 'triangle', dur: 0.8, gain: 0.12 });
    for (let f = Math.ceil((T(8, 'eight') - 0.1) * 15); f < T(8, 'foot') * 15; f++) k.play('count', f / 15, { gain: 0.7, minor: true });
    k.play('impact', T(8, 'mountain'), { gain: 0.6 }); popAt(T(8, 'mountain') - 0.1, 500, 0.6, 0);
    wipe(CUTS.climb);
    k.play('riser', T(9, 'climb') - 0.2, { dur: 1.6, gain: 0.35 }); popAt(T(9, 'drops') - 0.15, 600, 0.7, 0, false);
    k.tone(T(10, 'pushes') - 0.1, { f: [[0, 220], [1.0, 330]], type: 'sine', dur: 1.0, gain: 0.1, minor: true });
    k.tone(T(11, 'balloon') - 0.1, { f: [[0, 700], [0.4, 1100]], type: 'sine', dur: 0.4, gain: 0.08 }); popAt(T(11, 'bulges') - 0.15, 500, 0.7, 0, false);
    popAt(T(12, 'cracks') - 0.12, 900, 0.6, -0.3, false);
    k.noise(T(13, 'air') - 0.1, { dur: 0.7, color: 'pink', filter: 'bandpass', f: [[0, 800], [0.7, 2000]], gain: 0.2, a: 0.05 });
    bigPop(T(13, 'pop') - 0.05);
    wipe(CUTS.land);
    k.tone(T(14, 'landing') - 0.1, { f: [[0, 400], [0.6, 250]], type: 'triangle', dur: 0.6, gain: 0.12 }); popAt(T(14, 'trickier') - 0.1, 520, 0.8, 0, false);
    k.noise(T(15, 'squeezes') - 0.3, { dur: 1.2, color: 'brown', filter: 'lowpass', f: [[0, 300], [1.2, 900]], gain: 0.2, a: 0.3 });
    k.play('error', T(16, 'shut') - 0.05, { f: 'A3', gain: 0.35 }); k.play('thud', T(16, 'shut'), { f: 120, gain: 0.5 });
    slide(CUTS.yawn);
    popAt(T(17, 'swallow') - 0.2, 500, 0.8, -0.4, false); k.play('thud', T(17, 'swallow') + 0.3, { f: 160, gain: 0.3 });
    popAt(T(17, 'yawn') - 0.2, 700, 0.8, 0.4, false); k.tone(T(17, 'yawn'), { f: [[0, 260], [0.7, 180]], type: 'sine', dur: 0.7, gain: 0.1 });
    slide(CUTS.fix);
    popAt(T(18, 'muscles') - 0.15, 650, 0.7, 0, false); k.play('swish', T(18, 'yank') - 0.15, { gain: 0.6 });
    k.noise(T(19, 'air') - 0.1, { dur: 0.9, color: 'pink', filter: 'bandpass', f: [[0, 2000], [0.9, 700]], gain: 0.2, a: 0.05 });
    bigPop(T(20, 'snaps') - 0.05); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => k.play('ding', T(20, 'flat') + i * 0.04, { f: n, gain: 0.3 - i * 0.05, pan: (i - 1.5) * 0.25 }));
    wipe(CUTS.end);
    popAt(T(21, 'next') - 0.15, 600, 0.7, 0, false);
    popAt(T(22, 'yawn') - 0.15, 520, 0.9, -0.5, false); popAt(T(23, 'swallow') - 0.15, 760, 0.9, 0.5, false);
    k.play('success', B[23].e + 0.1, { f: 'C6', gain: 0.4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
