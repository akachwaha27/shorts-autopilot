// ================= Cut-Paper Diorama, vertical 1080x1920: "Why do polar bears have black skin under white fur?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":1.67,"text":"If you shaved a polar bear,","words":[["if",0.25],["you",0.39],["shaved",0.59],["a",0.99],["polar",1.06],["bear",1.4]]},{"s":2.0,"e":3.29,"text":"you'd find black skin.","words":[["youd",2.0],["find",2.3],["black",2.61],["skin",2.98]]},{"s":3.75,"e":5.64,"text":"And zero white hairs. Why?","words":[["and",3.75],["zero",4.04],["white",4.41],["hairs",4.88],["why",5.35]]},{"s":6.08,"e":7.11,"text":"Each hair is clear,","words":[["each",6.08],["hair",6.35],["is",6.63],["clear",6.77]]},{"s":7.58,"e":8.99,"text":"like a tiny plastic straw","words":[["like",7.58],["a",7.85],["tiny",7.92],["plastic",8.18],["straw",8.66]]},{"s":8.99,"e":10.93,"text":"with a hollow core full of air.","words":[["with",8.99],["a",9.32],["hollow",9.4],["core",9.88],["full",10.2],["of",10.53],["air",10.69]]},{"s":11.41,"e":12.99,"text":"There's no white pigment in it.","words":[["theres",11.41],["no",11.8],["white",11.94],["pigment",12.27],["in",12.73],["it",12.86]]},{"s":13.39,"e":14.92,"text":"So why does it look white?","words":[["so",13.39],["why",13.55],["does",13.77],["it",14.08],["look",14.23],["white",14.54]]},{"s":15.37,"e":18.35,"text":"Light bounces around inside those clear hairs","words":[["light",15.37],["bounces",15.76],["around",16.29],["inside",16.75],["those",17.21],["clear",17.59],["hairs",17.97]]},{"s":18.41,"e":19.69,"text":"and scatters in every direction,","words":[["and",18.41],["scatters",18.56],["in",18.94],["every",19.03],["direction",19.27]]},{"s":20.3,"e":22.61,"text":"the same trick that makes snow look white.","words":[["the",20.3],["same",20.51],["trick",20.78],["that",21.12],["makes",21.39],["snow",21.73],["look",22.0],["white",22.27]]},{"s":23.03,"e":26.14,"text":"Scientists once thought the hairs piped sunlight","words":[["scientists",23.03],["once",23.77],["thought",24.07],["the",24.58],["hairs",24.81],["piped",25.18],["sunlight",25.55]]},{"s":26.2,"e":28.07,"text":"down to the skin like fiber optics.","words":[["down",26.2],["to",26.47],["the",26.6],["skin",26.8],["like",27.07],["fiber",27.33],["optics",27.67]]},{"s":28.42,"e":29.67,"text":"Turns out they don't.","words":[["turns",28.42],["out",28.81],["they",29.04],["dont",29.36]]},{"s":29.97,"e":32.18,"text":"Most sunlight never reaches the skin.","words":[["most",29.97],["sunlight",30.25],["never",30.82],["reaches",31.18],["the",31.68],["skin",31.89]]},{"s":32.59,"e":36.78,"text":"The black skin may soak up what little warmth gets through,","words":[["the",32.59],["black",32.85],["skin",33.29],["may",33.64],["soak",33.9],["up",34.25],["what",34.42],["little",34.77],["warmth",35.29],["gets",35.82],["through",36.17]]},{"s":36.89,"e":38.77,"text":"but the real heater is underneath:","words":[["but",36.89],["the",37.09],["real",37.29],["heater",37.56],["is",37.96],["underneath",38.1]]},{"s":38.86,"e":40.43,"text":"up to eleven centimeters of fat,","words":[["up",38.86],["to",38.98],["eleven",39.1],["centimeters",39.46],["of",40.13],["fat",40.25]]},{"s":40.85,"e":42.93,"text":"plus fur that traps heat so well","words":[["plus",40.85],["fur",41.17],["that",41.41],["traps",41.73],["heat",42.13],["so",42.45],["well",42.61]]},{"s":43.0,"e":46.05,"text":"polar bears almost vanish on heat cameras.","words":[["polar",43.0],["bears",43.43],["almost",43.87],["vanish",44.39],["on",44.92],["heat",45.09],["cameras",45.44]]},{"s":46.48,"e":47.76,"text":"So is a polar bear white,","words":[["so",46.48],["is",46.62],["a",46.75],["polar",46.82],["bear",47.15],["white",47.42]]},{"s":48.12,"e":48.44,"text":"black,","words":[["black",48.12]]},{"s":48.52,"e":49.77,"text":"or totally see-through?","words":[["or",48.52],["totally",48.65],["seethrough",49.11]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2), SLIDE = 0.5;
  const fmt = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let REC = null;
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
  const dropIn = (t, st, du = 0.4, dist = 80) => { if (REC) REC.push(st + 0.37 * du);
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


  const ellPts = (r, cx, cy, rx, ry, rot = 0, jit = 0.5) => { const n = Math.max(18, Math.round((TAU * Math.max(rx, ry)) / 13)), a0 = r() * TAU, out = [], c = Math.cos(rot), s = Math.sin(rot); for (let i = 0; i < n; i++) { const a = a0 + ((i + r.range(-0.2, 0.2)) / n) * TAU, x = Math.cos(a) * (rx + r.gauss() * jit), y = Math.sin(a) * (ry + r.gauss() * jit); out.push([cx + x * c - y * s, cy + x * s + y * c]); } return out; };
  const rect = (r, x0, y0, x1, y1, seg = 24, jit = 0.5) => cutLines(r, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], seg, jit);
  const popIn = (t, st, du = 0.35) => { if (REC) REC.push(st + 0.37 * du); const u = H.clamp((t - st) / du); if (u <= 0) return null; return { s: Math.max(0.01, H.ease.back(u)), d: (1 - H.ease.out(u)) * 2 }; };
  const centerRow = (ctx, str, y, px, col) => numberRow(ctx, str, 540 - rowWidth(str, px) / 2, y, px, col);
  const blob = (c, pts) => { c.beginPath(); poly(c, pts); c.fill(); };
  // live paper strips (legs, tendons, toes change shape every frame): drawn flat into a layer, then given the
  // reference's fibre texture + lit/dark rim + drop shadow in one pass
  function liveStrips(ctx, paint, d = 1) {
    const L = PK.live || (PK.live = H.layer(W0, H0)), c = L.getContext('2d');
    c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over'; c.clearRect(0, 0, W0, H0);
    paint(c);
    const pat = c.createPattern(pkTex(), 'repeat');
    c.save(); c.globalCompositeOperation = 'source-atop'; c.fillStyle = pat; c.fillRect(0, 0, W0, H0); c.restore();
    const T = PK.liveT || (PK.liveT = H.layer(W0, H0)), tc = T.getContext('2d');
    const edge = (col, dx, dy) => { tc.setTransform(1, 0, 0, 1, 0, 0); tc.globalCompositeOperation = 'source-over'; tc.clearRect(0, 0, W0, H0); tc.drawImage(L, 0, 0); tc.globalCompositeOperation = 'source-in'; tc.fillStyle = col; tc.fillRect(0, 0, W0, H0); tc.globalCompositeOperation = 'destination-out'; tc.drawImage(L, dx, dy); c.save(); c.globalCompositeOperation = 'source-atop'; c.drawImage(T, 0, 0); c.restore(); };
    edge('rgba(255,247,232,0.38)', 1.8, 2.2); edge('rgba(0,0,0,0.28)', -1.6, -1.8);
    shadowDraw(ctx, L, 0, 0, d);
  }
  const strokePts = (c, pts, w, col) => { c.strokeStyle = col; c.lineWidth = w; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke(); };
  const starsSpr = () => cache('stars', () => { const r = H.rng(31); return paperize(W0, 1100, (x) => { x.fillStyle = '#f6e7bf'; for (let i = 0; i < 46; i++) { const sx = r.range(20, W0 - 20), sy = r.range(170, 1050), s = r.range(5, 11), pts = []; for (let j = 0; j < 10; j++) { const rr = j % 2 ? s * 0.42 : s, a = (j / 10) * TAU; pts.push([sx + Math.cos(a) * rr, sy + Math.sin(a) * rr]); } x.beginPath(); poly(x, pts); x.fill(); } }, { hi: 0.3 }); });
  const moonSpr = () => cache('moon', () => paperize(260, 260, (c) => { c.fillStyle = '#f6e7bf'; c.beginPath(); c.arc(130, 130, 110, 0, TAU); c.fill(); c.globalCompositeOperation = 'destination-out'; c.beginPath(); c.arc(185, 105, 100, 0, TAU); c.fill(); }, { seed: 33 }));
  const dio = (key, sky, sun, far, mid, ground, groundY) => cache('dio' + key, () => { const r = H.rng(key.length * 97 + groundY); return compose(W0, H0, [
    [(c) => { c.fillStyle = sky; c.fillRect(0, 0, W0, H0); }, 0, { rim: false }],
    ...(sun ? [[(c) => { c.fillStyle = sun; blob(c, circPts(r, 820, groundY - 520, 130, 15, 0.8)); }, 0.5]] : []),
    [(c) => { c.fillStyle = far; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY - 210 + 46 * Math.sin(x * 0.006 + 1), 16, 36, 1), [W0 + 10, H0], [-10, H0]]); }, 0.7],
    [(c) => { c.fillStyle = mid; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY - 100 + 34 * Math.sin(x * 0.009 + 4), 14, 30, 1), [W0 + 10, H0], [-10, H0]]); }, 0.9],
    [(c) => { c.fillStyle = ground; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY + 14 * Math.sin(x * 0.012), 14, 30, 1.2), [W0 + 10, H0], [-10, H0]]); }, 1.2],
  ]); });
  const flat = (key, base, band, seed) => cache('flat' + key, () => { const r = H.rng(seed); return compose(W0, H0, [
    [(c) => { c.fillStyle = base; c.fillRect(0, 0, W0, H0); }, 0, { rim: false }],
    [(c) => { c.fillStyle = band; blob(c, [...ridge(r, -10, W0 + 10, (x) => 200 + 26 * Math.sin(x * 0.008), 18, 34, 1.2), [W0 + 10, 1720], ...ridge(r, -10, W0 + 10, (x) => 1700 + 22 * Math.sin(x * 0.01 + 2), 18, 34, 1.2).reverse()]); }, 1],
  ]); });
  const zzz = (ctx, t, x, y, s = 1) => { for (let i = 0; i < 3; i++) { const u = ((t * 0.55 + i / 3) % 1); put(ctx, wordSpr('z', Math.round(60 + i * 14), C.card, null), x + u * 90 * s + i * 10, y - u * 170 * s, { a: Math.sin(u * Math.PI), d: 0.4, rot: -0.2 }); } };


  // ---------------- palette ----------------
  const C = { cream: '#f3ecdc', card: '#fbf6ea', ink: '#2b2d5a', gold: '#f2b545', coral: '#e8604a', teal: '#58b0a6', red: '#d9473b',
    blk: '#26221f', fur: '#fbf6ea', furD: '#e2d9c6', furI: '#cfc3ad', skin: '#2b2930', fat: '#f2c86a', meat: '#c4675a', ice: '#dde9ef', warm: '#f08a3c' };

  const stamp = (ctx, t, st, str, px, x, y, rot) => { if (REC && st > 0) REC.push(st); const u = H.clamp((t - st) / 0.22); if (u <= 0) return; const sc = 1.7 - 0.7 * H.ease.out(u); put(ctx, wordSpr(str, px, C.card, C.red, 18), x, y, { s: sc, rot, d: 0.3 + (1 - u) * 3, a: H.clamp(u * 3) }); };

  // ---------------- polar bear, side view facing right; sheet 760x500, ground (380,480) ----------------
  const BP = {
    white: { co: C.fur, coD: C.furD, inn: C.furI, nose: C.blk, eye: C.blk },
    thermal: { co: '#33226e', coD: '#2a1c60', inn: '#3d2b80', nose: '#ffb43c', eye: '#ffd36a' },
  };
  const bearSpr = (kind) => cache('bear' + kind, () => {
    const k = BP[kind], r = H.rng(kind.length * 41 + 5), leg = (c, x, y0, w, col) => { c.fillStyle = col; c.beginPath(); c.roundRect(x - w / 2, y0, w, 478 - y0, [w * 0.45, w * 0.45, 18, 18]); c.fill(); };
    return compose(760, 500, [
      [(c) => { leg(c, 255, 290, 74, k.coD); leg(c, 540, 280, 72, k.coD); }, 0.3],
      [(c) => { c.fillStyle = k.co; blob(c, ellPts(r, 360, 268, 250, 140, 0, 0.9)); blob(c, ellPts(r, 545, 222, 115, 100, -0.3, 0.7)); blob(c, circPts(r, 630, 196, 86, 13, 0.6));
        blob(c, ellPts(r, 708, 226, 64, 42, 0.1, 0.5)); blob(c, circPts(r, 596, 122, 26, 8, 0.4)); blob(c, circPts(r, 662, 118, 24, 8, 0.4)); }, 0.8],
      [(c) => { c.fillStyle = k.coD; blob(c, ellPts(r, 380, 350, 210, 50, 0, 0.6)); c.fillStyle = k.inn; blob(c, circPts(r, 597, 124, 12, 6, 0.3)); blob(c, circPts(r, 662, 120, 11, 6, 0.3)); }, 0.15],
      [(c) => { leg(c, 310, 300, 80, k.co); leg(c, 600, 292, 78, k.co); }, 0.5],
      [(c) => { c.fillStyle = k.nose; blob(c, ellPts(r, 764, 214, 19, 14, 0.1, 0.3)); c.fillStyle = k.eye; blob(c, circPts(r, 664, 184, 9, 5, 0.2));
        c.strokeStyle = kind === 'white' ? C.blk : k.inn; c.lineWidth = 4; c.lineCap = 'round'; c.beginPath(); c.moveTo(758, 236); c.quadraticCurveTo(738, 252, 712, 246); c.stroke();
        c.fillStyle = kind === 'white' ? '#5a5048' : k.inn; [[284, 478], [334, 478], [575, 478], [625, 478]].forEach(([x, y]) => { for (let j = -1; j <= 1; j++) blob(c, [[x + j * 14 - 5, y - 2], [x + j * 14 + 5, y - 2], [x + j * 14 + 1, y + 8]]); }); }, 0.1],
    ]);
  });
  // shaved flank: black skin with fur tufts round the edge, same sheet coordinates
  const patchSpr = () => cache('patch', () => { const r = H.rng(612); return compose(760, 500, [
    [(c) => { c.fillStyle = C.furD; blob(c, ellPts(r, 360, 252, 132, 86, -0.05, 2.5)); }, 0],
    [(c) => { c.fillStyle = C.skin; blob(c, ellPts(r, 360, 252, 118, 74, -0.05, 3)); }, 0.35],
    [(c) => { c.fillStyle = 'rgba(255,255,255,0.12)'; blob(c, ellPts(r, 330, 228, 60, 18, -0.2, 1)); }, 0],
  ]); });
  const razorSpr = () => cache('razor', () => { const r = H.rng(77); return compose(300, 140, [
    [(c) => { c.fillStyle = '#58b0a6'; c.beginPath(); c.roundRect(10, 54, 190, 34, 16); c.fill(); }, 0.6],
    [(c) => { c.fillStyle = '#9aa3ad'; c.beginPath(); c.roundRect(190, 14, 60, 112, 10); c.fill(); }, 0.6],
    [(c) => { c.fillStyle = '#dfe5ea'; blob(c, rect(r, 246, 20, 270, 120, 16, 0.4)); c.fillStyle = '#58606b'; for (let y = 26; y < 116; y += 12) c.fillRect(250, y, 16, 4); }, 0.3],
  ]); });
  // o: kind, reveal (0..1 flank shaved), a (alpha), t
  function bear(ctx, cx, gy, s, o = {}) {
    const t = o.t || 0, bob = Math.sin(t * 1.6) * 3 * s, y = gy - 230 * s + bob;
    put(ctx, bearSpr(o.kind || 'white'), cx, y, { s, d: 1.2, a: o.a });
    if (o.reveal > 0) {
      const xl = cx + (220 - 380) * s, xr = cx + (220 - 380 + 290 * o.reveal) * s;
      ctx.save(); ctx.beginPath(); ctx.rect(xl, y - 260 * s, xr - xl, 520 * s); ctx.clip(); put(ctx, patchSpr(), cx, y, { s, d: 0.2, a: o.a }); ctx.restore();
    }
    return { patch: [cx + (360 - 380) * s, y + (252 - 250) * s], head: [cx + (630 - 380) * s, y + (196 - 250) * s], nose: [cx + (764 - 380) * s, y + (214 - 250) * s], eye: [cx + (664 - 380) * s, y + (184 - 250) * s] };
  }

  // ---------------- clear hair (vellum strip) ----------------
  const hairSpr = (w, h, seed, core = false) => cache('hair' + w + h + seed + core, () => paperize(w + 20, h + 20, (c) => {
    const r = H.rng(seed), L = cutLines(r, [[10 + w * 0.5, 10], [10 + w * 0.82, 10 + h * 0.1], [10 + w, 10 + h], [10, 10 + h], [10 + w * 0.18, 10 + h * 0.1], [10 + w * 0.5, 10]], 26, 0.5);
    if (!core) { c.fillStyle = 'rgba(232,244,252,0.55)'; c.beginPath(); poly(c, L); c.fill(); c.strokeStyle = 'rgba(255,255,255,0.92)'; c.lineWidth = Math.max(3, w * 0.04); c.stroke();
      c.fillStyle = 'rgba(255,255,255,0.35)'; c.fillRect(10 + w * 0.2, 10 + h * 0.14, w * 0.08, h * 0.8); }
    else { const cw = w * 0.34; c.fillStyle = 'rgba(70,120,165,0.45)'; c.beginPath(); c.roundRect(10 + w / 2 - cw / 2, 10 + h * 0.16, cw, h * 0.8, cw / 2); c.fill();
      c.fillStyle = 'rgba(255,255,255,0.6)'; for (let y = h * 0.2; y < h * 0.94; y += r.range(40, 90)) { c.beginPath(); c.arc(10 + w / 2 + r.range(-cw * 0.2, cw * 0.2), 10 + y, r.range(4, cw * 0.22), 0, TAU); c.fill(); } }
  }, { seed, tex: 0.45, hi: 0.5, lo: 0.12 }));
  const strawSpr = () => cache('straw', () => paperize(460, 90, (c) => { c.save(); c.beginPath(); c.roundRect(10, 20, 440, 50, 12); c.clip(); c.fillStyle = C.card; c.fillRect(0, 0, 460, 90); c.fillStyle = C.red; for (let x = -40; x < 480; x += 56) { c.beginPath(); c.moveTo(x, 90); c.lineTo(x + 26, 90); c.lineTo(x + 56, 0); c.lineTo(x + 30, 0); c.fill(); } c.restore(); c.fillStyle = '#7a3a34'; c.beginPath(); c.ellipse(446, 45, 8, 25, 0, 0, TAU); c.fill(); }, { seed: 88 }));
  const crossSec = () => cache('xsec', () => { const r = H.rng(99); return compose(400, 400, [
    [(c) => { c.fillStyle = C.card; blob(c, circPts(r, 200, 200, 190, 14, 0.6)); c.fillStyle = '#2f5d7c'; blob(c, circPts(r, 200, 200, 172, 14, 0.6)); }, 0.8],
    [(c) => { c.fillStyle = 'rgba(232,244,252,0.6)'; blob(c, circPts(r, 200, 200, 150, 14, 0.6)); }, 0.3],
    [(c) => { c.fillStyle = 'rgba(60,105,150,0.85)'; blob(c, circPts(r, 200, 200, 78, 10, 0.5)); c.fillStyle = 'rgba(255,255,255,0.7)'; [[170, 175, 14], [228, 196, 10], [196, 236, 12], [236, 160, 7], [160, 226, 8]].forEach(([x, y, rr]) => blob(c, circPts(r, x, y, rr, 5, 0.2))); }, 0.25],
  ]); });
  const sunSpr = (rr) => cache('sun' + rr, () => { const r = H.rng(rr); return compose(rr * 2 + 80, rr * 2 + 80, [
    [(c) => { c.fillStyle = '#f6d38f'; c.beginPath(); for (let i = 0; i < 24; i++) { const a = (i / 24) * TAU, q = i % 2 ? rr * 0.95 : rr * 1.25; const x = rr + 40 + Math.cos(a) * q, y = rr + 40 + Math.sin(a) * q; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.closePath(); c.fill(); }, 0.4],
    [(c) => { c.fillStyle = C.gold; blob(c, circPts(r, rr + 40, rr + 40, rr * 0.8, 12, 0.6)); }, 0.5],
  ]); });
  const flakeSpr = (R, seed, col = C.card) => cache('flake' + R + seed + col, () => paperize(R * 2 + 40, R * 2 + 40, (c) => {
    c.translate(R + 20, R + 20); c.strokeStyle = col; c.lineCap = 'round'; const lw = Math.max(4, R * 0.09);
    for (let i = 0; i < 6; i++) { c.save(); c.rotate((i / 6) * TAU); c.lineWidth = lw; c.beginPath(); c.moveTo(0, 0); c.lineTo(0, -R); c.stroke();
      c.lineWidth = lw * 0.8; [0.45, 0.7].forEach((u) => { const l = R * (0.42 - u * 0.25); c.beginPath(); c.moveTo(0, -R * u); c.lineTo(-l, -R * u - l); c.moveTo(0, -R * u); c.lineTo(l, -R * u - l); c.stroke(); }); c.restore(); }
    c.fillStyle = col; c.beginPath(); c.arc(0, 0, lw * 1.4, 0, TAU); c.fill();
  }, { seed }));
  const fallingFlakes = (ctx, t, n, seed, a = 0.9) => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const x0 = r.range(20, W0 - 20), y0 = r.range(0, 1500), sp = r.range(40, 90), R = r.int(10, 18), sw = r.range(0, TAU); const y = 150 + ((y0 + t * sp) % 1500); put(ctx, flakeSpr(R, 300 + (i % 4)), x0 + Math.sin(t * 0.8 + sw) * 20, y, { d: 0.3, a, rot: t * 0.4 + sw }); } };
  const ARCTIC = () => dio('arctic', '#4f86a8', '#f6e3b0', '#8fb6cc', '#b8d3e1', C.ice, 1450);
  const ARCTIC_END = () => dio('arcticdusk', '#3e4f86', '#f2b58a', '#6f7fb0', '#9cabd0', '#cfd8ea', 1450);
  const SNOWY = () => dio('snowfield', '#7aa6c4', null, '#cfe2ec', '#e6f0f5', '#f7fbfc', 1420);
  const iceFloe = () => cache('floe', () => { const r = H.rng(515); return compose(W0, 400, [[(c) => { c.fillStyle = '#f4f8fa'; blob(c, [...ridge(r, 20, W0 - 20, (x) => 60 + 10 * Math.sin(x * 0.02), 30, 70, 2), [W0 + 10, 400], [-10, 400]]); }, 0.6], [(c) => { c.fillStyle = '#c9dce6'; blob(c, [...ridge(r, -10, W0 + 10, (x) => 170 + 8 * Math.sin(x * 0.015), 30, 70, 2), [W0 + 10, 400], [-10, 400]]); }, 0.3]]); });

  // ---------------- tissue layers diagram (world 1080 x 2300) ----------------
  const LY = { furTop: 900, skin: 1250, fat: 1320, meat: 1660 };
  const HAIRS = (() => { const r = H.rng(4242), out = []; for (let x = 30; x < W0; x += 66) out.push([x + r.range(-8, 8), LY.furTop + r.range(-30, 30), r.range(-0.05, 0.05)]); return out; })();
  const BEAM_H = HAIRS[8];
  const layersSpr = () => cache('layers', () => { const r = H.rng(733); return compose(W0, 2300, [
    [(c) => { c.fillStyle = '#22375e'; c.fillRect(0, 0, W0, 2300); }, 0, { rim: false }],
    [(c) => { c.fillStyle = '#2c4674'; blob(c, [...ridge(r, -10, W0 + 10, (x) => 180 + 20 * Math.sin(x * 0.008), 18, 34, 1), [W0 + 10, 2300], [-10, 2300]]); }, 0.6],
    [(c) => { c.fillStyle = C.meat; blob(c, [...ridge(r, -10, W0 + 10, (x) => LY.meat + 8 * Math.sin(x * 0.01), 18, 34, 1), [W0 + 10, 2300], [-10, 2300]]); }, 0.6],
    [(c) => { c.fillStyle = C.fat; blob(c, [...ridge(r, -10, W0 + 10, (x) => LY.fat + 6 * Math.sin(x * 0.012), 18, 34, 1), ...ridge(r, -10, W0 + 10, (x) => LY.meat + 8 * Math.sin(x * 0.01), 18, 34, 1).reverse()]); c.fillStyle = 'rgba(255,240,190,0.7)'; for (let i = 0; i < 30; i++) blob(c, circPts(r, r.range(20, W0 - 20), r.range(LY.fat + 50, LY.meat - 40), r.range(14, 30), 8, 0.4)); }, 0.7],
    [(c) => { c.fillStyle = C.skin; blob(c, [...ridge(r, -10, W0 + 10, (x) => LY.skin + 5 * Math.sin(x * 0.02), 14, 28, 1), ...ridge(r, -10, W0 + 10, (x) => LY.fat + 6 * Math.sin(x * 0.012), 18, 34, 1).reverse()]); }, 0.8],
  ]); });
  const furHairs = () => cache('furh', () => { const L = H.layer(W0, 2300), c = L.getContext('2d'); HAIRS.forEach(([x, y, rot], i) => { const h = LY.skin + 6 - y; c.save(); c.translate(x, y + h / 2); c.rotate(rot); const s = hairSpr(42, Math.round(h), 500 + i); c.drawImage(s, -s.width / 2, -s.height / 2); c.restore(); }); return L; });
  const rulerSpr = () => cache('ruler', () => paperize(120, 360, (c) => { c.fillStyle = C.card; c.fillRect(10, 10, 100, 340); c.fillStyle = C.ink; for (let i = 0; i <= 11; i++) { const y = 10 + (i / 11) * 340, l = i % 5 === 0 ? 50 : 28; c.fillRect(10, y - 2.5, l, 5); } }, { seed: 121 }));

  // ================= SCENE 1: hook, shave a polar bear =================
  function sceneHook(ctx, t) {
    ctx.drawImage(ARCTIC(), 0, 0); shadowDraw(ctx, iceFloe(), 0, 1460, 0.8);
    fallingFlakes(ctx, t, 14, 61, 0.7);
    const z = 1 + seg(t, PS(1) - 0.2, PE(2)) * 0.07;
    ctx.save(); ctx.translate(500, 1250); ctx.scale(z, z); ctx.translate(-500, -1250);
    const rv = seg(t, P(0, 'shaved') - 0.15, P(1, 'black') - 0.05);
    const b = bear(ctx, 520, 1540, 1.25, { t, reveal: rv });
    if (t > P(0, 'shaved') - 0.4 && rv < 1) { const rx = 520 + (220 - 380 + 290 * rv) * 1.25, ry = b.patch[1] - 10; put(ctx, razorSpr(), rx - 40, ry + Math.sin(t * 40) * 4, { rot: -0.25, d: 1.6, a: H.clamp((t - P(0, 'shaved') + 0.4) * 4) }); }
    ctx.restore();
    tag(ctx, t, P(0, 'shaved') - 0.12, 'SHAVE IT?', 120, C.ink, 540, 300, { rot: -0.03, d: 1 });
    if (tag(ctx, t, P(1, 'black') - 0.12, 'BLACK SKIN', 120, C.card, 540, 490, { back: C.blk, rot: 0.02, d: 1 })) arrow(ctx, 360, 590, 260, 900, 440, 1170, H.clamp((t - P(1, 'black')) / 0.4), C.gold, 301);
    stamp(ctx, t, P(2, 'zero') - 0.1, '0 WHITE HAIRS', 96, 540, 700, -0.05);
    const Wy = popIn(t, P(2, 'why') - 0.15); if (Wy) put(ctx, wordSpr('WHY?', 120, C.card, C.coral, 18), 880, 880, { s: Wy.s, d: 1 + Wy.d, rot: 0.08 });
  }

  // ================= SCENE 2: one hair up close: clear, a straw, hollow core, no pigment =================
  function sceneHair(ctx, t) {
    ctx.drawImage(flat('hair', '#2f5d7c', '#3b7196', 51), 0, 0);
    const sw = Math.sin(t * 1.2) * 0.012;
    put(ctx, hairSpr(170, 1240, 71), 290, 1030, { rot: -0.05 + sw, d: 1.2, a: 0.95 });
    const co = popIn(t, P(5, 'hollow') - 0.15, 0.4); if (co) put(ctx, hairSpr(170, 1240, 71, true), 290, 1030, { rot: -0.05 + sw, d: 0, a: H.clamp(co.s) });
    tag(ctx, t, P(3, 'clear') - 0.12, 'CLEAR', 140, C.card, 720, 300, { back: C.teal, rot: -0.03, d: 1 });
    if (t < PS(6) - 0.1) { const St = dropIn(t, P(4, 'straw') - 0.15, 0.4, 90); if (St) { put(ctx, strawSpr(), 740, 600 + St.dy, { rot: -0.12, d: 1 + St.d }); tag(ctx, t, P(4, 'plastic') - 0.12, 'A STRAW', 90, C.ink, 740, 740, { rot: 0.02 }); } }
    const X = popIn(t, P(5, 'hollow') - 0.15, 0.4);
    if (X) { arrow(ctx, 380, 1060, 470, 1000, 560, 1060, H.clamp((t - P(5, 'hollow')) / 0.3), C.gold, 202, 14); put(ctx, crossSec(), 760, 1080, { s: X.s * 0.85, d: 1 + X.d }); }
    tag(ctx, t, P(5, 'hollow') - 0.1, 'HOLLOW CORE', 76, C.card, 740, 1300, { back: C.ink, rot: -0.02 });
    const Ai = popIn(t, P(5, 'air') - 0.15); if (Ai) put(ctx, wordSpr('AIR', 64, C.ink, C.card, 10), 760, 1080, { s: Ai.s, d: 0.6 });
    if (t >= PS(6) - 0.2) { const Z = popIn(t, P(6, 'no') - 0.15, 0.4); if (Z) { ctx.save(); ctx.translate(720, 600); ctx.scale(Z.s, Z.s); numberRow(ctx, '0%', -rowWidth('0%', 200) / 2, 0, 200, C.coral); ctx.restore(); }
      tag(ctx, t, P(6, 'pigment') - 0.12, 'WHITE PIGMENT', 66, C.card, 720, 790, { back: C.ink, rot: 0.02 }); }
  }

  // ================= SCENE 3: light bounces inside the hairs and scatters =================
  const ZIG = (() => { const out = [[540, 790]]; let s = 1; for (let y = 880; y <= 1420; y += 90) { out.push([540 + s * 34, y]); s = -s; } return out; })();
  const partial = (pts, p) => { if (p <= 0) return []; const L = []; let tot = 0; for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); L.push(d); tot += d; } let left = tot * p; const out = [pts[0]]; for (let i = 1; i < pts.length; i++) { if (left >= L[i - 1]) { out.push(pts[i]); left -= L[i - 1]; } else { const u = left / L[i - 1]; out.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * u, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * u]); break; } } return out; };
  function sceneScatter(ctx, t) {
    ctx.drawImage(flat('scatter', '#1f2b4d', '#2a3a66', 53), 0, 0);
    put(ctx, sunSpr(80), 170, 600, { rot: t * 0.15, d: 0.8 });
    [[400, 1180, 0.04, 81], [540, 1180, -0.01, 82], [680, 1180, -0.05, 83]].forEach(([x, y, rot, sd]) => put(ctx, hairSpr(118, 960, sd), x, y, { rot: rot + Math.sin(t + sd) * 0.01, d: 1, a: 0.95 }));
    arrow(ctx, 230, 640, 420, 640, 535, 770, seg(t, P(8, 'light') - 0.12, P(8, 'light') + 0.4), C.gold, 401, 16);
    const zp = seg(t, P(8, 'bounces') - 0.1, P(8, 'hairs') + 0.3), zz = partial(ZIG, zp);
    if (zz.length > 1) liveStrips(ctx, (c) => strokePts(c, zz, 13, C.gold), 0.4);
    const sp = seg(t, P(9, 'scatters') - 0.12, P(9, 'direction') + 0.3);
    if (sp > 0) for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU + 0.3, l0 = 140, l1 = 140 + 250 * sp, cx = 540, cy = 1130; arrow(ctx, cx + Math.cos(a) * l0, cy + Math.sin(a) * l0, cx + Math.cos(a) * (l0 + l1) / 2, cy + Math.sin(a) * (l0 + l1) / 2, cx + Math.cos(a) * l1, cy + Math.sin(a) * l1, 1, [C.card, '#f6e3b0', '#bfe3f0'][i % 3], 410 + i, 13); }
    if (t < PS(8) - 0.1) tag(ctx, t, P(7, 'white') - 0.12, 'WHY WHITE?', 120, C.ink, 560, 320, { back: C.card, rot: -0.02, d: 1 });
    else { tag(ctx, t, P(8, 'bounces') - 0.12, 'BOUNCE', 110, C.ink, 560, 320, { back: C.gold, rot: -0.03, d: 1 }); tag(ctx, t, P(9, 'scatters') - 0.12, 'SCATTER!', 130, C.card, 560, 480, { back: C.coral, rot: 0.03, d: 1 }); }
  }

  // ================= SCENE 4: the same trick as snow =================
  function sceneSnow(ctx, t) {
    ctx.drawImage(SNOWY(), 0, 0);
    fallingFlakes(ctx, t, 22, 62, 0.95);
    const F = popIn(t, P(10, 'snow') - 0.15, 0.45);
    if (F) put(ctx, flakeSpr(260, 909, '#eef7fc'), 540, 900, { s: F.s, rot: t * 0.2, d: 1.4 + F.d });
    tag(ctx, t, P(10, 'trick') - 0.12, 'SAME TRICK', 120, C.card, 540, 320, { back: C.ink, rot: -0.03, d: 1 });
    tag(ctx, t, P(10, 'snow') - 0.12, 'SNOW', 110, C.ink, 540, 1290, { back: C.card, rot: 0.03, d: 1 });
    tag(ctx, t, P(10, 'white') - 0.12, 'LOOKS WHITE', 90, C.card, 540, 1460, { back: C.teal, rot: -0.02, d: 1 });
  }

  // ================= SCENE 5: fur / skin / fat cross-section: the fiber-optic myth, then the real heater =================
  function sceneLayers(ctx, t) {
    const cy = -270 * seg(t, P(16, 'underneath') - 0.3, P(16, 'underneath') + 0.6);
    ctx.save(); ctx.translate(0, cy);
    ctx.drawImage(layersSpr(), 0, 0);
    { const sa = 1 - seg(t, P(16, 'underneath') - 0.3, P(16, 'underneath') + 0.3); if (sa > 0) put(ctx, sunSpr(90), 880, 740, { rot: t * 0.12, d: 0.8, a: sa }); }
    ctx.drawImage(furHairs(), 0, 0);
    const bx = BEAM_H[0], by = BEAM_H[1];
    // old idea: light piped down one hair
    if (t < PS(14) - 0.1) {
      arrow(ctx, 820, 760, 700, 820, bx + 20, by - 10, seg(t, P(11, 'piped') - 0.12, P(11, 'piped') + 0.4), C.gold, 501, 16);
      const bp = seg(t, P(12, 'down') - 0.1, P(12, 'skin') + 0.25); if (bp > 0) liveStrips(ctx, (c) => strokePts(c, [[bx, by], [bx, by + (LY.skin - by) * bp]], 18, C.gold), 0.3);
      const Xx = popIn(t, P(13, 'dont') - 0.15); if (Xx) put(ctx, crossSpr(), bx, 1080, { s: Xx.s, d: 0.8 + Xx.d });
    }
    // real: light bounces back out of the fur
    if (t >= PS(14) - 0.2 && t < PS(15) + 0.4) for (let i = 0; i < 4; i++) { const x = 220 + i * 170; arrow(ctx, 830, 740, x, 1020, x - 140, 640, seg(t, P(14, 'sunlight') - 0.12 + i * 0.12, P(14, 'sunlight') + 0.5 + i * 0.12), ['#f6e3b0', C.card][i % 2], 520 + i, 13); }
    // warmth soaking into the skin
    const wa = seg(t, P(15, 'soak') - 0.1, P(15, 'soak') + 0.4);
    if (wa > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = wa * (0.6 + 0.25 * Math.sin(t * 5)); ctx.fillStyle = C.warm; ctx.fillRect(0, LY.skin - 6, W0, 12); ctx.restore(); }
    // ruler beside the fat
    const Ru = dropIn(t, P(17, 'eleven') - 0.15, 0.4, 70); if (Ru) put(ctx, rulerSpr(), 960, (LY.fat + LY.meat) / 2 + Ru.dy, { d: 1 + Ru.d });
    // heat trapped by the fur: warm loops rising from the skin and curling back
    const ht = seg(t, P(18, 'traps') - 0.12, P(18, 'traps') + 0.5);
    if (ht > 0) liveStrips(ctx, (c) => { for (let i = 0; i < 6; i++) { const x0 = 120 + i * 165, pts = []; for (let k = 0; k <= 20; k++) { const u = k / 20, a = u * Math.PI * 1.6; pts.push([x0 + Math.sin(a) * 50, LY.skin - 20 - Math.sin(u * Math.PI) * 230 * ht + Math.sin(t * 3 + i) * 6]); } strokePts(c, pts, 12, 'rgba(240,138,60,0.95)'); } }, 0.3);
    tag(ctx, t, 0, 'FUR', 64, C.ink, 130, 980, { back: C.card, rot: -0.04, du: 0.01 });
    tag(ctx, t, 0, 'SKIN', 52, C.card, 950, 1287, { back: C.blk, rot: 0.02, du: 0.01, bw: 8 });
    tag(ctx, t, P(17, 'fat') - 0.12, 'FAT', 110, C.ink, 330, 1490, { back: C.card, rot: -0.03, d: 1 });
    ctx.restore();
    // headlines (screen space)
    if (t < PS(13) - 0.1) { tag(ctx, t, P(11, 'scientists') - 0.12, 'OLD IDEA', 110, C.card, 540, 300, { back: C.ink, rot: -0.03, d: 1 }); tag(ctx, t, P(12, 'fiber') - 0.12, 'FIBER OPTICS?', 84, C.ink, 540, 460, { back: C.gold, rot: 0.02, d: 1 }); }
    else if (t < PS(14) - 0.1) { tag(ctx, t, PS(13) - 0.12, 'FIBER OPTICS?', 84, C.ink, 540, 460, { back: C.gold, rot: 0.02, d: 1, du: 0.01 }); stamp(ctx, t, P(13, 'dont') - 0.1, 'MYTH!', 170, 540, 470, -0.1); }
    else if (t < PS(15) - 0.1) { tag(ctx, t, P(14, 'never') - 0.12, 'NEVER REACHES', 92, C.card, 540, 300, { back: C.coral, rot: -0.02, d: 1 }); tag(ctx, t, P(14, 'skin') - 0.12, 'THE SKIN', 92, C.ink, 540, 460, { back: C.card, rot: 0.02, d: 1 }); }
    else if (t < PS(16) - 0.1) { tag(ctx, t, P(15, 'black') - 0.12, 'BLACK SKIN', 110, C.card, 540, 300, { back: C.blk, rot: -0.02, d: 1 }); tag(ctx, t, P(15, 'warmth') - 0.12, 'A LITTLE WARMTH', 76, C.ink, 540, 460, { back: C.gold, rot: 0.02, d: 1 }); }
    else if (t < PS(17) - 0.1) { tag(ctx, t, P(16, 'heater') - 0.12, 'REAL HEATER', 110, C.card, 540, 300, { back: C.coral, rot: -0.03, d: 1 }); }
    else if (t < PS(18) - 0.1) { tag(ctx, t, P(17, 'up') - 0.12, 'UP TO', 80, C.ink, 540, 290, { back: C.card, rot: -0.03, d: 1 }); const N = popIn(t, P(17, 'eleven') - 0.15, 0.4); if (N) { ctx.save(); ctx.translate(540, 500); ctx.scale(N.s, N.s); numberRow(ctx, '11 CM', -rowWidth('11 CM', 170) / 2, 0, 170, C.coral); ctx.restore(); } }
    else { tag(ctx, t, P(18, 'traps') - 0.12, 'TRAPS HEAT', 120, C.card, 540, 320, { back: C.teal, rot: -0.02, d: 1 }); }
  }

  // ================= SCENE 6: almost invisible on a heat camera =================
  const thermBar = () => cache('tbar', () => paperize(80, 600, (c) => { const g = c.createLinearGradient(0, 590, 0, 10); g.addColorStop(0, '#2a1c60'); g.addColorStop(0.35, '#8a2a8a'); g.addColorStop(0.65, '#e8604a'); g.addColorStop(1, '#ffe08a'); c.fillStyle = g; c.beginPath(); c.roundRect(10, 10, 60, 580, 20); c.fill(); }, { seed: 131 }));
  const brackets = () => cache('brk', () => paperize(W0, H0, (c) => { c.fillStyle = '#f6e7bf'; const L = 110, T = 16, x0 = 90, y0 = 380, x1 = 990, y1 = 1620; [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]].forEach(([x, y, sx, sy]) => { c.fillRect(Math.min(x, x + sx * L), Math.min(y, y + sy * T), L, T); c.fillRect(Math.min(x, x + sx * T), Math.min(y, y + sy * L), T, L); }); }, { seed: 132 }));
  function sceneThermal(ctx, t) {
    ctx.drawImage(flat('thermal', '#24164f', '#2b1b5c', 57), 0, 0);
    shadowDraw(ctx, brackets(), 0, 0, 0.6);
    put(ctx, thermBar(), 950, 820, { d: 0.6 });
    const rec = Math.floor(t * 2) % 2 === 0; if (rec) put(ctx, cache('recdot', () => paperize(60, 60, (c) => { c.fillStyle = C.red; c.beginPath(); c.arc(30, 30, 22, 0, TAU); c.fill(); }, { seed: 133 })), 180, 470, { d: 0.4 });
    const fa = 1 - seg(t, P(19, 'vanish') - 0.2, P(19, 'vanish') + 0.5);
    const b = bear(ctx, 470, 1420, 0.95, { kind: 'thermal', t });
    if (fa > 0) bear(ctx, 470, 1420, 0.95, { kind: 'white', t, a: fa });
    // warm breath puffs from the nose
    if (fa < 1) for (let i = 0; i < 4; i++) { const u = ((t * 0.6 + i / 4) % 1); put(ctx, cache('puff', () => paperize(80, 80, (c) => { c.fillStyle = '#e8604a'; blob(c, circPts(H.rng(9), 40, 40, 30, 8, 0.6)); }, { seed: 134 })), b.nose[0] + 20 + u * 60, b.nose[1] - u * 110, { s: 0.5 + u * 0.8, a: (1 - u) * (1 - fa) * 0.8, d: 0.2 }); }
    tag(ctx, t, P(19, 'vanish') - 0.12, 'ALMOST INVISIBLE', 80, C.card, 540, 290, { back: C.coral, rot: -0.02, d: 1 });
    tag(ctx, t, P(19, 'heat') - 0.12, 'HEAT CAMERA', 76, C.ink, 540, 1530, { back: '#f6e7bf', rot: 0.02, d: 1 });
  }

  // ================= SCENE 7: the question =================
  function sceneEnd(ctx, t) {
    ctx.drawImage(ARCTIC_END(), 0, 0); shadowDraw(ctx, iceFloe(), 0, 1460, 0.8);
    fallingFlakes(ctx, t, 14, 63, 0.7);
    bear(ctx, 520, 1540, 1.25, { t, reveal: 1 });
    tag(ctx, t, P(20, 'white') - 0.12, 'WHITE?', 120, C.ink, 540, 310, { back: C.card, rot: -0.03, d: 1 });
    tag(ctx, t, P(21, 'black') - 0.12, 'BLACK?', 120, C.card, 540, 490, { back: C.blk, rot: 0.03, d: 1 });
    const S = popIn(t, P(22, 'seethrough') - 0.15, 0.4); if (S) put(ctx, wordSpr('SEE-THROUGH?', 100, C.card, C.teal, 16), 540, 670, { s: S.s, d: 1 + S.d, rot: -0.02 });
  }

  // ---------------- edit ----------------
  function slideIn(ctx, t, cut, drawOld, drawNew, dir = 'up') {
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
  const SC = [{ f: sceneHook }, { p: 3, f: sceneHair, d: 'right' }, { p: 7, f: sceneScatter, d: 'up' }, { p: 10, f: sceneSnow, d: 'right' }, { p: 11, f: sceneLayers, d: 'up' }, { p: 19, f: sceneThermal, d: 'right' }, { p: 20, f: sceneEnd, d: 'up' }];
  SC.forEach((s) => { if (s.p != null) s.cut = PS(s.p) - SLIDE - 0.02; });
  function explainer(ctx, Wd, Hd, t) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0);
    let i = 0; for (let k = 1; k < SC.length; k++) if (t >= SC[k].cut) i = k;
    if (i === 0) SC[0].f(ctx, t); else slideIn(ctx, t, SC[i].cut, SC[i - 1].f, SC[i].f, SC[i].d);
    finish(ctx, t);
    ctx.restore();
  }

  // ---------------- sound ----------------
  function collect() {
    const out = []; REC = out; const cv = H.layer(54, 96), c = cv.getContext('2d');
    try { SC.forEach((sc, i) => { const a = i ? sc.cut : 0, b = i + 1 < SC.length ? SC[i + 1].cut + SLIDE : DURATION; for (let k = 0; k <= 8; k++) { c.setTransform(1, 0, 0, 1, 0, 0); c.save(); c.scale(0.05, 0.05); sc.f(c, a + (b - a) * (k / 8) + 0.01); c.restore(); } }); } catch (e) {}
    REC = null; const seen = new Set(), res = []; out.sort((x, y) => x - y).forEach((e) => { const key = Math.round(e * 25); if (seen.has(key) || e <= 0.05 || e > DURATION) return; seen.add(key); res.push(e); }); return res;
  }
  function scoreSound(k) {
    const card = (t, g = 1, p = 0, f = 1, minor = true) => { k.noise(t, { dur: 0.045, filter: 'bandpass', f: 1100 * f, q: 0.9, gain: 0.26 * g, a: 0.001, pan: p, minor }); k.noise(t, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 650, gain: 0.3 * g, a: 0.002, pan: p, minor }); k.tone(t, { f: [[0, 160 * f], [0.07, 85]], dur: 0.09, gain: 0.16 * g, pan: p, minor }); };
    const layer = (t, d, g = 1) => { k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 260], [d * 0.5, 620], [d, 300]], q: 0.6, gain: 0.16 * g, a: d * 0.45, pan: 0.15 }); k.noise(t + 0.05, { dur: d, color: 'brown', filter: 'lowpass', f: 380, gain: 0.14 * g, a: d * 0.5, pan: -0.15 }); };
    const hit = (t, g = 1) => { k.play('impact', t, { gain: 0.9 * g }); k.play('thud', t, { gain: 0.6 * g, f: 110 }); };
    collect().forEach((t) => card(t, 0.7, 0, 1.15));
    SC.forEach((s) => { if (s.cut != null) { layer(s.cut, SLIDE + 0.1); k.play('whoosh', s.cut, { dur: SLIDE, gain: 0.4 }); } });
    const sh0 = P(0, 'shaved') - 0.15, sh1 = P(1, 'black') - 0.05;
    k.play('buzz', sh0, { dur: sh1 - sh0, gain: 0.35, f: 140 });
    hit(P(1, 'black') - 0.05, 0.6);
    k.play('stamp', P(2, 'zero') - 0.05, { gain: 0.75 });
    k.play('ding', P(3, 'clear'), { f: 'E5', gain: 0.3 });
    k.play('pop', P(5, 'hollow'), { gain: 0.5, f: 520 });
    k.play('error', P(6, 'no'), { gain: 0.25 });
    k.play('sparkle', P(8, 'light'), { n: 5, gain: 0.32 });
    PH[8].words.slice(1).forEach(([, w], i) => k.play('pop', w, { gain: 0.3, f: 700 + i * 60, minor: true }));
    k.play('swish', P(9, 'scatters'), { gain: 0.45, dur: 0.5 });
    k.play('sparkle', P(9, 'direction'), { n: 7, gain: 0.3 });
    k.play('sparkle', P(10, 'snow'), { n: 6, gain: 0.3 });
    k.play('swish', P(11, 'piped'), { gain: 0.35 });
    k.play('stamp', P(13, 'dont') - 0.05, { gain: 0.8 });
    k.play('error', P(13, 'dont') + 0.15, { gain: 0.22 });
    k.play('ding', P(15, 'soak'), { f: 'C5', gain: 0.25 });
    k.play('riser', P(16, 'underneath') - 0.3, { dur: 0.9, gain: 0.3 });
    hit(P(17, 'eleven') - 0.05, 0.7); k.play('ding', P(17, 'eleven') + 0.05, { f: 'G5', gain: 0.3 });
    k.play('paper', P(18, 'traps') - 0.1, { dur: 0.8, gain: 0.35 });
    k.play('glitch', P(19, 'vanish'), { gain: 0.5 });
    k.play('shutter', P(19, 'heat'), { gain: 0.5 });
    k.play('pop', P(20, 'white'), { gain: 0.45, f: 600 }); k.play('pop', P(21, 'black'), { gain: 0.45, f: 720 });
    k.play('stamp', P(22, 'seethrough') - 0.05, { gain: 0.6 });
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PE(22) + 0.15 + i * 0.09, { f, gain: 0.38 - i * 0.04, pan: (i - 1) * 0.25 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); ctx.drawImage(ARCTIC(), 0, 0); shadowDraw(ctx, iceFloe(), 0, 1460, 0.8);
    bear(ctx, 520, 1540, 1.25, { t: 0.2, reveal: 1 });
    put(ctx, wordSpr('BLACK', 170, C.card, C.blk, 22), 540, 380, { d: 1.6, rot: -0.03 });
    put(ctx, wordSpr('SKIN?!', 170, C.card, C.coral, 22), 540, 620, { d: 1.6, rot: 0.02 });
    finish(ctx, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
