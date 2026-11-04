// ================= Cut-Paper Diorama, vertical 1080x1920: "How do anteaters eat 30,000 ants a day with no teeth?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":2.47,"text":"Zero teeth, but it'll out-eat you,","words":[["zero",0.25],["teeth",0.61],["but",1.05],["itll",1.32],["outeat",1.67],["you",2.2]]},{"s":2.77,"e":4.39,"text":"thirty thousand ants a day.","words":[["thirty",2.77],["thousand",3.21],["ants",3.8],["a",4.09],["day",4.17]]},{"s":4.94,"e":6.48,"text":"Meet the giant anteater.","words":[["meet",4.94],["the",5.24],["giant",5.48],["anteater",5.86]]},{"s":7.03,"e":9.21,"text":"First, big claws rip open the nest.","words":[["first",7.03],["big",7.43],["claws",7.68],["rip",8.08],["open",8.32],["the",8.65],["nest",8.89]]},{"s":9.76,"e":11.18,"text":"Then out comes the tongue,","words":[["then",9.76],["out",10.03],["comes",10.23],["the",10.57],["tongue",10.77]]},{"s":11.48,"e":12.49,"text":"two feet long,","words":[["two",11.48],["feet",11.76],["long",12.12]]},{"s":12.79,"e":15.51,"text":"flicking up to a hundred and fifty times a minute.","words":[["flicking",12.79],["up",13.34],["to",13.47],["a",13.61],["hundred",13.67],["and",14.15],["fifty",14.35],["times",14.69],["a",15.03],["minute",15.1]]},{"s":16.06,"e":18.3,"text":"It's covered in tiny backward spines,","words":[["its",16.06],["covered",16.28],["in",16.81],["tiny",16.96],["backward",17.26],["spines",17.85]]},{"s":18.6,"e":19.88,"text":"and thick, sticky spit,","words":[["and",18.6],["thick",18.82],["sticky",19.17],["spit",19.59]]},{"s":20.18,"e":22.0,"text":"so ants come along for the ride.","words":[["so",20.18],["ants",20.32],["come",20.61],["along",20.91],["for",21.27],["the",21.49],["ride",21.71]]},{"s":22.55,"e":23.99,"text":"With no teeth to chew them,","words":[["with",22.55],["no",22.82],["teeth",22.96],["to",23.3],["chew",23.44],["them",23.72]]},{"s":24.29,"e":26.71,"text":"it crushes them against the roof of its mouth,","words":[["it",24.29],["crushes",24.42],["them",24.88],["against",25.14],["the",25.6],["roof",25.79],["of",26.06],["its",26.19],["mouth",26.38]]},{"s":27.01,"e":28.6,"text":"and a very muscular stomach","words":[["and",27.01],["a",27.22],["very",27.29],["muscular",27.56],["stomach",28.12]]},{"s":28.9,"e":30.29,"text":"pulverizes the rest.","words":[["pulverizes",28.9],["the",29.72],["rest",29.96]]},{"s":30.84,"e":33.05,"text":"Scientists think swallowed grit helps too,","words":[["scientists",30.84],["think",31.45],["swallowed",31.76],["grit",32.31],["helps",32.56],["too",32.87]]},{"s":33.35,"e":34.92,"text":"a bit like a bird's gizzard.","words":[["a",33.35],["bit",33.42],["like",33.65],["a",33.95],["birds",34.02],["gizzard",34.4]]},{"s":35.47,"e":36.51,"text":"The clever part?","words":[["the",35.47],["clever",35.71],["part",36.19]]},{"s":37.06,"e":39.12,"text":"It stays about a minute at each mound,","words":[["it",37.06],["stays",37.2],["about",37.54],["a",37.88],["minute",37.95],["at",38.36],["each",38.5],["mound",38.78]]},{"s":39.42,"e":40.45,"text":"then moves on,","words":[["then",39.42],["moves",39.79],["on",40.26]]},{"s":40.75,"e":42.48,"text":"before the ants can fight back.","words":[["before",40.75],["the",41.16],["ants",41.37],["can",41.65],["fight",41.86],["back",42.2]]},{"s":43.03,"e":45.53,"text":"So if you had to eat thirty thousand of something,","words":[["so",43.03],["if",43.15],["you",43.28],["had",43.47],["to",43.65],["eat",43.78],["thirty",43.96],["thousand",44.34],["of",44.84],["something",44.96]]},{"s":45.83,"e":47.86,"text":"with zero teeth, what would you pick?","words":[["with",45.83],["zero",46.11],["teeth",46.39],["what",46.74],["would",47.02],["you",47.37],["pick",47.58]]}];
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
    fur: '#8f7c67', furD: '#6e5d4c', head: '#a39078', tail: '#4b4037', blk: '#26221f', pale: '#e9e0cc', claw: '#37302a',
    clay: '#c08a54', clay2: '#a87240', clay3: '#8c5c32', hole: '#3a2416', pink: '#ee8f9c', pinkD: '#c9606f', spine: '#fbe3d8', ant: '#2a1c18' };
  const ellPts = (r, cx, cy, rx, ry, rot = 0, jit = 0.5) => { const n = Math.max(18, Math.round((TAU * Math.max(rx, ry)) / 13)), a0 = r() * TAU, out = [], c = Math.cos(rot), s = Math.sin(rot); for (let i = 0; i < n; i++) { const a = a0 + ((i + r.range(-0.2, 0.2)) / n) * TAU, x = Math.cos(a) * (rx + r.gauss() * jit), y = Math.sin(a) * (ry + r.gauss() * jit); out.push([cx + x * c - y * s, cy + x * s + y * c]); } return out; };
  const rect = (r, x0, y0, x1, y1, seg = 24, jit = 0.5) => cutLines(r, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], seg, jit);
  const popIn = (t, st, du = 0.35) => { if (REC) REC.push(st + 0.37 * du); const u = H.clamp((t - st) / du); if (u <= 0) return null; return { s: Math.max(0.01, H.ease.back(u)), d: (1 - H.ease.out(u)) * 2 }; };
  const centerRow = (ctx, str, y, px, col) => numberRow(ctx, str, 540 - rowWidth(str, px) / 2, y, px, col);

  // ---------------- sprites ----------------
  const blob = (c, pts) => { c.beginPath(); poly(c, pts); c.fill(); };
  // body with tail and head, facing right; the snout tip sits at (962,300) of this 1000x560 sheet
  const SNOUT = [462, 20];
  const bodySpr = () => cache('body', () => { const r = H.rng(41); return compose(1000, 560, [
    [(c) => { c.fillStyle = C.tail; blob(c, cutLines(r, [[270, 200], [120, 120], [20, 170], [6, 300], [40, 420], [130, 470], [260, 390], [270, 200]], 16, 3.5)); }, 0],
    [(c) => { c.fillStyle = C.furD; for (let i = 0; i < 12; i++) { const a = 2.2 + i * 0.16; c.save(); c.translate(180, 300); c.rotate(a); c.fillRect(70, -3, 90, 6); c.restore(); } }, 0.2],
    [(c) => { c.fillStyle = C.fur; blob(c, ellPts(r, 390, 270, 225, 140, -0.04, 1.4)); }, 0.9],
    [(c) => { c.fillStyle = C.head; blob(c, cutLines(r, [[520, 185], [650, 205], [780, 255], [962, 292], [966, 310], [790, 335], [650, 375], [530, 400], [520, 185]], 18, 0.8)); }, 0.7],
    [(c) => { c.fillStyle = C.pale; blob(c, cutLines(r, [[540, 150], [590, 170], [500, 425], [420, 412], [540, 150]], 18, 1)); }, 0.3],
    [(c) => { c.fillStyle = C.blk; blob(c, cutLines(r, [[518, 142], [552, 158], [456, 418], [392, 400], [518, 142]], 18, 1)); }, 0.4],
    [(c) => { c.fillStyle = C.furD; blob(c, ellPts(r, 640, 222, 22, 30, -0.3, 0.6)); c.fillStyle = C.blk; blob(c, ellPts(r, 730, 268, 11, 11, 0, 0.3)); }, 0.3],
    [(c) => { c.fillStyle = C.blk; blob(c, ellPts(r, 958, 300, 12, 11, 0, 0.3)); }, 0.1],
  ]); });
  const legSpr = (front) => cache('leg' + front, () => { const r = H.rng(front ? 51 : 52), col = front ? C.pale : C.furD; return compose(150, 300, [
    [(c) => { c.fillStyle = col; blob(c, cutLines(r, [[35, 6], [118, 6], [106, 230], [40, 230], [35, 6]], 16, 0.7)); }, 0],
    ...(front ? [[(c) => { c.fillStyle = C.blk; blob(c, cutLines(r, [[37, 150], [110, 150], [108, 192], [38, 192], [37, 150]], 16, 0.6)); }, 0.3]] : []),
    [(c) => { c.fillStyle = col; blob(c, ellPts(r, 72, 234, 42, 26, 0, 0.5)); }, 0.3],
    [(c) => { c.fillStyle = C.claw; for (let i = 0; i < 3; i++) { const x = 42 + i * 26; c.beginPath(); c.moveTo(x - 10, 246); c.quadraticCurveTo(x + 22, 262, x + 26, 294); c.quadraticCurveTo(x + 2, 280, x - 10, 246); c.fill(); } }, 0.4],
  ]); });
  // tongue from the snout tip: a pink paper strip of a given length (sheet coordinates scale with the body)
  const tongueTo = (ctx, x0, y0, x1, y1, w = 11) => {
    ctx.save(); ctx.lineCap = 'round'; ctx.shadowColor = 'rgba(14,10,30,0.4)'; ctx.shadowBlur = 8; ctx.shadowOffsetY = 5;
    ctx.strokeStyle = C.pinkD; ctx.lineWidth = w + 4; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo((x0 + x1) / 2, Math.min(y0, y1) + 22, x1, y1); ctx.stroke();
    ctx.shadowColor = 'transparent'; ctx.strokeStyle = C.pink; ctx.lineWidth = w; ctx.stroke(); ctx.restore();
  };
  // walk 0..: leg swing phase; tongue px beyond the snout (screen px)
  function anteater(ctx, x, y, s, o = {}) {
    const wk = o.walk ?? 0, sw = Math.sin(wk) * 0.3, bob = Math.abs(Math.cos(wk)) * 7 * s + (o.breathe ?? 0);
    ctx.save(); ctx.translate(x, y - bob);
    const leg = (spr, lx, ly, rot, d) => { ctx.save(); ctx.translate(lx * s, ly * s); ctx.rotate(rot); put(ctx, spr, 0, (spr.height / 2 - 14) * s, { s, d }); ctx.restore(); };
    leg(legSpr(false), -210, 80, sw * 0.8, 0.5); leg(legSpr(true), -30, 90, -sw * 0.8, 0.5);
    put(ctx, bodySpr(), 0, 0, { s, d: 1.2 });
    leg(legSpr(false), -150, 90, -sw, 0.8); leg(legSpr(true), 30, 100, sw, 0.8);
    ctx.restore();
    if (o.tongue) { const sx = x + SNOUT[0] * s, sy = y - bob + SNOUT[1] * s; tongueTo(ctx, sx, sy, sx + o.tongue, sy + (o.tongueDy ?? 0), 20 * Math.max(s, 0.7)); }
  }
  const antSpr = () => cache('ant', () => paperize(84, 50, (c) => { c.fillStyle = C.ant; [[16, 25, 15, 11], [40, 25, 10, 8], [64, 23, 13, 10]].forEach(([x, y, a, b]) => { c.beginPath(); c.ellipse(x, y, a, b, 0, 0, TAU); c.fill(); });
    c.strokeStyle = C.ant; c.lineWidth = 3; c.lineCap = 'round'; for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(30 + i * 10, 28); c.lineTo(20 + i * 14, 46); c.moveTo(30 + i * 10, 22); c.lineTo(20 + i * 14, 5); c.stroke(); } c.beginPath(); c.moveTo(72, 16); c.lineTo(82, 5); c.stroke(); }, { seed: 61, tex: 0.5 }));
  const ant = (ctx, x, y, s, rot = 0, d = 0.2, sy) => put(ctx, antSpr(), x, y, { sx: s, sy: sy ?? s, rot, d, sa: 0.35 });
  const moundSpr = (w, h, seed) => cache('mound' + w + h + seed, () => { const r = H.rng(seed), peak = (u) => h * (0.02 + 0.98 * Math.pow(Math.abs(2 * u - 1), 1.8)); const pts = (ins) => { const o = [[ins * w, h]]; for (let u = 0.02; u < 1; u += 0.045) { const x = ins * w + u * w * (1 - 2 * ins); o.push([x, peak(u) * (1 - ins) + ins * h * 0.35 + r.gauss() * 7]); } o.push([(1 - ins) * w, h]); return o; };
    return compose(w, h, [
      [(c) => { c.fillStyle = C.clay3; blob(c, pts(0)); }, 0],
      [(c) => { c.fillStyle = C.clay2; blob(c, pts(0.07)); }, 0.4],
      [(c) => { c.fillStyle = C.clay; blob(c, pts(0.17)); }, 0.4],
      [(c) => { c.fillStyle = C.hole; for (let i = 0; i < 6; i++) blob(c, ellPts(r, w * r.range(0.32, 0.68), h * (0.42 + i * 0.09), w * 0.028, h * 0.022, 0, 0.5)); }, 0.1],
    ]); });
  const dio = (key, sky, sun, far, mid, ground, groundY) => cache('dio' + key, () => { const r = H.rng(key.length * 97 + groundY); return compose(W0, H0, [
    [(c) => { c.fillStyle = sky; c.fillRect(0, 0, W0, H0); }, 0, { rim: false }],
    ...(sun ? [[(c) => { c.fillStyle = sun; blob(c, circPts(r, 830, groundY - 470, 150, 15, 0.8)); }, 0.5]] : []),
    [(c) => { c.fillStyle = far; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY - 210 + 46 * Math.sin(x * 0.006 + 1), 16, 36, 1), [W0 + 10, H0], [-10, H0]]); }, 0.7],
    [(c) => { c.fillStyle = mid; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY - 100 + 34 * Math.sin(x * 0.009 + 4), 14, 30, 1), [W0 + 10, H0], [-10, H0]]); }, 0.9],
    [(c) => { c.fillStyle = ground; blob(c, [...ridge(r, -10, W0 + 10, (x) => groundY + 14 * Math.sin(x * 0.012), 14, 30, 1.2), [W0 + 10, H0], [-10, H0]]); c.fillStyle = mid; for (let i = 0; i < 36; i++) { const x = r() * W0, y = groundY + 60 + r() * 560; for (let k = -1; k <= 1; k++) blob(c, [[x + k * 12 - 6, y], [x + k * 22, y - 34], [x + k * 12 + 6, y]]); } }, 1.2],
  ]); });
  const SAV = () => dio('sav', '#f4cf8f', '#ee8a55', '#d59a62', '#a8894f', '#8a8c4c', 1330);
  const DUSK = () => dio('dusk', '#8fc4c0', null, '#6fa79a', '#558c74', '#6a8a4c', 1340);
  const MORN = () => dio('morn', '#cfe6d6', '#f7e3a0', '#9cc2a6', '#77a585', '#7ea254', 1310);
  const flat = (key, base, band, seed) => cache('flat' + key, () => { const r = H.rng(seed); return compose(W0, H0, [
    [(c) => { c.fillStyle = base; c.fillRect(0, 0, W0, H0); }, 0, { rim: false }],
    [(c) => { c.fillStyle = band; blob(c, [...ridge(r, -10, W0 + 10, (x) => 200 + 26 * Math.sin(x * 0.008), 18, 34, 1.2), [W0 + 10, 1720 + 0], ...ridge(r, -10, W0 + 10, (x) => 1700 + 22 * Math.sin(x * 0.01 + 2), 18, 34, 1.2).reverse()]); }, 1],
  ]); });
  const toothSpr = () => cache('tooth', () => paperize(170, 210, (c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); c.moveTo(20, 40); c.quadraticCurveTo(50, 4, 85, 26); c.quadraticCurveTo(120, 4, 150, 40); c.quadraticCurveTo(160, 100, 130, 200); c.quadraticCurveTo(105, 190, 85, 120); c.quadraticCurveTo(65, 190, 40, 200); c.quadraticCurveTo(10, 100, 20, 40); c.fill(); }, { seed: 71 }));
  const ANTS = (() => { const r = H.rng(555), o = []; for (let i = 0; i < 26; i++) o.push({ x: r() * 1100, sp: r.range(0.95, 1.1), y: r.range(-14, 14), rot: r.range(-0.08, 0.08), s: r.range(0.8, 1.05) }); return o; })();

  // ================= SCENE 1: hook + meet (one continuous shot that pushes in) =================
  function sceneHook(ctx, t) {
    ctx.drawImage(SAV(), 0, 0);
    const push = seg(t, PS(2) - 0.2, PS(2) + 0.7), zs = 1 + push * 0.14;
    ctx.save(); ctx.translate(540, 1200); ctx.scale(zs, zs); ctx.translate(-540, -1200);
    anteater(ctx, 505, 1140, 0.93, { walk: t * 2.4 * (1 - push), breathe: Math.sin(t * 1.6) * 4 });
    ANTS.forEach((a, i) => { const x = ((a.x + t * 46 * a.sp) % 1140) - 30; ant(ctx, x, 1520 + a.y, a.s, a.rot, 0.15); });
    ctx.restore();
    const lift = seg(t, PS(2) - 0.28, PS(2) + 0.1), o = -lift * 900;
    ctx.save(); ctx.translate(0, o);
    tag(ctx, t, P(0, 'zero') - 0.1, 'ZERO', 170, C.ink, 340, 310, { rot: -0.03, d: 1 });
    tag(ctx, t, P(0, 'teeth') - 0.12, 'TEETH', 170, C.coral, 680, 490, { rot: 0.02, d: 1 });
    if (t >= P(1, 'thirty') - 0.15) { const u = H.clamp((t - P(1, 'thirty') + 0.15) / (P(1, 'ants') - P(1, 'thirty') + 0.15)); centerRow(ctx, fmt(Math.round(H.ease.out(u) * 30) * 1000), 690, 150, C.ink); }
    tag(ctx, t, P(1, 'ants') - 0.12, 'ANTS A DAY', 74, C.ink, 540, 830, { rot: -0.01 });
    ctx.restore();
    tag(ctx, t, P(2, 'giant') - 0.12, 'GIANT', 130, C.ink, 540, 400, { rot: -0.02, d: 1.1 });
    tag(ctx, t, P(2, 'anteater') - 0.12, 'ANTEATER', 130, C.coral, 540, 590, { rot: 0.015, d: 1.1 });
  }

  // ================= SCENE 2: claws rip open the nest =================
  const pawSpr = () => cache('paw', () => { const r = H.rng(81); return compose(560, 760, [
    [(c) => { c.fillStyle = C.pale; blob(c, cutLines(r, [[250, 0], [470, 0], [430, 500], [210, 500], [250, 0]], 22, 1)); }, 0],
    [(c) => { c.fillStyle = C.blk; blob(c, cutLines(r, [[240, 190], [450, 190], [440, 320], [226, 320], [240, 190]], 22, 0.8)); }, 0.3],
    [(c) => { c.fillStyle = C.pale; blob(c, ellPts(r, 320, 510, 150, 70, 0, 0.8)); }, 0.4],
    [(c) => { c.fillStyle = C.claw; [[210, 1.25], [330, 1], [440, 0.7]].forEach(([x, k]) => { c.beginPath(); c.moveTo(x - 38, 530); c.quadraticCurveTo(x + 10, 620 * 1, x + 2 - 80 * k + 60, 530 + 220 * k); c.quadraticCurveTo(x + 44, 660, x + 40, 530); c.fill(); }); }, 0.5],
  ]); });
  function sceneClaws(ctx, t) {
    ctx.drawImage(DUSK(), 0, 0);
    const R = P(3, 'rip') - 0.05, open = seg(t, R, R + 0.45), shake = t > R && t < R + 0.35 ? Math.sin(t * 90) * 8 : 0;
    const M = moundSpr(760, 980, 3), mx = 560 + shake, my = 1000;
    // inner dark nest, seen when the wall tears away
    if (open > 0) { const inside = cache('inside', () => paperize(460, 620, (c) => { c.fillStyle = C.hole; blob(c, ellPts(H.rng(7), 230, 310, 215, 300, 0, 3)); }, { seed: 9 })); put(ctx, inside, mx, my + 130, { d: 0 }); }
    // wall: two halves, split along a torn line
    const half = (side) => { ctx.save(); ctx.translate(mx + side * open * 150, my + open * 18); ctx.rotate(side * open * 0.1); ctx.beginPath(); const r = H.rng(90); if (side < 0) ctx.rect(-500, -600, 500, 1200); else ctx.rect(0, -600, 500, 1200); ctx.clip(); put(ctx, M, 0, 0, { d: 1.2 }); ctx.restore(); };
    if (open <= 0) put(ctx, M, mx, my, { d: 1.2 }); else { half(-1); half(1); }
    // ants spill out
    if (open > 0) { const r = H.rng(33); for (let i = 0; i < 40; i++) { const a = r() * TAU, d = r.range(30, 210), sp = r.range(0.6, 1.4), yy = r.range(-250, 330); ant(ctx, mx + Math.cos(a + t * sp) * d * open, my + 130 + yy + Math.sin(t * 3 + i) * 12, 0.9, a + t * sp, 0.05); } }
    // paw swings down from top-left and rakes across on "rip"
    const inP = seg(t, P(3, 'big') - 0.3, P(3, 'claws')), rake = seg(t, R - 0.12, R + 0.18), away = seg(t, R + 0.7, R + 1.3);
    if (inP > 0) put(ctx, pawSpr(), -300 + inP * 520 + rake * 330 - away * 700, 40 + inP * 360 + rake * 260 - away * 200, { s: 1, rot: -0.35 + rake * 0.3, d: 1.8 });
    tag(ctx, t, P(3, 'big') - 0.1, 'BIG CLAWS', 100, C.ink, 660, 260, { rot: 0.02, d: 1 });
    const B = popIn(t, R); if (B) { put(ctx, burstSpr(), 780, 1440, { s: B.s * 0.8, d: 0.6 }); put(ctx, wordSpr('RIP!', 110, C.coral, null), 780, 1440, { s: B.s, rot: -0.1, d: 0.3 }); }
  }

  // ================= SCENE 3: the tongue =================
  function sceneTongue(ctx, t) {
    ctx.drawImage(MORN(), 0, 0);
    const out = seg(t, P(4, 'out') - 0.1, P(4, 'tongue')), fl = P(6, 'flicking');
    // real rate: up to 150 a minute = 2.5 in-and-outs a second
    const f = t < fl ? 1 : 0.62 + 0.38 * Math.cos((t - fl) * 2.5 * TAU);
    const len = 400 * out * f;
    anteater(ctx, 80, 1090, 0.86, { breathe: Math.sin(t * 2) * 3, tongue: len, tongueDy: 12 });
    const sx = 80 + SNOUT[0] * 0.86;
    // broken mound to the right, tongue tip goes inside it
    put(ctx, moundSpr(460, 760, 8), 1000, 1040, { d: 1 });
    const inside = cache('in2', () => paperize(220, 340, (c) => { c.fillStyle = C.hole; blob(c, ellPts(H.rng(11), 110, 170, 100, 160, 0, 2)); }, { seed: 12 })); put(ctx, inside, 940, 1140, { d: 0 });
    const tipX = sx + len;
    const stuck = H.rng(4); for (let i = 0; i < 8; i++) { const x = 860 + stuck() * 130, y = 1040 + stuck() * 220; ant(ctx, x, y, 0.72, stuck() * TAU, 0.05); }
    tag(ctx, t, P(4, 'tongue') - 0.15, 'TONGUE', 92, C.coral, 540, 860, { rot: -0.015 });
    // ruler on "two feet"
    const RA = dropIn(t, P(5, 'two') - 0.12, 0.35, 60);
    if (RA) { const ruler = cache('rul', () => { const r = H.rng(13); return compose(780, 118, [[(c) => { c.fillStyle = C.gold; blob(c, rect(r, 6, 8, 774, 110, 28, 0.6)); c.fillStyle = C.ink; for (let i = 0; i <= 24; i++) c.fillRect(30 + i * 30, 12, 4, i % 12 === 0 ? 62 : i % 3 === 0 ? 40 : 22); }, 0]]); }); put(ctx, ruler, 430, 1445 + RA.dy, { d: 1 + RA.d, rot: -0.01 }); put(ctx, wordSpr('2 FEET', 84, C.ink, C.card, 12), 430, 1574 + RA.dy, { d: 0.8 }); }
    if (t >= P(6, 'hundred') - 0.15) centerRow(ctx, '150', 400, 190, C.ink);
    tag(ctx, t, P(6, 'times') - 0.12, 'TIMES A MINUTE', 76, C.coral, 540, 590, { rot: 0.01 });
  }

  // ================= SCENE 4: spines + spit, close up =================
  const tongueBand = () => cache('band', () => { const r = H.rng(21); return compose(2600, 460, [
    [(c) => { c.fillStyle = C.pinkD; blob(c, rect(r, 0, 16, 2600, 444, 30, 2)); }, 0],
    [(c) => { c.fillStyle = C.pink; blob(c, rect(r, 0, 40, 2600, 420, 30, 2)); }, 0.3],
    [(c) => { c.fillStyle = C.spine; for (let x = 16; x < 2590; x += 62) for (let row = 0; row < 5; row++) { const y = 70 + row * 70, o = row % 2 ? 31 : 0; c.beginPath(); c.moveTo(x + o + 40, y - 13); c.lineTo(x + o - 18, y); c.lineTo(x + o + 40, y + 13); c.closePath(); c.fill(); } }, 0.4],
  ]); });
  const RIDERS = [[300, 110], [520, 320], [760, 170], [980, 340], [1210, 120], [1450, 260], [1680, 150]];
  function sceneSpines(ctx, t) {
    ctx.drawImage(flat('sp', '#5c3b4e', '#7c4a5c', 31), 0, 0);
    const slide = Math.max(0, t - (P(9, 'come') - 0.15)) * 520, base = (t - PS(7)) * 28;
    const off = base + slide, TY = 760;
    put(ctx, tongueBand(), 1300 - (off % 1302), TY + 225, { d: 1.6 });
    // sticky drops of spit on the tongue
    const sa = P(8, 'thick') - 0.1, dr = H.rng(55);
    for (let i = 0; i < 14; i++) { const x0 = dr() * 1500, y0 = TY + 40 + dr() * 380, A = popIn(t, sa + i * 0.05, 0.3), rr = dr.range(16, 34); if (!A) continue; const x = ((x0 - off) % 1500 + 1500) % 1500 - 100;
      ctx.save(); ctx.globalAlpha = 0.72; ctx.fillStyle = '#e7f4f6'; ctx.beginPath(); ctx.ellipse(x, y0, rr * A.s, rr * 0.8 * A.s, 0, 0, TAU); ctx.fill(); ctx.globalAlpha = 0.95; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x - rr * 0.3, y0 - rr * 0.25, rr * 0.2, 0, TAU); ctx.fill(); ctx.restore(); }
    // ants land on "ants" and ride off to the left
    const stick = P(9, 'ants') - 0.12;
    RIDERS.forEach(([x0, dy], i) => { const A = dropIn(t, stick + i * 0.05, 0.3, 120); if (!A) return; const x = x0 - Math.max(0, slide - 0) * 0.92; if (x < -80) return; ant(ctx, x, TY + dy + A.dy, 1.4, Math.sin(t * 9 + i) * 0.08 + Math.PI, 0.3); });
    tag(ctx, t, P(7, 'tiny') - 0.1, 'TINY', 90, C.card, 300, 360, { back: C.coral, rot: -0.03 });
    tag(ctx, t, P(7, 'backward') - 0.12, 'BACKWARD', 96, C.ink, 540, 500, { rot: 0.01 });
    tag(ctx, t, P(7, 'spines') - 0.12, 'SPINES', 110, C.coral, 740, 650, { rot: -0.01 });
    tag(ctx, t, P(8, 'sticky') - 0.12, 'STICKY SPIT', 92, C.ink, 540, 1360, { rot: -0.015 });
    const au = H.clamp((t - (P(9, 'come') - 0.1)) / 0.6); if (au > 0) arrow(ctx, 860, 1520, 560, 1590, 240, 1500, au, C.gold, 301);
  }

  // ================= SCENE 5: roof of the mouth =================
  function sceneMouth(ctx, t) {
    ctx.drawImage(flat('mo', '#3e6b6a', '#4f8380', 37), 0, 0);
    const skull = cache('skull', () => { const r = H.rng(43); return compose(W0, 700, [
      [(c) => { c.fillStyle = C.head; blob(c, cutLines(r, [[-20, 70], [300, 90], [800, 240], [1100, 300], [1100, 480], [800, 520], [300, 660], [-20, 680], [-20, 70]], 22, 1)); }, 0],
      [(c) => { c.fillStyle = '#c47f83'; blob(c, cutLines(r, [[-20, 300], [360, 300], [800, 345], [1100, 365], [1100, 425], [800, 450], [360, 520], [-20, 540], [-20, 300]], 20, 0.8)); }, 0.1],
      [(c) => { c.fillStyle = '#d98a93'; blob(c, cutLines(r, [[-20, 270], [360, 280], [800, 335], [1100, 358], [1100, 374], [800, 352], [360, 312], [-20, 316], [-20, 270]], 20, 0.6)); }, 0.5],
    ]); });
    ctx.drawImage(skull, 0, 560);
    const cr = P(11, 'crushes') - 0.05, pres = t < cr ? 0 : (0.5 + 0.5 * Math.sin((t - cr) * 7 - 1.57));
    // tongue rises and presses on the roof, ants flatten (no gore: they just go flat)
    const ty = 1000 - pres * 120 * H.clamp((t - cr) * 3);
    ctx.save(); ctx.fillStyle = C.pink; ctx.shadowColor = 'rgba(14,10,30,0.45)'; ctx.shadowBlur = 12; ctx.beginPath(); ctx.moveTo(-20, ty + 30); ctx.quadraticCurveTo(300, ty - 40, 620, ty + 30); ctx.quadraticCurveTo(860, ty + 30, 1100, 960); ctx.lineTo(1100, 1000); ctx.quadraticCurveTo(700, 1090, -20, 1110); ctx.closePath(); ctx.fill(); ctx.restore();
    const r = H.rng(83); for (let i = 0; i < 6; i++) { const u = (i + 0.5) / 6, x = 70 + u * 620, y = ty + 6 - 30 * Math.sin(u * 3.14); ant(ctx, x, y - 16 + pres * 8, 1.05, 3.14, 0.1, 1.05 * (1 - pres * 0.65)); }
    // the tooth that isn't there
    const TA = popIn(t, P(10, 'no') - 0.1); if (TA) { put(ctx, toothSpr(), 300, 390, { s: TA.s * 1.15, d: 0.7 + TA.d, rot: -0.1 }); const XA = popIn(t, P(10, 'teeth') - 0.05); if (XA) put(ctx, crossSpr(), 300, 390, { s: XA.s * 1.25, d: 0.8 }); }
    tag(ctx, t, P(10, 'teeth') - 0.12, 'NO TEETH', 94, C.coral, 700, 390, { rot: 0.015 });
    tag(ctx, t, P(11, 'crushes') - 0.1, 'CRUSH!', 110, C.card, 540, 1420, { back: C.coral, rot: -0.02 });
    tag(ctx, t, P(11, 'roof') - 0.12, 'ROOF OF THE MOUTH', 66, C.ink, 540, 570, { rot: -0.005 });
    const au = H.clamp((t - P(11, 'roof')) / 0.4); if (au > 0) arrow(ctx, 540, 625, 520, 720, 450, 830, au, C.gold, 311);
  }

  // ================= SCENE 6: stomach + grit + gizzard =================
  const stomachSpr = () => cache('stom', () => { const r = H.rng(47); const shape = (k) => { const o = []; for (let a = 0; a < TAU; a += 0.2) { const rr = 300 * k * (1 + 0.14 * Math.cos(a * 2 + 0.5) + 0.06 * Math.sin(a * 3)); o.push([400 + Math.cos(a) * rr * 1.15, 400 + Math.sin(a) * rr + r.gauss() * 2]); } return o; };
    return compose(800, 800, [
      [(c) => { c.fillStyle = '#c95f6d'; blob(c, shape(1)); c.strokeStyle = '#c95f6d'; c.lineWidth = 62; c.lineCap = 'round'; c.beginPath(); c.moveTo(300, 150); c.quadraticCurveTo(250, 50, 270, 0); c.stroke(); }, 0],
      [(c) => { c.fillStyle = '#de7f89'; blob(c, shape(0.84)); c.fillStyle = '#c95f6d'; for (let i = 0; i < 9; i++) { const a = (i / 9) * TAU; c.save(); c.translate(400, 400); c.rotate(a); c.fillRect(150, -7, 90, 14); c.restore(); } }, 0.5],
      [(c) => { c.fillStyle = '#5f2c38'; blob(c, shape(0.46)); }, 0.1],
    ]); });
  const birdSpr = () => cache('bird', () => { const r = H.rng(49); return compose(340, 300, [
    [(c) => { c.fillStyle = '#6fa1b8'; blob(c, ellPts(r, 150, 165, 115, 85, -0.1, 0.8)); blob(c, ellPts(r, 245, 95, 54, 50, 0, 0.5)); }, 0],
    [(c) => { c.fillStyle = '#4f7f96'; blob(c, ellPts(r, 120, 160, 74, 44, -0.3, 0.6)); c.fillStyle = C.gold; blob(c, [[292, 84], [336, 100], [292, 112]]); c.fillStyle = C.blk; blob(c, ellPts(r, 258, 84, 8, 8, 0, 0.2)); c.fillStyle = C.gold; c.fillRect(120, 246, 12, 44); c.fillRect(170, 246, 12, 44); }, 0.5],
    [(c) => { c.fillStyle = '#c95f6d'; blob(c, ellPts(r, 190, 180, 34, 30, 0, 0.3)); c.fillStyle = C.chipG || '#d9cdb4'; for (let i = 0; i < 5; i++) blob(c, ellPts(r, 174 + i * 8, 170 + (i % 2) * 16, 7, 6, 0, 0.3)); }, 0.3],
  ]); });
  const BITS = (() => { const r = H.rng(66), o = []; for (let i = 0; i < 46; i++) o.push({ a: r() * TAU, d: r.range(20, 130), sp: r.range(1, 2.4) * (r() < 0.5 ? -1 : 1), s: r.range(0.5, 1) }); return o; })();
  const GRIT = (() => { const r = H.rng(67), o = []; for (let i = 0; i < 18; i++) o.push({ a: r() * TAU, d: r.range(30, 125), dl: i * 0.05, sz: r.range(11, 19), sp: r.range(1.2, 2.2) }); return o; })();
  function sceneStomach(ctx, t) {
    ctx.drawImage(flat('st', '#f0c9a4', '#f6dcbc', 53), 0, 0);
    const shrink = seg(t, P(15, 'bit') - 0.25, P(15, 'like') + 0.15), cy = 950 - shrink * 130, baseS = 1 - shrink * 0.28;
    const m = P(12, 'muscular') - 0.1, sq = t < m ? 0 : Math.sin((t - m) * 8);
    const sx = baseS * (1 + sq * 0.05), sy = baseS * (1 - sq * 0.05);
    const cx = 540 - shrink * 130;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(sx, sy); put(ctx, stomachSpr(), 0, 0, { d: 1.4 });
    const pul = H.clamp((t - P(13, 'pulverizes')) / 1.1);
    BITS.forEach((b, i) => { if (i >= 12 + pul * 34) return; const a = b.a + t * b.sp * (1 + pul * 0.7); const x = Math.cos(a) * b.d, y = Math.sin(a) * b.d * 0.85; if (pul < 0.5 && i < 12) ant(ctx, x, y, 0.8 * b.s * (1 - pul), a, 0); else { ctx.fillStyle = C.ant; ctx.fillRect(x - 5 * b.s, y - 4 * b.s, 10 * b.s, 8 * b.s); } });
    // grit drops down the throat
    const g0 = P(14, 'grit') - 0.15;
    GRIT.forEach((g) => { const u = H.clamp((t - g0 - g.dl) / 0.6); if (u <= 0) return; const a = g.a + (t - g0) * g.sp, tx = Math.cos(a) * g.d, ty = Math.sin(a) * g.d * 0.85, sx0 = -130, sy0 = -400; const e = H.ease.inOut(u); ctx.fillStyle = '#d9cdb4'; ctx.strokeStyle = '#8f8570'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(sx0 + (tx - sx0) * e, sy0 + (ty - sy0) * e, g.sz, g.sz * 0.8, a, 0, TAU); ctx.fill(); ctx.stroke(); });
    ctx.restore();
    tag(ctx, t, P(12, 'muscular') - 0.12, 'VERY MUSCULAR', 86, C.ink, 540, 320, { rot: -0.012 });
    if (t < PS(14) - 0.1) tag(ctx, t, P(13, 'pulverizes') - 0.12, 'PULVERIZED', 104, C.coral, 540, 1470, { rot: 0.012 });
    if (t >= PS(14) - 0.1) {
      tag(ctx, t, P(14, 'scientists') - 0.1, 'SCIENTISTS THINK', 66, C.ink, 540, 450, { rot: 0.005 });
      tag(ctx, t, P(14, 'grit') - 0.12, '+ GRIT', 100, C.ink, 830, 660, { rot: 0.03 });
      const A = popIn(t, P(15, 'birds') - 0.15); if (A) { put(ctx, wordSpr('=', 110, C.ink, null), 615, 1110, { s: A.s, d: 0.4 }); put(ctx, birdSpr(), 840, 1110, { s: A.s * 1.25, d: 1.2 + A.d }); }
      tag(ctx, t, P(15, 'gizzard') - 0.12, "LIKE A GIZZARD", 92, C.coral, 540, 1400, { rot: -0.012 });
    }
  }

  // ================= SCENE 7: the clever part, one minute per mound (camera tracks along the diorama) =================
  function sceneMounds(ctx, t) {
    ctx.drawImage(SAV(), 0, 0);
    const g0 = P(18, 'then') - 0.1, g1 = P(19, 'before') + 0.5, cam = seg(t, g0, g1) * 720, moving = t > g0 && t < g1;
    const GY = 1310;
    const mound = (x, seed) => put(ctx, moundSpr(430, 560, seed), x - cam, GY - 230, { d: 1 });
    mound(860, 15); mound(1580, 16); mound(2300, 17);
    // ants pour out of the old mound, too late
    const sw = H.clamp((t - (P(19, 'ants') - 0.15)) / 0.5);
    if (sw > 0) { const r = H.rng(71); for (let i = 0; i < 30; i++) { const d = r() * 280 * sw, a = r.range(-3.1, 0.1), wig = Math.sin(t * 9 + i) * 8; ant(ctx, 860 - cam + Math.cos(a) * d * 1.1 + wig * 0.5, GY - 20 + Math.sin(a) * d * 0.5 + wig * 0.5 + 40, 0.9, a, 0.05); } }
    const flick = moving ? 0 : 150 + 45 * Math.cos(t * 2.5 * TAU);
    anteater(ctx, 395, GY - 210, 0.68, { walk: moving ? t * 8 : 0, breathe: Math.sin(t * 2) * 3, tongue: flick, tongueDy: 6 });
    const A = dropIn(t, P(16, 'clever') - 0.15, 0.4, 80); if (A) { put(ctx, burstSpr(), 540, 330 + A.dy, { s: 0.7, d: 0.6 }); put(ctx, wordSpr('CLEVER', 100, C.ink, C.card, 14), 540, 280 + A.dy, { d: 1 + A.d, rot: -0.02 }); put(ctx, wordSpr('PART', 100, C.coral, C.card, 14), 540, 420 + A.dy, { d: 1 + A.d, rot: 0.02 }); }
    // paper clock on "about a minute", sweeps its hand once over the rest of the sentence
    const CA = popIn(t, P(17, 'about') - 0.15); if (CA) { const clock = cache('clk', () => { const r = H.rng(77); return compose(250, 250, [[(c) => { c.fillStyle = C.card; blob(c, circPts(r, 125, 125, 115, 14, 0.4)); }, 0], [(c) => { c.fillStyle = C.ink; for (let i = 0; i < 12; i++) { c.save(); c.translate(125, 125); c.rotate(i / 12 * TAU); c.fillRect(-3, -102, 6, 20); c.restore(); } }, 0.1]]); });
      const cx = 215, cy = 690; put(ctx, clock, cx, cy, { s: CA.s, d: 1 + CA.d }); ctx.save(); ctx.translate(cx, cy); ctx.rotate((t - P(17, 'about')) * TAU / (PE(18) - P(17, 'about') + 0.2)); ctx.fillStyle = C.coral; ctx.fillRect(-5, -86, 10, 90); ctx.restore(); }
    tag(ctx, t, P(17, 'minute') - 0.12, 'ABOUT 1 MIN', 84, C.ink, 660, 660, { rot: 0.012 });
    tag(ctx, t, P(17, 'mound') - 0.12, 'PER MOUND', 72, C.ink, 690, 790, { rot: -0.01 });
    tag(ctx, t, P(19, 'fight') - 0.12, 'TOO SLOW!', 104, C.card, 540, 1540, { back: C.red, rot: -0.02 });
  }

  // ================= SCENE 8: the question =================
  const foodSpr = (k) => cache('food' + k, () => { const r = H.rng(90 + k); return compose(220, 220, k === 0
    ? [[(c) => { c.fillStyle = '#e0a94f'; blob(c, cutLines(r, [[20, 40], [200, 40], [110, 210], [20, 40]], 18, 0.6)); }, 0], [(c) => { c.fillStyle = C.red; [[80, 75], [135, 75], [108, 130]].forEach(([x, y]) => blob(c, ellPts(r, x, y, 17, 17, 0, 0.3))); }, 0.2]]
    : k === 1 ? [[(c) => { c.fillStyle = '#d9a86a'; c.beginPath(); c.arc(110, 110, 90, 0, TAU); c.arc(110, 110, 30, 0, TAU, true); c.fill('evenodd'); }, 0], [(c) => { c.fillStyle = '#ef8fb0'; c.beginPath(); c.arc(110, 104, 78, 0, TAU); c.arc(110, 104, 36, 0, TAU, true); c.fill('evenodd'); }, 0.3]]
    : [[(c) => { c.strokeStyle = '#5f8f4f'; c.lineWidth = 9; c.beginPath(); c.moveTo(90, 100); c.quadraticCurveTo(110, 30, 170, 18); c.moveTo(140, 110); c.quadraticCurveTo(150, 60, 170, 18); c.stroke(); }, 0], [(c) => { c.fillStyle = C.red; blob(c, circPts(r, 80, 140, 56, 12, 0.4)); blob(c, circPts(r, 150, 150, 52, 12, 0.4)); }, 0.4]]); });
  function sceneEnd(ctx, t) {
    ctx.drawImage(MORN(), 0, 0);
    anteater(ctx, 490, 1090, 0.8, { breathe: Math.sin(t * 2) * 3, tongue: 90 + 20 * Math.sin(t * 5), walk: 0 });
    if (t >= P(20, 'thirty') - 0.15) centerRow(ctx, '30,000', 360, 150, C.coral);
    const s0 = P(20, 'something') - 0.15;
    [[240, 0], [540, 1], [840, 2]].forEach(([x, k], i) => { const A = popIn(t, s0 + i * 0.09); if (A) put(ctx, foodSpr(k), x, 575 + Math.sin(t * 2 + i) * 6, { s: A.s * 0.85, d: 1 + A.d, rot: (i - 1) * 0.08 }); });
    tag(ctx, t, P(21, 'zero') - 0.12, 'ZERO TEETH', 84, C.ink, 540, 760, { rot: -0.012 });
    tag(ctx, t, P(21, 'what') - 0.12, 'WHAT WOULD', 96, C.ink, 540, 1420, { rot: 0.01 });
    tag(ctx, t, P(21, 'pick') - 0.12, 'YOU PICK?', 112, C.coral, 540, 1565, { rot: -0.012, d: 1.1 });
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
  const SC = [{ f: sceneHook }, { p: 3, f: sceneClaws, d: 'right' }, { p: 4, f: sceneTongue, d: 'right' }, { p: 7, f: sceneSpines, d: 'up' }, { p: 10, f: sceneMouth, d: 'right' }, { p: 12, f: sceneStomach, d: 'up' }, { p: 16, f: sceneMounds, d: 'right' }, { p: 20, f: sceneEnd, d: 'up' }];
  SC.forEach((s) => { if (s.p != null) s.cut = PS(s.p) - SLIDE - 0.02; });
  function explainer(ctx, Wd, Hd, t) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0);
    let i = 0; for (let k = 1; k < SC.length; k++) if (t >= SC[k].cut) i = k;
    if (i === 0) SC[0].f(ctx, t); else slideIn(ctx, t, SC[i].cut, SC[i - 1].f, SC[i].f, SC[i].d);
    finish(ctx, t);
    ctx.restore();
  }

  // ---------------- sound: paper tap per landing (recorded from the scenes), slides, tears, big hits ----------------
  function collect() {
    const out = []; REC = out; const cv = H.layer(54, 96), c = cv.getContext('2d');
    try { SC.forEach((sc, i) => { const a = i ? sc.cut : 0, b = i + 1 < SC.length ? SC[i + 1].cut + SLIDE : DURATION; for (let k = 0; k <= 8; k++) { c.setTransform(1, 0, 0, 1, 0, 0); c.save(); c.scale(0.05, 0.05); sc.f(c, a + (b - a) * (k / 8) + 0.01); c.restore(); } }); } catch (e) {}
    REC = null; const seen = new Set(), res = []; out.sort((x, y) => x - y).forEach((e) => { const key = Math.round(e * 25); if (seen.has(key) || e < 0 || e > DURATION) return; seen.add(key); res.push(e); }); return res;
  }
  function scoreSound(k) {
    const card = (t, g = 1, p = 0, f = 1, minor = true) => { k.noise(t, { dur: 0.045, filter: 'bandpass', f: 1100 * f, q: 0.9, gain: 0.26 * g, a: 0.001, pan: p, minor }); k.noise(t, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 650, gain: 0.3 * g, a: 0.002, pan: p, minor }); k.tone(t, { f: [[0, 160 * f], [0.07, 85]], dur: 0.09, gain: 0.16 * g, pan: p, minor }); };
    const layer = (t, d, g = 1) => { k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 260], [d * 0.5, 620], [d, 300]], q: 0.6, gain: 0.16 * g, a: d * 0.45, pan: 0.15 }); k.noise(t + 0.05, { dur: d, color: 'brown', filter: 'lowpass', f: 380, gain: 0.14 * g, a: d * 0.5, pan: -0.15 }); };
    const tear = (t, d = 0.45) => { const r = H.rng(Math.round(t * 100)); for (let x = 0; x < d; x += 0.018 + r() * 0.02) k.noise(t + x, { dur: 0.03, filter: 'bandpass', f: 1500 + r() * 2500, q: 0.8, gain: 0.3, a: 0.001 }); };
    const hit = (t, g = 1) => { k.play('impact', t, { gain: 0.9 * g }); k.play('thud', t, { gain: 0.6 * g, f: 110 }); };
    const flick = (t, g = 1) => { k.noise(t, { dur: 0.03, filter: 'bandpass', f: 2200, q: 1.4, gain: 0.2 * g, a: 0.001, minor: true }); };
    collect().forEach((t) => card(t, 0.7, 0, 1.15));
    SC.forEach((s) => { if (s.cut != null) { layer(s.cut, SLIDE + 0.1); k.play('whoosh', s.cut, { dur: SLIDE, gain: 0.4 }); } });
    hit(P(0, 'zero') - 0.05, 0.8); k.play('error', P(0, 'teeth') + 0.1, { gain: 0.35 });
    k.play('ding', P(1, 'ants') , { f: 'G5', gain: 0.3 });
    tear(P(3, 'rip') - 0.05, 0.42); hit(P(3, 'rip'), 0.7);
    for (let tb = P(6, 'flicking'); tb < PE(6) + 0.45; tb += 0.4) flick(tb);
    hit(P(6, 'hundred') - 0.06, 0.8);
    k.play('sparkle', P(8, 'sticky'), { n: 4, gain: 0.35 });
    const cr = P(11, 'crushes'); for (let i = 0; i < 3; i++) k.play('thud', cr + 0.2 + i * 0.9, { gain: 0.45, f: 90 });
    for (let i = 0; i < 5; i++) k.play('thud', P(12, 'muscular') + i * 0.78, { gain: 0.25, f: 70 });
    for (let i = 0; i < 12; i++) k.noise(P(14, 'grit') + i * 0.07, { dur: 0.03, filter: 'bandpass', f: 2800, q: 2, gain: 0.14, a: 0.001, minor: true });
    k.play('ding', P(15, 'gizzard'), { f: 'E5', gain: 0.3 });
    k.play('sparkle', P(16, 'clever'), { n: 5, gain: 0.45 });
    for (let i = 0; i < 8; i++) card(P(18, 'then') + i * 0.22, 0.45, 0, 0.9);
    k.play('slap', P(19, 'fight'), { gain: 0.55 });
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PE(21) + 0.1 + i * 0.09, { f, gain: 0.38 - i * 0.04, pan: (i - 1) * 0.25 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); ctx.drawImage(SAV(), 0, 0);
    anteater(ctx, 330, 1130, 0.9, { tongue: 300, tongueDy: 30 });
    put(ctx, wordSpr('2-FOOT', 180, C.coral, C.card, 22), 540, 430, { d: 1.6, rot: -0.03 });
    put(ctx, wordSpr('TONGUE', 180, C.ink, C.card, 22), 540, 660, { d: 1.6, rot: 0.02 });
    finish(ctx, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
