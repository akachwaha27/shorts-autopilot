// ================= Low-Poly Faceted, vertical 1080x1920: "Why don't flamingos fall over standing on one leg?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take) ----------
  const BEATS = [
    { s: 0.25, e: 2.67, w: {a: 0.25, dead: 0.33, flamingo: 0.67, can: 1.33, stand: 1.59, on: 2.0, one: 2.17, leg: 2.42} }, // 0 A dead flamingo can stand on one leg.
    { s: 3.22, e: 4.21, w: {why: 3.22, cant: 3.52, you: 3.91} }, // 1 Why can't you?
    { s: 4.76, e: 8.61, w: {in: 4.76, n2017: 4.99, scientists: 5.46, in2: 6.62, atlanta: 6.86, tested: 7.67, it: 8.37} }, // 2 In 2017, scientists in Atlanta tested it.
    { s: 9.16, e: 11.04, w: {they: 9.16, propped: 9.44, up: 9.95, a: 10.1, flamingo: 10.17, body: 10.75} }, // 3 They propped up a flamingo body,
    { s: 11.34, e: 12.9, w: {and: 11.34, it: 11.56, balanced: 11.71, on: 12.31, one: 12.46, leg: 12.68} }, // 4 and it balanced on one leg,
    { s: 13.2, e: 15.08, w: {with: 13.2, no: 13.5, muscles: 13.65, working: 14.18, at: 14.71, all: 14.86} }, // 5 with no muscles working at all.
    { s: 15.63, e: 16.62, w: {heres: 15.63, the: 16.01, trick: 16.24} }, // 6 Here's the trick.
    { s: 17.17, e: 18.94, w: {that: 17.17, bendy: 17.48, joint: 17.86, isnt: 18.25, a: 18.55, knee: 18.63} }, // 7 That bendy joint isn't a knee.
    { s: 19.49, e: 20.43, w: {its: 19.49, the: 19.75, ankle: 20.0} }, // 8 It's the ankle.
    { s: 20.98, e: 23.27, w: {the: 20.98, real: 21.18, knee: 21.45, is: 21.72, hidden: 21.85, up: 22.26, in: 22.39, the2: 22.53, feathers: 22.73} }, // 9 The real knee is hidden up in the feathers.
    { s: 23.82, e: 25.71, w: {when: 23.82, a: 24.13, flamingo: 24.21, lifts: 24.84, one: 25.24, leg: 25.47} }, // 10 When a flamingo lifts one leg,
    { s: 26.01, e: 27.23, w: {it: 26.01, shifts: 26.17, its: 26.66, body: 26.91} }, // 11 it shifts its body,
    { s: 27.53, e: 29.47, w: {so: 27.53, its: 27.66, weight: 27.85, sits: 28.22, right: 28.47, over: 28.79, the: 29.04, foot: 29.22} }, // 12 so its weight sits right over the foot.
    { s: 30.02, e: 32.84, w: {that: 30.02, weight: 30.28, pushes: 30.66, the: 31.05, joints: 31.24, into: 31.62, a: 31.88, locked: 31.94, position: 32.33} }, // 13 That weight pushes the joints into a locked position,
    { s: 33.14, e: 35.09, w: {like: 33.14, a: 33.41, folding: 33.48, chair: 33.95, clicking: 34.28, open: 34.82} }, // 14 like a folding chair clicking open.
    { s: 35.64, e: 37.83, w: {no: 35.64, muscles: 35.81, needed: 36.4, just: 36.9, gravity: 37.24} }, // 15 No muscles needed, just gravity.
    { s: 38.38, e: 40.46, w: {live: 38.38, flamingos: 38.71, even: 39.46, sway: 39.8, less: 40.13} }, // 16 Live flamingos even sway less
    { s: 40.76, e: 42.14, w: {when: 40.76, theyre: 41.04, fast: 41.45, asleep: 41.72} }, // 17 when they're fast asleep.
    { s: 42.69, e: 43.79, w: {but: 42.69, on: 42.96, two: 43.14, legs: 43.42} }, // 18 But on two legs,
    { s: 44.09, e: 45.7, w: {the: 44.09, dead: 44.29, bird: 44.56, couldnt: 44.83, stay: 45.3, up: 45.57} }, // 19 the dead bird couldn't stay up.
    { s: 46.25, e: 49.8, w: {for: 46.25, a: 46.54, flamingo: 46.64, one: 47.4, leg: 47.69, is: 47.98, the: 48.17, lazy: 48.46, way: 48.84, to: 49.13, stand: 49.32} }, // 20 For a flamingo, one leg is the lazy way to stand.
    { s: 50.35, e: 52.08, w: {for: 50.35, you: 50.57, its: 50.8, a: 51.03, muscle: 51.1, workout: 51.55} }, // 21 For you, it's a muscle workout.
    { s: 52.63, e: 54.77, w: {so: 52.63, how: 52.78, long: 53.01, can: 53.32, you: 53.55, stand: 53.78, on: 54.16, one: 54.31, leg: 54.54} }, // 22 So how long can you stand on one leg?
  ];
  const P = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes (facet-flip wipes): dawn lagoon (hook) -> lab (2017 test) -> day lagoon (anatomy zoom, then the lock) -> night lagoon (asleep) -> lab (two legs) -> dawn lagoon (end)
  const CUT = { lab: 4.45, day: 15.33, night: 38.08, lab2: 42.4, end: 45.95 };
  const CUTS = [CUT.lab, CUT.day, CUT.night, CUT.lab2, CUT.end];
  const WIPE = 0.55;

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const BK = (t, a, d = 0.3) => H.ease.back(ph(t, a, a + d));
  const win = (t, a, b, fi = 0.3, fo = 0.3) => H.ease.back(ph(t, a, a + fi)) * (1 - H.ease.inOut(ph(t, b, b + fo)));
  const INK = '#2a1f4f', CORAL = '#ff7060', PEACH = '#ffb08a', MINT = '#3ccf9a';
  const FONT = (px) => `700 ${px}px "Space Grotesk"`;
  // cut-corner tag (faceted label), from the reference
  function lpTag(ctx, x, y, text, o = {}) {
    const k = o.k ?? 1; if (k <= 0.01) return;
    ctx.save();
    ctx.font = o.font || FONT(48);
    const fsz = parseInt((ctx.font.match(/(\d+)px/) || [0, 48])[1]);
    const w = ctx.measureText(text).width + fsz * 1.3, h = o.h || Math.round(fsz * 1.75), ch = h * 0.32;
    ctx.translate(x, y); ctx.scale(k, k);
    const pts = [[-w / 2 + ch, -h / 2], [w / 2, -h / 2], [w / 2, h / 2 - ch], [w / 2 - ch, h / 2], [-w / 2, h / 2], [-w / 2, -h / 2 + ch]];
    ctx.fillStyle = o.shadow || 'rgba(40,20,70,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 6, p[1] + 6) : ctx.moveTo(p[0] + 6, p[1] + 6)); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || '#fff6f0');
    ctx.fillStyle = H.rgba(bg); ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(bg, [255, 255, 255], 0.5)); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(w / 2 - h * 0.6, 0); ctx.lineTo(-w / 2, 0); ctx.lineTo(pts[5][0], pts[5][1]); ctx.closePath(); ctx.fill();
    ctx.fillStyle = o.col || INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 0, 2);
    ctx.restore();
  }
  // faceted ribbon arrow, from the reference
  function lpArrow(ctx, a, c, b, prog, colA, w = 18) {
    if (prog <= 0) return null;
    const q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]];
    const N = 8, pts = []; for (let i = 0; i <= N; i++) pts.push(q(prog * i / N));
    const light = H.rgba(H.mix(colA, [255, 255, 255], 0.3)), dark = H.rgba(H.mix(colA, [40, 20, 70], 0.25));
    const end = pts.length - 1;
    for (let i = 0; i < end; i++) {
      const p0 = pts[i], p1 = pts[i + 1], dx = p1[0] - p0[0], dy = p1[1] - p0[1], L = Math.hypot(dx, dy) || 1;
      const nx = -dy / L * w / 2, ny = dx / L * w / 2, shrink = i === end - 1 ? 0.35 : 0, p1b = [p1[0] - dx * shrink, p1[1] - dy * shrink];
      ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(p0[0] + nx, p0[1] + ny); ctx.lineTo(p1b[0] + nx, p1b[1] + ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
      ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(p0[0] - nx, p0[1] - ny); ctx.lineTo(p1b[0] - nx, p1b[1] - ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
    }
    const e = pts[end], e0 = pts[end - 1], ang = Math.atan2(e[1] - e0[1], e[0] - e0[0]);
    ctx.save(); ctx.translate(e[0], e[1]); ctx.rotate(ang);
    ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-w * 1.4, -w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-w * 1.4, w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.restore(); return q;
  }
  // hex badge (check / cross), from the reference
  function hexBadge(ctx, x, y, k, ok, r = 46) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(0.12);
    ctx.fillStyle = ok ? MINT : '#ff5a4a'; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.moveTo(0, 0); for (let i = 3; i <= 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = r * 0.2; ctx.lineJoin = 'miter'; ctx.beginPath(); const s = r / 24;
    if (ok) { ctx.moveTo(-10 * s, 0); ctx.lineTo(-3 * s, 8 * s); ctx.lineTo(11 * s, -9 * s); } else { ctx.moveTo(-8 * s, -8 * s); ctx.lineTo(8 * s, 8 * s); ctx.moveTo(8 * s, -8 * s); ctx.lineTo(-8 * s, 8 * s); }
    ctx.stroke(); ctx.restore();
  }
  function tri2(ctx, a, b, c, col) { ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  function gem(ctx, x, y, r, c, rot = 0) { // small faceted diamond
    const col = Array.isArray(c) ? c : H.hex(c), L = H.rgba(H.mix(col, [255, 255, 255], 0.35)), D = H.rgba(H.mix(col, [40, 20, 70], 0.25)), M = H.rgba(col);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    tri2(ctx, [0, -r], [r * 0.7, 0], [0, 0], L); tri2(ctx, [0, -r], [-r * 0.7, 0], [0, 0], M); tri2(ctx, [-r * 0.7, 0], [0, r], [0, 0], D); tri2(ctx, [r * 0.7, 0], [0, r], [0, 0], M);
    ctx.restore();
  }
  function hexKnob(ctx, x, y, r, col, glow = 0) {
    if (glow > 0.01) { const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 3.2); g.addColorStop(0, `rgba(255,240,200,${0.7 * glow})`); g.addColorStop(1, 'rgba(255,240,200,0)'); ctx.fillStyle = g; ctx.fillRect(x - r * 3.4, y - r * 3.4, r * 6.8, r * 6.8); }
    for (let i = 0; i < 6; i++) { const a0 = i / 6 * Math.PI * 2 + 0.3, a1 = (i + 1) / 6 * Math.PI * 2 + 0.3; tri2(ctx, [x, y], [x + Math.cos(a0) * r, y + Math.sin(a0) * r], [x + Math.cos(a1) * r, y + Math.sin(a1) * r], H.rgba(H.mix(col, [255, 255, 255], 0.15 + 0.3 * Math.cos(a0 + 2.2)))); }
  }
  function bigNumber(ctx, x, y, str, px, k, fill = '#fff') {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.font = FONT(px); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(30,20,60,0.5)'; ctx.fillText(str, 8, 8); ctx.lineJoin = 'round'; ctx.lineWidth = px * 0.11; ctx.strokeStyle = INK; ctx.strokeText(str, 0, 0); ctx.fillStyle = fill; ctx.fillText(str, 0, 0);
    ctx.restore();
  }

  // =================== THE FLAMINGO (2D faceted, local units: standing foot at 0,0, head ~920 up) ===================
  const PINK = [255, 138, 160], PINK_L = [255, 196, 204], PINK_D = [214, 82, 118], LEGC = [240, 116, 142], BEAKC = [250, 222, 220], BLACK = [40, 30, 52], BONE = [250, 240, 222];
  const LIGHT_DIR = -2.3; // up-left
  const shadeAng = (a) => 0.5 + 0.5 * Math.cos(a - LIGHT_DIR);
  // body mesh: two rings of jittered points around a tilted ellipse, pre-triangulated (cached)
  const BODY = (() => {
    const r = H.rng(41), N = 14, out = [], inner = [];
    const pt = (a, k) => { let rx = 165, ry = 92; if (Math.cos(a) < -0.6) rx *= 1 + 0.32 * Math.pow((-Math.cos(a) - 0.6) / 0.4, 2); const x = Math.cos(a) * rx * k, y = Math.sin(a) * ry * k, tl = 0.16; return [x * Math.cos(tl) - y * Math.sin(tl), x * Math.sin(tl) + y * Math.cos(tl)]; };
    for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2; out.push(pt(a, 1 + r.range(-0.05, 0.05))); inner.push(pt(a + Math.PI / N, 0.55 + r.range(-0.05, 0.05))); }
    const tris = [];
    for (let i = 0; i < N; i++) { const j = (i + 1) % N; tris.push([out[i], out[j], inner[i]], [out[j], inner[j], inner[i]], [inner[i], inner[j], [0, 0]]); }
    return tris.map((f) => { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; return { f, a: Math.atan2(cy, cx), d: Math.hypot(cx, cy), j: 0.93 + r() * 0.12 }; });
  })();
  // folded wing on the back: a fan of darker coral facets + black flight-feather tips at the tail
  const WING = [[[-150, -6], [-40, -64], [-60, 4]], [[-40, -64], [70, -44], [-60, 4]], [[-60, 4], [70, -44], [40, 18]], [[-150, -6], [-60, 4], [-120, 30]], [[-60, 4], [40, 18], [-120, 30]]];
  const TIPS = [[[-150, -6], [-205, 18], [-120, 30]], [[-170, 6], [-222, 34], [-140, 34]]];
  function seg(ctx, a, b, w0, w1, col, dark = 0) {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
    const p = [[a[0] + nx * w0, a[1] + ny * w0], [b[0] + nx * w1, b[1] + ny * w1], [b[0] - nx * w1, b[1] - ny * w1], [a[0] - nx * w0, a[1] - ny * w0]];
    const lit = H.mix(col, [255, 255, 255], 0.18), shd = H.mix(col, [60, 20, 60], 0.22 + dark);
    tri2(ctx, a, p[0], p[1], H.rgba(H.mix(lit, [60, 20, 60], dark))); tri2(ctx, a, p[1], b, H.rgba(H.mix(lit, [60, 20, 60], dark)));
    tri2(ctx, a, b, p[2], H.rgba(shd)); tri2(ctx, a, p[2], p[3], H.rgba(shd));
  }
  // geometry of the bird for a given pose (local units)
  function birdGeo(o) {
    const lift = o.lift || 0, shift = o.shift || 0, tuck = o.tuck || 0;
    const C = [H.lerp(42, 0, shift) + (o.bodyDx || 0), -540];
    const knee1 = [C[0] + 34, C[1] + 78], knee2 = [C[0] + 4, C[1] + 80];
    const foot1 = [0, 0], foot2d = [84, 0];
    const ankle1 = [(knee1[0] + foot1[0]) / 2 - 16, -262];
    const ankle2d = [(knee2[0] + foot2d[0]) / 2 - 16, -262];
    const ankle2u = [C[0] - 44, C[1] + 250], foot2u = [C[0] + 70, C[1] + 120];
    const L2 = H.ease.inOut(lift);
    const ankle2 = [H.lerp(ankle2d[0], ankle2u[0], L2), H.lerp(ankle2d[1], ankle2u[1], L2) - Math.sin(L2 * Math.PI) * 40];
    const foot2 = [H.lerp(foot2d[0], foot2u[0], L2), H.lerp(foot2d[1], foot2u[1], L2) - Math.sin(L2 * Math.PI) * 80];
    const hip1 = [C[0] - 10, C[1] + 20], hip2 = [C[0] - 26, C[1] + 22];
    const lerp2 = (a, b, u) => [H.lerp(a[0], b[0], u), H.lerp(a[1], b[1], u)];
    const T = H.ease.inOut(tuck);
    const N0 = [C[0] + 130, C[1] - 34];
    const c1 = lerp2([C[0] + 205, C[1] - 130], [C[0] + 175, C[1] - 110], T), c2 = lerp2([C[0] + 30, C[1] - 250], [C[0] + 70, C[1] - 190], T);
    const Hd = lerp2([C[0] + 104, C[1] - 380], [C[0] - 40, C[1] - 108], T);
    return { C, knee1, knee2, ankle1, ankle2, foot1, foot2, hip1, hip2, N0, c1, c2, Hd, T };
  }
  function drawLeg(ctx, hip, knee, ankle, foot, dark, showFoot = true) {
    seg(ctx, knee, ankle, 13, 11, LEGC, dark);
    seg(ctx, ankle, foot, 11, 9, LEGC, dark);
    hexKnob(ctx, ankle[0], ankle[1], 17, H.mix(LEGC, [60, 20, 60], dark));
    if (showFoot) { // webbed foot pointing forward (+x)
      const f = foot, c = H.mix(LEGC, [60, 20, 60], dark + 0.08);
      tri2(ctx, [f[0] - 14, f[1] - 6], [f[0] + 62, f[1] + 2], [f[0] + 4, f[1] + 10], H.rgba(H.mix(c, [255, 255, 255], 0.15)));
      tri2(ctx, [f[0] - 14, f[1] - 6], [f[0] + 50, f[1] + 14], [f[0] - 4, f[1] + 12], H.rgba(c));
      tri2(ctx, [f[0] - 6, f[1] - 4], [f[0] - 30, f[1] + 8], [f[0] - 4, f[1] + 8], H.rgba(H.mix(c, [60, 20, 60], 0.2)));
    }
  }
  // o: { x, y, s, lift, shift, tuck, eyes: 'open'|'closed', rot (topple, around foot2), sway (around foot1), bodyA, xray, flip }
  // returns map(localPoint) -> screen, and the geometry
  function drawFlamingo(ctx, o) {
    const g = birdGeo(o), s = o.s || 1;
    ctx.save(); ctx.translate(o.x, o.y);
    if (o.flipY) ctx.scale(1, -1);
    ctx.scale(s, s);
    if (o.sway) ctx.rotate(o.sway);
    if (o.rot) { ctx.translate(84, 0); ctx.rotate(o.rot); ctx.translate(-84, 0); }
    const mapLocal = (p) => { let [x, y] = p; if (o.rot) { const c = Math.cos(o.rot), sn = Math.sin(o.rot), dx = x - 84; [x, y] = [84 + dx * c - y * sn, dx * sn + y * c]; } if (o.sway) { const c = Math.cos(o.sway), sn = Math.sin(o.sway); [x, y] = [x * c - y * sn, x * sn + y * c]; } return [o.x + x * s, o.y + y * s * (o.flipY ? -1 : 1)]; };
    // far leg (leg 2) behind the body
    drawLeg(ctx, g.hip2, g.knee2, g.ankle2, g.foot2, 0.2, (o.lift || 0) < 0.7);
    if ((o.lift || 0) >= 0.7) { const f = g.foot2, c = H.mix(LEGC, [60, 20, 60], 0.3); tri2(ctx, [f[0] - 10, f[1] - 8], [f[0] + 40, f[1] - 2], [f[0] + 2, f[1] + 10], H.rgba(c)); }
    // near leg (leg 1, the standing one)
    drawLeg(ctx, g.hip1, g.knee1, g.ankle1, g.foot1, 0);
    // body
    const bodyA = o.bodyA ?? 1;
    ctx.save(); ctx.globalAlpha *= bodyA;
    // tail plume + neck behind body front
    const C = g.C;
    for (const b of BODY) {
      const sh = shadeAng(b.a) * (0.55 + 0.45 * H.clamp(b.d / 120));
      let col = H.mix(PINK_D, PINK_L, H.clamp(sh * 0.9 + 0.05)); col = col.map((v) => Math.min(255, v * b.j));
      tri2(ctx, [C[0] + b.f[0][0], C[1] + b.f[0][1]], [C[0] + b.f[1][0], C[1] + b.f[1][1]], [C[0] + b.f[2][0], C[1] + b.f[2][1]], H.rgba(col));
    }
    WING.forEach((f, i) => tri2(ctx, [C[0] + f[0][0], C[1] + f[0][1]], [C[0] + f[1][0], C[1] + f[1][1]], [C[0] + f[2][0], C[1] + f[2][1]], H.rgba(H.mix([236, 92, 112], [255, 150, 160], (i % 3) * 0.3))));
    TIPS.forEach((f, i) => tri2(ctx, [C[0] + f[0][0], C[1] + f[0][1]], [C[0] + f[1][0], C[1] + f[1][1]], [C[0] + f[2][0], C[1] + f[2][1]], H.rgba(H.mix(BLACK, [90, 70, 100], i * 0.4))));
    // neck: sampled bezier ribbon
    const NS = 12, np = [];
    for (let i = 0; i <= NS; i++) { const u = i / NS, a = 1 - u; np.push([a * a * a * g.N0[0] + 3 * a * a * u * g.c1[0] + 3 * a * u * u * g.c2[0] + u * u * u * g.Hd[0], a * a * a * g.N0[1] + 3 * a * a * u * g.c1[1] + 3 * a * u * u * g.c2[1] + u * u * u * g.Hd[1]]); }
    for (let i = 0; i < NS; i++) seg(ctx, np[i], np[i + 1], H.lerp(38, 20, i / NS), H.lerp(38, 20, (i + 1) / NS), H.mix(PINK, PINK_L, 0.25 + 0.15 * (i % 2)), 0);
    // head + beak
    const Hd = g.Hd, ha = H.lerp(0, 2.75, g.T);
    ctx.save(); ctx.translate(Hd[0], Hd[1]); ctx.rotate(ha);
    for (let i = 0; i < 7; i++) { const a0 = i / 7 * Math.PI * 2, a1 = (i + 1) / 7 * Math.PI * 2; tri2(ctx, [0, 0], [Math.cos(a0) * 34, Math.sin(a0) * 30], [Math.cos(a1) * 34, Math.sin(a1) * 30], H.rgba(H.mix(PINK, PINK_L, shadeAng(a0) * 0.8))); }
    tri2(ctx, [20, -18], [70, -8], [24, 14], H.rgba(BEAKC)); tri2(ctx, [24, 14], [70, -8], [60, 16], H.rgba(H.mix(BEAKC, [180, 140, 150], 0.3)));
    tri2(ctx, [70, -8], [88, 14], [60, 16], H.rgba(BLACK)); tri2(ctx, [60, 16], [88, 14], [74, 40], H.rgba(H.mix(BLACK, [90, 70, 100], 0.3)));
    if (o.eyes === 'closed' || g.T > 0.5) { ctx.strokeStyle = H.rgba(BLACK); ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-2, -8); ctx.lineTo(16, -6); ctx.stroke(); }
    else { gem(ctx, 6, -8, 9, [255, 220, 120]); gem(ctx, 7, -8, 5, BLACK); }
    ctx.restore();
    ctx.restore(); // bodyA
    // x-ray: the hidden thigh bone + the real knee, drawn through the feathers
    if (o.xray > 0.01) {
      ctx.save(); ctx.globalAlpha *= o.xray;
      seg(ctx, g.hip1, g.knee1, 12, 10, BONE, 0);
      hexKnob(ctx, g.hip1[0], g.hip1[1], 15, [230, 220, 200]);
      hexKnob(ctx, g.knee1[0], g.knee1[1], 22, [255, 214, 120], o.kneeGlow || 0);
      ctx.restore();
    }
    ctx.restore();
    return { map: mapLocal, g };
  }

  // =================== BACKDROPS (cached faceted mosaics) ===================
  const BG = {};
  function mosaicLayer(key, top, bot, glow, glowCol, y1 = HH, cs = 120) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 31 + 7), nx = Math.ceil(W / cs) + 1, ny = Math.ceil(HH / cs) + 1, V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.4, 0.4) * cs : 0), j * cs + (j > 0 && j < ny ? r.range(-0.4, 0.4) * cs : 0)]); V.push(row); }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1];
      for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) {
        const cy = (f[0][1] + f[1][1] + f[2][1]) / 3, cx = (f[0][0] + f[1][0] + f[2][0]) / 3;
        let col = H.mix(top, bot, H.clamp(cy / y1));
        const gl = Math.max(0, 1 - Math.hypot(cx - glow[0], cy - glow[1]) / 700);
        col = H.mix(col, glowCol, gl * 0.45);
        col = col.map((v) => v * (0.94 + r() * 0.1));
        tri2(g, f[0], f[1], f[2], H.rgba(col));
      }
    }
    return (BG[key] = c);
  }
  function stars(ctx, n, ymax, seed, a0 = 0.8) { const R0 = H.rng(seed); for (let i = 0; i < n; i++) { const x = R0() * W, y = R0() * ymax, a = (1 - y / ymax) * R0() * a0; ctx.fillStyle = `rgba(255,240,255,${a})`; const s = R0() < 0.15 ? 4 : 2; ctx.fillRect(x, y, s, s); } }
  function facetSun(ctx, x, y, r, c0, c1, halo) {
    const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 6); g.addColorStop(0, halo); g.addColorStop(1, 'rgba(255,214,160,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    for (let i = 0; i < 14; i++) { const a0 = (i / 14) * Math.PI * 2, a1 = ((i + 1) / 14) * Math.PI * 2; tri2(ctx, [x, y], [x + Math.cos(a0) * r, y + Math.sin(a0) * r], [x + Math.cos(a1) * r, y + Math.sin(a1) * r], H.rgba(H.mix(c0, c1, 0.5 + 0.5 * Math.cos(a0 - 2.3)))); }
  }
  // distant faceted ridge line + lagoon water (cached per palette)
  function lagoonLayer(key, pal) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 13 + 3), nz = H.makeNoise(key.length + 5);
    // ridge
    const HOR = 1180, xs = []; for (let x = -40; x <= W + 80; x += 90) xs.push([x, HOR - 60 - Math.max(0, nz.n2(x * 0.004, 1.3)) * 260 - r() * 40]);
    for (let i = 0; i < xs.length - 1; i++) {
      const a = xs[i], b = xs[i + 1], m = [(a[0] + b[0]) / 2, HOR + 10];
      tri2(g, a, b, m, H.rgba(H.mix(pal.ridge, pal.ridgeL, 0.3 + r() * 0.4))); tri2(g, a, m, [a[0], HOR + 10], H.rgba(H.mix(pal.ridge, [30, 20, 60], 0.15))); tri2(g, b, [b[0], HOR + 10], m, H.rgba(H.mix(pal.ridge, [30, 20, 60], 0.25)));
    }
    // lagoon water: faceted band, perspective-stretched rows
    const rows = [HOR, 1240, 1320, 1420, 1540, 1680, 1840, 1980], V = [];
    for (let j = 0; j < rows.length; j++) { const row = [], cs = 70 + j * 30; for (let x = -cs; x <= W + cs; x += cs) row.push([x + (j > 0 ? r.range(-0.3, 0.3) * cs : 0), rows[j] + (j > 0 ? r.range(-12, 12) : 0)]); V.push(row); }
    for (let j = 0; j < rows.length - 1; j++) {
      const A = V[j], B = V[j + 1];
      let ia = 0, ib = 0;
      while (ia < A.length - 1 || ib < B.length - 1) {
        let f;
        if (ib >= B.length - 1 || (ia < A.length - 1 && A[ia + 1][0] < B[ib + 1][0])) { f = [A[ia], A[ia + 1], B[ib]]; ia++; } else { f = [A[ia], B[ib + 1], B[ib]]; ib++; }
        const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3;
        let col = H.mix(pal.waterFar, pal.waterNear, H.clamp((cy - HOR) / 700));
        const gl = Math.max(0, 1 - Math.abs(cx - pal.sunX) / 260) * (1 - H.clamp((cy - HOR) / 900));
        col = H.mix(col, pal.glint, gl * (0.35 + r() * 0.4));
        col = col.map((v) => v * (0.93 + r() * 0.12));
        tri2(g, f[0], f[1], f[2], H.rgba(col));
      }
    }
    return (BG[key] = c);
  }
  const PAL_DAWN = { top: [27, 35, 80], bot: [255, 176, 138], ridge: [120, 84, 140], ridgeL: [170, 110, 160], waterFar: [236, 150, 160], waterNear: [96, 92, 170], glint: [255, 236, 200], sunX: 300 };
  const PAL_DAY = { top: [90, 150, 220], bot: [255, 214, 190], ridge: [110, 140, 150], ridgeL: [150, 170, 170], waterFar: [190, 214, 230], waterNear: [70, 130, 180], glint: [255, 250, 230], sunX: 820 };
  const PAL_NIGHT = { top: [8, 12, 36], bot: [64, 52, 120], ridge: [34, 30, 70], ridgeL: [54, 46, 96], waterFar: [70, 60, 130], waterNear: [18, 22, 60], glint: [210, 214, 255], sunX: 800 };
  function lagoon(ctx, t, pal, key) {
    ctx.drawImage(mosaicLayer(key + 'sky', pal.top, pal.bot, [pal.sunX, 1080], pal.glint, 1200), 0, 0);
    if (key === 'night') { stars(ctx, 120, 900, 5, 1); facetSun(ctx, 900, 330, 64, [214, 220, 255], [255, 255, 255], 'rgba(200,210,255,0.35)'); }
    else if (key === 'dawn') { stars(ctx, 70, 380, 77, 0.7); facetSun(ctx, pal.sunX, 1060, 80, [255, 212, 154], [255, 244, 216], 'rgba(255,214,160,0.5)'); }
    else facetSun(ctx, pal.sunX, 420, 70, [255, 236, 170], [255, 252, 230], 'rgba(255,240,190,0.35)');
    ctx.drawImage(lagoonLayer(key + 'lag', pal), 0, 0);
  }
  // ripples around a foot in the water (faceted ring of gems), pure function of t
  function ripples(ctx, x, y, t, s = 1, col = [255, 246, 240]) {
    for (let k = 0; k < 2; k++) {
      const u = ((t * 0.45 + k * 0.5) % 1), rx = (50 + u * 150) * s, a = (1 - u) * 0.6;
      ctx.save(); ctx.globalAlpha = a;
      for (let i = 0; i < 12; i++) { const an = i / 12 * Math.PI * 2; gem(ctx, x + Math.cos(an) * rx, y + Math.sin(an) * rx * 0.22, 7 * s, col, an); }
      ctx.restore();
    }
  }
  // reflection of the bird in the lagoon (flipped, faded, under the foot line)
  function reflected(ctx, o, alpha = 0.22) {
    ctx.save(); ctx.beginPath(); ctx.rect(0, o.y, W, HH - o.y); ctx.clip(); ctx.globalAlpha = alpha;
    drawFlamingo(ctx, Object.assign({}, o, { flipY: true, xray: 0 }));
    ctx.restore();
  }

  // =================== LAB (the 2017 test) ===================
  let BENCH = null;
  function labBack(ctx, t) {
    ctx.drawImage(mosaicLayer('lab', [30, 26, 76], [120, 92, 170], [540, 820], [255, 196, 214], HH), 0, 0);
    // ceiling lamp + a soft faceted beam
    ctx.save(); ctx.fillStyle = 'rgba(255,226,206,0.08)'; ctx.beginPath(); ctx.moveTo(470, 190); ctx.lineTo(610, 190); ctx.lineTo(980, 1500); ctx.lineTo(100, 1500); ctx.closePath(); ctx.fill(); ctx.restore();
    tri2(ctx, [440, 200], [640, 200], [540, 120], '#4a3f84'); tri2(ctx, [440, 200], [540, 200], [500, 236], '#ffe6c8'); tri2(ctx, [540, 200], [640, 200], [580, 236], '#ffd4a8');
    if (!BENCH) {
      const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(717);
      const xs = []; for (let x = -60; x <= W + 120; x += 120) xs.push(x);
      for (let i = 0; i < xs.length - 1; i++) {
        const a = xs[i], b = xs[i + 1];
        tri2(g, [a, 1500], [b, 1500], [a + 40, 1560], H.rgba(H.mix([236, 222, 246], [210, 196, 230], r())));
        tri2(g, [b, 1500], [b + 40, 1560], [a + 40, 1560], H.rgba(H.mix([214, 200, 236], [190, 176, 220], r())));
        tri2(g, [a + 40, 1560], [b + 40, 1560], [a + 40, 1740], H.rgba(H.mix([96, 78, 150], [80, 64, 132], r())));
        tri2(g, [b + 40, 1560], [b + 40, 1740], [a + 40, 1740], H.rgba(H.mix([76, 62, 128], [66, 52, 116], r())));
      }
      g.fillStyle = '#2c2460'; g.fillRect(0, 1740, W, HH - 1740);
      BENCH = c;
    }
    ctx.drawImage(BENCH, 0, 0);
  }
  function stand(ctx, armY, clampX, open) {
    const px = 920;
    tri2(ctx, [px - 70, 1500], [px + 70, 1500], [px + 50, 1470], '#5b4c9a'); tri2(ctx, [px - 70, 1500], [px + 50, 1470], [px - 50, 1470], '#7a69b8');
    tri2(ctx, [px - 14, 1480], [px + 14, 1480], [px + 14, armY], '#6c5ca8'); tri2(ctx, [px - 14, 1480], [px - 14, armY], [px + 14, armY], '#9d8cd6');
    tri2(ctx, [clampX, armY - 14], [px + 14, armY - 14], [px + 14, armY + 14], '#9d8cd6'); tri2(ctx, [clampX, armY - 14], [px + 14, armY + 14], [clampX, armY + 14], '#6c5ca8');
    hexKnob(ctx, px, armY, 24, [190, 176, 230]);
    const o = open * 34;
    tri2(ctx, [clampX - 40, armY + 6], [clampX - 6, armY + 6], [clampX - 30 - o, armY + 76], '#c9bcef');
    tri2(ctx, [clampX + 6, armY + 6], [clampX + 40, armY + 6], [clampX + 30 + o, armY + 76], '#a596da');
  }
  function sceneLab(ctx, t) {
    labBack(ctx, t);
    const kOut = 1 - EI(t, 9.0, 9.35);
    bigNumber(ctx, 540, 640, '2017', 220, BK(t, P(2, 'n2017') - 0.15, 0.35) * kOut, PEACH);
    if (kOut > 0.01) {
      const kA = BK(t, P(2, 'atlanta') - 0.12) * kOut;
      lpTag(ctx, 540, 780, 'ATLANTA, USA', { k: kA, font: FONT(64), bg: '#fff6f0' });
      if (kA > 0.01) gem(ctx, 540 - 270 * kA, 780, 34 * kA, [255, 112, 96]);
      lpTag(ctx, 540, 930, 'SCIENTISTS TEST IT', { k: BK(t, P(2, 'tested') - 0.12) * kOut, font: FONT(56), bg: INK, col: '#fff' });
    }
    if (t < 9.25) return;
    const drop = H.ease.out(ph(t, 9.3, 10.5));
    const by = H.lerp(-120, 1500, drop), bx = 440;
    const rel = t - 11.85, sway = rel > 0 ? 0.03 * Math.sin(rel * 5.2) * Math.exp(-rel * 1.1) : 0;
    const f = drawFlamingo(ctx, { x: bx, y: by, s: 1, lift: 1, shift: 1, eyes: 'closed', sway });
    const bodyTop = f.map([0, -640])[1];
    const open = EO(t, 11.6, 11.85), up = EI(t, 11.85, 12.6);
    stand(ctx, H.lerp(bodyTop - 70, 520, up), bx + 10, open);
    lpTag(ctx, 540, 380, 'A FLAMINGO BODY', { k: win(t, P(3, 'flamingo') - 0.12, P(4, 'balanced') - 0.4), font: FONT(58), bg: '#fff6f0' });
    const kB = BK(t, P(4, 'balanced') - 0.12);
    lpTag(ctx, 540, 380, 'BALANCED ON 1 LEG', { k: kB, font: FONT(58), bg: MINT, col: '#fff' });
    hexBadge(ctx, 880, 300, BK(t, P(4, 'leg') - 0.1), true, 44);
    lpTag(ctx, 540, 1610, 'ZERO MUSCLE EFFORT', { k: BK(t, P(5, 'no') - 0.12), font: FONT(60), bg: CORAL, col: '#fff' });
  }

  // =================== DAY LAGOON: the anatomy zoom, then the lock ===================
  function dayCam(t) {
    const zin = EI(t, 16.7, 17.4), zout = EI(t, 23.3, 24.2), z = zin * (1 - zout);
    return { x: H.lerp(470, 476, z), y: H.lerp(1480, 1576, z), s: H.lerp(1, 1.6, z) };
  }
  // faceted folding chair inset: legs cross like an X and click open
  function chairPanel(ctx, t, k) {
    if (k <= 0.01) return;
    const cx = 236, cy = 640;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(k, k);
    const pw = 330, phh = 360, c2 = 30;
    ctx.fillStyle = 'rgba(40,20,70,0.35)'; ctx.beginPath(); ctx.moveTo(-pw / 2 + c2 + 8, -phh / 2 + 8); ctx.lineTo(pw / 2 + 8, -phh / 2 + 8); ctx.lineTo(pw / 2 + 8, phh / 2 - c2 + 8); ctx.lineTo(pw / 2 - c2 + 8, phh / 2 + 8); ctx.lineTo(-pw / 2 + 8, phh / 2 + 8); ctx.lineTo(-pw / 2 + 8, -phh / 2 + c2 + 8); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#fff6f0'; ctx.beginPath(); ctx.moveTo(-pw / 2 + c2, -phh / 2); ctx.lineTo(pw / 2, -phh / 2); ctx.lineTo(pw / 2, phh / 2 - c2); ctx.lineTo(pw / 2 - c2, phh / 2); ctx.lineTo(-pw / 2, phh / 2); ctx.lineTo(-pw / 2, -phh / 2 + c2); ctx.closePath(); ctx.fill();
    const u = H.ease.back(ph(t, P(14, 'folding') - 0.1, P(14, 'open'))), ang = H.lerp(0.06, 0.62, H.clamp(u, 0, 1.15));
    const fy = 120, L = 250, piv = [0, fy - L / 2 * Math.cos(ang)];
    const legA0 = [piv[0] - Math.sin(ang) * L / 2, piv[1] - Math.cos(ang) * L / 2], legA1 = [piv[0] + Math.sin(ang) * L / 2, piv[1] + Math.cos(ang) * L / 2];
    const legB0 = [piv[0] + Math.sin(ang) * L / 2, piv[1] - Math.cos(ang) * L / 2], legB1 = [piv[0] - Math.sin(ang) * L / 2, piv[1] + Math.cos(ang) * L / 2];
    seg(ctx, legB0, legB1, 11, 11, [120, 104, 200], 0.15);
    seg(ctx, [legA0[0] - 20, legA0[1]], [legB0[0] + 20, legB0[1]], 13, 13, [255, 160, 110], 0); // seat
    seg(ctx, legA0, legA1, 11, 11, [150, 134, 230], 0);
    hexKnob(ctx, piv[0], piv[1], 14, [255, 214, 120], u > 0.95 ? 1 - ph(t, P(14, 'open') + 0.1, P(14, 'open') + 0.8) : 0);
    ctx.font = FONT(40); ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.fillText('folding chair', 0, -phh / 2 + 52);
    ctx.restore();
    lpTag(ctx, cx + 120, cy + 170, 'CLICK!', { k: BK(t, P(14, 'open') - 0.1), font: FONT(56), bg: CORAL, col: '#fff' });
  }
  function sceneDay(ctx, t) {
    const cam = dayCam(t);
    lagoon(ctx, t, PAL_DAY, 'day');
    const lift = ph(t, P(10, 'lifts') - 0.15, P(10, 'leg') + 0.1), shift = EI(t, P(11, 'shifts') - 0.1, P(11, 'body') + 0.3);
    const xr = Math.max(EI(t, P(9, 'real') - 0.15, P(9, 'knee')) * (1 - EI(t, 23.1, 23.5)), EI(t, P(13, 'joints') - 0.2, P(13, 'joints') + 0.2) * (1 - EI(t, P(15, 'gravity') + 0.4, P(15, 'gravity') + 0.9)));
    const o = { x: cam.x, y: cam.y, s: cam.s, lift, shift, eyes: 'open', bodyA: 1 - 0.55 * xr, xray: xr, kneeGlow: EO(t, P(9, 'knee') - 0.1, P(9, 'knee') + 0.3) * (1 - ph(t, 22.6, 23.2)) + EO(t, P(13, 'locked') - 0.15, P(13, 'locked') + 0.2) * (1 - ph(t, 34.0, 35.0)) };
    reflected(ctx, o);
    ripples(ctx, cam.x + 10 * cam.s, cam.y, t, cam.s);
    const f = drawFlamingo(ctx, o), g = f.g;
    const A = f.map(g.ankle1), K = f.map(g.knee1), Cm = f.map(g.C), F1 = f.map(g.foot1);
    lpTag(ctx, 540, 360, 'THE TRICK', { k: win(t, P(6, 'heres') - 0.12, P(7, 'that') - 0.3), font: FONT(64), bg: INK, col: '#fff' });
    // the "knee" that isn't
    const kQ = win(t, P(7, 'bendy') - 0.15, 23.1);
    if (kQ > 0.01) {
      lpArrow(ctx, [800, 1100], [700, 1060], [A[0] + 30, A[1] - 10], EI(t, P(7, 'bendy') - 0.15, P(7, 'joint')) * (1 - ph(t, 23.1, 23.4)), [255, 246, 240], 18);
      const isAnkle = t > P(8, 'ankle') - 0.12;
      lpTag(ctx, 850, 1140, isAnkle ? 'ANKLE' : 'KNEE?', { k: kQ * (isAnkle ? BK(t, P(8, 'ankle') - 0.12) : 1), font: FONT(80), bg: isAnkle ? MINT : '#fff6f0', col: isAnkle ? '#fff' : INK });
      if (!isAnkle) hexBadge(ctx, 990, 1060, BK(t, P(7, 'isnt') - 0.1), false, 40);
      else hexBadge(ctx, 990, 1060, BK(t, P(8, 'ankle') - 0.05) * (1 - ph(t, 23.1, 23.4)), true, 40);
    }
    // the real knee, up in the feathers
    const kK = win(t, P(9, 'knee') - 0.15, 23.0);
    if (kK > 0.01) {
      lpArrow(ctx, [820, 680], [760, 760], [K[0] + 26, K[1]], EI(t, P(9, 'knee') - 0.15, P(9, 'knee') + 0.3) * (1 - ph(t, 23.0, 23.3)), [255, 214, 120], 18);
      lpTag(ctx, 830, 620, 'REAL KNEE', { k: kK, font: FONT(72), bg: '#ffd478' });
      lpTag(ctx, 830, 740, 'in the feathers', { k: win(t, P(9, 'feathers') - 0.12, 23.0), font: FONT(44), bg: '#fff6f0' });
    }
    // centre of mass: shifts over the foot
    const kW = win(t, P(12, 'weight') - 0.15, P(14, 'like') - 0.35);
    if (t > P(11, 'shifts') - 0.2 && t < P(12, 'weight') + 0.3) {
      lpArrow(ctx, [Cm[0] + 120, Cm[1] - 150], [Cm[0] + 40, Cm[1] - 190], [Cm[0] - 60, Cm[1] - 150], EI(t, P(11, 'shifts') - 0.2, P(11, 'body')) * (1 - ph(t, P(12, 'weight'), P(12, 'weight') + 0.3)), [255, 246, 240], 16);
      lpTag(ctx, 540, 360, 'SHIFT', { k: win(t, P(11, 'shifts') - 0.12, P(12, 'weight') - 0.1), font: FONT(64), bg: INK, col: '#fff' });
    }
    if (kW > 0.01) {
      const plumb = EI(t, P(12, 'sits') - 0.1, P(12, 'foot'));
      ctx.save(); ctx.globalAlpha *= kW;
      if (plumb > 0) lpArrow(ctx, [Cm[0], Cm[1] + 20], [Cm[0], (Cm[1] + F1[1]) / 2], [Cm[0], H.lerp(Cm[1] + 40, F1[1] - 30, 1)], plumb, [255, 214, 120], 14);
      hexKnob(ctx, Cm[0], Cm[1], 26, [255, 196, 90], 0.8);
      ctx.restore();
      lpTag(ctx, 220, 900, 'WEIGHT', { k: kW, font: FONT(60), bg: '#ffd478' });
      hexBadge(ctx, F1[0] + 110, F1[1] - 70, BK(t, P(12, 'foot') - 0.05), true, 40);
      lpTag(ctx, 540, 360, 'RIGHT OVER THE FOOT', { k: win(t, P(12, 'right') - 0.12, P(13, 'that') - 0.2), font: FONT(56), bg: '#fff6f0' });
    }
    // the lock
    const kL = win(t, P(13, 'locked') - 0.12, P(15, 'gravity') + 0.4);
    if (kL > 0.01) {
      for (const p of [A, K]) { hexBadge(ctx, p[0] + 52, p[1] - 30, kL * 0.8, true, 30); }
      lpTag(ctx, 840, 1160, 'LOCKED', { k: kL, font: FONT(80), bg: MINT, col: '#fff' });
    }
    lpTag(ctx, 540, 360, 'PUSHES THE JOINTS', { k: win(t, P(13, 'pushes') - 0.12, P(14, 'like') - 0.2), font: FONT(56), bg: INK, col: '#fff' });
    if (t > P(13, 'pushes') - 0.2 && t < P(14, 'like')) lpArrow(ctx, [Cm[0] + 200, Cm[1] - 200], [Cm[0] + 210, Cm[1] - 80], [Cm[0] + 200, Cm[1] + 40], EI(t, P(13, 'pushes') - 0.15, P(13, 'joints')) * (1 - ph(t, P(14, 'like') - 0.3, P(14, 'like'))), [255, 214, 120], 18);
    chairPanel(ctx, t, win(t, P(14, 'like') - 0.15, P(15, 'no') - 0.3));
    // no muscles, just gravity
    lpTag(ctx, 540, 350, 'NO MUSCLES', { k: win(t, P(15, 'no') - 0.12, 99), font: FONT(62), bg: '#fff6f0' });
    const kG = BK(t, P(15, 'gravity') - 0.12, 0.35);
    if (kG > 0.01) {
      lpTag(ctx, 540, 466, 'JUST GRAVITY', { k: kG, font: FONT(66), bg: CORAL, col: '#fff' });
      for (const x of [150, 930]) for (let i = 0; i < 3; i++) { const y0 = 820 + i * 170 + ((t * 120) % 170); lpArrow(ctx, [x, y0 - 60], [x, y0], [x, y0 + 60], EO(t, P(15, 'gravity') - 0.12 + i * 0.08, P(15, 'gravity') + 0.25 + i * 0.08), [255, 214, 120], 16); }
    }
  }

  // =================== NIGHT LAGOON: asleep on one leg ===================
  function swayRow(ctx, y, label, amp, freq, t, k, bg, col) {
    if (k <= 0.01) return;
    ctx.save(); ctx.globalAlpha *= H.clamp(k);
    const x0 = 420, x1 = 960, cx = (x0 + x1) / 2;
    tri2(ctx, [x0, y - 8], [x1, y - 8], [x1, y + 8], 'rgba(255,246,240,0.55)'); tri2(ctx, [x0, y - 8], [x1, y + 8], [x0, y + 8], 'rgba(255,246,240,0.35)');
    for (let i = 0; i <= 6; i++) { const x = H.lerp(x0, x1, i / 6); tri2(ctx, [x - 4, y - 22], [x + 4, y - 22], [x, y - 8], 'rgba(255,246,240,0.6)'); }
    gem(ctx, cx + Math.sin(t * freq) * amp, y, 40, col, 0);
    ctx.restore();
    lpTag(ctx, 230, y, label, { k, font: FONT(48), bg, col: bg === INK ? '#fff' : INK });
  }
  function sceneNight(ctx, t) {
    lagoon(ctx, t, PAL_NIGHT, 'night');
    const o = { x: 480, y: 1480, s: 1, lift: 1, shift: 1, tuck: 1, eyes: 'closed', sway: 0.006 * Math.sin(t * 1.3) };
    reflected(ctx, o, 0.18);
    ripples(ctx, 490, 1480, t, 1, [210, 214, 255]);
    const f = drawFlamingo(ctx, o);
    const hd = f.map(f.g.Hd);
    swayRow(ctx, 470, 'AWAKE', 230, 4.2, t, BK(t, P(16, 'sway') - 0.12), '#fff6f0', [255, 160, 120]);
    swayRow(ctx, 640, 'ASLEEP', 45, 2.2, t, BK(t, P(16, 'less') - 0.12), INK, [150, 200, 255]);
    hexBadge(ctx, 990, 560, BK(t, P(17, 'asleep') - 0.1), true, 42);
    lpTag(ctx, 540, 330, 'LESS SWAY', { k: BK(t, P(16, 'less') - 0.1), font: FONT(64), bg: MINT, col: '#fff' });
    // Zzz: faceted letters drifting up from the tucked head
    const kz = EO(t, P(17, 'fast') - 0.2, P(17, 'asleep') + 0.3);
    if (kz > 0.01) for (let i = 0; i < 3; i++) { const u = ((t - P(17, 'fast')) * 0.5 + i / 3) % 1; ctx.save(); ctx.globalAlpha = kz * (1 - u) ; ctx.font = FONT(54 + i * 10); ctx.fillStyle = '#e8ecff'; ctx.textAlign = 'center'; ctx.fillText('z', hd[0] + 60 + u * 70 + i * 20, hd[1] - 70 - u * 90); ctx.restore(); }
  }

  // =================== LAB 2: two legs, and it falls ===================
  function sceneLab2(ctx, t) {
    labBack(ctx, t);
    stand(ctx, 520, 450, 1);
    const rot = 1.25 * H.ease.in(ph(t, P(19, 'couldnt') - 0.1, P(19, 'up') + 0.15));
    drawFlamingo(ctx, { x: 440, y: 1500, s: 1, lift: 0, shift: 0, eyes: 'closed', rot });
    lpTag(ctx, 540, 380, 'ON TWO LEGS?', { k: BK(t, P(18, 'two') - 0.12), font: FONT(66), bg: '#fff6f0' });
    hexBadge(ctx, 880, 300, BK(t, P(19, 'stay') - 0.1), false, 44);
    lpTag(ctx, 540, 1610, 'IT FALLS OVER', { k: BK(t, P(19, 'stay') - 0.12), font: FONT(66), bg: CORAL, col: '#fff' });
  }

  // =================== DAWN LAGOON: HOOK + END ===================
  function header(ctx, t) {
    const k = EO(t, 2.9, 3.3); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 214, "WHY FLAMINGOS DON'T FALL", { font: FONT(42), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  function sceneHook(ctx, t) {
    lagoon(ctx, t, PAL_DAWN, 'dawn');
    const o = { x: 470, y: 1490, s: 1, lift: 1, shift: 1, eyes: 'open', sway: 0.01 * Math.sin(t * 1.1) };
    reflected(ctx, o);
    ripples(ctx, 480, 1490, t, 1);
    const f = drawFlamingo(ctx, o), A = f.map(f.g.ankle1);
    lpTag(ctx, 540, 400, 'A DEAD FLAMINGO', { k: BK(t, P(0, 'dead') - 0.15), font: FONT(66), bg: '#fff6f0' });
    const k1 = BK(t, P(0, 'one') - 0.12, 0.35);
    if (k1 > 0.01) { lpArrow(ctx, [800, 1240], [700, 1240], [A[0] + 30, A[1] + 30], EI(t, P(0, 'one') - 0.12, P(0, 'leg')), [255, 246, 240], 18); lpTag(ctx, 840, 1180, '1 LEG', { k: k1, font: FONT(110), h: 170, bg: CORAL, col: '#fff' }); }
    lpTag(ctx, 540, 1580, "WHY CAN'T YOU?", { k: BK(t, P(1, 'why') - 0.12), font: FONT(80), bg: INK, col: '#fff' });
  }
  function sceneEnd(ctx, t) {
    lagoon(ctx, t, PAL_DAWN, 'dawn');
    const tt = t - CUT.end, s = H.lerp(1, 0.85, EI(tt, 0, 2.5));
    const o = { x: 480, y: H.lerp(1490, 1520, EI(tt, 0, 2.5)), s, lift: 1, shift: 1, eyes: 'open', sway: 0.01 * Math.sin(t * 1.1) };
    reflected(ctx, o);
    ripples(ctx, 480 + 10 * s, o.y, t, s);
    const f = drawFlamingo(ctx, o), A = f.map(f.g.ankle1);
    const kOut = 1 - EI(t, P(22, 'so') - 0.4, P(22, 'so'));
    const k1 = BK(t, P(20, 'one') - 0.12, 0.35) * kOut;
    if (k1 > 0.01) { lpArrow(ctx, [800, 1240], [700, 1240], [A[0] + 30, A[1] + 30], EI(t, P(20, 'one') - 0.12, P(20, 'leg')) * kOut, [255, 246, 240], 18); lpTag(ctx, 840, 1180, '1 LEG', { k: k1, font: FONT(100), h: 160, bg: CORAL, col: '#fff' }); }
    lpTag(ctx, 540, 360, 'FLAMINGO: LAZY MODE', { k: BK(t, P(20, 'lazy') - 0.12) * kOut, font: FONT(58), bg: MINT, col: '#fff' });
    lpTag(ctx, 540, 480, 'YOU: MUSCLE WORKOUT', { k: BK(t, P(21, 'muscle') - 0.12) * kOut, font: FONT(58), bg: '#ffd478' });
    lpTag(ctx, 540, 330, 'How long can YOU', { k: BK(t, P(22, 'how') - 0.1), font: FONT(76), bg: INK, col: '#fff' });
    lpTag(ctx, 540, 480, 'stand on one leg?', { k: BK(t, P(22, 'stand') - 0.12), font: FONT(84), h: 150, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 1600, 'your time in the comments', { k: BK(t, P(22, 'leg') - 0.05), font: FONT(48), bg: '#fff6f0' });
  }

  // =================== composition + facet-flip wipes ===================
  let LAYER = null, MOS = null;
  function mosaic() {
    if (MOS) return MOS;
    const r = H.rng(808), cs = 135, nx = 8, ny = 15, V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.35, 0.35) * cs : 0), j * (HH / ny) + (j > 0 && j < ny ? r.range(-0.35, 0.35) * cs : 0)]); V.push(row); }
    const tr = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; for (const f of (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]) { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; tr.push({ f, cx, cy, d: (cy / HH) * 0.75 + (cx / W) * 0.12 + r() * 0.13 }); } }
    return (MOS = tr);
  }
  function scene(ctx, t) {
    if (t < CUT.lab) sceneHook(ctx, t);
    else if (t < CUT.day) sceneLab(ctx, t);
    else if (t < CUT.night) sceneDay(ctx, t);
    else if (t < CUT.lab2) sceneNight(ctx, t);
    else if (t < CUT.end) sceneLab2(ctx, t);
    else sceneEnd(ctx, t);
  }
  function explainer(ctx, W_, H_, t) {
    ctx.save(); ctx.lineJoin = 'round';
    let wipe = null;
    for (const c of CUTS) if (t >= c && t < c + WIPE) wipe = c;
    if (wipe != null) {
      scene(ctx, wipe - 0.001);
      if (!LAYER) LAYER = H.layer(W, HH);
      const lc = LAYER.getContext('2d'); lc.setTransform(1, 0, 0, 1, 0, 0); lc.clearRect(0, 0, W, HH); lc.lineJoin = 'round'; scene(lc, t);
      const u = (t - wipe) / WIPE;
      ctx.save(); ctx.beginPath();
      const flashes = [];
      for (const m of mosaic()) {
        const p = H.ease.out(H.clamp((u * 1.35 - m.d) / 0.35)); if (p <= 0) continue;
        const f = m.f.map((q) => [m.cx + (q[0] - m.cx) * p, m.cy + (q[1] - m.cy) * p]);
        ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath();
        if (p < 1) flashes.push([f, 1 - p]);
      }
      ctx.clip(); ctx.drawImage(LAYER, 0, 0); ctx.restore();
      for (const [f, a] of flashes) { ctx.fillStyle = `rgba(255,214,200,${a * 0.7})`; ctx.beginPath(); ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath(); ctx.fill(); }
    } else scene(ctx, t);
    header(ctx, t);
    ctx.restore();
  }

  // thumbnail still: the dawn lagoon, the one-legged flamingo and 3 huge words
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    lagoon(ctx, 0, PAL_DAWN, 'dawn');
    const o = { x: 470, y: 1490, s: 1, lift: 1, shift: 1, eyes: 'open' };
    reflected(ctx, o); drawFlamingo(ctx, o);
    lpTag(ctx, 540, 330, 'ONE-LEG', { font: FONT(130), h: 200, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 1600, 'LOCK', { font: FONT(130), h: 200, bg: INK, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, lagoon water, lab clanks, gusts of dawn air ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const gust = (t0, t1, g = 1) => { const d = t1 - t0, steps = [260, 420, 610, 470, 300]; steps.forEach((f, i) => { const s = t0 + (d * i) / steps.length, dd = (d / steps.length) * 1.9; k.noise(s, { dur: dd, color: 'pink', filter: 'bandpass', f: [[0, f], [dd, f * 1.25]], q: 1.4, gain: 0.04 * g * Math.sin(((i + 0.5) / steps.length) * Math.PI), a: dd * 0.45, verb: 0.15 }); }); };
    const lap = (t0, t1, seed) => { const r = H.rng(seed); for (let t = t0; t < t1; t += r.range(0.7, 1.3)) k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: r.range(500, 900), q: 1.0, gain: 0.03, a: 0.2, pan: r.range(-0.5, 0.5), minor: true }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const clank = (t, g = 1, p = 0) => { k.play('click', t, { gain: 0.6 * g, pan: p }); k.tone(t, { f: 1450, type: 'triangle', dur: 0.25, gain: 0.04 * g, pan: p, verb: 0.3 }); };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 92, gain: 0.22, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    // hook: dawn lagoon
    lap(0, CUT.lab, 3); gust(0, 2.2, 0.8);
    glass(0.2, 'D4', 1.1, 0, 1.4); glass(0.2, 'A3', 0.8, 0, 1.4);
    facet(P(0, 'dead') - 0.12, 560, 1);
    k.play('impact', P(0, 'one') - 0.1, { gain: 0.8 }); glass(P(0, 'one'), 'D5', 1, 0.3, 1.2);
    k.noise(P(0, 'one') - 0.1, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.06, a: 0.25, pan: 0.3, minor: true }); // ribbon arrow
    facet(2.95, 470, 0.9); // header
    k.play('riser', P(1, 'why') - 0.45, { dur: 0.45, gain: 0.4 }); facet(P(1, 'why') - 0.1, 600, 1); glass(P(1, 'you'), 'F#5', 0.8, 0, 1.0);
    // lab: 2017
    wipe(CUT.lab);
    k.withMinor(() => { for (let i = 0; i < 10; i++) k.play('tick', P(2, 'n2017') - 0.12 + i * 0.04, { f: 1800 + i * 90, gain: 0.5 }); });
    k.play('impact', P(2, 'n2017') + 0.25, { gain: 0.8 }); glass(P(2, 'n2017') + 0.25, 'A4', 1, 0, 1.2);
    facet(P(2, 'atlanta') - 0.12, 520, 1, -0.2); k.play('pop', P(2, 'atlanta') - 0.05, { gain: 0.5, minor: true });
    facet(P(2, 'tested') - 0.12, 600, 0.9, 0.2);
    k.play('whoosh', 9.0, { dur: 0.4, gain: 0.3 });
    k.noise(9.3, { dur: 1.1, color: 'pink', filter: 'bandpass', f: [[0, 1200], [1.1, 400]], q: 1.2, gain: 0.05, a: 0.3, minor: true }); // lowered in on the stand
    k.play('thud', 10.45, { f: 130, gain: 0.5 }); clank(10.5, 0.8, 0.4);
    facet(P(3, 'flamingo') - 0.12, 500, 0.9);
    clank(11.6, 1, 0.4); k.tone(11.85, { f: [[0, 300], [0.7, 520]], type: 'triangle', dur: 0.75, gain: 0.05, pan: 0.4 }); // clamp lets go, arm rises
    for (let i = 0; i < 4; i++) k.play('tock', 12.0 + i * 0.6, { f: 380 - i * 30, gain: 0.3 * (1 - i * 0.2), minor: true }); // the body settles: a few soft wobbles
    facet(P(4, 'balanced') - 0.12, 560, 1); k.play('success', P(4, 'leg'), { f: 'D5', gain: 0.4 });
    k.play('stamp', P(5, 'no') - 0.08, { gain: 0.5 }); glass(P(5, 'muscles'), 'A5', 0.7, 0, 0.8);
    // day lagoon: anatomy zoom
    wipe(CUT.day); lap(CUT.day, CUT.night, 9);
    facet(P(6, 'heres') - 0.12, 470, 0.9);
    gust(16.7, 17.6, 0.9);
    k.noise(P(7, 'bendy') - 0.15, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.06, a: 0.25, pan: 0.3, minor: true });
    facet(P(7, 'joint') - 0.1, 520, 1, 0.3);
    k.play('error', P(7, 'isnt') - 0.05, { f: 'G3', gain: 0.6, pan: 0.4 });
    facet(P(8, 'ankle') - 0.12, 600, 1, 0.3); k.play('success', P(8, 'ankle') - 0.02, { f: 'D5', gain: 0.4, pan: 0.4 });
    k.play('sparkle', P(9, 'real') - 0.1, { n: 6, gain: 0.6 }); glass(P(9, 'knee'), 'F#5', 1, 0.3, 1.2); facet(P(9, 'knee') - 0.1, 560, 1, 0.3);
    facet(P(9, 'feathers') - 0.1, 470, 0.7, 0.3, true);
    gust(23.3, 24.3, 0.8);
    // the lift, the shift, the lock
    k.play('swish', P(10, 'lifts') - 0.1, { gain: 0.5 }); k.noise(P(10, 'lifts'), { dur: 0.3, color: 'pink', filter: 'bandpass', f: 1600, q: 1.5, gain: 0.04, minor: true }); // a drip off the lifted foot
    k.play('swish', P(11, 'shifts') - 0.05, { gain: 0.45 }); facet(P(11, 'shifts') - 0.1, 470, 0.8, 0, true);
    facet(P(12, 'weight') - 0.12, 420, 1, -0.4); glass(P(12, 'weight'), 'D4', 0.8, -0.2, 1);
    k.noise(P(12, 'sits') - 0.1, { dur: 1.0, color: 'pink', filter: 'bandpass', f: [[0, 1300], [1.0, 450]], q: 1.4, gain: 0.06, a: 0.3, minor: true }); // plumb ribbon falls to the foot
    k.play('success', P(12, 'foot'), { f: 'D5', gain: 0.4 });
    facet(P(13, 'pushes') - 0.12, 470, 0.9);
    k.play('thud', P(13, 'joints') - 0.05, { f: 120, gain: 0.5 });
    k.play('click', P(13, 'locked') - 0.03, { gain: 0.9 }); k.play('impact', P(13, 'locked') - 0.02, { gain: 0.8 }); ['D4', 'A4', 'D5'].forEach((n, i) => glass(P(13, 'locked') + i * 0.03, n, 1.2 - i * 0.2, (i - 1) * 0.3, 1.3));
    facet(P(14, 'like') - 0.12, 520, 0.9, -0.4);
    k.tone(P(14, 'folding') - 0.1, { f: [[0, 220], [1.2, 440]], type: 'triangle', dur: 1.3, gain: 0.05, pan: -0.4 }); // chair legs swinging apart
    k.play('click', P(14, 'open') - 0.05, { gain: 1.0, pan: -0.4 }); k.play('pop', P(14, 'open') - 0.03, { gain: 0.7, pan: -0.4 }); glass(P(14, 'open'), 'A5', 0.9, -0.4, 0.8);
    facet(P(15, 'no') - 0.12, 560, 1);
    k.play('riser', P(15, 'gravity') - 0.5, { dur: 0.45, gain: 0.4 }); k.play('impact', P(15, 'gravity') - 0.1, { gain: 1.0 }); ['D4', 'A4', 'D5', 'F#5'].forEach((n, i) => glass(P(15, 'gravity') + i * 0.03, n, 1.3 - i * 0.2, (i - 1.5) * 0.25, 1.4));
    // night
    wipe(CUT.night); lap(CUT.night, CUT.lab2, 21);
    k.tone(CUT.night + 0.2, { f: 'D3', type: 'triangle', dur: 2.5, gain: 0.08, a: 0.5 });
    facet(P(16, 'sway') - 0.12, 470, 0.9, -0.3);
    for (let i = 0; i < 5; i++) k.play('tick', P(16, 'sway') + i * 0.75, { f: 900, gain: 0.25, minor: true });
    facet(P(16, 'less') - 0.12, 560, 1, -0.3); glass(P(16, 'less'), 'B4', 0.8, 0, 1.0);
    k.play('success', P(17, 'asleep') - 0.05, { f: 'D5', gain: 0.4, pan: 0.4 }); glass(P(17, 'fast'), 'F#5', 0.5, 0, 1.4, true); glass(P(17, 'asleep') + 0.3, 'A5', 0.5, 0, 1.4, true);
    // lab 2: two legs falls
    wipe(CUT.lab2);
    facet(P(18, 'two') - 0.12, 520, 1);
    k.play('swish', P(19, 'couldnt'), { gain: 0.5 }); k.play('thud', P(19, 'up') + 0.15, { f: 100, gain: 0.8 }); k.noise(P(19, 'up') + 0.15, { dur: 0.35, color: 'brown', filter: 'lowpass', f: 500, gain: 0.15 });
    k.play('error', P(19, 'stay') - 0.05, { f: 'G3', gain: 0.8 });
    // end
    wipe(CUT.end); lap(CUT.end, D, 33); gust(CUT.end, CUT.end + 2.5, 0.7);
    facet(P(20, 'one') - 0.12, 600, 1, 0.3); k.noise(P(20, 'one') - 0.1, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.06, a: 0.25, pan: 0.3, minor: true });
    facet(P(20, 'lazy') - 0.12, 520, 1); glass(P(20, 'lazy'), 'A4', 0.8, 0, 1.0);
    facet(P(21, 'muscle') - 0.12, 470, 1); k.play('jump', P(21, 'workout'), { gain: 0.25 });
    k.play('whoosh', P(22, 'so') - 0.3, { dur: 0.4, gain: 0.3 });
    facet(P(22, 'how') - 0.1, 470, 1); facet(P(22, 'stand') - 0.1, 560, 1);
    ['A4', 'D5'].forEach((n, i) => glass(P(22, 'leg') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(22, 'leg'), { f: 'D3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
