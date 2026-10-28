// ================= Ukiyo-e Woodblock, vertical 1080x1920: "How do fireflies glow?" (cold light, the oxygen gate, flash codes) =================
(function () {
  const W = 1080, HH = 1920;
  const FONT = '"Noto Serif JP","Noto Serif CJK JP",serif';
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael) ----------
  const BEATS = [
    { id: 'hook',   s: 0.25,  e: 7.28,  w: { fireflies: 0.25, cold: 1.29, light: 1.61, bulb: 3.04, wastes: 3.31, ninety: 3.71, heat: 4.73, how: 5.47, stay: 6.62, cool: 6.95 } },
    { id: 'tail',   s: 7.83,  e: 11.99, w: { inside: 7.83, tail: 9.15, glowing: 10.13, organ: 10.6, lantern: 11.53 } },
    { id: 'cells',  s: 12.54, e: 17.28, w: { cells: 12.76, packed: 13.34, fuel: 14.14, luciferin: 14.44, enzyme: 15.84, luciferase: 16.38 } },
    { id: 'recipe', s: 17.83, e: 24.8,  w: { spark: 18.17, energy: 18.76, puff: 19.93, oxygen: 20.5, lights: 22.07, no: 23.19, fire: 23.36, chemistry: 24.04 } },
    { id: 'blink',  s: 25.35, e: 37.39, w: { blink: 26.23, controls: 28.0, oxygen: 28.93, gas: 30.07, nitric: 30.81, opens: 31.72, gate: 32.38, air: 33.0, rushes: 33.28, flash: 34.32, close: 35.52, gate2: 36.12, dark: 37.09 } },
    { id: 'codes',  s: 37.94, e: 49.2,  w: { flash: 38.55, message: 39.17, two: 41.08, kinds: 41.83, each: 43.45, code: 44.89, males: 45.75, fly: 47.1, females: 47.88, answer: 48.43, back: 48.89 } },
    { id: 'end',    s: 49.75, e: 53.44, w: { flash: 50.64, one: 51.01, message: 51.23, dark: 52.11, what: 52.41, say: 53.22 } },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scene changes: 'pan' = the emaki scroll unrolls (kasumi cloud at the seam); 'mist' = a gold mist bank sweeps down
  const TR = [
    { from: 0, to: 1, kind: 'pan', a: 7.3, b: 7.8 },
    { from: 1, to: 2, kind: 'mist', a: 17.3, b: 17.82 },
    { from: 2, to: 3, kind: 'pan', a: 24.82, b: 25.33 },
    { from: 3, to: 4, kind: 'mist', a: 37.4, b: 37.92 },
    { from: 4, to: 5, kind: 'pan', a: 49.22, b: 49.72 },
  ];

  // ---------- helpers (reference ukiyo-e helpers, re-laid out for 1080x1920) ----------
  const E = H.ease, cl = H.clamp;
  const S = (t, a, b) => cl((t - a) / (b - a), 0, 1);
  const fieldNoise = (w, h, seed, cell, oct, sx = 1, sy = 1) => {
    const nz = H.makeNoise(seed), gw = Math.ceil(w / cell) + 2, gh = Math.ceil(h / cell) + 2, g = new Float32Array(gw * gh);
    for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) g[j * gw + i] = nz.fbm2(i * 0.35 * sx, j * 0.35 * sy, oct);
    const out = new Float32Array(w * h);
    for (let y = 0; y < h; y++) {
      const fy = y / cell, j = fy | 0, ty = fy - j;
      for (let x = 0; x < w; x++) {
        const fx = x / cell, i = fx | 0, tx = fx - i, k = j * gw + i;
        const a = g[k] + (g[k + 1] - g[k]) * tx, b = g[k + gw] + (g[k + gw + 1] - g[k + gw]) * tx;
        out[y * w + x] = a + (b - a) * ty;
      }
    }
    return out;
  };
  const C = {
    paper: '#ecdfc2', key: '#1b2236', prussD: '#16304f', pruss: '#24507e', mid: '#4d7ca6', light: '#93b4cc', pale: '#c9d6d6',
    foam: '#f1e8d2', sky: '#e3d2ab', fuji: '#6d84a0', hull: '#7d3f2c', ochre: '#d2a75c', grey: '#9aa8b0', red: '#c4432d', green: '#7a9a6a',
    ash: '#d8d2c2', lacq: '#3b2a22',
  };
  const sample = (pts, per = 14) => {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
      for (let k = 0; k < per; k++) {
        const t = k / per, t2 = t * t, t3 = t2 * t;
        const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
        out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
      }
    }
    out.push(pts[pts.length - 1]);
    return out;
  };
  const normals = (poly) => poly.map((p, i) => {
    const a = poly[Math.max(0, i - 1)], b = poly[Math.min(poly.length - 1, i + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1]; const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
    return { tx, ty, nx: ty, ny: -tx };
  });
  const keyline = (c, path, w, col = C.key) => {
    c.save(); c.strokeStyle = col; c.lineJoin = 'round'; c.lineCap = 'round';
    c.lineWidth = w; c.stroke(path);
    c.globalAlpha = 0.5; c.lineWidth = w * 0.6; c.translate(0.7, 0.5); c.stroke(path);
    c.restore();
  };
  const claw = (c, x, y, nx, ny, tx, ty, L, r) => {
    const fingers = r.int(3, 4);
    for (let f = 0; f < fingers; f++) {
      const s = L * (1 - f * 0.2) * r.range(0.85, 1.1);
      const off = (f - (fingers - 1) / 2) * L * 0.24;
      const bx = x + tx * off, by = y + ty * off, w = s * 0.22;
      const cx1 = bx + nx * s * 0.9 + tx * s * 0.2, cy1 = by + ny * s * 0.9 + ty * s * 0.2;
      const ex = bx + nx * s * 0.75 + tx * s * 0.75, ey = by + ny * s * 0.75 + ty * s * 0.75;
      const cx2 = bx + nx * s * 0.45 + tx * s * 0.55, cy2 = by + ny * s * 0.45 + ty * s * 0.55;
      const p = new Path2D();
      p.moveTo(bx - tx * w, by - ty * w); p.quadraticCurveTo(cx1, cy1, ex, ey); p.quadraticCurveTo(cx2, cy2, bx + tx * w, by + ty * w); p.closePath();
      c.fillStyle = C.foam; c.fill(p); c.lineWidth = 2; c.strokeStyle = C.key; c.stroke(p);
    }
  };
  const vbok = (c, y0, y1, stops) => { const g = c.createLinearGradient(0, y0, 0, y1); stops.forEach(([u, col]) => g.addColorStop(u, col)); return g; };
  const fillKey = (c, path, col, w = 2.6) => { c.save(); c.translate(2, 1.4); c.fillStyle = col; c.fill(path); c.restore(); keyline(c, path, w); };
  const cartouche = (c, txt, x, y, size, p = 1, bg = '#e8d49a', fg = C.key) => {
    if (p <= 0) return; c.save(); c.font = `700 ${size}px ${FONT}`; c.textBaseline = 'middle';
    const w = c.measureText(txt).width + size * 1.1, h = size * 1.7, x0 = x - w / 2;
    c.globalAlpha = Math.min(1, p * 1.5);
    const k = 1 + (1 - E.out(cl(p * 1.4))) * 0.12; c.translate(x, y); c.scale(k, k); c.translate(-x, -y);
    const r = new Path2D(); r.rect(x0, y - h / 2, w, h);
    if (bg[0] === '#' && bg.length === 7) { const v = H.hex(bg), lt = v.map((q) => Math.round(q + (255 - q) * 0.35)), dk = v.map((q) => Math.round(q * 0.93)); c.fillStyle = vbok(c, y - h / 2, y + h / 2, [[0, `rgb(${lt})`], [0.45, bg], [1, `rgb(${dk})`]]); } else c.fillStyle = bg;
    c.fill(r); c.strokeStyle = C.key; c.lineWidth = 3; c.stroke(r); c.lineWidth = 1.5; c.strokeRect(x0 + 6, y - h / 2 + 6, w - 12, h - 12);
    c.fillStyle = fg; c.textAlign = 'center'; c.fillText(txt, x, y + size * 0.03); c.restore();
  };
  const seal = (c, x, y, s, glyph, p, rot = 0.05) => {
    if (p <= 0) return; const k = 1 + (1 - p) * 0.8; c.save(); c.translate(x, y); c.rotate(rot); c.scale(k, k); c.globalAlpha = Math.min(1, p * 2);
    c.fillStyle = C.red; c.fillRect(-s / 2, -s / 2, s, s); c.strokeStyle = '#efe2c6'; c.lineWidth = s * 0.06; c.strokeRect(-s * 0.4, -s * 0.4, s * 0.8, s * 0.8);
    c.fillStyle = '#efe2c6'; c.strokeStyle = '#efe2c6'; c.lineCap = 'square'; c.lineWidth = s * 0.13;
    if (glyph === 'x') { c.beginPath(); c.moveTo(-s * 0.22, -s * 0.22); c.lineTo(s * 0.22, s * 0.22); c.moveTo(s * 0.22, -s * 0.22); c.lineTo(-s * 0.22, s * 0.22); c.stroke(); }
    else if (glyph === 'v') { c.beginPath(); c.moveTo(-s * 0.24, 0); c.lineTo(-s * 0.06, s * 0.18); c.lineTo(s * 0.24, -s * 0.2); c.stroke(); }
    else { c.font = `700 ${s * 0.62}px ${FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(glyph, 0, s * 0.03); }
    c.restore();
  };
  const tanzaku = (c, txt, x, y, p = 1, size = 46) => {
    if (p <= 0) return; c.save(); c.globalAlpha = Math.min(1, p * 2); c.strokeStyle = C.key; c.lineWidth = 2; c.beginPath(); c.moveTo(x, y - 26); c.lineTo(x, y - 6); c.stroke();
    c.font = `700 ${size}px ${FONT}`; const w = c.measureText(txt).width + 34, h = size * 1.45; const r = new Path2D(); r.rect(x - w / 2, y - 6, w, h);
    const g = c.createLinearGradient(0, y - 6, 0, y - 6 + h); g.addColorStop(0, '#f4ecd8'); g.addColorStop(1, '#e9dcbc'); c.fillStyle = g; c.fill(r); keyline(c, r, 2.2);
    c.fillStyle = C.key; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(txt, x, y - 6 + h / 2 + 2); c.restore();
  };
  const gear = (c, x, y, r, a, col) => { const p = new Path2D(); for (let i = 0; i < 24; i++) { const rr = i % 2 ? r : r * 1.2, aa = a + i / 24 * Math.PI * 2; p.lineTo(x + Math.cos(aa) * rr, y + Math.sin(aa) * rr); } p.closePath(); p.moveTo(x + r * 0.35, y); p.arc(x, y, r * 0.35, 0, 7, true); fillKey(c, p, col, 2.6); };
  // gold kasumi mist bank (vertical, dividing two scroll scenes) - static per position -> cached
  const KAS = {};
  const kasumi = (c, x, top, bot) => {
    const key = 'k' + top + ':' + bot;
    let L = KAS[key];
    if (!L) {
      const x0 = 160, r = H.rng(77), bumps = [];
      for (let y = top; y <= bot; y += 70) bumps.push([x0 - 100 + r.range(-20, 20), y + 35]);
      for (let y = bot; y >= top; y -= 70) bumps.push([x0 + 100 + r.range(-20, 20), y]);
      const lw = 320, lh = bot - top + 150;
      L = H.layer(lw, lh); const k = L.getContext('2d'); k.translate(0, -(top - 60));
      const shape = new Path2D(); shape.rect(x0 - 100, top, 200, bot + 35 - top); bumps.forEach(([bx, by]) => { shape.moveTo(bx + 40, by); shape.arc(bx, by, 40, 0, Math.PI * 2); });
      k.strokeStyle = 'rgba(27,34,54,0.72)'; k.lineWidth = 3.2; k.lineJoin = 'round';
      bumps.forEach(([bx, by]) => { k.beginPath(); k.arc(bx, by, 40, 0, Math.PI * 2); k.stroke(); }); k.strokeRect(x0 - 100, top, 200, bot + 35 - top);
      const g = k.createLinearGradient(x0 - 140, 0, x0 + 140, 0);
      g.addColorStop(0, '#ece0bc'); g.addColorStop(0.2, '#e2cd92'); g.addColorStop(0.5, '#d4b25a'); g.addColorStop(0.8, '#e2cd92'); g.addColorStop(1, '#ece0bc');
      k.save(); k.translate(1.2, 0.8); k.fillStyle = g; k.fill(shape); k.restore();
      k.save(); k.clip(shape);
      k.strokeStyle = 'rgba(160,118,40,0.22)'; k.lineWidth = 1.3;
      bumps.forEach(([bx, by], i) => { const sgn = i < bumps.length / 2 ? -1 : 1; k.beginPath(); k.arc(bx - sgn * 8, by, 28, sgn < 0 ? Math.PI * 0.62 : -Math.PI * 0.38, sgn < 0 ? Math.PI * 1.38 : Math.PI * 0.38); k.stroke(); });
      const mr = H.rng(991);
      for (let i = 0; i < 2600; i++) { const px = mr.range(10, 310), py = mr.range(top - 50, bot + 80), sz = mr.range(0.7, 1.9); k.fillStyle = mr() < 0.8 ? `rgba(255,248,222,${mr.range(0.35, 0.7)})` : `rgba(150,110,40,${mr.range(0.15, 0.3)})`; k.fillRect(px, py, sz, sz); }
      k.restore();
      KAS[key] = L;
    }
    c.drawImage(L, x - 160, top - 60);
  };
  // horizontal gold mist band with scalloped edges, used for the downward mist sweep (cached)
  let MIST = null;
  const mistBand = () => {
    if (MIST) return MIST;
    const mh = 2400; MIST = H.layer(W, mh); const k = MIST.getContext('2d');
    const shape = new Path2D(); shape.rect(0, 120, W, mh - 240);
    const bumps = []; const r = H.rng(5);
    for (let x = -20; x <= W + 40; x += 90) { bumps.push([x + r.range(-15, 15), 120 + r.range(-8, 8)]); bumps.push([x + 45 + r.range(-15, 15), mh - 120 + r.range(-8, 8)]); }
    bumps.forEach(([bx, by]) => { shape.moveTo(bx + 56, by); shape.arc(bx, by, 56, 0, 7); });
    k.strokeStyle = 'rgba(27,34,54,0.72)'; k.lineWidth = 3.2; bumps.forEach(([bx, by]) => { k.beginPath(); k.arc(bx, by, 56, 0, 7); k.stroke(); });
    const g = k.createLinearGradient(0, 0, 0, mh); g.addColorStop(0, '#ece0bc'); g.addColorStop(0.15, '#e2cd92'); g.addColorStop(0.5, '#d4b25a'); g.addColorStop(0.85, '#e2cd92'); g.addColorStop(1, '#ece0bc');
    k.fillStyle = g; k.fill(shape);
    k.save(); k.clip(shape); const mr = H.rng(42);
    k.strokeStyle = 'rgba(160,118,40,0.22)'; k.lineWidth = 1.3; bumps.forEach(([bx, by]) => { k.beginPath(); k.arc(bx, by + (by < mh / 2 ? 10 : -10), 38, 0, 7); k.stroke(); });
    for (let i = 0; i < 9000; i++) { const px = mr.range(0, W), py = mr.range(0, mh), sz = mr.range(0.7, 1.9); k.fillStyle = mr() < 0.8 ? `rgba(255,248,222,${mr.range(0.35, 0.7)})` : `rgba(150,110,40,${mr.range(0.15, 0.3)})`; k.fillRect(px, py, sz, sz); }
    k.restore();
    return MIST;
  };
  const seaBand = (c, y, t) => {
    const g = c.createLinearGradient(0, y, 0, HH); g.addColorStop(0, C.light); g.addColorStop(0.18, C.mid); g.addColorStop(0.6, C.pruss); g.addColorStop(1, C.prussD); c.fillStyle = g; c.fillRect(0, y, W, HH - y);
    c.strokeStyle = 'rgba(241,232,210,0.75)'; c.lineWidth = 2.2; for (let i = 0; i < 12; i++) { const yy = y + 22 + i * 34; c.beginPath(); for (let x = 0; x <= W; x += 10) { const v = yy + Math.sin(x * 0.02 + i * 1.7 + t * 1.2) * 5; x === 0 ? c.moveTo(x, v) : c.lineTo(x, v); } c.stroke(); }
    c.strokeStyle = C.key; c.lineWidth = 3; c.beginPath(); for (let x = 0; x <= W; x += 10) { const v = y + Math.sin(x * 0.015 + t) * 6; x === 0 ? c.moveTo(x, v) : c.lineTo(x, v); } c.stroke();
    for (let k = 0; k * 180 <= W + 60; k++) { const fx = k * 180 + 50 * Math.sin(k * 2.3), fy = y + Math.sin(fx * 0.015 + t) * 6, r = H.rng(1000 + k * 7); claw(c, fx, fy, 0.25, -1, 1, 0.25, 24 + r.range(0, 8), r); }
  };
  const fuji = (c, x, base, peak, half) => {
    const f = new Path2D(); f.moveTo(x - half, base); f.quadraticCurveTo(x - half * 0.45, base - (base - peak) * 0.55, x - half * 0.1, peak); f.lineTo(x + half * 0.1, peak - 2); f.quadraticCurveTo(x + half * 0.45, base - (base - peak) * 0.55, x + half, base); f.closePath();
    fillKey(c, f, vbok(c, peak, base, [[0, C.prussD], [0.55, C.fuji], [1, C.light]]), 3);
    const s = half / 260, cap = new Path2D(); cap.moveTo(x - half * 0.1, peak); cap.lineTo(x + half * 0.1, peak - 2); cap.lineTo(x + 80 * s, peak + 70 * s);
    [[60, 52], [38, 74], [14, 54], [-8, 76], [-30, 56], [-52, 72], [-72, 58]].forEach(([a, b]) => cap.lineTo(x + a * s, peak + b * s)); cap.closePath(); fillKey(c, cap, C.foam, 2);
  };
  const cloudBand = (c, x, y, w) => { const p = new Path2D(); p.moveTo(x, y); p.bezierCurveTo(x + w * 0.2, y - 26, x + w * 0.45, y - 32, x + w * 0.6, y - 12); p.bezierCurveTo(x + w * 0.75, y - 28, x + w * 0.95, y - 14, x + w, y); p.closePath(); c.fillStyle = 'rgba(236,224,196,0.85)'; c.fill(p); keyline(c, p, 1.8, 'rgba(27,34,54,0.6)'); };
  // a curling smoke ribbon rising from (x,y): woodblock style (pale fill band between two keylines)
  const smoke = (c, x, y, len, t, col = '#c9d6d6', amp = 26, lean = -0.25, alpha = 1) => {
    if (len <= 2) return; const pts = [];
    for (let i = 0; i <= 40; i++) { const u = i / 40, yy = y - u * len; pts.push([x + Math.sin(u * 7 - t * 2.2) * amp * u + lean * u * len + Math.sin(u * 3 + t) * 8 * u, yy]); }
    c.save(); c.globalAlpha = alpha; c.lineCap = 'round'; c.lineJoin = 'round';
    const path = new Path2D(); pts.forEach(([a, b], i) => (i ? path.lineTo(a, b) : path.moveTo(a, b)));
    c.strokeStyle = C.key; c.lineWidth = 20; c.stroke(path); c.strokeStyle = col; c.lineWidth = 14; c.stroke(path);
    c.strokeStyle = 'rgba(241,232,210,0.8)'; c.lineWidth = 2; c.stroke(path);
    // curl at the top
    const [ex, ey] = pts[pts.length - 1]; const cp = new Path2D(); for (let a = 0; a < 4.5; a += 0.15) { const r = 34 - a * 6; cp.lineTo(ex + Math.cos(a + 2.4) * r + 20, ey + Math.sin(a + 2.4) * r); }
    c.strokeStyle = C.key; c.lineWidth = 16; c.stroke(cp); c.strokeStyle = col; c.lineWidth = 10; c.stroke(cp);
    c.restore();
  };
  // lacquer incense box, front view (used on the floor / in the hook)
  const boxFront = (c, x, y, w, smokeT, ember) => {
    const h = w * 0.36, top = new Path2D(); top.moveTo(x - w / 2, y - h / 2); top.lineTo(x + w / 2, y - h / 2); top.lineTo(x + w / 2 - w * 0.08, y - h / 2 - w * 0.12); top.lineTo(x - w / 2 + w * 0.08, y - h / 2 - w * 0.12); top.closePath();
    fillKey(c, top, C.ash, 2.4);
    if (ember) { c.save(); c.fillStyle = 'rgba(232,92,40,0.9)'; c.beginPath(); c.arc(x - w * 0.18, y - h / 2 - w * 0.06, w * 0.022, 0, 7); c.fill(); c.restore(); }
    const body = new Path2D(); body.rect(x - w / 2, y - h / 2, w, h); fillKey(c, body, vbok(c, y - h / 2, y + h / 2, [[0, '#5a4132'], [0.6, C.lacq], [1, '#2a1d17']]), 3);
    c.fillStyle = C.red; c.fillRect(x - w / 2 + 8, y - h / 2 + 10, w - 16, Math.max(4, w * 0.018));
    c.strokeStyle = C.ochre; c.lineWidth = 2; c.strokeRect(x - w / 2 + 18, y - h / 2 + 28, w - 36, h - 44);
    // gold maki-e pine sprig on the front
    c.strokeStyle = C.ochre; c.lineWidth = 3; c.beginPath(); c.moveTo(x - w * 0.25, y + h * 0.25); c.quadraticCurveTo(x, y - h * 0.05, x + w * 0.22, y + h * 0.05); c.stroke();
    for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(x - w * 0.12 + i * w * 0.14, y + h * 0.04 - i * 2, w * 0.035, Math.PI, 0); c.stroke(); }
  };
  const moon = (c, x, y, r, phase = 1) => {
    const p = new Path2D(); p.arc(x, y, r, 0, 7); fillKey(c, p, vbok(c, y - r, y + r, [[0, '#f7f0de'], [1, '#e8d9b2']]), 2.4);
    if (phase < 1) { c.save(); c.clip(p); c.fillStyle = 'rgba(22,48,79,0.85)'; c.beginPath(); c.arc(x + (phase * 2) * r * 1.02, y, r * 1.02, 0, 7); c.fill(); c.restore(); keyline(c, p, 2); }
  };
  const nightSky = (c, horizon) => { c.fillStyle = vbok(c, 0, horizon, [[0, C.key], [0.25, C.prussD], [0.62, C.pruss], [0.9, C.light], [1, '#c9d6d6']]); c.fillRect(0, 0, W, horizon); };

  // ---------- firefly-specific drawing ----------
  const GLOW = '#f2f98e';
  const halo = (c, x, y, r, a, warm = false) => {
    if (a <= 0 || r <= 0) return; c.save(); c.globalCompositeOperation = 'lighter';
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    if (warm) { g.addColorStop(0, `rgba(255,200,110,${0.9 * a})`); g.addColorStop(0.35, `rgba(230,120,50,${0.4 * a})`); g.addColorStop(1, 'rgba(200,70,40,0)'); }
    else { g.addColorStop(0, `rgba(245,252,170,${0.95 * a})`); g.addColorStop(0.3, `rgba(205,235,90,${0.45 * a})`); g.addColorStop(1, 'rgba(150,200,60,0)'); }
    c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); c.restore();
  };
  // a firefly, top-down, head up (local units: head ~-90, lantern tip ~+100)
  const fly = (c, x, y, s, ang, glow, wing, t) => {
    c.save(); c.translate(x, y); c.rotate(ang); c.scale(s, s);
    const lw = (2.4 + s * 1.1) / s;
    halo(c, 0, 84, 190, glow);
    c.strokeStyle = C.key; c.lineCap = 'round'; c.lineJoin = 'round'; c.lineWidth = lw * 1.4;
    for (const sd of [-1, 1]) for (let i = -1; i <= 1; i++) { c.beginPath(); c.moveTo(sd * 14, -14 + i * 18); c.lineTo(sd * 46, -28 + i * 28); c.lineTo(sd * 56, -6 + i * 36); c.stroke(); }
    // hind wings (only when flying), a fast flutter
    if (wing > 0) for (const sd of [-1, 1]) { const fl = Math.sin(t * 38 + (sd > 0 ? 0 : 0.6)) * 0.25;
      c.save(); c.translate(sd * 10, -20); c.rotate(sd * (0.55 + fl) * wing); const wp = new Path2D(); wp.ellipse(sd * 40, 40, 34, 82, sd * 0.15, 0, 7);
      c.fillStyle = 'rgba(232,226,204,0.62)'; c.fill(wp); c.strokeStyle = 'rgba(27,34,54,0.8)'; c.lineWidth = lw; c.stroke(wp);
      c.strokeStyle = 'rgba(27,34,54,0.35)'; c.lineWidth = lw * 0.6; c.beginPath(); c.moveTo(sd * 10, -20); c.lineTo(sd * 46, 100); c.stroke(); c.restore(); }
    // abdomen
    const ab = new Path2D(); ab.ellipse(0, 40, 34, 62, 0, 0, 7); fillKey(c, ab, '#2c2724', lw);
    // wing covers (elytra), open out when flying
    for (const sd of [-1, 1]) {
      c.save(); c.translate(sd * 4, -34); c.rotate(sd * 0.75 * wing); c.translate(-sd * 4, 34);
      const el = new Path2D(); el.moveTo(sd * 3, -34); el.quadraticCurveTo(sd * 46, -32, sd * 41, 36); el.quadraticCurveTo(sd * 32, 76, sd * 3, 68); el.closePath();
      fillKey(c, el, vbok(c, -34, 70, [[0, '#4a3d33'], [1, '#221c19']]), lw);
      c.strokeStyle = '#d6bb7c'; c.lineWidth = lw * 1.6; c.beginPath(); c.moveTo(sd * 34, -24); c.quadraticCurveTo(sd * 42, 10, sd * 34, 52); c.stroke();
      c.strokeStyle = 'rgba(241,232,210,0.35)'; c.lineWidth = lw * 0.7; c.beginPath(); c.moveTo(sd * 14, -26); c.lineTo(sd * 18, 52); c.stroke();
      c.restore();
    }
    // the lantern: the last two belly segments (pale cream when dark, yellow-green when lit)
    const lc = H.rgba(H.mix('#cdbf86', GLOW, glow));
    const l1 = new Path2D(); l1.ellipse(0, 78, 30, 14, 0, 0, 7); fillKey(c, l1, lc, lw);
    const l2 = new Path2D(); l2.ellipse(0, 96, 22, 11, 0, 0, 7); fillKey(c, l2, lc, lw);
    // pronotum (head shield): yellow with red patches and a black centre mark
    const pr = new Path2D(); pr.moveTo(-38, -30); pr.quadraticCurveTo(-40, -76, 0, -80); pr.quadraticCurveTo(40, -76, 38, -30); pr.closePath();
    fillKey(c, pr, vbok(c, -80, -30, [[0, '#f0c866'], [1, '#d99a3a']]), lw);
    c.fillStyle = C.red; c.beginPath(); c.ellipse(-15, -52, 9, 12, 0, 0, 7); c.ellipse(15, -52, 9, 12, 0, 0, 7); c.fill();
    c.fillStyle = C.key; c.beginPath(); c.ellipse(0, -52, 6, 16, 0, 0, 7); c.fill();
    const hd = new Path2D(); hd.arc(0, -86, 13, 0, 7); fillKey(c, hd, '#2c2724', lw);
    c.strokeStyle = C.key; c.lineWidth = lw * 1.3; for (const sd of [-1, 1]) { c.beginPath(); c.moveTo(sd * 5, -94); c.quadraticCurveTo(sd * 22, -128, sd * 38, -150); c.stroke(); }
    c.restore();
  };
  // a glowing dot (a distant firefly)
  const spark = (c, x, y, r, a) => { if (a <= 0.02) return; halo(c, x, y, r * 6, a); c.fillStyle = H.rgba(H.mix('#cdbf86', GLOW, a)); c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); };
  // an old incandescent bulb
  const bulb = (c, x, y, s, heat, t) => {
    c.save(); c.translate(x, y); c.scale(s, s); const lw = 3 / s;
    halo(c, 0, -60, 260, 0.75 * heat, true);
    const gl = new Path2D(); gl.moveTo(-42, 70); gl.bezierCurveTo(-42, 30, -100, 10, -100, -50); gl.bezierCurveTo(-100, -120, -50, -150, 0, -150); gl.bezierCurveTo(50, -150, 100, -120, 100, -50); gl.bezierCurveTo(100, 10, 42, 30, 42, 70); gl.closePath();
    fillKey(c, gl, vbok(c, -150, 70, [[0, H.rgba(H.mix('#f1ead2', '#ffd27a', heat))], [1, H.rgba(H.mix('#d8cfb4', '#f0a050', heat))]]), lw);
    c.strokeStyle = 'rgba(255,250,235,0.7)'; c.lineWidth = lw * 2.5; c.beginPath(); c.arc(-30, -60, 50, Math.PI * 1.05, Math.PI * 1.45); c.stroke();
    c.strokeStyle = C.key; c.lineWidth = lw; c.beginPath(); c.moveTo(-16, 68); c.lineTo(-22, -30); c.moveTo(16, 68); c.lineTo(22, -30); c.stroke();
    c.strokeStyle = H.rgba(H.mix('#7d3f2c', '#ff8a2a', heat)); c.lineWidth = lw * 2; c.beginPath(); c.moveTo(-22, -30); for (let i = 1; i <= 8; i++) c.lineTo(-22 + i * 5.5, -30 + (i % 2 ? -14 : 0)); c.stroke();
    const base = new Path2D(); base.rect(-44, 70, 88, 74); fillKey(c, base, vbok(c, 70, 144, [[0, '#b7aa8e'], [1, '#7d7462']]), lw);
    c.strokeStyle = C.key; c.lineWidth = lw; for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(-44, 84 + i * 16); c.lineTo(44, 78 + i * 16); c.stroke(); }
    const tip = new Path2D(); tip.moveTo(-22, 144); tip.lineTo(22, 144); tip.lineTo(10, 166); tip.lineTo(-10, 166); tip.closePath(); fillKey(c, tip, C.key, lw);
    // heat waves rising off the glass
    if (heat > 0.05) for (let k = 0; k < 3; k++) { const hx = -60 + k * 60, ph = (t * 0.9 + k * 0.33) % 1;
      c.save(); c.globalAlpha = heat * (1 - ph) * 0.95; c.strokeStyle = C.red; c.lineWidth = lw * 3; c.beginPath();
      for (let i = 0; i <= 20; i++) { const u = i / 20, yy = -170 - ph * 120 - u * 130; c.lineTo(hx + Math.sin(u * 9 + t * 5 + k) * 12, yy); } c.stroke(); c.restore(); }
    c.restore();
  };
  // rising-sun rays (the print's way of drawing a burst of light)
  const rays = (c, x, y, r, n, p, a0 = 0, col = 'rgba(244,236,170,0.55)') => {
    if (p <= 0) return; c.save(); c.globalAlpha = Math.min(1, p * 1.5); c.fillStyle = col; const rr = r * E.out(p);
    for (let i = 0; i < n; i++) { const a = a0 + i / n * Math.PI * 2, da = Math.PI / n * 0.55; c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a - da) * rr, y + Math.sin(a - da) * rr); c.lineTo(x + Math.cos(a + da) * rr, y + Math.sin(a + da) * rr); c.closePath(); c.fill(); }
    c.restore();
  };
  const o2 = (c, x, y, r) => { for (const d of [-0.55, 0.55]) { const p = new Path2D(); p.arc(x + d * r, y, r, 0, 7); fillKey(c, p, vbok(c, y - r, y + r, [[0, '#dfe8ea'], [1, C.light]]), 2.2); } c.fillStyle = C.key; c.font = `700 ${r * 0.95}px ${FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('O', x - r * 0.55, y + 2); c.fillText('O', x + r * 0.55, y + 2); };
  const noMol = (c, x, y, r) => { const a = new Path2D(); a.arc(x - r * 0.5, y, r * 0.9, 0, 7); fillKey(c, a, C.mid, 2.2); const b = new Path2D(); b.arc(x + r * 0.55, y, r, 0, 7); fillKey(c, b, C.red, 2.2);
    c.fillStyle = '#efe2c6'; c.font = `700 ${r * 0.85}px ${FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('N', x - r * 0.5, y + 2); c.fillText('O', x + r * 0.55, y + 2); };
  const flame = (c, x, y, s) => { const p = new Path2D(); p.moveTo(x, y - s); p.bezierCurveTo(x + s * 0.7, y - s * 0.3, x + s * 0.6, y + s * 0.5, x, y + s * 0.6); p.bezierCurveTo(x - s * 0.6, y + s * 0.5, x - s * 0.7, y - s * 0.3, x, y - s); fillKey(c, p, vbok(c, y - s, y + s * 0.6, [[0, '#f0c866'], [1, C.red]]), 3);
    const q = new Path2D(); q.moveTo(x, y - s * 0.3); q.bezierCurveTo(x + s * 0.3, y, x + s * 0.25, y + s * 0.4, x, y + s * 0.45); q.bezierCurveTo(x - s * 0.25, y + s * 0.4, x - s * 0.3, y, x, y - s * 0.3); c.fillStyle = '#f7e2a0'; c.fill(q); };
  // hexagonal cell field
  const hexPath = (x, y, r) => { const p = new Path2D(); for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; i ? p.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r) : p.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r); } p.closePath(); return p; };
  const HEXR = 92, HEX = (() => { const out = []; const dx = HEXR * Math.sqrt(3), dy = HEXR * 1.5; for (let j = 0; j * dy < HH + HEXR; j++) for (let i = -1; i * dx < W + HEXR; i++) out.push([i * dx + (j % 2 ? dx / 2 : 0), j * dy, j, i]); return out; })();
  // grass + reeds layer for night scenes (static -> cached)
  let GRASS = null;
  const grass = () => {
    if (GRASS) return GRASS; GRASS = H.layer(W, 620); const g = GRASS.getContext('2d'), r = H.rng(31);
    g.fillStyle = vbok(g, 80, 620, [[0, '#3e5a3a'], [1, '#1f2e22']]); g.fillRect(0, 200, W, 420);
    for (let i = 0; i < 90; i++) { const x = r.range(-20, W + 20), h = r.range(180, 520), lean = r.range(-90, 90), w = r.range(10, 22), base = 620;
      const p = new Path2D(); p.moveTo(x - w, base); p.quadraticCurveTo(x + lean * 0.3, base - h * 0.6, x + lean, base - h); p.quadraticCurveTo(x + lean * 0.3 + w * 0.6, base - h * 0.55, x + w, base); p.closePath();
      g.save(); g.translate(1.6, 1); g.fillStyle = r() < 0.5 ? C.green : '#55784f'; g.fill(p); g.restore(); keyline(g, p, 2.2); }
    // a few reed heads (susuki)
    for (let i = 0; i < 7; i++) { const x = 80 + i * 150 + r.range(-30, 30), y = r.range(120, 260); g.strokeStyle = C.key; g.lineWidth = 3; g.beginPath(); g.moveTo(x, 620); g.quadraticCurveTo(x + 10, y + 120, x + 24, y); g.stroke();
      for (let k = 0; k < 6; k++) { const p = new Path2D(); p.ellipse(x + 24 + (k % 2 ? 12 : -12), y + 10 + k * 14, 7, 18, (k % 2 ? 0.5 : -0.5), 0, 7); g.fillStyle = C.ochre; g.fill(p); keyline(g, p, 1.6); } }
    return GRASS;
  };
  // night meadow print: sky, moon, clouds, grass
  const meadow = (c, t, moonX = 820, moonY = 520) => {
    nightSky(c, 1920);
    // stars as tiny cream dots (seeded)
    const r = H.rng(808); c.fillStyle = 'rgba(241,232,210,0.75)'; for (let i = 0; i < 70; i++) { const x = r.range(0, W), y = r.range(160, 1100), s = r.range(1.5, 3.5); c.fillRect(x, y, s, s); }
    moon(c, moonX, moonY, 105);
    cloudBand(c, 40, 700, 420); cloudBand(c, 620, 1050, 380);
    c.drawImage(grass(), 0, 1300);
  };
  // drifting background fireflies, each with its own seeded blink
  const meadowFlies = (c, t, n, seed, dim = 1) => { const r = H.rng(seed);
    for (let i = 0; i < n; i++) { const bx = r.range(60, W - 60), by = r.range(900, 1560), ph = r.range(0, 6), per = r.range(1.6, 3.2), dr = r.range(16, 40);
      const x = bx + Math.sin(t * 0.6 + ph) * dr, y = by + Math.cos(t * 0.45 + ph * 1.3) * dr * 0.6, u = ((t + ph) % per) / per;
      const a = (u < 0.18 ? Math.sin(u / 0.18 * Math.PI) : 0) * dim; spark(c, x, y, 5, a); } };

  // ======================= SCENES (each draws its own full background in a 1080x1920 frame) =======================
  // 0: hook: a summer-night print; a firefly glows cold, an old bulb glows hot
  const scHook = (c, t, end) => {
    meadow(c, t);
    meadowFlies(c, t, 9, 77, 0.7);
    const bp = end ? 0 : E.inOut(S(t, 2.5, 3.1)), bo = end ? 0 : E.inOut(S(t, 6.9, 7.25)) * 0.5;
    const fx = H.lerp(540, 300, bp) + H.lerp(0, 240, bo), fy = H.lerp(end ? 1080 : 960, 820, bp) + Math.sin(t * 2.1) * 14, fs = H.lerp(2.3, 1.55, bp);
    const glow = end ? 0.65 + 0.35 * Math.max(0, Math.sin(t * 3.2)) : E.out(S(t, 0.25, 1.1)) * (0.85 + 0.15 * Math.sin(t * 5));
    fly(c, fx, fy, fs * (end ? 1 : E.out(S(t, 0.1, 0.45)) * 0.25 + (end ? 0 : 0.75)), -0.08 + Math.sin(t * 0.9) * 0.05, glow, 0, t);
    if (!end) {
      // the old bulb slides in on "bulb", heats up on "wastes"
      const bin = E.out(S(t, 2.6, 3.2)), heat = E.out(S(t, 3.25, 3.8)) * (0.85 + 0.15 * Math.sin(t * 13));
      if (bin > 0) bulb(c, H.lerp(1300, 790, bin), 1010, 1.45, heat, t);
      cartouche(c, 'COLD LIGHT', 540, 420, 112, S(t, 1.2, 1.42) * (1 - S(t, 5.25, 5.5)), '#f1e8d2');
      cartouche(c, '90% HEAT', 540, 1470, 132, S(t, 3.62, 3.84) * (1 - 0.35 * S(t, 5.3, 5.6)));
      seal(c, 300, 560, 110, '冷', S(t, 1.55, 1.7) * (1 - S(t, 5.25, 5.5)), -0.06);
      seal(c, 300, 1180, 150, '?', S(t, 5.42, 5.6), -0.06);
      cartouche(c, 'STAY COOL?', 540, 420, 112, S(t, 6.55, 6.77), '#f1e8d2');
    }
  };
  // 1: on a leaf at dusk; the camera dives into the tail, the lantern lights, then its cells
  const LANT = [540, 960 + 3.3 * 87];
  const scTail = (c, t) => {
    c.fillStyle = vbok(c, 0, HH, [[0, '#cfa76a'], [0.3, C.sky], [0.75, '#e7d8b4'], [1, '#d9c79c']]); c.fillRect(0, 0, W, HH);
    const zi = E.inOut(S(t, 12.45, 13.3)), z = H.lerp(1, 4.2, zi), cy = H.lerp(960, LANT[1], zi), drift = (1 - zi) * Math.sin(t * 0.4) * 10;
    c.save(); c.translate(540, 960); c.scale(z, z); c.translate(-540, -cy + drift);
    // the big leaf
    const lf = new Path2D(); lf.moveTo(120, 1820); lf.bezierCurveTo(-60, 1200, 300, 300, 980, 120); lf.bezierCurveTo(1100, 700, 900, 1500, 120, 1820); lf.closePath();
    fillKey(c, lf, vbok(c, 120, 1820, [[0, '#9cb882'], [0.5, C.green], [1, '#4d6e47']]), 3.2);
    c.save(); c.clip(lf); c.strokeStyle = 'rgba(27,34,54,0.45)'; c.lineWidth = 3; c.beginPath(); c.moveTo(150, 1800); c.quadraticCurveTo(480, 1000, 960, 150); c.stroke();
    c.lineWidth = 2; for (let i = 1; i < 9; i++) { const u = i / 9, px = H.lerp(150, 960, u) - 40 * Math.sin(u * 3), py = H.lerp(1800, 150, u); c.beginPath(); c.moveTo(px, py); c.quadraticCurveTo(px - 160, py - 40, px - 300, py - 220); c.moveTo(px, py); c.quadraticCurveTo(px + 160, py + 10, px + 300, py - 120); c.stroke(); }
    c.restore();
    const glow = E.out(S(t, 10.05, 10.6)) * (0.9 + 0.1 * Math.sin(t * 4));
    fly(c, 540, 960, 3.3, 0, glow, 0, t);
    c.restore();
    // labels on the whole insect
    const lab = 1 - S(t, 12.3, 12.55);
    tanzaku(c, 'tail', 820, 1300, S(t, 9.05, 9.25) * lab, 56);
    cartouche(c, 'LANTERN', 540, 1545, 100, S(t, 11.45, 11.65) * lab);
    // inside the lantern: a honeycomb of light cells
    const cp = S(t, 12.6, 13.25);
    if (cp > 0) {
      c.save(); c.globalAlpha = cp;
      c.fillStyle = vbok(c, 0, HH, [[0, '#e9e6b0'], [1, '#d5d49a']]); c.fillRect(0, 0, W, HH);
      const fuel = S(t, 14.0, 14.7), enz = S(t, 15.75, 16.5);
      HEX.forEach(([x, y, j, i]) => { const hp = hexPath(x, y, HEXR - 6); const lit = H.mix('#efe9bd', '#e2e88a', 0.5 + 0.5 * Math.sin(i * 1.3 + j * 0.7));
        c.fillStyle = H.rgba(lit); c.fill(hp); keyline(c, hp, 3.2);
        const r = H.rng(j * 31 + i * 7 + 100);
        for (let k = 0; k < 5; k++) { const ox = r.range(-48, 48), oy = r.range(-44, 44), dl = r() * 0.6;
          const fp = E.back(S(fuel, dl * 0.7, dl * 0.7 + 0.4)); if (fp > 0) { const p = new Path2D(); p.arc(x + ox, y + oy, 10 * fp, 0, 7); fillKey(c, p, C.ochre, 1.6); } }
        for (let k = 0; k < 2; k++) { const ox = r.range(-40, 40), oy = r.range(-36, 36), dl = r() * 0.6, ep = E.back(S(enz, dl * 0.7, dl * 0.7 + 0.4));
          if (ep > 0) { const p = new Path2D(); const a = 0.5 + Math.sin(t * 3 + k + i) * 0.25; p.moveTo(x + ox, y + oy); p.arc(x + ox, y + oy, 17 * ep, a, Math.PI * 2 - a); p.closePath(); fillKey(c, p, C.red, 1.6); } }
      });
      c.restore();
      tanzaku(c, 'cells', 540, 1120, S(t, 12.7, 12.9) * (1 - S(t, 13.9, 14.1)), 60);
      cartouche(c, 'FUEL', 540, 420, 70, S(t, 14.05, 14.25));
      cartouche(c, 'LUCIFERIN', 540, 580, 110, S(t, 14.36, 14.58));
      cartouche(c, 'ENZYME', 540, 1390, 70, S(t, 15.76, 15.96), C.red, '#efe2c6');
      cartouche(c, 'LUCIFERASE', 540, 1545, 100, S(t, 16.3, 16.5), C.red, '#efe2c6');
    }
  };
  // 2: the recipe: fuel + enzyme in one cell, a spark of energy, a puff of oxygen -> light (no fire)
  const scRecipe = (c, t) => {
    c.fillStyle = vbok(c, 0, HH, [[0, C.key], [0.4, C.prussD], [0.8, C.pruss], [1, C.mid]]); c.fillRect(0, 0, W, HH);
    const lit = E.out(S(t, 22.0, 22.45)), cx = 540, cy = 990, R = 300;
    rays(c, cx, cy, 1100, 16, lit, t * 0.05);
    halo(c, cx, cy, 700, lit * (0.9 + 0.1 * Math.sin(t * 6)));
    // the cell
    const cell = new Path2D(); cell.arc(cx, cy, R, 0, 7); fillKey(c, cell, vbok(c, cy - R, cy + R, [[0, H.rgba(H.mix('#e9e6b0', '#fbfdc8', lit))], [1, H.rgba(H.mix('#cfc98a', '#eef38a', lit))]]), 4);
    c.strokeStyle = C.ochre; c.lineWidth = 6; c.beginPath(); c.arc(cx, cy, R - 18, 0, 7); c.stroke();
    // luciferin drop with the luciferase enzyme hugging it
    const drop = new Path2D(); drop.moveTo(cx - 40, cy - 120); drop.bezierCurveTo(cx + 40, cy - 40, cx + 70, cy + 30, cx - 40, cy + 80); drop.bezierCurveTo(cx - 150, cy + 30, cx - 120, cy - 40, cx - 40, cy - 120);
    fillKey(c, drop, H.rgba(H.mix(C.ochre, '#fbffb0', lit)), 3);
    const en = new Path2D(); const a = 0.55 + Math.sin(t * 2.4) * 0.12; en.moveTo(cx + 70, cy - 10); en.arc(cx + 70, cy - 10, 120, Math.PI - a, Math.PI + a, true); en.closePath(); fillKey(c, en, C.red, 3);
    // spark of energy: a carved lightning bolt strikes on "spark"
    const sp = S(t, 18.05, 18.3), sf = 1 - S(t, 21.9, 22.2);
    if (sp > 0 && sf > 0) { c.save(); c.globalAlpha = sf; const bx = H.lerp(150, 330, E.out(sp)), by = H.lerp(420, 700, E.out(sp));
      const bo = new Path2D(); bo.moveTo(bx, by - 150); bo.lineTo(bx + 70, by - 150); bo.lineTo(bx + 30, by - 50); bo.lineTo(bx + 90, by - 50); bo.lineTo(bx - 10, by + 120); bo.lineTo(bx + 20, by + 10); bo.lineTo(bx - 40, by + 10); bo.closePath();
      fillKey(c, bo, '#f0c866', 3); if (sp < 1 || t < 18.6) halo(c, bx + 20, by, 220, 0.6 * (1 - S(t, 18.3, 18.8)), true); c.restore(); }
    // oxygen puffs drift in from the right as a little current with claw-foam heads
    const op = S(t, 19.85, 21.3);
    if (op > 0 && sf > 0) { c.save(); c.globalAlpha = sf;
      for (let i = 0; i < 4; i++) { const u = E.out(cl(op * 1.4 - i * 0.12)); if (u <= 0) continue; const x = H.lerp(1150, 700 + i * 30, u), y = 1360 - i * 80 + Math.sin(t * 2 + i) * 10; o2(c, x, y, 36); }
      const head = E.out(op); const cur = new Path2D(); cur.moveTo(W + 20, 1500); cur.quadraticCurveTo(900, 1460, H.lerp(W, 760, head), 1420); c.strokeStyle = C.key; c.lineWidth = 34; c.lineCap = 'round'; c.stroke(cur); c.strokeStyle = C.light; c.lineWidth = 26; c.stroke(cur);
      if (head > 0.05) claw(c, H.lerp(W, 760, head), 1420, -0.3, -1, -1, 0.3, 40, H.rng(9)); c.restore(); }
    cartouche(c, 'ENERGY', 540, 420, 100, S(t, 18.68, 18.88) * (1 - S(t, 21.9, 22.1)));
    cartouche(c, 'OXYGEN', 540, 1560, 100, S(t, 20.42, 20.62) * (1 - S(t, 21.9, 22.1)), '#dfe8ea');
    cartouche(c, 'LIGHT!', 540, 420, 150, S(t, 22.0, 22.2), '#f4f6b0');
    // no fire, just chemistry
    const ff = E.back(S(t, 23.1, 23.4)); if (ff > 0) { c.save(); c.translate(840, 1440); c.scale(ff, ff); flame(c, 0, 0, 110); c.restore(); }
    seal(c, 840, 1420, 150, 'x', S(t, 23.32, 23.5), 0.06);
    cartouche(c, 'CHEMISTRY', 400, 1560, 92, S(t, 23.96, 24.16));
  };
  // 3: how it blinks: an air tube, a wooden gate, the lantern chamber below
  const GY = 1010;
  const scBlink = (c, t) => {
    c.fillStyle = vbok(c, 0, HH, [[0, '#cfa76a'], [0.35, C.sky], [1, '#efe5cc']]); c.fillRect(0, 0, W, HH);
    cloudBand(c, 40, 360, 300); cloudBand(c, 720, 330, 300);
    const open = E.inOut(S(t, 32.25, 32.75)) * (1 - E.inOut(S(t, 35.55, 36.15)));
    const flow = E.inOut(S(t, 32.95, 34.25)), flash = E.out(S(t, 34.15, 34.45)) * (1 - E.inOut(S(t, 36.25, 37.15)));
    // the tube (a trachea feeding the lantern)
    const tube = new Path2D(); tube.rect(420, 620, 240, GY - 620); fillKey(c, tube, vbok(c, 620, GY, [[0, '#e9e0c4'], [1, '#d6caa8']]), 3.4);
    c.strokeStyle = 'rgba(27,34,54,0.4)'; c.lineWidth = 3; for (let y = 650; y < GY; y += 40) { c.beginPath(); c.moveTo(420, y); c.quadraticCurveTo(540, y + 14, 660, y); c.stroke(); }
    const mouth = new Path2D(); mouth.ellipse(540, 620, 120, 30, 0, 0, 7); fillKey(c, mouth, '#bfb38f', 3);
    // the lantern chamber
    const ch = new Path2D(); ch.roundRect(170, GY + 60, 740, 560, 60);
    halo(c, 540, GY + 340, 900, flash);
    rays(c, 540, GY + 340, 1000, 16, flash, 0.1, 'rgba(244,240,160,0.5)');
    fillKey(c, ch, '#e9e6b0', 3.6);
    c.save(); c.clip(ch);
    HEX.forEach(([x, y]) => { const yy = y + GY - 30; if (yy < GY - 40 || yy > GY + 700) return; const hp = hexPath(x, yy, HEXR - 8); c.fillStyle = H.rgba(H.mix('#cfcaa0', GLOW, flash)); c.fill(hp); keyline(c, hp, 2.6); });
    // air filling the chamber (pale current fans out)
    if (flow > 0) { const fy = GY + 60 + flow * 520; c.fillStyle = 'rgba(147,180,204,0.35)'; c.fillRect(170, GY + 60, 740, fy - GY - 60);
      for (let i = 0; i < 9; i++) { const r = H.rng(500 + i), x = 220 + i * 80, y = GY + 60 + (flow * 500 + r.range(0, 120)) % 520; if (y < fy) o2(c, x + Math.sin(t * 3 + i) * 12, y, 22); } }
    c.fillStyle = `rgba(22,48,79,${0.55 * (1 - flash) * S(t, 25.3, 25.4)})`; c.fillRect(170, GY + 60, 740, 560);
    c.restore(); keyline(c, ch, 3.6);
    // oxygen waiting above the gate
    const waitIn = S(t, 28.8, 29.3), fade = 1 - S(t, 33.0, 33.6);
    for (let i = 0; i < 5; i++) { const p = E.back(S(waitIn, i * 0.12, i * 0.12 + 0.5)); if (p <= 0) continue; const x = 480 + (i % 2) * 120, y = H.lerp(700 + i * 60, GY + 200 + i * 60, flow);
      c.save(); c.globalAlpha = fade; c.translate(x, y); c.scale(p, p); o2(c, 0, 0, 30); c.restore(); }
    // the rushing air current with claw-foam head
    if (flow > 0 && flow < 1) { const hy = H.lerp(640, GY + 380, flow); const cur = new Path2D(); cur.moveTo(540, 600); cur.lineTo(540, hy); c.strokeStyle = C.key; c.lineWidth = 120; c.lineCap = 'butt'; c.stroke(cur); c.strokeStyle = C.light; c.lineWidth = 110; c.stroke(cur);
      c.strokeStyle = 'rgba(241,232,210,0.8)'; c.lineWidth = 3; for (let k = -1; k <= 1; k++) { c.beginPath(); c.moveTo(540 + k * 30, 620); for (let y = 620; y < hy; y += 20) c.lineTo(540 + k * 30 + Math.sin(y * 0.05 + t * 8) * 6, y); c.stroke(); }
      for (let k = -1; k <= 1; k++) claw(c, 540 + k * 40, hy, 0, 1, 1, 0, 46, H.rng(70 + k)); }
    // the gate: two carved wooden panels that slide apart
    const pw = 120 * (1 - open);
    for (const sd of [-1, 1]) { const x0 = sd < 0 ? 420 : 660 - pw; if (pw < 2) continue; const p = new Path2D(); p.rect(x0, GY - 16, pw, 80); fillKey(c, p, vbok(c, GY - 16, GY + 64, [[0, '#c99a5c'], [1, '#8d5a2c']]), 3);
      c.strokeStyle = 'rgba(80,45,20,0.5)'; c.lineWidth = 2; for (let k = 0; k < 4; k++) { c.beginPath(); c.moveTo(x0, GY - 2 + k * 18); c.lineTo(x0 + pw, GY - 6 + k * 18); c.stroke(); } }
    const fr = new Path2D(); fr.rect(400, GY - 30, 280, 108); keyline(c, fr, 4);
    // nitric oxide molecules arrive from the side and nudge the gate
    const np = S(t, 30.0, 32.3), nf = 1 - S(t, 32.6, 33.0);
    if (np > 0 && nf > 0) { c.save(); c.globalAlpha = nf; for (let i = 0; i < 3; i++) { const u = E.out(cl(np * 1.3 - i * 0.15)); const x = H.lerp(-80, 330 - i * 70, u), y = GY + 20 + (i - 1) * 90 + Math.sin(t * 3 + i) * 8; noMol(c, x, y, 34); } c.restore(); }
    // labels
    cartouche(c, 'BLINK?', 540, 420, 130, S(t, 26.12, 26.34) * (1 - S(t, 27.6, 27.85)), '#f1e8d2');
    cartouche(c, 'CONTROLS O₂', 540, 420, 96, S(t, 27.95, 28.15) * (1 - S(t, 29.85, 30.05)));
    tanzaku(c, 'oxygen', 860, 760, S(t, 28.85, 29.05) * (1 - S(t, 32.9, 33.1)), 54);
    cartouche(c, 'NITRIC OXIDE', 540, 420, 96, S(t, 30.72, 30.92) * (1 - S(t, 33.8, 34.1)), C.red, '#efe2c6');
    tanzaku(c, 'gate', 860, GY + 4, S(t, 32.3, 32.5) * (1 - S(t, 33.2, 33.4)), 54);
    cartouche(c, 'FLASH!', 540, 420, 160, S(t, 34.24, 34.42) * (1 - S(t, 36.3, 36.6)), '#f4f6b0');
    seal(c, 860, 1700 - 80, 120, '閉', S(t, 35.9, 36.1) * (1 - S(t, 37.1, 37.3)), 0.06);
    cartouche(c, 'DARK', 540, 420, 130, S(t, 37.0, 37.2), C.key, '#efe2c6');
  };
  // 4: every flash is a message: a meadow full of different codes, a male asks, a female answers
  const CODES = [[0, 0.5, 1.0], [0, 0.25], [0, 0.18, 0.36, 0.54]]; // flash onsets (s) per pattern
  const codeA = (t0, t, pat, per) => { const u = (t - t0) % per; let a = 0; pat.forEach((o) => { const d = u - o; if (d >= 0 && d < 0.16) a = Math.max(a, Math.sin(d / 0.16 * Math.PI)); }); return t < t0 ? 0 : a; };
  const scCodes = (c, t) => {
    meadow(c, t, 170, 820);
    const rowsOn = S(t, 43.4, 43.6) * (1 - S(t, 45.45, 45.7));
    meadowFlies(c, t, 26, 4242, 1 - 0.8 * rowsOn);
    // three kinds, three codes
    if (rowsOn > 0) { c.save(); c.globalAlpha = rowsOn;
      const card = new Path2D(); card.rect(90, 860, 900, 520); c.fillStyle = 'rgba(236,224,196,0.88)'; c.fill(card); keyline(c, card, 3); c.strokeStyle = C.key; c.lineWidth = 1.5; c.strokeRect(102, 872, 876, 496);
      CODES.forEach((pat, i) => { const y = 960 + i * 165, on = S(t, 43.45 + i * 0.3, 43.7 + i * 0.3); if (on <= 0) return;
        fly(c, 200, y, 0.42, Math.PI / 2, codeA(43.45, t, pat, 1.6), 0, t);
        // the code written out as dashes along a scroll line
        c.strokeStyle = 'rgba(27,34,54,0.45)'; c.lineWidth = 2; c.beginPath(); c.moveTo(310, y); c.lineTo(310 + 620 * on, y); c.stroke();
        pat.forEach((o, k) => { const x = 360 + o * 520; if (x > 310 + 620 * on) return; const p = new Path2D(); p.roundRect(x - 26, y - 18, 52 + (i === 0 ? 30 : 0), 36, 18); fillKey(c, p, H.rgba(H.mix('#cdbf86', GLOW, 0.5 + 0.5 * codeA(43.45, t, pat, 1.6))), 2.2); });
        seal(c, 900, y, 74, ['一', '二', '三'][i], on, 0.05 * (i - 1)); });
      c.restore(); }
    cartouche(c, 'A MESSAGE', 540, 420, 112, S(t, 39.1, 39.3) * (1 - S(t, 40.9, 41.05)), '#f1e8d2');
    cartouche(c, '2,000+', 540, 450, 170, S(t, 41.0, 41.2) * (1 - S(t, 45.45, 45.7)));
    tanzaku(c, 'kinds of fireflies', 540, 620, S(t, 41.78, 41.98) * (1 - S(t, 45.45, 45.7)), 52);
    cartouche(c, 'OWN CODE', 540, 1500, 96, S(t, 44.82, 45.02) * (1 - S(t, 45.45, 45.7)));
    // the male flies a J-shaped stroke, flashing; the female answers from a grass blade
    const mOn = S(t, 45.55, 45.85);
    if (mOn > 0) { const u = ((t - 45.7) % 2.2) / 2.2, jx = 700 + Math.sin(u * Math.PI * 1.2) * 120, jy = 760 + u * 260 - Math.max(0, u - 0.6) * 520;
      c.save(); c.globalAlpha = mOn;
      const fl = codeA(45.75, t, [0.25], 2.2);
      if (fl > 0.05) { c.strokeStyle = `rgba(242,249,142,${0.75 * fl})`; c.lineWidth = 18; c.lineCap = 'round'; c.beginPath(); for (let k = 0; k <= 12; k++) { const uu = cl(u - k * 0.012), x = 700 + Math.sin(uu * Math.PI * 1.2) * 120, y = 760 + uu * 260 - Math.max(0, uu - 0.6) * 520; k ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke(); }
      fly(c, jx, jy, 0.9, 2.6 + Math.sin(t * 2) * 0.2, fl, 1, t);
      c.restore(); tanzaku(c, 'male', 900, 680, S(t, 45.7, 45.9), 54); }
    const fOn = S(t, 47.8, 48.05);
    if (fOn > 0) { c.save(); c.globalAlpha = fOn; const blade = new Path2D(); blade.moveTo(220, 1700); blade.quadraticCurveTo(260, 1450, 360, 1260); blade.quadraticCurveTo(290, 1460, 270, 1700); blade.closePath(); fillKey(c, blade, '#55784f', 3);
      const fa = codeA(48.4, t, [0, 0.9], 2.2); fly(c, 300, 1400, 0.85, -0.45, fa, 0, t); c.restore();
      tanzaku(c, 'female', 300, 1130, S(t, 47.82, 48.02), 54);
      // the answer drawn as a dotted arc back to the male
      const ap = S(t, 48.85, 49.15); if (ap > 0) { c.save(); c.strokeStyle = C.red; c.lineWidth = 7; c.setLineDash([4, 20]); c.lineCap = 'round'; c.beginPath(); c.moveTo(330, 1340); c.quadraticCurveTo(520, 900, H.lerp(330, 680, ap), H.lerp(1340, 900, ap)); c.stroke(); c.restore(); seal(c, 860, 1500, 120, '答', ap, 0.06); } }
  };
  // 5: the ending: back to the hook print; the question loops to the first line
  const scEnd = (c, t) => {
    scHook(c, t, true);
    cartouche(c, 'ONE MESSAGE', 540, 420, 108, S(t, 50.95, 51.15), '#f1e8d2');
    cartouche(c, 'in the dark', 540, 600, 70, S(t, 52.05, 52.25), '#f1e8d2');
    cartouche(c, 'what would it say?', 540, 1500, 72, S(t, 52.36, 52.56));
    seal(c, 860, 1250, 120, '光', S(t, 53.15, 53.3), 0.06);
  };
  const SCENES = [scHook, scTail, scRecipe, scBlink, scCodes, scEnd];
  const header = (c, t) => {
    const p = S(t, 7.8, 8.2) * (1 - S(t, 49.2, 49.5)); if (p <= 0) return;
    cartouche(c, 'HOW FIREFLIES GLOW', 500, 230, 50, p);
    seal(c, 920, 230, 70, '蛍', p, 0.05);
  };
  // finish-pass fields (deterministic -> once)
  let FIELDS = null;
  const fields = () => FIELDS || (FIELDS = { warp: fieldNoise(W, HH, 3, 30, 3), fine: fieldNoise(W, HH, 4, 2, 2, 0.15, 2.2), pap: fieldNoise(W, HH, 6, 3, 2, 2.5, 0.6), blot: fieldNoise(W, HH, 7, 40, 4) });
  let FIB = null;
  const fibres = () => { if (FIB) return FIB; FIB = H.layer(W, HH); const c = FIB.getContext('2d'), rf = H.rng(55);
    for (let i = 0; i < 700; i++) { const x = rf.range(0, W), y = rf.range(0, HH), l = rf.range(14, 56), a = rf.range(0, Math.PI * 2);
      c.strokeStyle = rf() < 0.5 ? 'rgba(255,250,235,0.24)' : 'rgba(120,95,60,0.13)'; c.lineWidth = rf.range(0.6, 1.4);
      c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + Math.cos(a) * l * 0.5 + rf.range(-8, 8), y + Math.sin(a) * l * 0.5 + rf.range(-8, 8), x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke(); }
    return FIB; };


  function explainer(ctx, W_, H_, t) {
    const c = ctx;
    c.fillStyle = C.paper; c.fillRect(0, 0, W, HH);
    let cur = 0, tr = null;
    for (const x of TR) { if (t >= x.b) cur = x.to; else if (t >= x.a) { tr = x; break; } else break; }
    const drawAt = (i, ox) => { c.save(); c.beginPath(); c.rect(ox, 0, W, HH); c.clip(); c.translate(ox, 0); SCENES[i](c, t); c.restore(); };
    if (!tr) drawAt(cur, 0);
    else if (tr.kind === 'pan') {
      const p = E.inOut(S(t, tr.a, tr.b)), ox = p * W; // the scroll unrolls: the next scene enters from the left
      drawAt(tr.from, ox); drawAt(tr.to, ox - W); kasumi(c, ox, 300, 1620);
    } else {
      const p = S(t, tr.a, tr.b), M = mistBand();
      if (p < 0.5) { drawAt(tr.from, 0); const e = H.lerp(-120, HH + 140, E.inOut(p * 2)); c.drawImage(M, 0, e - 2400 + 120); }
      else { drawAt(tr.to, 0); const e = H.lerp(-140, HH + 120, E.inOut((p - 0.5) * 2)); c.drawImage(M, 0, e - 120); }
    }
    header(c, t);
    c.fillStyle = vbok(c, 0, 44, [[0, '#cfac55'], [0.55, 'rgba(214,184,104,0.85)'], [1, 'rgba(220,194,122,0)']]); c.fillRect(0, 0, W, 44);
    c.fillStyle = vbok(c, HH - 40, HH, [[0, 'rgba(220,194,122,0)'], [0.45, 'rgba(214,184,104,0.85)'], [1, '#cfac55']]); c.fillRect(0, HH - 40, W, 40);
    // ---------- woodblock finish (same pass as the reference) ----------
    const img = c.getImageData(0, 0, W, HH), d = img.data, { warp, fine, pap, blot } = fields(), rg = H.rng(2);
    for (let y = 0, p = 0; y < HH; y++) for (let x = 0; x < W; x++, p++) {
      const i = p * 4, lum = (d[i] * 0.3 + d[i + 1] * 0.55 + d[i + 2] * 0.15) / 255, inked = H.clamp((0.85 - lum) * 1.6, 0, 1), plate = H.clamp((0.94 - lum) * 1.3, 0, 1);
      const grain = Math.sin(y * 0.55 + warp[p] * 26 + x * 0.004) * 0.5 + fine[p] * 0.8;
      let s = 1 + grain * (0.07 + 0.07 * inked) * plate; s *= 1 + pap[p] * 0.035 + (rg() - 0.5) * 0.04; s *= 1 - Math.max(0, blot[p]) * 0.12 * plate;
      d[i] = d[i] * s + 6 * (1 - inked); d[i + 1] = d[i + 1] * s; d[i + 2] = d[i + 2] * s * 0.97 - 4 * (1 - inked);
    }
    c.putImageData(img, 0, 0);
    c.drawImage(fibres(), 0, 0);
    H.vignette(c, W, HH, 0.25, '90,60,30');
  }

  // ---------- SOUND: a woodblock workshop and a summer night, under the narration ----------
  function scoreSound(k) {
    const D = DURATION;
    const koto = (t, n, g, p, minor, bend) => { const f = k.hz(n);
      k.tone(t, { f: bend ? [[0, f], [0.08, f], [0.5, f * 0.89]] : [[0, f * 1.012], [0.05, f]], type: 'sawtooth', dur: 1.3, gain: 0.05 * g, a: 0.002, filter: 'lowpass', f2: [[0, 2600], [0.25, 900], [1.3, 500]], q: 1.5, pan: p, verb: 0.3, minor });
      k.tone(t, { f, type: 'triangle', dur: 1.0, gain: 0.06 * g, a: 0.002, pan: p, minor }); };
    const sealP = (t, g, p, minor) => { k.play('stamp', t, { gain: 0.6 * g, pan: p, minor }); k.noise(t + 0.01, { dur: 0.12, color: 'pink', filter: 'bandpass', f: 1100, q: 0.7, gain: 0.08 * g, a: 0.01, pan: p, minor }); };
    const card = (t, g = 1) => k.play('paper', t, { dur: 0.12, gain: 0.3 * g, minor: true });
    const unroll = (t, dur) => { k.noise(t, { dur, color: 'brown', filter: 'bandpass', f: [[0, 160], [dur * 0.5, 300], [dur, 160]], q: 1, gain: 0.18, a: dur * 0.4 }); k.play('paper', t + 0.1, { dur: dur - 0.2, gain: 0.75 }); };
    const glowS = (t, g = 1, p = 0) => { k.tone(t, { f: [[0, k.hz('A5')], [0.3, k.hz('E6')]], dur: 0.7, gain: 0.05 * g, a: 0.05, verb: 0.4, pan: p }); k.play('sparkle', t, { gain: 0.6 * g, n: 4 }); };
    const cricket = (t0, t1, p) => { const r = H.rng(Math.round(t0 * 10)); k.withMinor(() => { for (let t = t0; t < t1; t += 0.9 + r() * 0.8) for (let i = 0; i < 3; i++) k.tone(t + i * 0.055, { f: 4300 + r() * 200, dur: 0.035, gain: 0.018, a: 0.003, pan: p + (r() - 0.5) * 0.3 }); }); };
    k.bed('room', 0, D, { gain: 0.3 });
    cricket(0, 7.3, -0.5); cricket(0.4, 7.3, 0.5); cricket(37.9, D, -0.4); cricket(38.3, D, 0.45); cricket(49.7, D, 0);
    TR.forEach((x) => { if (x.kind === 'pan') unroll(x.a, x.b - x.a); else { k.play('whoosh', x.a, { dur: x.b - x.a, gain: 0.45 }); k.play('paper', x.a + 0.1, { dur: 0.35, gain: 0.4, minor: true }); } });
    // hook
    glowS(0.3, 1, 0); koto(0.3, 'D4', 0.9, -0.2); koto(0.45, 'A4', 0.7, -0.1);
    koto(1.25, 'D5', 1, 0); card(1.25); sealP(1.62, 0.8, -0.3);
    k.play('whoosh', 2.6, { dur: 0.5, gain: 0.35, pan: 0.5 }); k.play('click', 3.2, { gain: 0.6, pan: 0.4 }); k.play('buzz', 3.25, { f: 120, dur: 1.6, gain: 0.35, pan: 0.4 });
    k.play('impact', 3.66, { gain: 1.1 }); koto(3.7, 'Eb4', 1, 0, false, true);
    sealP(5.5, 1.1, -0.3); koto(5.52, 'Bb3', 0.8, -0.3, false, true);
    koto(6.6, 'G4', 0.9, 0); koto(6.72, 'D5', 0.8, 0.1); card(6.6);
    // tail, lantern, cells
    k.play('paper', 9.1, { dur: 0.15, gain: 0.35, minor: true });
    glowS(10.1, 1, 0.2); koto(11.5, 'D4', 0.9, 0); koto(11.6, 'A4', 0.8, 0.1); card(11.5);
    k.play('riser', 12.45, { dur: 0.85, gain: 0.45 });
    for (let i = 0; i < 10; i++) k.play('tock', 12.65 + i * 0.05, { f: 520 + i * 30, gain: 0.3, pan: (i / 9 - 0.5), minor: true });
    for (let i = 0; i < 14; i++) k.play('pop', 14.05 + i * 0.045, { f: 700 + (i % 4) * 90, gain: 0.35, pan: ((i % 5) / 4 - 0.5), minor: true });
    koto(14.4, 'G4', 0.9, 0); card(14.36);
    for (let i = 0; i < 8; i++) k.play('pop', 15.8 + i * 0.06, { f: 420 + (i % 3) * 60, gain: 0.35, pan: ((i % 3) / 2 - 0.5), minor: true });
    koto(16.32, 'A4', 0.9, 0.1); koto(16.44, 'D5', 0.8, 0); card(16.3);
    // recipe
    k.play('impact', 18.15, { gain: 0.8 }); k.play('neon', 18.17, { dur: 0.3, gain: 0.5 }); koto(18.7, 'D4', 0.8, -0.2); card(18.68);
    k.play('whoosh', 19.9, { dur: 0.9, gain: 0.4, pan: 0.6 }); for (let i = 0; i < 4; i++) k.play('pop', 20.0 + i * 0.12, { f: 500, gain: 0.3, pan: 0.5, minor: true });
    koto(20.45, 'A4', 0.8, 0.3); card(20.42);
    k.play('impact', 22.02, { gain: 1.2 }); glowS(22.05, 1.4, 0); ['D4', 'A4', 'D5', 'E5', 'A5'].forEach((n, i) => koto(22.05 + i * 0.06, n, 1, (i - 2) * 0.2));
    k.play('pop', 23.15, { f: 300, gain: 0.5 }); sealP(23.45, 1, 0.4); koto(23.47, 'Bb3', 0.8, 0.3, false, true);
    koto(24.0, 'G4', 0.9, -0.2); koto(24.1, 'D5', 0.8, -0.1); card(24.0);
    // blink
    koto(26.15, 'A4', 0.9, 0, false, true); card(26.15);
    koto(28.0, 'D4', 0.7, 0); for (let i = 0; i < 5; i++) k.play('pop', 28.85 + i * 0.1, { f: 560 + i * 40, gain: 0.3, pan: 0.2, minor: true });
    for (let i = 0; i < 3; i++) k.play('tock', 30.1 + i * 0.5, { f: 700, gain: 0.35, pan: -0.5, minor: true });
    koto(30.75, 'Eb4', 0.8, -0.2); card(30.72);
    k.play('roller', 32.25, { dur: 0.5, gain: 0.8 }); k.play('tock', 32.75, { f: 420, gain: 0.6 });
    k.play('whoosh', 32.95, { dur: 1.3, gain: 0.7, top: 1800 }); k.noise(33.0, { dur: 1.2, color: 'pink', filter: 'lowpass', f: 900, gain: 0.12, a: 0.3 });
    k.play('impact', 34.28, { gain: 1.3 }); glowS(34.3, 1.5, 0); ['D5', 'A5', 'D6'].forEach((n, i) => koto(34.3 + i * 0.05, n, 1, (i - 1) * 0.3));
    k.play('roller', 35.55, { dur: 0.6, gain: 0.8 }); k.play('thud', 36.15, { f: 120, gain: 0.7 }); sealP(36.05, 0.8, 0.4);
    k.tone(36.3, { f: [[0, k.hz('E5')], [0.8, k.hz('A3')]], dur: 0.9, gain: 0.05, verb: 0.3 }); koto(37.05, 'D3', 0.9, 0);
    // codes
    glowS(38.5, 0.8, -0.3); koto(39.1, 'D4', 0.8, 0); koto(39.2, 'A4', 0.7, 0.1); card(39.1);
    k.play('impact', 41.02, { gain: 1.2 }); ['D3', 'A3', 'D4', 'G4'].forEach((n, i) => koto(41.04 + i * 0.03, n, 1.0, (i - 1.5) * 0.2)); k.play('paper', 41.8, { dur: 0.15, gain: 0.3, minor: true });
    [0, 1, 2].forEach((i) => { k.play('paper', 43.45 + i * 0.3, { dur: 0.15, gain: 0.3, minor: true }); sealP(43.5 + i * 0.3, 0.5, 0.3, true);
      CODES[i].forEach((o) => { for (let rep = 0; rep < 2; rep++) { const tt = 43.45 + rep * 1.6 + o; if (tt > 43.45 + i * 0.3 && tt < 45.5) k.play('blip', tt, { f: ['A5', 'D6', 'E6'][i], dur: 0.06, gain: 0.5, pan: -0.4, minor: true }); } }); });
    koto(44.82, 'G4', 0.9, 0); koto(44.92, 'D5', 0.8, 0.1); card(44.82);
    k.play('paper', 45.7, { dur: 0.15, gain: 0.3, minor: true });
    for (let rep = 0; rep < 2; rep++) { const tt = 45.7 + rep * 2.2 + 0.25; k.play('blip', tt, { f: 'A5', dur: 0.12, gain: 0.6, pan: 0.4 }); }
    k.play('paper', 47.82, { dur: 0.15, gain: 0.3, minor: true });
    k.play('blip', 48.4, { f: 'E6', dur: 0.08, gain: 0.6, pan: -0.4 }); k.play('blip', 49.3, { f: 'E6', dur: 0.08, gain: 0.5, pan: -0.4 });
    sealP(48.9, 1, 0.4); k.play('success', 48.92, { f: 'D6', gain: 0.4 });
    // ending
    koto(50.95, 'D5', 0.9, 0); koto(51.07, 'A4', 0.8, 0.1, true); card(50.95);
    koto(52.05, 'G4', 0.7, -0.1); koto(52.36, 'Eb4', 0.7, 0.1, true); card(52.36);
    sealP(53.3, 1, 0.5); glowS(53.3, 1, 0); ['D3', 'A3', 'D4', 'G4', 'A4'].forEach((n, i) => koto(53.35 + i * 0.07, n, 0.85 - i * 0.08, (i - 2) * 0.2));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
