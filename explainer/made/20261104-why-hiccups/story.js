// Ukiyo-e Woodblock, vertical 1080x1920: "Why do you get hiccups?"
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [{"s":0.25,"e":4.15,"text":"Your throat slams shut thirty-five milliseconds into every hiccup.","w":{"your":0.25,"throat":0.53,"slams":0.95,"shut":1.29,"thirtyfive":1.57,"milliseconds":2.27,"into":3.1,"every":3.38,"hiccup":3.73}},{"s":4.7,"e":6.9,"text":"It starts down here, in your diaphragm,","w":{"it":4.7,"starts":4.84,"down":5.27,"here":5.55,"in":5.83,"your":5.98,"diaphragm":6.26}},{"s":7.2,"e":9.07,"text":"the big muscle under your lungs.","w":{"the":7.2,"big":7.41,"muscle":7.63,"under":8.06,"your":8.42,"lungs":8.71}},{"s":9.62,"e":11.32,"text":"Normally, it moves smoothly,","w":{"normally":9.62,"it":10.21,"moves":10.36,"smoothly":10.73}},{"s":11.62,"e":13.83,"text":"pulling in air every time you breathe.","w":{"pulling":11.62,"in":12.12,"air":12.26,"every":12.47,"time":12.83,"you":13.11,"breathe":13.33}},{"s":14.38,"e":16.94,"text":"But eat too fast, or gulp a fizzy drink,","w":{"but":14.38,"eat":14.63,"too":14.89,"fast":15.15,"or":15.49,"gulp":15.66,"a":16.0,"fizzy":16.09,"drink":16.51}},{"s":17.24,"e":19.2,"text":"and your stomach swells right below it.","w":{"and":17.24,"your":17.43,"stomach":17.67,"swells":18.1,"right":18.47,"below":18.77,"it":19.08}},{"s":19.75,"e":22.33,"text":"Then a hiccup center in your brainstem fires,","w":{"then":19.75,"a":20.03,"hiccup":20.1,"center":20.52,"in":20.94,"your":21.08,"brainstem":21.36,"fires":21.98}},{"s":22.63,"e":25.13,"text":"and the diaphragm jerks down, all at once.","w":{"and":22.63,"the":22.86,"diaphragm":23.08,"jerks":23.77,"down":24.14,"all":24.45,"at":24.67,"once":24.82}},{"s":25.68,"e":26.69,"text":"Air rushes in,","w":{"air":25.68,"rushes":25.95,"in":26.51}},{"s":26.99,"e":28.58,"text":"but only for a split second.","w":{"but":26.99,"only":27.21,"for":27.5,"a":27.71,"split":27.79,"second":28.15}},{"s":29.13,"e":30.75,"text":"Your vocal cords snap shut,","w":{"your":29.13,"vocal":29.42,"cords":29.79,"snap":30.16,"shut":30.45}},{"s":31.05,"e":32.82,"text":"and the air smacks right into them.","w":{"and":31.05,"the":31.24,"air":31.43,"smacks":31.62,"right":32.0,"into":32.31,"them":32.57}},{"s":33.37,"e":34.28,"text":"That's the hic!","w":{"thats":33.37,"the":33.78,"hic":34.03}},{"s":34.83,"e":37.13,"text":"Babies even do it before they're born.","w":{"babies":34.83,"even":35.29,"do":35.59,"it":35.75,"before":35.9,"theyre":36.36,"born":36.82}},{"s":37.68,"e":39.64,"text":"And scientists still aren't sure why.","w":{"and":37.68,"scientists":37.88,"still":38.53,"arent":38.85,"sure":39.18,"why":39.44}},{"s":40.19,"e":43.09,"text":"One idea is it helps clear air from the stomach.","w":{"one":40.19,"idea":40.41,"is":40.72,"it":40.87,"helps":41.03,"clear":41.41,"air":41.79,"from":42.02,"the":42.33,"stomach":42.56}},{"s":43.64,"e":46.36,"text":"Another says it's just a leftover reflex.","w":{"another":43.64,"says":44.22,"its":44.55,"just":44.8,"a":45.13,"leftover":45.21,"reflex":45.87}},{"s":46.91,"e":48.96,"text":"So the next time your throat slams shut,","w":{"so":46.91,"the":47.04,"next":47.23,"time":47.49,"your":47.75,"throat":48.0,"slams":48.39,"shut":48.71}},{"s":49.26,"e":51.1,"text":"what's your go-to trick for stopping it?","w":{"whats":49.26,"your":49.56,"goto":49.8,"trick":50.03,"for":50.33,"stopping":50.51,"it":50.98}}];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
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
  };

  // Catmull-Rom sampling of a point list -> dense polyline
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
    return { tx, ty, nx: ty, ny: -tx }; // n = outward (left of travel)
  });
  const pathOf = (poly, close) => { const p = new Path2D(); poly.forEach(([x, y], i) => (i ? p.lineTo(x, y) : p.moveTo(x, y))); if (close) p.closePath(); return p; };

  // keyblock line: slightly uneven carved stroke
  const keyline = (c, path, w, col = C.key) => {
    c.save(); c.strokeStyle = col; c.lineJoin = 'round'; c.lineCap = 'round';
    c.lineWidth = w; c.stroke(path);
    c.globalAlpha = 0.5; c.lineWidth = w * 0.6; c.translate(0.7, 0.5); c.stroke(path);
    c.restore();
  };

  // one foam claw: a hooked finger plus smaller fingers
  const claw = (c, x, y, nx, ny, tx, ty, L, r) => {
    const fingers = r.int(3, 4);
    for (let f = 0; f < fingers; f++) {
      const s = L * (1 - f * 0.2) * r.range(0.85, 1.1);
      const off = (f - (fingers - 1) / 2) * L * 0.24;
      const bx = x + tx * off, by = y + ty * off;
      const w = s * 0.22;
      // direction: outward then hooking forward and down (tangent)
      const cx1 = bx + nx * s * 0.9 + tx * s * 0.2, cy1 = by + ny * s * 0.9 + ty * s * 0.2;
      const ex = bx + nx * s * 0.75 + tx * s * 0.75, ey = by + ny * s * 0.75 + ty * s * 0.75;
      const cx2 = bx + nx * s * 0.45 + tx * s * 0.55, cy2 = by + ny * s * 0.45 + ty * s * 0.55;
      const p = new Path2D();
      p.moveTo(bx - tx * w, by - ty * w);
      p.quadraticCurveTo(cx1, cy1, ex, ey);
      p.quadraticCurveTo(cx2, cy2, bx + tx * w, by + ty * w);
      p.closePath();
      c.fillStyle = C.foam; c.fill(p);
      c.lineWidth = 1.6; c.strokeStyle = C.key; c.stroke(p);
    }
  };
  // keyblock-only context: key-coloured fills/strokes print; everything else carves the key away (occlusion)
  const keyOnly = (kc) => {
    const P = CanvasRenderingContext2D.prototype;
    const isKey = (st) => typeof st === 'string' && (st.startsWith('#1b2236') || st.startsWith('rgba(27, 34, 54'));
    const wrap = (name, prop) => { kc[name] = function (...a) { if (isKey(this[prop])) return P[name].apply(this, a); const g = this.globalCompositeOperation; this.globalCompositeOperation = 'destination-out'; P[name].apply(this, a); this.globalCompositeOperation = g; }; };
    wrap('fill', 'fillStyle'); wrap('fillRect', 'fillStyle'); wrap('fillText', 'fillStyle'); wrap('stroke', 'strokeStyle');
  };
  // finish-pass noise fields are deterministic -> compute once
  let FIELDS = null;
  const fields = (W, HH) => FIELDS || (FIELDS = { warp: fieldNoise(W, HH, 3, 30, 3), fine: fieldNoise(W, HH, 4, 2, 2, 0.15, 2.2), pap: fieldNoise(W, HH, 6, 3, 2, 2.5, 0.6), blot: fieldNoise(W, HH, 7, 40, 4) });
  const fillKey = (c, path, col, w = 1.8) => { c.save(); c.translate(1.5, 1); c.fillStyle = col; c.fill(path); c.restore(); keyline(c, path, w); };
  const seal = (c, x, y, s, glyph, p, rot = 0.05) => { // vermilion seal stamped down
    if (p <= 0) return; const k = 1 + (1 - p) * 0.8; c.save(); c.translate(x, y); c.rotate(rot); c.scale(k, k); c.globalAlpha = Math.min(1, p * 2);
    c.fillStyle = C.red; c.fillRect(-s / 2, -s / 2, s, s); c.strokeStyle = '#efe2c6'; c.lineWidth = s * 0.06; c.strokeRect(-s * 0.4, -s * 0.4, s * 0.8, s * 0.8);
    c.fillStyle = '#efe2c6'; c.strokeStyle = '#efe2c6'; c.lineCap = 'square'; c.lineWidth = s * 0.13;
    if (glyph === 'x') { c.beginPath(); c.moveTo(-s * 0.22, -s * 0.22); c.lineTo(s * 0.22, s * 0.22); c.moveTo(s * 0.22, -s * 0.22); c.lineTo(-s * 0.22, s * 0.22); c.stroke(); }
    else if (glyph === 'v') { c.beginPath(); c.moveTo(-s * 0.24, 0); c.lineTo(-s * 0.06, s * 0.18); c.lineTo(s * 0.24, -s * 0.2); c.stroke(); }
    else { c.font = `900 ${s * 0.62}px "Noto Serif JP"`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(glyph, 0, s * 0.03); }
    c.restore();
  };
  const gear = (c, x, y, r, a, col) => { const p = new Path2D(); for (let i = 0; i < 24; i++) { const rr = i % 2 ? r : r * 1.2, aa = a + i / 24 * Math.PI * 2; p.lineTo(x + Math.cos(aa) * rr, y + Math.sin(aa) * rr); } p.closePath(); p.moveTo(x + r * 0.35, y); p.arc(x, y, r * 0.35, 0, 7, true); fillKey(c, p, col, 1.6); };
  const vbok = (c, y0, y1, stops) => { const g = c.createLinearGradient(0, y0, 0, y1); stops.forEach(([u, col]) => g.addColorStop(u, col)); return g; };
  let FIB = null;
  const fibres = (W, HH) => { if (FIB) return FIB; FIB = H.layer(W, HH); const c = FIB.getContext('2d'), rf = H.rng(55);
    for (let i = 0; i < 650; i++) { const x = rf.range(0, W), y = rf.range(0, HH), l = rf.range(10, 40), a = rf.range(0, Math.PI * 2);
      c.strokeStyle = rf() < 0.5 ? 'rgba(255,250,235,0.24)' : 'rgba(120,95,60,0.13)'; c.lineWidth = rf.range(0.5, 1.1);
      c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + Math.cos(a) * l * 0.5 + rf.range(-6, 6), y + Math.sin(a) * l * 0.5 + rf.range(-6, 6), x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke(); }
    return FIB; };
  // ---------- camera over the one big cutaway figure (world = 1080 wide, figure 2200 tall) ----------
  const CAM = [
    [0,540,640,1.5],[4.2,540,640,1.5],[5.3,540,1230,1.15],[14.2,540,1230,1.15],[14.9,540,1180,1.0],[19.5,540,1180,1.0],[20.3,520,500,1.75],
    [22.5,520,500,1.75],[23.4,540,1010,0.82],[25.39,540,1010,0.82],[25.41,560,640,1.9],[46.6,560,640,1.9],[46.64,540,640,1.5],[49.1,540,640,1.5],[50.0,540,760,1.2],[99,540,760,1.2]];
  const cam = (t) => { for (let i = 0; i < CAM.length - 1; i++) { const a = CAM[i], b = CAM[i + 1]; if (t <= b[0]) { const u = H.ease.inOut(H.clamp((t - a[0]) / (b[0] - a[0]))); return [H.lerp(a[1], b[1], u), H.lerp(a[2], b[2], u), H.lerp(a[3], b[3], u)]; } } return CAM[CAM.length - 1].slice(1); };

  const S = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(S(t, a, b));
  const bump = (t, t0, d = 0.35) => (t > t0 && t < t0 + d ? Math.sin(((t - t0) / d) * Math.PI) : 0);
  // cuts of the kasumi bank, placed in the pauses of the voice
  const CUT = { rush: 25.4, baby: 34.55, why: 37.4, end: 46.63 };

  // ----- vertical cartouche, size in screen px -----
  const cart = (c, txt, x, y, size, p = 1, bg = '#e8d49a', fg = C.key) => {
    if (p <= 0) return; c.save(); c.font = `900 ${size}px "Noto Serif JP"`; c.textBaseline = 'middle'; c.textAlign = 'center';
    const w = c.measureText(txt).width + size * 0.95, h = size * 1.55, k = 0.8 + 0.2 * H.ease.back(Math.min(1, p));
    c.translate(x, y); c.scale(k, k); c.globalAlpha = Math.min(1, p * 2);
    const r = new Path2D(); r.rect(-w / 2, -h / 2, w, h);
    const v = H.hex(bg), lt = v.map((q) => Math.round(q + (255 - q) * 0.35)), dk = v.map((q) => Math.round(q * 0.92));
    c.fillStyle = vbok(c, -h / 2, h / 2, [[0, `rgb(${lt})`], [0.45, bg], [1, `rgb(${dk})`]]); c.fill(r);
    c.strokeStyle = C.key; c.lineWidth = 4; c.stroke(r); c.lineWidth = 1.5; c.strokeRect(-w / 2 + 7, -h / 2 + 7, w - 14, h - 14);
    c.fillStyle = fg; c.fillText(txt, 0, size * 0.05); c.restore();
  };
  // huge carved word with a paper-coloured halo
  const bigWord = (c, txt, x, y, size, p, col = C.red) => {
    if (p <= 0) return; c.save(); c.translate(x, y); const k = 1.5 - 0.5 * Math.min(1, p); c.scale(k, k); c.rotate(-0.05); c.globalAlpha = Math.min(1, p * 2.5);
    c.font = `900 ${size}px "Noto Serif JP"`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
    c.strokeStyle = C.key; c.lineWidth = size * 0.22; c.strokeText(txt, 0, 0); c.strokeStyle = C.foam; c.lineWidth = size * 0.13; c.strokeText(txt, 0, 0);
    c.fillStyle = col; c.fillText(txt, 0, 0); c.restore();
  };

  // ----- static kimono layer (seigaiha wave-scale cloth) -----
  let KIM = null;
  const kimono = () => { if (KIM) return KIM; KIM = H.layer(1200, 1500); const k = KIM.getContext('2d');
    k.fillStyle = vbok(k, 0, 1500, [[0, C.pruss], [0.6, C.prussD], [1, '#102338']]); k.fillRect(0, 0, 1200, 1500);
    const R = 62; for (let j = 0; j < 50; j++) for (let i = -1; i < 12; i++) { const x = i * R * 2 + (j % 2) * R, y = j * R * 0.55; for (let q = 3; q > 0; q--) { k.beginPath(); k.arc(x, y + R, (R * q) / 3, Math.PI, 0); k.fillStyle = q % 2 ? '#2d5c8d' : '#1c3f66'; k.fill(); k.strokeStyle = 'rgba(241,232,210,0.45)'; k.lineWidth = 2; k.stroke(); } }
    return KIM; };

  // ----- the figure -----
  const headPts = [[400, 810], [385, 690], [335, 580], [320, 450], [365, 300], [480, 215], [610, 240], [680, 330], [700, 410], [745, 490], [772, 520], [720, 545], [732, 572], [706, 590], [724, 615], [704, 640], [700, 690], [640, 722], [600, 740], [600, 810]];
  const HEAD = pathOf(sample(headPts, 12), true);
  const dipath = (d) => { const p = new Path2D(); p.moveTo(232, 1420); p.bezierCurveTo(330, 1310 + d, 750, 1310 + d, 848, 1420); return p; };
  const tube = (c, pts, w, col) => { const poly = sample(pts, 10), p = pathOf(poly); c.save(); c.lineJoin = 'round'; c.lineCap = 'butt'; c.strokeStyle = C.key; c.lineWidth = w + 9; c.stroke(p); c.strokeStyle = col; c.lineWidth = w; c.stroke(p); c.restore(); };
  const AIRWAY = [[715, 578], [620, 585], [552, 620], [530, 700], [530, 860], [530, 985]];

  const figure = (c, t, st) => {
    const { d, lung, sw, g, fire, hic } = st;
    const sho = new Path2D(); sho.moveTo(-300, 1180); sho.quadraticCurveTo(120, 900, 390, 795); sho.lineTo(690, 795); sho.quadraticCurveTo(960, 900, 1380, 1180); sho.lineTo(1380, 2400); sho.lineTo(-300, 2400); sho.closePath(); c.save(); c.clip(sho); c.drawImage(kimono(), -160, 780, 1400, 1750); c.restore(); keyline(c, sho, 6);
    // shoulders masking: carve the kimono into a body shape with sky on both sides is skipped: the cloth fills the print
    // collar
    const col = new Path2D(); col.moveTo(380, 780); col.lineTo(540, 950); col.lineTo(700, 780); col.lineTo(760, 780); col.lineTo(540, 1040); col.lineTo(320, 780); col.closePath(); fillKey(c, col, C.foam, 3);
    // chest window, cut open like a print within the print
    const win = new Path2D(); win.moveTo(240, 930); win.quadraticCurveTo(540, 880, 840, 930); win.lineTo(880, 1740); win.quadraticCurveTo(540, 1790, 200, 1740); win.closePath();
    fillKey(c, win, vbok(c, 900, 1780, [[0, '#f3e9d0'], [1, '#d9c8a0']]), 5);
    c.save(); c.clip(win);
    // stomach
    const sy = 1590 - (sw - 1) * 40;
    c.save(); c.translate(500, sy); c.scale(sw, sw);
    const st1 = new Path2D(); st1.moveTo(-40, -130); st1.bezierCurveTo(90, -150, 190, -80, 170, 20); st1.bezierCurveTo(150, 110, 10, 130, -90, 90); st1.bezierCurveTo(-170, 60, -180, -10, -120, -30); st1.bezierCurveTo(-80, -50, -60, -90, -40, -130); st1.closePath();
    fillKey(c, st1, vbok(c, -140, 120, [[0, '#e6be76'], [0.5, C.ochre], [1, '#b0803c']]), 4.5 / sw);
    if (sw > 1.03) { const r = H.rng(9); for (let i = 0; i < 12; i++) { const a = r() * 6.28, q = r() * 90, y0 = Math.sin(a) * q * 0.8 + 10; const by = y0 - ((t * 40 + i * 13) % 50); c.beginPath(); c.arc(Math.cos(a) * q + 20, by, r.range(7, 14), 0, 7); c.fillStyle = C.foam; c.fill(); c.lineWidth = 2; c.strokeStyle = C.key; c.stroke(); } }
    c.restore();
    // lungs
    for (const [lx, sg] of [[388, -1], [692, 1]]) { const rx = 128 * lung, ry = 170 * (0.98 + (lung - 1) * 1.1), ly = 1130 + (lung - 1) * 60; const p = new Path2D(); p.moveTo(lx - sg * 70, ly - ry * 0.95); p.bezierCurveTo(lx + sg * rx, ly - ry * 1.05, lx + sg * rx * 1.12, ly + ry * 0.7, lx + sg * rx * 0.7, ly + ry); p.bezierCurveTo(lx, ly + ry * 1.1, lx - sg * rx * 0.75, ly + ry * 0.75, lx - sg * 60, ly - ry * 0.95); p.closePath();
      fillKey(c, p, vbok(c, ly - ry, ly + ry, [[0, '#ebb7a4'], [0.6, '#d98a78'], [1, '#b8624f']]), 4.5);
      c.strokeStyle = 'rgba(27,34,54,0.45)'; c.lineWidth = 3; for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(lx - sg * 30, ly - 70 + i * 50); c.quadraticCurveTo(lx + sg * 40, ly - 50 + i * 50, lx + sg * 80 * lung, ly - 20 + i * 62); c.stroke(); } }
    // diaphragm: the vermilion dome
    const dp = dipath(d); c.save(); c.lineCap = 'round'; c.strokeStyle = C.key; c.lineWidth = 46; c.stroke(dp); c.strokeStyle = fire > 0 ? '#e0512f' : C.red; c.lineWidth = 36 + 14 * bump(t, 6.26, 0.6); c.stroke(dp); c.strokeStyle = 'rgba(241,232,210,0.35)'; c.lineWidth = 3; for (let o = -9; o <= 9; o += 9) { c.save(); c.translate(0, o); c.stroke(dp); c.restore(); } c.restore();
    c.restore();
    // windpipe with its two branches
    tube(c, [[530, 960], [530, 1010], [440, 1060]], 44, '#e7c0ae'); tube(c, [[530, 960], [530, 1010], [620, 1060]], 44, '#e7c0ae');
    // head
    fillKey(c, HEAD, vbok(c, 215, 810, [[0, '#f5e6c8'], [1, '#e9d2a8']]), 5);
    c.save(); c.clip(HEAD);
    const hair = new Path2D(); hair.moveTo(660, 270); hair.quadraticCurveTo(580, 330, 500, 335); hair.quadraticCurveTo(450, 420, 450, 520); hair.lineTo(420, 700); hair.lineTo(250, 700); hair.lineTo(250, 150); hair.lineTo(700, 150); hair.closePath(); c.fillStyle = C.key; c.fill(hair);
    c.strokeStyle = 'rgba(147,180,204,0.5)'; c.lineWidth = 2; for (let i = 0; i < 9; i++) { c.beginPath(); c.moveTo(340 + i * 8, 610 - i * 6); c.quadraticCurveTo(350 + i * 12, 330 + i * 6, 640 - i * 10, 250 + i * 6); c.stroke(); }
    c.restore();
    // topknot
    c.save(); c.translate(475, 195); c.rotate(-0.25); const tk = new Path2D(); tk.rect(-85, -26, 170, 52); c.fillStyle = C.key; c.fill(tk); c.fillStyle = C.foam; c.fillRect(-20, -26, 16, 52); c.restore();
    // face: eye squeezes shut on a hiccup, brow lifts
    c.strokeStyle = C.key; c.lineCap = 'round'; c.lineWidth = 7; c.beginPath(); c.moveTo(610, 372 - hic * 16); c.quadraticCurveTo(650, 355 - hic * 16, 690, 385 - hic * 10); c.stroke();
    c.lineWidth = 8; c.beginPath(); if (hic > 0.3) { c.moveTo(620, 420); c.lineTo(670, 408); c.lineTo(622, 396); } else { c.moveTo(618, 408); c.quadraticCurveTo(650, 396, 684, 420); } c.stroke();
    c.save(); c.globalAlpha = 0.35; c.fillStyle = '#d9694f'; c.beginPath(); c.ellipse(610, 520, 40, 22, 0, 0, 7); c.fill(); c.restore();
    // cut-open brain with brainstem
    const br = new Path2D(); br.ellipse(450, 345, 112, 82, -0.1, 0, 7); fillKey(c, br, vbok(c, 265, 430, [[0, '#f1cfc0'], [1, '#d9a08e']]), 4);
    c.strokeStyle = 'rgba(27,34,54,0.55)'; c.lineWidth = 3; for (let i = 0; i < 4; i++) { c.beginPath(); c.arc(400 + i * 36, 320 + (i % 2) * 40, 26, 0.3, 2.7); c.stroke(); }
    tube(c, [[452, 415], [462, 490], [455, 590]], 38, fire > 0 ? '#e0512f' : C.ochre);
    if (fire > 0) { for (let i = 0; i < 3; i++) { const u = (t * 2.6 + i / 3) % 1; c.save(); c.globalAlpha = (1 - u) * 0.9 * Math.min(1, fire * 3); c.strokeStyle = C.red; c.lineWidth = 7; c.beginPath(); c.arc(458, 490, 26 + u * 90, 0, 7); c.stroke(); c.restore(); } }
    // airway mouth to chest
    tube(c, AIRWAY, 58, '#e7c0ae');
    c.strokeStyle = 'rgba(27,34,54,0.4)'; c.lineWidth = 3; for (let y = 790; y < 985; y += 26) { c.beginPath(); c.moveTo(508, y); c.quadraticCurveTo(530, y + 9, 552, y); c.stroke(); }
    // vocal cords: two gates that snap together across the throat
    const gy = 722; for (const sg of [-1, 1]) { c.save(); c.translate(530 + sg * 30, gy); c.rotate(sg * (1 - g) * -1.0 * -1); const f = new Path2D(); f.rect(sg < 0 ? 0 : -33, -14, 33, 28); fillKey(c, f, g > 0.5 ? C.red : '#c9583f', 3); c.restore(); }
  };

  // ----- gold kasumi bank that sweeps across to change scene (cached) -----
  let BANK = null;
  const bank = () => { if (BANK) return BANK; BANK = H.layer(1500, 1920); const k = BANK.getContext('2d'), r = H.rng(44); const sh = new Path2D(); sh.rect(170, -10, 1160, 1940); const lobes = [];
    for (let y = -20; y <= 1940; y += 92) { lobes.push([170 + r.range(-24, 24), y]); lobes.push([1330 + r.range(-24, 24), y + 40]); }
    k.strokeStyle = 'rgba(27,34,54,0.8)'; k.lineWidth = 5; lobes.forEach(([x, y]) => { k.beginPath(); k.arc(x, y, 72, 0, 7); k.stroke(); });
    lobes.forEach(([x, y]) => { sh.moveTo(x + 72, y); sh.arc(x, y, 72, 0, 7); });
    const g = k.createLinearGradient(0, 0, 1500, 0); g.addColorStop(0, '#ece0bc'); g.addColorStop(0.2, '#e2cd92'); g.addColorStop(0.5, '#d4b25a'); g.addColorStop(0.8, '#e2cd92'); g.addColorStop(1, '#ece0bc'); k.fillStyle = g; k.fill(sh);
    const m = H.rng(991); for (let i = 0; i < 9000; i++) { k.fillStyle = m() < 0.8 ? `rgba(255,248,222,${m.range(0.3, 0.7)})` : `rgba(150,110,40,${m.range(0.15, 0.3)})`; k.fillRect(m.range(0, 1500), m.range(0, 1920), 2, 2); }
    return BANK; };

  // ----- print backgrounds, one per scene -----
  const plate = (c, name, t) => {
    if (name === 'sun') { c.fillStyle = vbok(c, 0, 1500, [[0, '#7c8a92'], [0.14, C.sky], [0.8, '#e7d8b4'], [1, '#efe5cc']]); c.fillRect(0, 0, W, 1500); c.beginPath(); c.arc(790, 470, 300, 0, 7); c.fillStyle = C.red; c.fill(); seaBand(c, 1480, t); }
    else if (name === 'pale') { c.fillStyle = vbok(c, 0, HH, [[0, C.pruss], [0.25, C.light], [0.7, C.pale], [1, '#e7e0c8']]); c.fillRect(0, 0, W, HH); }
    else if (name === 'night') { c.fillStyle = vbok(c, 0, HH, [[0, '#0d1c30'], [0.5, C.prussD], [1, C.pruss]]); c.fillRect(0, 0, W, HH); c.beginPath(); c.arc(860, 300, 120, 0, 7); c.fillStyle = C.foam; c.fill(); const r = H.rng(5); c.fillStyle = 'rgba(241,232,210,0.8)'; for (let i = 0; i < 70; i++) c.fillRect(r.range(0, W), r.range(0, 900), 3, 3); }
    else if (name === 'red') { c.fillStyle = vbok(c, 0, HH, [[0, '#7c2a1b'], [0.35, C.red], [0.75, '#e0966a'], [1, C.sky]]); c.fillRect(0, 0, W, HH); c.strokeStyle = 'rgba(241,232,210,0.16)'; c.lineWidth = 16; for (let i = 0; i < 26; i++) { const a = i / 26 * 6.283; c.beginPath(); c.moveTo(560, 700); c.lineTo(560 + Math.cos(a) * 1700, 700 + Math.sin(a) * 1700); c.stroke(); } }
  };
  const seaBand = (c, y, t) => { const g = c.createLinearGradient(0, y, 0, HH); g.addColorStop(0, C.light); g.addColorStop(0.2, C.mid); g.addColorStop(0.65, C.pruss); g.addColorStop(1, C.prussD); c.fillStyle = g; c.fillRect(0, y, W, HH - y);
    c.strokeStyle = 'rgba(241,232,210,0.75)'; c.lineWidth = 3; for (let i = 0; i < 9; i++) { const yy = y + 28 + i * 44; c.beginPath(); for (let x = 0; x <= W; x += 10) { const v = yy + Math.sin(x * 0.02 + i * 1.7 + t * 1.2) * 6; x ? c.lineTo(x, v) : c.moveTo(x, v); } c.stroke(); }
    for (let i = 0; i < 9; i++) { const fx = i * 130 + 20, r = H.rng(100 + i * 7); claw(c, fx, y + Math.sin(fx * 0.02 + t) * 6, 0.25, -1, 1, 0.25, 34, r); } };

  // flowing current with claw head, in world coords
  const current = (c, pts, p, w = 16, foam = true, L = 46) => { if (p <= 0) return; const poly = sample(pts, 14), n = Math.max(2, Math.floor(poly.length * Math.min(1, p))), part = poly.slice(0, n), nn = normals(part);
    for (const off of [-w * 0.8, 0, w * 0.8]) { c.strokeStyle = off ? C.mid : C.pruss; c.lineWidth = off ? w * 0.3 : w * 0.7; c.lineCap = 'round'; c.beginPath(); part.forEach(([x, y], i) => { const X = x + nn[i].nx * off, Y = y + nn[i].ny * off; i ? c.lineTo(X, Y) : c.moveTo(X, Y); }); c.stroke(); }
    if (foam) { const e = part[part.length - 1], q = nn[nn.length - 1], r = H.rng(7); claw(c, e[0], e[1], q.tx * 0.7 + q.nx * 0.3, q.ty * 0.7 + q.ny * 0.3, -q.nx, -q.ny, L, r); } };

  const bowl = (c, x, y, s, p, t) => { if (p <= 0) return; c.save(); c.translate(x, y + Math.sin(t * 14) * 5); c.scale(s * p, s * p);
    const b = new Path2D(); b.moveTo(-90, -10); b.quadraticCurveTo(-80, 80, 0, 82); b.quadraticCurveTo(80, 80, 90, -10); b.closePath();
    const rice = new Path2D(); rice.moveTo(-84, -8); rice.quadraticCurveTo(0, -80, 84, -8); rice.closePath(); fillKey(c, rice, C.foam, 3); fillKey(c, b, vbok(c, -10, 82, [[0, '#d65438'], [1, '#8f2c1b']]), 3.5);
    c.strokeStyle = C.key; c.lineWidth = 8; c.lineCap = 'round'; c.beginPath(); c.moveTo(20, -30); c.lineTo(120, -110 + Math.sin(t * 22) * 22); c.moveTo(44, -22); c.lineTo(140, -86 + Math.sin(t * 22) * 22); c.stroke(); c.restore(); };
  const cup = (c, x, y, s, p, t) => { if (p <= 0) return; c.save(); c.translate(x, y); c.rotate(-0.12); c.scale(s * p, s * p);
    const b = new Path2D(); b.moveTo(-58, -80); b.lineTo(58, -80); b.lineTo(44, 84); b.lineTo(-44, 84); b.closePath(); fillKey(c, b, vbok(c, -80, 84, [[0, C.light], [1, C.mid]]), 3.5);
    const r = H.rng(3); c.save(); c.clip(b); for (let i = 0; i < 16; i++) { const bx = r.range(-46, 46), sp = r.range(50, 110), yy = 84 - ((t * sp + i * 37) % 170); c.beginPath(); c.arc(bx, yy, r.range(4, 9), 0, 7); c.fillStyle = C.foam; c.fill(); c.strokeStyle = C.key; c.lineWidth = 1.5; c.stroke(); } c.restore(); c.restore(); };

  // ----- non-figure panels -----
  const babyPanel = (c, t) => {
    plate(c, 'pale', t); c.fillStyle = 'rgba(36,80,126,0.35)'; c.fillRect(0, 0, W, HH);
    const pz = 1 + 0.03 * bump(t, 36.0, 0.5) + 0.03 * bump(t, 36.9, 0.5), cx = 540, cy = 900, R = 390;
    const halo = new Path2D(); halo.arc(cx, cy, R, 0, 7); fillKey(c, halo, (() => { const g = c.createRadialGradient(cx, cy, 40, cx, cy, R); g.addColorStop(0, '#f0c9a0'); g.addColorStop(0.65, '#d9694f'); g.addColorStop(1, '#8f2c1b'); return g; })(), 6);
    c.save(); c.translate(cx, cy); c.scale(pz, pz); c.rotate(0.08 * Math.sin(t * 1.2));
    const body = new Path2D(); body.moveTo(-40, -60); body.bezierCurveTo(130, -110, 210, 50, 110, 150); body.bezierCurveTo(30, 230, -110, 170, -90, 60); body.closePath(); fillKey(c, body, vbok(c, -100, 200, [[0, '#f5e0c2'], [1, '#e6c49c']]), 5);
    const arm = new Path2D(); arm.moveTo(-40, 20); arm.quadraticCurveTo(-10, 90, 70, 70); arm.quadraticCurveTo(50, 40, 0, 10); arm.closePath(); fillKey(c, arm, '#efd4b0', 4);
    const leg = new Path2D(); leg.moveTo(110, 130); leg.quadraticCurveTo(10, 220, -50, 140); leg.quadraticCurveTo(10, 150, 80, 90); leg.closePath(); fillKey(c, leg, '#efd4b0', 4);
    const head = new Path2D(); head.arc(-70, -110, 118, 0, 7); fillKey(c, head, vbok(c, -230, 10, [[0, '#f9ecd2'], [1, '#ecd4ae']]), 5);
    c.strokeStyle = C.key; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.arc(-122, -112, 16, 0.2, 2.9); c.stroke(); c.beginPath(); c.arc(-140, -60, 12, 0.1, 2.6); c.stroke(); c.restore();
    for (const t0 of [36.0, 36.9]) { const u = S(t, t0, t0 + 0.6); if (u > 0 && u < 1) { c.save(); c.globalAlpha = 1 - u; c.strokeStyle = C.foam; c.lineWidth = 8; c.beginPath(); c.arc(cx, cy, R * (0.55 + u * 0.55), 0, 7); c.stroke(); c.restore(); bigWord(c, 'hic', 860, 470, 96, 1 - u * 0.4); } }
    cart(c, 'BEFORE BIRTH', 540, 1460, 76, S(t, 35.7, 35.95));
  };
  const whyPanel = (c, t) => {
    c.fillStyle = vbok(c, 0, 1500, [[0, '#2e3e54'], [0.16, C.sky], [0.85, '#e7d8b4'], [1, '#efe5cc']]); c.fillRect(0, 0, W, 1500);
    c.beginPath(); c.arc(760, 900, 170, 0, 7); c.fillStyle = C.red; c.fill();
    const fuji = new Path2D(); fuji.moveTo(60, 1500); fuji.quadraticCurveTo(330, 1250, 450, 900); fuji.lineTo(620, 895); fuji.quadraticCurveTo(760, 1250, 1040, 1500); fuji.closePath(); fillKey(c, fuji, vbok(c, 895, 1500, [[0, C.prussD], [0.55, C.fuji], [1, C.light]]), 5);
    const cap = new Path2D(); cap.moveTo(450, 900); cap.lineTo(620, 895); cap.lineTo(680, 1030); cap.lineTo(620, 985); cap.lineTo(570, 1040); cap.lineTo(520, 980); cap.lineTo(470, 1035); cap.lineTo(410, 1000); cap.closePath(); fillKey(c, cap, C.foam, 3.5);
    seaBand(c, 1480, t);
    const up = EO(t, 39.9, 40.3), wy = H.lerp(800, 310, up), ws = H.lerp(1, 0.62, up);
    bigWord(c, 'WHY?', 540, wy, 240 * ws, S(t, 39.3, 39.5));
    const q = S(t, 37.7, 38.0) * (1 - S(t, 39.25, 39.45)); if (q > 0) { seal(c, 540, 800, 300, '?', q); }
    const sc = (y, label, p, draw) => { if (p <= 0) return; const a = H.ease.back(Math.min(1, p)); c.save(); c.translate(540, y); c.scale(a, a); const r = new Path2D(); r.rect(-400, -220, 800, 440); fillKey(c, r, vbok(c, -220, 220, [[0, '#f6eed9'], [1, '#e6d8b6']]), 5); c.strokeStyle = C.key; c.lineWidth = 2; c.strokeRect(-386, -206, 772, 412); draw(c); c.font = '900 66px "Noto Serif JP"'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = C.key; c.fillText(label, 0, 160); c.restore(); };
    sc(690, 'CLEARS AIR', S(t, 41.2, 41.55), (k) => { const p = new Path2D(); p.moveTo(-70, -130); p.bezierCurveTo(70, -150, 140, -70, 120, 10); p.bezierCurveTo(100, 80, -30, 100, -110, 60); p.bezierCurveTo(-170, 20, -140, -40, -100, -50); p.closePath(); fillKey(k, p, vbok(k, -140, 90, [[0, '#e6be76'], [1, '#b0803c']]), 4); const r = H.rng(2); for (let i = 0; i < 8; i++) { const x = r.range(-90, 90), yy = 50 - ((t * 70 + i * 31) % 190); k.beginPath(); k.arc(x * (yy < -100 ? 0.3 : 1) - 40 * (yy < -100 ? 1 : 0), yy, r.range(8, 15), 0, 7); k.fillStyle = C.foam; k.fill(); k.strokeStyle = C.key; k.lineWidth = 2.5; k.stroke(); } });
    sc(1230, 'LEFTOVER REFLEX', S(t, 45.0, 45.3), (k) => { gear(k, -70, -30, 90, 0.2 + Math.sin(t * 0.8) * 0.03, '#a58a5a'); gear(k, 105, -65, 54, 0.4, '#8a7650');  });
  };

  const state = (t) => {
    let d = 0, lung = 1, sw = 1, g = 0, fire = 0, hic = 0;
    // breathing in the "normally" stretch: slow, smooth
    if (t > 9.3 && t < 14.6) { const b = (1 - Math.cos((t - 9.6) * 1.5)) / 2; d = 34 * b; lung = 1 + 0.08 * b; }
    // stomach swells on "swells", pushing the dome up a little
    sw = 1 + 0.26 * H.ease.inOut(S(t, 18.05, 19.0)) * (1 - S(t, 33.5, 34.6));
    d -= 34 * H.ease.inOut(S(t, 18.1, 19)) * (1 - S(t, 23.72, 23.8));
    // the jerk, on "jerks"
    const J = 23.72; if (t > J && t < 34.6) { const u = EO(t, J, J + 0.1); d = -34 + (34 + 88) * u + 8 * Math.sin((t - J) * 26) * Math.exp(-(t - J) * 5); lung = 1 + 0.12 * u; d *= 1 - 0.6 * S(t, 32.5, 34.4); }
    fire = (t > 20.4 && t < 24.4) ? 1 : 0;
    // cords: slam in the hook, snap on "snap", slam again at the end
    const close = (a, e) => S(t, a, a + 0.06) * (1 - S(t, e, e + 0.2));
    g = Math.max(close(0.9, 3.3), close(30.1, 34.4), close(48.35, 52.5));
    hic = Math.max(bump(t, 3.7, 0.5), bump(t, 23.72, 0.5), S(t, 30.1, 30.2) * (1 - S(t, 34.3, 34.6)));
    return { d, lung, sw, g, fire, hic };
  };

  const scene = (t) => (t < CUT.rush ? 'fig1' : t < CUT.baby ? 'fig2' : t < CUT.why ? 'baby' : t < CUT.end ? 'why' : 'end');

  const explainer = (c, W_, H_, t) => {
    const sn = scene(t);
    if (sn === 'baby') babyPanel(c, t);
    else if (sn === 'why') whyPanel(c, t);
    else {
      // backgrounds, crossfaded where the camera travels
      if (sn === 'fig1') { const a = S(t, 4.3, 5.1), b = S(t, 19.5, 20.2); if (b >= 1) plate(c, 'night', t); else if (a >= 1) { plate(c, 'pale', t); if (b > 0) { c.save(); c.globalAlpha = b; plate(c, 'night', t); c.restore(); } } else { plate(c, 'sun', t); if (a > 0) { c.save(); c.globalAlpha = a; plate(c, 'pale', t); c.restore(); } } }
      else if (sn === 'fig2') plate(c, 'red', t); else plate(c, 'sun', t);
      const [cx, cy, z] = cam(t), st = state(t), sh = st.hic > 0.5 && t < 34.6 ? Math.sin(t * 70) * 7 * (st.hic - 0.5) : 0;
      c.save(); c.translate(540 + sh, 900); c.scale(z, z); c.translate(-cx, -cy);
      figure(c, t, st);
      // breathing current
      if (t > 11.5 && t < 14.3) current(c, [[715, 578], [620, 585], [552, 620], [530, 700], [530, 860], [530, 985]], S(t, 11.7, 13.4), 14, true, 34);
      // signal from the brainstem down to the diaphragm
      const sp = H.ease.inOut(S(t, 22.0, 23.72)); if (sp > 0 && t < 25.3) { const pts = sample([[455, 590], [380, 690], [250, 900], [190, 1150], [235, 1400]], 16), n = Math.max(2, Math.floor(pts.length * sp)), pp = pathOf(pts.slice(0, n)); c.save(); c.lineCap = 'round'; c.strokeStyle = C.foam; c.lineWidth = 22; c.stroke(pp); c.strokeStyle = C.red; c.lineWidth = 13; c.stroke(pp); c.restore(); }
      // air rushes in down the throat as a breaking wave, then smashes on the shut cords
      if (sn === 'fig2') {
        const au = H.ease.inOut(S(t, 25.68, 26.7)); const wave = [[800, 545], [715, 578], [620, 585], [552, 620], [530, 660], [530, 700]];
        if (t < 33.3) current(c, wave, au * 0.92 + (t > 30.1 ? 0.08 : 0), 20, true, 62);
        if (t < 30.1) { const r2 = S(t, 27.0, 29.0); if (r2 > 0) current(c, [[530, 720], [530, 860], [530, 985]], r2, 14, true, 34); }
        if (t > 31.6 && t < 33.8) { const u = S(t, 31.6, 33.3), r = H.rng(77); for (let i = 0; i < 16; i++) { const a = -Math.PI * r(), sp2 = r.range(90, 240); const x = 530 + Math.cos(a) * sp2 * EO(t, 31.6, 32.6), y = 700 + Math.sin(a) * sp2 * 0.75 * EO(t, 31.6, 32.6) + 60 * u * u; c.save(); c.globalAlpha = 1 - u * 0.9; claw(c, x, y, Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 46, r); c.restore(); } }
      }
      for (const t0 of [0.95, 30.16, 48.39]) { const u = S(t, t0, t0 + 0.4); if (u > 0 && u < 1) { c.save(); c.globalAlpha = 1 - u; c.strokeStyle = C.red; c.lineCap = 'round'; c.lineWidth = 10; for (let i = 0; i < 10; i++) { if (i === 2 || i === 7) continue; const a = i / 10 * 6.283, r0 = 62 + u * 40, r1 = r0 + 56; c.beginPath(); c.moveTo(530 + Math.cos(a) * r0, 722 + Math.sin(a) * r0); c.lineTo(530 + Math.cos(a) * r1, 722 + Math.sin(a) * r1); c.stroke(); } c.restore(); } }
      c.restore();
      // ---------- screen-space labels ----------
      if (sn === 'fig1') {
        const hookEnd = 1 - S(t, 4.3, 4.6);
        cart(c, '35 ms', 300, 1480, 140, S(t, 1.45, 1.65) * hookEnd, '#e8b07a');
        bigWord(c, 'HIC!', 760, 1180, 170, S(t, 3.6, 3.8) * hookEnd);
        const tb = 1 - S(t, 14.2, 14.5);
        cart(c, 'DIAPHRAGM', 540, 1555, 92, S(t, 6.15, 6.35) * tb, '#e8b07a');
        cart(c, 'LUNGS', 540, 360, 84, S(t, 8.6, 8.8) * tb);
        const fd = 1 - S(t, 19.4, 19.7);
        bowl(c, 250, 380, 1.15, EO(t, 14.55, 14.9) * fd, t); cup(c, 830, 380, 1.15, EO(t, 16.0, 16.3) * fd, t);
        cart(c, 'TOO FAST', 250, 590, 56, S(t, 14.9, 15.1) * fd); cart(c, 'FIZZY', 830, 590, 56, S(t, 16.3, 16.5) * fd);
        cart(c, 'STOMACH SWELLS', 540, 1590, 76, S(t, 17.9, 18.1) * fd, '#e8b07a');
        const be = 1 - S(t, 22.4, 22.7);
        cart(c, 'HICCUP CENTER', 540, 1250, 84, S(t, 20.4, 20.6) * be);
        cart(c, 'BRAINSTEM', 540, 1410, 84, S(t, 21.25, 21.45) * be, '#e8b07a');
        bigWord(c, 'JERK!', 540, 340, 150, S(t, 23.65, 23.85) * (1 - S(t, 25.2, 25.35)));
      } else if (sn === 'fig2') {
        cart(c, 'AIR RUSHES IN', 540, 240, 84, S(t, 25.6, 25.8) * (1 - S(t, 28.9, 29.1)));
        cart(c, 'A SPLIT SECOND', 540, 1540, 84, S(t, 27.7, 27.9) * (1 - S(t, 29.0, 29.2)), '#e8b07a');
        cart(c, 'VOCAL CORDS', 540, 1540, 92, S(t, 29.6, 29.8) * (1 - S(t, 33.2, 33.4)));
        bigWord(c, 'SNAP!', 540, 280, 150, S(t, 30.1, 30.25) * (1 - S(t, 31.5, 31.7)));
        bigWord(c, 'HIC!', 540, 400, 300, S(t, 33.9, 34.1));
      } else {
        bigWord(c, 'HIC!', 770, 1190, 170, S(t, 48.6, 48.8) * (1 - S(t, 49.8, 50)));
        cart(c, 'YOUR TRICK?', 540, 1500, 108, S(t, 49.9, 50.1), '#e8b07a');
        seal(c, 880, 1280, 150, '?', S(t, 50.9, 51.1));
      }
    }
    // kasumi wipe
    for (const k of Object.values(CUT)) { const u = (t - k + 0.33) / 0.66; if (u > 0 && u < 1) c.drawImage(bank(), H.lerp(1200, -1620, u), 0); }
    // ---------- woodblock finish on every frame ----------
    const img = c.getImageData(0, 0, W, HH), d = img.data, { warp, fine, pap, blot } = fields(W, HH), rg = H.rng(2);
    for (let y = 0, p = 0; y < HH; y++) for (let x = 0; x < W; x++, p++) {
      const i = p * 4, lum = (d[i] * 0.3 + d[i + 1] * 0.55 + d[i + 2] * 0.15) / 255, inked = H.clamp((0.85 - lum) * 1.6, 0, 1), plate_ = H.clamp((0.94 - lum) * 1.3, 0, 1);
      const grain = Math.sin(y * 0.55 + warp[p] * 26 + x * 0.004) * 0.5 + fine[p] * 0.8;
      let s = 1 + grain * (0.07 + 0.07 * inked) * plate_; s *= 1 + pap[p] * 0.035 + (rg() - 0.5) * 0.04; s *= 1 - Math.max(0, blot[p]) * 0.12 * plate_;
      d[i] = d[i] * s + 6 * (1 - inked); d[i + 1] = d[i + 1] * s; d[i + 2] = d[i + 2] * s * 0.97 - 4 * (1 - inked);
    }
    c.putImageData(img, 0, 0); c.drawImage(fibres(W, HH), 0, 0); H.vignette(c, W, HH, 0.25, '90,60,30');
  };

  const scoreSound = (k) => {
    const hicS = (t, g = 1) => { k.tone(t, { f: [[0, 520], [0.09, 170]], type: 'triangle', dur: 0.16, gain: 0.38 * g, a: 0.003 }); k.noise(t, { dur: 0.06, filter: 'bandpass', f: 1250, q: 6, gain: 0.5 * g, a: 0.001 }); };
    const sealP = (t, g = 1) => k.play('stamp', t, { gain: 0.6 * g });
    const swish = (t, dur, g = 1) => k.noise(t, { dur: dur + 0.15, color: 'pink', filter: 'bandpass', f: [[0, 400], [dur * 0.6, 1100], [dur + 0.15, 500]], q: 1.1, gain: 0.12 * g, a: dur * 0.5, minor: true });
    // slam, number, hic
    k.play('thud', 0.95, { gain: 0.8 }); sealP(1.57); hicS(3.73);
    k.play('whoosh', 4.3, { gain: 0.5, minor: true });
    sealP(6.26, 0.7); sealP(8.71, 0.7);
    swish(11.7, 1.6); swish(9.8, 1.2, 0.6);
    k.play('tick', 14.9, { minor: true }); k.play('tock', 15.15, { minor: true }); for (let i = 0; i < 6; i++) k.play('pop', 16.3 + i * 0.09, { f: 700 + i * 90, gain: 0.3, minor: true });
    k.play('press', 18.1, { gain: 0.5 });
    k.play('whoosh', 19.5, { gain: 0.5, minor: true }); sealP(20.52, 0.6); sealP(21.36, 0.6);
    k.play('blip', 21.98, { minor: true }); swish(22.0, 1.7, 1.2); k.play('thud', 23.77, { gain: 1 }); hicS(23.77, 0.5);
    k.play('paper', CUT.rush - 0.3, { dur: 0.6, gain: 0.7 });
    swish(25.68, 1.0, 2); sealP(27.79, 0.5); sealP(29.79, 0.6);
    k.play('stamp', 30.16, { gain: 1 }); k.play('thud', 31.62, { gain: 0.8 }); swish(31.62, 0.8, 1.2);
    hicS(34.03, 1.1); k.play('paper', CUT.baby - 0.3, { dur: 0.6, gain: 0.7 });
    hicS(36.0, 0.35); hicS(36.9, 0.35); k.play('paper', CUT.why - 0.3, { dur: 0.6, gain: 0.7 });
    sealP(38.0, 0.7); k.play('bell', 39.44, { gain: 0.5 }); sealP(41.41); k.play('tock', 45.87); sealP(45.2);
    k.play('paper', CUT.end - 0.3, { dur: 0.6, gain: 0.7 }); k.play('thud', 48.39, { gain: 0.8 }); hicS(48.7, 0.7); sealP(50.03); sealP(51.0);
  };

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
})();
