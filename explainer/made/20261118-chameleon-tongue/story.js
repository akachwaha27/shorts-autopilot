// ===== Copperplate Engraving (Lemo-Opuscar style), vertical 1080x1920: "What if humans had a chameleon's tongue?" =====
// Drawn with the Lemo-Opuscar engraving engine (window.LEMO, bundled by scripts/lemo_engine.sh). Original chameleon,
// human head, mechanism plate, story, layout and timing; only the engine's line-cutting technique comes from the library.
(function () {
  const W = 1080, HH = 1920;
  // preload the plate fonts so document.fonts.ready (awaited by the shell) covers them
  try { for (const f of ['400 76px "Pinyon Script"', '600 66px "Bodoni Moda"', '500 30px "Bodoni Moda"', 'italic 500 42px "Bodoni Moda"']) document.fonts.load(f, 'AaZz09'); } catch (e) {}
  const { B, drawSheet, engraveText, writeScript, roundelFrame, leader, Wash, PAL } = window.LEMO;
  const { xf, shape, clamp, hatch, outline, stroke, RNG, formTone } = B;

  // ---------- BEATS (from phrases.json) ----------
  const BEATS = [
    { s: 0.25, e: 1.68, w: { never: 0.49, miss: 0.79, snack: 1.08 } },
    { s: 1.91, e: 3.16, w: { chameleons: 2.21, tongue: 2.8 } },
    { s: 3.56, e: 4.87, w: { talking: 3.81, ruined: 4.38 } },
    { s: 5.2, e: 7.56, w: { chameleons: 5.29, tongue: 6.16, stretch: 6.95 } },
    { s: 7.78, e: 8.75, w: { twice: 7.96, body: 8.31, length: 8.49 } },
    { s: 9.09, e: 11.07, w: { you: 9.29, three: 10.35, meters: 10.68 } },
    { s: 11.43, e: 13.02, w: { bunched: 11.43, inside: 12.03, mouth: 12.69 } },
    { s: 13.38, e: 14.28, w: { fast: 13.92 } },
    { s: 14.56, e: 16.84, w: { quickest: 14.8, zero: 15.94, sixty: 16.43 } },
    { s: 16.96, e: 18.84, w: { hundredth: 17.54, second: 18.41 } },
    { s: 19.31, e: 20.57, w: { trick: 19.56, bone: 20.23 } },
    { s: 20.94, e: 23.44, w: { tongue: 21.15, sits: 21.58, sock: 22.51, finger: 23.01 } },
    { s: 23.88, e: 26.88, w: { ring: 23.95, muscle: 24.36, squeezes: 24.77, collagen: 25.86, sleeves: 26.4 } },
    { s: 27.29, e: 28.83, w: { loading: 27.29, slingshot: 28.28 } },
    { s: 29.18, e: 30.35, w: { lets: 29.76, go: 30.15 } },
    { s: 30.63, e: 32.22, w: { flies: 31.23, off: 31.56, bone: 31.96 } },
    { s: 32.57, e: 34.32, w: { sticky: 32.99, tip: 33.41, lands: 33.62, first: 33.97 } },
    { s: 34.71, e: 37.76, w: { spit: 34.97, four: 35.69, hundred: 35.95, thicker: 36.73, yours: 37.44 } },
    { s: 38.14, e: 39.73, w: { bug: 38.41, pull: 39.02, free: 39.38 } },
    { s: 40.14, e: 41.24, w: { grab: 40.63, snack: 40.94 } },
    { s: 41.31, e: 42.63, w: { across: 41.62, room: 42.32 } },
    { s: 42.71, e: 43.82, w: { before: 42.71, anyone: 43.01, saw: 43.31, move: 43.62 } },
    { s: 44.28, e: 45.57, w: { what: 44.39, snatch: 45.01, first: 45.32 } },
    { s: 45.66, e: 46.77, w: { three: 45.93, meter: 46.19, tongue: 46.45 } },
  ];
  const DURATION = 46.77 + 1.0;
  window.BEATS = BEATS; window.DURATION = DURATION;
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const eo = (x) => 1 - Math.pow(1 - x, 3);
  const ein = (x) => x * x * x;
  const LV = [-0.55, -0.62];
  const MADDER = [176, 78, 72];
  const PLATE = [44, 168, 1036, 1652];

  // scene cuts (a new sheet laid on the bed)
  const CUTS = [0, 5.0, 13.3, 19.1, 32.45, 39.9, 44.2, 99];
  const sceneOf = (t) => { let i = 0; while (i < CUTS.length - 2 && t >= CUTS[i + 1]) i++; return i; };

  // ---------- engraving helpers ----------
  function engraveBody(ink, d, f, { g = '', spacing = 3.8, angle = -0.35, seed = 1, base = 0.06, dark = 0, contour = true, wOl = 2.1 } = {}) {
    const sh = typeof d === 'string' ? shape(d, f) : d;
    const ft = formTone(sh.polys, { light: LV, base: base + dark });
    ink.group(g + 'ol'); for (const p of sh.polys) outline(ink, p, { w: wOl, light: LV, seed });
    ink.group(g + 'h1');
    if (contour) B.contourHatch(ink, sh.polys, { spacing, tone: ft, wMax: 1.6, thr: 0.13, seed });
    else hatch(ink, sh.polys, { angle: angle + 1.35, spacing: spacing * 0.9, tone: ft, thr: 0.13, wMax: 1.5, seed, bend: 0.0006 });
    ink.group(g + 'h2'); hatch(ink, sh.polys, { angle, spacing: spacing * 1.15, tone: ft, thr: 0.5, wMax: 1.2, seed: seed + 1 });
    ink.group(g + 'h3'); hatch(ink, sh.polys, { angle: angle + 1.1, spacing: spacing * 1.3, tone: ft, thr: 0.76, wMax: 0.9, seed: seed + 2 });
    return sh;
  }
  function sched(ink, t0, span = 3.0) {
    ink.schedule('ol', t0, t0 + span * 0.55, { conc: 10 });
    ink.schedule('h1', t0 + span * 0.25, t0 + span * 0.8, { conc: 60 });
    ink.schedule('h2', t0 + span * 0.45, t0 + span * 0.95, { conc: 60 });
    ink.schedule('h3', t0 + span * 0.6, t0 + span, { conc: 70 });
    ink.build(); return ink;
  }
  // a tapered tube polygon along a polyline (for legs and the tail)
  function ribbon(pts, w0, w1) {
    const P = B.resample(pts, 3), N = B.normals(P, false), L = [], R = [];
    P.forEach((p, i) => { const w = (w0 + (w1 - w0) * i / (P.length - 1)) / 2; L.push([p[0] + N[i][0] * w, p[1] + N[i][1] * w]); R.push([p[0] - N[i][0] * w, p[1] - N[i][1] * w]); });
    return B.ring(L.concat(R.reverse()));
  }
  const bez = (a, b, c, d, n = 24) => { const o = []; for (let i = 0; i <= n; i++) { const u = i / n, v = 1 - u; o.push([v * v * v * a[0] + 3 * v * v * u * b[0] + 3 * v * u * u * c[0] + u * u * u * d[0], v * v * v * a[1] + 3 * v * v * u * b[1] + 3 * v * u * u * c[1] + u * u * u * d[1]]); } return o; };

  // the sheet, rendered once; also the paper fill that lets near parts hide far ones
  let sheetC = null;
  function sheet() { if (sheetC) return sheetC; sheetC = document.createElement('canvas'); sheetC.width = W; sheetC.height = HH; drawSheet(sheetC.getContext('2d'), { W, H: HH, plate: PLATE }); return sheetC; }
  let bandC = null;
  function bandPaper() { if (bandC) return bandC; bandC = document.createElement('canvas'); bandC.width = W; bandC.height = HH; drawSheet(bandC.getContext('2d'), { W, H: HH, plate: [-20, -20, W + 20, HH + 20] }); return bandC; }
  function occlude(ctx, shapes, a = 1) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat');
    for (const sh of shapes) ctx.fill(sh.path, 'nonzero'); ctx.restore();
  }

  // ---------- the tongue: a madder-washed tube with engraved edges and cross-hatching, drawn live ----------
  // pts: centre line from mouth to tip; ext 0..1 how much is out; w0/w1 widths; tipR the sticky club.
  function drawTongue(ctx, pts, ext, { w0 = 22, w1 = 12, tipR = 18, s = 1, washA = 0.6 } = {}) {
    if (ext <= 0.001) return null;
    const P = B.resample(pts, 3); let L = 0; const acc = [0];
    for (let i = 1; i < P.length; i++) { L += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); acc.push(L); }
    const want = L * clamp(ext); const Q = [P[0]];
    for (let i = 1; i < P.length; i++) { if (acc[i] <= want) Q.push(P[i]); else { const u = (want - acc[i - 1]) / (acc[i] - acc[i - 1]); Q.push([P[i - 1][0] + (P[i][0] - P[i - 1][0]) * u, P[i - 1][1] + (P[i][1] - P[i - 1][1]) * u]); break; } }
    if (Q.length < 2) Q.push([P[0][0] + 0.5, P[0][1]]);
    const N = B.normals(Q, false), Lft = [], Rgt = [], WS = [];
    Q.forEach((p, i) => { const k = i / (Q.length - 1), w = (w0 + (w1 - w0) * k) * s / 2; WS.push(w); Lft.push([p[0] + N[i][0] * w, p[1] + N[i][1] * w]); Rgt.push([p[0] - N[i][0] * w, p[1] - N[i][1] * w]); });
    const tip = Q[Q.length - 1], dir = Math.atan2(tip[1] - Q[Q.length - 2][1], tip[0] - Q[Q.length - 2][0]);
    ctx.save();
    // wash (colour under the ink)
    ctx.fillStyle = `rgba(${MADDER.join(',')},${washA})`;
    ctx.beginPath(); Lft.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); for (let i = Rgt.length - 1; i >= 0; i--) ctx.lineTo(Rgt[i][0], Rgt[i][1]); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.ellipse(tip[0] + Math.cos(dir) * tipR * 0.5 * s, tip[1] + Math.sin(dir) * tipR * 0.5 * s, tipR * 1.15 * s, tipR * s, dir, 0, 7); ctx.fillStyle = `rgba(150,52,48,${washA + 0.15})`; ctx.fill();
    // engraved edges: the shadow side (away from upper-left light) cut heavier
    ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const edge = (A, w) => { ctx.lineWidth = w; ctx.beginPath(); A.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.stroke(); };
    const lowerIsR = N[0][1] < 0; edge(lowerIsR ? Lft : Rgt, 1.3 * s); edge(lowerIsR ? Rgt : Lft, 2.6 * s);
    // cross-hatching on the shaded half (centre to shadow edge), swelling in the middle
    const sh = lowerIsR ? Rgt : Lft; ctx.lineWidth = 1.0 * s;
    for (let i = 2; i < Q.length - 1; i += 3) { const c = Q[i], e = sh[i]; ctx.beginPath(); ctx.moveTo(c[0] + (e[0] - c[0]) * 0.15, c[1] + (e[1] - c[1]) * 0.15); ctx.lineTo(e[0], e[1]); ctx.stroke(); }
    // the club tip, outline + hatch
    const cx = tip[0] + Math.cos(dir) * tipR * 0.5 * s, cy = tip[1] + Math.sin(dir) * tipR * 0.5 * s;
    ctx.lineWidth = 2.4 * s; ctx.beginPath(); ctx.ellipse(cx, cy, tipR * 1.15 * s, tipR * s, dir, 0, 7); ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.ellipse(cx, cy, tipR * 1.15 * s, tipR * s, dir, 0, 7); ctx.clip(); ctx.lineWidth = 0.9 * s;
    for (let k = -3; k <= 3; k++) { const o = k * 5 * s; ctx.beginPath(); ctx.moveTo(cx - 30 * s + o, cy + 4 * s); ctx.lineTo(cx + o + 6 * s, cy + 30 * s); ctx.stroke(); }
    ctx.restore(); ctx.restore();
    return [cx, cy];
  }

  // ---------- the human head (original drawing), local units, facing right, bust base on y = 0 ----------
  const HEAD_D = 'M-200 0 C-200 -80 -180 -130 -130 -160 C-120 -190 -125 -220 -140 -250 C-175 -300 -185 -380 -160 -440 ' +
    'C-130 -510 -50 -545 30 -535 C110 -525 160 -470 170 -400 C172 -380 176 -366 192 -342 C200 -328 204 -316 194 -308 ' +
    'L178 -302 C180 -292 182 -284 176 -278 C182 -270 182 -262 176 -256 C172 -250 174 -240 170 -228 C164 -210 140 -205 110 -210 ' +
    'C100 -200 95 -185 95 -165 C140 -140 200 -110 220 -60 C230 -30 232 -10 232 0 Z';
  function buildHead(x, y, s, t0, span) {
    const f = xf(x, y, s), ink = new B.Ink();
    const sh = engraveBody(ink, HEAD_D, f, { seed: 5, spacing: 4.2, base: 0.04 });
    ink.group('ol');
    stroke(ink, B.ellipsePts(...f([-30, -360]), 30 * s, 46 * s, 0, 30, -1.3, 1.6), 1.8, { taper: 6 });               // ear
    stroke(ink, [f([96, -404]), f([110, -410]), f([126, -404])], 2.0, { taper: 4 });                                     // eye lid
    stroke(ink, [f([120, -440]), f([140, -446]), f([160, -438])], 1.6, { taper: 6 });                                    // brow
    stroke(ink, [f([150, -276]), f([166, -272]), f([178, -270])], 1.4, { taper: 4 });                                    // lip line
    sched(ink, t0, span);
    const eyeInk = new B.Ink(); eyeInk.group('ol'); eyeInk.dot(...f([112, -400]), 5 * s); eyeInk.instant('ol', t0 + span * 0.5); eyeInk.build();
    return { ink, eyeInk, sh, mouth: f([182, -268]), f, s };
  }
  function drawHead(ctx, hd, t) { occlude(ctx, [hd.sh]); hd.ink.draw(ctx, t); hd.eyeInk.draw(ctx, t); }

  // ---------- the chameleon (original drawing), local units, facing right, branch top on y = 0 ----------
  const CBODY = 'M300 -205 C296 -228 280 -250 258 -268 C240 -300 214 -326 186 -340 C176 -320 166 -300 150 -286 ' +
    'C110 -300 40 -330 -40 -332 C-120 -334 -190 -300 -230 -250 C-250 -226 -262 -206 -270 -190 C-240 -176 -200 -150 -150 -136 ' +
    'C-80 -118 0 -116 60 -126 C110 -134 150 -150 180 -168 C210 -176 240 -180 268 -186 C286 -190 298 -196 300 -205 Z';
  function tailPts() {
    const a = bez([-250, -196], [-320, -190], [-372, -130], [-372, -40], 18), out = a.slice();
    const c = [-316, 40], r0 = 62;
    for (let i = 1; i <= 60; i++) { const u = i / 60, ang = Math.PI + u * Math.PI * 3.1, r = r0 * (1 - u * 0.8); out.push([c[0] + Math.cos(ang) * r, c[1] - 0 + Math.sin(ang) * r * 0.95 + 0]); }
    return out;
  }
  function buildCham(x, y, s, t0, span) {
    const f = xf(x, y, s), F = (p) => f(p);
    const br = new B.Ink(), tail = new B.Ink(), body = new B.Ink(), legs = new B.Ink();
    // branch
    const brSh = shape('M-560 6 C-300 -4 -60 2 200 -2 C380 -5 480 2 560 8 L560 30 C470 26 360 34 200 32 C-60 36 -300 30 -560 34 Z', f);
    engraveBody(br, brSh, xf(), { contour: false, angle: 0.02, spacing: 3.6, seed: 2, base: 0.18, wOl: 1.8 });
    // tail (passes in front of the branch)
    const tl = tailPts().map(F), tailSh = ribbon(tl, 44 * s, 8 * s);
    engraveBody(tail, tailSh, xf(), { contour: false, angle: -0.6, spacing: 3.2, seed: 3, base: 0.1, wOl: 1.8 });
    // body + head
    const bodySh = engraveBody(body, CBODY, f, { seed: 4, spacing: 3.6, base: 0.05 });
    const ft = formTone(bodySh.polys, { light: LV, base: 0.1 });
    body.group('h3'); B.stipple(body, bodySh.polys, { density: 0.006 / (s * s) * s, tone: ft, r: 1.1, thr: 0.15, seed: 6 });
    body.group('ol');
    stroke(body, [F([300, -205]), F([256, -197]), F([214, -190])], 2.0, { taper: 6 });                                    // mouth
    stroke(body, bez(F([186, -338]), F([210, -318]), F([238, -290]), F([258, -268]), 10), 1.4, { taper: 6 });              // casque
    stroke(body, bez(F([-230, -250]), F([-120, -230]), F([20, -226]), F([150, -240]), 20), 1.1, { taper: 30 });            // flank fold
    stroke(body, B.ellipsePts(...F([228, -240]), 31 * s, 30 * s, 0, 40), 2.4, { taper: 2 });                              // eye turret
    stroke(body, B.ellipsePts(...F([230, -240]), 21 * s, 20 * s, 0, 40), 1.2, { taper: 2 });
    stroke(body, B.ellipsePts(...F([232, -240]), 12 * s, 12 * s, 0, 30), 1.0, { taper: 2 });
    body.dot(...F([234, -241]), 5.5 * s); body.dot(...F([290, -224]), 2.6 * s);
    // dorsal crest: small engraved teeth along the back
    for (let i = 0; i < 14; i++) { const u = i / 13, p = F([-200 + u * 330, -318 - Math.sin(u * Math.PI) * 14]); stroke(body, [[p[0] - 5 * s, p[1] + 3 * s], [p[0], p[1] - 9 * s], [p[0] + 5 * s, p[1] + 3 * s]], 1.1, { taper: 3 }); }
    // legs: upper + lower segments and a gripping foot
    const legSh = [];
    for (const [sh0, el, ft0, seed] of [[[130, -158], [196, -84], [168, 2], 30], [[-150, -150], [-214, -86], [-178, 2], 34]]) {
      const a = ribbon([F(sh0), F(el)], 40 * s, 30 * s), b = ribbon([F(el), F(ft0)], 30 * s, 22 * s);
      engraveBody(legs, a, xf(), { contour: false, angle: 0.9, spacing: 3.0, seed, base: 0.12, wOl: 1.7 });
      engraveBody(legs, b, xf(), { contour: false, angle: -0.9, spacing: 3.0, seed: seed + 1, base: 0.16, wOl: 1.7 });
      const fo = B.ellipse(...F([ft0[0], ft0[1] + 6]), 24 * s, 11 * s); engraveBody(legs, fo, xf(), { contour: false, angle: 0, spacing: 2.8, seed: seed + 2, base: 0.3, wOl: 1.6 });
      legSh.push(a, b, fo);
    }
    sched(br, t0, span * 0.8); sched(tail, t0 + span * 0.15, span * 0.8); sched(body, t0, span); sched(legs, t0 + span * 0.2, span * 0.8);
    return { br, tail, body, legs, tailSh, bodySh, legSh, f, s, mouth: F([292, -204]), head: F([240, -240]), tip: F([300, -205]), tailBase: F([-270, -190]) };
  }
  function drawCham(ctx, c, t, wash) {
    c.br.draw(ctx, t);
    occlude(ctx, [c.tailSh]); c.tail.draw(ctx, t);
    occlude(ctx, [c.bodySh]); if (wash) wash.draw(ctx, t); c.body.draw(ctx, t);
    occlude(ctx, c.legSh); c.legs.draw(ctx, t);
  }

  // ---------- small engraved props ----------
  function buildCookie(cx, cy, r, t0, seed = 1) {
    const ink = new B.Ink(), sh = B.ellipse(cx, cy, r, r * 0.92, 0, 60);
    engraveBody(ink, sh, xf(), { seed, spacing: 3.0, base: 0.15 });
    const R = RNG(seed + 4); ink.group('h3');
    for (let i = 0; i < 7; i++) { const a = R() * 6.28, d = R() * r * 0.6, p = [cx + Math.cos(a) * d, cy + Math.sin(a) * d]; B.stipple(ink, [B.ellipsePts(p[0], p[1], r * 0.13, r * 0.11, 0, 16)], { density: 0.35, tone: () => 1, r: 1.1, thr: 0, seed: seed + i }); }
    sched(ink, t0, 0.8); return { ink, sh };
  }
  function buildCricket(x, y, s, t0) {
    const f = xf(x, y, s), ink = new B.Ink(), legs = new B.Ink();
    const body = engraveBody(ink, 'M-70 0 C-60 -26 -10 -34 40 -28 C70 -24 86 -12 88 0 C80 14 40 20 0 18 C-40 16 -64 10 -70 0 Z', f, { seed: 41, spacing: 2.6, base: 0.2 });
    const head = engraveBody(ink, B.ellipse(...f([100, -4]), 20 * s, 17 * s), xf(), { seed: 42, spacing: 2.4, base: 0.2 });
    ink.group('ol');
    stroke(ink, bez(f([112, -14]), f([150, -60]), f([190, -70]), f([230, -50]), 14), 1.0, { taper: 10 });
    stroke(ink, bez(f([112, -10]), f([160, -40]), f([200, -30]), f([236, -6]), 14), 1.0, { taper: 10 });
    // big hind leg (jumping leg), kept in its own ink so it can kick
    legs.group('ol');
    stroke(legs, [f([-10, -10]), f([-60, -62]), f([-88, -64])], 3.2, { taper: 6 }); stroke(legs, [f([-88, -64]), f([-110, 6]), f([-128, 22])], 1.8, { taper: 6 });
    stroke(legs, [f([40, 10]), f([30, 40]), f([16, 52])], 1.6, { taper: 5 }); stroke(legs, [f([70, 8]), f([86, 40]), f([96, 54])], 1.6, { taper: 5 });
    sched(ink, t0, 0.9); legs.schedule('ol', t0 + 0.2, t0 + 0.9, { conc: 4 }); legs.build();
    return { ink, legs, occ: [body, head], f, hip: f([-10, -10]) };
  }
  function buildPerson(x, y, s, t0) {
    const ink = new B.Ink(), f = xf(x, y, s);
    const body = 'M-26 -150 C-34 -130 -36 -104 -30 -78 L-24 -78 L-22 0 L-5 0 L-2 -66 L2 -66 L5 0 L22 0 L24 -78 L30 -78 C36 -104 34 -130 26 -150 C14 -158 -14 -158 -26 -150 Z';
    engraveBody(ink, body, f, { seed: 51, spacing: 3.2 });
    engraveBody(ink, B.ellipse(...f([0, -172]), 15 * s, 17 * s), xf(), { seed: 52, spacing: 3 });
    sched(ink, t0, 1.1); return { ink, mouth: f([14, -166]), top: f([0, -189]), foot: f([0, 0]) };
  }

  // ---------- scene objects ----------
  // S1 + S6: the human head and a snack
  const head1 = buildHead(290, 1330, 0.95, -1.2, 3.6);
  const cookie1 = buildCookie(880, 930, 54, 0.1, 3);
  const head2 = buildHead(260, 1330, 0.9, 39.4, 1.4);
  const cookie2 = buildCookie(880, 1052, 48, 39.6, 7);
  const table = (() => {
    const ink = new B.Ink();
    engraveBody(ink, 'M690 1112 L1010 1112 L1010 1134 L690 1134 Z', xf(), { contour: false, angle: 0.02, spacing: 3, seed: 61, base: 0.25, wOl: 1.8 });
    engraveBody(ink, 'M716 1134 L736 1134 L732 1420 L720 1420 Z', xf(), { contour: false, angle: 1.5, spacing: 3, seed: 62, base: 0.35, wOl: 1.6 });
    engraveBody(ink, 'M964 1134 L984 1134 L980 1420 L968 1420 Z', xf(), { contour: false, angle: 1.5, spacing: 3, seed: 63, base: 0.35, wOl: 1.6 });
    ink.group('ol'); stroke(ink, B.ellipsePts(880, 1104, 90, 12, 0, 40), 1.6, { taper: 2 });
    sched(ink, 39.5, 1.2); return ink;
  })();
  // S2/S3: the small chameleon used for the length comparison and the speed push
  const GROUND = 1180;
  const chA = buildCham(230, GROUND, 0.5, 4.6, 2.4);
  const person = buildPerson(150, 1250, 2.0, 9.1);
  // S5: the big chameleon and its cricket
  const washB = new Wash({ scale: 1.2 });
  const chB = buildCham(350, 1250, 0.75, 32.0, 1.4);
  washB.add({ path: chB.bodySh.path, polys: chB.bodySh.polys, color: '#6f8a4a', origin: chB.head, t0: 33.9, dur: 1.5, alpha: 0.7 });
  const cricket = buildCricket(830, 980, 0.9, 32.2);

  // ---------- S4: the mechanism plate (bone, tongue sleeves, ring muscle) ----------
  const MC = { x: 600, y: 990 };
  const bone = (() => {
    const ink = new B.Ink(), x0 = MC.x - 480, x1 = MC.x + 140, r = 22;
    const d = `M${x0} ${MC.y - r} L${x1} ${MC.y - r} C${x1 + 16} ${MC.y - r} ${x1 + 28} ${MC.y - 10} ${x1 + 28} ${MC.y} C${x1 + 28} ${MC.y + 10} ${x1 + 16} ${MC.y + r} ${x1} ${MC.y + r} L${x0} ${MC.y + r} Z`;
    const sh = engraveBody(ink, d, xf(), { contour: false, angle: 0.05, spacing: 3.0, seed: 71, base: 0.12, wOl: 2.2 });
    // the hyoid fork it grows from
    const fork = engraveBody(ink, `M${x0} ${MC.y - 22} C${x0 - 30} ${MC.y - 40} ${x0 - 50} ${MC.y - 80} ${x0 - 56} ${MC.y - 120} L${x0 - 36} ${MC.y - 124} C${x0 - 30} ${MC.y - 84} ${x0 - 10} ${MC.y - 50} ${x0 + 10} ${MC.y - 22} Z`, xf(), { contour: false, angle: 1.0, spacing: 3, seed: 72, base: 0.2, wOl: 1.8 });
    sched(ink, 19.25, 1.1); return { ink, sh, fork, tip: [x1 + 28, MC.y], x0 };
  })();
  // the tongue tube, drawn live: offset dx (slides on / flies off), squeeze q (0..1)
  function drawTube(ctx, t, dx, q) {
    const x0 = MC.x - 330 + dx, x1 = MC.x + 170 + dx, y = MC.y;
    const Ho = 96 - 22 * q, H1 = 70 - 12 * q, H2 = 46 - 6 * q;
    const rr = (h, xa, xb) => { const p = new Path2D(); p.moveTo(xa, y - h); p.lineTo(xb - h * 0.6, y - h); p.bezierCurveTo(xb + h * 0.2, y - h, xb + h * 0.2, y + h, xb - h * 0.6, y + h); p.lineTo(xa, y + h); p.bezierCurveTo(xa - h * 0.35, y + h, xa - h * 0.35, y - h, xa, y - h); p.closePath(); return p; };
    const outer = rr(Ho, x0, x1 + (1 - q) * 0 + q * 40);
    ctx.save();
    ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat'); ctx.fill(outer);
    ctx.fillStyle = `rgba(${MADDER.join(',')},0.42)`; ctx.fill(outer);
    ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round';
    // collagen sleeves (inner), with helical fibres that tighten as they load
    ctx.save(); ctx.clip(outer);
    for (const [h, w] of [[H1, 1.6], [H2, 1.3]]) { ctx.lineWidth = w; ctx.setLineDash([]); ctx.stroke(rr(h, x0 + 20, x1 - 10 + q * 40)); }
    const turns = 16 + q * 18, len = x1 - x0 - 40 + q * 40; ctx.lineWidth = 0.9 + q * 0.5;
    for (let i = 0; i < turns; i++) { const xa = x0 + 30 + (i / turns) * len, xb = xa + len / turns * 0.9; ctx.beginPath(); ctx.moveTo(xa, y - H1 + 3); ctx.quadraticCurveTo((xa + xb) / 2, y, xb, y + H1 - 3); ctx.stroke(); }
    // ring muscle: vertical rings around the outside, each cut as a swelling ellipse arc
    const rings = 14; for (let i = 0; i < rings; i++) { const xa = x0 + 26 + i * (x1 - x0 - 50 + q * 40) / (rings - 1); ctx.lineWidth = 1.2 + 1.4 * q; ctx.beginPath(); ctx.ellipse(xa, y, 8 - 3 * q, Ho - 6, 0, -Math.PI / 2, Math.PI / 2); ctx.stroke(); }
    // shadow hatching on the lower half
    ctx.lineWidth = 0.9; for (let xx = x0 - 40; xx < x1 + 60; xx += 7) { ctx.beginPath(); ctx.moveTo(xx, y + Ho * 0.35); ctx.lineTo(xx + 26, y + Ho + 4); ctx.stroke(); }
    ctx.restore();
    ctx.lineWidth = 2.6; ctx.stroke(outer);
    // the sticky tip pad at the front end
    const tx = x1 + q * 40 - 6; ctx.fillStyle = 'rgba(150,52,48,0.72)'; ctx.beginPath(); ctx.ellipse(tx, y, 22, Ho * 0.82, 0, -Math.PI / 2, Math.PI / 2); ctx.fill();
    ctx.lineWidth = 2.2; ctx.beginPath(); ctx.ellipse(tx, y, 22, Ho * 0.82, 0, -Math.PI / 2, Math.PI / 2); ctx.stroke();
    ctx.restore();
    return { x0, x1, Ho };
  }
  // the slingshot (screen space, engraved strokes drawn live)
  function slingshot(ctx, t) {
    const a = ph(t, 27.6, 28.0); if (a <= 0 || t > 32.4) return;
    const x = 860, y = 1300, rel = eo(ph(t, 29.7, 29.95)), pull = (1 - rel) * eio(ph(t, 27.9, 28.5));
    ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round';
    ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(x, y + 120); ctx.lineTo(x, y + 30); ctx.lineTo(x - 50, y - 50); ctx.moveTo(x, y + 30); ctx.lineTo(x + 50, y - 50); ctx.stroke();
    ctx.lineWidth = 1.1; for (let k = 0; k < 14; k++) { ctx.beginPath(); ctx.moveTo(x + 2, y + 34 + k * 6); ctx.lineTo(x + 4, y + 38 + k * 6); ctx.stroke(); }
    const px = x, py = y - 50 + 120 * pull; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - 50, y - 50); ctx.lineTo(px, py); ctx.lineTo(x + 50, y - 50); ctx.stroke();
    const st = py - 360 * ein(ph(t, 29.75, 30.2)); if (st > PLATE[1] + 260) { ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(px, st, 10, 0, 7); ctx.fill(); }
    ctx.restore();
  }

  // ---------- camera: a loupe over the plate (only the speed scene pushes in) ----------
  function cam(t) {
    const sc = sceneOf(t);
    if (sc === 2) { const u = eio(ph(t, 13.35, 14.7)); const iz = 1 + (1 / 1.5 - 1) * u; return { cx: 540 + (390 - 540) * u, cy: 960 + (1090 - 960) * u, z: 1 / iz }; }
    const a = CUTS[sc], b = CUTS[sc + 1]; return { cx: 540, cy: 960, z: 1 + 0.02 * ph(t, a, Math.min(b, a + 8)) };
  }
  const toScreen = (c, p) => [(p[0] - c.cx) * c.z + W / 2, (p[1] - c.cy) * c.z + HH / 2];

  // ---------- text ----------
  const HEAD = [[-1, 5.0, 'IF YOU HAD ITS TONGUE', 'Chamaeleonidae'], [5.0, 9.0, 'TWICE ITS BODY LENGTH', null], [9.0, 13.3, 'ON YOU: OVER 3 METERS', null],
    [13.3, 19.1, 'ZERO TO SIXTY', 'faster than a sports car'], [19.1, 29.1, 'THE LOADED SPRING', 'a tongue on a bone'], [29.1, 32.45, 'THE RELEASE', null],
    [32.45, 39.9, 'THE STICKY TIP', 'super-thick mucus'], [39.9, 44.2, 'ACROSS THE ROOM', null], [44.2, 99, 'WHAT WOULD YOU|SNATCH FIRST?', null]];
  const SUBT = { 'faster than a sports car': 14.6, 'super-thick mucus': 34.9 };
  // [start, end, text, kind, y]
  const NOTES = [[0.5, 3.3, 'never miss a snack', 'script'], [3.8, 4.95, 'talking... ruined', 'script'], [7.96, 9.0, '× 2', 'big'], [10.35, 13.25, '3 M +', 'big'],
    [15.94, 17.45, '0–60 MPH', 'big'], [17.54, 19.05, '1/100 SEC', 'big'], [22.4, 23.9, 'like a sock on a finger', 'script'], [27.95, 29.1, 'like a slingshot', 'script'],
    [29.7, 30.9, '...then it lets go', 'script'], [33.5, 34.6, 'sticky tip first', 'script'], [35.69, 38.0, '× 400', 'big'], [36.7, 38.0, 'thicker than your spit', 'script', 1440],
    [39.0, 39.9, "can't pull free", 'script'], [41.5, 42.65, 'across the room', 'script'], [42.75, 44.15, 'before anyone saw', 'script'], [45.4, 47.77, 'tell me below', 'script']];
  function label(ctx, str, x, y, p, a = 1) {
    if (p <= 0 || a <= 0) return; ctx.save(); ctx.font = 'italic 500 40px "Bodoni Moda"'; const w = ctx.measureText(str).width;
    ctx.globalAlpha = a * Math.min(1, p * 2); ctx.fillStyle = 'rgba(244,237,219,0.92)'; ctx.fillRect(x - w / 2 - 12, y - 36, w + 24, 50); ctx.restore();
    engraveText(ctx, str, x, y, { size: 40, italic: true, p, alpha: a });
  }
  function band(ctx, y0, y1, a, top = false) {
    if (a <= 0) return; ctx.save(); ctx.fillStyle = ctx.createPattern(bandPaper(), 'no-repeat');
    const F = 36; ctx.globalAlpha = a; ctx.fillRect(0, y0 + (top ? 0 : F), W, y1 - y0 - F * (top ? 1 : 2));
    for (let i = 0; i < 12; i++) { const k = (i + 0.5) / 12; ctx.globalAlpha = a * (1 - k) * 0.35; if (!top) ctx.fillRect(0, y0 + F * (1 - k), W, F * k); ctx.fillRect(0, y1 - F, W, F * k); }
    ctx.restore();
  }
  function drawText(ctx, t) {
    const z = cam(t).z, zb = clamp((z - 1.03) * 6);
    band(ctx, 0, 440, zb, true);
    const noteOn = NOTES.reduce((m, [a, b]) => Math.max(m, ph(t, a - 0.2, a) * (1 - ph(t, b, b + 0.3))), 0);
    band(ctx, 1420, 1650, noteOn * zb);
    for (const [a, b, h, sub] of HEAD) {
      if (t < a - 0.05 || t >= b) continue;
      engraveText(ctx, 'PLATE ' + ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][HEAD.findIndex((x) => x[0] === a)], W / 2, 236, { size: 30, weight: 500, track: 0.3, p: 1, alpha: 0.85 });
      const lines = h.split('|');
      lines.forEach((ln, i) => engraveText(ctx, ln, W / 2, 318 + i * 74, { size: ln.length > 18 ? 58 : 66, weight: 600, track: 0.08, p: ph(t, a + i * 0.4, a + 0.55 + i * 0.4) }));
      if (sub) { const s0 = SUBT[sub] ?? a + 0.4; engraveText(ctx, sub, W / 2, 384, { size: 42, italic: true, weight: 500, p: ph(t, s0, s0 + 0.5) }); }
    }
    for (const [a, b, str, kind, yy] of NOTES) {
      if (t < a || t > b + 0.3) continue;
      const out = 1 - ph(t, b, b + 0.3);
      if (kind === 'big') engraveText(ctx, str, W / 2, 1580, { size: 128, weight: 600, track: 0.06, p: ph(t, a, a + 0.45), alpha: out });
      else writeScript(ctx, str, W / 2, yy || 1550, { size: 76, p: ph(t, a, a + 0.6), alpha: out });
    }
  }
  // a ruled bracket (engraved), used for the length comparisons
  function bracket(ctx, x0, x1, y, p, txt, below = true) {
    if (p <= 0) return; const xe = x0 + (x1 - x0) * eo(clamp(p * 1.3));
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x0, y - 14); ctx.lineTo(x0, y); ctx.lineTo(xe, y); if (xe >= x1 - 0.5) ctx.lineTo(x1, y - 14); ctx.stroke(); ctx.restore();
    if (txt) engraveText(ctx, txt, (x0 + x1) / 2, y + (below ? 46 : -22), { size: 38, weight: 600, track: 0.12, p: ph(p, 0.5, 1) });
  }
  // stopwatch (screen space) for the speed scene: the hand moves 1/100 of a turn, marked by a red wedge
  function stopwatch(ctx, t) {
    const a = ph(t, 15.6, 15.95) * (1 - ph(t, 18.85, 19.1)); if (a <= 0) return;
    const x = 790, y = 640, r = 130; ctx.save(); ctx.globalAlpha = a;
    ctx.fillStyle = ctx.createPattern(bandPaper(), 'no-repeat'); ctx.beginPath(); ctx.arc(x, y, r + 8, 0, 7); ctx.fill();
    const k = ph(t, 17.5, 17.62), a0 = -Math.PI / 2, a1 = a0 + k * Math.PI * 2 * 0.05;
    if (k > 0) { ctx.fillStyle = 'rgba(176,64,48,0.75)'; ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, r - 12, a0, a1); ctx.closePath(); ctx.fill(); }
    ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round'; ctx.lineWidth = 3.2; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.stroke(); ctx.lineWidth = 1.1; ctx.beginPath(); ctx.arc(x, y, r - 8, 0, 7); ctx.stroke();
    for (let i = 0; i < 60; i++) { const an = -Math.PI / 2 + i / 60 * Math.PI * 2, r0 = r - (i % 5 ? 20 : 32); ctx.lineWidth = i % 5 ? 1 : 2.2; ctx.beginPath(); ctx.moveTo(x + Math.cos(an) * r0, y + Math.sin(an) * r0); ctx.lineTo(x + Math.cos(an) * (r - 11), y + Math.sin(an) * (r - 11)); ctx.stroke(); }
    ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(x - 14, y - r - 6); ctx.lineTo(x + 14, y - r - 6); ctx.stroke(); ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x, y - r - 6); ctx.lineTo(x, y - r); ctx.stroke();
    ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a1) * (r - 26), y + Math.sin(a1) * (r - 26)); ctx.stroke();
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(x, y, 7, 0, 7); ctx.fill(); ctx.restore();
  }
  // roundel helper: clip, paper, ruled ground, frame
  function roundel(ctx, x, y, r, a, p, body) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha = a;
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.clip(); ctx.fillStyle = ctx.createPattern(bandPaper(), 'no-repeat'); ctx.fill();
    ctx.strokeStyle = 'rgba(28,21,16,0.16)'; ctx.lineWidth = 1; for (let yy = y - r; yy < y + r; yy += 12) { ctx.beginPath(); ctx.moveTo(x - r, yy); ctx.lineTo(x + r, yy); ctx.stroke(); }
    body(); ctx.restore(); roundelFrame(ctx, x, y, r, { p, w: 3.4 }); ctx.restore();
  }

  // ---------- the frame ----------
  function explainer(ctx, Wc, Hc, t) {
    const c = cam(t), sc = sceneOf(t);
    ctx.save(); ctx.translate(W / 2, HH / 2); ctx.scale(c.z, c.z); ctx.translate(-c.cx, -c.cy);
    ctx.drawImage(sheet(), 0, 0);

    if (sc === 0) {
      // the head shoots its tongue at a cookie and reels it in; then the tongue lolls out ("talking? ruined")
      const eaten = t > 2.45;
      const out = eio(ph(t, 0.78, 1.08)), back = eio(ph(t, 1.35, 2.4));
      const m = head1.mouth, tgt = [880 - 40, 930];
      const tipAt = [tgt[0] + (m[0] - tgt[0]) * back, tgt[1] + (m[1] - tgt[1]) * back];
      if (!eaten) { ctx.save(); if (t > 1.08) { ctx.translate(tipAt[0] - tgt[0] + 30 * back, tipAt[1] - tgt[1]); } cookie1.ink.draw(ctx, t); ctx.restore(); }
      drawHead(ctx, head1, t);
      if (t > 0.78 && t < 2.45) drawTongue(ctx, [m, t > 1.08 ? tipAt : [m[0] + (tgt[0] - m[0]) * out, m[1] + (tgt[1] - m[1]) * out]], 1, { w0: 26, w1: 16, tipR: 20 });
      const loll = eo(ph(t, 3.75, 4.3));
      if (loll > 0) { const wob = Math.sin(t * 9) * 6 * (1 - ph(t, 4.4, 5)); drawTongue(ctx, bez(m, [m[0] + 60, m[1] + 10], [m[0] + 90, m[1] + 80 + wob], [m[0] + 50 + wob, m[1] + 170]), loll, { w0: 26, w1: 22, tipR: 22 }); }
      if (t > 1.0 && t < 2.6) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.4; ctx.globalAlpha = 1 - ph(t, 2.2, 2.6); for (let i = 0; i < 5; i++) { const yy = 880 + i * 22; ctx.beginPath(); ctx.moveTo(960, yy); ctx.lineTo(1010, yy - 4); ctx.stroke(); } ctx.restore(); }
    }

    if (sc === 1 || sc === 2) {
      const chA_a = sc === 1 ? 1 - ph(t, 8.95, 9.3) : ph(t, 13.3, 13.31);
      if (chA_a > 0) {
        ctx.save(); ctx.globalAlpha = chA_a; drawCham(ctx, chA, t);
        // tongue: 2x body length along the branch line
        const bodyLen = (300 + 270) * chA.s, m = chA.mouth;
        if (sc === 1) {
          const e = eio(ph(t, 6.9, 7.9));
          drawTongue(ctx, [m, [m[0] + 2 * bodyLen, m[1] - 4]], e, { w0: 13, w1: 8, tipR: 11 });
          bracket(ctx, chA.tailBase[0], chA.tip[0], GROUND + 120, ph(t, 8.2, 8.7), 'BODY');
          bracket(ctx, chA.tip[0], chA.tip[0] + 2 * bodyLen + 10, GROUND + 120, ph(t, 7.95, 8.5), 'TONGUE');
        } else {
          // the speed flick: out to the right and back in a blink
          const e = t < 16.43 ? eio(ph(t, 16.2, 16.43)) : 1 - eio(ph(t, 16.9, 17.3));
          drawTongue(ctx, [m, [m[0] + 2 * bodyLen, m[1] - 10]], e, { w0: 13, w1: 8, tipR: 11 });
          if (t > 16.2 && t < 17.3) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.2; ctx.globalAlpha = 0.8; for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(m[0] + 40, m[1] - 34 + i * 10 - 30); ctx.lineTo(m[0] + 300, m[1] - 40 + i * 10 - 30); ctx.stroke(); } ctx.restore(); }
        }
        ctx.restore();
      }
      if (sc === 1 && t > 9.05) {
        // a person with the same 2x tongue
        person.ink.draw(ctx, t);
        const pm = person.mouth, h = person.foot[1] - person.top[1], e = eio(ph(t, 9.6, 10.4));
        drawTongue(ctx, [pm, [pm[0] + 2 * h, pm[1]]], e, { w0: 12, w1: 9, tipR: 10 });
        // height rule beside the person, then the tongue rule
        ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; const hp = eo(ph(t, 9.3, 9.9)); ctx.beginPath(); ctx.moveTo(person.top[0] - 80, person.foot[1]); ctx.lineTo(person.top[0] - 80, person.foot[1] - h * hp); ctx.stroke();
        for (const yy of [person.foot[1], person.foot[1] - h]) { if (yy >= person.foot[1] - h * hp - 1) { ctx.beginPath(); ctx.moveTo(person.top[0] - 94, yy); ctx.lineTo(person.top[0] - 66, yy); ctx.stroke(); } } ctx.restore();
        bracket(ctx, pm[0], pm[0] + 2 * h, pm[1] - 50, ph(t, 10.3, 10.9), 'OVER 3 M', false);
        // roundel: the tongue bunched on its bone inside the mouth
        const ra = ph(t, 11.35, 11.7) * (1 - ph(t, 13.0, 13.25));
        if (ra > 0) {
          const R0 = { x: 640, y: 1240, r: 170 };
          ctx.save(); ctx.globalAlpha = ra; leader(ctx, [pm[0] + 6, pm[1] + 10], [R0.x - R0.r * 0.8, R0.y - R0.r * 0.6], { p: ph(t, 11.4, 11.8), w: 1.4 }); ctx.restore();
          roundel(ctx, R0.x, R0.y, R0.r, ra, ph(t, 11.4, 11.9), () => {
            ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round'; const y = R0.y, x0 = R0.x - 130, x1 = R0.x + 110;
            ctx.fillStyle = 'rgba(220,206,170,0.9)'; ctx.fillRect(x0, y - 10, x1 - x0, 20); ctx.lineWidth = 2; ctx.strokeRect(x0, y - 10, x1 - x0, 20);
            const k = ph(t, 11.6, 12.4);
            for (let i = 0; i < 18 * k; i++) { const xx = x0 + 30 + i * 9; ctx.fillStyle = `rgba(${MADDER.join(',')},0.45)`; ctx.beginPath(); ctx.ellipse(xx, y, 7, 52, 0, 0, 7); ctx.fill(); ctx.lineWidth = 1.6; ctx.stroke(); }
            engraveText(ctx, 'bunched', R0.x, R0.y + 112, { size: 36, italic: true, p: ph(t, 12.0, 12.5) });
          });
        }
      }
    }

    if (sc === 3) {
      bone.ink.draw(ctx, t);
      const slideOn = 1 - eio(ph(t, 21.0, 21.95)), fly = ein(ph(t, 29.76, 31.3));
      const q = eio(ph(t, 24.6, 25.6)) * (1 - ph(t, 29.76, 29.9));
      if (t > 20.95) {
        ctx.save(); ctx.beginPath(); ctx.rect(PLATE[0] + 6, PLATE[1] + 6, PLATE[2] - PLATE[0] - 12, PLATE[3] - PLATE[1] - 12); ctx.clip();
        const tb = drawTube(ctx, t, 560 * slideOn + 640 * fly, q);
        if (fly > 0.02) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.4; for (let i = -3; i <= 3; i++) { ctx.beginPath(); ctx.moveTo(tb.x0 - 40 - 200 * fly, MC.y + i * 24); ctx.lineTo(tb.x0 - 30, MC.y + i * 24); ctx.stroke(); } }
        ctx.restore();
        // squeeze arrows: rings press inward
        if (q > 0.05 && t < 29.8) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 3; ctx.globalAlpha = Math.min(1, q * 2);
          for (const sx of [MC.x - 200, MC.x - 40, MC.x + 110]) for (const sg of [-1, 1]) { const y0 = MC.y + sg * 170, y1 = MC.y + sg * (104 - 10 * q); ctx.beginPath(); ctx.moveTo(sx, y0); ctx.lineTo(sx, y1); ctx.stroke(); ctx.beginPath(); ctx.moveTo(sx - 10, y1 + sg * 14); ctx.lineTo(sx, y1); ctx.lineTo(sx + 10, y1 + sg * 14); ctx.stroke(); }
          ctx.restore(); }
      }
    }

    if (sc === 4) {
      // the big chameleon fires at the cricket; the tip lands first and the bug sticks
      const m = chB.mouth, out = eio(ph(t, 33.3, 33.62));
      const kick = t > 38.9 ? Math.sin((t - 38.9) * 22) * 0.35 * (1 - ph(t, 39.4, 39.9)) : 0;
      occlude(ctx, cricket.occ, ph(t, 32.2, 32.5)); cricket.ink.draw(ctx, t);
      ctx.save(); const hp = cricket.hip; ctx.translate(hp[0], hp[1]); ctx.rotate(kick); ctx.translate(-hp[0], -hp[1]); cricket.legs.draw(ctx, t); ctx.restore();
      drawCham(ctx, chB, t, washB);
      const tgt = [cricket.f([-40, -4])[0] - 26, cricket.f([-40, -4])[1] + 4], wob = t > 38.9 ? Math.sin((t - 38.9) * 22) * 5 * (1 - ph(t, 39.4, 39.9)) : 0;
      if (out > 0) drawTongue(ctx, bez(m, [m[0] + 80, m[1] - 20], [tgt[0] - 120, tgt[1] + 20 + wob], [tgt[0], tgt[1] + wob]), out, { w0: 20, w1: 12, tipR: 17 });
      if (t > 33.62 && t < 34.4) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.6; ctx.globalAlpha = 1 - ph(t, 34.0, 34.4); for (let i = 0; i < 8; i++) { const an = i / 8 * 6.28; ctx.beginPath(); ctx.moveTo(tgt[0] + Math.cos(an) * 34, tgt[1] + Math.sin(an) * 34); ctx.lineTo(tgt[0] + Math.cos(an) * 52, tgt[1] + Math.sin(an) * 52); ctx.stroke(); } ctx.restore(); }
      // roundel: the mucus on the tip, magnified
      const ra = ph(t, 34.65, 35.0);
      if (ra > 0) {
        const R0 = { x: 560, y: 650, r: 190 };
        ctx.save(); ctx.globalAlpha = ra; leader(ctx, tgt, [R0.x + R0.r * 0.55, R0.y + R0.r * 0.83], { p: ph(t, 34.7, 35.1), w: 1.5 }); ctx.restore();
        roundel(ctx, R0.x, R0.y, R0.r, ra, ph(t, 34.7, 35.2), () => {
          const cx = R0.x - 30, cy = R0.y + 10;
          ctx.fillStyle = 'rgba(150,52,48,0.7)'; ctx.beginPath(); ctx.ellipse(cx - 60, cy, 120, 92, 0, 0, 7); ctx.fill();
          ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke();
          ctx.lineWidth = 1.1; ctx.save(); ctx.clip(); for (let k = -16; k <= 16; k++) { ctx.beginPath(); ctx.moveTo(cx - 200 + k * 8, cy + 10); ctx.lineTo(cx - 120 + k * 8, cy + 110); ctx.stroke(); } ctx.restore();
          // the cricket's leg, glued by stretching strands of mucus
          const pull = t > 38.9 ? 10 * Math.abs(Math.sin((t - 38.9) * 11)) : 0, lx = cx + 120 + pull;
          ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(lx, cy - 120); ctx.lineTo(lx - 10, cy - 10); ctx.lineTo(lx + 60, cy + 120); ctx.stroke();
          const sp = ph(t, 35.2, 36.4); ctx.lineWidth = 1.6;
          for (let i = 0; i < 7; i++) { const yy = cy - 70 + i * 22, xa = cx + 52 - Math.abs(i - 3) * 6; ctx.beginPath(); ctx.moveTo(xa, yy); ctx.quadraticCurveTo((xa + lx) / 2, yy + 10 + pull * 0.3, xa + (lx - 6 - xa) * sp, yy + (i - 3) * 4); ctx.stroke(); }
          B.stipple; ctx.fillStyle = PAL.ink; const R = RNG(5); for (let i = 0; i < 26; i++) { const an = R() * 6.28, d = 60 + R() * 70; ctx.beginPath(); ctx.arc(cx - 60 + Math.cos(an) * d * 1.2, cy + Math.sin(an) * d * 0.9, 1.6 + R() * 2, 0, 7); ctx.fill(); }
        });
      }
    }

    if (sc === 5) {
      table.draw(ctx, t);
      const m = head2.mouth, tgt = [880 - 30, 1052], out = eio(ph(t, 40.45, 40.94)), back = eio(ph(t, 41.3, 42.4)), gone = t > 42.4;
      const tipAt = [tgt[0] + (m[0] - tgt[0]) * back, tgt[1] + (m[1] - tgt[1]) * back];
      if (!gone) { ctx.save(); if (t > 41.3) ctx.translate(tipAt[0] - tgt[0] + 30 * back, tipAt[1] - tgt[1]); cookie2.ink.draw(ctx, t); ctx.restore(); }
      drawHead(ctx, head2, t);
      if (t > 40.45 && t < 42.4) drawTongue(ctx, [m, t > 41.3 ? tipAt : [m[0] + (tgt[0] - m[0]) * out, m[1] + (tgt[1] - m[1]) * out]], 1, { w0: 24, w1: 15, tipR: 19 });
      if (t > 42.7) { // the crumbs left on the table, and a blink of innocence
        ctx.save(); ctx.fillStyle = PAL.ink; const R = RNG(12); for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.arc(840 + R() * 80, 1098 + R() * 8, 2 + R() * 2, 0, 7); ctx.fill(); } ctx.restore();
        writeScript(ctx, 'whistle...', 520, 760, { size: 56, p: ph(t, 43.3, 43.9) });
      }
    }

    if (sc === 6) {
      // the closing question: three snacks, numbered, cut in one after another
      const items = [[260, 'I'], [540, 'II'], [820, 'III']];
      items.forEach(([x, n], i) => {
        const t0 = 44.4 + i * 0.35, p = ph(t, t0, t0 + 0.6), y = 1080;
        if (p <= 0) return;
        ctx.save(); ctx.globalAlpha = Math.min(1, p * 1.5); ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round';
        roundelFrame(ctx, x, y, 118, { p, w: 2.6 });
        ctx.lineWidth = 2.4;
        if (i === 0) { ctx.fillStyle = 'rgba(176,128,72,0.5)'; ctx.beginPath(); ctx.ellipse(x, y, 66, 60, 0, 0, 7); ctx.fill(); ctx.stroke(); ctx.fillStyle = PAL.ink; for (const [dx, dy] of [[-24, -18], [18, -26], [6, 10], [-30, 22], [32, 18]]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, 7, 0, 7); ctx.fill(); } }
        if (i === 1) { ctx.fillStyle = 'rgba(176,64,48,0.55)'; ctx.beginPath(); ctx.moveTo(x, y - 46); ctx.bezierCurveTo(x + 40, y - 74, x + 84, y - 20, x + 60, y + 34); ctx.bezierCurveTo(x + 44, y + 74, x + 12, y + 66, x, y + 58); ctx.bezierCurveTo(x - 12, y + 66, x - 44, y + 74, x - 60, y + 34); ctx.bezierCurveTo(x - 84, y - 20, x - 40, y - 74, x, y - 46); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y - 46); ctx.quadraticCurveTo(x + 4, y - 70, x + 16, y - 84); ctx.stroke(); }
        if (i === 2) { ctx.fillStyle = 'rgba(190,120,140,0.5)'; ctx.beginPath(); ctx.ellipse(x, y, 74, 62, 0, 0, 7); ctx.ellipse(x, y, 24, 20, 0, 0, 7); ctx.fill('evenodd'); ctx.beginPath(); ctx.ellipse(x, y, 74, 62, 0, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.ellipse(x, y, 24, 20, 0, 0, 7); ctx.stroke(); }
        // hatching on the lower half of each snack
        ctx.save(); ctx.beginPath(); ctx.ellipse(x, y + 30, 80, 44, 0, 0, Math.PI); ctx.clip(); ctx.lineWidth = 1; for (let k = -12; k <= 12; k++) { ctx.beginPath(); ctx.moveTo(x + k * 7, y + 10); ctx.lineTo(x + k * 7 + 20, y + 80); ctx.stroke(); } ctx.restore();
        ctx.restore();
        engraveText(ctx, n, x, y + 168, { size: 46, weight: 600, track: 0.1, p: ph(t, t0 + 0.3, t0 + 0.7) });
      });
      // the tongue curls in from the left like a question mark
      const e = eio(ph(t, 45.9, 46.6)), q0 = [60, 1470];
      drawTongue(ctx, bez(q0, [700, 1520], [900, 1330], [680, 1290]), e, { w0: 22, w1: 14, tipR: 18 });
    }
    ctx.restore();
    if (sc === 2) stopwatch(ctx, t);
    if (sc === 3) {
      // mechanism labels (screen = world here, z ≈ 1)
      label(ctx, 'bone', 230, 1110, ph(t, 20.2, 20.6), 1);
      label(ctx, 'tongue', 600, 850, ph(t, 21.4, 21.8), 1 - ph(t, 23.7, 23.95));
      label(ctx, 'ring muscle', 600, 1225, ph(t, 24.3, 24.8), 1 - ph(t, 29.6, 29.8));
      label(ctx, 'collagen sleeves', 560, 770, ph(t, 25.8, 26.4), 1 - ph(t, 29.6, 29.8));
      slingshot(ctx, t);
    }
    drawText(ctx, t);
  }

  function scoreSound(k) {
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.35 });
    const cut = (t0, t1, g = 0.5) => { for (let t = t0; t < t1; t += 0.42) k.play('stroke', t, { material: 'pencil', dur: 0.4, gain: g, minor: true }); };
    cut(0, 2.2, 0.5); cut(5.0, 7.0, 0.45); cut(9.1, 10.2, 0.4); cut(19.25, 20.4, 0.4); cut(32.45, 33.3, 0.4); cut(39.9, 40.8, 0.4);
    for (const t of CUTS.slice(1, -1)) k.play('paper', t - 0.05, { dur: 0.45, gain: 0.45, minor: true });
    // hook: the shot and the snatch
    k.play('whoosh', 0.75, { dur: 0.35, gain: 0.55 }); k.play('click', 1.08, { f: 1700, gain: 0.8 }); k.play('swish', 1.4, { dur: 0.8, gain: 0.35 }); k.play('tock', 2.4, { f: 420, gain: 0.6 });
    k.tone(3.8, { f: [[0, 260], [0.6, 160]], dur: 0.7, gain: 0.05, minor: true });
    // length
    k.play('swish', 6.95, { dur: 0.9, gain: 0.4 }); k.play('ding', 7.96, { f: 'D6', gain: 0.3 }); k.play('stamp', 10.35, { gain: 0.45 }); k.play('ding', 11.45, { f: 'A5', gain: 0.22 });
    // speed
    k.play('whoosh', 13.4, { dur: 0.8, gain: 0.3, minor: true }); k.play('riser', 15.3, { dur: 0.9, gain: 0.25 }); k.play('whoosh', 16.2, { dur: 0.25, gain: 0.6 }); k.play('click', 16.43, { f: 2000, gain: 0.9 });
    k.play('press', 15.94, { gain: 0.5 }); k.play('tick', 17.54, { f: 3600, gain: 0.6 }); k.play('ding', 17.6, { f: 'E6', gain: 0.28 });
    // mechanism
    k.play('swish', 21.0, { dur: 0.9, gain: 0.4 }); k.play('tock', 21.95, { f: 500, gain: 0.5 });
    k.tone(24.7, { f: [[0, 180], [1.0, 320]], dur: 1.1, gain: 0.06, minor: true }); for (let i = 0; i < 4; i++) k.play('tick', 24.8 + i * 0.2, { f: 2600 + i * 200, gain: 0.3, minor: true });
    k.tone(27.9, { f: [[0, 300], [0.6, 420]], dur: 0.7, gain: 0.05, minor: true });
    k.play('whoosh', 29.76, { dur: 0.5, gain: 0.6 }); k.play('impact', 29.8, { gain: 0.3 }); k.play('swish', 30.9, { dur: 0.6, gain: 0.35 });
    // sticky tip
    k.play('whoosh', 33.3, { dur: 0.3, gain: 0.55 }); k.play('thud', 33.62, { gain: 0.6 }); k.play('blip', 33.65, { gain: 0.3 });
    for (let i = 0; i < 4; i++) k.play('stroke', 33.9 + i * 0.35, { material: 'brush', dur: 0.35, gain: 0.4, minor: true });
    k.play('stamp', 35.69, { gain: 0.45 }); for (let i = 0; i < 5; i++) k.play('tick', 38.95 + i * 0.13, { f: 1800 + (i % 2) * 400, gain: 0.35, minor: true });
    // snatch across the room
    k.play('whoosh', 40.45, { dur: 0.4, gain: 0.55 }); k.play('click', 40.94, { f: 1600, gain: 0.8 }); k.play('swish', 41.3, { dur: 1.0, gain: 0.35 }); k.play('tock', 42.4, { f: 400, gain: 0.6 });
    k.tone(43.3, { f: [[0, 1200], [0.25, 1500], [0.5, 1100]], type: 'sine', dur: 0.6, gain: 0.03, minor: true });
    // question
    for (let i = 0; i < 3; i++) k.play('stamp', 44.4 + i * 0.35, { gain: 0.3 }); k.play('swish', 45.9, { dur: 0.8, gain: 0.3 }); k.play('sparkle', 46.5, { n: 4, gain: 0.3 });
  }
  function thumbnail(ctx, Wc, Hc) { explainer(ctx, Wc, Hc, 7.95); }
  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
