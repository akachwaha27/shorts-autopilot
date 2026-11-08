// ================= Low-Poly Faceted, vertical 1080x1920: "Why do flamingos eat with their heads upside down?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take) ----------
  const BEATS = [
    { s: 0.25, e: 2.85, w: {youve: 0.25, never: 0.6, seen: 0.95, a: 1.23, flamingo: 1.3, eat: 1.86, rightside: 2.07, up: 2.7} }, // 0 You've never seen a flamingo eat right-side up.
    { s: 3.4, e: 5.4, w: {it: 3.4, feeds: 3.54, with: 3.9, its: 4.18, head: 4.4, upside: 4.69, down: 5.12} }, // 1 It feeds with its head upside down,
    { s: 5.7, e: 7.71, w: {because: 5.7, its: 6.17, beak: 6.37, is: 6.64, built: 6.77, backwards: 7.11} }, // 2 because its beak is built backwards.
    { s: 8.26, e: 10.16, w: {most: 8.26, birds: 8.58, have: 8.97, a: 9.29, big: 9.37, top: 9.61, beak: 9.84} }, // 3 Most birds have a big top beak,
    { s: 10.46, e: 11.9, w: {and: 10.46, a: 10.68, smaller: 10.75, bottom: 11.25, one: 11.68} }, // 4 and a smaller bottom one.
    { s: 12.45, e: 14.75, w: {a: 12.45, flamingos: 12.53, is: 13.27, the: 13.43, other: 13.68, way: 14.09, round: 14.34} }, // 5 A flamingo's is the other way round.
    { s: 15.3, e: 16.73, w: {so: 15.3, it: 15.44, flips: 15.59, its: 15.94, head: 16.16, over: 16.44} }, // 6 So it flips its head over,
    { s: 17.03, e: 19.8, w: {and: 17.03, the: 17.23, big: 17.44, lower: 17.64, beak: 17.98, skims: 18.25, the2: 18.59, water: 18.79, like: 19.13, a: 19.4, scoop: 19.46} }, // 7 and the big lower beak skims the water like a scoop.
    { s: 20.35, e: 23.77, w: {inside: 20.35, the: 20.82, edges: 21.05, are: 21.44, lined: 21.67, with: 22.06, tiny: 22.37, comblike: 22.68, plates: 23.3} }, // 8 Inside, the edges are lined with tiny comb-like plates.
    { s: 24.32, e: 25.89, w: {then: 24.32, the: 24.56, tongue: 24.74, starts: 25.1, pumping: 25.47} }, // 9 Then the tongue starts pumping,
    { s: 26.19, e: 28.15, w: {about: 26.19, four: 26.55, or: 26.84, five: 26.99, times: 27.28, a: 27.64, second: 27.71} }, // 10 about four or five times a second,
    { s: 28.45, e: 29.64, w: {like: 28.45, a: 28.73, little: 28.8, piston: 29.22} }, // 11 like a little piston.
    { s: 30.19, e: 32.14, w: {water: 30.19, squirts: 30.52, out: 30.97, through: 31.17, the: 31.62, combs: 31.82} }, // 12 Water squirts out through the combs,
    { s: 32.44, e: 35.03, w: {and: 32.44, tiny: 32.65, shrimp: 32.93, and2: 33.35, algae: 33.56, get: 33.91, trapped: 34.12, inside: 34.61} }, // 13 and tiny shrimp and algae get trapped inside.
    { s: 35.58, e: 37.53, w: {flamingos: 35.58, even: 36.25, stomp: 36.55, in: 36.93, the: 37.08, mud: 37.3} }, // 14 Flamingos even stomp in the mud,
    { s: 37.83, e: 40.08, w: {to: 37.83, stir: 37.96, up: 38.23, little: 38.36, whirlpools: 38.76, full: 39.42, of: 39.69, food: 39.82} }, // 15 to stir up little whirlpools full of food.
    { s: 40.63, e: 42.07, w: {and: 40.63, those: 40.83, shrimp: 41.16, and2: 41.55, algae: 41.74} }, // 16 And those shrimp and algae?
    { s: 42.62, e: 44.36, w: {theyre: 42.62, packed: 42.99, with: 43.37, pink: 43.61, pigments: 43.86} }, // 17 They're packed with pink pigments.
    { s: 44.91, e: 46.75, w: {thats: 44.91, what: 45.25, turns: 45.52, a: 45.86, flamingo: 45.93, pink: 46.48} }, // 18 That's what turns a flamingo pink.
    { s: 47.3, e: 49.04, w: {so: 47.3, would: 47.45, you: 47.83, eat: 48.06, upside: 48.28, down: 48.74} }, // 19 So, would you eat upside down,
    { s: 49.34, e: 50.55, w: {if: 49.34, it: 49.48, turned: 49.63, you: 50.05, pink: 50.26} }, // 20 if it turned you pink?
  ];
  const P = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in ' + i); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes: dawn lagoon (hook) -> beak panels -> day lagoon (flip + scoop) -> inside the beak -> mud stomp -> gold lagoon (pink) -> dawn (question)
  const CUT = { beaks: BEATS[3].s - 0.3, scoop: BEATS[6].s - 0.3, inside: BEATS[8].s - 0.3, mud: BEATS[14].s - 0.3, pink: BEATS[16].s - 0.3, end: BEATS[19].s - 0.3 };
  const CUTS = [CUT.beaks, CUT.scoop, CUT.inside, CUT.mud, CUT.pink, CUT.end];
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
  const PK0 = { PINK: [255, 138, 160], PINK_L: [255, 196, 204], PINK_D: [214, 82, 118], LEGC: [240, 116, 142] };
  let PALEK = 0, PINK = PK0.PINK, PINK_L = PK0.PINK_L, PINK_D = PK0.PINK_D, LEGC = PK0.LEGC;
  const BEAKC = [250, 222, 220], BLACK = [40, 30, 52], BONE = [250, 240, 222];
  // pale = 0 full pink, 1 a washed-out greyish white bird (no pigment yet)
  function setPale(k) { PALEK = k; const P = (c, w) => H.mix(c, w, k); PINK = P(PK0.PINK, [236, 228, 226]); PINK_L = P(PK0.PINK_L, [250, 246, 244]); PINK_D = P(PK0.PINK_D, [196, 184, 190]); LEGC = P(PK0.LEGC, [214, 196, 196]); }
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
    let Hd = lerp2([C[0] + 104, C[1] - 380], [C[0] - 40, C[1] - 108], T);
    let c1f = c1, c2f = c2;
    const FD = H.ease.inOut(o.feed || 0);
    if (FD > 0) { // feeding: neck arcs forward and down, head lands upside down at the waterline in front of the feet
      c1f = lerp2(c1, [C[0] + 300, C[1] - 150], FD); c2f = lerp2(c2, [C[0] + 360, (o.headY ?? -30) - 260], FD); Hd = lerp2(Hd, [C[0] + 250, (o.headY ?? -30)], FD);
    }
    return { C, knee1, knee2, ankle1, ankle2, foot1, foot2, hip1, hip2, N0, c1: c1f, c2: c2f, Hd, T, FD };
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
    WING.forEach((f, i) => tri2(ctx, [C[0] + f[0][0], C[1] + f[0][1]], [C[0] + f[1][0], C[1] + f[1][1]], [C[0] + f[2][0], C[1] + f[2][1]], H.rgba(H.mix(H.mix([236, 92, 112], [255, 150, 160], (i % 3) * 0.3), [232, 224, 224], PALEK))));
    TIPS.forEach((f, i) => tri2(ctx, [C[0] + f[0][0], C[1] + f[0][1]], [C[0] + f[1][0], C[1] + f[1][1]], [C[0] + f[2][0], C[1] + f[2][1]], H.rgba(H.mix(BLACK, [90, 70, 100], i * 0.4))));
    // neck: sampled bezier ribbon
    const NS = 12, np = [];
    for (let i = 0; i <= NS; i++) { const u = i / NS, a = 1 - u; np.push([a * a * a * g.N0[0] + 3 * a * a * u * g.c1[0] + 3 * a * u * u * g.c2[0] + u * u * u * g.Hd[0], a * a * a * g.N0[1] + 3 * a * a * u * g.c1[1] + 3 * a * u * u * g.c2[1] + u * u * u * g.Hd[1]]); }
    for (let i = 0; i < NS; i++) seg(ctx, np[i], np[i + 1], H.lerp(38, 20, i / NS), H.lerp(38, 20, (i + 1) / NS), H.mix(PINK, PINK_L, 0.25 + 0.15 * (i % 2)), 0);
    // head + beak
    const Hd = g.Hd, ha = H.lerp(0, 2.75, g.T) + Math.PI * (o.flipHead ?? g.FD) - 0.25 * g.FD;
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
  const PAL_GOLD = { top: [60, 40, 110], bot: [255, 170, 120], ridge: [140, 80, 120], ridgeL: [200, 120, 140], waterFar: [250, 180, 150], waterNear: [120, 90, 160], glint: [255, 230, 180], sunX: 760 };

  // =================== big 2D heads for the beak comparison ===================
  // a generic bird head (gull-like): big top beak, small bottom beak. local units, head centre at 0,0, beak to +x
  function gullHead(ctx, x, y, s, k) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    const WH = [244, 244, 250], GR = [190, 196, 214];
    for (let i = 0; i < 9; i++) { const a0 = i / 9 * Math.PI * 2, a1 = (i + 1) / 9 * Math.PI * 2; tri2(ctx, [0, 0], [Math.cos(a0) * 120, Math.sin(a0) * 105], [Math.cos(a1) * 120, Math.sin(a1) * 105], H.rgba(H.mix(GR, WH, shadeAng(a0)))); }
    // neck stub
    tri2(ctx, [-90, 60], [40, 90], [-60, 230], H.rgba(H.mix(GR, WH, 0.6))); tri2(ctx, [40, 90], [30, 230], [-60, 230], H.rgba(GR));
    // top beak: big, hooked
    const YB = [255, 206, 92], YD = [222, 160, 60];
    tri2(ctx, [80, -40], [300, -6], [90, 14], H.rgba(YB)); tri2(ctx, [300, -6], [312, 20], [90, 14], H.rgba(YD));
    // bottom beak: small
    tri2(ctx, [88, 22], [250, 22], [96, 44], H.rgba(H.mix(YD, [255, 255, 255], 0.15))); tri2(ctx, [250, 22], [96, 44], [200, 34], H.rgba(H.mix(YD, [80, 40, 40], 0.2)));
    gem(ctx, 30, -30, 18, BLACK); gem(ctx, 34, -36, 6, [255, 255, 255]);
    ctx.restore();
  }
  // a flamingo head: thin top beak like a lid, big deep-keeled bottom beak, bent down, black tip
  // hi: 0..1 highlight which jaw ('top' red-ish glow), rot rotates the whole head
  function flamHead(ctx, x, y, s, k, o = {}) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(s * k, s * k);
    for (let i = 0; i < 9; i++) { const a0 = i / 9 * Math.PI * 2, a1 = (i + 1) / 9 * Math.PI * 2; tri2(ctx, [0, 0], [Math.cos(a0) * 110, Math.sin(a0) * 98], [Math.cos(a1) * 110, Math.sin(a1) * 98], H.rgba(H.mix(PINK, PINK_L, shadeAng(a0) * 0.85))); }
    tri2(ctx, [-80, 60], [30, 90], [-50, 230], H.rgba(H.mix(PINK, PINK_L, 0.5))); tri2(ctx, [30, 90], [20, 230], [-50, 230], H.rgba(PINK));
    const lo = o.loCol || BEAKC, up = o.upCol || BEAKC;
    // bottom beak (big keel): from the face, deep, bending down at the middle
    const L = [[70, 0], [190, 10], [250, 70], [292, 150], [262, 168], [212, 112], [150, 90], [80, 70]];
    tri2(ctx, L[0], L[1], L[7], H.rgba(lo)); tri2(ctx, L[1], L[6], L[7], H.rgba(H.mix(lo, [150, 110, 130], 0.18)));
    tri2(ctx, L[1], L[2], L[6], H.rgba(H.mix(lo, [255, 255, 255], 0.2))); tri2(ctx, L[2], L[5], L[6], H.rgba(H.mix(lo, [150, 110, 130], 0.25)));
    tri2(ctx, L[2], L[3], L[5], H.rgba(BLACK)); tri2(ctx, L[3], L[4], L[5], H.rgba(H.mix(BLACK, [90, 70, 100], 0.4)));
    // top beak: a thin lid sitting on the bottom one
    const U = [[64, -26], [196, -14], [258, 46], [300, 126], [292, 150], [250, 70], [190, 10], [70, 0]];
    tri2(ctx, U[0], U[1], U[7], H.rgba(up)); tri2(ctx, U[1], U[6], U[7], H.rgba(H.mix(up, [150, 110, 130], 0.2)));
    tri2(ctx, U[1], U[2], U[6], H.rgba(H.mix(up, [255, 255, 255], 0.25))); tri2(ctx, U[2], U[5], U[6], H.rgba(H.mix(up, [150, 110, 130], 0.2)));
    tri2(ctx, U[2], U[3], U[5], H.rgba(H.mix(BLACK, [90, 70, 100], 0.2))); tri2(ctx, U[3], U[4], U[5], H.rgba(BLACK));
    gem(ctx, 20, -30, 18, [255, 214, 110]); gem(ctx, 22, -30, 9, BLACK);
    ctx.restore();
  }
  // size bar (faceted capsule) used to compare jaw sizes
  function sizeBar(ctx, x, y, len, k, col) { if (k <= 0.01) return; const l = len * k, h = 34; tri2(ctx, [x, y - h / 2], [x + l, y - h / 2], [x, y + h / 2], H.rgba(H.mix(col, [255, 255, 255], 0.3))); tri2(ctx, [x + l, y - h / 2], [x + l + 18 * k, y], [x, y + h / 2], H.rgba(col)); tri2(ctx, [x + l + 18 * k, y], [x + l, y + h / 2], [x, y + h / 2], H.rgba(H.mix(col, [40, 20, 70], 0.25))); }

  // =================== SCENE A: dawn lagoon, the hook ===================
  function header(ctx, t) {
    const k = EO(t, 3.0, 3.4); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 214, 'WHY FLAMINGOS EAT UPSIDE DOWN', { font: FONT(40), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  function headRipple(ctx, f, t, s = 1) { const h = f.map(f.g.Hd); ripples(ctx, h[0] - 40 * s, h[1] + 30 * s, t, s * 0.8); }
  function sceneHook(ctx, t) {
    lagoon(ctx, t, PAL_DAWN, 'dawn');
    const feed = EI(t, P(1, 'head') - 0.2, P(1, 'down') + 0.1);
    const o = { x: 420, y: 1500, s: 1.05, feed, eyes: 'open', sway: 0.008 * Math.sin(t * 1.1) };
    reflected(ctx, o);
    ripples(ctx, 430, 1500, t, 1);
    const f = drawFlamingo(ctx, o);
    if (feed > 0.6) headRipple(ctx, f, t, 1.05);
    // "never right-side up": the upright bird gets a red cross badge on "never"
    const kOut = 1 - EI(t, P(1, 'feeds') - 0.1, P(1, 'feeds') + 0.2);
    const head = f.map(f.g.Hd);
    hexBadge(ctx, head[0] + 150, head[1] - 70, BK(t, P(0, 'never') - 0.12) * kOut, false, 56);
    lpTag(ctx, 540, 400, 'NEVER', { k: BK(t, P(0, 'never') - 0.12) * kOut, font: FONT(120), h: 180, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 570, 'RIGHT-SIDE UP', { k: BK(t, P(0, 'rightside') - 0.12) * kOut, font: FONT(88), bg: '#fff6f0' });
    // upside down: the head flips, a curved arrow follows it
    const k2 = BK(t, P(1, 'upside') - 0.12) * (1 - EI(t, P(2, 'because') - 0.15, P(2, 'because') + 0.1));
    lpTag(ctx, 540, 430, 'UPSIDE DOWN', { k: k2, font: FONT(116), h: 180, bg: INK, col: '#fff' });
    if (k2 > 0.01) lpArrow(ctx, [860, 700], [960, 1000], [head[0] + 90, head[1] - 40], EI(t, P(1, 'upside') - 0.1, P(1, 'down') + 0.2) * k2, [255, 246, 240], 20);
    lpTag(ctx, 540, 400, 'THE BEAK IS', { k: BK(t, P(2, 'beak') - 0.12), font: FONT(84), bg: '#fff6f0' });
    lpTag(ctx, 540, 560, 'BACKWARDS', { k: BK(t, P(2, 'backwards') - 0.12), font: FONT(120), h: 180, bg: CORAL, col: '#fff' });
  }

  // =================== SCENE B: beak comparison panels ===================
  function sceneBeaks(ctx, t) {
    ctx.drawImage(mosaicLayer('beaks', [36, 30, 84], [150, 98, 168], [540, 900], [255, 190, 200], HH), 0, 0);
    // two cut-corner panels
    const panel = (y, k, bg) => { if (k <= 0.01) return; ctx.save(); ctx.translate(540, y); ctx.scale(1, k); ctx.fillStyle = 'rgba(30,20,60,0.35)'; ctx.beginPath(); ctx.moveTo(-470 + 60 + 10, -300 + 10); ctx.lineTo(470 + 10, -300 + 10); ctx.lineTo(470 + 10, 300 - 60 + 10); ctx.lineTo(470 - 60 + 10, 300 + 10); ctx.lineTo(-470 + 10, 300 + 10); ctx.lineTo(-470 + 10, -300 + 60 + 10); ctx.closePath(); ctx.fill(); ctx.fillStyle = bg; ctx.beginPath(); ctx.moveTo(-470 + 60, -300); ctx.lineTo(470, -300); ctx.lineTo(470, 300 - 60); ctx.lineTo(470 - 60, 300); ctx.lineTo(-470, 300); ctx.lineTo(-470, -300 + 60); ctx.closePath(); ctx.fill(); ctx.restore(); };
    const kA = EO(t, CUT.beaks + 0.1, CUT.beaks + 0.5), kB = EO(t, P(5, 'flamingos') - 0.35, P(5, 'flamingos'));
    panel(700, kA, 'rgba(255,246,240,0.16)'); panel(1340, kB, 'rgba(255,246,240,0.16)');
    // panel 1: most birds
    gullHead(ctx, 300, 700, 1.0, BK(t, P(3, 'birds') - 0.15, 0.4));
    const tb = BK(t, P(3, 'big') - 0.1, 0.35), bb = BK(t, P(4, 'smaller') - 0.1, 0.35);
    sizeBar(ctx, 650, 640, 240, tb, [255, 112, 96]); sizeBar(ctx, 650, 760, 110, bb, [140, 120, 200]);
    lpTag(ctx, 770, 575, 'TOP: BIG', { k: tb, font: FONT(52), bg: CORAL, col: '#fff' });
    lpTag(ctx, 770, 840, 'BOTTOM: SMALL', { k: bb, font: FONT(48), bg: '#fff6f0' });
    lpTag(ctx, 540, 360, 'MOST BIRDS', { k: BK(t, P(3, 'most') - 0.12), font: FONT(84), bg: INK, col: '#fff' });
    // panel 2: flamingo, the other way round
    const fk = BK(t, P(5, 'flamingos') - 0.15, 0.4), sw = EI(t, P(5, 'other') - 0.1, P(5, 'round'));
    flamHead(ctx, 270, 1320, 0.95, fk, { loCol: H.mix(BEAKC, [255, 170, 120], sw * 0.6) });
    sizeBar(ctx, 650, 1280, H.lerp(240, 90, sw), fk, [140, 120, 200]); sizeBar(ctx, 650, 1400, H.lerp(110, 250, sw), fk, [255, 112, 96]);
    lpTag(ctx, 770, 1215, sw > 0.5 ? 'TOP: THIN' : 'TOP', { k: fk, font: FONT(52), bg: '#fff6f0' });
    lpTag(ctx, 790, 1480, sw > 0.5 ? 'BOTTOM: BIG' : 'BOTTOM', { k: fk, font: FONT(52), bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 1040, 'FLAMINGO', { k: BK(t, P(5, 'flamingos') - 0.12), font: FONT(84), bg: CORAL, col: '#fff' });
    hexBadge(ctx, 930, 1040, BK(t, P(5, 'round') - 0.1), true, 48);
  }

  // =================== SCENE C: day lagoon close-up, the flip and the scoop ===================
  function sceneScoop(ctx, t) {
    lagoon(ctx, t, PAL_DAY, 'day');
    const tt = t - CUT.scoop, zoom = H.lerp(1.15, 1.35, EI(tt, 0, 4.5));
    const feed = EI(t, P(6, 'flips') - 0.15, P(6, 'over') + 0.15);
    const o = { x: 330, y: 1560, s: zoom, feed, headY: -10, eyes: 'open', sway: 0.006 * Math.sin(t * 1.3) };
    reflected(ctx, o);
    ripples(ctx, 340, 1560, t, zoom * 0.9);
    const f = drawFlamingo(ctx, o);
    const head = f.map(f.g.Hd);
    if (feed > 0.6) { headRipple(ctx, f, t, zoom); }
    // the skim: the lower beak sweeps side to side, a scoop-shaped wake
    const sk = EO(t, P(7, 'skims') - 0.1, P(7, 'skims') + 0.3);
    if (sk > 0.01) { for (let i = 0; i < 10; i++) { const u = ((t * 0.9 + i / 10) % 1), x = head[0] - 160 * zoom - u * 220, y = head[1] + 40 + Math.sin(u * 6 + t * 2) * 6; ctx.globalAlpha = sk * (1 - u) * 0.8; gem(ctx, x, y, 12, [255, 250, 240], u * 4); } ctx.globalAlpha = 1; }
    lpTag(ctx, 540, 400, 'FLIP!', { k: BK(t, P(6, 'flips') - 0.12) * (1 - EI(t, P(7, 'big') - 0.25, P(7, 'big'))), font: FONT(130), h: 190, bg: CORAL, col: '#fff' });
    const kl = BK(t, P(7, 'lower') - 0.12);
    lpTag(ctx, 540, 380, 'BIG LOWER BEAK', { k: kl, font: FONT(80), bg: '#fff6f0' });
    if (kl > 0.01) lpArrow(ctx, [700, 470], [820, 800], [head[0] - 40, head[1] - 50], EI(t, P(7, 'lower') - 0.1, P(7, 'beak') + 0.2), [255, 112, 96], 20);
    lpTag(ctx, 540, 545, 'A SCOOP', { k: BK(t, P(7, 'scoop') - 0.12), font: FONT(110), h: 170, bg: INK, col: '#fff' });
  }

  // =================== SCENE D: inside the beak (cutaway) ===================
  // the beak drawn huge and horizontal, upside down as it feeds: big lower jaw ON TOP, thin upper jaw underneath, tip to the left
  const BX0 = 1000, BX1 = 120; // base (right, the face) -> tip (left)
  const bx = (u) => H.lerp(BX0, BX1, u);
  const jawTop = (u) => 760 - 120 * Math.sin(u * Math.PI * 0.9) + u * 110; // outer edge of the big jaw (top)
  const gapTop = (u) => 960 + u * 120 - 40 * Math.sin(u * Math.PI);        // inner edge of big jaw
  const gapBot = (u) => 1060 + u * 100 - 30 * Math.sin(u * Math.PI);       // inner edge of thin jaw
  const jawBot = (u) => 1150 + u * 80;                                      // outer edge of thin jaw
  function sceneInside(ctx, t) {
    ctx.drawImage(mosaicLayer('under', [60, 120, 170], [20, 50, 110], [300, 400], [160, 220, 240], HH), 0, 0);
    // drifting light shards (underwater)
    const R = H.rng(31); for (let i = 0; i < 26; i++) { const x = R() * W, y0 = R() * HH, sp = R.range(10, 30), y = ((y0 - t * sp) % HH + HH) % HH; ctx.globalAlpha = 0.25; gem(ctx, x, y, R.range(5, 10), [200, 240, 255], t + i); } ctx.globalAlpha = 1;
    const tt = t - CUT.inside, zk = H.lerp(1.08, 1.0, EO(tt, 0, 1.2));
    ctx.save(); ctx.translate(540, 1000); ctx.scale(zk, zk); ctx.translate(-540, -1000);
    const N = 10;
    // big jaw (top): faceted strip, beak colour, black tip
    for (let i = 0; i < N; i++) { const u0 = i / N, u1 = (i + 1) / N, tip = u0 >= 0.62; const c = tip ? BLACK : BEAKC; const a = [bx(u0), jawTop(u0)], b = [bx(u1), jawTop(u1)], c2 = [bx(u1), gapTop(u1)], d = [bx(u0), gapTop(u0)]; tri2(ctx, a, b, d, H.rgba(H.mix(c, [255, 255, 255], tip ? 0.12 : 0.25))); tri2(ctx, b, c2, d, H.rgba(H.mix(c, [150, 110, 130], tip ? 0.1 : 0.22))); }
    // thin jaw (bottom)
    for (let i = 0; i < N; i++) { const u0 = i / N, u1 = (i + 1) / N, tip = u0 >= 0.62; const c = tip ? BLACK : BEAKC; const a = [bx(u0), gapBot(u0)], b = [bx(u1), gapBot(u1)], c2 = [bx(u1), jawBot(u1)], d = [bx(u0), jawBot(u0)]; tri2(ctx, a, b, d, H.rgba(H.mix(c, [255, 255, 255], 0.15))); tri2(ctx, b, c2, d, H.rgba(H.mix(c, [150, 110, 130], 0.3))); }
    // the mouth gap (dark interior)
    ctx.fillStyle = '#3a1838'; ctx.beginPath(); for (let i = 0; i <= N; i++) ctx.lineTo(bx(i / N), gapTop(i / N)); for (let i = N; i >= 0; i--) ctx.lineTo(bx(i / N), gapBot(i / N)); ctx.closePath(); ctx.fill();
    // comb plates (lamellae): rows of thin facets along both inner edges, grow in on "lined"
    const lk = EO(t, P(8, 'lined') - 0.15, P(8, 'plates') + 0.2), M = 34;
    for (let i = 0; i < M; i++) {
      const u = 0.06 + i / M * 0.62, on = H.clamp(lk * M * 1.3 - i * 1.0); if (on <= 0) continue;
      const x = bx(u), gt = gapTop(u), gb = gapBot(u), hgt = 30 * on;
      tri2(ctx, [x - 6, gt - 2], [x + 6, gt - 2], [x, gt + hgt], H.rgba(i % 2 ? [255, 236, 214] : [236, 210, 196]));
      tri2(ctx, [x - 6, gb + 2], [x + 6, gb + 2], [x, gb - hgt], H.rgba(i % 2 ? [255, 236, 214] : [236, 210, 196]));
    }
    // the tongue: a fat faceted piston in the gap, pumping in and out 4.5 times a second
    const pumpOn = EO(t, P(9, 'pumping') - 0.2, P(9, 'pumping') + 0.1) * (1 - EI(t, CUT.mud - 0.4, CUT.mud));
    const ph4 = Math.sin(t * Math.PI * 2 * 4.5 * 0.5); // shown at half speed so the eye can follow, the counter shows the real rate
    const tk = EO(t, P(9, 'tongue') - 0.2, P(9, 'tongue') + 0.15);
    if (tk > 0.01) {
      const ext = 0.12 + 0.14 * tk + pumpOn * 0.1 * ph4, u0 = 0.0, u1 = ext + 0.12;
      const TC = [255, 140, 160];
      for (let i = 0; i < 6; i++) { const a0 = u0 + (u1 - u0) * i / 6, a1 = u0 + (u1 - u0) * (i + 1) / 6; const y0t = H.lerp(gapTop(a0), gapBot(a0), 0.18), y0b = H.lerp(gapTop(a0), gapBot(a0), 0.82), y1t = H.lerp(gapTop(a1), gapBot(a1), 0.18 + (i === 5 ? 0.25 : 0)), y1b = H.lerp(gapTop(a1), gapBot(a1), 0.82 - (i === 5 ? 0.25 : 0)); tri2(ctx, [bx(a0), y0t], [bx(a1), y1t], [bx(a0), y0b], H.rgba(H.mix(TC, [255, 255, 255], 0.2))); tri2(ctx, [bx(a1), y1t], [bx(a1), y1b], [bx(a0), y0b], H.rgba(H.mix(TC, [120, 30, 70], 0.2))); }
      // water: in at the tip when the tongue pulls back, squirts out through the combs when it pushes
      const wq = EO(t, P(12, 'water') - 0.15, P(12, 'squirts')) * (1 - EI(t, CUT.mud - 0.4, CUT.mud));
      if (wq > 0.01) { const Rw = H.rng(77); for (let i = 0; i < 22; i++) { const u = Rw.range(0.15, 0.62), up = Rw() < 0.5, life = ((t * 1.4 + Rw()) % 1); const x = bx(u) + Rw.range(-14, 14), y = up ? gapTop(u) - 40 - life * 170 : gapBot(u) + 40 + life * 170; ctx.globalAlpha = wq * (1 - life) * 0.9; gem(ctx, x, y, 11, [200, 236, 255], life * 3); } ctx.globalAlpha = 1; }
      // food: shrimp (pink) and algae (green) caught against the combs
      const fq = Math.round(18 * EO(t, P(13, 'tiny') - 0.1, P(13, 'trapped') + 0.3)), Rf = H.rng(91);
      for (let i = 0; i < 18; i++) { const u = Rf.range(0.12, 0.6), top = Rf() < 0.5, isS = i % 2 === 0, j = Rf.range(-1, 1); if (i >= fq) continue; const x = bx(u) + Math.sin(t * 3 + i) * 3, y = top ? gapTop(u) + 34 + j * 6 : gapBot(u) - 34 + j * 6; if (isS) shrimp(ctx, x, y, 0.8, t + i); else gem(ctx, x, y, 12, [110, 200, 120], t * 2 + i); }
    }
    ctx.restore();
    // labels
    lpTag(ctx, 540, 380, 'INSIDE', { k: BK(t, P(8, 'inside') - 0.12) * (1 - EI(t, P(8, 'tiny') - 0.3, P(8, 'tiny'))), font: FONT(120), h: 180, bg: INK, col: '#fff' });
    const kc = BK(t, P(8, 'comblike') - 0.12) * (1 - EI(t, P(9, 'then') - 0.2, P(9, 'then') + 0.1));
    lpTag(ctx, 540, 400, 'COMB PLATES', { k: kc, font: FONT(96), h: 160, bg: '#fff6f0' });
    if (kc > 0.01) { lpArrow(ctx, [540, 490], [420, 700], [bx(0.3), gapTop(0.3) + 20], EI(t, P(8, 'comblike') - 0.1, P(8, 'plates') + 0.2) * kc, [255, 246, 240], 18); }
    const kt = BK(t, P(9, 'tongue') - 0.12) * (1 - EI(t, P(10, 'about') - 0.25, P(10, 'about')));
    lpTag(ctx, 540, 400, 'TONGUE', { k: kt, font: FONT(116), h: 170, bg: CORAL, col: '#fff' });
    // the rate counter, on its number words
    const kn = BK(t, P(10, 'four') - 0.12) * (1 - EI(t, P(12, 'water') - 0.3, P(12, 'water')));
    if (kn > 0.01) { bigNumber(ctx, 540, 520, P(10, 'five') - 0.1 <= t ? '4-5×' : '4', 190, kn); lpTag(ctx, 540, 620, 'A SECOND', { k: BK(t, P(10, 'second') - 0.12) * kn, font: FONT(64), bg: INK, col: '#fff' }); }
    lpTag(ctx, 540, 1460, 'LIKE A PISTON', { k: BK(t, P(11, 'piston') - 0.12) * (1 - EI(t, P(12, 'water') - 0.3, P(12, 'water'))), font: FONT(80), bg: '#ffd478' });
    const kw = BK(t, P(12, 'squirts') - 0.12) * (1 - EI(t, P(13, 'tiny') - 0.3, P(13, 'tiny')));
    lpTag(ctx, 540, 400, 'WATER OUT', { k: kw, font: FONT(110), h: 170, bg: '#9fd0ff' });
    lpTag(ctx, 540, 380, 'SHRIMP', { k: BK(t, P(13, 'shrimp') - 0.12), font: FONT(100), h: 160, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 540, '+ ALGAE', { k: BK(t, P(13, 'algae') - 0.12), font: FONT(90), bg: MINT, col: '#fff' });
    lpTag(ctx, 540, 1460, 'TRAPPED', { k: BK(t, P(13, 'trapped') - 0.12), font: FONT(100), h: 160, bg: INK, col: '#fff' });
  }
  // a tiny faceted brine shrimp (curled body + tail fan), x/y centre
  function shrimp(ctx, x, y, s, ph0) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(ph0 * 2) * 0.3); ctx.scale(s, s);
    const C = [255, 120, 110];
    for (let i = 0; i < 5; i++) { const a0 = -0.6 + i * 0.5, a1 = a0 + 0.5, r0 = 20, r1 = 8; tri2(ctx, [Math.cos(a0) * r0, Math.sin(a0) * r0], [Math.cos(a1) * r0, Math.sin(a1) * r0], [Math.cos(a0) * r1, Math.sin(a0) * r1], H.rgba(H.mix(C, [255, 255, 255], 0.1 + 0.08 * i))); tri2(ctx, [Math.cos(a1) * r0, Math.sin(a1) * r0], [Math.cos(a1) * r1, Math.sin(a1) * r1], [Math.cos(a0) * r1, Math.sin(a0) * r1], H.rgba(H.mix(C, [120, 30, 50], 0.2))); }
    tri2(ctx, [-12, 16], [-30, 26], [-24, 6], H.rgba(H.mix(C, [255, 255, 255], 0.3)));
    ctx.restore();
  }

  // =================== SCENE E: the mud stomp and the whirlpool ===================
  function sceneMud(ctx, t) {
    lagoon(ctx, t, PAL_DAY, 'day');
    const tt = t - CUT.mud, st = P(14, 'stomp');
    const stomping = t > st - 0.2, lift = stomping ? 0.22 * Math.max(0, Math.sin((t - st) * Math.PI * 2.2)) : 0;
    const o = { x: 330, y: 1500, s: 1.1, feed: 1, headY: -10, lift, eyes: 'open', bodyDx: 0 };
    reflected(ctx, o);
    const f = drawFlamingo(ctx, o), head = f.map(f.g.Hd);
    ripples(ctx, 340, 1500, t, 1.1);
    // stomp puffs of mud
    if (stomping) { const k = (t - st) * 2.2, fr = k % 1; ctx.globalAlpha = (1 - fr) * 0.8; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; gem(ctx, 420 + Math.cos(a) * (30 + fr * 90), 1520 + Math.sin(a) * (10 + fr * 26), 14, [150, 110, 90], a); } ctx.globalAlpha = 1; }
    // the whirlpool: a faceted spiral of gems swirling food toward the beak
    const wk = EO(t, P(15, 'whirlpools') - 0.3, P(15, 'whirlpools') + 0.4);
    if (wk > 0.01) {
      const cx = head[0] - 80, cy = head[1] + 70;
      for (let i = 0; i < 44; i++) { const u = ((i / 44 + t * 0.35) % 1), r = (1 - u) * 300 * wk, a = u * Math.PI * 6 + t * 3; const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r * 0.32; ctx.globalAlpha = 0.85 * wk * (0.3 + 0.7 * u); gem(ctx, x, y, 8 + u * 6, i % 5 === 0 ? [255, 120, 110] : i % 5 === 1 ? [110, 200, 120] : [230, 246, 255], a); }
      ctx.globalAlpha = 1;
    }
    lpTag(ctx, 540, 400, 'STOMP!', { k: BK(t, st - 0.12) * (1 - EI(t, P(15, 'whirlpools') - 0.4, P(15, 'whirlpools') - 0.15)), font: FONT(130), h: 190, bg: '#c8906a', col: '#fff' });
    lpTag(ctx, 540, 400, 'WHIRLPOOLS', { k: BK(t, P(15, 'whirlpools') - 0.12), font: FONT(110), h: 170, bg: '#9fd0ff' });
    lpTag(ctx, 540, 560, 'FULL OF FOOD', { k: BK(t, P(15, 'food') - 0.12), font: FONT(80), bg: INK, col: '#fff' });
  }

  // =================== SCENE F: pink pigments (gold lagoon) ===================
  function scenePink(ctx, t) {
    lagoon(ctx, t, PAL_GOLD, 'gold');
    const pk = EI(t, P(18, 'turns') - 0.2, P(18, 'pink') + 0.2);
    setPale(1 - pk);
    const o = { x: 420, y: 1500, s: 1.0, feed: 0, eyes: 'open', sway: 0.008 * Math.sin(t * 1.2) };
    reflected(ctx, o); ripples(ctx, 430, 1500, t, 1);
    const f = drawFlamingo(ctx, o); setPale(0);
    const C = f.map(f.g.C);
    // shrimp + algae icons, then pink pigment gems stream from them into the bird
    const ik = BK(t, P(16, 'shrimp') - 0.12, 0.35), ak = BK(t, P(16, 'algae') - 0.12, 0.35);
    if (ik > 0.01) { ctx.save(); ctx.translate(800, 760); ctx.scale(ik * 3.2, ik * 3.2); shrimp(ctx, 0, 0, 1, t); ctx.restore(); }
    if (ak > 0.01) { for (let i = 0; i < 5; i++) gem(ctx, 230 + (i % 3) * 70, 720 + Math.floor(i / 3) * 80, 34 * ak, [110, 200, 120], i); }
    const sk = EO(t, P(17, 'pink') - 0.15, P(17, 'pink') + 0.2) * (1 - EI(t, P(18, 'pink') + 0.2, P(18, 'pink') + 0.6));
    if (sk > 0.01) { for (let i = 0; i < 16; i++) { const u = ((t - P(17, 'pink')) * 0.6 + i / 16) % 1, from = i % 2 ? [800, 760] : [300, 760], c = [from[0] * 0.5 + C[0] * 0.5, 600]; const q = [(1 - u) * (1 - u) * from[0] + 2 * u * (1 - u) * c[0] + u * u * C[0], (1 - u) * (1 - u) * from[1] + 2 * u * (1 - u) * c[1] + u * u * C[1]]; ctx.globalAlpha = sk * Math.sin(u * Math.PI); gem(ctx, q[0], q[1], 16, [255, 110, 150], t * 2 + i); } ctx.globalAlpha = 1; }
    lpTag(ctx, 540, 400, 'PINK PIGMENTS', { k: BK(t, P(17, 'pink') - 0.12) * (1 - EI(t, P(18, 'thats') - 0.3, P(18, 'thats'))), font: FONT(96), h: 160, bg: '#ff7ea8', col: '#fff' });
    lpTag(ctx, 540, 380, 'FOOD', { k: BK(t, P(18, 'thats') - 0.12), font: FONT(90), bg: '#fff6f0' });
    lpTag(ctx, 540, 530, '= PINK BIRD', { k: BK(t, P(18, 'pink') - 0.12), font: FONT(100), h: 160, bg: '#ff7ea8', col: '#fff' });
  }

  // =================== SCENE G: dawn, the question ===================
  function sceneEnd(ctx, t) {
    lagoon(ctx, t, PAL_DAWN, 'dawn');
    const tt = t - CUT.end, s = H.lerp(1.05, 0.95, EI(tt, 0, 3));
    const o = { x: 400, y: 1500, s, feed: 1, eyes: 'open', sway: 0.006 * Math.sin(t * 1.1) };
    reflected(ctx, o); ripples(ctx, 410, 1500, t, s);
    const f = drawFlamingo(ctx, o); headRipple(ctx, f, t, s);
    lpTag(ctx, 540, 380, 'WOULD YOU EAT', { k: BK(t, P(19, 'would') - 0.12), font: FONT(84), bg: INK, col: '#fff' });
    lpTag(ctx, 540, 540, 'UPSIDE DOWN?', { k: BK(t, P(19, 'upside') - 0.12), font: FONT(104), h: 160, bg: '#fff6f0' });
    lpTag(ctx, 540, 700, 'IF IT TURNED YOU PINK?', { k: BK(t, P(20, 'turned') - 0.12), font: FONT(64), bg: '#ff7ea8', col: '#fff' });
    lpTag(ctx, 540, 1600, 'tell me in the comments', { k: BK(t, P(20, 'pink') + 0.05), font: FONT(48), bg: '#fff6f0' });
  }

  // =================== composition + facet-flip wipes (the medium's scene change) ===================
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
    if (t < CUT.beaks) sceneHook(ctx, t);
    else if (t < CUT.scoop) sceneBeaks(ctx, t);
    else if (t < CUT.inside) sceneScoop(ctx, t);
    else if (t < CUT.mud) sceneInside(ctx, t);
    else if (t < CUT.pink) sceneMud(ctx, t);
    else if (t < CUT.end) scenePink(ctx, t);
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
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    lagoon(ctx, 0, PAL_DAWN, 'dawn');
    const o = { x: 400, y: 1500, s: 1.05, feed: 1, eyes: 'open' };
    reflected(ctx, o); drawFlamingo(ctx, o);
    lpTag(ctx, 540, 380, 'BACKWARDS', { font: FONT(130), h: 210, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 600, 'BEAK', { font: FONT(150), h: 210, bg: INK, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, lagoon water, underwater gurgle ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g = 1, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const lap = (t0, t1, seed) => { const r = H.rng(seed); for (let t = t0; t < t1; t += r.range(0.7, 1.3)) k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: r.range(500, 900), q: 1.0, gain: 0.03, a: 0.2, pan: r.range(-0.5, 0.5), minor: true }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const ribbon = (t, p = 0) => k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.06, a: 0.25, pan: p, minor: true });
    const splash = (t, g = 1) => { k.noise(t, { dur: 0.35, color: 'white', filter: 'bandpass', f: [[0, 2200], [0.35, 700]], q: 0.9, gain: 0.09 * g, a: 0.005 }); k.tone(t + 0.02, { f: [[0, 900], [0.12, 1500]], type: 'sine', dur: 0.14, gain: 0.05 * g }); };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 96, gain: 0.22, chords: [['E4', 'G#4', 'B4', 'D#5'], ['C#4', 'E4', 'G#4', 'B4'], ['A3', 'C#4', 'E4', 'G#4'], ['B3', 'D#4', 'F#4', 'A4']] });
    // A: hook
    lap(0, CUT.beaks, 3); glass(0.2, 'E4', 1.1, 0, 1.4);
    k.play('error', P(0, 'never') - 0.05, { f: 'G3', gain: 0.5 }); facet(P(0, 'never') - 0.12, 560); facet(P(0, 'rightside') - 0.12, 470, 0.9);
    facet(3.0, 470, 0.8);
    k.play('swish', P(1, 'head') - 0.2, { dur: 0.7, gain: 0.5 }); ribbon(P(1, 'upside') - 0.1, 0.4); facet(P(1, 'upside') - 0.12, 600); splash(P(1, 'down') + 0.05, 1.1);
    facet(P(2, 'beak') - 0.12, 520, 0.9); k.play('impact', P(2, 'backwards') - 0.08, { gain: 0.8 }); glass(P(2, 'backwards'), 'B4', 1, 0, 1.2);
    // B: beaks
    wipe(CUT.beaks);
    facet(P(3, 'most') - 0.12, 520); k.play('pop', P(3, 'birds') - 0.1, { gain: 0.6, minor: true });
    k.play('stroke', P(3, 'big') - 0.1, { material: 'marker', dur: 0.5, gain: 0.4, minor: true }); glass(P(3, 'big'), 'E5', 0.8, 0.3, 0.7);
    k.play('stroke', P(4, 'smaller') - 0.1, { material: 'marker', dur: 0.3, gain: 0.4, minor: true }); glass(P(4, 'smaller'), 'B4', 0.7, 0.3, 0.6);
    facet(P(5, 'flamingos') - 0.12, 600); k.play('pop', P(5, 'flamingos') - 0.08, { gain: 0.6, minor: true });
    k.tone(P(5, 'other') - 0.1, { f: [[0, 300], [0.7, 600]], type: 'triangle', dur: 0.75, gain: 0.05 });
    k.play('success', P(5, 'round'), { f: 'E5', gain: 0.45 });
    // C: scoop
    wipe(CUT.scoop); lap(CUT.scoop, CUT.inside, 9);
    k.play('swish', P(6, 'flips') - 0.15, { dur: 0.6, gain: 0.6 }); facet(P(6, 'flips') - 0.1, 640); splash(P(6, 'over'), 1.2);
    ribbon(P(7, 'lower') - 0.1, -0.3); facet(P(7, 'lower') - 0.12, 520, 0.9);
    for (let i = 0; i < 6; i++) k.noise(P(7, 'skims') + i * 0.24, { dur: 0.25, color: 'pink', filter: 'bandpass', f: 1200 + (i % 2) * 300, q: 1.4, gain: 0.04, a: 0.08, pan: (i % 2) * 0.6 - 0.3, minor: true });
    k.play('impact', P(7, 'scoop') - 0.08, { gain: 0.7 }); glass(P(7, 'scoop'), 'G#5', 0.8, 0, 1.0);
    // D: inside
    wipe(CUT.inside); k.tone(CUT.inside + 0.1, { f: 'E2', type: 'sine', dur: 15, gain: 0.05, a: 1.0 }); // underwater hum
    for (let t = CUT.inside + 0.3; t < CUT.mud - 0.3; t += 0.9) k.tone(t, { f: [[0, 300], [0.15, 520]], type: 'sine', dur: 0.16, gain: 0.025, minor: true }); // bubbles
    facet(P(8, 'inside') - 0.12, 470, 1);
    k.withMinor(() => { for (let i = 0; i < 12; i++) k.play('tick', P(8, 'lined') - 0.1 + i * 0.1, { f: 2000 + i * 70, gain: 0.45 }); });
    facet(P(8, 'comblike') - 0.12, 600); glass(P(8, 'plates'), 'E5', 0.8, 0, 0.9);
    facet(P(9, 'tongue') - 0.12, 520); k.play('pop', P(9, 'tongue'), { gain: 0.6, minor: true });
    for (let t = P(9, 'pumping') - 0.1; t < CUT.mud - 0.5; t += 1 / 2.25) k.play('tock', t, { f: 220, gain: 0.25, minor: true }); // the piston (shown at half speed)
    k.play('impact', P(10, 'four') - 0.08, { gain: 0.9 }); glass(P(10, 'four'), 'E5', 1, 0, 1); glass(P(10, 'five'), 'G#5', 1, 0, 1);
    facet(P(10, 'second') - 0.12, 470, 0.9);
    k.play('stamp', P(11, 'piston') - 0.05, { gain: 0.45 });
    for (let i = 0; i < 6; i++) k.noise(P(12, 'squirts') - 0.1 + i * 0.2, { dur: 0.18, color: 'white', filter: 'bandpass', f: 1800, q: 1.2, gain: 0.05, a: 0.01, minor: true });
    facet(P(12, 'squirts') - 0.12, 560);
    k.play('sparkle', P(13, 'shrimp') - 0.05, { n: 5, gain: 0.45 }); facet(P(13, 'algae') - 0.12, 520, 0.9);
    k.play('click', P(13, 'trapped') - 0.05, { gain: 0.8 }); k.play('success', P(13, 'trapped') + 0.05, { f: 'B5', gain: 0.4 });
    // E: mud
    wipe(CUT.mud); lap(CUT.mud, CUT.pink, 21);
    for (let t = P(14, 'stomp') - 0.05; t < CUT.pink - 0.3; t += 1 / 2.2) { k.play('thud', t, { f: 110, gain: 0.45 }); k.noise(t, { dur: 0.25, color: 'brown', filter: 'lowpass', f: 600, gain: 0.1, minor: true }); }
    k.play('stamp', P(14, 'stomp') - 0.08, { gain: 0.4 });
    k.noise(P(15, 'whirlpools') - 0.4, { dur: 1.8, color: 'pink', filter: 'bandpass', f: [[0, 400], [1.8, 1500]], q: 2, gain: 0.07, a: 0.5 });
    facet(P(15, 'whirlpools') - 0.12, 600); glass(P(15, 'food'), 'E5', 0.8, 0, 1.0);
    // F: pink
    wipe(CUT.pink); lap(CUT.pink, CUT.end, 27);
    k.play('pop', P(16, 'shrimp') - 0.1, { gain: 0.6, minor: true }); k.play('pop', P(16, 'algae') - 0.1, { gain: 0.6, f: 760, minor: true });
    k.play('sparkle', P(17, 'pink') - 0.05, { n: 6, gain: 0.55 }); facet(P(17, 'pink') - 0.12, 600);
    k.play('riser', P(18, 'turns') - 0.5, { dur: 0.9, gain: 0.35 });
    k.play('impact', P(18, 'pink') - 0.08, { gain: 1.0 }); ['E4', 'B4', 'E5', 'G#5'].forEach((n, i) => glass(P(18, 'pink') + i * 0.03, n, 1.2 - i * 0.2, (i - 1.5) * 0.25, 1.4));
    // G: question
    wipe(CUT.end); lap(CUT.end, D, 33);
    facet(P(19, 'would') - 0.12, 470); facet(P(19, 'upside') - 0.12, 560); splash(P(19, 'down'), 0.7);
    facet(P(20, 'turned') - 0.12, 600); ['B4', 'E5'].forEach((n, i) => glass(P(20, 'pink') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(20, 'pink'), { f: 'E3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
