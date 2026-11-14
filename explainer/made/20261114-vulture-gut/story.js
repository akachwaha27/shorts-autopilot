// ================= Cut-Paper Diorama, vertical 1080x1920: "Why don't vultures get sick from eating rotten meat?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":4.46,"text":"Vultures eat rotten meat that would kill you, and never get sick. Why?","words":[["vultures",0.25],["eat",0.86],["rotten",1.09],["meat",1.55],["that",1.86],["would",2.16],["kill",2.54],["you",2.85],["and",3.08],["never",3.31],["get",3.69],["sick",3.92],["why",4.23]]},{"s":4.96,"e":8.07,"text":"A carcass can be crawling with germs like anthrax,","words":[["a",4.96],["carcass",5.03],["can",5.56],["be",5.79],["crawling",5.94],["with",6.55],["germs",6.85],["like",7.23],["anthrax",7.54]]},{"s":8.47,"e":9.95,"text":"and the vulture keeps eating.","words":[["and",8.47],["the",8.65],["vulture",8.84],["keeps",9.27],["eating",9.58]]},{"s":10.34,"e":11.42,"text":"First, the stomach.","words":[["first",10.34],["the",10.7],["stomach",10.91]]},{"s":11.74,"e":14.63,"text":"Vulture stomach acid sits close to pH 1,","words":[["vulture",11.74],["stomach",12.37],["acid",13.0],["sits",13.36],["close",13.72],["to",14.18],["ph",14.36],["1",14.54]]},{"s":15.14,"e":17.34,"text":"nearly as strong as battery acid.","words":[["nearly",15.14],["as",15.63],["strong",15.79],["as",16.28],["battery",16.44],["acid",17.01]]},{"s":17.73,"e":19.34,"text":"Most germs die right there.","words":[["most",17.73],["germs",18.03],["die",18.39],["right",18.61],["there",18.97]]},{"s":19.8,"e":21.61,"text":"In one study of fifty vultures,","words":[["in",19.8],["one",19.94],["study",20.16],["of",20.52],["fifty",20.67],["vultures",21.03]]},{"s":21.76,"e":26.78,"text":"scientists found five hundred twenty-eight kinds of bacteria on their faces,","words":[["scientists",21.76],["found",22.54],["five",22.94],["hundred",23.25],["twentyeight",23.8],["kinds",24.66],["of",25.05],["bacteria",25.21],["on",25.84],["their",25.99],["faces",26.39]]},{"s":27.29,"e":29.66,"text":"but only seventy-six made it to the gut.","words":[["but",27.29],["only",27.52],["seventysix",27.82],["made",28.59],["it",28.89],["to",29.05],["the",29.2],["gut",29.43]]},{"s":30.08,"e":31.56,"text":"And the ones that survive?","words":[["and",30.08],["the",30.29],["ones",30.5],["that",30.79],["survive",31.07]]},{"s":32.14,"e":36.08,"text":"Tough, meat-eating microbes called Clostridia and Fusobacteria,","words":[["tough",32.14],["meateating",32.51],["microbes",33.24],["called",33.82],["clostridia",34.26],["and",34.99],["fusobacteria",35.21]]},{"s":36.59,"e":39.01,"text":"germs that make most other animals sick.","words":[["germs",36.59],["that",36.96],["make",37.25],["most",37.54],["other",37.84],["animals",38.2],["sick",38.72]]},{"s":39.4,"e":41.09,"text":"In a vulture, they're on the team,","words":[["in",39.4],["a",39.53],["vulture",39.6],["theyre",40.07],["on",40.48],["the",40.61],["team",40.82]]},{"s":41.48,"e":42.94,"text":"helping break down the meal.","words":[["helping",41.48],["break",41.92],["down",42.24],["the",42.49],["meal",42.68]]},{"s":43.28,"e":44.67,"text":"By cleaning up carcasses,","words":[["by",43.28],["cleaning",43.42],["up",43.95],["carcasses",44.08]]},{"s":45.04,"e":47.47,"text":"vultures stop those germs from spreading.","words":[["vultures",45.04],["stop",45.6],["those",45.88],["germs",46.22],["from",46.57],["spreading",46.85]]},{"s":47.85,"e":48.81,"text":"So be honest.","words":[["so",47.85],["be",48.04],["honest",48.23]]},{"s":49.18,"e":50.6,"text":"Which grosses you out more,","words":[["which",49.18],["grosses",49.5],["you",49.95],["out",50.15],["more",50.34]]},{"s":51.04,"e":54.72,"text":"the rotten meat, or the gut full of flesh-eating bacteria?","words":[["the",51.04],["rotten",51.28],["meat",51.76],["or",52.08],["the",52.24],["gut",52.48],["full",52.72],["of",53.04],["flesheating",53.2],["bacteria",54.08]]}];
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
    blk: '#26221f', green: '#5fae6a', germ: '#8cc152', germD: '#5e9a3a', purple: '#7b5ea7', body: '#3d2c27', wing: '#2a1f1c',
    wingE: '#6b5446', ruff: '#ece0c8', neck: '#c9a59a', head: '#c8463a', beak: '#f3ead2', leg: '#d8c2b6',
    hide: '#8a5a3c', hideD: '#6c4430', meat: '#b8574c', bone: '#efe4cc', stom: '#e58f86', stomIn: '#f4b4a6', acid: '#c9df5a' };

  const stamp = (ctx, t, st, str, px, x, y, rot, back = C.red) => { if (REC && st > 0) REC.push(st); const u = H.clamp((t - st) / 0.22); if (u <= 0) return; const sc = 1.7 - 0.7 * H.ease.out(u); put(ctx, wordSpr(str, px, C.card, back, 18), x, y, { s: sc, rot, d: 0.3 + (1 - u) * 3, a: H.clamp(u * 3) }); };
  // tag that lifts off again at `until`
  const tagU = (ctx, t, st, until, str, px, col, x, y, o = {}) => {
    const A = dropIn(t, st, 0.35, o.dist || 60); if (!A) return false;
    const f = until ? 1 - H.clamp((t - until) / 0.22) : 1; if (f <= 0) return false;
    put(ctx, wordSpr(str, px, col, o.back || C.card, o.bw || 14), x, y + A.dy - (1 - f) * 40, { s: A.s * (o.s || 1), d: (o.d ?? 0.8) + A.d + (1 - f) * 2, rot: o.rot || 0, a: A.a * f });
    return true;
  };

  // ---------------- vulture, side view facing right; body sheet 520x620, feet at (260,600) ----------------
  const vBody = () => cache('vbody', () => { const r = H.rng(901); return compose(520, 620, [
    [(c) => { c.fillStyle = C.leg; c.beginPath(); c.roundRect(226, 470, 26, 130, 10); c.roundRect(290, 470, 26, 130, 10); c.fill();
      [[240, 600], [304, 600]].forEach(([x, y]) => { c.beginPath(); poly(c, [[x - 40, y - 4], [x + 44, y - 8], [x + 46, y + 4], [x - 42, y + 6]]); c.fill(); }); }, 0.3],
    [(c) => { c.fillStyle = C.wing; blob(c, [[170, 440], [70, 600], [130, 596], [110, 616], [210, 500]]); }, 0.4],
    [(c) => { c.fillStyle = C.body; blob(c, ellPts(r, 275, 335, 135, 185, -0.25, 1)); }, 0.8],
    [(c) => { c.fillStyle = C.wingE; c.beginPath(); c.moveTo(320, 210); c.quadraticCurveTo(150, 260, 90, 570); for (let i = 0; i < 6; i++) { const u = (i + 1) / 6; c.quadraticCurveTo(90 + u * 150 - 30, 560 - u * 150 + 30, 90 + u * 150, 570 - u * 160); } c.quadraticCurveTo(330, 330, 320, 210); c.fill();
      c.fillStyle = C.wing; c.beginPath(); c.moveTo(325, 205); c.quadraticCurveTo(170, 250, 130, 470); c.quadraticCurveTo(260, 420, 325, 205); c.fill(); }, 0.6],
  ]); });
  const vHead = () => cache('vhead', () => { const r = H.rng(902); return compose(290, 230, [
    [(c) => { c.strokeStyle = C.neck; c.lineWidth = 38; c.lineCap = 'round'; c.beginPath(); c.moveTo(40, 190); c.quadraticCurveTo(70, 110, 140, 96); c.stroke(); }, 0.4],
    [(c) => { c.fillStyle = C.head; blob(c, ellPts(r, 168, 88, 56, 42, -0.1, 0.6)); }, 0.6],
    [(c) => { c.fillStyle = C.beak; blob(c, [[206, 70], [252, 80], [266, 100], [256, 116], [246, 102], [208, 106]]); c.fillStyle = '#d9cbb0'; blob(c, [[214, 98], [246, 101], [250, 108], [216, 108]]); }, 0.35],
    [(c) => { c.fillStyle = C.blk; blob(c, circPts(r, 178, 74, 8, 5, 0.2)); c.fillStyle = C.card; blob(c, circPts(r, 180, 71, 2.6, 4, 0.1)); c.fillStyle = '#7a2a24'; blob(c, ellPts(r, 222, 84, 8, 3, 0, 0.2)); }, 0.1],
  ]); });
  const vRuff = () => cache('vruff', () => { const r = H.rng(903); return paperize(150, 120, (c) => { c.fillStyle = C.ruff; const pts = []; for (let i = 0; i < 22; i++) { const a = (i / 22) * TAU, rr = i % 2 ? 46 : 58; pts.push([75 + Math.cos(a) * rr * 1.15, 60 + Math.sin(a) * rr * 0.8]); } blob(c, pts); }, { seed: 904 }); });
  // o: peck (0 up .. 1 down), flip, a
  function vulture(ctx, x, gy, s, o = {}) {
    ctx.save(); if (o.a != null) ctx.globalAlpha = o.a;
    if (o.flip) { ctx.translate(x, 0); ctx.scale(-1, 1); ctx.translate(-x, 0); }
    put(ctx, vBody(), x, gy - 290 * s, { s, d: o.d ?? 1.2 });
    const px = x + 70 * s, py = gy - 395 * s, ang = -0.15 + (o.peck || 0) * 1.25 + (o.tilt || 0);
    ctx.save(); ctx.translate(px, py); ctx.rotate(ang); ctx.scale(s, s); shadowDraw(ctx, vHead(), -40, -190, 1); ctx.restore();
    put(ctx, vRuff(), px - 4 * s, py + 6 * s, { s, d: 0.8 });
    ctx.restore();
    const hx = px + Math.cos(ang - 0.6) * 170 * s, hy = py + Math.sin(ang - 0.6) * 170 * s;
    return { head: o.flip ? [2 * x - hx, hy] : [hx, hy] };
  }
  const peckAt = (t, sp, ph = 0) => Math.pow(Math.max(0, Math.sin(t * sp + ph)), 3);

  // ---------------- carcass (a cartoon lump, no gore) and leftover bones; sheet 700x320, ground at y 300 ----------------
  const carcSpr = () => cache('carc', () => { const r = H.rng(911); return compose(700, 320, [
    [(c) => { c.fillStyle = C.hideD; c.beginPath(); c.roundRect(560, 238, 130, 28, 12); c.roundRect(540, 268, 150, 28, 12); c.fill(); c.fillStyle = '#3a2a22'; c.fillRect(668, 236, 24, 32); c.fillRect(668, 266, 24, 32); }, 0.4],
    [(c) => { c.fillStyle = C.hide; blob(c, [...ridge(r, 40, 660, (x) => 300 - 190 * Math.sin(Math.PI * (x - 40) / 620) - 20 * Math.sin(x * 0.02), 16, 30, 1.2), [660, 302], [40, 302]]); }, 0.9],
    [(c) => { c.fillStyle = C.meat; blob(c, ellPts(r, 300, 170, 120, 62, -0.08, 1)); }, 0.2],
    [(c) => { c.strokeStyle = C.bone; c.lineWidth = 14; c.lineCap = 'round'; for (let i = 0; i < 5; i++) { const x = 220 + i * 40; c.beginPath(); c.moveTo(x, 222); c.quadraticCurveTo(x + 10, 140, x + 30, 118); c.stroke(); } }, 0.5],
    [(c) => { c.fillStyle = C.hideD; blob(c, ellPts(r, 110, 250, 70, 46, 0.2, 0.8)); c.fillStyle = C.blk; blob(c, circPts(r, 92, 240, 6, 4, 0.2)); }, 0.3],
  ]); });
  const bonesSpr = () => cache('bones', () => compose(700, 320, [
    [(c) => { c.strokeStyle = C.bone; c.lineWidth = 16; c.lineCap = 'round'; for (let i = 0; i < 6; i++) { const x = 200 + i * 46; c.beginPath(); c.moveTo(x, 292); c.quadraticCurveTo(x + 14, 190, x + 44, 160); c.stroke(); }
      c.beginPath(); c.moveTo(180, 292); c.lineTo(520, 292); c.stroke(); c.lineWidth = 20; c.beginPath(); c.moveTo(540, 296); c.lineTo(660, 270); c.stroke();
      c.fillStyle = C.bone; [[540, 296], [660, 270]].forEach(([x, y]) => { c.beginPath(); c.arc(x, y - 8, 14, 0, TAU); c.arc(x, y + 8, 14, 0, TAU); c.fill(); });
      c.beginPath(); c.ellipse(120, 270, 62, 34, 0.15, 0, TAU); c.fill(); c.fillStyle = C.hideD; c.beginPath(); c.arc(100, 262, 9, 0, TAU); c.fill(); }, 0.5],
  ]));
  const flySpr = () => cache('fly', () => paperize(46, 34, (c) => { c.fillStyle = 'rgba(235,240,245,0.9)'; c.beginPath(); c.ellipse(16, 10, 10, 7, -0.5, 0, TAU); c.ellipse(28, 10, 10, 7, 0.5, 0, TAU); c.fill(); c.fillStyle = C.blk; c.beginPath(); c.ellipse(23, 21, 11, 8, 0, 0, TAU); c.fill(); }, { seed: 915 }));
  const flies = (ctx, t, cx, cy, n, seed) => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const a = r() * TAU, rx = r.range(90, 220), ry = r.range(40, 110), sp = r.range(1.6, 3.2) * (r() < 0.5 ? -1 : 1); put(ctx, flySpr(), cx + Math.cos(t * sp + a) * rx, cy + Math.sin(t * sp * 1.7 + a) * ry, { d: 0.6, rot: Math.sin(t * 30 + i) * 0.2 }); } };

  // ---------------- germs ----------------
  const germSpr = (R, seed, col = C.germ, dk = C.germD) => cache('germ' + R + seed + col, () => { const r = H.rng(seed), S = R * 2 + 60; return compose(S, S, [
    [(c) => { c.fillStyle = dk; for (let i = 0; i < 9; i++) { const a = (i / 9) * TAU + r() * 0.3; c.beginPath(); c.arc(S / 2 + Math.cos(a) * (R + 14), S / 2 + Math.sin(a) * (R + 14), 8 + R * 0.05, 0, TAU); c.fill(); c.fillRect(S / 2 - 3, S / 2 - 3, 6, 6); c.save(); c.translate(S / 2, S / 2); c.rotate(a); c.fillRect(0, -4, R + 12, 8); c.restore(); } }, 0.3],
    [(c) => { c.fillStyle = col; blob(c, circPts(r, S / 2, S / 2, R, 9, 0.8)); }, 0.5],
    [(c) => { c.fillStyle = C.card; c.beginPath(); c.arc(S / 2 - R * 0.3, S / 2 - R * 0.1, R * 0.2, 0, TAU); c.arc(S / 2 + R * 0.3, S / 2 - R * 0.1, R * 0.2, 0, TAU); c.fill(); c.fillStyle = C.blk; c.beginPath(); c.arc(S / 2 - R * 0.26, S / 2 - R * 0.06, R * 0.1, 0, TAU); c.arc(S / 2 + R * 0.34, S / 2 - R * 0.06, R * 0.1, 0, TAU); c.fill(); }, 0.1],
  ]); });
  const rodSpr = (seed) => cache('rod' + seed, () => compose(240, 110, [
    [(c) => { c.fillStyle = '#5a4285'; c.beginPath(); c.roundRect(14, 22, 212, 66, 33); c.fill(); }, 0.4],
    [(c) => { c.fillStyle = C.purple; c.beginPath(); c.roundRect(24, 30, 192, 50, 25); c.fill(); c.fillStyle = 'rgba(255,255,255,0.18)'; c.beginPath(); c.roundRect(44, 38, 120, 12, 6); c.fill(); }, 0.2],
  ]));
  const spindleSpr = (seed) => cache('spin' + seed, () => compose(260, 100, [
    [(c) => { c.fillStyle = '#3b8a80'; c.beginPath(); c.moveTo(8, 50); c.quadraticCurveTo(130, -10, 252, 50); c.quadraticCurveTo(130, 110, 8, 50); c.fill(); }, 0.4],
    [(c) => { c.fillStyle = C.teal; c.beginPath(); c.moveTo(30, 50); c.quadraticCurveTo(130, 4, 230, 50); c.quadraticCurveTo(130, 96, 30, 50); c.fill(); }, 0.2],
  ]));
  const puff = (ctx, t, st, x, y, seed) => { const u = (t - st) / 0.45; if (u <= 0 || u >= 1) return; const r = H.rng(seed); for (let i = 0; i < 7; i++) { const a = r() * TAU, d = 20 + u * r.range(60, 110); put(ctx, germSpr(10, 40 + (i % 3), C.card, C.cream), x + Math.cos(a) * d, y + Math.sin(a) * d, { s: 0.8 * (1 - u), d: 0.3, a: 1 - u }); } };

  // ---------------- savanna diorama ----------------
  const SAV = () => dio('sav', '#f0b469', '#f8dc8c', '#d58a52', '#b8743f', '#d9b26b', 1360);
  const SAV2 = () => dio('savday', '#9cc7d6', '#fbe9a8', '#c9b077', '#b39a5e', '#dcc184', 1360);
  const acacia = (seed, col) => cache('acacia' + seed, () => { const r = H.rng(seed); return compose(420, 420, [
    [(c) => { c.strokeStyle = '#4a3428'; c.lineCap = 'round'; c.lineWidth = 18; c.beginPath(); c.moveTo(210, 420); c.lineTo(205, 250); c.lineTo(150, 150); c.moveTo(205, 250); c.lineTo(280, 140); c.stroke(); }, 0.4],
    [(c) => { c.fillStyle = col; blob(c, ellPts(r, 210, 120, 200, 56, 0, 1.5)); blob(c, ellPts(r, 160, 90, 110, 40, 0, 1)); }, 0.6],
  ]); });

  // ================= SCENE 1: hook, the vulture at the carcass =================
  function sceneHook(ctx, t) {
    ctx.drawImage(SAV(), 0, 0);
    put(ctx, acacia(71, '#7f7a3c'), 180, 1150, { s: 0.9, d: 0.6 });
    const z = 1 + seg(t, PS(1) - 0.2, PE(1)) * 0.1;
    ctx.save(); ctx.translate(540, 1330); ctx.scale(z, z); ctx.translate(-540, -1330);
    put(ctx, carcSpr(), 500, 1230, { s: 1.15, d: 1 });
    const sp = t < PS(2) ? 3.2 : 6.5;
    const v = vulture(ctx, 820, 1360, 1.0, { peck: peckAt(t, sp) * 0.75, flip: true });
    flies(ctx, t, 470, 1080, 4, 77);
    // germs rising off the carcass
    const gS = P(1, 'germs') - 0.15, GP = [[300, 940], [470, 880], [610, 960], [380, 1040], [250, 1060], [560, 1050], [700, 900]];
    GP.forEach(([gx, gy], i) => { const A = popIn(t, gS + i * 0.06, 0.35); if (!A) return; const bob = Math.sin(t * 2 + i) * 14; put(ctx, germSpr(28, 50 + (i % 3)), gx, gy + bob - Math.min(1, t - gS) * 40, { s: A.s, d: 0.8 + A.d, rot: Math.sin(t + i) * 0.2 }); });
    ctx.restore();
    tagU(ctx, t, P(0, 'rotten') - 0.12, PS(1) - 0.2, 'ROTTEN MEAT', 112, C.ink, 540, 320, { rot: -0.03, d: 1 });
    tagU(ctx, t, P(0, 'kill') - 0.12, PS(1) - 0.2, 'DEADLY TO YOU', 100, C.card, 500, 500, { back: C.red, rot: 0.02, d: 1 });
    if (t < PS(1) - 0.1) stamp(ctx, t, P(0, 'never') - 0.1, 'NEVER SICK', 104, 540, 680, -0.04, C.green);
    const Wy = popIn(t, P(0, 'why') - 0.15); if (Wy && t < PS(1) - 0.1) put(ctx, wordSpr('WHY?', 120, C.card, C.coral, 18), 860, 860, { s: Wy.s, d: 1 + Wy.d, rot: 0.08 });
    tagU(ctx, t, P(1, 'germs') - 0.12, PS(2) - 0.15, 'GERMS', 120, C.card, 540, 340, { back: C.germD, rot: -0.02, d: 1 });
    tagU(ctx, t, P(1, 'anthrax') - 0.12, PS(2) - 0.15, 'LIKE ANTHRAX', 96, C.ink, 540, 530, { rot: 0.02, d: 1 });
    if (tagU(ctx, t, P(2, 'keeps') - 0.12, null, 'STILL EATING', 108, C.ink, 520, 380, { rot: -0.03, d: 1 })) { const A = popIn(t, P(2, 'eating') - 0.1); if (A) put(ctx, checkSpr(), 900, 560, { s: A.s, d: 1 + A.d }); }
  }

  // ================= SCENE 2: the stomach: pH 1, battery acid, most germs die =================
  const stomSpr = () => cache('stom', () => { const r = H.rng(921); return compose(900, 760, [
    [(c) => { c.strokeStyle = C.stom; c.lineWidth = 90; c.lineCap = 'round'; c.beginPath(); c.moveTo(250, 0); c.quadraticCurveTo(230, 90, 300, 170); c.stroke(); c.beginPath(); c.moveTo(720, 560); c.quadraticCurveTo(820, 600, 860, 700); c.stroke(); }, 0.5],
    [(c) => { c.fillStyle = C.stom; c.beginPath(); c.moveTo(250, 150); c.bezierCurveTo(60, 160, 40, 560, 300, 650); c.bezierCurveTo(520, 720, 760, 650, 760, 540); c.bezierCurveTo(760, 440, 600, 420, 520, 380); c.bezierCurveTo(430, 330, 440, 160, 250, 150); c.fill(); }, 1],
    [(c) => { c.fillStyle = C.stomIn; c.beginPath(); c.moveTo(255, 200); c.bezierCurveTo(110, 210, 100, 530, 300, 600); c.bezierCurveTo(500, 670, 710, 620, 710, 540); c.bezierCurveTo(710, 470, 580, 460, 500, 420); c.bezierCurveTo(400, 370, 400, 210, 255, 200); c.fill(); }, 0.3],
  ]); });
  const STOMIN = (c) => { c.moveTo(255, 200); c.bezierCurveTo(110, 210, 100, 530, 300, 600); c.bezierCurveTo(500, 670, 710, 620, 710, 540); c.bezierCurveTo(710, 470, 580, 460, 500, 420); c.bezierCurveTo(400, 370, 400, 210, 255, 200); };
  const acidSpr = () => cache('acid', () => { const r = H.rng(925); return paperize(900, 760, (c) => { c.save(); c.beginPath(); STOMIN(c); c.clip(); c.fillStyle = C.acid; c.fillRect(0, 0, 900, 760); c.fillStyle = '#b3cc44'; blob(c, [...ridge(r, 0, 900, (x) => 40 + 10 * Math.sin(x * 0.03), 16, 30, 1), [900, 760], [0, 760]]); c.restore(); }, { seed: 926, hi: 0.3 }); });
  const bubSpr = (R) => cache('bub' + R, () => paperize(R * 2 + 10, R * 2 + 10, (c) => { c.fillStyle = '#e4f09a'; c.beginPath(); c.arc(R + 5, R + 5, R, 0, TAU); c.fill(); c.fillStyle = 'rgba(255,255,255,0.5)'; c.beginPath(); c.arc(R * 0.7 + 5, R * 0.7 + 5, R * 0.3, 0, TAU); c.fill(); }, { seed: 927 + R }));
  const PHC = ['#d9473b', '#e4573c', '#ec7a3c', '#f29b3d', '#f2c14a', '#e8d84a', '#b7d24c', '#7fbf55', '#58b06a', '#4aa58c', '#4b8fb0', '#4f73b6', '#5a5fae', '#6a4fa4', '#7a3f95'];
  const phStrip = () => cache('phs', () => compose(940, 150, [
    [(c) => { c.fillStyle = C.card; c.beginPath(); c.roundRect(4, 4, 932, 142, 18); c.fill(); }, 0.5],
    [(c) => { PHC.forEach((col, i) => { c.fillStyle = col; c.fillRect(22 + i * 60, 22, 56, 64); }); c.font = AF(34); c.fillStyle = C.ink; c.textAlign = 'center'; PHC.forEach((_, i) => { if (i % 2 === 0 || i === 1) c.fillText(String(i), 50 + i * 60, 130); }); }, 0.3],
  ]));
  const batterySpr = () => cache('batt', () => compose(200, 340, [
    [(c) => { c.fillStyle = '#9aa3ad'; c.beginPath(); c.roundRect(70, 6, 60, 36, 8); c.fill(); }, 0.4],
    [(c) => { c.fillStyle = C.ink; c.beginPath(); c.roundRect(20, 34, 160, 296, 24); c.fill(); }, 0.8],
    [(c) => { c.fillStyle = C.gold; c.beginPath(); c.roundRect(20, 34, 160, 120, [24, 24, 0, 0]); c.fill(); c.fillStyle = C.ink; c.fillRect(84, 64, 32, 10); c.fillRect(95, 53, 10, 32); c.fillStyle = C.card; c.fillRect(80, 250, 40, 10); }, 0.3],
  ]));
  function sceneStomach(ctx, t) {
    ctx.drawImage(flat('stom', '#f3d9b8', '#ecc9a0', 52), 0, 0);
    const sx = 540, sy = 1090, S = 1.0;
    put(ctx, stomSpr(), sx, sy, { s: S, d: 1.2 });
    const fill = 0.25 + 0.4 * seg(t, P(4, 'acid') - 0.1, P(4, 'acid') + 0.6);
    ctx.save(); ctx.beginPath(); ctx.rect(0, sy - 380 + 760 * (1 - fill) * 0.85, W0, 2000); ctx.clip(); put(ctx, acidSpr(), sx, sy + (1 - fill) * 60, { s: S, d: 0.2 }); ctx.restore();
    const surf = sy - 380 + 760 * (1 - fill) * 0.85;
    const br = H.rng(930); for (let i = 0; i < 9; i++) { const bx = sx - 250 + br() * 420, sp = br.range(0.5, 0.9), ph = br(); const u = (t * sp + ph) % 1; put(ctx, bubSpr(br.int(8, 16)), bx + Math.sin(t * 2 + i) * 8, surf + 220 - u * 200, { d: 0.2, a: 0.9 * Math.sin(u * Math.PI) }); }
    tagU(ctx, t, P(3, 'stomach') - 0.12, P(4, 'ph') - 0.3, '#1  THE STOMACH', 96, C.ink, 540, 300, { rot: -0.02, d: 1 });
    if (tagU(ctx, t, P(4, 'acid') - 0.12, null, 'ACID', 90, C.ink, 330, 1030, { back: C.acid, rot: -0.05, d: 1 })) {}
    // pH strip + big number
    const A = dropIn(t, P(4, 'close') - 0.2, 0.4, 120);
    if (A) { put(ctx, phStrip(), 540, 1580 + A.dy, { d: 0.8 + A.d });
      const m = seg(t, P(4, 'close'), P(4, 'ph') + 0.05), mx = 22 + 60 * H.lerp(7, 1, m) + 28 + 50 - 9; // strip origin at x 70
      ctx.save(); ctx.fillStyle = C.ink; ctx.beginPath(); ctx.moveTo(mx, 1500); ctx.lineTo(mx - 26, 1458); ctx.lineTo(mx + 26, 1458); ctx.fill(); ctx.restore(); }
    if (t >= P(4, 'ph') - 0.15) { const u = popIn(t, P(4, 'ph') - 0.15, 0.3); ctx.save(); ctx.translate(330, 520); ctx.scale(u.s, u.s); ctx.translate(-330, -520); numberRow(ctx, 'pH 1', 90, 520, 170, C.red); ctx.restore(); }
    const B = popIn(t, P(5, 'battery') - 0.15, 0.4); if (B) put(ctx, batterySpr(), 860, 540, { s: B.s * 0.9, d: 1 + B.d, rot: 0.12 });
    tagU(ctx, t, P(5, 'battery') - 0.12, null, '≈ BATTERY ACID', 84, C.ink, 540, 760, { rot: 0.02, d: 1 });
    // germs fall in and dissolve
    const g0 = PS(6) - 0.4;
    for (let i = 0; i < 6; i++) { const st = g0 + i * 0.1, x = 260 + i * 80, hit = P(6, 'die') - 0.2 + i * 0.07; if (t < st) continue;
      const yy = H.lerp(880, surf + 30, H.ease.in(H.clamp((t - st) / (hit - st)))), k = H.clamp((t - hit) / 0.35);
      if (k < 1) put(ctx, germSpr(26, 60 + (i % 3)), x, yy, { s: 1 - k, rot: k * 3 + i, d: 0.7, a: 1 - k }); puff(ctx, t, hit, x, surf + 30, 70 + i); }
    stamp(ctx, t, P(6, 'die') - 0.1, 'MOST GERMS DIE', 92, 540, 900, -0.04);
  }

  // ================= SCENE 3: the study: 528 kinds on the face, only 76 in the gut =================
  const bigHead = () => cache('bighead', () => { const r = H.rng(941); return compose(760, 560, [
    [(c) => { c.fillStyle = C.body; blob(c, ellPts(r, 120, 560, 230, 120, 0, 1)); }, 0.6],
    [(c) => { c.strokeStyle = C.neck; c.lineWidth = 120; c.lineCap = 'round'; c.beginPath(); c.moveTo(150, 520); c.quadraticCurveTo(170, 330, 330, 290); c.stroke(); }, 0.5],
    [(c) => { c.fillStyle = C.ruff; const pts = []; for (let i = 0; i < 30; i++) { const a = (i / 30) * TAU, rr = i % 2 ? 110 : 140; pts.push([140 + Math.cos(a) * rr * 1.3, 500 + Math.sin(a) * rr * 0.55]); } blob(c, pts); }, 0.6],
    [(c) => { c.fillStyle = C.head; blob(c, ellPts(r, 390, 250, 170, 125, -0.12, 1.2)); }, 0.8],
    [(c) => { c.fillStyle = C.beak; blob(c, [[510, 200], [660, 225], [720, 285], [700, 340], [670, 300], [520, 315]]); c.fillStyle = '#d9cbb0'; blob(c, [[540, 300], [668, 304], [676, 324], [544, 324]]); }, 0.5],
    [(c) => { c.fillStyle = C.blk; blob(c, circPts(r, 430, 205, 22, 6, 0.3)); c.fillStyle = C.card; blob(c, circPts(r, 437, 197, 7, 4, 0.2)); c.fillStyle = '#7a2a24'; blob(c, ellPts(r, 580, 245, 20, 7, 0.1, 0.3)); c.fillStyle = 'rgba(0,0,0,0.12)'; for (let i = 0; i < 9; i++) blob(c, ellPts(r, 300 + r() * 160, 260 + r() * 90, 18, 6, r() * 3, 0.3)); }, 0.1],
  ]); });
  const gutSpr = () => cache('gut', () => compose(900, 380, [
    [(c) => { c.strokeStyle = '#c96f68'; c.lineWidth = 96; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); c.moveTo(80, 80); c.lineTo(760, 80); c.quadraticCurveTo(840, 80, 840, 180); c.quadraticCurveTo(840, 290, 760, 290); c.lineTo(140, 290); c.stroke(); }, 1],
    [(c) => { c.strokeStyle = '#e99b92'; c.lineWidth = 64; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); c.moveTo(80, 80); c.lineTo(760, 80); c.quadraticCurveTo(840, 80, 840, 180); c.quadraticCurveTo(840, 290, 760, 290); c.lineTo(140, 290); c.stroke(); }, 0.2],
  ]));
  function sceneStudy(ctx, t) {
    ctx.drawImage(flat('lab', '#cfe3df', '#bcd8d2', 53), 0, 0);
    const pan = seg(t, P(9, 'only') - 0.3, P(9, 'only') + 0.5) * 0;
    put(ctx, bigHead(), 470, 720, { d: 1.2 });
    tagU(ctx, t, P(7, 'fifty') - 0.12, P(8, 'five') - 0.2, '50 VULTURES', 110, C.ink, 540, 300, { rot: -0.02, d: 1 });
    // face germs
    const r = H.rng(942), n0 = P(8, 'found'), n1 = P(8, 'faces');
    for (let i = 0; i < 34; i++) { const st = H.lerp(n0, n1, i / 34), a = r() * TAU, d = Math.sqrt(r()), x = 420 + Math.cos(a) * d * 230, y = 660 + Math.sin(a) * d * 150; const A = popIn(t, st, 0.25); if (!A) continue;
      const k = H.clamp((t - (P(9, 'only') + (i % 9) * 0.03)) / 0.4), keep = i % 5 === 0; if (!keep && k >= 1) continue;
      put(ctx, germSpr(14, 80 + (i % 4), i % 3 ? C.germ : C.gold, C.germD), x, y + Math.sin(t * 3 + i) * 5, { s: A.s * (keep ? 1 : 1 - k), d: 0.4, a: keep ? 1 : 1 - k }); }
    if (t >= P(8, 'five') - 0.15) { const u = popIn(t, P(8, 'five') - 0.15, 0.3); ctx.save(); ctx.translate(540, 300); ctx.scale(u.s, u.s); ctx.translate(-540, -300); centerRow(ctx, '528', 300, 170, C.ink); ctx.restore(); }
    tagU(ctx, t, P(8, 'kinds') - 0.12, null, 'KINDS OF BACTERIA', 64, C.ink, 540, 450, { rot: 0.01, d: 0.8 });
    tagU(ctx, t, P(8, 'faces') - 0.12, null, 'FACE', 80, C.card, 830, 930, { back: C.head, rot: 0.06, d: 1 });
    // down to the gut
    arrow(ctx, 600, 1010, 640, 1080, 560, 1160, H.clamp((t - P(9, 'only') + 0.1) / 0.45), C.gold, 943);
    const G = dropIn(t, P(9, 'only') - 0.15, 0.4, 100);
    if (G) { put(ctx, gutSpr(), 540, 1380 + G.dy, { d: 1 + G.d });
      const gr = H.rng(944); for (let i = 0; i < 7; i++) { const A = popIn(t, P(9, 'seventysix') + i * 0.08, 0.3); if (!A) continue; const path = (gr() + t * 0.05) % 1, x = 160 + path * 640, y = 1380 + (i % 2 ? 105 : -105) + G.dy; put(ctx, germSpr(14, 90 + (i % 3)), x, y, { s: A.s, d: 0.4 }); } }
    if (t >= P(9, 'seventysix') - 0.15) { const u = popIn(t, P(9, 'seventysix') - 0.15, 0.3); ctx.save(); ctx.translate(860, 1120); ctx.scale(u.s, u.s); ctx.translate(-860, -1120); numberRow(ctx, '76', 760, 1120, 150, C.red); ctx.restore(); }
    tagU(ctx, t, P(9, 'gut') - 0.12, null, 'GUT', 90, C.card, 240, 1120, { back: '#c96f68', rot: -0.05, d: 1 });
  }

  // ================= SCENE 4: inside the gut: Clostridia + Fusobacteria, toxic elsewhere, on the team here =================
  const gutWall = () => cache('gutwall', () => { const r = H.rng(951); return compose(W0, H0, [
    [(c) => { c.fillStyle = '#d9837d'; c.fillRect(0, 0, W0, H0); }, 0, { rim: false }],
    [(c) => { c.fillStyle = '#e9a39a'; blob(c, [[-10, 360], ...ridge(r, -10, W0 + 10, (x) => 300 + 60 * Math.abs(Math.sin(x * 0.012)), 14, 26, 1), [W0 + 10, 1640], ...ridge(r, -10, W0 + 10, (x) => 1660 - 60 * Math.abs(Math.sin(x * 0.012 + 1)), 14, 26, 1).reverse()]); }, 1.2],
    [(c) => { c.fillStyle = '#f2bdb2'; blob(c, [...ridge(r, -10, W0 + 10, (x) => 500 + 40 * Math.abs(Math.sin(x * 0.016 + 2)), 14, 26, 1), [W0 + 10, 1500], ...ridge(r, -10, W0 + 10, (x) => 1480 - 40 * Math.abs(Math.sin(x * 0.016)), 14, 26, 1).reverse()]); }, 0.8],
  ]); });
  const meatSpr = () => cache('meatchunk', () => { const r = H.rng(955); return compose(320, 260, [[(c) => { c.fillStyle = C.meat; blob(c, ellPts(r, 160, 130, 130, 100, 0.2, 2)); }, 0.8], [(c) => { c.strokeStyle = '#e7a196'; c.lineWidth = 10; c.lineCap = 'round'; for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(80 + i * 50, 80); c.quadraticCurveTo(110 + i * 50, 140, 90 + i * 50, 200); c.stroke(); } }, 0.2]]); });
  const RODS = [[300, 840, 0.3], [560, 800, -0.2], [790, 880, 0.5], [420, 960, -0.6], [700, 990, 0.1]];
  const SPINS = [[290, 1200, -0.3], [540, 1250, 0.2], [800, 1190, -0.5], [420, 1330, 0.4], [690, 1340, -0.1]];
  function sceneSurvive(ctx, t) {
    ctx.drawImage(gutWall(), 0, 0);
    const conv = seg(t, P(14, 'break') - 0.1, PE(14));
    const fo = 1 - H.clamp((t - P(11, 'clostridia') + 0.3) / 0.4);
    if (fo > 0) [[300, 900], [560, 1040], [800, 880], [420, 1240], [700, 1280]].forEach(([x, y], i) => put(ctx, germSpr(30, 50 + (i % 3)), x + Math.sin(t * 1.6 + i) * 18, y + Math.cos(t * 1.3 + i) * 14, { d: 0.8, a: fo, s: 0.8 + 0.2 * fo, rot: Math.sin(t + i) * 0.3 }));
    const mt = popIn(t, P(14, 'break') - 0.15, 0.35);
    if (mt) put(ctx, meatSpr(), 540, 1080, { s: mt.s * (1 - 0.65 * seg(t, P(14, 'break') + 0.3, PE(14) + 0.3)), d: 1 + mt.d, rot: 0.1 });
    const toC = (x, y, k) => [H.lerp(x, 540 + (x - 540) * 0.45, k), H.lerp(y, 1080 + (y - 1080) * 0.45, k)];
    RODS.forEach(([x, y, rot], i) => { const A = popIn(t, P(11, 'clostridia') - 0.15 + i * 0.06, 0.35); if (!A) return; const [px, py] = toC(x, y, conv); put(ctx, rodSpr(i), px + Math.sin(t * 1.5 + i) * 10, py + Math.cos(t * 1.3 + i) * 8, { s: A.s * 0.85, rot: rot + Math.sin(t + i) * 0.1, d: 0.8 + A.d }); });
    SPINS.forEach(([x, y, rot], i) => { const A = popIn(t, P(11, 'fusobacteria') - 0.15 + i * 0.06, 0.35); if (!A) return; const [px, py] = toC(x, y, conv); put(ctx, spindleSpr(i), px + Math.cos(t * 1.4 + i) * 10, py + Math.sin(t * 1.2 + i) * 8, { s: A.s * 0.85, rot: rot + Math.sin(t * 0.9 + i) * 0.1, d: 0.8 + A.d }); });
    tagU(ctx, t, P(10, 'survive') - 0.12, P(11, 'tough') - 0.2, 'SURVIVORS?', 116, C.ink, 540, 300, { rot: -0.03, d: 1 });
    tagU(ctx, t, P(11, 'tough') - 0.12, P(12, 'germs') - 0.2, 'TOUGH MEAT-EATERS', 80, C.ink, 540, 300, { rot: 0.02, d: 1 });
    tagU(ctx, t, P(11, 'clostridia') - 0.12, null, 'CLOSTRIDIA', 84, C.card, 540, 660, { back: C.purple, rot: -0.03, d: 1 });
    tagU(ctx, t, P(11, 'fusobacteria') - 0.12, null, 'FUSOBACTERIA', 84, C.card, 540, 1480, { back: '#3b8a80', rot: 0.03, d: 1 });
    if (tagU(ctx, t, P(12, 'sick') - 0.3, PS(13) - 0.15, 'TOXIC TO OTHERS', 90, C.card, 540, 330, { back: C.red, rot: -0.02, d: 1 })) {}
    if (tagU(ctx, t, P(13, 'team') - 0.12, null, 'ON THE TEAM', 104, C.card, 500, 330, { back: C.green, rot: 0.02, d: 1 })) { const A = popIn(t, P(13, 'team')); if (A) put(ctx, checkSpr(), 930, 300, { s: A.s * 0.8, d: 1 + A.d }); }
  }

  // ================= SCENE 5: the cleanup crew =================
  function sceneClean(ctx, t) {
    ctx.drawImage(SAV2(), 0, 0);
    put(ctx, acacia(72, '#6f8a3c'), 900, 1160, { s: 0.85, d: 0.6 });
    const m = seg(t, P(15, 'cleaning'), PE(16) - 0.4);
    put(ctx, bonesSpr(), 520, 1240, { s: 1.1, d: 0.6, a: m });
    if (m < 1) put(ctx, carcSpr(), 520, 1240, { s: 1.1 * (1 - 0.15 * m), d: 1, a: 1 - m });
    vulture(ctx, 560, 1150, 0.65, { peck: peckAt(t, 6.6, 0.4) * 0.6, d: 0.8 });
    vulture(ctx, 190, 1330, 0.9, { peck: peckAt(t, 6, 1) * 0.9, flip: false });
    vulture(ctx, 890, 1330, 0.9, { peck: peckAt(t, 5.4, 2.2) * 0.9, flip: true });
    
    tagU(ctx, t, P(15, 'cleaning') - 0.12, null, 'CLEANUP CREW', 108, C.ink, 540, 320, { rot: -0.03, d: 1 });
    // germs try to escape, get stopped
    const st = PS(16) - 0.2, GS = [[460, 1100, -1], [600, 1080, 1], [520, 1000, -1], [380, 980, 1]];
    GS.forEach(([x, y, dir], i) => { if (t < st) return; const k = H.clamp((t - st) / 1.2), px = x + dir * k * 260, py = y - k * 260 - i * 30; const X = H.clamp((t - P(16, 'stop')) / 0.25);
      put(ctx, germSpr(24, 100 + (i % 3)), px, py, { d: 0.8, a: X >= 1 ? H.clamp(1 - (t - P(16, 'stop') - 0.6) / 0.3) : 1 });
      if (X > 0 && t < P(16, 'stop') + 0.9) put(ctx, crossSpr(), px, py, { s: 0.5 * H.ease.back(X), d: 1 }); });
    stamp(ctx, t, P(16, 'spreading') - 0.1, 'NO SPREAD', 104, 540, 560, -0.04);
  }

  // ================= SCENE 6: the question =================
  const cardSpr = (key, back) => cache('card' + key, () => compose(460, 520, [[(c) => { c.fillStyle = back; c.beginPath(); c.roundRect(10, 10, 440, 500, 30); c.fill(); }, 0.8]]));
  function sceneEnd(ctx, t) {
    ctx.drawImage(SAV(), 0, 0);
    const tilt = Math.sin(t * 1.4) * 0.1 + (t > P(18, 'which') ? 0.12 : 0);
    vulture(ctx, 560, 1600, 1.15, { peck: 0, tilt });
    tagU(ctx, t, P(17, 'honest') - 0.12, P(18, 'which') - 0.2, 'BE HONEST', 120, C.ink, 540, 320, { rot: -0.03, d: 1 });
    tagU(ctx, t, P(18, 'which') - 0.12, null, 'WHICH IS GROSSER?', 82, C.card, 540, 300, { back: C.coral, rot: 0.02, d: 1 });
    const L = dropIn(t, P(19, 'rotten') - 0.15, 0.4, 90);
    if (L) { put(ctx, cardSpr('l', C.card), 280, 700 + L.dy, { d: 1 + L.d, rot: -0.05 }); put(ctx, carcSpr(), 280, 660 + L.dy, { s: 0.55, d: 0.6, rot: -0.05 }); put(ctx, wordSpr('ROTTEN', 60, C.ink, null), 280, 820 + L.dy, { d: 0.3, rot: -0.05 }); put(ctx, wordSpr('MEAT', 60, C.ink, null), 280, 890 + L.dy, { d: 0.3, rot: -0.05 }); }
    const R = dropIn(t, P(19, 'gut') - 0.15, 0.4, 90);
    if (R) { put(ctx, cardSpr('r', C.card), 800, 700 + R.dy, { d: 1 + R.d, rot: 0.05 }); put(ctx, rodSpr(1), 760, 600 + R.dy, { s: 0.6, rot: 0.3, d: 0.5 }); put(ctx, spindleSpr(2), 850, 670 + R.dy, { s: 0.6, rot: -0.4, d: 0.5 }); put(ctx, germSpr(20, 51), 740, 690 + R.dy, { d: 0.5 }); put(ctx, wordSpr('GERM', 60, C.ink, null), 800, 820 + R.dy, { d: 0.3, rot: 0.05 }); put(ctx, wordSpr('GUT', 60, C.ink, null), 800, 890 + R.dy, { d: 0.3, rot: 0.05 }); }
    const O = popIn(t, P(19, 'or') - 0.1); if (O) put(ctx, wordSpr('OR', 90, C.card, C.ink, 14), 540, 720, { s: O.s, d: 1 + O.d });
    const Q = popIn(t, P(19, 'bacteria') + 0.2, 0.4); if (Q) put(ctx, wordSpr('?', 150, C.card, C.coral, 18), 880, 1120, { s: Q.s, d: 1 + Q.d, rot: 0.1 });
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
  const SC = [{ f: sceneHook }, { p: 3, f: sceneStomach, d: 'right' }, { p: 7, f: sceneStudy, d: 'up' }, { p: 10, f: sceneSurvive, d: 'right' }, { p: 15, f: sceneClean, d: 'up' }, { p: 17, f: sceneEnd, d: 'right' }];
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
    const peck = (t) => k.noise(t, { dur: 0.05, filter: 'bandpass', f: 1800, q: 1.2, gain: 0.12, a: 0.001, minor: true });
    collect().forEach((t) => card(t, 0.7, 0, 1.15));
    SC.forEach((s) => { if (s.cut != null) { layer(s.cut, SLIDE + 0.1); k.play('whoosh', s.cut, { dur: SLIDE, gain: 0.4 }); } });
    // pecks in the hook (peak of each sin^3 cycle)
    for (let t = 0.3; t < SC[1].cut; t += 0.02) { const sp = t < PS(2) ? 3.2 : 6.5, a = Math.sin(t * sp), b = Math.sin((t + 0.02) * sp); if (a > 0.98 && b < a) { peck(t); t += 0.3; } }
    k.play('stamp', P(0, 'never') - 0.05, { gain: 0.75 });
    k.play('pop', P(0, 'why'), { gain: 0.45, f: 640 });
    PH[1].words.slice(6, 7).forEach(([, w]) => { for (let i = 0; i < 7; i++) k.play('pop', w - 0.15 + i * 0.06, { gain: 0.26, f: 380 + i * 50, minor: true }); });
    k.play('ding', P(2, 'eating'), { f: 'E5', gain: 0.28 });
    k.play('pop', P(4, 'acid'), { gain: 0.3, f: 300 });
    for (let i = 0; i < 6; i++) k.play('pop', P(4, 'acid') + 0.1 + i * 0.11, { gain: 0.18, f: 260 + i * 30, minor: true });
    hit(P(4, 'ph') - 0.1, 0.7); k.play('ding', P(4, '1'), { f: 'G5', gain: 0.3 });
    k.play('glitch', P(5, 'battery'), { gain: 0.3 });
    for (let i = 0; i < 6; i++) k.play('pop', P(6, 'die') - 0.2 + i * 0.07, { gain: 0.32, f: 900 - i * 70 });
    k.play('stamp', P(6, 'die') - 0.05, { gain: 0.8 });
    k.play('riser', P(8, 'found') - 0.2, { dur: P(8, 'faces') - P(8, 'found') + 0.2, gain: 0.22 });
    hit(P(8, 'five') - 0.1, 0.6);
    k.play('swish', P(9, 'only') - 0.1, { gain: 0.45, dur: 0.5 });
    k.play('error', P(9, 'only') + 0.1, { gain: 0.18 });
    hit(P(9, 'seventysix') - 0.1, 0.6); k.play('ding', P(9, 'seventysix'), { f: 'C5', gain: 0.28 });
    k.play('pop', P(11, 'clostridia'), { gain: 0.4, f: 420 }); k.play('pop', P(11, 'fusobacteria'), { gain: 0.4, f: 560 });
    k.play('error', P(12, 'sick'), { gain: 0.28 });
    k.play('ding', P(13, 'team'), { f: 'E5', gain: 0.3 }); k.play('ding', P(13, 'team') + 0.1, { f: 'G5', gain: 0.26 });
    for (let i = 0; i < 8; i++) peck(P(14, 'break') + i * 0.12);
    for (let t = PS(15) - 0.3; t < PE(16); t += 0.27) peck(t);
    k.play('paper', P(15, 'cleaning') - 0.1, { dur: 0.8, gain: 0.3 });
    hit(P(16, 'stop') - 0.05, 0.55); k.play('stamp', P(16, 'spreading') - 0.05, { gain: 0.7 });
    k.play('pop', P(19, 'rotten'), { gain: 0.45, f: 600 }); k.play('pop', P(19, 'gut'), { gain: 0.45, f: 720 });
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PE(19) + 0.15 + i * 0.09, { f, gain: 0.38 - i * 0.04, pan: (i - 1) * 0.25 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); ctx.drawImage(SAV(), 0, 0);
    put(ctx, carcSpr(), 500, 1230, { s: 1.15, d: 1 }); vulture(ctx, 820, 1360, 1.0, { peck: 0.3, flip: true });
    put(ctx, wordSpr('ROTTEN', 170, C.card, C.blk, 22), 540, 380, { d: 1.6, rot: -0.03 });
    put(ctx, wordSpr('MEAT?!', 170, C.card, C.coral, 22), 540, 620, { d: 1.6, rot: 0.02 });
    finish(ctx, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
