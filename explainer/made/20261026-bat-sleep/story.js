// ================= Cut-Paper Diorama, vertical 1080x1920: "Why do bats sleep upside down?" =================
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 2.36, "text": "You'd pass out sleeping upside down,", "words": [["youd", 0.25], ["pass", 0.54], ["out", 0.83], ["sleeping", 1.05], ["upside", 1.63], ["down", 2.07]]}, {"s": 2.66, "e": 4.78, "text": "but some bats do it 20 hours a day.", "words": [["but", 2.66], ["some", 2.91], ["bats", 3.23], ["do", 3.56], ["it", 3.72], ["20", 3.88], ["hours", 4.05], ["a", 4.45], ["day", 4.54]]}, {"s": 5.33, "e": 6.62, "text": "So why hang like that?", "words": [["so", 5.33], ["why", 5.48], ["hang", 5.71], ["like", 6.01], ["that", 6.32]]}, {"s": 7.17, "e": 8.82, "text": "Bats have a takeoff problem.", "words": [["bats", 7.17], ["have", 7.46], ["a", 7.74], ["takeoff", 7.82], ["problem", 8.32]]}, {"s": 9.37, "e": 11.68, "text": "They're the only mammals that truly fly,", "words": [["theyre", 9.37], ["the", 9.8], ["only", 10.02], ["mammals", 10.31], ["that", 10.82], ["truly", 11.1], ["fly", 11.47]]}, {"s": 11.98, "e": 14.24, "text": "but their wings can't lift them off the ground,", "words": [["but", 11.98], ["their", 12.17], ["wings", 12.47], ["cant", 12.78], ["lift", 13.02], ["them", 13.26], ["off", 13.51], ["the", 13.69], ["ground", 13.87]]}, {"s": 14.54, "e": 16.77, "text": "and their back legs are too tiny to run.", "words": [["and", 14.54], ["their", 14.76], ["back", 15.11], ["legs", 15.4], ["are", 15.69], ["too", 15.9], ["tiny", 16.12], ["to", 16.41], ["run", 16.55]]}, {"s": 17.32, "e": 20.07, "text": "So they sleep up high, hanging by their toes.", "words": [["so", 17.32], ["they", 17.47], ["sleep", 17.79], ["up", 18.18], ["high", 18.34], ["hanging", 18.65], ["by", 19.2], ["their", 19.36], ["toes", 19.75]]}, {"s": 20.62, "e": 21.55, "text": "Time to go?", "words": [["time", 20.62], ["to", 21.08], ["go", 21.31]]}, {"s": 22.1, "e": 23.32, "text": "They let go, drop,", "words": [["they", 22.1], ["let", 22.47], ["go", 22.76], ["drop", 22.94]]}, {"s": 23.62, "e": 25.77, "text": "and they're flying before they hit anything.", "words": [["and", 23.62], ["theyre", 23.8], ["flying", 24.16], ["before", 24.52], ["they", 24.88], ["hit", 25.12], ["anything", 25.3]]}, {"s": 26.32, "e": 28.46, "text": "But doesn't hanging all day get tiring?", "words": [["but", 26.32], ["doesnt", 26.53], ["hanging", 26.94], ["all", 27.42], ["day", 27.63], ["get", 27.84], ["tiring", 28.04]]}, {"s": 29.01, "e": 29.59, "text": "Nope.", "words": [["nope", 29.01]]}, {"s": 30.14, "e": 32.66, "text": "Their toe tendons work like a locking clip.", "words": [["their", 30.14], ["toe", 30.5], ["tendons", 30.72], ["work", 31.22], ["like", 31.51], ["a", 31.8], ["locking", 31.87], ["clip", 32.37]]}, {"s": 33.21, "e": 35.03, "text": "Body weight pulls the tendon tight,", "words": [["body", 33.21], ["weight", 33.46], ["pulls", 33.84], ["the", 34.15], ["tendon", 34.34], ["tight", 34.72]]}, {"s": 35.33, "e": 37.88, "text": "and the claws clamp shut, with zero effort.", "words": [["and", 35.33], ["the", 35.56], ["claws", 35.78], ["clamp", 36.16], ["shut", 36.53], ["with", 36.83], ["zero", 37.13], ["effort", 37.43]]}, {"s": 38.43, "e": 41.01, "text": "To let go, they use muscles to open them.", "words": [["to", 38.43], ["let", 38.59], ["go", 38.84], ["they", 39.01], ["use", 39.34], ["muscles", 39.59], ["to", 40.18], ["open", 40.34], ["them", 40.68]]}, {"s": 41.56, "e": 43.08, "text": "And the blood rush to the head?", "words": [["and", 41.56], ["the", 41.75], ["blood", 41.94], ["rush", 42.26], ["to", 42.51], ["the", 42.64], ["head", 42.83]]}, {"s": 43.63, "e": 45.97, "text": "Bats are so light, it barely happens.", "words": [["bats", 43.63], ["are", 43.95], ["so", 44.2], ["light", 44.36], ["it", 44.76], ["barely", 44.92], ["happens", 45.41]]}, {"s": 46.52, "e": 49.23, "text": "Plus, up high, most predators can't reach them.", "words": [["plus", 46.52], ["up", 46.82], ["high", 46.97], ["most", 47.27], ["predators", 47.57], ["cant", 48.25], ["reach", 48.55], ["them", 48.93]]}, {"s": 49.78, "e": 51.98, "text": "So, could you nap upside down like a bat?", "words": [["so", 49.78], ["could", 49.92], ["you", 50.28], ["nap", 50.49], ["upside", 50.71], ["down", 51.13], ["like", 51.42], ["a", 51.7], ["bat", 51.77]]}];
  // P(i, word) = time the word is spoken in phrase i
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const BEATS = [
    { s: PH[0].s, e: PH[2].e, text: 'pass out upside down / bats 20 hours a day / why?', screen: 'paper person hanging dizzy, bat hanging, 20 HOURS tiles, WHY? ring' },
    { s: PH[3].s, e: PH[6].e, text: 'takeoff problem: only flying mammal, wings cannot lift from ground, legs too tiny', screen: 'bat on the ground, TAKEOFF PROBLEM, ONLY FLYING MAMMAL burst, up-arrow crossed, TINY LEGS tag' },
    { s: PH[7].s, e: PH[10].e, text: 'sleep up high, let go, drop, flying', screen: 'camera tilts up to rock ceiling, bat lets go, DROP, swoops away' },
    { s: PH[11].s, e: PH[16].e, text: 'tendons lock: body weight pulls tendon, claws clamp, zero effort; muscles to open', screen: 'foot close-up on branch, red tendon strip, WEIGHT arrow, LOCKED, 0 EFFORT tiles, MUSCLES OPEN' },
    { s: PH[17].s, e: PH[19].e, text: 'blood rush barely happens, predators cannot reach', screen: 'BLOOD RUSH? tag, SO LIGHT, fox jumping short below' },
    { s: PH[20].s, e: PH[20].e, text: 'could you nap upside down?', screen: 'person and bat hanging side by side, COULD YOU? + comment bubble' },
  ];
  const DURATION = PH[PH.length - 1].e + 1.0;
  // scene changes (cardstock page slides in the speech pauses)
  const CUT_TENDON = 25.92, CUT_BLOOD = 41.2, CUT_END = 49.35, SLIDE = 0.5;
  const TILT = [16.9, 17.55]; // ground -> rock ceiling camera tilt (continuous)

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

  // ---------------- palette ----------------
  const C = { night: '#2b2d5a', night2: '#363a6e', far: '#4c5590', mid: '#3d5f7a', rock: '#5b5470', rock2: '#463f5c', cream: '#f3ecdc', card: '#fbf6ea', bat: '#4a3b52', bat2: '#5e4b66', wing: '#3b2e44', ear: '#c98a8f', gold: '#f2b545', coral: '#e8604a', teal: '#58b0a6', red: '#d9473b', ink: '#2b2d5a', green: '#2f6b66', green2: '#163a3a', moon: '#f6e7bf', fox: '#e07a3c' };

  // ---------------- sprites ----------------
  // backdrop: night card with paper stars and a moon (screen-fixed)
  const skySpr = (key, base) => cache('sky' + key, () => {
    const Cv = H.layer(W0, H0), c = Cv.getContext('2d');
    c.drawImage(paperize(W0, H0, (x) => { x.fillStyle = base; x.fillRect(0, 0, W0, H0); }, { rim: false, seed: 2 }), 0, 0);
    const r = H.rng(31 + key.length);
    const st = paperize(W0, H0, (x) => {
      x.fillStyle = C.moon;
      for (let i = 0; i < 70; i++) { const sx = r.range(14, W0 - 14), sy = r.range(14, 1300), s = r.range(5, 10), pts = []; for (let j = 0; j < 10; j++) { const rr = j % 2 ? s * 0.42 : s, a = (j / 10) * TAU; pts.push([sx + Math.cos(a) * rr, sy + Math.sin(a) * rr]); } x.beginPath(); poly(x, pts); x.fill(); }
    }, { hi: 0.3 });
    shadowDraw(c, st, 0, 0, 0.25);
    return Cv;
  });
  const moonSpr = () => cache('moon', () => compose(260, 260, [
    [(c) => { c.fillStyle = C.moon; c.beginPath(); poly(c, circPts(H.rng(5), 130, 130, 105, 12, 0.6)); c.fill(); }, 0],
    [(c) => { c.fillStyle = 'rgba(214,196,150,0.9)'; [[95, 100, 18], [160, 150, 24], [110, 175, 12]].forEach(([x, y, rr]) => { c.beginPath(); poly(c, circPts(H.rng(x), x, y, rr, 8, 0.4)); c.fill(); }); }, 0.2],
  ]));
  // rock ceiling (cave roof) strip: jagged scissor-cut bottom edge
  const ceilingSpr = (w, seed, col) => cache('ceil' + w + seed + col, () => {
    const r = H.rng(seed), f = (x) => 330 + 45 * Math.sin(x * 0.011 + seed) + 22 * Math.sin(x * 0.037 + 1);
    return paperize(w, 480, (c) => { c.fillStyle = col; c.beginPath(); poly(c, [[0, 0], [w, 0], ...ridge(r, 0, w, f, 18, 40, 1.2).reverse()]); c.fill();
      // stalactite snips
      c.beginPath(); for (let x = 60; x < w - 40; x += r.range(110, 220)) { const y = f(x) - 4, l = r.range(40, 90), hw = r.range(14, 24); poly(c, [[x - hw, y], [x + hw, y], [x + r.range(-4, 4), y + l]]); } c.fill();
    }, { seed: seed + 1 });
  });
  // the hanging bat (feet at the top, head at the bottom), wings wrapped round the body. Size ~ 300x520
  const hangBatSpr = (blink) => cache('hang' + blink, () => {
    const r = H.rng(41);
    return compose(320, 540, [
      // feet + claws gripping (top)
      [(c) => { c.fillStyle = '#2d2233'; c.fillRect(126, 12, 16, 70); c.fillRect(178, 12, 16, 70); c.beginPath(); [[134, 14], [186, 14]].forEach(([x, y]) => { poly(c, [[x - 18, y + 6], [x - 10, y - 8], [x, y - 10], [x + 10, y - 8], [x + 18, y + 6], [x + 6, y + 2], [x, y + 8], [x - 6, y + 2]]); }); c.fill(); }, 0],
      // wrapped wings: a tall cocoon with scalloped folds
      [(c) => { c.fillStyle = C.wing; c.beginPath(); poly(c, cutLines(r, [[160, 60], [262, 110], [282, 260], [250, 400], [160, 438], [70, 400], [38, 260], [58, 110], [160, 60]], 26, 0.9)); c.fill(); }, 0.35],
      // fold strips (wing fingers) cut in a lighter purple
      [(c) => { c.strokeStyle = C.bat2; c.lineWidth = 14; c.lineCap = 'round'; [[[100, 110], [80, 260], [110, 390]], [[220, 110], [240, 260], [210, 390]], [[160, 80], [160, 300]]].forEach((ln) => { c.beginPath(); c.moveTo(ln[0][0], ln[0][1]); for (let i = 1; i < ln.length; i++) c.lineTo(ln[i][0], ln[i][1]); c.stroke(); }); }, 0.25],
      // furry head (bottom), ears point DOWN
      [(c) => { c.fillStyle = C.bat; c.beginPath(); poly(c, circPts(r, 160, 432, 70, 10, 0.8)); poly(c, [[108, 470], [86, 535], [140, 486]]); poly(c, [[212, 470], [234, 535], [180, 486]]); c.fill(); }, 0.45],
      [(c) => { c.fillStyle = C.ear; c.beginPath(); poly(c, [[112, 484], [100, 520], [132, 492]]); poly(c, [[208, 484], [220, 520], [188, 492]]); c.fill(); }, 0.2],
      // face (upside down: eyes below the snout)
      [(c) => { c.fillStyle = '#c99aa0'; c.beginPath(); c.ellipse(160, 415, 26, 18, 0, 0, TAU); c.fill(); c.fillStyle = '#2b2033'; c.beginPath(); c.ellipse(150, 410, 5, 4, 0, 0, TAU); c.ellipse(170, 410, 5, 4, 0, 0, TAU); c.fill();
        if (blink) { c.fillStyle = '#f3ecdc'; c.fillRect(126, 446, 22, 6); c.fillRect(172, 446, 22, 6); } else { c.fillStyle = '#fbf6ea'; c.beginPath(); c.arc(136, 452, 11, 0, TAU); c.arc(184, 452, 11, 0, TAU); c.fill(); c.fillStyle = '#2b2033'; c.beginPath(); c.arc(136, 455, 6, 0, TAU); c.arc(184, 455, 6, 0, TAU); c.fill(); }
      }, 0.2],
    ]);
  });
  // flying bat parts: body (ears up) + one wing (right); the left wing is mirrored
  const batBodySpr = () => cache('batbody', () => {
    const r = H.rng(43);
    return compose(180, 260, [
      [(c) => { c.fillStyle = C.bat; c.beginPath(); poly(c, circPts(r, 90, 150, 56, 10, 0.8)); poly(c, circPts(r, 90, 80, 44, 10, 0.6)); poly(c, [[56, 60], [40, 6], [82, 46]]); poly(c, [[124, 60], [140, 6], [98, 46]]); c.fill(); }, 0],
      [(c) => { c.fillStyle = C.ear; c.beginPath(); poly(c, [[60, 52], [50, 20], [76, 46]]); poly(c, [[120, 52], [130, 20], [104, 46]]); c.fill(); c.fillStyle = '#2d2233'; c.fillRect(66, 200, 12, 44); c.fillRect(102, 200, 12, 44); }, 0.2],
      [(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); c.arc(74, 78, 11, 0, TAU); c.arc(106, 78, 11, 0, TAU); c.fill(); c.fillStyle = '#2b2033'; c.beginPath(); c.arc(76, 80, 6, 0, TAU); c.arc(108, 80, 6, 0, TAU); c.fill(); c.fillStyle = '#c99aa0'; c.beginPath(); c.ellipse(90, 100, 14, 9, 0, 0, TAU); c.fill(); }, 0.2],
    ]);
  });
  // wing: shoulder at (20, 60); fingers fan out to the right; scalloped trailing edge
  const wingSpr = () => cache('wing', () => {
    const r = H.rng(47), tips = [[330, 10], [380, 110], [300, 190], [190, 210]];
    return compose(400, 240, [
      [(c) => { c.fillStyle = C.wing; c.beginPath(); c.moveTo(20, 60); c.lineTo(330, 10);
        let prev = [330, 10]; tips.slice(1).forEach(([x, y]) => { const mx = (prev[0] + x) / 2 - 18, my = (prev[1] + y) / 2 - 22; c.quadraticCurveTo(mx, my, x, y); prev = [x, y]; });
        c.quadraticCurveTo(110, 170, 30, 120); c.closePath(); c.fill(); }, 0],
      [(c) => { c.strokeStyle = C.bat2; c.lineWidth = 9; c.lineCap = 'round'; tips.forEach(([x, y]) => { c.beginPath(); c.moveTo(24, 66); c.lineTo(x, y); c.stroke(); }); }, 0.25],
    ]);
  });
  const flyBat = (ctx, x, y, s, flap, rot = 0, d = 1.2) => { // flap: wing angle (radians, + = up)
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const wg = wingSpr();
    [1, -1].forEach((side) => { ctx.save(); ctx.scale(side, 1); ctx.translate(30, -30); ctx.rotate(-flap); shadowDraw(ctx, wg, -20, -60, d, 0.45); ctx.restore(); });
    const b = batBodySpr(); shadowDraw(ctx, b, -b.width / 2, -b.height / 2, d + 0.3, 0.5);
    ctx.restore();
  };
  // paper person hanging upside down by the knees from a bar (hook)
  const personSpr = () => cache('person', () => compose(300, 620, [
    [(c) => { c.fillStyle = '#8a6a4a'; c.fillRect(0, 22, 300, 26); }, 0],
    [(c) => { c.fillStyle = '#2f7f86'; c.beginPath(); poly(c, cutLines(H.rng(3), [[110, 40], [190, 40], [196, 250], [104, 250], [110, 40]], 30, 0.6)); c.fill(); c.fillStyle = '#2a5d63'; c.fillRect(146, 70, 8, 180); }, 0.3], // legs over the bar
    [(c) => { c.fillStyle = C.coral; c.beginPath(); poly(c, cutLines(H.rng(4), [[92, 240], [208, 240], [222, 440], [78, 440], [92, 240]], 30, 0.6)); c.fill(); }, 0.4], // shirt
    [(c) => { c.fillStyle = '#f0c4a0'; c.fillRect(64, 300, 26, 300); c.fillRect(210, 300, 26, 300); c.beginPath(); poly(c, circPts(H.rng(6), 150, 510, 72, 10, 0.7)); c.fill(); }, 0.5], // arms + head
    [(c) => { c.strokeStyle = '#2b2033'; c.lineWidth = 6; c.lineCap = 'round'; [[124, 528], [176, 528]].forEach(([x, y]) => { c.beginPath(); c.moveTo(x - 10, y - 10); c.lineTo(x + 10, y + 10); c.moveTo(x + 10, y - 10); c.lineTo(x - 10, y + 10); c.stroke(); }); c.beginPath(); c.arc(150, 488, 16, 0.2, Math.PI - 0.2); c.stroke(); }, 0.15], // dizzy face (upside down)
    [(c) => { c.fillStyle = '#4a3326'; c.beginPath(); poly(c, cutLines(H.rng(7), [[80, 530], [220, 530], [214, 590], [86, 590], [80, 530]], 20, 0.8)); c.fill(); }, 0.3], // hair hanging down
  ]));
  const swirlSpr = () => cache('swirl', () => paperize(180, 180, (c) => { c.strokeStyle = '#7fb24a'; c.lineWidth = 16; c.lineCap = 'round'; c.beginPath(); for (let a = 0; a < TAU * 2.2; a += 0.1) { const rr = 8 + a * 11; const x = 90 + Math.cos(a) * rr, y = 90 + Math.sin(a) * rr; a ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke(); }, { seed: 19 }));
  // branch (tendon close-up): thick bark strip across the frame
  const branchSpr = () => cache('branch', () => compose(1240, 220, [
    [(c) => { c.fillStyle = '#6e4428'; c.beginPath(); poly(c, cutLines(H.rng(61), [[0, 40], [1240, 30], [1240, 180], [0, 190], [0, 40]], 40, 1.4)); c.fill(); }, 0],
    [(c) => { c.strokeStyle = '#8a5a36'; c.lineWidth = 10; c.lineCap = 'round'; const r = H.rng(62); for (let i = 0; i < 14; i++) { const x = r.range(20, 1200), y = r.range(60, 160), l = r.range(80, 220); c.beginPath(); c.moveTo(x, y); c.lineTo(x + l, y + r.range(-6, 6)); c.stroke(); } }, 0.2],
  ]));
  const leafSpr = (col) => cache('leaf' + col, () => paperize(130, 70, (c) => { c.fillStyle = col; c.beginPath(); c.moveTo(4, 35); c.quadraticCurveTo(65, -14, 126, 35); c.quadraticCurveTo(65, 84, 4, 35); c.fill(); }, { seed: 21 }));
  // one toe + claw, hinge at (30, 20), claw tip curling at the bottom right
  const toeSpr = () => cache('toe', () => compose(120, 220, [
    [(c) => { c.fillStyle = '#3a2c40'; c.beginPath(); poly(c, cutLines(H.rng(71), [[16, 212], [48, 212], [52, 96], [20, 92], [16, 212]], 20, 0.6)); c.fill(); }, 0],
    [(c) => { c.fillStyle = '#e9dcc0'; c.beginPath(); c.moveTo(20, 104); c.quadraticCurveTo(30, 8, 112, 34); c.quadraticCurveTo(62, 34, 54, 100); c.closePath(); c.fill(); }, 0.35],
  ]));
  const footLegSpr = () => cache('leg', () => compose(300, 1000, [
    [(c) => { c.fillStyle = C.bat; c.beginPath(); poly(c, cutLines(H.rng(73), [[90, 0], [210, 0], [230, 560], [270, 900], [30, 900], [70, 560], [90, 0]], 40, 1.2)); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.bat2; c.beginPath(); poly(c, circPts(H.rng(74), 150, 840, 150, 14, 1)); c.fill(); }, 0.4],
  ]));
  const muscleSpr = () => cache('muscle', () => paperize(110, 260, (c) => { c.fillStyle = '#e8839a'; c.beginPath(); c.ellipse(55, 130, 44, 122, 0, 0, TAU); c.fill(); c.strokeStyle = '#c95f7a'; c.lineWidth = 6; for (let i = -2; i <= 2; i++) { c.beginPath(); c.moveTo(55 + i * 14, 30); c.quadraticCurveTo(55 + i * 20, 130, 55 + i * 14, 230); c.stroke(); } }, { seed: 23 }));
  const lockSpr = (open) => cache('lock' + open, () => compose(170, 210, [
    [(c) => { c.strokeStyle = '#9aa0b4'; c.lineWidth = 22; c.lineCap = 'butt'; c.beginPath(); c.arc(85, 82 - (open ? 26 : 0), 46, Math.PI, 0); c.lineTo(131, 110 - (open ? 26 : 0)); if (!open) { c.moveTo(39, 82); c.lineTo(39, 110); } c.stroke(); }, 0],
    [(c) => { c.fillStyle = C.gold; c.beginPath(); poly(c, cutLines(H.rng(8), [[14, 100], [156, 100], [156, 200], [14, 200], [14, 100]], 30, 0.6)); c.fill(); c.fillStyle = '#2b2033'; c.beginPath(); c.arc(85, 140, 13, 0, TAU); c.fill(); c.fillRect(79, 140, 12, 34); }, 0.4],
  ]));
  const dropSpr = () => cache('blood', () => paperize(120, 160, (c) => { c.fillStyle = C.red; c.beginPath(); c.moveTo(60, 6); c.quadraticCurveTo(116, 90, 104, 112); c.arc(60, 108, 46, 0.1, Math.PI - 0.1); c.quadraticCurveTo(4, 90, 60, 6); c.fill(); }, { seed: 27 }));
  const foxSpr = () => cache('fox', () => compose(520, 340, [
    [(c) => { c.fillStyle = '#c4622c'; c.beginPath(); c.moveTo(70, 210); c.quadraticCurveTo(-20, 150, 30, 70); c.quadraticCurveTo(60, 160, 120, 190); c.closePath(); c.fill(); }, 0], // tail
    [(c) => { c.fillStyle = C.fox; c.beginPath(); c.ellipse(230, 200, 140, 72, -0.35, 0, TAU); c.fill(); c.fillRect(150, 230, 30, 100); c.fillRect(290, 200, 30, 110); }, 0.3], // body + legs
    [(c) => { c.fillStyle = C.fox; c.beginPath(); poly(c, [[330, 120], [400, 40], [420, 100], [500, 130], [420, 170], [350, 170]]); poly(c, [[372, 70], [380, 0], [414, 56]]); c.fill(); }, 0.45], // head + ear
    [(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); poly(c, [[430, 150], [500, 132], [440, 172]]); c.fill(); c.fillStyle = '#2b2033'; c.beginPath(); c.arc(420, 110, 8, 0, TAU); c.arc(500, 131, 9, 0, TAU); c.fill(); }, 0.2],
  ]));
  const bubbleSpr = () => cache('bubble', () => compose(440, 300, [
    [(c) => { c.fillStyle = C.card; c.beginPath(); c.ellipse(220, 130, 205, 120, 0, 0, TAU); c.moveTo(110, 220); c.lineTo(70, 296); c.lineTo(180, 240); c.fill(); }, 0],
    [(c) => { c.fillStyle = C.teal; [150, 220, 290].forEach((x) => { c.beginPath(); poly(c, circPts(H.rng(x), x, 130, 22, 8, 0.4)); c.fill(); }); }, 0.3],
  ]));
  // ground strip (torn top edge with the white core)
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
  // corner header tag (pinned question), safely below the top UI zone
  function header(ctx, t) {
    const A = dropIn(t, PH[3].s - 0.3, 0.4, 60);
    if (A && t < CUT_END) put(ctx, wordSpr('Why upside down?', 46, C.cream, C.coral, 12), 300, 220 + A.dy, { rot: -0.03, d: 1 + A.d });
  }

  // ================= SCENE 1: the hook =================
  function sceneHook(ctx, t) {
    ctx.drawImage(skySpr('a', C.night), 0, 0);
    const push = 1 + 0.06 * seg(t, 0, 7); // slow push-in on the shadow-box
    ctx.save(); ctx.translate(540, 900); ctx.scale(push, push); ctx.translate(-540, -900);
    shadowDraw(ctx, hillsSpr(3, C.far, 50), -200, 1300, 1.0);
    shadowDraw(ctx, pineRow(9, 1500, '#2a5560', '#335f6a'), -150, 1260, 0.8);
    shadowDraw(ctx, groundSpr(1400, C.green, 11), -160, 1560, 1.3);
    // tree bar the person hangs from + rock ceiling for the bat
    const ceil = ceilingSpr(1300, 5, C.rock2);
    const CA = dropIn(t, 0.05, 0.5, 120);
    if (CA) shadowDraw(ctx, ceil, -110, -60 + CA.dy, 1.1 + CA.d);
    // person (left) hangs upside down, swaying, dizzy swirl
    const PA = dropIn(t, 0.25, 0.45, 160);
    if (PA) {
      const sway = Math.sin(t * 2.4) * 0.05;
      ctx.save(); ctx.translate(290, 500 + PA.dy); ctx.rotate(sway); shadowDraw(ctx, personSpr(), -150, -30, 1.2 + PA.d, 0.5); ctx.restore();
      const SA = dropIn(t, P(0, 'pass'), 0.3, 0);
      if (SA) put(ctx, swirlSpr(), 290 + Math.sin(sway) * 400, 1150, { rot: t * 5, s: H.ease.back(H.clamp((t - P(0, 'pass')) / 0.3)), d: 0.6 });
      tag(ctx, t, P(0, 'out') - 0.1, 'PASS OUT', 66, C.red, 290, 1330, { rot: -0.05, d: 1 });
    }
    // bat (right) hangs from the rock, blinking calmly
    const BA = dropIn(t, P(1, 'bats') - 0.15, 0.45, 220);
    if (BA) { const blink = (t % 3.1) > 2.95; put(ctx, hangBatSpr(blink), 780, 640 + BA.dy, { s: BA.s, d: 1.2 + BA.d, rot: Math.sin(t * 1.7) * 0.03 }); }
    ctx.restore();
    // "20 HOURS A DAY": digit tiles land on "20"
    const NA = dropIn(t, P(1, '20') - 0.12, 0.4, 70);
    if (NA && t < P(2, 'why') + 0.1) {
      const w = rowWidth('20', 180);
      numberRow(ctx, '20', 760 - w / 2, 1080 + NA.dy, 180, C.gold, { d: 1 + NA.d });
      tag(ctx, t, P(1, 'hours') - 0.05, 'HOURS A DAY', 56, C.ink, 770, 1240, { rot: 0.03 });
    }
    // "WHY?" pops with a ring behind it
    const WA = dropIn(t, P(2, 'why') - 0.1, 0.35, 0);
    if (WA) {
      const u = H.clamp((t - P(2, 'why') + 0.1) / 0.35);
      put(ctx, ringSpr(), 760, 1170, { s: 0.3 + 0.7 * H.ease.back(u), d: 0.6, rot: 0.05 });
      put(ctx, wordSpr('WHY?', 150, C.coral, C.cream, 18), 760, 1170, { s: H.ease.back(u), d: 1.1 });
    }
  }

  // ================= SCENES 2+3: one tall diorama, camera tilts from the ground up to the rock ceiling =================
  function sceneWorld(ctx, t) {
    const tilt = seg(t, TILT[0], TILT[1]), camY = tilt * 1500; // camera rises: world moves down
    const sky = skySpr('b', C.night2); ctx.drawImage(sky, 0, 0);
    put(ctx, moonSpr(), 820, 330 + camY * 0.1, { d: 0.6, s: 0.8 });
    // far + mid layers on parallax
    shadowDraw(ctx, hillsSpr(4, C.far, 60), -260 - t * 4, 1150 + camY * 0.3, 1.0);
    shadowDraw(ctx, pineRow(13, 1700, '#2a5560', '#335f6a'), -200 - t * 6, 1180 + camY * 0.55, 0.9);
    shadowDraw(ctx, hillsSpr(7, C.mid, 40, 1700), -300 - t * 8, 1400 + camY * 0.6, 1.1);
    ctx.save(); ctx.translate(0, camY); // ---- world space (y up to -1500 is the cliff) ----
    shadowDraw(ctx, groundSpr(1400, C.green, 17), -160, 1300, 1.3);
    // ---- BEAT 2: bat stuck on the ground ----
    const t3 = PH[3].s;
    const GA = dropIn(t, t3 - 0.2, 0.45, 200);
    const flapTry = t > P(5, 'wings') && t < P(6, 'and') ? Math.sin((t - P(5, 'wings')) * 18) * 0.35 : 0;
    const hop = t > P(5, 'wings') && t < P(6, 'and') ? Math.abs(Math.sin((t - P(5, 'wings')) * 9)) * 26 : 0;
    if (GA && t < TILT[1] + 0.2) flyBat(ctx, 540, 1250 + GA.dy - hop, 1.25, -0.25 + flapTry, 0, 0.9 + GA.d);
    if (t < TILT[0] + 0.5) {
      if (t > P(4, 'only') - 0.15 && t < P(5, 'wings') + 0.1) {
        const u = H.clamp((t - P(4, 'only') + 0.15) / 0.35);
        put(ctx, burstSpr(), 540, 870, { s: 0.2 + 0.55 * H.ease.back(u), rot: t * 0.3, d: 0.7 });
      }
      tag(ctx, t, P(3, 'takeoff') - 0.15, 'TAKEOFF', 110, C.coral, 540, 520, { back: C.cream, bw: 18, rot: -0.04, d: 1.1 });
      tag(ctx, t, P(3, 'problem') - 0.15, 'PROBLEM', 110, C.ink, 540, 680, { back: C.cream, bw: 18, rot: 0.03, d: 1.1 });
      // only flying mammal: sunburst + tag (swaps in over the headline)
      tag(ctx, t, P(4, 'only') - 0.15, 'ONLY MAMMAL', 72, C.ink, 540, 820, { rot: -0.03 });
      tag(ctx, t, P(4, 'truly') - 0.15, 'THAT TRULY FLIES', 60, C.teal, 540, 930, { rot: 0.03 });
      // wings can't lift: up-arrow, then crossed
      const pA = seg(t, P(5, 'wings'), P(5, 'cant'));
      if (pA > 0) arrow(ctx, 860, 1180, 900, 1100, 880, 1010, pA, C.gold, 41, 26);
      const X1 = dropIn(t, P(5, 'cant') - 0.1, 0.25, 50);
      if (X1) put(ctx, crossSpr(), 880, 1090 + X1.dy, { s: X1.s, d: 0.8 + X1.d, rot: 0.1 });
      tag(ctx, t, P(5, 'lift') - 0.1, 'NO LIFT', 64, C.red, 800, 1480, { rot: 0.06 });
      // tiny legs
      const pL = seg(t, P(6, 'back'), P(6, 'legs') + 0.15);
      if (pL > 0) arrow(ctx, 230, 1090, 260, 1330, 480, 1370, pL, C.teal, 42, 18);
      tag(ctx, t, P(6, 'tiny') - 0.15, 'TINY LEGS', 64, C.ink, 250, 1030, { rot: -0.05 });
      const X2 = dropIn(t, P(6, 'run') - 0.1, 0.25, 50);
      if (X2) put(ctx, crossSpr(), 660, 1400 + X2.dy, { s: X2.s * 0.7, d: 0.8 + X2.d, rot: -0.1 });
    }
    // ---- BEAT 3: the rock ceiling above (world y -1500 .. 0) ----
    shadowDraw(ctx, ceilingSpr(1300, 23, C.rock), -110, -1580, 1.1);
    const tLet = P(9, 'let'), tDrop = P(9, 'drop'), tFly = P(10, 'flying');
    const HX = 660, HY = -1200; // hanging spot (top of the feet)
    const tOpen = tLet + 0.62, BS = 1.4, hang0 = HY + 270 * BS;
    if (t < tLet + 0.08) {
      const A = dropIn(t, TILT[0] + 0.2, 0.5, 0);
      if (A) put(ctx, hangBatSpr((t % 2.7) > 2.55), HX, hang0, { s: BS, d: 1.2, rot: Math.sin(t * 1.6) * 0.03 });
    } else if (t < tOpen) {
      // free fall: the hanging pose drops and starts to flip over
      const u = t - tLet - 0.08, fy = 0.5 * 1800 * u * u;
      put(ctx, hangBatSpr(false), HX, hang0 + fy, { s: BS, d: 1.6, rot: Math.min(1, u * 1.6) * Math.PI * 0.95 });
    } else {
      // wings snap open and it swoops down, across and out to the right
      const u0 = tOpen - tLet - 0.08, y0 = hang0 + 0.5 * 1800 * u0 * u0;
      const u = H.clamp((t - tOpen) / 2.8), e = H.ease.inOut(u);
      const ax = HX, ay = y0, cx = 150, cy = y0 + 700, bx = 1350, by = HY + 350;
      const x = (1 - e) * (1 - e) * ax + 2 * e * (1 - e) * cx + e * e * bx, y = (1 - e) * (1 - e) * ay + 2 * e * (1 - e) * cy + e * e * by;
      const dxx = 2 * (1 - e) * (cx - ax) + 2 * e * (bx - cx), dyy = 2 * (1 - e) * (cy - ay) + 2 * e * (by - cy);
      if (u < 1) flyBat(ctx, x, y, 1.15, Math.sin((t - tOpen) * 14) * 0.55, H.clamp(Math.atan2(dyy, dxx) * 0.35, -0.5, 0.5), 1.6);
    }
    tag(ctx, t, P(7, 'up') - 0.1, 'UP HIGH', 100, C.gold, 300, -330, { back: C.ink, bw: 16, rot: -0.03, d: 1.1 });
    if (t < P(8, 'time') - 0.1) tag(ctx, t, P(7, 'toes') - 0.15, 'BY THEIR TOES', 52, C.ink, 270, -860, { rot: -0.05 });
    if (t > P(8, 'time') - 0.1 && t < tLet) tag(ctx, t, P(8, 'time') - 0.1, 'TIME TO GO?', 64, C.coral, 300, -880, { rot: 0.05 });
    if (t >= tLet - 0.05) {
      const pD = seg(t, tLet, tDrop + 0.25);
      arrow(ctx, 230, -760, 200, -600, 240, -440, pD, C.gold, 51, 24);
      tag(ctx, t, tDrop - 0.1, 'DROP', 120, C.coral, 250, -830, { back: C.cream, bw: 18, rot: -0.06, d: 1.1 });
    }
    tag(ctx, t, tFly - 0.12, 'FLYING!', 120, C.teal, 640, -60, { back: C.cream, bw: 18, rot: 0.04, d: 1.2 });
    ctx.restore();
  }

  // ================= SCENE 4: tendon close-up =================
  function sceneTendon(ctx, t) {
    // warm close-up card behind the branch
    ctx.drawImage(cache('tbg', () => { const Cv = H.layer(W0, H0), c = Cv.getContext('2d');
      c.drawImage(paperize(W0, H0, (x) => { x.fillStyle = '#3b4a6e'; x.fillRect(0, 0, W0, H0); }, { rim: false, seed: 44 }), 0, 0);
      const r = H.rng(45);
      shadowDraw(c, paperize(W0, H0, (x) => { x.fillStyle = '#4a5c82'; x.beginPath(); poly(x, circPts(r, 540, 1050, 640, 26, 2)); x.fill(); }, { seed: 46 }), 0, 0, 0.6, 0.35);
      return Cv; }), 0, 0);
    const pan = 70 * seg(t, P(16, 'to') - 0.3, P(16, 'muscles')); // camera eases down toward the muscles
    ctx.save(); ctx.translate(0, -pan);
    // leaves on the branch
    [[90, 330, -0.4, '#5fae6a'], [980, 300, 0.5, '#2f7f86'], [880, 610, -0.3, '#5fae6a']].forEach(([x, y, r, col]) => put(ctx, leafSpr(col), x, y, { rot: r, d: 0.7 }));
    shadowDraw(ctx, branchSpr(), -80, 360, 1.2);
    // claw state: 0 open, 1 clamped
    const clamp = H.clamp(seg(t, P(15, 'claws'), P(15, 'shut')) - seg(t, P(16, 'muscles') - 0.1, P(16, 'open') + 0.1) + (t < P(15, 'claws') ? 0.25 : 0));
    // leg + body hang below the branch
    const sway = Math.sin(t * 1.3) * 0.015;
    ctx.save(); ctx.translate(540, 470); ctx.rotate(sway);
    shadowDraw(ctx, footLegSpr(), -150, 60, 1.3);
    // tendon: a red paper strip running up the leg into the toes; slack wiggle -> taut
    const taut = seg(t, P(14, 'pulls') - 0.1, P(14, 'tight'));
    const tp = seg(t, P(13, 'tendons') - 0.1, P(13, 'work') + 0.1);
    if (tp > 0) {
      const pts = []; const n = 30;
      for (let i = 0; i <= n * tp; i++) { const u = i / n, y = 900 - u * 860; pts.push([Math.sin(u * 14) * 22 * (1 - taut), y]); }
      if (pts.length > 1) ctx.drawImage(paperize(200, 980, (c) => { c.translate(100, 20); c.strokeStyle = C.red; c.lineWidth = 22; c.lineJoin = 'round'; c.lineCap = 'round'; c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke(); }, { seed: 81 }), -100, -20);
    }
    // muscle swells when it opens the claws
    const mus = seg(t, P(16, 'use') - 0.1, P(16, 'muscles') + 0.2);
    if (mus > 0) put(ctx, muscleSpr(), 0, 640, { s: 0.6 + 0.4 * H.ease.back(mus), d: 0.9 });
    ctx.restore();
    // toes over the top of the branch, hinge above the branch; claws rotate to wrap it
    for (let i = 0; i < 4; i++) {
      const x = 450 + i * 60, ang = H.lerp(-0.75, 0, clamp) + (i - 1.5) * 0.05;
      ctx.save(); ctx.translate(x, 590); ctx.rotate(ang); shadowDraw(ctx, toeSpr(), -32, -212, 0.9); ctx.restore();
    }
    ctx.restore();
    // labels
    const nopeA = dropIn(t, P(12, 'nope') - 0.1, 0.3, 0);
    if (nopeA && t < P(13, 'tendons') + 0.2) put(ctx, wordSpr('NOPE!', 170, C.red, C.cream, 20), 540, 960, { s: H.ease.back(H.clamp((t - P(12, 'nope') + 0.1) / 0.3)), d: 1.3, rot: -0.06 });
    if (t < P(13, 'tendons')) tag(ctx, t, P(11, 'tiring') - 0.1, 'TIRING?', 90, C.ink, 540, 1500, { rot: 0.04, back: C.cream, bw: 16, d: 1 });
    if (t > P(13, 'tendons') - 0.15) tag(ctx, t, P(13, 'tendons') - 0.15, 'TENDON', 76, C.red, 820, 820 - pan, { rot: 0.05 });
    if (t > P(13, 'locking') - 0.15) { const L = dropIn(t, P(13, 'locking') - 0.15, 0.35, 60) || { dy: 0, d: 0 }; put(ctx, lockSpr(clamp < 0.5), 250, 880 - pan + L.dy, { d: 0.9 + L.d, rot: -0.08 }); tag(ctx, t, P(13, 'clip') - 0.1, 'LOCKING CLIP', 50, C.ink, 265, 1030 - pan, { rot: -0.04 }); }
    // body weight arrow pulls down
    const pW = seg(t, P(14, 'body') - 0.05, P(14, 'weight') + 0.2);
    if (pW > 0 && t < P(16, 'to')) arrow(ctx, 840, 1200 - pan, 860, 1350 - pan, 840, 1520 - pan, pW, C.gold, 61, 30);
    if (t < P(16, 'to')) tag(ctx, t, P(14, 'weight') - 0.1, 'BODY WEIGHT', 62, C.ink, 820, 1150 - pan, { rot: 0.04 });
    // clamp: CLAMPED + zero effort tiles
    if (t > P(15, 'clamp') - 0.1 && t < P(16, 'to')) {
      const ZA = dropIn(t, P(15, 'zero') - 0.12, 0.4, 70);
      if (ZA) {
        const u = H.clamp((t - P(15, 'zero') + 0.12) / 0.35);
        put(ctx, burstSpr(), 300, 1370, { s: 0.2 + 0.6 * H.ease.back(u), rot: t * 0.3, d: 0.7 });
        const w = rowWidth('0', 170); numberRow(ctx, '0', 300 - w / 2, 1340 + ZA.dy, 170, C.coral, { d: 1 + ZA.d });
        tag(ctx, t, P(15, 'effort') - 0.1, 'EFFORT', 66, C.ink, 300, 1490, { rot: -0.04 });
      }
      tag(ctx, t, P(15, 'clamp') - 0.1, 'CLAMP!', 80, C.teal, 820, 600, { back: C.cream, bw: 16, rot: 0.06, d: 1 });
    }
    if (t > P(16, 'to') - 0.1) {
      tag(ctx, t, P(16, 'muscles') - 0.12, 'MUSCLES', 76, C.coral, 300, 1300 - pan, { back: C.cream, bw: 16, rot: -0.04 });
      tag(ctx, t, P(16, 'open') - 0.12, 'OPEN IT', 76, C.ink, 300, 1430 - pan, { back: C.cream, bw: 16, rot: 0.03 });
    }
  }

  // ================= SCENE 5: blood + predators =================
  function sceneSafe(ctx, t) {
    ctx.drawImage(skySpr('c', C.night), 0, 0);
    shadowDraw(ctx, hillsSpr(8, C.far, 60), -200, 1100, 1.0);
    shadowDraw(ctx, pineRow(15, 1600, '#2a5560', '#335f6a'), -150 - t * 3, 1120, 0.9);
    shadowDraw(ctx, groundSpr(1400, C.green, 29), -160, 1500, 1.3);
    // camera dolly sideways (parallax): ceiling + bat drift
    const dx = 40 * seg(t, CUT_BLOOD, PH[19].e);
    shadowDraw(ctx, ceilingSpr(1300, 31, C.rock2), -110 - dx, -60, 1.1);
    put(ctx, hangBatSpr((t % 2.9) > 2.75), 540 - dx, 640, { s: 1.25, d: 1.3, rot: Math.sin(t * 1.5) * 0.03 });
    // blood rush?
    const BA = dropIn(t, P(17, 'blood') - 0.12, 0.35, 70);
    if (BA && t < P(19, 'plus')) {
      put(ctx, dropSpr(), 860 - dx, 830 + BA.dy, { d: 0.8 + BA.d, rot: Math.PI });
      tag(ctx, t, P(17, 'rush') - 0.1, 'BLOOD RUSH?', 70, C.red, 700, 1010, { rot: 0.04 });
      const X = dropIn(t, P(18, 'barely') - 0.1, 0.25, 50);
      if (X) put(ctx, crossSpr(), 860 - dx, 840 + X.dy, { s: X.s * 0.8, d: 0.8 + X.d, rot: 0.1 });
      tag(ctx, t, P(18, 'light') - 0.15, 'SO LIGHT', 90, C.teal, 540, 1170, { back: C.cream, bw: 16, rot: -0.05, d: 1 });
    }
    // predator jumps short below
    if (t > P(19, 'predators') - 0.3) {
      const u = H.clamp((t - P(19, 'predators') + 0.3) / 1.2), jump = Math.sin(Math.min(1, u * 1.25) * Math.PI) * 330;
      const sx = H.lerp(1300, 470, H.ease.out(H.clamp(u * 1.6)));
      put(ctx, foxSpr(), sx, 1500 - jump, { d: 1 + jump / 200, rot: -0.15 * Math.sin(u * Math.PI) });
      tag(ctx, t, P(19, 'cant') - 0.1, "CAN'T REACH", 80, C.coral, 540, 1060, { back: C.cream, bw: 16, rot: -0.03, d: 1.1 });
      const pA = seg(t, P(19, 'reach') - 0.05, P(19, 'them') + 0.15);
      if (pA > 0) arrow(ctx, 640, 1340, 700, 1140, 620, 960, pA, C.gold, 71, 20);
      const X = dropIn(t, P(19, 'them') + 0.05, 0.25, 50);
      if (X) put(ctx, crossSpr(), 640, 1180 + X.dy, { s: X.s * 0.8, d: 0.8 + X.d, rot: -0.1 });
    }
  }

  // ================= SCENE 6: the comment question =================
  function sceneEnd(ctx, t) {
    ctx.drawImage(skySpr('d', '#3a2f5c'), 0, 0);
    shadowDraw(ctx, hillsSpr(5, C.far, 50), -200, 1250, 1.0);
    shadowDraw(ctx, groundSpr(1400, C.green, 37), -160, 1560, 1.3);
    const ceil = ceilingSpr(1300, 41, C.rock2); shadowDraw(ctx, ceil, -110, -60, 1.1);
    const sway = Math.sin(t * 2.2) * 0.05;
    ctx.save(); ctx.translate(300, 430); ctx.rotate(sway); shadowDraw(ctx, personSpr(), -150, -30, 1.2, 0.5); ctx.restore();
    put(ctx, hangBatSpr((t % 2.5) > 2.35), 780, 600, { d: 1.2, rot: Math.sin(t * 1.7) * 0.03 });
    const cy = P(20, 'could') - 0.1;
    tag(ctx, t, cy, 'COULD YOU?', 130, C.coral, 540, 1230, { back: C.cream, bw: 18, rot: -0.03, d: 1.3, dist: 90 });
    const BA = dropIn(t, P(20, 'bat') - 0.1, 0.35, 60);
    if (BA) { put(ctx, bubbleSpr(), 760, 1460 + BA.dy, { s: BA.s * 0.85, d: 1 + BA.d }); tag(ctx, t, P(20, 'bat') + 0.05, 'COMMENT!', 54, C.ink, 330, 1470, { rot: -0.05 }); }
  }

  // ================= director =================
  // a cardstock page slides up (or in from the right) over the last scene, with a deep shadow
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
  const CUT_WORLD = PH[2].e + 0.18;
  function explainer(ctx, W, H_, t) {
    ctx.save(); ctx.scale(W / W0, H_ / H0);
    if (t < CUT_WORLD + SLIDE) slideIn(ctx, t, CUT_WORLD, 0, sceneHook, sceneWorld, 'right');
    else if (t < CUT_TENDON + SLIDE) slideIn(ctx, t, CUT_TENDON, 0, sceneWorld, sceneTendon, 'up');
    else if (t < CUT_BLOOD + SLIDE) slideIn(ctx, t, CUT_BLOOD, 0, sceneTendon, sceneSafe, 'right');
    else slideIn(ctx, t, CUT_END, 0, sceneSafe, sceneEnd, 'up');
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

    // SCENE 1
    card(land(0.05, 0.5), 0.9, 0, 0.8, false); // rock ceiling
    card(land(0.25, 0.45), 0.8, -0.4, 1); // person
    k.play('sparkle', P(0, 'pass'), { gain: 0.5, n: 4, pan: -0.4 }); // dizzy swirl
    k.play('error', P(0, 'out') - 0.1 + 0.12, { gain: 0.5, pan: -0.4 });
    tagLand(P(0, 'out') - 0.1, 0.7, -0.4);
    card(land(P(1, 'bats') - 0.15, 0.45), 1, 0.4, 0.9, false);
    flick(P(1, '20') - 0.12 + 0.15, 1, 0.4); flick(P(1, '20') + 0.08, 1, 0.4);
    k.play('impact', P(1, '20') - 0.12 + LAND * 0.4, { gain: 0.9, pan: 0.3 });
    tagLand(P(1, 'hours') - 0.05, 0.6, 0.4);
    k.play('pop', P(2, 'why') - 0.05, { gain: 0.9, f: 520 });
    k.noise(P(2, 'why') - 0.1, { dur: 0.12, color: 'pink', filter: 'bandpass', f: [[0, 600], [0.12, 1600]], q: 0.6, gain: 0.3, a: 0.02 });
    // slide to the ground scene
    layer(CUT_WORLD, SLIDE + 0.15, 1);
    card(land(PH[3].s - 0.2, 0.45), 1, 0, 0.9, false); // bat lands on the ground
    card(land(PH[3].s - 0.3, 0.4), 0.7, -0.6, 1.2); // header tag
    tagLand(P(3, 'takeoff') - 0.15, 0.8); tagLand(P(3, 'problem') - 0.15, 0.8);
    k.play('impact', P(4, 'only') - 0.15 + 0.12, { gain: 1.1 }); k.play('ding', P(4, 'only') - 0.03, { f: 'E5', gain: 0.55 });
    tagLand(P(4, 'only') - 0.15, 0.7); tagLand(P(4, 'truly') - 0.15, 0.6, 0.1);
    flapSnd(P(5, 'wings'), Math.floor((P(6, 'and') - P(5, 'wings')) / 0.17), 0.17, 1, 0.1);
    strip(P(5, 'wings'), P(5, 'cant'), 1, 0.5);
    k.play('slap', land(P(5, 'cant') - 0.1, 0.25), { gain: 0.6, pan: 0.5 }); k.tone(land(P(5, 'cant') - 0.1, 0.25) + 0.01, { f: 'D3', type: 'triangle', dur: 0.16, gain: 0.2, filter: 'lowpass', f2: 700 });
    tagLand(P(5, 'lift') - 0.1, 0.6, 0.5);
    strip(P(6, 'back'), P(6, 'legs') + 0.15, 1, -0.4);
    tagLand(P(6, 'tiny') - 0.15, 0.6, -0.5);
    k.play('slap', land(P(6, 'run') - 0.1, 0.25), { gain: 0.5, pan: -0.3 });
    // camera tilt up to the rock ceiling
    layer(TILT[0], TILT[1] - TILT[0] + 0.2, 0.9);
    k.play('whoosh', TILT[0], { dur: 0.6, gain: 0.5 });
    tagLand(P(7, 'up') - 0.1, 0.8); tagLand(P(7, 'toes') - 0.15, 0.6, -0.4);
    tagLand(P(8, 'time') - 0.1, 0.6, 0.4);
    const tLet = P(9, 'let'), tFly = P(10, 'flying');
    k.play('tick', tLet + 0.05, { gain: 0.6 });
    k.play('whoosh', tLet + 0.08, { dur: 0.6, top: 1800, gain: 0.8 });
    strip(tLet, P(9, 'drop') + 0.25, 1, -0.5);
    k.play('stamp', land(P(9, 'drop') - 0.1, 0.35), { gain: 0.5, pan: -0.5 });
    flapSnd(tLet + 0.62, 15, 0.18, 1.3, 0.3);
    k.play('success', land(tFly - 0.12, 0.35), { f: 'G5', gain: 0.55 });
    // SCENE 4
    layer(CUT_TENDON, SLIDE + 0.15, 1);
    tagLand(P(11, 'tiring') - 0.1, 0.6);
    k.play('pop', P(12, 'nope') - 0.05, { gain: 0.9, f: 380 }); k.play('slap', P(12, 'nope'), { gain: 0.5 });
    strip(P(13, 'tendons') - 0.1, P(13, 'work') + 0.1, 0.9, 0.2);
    tagLand(P(13, 'tendons') - 0.15, 0.6, 0.5);
    card(land(P(13, 'locking') - 0.15, 0.35), 0.8, -0.5, 0.9);
    tagLand(P(13, 'clip') - 0.1, 0.6, -0.5);
    strip(P(14, 'body') - 0.05, P(14, 'weight') + 0.2, 1, 0.5); tagLand(P(14, 'weight') - 0.1, 0.6, 0.5);
    k.noise(P(14, 'pulls') - 0.1, { dur: P(14, 'tight') - P(14, 'pulls') + 0.1, filter: 'bandpass', f: [[0, 400], [0.5, 1400]], q: 3, gain: 0.12 }); // paper strip stretching
    // claws clamp shut: lock click + big hit
    k.play('click', P(15, 'shut'), { gain: 1.2 }); k.play('stamp', P(15, 'shut') + 0.02, { gain: 0.8 });
    tagLand(P(15, 'clamp') - 0.1, 0.7, 0.5);
    k.play('impact', land(P(15, 'zero') - 0.12, 0.4), { gain: 1.2, pan: -0.4 }); flick(P(15, 'zero'), 1, -0.4);
    tagLand(P(15, 'effort') - 0.1, 0.6, -0.4);
    k.play('riser', P(16, 'use') - 0.2, { dur: 0.6, gain: 0.5 });
    tagLand(P(16, 'muscles') - 0.12, 0.7, -0.4); tagLand(P(16, 'open') - 0.12, 0.7, -0.4);
    k.play('paper', P(16, 'open'), { dur: 0.25, gain: 0.4, minor: true });
    // SCENE 5
    layer(CUT_BLOOD, SLIDE + 0.15, 1);
    card(land(P(17, 'blood') - 0.12, 0.35), 0.7, 0.5); tagLand(P(17, 'rush') - 0.1, 0.6, 0.4);
    k.play('slap', land(P(18, 'barely') - 0.1, 0.25), { gain: 0.5, pan: 0.5 });
    tagLand(P(18, 'light') - 0.15, 0.7, -0.5);
    k.play('whoosh', P(19, 'predators') - 0.3, { dur: 0.7, gain: 0.6, pan: 0.6 });
    tagLand(P(19, 'cant') - 0.1, 0.7);
    strip(P(19, 'reach') - 0.05, P(19, 'them') + 0.15, 1, 0.2);
    k.play('error', land(P(19, 'them') + 0.05, 0.25), { gain: 0.45 });
    // SCENE 6
    layer(CUT_END, SLIDE + 0.15, 1);
    card(land(P(20, 'could') - 0.1, 0.35), 1.1, 0, 0.8, false);
    k.play('pop', P(20, 'bat'), { gain: 0.8, f: 700 });
    ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', PH[20].e + 0.1 + i * 0.09, { f, gain: 0.45 - i * 0.04, pan: (i - 1) * 0.25 }));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
