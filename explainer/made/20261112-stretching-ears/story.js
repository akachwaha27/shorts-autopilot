// ================= Halftone Dossier, vertical 1080x1920: "Why do your ears and nose seem to keep growing as you age?" =================
// Style: Lemo-Opuscar "Halftone Dossier" (STYLE.md grammar; own drawing code, no demo assets). Unattended run: no storyboard step.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":2.19,"text":"Your ears never stop getting longer,","words":[["your",0.25],["ears",0.51],["never",0.77],["stop",1.09],["getting",1.35],["longer",1.8]]},{"s":2.53,"e":3.64,"text":"but they aren't growing.","words":[["but",2.53],["they",2.71],["arent",2.94],["growing",3.23]]},{"s":4.11,"e":6.31,"text":"Your nose droops lower every year too.","words":[["your",4.11],["nose",4.4],["droops",4.68],["lower",5.1],["every",5.46],["year",5.81],["too",6.1]]},{"s":6.73,"e":8.03,"text":"So what's stretching them?","words":[["so",6.73],["whats",6.86],["stretching",7.16],["them",7.78]]},{"s":8.52,"e":10.9,"text":"Your bones stopped getting longer years ago.","words":[["your",8.52],["bones",8.78],["stopped",9.1],["getting",9.55],["longer",10.0],["years",10.38],["ago",10.7]]},{"s":11.26,"e":13.66,"text":"The floppy parts of your ears and nose","words":[["the",11.26],["floppy",11.49],["parts",11.95],["of",12.34],["your",12.5],["ears",12.81],["and",13.12],["nose",13.35]]},{"s":13.73,"e":14.94,"text":"are cartilage and skin,","words":[["are",13.73],["cartilage",13.92],["and",14.49],["skin",14.68]]},{"s":15.57,"e":19.04,"text":"held up by springy fibers called collagen and elastin.","words":[["held",15.57],["up",15.88],["by",16.03],["springy",16.19],["fibers",16.73],["called",17.19],["collagen",17.65],["and",18.27],["elastin",18.5]]},{"s":19.5,"e":20.4,"text":"As you get older,","words":[["as",19.5],["you",19.64],["get",19.85],["older",20.06]]},{"s":20.74,"e":22.92,"text":"your body makes fewer of those fibers.","words":[["your",20.74],["body",21.02],["makes",21.31],["fewer",21.66],["of",22.01],["those",22.15],["fibers",22.5]]},{"s":23.37,"e":24.52,"text":"The springs get weaker,","words":[["the",23.37],["springs",23.55],["get",23.98],["weaker",24.16]]},{"s":24.76,"e":25.84,"text":"and gravity wins.","words":[["and",24.76],["gravity",24.99],["wins",25.53]]},{"s":26.32,"e":27.49,"text":"Every single year","words":[["every",26.32],["single",26.71],["year",27.18]]},{"s":27.57,"e":29.45,"text":"it pulls them down a tiny bit more.","words":[["it",27.57],["pulls",27.71],["them",28.06],["down",28.34],["a",28.62],["tiny",28.69],["bit",28.96],["more",29.17]]},{"s":29.89,"e":31.32,"text":"Earlobes stretch the most,","words":[["earlobes",29.89],["stretch",30.41],["the",30.86],["most",31.06]]},{"s":31.75,"e":34.41,"text":"because there's no cartilage inside them at all.","words":[["because",31.75],["theres",32.22],["no",32.63],["cartilage",32.77],["inside",33.38],["them",33.79],["at",34.07],["all",34.2]]},{"s":34.85,"e":36.08,"text":"Just skin and fat.","words":[["just",34.85],["skin",35.2],["and",35.55],["fat",35.82]]},{"s":36.44,"e":39.42,"text":"One study of two hundred and six adults found","words":[["one",36.44],["study",36.68],["of",37.08],["two",37.25],["hundred",37.49],["and",38.05],["six",38.29],["adults",38.53],["found",39.02]]},{"s":39.51,"e":43.08,"text":"ears get about zero point two two millimeters longer every year","words":[["ears",39.51],["get",39.78],["about",39.98],["zero",40.32],["point",40.59],["two",40.92],["two",41.13],["millimeters",41.33],["longer",42.07],["every",42.47],["year",42.81]]},{"s":43.37,"e":45.06,"text":"after age thirty.","words":[["after",43.37],["age",43.97],["thirty",44.34]]},{"s":45.47,"e":47.78,"text":"That's roughly a whole centimeter by eighty.","words":[["thats",45.47],["roughly",45.79],["a",46.24],["whole",46.31],["centimeter",46.63],["by",47.27],["eighty",47.39]]},{"s":48.2,"e":49.54,"text":"So nothing's growing.","words":[["so",48.2],["nothings",48.36],["growing",48.98]]},{"s":49.88,"e":51.86,"text":"Your face is just slowly sagging.","words":[["your",49.88],["face",50.17],["is",50.46],["just",50.61],["slowly",50.91],["sagging",51.35]]},{"s":52.25,"e":54.86,"text":"So how much longer will your ears be at a hundred?","words":[["so",52.25],["how",52.39],["much",52.59],["longer",52.85],["will",53.25],["your",53.52],["ears",53.79],["be",54.06],["at",54.19],["a",54.32],["hundred",54.39]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const C = { paper: '#efe5cf', ink: '#1c2240', cob: '#2f56c9', yel: '#f3c230', pink: '#ec5c8c', red: '#d8333b', skin: '#f1b08a', skin2: '#f8d2b4', skinD: '#d98a68', hair: '#dcd6cc', bone: '#f7eedb' };
  const F = { head: (s) => `900 ${s}px "Noto Serif JP"`, num: (s) => `700 ${s}px "Fredoka"`, hand: (s) => `400 ${s}px "Permanent Marker"`, mono: (s) => `500 ${s}px "DM Mono"`, sans: (s) => `900 ${s}px "Inter Tight"` };
  try { [F.head(100), F.num(100), F.hand(100), F.mono(40), F.sans(50)].forEach((f) => document.fonts.load(f, 'AaZz09?!+.:')); } catch (e) {}
  let REC = null;
  const cache = (() => { const m = {}; return (k, f) => m[k] || (m[k] = f()); })();
  const clamp = H.clamp, back = H.ease.back, eo = H.ease.out, eio = H.ease.inOut;
  const seg = (t, a, b) => clamp((t - a) / (b - a));

  // ---------------- print materials ----------------
  function halftone(c, x0, y0, w, h, step, ang, color, dens, k = 0.68) {
    c.save(); c.fillStyle = color; c.beginPath();
    const ca = Math.cos(ang), sa = Math.sin(ang), cx = x0 + w / 2, cy = y0 + h / 2, R = Math.hypot(w, h) / 2 + step;
    for (let v = -R; v <= R; v += step) for (let u = -R; u <= R; u += step) {
      const x = cx + u * ca - v * sa, y = cy + u * sa + v * ca;
      if (x < x0 - step || x > x0 + w + step || y < y0 - step || y > y0 + h + step) continue;
      const d = dens(x, y); if (d <= 0.03) continue;
      const r = Math.min(d, 1.05) * step * k; c.moveTo(x + r, y); c.arc(x, y, r, 0, TAU);
    }
    c.fill(); c.restore();
  }
  const radial = (cx, cy, r0, r1, a = 1) => (x, y) => a * (1 - clamp((Math.hypot(x - cx, y - cy) - r0) / (r1 - r0)));
  const linY = (ya, yb, a = 1, b = 0) => (x, y) => H.lerp(a, b, clamp((y - ya) / (yb - ya)));
  const linX = (xa, xb, a = 1, b = 0) => (x, y) => H.lerp(a, b, clamp((x - xa) / (xb - xa)));
  const edgeD = (m, a = 1) => (x, y) => a * clamp(1 - Math.min(x, W0 - x, y, H0 - y) / m);

  const PAPER = () => cache('paper', () => {
    const L = H.layer(W0, H0), c = L.getContext('2d');
    const M = H.layer(54, 96), mc = M.getContext('2d'), nz = H.makeNoise(11), id = mc.createImageData(54, 96);
    for (let j = 0; j < 96; j++) for (let i = 0; i < 54; i++) { const v = nz.fbm2(i * 0.12, j * 0.12, 3), k = (j * 54 + i) * 4, b = 236 + v * 26; id.data[k] = b + 8; id.data[k + 1] = b + 2; id.data[k + 2] = b - 8; id.data[k + 3] = 255; }
    mc.putImageData(id, 0, 0); c.imageSmoothingEnabled = true; c.drawImage(M, 0, 0, W0, H0);
    const g = c.getImageData(0, 0, W0, H0), d = g.data, r = H.rng(5);
    for (let i = 0; i < d.length; i += 4) { const n = (r() - 0.5) * 16; d[i] = Math.min(255, d[i] + n + 1); d[i + 1] = Math.min(255, d[i + 1] + n); d[i + 2] = Math.min(255, d[i + 2] + n - 1.5); }
    c.putImageData(g, 0, 0);
    const vg = c.createRadialGradient(W0 / 2, H0 / 2, 500, W0 / 2, H0 / 2, 1250); vg.addColorStop(0, 'rgba(120,90,60,0)'); vg.addColorStop(1, 'rgba(120,90,60,0.32)'); c.fillStyle = vg; c.fillRect(0, 0, W0, H0);
    const fg = c.createLinearGradient(0, 940, 0, 980); fg.addColorStop(0, 'rgba(110,90,70,0)'); fg.addColorStop(0.5, 'rgba(110,90,70,0.13)'); fg.addColorStop(0.55, 'rgba(255,255,255,0.1)'); fg.addColorStop(1, 'rgba(110,90,70,0)'); c.fillStyle = fg; c.fillRect(0, 940, W0, 40);
    return L;
  });
  function grain(ctx, t) {
    const r = H.rng(1000 + Math.floor(t * 15));
    ctx.save(); ctx.fillStyle = '#fbf5e6';
    for (let i = 0; i < 320; i++) { const s = r.range(1, 3.2); ctx.fillRect(r() * W0, r() * H0, s, s); }
    ctx.fillStyle = 'rgba(28,34,64,0.55)';
    for (let i = 0; i < 70; i++) { const s = r.range(1, 2.4); ctx.fillRect(r() * W0, r() * H0, s, s); }
    ctx.restore();
  }

  // ---------------- boil + ink shapes ----------------
  let BF = 0; // boil frame (10 fps), set per frame
  const jit = (x, y, k, amp = 2.6) => { const r = H.rng(((x * 73856093) ^ (y * 19349663) ^ (k * 83492791) ^ (BF * 2654435761)) >>> 0); return [x + (r() - 0.5) * 2 * amp, y + (r() - 0.5) * 2 * amp]; };
  function smoothClosed(c, pts) {
    const n = pts.length; c.moveTo((pts[n - 1][0] + pts[0][0]) / 2, (pts[n - 1][1] + pts[0][1]) / 2);
    for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n]; c.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); }
    c.closePath();
  }
  function smoothOpen(c, pts) {
    c.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1]; c.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); }
    const l = pts[pts.length - 1]; c.lineTo(l[0], l[1]);
  }
  const boil = (pts, k, amp) => pts.map((p, i) => jit(Math.round(p[0]), Math.round(p[1]), k + i, amp));
  const ell = (cx, cy, rx, ry, n = 22, a0 = 0) => Array.from({ length: n }, (_, i) => { const a = a0 + (i / n) * TAU; return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]; });
  function blob(c, pts, fill, k, o = {}) {
    const q = o.noBoil ? pts : boil(pts, k, o.amp ?? 2.4);
    c.beginPath(); smoothClosed(c, q);
    if (fill) { c.fillStyle = fill; c.fill(); }
    if (o.ht) { c.save(); c.clip(); c.globalCompositeOperation = 'multiply'; o.ht(c); c.restore(); c.beginPath(); smoothClosed(c, q); }
    if (o.lw !== 0) { c.lineWidth = o.lw || 7; c.lineJoin = 'round'; c.strokeStyle = o.stroke || C.ink; c.stroke(); }
  }
  function line(c, pts, lw, col, k, o = {}) {
    const q = o.noBoil ? pts : boil(pts, k, o.amp ?? 2);
    c.beginPath(); smoothOpen(c, q); c.lineWidth = lw; c.lineCap = 'round'; c.lineJoin = 'round'; c.strokeStyle = col; c.stroke();
  }

  // ---------------- type ----------------
  const fitSize = (c, text, font, size, maxW) => { c.font = font(size); const w = c.measureText(text).width; return w > maxW ? Math.floor(size * maxW / w) : size; };
  function headline(ctx, t, t0, text, x, y, size, o = {}) {
    if (t < t0) return; if (REC) REC.push(['head', t0, text.length]);
    const s = fitSize(ctx, text, F.head, size, o.maxW || 920);
    ctx.save(); ctx.font = F.head(s); ctx.textBaseline = 'alphabetic';
    const tw = ctx.measureText(text).width, x0 = o.center ? x - tw / 2 : x, stag = o.stag ?? 0.045;
    for (let i = 0; i < text.length; i++) {
      const ti = t0 + i * stag; if (t < ti || text[i] === ' ') continue;
      const u = clamp((t - ti) / 0.3), dy = -(1 - back(u)) * 70, sq = 1 + 0.18 * Math.exp(-(t - ti - 0.22) * 14) * Math.cos((t - ti - 0.22) * 30) * (t - ti > 0.22 ? 1 : 0);
      const cx = x0 + ctx.measureText(text.slice(0, i)).width;
      ctx.save(); ctx.translate(cx, y + dy); ctx.scale(1 / sq, sq);
      ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = o.shadow || C.pink; ctx.fillText(text[i], 9, 9);
      ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = o.color || C.ink; ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
    ctx.restore();
  }
  function popIn(t, t0, d = 0.38) { if (t < t0) return null; if (REC) REC.push(['pop', t0]); const u = clamp((t - t0) / d); return { s: Math.max(0, back(u)), u }; }
  function pill(ctx, t, t0, parts, x, y, size = 50) { // parts: [[text, highlight?], ...]
    const p = popIn(t, t0, 0.35); if (!p) return;
    ctx.save(); ctx.font = F.sans(size);
    const ws = parts.map((q) => ctx.measureText(q[0]).width), gap = size * 0.3, tw = ws.reduce((a, b) => a + b, 0) + gap * (parts.length - 1), w = tw + size * 1.2, h = size * 1.6;
    ctx.translate(x, y); ctx.scale(p.s, p.s);
    ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = C.pink; ctx.beginPath(); ctx.roundRect(-w / 2 + 10, -h / 2 + 10, w, h, h / 2); ctx.fill();
    ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = C.ink; ctx.beginPath(); ctx.roundRect(-w / 2, -h / 2, w, h, h / 2); ctx.fill();
    ctx.textBaseline = 'middle'; let cx = -tw / 2;
    parts.forEach((q, i) => { ctx.fillStyle = q[1] ? C.yel : C.paper; ctx.fillText(q[0], cx, 3); cx += ws[i] + gap; });
    ctx.restore();
  }
  const numSpr = (text, size, flat, dot, key) => cache('num' + key, () => {
    const m = H.layer(10, 10).getContext('2d'); m.font = F.num(size); const w = Math.ceil(m.measureText(text).width + 40), h = Math.ceil(size * 1.1);
    const L = H.layer(w, h), c = L.getContext('2d'); c.font = F.num(size); c.textBaseline = 'alphabetic'; c.fillStyle = flat; c.fillText(text, 20, size * 0.9);
    c.globalCompositeOperation = 'source-atop'; halftone(c, 0, 0, w, h, 22, 0.26, dot, linY(0, h, 0.15, 0.85), 0.68); return L;
  });
  function putC(ctx, img, x, y, s = 1, rot = 0, a = 1) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); ctx.globalAlpha *= a; ctx.drawImage(img, -img.width / 2, -img.height / 2); ctx.restore(); }
  const stampSpr = (text, size, col) => cache('st' + text + size, () => {
    const m = H.layer(10, 10).getContext('2d'); m.font = F.sans(size); const tw = m.measureText(text).width, w = Math.ceil(tw + size * 1.1), h = Math.ceil(size * 1.55);
    const L = H.layer(w + 20, h + 20), c = L.getContext('2d'); c.translate(10, 10);
    c.strokeStyle = col; c.lineWidth = size * 0.1; c.beginPath(); c.roundRect(4, 4, w - 8, h - 8, size * 0.22); c.stroke();
    c.lineWidth = size * 0.04; c.beginPath(); c.roundRect(size * 0.2, size * 0.2, w - size * 0.4, h - size * 0.4, size * 0.14); c.stroke();
    c.fillStyle = col; c.font = F.sans(size); c.textBaseline = 'middle'; c.textAlign = 'center'; c.fillText(text, w / 2, h / 2 + size * 0.04);
    c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'destination-out'; const r = H.rng(text.length * 31 + size);
    for (let i = 0; i < (w * h) / 90; i++) { c.globalAlpha = r.range(0.25, 0.9); c.beginPath(); c.arc(r() * L.width, r() * L.height, r.range(0.6, 2.6), 0, TAU); c.fill(); }
    for (let i = 0; i < 14; i++) { c.globalAlpha = r.range(0.15, 0.4); c.beginPath(); c.arc(r() * L.width, r() * L.height, r.range(8, 26), 0, TAU); c.fill(); }
    return L;
  });
  function stamp(ctx, t, t0, text, size, x, y, rot, col = C.red) {
    if (t < t0) return; if (REC) REC.push(['stamp', t0]);
    const u = t - t0, s = u < 0.09 ? 2.6 - 1.6 * Math.pow(u / 0.09, 2) : 1 + 0.07 * Math.exp(-(u - 0.09) * 10) * Math.cos((u - 0.09) * 38);
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; putC(ctx, stampSpr(text, size, col), x, y, s, rot, 0.93); ctx.restore();
  }
  function marker(ctx, t, t0, text, size, x, y, rot = -0.08) {
    const p = popIn(t, t0, 0.4); if (!p) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(p.s, p.s); ctx.font = F.hand(size); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = C.pink; ctx.fillText(text, 10, 10); ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = size * 0.12; ctx.strokeStyle = C.ink; ctx.strokeText(text, 0, 0); ctx.fillStyle = C.paper; ctx.fillText(text, 0, 0); ctx.restore();
  }
  function starburst(ctx, x, y, r, n, fill, k, s = 1) {
    const pts = []; for (let i = 0; i < n * 2; i++) { const a = (i / (n * 2)) * TAU - Math.PI / 2, rr = i % 2 ? r * 0.68 : r; pts.push([x + Math.cos(a) * rr * s, y + Math.sin(a) * rr * s]); }
    ctx.beginPath(); const q = boil(pts, k, 2); ctx.moveTo(q[0][0], q[0][1]); q.forEach((p) => ctx.lineTo(p[0], p[1])); ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 7; ctx.lineJoin = 'round'; ctx.strokeStyle = C.ink; ctx.stroke();
  }
  function arrow(ctx, x0, y0, x1, y1, col, k, prog = 1) {
    if (prog <= 0) return; const x = x0 + (x1 - x0) * prog, y = y0 + (y1 - y0) * prog, a = Math.atan2(y1 - y0, x1 - x0);
    line(ctx, [[x0, y0], [(x0 + x) / 2, (y0 + y) / 2], [x, y]], 26, C.ink, k); line(ctx, [[x0, y0], [(x0 + x) / 2, (y0 + y) / 2], [x, y]], 13, col, k + 9);
    const hp = [[x + Math.cos(a) * 34, y + Math.sin(a) * 34], [x + Math.cos(a + 2.4) * 42, y + Math.sin(a + 2.4) * 42], [x + Math.cos(a - 2.4) * 42, y + Math.sin(a - 2.4) * 42]];
    ctx.beginPath(); const q = boil(hp, k + 20, 1.5); ctx.moveTo(q[0][0], q[0][1]); ctx.lineTo(q[1][0], q[1][1]); ctx.lineTo(q[2][0], q[2][1]); ctx.closePath(); ctx.fillStyle = col; ctx.fill(); ctx.lineWidth = 7; ctx.strokeStyle = C.ink; ctx.stroke();
  }

  // ---------------- the suspect: frontal head rig ----------------
  function face(ctx, cx, cy, s, o, t) {
    const ear = o.ear || 0, nose = o.nose || 0;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.lineJoin = 'round';
    // shoulders
    blob(ctx, [[-330, 470], [-300, 290], [-160, 225], [160, 225], [300, 290], [330, 470], [0, 520]], C.cob, 300, { ht: (c) => halftone(c, -360, 200, 720, 340, 20, 0.5, C.ink, linY(220, 480, 0.1, 0.55)) });
    blob(ctx, [[-70, 215], [0, 300], [70, 215], [40, 190], [-40, 190]], C.paper, 310);
    blob(ctx, [[-62, 120], [62, 120], [70, 230], [0, 280], [-70, 230]], C.skin, 320);
    // ears (behind head)
    for (const sd of [-1, 1]) {
      const top = -95, bot = 70 + ear * 95, ex = sd * 178, my = (top + bot) / 2, ry = (bot - top) / 2;
      const pts = []; for (let i = 0; i < 20; i++) { const a = (i / 20) * TAU, lob = Math.sin(a) > 0 ? 1 + 0.12 * Math.sin(a) : 1; pts.push([ex + sd * 22 + Math.cos(a) * 52 * lob * (Math.sin(a) > 0.6 ? 0.9 : 1), my + Math.sin(a) * ry]); }
      blob(ctx, pts, C.skin, 400 + sd * 50, { ht: (c) => halftone(c, ex - 90, top - 20, 180, bot - top + 40, 16, 0.3, C.skinD, linX(ex - sd * 60, ex + sd * 80, 0.1, 0.55)) });
      line(ctx, [[ex + sd * 5, top + 35], [ex + sd * 46, top + 30], [ex + sd * 48, my], [ex + sd * 30, bot - 50 - ear * 10]], 6, C.ink, 420 + sd * 50);
      if (o.lobeGlow) { const gp = o.lobeGlow; ctx.save(); ctx.globalCompositeOperation = 'multiply'; halftone(ctx, ex - 60, bot - 70, 160, 90, 14, 0.8, C.yel, radial(ex + sd * 22, bot - 25, 10, 60, gp)); ctx.restore(); }
    }
    // head
    blob(ctx, ell(0, -10, 170, 212, 26), C.skin, 500, { ht: (c) => halftone(c, -180, -230, 360, 440, 18, 0.4, C.skinD, (x, y) => clamp((Math.abs(x) - 90) / 120) * 0.6) });
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; blob(ctx, ell(0, 40, 118, 135, 18), C.skin2, 520, { lw: 0 }); ctx.restore();
    // hair: grey side tufts + bald top
    const hairL = [[-170, -120], [-185, -60], [-150, -20], [-140, -90], [-120, -150], [-150, -160]];
    blob(ctx, hairL, C.hair, 540); blob(ctx, hairL.map((p) => [-p[0], p[1]]), C.hair, 560);
    blob(ctx, [[-60, -205], [-20, -232], [20, -226], [50, -240], [70, -210], [10, -200]], C.hair, 580);
    // brows, wrinkles
    line(ctx, [[-100, -88], [-62, -100], [-28, -90]], 14, C.hair, 600); line(ctx, [[100, -88], [62, -100], [28, -90]], 14, C.hair, 610);
    line(ctx, [[-70, -150], [0, -158], [70, -150]], 5, C.skinD, 620); line(ctx, [[-50, -130], [0, -136], [50, -130]], 5, C.skinD, 630);
    // eyes
    const bl = (o.blinks || []).some((b) => t >= b && t < b + 0.14), mode = bl ? 'shut' : (o.eyes || 'open');
    for (const sd of [-1, 1]) {
      const ex = sd * 62, ey = -42;
      if (mode === 'open' || mode === 'wide') { const rr = mode === 'wide' ? 1.25 : 1; ctx.fillStyle = C.ink; ctx.beginPath(); ctx.ellipse(ex, ey, 17 * rr, 23 * rr, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ex + 5, ey - 8, 6, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(ex - 5, ey + 7, 3, 0, TAU); ctx.fill(); }
      else if (mode === 'happy') line(ctx, [[ex - 20, ey + 6], [ex, ey - 12], [ex + 20, ey + 6]], 8, C.ink, 640 + sd);
      else line(ctx, [[ex - 20, ey], [ex, ey + 6], [ex + 20, ey]], 8, C.ink, 650 + sd);
    }
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(236,92,140,0.55)'; ctx.beginPath(); ctx.ellipse(-105, 40, 34, 20, 0, 0, TAU); ctx.ellipse(105, 40, 34, 20, 0, 0, TAU); ctx.fill(); ctx.restore();
    // nose: droops with age
    const tipY = 48 + nose * 52, bw = 34 + nose * 8;
    blob(ctx, [[-14, -40], [14, -40], [26, tipY - 30], [bw, tipY - 5], [bw * 0.7, tipY + 22 + nose * 8], [0, tipY + 30 + nose * 12], [-bw * 0.7, tipY + 22 + nose * 8], [-bw, tipY - 5], [-26, tipY - 30]], C.skin, 700, { ht: (c) => halftone(c, -60, -40, 120, tipY + 80, 14, 0.2, C.skinD, linX(-40, 40, 0.05, 0.5)) });
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.ellipse(-14, tipY + 12 + nose * 6, 6, 4, 0.3, 0, TAU); ctx.ellipse(14, tipY + 12 + nose * 6, 6, 4, -0.3, 0, TAU); ctx.fill();
    // mouth
    const my = 128 + nose * 14;
    if (o.mouth === 'o') blob(ctx, ell(0, my, 18, 22, 12), C.ink, 720, { lw: 4 });
    else line(ctx, [[-40, my - 4], [0, my + 12], [40, my - 4]], 7, C.ink, 730);
    ctx.restore();
  }

  // ---------------- side-view ear diagram ----------------
  const EAR_OUT = [[0, -300], [110, -285], [175, -215], [195, -100], [178, 20], [140, 110], [100, 165], [92, 215], [75, 268], [25, 300], [-25, 288], [-52, 240], [-50, 185], [-72, 120], [-92, 0], [-100, -120], [-82, -235], [-42, -288]];
  const CART = [[0, -262], [95, -248], [148, -185], [160, -90], [142, 15], [104, 105], [48, 152], [-22, 148], [-58, 70], [-72, -70], [-58, -195]];
  const stretchY = (y, L) => y > 150 ? y + L : y > 20 ? y + L * (y - 20) / 130 : y;
  function earSide(ctx, cx, cy, s, o, t) {
    const L = (o.st || 0) * 130, k0 = o.k || 900;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
    // cheek behind
    if (!o.noCheek) blob(ctx, [[-1400, -900], [-80, -900], [-110, -300], [-125, 0], [-95, 380 + L], [-1400, 900 + L]], C.skin, k0, { ht: (c) => halftone(c, -700, -500, 650, 1100 + L, 22, 0.5, C.skinD, linX(-500, -90, 0.05, 0.4)) });
    const out = EAR_OUT.map(([x, y]) => [x, stretchY(y, L)]);
    blob(ctx, out, C.skin, k0 + 30, { ht: (c) => halftone(c, -130, -330, 360, 680 + L, 18, 0.35, C.skinD, linX(-60, 200, 0.05, 0.45)) });
    if (o.cart) { // x-ray cartilage
      ctx.save(); ctx.globalAlpha = o.cart; blob(ctx, CART.map(([x, y]) => [x, stretchY(y, L * 0.25)]), '#bcd0f5', k0 + 60, { ht: (c) => halftone(c, -100, -280, 280, 470, 16, 0.9, C.cob, linY(-260, 160, 0.75, 0.3)), lw: 6 }); ctx.restore();
    }
    if (o.fat) { ctx.save(); ctx.beginPath(); smoothClosed(ctx, out); ctx.clip(); ctx.globalCompositeOperation = 'multiply'; halftone(ctx, -80, 150 + L, 210, 190, 26, 0.7, C.yel, radial(25, 235 + L, 20, 120, o.fat)); ctx.restore(); }
    // folds
    if (!o.cart || o.cart < 1) { ctx.save(); ctx.globalAlpha = 1 - (o.cart || 0); line(ctx, [[-20, -250], [90, -240], [140, -160], [140, -60], [110, 40], [70, 100]], 7, C.ink, k0 + 90); line(ctx, [[-30, -150], [40, -170], [75, -110], [50, -30], [-10, 10]], 6, C.ink, k0 + 95); ctx.restore(); }
    // springs (collagen + elastin)
    const n = o.springs ?? 0;
    for (let i = 0; i < 5; i++) {
      const a = clamp(n - i); if (a <= 0) continue;
      const x = -30 + i * 38, y0 = -220 + Math.abs(i - 2) * 25, y1 = stretchY(130 + (i % 2) * 40, L * 0.9);
      const weak = o.weak || 0, coils = 9, amp = 15 * (1 - weak * 0.55), pts = [];
      for (let j = 0; j <= coils * 8; j++) { const u = j / (coils * 8); const y = y0 + (y1 - y0) * u; pts.push([x + Math.sin(u * coils * TAU) * amp + weak * Math.sin(u * 3 + i) * 10, y]); }
      ctx.save(); ctx.globalAlpha = a; line(ctx, pts, 11, C.ink, k0 + 200 + i * 40, { amp: 0.8 }); line(ctx, pts, 5.5, i % 2 ? C.pink : C.yel, k0 + 200 + i * 40, { amp: 0.8 }); ctx.restore();
    }
    ctx.restore();
    return { lobe: [cx + 25 * s, cy + (290 + L) * s] };
  }

  // ---------------- HUD ----------------
  function hud(ctx, t, chip, dark) {
    const ink = dark ? C.paper : C.ink, bg = dark ? C.paper : C.ink;
    ctx.save(); ctx.font = F.mono(30); ctx.fillStyle = ink; ctx.textBaseline = 'middle'; ctx.fillText('CASE No.2026-EAR-022', 70, 182);
    ctx.font = F.mono(28); const w = ctx.measureText(chip[0] + '  ' + chip[1]).width + 36;
    ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(70, 210, w, 48, 8); ctx.fill();
    ctx.fillStyle = C.yel; ctx.fillText(chip[0], 88, 235); ctx.fillStyle = dark ? C.ink : C.paper; ctx.fillText(chip[1], 88 + ctx.measureText(chip[0] + '  ').width, 235);
    ctx.lineWidth = 4; ctx.strokeStyle = ink; ctx.beginPath(); ctx.roundRect(800, 160, 210, 60, 10); ctx.stroke();
    if (Math.floor(t * 1.6) % 2 === 0) { ctx.fillStyle = C.red; ctx.beginPath(); ctx.arc(830, 190, 11, 0, TAU); ctx.fill(); }
    ctx.fillStyle = ink; ctx.font = F.mono(30); ctx.fillText('2026.11', 852, 191);
    ctx.restore();
  }

  // ================= SCENES =================
  // 1. mugshot: the suspect's ears and nose
  const heightChart = () => cache('chart', () => {
    const L = H.layer(W0, H0), c = L.getContext('2d'); c.strokeStyle = C.ink; c.fillStyle = C.ink; c.font = F.mono(26); c.textBaseline = 'middle';
    for (let i = 0; i <= 18; i++) { const y = 560 + i * 50, big = i % 2 === 0; c.globalAlpha = big ? 0.55 : 0.3; c.lineWidth = big ? 4 : 2; c.beginPath(); c.moveTo(70, y); c.lineTo(big ? 1010 : 160, y); c.stroke(); if (big) { c.globalAlpha = 0.7; c.fillText(String(190 - i * 5), 80, y - 18); } }
    c.globalAlpha = 1; c.globalCompositeOperation = 'multiply'; halftone(c, 0, 0, W0, H0, 22, 0.78, '#bccbe8', edgeD(320, 0.9)); return L;
  });
  function namePlate(ctx, text, y) {
    ctx.save(); ctx.font = F.mono(40); const w = ctx.measureText(text).width + 70;
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.roundRect(540 - w / 2, y - 40, w, 80, 10); ctx.fill(); ctx.fillStyle = C.paper; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 540, y + 2); ctx.restore();
  }
  function ruler(ctx, x, y0, y1, k) { // vertical measuring tape
    ctx.save(); blob(ctx, [[x - 26, y0], [x + 26, y0], [x + 26, y1], [x - 26, y1]], C.yel, k, { amp: 1 });
    ctx.strokeStyle = C.ink; ctx.lineWidth = 3; for (let y = y0 + 12; y < y1 - 6; y += 14) { const big = Math.round((y - y0) / 14) % 5 === 0; ctx.beginPath(); ctx.moveTo(x - 26, y); ctx.lineTo(x - (big ? 0 : 12), y); ctx.stroke(); }
    ctx.restore();
  }
  function sceneMug(ctx, t) {
    ctx.drawImage(heightChart(), 0, 0);
    const g = eio(seg(t, P(0, 'never'), P(0, 'longer') + 0.5)), nd = eio(seg(t, P(2, 'droops') - 0.1, P(2, 'too')));
    const ear = 0.15 + g * 0.55, cx = 540, cy = 1000;
    face(ctx, cx, cy, 1.15, { ear, nose: nd * 0.85, eyes: t > PS(3) ? 'wide' : 'open', blinks: [1.6, 5.2], mouth: t > P(1, 'growing') && t < PS(2) ? 'o' : null }, t);
    // ruler beside right ear
    const ex = cx + 178 * 1.15 + 105, top = cy - 95 * 1.15, bot = cy + (70 + ear * 95) * 1.15;
    if (t >= P(0, 'ears') - 0.1) { ruler(ctx, ex, top - 30, bot + 40, 80); line(ctx, [[ex - 70, bot], [ex + 40, bot]], 7, C.red, 82, { amp: 0.6 }); }
    if (nd > 0) arrow(ctx, cx + 210, cy - 40, cx + 210, cy + 120, C.pink, 90, seg(t, P(2, 'droops') - 0.1, P(2, 'droops') + 0.35));
    namePlate(ctx, 'SUSPECT: YOUR EARS', 1470);
    if (t < PS(2) - 0.1) { headline(ctx, t, P(0, 'never') - 0.1, 'LONGER', 80, 440, 190); headline(ctx, t, P(0, 'longer') - 0.1, 'EVERY YEAR', 84, 610, 96, { shadow: C.yel }); }
    else if (t < PS(3) - 0.1) { headline(ctx, t, PS(2) - 0.1, 'THE NOSE', 80, 440, 160); headline(ctx, t, P(2, 'lower') - 0.1, 'DROOPS TOO', 84, 610, 96, { shadow: C.yel }); }
    else { headline(ctx, t, PS(3) - 0.1, "WHAT'S", 80, 440, 150); headline(ctx, t, P(3, 'stretching') - 0.1, 'STRETCHING?', 84, 610, 110, { shadow: C.yel }); }
    if (t < PS(2) - 0.1) stamp(ctx, t, P(1, 'growing') - 0.06, 'NOT GROWING', 84, 560, 1210, -0.12);
    if (t >= PS(3) - 0.1) marker(ctx, t, P(3, 'them') - 0.05, '?', 260, 870, 820, 0.15);
  }
  // 2. exhibit 01: the bones stopped
  function sceneBones(ctx, t) {
    putC(ctx, numSpr('01', 760, C.yel, '#e08a2c', 'n01'), 760, 900, 1, 0);
    const p = popIn(t, PS(4) - 0.05, 0.4), s = p ? p.s : 0;
    if (s > 0) {
      ctx.save(); ctx.translate(520, 860); ctx.rotate(-0.5); ctx.scale(s, s);
      const shaft = [[-300, -38], [300, -38], [300, 38], [-300, 38]], knob = (x, sd) => [...ell(x, -52, 62, 58, 14), ...[]];
      blob(ctx, ell(-330, -48, 66, 60, 16), C.bone, 1001); blob(ctx, ell(-330, 48, 66, 60, 16), C.bone, 1002);
      blob(ctx, ell(330, -48, 66, 60, 16), C.bone, 1003); blob(ctx, ell(330, 48, 66, 60, 16), C.bone, 1004);
      blob(ctx, shaft, C.bone, 1005, { ht: (c) => halftone(c, -320, -50, 640, 100, 16, 0.4, C.cob, linY(-40, 40, 0, 0.6)) });
      ctx.fillStyle = C.bone; ctx.fillRect(-300, -32, 600, 64); ctx.save(); ctx.beginPath(); ctx.rect(-300, -32, 600, 64); ctx.clip(); ctx.globalCompositeOperation = 'multiply'; halftone(ctx, -320, -50, 640, 100, 16, 0.4, '#9fb4e6', linY(-40, 40, 0, 0.7)); ctx.restore();
      const gp = seg(t, P(4, 'stopped') - 0.1, P(4, 'stopped') + 0.2);
      for (const x of [-250, 250]) line(ctx, [[x, -44], [x, 44]], 9, gp > 0 ? C.red : C.ink, 1010 + x, { amp: 1 });
      ctx.restore();
    }
    // growth chart
    const cp = seg(t, P(4, 'getting') - 0.1, P(4, 'ago') + 0.3);
    if (cp > 0) {
      ctx.save(); const x0 = 140, y0 = 1440, w = 800, h = 280;
      ctx.strokeStyle = C.ink; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x0, y0 - h - 20); ctx.lineTo(x0, y0); ctx.lineTo(x0 + w, y0); ctx.stroke();
      const f = (u) => u < 0.3 ? Math.sin((u / 0.3) * Math.PI / 2) : 1;
      const pts = []; for (let i = 0; i <= 60 * cp; i++) { const u = i / 60; pts.push([x0 + u * w, y0 - 20 - f(u) * (h - 40)]); }
      if (pts.length > 1) { ctx.save(); ctx.beginPath(); ctx.moveTo(x0, y0); pts.forEach((q) => ctx.lineTo(q[0], q[1])); ctx.lineTo(pts[pts.length - 1][0], y0); ctx.closePath(); ctx.clip(); ctx.globalCompositeOperation = 'multiply'; halftone(ctx, x0, y0 - h, w, h, 20, 0.6, C.pink, linY(y0 - h, y0, 0.9, 0.2)); ctx.restore(); line(ctx, pts, 10, C.ink, 1100, { noBoil: true }); }
      ctx.font = F.mono(30); ctx.fillStyle = C.ink; ctx.fillText('HEIGHT', x0 + 16, y0 - h - 30); ctx.fillText('AGE →', x0 + w - 110, y0 + 40); ctx.fillText('TEENS', x0 + w * 0.24, y0 + 40);
      ctx.restore();
    }
    headline(ctx, t, PS(4) - 0.1, 'BONES', 80, 440, 190);
    stamp(ctx, t, P(4, 'stopped') - 0.05, 'STOPPED', 110, 640, 1140, 0.1);
  }
  // 3. exhibit 02: cartilage, skin, springs
  function sceneCart(ctx, t) {
    halftone(ctx, 0, 0, W0, H0, 24, 0.3, '#f4cfdc', radial(620, 1000, 150, 720, 0.75));
    const xr = seg(t, P(6, 'cartilage') - 0.15, P(6, 'cartilage') + 0.3), sp = seg(t, P(7, 'springy') - 0.1, P(7, 'elastin') + 0.2) * 5;
    earSide(ctx, 640, 1000, 1.45, { cart: xr, springs: sp, k: 1200 }, t);
    headline(ctx, t, PS(5) - 0.1, 'FLOPPY', 80, 440, 180);
    headline(ctx, t, P(5, 'nose') - 0.1, 'PARTS', 84, 610, 110, { shadow: C.yel });
    if (t >= P(6, 'cartilage') - 0.1) { const p = popIn(t, P(6, 'cartilage') - 0.1); if (p) putC(ctx, cache('lbcart', () => tagSpr('CARTILAGE', 44, C.cob, C.paper)), 300, 760, p.s, -0.05); }
    if (t >= P(6, 'skin') - 0.1) { const p = popIn(t, P(6, 'skin') - 0.1); if (p) putC(ctx, cache('lbskin', () => tagSpr('SKIN', 44, C.skin, C.ink)), 300, 1260, p.s, 0.05); }
    pill(ctx, t, P(7, 'collagen') - 0.1, [['COLLAGEN', true], ['+', false], ['ELASTIN', true]], 540, 1560, 52);
  }
  function tagSpr(text, size, bg, fg) {
    const m = H.layer(10, 10).getContext('2d'); m.font = F.sans(size); const w = Math.ceil(m.measureText(text).width + size * 1.1), h = Math.ceil(size * 1.6);
    const L = H.layer(w + 30, h + 30), c = L.getContext('2d'); c.translate(8, 8);
    c.globalCompositeOperation = 'multiply'; c.fillStyle = C.pink; c.fillRect(12, 12, w, h); c.globalCompositeOperation = 'source-over';
    c.fillStyle = bg; c.fillRect(0, 0, w, h); c.lineWidth = 6; c.strokeStyle = C.ink; c.strokeRect(0, 0, w, h);
    c.fillStyle = fg; c.font = F.sans(size); c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, w / 2, h / 2 + 2); return L;
  }
  // 4. exhibit 03: fewer fibers, gravity wins, every year
  function sceneGravity(ctx, t) {
    const yr = seg(t, P(12, 'every'), PE(13)), st = clamp(0.1 + seg(t, P(10, 'weaker'), P(11, 'wins') + 0.3) * 0.35 + yr * 0.55);
    halftone(ctx, 0, 0, W0, H0, 24, 0.9, '#c7d3ef', linY(500, 1700, 0, 0.8));
    const lost = seg(t, P(9, 'fewer') - 0.1, P(9, 'fibers') + 0.2), weak = seg(t, P(10, 'springs'), P(10, 'weaker') + 0.4);
    const e = earSide(ctx, 600, 880, 1.2, { cart: 0.55, springs: 5 - lost * 3, weak, st, k: 1500 }, t);
    // gravity weight hanging from the lobe
    const gp = popIn(t, P(11, 'gravity') - 0.1, 0.45);
    if (gp) {
      const sw = Math.sin(t * 3) * 6, wy = e.lobe[1] + 150 + (1 - gp.s) * -200;
      line(ctx, [[e.lobe[0], e.lobe[1] - 10], [e.lobe[0] + sw, wy - 70]], 7, C.ink, 1600, { amp: 1 });
      ctx.save(); ctx.translate(e.lobe[0] + sw, wy);
      blob(ctx, [[-85, -70], [85, -70], [120, 90], [-120, 90]], C.ink, 1610, { ht: (c) => halftone(c, -130, -80, 260, 180, 16, 0.4, '#3a4570', linY(-70, 90, 0.2, 0.8)) });
      ctx.font = F.num(64); ctx.fillStyle = C.yel; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('G', 0, 18); ctx.restore();
      arrow(ctx, 900, e.lobe[1] - 40, 900, e.lobe[1] + 200, C.red, 1620, seg(t, P(11, 'wins') - 0.1, P(11, 'wins') + 0.3));
    }
    // headlines
    if (t < PS(10) - 0.1) { headline(ctx, t, P(8, 'older') - 0.1, 'FEWER', 80, 440, 190); headline(ctx, t, P(9, 'fibers') - 0.1, 'FIBERS', 84, 610, 110, { shadow: C.yel }); }
    else if (t < PS(12) - 0.1) { headline(ctx, t, PS(10) - 0.1, 'GRAVITY', 80, 440, 180); headline(ctx, t, P(11, 'wins') - 0.1, 'WINS', 84, 610, 130, { shadow: C.yel }); }
    else {
      headline(ctx, t, PS(12) - 0.1, 'EVERY', 80, 440, 180); headline(ctx, t, P(12, 'year') - 0.1, 'SINGLE YEAR', 84, 610, 100, { shadow: C.yel });
      const yN = 30 + Math.floor(yr * 40); if (REC && yr > 0) REC.push(['year', P(12, 'every')]);
      ctx.save(); ctx.font = F.mono(34); ctx.fillStyle = C.ink; ctx.textAlign = 'right'; ctx.fillText('AGE', 1000, 1290); ctx.restore();
      ctx.save(); ctx.font = F.num(150); ctx.textAlign = 'right'; ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = C.pink; ctx.fillText(String(yN), 1008, 1448); ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = C.ink; ctx.fillText(String(yN), 1000, 1440); ctx.restore();
    }
    if (t >= P(9, 'fewer') - 0.1 && t < PS(10) - 0.1) stamp(ctx, t, P(9, 'fewer') - 0.05, 'LESS', 90, 870, 1240, 0.14);
  }
  // 5. exhibit 04: the earlobe, snap zoom
  function sceneLobe(ctx, t) {
    const z = 1 + eo(seg(t, PS(14) - 0.1, PS(14) + 0.35)) * 0.75;
    halftone(ctx, 0, 0, W0, H0, 26, 0.2, '#f6d79a', edgeD(380, 0.9));
    const s = 1.05 * z;
    earSide(ctx, 560 - 25 * s, 1060 - 321 * s, s, { st: 0.7, cart: seg(t, P(15, 'cartilage') - 0.2, P(15, 'cartilage') + 0.2), fat: seg(t, P(16, 'fat') - 0.15, P(16, 'fat') + 0.3) + 0.0, k: 1900 }, t);
    ctx.save(); ctx.fillStyle = C.paper; ctx.fillRect(0, 140, W0, 520); ctx.lineWidth = 8; ctx.strokeStyle = C.ink; ctx.beginPath(); ctx.moveTo(0, 660); ctx.lineTo(W0, 660); ctx.stroke(); ctx.restore();
    headline(ctx, t, PS(14) - 0.1, 'EARLOBES', 80, 440, 170);
    headline(ctx, t, P(14, 'most') - 0.1, 'STRETCH MOST', 84, 610, 96, { shadow: C.yel });
    stamp(ctx, t, P(15, 'no') - 0.05, 'NO CARTILAGE', 80, 560, 1260, -0.1);
    pill(ctx, t, P(16, 'skin') - 0.1, [['JUST', false], ['SKIN', true], ['+', false], ['FAT', true]], 540, 1560, 56);
  }
  // 6. exhibit 05: the study
  function sceneStudy(ctx, t) {
    const fp = popIn(t, PS(17) - 0.15, 0.45), fy = fp ? (1 - fp.s) * 400 : 400;
    ctx.save(); ctx.translate(0, fy);
    blob(ctx, [[110, 650], [380, 650], [420, 700], [970, 700], [970, 1160], [110, 1160]], C.yel, 2000, { amp: 1.2, ht: (c) => halftone(c, 100, 640, 880, 490, 20, 0.3, '#e7a52a', linY(650, 1120, 0.1, 0.6)) });
    ctx.font = F.mono(34); ctx.fillStyle = C.ink; ctx.fillText('STUDY: EAR LENGTH', 150, 760);
    // 206 dots
    const d0 = P(17, 'two'), d1 = P(17, 'adults');
    ctx.fillStyle = C.ink; for (let i = 0; i < 206; i++) { const ti = d0 + (i / 206) * (d1 - d0); if (t < ti) break; const col = i % 23, row = Math.floor(i / 23); ctx.beginPath(); ctx.arc(170 + col * 33, 820 + row * 30, 10, 0, TAU); ctx.fill(); }
    ctx.restore();
    if (t >= d1 - 0.1) { const p = popIn(t, d1 - 0.1); if (p) { putC(ctx, cache('n206', () => tagSpr('206 ADULTS', 54, C.pink, C.paper)), 760, 1120, p.s, -0.06); } }
    const np = popIn(t, P(18, 'zero') - 0.1, 0.45);
    if (np) { putC(ctx, numSpr('0.22', 330, C.pink, '#b8326a', 'n022'), 470, 1360, np.s, -0.03); }
    if (t >= P(18, 'millimeters') - 0.1) { const p = popIn(t, P(18, 'millimeters') - 0.1); if (p) putC(ctx, cache('mmyr', () => tagSpr('MM / YEAR', 50, C.ink, C.yel)), 800, 1530, p.s, 0.06); }
    headline(ctx, t, PS(17) - 0.1, 'THE STUDY', 80, 440, 170);
    pill(ctx, t, P(19, 'thirty') - 0.1, [['AFTER AGE', false], ['30', true]], 540, 1580, 56);
  }
  // 7. evidence board: 30 / 55 / 80
  function sceneBoard(ctx, t) {
    ctx.fillStyle = '#e3d3b0'; ctx.fillRect(0, 0, W0, H0); halftone(ctx, 0, 0, W0, H0, 22, 0.6, '#cdb88f', () => 0.5);
    const cards = [[200, 'AGE 30', 0, P(20, 'thats') - 0.1], [540, 'AGE 55', 0.5, P(20, 'roughly') - 0.1], [880, 'AGE 80', 1, P(20, 'whole') - 0.1]];
    const pins = [];
    cards.forEach(([x, lab, st, t0], i) => {
      const p = popIn(t, t0, 0.4); if (!p) return; pins.push([x, 640]);
      ctx.save(); ctx.translate(x, 960); ctx.rotate((i - 1) * 0.04); ctx.scale(p.s, p.s);
      blob(ctx, [[-150, -330], [150, -330], [150, 420], [-150, 420]], C.paper, 2100 + i * 10, { amp: 1, lw: 5 });
      ctx.save(); ctx.beginPath(); ctx.rect(-150, -330, 300, 750); ctx.clip(); earSide(ctx, 20, -60, 0.55, { st, noCheek: true, k: 2200 + i * 100 }, t); ctx.restore();
      ctx.font = F.mono(36); ctx.fillStyle = C.ink; ctx.textAlign = 'center'; ctx.fillText(lab, 0, 395);
      ctx.restore();
    });
    // pins + string
    if (pins.length > 1) line(ctx, pins, 5, C.red, 2400, { amp: 1.5 });
    pins.forEach(([x, y], i) => { ctx.fillStyle = C.red; ctx.beginPath(); ctx.arc(x, y, 18, 0, TAU); ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = C.ink; ctx.stroke(); });
    // bottom guide lines
    if (t >= P(20, 'centimeter') - 0.15) { ctx.save(); ctx.setLineDash([18, 14]); ctx.lineWidth = 5; ctx.strokeStyle = C.ink; const y30 = 960 - 60 + 300 * 0.55, y80 = y30 + 130 * 0.55; ctx.beginPath(); ctx.moveTo(60, y30); ctx.lineTo(1020, y30); ctx.moveTo(60, y80); ctx.lineTo(1020, y80); ctx.stroke(); ctx.restore(); }
    const np = popIn(t, P(20, 'centimeter') - 0.12, 0.45); if (np) putC(ctx, numSpr('+1 CM', 220, C.pink, '#b8326a', 'n1cm'), 540, 1480, np.s, -0.04);
    headline(ctx, t, PS(20) - 0.1, 'BY AGE 80', 80, 440, 170);
  }
  // 8. verdict
  function sceneVerdict(ctx, t) {
    const z = 1 + seg(t, PS(21), PE(22)) * 0.06;
    ctx.save(); ctx.translate(540, 1000); ctx.scale(z, z); ctx.translate(-540, -1000);
    ctx.drawImage(heightChart(), 0, 0);
    face(ctx, 540, 1000, 1.15, { ear: 0.95, nose: 1, eyes: t > P(22, 'sagging') ? 'shut' : 'open', blinks: [48.9] }, t);
    namePlate(ctx, 'SUSPECT: GRAVITY', 1470);
    ctx.restore();
    headline(ctx, t, PS(21) - 0.1, "NOTHING'S", 80, 440, 170);
    headline(ctx, t, P(21, 'growing') - 0.1, 'GROWING', 84, 610, 130, { shadow: C.yel });
    stamp(ctx, t, P(22, 'sagging') - 0.06, 'SAGGING', 150, 560, 1180, -0.12);
  }
  // 9. the question
  function sceneQ(ctx, t) {
    halftone(ctx, 0, 0, W0, H0, 26, 0.3, C.yel, radial(540, 1000, 120, 620, 0.95));
    halftone(ctx, 0, 0, W0, H0, 24, 0.5, '#f4cfdc', edgeD(300, 0.9));
    const g = eio(seg(t, P(23, 'longer') - 0.1, P(23, 'hundred') + 0.3));
    face(ctx, 540, 1020, 1.05, { ear: 1 + g * 0.9, nose: 1.1 + g * 0.3, eyes: 'happy' }, t);
    headline(ctx, t, PS(23) - 0.1, 'AT 100?', 80, 440, 190);
    marker(ctx, t, P(23, 'longer') - 0.05, '+? CM', 120, 830, 700, 0.1);
    pill(ctx, t, P(23, 'hundred') - 0.1, [['YOUR', false], ['GUESS?', true]], 540, 1580, 60);
  }

  // ---------------- edit: dot wipes ----------------
  const WIPE = 0.6;
  const SC = [
    { f: sceneMug, chip: ['EXHIBIT 00', 'THE SUSPECT'] },
    { p: 4, f: sceneBones, chip: ['EXHIBIT 01', 'BONES'], col: C.ink },
    { p: 5, f: sceneCart, chip: ['EXHIBIT 02', 'SOFT PARTS'], col: C.pink },
    { p: 8, f: sceneGravity, chip: ['EXHIBIT 03', 'THE PULL'], col: C.cob },
    { p: 14, f: sceneLobe, chip: ['EXHIBIT 04', 'EARLOBE'], col: C.yel },
    { p: 17, f: sceneStudy, chip: ['EXHIBIT 05', 'THE STUDY'], col: C.ink },
    { p: 20, f: sceneBoard, chip: ['EXHIBIT 06', 'THE BOARD'], col: C.pink },
    { p: 21, f: sceneVerdict, chip: ['VERDICT', 'CASE CLOSED'], col: C.red, hard: true },
    { p: 23, f: sceneQ, chip: ['OPEN FILE', 'YOUR CALL'], col: C.cob },
  ];
  SC.forEach((s) => { if (s.p != null) s.cut = PS(s.p) - 0.3; });
  function wipe(ctx, t, cut, col) {
    const u = (t - (cut - WIPE / 2)) / WIPE; if (u <= 0 || u >= 1) return;
    const st = 96; ctx.save(); ctx.fillStyle = col; ctx.beginPath();
    for (let y = st / 2; y < H0 + st; y += st) for (let x = st / 2; x < W0 + st; x += st) {
      const d = ((x / W0) + (y / H0)) / 2 * 0.35, p = u * 1.35 - d, r = clamp(Math.min(p, 1 - p) / 0.3) * st * 0.78;
      if (r > 0.5) { ctx.moveTo(x + r, y); ctx.arc(x, y, r, 0, TAU); }
    }
    ctx.fill(); ctx.restore();
  }
  let META = null;
  function shakeAt(t) {
    if (!META) return [0, 0]; let dx = 0, dy = 0; const r = H.rng(7 + Math.floor(t * 30));
    META.stamps.forEach((h) => { const u = t - h; if (u >= 0 && u < 0.4) { const a = 18 * Math.pow(1 - u / 0.4, 2); dx += (r() - 0.5) * 2 * a; dy += (r() - 0.5) * 2 * a; } });
    return [dx, dy];
  }
  function flashAt(t) { const fl = [0.05, ...(META ? META.stamps : [])]; let a = 0; fl.forEach((f, i) => { const u = t - f; if (u >= 0 && u < 0.22) a = Math.max(a, (i === 0 ? 0.5 : 0.28) * (1 - u / 0.22)); }); return a; }
  function frame(ctx, t, dry) {
    BF = Math.floor(t * 10);
    let i = 0; for (let k = 1; k < SC.length; k++) if (t >= SC[k].cut) i = k;
    ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W0, H0);
    const [dx, dy] = dry ? [0, 0] : shakeAt(t);
    ctx.save(); ctx.translate(dx, dy); SC[i].f(ctx, t); ctx.restore();
    hud(ctx, t, SC[i].chip, false);
    if (dry) return;
    for (let k = 1; k < SC.length; k++) if (!SC[k].hard && Math.abs(t - SC[k].cut) < WIPE / 2) wipe(ctx, t, SC[k].cut, SC[k].col);
    grain(ctx, t);
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(PAPER(), 0, 0); ctx.restore();
    const fa = flashAt(t); if (fa > 0) { ctx.fillStyle = `rgba(255,252,240,${fa})`; ctx.fillRect(0, 0, W0, H0); }
  }
  function collect() {
    const out = []; REC = out; const cv = H.layer(54, 96), c = cv.getContext('2d');
    try { for (let t = 0; t < DURATION; t += 0.1) { c.setTransform(0.05, 0, 0, 0.05, 0, 0); frame(c, t, true); } } catch (e) { console.error(e); }
    REC = null;
    const uniq = (type) => { const s = new Set(), r = []; out.filter((e) => e[0] === type).forEach((e) => { const k = Math.round(e[1] * 50); if (!s.has(k)) { s.add(k); r.push(e); } }); return r.sort((a, b) => a[1] - b[1]); };
    return { stamps: uniq('stamp').map((e) => e[1]), heads: uniq('head'), pops: uniq('pop').map((e) => e[1]) };
  }
  function explainer(ctx, Wd, Hd, t) {
    if (!META) META = collect();
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); frame(ctx, t, false); ctx.restore();
  }

  // ---------------- sound ----------------
  function scoreSound(k) {
    if (!META) META = collect();
    const pluck = (t, f, g = 1, p = 0) => { k.tone(t, { f, dur: 0.35, gain: 0.07 * g, pan: p, minor: true }); k.tone(t, { f: f * 4, dur: 0.12, gain: 0.02 * g, pan: p, minor: true }); };
    k.play('shutter', 0.05, { gain: 0.6 }); k.play('typing', 0.1, { dur: 0.6, gain: 0.18, minor: true });
    META.heads.forEach(([, t0, n]) => { for (let i = 0; i < Math.min(n, 6); i++) k.play('pop', t0 + i * 0.045 * Math.max(1, n / 6), { gain: 0.16, f: 560 + i * 70, minor: true }); });
    META.pops.forEach((t0) => k.play('pop', t0, { gain: 0.22, f: 480, minor: true }));
    META.stamps.forEach((t0) => { k.play('stamp', t0, { gain: 0.85 }); k.play('slap', t0 + 0.01, { gain: 0.3 }); });
    SC.forEach((s) => { if (s.cut == null) return; if (s.hard) { k.play('impact', s.cut, { gain: 0.5 }); return; } k.play('whoosh', s.cut - 0.25, { dur: 0.5, gain: 0.35 }); k.play('paper', s.cut, { dur: 0.3, gain: 0.3, minor: true }); pluck(s.cut + 0.2, 392); pluck(s.cut + 0.32, 587); });
    // ruler ticks as the ear grows
    for (let x = P(0, 'never'); x < P(0, 'longer') + 0.5; x += 0.12) k.play('tick', x, { gain: 0.25, minor: true });
    k.play('swish', P(2, 'droops') - 0.05, { dur: 0.4, gain: 0.35 });
    k.play('tone' in k ? 'blip' : 'blip', P(3, 'them'), { f: 'G5', gain: 0.6 });
    k.play('sparkle', P(6, 'cartilage'), { n: 5, gain: 0.3 });
    PH[7].words.filter((w) => ['springy', 'collagen', 'elastin'].includes(w[0])).forEach((w, i) => k.play('jump', w[1], { gain: 0.25, minor: true }));
    k.play('error', P(9, 'fewer'), { gain: 0.2 });
    k.play('riser', P(10, 'springs') - 0.2, { dur: 1.0, gain: 0.25 });
    k.play('thud', P(11, 'gravity'), { gain: 0.6, f: 90 }); k.play('impact', P(11, 'wins'), { gain: 0.45 });
    const y0 = P(12, 'every'), y1 = PE(13); for (let i = 0; i < 40; i += 2) k.play('tock', y0 + (i / 40) * (y1 - y0), { gain: 0.15, f: 700 + i * 8, minor: true });
    k.play('whoosh', PS(14) - 0.1, { dur: 0.35, gain: 0.3, top: 4000 });
    k.play('pop', P(16, 'fat'), { gain: 0.4, f: 300 });
    for (let i = 0; i < 18; i++) k.play('blip', P(17, 'two') + i * ((P(17, 'adults') - P(17, 'two')) / 18), { f: 900 + i * 30, gain: 0.25, minor: true });
    k.play('ding', P(18, 'zero'), { f: 'E5', gain: 0.35 });
    k.play('ding', P(20, 'centimeter'), { f: 'G5', gain: 0.35 });
    k.play('shutter', P(21, 'nothings'), { gain: 0.4 });
    ['C5', 'E5', 'G5', 'C6'].forEach((f, i) => k.play('ding', PE(23) + 0.1 + i * 0.09, { f, gain: 0.28 - i * 0.03, pan: (i - 1.5) * 0.2 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); BF = 3; ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W0, H0);
    ctx.drawImage(heightChart(), 0, 0); face(ctx, 540, 1060, 1.15, { ear: 1.2, nose: 1, eyes: 'wide' }, 0);
    headline(ctx, 99, 0, 'NOT', 80, 460, 230); headline(ctx, 99, 0, 'GROWING?', 84, 620, 150, { shadow: C.yel });
    ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(PAPER(), 0, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
