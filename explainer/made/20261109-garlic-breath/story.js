// ===== Copperplate Engraving (Lemo-Opuscar style), vertical 1080x1920: "Why does garlic breath last a whole day?" =====
// Drawn with the Lemo-Opuscar engraving engine (window.LEMO, bundled by scripts/lemo_engine.sh). Original figures,
// story, layout and timing; only the engine's line-cutting technique comes from the library.
(function () {
  const W = 1080, HH = 1920;
  // start loading the plate's type now, so the shell's READY (document.fonts.ready) waits for it
  try { for (const f of ['400 78px "Pinyon Script"', '600 100px "Bodoni Moda"', '500 30px "Bodoni Moda"', 'italic 500 46px "Bodoni Moda"']) document.fonts.load(f, 'AaZz09'); } catch (e) { }
  const { B, drawSheet, engraveText, writeScript, roundelFrame, leader, Wash, PAL } = window.LEMO;
  const { xf, shape, clamp, hatch, outline, stroke, RNG, formTone } = B;

  // ---------- BEATS (from phrases.json) ----------
  const BEATS = [
    { s: 0.25, e: 4.47, w: { garlic: 0.54, breath: 0.98, leak: 1.63, lungs: 2.58, twentyfour: 3.16, hours: 3.89, why: 4.25 } },
    { s: 5.05, e: 6.43, w: { mouthwash: 5.05, stop: 5.99 } },
    { s: 6.7, e: 8.05, w: { crush: 6.7, clove: 7.13, garlic: 7.63 } },
    { s: 8.54, e: 11.46, w: { lets: 8.94, stinky: 10.12, sulfur: 10.59, gases: 11.06 } },
    { s: 11.9, e: 13.44, w: { most: 11.9, break: 12.27, fast: 13.08 } },
    { s: 13.81, e: 15.0, w: { one: 14.07, sneaky: 14.49 } },
    { s: 15.35, e: 17.43, w: { allyl: 16.04, methyl: 16.43, sulfide: 16.89 } },
    { s: 17.79, e: 19.62, w: { gut: 18.05, liver: 18.44, barely: 18.77, touch: 19.16 } },
    { s: 20.11, e: 21.42, w: { slips: 20.35, blood: 21.12 } },
    { s: 21.42, e: 23.38, w: { rides: 21.64, whole: 22.73, body: 23.09 } },
    { s: 23.77, e: 26.37, w: { blood: 24.57, passes: 24.9, lungs: 26.03 } },
    { s: 26.78, e: 28.31, w: { leaks: 27.17, breath: 27.97 } },
    { s: 28.72, e: 30.79, w: { sneaks: 29.22, sweat: 30.48 } },
    { s: 31.17, e: 32.47, w: { three: 31.17, hours: 31.48, dinner: 32.1 } },
    { s: 32.92, e: 35.24, w: { main: 33.29, smell: 33.9, breathing: 34.51 } },
    { s: 35.68, e: 38.03, w: { keeps: 36.04, hours: 37.07 } },
    { s: 38.45, e: 41.15, w: { apple: 38.71, mint: 39.13, milk: 39.63, help: 40.22 } },
    { s: 41.51, e: 42.19, w: { really: 41.68 } },
    { s: 42.37, e: 44.2, w: { breath: 42.81, blood: 43.83 } },
    { s: 44.6, e: 46.75, w: { still: 45.12, garlic: 45.64, date: 46.49 } },
  ];
  const DURATION = 46.75 + 1.0;
  window.BEATS = BEATS; window.DURATION = DURATION;
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const eo = (x) => 1 - Math.pow(1 - x, 3);
  const LV = [-0.55, -0.62];
  const ID = xf(0, 0, 1);

  function engraveBody(ink, d, f, { g = '', spacing = 3.8, angle = -0.35, seed = 1, base = 0.06, dark = 0, contour = true, wOl = 2.1, h3 = true } = {}) {
    const sh = typeof d === 'string' ? shape(d, f) : d;
    const ft = formTone(sh.polys, { light: LV, base: base + dark });
    ink.group(g + 'ol'); for (const p of sh.polys) outline(ink, p, { w: wOl, light: LV, seed });
    ink.group(g + 'h1');
    if (contour) B.contourHatch(ink, sh.polys, { spacing, tone: ft, wMax: 1.6, thr: 0.13, seed });
    else hatch(ink, sh.polys, { angle: angle + 1.35, spacing: spacing * 0.9, tone: ft, thr: 0.13, wMax: 1.5, seed, bend: 0.0006 });
    ink.group(g + 'h2'); hatch(ink, sh.polys, { angle, spacing: spacing * 1.15, tone: ft, thr: 0.5, wMax: 1.2, seed: seed + 1 });
    if (h3) { ink.group(g + 'h3'); hatch(ink, sh.polys, { angle: angle + 1.1, spacing: spacing * 1.3, tone: ft, thr: 0.76, wMax: 0.9, seed: seed + 2 }); }
    return sh;
  }
  function sched(ink, t0, span = 3.0, pre = '') {
    ink.schedule(pre + 'ol', t0, t0 + span * 0.55, { conc: 10 });
    ink.schedule(pre + 'h1', t0 + span * 0.25, t0 + span * 0.8, { conc: 60 });
    ink.schedule(pre + 'h2', t0 + span * 0.45, t0 + span * 0.95, { conc: 60 });
    ink.schedule(pre + 'h3', t0 + span * 0.6, t0 + span, { conc: 70 });
    ink.build();
  }
  const mirror = (d) => d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (m, x, y) => `${1080 - +x} ${y}`);

  // ---------- sheets ----------
  const PLATE = [44, 168, 1036, 1652];
  const sheets = {};
  function sheet(tone = 1) { const k = String(tone); if (sheets[k]) return sheets[k]; const c = document.createElement('canvas'); c.width = W; c.height = HH; drawSheet(c.getContext('2d'), { W, H: HH, plate: PLATE, tone }); return (sheets[k] = c); }
  let bandC = null;
  function bandPaper() { if (bandC) return bandC; bandC = document.createElement('canvas'); bandC.width = W; bandC.height = HH; drawSheet(bandC.getContext('2d'), { W, H: HH, plate: [-20, -20, W + 20, HH + 20] }); return bandC; }
  function occlude(ctx, shapes, a = 1) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat');
    for (const sh of shapes) ctx.fill(sh.path, 'nonzero'); ctx.restore();
  }

  // ---------- the anatomy bust (front view, original drawing), screen coords at zoom 1 ----------
  const TORSO = 'M482 700 C480 740 476 770 470 792 C380 812 262 832 212 880 C172 920 162 1000 160 1100 L154 1560 L926 1560 L920 1100 C918 1000 908 920 868 880 C818 832 700 812 610 792 C604 770 600 740 598 700 Z';
  const LUNG_L = 'M522 905 C472 882 402 892 352 952 C302 1022 288 1122 292 1212 C332 1242 422 1242 502 1216 C516 1150 522 1022 522 905 Z';
  const LIVER = 'M236 1292 C300 1262 460 1262 560 1292 C540 1352 460 1392 360 1402 C290 1402 248 1362 236 1292 Z';
  const STOMACH = 'M602 1300 C642 1270 722 1270 762 1310 C802 1360 782 1440 722 1470 C682 1490 642 1470 622 1440 C642 1410 662 1380 642 1350 C627 1330 607 1320 602 1300 Z';
  const bust = (() => {
    const torso = new B.Ink(), head = new B.Ink(), organs = new B.Ink();
    const torsoSh = engraveBody(torso, TORSO, ID, { seed: 3, base: 0.0, spacing: 4.6, h3: false });
    const headSh = engraveBody(head, B.ellipse(540, 560, 118, 148), ID, { seed: 5, base: 0.0, spacing: 4.0 });
    // face: closed eyes, nose, mouth, ears
    head.group('ol');
    for (const ex of [494, 586]) stroke(head, B.ellipsePts(ex, 540, 26, 10, 0, 20, 0.15, Math.PI - 0.15), 1.8, { taper: 4 });
    stroke(head, [[540, 552], [532, 600], [546, 606]], 1.5, { taper: 5 });
    stroke(head, [[512, 646], [540, 652], [568, 646]], 2.0, { taper: 5 });
    for (const s of [-1, 1]) stroke(head, [[540 + s * 116, 530], [540 + s * 134, 548], [540 + s * 130, 590], [540 + s * 112, 600]], 1.6, { taper: 5 });
    const lungL = engraveBody(organs, LUNG_L, ID, { seed: 11, base: 0.1, spacing: 3.4 });
    const lungR = engraveBody(organs, mirror(LUNG_L), ID, { seed: 12, base: 0.1, spacing: 3.4 });
    const liver = engraveBody(organs, LIVER, ID, { seed: 13, base: 0.18, spacing: 3.4 });
    const stomach = engraveBody(organs, STOMACH, ID, { seed: 14, base: 0.14, spacing: 3.2 });
    const heart = engraveBody(organs, B.ellipse(575, 1160, 58, 70, 0.45), ID, { seed: 15, base: 0.3, spacing: 3.0 });
    // windpipe and bronchi, ringed
    organs.group('ol');
    stroke(organs, [[528, 700], [528, 880]], 2.2, { taper: 4 }); stroke(organs, [[552, 700], [552, 880]], 2.2, { taper: 4 });
    for (let y = 712; y < 880; y += 14) stroke(organs, [[530, y], [550, y + 2]], 1.3, { taper: 3 });
    stroke(organs, [[530, 880], [480, 940], [440, 1000]], 1.8, { taper: 6 }); stroke(organs, [[550, 880], [600, 940], [640, 1000]], 1.8, { taper: 6 });
    // gut coils under the stomach
    organs.group('h3'); const R = RNG(4);
    for (let i = 0; i < 5; i++) { const y = 1488 + i * 14; stroke(organs, B.ellipsePts(540 + (R() - 0.5) * 30, y, 230 - i * 16, 8, 0, 30, Math.PI * 0.05, Math.PI * 0.95), 1.4, { taper: 10 }); }
    sched(torso, -2.4, 4.4); sched(head, -2.2, 4.0); sched(organs, -1.6, 4.4);
    return { torso, head, organs, torsoSh, headSh, organSh: [lungL, lungR, liver, stomach, heart], lungL, lungR, liver, stomach, heart };
  })();
  const washLungs = new Wash({ scale: 1.5 });
  washLungs.add({ path: bust.lungL.path, polys: bust.lungL.polys, color: '#b5574b', origin: [440, 960], t0: 2.5, dur: 1.2, alpha: 0.7 });
  washLungs.add({ path: bust.lungR.path, polys: bust.lungR.polys, color: '#b5574b', origin: [640, 960], t0: 2.65, dur: 1.2, alpha: 0.7 });
  function drawBust(ctx, t) {
    bust.torso.draw(ctx, t); occlude(ctx, [bust.headSh]); bust.head.draw(ctx, t);
    occlude(ctx, bust.organSh); washLungs.draw(ctx, t); bust.organs.draw(ctx, t);
  }
  // breath wisps: engraved wavy ribbons curling up and right from the mouth (cut progressively)
  function wisps(ctx, t, t0, { n = 4, dots = false, dur = 1.4, a = 1 } = {}) {
    if (t < t0 || a <= 0) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round';
    for (let i = 0; i < n; i++) {
      const p = eo(ph(t, t0 + i * 0.18, t0 + i * 0.18 + dur)); if (p <= 0) continue;
      const N = 40, pts = [];
      for (let j = 0; j <= N * p; j++) { const u = j / N; const x = 575 + u * (300 + i * 26), y = 650 - u * (80 + i * 28) - Math.sin(u * 9 + i + t * 2) * 16 * u; pts.push([x, y]); }
      for (let j = 1; j < pts.length; j++) { const u = j / N; ctx.lineWidth = 0.6 + 2.6 * Math.pow(Math.sin(Math.PI * u), 0.7); ctx.beginPath(); ctx.moveTo(...pts[j - 1]); ctx.lineTo(...pts[j]); ctx.stroke(); }
      if (dots && pts.length > 10) { const q = pts[Math.floor(pts.length * 0.8)]; molecule(ctx, q[0], q[1] - 18, 9); }
    }
    ctx.restore();
  }
  // the AMS molecule as a little marked bead (ochre-washed sphere with an engraved ring and highlight)
  function molecule(ctx, x, y, r) {
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(201,162,39,0.85)'; ctx.beginPath(); ctx.arc(x + 1, y + 1, r * 1.05, 0, 7); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = Math.max(1.4, r * 0.18); ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.stroke();
    ctx.lineWidth = Math.max(0.8, r * 0.07); for (let k = -2; k <= 2; k++) { const yy = y + k * r * 0.3; const hw = Math.sqrt(Math.max(0, r * r - (k * r * 0.3) ** 2)); if (k >= 0) { ctx.beginPath(); ctx.moveTo(x - hw * 0.2, yy); ctx.lineTo(x + hw * 0.85, yy); ctx.stroke(); } }
    ctx.restore();
  }

  // ---------- garlic bulb, clove and gas roundels (scene B) ----------
  const BULB = 'M0 -360 C8 -300 20 -260 60 -230 C180 -180 260 -100 260 20 C260 150 160 240 0 250 C-160 240 -260 150 -260 20 C-260 -100 -180 -180 -60 -230 C-20 -260 -8 -300 0 -360 Z';
  const garlic = (() => {
    const ink = new B.Ink(), f = xf(540, 1110, 0.9);
    const sh = engraveBody(ink, BULB, f, { seed: 21, base: 0.04, spacing: 3.8 });
    ink.group('h2');
    for (const k of [-0.82, -0.45, 0, 0.45, 0.82]) {
      const pts = []; for (let j = 0; j <= 24; j++) { const u = j / 24, a = [k * 60, -210], b = [k * 330, 10], c = [k * 90, 246]; pts.push(f([(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * b[0] + u * u * c[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * b[1] + u * u * c[1]])); }
      stroke(ink, pts, 2.2 - Math.abs(k), { taper: 12 });
    }
    ink.group('h3'); const R = RNG(9);
    for (let i = 0; i < 26; i++) { const a = -1.2 + i / 25 * 2.4 + (R() - 0.5) * 0.1; const p0 = f([Math.sin(a) * 40, 248]); stroke(ink, [p0, f([Math.sin(a) * 110, 280 + R() * 20]), f([Math.sin(a) * 160 + (R() - 0.5) * 20, 300 + R() * 40])], 0.8 + R() * 0.6, { taper: 10 }); }
    for (let i = 0; i < 8; i++) stroke(ink, [f([-6 + i * 1.6, -360]), f([-14 + i * 4, -420]), f([-24 + i * 6, -470 - R() * 20])], 1.1, { taper: 8 });
    sched(ink, 6.3, 1.9);
    return { ink, sh };
  })();
  const CLOVE = 'M0 -90 C20 -60 62 -20 62 30 C62 70 30 92 0 92 C-30 92 -62 70 -62 30 C-62 -20 -20 -60 0 -90 Z';
  const CLOVE_AT = [840, 1430];
  const clove = (() => {
    const ink = new B.Ink(); const sh = engraveBody(ink, CLOVE, ID, { seed: 31, base: 0.06, spacing: 3.0 });
    ink.group('ol'); stroke(ink, [[-10, -70], [-36, 0], [-24, 70]], 1.3, { taper: 6 });
    sched(ink, 6.7, 0.9); return { ink, sh };
  })();
  const GAS = [[200, 560], [370, 640], [540, 560], [710, 640], [880, 560]];
  const SNEAKY = 2;
  const gasRing = (() => {   // one engraved molecule glyph (authored large, scaled in)
    const ink = new B.Ink(); const sh = engraveBody(ink, B.ellipse(0, 0, 34, 34), ID, { seed: 41, base: 0.2, spacing: 2.6 });
    ink.schedule(['ol', 'h1', 'h2', 'h3'], -2, -1, { conc: 999 }); ink.build(); return { ink, sh };
  })();
  function gasScene(ctx, t) {
    for (let i = 0; i < 5; i++) {
      const t0 = 9.0 + i * 0.32; if (t < t0) continue;
      const [gx, gy] = GAS[i];
      // the rising thread from the clove to the roundel
      const p = eo(ph(t, t0, t0 + 0.9)); const sx = CLOVE_AT[0] - 20, sy = CLOVE_AT[1] - 70;
      const kill = i === SNEAKY ? 0 : ph(t, 12.25 + (i > SNEAKY ? i - 1 : i) * 0.22, 12.6 + (i > SNEAKY ? i - 1 : i) * 0.22);
      const a = 1 - kill;
      if (a <= 0) continue;
      ctx.save(); ctx.globalAlpha *= a * (1 - ph(t, 13.3, 13.8) * (i === SNEAKY ? 0 : 1));
      ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round'; ctx.setLineDash([2, 7]); ctx.lineWidth = 2;
      ctx.beginPath(); const N = 40; for (let j = 0; j <= N * p; j++) { const u = j / N; const x = sx + (gx - sx) * u + Math.sin(u * 10 + i) * 30 * (1 - u), y = sy + (gy + 70 - sy) * u; j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); ctx.setLineDash([]);
      const q = ph(t, t0 + 0.6, t0 + 1.0);
      if (q > 0) {
        const r = 62 * eo(q) * (i === SNEAKY ? 1 + 0.35 * eio(ph(t, 14.0, 14.6)) : 1);
        ctx.save(); ctx.beginPath(); ctx.arc(gx, gy, r, 0, 7); ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat'); ctx.fill(); ctx.restore();
        ctx.save(); ctx.translate(gx, gy); ctx.scale(r / 62, r / 62); gasRing.ink.draw(ctx, 99, { wScale: 62 / Math.max(8, r) }); ctx.restore();
        engraveText(ctx, 'S', gx, gy + 16 * r / 62, { size: 44 * r / 62, weight: 600, p: 1 });
        if (r > 14) roundelFrame(ctx, gx, gy, r, { p: q, w: 2.4 });
        if (kill > 0) { ctx.strokeStyle = '#7a1f12'; ctx.lineWidth = 5; const k = kill; ctx.beginPath(); ctx.moveTo(gx - r, gy - r); ctx.lineTo(gx - r + 2 * r * Math.min(1, k * 2), gy - r + 2 * r * Math.min(1, k * 2)); ctx.stroke(); }
        if (i === SNEAKY && t > 13.9) { const s = ph(t, 13.9, 14.3); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = `rgba(201,162,39,${0.6 * s})`; ctx.beginPath(); ctx.arc(gx, gy, r * 0.62, 0, 7); ctx.fill(); }
      }
      ctx.restore();
    }
  }

  // ---------- the molecule plate (scene C): ball-and-stick allyl methyl sulfide, CH2=CH-CH2-S-CH3 ----------
  const ATOMS = [['C', 220, 1010, 60], ['C', 380, 900, 60], ['C', 540, 1010, 60], ['S', 705, 900, 80], ['C', 870, 1010, 60]];
  const HYD = [[0, 130, 1110], [0, 120, 930], [1, 360, 770], [2, 470, 1130], [2, 610, 1130], [4, 960, 900], [4, 960, 1110], [4, 860, 1150]];
  const mol = (() => {
    const bonds = new B.Ink(), balls = new B.Ink(); const shs = [];
    bonds.group('ol');
    const bond = (a, b, off = 0, w = 7) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), nx = -dy / L * off, ny = dx / L * off; stroke(bonds, [[a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny]], w, { taper: 3 }); };
    for (let i = 0; i < 4; i++) { const a = ATOMS[i].slice(1, 3), b = ATOMS[i + 1].slice(1, 3); if (i === 0) { bond(a, b, -12, 5); bond(a, b, 12, 5); } else bond(a, b, 0, 8); }
    for (const [ai, x, y] of HYD) bond(ATOMS[ai].slice(1, 3), [x, y], 0, 5);
    for (const [ai, x, y] of HYD) { const sh = engraveBody(balls, B.ellipse(x, y, 30, 30), ID, { seed: 50 + x, base: 0.02, spacing: 2.6 }); shs.push(sh); }
    const big = ATOMS.map(([el, x, y, r], i) => engraveBody(balls, B.ellipse(x, y, r, r), ID, { seed: 60 + i, base: el === 'S' ? 0.18 : 0.1, spacing: el === 'S' ? 3.0 : 3.4 }));
    bonds.schedule('ol', 15.3, 15.9, { conc: 20 }); bonds.build();
    sched(balls, 15.35, 1.6);
    return { bonds, balls, small: shs, big };
  })();
  const washS = new Wash({ scale: 1.5 });
  washS.add({ path: mol.big[3].path, polys: mol.big[3].polys, color: '#c9a227', origin: [690, 880], t0: 16.85, dur: 0.6, alpha: 0.85 });

  // ---------- the blood route (scene D) ----------
  const ROUTE = [[690, 1380], [650, 1320], [600, 1230], [575, 1160], [520, 1080], [440, 1040], [400, 1100], [480, 1150], [575, 1160],
    [640, 1080], [700, 1030], [720, 1110], [640, 1170], [575, 1160], [560, 1000], [560, 820], [560, 700], [600, 640], [640, 760],
    [760, 840], [860, 900], [880, 1100], [880, 1400], [820, 1520], [540, 1530], [260, 1520], [200, 1400], [200, 1100], [220, 900], [330, 850], [470, 800], [520, 760]];
  const vessel = (() => {
    const ink = new B.Ink(); ink.group('ol'); stroke(ink, ROUTE, 3.2, { taper: 30 }); ink.group('h1');
    const off = ROUTE.map(([x, y], i) => [x + 5, y + 5]); stroke(ink, off, 1.1, { taper: 30 });
    ink.schedule('ol', 20.3, 21.3, { conc: 1 }); ink.schedule('h1', 20.6, 21.5, { conc: 1 }); ink.build(); return ink;
  })();
  const ROUTE_LEN = (() => { let L = 0; const acc = [0]; for (let i = 1; i < ROUTE.length; i++) { L += Math.hypot(ROUTE[i][0] - ROUTE[i - 1][0], ROUTE[i][1] - ROUTE[i - 1][1]); acc.push(L); } return { L, acc }; })();
  function routeAt(u) { const d = clamp(u) * ROUTE_LEN.L; let i = 1; while (i < ROUTE.length - 1 && ROUTE_LEN.acc[i] < d) i++; const a = ROUTE[i - 1], b = ROUTE[i], k = (d - ROUTE_LEN.acc[i - 1]) / Math.max(1e-6, ROUTE_LEN.acc[i] - ROUTE_LEN.acc[i - 1]); return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k]; }
  function vesselWash(ctx, t) {
    const p = ph(t, 20.5, 21.7); if (p <= 0) return;
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.strokeStyle = 'rgba(156,47,37,0.55)'; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); const N = 160; for (let j = 0; j <= N * p; j++) { const q = routeAt(j / N); j ? ctx.lineTo(q[0] + 2, q[1] + 1.5) : ctx.moveTo(q[0] + 2, q[1] + 1.5); } ctx.stroke(); ctx.restore();
  }
  // where the AMS bead is in scene D
  function beadPos(t) {
    if (t < 18.6) return [690, 1385];                                          // in the stomach
    if (t < 19.4) { const u = eio(ph(t, 18.6, 19.4)); return [690 + (420 - 690) * u, 1385 + (1330 - 1385) * u - Math.sin(u * Math.PI) * 60]; }   // hops through the liver
    if (t < 20.3) { const u = eio(ph(t, 19.5, 20.3)); return [420 + (690 - 420) * u, 1330 + (1380 - 1330) * u + Math.sin(u * Math.PI) * 50]; }
    if (t < 24.5) { const u = ph(t, 21.5, 23.3); const q = routeAt(u < 1 ? (0.45 + u * 0.55) % 1 : 1); return u <= 0 ? routeAt(0) : q; }   // rides around (from the heart loop on)
    const u = eio(ph(t, 24.6, 26.0)); const a = routeAt(1), b = [440, 1040]; return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
  }
  // sweat drops on the shoulders
  const DROPS = [[300, 868], [250, 940], [780, 868], [830, 940], [220, 1060], [860, 1060]];
  function sweat(ctx, t) {
    for (let i = 0; i < DROPS.length; i++) {
      const p = ph(t, 29.2 + i * 0.12, 29.6 + i * 0.12); if (p <= 0) continue;
      const [x, y] = DROPS[i], s = 1.3 * eo(p);
      ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
      ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat'); const d = new Path2D('M0 -22 C8 -10 14 0 14 8 C14 16 8 22 0 22 C-8 22 -14 16 -14 8 C-14 0 -8 -10 0 -22 Z'); ctx.fill(d);
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.stroke(d); ctx.lineWidth = 1; for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.moveTo(2, 2 + k * 5); ctx.lineTo(11, 2 + k * 5); ctx.stroke(); }
      ctx.restore();
      // a vapour thread off each drop with a bead
      const v = ph(t, 29.8 + i * 0.12, 30.8 + i * 0.12);
      if (v > 0) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.6; ctx.setLineDash([2, 6]); ctx.beginPath(); const dir = x < 540 ? -1 : 1; for (let j = 0; j <= 20 * v; j++) { const u = j / 20; const xx = x + dir * u * 60 + Math.sin(u * 8 + i) * 8, yy = y - 30 - u * 120; j ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); ctx.restore(); }
    }
  }

  // ---------- clock (scene E) ----------
  const CLK = { x: 540, y: 960, r: 330 };
  const clockInk = (() => {
    const ink = new B.Ink(); ink.group('ol');
    stroke(ink, B.ellipsePts(CLK.x, CLK.y, CLK.r, CLK.r, 0, 200, -Math.PI / 2, Math.PI * 1.5), 4, { taper: 1 });
    stroke(ink, B.ellipsePts(CLK.x, CLK.y, CLK.r - 12, CLK.r - 12, 0, 200, -Math.PI / 2, Math.PI * 1.5), 1.2, { taper: 1 });
    for (let i = 0; i < 60; i++) { const a = -Math.PI / 2 + i / 60 * Math.PI * 2, big = i % 5 === 0, r0 = CLK.r - (big ? 52 : 30); stroke(ink, [[CLK.x + Math.cos(a) * r0, CLK.y + Math.sin(a) * r0], [CLK.x + Math.cos(a) * (CLK.r - 18), CLK.y + Math.sin(a) * (CLK.r - 18)]], big ? 3 : 1.1, { taper: 2 }); }
    ink.group('h1'); hatch(ink, B.ellipse(CLK.x, CLK.y, CLK.r + 40, CLK.r + 40).polys, { angle: 0.8, spacing: 7, tone: () => 0.3, thr: 0.1, wMax: 0.7, excl: B.ellipse(CLK.x, CLK.y, CLK.r + 8, CLK.r + 8).polys });
    ink.schedule('ol', 31.0, 31.7, { conc: 20 }); ink.schedule('h1', 31.2, 31.9, { conc: 80 }); ink.build(); return ink;
  })();
  const NUM = ['XII', 'III', 'VI', 'IX'];
  function wedge(a0, a1, r) { const p = new Path2D(); p.moveTo(CLK.x, CLK.y); p.arc(CLK.x, CLK.y, r, a0, a1); p.closePath(); return p; }
  function clockScene(ctx, t) {
    // wash wedges: the first three hours, then the long tail
    const A0 = -Math.PI / 2, h3 = eio(ph(t, 31.3, 32.4)) * (Math.PI / 2);
    ctx.save(); ctx.globalCompositeOperation = 'multiply';
    if (h3 > 0) { ctx.fillStyle = 'rgba(184,67,47,0.55)'; ctx.fill(wedge(A0, A0 + h3, CLK.r - 14)); }
    const more = eio(ph(t, 36.0, 37.9)) * Math.PI * 1.5;
    if (more > 0) { ctx.fillStyle = 'rgba(201,162,39,0.45)'; ctx.fill(wedge(A0 + Math.PI / 2, A0 + Math.PI / 2 + more, CLK.r - 14)); }
    ctx.restore();
    clockInk.draw(ctx, t);
    for (let i = 0; i < 4; i++) { const a = -Math.PI / 2 + i * Math.PI / 2, rr = CLK.r - 92; engraveText(ctx, NUM[i], CLK.x + Math.cos(a) * rr, CLK.y + Math.sin(a) * rr + 18, { size: 52, weight: 600, p: ph(t, 31.4 + i * 0.12, 31.8 + i * 0.12) }); }
    // hands: hour hand sweeps 3 h, then keeps going
    const hr = A0 + h3 + more, mn = A0 + (h3 + more) * 12;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineCap = 'round'; const show = ph(t, 31.3, 31.6); ctx.globalAlpha = show;
    ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(CLK.x, CLK.y); ctx.lineTo(CLK.x + Math.cos(hr) * 180, CLK.y + Math.sin(hr) * 180); ctx.stroke();
    ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(CLK.x, CLK.y); ctx.lineTo(CLK.x + Math.cos(mn) * 260, CLK.y + Math.sin(mn) * 260); ctx.stroke();
    ctx.beginPath(); ctx.arc(CLK.x, CLK.y, 16, 0, 7); ctx.fill(); ctx.restore();
    // the bead leaving on a breath, at "breathing out"
    if (t > 33.0 && t < 35.6) { const u = eo(ph(t, 33.2, 35.3)); ctx.save(); ctx.globalAlpha = 1 - ph(t, 35.1, 35.5); molecule(ctx, CLK.x + 120 + u * 220, CLK.y - 120 - u * 260, 20); ctx.restore(); }
  }

  // ---------- book of three small plates (scene F) ----------
  const CARDS = [[205, 'APPLE', 38.71], [540, 'MINT', 39.13], [875, 'MILK', 39.63]];
  const APPLE = 'M0 -100 C40 -130 110 -110 120 -30 C130 50 80 120 30 120 C15 120 10 110 0 110 C-10 110 -15 120 -30 120 C-80 120 -130 50 -120 -30 C-110 -110 -40 -130 0 -100 Z';
  const LEAF = 'M0 -130 C70 -90 90 0 60 70 C40 110 15 125 0 135 C-15 125 -40 110 -60 70 C-90 0 -70 -90 0 -130 Z';
  const GLASS = 'M-70 -120 L70 -120 L58 120 L-58 120 Z';
  const cards = (() => {
    const out = [];
    CARDS.forEach(([x, name, t0], i) => {
      const ink = new B.Ink(), cy = 1000, f = xf(x, cy, 1);
      let sh;
      if (i === 0) { sh = engraveBody(ink, APPLE, f, { seed: 71, base: 0.08, spacing: 3.2 }); ink.group('ol'); stroke(ink, [f([0, -100]), f([6, -140]), f([16, -165])], 3, { taper: 4 }); const lf = engraveBody(ink, 'M14 -150 C40 -180 80 -175 96 -160 C70 -140 40 -140 14 -150 Z', f, { seed: 72, base: 0.2, spacing: 2.4 }); }
      else if (i === 1) { sh = engraveBody(ink, LEAF, f, { seed: 73, base: 0.12, spacing: 3.0 }); ink.group('ol'); stroke(ink, [f([0, -120]), f([0, 0]), f([0, 150])], 2.2, { taper: 10 }); for (let k = 0; k < 5; k++) { const y = -80 + k * 40; stroke(ink, [f([0, y]), f([34, y - 20]), f([52, y - 34])], 1.4, { taper: 6 }); stroke(ink, [f([0, y]), f([-34, y - 20]), f([-52, y - 34])], 1.4, { taper: 6 }); } }
      else { sh = shape(GLASS, f); ink.group('ol'); outline(ink, sh.polys[0], { w: 2.4, light: LV }); stroke(ink, [f([-64, -60]), f([64, -60])], 1.6, { taper: 6 }); ink.group('h1'); hatch(ink, shape('M-70 -120 L70 -120 L67 -62 L-67 -62 Z', f).polys, { angle: 1.4, spacing: 5, tone: () => 0.3, thr: 0.1, wMax: 0.8 }); ink.group('h2'); hatch(ink, shape('M40 -55 L64 -55 L56 116 L36 116 Z', f).polys, { angle: 1.5, spacing: 4, tone: () => 0.6, thr: 0.1, wMax: 1.0 }); }
      sched(ink, t0 - 0.15, 0.9);
      out.push({ ink, sh, x, name, t0 });
    });
    return out;
  })();
  const washCards = new Wash({ scale: 1.5 });
  washCards.add({ path: cards[0].sh.path, polys: cards[0].sh.polys, color: '#a8432e', origin: [190, 960], t0: 39.0, dur: 0.8, alpha: 0.75 });
  washCards.add({ path: cards[1].sh.path, polys: cards[1].sh.polys, color: '#6f8a5a', origin: [540, 940], t0: 39.4, dur: 0.8, alpha: 0.75 });

  // ---------- scenes, each its own sheet and camera; changed by peeling the proof off ----------
  const SCENES = [
    { a: -9, b: 6.6, tone: 1, keys: [[0, 540, 960, 1.0], [4.5, 540, 970, 1.02], [6.6, 540, 975, 1.03]], draw: sceneA },
    { a: 6.6, b: 15.25, tone: 0.97, keys: [[6.6, 540, 960, 1.0], [11.8, 540, 970, 1.02], [12.0, 540, 980, 1.02], [14.0, 540, 760, 1.18], [15.25, 540, 720, 1.22]], draw: sceneB },
    { a: 15.25, b: 17.6, tone: 1.02, keys: [[15.25, 540, 960, 1.0], [17.6, 560, 950, 1.04]], draw: sceneC },
    { a: 17.6, b: 31.0, tone: 0.98, keys: [[17.6, 540, 960, 1.0], [23.6, 540, 975, 1.03], [24.6, 540, 1000, 1.28], [26.5, 540, 1000, 1.28], [27.3, 640, 860, 1.25], [28.5, 640, 860, 1.25], [29.1, 540, 960, 1.0], [31.0, 540, 970, 1.02]], draw: sceneD },
    { a: 31.0, b: 38.3, tone: 1, keys: [[31.0, 540, 960, 1.0], [38.3, 540, 960, 1.03]], draw: sceneE },
    { a: 38.3, b: 41.4, tone: 0.97, keys: [[38.3, 540, 960, 1.0], [41.4, 540, 960, 1.02]], draw: sceneF },
    { a: 41.4, b: 99, tone: 1, keys: [[41.4, 540, 990, 1.06], [44.4, 540, 960, 1.0], [48, 540, 960, 1.0]], draw: sceneG },
  ];
  const PEEL = 0.5;
  function camOf(sc, t) {
    const K = sc.keys; let i = 0; while (i < K.length - 2 && t > K[i + 1][0]) i++;
    const [t0, x0, y0, z0] = K[i], [t1, x1, y1, z1] = K[i + 1], u = eio(ph(t, t0, t1));
    const iz = 1 / z0 + (1 / z1 - 1 / z0) * u;
    return { cx: x0 + (x1 - x0) * u, cy: y0 + (y1 - y0) * u, z: 1 / iz };
  }

  function sceneA(ctx, t) {
    drawBust(ctx, t);
    wisps(ctx, t, 1.5, { n: 4, dur: 1.6 });
  }
  function sceneA_screen(ctx, t) {
    // mouthwash in a roundel, struck out on "stop"
    const p = ph(t, 4.95, 5.35); if (p <= 0) return;
    const x = 820, y = 1360, r = 150 * eo(p);
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat'); ctx.fill(); ctx.clip();
    ctx.translate(x, y); ctx.scale(r / 150, r / 150); bottle.ink.draw(ctx, t); ctx.restore();
    if (r > 14) roundelFrame(ctx, x, y, r, { p, w: 3 });
    const k = ph(t, 5.95, 6.25);
    if (k > 0) { ctx.save(); ctx.strokeStyle = '#7a1f12'; ctx.lineCap = 'round'; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(x - 100, y - 100); ctx.lineTo(x - 100 + 200 * Math.min(1, k * 2), y - 100 + 200 * Math.min(1, k * 2)); ctx.stroke(); if (k > 0.5) { const k2 = (k - 0.5) * 2; ctx.beginPath(); ctx.moveTo(x + 100, y - 100); ctx.lineTo(x + 100 - 200 * k2, y - 100 + 200 * k2); ctx.stroke(); } ctx.restore(); }
  }
  const bottle = (() => {
    const ink = new B.Ink();
    const sh = engraveBody(ink, 'M-38 -84 L38 -84 L38 -64 C70 -54 80 -26 80 8 L80 112 L-80 112 L-80 8 C-80 -26 -70 -54 -38 -64 Z', ID, { seed: 81, base: 0.12, spacing: 3.0, contour: false, angle: 0.2 });
    engraveBody(ink, 'M-42 -120 L42 -120 L42 -84 L-42 -84 Z', ID, { seed: 82, base: 0.45, spacing: 2.6, contour: false, angle: 1.4 });
    ink.group('ol'); stroke(ink, [[-60, 20], [60, 20]], 1.4, { taper: 4 }); stroke(ink, [[-60, 80], [60, 80]], 1.4, { taper: 4 });
    sched(ink, 5.1, 0.7); return { ink, sh };
  })();
  function sceneB(ctx, t) {
    garlic.ink.draw(ctx, t);
    // the clove: cut, then crushed flat on "clove"
    const sq = eio(ph(t, 7.15, 7.45));
    ctx.save(); ctx.translate(CLOVE_AT[0], CLOVE_AT[1] + 90 * sq * 0.5); ctx.scale(1 + 0.4 * sq, 1 - 0.5 * sq);
    occlude(ctx, [clove.sh]); clove.ink.draw(ctx, t); ctx.restore();
    if (sq > 0) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round'; const R = RNG(5); for (let i = 0; i < 9; i++) { const a = Math.PI + i / 8 * Math.PI, L = 26 + R() * 30; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(CLOVE_AT[0] + Math.cos(a) * 95, CLOVE_AT[1] + 50 + Math.sin(a) * 52); ctx.lineTo(CLOVE_AT[0] + Math.cos(a) * (95 + L * sq), CLOVE_AT[1] + 50 + Math.sin(a) * (52 + L * sq)); ctx.stroke(); } ctx.restore(); }
    gasScene(ctx, t);
  }
  function sceneC(ctx, t) {
    mol.bonds.draw(ctx, t); occlude(ctx, [...mol.small, ...mol.big], ph(t, 15.3, 15.5)); washS.draw(ctx, t); mol.balls.draw(ctx, t);
    ATOMS.forEach(([el, x, y, r], i) => { if (el === 'S') return; });
    label(ctx, 'sulfur', 705, 760, ph(t, 16.9, 17.3), 1);
    leader(ctx, [705, 818], [705, 770], { p: ph(t, 16.9, 17.2), w: 1.2 });
    label(ctx, 'carbon', 220, 1135, ph(t, 16.1, 16.5), 1);
  }
  function sceneD(ctx, t) {
    drawBust(ctx, t);
    vesselWash(ctx, t); vessel.draw(ctx, t);
    // gut and liver flagged with leaders, crossed off as the bead passes untouched
    const lp = ph(t, 17.95, 18.3), lv = ph(t, 18.35, 18.7), out = 1 - ph(t, 20.0, 20.4);
    if (out > 0) { ctx.save(); ctx.globalAlpha = out; leader(ctx, [740, 1360], [900, 1290], { p: lp, w: 1.4 }); label(ctx, 'gut', 930, 1270, lp, 1); leader(ctx, [300, 1330], [190, 1260], { p: lv, w: 1.4 }); label(ctx, 'liver', 160, 1240, lv, 1); ctx.restore(); }
    // the bead
    if (t < 31.0) { const [bx, by] = beadPos(t); const a = t < 26.0 ? 1 : 1 - ph(t, 26.6, 26.9); if (a > 0) { ctx.save(); ctx.globalAlpha = a; molecule(ctx, bx, by, 16); ctx.restore(); } }
    wisps(ctx, t, 26.8, { n: 4, dots: true, dur: 1.4 });
    sweat(ctx, t);
  }
  function sceneE(ctx, t) { clockScene(ctx, t); }
  function sceneF(ctx, t) {
    for (const c of cards) {
      const p = ph(t, c.t0 - 0.2, c.t0 + 0.2); if (p <= 0) continue;
      // each card: a small plate laid down, its own ruled frame
      ctx.save(); const x0 = c.x - 150, y0 = 760, w = 300, h = 480;
      ctx.fillStyle = ctx.createPattern(bandPaper(), 'no-repeat'); ctx.globalAlpha = p; ctx.fillRect(x0, y0, w, h);
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.4; ctx.strokeRect(x0 + 10, y0 + 10, w - 20, h - 20); ctx.lineWidth = 0.8; ctx.strokeRect(x0 + 18, y0 + 18, w - 36, h - 36); ctx.restore();
    }
    washCards.draw(ctx, t);
    for (const c of cards) { c.ink.draw(ctx, t); engraveText(ctx, c.name, c.x, 1320, { size: 48, weight: 600, track: 0.08, p: ph(t, c.t0, c.t0 + 0.4) }); }
  }
  function sceneG(ctx, t) {
    drawBust(ctx, t); vesselWash(ctx, t); vessel.draw(ctx, t);
    wisps(ctx, t, 42.3, { n: 4, dots: true, dur: 1.4 });
    // YES / NO on paper slips
    const y1 = ph(t, 45.9, 46.3), y2 = ph(t, 46.3, 46.7);
    slip(ctx, 'YES', 250, 1270, y1); slip(ctx, 'NO', 830, 1270, y2);
  }
  function slip(ctx, str, x, y, p) {
    if (p <= 0) return; ctx.save(); ctx.font = '600 100px "Bodoni Moda"'; const w = ctx.measureText(str).width + 60;
    ctx.globalAlpha = Math.min(1, p * 2); ctx.fillStyle = ctx.createPattern(bandPaper(), 'no-repeat'); ctx.fillRect(x - w / 2, y - 100, w, 130);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.2; ctx.strokeRect(x - w / 2 + 6, y - 94, w - 12, 118); ctx.restore();
    engraveText(ctx, str, x, y, { size: 100, weight: 600, track: 0.08, p });
  }
  function label(ctx, str, x, y, p, a) {
    if (p <= 0 || a <= 0) return; ctx.save(); ctx.font = 'italic 500 46px "Bodoni Moda"'; const w = ctx.measureText(str).width;
    ctx.globalAlpha = a * Math.min(1, p * 2); ctx.fillStyle = 'rgba(244,237,219,0.92)'; ctx.fillRect(x - w / 2 - 12, y - 40, w + 24, 56); ctx.restore();
    engraveText(ctx, str, x, y, { size: 46, italic: true, p, alpha: a });
  }

  // ---------- text ----------
  const HEAD = [[-1, 4.9, 'GARLIC BREATH', null], [5.0, 6.6, 'MOUTHWASH?', null], [6.6, 11.8, 'CRUSH A CLOVE', null], [11.85, 15.25, 'ONE SNEAKY GAS', null],
    [15.25, 17.6, 'THE CULPRIT', 'allyl methyl sulfide', 16.0], [17.6, 20.05, 'GUT & LIVER', null], [20.05, 23.65, 'INTO THE BLOOD', null], [23.7, 28.65, 'OUT THE LUNGS', null],
    [28.7, 31.0, 'AND THE SKIN', null], [31.0, 38.3, 'HOURS LATER', null], [38.3, 41.4, 'WHAT HELPS', null], [41.4, 44.55, 'GARLIC BLOOD', null], [44.55, 48, 'WOULD YOU?', null]];
  const NOTES = [[3.1, 4.9, '24 HOURS', 'big'], [10.1, 11.8, 'stinky sulfur gases', 'script'], [12.3, 13.75, 'broken down fast', 'script'], [14.45, 15.25, 'the sneaky one', 'script'],
    [18.7, 20.0, 'barely touched', 'script'], [21.6, 23.6, 'all around your body', 'script'], [27.1, 28.6, 'out on your breath', 'script'], [29.6, 31.0, 'and in your sweat', 'script'],
    [31.4, 32.8, '3 HOURS', 'big'], [33.25, 35.6, 'the main garlic smell', 'script'], [36.6, 38.3, 'UP TO A DAY', 'big'], [40.2, 41.4, 'helps a little', 'script'],
    [42.75, 44.5, 'BREATH = BLOOD', 'big'], [45.1, 47.75, 'garlic before a date?', 'script']];
  function fitSize(ctx, str, max, maxW, weight = 600, track = 0.08) { ctx.save(); ctx.font = `${weight} ${max}px "Bodoni Moda"`; const w = ctx.measureText(str).width * (1 + track); ctx.restore(); return Math.min(max, Math.floor(max * maxW / Math.max(1, w))); }
  function band(ctx, y0, y1, a, top = false) {
    if (a <= 0) return; ctx.save(); ctx.fillStyle = ctx.createPattern(bandPaper(), 'no-repeat');
    const F = 36; ctx.globalAlpha = a; ctx.fillRect(0, y0 + (top ? 0 : F), W, y1 - y0 - F * (top ? 1 : 2));
    for (let i = 0; i < 12; i++) { const k = (i + 0.5) / 12; ctx.globalAlpha = a * (1 - k) * 0.35; if (!top) ctx.fillRect(0, y0 + F * (1 - k), W, F * k); ctx.fillRect(0, y1 - F, W, F * k); }
    ctx.restore();
  }
  function drawText(ctx, t, z) {
    band(ctx, 0, 440, clamp((z - 1.0) * 8), true);
    const noteOn = NOTES.reduce((m, [a, b]) => Math.max(m, ph(t, a - 0.2, a) * (1 - ph(t, b, b + 0.3))), 0);
    band(ctx, 1430, 1640, noteOn);
    for (const [a, b, h, sub, s0] of HEAD) {
      if (t < a - 0.05 || t > b + 0.3) continue;
      const out = 1 - ph(t, b - 0.05, b + 0.25);
      engraveText(ctx, 'PLATE XIV', W / 2, 228, { size: 30, weight: 500, track: 0.3, p: 1, alpha: out * 0.85 });
      engraveText(ctx, h, W / 2, 330, { size: fitSize(ctx, h, 100, 930), weight: 600, track: 0.08, p: ph(t, a, a + 0.5), alpha: out });
      if (sub) { const st = s0 ?? a + 0.4; engraveText(ctx, sub, W / 2, 400, { size: 50, italic: true, weight: 500, p: ph(t, st, st + 0.6), alpha: out }); }
    }
    for (const [a, b, str, kind] of NOTES) {
      if (t < a || t > b + 0.3) continue;
      const out = 1 - ph(t, b, b + 0.3);
      if (kind === 'big') engraveText(ctx, str, W / 2, 1585, { size: fitSize(ctx, str, 128, 940, 600, 0.06), weight: 600, track: 0.06, p: ph(t, a, a + 0.45), alpha: out });
      else writeScript(ctx, str, W / 2, 1560, { size: 78, p: ph(t, a, a + 0.6), alpha: out });
    }
  }

  function renderScene(ctx, sc, t) {
    const c = camOf(sc, t);
    ctx.save(); ctx.translate(W / 2, HH / 2); ctx.scale(c.z, c.z); ctx.translate(-c.cx, -c.cy);
    ctx.drawImage(sheet(sc.tone), 0, 0);
    sc.draw(ctx, t);
    ctx.restore();
    if (sc.draw === sceneA) sceneA_screen(ctx, t);
    drawText(ctx, t, c.z);
  }
  function explainer(ctx, Wc, Hc, t) {
    let i = 0; while (i < SCENES.length - 1 && t >= SCENES[i].b) i++;
    renderScene(ctx, SCENES[i], t);
    // peel: the previous proof lifts off from the bottom edge, revealing this sheet
    if (i > 0 && t < SCENES[i].a + PEEL) {
      const u = eio(ph(t, SCENES[i].a, SCENES[i].a + PEEL)), edge = HH * (1 - u);
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, edge); ctx.clip(); renderScene(ctx, SCENES[i - 1], SCENES[i].a - 0.001); ctx.restore();
      // the curled lip: the sheet's back seen in a band, with its shadow on the new sheet
      const lip = 90 * Math.sin(Math.PI * u);
      const g = ctx.createLinearGradient(0, edge, 0, edge + lip + 40); g.addColorStop(0, 'rgba(28,21,16,0.35)'); g.addColorStop(1, 'rgba(28,21,16,0)');
      ctx.fillStyle = g; ctx.fillRect(0, edge, W, lip + 40);
      const g2 = ctx.createLinearGradient(0, edge - lip, 0, edge); g2.addColorStop(0, '#e9dfc6'); g2.addColorStop(0.7, '#d9cdb0'); g2.addColorStop(1, '#b8aa8a');
      ctx.fillStyle = g2; ctx.fillRect(0, edge - lip, W, lip);
    }
  }

  function scoreSound(k) {
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.35 });
    const cut = (t0, t1, g = 0.5) => { for (let t = t0; t < t1; t += 0.42) k.play('stroke', t, { material: 'pencil', dur: 0.4, gain: g, minor: true }); };
    cut(0, 3.2, 0.55); cut(5.1, 5.8, 0.35); cut(6.6, 8.4, 0.45); cut(15.3, 17.0, 0.45); cut(20.3, 21.4, 0.4); cut(31.0, 31.9, 0.4); cut(38.6, 40.0, 0.4);
    // scene changes: the proof peeled off
    for (const t of [6.6, 15.25, 17.6, 31.0, 38.3, 41.4]) k.play('paper', t, { dur: 0.5, gain: 0.45, minor: true });
    k.play('whoosh', 1.6, { dur: 0.8, gain: 0.3 });
    for (let i = 0; i < 2; i++) k.play('stroke', 2.55 + i * 0.3, { material: 'brush', dur: 0.35, gain: 0.45, minor: true });
    k.play('press', 3.1, { gain: 0.7 }); k.play('ding', 4.25, { f: 'D6', gain: 0.25 });
    k.play('blip', 5.1, { gain: 0.3 }); k.play('stamp', 5.98, { gain: 0.55 });
    k.play('thud', 7.2, { gain: 0.8 }); k.play('impact', 7.22, { gain: 0.35 });
    for (let i = 0; i < 5; i++) k.play('blip', 9.6 + i * 0.32, { gain: 0.25, minor: true });
    k.play('riser', 8.9, { dur: 1.2, gain: 0.25, minor: true });
    for (let i = 0; i < 4; i++) k.play('erase', 12.25 + i * 0.22, { dur: 0.3, gain: 0.3, minor: true });
    k.play('ding', 14.07, { f: 'A5', gain: 0.25 }); k.play('whoosh', 14.0, { dur: 0.7, gain: 0.25, minor: true });
    k.play('tock', 16.05, { f: 700, gain: 0.4 }); k.play('tock', 16.44, { f: 800, gain: 0.4 }); k.play('ding', 16.9, { f: 'E6', gain: 0.3 });
    k.play('tock', 18.05, { f: 500, gain: 0.5 }); k.play('tock', 18.44, { f: 560, gain: 0.5 }); k.play('swish', 18.7, { dur: 0.6, gain: 0.35 });
    k.play('swish', 20.35, { dur: 0.8, gain: 0.4 }); k.tone(20.6, { f: [[0, 180], [1.2, 260]], type: 'sine', dur: 1.4, gain: 0.05, minor: true });
    k.play('whoosh', 21.6, { dur: 1.6, gain: 0.25, minor: true });
    k.play('whoosh', 23.8, { dur: 0.7, gain: 0.3, minor: true });
    k.tone(24.9, { f: [[0, 260], [1.2, 390]], type: 'sine', dur: 1.3, gain: 0.04, minor: true });
    k.play('whoosh', 27.1, { dur: 1.0, gain: 0.35 });
    for (let i = 0; i < 6; i++) k.play('tick', 29.2 + i * 0.12, { f: 3200 - i * 200, gain: 0.3, minor: true });
    k.play('press', 31.45, { gain: 0.6 });
    for (let i = 0; i < 6; i++) k.play('tick', 31.4 + i * 0.18, { f: 2400, gain: 0.25, minor: true });
    k.play('ding', 33.3, { f: 'C6', gain: 0.25 });
    for (let i = 0; i < 10; i++) k.play('tick', 36.0 + i * 0.19, { f: 2400 + i * 60, gain: 0.25, minor: true });
    k.play('press', 36.6, { gain: 0.6 });
    k.play('stamp', 38.7, { gain: 0.4 }); k.play('stamp', 39.13, { gain: 0.4 }); k.play('stamp', 39.63, { gain: 0.4 });
    k.play('press', 42.8, { gain: 0.6 }); k.play('whoosh', 42.3, { dur: 0.9, gain: 0.3 });
    k.play('stamp', 45.95, { gain: 0.4 }); k.play('stamp', 46.35, { gain: 0.4 }); k.play('sparkle', 46.5, { n: 4, gain: 0.3 });
  }
  function thumbnail(ctx, Wc, Hc) { explainer(ctx, Wc, Hc, 25.9); band(ctx, 1400, 1700, 1); engraveText(ctx, 'GARLIC', W / 2, 1530, { size: 150, weight: 600 }); engraveText(ctx, 'IN YOUR LUNGS', W / 2, 1640, { size: 92, weight: 600 }); }
  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
