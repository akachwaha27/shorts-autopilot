// ===== Copperplate Engraving (Lemo-Opuscar style), vertical 1080x1920: "Why can horses sleep standing up?" =====
// Drawn with the Lemo-Opuscar engraving engine (window.LEMO, bundled by scripts/lemo_engine.sh). Original horse,
// story, layout and timing; only the engine's line-cutting technique comes from the library.
(function () {
  const W = 1080, HH = 1920;
  const { B, drawSheet, engraveText, writeScript, roundelFrame, leader, Wash, PAL } = window.LEMO;
  const { xf, shape, ring, clamp, hatch, outline, stroke, stipple, fur, RNG, addT, cylTone, formTone } = B;

  // ---------- BEATS (from phrases.json) ----------
  const BEATS = [
    { s: 0.25, e: 1.9, w: { youd: 0.25, topple: 0.61, seconds: 1.34 } },
    { s: 2.2, e: 5.61, w: { kilo: 2.9, horse: 3.84, sleeps: 4.06, standing: 4.4, hours: 5.1 } },
    { s: 6.16, e: 7.8, w: { secret: 6.4, lock: 7.4 } },
    { s: 8.1, e: 9.85, w: { built: 8.1, legs: 9.4 } },
    { s: 10.4, e: 12.24, w: { stay: 11.3, apparatus: 11.6 } },
    { s: 12.54, e: 14.66, w: { web: 12.7, tendons: 13.3, ligaments: 14.0 } },
    { s: 14.96, e: 16.69, w: { holds: 15.2, joints: 15.7, straight: 16.2 } },
    { s: 16.99, e: 18.86, w: { almost: 17.2, muscle: 17.9, effort: 18.3 } },
    { s: 19.41, e: 21.42, w: { back: 19.6, leg: 19.9, cleverer: 20.8 } },
    { s: 21.97, e: 23.44, w: { kneecap: 22.2, slides: 22.7, up: 23.1 } },
    { s: 23.74, e: 26.07, w: { hooks: 23.9, ridge: 24.7, thighbone: 25.4 } },
    { s: 26.37, e: 27.69, w: { leg: 26.9, locks: 27.2 } },
    { s: 27.99, e: 29.16, w: { kickstand: 28.4 } },
    { s: 29.71, e: 31.73, w: { leans: 30.3, leg: 31.4 } },
    { s: 32.03, e: 33.32, w: { tips: 32.03, hoof: 32.9 } },
    { s: 33.62, e: 34.58, w: { dozes: 33.9 } },
    { s: 35.13, e: 36.58, w: { predator: 35.4 } },
    { s: 36.88, e: 38.5, w: { already: 37.1, feet: 38.1 } },
    { s: 39.05, e: 40.69, w: { light: 39.9, sleep: 40.3 } },
    { s: 41.24, e: 42.07, w: { dream: 41.6 } },
    { s: 42.37, e: 44.18, w: { lie: 43.5, down: 43.8 } },
    { s: 44.48, e: 46.99, w: { muscles: 45.2, slack: 46.5 } },
    { s: 47.54, e: 49.84, w: { half: 48.3, hour: 48.8, day: 49.6 } },
    { s: 50.39, e: 52.7, w: { rather: 51.1, lie: 51.6, dream: 52.3 } },
    { s: 53.0, e: 55.32, w: { standing: 53.6, horse: 54.9 } },
  ];
  const DURATION = 55.32 + 1.0;
  window.BEATS = BEATS; window.DURATION = DURATION;
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const eo = (x) => 1 - Math.pow(1 - x, 3);
  const LV = [-0.55, -0.62], L3 = { x: -0.55, y: -0.62, z: 0.56 };

  // ---------- the horse (original drawing), local units, facing left, hooves on y = 0 ----------
  const BODY = 'M-205 -300 C-232 -340 -250 -400 -256 -450 C-262 -500 -300 -575 -336 -612 ' +
    'C-352 -604 -372 -590 -390 -584 C-416 -574 -440 -560 -456 -556 C-468 -553 -476 -558 -478 -566 ' +
    'C-482 -580 -480 -596 -472 -606 C-450 -636 -414 -672 -386 -698 C-376 -708 -366 -716 -360 -722 ' +
    'C-362 -740 -360 -758 -352 -772 C-344 -760 -338 -742 -338 -726 ' +
    'C-300 -700 -255 -640 -215 -575 C-195 -542 -175 -520 -150 -508 C-130 -500 -110 -500 -90 -494 ' +
    'C-40 -484 40 -486 110 -496 C160 -506 210 -502 240 -482 C262 -460 272 -420 266 -380 ' +
    'C258 -350 230 -332 200 -324 C150 -314 100 -296 40 -284 C-30 -272 -110 -276 -150 -286 C-175 -292 -195 -296 -205 -300 Z';
  // near fore leg, one outline from elbow to hoof (forearm, knee, cannon, fetlock, pastern)
  const FORE = 'M-222 -330 C-214 -290 -200 -236 -192 -196 C-190 -182 -190 -168 -192 -154 C-194 -120 -194 -88 -194 -66 ' +
    'C-198 -52 -204 -40 -212 -26 L-224 -20 L-174 -20 C-170 -30 -164 -40 -158 -50 C-156 -62 -162 -76 -164 -96 ' +
    'C-166 -124 -166 -148 -164 -170 C-162 -184 -162 -196 -160 -212 C-150 -252 -140 -296 -136 -330 Z';
  // near hind leg: upper (thigh, gaskin, down to the hock) and lower (cannon to pastern), split at the hock
  const HIND_UP = 'M146 -350 C158 -304 176 -262 192 -236 C200 -222 204 -196 206 -164 L248 -164 C248 -180 244 -198 242 -216 ' +
    'C246 -250 252 -290 260 -330 C266 -356 268 -380 266 -400 C230 -380 186 -364 146 -350 Z';
  const HIND_LO = 'M206 -172 C206 -130 208 -96 208 -66 C206 -52 200 -38 192 -26 L182 -20 L232 -20 C234 -30 238 -40 244 -52 ' +
    'C244 -64 240 -78 238 -98 C236 -124 238 -148 248 -172 Z';
  const HOOF = (x, w, dir = -1) => `M${x - w * 0.42} -21 L${x + w * 0.42} -21 L${x + w * 0.5 - (dir < 0 ? 0 : 6)} 0 L${x - w * 0.62} 0 Z`;
  const HOOVES = { fore: [-197, 52], hind: [205, 52] };

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
  function hoofInk(ink, x, w, f) {
    const h = shape(HOOF(x, w), f); ink.group('ol'); outline(ink, h.polys[0], { w: 1.8, light: LV });
    ink.group('h2'); hatch(ink, h.polys, { angle: 0.15, spacing: 2.8, tone: () => 0.75, thr: 0.1, wMax: 1.3 }); return h;
  }
  const legOpts = { contour: false, spacing: 3.3, angle: -0.2, wOl: 1.8 };

  // A standing horse at (x, y, s). Separate inks so parts can move: far (far legs), farHindLow (far hind below the
  // hock, tips onto its toe), body (body, head, near fore, near hind thigh), hindLow (near hind below the hock).
  // occ = silhouettes of the near parts, filled with paper before their ink so they hide the far legs.
  function buildHorse(x, y, s) {
    const f = xf(x, y, s);
    const far = new B.Ink(), body = new B.Ink(), farHindLow = new B.Ink(), hindLow = new B.Ink();
    const ff = xf(x + 34 * s, y - 3 * s, s), fh = xf(x + 26 * s, y - 3 * s, s);
    engraveBody(far, FORE, ff, { ...legOpts, dark: 0.25, seed: 11 }); hoofInk(far, ...HOOVES.fore, ff);
    engraveBody(far, HIND_UP, fh, { ...legOpts, dark: 0.25, seed: 12 });
    const farLoSh = engraveBody(farHindLow, HIND_LO, fh, { ...legOpts, dark: 0.28, seed: 13 }); const farHoof = hoofInk(farHindLow, ...HOOVES.hind, fh);
    const bodySh = engraveBody(body, BODY, f, { seed: 3 });
    const foreSh = engraveBody(body, FORE, f, { ...legOpts, seed: 21 }); const foreHoof = hoofInk(body, ...HOOVES.fore, f);
    const thighSh = engraveBody(body, HIND_UP, f, { ...legOpts, seed: 22, contour: true, spacing: 3.6 });
    const loSh = engraveBody(hindLow, HIND_LO, f, { ...legOpts, seed: 23 }); const hindHoof = hoofInk(hindLow, ...HOOVES.hind, f);
    // mane along the crest (falls to the near side), forelock, tail
    body.group('h3');
    const R = RNG(7);
    for (let i = 0; i < 120; i++) {
      const u = R(), px = -342 + u * 196, py = -728 + u * 222, p = f([px + 2, py + 2]), len = (22 + R() * 30) * s * (1 - u * 0.35);
      stroke(body, [p, [p[0] + 8 * s, p[1] + len * 0.45], [p[0] + (12 + R() * 8) * s, p[1] + len]], 0.9 + R() * 0.9, { taper: 8 });
    }
    for (let i = 0; i < 10; i++) { const p = f([-352 + R() * 10, -724]); stroke(body, [p, [p[0] - 14 * s, p[1] + 18 * s], [p[0] - (24 + R() * 10) * s, p[1] + (30 + R() * 10) * s]], 1.1, { taper: 6 }); }
    const tailSh = shape('M238 -486 C262 -470 280 -430 284 -380 C290 -320 296 -270 300 -232 C290 -226 270 -228 258 -236 C258 -290 252 -350 246 -400 C242 -430 236 -460 228 -478 Z', f);
    for (let i = 0; i < 90; i++) {
      const u = R(), a = f([236 + u * 8, -482 + u * 10]), sway = R() * 26 - 6, e = f([262 + sway + u * 20, -236 - R() * 30]), c = f([272 + sway * 0.4, -400]);
      stroke(body, [a, c, [(c[0] + e[0]) / 2 + 3 * s, (c[1] + e[1]) / 2], e], 0.8 + R() * 1.0, { taper: 14 });
    }
    // fixed head details: nostril, cheek line, jaw
    body.group('ol');
    stroke(body, [f([-462, -590]), f([-456, -598]), f([-452, -588])], 1.8, { taper: 3 });
    stroke(body, [f([-380, -646]), f([-360, -616]), f([-366, -590])], 1.3, { taper: 8 });
    stroke(body, [f([-346, -720]), f([-344, -742]), f([-348, -758])], 0.9, { taper: 4 });
    const occBody = [bodySh, foreSh, foreHoof, thighSh, tailSh], occLow = [loSh, hindHoof];
    return { body, far, farHindLow, hindLow, f, s, x, y, occBody, occLow,
      hock: f([226, -168]), farHock: fh([226, -168]), farHoof: fh([205, 0]), stifle: f([176, -300]), knee: f([-178, -180]),
      elbow: f([-180, -320]), shoulder: f([-215, -420]), fetF: f([-180, -60]), fetH: f([224, -60]), eye: f([-398, -652]),
      head: f([-420, -620]), withers: f([-150, -506]), hipTop: f([180, -502]), belly: f([0, -280]), muzzle: f([-470, -580]) };
  }
  // the eye: open (almond + pupil) or closed (a lid arc with lashes); o = 0 closed .. 1 open
  function drawEye(ctx, hz, o) {
    const [ex, ey] = hz.eye, s = hz.s;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineCap = 'round';
    ctx.lineWidth = 2.2 * s; ctx.beginPath(); ctx.moveTo(ex - 11 * s, ey); ctx.quadraticCurveTo(ex, ey - 9 * s * (0.3 + 0.7 * o), ex + 11 * s, ey + 1 * s); ctx.stroke();
    if (o > 0.15) { ctx.beginPath(); ctx.ellipse(ex - 0.5 * s, ey + 0.5 * s, 4.4 * s, 4.6 * s * o, 0, 0, 7); ctx.fill(); ctx.lineWidth = 1.2 * s; ctx.beginPath(); ctx.moveTo(ex - 10 * s, ey + 1 * s); ctx.quadraticCurveTo(ex, ey + 6 * s, ex + 10 * s, ey + 1.5 * s); ctx.stroke(); }
    else { ctx.lineWidth = 1.1 * s; for (let i = 0; i < 4; i++) { const u = -0.6 + i * 0.4, lx = ex + u * 10 * s, ly = ey + 1.5 * s; ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(lx - 1.5 * s, ly + 5 * s); ctx.stroke(); } }
    ctx.restore();
  }

  // ---------- plate layout ----------
  const PLATE = [44, 168, 1036, 1652];
  const GROUND = 1246, HX = 600;
  const horse = buildHorse(HX, GROUND, 1.0);
  function sched(ink, t0, span = 3.6, pre = '') {
    ink.schedule(pre + 'ol', t0, t0 + span * 0.55, { conc: 10 });
    ink.schedule(pre + 'h1', t0 + span * 0.25, t0 + span * 0.8, { conc: 60 });
    ink.schedule(pre + 'h2', t0 + span * 0.45, t0 + span * 0.95, { conc: 60 });
    ink.schedule(pre + 'h3', t0 + span * 0.6, t0 + span, { conc: 70 });
    ink.build();
  }
  // the sheet, rendered once: also used as the paper fill that lets near parts hide far ones
  let sheetC = null;
  function sheet() { if (sheetC) return sheetC; sheetC = document.createElement('canvas'); sheetC.width = W; sheetC.height = HH; drawSheet(sheetC.getContext('2d'), { W, H: HH, plate: PLATE }); return sheetC; }
  let bandC = null;   // plain plate-toned paper (no plate mark) for the paper bands behind type
  function bandPaper() { if (bandC) return bandC; bandC = document.createElement('canvas'); bandC.width = W; bandC.height = HH; drawSheet(bandC.getContext('2d'), { W, H: HH, plate: [-20, -20, W + 20, HH + 20] }); return bandC; }
  function occlude(ctx, shapes, a = 1) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat');
    for (const sh of shapes) ctx.fill(sh.path, 'nonzero'); ctx.restore();
  }
  function drawHorse(ctx, hz, t, o = {}) {
    const { farTip = 0, eye = 1, occ = 1 } = o;
    hz.far.draw(ctx, t);
    ctx.save(); if (farTip) { const [px, py] = hz.farHock; ctx.translate(px, py); ctx.rotate(farTip); ctx.translate(-px, -py); } hz.farHindLow.draw(ctx, t); ctx.restore();
    occlude(ctx, hz.occBody, occ); occlude(ctx, hz.occLow, occ);
    hz.body.draw(ctx, t); hz.hindLow.draw(ctx, t);
    if (t > 0.6) drawEye(ctx, hz, eye);
  }
  // the horse cuts itself in while the hook plays (first line already on the plate at frame 0)
  sched(horse.far, -1.4, 5.6); sched(horse.body, -1.6, 6.4); sched(horse.farHindLow, -1.2, 5.6); sched(horse.hindLow, -1.1, 5.6);

  // ---------- the lying horse (sternal, legs folded), engraved in at "lie down" ----------
  const LIE = (() => {
    const y = GROUND + 250, f = xf(HX + 10, y, 1), ink = new B.Ink(), far = new B.Ink();
    // folded legs: far fore tucked, near fore folded forward, near hind tucked under the belly
    const tubeSh = (a, b, w0, w1) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), px = -dy / L, py = dx / L; return shape(`M${a[0] + px * w0 / 2} ${a[1] + py * w0 / 2} L${b[0] + px * w1 / 2} ${b[1] + py * w1 / 2} L${b[0] - px * w1 / 2} ${b[1] - py * w1 / 2} L${a[0] - px * w0 / 2} ${a[1] - py * w0 / 2} Z`, f); };
    const legs = [tubeSh([-170, -310], [-250, -282], 50, 30), tubeSh([-250, -282], [-150, -262], 26, 24), tubeSh([170, -300], [60, -262], 40, 28)];
    const farLeg = tubeSh([-150, -300], [-60, -258], 34, 26);
    engraveBody(far, farLeg, xf(0, 0, 1), { ...legOpts, dark: 0.28, seed: 31 });
    const bodySh = engraveBody(ink, BODY, f, { seed: 33, g: '' });
    const legSh = legs.map((L, i) => engraveBody(ink, L, xf(0, 0, 1), { ...legOpts, seed: 40 + i }));
    const hoofSh = [shape('M-158 -280 L-130 -276 L-128 -254 L-158 -250 Z', f), shape('M66 -280 L40 -276 L36 -254 L66 -248 Z', f)];
    for (const h of hoofSh) { ink.group('ol'); outline(ink, h.polys[0], { w: 1.7, light: LV }); ink.group('h2'); hatch(ink, h.polys, { angle: 1.2, spacing: 2.8, tone: () => 0.75, thr: 0.1, wMax: 1.2 }); }
    const R = RNG(17); ink.group('h3');
    for (let i = 0; i < 110; i++) { const u = R(), p0 = f([-340 + u * 194, -726 + u * 222]), len = (22 + R() * 28) * (1 - u * 0.35); stroke(ink, [p0, [p0[0] + 8, p0[1] + len * 0.45], [p0[0] + 12 + R() * 8, p0[1] + len]], 0.9 + R() * 0.9, { taper: 8 }); }
    for (let i = 0; i < 70; i++) { const a = f([238, -480]), e = f([300 + R() * 60, -300 + R() * 26]), c = f([290, -420]); stroke(ink, [a, c, e], 0.8 + R(), { taper: 12 }); }
    ink.group('ol'); stroke(ink, [f([-462, -590]), f([-456, -598]), f([-452, -588])], 1.8, { taper: 3 }); stroke(ink, [f([-380, -646]), f([-360, -616]), f([-366, -590])], 1.3, { taper: 8 });
    // ground shadow: a few horizontal engraved lines
    ink.group('h3'); for (let i = 0; i < 9; i++) { const yy = GROUND + 2 + i * 4.5, w = 330 - i * 30; stroke(ink, [[HX - w, yy], [HX + w * 0.95, yy]], 1.1 - i * 0.08, { taper: 40 }); }
    sched(far, 42.3, 2.0); sched(ink, 42.35, 2.2);
    return { ink, far, f, occ: [bodySh, ...legSh, ...hoofSh], eye: { eye: f([-398, -652]), s: 1 }, head: f([-420, -630]), body: bodySh };
  })();
  // ground line under the standing horse
  const groundInk = new B.Ink(); groundInk.group('main');
  for (let i = 0; i < 7; i++) { const yy = GROUND + 2 + i * 4.5, w = 300 - i * 34; stroke(groundInk, [[HX - 30 - w, yy], [HX + 10 + w, yy]], 1.1 - i * 0.1, { taper: 40 }); }
  groundInk.schedule('main', 0.6, 2.6, { conc: 3 }); groundInk.build();

  // ---------- small engraved props ----------
  // the person who topples (hook), built at its roundel's screen position
  const PERSON_AT = [830, 560];
  const person = (() => {
    const ink = new B.Ink(), f = xf(0, 0, 1);
    const bodyD = 'M-26 -150 C-34 -130 -36 -104 -30 -78 L-24 -78 L-22 0 L-5 0 L-2 -66 L2 -66 L5 0 L22 0 L24 -78 L30 -78 C36 -104 34 -130 26 -150 C14 -158 -14 -158 -26 -150 Z';
    engraveBody(ink, bodyD, f, { seed: 51, spacing: 3.2 });
    const head = B.ellipse(0, -172, 15, 17); engraveBody(ink, head, f, { seed: 52, spacing: 3 });
    ink.schedule(['ol', 'h1', 'h2', 'h3'], -1, -0.5, { conc: 999 }); ink.build();
    return ink;
  })();
  // padlock between the legs
  const lock = (() => {
    const ink = new B.Ink(), cx = 612, cy = 1110;
    const bodySh = engraveBody(ink, `M${cx - 34} ${cy - 18} L${cx + 34} ${cy - 18} L${cx + 34} ${cy + 36} L${cx - 34} ${cy + 36} Z`, xf(0, 0, 1), { seed: 61, spacing: 3, contour: false, angle: 0.3 });
    ink.group('ol'); stroke(ink, B.ellipsePts(cx, cy - 18, 22, 30, 0, 40, Math.PI, Math.PI * 2), 5.5, { taper: 2 }); stroke(ink, B.ellipsePts(cx, cy - 18, 15, 23, 0, 40, Math.PI, Math.PI * 2), 1.4, { taper: 2 });
    ink.group('h3'); B.stipple(ink, [[[cx - 5, cy + 2], [cx + 5, cy + 2], [cx + 3, cy + 18], [cx - 3, cy + 18]]], { density: 0.6, tone: () => 1, r: 1.1, thr: 0 });
    ink.schedule('ol', 7.25, 7.75, { conc: 3 }); ink.schedule(['h1', 'h2', 'h3'], 7.4, 7.95, { conc: 50 }); ink.build();
    return { ink, at: [cx, cy], occ: bodySh };
  })();
  // tendons and ligaments of the near fore (stay apparatus), cut as heavy engraved lines
  const stay = (() => {
    const ink = new B.Ink(), f = horse.f;
    ink.group('tend');
    stroke(ink, [f([-150, -318]), f([-156, -250]), f([-162, -196]), f([-163, -140]), f([-164, -96]), f([-160, -60]), f([-170, -32])], 4.2, { taper: 20 });
    stroke(ink, [f([-158, -300]), f([-170, -240]), f([-172, -190]), f([-174, -130]), f([-172, -80]), f([-166, -54])], 2.6, { taper: 20 });
    stroke(ink, [f([-226, -420]), f([-214, -360]), f([-204, -300]), f([-196, -240]), f([-190, -196])], 3.4, { taper: 18 });
    ink.group('lig');
    for (const [x, y] of [[-176, -186], [-178, -60], [-190, -330]]) { for (let i = 0; i < 4; i++) stroke(ink, [f([x - 20, y - 10 + i * 6]), f([x + 22, y - 6 + i * 6])], 2.0, { taper: 6 }); }
    ink.schedule('tend', 13.05, 14.0, { conc: 3 }); ink.schedule('lig', 13.9, 14.6, { conc: 4 }); ink.build();
    return ink;
  })();
  // the wolf that wanders in at the edge (original silhouette)
  const wolf = (() => {
    const ink = new B.Ink(), f = xf(905, GROUND, 0.42);
    const d = 'M-150 -150 C-140 -168 -128 -180 -118 -184 L-110 -206 L-100 -186 C-80 -186 -60 -170 -40 -160 C0 -164 60 -166 110 -160 C140 -156 160 -146 180 -150 C200 -152 220 -140 240 -120 C220 -126 200 -128 186 -124 C176 -100 172 -60 170 -10 L170 0 L150 0 L152 -60 C140 -90 120 -100 100 -104 L96 -40 L100 0 L80 0 L76 -60 C40 -70 0 -70 -40 -76 L-46 0 L-66 0 L-66 -86 C-80 -100 -96 -120 -112 -130 C-130 -128 -150 -132 -160 -138 Z';
    const sh = engraveBody(ink, d, f, { seed: 71, spacing: 4.6, base: 0.25 });
    ink.schedule('ol', 35.05, 35.7, { conc: 4 }); ink.schedule(['h1', 'h2', 'h3'], 35.2, 36.0, { conc: 60 }); ink.build();
    return { ink, occ: sh, eye: f([-122, -168]) };
  })();
  // the stifle mechanism, drawn in its roundel (screen space). Local units, roundel centre at (0, 0), radius 250.
  const RND = { x: 540, y: 640, r: 250 };
  const stifle = (() => {
    const ink = new B.Ink(), f = xf(RND.x, RND.y - 40, 1);
    // femur: shaft from upper right to the knee end; trochlea at the front (left) with the big medial ridge on top
    const femur = 'M60 -260 C40 -200 20 -150 10 -100 C0 -70 -40 -64 -70 -54 C-96 -46 -112 -28 -112 -6 C-108 10 -100 20 -92 30 C-104 52 -104 80 -88 100 C-60 130 0 130 40 110 C78 92 96 60 94 30 C92 -10 96 -60 110 -110 C124 -160 136 -210 150 -260 Z';
    const tibia = 'M-70 150 C-40 140 20 140 60 150 C80 160 80 190 70 220 L62 290 L-28 290 L-40 220 C-80 200 -96 170 -70 150 Z';
    const fs = engraveBody(ink, femur, f, { seed: 81, spacing: 3.6, base: 0.12 });
    const ts = engraveBody(ink, tibia, f, { seed: 82, spacing: 3.6, base: 0.12 });
    // the ridge itself, picked out with an extra contour
    ink.group('ol'); stroke(ink, [f([-112, -6]), f([-118, -30]), f([-104, -50]), f([-70, -56])], 2.6, { taper: 4 });
    ink.schedule('ol', 20.0, 20.9, { conc: 6 }); ink.schedule('h1', 20.3, 21.2, { conc: 60 }); ink.schedule('h2', 20.5, 21.4, { conc: 60 }); ink.schedule('h3', 20.7, 21.5, { conc: 60 }); ink.build();
    // the kneecap (patella), its own ink drawn at the origin and moved
    const pink = new B.Ink(); const pel = B.ellipse(0, 0, 26, 38, 0.15); engraveBody(pink, pel, xf(0, 0, 1), { seed: 83, spacing: 2.6, base: 0.15 });
    pink.schedule(['ol', 'h1', 'h2', 'h3'], 21.6, 22.0, { conc: 80 }); pink.build();
    return { ink, pink, fs, ts };
  })();
  // where the kneecap sits, local roundel coords, by time: low in the groove → slides up → hops over the ridge → locked
  function patellaPos(t) {
    const P0 = [-122, 52], P1 = [-138, -20], P2 = [-150, -60], P3 = [-126, -118];
    const a = eio(ph(t, 22.6, 23.4)), b = eio(ph(t, 23.9, 25.6));
    if (b <= 0) return [P0[0] + (P1[0] - P0[0]) * a, P0[1] + (P1[1] - P0[1]) * a, 0.15];
    const u = b, x = (1 - u) * (1 - u) * P1[0] + 2 * u * (1 - u) * P2[0] + u * u * P3[0], y = (1 - u) * (1 - u) * P1[1] + 2 * u * (1 - u) * P2[1] + u * u * P3[1];
    return [x, y, 0.15 - 0.35 * u];
  }

  // ---------- the hand colouring of the lying horse, and the 24-hour dial ----------
  const wash = new Wash({ scale: 1.5 });
  wash.add({ path: LIE.body.path, polys: LIE.body.polys, color: '#9a6237', origin: [HX - 80, GROUND - 240], t0: 44.6, dur: 1.4, alpha: 0.8 });
  const DIAL = { x: 540, y: 560, r: 150 };
  const washDial = new Wash({ scale: 1.5 });
  const dialInk = (() => {
    const ink = new B.Ink(); ink.group('ol');
    stroke(ink, B.ellipsePts(DIAL.x, DIAL.y, DIAL.r, DIAL.r, 0, 160, -Math.PI / 2, Math.PI * 1.5), 2.6, { taper: 1 });
    stroke(ink, B.ellipsePts(DIAL.x, DIAL.y, DIAL.r - 8, DIAL.r - 8, 0, 160, -Math.PI / 2, Math.PI * 1.5), 0.9, { taper: 1 });
    for (let i = 0; i < 24; i++) { const a = -Math.PI / 2 + i / 24 * Math.PI * 2, r0 = DIAL.r - (i % 6 ? 22 : 34); stroke(ink, [[DIAL.x + Math.cos(a) * r0, DIAL.y + Math.sin(a) * r0], [DIAL.x + Math.cos(a) * (DIAL.r - 12), DIAL.y + Math.sin(a) * (DIAL.r - 12)]], i % 6 ? 1.2 : 2.2, { taper: 2 }); }
    ink.schedule('ol', 47.55, 48.4, { conc: 4 }); ink.build(); return ink;
  })();
  const wedge = new Path2D(); { const a0 = -Math.PI / 2, a1 = a0 + (30 / 1440) * Math.PI * 2; wedge.moveTo(DIAL.x, DIAL.y); wedge.arc(DIAL.x, DIAL.y, DIAL.r - 10, a0, a1); wedge.closePath(); }
  washDial.add({ path: wedge, polys: [[[DIAL.x, DIAL.y], [DIAL.x, DIAL.y - DIAL.r], [DIAL.x + 18, DIAL.y - DIAL.r]]], color: '#b8432f', origin: [DIAL.x, DIAL.y - 60], t0: 48.5, dur: 0.6, alpha: 0.95 });

  // ---------- camera: a loupe over the plate (cx, cy, zoom) ----------
  const KEYS = [[0, 540, 960, 1], [5.8, 540, 960, 1], [7.0, 600, 1080, 1.45], [10.1, 600, 1080, 1.45], [11.3, 440, 1040, 1.95], [19.1, 440, 1040, 1.95],
    [20.3, 690, 900, 1.35], [29.2, 690, 900, 1.35], [30.4, 560, 980, 1.06], [41.0, 560, 980, 1.06], [42.2, 540, 1000, 1.08], [47.2, 540, 1000, 1.08], [48.0, 540, 960, 1.0], [56.4, 540, 960, 1.0]];
  function cam(t) {
    let i = 0; while (i < KEYS.length - 2 && t > KEYS[i + 1][0]) i++;
    const [t0, x0, y0, z0] = KEYS[i], [t1, x1, y1, z1] = KEYS[i + 1], u = eio(ph(t, t0, t1));
    const iz = 1 / z0 + (1 / z1 - 1 / z0) * u;                               // zoom interpolated in 1/z: pushes feel like dollies
    return { cx: x0 + (x1 - x0) * u, cy: y0 + (y1 - y0) * u, z: 1 / iz };
  }
  const toScreen = (c, p) => [(p[0] - c.cx) * c.z + W / 2, (p[1] - c.cy) * c.z + HH / 2];

  // ---------- text: headlines (top) and notes (bottom), all in screen space inside the safe zones ----------
  const HEAD = [[-1, 6.0, 'THE STANDING SLEEPER', 'Equus caballus'], [6.16, 10.2, 'A LOCK IN THE LEGS', null], [10.4, 19.2, 'THE STAY APPARATUS', 'tendons & ligaments'],
    [19.41, 29.4, 'THE KNEECAP LOCK', null], [29.71, 35.0, 'DOZING ON ITS FEET', null], [35.13, 38.9, 'READY TO RUN', null], [39.05, 41.1, 'ONLY LIGHT SLEEP', null],
    [41.24, 47.4, 'TO DREAM, IT LIES DOWN', 'REM sleep'], [47.54, 50.2, 'DREAMING SLEEP', 'in one day'], [50.39, 56.4, 'WHICH WOULD YOU CHOOSE?', null]];
  const SUBT = { 'tendons & ligaments': 13.3, 'REM sleep': 44.6 };
  const NOTES = [[1.2, 2.1, 'in seconds', 'script'], [2.9, 6.0, '500 KG', 'big'], [5.0, 6.0, 'asleep for hours', 'script'], [15.2, 16.9, 'holds the joints straight', 'script'],
    [17.2, 19.2, 'almost no muscle effort', 'script'], [27.2, 28.0, 'locked', 'script'], [28.2, 29.4, 'like a kickstand', 'script'], [33.9, 35.0, 'z z z', 'script'],
    [37.1, 38.9, 'already on its feet', 'script'], [44.9, 47.4, 'muscles totally slack', 'script'], [48.3, 50.2, '≈ 30 MIN', 'big']];
  // an italic label on a small paper slip (stays readable over hatching)
  function label(ctx, str, x, y, p, a) {
    if (p <= 0 || a <= 0) return; ctx.save(); ctx.font = 'italic 500 34px "Bodoni Moda"'; const w = ctx.measureText(str).width;
    ctx.globalAlpha = a * Math.min(1, p * 2); ctx.fillStyle = 'rgba(244,237,219,0.92)'; ctx.fillRect(x - w / 2 - 10, y - 30, w + 20, 42); ctx.restore();
    engraveText(ctx, str, x, y, { size: 34, italic: true, p, alpha: a });
  }
  // paper behind the headline and the notes, so a zoomed-in figure never runs under the type
  function band(ctx, y0, y1, a, top = false) {
    if (a <= 0) return; ctx.save(); ctx.fillStyle = ctx.createPattern(bandPaper(), 'no-repeat');
    const F = 36; ctx.globalAlpha = a; ctx.fillRect(0, y0 + (top ? 0 : F), W, y1 - y0 - F * (top ? 1 : 2));
    for (let i = 0; i < 12; i++) { const k = (i + 0.5) / 12; ctx.globalAlpha = a * (1 - k) * 0.35; if (!top) ctx.fillRect(0, y0 + F * (1 - k), W, F * k); ctx.fillRect(0, y1 - F, W, F * k); }
    ctx.restore();
  }
  function drawText(ctx, t) {
    const z = cam(t).z;
    band(ctx, 0, 430, clamp((z - 1.02) * 6), true);
    const noteOn = NOTES.reduce((m, [a, b, str, kind]) => Math.max(m, kind === 'big' || str === 'in seconds' ? 0 : ph(t, a - 0.2, a) * (1 - ph(t, b, b + 0.3))), 0);
    band(ctx, 1440, 1630, noteOn * clamp((z - 1.02) * 6));
    for (const [a, b, h, sub] of HEAD) {
      if (t < a - 0.05 || t > b + 0.35) continue;
      const out = 1 - ph(t, b, b + 0.3);
      engraveText(ctx, 'PLATE XII', W / 2, 236, { size: 30, weight: 500, track: 0.3, p: 1, alpha: out * 0.85 });
      engraveText(ctx, h, W / 2, 318, { size: h.length > 20 ? 58 : 66, weight: 600, track: 0.08, p: ph(t, a, a + 0.55), alpha: out });
      if (sub) { const s0 = SUBT[sub] ?? a + 0.4; engraveText(ctx, sub, W / 2, 380, { size: 44, italic: true, weight: 500, p: ph(t, s0, s0 + 0.5), alpha: out }); }
    }
    for (const [a, b, str, kind] of NOTES) {
      if (t < a || t > b + 0.3) continue;
      const out = 1 - ph(t, b, b + 0.3);
      if (kind === 'big') engraveText(ctx, str, W / 2, 1560, { size: 128, weight: 600, track: 0.06, p: ph(t, a, a + 0.45), alpha: out });
      else if (str === 'in seconds') writeScript(ctx, str, PERSON_AT[0], PERSON_AT[1] + 220, { size: 60, p: ph(t, a, a + 0.5), alpha: out });
      else writeScript(ctx, str, W / 2, 1540, { size: 74, p: ph(t, a, a + 0.6), alpha: out });
    }
  }
  // the little "effort" gauge (screen space, lower right of the leg close-up)
  function gauge(ctx, t) {
    const a = ph(t, 17.0, 17.4) * (1 - ph(t, 19.0, 19.3)); if (a <= 0) return;
    const x = 790, y = 1290, r = 120, v = 0.85 - 0.78 * eio(ph(t, 17.8, 18.7));
    ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round';
    ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r, Math.PI, Math.PI * 2); ctx.stroke(); ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(x, y, r - 8, Math.PI, Math.PI * 2); ctx.stroke();
    for (let i = 0; i <= 10; i++) { const an = Math.PI + i / 10 * Math.PI, r0 = i % 5 ? r - 22 : r - 32; ctx.lineWidth = i % 5 ? 1.2 : 2.4; ctx.beginPath(); ctx.moveTo(x + Math.cos(an) * r0, y + Math.sin(an) * r0); ctx.lineTo(x + Math.cos(an) * (r - 10), y + Math.sin(an) * (r - 10)); ctx.stroke(); }
    const an = Math.PI + v * Math.PI; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(an) * (r - 30), y + Math.sin(an) * (r - 30)); ctx.stroke();
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(x, y, 7, 0, 7); ctx.fill();
    ctx.restore();
    engraveText(ctx, 'MUSCLE EFFORT', x, y + 46, { size: 30, weight: 600, track: 0.12, alpha: a });
  }
  // dotted, joint-to-joint plumb line beside the near fore ("holds the joints straight")
  function plumb(ctx, c, t) {
    const a = ph(t, 15.0, 15.5) * (1 - ph(t, 19.0, 19.3)); if (a <= 0) return;
    const pts = [horse.elbow, horse.knee, horse.fetF].map((p) => toScreen(c, p));
    ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 2.4; ctx.setLineDash([3, 9]); ctx.lineCap = 'round';
    const k = ph(t, 15.2, 16.4); ctx.beginPath(); ctx.moveTo(pts[0][0] - 70, pts[0][1]); ctx.lineTo(pts[0][0] - 70, pts[0][1] + (pts[2][1] - pts[0][1]) * k); ctx.stroke(); ctx.setLineDash([]);
    pts.forEach((p, i) => { const pi = ph(t, 15.3 + i * 0.4, 15.6 + i * 0.4); if (pi <= 0) return; ctx.beginPath(); ctx.arc(p[0] + 4, p[1], 9 * pi, 0, 7); ctx.lineWidth = 2.2; ctx.stroke(); ctx.beginPath(); ctx.moveTo(p[0] + 4, p[1]); ctx.lineTo(p[0] - 70, p[1]); ctx.lineWidth = 1; ctx.stroke(); });
    ctx.restore();
  }

  function explainer(ctx, Wc, Hc, t) {
    const c = cam(t);
    // --- world (under the camera) ---
    ctx.save(); ctx.translate(W / 2, HH / 2); ctx.scale(c.z, c.z); ctx.translate(-c.cx, -c.cy);
    ctx.drawImage(sheet(), 0, 0);
    groundInk.draw(ctx, t);
    // standing horse: burnished away as the lying horse is cut (41.3–42.3); returns small for the final question
    const standA = 1 - ph(t, 41.3, 42.2);
    if (standA > 0) {
      const lean = 6 * eio(ph(t, 30.2, 31.2)) * (1 - ph(t, 36.9, 37.6));
      ctx.save(); ctx.globalAlpha = standA; ctx.translate(lean, 0);
      const farTip = 0.3 * eio(ph(t, 32.05, 32.9)) * (1 - eio(ph(t, 36.95, 37.7)));
      const eye = t < 33.75 ? 1 : t < 35.55 ? 1 - ph(t, 33.75, 34.1) : ph(t, 35.55, 35.75);
      drawHorse(ctx, horse, t, { farTip, eye });
      ctx.restore();
      if (t > 7.0 && t < 10.4) { const a = 1 - ph(t, 10.0, 10.35); ctx.save(); ctx.globalAlpha = a; occlude(ctx, [lock.occ], ph(t, 7.4, 7.8)); lock.ink.draw(ctx, t);
        const lp = ph(t, 9.3, 9.8); leader(ctx, [lock.at[0] - 36, lock.at[1] + 10], horse.knee, { p: lp, w: 1.3 }); leader(ctx, [lock.at[0] + 36, lock.at[1] + 10], horse.hock, { p: lp, w: 1.3 }); ctx.restore(); }
      if (t > 13.0 && t < 19.5) { ctx.save(); ctx.globalAlpha = 1 - ph(t, 19.1, 19.45); stay.draw(ctx, t, { color: '#2a120a' }); ctx.restore(); }
      if (t > 35.0 && t < 41.5) { ctx.save(); ctx.globalAlpha = 1 - ph(t, 38.6, 39.2); occlude(ctx, [wolf.occ], ph(t, 35.1, 35.6)); wolf.ink.draw(ctx, t); ctx.restore(); }
    }
    if (t > 42.2) {
      // the lying horse, and in the final question the standing horse returns beside it, both at half size
      const q = eio(ph(t, 50.4, 51.4)), sc = 1 - 0.46 * q;
      ctx.save(); ctx.translate(HX + 210 * q, GROUND); ctx.scale(sc, sc); ctx.translate(-HX, -GROUND);
      wash.draw(ctx, t); LIE.far.draw(ctx, t, { wScale: 1 / sc }); occlude(ctx, LIE.occ, 1); wash.draw(ctx, t); LIE.ink.draw(ctx, t, { wScale: 1 / sc });
      drawEye(ctx, LIE.eye, 0); ctx.restore();
      if (q > 0) {
        ctx.save(); ctx.globalAlpha = q; ctx.translate(HX - 330 * q, GROUND); ctx.scale(sc, sc); ctx.translate(-HX, -GROUND);
        horse.far.draw(ctx, 99, { wScale: 1 / sc }); horse.farHindLow.draw(ctx, 99, { wScale: 1 / sc }); occlude(ctx, horse.occBody); occlude(ctx, horse.occLow);
        horse.body.draw(ctx, 99, { wScale: 1 / sc }); horse.hindLow.draw(ctx, 99, { wScale: 1 / sc }); drawEye(ctx, horse, 0); ctx.restore();
      }
    }
    ctx.restore();

    // --- screen space ---
    // hook roundel: a person stands, then topples in about a second
    { const a = 1 - ph(t, 2.4, 2.8); if (a > 0) {
      const [x, y] = PERSON_AT; ctx.save(); ctx.globalAlpha = a;
      ctx.save(); ctx.beginPath(); ctx.arc(x, y, 150, 0, 7); ctx.clip(); ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat'); ctx.fill();
      const fall = Math.min(1.42, 1.42 * Math.pow(ph(t, 0.62, 1.45), 2.2)), bounce = t > 1.45 ? 0.05 * Math.sin((t - 1.45) * 18) * Math.exp(-(t - 1.45) * 6) : 0;
      ctx.translate(x + 20, y + 110); ctx.rotate(-(fall - bounce)); person.draw(ctx, 99); ctx.restore();
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x - 120, y + 112); ctx.lineTo(x + 120, y + 112); ctx.stroke();
      if (t > 0.7) { ctx.setLineDash([2, 8]); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x + 20, y + 110, 185, -Math.PI / 2, -Math.PI / 2 - Math.min(1.4, fall), true); ctx.stroke(); ctx.setLineDash([]); }
      roundelFrame(ctx, x, y, 150, { p: 1, w: 3 }); ctx.restore(); } }
    // stifle roundel: femur, tibia and the kneecap that slides up and hooks over the ridge
    { const a = ph(t, 19.9, 20.3) * (1 - ph(t, 29.3, 29.7)); if (a > 0) {
      const st = toScreen(c, horse.stifle);
      ctx.save(); ctx.globalAlpha = a;
      leader(ctx, st, [RND.x + 40, RND.y + RND.r], { p: ph(t, 19.9, 20.4), w: 1.6 });
      ctx.save(); ctx.beginPath(); ctx.arc(RND.x, RND.y, RND.r, 0, 7); ctx.clip(); ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat'); ctx.fill();
      // ruled ground, as in a magnification roundel
      ctx.strokeStyle = 'rgba(28,21,16,0.18)'; ctx.lineWidth = 1; for (let yy = RND.y - RND.r; yy < RND.y + RND.r; yy += 12) { ctx.beginPath(); ctx.moveTo(RND.x - RND.r, yy); ctx.lineTo(RND.x + RND.r, yy); ctx.stroke(); }
      stifle.ink.draw(ctx, t);
      const [px, py, rot] = patellaPos(t), P = [RND.x + px, RND.y + py];
      // the patellar ligament: patella down to the tibia, a tapered band
      if (t > 21.7) { ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round'; for (let i = -2; i <= 2; i++) { ctx.lineWidth = 2.2 - Math.abs(i) * 0.4; ctx.beginPath(); ctx.moveTo(P[0] + i * 5, P[1] + 30); ctx.quadraticCurveTo(P[0] + 10 + i * 4, (P[1] + RND.y + 120) / 2 + 10, RND.x - 58 + i * 4, RND.y + 120); ctx.stroke(); } }
      occlude(ctx, [{ path: (() => { const p2 = new Path2D(); p2.ellipse(P[0], P[1], 27, 39, rot, 0, 7); return p2; })() }], ph(t, 21.6, 21.8));
      ctx.save(); ctx.translate(P[0], P[1]); ctx.rotate(rot - 0.15); stifle.pink.draw(ctx, t); ctx.restore();
      // the lock: a small engraved bar across the hooked kneecap
      const lk = ph(t, 27.1, 27.35); if (lk > 0) { ctx.strokeStyle = '#7a1f12'; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(P[0] + 4, P[1] + 4, 48, -2.4, -2.4 + 4.8 * lk); ctx.stroke(); }
      ctx.restore();
      roundelFrame(ctx, RND.x, RND.y, RND.r, { p: ph(t, 19.85, 20.4), w: 3.4 });
      label(ctx, 'thighbone', RND.x + 150, RND.y + 30, ph(t, 20.8, 21.3), 1 - ph(t, 25.9, 26.2) * 0);
      label(ctx, 'ridge', RND.x - 178, RND.y - 168, ph(t, 24.6, 25.0), 1);
      label(ctx, 'kneecap', RND.x - 150, RND.y + 120, ph(t, 22.1, 22.6), 1 - ph(t, 24.0, 24.4));
      label(ctx, 'tibia', RND.x + 120, RND.y + 190, ph(t, 21.0, 21.5), 1);
      ctx.restore(); } }
    plumb(ctx, c, t); gauge(ctx, t);
    // 24-hour dial with the half-hour wedge
    if (t > 47.4 && t < 50.6) { const a = 1 - ph(t, 50.2, 50.55); ctx.save(); ctx.globalAlpha = a;
      ctx.save(); ctx.beginPath(); ctx.arc(DIAL.x, DIAL.y, DIAL.r + 6, 0, 7); ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat'); ctx.fill(); ctx.restore();
      washDial.draw(ctx, t); dialInk.draw(ctx, t);
      engraveText(ctx, '24 HOURS', DIAL.x, DIAL.y + 12, { size: 30, weight: 600, track: 0.14, p: ph(t, 48.0, 48.5) }); ctx.restore(); }
    // question labels
    if (t > 51.0) { const p1 = ph(t, 51.0, 51.6), p2 = ph(t, 53.5, 54.1);
      engraveText(ctx, 'LIE DOWN', 780, 1410, { size: 50, weight: 600, track: 0.1, p: p1 }); writeScript(ctx, 'to dream?', 780, 1480, { size: 60, p: ph(t, 51.4, 52.2) });
      engraveText(ctx, 'STAND UP', 290, 1410, { size: 50, weight: 600, track: 0.1, p: p2 }); writeScript(ctx, 'like a horse?', 290, 1480, { size: 60, p: ph(t, 54.0, 54.8) }); }
    drawText(ctx, t);
  }

  function scoreSound(k) {
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.35 });
    // the burin: dry scratches while lines are cut
    const cut = (t0, t1, g = 0.5) => { for (let t = t0; t < t1; t += 0.42) k.play('stroke', t, { material: 'pencil', dur: 0.4, gain: g, minor: true }); };
    cut(0, 4.8, 0.55); cut(7.25, 7.9, 0.4); cut(13.0, 14.6, 0.45); cut(20.0, 21.5, 0.4); cut(35.05, 36.0, 0.35); cut(42.3, 44.5, 0.5); cut(47.55, 48.4, 0.35);
    // hook: the topple
    k.play('whoosh', 0.75, { dur: 0.6, gain: 0.5 }); k.play('thud', 1.42, { gain: 0.8 }); k.play('impact', 1.44, { gain: 0.35 });
    k.play('press', 2.88, { gain: 0.7 }); k.play('ding', 5.1, { f: 'D6', gain: 0.3 });
    // camera moves
    for (const t of [5.9, 10.2, 19.3, 29.4, 47.3]) k.play('whoosh', t, { dur: 0.7, gain: 0.3, minor: true });
    k.play('click', 7.4, { f: 1400, gain: 0.9 }); k.play('tock', 7.42, { f: 600, gain: 0.6 });
    k.play('ding', 11.3, { f: 'A5', gain: 0.25 });
    for (let i = 0; i < 3; i++) k.play('tock', 15.4 + i * 0.4, { f: 900 + i * 120, gain: 0.5 });
    for (let i = 0; i < 6; i++) k.play('tick', 17.8 + i * 0.15, { f: 3800 - i * 300, gain: 0.35, minor: true });
    // the kneecap: slide up, hop over the ridge, lock
    k.play('swish', 22.65, { dur: 0.7, gain: 0.4 }); k.tone(23.9, { f: [[0, 300], [1.6, 520]], dur: 1.7, gain: 0.06, minor: true });
    k.play('tock', 25.5, { f: 520, gain: 0.7 }); k.play('click', 27.15, { f: 1900, gain: 1 }); k.play('thud', 27.18, { gain: 0.4 }); k.play('stamp', 28.4, { gain: 0.4 });
    k.play('paper', 32.0, { dur: 0.5, gain: 0.4 }); k.play('tock', 32.9, { f: 380, gain: 0.5 });
    for (let i = 0; i < 3; i++) k.tone(34.0 + i * 0.32, { f: 520 - i * 70, dur: 0.25, gain: 0.04, minor: true });
    k.play('riser', 35.1, { dur: 0.7, gain: 0.3 }); k.play('blip', 35.6, { gain: 0.3 }); k.play('ding', 37.1, { f: 'E6', gain: 0.25 });
    k.play('erase', 41.3, { dur: 0.8, gain: 0.35 });
    k.tone(44.6, { f: [[0, 220], [1.6, 330]], type: 'sine', dur: 2.0, gain: 0.05, a: 0.6, minor: true });
    for (let i = 0; i < 4; i++) k.play('stroke', 44.6 + i * 0.35, { material: 'brush', dur: 0.35, gain: 0.5, minor: true });
    k.play('ding', 48.5, { f: 'C6', gain: 0.3 }); k.play('press', 48.3, { gain: 0.5 });
    k.play('whoosh', 50.4, { dur: 0.8, gain: 0.35 }); k.play('stamp', 51.0, { gain: 0.35 }); k.play('stamp', 53.5, { gain: 0.35 });
    k.play('sparkle', 54.9, { n: 4, gain: 0.3 });
  }
  // thumbnail: the finished plate with three big words
  function thumbnail(ctx, Wc, Hc) { explainer(ctx, Wc, Hc, 29.0); engraveText(ctx, 'ASLEEP', W / 2, 1500, { size: 150, weight: 600 }); engraveText(ctx, 'STANDING UP', W / 2, 1640, { size: 96, weight: 600 }); }
  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
