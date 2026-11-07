// ================= Cut-Paper Diorama, vertical 1080x1920: "Why don't birds fall off branches when they sleep?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":2.89,"text":"A sleeping bird never falls off its branch.","words":[["a",0.25],["sleeping",0.33],["bird",0.93],["never",1.23],["falls",1.61],["off",1.99],["its",2.21],["branch",2.44]]},{"s":3.44,"e":4.68,"text":"You'd never guess why.","words":[["youd",3.44],["never",3.74],["guess",4.1],["why",4.46]]},{"s":5.23,"e":6.92,"text":"When a bird bends its legs,","words":[["when",5.23],["a",5.55],["bird",5.63],["bends",5.96],["its",6.36],["legs",6.6]]},{"s":7.22,"e":9.32,"text":"tendons behind its ankles pull tight,","words":[["tendons",7.22],["behind",7.7],["its",8.1],["ankles",8.31],["pull",8.71],["tight",8.98]]},{"s":9.62,"e":11.84,"text":"and that curls the toes around the twig.","words":[["and",9.62],["that",9.83],["curls",10.11],["the",10.45],["toes",10.66],["around",10.94],["the",11.35],["twig",11.56]]},{"s":12.39,"e":15.21,"text":"In songbirds, tiny bumps on those tendons","words":[["in",12.39],["songbirds",12.56],["tiny",13.3],["bumps",13.64],["on",14.05],["those",14.22],["tendons",14.63]]},{"s":15.51,"e":17.62,"text":"catch on ridges, like a zip tie,","words":[["catch",15.51],["on",15.95],["ridges",16.13],["like",16.65],["a",17.0],["zip",17.09],["tie",17.35]]},{"s":17.92,"e":19.79,"text":"so the grip holds with little effort.","words":[["so",17.92],["the",18.04],["grip",18.23],["holds",18.48],["with",18.79],["little",19.04],["effort",19.41]]},{"s":20.34,"e":22.13,"text":"To let go, it just stands up.","words":[["to",20.34],["let",20.51],["go",20.76],["it",20.93],["just",21.1],["stands",21.45],["up",21.96]]},{"s":22.68,"e":23.88,"text":"But here's the twist.","words":[["but",22.68],["heres",22.91],["the",23.28],["twist",23.51]]},{"s":24.43,"e":26.85,"text":"When scientists filmed sleeping starlings,","words":[["when",24.43],["scientists",24.7],["filmed",25.35],["sleeping",25.74],["starlings",26.26]]},{"s":27.15,"e":29.14,"text":"their legs weren't bent enough to lock.","words":[["their",27.15],["legs",27.47],["werent",27.73],["bent",28.11],["enough",28.37],["to",28.76],["lock",28.88]]},{"s":29.69,"e":31.09,"text":"They were mostly balancing,","words":[["they",29.69],["were",29.93],["mostly",30.18],["balancing",30.54]]},{"s":31.39,"e":33.34,"text":"probably helped by a balance sensor","words":[["probably",31.39],["helped",31.91],["by",32.3],["a",32.43],["balance",32.5],["sensor",32.95]]},{"s":33.64,"e":35.61,"text":"near their hips, not just their ears.","words":[["near",33.64],["their",33.92],["hips",34.26],["not",34.53],["just",34.73],["their",35.0],["ears",35.34]]},{"s":36.16,"e":38.59,"text":"Many birds even sleep with half their brain,","words":[["many",36.16],["birds",36.43],["even",36.77],["sleep",37.04],["with",37.38],["half",37.65],["their",37.92],["brain",38.25]]},{"s":38.89,"e":40.59,"text":"one eye open for danger.","words":[["one",38.89],["eye",39.16],["open",39.43],["for",39.79],["danger",40.06]]},{"s":41.14,"e":42.64,"text":"That's how perching birds,","words":[["thats",41.14],["how",41.5],["perching",41.72],["birds",42.29]]},{"s":42.94,"e":44.93,"text":"over half of all bird species,","words":[["over",42.94],["half",43.28],["of",43.61],["all",43.77],["bird",44.02],["species",44.35]]},{"s":45.23,"e":46.82,"text":"nap safely in the trees.","words":[["nap",45.23],["safely",45.48],["in",45.98],["the",46.15],["trees",46.4]]},{"s":47.37,"e":49.38,"text":"So when a bird dozes on a wire,","words":[["so",47.37],["when",47.55],["a",47.9],["bird",47.98],["dozes",48.33],["on",48.77],["a",48.95],["wire",49.03]]},{"s":49.68,"e":51.66,"text":"is it gripping, or just balancing?","words":[["is",49.68],["it",49.83],["gripping",49.98],["or",50.56],["just",50.71],["balancing",51.0]]}];
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


  // ---------------- palette ----------------
  const C = { cream: '#f3ecdc', card: '#fbf6ea', ink: '#2b2d5a', gold: '#f2b545', coral: '#e8604a', teal: '#58b0a6', red: '#d9473b',
    bark: '#7a5236', barkD: '#5a3a26', leaf: '#5f9a5a', leafD: '#477d48', blk: '#26221f', robin: '#e07a43', robinD: '#b85a2c',
    wing: '#6b5a4a', wingD: '#4f4136', belly: '#f2c79a', leg: '#d9a36b', legD: '#b07e4c', tendon: '#d9473b', sheath: '#f3ecdc',
    star: '#2c3a4e', starS: '#7f9fb2', night: '#26285a' };
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

  // ---------------- sprites ----------------
  // songbird (robin-ish) facing right; sprite 440x320, legs attach at sheet (220,248) = offset (0,+88) from centre
  const LEGOFF = 88;
  const birdSpr = (kind = 'robin', eye = 'shut') => cache('bird' + kind + eye, () => {
    const r = H.rng(kind === 'robin' ? 41 : 42), star = kind === 'star';
    const body = star ? C.star : C.wing, bodyD = star ? '#1d2836' : C.wingD, chest = star ? '#3d5068' : C.robin;
    return compose(440, 320, [
      [(c) => { c.fillStyle = bodyD; blob(c, cutLines(r, [[120, 150], [12, 128], [8, 168], [24, 196], [128, 196], [120, 150]], 16, 0.8)); }, 0],
      [(c) => { c.fillStyle = body; blob(c, ellPts(r, 210, 168, 118, 84, -0.08, 0.9)); blob(c, ellPts(r, 318, 108, 62, 58, 0, 0.6)); }, 0.7],
      [(c) => { c.fillStyle = chest; blob(c, ellPts(r, 262, 190, 80, 58, -0.25, 0.7)); }, 0.35],
      [(c) => { c.fillStyle = bodyD; blob(c, cutLines(r, [[110, 140], [200, 116], [282, 150], [250, 196], [150, 206], [96, 176], [110, 140]], 18, 0.7)); }, 0.45],
      [(c) => { c.fillStyle = star ? '#9fb6c8' : C.belly; if (star) { for (let i = 0; i < 26; i++) blob(c, ellPts(r, r.range(130, 360), r.range(90, 240), 4, 4, 0, 0.2)); } else blob(c, ellPts(r, 250, 228, 52, 22, -0.1, 0.4)); }, 0.15],
      [(c) => { c.fillStyle = C.gold; blob(c, [[370, 96], [428, 112], [370, 126]]); }, 0.3],
      [(c) => {
        if (eye === 'open') { c.fillStyle = C.blk; blob(c, ellPts(r, 338, 96, 12, 12, 0, 0.2)); c.fillStyle = '#fff'; blob(c, ellPts(r, 342, 91, 4, 4, 0, 0.1)); }
        else { c.strokeStyle = C.blk; c.lineWidth = 6; c.lineCap = 'round'; c.beginPath(); c.arc(338, 92, 13, 0.35, Math.PI - 0.35); c.stroke(); }
      }, 0.1],
    ]);
  });
  const branchSpr = (w, seed) => cache('branch' + w + seed, () => { const r = H.rng(seed); return compose(w, 260, [
    [(c) => { c.fillStyle = C.barkD; blob(c, cutLines(r, [[0, 120], [w * 0.55, 110], [w, 128], [w, 168], [w * 0.5, 158], [0, 172], [0, 120]], 26, 1.2)); c.fillRect(w * 0.7, 30, 22, 100); }, 0],
    [(c) => { c.fillStyle = C.bark; blob(c, cutLines(r, [[0, 122], [w * 0.55, 112], [w, 130], [w, 146], [w * 0.5, 136], [0, 150], [0, 122]], 26, 0.8)); }, 0.3],
    [(c) => { const L = (x, y, a, s, col) => { c.save(); c.translate(x, y); c.rotate(a); c.fillStyle = col; c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(40 * s, -26 * s, 90 * s, 0); c.quadraticCurveTo(40 * s, 26 * s, 0, 0); c.fill(); c.restore(); };
      for (let x = 60; x < w; x += r.range(120, 220)) { L(x, 128, -2.4 + r.range(-0.3, 0.3), r.range(0.8, 1.2), r() < 0.5 ? C.leaf : C.leafD); L(x + 30, 150, 0.6 + r.range(-0.3, 0.3), r.range(0.7, 1.1), r() < 0.5 ? C.leaf : C.leafD); }
      L(w * 0.7 + 10, 40, -1.2, 1, C.leaf); L(w * 0.7 + 10, 60, -2.2, 0.9, C.leafD); }, 0.6],
  ]); });
  const starsSpr = () => cache('stars', () => { const r = H.rng(31); return paperize(W0, 1100, (x) => { x.fillStyle = '#f6e7bf'; for (let i = 0; i < 46; i++) { const sx = r.range(20, W0 - 20), sy = r.range(170, 1050), s = r.range(5, 11), pts = []; for (let j = 0; j < 10; j++) { const rr = j % 2 ? s * 0.42 : s, a = (j / 10) * TAU; pts.push([sx + Math.cos(a) * rr, sy + Math.sin(a) * rr]); } x.beginPath(); poly(x, pts); x.fill(); } }, { hi: 0.3 }); });
  const moonSpr = () => cache('moon', () => paperize(260, 260, (c) => { c.fillStyle = '#f6e7bf'; c.beginPath(); c.arc(130, 130, 110, 0, TAU); c.fill(); c.globalCompositeOperation = 'destination-out'; c.beginPath(); c.arc(185, 105, 100, 0, TAU); c.fill(); }, { seed: 33 }));
  const dio = (key, sky, sun, far, mid, ground, groundY) => cache('dio' + key, () => { const r = H.rng(key.length * 97 + groundY); return compose(W0, H0, [
    [(c) => { c.fillStyle = sky; c.fillRect(0, 0, W0, H0); }, 0, { rim: false }],
    ...(sun ? [[(c) => { c.fillStyle = sun; blob(c, circPts(r, 820, groundY - 520, 130, 15, 0.8)); }, 0.5]] : []),
    [(c) => { c.fillStyle = far; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY - 210 + 46 * Math.sin(x * 0.006 + 1), 16, 36, 1), [W0 + 10, H0], [-10, H0]]); }, 0.7],
    [(c) => { c.fillStyle = mid; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY - 100 + 34 * Math.sin(x * 0.009 + 4), 14, 30, 1), [W0 + 10, H0], [-10, H0]]); }, 0.9],
    [(c) => { c.fillStyle = ground; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY + 14 * Math.sin(x * 0.012), 14, 30, 1.2), [W0 + 10, H0], [-10, H0]]); }, 1.2],
  ]); });
  const NIGHT = () => dio('night', C.night, null, '#3a3f78', '#2f4d66', '#24413f', 1500);
  const DAWN = () => dio('dawn', '#f4cf8f', '#ee8a55', '#d59a62', '#a8894f', '#7f8a4c', 1520);
  const DUSKW = () => dio('duskw', '#e9a38a', '#f6d38f', '#b47a86', '#7d5e7c', '#4e4a6a', 1560);
  const flat = (key, base, band, seed) => cache('flat' + key, () => { const r = H.rng(seed); return compose(W0, H0, [
    [(c) => { c.fillStyle = base; c.fillRect(0, 0, W0, H0); }, 0, { rim: false }],
    [(c) => { c.fillStyle = band; blob(c, [...ridge(r, -10, W0 + 10, (x) => 200 + 26 * Math.sin(x * 0.008), 18, 34, 1.2), [W0 + 10, 1720], ...ridge(r, -10, W0 + 10, (x) => 1700 + 22 * Math.sin(x * 0.01 + 2), 18, 34, 1.2).reverse()]); }, 1],
  ]); });
  const zzz = (ctx, t, x, y, s = 1) => { for (let i = 0; i < 3; i++) { const u = ((t * 0.55 + i / 3) % 1); put(ctx, wordSpr('z', Math.round(60 + i * 14), C.card, null), x + u * 90 * s + i * 10, y - u * 170 * s, { a: Math.sin(u * Math.PI), d: 0.4, rot: -0.2 }); } };

  // a bird perched on a twig: feet wrapped (grip 0..1) or just resting (draped toes)
  function perched(ctx, x, branchY, s, o = {}) {
    const lift = o.stand ? o.stand * 60 * s : 0, sway = o.sway || 0;
    const bx = x, by = branchY - LEGOFF * s - 70 * s - lift;
    liveStrips(ctx, (c) => {
      [-26, 22].forEach((dx, k) => {
        const rx = bx + dx * s, ry = by + LEGOFF * s, fx = rx + 6 * s, fy = branchY - 12 * s;
        strokePts(c, [[rx, ry], [fx, fy]], 13 * s, k ? C.leg : C.legD);
        const g = o.grip ?? 1;
        // three toes forward over the top, curling down the far side; one toe back
        for (let j = 0; j < 3; j++) { const a1 = -0.15 + j * 0.15 + g * 0.9, a2 = a1 + g * 1.0; const p1 = [fx + Math.cos(a1) * 30 * s, fy + Math.sin(a1) * 18 * s]; strokePts(c, [[fx, fy], p1, [p1[0] + Math.cos(a2) * 24 * s, p1[1] + Math.sin(a2) * 24 * s]], 8 * s, C.legD); }
        const b1 = Math.PI - g * 0.9; const q1 = [fx + Math.cos(b1) * 30 * s, fy + Math.sin(b1) * 18 * s]; strokePts(c, [[fx, fy], q1, [q1[0] + Math.cos(b1 - g) * 22 * s, q1[1] + Math.sin(b1 - g) * 22 * s]], 8 * s, C.legD);
      });
    }, 0.5);
    put(ctx, birdSpr(o.kind || 'robin', o.eye || 'shut'), bx, by + (o.bob || 0), { s, d: 1.3, rot: sway });
  }

  // ================= SCENE 1: the hook, a bird asleep on a branch at night =================
  function sceneHook(ctx, t) {
    ctx.drawImage(NIGHT(), 0, 0); shadowDraw(ctx, starsSpr(), 0, 0, 0.25); put(ctx, moonSpr(), 870, 720, { d: 0.6 });
    const push = seg(t, PS(1) - 0.3, PE(1)), zs = 1 + push * 0.12;
    const wind = Math.sin(t * 1.3) * 0.035;
    ctx.save(); ctx.translate(540, 1240); ctx.scale(zs, zs); ctx.rotate(wind * 0.4); ctx.translate(-540, -1240);
    put(ctx, branchSpr(1400, 7), 540, 1240, { d: 1.4 });
    perched(ctx, 520, 1240 - 2, 1.45, { sway: -wind * 0.6, bob: Math.sin(t * 1.8) * 4 });
    zzz(ctx, t, 700, 870, 1);
    ctx.restore();
    tag(ctx, t, P(0, 'sleeping') - 0.12, 'ASLEEP', 120, C.ink, 540, 300, { rot: -0.02, d: 1 });
    tag(ctx, t, P(0, 'never') - 0.12, 'NEVER FALLS', 110, C.coral, 540, 470, { rot: 0.015, d: 1 });
    const Q = popIn(t, P(1, 'why') - 0.15); if (Q) { put(ctx, ringSpr(), 540, 1530, { s: Q.s * 0.85, d: 0.6, rot: 0.04 }); put(ctx, wordSpr('WHY?', 150, C.card, C.coral, 16), 540, 1530, { s: Q.s, d: 1 + Q.d, rot: -0.04 }); }
  }

  // ================= SCENE 2: the leg diagram, bend = tendon pulls = toes curl =================
  const TW = [560, 1330, 66]; // twig centre and radius
  function legGeo(b) {
    const a1 = H.lerp(1.75, 2.45, b), a2 = H.lerp(1.35, 0.78, b), L1 = 300, L2 = 330;
    const A = [0, 0], J = [L1 * Math.cos(a1), L1 * Math.sin(a1)], F = [J[0] + L2 * Math.cos(a2), J[1] + L2 * Math.sin(a2)];
    const dx = TW[0] - F[0] - 6, dy = TW[1] - TW[2] - 14 - F[1];
    const sh = (p) => [p[0] + dx, p[1] + dy];
    return { A: sh(A), J: sh(J), F: sh(F), a1, a2, d1: [Math.cos(a1), Math.sin(a1)], d2: [Math.cos(a2), Math.sin(a2)] };
  }
  function toePts(F, base, curl, dir, len = 74) {
    // a toe: 3 segments that wrap around the twig as curl -> 1
    const pts = [F]; let a = base, p = F;
    for (let k = 0; k < 3; k++) { a += dir * curl * (k === 0 ? 0.55 : 0.85); p = [p[0] + Math.cos(a) * len, p[1] + Math.sin(a) * len]; pts.push(p); }
    return pts;
  }
  function legDiagram(ctx, t, b, o = {}) {
    const g = legGeo(b), { A, J, F, d1, d2 } = g;
    // body above, moves with the hip
    put(ctx, birdSpr('robin', o.eye || 'open'), A[0] - 30, A[1] - 150, { s: 1.9, d: 1.4 });
    // twig cross-section
    const tw = cache('twig', () => { const r = H.rng(5); return compose(220, 220, [[(c) => { c.fillStyle = C.barkD; blob(c, circPts(r, 110, 110, TW[2], 10, 0.6)); }, 0], [(c) => { c.fillStyle = C.bark; blob(c, circPts(r, 110, 110, TW[2] - 16, 10, 0.5)); c.strokeStyle = C.barkD; c.lineWidth = 3; for (let k = 1; k < 4; k++) { c.beginPath(); c.arc(110, 110, k * 12, 0, TAU); c.stroke(); } }, 0.3]]); });
    put(ctx, tw, TW[0], TW[1], { d: 1 });
    const heelN = (() => { const v = [d2[0] - d1[0], d2[1] - d1[1]], m = Math.hypot(v[0], v[1]) || 1; return [-v[0] / m, -v[1] / m]; })();
    const heel = [J[0] + heelN[0] * 40, J[1] + heelN[1] * 40];
    const curl = o.curl ?? b;
    liveStrips(ctx, (c) => {
      // drumstick (with muscle) + shank
      strokePts(c, [A, J], 84, C.legD);
      c.fillStyle = C.wingD; c.beginPath(); c.ellipse((A[0] * 2 + J[0]) / 3, (A[1] * 2 + J[1]) / 3, 88, 56, g.a1, 0, TAU); c.fill();
      strokePts(c, [J, F], 54, C.leg);
      c.fillStyle = C.legD; c.beginPath(); c.arc(J[0], J[1], 46, 0, TAU); c.fill();
      // toes: 3 forward (one shown + 2 behind it), 1 back
      [0.0, -0.18].forEach((da, k) => strokePts(c, toePts(F, da, curl, 1, 70), 28, k ? C.legD : C.leg));
      strokePts(c, toePts(F, Math.PI, curl, -1, 62), 28, C.legD);
    }, 0.9);
    if (o.tendon) {
      const tight = o.tight ?? b, col = H.rgba(H.mix('#c9a090', C.tendon, tight));
      const m0 = [A[0] + d1[0] * 70 + heelN[0] * 30, A[1] + d1[1] * 70 + heelN[1] * 30];
      const sh = [F[0] + heelN[0] * 22, F[1] + heelN[1] * 22];
      const toeU = toePts(F, 0.0, curl, 1, 70).map((p, k) => k ? [p[0] - Math.sin(0) * 0, p[1]] : p);
      const path = [m0, heel, sh, F, ...toeU.slice(1)];
      const u = H.clamp(o.draw ?? 1);
      // reveal the strip along its length
      const seglen = []; let tot = 0; for (let i = 1; i < path.length; i++) { const l = Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]); seglen.push(l); tot += l; }
      let left = tot * u; const shown = [path[0]];
      for (let i = 1; i < path.length && left > 0; i++) { const l = seglen[i - 1]; const k = Math.min(1, left / l); shown.push([path[i - 1][0] + (path[i][0] - path[i - 1][0]) * k, path[i - 1][1] + (path[i][1] - path[i - 1][1]) * k]); left -= l; }
      ctx.save(); ctx.shadowColor = 'rgba(14,10,30,0.45)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 5;
      strokePts(ctx, shown, 18 + tight * 6, col); ctx.shadowColor = 'transparent';
      strokePts(ctx, shown, 4, 'rgba(255,240,230,0.5)'); ctx.restore();
    }
    return { g, heel };
  }
  function sceneLeg(ctx, t) {
    ctx.drawImage(flat('leg', '#3e6b6a', '#4f8380', 37), 0, 0);
    const b = seg(t, P(2, 'bends') - 0.1, P(2, 'legs') + 0.35);
    const tight = seg(t, P(3, 'pull') - 0.1, P(3, 'tight') + 0.2);
    const curl = Math.max(seg(t, P(4, 'curls') - 0.1, P(4, 'twig') + 0.1), 0) * 1.0;
    const { heel } = legDiagram(ctx, t, b, { tendon: t > P(3, 'tendons') - 0.15, draw: H.clamp((t - P(3, 'tendons') + 0.15) / 0.8), tight, curl: Math.min(curl, b) * 0 + curl });
    tag(ctx, t, P(2, 'bends') - 0.12, 'BEND', 120, C.ink, 820, 300, { rot: 0.03, d: 1 });
    tag(ctx, t, P(3, 'tendons') - 0.12, 'TENDON', 96, C.card, 760, 1140, { back: C.red, rot: -0.04 });
    if (t > P(3, 'ankles') - 0.12) { tag(ctx, t, P(3, 'ankles') - 0.12, 'ANKLE', 80, C.ink, 830, 900, { rot: 0.02 }); const au = H.clamp((t - P(3, 'ankles')) / 0.35); arrow(ctx, 650, 905, 560, 860, heel[0] + 40, heel[1], au, C.gold, 211); }
    if (t < P(4, 'toes') - 0.12) tag(ctx, t, P(3, 'tight') - 0.12, 'PULLS TIGHT', 96, C.coral, 540, 1580, { rot: -0.015 });
    if (t > P(4, 'curls') - 0.12) { const A = popIn(t, P(4, 'toes') - 0.12); if (A) put(ctx, wordSpr('TOES CURL', 96, C.ink, C.card, 14), 540, 1560 + 0 * A.s, { s: A.s, d: 1 + A.d, rot: 0.015 }); }
  }

  // ================= SCENE 3: the zip-tie lock, close up =================
  function sceneLock(ctx, t) {
    ctx.drawImage(flat('lk', '#5c3b4e', '#7c4a5c', 31), 0, 0);
    const c0 = P(6, 'catch') - 0.1;
    // tendon slides left, then each bump drops into a notch with a click
    const slide = (t < c0 ? (t - PS(5)) * 40 : (c0 - PS(5)) * 40) ;
    const pitch = 120, settle = t < c0 ? 0 : H.ease.back(H.clamp((t - c0) / 0.3));
    const off = -(slide % pitch) * (1 - settle) - 0;
    const TY = 820, SY = 1020;
    // sheath with ridges (sawtooth teeth on top)
    const sheath = cache('sheath', () => { const r = H.rng(8); return compose(1300, 360, [
      [(c) => { c.fillStyle = '#e9dcc0'; blob(c, rect(r, 0, 60, 1300, 360, 30, 1)); }, 0],
      [(c) => { c.fillStyle = C.teal; c.beginPath(); c.moveTo(0, 120); for (let x = 0; x <= 1300; x += pitch) { c.lineTo(x, 120); c.lineTo(x + pitch * 0.62, 40); c.lineTo(x + pitch * 0.66, 120); } c.lineTo(1300, 360); c.lineTo(0, 360); c.closePath(); c.fill(); }, 0.4],
    ]); });
    put(ctx, sheath, 540 - 10, SY + 160, { d: 1.2 });
    const tendon = cache('tstrip', () => { const r = H.rng(9); return compose(1500, 300, [
      [(c) => { c.fillStyle = C.tendon; blob(c, rect(r, 0, 20, 1500, 190, 30, 1)); }, 0],
      [(c) => { c.fillStyle = '#b8352c'; for (let x = 20; x < 1500; x += pitch) { c.beginPath(); c.ellipse(x + 40, 196, 30, 34, 0, 0, Math.PI); c.fill(); } }, 0.4],
      [(c) => { c.fillStyle = 'rgba(255,230,220,0.35)'; for (let y = 50; y < 170; y += 26) c.fillRect(0, y, 1500, 6); }, 0.1],
    ]); });
    const drop = settle * 30;
    put(ctx, tendon, 540 + off + 60, TY + drop, { d: 1.4 - settle * 0.6 });
    if (t < P(7, 'grip') - 0.12) tag(ctx, t, P(5, 'songbirds') - 0.12, 'SONGBIRDS', 100, C.ink, 540, 280, { rot: -0.02 });
    tag(ctx, t, P(5, 'bumps') - 0.12, 'TINY BUMPS', 90, C.card, 540, 560, { back: C.red, rot: 0.02 });
    if (t > P(5, 'bumps')) { const au = H.clamp((t - P(5, 'bumps')) / 0.4); arrow(ctx, 700, 620, 760, 720, 700, 900, au, C.gold, 301); }
    if (t < PS(7) - 0.1) tag(ctx, t, P(6, 'ridges') - 0.12, 'RIDGES', 96, C.ink, 300, 1430, { rot: -0.03 });
    // zip tie pops in
    const Z = popIn(t, P(6, 'zip') - 0.15);
    if (Z && t < PS(7) - 0.1) { const zt = cache('zip', () => { const r = H.rng(14); return compose(520, 220, [[(c) => { c.fillStyle = C.gold; blob(c, rect(r, 10, 80, 380, 130, 20, 0.5)); blob(c, rect(r, 380, 50, 470, 160, 16, 0.5)); }, 0], [(c) => { c.fillStyle = '#c88d2a'; for (let x = 24; x < 370; x += 22) blob(c, [[x, 80], [x + 12, 80], [x + 6, 98]]); c.fillStyle = '#5c3b4e'; c.fillRect(400, 90, 50, 30); }, 0.3]]); }); put(ctx, zt, 760, 1440, { s: Z.s, d: 1 + Z.d, rot: -0.08 }); }
    if (t < PS(7) - 0.1) tag(ctx, t, P(6, 'zip') - 0.1, 'LIKE A ZIP TIE', 80, C.coral, 620, 1600, { rot: 0.01 });
    if (t > PS(7) - 0.1) { const A = dropIn(t, P(7, 'grip') - 0.12, 0.35, 70); if (A) put(ctx, wordSpr('GRIP HOLDS', 104, C.ink, C.card, 14), 540, 400 + A.dy, { s: A.s, d: 1 + A.d, rot: 0.01 }); }
    tag(ctx, t, P(7, 'little') - 0.12, 'LITTLE EFFORT', 96, C.card, 540, 1520, { back: C.teal, rot: -0.01 });
  }

  // ================= SCENE 4: let go, stand up; then the twist =================
  function sceneLetGo(ctx, t) {
    ctx.drawImage(flat('leg', '#3e6b6a', '#4f8380', 37), 0, 0);
    const st = seg(t, P(8, 'stands') - 0.15, P(8, 'up') + 0.3);
    legDiagram(ctx, t, 1 - st, { tendon: true, tight: 1 - st, curl: 1 - st });
    tag(ctx, t, P(8, 'let') - 0.12, 'LET GO?', 100, C.ink, 800, 300, { rot: 0.03 });
    tag(ctx, t, P(8, 'stands') - 0.12, 'STAND UP', 110, C.coral, 540, 1580, { rot: -0.02 });
    if (st > 0.5) { const au = H.clamp((t - P(8, 'up')) / 0.35); arrow(ctx, 220, 900, 200, 760, 240, 600, au, C.gold, 401); }
  }
  function sceneTwist(ctx, t) {
    ctx.drawImage(DAWN(), 0, 0);
    const T = popIn(t, P(9, 'twist') - 0.3, 0.45);
    put(ctx, branchSpr(1400, 9), 540, 1250, { d: 1.4 });
    perched(ctx, 520, 1248, 1.4, { eye: 'open', bob: Math.sin(t * 3) * 3 });
    if (T) { put(ctx, burstSpr(), 540, 620, { s: T.s * 1.1, rot: t * 0.25, d: 0.7 }); }
    tag(ctx, t, P(9, 'heres') - 0.12, "BUT HERE'S", 92, C.ink, 540, 520, { rot: -0.02, d: 1 });
    tag(ctx, t, P(9, 'twist') - 0.12, 'THE TWIST', 130, C.coral, 540, 690, { rot: 0.02, d: 1.1 });
  }

  // ================= SCENE 5: the starling study (film frame) =================
  function sceneStarling(ctx, t) {
    ctx.drawImage(NIGHT(), 0, 0); shadowDraw(ctx, starsSpr(), 0, 0, 0.25);
    // paper camera viewfinder
    const frame = cache('vf', () => { const r = H.rng(17); return compose(W0, 1100, [[(c) => { c.fillStyle = C.card; blob(c, rect(r, 70, 40, 1010, 1060, 30, 0.8)); c.globalCompositeOperation = 'destination-out'; c.fillRect(110, 80, 860, 940); }, 0], [(c) => { c.fillStyle = C.ink; [[110, 80, 1], [970, 80, -1]].forEach(([x, y, sx]) => { c.fillRect(x + (sx < 0 ? -120 : 20), y + 20, 100, 14); c.fillRect(x + (sx < 0 ? -34 : 20), y + 20, 14, 100); }); [[110, 1020, 1], [970, 1020, -1]].forEach(([x, y, sx]) => { c.fillRect(x + (sx < 0 ? -120 : 20), y - 34, 100, 14); c.fillRect(x + (sx < 0 ? -34 : 20), y - 120, 14, 100); }); }, 0.3]]); });
    const bal = seg(t, P(12, 'balancing') - 0.2, P(12, 'balancing') + 0.3), wob = Math.sin(t * 2.6) * 0.07 * (0.3 + bal);
    ctx.save(); ctx.translate(540, 1300); ctx.rotate(wob * 0.3); ctx.translate(-540, -1300);
    put(ctx, branchSpr(1200, 11), 540, 1300, { d: 1.3 });
    // legs barely bent: grip low, toes draped
    perched(ctx, 520, 1298, 1.35, { kind: 'star', grip: 0.25, sway: wob, bob: 0 });
    zzz(ctx, t, 680, 960, 0.8);
    ctx.restore();
    put(ctx, frame, 540, 1160, { d: 1 });
    const blink = Math.floor(t * 2) % 2 === 0;
    if (t > P(10, 'filmed') - 0.12) { ctx.save(); ctx.fillStyle = blink ? C.red : 'rgba(217,71,59,0.35)'; ctx.beginPath(); ctx.arc(230, 700, 22, 0, TAU); ctx.fill(); ctx.restore(); put(ctx, wordSpr('REC', 56, C.card, null), 320, 700, { d: 0.3 }); }
    tag(ctx, t, P(10, 'starlings') - 0.12, 'STARLINGS', 110, C.card, 540, 330, { back: C.ink, rot: -0.02, d: 1 });
    if (t < PS(12) - 0.1) {
      tag(ctx, t, P(11, 'bent') - 0.12, 'NOT BENT', 92, C.ink, 540, 470, { rot: 0.02 });
      const X = popIn(t, P(11, 'lock') - 0.12); if (X) { put(ctx, wordSpr('LOCK', 100, C.ink, C.card, 14), 430, 1500, { s: X.s, d: 0.8 }); put(ctx, crossSpr(), 640, 1500, { s: X.s, d: 0.8 + X.d, rot: 0.1 }); }
    } else {
      const A = dropIn(t, P(12, 'balancing') - 0.12, 0.4, 80); if (A) put(ctx, wordSpr('BALANCING', 120, C.card, C.coral, 16), 540, 1530 + A.dy, { s: A.s, d: 1 + A.d, rot: wob * 0.5 });
      tag(ctx, t, P(12, 'mostly') - 0.12, 'MOSTLY', 84, C.ink, 540, 470, { rot: 0.02 });
    }
  }

  // ================= SCENE 6: a second balance sensor near the hips =================
  function sceneSensor(ctx, t) {
    ctx.drawImage(flat('sn', '#f0c9a4', '#f6dcbc', 53), 0, 0);
    const bx = 520, by = 900, s = 2.3;
    put(ctx, birdSpr('robin', 'open'), bx, by, { s, d: 1.4 });
    liveStrips(ctx, (c) => { [-26, 22].forEach((dx, k) => strokePts(c, [[bx + dx * s, by + LEGOFF * s], [bx + dx * s + 8, by + LEGOFF * s + 220]], 26, k ? C.leg : C.legD)); }, 0.6);
    const glow = (x, y, st, col) => { const A = popIn(t, st, 0.4); if (!A) return; const pulse = 1 + 0.12 * Math.sin((t - st) * 6); put(ctx, ringSpr(), x, y, { s: 0.42 * A.s * pulse, d: 0.5 }); ctx.save(); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, 30 * A.s, 0, TAU); ctx.fill(); ctx.restore(); };
    // hips: lower back above the legs; ear: behind the eye
    glow(bx - 50, by + 130, P(14, 'hips') - 0.15, C.coral);
    glow(bx + 2.3 * 72, by - 2.3 * 40, P(14, 'ears') - 0.15, C.teal);
    tag(ctx, t, P(13, 'probably') - 0.12, 'PROBABLY', 76, C.ink, 540, 290, { rot: -0.02 });
    tag(ctx, t, P(13, 'balance') - 0.12, 'BALANCE SENSOR', 88, C.coral, 540, 420, { rot: 0.012, d: 1 });
    if (t > P(14, 'hips') - 0.12) { tag(ctx, t, P(14, 'hips') - 0.12, 'HIPS', 110, C.card, 260, 1450, { back: C.coral, rot: -0.04 }); const au = H.clamp((t - P(14, 'hips')) / 0.35); arrow(ctx, 270, 1360, 280, 1200, bx - 90, by + 160, au, C.coral, 601); }
    if (t > P(14, 'ears') - 0.12) { tag(ctx, t, P(14, 'ears') - 0.12, '+ EARS', 96, C.card, 820, 1450, { back: C.teal, rot: 0.03 }); const au = H.clamp((t - P(14, 'ears')) / 0.35); arrow(ctx, 820, 1360, 880, 1000, bx + 175, by - 60, au, C.teal, 602); }
  }

  // ================= SCENE 7: half the brain asleep, one eye open =================
  function sceneBrain(ctx, t) {
    ctx.drawImage(NIGHT(), 0, 0); shadowDraw(ctx, starsSpr(), 0, 0, 0.25);
    // big head, front view: two eyes, a brain cut in half (one side dark & asleep)
    const head = cache('head', () => { const r = H.rng(71); return compose(800, 800, [
      [(c) => { c.fillStyle = C.wing; blob(c, ellPts(r, 400, 420, 330, 320, 0, 1.2)); }, 0],
      [(c) => { c.fillStyle = C.robin; blob(c, ellPts(r, 400, 690, 260, 140, 0, 1)); }, 0.4],
      [(c) => { c.fillStyle = C.gold; blob(c, [[350, 520], [450, 520], [400, 640]]); }, 0.5],
    ]); });
    put(ctx, head, 540, 1050, { d: 1.4 });
    const split = popIn(t, P(15, 'half') - 0.12, 0.4);
    const brainHalf = (side, lit) => cache('bh' + side + lit, () => { const r = H.rng(80 + side + (lit ? 5 : 0)); return paperize(260, 300, (c) => { c.fillStyle = lit ? '#ee8f9c' : '#5d4f7a'; c.beginPath(); if (side < 0) { c.moveTo(255, 10); c.bezierCurveTo(60, -10, -20, 140, 40, 230); c.bezierCurveTo(90, 300, 220, 300, 255, 290); } else { c.moveTo(5, 10); c.bezierCurveTo(200, -10, 280, 140, 220, 230); c.bezierCurveTo(170, 300, 40, 300, 5, 290); } c.closePath(); c.fill(); c.strokeStyle = lit ? '#f7b9c2' : '#463b60'; c.lineWidth = 12; c.lineCap = 'round'; for (let k = 0; k < 3; k++) { c.beginPath(); const y = 70 + k * 70, x0 = side < 0 ? 230 : 30, x1 = side < 0 ? 90 : 170; c.moveTo(x0, y); c.quadraticCurveTo((x0 + x1) / 2, y - 40, x1, y + 10); c.stroke(); } }, { seed: 90 + side }); });
    if (split) {
      const gap = 10 + split.s * 20;
      put(ctx, brainHalf(-1, false), 540 - 130 - gap, 820, { s: split.s, d: 1 + split.d });
      put(ctx, brainHalf(1, true), 540 + 130 + gap, 820, { s: split.s, d: 1 + split.d });
      if (t > P(15, 'brain') - 0.1) zzz(ctx, t, 300, 720, 0.7);
    }
    // eyes: left (on the sleeping side... the open eye is driven by the awake half on the opposite side)
    const eyeL = cache('eyeL', () => paperize(140, 140, (c) => { c.strokeStyle = C.blk; c.lineWidth = 12; c.lineCap = 'round'; c.beginPath(); c.arc(70, 50, 44, 0.4, Math.PI - 0.4); c.stroke(); }, { seed: 3 }));
    const eyeR = cache('eyeR', () => paperize(140, 140, (c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); c.arc(70, 70, 60, 0, TAU); c.fill(); c.fillStyle = C.blk; c.beginPath(); c.arc(74, 72, 36, 0, TAU); c.fill(); c.fillStyle = '#fff'; c.beginPath(); c.arc(86, 58, 11, 0, TAU); c.fill(); }, { seed: 4 }));
    const open = popIn(t, P(16, 'eye') - 0.15);
    put(ctx, eyeL, 540 - 170, 1120, { d: 0.5 });
    if (open) put(ctx, eyeR, 540 + 170, 1120, { s: open.s, d: 0.6 + open.d }); else put(ctx, eyeL, 540 + 170, 1120, { d: 0.5 });
    tag(ctx, t, P(15, 'sleep') - 0.12, 'HALF ASLEEP', 110, C.card, 540, 330, { back: C.ink, rot: -0.02, d: 1 });
    tag(ctx, t, P(16, 'one') - 0.12, '1 EYE OPEN', 110, C.coral, 540, 1580, { rot: 0.015, d: 1 });
  }

  // ================= SCENE 8: over half of all bird species are perching birds =================
  function sceneSpecies(ctx, t) {
    ctx.drawImage(DAWN(), 0, 0);
    // tree with a row of sleeping birds (camera tilts up the tree)
    const tilt = seg(t, PS(17) - 0.2, PE(19)) * 120;
    ctx.save(); ctx.translate(0, tilt);
    const trunk = cache('trunk', () => { const r = H.rng(19); return compose(300, 1200, [[(c) => { c.fillStyle = C.barkD; blob(c, cutLines(r, [[90, 0], [210, 0], [240, 1200], [60, 1200], [90, 0]], 30, 1.5)); }, 0], [(c) => { c.fillStyle = C.bark; blob(c, cutLines(r, [[110, 0], [180, 0], [190, 1200], [110, 1200], [110, 0]], 30, 1)); }, 0.3]]); });
    put(ctx, trunk, 540, 1380, { d: 1.2 });
    const rows = [[1180, 0, 'robin'], [940, 1, 'star'], [1420, 2, 'robin']];
    rows.forEach(([y, k, kind]) => { put(ctx, branchSpr(1100, 20 + k), 540, y, { d: 1.2 }); [190, 460, 800].forEach((x, j) => { const A = popIn(t, P(17, 'perching') - 0.15 + (k * 3 + j) * 0.06); if (A) perched(ctx, x, y - 2, 0.62 * A.s, { kind: (j + k) % 2 ? 'star' : 'robin', bob: Math.sin(t * 2 + j + k) * 2 }); }); });
    ctx.restore();
    tag(ctx, t, P(17, 'perching') - 0.12, 'PERCHING BIRDS', 86, C.ink, 540, 290, { rot: -0.015, d: 1 });
    if (t >= P(18, 'over') - 0.15) { const A = popIn(t, P(18, 'half') - 0.15, 0.4); if (A) { put(ctx, burstSpr(), 540, 520, { s: A.s * 0.75, rot: t * 0.2, d: 0.6 }); put(ctx, wordSpr('OVER HALF', 130, C.coral, C.card, 16), 540, 510, { s: A.s, d: 1 + A.d, rot: -0.02 }); } }
    tag(ctx, t, P(18, 'species') - 0.12, 'OF ALL BIRD SPECIES', 70, C.ink, 540, 680, { rot: 0.01 });
    tag(ctx, t, P(19, 'safely') - 0.12, 'NAP SAFELY', 100, C.card, 540, 1570, { back: C.teal, rot: -0.015 });
  }

  // ================= SCENE 9: the question, a bird dozing on a wire =================
  function sceneEnd(ctx, t) {
    ctx.drawImage(DUSKW(), 0, 0);
    // wire across the frame with two poles
    ctx.save(); ctx.strokeStyle = '#2b2033'; ctx.lineWidth = 10; ctx.shadowColor = 'rgba(14,10,30,0.4)'; ctx.shadowBlur = 8; ctx.shadowOffsetY = 6; ctx.beginPath(); ctx.moveTo(-20, 1080); ctx.quadraticCurveTo(540, 1160, 1100, 1080); ctx.stroke(); ctx.restore();
    const wob = Math.sin(t * 1.7) * 0.05;
    perched(ctx, 540, 1118, 1.35, { sway: wob, grip: 0.6, bob: Math.sin(t * 1.7) * 3 });
    zzz(ctx, t, 720, 760, 0.9);
    tag(ctx, t, P(20, 'dozes') - 0.12, 'ON A WIRE', 84, C.ink, 540, 300, { rot: -0.015 });
    const G = popIn(t, P(21, 'gripping') - 0.15); if (G) put(ctx, wordSpr('GRIPPING?', 110, C.card, C.red, 16), 540, 1380, { s: G.s, d: 1 + G.d, rot: -0.03 });
    tag(ctx, t, P(21, 'or') - 0.1, 'OR', 70, C.ink, 540, 1500, { rot: 0.02 });
    const B = popIn(t, P(21, 'balancing') - 0.15); if (B) put(ctx, wordSpr('BALANCING?', 110, C.card, C.teal, 16), 540, 1620, { s: B.s, d: 1 + B.d, rot: 0.025 });
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
  const SC = [{ f: sceneHook }, { p: 2, f: sceneLeg, d: 'right' }, { p: 5, f: sceneLock, d: 'up' }, { p: 8, f: sceneLetGo, d: 'right' }, { p: 9, f: sceneTwist, d: 'up' }, { p: 10, f: sceneStarling, d: 'right' }, { p: 13, f: sceneSensor, d: 'up' }, { p: 15, f: sceneBrain, d: 'right' }, { p: 17, f: sceneSpecies, d: 'up' }, { p: 20, f: sceneEnd, d: 'right' }];
  SC.forEach((s) => { if (s.p != null) s.cut = PS(s.p) - SLIDE - 0.02; });
  function explainer(ctx, Wd, Hd, t) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0);
    let i = 0; for (let k = 1; k < SC.length; k++) if (t >= SC[k].cut) i = k;
    if (i === 0) SC[0].f(ctx, t); else slideIn(ctx, t, SC[i].cut, SC[i - 1].f, SC[i].f, SC[i].d);
    finish(ctx, t);
    ctx.restore();
  }

  // ---------------- sound: paper tap per landing (recorded from the scenes), slides, clicks, big hits ----------------
  function collect() {
    const out = []; REC = out; const cv = H.layer(54, 96), c = cv.getContext('2d');
    try { SC.forEach((sc, i) => { const a = i ? sc.cut : 0, b = i + 1 < SC.length ? SC[i + 1].cut + SLIDE : DURATION; for (let k = 0; k <= 8; k++) { c.setTransform(1, 0, 0, 1, 0, 0); c.save(); c.scale(0.05, 0.05); sc.f(c, a + (b - a) * (k / 8) + 0.01); c.restore(); } }); } catch (e) {}
    REC = null; const seen = new Set(), res = []; out.sort((x, y) => x - y).forEach((e) => { const key = Math.round(e * 25); if (seen.has(key) || e < 0 || e > DURATION) return; seen.add(key); res.push(e); }); return res;
  }
  function scoreSound(k) {
    const card = (t, g = 1, p = 0, f = 1, minor = true) => { k.noise(t, { dur: 0.045, filter: 'bandpass', f: 1100 * f, q: 0.9, gain: 0.26 * g, a: 0.001, pan: p, minor }); k.noise(t, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 650, gain: 0.3 * g, a: 0.002, pan: p, minor }); k.tone(t, { f: [[0, 160 * f], [0.07, 85]], dur: 0.09, gain: 0.16 * g, pan: p, minor }); };
    const layer = (t, d, g = 1) => { k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 260], [d * 0.5, 620], [d, 300]], q: 0.6, gain: 0.16 * g, a: d * 0.45, pan: 0.15 }); k.noise(t + 0.05, { dur: d, color: 'brown', filter: 'lowpass', f: 380, gain: 0.14 * g, a: d * 0.5, pan: -0.15 }); };
    const hit = (t, g = 1) => { k.play('impact', t, { gain: 0.9 * g }); k.play('thud', t, { gain: 0.6 * g, f: 110 }); };
    collect().forEach((t) => card(t, 0.7, 0, 1.15));
    SC.forEach((s) => { if (s.cut != null) { layer(s.cut, SLIDE + 0.1); k.play('whoosh', s.cut, { dur: SLIDE, gain: 0.4 }); } });
    hit(P(0, 'never') - 0.05, 0.75);
    k.play('ding', P(1, 'why'), { f: 'E5', gain: 0.32 });
    k.play('tape', P(3, 'pull') - 0.05, { dur: 0.6, gain: 0.5 });
    k.play('paper', P(4, 'curls'), { dur: 0.5, gain: 0.6 });
    const c0 = P(6, 'catch') - 0.1; for (let i = 0; i < 4; i++) k.play('click', c0 + 0.08 + i * 0.07, { gain: 0.55 - i * 0.08 });
    k.play('tock', P(6, 'zip'), { gain: 0.45 });
    k.play('swish', P(8, 'stands'), { gain: 0.5 });
    hit(P(9, 'twist') - 0.05, 0.9); k.play('sparkle', P(9, 'twist') + 0.1, { n: 5, gain: 0.4 });
    k.play('shutter', P(10, 'filmed'), { gain: 0.5 });
    k.play('error', P(11, 'lock'), { gain: 0.35 });
    k.play('ding', P(14, 'hips'), { f: 'G5', gain: 0.3 }); k.play('ding', P(14, 'ears'), { f: 'C6', gain: 0.25 });
    k.play('pop', P(16, 'eye'), { gain: 0.5, f: 720 });
    hit(P(18, 'half') - 0.05, 0.7);
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PE(21) + 0.1 + i * 0.09, { f, gain: 0.38 - i * 0.04, pan: (i - 1) * 0.25 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); ctx.drawImage(NIGHT(), 0, 0); shadowDraw(ctx, starsSpr(), 0, 0, 0.25);
    put(ctx, branchSpr(1400, 7), 540, 1240, { d: 1.4 }); perched(ctx, 520, 1238, 1.45, {});
    put(ctx, wordSpr('ASLEEP', 170, C.ink, C.card, 22), 540, 430, { d: 1.6, rot: -0.03 });
    put(ctx, wordSpr('NO FALL?', 160, C.coral, C.card, 22), 540, 650, { d: 1.6, rot: 0.02 });
    finish(ctx, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
