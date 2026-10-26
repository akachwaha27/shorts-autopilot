// ================= Ukiyo-e Woodblock, vertical 1080x1920: "How did old Japan smell what time it was?" (incense clocks) =================
(function () {
  const W = 1080, HH = 1920;
  const FONT = '"Noto Serif JP","Noto Serif CJK JP",serif';
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael) ----------
  const BEATS = [
    { id: 'hook',    s: 0.25,  e: 3.79,  w: { how: 0.25, old: 1.43, japan: 1.68, smell: 2.41, time: 3.1 } },
    { id: 'nogears', s: 4.34,  e: 7.74,  w: { no: 4.34, gears: 4.53, ticking: 5.17, just: 6.36, box: 6.89, ash: 7.42 } },
    { id: 'stamp',   s: 8.29,  e: 16.03, w: { first: 8.29, smoothed: 8.9, flat: 9.98, pressed: 10.74, stamp: 11.24, left: 12.81, groove: 13.23, maze: 14.1, snakes: 14.69, forth: 15.66 } },
    { id: 'powder',  s: 16.58, e: 20.36, w: { filled: 16.81, incense: 17.93, powder: 18.34, one: 18.99, trail: 19.94 } },
    { id: 'ember',   s: 20.91, e: 26.16, w: { light: 20.91, end: 21.64, ember: 22.74, crawls: 23.07, maze: 24.12, steady: 25.35, speed: 25.79 } },
    { id: 'clever',  s: 26.71, e: 36.78, w: { clever: 27.3, marks: 28.94, trail: 29.91, switched: 30.81, different: 31.45, incense: 31.97, smell: 33.52, changed: 34.43, knew: 35.39, more: 35.66, passed: 36.38 } },
    { id: 'numbers', s: 37.33, e: 41.58, w: { twelve: 38.71, hours: 39.14, some: 40.06, lasted: 40.35, month: 41.22 } },
    { id: 'alarm',   s: 42.13, e: 46.1,  w: { dropped: 42.72, ball: 43.74, tray: 44.78, alarm: 45.66 } },
    { id: 'end',     s: 46.65, e: 49.43, w: { what: 46.79, time: 47.07, room: 47.93, smell: 48.22, now: 49.21 } },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scene changes: 'pan' = the emaki scroll unrolls right-to-left (kasumi cloud at the seam); 'mist' = a gold mist bank sweeps down
  const TR = [
    { from: 0, to: 1, kind: 'pan', a: 3.85, b: 4.33 },
    { from: 1, to: 2, kind: 'mist', a: 7.74, b: 8.3 },
    { from: 2, to: 3, kind: 'pan', a: 26.16, b: 26.7 },
    { from: 3, to: 4, kind: 'pan', a: 36.8, b: 37.3 },
    { from: 4, to: 5, kind: 'pan', a: 41.6, b: 42.12 },
    { from: 5, to: 6, kind: 'mist', a: 46.1, b: 46.64 },
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

  // ---------- the maze trail (seal pattern pressed into the ash), top-down ----------
  const MZ = (() => {
    const pts = [], rows = 7, x0 = 250, x1 = 830, y0 = 655, dy = 101;
    for (let i = 0; i < rows; i++) { const y = y0 + i * dy; if (i % 2 === 0) { pts.push([x0, y], [x1, y]); } else { pts.push([x1, y], [x0, y]); } }
    const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    return { pts, cum, L: cum[cum.length - 1] };
  })();
  const mzAt = (u) => { const d = cl(u) * MZ.L; for (let i = 1; i < MZ.pts.length; i++) if (MZ.cum[i] >= d) { const f = (d - MZ.cum[i - 1]) / (MZ.cum[i] - MZ.cum[i - 1] || 1), a = MZ.pts[i - 1], b = MZ.pts[i]; return [[a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f], i]; } return [MZ.pts[MZ.pts.length - 1], MZ.pts.length]; };
  const mzPath = (u0, u1) => { const p = new Path2D(); const [a, ia] = mzAt(u0), [b, ib] = mzAt(u1); p.moveTo(a[0], a[1]); for (let i = ia; i < ib; i++) p.lineTo(MZ.pts[i][0], MZ.pts[i][1]); p.lineTo(b[0], b[1]); return p; };
  const ember = (c, x, y, s, t) => {
    const fl = 1 + Math.sin(t * 23) * 0.12 + Math.sin(t * 37) * 0.08;
    const g = c.createRadialGradient(x, y, 0, x, y, s * 2.6 * fl); g.addColorStop(0, 'rgba(255,210,120,0.95)'); g.addColorStop(0.3, 'rgba(232,92,40,0.8)'); g.addColorStop(1, 'rgba(196,67,45,0)');
    c.fillStyle = g; c.beginPath(); c.arc(x, y, s * 2.6 * fl, 0, 7); c.fill();
    c.fillStyle = C.red; c.beginPath(); c.arc(x, y, s * 0.7, 0, 7); c.fill(); c.strokeStyle = C.key; c.lineWidth = 2; c.stroke();
  };

  // ======================= SCENES (each draws its own full background in a 1080x1920 frame) =======================
  // 0: hook, a moonlit print: Fuji, sea, an incense box with smoke rising
  const scHook = (c, t, end) => {
    nightSky(c, 1450);
    moon(c, 250, 980, 120);
    cloudBand(c, 60, 1100, 380); cloudBand(c, 640, 700, 360);
    fuji(c, 620, 1450, 1110, 430);
    seaBand(c, 1450, t);
    // rocky shore with the incense box
    const rock = new Path2D(); rock.moveTo(420, 1650); rock.quadraticCurveTo(520, 1500, 760, 1480); rock.quadraticCurveTo(980, 1470, 1100, 1560); rock.lineTo(1100, 1700); rock.lineTo(420, 1700); rock.closePath();
    fillKey(c, rock, vbok(c, 1470, 1700, [[0, C.green], [1, '#3e5a3a']]), 3);
    const bp = end ? 1 : E.out(S(t, 0.25, 0.9));
    c.save(); c.globalAlpha = bp; boxFront(c, 780, 1450, 260, t, true); c.restore();
    smoke(c, 733, 1395, (end ? 400 : 560) * E.out(S(t, end ? 0 : 0.5, end ? 0.01 : 2.5)) + 0.001, t, '#c9d6d6', 30, -0.18);
  };
  // shoji room (scenes 1 and 5)
  const room = (c, t) => {
    c.fillStyle = vbok(c, 0, 1360, [[0, '#e9dcbc'], [1, '#f2e8d0']]); c.fillRect(0, 0, W, 1360);
    c.strokeStyle = C.key; c.lineWidth = 3;
    for (let x = 0; x <= W; x += 120) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, 1360); c.stroke(); }
    for (let y = 60; y < 1360; y += 150) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
    const post = (x) => { const p = new Path2D(); p.rect(x - 22, 0, 44, 1360); fillKey(c, p, vbok(c, 0, 1360, [[0, '#94503a'], [1, '#5e2c1e']]), 2.4); };
    post(30); post(1050);
    const beam = new Path2D(); beam.rect(0, 1330, W, 40); fillKey(c, beam, '#5e2c1e', 2.4);
    c.fillStyle = vbok(c, 1360, HH, [[0, '#c9b678'], [1, '#9c8a52']]); c.fillRect(0, 1370, W, HH - 1370);
    c.strokeStyle = 'rgba(27,34,54,0.25)'; c.lineWidth = 1.4; for (let y = 1385; y < HH; y += 12) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
    c.fillStyle = C.green; c.fillRect(0, 1640, W, 22); c.strokeStyle = C.key; c.lineWidth = 2.4; c.strokeRect(-4, 1640, W + 8, 22);
  };
  // 1: no gears, no ticking, just a box of ash
  const scNoGears = (c, t) => {
    room(c, t);
    const fade = 1 - 0.6 * S(t, 6.2, 6.6);
    c.save(); c.globalAlpha = fade * E.out(S(t, 4.4, 4.7));
    gear(c, 300, 740, 115, t * 0.8, C.ochre); gear(c, 430, 900, 60, -t * 1.5 + 0.2, C.grey);
    c.restore();
    if (t > 4.4) { c.save(); c.globalAlpha = fade; tanzaku(c, 'gears', 300, 1000, S(t, 4.45, 4.65)); c.restore(); }
    c.save(); c.globalAlpha = fade * E.out(S(t, 5.0, 5.3));
    const face = new Path2D(); face.arc(780, 740, 125, 0, 7); fillKey(c, face, vbok(c, 615, 865, [[0, '#f7f0de'], [1, '#e2d2a8']]), 3);
    c.strokeStyle = C.key; c.lineCap = 'round'; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; c.lineWidth = i % 3 ? 3 : 6; c.beginPath(); c.moveTo(780 + Math.cos(a) * 100, 740 + Math.sin(a) * 100); c.lineTo(780 + Math.cos(a) * 115, 740 + Math.sin(a) * 115); c.stroke(); }
    const sa = -Math.PI / 2 + Math.floor(t * 2) * 0.105; c.lineWidth = 7; c.beginPath(); c.moveTo(780, 740); c.lineTo(780 + Math.cos(-1.1) * 60, 740 + Math.sin(-1.1) * 60); c.stroke();
    c.lineWidth = 4; c.strokeStyle = C.red; c.beginPath(); c.moveTo(780, 740); c.lineTo(780 + Math.cos(sa) * 95, 740 + Math.sin(sa) * 95); c.stroke();
    c.restore();
    if (t > 5.0) { c.save(); c.globalAlpha = fade; tanzaku(c, 'ticking', 780, 1000, S(t, 5.05, 5.25)); c.restore(); }
    seal(c, 400, 640, 110, 'x', S(t, 4.6, 4.75) * fade, -0.08);
    seal(c, 880, 640, 110, 'x', S(t, 5.25, 5.4) * fade, 0.06);
    // the box drops onto the tatami
    const bp = S(t, 6.75, 7.05); if (bp > 0) { const y = H.lerp(1000, 1420, E.in(bp)); boxFront(c, 540, y, 480, t, false); }
    tanzaku(c, 'ash', 540, 1560, S(t, 7.3, 7.5), 52);
  };
  // 2: top-down close-up of the box: smooth the ash, press the stamp, the groove, the powder, the ember
  const ASHL = {};
  const ashBed = (k) => { // static ash texture: k=0 lumpy, k=1 smoothed
    if (ASHL[k]) return ASHL[k]; const L = H.layer(760, 760), a = L.getContext('2d');
    a.fillStyle = C.ash; a.fillRect(0, 0, 760, 760); const r = H.rng(13 + k);
    for (let i = 0; i < (k ? 500 : 140); i++) { const x = r.range(0, 760), y = r.range(0, 760);
      if (k) { a.fillStyle = r() < 0.5 ? 'rgba(255,252,240,0.25)' : 'rgba(120,110,95,0.12)'; a.fillRect(x, y, r.range(1, 3), r.range(1, 3)); }
      else { const rr = r.range(18, 46); a.fillStyle = 'rgba(150,140,120,0.35)'; a.beginPath(); a.ellipse(x + 6, y + 8, rr, rr * 0.7, 0, 0, 7); a.fill(); a.fillStyle = 'rgba(245,240,226,0.9)'; a.beginPath(); a.ellipse(x, y, rr, rr * 0.7, 0, 0, 7); a.fill(); a.strokeStyle = 'rgba(27,34,54,0.35)'; a.lineWidth = 1.4; a.stroke(); } }
    ASHL[k] = L; return L;
  };
  const scBox = (c, t) => {
    // table: dark wood plank, top-down
    c.fillStyle = vbok(c, 0, HH, [[0, '#6a3524'], [0.5, C.hull], [1, '#4a2216']]); c.fillRect(0, 0, W, HH);
    c.strokeStyle = 'rgba(27,34,54,0.35)'; c.lineWidth = 2; for (let x = 20; x < W; x += 34) { c.beginPath(); for (let y = 0; y <= HH; y += 40) c.lineTo(x + Math.sin(y * 0.01 + x) * 6, y); c.stroke(); }
    c.strokeStyle = C.key; c.lineWidth = 3; [270, 540, 810].forEach((x) => { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, HH); c.stroke(); });
    // camera: zoom in on the stamp, back out, then follow the ember
    const [ep] = mzAt(emberU(t));
    let z = H.lerp(1.12, 1, E.inOut(S(t, 7.9, 9.0)));
    z *= H.lerp(1, 1.1, E.inOut(S(t, 10.6, 11.3))) / H.lerp(1, 1.1, E.inOut(S(t, 12.2, 12.9)));
    const zf = E.inOut(S(t, 22.3, 23.4)) * (1 - E.inOut(S(t, 25.3, 26.1)));
    z *= H.lerp(1, 1.45, zf);
    const fx = H.lerp(540, ep[0], zf), fy = H.lerp(960, ep[1], zf);
    c.save(); c.translate(540, 960); c.scale(z, z); c.translate(-fx, -fy);
    // box frame
    const fr = new Path2D(); fr.rect(120, 540, 840, 840); fillKey(c, fr, vbok(c, 540, 1380, [[0, '#5a4132'], [0.5, C.lacq], [1, '#2a1d17']]), 3.4);
    c.strokeStyle = C.red; c.lineWidth = 6; c.strokeRect(134, 554, 812, 812);
    c.strokeStyle = C.ochre; c.lineWidth = 2; c.strokeRect(146, 566, 788, 788);
    const bed = new Path2D(); bed.rect(160, 580, 760, 760);
    c.save(); c.clip(bed);
    c.drawImage(ashBed(1), 160, 580);
    // lumpy ash ahead of the spatula
    const sp = E.inOut(S(t, 8.8, 10.1)), sy = H.lerp(560, 1360, sp);
    if (sp < 1) { c.save(); c.beginPath(); c.rect(160, sy, 760, 1340 - sy); c.clip(); c.drawImage(ashBed(0), 160, 580); c.restore(); }
    // groove (appears when the stamp lifts)
    const gp = S(t, 12.3, 12.6);
    if (gp > 0) {
      const g = mzPath(0, 1); c.lineCap = 'square'; c.lineJoin = 'miter';
      c.globalAlpha = gp; c.strokeStyle = C.key; c.lineWidth = 34; c.stroke(g); c.strokeStyle = '#8f877a'; c.lineWidth = 28; c.stroke(g); c.strokeStyle = '#a69e8f'; c.lineWidth = 14; c.stroke(g); c.globalAlpha = 1;
      // vermilion trace snaking back and forth
      const tp = S(t, 14.1, 15.95) * (1 - S(t, 16.4, 16.8));
      if (tp > 0 && t < 16.8) { c.save(); c.globalAlpha = 1 - S(t, 16.4, 16.8); c.strokeStyle = C.red; c.lineWidth = 8; c.lineCap = 'round'; c.stroke(mzPath(0, S(t, 14.1, 15.95))); c.restore(); }
      // incense powder filling the groove
      const pp = E.inOut(S(t, 16.75, 18.7));
      if (pp > 0) { c.strokeStyle = '#7a4a2a'; c.lineWidth = 22; c.lineCap = 'butt'; c.stroke(mzPath(0, pp)); c.strokeStyle = 'rgba(170,110,60,0.8)'; c.lineWidth = 8; c.stroke(mzPath(0, pp));
        const r = H.rng(4); c.fillStyle = 'rgba(60,30,15,0.5)'; for (let i = 0; i < 260; i++) { const [q] = mzAt(r() * pp); c.fillRect(q[0] + r.range(-9, 9), q[1] + r.range(-9, 9), 2, 2); } }
      // burnt ash behind the ember
      const eu = emberU(t);
      if (eu > 0.001) { c.strokeStyle = '#ebe6da'; c.lineWidth = 20; c.lineCap = 'butt'; c.stroke(mzPath(0, eu)); c.strokeStyle = 'rgba(140,130,115,0.6)'; c.lineWidth = 2; c.setLineDash([4, 8]); c.stroke(mzPath(0, eu)); c.setLineDash([]); }
    }
    c.restore(); // bed clip
    keyline(c, bed, 2.6);
    // the spatula sweeping the ash flat
    if (sp > 0 && sp < 1) { const p = new Path2D(); p.rect(150, sy - 22, 780, 44); fillKey(c, p, vbok(c, sy - 22, sy + 22, [[0, '#e2c27a'], [1, '#b98d42']]), 2.6); const h = new Path2D(); h.rect(480, sy - 14, 320, 28); fillKey(c, h, C.hull, 2); }
    // the wooden stamp: comes down, presses, lifts away
    const sIn = E.out(S(t, 10.55, 11.2)), sOut = E.in(S(t, 12.15, 12.6));
    if (sIn > 0 && sOut < 1) {
      const k = H.lerp(1.35, 1, sIn) * (t > 11.2 && t < 11.45 ? 0.985 : 1) * H.lerp(1, 1.3, sOut), al = Math.min(sIn * 1.5, 1 - sOut);
      c.save(); c.globalAlpha = al; c.translate(540, 960 - sOut * 300); c.scale(k, k);
      c.fillStyle = 'rgba(27,34,54,0.35)'; c.fillRect(-360 + 22, -360 + 28, 720, 720);
      const blk = new Path2D(); blk.rect(-360, -360, 720, 720); fillKey(c, blk, vbok(c, -360, 360, [[0, '#c99a5c'], [0.5, '#b07b42'], [1, '#8d5a2c']]), 3.4);
      c.strokeStyle = 'rgba(80,45,20,0.45)'; c.lineWidth = 2.4; for (let i = 0; i < 16; i++) { c.beginPath(); for (let x = -350; x <= 350; x += 20) c.lineTo(x, -340 + i * 44 + Math.sin(x * 0.012 + i) * 8); c.stroke(); }
      const knob = new Path2D(); knob.arc(0, 0, 110, 0, 7); fillKey(c, knob, vbok(c, -110, 110, [[0, '#d65438'], [1, '#a8331f']]), 3);
      c.fillStyle = '#efe2c6'; c.font = `700 120px ${FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('香', 0, 6);
      c.restore();
    }
    // ember + smoke
    if (t > 20.85) {
      const eu = emberU(t), [q] = mzAt(eu), lp = E.back(S(t, 20.85, 21.2));
      smoke(c, q[0], q[1] - 6, 300 * S(t, 21.0, 22.0), t, '#c9d6d6', 40, 0.05, 0.9);
      ember(c, q[0], q[1], 16 * lp, t);
    }
    c.restore(); // camera
    // labels in screen space
    tanzaku(c, 'smooth the ash', 540, 1500, S(t, 8.85, 9.1) * (1 - S(t, 10.4, 10.6)), 52);
    tanzaku(c, 'press a stamp', 540, 1500, S(t, 11.1, 11.3) * (1 - S(t, 12.7, 12.9)), 52);
    cartouche(c, 'GROOVE', 540, 430, 100, S(t, 13.1, 13.35) * (1 - S(t, 13.85, 14.0)));
    cartouche(c, 'A MAZE', 540, 430, 100, S(t, 14.0, 14.25) * (1 - S(t, 16.3, 16.55)));
    cartouche(c, 'INCENSE POWDER', 540, 1520, 64, S(t, 17.85, 18.1) * (1 - S(t, 20.6, 20.85)));
    cartouche(c, 'ONE TRAIL', 540, 430, 100, S(t, 18.9, 19.15) * (1 - S(t, 20.6, 20.85)));
    cartouche(c, 'LIGHT ONE END', 540, 1520, 64, S(t, 20.8, 21.0) * (1 - S(t, 22.3, 22.5)));
    tanzaku(c, 'ember', 540, 1490, S(t, 22.65, 22.85) * (1 - S(t, 25.1, 25.3)), 56);
    cartouche(c, 'STEADY SPEED', 540, 1520, 72, S(t, 25.25, 25.45));
  };
  const emberU = (t) => (t < 22.6 ? 0 : Math.min(0.2, (t - 22.6) * 0.038));
  // 3: the clever part: the trail unrolled as a long column, marks, different incense, the smell changes
  const MARKS = [0.25, 0.5, 0.75], SEG = ['#c98a3a', '#6f8f4e', '#b4472f', '#7b4f7a'], HOURS = ['子', '丑', '寅'];
  const trailY = (u) => 1500 - u * 980;
  const emberV = (t) => 0.16 + (t - 26.7) * (0.09 / 7.73);
  const scClever = (c, t) => {
    nightSky(c, 1920);
    moon(c, 220, 700, 90);
    cloudBand(c, 40, 820, 340); cloudBand(c, 560, 1180, 300);
    // long lacquer stand with an ash bed
    const st = new Path2D(); st.rect(560, 470, 160, 1080); fillKey(c, st, vbok(c, 470, 1550, [[0, '#5a4132'], [1, '#2a1d17']]), 3);
    const bedp = new Path2D(); bedp.rect(585, 495, 110, 1030); fillKey(c, bedp, C.ash, 2.2);
    const recol = (i) => S(t, 31.4 + i * 0.13, 31.6 + i * 0.13);
    const ev = Math.min(emberV(t), 0.32);
    for (let i = 0; i < 4; i++) {
      const u0 = i * 0.25, u1 = (i + 1) * 0.25; if (u1 <= ev) continue; const ua = Math.max(u0, ev);
      const col = H.mix('#7a4a2a', SEG[i], recol(i));
      c.fillStyle = H.rgba(col); c.fillRect(625, trailY(u1), 30, trailY(ua) - trailY(u1));
      c.strokeStyle = C.key; c.lineWidth = 2; c.strokeRect(625, trailY(u1), 30, trailY(ua) - trailY(u1));
    }
    c.fillStyle = '#efe9dc'; c.fillRect(625, trailY(ev), 30, trailY(0) - trailY(ev)); c.strokeStyle = 'rgba(27,34,54,0.5)'; c.lineWidth = 2; c.strokeRect(625, trailY(ev), 30, trailY(0) - trailY(ev));
    // marks: small tablets across the trail + hour seals beside them (Edo hours were named after the zodiac animals)
    MARKS.forEach((m, i) => { const p = E.back(S(t, 28.85 + i * 0.16, 29.15 + i * 0.16)); if (p <= 0) return; const y = trailY(m);
      c.save(); c.translate(640, y); c.scale(p, p); const tb = new Path2D(); tb.rect(-48, -9, 96, 18); fillKey(c, tb, C.ochre, 2.2); c.restore();
      seal(c, 800, y, 84, HOURS[i], S(t, 28.9 + i * 0.16, 29.05 + i * 0.16), 0.04 * (i - 1)); });
    // smoke: its colour is the colour of the incense now burning
    const [y] = [trailY(ev)], segI = Math.min(3, Math.floor(ev / 0.25)), segF = (ev % 0.25);
    let col = H.mix('#c9d6d6', SEG[segI], recol(segI) * 0.75);
    if (segI >= 1 && segF < 0.012) col = H.mix(H.mix('#c9d6d6', SEG[segI - 1], 0.75), col, S(segF, 0, 0.012));
    if (t > 26.7) {
      smoke(c, 640, y - 6, Math.min(y - 520, 560), t, H.rgba(col), 60, -0.42);
      ember(c, 640, y, 18, t);
    }
    cartouche(c, 'THE CLEVER PART', 540, 400, 84, S(t, 27.1, 27.35) * (1 - S(t, 28.5, 28.7)));
    tanzaku(c, 'set marks', 880, trailY(0.5) + 70, S(t, 28.9, 29.1) * (1 - S(t, 31.2, 31.4)), 48);
    cartouche(c, 'NEW INCENSE', 360, 1590, 64, S(t, 31.35, 31.55) * (1 - S(t, 33.2, 33.4)));
    cartouche(c, 'THE SMELL', 540, 400, 92, S(t, 33.35, 33.55) * (1 - S(t, 35.4, 35.6)));
    cartouche(c, 'CHANGES', 360, 1590, 72, S(t, 34.3, 34.5) * (1 - S(t, 35.4, 35.6)));
    cartouche(c, 'TIME PASSED', 540, 400, 92, S(t, 35.5, 35.7));
    seal(c, 380, 1590, 150, '丑', S(t, 35.55, 35.72), -0.06);
  };
  // 4: the numbers: 12 hours (the sun crosses a dawn print), a whole month (a calendar of moons)
  const scNumbers = (c, t) => {
    c.fillStyle = vbok(c, 0, 1480, [[0, '#cfa76a'], [0.35, C.sky], [0.85, '#e7d8b4'], [1, '#efe5cc']]); c.fillRect(0, 0, W, 1480);
    const sk = c.createLinearGradient(0, 0, 0, 300); sk.addColorStop(0, 'rgba(46,62,84,0.85)'); sk.addColorStop(1, 'rgba(90,100,110,0)'); c.fillStyle = sk; c.fillRect(0, 0, W, 300);
    cloudBand(c, 80, 1250, 300); cloudBand(c, 700, 1300, 280);
    fuji(c, 540, 1480, 1300, 300);
    seaBand(c, 1480, t);
    // the sun crosses the sky in a half-day arc
    const sp = E.inOut(S(t, 38.6, 39.9)), sf = 1 - S(t, 40.0, 40.35);
    if (sp > 0 && sf > 0) { const a = Math.PI * (1 - sp), sx = 540 + Math.cos(a) * 400, sy = 1300 - Math.sin(a) * 520; c.save(); c.globalAlpha = sf; const sn = new Path2D(); sn.arc(sx, sy, 70, 0, 7); c.fillStyle = C.red; c.fill(sn); keyline(c, sn, 2.4);
      c.strokeStyle = C.red; c.lineWidth = 5; c.setLineDash([14, 14]); c.beginPath(); c.arc(540, 1300, 400, Math.PI, Math.PI + Math.PI * sp, false); c.stroke(); c.setLineDash([]); c.restore(); }
    // a whole month: 30 moons
    for (let i = 0; i < 30; i++) { const p = E.back(S(t, 40.3 + i * 0.028, 40.5 + i * 0.028)); if (p <= 0) continue; const col = i % 6, row = Math.floor(i / 6);
      c.save(); c.translate(215 + col * 130, 910 + row * 88); c.scale(p, p); moon(c, 0, 0, 36, (i / 29)); c.restore(); }
    cartouche(c, '12 HOURS', 540, 470, 130, S(t, 38.6, 38.8));
    cartouche(c, '1 MONTH', 540, 730, 130, S(t, 41.1, 41.3));
  };
  // 5: the alarm: the ember burns through a thread, a ball drops into a tray
  const scAlarm = (c, t) => {
    room(c, t);
    // shelf
    const top = new Path2D(); top.moveTo(110, 960); top.lineTo(970, 960); top.lineTo(940, 920); top.lineTo(140, 920); top.closePath(); fillKey(c, top, C.ash, 2.4);
    const fr = new Path2D(); fr.rect(110, 960, 860, 56); fillKey(c, fr, vbok(c, 960, 1016, [[0, '#94503a'], [1, '#5e2c1e']]), 2.6);
    const legs = new Path2D(); legs.rect(150, 1016, 34, 330); legs.rect(896, 1016, 34, 330); fillKey(c, legs, '#5e2c1e', 2.4);
    // trail along the shelf
    const ex = H.lerp(200, 600, S(t, 41.9, 43.25)) + (t > 43.25 ? (t - 43.25) * 40 : 0);
    c.fillStyle = '#7a4a2a'; c.fillRect(ex, 932, 880 - ex, 16); c.fillStyle = '#efe9dc'; c.fillRect(170, 932, ex - 170, 16); c.strokeStyle = C.key; c.lineWidth = 2; c.strokeRect(170, 932, 710, 16);
    // thread + ball
    const cut = t >= 43.25, fall = E.in(S(t, 43.25, 43.74)), bounce = t > 43.74 ? Math.abs(Math.sin((t - 43.74) * 9)) * 30 * Math.exp(-(t - 43.74) * 5) : 0;
    const by = cut ? H.lerp(1180, 1440, fall) - bounce : 1180;
    c.strokeStyle = '#c4432d'; c.lineWidth = 4;
    c.beginPath(); c.moveTo(600, 920); c.lineTo(600, 960); c.stroke();
    if (!cut) { c.beginPath(); c.moveTo(600, 960); c.lineTo(600, by - 34); c.stroke(); }
    // tray
    const tr = new Path2D(); tr.ellipse(600, 1475, 160, 36, 0, 0, 7); fillKey(c, tr, vbok(c, 1440, 1510, [[0, '#e8c97a'], [1, '#a77b2c']]), 3);
    const ins = new Path2D(); ins.ellipse(600, 1468, 125, 22, 0, 0, 7); c.fillStyle = '#c99a3c'; c.fill(ins); keyline(c, ins, 1.6);
    const ball = new Path2D(); ball.arc(600, by, 34, 0, 7); fillKey(c, ball, vbok(c, by - 34, by + 34, [[0, '#f0d58a'], [1, '#a77b2c']]), 2.6);
    // sound rings
    const rp = S(t, 43.74, 45.2); if (rp > 0 && rp < 1) for (let k = 0; k < 3; k++) { const u = (rp * 1.5 + k * 0.33) % 1; c.strokeStyle = H.rgba(C.key, 0.8 * (1 - u)); c.lineWidth = 5; c.beginPath(); c.ellipse(600, 1460, 190 + u * 180, 50 + u * 60, 0, Math.PI * 1.05, Math.PI * 1.95); c.stroke(); }
    if (t > 42.1) { smoke(c, ex, 926, 260, t, '#c9d6d6', 20, -0.1, 0.85); ember(c, ex, 940, 14, t); }
    tanzaku(c, 'ball', 380, 1150, S(t, 42.6, 42.8) * (1 - S(t, 43.3, 43.5)), 52);
    tanzaku(c, 'tray', 860, 1440, S(t, 44.65, 44.85), 52);
    cartouche(c, 'ALARM!', 540, 600, 120, S(t, 45.55, 45.75));
    seal(c, 910, 410, 110, '鐘', S(t, 45.75, 45.9), 0.08);
  };
  // 6: the ending: back to the moonlit print; the question loops to the hook
  const scEnd = (c, t) => {
    scHook(c, t, true);
    cartouche(c, 'WHAT TIME', 540, 520, 110, S(t, 46.7, 46.9));
    cartouche(c, 'does YOUR room', 540, 700, 64, S(t, 47.85, 48.05), '#f1e8d2');
    cartouche(c, 'smell like?', 540, 830, 64, S(t, 48.15, 48.35), '#f1e8d2');
    seal(c, 880, 1000, 120, '香', S(t, 49.2, 49.35), 0.06);
  };
  const SCENES = [scHook, scNoGears, scBox, scClever, scNumbers, scAlarm, scEnd];
  const hookText = (c, t) => {
    if (t > 4.3) return; const f = 1 - S(t, 3.85, 4.2); c.save(); c.globalAlpha = f;
    seal(c, 540, 650, 220, '?', S(t, 0.25, 0.42) * (1 - S(t, 2.1, 2.3)), -0.06);
    cartouche(c, 'OLD JAPAN', 540, 410, 86, S(t, 1.3, 1.5), '#f1e8d2');
    cartouche(c, 'SMELL', 540, 650, 150, S(t, 2.25, 2.45));
    cartouche(c, 'THE TIME?', 540, 905, 120, S(t, 2.95, 3.15));
    seal(c, 890, 1060, 110, '香', S(t, 3.5, 3.65), 0.07); c.restore();
  };
  const header = (c, t) => {
    const p = S(t, 4.3, 4.7) * (1 - S(t, 46.1, 46.4)); if (p <= 0) return;
    cartouche(c, 'THE INCENSE CLOCK', 520, 230, 50, p);
    seal(c, 920, 230, 70, '香', p, 0.05);
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
    // which scene(s) are on screen
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
    hookText(c, t);
    header(c, t);
    // mist bands at the top and bottom edge of the scroll
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

  // ---------- SOUND: a woodblock workshop and an emaki scroll, under the narration ----------
  function scoreSound(k) {
    const D = DURATION;
    const koto = (t, n, g, p, minor, bend) => { const f = k.hz(n);
      k.tone(t, { f: bend ? [[0, f], [0.08, f], [0.5, f * 0.89]] : [[0, f * 1.012], [0.05, f]], type: 'sawtooth', dur: 1.3, gain: 0.05 * g, a: 0.002, filter: 'lowpass', f2: [[0, 2600], [0.25, 900], [1.3, 500]], q: 1.5, pan: p, verb: 0.3, minor });
      k.tone(t, { f, type: 'triangle', dur: 1.0, gain: 0.06 * g, a: 0.002, pan: p, minor }); };
    const sealP = (t, g, p, minor) => { k.play('stamp', t, { gain: 0.6 * g, pan: p, minor }); k.noise(t + 0.01, { dur: 0.12, color: 'pink', filter: 'bandpass', f: 1100, q: 0.7, gain: 0.08 * g, a: 0.01, pan: p, minor }); };
    const chisel = (t, g, p) => k.withMinor(() => { k.noise(t, { dur: 0.03, filter: 'bandpass', f: 1600, q: 2, gain: 0.3 * g, a: 0.001, pan: p }); k.tone(t, { f: 240, dur: 0.05, gain: 0.08 * g, pan: p }); });
    const clack = (t, g, p) => { k.noise(t, { dur: 0.06, filter: 'bandpass', f: 1250, q: 6, gain: 0.5 * g, a: 0.001, pan: p }); k.noise(t, { dur: 0.015, filter: 'highpass', f: 2500, gain: 0.15 * g, pan: p }); };
    const swish = (t, dur, g, p) => k.noise(t, { dur: dur + 0.15, color: 'pink', filter: 'bandpass', f: [[0, 400], [dur * 0.6, 1100], [dur + 0.15, 500]], q: 1.1, gain: 0.08 * g, a: dur * 0.5, pan: p, minor: true });
    const unroll = (t, dur) => { k.noise(t, { dur, color: 'brown', filter: 'bandpass', f: [[0, 160], [dur * 0.5, 300], [dur, 160]], q: 1, gain: 0.18, a: dur * 0.4 }); k.play('paper', t + 0.1, { dur: dur - 0.2, gain: 0.75 }); };
    const crackle = (t0, t1, g, p) => { const r = H.rng(Math.round(t0 * 100)); k.withMinor(() => { for (let t = t0; t < t1; t += 0.05 + r() * 0.12) k.noise(t, { dur: 0.012, filter: 'highpass', f: 3000 + r() * 3000, gain: (0.08 + r() * 0.1) * g, a: 0.001, pan: p + (r() - 0.5) * 0.2 }); }); };
    const card = (a, b) => a + (b - a) / 1.5;

    k.bed('room', 0, D, { gain: 0.3 });
    k.noise(0, { dur: D, color: 'pink', filter: 'lowpass', f: 450, gain: 0.03, a: 1, hold: D - 2, minor: true });
    TR.forEach((x) => { if (x.kind === 'pan') unroll(x.a, x.b - x.a); else { k.play('whoosh', x.a, { dur: x.b - x.a, gain: 0.45 }); k.play('paper', x.a + 0.1, { dur: 0.35, gain: 0.4, minor: true }); } });

    // hook
    swish(0.5, 1.6, 1, 0.4);
    sealP(0.42, 0.9, 0); koto(0.3, 'D4', 0.9, -0.2); koto(0.42, 'A4', 0.7, -0.1);
    koto(card(1.3, 1.5), 'G4', 0.8, 0.1); k.play('paper', card(1.3, 1.5), { dur: 0.12, gain: 0.3, minor: true });
    koto(card(2.25, 2.45), 'D5', 1, 0); koto(card(2.25, 2.45) + 0.12, 'A4', 0.8, 0.1, true);
    koto(card(2.95, 3.15), 'Eb4', 0.9, -0.1, true);
    sealP(3.65, 0.9, 0.5);
    // no gears, no ticking, a box of ash
    for (let i = 0; i < 4; i++) k.play('tock', 4.45 + i * 0.07, { f: 380 + (i % 2) * 60, gain: 0.45, pan: -0.4, minor: true });
    sealP(4.75, 1, -0.3); koto(4.78, 'Bb3', 0.8, -0.3, false, true);
    for (let i = 0; i < 4; i++) k.play('tick', 5.05 + i * 0.12, { f: 3600, gain: 0.6, pan: 0.4, minor: true });
    sealP(5.4, 1, 0.4); koto(5.43, 'Eb4', 0.7, 0.3, false, true);
    k.play('thud', 7.05, { f: 110, gain: 0.7 }); clack(7.06, 0.8, 0);
    k.play('paper', 7.37, { dur: 0.15, gain: 0.3, minor: true });
    // smoothing, stamping, groove, maze
    k.play('stroke', 8.8, { material: 'brush', dur: 1.3, gain: 0.9, minor: true });
    k.play('press', 11.2, { gain: 0.9 }); clack(11.22, 0.5, 0);
    k.play('paper', 12.15, { dur: 0.4, gain: 0.5 });
    koto(card(13.1, 13.35), 'D4', 0.9, 0); koto(card(13.1, 13.35) + 0.1, 'A4', 0.8, 0.1);
    koto(card(14.0, 14.25), 'G4', 0.8, -0.1);
    k.play('stroke', 14.1, { material: 'brush', dur: 1.85, gain: 0.8, minor: true });
    // powder pours in, one trail
    k.noise(16.75, { dur: 1.95, filter: 'highpass', f: 4200, gain: 0.07, a: 0.2, minor: true }); crackle(16.8, 18.6, 0.6, 0);
    koto(card(17.85, 18.1), 'A4', 0.6, 0.2);
    koto(card(18.9, 19.15), 'D5', 0.9, 0); koto(card(18.9, 19.15) + 0.14, 'G4', 0.7, -0.1);
    // light it, the ember crawls
    k.play('riser', 20.6, { dur: 0.3, gain: 0.35 }); k.noise(20.88, { dur: 0.35, color: 'pink', filter: 'bandpass', f: [[0, 600], [0.35, 1800]], q: 0.8, gain: 0.15, a: 0.02 });
    crackle(20.95, 26.1, 0.8, -0.2);
    k.play('paper', card(20.8, 21.0), { dur: 0.12, gain: 0.3, minor: true });
    swish(22.3, 1.0, 0.8, -0.2);
    koto(card(25.25, 25.45), 'G4', 0.8, 0); koto(card(25.25, 25.45) + 0.1, 'D5', 0.7, 0.1);
    // the clever part
    k.play('impact', 27.2, { gain: 0.6 }); ['D3', 'A3', 'D4', 'A4'].forEach((n, i) => koto(27.22 + i * 0.05, n, 0.9, (i - 1.5) * 0.2));
    [0, 1, 2].forEach((i) => { k.play('tock', 28.95 + i * 0.16, { f: 520 + i * 60, gain: 0.55, pan: 0.3, minor: true }); sealP(29.05 + i * 0.16, 0.5, 0.4, true); });
    ['D4', 'G4', 'A4', 'D5'].forEach((n, i) => koto(31.55 + i * 0.13, n, 0.8, (i - 1.5) * 0.25));
    crackle(26.7, 36.7, 0.6, 0.1);
    swish(33.3, 0.6, 1, -0.3);
    sealP(34.45, 0.8, 0.2); koto(34.47, 'A4', 0.9, 0); koto(34.6, 'D5', 0.8, 0.1);
    sealP(35.72, 1.2, -0.3); k.play('ding', 35.75, { f: 'A5', gain: 0.35 });
    // numbers
    for (let t = 38.65; t < 39.85; t += 0.1) chisel(t, 0.7, 0);
    k.play('impact', 38.72, { gain: 1.2 }); k.play('thud', 38.72, { f: 62, gain: 0.9 }); koto(38.75, 'D4', 1, 0); koto(38.8, 'A4', 0.9, 0.1);
    for (let i = 0; i < 30; i += 2) k.play('tick', 40.3 + i * 0.028, { f: 4800 + i * 40, gain: 0.45, pan: ((i % 6) / 5 - 0.5) * 0.8, minor: true });
    k.play('impact', 41.22, { gain: 1.1 }); clack(41.22, 1, 0); ['D3', 'A3', 'D4', 'G4'].forEach((n, i) => koto(41.24 + i * 0.03, n, 1.0, (i - 1.5) * 0.2));
    // alarm
    crackle(42.1, 43.3, 0.8, 0);
    k.play('tick', 43.25, { f: 2600, gain: 0.7 });
    k.play('swish', 43.3, { dur: 0.4, gain: 0.4 });
    k.play('thud', 43.74, { f: 180, gain: 0.5 }); k.play('bell', 43.74, { f: 'E6', gain: 1.0 }); k.play('ding', 43.76, { f: 'B6', gain: 0.6 });
    k.play('ding', 43.95, { f: 'E6', gain: 0.3, minor: true });
    k.play('paper', 44.7, { dur: 0.12, gain: 0.3, minor: true });
    sealP(45.9, 1, 0.5); k.play('bell', 45.66, { f: 'A6', gain: 0.6 });
    // ending: the question loops back to the hook
    koto(card(46.7, 46.9), 'D5', 0.9, 0); koto(card(46.7, 46.9) + 0.12, 'A4', 0.8, 0.1, true);
    koto(card(47.85, 48.05), 'G4', 0.7, -0.1); koto(card(48.15, 48.35), 'Eb4', 0.7, 0.1, true);
    sealP(49.35, 1, 0.5); ['D3', 'A3', 'D4', 'G4', 'A4'].forEach((n, i) => koto(49.4 + i * 0.07, n, 0.85 - i * 0.08, (i - 2) * 0.2));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
