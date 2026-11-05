// ================= Low-Poly Faceted, vertical 1080x1920: "Why do snakes flick their forked tongues?" =================
(function () {
  const W = 1080, HH = 1920, F = 1250;
  // ---------- BEATS: one per phrase, exact times from phrases.json ----------
  const BEATS = [{"s":0.25,"e":2.1,"text":"A snake's tongue can't taste a thing,","words":[["a",0.25],["snakes",0.32],["tongue",0.71],["cant",1.11],["taste",1.38],["a",1.71],["thing",1.77]]},{"s":2.4,"e":4.54,"text":"so why do you see it flick nonstop?","words":[["so",2.4],["why",2.56],["do",2.8],["you",2.96],["see",3.2],["it",3.43],["flick",3.59],["nonstop",3.99]]},{"s":5.09,"e":6.61,"text":"Because it's a scent collector.","words":[["because",5.09],["its",5.52],["a",5.7],["scent",5.76],["collector",6.06]]},{"s":7.16,"e":9.21,"text":"Each flick grabs tiny particles,","words":[["each",7.16],["flick",7.46],["grabs",7.84],["tiny",8.22],["particles",8.53]]},{"s":9.51,"e":11.05,"text":"from the air and the ground.","words":[["from",9.51],["the",9.79],["air",10.0],["and",10.21],["the",10.42],["ground",10.63]]},{"s":11.6,"e":12.7,"text":"It pulls back in,","words":[["it",11.6],["pulls",11.77],["back",12.2],["in",12.53]]},{"s":13.0,"e":14.78,"text":"and drops them inside the mouth.","words":[["and",13.0],["drops",13.21],["them",13.55],["inside",13.82],["the",14.24],["mouth",14.44]]},{"s":15.33,"e":17.51,"text":"From there, they reach a special organ,","words":[["from",15.33],["there",15.61],["they",15.96],["reach",16.25],["a",16.6],["special",16.67],["organ",17.16]]},{"s":17.81,"e":19.2,"text":"in the roof of the mouth.","words":[["in",17.81],["the",17.95],["roof",18.17],["of",18.47],["the",18.61],["mouth",18.83]]},{"s":19.75,"e":21.35,"text":"That's where the smelling happens.","words":[["thats",19.75],["where",20.03],["the",20.32],["smelling",20.49],["happens",20.95]]},{"s":21.9,"e":23.13,"text":"Now look at the fork.","words":[["now",21.9],["look",22.13],["at",22.44],["the",22.59],["fork",22.82]]},{"s":23.68,"e":25.05,"text":"The two tips spread apart,","words":[["the",23.68],["two",23.88],["tips",24.07],["spread",24.33],["apart",24.73]]},{"s":25.35,"e":27.4,"text":"up to twice as wide as its head.","words":[["up",25.35],["to",25.52],["twice",25.69],["as",26.12],["wide",26.29],["as",26.63],["its",26.8],["head",27.06]]},{"s":27.95,"e":29.96,"text":"So each tip samples a different spot,","words":[["so",27.95],["each",28.08],["tip",28.35],["samples",28.55],["a",29.02],["different",29.09],["spot",29.69]]},{"s":30.26,"e":31.51,"text":"like your two ears.","words":[["like",30.26],["your",30.6],["two",30.93],["ears",31.18]]},{"s":32.06,"e":33.83,"text":"If the left tip smells stronger,","words":[["if",32.06],["the",32.2],["left",32.4],["tip",32.67],["smells",32.88],["stronger",33.28]]},{"s":34.13,"e":35.2,"text":"dinner went left.","words":[["dinner",34.13],["went",34.59],["left",34.89]]},{"s":35.75,"e":37.25,"text":"That's smelling in stereo.","words":[["thats",35.75],["smelling",36.11],["in",36.68],["stereo",36.82]]},{"s":37.8,"e":38.59,"text":"In the air,","words":[["in",37.8],["the",38.0],["air",38.29]]},{"s":38.89,"e":41.15,"text":"the flicking tongue whips up tiny swirls,","words":[["the",38.89],["flicking",39.09],["tongue",39.62],["whips",40.02],["up",40.35],["tiny",40.48],["swirls",40.75]]},{"s":41.45,"e":42.71,"text":"that pull smells in,","words":[["that",41.45],["pull",41.76],["smells",42.08],["in",42.55]]},{"s":43.01,"e":44.97,"text":"sampling a hundred times more air,","words":[["sampling",43.01],["a",43.57],["hundred",43.64],["times",44.13],["more",44.48],["air",44.76]]},{"s":45.27,"e":46.42,"text":"than a simple dip.","words":[["than",45.27],["a",45.6],["simple",45.68],["dip",46.17]]},{"s":46.97,"e":48.32,"text":"If your tongue could smell,","words":[["if",46.97],["your",47.09],["tongue",47.34],["could",47.7],["smell",48.01]]},{"s":48.62,"e":50.02,"text":"what would you follow first?","words":[["what",48.62],["would",48.86],["you",49.16],["follow",49.35],["first",49.71]]}];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const T = (i, w) => { const b = BEATS[i]; if (w == null) return b.s; const f = b.words.find((x) => x[0] === w); if (!f) throw new Error('no word ' + w + ' in ' + i); return f[1]; };
  const SC = [
    { id: 'valley', a: 0, draw: sValley },
    { id: 'cut', a: BEATS[5].s - 0.15, draw: sCut },
    { id: 'top', a: BEATS[10].s - 0.2, draw: sTop },
    { id: 'night', a: BEATS[18].s - 0.2, draw: sNight },
    { id: 'end', a: BEATS[23].s - 0.2, draw: sEnd },
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
  const ICO = (() => { const t = (1 + Math.sqrt(5)) / 2; const v = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map(norm); const f = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]]; return { v, f }; })();
  const LIGHT = {
    dawn: { sun: norm([0.75, 0.55, -0.45]), col: [255, 226, 190], amb: [104, 98, 150], fog: [236, 160, 150], fogHi: [180, 140, 190], near: 40, far: 190 },
    noon: { sun: norm([0.5, 0.8, -0.35]), col: [255, 240, 214], amb: [130, 118, 130], fog: [240, 200, 160], fogHi: [240, 200, 160], near: 60, far: 300 },
    night: { sun: norm([-0.5, 0.6, -0.6]), col: [170, 190, 255], amb: [64, 62, 120], fog: [70, 60, 130], fogHi: [50, 44, 110], near: 30, far: 170 },
    gold: { sun: norm([-0.7, 0.45, -0.55]), col: [255, 204, 140], amb: [120, 92, 130], fog: [250, 170, 110], fogHi: [230, 130, 130], near: 40, far: 190 },
  };
  function paint(ctx, tris, cam, L) {
    const out = [];
    for (const tri of tris) {
      const [a, b, c] = tri.p;
      let n = norm(cross(sub(b, a), sub(c, a)));
      const cen = scl(add3(add3(a, b), c), 1 / 3), toCam = sub(cam.pos, cen);
      if (tri.terrain || tri.water) { if (n[1] < 0) n = scl(n, -1); } else if (tri.center) { if (dot(n, sub(cen, tri.center)) < 0) n = scl(n, -1); }
      if (tri.twoSided) { if (dot(n, toCam) < 0) n = scl(n, -1); } else if (dot(n, toCam) <= 0) continue;
      const pa = cam.proj(a), pb = cam.proj(b), pc = cam.proj(c);
      if (pa[2] < 0.5 || pb[2] < 0.5 || pc[2] < 0.5) continue;
      if (Math.max(pa[0], pb[0], pc[0]) < -20 || Math.min(pa[0], pb[0], pc[0]) > W + 20 || Math.max(pa[1], pb[1], pc[1]) < -20 || Math.min(pa[1], pb[1], pc[1]) > HH + 20) continue;
      const depth = (pa[2] + pb[2] + pc[2]) / 3, lam = Math.max(0, dot(n, L.sun));
      const kk = tri.obj ? 0.32 + 0.95 * lam : lam;
      let col = tri.emissive ? tri.col : [0, 1, 2].map((i) => tri.col[i] * (L.amb[i] / 255 * 0.85 + L.col[i] / 255 * kk * 0.95));
      if (tri.gem) { const v = norm(toCam), rl = sub(scl(n, 2 * dot(n, L.sun)), L.sun); col = mix3(col, [255, 244, 236], H.clamp(Math.pow(Math.max(0, dot(rl, v)), 20) * 0.7)); }
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
  // ---------- terrains (cached) ----------
  const CACHE = {};
  function terrain(key) {
    if (CACHE[key]) return CACHE[key];
    const tris = [], night = key === 'night';
    const nz = H.makeNoise(night ? 61 : 31), jr = H.rng(night ? 8 : 5), tr = H.rng(9);
    const height = (x, z) => { const valley = Math.min(19, Math.pow(Math.abs(x - 4 * Math.sin(z * 0.035)) / 40, 1.7) * 24), far = H.smooth(70, 150, z) * 22; const h = nz.fbm2(x * 0.05, z * 0.05, 4) * 6 + valley + far - 1; return H.lerp(nz.fbm2(x * 0.16, z * 0.16, 2) * 1.5 - 0.9, h, H.smooth(12, 26, Math.hypot(x, z))); };
    const CELL = 3.6, X0 = -110, X1 = 110, Z0 = -40, Z1 = 190, nx = Math.round((X1 - X0) / CELL), nc = Math.round((Z1 - Z0) / CELL), V = [];
    for (let j = 0; j <= nc; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = X0 + i * CELL + jr.range(-0.36, 0.36) * CELL, z = Z0 + j * CELL + jr.range(-0.36, 0.36) * CELL; row.push([x, height(x, z), z]); } V.push(row); }
    const tc = (y, slope) => { let c; if (night) { c = y < 6 ? [58, 84, 110] : y < 16 ? [76, 80, 130] : [190, 196, 240]; } else { c = y < 6 ? H.mix([96, 170, 112], [60, 128, 96], H.clamp(y / 6)) : y < 14 ? H.mix([60, 128, 96], [110, 112, 120], H.smooth(9, 14, y)) : y < 22 ? [118, 110, 128] : [244, 238, 248]; } if (slope > 0.55 && y > 3 && y < 22) c = H.mix(c, [124, 112, 124], 0.6); return c; };
    for (let j = 0; j < nc; j++) for (let i = 0; i < nx; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; const fs = (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]; for (const f of fs) { let n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0]))); if (n[1] < 0) n = scl(n, -1); tris.push({ p: f, col: H.mix(tc((f[0][1] + f[1][1] + f[2][1]) / 3, 1 - Math.abs(n[1])), night ? [120, 110, 180] : [170, 210, 130], tr() * 0.2), terrain: true }); } }
    const cone = (base, r, h, col, rot) => { const vs = [add3(base, [0, h, 0])]; for (let i = 0; i < 5; i++) { const a = rot + i / 5 * Math.PI * 2; vs.push(add3(base, [Math.cos(a) * r, 0, Math.sin(a) * r])); } for (let i = 0; i < 5; i++) tris.push({ p: [vs[0], vs[1 + i], vs[1 + (i + 1) % 5]], col, center: add3(base, [0, h * 0.3, 0]), obj: true }); };
    for (let kk = 0, placed = 0; kk < 1600 && placed < 170; kk++) { const x = tr.range(-70, 70), z = tr.range(-10, 120), y = height(x, z); if (y > 12 || Math.hypot(x, z) < 17 || nz.fbm2(x * 0.05 + 40, z * 0.05, 2) < -0.05) continue; const s = tr.range(1.8, 2.9), g = night ? H.mix([34, 60, 96], [44, 76, 110], tr()) : H.mix([40, 110, 90], [70, 140, 100], tr()), rot = tr() * 6; cone([x, y - 0.2, z], s * 0.75, s * 1.6, g, rot); cone([x, y + s * 0.85, z], s * 0.55, s * 1.4, night ? g : H.mix(g, [120, 180, 120], 0.25), rot + 0.6); placed++; }
    return (CACHE[key] = tris);
  }
  function sand() {
    if (CACHE.sand) return CACHE.sand;
    const tris = [], nz = H.makeNoise(14), jr = H.rng(3), tr = H.rng(21), CELL = 3.2, N = 18, V = [];
    for (let j = -N; j <= N; j++) { const row = []; for (let i = -N; i <= N; i++) { const x = i * CELL + jr.range(-0.38, 0.38) * CELL, z = j * CELL + jr.range(-0.38, 0.38) * CELL; row.push([x, nz.fbm2(x * 0.12, z * 0.12, 3) * 1.5 - 0.8, z]); } V.push(row); }
    for (let j = 0; j < 2 * N; j++) for (let i = 0; i < 2 * N; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; const fs = (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]; for (const f of fs) tris.push({ p: f, col: H.mix([232, 186, 120], [214, 150, 104], tr()), terrain: true }); }
    for (let i = 0; i < 20; i++) { const x = tr.range(-22, 22), z = tr.range(-28, 28); if (Math.abs(x) < 7 && z > -22 && z < 12) continue; const r = tr.range(0.8, 1.7), c = [x, 0, z]; ICO.f.forEach((f) => tris.push({ p: f.map((k) => add3(c, scl(ICO.v[k], r))), col: [146, 128, 132], center: c, obj: true })); }
    return (CACHE.sand = tris);
  }
  // ---------- the snake: faceted rings along a spine ----------
  const HEAD = [[0.0, 0.32, 0.2], [0.5, 0.8, 0.42], [1.4, 1.22, 0.66], [2.4, 1.5, 0.82], [3.2, 1.26, 0.74], [4.0, 0.86, 0.74], [5.2, 0.86, 0.8]];
  function snake(tris, nose, Fw, o = {}) {
    const up = [0, 1, 0], side = norm(cross(up, Fw)), len = o.len ?? 34, amp = o.amp ?? 2.6, raise = o.raise ?? 0, ground = o.ground ?? 0, sides = 8, st = [...HEAD];
    for (let d = 6.5; d < len; d += 1.3) st.push([d, 0.92, 0.9]);
    const pos = (d) => add3(add3(nose, scl(Fw, -d)), add3(scl(side, Math.sin(d * 0.26 + (o.ph ?? 0)) * amp * H.smooth(4, 13, d)), [0, -raise * H.smooth(3, 15, d) + (o.g ? 0 : 0), 0]));
    const rings = st.map(([d, w, h], idx) => { const c = pos(d), T = norm(sub(pos(d - 0.3), pos(d + 0.3))), S = norm(cross(up, T)), U = cross(T, S); const r = []; for (let i = 0; i < sides; i++) { const a = (i + 0.5) / sides * Math.PI * 2; r.push(add3(c, add3(scl(S, Math.cos(a) * w), scl(U, Math.sin(a) * h)))); } return { c, r, d, idx }; });
    const yel = [240, 196, 88], grn = [72, 158, 118], dgn = [44, 120, 104], bel = [232, 220, 170];
    for (let k = 0; k < rings.length - 1; k++) { const A = rings[k], B = rings[k + 1], center = scl(add3(A.c, B.c), 0.5); for (let i = 0; i < sides; i++) { const j = (i + 1) % sides, sinA = Math.sin((i + 1) / sides * Math.PI * 2), band = k > 5 && k % 4 === 0; let col = sinA < -0.65 ? bel : band ? yel : (i + k) % 2 ? grn : dgn; if (k <= 5 && sinA >= -0.65) col = sinA > 0.5 ? [58, 138, 110] : (i + k) % 2 ? [84, 172, 124] : [62, 146, 112]; tris.push({ p: [A.r[i], A.r[j], B.r[j]], col, center, obj: true }); tris.push({ p: [A.r[i], B.r[j], B.r[i]], col: mix3(col, [255, 255, 255], 0.05), center, obj: true }); } }
    for (let i = 0; i < sides; i++) tris.push({ p: [nose, rings[0].r[i], rings[0].r[(i + 1) % sides]], col: [58, 138, 110], center: pos(0.6), obj: true });
    const eyes = [-1, 1].map((sg) => { const p = add3(pos(1.75), add3(scl(side, sg * 0.98), [0, 0.42, 0])); ICO.f.forEach((f) => tris.push({ p: f.map((k) => add3(p, scl(ICO.v[k], 0.34))), col: [255, 196, 64], center: p, obj: true, gem: true })); return { p, out: scl(side, sg) }; });
    return { eyes, side };
  }
  function eyeSlits(ctx, cam, eyes) { for (const e of eyes) { const toC = norm(sub(cam.pos, e.p)); if (dot(toC, e.out) < -0.1 && Math.abs(toC[1]) < 0.75) continue; const q = cam.proj(add3(e.p, scl(toC, 0.32))), r = 0.28 * F / q[2]; ctx.fillStyle = '#20163f'; ctx.beginPath(); ctx.moveTo(q[0], q[1] - r); ctx.lineTo(q[0] + r * 0.28, q[1]); ctx.lineTo(q[0], q[1] + r); ctx.lineTo(q[0] - r * 0.28, q[1]); ctx.closePath(); ctx.fill(); } }
  // ---------- tongue ----------
  const TC = [226, 52, 108];
  function ribbon(ctx, a, b, wa, wb, col = TC) { const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L; ctx.fillStyle = H.rgba(H.mix(col, [255, 255, 255], 0.28)); ctx.beginPath(); ctx.moveTo(a[0] + nx * wa, a[1] + ny * wa); ctx.lineTo(b[0] + nx * wb, b[1] + ny * wb); ctx.lineTo(b[0], b[1]); ctx.lineTo(a[0], a[1]); ctx.closePath(); ctx.fill(); ctx.fillStyle = H.rgba(H.mix(col, [60, 10, 60], 0.28)); ctx.beginPath(); ctx.moveTo(a[0] - nx * wa, a[1] - ny * wa); ctx.lineTo(b[0] - nx * wb, b[1] - ny * wb); ctx.lineTo(b[0], b[1]); ctx.lineTo(a[0], a[1]); ctx.closePath(); ctx.fill(); }
  function tongueShape(nose, Fw, side, ext, spread, osc, Ls = 3.4, Lt = 2.4) { const up = [0, 1, 0], base = add3(nose, [0, -0.06, 0]), stem = add3(add3(base, scl(Fw, ext * Ls)), scl(up, osc)), tip = (sg) => add3(add3(add3(stem, scl(Fw, ext * Lt)), scl(side, sg * spread * ext)), scl(up, osc * 1.7)); return { base, stem, L: tip(-1), R: tip(1) }; }
  function drawTongue(ctx, cam, s, wd = 0.17) { const b = cam.proj(s.base), m = cam.proj(s.stem), l = cam.proj(s.L), r = cam.proj(s.R), w = (p) => (wd * F) / p[2]; ribbon(ctx, b, m, w(b), w(m) * 0.9); ribbon(ctx, m, l, w(m) * 0.62, 1.5); ribbon(ctx, m, r, w(m) * 0.62, 1.5); }
  const flick = (t, on = 1) => { const p = ((t % 1.15) + 1.15) % 1.15, e = Math.sin(Math.PI * H.clamp(p / 0.6)); return { ext: e * on, osc: Math.sin(t * 40) * 0.22 * e * on }; };
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
  function gem2(ctx, x, y, r, spin, cols = ['#ff7060', '#ffc878', '#ec8cc8', '#967cf0']) { for (let i = 0; i < 8; i++) { const a0 = spin + i / 8 * Math.PI * 2, a1 = spin + (i + 1) / 8 * Math.PI * 2; ctx.fillStyle = H.rgba(H.mix(cols[i % cols.length], '#ffffff', 0.25 * (0.5 + 0.5 * Math.cos(a0 - 2)))); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a0) * r, y + Math.sin(a0) * r); ctx.lineTo(x + Math.cos(a1) * r, y + Math.sin(a1) * r); ctx.closePath(); ctx.fill(); } }
  function glow(ctx, x, y, r, col, a) { const g = ctx.createRadialGradient(x, y, r * 0.15, x, y, r); g.addColorStop(0, H.rgba(col, a)); g.addColorStop(1, H.rgba(col, 0)); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = g; ctx.fillRect(x - r, y - r, 2 * r, 2 * r); ctx.restore(); }
  // faceted arrow, from the reference
  function lpArrow(ctx, a, c, b, prog, colA, w = 18) { if (prog <= 0) return; const q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]]; const N = 7, pts = []; for (let i = 0; i <= N; i++) pts.push(q(prog * i / N)); for (let i = 0; i < N; i++) ribbon(ctx, pts[i], pts[i + 1], w / 2, w / 2, colA); const e = pts[N], e0 = pts[N - 1], an = Math.atan2(e[1] - e0[1], e[0] - e0[0]); ctx.save(); ctx.translate(e[0], e[1]); ctx.rotate(an); ctx.fillStyle = H.rgba(H.mix(colA, '#ffffff', 0.3)); ctx.beginPath(); ctx.moveTo(w, 0); ctx.lineTo(-w * 1.1, -w * 1.2); ctx.lineTo(-w * 1.1, 0); ctx.closePath(); ctx.fill(); ctx.fillStyle = H.rgba(H.mix(colA, '#28144a', 0.25)); ctx.beginPath(); ctx.moveTo(w, 0); ctx.lineTo(-w * 1.1, w * 1.2); ctx.lineTo(-w * 1.1, 0); ctx.closePath(); ctx.fill(); ctx.restore(); }

  // ================= SCENE 1: the dawn valley, snake rears up =================
  function sValley(ctx, t) {
    const tb = T(2), tc = T(3);
    const camA = [3.0, 4.7, -6.2], camB = [2.2, 4.5, -5.0], camC = [9.5, 5, -5], u1 = EI(t, 2.3, 4.6), u2 = EI(t, tb, tc + 0.3);
    const pos = mix3(mix3(camA, camB, u1), camC, u2), tar = mix3([0, 4.9, -0.6], [0, 4.6, -4, ], u2), cam = camLook(pos, tar);
    sky(ctx, [[0, '#1b2350'], [0.38, '#4d3f84'], [0.7, '#c06a93'], [1, '#ffb08a']], 77, 150, cam, '#ffd49a');
    ctx.fillStyle = '#4f8a64'; ctx.fillRect(0, 1100, W, HH - 1100); const nose = [0, 3.7, -2], Fw = norm([0.04, 0, -1]), tris = terrain('valley').slice();
    const sn = snake(tris, nose, Fw, { raise: 3.0, ph: 0.6 });
    paint(ctx, tris, cam, LIGHT.dawn);
    eyeSlits(ctx, cam, sn.eyes);
    const hold = EO(t, T(3) - 0.5, T(3) - 0.1), fl = flick(t), ext = H.lerp(fl.ext, 1, hold), osc = fl.osc * (1 - hold) + Math.sin(t * 22) * 0.06 * hold, spread = 0.95;
    const sp = tongueShape(nose, Fw, sn.side, ext, spread, osc); drawTongue(ctx, cam, sp);
    // scent particles fly to the tips
    const R = H.rng(404), COLS = ['#fff0a8', '#ffb08a', '#c8f0ff'];
    for (let i = 0; i < 46; i++) { const air = i % 2 === 0, s0 = air ? T(3, 'grabs') + i * 0.075 : T(4, 'ground') - 0.5 + i * 0.05, x0 = R.range(-7, 7), y0 = air ? R.range(3, 10) : 0.15, z0 = R.range(-11, -1), side = R() < 0.5 ? sp.L : sp.R, sd = R.range(0.9, 1.3); const u = ph(t, s0, s0 + sd), e = H.ease.inOut(u); if (u <= 0) continue; const w = add3(mix3([x0, y0, z0], side, e), [Math.sin(t * 2 + i) * 0.2 * (1 - e), 0, 0]), p = cam.proj(w); if (p[2] < 1) continue; shard(ctx, p[0], p[1], Math.max(15, 0.2 * F / p[2]) * (u >= 1 ? 0.7 : 1), COLS[i % 3], t * 2 + i); }
    // type
    const a = T(0, 'taste'), b = T(1, 'flick');
    lpTag(ctx, 540, 290, 'TONGUE', { size: 100, k: pop(t, T(0, 'tongue'), T(1) - 0.1) });
    lpTag(ctx, 540, 455, "CAN'T TASTE", { size: 100, bg: CORAL, col: '#fff', k: pop(t, a, T(1) - 0.1) });
    lpTag(ctx, 540, 330, 'SO WHY FLICK?', { size: 100, bg: INK, col: '#fff', k: pop(t, T(1, 'why'), tb - 0.15) });
    lpTag(ctx, 540, 280, 'SCENT', { size: 104, k: pop(t, T(2, 'scent'), tc + 2.0) });
    lpTag(ctx, 540, 445, 'COLLECTOR', { size: 104, bg: CORAL, col: '#fff', k: pop(t, T(2, 'collector'), tc + 2.0) });
    lpTag(ctx, 270, 620, 'AIR', { size: 76, bg: '#c8f0ff', k: pop(t, T(4, 'air')) });
    lpTag(ctx, 770, 1500, 'GROUND', { size: 76, bg: '#ffd49a', k: pop(t, T(4, 'ground')) });
  }
  // ================= SCENE 2: the cutaway =================
  function skinLayer(key, pts, ramp, seed) {
    if (CACHE[key]) return CACHE[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), R = H.rng(seed), S = 84;
    g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.closePath(); g.clip();
    const V = []; for (let j = 0; j < 26; j++) { const r = []; for (let i = 0; i < 18; i++) r.push([i * S - 100 + R.range(-26, 26) + (j % 2) * S / 2, j * S * 0.86 + 300 + R.range(-20, 20)]); V.push(r); }
    for (let j = 0; j < 25; j++) for (let i = 0; i < 17; i++) { const A = V[j][i], B = V[j][i + 1], C = V[j + 1][i], D = V[j + 1][i + 1]; for (const f of [[A, B, C], [B, D, C]]) { const nx = R(), col = H.mix(ramp[0], ramp[1], H.clamp(nx * 0.75 + (1 - (f[0][1] - 500) / 900) * 0.3)); const fs = H.rgba(col); g.fillStyle = fs; g.strokeStyle = fs; g.beginPath(); g.moveTo(...f[0]); g.lineTo(...f[1]); g.lineTo(...f[2]); g.closePath(); g.fill(); g.stroke(); } }
    return (CACHE[key] = c);
  }
  const UP = [[-80, 700], [150, 590], [480, 580], [740, 690], [890, 830], [905, 905], [870, 940], [600, 950], [330, 950], [160, 1000], [-80, 1010]];
  const LO = [[-80, 1010], [160, 1006], [420, 1046], [700, 1046], [860, 1020], [880, 1060], [800, 1110], [520, 1190], [220, 1250], [-80, 1270]];
  const CAV = [[140, 985], [340, 950], [600, 950], [800, 942], [860, 980], [800, 1040], [420, 1052], [150, 1010]];
  function sCut(ctx, t) {
    if (!CACHE.mosaic) { const c = H.layer(W, HH), g = c.getContext('2d'), R = H.rng(12), S = 150; const V = []; for (let j = 0; j < 16; j++) { const r = []; for (let i = 0; i < 10; i++) r.push([i * S - 100 + R.range(-40, 40) + (j % 2) * S / 2, j * S - 100 + R.range(-40, 40)]); V.push(r); } for (let j = 0; j < 15; j++) for (let i = 0; i < 9; i++) { const A = V[j][i], B = V[j][i + 1], C = V[j + 1][i], D = V[j + 1][i + 1]; for (const f of [[A, B, C], [B, D, C]]) { const col = H.mix('#2b2a6e', '#7a4a9c', H.clamp(f[0][1] / 1900 + R.range(-0.14, 0.14))); const fs = H.rgba(col); g.fillStyle = fs; g.strokeStyle = fs; g.beginPath(); g.moveTo(...f[0]); g.lineTo(...f[1]); g.lineTo(...f[2]); g.closePath(); g.fill(); g.stroke(); } } CACHE.mosaic = c; }
    ctx.drawImage(CACHE.mosaic, 0, 0);
    const b5 = T(5, 'pulls'), drop = T(6, 'drops'), reach = T(7, 'reach'), roof = T(8, 'roof'), smell = T(9, 'smelling');
    const open = H.lerp(0.26, 0.015, EI(t, reach - 0.4, reach + 0.45)), retract = EI(t, b5 - 0.1, drop - 0.1);
    const zoom = H.lerp(1.0, 1.1, ph(t, T(5), T(9) + 2)), cx = 400, cy = 980;
    ctx.save(); ctx.translate(cx + 40, cy); ctx.scale(zoom, zoom); ctx.translate(-cx, -cy);
    const hinge = [130, 1000], J = (p) => { const dx = p[0] - hinge[0], dy = p[1] - hinge[1], c = Math.cos(open), s = Math.sin(open); return [hinge[0] + dx * c - dy * s, hinge[1] + dx * s + dy * c]; };
    // mouth cavity
    ctx.fillStyle = '#5c1d44'; ctx.beginPath(); ctx.moveTo(140, 990); ctx.lineTo(340, 950); ctx.lineTo(600, 950); ctx.lineTo(840, 942); [[800, 1040], [420, 1052], [160, 1006]].map(J).forEach((p) => ctx.lineTo(p[0], p[1])); ctx.closePath(); ctx.fill();
    // lower jaw
    ctx.save(); ctx.translate(hinge[0], hinge[1]); ctx.rotate(open); ctx.translate(-hinge[0], -hinge[1]);
    ctx.drawImage(skinLayer('lo', LO, ['#e8dca8', '#c9c088'], 5), 0, 0);
    ctx.fillStyle = '#b04070'; ctx.beginPath(); ctx.moveTo(150, 1006); ctx.lineTo(420, 1046); ctx.lineTo(700, 1046); ctx.lineTo(860, 1020); ctx.lineTo(700, 1066); ctx.lineTo(420, 1068); ctx.lineTo(160, 1026); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#ff9fb8'; ctx.beginPath(); ctx.moveTo(470, 1046); ctx.lineTo(530, 1014); ctx.lineTo(600, 1012); ctx.lineTo(650, 1046); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#e8708f'; ctx.beginPath(); ctx.moveTo(530, 1014); ctx.lineTo(600, 1012); ctx.lineTo(562, 1046); ctx.closePath(); ctx.fill();
    ctx.restore();
    // tongue from its sheath to outside the mouth
    const sheath = J([330, 1030]), mouth = J([800, 1020]), outP = [1120, 1060 + 0 * Math.sin(t * 30)];
    const tipRoot = mix3([outP[0], outP[1], 0], [sheath[0] + 110, sheath[1] - 6, 0], retract), fork = [tipRoot[0], tipRoot[1]], L1 = [fork[0] + 100 * (1 - retract * 0.7), fork[1] - 46 * (1 - retract * 0.7)], L2 = [fork[0] + 110 * (1 - retract * 0.7), fork[1] + 36 * (1 - retract * 0.7)];
    ribbon(ctx, sheath, fork, 15, 11); ribbon(ctx, fork, L1, 8, 1); ribbon(ctx, fork, L2, 8, 1);
    // particles: ride the tips, fall on the pad, then lift to the organ
    const pad = J([560, 1006]), organ = [560, 912], R = H.rng(71), PC = ['#fff0a8', '#ffb08a', '#c8f0ff'];
    for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2, o0 = [Math.cos(a) * 26, Math.sin(a) * 20]; const tipP = i % 2 ? L1 : L2; const f1 = EI(t, drop - 0.1 + i * 0.02, drop + 0.55 + i * 0.02), f2 = EI(t, reach - 0.1 + i * 0.05, roof - 0.1 + i * 0.03); const px = [pad[0] + o0[0] * 1.4, pad[1] + o0[1] * 0.4], qx = [organ[0] + o0[0] * 0.8, organ[1] + o0[1] * 0.8]; const X = H.lerp(H.lerp(tipP[0] + o0[0] * 0.5, px[0], f1), qx[0], f2), Y = H.lerp(H.lerp(tipP[1] + o0[1] * 0.5, px[1], f1), qx[1], f2) - Math.sin(f1 * Math.PI) * 30; if (f2 >= 1 && t > smell + 0.3) continue; shard(ctx, X, Y, 15, PC[i % 3], t * 3 + i); }
    // upper head
    ctx.drawImage(skinLayer('up', UP, ['#3f9a76', '#74c48a'], 9), 0, 0);
    // organ in the roof
    const on = EO(t, T(7, 'organ') - 0.15, T(7, 'organ') + 0.25), pulse = H.clamp(EO(t, roof, roof + 0.4)) * (0.6 + 0.4 * Math.sin(t * 7));
    if (on > 0) { glow(ctx, organ[0], organ[1], 200, CORAL, 0.25 + 0.5 * pulse); gem2(ctx, organ[0], organ[1], 62 * H.ease.back(ph(t, T(7, 'organ') - 0.15, T(7, 'organ') + 0.2)), t * 0.5); }
    // the eye
    ctx.fillStyle = '#ffc440'; ctx.beginPath(); for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2, x = 690 + Math.cos(a) * 44, y = 740 + Math.sin(a) * 44; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.closePath(); ctx.fill(); ctx.fillStyle = '#20163f'; ctx.beginPath(); ctx.moveTo(690, 702); ctx.lineTo(702, 740); ctx.lineTo(690, 778); ctx.lineTo(678, 740); ctx.closePath(); ctx.fill();
    // brain link
    const lk = EI(t, smell - 0.2, smell + 0.45);
    if (lk > 0) { lpArrow(ctx, [530, 860], [430, 790], [300, 780], lk, '#ffc878', 22); glow(ctx, 250, 770, 190, '#ffc878', 0.5 * lk * (0.7 + 0.3 * Math.sin(t * 8))); gem2(ctx, 250, 770, 74 * H.ease.back(lk), -t * 0.6, ['#ffc878', '#fff0a8', '#ff9f70', '#ffd49a']); }
    ctx.restore();
    lpTag(ctx, 540, 300, 'BACK IN', { size: 104, k: pop(t, b5, T(6, 'inside') - 0.05) });
    lpTag(ctx, 540, 300, 'DROPPED', { size: 104, bg: CORAL, col: '#fff', k: pop(t, T(6, 'inside'), T(7) - 0.05) });
    lpTag(ctx, 540, 245, "JACOBSON'S ORGAN", { size: 80, bg: CORAL, col: '#fff', k: pop(t, T(7, 'organ')) });
    lpTag(ctx, 540, 385, 'ROOF OF THE MOUTH', { size: 64, k: pop(t, roof, smell - 0.2) });
    lpTag(ctx, 540, 395, 'SMELL HAPPENS HERE', { size: 68, bg: INK, col: '#fff', k: pop(t, smell) });
  }
  // ================= SCENE 3: from above, the fork and the stereo =================
  function sTop(ctx, t) {
    const cam = camLook([0, 15.6, 1.8], [0, 0, 2]), tris = sand().slice();
    ctx.fillStyle = '#e8ba78'; ctx.fillRect(0, 0, W, HH);
    const turn = EI(t, T(16, 'dinner') - 0.05, T(16, 'left') + 0.25) * 0.42, zoomed = 0;
    const piv = [0, 1.4, -4.5], Fw = norm([-Math.sin(turn), 0, Math.cos(turn)]), nose = add3(piv, scl(Fw, 4.5));
    const sn = snake(tris, nose, Fw, { len: 30, amp: 1.8, ph: -0.4 });
    paint(ctx, tris, cam, LIGHT.noon);
    eyeSlits(ctx, cam, sn.eyes);
    const sa = T(11, 'spread'), s0 = EI(t, sa - 0.1, sa + 0.5), spread = H.lerp(H.lerp(0.18, 3.1, s0), 1.7, turn / 0.42);
    const hold = EO(t, T(10) - 0.1, T(10, 'fork') - 0.2), fl = flick(t), ext = H.lerp(fl.ext, 1, hold);
    const sp = tongueShape(nose, Fw, sn.side, ext, spread, 0, 3.6, 2.8);
    // scent cloud, thick on the left
    const smell = EO(t, T(15, 'if') - 0.1, T(15, 'left') + 0.3), R = H.rng(90), cols = ['#b78cff', '#ff9fd0', '#fff0a8'];
    if (smell > 0) for (let i = 0; i < 60; i++) { const left = i < 48, x0 = left ? R.range(-12, -1.2) : R.range(1.5, 9), z0 = R.range(0, 11), drift = Math.sin(t * 1.2 + i) * 0.5, p = cam.proj([x0 + drift, 0.5, z0 + Math.cos(t + i) * 0.4]); const a = smell * H.clamp((i * 0.05 + 0.2)); if (a <= 0) continue; ctx.globalAlpha = Math.min(1, a); shard(ctx, p[0], p[1], R.range(12, 25), cols[i % 3], t + i); ctx.globalAlpha = 1; }
    drawTongue(ctx, cam, sp, 0.2);
    const lp = cam.proj(sp.L), rp = cam.proj(sp.R);
    // width bars on "twice"
    const tw = T(12, 'twice'), bars = EO(t, tw - 0.15, tw + 0.35) * (1 - EI(t, T(13) - 0.2, T(13)));
    if (bars > 0) {
      const hp = cam.proj(add3(nose, scl(Fw, -2.4))), hw = 1.5 * F / hp[2], by = hp[1] + 4;
      ctx.globalAlpha = bars; ctx.fillStyle = '#fff'; [[hp[0] - hw, by - 16, hw * 2, 32]].forEach(([x, y, w, h]) => { ctx.fillStyle = 'rgba(42,31,79,0.82)'; ctx.fillRect(x, y - 2, w, 8); ctx.fillRect(x - 3, y - 24, 8, 52); ctx.fillRect(x + w - 3, y - 24, 8, 52); });
      ctx.fillStyle = 'rgba(255,112,96,0.95)'; ctx.fillRect(lp[0], lp[1] - 46, rp[0] - lp[0], 10); ctx.fillRect(lp[0] - 3, lp[1] - 66, 10, 50); ctx.fillRect(rp[0] - 7, rp[1] - 66, 10, 50); ctx.globalAlpha = 1;
      lpTag(ctx, 540, lp[1] - 140, '2x HEAD WIDTH', { size: 72, bg: CORAL, col: '#fff', k: pop(t, tw, T(13) - 0.2) });
    }
    // tip badges
    const badge = pop(t, T(13, 'tip'), T(16, 'dinner') - 0.2);
    if (badge > 0.01) { lpTag(ctx, Math.max(70, lp[0]), lp[1] - 62, 'L', { size: 60, bg: '#fff0a8', k: badge }); lpTag(ctx, rp[0], rp[1] - 62, 'R', { size: 60, bg: '#c8f0ff', k: badge }); }
    // two ears inset
    const e0 = T(14, 'two') - 0.15, e1 = T(15) - 0.15, ek = H.ease.back(ph(t, e0 - 0.1, e0 + 0.2)) * (1 - EI(t, e1, e1 + 0.2));
    if (ek > 0.01) {
      ctx.save(); ctx.translate(540, 335); ctx.scale(ek, ek);
      const pf = (pts, c) => { ctx.fillStyle = H.rgba(c); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); };
      const skin = [244, 188, 148], r = 112;
      pf([[-r * 0.9, -30], [-r * 1.28, -40], [-r * 1.38, 20], [-r * 0.95, 44]], [214, 150, 116]); pf([[r * 0.9, -30], [r * 1.28, -40], [r * 1.38, 20], [r * 0.95, 44]], [228, 166, 128]);
      const hx = [[0, -r], [r * 0.86, -r * 0.5], [r * 0.92, r * 0.36], [0, r], [-r * 0.92, r * 0.36], [-r * 0.86, -r * 0.5]]; for (let i = 0; i < 6; i++) pf([[0, 0], hx[i], hx[(i + 1) % 6]], H.mix(skin, [196, 128, 110], i / 6));
      for (const sg of [-1, 1]) { pf([[sg * 40, -24], [sg * 20, -8], [sg * 46, -2]], [42, 31, 79]); for (let k = 0; k < 3; k++) { const u = ((t * 1.3 + k / 3) % 1), x = sg * H.lerp(370, r * 1.5, u); ctx.globalAlpha = 1 - u * 0.4; shard(ctx, x, 0, 26 - k * 3, sg < 0 ? '#fff0a8' : '#c8f0ff', 0); ctx.globalAlpha = 1; } }
      pf([[-36, 44], [36, 44], [0, 62]], [176, 96, 92]);
      ctx.restore();
    }
    // stronger bars
    const k = pop(t, T(15, 'stronger'), T(16) - 0.05);
    if (k > 0.01) { const bx = (x, h, c) => { ctx.fillStyle = H.rgba(H.mix(c, '#ffffff', 0.15)); ctx.fillRect(x, 520 - h, 92, h); ctx.fillStyle = H.rgba(H.mix(c, '#28144a', 0.2)); ctx.fillRect(x + 46, 520 - h, 46, h); }; bx(340, 300 * EO(t, T(15, 'stronger') - 0.1, T(15, 'stronger') + 0.4), '#ff7060'); bx(648, 74 * EO(t, T(15, 'stronger') - 0.1, T(15, 'stronger') + 0.4), '#7fb6e8'); lpTag(ctx, 386, 575, 'L', { size: 56, bg: '#fff0a8', k }); lpTag(ctx, 694, 575, 'R', { size: 56, bg: '#c8f0ff', k }); }
    // dinner: a faceted mouse off to the left
    const mk = H.ease.back(ph(t, T(16, 'dinner') - 0.15, T(16, 'dinner') + 0.2));
    if (mk > 0.01) { const mp = cam.proj([-3.9, 0.6, 12.0 - 0]), x = Math.max(230, mp[0]), y = 430; ctx.save(); ctx.translate(x, y); ctx.scale(mk * 1.3, mk * 1.3); ctx.rotate(0.3); const pf = (pts, c) => { ctx.fillStyle = H.rgba(c); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); }; pf([[0, 62], [10, 130], [36, 170], [26, 110]], [226, 160, 170]); pf([[-40, 16], [0, -58], [0, 74], [-30, 58]], [176, 170, 190]); pf([[40, 16], [0, -58], [0, 74], [30, 58]], [150, 144, 170]); pf([[-34, -34], [-68, -60], [-46, -92], [-14, -66]], [226, 180, 196]); pf([[34, -34], [68, -60], [46, -92], [14, -66]], [206, 160, 180]); pf([[-24, -44], [0, -96], [24, -44], [0, -20]], [196, 190, 206]); pf([[-6, -92], [6, -92], [0, -104]], [255, 120, 140]); ctx.restore(); }
    // type
    lpTag(ctx, 540, 300, 'THE FORK', { size: 110, k: pop(t, T(10, 'fork'), T(12) - 0.1) });
    lpTag(ctx, 540, 470, 'SPREADS APART', { size: 84, bg: CORAL, col: '#fff', k: pop(t, sa, T(12) - 0.1) });
    lpTag(ctx, 540, 300, 'TWO SPOTS', { size: 104, bg: INK, col: '#fff', k: pop(t, T(13, 'different'), T(14, 'like') - 0.05) });
    lpTag(ctx, 540, 600, 'LIKE TWO EARS', { size: 66, k: pop(t, T(14, 'ears') - 0.05, e1) });
    lpTag(ctx, 540, 270, 'STRONGER', { size: 90, bg: CORAL, col: '#fff', k: pop(t, T(15, 'stronger'), T(16) - 0.05) });
    lpTag(ctx, 620, 280, 'GO LEFT', { size: 104, bg: INK, col: '#fff', k: pop(t, T(16, 'left'), T(17) - 0.05) });
    lpTag(ctx, 540, 280, 'STEREO SMELL', { size: 112, bg: CORAL, col: '#fff', k: pop(t, T(17, 'stereo') - 0.05) });
  }
  // ================= SCENE 4: night air, the swirls =================
  function sNight(ctx, t) {
    const cam = camLook([2.7 + Math.sin(t * 0.3) * 0.3, 4.2, -12.5], [2.8, 5.7, 0]);
    sky(ctx, [[0, '#0d1240'], [0.5, '#262461'], [0.85, '#5a3f8f'], [1, '#8a5aa0']], 15, 240, cam, '#dbe2ff');
    ctx.fillStyle = '#2b3566'; ctx.fillRect(0, 1200, W, HH - 1200); const tris = terrain('night').slice(), nose = [0.7, 3.2, 0], Fw = norm([1, 0, -0.12]);
    const sn = snake(tris, nose, Fw, { raise: 2.6, ph: 1.1, len: 30 });
    paint(ctx, tris, cam, LIGHT.night);
    eyeSlits(ctx, cam, sn.eyes);
    const osc = Math.sin(t * 44) * 0.5;
    const sp = tongueShape(nose, Fw, sn.side, 1, 0.5, osc * (0.5 + 0.5 * EO(t, T(19, 'flicking') - 0.1, T(19, 'flicking') + 0.3)), 2.6, 2.2);
    // ghost trail so the blur of motion reads
    for (const k of [-0.9, 0.9]) { ctx.globalAlpha = 0.28; drawTongue(ctx, cam, tongueShape(nose, Fw, sn.side, 1, 0.5, 0.45 * k, 2.6, 2.2), 0.12); ctx.globalAlpha = 1; }
    drawTongue(ctx, cam, sp, 0.17);
    // two pairs of swirls, one above and one below each side of the tip
    const sw = EO(t, T(19, 'swirls') - 0.15, T(19, 'swirls') + 0.45);
    if (sw > 0) { const tp = cam.proj(add3(nose, scl(Fw, 4.0))), scale = F / tp[2]; [[-0.9, 1.75, 1], [-0.9, -1.7, -1], [1.2, 1.45, -1], [1.2, -1.4, 1]].forEach(([dx, dy, dir], c) => { const X = tp[0] + dx * scale, Y = tp[1] - dy * scale, Rr = 1.0 * scale * sw; for (let i = 0; i < 18; i++) { const a = dir * t * 3.4 + i / 18 * Math.PI * 2, rr = Rr * (0.38 + 0.62 * ((i % 6) / 6)), x = X + Math.cos(a) * rr, y = Y + Math.sin(a) * rr * 0.92; shard(ctx, x, y, 12 + (i % 3) * 4, ['#c8f0ff', '#967cf0', '#fff0a8'][c % 3 === 0 ? i % 3 : (i + 1) % 3], a); } }); }
    // smells get pulled in
    const pu = T(20, 'pull');
    if (t > pu - 0.1) { const tp = cam.proj(add3(nose, scl(Fw, 4.0))), R = H.rng(33); for (let i = 0; i < 26; i++) { const a = R() * Math.PI * 2, s = 280 + R() * 240, d0 = R(), u = ((t - pu) * 0.9 + d0) % 1, r = s * (1 - H.ease.in(u)); const x = tp[0] + Math.cos(a + u * 2) * r, y = tp[1] + Math.sin(a + u * 2) * r * 0.8; if (y < 920) continue; ctx.globalAlpha = H.clamp((t - pu) * 3); shard(ctx, x, y, 12, '#ffb08a', t * 3 + i); ctx.globalAlpha = 1; } }
    // the hundred: a 10x10 of gems, then the single dip
    const hu = T(21, 'hundred'), gk = EO(t, hu - 0.15, hu + 0.05), filled = Math.round(100 * Math.pow(EO(t, hu - 0.15, T(21, 'air')), 0.8));
    if (gk > 0) { const x0 = 408, y0 = 460, s = 44; for (let j = 0; j < 10; j++) for (let i = 0; i < 10; i++) if (j * 10 + i < filled) shard(ctx, x0 + i * s + s / 2, y0 + j * s + s / 2, 20, ['#c8f0ff', '#967cf0'][(i + j) % 2], 0.5); lpTag(ctx, 620, 345, '100x AIR', { size: 112, bg: CORAL, col: '#fff', k: pop(t, hu) }); }
    const dip = T(22, 'dip') - 0.5, dk = H.ease.back(ph(t, dip - 0.1, dip + 0.2));
    if (dk > 0.01) { shard(ctx, 215, 690, 34 * dk, '#fff0a8', 0.5); lpTag(ctx, 215, 800, '1 DIP', { size: 60, k: dk }); }
    lpTag(ctx, 540, 350, 'TINY SWIRLS', { size: 104, k: pop(t, T(19, 'swirls'), T(21, 'hundred') - 0.15) });
    lpTag(ctx, 540, 515, 'PULL SMELLS IN', { size: 76, bg: INK, col: '#fff', k: pop(t, T(20, 'pull'), T(21, 'hundred') - 0.15) });
    lpTag(ctx, 540, 350, 'IN THE AIR', { size: 104, bg: '#c8f0ff', k: pop(t, T(18, 'air') - 0.15, T(19, 'swirls') - 0.05) });
  }
  // ================= SCENE 5: golden valley, the question =================
  function sEnd(ctx, t) {
    const u = ph(t, T(23) - 0.2, DURATION), cam = camLook([0.9 + u * 1.0, 4.5, -7.6 + u * 0.8], [0.9, 4.9, -0.8]);
    sky(ctx, [[0, '#3b2a6d'], [0.45, '#b5527d'], [0.8, '#ff9266'], [1, '#ffcf8a']], 41, 50, cam, '#fff0c0');
    ctx.fillStyle = '#6b8a58'; ctx.fillRect(0, 1100, W, HH - 1100); const tris = terrain('valley').slice(), nose = [0, 3.7, -2], Fw = norm([-0.8, 0, -0.6]);
    const sn = snake(tris, nose, Fw, { raise: 3.0, ph: 2.1 });
    paint(ctx, tris, cam, LIGHT.gold); eyeSlits(ctx, cam, sn.eyes);
    const fl = flick(t); drawTongue(ctx, cam, tongueShape(nose, Fw, sn.side, Math.max(0.15, fl.ext), 0.8, fl.osc, 2.4, 1.8));
    lpTag(ctx, 540, 280, 'YOUR TONGUE', { size: 104, k: pop(t, T(23, 'tongue')) });
    lpTag(ctx, 540, 445, 'COULD SMELL...', { size: 92, bg: CORAL, col: '#fff', k: pop(t, T(23, 'smell')) });
    const q = T(24, 'follow'), qk = H.ease.back(ph(t, q - 0.12, q + 0.2));
    lpTag(ctx, 540, 1490, 'FOLLOW WHAT FIRST?', { size: 80, bg: INK, col: '#fff', k: qk });
  }
  // ---------- facet flip transition (the medium's own scene change) ----------
  let LA = null, LB = null, TILES = null;
  function tiles() { if (TILES) return TILES; const R = H.rng(6), S = 170, V = []; for (let j = 0; j <= 13; j++) { const r = []; for (let i = 0; i <= 8; i++) r.push([i * S - 90 + R.range(-40, 40), j * S - 90 + R.range(-40, 40)]); V.push(r); } const out = []; for (let j = 0; j < 13; j++) for (let i = 0; i < 8; i++) { const A = V[j][i], B = V[j][i + 1], C = V[j + 1][i], D = V[j + 1][i + 1]; for (const f of [[A, B, C], [B, D, C]]) { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; out.push({ f, cx, cy, d: Math.hypot(cx - 540, cy - 1100) + R() * 160 }); } } return (TILES = out); }
  const TR = 0.55;
  function explainer(ctx, W_, H_, t) {
    let i = 0; while (i < SC.length - 1 && t >= SC[i + 1].a + TR / 2) i++;
    const nx = SC[i + 1], inTr = nx && t >= nx.a - TR / 2;
    if (!inTr) { SC[i].draw(ctx, t); return; }
    if (!LA) { LA = H.layer(W, HH); LB = H.layer(W, HH); }
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
    k.music('pulse', 0.2, DURATION, { bpm: 96, gain: 0.26, chords: [['E3', 'G3', 'B3', 'D4'], ['C3', 'E3', 'G3', 'B3'], ['A2', 'C3', 'E3', 'G3'], ['B2', 'D3', 'F#3', 'A3']] });
    const fl = (a, b) => { for (let c = Math.ceil(a / 1.15) * 1.15; c < b; c += 1.15) k.play('swish', c, { gain: 0.3, minor: true }); };
    fl(0, T(3, 'grabs'));
    pp(T(0, 'tongue') - 0.05, 560, 0.8, 0, false); k.play('error', T(0, 'taste'), { f: 'A3', gain: 0.45 }); pp(T(0, 'taste'), 700, 0.8, 0, false);
    pp(T(1, 'why'), 640, 0.7, 0, false);
    pp(T(2, 'scent'), 620, 0.7); k.play('stamp', T(2, 'collector'), { gain: 0.5 });
    for (let i = 0; i < 23; i++) { k.play('tick', T(3, 'grabs') + i * 0.15, { gain: 0.35, pan: (i % 2) * 0.6 - 0.3, minor: true }); } k.play('sparkle', T(4, 'air') - 0.05, { n: 5, gain: 0.45 }); pp(T(4, 'air'), 800, 0.7, -0.4); pp(T(4, 'ground'), 500, 0.7, 0.4);
    wipe(SC[1].a); k.play('riser', T(5, 'pulls') - 0.1, { dur: 0.8, gain: 0.3 }); k.play('slap', T(6, 'drops'), { gain: 0.45 }); pp(T(6, 'inside'), 700, 0.6);
    k.play('thud', T(7, 'reach') + 0.2, { f: 130, gain: 0.45 }); k.play('sparkle', T(7, 'organ') - 0.1, { n: 6, gain: 0.6 }); k.play('ding', T(7, 'organ'), { f: 'E6', gain: 0.32 }); pp(T(8, 'roof'), 720, 0.7);
    k.play('success', T(9, 'smelling'), { f: 'C6', gain: 0.4 });
    wipe(SC[2].a); pp(T(10, 'fork'), 620, 0.8, 0, false); k.play('swish', T(11, 'spread') - 0.05, { gain: 0.6, dur: 0.5 }); pp(T(11, 'apart'), 840, 0.6);
    k.play('impact', T(12, 'twice'), { gain: 0.9 }); k.play('ding', T(12, 'twice') + 0.05, { f: 'C6', gain: 0.3 });
    pp(T(13, 'tip'), 760, 0.7, -0.6); pp(T(13, 'tip') + 0.1, 760, 0.7, 0.6); pp(T(13, 'different'), 620, 0.7, 0, false);
    k.play('blip', T(14, 'two'), { pan: -0.7, gain: 0.5 }); k.play('blip', T(14, 'ears'), { pan: 0.7, gain: 0.5 });
    k.play('riser', T(15, 'stronger') - 0.2, { dur: 0.5, gain: 0.4 }); k.play('stamp', T(15, 'stronger'), { gain: 0.5, pan: -0.5 });
    pp(T(16, 'dinner') - 0.05, 900, 0.9, -0.6, false); k.play('whoosh', T(16, 'left') - 0.2, { dur: 0.4, gain: 0.5, top: 1800 });
    k.play('impact', T(17, 'stereo'), { gain: 0.9 }); k.play('sparkle', T(17, 'stereo') + 0.05, { n: 6, gain: 0.5 });
    wipe(SC[3].a); pp(T(18, 'air'), 640, 0.7);
    k.noise(T(19, 'whips') - 0.1, { dur: 2.6, color: 'pink', filter: 'bandpass', f: [[0, 700], [2.6, 2400]], q: 1.1, gain: 0.2, a: 0.3, verb: 0.2 }); pp(T(19, 'swirls'), 820, 0.7); pp(T(20, 'pull'), 560, 0.6);
    for (let f = Math.ceil((T(21, 'hundred') - 0.15) * 15); f < T(21, 'air') * 15; f++) k.play('count', f / 15, { gain: 0.7, minor: true });
    k.play('impact', T(21, 'hundred'), { gain: 1.1 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => k.play('ding', T(21, 'hundred') + i * 0.03, { f: n, gain: 0.34 - i * 0.05 }));
    pp(T(22, 'dip') - 0.5, 480, 0.8, -0.5, false);
    wipe(SC[4].a); pp(T(23, 'tongue'), 620, 0.7, 0, false); pp(T(23, 'smell'), 760, 0.7, 0, false); k.play('stamp', T(24, 'follow'), { gain: 0.55 }); k.play('success', T(24, 'first'), { f: 'G5', gain: 0.4 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
