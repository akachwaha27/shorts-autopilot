// ===== Isometric Picture Book (Lemo-Opuscar), vertical: "Why do some sharks drown if they stop swimming?" =====
// One real place, full bleed: an aquarium hall with a big cut-away ring tank and a shallow rest tank.
// Visitors seen from behind are the scale; serif words land on the floor; the accent marks only the water flow (the rule).
// Engine: Lemo-Opuscar isometric-picture-book kit.js + engine.js (MIT), bundled as window.LEMO.
(function () {
  const L = window.LEMO, iso = L.iso, tri = L.tri, C = L.C, mix = L.mix, hex = L.hex, css = L.css;
  const { clamp, lerp, seg, ss, eo, eio, onPlane, fillPoly, drawPerson, TOPS, LEGS } = L;
  const W = 1080, HH = 1920, TAU = Math.PI * 2;
  iso.W = W; iso.H = HH;

  // ---------- narration timing (phrases.json) ----------
  const BEATS = [
    { s: 0.25, e: 2.79, text: 'This shark drowns if you make it stop swimming.' },
    { s: 3.16, e: 4.66, text: 'Wait, a fish that drowns?' },
    { s: 5.13, e: 7.09, text: 'Sharks pull oxygen out of water' },
    { s: 7.32, e: 9.08, text: 'as it flows over their gills.' },
    { s: 9.43, e: 11.89, text: 'A nurse shark can lie still on the sea floor' },
    { s: 11.96, e: 13.81, text: 'and pump water in with its cheeks.' },
    { s: 14.16, e: 15.84, text: "But a great white can't do that." },
    { s: 16.26, e: 18.48, text: 'Neither can makos or whale sharks.' },
    { s: 18.93, e: 20.69, text: 'They use ram ventilation.' },
    { s: 20.96, e: 23.15, text: 'They swim with their mouths slightly open' },
    { s: 23.55, e: 25.68, text: 'so water gets pushed over their gills.' },
    { s: 26.06, e: 28.12, text: 'Stop swimming, and the water stops.' },
    { s: 28.58, e: 30.27, text: 'No water, no oxygen.' },
    { s: 30.61, e: 32.06, text: "So even while it's resting," },
    { s: 32.62, e: 33.72, text: 'a great white keeps cruising' },
    { s: 33.8, e: 36.19, text: 'at about two kilometers an hour.' },
    { s: 36.56, e: 37.98, text: "That's slower than you walk!" },
    { s: 38.43, e: 40.31, text: 'Most sharks can take a break, though.' },
    { s: 40.7, e: 42.45, text: 'So which shark would you rather be?' },
    { s: 42.9, e: 44.57, text: 'The one that naps on the sand,' },
    { s: 44.95, e: 46.47, text: 'or the one that can never stop?' },
  ];
  const DURATION = 47.5;
  // word times used for landings
  const WT = { drowns: 0.85, fish: 3.56, oxygen: 5.89, flows: 7.63, gills: 8.7, still: 10.62, pump: 12.16, cheeks: 13.4,
    cant: 15.14, makos: 17.05, whale: 17.61, ram: 19.52, mouths: 22.03, open: 22.9, pushed: 24.31, stop: 26.06, stops: 27.75,
    noOx: 29.37, resting: 31.58, cruising: 33.36, two: 34.45, slower: 36.88, walk: 37.72, most: 38.43, brk: 39.6,
    which: 40.82, naps: 43.63, never: 45.9 };
  // scene cuts (shot starts)
  const SC = [0, 5.13, 9.43, 14.16, 18.93, 26.06, 30.61, 38.43, 40.7, DURATION];

  // ---------- palette (STYLE §3: paper ground, one ink, one accent for the rule, subject teal, marking ginger) ----------
  const P = {
    floor: '#F1E8D8', tile: '#E7DCC8', walk: '#EDE2CF', ginger: C.ginger, ink: C.ink, accent: C.accent, accentLt: C.accentLt,
    teal: '#2F6A6C', tealLt: '#9DBFB9', water: '#B9D4CE', waterDeep: '#A3C6C1', sand: '#DCD8BF', sandDot: '#CFC9AC',
    white: '#7D8A92', belly: '#F2EDE3', mako: '#4E6A8E', whale: '#56636F', spot: '#E6E0D2', nurse: '#B48858', gill: '#3B3F3D',
  };
  const T3 = (c) => tri(c);

  // ---------- world ----------
  // big tank: x 0..14, y -4..14 (near walls at x=14 and y=14 cut to a parapet). Rest tank: x 2..10, y -18..-9.
  const BIG = { x0: 0, x1: 14, y0: -4, y1: 14, far: 2.2, near: 0.95 };
  const REST = { x0: 1.5, x1: 10, y0: -18, y1: -9.5, far: 1.4, near: 0.75 };
  // the ring lane: a stadium; near straight x=10.2 heading -y (y 10.8 -> -0.8), far straight x=3.8 heading +y
  const R = 3.2, CX = 7, YA = -0.8, YB = 10.8, LS = YB - YA, LAP = 2 * LS + TAU * R;
  function lane(s, xo = 0) { // -> {x, y, h(eading)}
    s = ((s % LAP) + LAP) % LAP;
    if (s < LS) return { x: CX + R + xo, y: YB - s, h: -Math.PI / 2 };
    s -= LS;
    if (s < Math.PI * R) { const a = s / R; return { x: CX + Math.cos(a) * (R + xo), y: YA - Math.sin(a) * (R + xo), h: -Math.PI / 2 - a }; }
    s -= Math.PI * R;
    if (s < LS) return { x: CX - R - xo, y: YA + s, h: Math.PI / 2 };
    s -= LS; const a = s / R;
    return { x: CX - Math.cos(a) * (R + xo), y: YB + Math.sin(a) * (R + xo), h: Math.PI / 2 - a };
  }
  // the great white's distance along the lane, per shot (a cut may move it; within a shot it is continuous)
  function whiteS(t) {
    if (t < SC[2]) return -3 + 0.8 * t;
    if (t < SC[4]) return 9 + 0.9 * (t - SC[2]);
    if (t < SC[6]) { // far straight close-up: cruise, then glide to a stop at ~27.3 s and hang there
      const tStop = 27.3, tA = SC[5] + 0.15, v = 0.9;
      if (t < tA) return 19.4 + v * (t - SC[4]);
      const sA = 19.4 + v * (tA - SC[4]), d = tStop - tA;
      if (t < tStop) { const u = (t - tA) / d; return sA + v * d * (u - u * u / 2); }
      return sA + v * d / 2;
    }
    if (t < SC[7]) return 0.4 + 0.58 * (t - SC[6]);
    return 8 + 0.8 * (t - SC[7]);
  }
  function whiteSpeed(t) { const d = 0.02; return (whiteS(t + d) - whiteS(t - d)) / (2 * d); }

  // ---------- shark model: lofted faceted body, fins, gills, mouth ----------
  // sections [u, half-width, half-height, z offset] in metres for a 4.5 m body (scaled by spec.L)
  const BODY = {
    white: [[0, .05, .07, .05], [.14, .1, .15, .02], [.38, .28, .31, 0], [.6, .33, .35, 0], [.78, .29, .28, -.02], [.9, .19, .18, -.04], [.975, .08, .08, -.05], [1, .02, .03, -.05]],
    mako: [[0, .04, .06, .04], [.14, .08, .12, .02], [.4, .2, .22, 0], [.62, .22, .23, 0], [.8, .18, .17, -.02], [.93, .09, .09, -.03], [1, .015, .02, -.03]],
    whale: [[0, .05, .08, .05], [.14, .12, .17, .03], [.4, .36, .34, 0], [.62, .42, .35, 0], [.82, .44, .3, -.02], [.95, .42, .2, -.03], [1, .36, .12, -.03]],
    nurse: [[0, .04, .05, .02], [.16, .08, .09, .02], [.42, .22, .17, 0], [.64, .26, .17, 0], [.84, .25, .14, -.01], [.96, .2, .09, -.02], [1, .15, .05, -.02]],
  };
  const SPEC = {
    white: { body: BODY.white, len: 4.5, col: P.white, belly: P.belly, dorsal: [.5, .62, .52, .62], tail: 1, pect: .78 },
    mako: { body: BODY.mako, len: 3.2, col: P.mako, belly: P.belly, dorsal: [.52, .62, .54, .5], tail: 1, pect: .62 },
    whale: { body: BODY.whale, len: 5.6, col: P.whale, belly: '#E9E4D8', dorsal: [.48, .62, .5, .5], tail: 1.1, pect: .8, spots: true },
    nurse: { body: BODY.nurse, len: 2.7, col: P.nurse, belly: '#E4CFAE', dorsal: [.36, .46, .4, .32], tail: .55, pect: .7, flat: true, dorsal2: true },
  };
  const NS = 8; // facets around
  function sharkGeom(sp, t, o) {
    const Ls = sp.len / 4.5, Lm = sp.len, amp = (o.amp ?? 1) * 0.16 * Ls, ph = o.phase || 0;
    const wave = (u) => amp * Math.sin(ph - u * 4.2) * Math.pow(1 - u, 1.6);
    const cheek = o.cheek || 0;
    const rings = sp.body.map(([u, hw, hh, zo]) => {
      const x = (u - 0.5) * Lm, yc = wave(u), cw = (u > .75 && u < .97) ? 1 + cheek * Math.sin(Math.PI * (u - .75) / .22) : 1;
      const pts = [];
      for (let i = 0; i < NS; i++) { const a = (i + .5) / NS * TAU; pts.push([x, yc + Math.cos(a) * hw * Ls * cw, zo * Ls + Math.sin(a) * hh * Ls]); }
      return { u, x, yc, hw: hw * Ls * cw, hh: hh * Ls, zo: zo * Ls, pts };
    });
    return { rings, wave, Ls, Lm };
  }
  function at(rings, u) { // interpolated section at u
    for (let i = 1; i < rings.length; i++) if (u <= rings[i].u) { const a = rings[i - 1], b = rings[i], f = (u - a.u) / (b.u - a.u); return { x: lerp(a.x, b.x, f), yc: lerp(a.yc, b.yc, f), hw: lerp(a.hw, b.hw, f), hh: lerp(a.hh, b.hh, f), zo: lerp(a.zo, b.zo, f) }; }
    return rings[rings.length - 1];
  }
  // queue a shark at world (x, y, z) heading h. o: {phase, amp, cheek, mouth (0..1), gills (bool emphasis)}
  function shark(kind, x, y, z, h, t, o = {}) {
    const sp = SPEC[kind];
    iso.add(x + y + z + (o.bias || 0), () => drawShark(sp, x, y, z, h, t, o));
  }
  function drawShark(sp, x, y, z, h, t, o) {
    const g = iso.g, G = sharkGeom(sp, t, o), rings = G.rings, top = T3(sp.col), bel = T3(sp.belly);
    iso.push(x, y, z, h, 1);
    const faces = [];
    const add = (pts, t3, opt = {}) => { let cx = 0, cy = 0, cz = 0; pts.forEach(p => { cx += p[0]; cy += p[1]; cz += p[2]; }); const w = iso.w(cx / pts.length, cy / pts.length, cz / pts.length); faces.push({ d: w[0] + w[1] + w[2] + (opt.bias || 0), pts, t3, opt }); };
    // body
    for (let r = 1; r < rings.length; r++) {
      const A = rings[r - 1], B = rings[r];
      for (let i = 0; i < NS; i++) {
        const j = (i + 1) % NS, q = [A.pts[i], B.pts[i], B.pts[j], A.pts[j]];
        const zc = (A.pts[i][2] + A.pts[j][2]) / 2 - A.zo;
        add(q, zc < -A.hh * 0.25 ? bel : top, { out: [0, Math.cos((i + 1) / NS * TAU), Math.sin((i + 1) / NS * TAU)] });
      }
    }
    // nose cap
    const nr = rings[rings.length - 1]; add(nr.pts.slice().reverse(), top, { out: [1, 0, 0] });
    const Ls = G.Ls, wave = G.wave;
    // dorsal fin
    const [d0, d1, dA, dH] = sp.dorsal, s0 = at(rings, d0), s1 = at(rings, d1), sa = at(rings, dA);
    add([[s0.x, s0.yc, s0.zo + s0.hh * .95], [s1.x, s1.yc, s1.zo + s1.hh * .95], [lerp(sa.x, s0.x, .8) - .35 * Ls, sa.yc, sa.zo + sa.hh + dH * 1.4 * Ls]], top, { both: true, bias: .05 });
    if (sp.dorsal2) { const a = at(rings, .2), b = at(rings, .28); add([[a.x, a.yc, a.zo + a.hh], [b.x, b.yc, b.zo + b.hh], [a.x - .1, a.yc, a.zo + a.hh + .3 * Ls]], top, { both: true, bias: .05 }); }
    // tail (caudal fin) at u=0, following the wave
    const tl = rings[0], tk = sp.tail * Ls;
    add([[tl.x + .15 * Ls, tl.yc, tl.zo], [tl.x - .55 * tk, wave(0) * 1.3, tl.zo + .95 * tk], [tl.x - .2 * tk, wave(0) * 1.15, tl.zo + .1 * tk]], top, { both: true, bias: .02 });
    add([[tl.x + .12 * Ls, tl.yc, tl.zo], [tl.x - .2 * tk, wave(0) * 1.15, tl.zo + .1 * tk], [tl.x - .35 * tk, wave(0) * 1.2, tl.zo - (sp.flat ? .15 : .55) * tk]], top, { both: true, bias: .02 });
    // pectoral fins (flat, swept back and down)
    const pc = at(rings, sp.pect), pb = at(rings, sp.pect - .12);
    for (const sd of [1, -1]) {
      add([[pc.x, pc.yc + sd * pc.hw * .8, pc.zo - pc.hh * .45], [pb.x, pb.yc + sd * pb.hw * .85, pb.zo - pb.hh * .45], [pb.x - .45 * Ls, pb.yc + sd * (pb.hw + .85 * Ls), pb.zo - pb.hh * .6 - .35 * Ls]], top, { both: true, bias: sd > 0 ? .3 : -.3 });
    }
    faces.sort((a, b) => a.d - b.d);
    for (const f of faces) iso.face3(f.pts, f.t3, f.opt);
    // surface marks: spots, gills, eye, mouth (drawn in screen space on the visible side)
    const side = sideVisible(h); // +1: local +y side faces camera
    const surf = (u, ang, k = 1.0) => { const s = at(rings, u); return iso.L(s.x, s.yc + side * Math.cos(ang) * s.hw * k, s.zo + Math.sin(ang) * s.hh * k); };
    const kpx = iso.cam.k;
    if (sp.spots) { g.fillStyle = iso.col(P.spot, .9); for (let i = 0; i < 26; i++) { const u = .2 + (i * .61803 % 1) * .62, a = .15 + ((i * .4142) % 1) * 1.25; const p = surf(u, a); g.beginPath(); g.arc(p[0], p[1], .05 * Ls * kpx, 0, TAU); g.fill(); } }
    // gill slits
    const nG = 5, gu0 = sp === SPEC.whale ? .8 : .7, gu1 = gu0 + .1;
    g.save(); g.lineCap = 'round';
    for (let i = 0; i < nG; i++) {
      const u = lerp(gu0, gu1, i / (nG - 1)), a = surf(u, .45), b = surf(u - .012, -.45);
      g.strokeStyle = o.gillHi ? css(mix(P.gill, P.accent, o.gillHi)) : iso.col(P.gill, .8); g.lineWidth = Math.max(1.5, .035 * Ls * kpx * (1 + (o.gillHi || 0) * .6));
      g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke();
    }
    // eye (a dark dot; sharks may have eyes, people may not)
    if (kind(sp) !== 'whale') { const e = surf(.9, .5, .92); g.fillStyle = iso.col('#1E201F'); g.beginPath(); g.arc(e[0], e[1], Math.max(1.5, .028 * Ls * kpx), 0, TAU); g.fill(); }
    // mouth: a dark wedge under the snout, opening by o.mouth
    const m = o.mouth ?? .35, mu0 = sp === SPEC.whale ? .99 : .86, mu1 = .985;
    const ms0 = at(rings, mu0), ms1 = at(rings, mu1);
    const mp = [iso.L(ms0.x, ms0.yc + side * ms0.hw * .7, ms0.zo - ms0.hh * .55), iso.L(ms1.x + (sp === SPEC.whale ? .02 : 0), ms1.yc, ms1.zo - ms1.hh * .3), iso.L(ms0.x + .03, ms0.yc + side * ms0.hw * .5, ms0.zo - ms0.hh * (.55 + .5 * m))];
    if (sp === SPEC.whale) { const a0 = at(rings, .97); mp[0] = iso.L(a0.x, a0.yc + side * a0.hw * .95, a0.zo - a0.hh * .25); mp[2] = iso.L(a0.x, a0.yc + side * a0.hw * .9, a0.zo - a0.hh * (.35 + .4 * m)); }
    fillPoly(g, mp, iso.col('#4A2F2B'));
    iso.pop();
  }
  const kind = (sp) => Object.keys(SPEC).find(k => SPEC[k] === sp);
  function sideVisible(h) { // camera looks toward -x-y; local +y in world = (-sin h, cos h); visible if it points toward +x+y
    return (-Math.sin(h) + Math.cos(h)) >= 0 ? 1 : -1;
  }
  // flow streaks (the rule, in accent): water in at the mouth, out at the gills. Local shark coords.
  function flow(kind, x, y, z, h, t, a, o = {}) {
    if (a <= 0) return;
    const sp = SPEC[kind], Ls = sp.len / 4.5, Lm = sp.len, g = iso.g, side = sideVisible(h);
    const rel = o.rel ?? 1; // flow speed factor
    const k = iso.cam.k;
    iso.push(x, y, z, h, 1);
    g.save(); g.lineCap = 'round';
    const N = o.n || 6;
    for (let i = 0; i < N; i++) {
      const f = (i + .5) / N, yo = (f - .5) * .9 * Ls, zo = (((i * 7) % N) / N - .5) * .5 * Ls;
      // inflow: from 1.6 m ahead of the snout into the mouth
      const mouth = [(.36) * Lm, 0, -.14 * Ls];
      const start = [(.5) * Lm + 1.6 * Ls, yo * 1.6, zo * 1.4 - .05];
      // outflow: from the gill slits on the camera side out and back
      const gx = (.25) * Lm, gA = [gx, side * .3 * Ls, -.02 * Ls + zo * .2], gB = [gx - 1.4 * Ls, side * (.75 + f * .5) * Ls, zo * .5 - .1];
      for (const [p0, p1, off] of [[start, mouth, 0], [gA, gB, .5]]) {
        for (let dsh = 0; dsh < 2; dsh++) {
          let u = ((t * .9 * rel + f * 1.37 + dsh * .5 + off) % 1 + 1) % 1;
          const u2 = Math.min(1, u + .22);
          const fade = Math.sin(Math.PI * u) * a;
          const A = iso.L(lerp(p0[0], p1[0], u), lerp(p0[1], p1[1], u), lerp(p0[2], p1[2], u));
          const B = iso.L(lerp(p0[0], p1[0], u2), lerp(p0[1], p1[1], u2), lerp(p0[2], p1[2], u2));
          g.strokeStyle = css(mix(P.accentLt, o.grey ? '#9A9488' : P.accent, .75), fade);
          g.lineWidth = Math.max(2, .06 * Ls * k);
          g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(B[0], B[1]); g.stroke();
        }
      }
    }
    g.restore();
    iso.pop();
  }

  // ---------- ground, tanks, floor type ----------
  function ground(g) {
    g.fillStyle = P.floor; g.fillRect(0, 0, W, HH);
    // faint 2 m tile grid across the visible floor
    const c = iso.cam, span = 3000 / c.k;
    const [x0, y0] = iso.unP(0, 0, 0), [x1, y1] = iso.unP(W, HH, 0), [x2, y2] = iso.unP(0, HH, 0), [x3, y3] = iso.unP(W, 0, 0);
    const xmin = Math.floor(Math.min(x0, x1, x2, x3) / 2) * 2, xmax = Math.max(x0, x1, x2, x3), ymin = Math.floor(Math.min(y0, y1, y2, y3) / 2) * 2, ymax = Math.max(y0, y1, y2, y3);
    g.strokeStyle = P.tile; g.lineWidth = Math.max(1, c.k * .025);
    g.beginPath();
    for (let x = xmin; x <= xmax; x += 2) { const a = iso.P(x, ymin, 0), b = iso.P(x, ymax, 0); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); }
    for (let y = ymin; y <= ymax; y += 2) { const a = iso.P(xmin, y, 0), b = iso.P(xmax, y, 0); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); }
    g.stroke();
    // ginger lead-in line along the viewing walkway, a stop bar in front of each tank
    g.strokeStyle = P.ginger; g.lineWidth = .1 * c.k;
    g.beginPath(); let a = iso.P(15.4, -22, 0), b = iso.P(15.4, 20, 0); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]);
    a = iso.P(11.2, -19, 0); b = iso.P(11.2, -8.5, 0); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke();
  }
  function tankFloor(g, T, seed) {
    fillPoly(g, L.quad(L.rect(T.x0, T.x1, T.y0, T.y1), 0), P.sand);
    const r = H.rng(seed); g.fillStyle = P.sandDot;
    for (let i = 0; i < 90; i++) { const p = iso.P(lerp(T.x0 + .3, T.x1 - .3, r()), lerp(T.y0 + .3, T.y1 - .3, r()), 0); g.beginPath(); g.ellipse(p[0], p[1], .09 * iso.cam.k, .05 * iso.cam.k, 0, 0, TAU); g.fill(); }
    // a few flat rocks (faceted, flat-toned) along the far walls
    for (let i = 0; i < 5; i++) { const x = T.x0 + .6 + r() * 1.2, y = lerp(T.y0 + 1, T.y1 - 1, (i + r() * .5) / 5); iso.prismNow([[x, y], [x + .7, y + .1], [x + .6, y + .6], [x + .1, y + .55]], 0, .25 + r() * .2, T3('#B9AE95')); }
  }
  // far walls (inner faces in water colour, water line), drawn before the inside
  function farWalls(T) {
    const wt = .35, hf = T.far, wl = hf - .25;
    const wallT = T3(P.tealLt);
    // x-far wall (face looks +x)
    iso.boxNow(T.x0 - wt, T.y0 - wt, 0, wt, T.y1 - T.y0 + wt, hf, wallT, { faceColor: [hex(mix(P.teal, '#FFF8EA', .12)), null, P.waterDeep, null, null] });
    iso.boxNow(T.x0 - wt, T.y0 - wt, 0, T.x1 - T.x0 + wt, wt, hf, wallT, { faceColor: [hex(mix(P.teal, '#FFF8EA', .12)), P.water, null, null, null] });
    // water line on the inner faces
    const g = iso.g; g.strokeStyle = css(mix(P.water, '#FFFFFF', .5)); g.lineWidth = Math.max(1.5, .05 * iso.cam.k);
    g.beginPath(); let a = iso.P(T.x0, T.y1, wl), b = iso.P(T.x0, T.y0, wl), c = iso.P(T.x1, T.y0, wl); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.lineTo(c[0], c[1]); g.stroke();
    // a paler band above the water line
    fillPoly(g, [iso.P(T.x0, T.y1, wl), iso.P(T.x0, T.y0, wl), iso.P(T.x0, T.y0, hf), iso.P(T.x0, T.y1, hf)], hex(mix(P.waterDeep, '#FFF8EA', .45)));
    fillPoly(g, [iso.P(T.x0, T.y0, wl), iso.P(T.x1, T.y0, wl), iso.P(T.x1, T.y0, hf), iso.P(T.x0, T.y0, hf)], hex(mix(P.water, '#FFF8EA', .45)));
  }
  // near walls cut to a parapet: glass with water inside, teal rim
  function nearWalls(T) {
    const wt = .3, h = T.near, glass = [hex(mix(P.teal, '#FFF8EA', .1)), P.water, P.waterDeep];
    iso.boxNow(T.x1, T.y0 - .35, 0, wt, T.y1 - T.y0 + .35 + wt, h, glass, { faceColor: [P.teal, null, null, null, null] });
    iso.boxNow(T.x0 - .35, T.y1, 0, T.x1 - T.x0 + .35, wt, h, glass, { faceColor: [P.teal, null, null, null, null] });
    // mullions on the glass
    const g = iso.g; g.strokeStyle = css(mix(P.teal, P.water, .4), .7); g.lineWidth = Math.max(1, .04 * iso.cam.k); g.beginPath();
    for (let y = T.y0 + 3; y < T.y1; y += 3) { const a = iso.P(T.x1 + wt, y, 0), b = iso.P(T.x1 + wt, y, h); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); }
    for (let x = T.x0 + 3; x < T.x1; x += 3) { const a = iso.P(x, T.y1 + wt, 0), b = iso.P(x, T.y1 + wt, h); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); }
    g.stroke();
  }

  // floor type in Newsreader (Latin only): lines land one character at a time, pale ghost -> ink, scale 1.22 -> 1
  const SZ = { B: [700, 1.5, P.ink], A: [700, 1.5, P.accent], s: [500, .82, P.ink], sa: [700, .9, P.accent] };
  const mg = document.createElement('canvas').getContext('2d');
  const meas = (w, s) => { mg.font = `${w} 100px Newsreader`; return mg.measureText(s).width; };
  function phrase(Pp) { // {x, y, z, scale, step, t1, lines: [{t0, segs, indent}]}
    const out = []; const sc = Pp.scale || 1; let v = 0;
    Pp.lines.forEach((ln, li) => {
      const lsc = (ln.scale || 1) * sc;
      const big = Math.max(...ln.segs.map(([, k]) => SZ[k][1])) * lsc;
      if (li) v += big * 1.18 + (ln.gap || .15); else v = 0;
      let u = (ln.indent || 0) * sc, tc = ln.t0;
      for (const [s, k] of ln.segs) {
        const [w, size0, col] = SZ[k], size = size0 * lsc;
        for (const ch of s) { if (ch === ' ') { u += .32 * size; continue; } const cw = meas(w, ch) * size / 100; out.push({ ch, u, v, w, size, col, cw, tc }); u += cw + .03 * size; tc += Pp.step || .08; }
      }
    });
    return out;
  }
  function drawPhrase(g, t, Pp, Lx, alpha = 1) {
    const fade = (1 - ss(seg(t, Pp.t1 - .3, Pp.t1))) * alpha; if (fade <= 0) return;
    for (const c of Lx) {
      const a = eo(seg(t, c.tc, c.tc + .25)); if (a <= 0) continue;
      const dk = ss(seg(t, c.tc + .08, c.tc + .42)), sc = lerp(1.22, 1, eo(seg(t, c.tc, c.tc + .3)));
      onPlane(g, Pp.x + c.v, Pp.y - c.u, Pp.z || 0, 'xy', (g2) => {
        g2.globalAlpha = a * fade; g2.font = `${c.w} 100px Newsreader`; g2.textBaseline = 'alphabetic';
        g2.fillStyle = css(mix(c.col === P.accent ? P.accentLt : '#D6CCBA', c.col, dk));
        const s = c.size / 100, mw = meas(c.w, c.ch);
        g2.translate(c.cw / 2, -c.size * .36); g2.scale(s * sc, s * sc); g2.translate(-mw / 2, c.size * .36 / s);
        g2.fillText(c.ch, 0, 0);
      });
    }
  }
  // phrase specs, laid out once
  const PH = [
    { x: 18.0, y: 16.0, t1: SC[1], scale: 1.25, lines: [{ t0: WT.drowns - .15, segs: [['drowns', 'B']] }, { t0: 1.9, segs: [['if it stops', 's']] }, { t0: WT.fish - .1, segs: [['a fish', 's'], ['?', 'sa']] }] },
    { x: 16.3, y: 15.4, t1: SC[2], scale: 1.0, lines: [{ t0: WT.oxygen - .1, segs: [['oxygen', 'B']] }, { t0: WT.gills - .3, segs: [['gills', 'A']], scale: .8, indent: 1.2 }] },
    { x: 12.6, y: -7.0, t1: SC[3], scale: .8, lines: [{ t0: WT.still - .35, segs: [['lies still', 'B']] }, { t0: WT.pump - .1, segs: [['cheek ', 's'], ['pump', 'sa']] }] },
    { x: 18.4, y: 19.2, t1: SC[4], scale: 1.3, lines: [{ t0: WT.cant - .2, segs: [["can't", 'B']] }, { t0: WT.makos - .25, segs: [['mako, whale shark', 's']] }] },
    { x: 7.6, y: 7.6, z: 0, t1: SC[5], scale: 1.0, lines: [{ t0: WT.ram - .1, segs: [['ram', 'A']], scale: 1.3 }, { t0: WT.mouths - .1, segs: [['mouth open', 's']] }] },
    { x: 7.6, y: 11.4, t1: SC[6], scale: 1.0, lines: [{ t0: WT.stop - .05, segs: [['stop', 'B']] }, { t0: WT.noOx - .5, segs: [['no ', 's'], ['oxygen', 'sa']] }] },
    { x: 17.0, y: 15.6, t1: SC[7], scale: .95, lines: [{ t0: WT.resting - .2, segs: [['resting', 's']] }, { t0: WT.two - .1, segs: [['2', 'A'], [' km/h', 'B']], scale: 1.35 }, { t0: WT.slower - .1, segs: [['slower than a walk', 's']] }] },
    { x: 13.2, y: -6.9, t1: SC[8], scale: 1.1, lines: [{ t0: WT.most - .05, segs: [['most ', 's'], ['rest', 'A']] }] },
    { x: 22.6, y: 7.4, t1: DURATION + 1, scale: 1.6, lines: [{ t0: WT.which - .1, segs: [['which', 'B'], ['?', 'A']] }] },
    { x: 13.0, y: -7.4, t1: DURATION + 1, scale: 1.0, lines: [{ t0: WT.naps - .2, segs: [['nap', 'B']] }] },
    { x: 18.2, y: 12.4, t1: DURATION + 1, scale: 1.0, lines: [{ t0: WT.never - .3, segs: [['never stop', 'B']] }] },
  ];
  let PL = PH.map(phrase), PLok = false;
  try { document.fonts.load('700 100px Newsreader'); document.fonts.load('500 100px Newsreader'); } catch (e) { }
  function ensurePL() { if (PLok) return; try { if (document.fonts.check('700 100px Newsreader') && document.fonts.check('500 100px Newsreader')) { PL = PH.map(phrase); PLok = true; } } catch (e) { } }
  const shotOf = (t) => { for (let i = SC.length - 2; i >= 0; i--) if (t >= SC[i]) return i; return 0; };
  const PHRASES_BY_SHOT = [[0], [1], [2], [3], [4], [5], [6], [7], [8, 9, 10]];

  // ---------- people ----------
  const CAST = [
    { h: 1.72, top: TOPS[0], legs: LEGS[0] }, { h: 1.62, top: TOPS[1], legs: LEGS[1], hairLong: true }, { h: 1.78, top: TOPS[2], legs: LEGS[2] },
    { h: 1.66, top: TOPS[3], legs: LEGS[3], skirt: '#6B6F63', hairLong: true }, { h: 1.24, top: TOPS[1], legs: LEGS[0] }, { h: 1.7, top: TOPS[2], legs: LEGS[3] },
  ];
  function person(i, x, y, pose = {}) { iso.bill(x, y, 0, (gg) => drawPerson(gg, CAST[i % CAST.length], pose), { r: 2.2 }); }
  // the walker in shot 7 (heads up-right along the walkway, -y, at 1.3 m/s)
  const walkerY = (t) => 12.6 - 1.3 * Math.max(0, t - SC[6] - .2);

  // ---------- camera per shot ----------
  function camAt(t) {
    const wp = lane(whiteS(t));
    const S = shotOf(t);
    const c = { x: 0, y: 0, z: 0, k: 50 };
    const go = (a, b, u) => { c.x = lerp(a[0], b[0], u); c.y = lerp(a[1], b[1], u); c.k = lerp(a[2], b[2], u); };
    const V = {
      hook: [9.6, 8.8, 56], s1: (y) => [12.8, (y + 8) / 2 + 2.0, 108], nurse: [10.0, -10.0, 105], wide: [9.4, 8.0, 50],
      far: (y) => [5.4, (y + 2.2) / 2 + 1.4, 108], far2: (y) => [5.4, (y + 6) / 2 + 1.9, 108], walk: (y) => [13.2, y, 84], rest: [9.6, -10.4, 72], hall: [8.4, -3.2, 44],
    };
    if (S === 0) { const u = eio(seg(t, 0, 5.1)); c.x = V.hook[0]; c.y = V.hook[1]; c.k = lerp(53, 58, u); }
    else if (S === 1) go(V.s1(wp.y), V.s1(wp.y), 0);
    else if (S === 2) go(V.s1(lane(whiteS(SC[2] - .01)).y), V.nurse, eio(seg(t, SC[2], SC[2] + .75)));
    else if (S === 3) go(V.nurse, V.wide, eio(seg(t, SC[3], SC[3] + .8)));
    else if (S === 4) go(V.wide, V.far(wp.y), eio(seg(t, SC[4], SC[4] + .8)));
    else if (S === 5) go(V.far(lane(whiteS(SC[5] - .01)).y), V.far2(wp.y), eio(seg(t, SC[5], SC[5] + 1.0)));
    else if (S === 6) { const wy = walkerY(t); go(V.walk((wy + wp.y) / 2 + 1.0), V.walk(0), 0); }
    else if (S === 7) { const wy = walkerY(SC[7] - .01), sy = lane(whiteS(SC[7] - .01)).y; go(V.walk((wy + sy) / 2 + 1.0), V.rest, eio(seg(t, SC[7], SC[7] + .65))); }
    else go(V.rest, V.hall, eio(seg(t, SC[8], SC[8] + 1.1)));
    return c;
  }

  // ---------- the frame ----------
  function explainer(ctx, Wd, Hd, t) {
    ensurePL(); iso.g = ctx; iso.cam = camAt(t); iso.desat = 0; iso.keep = false; iso.alpha = 1;
    const g = ctx, S = shotOf(t);
    ground(g);
    // ---- rest tank (far) ----
    tankFloor(g, REST, 11);
    farWalls(REST);
    // resting sharks on the sand; cheeks pump
    const cheek = .14 * (.5 + .5 * Math.sin(TAU * 1.1 * t));
    iso.items = [];
    shark('nurse', 7.6, -12.2, .2, -2.45, t, { amp: .12, phase: t * .8, cheek, mouth: .25 + cheek * 1.5 });
    if (S >= 7) { // shot 8 onward: more sharks resting on the sand
      shark('nurse', 4.0, -10.8, .18, .4, t, { amp: .1, phase: t * .7 + 1, cheek: cheek * .8, mouth: .3 });
      shark('mako', 7.9, -16.2, .22, -1.2, t, { amp: .05, phase: t * .5 + 2, mouth: .25 });
      shark('nurse', 8.1, -11.0, .18, 2.6, t, { amp: .1, phase: t * .75 + 3, cheek: cheek * .9, mouth: .3 });
    }
    iso.flush();
    if (S === 2 || S === 1 || S === 3) flowNurse(t, a01(t, SC[2] + .9, SC[3] - .15) * (S === 2 ? 1 : 0));
    nearWalls(REST);
    // ---- big tank ----
    tankFloor(g, BIG, 7);
    farWalls(BIG);
    // floor type inside the ring (close-ups on the far straight)
    for (const i of PHRASES_BY_SHOT[S]) if (PH[i].x < 12) drawPhrase(g, t, PH[i], PL[i]);
    // sharks
    iso.items = [];
    const ws = whiteS(t), wp = lane(ws), sp = whiteSpeed(t), stopped = 1 - clamp(sp / .5);
    const sinkZ = S === 5 ? -.35 * ss(seg(t, 27.3, 30.4)) : 0;
    const wz = 1.25 + sinkZ + .04 * Math.sin(t * 1.3);
    const ph = whiteS(t) * 3.1; // tail beat follows distance swum, so it slows and stops with the shark
    shark('white', wp.x, wp.y, wz, wp.h, t, { phase: ph, amp: .4 + .6 * (1 - stopped), mouth: .45, gillHi: S === 1 ? a01(t, WT.gills - .2, SC[2]) : (S === 4 ? a01(t, WT.pushed, SC[5]) * .8 : 0) });
    const others = S === 0 || S === 3 || S === 7;
    if (others) {
      const ms = 0.85 * t + 14, mp = lane(ms, -.5); shark('mako', mp.x, mp.y, 1.7, mp.h, t, { phase: ms * 4, mouth: .4 });
      const hs = 0.7 * t + 27, hp = lane(hs, .2); shark('whale', hp.x, hp.y, .75, hp.h, t, { phase: hs * 2.4, amp: .7, mouth: .6 });
    }
    iso.flush();
    // the rule: water rushing in at the mouth and out at the gills
    let fa = 0, fRel = 1, grey = false;
    if (S === 1) fa = a01(t, WT.flows - .3, SC[2] - .1);
    if (S === 4) fa = a01(t, WT.ram + .2, SC[5] + .3);
    if (S === 5) { fa = 1 - ss(seg(t, 26.2, WT.stops + .2)); fRel = clamp(sp / .9); grey = t > WT.stops - .3; }
    if (S === 6) fa = .55 * a01(t, WT.cruising - .2, SC[7] - .1);
    if (fa > 0) flow('white', wp.x, wp.y, wz, wp.h, t, fa, { rel: fRel, grey, n: S === 4 ? 7 : 6 });
    nearWalls(BIG);
    // floor type on the walkway
    for (const i of PHRASES_BY_SHOT[S]) if (PH[i].x >= 12) drawPhrase(g, t, PH[i], PL[i]);
    if (S === 8) standHere(g, t);
    // ---- people (after the parapets: they stand on the camera side) ----
    iso.items = [];
    if (S === 0 || S === 3 || S === 8) { person(0, 15.0, 7.6); person(1, 14.9, 10.4); person(4, 15.1, 11.2); person(2, 15.0, 13.2); }
    if (S === 2 || S === 7 || S === 8) { person(3, 10.9, -13.6); person(5, 11.0, -16.2); }
    if (S === 6) { const y = walkerY(t); person(2, 15.2, y, { walking: true, phase: (12.6 - y) / .75 * Math.PI }); person(1, 14.9, 13.2); }
    if (S === 8) { // a visitor walks to the middle of the hall and stops: which tank?
      const u = ss(seg(t, SC[8] + .3, 44.8)), y = lerp(2.2, -3.2, u);
      person(0 + 5, 13.8, y, { walking: u > 0 && u < 1, phase: (2.2 - y) / .75 * Math.PI });
    }
    iso.flush();
  }
  const a01 = (t, t0, t1) => ss(seg(t, t0, t0 + .35)) * (1 - ss(seg(t, t1 - .3, t1)));
  function flowNurse(t, a) {
    if (a <= 0) return;
    const g = iso.g, k = iso.cam.k, pulse = .5 + .5 * Math.sin(TAU * 1.1 * t);
    iso.push(7.6, -12.2, .2, -2.45, 1);
    g.save(); g.lineCap = 'round'; g.lineWidth = Math.max(2, .05 * k);
    for (let i = 0; i < 4; i++) {
      const yo = (i - 1.5) * .12, u = ((t * 1.1 + i * .25) % 1);
      const A = iso.L(lerp(2.1, 1.3, u), yo, -.05), B = iso.L(lerp(2.1, 1.3, Math.min(1, u + .25)), yo, -.05);
      g.strokeStyle = css(mix(P.accentLt, P.accent, .75), a * Math.sin(Math.PI * u) * (.4 + .6 * pulse)); g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(B[0], B[1]); g.stroke();
      const s = ((t * 1.1 + i * .25 + .5) % 1), side = sideVisible(-2.45);
      const C1 = iso.L(.55 - s * .8, side * (.3 + s * .5), .02), C2 = iso.L(.55 - Math.min(1, s + .25) * .8, side * (.3 + Math.min(1, s + .25) * .5), .02);
      g.strokeStyle = css(mix(P.accentLt, P.accent, .75), a * Math.sin(Math.PI * s) * (.4 + .6 * (1 - pulse))); g.beginPath(); g.moveTo(C1[0], C1[1]); g.lineTo(C2[0], C2[1]); g.stroke();
    }
    g.restore(); iso.pop();
  }
  // "stand here": accent outlines traced on the floor in front of each tank
  function standHere(g, t) {
    const boxes = [[9, WT.naps - .3], [10, WT.never - .4]].map(([i, t0]) => {
      const Pp = PH[i]; let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      for (const c of PL[i]) { x0 = Math.min(x0, Pp.x + c.v - c.size); x1 = Math.max(x1, Pp.x + c.v); y0 = Math.min(y0, Pp.y - c.u - c.cw); y1 = Math.max(y1, Pp.y - c.u); }
      return [[x0 - .45, y1 + .5], [x1 + .45, y0 - .5], t0];
    });
    for (const [[xa, ya], [xb, yb], t0] of boxes) {
      const p = eo(seg(t, t0, t0 + .8)); if (p <= 0) continue;
      g.save(); g.strokeStyle = P.accent; g.lineWidth = .09 * iso.cam.k; g.setLineDash([.35 * iso.cam.k, .22 * iso.cam.k]);
      L.tracePath(g, [iso.P(xa, ya, 0), iso.P(xa, yb, 0), iso.P(xb, yb, 0), iso.P(xb, ya, 0), iso.P(xa, ya, 0)], p); g.restore();
    }
  }

  // ---------- sound: soft vibraphone per landing character, water bed, pizzicato steps ----------
  function scoreSound(k) {
    const vib = (at, f, g = .06, minor = true) => k.tone(at, { f, dur: 1.1, gain: g, verb: .35, minor });
    const notes = ['F5', 'A5', 'C6', 'D6', 'F6'];
    PH.forEach((Pp, pi) => {
      PL[pi].forEach((c, i) => { if (i % 2 === 0) vib(c.tc, notes[(i / 2 + pi) % notes.length], c.col === P.accent ? .07 : .04); if (c.col === P.accent) k.play('ding', c.tc, { f: 'F6', gain: .18, minor: true }); });
    });
    // cuts and travels: a soft whoosh of water
    [SC[1], SC[2], SC[3], SC[4], SC[6], SC[7], SC[8]].forEach((c) => k.play('whoosh', c - .2, { dur: .55, gain: .22, top: 1600 }));
    // bubbles while water flows
    for (let tt = WT.flows; tt < SC[2]; tt += .23) k.play('blip', tt, { f: 'C6', type: 'sine', gain: .25, minor: true });
    for (let tt = WT.ram + .3; tt < 26.4; tt += .27) k.play('blip', tt, { f: tt % .54 < .27 ? 'D6' : 'A5', type: 'sine', gain: .22, minor: true });
    // cheek pump: soft low tock each pulse
    for (let tt = SC[2] + .9; tt < SC[3]; tt += 1 / 1.1) k.play('tock', tt, { f: 300, gain: .35, minor: true });
    // the stop: a low string-ish fall and silence of bubbles
    k.tone(WT.stops - .1, { f: [[0, 220], [1.4, 147]], type: 'triangle', dur: 1.6, gain: .08, verb: .3 });
    k.play('error', WT.noOx, { f: 'D4', gain: .12 });
    // walker: pizzicato steps
    for (let tt = SC[6] + .4; tt < SC[7]; tt += .52) k.play('tock', tt, { f: 520 + ((tt * 7) % 3) * 60, gain: .3, minor: true });
    k.play('success', WT.two, { f: 'F5', gain: .3 });
    k.play('sparkle', WT.naps, { n: 4, gain: .3 }); k.play('sparkle', WT.never, { n: 4, gain: .3 });
    k.tone(45.9, { f: 'F4', dur: 2.0, gain: .06, verb: .4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
