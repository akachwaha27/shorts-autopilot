// ================= Low-Poly Faceted, vertical 1080x1920: "Why don't koalas eat anything but eucalyptus?" =================
(function () {
  const W = 1080, HH = 1920, F = 1250;
  // ---------- BEATS: one per phrase, exact times from phrases.json ----------
  const BEATS = [{"s":0.25,"e":3.23,"text":"Koalas eat poison leaves you'd never survive.","words":[["koalas",0.25],["eat",0.73],["poison",0.97],["leaves",1.46],["youd",1.94],["never",2.26],["survive",2.66]]},{"s":3.78,"e":5.5,"text":"So why only eucalyptus?","words":[["so",3.78],["why",3.96],["only",4.23],["eucalyptus",4.6]]},{"s":6.05,"e":7.73,"text":"Eucalyptus leaves are tough,","words":[["eucalyptus",6.05],["leaves",6.75],["are",7.17],["tough",7.38]]},{"s":8.03,"e":9.19,"text":"low in nutrients,","words":[["low",8.03],["in",8.27],["nutrients",8.44]]},{"s":9.49,"e":11.19,"text":"and toxic to most animals.","words":[["and",9.49],["toxic",9.73],["to",10.14],["most",10.3],["animals",10.62]]},{"s":11.74,"e":14.12,"text":"So koalas get the trees to themselves.","words":[["so",11.74],["koalas",11.89],["get",12.36],["the",12.59],["trees",12.82],["to",13.2],["themselves",13.35]]},{"s":14.67,"e":16.22,"text":"Their secret is inside.","words":[["their",14.67],["secret",15.08],["is",15.57],["inside",15.73]]},{"s":16.77,"e":19.48,"text":"A koala's gut has a pouch called the caecum,","words":[["a",16.77],["koalas",16.85],["gut",17.33],["has",17.57],["a",17.81],["pouch",17.89],["called",18.28],["the",18.76],["caecum",19.0]]},{"s":19.78,"e":21.15,"text":"about two metres long,","words":[["about",19.78],["two",20.16],["metres",20.39],["long",20.85]]},{"s":21.45,"e":23.36,"text":"packed with millions of bacteria.","words":[["packed",21.45],["with",21.86],["millions",22.13],["of",22.68],["bacteria",22.81]]},{"s":23.91,"e":25.51,"text":"They break down the tough fibre,","words":[["they",23.91],["break",24.15],["down",24.46],["the",24.71],["tough",24.89],["fibre",25.2]]},{"s":25.81,"e":27.54,"text":"and help deal with the toxins.","words":[["and",25.81],["help",26.03],["deal",26.31],["with",26.6],["the",26.89],["toxins",27.11]]},{"s":28.09,"e":31.39,"text":"Even then, a koala absorbs only a quarter of it.","words":[["even",28.09],["then",28.45],["a",28.8],["koala",28.89],["absorbs",29.34],["only",29.96],["a",30.32],["quarter",30.41],["of",31.03],["it",31.21]]},{"s":31.94,"e":34.96,"text":"So it eats up to five hundred grams of leaves a day,","words":[["so",31.94],["it",32.09],["eats",32.24],["up",32.54],["to",32.7],["five",32.85],["hundred",33.15],["grams",33.68],["of",34.06],["leaves",34.21],["a",34.66],["day",34.74]]},{"s":35.26,"e":37.26,"text":"gets almost all its water from them,","words":[["gets",35.26],["almost",35.54],["all",35.95],["its",36.16],["water",36.37],["from",36.71],["them",36.99]]},{"s":37.56,"e":39.34,"text":"and saves energy by sleeping,","words":[["and",37.56],["saves",37.79],["energy",38.16],["by",38.6],["sleeping",38.75]]},{"s":39.64,"e":41.42,"text":"up to twenty-two hours a day.","words":[["up",39.64],["to",39.8],["twentytwo",39.96],["hours",40.69],["a",41.09],["day",41.18]]},{"s":41.97,"e":43.33,"text":"And baby koalas?","words":[["and",41.97],["baby",42.28],["koalas",42.7]]},{"s":43.88,"e":46.09,"text":"They eat a special mum poop called pap,","words":[["they",43.88],["eat",44.17],["a",44.38],["special",44.45],["mum",44.95],["poop",45.16],["called",45.45],["pap",45.88]]},{"s":46.39,"e":47.96,"text":"to get those gut bacteria.","words":[["to",46.39],["get",46.54],["those",46.76],["gut",47.14],["bacteria",47.36]]},{"s":48.51,"e":50.35,"text":"So, would you eat poison leaves,","words":[["so",48.51],["would",48.65],["you",49.02],["eat",49.24],["poison",49.46],["leaves",49.91]]},{"s":50.65,"e":52.71,"text":"if it meant twenty-two hours of sleep?","words":[["if",50.65],["it",50.78],["meant",50.92],["twentytwo",51.27],["hours",51.88],["of",52.23],["sleep",52.36]]}];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const T = (i, w) => { const b = BEATS[i]; if (w == null) return b.s; const f = b.words.find((x) => x[0] === w); if (!f) throw new Error('no word ' + w + ' in ' + i); return f[1]; };
  const SC = [
    { id: 'forest', a: 0, draw: sForest },
    { id: 'gut', a: T(6, 'inside') - 0.1, draw: sGut },
    { id: 'meal', a: BEATS[13].s - 0.2, draw: sMeal },
    { id: 'night', a: BEATS[15].s - 0.2, draw: sNight },
    { id: 'joey', a: BEATS[17].s - 0.2, draw: sJoey },
  ];
  // ---------- tiny 3D pipeline (from the reference) ----------
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]], scl = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const mix3 = (a, b, u) => [H.lerp(a[0], b[0], u), H.lerp(a[1], b[1], u), H.lerp(a[2], b[2], u)];
  function camLook(pos, tar, f = F) {
    const d = sub(tar, pos), yaw = Math.atan2(d[0], d[2]), pitch = Math.atan2(-d[1], Math.hypot(d[0], d[2]));
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    return { pos, proj(p) { const dx = p[0] - pos[0], dy = p[1] - pos[1], dz = p[2] - pos[2]; const x1 = dx * cy - dz * sy, z1 = dx * sy + dz * cy; const y2 = dy * cp + z1 * sp, z2 = -dy * sp + z1 * cp; return [W / 2 + (f * x1) / z2, HH / 2 - (f * y2) / z2, z2]; } };
  }
  // camera path through keyframes [t, pos, target]
  function camPath(t, K) { let k = 0; while (k < K.length - 2 && t > K[k + 1][0]) k++; const A = K[k], B = K[k + 1], u = H.ease.inOut(H.clamp((t - A[0]) / (B[0] - A[0]))); return camLook(mix3(A[1], B[1], u), mix3(A[2], B[2], u)); }
  const ICO = (() => { const t = (1 + Math.sqrt(5)) / 2; const v = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map(norm); const f = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]]; return { v, f }; })();
  // geodesic-cut sphere (each icosahedron face split in 4), the reference's gem recipe
  const SPH = (() => { const vs = ICO.v.map((v) => v.slice()), fs = [], mid = {}; const m = (a, b) => { const key = a < b ? a + '_' + b : b + '_' + a; if (mid[key] == null) { vs.push(norm(add3(vs[a], vs[b]))); mid[key] = vs.length - 1; } return mid[key]; }; for (const [a, b, c] of ICO.f) { const ab = m(a, b), bc = m(b, c), ca = m(c, a); fs.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]); } return { v: vs, f: fs }; })();
  const LIGHT = {
    dawn: { sun: norm([0.75, 0.55, -0.45]), col: [255, 226, 190], amb: [104, 98, 150], fog: [236, 160, 150], fogHi: [180, 140, 190], near: 40, far: 190 },
    noon: { sun: norm([-0.5, 0.8, -0.45]), col: [255, 240, 214], amb: [130, 118, 130], fog: [240, 206, 170], fogHi: [200, 200, 220], near: 50, far: 260 },
    night: { sun: norm([-0.5, 0.6, -0.6]), col: [170, 190, 255], amb: [64, 62, 120], fog: [70, 60, 130], fogHi: [50, 44, 110], near: 30, far: 170 },
    gold: { sun: norm([-0.7, 0.45, -0.55]), col: [255, 204, 140], amb: [120, 92, 130], fog: [250, 170, 110], fogHi: [230, 130, 130], near: 40, far: 190 },
  };
  function paint(ctx, tris, cam, L) {
    const out = [];
    for (const tri of tris) {
      const [a, b, c] = tri.p;
      let n = norm(cross(sub(b, a), sub(c, a)));
      const cen = scl(add3(add3(a, b), c), 1 / 3), toCam = sub(cam.pos, cen);
      if (tri.terrain) { if (n[1] < 0) n = scl(n, -1); } else if (tri.center) { if (dot(n, sub(cen, tri.center)) < 0) n = scl(n, -1); }
      if (tri.twoSided) { if (dot(n, toCam) < 0) n = scl(n, -1); } else if (dot(n, toCam) <= 0) continue;
      const pa = cam.proj(a), pb = cam.proj(b), pc = cam.proj(c);
      if (pa[2] < 0.5 || pb[2] < 0.5 || pc[2] < 0.5) continue;
      if (Math.max(pa[0], pb[0], pc[0]) < -20 || Math.min(pa[0], pb[0], pc[0]) > W + 20 || Math.max(pa[1], pb[1], pc[1]) < -20 || Math.min(pa[1], pb[1], pc[1]) > HH + 20) continue;
      const depth = (pa[2] + pb[2] + pc[2]) / 3 + (tri.bias || 0), lam = Math.max(0, dot(n, L.sun));
      const kk = tri.obj ? 0.32 + 0.95 * lam : lam;
      let col = tri.emissive ? tri.col : [0, 1, 2].map((i) => tri.col[i] * (L.amb[i] / 255 * 0.85 + L.col[i] / 255 * kk * 0.95));
      if (tri.fur) { const v = norm(toCam), rim = Math.pow(1 - Math.max(0, dot(n, v)), 3) * 0.3; col = mix3(col, [255, 240, 236], rim); }
      const fogK = tri.obj ? 0 : H.clamp(Math.pow(H.smooth(L.near, L.far, depth), 1.15) * 0.92);
      col = mix3(col, mix3(L.fog, L.fogHi, H.clamp(cen[1] / 30)), fogK);
      out.push({ pa, pb, pc, depth, col });
    }
    out.sort((p, q) => q.depth - p.depth);
    ctx.lineJoin = 'round'; ctx.lineWidth = 1;
    for (const o of out) { const fs = `rgb(${o.col[0] | 0},${o.col[1] | 0},${o.col[2] | 0})`; ctx.fillStyle = fs; ctx.strokeStyle = fs; ctx.beginPath(); ctx.moveTo(o.pa[0], o.pa[1]); ctx.lineTo(o.pb[0], o.pb[1]); ctx.lineTo(o.pc[0], o.pc[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  }
  function sky(ctx, stops, seed, nStars, cam, sunCol) {
    const g = ctx.createLinearGradient(0, 0, 0, HH * 0.62); stops.forEach(([u, c]) => g.addColorStop(u, c)); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    const R = H.rng(seed); for (let i = 0; i < nStars; i++) { const x = R() * W, y = R() * 700, a = (1 - y / 700) * R() * 0.9; ctx.fillStyle = `rgba(255,240,255,${a})`; ctx.fillRect(x, y, 2, 2); }
    const sp = cam.proj([cam.pos[0] + 60, cam.pos[1] + 42, cam.pos[2] + 400]);
    const gl = ctx.createRadialGradient(sp[0], sp[1], 40, sp[0], sp[1], 460); gl.addColorStop(0, H.rgba(sunCol, 0.5)); gl.addColorStop(1, H.rgba(sunCol, 0)); ctx.fillStyle = gl; ctx.fillRect(0, 0, W, HH);
    for (let i = 0; i < 14; i++) { const a0 = i / 14 * Math.PI * 2, a1 = (i + 1) / 14 * Math.PI * 2; ctx.fillStyle = H.rgba(H.mix(sunCol, '#ffffff', 0.25 + 0.4 * (0.5 + 0.5 * Math.cos(a0 - 2.3)))); ctx.beginPath(); ctx.moveTo(sp[0], sp[1]); ctx.lineTo(sp[0] + Math.cos(a0) * 76, sp[1] + Math.sin(a0) * 76); ctx.lineTo(sp[0] + Math.cos(a1) * 76, sp[1] + Math.sin(a1) * 76); ctx.closePath(); ctx.fill(); }
  }
  // ---------- mesh helpers ----------
  function tube(tris, a, b, r0, r1, sides, col, opt = {}) {
    const d = norm(sub(b, a)), u = norm(Math.abs(d[1]) > 0.9 ? cross(d, [1, 0, 0]) : cross(d, [0, 1, 0])), v = cross(d, u), ra = [], rb = [];
    for (let i = 0; i < sides; i++) { const an = i / sides * Math.PI * 2, o = add3(scl(u, Math.cos(an)), scl(v, Math.sin(an))); ra.push(add3(a, scl(o, r0))); rb.push(add3(b, scl(o, r1))); }
    for (let i = 0; i < sides; i++) { const j = (i + 1) % sides, center = scl(add3(a, b), 0.5); tris.push({ p: [ra[i], ra[j], rb[j]], col: opt.cols ? opt.cols[i % opt.cols.length] : col, center, obj: true }); tris.push({ p: [ra[i], rb[j], rb[i]], col: mix3(opt.cols ? opt.cols[i % opt.cols.length] : col, [255, 255, 255], 0.06), center, obj: true }); }
  }
  // ellipsoid from a mesh (unit sphere verts), rotated by rz around z, then mapped by M (local -> world)
  function ell(tris, mesh, c, r, col, M, opt = {}) {
    const cz = Math.cos(opt.rz || 0), sz = Math.sin(opt.rz || 0), vs = mesh.v.map((v) => { const x = v[0] * r[0], y = v[1] * r[1]; return M([c[0] + x * cz - y * sz, c[1] + x * sz + y * cz, c[2] + v[2] * r[2]]); }), cen = M(c);
    mesh.f.forEach((f, i) => tris.push({ p: [vs[f[0]], vs[f[1]], vs[f[2]]], col: opt.jit ? mix3(col, [255, 255, 255], ((i * 37) % 7) / 7 * opt.jit) : col, center: cen, obj: true, fur: opt.fur, bias: opt.bias || 0 }));
  }
  // eucalyptus leaf: long, narrow and drooping, folded on its midrib into two facets
  function leaf(tris, base, dir, len, w, col) {
    const d = norm(dir), side = norm(cross(d, [0, 1, 0.3])), tip = add3(base, scl(d, len)), mid = add3(base, scl(d, len * 0.42)), droop = [0, -len * 0.12, 0];
    const L = add3(add3(mid, scl(side, w)), droop), R = add3(add3(mid, scl(side, -w)), add3(droop, [0, -w * 0.5, 0])), T2 = add3(tip, [0, -len * 0.25, 0]);
    tris.push({ p: [base, L, T2], col, twoSided: true, obj: true }); tris.push({ p: [base, T2, R], col: mix3(col, [40, 70, 70], 0.18), twoSided: true, obj: true });
  }
  const LEAF_COLS = [[122, 168, 150], [104, 150, 140], [146, 182, 160], [96, 140, 128]];
  // ---------- terrains (cached): a valley of eucalyptus ----------
  const CACHE = {};
  function terrain(key) {
    if (CACHE[key]) return CACHE[key];
    const tris = [], night = key === 'night';
    const nz = H.makeNoise(night ? 61 : 31), jr = H.rng(night ? 8 : 5), tr = H.rng(9);
    const height = (x, z) => { const valley = Math.min(19, Math.pow(Math.abs(x - 4 * Math.sin(z * 0.035)) / 40, 1.7) * 24), far = H.smooth(70, 150, z) * 22; const h = nz.fbm2(x * 0.05, z * 0.05, 4) * 6 + valley + far - 1; return H.lerp(nz.fbm2(x * 0.16, z * 0.16, 2) * 1.2 - 0.9, h, H.smooth(12, 26, Math.hypot(x, z))); };
    const CELL = 3.6, X0 = -110, X1 = 110, Z0 = -40, Z1 = 190, nx = Math.round((X1 - X0) / CELL), nc = Math.round((Z1 - Z0) / CELL), V = [];
    for (let j = 0; j <= nc; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = X0 + i * CELL + jr.range(-0.36, 0.36) * CELL, z = Z0 + j * CELL + jr.range(-0.36, 0.36) * CELL; row.push([x, height(x, z), z]); } V.push(row); }
    const tc = (y, slope) => { let c; if (night) { c = y < 6 ? [58, 84, 110] : y < 16 ? [76, 80, 130] : [190, 196, 240]; } else { c = y < 6 ? H.mix([170, 168, 100], [110, 140, 96], H.clamp(y / 6)) : y < 14 ? H.mix([110, 140, 96], [124, 112, 116], H.smooth(9, 14, y)) : y < 22 ? [128, 112, 120] : [244, 238, 248]; } if (slope > 0.55 && y > 3 && y < 22) c = H.mix(c, [150, 112, 104], 0.5); return c; };
    for (let j = 0; j < nc; j++) for (let i = 0; i < nx; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; const fs = (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]; for (const f of fs) { let n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0]))); if (n[1] < 0) n = scl(n, -1); tris.push({ p: f, col: H.mix(tc((f[0][1] + f[1][1] + f[2][1]) / 3, 1 - Math.abs(n[1])), night ? [120, 110, 180] : [200, 190, 120], tr() * 0.2), terrain: true }); } }
    const I = (p) => p;
    for (let kk = 0, placed = 0; kk < 1600 && placed < 110; kk++) {
      const x = tr.range(-70, 70), z = tr.range(-10, 130), y = height(x, z);
      if (y > 13 || Math.hypot(x, z) < 15 || nz.fbm2(x * 0.05 + 40, z * 0.05, 2) < -0.08) continue;
      const h = tr.range(7, 11), bark = night ? [120, 124, 170] : H.mix([226, 216, 196], [196, 180, 170], tr());
      tube(tris, [x, y - 0.3, z], [x + tr.range(-0.6, 0.6), y + h, z], 0.42, 0.22, 5, bark);
      const g0 = night ? [44, 70, 100] : H.mix([96, 146, 128], [130, 172, 146], tr());
      for (let b = 0; b < 3; b++) { const c = [x + tr.range(-1.6, 1.6), y + h + tr.range(-1, 1.4), z + tr.range(-1.4, 1.4)], r = tr.range(1.6, 2.5); ell(tris, ICO, c, [r, r * 0.8, r], mix3(g0, [255, 255, 255], b * 0.05), I); }
      placed++;
    }
    return (CACHE[key] = tris);
  }
  // ---------- the hero eucalyptus tree (cached) ----------
  const LEAF_SPOTS = [];
  function heroTree(night) {
    const key = 'hero' + (night ? 'N' : '');
    if (CACHE[key]) return CACHE[key];
    const tris = [], R = H.rng(17), I = (p) => p;
    const bark = night ? [[130, 136, 186], [110, 116, 168], [150, 150, 196]] : [[232, 222, 204], [210, 196, 186], [240, 232, 216], [196, 170, 160]];
    tube(tris, [0, -1.5, 0], [0, 7, 0.1], 0.95, 0.75, 7, null, { cols: bark });
    tube(tris, [0, 7, 0.1], [-0.4, 17, 0.4], 0.75, 0.42, 7, null, { cols: bark });
    const br = [[0.3, 8.6, -0.2], [4.6, 9.6, -1.6]];
    tube(tris, br[0], br[1], 0.24, 0.1, 5, null, { cols: bark });
    tube(tris, [-0.2, 11, 0.2], [-4.2, 13.2, -0.6], 0.3, 0.12, 5, null, { cols: bark });
    const LC = night ? [[60, 92, 120], [50, 80, 112], [70, 104, 130]] : LEAF_COLS;
    for (let i = 0; i < 34; i++) { const u = R.range(0.25, 1), base = add3(mix3(br[0], br[1], u), [0, -0.05, 0]); const dir = [R.range(-0.2, 0.6), R.range(-1, -0.45), R.range(-0.7, 0.3)]; leaf(tris, base, dir, R.range(0.9, 1.35), R.range(0.13, 0.19), LC[i % LC.length]); if (!night) LEAF_SPOTS.push(add3(base, scl(norm(dir), 0.6))); }
    for (let i = 0; i < 26; i++) { const u = R.range(0.2, 1), base = mix3([-0.2, 11, 0.2], [-4.2, 13.2, -0.6], u); leaf(tris, base, [R.range(-0.6, 0.2), R.range(-1, -0.5), R.range(-0.6, 0.3)], R.range(0.9, 1.3), 0.16, LC[i % LC.length]); }
    const g0 = night ? [44, 70, 100] : [104, 152, 134];
    [[0, 17.5, 0.5, 3.4], [2.8, 15.6, 0.9, 2.6], [-3.4, 15.4, 0.4, 2.8], [-5, 13.4, -0.4, 2], [4.4, 11.4, -1.2, 1.8]].forEach(([x, y, z, r], i) => ell(tris, ICO, [x, y, z], [r, r * 0.78, r], mix3(g0, [255, 255, 255], (i % 3) * 0.05), I));
    return (CACHE[key] = tris);
  }
  // ---------- the koala: geodesic-cut ellipsoids ----------
  const GREY = [156, 152, 166], PALE = [222, 216, 222], FLUFF = [246, 242, 246];
  function koala(tris, base, yaw, s, o = {}) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), M = (p) => add3(base, scl([p[0] * cy + p[2] * sy, p[1], -p[0] * sy + p[2] * cy], s));
    const hd = o.droop || 0, hy = 1.42 - hd * 0.18, hz = -0.2 - hd * 0.06, br = 1 + (o.breathe || 0);
    const P = (c, r, col, opt = {}) => ell(tris, SPH, c, r, col, M, { fur: true, ...opt });
    P([0, 0, 0], [0.95 * br, 1.15, 0.8 * br], GREY, { jit: 0.12 });
    P([0, -0.15, -0.42], [0.62, 0.82, 0.42], PALE, { bias: -0.05 });
    P([-0.78, 0.55, -0.48], [0.3, 0.64, 0.3], GREY, { rz: 0.35, bias: -0.12 }); P([0.78, 0.55, -0.48], [0.3, 0.64, 0.3], GREY, { rz: -0.35, bias: -0.12 });
    P([-0.62, -0.95, -0.38], [0.34, 0.42, 0.36], GREY, { bias: -0.08 }); P([0.62, -0.95, -0.38], [0.34, 0.42, 0.36], GREY, { bias: -0.08 });
    P([0, hy, hz], [0.86, 0.72, 0.7], GREY, { jit: 0.1, bias: -0.15 });
    P([0, hy - 0.3, hz - 0.42], [0.36, 0.2, 0.2], PALE, { bias: -0.3 });
    for (const sg of [-1, 1]) { P([sg * 0.86, hy + 0.5, hz + 0.12], [0.5, 0.46, 0.2], GREY, { bias: 0.1 }); P([sg * 0.9, hy + 0.47, hz + 0.0], [0.34, 0.3, 0.1], FLUFF, { bias: -0.1 }); }
    if (o.chew != null) { const fr = ((o.chew * 0.5) % 1 + 1) % 1, a = M([0.12, hy - 0.32, hz - 0.72]); leaf(tris, a, scl(sub(M([0.62, hy - 0.9, hz - 1.0]), a), 1), 1.05 * s * (1 - fr * 0.55), 0.16 * s, LEAF_COLS[0]); tris[tris.length - 1].bias = -2; tris[tris.length - 2].bias = -2; }
    return { M, eyes: [-1, 1].map((sg) => M([sg * 0.34, hy + 0.14, hz - 0.62])), nose: M([0, hy - 0.08, hz - 0.74]), fwd: [-sy, 0, -cy], s, belly: M([0, -0.2, -0.85]), mouth: M([0, hy - 0.34, hz - 0.65]) };
  }
  // face overlay: the big faceted nose and the eyes, drawn after the mesh so they always sit on top
  function face(ctx, cam, k, o = {}) {
    const toC = norm(sub(cam.pos, k.nose)); if (dot(toC, k.fwd) < 0.15) return;
    const np = cam.proj(k.nose), sc = k.s * F / np[2];
    for (const e of k.eyes) {
      const p = cam.proj(e), r = 0.11 * sc;
      if (o.closed) { ctx.strokeStyle = '#2a2236'; ctx.lineWidth = Math.max(3, r * 0.45); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(p[0] - r * 1.1, p[1] - r * 0.1); ctx.lineTo(p[0], p[1] + r * 0.5); ctx.lineTo(p[0] + r * 1.1, p[1] - r * 0.1); ctx.stroke(); }
      else { ctx.fillStyle = '#231c30'; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + 0.5; ctx.lineTo(p[0] + Math.cos(a) * r, p[1] + Math.sin(a) * r * 1.1); } ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.beginPath(); ctx.moveTo(p[0] - r * 0.5, p[1] - r * 0.6); ctx.lineTo(p[0] - r * 0.05, p[1] - r * 0.55); ctx.lineTo(p[0] - r * 0.35, p[1] - r * 0.15); ctx.closePath(); ctx.fill(); }
    }
    const w = 0.34 * sc, h = 0.46 * sc, x = np[0], y = np[1];
    const pts = [[0, -h / 2], [w / 2, -h * 0.28], [w * 0.46, h * 0.3], [w * 0.16, h / 2], [-w * 0.16, h / 2], [-w * 0.46, h * 0.3], [-w / 2, -h * 0.28]];
    ctx.fillStyle = '#3a3248'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(x + p[0], y + p[1]) : ctx.moveTo(x + p[0], y + p[1]))); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#5c5270'; ctx.beginPath(); ctx.moveTo(x, y - h / 2); ctx.lineTo(x - w / 2, y - h * 0.28); ctx.lineTo(x - w * 0.46, y + h * 0.3); ctx.lineTo(x - w * 0.05, y - h * 0.05); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.beginPath(); ctx.moveTo(x - w * 0.12, y - h * 0.4); ctx.lineTo(x + w * 0.1, y - h * 0.36); ctx.lineTo(x - w * 0.06, y - h * 0.2); ctx.closePath(); ctx.fill();
  }
  // ---------- style bits ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b)), EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a - 0.12, a + 0.18)) * (end == null ? 1 : 1 - EI(t, end, end + 0.2));
  function lpTag(ctx, x, y, text, o = {}) {
    const k = o.k ?? 1; if (k <= 0.01) return;
    ctx.save(); const fsz = o.size || 56; ctx.font = `700 ${fsz}px "Space Grotesk"`;
    const w = ctx.measureText(text).width + fsz * 1.2, h = Math.round(fsz * 1.65), ch = h * 0.32;
    ctx.translate(x, y); ctx.scale(k, k);
    const pts = [[-w / 2 + ch, -h / 2], [w / 2, -h / 2], [w / 2, h / 2 - ch], [w / 2 - ch, h / 2], [-w / 2, h / 2], [-w / 2, -h / 2 + ch]], sh = fsz * 0.1;
    ctx.fillStyle = 'rgba(40,20,70,0.38)'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0] + sh, p[1] + sh) : ctx.moveTo(p[0] + sh, p[1] + sh))); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || '#fff6f0'); ctx.fillStyle = H.rgba(bg); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(bg, [255, 255, 255], 0.4)); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(w / 2 - h * 0.6, 0); ctx.lineTo(-w / 2, 0); ctx.lineTo(pts[5][0], pts[5][1]); ctx.closePath(); ctx.fill();
    ctx.fillStyle = o.col || '#2a1f4f'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 0, 2); ctx.restore();
  }
  const CORAL = '#ff7060', INK = '#2a1f4f';
  function shard(ctx, x, y, r, col, rot = 0.6) { const c = Math.cos(rot), s = Math.sin(rot), P = (a, b) => [x + a * c - b * s, y + a * s + b * c], A = P(0, -r), B = P(r * 0.72, 0), C = P(0, r), D = P(-r * 0.72, 0); ctx.fillStyle = H.rgba(H.mix(col, [255, 255, 255], 0.35)); ctx.beginPath(); ctx.moveTo(...A); ctx.lineTo(...B); ctx.lineTo(...D); ctx.closePath(); ctx.fill(); ctx.fillStyle = H.rgba(H.mix(col, [40, 20, 70], 0.2)); ctx.beginPath(); ctx.moveTo(...C); ctx.lineTo(...B); ctx.lineTo(...D); ctx.closePath(); ctx.fill(); }
  function leaf2(ctx, x, y, len, rot, col) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); const w = len * 0.17; ctx.fillStyle = H.rgba(H.mix(col, [255, 255, 255], 0.22)); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(len * 0.42, -w); ctx.lineTo(len, 0); ctx.closePath(); ctx.fill(); ctx.fillStyle = H.rgba(H.mix(col, [30, 50, 60], 0.2)); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(len * 0.42, w); ctx.lineTo(len, 0); ctx.closePath(); ctx.fill(); ctx.restore(); }
  function glow(ctx, x, y, r, col, a) { const g = ctx.createRadialGradient(x, y, r * 0.15, x, y, r); g.addColorStop(0, H.rgba(col, a)); g.addColorStop(1, H.rgba(col, 0)); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = g; ctx.fillRect(x - r, y - r, 2 * r, 2 * r); ctx.restore(); }
  function ribbon(ctx, a, b, wa, wb, col) { const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L; ctx.fillStyle = H.rgba(H.mix(col, [255, 255, 255], 0.28)); ctx.beginPath(); ctx.moveTo(a[0] + nx * wa, a[1] + ny * wa); ctx.lineTo(b[0] + nx * wb, b[1] + ny * wb); ctx.lineTo(b[0], b[1]); ctx.lineTo(a[0], a[1]); ctx.closePath(); ctx.fill(); ctx.fillStyle = H.rgba(H.mix(col, [60, 10, 60], 0.28)); ctx.beginPath(); ctx.moveTo(a[0] - nx * wa, a[1] - ny * wa); ctx.lineTo(b[0] - nx * wb, b[1] - ny * wb); ctx.lineTo(b[0], b[1]); ctx.lineTo(a[0], a[1]); ctx.closePath(); ctx.fill(); }
  function lpArrow(ctx, a, c, b, prog, colA, w = 18) { if (prog <= 0) return; const q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]]; const N = 7, pts = []; for (let i = 0; i <= N; i++) pts.push(q(prog * i / N)); for (let i = 0; i < N; i++) ribbon(ctx, pts[i], pts[i + 1], w / 2, w / 2, colA); const e = pts[N], e0 = pts[N - 1], an = Math.atan2(e[1] - e0[1], e[0] - e0[0]); ctx.save(); ctx.translate(e[0], e[1]); ctx.rotate(an); ctx.fillStyle = H.rgba(H.mix(colA, '#ffffff', 0.3)); ctx.beginPath(); ctx.moveTo(w, 0); ctx.lineTo(-w * 1.1, -w * 1.2); ctx.lineTo(-w * 1.1, 0); ctx.closePath(); ctx.fill(); ctx.fillStyle = H.rgba(H.mix(colA, '#28144a', 0.25)); ctx.beginPath(); ctx.moveTo(w, 0); ctx.lineTo(-w * 1.1, w * 1.2); ctx.lineTo(-w * 1.1, 0); ctx.closePath(); ctx.fill(); ctx.restore(); }
  const KB = [0, 6, -1.05];

  // ================= SCENE 1: the dawn eucalyptus valley =================
  function sForest(ctx, t) {
    const cam = camPath(t, [
      [0, [2.6, 7.6, -8.6], [0.3, 7.3, -1]], [T(2) - 0.4, [2.1, 7.4, -7.4], [0.3, 7.3, -1]], [T(2, 'tough') + 0.4, [5.4, 8.6, -5.6], [2.7, 8.2, -0.9]],
      [T(5) - 0.3, [4.8, 8.4, -6.0], [2.5, 8.1, -0.9]], [T(5, 'trees'), [8, 16, -32], [0.5, 8.5, 0]], [T(6) - 0.2, [8, 16, -31], [0.5, 8.5, 0]], [SC[1].a + 0.3, [0.4, 6.1, -4.6], [0, 5.8, -1]]]);
    sky(ctx, [[0, '#1b2350'], [0.38, '#4d3f84'], [0.7, '#c06a93'], [1, '#ffb08a']], 77, 150, cam, '#ffd49a');
    ctx.fillStyle = '#7f9a64'; ctx.fillRect(0, 1150, W, HH - 1150);
    const tris = terrain('valley').concat(heroTree(false));
    const kz = koala(tris, KB, 0, 1.25, { chew: t, breathe: Math.sin(t * 2) * 0.015 });
    paint(ctx, tris, cam, LIGHT.dawn); face(ctx, cam, kz);
    // toxins rising off the leaves
    const tx = T(4, 'toxic'), tk = EO(t, tx - 0.15, tx + 0.4) * (1 - EI(t, T(5, 'trees') - 0.3, T(5, 'trees')));
    if (tk > 0) LEAF_SPOTS.forEach((p0, i) => { const u = ((t - tx) * 0.6 + i * 0.13) % 1, p = cam.proj(add3(p0, [Math.sin(i + t) * 0.2, u * 1.6, 0])); if (p[2] < 1) return; ctx.globalAlpha = tk * (1 - u); shard(ctx, p[0], p[1], Math.max(10, 0.16 * F / p[2]), i % 3 ? '#ff5a7a' : '#b07cff', t * 2 + i); ctx.globalAlpha = 1; });
    lpTag(ctx, 540, 290, 'KOALAS', { size: 104, k: pop(t, T(0, 'koalas'), T(1) - 0.1) });
    lpTag(ctx, 540, 455, 'POISON LEAVES', { size: 100, bg: CORAL, col: '#fff', k: pop(t, T(0, 'poison'), T(1) - 0.1) });
    lpTag(ctx, 540, 290, 'WHY ONLY', { size: 104, bg: INK, col: '#fff', k: pop(t, T(1, 'why'), T(2) - 0.1) });
    lpTag(ctx, 540, 455, 'EUCALYPTUS?', { size: 104, bg: CORAL, col: '#fff', k: pop(t, T(1, 'eucalyptus'), T(2) - 0.1) });
    lpTag(ctx, 540, 280, 'TOUGH', { size: 104, k: pop(t, T(2, 'tough'), T(5) - 0.1) });
    lpTag(ctx, 540, 435, 'LOW NUTRIENTS', { size: 84, bg: INK, col: '#fff', k: pop(t, T(3, 'nutrients') - 0.1, T(5) - 0.1) });
    lpTag(ctx, 540, 585, 'TOXIC', { size: 110, bg: CORAL, col: '#fff', k: pop(t, T(4, 'toxic'), T(5) - 0.1) });
    lpTag(ctx, 540, 300, 'ALL THEIRS', { size: 110, bg: '#fff0a8', k: pop(t, T(5, 'themselves'), T(6) - 0.1) });
    lpTag(ctx, 540, 300, 'THE SECRET?', { size: 104, bg: CORAL, col: '#fff', k: pop(t, T(6, 'secret'), SC[1].a) });
  }
  // ================= SCENE 2: the gut cutaway =================
  function mosaic(key, c0, c1, seed) {
    if (CACHE[key]) return CACHE[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), R = H.rng(seed), S = 150, V = [];
    for (let j = 0; j < 16; j++) { const r = []; for (let i = 0; i < 10; i++) r.push([i * S - 100 + R.range(-40, 40) + (j % 2) * S / 2, j * S - 100 + R.range(-40, 40)]); V.push(r); }
    for (let j = 0; j < 15; j++) for (let i = 0; i < 9; i++) { const A = V[j][i], B = V[j][i + 1], C = V[j + 1][i], D = V[j + 1][i + 1]; for (const f of [[A, B, C], [B, D, C]]) { const col = H.mix(c0, c1, H.clamp(f[0][1] / 1900 + R.range(-0.14, 0.14))); const fs = H.rgba(col); g.fillStyle = fs; g.strokeStyle = fs; g.beginPath(); g.moveTo(...f[0]); g.lineTo(...f[1]); g.lineTo(...f[2]); g.closePath(); g.fill(); g.stroke(); } }
    return (CACHE[key] = c);
  }
  function facetFill(key, pts, ramp, seed) {
    if (CACHE[key]) return CACHE[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), R = H.rng(seed), S = 90;
    g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.closePath(); g.clip();
    const V = []; for (let j = 0; j < 24; j++) { const r = []; for (let i = 0; i < 16; i++) r.push([i * S - 100 + R.range(-26, 26) + (j % 2) * S / 2, j * S * 0.86 + 380 + R.range(-20, 20)]); V.push(r); }
    for (let j = 0; j < 23; j++) for (let i = 0; i < 15; i++) { const A = V[j][i], B = V[j][i + 1], C = V[j + 1][i], D = V[j + 1][i + 1]; for (const f of [[A, B, C], [B, D, C]]) { const col = H.mix(ramp[0], ramp[1], H.clamp(R() * 0.7 + (f[0][0] / W) * 0.3)); const fs = H.rgba(col); g.fillStyle = fs; g.strokeStyle = fs; g.beginPath(); g.moveTo(...f[0]); g.lineTo(...f[1]); g.lineTo(...f[2]); g.closePath(); g.fill(); g.stroke(); } }
    return (CACHE[key] = c);
  }
  const BODY = [[300, 760], [780, 760], [930, 980], [960, 1350], [870, 1610], [540, 1660], [210, 1610], [120, 1350], [150, 980]];
  const WIN = [[250, 870], [830, 870], [890, 1050], [905, 1350], [830, 1560], [540, 1600], [250, 1560], [175, 1350], [190, 1050]];
  // gut path: mouth -> stomach -> intestine -> the long caecum serpentine
  const GUT = (() => { const p = [[540, 740], [520, 820], [470, 900]]; const coil = []; let y = 1110; const rows = 7; for (let r = 0; r < rows; r++) { const L = r % 2 === 0, x0 = L ? 300 : 790, x1 = L ? 790 : 300; for (let s = 0; s <= 8; s++) coil.push([H.lerp(x0, x1, s / 8), y + Math.sin(s / 8 * Math.PI * 3) * 10]); y += 66; } return { pre: p, coil }; })();
  const pathLen = (P) => { const acc = [0]; for (let i = 1; i < P.length; i++) acc.push(acc[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1])); return acc; };
  const COIL_FULL = [[470, 900], [620, 990], [700, 1060], [300, 1110]].concat(GUT.coil), COIL_ACC = pathLen(COIL_FULL);
  const coilAt = (u) => { const L = u * COIL_ACC[COIL_ACC.length - 1]; let i = 1; while (i < COIL_ACC.length - 1 && COIL_ACC[i] < L) i++; const a = COIL_FULL[i - 1], b = COIL_FULL[i], k = (L - COIL_ACC[i - 1]) / (COIL_ACC[i] - COIL_ACC[i - 1] || 1); return [H.lerp(a[0], b[0], k), H.lerp(a[1], b[1], k)]; };
  function drawPath(ctx, P, acc, prog, w, col) { const L = prog * acc[acc.length - 1]; for (let i = 1; i < P.length; i++) { if (acc[i - 1] >= L) break; const k = H.clamp((L - acc[i - 1]) / (acc[i] - acc[i - 1] || 1)), b = [H.lerp(P[i - 1][0], P[i][0], k), H.lerp(P[i - 1][1], P[i][1], k)]; ribbon(ctx, P[i - 1], b, w, w, col); } }
  function koalaHead2D(ctx, x, y, r) {
    const pf = (pts, c) => { ctx.fillStyle = H.rgba(c); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(x + p[0] * r, y + p[1] * r) : ctx.moveTo(x + p[0] * r, y + p[1] * r))); ctx.closePath(); ctx.fill(); };
    for (const sg of [-1, 1]) { const ex = sg * 0.95; const ring = []; for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; ring.push([ex + Math.cos(a) * 0.55, -0.55 + Math.sin(a) * 0.5]); } for (let i = 0; i < 7; i++) pf([[ex, -0.55], ring[i], ring[(i + 1) % 7]], H.mix(GREY, [255, 255, 255], 0.12 * (i % 3))); const inn = ring.map((p) => [ex + (p[0] - ex) * 0.6, -0.55 + (p[1] + 0.55) * 0.6]); pf(inn, FLUFF); }
    const hx = [[0, -0.85], [0.8, -0.5], [0.95, 0.25], [0.45, 0.8], [-0.45, 0.8], [-0.95, 0.25], [-0.8, -0.5]];
    for (let i = 0; i < 7; i++) pf([[0, 0.05], hx[i], hx[(i + 1) % 7]], H.mix(PALE, GREY, 0.4 + 0.5 * (i % 2)));
    pf([[0, -0.2], [0.22, -0.1], [0.2, 0.32], [0, 0.45], [-0.2, 0.32], [-0.22, -0.1]], [58, 50, 72]); pf([[0, -0.2], [-0.22, -0.1], [-0.2, 0.32], [-0.02, 0.05]], [92, 82, 112]);
    for (const sg of [-1, 1]) pf([[sg * 0.45, -0.25], [sg * 0.36, -0.12], [sg * 0.45, 0.0], [sg * 0.54, -0.12]], [35, 28, 48]);
  }
  function sGut(ctx, t) {
    ctx.drawImage(mosaic('mGut', '#1f2f5a', '#5a3f84', 12), 0, 0);
    const zoom = H.lerp(1.06, 1.0, EO(t, SC[1].a, SC[1].a + 1.2)); ctx.save(); ctx.translate(540, 1150); ctx.scale(zoom, zoom); ctx.translate(-540, -1150);
    ctx.drawImage(facetFill('fur', BODY, [[132, 128, 146], [176, 172, 186]], 4), 0, 0);
    ctx.drawImage(facetFill('win', WIN, [[255, 214, 214], [250, 190, 200]], 6), 0, 0);
    koalaHead2D(ctx, 540, 640, 150);
    const c0 = T(7, 'caecum'), c1 = T(8, 'long');
    // food pipe + stomach (always), intestine + caecum grows on its name
    drawPath(ctx, GUT.pre, pathLen(GUT.pre), 1, 22, [214, 110, 140]);
    { const sx = 470, sy = 930, r = 78; for (let i = 0; i < 8; i++) { const a0 = i / 8 * Math.PI * 2, a1 = (i + 1) / 8 * Math.PI * 2; ctx.fillStyle = H.rgba(H.mix([226, 120, 150], [255, 196, 206], 0.5 + 0.5 * Math.cos(a0 - 2.4))); ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx + Math.cos(a0) * r * 1.2, sy + Math.sin(a0) * r); ctx.lineTo(sx + Math.cos(a1) * r * 1.2, sy + Math.sin(a1) * r); ctx.closePath(); ctx.fill(); } }
    const grow = H.lerp(0.12, 1, EI(t, c0 - 0.15, c1 + 0.3));
    const hi = EO(t, T(8, 'two') - 0.1, T(8, 'two') + 0.3) * (1 - EI(t, T(9) - 0.2, T(9)));
    drawPath(ctx, COIL_FULL, COIL_ACC, grow, 26 + hi * 4, H.mix([236, 132, 156], [255, 176, 120], hi));
    const head = coilAt(grow); if (grow < 1) { glow(ctx, head[0], head[1], 90, '#ffc878', 0.6); }
    // bacteria: millions, crowding the caecum
    const b0 = T(9, 'millions'), bn = Math.round(150 * EO(t, b0 - 0.15, T(9, 'bacteria') + 0.5)), R = H.rng(55), BC = ['#7fe0b0', '#b78cff', '#9fd0ff'];
    for (let i = 0; i < 150; i++) { const u = 0.18 + R() * 0.82, j1 = R.range(-16, 16), j2 = R.range(-16, 16), rr = R.range(7, 12); if (i >= bn) continue; const p = coilAt(u); shard(ctx, p[0] + j1 + Math.sin(t * 3 + i) * 3, p[1] + j2 + Math.cos(t * 2.6 + i) * 3, rr, BC[i % 3], t * 2 + i); }
    // leaf fibre bits travel along the tube and break down; toxins (red) get handled (turn pale)
    const f0 = T(10, 'break') - 0.2, fk = EO(t, f0, f0 + 0.3) * (1 - EI(t, T(12) - 0.3, T(12)));
    if (fk > 0) { const tox = T(11, 'toxins'); for (let i = 0; i < 14; i++) { const u = ((t - f0) * 0.12 + i / 14) % 1, p = coilAt(0.05 + u * 0.95), isTox = i % 3 === 0, done = EO(t, tox + 0.1 + i * 0.03, tox + 0.5 + i * 0.03); ctx.globalAlpha = fk; if (isTox) { if (t > tox - 0.2) shard(ctx, p[0], p[1], 20 - done * 6, H.mix([255, 70, 100], [236, 236, 246], done), t * 4 + i); } else leaf2(ctx, p[0] - 30 * (1 - u), p[1], 64 * (1 - u * 0.75), t * 2 + i, LEAF_COLS[i % 4]); ctx.globalAlpha = 1; } }
    ctx.restore();
    // a quarter: four leaf tiles, one kept
    const q = T(12, 'quarter'), qk = pop(t, T(12, 'absorbs') - 0.1, SC[2].a);
    if (qk > 0.01) { ctx.save(); ctx.translate(540, 1000); ctx.scale(qk, qk); ctx.fillStyle = 'rgba(42,31,79,0.86)'; ctx.beginPath(); ctx.moveTo(-400, -120); ctx.lineTo(400, -120); ctx.lineTo(400, 90); ctx.lineTo(370, 120); ctx.lineTo(-400, 120); ctx.closePath(); ctx.fill(); for (let i = 0; i < 4; i++) { const kept = i === 0, on = EO(t, q - 0.1, q + 0.3); ctx.globalAlpha = kept ? 1 : H.lerp(1, 0.28, on); leaf2(ctx, -345 + i * 190, 40, 185, -0.45, kept ? H.mix(LEAF_COLS[0], [255, 112, 96], on) : LEAF_COLS[1]); ctx.globalAlpha = 1; } ctx.restore(); }
    lpTag(ctx, 540, 300, 'INSIDE', { size: 110, bg: CORAL, col: '#fff', k: pop(t, T(6, 'inside') - 0.1, c0 - 0.15) });
    lpTag(ctx, 540, 300, 'THE CAECUM', { size: 104, k: pop(t, c0, T(9) - 0.1) });
    lpTag(ctx, 540, 460, '2 METRES', { size: 120, bg: CORAL, col: '#fff', k: pop(t, T(8, 'two'), T(9) - 0.1) });
    lpTag(ctx, 540, 290, 'MILLIONS OF', { size: 92, bg: INK, col: '#fff', k: pop(t, b0, T(10) - 0.1) });
    lpTag(ctx, 540, 440, 'BACTERIA', { size: 110, bg: '#7fe0b0', k: pop(t, T(9, 'bacteria'), T(10) - 0.1) });
    lpTag(ctx, 540, 290, 'BREAK DOWN FIBRE', { size: 80, k: pop(t, T(10, 'break'), T(12) - 0.1) });
    lpTag(ctx, 540, 440, 'TAME TOXINS', { size: 92, bg: CORAL, col: '#fff', k: pop(t, T(11, 'toxins'), T(12) - 0.1) });
    lpTag(ctx, 540, 290, 'ONLY 1/4', { size: 120, bg: CORAL, col: '#fff', k: pop(t, q, SC[2].a) });
    lpTag(ctx, 540, 445, 'ABSORBED', { size: 84, bg: INK, col: '#fff', k: pop(t, T(12, 'absorbs'), SC[2].a) });
  }
  // ================= SCENE 3: noon, eating all day =================
  function sMeal(ctx, t) {
    const u = ph(t, SC[2].a, SC[3].a), cam = camLook([H.lerp(-4.2, -2.6, u), 7.8, H.lerp(-7.6, -7.0, u)], [0.7, 7.4, -1]);
    sky(ctx, [[0, '#3a6bb0'], [0.5, '#7ab0d8'], [0.85, '#f0d8b0'], [1, '#ffe2b0']], 21, 0, cam, '#fff4d0');
    ctx.fillStyle = '#9aa86a'; ctx.fillRect(0, 1150, W, HH - 1150);
    const tris = terrain('valley').concat(heroTree(false));
    const kz = koala(tris, KB, -0.35, 1.25, { chew: t * 1.4 });
    paint(ctx, tris, cam, LIGHT.noon); face(ctx, cam, kz);
    // a rain of leaves on "leaves"
    const lv = T(13, 'leaves'), lk = EO(t, T(13, 'five') - 0.1, lv + 0.4) * (1 - EI(t, T(14) - 0.2, T(14) + 0.2)), R = H.rng(8);
    if (lk > 0) for (let i = 0; i < 40; i++) { const x = R.range(60, 1020), sp = R.range(140, 260), y0 = R.range(-600, 0), y = 620 + ((y0 + (t - lv + 1) * sp) % 1100 + 1100) % 1100; ctx.globalAlpha = lk; leaf2(ctx, x, y, R.range(60, 90), t * R.range(0.8, 1.8) + i, LEAF_COLS[i % 4]); ctx.globalAlpha = 1; }
    // water drop squeezed out of the leaf
    const wk = H.ease.back(ph(t, T(14, 'water') - 0.15, T(14, 'water') + 0.2)) * (1 - EI(t, SC[3].a - 0.3, SC[3].a));
    if (wk > 0.01) { const p = cam.proj(kz.mouth), x = p[0] + 170, y = p[1] - 20 + Math.sin(t * 3) * 8, r = 60 * wk; const pts = [[0, -r * 1.5], [r * 0.8, -r * 0.1], [r * 0.6, r * 0.7], [0, r], [-r * 0.6, r * 0.7], [-r * 0.8, -r * 0.1]]; for (let i = 0; i < 6; i++) { ctx.fillStyle = H.rgba(H.mix('#5ab0f0', '#d8f0ff', 0.5 + 0.5 * Math.cos(i - 2))); ctx.beginPath(); ctx.moveTo(x, y + r * 0.2); ctx.lineTo(x + pts[i][0], y + pts[i][1]); ctx.lineTo(x + pts[(i + 1) % 6][0], y + pts[(i + 1) % 6][1]); ctx.closePath(); ctx.fill(); } glow(ctx, x, y, 140, '#9fd0ff', 0.35 * wk); }
    lpTag(ctx, 540, 320, '500 g', { size: 150, bg: CORAL, col: '#fff', k: pop(t, T(13, 'five'), T(14) - 0.1) });
    lpTag(ctx, 540, 500, 'OF LEAVES A DAY', { size: 70, bg: INK, col: '#fff', k: pop(t, lv, T(14) - 0.1) });
    lpTag(ctx, 540, 300, 'WATER', { size: 120, bg: '#9fd0ff', k: pop(t, T(14, 'water'), SC[3].a) });
    lpTag(ctx, 540, 460, 'FROM LEAVES', { size: 80, bg: INK, col: '#fff', k: pop(t, T(14, 'them') - 0.05, SC[3].a) });
  }
  // ================= SCENE 4: night, asleep =================
  function sNight(ctx, t) {
    const u = ph(t, SC[3].a, SC[4].a), cam = camLook([1.6 - u * 0.6, 6.8, -8.4 + u * 0.9], [0.2, 9.1, -1]);
    sky(ctx, [[0, '#0d1240'], [0.5, '#262461'], [0.85, '#5a3f8f'], [1, '#8a5aa0']], 15, 240, cam, '#dbe2ff');
    ctx.fillStyle = '#2b3566'; ctx.fillRect(0, 1200, W, HH - 1200);
    const tris = terrain('night').concat(heroTree(true));
    const kz = koala(tris, KB, 0.1, 1.25, { droop: EO(t, T(15, 'sleeping') - 0.4, T(15, 'sleeping') + 0.3), breathe: Math.sin(t * 1.6) * 0.03 });
    paint(ctx, tris, cam, LIGHT.night); face(ctx, cam, kz, { closed: t > T(15, 'sleeping') - 0.15 });
    // Zzz
    const zs = T(15, 'sleeping');
    if (t > zs) { const p = cam.proj(kz.nose); ctx.font = '700 72px "Space Grotesk"'; ctx.textAlign = 'center'; for (let i = 0; i < 3; i++) { const v = ((t - zs) * 0.45 + i / 3) % 1, x = p[0] + 200 + v * 140, y = p[1] - 60 - v * 200; ctx.globalAlpha = Math.sin(v * Math.PI) * H.clamp((t - zs) * 3); ctx.fillStyle = 'rgba(30,20,60,0.5)'; ctx.fillText('Z', x + 5, y + 5); ctx.fillStyle = '#dbe2ff'; ctx.font = `700 ${50 + v * 50}px "Space Grotesk"`; ctx.fillText('Z', x, y); ctx.globalAlpha = 1; } }
    // the 22-of-24 hour ring
    const tw = T(16, 'twentytwo'), rk = H.ease.back(ph(t, tw - 0.25, tw + 0.1)), fill = 22 * EO(t, tw - 0.15, T(16, 'day') + 0.2);
    if (rk > 0.01) { ctx.save(); ctx.translate(540, 600); ctx.scale(rk, rk); for (let i = 0; i < 24; i++) { const a0 = -Math.PI / 2 + i / 24 * Math.PI * 2 + 0.02, a1 = -Math.PI / 2 + (i + 1) / 24 * Math.PI * 2 - 0.02, on = i < fill; const c = on ? H.mix('#967cf0', '#ec8cc8', i / 22) : [70, 66, 110]; [[a0, (a0 + a1) / 2, 0.1], [(a0 + a1) / 2, a1, -0.12]].forEach(([b0, b1, lt]) => { ctx.fillStyle = H.rgba(H.mix(c, lt > 0 ? [255, 255, 255] : [20, 10, 50], Math.abs(lt) * 2)); ctx.beginPath(); ctx.moveTo(Math.cos(b0) * 130, Math.sin(b0) * 130); ctx.lineTo(Math.cos(b0) * 205, Math.sin(b0) * 205); ctx.lineTo(Math.cos(b1) * 205, Math.sin(b1) * 205); ctx.lineTo(Math.cos(b1) * 130, Math.sin(b1) * 130); ctx.closePath(); ctx.fill(); }); } ctx.font = '700 130px "Space Grotesk"'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#fff'; ctx.fillText(String(Math.max(1, Math.round(fill))), 0, 6); ctx.restore(); }
    lpTag(ctx, 540, 290, 'SAVES ENERGY', { size: 100, bg: CORAL, col: '#fff', k: pop(t, T(15, 'energy'), tw - 0.15) });
    lpTag(ctx, 540, 290, 'HOURS ASLEEP', { size: 96, bg: INK, col: '#fff', k: pop(t, T(16, 'hours')) });
  }
  // ================= SCENE 5: golden hour, mum and joey, the question =================
  function sJoey(ctx, t) {
    const e0 = T(20) - 0.3, cam = camPath(t, [[SC[4].a, [-2.8, 7.4, -7.4], [0.3, 7.3, -1]], [T(19) - 0.3, [-2.0, 7.2, -6.6], [0.4, 7.4, -1]], [T(20, 'poison'), [1.8, 7.8, -8.8], [0.2, 7.4, -1]], [DURATION, [2.4, 8.0, -9.6], [0.2, 7.5, -1]]]);
    sky(ctx, [[0, '#3b2a6d'], [0.45, '#b5527d'], [0.8, '#ff9266'], [1, '#ffcf8a']], 41, 50, cam, '#fff0c0');
    ctx.fillStyle = '#8a8a58'; ctx.fillRect(0, 1150, W, HH - 1150);
    const tris = terrain('valley').concat(heroTree(false));
    const kz = koala(tris, KB, -0.15, 1.25, { chew: t > e0 ? t : null });
    const jb = kz.M([-0.98, 1.12, 0.0]), jz = koala(tris, jb, 0.25, 0.55, {});
    paint(ctx, tris, cam, LIGHT.gold); face(ctx, cam, kz); face(ctx, cam, jz);
    // gut bacteria passed from mum to joey
    const gb = T(19, 'gut') - 0.1, gk = EO(t, gb, gb + 0.3) * (1 - EI(t, T(20) - 0.3, T(20)));
    if (gk > 0) { const a = cam.proj(kz.belly), b = cam.proj(jz.mouth), c = [Math.min(a[0], b[0]) - 230, (a[1] + b[1]) / 2 + 40], q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]]; lpArrow(ctx, a, c, b, EI(t, gb, gb + 0.6) * gk, [255, 246, 240], 16); for (let i = 0; i < 12; i++) { const u = ((t - gb) * 0.7 + i / 12) % 1, p = q(u); ctx.globalAlpha = gk; shard(ctx, p[0], p[1], 14, ['#7fe0b0', '#b78cff', '#9fd0ff'][i % 3], t * 3 + i); ctx.globalAlpha = 1; } }
    lpTag(ctx, 540, 300, 'BABY KOALAS?', { size: 100, k: pop(t, T(17, 'baby'), T(18) - 0.1) });
    lpTag(ctx, 540, 290, 'SPECIAL POOP', { size: 96, bg: INK, col: '#fff', k: pop(t, T(18, 'poop'), T(19) - 0.1) });
    lpTag(ctx, 540, 470, 'PAP', { size: 150, bg: CORAL, col: '#fff', k: pop(t, T(18, 'pap'), T(19) - 0.1) });
    lpTag(ctx, 540, 300, 'GUT BACTERIA', { size: 100, bg: '#7fe0b0', k: pop(t, T(19, 'gut'), T(20) - 0.15) });
    lpTag(ctx, 540, 285, 'WOULD YOU EAT', { size: 88, bg: INK, col: '#fff', k: pop(t, T(20, 'would')) });
    lpTag(ctx, 540, 445, 'POISON LEAVES?', { size: 100, bg: CORAL, col: '#fff', k: pop(t, T(20, 'poison')) });
    lpTag(ctx, 540, 1500, 'FOR 22 HRS OF SLEEP?', { size: 72, bg: '#fff0a8', k: pop(t, T(21, 'twentytwo')) });
  }
  // ---------- facet flip transition (the medium's own scene change) ----------
  let LB = null, TILES = null;
  function tiles() { if (TILES) return TILES; const R = H.rng(6), S = 170, V = []; for (let j = 0; j <= 13; j++) { const r = []; for (let i = 0; i <= 8; i++) r.push([i * S - 90 + R.range(-40, 40), j * S - 90 + R.range(-40, 40)]); V.push(r); } const out = []; for (let j = 0; j < 13; j++) for (let i = 0; i < 8; i++) { const A = V[j][i], B = V[j][i + 1], C = V[j + 1][i], D = V[j + 1][i + 1]; for (const f of [[A, B, C], [B, D, C]]) { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; out.push({ f, cx, cy, d: Math.hypot(cx - 540, cy - 1100) + R() * 160 }); } } return (TILES = out); }
  const TR = 0.55;
  function explainer(ctx, W_, H_, t) {
    let i = 0; while (i < SC.length - 1 && t >= SC[i + 1].a + TR / 2) i++;
    const nx = SC[i + 1], inTr = nx && t >= nx.a - TR / 2;
    if (!inTr) { SC[i].draw(ctx, t); return; }
    if (!LB) LB = H.layer(W, HH);
    const g = LB.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, W, HH); nx.draw(g, t);
    SC[i].draw(ctx, t);
    const p = H.ease.inOut(ph(t, nx.a - TR / 2, nx.a + TR / 2)), band = 340, front = p * (1400 + band);
    ctx.save(); ctx.beginPath();
    for (const o of tiles()) { const s = H.clamp((front - o.d) / band); if (s <= 0) continue; o.f.forEach((v, idx) => { const x = o.cx + (v[0] - o.cx) * s * 1.05, y = o.cy + (v[1] - o.cy) * s * 1.05; idx ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.closePath(); }
    ctx.clip(); ctx.drawImage(LB, 0, 0); ctx.restore();
  }
  // ---------- sound (voiceover mode) ----------
  function scoreSound(k) {
    const pp = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); for (let i = 0; i < 6; i++) k.play('tick', t - 0.2 + i * 0.07, { gain: 0.4, minor: true }); };
    const chew = (a, b, rate) => { for (let c = a; c < b; c += rate) k.play('tock', c, { f: 260, gain: 0.25, minor: true }); };
    k.music('pulse', 0.2, DURATION, { bpm: 92, gain: 0.26, chords: [['D3', 'F#3', 'A3', 'C#4'], ['B2', 'D3', 'F#3', 'A3'], ['G2', 'B2', 'D3', 'F#3'], ['A2', 'C#3', 'E3', 'G3']] });
    chew(0.3, T(2), 0.9);
    pp(T(0, 'koalas') - 0.05, 560, 0.8, 0, false); k.play('error', T(0, 'poison'), { f: 'A3', gain: 0.4 }); pp(T(0, 'poison'), 700, 0.8, 0, false);
    pp(T(1, 'why'), 640, 0.7, 0, false); k.play('stamp', T(1, 'eucalyptus'), { gain: 0.45 });
    k.play('whoosh', T(2) - 0.4, { dur: 0.7, gain: 0.5 });
    pp(T(2, 'tough'), 520, 0.8); pp(T(3, 'nutrients') - 0.1, 640, 0.7); k.play('stamp', T(4, 'toxic'), { gain: 0.55 }); k.play('buzz', T(4, 'toxic') + 0.05, { dur: 0.5, gain: 0.3 });
    k.play('whoosh', T(5, 'trees') - 0.6, { dur: 1.0, gain: 0.6, top: 1600 }); k.play('success', T(5, 'themselves'), { f: 'D6', gain: 0.35 });
    k.play('riser', T(6, 'secret') - 0.2, { dur: 0.9, gain: 0.4 }); pp(T(6, 'secret'), 760, 0.7, 0, false);
    wipe(SC[1].a); k.play('thud', T(6, 'inside'), { gain: 0.5 });
    k.play('stroke', T(7, 'caecum') - 0.1, { material: 'marker', dur: 1.6, gain: 0.5, minor: true }); pp(T(7, 'caecum'), 620, 0.7, 0, false);
    k.play('impact', T(8, 'two'), { gain: 0.9 }); k.play('ding', T(8, 'two') + 0.05, { f: 'C6', gain: 0.3 });
    for (let i = 0; i < 18; i++) k.play('tick', T(9, 'millions') + i * 0.08, { gain: 0.35, pan: (i % 2) * 0.6 - 0.3, minor: true }); k.play('sparkle', T(9, 'bacteria'), { n: 6, gain: 0.5 });
    pp(T(10, 'break'), 560, 0.7); for (let i = 0; i < 5; i++) k.play('click', T(10, 'fibre') + i * 0.12, { gain: 0.5, minor: true });
    k.play('success', T(11, 'toxins') + 0.1, { f: 'C6', gain: 0.35 });
    k.play('error', T(12, 'quarter') - 0.05, { f: 'G3', gain: 0.35 }); pp(T(12, 'quarter'), 760, 0.8, 0, false); pp(T(12, 'absorbs'), 600, 0.6);
    wipe(SC[2].a); chew(SC[2].a + 0.3, SC[3].a - 0.3, 0.64);
    for (let f = Math.ceil((T(13, 'five') - 0.1) * 12); f < T(13, 'grams') * 12; f++) k.play('count', f / 12, { gain: 0.7, minor: true });
    k.play('impact', T(13, 'five'), { gain: 1.0 }); k.play('paper', T(13, 'leaves'), { dur: 1.2, gain: 0.6, minor: true });
    k.play('blip', T(14, 'water'), { f: 'E6', type: 'sine', dur: 0.25, gain: 1.4 }); k.play('ding', T(14, 'water') + 0.03, { f: 'A6', gain: 0.25 });
    wipe(SC[3].a); k.play('riser', T(15, 'sleeping') - 0.6, { dur: 0.7, gain: 0.2 }); pp(T(15, 'energy'), 600, 0.7, 0, false);
    for (let i = 0; i < 22; i++) k.play('count', T(16, 'twentytwo') - 0.15 + i * (T(16, 'day') + 0.35 - T(16, 'twentytwo')) / 22, { gain: 0.6, minor: true });
    k.play('impact', T(16, 'twentytwo'), { gain: 1.0 }); ['D5', 'F#5', 'A5', 'D6'].forEach((n, i) => k.play('ding', T(16, 'twentytwo') + i * 0.03, { f: n, gain: 0.3 - i * 0.05 }));
    wipe(SC[4].a); pp(T(17, 'baby'), 820, 0.8, 0, false); k.play('sparkle', T(17, 'koalas'), { n: 4, gain: 0.4 });
    pp(T(18, 'poop'), 420, 0.8, 0, false); k.play('stamp', T(18, 'pap'), { gain: 0.6 });
    k.play('swish', T(19, 'gut') - 0.1, { dur: 0.6, gain: 0.5 }); k.play('sparkle', T(19, 'bacteria'), { n: 6, gain: 0.45 });
    pp(T(20, 'would'), 620, 0.7, 0, false); k.play('stamp', T(20, 'poison'), { gain: 0.5 }); pp(T(21, 'twentytwo'), 760, 0.8, 0, false); k.play('success', T(21, 'sleep'), { f: 'G5', gain: 0.4 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
