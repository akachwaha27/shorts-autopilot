// ================= Cut-Paper Diorama, vertical 1080x1920: "Why do cats knead with their paws?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":1.69,"text":"Why does your cat knead you?","words":[["why",0.25],["does",0.45],["your",0.71],["cat",0.97],["knead",1.17],["you",1.5]]},{"s":2.19,"e":3.91,"text":"It's a kitten trick it never quit.","words":[["its",2.19],["a",2.39],["kitten",2.46],["trick",2.86],["it",3.19],["never",3.32],["quit",3.65]]},{"s":4.37,"e":6.2,"text":"Newborn kittens can barely see,","words":[["newborn",4.37],["kittens",4.86],["can",5.35],["barely",5.57],["see",5.99]]},{"s":6.41,"e":7.4,"text":"but they can push.","words":[["but",6.41],["they",6.62],["can",6.91],["push",7.12]]},{"s":7.78,"e":10.11,"text":"They press tiny front paws into their mom,","words":[["they",7.78],["press",8.05],["tiny",8.4],["front",8.67],["paws",9.01],["into",9.29],["their",9.56],["mom",9.9]]},{"s":10.5,"e":11.8,"text":"left, right, left,","words":[["left",10.5],["right",10.9],["left",11.4]]},{"s":12.19,"e":13.75,"text":"and that gets the milk flowing.","words":[["and",12.19],["that",12.38],["gets",12.63],["the",12.88],["milk",13.06],["flowing",13.31]]},{"s":14.16,"e":15.2,"text":"Push, push, sip.","words":[["push",14.16],["push",14.54],["sip",14.92]]},{"s":15.53,"e":17.44,"text":"Most cats just never outgrow it.","words":[["most",15.53],["cats",15.82],["just",16.11],["never",16.41],["outgrow",16.78],["it",17.29]]},{"s":17.82,"e":20.51,"text":"Grown cats knead when they feel safe and calm,","words":[["grown",17.82],["cats",18.19],["knead",18.48],["when",18.84],["they",19.13],["feel",19.42],["safe",19.71],["and",20.0],["calm",20.22]]},{"s":21.08,"e":22.44,"text":"so a cat kneading your lap","words":[["so",21.08],["a",21.21],["cat",21.28],["kneading",21.47],["your",21.99],["lap",22.25]]},{"s":22.53,"e":24.09,"text":"is kind of a big compliment.","words":[["is",22.53],["kind",22.68],["of",22.96],["a",23.1],["big",23.17],["compliment",23.38]]},{"s":24.52,"e":26.35,"text":"But there's a sneaky second job.","words":[["but",24.52],["theres",24.74],["a",25.18],["sneaky",25.25],["second",25.69],["job",26.13]]},{"s":26.71,"e":29.31,"text":"Cats have scent glands between their paw pads.","words":[["cats",26.71],["have",26.98],["scent",27.26],["glands",27.6],["between",28.01],["their",28.49],["paw",28.83],["pads",29.03]]},{"s":29.75,"e":31.96,"text":"Every push leaves a smell you can't notice,","words":[["every",29.75],["push",30.08],["leaves",30.34],["a",30.73],["smell",30.79],["you",31.12],["cant",31.31],["notice",31.57]]},{"s":32.34,"e":33.54,"text":"but other cats can.","words":[["but",32.34],["other",32.58],["cats",32.98],["can",33.3]]},{"s":33.96,"e":36.1,"text":"It's like a tiny stamp that says, mine.","words":[["its",33.96],["like",34.18],["a",34.48],["tiny",34.55],["stamp",34.85],["that",35.21],["says",35.51],["mine",35.81]]},{"s":36.54,"e":38.92,"text":"Wild cats even knead soft grass","words":[["wild",36.54],["cats",36.91],["even",37.28],["knead",37.64],["soft",38.1],["grass",38.47]]},{"s":39.23,"e":41.07,"text":"to make a comfy bed before a nap.","words":[["to",39.23],["make",39.38],["a",39.68],["comfy",39.75],["bed",40.12],["before",40.34],["a",40.78],["nap",40.85]]},{"s":41.47,"e":42.79,"text":"So when your cat kneads you,","words":[["so",41.47],["when",41.59],["your",41.83],["cat",42.07],["kneads",42.25],["you",42.61]]},{"s":43.25,"e":44.55,"text":"is it being a kitten again,","words":[["is",43.25],["it",43.38],["being",43.5],["a",43.81],["kitten",43.87],["again",44.24]]},{"s":44.7,"e":46.63,"text":"or stamping you as its property?","words":[["or",44.7],["stamping",44.85],["you",45.44],["as",45.66],["its",45.81],["property",46.03]]}];
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
    pink: '#f19aa6', pinkD: '#d9707f', milk: '#fffaf0', jeans: '#3d5a8a', jeansD: '#2f4870', blk: '#26221f', grass: '#6f9a4a', grassD: '#55803a' };
  const KP = {
    tabby: { co: '#e39444', coD: '#b9692b', st: '#a2541f', cr: '#f6e3c4' },
    mom: { co: '#9a96a3', coD: '#75717f', st: '#5b5866', cr: '#efe9e2' },
    grey: { co: '#7e8798', coD: '#606979', st: '#4c5463', cr: '#e9e6e0' },
    wild: { co: '#cfa86c', coD: '#a5814d', st: '#6e5232', cr: '#f1e2c4' },
    kit: { co: '#e8a65a', coD: '#c07d3a', st: '#a8622a', cr: '#f8e9cf' },
    kitG: { co: '#a8a4b0', coD: '#85818f', st: '#66636f', cr: '#f1ece6' },
    kitC: { co: '#efe0c6', coD: '#cdb996', st: '#c49c70', cr: '#fbf3e4' },
  };
  const knead = (t, ph, rate = 2.4) => Math.max(0, Math.sin((t * rate + ph) * Math.PI));

  // ---------------- cat, side view facing right, head turned to camera ----------------
  // sheet 640x480; ground point (GX, GY)
  const GX = 300, GY = 458;
  const catBody = (kind = 'tabby', eye = 'happy') => cache('cat' + kind + eye, () => {
    const k = KP[kind], r = H.rng(kind.length * 31 + eye.length), kit = kind.startsWith('kit'), hr = kit ? 112 : 95, hx = 470, hy = kit ? 210 : 195;
    const brx = kit ? 165 : 190;
    return compose(640, 480, [
      [(c) => { strokePts(c, [[120, 400], [52, 350], [36, 262], [64, 196], [98, 176]], kit ? 30 : 36, k.co); }, 0.2],
      [(c) => { c.fillStyle = k.co; blob(c, ellPts(r, 280, 455 - 105, brx, 105, 0, 0.8)); blob(c, ellPts(r, 160, 370, 92, 86, 0, 0.6)); blob(c, ellPts(r, 400, 332, 78, 100, 0, 0.6)); }, 0.7],
      [(c) => { c.fillStyle = k.st; [[200, 262], [262, 252], [324, 258]].forEach(([x, y], i) => { c.save(); c.translate(x, y); c.rotate(0.15 * (i - 1)); blob(c, cutLines(r, [[-14, 0], [14, 0], [8, 62], [-8, 62], [-14, 0]], 12, 0.6)); c.restore(); });
        strokePts(c, [[86, 340], [60, 300]], 10, k.st); strokePts(c, [[44, 250], [70, 236]], 10, k.st); }, 0.15],
      [(c) => { c.fillStyle = k.cr; blob(c, ellPts(r, 420, 362, 52, 70, 0, 0.5)); }, 0.2],
      [(c) => { c.fillStyle = k.co; blob(c, [[hx - 78, hy - 45], [hx - 70, hy - 140], [hx - 14, hy - 88]]); blob(c, [[hx + 14, hy - 88], [hx + 70, hy - 140], [hx + 78, hy - 45]]); blob(c, circPts(r, hx, hy, hr, 14, 0.6)); }, 0.8],
      [(c) => { c.fillStyle = C.pink; blob(c, [[hx - 66, hy - 60], [hx - 62, hy - 118], [hx - 28, hy - 86]]); blob(c, [[hx + 28, hy - 86], [hx + 62, hy - 118], [hx + 66, hy - 60]]);
        c.fillStyle = k.st; [[-20, -92], [0, -96], [20, -92]].forEach(([x, y]) => blob(c, cutLines(r, [[hx + x - 6, hy + y], [hx + x + 6, hy + y], [hx + x + 3, hy + y + 34], [hx + x - 3, hy + y + 34], [hx + x - 6, hy + y]], 10, 0.4))); }, 0.2],
      [(c) => { c.fillStyle = k.cr; blob(c, ellPts(r, hx - 20, hy + 44, 32, 26, 0, 0.4)); blob(c, ellPts(r, hx + 20, hy + 44, 32, 26, 0, 0.4)); }, 0.25],
      [(c) => { c.fillStyle = C.pinkD; blob(c, [[hx - 14, hy + 20], [hx + 14, hy + 20], [hx, hy + 34]]);
        c.strokeStyle = C.blk; c.lineCap = 'round'; c.lineWidth = 5; const ex = kit ? 40 : 36, ey = hy - 4;
        if (eye === 'open') { c.fillStyle = '#7fb24a'; [-1, 1].forEach((sd) => { blob(c, ellPts(r, hx + sd * ex, ey, 17, 19, 0, 0.3)); }); c.fillStyle = C.blk; [-1, 1].forEach((sd) => blob(c, ellPts(r, hx + sd * ex, ey, 6, 15, 0, 0.2))); c.fillStyle = '#fff'; [-1, 1].forEach((sd) => blob(c, ellPts(r, hx + sd * ex + 5, ey - 7, 4, 4, 0, 0.1))); }
        else if (eye === 'closed') { [-1, 1].forEach((sd) => { c.beginPath(); c.moveTo(hx + sd * ex - 15, ey + 2); c.lineTo(hx + sd * ex + 15, ey + 2); c.stroke(); }); }
        else { [-1, 1].forEach((sd) => { c.beginPath(); c.arc(hx + sd * ex, ey + 8, 14, Math.PI + 0.35, -0.35); c.stroke(); }); }
        c.lineWidth = 4; c.beginPath(); c.moveTo(hx, hy + 34); c.quadraticCurveTo(hx - 10, hy + 48, hx - 20, hy + 42); c.moveTo(hx, hy + 34); c.quadraticCurveTo(hx + 10, hy + 48, hx + 20, hy + 42); c.stroke();
        c.strokeStyle = 'rgba(255,250,240,0.95)'; c.lineWidth = 3; [[-1, 30], [-1, 44], [1, 30], [1, 44]].forEach(([sd, y]) => { c.beginPath(); c.moveTo(hx + sd * 50, hy + y); c.lineTo(hx + sd * 118, hy + y + (y - 37) * 1.4); c.stroke(); }); }, 0.1],
    ]);
  });
  function catLeg(c, sh, paw, s, col, colD) {
    const mid = [(sh[0] + paw[0]) / 2 + 12 * s, (sh[1] + paw[1]) / 2 - 4 * s];
    strokePts(c, [sh, mid, paw], 40 * s, col);
    c.fillStyle = col; c.beginPath(); c.ellipse(paw[0] + 6 * s, paw[1] - 4 * s, 30 * s, 17 * s, 0, 0, TAU); c.fill();
    c.strokeStyle = colD; c.lineWidth = 3 * s; c.lineCap = 'round'; [-8, 6, 20].forEach((dx) => { c.beginPath(); c.moveTo(paw[0] + dx * s, paw[1] + 8 * s); c.lineTo(paw[0] + dx * s, paw[1] - 2 * s); c.stroke(); });
  }
  // o: kind, eye, kn (0..1 kneading amount), t, bob
  function cat(ctx, cx, gy, s, o = {}) {
    const kind = o.kind || 'tabby', k = KP[kind], t = o.t || 0, amt = o.kn ?? 0;
    const lN = knead(t, 0, o.rate) * amt, lF = knead(t, 1, o.rate) * amt;
    const Wp = (x, y) => [cx + (x - GX) * s, gy + (y - GY) * s];
    const bob = (o.bob || 0) + Math.sin(t * 2.4 * Math.PI) * 3 * amt * s;
    liveStrips(ctx, (c) => catLeg(c, Wp(380, 350), Wp(470 - lF * 14, 450 - lF * 58), s, k.coD, k.st), 0.5);
    put(ctx, catBody(kind, o.eye || 'happy'), cx + (320 - GX) * s, gy + (240 - GY) * s + bob, { s, d: 1.1 });
    liveStrips(ctx, (c) => catLeg(c, Wp(408, 360), Wp(512 - lN * 14, 452 - lN * 58), s, k.co, k.coD), 0.7);
    return { lN, lF, paw: Wp(512, 452), pawF: Wp(470, 450) };
  }

  // ---------------- kitten from behind (pushes up into mom) sheet 220x260, ground (110,250) ----------------
  const kitRear = (kind) => cache('kr' + kind, () => { const k = KP[kind], r = H.rng(kind.length * 7 + 3); return compose(220, 260, [
    [(c) => { strokePts(c, [[150, 236], [196, 214], [204, 170]], 18, k.co); }, 0.2],
    [(c) => { c.fillStyle = k.co; blob(c, ellPts(r, 110, 190, 70, 62, 0, 0.5)); blob(c, circPts(r, 110, 100, 56, 12, 0.5)); blob(c, [[64, 82], [70, 22], [104, 54]]); blob(c, [[116, 54], [150, 22], [156, 82]]); }, 0.6],
    [(c) => { c.fillStyle = k.st; [[-22, 160], [0, 152], [22, 160]].forEach(([x, y]) => blob(c, cutLines(r, [[110 + x - 6, y], [110 + x + 6, y], [110 + x + 3, y + 40], [110 + x - 3, y + 40], [110 + x - 6, y]], 10, 0.4))); }, 0.15],
  ]); });
  function kitten(ctx, cx, gy, s, kind, t, ph) {
    const k = KP[kind], spr = kitRear(kind), Wp = (x, y) => [cx + (x - 110) * s, gy + (y - 250) * s];
    const a = knead(t, ph, 2.4), b = knead(t, ph + 1, 2.4);
    put(ctx, spr, cx, gy + (130 - 250) * s, { s, d: 0.8 });
    liveStrips(ctx, (c) => { [[-1, a], [1, b]].forEach(([sd, l]) => { const sh = Wp(110 + sd * 46, 160), pw = Wp(110 + sd * 58, 14 + l * 46); strokePts(c, [sh, pw], 24 * s, k.co); c.fillStyle = C.pink; c.beginPath(); c.ellipse(pw[0], pw[1] - 2 * s, 15 * s, 11 * s, 0, 0, TAU); c.fill(); }); }, 0.5);
  }
  // mother cat lying on her side, belly down toward the kittens; sheet 900x420, belly line ~ y 350
  const momSpr = () => cache('mom', () => { const k = KP.mom, r = H.rng(404); return compose(900, 420, [
    [(c) => { strokePts(c, [[820, 220], [880, 170], [868, 90], [820, 70]], 34, k.co); }, 0.2],
    [(c) => { c.fillStyle = k.co; blob(c, ellPts(r, 480, 210, 360, 140, 0, 0.9)); blob(c, circPts(r, 150, 170, 108, 14, 0.6)); blob(c, [[64, 120], [44, 30], [118, 74]]); blob(c, [[150, 62], [210, 4], [236, 98]]); }, 0.7],
    [(c) => { c.fillStyle = k.st; for (let i = 0; i < 6; i++) { const x = 320 + i * 80; c.save(); c.translate(x, 80); c.rotate(0.06 * (i - 3)); blob(c, cutLines(r, [[-14, 0], [14, 0], [8, 70], [-8, 70], [-14, 0]], 12, 0.6)); c.restore(); } }, 0.15],
    [(c) => { c.fillStyle = k.cr; blob(c, ellPts(r, 500, 318, 300, 40, 0, 0.6)); blob(c, ellPts(r, 150, 222, 46, 34, 0, 0.4)); }, 0.2],
    [(c) => { c.fillStyle = C.pink; blob(c, [[70, 112], [58, 50], [106, 80]]); blob(c, [[160, 72], [204, 26], [220, 90]]); c.fillStyle = C.pinkD; blob(c, [[136, 200], [160, 200], [148, 212]]);
      c.strokeStyle = C.blk; c.lineWidth = 5; c.lineCap = 'round'; [110, 186].forEach((x) => { c.beginPath(); c.arc(x, 172, 14, Math.PI + 0.35, -0.35); c.stroke(); }); }, 0.1],
  ]); });

  // ---------------- big paw underside (toe beans) sheet 700x820 ----------------
  const PADS = [[190, 330, 56, 72, -0.35], [292, 250, 58, 74, -0.12], [408, 250, 58, 74, 0.12], [510, 330, 56, 72, 0.35]];
  const pawSpr = () => cache('paw', () => { const k = KP.tabby, r = H.rng(505); return compose(700, 820, [
    [(c) => { c.fillStyle = k.co; blob(c, [...cutLines(r, [[150, 820], [90, 560], [80, 330]], 22, 1), ...ellPts(r, 350, 330, 290, 250, 0, 1).filter(([x, y]) => y < 360), [620, 330], [610, 560], [550, 820]]); }, 0],
    [(c) => { c.fillStyle = k.cr; blob(c, ellPts(r, 350, 420, 250, 300, 0, 0.8)); }, 0.3],
    [(c) => { c.fillStyle = C.pink; c.beginPath(); c.moveTo(350, 430); c.bezierCurveTo(470, 420, 520, 520, 500, 600); c.bezierCurveTo(480, 660, 410, 640, 350, 650); c.bezierCurveTo(290, 640, 220, 660, 200, 600); c.bezierCurveTo(180, 520, 230, 420, 350, 430); c.fill();
      PADS.forEach(([x, y, a, b, rot]) => blob(c, ellPts(r, x, y, a, b, rot, 0.5))); }, 0.6],
    [(c) => { c.fillStyle = 'rgba(255,255,255,0.35)'; blob(c, ellPts(r, 320, 480, 60, 22, -0.2, 0.3)); PADS.forEach(([x, y, a, b]) => blob(c, ellPts(r, x - a * 0.25, y - b * 0.35, a * 0.35, b * 0.2, 0, 0.2))); }, 0.1],
  ]); });
  const GLANDS = [[240, 300], [350, 262], [460, 300], [350, 360], [255, 440], [445, 440]];
  const printSpr = (col) => cache('print' + col, () => { const r = H.rng(606); return paperize(150, 160, (c) => { c.fillStyle = col; blob(c, ellPts(r, 75, 106, 40, 32, 0, 0.5)); [[30, 60, -0.35], [58, 36, -0.12], [92, 36, 0.12], [120, 60, 0.35]].forEach(([x, y, rt]) => blob(c, ellPts(r, x, y, 15, 20, rt, 0.3))); }, { seed: 607 }); });

  // ---------------- sets ----------------
  const roomSpr = (key, wall, band, sofa, sofaD) => cache('room' + key, () => { const r = H.rng(key.length * 53); return compose(W0, H0, [
    [(c) => { c.fillStyle = wall; c.fillRect(0, 0, W0, H0); }, 0, { rim: false }],
    [(c) => { c.fillStyle = band; blob(c, [...ridge(r, -10, W0 + 10, (x) => 760 + 10 * Math.sin(x * 0.01), 18, 34, 1), [W0 + 10, H0], [-10, H0]]); }, 0.5],
    [(c) => { c.fillStyle = C.gold; blob(c, rect(r, 690, 200, 980, 470, 24, 0.6)); c.fillStyle = wall; blob(c, rect(r, 716, 226, 954, 444, 24, 0.6)); }, 0.6],
    [(c) => { c.fillStyle = '#f6d38f'; blob(c, circPts(r, 835, 335, 62, 14, 0.6)); c.fillStyle = band; blob(c, [...ridge(r, 716, 954, (x) => 400 - 30 * Math.sin((x - 716) * 0.02), 14, 26, 0.6), [954, 444], [716, 444]]); }, 0.3],
    [(c) => { c.fillStyle = sofa; c.beginPath(); c.roundRect(40, 960, 1000, 520, 80); c.fill(); }, 0.9],
    [(c) => { c.fillStyle = sofaD; c.beginPath(); c.roundRect(-20, 1420, 1120, 400, 60); c.fill(); }, 1],
    [(c) => { c.fillStyle = C.jeans; c.beginPath(); c.moveTo(-40, 1340); c.lineTo(860, 1330); c.arc(870, 1450, 120, -Math.PI / 2, Math.PI / 2); c.lineTo(-40, 1570); c.closePath(); c.fill(); }, 1.3],
    [(c) => { c.strokeStyle = C.jeansD; c.lineWidth = 6; c.beginPath(); c.moveTo(-40, 1450); c.lineTo(760, 1452); c.stroke(); c.strokeStyle = 'rgba(255,240,200,0.5)'; c.setLineDash([14, 10]); c.lineWidth = 4; c.beginPath(); c.moveTo(-40, 1550); c.lineTo(840, 1550); c.stroke(); }, 0.1],
  ]); });
  const DUSK = () => dio('dusk', '#e9a38a', '#f6d38f', '#b47a86', '#7d5e7c', '#8a7a4c', 1560);
  const ROOM_EVE = () => roomSpr('eve', '#c9705a', '#a95a4c', '#4f8380', '#3e6b6a');
  const ROOM_DAY = () => roomSpr('daylight', '#e7b77a', '#d39b5f', '#5f7fa8', '#4c6a90');
  const ROOM_END = () => roomSpr('endnight', '#5a4e86', '#473f70', '#b4675a', '#93524a');
  const nestSpr = () => cache('nest', () => { const r = H.rng(707); return compose(W0, 700, [
    [(c) => { c.fillStyle = '#c9a26a'; blob(c, ellPts(r, 540, 380, 520, 260, 0, 1.2)); }, 0.6],
    [(c) => { c.fillStyle = '#e9d3a6'; blob(c, ellPts(r, 540, 360, 420, 180, 0, 1)); }, 0.5],
    [(c) => { c.strokeStyle = '#b48a52'; c.lineCap = 'round'; for (let i = 0; i < 26; i++) { c.lineWidth = r.range(6, 12); const a = r() * TAU, cx = 540 + Math.cos(a) * 470, cy = 380 + Math.sin(a) * 220; c.beginPath(); c.moveTo(cx - 40, cy); c.quadraticCurveTo(cx, cy - 20, cx + 40, cy + 4); c.stroke(); } }, 0.3],
  ]); });
  const blanketSpr = () => cache('blanket', () => { const r = H.rng(808); return compose(W0, 1100, [
    [(c) => { c.fillStyle = '#e9d9b8'; blob(c, [...ridge(r, -10, W0 + 10, (x) => 60 + 30 * Math.sin(x * 0.007), 18, 34, 1), [W0 + 10, 1100], [-10, 1100]]); }, 0.8],
    [(c) => { c.fillStyle = '#d9a7a0'; for (let j = 0; j < 6; j++) blob(c, [...ridge(r, -10, W0 + 10, (x) => 170 + j * 170 + 12 * Math.sin(x * 0.01 + j), 18, 34, 0.8), ...ridge(r, -10, W0 + 10, (x) => 220 + j * 170 + 12 * Math.sin(x * 0.01 + j), 18, 34, 0.8).reverse()]); }, 0.2],
  ]); });
  const tallGrass = (seed, col) => cache('tg' + seed + col, () => paperize(240, 230, (c) => { const r = H.rng(seed); c.fillStyle = col; c.beginPath(); for (let k = 0; k < 9; k++) { const bx = 14 + k * 24; c.moveTo(bx, 228); c.lineTo(bx + r.range(-22, 26), r.range(4, 60)); c.lineTo(bx + 16, 228); } c.fill(); }, { seed }));
  const heartSpr = () => cache('heart', () => paperize(220, 200, (c) => { c.fillStyle = C.coral; c.beginPath(); c.moveTo(110, 190); c.bezierCurveTo(-20, 100, 20, 0, 110, 50); c.bezierCurveTo(200, 0, 240, 100, 110, 190); c.fill(); }, { seed: 909 }));
  const noseX = () => cache('nosex', () => compose(220, 200, [[(c) => { c.fillStyle = '#f0b48f'; c.beginPath(); c.moveTo(110, 20); c.quadraticCurveTo(150, 120, 170, 150); c.quadraticCurveTo(110, 185, 50, 150); c.quadraticCurveTo(70, 120, 110, 20); c.fill(); }, 0.5]]));
  const stamp = (ctx, t, st, str, px, x, y, rot) => { if (REC && st > 0) REC.push(st); const u = H.clamp((t - st) / 0.22); if (u <= 0) return; const sc = 1.7 - 0.7 * H.ease.out(u); put(ctx, wordSpr(str, px, C.card, C.red, 18), x, y, { s: sc, rot, d: 0.3 + (1 - u) * 3, a: H.clamp(u * 3) }); };
  const scentWisps = (ctx, t, x0, y0, n, amt, seed, col = 'rgba(160,215,200,0.95)') => { if (amt <= 0) return; liveStrips(ctx, (c) => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const bx = x0 + (i - (n - 1) / 2) * 90 + r.range(-15, 15), ph = r() * TAU, len = 260 * amt, pts = []; for (let k = 0; k <= 16; k++) { const u = k / 16; pts.push([bx + Math.sin(u * 7 + t * 3 + ph) * 22, y0 - u * len - ((t * 40 + i * 30) % 30)]); } strokePts(c, pts, 16, col); } }, 0.4); };

  // ================= SCENE 1: hook, a cat kneading a lap =================
  function sceneHook(ctx, t) {
    ctx.drawImage(ROOM_EVE(), 0, 0);
    const z = 1 + seg(t, PS(1) - 0.2, PE(1) + 0.4) * 0.08;
    ctx.save(); ctx.translate(560, 1300); ctx.scale(z, z); ctx.translate(-560, -1300);
    cat(ctx, 470, 1345, 1.35, { kind: 'tabby', eye: 'happy', kn: 1, t });
    ctx.restore();
    tag(ctx, t, P(0, 'why') - 0.12, 'WHY', 110, C.ink, 300, 300, { rot: -0.04, d: 1 });
    const K = popIn(t, P(0, 'knead') - 0.15, 0.4); if (K) put(ctx, wordSpr('KNEAD?', 150, C.card, C.coral, 18), 600, 450, { s: K.s, d: 1 + K.d, rot: 0.03 });
    const T = popIn(t, P(1, 'kitten') - 0.15, 0.4); if (T) { put(ctx, burstSpr(), 540, 650, { s: T.s * 0.5, rot: t * 0.25, d: 0.5, a: 0.95 }); put(ctx, wordSpr('KITTEN TRICK', 96, C.card, C.teal, 16), 540, 650, { s: T.s, d: 1 + T.d, rot: -0.02 }); }
  }

  // ================= SCENE 2: newborn kitten, eyes shut, but it can push =================
  function sceneNewborn(ctx, t) {
    ctx.drawImage(flat('newborn', '#3e3a6a', '#4f4a84', 37), 0, 0);
    shadowDraw(ctx, nestSpr(), 0, 950, 1);
    const pushOn = t > P(3, 'push') - 0.1 ? 1 : 0.15;
    cat(ctx, 520, 1360, 0.95, { kind: 'kit', eye: 'closed', kn: pushOn, t, rate: 2.0 });
    tag(ctx, t, P(2, 'newborn') - 0.12, 'NEWBORN', 110, C.card, 540, 290, { back: C.coral, rot: -0.03, d: 1 });
    const E = popIn(t, P(2, 'barely') - 0.15); if (E && t < P(3, 'push') - 0.1) { put(ctx, wordSpr('EYES SHUT', 90, C.ink, C.card, 14), 540, 470, { s: E.s, d: 1 + E.d, rot: 0.02 }); arrow(ctx, 640, 540, 720, 640, 640, 760, H.clamp((t - P(2, 'barely')) / 0.4), C.gold, 201); }
    const Pu = popIn(t, P(3, 'push') - 0.15); if (Pu) { put(ctx, ringSpr(), 540, 520, { s: Pu.s * 0.7, d: 0.6, rot: 0.05 }); put(ctx, wordSpr('PUSH!', 150, C.card, C.red, 18), 540, 500, { s: Pu.s, d: 1 + Pu.d, rot: -0.04 }); }
  }

  // ================= SCENE 3: nursing, kittens press paws into mom, milk flows =================
  function sceneNurse(ctx, t) {
    ctx.drawImage(flat('nurse', '#6f9a8a', '#86b09e', 41), 0, 0);
    put(ctx, momSpr(), 540, 830, { s: 1.08, d: 1.2 });
    const kits = [[300, 'kit', 0], [540, 'kitG', 0.5], [780, 'kitC', 1.2]];
    const appear = (i) => popIn(t, P(4, 'tiny') - 0.2 + i * 0.12, 0.35);
    kits.forEach(([x, kd, ph], i) => { const A = appear(i); if (A) kitten(ctx, x, 1300 + (1 - A.s) * 60, 1.3, kd, t, ph); });
    if (t < PS(5) - 0.15) tag(ctx, t, P(4, 'paws') - 0.12, 'FRONT PAWS', 90, C.ink, 540, 1490, { rot: 0.02, d: 1 });
    if (t < PS(6) - 0.1) tag(ctx, t, P(4, 'mom') - 0.12, 'MOM', 110, C.card, 820, 330, { back: C.coral, rot: 0.04, d: 1 });
    const LR = [[PH[5].words[0][1], 'LEFT', 210], [PH[5].words[1][1], 'RIGHT', 540], [PH[5].words[2][1], 'LEFT', 870]];
    if (t < PS(6) - 0.1) LR.forEach(([w, s, x], i) => tag(ctx, t, w - 0.12, s, 76, C.card, x, 1530 + (i % 2) * 20, { back: [C.teal, C.gold, C.teal][i], rot: (i - 1) * 0.04 }));
    const M = popIn(t, P(6, 'milk') - 0.15, 0.4);
    if (M) { tag(ctx, t, P(6, 'milk') - 0.12, 'MILK!', 120, C.ink, 540, 300, { back: C.milk, rot: -0.03, d: 1 });
      kits.forEach(([x], i) => { for (let j = 0; j < 3; j++) { const u = ((t - P(6, 'milk')) * 1.2 + j / 3 + i * 0.2) % 1; put(ctx, cache('drop', () => paperize(60, 80, (c) => { c.fillStyle = C.milk; c.beginPath(); c.moveTo(30, 4); c.quadraticCurveTo(58, 50, 30, 76); c.quadraticCurveTo(2, 50, 30, 4); c.fill(); }, { seed: 333 })), x + (j - 1) * 40, 1080 + u * 60, { a: Math.sin(u * Math.PI) * M.s, d: 0.3 }); } }); }
    const sips = [PH[7].words[0][1], PH[7].words[1][1], PH[7].words[2][1]], labels = ['PUSH', 'PUSH', 'SIP'];
    if (t >= PS(7) - 0.2) { sips.forEach((w, i) => tag(ctx, t, w - 0.12, labels[i], 90, C.card, 200 + i * 330, 1530 + (i % 2) * 20, { back: i === 2 ? C.coral : C.ink, rot: (i - 1) * 0.05 })); }
  }

  // ================= SCENE 4: grown cats keep doing it on your lap =================
  function sceneGrown(ctx, t) {
    ctx.drawImage(ROOM_DAY(), 0, 0);
    cat(ctx, 470, 1345, 1.35, { kind: 'tabby', eye: 'happy', kn: 1, t });
    if (t < PS(9) - 0.1) { tag(ctx, t, P(8, 'never') - 0.12, 'NEVER', 110, C.ink, 360, 300, { rot: -0.03, d: 1 }); tag(ctx, t, P(8, 'outgrow') - 0.12, 'OUTGROWN', 110, C.card, 600, 450, { back: C.coral, rot: 0.03, d: 1 }); }
    if (t >= PS(9) - 0.1 && t < PS(10) - 0.1) { tag(ctx, t, P(9, 'safe') - 0.12, 'SAFE', 120, C.card, 330, 330, { back: C.teal, rot: -0.04, d: 1 }); tag(ctx, t, P(9, 'calm') - 0.12, 'CALM', 120, C.card, 730, 470, { back: C.gold, rot: 0.04, d: 1 }); }
    if (t >= PS(10) - 0.1) { tag(ctx, t, P(10, 'lap') - 0.12, 'YOUR LAP', 100, C.ink, 540, 290, { rot: -0.02, d: 1 });
      const Cm = popIn(t, P(11, 'compliment') - 0.15, 0.45); if (Cm) { put(ctx, heartSpr(), 300, 520, { s: Cm.s * 1.1, rot: -0.15 + Math.sin(t * 3) * 0.05, d: 0.8 }); put(ctx, wordSpr('COMPLIMENT', 96, C.card, C.coral, 16), 600, 520, { s: Cm.s, d: 1 + Cm.d, rot: 0.03 }); } }
  }

  // ================= SCENE 5: close-up paw, scent glands between the pads =================
  function scenePaw(ctx, t) {
    ctx.drawImage(flat('paw', '#5c3b4e', '#7c4a5c', 43), 0, 0);
    const push = Math.sin(t * 2.4 * Math.PI) * 0.015, PX = 540, PY = 1040, s = 1.05;
    put(ctx, pawSpr(), PX, PY, { s: s * (1 + push), d: 1.4 });
    const Wp = (x, y) => [PX + (x - 350) * s, PY + (y - 410) * s];
    const gOn = H.clamp((t - P(13, 'glands') + 0.15) / 0.3);
    if (gOn > 0) GLANDS.forEach(([x, y], i) => { const [wx, wy] = Wp(x, y), A = popIn(t, P(13, 'glands') - 0.15 + i * 0.06, 0.3); if (A) put(ctx, cache('gland', () => paperize(60, 60, (c) => { const r = H.rng(77); c.fillStyle = C.gold; blob(c, circPts(r, 30, 30, 22, 8, 0.5)); }, { seed: 78 })), wx, wy, { s: A.s * (1 + 0.15 * Math.sin(t * 6 + i)), d: 0.5 }); });
    scentWisps(ctx, t, PX, Wp(350, 230)[1], 4, H.clamp((t - P(14, 'leaves') + 0.1) / 0.8), 515);
    tag(ctx, t, P(12, 'sneaky') - 0.12, 'SECRET', 110, C.card, 380, 270, { back: C.ink, rot: -0.04, d: 1 });
    tag(ctx, t, P(12, 'second') - 0.12, 'JOB #2', 110, C.card, 740, 400, { back: C.coral, rot: 0.04, d: 1 });
    if (t > P(13, 'scent') - 0.15) tag(ctx, t, P(13, 'scent') - 0.12, 'SCENT GLANDS', 92, C.ink, 540, 1490, { back: C.gold, rot: -0.02, d: 1 });
    const N = popIn(t, P(14, 'cant') - 0.15); if (N) { put(ctx, noseX(), 880, 1180, { s: N.s * 0.8, d: 0.8 }); put(ctx, crossSpr(), 880, 1180, { s: N.s * 0.75, d: 0.6 }); put(ctx, wordSpr('YOU?', 76, C.ink, C.card, 12), 880, 1040, { s: N.s, d: 0.8 }); }
  }

  // ================= SCENE 6: other cats can smell it, a tiny stamp that says mine =================
  function sceneMine(ctx, t) {
    ctx.drawImage(flat('mine', '#41607e', '#527597', 47), 0, 0);
    shadowDraw(ctx, blanketSpr(), 0, 900, 1);
    const prints = [[220, 1180], [400, 1290], [260, 1440], [470, 1520]];
    prints.forEach(([x, y], i) => put(ctx, printSpr(C.pinkD), x, y, { d: 0.25, a: 0.85, rot: -0.3 + i * 0.1 }));
    scentWisps(ctx, t, 340, 1150, 3, 0.75, 616, 'rgba(160,215,200,0.85)');
    const G = dropIn(t, P(15, 'other') - 0.25, 0.5, 120);
    if (G) cat(ctx, 760, 1430 + G.dy, 1.0, { kind: 'grey', eye: 'open', t, bob: Math.sin(t * 5) * 4 });
    tag(ctx, t, P(15, 'other') - 0.12, 'OTHER CATS', 100, C.ink, 540, 290, { rot: -0.02, d: 1 });
    const Ck = popIn(t, P(15, 'can') - 0.15); if (Ck) put(ctx, checkSpr(), 860, 760, { s: Ck.s * 0.9, d: 0.8 + Ck.d });
    tag(ctx, t, P(16, 'stamp') - 0.12, 'A TINY STAMP', 84, C.card, 540, 430, { back: C.teal, rot: 0.02, d: 1 });
    stamp(ctx, t, P(16, 'mine') - 0.1, 'MINE!', 170, 380, 700, -0.12);
  }

  // ================= SCENE 7: wild cats knead grass into a bed =================
  function sceneWild(ctx, t) {
    ctx.drawImage(DUSK(), 0, 0);
    const flatten = seg(t, P(17, 'knead') - 0.1, P(18, 'bed') + 0.2);
    [[160, 1580, 1.4, 11], [930, 1600, 1.3, 12], [80, 1500, 1.0, 13], [1000, 1490, 1.0, 14]].forEach(([x, y, s, sd]) => put(ctx, tallGrass(sd, C.grassD), x, y - 115 * s, { s, d: 0.7 }));
    const nap = t > P(18, 'nap') - 0.15;
    cat(ctx, 480, 1500, 1.25, { kind: 'wild', eye: nap ? 'happy' : 'open', kn: nap ? 0.2 : 1, t });
    [[640, 1520], [820, 1530]].forEach(([x, y], i) => { const sy = 1 - flatten * 0.7; ctx.save(); ctx.translate(x, y); ctx.scale(1, sy); ctx.translate(-x, -y); put(ctx, tallGrass(20 + i, C.grass), x, y - 115 * 1.1, { s: 1.1, d: 0.6 }); ctx.restore(); });
    tag(ctx, t, P(17, 'wild') - 0.12, 'WILD CATS', 110, C.card, 540, 290, { back: C.ink, rot: -0.03, d: 1 });
    tag(ctx, t, P(17, 'grass') - 0.12, 'SOFT GRASS', 90, C.ink, 540, 440, { rot: 0.02, d: 1 });
    const B = popIn(t, P(18, 'bed') - 0.15); if (B) put(ctx, wordSpr('COMFY BED', 100, C.card, C.coral, 16), 540, 600, { s: B.s, d: 1 + B.d, rot: -0.02 });
    if (nap) zzz(ctx, t, 760, 900, 1);
  }

  // ================= SCENE 8: the question =================
  function sceneEnd(ctx, t) {
    ctx.drawImage(ROOM_END(), 0, 0);
    cat(ctx, 470, 1345, 1.35, { kind: 'tabby', eye: 'happy', kn: 1, t });
    tag(ctx, t, P(19, 'kneads') - 0.12, 'KNEADING YOU?', 92, C.ink, 540, 270, { back: C.card, rot: -0.02, d: 1 });
    const A = popIn(t, P(20, 'kitten') - 0.15); if (A) put(ctx, wordSpr('KITTEN AGAIN?', 92, C.card, C.teal, 16), 540, 420, { s: A.s, d: 1 + A.d, rot: 0.02 });
    tag(ctx, t, P(21, 'or') - 0.1, 'OR', 80, C.card, 540, 545, { back: C.ink, rot: 0.03 });
    stamp(ctx, t, P(21, 'property') - 0.1, "YOU'RE MINE!", 110, 540, 690, -0.06);
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
  const SC = [{ f: sceneHook }, { p: 2, f: sceneNewborn, d: 'up' }, { p: 4, f: sceneNurse, d: 'right' }, { p: 8, f: sceneGrown, d: 'up' }, { p: 12, f: scenePaw, d: 'right' }, { p: 15, f: sceneMine, d: 'up' }, { p: 17, f: sceneWild, d: 'right' }, { p: 19, f: sceneEnd, d: 'up' }];
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
    // soft paw presses (cloth taps), every time a paw lands while a cat is kneading
    const pads = (a, b, rate = 2.4) => { for (let n = 0; ; n++) { for (const ph of [0, 1]) { const tt = (2 * n + 1 - ph) / rate; if (tt >= a && tt < b) k.noise(tt, { dur: 0.06, color: 'brown', filter: 'lowpass', f: 420, gain: 0.12, a: 0.004, pan: ph ? -0.2 : 0.2, minor: true }); } if ((2 * n + 1) / rate > b) break; } };
    pads(0, SC[1].cut + 0.2); pads(PS(3), SC[2].cut + 0.2, 2.0); pads(SC[3].cut, SC[4].cut); pads(SC[7].cut, DURATION - 0.3);
    collect().forEach((t) => card(t, 0.7, 0, 1.15));
    SC.forEach((s) => { if (s.cut != null) { layer(s.cut, SLIDE + 0.1); k.play('whoosh', s.cut, { dur: SLIDE, gain: 0.4 }); } });
    hit(P(0, 'knead') - 0.05, 0.6);
    k.play('ding', P(1, 'kitten'), { f: 'E5', gain: 0.3 });
    hit(P(3, 'push') - 0.05, 0.7);
    PH[5].words.forEach(([, w], i) => k.play('pop', w, { gain: 0.45, f: 600 + i * 120 }));
    k.play('sparkle', P(6, 'milk'), { n: 5, gain: 0.35 });
    PH[7].words.forEach(([, w], i) => k.play(i === 2 ? 'ding' : 'pop', w, i === 2 ? { f: 'G5', gain: 0.3 } : { gain: 0.45, f: 500 }));
    k.play('ding', P(11, 'compliment'), { f: 'C5', gain: 0.32 }); k.play('ding', P(11, 'compliment') + 0.1, { f: 'E5', gain: 0.28 });
    hit(P(12, 'sneaky') - 0.05, 0.75);
    k.play('sparkle', P(13, 'glands'), { n: 6, gain: 0.35 });
    k.play('swish', P(14, 'leaves'), { gain: 0.4 });
    k.play('error', P(14, 'cant'), { gain: 0.28 });
    k.play('pop', P(15, 'can'), { gain: 0.5, f: 720 });
    k.play('stamp', P(16, 'mine') - 0.05, { gain: 0.75 });
    k.play('paper', P(17, 'knead') - 0.1, { dur: 1.2, gain: 0.45 });
    k.play('stamp', P(21, 'property') - 0.05, { gain: 0.75 });
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PE(21) + 0.15 + i * 0.09, { f, gain: 0.38 - i * 0.04, pan: (i - 1) * 0.25 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); ctx.drawImage(ROOM_EVE(), 0, 0);
    cat(ctx, 470, 1345, 1.35, { kind: 'tabby', eye: 'happy', kn: 1, t: 0.2 });
    put(ctx, wordSpr('WHY THE', 130, C.ink, C.card, 22), 540, 360, { d: 1.6, rot: -0.03 });
    put(ctx, wordSpr('KNEADING?', 160, C.card, C.coral, 22), 540, 580, { d: 1.6, rot: 0.02 });
    finish(ctx, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
