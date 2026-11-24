// ================= One-line Drawing, vertical 1080x1920: "Why do squirrels bury nuts they never dig up?" (no storyboard step: unattended run) =================
// The whole film is ONE continuous ink line on warm paper: a ground line that runs left to right, and everything the story needs
// (squirrels, holes, acorns, landmarks, the sprout and the tree) rises out of it and drops back into it. The pen never lifts.
// One accent (green) used once, on the sprout. Text is written on in a handwriting face (Caveat).
// Technique after Lemo-Opuscar "One-line Drawing" (MIT): arc-length path sampling + curvature timing, ink polygon with pressure,
// bleed and pooling, nib-follow camera. All drawings, story and code written for this film.
(function () {
  const W = 1080, HH = 1920;
  const PH = [{"s":0.25,"e":3.46,"text":"Your backyard squirrel buries 3,000 nuts a year.","words":[["your",0.25],["backyard",0.58],["squirrel",1.24],["buries",1.9],["3000",2.39],["nuts",2.72],["a",3.05],["year",3.13]]},{"s":3.86,"e":5.12,"text":"How does it find them?","words":[["how",3.86],["does",4.08],["it",4.38],["find",4.53],["them",4.82]]},{"s":5.61,"e":7.69,"text":"Each one goes in its own little hole.","words":[["each",5.61],["one",5.89],["goes",6.11],["in",6.4],["its",6.54],["own",6.76],["little",6.97],["hole",7.4]]},{"s":8.1,"e":9.57,"text":"Mostly, it remembers.","words":[["mostly",8.1],["it",8.62],["remembers",8.79]]},{"s":9.96,"e":11.4,"text":"It builds a map in its head,","words":[["it",9.96],["builds",10.09],["a",10.5],["map",10.57],["in",10.78],["its",10.92],["head",11.12]]},{"s":11.75,"e":13.57,"text":"a tree, a rock, a fence post,","words":[["a",11.75],["tree",11.84],["a",12.2],["rock",12.29],["a",12.66],["fence",12.75],["post",13.2]]},{"s":13.63,"e":16.62,"text":"and that map can last up to two months.","words":[["and",13.63],["that",13.93],["map",14.33],["can",14.63],["last",14.92],["up",15.32],["to",15.52],["two",15.72],["months",16.02]]},{"s":17.09,"e":19.18,"text":"Then its nose finds the exact spot.","words":[["then",17.09],["its",17.39],["nose",17.61],["finds",17.91],["the",18.28],["exact",18.51],["spot",18.88]]},{"s":19.65,"e":21.64,"text":"But what if another squirrel is watching?","words":[["but",19.65],["what",19.83],["if",20.06],["another",20.18],["squirrel",20.59],["is",21.05],["watching",21.17]]},{"s":22.19,"e":23.03,"text":"It fakes it.","words":[["it",22.19],["fakes",22.38],["it",22.84]]},{"s":23.42,"e":25.63,"text":"It digs a hole, pretends to drop the nut,","words":[["it",23.42],["digs",23.56],["a",23.85],["hole",23.92],["pretends",24.21],["to",24.78],["drop",24.92],["the",25.2],["nut",25.42]]},{"s":25.73,"e":28.56,"text":"and sneaks off with it still in its mouth.","words":[["and",25.73],["sneaks",25.99],["off",26.5],["with",26.76],["it",27.1],["still",27.27],["in",27.7],["its",27.87],["mouth",28.13]]},{"s":29.02,"e":30.03,"text":"Sneaky, right?","words":[["sneaky",29.02],["right",29.57]]},{"s":30.52,"e":32.47,"text":"Still, some nuts never get dug up.","words":[["still",30.52],["some",30.89],["nuts",31.19],["never",31.49],["get",31.87],["dug",32.09],["up",32.32]]},{"s":32.92,"e":34.05,"text":"The squirrel moves on,","words":[["the",32.92],["squirrel",33.11],["moves",33.61],["on",33.92]]},{"s":34.38,"e":35.92,"text":"or it just has plenty to eat.","words":[["or",34.38],["it",34.52],["just",34.66],["has",34.94],["plenty",35.15],["to",35.57],["eat",35.71]]},{"s":36.28,"e":38.73,"text":"And that forgotten nut is already planted.","words":[["and",36.28],["that",36.49],["forgotten",36.77],["nut",37.4],["is",37.61],["already",37.75],["planted",38.24]]},{"s":39.15,"e":40.54,"text":"Come spring, it sprouts.","words":[["come",39.15],["spring",39.44],["it",39.88],["sprouts",40.03]]},{"s":40.88,"e":42.45,"text":"So some trees around you","words":[["so",40.88],["some",41.04],["trees",41.35],["around",41.75],["you",42.22]]},{"s":42.51,"e":44.47,"text":"were planted by a squirrel that forgot.","words":[["were",42.51],["planted",42.76],["by",43.18],["a",43.31],["squirrel",43.37],["that",43.86],["forgot",44.1]]},{"s":44.94,"e":46.89,"text":"Which tree near you did a squirrel plant?","words":[["which",44.94],["tree",45.23],["near",45.47],["you",45.71],["did",45.88],["a",46.06],["squirrel",46.12],["plant",46.59]]}]
;
  const T = (i, w, n = 1) => { const ws = PH[i].words.filter((x) => x[0] === w); if (!ws[n - 1]) throw new Error('no word ' + w + ' in ' + i); return ws[n - 1][1]; };
  const BEATS = [
    { id: 'hook', p: [0, 1] }, { id: 'holes', p: [2, 2] }, { id: 'remember', p: [3, 4] }, { id: 'landmarks', p: [5, 6] }, { id: 'nose', p: [7, 7] },
    { id: 'watch', p: [8, 9] }, { id: 'fake', p: [10, 12] }, { id: 'forgot', p: [13, 16] }, { id: 'sprout', p: [17, 19] }, { id: 'end', p: [20, 20] },
  ].map((b) => ({ ...b, s: PH[b.p[0]].s, e: PH[b.p[1]].e, text: PH.slice(b.p[0], b.p[1] + 1).map((x) => x.text).join(' ') }));
  const DURATION = PH[PH.length - 1].e + 1.0;

  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, u) => a + (b - a) * u;
  const hash = (n) => { n = Math.sin(n * 127.1 + 311.7) * 43758.5453; return n - Math.floor(n); };
  const vnoise = (x) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return lerp(hash(i), hash(i + 1), u); };
  const mulberry = (seed) => function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

  const PAPER = [244, 239, 228], INK = [29, 26, 23], GREEN = [62, 128, 66];

  // ---------------- drawings (SVG path strings; y up is negative, ground at y = 0) ----------------
  // sitting squirrel, facing right, feet at (0,0)
  const SQ_SIT = 'M -230 0 L -95 0 C -185 -10 -235 -150 -175 -250 C -125 -335 -15 -325 -28 -238 C -34 -200 -78 -196 -82 -228 C -64 -190 -42 -172 -12 -172 C -14 -232 28 -262 66 -258 L 78 -306 L 102 -252 C 132 -246 160 -222 172 -200 C 175 -188 162 -180 142 -181 C 122 -172 112 -160 102 -150 C 114 -130 122 -112 110 -100 C 142 -102 146 -78 116 -78 C 124 -42 94 -10 58 0 L 160 0';
  // running squirrel, facing right, carrying nothing (nut added separately), feet at (0,0)
  const SQ_RUN = 'M -300 0 C -240 -6 -290 -130 -220 -165 C -165 -192 -110 -150 -132 -118 C -100 -112 -64 -124 -24 -130 C 18 -138 58 -138 80 -122 L 88 -160 L 104 -118 C 132 -114 152 -100 158 -88 C 152 -78 134 -74 122 -74 C 100 -62 66 -52 46 -44 C 60 -24 72 -12 86 0 L 120 0';
  // head in profile facing right, centre (0,0); eye first, then the outline
  const HEAD = 'M -60 70 C -120 40 -122 -60 -62 -88 L -46 -142 L -16 -94 C 2 -95 18 -90 30 -84 L 34 -54 C 22 -54 22 -36 34 -36 C 46 -36 46 -54 34 -54 L 30 -84 C 64 -76 92 -52 108 -24 C 120 -8 112 6 96 4 C 80 30 40 60 0 66 C -20 68 -40 72 -60 70';
  const ACORN = 'M -32 -8 L 32 -8 C 30 20 12 34 0 40 C -12 34 -30 20 -30 -8 C -32 -24 -14 -30 0 -30 C 14 -30 32 -24 32 -8 C 30 -20 12 -26 2 -28 L 2 -42';
  const TREE = 'M -26 0 C -22 -60 -22 -120 -24 -168 C -120 -150 -160 -262 -86 -300 C -100 -404 40 -432 64 -342 C 156 -362 178 -226 94 -200 C 112 -160 44 -146 22 -168 C 20 -110 22 -60 28 0';
  const ROCK = 'M -78 0 C -80 -52 -34 -74 8 -68 C 58 -62 80 -32 74 0';
  const POST = 'M -18 0 L -18 -200 L 0 -226 L 18 -200 L 18 0';
  const QMARK = 'M -80 -250 C -80 -350 90 -360 82 -258 C 76 -196 2 -190 2 -128 L 2 -92 C 2 -82 2 -76 2 -70 C -14 -70 -14 -46 2 -46 C 18 -46 18 -70 2 -70';
  const XMARK = 'M -34 -34 L 34 34 C 48 48 48 -48 34 -34 L -34 34';
  const SNIFF = 'M 0 0 C 14 -10 14 -24 0 -30 C -14 -36 -14 -50 0 -56';
  const LEAF2 = 'M 0 0 L 0 -90 C -50 -100 -76 -140 -64 -170 C -28 -160 -6 -130 0 -96 C 6 -140 40 -178 84 -176 C 86 -130 50 -100 0 -96 L 0 -130';
  const BIGTREE = 'M 0 0 C -6 -120 -20 -220 -40 -300 C -220 -300 -330 -470 -230 -560 C -300 -720 -110 -840 10 -760 C 120 -880 330 -760 270 -600 C 380 -520 300 -330 150 -330 C 120 -300 60 -290 40 -310 C 30 -220 40 -110 54 0';

  const pit = (x, depth = 70, w = 54) => `M ${x - w - 30} 0 L ${x - w} 0 C ${x - w} ${depth} ${x + w} ${depth} ${x + w} 0 L ${x + w + 30} 0`;
  const mounds = (x0, n, step = 64) => { let d = `M ${x0} 0`; for (let i = 0; i < n; i++) { const a = x0 + i * step; d += ` C ${a + 10} -26 ${a + step - 10} -26 ${a + step} 0`; } return d; };
  const ground = (x0, x1, wob = 0) => { if (!wob) return `M ${x0} 0 L ${x1} 0`; let d = `M ${x0} 0`; const n = Math.max(1, Math.round((x1 - x0) / 120)); for (let i = 1; i <= n; i++) { const x = lerp(x0, x1, i / n); d += ` Q ${x - (x1 - x0) / n / 2} ${(i % 2 ? -1 : 1) * wob} ${x} 0`; } return d; };

  // ---------------- the one line: segments with time windows ----------------
  const P0 = { s: 1 };
  const SEGS = [
    { id: 'hook', t: [0, 2.05], style: 'fast', parts: [{ d: ground(-900, -260) }, { d: SQ_SIT, tf: { x: 0, y: 0, s: 1.15 } }] },
    { id: 'mounds', t: [2.05, 3.55], style: 'fast', parts: [{ d: mounds(200, 14) }], marks: [{ f: 0.25, t: T(0, '3000') }] },
    { id: 'q', t: [3.55, 5.1], parts: [{ d: ground(1140, 1240) }, { d: QMARK, tf: { x: 1330, y: 0, s: 1.1 } }, { d: ground(1420, 1500) }], marks: [{ f: 0.62, t: T(1, 'find') }] },
    { id: 'holes', t: [5.2, 7.75], parts: [{ d: pit(1650) }, { d: ACORN, tf: { x: 1650, y: 26, s: 0.75 } }, { d: pit(1900) }, { d: ACORN, tf: { x: 1900, y: 26, s: 0.75 } }, { d: pit(2150) }, { d: ACORN, tf: { x: 2150, y: 26, s: 0.75 } }, { d: ground(2240, 2320) }], marks: [{ f: 0.12, t: T(2, 'one') }, { f: 0.9, t: T(2, 'hole') }] },
    { id: 'head', t: [7.85, 9.7], style: 'detail', parts: [{ d: HEAD, tf: { x: 2620, y: -520, s: 2.0 } }], marks: [{ f: 0.2, t: T(3, 'remembers') - 0.4 }] },
    { id: 'minimap', t: [9.7, 11.4], style: 'detail', parts: [{ d: TREE, tf: { x: 2560, y: -470, s: 0.28 } }, { d: ROCK, tf: { x: 2640, y: -470, s: 0.32 } }, { d: POST, tf: { x: 2715, y: -470, s: 0.32 } }, { d: ground(2520, 2760) }], marks: [{ f: 0.5, t: T(4, 'map') }] },
    { id: 'tree', t: [11.4, 11.95], style: 'fast', parts: [{ d: ground(2900, 2980) }, { d: TREE, tf: { x: 3060, y: 0, s: 1.15 } }] },
    { id: 'rock', t: [11.95, 12.45], style: 'fast', parts: [{ d: ROCK, tf: { x: 3330, y: 0, s: 1.15 } }] },
    { id: 'post', t: [12.45, 13.3], style: 'fast', parts: [{ d: POST, tf: { x: 3560, y: 0, s: 1.15 } }] },
    { id: 'arc', t: [13.3, 15.3], parts: [{ d: 'M 3580 -280 C 3700 -620 3980 -560 4010 -60' }, { d: XMARK, tf: { x: 4020, y: 40, s: 1.2 } }], marks: [{ f: 0.55, t: T(6, 'map') + 0.2 }] },
    { id: 'months', t: [15.3, 16.8], parts: [{ d: ground(4080, 4380, 10) }] },
    { id: 'nose', t: [17.0, 19.1], style: 'detail', parts: [{ d: HEAD, tf: { x: 4540, y: -190, s: 1.05 } }, { d: SNIFF, tf: { x: 4690, y: -150, s: 1.1, r: 90 } }, { d: pit(4720, 80) }, { d: ACORN, tf: { x: 4720, y: 30, s: 0.8 } }, { d: ground(4810, 4900) }], marks: [{ f: 0.3, t: T(7, 'nose') }, { f: 0.85, t: T(7, 'spot') }] },
    { id: 'watch', t: [19.2, 21.4], parts: [{ d: ground(4960, 5150) }, { d: HEAD, tf: { x: 5300, y: -200, s: 0.75 } }, { d: ROCK, tf: { x: 5300, y: 0, s: 1.9 } }, { d: ground(5440, 5520) }], marks: [{ f: 0.5, t: T(8, 'squirrel') }] },
    { id: 'fakes', t: [21.5, 23.0], style: 'fast', parts: [{ d: ground(5560, 5800, 22) }] },
    { id: 'dig', t: [23.0, 25.6], parts: [{ d: pit(5980, 90, 60) }, { d: ACORN, tf: { x: 5980, y: -200, s: 0.8 } }, { d: 'M 6000 -150 C 6040 -60 6060 -20 6080 0' }, { d: mounds(6080, 2, 70) }], marks: [{ f: 0.28, t: T(10, 'hole') }, { f: 0.68, t: T(10, 'nut') }] },
    { id: 'sneak', t: [25.7, 28.5], parts: [{ d: ground(6240, 6380) }, { d: SQ_RUN, tf: { x: 6700, y: 0, s: 1.4 } }, { d: ACORN, tf: { x: 6905, y: -95, s: 0.6 } }, { d: ground(6880, 7000) }], marks: [{ f: 0.8, t: T(11, 'mouth') }] },
    { id: 'sneaky', t: [28.5, 30.4], style: 'fast', parts: [{ d: ground(7020, 7400, 14) }] },
    { id: 'never', t: [30.4, 32.4], parts: [{ d: 'M 7450 0 C 7520 0 7560 60 7600 120' }, { d: ACORN, tf: { x: 7640, y: 170, s: 1.0 } }, { d: 'M 7680 120 C 7720 60 7760 0 7830 0' }], marks: [{ f: 0.55, t: T(13, 'never') }], holds: [{ f: 0.58, t: T(13, 'never') + 0.05, dur: 0.75 }] },
    { id: 'moveson', t: [32.5, 34.2], style: 'fast', parts: [{ d: ground(7860, 8300) }, { d: SQ_RUN, tf: { x: 8550, y: 0, s: 0.75 } }] },
    { id: 'plenty', t: [34.2, 35.95], parts: [{ d: ground(8650, 8780) }, { d: ACORN, tf: { x: 8860, y: -40, s: 1.0 } }, { d: ACORN, tf: { x: 8940, y: -40, s: 1.0 } }, { d: ACORN, tf: { x: 8900, y: -112, s: 1.0 } }, { d: ground(8990, 9100) }], marks: [{ f: 0.6, t: T(15, 'plenty') }] },
    { id: 'planted', t: [36.0, 39.25], parts: [{ d: ground(9140, 9420) }, { d: 'M 9440 0 C 9500 0 9540 70 9570 130' }, { d: ACORN, tf: { x: 9600, y: 180, s: 1.0 } }], marks: [{ f: 0.62, t: T(16, 'forgotten') }, { f: 0.9, t: T(16, 'nut') }], holds: [{ f: 0.995, t: T(16, 'planted') - 0.15, dur: 39.25 - T(16, 'planted') + 0.05 }] },
    { id: 'sprout', t: [39.25, 40.6], style: 'sprout', parts: [{ d: 'M 9602 138 C 9602 100 9600 60 9600 0' }, { d: LEAF2, tf: { x: 9600, y: 0, s: 1.0 } }], marks: [{ f: 0.75, t: T(17, 'sprouts') + 0.1 }] },
    { id: 'bigtree', t: [40.6, 42.6], parts: [{ d: BIGTREE, tf: { x: 9590, y: -110, s: 1.25 } }], marks: [{ f: 0.4, t: T(18, 'trees') + 0.3 }] },
    { id: 'small', t: [42.6, 44.5], parts: [{ d: ground(9660, 9800) }, { d: SQ_SIT, tf: { x: 9960, y: 0, s: 0.62 } }], marks: [{ f: 0.75, t: T(19, 'squirrel') }] },
    { id: 'runoff', t: [44.5, DURATION], style: 'fast', parts: [{ d: ground(10080, 11400) }] },
  ];

  // ---------------- path engine (arc-length sampling, tangent connectors, curvature timing) ----------------
  const NS = 'http://www.w3.org/2000/svg'; let host;
  const pathEl = (d) => { if (!host) { host = document.createElementNS(NS, 'svg'); host.setAttribute('width', '0'); host.setAttribute('height', '0'); host.style.position = 'absolute'; host.style.left = '-10px'; document.body.appendChild(host); } const p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); host.appendChild(p); return p; };
  const STEP = 3;
  function sampleD(d, tf = {}, step = STEP) {
    const p = pathEl(d), L = p.getTotalLength(); const s = tf.s ?? 1, r = (tf.r ?? 0) * Math.PI / 180, fx = tf.fx ?? 1, ox = tf.x ?? 0, oy = tf.y ?? 0, c = Math.cos(r), sn = Math.sin(r);
    const n = Math.max(2, Math.ceil(L * s / step)), out = [];
    for (let i = 0; i <= n; i++) { const q = p.getPointAtLength(L * i / n), x = q.x * s * fx, y = q.y * s; out.push([ox + x * c - y * sn, oy + x * sn + y * c]); }
    return out;
  }
  const tangent = (pts, atEnd) => { const n = pts.length, k = Math.min(4, n - 1), a = atEnd ? pts[n - 1 - k] : pts[0], b = atEnd ? pts[n - 1] : pts[k], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1; return [dx / l, dy / l]; };
  function connector(a, ta, b, tb) {
    const D = Math.hypot(b[0] - a[0], b[1] - a[1]); if (D < 4) return [];
    const h = D * 0.42, p1 = [a[0] + ta[0] * h, a[1] + ta[1] * h], p2 = [b[0] - tb[0] * h, b[1] - tb[1] * h];
    return sampleD(`M${a[0]},${a[1]} C${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${b[0]},${b[1]}`).slice(1, -1);
  }
  function buildPath(segs) {
    const X = [], Y = [], SEG = []; let prev = null;
    segs.forEach((sg, si) => {
      let pts = [];
      for (const pt of sg.parts) { const q = sampleD(pt.d, pt.tf || {}); if (pts.length) pts = pts.concat(connector(pts[pts.length - 1], tangent(pts, true), q[0], tangent(q, false))); pts = pts.concat(pts.length ? q.slice(1) : q); }
      if (prev) pts = connector(prev[prev.length - 1], tangent(prev, true), pts[0], tangent(pts, false)).concat(pts);
      const skip = prev && Math.hypot(pts[0][0] - prev[prev.length - 1][0], pts[0][1] - prev[prev.length - 1][1]) < 0.5 ? 1 : 0;
      for (let i = skip; i < pts.length; i++) { X.push(pts[i][0]); Y.push(pts[i][1]); SEG.push(si); }
      prev = pts;
    });
    const N = X.length, S = new Float64Array(N);
    for (let i = 1; i < N; i++) S[i] = S[i - 1] + Math.hypot(X[i] - X[i - 1], Y[i] - Y[i - 1]);
    const range = segs.map(() => [Infinity, -1]);
    for (let i = 0; i < N; i++) { const r = range[SEG[i]]; r[0] = Math.min(r[0], i); r[1] = Math.max(r[1], i); }
    const TURN = new Float64Array(N);
    for (let i = 0; i < N; i++) { const a = Math.max(0, i - 3), b = Math.min(N - 1, i + 3); if (a === i || b === i) continue; const d1 = Math.atan2(Y[i] - Y[a], X[i] - X[a]), d2 = Math.atan2(Y[b] - Y[i], X[b] - X[i]); let da = Math.abs(d2 - d1); if (da > Math.PI) da = 2 * Math.PI - da; TURN[i] = da; }
    const Tm = new Float64Array(N);
    segs.forEach((sg, si) => {
      const [i0, i1] = range[si], K = sg.slowK ?? 2.0, w = new Float64Array(i1 - i0 + 1);
      for (let i = i0 + 1; i <= i1; i++) w[i - i0] = (S[i] - S[i - 1]) * (1 + K * Math.min(TURN[i] * 3.2, 3));
      const ws = new Float64Array(w.length), R = 7;
      for (let j = 1; j < w.length; j++) { let a = 0, c = 0; for (let k = -R; k <= R; k++) { const q = j + k; if (q > 0 && q < w.length) { const g = 1 - Math.abs(k) / (R + 1); a += w[q] * g; c += g; } } ws[j] = a / c; }
      const cum = new Float64Array(w.length); for (let j = 1; j < w.length; j++) cum[j] = cum[j - 1] + ws[j];
      const L = S[i1] - S[i0], keys = [{ f: 0, t: sg.t[0] }], ev = [];
      (sg.marks || []).forEach((m) => ev.push({ f: m.f, t: m.t }));
      (sg.holds || []).forEach((h) => { ev.push({ f: h.f, t: h.t }); ev.push({ f: h.f + 1e-6, t: h.t + h.dur }); });
      ev.sort((a, b) => a.f - b.f).forEach((e) => keys.push(e)); keys.push({ f: 1, t: sg.t[1] });
      for (let k = 1; k < keys.length; k++) if (keys[k].t < keys[k - 1].t) keys[k].t = keys[k - 1].t;
      const idxAtF = (f) => { const target = S[i0] + f * L; let lo = i0, hi = i1; while (lo < hi) { const md = (lo + hi) >> 1; if (S[md] < target) lo = md + 1; else hi = md; } return lo; };
      for (let k = 0; k < keys.length - 1; k++) {
        const a = keys[k], b = keys[k + 1], ia = idxAtF(a.f), ib = idxAtF(b.f), ca = cum[ia - i0], cb = cum[ib - i0];
        for (let i = ia; i <= ib; i++) Tm[i] = cb > ca ? lerp(a.t, b.t, (cum[i - i0] - ca) / (cb - ca)) : b.t;
        if (ib === ia) { Tm[ia] = a.t; if (ib + 1 <= i1) Tm[ib + 1] = Math.max(Tm[ib + 1], b.t); }
      }
    });
    for (let i = 1; i < N; i++) if (Tm[i] < Tm[i - 1]) Tm[i] = Tm[i - 1];
    const V = new Float64Array(N);
    for (let i = 1; i < N - 1; i++) { const dt = Tm[i + 1] - Tm[i - 1]; V[i] = dt > 1e-6 ? (S[i + 1] - S[i - 1]) / dt : 0; }
    V[0] = V[1]; V[N - 1] = V[N - 2];
    return { X, Y, S, T: Tm, V, SEG, N, range, segs };
  }
  const headAt = (P, t) => { const { T: Tm, N } = P; if (t <= Tm[0]) return 0; if (t >= Tm[N - 1]) return N - 1; let lo = 0, hi = N - 1; while (lo < hi - 1) { const md = (lo + hi) >> 1; if (Tm[md] <= t) lo = md; else hi = md; } const dt = Tm[hi] - Tm[lo]; return lo + (dt > 1e-9 ? (t - Tm[lo]) / dt : 1); };
  const posAt = (P, h) => { const i = Math.floor(h), f = h - i, j = Math.min(P.N - 1, i + 1); return [lerp(P.X[i], P.X[j], f), lerp(P.Y[i], P.Y[j], f)]; };

  const STY = { ink: { w: 7.2, a: 0.95 }, fast: { w: 6.6, a: 0.92 }, detail: { w: 6.2, a: 0.95 }, sprout: { w: 7.6, a: 0.97 } };
  function prepare(P) {
    const { N, S, SEG, segs, range } = P;
    const W0 = new Float64Array(N), A0 = new Float64Array(N), ACC = new Float64Array(N);
    for (let i = 0; i < N; i++) { const st = STY[segs[SEG[i]].style] || STY.ink; W0[i] = st.w; A0[i] = st.a; }
    const smooth = (arr, R) => { const out = new Float64Array(N); let acc = 0, lo = 0, hi = -1; for (let i = 0; i < N; i++) { while (hi < N - 1 && S[hi + 1] <= S[i] + R) acc += arr[++hi]; while (S[lo] < S[i] - R) acc -= arr[lo++]; out[i] = acc / (hi - lo + 1); } return out; };
    const Wd = smooth(W0, 60), A = smooth(A0, 60);
    const si = segs.findIndex((s) => s.id === 'sprout');
    if (si >= 0) { const [a, b] = range[si]; for (let i = a; i <= b; i++) ACC[i] = Math.min(clamp((S[i] - S[a]) / 30), clamp((S[b] - S[i]) / 40)); for (let i = b + 1; i < N && S[i] - S[b] < 40; i++) ACC[i] = 0; }
    const WID = new Float64Array(N), COL = new Array(N);
    for (let i = 0; i < N; i++) {
      const v = P.V[i], pr = 0.66 + 0.8 * Math.exp(-v / 900);
      WID[i] = Wd[i] * pr * (1 + 0.16 * (vnoise(S[i] / 9 + 7) - 0.5));
      const base = [0, 1, 2].map((c) => lerp(INK[c], GREEN[c], ACC[i]));
      COL[i] = [0, 1, 2].map((c) => lerp(PAPER[c], base[c], A[i]));
    }
    Object.assign(P, { WID, COL, DX: P.X, DY: P.Y });
    P.blots = [];
    segs.forEach((sg, s) => (sg.holds || []).forEach((h) => { const [a, b] = range[s], target = S[a] + h.f * (S[b] - S[a]); let k = a; while (k < b && S[k] < target) k++; P.blots.push({ k, t0: h.t, dur: h.dur, r: 16 }); }));
    return P;
  }
  const rgb = (c) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;
  let haloC = null;
  function drawLine(ctx, P, head, M, k) {
    const n = Math.min(P.N - 1, Math.floor(head)); if (n < 1) return;
    const X = P.DX, Y = P.DY, WID = P.WID, COL = P.COL, f = head - n, kw = Math.max(k, 0.8);
    const sx = new Float32Array(n + 2), sy = new Float32Array(n + 2);
    for (let i = 0; i <= n; i++) { const p = M(X[i], Y[i]); sx[i] = p[0]; sy[i] = p[1]; }
    let m = n; if (f > 0 && n + 1 < P.N) { const p = M(lerp(X[n], X[n + 1], f), lerp(Y[n], Y[n + 1], f)); sx[n + 1] = p[0]; sy[n + 1] = p[1]; m = n + 1; }
    const idx = (i) => Math.min(i, n);
    const nx = new Float32Array(m + 1), ny = new Float32Array(m + 1);
    for (let i = 0; i <= m; i++) { const a = Math.max(0, i - 1), b = Math.min(m, i + 1), dx = sx[b] - sx[a], dy = sy[b] - sy[a], l = Math.hypot(dx, dy) || 1; nx[i] = -dy / l; ny[i] = dx / l; }
    const mg = 80, vis = new Uint8Array(m + 1);
    for (let i = 0; i <= m; i++) vis[i] = sx[i] > -mg && sx[i] < W + mg && sy[i] > -mg && sy[i] < HH + mg ? 1 : 0;
    const wAt = (i, sc) => { let w = WID[idx(i)] * kw * sc; const back = (m - i) * 0.6; if (back < 3) w *= 0.75 + 0.25 * back / 3; return Math.max(w, 0.8); };
    const runs = []; let cur = null;
    for (let i = 0; i <= m; i++) {
      const ii = idx(i), on = vis[i] || (i > 0 && vis[i - 1]) || (i < m && vis[i + 1]);
      const ck = COL[ii], key = ((ck[0] / 6) | 0) * 10000 + ((ck[1] / 6) | 0) * 100 + ((ck[2] / 6) | 0);
      if (!on) { if (cur) { runs.push(cur); cur = null; } continue; }
      if (!cur) cur = { a: i, b: i, key }; else if (key !== cur.key) { cur.b = i; runs.push(cur); cur = { a: i, b: i, key }; } else cur.b = i;
    }
    if (cur) runs.push(cur);
    const fillRun = (g, r, sc) => {
      if (r.b <= r.a) return; g.beginPath();
      for (let i = r.a; i <= r.b; i++) { const w = wAt(i, sc) / 2; g.lineTo(sx[i] + nx[i] * w, sy[i] + ny[i] * w); }
      for (let i = r.b; i >= r.a; i--) { const w = wAt(i, sc) / 2; g.lineTo(sx[i] - nx[i] * w, sy[i] - ny[i] * w); }
      g.closePath(); g.fillStyle = rgb(COL[idx(r.a)]); g.fill();
      for (const i of [r.a, r.b]) { g.beginPath(); g.arc(sx[i], sy[i], wAt(i, sc) / 2, 0, Math.PI * 2); g.fill(); }
    };
    if (!haloC) { haloC = document.createElement('canvas'); haloC.width = W; haloC.height = HH; }
    const hx = haloC.getContext('2d'); hx.setTransform(1, 0, 0, 1, 0, 0); hx.clearRect(0, 0, W, HH);
    for (const r of runs) fillRun(hx, r, 1.0 + 1.6 / Math.max(1, WID[idx(r.a)]));
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 0.22; ctx.filter = `blur(${Math.max(1, k * 2.2).toFixed(2)}px)`; ctx.drawImage(haloC, 0, 0); ctx.restore();
    for (const r of runs) fillRun(ctx, r, 1.0);
    for (let i = 0; i <= n; i += 2) { if (!vis[i]) continue; const v = P.V[i]; if (v > 70) continue; const w = WID[i] * kw * (0.6 + 0.3 * (1 - v / 70)); ctx.fillStyle = rgb(COL[i]); ctx.beginPath(); ctx.arc(sx[i], sy[i], w, 0, Math.PI * 2); ctx.fill(); }
    return { tip: [sx[m], sy[m]], dir: [sx[m] - sx[Math.max(0, m - 4)], sy[m] - sy[Math.max(0, m - 4)]] };
  }
  function drawBlots(ctx, P, t, M, k) {
    for (const b of P.blots) {
      if (t < b.t0) continue;
      const u = clamp((t - b.t0) / b.dur), g = 1 - Math.pow(1 - u, 2.2), R = (P.WID[b.k] * 0.7 + b.r * g) * k, c0 = M(P.DX[b.k], P.DY[b.k]), drop = g * 0.9, c = [c0[0], c0[1] + R * (0.25 + drop)];
      ctx.beginPath();
      for (let i = 0; i < 90; i++) { const a = i / 90 * Math.PI * 2; let x = Math.cos(a), y = Math.sin(a); const up = Math.pow(Math.max(0, -y), 1.6) * drop; x *= 1 - 0.72 * up; y *= 1 + 0.95 * up; const rr = R * (0.9 + 0.16 * vnoise(i * 0.37 + 5) + 0.08 * vnoise(i * 1.3 + 20) * g); ctx.lineTo(c[0] + x * rr, c[1] + y * rr); }
      ctx.closePath();
      const gr = ctx.createRadialGradient(c[0], c[1] + R * 0.2, 0, c[0], c[1], R * 1.25);
      gr.addColorStop(0, 'rgba(29,26,23,0.8)'); gr.addColorStop(0.7, 'rgba(29,26,23,0.64)'); gr.addColorStop(0.9, 'rgba(22,19,17,0.95)'); gr.addColorStop(1, 'rgba(22,19,17,0.7)');
      ctx.fillStyle = gr; ctx.fill();
    }
  }

  // ---------------- paper ----------------
  function tile(size, seed, fn) { const c = document.createElement('canvas'); c.width = c.height = size; fn(c.getContext('2d'), size, mulberry(seed)); return c; }
  function noiseLayer(g, S, rnd, cells, amp) { const s = document.createElement('canvas'); s.width = s.height = cells; const sg = s.getContext('2d'), im = sg.createImageData(cells, cells); for (let i = 0; i < cells * cells; i++) { const v = 128 + (rnd() - 0.5) * 2 * amp; im.data[i * 4] = im.data[i * 4 + 1] = im.data[i * 4 + 2] = v; im.data[i * 4 + 3] = 255; } sg.putImageData(im, 0, 0); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high'; for (let y = -1; y <= 1; y++) for (let x = -1; x <= 1; x++) g.drawImage(s, x * S, y * S, S, S); }
  let PAPERT = null;
  function makePaper() {
    const mottle = tile(512, 11, (g, S, rnd) => { g.fillStyle = 'rgb(128,128,128)'; g.fillRect(0, 0, S, S); noiseLayer(g, S, rnd, 8, 26); g.globalAlpha = 0.55; noiseLayer(g, S, rnd, 24, 22); g.globalAlpha = 1; });
    const fiber = tile(1024, 23, (g, S, rnd) => {
      g.fillStyle = 'rgb(128,128,128)'; g.fillRect(0, 0, S, S); g.globalAlpha = 0.6; noiseLayer(g, S, rnd, 160, 26); g.globalAlpha = 1;
      for (let i = 0; i < 2600; i++) { const x = rnd() * S, y = rnd() * S, L = 6 + rnd() * 34, a = rnd() * Math.PI * 2, bend = (rnd() - 0.5) * 0.8, light = rnd() < 0.6; g.strokeStyle = light ? `rgba(255,255,255,${0.1 + rnd() * 0.16})` : `rgba(60,50,40,${0.06 + rnd() * 0.08})`; g.lineWidth = 0.6 + rnd() * 0.9; g.beginPath(); for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) { const bx = x + ox * S, by = y + oy * S; g.moveTo(bx, by); g.quadraticCurveTo(bx + Math.cos(a + bend) * L * 0.5, by + Math.sin(a + bend) * L * 0.5, bx + Math.cos(a) * L, by + Math.sin(a) * L); } g.stroke(); }
    });
    return { mottle, fiber };
  }
  function drawPaper(ctx, cam) {
    if (!PAPERT) PAPERT = makePaper();
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.fillStyle = 'rgb(244,239,228)'; ctx.fillRect(0, 0, W, HH);
    const layer = (img, worldSize, alpha) => { if (alpha <= 0.01) return; const pat = ctx.createPattern(img, 'repeat'), s = worldSize / img.width * cam.k; const m = new DOMMatrix([s, 0, 0, s, W / 2 - cam.cx * cam.k, HH / 2 - cam.cy * cam.k]); pat.setTransform(m); ctx.globalCompositeOperation = 'soft-light'; ctx.globalAlpha = alpha; ctx.fillStyle = pat; ctx.fillRect(0, 0, W, HH); };
    layer(PAPERT.mottle, 2400, 0.55); layer(PAPERT.fiber, 700, 0.6); layer(PAPERT.fiber, 2200, 0.35);
    ctx.restore();
  }
  function vignette(ctx) { const g = ctx.createRadialGradient(W / 2, HH / 2, HH * 0.35, W / 2, HH / 2, HH * 0.75); g.addColorStop(0, 'rgba(90,70,50,0)'); g.addColorStop(1, 'rgba(90,70,50,0.14)'); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); ctx.restore(); }

  // ---------------- camera: composition keys + nib follow ----------------
  // x/y = composed centre (world), z = zoom (px per unit), f = follow weight. Ground sits a little below the middle of the frame.
  const GY = -220; // world y shown at screen centre when composed on the ground
  const CAM = [
    { t: 0, x: -60, y: -260, z: 1.55, f: 0.15 },
    { t: 2.0, x: 60, y: -200, z: 1.3, f: 0.1 },
    { t: 2.6, x: 500, y: GY, z: 0.9, f: 0.2 },
    { t: 3.6, x: 760, y: GY, z: 0.9, f: 0.5 },
    { t: 5.0, x: 1330, y: -260, z: 1.3, f: 0.3 },
    { t: 6.0, x: 1800, y: -150, z: 1.43, f: 0.6 },
    { t: 7.8, x: 2200, y: -200, z: 1.3, f: 0.6 },
    { t: 8.6, x: 2620, y: -500, z: 1.49, f: 0.15 },
    { t: 11.2, x: 2640, y: -480, z: 1.62, f: 0.15 },
    { t: 11.8, x: 3100, y: GY, z: 1.0, f: 0.6 },
    { t: 12.3, x: 3290, y: GY, z: 0.98, f: 0.0 },
    { t: 13.4, x: 3380, y: -260, z: 0.95, f: 0.1 },
    { t: 15.2, x: 3800, y: -260, z: 1.1, f: 0.3 },
    { t: 16.8, x: 4300, y: GY, z: 1.0, f: 0.6 },
    { t: 17.4, x: 4600, y: -160, z: 1.49, f: 0.2 },
    { t: 19.2, x: 4700, y: -140, z: 1.49, f: 0.2 },
    { t: 20.2, x: 5300, y: -200, z: 1.62, f: 0.1 },
    { t: 21.6, x: 5320, y: -200, z: 1.56, f: 0.2 },
    { t: 23.0, x: 5900, y: -120, z: 1.49, f: 0.5 },
    { t: 25.4, x: 6050, y: -140, z: 1.49, f: 0.4 },
    { t: 26.4, x: 6650, y: -180, z: 1.2, f: 0.15 },
    { t: 28.8, x: 6680, y: -160, z: 1.25, f: 0.1 },
    { t: 30.4, x: 7300, y: -60, z: 1.3, f: 0.5 },
    { t: 31.6, x: 7620, y: 60, z: 1.69, f: 0.1 },
    { t: 32.6, x: 7680, y: 30, z: 1.62, f: 0.2 },
    { t: 33.4, x: 8300, y: GY, z: 1.0, f: 0.7 },
    { t: 34.6, x: 8850, y: -120, z: 1.49, f: 0.3 },
    { t: 36.0, x: 9000, y: -60, z: 1.37, f: 0.5 },
    { t: 37.4, x: 9600, y: 120, z: 1.75, f: 0.1 },
    { t: 39.2, x: 9600, y: 100, z: 1.6, f: 0.0 },
    { t: 40.2, x: 9600, y: -80, z: 1.25, f: 0.05 },
    { t: 41.6, x: 9640, y: -560, z: 0.82, f: 0.0 },
    { t: 44.0, x: 9700, y: -560, z: 0.8, f: 0.0 },
    { t: 47.9, x: 9760, y: -560, z: 0.76, f: 0.0 },
  ];
  const sm = (u) => u * u * (3 - 2 * u);
  function keyAt(t) { if (t <= CAM[0].t) return CAM[0]; for (let i = 0; i < CAM.length - 1; i++) { const a = CAM[i], b = CAM[i + 1]; if (t <= b.t) { const u = sm((t - a.t) / (b.t - a.t)); return { x: lerp(a.x, b.x, u), y: lerp(a.y, b.y, u), z: Math.exp(lerp(Math.log(a.z), Math.log(b.z), u)), f: lerp(a.f, b.f, u) }; } } return CAM[CAM.length - 1]; }
  function camAt(P, t) {
    const K = keyAt(t); let fx = 0, fy = 0, ws = 0;
    for (let j = -11; j <= 8; j++) { const w = Math.exp(-((j + 1.5) * (j + 1.5)) / 40), p = posAt(P, headAt(P, t + j * 0.05)); fx += p[0] * w; fy += p[1] * w; ws += w; }
    fx /= ws; fy /= ws;
    let cx = lerp(K.x, fx, K.f), cy = lerp(K.y, fy + 120, K.f * 0.5); const k = K.z;
    const pen = posAt(P, headAt(P, t)), px = (pen[0] - cx) * k, py = (pen[1] - cy) * k;
    const soft = (v, m) => { const a = Math.abs(v); return a <= m ? 0 : Math.sign(v) * (a - m); };
    if (t < 44.4) { cx += soft(px, W * 0.36) / k; cy += soft(py, HH * 0.3) / k; }
    return { cx, cy, k };
  }

  // ---------------- written-on text (Caveat), screen space, kept in empty paper ----------------
  const TEXTS = [
    { s: '3,000 nuts', x: 540, y: 470, size: 190, t0: T(0, '3000') - 0.1, t1: 5.3 },
    { s: 'a year!', x: 540, y: 610, size: 110, t0: T(0, 'year') - 0.05, t1: 5.3 },
    { s: 'it remembers', x: 540, y: 330, size: 120, t0: T(3, 'remembers') - 0.05, t1: 11.3 },
    { s: 'a tree', x: 290, y: 430, size: 96, t0: T(5, 'tree') - 0.05, t1: 13.4 },
    { s: 'a rock', x: 560, y: 430, size: 96, t0: T(5, 'rock') - 0.05, t1: 13.4 },
    { s: 'a post', x: 820, y: 430, size: 96, t0: T(5, 'fence') - 0.05, t1: 13.4 },
    { s: 'up to 2 months', x: 540, y: 470, size: 150, t0: T(6, 'two') - 0.15, t1: 16.9 },
    { s: 'sniff!', x: 760, y: 560, size: 120, t0: T(7, 'nose') - 0.05, t1: 19.2 },
    { s: 'watching...', x: 540, y: 470, size: 120, t0: T(8, 'watching') - 0.1, t1: 22.0 },
    { s: 'FAKE!', x: 540, y: 520, size: 200, t0: T(9, 'fakes') - 0.08, t1: 23.3 },
    { s: 'sneaky!', x: 540, y: 470, size: 150, t0: T(12, 'sneaky') - 0.05, t1: 30.4 },
    { s: 'never dug up', x: 540, y: 520, size: 130, t0: T(13, 'never') - 0.1, t1: 33.0 },
    { s: 'planted!', x: 540, y: 520, size: 140, t0: T(16, 'planted') - 0.1, t1: 39.3 },
    { s: 'planted by a squirrel', x: 540, y: 1600, size: 96, t0: T(19, 'planted') - 0.1, t1: 44.8 },
    { s: 'Which tree near you', x: 540, y: 310, size: 122, t0: T(20, 'which') - 0.05, t1: DURATION + 1 },
    { s: 'did a squirrel plant?', x: 540, y: 440, size: 122, t0: T(20, 'did') - 0.05, t1: DURATION + 1 },
  ];
  function writeText(ctx, o, t) {
    if (t < o.t0 || t > o.t1 + 0.45) return;
    const dur = 0.15 + 0.017 * o.s.length, u = clamp((t - o.t0) / dur), fade = 1 - clamp((t - o.t1) / 0.45);
    ctx.save(); ctx.font = `700 ${o.size}px Caveat`; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    const w = ctx.measureText(o.s).width, x0 = o.x - w / 2;
    ctx.beginPath(); ctx.rect(x0 - 30, o.y - o.size * 1.2, (w + 60) * u, o.size * 1.6); ctx.clip();
    ctx.globalAlpha = fade; ctx.lineJoin = 'round'; ctx.strokeStyle = 'rgba(244,239,228,0.92)'; ctx.lineWidth = o.size * 0.32; ctx.strokeText(o.s, x0, o.y);
    ctx.fillStyle = 'rgba(29,26,23,0.86)'; ctx.fillText(o.s, x0, o.y);
    ctx.restore();
  }

  // ---------------- frame ----------------
  let PATH = null;
  const getPath = () => PATH || (PATH = prepare(buildPath(SEGS)));
  function pen(ctx, tip, dir, k, t) {
    if (!tip) return; const L = Math.hypot(dir[0], dir[1]) || 1;
    ctx.save(); ctx.filter = 'blur(10px)'; ctx.globalAlpha = 0.16; ctx.fillStyle = '#3a2e22';
    ctx.beginPath(); ctx.moveTo(tip[0], tip[1]); ctx.lineTo(tip[0] + 260 * k, tip[1] - 420 * k); ctx.lineTo(tip[0] + 320 * k, tip[1] - 380 * k); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.save(); ctx.globalAlpha = 0.35; ctx.fillStyle = '#1d1a17'; ctx.beginPath(); ctx.arc(tip[0], tip[1], 3, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  }
  function explainer(ctx, Wd, Hd, t) {
    const P = getPath(), cam = window.__CAM ? window.__CAM(t) : camAt(P, t);
    const M = (x, y) => [W / 2 + (x - cam.cx) * cam.k, HH / 2 + (y - cam.cy) * cam.k];
    drawPaper(ctx, cam);
    const head = window.__ALL ? P.N - 1 : headAt(P, t);
    const r = drawLine(ctx, P, head, M, cam.k);
    drawBlots(ctx, P, t, M, cam.k);
    if (r && t < DURATION - 0.6 && !window.__ALL) pen(ctx, r.tip, r.dir, cam.k, t);
    vignette(ctx);
    for (const o of TEXTS) writeText(ctx, o, t);
  }

  // ---------------- sound: the pen on paper (from the line's own speed) + one solo melodic line ----------------
  function scoreSound(k) {
    const P = getPath(), D = DURATION, r = mulberry(5);
    k.bed('room', 0, D, { gain: 0.12 });
    k.play('tock', 0.02, { f: 900, gain: 0.5 });
    const STOP = [T(13, 'never') + 0.05, T(13, 'never') + 0.8, T(16, 'planted') - 0.15, 39.25];
    for (let t = 0.02; t < D - 1; t += 0.045) {
      const h0 = headAt(P, t), h1 = headAt(P, t + 0.045), a = posAt(P, h0), b = posAt(P, h1), v = Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.045;
      if (v < 15) continue;
      const cam = camAt(P, t), pan = clamp((a[0] - cam.cx) * cam.k / 540, -0.8, 0.8) * 0.6;
      k.noise(t, { dur: 0.06, color: 'pink', filter: 'bandpass', f: 900 + Math.min(v, 1600) * 1.6, q: 0.9, gain: 0.05 * Math.sqrt(Math.min(v, 1600) / 400), a: 0.01, pan, minor: true });
      if (r() < Math.min(0.6, v / 1500)) k.noise(t + r() * 0.04, { dur: 0.008, filter: 'highpass', f: 3500, gain: 0.05, pan, minor: true });
    }
    // solo line: a plucked/soft flute-like voice on the key touches; silent during the two stops
    const note = (t, f, dur = 0.5, g = 0.05) => { if ((t > STOP[0] && t < STOP[1]) || (t > STOP[2] && t < STOP[3])) return; k.tone(t, { f, type: 'sine', dur, gain: g, a: 0.02, bus: 'music' }); k.tone(t, { f: k.hz(f) * 2, type: 'sine', dur: dur * 0.6, gain: g * 0.25, a: 0.02, bus: 'music' }); };
    note(T(0, 'squirrel'), 'G4'); note(T(0, '3000'), 'D5', 0.7); note(T(1, 'find'), 'B4', 0.6);
    [T(2, 'one'), 6.6, T(2, 'hole')].forEach((x, i) => note(x, ['E5', 'G5', 'A5'][i], 0.35, 0.04));
    note(T(3, 'remembers'), 'D5', 0.9); note(T(4, 'map'), 'B4', 0.6);
    note(T(5, 'tree'), 'G4', 0.35); note(T(5, 'rock'), 'B4', 0.35); note(T(5, 'fence'), 'D5', 0.35); note(T(6, 'two'), 'G5', 1.0, 0.045);
    note(T(7, 'nose'), 'A4', 0.3, 0.035); note(T(7, 'spot'), 'E5', 0.6); note(T(8, 'watching'), 'C5', 0.8, 0.04);
    note(T(9, 'fakes'), 'F#5', 0.3); note(T(10, 'hole'), 'D5', 0.3, 0.035); note(T(10, 'nut'), 'A4', 0.4, 0.035); note(T(11, 'mouth'), 'D5', 0.4); note(T(12, 'sneaky'), 'G5', 0.25); note(T(12, 'right'), 'B5', 0.4);
    note(T(15, 'plenty'), 'E5', 0.4, 0.035);
    note(T(17, 'sprouts'), 'G5', 1.2, 0.055); note(T(18, 'trees'), 'D5', 1.0); note(T(19, 'squirrel'), 'B4', 0.6); note(T(20, 'plant'), 'G5', 1.4, 0.05);
    // wet swell on the two blots, a soft tap where the sprout breaks the ground
    k.noise(STOP[0], { dur: 0.7, color: 'brown', filter: 'lowpass', f: 500, gain: 0.08, a: 0.2 });
    k.noise(STOP[2], { dur: 1.0, color: 'brown', filter: 'lowpass', f: 500, gain: 0.08, a: 0.3 });
    k.play('tock', T(17, 'sprouts') - 0.25, { f: 700, gain: 0.35 });
  }

  function thumbnail(ctx, Wd, Hd) {
    const P = getPath(), cam = { cx: 9700, cy: -560, k: 0.78 }, M = (x, y) => [W / 2 + (x - cam.cx) * cam.k, HH / 2 + (y - cam.cy) * cam.k];
    drawPaper(ctx, cam); drawLine(ctx, P, headAt(P, 44.4), M, cam.k); vignette(ctx);
    writeText(ctx, { s: 'Planted by', x: 540, y: 330, size: 150, t0: -10, t1: 99 }, 0); writeText(ctx, { s: 'a squirrel?', x: 540, y: 490, size: 150, t0: -10, t1: 99 }, 0);
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.__PATH = getPath;
})();
