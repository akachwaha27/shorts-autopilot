// ================= Cut-Paper Diorama, vertical 1080x1920: "Why don't woodpeckers get headaches?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":3.11,"text":"Woodpeckers headbang trees twenty times a second,","words":[["woodpeckers",0.25],["headbang",1.0],["trees",1.54],["twenty",1.88],["times",2.29],["a",2.63],["second",2.7]]},{"s":3.41,"e":5.21,"text":"and you'd be out cold after one.","words":[["and",3.41],["youd",3.64],["be",3.94],["out",4.09],["cold",4.31],["after",4.61],["one",4.99]]},{"s":5.76,"e":7.37,"text":"So why don't they get headaches?","words":[["so",5.76],["why",5.89],["dont",6.09],["they",6.34],["get",6.6],["headaches",6.79]]},{"s":7.92,"e":9.33,"text":"Each peck stops the head","words":[["each",7.92],["peck",8.2],["stops",8.48],["the",8.84],["head",9.05]]},{"s":9.63,"e":11.52,"text":"in about a thousandth of a second.","words":[["in",9.63],["about",9.77],["a",10.12],["thousandth",10.19],["of",10.89],["a",11.03],["second",11.1]]},{"s":12.07,"e":13.68,"text":"That's over a thousand g.","words":[["thats",12.07],["over",12.49],["a",12.83],["thousand",12.92],["g",13.59]]},{"s":14.23,"e":15.94,"text":"For years, people thought the skull","words":[["for",14.23],["years",14.4],["people",14.7],["thought",15.05],["the",15.47],["skull",15.64]]},{"s":16.24,"e":17.83,"text":"was a spongy crash helmet.","words":[["was",16.24],["a",16.47],["spongy",16.54],["crash",17.0],["helmet",17.37]]},{"s":18.38,"e":21.71,"text":"But in 2022, slow-motion videos showed","words":[["but",18.38],["in",18.7],["2022",18.91],["slowmotion",19.34],["videos",20.42],["showed",21.06]]},{"s":22.01,"e":23.59,"text":"it barely cushions anything.","words":[["it",22.01],["barely",22.14],["cushions",22.54],["anything",23.07]]},{"s":24.14,"e":25.26,"text":"It's a stiff hammer,","words":[["its",24.14],["a",24.37],["stiff",24.44],["hammer",24.81]]},{"s":25.56,"e":27.43,"text":"because a soft one would hit weaker.","words":[["because",25.56],["a",26.01],["soft",26.08],["one",26.33],["would",26.53],["hit",26.85],["weaker",27.05]]},{"s":27.98,"e":29.49,"text":"The real trick is size.","words":[["the",27.98],["real",28.23],["trick",28.57],["is",28.99],["size",29.16]]},{"s":30.04,"e":32.69,"text":"A woodpecker's brain weighs just a few grams,","words":[["a",30.04],["woodpeckers",30.12],["brain",30.93],["weighs",31.29],["just",31.73],["a",32.03],["few",32.1],["grams",32.32]]},{"s":32.99,"e":35.23,"text":"packed so snugly it barely sloshes.","words":[["packed",32.99],["so",33.46],["snugly",33.61],["it",34.07],["barely",34.23],["sloshes",34.69]]},{"s":35.78,"e":38.65,"text":"Tiny brains handle far bigger hits than ours.","words":[["tiny",35.78],["brains",36.09],["handle",36.56],["far",37.02],["bigger",37.25],["hits",37.72],["than",38.03],["ours",38.34]]},{"s":39.2,"e":40.74,"text":"Plus, its long tongue bone","words":[["plus",39.2],["its",39.49],["long",39.71],["tongue",40.01],["bone",40.45]]},{"s":41.04,"e":42.84,"text":"wraps all the way around its skull,","words":[["wraps",41.04],["all",41.36],["the",41.55],["way",41.75],["around",41.94],["its",42.32],["skull",42.52]]},{"s":43.14,"e":44.85,"text":"which may help keep things steady.","words":[["which",43.14],["may",43.44],["help",43.63],["keep",43.87],["things",44.12],["steady",44.49]]},{"s":45.4,"e":47.57,"text":"That's up to twelve thousand pecks a day,","words":[["thats",45.4],["up",45.74],["to",45.88],["twelve",46.01],["thousand",46.42],["pecks",46.96],["a",47.3],["day",47.37]]},{"s":47.87,"e":49.16,"text":"and not one headache.","words":[["and",47.87],["not",48.1],["one",48.32],["headache",48.55]]},{"s":49.71,"e":51.03,"text":"So what would you headbang","words":[["so",49.71],["what",49.83],["would",50.07],["you",50.37],["headbang",50.55]]},{"s":51.33,"e":52.73,"text":"twenty times a second?","words":[["twenty",51.33],["times",51.8],["a",52.19],["second",52.27]]}];
  // P(i, word) = time the word is spoken in phrase i
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const BEATS = [
    { s: PH[0].s, e: PH[2].e, text: "woodpeckers headbang trees 20 times a second, you'd be out cold after one, why no headaches?", screen: 'forest diorama, paper woodpecker drumming on a trunk with blur ghosts and flying chips, 20 tiles + /SEC, OUT COLD + cross, HEADACHES? ring' },
    { s: PH[3].s, e: PH[5].e, text: 'each peck stops the head in about a thousandth of a second, over 1,000 g', screen: 'slow-mo close-up of the beak striking bark, impact bursts, stopwatch, 1/1000 SEC tiles, 1,000 G tiles on a sunburst' },
    { s: PH[6].s, e: PH[11].e, text: 'people thought the skull was a spongy crash helmet; 2022 slow-mo: barely cushions; stiff hammer, soft would hit weaker', screen: 'big head with cut-away skull, sponge helmet drops on (CRASH HELMET?), 2022 + SLOW-MO, red cross, sponge flies off, STIFF HAMMER + hammer, soft mallet WEAKER' },
    { s: PH[12].s, e: PH[15].e, text: 'the real trick is size: a few grams, packed snugly, barely sloshes; tiny brains handle bigger hits', screen: 'SIZE on a ring, tiny woodpecker brain vs big YOU brain, skull shells close around them, the big one sloshes, SNUG, TINY = TOUGHER + check' },
    { s: PH[16].s, e: PH[18].e, text: 'its long tongue bone wraps all the way around its skull, may help keep things steady', screen: 'x-ray head, a teal paper strip grows from the beak around the back and over the top of the skull, TONGUE BONE, STEADY?' },
    { s: PH[19].s, e: PH[22].e, text: 'up to 12,000 pecks a day, not one headache; what would you headbang 20 times a second?', screen: 'back in the forest, counter rolls to 12,000 PECKS/DAY, 0 HEADACHES + check, YOU? ring, 20/SEC again, comment bubble' },
  ];
  const DURATION = PH[PH.length - 1].e + 1.0;
  const SLIDE = 0.5;
  const CUT2 = PH[2].e + 0.12, CUT3 = PH[5].e + 0.1, CUT4 = PH[11].e + 0.1, CUT5 = PH[15].e + 0.1, CUT6 = PH[18].e + 0.1;
  // drumming bursts (picture and sound read the same table)
  const RATE = 20;
  const DRUM1 = [[P(0, 'headbang') - 0.05, P(0, 'second') + 0.3], [P(1, 'out') - 0.5, P(1, 'one') + 0.2], [P(2, 'get') - 0.1, PH[2].e + 0.1]];
  const DRUM6 = [[PH[19].s, P(19, 'pecks') + 0.3], [P(20, 'not') - 0.2, PH[20].e], [P(22, 'twenty') - 0.05, PH[22].e + 0.4]];
  // slow-motion impacts (scene 2) and stiff-hammer pecks (scene 3)
  const IMP2 = [P(3, 'stops'), P(4, 'thousandth'), P(5, 'thousand')];
  const IMP3 = [P(10, 'hammer'), P(11, 'hit')];

  try { ['400 140px "Archivo Black"', '400 60px "Archivo Black"'].forEach((f) => document.fonts.load(f, 'AaZz09?!')); } catch (e) {}
  const fontOK = () => { try { return document.fonts.check('400 60px "Archivo Black"'); } catch (e) { return true; } };

  // ---------------- reference style functions (styles/cut-paper.js) ----------------
  const poly = (c, pts) => { c.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]); c.closePath(); };
  const circPts = (r, cx, cy, R, seg = 15, jit = 0.6) => {
    const n = Math.max(18, Math.round((TAU * R) / seg)), a0 = r() * TAU, out = [];
    for (let i = 0; i < n; i++) { const a = a0 + ((i + r.range(-0.2, 0.2)) / n) * TAU, rr = R + r.gauss() * jit; out.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); }
    return out;
  };
  const ridge = (r, x0, x1, f, sMin = 12, sMax = 30, jit = 0.6) => { const out = []; let x = x0; while (x < x1) { out.push([x, f(x) + r.gauss() * jit]); x += r.range(sMin, sMax); } out.push([x1, f(x1)]); return out; };
  const cutLines = (r, pts, seg = 22, jit = 0.7) => {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i], [bx, by] = pts[i + 1], n = Math.max(1, Math.round(Math.hypot(bx - ax, by - ay) / seg));
      for (let k = 0; k < n; k++) { const u = k / n; out.push([ax + (bx - ax) * u + (k ? r.gauss() * jit : 0), ay + (by - ay) * u + (k ? r.gauss() * jit : 0)]); }
    }
    out.push(pts[pts.length - 1]); return out;
  };
  const makeTex = (seed) => {
    const S = 512, cv = H.layer(S, S), x = cv.getContext('2d'), r = H.rng(seed), nz = H.makeNoise(seed + 1);
    const M = 64, mc = H.layer(M, M), mx = mc.getContext('2d'), mi = mx.createImageData(M, M), f = 5 / M;
    for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) {
      const n = (a, b) => nz.fbm2(a * f, b * f, 3);
      const v = (n(i, j) * (M - i) * (M - j) + n(i - M, j) * i * (M - j) + n(i, j - M) * (M - i) * j + n(i - M, j - M) * i * j) / (M * M);
      const k = (j * M + i) * 4, a = Math.min(255, Math.abs(v) * 120);
      mi.data[k] = mi.data[k + 1] = mi.data[k + 2] = v > 0 ? 255 : 0; mi.data[k + 3] = a;
    }
    mx.putImageData(mi, 0, 0); x.imageSmoothingEnabled = true;
    for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) x.drawImage(mc, ox * S, oy * S, S, S);
    const g = x.getImageData(0, 0, S, S), d = g.data;
    for (let i = 0; i < d.length; i += 4) {
      const n = r() - 0.5; if (r() < 0.5) continue;
      const a = Math.abs(n) * 60, c = n > 0 ? 255 : 0, aa = a / 255, oa = d[i + 3] / 255, na = aa + oa * (1 - aa);
      if (na > 0) { d[i] = (c * aa + d[i] * oa * (1 - aa)) / na; d[i + 1] = d[i]; d[i + 2] = d[i]; d[i + 3] = na * 255; }
    }
    x.putImageData(g, 0, 0); x.lineCap = 'round';
    for (let n = 0; n < 1100; n++) {
      const px = r() * S, py = r() * S, len = r.range(4, 22), a = r() * TAU, bend = r.range(-5, 5), light = r() < 0.55;
      x.strokeStyle = light ? `rgba(255,255,255,${r.range(0.08, 0.22)})` : `rgba(0,0,0,${r.range(0.05, 0.14)})`; x.lineWidth = r.range(0.4, 1.1);
      for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) {
        const sx = px + ox * S, sy = py + oy * S; if (sx < -30 || sx > S + 30 || sy < -30 || sy > S + 30) continue;
        x.beginPath(); x.moveTo(sx, sy); x.quadraticCurveTo(sx + Math.cos(a) * len * 0.5 - Math.sin(a) * bend, sy + Math.sin(a) * len * 0.5 + Math.cos(a) * bend, sx + Math.cos(a) * len, sy + Math.sin(a) * len); x.stroke();
      }
    }
    return cv;
  };
  const PK = {};
  const pkTex = () => PK.tex || (PK.tex = makeTex(77));
  const paperize = (w, h, paint, o = {}) => {
    const L = H.layer(Math.ceil(w), Math.ceil(h)), c = L.getContext('2d');
    paint(c);
    const r = H.rng(o.seed || 7), pat = c.createPattern(pkTex(), 'repeat');
    pat.setTransform(new DOMMatrix().translateSelf(r() * 512, r() * 512).rotateSelf(r.range(-30, 30)));
    c.save(); c.globalCompositeOperation = 'source-atop'; c.globalAlpha = o.tex ?? 1; c.fillStyle = pat; c.fillRect(0, 0, w, h); c.restore();
    const edge = (col, dx, dy) => {
      const T = H.layer(L.width, L.height), tc = T.getContext('2d');
      tc.drawImage(L, 0, 0); tc.globalCompositeOperation = 'source-in'; tc.fillStyle = col; tc.fillRect(0, 0, w, h);
      tc.globalCompositeOperation = 'destination-out'; tc.drawImage(L, dx, dy);
      c.save(); c.globalCompositeOperation = 'source-atop'; c.drawImage(T, 0, 0); c.restore();
    };
    // edges scaled a touch for the 1.5x larger vertical frame
    if (o.rim !== false) { edge(`rgba(255,247,232,${o.hi ?? 0.38})`, 1.8, 2.2); edge(`rgba(0,0,0,${o.lo ?? 0.28})`, -1.6, -1.8); }
    return L;
  };
  const shadowDraw = (ctx, img, x, y, d = 1, sa = 0.5) => {
    ctx.save();
    if (d > 0) {
      ctx.shadowColor = `rgba(14,10,30,${sa})`; ctx.shadowBlur = 9 + d * 10; ctx.shadowOffsetX = 2 + d * 3.4; ctx.shadowOffsetY = 3 + d * 5.2;
      ctx.drawImage(img, x, y);
      ctx.shadowColor = 'rgba(10,6,20,0.38)'; ctx.shadowBlur = 3.5; ctx.shadowOffsetX = 1.1; ctx.shadowOffsetY = 2;
    }
    ctx.drawImage(img, x, y); ctx.restore();
  };
  const put = (ctx, spr, cx, cy, o = {}) => {
    ctx.save(); ctx.translate(cx, cy);
    if (o.rot) ctx.rotate(o.rot);
    if (o.sx != null || o.s != null) ctx.scale(o.sx ?? o.s ?? 1, o.sy ?? o.s ?? 1);
    if (o.a != null) ctx.globalAlpha = o.a;
    shadowDraw(ctx, spr, -spr.width / 2 + (o.ox || 0), -spr.height / 2 + (o.oy || 0), o.d ?? 1, o.sa ?? 0.5);
    ctx.restore();
  };
  const compose = (w, h, layers) => {
    const C = H.layer(w, h), c = C.getContext('2d');
    layers.forEach(([paint, d, o], i) => shadowDraw(c, paperize(w, h, paint, { seed: 30 + i * 7, ...(o || {}) }), 0, 0, d, 0.4));
    return C;
  };
  const cache = (k, f) => PK[k] || (PK[k] = f());
  const AF = (px) => `400 ${px}px "Archivo Black"`;
  const measure = (str, font) => { const c = H.layer(4, 4).getContext('2d'); c.font = font; return c.measureText(str).width; };
  const wordSpr = (str, px, col, back = '#f3ecdc', bw = 22) => {
    const key = 'w' + str + px + col + back + bw, mk = () => {
      const font = AF(px), tw = measure(str, font), w = tw + bw * 2 + 20, h = px * 1.35 + bw * 2, by = h / 2 + px * 0.36, layers = [];
      if (back) layers.push([(c) => { c.font = font; c.lineJoin = 'round'; c.lineWidth = bw * 1.6; c.strokeStyle = back; c.fillStyle = back; c.strokeText(str, bw + 10, by); c.fillText(str, bw + 10, by); }, 0]);
      layers.push([(c) => { c.font = font; c.fillStyle = col; c.fillText(str, bw + 10, by); }, back ? 0.45 : 0]);
      return compose(w, h, layers);
    };
    return fontOK() ? cache(key, mk) : mk();
  };
  const digitSpr = (ch, px, col) => wordSpr(ch, px, col, '#f3ecdc', 13);
  const numberRow = (ctx, str, x, y, px, col, o = {}) => {
    let cx = x;
    for (const ch of str) { const s = digitSpr(ch, px, col), w = s.width - 28, jr = H.rng(ch.charCodeAt(0) * 13 + Math.round(cx)); put(ctx, s, cx + w / 2, y, { rot: (jr() - 0.5) * 0.08, d: o.d ?? 0.7 }); cx += w - 2; }
    return cx;
  };
  const rowWidth = (str, px) => { let w = 0; for (const ch of str) w += digitSpr(ch, px, '#000').width - 30; return w; };
  const ringSpr = () => cache('ring', () => paperize(460, 360, (c) => { c.fillStyle = '#f2b545'; c.beginPath(); c.ellipse(230, 180, 222, 172, 0, 0, TAU); c.ellipse(230, 180, 192, 146, 0, 0, TAU); c.fill('evenodd'); }, { seed: 12 }));
  const burstSpr = () => cache('burst', () => paperize(520, 520, (c) => { c.fillStyle = '#f2b545'; c.beginPath(); for (let i = 0; i < 32; i++) { const a = (i / 32) * TAU, rr = i % 2 ? 150 : 254; const x = 260 + Math.cos(a) * rr, y = 260 + Math.sin(a) * rr; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.closePath(); c.fill(); }, { seed: 13 }));
  const crossSpr = () => cache('x', () => paperize(170, 170, (c) => { c.fillStyle = '#d9473b'; c.save(); c.translate(85, 85); c.rotate(0.785); c.fillRect(-74, -17, 148, 34); c.fillRect(-17, -74, 34, 148); c.restore(); }, { seed: 9 }));
  const checkSpr = () => cache('ok', () => paperize(180, 165, (c) => { c.fillStyle = '#5fae6a'; c.beginPath(); poly(c, [[12, 87], [39, 60], [69, 93], [144, 15], [171, 42], [69, 147]]); c.fill(); }, { seed: 10 }));
  const arrow = (ctx, ax, ay, cx, cy, bx, by, p, col, seed, lw = 20) => {
    if (p <= 0) return;
    const pts = [];
    for (let i = 0; i <= 40 * p; i++) { const u = i / 40; pts.push([(1 - u) * (1 - u) * ax + 2 * u * (1 - u) * cx + u * u * bx, (1 - u) * (1 - u) * ay + 2 * u * (1 - u) * cy + u * u * by]); }
    if (pts.length < 2) return;
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    pts.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
    x0 -= 50; y0 -= 50; x1 += 50; y1 += 50;
    const [ex, ey] = pts[pts.length - 1], [px, py] = pts[pts.length - 2], a = Math.atan2(ey - py, ex - px), hs = lw * 1.7;
    const L = paperize(x1 - x0, y1 - y0, (c) => {
      c.translate(-x0, -y0); c.strokeStyle = col; c.lineWidth = lw; c.lineCap = 'butt'; c.lineJoin = 'round';
      c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x - Math.cos(a) * hs * 0.8 * (i === pts.length - 1), y - Math.sin(a) * hs * 0.8 * (i === pts.length - 1)) : c.moveTo(x, y))); c.stroke();
      c.fillStyle = col; c.beginPath(); c.moveTo(ex + Math.cos(a) * hs, ey + Math.sin(a) * hs);
      c.lineTo(ex + Math.cos(a + 2.5) * hs * 1.5, ey + Math.sin(a + 2.5) * hs * 1.5); c.lineTo(ex + Math.cos(a - 2.5) * hs * 1.5, ey + Math.sin(a - 2.5) * hs * 1.5); c.fill();
    }, { seed });
    shadowDraw(ctx, L, x0, y0, 0.6);
  };
  const dropIn = (t, st, du = 0.4, dist = 80) => {
    const u = H.clamp((t - st) / du); if (u <= 0) return null;
    const e = H.ease.back(u), lift = 1 - H.ease.out(u);
    return { dy: -(1 - e) * dist, s: 1 + lift * 0.08, d: lift * 3, a: H.clamp(u * 4) };
  };
  const seg = (t, a, b) => H.ease.inOut(H.clamp((t - a) / (b - a)));
  const tag = (ctx, t, st, str, px, col, x, y, o = {}) => { const A = dropIn(t, st, o.du || 0.35, o.dist || 60); if (!A) return false; put(ctx, wordSpr(str, px, col, o.back || '#fbf6ea', o.bw || 14), x, y + A.dy, { s: A.s * (o.s || 1), d: (o.d ?? 0.8) + A.d, rot: o.rot || 0 }); return true; };
  const groundSpr = (w, col, seed) => cache('ground' + w + col + seed, () => {
    const nz = H.makeNoise(seed), r = H.rng(seed + 1), f = (x) => 34 + 16 * Math.sin(x * 0.006 + 1.3) + 9 * Math.sin(x * 0.021), torn = [], core = [];
    for (let x = 0; x <= w; x += 3) { const y = f(x) + nz.fbm2(x * 0.03, 0.5, 4) * 6 + r.gauss() * 0.7; torn.push([x, y + 4 + Math.abs(nz.n2(x * 0.045, 3.1)) * 9 + Math.abs(nz.n2(x * 0.3, 7.7)) * 3]); core.push([x, y]); }
    return paperize(w, 700, (c) => {
      c.fillStyle = C.cream; c.beginPath(); poly(c, [...core, [w, 700], [0, 700]]); c.fill();
      c.strokeStyle = 'rgba(248,244,236,0.95)'; c.lineCap = 'round';
      for (let i = 0; i < core.length; i++) { if (!r.chance(0.55)) continue; const [x, y] = core[i], a = -Math.PI / 2 + r.range(-0.9, 0.9), l = r.range(2, 7); c.lineWidth = r.range(0.5, 1.1); c.beginPath(); c.moveTo(x, y + 1); c.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke(); }
      c.fillStyle = col; c.beginPath(); poly(c, [...torn, [w, 700], [0, 700]]); c.fill();
      const gr = H.rng(seed + 2); c.beginPath();
      for (let x = 30; x < w - 20; x += gr.range(70, 200)) { const n = gr.int(2, 4), by = f(x) + 60 + gr.range(0, 90); for (let k = 0; k < n; k++) { const bx = x + k * 10; c.moveTo(bx, by); c.lineTo(bx + 3 + gr.range(-4, 5), by - gr.range(14, 30)); c.lineTo(bx + 7, by); } }
      c.fillStyle = 'rgba(0,0,0,0.18)'; c.fill();
    }, { seed: seed + 3 });
  });
  const hillsSpr = (seed, col, amp, w = 1600) => cache('hill' + seed + col, () => {
    const r = H.rng(seed), f = (x) => 140 + amp * Math.sin(x * 0.005 + seed) + amp * 0.4 * Math.sin(x * 0.017);
    return paperize(w, 600, (c) => { c.fillStyle = col; c.beginPath(); poly(c, [...ridge(r, 0, w, f, 14, 32, 0.7), [w, 600], [0, 600]]); c.fill(); }, { seed: seed + 5 });
  });
  const pineRow = (seed, w, colA, colB) => cache('pines' + seed, () => {
    const Cv = H.layer(w, 400), c = Cv.getContext('2d'), pr = H.rng(seed);
    for (let px = 50; px < w; px += pr.range(140, 300)) {
      const h = pr.range(120, 200), base = 380, wd = h * 0.5, col = pr() < 0.5 ? colA : colB, pts = [];
      for (let k = 0; k < 3; k++) { const ty = base - h * 0.16 - k * h * 0.25, tw = wd * (1 - k * 0.24), th = h * 0.4, tier = [[px, ty - th]]; for (let j = 0; j <= 4; j++) { const u = j / 4; tier.push([px + tw / 2 - u * tw, ty + (j % 2 ? -6 : 0)]); } pts.push(tier); }
      const pw = Math.ceil(wd + 30), ph = Math.ceil(h * 1.25 + 10), ox = px - pw / 2, oy = base - h * 1.15;
      shadowDraw(c, paperize(pw, ph, (x) => { x.translate(-ox, -oy); x.fillStyle = '#3a2c2a'; x.fillRect(px - 5, base - h * 0.22, 10, h * 0.3); x.fillStyle = col; x.beginPath(); pts.forEach((p) => poly(x, p)); x.fill(); }, { seed: seed + Math.round(px) }), ox, oy, 0.5, 0.4);
    }
    return Cv;
  });

  // ---------------- finishing (reference "photo finish", same strength) ----------------
  function finish(ctx, t) {
    ctx.save(); ctx.globalCompositeOperation = 'soft-light';
    const lg = ctx.createRadialGradient(240, 220, 60, 400, 600, 2000);
    lg.addColorStop(0, 'rgba(255,236,200,1)'); lg.addColorStop(0.5, 'rgba(255,230,200,0.25)'); lg.addColorStop(1, 'rgba(0,0,20,0.6)');
    ctx.fillStyle = lg; ctx.fillRect(0, 0, W0, H0);
    const lp = ctx.createRadialGradient(560, 900, 30, 560, 900, 900);
    lp.addColorStop(0, 'rgba(255,214,160,0.42)'); lp.addColorStop(1, 'rgba(255,214,160,0)');
    ctx.fillStyle = lp; ctx.fillRect(0, 0, W0, H0); ctx.restore();
    H.vignette(ctx, W0, H0, 0.42, '10,6,24');
    H.grain(ctx, W0, H0, 0.03, 9 + Math.floor(t * 12));
  }


  // ---------------- palette ----------------
  const C = { cream: '#f3ecdc', card: '#fbf6ea', ink: '#2b2d5a', gold: '#f2b545', coral: '#e8604a', teal: '#58b0a6', red: '#d9473b',
    sky: '#cfe6d6', far: '#9cc2a6', mid: '#77a585', pine: '#4f7f62', pine2: '#3f6b52', grass: '#6f9a5a',
    bark: '#8a5a3a', bark2: '#6e4428', bark3: '#4e3220', hole: '#2e1d14', chip: '#d9a86a',
    bird: '#26222e', white: '#fbf6ea', nape: '#d9473b', beak: '#4a4a58', claw: '#6a6a74',
    bone: '#f3e6c8', brain: '#f0a3b5', brain2: '#c96f86', sponge: '#f2cf4a', sponge2: '#d9ad2a', steel: '#8c96a8', wood: '#a8743e' };

  // ---------------- helpers ----------------
  const tile = (ctx, t, st, str, px, col, cx, cy) => { const A = dropIn(t, st, 0.4, 70); if (!A) return; const w = rowWidth(str, px); numberRow(ctx, str, cx - w / 2, cy + A.dy, px, col, { d: 1 + A.d }); };
  const fadeOut = (t, a, du = 0.25) => 1 - H.clamp((t - a) / du);
  const alpha = (ctx, a, f) => { if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; f(); ctx.restore(); };
  const popRing = (ctx, t, st, x, y, s, spr) => { const u = H.clamp((t - st) / 0.35); if (u <= 0) return; put(ctx, spr || ringSpr(), x, y, { s: (0.3 + 0.7 * H.ease.back(u)) * s, d: 0.6, rot: 0.05 }); };
  const bigWord = (ctx, t, st, str, px, col, x, y, o = {}) => { const u = H.clamp((t - st) / 0.35); if (u <= 0) return; put(ctx, wordSpr(str, px, col, o.back || C.cream, 18), x, y, { s: H.ease.back(u), d: 1.1, rot: o.rot || 0 }); };

  // ---------------- backdrops ----------------
  const skySpr = (key, base, sunX, sunY, cloudCol) => cache('sky' + key, () => {
    const Cv = H.layer(W0, H0), c = Cv.getContext('2d');
    c.drawImage(paperize(W0, H0, (x) => { x.fillStyle = base; x.fillRect(0, 0, W0, H0); }, { rim: false, seed: 2 + key.length }), 0, 0);
    if (sunX != null) shadowDraw(c, paperize(W0, H0, (x) => { x.fillStyle = '#fff1c9'; x.beginPath(); poly(x, circPts(H.rng(4), sunX, sunY, 120, 12, 0.6)); x.fill(); }, { seed: 5 }), 0, 0, 0.4, 0.3);
    const r = H.rng(51 + key.length);
    shadowDraw(c, paperize(W0, H0, (x) => {
      x.fillStyle = cloudCol || C.card; x.beginPath();
      for (let i = 0; i < 3; i++) { const cx = r.range(120, 960), cy = r.range(300, 760), w = r.range(140, 240); for (let k = 0; k < 4; k++) poly(x, circPts(r, cx - w / 2 + k * w / 3, cy - (k % 3 ? 22 : 0), r.range(34, 52), 10, 0.5)); x.rect(cx - w / 2, cy, w, 34); }
      x.fill();
    }, { seed: 6 + key.length, hi: 0.3 }), 0, 0, 0.5, 0.35);
    return Cv;
  });
  const cardBg = (key, base, deco) => cache('bg' + key, () => {
    const Cv = H.layer(W0, H0), c = Cv.getContext('2d');
    c.drawImage(paperize(W0, H0, (x) => { x.fillStyle = base; x.fillRect(0, 0, W0, H0); }, { rim: false, seed: 40 + key.length }), 0, 0);
    if (deco) shadowDraw(c, paperize(W0, H0, deco, { seed: 41 + key.length }), 0, 0, 0.6, 0.35);
    return Cv;
  });
  const raysDeco = (col, cx, cy) => (c) => { c.fillStyle = col; c.beginPath(); for (let i = 0; i < 16; i++) { const a0 = (i / 16) * TAU, a1 = a0 + TAU / 34; c.moveTo(cx, cy); c.lineTo(cx + Math.cos(a0) * 2400, cy + Math.sin(a0) * 2400); c.lineTo(cx + Math.cos(a1) * 2400, cy + Math.sin(a1) * 2400); c.closePath(); } c.fill(); };

  // tree trunk with bark grooves (w x h, native resolution)
  const trunkSpr = (w, h, seed) => cache('trunk' + w + h + seed, () => {
    const r = H.rng(seed);
    const edge = cutLines(r, [[0, 0], [w, 0], [w, h], [0, h], [0, 0]], 40, 1.2);
    return compose(w, h, [
      [(c) => { c.fillStyle = C.bark; c.beginPath(); poly(c, edge); c.fill(); }, 0],
      [(c) => { c.fillStyle = C.bark2; c.beginPath(); const gr = H.rng(seed + 1); for (let x = gr.range(10, 40); x < w - 20; x += gr.range(38, 70)) { const bw = gr.range(8, 18), pts = [], back = []; for (let y = -10; y <= h + 10; y += 40) { const wob = Math.sin(y * 0.01 + x) * 6 + gr.gauss() * 1.5; pts.push([x + wob, y]); back.unshift([x + wob + bw * (0.6 + 0.4 * Math.sin(y * 0.02 + x * 0.3)), y]); } poly(c, [...pts, ...back]); } c.fill(); }, 0.25],
      [(c) => { c.fillStyle = C.bark3; c.beginPath(); const kr = H.rng(seed + 2); for (let i = 0; i < Math.max(1, h / 700); i++) { c.ellipse(kr.range(w * 0.25, w * 0.7), kr.range(100, h - 100), kr.range(16, 26), kr.range(34, 50), 0, 0, TAU); } c.fill(); }, 0.2],
    ]);
  });
  const holeSpr = (s) => cache('hole' + s, () => paperize(80 * s, 60 * s, (c) => { c.fillStyle = C.hole; c.beginPath(); poly(c, circPts(H.rng(61), 40 * s, 30 * s, 1, 6, 0)); c.ellipse(40 * s, 30 * s, 34 * s, 22 * s, 0, 0, TAU); c.fill(); }, { seed: 62 }));
  const chipSpr = (i) => cache('chip' + i, () => paperize(40, 26, (c) => { c.fillStyle = i % 2 ? C.chip : C.wood; c.beginPath(); poly(c, cutLines(H.rng(70 + i), [[4, 6], [30 + i * 2, 3], [36, 18], [8, 22], [4, 6]], 8, 0.6)); c.fill(); }, { seed: 71 + i }));

  // ---------------- woodpecker rig ----------------
  // bird local coords: origin = feet at the trunk's right edge, bird faces left (-x) toward the trunk.
  // neck pivot at (165,-330). Sprites are painted at resolution k (k px per local unit).
  const bodySpr = (k) => cache('wbody' + k, () => {
    const T = (f) => (c) => { c.scale(k, k); c.translate(70, 470); f(c); };
    const bodyP = (c) => { c.beginPath(); c.ellipse(100, -180, 88, 175, 0.16, 0, TAU); };
    return compose(Math.ceil(330 * k), Math.ceil(700 * k), [
      [T((c) => { c.fillStyle = C.bird; c.beginPath(); poly(c, [[30, -40], [100, -30], [28, 200], [-6, 186]]); c.fill(); c.strokeStyle = C.bird; c.lineWidth = 7; c.beginPath(); c.moveTo(14, 190); c.lineTo(-4, 214); c.moveTo(22, 196); c.lineTo(12, 222); c.stroke(); }), 0],
      [T((c) => { c.strokeStyle = C.claw; c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(60, -70); c.lineTo(8, -56); c.lineTo(-6, -40); c.moveTo(62, -40); c.lineTo(10, -16); c.lineTo(-4, 2); c.stroke(); }), 0.2],
      [T((c) => { bodyP(c); c.fillStyle = C.bird; c.fill(); c.beginPath(); c.ellipse(150, -330, 52, 60, 0.3, 0, TAU); c.fill(); c.save(); bodyP(c); c.clip(); c.fillStyle = C.white; c.beginPath(); c.ellipse(52, -170, 52, 150, 0.16, 0, TAU); c.fill(); c.restore(); }), 0.4],
      [T((c) => { c.fillStyle = C.bird; c.beginPath(); c.ellipse(128, -160, 64, 150, 0.2, 0, TAU); c.fill(); c.fillStyle = C.white; const sr = H.rng(64); for (let row = 0; row < 6; row++) for (let j = 0; j < 3; j++) { c.beginPath(); c.ellipse(100 + j * 26 + row * 3 + sr.range(-3, 3), -250 + row * 34, 8, 5, 0.2, 0, TAU); c.fill(); } }), 0.5],
    ]);
  });
  const BODY_OFF = [70, 470];
  // head: pivot at sprite (200,170) in local units; head circle (180,120) r 66; beak tip at x 40
  const headSpr = (k) => cache('whead' + k, () => {
    const T = (f) => (c) => { c.scale(k, k); f(c); };
    const headP = (c) => { c.beginPath(); c.arc(180, 120, 66, 0, TAU); };
    return compose(Math.ceil(300 * k), Math.ceil(240 * k), [
      [T((c) => { c.fillStyle = C.beak; c.beginPath(); poly(c, [[130, 100], [38, 122], [36, 128], [130, 146]]); c.fill(); c.fillStyle = 'rgba(255,255,255,0.18)'; c.beginPath(); poly(c, [[130, 104], [44, 123], [130, 118]]); c.fill(); }), 0],
      [T((c) => { headP(c); c.fillStyle = C.white; c.fill(); c.save(); headP(c); c.clip(); c.fillStyle = C.bird; c.fillRect(100, 40, 160, 52); c.fillRect(150, 106, 120, 20); c.beginPath(); poly(c, [[118, 148], [250, 138], [250, 162], [130, 166]]); c.fill(); c.restore(); }), 0.4],
      [T((c) => { c.fillStyle = C.nape; c.beginPath(); poly(c, circPts(H.rng(66), 228, 76, 22, 6, 0.6)); c.fill(); }), 0.25],
      [T((c) => { c.fillStyle = C.white; c.beginPath(); c.arc(150, 112, 15, 0, TAU); c.fill(); c.fillStyle = '#1a1620'; c.beginPath(); c.arc(150, 112, 10, 0, TAU); c.fill(); c.fillStyle = C.white; c.beginPath(); c.arc(146, 108, 3.5, 0, TAU); c.fill(); }), 0.15],
    ]);
  });
  const PIV = [165, -330];
  // head pose: dx (along beak, negative = toward the trunk), rot
  const POSE_BACK = [30, 0.1], POSE_HIT = [-8, -0.05];
  const lerpPose = (u) => [H.lerp(POSE_BACK[0], POSE_HIT[0], u), H.lerp(POSE_BACK[1], POSE_HIT[1], u)];
  const drumOn = (t, list) => list.find(([a, b]) => t >= a && t < b);
  // pose for drumming / idle
  const drumPose = (t, list) => { const d = drumOn(t, list); if (!d) return [22, 0.07 + Math.sin(t * 2.2) * 0.02]; const ph = ((t - d[0]) * RATE) % 1; return lerpPose(ph < 0.5 ? ph * 2 : 2 - ph * 2); };
  // pose for impacts list (strike over 0.22 s, hold 0.12 s, recover 0.55 s)
  const impPose = (t, imps) => { let u = 0; for (const ti of imps) { if (t >= ti - 0.22 && t < ti) u = Math.max(u, H.ease.in((t - ti + 0.22) / 0.22)); else if (t >= ti && t < ti + 0.12) u = 1; else if (t >= ti + 0.12 && t < ti + 0.67) u = Math.max(u, 1 - H.ease.inOut((t - ti - 0.12) / 0.55)); } return lerpPose(u); };
  const drawHead = (ctx, k, pose, a) => { ctx.save(); ctx.translate(PIV[0] + pose[0], PIV[1]); ctx.rotate(pose[1]); if (a != null) ctx.globalAlpha *= a; ctx.scale(1 / k, 1 / k); shadowDraw(ctx, headSpr(k), -200 * k, -170 * k, 1.3, 0.45); ctx.restore(); };
  // whole bird; o.ghost = draw drumming blur ghosts
  const bird = (ctx, x, y, s, k, pose, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.save(); ctx.scale(1 / k, 1 / k); shadowDraw(ctx, bodySpr(k), -BODY_OFF[0] * k, -BODY_OFF[1] * k, 1.2, 0.45); ctx.restore();
    if (o.ghost) { drawHead(ctx, k, POSE_BACK, 0.3); drawHead(ctx, k, POSE_HIT, 0.4); }
    drawHead(ctx, k, pose);
    if (o.xray) o.xray(ctx, pose);
    ctx.restore();
  };
  const speedSpr = () => cache('speed', () => paperize(120, 14, (c) => { c.fillStyle = C.card; c.beginPath(); poly(c, [[0, 7], [120, 0], [120, 14]]); c.fill(); }, { seed: 80 }));
  const speedLines = (ctx, t) => { const j = Math.floor(t * 15) % 3; [[-10, -470], [10, -500], [-25, -440]].forEach(([dx, dy], i) => { if (i === j) return; put(ctx, speedSpr(), PIV[0] + 110 + dx, dy, { rot: -0.15 + i * 0.12, d: 0.4, a: 0.9 }); }); };
  // beak tip in bird-local coords for a pose
  const tipLocal = (pose) => { const [dx, rot] = pose, lx = -160, ly = -42; return [PIV[0] + dx + lx * Math.cos(rot) - ly * Math.sin(rot), PIV[1] + lx * Math.sin(rot) + ly * Math.cos(rot)]; };
  // flying wood chips from a contact point, one per peck while drumming
  const chips = (ctx, t, list, x, y, s) => {
    for (const [a, b] of list) {
      if (t < a || t > b + 0.8) continue;
      for (let tb = a; tb < b; tb += 1 / RATE) {
        const age = t - tb; if (age < 0 || age > 0.75) continue;
        const r = H.rng(Math.round(tb * 1000) + 7); if (r() < 0.4) continue;
        const vx = r.range(120, 420) * s, vy = r.range(-520, -160) * s, g = 1500 * s;
        put(ctx, chipSpr(r.int(0, 2)), x + vx * age, y + vy * age + 0.5 * g * age * age, { rot: r.range(-3, 3) + age * r.range(-10, 10), s: s * 0.9, d: 0.5, a: 1 - H.clamp((age - 0.5) / 0.25) });
      }
    }
  };
  const impactChips = (ctx, t, imps, x, y, s) => {
    for (const ti of imps) { const age = t - ti; if (age < 0 || age > 1.3) continue; const r = H.rng(Math.round(ti * 100));
      for (let i = 0; i < 9; i++) { const vx = r.range(80, 330) * s, vy = r.range(-380, -60) * s, g = 520 * s; put(ctx, chipSpr(i % 3), x + vx * age, y + vy * age + 0.5 * g * age * age, { rot: r.range(-3, 3) + age * r.range(-4, 4), s: s * 1.1, d: 0.6, a: 1 - H.clamp((age - 1.0) / 0.3) }); }
      const u = H.clamp(age / 0.25); if (u < 1) put(ctx, burstSpr(), x, y, { s: (0.15 + 0.35 * H.ease.out(u)) * s, a: 1 - u, d: 0.4 });
    }
  };

  // ---------------- props ----------------
  const spongeSpr = () => cache('sponge', () => compose(520, 430, [
    [(c) => { c.fillStyle = C.sponge; c.beginPath(); c.ellipse(260, 240, 250, 190, 0, Math.PI, TAU); c.lineTo(510, 330); c.quadraticCurveTo(260, 400, 10, 330); c.closePath(); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.sponge2; const r = H.rng(90); c.beginPath(); for (let i = 0; i < 26; i++) { const a = r.range(Math.PI * 1.05, TAU - 0.05), rr = r.range(40, 210); c.moveTo(260 + Math.cos(a) * rr * 1.2 + 14, 250 + Math.sin(a) * rr * 0.85); c.ellipse(260 + Math.cos(a) * rr * 1.2, 250 + Math.sin(a) * rr * 0.85, r.range(7, 15), r.range(6, 12), 0, 0, TAU); } c.fill(); }, 0.15],
  ]));
  const hammerSpr = () => cache('hammer', () => compose(240, 330, [
    [(c) => { c.fillStyle = C.wood; c.beginPath(); poly(c, cutLines(H.rng(91), [[104, 90], [136, 90], [140, 320], [100, 320], [104, 90]], 30, 0.6)); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.steel; c.beginPath(); poly(c, cutLines(H.rng(92), [[14, 20], [226, 20], [226, 100], [14, 100], [14, 20]], 30, 0.6)); c.fill(); c.fillStyle = 'rgba(255,255,255,0.25)'; c.fillRect(20, 28, 200, 14); }, 0.4],
  ]));
  const malletSpr = () => cache('mallet', () => compose(240, 330, [
    [(c) => { c.fillStyle = C.wood; c.beginPath(); poly(c, cutLines(H.rng(93), [[104, 100], [136, 100], [140, 320], [100, 320], [104, 100]], 30, 0.6)); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.sponge; c.beginPath(); c.ellipse(120, 64, 112, 58, 0, 0, TAU); c.fill(); c.fillStyle = C.sponge2; const r = H.rng(94); c.beginPath(); for (let i = 0; i < 9; i++) c.ellipse(r.range(40, 200), r.range(34, 96), r.range(5, 10), r.range(4, 8), 0, 0, TAU); c.fill(); }, 0.4],
  ]));
  const watchSpr = () => cache('watch', () => compose(300, 340, [
    [(c) => { c.fillStyle = C.ink; c.fillRect(126, 4, 48, 34); c.fillRect(150, 26, 0, 0); c.beginPath(); c.arc(150, 190, 140, 0, TAU); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.card; c.beginPath(); c.arc(150, 190, 118, 0, TAU); c.fill(); c.fillStyle = C.ink; for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; c.save(); c.translate(150 + Math.cos(a) * 98, 190 + Math.sin(a) * 98); c.rotate(a); c.fillRect(-10, -4, 20, 8); c.restore(); } }, 0.3],
  ]));
  const handSpr = () => cache('hand', () => paperize(30, 120, (c) => { c.fillStyle = C.red; c.beginPath(); poly(c, [[15, 0], [26, 104], [15, 118], [4, 104]]); c.fill(); }, { seed: 95 }));
  const brainSprN = (w, h, seed) => cache('brain' + w + h, () => compose(w + 20, h + 20, [
    [(c) => { c.fillStyle = C.brain; c.beginPath(); c.ellipse(10 + w / 2, 10 + h / 2, w / 2, h / 2, 0, 0, TAU); c.fill(); }, 0],
    [(c) => { const s = w / 170; c.strokeStyle = C.brain2; c.lineWidth = Math.max(2.5, 7 * s); c.lineCap = 'round'; c.beginPath(); const r = H.rng(seed); for (let i = 0; i < 7; i++) { const x = 10 + w * r.range(0.18, 0.82), y = 10 + h * r.range(0.22, 0.78), l = w * r.range(0.08, 0.16); c.moveTo(x - l, y); c.quadraticCurveTo(x, y - l * 0.9, x + l, y + l * 0.2); } c.stroke(); }, 0.15],
  ]));
  const shellSpr = (rx, ry, th) => cache('shell' + rx + ry, () => paperize(rx * 2 + 20, ry * 2 + 20, (c) => { c.fillStyle = C.bone; c.beginPath(); c.ellipse(rx + 10, ry + 10, rx, ry, 0, 0, TAU); c.ellipse(rx + 10, ry + 10, rx - th, ry - th, 0, 0, TAU); c.fill('evenodd'); }, { seed: 96 + rx }));
  // x-ray skull cut-away inside the head (head-local coords)
  const skullCut = (ctx, k, a) => { if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.translate(188, 118); ctx.scale(0.78 / k, 0.78 / k);
    const S = cache('skull' + k, () => compose(Math.ceil(140 * k), Math.ceil(130 * k), [
      [(c) => { c.scale(k, k); c.fillStyle = C.bone; c.beginPath(); c.ellipse(70, 64, 60, 56, 0, 0, TAU); c.fill(); c.beginPath(); poly(c, [[16, 50], [-40, 60], [-40, 76], [16, 84]]); c.fill(); }, 0],
      [(c) => { c.scale(k, k); c.fillStyle = C.brain; c.beginPath(); c.ellipse(78, 62, 42, 38, 0, 0, TAU); c.fill(); c.strokeStyle = C.brain2; c.lineWidth = 3; c.lineCap = 'round'; c.beginPath(); [[56, 50, 76, 44], [80, 70, 100, 62], [60, 78, 80, 84], [86, 40, 104, 48]].forEach(([a1, b1, a2, b2]) => { c.moveTo(a1, b1); c.quadraticCurveTo((a1 + a2) / 2, b1 - 8, a2, b2); }); c.stroke(); }, 0.3],
    ]));
    shadowDraw(ctx, S, -70 * k, -64 * k, 0.6, 0.35); ctx.restore(); };
  const bubbleSpr = () => cache('bubble', () => compose(440, 300, [
    [(c) => { c.fillStyle = C.card; c.beginPath(); c.ellipse(220, 130, 205, 120, 0, 0, TAU); c.moveTo(110, 220); c.lineTo(70, 296); c.lineTo(180, 240); c.fill(); }, 0],
  ]));
  const strokeStrip = (ctx, pts, p, col, lw, seed) => {
    if (p <= 0) return; const n = Math.max(2, Math.round(pts.length * p)), sub = pts.slice(0, n);
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; sub.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
    x0 -= lw; y0 -= lw; x1 += lw; y1 += lw;
    const L = paperize(x1 - x0, y1 - y0, (c) => { c.translate(-x0, -y0); c.strokeStyle = col; c.lineWidth = lw; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); sub.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke(); }, { seed });
    shadowDraw(ctx, L, x0, y0, 0.7);
  };
  // smooth hyoid path around the skull (head-local coords), sampled densely
  const HYOID = (() => { const K = [[52, 128], [100, 146], [150, 176], [208, 174], [242, 136], [242, 86], [210, 60], [162, 60], [134, 78], [126, 100]], out = [];
    for (let i = 0; i < K.length - 1; i++) { const p0 = K[Math.max(0, i - 1)], p1 = K[i], p2 = K[i + 1], p3 = K[Math.min(K.length - 1, i + 2)];
      for (let j = 0; j < 12; j++) { const u = j / 12, u2 = u * u, u3 = u2 * u; out.push([0, 1].map((d) => 0.5 * (2 * p1[d] + (-p0[d] + p2[d]) * u + (2 * p0[d] - 5 * p1[d] + 4 * p2[d] - p3[d]) * u2 + (-p0[d] + 3 * p1[d] - 3 * p2[d] + p3[d]) * u3))); } }
    out.push(K[K.length - 1]); return out; })();

  // corner header tag (pinned question), right side, below the top UI zone
  function header(ctx, t) {
    const A = dropIn(t, CUT2 + 0.25, 0.4, 60);
    if (A && t < CUT6) put(ctx, wordSpr('No headaches?', 44, C.cream, C.coral, 12), 800, 215 + A.dy, { rot: 0.03, d: 1 + A.d });
  }

  // ================= forest diorama (scenes 1 and 6) =================
  const BX = 600, BY = 1170, BS = 1.35, BK = 1.5;
  function forest(ctx, t, cam, drums) {
    ctx.drawImage(skySpr('forest', C.sky, 860, 420, '#eef6ee'), 0, 0);
    ctx.save(); ctx.translate(540, 1100); ctx.scale(cam.s, cam.s); ctx.translate(-540 + cam.x, -1100);
    // parallax layers
    ctx.save(); ctx.translate(-cam.x * 0.6, 0);
    shadowDraw(ctx, hillsSpr(5, C.far, 60), -260, 980, 1.0);
    shadowDraw(ctx, pineRow(9, 1700, C.pine, C.pine2), -300, 860, 0.9);
    shadowDraw(ctx, hillsSpr(8, C.mid, 40), -300, 1180, 1.1);
    ctx.restore();
    shadowDraw(ctx, trunkSpr(330, 2300, 3), BX - 330, -200, 1.4);
    const pose = drumPose(t, drums), tip = tipLocal(pose);
    put(ctx, holeSpr(1), BX - 18, BY + (tip[1] + 4) * BS, { d: 0.2 });
    bird(ctx, BX, BY, BS, BK, pose, { ghost: !!drumOn(t, drums), t });
    chips(ctx, t, drums, BX + 4, BY + tip[1] * BS, 1.1);
    shadowDraw(ctx, groundSpr(1500, C.grass, 21), -200, 1540, 1.3);
    ctx.restore();
  }

  // ================= SCENE 1: the hook =================
  function sceneHook(ctx, t) {
    forest(ctx, t, { s: 1 + 0.06 * seg(t, 0, 7.5), x: 0 }, DRUM1);
    tile(ctx, t, P(0, 'twenty') - 0.12, '20', 190, C.ink, 400, 470);
    tag(ctx, t, P(0, 'second') - 0.12, '/SEC', 100, C.red, 690, 490, { back: C.cream, bw: 16, rot: 0.04, d: 1.1 });
    alpha(ctx, fadeOut(t, P(2, 'so') - 0.3), () => {
      tag(ctx, t, P(1, 'out') - 0.12, 'YOU: OUT COLD', 84, C.ink, 540, 1500, { back: C.cream, bw: 16, rot: -0.03, d: 1.1 });
      const K = dropIn(t, P(1, 'cold') - 0.08, 0.3, 40); if (K) put(ctx, crossSpr(), 900, 1390 + K.dy, { s: K.s * 0.8, d: 1 + K.d });
    });
    popRing(ctx, t, P(2, 'headaches') - 0.15, 540, 1500, 1.25);
    bigWord(ctx, t, P(2, 'headaches') - 0.12, 'HEADACHES?', 104, C.coral, 540, 1500, { rot: -0.03 });
  }

  // ================= SCENE 2: slow-motion strike =================
  const S2 = { s: 2.6, k: 2.8, x: 360, y: 1990 };
  function sceneSlow(ctx, t) {
    ctx.drawImage(cardBg('slow', '#bcd9c4', raysDeco('rgba(255,255,255,0.22)', 300, 900)), 0, 0);
    const drift = 10 * seg(t, CUT2, CUT3);
    shadowDraw(ctx, trunkSpr(560, 1920, 11), S2.x - 560, 0, 1.4);
    const pose = impPose(t, IMP2), tip = tipLocal(pose);
    put(ctx, holeSpr(2.4), S2.x - 30, S2.y + (tip[1] + 2) * S2.s, { d: 0.2 });
    bird(ctx, S2.x + drift, S2.y, S2.s, S2.k, pose);
    impactChips(ctx, t, IMP2, S2.x + 10, S2.y + tip[1] * S2.s, 1.6);
    // stopwatch
    const WA = dropIn(t, P(3, 'each') - 0.1, 0.4, 80);
    if (WA) { const wx = 250, wy = 560 + WA.dy; put(ctx, watchSpr(), wx, wy, { s: WA.s * 0.95, d: 1 + WA.d }); put(ctx, handSpr(), wx, wy + 30, { rot: (t - P(3, 'each')) * 0.35, oy: -45, d: 0.4 }); }
    tile(ctx, t, P(4, 'thousandth') - 0.12, '1/1000', 120, C.ink, 680, 470);
    tag(ctx, t, P(4, 'second') - 0.12, 'SEC', 84, C.red, 860, 610, { back: C.cream, bw: 14, rot: 0.04 });
    popRing(ctx, t, P(5, 'thousand') - 0.2, 600, 1440, 1.05, burstSpr());
    tile(ctx, t, P(5, 'thousand') - 0.12, '1,000', 150, C.ink, 500, 1430);
    tag(ctx, t, P(5, 'g') - 0.12, 'G', 130, C.red, 860, 1440, { back: C.cream, bw: 16, rot: 0.05, d: 1.2 });
  }

  // ================= big head (scenes 3 and 5) =================
  const HS = 3.1, HK = 3.2;
  // head drawn alone: pivot world (hx, hy), beak to the left
  const bigHead = (ctx, hx, hy, pose, xray, extra) => {
    ctx.save(); ctx.translate(hx, hy); ctx.scale(HS, HS); ctx.translate(-PIV[0], -PIV[1]);
    // neck/shoulder stub so the head is not floating
    ctx.save(); ctx.scale(1 / HK, 1 / HK); shadowDraw(ctx, bodySpr(HK), -BODY_OFF[0] * HK, -BODY_OFF[1] * HK, 1.2, 0.45); ctx.restore();
    drawHead(ctx, HK, pose);
    ctx.save(); ctx.translate(PIV[0] + pose[0], PIV[1]); ctx.rotate(pose[1]); ctx.translate(-200, -170);
    skullCut(ctx, HK, xray); if (extra) extra(ctx);
    ctx.restore(); ctx.restore();
  };
  const HX = 690, HY = 1080;

  // ================= SCENE 3: crash helmet? no, a stiff hammer =================
  function sceneHammer(ctx, t) {
    ctx.drawImage(cardBg('ham', '#f2dcb4', raysDeco('rgba(255,250,235,0.35)', 560, 860)), 0, 0);
    shadowDraw(ctx, trunkSpr(200, 1920, 17), -40, 0, 1.3);
    const pose = impPose(t, IMP3), tip = tipLocal(pose);
    bigHead(ctx, HX, HY, pose, H.smooth(P(6, 'skull') - 0.2, P(6, 'skull') + 0.3, t));
    impactChips(ctx, t, IMP3, 170, HY + (tip[1] - PIV[1]) * HS, 1.4);
    // sponge helmet: drops on, gets crossed, flies off
    const SA = dropIn(t, P(7, 'spongy') - 0.15, 0.45, 160), off = H.ease.in(H.clamp((t - P(9, 'anything') - 0.25) / 0.5));
    const hc = [HX + (180 - 200 + 30) * HS, HY + (120 - 170 - 70) * HS];
    if (SA && off < 1) put(ctx, spongeSpr(), hc[0] + off * 700, hc[1] + SA.dy - 40 + off * 500, { s: SA.s * 0.95, rot: off * 1.2, d: 1.2 + SA.d });
    alpha(ctx, fadeOut(t, P(9, 'anything') + 0.2), () => tag(ctx, t, P(7, 'helmet') - 0.12, 'CRASH HELMET?', 80, C.ink, 540, 1500, { back: C.cream, bw: 16, rot: -0.03, d: 1.1 }));
    const XA = dropIn(t, P(9, 'barely') - 0.1, 0.3, 40); if (XA && off < 1) put(ctx, crossSpr(), hc[0] + 150 + off * 700, hc[1] - 120 + off * 500, { s: XA.s, d: 1 + XA.d });
    alpha(ctx, fadeOut(t, P(10, 'its') - 0.3), () => {
      tile(ctx, t, P(8, '2022') - 0.12, '2022', 150, C.ink, 420, 470);
      tag(ctx, t, P(8, 'slowmotion') - 0.12, 'SLOW-MO', 76, C.red, 520, 610, { back: C.cream, bw: 14, rot: 0.03 });
    });
    tag(ctx, t, P(10, 'stiff') - 0.12, 'STIFF HAMMER', 92, C.ink, 540, 470, { back: C.cream, bw: 16, rot: -0.02, d: 1.1 });
    const HA = dropIn(t, P(10, 'hammer') - 0.12, 0.4, 90); if (HA) put(ctx, hammerSpr(), 850, 1420 + HA.dy, { s: HA.s * 0.9, rot: 0.25, d: 1 + HA.d });
    const KA = dropIn(t, P(10, 'hammer') + 0.1, 0.3, 40); if (KA) put(ctx, checkSpr(), 960, 1250 + KA.dy, { s: KA.s * 0.8, d: 1 + KA.d });
    const MA = dropIn(t, P(11, 'soft') - 0.12, 0.4, 90); if (MA) { const sq = 1 + 0.12 * Math.sin(Math.max(0, t - P(11, 'soft')) * 9) * Math.exp(-Math.max(0, t - P(11, 'soft')) * 1.5); put(ctx, malletSpr(), 300, 1400 + MA.dy, { sx: MA.s * 0.85 * sq, sy: MA.s * 0.85 / sq, rot: -0.25, d: 1 + MA.d }); }
    tag(ctx, t, P(11, 'weaker') - 0.12, 'WEAKER', 70, C.red, 300, 1590, { back: C.cream, bw: 14, rot: 0.04 });
  }

  // ================= SCENE 4: the real trick is size =================
  const HB = [330, 980], WB = [800, 1010];
  function sceneSize(ctx, t) {
    ctx.drawImage(cardBg('size', '#cfdcef', (c) => { c.fillStyle = 'rgba(255,255,255,0.3)'; c.fillRect(0, 1240, W0, 40); }), 0, 0);
    popRing(ctx, t, P(12, 'size') - 0.18, 540, 480, 1.1);
    bigWord(ctx, t, P(12, 'size') - 0.12, 'SIZE', 140, C.coral, 540, 480);
    const shellIn = dropIn(t, P(14, 'packed') - 0.12, 0.45, 120);
    const slosh = t > P(14, 'sloshes') - 0.15 ? Math.sin((t - P(14, 'sloshes')) * 7.5) * 34 : 0;
    const HA = dropIn(t, P(13, 'brain') - 0.12, 0.4, 90);
    if (HA) { put(ctx, brainSprN(330, 230, 5), HB[0] + slosh, HB[1] + HA.dy, { s: HA.s, d: 1 + HA.d }); tag(ctx, t, P(13, 'brain') + 0.05, 'YOU', 80, C.ink, HB[0], 1170, { back: C.cream, bw: 14, rot: -0.03 }); }
    const s2 = 1 + 0.35 * H.ease.back(H.clamp((t - P(15, 'tiny') + 0.1) / 0.4));
    const WA = dropIn(t, P(13, 'woodpeckers') - 0.1, 0.4, 90);
    if (WA) { ctx.save(); ctx.translate(WB[0], WB[1]); ctx.scale(s2, s2); put(ctx, brainSprN(96, 70, 9), 0, WA.dy, { s: WA.s, d: 0.8 + WA.d }); if (shellIn) put(ctx, shellSpr(64, 50, 14), 0, shellIn.dy, { s: shellIn.s, d: 1 + shellIn.d }); ctx.restore();
      if (!shellIn) arrow(ctx, WB[0] + 170, WB[1] - 260, WB[0] + 160, WB[1] - 100, WB[0] + 55, WB[1] - 40, seg(t, P(13, 'woodpeckers'), P(13, 'woodpeckers') + 0.4), C.coral, 77, 16); }
    if (shellIn && HA) put(ctx, shellSpr(230, 180, 26), HB[0], HB[1] + shellIn.dy, { s: shellIn.s, d: 1 + shellIn.d });
    alpha(ctx, fadeOut(t, P(14, 'packed') - 0.2), () => tag(ctx, t, P(13, 'grams') - 0.12, 'A FEW GRAMS', 60, C.ink, WB[0] - 10, 1170, { back: C.cream, bw: 12, rot: 0.03 }));
    tag(ctx, t, P(14, 'snugly') - 0.12, 'SNUG', 76, C.teal, WB[0], 1170, { back: C.cream, bw: 14, rot: 0.03 });
    tag(ctx, t, P(14, 'sloshes') - 0.12, 'SLOSH', 70, C.red, HB[0], 720, { back: C.cream, bw: 12, rot: -0.04 });
    tag(ctx, t, P(15, 'handle') - 0.12, 'TINY = TOUGHER', 84, C.ink, 540, 1450, { back: C.cream, bw: 16, rot: -0.02, d: 1.1 });
    const KA = dropIn(t, P(15, 'bigger') - 0.1, 0.3, 40); if (KA) put(ctx, checkSpr(), WB[0] + 120, WB[1] - 170 + KA.dy, { s: KA.s * 0.75, d: 1 + KA.d });
  }

  // ================= SCENE 5: the tongue bone =================
  function sceneTongue(ctx, t) {
    ctx.drawImage(cardBg('tongue', '#e8d4ea', raysDeco('rgba(255,255,255,0.25)', 690, 760)), 0, 0);
    const p = seg(t, P(16, 'tongue') - 0.1, P(17, 'skull') + 0.1);
    const settle = H.clamp((t - P(18, 'steady')) / 0.4), wob = t < P(18, 'help') ? 0 : Math.sin(t * 16) * 0.03 * (1 - settle);
    const pose = [22 + Math.sin(t * 2) * 2, 0.06 + wob];
    bigHead(ctx, HX, HY, pose, 1, (c) => {
      if (p <= 0) return;
      c.save(); c.scale(1 / HK, 1 / HK); strokeStrip(c, HYOID.map(([x, y]) => [x * HK, y * HK]), p, C.teal, 9 * HK, 333); c.restore();
    });
    tag(ctx, t, P(16, 'tongue') - 0.12, 'TONGUE BONE', 90, C.teal, 540, 470, { back: C.cream, bw: 16, rot: -0.03, d: 1.1 });
    const wr = seg(t, P(17, 'wraps') - 0.1, P(17, 'skull'));
    if (wr > 0) arrow(ctx, 980, 1250, 1060, 900, 990, 640, wr, C.coral, 99, 18);
    tag(ctx, t, P(17, 'around') - 0.12, 'ALL AROUND', 64, C.coral, 700, 610, { back: C.cream, bw: 12, rot: 0.04 });
    tag(ctx, t, P(18, 'steady') - 0.12, 'STEADY?', 96, C.ink, 480, 1530, { back: C.cream, bw: 16, rot: -0.03, d: 1.1 });
  }

  // ================= SCENE 6: 12,000 a day, and the question =================
  function sceneEnd(ctx, t) {
    forest(ctx, t, { s: 1.06 - 0.05 * seg(t, CUT6, DURATION), x: 30 * (1 - seg(t, CUT6, CUT6 + 2)) }, DRUM6);
    alpha(ctx, fadeOut(t, P(21, 'so') - 0.2), () => {
      const cu = seg(t, P(19, 'twelve') - 0.1, P(19, 'pecks')), CA = dropIn(t, P(19, 'twelve') - 0.12, 0.4, 70);
      if (CA) { const str = fmt(Math.round(12000 * cu / 100) * 100), w = rowWidth(str, 140); numberRow(ctx, str, 540 - w / 2, 450 + CA.dy, 140, C.ink, { d: 1 + CA.d }); }
      tag(ctx, t, P(19, 'pecks') - 0.12, 'PECKS / DAY', 80, C.red, 540, 610, { back: C.cream, bw: 14, rot: 0.03 });
      tile(ctx, t, P(20, 'not') - 0.12, '0', 150, C.coral, 250, 1490);
      tag(ctx, t, P(20, 'headache') - 0.12, 'HEADACHES', 84, C.ink, 640, 1500, { back: C.cream, bw: 16, rot: -0.02 });
      const KA = dropIn(t, P(20, 'headache') + 0.15, 0.3, 40); if (KA) put(ctx, checkSpr(), 930, 1360 + KA.dy, { s: KA.s * 0.75, d: 1 + KA.d });
    });
    popRing(ctx, t, P(21, 'you') - 0.15, 540, 1490, 1.0);
    bigWord(ctx, t, P(21, 'you') - 0.12, 'YOU?', 130, C.coral, 540, 1490);
    tile(ctx, t, P(22, 'twenty') - 0.12, '20', 190, C.ink, 400, 470);
    tag(ctx, t, P(22, 'second') - 0.12, '/SEC', 100, C.red, 690, 490, { back: C.cream, bw: 16, rot: 0.04, d: 1.1 });
    const BA = dropIn(t, PH[22].e - 0.05, 0.35, 60);
    if (BA) { put(ctx, bubbleSpr(), 820, 1250 + BA.dy, { s: BA.s * 0.6, d: 1 + BA.d }); tag(ctx, t, PH[22].e + 0.1, 'COMMENT!', 46, C.ink, 820, 1240, { rot: -0.04 }); }
  }
  const fmt = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  function slideIn(ctx, t, cut, from, drawOld, drawNew, dir = 'up') {
    const u = H.ease.inOut(H.clamp((t - cut) / SLIDE));
    if (u <= 0) { drawOld(ctx, t); return; }
    if (u >= 1) { drawNew(ctx, t); return; }
    drawOld(ctx, t);
    const L = PK.slideL || (PK.slideL = H.layer(W0, H0)), c = L.getContext('2d');
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, W0, H0); drawNew(c, t);
    ctx.save(); ctx.shadowColor = 'rgba(10,6,24,0.55)'; ctx.shadowBlur = 40;
    if (dir === 'up') { ctx.shadowOffsetY = -18; ctx.drawImage(L, 0, (1 - u) * H0); } else { ctx.shadowOffsetX = -18; ctx.drawImage(L, (1 - u) * W0, 0); }
    ctx.restore();
  }
  function explainer(ctx, W, H_, t) {
    ctx.save(); ctx.scale(W / W0, H_ / H0);
    if (t < CUT2 + SLIDE) slideIn(ctx, t, CUT2, 0, sceneHook, sceneSlow, 'right');
    else if (t < CUT3 + SLIDE) slideIn(ctx, t, CUT3, 0, sceneSlow, sceneHammer, 'up');
    else if (t < CUT4 + SLIDE) slideIn(ctx, t, CUT4, 0, sceneHammer, sceneSize, 'right');
    else if (t < CUT5 + SLIDE) slideIn(ctx, t, CUT5, 0, sceneSize, sceneTongue, 'up');
    else slideIn(ctx, t, CUT6, 0, sceneTongue, sceneEnd, 'right');
    header(ctx, t);
    finish(ctx, t);
    ctx.restore();
  }

  // ================= sound =================
  function scoreSound(k) {
    const LAND = 1 - 1.70158 / 2.70158, land = (st, du) => st + LAND * du;
    const card = (t, g = 1, p = 0, f = 1, minor = true) => {
      k.noise(t, { dur: 0.045, filter: 'bandpass', f: 1100 * f, q: 0.9, gain: 0.26 * g, a: 0.001, pan: p, minor });
      k.noise(t, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 650, gain: 0.3 * g, a: 0.002, pan: p, minor });
      k.tone(t, { f: [[0, 160 * f], [0.07, 85]], dur: 0.09, gain: 0.16 * g, pan: p, minor });
    };
    const layer = (t, d, g = 1) => {
      k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 260], [d * 0.5, 620], [d, 300]], q: 0.6, gain: 0.16 * g, a: d * 0.45, pan: 0.15 });
      k.noise(t + 0.05, { dur: d, color: 'brown', filter: 'lowpass', f: 380, gain: 0.14 * g, a: d * 0.5, pan: -0.15 });
    };
    const tagLand = (st, g = 0.6, p = 0, du = 0.35) => card(land(st, du), g, p, 1.2);
    const tileLand = (st, n, g = 0.6, p = 0) => { for (let i = 0; i < n; i++) card(land(st, 0.4) + i * 0.035, g * 0.8, p + (i - n / 2) * 0.08, 1.3); };
    // woodpecker drum: one woody knock per peck, minor
    const knock = (t, g = 1, p = -0.2) => { k.noise(t, { dur: 0.03, filter: 'bandpass', f: 900, q: 2.5, gain: 0.34 * g, a: 0.001, pan: p, minor: true }); k.tone(t, { f: [[0, 420], [0.03, 260]], dur: 0.04, gain: 0.12 * g, pan: p, minor: true }); };
    const drum = (list) => list.forEach(([a, b]) => { for (let tb = a; tb < b; tb += 1 / RATE) knock(tb + 0.025, 0.8 + 0.2 * Math.sin(tb * 37)); });
    const bigHit = (t, g = 1) => { k.play('impact', t, { gain: 0.9 * g }); k.play('thud', t, { gain: 0.6 * g, f: 110 }); k.noise(t, { dur: 0.08, filter: 'bandpass', f: 700, q: 2, gain: 0.4 * g, a: 0.001 }); };

    // SCENE 1
    drum(DRUM1);
    tileLand(P(0, 'twenty') - 0.12, 2, 0.8);
    tagLand(P(0, 'second') - 0.12, 0.7, 0.3);
    tagLand(P(1, 'out') - 0.12, 0.7);
    k.play('error', P(1, 'cold') + 0.05, { gain: 0.4, pan: 0.4 });
    k.play('pop', P(2, 'headaches') - 0.06, { gain: 0.9, f: 520 });
    // scene change
    layer(CUT2, SLIDE + 0.1); k.play('whoosh', CUT2, { dur: SLIDE, gain: 0.45 });
    // SCENE 2 (slow motion)
    k.play('riser', PH[3].s - 0.2, { dur: 0.5, gain: 0.3 });
    tagLand(P(3, 'each') - 0.1, 0.6, -0.4, 0.4);
    for (let i = 0; i < 16; i++) k.play('click', P(3, 'each') + 0.3 + i * 0.36, { gain: 0.25, minor: true, pan: -0.5 }); // stopwatch tick
    IMP2.forEach((ti, i) => bigHit(ti, 0.8 + i * 0.15));
    tileLand(P(4, 'thousandth') - 0.12, 6, 0.6);
    tagLand(P(4, 'second') - 0.12, 0.6, 0.4);
    k.play('stamp', land(P(5, 'thousand') - 0.12, 0.4), { gain: 0.9 });
    tagLand(P(5, 'g') - 0.12, 0.8, 0.4);
    layer(CUT3, SLIDE + 0.1); k.play('whoosh', CUT3, { dur: SLIDE, gain: 0.45 });
    // SCENE 3
    k.play('paper', P(6, 'skull') - 0.2, { dur: 0.5, gain: 0.4 });
    k.noise(land(P(7, 'spongy') - 0.15, 0.45), { dur: 0.25, color: 'pink', filter: 'lowpass', f: 500, gain: 0.35 }); // soft sponge flop
    tagLand(P(7, 'helmet') - 0.12, 0.7);
    tileLand(P(8, '2022') - 0.12, 4, 0.6);
    tagLand(P(8, 'slowmotion') - 0.12, 0.6, 0.3);
    k.play('error', P(9, 'barely') + 0.05, { gain: 0.5 });
    k.play('whoosh', P(9, 'anything') + 0.25, { dur: 0.5, gain: 0.5, pan: 0.5 });
    tagLand(P(10, 'stiff') - 0.12, 0.7);
    IMP3.forEach((ti) => bigHit(ti, 0.9));
    k.play('slap', land(P(10, 'hammer') - 0.12, 0.4), { gain: 0.6, pan: 0.4 });
    k.play('success', P(10, 'hammer') + 0.2, { f: 'E5', gain: 0.45, pan: 0.4 });
    k.noise(land(P(11, 'soft') - 0.12, 0.4), { dur: 0.3, color: 'pink', filter: 'lowpass', f: 420, gain: 0.35, pan: -0.4 }); // squish
    tagLand(P(11, 'weaker') - 0.12, 0.6, -0.4);
    layer(CUT4, SLIDE + 0.1); k.play('whoosh', CUT4, { dur: SLIDE, gain: 0.45 });
    // SCENE 4
    k.play('pop', P(12, 'size') - 0.08, { gain: 1.0, f: 440 });
    k.play('sparkle', P(12, 'size'), { gain: 0.4, n: 4 });
    tagLand(P(13, 'woodpeckers') - 0.1, 0.5, 0.4, 0.4);
    tagLand(P(13, 'brain') - 0.12, 0.7, -0.4, 0.4);
    tagLand(P(13, 'grams') - 0.12, 0.6, 0.4);
    k.play('impact', land(P(14, 'packed') - 0.12, 0.45), { gain: 0.6 });
    tagLand(P(14, 'snugly') - 0.12, 0.6, 0.4);
    k.noise(P(14, 'sloshes') - 0.1, { dur: 1.4, color: 'brown', filter: 'lowpass', f: [[0, 300], [0.4, 700], [0.8, 300], [1.4, 600]], q: 2, gain: 0.25, a: 0.1, pan: -0.4 }); // slosh
    tagLand(P(14, 'sloshes') - 0.12, 0.5, -0.4);
    k.play('pop', P(15, 'tiny') - 0.08, { gain: 0.6, f: 780, pan: 0.4 });
    tagLand(P(15, 'handle') - 0.12, 0.7);
    k.play('success', P(15, 'bigger') + 0.05, { f: 'G5', gain: 0.5, pan: 0.4 });
    layer(CUT5, SLIDE + 0.1); k.play('whoosh', CUT5, { dur: SLIDE, gain: 0.45 });
    // SCENE 5
    tagLand(P(16, 'tongue') - 0.12, 0.7);
    k.noise(P(16, 'tongue') - 0.1, { dur: P(17, 'skull') - P(16, 'tongue') + 0.2, filter: 'bandpass', f: [[0, 700], [1.5, 1400], [3, 900]], q: 0.8, gain: 0.12, a: 0.2, minor: true }); // paper strip sliding
    k.play('riser', P(17, 'wraps') - 0.1, { dur: P(17, 'skull') - P(17, 'wraps') + 0.2, gain: 0.4 });
    tagLand(P(17, 'around') - 0.12, 0.6, 0.4);
    k.play('ding', P(17, 'skull') + 0.1, { f: 'C5', gain: 0.35 });
    tagLand(P(18, 'steady') - 0.12, 0.7, -0.2);
    layer(CUT6, SLIDE + 0.1); k.play('whoosh', CUT6, { dur: SLIDE, gain: 0.45 });
    // SCENE 6
    drum(DRUM6);
    for (let i = 0; i < 10; i++) k.play('click', P(19, 'twelve') + i * ((P(19, 'pecks') - P(19, 'twelve') + 0.1) / 10), { gain: 0.3, minor: true }); // counter roll
    k.play('stamp', P(19, 'pecks'), { gain: 0.7 });
    tagLand(P(19, 'pecks') - 0.12, 0.6, 0.3);
    tileLand(P(20, 'not') - 0.12, 1, 0.8, -0.4);
    tagLand(P(20, 'headache') - 0.12, 0.7);
    k.play('success', P(20, 'headache') + 0.2, { f: 'C6', gain: 0.5, pan: 0.4 });
    k.play('pop', P(21, 'you') - 0.06, { gain: 0.9, f: 480 });
    tileLand(P(22, 'twenty') - 0.12, 2, 0.8);
    tagLand(P(22, 'second') - 0.12, 0.7, 0.3);
    k.play('pop', PH[22].e - 0.02, { gain: 0.7, f: 700, pan: 0.4 });
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PH[22].e + 0.15 + i * 0.09, { f, gain: 0.42 - i * 0.04, pan: (i - 1) * 0.25 }));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
