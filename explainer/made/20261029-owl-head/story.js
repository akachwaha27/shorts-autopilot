// ================= Ukiyo-e Woodblock, vertical 1080x1920: "How can an owl turn its head 270 degrees?" (tube eyes, 14 neck bones, wide bony tunnels, blood pools) =================
(function () {
  const W = 1080, HH = 1920;
  const FONT = '"Noto Serif JP","Noto Serif CJK JP",serif';
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael) ----------
  const BEATS = [
    { id: 'hook',   s: 0.25,  e: 5.72,  w: { black: 0.58, owls: 1.83, spin: 2.23, heads: 3.13, n270: 3.62, degrees: 3.92, how: 5.17 } },
    { id: 'eyes',   s: 6.27,  e: 15.44, w: { eyes: 7.23, cant: 7.58, move: 7.93, tubes: 9.91, locked: 10.54, skull: 11.6, look: 12.81, whole: 14.11, head: 14.48, turn: 15.15 } },
    { id: 'bones',  s: 15.99, e: 24.86, w: { extra: 16.54, bones: 17.0, seven: 18.52, owl: 20.27, fourteen: 20.75, twist: 22.04, shared: 22.52, little: 23.52, every: 24.12, joint: 24.49 } },
    { id: 'blood',  s: 25.41, e: 36.47, w: { clever: 26.06, blood: 26.88, pinch: 28.67, arteries: 29.18, bony: 31.41, tunnels: 31.71, ten: 32.82, wider: 33.42, vessel: 34.31, squeezed: 35.93 } },
    { id: 'pools',  s: 37.02, e: 44.68, w: { base: 37.55, head: 38.15, vessels: 38.91, balloon: 39.38, pools: 40.52, storing: 41.16, extra: 41.65, blood: 41.99, brain: 42.76, turned: 44.3 } },
    { id: 'end',    s: 45.23, e: 49.43, w: { owls: 46.22, neck: 46.55, first: 47.63, turn: 48.41, around: 48.64, look: 49.09 } },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scene changes: 'pan' = the emaki scroll unrolls (kasumi cloud at the seam); 'mist' = a gold mist bank sweeps down
  const TR = [
    { from: 0, to: 1, kind: 'pan', a: 5.75, b: 6.25 },
    { from: 1, to: 2, kind: 'mist', a: 15.45, b: 15.97 },
    { from: 2, to: 3, kind: 'pan', a: 24.88, b: 25.38 },
    { from: 3, to: 4, kind: 'mist', a: 36.5, b: 37.0 },
    { from: 4, to: 5, kind: 'pan', a: 44.72, b: 45.2 },
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
  const rays = (c, x, y, r, n, p, a0 = 0, col = 'rgba(244,236,170,0.55)') => {
    if (p <= 0) return; c.save(); c.globalAlpha = Math.min(1, p * 1.5); c.fillStyle = col; const rr = r * E.out(p);
    for (let i = 0; i < n; i++) { const a = a0 + i / n * Math.PI * 2, da = Math.PI / n * 0.55; c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a - da) * rr, y + Math.sin(a - da) * rr); c.lineTo(x + Math.cos(a + da) * rr, y + Math.sin(a + da) * rr); c.closePath(); c.fill(); }
    c.restore();
  };

  // ---------- owl-specific drawing ----------
  const DEG = Math.PI / 180;
  const OW = { body: '#8e6239', dark: '#5a3b22', head: '#9a6c41', chest: '#e3cfa3', disc: '#ead9b2', amber: '#e9a12a', beak: '#3a3030', talon: '#c9b27a' };
  // an owl, front view, perched (local units: head centre (0,-80) r 160, branch at y 395). a = head turn (rad), 0 = facing you
  const owl = (c, x, y, s, a, t, opts = {}) => {
    c.save(); c.translate(x, y); c.scale(s, s);
    const lw = (2.4 + s * 1.1) / s, r = H.rng(321);
    if (!opts.headOnly) {
      // wings behind the body
      for (const sd of [-1, 1]) { const wp = new Path2D(); wp.ellipse(sd * 128, 200, 72, 205, sd * 0.13, 0, 7); fillKey(c, wp, vbok(c, 0, 400, [[0, '#6c4829'], [1, OW.dark]]), lw);
        c.save(); c.clip(wp); c.strokeStyle = 'rgba(241,232,210,0.45)'; c.lineWidth = lw * 1.2; for (let k = 0; k < 7; k++) { c.beginPath(); c.moveTo(sd * 70, 60 + k * 50); c.quadraticCurveTo(sd * 130, 80 + k * 50, sd * 200, 50 + k * 50); c.stroke(); } c.restore(); }
      const bd = new Path2D(); bd.ellipse(0, 170, 160, 225, 0, 0, 7); fillKey(c, bd, vbok(c, -60, 400, [[0, '#a8794a'], [1, '#6e4a2c']]), lw);
      const ch = new Path2D(); ch.ellipse(0, 200, 102, 168, 0, 0, 7); c.fillStyle = OW.chest; c.fill(ch);
      c.save(); c.clip(ch); c.strokeStyle = '#6e4a2c'; c.lineWidth = lw * 1.5; c.lineCap = 'round';
      for (let row = 0; row < 7; row++) for (let k = -3; k <= 3; k++) { const cx = k * 32 + (row % 2) * 16, cy = 70 + row * 44; c.beginPath(); c.moveTo(cx - 9, cy - 5); c.lineTo(cx, cy + 4); c.lineTo(cx + 9, cy - 5); c.stroke(); }
      c.restore(); keyline(c, ch, lw * 0.8);
      // talons gripping the branch
      for (const sd of [-1, 1]) for (let k = -1; k <= 1; k++) { const p = new Path2D(); const bx = sd * 52 + k * 18; p.moveTo(bx - 8, 372); p.quadraticCurveTo(bx, 400, bx + 4 + k * 4, 412); p.lineTo(bx + 10, 372); p.closePath(); fillKey(c, p, OW.talon, lw); }
    }
    // the head: the face slides round the head's curve as it turns (clipped to the head circle)
    const sn = Math.sin(a), cs = Math.cos(a), off = sn * 118, sq = Math.max(0.22, Math.abs(cs)), faceA = H.smooth(-0.3, 0.12, cs);
    // ear tufts (behind the head)
    for (const sd of [-1, 1]) { const tx = (sd * 92) * Math.max(0.35, Math.abs(cs)) + sn * 60, p = new Path2D(); p.moveTo(tx - 34, -190); p.lineTo(tx + sd * 26, -300); p.lineTo(tx + 34 - sd * 6, -196); p.closePath(); fillKey(c, p, OW.dark, lw); }
    const hd = new Path2D(); hd.arc(0, -80, 160, 0, 7); fillKey(c, hd, vbok(c, -240, 80, [[0, '#ac7c4c'], [1, '#86592f']]), lw * 1.1);
    c.save(); c.clip(hd);
    // mottled feathers on the crown and nape (always there; the face covers them when it faces you)
    c.fillStyle = 'rgba(70,45,25,0.55)'; for (let i = 0; i < 26; i++) { const px = r.range(-150, 150), py = r.range(-230, 70), sz = r.range(5, 11); c.beginPath(); c.ellipse(px - sn * 30, py, sz, sz * 0.6, 0.3, 0, 7); c.fill(); }
    if (faceA < 0.95) { c.globalAlpha = 1 - faceA; c.strokeStyle = 'rgba(60,38,20,0.6)'; c.lineWidth = lw * 2; for (let k = -3; k <= 3; k++) { c.beginPath(); c.moveTo(k * 40 - sn * 40, -230); c.quadraticCurveTo(k * 46 - sn * 40, -80, k * 36 - sn * 40, 80); c.stroke(); } c.globalAlpha = 1; }
    if (faceA > 0) {
      c.globalAlpha = faceA; c.translate(off, -80); c.scale(sq, 1); c.translate(0, 80);
      // facial disc
      for (const sd of [-1, 1]) { const dp = new Path2D(); dp.arc(sd * 62, -80, 80, 0, 7); c.fillStyle = OW.disc; c.fill(dp);
        c.strokeStyle = 'rgba(110,74,44,0.45)'; c.lineWidth = lw; for (let k = 0; k < 14; k++) { const aa = k / 14 * Math.PI * 2; c.beginPath(); c.moveTo(sd * 62 + Math.cos(aa) * 48, -80 + Math.sin(aa) * 48); c.lineTo(sd * 62 + Math.cos(aa) * 76, -80 + Math.sin(aa) * 76); c.stroke(); } }
      c.strokeStyle = '#4a3020'; c.lineWidth = lw * 3; c.beginPath(); c.arc(-62, -80, 82, Math.PI * 0.55, Math.PI * 1.75); c.stroke(); c.beginPath(); c.arc(62, -80, 82, -Math.PI * 0.75, Math.PI * 0.45); c.stroke();
      // brows
      c.strokeStyle = '#4a3020'; c.lineWidth = lw * 4; c.lineCap = 'round'; c.beginPath(); c.moveTo(-118, -150); c.quadraticCurveTo(-50, -150, 0, -112); c.quadraticCurveTo(50, -150, 118, -150); c.stroke();
      // eyes (fixed in the head: they never move on their own)
      const bl = opts.blink || 0;
      for (const sd of [-1, 1]) { const ex = sd * 62, ey = -84; const ep = new Path2D(); ep.arc(ex, ey, 44, 0, 7); fillKey(c, ep, vbok(c, ey - 44, ey + 44, [[0, '#f4c24a'], [1, '#d9861e']]), lw * 1.2);
        c.fillStyle = C.key; c.beginPath(); c.arc(ex, ey, 25, 0, 7); c.fill(); c.fillStyle = '#f7f0de'; c.beginPath(); c.arc(ex - 10, ey - 12, 7, 0, 7); c.fill();
        if (bl > 0) { c.save(); c.clip(ep); c.fillStyle = '#9a6c41'; c.fillRect(ex - 50, ey - 50, 100, 100 * bl); c.restore(); } }
      const bk = new Path2D(); bk.moveTo(-17, -66); bk.quadraticCurveTo(0, -74, 17, -66); bk.lineTo(0, -18); bk.closePath(); fillKey(c, bk, OW.beak, lw);
    }
    c.restore();
    keyline(c, hd, lw * 1.1);
    c.restore();
  };
  // a pine branch across the frame at y (cached)
  let BR = null;
  const branchLayer = () => {
    if (BR) return BR; BR = H.layer(W, 420); const g = BR.getContext('2d'), r = H.rng(64);
    const p = new Path2D(); p.moveTo(-40, 170); p.bezierCurveTo(300, 120, 700, 190, W + 40, 140); p.lineTo(W + 40, 210); p.bezierCurveTo(700, 260, 300, 190, -40, 240); p.closePath();
    fillKey(g, p, vbok(g, 120, 260, [[0, '#7a5232'], [1, '#3e2a1a']]), 3.2);
    g.save(); g.clip(p); g.strokeStyle = 'rgba(30,20,12,0.5)'; g.lineWidth = 2; for (let i = 0; i < 18; i++) { const x = r.range(0, W); g.beginPath(); g.moveTo(x, 150); g.quadraticCurveTo(x + 30, 190, x + 8, 240); g.stroke(); } g.restore();
    // pine needle clusters
    for (const [cx, cy] of [[90, 140], [260, 118], [880, 120], [1020, 110], [700, 230]]) for (let k = 0; k < 16; k++) { const aa = -Math.PI * 0.95 + k / 15 * Math.PI * 0.9 + (cy > 200 ? Math.PI : 0), L = r.range(50, 80);
      g.strokeStyle = C.key; g.lineWidth = 5; g.lineCap = 'round'; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(aa) * L, cy + Math.sin(aa) * L); g.stroke();
      g.strokeStyle = r() < 0.5 ? C.green : '#55784f'; g.lineWidth = 3; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(aa) * L, cy + Math.sin(aa) * L); g.stroke(); }
    return BR;
  };
  const stars = (c, seed, n, y0, y1) => { const r = H.rng(seed); c.fillStyle = 'rgba(241,232,210,0.75)'; for (let i = 0; i < n; i++) { const x = r.range(0, W), y = r.range(y0, y1), s = r.range(1.5, 3.5); c.fillRect(x, y, s, s); } };
  // a vermilion protractor arc showing how far the head has turned (from the top, clockwise)
  const turnArc = (c, x, y, R, ang, alpha = 1) => {
    if (ang <= 0.02 || alpha <= 0) return; c.save(); c.globalAlpha = alpha;
    c.strokeStyle = 'rgba(241,232,210,0.45)'; c.lineWidth = 4; c.setLineDash([6, 16]); c.beginPath(); c.arc(x, y, R, 0, 7); c.stroke(); c.setLineDash([]);
    const a0 = -Math.PI / 2, a1 = a0 + ang; c.lineCap = 'round';
    c.strokeStyle = C.key; c.lineWidth = 30; c.beginPath(); c.arc(x, y, R, a0, a1); c.stroke(); c.strokeStyle = C.red; c.lineWidth = 22; c.beginPath(); c.arc(x, y, R, a0, a1); c.stroke();
    const hx = x + Math.cos(a1) * R, hy = y + Math.sin(a1) * R, tx = -Math.sin(a1), ty = Math.cos(a1), nx = Math.cos(a1), ny = Math.sin(a1);
    const p = new Path2D(); p.moveTo(hx + tx * 44, hy + ty * 44); p.lineTo(hx + nx * 34, hy + ny * 34); p.lineTo(hx - nx * 34, hy - ny * 34); p.closePath(); fillKey(c, p, C.red, 3);
    c.restore();
  };
  // a curved "turn" arrow beside the head
  const sideArrow = (c, x, y, R, sd, p) => { if (p <= 0) return; const a0 = sd > 0 ? -0.5 : Math.PI + 0.5, a1 = a0 + sd * 1.0 * E.out(p);
    c.save(); c.lineCap = 'round'; c.strokeStyle = C.key; c.lineWidth = 22; c.beginPath(); c.arc(x, y, R, Math.min(a0, a1), Math.max(a0, a1)); c.stroke(); c.strokeStyle = C.red; c.lineWidth = 15; c.stroke();
    const hx = x + Math.cos(a1) * R, hy = y + Math.sin(a1) * R, tx = -Math.sin(a1) * sd, ty = Math.cos(a1) * sd; const ah = new Path2D(); ah.moveTo(hx + tx * 36, hy + ty * 36); ah.lineTo(hx + Math.cos(a1) * 26, hy + Math.sin(a1) * 26); ah.lineTo(hx - Math.cos(a1) * 26, hy - Math.sin(a1) * 26); ah.closePath(); fillKey(c, ah, C.red, 2.6); c.restore(); };
  const nightPrint = (c, t) => { nightSky(c, 1920); stars(c, 808, 70, 160, 1300); moon(c, 860, 640, 92); cloudBand(c, 30, 760, 380); cloudBand(c, 640, 1240, 380);
    c.fillStyle = vbok(c, 1500, HH, [[0, '#2c3e30'], [1, '#18241c']]); c.fillRect(0, 1640, W, 280); };
  const OWX = 540, OWY = 1080, OWS = 1.3, OHY = OWY - 80 * OWS; // hook owl and its head centre

  // ======================= SCENES (each draws its own full background in a 1080x1920 frame) =======================
  // 0: hook: a moonlit pine; the owl spins its head 270 degrees
  const scHook = (c, t, end) => {
    nightPrint(c, t);
    c.drawImage(branchLayer(), 0, OWY + 395 * OWS - 190);
    let a, arc;
    if (!end) { const u = E.inOut(S(t, 3.5, 4.6)); a = u * 270 * DEG; arc = a; }
    else { const u = E.inOut(S(t, 48.35, 49.35)); a = u * 180 * DEG; arc = a; }
    const blink = end ? 0 : Math.max(0, 1 - Math.abs(t - 5.0) / 0.12);
    owl(c, OWX, OWY + Math.sin(t * 1.3) * 4, OWS, a, t, { blink });
    turnArc(c, OWX, OHY, 280, arc, end ? S(t, 48.35, 48.5) : S(t, 3.45, 3.6));
    if (!end) {
      const bo = S(t, 0.5, 0.75) * (1 - S(t, 1.1, 1.5));
      if (bo > 0) { const g = c.createRadialGradient(540, 960, 200, 540, 960, 1200); g.addColorStop(0, `rgba(8,10,18,${0.35 * bo})`); g.addColorStop(1, `rgba(8,10,18,${0.95 * bo})`); c.fillStyle = g; c.fillRect(0, 0, W, HH); }
      cartouche(c, "YOU'D BLACK OUT", 540, 420, 92, S(t, 0.5, 0.72) * (1 - S(t, 3.3, 3.5)), '#f1e8d2');
      cartouche(c, '270°', 540, 420, 180, S(t, 3.55, 3.75));
      seal(c, 880, 1450, 130, '?', S(t, 5.12, 5.3), -0.06);
    }
  };
  // 1: dusk close-up: the eyes are fixed tubes, so the whole head must turn
  const tubeEye = (c, x, y, s, ring, sock) => {
    c.save(); c.translate(x, y); c.scale(s, s);
    const p = new Path2D(); p.moveTo(-110, -190); p.arc(0, -190, 110, Math.PI, 0); p.bezierCurveTo(110, -130, 76, -110, 76, -60); p.lineTo(76, 10); p.bezierCurveTo(76, 60, 160, 70, 160, 140); p.arc(0, 140, 160, 0, Math.PI); p.bezierCurveTo(-160, 70, -76, 60, -76, 10); p.lineTo(-76, -60); p.bezierCurveTo(-76, -110, -110, -130, -110, -190); p.closePath();
    fillKey(c, p, vbok(c, -300, 300, [[0, '#f4ecd8'], [1, '#e2d2ad']]), 3.4);
    const cor = new Path2D(); cor.arc(0, -205, 88, Math.PI * 1.05, Math.PI * 1.95); c.strokeStyle = C.light; c.lineWidth = 10; c.stroke(cor);
    const ln = new Path2D(); ln.ellipse(0, -150, 70, 46, 0, 0, 7); fillKey(c, ln, vbok(c, -196, -104, [[0, '#f4c24a'], [1, '#d9861e']]), 2.6);
    c.save(); c.clip(p); c.fillStyle = '#b85a40'; c.beginPath(); c.arc(0, 140, 150, 0.15, Math.PI - 0.15); c.lineTo(-120, 220); c.fill(); c.restore();
    c.strokeStyle = 'rgba(27,34,54,0.5)'; c.lineWidth = 2; c.setLineDash([8, 10]); c.beginPath(); c.moveTo(0, -100); c.lineTo(0, 260); c.stroke(); c.setLineDash([]);
    // the bony ring (sclerotic ring) locking the tube, plate by plate
    for (let i = 0; i < 6; i++) { const pp = E.back(S(ring, i / 7, i / 7 + 0.3)); if (pp <= 0) continue; for (const sd of [-1, 1]) { const yy = -110 + i * 26, q = new Path2D(); q.rect(sd * 78 - (sd < 0 ? 26 * pp : 0), yy, 26 * pp, 22); fillKey(c, q, '#cbb98c', 2); } }
    // the skull socket around it
    if (sock > 0) { c.save(); c.globalAlpha = sock; for (const sd of [-1, 1]) { const q = new Path2D(); q.moveTo(sd * 140, -300); q.quadraticCurveTo(sd * 230, -60, sd * 200, 280); q.lineTo(sd * 250, 290); q.quadraticCurveTo(sd * 290, -60, sd * 190, -320); q.closePath(); fillKey(c, q, vbok(c, -320, 290, [[0, '#ddd2b4'], [1, '#b5a681']]), 3); } c.restore(); }
    c.restore();
  };
  const ballEye = (c, x, y, r) => { const p = new Path2D(); p.arc(x, y, r, 0, 7); fillKey(c, p, vbok(c, y - r, y + r, [[0, '#f7f0de'], [1, '#e2d6b6']]), 3.4);
    const ir = new Path2D(); ir.arc(x, y - r * 0.15, r * 0.42, 0, 7); fillKey(c, ir, C.mid, 2.4); c.fillStyle = C.key; c.beginPath(); c.arc(x, y - r * 0.15, r * 0.2, 0, 7); c.fill();
    c.strokeStyle = '#b85a40'; c.lineWidth = 4; c.beginPath(); c.moveTo(x - r * 0.3, y + r * 0.95); c.quadraticCurveTo(x, y + r * 1.4, x + r * 0.1, y + r * 1.8); c.stroke(); };
  const scEyes = (c, t) => {
    c.fillStyle = vbok(c, 0, HH, [[0, '#cfa76a'], [0.35, C.sky], [1, '#efe5cc']]); c.fillRect(0, 0, W, HH);
    cloudBand(c, 40, 640, 330); cloudBand(c, 700, 600, 320);
    const sw = S(t, 13.85, 15.35), a = Math.sin(sw * Math.PI * 2) * 75 * DEG * Math.sin(sw * Math.PI);
    owl(c, 540, 1300, 2.6, a, t, {});
    // red rings round the fixed eyes
    const rg = S(t, 7.15, 7.6) * (1 - S(t, 8.6, 8.8));
    if (rg > 0) for (const sd of [-1, 1]) { c.save(); c.strokeStyle = C.red; c.lineWidth = 12; c.lineCap = 'round'; c.beginPath(); c.arc(540 + sd * 161, 1300 - 84 * 2.6, 140, -Math.PI / 2, -Math.PI / 2 + rg * Math.PI * 2); c.stroke(); c.restore(); }
    cartouche(c, "EYES CAN'T MOVE", 540, 420, 86, S(t, 7.18, 7.4) * (1 - S(t, 8.6, 8.8)), '#f1e8d2');
    seal(c, 900, 1700 - 100, 120, 'x', S(t, 7.88, 8.05) * (1 - S(t, 8.6, 8.8)), 0.06);
    // the cut-away card: your ball eye vs the owl's tube
    const card = S(t, 8.65, 8.95) * (1 - S(t, 12.25, 12.55));
    if (card > 0) { c.save(); c.globalAlpha = card;
      c.fillStyle = vbok(c, 0, HH, [[0, '#e9dcbc'], [1, '#e2d2ab']]); c.fillRect(0, 0, W, HH);
      const fr = new Path2D(); fr.rect(50, 560, 980, 1060); keyline(c, fr, 3); c.strokeStyle = C.key; c.lineWidth = 1.5; c.strokeRect(62, 572, 956, 1036);
      const yp = E.back(S(t, 9.15, 9.45)); if (yp > 0) { c.save(); c.translate(270, 1040); c.scale(yp, yp); ballEye(c, 0, 0, 120); c.restore(); }
      tanzaku(c, 'you', 270, 1260, S(t, 9.2, 9.4), 56);
      const op = E.back(S(t, 9.85, 10.15)); if (op > 0) { c.save(); c.translate(740, 1060); c.scale(op, op); tubeEye(c, 0, 0, 1.25, S(t, 10.5, 11.5), S(t, 11.55, 11.85)); c.restore(); }
      tanzaku(c, 'owl', 740, 1510, S(t, 9.9, 10.1), 56);
      c.restore();
      cartouche(c, 'TUBES', 540, 420, 140, S(t, 9.86, 10.06) * card);
      cartouche(c, 'LOCKED IN', 300, 1460, 70, S(t, 10.5, 10.7) * card, C.red, '#efe2c6');
      seal(c, 300, 760, 110, '固', S(t, 11.58, 11.75) * card, -0.05);
    }
    cartouche(c, 'WHOLE HEAD TURNS', 540, 420, 82, S(t, 14.06, 14.28), '#f1e8d2');
    sideArrow(c, 540, 1092, 470, 1, S(t, 15.1, 15.4)); sideArrow(c, 540, 1092, 470, -1, S(t, 15.1, 15.4));
  };
  // 2: bones: your 7 neck bones vs the owl's 14, the twist shared out joint by joint
  const vert = (c, x, y, w, h, p, phase, glow) => { if (p <= 0) return; c.save(); c.translate(x, y); c.scale(p, p);
    const b = new Path2D(); b.roundRect(-w / 2, -h / 2, w, h, h * 0.35); fillKey(c, b, vbok(c, -h / 2, h / 2, [[0, '#f4ecd8'], [1, '#d8c79e']]), 2.8);
    if (phase != null) { c.save(); c.clip(b); const bx = Math.sin(phase) * w * 0.38, bw = w * 0.16 * Math.max(0.3, Math.abs(Math.cos(phase))); c.fillStyle = Math.cos(phase) >= 0 ? C.ochre : '#a88a52'; c.fillRect(bx - bw / 2, -h / 2, bw, h); c.restore(); keyline(c, b, 2.8); }
    if (glow > 0) { c.strokeStyle = H.rgba(C.red, glow); c.lineWidth = 7; c.stroke(b); }
    c.restore(); };
  const scBones = (c, t) => {
    c.fillStyle = vbok(c, 0, HH, [[0, C.pale], [0.5, '#dfe2d4'], [1, '#e9dcbc']]); c.fillRect(0, 0, W, HH);
    seaBand(c, 1690, t);
    // you: 7 bones under a simple head
    const hp = new Path2D(); hp.ellipse(280, 720, 88, 104, 0, 0, 7); fillKey(c, hp, vbok(c, 616, 824, [[0, '#d8d2c2'], [1, '#b8b09c']]), 3);
    for (let i = 0; i < 7; i++) vert(c, 280, 860 + i * 88, 150, 72, E.back(S(t, 18.42 + i * 0.06, 18.62 + i * 0.06)), null, 0);
    // owl: 14 bones in an S-curve under its head
    const tw = E.inOut(S(t, 22.0, 24.6)), headA = tw * 270 * DEG;
    const pts = []; for (let i = 0; i < 14; i++) { const u = i / 13; pts.push([760 + Math.sin(u * Math.PI * 1.6) * 55, 790 + u * 690]); }
    pts.forEach(([x, y], i) => { const share = (14 - i) / 14; const jg = S(t, 23.95 + i * 0.045, 24.1 + i * 0.045) * (1 - S(t, 24.75, 24.88));
      vert(c, x, y, 128, 42, E.back(S(t, 20.2 + i * 0.04, 20.38 + i * 0.04)), headA * share, jg); });
    owl(c, 760, 680 + 80 * 0.62, 0.62, headA, t, { headOnly: true });
    tanzaku(c, 'you', 280, 560, S(t, 18.0, 18.2), 52);
    tanzaku(c, 'owl', 965, 640, S(t, 20.25, 20.45), 52);
    cartouche(c, 'EXTRA BONES', 540, 380, 100, S(t, 16.5, 16.7) * (1 - S(t, 21.9, 22.1)), '#f1e8d2');
    cartouche(c, '7', 280, 1560, 150, S(t, 18.5, 18.7), '#f1e8d2');
    cartouche(c, '14', 760, 1560, 160, S(t, 20.72, 20.92));
    cartouche(c, 'TWIST SHARED', 540, 380, 96, S(t, 22.0, 22.2), C.red, '#efe2c6');
    // little twist ticks beside each joint, "a little at every joint"
    pts.forEach(([x, y], i) => { const p = S(t, 23.95 + i * 0.045, 24.1 + i * 0.045); if (p <= 0) return; c.save(); c.globalAlpha = p; c.strokeStyle = C.red; c.lineWidth = 6; c.lineCap = 'round'; c.beginPath(); c.arc(x + 100, y, 16, -1.2, 1.2 * p); c.stroke(); c.restore(); });
  };
  // 3: blood: twisting pinches the arteries; owls run them through tunnels up to 10x wider
  const VY = [760, 980, 1200, 1420], AX = 225, AR = 18;
  const pinchAt = (t) => E.inOut(S(t, 28.45, 28.9)) * (1 - E.inOut(S(t, 31.3, 31.85)));
  const wideAt = (t) => E.out(S(t, 31.38, 32.2));
  const twistAt = (t, i) => { const sg = i % 2 ? 1 : -1; const p1 = E.inOut(S(t, 28.0, 28.6)) * (1 - S(t, 30.6, 31.2)); const p2 = S(t, 34.2, 34.6) * Math.sin((t - 34.2) * 2.6); return sg * 42 * (p1 + p2 * (1 - p1)); };
  const holeAt = (t) => H.lerp(H.lerp(30, 22, pinchAt(t)), 74, wideAt(t));
  const widthAt = (t) => { let m = 2 * AR; for (let i = 0; i < 4; i++) m = Math.min(m, cl(2 * (holeAt(t) - Math.abs(twistAt(t, i))) - 4, 6, 2 * AR)); return m; };
  const flowPos = (t) => { let s = 0; for (let u = 25.4; u < t; u += 0.05) s += 0.05 * (0.08 + 0.92 * cl((widthAt(u) - 6) / (2 * AR - 6))); return s * 190; };
  const scBlood = (c, t) => {
    c.fillStyle = vbok(c, 0, HH, [[0, C.key], [0.4, C.prussD], [0.85, C.pruss], [1, C.mid]]); c.fillRect(0, 0, W, HH);
    stars(c, 77, 30, 160, 640);
    const hr = holeAt(t), fp = flowPos(t);
    // the two arteries (drawn first, the bones sit over them; the tunnels are cut through)
    for (const sd of [-1, 1]) { const ax = 540 + sd * AX; const L = [], R = [];
      for (let y = 600; y <= 1640; y += 8) { let w = 2 * AR; VY.forEach((vy, i) => { const d = Math.abs(y - vy); if (d < 70) { const wl = cl(2 * (hr - Math.abs(twistAt(t, i))) - 4, 6, 2 * AR); w = Math.min(w, H.lerp(wl, 2 * AR, H.smooth(30, 70, d))); } }); L.push([ax - w / 2, y]); R.push([ax + w / 2, y]); }
      const ap = new Path2D(); L.forEach(([x, y], i) => (i ? ap.lineTo(x, y) : ap.moveTo(x, y))); for (let i = R.length - 1; i >= 0; i--) ap.lineTo(R[i][0], R[i][1]); ap.closePath();
      fillKey(c, ap, '#d3533a', 3);
      c.save(); c.clip(ap); c.fillStyle = '#f0a08a'; for (let k = 0; k < 14; k++) { const y = 600 + ((fp + k * 75) % 1050); c.beginPath(); c.ellipse(ax, y, 7, 13, 0, 0, 7); c.fill(); } c.restore(); }
    // the vertebrae with their side wings and tunnels
    VY.forEach((vy, i) => { const dx = twistAt(t, i); c.save(); c.translate(dx, 0);
      const body = new Path2D(); body.roundRect(540 - 150, vy - 66, 300, 132, 40);
      const wing = new Path2D(); wing.roundRect(540 - 300, vy - 46, 600, 92, 40);
      for (const sd of [-1, 1]) { wing.moveTo(540 + sd * AX + hr - dx, vy); wing.arc(540 + sd * AX - dx, vy, hr, 0, Math.PI * 2, true); }
      c.save(); c.translate(2, 1.4); c.fillStyle = '#d8c79e'; c.fill(wing, 'evenodd'); c.restore(); keyline(c, wing, 3);
      fillKey(c, body, vbok(c, vy - 66, vy + 66, [[0, '#f4ecd8'], [1, '#d8c79e']]), 3);
      c.restore(); });
    cartouche(c, 'BLOOD', 540, 420, 140, S(t, 26.84, 27.04) * (1 - S(t, 28.5, 28.7)), C.red, '#efe2c6');
    cartouche(c, 'PINCH!', 540, 420, 140, S(t, 28.62, 28.82) * (1 - S(t, 32.6, 32.8)));
    seal(c, 920, 600, 110, 'x', S(t, 28.75, 28.9) * (1 - S(t, 31.3, 31.5)), 0.06);
    tanzaku(c, 'bony tunnels', 540, 1540, S(t, 31.38, 31.58), 56);
    cartouche(c, 'UP TO 10×', 540, 420, 150, S(t, 32.78, 32.98), '#f1e8d2');
    cartouche(c, 'WIDER', 540, 590, 84, S(t, 33.38, 33.56) * (1 - S(t, 35.8, 36.0)));
    cartouche(c, 'NO SQUEEZE', 540, 590, 84, S(t, 35.88, 36.06), '#dfe8ea');
    seal(c, 920, 1580, 110, 'v', S(t, 35.95, 36.1), 0.06);
  };
  // 4: pools: under the head the vessels balloon into reservoirs that keep the brain fed while it turns
  const PX = 88, PY = 1262;
  const scPools = (c, t) => {
    c.fillStyle = vbok(c, 0, HH, [[0, '#cfa76a'], [0.35, C.sky], [1, '#efe5cc']]); c.fillRect(0, 0, W, HH);
    const ht = E.inOut(S(t, 44.2, 44.7)) * -90 * DEG;
    owl(c, 540, 1150, 2.0, ht, t, {});
    // x-ray wash
    const xr = S(t, 37.0, 37.5); c.fillStyle = `rgba(22,48,79,${0.62 * xr})`; c.fillRect(0, 0, W, HH);
    const bal = E.back(S(t, 39.3, 39.9)), br = S(t, 42.7, 42.95);
    // brain
    const bp = new Path2D(); bp.ellipse(540, 880, 172, 104, 0, 0, 7); c.save(); c.globalAlpha = xr; fillKey(c, bp, H.rgba(H.mix('#c98a7a', '#f2b2a0', br)), 3);
    c.strokeStyle = 'rgba(120,50,40,0.55)'; c.lineWidth = 4; for (let k = -2; k <= 2; k++) { c.beginPath(); c.moveTo(540 + k * 60, 800); c.bezierCurveTo(540 + k * 60 + 30, 850, 540 + k * 60 - 30, 900, 540 + k * 60, 960); c.stroke(); }
    if (br > 0) rays(c, 540, 880, 330, 16, br, 0.1, 'rgba(244,236,170,0.22)');
    // the arteries, the pools and the run up to the brain
    const vesT = S(t, 38.85, 39.3);
    for (const sd of [-1, 1]) { const vx = 540 + sd * PX; const path = new Path2D(); path.moveTo(vx, 1930); path.lineTo(vx, PY); path.bezierCurveTo(vx, 1100, 540 + sd * 120, 980, 540 + sd * 70, 940);
      c.lineCap = 'round'; c.strokeStyle = C.key; c.lineWidth = 34; c.stroke(path); c.strokeStyle = '#d3533a'; c.lineWidth = 26; c.stroke(path);
      if (vesT > 0) { c.strokeStyle = H.rgba('#f4ecd8', 0.9 * vesT * (1 - S(t, 39.4, 39.7))); c.lineWidth = 8; c.stroke(path); }
      const rp = new Path2D(); rp.ellipse(vx, PY, 16 + 60 * bal, 16 + 44 * bal, 0, 0, 7); fillKey(c, rp, vbok(c, PY - 60, PY + 60, [[0, '#e0644a'], [1, '#a83a2a']]), 3.2);
      if (bal > 0.3) { c.fillStyle = 'rgba(255,220,200,0.6)'; c.beginPath(); c.ellipse(vx - 18, PY - 18, 14 * bal, 8 * bal, -0.5, 0, 7); c.fill(); }
      // blood cells flowing up to the brain once the pools are full
      const fl = S(t, 41.9, 42.2); if (fl > 0) { for (let k = 0; k < 6; k++) { const u = ((t - 41.9) * 0.55 + k / 6) % 1; const yy = H.lerp(PY - 40, 960, u), xx = H.lerp(vx, 540 + sd * 80, H.smooth(0, 1, u)); c.fillStyle = H.rgba('#f0a08a', fl); c.beginPath(); c.ellipse(xx, yy, 8, 12, 0, 0, 7); c.fill(); } } }
    c.restore();
    tanzaku(c, 'base of the head', 540, 1380, S(t, 37.5, 37.7) * (1 - S(t, 40.4, 40.6)), 54);
    cartouche(c, 'POOLS', 540, 1500, 130, S(t, 40.48, 40.68), C.red, '#efe2c6');
    cartouche(c, 'EXTRA BLOOD', 540, 420, 100, S(t, 41.6, 41.8) * (1 - S(t, 44.1, 44.3)), '#f1e8d2');
    tanzaku(c, 'brain', 860, 700, S(t, 42.72, 42.92), 56);
    cartouche(c, 'HEAD TURNED', 540, 420, 100, S(t, 44.26, 44.44), '#f1e8d2');
  };
  // 5: the ending: back to the moonlit pine; the question loops to the first line
  const scEnd = (c, t) => {
    scHook(c, t, true);
    cartouche(c, "AN OWL'S NECK", 540, 420, 100, S(t, 46.18, 46.38), '#f1e8d2');
    cartouche(c, 'what would you look at?', 540, 560, 62, S(t, 47.58, 47.78));
    seal(c, 880, 1450, 130, '?', S(t, 49.25, 49.4), -0.06);
  };
  const SCENES = [scHook, scEyes, scBones, scBlood, scPools, scEnd];
  const header = (c, t) => {
    const p = S(t, 6.2, 6.6) * (1 - S(t, 44.6, 44.8)); if (p <= 0) return;
    cartouche(c, 'HOW OWLS TURN', 500, 230, 50, p);
    seal(c, 880, 230, 70, '梟', p, 0.05);
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

  // ---------- SOUND: a woodblock workshop and a moonlit forest, under the narration ----------
  function scoreSound(k) {
    const D = DURATION;
    const koto = (t, n, g, p, minor, bend) => { const f = k.hz(n);
      k.tone(t, { f: bend ? [[0, f], [0.08, f], [0.5, f * 0.89]] : [[0, f * 1.012], [0.05, f]], type: 'sawtooth', dur: 1.3, gain: 0.05 * g, a: 0.002, filter: 'lowpass', f2: [[0, 2600], [0.25, 900], [1.3, 500]], q: 1.5, pan: p, verb: 0.3, minor });
      k.tone(t, { f, type: 'triangle', dur: 1.0, gain: 0.06 * g, a: 0.002, pan: p, minor }); };
    const sealP = (t, g, p, minor) => { k.play('stamp', t, { gain: 0.6 * g, pan: p, minor }); k.noise(t + 0.01, { dur: 0.12, color: 'pink', filter: 'bandpass', f: 1100, q: 0.7, gain: 0.08 * g, a: 0.01, pan: p, minor }); };
    const card = (t, g = 1) => k.play('paper', t, { dur: 0.12, gain: 0.3 * g, minor: true });
    const unroll = (t, dur) => { k.noise(t, { dur, color: 'brown', filter: 'bandpass', f: [[0, 160], [dur * 0.5, 300], [dur, 160]], q: 1, gain: 0.18, a: dur * 0.4 }); k.play('paper', t + 0.1, { dur: dur - 0.2, gain: 0.75 }); };
    const hoot = (t, g = 1, p = 0) => { k.tone(t, { f: [[0, 390], [0.08, 410], [0.35, 360]], type: 'sine', dur: 0.4, gain: 0.07 * g, a: 0.04, verb: 0.5, pan: p }); k.tone(t + 0.5, { f: [[0, 400], [0.5, 350]], type: 'sine', dur: 0.6, gain: 0.06 * g, a: 0.05, verb: 0.5, pan: p }); };
    const swivel = (t, dur, p = 0) => { k.noise(t, { dur, color: 'pink', filter: 'bandpass', f: [[0, 500], [dur, 1500]], q: 1.2, gain: 0.12, a: dur * 0.3, pan: p }); k.play('riser', t, { dur, gain: 0.35 }); };
    const cricket = (t0, t1, p) => { const r = H.rng(Math.round(t0 * 10)); k.withMinor(() => { for (let t = t0; t < t1; t += 0.9 + r() * 0.8) for (let i = 0; i < 3; i++) k.tone(t + i * 0.055, { f: 4300 + r() * 200, dur: 0.035, gain: 0.018, a: 0.003, pan: p + (r() - 0.5) * 0.3 }); }); };
    k.bed('room', 0, D, { gain: 0.3 });
    cricket(0, 5.8, -0.5); cricket(0.4, 5.8, 0.5); cricket(45.2, D, -0.4); cricket(45.6, D, 0.45);
    TR.forEach((x) => { if (x.kind === 'pan') unroll(x.a, x.b - x.a); else { k.play('whoosh', x.a, { dur: x.b - x.a, gain: 0.45 }); k.play('paper', x.a + 0.1, { dur: 0.35, gain: 0.4, minor: true }); } });
    // hook
    k.play('thud', 0.55, { f: 70, gain: 0.8 }); k.tone(0.6, { f: [[0, k.hz('D4')], [0.8, k.hz('D3')]], dur: 0.9, gain: 0.05, verb: 0.3 }); card(0.5);
    hoot(1.6, 0.9, -0.3);
    swivel(3.5, 1.1, 0.2); k.play('impact', 3.62, { gain: 1.1 }); ['D4', 'A4', 'D5'].forEach((n, i) => koto(3.64 + i * 0.05, n, 1, (i - 1) * 0.2)); card(3.6);
    k.play('pop', 5.0, { f: 300, gain: 0.3, minor: true }); sealP(5.15, 1, 0.4); koto(5.17, 'A4', 0.9, 0.3, false, true);
    // eyes
    koto(7.2, 'D4', 0.8, -0.2); card(7.18); for (const sd of [-1, 1]) k.play('paper', 7.2, { dur: 0.35, gain: 0.25, pan: sd * 0.5, minor: true });
    sealP(7.9, 1, 0.4); koto(7.92, 'Bb3', 0.8, 0.3, false, true);
    k.play('paper', 8.65, { dur: 0.3, gain: 0.5 }); k.play('pop', 9.2, { f: 520, gain: 0.4 }); k.play('pop', 9.88, { f: 380, gain: 0.5 }); koto(9.9, 'G4', 0.9, 0.1); card(9.86);
    for (let i = 0; i < 6; i++) k.play('tock', 10.5 + i * 0.16, { f: 600 + i * 40, gain: 0.35, pan: 0.4, minor: true });
    koto(10.52, 'A4', 0.7, -0.3); sealP(11.6, 0.9, -0.3); k.play('thud', 11.6, { f: 110, gain: 0.5 });
    k.play('paper', 12.3, { dur: 0.3, gain: 0.5 });
    swivel(13.9, 0.7, -0.5); swivel(14.6, 0.75, 0.5); koto(14.1, 'D5', 0.9, 0); card(14.06); k.play('whoosh', 15.1, { dur: 0.3, gain: 0.3 });
    // bones
    koto(16.5, 'D4', 0.9, 0); koto(16.6, 'A4', 0.8, 0.1); card(16.5); k.play('paper', 18.0, { dur: 0.15, gain: 0.3, minor: true });
    for (let i = 0; i < 7; i++) k.play('tock', 18.42 + i * 0.06, { f: 460 + i * 25, gain: 0.35, pan: -0.4, minor: true });
    k.play('impact', 18.52, { gain: 0.8 }); koto(18.54, 'G4', 0.9, -0.3);
    k.play('paper', 20.25, { dur: 0.15, gain: 0.3, minor: true }); for (let i = 0; i < 14; i++) k.play('tock', 20.2 + i * 0.04, { f: 520 + i * 22, gain: 0.3, pan: 0.4, minor: true });
    k.play('impact', 20.74, { gain: 1.1 }); ['D4', 'A4', 'D5', 'E5'].forEach((n, i) => koto(20.76 + i * 0.05, n, 1, 0.1 + i * 0.1));
    swivel(22.0, 2.6, 0.3); koto(22.04, 'Eb4', 0.8, 0, false, true); card(22.0);
    for (let i = 0; i < 14; i++) k.play('tock', 23.95 + i * 0.045, { f: 700 + i * 20, gain: 0.3, pan: 0.4, minor: true });
    // blood
    koto(26.06, 'A4', 0.7, 0); k.play('impact', 26.86, { gain: 0.9 }); koto(26.9, 'D4', 0.9, 0, false, true); card(26.84);
    k.play('roller', 28.0, { dur: 0.6, gain: 0.7 }); k.play('buzz', 28.67, { f: 90, dur: 0.6, gain: 0.35 }); sealP(28.75, 1.1, 0.4); koto(28.7, 'Bb3', 1, 0, false, true);
    k.play('roller', 31.38, { dur: 0.8, gain: 0.8 }); k.play('whoosh', 31.6, { dur: 0.8, gain: 0.4 }); k.play('paper', 31.4, { dur: 0.15, gain: 0.3, minor: true });
    k.play('impact', 32.8, { gain: 1.2 }); ['D3', 'A3', 'D4', 'G4'].forEach((n, i) => koto(32.82 + i * 0.03, n, 1.0, (i - 1.5) * 0.2));
    koto(33.42, 'D5', 0.7, 0.2); card(33.38);
    for (let i = 0; i < 4; i++) k.play('tock', 34.3 + i * 0.6, { f: 420, gain: 0.3, minor: true });
    sealP(35.95, 1, 0.4); k.play('success', 35.97, { f: 'D6', gain: 0.4 }); card(35.88);
    // pools
    k.play('neon', 37.05, { dur: 0.4, gain: 0.35 }); k.play('paper', 37.5, { dur: 0.15, gain: 0.3, minor: true });
    k.play('riser', 38.85, { dur: 0.5, gain: 0.35 }); for (const p of [-0.3, 0.3]) k.play('pop', 39.38, { f: 260, gain: 0.7, pan: p }); koto(39.4, 'G4', 0.8, 0);
    k.play('impact', 40.5, { gain: 0.9 }); koto(40.52, 'D4', 1, 0); koto(40.6, 'A4', 0.9, 0.1); card(40.48);
    koto(41.65, 'E5', 0.7, -0.2); card(41.6); k.withMinor(() => { for (let i = 0; i < 8; i++) k.play('pop', 41.95 + i * 0.12, { f: 600 + (i % 3) * 80, gain: 0.25 }); });
    k.play('sparkle', 42.76, { gain: 0.6, n: 4 }); ['D5', 'A5', 'D6'].forEach((n, i) => koto(42.78 + i * 0.05, n, 0.9, (i - 1) * 0.3));
    swivel(44.2, 0.5, -0.3); card(44.26);
    // ending
    hoot(45.4, 0.7, 0.4); koto(46.2, 'D5', 0.9, 0); koto(46.32, 'A4', 0.8, 0.1, true); card(46.18);
    koto(47.6, 'G4', 0.7, -0.1); card(47.58); swivel(48.35, 1.0, 0.2);
    sealP(49.3, 1, 0.5); ['D3', 'A3', 'D4', 'G4', 'A4'].forEach((n, i) => koto(49.35 + i * 0.07, n, 0.85 - i * 0.08, (i - 2) * 0.2));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
