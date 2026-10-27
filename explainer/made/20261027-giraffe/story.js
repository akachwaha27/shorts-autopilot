// ================= Cut-Paper Diorama, vertical 1080x1920: "Why don't giraffes faint when they lift their heads?" =================
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 2.37, "text": "You'd faint with your brain two meters up.", "words": [["youd", 0.25], ["faint", 0.51], ["with", 0.83], ["your", 1.09], ["brain", 1.34], ["two", 1.66], ["meters", 1.86], ["up", 2.24]]}, {"s": 2.92, "e": 4.52, "text": "Giraffes never do. Why?", "words": [["giraffes", 2.92], ["never", 3.63], ["do", 4.07], ["why", 4.25]]}, {"s": 5.07, "e": 7.35, "text": "A giraffe swings its head from the water,", "words": [["a", 5.07], ["giraffe", 5.14], ["swings", 5.62], ["its", 6.04], ["head", 6.24], ["from", 6.52], ["the", 6.8], ["water", 7.01]]}, {"s": 7.65, "e": 9.32, "text": "all the way up to the treetops,", "words": [["all", 7.65], ["the", 7.86], ["way", 8.07], ["up", 8.28], ["to", 8.42], ["the", 8.56], ["treetops", 8.77]]}, {"s": 9.62, "e": 10.84, "text": "and nothing happens.", "words": [["and", 9.62], ["nothing", 9.84], ["happens", 10.34]]}, {"s": 11.39, "e": 12.88, "text": "First, a monster heart.", "words": [["first", 11.39], ["a", 11.81], ["monster", 11.89], ["heart", 12.46]]}, {"s": 13.43, "e": 15.23, "text": "It weighs about eleven kilos,", "words": [["it", 13.43], ["weighs", 13.58], ["about", 14.03], ["eleven", 14.4], ["kilos", 14.85]]}, {"s": 15.53, "e": 17.22, "text": "with walls thick enough to pump", "words": [["with", 15.53], ["walls", 15.79], ["thick", 16.11], ["enough", 16.44], ["to", 16.83], ["pump", 16.96]]}, {"s": 17.52, "e": 19.08, "text": "at twice your blood pressure.", "words": [["at", 17.52], ["twice", 17.65], ["your", 17.98], ["blood", 18.24], ["pressure", 18.56]]}, {"s": 19.63, "e": 21.56, "text": "Second, valves in the neck veins.", "words": [["second", 19.63], ["valves", 20.08], ["in", 20.52], ["the", 20.67], ["neck", 20.89], ["veins", 21.19]]}, {"s": 22.11, "e": 23.96, "text": "When the head drops down to drink,", "words": [["when", 22.11], ["the", 22.38], ["head", 22.59], ["drops", 22.86], ["down", 23.2], ["to", 23.48], ["drink", 23.62]]}, {"s": 24.26, "e": 26.69, "text": "they stop blood flooding back into the brain.", "words": [["they", 24.26], ["stop", 24.52], ["blood", 24.78], ["flooding", 25.11], ["back", 25.64], ["into", 25.9], ["the", 26.17], ["brain", 26.36]]}, {"s": 27.24, "e": 30.08, "text": "Third, scientists think the neck veins store blood,", "words": [["third", 27.24], ["scientists", 27.58], ["think", 28.26], ["the", 28.59], ["neck", 28.8], ["veins", 29.07], ["store", 29.41], ["blood", 29.74]]}, {"s": 30.38, "e": 31.75, "text": "and when the head swings up,", "words": [["and", 30.38], ["when", 30.57], ["the", 30.82], ["head", 31.0], ["swings", 31.25], ["up", 31.62]]}, {"s": 32.05, "e": 33.38, "text": "it rushes to the heart", "words": [["it", 32.05], ["rushes", 32.2], ["to", 32.64], ["the", 32.79], ["heart", 33.01]]}, {"s": 33.68, "e": 35.45, "text": "for one extra-strong beat.", "words": [["for", 33.68], ["one", 33.94], ["extrastrong", 34.19], ["beat", 35.11]]}, {"s": 36.0, "e": 37.15, "text": "But all that pressure", "words": [["but", 36.0], ["all", 36.19], ["that", 36.38], ["pressure", 36.64]]}, {"s": 37.45, "e": 39.0, "text": "would make anyone's legs swell,", "words": [["would", 37.45], ["make", 37.76], ["anyones", 38.0], ["legs", 38.44], ["swell", 38.69]]}, {"s": 39.3, "e": 41.96, "text": "so giraffes wear built-in compression socks:", "words": [["so", 39.3], ["giraffes", 39.44], ["wear", 40.02], ["builtin", 40.3], ["compression", 40.81], ["socks", 41.6]]}, {"s": 42.26, "e": 44.24, "text": "super-tight skin around their legs.", "words": [["supertight", 42.26], ["skin", 42.94], ["around", 43.22], ["their", 43.63], ["legs", 43.97]]}, {"s": 44.79, "e": 46.54, "text": "So, if you had a giraffe's heart,", "words": [["so", 44.79], ["if", 44.94], ["you", 45.08], ["had", 45.3], ["a", 45.52], ["giraffes", 45.59], ["heart", 46.18]]}, {"s": 46.84, "e": 48.09, "text": "would you still get dizzy", "words": [["would", 46.84], ["you", 47.14], ["still", 47.32], ["get", 47.61], ["dizzy", 47.79]]}, {"s": 48.39, "e": 49.96, "text": "with your brain two meters up?", "words": [["with", 48.39], ["your", 48.65], ["brain", 48.91], ["two", 49.24], ["meters", 49.43], ["up", 49.83]]}];
  // P(i, word) = time the word is spoken in phrase i
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const BEATS = [
    { s: PH[0].s, e: PH[1].e, text: "you'd faint with your brain 2 m up / giraffes never do, why?", screen: 'paper person, neck stretches up a 2 M ruler, dizzy swirl; giraffe slides in, NEVER + check, WHY? ring' },
    { s: PH[2].s, e: PH[4].e, text: 'head swings from water to treetops, nothing happens', screen: 'savanna: giraffe drinking at a pond, neck swings up to an acacia top, WATER / TREETOPS / NOTHING HAPPENS' },
    { s: PH[5].s, e: PH[8].e, text: 'monster heart, about 11 kg, thick walls, twice your blood pressure', screen: '1 tile, MONSTER HEART, big beating paper heart, 11 KG tiles, cutaway THICK WALLS, pressure dial YOU -> 2X' },
    { s: PH[9].s, e: PH[11].e, text: 'valves in neck veins stop blood flooding back to the brain when drinking', screen: 'neck close-up with a blue vein and 3 paper valves; head drops to a pond, blood drops slide back, valves snap shut, BLOCKED, BRAIN SAFE' },
    { s: PH[12].s, e: PH[15].e, text: 'scientists think neck veins store blood, head up, it rushes to the heart, one extra-strong beat', screen: 'x-ray giraffe: vein swells (STORE), neck swings up, drops rush down to the heart, +1 STRONG BEAT burst' },
    { s: PH[16].s, e: PH[19].e, text: 'pressure would swell legs, built-in compression socks, super-tight skin', screen: 'leg close-up, PRESSURE arrows, legs puff (SWELL?), striped sock bands wrap them, TIGHT SKIN + check' },
    { s: PH[20].s, e: PH[22].e, text: "if you had a giraffe's heart, would you still get dizzy with your brain 2 m up?", screen: 'person gets a giraffe heart, DIZZY?, neck stretches the 2 M ruler again, comment bubble' },
  ];
  const DURATION = PH[PH.length - 1].e + 1.0;
  // scene changes (cardstock page slides in the speech pauses)
  const SLIDE = 0.5;
  const CUT2 = PH[1].e + 0.16, CUT3 = PH[4].e + 0.14, CUT4 = PH[8].e + 0.14, CUT5 = PH[11].e + 0.14, CUT6 = PH[15].e + 0.1, CUT7 = PH[19].e + 0.12;
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
    gir: '#ebb862', gir2: '#d9a453', spot: '#9a5426', hoof: '#3a2a22', mane: '#7a4320', muzzle: '#d8a35a',
    heart: '#c8423a', heart2: '#a8333a', heartD: '#6e1c22', aorta: '#d9707a', vein: '#4f6fb3', vein2: '#7f9ad6', blood: '#8e2b3b',
    water: '#5fa8c8', water2: '#8cc6db', tree: '#5c7a3a', tree2: '#46632c', trunk: '#6e4428', grass: '#b9a24a', grass2: '#9c8b3c',
    skin: '#f0c4a0', shirt: '#2f7f86', pants: '#2b4d7a', hair: '#4a3326', far: '#d99a5b', mid: '#c4813f', sun: '#fff1c9', brain: '#f0a3b5' };

  // ---------------- helpers ----------------
  const spots = (c, r, x0, y0, x1, y1, size) => {
    c.fillStyle = C.spot; c.beginPath();
    let row = 0;
    for (let y = y0; y < y1; y += size * 0.86, row++) for (let x = x0 + (row % 2) * size * 0.5; x < x1; x += size) {
      const cx = x + r.range(-size * 0.1, size * 0.1), cy = y + r.range(-size * 0.1, size * 0.1), n = r.int(5, 7), rad = size * 0.41, pts = [];
      for (let k = 0; k < n; k++) { const a = (k / n) * TAU + r.range(-0.25, 0.25), rr = rad * r.range(0.72, 1.02); pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); }
      poly(c, pts);
    }
    c.fill();
  };
  const clipFill = (c, path, base, r, box, size) => { path(c); c.fillStyle = base; c.fill(); if (size) { c.save(); path(c); c.clip(); spots(c, r, ...box, size); c.restore(); } };
  const tile = (ctx, t, st, str, px, col, cx, cy, o = {}) => { const A = dropIn(t, st, 0.4, 70); if (!A) return; const w = rowWidth(str, px); numberRow(ctx, str, cx - w / 2, cy + A.dy, px, col, { d: 1 + A.d }); };
  const fadeOut = (t, a, du = 0.25) => 1 - H.clamp((t - a) / du);

  // ---------------- backdrops ----------------
  const skySpr = (key, base, sunX, sunY, cloudCol) => cache('sky' + key, () => {
    const Cv = H.layer(W0, H0), c = Cv.getContext('2d');
    c.drawImage(paperize(W0, H0, (x) => { x.fillStyle = base; x.fillRect(0, 0, W0, H0); }, { rim: false, seed: 2 + key.length }), 0, 0);
    if (sunX != null) shadowDraw(c, paperize(W0, H0, (x) => { x.fillStyle = C.sun; x.beginPath(); poly(x, circPts(H.rng(4), sunX, sunY, 120, 12, 0.6)); x.fill(); }, { seed: 5 }), 0, 0, 0.4, 0.3);
    const r = H.rng(51 + key.length);
    shadowDraw(c, paperize(W0, H0, (x) => {
      x.fillStyle = cloudCol || C.card; x.beginPath();
      for (let i = 0; i < 4; i++) { const cx = r.range(80, 1000), cy = r.range(250, 820), w = r.range(140, 240); for (let k = 0; k < 4; k++) poly(x, circPts(r, cx - w / 2 + k * w / 3, cy - (k % 3 ? 22 : 0), r.range(34, 52), 10, 0.5)); x.rect(cx - w / 2, cy, w, 34); }
      x.fill();
    }, { seed: 6 + key.length, hi: 0.3 }), 0, 0, 0.5, 0.35);
    return Cv;
  });
  const acaciaSpr = () => cache('acacia', () => compose(600, 900, [
    [(c) => { c.fillStyle = C.trunk; c.beginPath(); poly(c, cutLines(H.rng(3), [[270, 900], [300, 520], [430, 270], [450, 285], [325, 540], [330, 900]], 30, 0.8)); poly(c, cutLines(H.rng(4), [[290, 600], [160, 300], [140, 312], [272, 640]], 30, 0.8)); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.tree2; c.beginPath(); const r = H.rng(7); for (let i = 0; i < 9; i++) poly(c, circPts(r, 60 + i * 60, 250 + Math.sin(i) * 14, r.range(52, 70), 10, 0.8)); c.rect(40, 250, 520, 60); c.fill(); }, 0.3],
    [(c) => { c.fillStyle = C.tree; c.beginPath(); const r = H.rng(8); for (let i = 0; i < 8; i++) poly(c, circPts(r, 90 + i * 58, 205 + Math.cos(i * 1.3) * 12, r.range(46, 62), 10, 0.8)); c.rect(80, 205, 440, 40); c.fill(); }, 0.35],
  ]));
  const pondSpr = () => cache('pond', () => compose(560, 170, [
    [(c) => { c.fillStyle = C.water; c.beginPath(); poly(c, circPts(H.rng(9), 280, 85, 1, 10, 0)); c.ellipse(280, 85, 270, 72, 0, 0, TAU); c.fill(); }, 0],
    [(c) => { c.strokeStyle = C.water2; c.lineWidth = 8; c.lineCap = 'round'; [[150, 70, 90], [330, 100, 120], [260, 55, 60]].forEach(([x, y, w]) => { c.beginPath(); c.moveTo(x - w / 2, y); c.lineTo(x + w / 2, y); c.stroke(); }); }, 0.15],
  ]));
  const cardBg = (key, base, deco) => cache('bg' + key, () => {
    const Cv = H.layer(W0, H0), c = Cv.getContext('2d');
    c.drawImage(paperize(W0, H0, (x) => { x.fillStyle = base; x.fillRect(0, 0, W0, H0); }, { rim: false, seed: 40 + key.length }), 0, 0);
    if (deco) shadowDraw(c, paperize(W0, H0, deco, { seed: 41 + key.length }), 0, 0, 0.6, 0.35);
    return Cv;
  });

  // ---------------- giraffe rig ----------------
  // body: hooves on the ground at (0,0) local; neck pivot (shoulder) at (-170,-645)
  const bodySpr = () => cache('gbody', () => {
    const legP = (x, w) => (c) => { poly(c, [[x - w, 250], [x + w, 250], [x + w * 0.8, 520], [x + w * 0.95, 545], [x + w * 0.7, 770], [x - w * 0.7, 770], [x - w * 0.95, 545], [x - w * 0.8, 520]]); };
    const bodyP = (c) => { c.beginPath(); c.ellipse(345, 240, 250, 115, -0.13, 0, TAU); c.ellipse(170, 225, 95, 118, 0, 0, TAU); };
    return compose(640, 800, [
      [(c) => { const r = H.rng(11); clipFill(c, (x) => { x.beginPath(); legP(200, 20)(x); legP(510, 20)(x); }, C.gir2, r, [150, 240, 560, 560], 40); c.fillStyle = C.hoof; c.fillRect(184, 762, 32, 33); c.fillRect(494, 762, 32, 33); }, 0],
      [(c) => { c.strokeStyle = C.gir2; c.lineWidth = 16; c.lineCap = 'round'; c.beginPath(); c.moveTo(585, 215); c.quadraticCurveTo(615, 320, 600, 430); c.stroke(); c.fillStyle = C.hoof; c.beginPath(); c.ellipse(600, 450, 16, 34, 0, 0, TAU); c.fill(); }, 0.2],
      [(c) => { clipFill(c, bodyP, C.gir, H.rng(12), [60, 100, 600, 360], 66); }, 0.4],
      [(c) => { const r = H.rng(13); clipFill(c, (x) => { x.beginPath(); legP(145, 22)(x); legP(450, 22)(x); }, C.gir, r, [100, 250, 500, 600], 42); c.fillStyle = C.hoof; c.fillRect(128, 762, 34, 33); c.fillRect(433, 762, 34, 33); }, 0.55],
    ]);
  });
  // neck + head: pivot at sprite (210, 780); neck points up (-y), muzzle points left
  const neckSpr = () => cache('gneck', () => {
    const neckP = (c) => { c.beginPath(); poly(c, [[118, 800], [305, 800], [252, 560], [236, 240], [226, 150], [150, 150], [160, 240], [150, 560]]); };
    const headP = (c) => { c.beginPath(); poly(c, [[212, 92], [236, 150], [196, 192], [112, 188], [40, 178], [12, 150], [22, 116], [80, 96], [142, 80]]); };
    return compose(320, 820, [
      [(c) => { c.fillStyle = C.mane; c.beginPath(); const pts = [[226, 150]]; for (let y = 170; y < 760; y += 26) pts.push([258 + (y % 52 ? 0 : 14) + (y - 170) * 0.05, y]); pts.push([300, 780], [236, 780]); poly(c, pts); c.fill(); }, 0],
      [(c) => { clipFill(c, neckP, C.gir, H.rng(14), [120, 160, 320, 800], 50); }, 0.3],
      [(c) => { c.fillStyle = C.gir2; c.fillRect(158, 32, 16, 60); c.fillRect(188, 36, 16, 60); c.fillStyle = C.hoof; c.beginPath(); c.arc(166, 32, 13, 0, TAU); c.arc(196, 36, 13, 0, TAU); c.fill(); c.fillStyle = C.gir2; c.beginPath(); poly(c, [[204, 100], [270, 80], [224, 124]]); c.fill(); }, 0.25],
      [(c) => { headP(c); c.fillStyle = C.gir; c.fill(); c.fillStyle = C.muzzle; c.beginPath(); c.ellipse(46, 152, 38, 28, -0.1, 0, TAU); c.fill(); c.fillStyle = C.spot; c.beginPath(); poly(c, circPts(H.rng(15), 170, 160, 16, 6, 0.5)); poly(c, circPts(H.rng(16), 140, 105, 12, 6, 0.5)); c.fill(); }, 0.45],
      [(c) => { c.fillStyle = '#2b2033'; c.beginPath(); c.arc(118, 124, 11, 0, TAU); c.arc(30, 142, 5, 0, TAU); c.fill(); c.fillStyle = '#fbf6ea'; c.beginPath(); c.arc(114, 120, 4, 0, TAU); c.fill(); c.strokeStyle = '#2b2033'; c.lineWidth = 4; c.lineCap = 'round'; c.beginPath(); c.moveTo(18, 168); c.quadraticCurveTo(50, 180, 76, 172); c.stroke(); }, 0.15],
    ]);
  });
  const NECK_LEN = 660;
  const neckEnd = (th) => [-170 + Math.sin(th) * NECK_LEN, -645 - Math.cos(th) * NECK_LEN];
  // draws the giraffe; th = neck angle (0 = straight up, negative = forward/left); extra(ctxLocal, inNeck) hooks for x-ray overlays
  const giraffe = (ctx, x, gy, s, th, o = {}) => {
    ctx.save(); ctx.translate(x, gy); ctx.scale(s, s);
    if (o.a != null) ctx.globalAlpha = o.a;
    shadowDraw(ctx, bodySpr(), -320, -795, o.d ?? 1.2, 0.45);
    if (o.body) o.body(ctx);
    ctx.save(); ctx.translate(-170, -645); ctx.rotate(th);
    shadowDraw(ctx, neckSpr(), -210, -780, (o.d ?? 1.2) + 0.3, 0.45);
    if (o.neck) o.neck(ctx);
    ctx.restore();
    ctx.restore();
  };
  const toWorld = (x, gy, s, lx, ly) => [x + lx * s, gy + ly * s];

  // ---------------- person ----------------
  const personBodySpr = () => cache('pbody', () => compose(260, 470, [
    [(c) => { c.fillStyle = C.pants; c.beginPath(); poly(c, cutLines(H.rng(21), [[78, 230], [182, 230], [190, 455], [138, 455], [130, 300], [122, 455], [70, 455], [78, 230]], 26, 0.6)); c.fill(); c.fillStyle = '#2b2033'; c.fillRect(62, 448, 64, 20); c.fillRect(134, 448, 64, 20); }, 0],
    [(c) => { c.fillStyle = C.skin; c.fillRect(30, 70, 30, 190); c.fillRect(200, 70, 30, 190); }, 0.2],
    [(c) => { c.fillStyle = C.coral; c.beginPath(); poly(c, cutLines(H.rng(22), [[60, 30], [200, 30], [214, 250], [46, 250], [60, 30]], 30, 0.6)); c.fill(); }, 0.4],
  ]));
  const personHeadSpr = (dizzy) => cache('phead' + dizzy, () => compose(200, 210, [
    [(c) => { c.fillStyle = C.skin; c.beginPath(); poly(c, circPts(H.rng(23), 100, 115, 72, 10, 0.7)); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.hair; c.beginPath(); poly(c, cutLines(H.rng(24), [[28, 110], [40, 50], [100, 30], [162, 50], [174, 110], [150, 80], [100, 70], [50, 84], [28, 110]], 20, 0.7)); c.fill(); }, 0.3],
    [(c) => { c.strokeStyle = '#2b2033'; c.fillStyle = '#2b2033'; c.lineWidth = 6; c.lineCap = 'round';
      if (dizzy) { [[76, 120], [124, 120]].forEach(([x, y]) => { c.beginPath(); c.moveTo(x - 10, y - 10); c.lineTo(x + 10, y + 10); c.moveTo(x + 10, y - 10); c.lineTo(x - 10, y + 10); c.stroke(); }); c.beginPath(); c.ellipse(100, 160, 14, 10, 0, 0, TAU); c.stroke(); }
      else { c.beginPath(); c.arc(78, 120, 8, 0, TAU); c.arc(122, 120, 8, 0, TAU); c.fill(); c.beginPath(); c.arc(100, 148, 20, 0.3, Math.PI - 0.3); c.stroke(); } }, 0.15],
  ]));
  const neckStripSpr = () => cache('pneck', () => paperize(54, 200, (c) => { c.fillStyle = C.skin; c.fillRect(6, 0, 42, 200); }, { seed: 25 }));
  // person standing with feet at (x, fy); neck length nl px
  const person = (ctx, x, fy, nl, dizzy, o = {}) => {
    const sh = fy - 450;
    if (nl > 4) { const ns = neckStripSpr(); ctx.save(); ctx.translate(x - 27, sh - nl + 10); ctx.scale(1, (nl + 10) / 200); shadowDraw(ctx, ns, 0, 0, 0.8, 0.4); ctx.restore(); }
    shadowDraw(ctx, personBodySpr(), x - 130, sh - 20, 1.2, 0.45);
    if (o.chest) o.chest(ctx, x, sh + 90);
    const sw = Math.sin((o.t || 0) * 2.3) * (dizzy ? 0.12 : 0.03);
    put(ctx, personHeadSpr(dizzy), x + Math.sin(sw) * 20, sh - nl - 90, { rot: sw, d: 1.3 });
  };
  const rulerSpr = () => cache('ruler', () => compose(110, 820, [
    [(c) => { c.fillStyle = C.gold; c.fillRect(10, 10, 90, 800); }, 0],
    [(c) => { c.fillStyle = C.ink; for (let y = 30; y < 800; y += 38) c.fillRect(10, y, (y - 30) % 190 ? 30 : 56, 8); }, 0.15],
  ]));
  // ruler grows upward from (x, y0) to height h (clip-revealed)
  const ruler = (ctx, x, y0, h) => { if (h <= 2) return; const R = rulerSpr(); ctx.save(); ctx.beginPath(); ctx.rect(x - 80, y0 - h, 160, h + 20); ctx.clip(); shadowDraw(ctx, R, x - 55, y0 - 810, 0.8, 0.4); ctx.restore(); };

  // ---------------- heart, gauge, vein bits ----------------
  const heartPath = (c, cx, cy, s) => { c.moveTo(cx, cy + 250 * s); c.bezierCurveTo(cx - 290 * s, cy + 60 * s, cx - 310 * s, cy - 210 * s, cx - 120 * s, cy - 240 * s); c.bezierCurveTo(cx - 50 * s, cy - 250 * s, cx - 10 * s, cy - 200 * s, cx, cy - 160 * s); c.bezierCurveTo(cx + 10 * s, cy - 200 * s, cx + 50 * s, cy - 250 * s, cx + 120 * s, cy - 240 * s); c.bezierCurveTo(cx + 310 * s, cy - 210 * s, cx + 290 * s, cy + 60 * s, cx, cy + 250 * s); c.closePath(); };
  const heartSpr = () => cache('heart', () => compose(700, 720, [
    [(c) => { c.strokeStyle = C.aorta; c.lineWidth = 64; c.lineCap = 'butt'; c.beginPath(); c.moveTo(390, 260); c.bezierCurveTo(390, 70, 560, 40, 600, 150); c.stroke(); c.strokeStyle = C.vein; c.lineWidth = 54; c.beginPath(); c.moveTo(250, 250); c.lineTo(220, 40); c.stroke(); }, 0],
    [(c) => { c.beginPath(); heartPath(c, 350, 400, 1); c.fillStyle = C.heart; c.fill(); }, 0.5],
    [(c) => { c.save(); c.beginPath(); heartPath(c, 350, 400, 1); c.clip(); c.beginPath(); c.moveTo(350, 680); c.bezierCurveTo(470, 560, 560, 420, 590, 260); c.lineTo(700, 260); c.lineTo(700, 700); c.closePath(); c.fillStyle = C.heart2; c.fill(); c.restore(); c.strokeStyle = C.heartD; c.lineWidth = 12; c.lineCap = 'round'; c.beginPath(); c.moveTo(330, 250); c.quadraticCurveTo(380, 420, 330, 600); c.stroke(); }, 0.2],
    [(c) => { c.fillStyle = 'rgba(255,220,210,0.85)'; c.beginPath(); c.ellipse(200, 260, 60, 30, -0.6, 0, TAU); c.fill(); }, 0.1],
  ]));
  const chamberSpr = () => cache('chamber', () => compose(700, 720, [
    [(c) => { c.beginPath(); heartPath(c, 350, 400, 0.5); c.fillStyle = C.heartD; c.fill(); }, 0],
    [(c) => { c.strokeStyle = C.heart2; c.lineWidth = 14; c.beginPath(); c.moveTo(350, 330); c.lineTo(350, 510); c.stroke(); }, 0.2],
  ]));
  const smallHeartSpr = () => cache('sheart', () => compose(150, 150, [[(c) => { c.beginPath(); heartPath(c, 75, 78, 0.24); c.fillStyle = C.heart; c.fill(); }, 0]]));
  const gaugeSpr = () => cache('gauge', () => compose(620, 360, [
    [(c) => { c.fillStyle = C.card; c.beginPath(); c.arc(310, 320, 290, Math.PI, 0); c.closePath(); c.fill(); }, 0],
    [(c) => { [[Math.PI, Math.PI * 1.36, C.teal], [Math.PI * 1.36, Math.PI * 1.7, C.gold], [Math.PI * 1.7, TAU, C.coral]].forEach(([a, b, col]) => { c.strokeStyle = col; c.lineWidth = 52; c.beginPath(); c.arc(310, 320, 232, a, b); c.stroke(); }); }, 0.25],
    [(c) => { c.fillStyle = C.ink; for (let i = 0; i <= 10; i++) { const a = Math.PI + (i / 10) * Math.PI; c.save(); c.translate(310 + Math.cos(a) * 180, 320 + Math.sin(a) * 180); c.rotate(a); c.fillRect(-14, -4, 28, 8); c.restore(); } }, 0.1],
  ]));
  const needleSpr = () => cache('needle', () => compose(300, 60, [[(c) => { c.fillStyle = C.ink; c.beginPath(); poly(c, [[20, 18], [280, 28], [280, 32], [20, 42]]); c.fill(); c.beginPath(); c.arc(30, 30, 28, 0, TAU); c.fill(); }, 0]]));
  const veinSpr = (len) => cache('vein' + len, () => compose(len + 20, 110, [
    [(c) => { c.fillStyle = C.vein; c.beginPath(); poly(c, cutLines(H.rng(31), [[0, 15], [len, 15], [len + 10, 55], [len, 95], [0, 95]], 40, 0.6)); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.vein2; c.fillRect(0, 27, len, 56); }, 0.15],
  ]));
  const flapSpr = () => cache('flap', () => paperize(70, 34, (c) => { c.fillStyle = C.card; c.beginPath(); poly(c, [[4, 4], [4, 30], [66, 17]]); c.fill(); }, { seed: 33 }));
  const dropSpr = () => cache('drop', () => paperize(40, 40, (c) => { c.fillStyle = C.blood; c.beginPath(); poly(c, circPts(H.rng(34), 20, 20, 14, 5, 0.4)); c.fill(); }, { seed: 35 }));
  const brainSpr = () => cache('brain', () => compose(170, 120, [
    [(c) => { c.fillStyle = C.brain; c.beginPath(); poly(c, circPts(H.rng(36), 85, 62, 1, 6, 0)); c.ellipse(85, 62, 76, 50, 0, 0, TAU); c.fill(); }, 0],
    [(c) => { c.strokeStyle = '#c96f86'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(85, 18); c.lineTo(85, 106); [[30, 50, 60, 70], [110, 40, 140, 66], [40, 86, 70, 80], [100, 88, 135, 92]].forEach(([a, b, d, e]) => { c.moveTo(a, b); c.quadraticCurveTo((a + d) / 2, b - 16, d, e); }); c.stroke(); }, 0.15],
  ]));
  // close-up neck (horizontal, pivot at sprite (40, 220), head to the right, muzzle at the far right)
  const neckCloseSpr = () => cache('neckclose', () => {
    const neckP = (c) => { c.beginPath(); poly(c, [[-560, 25], [1010, 110], [1010, 330], [-560, 415]]); };
    const headP = (c) => { c.beginPath(); poly(c, [[960, 110], [1080, 84], [1200, 112], [1330, 168], [1366, 228], [1328, 292], [1200, 322], [1060, 334], [960, 322]]); };
    const T = (f) => (c) => { c.translate(600, 0); f(c); };
    return compose(2000, 440, [
      [T((c) => { c.fillStyle = C.mane; c.beginPath(); const pts = [[-560, 30]]; for (let x = -560; x <= 990; x += 30) pts.push([x, 55 + x * 0.055 - (Math.abs(x) % 60 ? 18 : 34)]); pts.push([990, 112], [-560, 60]); poly(c, pts); c.fill(); }), 0],
      [T((c) => { clipFill(c, neckP, C.gir, H.rng(37), [-560, 10, 1020, 430], 78); }), 0.3],
      [T((c) => { c.fillStyle = C.gir2; c.fillRect(1052, 20, 22, 74); c.fillRect(1104, 24, 22, 74); c.fillStyle = C.hoof; c.beginPath(); c.arc(1063, 22, 17, 0, TAU); c.arc(1115, 26, 17, 0, TAU); c.fill(); c.fillStyle = C.gir2; c.beginPath(); poly(c, [[1000, 120], [930, 60], [1024, 104]]); c.fill(); }), 0.25],
      [T((c) => { headP(c); c.fillStyle = C.gir; c.fill(); c.fillStyle = C.muzzle; c.beginPath(); c.ellipse(1310, 236, 54, 46, 0, 0, TAU); c.fill(); c.fillStyle = '#2b2033'; c.beginPath(); c.arc(1196, 160, 13, 0, TAU); c.arc(1340, 214, 7, 0, TAU); c.fill(); c.fillStyle = '#fbf6ea'; c.beginPath(); c.arc(1191, 155, 5, 0, TAU); c.fill(); }), 0.45],
    ]);
  });
  const legSpr = () => cache('leg', () => compose(220, 1400, [
    [(c) => { clipFill(c, (x) => { x.beginPath(); poly(x, [[30, 0], [190, 0], [160, 640], [176, 720], [150, 1330], [70, 1330], [44, 720], [60, 640]]); }, C.gir, H.rng(38), [20, 0, 210, 900], 80); c.fillStyle = C.hoof; c.beginPath(); poly(c, [[64, 1320], [156, 1320], [168, 1392], [52, 1392]]); c.fill(); }, 0],
  ]));
  const sockSpr = (i) => cache('sock' + (i % 2), () => paperize(200, 76, (c) => { c.fillStyle = i % 2 ? C.card : C.teal; c.beginPath(); poly(c, cutLines(H.rng(39 + i % 2), [[4, 8], [196, 8], [196, 68], [4, 68], [4, 8]], 30, 0.6)); c.fill(); }, { seed: 39 + (i % 2) }));

  // corner header tag (pinned question), right side, below the top UI zone
  function header(ctx, t) {
    const A = dropIn(t, CUT2 + 0.2, 0.4, 60);
    if (A && t < CUT7) put(ctx, wordSpr('Why no fainting?', 46, C.cream, C.coral, 12), 790, 215 + A.dy, { rot: 0.03, d: 1 + A.d });
  }

  // ================= SCENE 1: the hook =================
  function sceneHook(ctx, t) {
    ctx.drawImage(skySpr('a', '#f7d9a0', 860, 380, '#fbecc8'), 0, 0);
    const push = 1 + 0.05 * seg(t, 0, 5);
    ctx.save(); ctx.translate(540, 1100); ctx.scale(push, push); ctx.translate(-540, -1100);
    shadowDraw(ctx, hillsSpr(3, C.far, 50), -200, 1240, 1.0);
    shadowDraw(ctx, groundSpr(1400, C.grass, 11), -160, 1500, 1.3);
    // person: neck stretches up the 2 m ruler
    const grow = seg(t, P(0, 'brain') - 0.1, P(0, 'up') + 0.1), nl = 30 + 560 * grow, dizzy = t > P(0, 'up') + 0.1;
    const PA = dropIn(t, 0.05, 0.45, 140);
    if (PA) {
      ruler(ctx, 470, 1100, 650 * seg(t, P(0, 'two') - 0.15, P(0, 'up') + 0.1));
      ctx.save(); ctx.translate(0, PA.dy); person(ctx, 300, 1540, nl, dizzy, { t }); ctx.restore();
      if (dizzy) put(ctx, swirlSpr(), 300, 1080 - nl - 260, { rot: t * 5, s: 0.8 * H.ease.back(H.clamp((t - P(0, 'up') - 0.1) / 0.3)), d: 0.6 });
    }
    const TA = dropIn(t, P(0, 'two') - 0.12, 0.4, 60);
    if (TA) { const w = rowWidth('2M', 130); numberRow(ctx, '2M', 600 - w / 2 + 40, 760 + TA.dy, 130, C.ink, { d: 1 + TA.d }); }
    tag(ctx, t, P(0, 'faint') - 0.12, 'FAINT', 96, C.red, 300, 1660 - 120, { back: C.cream, bw: 16, rot: -0.04, d: 1.1 });
    // giraffe slides in from the right, calm
    const gIn = H.ease.out(H.clamp((t - P(1, 'giraffes') + 0.35) / 0.55));
    if (gIn > 0) giraffe(ctx, 1000 + (1 - gIn) * 700, 1540, 0.74, -0.22 + Math.sin(t * 1.2) * 0.03);
    ctx.restore();
    if (t > P(1, 'never') - 0.15) { tag(ctx, t, P(1, 'never') - 0.15, 'NEVER', 100, C.teal, 830, 1330, { back: C.cream, bw: 16, rot: 0.04, d: 1.1 }); const K = dropIn(t, P(1, 'do') - 0.1, 0.3, 40); if (K) put(ctx, checkSpr(), 830, 1180 + K.dy, { s: K.s * 0.8, d: 0.8 + K.d }); }
    const WA = dropIn(t, P(1, 'why') - 0.12, 0.35, 0);
    if (WA) {
      const u = H.clamp((t - P(1, 'why') + 0.12) / 0.35);
      put(ctx, ringSpr(), 560, 1000, { s: 0.3 + 0.7 * H.ease.back(u), d: 0.6, rot: 0.05 });
      put(ctx, wordSpr('WHY?', 150, C.coral, C.cream, 18), 560, 1000, { s: H.ease.back(u), d: 1.1 });
    }
  }

  // ================= SCENE 2: water to treetops =================
  const GX2 = 850, GY2 = 1520, GS2 = 0.88, TH_DRINK = -2.15, TH_UP = -0.28;
  function sceneSwing(ctx, t) {
    ctx.drawImage(skySpr('b', '#a9d6db', 900, 330, '#eaf5f2'), 0, 0);
    const up = seg(t, P(2, 'water') + 0.15, P(3, 'treetops') + 0.05);
    const th = H.lerp(TH_DRINK, TH_UP, up) + (up >= 1 ? Math.sin((t - P(3, 'treetops')) * 1.5) * 0.03 : 0);
    // camera: tilts with the head (continuous move)
    const camY = H.lerp(-120, 80, up), zoom = 1.04 + 0.04 * Math.sin(up * Math.PI);
    ctx.save(); ctx.translate(540, 960); ctx.scale(zoom, zoom); ctx.translate(-540, -960 + camY);
    shadowDraw(ctx, hillsSpr(4, C.far, 60), -260 - t * 4, 1150, 1.0);
    shadowDraw(ctx, hillsSpr(7, C.mid, 40, 1700), -300 - t * 8, 1300, 1.1);
    shadowDraw(ctx, acaciaSpr(), -150, 300, 1.2);
    shadowDraw(ctx, groundSpr(1400, C.grass2, 17), -160, 1450, 1.3);
    put(ctx, pondSpr(), 230, 1530, { d: 0.5 });
    giraffe(ctx, GX2, GY2, GS2, th);
    ctx.restore();
    tag(ctx, t, P(2, 'water') - 0.15, 'WATER', 92, C.water, 330, 1380, { back: C.cream, bw: 16, rot: -0.04, d: 1.1 });
    if (up > 0.3) { const A = dropIn(t, P(3, 'treetops') - 0.15, 0.35, 60); if (A) put(ctx, wordSpr('TREETOPS', 76, C.tree2, C.cream, 14), 250, 270 + A.dy, { s: A.s, d: 1.1 + A.d, rot: 0.03 }); }
    const pA = seg(t, P(3, 'all') - 0.05, P(3, 'treetops'));
    if (pA > 0) arrow(ctx, 130, 1180, 40, 850, 170, 640, pA, C.gold, 41, 24);
    const NA = dropIn(t, P(4, 'nothing') - 0.12, 0.35, 70);
    if (NA) { put(ctx, wordSpr('NOTHING', 100, C.ink, C.cream, 16), 320, 900 + NA.dy, { s: NA.s, d: 1 + NA.d, rot: -0.03 }); tag(ctx, t, P(4, 'happens') - 0.12, 'HAPPENS', 80, C.coral, 330, 1030, { back: C.cream, bw: 14, rot: 0.03 }); }
  }

  // ================= SCENE 3: the monster heart =================
  function sceneHeart(ctx, t) {
    ctx.drawImage(cardBg('heart', '#f4cdb8', (x) => { x.fillStyle = '#efb9a0'; const r = H.rng(61); for (let i = 0; i < 9; i++) { x.beginPath(); poly(x, circPts(r, r.range(0, W0), r.range(200, H0 - 100), r.range(120, 260), 24, 1.5)); x.fill(); } }), 0, 0);
    tile(ctx, t, P(5, 'first') - 0.12, '1', 150, C.gold, 165, 360);
    tag(ctx, t, P(5, 'monster') - 0.12, 'MONSTER', 112, C.coral, 620, 320, { back: C.cream, bw: 18, rot: -0.03, d: 1.1 });
    tag(ctx, t, P(5, 'heart') - 0.15, 'HEART', 112, C.ink, 620, 460, { back: C.cream, bw: 18, rot: 0.03, d: 1.1 });
    // heart: drops in, beats; shrinks up for the pressure dial
    const HA = dropIn(t, P(5, 'heart') - 0.15, 0.45, 160);
    const tPr = P(8, 'twice') - 0.35, shrink = seg(t, tPr, tPr + 0.4);
    const hx = 540, hy = H.lerp(990, 860, shrink), hs = H.lerp(1, 0.66, shrink);
    const beatP = 0.86, ph = ((t - P(5, 'heart')) % beatP) / beatP, hard = t > P(7, 'pump') - 0.1 && t < P(8, 'at') ? 1.8 : 1;
    const pulse = 1 + (ph < 0.18 ? Math.sin((ph / 0.18) * Math.PI) * 0.045 * hard : 0);
    if (HA) {
      put(ctx, heartSpr(), hx, hy + HA.dy, { s: HA.s * hs * pulse, d: 1.3 + HA.d });
      const cut = seg(t, P(7, 'walls') - 0.15, P(7, 'walls') + 0.25) * fadeOut(t, tPr - 0.1, 0.3);
      if (cut > 0) put(ctx, chamberSpr(), hx, hy, { s: hs * pulse, a: cut, d: 0 });
    }
    // 11 KG on "eleven" / "kilos"
    const kOut = fadeOut(t, P(7, 'walls') - 0.3, 0.25);
    if (kOut > 0) { ctx.save(); ctx.globalAlpha = kOut; tile(ctx, t, P(6, 'eleven') - 0.12, '11', 190, C.coral, 400, 1470); tag(ctx, t, P(6, 'kilos') - 0.12, 'KG', 130, C.ink, 720, 1480, { back: C.cream, bw: 16, rot: 0.04, d: 1 }); ctx.restore(); }
    // thick walls
    if (t > P(7, 'walls') - 0.2 && t < tPr) {
      const pa = seg(t, P(7, 'thick') - 0.05, P(7, 'thick') + 0.3);
      arrow(ctx, 160, 1240, 140, 1040, 300, 930, pa, C.ink, 43, 18);
      tag(ctx, t, P(7, 'thick') - 0.12, 'THICK WALLS', 84, C.heartD, 540, 1460, { back: C.cream, bw: 16, rot: -0.03, d: 1.1 });
    }
    // pressure dial: needle from YOU to 2X
    const GA = dropIn(t, tPr + 0.1, 0.4, 120);
    if (GA) {
      put(ctx, gaugeSpr(), 540, 1300 + GA.dy, { s: GA.s, d: 1 + GA.d });
      const nu = seg(t, P(8, 'twice') - 0.05, P(8, 'twice') + 0.6), nang = Math.PI + H.lerp(0.3, 0.86, H.ease.back(nu)) * Math.PI;
      ctx.save(); ctx.translate(540, 1300 + 140 + GA.dy); ctx.rotate(nang); shadowDraw(ctx, needleSpr(), -30, -30, 0.8, 0.4); ctx.restore();
      tag(ctx, t, P(8, 'your') - 0.12, 'YOU', 54, C.teal, 300, 1120, { rot: -0.08 });
      tile(ctx, t, P(8, 'twice') - 0.1, '2X', 130, C.coral, 830, 1090);
      tag(ctx, t, P(8, 'blood') - 0.12, 'BLOOD PRESSURE', 64, C.ink, 540, 1530, { back: C.cream, bw: 14, rot: 0.02 });
    }
  }

  // ================= SCENE 4: valves in the neck veins =================
  const PX4 = 1040, PY4 = 360, NS4 = 0.9, VALVES = [300, 560, 820], VC = 40;
  const phi4 = (t) => H.lerp(2.45, 1.95, seg(t, P(10, 'drops') - 0.15, P(10, 'down') + 0.25)) + Math.sin(t * 1.1) * 0.01;
  const L2W = (t, x, v) => { const f = phi4(t), c = Math.cos(f), s = Math.sin(f); return [PX4 + (x * c - v * s) * NS4, PY4 + (x * s + v * c) * NS4]; };
  const DROPS = (() => { const out = []; let k = 0; for (let x = 70; x < 940; x += 74, k++) out.push(x); return out; })();
  function sceneValves(ctx, t) {
    ctx.drawImage(cardBg('valves', '#2f5f66', (x) => { x.strokeStyle = 'rgba(160,214,206,0.5)'; x.lineWidth = 6; for (let i = -10; i < 30; i++) { x.beginPath(); x.moveTo(i * 90, 0); x.lineTo(i * 90 + 900, H0); x.stroke(); } }), 0, 0);
    tile(ctx, t, P(9, 'second') - 0.12, '2', 150, C.gold, 140, 330);
    tag(ctx, t, P(9, 'valves') - 0.12, 'VALVES', 112, C.coral, 470, 300, { back: C.cream, bw: 18, rot: -0.03, d: 1.1 });
    tag(ctx, t, P(9, 'neck') - 0.12, 'IN NECK VEINS', 60, C.vein, 470, 440, { back: C.cream, bw: 14, rot: 0.02, d: 1 });
    const PA = dropIn(t, P(10, 'drink') - 0.15, 0.4, 80);
    if (PA) put(ctx, pondSpr(), 540, 1570 + PA.dy, { s: 1.1, d: 0.5 + PA.d });
    const f = phi4(t), tDrop = P(10, 'drops'), tClose = P(11, 'stop') - 0.08;
    const close = seg(t, tClose, tClose + 0.18);
    ctx.save(); ctx.translate(PX4, PY4); ctx.rotate(f); ctx.scale(NS4, NS4);
    ctx.save(); ctx.scale(1, -1); shadowDraw(ctx, neckCloseSpr(), -600, -220, 1.3, 0.45); ctx.restore();
    // x-ray window: vein, valves, drops, brain
    shadowDraw(ctx, veinSpr(960), 0, VC - 55, 0.5, 0.35);
    const pb = brainSpr(); shadowDraw(ctx, pb, 1160 - 85, -10 - 60, 0.5, 0.35);
    const flowBack = (tt) => 170 * Math.max(0, Math.min(tt, tClose + 0.1) - tDrop);
    const off0 = t < tDrop ? (t * 38) % 74 : (tDrop * 38) % 74;
    DROPS.forEach((x0, i) => {
      const xs = x0 - off0, next = VALVES.find((vx) => vx > xs + 4);
      let x = xs + flowBack(t);
      if (next != null) { const rank = DROPS.filter((q) => { const qs = q - off0; return qs > xs && qs < next; }).length; x = Math.min(x, next - 30 - rank * 34); }
      if (x < 10 || x > 950) return;
      shadowDraw(ctx, dropSpr(), x - 20, VC - 20 + Math.sin(i * 2.1) * 8, 0.3, 0.3);
    });
    VALVES.forEach((vx) => {
      const fs = flapSpr();
      [[VC - 28, 1], [VC + 28, -1]].forEach(([wv, side]) => { ctx.save(); ctx.translate(vx, wv); ctx.rotate(Math.PI - side * 0.95 * close); shadowDraw(ctx, fs, -4, -17, 0.4, 0.35); ctx.restore(); });
    });
    ctx.restore();
    if (t < tDrop - 0.1) { const [vx, vy] = L2W(t, VALVES[1], VC); const pa = seg(t, P(9, 'valves'), P(9, 'valves') + 0.4); arrow(ctx, vx + 60, vy - 330, vx + 140, vy - 160, vx + 20, vy - 50, pa, C.gold, 45, 18); }
    if (t > tClose) {
      const [vx, vy] = L2W(t, VALVES[2], VC);
      tag(ctx, t, tClose, 'BLOCKED!', 84, C.red, Math.min(800, vx + 200), vy + 40, { back: C.cream, bw: 16, rot: 0.05, d: 1.1 });
      const X = dropIn(t, P(11, 'flooding') - 0.1, 0.25, 50); const [bx, by] = L2W(t, 1100, -10);
      if (X) { arrow(ctx, bx + 300, by - 260, bx + 290, by - 120, bx + 140, by - 40, 1, C.blood, 47, 16); put(ctx, crossSpr(), bx + 250, by - 160 + X.dy, { s: X.s * 0.7, d: 0.8 + X.d, rot: 0.1 }); }
      tag(ctx, t, P(11, 'brain') - 0.12, 'BRAIN SAFE', 72, C.teal, 800, Math.min(1560, by + 230), { back: C.cream, bw: 14, rot: -0.03, d: 1.1 });
    }
  }

  // ================= SCENE 5: stored blood, extra beat (x-ray giraffe) =================
  const GX5 = 860, GY5 = 1540, GS5 = 0.85;
  function sceneBeat(ctx, t) {
    ctx.drawImage(skySpr('c', '#f4b07a', 200, 300, '#fbd9b4'), 0, 0);
    const up = seg(t, P(13, 'swings') - 0.05, P(13, 'up') + 0.2), th = H.lerp(TH_DRINK, TH_UP, up);
    const store = seg(t, P(12, 'store') - 0.1, P(12, 'store') + 0.4) * (1 - seg(t, P(14, 'rushes'), P(14, 'heart') + 0.1));
    const tBeat = P(15, 'beat'), big = Math.max(0, 1 - Math.abs(t - tBeat - 0.08) / 0.3);
    const ph = ((t - CUT5) % 0.9) / 0.9, pulse = 1 + (ph < 0.18 ? Math.sin((ph / 0.18) * Math.PI) * 0.06 : 0) + 0.45 * H.ease.out(big);
    const zoom = 1 + 0.06 * seg(t, P(14, 'heart') - 0.4, tBeat);
    ctx.save(); ctx.translate(760, 1080); ctx.scale(zoom, zoom); ctx.translate(-760, -1080);
    shadowDraw(ctx, hillsSpr(5, '#d7864e', 50), -260 - t * 4, 1200, 1.0);
    shadowDraw(ctx, groundSpr(1400, C.grass, 23), -160, 1470, 1.3);
    put(ctx, pondSpr(), 220, 1560, { d: 0.5 });
    if (big > 0) put(ctx, burstSpr(), GX5 - 150 * GS5, GY5 - 540 * GS5, { s: 0.25 + 0.6 * big, rot: t * 0.4, d: 0.5 });
    giraffe(ctx, GX5, GY5, GS5, th, {
      body: (c) => { put(c, heartSpr(), -150, -545, { s: 0.3 * pulse, d: 0.6 }); },
      neck: (c) => {
        // vein (x-ray strip) from the head down to the shoulder; swells when it stores blood
        const w = 16 + 26 * store; c.save(); c.globalAlpha = 0.92; c.strokeStyle = C.vein; c.lineWidth = w; c.lineCap = 'round'; c.beginPath(); c.moveTo(-6, -20); c.lineTo(-24, -560); c.stroke(); c.strokeStyle = C.vein2; c.lineWidth = w * 0.45; c.stroke(); c.restore();
        // drops rush down to the heart
        const rr = H.clamp((t - P(14, 'rushes') + 0.1) / 0.8);
        if (rr > 0 && rr < 1) for (let i = 0; i < 6; i++) { const u = H.clamp(rr * 1.6 - i * 0.12); if (u <= 0 || u >= 1) continue; const y = -560 + u * 560, x = -24 + u * 18; shadowDraw(c, dropSpr(), x - 20, y - 20, 0.3, 0.3); }
      },
    });
    ctx.restore();
    tile(ctx, t, P(12, 'third') - 0.12, '3', 150, C.gold, 140, 330);
    tag(ctx, t, P(12, 'scientists') - 0.12, 'SCIENTISTS THINK', 52, C.ink, 560, 330, { rot: -0.03 });
    const so = fadeOut(t, P(13, 'swings') - 0.1, 0.25);
    if (so > 0) { ctx.save(); ctx.globalAlpha = so; tag(ctx, t, P(12, 'store') - 0.12, 'STORED', 104, C.vein, 760, 640, { back: C.cream, bw: 16, rot: 0.03, d: 1.1 }); tag(ctx, t, P(12, 'blood') - 0.12, 'BLOOD', 80, C.blood, 760, 780, { back: C.cream, bw: 14, rot: -0.03 }); ctx.restore(); }
    tag(ctx, t, P(13, 'up') - 0.12, 'HEAD UP', 72, C.coral, 850, 520, { back: C.cream, bw: 14, rot: 0.04 });
    const ro = fadeOut(t, P(15, 'one') - 0.2, 0.2);
    if (ro > 0) { ctx.save(); ctx.globalAlpha = ro; tag(ctx, t, P(14, 'rushes') - 0.12, 'RUSH!', 104, C.blood, 860, 700, { back: C.cream, bw: 16, rot: -0.04, d: 1.1 }); ctx.restore(); }
    tile(ctx, t, P(15, 'one') - 0.12, '+1', 150, C.coral, 860, 720);
    tag(ctx, t, P(15, 'extrastrong') - 0.12, 'STRONG BEAT', 64, C.ink, 820, 880, { back: C.cream, bw: 14, rot: 0.03, d: 1.1 });
  }

  // ================= SCENE 6: compression socks =================
  const LEGX = [210, 490];
  function sceneLegs(ctx, t) {
    ctx.drawImage(cardBg('legs', '#cfe3c2', (x) => { x.fillStyle = '#b8d4a6'; const r = H.rng(71); for (let i = 0; i < 6; i++) { x.beginPath(); poly(x, circPts(r, r.range(0, W0), r.range(300, 1400), r.range(140, 260), 24, 1.5)); x.fill(); } }), 0, 0);
    const swell = seg(t, P(17, 'swell') - 0.1, P(17, 'swell') + 0.35) * (1 - seg(t, P(18, 'socks') - 0.1, P(18, 'socks') + 0.35));
    const pan = 60 * seg(t, CUT6, PH[19].e);
    ctx.save(); ctx.translate(0, -pan);
    shadowDraw(ctx, groundSpr(1400, C.grass, 29), -160, 1520, 1.3);
    // belly strip at the top
    shadowDraw(ctx, cache('belly', () => paperize(1200, 260, (c) => { clipFill(c, (x) => { x.beginPath(); x.ellipse(600, 30, 640, 200, 0, 0, TAU); }, C.gir, H.rng(72), [0, 0, 1200, 260], 90); }, { seed: 73 })), -160, -60, 1.3);
    LEGX.forEach((lx, i) => {
      const sx = 1 + 0.55 * swell * (0.6 + 0.4 * Math.sin(t * 9 + i));
      ctx.save(); ctx.translate(lx, 160); ctx.scale(sx, 1); shadowDraw(ctx, legSpr(), -110, 0, 1.2, 0.45); ctx.restore();
      // sock bands wrap the lower leg one by one
      for (let k = 0; k < 6; k++) {
        const st = P(18, 'compression') - 0.15 + (k + i * 0.5) * 0.11, A = dropIn(t, st, 0.3, 90);
        const fade = fadeOut(t, P(19, 'skin') - 0.1, 0.4);
        if (A && fade > 0) { const y = 160 + 820 + k * 72, w = 1 - k * 0.03; put(ctx, sockSpr(k), lx, y + A.dy, { sx: (0.84 * w) * (1 + 0.3 * swell), sy: 1, d: 0.6 + A.d, a: fade, rot: (k % 2 ? 0.02 : -0.02) }); }
      }
      // tight skin: crisp ink outline hugs the leg
      const tight = seg(t, P(19, 'supertight') - 0.1, P(19, 'skin') + 0.2);
      if (tight > 0) { ctx.save(); ctx.globalAlpha = tight; ctx.strokeStyle = C.ink; ctx.lineWidth = 10; ctx.lineJoin = 'round'; ctx.beginPath(); poly(ctx, [[lx - 80, 160], [lx + 80, 160], [lx + 50, 800], [lx + 66, 880], [lx + 40, 1490], [lx - 40, 1490], [lx - 66, 880], [lx - 50, 800]].map(([x, y]) => [x, y])); ctx.stroke(); ctx.restore(); }
    });
    // pressure arrows push down into the legs
    const pa = seg(t, P(16, 'pressure') - 0.1, P(16, 'pressure') + 0.4) * fadeOut(t, P(18, 'so') - 0.1, 0.3);
    if (pa > 0) LEGX.forEach((lx, i) => arrow(ctx, lx, 300, lx + 20, 500, lx, 720, pa, C.coral, 51 + i, 26));
    ctx.restore();
    tag(ctx, t, P(16, 'pressure') - 0.12, 'PRESSURE', 80, C.coral, 810, 380, { back: C.cream, bw: 16, rot: 0.04, d: 1.1 });
    const sw = fadeOut(t, P(18, 'socks') - 0.1, 0.3);
    if (sw > 0) { ctx.save(); ctx.globalAlpha = sw; tag(ctx, t, P(17, 'swell') - 0.12, 'SWELL?', 90, C.red, 820, 640, { back: C.cream, bw: 16, rot: -0.04, d: 1.1 }); ctx.restore(); }
    tag(ctx, t, P(18, 'builtin') - 0.12, 'BUILT-IN', 64, C.ink, 820, 770, { back: C.cream, bw: 14, rot: 0.03 });
    tag(ctx, t, P(18, 'socks') - 0.15, 'SOCKS', 104, C.teal, 820, 900, { back: C.cream, bw: 18, rot: -0.03, d: 1.2 });
    tag(ctx, t, P(19, 'supertight') - 0.12, 'TIGHT', 96, C.ink, 820, 1100, { back: C.cream, bw: 16, rot: 0.03, d: 1.1 });
    tag(ctx, t, P(19, 'skin') - 0.12, 'SKIN', 96, C.coral, 820, 1240, { back: C.cream, bw: 16, rot: -0.03, d: 1.1 });
    const K = dropIn(t, P(19, 'legs') - 0.1, 0.3, 40); if (K) put(ctx, checkSpr(), 820, 1400 + K.dy, { s: K.s, d: 0.8 + K.d });
  }

  // ================= SCENE 7: the question =================
  function sceneEnd(ctx, t) {
    ctx.drawImage(skySpr('d', '#f2c27a', 880, 360, '#f8dfae'), 0, 0);
    shadowDraw(ctx, hillsSpr(8, C.far, 50), -200, 1240, 1.0);
    shadowDraw(ctx, groundSpr(1400, C.grass2, 37), -160, 1500, 1.3);
    shadowDraw(ctx, acaciaSpr(), 600, 520, 1.0);
    giraffe(ctx, 1010, 1540, 0.68, -0.25 + Math.sin(t * 1.2) * 0.03);
    const grow = seg(t, P(22, 'brain') - 0.1, P(22, 'up') + 0.1), nl = 30 + 560 * grow;
    const HT = dropIn(t, P(20, 'heart') - 0.15, 0.4, 260);
    ruler(ctx, 470, 1100, 650 * seg(t, P(22, 'two') - 0.15, P(22, 'up') + 0.1));
    person(ctx, 300, 1540, nl, t > P(21, 'dizzy') - 0.1 && t < P(22, 'brain'), { t, chest: (c, x, y) => { if (HT) put(c, heartSpr(), x, y + 40 + HT.dy, { s: 0.24 * HT.s, d: 0.8 + HT.d }); } });
    tag(ctx, t, P(20, 'giraffes') - 0.12, "GIRAFFE HEART?", 64, C.coral, 540, 1660 - 130, { back: C.cream, bw: 14, rot: -0.02, d: 1 });
    const DA = dropIn(t, P(21, 'dizzy') - 0.12, 0.35, 0);
    if (DA) { const u = H.clamp((t - P(21, 'dizzy') + 0.12) / 0.35); put(ctx, ringSpr(), 610, 1260, { s: (0.3 + 0.7 * H.ease.back(u)) * 0.85, d: 0.6, rot: 0.05 }); put(ctx, wordSpr('DIZZY?', 110, C.coral, C.cream, 18), 610, 1260, { s: H.ease.back(u), d: 1.1 }); }
    const TA = dropIn(t, P(22, 'two') - 0.12, 0.4, 60);
    if (TA) { const w = rowWidth('2M', 120); numberRow(ctx, '2M', 610 - w / 2 + 30, 760 + TA.dy, 120, C.ink, { d: 1 + TA.d }); }
    const BA = dropIn(t, P(22, 'up') - 0.05, 0.35, 60);
    if (BA) { put(ctx, bubbleSpr(), 780, 340 + BA.dy, { s: BA.s * 0.85, d: 1 + BA.d }); tag(ctx, t, P(22, 'up') + 0.1, 'COMMENT!', 54, C.ink, 780, 330, { rot: -0.04 }); }
  }
  const swirlSpr = () => cache('swirl', () => paperize(180, 180, (c) => { c.strokeStyle = '#7fb24a'; c.lineWidth = 16; c.lineCap = 'round'; c.beginPath(); for (let a = 0; a < TAU * 2.2; a += 0.1) { const rr = 8 + a * 11; const x = 90 + Math.cos(a) * rr, y = 90 + Math.sin(a) * rr; a ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke(); }, { seed: 19 }));
  const bubbleSpr = () => cache('bubble', () => compose(440, 300, [
    [(c) => { c.fillStyle = C.card; c.beginPath(); c.ellipse(220, 130, 205, 120, 0, 0, TAU); c.moveTo(110, 220); c.lineTo(70, 296); c.lineTo(180, 240); c.fill(); }, 0],
  ]));
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
    if (t < CUT2 + SLIDE) slideIn(ctx, t, CUT2, 0, sceneHook, sceneSwing, 'right');
    else if (t < CUT3 + SLIDE) slideIn(ctx, t, CUT3, 0, sceneSwing, sceneHeart, 'up');
    else if (t < CUT4 + SLIDE) slideIn(ctx, t, CUT4, 0, sceneHeart, sceneValves, 'right');
    else if (t < CUT5 + SLIDE) slideIn(ctx, t, CUT5, 0, sceneValves, sceneBeat, 'up');
    else if (t < CUT6 + SLIDE) slideIn(ctx, t, CUT6, 0, sceneBeat, sceneLegs, 'right');
    else slideIn(ctx, t, CUT7, 0, sceneLegs, sceneEnd, 'up');
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
    const strip = (t0, t1, g = 1, p = 0) => { const d = t1 - t0; k.noise(t0, { dur: d, filter: 'bandpass', f: [[0, 900], [d, 1500]], q: 0.8, gain: 0.09 * g, a: d * 0.3, hold: d * 0.4, pan: p, minor: true }); card(t1, 0.55 * g, p, 1.2); };
    const flick = (t, g = 1, p = 0) => { k.noise(t, { dur: 0.022, filter: 'bandpass', f: 1800, q: 1.4, gain: 0.22 * g, a: 0.001, pan: p, minor: true }); k.tone(t, { f: 220, dur: 0.03, gain: 0.06 * g, pan: p, minor: true }); };
    const flapSnd = (t, n, rate, g = 1, p = 0) => { for (let i = 0; i < n; i++) k.noise(t + i * rate, { dur: rate * 0.8, color: 'pink', filter: 'bandpass', f: [[0, 500], [rate * 0.8, 1200]], q: 0.7, gain: 0.16 * g, a: rate * 0.3, pan: p, minor: true }); };
    const tagLand = (st, g = 0.6, p = 0, du = 0.35) => card(land(st, du), g, p, 1.2);
    const heartbeat = (t, g = 1) => { k.play('thud', t, { gain: 0.55 * g, f: 90 }); k.play('thud', t + 0.16, { gain: 0.35 * g, f: 75 }); };

    // SCENE 1
    card(land(0.05, 0.45), 0.9, -0.4, 0.9, false); // person lands
    tagLand(P(0, 'faint') - 0.12, 0.8, -0.4);
    k.play('error', P(0, 'faint') + 0.05, { gain: 0.35, pan: -0.4 });
    k.play('riser', P(0, 'brain') - 0.1, { dur: P(0, 'up') - P(0, 'brain') + 0.2, gain: 0.5, pan: -0.3 }); // neck stretches
    strip(P(0, 'two') - 0.15, P(0, 'up') + 0.1, 0.9, -0.1);
    k.play('impact', land(P(0, 'two') - 0.12, 0.4), { gain: 0.8 });
    k.play('sparkle', P(0, 'up') + 0.12, { gain: 0.5, n: 4, pan: -0.4 });
    k.play('whoosh', P(1, 'giraffes') - 0.35, { dur: 0.55, gain: 0.6, pan: 0.5 });
    card(P(1, 'giraffes') + 0.15, 0.9, 0.5, 0.8, false);
    tagLand(P(1, 'never') - 0.15, 0.8, 0.5);
    k.play('success', land(P(1, 'do') - 0.1, 0.3), { f: 'E5', gain: 0.45, pan: 0.5 });
    k.play('pop', P(1, 'why') - 0.07, { gain: 0.9, f: 520 });
    // SCENE 2
    layer(CUT2, SLIDE + 0.15, 1);
    tagLand(CUT2 + 0.2, 0.6, 0.6, 0.4);
    k.play('paper', P(2, 'water') - 0.1, { dur: 0.3, gain: 0.4, pan: -0.4 });
    tagLand(P(2, 'water') - 0.15, 0.7, -0.4);
    k.play('whoosh', P(2, 'water') + 0.15, { dur: P(3, 'treetops') - P(2, 'water'), top: 1800, gain: 0.7 });
    strip(P(3, 'all') - 0.05, P(3, 'treetops'), 1, -0.5);
    tagLand(P(3, 'treetops') - 0.15, 0.8, -0.4);
    k.play('slap', land(P(4, 'nothing') - 0.12, 0.35), { gain: 0.6, pan: 0.4 });
    tagLand(P(4, 'happens') - 0.12, 0.6, 0.4);
    // SCENE 3
    layer(CUT3, SLIDE + 0.15, 1);
    k.play('impact', land(P(5, 'first') - 0.12, 0.4), { gain: 0.6, pan: -0.6 });
    tagLand(P(5, 'monster') - 0.12, 0.8, 0.2); tagLand(P(5, 'heart') - 0.15, 0.8, 0.2);
    card(land(P(5, 'heart') - 0.15, 0.45), 1.1, 0, 0.8, false);
    for (let b = P(5, 'heart') + 0.2; b < CUT4; b += 0.86) heartbeat(b, b > P(7, 'pump') - 0.2 && b < P(8, 'at') ? 1.4 : 0.7);
    flick(P(6, 'eleven') - 0.12 + 0.15, 1, -0.3); flick(P(6, 'eleven') + 0.06, 1, -0.3);
    k.play('impact', land(P(6, 'eleven') - 0.12, 0.4), { gain: 1.1, pan: -0.3 });
    tagLand(P(6, 'kilos') - 0.12, 0.7, 0.3);
    k.play('paper', P(7, 'walls') - 0.15, { dur: 0.4, gain: 0.5 });
    strip(P(7, 'thick') - 0.05, P(7, 'thick') + 0.3, 1, -0.5);
    tagLand(P(7, 'thick') - 0.12, 0.7);
    card(land(P(8, 'twice') - 0.25, 0.4), 0.9, 0, 0.9, false); // dial lands
    k.play('riser', P(8, 'twice') - 0.05, { dur: 0.6, gain: 0.5 });
    tagLand(P(8, 'your') - 0.12, 0.5, -0.4);
    k.play('stamp', land(P(8, 'twice') - 0.1, 0.4), { gain: 0.9, pan: 0.4 });
    tagLand(P(8, 'blood') - 0.12, 0.6);
    // SCENE 4
    layer(CUT4, SLIDE + 0.15, 1);
    k.play('impact', land(P(9, 'second') - 0.12, 0.4), { gain: 0.6, pan: -0.6 });
    tagLand(P(9, 'valves') - 0.12, 0.8, -0.2); tagLand(P(9, 'neck') - 0.12, 0.6, -0.2);
    strip(P(9, 'valves'), P(9, 'valves') + 0.4, 0.8, 0.3);
    k.play('whoosh', P(10, 'drops') - 0.15, { dur: 0.6, gain: 0.6 });
    card(land(P(10, 'drink') - 0.15, 0.4), 0.7, 0, 1);
    k.noise(P(10, 'drink'), { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1500]], q: 1.2, gain: 0.12, minor: true }); // water lap
    k.noise(P(10, 'drops'), { dur: P(11, 'stop') - P(10, 'drops'), color: 'brown', filter: 'lowpass', f: 420, gain: 0.12, a: 0.3, minor: true }); // blood sliding
    k.play('click', P(11, 'stop') - 0.08, { gain: 1.3 }); k.play('stamp', P(11, 'stop') - 0.05, { gain: 0.9 });
    tagLand(P(11, 'stop') - 0.08, 0.8, 0.4);
    k.play('slap', land(P(11, 'flooding') - 0.1, 0.25), { gain: 0.6, pan: 0.3 });
    k.play('success', land(P(11, 'brain') - 0.12, 0.35), { f: 'G5', gain: 0.5 });
    // SCENE 5
    layer(CUT5, SLIDE + 0.15, 1);
    k.play('impact', land(P(12, 'third') - 0.12, 0.4), { gain: 0.6, pan: -0.6 });
    tagLand(P(12, 'scientists') - 0.12, 0.6, -0.3);
    k.noise(P(12, 'store') - 0.1, { dur: 0.6, color: 'pink', filter: 'bandpass', f: [[0, 300], [0.6, 700]], q: 2, gain: 0.18 }); // vein fills
    tagLand(P(12, 'store') - 0.12, 0.7, 0.3); tagLand(P(12, 'blood') - 0.12, 0.6, 0.3);
    k.play('whoosh', P(13, 'swings') - 0.05, { dur: 0.6, top: 2200, gain: 0.8, pan: -0.3 });
    tagLand(P(13, 'up') - 0.12, 0.6, 0.4);
    k.play('riser', P(14, 'rushes') - 0.1, { dur: 0.9, gain: 0.6 });
    tagLand(P(14, 'rushes') - 0.12, 0.7, 0.4);
    for (let b = CUT5 + 0.5; b < P(15, 'beat') - 0.3; b += 0.9) heartbeat(b, 0.5);
    flick(P(15, 'one') - 0.12 + 0.15, 1, 0.4);
    k.play('stamp', land(P(15, 'one') - 0.12, 0.4), { gain: 0.7, pan: 0.4 });
    tagLand(P(15, 'extrastrong') - 0.12, 0.6, 0.4);
    heartbeat(P(15, 'beat'), 1.8); k.play('impact', P(15, 'beat') + 0.02, { gain: 1.2 });
    // SCENE 6
    layer(CUT6, SLIDE + 0.15, 1);
    tagLand(P(16, 'pressure') - 0.12, 0.7, 0.4);
    strip(P(16, 'pressure') - 0.1, P(16, 'pressure') + 0.4, 1, -0.3);
    k.noise(P(17, 'swell') - 0.1, { dur: 0.45, color: 'pink', filter: 'bandpass', f: [[0, 250], [0.45, 900]], q: 3, gain: 0.25 }); // puff
    k.play('error', P(17, 'swell') + 0.2, { gain: 0.4, pan: 0.4 });
    tagLand(P(18, 'builtin') - 0.12, 0.5, 0.4);
    for (let i = 0; i < 12; i++) k.play('tape', P(18, 'compression') - 0.15 + (i % 6 + Math.floor(i / 6) * 0.5) * 0.11 + 0.1, { dur: 0.12, gain: 0.35, pan: i < 6 ? -0.4 : 0.1, minor: true });
    tagLand(P(18, 'socks') - 0.15, 0.8, 0.4);
    k.noise(P(18, 'socks'), { dur: 0.35, filter: 'bandpass', f: [[0, 900], [0.35, 300]], q: 2, gain: 0.2 }); // squeeze
    tagLand(P(19, 'supertight') - 0.12, 0.6, 0.4); tagLand(P(19, 'skin') - 0.12, 0.6, 0.4);
    k.play('success', land(P(19, 'legs') - 0.1, 0.3), { f: 'C6', gain: 0.45, pan: 0.4 });
    // SCENE 7
    layer(CUT7, SLIDE + 0.15, 1);
    tagLand(P(20, 'giraffes') - 0.12, 0.6);
    card(land(P(20, 'heart') - 0.15, 0.4), 1, -0.4, 0.8, false); heartbeat(P(20, 'heart') + 0.3, 0.8);
    k.play('pop', P(21, 'dizzy') - 0.07, { gain: 0.9, f: 480 }); k.play('sparkle', P(21, 'dizzy'), { gain: 0.4, n: 4, pan: -0.4 });
    k.play('riser', P(22, 'brain') - 0.1, { dur: P(22, 'up') - P(22, 'brain') + 0.2, gain: 0.45, pan: -0.3 });
    k.play('impact', land(P(22, 'two') - 0.12, 0.4), { gain: 0.7 });
    k.play('pop', P(22, 'up') + 0.05, { gain: 0.8, f: 700 });
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PH[22].e + 0.1 + i * 0.09, { f, gain: 0.45 - i * 0.04, pan: (i - 1) * 0.25 }));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
