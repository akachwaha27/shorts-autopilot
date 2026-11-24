// ================= Napkin Sketch, vertical 1080x1920: "Why do tomatoes lose their flavor in the fridge?" (no storyboard step: unattended run) =================
(function () {
  const W_ = 1080, HH = 1920, NW = 960, NH = 1440, NCX = 540, NCY = 905;
  const PH = [{"s":0.25,"e":2.81,"text":"Your fridge is killing your tomatoes' flavor.","words":[["your",0.25],["fridge",0.53],["is",0.94],["killing",1.08],["your",1.56],["tomatoes",1.84],["flavor",2.39]]},{"s":3.18,"e":4.97,"text":"Most people never notice why.","words":[["most",3.18],["people",3.48],["never",3.93],["notice",4.3],["why",4.75]]},{"s":5.33,"e":8.2,"text":"A ripe tomato's taste isn't just sweet and sour.","words":[["a",5.33],["ripe",5.41],["tomatos",5.72],["taste",6.26],["isnt",6.65],["just",6.96],["sweet",7.27],["and",7.66],["sour",7.89]]},{"s":8.58,"e":11.05,"text":"It's hundreds of tiny smell molecules,","words":[["its",8.58],["hundreds",8.82],["of",9.46],["tiny",9.62],["smell",9.94],["molecules",10.34]]},{"s":11.14,"e":13.72,"text":"and your nose does most of the tasting.","words":[["and",11.14],["your",11.39],["nose",11.72],["does",12.06],["most",12.39],["of",12.72],["the",12.89],["tasting",13.14]]},{"s":14.18,"e":16.76,"text":"Those smells are made by genes inside the fruit,","words":[["those",14.18],["smells",14.51],["are",14.91],["made",15.11],["by",15.37],["genes",15.5],["inside",15.83],["the",16.23],["fruit",16.43]]},{"s":17.3,"e":19.46,"text":"switched on while it sits somewhere warm.","words":[["switched",17.3],["on",17.81],["while",17.93],["it",18.25],["sits",18.38],["somewhere",18.63],["warm",19.2]]},{"s":19.84,"e":21.64,"text":"But scientists kept tomatoes","words":[["but",19.84],["scientists",20.06],["kept",20.78],["tomatoes",21.07]]},{"s":21.79,"e":23.6,"text":"at five degrees Celsius for a week.","words":[["at",21.79],["five",21.92],["degrees",22.18],["celsius",22.63],["for",23.08],["a",23.28],["week",23.34]]},{"s":24.02,"e":26.2,"text":"The cold turned those genes way down.","words":[["the",24.02],["cold",24.23],["turned",24.53],["those",24.96],["genes",25.33],["way",25.69],["down",25.91]]},{"s":26.62,"e":28.31,"text":"The smell molecules dropped","words":[["the",26.62],["smell",26.83],["molecules",27.19],["dropped",27.82]]},{"s":28.38,"e":29.99,"text":"by up to sixty-five percent!","words":[["by",28.38],["up",28.53],["to",28.67],["sixtyfive",28.82],["percent",29.48]]},{"s":30.45,"e":32.71,"text":"The sugar and acid didn't change at all.","words":[["the",30.45],["sugar",30.67],["and",31.03],["acid",31.25],["didnt",31.54],["change",31.91],["at",32.34],["all",32.49]]},{"s":33.13,"e":34.05,"text":"So it's still sweet,","words":[["so",33.13],["its",33.25],["still",33.43],["sweet",33.74]]},{"s":34.35,"e":36.1,"text":"but it tastes like wet cardboard.","words":[["but",34.35],["it",34.54],["tastes",34.67],["like",35.06],["wet",35.32],["cardboard",35.51]]},{"s":36.5,"e":39.25,"text":"Seventy-six taste testers noticed right away.","words":[["seventysix",36.5],["taste",37.22],["testers",37.58],["noticed",38.09],["right",38.6],["away",38.96]]},{"s":39.7,"e":41.28,"text":"And a week in the cold","words":[["and",39.7],["a",39.98],["week",40.07],["in",40.45],["the",40.63],["cold",40.91]]},{"s":41.53,"e":43.58,"text":"leaves marks on the fruit's DNA switches,","words":[["leaves",41.53],["marks",41.9],["on",42.21],["the",42.34],["fruits",42.53],["dna",42.9],["switches",43.08]]},{"s":44.03,"e":46.23,"text":"so warming it back up barely helps.","words":[["so",44.03],["warming",44.19],["it",44.74],["back",44.9],["up",45.21],["barely",45.37],["helps",45.84]]},{"s":46.69,"e":48.93,"text":"Keep ripe ones on the counter instead.","words":[["keep",46.69],["ripe",46.98],["ones",47.27],["on",47.56],["the",47.7],["counter",47.92],["instead",48.42]]},{"s":49.33,"e":51.53,"text":"So, where are your tomatoes right now?","words":[["so",49.33],["where",49.47],["are",49.84],["your",50.06],["tomatoes",50.36],["right",50.94],["now",51.31]]}];
  // one entry per idea; every time below reads from here
  const BEATS = [
    { id: 'hook', p: [0, 1] }, { id: 'taste', p: [2, 4] }, { id: 'genes', p: [5, 6] }, { id: 'test', p: [7, 9] },
    { id: 'drop65', p: [10, 12] }, { id: 'cardboard', p: [13, 15] }, { id: 'dna', p: [16, 18] }, { id: 'end', p: [19, 20] },
  ].map((b) => ({ ...b, s: PH[b.p[0]].s, e: PH[b.p[1]].e, text: PH.slice(b.p[0], b.p[1] + 1).map((x) => x.text).join(' ') }));
  const DURATION = PH[PH.length - 1].e + 1.0;
  const T = (i, w) => { const f = PH[i].words.find((x) => x[0] === w); if (!f) throw new Error('no word ' + w + ' in ' + i); return f[1]; };
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const win = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const seg = (pts, step = 2.5) => { const out = []; for (let i = 0; i < pts.length - 1; i++) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1], n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step)); for (let j = 0; j < n; j++) out.push([x0 + (x1 - x0) * j / n, y0 + (y1 - y0) * j / n]); } out.push(pts[pts.length - 1]); return out; };
  const normals = (P) => P.map((p, i) => { const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; return [-dy / d, dx / d]; });
  const wob = (pts, nz, seed, amp = 1.6, freq = 0.012) => { const N = normals(pts); let L = 0; return pts.map((p, i) => { if (i) L += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]); const o = nz.n2(L * freq + seed * 1.37, seed * 0.71) * amp + nz.n2(L * freq * 6 + seed, seed + 3.3) * amp * 0.3; return [p[0] + N[i][0] * o, p[1] + N[i][1] * o]; }); };
  const ell = (cx, cy, rx, ry, a0 = 0, a1 = Math.PI * 2) => { const n = Math.max(10, Math.ceil(Math.abs(a1 - a0) * Math.max(rx, ry) / 2.5)), out = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; out.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); } return out; };
  const quad = (p0, p1, p2, n = 40) => { const out = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; out.push([m * m * p0[0] + 2 * m * t * p1[0] + t * t * p2[0], m * m * p0[1] + 2 * m * t * p1[1] + t * t * p2[1]]); } return out; };

  // ---------- the napkins: each is a list of timed Sharpie items in napkin space (0..960, 0..1440) ----------
  const NAPS = []; let cur = null;
  const nap = (land, rot, ring) => { cur = { land, s0: land - 0.42, s1: land, rot, ring, items: [] }; NAPS.push(cur); };
  const line = (pts, role, w, a, b) => cur.items.push({ k: 'line', pts, role, w, a, b });
  const text = (s, x, y, size, role, a, b, opt = {}) => cur.items.push({ k: 'text', s, x, y, size, role, a, b, align: opt.align || 'center', rot: opt.rot || 0 });
  const dot = (x, y, r, role, a) => cur.items.push({ k: 'dot', x, y, r, role, a, b: a + 0.05 });
  const fn = (a, e, draw) => cur.items.push({ k: 'fn', a, e, b: a, draw, inst: true });
  const arrow = (pts, role, w, a, b, hl = 30) => {
    line(pts, role, w, a, b); const n = pts.length, [x1, y1] = pts[n - 1], [x0, y0] = pts[Math.max(0, n - 4)], ang = Math.atan2(y1 - y0, x1 - x0);
    line([[x1 + Math.cos(ang + 2.6) * hl, y1 + Math.sin(ang + 2.6) * hl], [x1, y1], [x1 + Math.cos(ang - 2.6) * hl, y1 + Math.sin(ang - 2.6) * hl]], role, w, b, b + 0.08);
  };

  const wave = (x0, x1, y, amp, n = 3) => { const out = []; for (let i = 0; i <= 40; i++) { const u = i / 40; out.push([x0 + (x1 - x0) * u, y + Math.sin(u * Math.PI * 2 * n) * amp]); } return out; };
  const zig = (A, B, n, amp) => { const out = [A]; const dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy), px = -dy / L, py = dx / L; for (let i = 1; i < n; i++) { const u = i / n, sg = i % 2 ? 1 : -1; out.push([A[0] + dx * u + px * amp * sg, A[1] + dy * u + py * amp * sg]); } out.push(B); return out; };
  const box = (x, y, w, h) => [[x - w / 2, y - h / 2], [x + w / 2, y - h / 2 + 3], [x + w / 2 - 2, y + h / 2], [x - w / 2 + 2, y + h / 2 - 2], [x - w / 2, y - h / 2]];
  const check = (x, y, a) => line([[x - 40, y], [x - 10, y + 34], [x + 50, y - 40]], 'acc2', 9, a, a + 0.2);
  const cross = (x, y, r, a) => { line([[x - r, y - r], [x + r, y + r]], 'acc2', 12, a, a + 0.15); line([[x + r, y - r], [x - r, y + r]], 'acc2', 12, a + 0.15, a + 0.3); };


  // ---------- drawing recipes for this topic (Sharpie strokes in napkin space) ----------
  // a tomato: round body, one lobe crease, star calyx, stem, shine; optional face
  const tomato = (cx, cy, r, a, d, face = null, fa = null) => {
    line(ell(cx, cy, r, r * 0.84, -Math.PI / 2 + 0.25, Math.PI * 1.5 + 0.2), 'ink', 8, a, a + d * 0.42);
    if (!face) line(quad([cx - 0.18 * r, cy - 0.78 * r], [cx - 0.42 * r, cy - 0.1 * r], [cx - 0.3 * r, cy + 0.5 * r], 14), 'ink', 5, a + d * 0.42, a + d * 0.52);
    const st = []; for (let i = 0; i <= 10; i++) { const an = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 0.1 * r : 0.34 * r; st.push([cx + Math.cos(an) * rr * 1.35, cy - 0.8 * r + Math.sin(an) * rr * 0.55]); }
    line(st, 'ink', 6, a + d * 0.52, a + d * 0.82);
    line([[cx, cy - 0.86 * r], [cx + 0.05 * r, cy - 1.08 * r]], 'ink', 7, a + d * 0.82, a + d * 0.9);
    line(ell(cx + 0.5 * r, cy - 0.32 * r, 0.2 * r, 0.14 * r, -2.7, -1.5), 'ink', 5, a + d * 0.9, a + d);
    if (face) {
      const f0 = fa == null ? a + d : fa;
      dot(cx - 0.3 * r, cy, 0.08 * r, 'ink', f0); dot(cx + 0.3 * r, cy, 0.08 * r, 'ink', f0 + 0.06);
      const my = cy + 0.36 * r, bend = face === 'happy' ? 0.2 : face === 'sad' ? -0.2 : 0;
      line(quad([cx - 0.24 * r, my - bend * r * 0.4], [cx, my + bend * r], [cx + 0.24 * r, my - bend * r * 0.4], 14), 'ink', 6, f0 + 0.1, f0 + 0.25);
    }
  };
  const fridge = (cx, cy, w, h, a, d) => {
    line(box(cx, cy, w, h), 'ink', 8, a, a + d * 0.45);
    const fy = cy - h / 2 + h * 0.3; line([[cx - w / 2 + 4, fy], [cx + w / 2 - 4, fy + 3]], 'ink', 7, a + d * 0.45, a + d * 0.6);
    line([[cx + w / 2 - 40, fy - 90], [cx + w / 2 - 40, fy - 30]], 'ink', 9, a + d * 0.6, a + d * 0.68);
    line([[cx + w / 2 - 40, fy + 40], [cx + w / 2 - 40, fy + 150]], 'ink', 9, a + d * 0.68, a + d * 0.76);
    const sx = cx - w * 0.12, sy = cy - h / 2 + h * 0.15, sr = h * 0.07;
    [0, 1, 2].forEach((i) => { const an = i * Math.PI / 3; line([[sx - Math.cos(an) * sr, sy - Math.sin(an) * sr], [sx + Math.cos(an) * sr, sy + Math.sin(an) * sr]], 'ink', 5, a + d * (0.78 + i * 0.07), a + d * (0.84 + i * 0.07)); });
  };
  const hexa = (x, y, s) => { const o = []; for (let i = 0; i <= 6; i++) { const an = i * Math.PI / 3 + Math.PI / 6; o.push([x + Math.cos(an) * s, y + Math.sin(an) * s]); } return o; };
  const molecule = (x, y, s, a, role = 'ink') => { line(hexa(x, y, s), role, 5, a, a + 0.16); line([[x + s * 0.87, y - s * 0.5], [x + s * 1.6, y - s * 1.0]], role, 5, a + 0.16, a + 0.2); dot(x + s * 1.75, y - s * 1.1, s * 0.28, role, a + 0.2); };
  const helix = (x0, x1, y, amp, a, d, rungRole = 'ink') => {
    const strand = (ph) => { const o = []; for (let i = 0; i <= 60; i++) { const u = i / 60; o.push([x0 + (x1 - x0) * u, y + Math.sin(u * Math.PI * 4 + ph) * amp]); } return o; };
    line(strand(0), 'ink', 7, a, a + d * 0.45); line(strand(Math.PI), 'ink', 7, a + d * 0.2, a + d * 0.65);
    const R = [];
    for (let i = 1; i < 16; i++) { const u = i / 16, x = x0 + (x1 - x0) * u, yy = Math.sin(u * Math.PI * 4) * amp; if (Math.abs(yy) < amp * 0.25) continue; R.push(x); line([[x, y + yy], [x, y - yy]], rungRole, 4, a + d * (0.65 + i * 0.02), a + d * (0.68 + i * 0.02)); }
    return R;
  };
  const sun = (x, y, r, a) => { line(ell(x, y, r, r), 'ink', 7, a, a + 0.25); for (let i = 0; i < 8; i++) { const an = i * Math.PI / 4; line([[x + Math.cos(an) * r * 1.3, y + Math.sin(an) * r * 1.3], [x + Math.cos(an) * r * 1.75, y + Math.sin(an) * r * 1.75]], 'ink', 6, a + 0.25 + i * 0.03, a + 0.29 + i * 0.03); } };
  const hatch = (x0, y0, x1, y1, step, role, a, b) => { const o = []; let k = 0; for (let y = y0 + step / 2; y < y1; y += step) { o.push(k++ % 2 ? [x1 - 8, y] : [x0 + 8, y]); } line(o, role, 4, a, b); };
  const head = (x, y, s, a) => { line(ell(x, y, s, s * 1.08), 'ink', 6, a, a + 0.14); line(quad([x - s * 1.4, y + s * 2.3], [x, y + s * 0.9], [x + s * 1.4, y + s * 2.3], 14), 'ink', 6, a + 0.14, a + 0.24); };
  const fnText = (s, x, y, size, color) => (ic) => { ic.save(); ic.font = `400 ${size}px "Permanent Marker"`; ic.fillStyle = color; ic.textAlign = 'center'; ic.fillText(s, x, y); ic.restore(); };

  // 1. HOOK: the fridge is killing the flavor
  nap(-1, -0.012, [800, 1260, 0.9]);
  text('YOUR FRIDGE', 480, 220, 112, 'ink', T(0, 'your') - 0.05, T(0, 'fridge') + 0.25);
  fridge(310, 780, 380, 760, PH[0].s + 0.2, 1.0);
  tomato(300, 960, 105, T(0, 'killing') - 0.1, 0.6, 'sad', T(0, 'flavor'));
  { const a = T(0, 'tomatoes') - 0.15; [0, 1, 2].forEach((i) => line(wave(560, 860, 520 + i * 70, 14, 2), 'ink', 5, a + i * 0.08, a + 0.25 + i * 0.08)); }
  text('FLAVOR', 720, 790, 96, 'acc2', T(0, 'flavor') - 0.12, T(0, 'flavor') + 0.25);
  cross(715, 620, 150, T(0, 'flavor') + 0.25);
  text('MOST NEVER NOTICE', 480, 1300, 80, 'ink', T(1, 'most') - 0.05, T(1, 'notice') + 0.15);
  text('WHY?', 730, 1060, 160, 'acc2', T(1, 'why') - 0.12, T(1, 'why') + 0.25, { rot: 0.1 });

  // 2. TASTE = smell molecules + your nose
  nap(PH[2].s - 0.05, 0.016, [130, 1310, 2.4]);
  text('TASTE =', 480, 220, 112, 'ink', T(2, 'taste') - 0.1, T(2, 'taste') + 0.25);
  tomato(480, 560, 180, T(2, 'ripe') - 0.1, 0.7);
  text('SWEET', 230, 880, 84, 'ink', T(2, 'sweet') - 0.12, T(2, 'sweet') + 0.22);
  text('+', 480, 880, 84, 'ink', T(2, 'and') - 0.05, T(2, 'and') + 0.06);
  text('SOUR', 720, 880, 84, 'ink', T(2, 'sour') - 0.12, T(2, 'sour') + 0.22);
  { const a = T(3, 'hundreds') - 0.1; [[150, 420], [800, 400], [140, 650], [810, 660], [230, 300], [740, 280]].forEach(([x, y], i) => molecule(x, y, 34, a + i * 0.2, i % 2 ? 'acc2' : 'ink')); }
  text('100s OF SMELLS', 480, 1010, 84, 'acc2', T(3, 'smell') - 0.12, T(3, 'molecules') + 0.25);
  { const a = T(4, 'nose') - 0.35; line([[190, 1080], [250, 1215], [292, 1250], [246, 1272], [214, 1262]], 'ink', 8, a, a + 0.25); line(ell(250, 1250, 18, 9, 0, Math.PI * 2), 'ink', 5, a + 0.25, a + 0.32);
    arrow(quad([480, 1060], [430, 1180], [310, 1200], 24), 'acc2', 7, a + 0.1, a + 0.3, 24); }
  text('YOUR NOSE', 640, 1200, 80, 'ink', T(4, 'nose') - 0.1, T(4, 'nose') + 0.25);
  text('TASTES IT!', 640, 1310, 84, 'acc2', T(4, 'tasting') - 0.25, T(4, 'tasting') + 0.2);

  // 3. GENES make the smells, switched on while warm
  nap(PH[5].s - 0.05, -0.018, [820, 1300, -0.7]);
  text('SMELL MAKERS', 480, 220, 104, 'ink', T(5, 'smells') - 0.1, T(5, 'made') + 0.1);
  tomato(480, 620, 240, T(5, 'made') - 0.1, 0.6);
  helix(330, 640, 650, 55, T(5, 'genes') - 0.15, 0.65);
  arrow([[480, 940], [480, 830]], 'acc2', 7, T(5, 'genes'), T(5, 'genes') + 0.1, 24);
  text('GENES', 480, 1020, 100, 'acc2', T(5, 'genes') - 0.05, T(5, 'genes') + 0.3);
  { const a = T(6, 'switched') - 0.1; line(box(270, 1170, 240, 110), 'ink', 7, a, a + 0.2); dot(330, 1170, 36, 'ink', a + 0.25); }
  text('ON', 270, 1310, 90, 'ink', T(6, 'on') - 0.1, T(6, 'on') + 0.15);
  sun(690, 1150, 62, T(6, 'sits') - 0.15);
  text('WARM', 690, 1330, 90, 'acc2', T(6, 'warm') - 0.12, T(6, 'warm') + 0.25);

  // 4. THE TEST: 5 C for a week -> genes way down
  nap(PH[7].s - 0.05, 0.012, [130, 140, 0.4]);
  text('THE TEST', 480, 210, 112, 'ink', T(7, 'scientists') - 0.1, T(7, 'kept') + 0.1);
  { const a = T(7, 'kept') - 0.1;
    line([[230, 860], [230, 400], ...ell(265, 400, 35, 35, Math.PI, Math.PI * 2).slice(1), [300, 860]], 'ink', 7, a, a + 0.35);
    line(ell(265, 905, 62, 62, -1.0, Math.PI * 2 - 2.1), 'ink', 7, a + 0.35, a + 0.55);
    [0, 1, 2, 3, 4, 5].forEach((i) => line([[300, 450 + i * 70], [326, 450 + i * 70]], 'ink', 4, a + 0.55 + i * 0.03, a + 0.58 + i * 0.03)); }
  { const a = T(8, 'five') - 0.15; line([[265, 900], [265, 780]], 'acc2', 18, a, a + 0.15); dot(265, 905, 40, 'acc2', a); }
  text('5°C', 640, 560, 190, 'acc2', T(8, 'five') - 0.12, T(8, 'celsius') + 0.1);
  { const a = T(8, 'for') - 0.2; line(box(640, 800, 320, 230), 'ink', 7, a, a + 0.2); line([[482, 730], [798, 733]], 'ink', 7, a + 0.2, a + 0.26); }
  text('1 WEEK', 640, 850, 84, 'ink', T(8, 'week') - 0.12, T(8, 'week') + 0.25);
  helix(150, 760, 1100, 45, T(9, 'cold') - 0.05, 0.6);
  arrow([[860, 1010], [860, 1220]], 'acc2', 9, T(9, 'down') - 0.3, T(9, 'down') - 0.05, 30);
  text('GENES', 270, 1300, 90, 'ink', T(9, 'genes') - 0.12, T(9, 'genes') + 0.2);
  text('WAY DOWN', 650, 1300, 90, 'acc2', T(9, 'way') - 0.12, T(9, 'down') + 0.2);

  // 5. SMELL MOLECULES -65%, sugar + acid unchanged
  nap(PH[10].s - 0.05, -0.015, [870, 1210, 1.2]);
  text('SMELL MOLECULES', 480, 175, 88, 'ink', T(10, 'smell') - 0.1, T(10, 'molecules') + 0.2);
  line([[110, 900], [850, 902]], 'ink', 7, T(10, 'smell') + 0.15, T(10, 'smell') + 0.4);
  { const a = T(10, 'molecules') - 0.05; line(box(290, 640, 200, 520), 'ink', 7, a, a + 0.3); hatch(190, 380, 390, 900, 26, 'ink', a + 0.3, a + 0.6); }
  text('FRESH', 290, 990, 66, 'ink', T(10, 'molecules') + 0.1, T(10, 'molecules') + 0.4);
  { const a = T(10, 'dropped') - 0.1; line(box(670, 809, 200, 182), 'ink', 7, a, a + 0.2); hatch(570, 718, 770, 900, 26, 'ink', a + 0.2, a + 0.4); arrow([[670, 420], [670, 690]], 'acc2', 9, a, a + 0.25, 30); }
  text('FRIDGE', 670, 990, 66, 'ink', T(10, 'dropped') + 0.1, T(10, 'dropped') + 0.4);
  { const a = T(11, 'sixtyfive') - 0.15; fn(a, a + 0.6, (ic, t) => { const n = Math.round(65 * eio(win(Math.floor(t * 12) / 12, a, a + 0.55))); fnText('−' + n + '%', 670, 360, 140, COL.acc2)(ic); }); text('−65%', 670, 360, 140, 'acc2', a + 0.6, a + 0.61); }
  text('NO CHANGE', 480, 1100, 84, 'acc2', T(12, 'didnt') - 0.12, T(12, 'all') + 0.2);
  { const a = T(12, 'sugar') - 0.1; line(box(250, 1240, 60, 160), 'ink', 6, a, a + 0.12); line(box(330, 1240, 60, 160), 'ink', 6, a + 0.12, a + 0.24); }
  text('SUGAR', 290, 1395, 62, 'ink', T(12, 'sugar') - 0.1, T(12, 'sugar') + 0.25);
  { const a = T(12, 'acid') - 0.1; line(box(630, 1240, 60, 160), 'ink', 6, a, a + 0.12); line(box(710, 1240, 60, 160), 'ink', 6, a + 0.12, a + 0.24); }
  text('ACID', 670, 1395, 62, 'ink', T(12, 'acid') - 0.1, T(12, 'acid') + 0.25);

  // 6. Still sweet, tastes like wet cardboard, 76 tasters noticed
  nap(PH[13].s - 0.05, 0.018, [120, 120, 2.0]);
  tomato(210, 400, 120, PH[13].s + 0.0, 0.5, 'meh', T(14, 'tastes'));
  text('STILL SWEET', 630, 440, 76, 'ink', T(13, 'still') - 0.1, T(13, 'sweet') + 0.2);
  check(820, 320, T(13, 'sweet') + 0.12);
  { const a = T(14, 'tastes') - 0.15; line(box(470, 860, 420, 260), 'ink', 7, a, a + 0.25); line([[262, 730], [342, 650], [762, 650], [682, 732]], 'ink', 7, a + 0.25, a + 0.45); line([[682, 732], [762, 650], [760, 910], [680, 988]], 'ink', 7, a + 0.45, a + 0.6); line([[470, 732], [520, 650]], 'ink', 5, a + 0.6, a + 0.66);
    [[330, 1010], [450, 1030], [600, 1015]].forEach(([x, y], i) => line([[x, y - 20], [x - 14, y + 6], [x, y + 18], [x + 14, y + 6], [x, y - 20]], 'ink', 5, T(14, 'wet') + i * 0.06, T(14, 'wet') + 0.1 + i * 0.06)); }
  text('WET CARDBOARD', 480, 1110, 96, 'acc2', T(14, 'wet') - 0.12, T(14, 'cardboard') + 0.3);
  { const a = T(15, 'seventysix') - 0.1; for (let i = 0; i < 7; i++) head(150 + i * 110, 1195, 30, a + i * 0.12); }
  text('76 TASTERS', 480, 1385, 96, 'ink', T(15, 'seventysix') - 0.12, T(15, 'testers') + 0.2);

  // 7. A week leaves marks on the DNA switches; warming barely helps
  nap(PH[16].s - 0.05, -0.014, [820, 1300, 0.2]);
  text('1 WEEK COLD', 480, 210, 108, 'ink', T(16, 'week') - 0.12, T(16, 'cold') + 0.2);
  { const R = helix(140, 820, 500, 90, T(16, 'cold') - 0.1, 0.7); const a = T(17, 'marks') - 0.1;
    [R[1], R[3], R[5], R[7]].forEach((x, i) => { if (x == null) return; const b = a + i * 0.12; line([[x - 24, 476], [x + 24, 524]], 'acc2', 8, b, b + 0.06); line([[x + 24, 476], [x - 24, 524]], 'acc2', 8, b + 0.06, b + 0.12); }); }
  text('DNA SWITCHES', 480, 740, 88, 'acc2', T(17, 'dna') - 0.12, T(17, 'switches') + 0.2);
  sun(230, 960, 55, T(18, 'warming') - 0.15);
  arrow([[360, 960], [520, 960]], 'ink', 7, T(18, 'back') - 0.1, T(18, 'up'), 24);
  tomato(680, 980, 110, T(18, 'up') - 0.05, 0.45, 'meh', T(18, 'barely'));
  text('WARM UP?', 250, 1140, 66, 'ink', T(18, 'warming') - 0.05, T(18, 'up') + 0.1);
  text('BARELY HELPS', 480, 1300, 100, 'ink', T(18, 'barely') - 0.12, T(18, 'helps') + 0.2);

  // 8. Keep ripe ones on the counter + the loop question
  nap(PH[19].s - 0.05, 0.012, [130, 1310, 1.6]);
  text('KEEP RIPE ONES', 480, 210, 100, 'ink', T(19, 'keep') - 0.1, T(19, 'ones') + 0.2);
  tomato(300, 680, 130, T(19, 'ones') - 0.1, 0.45, 'happy', T(19, 'counter'));
  line([[90, 820], [870, 824]], 'ink', 8, T(19, 'counter') - 0.3, T(19, 'counter') - 0.05);
  line([[90, 856], [870, 860]], 'ink', 6, T(19, 'counter') - 0.05, T(19, 'counter') + 0.1);
  text('COUNTER', 300, 950, 76, 'ink', T(19, 'counter') - 0.1, T(19, 'counter') + 0.3);
  check(470, 480, T(19, 'counter') + 0.2);
  fridge(700, 600, 200, 400, T(19, 'counter') + 0.1, 0.5);
  cross(700, 600, 120, T(19, 'instead') - 0.1);
  text('WHERE ARE', 480, 1120, 112, 'ink', T(20, 'where') - 0.12, T(20, 'are') + 0.2);
  text('YOURS?', 480, 1300, 160, 'acc2', T(20, 'tomatoes') - 0.12, T(20, 'now') + 0.2);

  // ---------- camera (screen centre, zoom), interpolated with the reference's eased keys ----------
  const CAM = [
    [0, 540, 760, 1.12], [PH[0].e, 540, 840, 1.04], [PH[1].s + 0.4, 540, 905, 1.0],
    [T(11, 'sixtyfive') - 0.45, 540, 905, 1.0], [T(11, 'sixtyfive'), 680, 640, 1.15], [PH[11].e + 0.1, 680, 640, 1.15], [PH[12].s + 0.35, 540, 905, 1.0],
    [T(20, 'where') - 0.3, 540, 905, 1.0], [DURATION, 540, 1010, 1.08],
  ];
  const camAt = (t) => { let i = 0; while (i < CAM.length - 2 && t > CAM[i + 1][0]) i++; const [a, b] = [CAM[i], CAM[i + 1]], u = eio(win(t, a[0], b[0])); return [H.lerp(a[1], b[1], u), H.lerp(a[2], b[2], u), H.lerp(a[3], b[3], u)]; };

  // ---------- cached textures: same recipes as the reference, re-cut for a tall napkin ----------
  const XC = {}, nz = H.makeNoise(77);
  const buildCache = () => {
    const w2 = 700, h2 = 1240, wl = H.layer(w2, h2), wc = wl.getContext('2d'), id = wc.createImageData(w2, h2), d = id.data, rr = H.rng(3), PL = 92, tints = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => [rr.range(-12, 12), rr.range(-0.4, 0.4)]);
    for (let y = 0; y < h2; y++) for (let x = 0; x < w2; x++) {
      const pi = Math.floor((y + 20) / PL), py = (y + 20) % PL, [tint, ph] = tints[pi % tints.length], warp = nz.fbm2(x * 0.0025 + pi * 7, py * 0.012 + pi, 3) * 5.5, ring = Math.sin((py * 0.07 + warp + ph * 3) * Math.PI * 2);
      const fine = nz.n2(x * 0.012 + pi * 5, y * 0.55) * 0.6 + nz.n2(x * 0.05, y * 1.3) * 0.25, v = 0.5 + 0.16 * Math.sign(ring) * Math.pow(Math.abs(ring), 0.4) + 0.14 * fine + nz.n2(x * 0.004, y * 0.02 + pi) * 0.12;
      let r = (118 + tint) * (0.75 + 0.5 * v), gg = (74 + tint * 0.6) * (0.75 + 0.5 * v), b = (42 + tint * 0.3) * (0.78 + 0.45 * v);
      if (py < 2 || py > PL - 2) { r *= 0.35; gg *= 0.3; b *= 0.3; }
      const i = (y * w2 + x) * 4; d[i] = r; d[i + 1] = gg; d[i + 2] = b; d[i + 3] = 255;
    }
    wc.putImageData(id, 0, 0); XC.wood = wl;
    const nb = H.layer(NW, NH), nc = nb.getContext('2d'), out = [];
    const edge = (x0, y0, x1, y1, s) => { for (let i = 0; i < 60; i++) { const u = i / 60, x = x0 + (x1 - x0) * u, y = y0 + (y1 - y0) * u, o = nz.n2(u * 9 + s, s) * 2.5, nx = -(y1 - y0), ny = x1 - x0, l = Math.hypot(nx, ny); out.push([x + nx / l * o, y + ny / l * o]); } };
    edge(4, 3, NW - 3, 6, 1); edge(NW - 3, 4, NW - 6, NH - 3, 2); edge(NW - 4, NH - 3, 3, NH - 4, 3); edge(3, NH - 3, 6, 6, 4);
    nc.beginPath(); out.forEach(([x, y], i) => (i ? nc.lineTo(x, y) : nc.moveTo(x, y))); nc.closePath(); nc.fillStyle = '#f6f5f0'; nc.fill(); nc.save(); nc.clip();
    const r2 = H.rng(21);
    for (let i = 0; i < 5500; i++) { const x = r2.range(0, NW), y = r2.range(0, NH), a = r2.range(0, 6.28), l = r2.range(3, 10); nc.strokeStyle = r2.chance(0.5) ? 'rgba(180,175,165,0.08)' : 'rgba(255,255,255,0.35)'; nc.lineWidth = 0.7; nc.beginPath(); nc.moveTo(x, y); nc.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); nc.stroke(); }
    const EM = H.layer(NW, NH), ec = EM.getContext('2d'); ec.strokeStyle = '#000';
    const inset = (k, lw) => { ec.lineWidth = lw; ec.beginPath(); ec.roundRect(k, k, NW - 2 * k, NH - 2 * k, 6); ec.stroke(); };
    inset(14, 2); inset(44, 2); inset(18, 1.2);
    const ringE = (x, y) => { ec.lineWidth = 1.6; for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; ec.beginPath(); ec.ellipse(x + Math.cos(a) * 4, y + Math.sin(a) * 4, 4, 2.5, a, 0, 7); ec.stroke(); } };
    for (let x = 60; x < NW - 40; x += 30) { ringE(x, 29); ringE(x, NH - 29); }
    for (let y = 60; y < NH - 40; y += 30) { ringE(29, y); ringE(NW - 29, y); }
    const tintL = (col, dx, dy, a) => { const tl = H.layer(NW, NH), tc = tl.getContext('2d'); tc.drawImage(EM, dx, dy); tc.globalCompositeOperation = 'source-in'; tc.fillStyle = col; tc.fillRect(0, 0, NW, NH); nc.globalAlpha = a; nc.drawImage(tl, 0, 0); nc.globalAlpha = 1; };
    tintL('#8f8a80', 1.1, 1.3, 0.35); tintL('#ffffff', -1, -1.1, 0.9); nc.restore(); XC.napkin = nb;
    const gw = NW / 2, gh = NH / 2, hf = new Float32Array(gw * gh);
    for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) { const u = x * 2, v = y * 2; let h = nz.fbm2(u * 0.009 + 3, v * 0.009, 4) * 11; const q1 = 1 - Math.abs(nz.n2(u * 0.018 + 9, v * 0.018)), q2 = 1 - Math.abs(nz.n2(u * 0.042 + 5, v * 0.042 + 2)); h += q1 * q1 * 4.5 + q2 * q2 * 0.6 + 8 * Math.max(0, 1 - Math.abs(u - NW / 2) / 22) - 7 * Math.max(0, 1 - Math.abs(v - NH / 2) / 20) + 6 * Math.max(0, 1 - Math.min(u, v, NW - u, NH - v) / 40); hf[y * gw + x] = h; }
    const SL = H.layer(gw, gh), sc = SL.getContext('2d'), sid = sc.createImageData(gw, gh), sd = sid.data, HLl = H.layer(gw, gh), hlc = HLl.getContext('2d'), hid = hlc.createImageData(gw, gh), hd = hid.data;
    for (let y = 1; y < gh - 1; y++) for (let x = 1; x < gw - 1; x++) { const i = y * gw + x, gx = (hf[i + 1] - hf[i - 1]) / 4, gy = (hf[i + gw] - hf[i - gw]) / 4, nl = Math.hypot(gx, gy, 1), lam = (-gx * -0.55 + -gy * -0.6 + 0.58) / nl, dl = (lam - 0.58) * 1.35, j = i * 4; if (dl < 0) { sd[j] = 118; sd[j + 1] = 108; sd[j + 2] = 96; sd[j + 3] = Math.min(255, -dl * 255); } else { hd[j] = 255; hd[j + 1] = 255; hd[j + 2] = 251; hd[j + 3] = Math.min(255, dl * 200); } }
    sc.putImageData(sid, 0, 0); hlc.putImageData(hid, 0, 0);
    const up = (src) => { const o = H.layer(NW, NH), oc = o.getContext('2d'); oc.imageSmoothingEnabled = true; oc.drawImage(src, 0, 0, NW, NH); oc.globalCompositeOperation = 'destination-in'; oc.drawImage(nb, 0, 0); return o; };
    XC.crumple = up(SL); XC.crumpleHL = up(HLl);
    const FB = H.layer(NW, NH), fbc = FB.getContext('2d'), r3 = H.rng(44); fbc.strokeStyle = '#000'; fbc.lineWidth = 0.9; fbc.beginPath();
    for (let i = 0; i < 86000; i++) { const x = r3.range(0, NW), y = r3.range(0, NH), a = r3.range(0, 6.28), l = r3.range(1.5, 5); fbc.moveTo(x, y); fbc.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); } fbc.stroke(); XC.fibre = FB;
    const SP = H.layer(NW, NH), spc = SP.getContext('2d'), r4 = H.rng(45); for (let i = 0; i < 23000; i++) { spc.fillStyle = `rgba(0,0,0,${r4.range(0.05, 0.3).toFixed(3)})`; spc.fillRect(r4.range(0, NW), r4.range(0, NH), r4.range(1, 3), r4.range(1, 3)); } XC.speck = SP;
    const RS = 300, RL = H.layer(RS, RS), rc = RL.getContext('2d');
    const ringS = (cx, cy, R, a) => { for (let k = 0; k < 3; k++) { const r = R + k * 1.6, g = rc.createRadialGradient(cx, cy, r - 18, cx, cy, r + 2); g.addColorStop(0, 'rgba(150,95,45,0)'); g.addColorStop(0.7, `rgba(150,95,45,${a * 0.25})`); g.addColorStop(0.92, `rgba(120,70,30,${a})`); g.addColorStop(1, 'rgba(120,70,30,0)'); rc.fillStyle = g; rc.beginPath(); rc.arc(cx + k * 0.9, cy - k * 0.7, r + 2, 0, 7); rc.fill(); } const g2 = rc.createRadialGradient(cx, cy, 0, cx, cy, R); g2.addColorStop(0, `rgba(170,120,60,${a * 0.07})`); g2.addColorStop(1, `rgba(170,120,60,${a * 0.12})`); rc.fillStyle = g2; rc.beginPath(); rc.arc(cx, cy, R - 2, 0, 7); rc.fill(); };
    ringS(140, 140, 74, 0.55); ringS(168, 162, 73, 0.22); rc.globalCompositeOperation = 'destination-in';
    const cgR = rc.createConicGradient(0.6, 140, 140); cgR.addColorStop(0, 'rgba(0,0,0,1)'); cgR.addColorStop(0.55, 'rgba(0,0,0,1)'); cgR.addColorStop(0.72, 'rgba(0,0,0,0.15)'); cgR.addColorStop(0.86, 'rgba(0,0,0,0.6)'); cgR.addColorStop(1, 'rgba(0,0,0,1)'); rc.fillStyle = cgR; rc.fillRect(0, 0, RS, RS); XC.ring = RL;
    XC.bl = H.layer(W_ >> 1, HH >> 1); XC.fb = H.layer(W_, HH); XC.il = H.layer(W_, HH);
    // pre-wobble every stroke once
    NAPS.forEach((n) => n.items.forEach((it) => { if (it.k === 'line') { const seed = ((it.pts[0][0] * 13 + it.pts[0][1] * 7) | 0) + 3; it.P = wob(seg(it.pts, 2.5), nz, Math.abs(seed) % 79, 1.5); } }));
  };

  const font = (it) => `400 ${it.size}px "Permanent Marker"`;
  const COL = { ink: 'rgb(22,20,28)', acc2: 'rgb(196,28,36)' };
  function inkItems(ic, nap_, t) {
    ic.lineCap = 'round'; ic.lineJoin = 'round';
    for (const it of nap_.items) {
      if (it.k === 'fn') { if (t >= it.a && t < it.e) it.draw(ic, t, it.a); continue; }
      const p = win(t, it.a, it.b); if (p <= 0) continue;
      const col = COL[it.role]; ic.strokeStyle = col; ic.fillStyle = col;
      if (it.k === 'line') { const P = p < 1 ? it.P.slice(0, Math.max(2, Math.ceil(it.P.length * p))) : it.P; ic.lineWidth = Math.max(4, it.w * 1.05); ic.beginPath(); P.forEach(([x, y], i) => (i ? ic.lineTo(x, y) : ic.moveTo(x, y))); ic.stroke(); }
      else if (it.k === 'dot') { ic.beginPath(); ic.arc(it.x, it.y, it.r, 0, 7); ic.fill(); }
      else { ic.save(); ic.font = font(it); const w = ic.measureText(it.s).width; ic.translate(it.align === 'center' ? it.x - w / 2 : it.x, it.y); ic.rotate(it.rot); const rr = H.rng((it.s.length * 31 + (it.x | 0)) % 991), n = Math.ceil(it.s.length * p); let px = 0; for (let i = 0; i < it.s.length; i++) { const cw = ic.measureText(it.s[i]).width, ry = rr.range(-1.5, 1.5), ra = rr.range(-0.05, 0.05); if (i < n) { ic.save(); ic.translate(px, ry); ic.rotate(ra); ic.fillText(it.s[i], 0, 0); ic.restore(); } px += cw; } ic.restore(); }
    }
  }
  function tipOf(nap_, t, ctx) {
    let tip = null, red = false;
    for (const it of nap_.items) { if (it.inst || it.k === 'dot') continue; const p = win(t, it.a, it.b); if (p > 0 && p < 1) { red = it.role === 'acc2'; if (it.k === 'line') tip = it.P[Math.min(it.P.length - 1, Math.floor(p * (it.P.length - 1)))]; else { ctx.save(); ctx.font = font(it); const w = ctx.measureText(it.s).width, x0 = it.align === 'center' ? it.x - w / 2 : it.x, w2 = ctx.measureText(it.s.slice(0, Math.ceil(it.s.length * p))).width; ctx.restore(); tip = [x0 + w2, it.y - it.size * 0.3]; } } }
    return tip ? { tip, red } : null;
  }

  function explainer(ctx, W, H_, t) {
    if (!XC.wood) buildCache();
    const [cx, cy, z] = camAt(t);
    const apply = (c) => { c.translate(W / 2, H_ / 2); c.scale(z, z); c.translate(-cx, -cy); };
    ctx.save(); apply(ctx); ctx.imageSmoothingEnabled = true; ctx.drawImage(XC.wood, -300, -300, 1680, 2976); ctx.restore();
    const vig = ctx.createLinearGradient(0, 0, W, H_); vig.addColorStop(0, 'rgba(255,230,190,0.12)'); vig.addColorStop(1, 'rgba(20,8,0,0.22)'); ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H_);

    let k = 0; for (let i = 0; i < NAPS.length; i++) if (t >= NAPS[i].s0) k = i;
    const sliding = t < NAPS[k].s1 && k > 0;
    const show = sliding ? [k - 1, k] : (k > 0 ? [k - 1, k] : [k]);
    let top = NAPS[k];
    show.forEach((idx) => {
      const n = NAPS[idx], u = clamp((t - n.s0) / (n.s1 - n.s0)), e = u >= 1 ? 1 : 1 - Math.pow(1 - u, 3) * Math.cos(u * 4.5), isTop = idx === k;
      const ox = isTop ? (1 - e) * 1000 : 0, oy = isTop ? (1 - e) * -1100 : 0, orot = isTop ? (1 - e) * 0.6 : 0, lift = isTop ? 1 - clamp(u * 1.1) : 0;
      const place = (c) => { c.translate(NCX + ox, NCY + oy); c.rotate(n.rot + orot); c.translate(-NW / 2, -NH / 2); };
      ctx.save(); apply(ctx); ctx.save(); place(ctx);
      ctx.save(); ctx.filter = `blur(${(8 + lift * 30).toFixed(1)}px)`; ctx.fillStyle = `rgba(25,10,0,${(0.5 - lift * 0.25).toFixed(2)})`; ctx.fillRect(8 + lift * 60, 12 + lift * 70, NW, NH); ctx.restore();
      ctx.drawImage(XC.napkin, 0, 0);
      const [rx, ry, ra] = n.ring; ctx.save(); ctx.beginPath(); ctx.rect(4, 4, NW - 8, NH - 8); ctx.clip(); ctx.translate(rx, ry); ctx.rotate(ra); ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(XC.ring, -140, -140); ctx.restore();
      ctx.restore(); ctx.restore();
      const inkOn = isTop ? u >= 1 : sliding;
      if (inkOn) {
        const IL = XC.il, ic = IL.getContext('2d'); ic.setTransform(1, 0, 0, 1, 0, 0); ic.globalCompositeOperation = 'source-over'; ic.clearRect(0, 0, W, H_);
        ic.save(); apply(ic); place(ic); inkItems(ic, n, isTop ? t : Math.min(t, n.items.reduce((m, q) => Math.max(m, q.k === 'fn' ? 0 : q.b), 0) + 99)); ic.restore();
        const hw = W >> 1, hh = H_ >> 1, BL = XC.bl, bc = BL.getContext('2d'), FBL = XC.fb, fc = FBL.getContext('2d');
        bc.filter = 'none'; bc.clearRect(0, 0, hw, hh); bc.filter = `blur(${(1.5 * Math.sqrt(z)).toFixed(2)}px)`; bc.drawImage(IL, 0, 0, hw, hh); bc.filter = 'none'; bc.drawImage(BL, 0, 0);
        ctx.save(); ctx.imageSmoothingEnabled = true; ctx.globalAlpha = 0.38; ctx.drawImage(BL, 0, 0, W, H_); ctx.restore();
        fc.setTransform(1, 0, 0, 1, 0, 0); fc.globalCompositeOperation = 'source-over'; fc.clearRect(0, 0, W, H_); fc.imageSmoothingEnabled = true; fc.drawImage(BL, 0, 0, W, H_);
        fc.save(); fc.globalCompositeOperation = 'destination-in'; apply(fc); place(fc); fc.drawImage(XC.fibre, 0, 0); fc.restore();
        ctx.save(); ctx.globalAlpha = 0.75; ctx.drawImage(FBL, 0, 0); ctx.restore();
        ic.save(); ic.globalCompositeOperation = 'destination-out'; apply(ic); place(ic); ic.drawImage(XC.speck, 0, 0); ic.restore();
        ctx.save(); ctx.globalAlpha = 0.94; ctx.drawImage(IL, 0, 0); ctx.restore();
      }
      ctx.save(); apply(ctx); place(ctx); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.5; ctx.drawImage(XC.crumple, 0, 0); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 0.5; ctx.drawImage(XC.crumpleHL, 0, 0); ctx.restore();
    });

    // coffee cup + steam, top right on the table
    { const qx = (985 - cx) * z + W / 2, qy = (60 - cy) * z + H_ / 2, s = z * 0.72;
      ctx.save(); ctx.translate(qx, qy); ctx.scale(s, s);
      ctx.save(); ctx.filter = 'blur(14px)'; ctx.fillStyle = 'rgba(20,8,0,0.5)'; ctx.beginPath(); ctx.arc(18, 22, 156, 0, 7); ctx.fill(); ctx.restore();
      const sg = ctx.createRadialGradient(-50, -60, 20, 0, 0, 160); sg.addColorStop(0, '#ffffff'); sg.addColorStop(0.7, '#ebe9e4'); sg.addColorStop(1, '#bfbab2'); ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(0, 0, 158, 0, 7); ctx.fill();
      const cg = ctx.createRadialGradient(-40, -40, 10, 0, 0, 92); cg.addColorStop(0, '#ffffff'); cg.addColorStop(0.8, '#efece6'); cg.addColorStop(1, '#c6c0b6'); ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(0, 0, 90, 0, 7); ctx.fill();
      const cf = ctx.createRadialGradient(-10, -10, 5, 0, 0, 76); cf.addColorStop(0, '#6b3e1e'); cf.addColorStop(0.75, '#4a2810'); cf.addColorStop(0.92, '#9a6a3c'); cf.addColorStop(1, '#3a1e0a'); ctx.fillStyle = cf; ctx.beginPath(); ctx.arc(0, 0, 76, 0, 7); ctx.fill();
      ctx.restore();
    }
    // the Sharpie in hand
    if (t >= top.s1) { const tp = tipOf(top, t, ctx); if (tp) {
      const lx = tp.tip[0] - NW / 2, ly = tp.tip[1] - NH / 2, co = Math.cos(top.rot), si = Math.sin(top.rot), wx = NCX + lx * co - ly * si, wy = NCY + lx * si + ly * co, tx = (wx - cx) * z + W / 2, ty = (wy - cy) * z + H_ / 2, red = tp.red, ang = 0.9;
      ctx.save(); ctx.scale(1, 1);
      ctx.save(); ctx.filter = 'blur(8px)'; ctx.fillStyle = 'rgba(20,8,0,0.35)'; ctx.translate(tx + 24, ty + 30); ctx.rotate(ang); ctx.beginPath(); ctx.roundRect(10, -14, 460, 28, 12); ctx.fill(); ctx.restore();
      ctx.translate(tx, ty); ctx.rotate(ang); ctx.scale(1.5, 1.5);
      ctx.fillStyle = red ? '#9a1018' : '#111114'; ctx.beginPath(); ctx.ellipse(5, 0, 7, 4, 0, 0, 7); ctx.fill();
      const ng = ctx.createLinearGradient(0, -10, 0, 10); ng.addColorStop(0, '#d8d8de'); ng.addColorStop(1, '#6a6a72'); ctx.fillStyle = ng; ctx.beginPath(); ctx.moveTo(8, -4); ctx.lineTo(30, -11); ctx.lineTo(30, 11); ctx.lineTo(8, 4); ctx.closePath(); ctx.fill();
      const bg = ctx.createLinearGradient(0, -15, 0, 15); if (red) { bg.addColorStop(0, '#e05058'); bg.addColorStop(0.3, '#b8202a'); bg.addColorStop(1, '#5a0a10'); } else { bg.addColorStop(0, '#5a5a62'); bg.addColorStop(0.3, '#2a2a30'); bg.addColorStop(1, '#0c0c10'); }
      ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(28, -15, 190, 30, 12); ctx.fill(); ctx.fillStyle = '#9c9ca4'; ctx.fillRect(150, -15, 14, 30); ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(210, -17, 96, 34, 14); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(36, -10, 170, 2.5);
      ctx.restore();
    } }
    H.grain(ctx, W, H_, 0.025, 8 + (Math.floor(t * 12) % 4));
    H.vignette(ctx, W, H_, 0.3, '25,10,0');
  }

  function scoreSound(k) {
    const LV = 0.45;
    const sh = (a, b, g = 1, pan = 0, minor = true, red = false) => { const d = Math.max(0.03, b - a); g *= LV; k.noise(a, { dur: 0.03, filter: 'bandpass', f: 700, q: 1, gain: 0.16 * g, a: 0.002, pan, minor }); k.tone(a, { f: 120, dur: 0.05, gain: 0.07 * g, pan, minor }); k.play('stroke', a, { material: 'sharpie', dur: d, gain: (red ? 0.5 : 0.42) * g, pan, minor }); k.noise(a, { dur: d + 0.04, color: 'pink', filter: 'lowpass', f: 520, gain: 0.07 * g, a: 0.015, hold: d * 0.6, pan, minor }); };
    const write = (s, a, b, g = 0.9, pan = 0, red = false) => { const n = s.length, re = /\S+/g; let m; while ((m = re.exec(s))) sh(a + (b - a) * m.index / n, a + (b - a) * (m.index + m[0].length) / n, g, pan, true, red); };
    const napkin = (s0, s1) => { const land = s0 + (s1 - s0) * Math.PI / 9; k.noise(s0, { dur: land - s0 + 0.03, color: 'pink', filter: 'bandpass', f: [[0, 260], [land - s0, 800]], q: 0.7, gain: 0.2, a: (land - s0) * 0.8, pan: 0.5 }); k.play('slap', land, { gain: 0.7, pan: 0.1 }); k.play('thud', land, { f: 85, gain: 0.4, pan: 0.1 }); k.play('paper', land + 0.01, { dur: 0.16, gain: 0.35, pan: 0.1 }); };
    k.bed('room', 0, DURATION, { gain: 0.7 });
    k.play('pop', 0.03, { f: 300, gain: 0.45, minor: true });
    NAPS.forEach((n, i) => { if (i) napkin(n.s0, n.s1);
      n.items.forEach((it) => { const red = it.role === 'acc2', pan = it.k === 'text' || it.k === 'line' ? clamp(((it.x ?? it.pts[0][0]) - 480) / 480, -1, 1) * 0.3 : 0; if (it.k === 'text') write(it.s, it.a, it.b, it.size >= 100 ? 1 : 0.8, pan, red); else if (it.k === 'line' && it.b - it.a > 0.06) sh(it.a, it.b, 0.8, pan, true, red); else if (it.k === 'dot') k.noise(it.a, { dur: 0.025, filter: 'bandpass', f: 900, q: 1.2, gain: 0.2, a: 0.002, minor: true }); }); });
    k.play('thud', T(0, 'killing'), { f: 95, gain: 0.45 });
    k.play('stamp', T(0, 'flavor') + 0.25, { gain: 0.5 });
    k.play('pop', T(1, 'why'), { f: 420, gain: 0.45 });
    k.play('ding', T(3, 'molecules'), { f: 'E6', gain: 0.22 });
    k.play('swish', T(4, 'nose') - 0.3, { dur: 0.35, gain: 0.35 });
    k.play('success', T(6, 'warm'), { f: 'A5', gain: 0.3 });
    k.play('thud', T(8, 'five'), { f: 110, gain: 0.45 });
    k.play('riser', T(9, 'cold'), { dur: T(9, 'down') - T(9, 'cold'), gain: 0.22 });
    k.play('whoosh', T(10, 'dropped') - 0.05, { dur: 0.5, gain: 0.5 });
    k.play('impact', T(11, 'sixtyfive'), { gain: 0.6 });
    k.play('error', T(14, 'cardboard'), { gain: 0.35 });
    k.play('stamp', T(17, 'marks'), { gain: 0.4 });
    k.play('success', T(19, 'counter') + 0.2, { f: 'A5', gain: 0.4 });
    k.play('ding', T(20, 'now') + 0.2, { f: 'E6', gain: 0.3 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W_; window.VIDEO_H = HH;
})();
