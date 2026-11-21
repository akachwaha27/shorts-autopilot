// ================= Cut-Paper Diorama, vertical 1080x1920: "Why do frogs blink when they swallow?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":2.72,"text":"Frogs actually swallow with their eyeballs.","words":[["frogs",0.25],["actually",0.58],["swallow",1.12],["with",1.58],["their",1.85],["eyeballs",2.18]]},{"s":3.1,"e":4.95,"text":"You've just never noticed why.","words":[["youve",3.1],["just",3.48],["never",3.79],["noticed",4.18],["why",4.72]]},{"s":5.43,"e":7.15,"text":"Watch a frog gulp down a cricket,","words":[["watch",5.43],["a",5.76],["frog",5.82],["gulp",6.09],["down",6.35],["a",6.62],["cricket",6.68]]},{"s":7.63,"e":8.97,"text":"and its eyes squeeze shut","words":[["and",7.63],["its",7.82],["eyes",8.01],["squeeze",8.27],["shut",8.71]]},{"s":8.97,"e":10.7,"text":"and sink right into its head.","words":[["and",8.97],["sink",9.2],["right",9.5],["into",9.87],["its",10.17],["head",10.4]]},{"s":11.06,"e":12.22,"text":"That's not a blink.","words":[["thats",11.06],["not",11.48],["a",11.73],["blink",11.81]]},{"s":12.6,"e":15.01,"text":"A frog's eye sockets are open underneath,","words":[["a",12.6],["frogs",12.67],["eye",13.04],["sockets",13.26],["are",13.77],["open",13.99],["underneath",14.28]]},{"s":15.46,"e":17.21,"text":"with no solid bone floor.","words":[["with",15.46],["no",15.81],["solid",15.98],["bone",16.42],["floor",16.77]]},{"s":17.59,"e":19.93,"text":"So muscles yank each eyeball down,","words":[["so",17.59],["muscles",17.76],["yank",18.34],["each",18.68],["eyeball",19.01],["down",19.6]]},{"s":20.38,"e":21.78,"text":"into the roof of its mouth.","words":[["into",20.38],["the",20.65],["roof",20.85],["of",21.11],["its",21.25],["mouth",21.45]]},{"s":22.13,"e":24.79,"text":"Now those eyes press on the bug like two thumbs,","words":[["now",22.13],["those",22.34],["eyes",22.69],["press",22.97],["on",23.32],["the",23.46],["bug",23.67],["like",23.88],["two",24.16],["thumbs",24.37]]},{"s":24.9,"e":26.92,"text":"shoving it back toward the throat.","words":[["shoving",24.9],["it",25.41],["back",25.55],["toward",25.84],["the",26.27],["throat",26.49]]},{"s":27.32,"e":28.16,"text":"Why bother?","words":[["why",27.32],["bother",27.6]]},{"s":28.69,"e":29.84,"text":"Frogs don't chew.","words":[["frogs",28.69],["dont",29.13],["chew",29.48]]},{"s":30.22,"e":31.7,"text":"Their tiny teeth only grip,","words":[["their",30.22],["tiny",30.56],["teeth",30.83],["only",31.17],["grip",31.43]]},{"s":32.11,"e":33.67,"text":"so dinner goes down whole.","words":[["so",32.11],["dinner",32.26],["goes",32.7],["down",33.0],["whole",33.3]]},{"s":34.15,"e":36.58,"text":"Scientists tested this on leopard frogs.","words":[["scientists",34.15],["tested",34.86],["this",35.29],["on",35.58],["leopard",35.72],["frogs",36.22]]},{"s":36.92,"e":39.5,"text":"With those eye muscles switched off,","words":[["with",36.92],["those",37.27],["eye",37.7],["muscles",37.95],["switched",38.56],["off",39.24]]},{"s":39.59,"e":42.26,"text":"each cricket took 74 percent more swallows.","words":[["each",39.59],["cricket",39.89],["took",40.41],["74",40.7],["percent",40.85],["more",41.37],["swallows",41.67]]},{"s":42.66,"e":44.54,"text":"About four gulps instead of two.","words":[["about",42.66],["four",43.02],["gulps",43.31],["instead",43.67],["of",44.18],["two",44.33]]},{"s":44.91,"e":46.75,"text":"So a frog's eyes spot the bug,","words":[["so",44.91],["a",45.07],["frogs",45.16],["eyes",45.58],["spot",45.91],["the",46.24],["bug",46.5]]},{"s":47.12,"e":48.36,"text":"then help push it down.","words":[["then",47.12],["help",47.39],["push",47.67],["it",47.95],["down",48.09]]},{"s":48.71,"e":50.27,"text":"Next time a frog blinks at you,","words":[["next",48.71],["time",48.97],["a",49.23],["frog",49.29],["blinks",49.55],["at",49.94],["you",50.07]]},{"s":50.67,"e":51.76,"text":"is it winking,","words":[["is",50.67],["it",50.87],["winking",51.06]]},{"s":51.87,"e":52.28,"text":"or eating?","words":[["or",51.87],["eating",51.97]]}];
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
    blk: '#26221f', green: '#5fae6a', frog: '#6aa84f', frogD: '#477d34', frogL: '#9cc97a', belly: '#f1e6b8', iris: '#e9b53c',
    pupil: '#1d1a18', pink: '#e88f8f', pinkD: '#c8606a', cavity: '#7c2f3c', bone: '#efe4cc', boneD: '#d8c7a4', muscle: '#d4565c',
    cricket: '#7a5230', cricketD: '#4e321c', pad: '#4f9a5b', padD: '#3b7a46', water: '#3d7f95', purple: '#7b5ea7', spot: '#2f5a2a' };

  const stamp = (ctx, t, st, str, px, x, y, rot, back = C.red) => { if (REC && st > 0) REC.push(st); const u = H.clamp((t - st) / 0.22); if (u <= 0) return; const sc = 1.7 - 0.7 * H.ease.out(u); put(ctx, wordSpr(str, px, C.card, back, 18), x, y, { s: sc, rot, d: 0.3 + (1 - u) * 3, a: H.clamp(u * 3) }); };
  const tagU = (ctx, t, st, until, str, px, col, x, y, o = {}) => {
    const A = dropIn(t, st, 0.35, o.dist || 60); if (!A) return false;
    const f = until ? 1 - H.clamp((t - until) / 0.22) : 1; if (f <= 0) return false;
    put(ctx, wordSpr(str, px, col, o.back || C.card, o.bw || 14), x, y + A.dy - (1 - f) * 40, { s: A.s * (o.s || 1), d: (o.d ?? 0.8) + A.d + (1 - f) * 2, rot: o.rot || 0, a: A.a * f });
    return true;
  };
  // cut letters dropped one by one (headline)
  const cutTitle = (ctx, t, st, str, px, cx, y, cols = [C.coral, C.gold, C.teal], step = 0.045) => {
    const sp = 6, tot = measure(str, AF(px)) + str.length * sp; let x = cx - tot / 2, i = 0;
    for (const ch of str) { const w = measure(ch, AF(px)); if (ch !== ' ') { const A = dropIn(t, st + i * step, 0.36, 80); if (A) put(ctx, wordSpr(ch, px, cols[i % cols.length], C.cream, 16), x + w / 2, y + A.dy, { s: A.s, d: 0.8 + A.d, rot: (H.rng(i * 7 + px)() - 0.5) * 0.12 }); i++; } x += w + sp; }
  };
  const lin = (t, a, b) => H.clamp((t - a) / (b - a));
  const pulse = (t, at, du = 0.35) => { const u = (t - at) / du; return u > 0 && u < 1 ? Math.sin(u * Math.PI) : 0; };

  // ---------------- frog parts ----------------
  // eye: green bump, gold iris, black horizontal pupil, lid that closes from the top (clipped to the eye)
  const eyeBump = (r) => cache('bump' + r, () => paperize(r * 2.8 + 20, r * 2.8 + 20, (c) => { c.fillStyle = C.frog; blob(c, circPts(H.rng(r), r * 1.4 + 10, r * 1.4 + 10, r * 1.32, 14, 0.7)); }, { seed: 300 + r }));
  const irisS = (r) => cache('iris' + r, () => paperize(r * 2 + 16, r * 2 + 16, (c) => { c.fillStyle = C.iris; blob(c, circPts(H.rng(r + 1), r + 8, r + 8, r, 12, 0.5)); c.fillStyle = '#c98f2a'; for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU; c.fillRect(r + 8 + Math.cos(a) * r * 0.62 - 3, r + 8 + Math.sin(a) * r * 0.62 - 3, 6, 6); } }, { seed: 310 + r }));
  const pupilS = (r) => cache('pup' + r, () => paperize(r * 1.5 + 16, r * 0.9 + 16, (c) => { c.fillStyle = C.pupil; blob(c, ellPts(H.rng(r + 2), r * 0.75 + 8, r * 0.45 + 8, r * 0.7, r * 0.38, 0, 0.4)); c.fillStyle = 'rgba(255,255,255,0.85)'; c.beginPath(); c.arc(r * 0.45 + 8, r * 0.3 + 8, r * 0.13, 0, TAU); c.fill(); }, { seed: 320 + r }));
  const lidS = (r) => cache('lid' + r, () => paperize(r * 2.4 + 16, r * 2.4 + 16, (c) => { c.fillStyle = C.frogD; blob(c, circPts(H.rng(r + 3), r * 1.2 + 8, r * 1.2 + 8, r * 1.18, 12, 0.6)); c.fillStyle = C.frog; blob(c, circPts(H.rng(r + 4), r * 1.2 + 8, r * 1.2 + 8 - 6, r * 1.1, 12, 0.6)); }, { seed: 330 + r }));
  function eye(ctx, x, y, r, o = {}) {
    const close = H.clamp(o.close || 0), lk = o.look || [0, 0];
    if (o.bump !== false) put(ctx, eyeBump(r), x, y + r * 0.12, { d: 0.8 });
    put(ctx, irisS(r), x, y, { d: 0.5 });
    put(ctx, pupilS(r), x + lk[0] * r * 0.3, y + lk[1] * r * 0.2, { d: 0.3 });
    if (close > 0.01) {
      ctx.save(); ctx.beginPath(); ctx.arc(x, y, r + 7, 0, TAU); ctx.clip();
      put(ctx, lidS(r), x, y - r * 2.3 * (1 - close), { d: 0.6 }); ctx.restore();
    }
  }
  // front-view frog sheet 760x560, sits on its feet at (380, 540). eyes drawn separately (behind the head) so they can sink
  const frogFrontSpr = (spots) => cache('ff' + spots, () => { const r = H.rng(spots ? 61 : 41); return compose(760, 560, [
    [(c) => { c.fillStyle = C.frogD; blob(c, ellPts(r, 140, 440, 150, 95, -0.3, 1)); blob(c, ellPts(r, 620, 440, 150, 95, 0.3, 1)); }, 0.6],
    [(c) => { c.fillStyle = C.frog; blob(c, ellPts(r, 380, 330, 300, 210, 0, 1)); if (spots) { c.fillStyle = C.spot; const sr = H.rng(9); for (let i = 0; i < 9; i++) blob(c, ellPts(sr, sr.range(150, 610), sr.range(170, 300), sr.range(18, 34), sr.range(12, 24), sr.range(0, 3), 0.6)); } }, 1],
    [(c) => { c.fillStyle = C.belly; blob(c, ellPts(r, 380, 420, 190, 120, 0, 0.8)); }, 0.5],
    [(c) => { c.strokeStyle = C.frogD; c.lineWidth = 12; c.lineCap = 'round'; c.beginPath(); c.moveTo(150, 300); c.quadraticCurveTo(380, 390, 610, 300); c.stroke(); c.fillStyle = C.frogD; c.beginPath(); c.arc(330, 230, 9, 0, TAU); c.arc(430, 230, 9, 0, TAU); c.fill(); }, 0.2, { rim: false }],
    [(c) => { c.fillStyle = C.frog; [[250, 520], [510, 520]].forEach(([fx, fy]) => { blob(c, ellPts(r, fx, fy - 40, 34, 60, 0, 0.6)); for (let k = -1; k <= 1; k++) blob(c, circPts(r, fx + k * 30, fy, 17, 8, 0.4)); }); }, 0.8],
  ]); });
  function frogFront(ctx, x, y, s, o = {}) {
    // (x,y) = feet; head top about y - 470*s
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const sinkL = o.sinkL ?? o.sink ?? 0, sinkR = o.sinkR ?? o.sink ?? 0;
    eye(ctx, -170, -420 + sinkL * 120, 82, { close: o.closeL ?? o.close, look: o.look });
    eye(ctx, 170, -420 + sinkR * 120, 82, { close: o.closeR ?? o.close, look: o.look });
    put(ctx, frogFrontSpr(!!o.spots), 0, -280 + (o.squash || 0) * 10, { sy: 1 - (o.squash || 0) * 0.04, d: 1.2 });
    if (o.throat) { put(ctx, throatS(), 0, -95, { s: 0.6 + o.throat * 0.5, d: 0.5 }); }
    ctx.restore();
  }
  const throatS = () => cache('throat', () => paperize(260, 160, (c) => { c.fillStyle = C.belly; blob(c, ellPts(H.rng(5), 130, 80, 120, 70, 0, 0.6)); }, { seed: 341 }));
  // side-view frog sheet 820x520 facing right; eye at (560,150) drawn separately, mouth corner around (720,250)
  const frogSideSpr = () => cache('fs', () => { const r = H.rng(71); return compose(820, 520, [
    [(c) => { c.fillStyle = C.frogD; blob(c, [[120, 330], [60, 420], [150, 480], [330, 500], [380, 470], [250, 430], [230, 360]]); }, 0.7],
    [(c) => { c.fillStyle = C.frog; blob(c, cutLines(r, [[90, 300], [180, 190], [380, 150], [560, 120], [700, 170], [790, 240], [760, 290], [600, 330], [520, 400], [300, 420], [140, 400], [90, 300]], 26, 0.8)); }, 1],
    [(c) => { c.fillStyle = C.belly; blob(c, cutLines(r, [[300, 410], [520, 395], [610, 330], [760, 290], [700, 320], [560, 420], [330, 440], [300, 410]], 24, 0.6)); }, 0.4],
    [(c) => { c.strokeStyle = C.frogD; c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(790, 242); c.quadraticCurveTo(700, 270, 610, 262); c.stroke(); c.fillStyle = C.frogD; c.beginPath(); c.arc(752, 205, 7, 0, TAU); c.fill(); }, 0.2, { rim: false }],
    [(c) => { c.fillStyle = C.frogL; blob(c, [[520, 390], [560, 470], [600, 500], [640, 495], [590, 460], [565, 390]]); }, 0.8],
    [(c) => { c.fillStyle = C.frogD; blob(c, [[150, 300], [100, 380], [190, 440], [260, 380]]); }, 0.6],
  ]); });
  function frogSide(ctx, x, y, s, o = {}) {
    // (x,y) = sheet centre
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    eye(ctx, 150, -170 + (o.sink || 0) * 80, 60, { close: o.close, look: [1, 0] });
    put(ctx, frogSideSpr(), 0, 0, { d: 1.2 });
    if (o.throat) put(ctx, throatS(), 230, 75, { s: 0.45 + o.throat * 0.35, d: 0.4 });
    ctx.restore();
  }
  // cricket sheet 300x180 facing right
  const cricketSpr = () => cache('cricket', () => { const r = H.rng(81); return compose(300, 180, [
    [(c) => { c.strokeStyle = C.cricketD; c.lineWidth = 5; c.lineCap = 'round'; c.beginPath(); c.moveTo(250, 80); c.quadraticCurveTo(300, 20, 296, 6); c.moveTo(245, 84); c.quadraticCurveTo(290, 50, 298, 40); c.stroke(); c.lineWidth = 8; c.beginPath(); c.moveTo(140, 110); c.lineTo(170, 160); c.moveTo(190, 112); c.lineTo(205, 160); c.stroke(); }, 0.3, { rim: false }],
    [(c) => { c.fillStyle = C.cricketD; blob(c, [[60, 100], [20, 40], [40, 30], [110, 100]]); blob(c, [[20, 40], [10, 165], [30, 165], [42, 50]]); }, 0.6],
    [(c) => { c.fillStyle = C.cricket; blob(c, ellPts(r, 150, 95, 105, 38, -0.05, 0.6)); blob(c, circPts(r, 248, 88, 30, 8, 0.4)); }, 0.9],
    [(c) => { c.fillStyle = '#a77a4a'; blob(c, ellPts(r, 130, 82, 80, 18, -0.08, 0.4)); c.fillStyle = C.pupil; c.beginPath(); c.arc(258, 80, 6, 0, TAU); c.fill(); }, 0.3],
  ]); });
  const padSpr = () => cache('pad', () => paperize(820, 260, (c) => { const r = H.rng(91); c.fillStyle = C.pad; blob(c, ellPts(r, 410, 130, 400, 115, 0, 1)); c.globalCompositeOperation = 'destination-out'; c.beginPath(); c.moveTo(410, 130); c.lineTo(820, 60); c.lineTo(820, 140); c.closePath(); c.fill(); c.globalCompositeOperation = 'source-over'; c.strokeStyle = C.padD; c.lineWidth = 6; for (let i = 0; i < 7; i++) { const a = Math.PI * 0.15 + i * 0.27 * Math.PI; c.beginPath(); c.moveTo(410, 130); c.lineTo(410 + Math.cos(a) * 330, 130 + Math.sin(a) * 95); c.stroke(); } }, { seed: 92 }));
  const pondBG = (k, sky, sun) => dio(k, sky, sun, '#7fae86', '#5c9670', C.water, 1240);
  const ripples = (ctx, t, seed) => { const r = H.rng(seed); for (let i = 0; i < 5; i++) { const x = r.range(80, 1000), y = r.range(1330, 1600), u = (t * 0.35 + r()) % 1; ctx.save(); ctx.globalAlpha = 0.35 * (1 - u); ctx.strokeStyle = '#d8eef0'; ctx.lineWidth = 5; ctx.beginPath(); ctx.ellipse(x, y, 30 + u * 90, 8 + u * 22, 0, 0, TAU); ctx.stroke(); ctx.restore(); } };
  const reeds = () => cache('reeds', () => { const r = H.rng(51); return paperize(W0, 700, (c) => { for (let i = 0; i < 16; i++) { const x = i < 8 ? r.range(-20, 230) : r.range(850, 1100), h = r.range(300, 620); c.fillStyle = r() < 0.5 ? '#3f7a4a' : '#55905a'; blob(c, [[x - 10, 700], [x + r.range(-40, 40), 700 - h], [x + 12, 700]]); if (r() < 0.4) { c.fillStyle = '#7a4b2c'; blob(c, ellPts(r, x + 4, 700 - h * 0.8, 14, 50, 0, 0.5)); } } }, { seed: 52 }); });

  // ---------------- scenes ----------------
  // 0 hook: pond, frog front-on; eyes blink-sink on "eyeballs"
  function sceneHook(ctx, t) {
    ctx.drawImage(pondBG('hook', '#a6d8cf', '#f6d77a'), 0, 0); put(ctx, reeds(), 540, 1050, { d: 0.6 }); ripples(ctx, t, 3);
    const zoom = 1 + 0.06 * H.ease.inOut(lin(t, 0, 5.4));
    ctx.save(); ctx.translate(540, 1150); ctx.scale(zoom, zoom); ctx.translate(-540, -1150);
    put(ctx, padSpr(), 540, 1430, { d: 1 });
    const g = P(0, 'eyeballs'), sink = Math.max(pulse(t, g - 0.05, 0.9), pulse(t, P(1, 'why') - 0.1, 0.8) * 0.6);
    frogFront(ctx, 540, 1440, 1.05, { sink, close: H.clamp(sink * 2), look: [Math.sin(t * 0.8) * 0.4, 0], throat: sink });
    ctx.restore();
    cutTitle(ctx, t, P(0, 'swallow') - 0.1, 'SWALLOW', 128, 540, 330);
    cutTitle(ctx, t, g - 0.15, 'WITH EYES?', 112, 540, 500, [C.teal, C.gold, C.coral], 0.035);
    tag(ctx, t, P(1, 'noticed') - 0.1, 'YOU NEVER SAW IT', 52, C.ink, 540, 1590, { rot: -0.02 });
  }
  // 1 a frog gulps a cricket; eyes squeeze shut and sink; "not a blink"
  function sceneGulp(ctx, t) {
    ctx.drawImage(pondBG('gulp', '#b6dcc3', '#f8e08e'), 0, 0); put(ctx, reeds(), 540, 1050, { d: 0.6 }); ripples(ctx, t, 8);
    const pan = H.ease.inOut(lin(t, PS(2) - 0.5, PS(3))) * 0;
    put(ctx, padSpr(), 470, 1300 + pan, { s: 1.05, d: 1 });
    const gulp = P(2, 'gulp'), shut = P(3, 'shut') - 0.1, sinkT = P(4, 'sink') - 0.1;
    const close = H.clamp(lin(t, shut - 0.15, shut + 0.1)) * (1 - lin(t, PE(5) + 0.1, PE(5) + 0.35)) , sink = H.ease.out(lin(t, sinkT, sinkT + 0.5)) * (1 - lin(t, PE(5) + 0.1, PE(5) + 0.4));
    const fx = 420, fy = 1080, s = 1.05;
    // tongue + cricket
    const tg = pulse(t, gulp - 0.05, 0.45), caught = t > gulp + 0.17;
    const mx = fx + (790 - 410) * s, my = fy + (245 - 260) * s, cx0 = 900, cy0 = 860;
    if (!caught) { const hop = Math.abs(Math.sin(t * 3.2)) * 20; put(ctx, cricketSpr(), cx0, cy0 - hop, { s: 0.75, flip: 1, d: 0.8, rot: -0.1 }); }
    if (tg > 0) { const ex = mx + (cx0 - 40 - mx) * tg, ey = my + (cy0 - my) * tg; ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.pinkD; ctx.lineWidth = 34; ctx.shadowColor = 'rgba(14,10,30,0.4)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 6; ctx.beginPath(); ctx.moveTo(mx, my); ctx.quadraticCurveTo((mx + ex) / 2, Math.min(my, ey) - 60, ex, ey); ctx.stroke(); ctx.shadowColor = 'transparent'; ctx.strokeStyle = C.pink; ctx.lineWidth = 22; ctx.stroke(); ctx.restore(); if (caught) put(ctx, cricketSpr(), ex + 20, ey, { s: 0.75 * (0.4 + tg * 0.6), d: 0.5 }); }
    const sw = caught ? Math.min(1, lin(t, gulp + 0.4, gulp + 1.2)) : 0;
    frogSide(ctx, fx + 410 * s - 410 * s + 0, fy, s, { close, sink, throat: Math.max(pulse(t, sinkT, 1.0), sw * 0.3) });
    tag(ctx, t, gulp - 0.1, 'GULP!', 96, C.coral, 860, 640, { rot: 0.06, back: C.card });
    tagU(ctx, t, shut - 0.1, PS(5) - 0.1, 'EYES SHUT', 64, C.ink, 330, 520, { rot: -0.03 });
    tagU(ctx, t, sinkT, PS(5) - 0.1, 'AND SINK!', 64, C.card, 330, 640, { back: C.coral, rot: 0.03 });
    stamp(ctx, t, P(5, 'not') - 0.05, 'NOT A BLINK', 104, 540, 470, -0.05);
    if (t > P(5, 'blink')) { const u = H.ease.back(H.clamp((t - P(5, 'blink')) / 0.3)); put(ctx, crossSpr(), fx + 150 * s, fy - 115 * s + sink * 70, { s: u * 1.1, d: 1 }); }
  }
  // 2 cross-section of the head: open socket, no bone floor, muscles yank the eye into the mouth, eyes shove the bug
  const xsBG = () => flat('xs', '#f2d9a8', '#ead0a0', 21);
  const headSpr = () => cache('head', () => { const r = H.rng(111); return compose(W0, 900, [
    [(c) => { c.fillStyle = C.frog; blob(c, cutLines(r, [[40, 260], [200, 170], [400, 150], [460, 130], [640, 130], [720, 160], [900, 230], [1050, 330], [1060, 420], [1000, 520], [880, 600], [600, 680], [300, 700], [40, 690], [40, 260]], 30, 0.8)); }, 1.1],
    // cutaway window
    [(c) => { c.fillStyle = '#e9b9a8'; blob(c, cutLines(r, [[70, 250], [380, 200], [930, 280], [1010, 400], [900, 560], [560, 630], [70, 640], [70, 250]], 28, 0.6)); }, 0.3],
    [(c) => { c.fillStyle = C.cavity; blob(c, cutLines(r, [[80, 420], [300, 380], [700, 380], [960, 420], [880, 520], [560, 560], [80, 560], [80, 420]], 28, 0.6)); }, 0.2],
    // lower jaw
    [(c) => { c.fillStyle = C.frogD; blob(c, cutLines(r, [[60, 560], [560, 575], [900, 535], [1000, 520], [880, 610], [600, 690], [300, 705], [60, 700], [60, 560]], 28, 0.6)); c.fillStyle = C.belly; blob(c, cutLines(r, [[90, 640], [560, 640], [860, 600], [600, 690], [300, 705], [90, 700]], 28, 0.6)); }, 0.6],
    // throat tube going back-left
    [(c) => { c.fillStyle = '#5a1f2a'; blob(c, cutLines(r, [[0, 440], [130, 430], [140, 540], [0, 560]], 22, 0.5)); }, 0.1, { rim: false }],
  ]); });
  // skull: bone strip above the mouth with a big gap (the socket has no floor)
  const skullSpr = () => cache('skull', () => { const r = H.rng(121); return compose(W0, 400, [
    [(c) => { c.fillStyle = C.bone; blob(c, cutLines(r, [[60, 250], [400, 230], [400, 300], [60, 320]], 24, 0.6)); blob(c, cutLines(r, [[700, 230], [940, 270], [950, 320], [700, 300]], 24, 0.6)); blob(c, cutLines(r, [[380, 230], [405, 175], [440, 170], [430, 240]], 20, 0.5)); blob(c, cutLines(r, [[660, 240], [650, 170], [690, 165], [720, 240]], 20, 0.5)); }, 0.7],
    [(c) => { c.fillStyle = C.boneD; for (let i = 0; i < 6; i++) blob(c, circPts(r, r.range(90, 380), r.range(260, 300), 7, 5, 0.3)); }, 0.1, { rim: false }],
  ]); });
  function sceneXS(ctx, t) {
    ctx.drawImage(xsBG(), 0, 0);
    const HY = 640; // head sheet top
    // camera: start wide, push in on the socket for the yank
    const z = 1 + 0.1 * H.ease.inOut(lin(t, PS(8) - 0.3, PS(8) + 0.6)) - 0.1 * H.ease.inOut(lin(t, PS(10) - 0.3, PS(10) + 0.5));
    ctx.save(); ctx.translate(540, 1050); ctx.scale(z, z); ctx.translate(-540, -1050);
    ctx.drawImage(headSpr(), 0, HY);
    const yankT = P(8, 'yank') - 0.1, intoT = P(9, 'into') - 0.1;
    const dn = H.ease.inOut(lin(t, yankT, P(9, 'mouth')));
    const pressT = P(10, 'press') - 0.1, shove = H.ease.inOut(lin(t, P(11, 'shoving') - 0.1, P(11, 'throat') + 0.1));
    const ex = 545, ey = HY + 140 + dn * 220, er = 92;
    // muscles: strips from the eye down to the skull base, they thicken as they pull
    const mu = H.clamp(lin(t, P(8, 'muscles') - 0.1, P(8, 'muscles') + 0.3));
    if (mu > 0) { ctx.save(); ctx.globalAlpha = mu; ctx.lineCap = 'round'; [[-1, 420], [1, 670]].forEach(([sd, bx]) => { const w = 18 + dn * 14 + pulse(t, yankT, 0.4) * 10; ctx.strokeStyle = '#a63c44'; ctx.lineWidth = w + 6; ctx.beginPath(); ctx.moveTo(ex + sd * er * 0.55, ey + er * 0.2); ctx.quadraticCurveTo(ex + sd * er * 1.1, (ey + HY + 330) / 2 + 30, bx, HY + 330); ctx.stroke(); ctx.strokeStyle = C.muscle; ctx.lineWidth = w; ctx.stroke(); }); ctx.restore(); }
    ctx.drawImage(skullSpr(), 0, HY - 40);
    // cricket inside the mouth (from scene 10 on), shoved back toward the throat
    const cIn = H.clamp(lin(t, pressT - 0.6, pressT - 0.2));
    if (cIn > 0) put(ctx, cricketSpr(), 700 - shove * 520, HY + 470 + shove * 10, { s: 0.85, d: 0.4, a: cIn, rot: -0.04 });
    // eye (it sinks through the gap); roof-of-mouth lining hugs its underside
    eye(ctx, ex, ey, er, { bump: false, close: 0, look: [0.6, 0.4 * dn] });
    if (dn > 0.02) { ctx.save(); ctx.strokeStyle = C.pink; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(380, HY + 380); ctx.quadraticCurveTo(ex - 120, HY + 380, ex - er, Math.min(ey + 10, HY + 380)); ctx.arc(ex, Math.min(ey + 10, HY + 380 + 10), er + 4, Math.PI, 0, true); ctx.quadraticCurveTo(ex + 120, HY + 380, 720, HY + 380); ctx.stroke(); ctx.restore(); }
    ctx.restore();
    // labels (outside the camera so they stay put and readable)
    tag(ctx, t, P(6, 'eye') - 0.1, 'FROG HEAD, CUT AWAY', 54, C.ink, 540, 260, { rot: -0.015 });
    tagU(ctx, t, P(6, 'open') - 0.1, PS(8) - 0.2, 'OPEN SOCKET', 64, C.card, 540, 520, { back: C.teal });
    if (t < PS(8) - 0.2) { arrow(ctx, 760, 560, 700, 640, 610, 820, H.clamp(lin(t, P(6, 'open'), P(6, 'open') + 0.4)), C.teal, 31); }
    tagU(ctx, t, P(7, 'floor') - 0.15, PS(8) - 0.2, 'NO BONE FLOOR', 64, C.card, 540, 1500, { back: C.red });
    if (t > P(7, 'no') - 0.05 && t < PS(8) - 0.2) put(ctx, crossSpr(), 545, HY + 300, { s: 0.7 * H.ease.back(H.clamp((t - P(7, 'no') + 0.05) / 0.3)), d: 1 });
    tagU(ctx, t, P(8, 'muscles') - 0.1, PS(10) - 0.2, 'MUSCLES PULL', 60, C.card, 280, 470, { back: C.muscle, rot: -0.03 });
    tagU(ctx, t, P(9, 'roof') - 0.1, PS(10) - 0.2, 'ROOF OF MOUTH', 60, C.ink, 540, 1500, { rot: 0.02 });
    if (t > yankT && t < PS(10) - 0.2) arrow(ctx, 860, 600, 900, 760, 680, 900, H.clamp(lin(t, yankT, P(8, 'down') + 0.2)), C.coral, 33);
    tagU(ctx, t, P(10, 'thumbs') - 0.15, PE(11) + 0.6, 'LIKE 2 THUMBS', 64, C.card, 540, 470, { back: C.coral, rot: -0.02 });
    if (t > P(11, 'shoving') - 0.1) arrow(ctx, 700, 1290, 450, 1360, 200, 1250, H.clamp(lin(t, P(11, 'shoving') - 0.1, P(11, 'throat'))), C.coral, 35);
    tag(ctx, t, P(11, 'throat') - 0.1, 'THROAT', 76, C.card, 230, 1500, { back: C.purple, rot: 0.03 });
  }
  // 3 why bother: frogs don't chew; tiny teeth only grip; down whole
  const mouthSpr = () => cache('mouth', () => { const r = H.rng(131); return compose(900, 560, [
    [(c) => { c.fillStyle = C.frog; blob(c, ellPts(r, 450, 200, 430, 190, 0, 1)); }, 1],
    [(c) => { c.fillStyle = C.cavity; blob(c, ellPts(r, 450, 330, 380, 200, 0, 0.8)); }, 0.3],
    [(c) => { c.fillStyle = C.pink; blob(c, ellPts(r, 450, 430, 240, 90, 0, 0.6)); }, 0.4],
    [(c) => { c.fillStyle = C.frogD; blob(c, cutLines(r, [[40, 360], [450, 560], [860, 360], [880, 420], [450, 620], [20, 420]], 30, 0.6)); }, 0.8],
  ]); });
  function sceneWhy(ctx, t) {
    ctx.drawImage(flat('why', '#f6cf6a', '#f2bd4c', 23), 0, 0);
    cutTitle(ctx, t, P(12, 'why') - 0.1, 'WHY BOTHER?', 120, 540, 330, [C.ink, C.coral, C.ink]);
    const m0 = P(13, 'frogs') - 0.15, A = dropIn(t, m0, 0.45, 120);
    if (A) {
      const my = 960 + A.dy;
      put(ctx, mouthSpr(), 540, my, { s: A.s, d: 1 + A.d });
      // tiny teeth along the upper jaw only, they appear on "teeth"
      const tt = H.clamp(lin(t, P(14, 'teeth') - 0.1, P(14, 'teeth') + 0.3));
      if (tt > 0) { ctx.save(); ctx.fillStyle = C.card; ctx.shadowColor = 'rgba(14,10,30,0.4)'; ctx.shadowBlur = 4; ctx.shadowOffsetY = 2; for (let i = 0; i < 22; i++) { const u = i / 21, a = Math.PI * (1.05 - u * 1.1), x = 540 + Math.cos(a) * 370 * 0.98, y = my - 100 + 170 - Math.abs(Math.sin(a)) * 0 + (1 - Math.sin(a * 1)) * 0; if (i / 22 > tt) break; const yy = my + 130 - Math.sin(Math.PI * u) * 150; ctx.beginPath(); ctx.moveTo(x - 9, yy); ctx.lineTo(x, yy + 18); ctx.lineTo(x + 9, yy); ctx.fill(); } ctx.restore(); }
      // the bug goes down whole
      const wh = H.ease.in(lin(t, P(15, 'down') - 0.2, P(15, 'whole') + 0.3));
      if (t > P(15, 'dinner') - 0.1) put(ctx, cricketSpr(), 540, my + 30 + wh * 160, { s: 0.9 * (1 - wh * 0.6), d: 0.5, a: 1 - H.clamp((wh - 0.8) * 5) });
    }
    stamp(ctx, t, P(13, 'chew') - 0.05, 'NO CHEWING', 96, 540, 560, -0.04);
    tagU(ctx, t, P(14, 'teeth') - 0.1, PS(15) - 0.15, 'TINY TEETH', 64, C.ink, 300, 1420, { rot: -0.03 });
    tagU(ctx, t, P(14, 'grip') - 0.1, PS(15) - 0.15, 'JUST GRIP', 64, C.card, 780, 1420, { back: C.teal, rot: 0.03 });
    tag(ctx, t, P(15, 'whole') - 0.1, 'DOWN WHOLE', 100, C.card, 540, 1500, { back: C.coral, rot: -0.02 });
  }
  // 4 the leopard frog test: eye muscles off -> 74% more swallows, 4 gulps instead of 2
  const switchSpr = (on) => cache('sw' + on, () => compose(300, 160, [
    [(c) => { c.fillStyle = on ? C.green : '#9a9aa6'; blob(c, rect(H.rng(3), 10, 20, 290, 140, 20, 0.5)); }, 0.6],
    [(c) => { c.fillStyle = C.card; blob(c, circPts(H.rng(4), on ? 220 : 80, 80, 52, 10, 0.5)); }, 0.8],
  ]));
  const gulpDot = () => cache('gdot', () => paperize(150, 150, (c) => { c.fillStyle = C.gold; blob(c, circPts(H.rng(7), 75, 75, 66, 10, 0.6)); c.fillStyle = C.ink; c.font = AF(40); c.textAlign = 'center'; c.fillText('GULP', 75, 90); }, { seed: 151 }));
  function sceneLab(ctx, t) {
    ctx.drawImage(flat('lab', '#cfd8ea', '#bcc8e2', 25), 0, 0);
    const st = PS(16);
    tag(ctx, t, P(16, 'scientists') - 0.1, 'THE TEST', 76, C.card, 540, 260, { back: C.ink });
    // spotted leopard frog, slides up to the top half after the test starts
    const up = H.ease.inOut(lin(t, PS(18) - 0.4, PS(18) + 0.1));
    const A = dropIn(t, P(16, 'leopard') - 0.3, 0.45, 120);
    if (A) frogFront(ctx, 540, 1150 + A.dy - up * 330, 0.72 - up * 0.2, { spots: true, close: pulse(t, 38.3, 0.5), look: [Math.sin(t) * 0.5, 0] });
    tagU(ctx, t, P(16, 'leopard') - 0.1, PS(18) - 0.4, 'LEOPARD FROG', 70, C.card, 540, 1290, { back: C.green, rot: -0.02 });
    // eye-muscle switch flips off
    const sw = t > P(17, 'off') - 0.05;
    if (t > P(17, 'eye') - 0.2 && t < PS(18) - 0.3) { const B = dropIn(t, P(17, 'eye') - 0.2, 0.35, 60); put(ctx, switchSpr(!sw), 540, 1480 + (B ? B.dy : 0), { d: 0.8 }); tag(ctx, t, P(17, 'muscles') - 0.1, 'EYE MUSCLES', 54, C.ink, 540, 1360); }
    if (t > PS(18) - 0.3) {
      put(ctx, switchSpr(false), 880, 360, { s: 0.6, d: 0.6 });
      const n = Math.round(74 * H.ease.out(lin(t, P(18, '74') - 0.1, P(18, '74') + 0.5)));
      if (t > P(18, '74') - 0.1) centerRow(ctx, '+' + n + '%', 1000, 210, C.coral);
      tag(ctx, t, P(18, 'swallows') - 0.1, 'MORE SWALLOWS', 68, C.ink, 540, 1170);
    }
    if (t > PS(19) - 0.1) {
      const row = (y, k, at, lab, col) => { tag(ctx, t, at - 0.1, lab, 46, C.card, 175, y, { back: col }); for (let i = 0; i < k; i++) { const p = popIn(t, at + i * 0.12); if (p) put(ctx, gulpDot(), 450 + i * 160, y, { s: p.s * 0.95, d: 0.6 + p.d }); } };
      row(1330, 4, P(19, 'four') - 0.1, 'EYES OFF', C.red);
      row(1520, 2, P(19, 'two') - 0.1, 'NORMAL', C.green);
    }
  }
  // 5 end: eyes spot the bug, then push it down; "winking, or eating?"
  function sceneEnd(ctx, t) {
    ctx.drawImage(pondBG('end', '#f4c49a', '#fbe3a4'), 0, 0); put(ctx, reeds(), 540, 1050, { d: 0.6 }); ripples(ctx, t, 13);
    put(ctx, padSpr(), 540, 1430, { d: 1 });
    const spot = P(20, 'spot') - 0.1, push = P(21, 'push') - 0.1, wink = P(23, 'winking') - 0.1, eat = P(24, 'eating') - 0.15;
    const bugX = 540 + Math.sin(t * 1.3) * 260, bugY = 640 + Math.sin(t * 2.1) * 40;
    const look = t < push ? [H.clamp((bugX - 540) / 260, -1, 1), -0.8] : [0, 0];
    const sink = Math.max(H.ease.out(lin(t, push, push + 0.4)) * (1 - lin(t, P(21, 'down') + 0.4, P(21, 'down') + 0.8)), pulse(t, eat, 0.8));
    const closeR = Math.max(pulse(t, wink, 0.7), H.clamp(sink * 2)), closeL = H.clamp(sink * 2);
    frogFront(ctx, 540, 1440, 1.05, { look, sinkL: sink, sinkR: sink, closeL, closeR, throat: sink });
    if (t < push + 0.1) { put(ctx, cricketSpr(), bugX, bugY, { s: 0.6, d: 1.6, rot: Math.sin(t * 4) * 0.1 }); }
    if (t > spot - 0.1 && t < push) { ctx.save(); ctx.setLineDash([18, 14]); ctx.strokeStyle = 'rgba(43,45,90,0.55)'; ctx.lineWidth = 7; [[-170, -420], [170, -420]].forEach(([dx, dy]) => { ctx.beginPath(); ctx.moveTo(540 + dx * 1.05, 1440 + dy * 1.05); ctx.lineTo(bugX, bugY + 30); ctx.stroke(); }); ctx.restore(); }
    tagU(ctx, t, spot, push - 0.2, 'SPOT IT', 84, C.card, 540, 330, { back: C.teal, rot: -0.03 });
    tagU(ctx, t, push, PS(22) - 0.1, 'PUSH IT DOWN', 84, C.card, 540, 330, { back: C.coral, rot: 0.02 });
    tag(ctx, t, wink - 0.05, 'WINKING?', 100, C.ink, 330, 330, { rot: -0.05 });
    tag(ctx, t, eat - 0.05, 'EATING?', 100, C.card, 760, 480, { back: C.coral, rot: 0.04 });
    tag(ctx, t, PE(24) + 0.15, 'COMMENT BELOW', 50, C.card, 540, 1600, { back: C.ink });
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
  const SC = [{ f: sceneHook }, { p: 2, f: sceneGulp, d: 'right' }, { p: 6, f: sceneXS, d: 'up' }, { p: 12, f: sceneWhy, d: 'right' }, { p: 16, f: sceneLab, d: 'up' }, { p: 20, f: sceneEnd, d: 'right' }];
  SC.forEach((s) => { if (s.p != null) s.cut = PS(s.p) - SLIDE + 0.05; });
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
    const gulp = (t, g = 1) => { k.tone(t, { f: [[0, 320], [0.12, 110]], dur: 0.16, gain: 0.28 * g }); k.noise(t, { dur: 0.08, color: 'brown', filter: 'lowpass', f: 500, gain: 0.25 * g }); };
    const ribbit = (t) => { for (let i = 0; i < 2; i++) k.tone(t + i * 0.13, { f: [[0, 220], [0.06, 300], [0.1, 180]], dur: 0.11, gain: 0.12, minor: true }); };
    collect().forEach((t) => card(t, 0.7, 0, 1.15));
    SC.forEach((s) => { if (s.cut != null) { layer(s.cut, SLIDE + 0.1); k.play('whoosh', s.cut, { dur: SLIDE, gain: 0.4 }); } });
    ribbit(0.1); ribbit(PS(20) + 0.2);
    gulp(P(0, 'eyeballs')); k.play('pop', P(1, 'why'), { gain: 0.4, f: 620 });
    k.play('swish', P(2, 'gulp') - 0.08, { gain: 0.5, dur: 0.3 }); k.play('pop', P(2, 'gulp') + 0.15, { gain: 0.5, f: 300 });
    gulp(P(4, 'sink') - 0.05, 1.2);
    k.play('stamp', P(5, 'not') - 0.05, { gain: 0.75 }); k.play('error', P(5, 'blink'), { gain: 0.2 });
    k.play('error', P(7, 'no'), { gain: 0.22 });
    k.play('riser', P(8, 'muscles') - 0.1, { dur: P(9, 'mouth') - P(8, 'muscles') + 0.1, gain: 0.2 });
    hit(P(9, 'mouth') - 0.05, 0.55);
    k.play('swish', P(11, 'shoving') - 0.1, { gain: 0.45, dur: 1.2 }); gulp(P(11, 'throat'), 1.1);
    k.play('ding', P(11, 'throat') + 0.1, { f: 'E5', gain: 0.26 });
    k.play('pop', P(12, 'bother'), { gain: 0.4, f: 500 });
    k.play('stamp', P(13, 'chew') - 0.05, { gain: 0.75 });
    for (let i = 0; i < 8; i++) k.play('pop', P(14, 'teeth') + i * 0.04, { gain: 0.18, f: 900 + i * 60, minor: true });
    gulp(P(15, 'whole'), 1.2);
    k.play('click', P(17, 'off') - 0.03, { gain: 0.5 }); k.play('error', P(17, 'off') + 0.05, { gain: 0.16 });
    for (let i = 0; i < 10; i++) k.play('tick', P(18, '74') - 0.1 + i * 0.05, { gain: 0.2, minor: true });
    hit(P(18, '74') + 0.4, 0.6); k.play('ding', P(18, '74') + 0.4, { f: 'G5', gain: 0.3 });
    for (let i = 0; i < 4; i++) gulp(P(19, 'four') - 0.1 + i * 0.12 + 0.13, 0.5);
    for (let i = 0; i < 2; i++) gulp(P(19, 'two') - 0.1 + i * 0.12 + 0.13, 0.5);
    k.play('pop', P(20, 'spot'), { gain: 0.4, f: 700 }); gulp(P(21, 'push'), 1.1);
    k.play('pop', P(23, 'winking'), { gain: 0.45, f: 820 }); gulp(P(24, 'eating'), 1.2);
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PE(24) + 0.2 + i * 0.09, { f, gain: 0.38 - i * 0.04, pan: (i - 1) * 0.25 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); ctx.drawImage(pondBG('hook', '#a6d8cf', '#f6d77a'), 0, 0); put(ctx, reeds(), 540, 1050, { d: 0.6 });
    put(ctx, padSpr(), 540, 1430, { d: 1 }); frogFront(ctx, 540, 1440, 1.05, { sink: 0.6, close: 1, throat: 0.6 });
    put(ctx, wordSpr('EYEBALL', 160, C.card, C.ink, 22), 540, 380, { d: 1.6, rot: -0.03 });
    put(ctx, wordSpr('SWALLOW?', 150, C.card, C.coral, 22), 540, 600, { d: 1.6, rot: 0.02 });
    finish(ctx, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
