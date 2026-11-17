// ===== Low-Poly Faceted, vertical: "What if humans had a gecko's sticky feet?" =====
// Unattended run: no storyboard step. Every frame is a pure function of t.
(function () {
  try { ['700 120px "Space Grotesk"', '700 48px "Space Grotesk"', '400 40px "Space Grotesk"'].forEach((f) => document.fonts.load(f, 'AaZz09%?!,.')); } catch (e) { /* render anyway */ }
  const W = 1080, HH = 1920, F = 1150, FONT = '"Space Grotesk"', INK = '#2a1f4f';
  const P_ = [{"s":0.25,"e":3.99,"text":"What if your feet could hold 290 pounds with no glue?","words":[["what",0.25],["if",0.61],["your",0.78],["feet",1.14],["could",1.5],["hold",1.94],["290",2.3],["pounds",2.56],["with",3.1],["no",3.45],["glue",3.63]]},{"s":4.47,"e":6.97,"text":"A gecko's feet can, at least in theory.","words":[["a",4.47],["geckos",4.55],["feet",5.07],["can",5.42],["at",5.67],["least",5.85],["in",6.28],["theory",6.45]]},{"s":7.34,"e":9.65,"text":"Its toes are covered in tiny hairs,","words":[["its",7.34],["toes",7.59],["are",7.92],["covered",8.17],["in",8.75],["tiny",8.91],["hairs",9.24]]},{"s":10.1,"e":12.57,"text":"about six and a half million on one gecko.","words":[["about",10.1],["six",10.48],["and",10.7],["a",10.93],["half",11.0],["million",11.3],["on",11.82],["one",11.97],["gecko",12.2]]},{"s":12.94,"e":16.41,"text":"And every hair splits into hundreds of even tinier tips.","words":[["and",12.94],["every",13.17],["hair",13.54],["splits",13.85],["into",14.3],["hundreds",14.6],["of",15.2],["even",15.36],["tinier",15.66],["tips",16.11]]},{"s":16.81,"e":18.89,"text":"Those tips get so close to the wall","words":[["those",16.81],["tips",17.18],["get",17.47],["so",17.7],["close",17.85],["to",18.22],["the",18.37],["wall",18.59]]},{"s":19.32,"e":21.72,"text":"that the molecules themselves pull together.","words":[["that",19.32],["the",19.57],["molecules",19.76],["themselves",20.33],["pull",20.96],["together",21.22]]},{"s":22.12,"e":24.07,"text":"It's called the van der Waals force.","words":[["its",22.12],["called",22.33],["the",22.75],["van",22.96],["der",23.17],["waals",23.37],["force",23.72]]},{"s":24.52,"e":25.46,"text":"One hair is weak,","words":[["one",24.52],["hair",24.74],["is",25.02],["weak",25.17]]},{"s":25.55,"e":27.72,"text":"but millions together are mighty.","words":[["but",25.55],["millions",25.78],["together",26.4],["are",27.02],["mighty",27.26]]},{"s":28.19,"e":31.01,"text":"To let go, a gecko just peels its toes up,","words":[["to",28.19],["let",28.37],["go",28.64],["a",28.82],["gecko",28.91],["just",29.37],["peels",29.73],["its",30.19],["toes",30.46],["up",30.82]]},{"s":31.12,"e":31.81,"text":"like tape.","words":[["like",31.12],["tape",31.46]]},{"s":32.21,"e":33.61,"text":"Now scale that up to you.","words":[["now",32.21],["scale",32.43],["that",32.8],["up",33.09],["to",33.24],["you",33.39]]},{"s":34.01,"e":36.87,"text":"You'd need sticky pads on forty percent of your body,","words":[["youd",34.01],["need",34.28],["sticky",34.56],["pads",34.96],["on",35.24],["forty",35.37],["percent",35.71],["of",36.19],["your",36.33],["body",36.6]]},{"s":37.35,"e":39.27,"text":"about eighty percent of your front!","words":[["about",37.35],["eighty",37.68],["percent",38.08],["of",38.54],["your",38.68],["front",38.94]]},{"s":39.7,"e":42.87,"text":"And your shoes? US size one hundred fourteen.","words":[["and",39.7],["your",39.97],["shoes",40.32],["us",40.76],["size",40.94],["one",41.29],["hundred",41.55],["fourteen",42.17]]},{"s":43.22,"e":47.04,"text":"That's why geckos are about the biggest animals that can do this.","words":[["thats",43.22],["why",43.58],["geckos",43.8],["are",44.25],["about",44.47],["the",44.83],["biggest",45.05],["animals",45.57],["that",46.08],["can",46.38],["do",46.6],["this",46.74]]},{"s":47.42,"e":49.68,"text":"So would you trade your feet for gecko feet?","words":[["so",47.42],["would",47.54],["you",47.87],["trade",48.06],["your",48.39],["feet",48.64],["for",48.9],["gecko",49.1],["feet",49.42]]}];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e, on: '290 lb weight hangs from a gecko on a cliff; NO GLUE' },
    { id: 'hairs', s: P_[2].s, e: P_[3].e, on: 'toe-pad terrain grows a forest of hairs; 6,500,000 counter' },
    { id: 'tips', s: P_[4].s, e: P_[4].e, on: 'one hair splits into hundreds of tips' },
    { id: 'vdw', s: P_[5].s, e: P_[7].e, on: 'tip meets wall; molecules pull; VAN DER WAALS' },
    { id: 'many', s: P_[8].s, e: P_[9].e, on: 'one weak hair, then millions hold the slab' },
    { id: 'peel', s: P_[10].s, e: P_[11].e, on: 'toe peels up from the tip like tape' },
    { id: 'you', s: P_[12].s, e: P_[14].e, on: 'human figure: 40% of body, 80% of front turn sticky' },
    { id: 'shoe', s: P_[15].s, e: P_[15].e, on: 'giant shoe, US 114' },
    { id: 'limit', s: P_[16].s, e: P_[16].e, on: 'size pillars, gecko = size limit' },
    { id: 'end', s: P_[17].s, e: P_[17].e, on: 'would you trade? back at the cliff' },
  ];
  const SC_T = [0]; for (let i = 1; i < BEATS.length; i++) SC_T.push((BEATS[i - 1].e + BEATS[i].s) / 2);
  const TRANS = 0.6;

  // ---------- tiny 3D pipeline (from the reference: perspective camera, flat Lambert facets, depth fog, painter's sort) ----------
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const scl = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const L3 = (a, b, u) => [H.lerp(a[0], b[0], u), H.lerp(a[1], b[1], u), H.lerp(a[2], b[2], u)];
  function makeCamYaw(pos, yaw, pitch, f) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    return {
      pos,
      proj(p) {
        const dx = p[0] - pos[0], dy = p[1] - pos[1], dz = p[2] - pos[2];
        const x1 = dx * cy - dz * sy, z1 = dx * sy + dz * cy;
        const y2 = dy * cp + z1 * sp, z2 = -dy * sp + z1 * cp;
        return [W / 2 + (f * x1) / z2, HH / 2 - (f * y2) / z2, z2];
      },
    };
  }
  function lookCam(pos, tgt, f = F) { const d = sub(tgt, pos); return makeCamYaw(pos, Math.atan2(d[0], d[2]), Math.atan2(-d[1], Math.hypot(d[0], d[2])), f); }
  // keyframes [t, pos, target]
  function camAt(KF, t) {
    let k = 0; while (k < KF.length - 2 && t > KF[k + 1][0]) k++;
    const A = KF[k], B = KF[k + 1], u = H.ease.inOut(H.clamp((t - A[0]) / Math.max(1e-6, B[0] - A[0])));
    return lookCam(L3(A[1], B[1], u), L3(A[2], B[2], u));
  }
  const ICO = (() => {
    const t = (1 + Math.sqrt(5)) / 2;
    const v = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map(norm);
    const f = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];
    return { v, f };
  })();

  // ---------- mesh builders (local space; place() maps them into the world) ----------
  const tri = (L, a, b, c, col, center, opt) => L.push(Object.assign({ p: [a, b, c], col, center }, opt || {}));
  function ellipsoid(L, c, r, col, su = 8, sv = 5, opt) {
    const P = (i, j) => { const th = (i / su) * Math.PI * 2, ph = (j / sv) * Math.PI; return [c[0] + Math.cos(th) * Math.sin(ph) * r[0], c[1] + Math.cos(ph) * r[1], c[2] + Math.sin(th) * Math.sin(ph) * r[2]]; };
    for (let j = 0; j < sv; j++) for (let i = 0; i < su; i++) {
      const a = P(i, j), b = P(i + 1, j), cc = P(i + 1, j + 1), d = P(i, j + 1);
      const k = typeof col === 'function' ? col(i, j) : col;
      if (j > 0) tri(L, a, b, cc, k, c, opt);
      if (j < sv - 1) tri(L, a, cc, d, k, c, opt);
    }
  }
  function cyl(L, a, b, r0, r1, sides, col, opt, rot = 0) {
    const ax = norm(sub(b, a)), up = Math.abs(ax[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    const u = norm(cross(ax, up)), v = cross(ax, u), mid = scl(add3(a, b), 0.5);
    const ring = (c, r) => Array.from({ length: sides }, (_, i) => { const t = rot + (i / sides) * Math.PI * 2; return add3(c, add3(scl(u, Math.cos(t) * r), scl(v, Math.sin(t) * r))); });
    const A = ring(a, r0), B = ring(b, r1);
    for (let i = 0; i < sides; i++) { const j = (i + 1) % sides; tri(L, A[i], A[j], B[j], col, mid, opt); tri(L, A[i], B[j], B[i], col, mid, opt); }
    for (let i = 1; i < sides - 1; i++) { tri(L, B[0], B[i], B[i + 1], col, mid, opt); tri(L, A[0], A[i], A[i + 1], col, mid, opt); }
  }
  function box(L, c, s, col, opt) {
    const v = []; for (let i = 0; i < 8; i++) v.push([c[0] + (i & 1 ? s[0] : -s[0]), c[1] + (i & 2 ? s[1] : -s[1]), c[2] + (i & 4 ? s[2] : -s[2])]);
    [[0, 1, 3, 2], [4, 6, 7, 5], [0, 4, 5, 1], [2, 3, 7, 6], [0, 2, 6, 4], [1, 5, 7, 3]].forEach(([a, b, cc, d]) => { tri(L, v[a], v[b], v[cc], col, c, opt); tri(L, v[a], v[cc], v[d], col, c, opt); });
  }
  function ico(L, c, r, col, opt) { ICO.f.forEach(([a, b, d]) => tri(L, add3(c, scl(ICO.v[a], r)), add3(c, scl(ICO.v[b], r)), add3(c, scl(ICO.v[d], r)), col, c, opt)); }
  const rotY = (p, a) => [p[0] * Math.cos(a) + p[2] * Math.sin(a), p[1], -p[0] * Math.sin(a) + p[2] * Math.cos(a)];
  function place(out, L, tf, extra) {
    for (const t of L) out.push(Object.assign({}, t, { p: t.p.map(tf), center: t.center ? tf(t.center) : null }, extra || {}));
  }
  const hash = (x) => { const s = Math.sin(x * 12.9898) * 43758.5453; return s - Math.floor(s); };

  // ---------- cast ----------
  // Tokay-style gecko: blue-grey with orange spots, golden eyes, toe pads. Local: head toward +z, back up +y, ~12 units long.
  const GK = { body: [118, 146, 206], dark: [92, 112, 176], spot: [255, 140, 92], pad: [236, 214, 206], eye: [255, 196, 64] };
  let GECKO = null;
  function geckoMesh() {
    if (GECKO) return GECKO;
    const L = [];
    const spotty = (base, seed) => (i, j) => (hash(seed + i * 7.1 + j * 3.3) > 0.82 ? GK.spot : (j > 2 ? GK.dark : base));
    ellipsoid(L, [0, 0.9, 0], [1.15, 0.72, 2.4], spotty(GK.body, 1), 10, 6);
    ellipsoid(L, [0, 1.0, 2.9], [0.95, 0.66, 1.15], spotty(GK.body, 2), 9, 5);
    ellipsoid(L, [0, 0.88, 3.85], [0.62, 0.45, 0.62], GK.body, 7, 4);
    for (const sx of [-1, 1]) {
      ellipsoid(L, [sx * 0.72, 1.32, 3.05], [0.34, 0.34, 0.34], GK.eye, 6, 4);
      ellipsoid(L, [sx * 0.95, 1.36, 3.1], [0.12, 0.2, 0.12], [40, 30, 60], 5, 3, { emissive: true });
    }
    // tail: tapering beads swinging to one side
    for (let i = 0; i < 7; i++) { const z = -2.3 - i * 0.95, r = 0.62 * (1 - i / 8.5); ellipsoid(L, [Math.sin(i * 0.5) * 0.9, 0.75 - i * 0.04, z], [r, r * 0.8, 0.75], spotty(GK.body, 10 + i), 7, 4); }
    // legs + feet with 5 splayed toes ending in pads
    for (const sx of [-1, 1]) for (const [z, dir] of [[1.4, 1], [-1.4, -1]]) {
      const hip = [sx * 0.85, 0.85, z], knee = [sx * 2.1, 0.75, z + 0.45 * dir], foot = [sx * 2.75, 0.18, z + 1.05 * dir];
      cyl(L, hip, knee, 0.36, 0.3, 5, GK.body); cyl(L, knee, foot, 0.3, 0.22, 5, GK.body);
      for (let k = 0; k < 5; k++) {
        const a = (dir > 0 ? Math.PI / 2 : -Math.PI / 2) + sx * 0.0 + (k - 2) * 0.48 + (sx > 0 ? -0.35 * dir : 0.35 * dir);
        const tip = [foot[0] + Math.cos(a) * 0.95 * sx * (sx > 0 ? 1 : 1), 0.12, foot[2] + Math.sin(a) * 0.95];
        cyl(L, foot, tip, 0.12, 0.1, 4, GK.body);
        ellipsoid(L, tip, [0.26, 0.1, 0.26], GK.pad, 6, 3);
      }
    }
    return (GECKO = L);
  }
  // faceless low-poly person. Local: feet at y=0, head top ~18, facing -z.
  const HUMAN_COL = [196, 188, 236], STICKY = [255, 112, 96];
  let HUMAN = null;
  function humanMesh() {
    if (HUMAN) return HUMAN;
    const L = [];
    for (const sx of [-1, 1]) {
      cyl(L, [sx * 1.1, 9.2, 0], [sx * 1.2, 4.8, 0], 1.05, 0.85, 6, HUMAN_COL); cyl(L, [sx * 1.2, 4.8, 0], [sx * 1.25, 0.9, 0], 0.85, 0.6, 6, HUMAN_COL);
      box(L, [sx * 1.25, 0.45, -0.55], [0.6, 0.45, 1.25], HUMAN_COL);
      cyl(L, [sx * 2.85, 14.8, 0], [sx * 3.3, 11.9, 0.1], 0.72, 0.6, 6, HUMAN_COL); cyl(L, [sx * 3.3, 11.9, 0.1], [sx * 3.5, 9.4, -0.3], 0.6, 0.5, 6, HUMAN_COL);
      ellipsoid(L, [sx * 3.55, 8.8, -0.35], [0.5, 0.7, 0.42], HUMAN_COL, 6, 4);
    }
    ellipsoid(L, [0, 9.7, 0], [2.2, 1.3, 1.35], HUMAN_COL, 8, 4);
    cyl(L, [0, 9.8, 0], [0, 14.6, 0], 1.9, 2.5, 8, HUMAN_COL);
    ellipsoid(L, [0, 14.9, 0], [2.85, 0.95, 1.5], HUMAN_COL, 8, 4);
    cyl(L, [0, 15.5, 0], [0, 16.4, 0], 0.65, 0.6, 6, HUMAN_COL);
    ellipsoid(L, [0, 17.4, -0.05], [1.3, 1.6, 1.4], HUMAN_COL, 8, 6);
    // per-facet keys for the sticky-pad colouring: climb order (feet up) and whether it faces front (-z)
    L.forEach((tr, i) => {
      const c = scl(add3(add3(tr.p[0], tr.p[1]), tr.p[2]), 1 / 3);
      let n = norm(cross(sub(tr.p[1], tr.p[0]), sub(tr.p[2], tr.p[0]))); if (dot(n, sub(c, tr.center)) < 0) n = scl(n, -1);
      tr.climb = c[1] / 18 + hash(i * 1.7) * 0.25; tr.front = n[2] < -0.15; tr.fr = hash(i * 3.1 + 5); tr.human = true;
    });
    const s1 = L.slice().sort((a, b) => a.climb - b.climb); s1.forEach((t, i) => { t.rankBody = i / s1.length; });
    const fr = L.filter((t) => t.front).sort((a, b) => a.fr - b.fr); fr.forEach((t, i) => { t.rankFront = i / fr.length; });
    return (HUMAN = L);
  }
  let SHOE = null;
  function shoeMesh() { // local: length along z (~7 units), sole at y=0
    if (SHOE) return SHOE;
    const L = [], C1 = [70, 196, 204], C2 = [250, 244, 236], C3 = [255, 120, 100];
    box(L, [0, 0.25, 0], [1.25, 0.25, 3.5], C2);
    ellipsoid(L, [0, 1.0, 0.9], [1.25, 1.05, 2.7], C1, 9, 5);
    box(L, [0, 1.35, -2.4], [1.15, 1.1, 0.95], C1);
    box(L, [0, 2.45, -2.1], [0.95, 0.12, 0.9], C3);
    for (let i = 0; i < 3; i++) box(L, [0, 2.0 - i * 0.05, 0.2 + i * 0.8], [0.9, 0.1, 0.12], C2);
    return (SHOE = L);
  }

  // ---------- 2D overlays from the reference: cut-corner tags, faceted ribbon arrows ----------
  function lpTag(ctx, x, y, text, o = {}) {
    const k = o.k ?? 1; if (k <= 0.01) return;
    ctx.save();
    ctx.font = o.font || `700 48px ${FONT}`;
    const fsz = parseInt((ctx.font.match(/(\d+)px/) || [0, 48])[1]);
    const wd = ctx.measureText(text).width + fsz * 1.3, h = o.h || Math.round(fsz * 1.75), ch = h * 0.32;
    ctx.translate(x, y); ctx.scale(k, k);
    const pts = [[-wd / 2 + ch, -h / 2], [wd / 2, -h / 2], [wd / 2, h / 2 - ch], [wd / 2 - ch, h / 2], [-wd / 2, h / 2], [-wd / 2, -h / 2 + ch]];
    ctx.fillStyle = o.shadow || 'rgba(40,20,70,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 7, p[1] + 7) : ctx.moveTo(p[0] + 7, p[1] + 7)); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || '#fff6f0');
    ctx.fillStyle = H.rgba(bg); ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(bg, [255, 255, 255], 0.5)); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(wd / 2 - h * 0.6, 0); ctx.lineTo(-wd / 2, 0); ctx.lineTo(pts[5][0], pts[5][1]); ctx.closePath(); ctx.fill();
    ctx.fillStyle = o.col || INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 0, 2);
    ctx.restore();
  }
  function lpArrow(ctx, a, c, b, prog, colA, wd = 20) {
    if (prog <= 0) return null;
    const q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]];
    const N = 7, pts = []; for (let i = 0; i <= N; i++) pts.push(q(prog * i / N));
    const light = H.rgba(H.mix(colA, [255, 255, 255], 0.3)), dark = H.rgba(H.mix(colA, [40, 20, 70], 0.25));
    const end = pts.length - 1;
    for (let i = 0; i < end; i++) {
      const p0 = pts[i], p1 = pts[i + 1], dx = p1[0] - p0[0], dy = p1[1] - p0[1], Ln = Math.hypot(dx, dy) || 1;
      const nx = -dy / Ln * wd / 2, ny = dx / Ln * wd / 2, shrink = i === end - 1 ? 0.35 : 0, p1b = [p1[0] - dx * shrink, p1[1] - dy * shrink];
      ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(p0[0] + nx, p0[1] + ny); ctx.lineTo(p1b[0] + nx, p1b[1] + ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
      ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(p0[0] - nx, p0[1] - ny); ctx.lineTo(p1b[0] - nx, p1b[1] - ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
    }
    const e = pts[end], e0 = pts[end - 1], ang = Math.atan2(e[1] - e0[1], e[0] - e0[0]);
    ctx.save(); ctx.translate(e[0], e[1]); ctx.rotate(ang);
    ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-wd * 1.4, -wd * 1.1); ctx.lineTo(-wd * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-wd * 1.4, wd * 1.1); ctx.lineTo(-wd * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.restore();
    return q;
  }
  // headline on a cut-corner ink panel with the reference's two-tone faceted underline
  function headline(ctx, str, x, y, size, k, o = {}) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.font = `700 ${size}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    const wd = ctx.measureText(str).width, pw = wd + size * 0.7, ph = size * 1.5, c2 = size * 0.22;
    if (o.panel !== false) { ctx.fillStyle = o.panelCol || 'rgba(42,31,79,0.86)'; ctx.beginPath(); ctx.moveTo(-pw / 2 + c2, -size * 1.05); ctx.lineTo(pw / 2, -size * 1.05); ctx.lineTo(pw / 2, -size * 1.05 + ph - c2); ctx.lineTo(pw / 2 - c2, -size * 1.05 + ph); ctx.lineTo(-pw / 2, -size * 1.05 + ph); ctx.lineTo(-pw / 2, -size * 1.05 + c2); ctx.closePath(); ctx.fill(); }
    ctx.fillStyle = 'rgba(30,20,60,0.35)'; ctx.fillText(str, 4, 4);
    ctx.fillStyle = o.col || '#ffffff'; ctx.fillText(str, 0, 0);
    if (o.under !== false) {
      const uw = Math.min(wd, size * 3.2), ux = -uw / 2, uy = size * 0.2, uh = size * 0.11;
      ctx.fillStyle = '#ff7060'; ctx.beginPath(); ctx.moveTo(ux, uy); ctx.lineTo(ux + uw * 0.78, uy); ctx.lineTo(ux + uw * 0.72, uy + uh); ctx.lineTo(ux, uy + uh); ctx.fill();
      ctx.fillStyle = '#ffb08a'; ctx.beginPath(); ctx.moveTo(ux + uw * 0.78, uy); ctx.lineTo(ux + uw, uy); ctx.lineTo(ux + uw * 0.94, uy + uh); ctx.lineTo(ux + uw * 0.72, uy + uh); ctx.fill();
    }
    ctx.restore();
  }
  function hexBadge(ctx, x, y, r, good, k) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(0.12); ctx.fillStyle = good ? '#3ccf9a' : '#ff5a4a';
    ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.moveTo(0, 0); for (let i = 3; i <= 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = r * 0.2; ctx.lineJoin = 'miter'; ctx.beginPath();
    if (good) { ctx.moveTo(-r * 0.42, 0); ctx.lineTo(-r * 0.12, r * 0.33); ctx.lineTo(r * 0.45, -r * 0.37); } else { ctx.moveTo(-r * 0.33, -r * 0.33); ctx.lineTo(r * 0.33, r * 0.33); ctx.moveTo(r * 0.33, -r * 0.33); ctx.lineTo(-r * 0.33, r * 0.33); }
    ctx.stroke(); ctx.restore();
  }
  const back = (t, t0, d = 0.3) => H.ease.back(H.clamp((t - t0) / d));
  const EO = (t, a, b) => H.ease.out(H.clamp((t - a) / (b - a)));
  const EIO = (t, a, b) => H.ease.inOut(H.clamp((t - a) / (b - a)));
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));

  // ---------- skies (each scene its own backdrop) ----------
  function sky(ctx, stops, cam, sun, stars) {
    const g = ctx.createLinearGradient(0, 0, 0, HH);
    stops.forEach(([o, c]) => g.addColorStop(o, c)); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    if (stars) { const R0 = H.rng(77); for (let i = 0; i < 160; i++) { const x = R0() * W, y = R0() * 520, a = (1 - y / 520) * R0() * 0.8; ctx.fillStyle = `rgba(255,240,255,${a})`; ctx.fillRect(x, y, 2, 2); } }
    if (sun && cam) {
      const sp = cam.proj(add3(cam.pos, sun.off)); if (sp[2] <= 0) return;
      const gr = ctx.createRadialGradient(sp[0], sp[1], 40, sp[0], sp[1], 520);
      gr.addColorStop(0, sun.glow || 'rgba(255,214,160,0.5)'); gr.addColorStop(1, 'rgba(255,214,160,0)'); ctx.fillStyle = gr; ctx.fillRect(0, 0, W, HH);
      for (let i = 0; i < 14; i++) {
        const a0 = (i / 14) * Math.PI * 2, a1 = ((i + 1) / 14) * Math.PI * 2, R = sun.r || 80;
        ctx.fillStyle = H.rgba(H.mix('#ffd49a', '#fff4d8', 0.5 + 0.5 * Math.cos(a0 - 2.3)));
        ctx.beginPath(); ctx.moveTo(sp[0], sp[1]); ctx.lineTo(sp[0] + Math.cos(a0) * R, sp[1] + Math.sin(a0) * R); ctx.lineTo(sp[0] + Math.cos(a1) * R, sp[1] + Math.sin(a1) * R); ctx.closePath(); ctx.fill();
      }
    }
  }
  // macro backdrop: soft out-of-focus faceted bokeh hexes
  function bokeh(ctx, seed, cols, t) {
    const r = H.rng(seed);
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 22; i++) {
      const x = r.range(-60, W + 60) + Math.sin(t * 0.3 + i) * 20, y = r.range(-60, HH + 60), R = r.range(60, 190), c = r.pick(cols);
      ctx.fillStyle = H.rgba(c, r.range(0.05, 0.13)); ctx.beginPath(); for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2 + i; ctx.lineTo(x + Math.cos(a) * R, y + Math.sin(a) * R); } ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }

  // ---------- renderer: shade, cull, project, sort; facets flip in from the camera outward (scene build) ----------
  function renderTris(ctx, tris, cam, L) {
    const SUN = L.sun, SC = L.sunCol || [255, 226, 190], AMB = L.amb || [104, 98, 150], FOG = L.fog, FOGH = L.fogHi || L.fog;
    const out = [];
    for (const tr of tris) {
      const [a, b, c] = tr.p;
      let n = norm(cross(sub(b, a), sub(c, a)));
      const cen = scl(add3(add3(a, b), c), 1 / 3);
      if (tr.terrain) { if (n[1] < 0) n = scl(n, -1); }
      else if (tr.center) { if (dot(n, sub(cen, tr.center)) < 0) n = scl(n, -1); }
      const toCam = sub(cam.pos, cen);
      if (tr.twoSided) { if (dot(n, toCam) < 0) n = scl(n, -1); }
      else if (dot(n, toCam) <= 0) continue;
      let pa = cam.proj(a), pb = cam.proj(b), pc = cam.proj(c);
      if (pa[2] < 0.4 || pb[2] < 0.4 || pc[2] < 0.4) continue;
      const mnx = Math.min(pa[0], pb[0], pc[0]), mxx = Math.max(pa[0], pb[0], pc[0]), mny = Math.min(pa[1], pb[1], pc[1]), mxy = Math.max(pa[1], pb[1], pc[1]);
      if (mxx < -30 || mnx > W + 30 || mxy < -30 || mny > HH + 30) continue;
      const depth = (pa[2] + pb[2] + pc[2]) / 3 + (tr.bias || 0);
      let flash = 0;
      if (L.build != null && !tr.noBuild) {
        const jit = hash(cen[0] * 1.3 + cen[2] * 7.7 + cen[1] * 3.1);
        const at = (tr.build != null ? tr.build : L.build + 0.04 + H.clamp(depth / (L.buildFar || 120)) * 0.42 + jit * 0.12);
        const pr = H.ease.out(H.clamp((L.t - at) / 0.32));
        if (pr <= 0) continue;
        if (pr < 1) { const mx = (pa[0] + pb[0] + pc[0]) / 3, my = (pa[1] + pb[1] + pc[1]) / 3, sq = (p) => [mx + (p[0] - mx) * pr, my + (p[1] - my) * pr, p[2]]; pa = sq(pa); pb = sq(pb); pc = sq(pc); flash = (1 - pr) * 0.7; }
      }
      let col;
      if (tr.emissive) col = tr.col;
      else {
        const lam = Math.max(0, dot(n, SUN));
        let k = tr.terrain ? lam : 0.3 + 0.8 * lam;
        if (tr.terrain && lam > 0) { // damp sun on near-camera slivers (from the reference)
          const e2 = Math.max((pa[0] - pb[0]) ** 2 + (pa[1] - pb[1]) ** 2, (pb[0] - pc[0]) ** 2 + (pb[1] - pc[1]) ** 2, (pc[0] - pa[0]) ** 2 + (pc[1] - pa[1]) ** 2);
          const area2 = Math.abs((pb[0] - pa[0]) * (pc[1] - pa[1]) - (pc[0] - pa[0]) * (pb[1] - pa[1]));
          if (e2 > 8000) k *= H.lerp(0.15, 1, H.smooth(0.06, 0.2, area2 / e2));
        }
        const fill = Math.max(0, dot(n, norm([-0.55, 0.6, -0.6]))) * (tr.terrain ? 0 : 0.35);
        col = [0, 1, 2].map((i) => tr.col[i] * (AMB[i] / 255 * 0.85 + SC[i] / 255 * k * 0.95 + [176, 186, 255][i] / 255 * fill));
        if (tr.glass) { const v = norm(toCam), rf = sub(scl(n, 2 * dot(n, v)), v), sp = Math.pow(Math.max(0, dot(rf, norm([0.4, 0.6, 1]))), 10); col = H.mix(col, [236, 246, 255], sp * 0.7); }
      }
      if (tr.glow) col = H.mix(col, [255, 240, 220], tr.glow);
      const fogK = tr.emissive ? 0 : H.clamp(Math.pow(H.smooth(L.fogNear || 40, L.fogFar || 260, depth), 1.15) * 0.9);
      col = H.mix(col, H.mix(FOG, FOGH, H.clamp(cen[1] / 30)), fogK);
      if (flash) col = H.mix(col, [255, 236, 226], flash);
      out.push({ pa, pb, pc, depth, col });
    }
    out.sort((p, q) => q.depth - p.depth);
    ctx.lineJoin = 'round';
    for (const o of out) {
      const fs = `rgb(${o.col[0] | 0},${o.col[1] | 0},${o.col[2] | 0})`;
      ctx.fillStyle = fs; ctx.strokeStyle = fs; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(o.pa[0], o.pa[1]); ctx.lineTo(o.pb[0], o.pb[1]); ctx.lineTo(o.pc[0], o.pc[1]); ctx.closePath(); ctx.fill(); ctx.stroke();
    }
  }

  // ---------- terrains ----------
  const nz = H.makeNoise(31);
  function terrain(o) {
    const tris = [], jr = H.rng(o.seed || 5), V = [];
    const nx = Math.round((o.x1 - o.x0) / o.cell), nzc = Math.round((o.z1 - o.z0) / o.cell);
    for (let j = 0; j <= nzc; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = o.x0 + i * o.cell + (i > 0 && i < nx ? jr.range(-0.38, 0.38) * o.cell : 0), z = o.z0 + j * o.cell + (j > 0 && j < nzc ? jr.range(-0.38, 0.38) * o.cell : 0); row.push([x, o.h(x, z), z]); } V.push(row); }
    for (let j = 0; j < nzc; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1];
      const faces = (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]];
      for (const f of faces) {
        let n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0]))); if (n[1] < 0) n = scl(n, -1);
        const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cz = (f[0][2] + f[1][2] + f[2][2]) / 3;
        tris.push({ p: f, col: o.col((f[0][1] + f[1][1] + f[2][1]) / 3, 1 - Math.abs(n[1]), cx, cz), terrain: true });
      }
    }
    return tris;
  }
  const meadow = (y, slope) => { let c; if (y < 6) c = H.mix([86, 160, 112], [60, 128, 96], H.clamp(y / 6)); else if (y < 14) c = H.mix([60, 128, 96], [110, 112, 120], H.smooth(9, 14, y)); else if (y < 22) c = [118, 110, 128]; else c = [244, 238, 248]; if (slope > 0.55 && y > 3 && y < 22) c = H.mix(c, [124, 112, 124], 0.6); return c; };
  function trees(tris, n, seed, region, hf, avoid) {
    const tr = H.rng(seed);
    const cone = (base, r, h, col, rot) => { const vs = [add3(base, [0, h, 0])]; for (let i = 0; i < 5; i++) { const a = rot + i / 5 * Math.PI * 2; vs.push(add3(base, [Math.cos(a) * r, 0, Math.sin(a) * r])); } for (let i = 0; i < 5; i++) tris.push({ p: [vs[0], vs[1 + i], vs[1 + (i + 1) % 5]], col, center: add3(base, [0, h * 0.3, 0]) }); };
    for (let k = 0, placed = 0; k < n * 8 && placed < n; k++) {
      const x = tr.range(region[0], region[1]), z = tr.range(region[2], region[3]), y = hf(x, z);
      if (y < 0.3 || y > 12 || (avoid && avoid(x, z))) continue;
      const s = tr.range(1.5, 2.6), g = H.mix([40, 110, 90], [70, 140, 100], tr()), rot = tr() * 6;
      cone([x, y - 0.2, z], s * 0.75, s * 1.6, g, rot); cone([x, y + s * 0.85, z], s * 0.55, s * 1.4, H.mix(g, [120, 180, 120], 0.25), rot + 0.6); placed++;
    }
  }

  // ===== WORLD 1: the cliff (hook + ending) =====
  const ZW = 40;
  const cliffH = (x, z) => { let h = nz.fbm2(x * 0.05, z * 0.05, 3) * 2.2 + Math.pow(Math.abs(x) / 38, 2) * 9 + 0.6; const near = H.smooth(14, 26, Math.abs(x)) + H.smooth(22, 10, z) * 0; return H.lerp(0.5, h, H.clamp(near + H.smooth(30, 0, z))); };
  let CLIFF = null;
  function cliffWorld() {
    if (CLIFF) return CLIFF;
    const tris = terrain({ x0: -70, x1: 70, z0: -70, z1: ZW + 2, cell: 5, seed: 5, h: cliffH, col: meadow });
    trees(tris, 90, 9, [-60, 60, -50, ZW - 4], cliffH, (x, z) => Math.abs(x) < 15 && z > -10);
    // the rock face: a jittered vertical grid facing the camera
    const r = H.rng(12), cell = 4.2, V = [];
    const X0 = -64, X1 = 64, Y1 = 52, nx = Math.round((X1 - X0) / cell), ny = Math.round(Y1 / cell);
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = X0 + i * cell + (i > 0 && i < nx ? r.range(-0.35, 0.35) * cell : 0), y = j * cell + (j > 0 && j < ny ? r.range(-0.35, 0.35) * cell : (j === ny ? r.range(-3, 3) : -1)); row.push([x, y, ZW + nz.fbm2(x * 0.08, y * 0.08, 3) * 3.2 + Math.pow(Math.abs(x) / 64, 2) * -14]); } V.push(row); }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1];
      for (const f of [[a, b, d], [a, d, c]]) {
        const cy = (f[0][1] + f[1][1] + f[2][1]) / 3, k = hash(f[0][0] * 0.7 + cy * 1.9);
        const col = H.mix(H.mix([150, 134, 170], [112, 100, 140], k), [196, 170, 180], H.smooth(30, 50, cy) * 0.5);
        tris.push({ p: f, col, center: [f[0][0], cy, ZW + 30] });
      }
    }
    return (CLIFF = tris);
  }
  const GECKO_ON_WALL = (gx, gy, s) => (p) => [gx + p[0] * s, gy + p[2] * s, ZW - 1.0 - p[1] * s];
  const LIGHT_DUSK = { sun: norm([0.55, 0.6, -0.6]), fog: [236, 160, 150], fogHi: [180, 140, 190], fogNear: 60, fogFar: 240 };
  const SKY_DUSK = [[0, '#1b2350'], [0.3, '#4d3f84'], [0.55, '#c06a93'], [0.75, '#ffb08a'], [1, '#ffb08a']];

  function sceneHook(ctx, t, b0) {
    const KF = [[0, [0, 16, -42], [0, 21, 40]], [2.3, [0, 11, -4], [0, 13, 40]], [4.2, [0, 12, 2], [0, 13.5, 40]], [6.6, [3, 21, 20], [0, 20.5, 40]], [8, [3.2, 21.3, 21], [0, 20.5, 40]]];
    const cam = camAt(KF, t);
    sky(ctx, SKY_DUSK, cam, { off: [-40, 30, 400], r: 70 }, true);
    const tris = cliffWorld().slice();
    place(tris, geckoMesh(), GECKO_ON_WALL(0, 20, 1.2), { build: 0.55 });
    // the weight: drops in on "hold", swings a little on its rope
    const tw = w(0, 'hold') - 0.15, drop = EO(t, tw, tw + 0.45), sw = Math.sin((t - tw) * 3) * 0.4 * Math.exp(-(t - tw) * 0.6) * (t > tw ? 1 : 0);
    const WY = 4.2 + (1 - drop) * 30, WX = sw;
    if (t > tw) { const L = []; cyl(L, [0, 0, 0], [0, 3.6, 0], 3.3, 2.6, 6, [64, 58, 86]); cyl(L, [0, 1.4, 0], [0, 2.2, 0], 3.25, 3.0, 6, [255, 112, 96]); cyl(L, [0, 3.6, 0], [0, 4.2, 0], 1.0, 0.7, 6, [70, 66, 96]); place(tris, L, (p) => [p[0] + WX, p[1] + WY, p[2] + 36.5], { noBuild: true }); }
    renderTris(ctx, tris, cam, Object.assign({ build: b0, t, buildFar: 90 }, LIGHT_DUSK));
    if (t > tw) { // rope
      const a = cam.proj([0, 18.6, ZW - 1.4]), b = cam.proj([WX, WY + 4.2, 36.5]);
      ctx.strokeStyle = '#2a1f4f'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
      const p = cam.proj([WX, WY + 1.8, 34]);
      if (t < 6.3) lpTag(ctx, p[0] + 270, p[1] - 230, '290 lb', { k: back(t, w(0, '290') - 0.15) * (1 - ph(t, 6.0, 6.3)), font: `700 120px ${FONT}`, h: 170 });
      if (t < 6.3) lpTag(ctx, p[0] + 270, p[1] - 90, '≈ 130 kg', { k: back(t, w(0, 'pounds') - 0.1) * (1 - ph(t, 6.0, 6.3)), bg: '#2a1f4f', col: '#fff' });
    }
    // hook headline
    headline(ctx, 'What if YOUR feet', 540, 330, 92, back(t, 0.2, 0.35) * (1 - ph(t, 4.2, 4.5)), { under: false });
    headline(ctx, 'held 290 lb?', 540, 470, 112, back(t, w(0, '290') - 0.15, 0.35) * (1 - ph(t, 4.2, 4.5)));
    // NO GLUE
    if (t > w(0, 'no') - 0.2 && t < 4.6) { const k = back(t, w(0, 'no') - 0.15) * (1 - ph(t, 4.3, 4.6)); lpTag(ctx, 540, 1480, 'NO GLUE', { k, font: `700 96px ${FONT}`, h: 140, bg: '#ff7060', col: '#fff' }); hexBadge(ctx, 780, 1410, 56, false, back(t, w(0, 'glue') - 0.1)); }
    // a gecko's feet can (in theory)
    if (t > w(1, 'geckos') - 0.2) {
      const ft = cam.proj(GECKO_ON_WALL(0, 20, 1.2)([2.75 + 0.8, 0.18, 1.4 + 1.05]));
      lpTag(ctx, 540, 360, "a gecko's feet", { k: back(t, w(1, 'geckos') - 0.15), font: `700 100px ${FONT}`, h: 150, bg: '#2a1f4f', col: '#fff' });
      lpArrow(ctx, [700, 450], [W - 60, ft[1] - 220], [ft[0] + 30, ft[1] - 30], EIO(t, w(1, 'feet') - 0.1, w(1, 'feet') + 0.35), [255, 246, 240], 22);
      lpTag(ctx, 540, 1560, 'in theory', { k: back(t, w(1, 'theory') - 0.15), bg: '#fff6f0' });
      hexBadge(ctx, 790, 520, 52, true, back(t, w(1, 'can') - 0.1));
    }
  }

  // ===== WORLD 2: toe pad macro, a forest of hairs =====
  const padH = (x, z) => 1.6 * Math.pow(0.5 + 0.5 * Math.sin(z * 0.42 + Math.sin(x * 0.05) * 1.2), 2.2) + nz.fbm2(x * 0.1, z * 0.1, 2) * 0.5 - Math.pow(Math.abs(x) / 34, 2) * 6;
  let PAD = null;
  function padWorld() {
    if (PAD) return PAD;
    const tris = terrain({ x0: -40, x1: 40, z0: -10, z1: 120, cell: 2.6, seed: 21, h: padH, col: (y) => H.mix([196, 160, 176], [238, 214, 214], H.clamp((y + 1) / 2.6)) });
    const hairs = [], r = H.rng(33);
    for (let i = 0; i < 300; i++) {
      const x = r.range(-26, 26), z = r.range(4, 110), y = padH(x, z), h = r.range(3.2, 4.6), bend = r.range(-0.8, 0.8), k = r();
      const a = [x, y - 0.2, z], m = [x + bend * 0.4, y + h * 0.6, z + 0.6], e = [x + bend, y + h, z + 1.4];
      const L = []; const col = H.mix([250, 240, 228], [226, 214, 236], k);
      cyl(L, a, m, 0.34, 0.27, 5, col); cyl(L, m, e, 0.27, 0.18, 5, col);
      hairs.push({ L, z, x });
    }
    return (PAD = { tris, hairs });
  }
  function sceneHairs(ctx, t, b0) {
    const KF = [[b0, [0, 14, -26], [0, 0, 30]], [w(2, 'hairs'), [0, 9, -10], [0, 1, 30]], [w(3, 'million'), [0, 6.5, 2], [0, 2, 34]], [SC_T[2] + 0.6, [1, 5.5, 8], [0, 2.5, 40]]];
    const cam = camAt(KF, t);
    sky(ctx, [[0, '#2b1d4a'], [0.5, '#7a4a86'], [1, '#e89aa4']], null);
    bokeh(ctx, 5, [[255, 200, 220], [200, 170, 255], [255, 230, 200]], t);
    const W2 = padWorld(), tris = W2.tris.slice(), th = w(2, 'tiny') - 0.1;
    for (const hr of W2.hairs) { const at = th + (hr.z - 4) / 106 * 0.9 + Math.abs(hr.x) * 0.004; if (t < at) continue; place(tris, hr.L, (p) => p, { build: at }); }
    renderTris(ctx, tris, cam, { build: b0, t, buildFar: 70, sun: norm([0.4, 0.8, -0.4]), sunCol: [255, 236, 226], amb: [120, 100, 150], fog: [232, 160, 176], fogHi: [200, 150, 200], fogNear: 30, fogFar: 120 });
    lpTag(ctx, 540, 380, 'toe pad', { k: back(t, w(2, 'toes') - 0.15) * (1 - ph(t, w(2, 'hairs') + 0.3, w(2, 'hairs') + 0.6)), font: `700 84px ${FONT}`, h: 130, bg: '#2a1f4f', col: '#fff' });
    if (t > w(2, 'tiny') - 0.2) lpTag(ctx, 540, 380, 'tiny hairs', { k: back(t, w(2, 'tiny') - 0.15) * (1 - ph(t, w(3, 'six') - 0.4, w(3, 'six') - 0.15)), font: `700 84px ${FONT}`, h: 130 });
    if (t > w(3, 'six') - 0.2) {
      const u = EIO(t, w(3, 'six') - 0.1, w(3, 'million') + 0.15), n = Math.round(6.5e6 * Math.pow(u, 1.4) / 1000) * 1000;
      const k = back(t, w(3, 'six') - 0.15);
      lpTag(ctx, 540, 400, n.toLocaleString('en-US'), { k, font: `700 128px ${FONT}`, h: 180, bg: u >= 1 ? '#ff7060' : '#fff6f0', col: u >= 1 ? '#fff' : INK });
      lpTag(ctx, 540, 560, 'hairs on ONE gecko', { k: back(t, w(3, 'one') - 0.15), bg: '#2a1f4f', col: '#fff' });
    }
  }

  // ===== WORLD 3: one hair splits into hundreds of tips =====
  let HAIR = null;
  function hairModel() {
    if (HAIR) return HAIR;
    const stalk = [], branches = [], tips = [], col = [248, 238, 226];
    cyl(stalk, [0, -30, 0], [0, 0, 0], 1.0, 0.85, 7, col); cyl(stalk, [0, 0, 0], [0.4, 8, 0.3], 0.85, 0.7, 7, col);
    const r = H.rng(51), top = [0.4, 8, 0.3];
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + r.range(-0.2, 0.2), sp = r.range(2.5, 4.2), e = [top[0] + Math.cos(a) * sp, top[1] + r.range(3.2, 5.2), top[2] + Math.sin(a) * sp];
      const L = []; cyl(L, top, e, 0.45, 0.25, 5, H.mix(col, [220, 210, 240], i / 12)); branches.push({ L, i });
      for (let k = 0; k < 12; k++) { // tiny spatula tips: flat faceted plates on short stems
        const b = r.range(0, Math.PI * 2), q = r.range(0.4, 1.6), tp = [e[0] + Math.cos(b) * q, e[1] + r.range(0.4, 1.4), e[2] + Math.sin(b) * q];
        const T = []; cyl(T, e, tp, 0.08, 0.06, 3, [255, 214, 196]);
        const s = 0.32; tri(T, add3(tp, [-s, 0.05, -s]), add3(tp, [s, 0.08, -s * 0.6]), add3(tp, [0, 0.04, s]), [255, 150, 120], null, { twoSided: true });
        tips.push({ T, i, k });
      }
    }
    return (HAIR = { stalk, branches, tips });
  }
  function sceneTips(ctx, t, b0) {
    const a0 = (t - b0) * 0.28;
    const rr = H.lerp(26, 19, EIO(t, b0, w(4, 'hundreds'))), cy = H.lerp(4, 9, EIO(t, b0, w(4, 'hundreds')));
    const cam = lookCam([Math.sin(a0 - 0.4) * rr, cy + 5, -Math.cos(a0 - 0.4) * rr], [0, cy + 1, 0]);
    sky(ctx, [[0, '#123a4a'], [0.55, '#2f7c84'], [1, '#9be0c8']], null);
    bokeh(ctx, 9, [[180, 255, 230], [200, 230, 255]], t);
    const M = hairModel(), tris = [];
    place(tris, M.stalk, (p) => p);
    const ts = w(4, 'splits') - 0.12, th = w(4, 'hundreds') - 0.15;
    for (const br of M.branches) { const at = ts + br.i * 0.03; if (t < at) continue; const g = EO(t, at, at + 0.35); place(tris, br.L, (p) => [0.4 + (p[0] - 0.4) * g, 8 + (p[1] - 8) * g, 0.3 + (p[2] - 0.3) * g], { noBuild: t > b0 + TRANS }); }
    for (const tp of M.tips) { const at = th + (tp.i * 12 + tp.k) * 0.006; if (t < at) continue; place(tris, tp.T, (p) => p, { build: at }); }
    renderTris(ctx, tris, cam, { build: b0, t, buildFar: 40, sun: norm([0.5, 0.7, -0.5]), sunCol: [255, 240, 230], amb: [110, 130, 150], fog: [120, 200, 200], fogNear: 30, fogFar: 90 });
    lpTag(ctx, 540, 1560, '1 hair', { k: back(t, w(4, 'hair') - 0.15), font: `700 84px ${FONT}`, h: 130, bg: '#2a1f4f', col: '#fff' });
    lpTag(ctx, 540, 340, 'splits', { k: back(t, w(4, 'splits') - 0.12) * (1 - ph(t, th, th + 0.2)), font: `700 84px ${FONT}`, h: 130 });
    if (t > th) { lpTag(ctx, 540, 340, 'HUNDREDS', { k: back(t, th), font: `700 120px ${FONT}`, h: 170, bg: '#ff7060', col: '#fff' }); lpTag(ctx, 540, 500, 'of tinier tips', { k: back(t, w(4, 'tinier') - 0.15) }); }
  }

  // ===== WORLD 4: molecules on the tip meet molecules on the wall =====
  let MOL = null;
  function molWorld() {
    if (MOL) return MOL;
    const wall = [], mols = [];
    const r = H.rng(61), cell = 2.4;
    for (let j = 0; j < 14; j++) for (let i = 0; i < 16; i++) {
      const x = -19 + i * cell, z = -6 + j * cell, a = [x, 0, z], b = [x + cell, 0, z], c = [x, 0, z + cell], d = [x + cell, 0, z + cell];
      const k = r(); wall.push({ p: [a, d, b], col: H.mix([84, 112, 176], [110, 140, 200], k), terrain: true, glass: true }, { p: [a, c, d], col: H.mix([84, 112, 176], [100, 128, 196], r()), terrain: true, glass: true });
    }
    for (let j = 0; j < 8; j++) for (let i = 0; i < 10; i++) { const L = []; const c = [-9.9 + i * 2.2 + (j % 2) * 1.1, 0.55, -1 + j * 2.1]; ico(L, c, 0.62, [120, 190, 240]); mols.push({ L, c, i, j }); }
    return (MOL = { wall, mols });
  }
  function sceneVdw(ctx, t, b0) {
    const ang = -0.5 + (t - b0) * 0.05;
    const cam = lookCam([Math.sin(ang) * 15, H.lerp(9, 5.2, EIO(t, b0, w(5, 'wall'))), -Math.cos(ang) * 15], [0, 2.4, 3]);
    sky(ctx, [[0, '#0e1530'], [0.6, '#283a78'], [1, '#5a5aa8']], null);
    bokeh(ctx, 13, [[140, 180, 255], [255, 160, 200]], t);
    const M = molWorld(), tris = M.wall.slice();
    const gl = EO(t, w(6, 'molecules') - 0.15, w(6, 'molecules') + 0.3);
    for (const m of M.mols) place(tris, m.L, (p) => p, { glow: gl * 0.35 * (0.6 + 0.4 * Math.sin(t * 6 + m.i + m.j)) });
    // the spatula: a broad flat faceted plate on a stem, descending toward the wall, then pulled the last bit in
    const yD = H.lerp(10, 3.4, EIO(t, b0 + 0.2, w(5, 'close') + 0.2)), yP = H.lerp(0, -1.1, EO(t, w(6, 'pull') - 0.1, w(6, 'pull') + 0.25)), Y = yD + yP;
    const S = []; box(S, [0, Y, 3], [6.6, 0.45, 4.4], [255, 168, 140]); cyl(S, [0, Y + 0.4, 3], [0.6, Y + 14, 4], 1.2, 0.9, 6, [255, 214, 196]);
    for (let j = 0; j < 4; j++) for (let i = 0; i < 6; i++) ico(S, [-5.5 + i * 2.2, Y - 0.85, 0 + j * 2.0], 0.55, [255, 120, 100]);
    place(tris, S, (p) => p, { glow: gl * 0.2 });
    renderTris(ctx, tris, cam, { build: b0, t, buildFar: 30, sun: norm([0.4, 0.8, -0.5]), sunCol: [255, 236, 226], amb: [100, 110, 170], fog: [60, 70, 140], fogNear: 18, fogFar: 60 });
    // pull arrows between the two molecule layers
    if (t > w(6, 'pull') - 0.15) {
      for (let i = 0; i < 6; i += 1) {
        const x = -5.5 + i * 2.2, a = cam.proj([x, Y - 1.3, 1.0]), b = cam.proj([x, 1.3, 1.0]);
        const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        lpArrow(ctx, a, mid, [H.lerp(a[0], b[0], 0.5), H.lerp(a[1], b[1], 0.5)], EO(t, w(6, 'pull') - 0.1 + i * 0.04, w(6, 'pull') + 0.25), [255, 246, 240], 12);
        lpArrow(ctx, b, mid, [H.lerp(b[0], a[0], 0.5), H.lerp(b[1], a[1], 0.5)], EO(t, w(6, 'pull') - 0.1 + i * 0.04, w(6, 'pull') + 0.25), [255, 246, 240], 12);
      }
    }
    const pw = cam.proj([7, 0.2, -4]);
    lpTag(ctx, Math.min(900, Math.max(180, pw[0])), Math.min(1600, pw[1] + 90), 'wall', { k: back(t, w(5, 'wall') - 0.15) * (1 - ph(t, w(7, 'van') - 0.4, w(7, 'van') - 0.2)), font: `700 64px ${FONT}`, h: 104, bg: '#c8d8ff' });
    lpTag(ctx, 540, 360, 'tip', { k: back(t, w(5, 'tips') - 0.15) * (1 - ph(t, w(5, 'close') + 0.3, w(5, 'close') + 0.55)), font: `700 84px ${FONT}`, h: 130, bg: '#ffd8cc' });
    if (t > w(5, 'close') - 0.2 && t < w(6, 'molecules') - 0.1) lpTag(ctx, 540, 360, 'SO close', { k: back(t, w(5, 'close') - 0.15), font: `700 96px ${FONT}`, h: 140 });
    if (t > w(6, 'molecules') - 0.2 && t < w(7, 'van') - 0.15) lpTag(ctx, 540, 360, 'molecules', { k: back(t, w(6, 'molecules') - 0.15), font: `700 96px ${FONT}`, h: 140, bg: '#2a1f4f', col: '#fff' });
    if (t > w(6, 'pull') - 0.2 && t < w(7, 'van') - 0.15) lpTag(ctx, 540, 1540, 'pull together', { k: back(t, w(6, 'pull') - 0.15), font: `700 80px ${FONT}`, h: 124, bg: '#ff7060', col: '#fff' });
    if (t > w(7, 'van') - 0.2) { headline(ctx, 'VAN DER WAALS', 540, 380, 104, back(t, w(7, 'van') - 0.15, 0.35)); lpTag(ctx, 540, 1540, 'force', { k: back(t, w(7, 'force') - 0.15), font: `700 96px ${FONT}`, h: 140, bg: '#ff7060', col: '#fff' }); }
  }

  // ===== WORLD 5: one weak hair, then millions hold the slab =====
  let PLAT = null;
  function platWorld() {
    if (PLAT) return PLAT;
    const hF = (x, z) => { const d = Math.hypot(x, z - 10); return H.lerp(0, nz.fbm2(x * 0.06, z * 0.06, 3) * 6 + Math.pow(d / 30, 2) * 8 - 1, H.smooth(14, 24, d)); };
    const tris = terrain({ x0: -60, x1: 60, z0: -40, z1: 90, cell: 4.2, seed: 41, h: hF, col: (y) => H.mix([214, 168, 196], [140, 110, 170], H.clamp(y / 10)) });
    const hairs = []; const r = H.rng(71);
    for (let j = 0; j < 13; j++) for (let i = 0; i < 13; i++) { const x = -9 + i * 1.5 + r.range(-0.2, 0.2), z = 1 + j * 1.5 + r.range(-0.2, 0.2); if (Math.abs(x) < 0.5 && Math.abs(z - 10) < 0.5) continue; const L = []; cyl(L, [x, 0, z], [x, 3.2, z], 0.24, 0.18, 5, H.mix([250, 240, 228], [220, 212, 240], r())); hairs.push({ L, d: Math.hypot(x, z - 10) }); }
    return (PLAT = { tris, hairs });
  }
  function sceneMany(ctx, t, b0) {
    const tm = w(9, 'millions');
    const KF = [[b0, [2, 4.2, 1], [0, 2.4, 10]], [tm - 0.1, [2.5, 4.6, 0], [0, 2.4, 10]], [tm + 1.2, [5, 15, -18], [0, 2, 10]], [SC_T[5] + 0.6, [6, 16, -20], [0, 2, 10]]];
    const cam = camAt(KF, t);
    sky(ctx, [[0, '#3a2a6a'], [0.45, '#9a5a9a'], [0.8, '#ffc49a'], [1, '#ffd8b0']], cam, { off: [30, 10, 300], r: 60 });
    const P = platWorld(), tris = P.tris.slice();
    // the one hair + its tiny weight (wobbles when "weak")
    const wob = Math.sin(t * 22) * 0.25 * ph(t, w(8, 'weak') - 0.1, w(8, 'weak')) * (1 - ph(t, tm, tm + 0.3));
    const L1 = []; cyl(L1, [0, 0, 10], [wob, 3.2, 10], 0.24, 0.18, 5, [255, 240, 228]); box(L1, [wob, 3.55, 10], [0.35, 0.35, 0.35], [86, 82, 112]);
    place(tris, L1, (p) => p);
    for (const hr of P.hairs) { const at = tm - 0.1 + hr.d * 0.05; if (t < at) continue; place(tris, hr.L, (p) => p, { build: at }); }
    // the big slab lands on "mighty"
    const tsl = w(9, 'together') - 0.1, land = EO(t, tsl, w(9, 'mighty') - 0.05);
    if (t > tsl) { const S = []; box(S, [0, 3.95 + (1 - land) * 18, 10], [10, 0.7, 10], [86, 82, 112]); box(S, [0, 5.0 + (1 - land) * 18, 10], [6, 0.4, 6], [104, 98, 132]); place(tris, S, (p) => p, { noBuild: true }); }
    renderTris(ctx, tris, cam, { build: b0, t, buildFar: 40, sun: norm([0.5, 0.65, -0.55]), fog: [240, 176, 160], fogHi: [190, 150, 200], fogNear: 40, fogFar: 160 });
    const p1 = cam.proj([0, 4.6, 10]);
    if (t < tm + 0.2) {
      lpTag(ctx, 540, 380, '1 hair', { k: back(t, w(8, 'hair') - 0.15) * (1 - ph(t, tm - 0.1, tm + 0.15)), font: `700 96px ${FONT}`, h: 140, bg: '#2a1f4f', col: '#fff' });
      lpTag(ctx, p1[0], Math.max(560, p1[1] - 200), 'weak', { k: back(t, w(8, 'weak') - 0.15) * (1 - ph(t, tm - 0.1, tm + 0.15)), font: `700 80px ${FONT}`, h: 124, bg: '#ffe0da', col: '#c2382a' });
    }
    if (t > tm - 0.2) lpTag(ctx, 540, 380, 'MILLIONS', { k: back(t, tm - 0.15), font: `700 120px ${FONT}`, h: 170, bg: '#fff6f0' });
    if (t > w(9, 'mighty') - 0.2) { lpTag(ctx, 540, 1520, 'MIGHTY', { k: back(t, w(9, 'mighty') - 0.15), font: `700 120px ${FONT}`, h: 170, bg: '#ff7060', col: '#fff' }); hexBadge(ctx, 820, 1440, 56, true, back(t, w(9, 'mighty') - 0.05)); }
  }

  // ===== WORLD 6: the toe peels up from the tip like tape =====
  function scenePeel(ctx, t, b0) {
    const cam = lookCam([H.lerp(-3, 0, ph(t, b0, SC_T[6])), 7, -21], [-1.5, 2.8, 0]);
    sky(ctx, [[0, '#1f2a55'], [0.6, '#56609e'], [1, '#c39ad0']], null);
    bokeh(ctx, 17, [[200, 220, 255], [255, 210, 230]], t);
    const tris = [];
    const r = H.rng(81);
    for (let j = 0; j < 10; j++) for (let i = 0; i < 14; i++) { const x = -16 + i * 2.8, z = -10 + j * 2.8, a = [x, 0, z], b = [x + 2.8, 0, z], c = [x, 0, z + 2.8], d = [x + 2.8, 0, z + 2.8]; tris.push({ p: [a, d, b], col: H.mix([150, 190, 230], [120, 160, 214], r()), terrain: true, glass: true }, { p: [a, c, d], col: H.mix([150, 190, 230], [130, 170, 220], r()), terrain: true, glass: true }); }
    // toe = chain of 6 segments; joints bend up starting at the tip
    const curl = EIO(t, w(10, 'peels') - 0.15, w(10, 'up') + 0.3) * (1 - 0.0);
    let pos = [-7, 0.9, 0], ang = 0;
    const segL = 2.3;
    const ft = []; box(ft, [-9.5, 1.3, 0], [2.8, 1.3, 2.2], GK.body); ellipsoid(ft, [-12, 2.4, 0], [3.2, 2.4, 2.8], GK.dark, 8, 5); place(tris, ft, (p) => p);
    for (let i = 0; i < 6; i++) {
      const bend = 0.62 * H.clamp(curl * 6 - (5 - i)); ang += i === 0 ? 0 : bend;
      const dir = [Math.cos(ang), Math.sin(ang), 0], c = add3(pos, scl(dir, segL / 2));
      const S = [];
      box(S, [0, 0, 0], [segL / 2 + 0.05, 0.7 - i * 0.04, 1.5 - i * 0.07], i % 2 ? GK.body : GK.dark);
      box(S, [0, -0.78, 0], [segL / 2 - 0.1, 0.12, 1.3 - i * 0.06], GK.pad); // the sticky pad (lamella) under each segment
      const ca = Math.cos(ang), sa = Math.sin(ang);
      place(tris, S, (p) => [c[0] + p[0] * ca - p[1] * sa, c[1] + p[0] * sa + p[1] * ca, c[2] + p[2]]);
      pos = add3(pos, scl(dir, segL));
    }
    renderTris(ctx, tris, cam, { build: b0, t, buildFar: 30, sun: norm([0.3, 0.8, -0.5]), sunCol: [255, 236, 226], amb: [110, 110, 170], fog: [150, 140, 200], fogNear: 20, fogFar: 70 });
    lpTag(ctx, 540, 360, 'to let go...', { k: back(t, w(10, 'let') - 0.15) * (1 - ph(t, w(10, 'peels') - 0.3, w(10, 'peels') - 0.1)), font: `700 84px ${FONT}`, h: 130, bg: '#2a1f4f', col: '#fff' });
    if (t > w(10, 'peels') - 0.2) {
      headline(ctx, 'PEEL', 540, 400, 130, back(t, w(10, 'peels') - 0.15, 0.35));
      const tip = cam.proj(pos), base = cam.proj([3, 1.2, 0]);
      lpArrow(ctx, [base[0] + 40, base[1] + 60], [tip[0] + 220, base[1] + 40], [tip[0] + 60, tip[1] + 20], EIO(t, w(10, 'toes') - 0.1, w(10, 'up') + 0.2), [255, 112, 96], 22);
    }
    lpTag(ctx, 540, 1540, 'like tape', { k: back(t, w(11, 'tape') - 0.15), font: `700 96px ${FONT}`, h: 140, bg: '#fff6f0' });
    const pw = cam.proj([12, 0, -6]); lpTag(ctx, Math.min(930, pw[0]), Math.min(1620, pw[1]), 'wall', { k: back(t, b0 + 0.4) * (1 - ph(t, w(11, 'tape') - 0.4, w(11, 'tape') - 0.2)), font: `700 56px ${FONT}`, h: 92, bg: '#c8d8ff' });
  }

  // ===== WORLD 7: scale it up to you =====
  const STUDIO = (b0) => { const tris = []; const r = H.rng(91); for (let i = 0; i < 9; i++) { const a0 = i / 9 * Math.PI * 2, a1 = (i + 1) / 9 * Math.PI * 2; tris.push({ p: [[0, 0, 0], [Math.cos(a1) * 9, 0, Math.sin(a1) * 9], [Math.cos(a0) * 9, 0, Math.sin(a0) * 9]], col: H.mix([120, 104, 170], [150, 130, 190], r()), terrain: true }); tris.push({ p: [[Math.cos(a0) * 9, 0, Math.sin(a0) * 9], [Math.cos(a1) * 9, 0, Math.sin(a1) * 9], [Math.cos(a1) * 9, -1.4, Math.sin(a1) * 9]], col: [96, 84, 140], center: [0, -0.7, 0] }); tris.push({ p: [[Math.cos(a0) * 9, 0, Math.sin(a0) * 9], [Math.cos(a1) * 9, -1.4, Math.sin(a1) * 9], [Math.cos(a0) * 9, -1.4, Math.sin(a0) * 9]], col: [96, 84, 140], center: [0, -0.7, 0] }); } return tris; };
  function sceneYou(ctx, t, b0) {
    const KF = [[b0, [6, 4, -12], [3, 1.5, 0]], [w(12, 'you') - 0.1, [4, 10, -30], [0, 8.6, 0]], [w(14, 'about'), [3, 10, -29], [0, 8.6, 0]], [SC_T[7] + 0.6, [-2, 10, -28], [0, 8.6, 0]]];
    const cam = camAt(KF, t);
    sky(ctx, [[0, '#24204e'], [0.55, '#6a4c8e'], [1, '#e7a0a0']], null);
    bokeh(ctx, 23, [[255, 210, 200], [200, 180, 255]], t);
    const tris = STUDIO(b0);
    place(tris, geckoMesh(), (p) => { const q = rotY(p, -0.7); return [4 + q[0] * 0.24, q[1] * 0.24, -2.5 + q[2] * 0.24]; });
    const tStick = w(13, 'sticky') - 0.15, tF = w(13, 'forty') - 0.1, tE = w(14, 'eighty') - 0.15;
    const frac = H.lerp(0, 0.4, EIO(t, tStick, tF + 0.1)), front = t >= tE, fracF = H.lerp(0, 0.8, EIO(t, tE, tE + 0.5));
    const yaw = 0.18 * Math.sin((t - b0) * 0.6);
    const hb = w(12, 'scale') - 0.1;
    const HU = humanMesh().map((tr) => { const st = front ? (tr.front && tr.rankFront < fracF) : tr.rankBody < frac; return st ? Object.assign({}, tr, { col: STICKY }) : tr; });
    place(tris, HU, (p) => rotY(p, yaw), { build: undefined });
    renderTris(ctx, tris.map((tr) => (tr.human ? Object.assign({}, tr, { build: hb + tr.p[0][1] / 18 * 0.5 }) : tr)), cam, { build: b0, t, buildFar: 30, sun: norm([0.4, 0.7, -0.6]), sunCol: [255, 232, 216], amb: [110, 100, 160], fog: [200, 150, 190], fogNear: 40, fogFar: 120 });
    const g = cam.proj([4, 2.2, -2.5]);
    lpTag(ctx, g[0] + 60, g[1] - 70, 'gecko', { k: back(t, b0 + 0.3) * (1 - ph(t, w(13, 'sticky') - 0.3, w(13, 'sticky'))), font: `700 56px ${FONT}`, h: 92 });
    if (t > w(12, 'you') - 0.2 && t < tStick) lpTag(ctx, 540, 330, 'YOU', { k: back(t, w(12, 'you') - 0.15), font: `700 130px ${FONT}`, h: 180, bg: '#2a1f4f', col: '#fff' });
    if (t > tStick - 0.05 && t < tE) {
      lpTag(ctx, 540, 330, 'sticky pads', { k: back(t, tStick), font: `700 84px ${FONT}`, h: 130, bg: '#ff7060', col: '#fff' });
      if (t > tF - 0.05) { lpTag(ctx, 830, 760, '40%', { k: back(t, tF), font: `700 140px ${FONT}`, h: 190 }); lpTag(ctx, 830, 920, 'of your body', { k: back(t, w(13, 'body') - 0.15), bg: '#2a1f4f', col: '#fff' }); }
    }
    if (t >= tE - 0.05) {
      lpTag(ctx, 540, 330, '80%', { k: back(t, tE), font: `700 150px ${FONT}`, h: 200, bg: '#ff7060', col: '#fff' });
      lpTag(ctx, 540, 500, 'of your front', { k: back(t, w(14, 'front') - 0.15), bg: '#2a1f4f', col: '#fff' });
    }
  }

  // ===== WORLD 8: the shoes =====
  function sceneShoe(ctx, t, b0) {
    const KF = [[b0, [-8, 6, -18], [1, 4, 0]], [w(15, 'size') + 0.3, [-10, 8, -22], [1, 5, 0]], [SC_T[8] + 0.6, [-11, 8.5, -23], [1, 5, 0]]];
    const cam = camAt(KF, t);
    sky(ctx, [[0, '#1d2b4d'], [0.55, '#3f6f8e'], [1, '#f2c49a']], null);
    bokeh(ctx, 29, [[255, 230, 200], [180, 230, 255]], t);
    const tris = STUDIO(b0);
    place(tris, humanMesh(), (p) => { const q = rotY(p, 0.5); return [-5 + q[0] * 0.75, q[1] * 0.75, 1 + q[2] * 0.75]; });
    const g = EO(t, w(15, 'size') - 0.15, w(15, 'fourteen') + 0.2), s = H.lerp(0.33, 1.55, g);
    place(tris, shoeMesh(), (p) => { const q = rotY(p, -1.25); return [4.5 + q[0] * s, q[1] * s, 1 + q[2] * s]; });
    renderTris(ctx, tris, cam, { build: b0, t, buildFar: 40, sun: norm([0.45, 0.7, -0.55]), sunCol: [255, 236, 220], amb: [100, 110, 160], fog: [160, 160, 200], fogNear: 40, fogFar: 130 });
    lpTag(ctx, 540, 340, 'your shoes?', { k: back(t, w(15, 'shoes') - 0.15) * (1 - ph(t, w(15, 'us') - 0.3, w(15, 'us') - 0.1)), font: `700 96px ${FONT}`, h: 140, bg: '#2a1f4f', col: '#fff' });
    if (t > w(15, 'us') - 0.2) {
      const n = Math.round(H.lerp(10, 114, EIO(t, w(15, 'one') - 0.1, w(15, 'fourteen') + 0.1)));
      lpTag(ctx, 540, 360, `US size ${n}`, { k: back(t, w(15, 'us') - 0.15), font: `700 120px ${FONT}`, h: 170, bg: n >= 114 ? '#ff7060' : '#fff6f0', col: n >= 114 ? '#fff' : INK });
      lpTag(ctx, 540, 1560, 'EU 145', { k: back(t, w(15, 'fourteen')), font: `700 72px ${FONT}`, h: 116, bg: '#2a1f4f', col: '#fff' });
    }
  }

  // ===== WORLD 9: the size limit (pillars on a plateau, from the reference's chart beat) =====
  let VAL = null;
  function valleyWorld() {
    if (VAL) return VAL;
    const hF = (x, z) => { const valley = Math.pow(Math.abs(x - 4 * Math.sin(z * 0.035)) / 55, 1.7) * 22, far = H.smooth(110, 200, z) * 18; let h = nz.fbm2(x * 0.045 + 9, z * 0.045, 4) * 7 + valley + far - 3; const dq = Math.hypot((x) / 1.8, z - 40); return H.lerp(4.5, h, H.smooth(10, 20, dq)); };
    const tris = terrain({ x0: -110, x1: 120, z0: -20, z1: 220, cell: 5, seed: 7, h: hF, col: meadow });
    trees(tris, 160, 13, [-80, 90, 0, 170], hF, (x, z) => Math.hypot(x / 1.8, z - 40) < 22);
    return (VAL = tris);
  }
  const PILLARS = [['mite', 1.2, [150, 170, 250]], ['spider', 3.0, [140, 200, 240]], ['tree frog', 5.6, [110, 225, 190]], ['gecko', 9, [255, 120, 100]], ['you', 16, [180, 170, 200]]];
  function sceneLimit(ctx, t, b0) {
    const KF = [[b0, [-9, 17, 6], [0, 10, 40]], [w(16, 'biggest'), [-6, 16, 8], [0, 11, 40]], [SC_T[9] + 0.6, [-5, 16, 9], [0, 11.5, 40]]];
    const cam = camAt(KF, t);
    sky(ctx, [[0, '#1b2350'], [0.35, '#3f5a9a'], [0.7, '#e08aa0'], [1, '#ffc49a']], cam, { off: [60, 25, 400], r: 70 }, true);
    const tris = valleyWorld().slice();
    PILLARS.forEach(([, hgt, col], i) => {
      const at = b0 + 0.35 + i * 0.22, g = EO(t, at, at + 0.45); if (g <= 0) return;
      const L = []; cyl(L, [0, 4.5, 0], [0, 4.5 + hgt * g, 0], 1.7, 1.7, 5, col, null, 0.2);
      place(tris, L, (p) => [p[0] - 10 + i * 5.5, p[1], p[2] + 38 + i * 1.2], { noBuild: true, glow: i === 3 ? 0.25 * ph(t, w(16, 'biggest') - 0.1, w(16, 'biggest') + 0.2) : 0 });
    });
    renderTris(ctx, tris, cam, Object.assign({ build: b0, t, buildFar: 120 }, LIGHT_DUSK, { fogNear: 70, fogFar: 260 }));
    // size-limit line at the gecko's height
    const lk = EIO(t, w(16, 'biggest') - 0.15, w(16, 'animals'));
    if (lk > 0) { const a = cam.proj([-18, 13.5, 38]), b = cam.proj([H.lerp(-18, 18, lk), 13.5, 38 + 6 * lk]); ctx.save(); ctx.setLineDash([26, 16]); ctx.strokeStyle = '#ff5a4a'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); ctx.restore(); }
    PILLARS.forEach(([name, hgt], i) => {
      const at = b0 + 0.45 + i * 0.22, p = cam.proj([-10 + i * 5.5, 4.5 + hgt + 1.6, 38 + i * 1.2]);
      lpTag(ctx, p[0], p[1] - 34, name, { k: back(t, at) * 0.9, font: `700 48px ${FONT}`, h: 84, bg: i === 3 ? '#ff7060' : i === 4 ? '#2a1f4f' : '#fff6f0', col: i === 3 || i === 4 ? '#fff' : INK });
      if (i === 4) hexBadge(ctx, p[0] + 110, p[1] - 34, 44, false, back(t, w(16, 'can') - 0.15));
    });
    headline(ctx, 'SIZE LIMIT', 540, 380, 120, back(t, w(16, 'biggest') - 0.15, 0.35));
    lpTag(ctx, 540, 1560, 'sticky feet stop working', { k: back(t, w(16, 'do') - 0.2), font: `700 56px ${FONT}`, h: 92, bg: '#2a1f4f', col: '#fff' });
  }

  // ===== WORLD 10: back at the cliff — would you trade? =====
  function sceneEnd(ctx, t, b0) {
    const cam = camAt([[b0, [-10, 8, 4], [-3, 13.5, 40]], [DURATION, [-7, 10, 10], [-2, 14.5, 40]]], t);
    sky(ctx, SKY_DUSK, cam, { off: [-40, 30, 400], r: 70 }, true);
    const tris = cliffWorld().slice();
    place(tris, geckoMesh(), GECKO_ON_WALL(0, 20, 1.2));
    place(tris, humanMesh(), (p) => { const q = rotY(p, 2.5); return [-9 + q[0] * 0.5, 0.5 + q[1] * 0.5, 31 + q[2] * 0.5]; });
    renderTris(ctx, tris, cam, Object.assign({ build: b0, t, buildFar: 70 }, LIGHT_DUSK));
    headline(ctx, 'Would you', 540, 290, 104, back(t, w(17, 'would') - 0.15, 0.35), { under: false });
    headline(ctx, 'TRADE?', 540, 520, 140, back(t, w(17, 'trade') - 0.15, 0.35));
    const hp = cam.proj([-9, 9.5, 31]), gp = cam.proj([0, 20, ZW - 2]);
    lpTag(ctx, Math.max(200, hp[0]), Math.min(1600, hp[1] + 80), 'your feet', { k: back(t, w(17, 'your') - 0.15), font: `700 56px ${FONT}`, h: 92, bg: '#2a1f4f', col: '#fff' });
    lpTag(ctx, Math.min(860, gp[0] + 150), gp[1] - 60, 'gecko feet', { k: back(t, w(17, 'gecko') - 0.15), font: `700 56px ${FONT}`, h: 92, bg: '#ff7060', col: '#fff' });
    const pk = back(t, w(17, 'feet', 2) + 0.15);
    lpTag(ctx, 540, 1600, 'tell me in the comments', { k: pk, font: `700 52px ${FONT}`, h: 92 });
  }

  const scenes = [sceneHook, sceneHairs, sceneTips, sceneVdw, sceneMany, scenePeel, sceneYou, sceneShoe, sceneLimit, sceneEnd];
  function explainer(ctx, W_, H_, t) {
    let i = 0; for (let j = 0; j < SC_T.length; j++) if (t >= SC_T[j]) i = j;
    if (i > 0 && t < SC_T[i] + TRANS) {
      scenes[i - 1](ctx, t, SC_T[i - 1]);
      // the new scene's backdrop fades in over the old frame, then its facets flip in from the camera outward
      const a = H.ease.out(ph(t, SC_T[i], SC_T[i] + 0.3)), lay = layer(), lc = lay.getContext('2d');
      lc.setTransform(1, 0, 0, 1, 0, 0); lc.globalAlpha = 1; lc.clearRect(0, 0, W, HH); scenes[i](lc, t, SC_T[i]);
      ctx.save(); ctx.globalAlpha = a; ctx.drawImage(lay, 0, 0); ctx.restore();
    } else scenes[i](ctx, t, SC_T[i]);
  }
  let LAY = null; const layer = () => (LAY || (LAY = H.layer(W, HH)));

  // ---------- sound: soft wind, faceted tag knocks, glassy hits (from the reference's lpSound grammar) ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const Fq = k.hz(f); k.tone(t, { f: Fq, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: Fq * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g, p = 0, minor = true) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const gust = (t0, t1, g = 1) => { const d = t1 - t0, steps = [260, 420, 610, 470, 300]; steps.forEach((f, i) => { const s = t0 + (d * i) / steps.length, dd = (d / steps.length) * 1.9; k.noise(s, { dur: dd, color: 'pink', filter: 'bandpass', f: [[0, f], [dd, f * 1.25]], q: 1.4, gain: 0.05 * g * Math.sin(((i + 0.5) / steps.length) * Math.PI), a: dd * 0.45, verb: 0.15 }); }); };
    const build = (t0) => { const r = H.rng('b' + t0); for (let i = 0; i < 9; i++) k.play('tick', t0 + 0.05 + i * 0.05 + r() * 0.02, { f: 2600 + r() * 2400, gain: 0.35, minor: true }); k.play('swish', t0, { gain: 0.35 }); };
    SC_T.slice(1).forEach((s) => { build(s); gust(s - 0.1, s + 0.9, 0.9); });
    gust(0, 2.4, 1.2); gust(4.2, 6.8, 0.8);
    // hook
    facet(0.2, 520, 1, 0, false); facet(1.2, 600, 0.6);
    k.play('whoosh', w(0, 'hold') - 0.15, { dur: 0.45, gain: 0.4 }); k.play('impact', w(0, 'hold') + 0.28, { gain: 0.45 });
    glass(w(0, '290') - 0.12, 'E5', 1.2, 0, 1.0, false); facet(w(0, 'pounds') - 0.1, 700, 0.7);
    k.play('stamp', w(0, 'no') - 0.12, { gain: 0.5 }); k.play('error', w(0, 'glue') - 0.08, { f: 'A3', gain: 0.25 });
    facet(w(1, 'geckos') - 0.12, 560, 1, 0, false); k.play('swish', w(1, 'feet') - 0.1, { gain: 0.35 }); k.play('success', w(1, 'can') - 0.08, { f: 'C6', gain: 0.35 }); facet(w(1, 'theory') - 0.12, 760, 0.7);
    // hairs
    facet(w(2, 'toes') - 0.12, 520, 0.9, 0, false);
    for (let i = 0; i < 18; i++) facet(w(2, 'tiny') - 0.1 + i * 0.05, 900 + (i % 5) * 120, 0.35, (i % 3 - 1) * 0.4);
    for (let i = 0; i < 14; i++) k.play('count', w(3, 'six') - 0.1 + i * 0.07, { gain: 0.4, minor: true });
    glass(w(3, 'million') + 0.15, 'G5', 1.2, 0, 1.1, false); facet(w(3, 'one') - 0.12, 640, 0.7);
    // tips
    facet(w(4, 'hair') - 0.12, 560, 0.8, 0, false); k.play('riser', w(4, 'splits') - 0.3, { dur: 0.5, gain: 0.3 });
    for (let i = 0; i < 12; i++) glass(w(4, 'splits') - 0.12 + i * 0.03, ['C6', 'E6', 'G6'][i % 3], 0.35, (i % 2 ? 0.3 : -0.3), 0.4, true);
    k.play('sparkle', w(4, 'hundreds') - 0.12, { n: 9, gain: 0.5 }); glass(w(4, 'hundreds') - 0.1, 'C6', 1.1, 0, 1.0, false); facet(w(4, 'tinier') - 0.12, 700, 0.6);
    // vdw
    facet(w(5, 'tips') - 0.12, 600, 0.7); k.play('whoosh', w(5, 'close') - 0.3, { dur: 0.5, gain: 0.3 }); facet(w(5, 'close') - 0.12, 520, 0.9, 0, false); facet(w(5, 'wall') - 0.12, 420, 0.7);
    k.play('sparkle', w(6, 'molecules') - 0.12, { n: 6, gain: 0.45 }); glass(w(6, 'molecules') - 0.1, 'A5', 0.8, 0, 0.8, false);
    k.play('thud', w(6, 'pull') + 0.12, { f: 120, gain: 0.5 }); glass(w(6, 'together') - 0.1, 'E6', 0.8, 0, 0.8, false);
    k.play('impact', w(7, 'van') - 0.12, { gain: 0.45 }); glass(w(7, 'van') - 0.1, 'C5', 1.3, 0, 1.4, false); facet(w(7, 'force') - 0.12, 640, 0.9, 0, false);
    // many
    facet(w(8, 'hair') - 0.12, 600, 0.8, 0, false); k.play('error', w(8, 'weak') - 0.08, { f: 'C4', gain: 0.18 });
    for (let i = 0; i < 20; i++) facet(w(9, 'millions') - 0.1 + i * 0.045, 800 + (i % 4) * 150, 0.3, (i % 3 - 1) * 0.5);
    k.play('whoosh', w(9, 'together') - 0.1, { dur: 0.6, gain: 0.35 }); k.play('impact', w(9, 'mighty') - 0.06, { gain: 0.6 }); k.play('success', w(9, 'mighty') + 0.05, { f: 'C6', gain: 0.4 });
    // peel
    facet(w(10, 'let') - 0.12, 560, 0.7); k.play('tape', w(10, 'peels') - 0.1, { dur: 0.9, gain: 0.55 }); facet(w(10, 'peels') - 0.12, 500, 0.9, 0, false);
    k.play('tape', w(11, 'tape') - 0.12, { dur: 0.4, gain: 0.4 }); facet(w(11, 'tape') - 0.12, 700, 0.7);
    // you
    k.play('riser', w(12, 'scale') - 0.2, { dur: 0.9, gain: 0.3 }); facet(w(12, 'you') - 0.12, 480, 1, 0, false);
    for (let i = 0; i < 10; i++) facet(w(13, 'sticky') - 0.1 + i * 0.08, 900 + i * 40, 0.3);
    glass(w(13, 'forty') - 0.1, 'E5', 1.1, 0.2, 1.0, false); facet(w(13, 'body') - 0.12, 640, 0.6);
    k.play('swish', w(14, 'eighty') - 0.2, { gain: 0.4 }); glass(w(14, 'eighty') - 0.1, 'G5', 1.1, 0, 1.0, false); facet(w(14, 'front') - 0.12, 680, 0.6);
    // shoe
    facet(w(15, 'shoes') - 0.12, 520, 0.9, 0, false); k.play('riser', w(15, 'size') - 0.15, { dur: 1.2, gain: 0.35 });
    for (let i = 0; i < 12; i++) k.play('count', w(15, 'one') - 0.1 + i * 0.07, { gain: 0.4, minor: true });
    k.play('impact', w(15, 'fourteen') + 0.05, { gain: 0.5 }); glass(w(15, 'fourteen') + 0.05, 'C6', 1.0, 0, 1.0, false);
    // limit
    for (let i = 0; i < 5; i++) facet(SC_T[8] + 0.35 + i * 0.22, 500 + i * 90, 0.7);
    k.play('stamp', w(16, 'biggest') - 0.12, { gain: 0.5 }); glass(w(16, 'biggest') - 0.1, 'A5', 1.0, 0, 1.0, false); k.play('error', w(16, 'can') - 0.1, { f: 'A3', gain: 0.2 });
    // end
    facet(w(17, 'would') - 0.12, 560, 0.9, 0, false); glass(w(17, 'trade') - 0.1, 'E6', 1.0, 0, 1.0, false); facet(w(17, 'your') - 0.12, 640, 0.6); facet(w(17, 'gecko') - 0.12, 720, 0.6);
    k.play('success', w(17, 'feet', 2) + 0.15, { f: 'C6', gain: 0.4 }); k.play('sparkle', w(17, 'feet', 2) + 0.15, { n: 7, gain: 0.5 });
  }

  function thumbnail(ctx) { sceneHook(ctx, 3.2, 0); }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
