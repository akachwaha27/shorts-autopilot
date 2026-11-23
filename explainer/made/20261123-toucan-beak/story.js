// ===== Isometric Infographic (Lemo-Opuscar style), vertical 1080x1920: "Why is a toucan's beak so huge?" =====
// Drawn with the Lemo-Opuscar iso-infographic engine (window.LEMO, bundled by scripts/lemo_engine.sh): projection,
// three-tone solids, inset, cut line, hatch, ring. Original toucan, board, story, layout and timing.
// Unattended run: no storyboard step.
(function () {
  const W = 1080, HH = 1920;
  const L = window.LEMO;
  const { Iso, tri, PAL, inset, cutLine, hatch, ring, clamp, lerp, eo, eio, back, mix, hex, C30, TAU } = L;
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const css = (r, a = 1) => `rgba(${r[0] | 0},${r[1] | 0},${r[2] | 0},${a})`;

  // ---------- BEATS (from phrases.json) ----------
  const BEATS = [
    { s: 0.25, e: 2.87, w: { beak: 0.92, radiator: 2.19 } },
    { s: 3.27, e: 4.96, w: { never: 4.08, noticed: 4.45 } },
    { s: 5.32, e: 8.04, w: { bill: 5.8, third: 6.49 } },
    { s: 8.49, e: 10.51, w: { twentieth: 9.16 } },
    { s: 10.93, e: 12.1, w: { air: 11.81 } },
    { s: 12.44, e: 15.48, w: { keratin: 13.4 } },
    { s: 15.55, e: 17.58, w: { foam: 15.96 } },
    { s: 18.04, e: 19.29, w: { clever: 18.6 } },
    { s: 19.69, e: 22.53, w: { blood: 21.59 } },
    { s: 23.0, e: 24.25, w: { hot: 24.06 } },
    { s: 24.71, e: 26.64, w: { warm: 25.21, blood: 25.49 } },
    { s: 26.76, e: 29.11, w: { heat: 27.26, air: 28.86 } },
    { s: 29.48, e: 31.51, w: { heat: 30.89, camera: 31.14 } },
    { s: 31.89, e: 33.45, w: { light: 32.8 } },
    { s: 33.85, e: 36.57, w: { chilly: 34.49, off: 36.3 } },
    { s: 36.67, e: 37.53, w: { heat: 37.14 } },
    { s: 37.97, e: 38.99, w: { bursts: 38.5 } },
    { s: 39.37, e: 40.21, w: { almost: 39.37, heat: 39.8 } },
    { s: 40.28, e: 42.56, w: { beak: 42.1 } },
    { s: 42.96, e: 45.14, w: { nose: 44.84 } },
    { s: 45.14, e: 46.8, w: { radiator: 45.45 } },
  ];
  const DURATION = 46.8 + 1.0;
  window.BEATS = BEATS; window.DURATION = DURATION;

  try { ['600 100px "Jost"', '500 48px "Jost"'].forEach((f) => document.fonts.load(f, 'AaZz09?/%')); } catch (e) {}

  // ---------- palette (one hue per meaning) ----------
  const COL = {
    ground: '#F2E6D0', paper: '#FBF4E6', ink: '#2E2522',
    body: tri('#3A3440', 0.16, 0.25), bib: '#F6EEDC', beak: '#F08A24', beakTop: '#F6A84A', beakDark: '#C9661A',
    tip: '#2A2328', eye: '#4AA3D9', heat: '#E0503A', cold: '#5A9BCB', leaf: PAL.green, bark: tri('#8A5B3A'),
  };

  // ---------- the toucan (original drawing), profile in (u right, v down) units ----------
  const BODY = [[1, -6.6], [2.6, -6.2], [3.3, -5.4], [3.6, -3.6], [3.1, -1.6], [2.2, 1.4], [0.4, 3.5], [-2.6, 4.6], [-5.6, 4.6],
    [-8.4, 6.6], [-13.4, 10.6], [-14.8, 9.6], [-9.6, 4.2], [-8.6, 1], [-6.4, -2.8], [-3.4, -5.5], [-1.2, -6.6]];
  // beak: about a third of tail-tip-to-beak-tip length
  const BEAK = [[3.0, -6.0], [5.5, -6.7], [8.4, -6.5], [10.6, -5.6], [12.6, -4.1], [13.2, -3.2], [12.5, -3.0], [9.8, -3.3], [6.6, -3.2], [3.6, -3.4], [3.4, -4.6]];
  const BIB = [[3.25, -5.2], [3.5, -3.6], [3.0, -1.6], [2.1, 1.0], [0.6, 1.3], [0.5, -2.0], [1.4, -4.6]];
  const TIP = [[11.2, -5.1], [12.6, -4.1], [13.2, -3.2], [12.5, -3.0], [11.0, -3.15], [10.6, -4.1]];
  const BAND = [[3.0, -6.0], [3.9, -6.25], [4.2, -3.35], [3.6, -3.4], [3.4, -4.6]];
  const RIDGE = [[3.9, -6.25], [6, -6.75], [8.4, -6.55], [10.6, -5.65], [12.6, -4.15], [12.0, -4.2], [10.3, -5.25], [8.3, -6.0], [6, -6.15], [4.0, -5.85]];
  // vessels on the beak's face (u, v polylines)
  const VESSELS = [
    [[3.4, -4.6], [5.5, -4.8], [7.8, -4.7], [10, -4.4], [12.2, -3.6]],
    [[5.5, -4.8], [6.6, -5.8], [8.2, -6.2]], [[7.8, -4.7], [9.0, -3.6], [10.6, -3.4]], [[10, -4.4], [10.8, -5.3]],
    [[4.6, -4.7], [5.2, -3.6], [6.8, -3.4]], [[6.6, -5.8], [5.4, -6.3]], [[9.0, -3.6], [8.0, -3.35]],
  ];
  const BX = 0, BY = 0, BZ = 13.6, DEP = 2.6;   // bird anchor and thickness (extruded along +x)
  const P3 = (u, v, off) => [BX + off, BY - u, BZ - v];

  // three-tone extrusion of a profile, drawn now. face = colour of the big visible face
  function extrudeNow(iso, pts, off0, off1, t3, face) {
    const back_ = pts.map((p) => P3(p[0], p[1], off0)), front = pts.map((p) => P3(p[0], p[1], off1));
    const n = pts.length, sides = [];
    let cy = 0, cz = 0; front.forEach((p) => { cy += p[1] / n; cz += p[2] / n; });
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n, f = [back_[i], back_[j], front[j], front[i]];
      const m = [(f[0][0] + f[2][0]) / 2, (f[0][1] + f[2][1]) / 2, (f[0][2] + f[2][2]) / 2];
      sides.push([m[0] + m[1] + m[2], f, [0, m[1] - cy, m[2] - cz]]);
    }
    sides.sort((a, b) => a[0] - b[0]);
    for (const [, f, out] of sides) iso.face3(f, t3, { out });
    iso.face3(front, t3, { both: true, color: face });
  }
  function decal(iso, pts, off, color, a = 1) { iso.poly(pts.map((p) => iso.P(...P3(p[0], p[1], off))), color, a); }
  const scr = (iso, u, v, off = DEP + 0.02) => iso.P(...P3(u, v, off));

  // the whole bird is one ordered item (composite): body, bib, beak, eye, feet
  // opts: { beakCol, bodyCol, bibCol, cut (0..1 skin slide), keepBeak }
  function toucan(iso, o = {}) {
    iso.add(BX + BY + BZ, () => {
      const bt = o.bodyT || COL.body;
      // feet behind
      iso.boxNow(0.6, 1.4, BZ - 5.9, 1.2, 0.6, 1.0, tri('#6E7FA6'));
      iso.boxNow(0.6, 3.6, BZ - 5.9, 1.2, 0.6, 1.0, tri('#6E7FA6'));
      extrudeNow(iso, BODY, 0, DEP, bt, o.bodyFace || bt[1]);
      decal(iso, BIB, DEP + 0.01, o.bibCol || COL.bib);
      // eye: blue skin ring + pupil
      const [ex, ey] = scr(iso, 1.55, -4.9), k = iso.cam.k, g = iso.g;
      g.beginPath(); g.ellipse(ex, ey, 0.85 * k, 0.8 * k, 0, 0, TAU); g.fillStyle = iso.col(o.eyeCol || COL.eye); g.fill();
      g.beginPath(); g.ellipse(ex + 0.06 * k, ey, 0.36 * k, 0.36 * k, 0, 0, TAU); g.fillStyle = iso.col('#151217'); g.fill();
      g.beginPath(); g.arc(ex - 0.05 * k, ey - 0.12 * k, 0.1 * k, 0, TAU); g.fillStyle = iso.col('#FFF8EC'); g.fill();
      // beak: the subject keeps its colour
      const K0 = iso.keep; if (o.keepBeak !== false) iso.keep = true;
      const bc = o.beakCol || COL.beak, bT = [o.beakTop || COL.beakTop, bc, o.beakDark || COL.beakDark];
      const cut = o.cut || 0;
      if (cut > 0) {
        // section revealed: hatched rim + foam inside
        extrudeNow(iso, BEAK, 0, DEP * 0.5, bT, bc);
        const sec = BEAK.map((p) => iso.P(...P3(p[0], p[1], DEP * 0.5 + 0.01)));
        foamSection(iso, sec, cut);
        if (cut < 1) { // skin slides out along +x and fades
          const sl = eo(cut) * 4, a = 1 - ph(cut, 0.1, 0.75);
          if (a > 0) { iso.g.save(); iso.g.globalAlpha = a; extrudeNow(iso, BEAK.map((p) => p), DEP * 0.5 + sl, DEP + sl, bT, bc);
            iso.g.restore(); }
        }
      } else {
        extrudeNow(iso, BEAK, 0, DEP, bT, bc);
        if (!o.plain) { decal(iso, RIDGE, DEP + 0.01, o.ridgeCol || '#D9452E'); decal(iso, TIP, DEP + 0.015, COL.tip); decal(iso, BAND, DEP + 0.015, COL.tip); }
      }
      if (o.vessels > 0) vesselsDraw(iso, o.vessels, o.flow || 0, o.vesselCol || COL.heat);
      iso.keep = K0;
    }, 1);
  }
  function foamSection(iso, sec, a) {
    const g = iso.g, k = iso.cam.k, R = H_rng(7);
    hatch(g, sec, { fill: '#FBF4E6', sp: 9, color: 'rgba(46,37,34,0)' });
    g.save(); g.beginPath(); sec.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.closePath(); g.clip();
    // bone struts: a seeded cell network
    const pts = []; for (let i = 0; i < 70; i++) { const u = 3.5 + R() * 9.5, v = -6.6 + R() * 3.6; pts.push(scr(iso, u, v, DEP * 0.5 + 0.02)); }
    g.strokeStyle = iso.col('#B8AE9C', ph(a, 0.5, 1)); g.lineWidth = Math.max(1.5, 0.13 * k); g.lineCap = 'round';
    g.beginPath();
    for (let i = 0; i < pts.length; i++) {
      const d = pts.map((q, j) => [Math.hypot(q[0] - pts[i][0], q[1] - pts[i][1]), j]).sort((x, y) => x[0] - y[0]);
      for (let m = 1; m <= 3; m++) { const q = pts[d[m][1]]; g.moveTo(pts[i][0], pts[i][1]); g.lineTo(q[0], q[1]); }
    }
    g.stroke();
    g.restore();
    // keratin shell: thick orange rim on the section edge
    g.save(); g.beginPath(); sec.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.closePath();
    g.strokeStyle = iso.col(COL.beak); g.lineWidth = Math.max(4, 0.42 * k); g.lineJoin = 'round'; g.stroke();
    g.strokeStyle = iso.col(COL.ink); g.lineWidth = 2; g.stroke(); g.restore();
  }
  function H_rng(seed) { return window.H.rng(seed); }
  function vesselsDraw(iso, a, flow, col) {
    const g = iso.g, k = iso.cam.k;
    g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
    VESSELS.forEach((pl, i) => {
      const P = pl.map((p) => scr(iso, p[0], p[1], DEP + 0.03));
      // grow along the line (nothing moves without a line leading it)
      let len = 0; for (let j = 1; j < P.length; j++) len += Math.hypot(P[j][0] - P[j - 1][0], P[j][1] - P[j - 1][1]);
      const grow = clamp(a * 1.6 - i * 0.09);
      if (grow <= 0) return;
      g.setLineDash([len * grow, len + 10]);
      g.strokeStyle = iso.col(col); g.lineWidth = (i === 0 ? 0.32 : 0.2) * k; g.beginPath();
      P.forEach((p, j) => (j ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.stroke();
      if (flow > 0 && grow >= 1) { // pulses of warm blood travelling outward
        g.setLineDash([0.25 * k, 0.9 * k]); g.lineDashOffset = -flow * k * 2.2; g.strokeStyle = iso.col('#FFD3A0', 0.95);
        g.lineWidth = (i === 0 ? 0.2 : 0.13) * k; g.beginPath(); P.forEach((p, j) => (j ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.stroke();
        g.lineDashOffset = 0;
      }
    });
    g.setLineDash([]); g.restore();
  }

  // ---------- the board: a floating jungle plinth with soil strata ----------
  function board(iso, o = {}) {
    const bx = -9, by = -18, S = 18, D2 = 34;
    iso.box(bx, by, -3, S, D2, 3, tri('#E9DCC2'), { layer: 0, cull: false, decal: (I, b) => strata(I, b) });
    // grass top
    iso.flat([[bx, by], [bx + S, by], [bx + S, by + D2], [bx, by + D2]], 0.001, '#CFD8A6', { layer: 0, depth: -1e4 });
    // a pond
    const pond = []; for (let i = 0; i < 20; i++) { const a = i / 20 * TAU; pond.push([5 + Math.cos(a) * 2.6, -12 + Math.sin(a) * 3.6]); }
    iso.flat(pond, 0.01, COL.cold, { layer: 0, depth: -9e3 });
    // tree trunk + branch the bird stands on
    iso.cyl(1.8, -3, 0, 0.9, 6.4, COL.bark, { n: 12 }); iso.cyl(1.8, 11, 0, 0.9, 6.4, COL.bark, { n: 12 });
    iso.cyl(1.8, -6, 6.9, 0.8, 21, COL.bark, { axis: 'y', n: 12, bias: -6 });
    // leaf clumps
    const R = H_rng(31);
    for (let i = 0; i < 9; i++) { const x = bx + 1.5 + R() * (S - 3), y = by + 2 + R() * (D2 - 4); if (Math.abs(y + 12) < 4.5 && x > 2) continue;
      if (x > -2 && x < 6 && y > -8 && y < 16) continue; iso.sphere(x, y, 1.1, 1 + R() * 0.7, COL.leaf); }
  }
  function strata(I, b) {
    // the two front faces: three soil bands
    const g = I.g, bands = [['#A77850', 0], ['#8A5B3A', 0.38], ['#6A432A', 0.7]];
    for (const [c, f] of bands) {
      const z1 = b.z + b.h * (1 - f), z0 = b.z;
      I.poly([[b.x, b.y + b.d, z0], [b.x + b.w, b.y + b.d, z0], [b.x + b.w, b.y + b.d, z1], [b.x, b.y + b.d, z1]].map((p) => I.P(...p)), mix(c, '#F2E6D0', 0.05));
      I.poly([[b.x + b.w, b.y, z0], [b.x + b.w, b.y + b.d, z0], [b.x + b.w, b.y + b.d, z1], [b.x + b.w, b.y, z1]].map((p) => I.P(...p)), mix(c, '#231A2C', 0.18));
    }
    I.poly([[b.x, b.y + b.d, b.z + b.h], [b.x + b.w, b.y + b.d, b.z + b.h], [b.x + b.w, b.y + b.d, b.z + b.h * 0.92], [b.x, b.y + b.d, b.z + b.h * 0.92]].map((p) => I.P(...p)), '#9BB07A');
    I.poly([[b.x + b.w, b.y, b.z + b.h], [b.x + b.w, b.y + b.d, b.z + b.h], [b.x + b.w, b.y + b.d, b.z + b.h * 0.92], [b.x + b.w, b.y, b.z + b.h * 0.92]].map((p) => I.P(...p)), '#7E935F');
  }
  // second board: the radiator question
  function board2(iso, t) {
    const ox = 0, oy = -62;
    iso.box(ox - 9, oy - 9, -3, 18, 18, 3, tri('#E9DCC2'), { layer: 0, cull: false, decal: (I, b) => strata(I, b) });
    iso.flat([[ox - 9, oy - 9], [ox + 9, oy - 9], [ox + 9, oy + 9], [ox - 9, oy + 9]], 0.001, COL.paper, { layer: 0, depth: -1e4 });
    iso.line3([[ox - 7, oy - 7, 0.05], [ox + 7, oy - 7, 0.05], [ox + 7, oy + 7, 0.05], [ox - 7, oy + 7, 0.05], [ox - 7, oy - 7, 0.05]], COL.ink, 2, { dash: [10, 7], layer: 0, depth: -9e3 });
    // radiator fins arrive by motion (drop + bounce), one per sixteenth
    iso.keep = true;
    for (let i = 0; i < 7; i++) {
      const s = ph(t, 45.3 + i * 0.09, 45.6 + i * 0.09); if (s <= 0) continue;
      const drop = (1 - eo(s)) * 9, sq = s > 0.8 ? 1 - 0.18 * Math.sin((s - 0.8) / 0.2 * Math.PI) : 1;
      iso.box(ox - 1, oy - 5.6 + i * 1.6, drop, 2.4, 1.0, 7 * sq, tri(COL.beak));
    }
    if (t > 45.9) { iso.cyl(ox + 0.2, oy - 5.8, 7.2, 0.35, 10.6, tri('#C9661A'), { axis: 'y', n: 10, bias: 4 }); }
    iso.keep = false;
  }

  // ---------- screen-space type ----------
  function halo(g, s, x, y, o = {}) {
    g.save(); g.font = `${o.w || 600} ${o.size || 48}px "Jost"`; g.textAlign = o.align || 'center'; g.textBaseline = 'alphabetic';
    g.letterSpacing = (o.track ?? 0.1 * (o.size || 48) * 0.5) + 'px';
    g.lineJoin = 'round'; g.strokeStyle = o.haloCol || 'rgba(251,244,230,.95)'; g.lineWidth = o.hw || Math.max(7, (o.size || 48) * 0.16); g.strokeText(s, x, y);
    g.fillStyle = o.color || COL.ink; g.fillText(s, x, y); const w = g.measureText(s).width; g.restore(); return w;
  }
  // headline: wipes in left to right
  function headline(g, text, a, out = 0, y = 300) {
    if (a <= 0 || out >= 1) return;
    g.save(); g.font = '600 100px "Jost"'; g.letterSpacing = '6px';
    let size = 100, lines = [text]; if (g.measureText(text).width > 980) { const w = text.split(' '), h = Math.ceil(w.length / 2); lines = [w.slice(0, h).join(' '), w.slice(h).join(' ')]; }
    g.restore();
    const wv = W * eo(a);
    g.save(); g.beginPath(); g.rect(0, 0, wv + 40, HH); g.clip(); g.globalAlpha = 1 - out; g.translate(0, -out * 10);
    lines.forEach((ln, i) => halo(g, ln, W / 2, y + i * 112 - (lines.length - 1) * 56, { size, track: 6 }));
    // a thin ink rule under it, drawn ahead of the words
    g.strokeStyle = COL.ink; g.lineWidth = 3; g.beginPath(); g.moveTo(120, y + 34 + (lines.length - 1) * 56); g.lineTo(120 + 840 * eo(clamp(a * 1.3)), y + 34 + (lines.length - 1) * 56); g.stroke();
    g.restore();
  }
  // big label pin: dot → leader → rule → title (+ number)
  function bigPin(g, ax, ay, o) {
    const a = o.a ?? 1; if (a <= 0) return;
    const up = o.up ?? 160, dir = o.dir ?? 1, len = o.len ?? 70;
    const s1 = eo(ph(a, 0, 0.18)), s2 = eo(ph(a, 0.12, 0.42)), s3 = eo(ph(a, 0.36, 0.55)), s4 = ph(a, 0.45, 1);
    g.save(); g.globalAlpha = o.fade ?? 1; g.strokeStyle = COL.ink; g.lineWidth = 3; g.lineCap = 'round';
    if (s2 > 0) { g.beginPath(); g.moveTo(ax, ay); g.lineTo(ax, ay - up * s2); if (s3 > 0) g.lineTo(ax + dir * len * s3, ay - up); g.stroke(); }
    const R = 11 * back(s1, 2.2); g.beginPath(); g.arc(ax, ay, Math.max(0, R), 0, TAU); g.fillStyle = COL.paper; g.fill(); g.stroke();
    g.beginPath(); g.arc(ax, ay, Math.max(0, R * 0.42), 0, TAU); g.fillStyle = o.dot || COL.ink; g.fill();
    if (s4 > 0) {
      const tx = ax + dir * (len + 16), ty = ay - up, al = dir > 0 ? 'left' : 'right';
      g.save(); g.beginPath(); const wv = 1100 * eo(s4); if (dir > 0) g.rect(tx - 10, ty - 160, wv, 340); else g.rect(tx + 10 - wv, ty - 160, wv, 340); g.clip();
      if (o.num) { halo(g, o.num, tx, ty - 14, { size: o.ns || 120, w: 500, align: al, track: 1, color: o.numCol || COL.ink }); halo(g, o.title, tx, ty + 48, { size: 46, align: al, track: 4 }); }
      else halo(g, o.title, tx, ty + 16, { size: o.ts || 50, align: al, track: 4 });
      g.restore();
    }
    g.restore();
  }

  // legend card: pale plate with an ink border that draws first
  function card(g, x, y, w, h, a) {
    if (a <= 0) return; g.save(); const b = eo(clamp(a * 2));
    g.fillStyle = 'rgba(251,244,230,0.96)'; g.beginPath(); g.roundRect(x, y + (1 - b) * 8, w, h, 14); g.fill();
    g.setLineDash([(w + h) * 2 * b + 1, 9999]); g.strokeStyle = COL.ink; g.lineWidth = 3; g.stroke(); g.setLineDash([]);
    mini(g, x + 34, y + 30, 13, tri(COL.beak)); g.restore();
  }
  // ---------- Isotype icons ----------
  function mini(g, x, y, s, t3) { // tiny iso cube
    const c = C30 * s, h = s;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + c, y - h * 0.5); g.lineTo(x, y - h); g.lineTo(x - c, y - h * 0.5); g.closePath(); g.fillStyle = t3[0]; g.fill();
    g.beginPath(); g.moveTo(x - c, y - h * 0.5); g.lineTo(x, y); g.lineTo(x, y + h); g.lineTo(x - c, y + h * 0.5); g.closePath(); g.fillStyle = t3[1]; g.fill();
    g.beginPath(); g.moveTo(x + c, y - h * 0.5); g.lineTo(x, y); g.lineTo(x, y + h); g.lineTo(x + c, y + h * 0.5); g.closePath(); g.fillStyle = t3[2]; g.fill();
  }
  function flame(g, x, y, s, lit) {
    g.save(); g.translate(x, y); const c = lit ? tri(COL.heat) : ['#E2D7C3', '#D8CCB6', '#CBBEA6'];
    g.beginPath(); g.moveTo(0, -s * 0.55); g.bezierCurveTo(s * 0.42, -s * 0.15, s * 0.38, s * 0.42, 0, s * 0.45); g.bezierCurveTo(-s * 0.38, s * 0.42, -s * 0.42, -s * 0.15, 0, -s * 0.55); g.fillStyle = c[1]; g.fill();
    g.beginPath(); g.moveTo(0, -s * 0.55); g.bezierCurveTo(s * 0.42, -s * 0.15, s * 0.38, s * 0.42, 0, s * 0.45); g.closePath(); g.fillStyle = c[2]; g.fill();
    if (lit) { g.beginPath(); g.ellipse(0, s * 0.18, s * 0.13, s * 0.2, 0, 0, TAU); g.fillStyle = '#FFD3A0'; g.fill(); }
    g.restore();
  }
  function sun(g, x, y, s, lit) {
    g.save(); g.translate(x, y); const c = lit ? '#E4A93A' : '#D8CCB6'; g.strokeStyle = c; g.lineWidth = s * 0.09; g.lineCap = 'round';
    for (let i = 0; i < 8; i++) { const a = i / 8 * TAU; g.beginPath(); g.moveTo(Math.cos(a) * s * 0.36, Math.sin(a) * s * 0.36); g.lineTo(Math.cos(a) * s * 0.5, Math.sin(a) * s * 0.5); g.stroke(); }
    g.beginPath(); g.arc(0, 0, s * 0.26, 0, TAU); g.fillStyle = c; g.fill(); g.restore();
  }
  function flake(g, x, y, s, rot) {
    g.save(); g.translate(x, y); g.rotate(rot); g.strokeStyle = COL.cold; g.lineWidth = s * 0.1; g.lineCap = 'round';
    for (let i = 0; i < 3; i++) { g.rotate(Math.PI / 3); g.beginPath(); g.moveTo(-s / 2, 0); g.lineTo(s / 2, 0); g.stroke(); }
    g.restore();
  }
  function thermo(g, x, y, h, lvl, col, a) { // vertical thermometer, lvl 0..1
    if (a <= 0) return; g.save(); g.globalAlpha = a;
    g.fillStyle = COL.paper; g.strokeStyle = COL.ink; g.lineWidth = 3;
    g.beginPath(); g.roundRect(x - 18, y - h, 36, h, 18); g.fill(); g.stroke();
    g.beginPath(); g.arc(x, y + 14, 32, 0, TAU); g.fill(); g.stroke();
    g.fillStyle = col; g.beginPath(); g.arc(x, y + 14, 23, 0, TAU); g.fill();
    g.fillRect(x - 9, y - (h - 22) * lvl, 18, (h - 22) * lvl + 10);
    for (let i = 1; i < 5; i++) { g.beginPath(); g.moveTo(x + 18, y - h * i / 5); g.lineTo(x + 32, y - h * i / 5); g.stroke(); }
    g.restore();
  }

  // ---------- camera ----------
  // keys: [t, tx, ty, tz, k, screenY]
  const CAM = [
    [0, 0, 1, 12, 27, 900], [5.0, 0, 0, 12.5, 31, 860], [5.9, 0, 1, 12, 27, 880], [10.5, 0, 1, 12, 27, 880],
    [11.6, 0, -8.2, 18, 52, 820], [17.6, 0, -8.2, 18, 54, 800],
    [18.6, 0, -7.6, 17.6, 50, 840], [22.6, 0, -7.6, 17.6, 50, 840], [23.4, 0, -6.6, 16.8, 44, 820], [29.2, 0, -6.6, 16.8, 46, 820],
    [29.6, 0, -6.6, 16.8, 46, 820], [33.6, 0, -6.6, 16.8, 46, 820],
    [34.2, 0, -5, 15.5, 40, 820], [37.8, 0, -5, 15.5, 40, 820],
    [38.3, 0, -4, 15, 36, 780], [40.4, 0, -4, 15, 36, 780], [42.5, 0, 0, 11, 23, 820],
    [43.4, 0, -62, 5, 30, 1060], [DURATION, 0, -62, 5, 32, 1060],
  ];
  function camAt(t) {
    let i = 0; while (i < CAM.length - 2 && t > CAM[i + 1][0]) i++;
    const A = CAM[i], B = CAM[i + 1], s = eio(ph(t, A[0], B[0]));
    const k = Math.exp(lerp(Math.log(A[4]), Math.log(B[4]), s));
    const tx = lerp(A[1], B[1], s), ty = lerp(A[2], B[2], s), tz = lerp(A[3], B[3], s), sy = lerp(A[5], B[5], s);
    return { x: tx, y: ty, z: tz - (HH / 2 - sy) / k, k };
  }

  // heat waves rising off the beak (screen space)
  function heatWaves(g, iso, a, t, col = COL.heat) {
    if (a <= 0) return;
    g.save(); g.strokeStyle = col; g.lineCap = 'round'; g.lineWidth = Math.max(4, iso.cam.k * 0.16);
    for (let i = 0; i < 6; i++) {
      const u = 4.5 + i * 1.5, v = -6.6 + (u > 10 ? (u - 10) * 0.6 : 0) * 1.0, [x0, y0] = scr(iso, u, v);
      const ph0 = (t * 0.8 + i * 0.37) % 1, rise = ph0 * iso.cam.k * 5, al = a * Math.sin(ph0 * Math.PI);
      g.globalAlpha = al; g.beginPath();
      for (let j = 0; j <= 12; j++) { const yy = y0 - 10 - rise - j * iso.cam.k * 0.22, xx = x0 + Math.sin(j * 0.9 + t * 5 + i) * iso.cam.k * 0.22; j ? g.lineTo(xx, yy) : g.moveTo(xx, yy); }
      g.stroke();
    }
    g.restore();
  }

  // ---------- the frame ----------
  function explainer(ctx, Wc, Hc, t) {
    const g = ctx;
    g.save();
    g.fillStyle = COL.ground; g.fillRect(0, 0, W, HH);
    // faint isometric dot lattice
    g.fillStyle = 'rgba(46,37,34,0.10)';
    for (let y = 0; y < HH; y += 36) for (let x = (y / 36) % 2 ? 31 : 0; x < W; x += 62) g.fillRect(x, y, 3, 3);

    const iso = new Iso(g, W, HH); iso.cam = camAt(t);
    // focus + context: grey everything but the beak while we look at its insides and vessels
    iso.desat = 0.85 * ph(t, 18.0, 18.6) * (1 - ph(t, 37.9, 38.5));
    // board shadow
    { const [sx, sy] = iso.P(0, -1, -4); g.save(); g.filter = 'blur(26px)'; g.fillStyle = 'rgba(46,37,34,0.18)'; g.beginPath(); g.ellipse(sx, sy + 40, 34 * iso.cam.k * 0.95, 13 * iso.cam.k, 0, 0, TAU); g.fill(); g.restore(); }

    if (t < 43.6) {
      board(iso);
      const hot = ph(t, 24.0, 24.5) * (1 - ph(t, 33.85, 34.6));
      const chill = ph(t, 34.3, 36.4) * (1 - ph(t, 37.9, 38.5));
      const vessels = t > 21.3 && t < 38.2 ? ph(t, 21.3, 22.6) : 0;
      const cut = t > 11.0 && t < 18.0 ? ph(t, 11.1, 12.0) : 0;
      // the beak warms: orange shifts toward red while it dumps heat
      const beakCol = hex(mix(COL.beak, '#F25A2C', hot * 0.55));
      toucan(iso, { cut: t < 17.6 ? cut : 0, vessels, flow: hot > 0 ? t : 0, beakCol, vesselCol: hex(mix(COL.heat, '#8A9AB8', chill)) });
      iso.flush();
      // heat out (the hook flash, then the real thing)
      heatWaves(g, iso, ph(t, 2.1, 2.5) * (1 - ph(t, 4.6, 5.2)), t);
      heatWaves(g, iso, ph(t, 26.9, 27.5) * (1 - ph(t, 33.85, 34.6)), t);
      // cut line along the beak before the skin slides away
      if (t > 10.9 && t < 12.2) { const P = [[3.5, -4.7], [6, -4.9], [9, -4.6], [12.4, -3.7]].map((p) => scr(iso, p[0], p[1])); cutLine(g, P, ph(t, 10.95, 11.3)); }
      overlays(g, iso, t, { hot, chill });
    } else {
      board2(iso, t); iso.flush();
      overlaysEnd(g, iso, t);
    }
    g.restore();
  }

  function overlays(g, iso, t, s) {
    const k = iso.cam.k;
    // 1. hook
    { const [bx, by] = scr(iso, 9.5, -6.2); bigPin(g, bx, by, { title: 'RADIATOR', a: ph(t, 2.1, 2.9) * (1 - ph(t, 4.7, 5.1)), up: 190, dir: -1, len: 60, ts: 64 }); }
    headline(g, 'TOUCAN BEAK', ph(t, 0.4, 1.0), ph(t, 4.8, 5.2));
    // 2. length: a dimension line under the bird in three equal parts, the beak's part in orange
    { const a = ph(t, 5.9, 6.6) * (1 - ph(t, 10.5, 10.9)); if (a > 0) {
      const A = scr(iso, -14.8, -9.6, DEP), B = scr(iso, 13.2, -9.6, DEP), M = scr(iso, 3.4, -9.6, DEP);
      g.save(); g.globalAlpha = 1; g.strokeStyle = COL.ink; g.lineWidth = 3;
      const e = eo(a), Bx = lerp(A[0], B[0], e), By = lerp(A[1], B[1], e);
      g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(Bx, By); g.stroke();
      for (const p of [A, M, B]) { const f = Math.hypot(p[0] - A[0], p[1] - A[1]) / Math.hypot(B[0] - A[0], B[1] - A[1]); if (f <= e + 1e-3) { g.beginPath(); g.moveTo(p[0], p[1] - 16); g.lineTo(p[0], p[1] + 16); g.stroke(); } }
      const o = ph(t, 6.45, 6.9); if (o > 0) { g.strokeStyle = COL.beak; g.lineWidth = 14; g.lineCap = 'round'; g.beginPath(); g.moveTo(M[0], M[1]); g.lineTo(lerp(M[0], B[0], eo(o)), lerp(M[1], B[1], eo(o))); g.stroke(); }
      g.restore();
      const mid = [(M[0] + B[0]) / 2, (M[1] + B[1]) / 2]; bigPin(g, mid[0], mid[1], { num: '1/3', title: 'OF ITS LENGTH', a: ph(t, 6.45, 7.3), up: 70, dir: -1, len: 40 });
    } }
    // 3. weight: twenty blocks, one orange
    { const a = ph(t, 8.9, 9.2) * (1 - ph(t, 10.5, 10.9)); if (a > 0) {
      card(g, 50, 1380, 980, 230, a);
      const n = 20, m = ph(t, 8.9, 9.7) * n; g.save(); g.globalAlpha = 1;
      for (let i = 0; i < n; i++) { const c = i % 10, r = (i / 10) | 0, x = 130 + c * 50 + r * 25, y = 1470 + r * 48;
        if (i >= m) continue; const pop = back(clamp(m - i), 2.4); g.save(); g.translate(x, y); g.scale(pop, pop); mini(g, 0, 0, 22, i === 19 ? tri(COL.beak) : COL.body); g.restore(); }
      g.restore();
      halo(g, "1/20", 830, 1505, { size: 130, w: 500, track: 1 });
      halo(g, "OF ITS WEIGHT", 830, 1565, { size: 46, track: 4 });
    } }
    // 4. mostly air: inset of the foam
    headline(g, 'MOSTLY AIR', ph(t, 11.5, 12.0), ph(t, 17.5, 17.9));
    { const a = ph(t, 12.3, 13.1) * (1 - ph(t, 17.4, 17.9)); if (a > 0) {
      const [ax, ay] = scr(iso, 8, -4.9, DEP * 0.5); const cx = 540, cy = 1340, R = 250;
      inset(iso, ax, ay, cx, cy, R, a, (gg, x, y, r) => foamInset(gg, x, y, r, t));
      if (a >= 0.8) { bigPin(g, cx + 60, cy - 185, { title: 'KERATIN SHELL', a: ph(t, 13.3, 14.0), up: 110, dir: 1, len: 30, ts: 46 });
        bigPin(g, cx + 120, cy + 60, { title: 'BONE STRUTS', a: ph(t, 15.9, 16.6), up: -230, dir: 1, len: 20, ts: 46 }); }
    } }
    // 5. clever part: vessels
    headline(g, 'THE CLEVER PART', ph(t, 18.1, 18.7), ph(t, 22.7, 23.0));
    { const [vx, vy] = scr(iso, 7.8, -4.7); bigPin(g, vx, vy, { title: 'BLOOD VESSELS', a: ph(t, 21.5, 22.2) * (1 - ph(t, 22.7, 23.0)), up: -300, dir: -1, len: 30, ts: 50 }); }
    // 6. hot
    headline(g, 'HOT? DUMP HEAT', ph(t, 23.1, 23.7), ph(t, 29.2, 29.5));
    { const a = ph(t, 23.6, 24.1) * (1 - ph(t, 29.2, 29.5)); if (a > 0) {
      thermo(g, 140, 1580, 300, lerp(0.25, 0.85, eo(ph(t, 24.0, 25.0))), COL.heat, a);
      for (let i = 0; i < 3; i++) { const on = ph(t, 24.06 + i * 0.12, 24.3 + i * 0.12); g.save(); g.globalAlpha = a; sun(g, 260 + i * 90, 1340, 76 * (on > 0 ? back(on, 2.2) : 1), on > 0); g.restore(); }
      const [hx, hy] = scr(iso, 12, -4.4); bigPin(g, hx, hy, { title: 'HEAT OUT', a: ph(t, 27.2, 27.9), up: 330, dir: -1, len: 40, ts: 56 });
      const [wx, wy] = scr(iso, 3.6, -4.4); bigPin(g, wx, wy, { title: 'WARM BLOOD IN', a: ph(t, 25.2, 25.9), up: -420, dir: 1, len: 40, ts: 50 });
    } }
    // 7. heat camera: the thermal inset
    headline(g, 'HEAT CAMERA', ph(t, 29.55, 30.1), ph(t, 33.5, 33.85));
    { const a = ph(t, 29.9, 30.9) * (1 - ph(t, 33.45, 33.85)); if (a > 0) {
      const [ax, ay] = scr(iso, 2.4, -1.5); const cx = 540, cy = 1240, R = 340;
      inset(iso, ax, ay, cx, cy, R, a, (gg, x, y, r) => thermal(gg, x, y, r, t), { bg: '#120E26' });
      if (a > 0.8) { // temperature legend
        const lx = 860, ly = 1530; g.save(); g.fillStyle = 'rgba(251,244,230,0.96)'; g.beginPath(); g.roundRect(lx - 170, ly - 22, 340, 120, 12); g.fill(); g.strokeStyle = COL.ink; g.lineWidth = 2; g.stroke(); g.restore(); g.save(); const gr = g.createLinearGradient(lx, ly, lx + 160, ly); gr.addColorStop(0, '#2A2470'); gr.addColorStop(0.5, '#C2357A'); gr.addColorStop(0.8, '#F7A43A'); gr.addColorStop(1, '#FFF6C0');
        g.fillStyle = gr; g.fillRect(lx - 140, ly, 280, 26); g.strokeStyle = COL.ink; g.lineWidth = 2; g.strokeRect(lx - 140, ly, 280, 26); g.restore();
        halo(g, 'COOL', lx - 140, ly + 74, { size: 44, align: 'left', track: 2 }); halo(g, 'HOT', lx + 140, ly + 74, { size: 44, align: 'right', track: 2 });
      }
    } }
    // 8. chilly: flakes, valve, heat kept in
    headline(g, 'COLD? VALVE OFF', ph(t, 33.95, 34.5), ph(t, 37.8, 38.1));
    { const a = ph(t, 34.3, 34.8) * (1 - ph(t, 37.8, 38.1)); if (a > 0) {
      const R = H_rng(9); g.save(); g.globalAlpha = a;
      for (let i = 0; i < 16; i++) { const x = 80 + R() * 920, y0 = 380 + R() * 1250, y = 380 + ((y0 - 380 + (t - 34.3) * (60 + R() * 60)) % 1250); flake(g, x, y, 30 + R() * 20, t * 0.6 + i); }
      g.restore();
      thermo(g, 140, 1580, 300, lerp(0.7, 0.18, eo(ph(t, 34.4, 35.6))), COL.cold, a);
      // valve wheel at the beak's root turns shut on "off"
      const [vx, vy] = scr(iso, 3.6, -4.6, DEP + 0.05), turn = eo(ph(t, 35.6, 36.4)) * Math.PI * 1.5;
      g.save(); g.translate(vx, vy); g.rotate(turn); g.strokeStyle = COL.ink; g.lineWidth = 6; g.fillStyle = COL.paper;
      const vr = 34 * back(ph(t, 34.9, 35.3), 2); if (vr > 0) { g.beginPath(); g.arc(0, 0, vr, 0, TAU); g.fill(); g.stroke(); for (let i = 0; i < 4; i++) { g.rotate(Math.PI / 2); g.beginPath(); g.moveTo(0, 0); g.lineTo(vr, 0); g.stroke(); } }
      g.restore();
      bigPin(g, vx, vy + 30, { title: 'FLOW OFF', a: ph(t, 36.2, 36.8), up: -200, dir: 1, len: 30, ts: 54 });
      // heat kept inside the body: a warm ring
      const kp = ph(t, 37.0, 37.5); if (kp > 0) { const [bx, by] = scr(iso, -3.5, 0.5, DEP); ring(g, bx, by, 4.6 * iso.cam.k, kp, t, null, { color: COL.heat, lw: 5 });
        bigPin(g, bx - 3.2 * iso.cam.k, by + 2.6 * iso.cam.k, { title: 'HEAT KEPT IN', a: kp, up: -150, dir: 1, len: 40, ts: 50, fade: 1 }); }
    } }
    // 9. short bursts: almost all heat loss leaves through the beak
    headline(g, 'SHORT BURSTS', ph(t, 38.0, 38.5), ph(t, 42.3, 42.7));
    { const a = ph(t, 39.2, 39.5) * (1 - ph(t, 42.3, 42.7)); if (a > 0) {
      card(g, 60, 1345, 960, 310, a);
      const n = 10, m = 1 + ph(t, 39.4, 40.3) * 8.6; g.save(); g.globalAlpha = a;
      for (let i = 0; i < n; i++) { const x = 120 + i * 93, y = 1420, on = i < m; const pop = on ? back(clamp(m - i), 2.4) : 1; g.save(); g.translate(x, y); g.scale(pop, pop); flame(g, 0, 0, 78, on); g.restore(); }
      g.restore();
      halo(g, 'ALMOST ALL', 540, 1560, { size: 110, w: 600, track: 4 });
      halo(g, 'ITS HEAT LOSS, VIA THE BEAK', 540, 1625, { size: 44, track: 3 });
      // stopwatch
      const sw = ph(t, 38.0, 38.4); if (sw > 0 && t < 42.3) { const x = 920, y = 470, r = 56 * back(sw, 2); g.save(); g.strokeStyle = COL.ink; g.fillStyle = COL.paper; g.lineWidth = 5;
        g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); g.stroke(); g.fillRect(x - 10, y - r - 18, 20, 14); g.strokeRect(x - 10, y - r - 18, 20, 14);
        const ang = -Math.PI / 2 + (t - 38) * 3; g.strokeStyle = COL.heat; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(ang) * r * 0.8, y + Math.sin(ang) * r * 0.8); g.stroke(); g.restore(); }
    } }
    // 10. scale reveal: whole board with its legend
    { const a = ph(t, 41.6, 42.2) * (1 - ph(t, 43.0, 43.4)); if (a > 0) { const [bx, by] = scr(iso, 8, -6.4); bigPin(g, bx, by, { title: 'RADIATOR', a, up: 160, dir: -1, len: 50, ts: 56 }); } }
  }
  function overlaysEnd(g, iso, t) {
    headline(g, 'TRADE YOUR NOSE', ph(t, 43.4, 44.0), 0, 290);
    { const [rx, ry] = iso.P(0, -62, 9.5); bigPin(g, rx, ry - 20, { title: 'A RADIATOR?', a: ph(t, 45.4, 46.2), up: 180, dir: -1, len: 40, ts: 64 }); }
    // a big extruded question mark on the plate
    const q = ph(t, 44.6, 45.1); if (q > 0) halo(g, '?', 820, 1240 + (1 - back(q, 2)) * 80, { size: 300, w: 600, track: 0, color: COL.beak });
    card(g, 290, 1555, 500, 90, 1); halo(g, 'TELL ME BELOW', 555, 1620, { size: 54, track: 6, color: COL.ink, haloCol: 'rgba(242,230,208,.95)' });
  }

  // magnified foam: keratin sheets over a lattice of bone struts with air between
  let foamCache = null;
  function foamInset(g, x, y, r, t) {
    if (!foamCache) {
      const c = document.createElement('canvas'); c.width = 600; c.height = 600; const q = c.getContext('2d'), R = H_rng(77);
      q.fillStyle = '#FBF4E6'; q.fillRect(0, 0, 600, 600);
      // air cells (pale) separated by bone struts
      const pts = []; for (let i = 0; i < 46; i++) pts.push([R() * 600, 180 + R() * 420]);
      q.strokeStyle = '#B8AE9C'; q.lineWidth = 9; q.lineCap = 'round';
      for (let i = 0; i < pts.length; i++) { const d = pts.map((p, j) => [Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), j]).sort((a, b) => a[0] - b[0]);
        for (let m = 1; m <= 3; m++) { const p = pts[d[m][1]]; q.beginPath(); q.moveTo(pts[i][0], pts[i][1]); q.lineTo(p[0], p[1]); q.stroke(); } }
      q.fillStyle = '#948E83'; pts.forEach((p) => { q.beginPath(); q.arc(p[0], p[1], 10, 0, TAU); q.fill(); });
      // stacked keratin sheets on top
      const sh = tri(COL.beak); for (let i = 0; i < 6; i++) { q.fillStyle = i % 2 ? sh[0] : sh[1]; q.fillRect(0, 20 + i * 24, 600, 24); }
      q.fillStyle = sh[2]; q.fillRect(0, 164, 600, 10);
      foamCache = c;
    }
    g.drawImage(foamCache, x - r, y - r, 2 * r, 2 * r);
  }
  // the heat-camera view of the bird: same drawing, thermal colours; the beak lights up
  function thermal(g, x, y, r, t) {
    g.fillStyle = '#120E26'; g.fillRect(x - r, y - r, 2 * r, 2 * r);
    const iso = new Iso(g, W, HH); const k = 21; iso.cam = { x: 0, y: -2.5, z: 13 - (HH / 2 - y) / k, k };
    // shift so the bird is centred in the disc
    g.save(); g.translate(x - W / 2, 0);
    const heat = eo(ph(t, 31.9, 32.9));
    const beakCol = hex(mix('#3A3A9A', '#FFE27A', heat)), top = hex(mix('#4848B0', '#FFF6C0', heat)), dark = hex(mix('#2A2470', '#F7A43A', heat));
    toucan(iso, { bodyT: ['#7A3A9A', '#5E2E86', '#43206A'], bodyFace: '#C2357A', bibCol: '#E2558A', eyeCol: '#F7A43A', beakCol, beakTop: top, beakDark: dark, plain: true, keepBeak: false });
    iso.cyl(1.8, -6, 6.9, 0.8, 21, ['#3A2E7A', '#2E2468', '#221A52'], { axis: 'y', n: 12, bias: -6 });
    iso.flush(); g.restore();
    // glow around the hot beak
    if (heat > 0) { g.save(); g.globalCompositeOperation = 'lighter'; const [bx, by] = (() => { const p = iso.P(...P3(8, -4.8, DEP)); return [p[0] + x - W / 2, p[1]]; })();
      const gr = g.createRadialGradient(bx, by, 10, bx, by, 190); gr.addColorStop(0, `rgba(255,220,120,${0.45 * heat})`); gr.addColorStop(1, 'rgba(255,120,60,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r); g.restore(); }
    // viewfinder furniture
    g.save(); g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = 4; const c = r * 0.62, l = 40;
    for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { g.beginPath(); g.moveTo(x + sx * c, y + sy * c - sy * l); g.lineTo(x + sx * c, y + sy * c); g.lineTo(x + sx * c - sx * l, y + sy * c); g.stroke(); }
    g.fillStyle = (t * 2) % 1 < 0.6 ? '#FF4A3A' : 'rgba(255,74,58,0.25)'; g.beginPath(); g.arc(x - c + 14, y - c + 70, 10, 0, TAU); g.fill();
    g.font = '600 44px "Jost"'; g.fillStyle = '#FFFFFF'; g.letterSpacing = '4px'; g.fillText('IR', x - c + 34, y - c + 86);
    g.restore();
  }

  function scoreSound(k) {
    // hook
    k.play('pop', 0.9, { gain: 0.5 }); k.play('ding', 2.19, { f: 'E6', gain: 0.35 }); k.play('swish', 2.1, { dur: 0.5, gain: 0.3, minor: true });
    k.play('whoosh', 5.1, { dur: 0.7, gain: 0.3, minor: true });
    // length bar, weight blocks
    k.play('stroke', 5.95, { material: 'pencil', dur: 0.6, gain: 0.4, minor: true }); k.play('tock', 6.49, { f: 700, gain: 0.5 });
    for (let i = 0; i < 20; i++) k.play('tick', 8.9 + i * 0.04, { f: 2600 + i * 40, gain: 0.25, minor: true });
    k.play('ding', 9.16, { f: 'A6', gain: 0.3 });
    // cutaway
    k.play('paper', 10.95, { dur: 0.4, gain: 0.45 }); k.play('swish', 11.3, { dur: 0.4, gain: 0.35 }); k.play('blip', 11.81, { gain: 0.3 });
    k.play('pop', 12.6, { gain: 0.4 }); k.play('tock', 13.4, { f: 900, gain: 0.4 }); k.play('tock', 15.96, { f: 600, gain: 0.4 });
    // clever part, vessels grow
    k.play('riser', 18.0, { dur: 0.7, gain: 0.25 }); k.tone(21.3, { f: [[0, 220], [1.2, 330]], dur: 1.3, gain: 0.05, minor: true }); k.play('blip', 21.59, { gain: 0.3 });
    // hot
    for (let i = 0; i < 3; i++) k.play('pop', 24.06 + i * 0.12, { gain: 0.35 });
    k.play('swish', 25.3, { dur: 0.8, gain: 0.3, minor: true }); k.play('whoosh', 27.26, { dur: 1.2, gain: 0.35 });
    // heat camera
    k.play('shutter', 30.9, { gain: 0.45 }); k.play('boot', 31.2, { gain: 0.2, minor: true }); k.play('sparkle', 32.8, { n: 4, gain: 0.3 });
    // chilly
    k.play('whoosh', 33.9, { dur: 0.7, gain: 0.3, minor: true }); for (let i = 0; i < 4; i++) k.play('tick', 35.6 + i * 0.18, { f: 1400 - i * 120, gain: 0.4 });
    k.play('click', 36.3, { f: 1600, gain: 0.8 }); k.play('thud', 36.32, { gain: 0.35 }); k.play('ding', 37.14, { f: 'C6', gain: 0.25 });
    // short bursts
    for (let i = 0; i < 6; i++) k.play('tick', 38.0 + i * 0.25, { f: 3000, gain: 0.25, minor: true });
    for (let i = 0; i < 9; i++) k.play('pop', 39.4 + i * 0.1, { gain: 0.25 });
    k.play('whoosh', 42.5, { dur: 0.9, gain: 0.35 });
    // ending
    k.play('stamp', 43.4, { gain: 0.35 }); k.play('pop', 44.6, { gain: 0.4 });
    for (let i = 0; i < 7; i++) k.play('tock', 45.4 + i * 0.09, { f: 500 + i * 60, gain: 0.35 });
    k.play('ding', 46.1, { f: 'E6', gain: 0.3 });
  }
  function thumbnail(ctx, Wc, Hc) { explainer(ctx, Wc, Hc, 28.2); }
  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
