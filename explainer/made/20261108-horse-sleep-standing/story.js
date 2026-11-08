// ================= Cut-Paper Diorama, vertical 1080x1920: "Why can horses sleep standing up?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":3.14,"text":"A 500-kilo horse can sleep standing up,","words":[["a",0.25],["500kilo",0.34],["horse",1.0],["can",1.46],["sleep",1.74],["standing",2.21],["up",2.95]]},{"s":3.66,"e":5.71,"text":"and you'd never guess why it doesn't fall.","words":[["and",3.66],["youd",3.85],["never",4.11],["guess",4.43],["why",4.75],["it",4.94],["doesnt",5.07],["fall",5.45]]},{"s":6.12,"e":8.17,"text":"The trick is called the stay apparatus.","words":[["the",6.12],["trick",6.31],["is",6.63],["called",6.76],["the",7.15],["stay",7.34],["apparatus",7.59]]},{"s":8.52,"e":10.77,"text":"Tendons and ligaments brace its legs,","words":[["tendons",8.52],["and",9.03],["ligaments",9.24],["brace",9.9],["its",10.26],["legs",10.48]]},{"s":11.18,"e":13.86,"text":"so the joints lock with almost no muscle effort.","words":[["so",11.18],["the",11.32],["joints",11.52],["lock",11.94],["with",12.21],["almost",12.49],["no",12.9],["muscle",13.04],["effort",13.45]]},{"s":14.32,"e":16.19,"text":"In a back leg, the kneecap hooks","words":[["in",14.32],["a",14.47],["back",14.54],["leg",14.84],["the",15.07],["kneecap",15.29],["hooks",15.81]]},{"s":16.19,"e":17.7,"text":"over a bump on the thigh bone,","words":[["over",16.19],["a",16.45],["bump",16.52],["on",16.78],["the",16.91],["thigh",17.11],["bone",17.43]]},{"s":18.19,"e":19.56,"text":"like a latch clicking shut.","words":[["like",18.19],["a",18.44],["latch",18.5],["clicking",18.81],["shut",19.31]]},{"s":19.91,"e":21.58,"text":"The other back leg gets to rest,","words":[["the",19.91],["other",20.11],["back",20.45],["leg",20.71],["gets",20.91],["to",21.18],["rest",21.32]]},{"s":21.99,"e":24.28,"text":"and every so often it swaps sides.","words":[["and",21.99],["every",22.25],["so",22.67],["often",22.84],["it",23.26],["swaps",23.43],["sides",23.86]]},{"s":24.67,"e":25.74,"text":"But there's a catch.","words":[["but",24.67],["theres",24.88],["a",25.31],["catch",25.39]]},{"s":26.01,"e":29.48,"text":"Dreaming sleep, called REM, relaxes every muscle,","words":[["dreaming",26.01],["sleep",26.7],["called",27.14],["rem",27.66],["relaxes",27.92],["every",28.53],["muscle",28.96]]},{"s":29.75,"e":31.31,"text":"and that unlocks the legs.","words":[["and",29.75],["that",29.97],["unlocks",30.27],["the",30.79],["legs",31.01]]},{"s":31.72,"e":34.3,"text":"So for REM, a horse has to lie down,","words":[["so",31.72],["for",31.91],["rem",32.21],["a",32.51],["horse",32.61],["has",33.11],["to",33.4],["lie",33.6],["down",33.9]]},{"s":34.3,"e":37.87,"text":"about thirty to forty-five minutes a day,","words":[["about",34.3],["thirty",34.84],["to",35.49],["fortyfive",35.7],["minutes",36.68],["a",37.43],["day",37.54]]},{"s":38.3,"e":40.25,"text":"often while a buddy stands guard.","words":[["often",38.3],["while",38.66],["a",39.02],["buddy",39.09],["stands",39.46],["guard",39.89]]},{"s":40.71,"e":42.19,"text":"Miss it for a week or so,","words":[["miss",40.71],["it",41.04],["for",41.2],["a",41.45],["week",41.53],["or",41.86],["so",42.02]]},{"s":42.61,"e":44.6,"text":"and its knees can buckle mid-nap.","words":[["and",42.61],["its",42.84],["knees",43.07],["can",43.45],["buckle",43.68],["midnap",44.14]]},{"s":45.03,"e":46.64,"text":"So, could you sleep standing up,","words":[["so",45.03],["could",45.15],["you",45.48],["sleep",45.67],["standing",45.99],["up",46.51]]},{"s":47.09,"e":48.87,"text":"or would you fall flat on your face?","words":[["or",47.09],["would",47.21],["you",47.53],["fall",47.72],["flat",47.98],["on",48.23],["your",48.36],["face",48.62]]}];
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
    coat: '#a8663a', coatD: '#7f4a28', coatL: '#c98552', mane: '#3a2620', hoof: '#2e2522', muzzle: '#5c3a2a', blk: '#26221f',
    coat2: '#d9c3a0', coat2D: '#b49c78', bone: '#f1e6cc', boneD: '#d6c6a2', tendon: '#d9473b', night: '#26285a', grass: '#5f9a5a' };

  // ---------------- horse (side view, facing right) ----------------
  // body sprite 720x560; ground point (origin) sits at sheet (330, 540)
  const HOX = 330, HOY = 540;
  const horseBody = (kind = 'bay', eye = 'shut') => cache('hb' + kind + eye, () => {
    const r = H.rng(kind === 'bay' ? 51 : 52), co = kind === 'bay' ? C.coat : C.coat2, coD = kind === 'bay' ? C.coatD : C.coat2D, mn = kind === 'bay' ? C.mane : '#f3ecdc';
    const head = (c) => { c.save(); c.translate(600, 120); c.rotate(eye === 'shut' ? 1.05 : 0.8); blob(c, ellPts(r, 0, 0, 78, 36, 0, 0.5)); c.restore(); };
    return compose(720, 560, [
      [(c) => { c.fillStyle = mn; blob(c, cutLines(r, [[150, 190], [112, 214], [84, 340], [106, 356], [134, 262], [150, 190]], 14, 0.8)); }, 0],
      [(c) => { c.fillStyle = co; blob(c, ellPts(r, 330, 215, 195, 92, 0, 0.8)); blob(c, ellPts(r, 180, 205, 86, 88, 0, 0.6)); blob(c, ellPts(r, 470, 220, 74, 78, 0, 0.6));
        blob(c, cutLines(r, [[410, 175], [470, 125], [545, 50], [590, 80], [565, 150], [500, 255], [410, 175]], 18, 0.6)); head(c);
        blob(c, [[548, 50], [556, 4], [576, 46]]); }, 0.7],
      [(c) => { c.fillStyle = coD; blob(c, ellPts(r, 330, 268, 160, 34, 0, 0.6)); blob(c, ellPts(r, 168, 236, 40, 52, 0.3, 0.5)); }, 0.25],
      [(c) => { c.fillStyle = mn; blob(c, cutLines(r, [[425, 170], [540, 40], [560, 50], [548, 78], [445, 196], [425, 170]], 14, 0.7)); blob(c, [[540, 40], [532, 74], [520, 58]]); }, 0.4],
      [(c) => { c.fillStyle = C.muzzle; c.save(); c.translate(600, 120); c.rotate(eye === 'shut' ? 1.05 : 0.8); blob(c, ellPts(r, 52, 0, 30, 30, 0, 0.4)); c.restore(); }, 0.2],
      [(c) => { c.save(); c.translate(600, 120); c.rotate(eye === 'shut' ? 1.05 : 0.8);
        if (eye === 'open') { c.fillStyle = C.blk; blob(c, ellPts(r, -30, -14, 9, 9, 0, 0.2)); c.fillStyle = '#fff'; blob(c, ellPts(r, -27, -17, 3, 3, 0, 0.1)); }
        else { c.strokeStyle = C.blk; c.lineWidth = 5; c.lineCap = 'round'; c.beginPath(); c.arc(-30, -18, 11, 0.3, Math.PI - 0.3); c.stroke(); }
        c.restore(); }, 0.1],
    ]);
  });
  // leg joint chains in horse units (y up = negative), ground at 0
  function legs(o) {
    const ck = o.cock || 0, side = o.side ?? 1, bk = o.buckle || 0, dip = bk * 60;
    const L = (x, pts) => pts.map(([a, b]) => [a + x, b]);
    const front = (dx) => [[140 + dx, -290 + dip], [148 + dx + bk * 75, -150 + dip * 0.6], [146 + dx, -40], [150 + dx, 0]];
    const hindStand = (dx) => [[-150 + dx, -290 + dip], [-128 + dx, -222 + dip], [-176 + dx, -132 + dip * 0.4], [-160 + dx, -36], [-150 + dx, 0]];
    const hindRest = (dx) => [[-150 + dx, -290 + dip], [-122 + dx, -220], [-158 + dx, -116], [-128 + dx, -40], [-112 + dx, -6]];
    const hind = (dx, rest) => { const a = hindStand(dx), b = hindRest(dx); return a.map((p, i) => [H.lerp(p[0], b[i][0], rest), H.lerp(p[1], b[i][1], rest)]); };
    const restN = side > 0 ? ck : 0, restF = side < 0 ? ck : 0;
    return { dip, far: [front(-26), hind(26, restF)], near: [front(0), hind(0, restN)], restN, restF };
  }
  function drawLeg(c, pts, s, ox, oy, col, colD, tipped) {
    const P2 = pts.map(([x, y]) => [ox + x * s, oy + y * s]);
    for (let i = 0; i < P2.length - 1; i++) strokePts(c, [P2[i], P2[i + 1]], (i === 0 ? 46 : i === 1 ? 34 : 26) * s, i ? colD : col);
    c.fillStyle = colD; P2.slice(1, -1).forEach(([x, y]) => { c.beginPath(); c.arc(x, y, 17 * s, 0, TAU); c.fill(); });
    const [hx, hy] = P2[P2.length - 1]; c.save(); c.translate(hx, hy); c.rotate(tipped ? -0.7 : 0); c.fillStyle = C.hoof;
    c.beginPath(); c.moveTo(-18 * s, -22 * s); c.lineTo(18 * s, -22 * s); c.lineTo(24 * s, 2 * s); c.lineTo(-20 * s, 2 * s); c.closePath(); c.fill(); c.restore();
  }
  function horse(ctx, cx, gy, s, o = {}) {
    const kind = o.kind || 'bay', co = kind === 'bay' ? C.coat : C.coat2, coD = kind === 'bay' ? C.coatD : C.coat2D;
    const lg = legs(o), sway = o.sway || 0;
    liveStrips(ctx, (c) => { lg.far.forEach((p, i) => drawLeg(c, p, s, cx, gy, coD, coD, i === 1 && lg.restF > 0.5)); }, 0.5);
    put(ctx, horseBody(kind, o.eye || 'shut'), cx, gy - (HOY - 280) * s + lg.dip * s + (o.bob || 0), { s, d: 1.2, rot: sway, ox: 360 - HOX, oy: 0 });
    liveStrips(ctx, (c) => { lg.near.forEach((p, i) => drawLeg(c, p, s, cx, gy, co, coD, i === 1 && lg.restN > 0.5)); }, 0.7);
    if (o.after) o.after(lg);
    return lg;
  }
  // horse lying on its chest (sternal), legs folded, muzzle resting on the grass; ground point at sheet (360, 380)
  const lyingSpr = () => cache('lying', () => { const r = H.rng(61); return compose(760, 400, [
    [(c) => { c.fillStyle = C.mane; blob(c, cutLines(r, [[150, 230], [70, 260], [40, 370], [80, 378], [130, 300], [150, 230]], 14, 0.8)); }, 0],
    [(c) => { c.fillStyle = C.coatD; strokePts(c, [[470, 340], [600, 360], [520, 376]], 30, C.coatD); strokePts(c, [[210, 330], [330, 372], [250, 380]], 32, C.coatD); }, 0.3],
    [(c) => { c.fillStyle = C.coat; blob(c, ellPts(r, 340, 290, 200, 86, 0, 0.8)); blob(c, ellPts(r, 190, 285, 86, 84, 0, 0.6));
      blob(c, cutLines(r, [[460, 250], [540, 230], [600, 280], [640, 340], [600, 368], [540, 320], [470, 330], [460, 250]], 16, 0.6));
      c.save(); c.translate(660, 340); c.rotate(0.35); blob(c, ellPts(r, 0, 0, 78, 34, 0, 0.5)); c.restore(); blob(c, [[600, 262], [598, 220], [622, 258]]); }, 0.6],
    [(c) => { c.fillStyle = C.mane; blob(c, cutLines(r, [[470, 245], [545, 222], [598, 262], [590, 278], [540, 244], [480, 268], [470, 245]], 14, 0.6)); }, 0.35],
    [(c) => { strokePts(c, [[400, 360], [540, 378], [470, 384]], 30, C.coatL); c.fillStyle = C.hoof; blob(c, ellPts(r, 470, 384, 18, 12, 0, 0.3)); c.fillStyle = C.muzzle; c.save(); c.translate(660, 340); c.rotate(0.35); blob(c, ellPts(r, 50, 0, 30, 30, 0, 0.4)); c.restore(); }, 0.3],
    [(c) => { c.strokeStyle = C.blk; c.lineWidth = 5; c.lineCap = 'round'; c.beginPath(); c.arc(640, 318, 11, 0.3, Math.PI - 0.3); c.stroke(); }, 0.1],
  ]); });
  const lockSpr = (open, col = C.gold) => cache('lock' + open + col, () => { const r = H.rng(open ? 71 : 72); return compose(200, 240, [
    [(c) => { c.strokeStyle = '#8b8f9a'; c.lineWidth = 22; c.lineCap = 'butt'; c.beginPath(); if (open) { c.moveTo(56, 120); c.lineTo(56, 70); c.arc(100, 70, 44, Math.PI, Math.PI * 1.95); } else { c.moveTo(56, 120); c.lineTo(56, 78); c.arc(100, 78, 44, Math.PI, 0); c.lineTo(144, 120); } c.stroke(); }, 0],
    [(c) => { c.fillStyle = col; blob(c, rect(r, 26, 110, 174, 226, 20, 0.6)); }, 0.5],
    [(c) => { c.fillStyle = C.ink; blob(c, ellPts(r, 100, 156, 16, 16, 0, 0.3)); c.fillRect(93, 160, 14, 36); }, 0.2],
  ]); });
  const DAY = () => dio('day', '#9fd0d6', '#f6d38f', '#7fb3a0', '#5f9a72', '#4f8a55', 1560);
  const NIGHT = () => dio('night', C.night, null, '#3a3f78', '#2f4d66', '#24413f', 1520);
  const DUSK = () => dio('dusk', '#e9a38a', '#f6d38f', '#b47a86', '#7d5e7c', '#4e4a6a', 1560);
  const DAWN = () => dio('dawn', '#f4cf8f', '#ee8a55', '#d59a62', '#a8894f', '#7f8a4c', 1540);
  const tuft = (ctx, x, y, s, seed) => put(ctx, cache('tuft' + seed, () => paperize(160, 90, (c) => { const r = H.rng(seed); c.fillStyle = C.grass; c.beginPath(); for (let k = 0; k < 7; k++) { const bx = 20 + k * 18; c.moveTo(bx, 88); c.lineTo(bx + r.range(-10, 14), r.range(6, 40)); c.lineTo(bx + 12, 88); } c.fill(); }, { seed })), x, y, { s, d: 0.6 });

  // ================= SCENE 1: hook, a big horse asleep on its feet at night =================
  function sceneHook(ctx, t) {
    ctx.drawImage(NIGHT(), 0, 0); shadowDraw(ctx, starsSpr(), 0, 0, 0.25); put(ctx, moonSpr(), 860, 640, { d: 0.6 });
    const push = seg(t, PS(1) - 0.3, PE(1)), zs = 1 + push * 0.1;
    ctx.save(); ctx.translate(540, 1500); ctx.scale(zs, zs); ctx.translate(-540, -1500);
    horse(ctx, 500, 1500, 1.3, { bob: Math.sin(t * 1.4) * 3, sway: Math.sin(t * 0.9) * 0.008 });
    [150, 900, 760].forEach((x, i) => tuft(ctx, x, 1505 + i * 30, 1.3, 300 + i));
    zzz(ctx, t, 820, 880, 1);
    ctx.restore();
    const K = popIn(t, P(0, '500kilo') - 0.15, 0.4);
    if (K) { ctx.save(); ctx.translate(540, 320); ctx.scale(K.s, K.s); ctx.translate(-540, -320); centerRow(ctx, '500 KG', 320, 130, C.gold); ctx.restore(); }
    tag(ctx, t, P(0, 'sleep') - 0.12, 'ASLEEP', 110, C.ink, 300, 520, { rot: -0.03, d: 1 });
    tag(ctx, t, P(0, 'standing') - 0.12, 'STANDING', 100, C.coral, 740, 650, { rot: 0.025, d: 1 });
    const Q = popIn(t, P(1, 'fall') - 0.15); if (Q) { put(ctx, ringSpr(), 540, 1640 - 60, { s: Q.s * 0.75, d: 0.6, rot: 0.04 }); put(ctx, wordSpr('NO FALL?', 120, C.card, C.coral, 16), 540, 1580, { s: Q.s, d: 1 + Q.d, rot: -0.04 }); }
  }

  // ================= SCENE 2: the stay apparatus, tendons brace the legs and lock the joints =================
  function sceneStay(ctx, t) {
    ctx.drawImage(flat('stay', '#3e6b6a', '#4f8380', 37), 0, 0);
    const cx = 560, gy = 1500, s = 1.45, dr = H.clamp((t - P(3, 'tendons') + 0.15) / 1.4);
    horse(ctx, cx, gy, s, { eye: 'shut', after: (lg) => {
      if (dr <= 0) return;
      // red tendon strips down the back of each near leg, drawn on along their length
      [lg.near[0], lg.near[1]].forEach((pts, k) => {
        const back = k ? 1 : -1, path = pts.map(([x, y], i) => [cx + (x + (i ? back * -16 : 0) + (k ? 10 : -14)) * s, gy + y * s]);
        const tot = path.slice(1).reduce((a, p, i) => a + Math.hypot(p[0] - path[i][0], p[1] - path[i][1]), 0);
        let left = tot * dr; const sh = [path[0]];
        for (let i = 1; i < path.length && left > 0; i++) { const l = Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]), q = Math.min(1, left / l); sh.push([path[i - 1][0] + (path[i][0] - path[i - 1][0]) * q, path[i - 1][1] + (path[i][1] - path[i - 1][1]) * q]); left -= l; }
        ctx.save(); ctx.shadowColor = 'rgba(14,10,30,0.45)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 5; strokePts(ctx, sh, 16, C.tendon); ctx.shadowColor = 'transparent'; strokePts(ctx, sh, 4, 'rgba(255,240,230,0.5)'); ctx.restore();
      });
    } });
    const T = popIn(t, P(2, 'stay') - 0.15, 0.4);
    if (T) { put(ctx, wordSpr('STAY', 130, C.card, C.coral, 16), 540, 300, { s: T.s, d: 1 + T.d, rot: -0.03 }); put(ctx, wordSpr('APPARATUS', 100, C.ink, C.card, 14), 540, 450, { s: T.s, d: 1 + T.d, rot: 0.02 }); }
    if (t < P(4, 'muscle') - 0.15) { tag(ctx, t, P(3, 'tendons') - 0.12, 'TENDONS', 74, C.card, 260, 1600, { back: C.red, rot: -0.04 }); tag(ctx, t, P(3, 'ligaments') - 0.12, 'LIGAMENTS', 74, C.card, 800, 1600, { back: C.red, rot: 0.03 }); }
    // joints lock: padlocks pop onto the knee, hock and fetlocks
    const lockAt = P(4, 'lock') - 0.15;
    [[148 * s + cx, gy - 150 * s], [cx - 176 * s, gy - 132 * s], [cx + 146 * s, gy - 40 * s], [cx - 160 * s, gy - 36 * s]].forEach(([x, y], i) => { const A = popIn(t, lockAt + i * 0.09); if (A) put(ctx, lockSpr(false), x + (i % 2 ? -80 : 80), y - 20, { s: A.s * 0.55, d: 0.6 + A.d }); });
    tag(ctx, t, P(4, 'lock') - 0.12, 'LOCKED', 110, C.ink, 540, 640, { rot: -0.02, d: 1 });
    const N = popIn(t, P(4, 'muscle') - 0.15); if (N) put(ctx, wordSpr('NO MUSCLE EFFORT', 76, C.card, C.teal, 14), 540, 1600, { s: N.s, d: 1 + N.d, rot: 0.015 });
  }

  // ================= SCENE 3: close-up, the kneecap hooks over a bump on the thigh bone =================
  const femurSpr = () => cache('femur', () => { const r = H.rng(81); return compose(560, 1000, [
    [(c) => { c.fillStyle = C.boneD; blob(c, cutLines(r, [[200, 0], [330, 0], [340, 640], [420, 760], [440, 900], [360, 990], [170, 990], [110, 880], [140, 740], [195, 640], [200, 0]], 26, 1)); }, 0],
    [(c) => { c.fillStyle = C.bone; blob(c, cutLines(r, [[218, 0], [312, 0], [320, 650], [392, 770], [404, 890], [350, 960], [190, 960], [140, 870], [168, 750], [215, 650], [218, 0]], 26, 0.8)); }, 0.3],
    // the bump (medial trochlear ridge) sticks out at the front, near the bottom
    [(c) => { c.fillStyle = C.gold; blob(c, ellPts(r, 430, 790, 58, 66, 0, 0.6)); }, 0.45],
  ]); });
  const tibiaSpr = () => cache('tibia', () => { const r = H.rng(82); return compose(460, 520, [
    [(c) => { c.fillStyle = C.boneD; blob(c, cutLines(r, [[60, 40], [400, 30], [370, 140], [290, 200], [280, 520], [180, 520], [170, 200], [80, 140], [60, 40]], 24, 1)); }, 0],
    [(c) => { c.fillStyle = C.bone; blob(c, cutLines(r, [[80, 54], [380, 46], [354, 132], [276, 186], [266, 520], [194, 520], [186, 186], [98, 132], [80, 54]], 24, 0.8)); }, 0.3],
  ]); });
  const patellaSpr = () => cache('patella', () => { const r = H.rng(83); return compose(200, 240, [[(c) => { c.fillStyle = C.coral; blob(c, ellPts(r, 100, 120, 70, 96, 0, 0.6)); }, 0], [(c) => { c.fillStyle = '#f08a70'; blob(c, ellPts(r, 90, 104, 34, 50, 0, 0.4)); }, 0.3]]); });
  function sceneKnee(ctx, t) {
    ctx.drawImage(flat('knee', '#5c3b4e', '#7c4a5c', 31), 0, 0);
    const FX = 470, FY = 820; // femur sheet centre
    put(ctx, femurSpr(), FX, FY, { d: 1.2 });
    put(ctx, tibiaSpr(), FX + 20, FY + 680, { d: 1.2 });
    // kneecap slides up along the front and pops over the bump into the notch above it
    const u = seg(t, P(5, 'hooks') - 0.2, P(6, 'bone') + 0.1), click = popIn(t, P(7, 'clicking') - 0.1, 0.3);
    const bumpX = FX - 280 + 430, bumpY = FY - 500 + 790;
    const a = [bumpX + 30, bumpY + 230], mid = [bumpX + 120, bumpY + 20], b = [bumpX + 30, bumpY - 175];
    const px = (1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * mid[0] + u * u * b[0], py = (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * mid[1] + u * u * b[1];
    const snap = click ? (1 - click.s) * 14 : 0;
    // ligaments from kneecap down to the shin
    const tib = [FX + 150, FY + 520];
    liveStrips(ctx, (c) => { strokePts(c, [[px - 30, py + 70], [tib[0] - 40, tib[1]]], 22, C.tendon); strokePts(c, [[px + 10, py + 80], [tib[0] + 10, tib[1] + 10]], 22, '#b8352c'); }, 0.6);
    put(ctx, patellaSpr(), px, py + snap, { d: 1.2, rot: -0.1 + u * 0.1 });
    tag(ctx, t, P(5, 'back') - 0.12, 'BACK LEG', 90, C.ink, 540, 230, { rot: -0.02, d: 1 });
    if (t < P(7, 'clicking') - 0.1) tag(ctx, t, P(5, 'kneecap') - 0.12, 'KNEECAP', 84, C.card, 860, 1460, { back: C.coral, rot: 0.03 });
    if (t > P(5, 'kneecap') && t < P(7, 'clicking') - 0.1) arrow(ctx, 860, 1390, 860, 1330, px + 80, py + 60, H.clamp((t - P(5, 'kneecap')) / 0.4), C.gold, 501);
    tag(ctx, t, P(6, 'bump') - 0.12, 'BUMP', 84, C.ink, 900, 1100, { rot: -0.03 });
    tag(ctx, t, P(6, 'thigh') - 0.12, 'THIGH BONE', 80, C.ink, 300, 460, { rot: 0.02 });
    if (click) { put(ctx, burstSpr(), b[0] + 40, b[1] - 10, { s: click.s * 0.5, rot: t * 0.3, d: 0.4, a: 0.9 }); put(ctx, patellaSpr(), b[0], b[1], { d: 1.2 }); put(ctx, wordSpr('CLICK!', 110, C.card, C.red, 16), 300, 1250, { s: click.s, d: 1 + click.d, rot: -0.05 }); }
    const LK = popIn(t, P(7, 'shut') - 0.15); if (LK) put(ctx, lockSpr(false), 270, 1500, { s: LK.s * 0.7, d: 0.8 + LK.d, rot: -0.06 });
    tag(ctx, t, P(7, 'latch') - 0.12, 'LIKE A LATCH', 84, C.card, 640, 1560, { back: C.teal, rot: 0.01 });
  }

  // ================= SCENE 4: one back leg rests, then they swap =================
  function sceneRest(ctx, t) {
    ctx.drawImage(DAWN(), 0, 0);
    const r0 = seg(t, P(8, 'rest') - 0.3, P(8, 'rest') + 0.2), swp = seg(t, P(9, 'swaps') - 0.2, P(9, 'sides') + 0.3);
    // near leg rests first; at the swap it plants and the far leg tips up instead
    const side = swp < 0.5 ? 1 : -1, ck = swp < 0.5 ? r0 * (1 - swp * 2) : (swp - 0.5) * 2;
    horse(ctx, 560, 1460, 1.4, { cock: ck, side, bob: Math.sin(t * 1.4) * 3, sway: (side > 0 ? -1 : 1) * ck * 0.012 });
    [140, 880].forEach((x, i) => tuft(ctx, x, 1480 + i * 20, 1.2, 320 + i));
    tag(ctx, t, P(8, 'other') - 0.12, 'ONE LEG', 110, C.ink, 540, 300, { rot: -0.02, d: 1 });
    tag(ctx, t, P(8, 'rest') - 0.12, 'RESTS', 110, C.card, 540, 450, { back: C.teal, rot: 0.02, d: 1 });
    if (t > P(8, 'rest')) arrow(ctx, 330, 1020, 230, 1150, 330, 1350, H.clamp((t - P(8, 'rest')) / 0.4), C.gold, 601);
    const S = popIn(t, P(9, 'swaps') - 0.15); if (S) { put(ctx, wordSpr('SWAP!', 120, C.card, C.coral, 16), 540, 1620 - 30, { s: S.s, d: 1 + S.d, rot: -0.03 }); }
  }

  // ================= SCENE 5: the catch, dreaming (REM) sleep relaxes every muscle =================
  const cloudSpr = () => cache('cloud', () => { const r = H.rng(91); return compose(640, 380, [[(c) => { c.fillStyle = C.card; [[180, 200, 120], [320, 150, 140], [460, 200, 120], [320, 250, 130], [230, 260, 90], [420, 270, 90]].forEach(([x, y, R]) => blob(c, circPts(r, x, y, R, 14, 0.6))); }, 0], [(c) => { c.fillStyle = '#f6e7bf'; [[250, 190, 26], [400, 220, 20], [330, 140, 16]].forEach(([x, y, s]) => { const p = []; for (let j = 0; j < 10; j++) { const rr = j % 2 ? s * 0.45 : s, a = (j / 10) * TAU; p.push([x + Math.cos(a) * rr, y + Math.sin(a) * rr]); } blob(c, p); }); }, 0.3]]); });
  function sceneREM(ctx, t) {
    ctx.drawImage(flat('rem', '#2f3263', '#3d4180', 41), 0, 0);
    const relax = seg(t, P(11, 'relaxes') - 0.1, P(11, 'muscle') + 0.4), un = popIn(t, P(12, 'unlocks') - 0.15);
    const wob = Math.sin(t * 6) * relax * 0.015;
    horse(ctx, 540, 1470, 1.3, { buckle: relax * 0.25, sway: wob, bob: Math.sin(t * 1.4) * 3 });
    const B = popIn(t, P(11, 'dreaming') - 0.15, 0.45); if (B) { put(ctx, cloudSpr(), 800, 540, { s: B.s * 0.75, d: 0.8 + B.d }); put(ctx, wordSpr('REM', 120, C.ink, null), 800, 550, { s: B.s, d: 0.4 }); }
    const CT = dropIn(t, P(10, 'catch') - 0.2, 0.4, 80); if (CT && t < P(11, 'called')) put(ctx, wordSpr("BUT...", 150, C.card, C.coral, 18), 540, 520 + CT.dy, { s: CT.s, d: 1 + CT.d, rot: -0.03 });
    tag(ctx, t, P(11, 'dreaming') - 0.12, 'DREAM SLEEP', 96, C.card, 540, 290, { back: C.ink, rot: -0.02, d: 1 });
    tag(ctx, t, P(11, 'relaxes') - 0.12, 'MUSCLES RELAX', 80, C.ink, 390, 760, { rot: 0.015 });
    if (un) { [[540 + 148 * 1.3 + 80, 1470 - 150 * 1.3], [540 - 176 * 1.3 - 80, 1470 - 132 * 1.3]].forEach(([x, y]) => put(ctx, lockSpr(true, C.coral), x, y - 20, { s: un.s * 0.6, d: 0.6 + un.d })); put(ctx, wordSpr('UNLOCKED', 110, C.card, C.red, 16), 540, 1600, { s: un.s, d: 1 + un.d, rot: 0.03 }); }
  }

  // ================= SCENE 6: so it lies down for REM, while a buddy keeps watch =================
  function sceneLie(ctx, t) {
    ctx.drawImage(DAY(), 0, 0);
    const G = popIn(t, P(15, 'buddy') - 0.15, 0.5);
    if (G) horse(ctx, 260, 1300, 0.75, { kind: 'grey', eye: 'open', bob: (1 - G.s) * 40 });
    if (t < P(13, 'lie') - 0.2) horse(ctx, 600, 1520, 1.05, { buckle: 0.25, bob: Math.sin(t * 1.4) * 3 });
    const L = dropIn(t, P(13, 'lie') - 0.2, 0.45, 120);
    if (L) { put(ctx, lyingSpr(), 600, 1440 + L.dy, { s: 1.15 * L.s, d: 1.2 + L.d }); zzz(ctx, t, 840, 1180, 0.9); }
    [120, 960].forEach((x, i) => tuft(ctx, x, 1560 + i * 10, 1.3, 330 + i));
    tag(ctx, t, P(13, 'rem') - 0.12, 'FOR REM', 90, C.ink, 300, 260, { rot: -0.03, d: 1 });
    tag(ctx, t, P(13, 'lie') - 0.12, 'LIE DOWN', 120, C.card, 600, 400, { back: C.coral, rot: 0.02, d: 1 });
    const N = popIn(t, P(14, 'thirty') - 0.15, 0.4);
    if (N) { put(ctx, burstSpr(), 540, 640, { s: N.s * 0.75, rot: t * 0.2, d: 0.6 }); ctx.save(); ctx.translate(540, 620); ctx.scale(N.s, N.s); ctx.translate(-540, -620); centerRow(ctx, t < P(14, 'fortyfive') - 0.1 ? '30' : '30-45', 620, 140, C.coral); ctx.restore(); }
    tag(ctx, t, P(14, 'minutes') - 0.12, 'MIN A DAY', 80, C.ink, 540, 790, { rot: -0.01 });
    if (G) { tag(ctx, t, P(15, 'guard') - 0.12, 'ON GUARD', 80, C.card, 280, 1000, { back: C.teal, rot: -0.03 }); }
  }

  // ================= SCENE 7: skip REM for a week, knees buckle =================
  function sceneBuckle(ctx, t) {
    ctx.drawImage(flat('bk', '#6a3a3a', '#874848', 47), 0, 0);
    // a week of calendar tiles, crossed off one by one
    const w0 = P(16, 'miss') - 0.1, w1 = PE(16) + 0.1;
    for (let i = 0; i < 7; i++) { const A = popIn(t, w0 + i * (w1 - w0) / 7, 0.25); if (!A) continue; const x = 150 + i * 130, y = 320; put(ctx, wordSpr(String(i + 1), 64, C.ink, C.card, 12), x, y, { s: A.s, d: 0.8 + A.d, rot: (i % 2 ? 0.04 : -0.04) }); const X = popIn(t, w0 + i * (w1 - w0) / 7 + 0.12, 0.2); if (X) put(ctx, crossSpr(), x, y, { s: X.s * 0.55, d: 0.5 }); }
    tag(ctx, t, P(16, 'week') - 0.12, '1 WEEK, NO REM', 84, C.card, 540, 480, { back: C.red, rot: -0.02, d: 1 });
    const bk = seg(t, P(17, 'buckle') - 0.15, P(17, 'buckle') + 0.35) * (1 - 0.5 * seg(t, PE(17) + 0.05, PE(17) + 0.4));
    horse(ctx, 540, 1460, 1.3, { buckle: bk, sway: bk * 0.04 + Math.sin(t * 3) * 0.01 * (t > PS(17) ? 1 : 0), bob: Math.sin(t * 1.4) * 3 });
    const K = popIn(t, P(17, 'buckle') - 0.15); if (K) put(ctx, wordSpr('KNEES BUCKLE', 100, C.card, C.coral, 16), 540, 1600, { s: K.s, d: 1 + K.d, rot: 0.02 });
    if (t > P(17, 'knees')) arrow(ctx, 860, 900, 900, 1050, 800, 1200, H.clamp((t - P(17, 'knees')) / 0.4), C.gold, 701);
  }

  // ================= SCENE 8: the question =================
  function sceneEnd(ctx, t) {
    ctx.drawImage(DUSK(), 0, 0);
    horse(ctx, 520, 1430, 1.15, { cock: 1, side: 1, bob: Math.sin(t * 1.4) * 3 });
    [150, 900].forEach((x, i) => tuft(ctx, x, 1450 + i * 20, 1.2, 340 + i));
    zzz(ctx, t, 780, 860, 0.9);
    tag(ctx, t, P(18, 'could') - 0.12, 'COULD YOU', 100, C.ink, 540, 280, { rot: -0.02, d: 1 });
    const A = popIn(t, P(18, 'standing') - 0.15); if (A) put(ctx, wordSpr('SLEEP STANDING?', 86, C.card, C.teal, 16), 540, 430, { s: A.s, d: 1 + A.d, rot: 0.02 });
    tag(ctx, t, P(19, 'or') - 0.1, 'OR', 70, C.ink, 540, 1500, { rot: 0.02 });
    const B = popIn(t, P(19, 'fall') - 0.15); if (B) put(ctx, wordSpr('FALL FLAT?', 110, C.card, C.red, 16), 540, 1610, { s: B.s, d: 1 + B.d, rot: -0.025 });
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
  const SC = [{ f: sceneHook }, { p: 2, f: sceneStay, d: 'right' }, { p: 5, f: sceneKnee, d: 'up' }, { p: 8, f: sceneRest, d: 'right' }, { p: 10, f: sceneREM, d: 'up' }, { p: 13, f: sceneLie, d: 'right' }, { p: 16, f: sceneBuckle, d: 'up' }, { p: 18, f: sceneEnd, d: 'right' }];
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
    REC = null; const seen = new Set(), res = []; out.sort((x, y) => x - y).forEach((e) => { const key = Math.round(e * 25); if (seen.has(key) || e < 0 || e > DURATION) return; seen.add(key); res.push(e); }); return res;
  }
  function scoreSound(k) {
    const card = (t, g = 1, p = 0, f = 1, minor = true) => { k.noise(t, { dur: 0.045, filter: 'bandpass', f: 1100 * f, q: 0.9, gain: 0.26 * g, a: 0.001, pan: p, minor }); k.noise(t, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 650, gain: 0.3 * g, a: 0.002, pan: p, minor }); k.tone(t, { f: [[0, 160 * f], [0.07, 85]], dur: 0.09, gain: 0.16 * g, pan: p, minor }); };
    const layer = (t, d, g = 1) => { k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 260], [d * 0.5, 620], [d, 300]], q: 0.6, gain: 0.16 * g, a: d * 0.45, pan: 0.15 }); k.noise(t + 0.05, { dur: d, color: 'brown', filter: 'lowpass', f: 380, gain: 0.14 * g, a: d * 0.5, pan: -0.15 }); };
    const hit = (t, g = 1) => { k.play('impact', t, { gain: 0.9 * g }); k.play('thud', t, { gain: 0.6 * g, f: 110 }); };
    collect().forEach((t) => card(t, 0.7, 0, 1.15));
    SC.forEach((s) => { if (s.cut != null) { layer(s.cut, SLIDE + 0.1); k.play('whoosh', s.cut, { dur: SLIDE, gain: 0.4 }); } });
    hit(P(0, '500kilo') - 0.05, 0.7);
    k.play('ding', P(1, 'fall'), { f: 'E5', gain: 0.32 });
    k.play('tape', P(3, 'tendons') - 0.05, { dur: 1.2, gain: 0.45 });
    for (let i = 0; i < 4; i++) k.play('click', P(4, 'lock') - 0.1 + i * 0.09, { gain: 0.5 });
    k.play('paper', P(5, 'hooks') - 0.1, { dur: 0.7, gain: 0.5 });
    k.play('stamp', P(7, 'clicking') - 0.05, { gain: 0.6 }); k.play('click', P(7, 'shut'), { gain: 0.7 });
    k.play('swish', P(9, 'swaps'), { gain: 0.5 });
    hit(P(10, 'catch') - 0.05, 0.85);
    k.play('sparkle', P(11, 'rem'), { n: 6, gain: 0.4 });
    k.play('error', P(12, 'unlocks'), { gain: 0.3 });
    k.play('slap', P(13, 'lie'), { gain: 0.5 });
    hit(P(14, 'thirty') - 0.05, 0.6);
    k.play('pop', P(15, 'guard'), { gain: 0.5, f: 720 });
    k.play('thud', P(17, 'buckle'), { gain: 0.6, f: 90 });
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PE(19) + 0.1 + i * 0.09, { f, gain: 0.38 - i * 0.04, pan: (i - 1) * 0.25 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); ctx.drawImage(NIGHT(), 0, 0); shadowDraw(ctx, starsSpr(), 0, 0, 0.25);
    horse(ctx, 500, 1500, 1.3, {}); zzz(ctx, 0.4, 820, 880, 1);
    put(ctx, wordSpr('ASLEEP', 170, C.ink, C.card, 22), 540, 430, { d: 1.6, rot: -0.03 });
    put(ctx, wordSpr('STANDING?', 150, C.coral, C.card, 22), 540, 650, { d: 1.6, rot: 0.02 });
    finish(ctx, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
