// ===== Copperplate Engraving (Lemo-Opuscar style), vertical 1080x1920: "Why do woodlice roll into a ball?" =====
// Drawn with the Lemo-Opuscar engraving engine (window.LEMO, bundled by scripts/lemo_engine.sh) plus an original
// procedural "segmented body" engraver for the rolling pill bug. Original figures, story, layout and timing.
(function () {
  const W = 1080, HH = 1920;
  try { for (const f of ['400 78px "Pinyon Script"', '600 100px "Bodoni Moda"', '500 30px "Bodoni Moda"', 'italic 500 46px "Bodoni Moda"']) document.fonts.load(f, 'AaZz09'); } catch (e) { }
  const { B, drawSheet, engraveText, writeScript, roundelFrame, leader, Wash, PAL } = window.LEMO;
  const { xf, shape, clamp, hatch, outline, stroke, RNG, formTone } = B;
  const INK = PAL.ink;

  // ---------- BEATS (from phrases.json) ----------
  const BEATS = [
    { s: 0.25, e: 1.86, w: { pill: 0.25, bugs: 0.56, roll: 0.86, balls: 1.48 } },
    { s: 1.99, e: 4.8, w: { never: 2.67, seen: 3.1, real: 3.69, reason: 4.03, why: 4.54 } },
    { s: 5.18, e: 6.9, w: { first: 5.18, arent: 5.85, bugs: 6.23, all: 6.67 } },
    { s: 7.36, e: 8.34, w: { crustaceans: 7.71 } },
    { s: 8.8, e: 11.2, w: { cousins: 8.8, crabs: 9.5, shrimp: 9.89, lobsters: 10.58 } },
    { s: 11.57, e: 14.0, w: { count: 11.57, legs: 12.32, fourteen: 12.69, not: 13.44, six: 13.72 } },
    { s: 14.45, e: 17.36, w: { back: 14.84, row: 15.37, hard: 15.75, overlapping: 16.06, plates: 16.9 } },
    { s: 17.77, e: 18.97, w: { belly: 18.27, soft: 18.72 } },
    { s: 19.29, e: 21.04, w: { legs: 19.64, tiny: 20.25, gills: 20.6 } },
    { s: 21.38, e: 22.25, w: { yep: 21.38, gills: 21.71 } },
    { s: 22.59, e: 24.44, w: { breathe: 22.84, sea: 23.82, cousins: 24.01 } },
    { s: 24.78, e: 26.12, w: { stay: 25.59, damp: 25.86 } },
    { s: 26.51, e: 28.59, w: { poke: 26.75, shake: 27.47, ground: 28.11 } },
    { s: 29.01, e: 31.24, w: { tucks: 29.18, head: 29.86, folds: 30.21, tail: 30.89 } },
    { s: 31.57, e: 34.27, w: { plates: 31.97, lock: 32.38, perfect: 32.98, armoured: 33.46, ball: 34.0 } },
    { s: 34.64, e: 36.75, w: { hungry: 34.71, ant: 35.11, smooth: 36.0, shell: 36.41 } },
    { s: 37.03, e: 38.41, w: { nothing: 37.29, soft: 37.75, grab: 38.15 } },
    { s: 38.86, e: 40.91, w: { inside: 39.07, ball: 39.71, traps: 39.99, moisture: 40.35 } },
    { s: 41.33, e: 42.93, w: { gills: 41.84, dry: 42.49, out: 42.71 } },
    { s: 43.32, e: 45.66, w: { cousins: 43.73, sow: 44.29, bugs: 44.53, cant: 44.85, roll: 45.17 } },
    { s: 46.1, e: 47.32, w: { just: 46.41, run: 46.71 } },
    { s: 47.76, e: 49.18, w: { armour: 47.95, speed: 48.71 } },
    { s: 49.64, e: 50.93, w: { which: 49.64, pick: 50.67 } },
  ];
  const DURATION = 50.93 + 1.0;
  window.BEATS = BEATS; window.DURATION = DURATION;
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const eo = (x) => 1 - Math.pow(1 - x, 3);
  const sst = (a, b, x) => { const u = clamp((x - a) / (b - a)); return u * u * (3 - 2 * u); };
  const LV = [-0.55, -0.62];
  const TOL = (() => { const l = Math.hypot(0.62, 0.78); return [-0.62 / l, -0.78 / l]; })();
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

  // ---------- sheets ----------
  const PLATE = [44, 168, 1036, 1652];
  const sheets = {};
  function sheet(tone = 1) { const k = String(tone); if (sheets[k]) return sheets[k]; const c = document.createElement('canvas'); c.width = W; c.height = HH; drawSheet(c.getContext('2d'), { W, H: HH, plate: PLATE, tone }); return (sheets[k] = c); }
  let bandC = null;
  function bandPaper() { if (bandC) return bandC; bandC = document.createElement('canvas'); bandC.width = W; bandC.height = HH; drawSheet(bandC.getContext('2d'), { W, H: HH, plate: [-20, -20, W + 20, HH + 20] }); return bandC; }
  let CAM_M = null;   // device transform of the current scene's camera (world space), for paper fills inside local transforms
  function paperFill(ctx) {
    const p = ctx.createPattern(sheet(), 'no-repeat');
    try { if (CAM_M && p.setTransform) p.setTransform(ctx.getTransform().inverse().multiply(CAM_M)); } catch (e) { }
    return p;
  }
  function occlude(ctx, shapes, a = 1) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = paperFill(ctx);
    for (const sh of shapes) ctx.fill(sh.path, 'nonzero'); ctx.restore();
  }

  // ---------- a pen that batches swelling burin segments by width bucket ----------
  function Pen() {
    const per = new Map();
    return {
      seg(x0, y0, x1, y1, w) { if (!(w > 0.16)) return; const b = Math.round(Math.log(w / 0.2) / Math.log(1.13)); let p = per.get(b); if (!p) per.set(b, p = new Path2D()); p.moveTo(x0, y0); p.lineTo(x1, y1); },
      line(pts, wf) { for (let i = 1; i < pts.length; i++) { const u = (i - 0.5) / (pts.length - 1); this.seg(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], wf(u, i)); } },
      flush(ctx) { ctx.save(); ctx.strokeStyle = INK; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; for (const [b, p] of per) { ctx.lineWidth = 0.2 * Math.pow(1.13, b); ctx.stroke(p); } ctx.restore(); per.clear(); },
    };
  }
  const swell = (u) => 0.2 + 0.8 * Math.pow(Math.max(0, Math.sin(Math.PI * clamp(u))), 0.7);
  function tline(ctx, pts, w0, w1, p = 1) {   // a tapered burin line, cut to fraction p
    const pen = Pen(), n = pts.length - 1, last = p * n;
    for (let i = 0; i < n && i < last; i++) { const k = Math.min(1, last - i), a = pts[i], b = pts[i + 1]; const u = (i + 0.5) / n; pen.seg(a[0], a[1], a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, (w0 + (w1 - w0) * u) * Math.min(1, 0.3 + u * 4)); }
    pen.flush(ctx);
  }
  const lerp2 = (a, b, u) => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
  const quadPts = (a, c, b, n = 12) => { const o = []; for (let i = 0; i <= n; i++) { const u = i / n; o.push([(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]]); } return o; };

  // small procedural engraving of a closed path: paper fill, hatching across it, swelling outline
  function miniEngrave(ctx, path, bb, { angle = 0.9, sp = 5, w = 1.2, ol = 2.4, tone = 0.5 } = {}) {
    ctx.save(); ctx.fillStyle = paperFill(ctx); ctx.fill(path); ctx.clip(path);
    const pen = Pen(), [x0, y0, x1, y1] = bb, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, R = Math.hypot(x1 - x0, y1 - y0) / 2, ca = Math.cos(angle), sa = Math.sin(angle);
    for (let d = -R; d <= R; d += sp) { const N = 10; const pts = []; for (let k = 0; k <= N; k++) { const e = -R + 2 * R * k / N; pts.push([cx + ca * e - sa * d, cy + sa * e + ca * d]); } const dark = clamp(0.35 + tone * 0.9 * (d + R) / (2 * R)); pen.line(pts, (u) => w * dark * swell(u)); }
    pen.flush(ctx); ctx.restore();
    ctx.save(); ctx.strokeStyle = INK; ctx.lineWidth = ol; ctx.stroke(path); ctx.restore();
  }

  // ---------- the segmented-body engraver (side view, bends from flat to a full ball) ----------
  function makeProfile(P) { let s = 0; P.cum = P.plates.map(([l]) => { const a = s; s += l; return a; }); P.L = s;
    const cs = P.plates.map(([l, h], i) => [P.cum[i] + l / 2, h]);
    P.hfAt = (sv) => { if (sv <= cs[0][0]) return cs[0][1]; for (let i = 1; i < cs.length; i++) if (sv <= cs[i][0]) { const u = (sv - cs[i - 1][0]) / (cs[i][0] - cs[i - 1][0]); return cs[i - 1][1] + (cs[i][1] - cs[i - 1][1]) * u; } return cs[cs.length - 1][1]; };
    return P; }
  const PILL = makeProfile({ H: 190, legLen: 74, ant: 120, sp: 7, ov: 12, legPlates: [1, 2, 3, 4, 5, 6, 7],
    plates: [[56, 0.42], [62, 0.78], [62, 0.92], [62, 0.99], [62, 1], [62, 0.98], [62, 0.92], [62, 0.84], [24, 0.74], [24, 0.68], [24, 0.62], [24, 0.56], [24, 0.5], [30, 0.4]] });
  const SOW = makeProfile({ H: 120, legLen: 84, ant: 150, sp: 7, ov: 12, legPlates: [1, 2, 3, 4, 5, 6, 7], uropods: true,
    plates: [[54, 0.62], [60, 0.92], [60, 0.98], [60, 1], [60, 1], [60, 0.98], [58, 0.94], [56, 0.88], [26, 0.74], [24, 0.66], [22, 0.58], [22, 0.5], [20, 0.44], [34, 0.36]] });
  const SHRIMP = makeProfile({ H: 120, legLen: 60, ant: 330, sp: 8, ov: 10, legPlates: [1, 2, 3, 4], fan: true, rostrum: true,
    plates: [[150, 0.95], [44, 0.85], [42, 0.8], [40, 0.74], [38, 0.66], [36, 0.56], [44, 0.36]] });
  const LOBSTER = makeProfile({ H: 105, legLen: 56, ant: 260, sp: 8, ov: 10, legPlates: [0, 1], claws: true, fan: true,
    plates: [[190, 0.95], [40, 0.8], [38, 0.76], [36, 0.72], [34, 0.66], [32, 0.58], [44, 0.42]] });

  function sideBug(ctx, P, o) {
    const { x, gy, s: sc = 1, c: c0 = 0.1, gait = 0, build = 99, retr = 0, wmul = 1, wash = null, antT = 0 } = o;
    const c = clamp(c0, 0.03, 1), L = P.L, H = P.H;
    const Rb = L / (2 * Math.PI * c), Heff = Math.min(H, Rb * 0.97), Rin = Rb - Heff, tuck = sst(0.5, 1, c);
    const hfE = (hf) => hf + (1 - hf) * tuck;
    const raw = (sv, v, hf) => { hf = P.hfAt(sv); const th = (L / 2 - sv) / Rb, r = Rin + v * Heff * hfE(hf); return [r * Math.sin(th), -r * Math.cos(th), th]; };
    let minx = 1e9, maxx = -1e9, maxy = -1e9;
    P.plates.forEach(([l, hf], i) => { for (const sv of [P.cum[i], P.cum[i] + l * 0.5, P.cum[i] + l]) for (const v of [0, 1]) { const q = raw(sv, v, hf); minx = Math.min(minx, q[0]); maxx = Math.max(maxx, q[0]); maxy = Math.max(maxy, q[1]); } });
    const legL = P.legLen * (1 - retr);
    const dx = -(minx + maxx) / 2, dy = -Math.max(legL * 0.88, 2) - maxy;
    const map = (sv, v, hf) => { const q = raw(sv, v, hf); return [q[0] + dx, q[1] + dy, q[2]]; };
    ctx.save(); ctx.translate(x, gy); ctx.scale(sc, sc);
    const geo = { cx: x + sc * dx, cy: gy + sc * dy, r: sc * Rb };
    const reveal = (i) => ({ po: ph(build, 0.05 * i, 0.05 * i + 0.5), p1: ph(build, 0.3 + 0.05 * i, 0.9 + 0.05 * i), p2: ph(build, 0.6 + 0.05 * i, 1.3 + 0.05 * i) });
    // legs (behind the body)
    if (legL > 3) {
      const pen = Pen();
      for (const far of [1, 0]) for (const i of P.legPlates) {
        const rv = reveal(i); if (rv.po <= 0) continue;
        const [l, hf] = P.plates[i]; const b = map(P.cum[i] + l * 0.5 + (far ? 6 : 0), 0.05, hf), th = b[2];
        const T = [Math.cos(th), Math.sin(th)], D = [-Math.sin(th), Math.cos(th)];
        const phs = gait * 9 + i * 1.3 + (far ? Math.PI : 0), sw = Math.sin(phs), lift = Math.max(0, Math.cos(phs)) * 9 * (gait > 0 ? 1 : 0);
        const kn = [b[0] + D[0] * legL * 0.48 + T[0] * (-8 + 6 * sw), b[1] + D[1] * legL * 0.48 + T[1] * (-8 + 6 * sw)];
        const ft = [b[0] + D[0] * (legL - lift) + T[0] * (16 * sw + 6), b[1] + D[1] * (legL - lift) + T[1] * (16 * sw + 6)];
        const wk = (far ? 0.7 : 1) * wmul * rv.po;
        pen.line([b, kn], (u) => (3.4 - u * 0.8) * wk); pen.line([kn, ft], (u) => (2.6 - u * 1.6) * wk);
      }
      pen.flush(ctx);
    }
    // plates, tail to head (each front plate overlaps the one behind it)
    const N = P.plates.length;
    for (let i = N - 1; i >= 0; i--) {
      const rv = reveal(i); if (rv.po <= 0) continue;
      const [l, hf] = P.plates[i], a = P.cum[i], bS = a + l + (i < N - 1 ? P.ov : 0);
      const poly = [];
      for (let k = 0; k <= 8; k++) poly.push(map(a + (bS - a) * k / 8, 1, hf));
      for (let k = 1; k <= 4; k++) poly.push(map(bS, 1 - k / 4, hf));
      const postEnd = 1 - 0.55 * tuck;
      for (let k = 1; k <= 8; k++) poly.push(map(bS - (bS - a) * k / 8, 0, hf));
      const path = new Path2D(); poly.forEach((q, k) => (k ? path.lineTo(q[0], q[1]) : path.moveTo(q[0], q[1]))); path.closePath();
      ctx.save(); ctx.globalAlpha *= Math.min(1, rv.po * 3); ctx.fillStyle = paperFill(ctx); ctx.fill(path); ctx.restore();
      if (wash && wash.p > 0) {
        ctx.save(); ctx.clip(path); ctx.globalCompositeOperation = 'multiply';
        const [wx, wy] = wash.o, wr = wash.p * wash.R;
        ctx.fillStyle = wash.color; ctx.beginPath(); ctx.arc((wx - x) / sc, (wy - gy) / sc, wr / sc, 0, 7); ctx.fill(); ctx.restore();
      }
      const tone = (sv, v) => { const th = map(sv, v, hf)[2]; const lit = Math.sin(th) * TOL[0] - Math.cos(th) * TOL[1]; const f = (sv - a) / (bS - a); return clamp(0.66 - 0.42 * lit + (1 - v) * (1 - v) * 0.38 + (1 - sst(0, 0.35, f)) * 0.32 + (P === PILL || P === SOW ? 0 : 0.05)); };
      const pen = Pen(), wm = 2.5 * wmul;
      // family 1: lines across the plate (belly to back), following the form
      const nj = Math.max(2, Math.round((bS - a) / P.sp));
      if (rv.p1 > 0) for (let j = 0; j < nj; j++) {
        const sv = a + (j + 0.5) * (bS - a) / nj, M = 10, pts = []; const show = Math.ceil(M * rv.p1);
        for (let k = 0; k <= show; k++) { const v = 1 - k / M * (0.96 - 0.5 * tuck); const q = map(sv, v, hf); pts.push([q[0], q[1], v]); }
        for (let k = 1; k < pts.length; k++) { const v = (pts[k][2] + pts[k - 1][2]) / 2, u = (k - 0.5) / M; pen.seg(pts[k - 1][0], pts[k - 1][1], pts[k][0], pts[k][1], wm * sst(0.14, 1, tone(sv, v)) * swell(u)); }
      }
      // family 2: crossing lines along the plate, only in the half-tones and shadow
      if (rv.p2 > 0) { const dv = P.sp * 1.2 / (Heff * hfE(hf)); for (let v = 0.05 + 0.5 * tuck; v < 0.98; v += dv) { const M = 6, pts = []; for (let k = 0; k <= Math.ceil(M * rv.p2); k++) { const q = map(a + (bS - a) * k / M, v, hf); pts.push(q); } for (let k = 1; k < pts.length; k++) { const sv = a + (bS - a) * (k - 0.5) / M; pen.seg(pts[k - 1][0], pts[k - 1][1], pts[k][0], pts[k][1], wm * 0.8 * sst(0.5, 1, tone(sv, v)) * swell((k - 0.5) / M)); } } }
      // contours: heavy back, posterior edge, belly
      const back = poly.slice(0, 9), post = [0, 1, 2, 3, 4].map((k) => map(bS, 1 - k / 4 * (1 - postEnd) , hf)), belly = poly.slice(12);
      const cutN = (arr) => arr.slice(0, Math.max(2, Math.ceil(arr.length * rv.po)));
      pen.line(cutN(back), (u, k) => wmul * (1.4 + 2.2 * tone(a + (bS - a) * u, 1)) * (0.5 + 0.5 * swell(u)));
      pen.line(cutN(post), (u) => wmul * 2.4 * (0.4 + 0.6 * swell(u)));
      pen.line(cutN(belly), (u) => wmul * 1.5 * swell(u) * (1 - tuck));
      pen.flush(ctx);
    }
    // head details: eye, antennae (antennae fold in as it tucks)
    const [l0, hf0] = P.plates[0], h0 = reveal(0);
    if (h0.po > 0) {
      const e = map(18, 0.64, hf0); ctx.save(); ctx.fillStyle = INK; ctx.globalAlpha *= h0.po; ctx.beginPath(); ctx.ellipse(e[0], e[1], 6, 5, 0, 0, 7); ctx.fill(); ctx.restore();
      const al = P.ant * (1 - retr * 0.9);
      if (al > 4) for (const k of [1, 0]) {
        const b = map(5 + k * 6, 0.32 + k * 0.08, hf0), th = b[2]; const T = [Math.cos(th), Math.sin(th)], D = [-Math.sin(th), Math.cos(th)];
        const up = P.ant > 200 ? -0.55 : 0.55; const d1 = [T[0] * 0.8 + D[0] * up, T[1] * 0.8 + D[1] * up]; const m = Math.hypot(...d1); d1[0] /= m; d1[1] /= m;
        const wg = (P.ant > 200 ? -0.25 : 0.5) + 0.14 * Math.sin(antT * 3 + k);
        const d2 = [d1[0] * Math.cos(wg) - d1[1] * Math.sin(wg), d1[0] * Math.sin(wg) + d1[1] * Math.cos(wg)];
        const p1 = [b[0] + d1[0] * al * 0.45, b[1] + d1[1] * al * 0.45], p2 = [p1[0] + d2[0] * al * 0.55, p1[1] + d2[1] * al * 0.55];
        const pen = Pen(); pen.line([b, p1], (u) => (2.6 - u) * wmul * (k ? 0.75 : 1) * h0.po); pen.line(quadPts(p1, lerp2(p1, p2, 0.5), p2, 6), (u) => (1.7 - u * 1.2) * wmul * (k ? 0.75 : 1) * h0.po); pen.flush(ctx);
      }
    }
    // extras for the relatives
    const tl = N - 1, tailPt = (v) => map(P.cum[tl] + P.plates[tl][0], v, P.plates[tl][1]);
    if (P.fan && reveal(tl).po > 0) { const pen = Pen(), t0 = tailPt(0.5), th = t0[2]; for (let k = -3; k <= 3; k++) { const a = th + Math.PI + k * 0.22; const e = [t0[0] + Math.cos(a) * 58, t0[1] + Math.sin(a) * 58]; pen.line([t0, lerp2(t0, e, 0.6), e], (u) => (2.6 - u * 1.4) * wmul); } pen.flush(ctx); }
    if (P.uropods && reveal(tl).po > 0) { const pen = Pen(); for (const k of [0, 1]) { const t0 = tailPt(0.2 + k * 0.2), th = t0[2]; const a = th + Math.PI - 0.25 + k * 0.1; pen.line([t0, [t0[0] + Math.cos(a) * 46, t0[1] + Math.sin(a) * 46 + 6]], (u) => (3 - u * 2) * wmul); } pen.flush(ctx); }
    if (P.rostrum) { const b = map(0, 0.75, P.plates[0][1]), th = b[2]; tline(ctx, [b, [b[0] + Math.cos(th) * 60, b[1] + Math.sin(th) * 60 - 8]], 3 * wmul, 0.8 * wmul); }
    if (P.claws) {
      for (const k of [1, 0]) {
        const b = map(8, 0.35, P.plates[0][1]), th = b[2], T = [Math.cos(th), Math.sin(th)];
        const el = [b[0] + T[0] * 70, b[1] + T[1] * 70 + 18 - k * 26], cl = [el[0] + T[0] * 80, el[1] + T[1] * 80 - 10 - k * 14];
        tline(ctx, [b, el, cl], 6 * wmul, 4 * wmul);
        const path = new Path2D(); path.ellipse(cl[0] + 30, cl[1], 52, 22 - k * 3, th - 0.1 - k * 0.15, 0, 7);
        miniEngrave(ctx, path, [cl[0] - 30, cl[1] - 30, cl[0] + 90, cl[1] + 30], { sp: 5 / Math.max(0.5, sc), w: 1.4 * wmul, ol: 2.6 * wmul, tone: 0.6 });
        tline(ctx, [[cl[0] + 40, cl[1] + 4], [cl[0] + 84, cl[1] + 2 - k * 6]], 2.4 * wmul, 1 * wmul);
      }
    }
    ctx.restore();
    return geo;
  }

  // ---------- ground strips (litter line, pebbles, a fallen leaf) ----------
  function groundInk(y, seed, t0, { leafX = 860, span = 1.4 } = {}) {
    const ink = new B.Ink(), R = RNG(seed);
    ink.group('ol');
    const pts = []; for (let x = 70; x <= 1010; x += 10) pts.push([x, y + Math.sin(x * 0.03 + seed) * 2.5]);
    stroke(ink, pts, 2.6, { taper: 40 });
    ink.group('h1');
    for (let k = 0; k < 70; k++) { const x = 80 + R() * 920, l = 8 + R() * 22; stroke(ink, [[x, y + 6 + R() * 10], [x + l, y + 8 + R() * 12]], 0.9 + R() * 0.7, { taper: 4 }); }
    for (let k = 0; k < 7; k++) { const x = 100 + R() * 880; if (Math.abs(x - 540) < 260) continue; engraveBody(ink, B.ellipse(x, y - 9, 18 + R() * 12, 10 + R() * 4), ID, { g: '', seed: seed + k, base: 0.15, spacing: 3, h3: false }); }
    const lf = xf(leafX, y - 14, 0.55, -0.15);
    engraveBody(ink, 'M-120 0 C-60 -50 60 -50 130 0 C60 40 -60 40 -120 0 Z', lf, { seed: seed + 50, base: 0.1, spacing: 4.2, h3: false });
    ink.group('ol'); stroke(ink, [lf([-130, 0]), lf([0, -4]), lf([130, 0])], 1.6, { taper: 8 });
    for (let k = -3; k <= 3; k++) stroke(ink, [lf([k * 30, -2]), lf([k * 30 + 24, -26])], 1, { taper: 4 });
    sched(ink, t0, span); return ink;
  }

  // ---------- top view (dorsal plates) ----------
  const TOP = { cx: 540, cy: 1000, rx: 250, ry: 420 };
  const halfW = (y, o = TOP) => o.rx * Math.sqrt(Math.max(0.0025, 1 - ((y - o.cy) / o.ry) ** 2));
  function bandPath(y0, y1, flare = 10) {
    const pts = []; const L = (y) => 540 - halfW(y) - flare, Rr = (y) => 540 + halfW(y) + flare;
    pts.push(...quadPts([L(y0), y0], [540, y0 + 40], [Rr(y0), y0], 10));
    for (let k = 1; k <= 6; k++) { const y = y0 + (y1 - y0) * k / 6; pts.push([Rr(y), y]); }
    pts.push(...quadPts([Rr(y1), y1], [540, y1 + 40], [L(y1), y1], 10).slice(1));
    for (let k = 5; k >= 1; k--) { const y = y0 + (y1 - y0) * k / 6; pts.push([L(y), y]); }
    return 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L') + ' Z';
  }
  const topView = (() => {
    const edges = [632]; for (let k = 1; k <= 7; k++) edges.push(632 + k * 82); for (let k = 1; k <= 5; k++) edges.push(1206 + k * 27);
    const bands = [];
    // telson
    { const ink = new B.Ink(); const sh = engraveBody(ink, 'M500 1330 L580 1330 Q560 1395 540 1404 Q520 1395 500 1330 Z', ID, { seed: 90, base: 0.12, spacing: 4 }); bands.push({ ink, sh, k: 13 }); }
    for (let k = edges.length - 2; k >= 0; k--) { const ink = new B.Ink(); const sh = engraveBody(ink, bandPath(edges[k], edges[k + 1], k < 7 ? 12 : 4), ID, { seed: 100 + k, base: 0.05, spacing: 4.4 }); bands.push({ ink, sh, k: k + 1 }); }
    { const ink = new B.Ink(); const sh = engraveBody(ink, B.ellipse(540, 618, 150, 62), ID, { seed: 99, base: 0.08, spacing: 4 });
      ink.group('ol'); for (const s of [-1, 1]) { stroke(ink, [[540 + s * 90, 588], [540 + s * 170, 520], [540 + s * 200, 470], [540 + s * 250, 440]], 2.6, { taper: 10 }); ink.dot(540 + s * 104, 608, 6); }
      bands.push({ ink, sh, k: 0 }); }
    for (const b of bands) sched(b.ink, 14.55 + b.k * 0.16, 1.3);
    const wash = new Wash({ scale: 1.5 });
    bands.forEach((b) => wash.add({ path: b.sh.path, polys: b.sh.polys, color: '#6f7d88', origin: [470, 760 + b.k * 40], t0: 16.85 + b.k * 0.04, dur: 0.9, alpha: 0.55 }));
    return { bands, wash };
  })();
  function drawTop(ctx, t) { topView.wash.draw(ctx, t); for (const b of topView.bands) { occlude(ctx, [b.sh]); b.ink.draw(ctx, t); } }
  // top view washes need occlusion before the wash, so draw: occlude all, wash, inks
  function drawTopOrdered(ctx, t) { for (const b of topView.bands) { occlude(ctx, [b.sh], t > 14.5 ? 1 : 0); } topView.wash.draw(ctx, t); for (const b of topView.bands) b.ink.draw(ctx, t); }

  // ---------- underside view (soft belly, 14 legs, gill plates) ----------
  const UND = { cx: 540, cy: 980, rx: 232, ry: 400 };
  const LEGY = [690, 760, 830, 900, 970, 1040, 1110];
  const under = (() => {
    const body = new B.Ink(), legs = new B.Ink(), gills = new B.Ink();
    const bodySh = engraveBody(body, B.ellipse(UND.cx, UND.cy, UND.rx, UND.ry), ID, { seed: 201, base: -0.12, spacing: 6.5, h3: false });
    body.group('h2'); for (const y of LEGY) { const hw = halfW(y + 35, UND) - 30; stroke(body, quadPts([540 - hw, y + 35], [540, y + 52], [540 + hw, y + 35], 14), 1.1, { taper: 10 }); }
    const headSh = engraveBody(body, B.ellipse(540, 612, 120, 56), ID, { seed: 202, base: 0.12, spacing: 3.8 });
    body.group('ol'); stroke(body, [[505, 640], [540, 662], [575, 640]], 1.8, { taper: 5 });
    for (const s of [-1, 1]) stroke(body, [[540 + s * 70, 580], [540 + s * 150, 500], [540 + s * 175, 455], [540 + s * 225, 425]], 2.4, { taper: 10 });
    sched(body, -0.6, 1.4);
    const legTips = [];
    LEGY.forEach((y, j) => {
      for (const s of [-1, 1]) {
        const idx = j * 2 + (s < 0 ? 0 : 1); legs.group('L' + idx);
        const hw = halfW(y, UND); const b = [540 + s * 48, y], kn = [540 + s * (hw + 24), y + (j - 3) * 6], ft = [540 + s * (hw + 92), y + (j - 3) * 18 + 10];
        stroke(legs, [b, lerp2(b, kn, 0.5), kn], 3.6, { taper: 3 }); stroke(legs, [kn, lerp2(kn, ft, 0.5), ft], 2.6, { taper: 6 });
        stroke(legs, [[kn[0] - s * 4, kn[1] - 5], [kn[0] + s * 4, kn[1] + 5]], 1.4, { taper: 2 });
        legTips.push({ idx, ft });
        legs.schedule('L' + idx, 0.2 + idx * 0.072, 0.2 + idx * 0.072 + 0.22, { conc: 3 });
      }
    });
    legs.build();
    const gillShs = [];
    for (let k = 0; k < 5; k++) {
      const y = 1196 + k * 30, w = 118 - k * 17;
      for (const s of [-1, 1]) {
        const x0 = 540 + s * 4, x1 = 540 + s * w;
        const d = `M${x0} ${y} L${x1 - s * 14} ${y} Q${x1} ${y} ${x1} ${y + 16} Q${x1} ${y + 38} ${x1 - s * 20} ${y + 38} L${x0} ${y + 38} Z`;
        gillShs.push(engraveBody(gills, d, ID, { seed: 220 + k * 2 + (s > 0), base: 0.04, spacing: 3.0, h3: false }));
      }
    }
    sched(gills, 0.1, 1.1);
    legTips.sort((a, b) => a.idx - b.idx);
    return { body, legs, gills, bodySh, headSh, gillShs, legTips };
  })();
  const gillWash = new Wash({ scale: 1.5 });
  under.gillShs.forEach((g, i) => gillWash.add({ path: g.path, polys: g.polys, color: '#b25a55', origin: [540, 1200 + (i >> 1) * 30], t0: 20.5 + (i >> 1) * 0.08, dur: 0.9, alpha: 0.72 }));
  function drawUnder(ctx, tl, tAbs) {
    under.legs.draw(ctx, tl); occlude(ctx, [under.bodySh], ph(tl, -0.6, -0.2)); under.body.draw(ctx, tl);
    occlude(ctx, under.gillShs, ph(tl, 0.1, 0.3)); gillWash.draw(ctx, tAbs); under.gills.draw(ctx, tl);
  }

  // ---------- crab (static engine figure, authored for a roundel of radius ~145) ----------
  const crab = (() => {
    const ink = new B.Ink();
    ink.group('ol'); const R = RNG(31);
    for (const s of [-1, 1]) for (let k = 0; k < 4; k++) { const b = [s * 66, 4 + k * 11], m = [s * (104 + k * 4), 20 + k * 14], e = [s * (118 + k * 2), 62 + k * 12]; stroke(ink, [b, m, e], 3.0 - k * 0.3, { taper: 4 }); }
    for (const s of [-1, 1]) { stroke(ink, [[s * 52, -34], [s * 80, -62], [s * 84, -86]], 5, { taper: 3 }); }
    const sh = engraveBody(ink, 'M-82 0 C-82 -46 -42 -62 0 -62 C42 -62 82 -46 82 0 C82 30 42 46 0 46 C-42 46 -82 30 -82 0 Z', ID, { seed: 32, base: 0.08, spacing: 3.2 });
    for (const s of [-1, 1]) engraveBody(ink, B.ellipse(s * 92, -104, 30, 19, s * -0.7), ID, { seed: 33 + s, base: 0.15, spacing: 2.8, h3: false });
    ink.group('ol'); for (const s of [-1, 1]) { stroke(ink, [[s * 16, -58], [s * 20, -80]], 2.4, { taper: 2 }); ink.dot(s * 20, -82, 5); stroke(ink, [[s * 104, -120], [s * 126, -132]], 2, { taper: 3 }); }
    ink.schedule(['ol', 'h1', 'h2', 'h3'], -3, -2, { conc: 999 }); ink.build(); return { ink, sh };
  })();

  // ---------- the ant ----------
  function ant(ctx, x, y, s, gait, tilt = 0, a = 1) {
    if (a <= 0) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(tilt); ctx.scale(s, s);
    const pen = Pen();
    for (const far of [1, 0]) for (let k = 0; k < 3; k++) { const ph0 = gait * 14 + k * 2.1 + (far ? Math.PI : 0), sw = Math.sin(ph0), lift = Math.max(0, Math.cos(ph0)) * 6 * (gait > 0 ? 1 : 0); const b = [-6 + k * 12, -36], kn = [-22 + k * 22 + sw * 6, -54], ft = [-30 + k * 30 + sw * 14, -lift]; pen.line([b, kn], (u) => (2.6 - u) * (far ? 0.7 : 1)); pen.line([kn, ft], (u) => (2 - u * 1.2) * (far ? 0.7 : 1)); }
    pen.flush(ctx);
    const parts = [[-58, -44, 34, 24, -0.2], [-22, -40, 7, 6, 0], [0, -42, 24, 12, -0.1], [40, -48, 18, 15, 0]];
    for (const [px, py, rx, ry, r] of parts) { const p = new Path2D(); p.ellipse(px, py, rx, ry, r, 0, 7); miniEngrave(ctx, p, [px - rx, py - ry, px + rx, py + ry], { sp: 3.6, w: 1.3, ol: 2.2, tone: 0.8, angle: 1.1 }); }
    tline(ctx, [[48, -60], [62, -86], [86, -78]], 1.8, 0.8); tline(ctx, [[44, -60], [54, -90], [76, -94]], 1.4, 0.7);
    tline(ctx, [[56, -42], [66, -36], [60, -30]], 2.2, 1.2);
    ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(46, -52, 3.5, 0, 7); ctx.fill();
    ctx.restore();
  }

  const DROP = new Path2D('M0 -22 C8 -10 14 0 14 8 C14 16 8 22 0 22 C-8 22 -14 16 -14 8 C-14 0 -8 -10 0 -22 Z');
  function droplet(ctx, x, y, s, a = 1) {
    if (a <= 0 || s <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.scale(s, s);
    ctx.fillStyle = paperFill(ctx); ctx.fill(DROP);
    ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(92,132,158,0.75)'; ctx.fill(DROP); ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = INK; ctx.lineWidth = 2 / s; ctx.stroke(DROP); ctx.lineWidth = 1 / s; for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.moveTo(3, 1 + k * 5); ctx.lineTo(11, 1 + k * 5); ctx.stroke(); }
    ctx.restore();
  }

  function roundelAt(ctx, x, y, r, R0, p, drawContent) {
    if (p <= 0) return; const rr = r * eo(p);
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, rr, 0, 7); ctx.fillStyle = paperFill(ctx); ctx.fill(); ctx.clip();
    ctx.translate(x, y); ctx.scale(rr / R0, rr / R0); drawContent(ctx, rr / R0); ctx.restore();
    if (rr > 12) roundelFrame(ctx, x, y, rr, { p, w: 2.6 });
  }
  const strike = (ctx, x0, y0, x1, y1, p) => { if (p <= 0) return; ctx.save(); ctx.strokeStyle = '#7a1f12'; ctx.lineCap = 'round'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + (x1 - x0) * p, y0 + (y1 - y0) * p); ctx.stroke(); ctx.restore(); };

  // ---------- grounds ----------
  const gA = groundInk(1200, 3, -1.6, { leafX: 880 });
  const gB = groundInk(980, 7, 4.9, { leafX: 900, span: 1.0 });
  const gF = groundInk(1222, 11, 26.3, { leafX: 900, span: 1.0 });
  const gH = groundInk(1150, 17, 43.0, { leafX: 960, span: 1.0 });

  // ---------- scenes ----------
  function curlA(t) { return 0.1 + 0.9 * eio(ph(t, 0.95, 1.55)); }
  function sceneA(ctx, t) {
    gA.draw(ctx, t);
    const xw = 360 + 180 * eo(ph(t, -0.4, 1.0));
    sideBug(ctx, PILL, { x: xw, gy: 1200, s: 1.0, c: curlA(t), gait: Math.min(t, 0.95) + 0.4, build: t + 1.5, retr: sst(0.85, 1.4, t), antT: t });
  }
  function sceneB(ctx, t) {
    gB.draw(ctx, t);
    sideBug(ctx, PILL, { x: 540, gy: 980, s: 0.95, c: 0.12, gait: 0.2 + Math.sin(t * 1.3) * 0.02, build: t - 4.9, antT: t });
  }
  function sceneB_screen(ctx, t) {
    // "not an insect"
    const ip = ph(t, 5.8, 6.3), io = 1 - ph(t, 8.5, 8.9);
    if (ip > 0 && io > 0) { ctx.save(); ctx.globalAlpha = io; engraveText(ctx, 'INSECT', 540, 600, { size: 96, weight: 600, track: 0.12, p: ip }); ctx.restore(); ctx.save(); ctx.globalAlpha = io; strike(ctx, 330, 610, 750, 540, ph(t, 6.2, 6.5)); ctx.restore(); }
    const R = [[200, 1270, 9.4, 'crab'], [540, 1270, 9.8, 'shrimp'], [880, 1270, 10.5, 'lobster']];
    R.forEach(([x, y, t0, name], i) => {
      const p = ph(t, t0 - 0.2, t0 + 0.25);
      roundelAt(ctx, x, y, 150, 150, p, (c, k) => {
        if (i === 0) crab.ink.draw(c, 99, { wScale: 1 / Math.max(0.1, k) });
        else if (i === 1) sideBug(c, SHRIMP, { x: 20, gy: 80, s: 0.62, c: 0.42, wmul: 1.4, antT: t });
        else sideBug(c, LOBSTER, { x: 0, gy: 55, s: 0.42, c: 0.04, wmul: 1.7, antT: t });
      });
      label(ctx, name, x, 1475, ph(t, t0 + 0.05, t0 + 0.4), 1);
    });
  }
  function sceneC(ctx, t) {
    const tl = t - 11.4; drawUnder(ctx, tl + 0.0, t);
    for (const { idx, ft } of under.legTips) { const p = ph(tl, 0.32 + idx * 0.072, 0.5 + idx * 0.072); if (p <= 0) continue; const s = ft[0] < 540 ? -1 : 1; engraveText(ctx, String(idx + 1), ft[0] + s * 30, ft[1] + 14, { size: 40, italic: true, p }); }
  }
  function sceneD(ctx, t) { drawTopOrdered(ctx, t); }
  function sceneE(ctx, t) {
    drawUnder(ctx, 9, t);
    // damp: drops fall onto the gills
    for (let i = 0; i < 6; i++) { const t0 = 25.45 + i * 0.12; const u = eio(ph(t, t0, t0 + 0.45)); if (u <= 0) continue; const x = 470 + (i % 3) * 70 + (i > 2 ? 35 : 0), y = 1090 + u * (130 + (i > 2 ? 40 : 0)); droplet(ctx, x, y, 0.9 * (1 - ph(t, t0 + 0.5, t0 + 0.75) * 0.5)); }
  }
  function sceneE_screen(ctx, t) {
    const p = ph(t, 23.6, 24.0), out = 1 - ph(t, 25.2, 25.5);
    if (out > 0) { ctx.save(); ctx.globalAlpha = out; roundelAt(ctx, 830, 650, 160, 160, p, (c) => sideBug(c, SHRIMP, { x: 20, gy: 80, s: 0.66, c: 0.42, wmul: 1.4, antT: t })); ctx.restore();
      if (p > 0.5) { ctx.save(); ctx.globalAlpha = out; const k = ph(t, 23.9, 24.3); ctx.strokeStyle = INK; ctx.lineWidth = 1.6; for (let j = 0; j < 3; j++) { ctx.beginPath(); for (let x = 0; x <= 200 * k; x += 6) { const yy = 560 + j * 14 + Math.sin(x * 0.08 + j) * 4; x ? ctx.lineTo(730 + x, yy) : ctx.moveTo(730 + x, yy); } ctx.stroke(); } ctx.restore(); } }
  }
  // the roll
  function curlF(t) {
    const a = 0.1 + 0.35 * eio(ph(t, 29.15, 30.1)) + 0.33 * eio(ph(t, 30.2, 31.1));
    const lock = ph(t, 32.15, 32.5); const b = 1 - Math.pow(1 - lock, 3) * (1 + 2.2 * lock) * 0 ; // eased
    return Math.min(1, a + (1 - 0.78) * eo(lock) + (lock > 0 && lock < 1 ? 0.015 * Math.sin(lock * Math.PI) : 0));
  }
  let ballGeo = { cx: 600, cy: 1100, r: 120 };
  function sceneF(ctx, t) {
    // tremor: the ground and the bug shiver on "shake the ground"
    const tr = ph(t, 27.45, 27.6) * (1 - ph(t, 28.3, 28.6)), jx = Math.sin(t * 70) * 5 * tr;
    ctx.save(); ctx.translate(jx, 0); gF.draw(ctx, t);
    if (tr > 0) { ctx.save(); ctx.strokeStyle = INK; ctx.lineCap = 'round'; for (let k = 0; k < 12; k++) { const x = 120 + k * 76, h = 10 + (k % 3) * 8; ctx.lineWidth = 2; ctx.globalAlpha = tr; ctx.beginPath(); ctx.moveTo(x, 1240 + h * 0.3); ctx.lineTo(x + 6, 1240 + h * 1.6); ctx.stroke(); } ctx.restore(); }
    const xw = 430 + 170 * eo(ph(t, 26.3, 28.0));
    const walking = t < 27.5; const gait = walking ? t : 27.5;
    const c = curlF(t);
    const wash = { p: eo(ph(t, 33.4, 34.3)), R: 260, o: [560, 1050], color: 'rgba(104,122,138,0.55)' };
    ballGeo = sideBug(ctx, PILL, { x: xw, gy: 1222, s: 1.22, c, gait, build: t - 26.2, retr: sst(29.1, 30.4, t), antT: t, wash });
    ctx.restore();
    // the poking twig
    const tp = ph(t, 26.45, 26.8), tb = 1 - ph(t, 27.35, 27.7);
    if (tp > 0 && tb > 0) { const tap = Math.sin(ph(t, 26.75, 27.2) * Math.PI * 2) * 18; const tip = [760 + (1 - tp) * 260 - tap, 980 - tap * 0.4]; ctx.save(); ctx.globalAlpha = tb; tline(ctx, [[1080, 760], lerp2([1080, 760], tip, 0.6), tip], 9, 4); tline(ctx, [[960, 840], [935, 800], [945, 770]], 3, 1); ctx.restore(); }
    // the ant
    if (t > 34.4) {
      const bl = ballGeo.cx - ballGeo.r * 1.0 - 92 * 1.1;
      const u = eo(ph(t, 34.5, 35.7)); let ax = -120 + (bl + 10 + 120) * u;
      const slip = ph(t, 37.6, 38.0); ax -= 40 * eo(slip);
      const tilt = -0.25 * Math.sin(ph(t, 36.4, 37.5) * Math.PI * 3) * (1 - slip);
      const leave = ph(t, 38.0, 38.6); ax -= 260 * leave;
      ant(ctx, ax, 1222, 1.1, t < 35.7 || t > 37.95 ? t : 35.7, tilt * 0.6, 1);
    }
  }
  // cross-section of the ball
  const XS = { x: 540, y: 960, R: 320, r0: 240 };
  function sceneG(ctx, t) {
    const b = t - 38.5, N = 14;
    // the plate ring as wedges, each cut and hatched radially
    for (let i = 0; i < N; i++) {
      const p = ph(b, 0.05 + i * 0.03, 0.55 + i * 0.03); if (p <= 0) continue;
      const a0 = -Math.PI / 2 + i / N * Math.PI * 2, a1 = a0 + Math.PI * 2 / N * 1.08;
      const path = new Path2D(); path.arc(XS.x, XS.y, XS.R, a0, a1); path.arc(XS.x, XS.y, XS.r0, a1, a0, true); path.closePath();
      ctx.save(); ctx.fillStyle = paperFill(ctx); ctx.fill(path);
      if (t > 39.0) { ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = `rgba(104,122,138,${0.5 * ph(t, 39.0, 39.6)})`; ctx.fill(path); ctx.globalCompositeOperation = 'source-over'; }
      ctx.restore();
      const pen = Pen(), M = 9;
      for (let k = 0; k <= M; k++) { const a = a0 + (a1 - a0) * (k + 0.5) / (M + 1); const lit = Math.cos(a) * TOL[0] + Math.sin(a) * TOL[1]; const tone = clamp(0.5 - 0.4 * lit); const q0 = [XS.x + Math.cos(a) * XS.R, XS.y + Math.sin(a) * XS.R], q1 = [XS.x + Math.cos(a) * (XS.R - (XS.R - XS.r0) * p), XS.y + Math.sin(a) * (XS.R - (XS.R - XS.r0) * p)]; pen.line([q0, lerp2(q0, q1, 0.5), q1], (u) => 2.0 * tone * swell(u)); }
      const arc = []; for (let k = 0; k <= 10 * p; k++) { const a = a0 + (a1 - a0) * k / 10; arc.push([XS.x + Math.cos(a) * XS.R, XS.y + Math.sin(a) * XS.R]); }
      pen.line(arc, (u) => 3.4 * (0.5 + 0.5 * swell(u))); pen.flush(ctx);
      tline(ctx, [[XS.x + Math.cos(a0) * XS.R, XS.y + Math.sin(a0) * XS.R], [XS.x + Math.cos(a0) * XS.r0, XS.y + Math.sin(a0) * XS.r0]], 2.6, 1.6, p);
    }
    // inside: tucked legs and the gill plates
    const ip = ph(b, 0.5, 1.2);
    if (ip > 0) {
      for (let k = 0; k < 7; k++) { const a = -Math.PI * 0.95 + k * 0.32; const p0 = [XS.x + Math.cos(a) * XS.r0, XS.y + Math.sin(a) * XS.r0], p2 = [XS.x + Math.cos(a + 0.35) * 120, XS.y + Math.sin(a + 0.35) * 120]; tline(ctx, quadPts(p0, [XS.x + Math.cos(a + 0.05) * 170, XS.y + Math.sin(a + 0.05) * 170], p2, 8), 3.4, 1.4, ip); }
      for (let k = 0; k < 5; k++) { const y = 990 + k * 26, w = 92 - k * 13; for (const s of [-1, 1]) { const p = new Path2D(); p.ellipse(540 + s * w * 0.5, y, w * 0.5, 15, 0, 0, 7); ctx.save(); ctx.globalAlpha = ip; miniEngrave(ctx, p, [540 + s * w * 0.5 - w * 0.5, y - 15, 540 + s * w * 0.5 + w * 0.5, y + 15], { sp: 3.4, w: 1.1, ol: 1.8, tone: 0.3 }); const wp = ph(t, 41.8, 42.3); if (wp > 0) { ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = `rgba(178,90,85,${0.7 * wp})`; ctx.fill(p); } ctx.restore(); } }
    }
    // moisture trapped inside
    const DR = [[430, 860], [640, 850], [520, 800], [380, 990], [700, 980], [460, 1120], [630, 1130], [560, 900]];
    DR.forEach(([x, y], i) => { const p = ph(t, 40.0 + i * 0.09, 40.3 + i * 0.09); droplet(ctx, x, y, 0.9 * eo(p) * (1 + 0.04 * Math.sin(t * 3 + i))); });
    // dry air outside, stopped at the armour
    const da = ph(t, 41.3, 42.6);
    if (da > 0) { ctx.save(); ctx.strokeStyle = INK; ctx.lineCap = 'round'; for (let k = 0; k < 6; k++) { const a = -2.6 + k * 0.42 + (k > 2 ? 2.0 : 0); const r1 = 470, r2 = XS.R + 30 + 60 * (1 - eo(da)); ctx.lineWidth = 2.2; ctx.beginPath(); for (let j = 0; j <= 16; j++) { const r = r1 + (r2 - r1) * j / 16; const w = Math.sin(j * 1.2 + t * 4) * 8; const x = XS.x + Math.cos(a) * r - Math.sin(a) * w, y = XS.y + Math.sin(a) * r + Math.cos(a) * w; j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); } ctx.restore(); }
    if (t > 41.8) { leader(ctx, [600, 1040], [870, 1290], { p: ph(t, 41.8, 42.1), w: 1.3 }); label(ctx, 'gills', 900, 1330, ph(t, 41.9, 42.3), 1); }
  }
  function sceneH(ctx, t) {
    gH.draw(ctx, t);
    // pill bug: already a ball
    sideBug(ctx, PILL, { x: 270, gy: 1150, s: 0.78, c: 1, retr: 1, build: t - 42.9 });
    // sow bug: tries to curl, can't, then runs
    const tryc = Math.sin(ph(t, 45.0, 45.9) * Math.PI) * 0.16;
    const run = eio(ph(t, 46.2, 47.6)); const xs = 660 + 110 * run;
    sideBug(ctx, SOW, { x: xs, gy: 1150, s: 0.55, c: 0.035 + tryc, gait: t < 46.2 ? 43 + Math.sin(t) * 0.05 : t * 1.6, build: t - 43.0, antT: t, wmul: 1.15 });
    if (t > 46.3 && t < 48.0) { ctx.save(); ctx.globalAlpha = 1 - ph(t, 47.6, 48.0); ctx.strokeStyle = INK; ctx.lineCap = 'round'; for (let k = 0; k < 3; k++) { ctx.lineWidth = 2.2 - k * 0.4; ctx.beginPath(); ctx.moveTo(xs - 230 - k * 30, 1095 + k * 22); ctx.lineTo(xs - 170 - k * 20, 1095 + k * 22); ctx.stroke(); } ctx.restore(); }
  }
  function sceneH_screen(ctx, t) {
    slip(ctx, 'ARMOUR', 270, 1330, ph(t, 47.85, 48.3));
    slip(ctx, 'SPEED', 800, 1330, ph(t, 48.6, 49.0));
    if (t > 43.4) { ctx.save(); ctx.globalAlpha = 1 - ph(t, 47.3, 47.7); label(ctx, 'pill bug', 250, 800, ph(t, 43.5, 43.9), 1); label(ctx, 'sow bug', 820, 800, ph(t, 44.29, 44.7), 1); ctx.restore(); }
  }
  function slip(ctx, str, x, y, p) {
    if (p <= 0) return; ctx.save(); ctx.font = '600 84px "Bodoni Moda"'; const w = ctx.measureText(str).width * 1.08 + 60;
    ctx.globalAlpha = Math.min(1, p * 2); ctx.fillStyle = ctx.createPattern(bandPaper(), 'no-repeat'); ctx.fillRect(x - w / 2, y - 92, w, 122);
    ctx.strokeStyle = INK; ctx.lineWidth = 2.2; ctx.strokeRect(x - w / 2 + 6, y - 86, w - 12, 110); ctx.restore();
    engraveText(ctx, str, x, y, { size: 84, weight: 600, track: 0.08, p });
  }
  function label(ctx, str, x, y, p, a) {
    if (p <= 0 || a <= 0) return; ctx.save(); ctx.font = 'italic 500 48px "Bodoni Moda"'; const w = ctx.measureText(str).width;
    ctx.globalAlpha = a * Math.min(1, p * 2); ctx.fillStyle = 'rgba(244,237,219,0.92)'; ctx.fillRect(x - w / 2 - 12, y - 42, w + 24, 58); ctx.restore();
    engraveText(ctx, str, x, y, { size: 48, italic: true, p, alpha: a });
  }

  const SCENES = [
    { a: -9, b: 5.0, tone: 1, keys: [[0, 540, 960, 1.0], [1.2, 540, 975, 1.0], [2.2, 540, 1040, 1.14], [5.0, 540, 1045, 1.16]], draw: sceneA },
    { a: 5.0, b: 11.4, tone: 0.97, keys: [[5.0, 540, 960, 1.0], [11.4, 540, 960, 1.02]], draw: sceneB, screen: sceneB_screen },
    { a: 11.4, b: 14.4, tone: 1.02, keys: [[11.4, 540, 940, 1.0], [14.4, 540, 930, 1.03]], draw: sceneC },
    { a: 14.4, b: 17.7, tone: 0.98, keys: [[14.4, 540, 1010, 1.07], [17.7, 540, 975, 1.0]], draw: sceneD },
    { a: 17.7, b: 26.45, tone: 1, keys: [[17.7, 540, 950, 1.0], [19.5, 540, 950, 1.0], [20.55, 540, 1250, 1.7], [26.45, 540, 1262, 1.74]], draw: sceneE, screen: sceneE_screen },
    { a: 26.45, b: 38.5, tone: 0.97, keys: [[26.45, 540, 960, 1.0], [32.5, 540, 975, 1.0], [33.5, 590, 1060, 1.32], [34.5, 590, 1060, 1.32], [35.3, 470, 1030, 1.1], [38.5, 470, 1030, 1.1]], draw: sceneF },
    { a: 38.5, b: 43.1, tone: 1.02, keys: [[38.5, 540, 960, 1.0], [43.1, 540, 960, 1.03]], draw: sceneG },
    { a: 43.1, b: 99, tone: 1, keys: [[43.1, 540, 1060, 1.08], [52, 540, 1080, 1.12]], draw: sceneH, screen: sceneH_screen },
  ];
  const PEEL = 0.5;
  function camOf(sc, t) {
    const K = sc.keys; let i = 0; while (i < K.length - 2 && t > K[i + 1][0]) i++;
    const [t0, x0, y0, z0] = K[i], [t1, x1, y1, z1] = K[i + 1], u = eio(ph(t, t0, t1));
    const iz = 1 / z0 + (1 / z1 - 1 / z0) * u;
    return { cx: x0 + (x1 - x0) * u, cy: y0 + (y1 - y0) * u, z: 1 / iz };
  }

  // ---------- text ----------
  const HEAD = [[-1, 4.95, 'THE PILL BUG', 'Armadillidium vulgare', 0.7], [5.0, 11.4, 'NOT A BUG', 'a crustacean', 7.6], [11.4, 14.4, 'COUNT THE LEGS', null], [14.4, 17.7, 'ARMOUR ON TOP', null],
    [17.7, 22.5, 'SOFT UNDERNEATH', null], [22.5, 26.45, 'IT BREATHES WITH GILLS', null], [26.45, 31.5, 'POKE IT', null], [31.5, 38.5, 'THE ARMOURED BALL', null],
    [38.5, 43.1, 'INSIDE THE BALL', null], [43.1, 47.6, 'ITS COUSIN', null], [47.6, 53, 'ARMOUR OR SPEED?', null]];
  const NOTES = [[3.6, 4.95, 'WHY?', 'big'], [12.69, 13.4, '14 LEGS', 'big'], [13.44, 14.3, 'not six', 'script'], [16.06, 17.6, 'overlapping plates', 'script'],
    [18.6, 20.4, 'a soft belly', 'script'], [21.38, 22.45, 'GILLS', 'big'], [23.3, 24.7, 'like its sea cousins', 'script'], [25.55, 26.4, 'stay damp', 'script'],
    [26.75, 28.6, 'a poke, or a tremor', 'script'], [29.2, 31.2, 'head in, tail in', 'script'], [33.46, 34.6, 'LOCKED', 'big'], [35.95, 37.0, 'a smooth shell', 'script'],
    [37.3, 38.45, 'nothing to grab', 'script'], [40.0, 41.3, 'moisture trapped', 'script'], [41.84, 43.0, 'gills stay wet', 'script'],
    [44.85, 46.0, "can't roll up", 'script'], [46.4, 47.5, 'so it runs', 'script'], [49.64, 52, 'which would you pick?', 'script']];
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
      engraveText(ctx, 'PLATE IX', W / 2, 228, { size: 30, weight: 500, track: 0.3, p: 1, alpha: out * 0.85 });
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
    ctx.save(); ctx.fillStyle = PAL.paper; ctx.fillRect(0, 0, W, HH); ctx.restore();
    ctx.save(); ctx.translate(W / 2, HH / 2); ctx.scale(c.z, c.z); ctx.translate(-c.cx, -c.cy);
    CAM_M = ctx.getTransform();
    ctx.drawImage(sheet(sc.tone), 0, 0);
    sc.draw(ctx, t);
    ctx.restore();
    CAM_M = ctx.getTransform();
    if (sc.screen) sc.screen(ctx, t);
    drawText(ctx, t, c.z);
  }
  function explainer(ctx, Wc, Hc, t) {
    let i = 0; while (i < SCENES.length - 1 && t >= SCENES[i].b) i++;
    renderScene(ctx, SCENES[i], t);
    if (i > 0 && t < SCENES[i].a + PEEL) {
      const u = eio(ph(t, SCENES[i].a, SCENES[i].a + PEEL)), edge = HH * (1 - u);
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, edge); ctx.clip(); renderScene(ctx, SCENES[i - 1], SCENES[i].a - 0.001); ctx.restore();
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
    cut(0, 1.0, 0.5); cut(5.0, 6.0, 0.4); cut(11.5, 12.8, 0.4); cut(14.5, 16.8, 0.45); cut(26.4, 27.2, 0.35); cut(38.55, 39.6, 0.45); cut(43.1, 43.9, 0.35);
    for (const t of [5.0, 11.4, 14.4, 17.7, 26.45, 38.5, 43.1]) k.play('paper', t, { dur: 0.5, gain: 0.45, minor: true });
    for (let i = 0; i < 5; i++) k.play('tick', 0.1 + i * 0.18, { f: 3000, gain: 0.2, minor: true });
    k.play('swish', 1.0, { dur: 0.5, gain: 0.35 }); k.play('thud', 1.5, { gain: 0.7 }); k.play('ding', 4.54, { f: 'D6', gain: 0.25 });
    k.play('stamp', 6.25, { gain: 0.5 }); k.play('press', 7.7, { gain: 0.5 });
    k.play('blip', 9.45, { gain: 0.3 }); k.play('blip', 9.85, { gain: 0.3 }); k.play('blip', 10.55, { gain: 0.3 });
    for (let i = 0; i < 14; i++) k.play('tick', 11.65 + i * 0.072, { f: 2200 + i * 70, gain: 0.25, minor: true });
    k.play('press', 12.69, { gain: 0.6 });
    for (let i = 0; i < 13; i++) k.play('tock', 14.6 + i * 0.16, { f: 520 + i * 15, gain: 0.25, minor: true });
    for (let i = 0; i < 3; i++) k.play('stroke', 16.9 + i * 0.25, { material: 'brush', dur: 0.35, gain: 0.4, minor: true });
    k.play('whoosh', 19.6, { dur: 1.0, gain: 0.3 }); k.play('stroke', 20.6, { material: 'brush', dur: 0.5, gain: 0.45 });
    k.play('ding', 21.4, { f: 'A5', gain: 0.25 });
    k.play('whoosh', 23.65, { dur: 0.7, gain: 0.25, minor: true });
    for (let i = 0; i < 6; i++) k.play('blip', 25.9 + i * 0.12, { gain: 0.2, minor: true });
    k.play('tock', 26.8, { f: 900, gain: 0.45 }); k.play('tock', 27.05, { f: 950, gain: 0.45 });
    k.play('impact', 27.5, { gain: 0.35 }); k.play('thud', 27.55, { gain: 0.5 });
    k.play('swish', 29.2, { dur: 0.7, gain: 0.35 }); k.play('swish', 30.25, { dur: 0.7, gain: 0.35 });
    k.play('stamp', 32.38, { gain: 0.7 }); k.play('press', 32.42, { gain: 0.5 });
    k.play('whoosh', 33.0, { dur: 0.8, gain: 0.25, minor: true }); k.play('ding', 33.5, { f: 'E6', gain: 0.25 });
    for (let i = 0; i < 8; i++) k.play('tick', 34.6 + i * 0.14, { f: 3600, gain: 0.15, minor: true });
    k.play('tock', 36.45, { f: 1200, gain: 0.35 }); k.play('tock', 36.9, { f: 1250, gain: 0.35 }); k.play('erase', 37.7, { dur: 0.35, gain: 0.35 });
    for (let i = 0; i < 8; i++) k.play('blip', 40.0 + i * 0.09, { gain: 0.18, minor: true });
    k.play('whoosh', 41.3, { dur: 1.2, gain: 0.25 }); k.play('stroke', 41.85, { material: 'brush', dur: 0.4, gain: 0.4 });
    k.play('tock', 45.1, { f: 600, gain: 0.35 }); k.play('tock', 45.5, { f: 560, gain: 0.35 });
    for (let i = 0; i < 10; i++) k.play('tick', 46.2 + i * 0.13, { f: 2600, gain: 0.2, minor: true });
    k.play('stamp', 47.95, { gain: 0.45 }); k.play('stamp', 48.71, { gain: 0.45 }); k.play('sparkle', 49.7, { n: 4, gain: 0.3 });
  }
  function thumbnail(ctx, Wc, Hc) { explainer(ctx, Wc, Hc, 34.3); band(ctx, 1400, 1700, 1); engraveText(ctx, 'WHY ROLL', W / 2, 1540, { size: 150, weight: 600 }); engraveText(ctx, 'INTO A BALL?', W / 2, 1650, { size: 88, weight: 600 }); }
  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
