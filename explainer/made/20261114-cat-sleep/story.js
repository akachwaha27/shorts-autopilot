// ================= Halftone Dossier, vertical 1080x1920: "Why do cats sleep up to 16 hours a day?" =================
// Style: Lemo-Opuscar "Halftone Dossier" (STYLE.md grammar; own drawing code, no demo assets). Unattended run: no storyboard step.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":2.09,"text":"Your cat sleeps 16 hours a day,","words":[["your",0.25],["cat",0.56],["sleeps",0.79],["16",1.25],["hours",1.4],["a",1.78],["day",1.86]]},{"s":2.45,"e":4.04,"text":"but it's almost never fully asleep.","words":[["but",2.45],["its",2.62],["almost",2.79],["never",3.13],["fully",3.42],["asleep",3.7]]},{"s":4.42,"e":5.6,"text":"So why all the napping?","words":[["so",4.42],["why",4.55],["all",4.75],["the",4.95],["napping",5.14]]},{"s":6.15,"e":8.86,"text":"Cats are hunters built for short explosive bursts.","words":[["cats",6.15],["are",6.4],["hunters",6.6],["built",7.05],["for",7.37],["short",7.57],["explosive",7.89],["bursts",8.47]]},{"s":9.24,"e":12.2,"text":"Stalking and pouncing burn a ton of energy in seconds,","words":[["stalking",9.24],["and",9.78],["pouncing",9.98],["burn",10.52],["a",10.79],["ton",10.86],["of",11.06],["energy",11.19],["in",11.6],["seconds",11.73]]},{"s":12.57,"e":13.98,"text":"and plenty of pounces miss.","words":[["and",12.57],["plenty",12.76],["of",13.15],["pounces",13.28],["miss",13.72]]},{"s":14.39,"e":15.92,"text":"So between hunts a cat powers down","words":[["so",14.39],["between",14.5],["hunts",14.88],["a",15.16],["cat",15.21],["powers",15.38],["down",15.7]]},{"s":16.02,"e":18.17,"text":"to save fuel for the next one.","words":[["to",16.02],["save",16.21],["fuel",16.58],["for",16.96],["the",17.24],["next",17.52],["one",17.89]]},{"s":18.54,"e":20.19,"text":"It's most awake at dawn and dusk,","words":[["its",18.54],["most",18.74],["awake",19.0],["at",19.33],["dawn",19.47],["and",19.73],["dusk",19.93]]},{"s":20.48,"e":21.77,"text":"when mice are on the move.","words":[["when",20.48],["mice",20.74],["are",21.0],["on",21.19],["the",21.32],["move",21.51]]},{"s":22.2,"e":24.73,"text":"That's why yours goes wild at 5 a.m.","words":[["thats",22.2],["why",22.69],["yours",22.98],["goes",23.47],["wild",23.85],["at",24.24],["5",24.44],["am",24.53]]},{"s":25.15,"e":26.97,"text":"Most of its sleep is light dozing,","words":[["most",25.15],["of",25.42],["its",25.56],["sleep",25.76],["is",26.1],["light",26.23],["dozing",26.57]]},{"s":27.29,"e":28.91,"text":"in naps of 15 to 30 minutes,","words":[["in",27.29],["naps",27.45],["of",27.76],["15",27.91],["to",28.06],["30",28.22],["minutes",28.37]]},{"s":29.25,"e":30.63,"text":"senses still switched on.","words":[["senses",29.25],["still",29.65],["switched",29.98],["on",30.5]]},{"s":31.08,"e":32.95,"text":"One tiny squeak, and it's awake.","words":[["one",31.08],["tiny",31.32],["squeak",31.63],["and",32.1],["its",32.33],["awake",32.56]]},{"s":33.31,"e":35.52,"text":"Only about a quarter is real deep sleep,","words":[["only",33.31],["about",33.59],["a",33.94],["quarter",34.0],["is",34.49],["real",34.63],["deep",34.9],["sleep",35.18]]},{"s":35.93,"e":37.75,"text":"in bursts of 5 to 7 minutes.","words":[["in",35.93],["bursts",36.11],["of",36.62],["5",36.8],["to",36.88],["7",37.06],["minutes",37.14]]},{"s":38.1,"e":39.49,"text":"So your cat isn't lazy.","words":[["so",38.1],["your",38.27],["cat",38.59],["isnt",38.84],["lazy",39.16]]},{"s":39.85,"e":41.58,"text":"It's charging up for the next sprint.","words":[["its",39.85],["charging",40.03],["up",40.51],["for",40.63],["the",40.81],["next",40.98],["sprint",41.22]]},{"s":42.01,"e":44.63,"text":"So is your cat asleep right now, or just waiting?","words":[["so",42.01],["is",42.15],["your",42.29],["cat",42.56],["asleep",42.77],["right",43.18],["now",43.53],["or",43.73],["just",43.87],["waiting",44.15]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const C = { paper: '#efe5cf', ink: '#1c2240', cob: '#2f56c9', yel: '#f3c230', pink: '#ec5c8c', red: '#d8333b', fur: '#e8913a', furD: '#b65e22', belly: '#f7dcb4', mouse: '#9d97ab', mouseD: '#6f6984' };
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

  function hud(ctx, t, chip, dark) {
    const ink = dark ? C.paper : C.ink, bg = dark ? C.paper : C.ink;
    ctx.save(); ctx.font = F.mono(30); ctx.fillStyle = ink; ctx.textBaseline = 'middle'; ctx.fillText('CASE No.2026-CAT-016', 70, 182);
    ctx.font = F.mono(28); const w = ctx.measureText(chip[0] + '  ' + chip[1]).width + 36;
    ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(70, 210, w, 48, 8); ctx.fill();
    ctx.fillStyle = dark ? C.red : C.yel; ctx.fillText(chip[0], 88, 235); ctx.fillStyle = dark ? C.ink : C.paper; ctx.fillText(chip[1], 88 + ctx.measureText(chip[0] + '  ').width, 235);
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
  function tagSpr(text, size, bg, fg) {
    const m = H.layer(10, 10).getContext('2d'); m.font = F.sans(size); const w = Math.ceil(m.measureText(text).width + size * 1.1), h = Math.ceil(size * 1.6);
    const L = H.layer(w + 30, h + 30), c = L.getContext('2d'); c.translate(8, 8);
    c.globalCompositeOperation = 'multiply'; c.fillStyle = C.pink; c.fillRect(12, 12, w, h); c.globalCompositeOperation = 'source-over';
    c.fillStyle = bg; c.fillRect(0, 0, w, h); c.lineWidth = 6; c.strokeStyle = C.ink; c.strokeRect(0, 0, w, h);
    c.fillStyle = fg; c.font = F.sans(size); c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, w / 2, h / 2 + 2); return L;
  }
  // ---------------- the suspect: a ginger cat (own drawing, three rigs) ----------------
  const L_ = H.lerp;
  function ear(ctx, x, y, rot, k, sc = 1) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(sc, sc);
    blob(ctx, [[-46, 12], [-8, -96], [4, -98], [46, 12]], C.fur, k, { amp: 1.6 });
    blob(ctx, [[-24, 2], [-3, -58], [24, 2]], C.pink, k + 7, { lw: 0, amp: 1.2 });
    ctx.restore();
  }
  function eyes(ctx, pts, mode, k, sz = 1) {
    pts.forEach(([x, y], i) => {
      const m = mode === 'one' ? (i === 0 ? 'shut' : 'open') : mode;
      if (m === 'shut') { line(ctx, [[x - 26 * sz, y], [x, y + 13 * sz], [x + 26 * sz, y]], 8 * sz, C.ink, k + i); return; }
      const rx = 24 * sz, ry = (m === 'wide' ? 30 : 26) * sz;
      ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, TAU);
      if (m === 'half') { ctx.save(); ctx.clip(); ctx.fillStyle = C.yel; ctx.fillRect(x - rx, y, rx * 2, ry); ctx.fillStyle = C.ink; ctx.beginPath(); ctx.ellipse(x, y + ry * 0.5, 5 * sz, ry * 0.5, 0, 0, TAU); ctx.fill(); ctx.restore(); line(ctx, [[x - rx - 4, y], [x + rx + 4, y]], 7 * sz, C.ink, k + 5 + i); ctx.restore(); return; }
      ctx.fillStyle = C.yel; ctx.fill(); ctx.lineWidth = 6 * sz; ctx.strokeStyle = C.ink; ctx.stroke();
      ctx.fillStyle = C.ink; ctx.beginPath(); ctx.ellipse(x, y, (m === 'wide' ? 15 : 7) * sz, ry * 0.86, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x + 8 * sz, y - 10 * sz, 6 * sz, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(x - 6 * sz, y + 9 * sz, 3 * sz, 0, TAU); ctx.fill();
      ctx.restore();
    });
  }
  function whiskers(ctx, x, y, sd, len, k) {
    for (let j = -1; j <= 1; j++) line(ctx, [[x, y + j * 10], [x + sd * len * 0.5, y + j * 16 - 4], [x + sd * len, y + j * 26]], 4, C.ink, k + j * 3, { amp: 1 });
  }
  // curled up asleep, facing left. o: eyes, earRot, still
  function catCurl(ctx, cx, cy, s, o, t) {
    const br = o.still ? 1 : 1 + 0.03 * Math.sin(t * 2.4), er = o.earRot || 0;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.lineJoin = 'round';
    ctx.save(); ctx.translate(0, 150); ctx.scale(1, br); ctx.translate(0, -150);
    blob(ctx, ell(40, 0, 235, 150, 26), C.fur, 3000, { ht: (c) => halftone(c, -210, -160, 500, 330, 16, 0.4, C.furD, linY(-120, 150, 0.0, 0.62)) });
    for (let i = 0; i < 4; i++) { const x = -10 + i * 68; line(ctx, [[x, -146], [x + 16, -112], [x + 6, -78]], 16, C.furD, 3050 + i * 5); }
    ctx.restore();
    blob(ctx, ell(-95, 132, 58, 30, 14), C.fur, 3100);
    ear(ctx, -222, -100, -0.42 + er, 3120); ear(ctx, -118, -108, 0.3 - er * 0.7, 3130);
    blob(ctx, ell(-170, -28, 112, 100, 22), C.fur, 3140, { ht: (c) => halftone(c, -290, -140, 240, 220, 15, 0.7, C.furD, linY(-100, 80, 0.0, 0.4)) });
    for (let i = -1; i <= 1; i++) line(ctx, [[-170 + i * 26, -122], [-170 + i * 22, -92]], 10, C.furD, 3150 + i);
    blob(ctx, ell(-170, 26, 58, 40, 16), C.belly, 3160, { lw: 5 });
    eyes(ctx, [[-212, -30], [-128, -30]], o.eyes || 'shut', 3170, 1);
    blob(ctx, [[-184, 6], [-156, 6], [-170, 22]], C.pink, 3180, { lw: 4, amp: 0.8 });
    line(ctx, [[-186, 38], [-170, 46], [-154, 38]], 5, C.ink, 3185, { amp: 0.8 });
    whiskers(ctx, -232, 30, -1, 90, 3190); whiskers(ctx, -108, 30, 1, 90, 3200);
    const tail = [[250, 50], [232, 140], [80, 182], [-90, 176], [-238, 118]];
    line(ctx, tail, 62, C.ink, 3210, { amp: 1.4 }); line(ctx, tail, 46, C.fur, 3210, { amp: 1.4 });
    line(ctx, tail.slice(3), 46, C.furD, 3215, { amp: 1.2 });
    ctx.restore();
  }
  // side view, facing right. o.u: 0 crouch .. 1 full leap; o.flip mirrors
  function catPounce(ctx, cx, cy, s, o, t) {
    const u = o.u || 0;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(o.flip ? -s : s, s); ctx.rotate(L_(0.04, -0.16, u)); ctx.lineJoin = 'round';
    const leg = (a, b, k) => { line(ctx, [a, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + 6], b], 54, C.ink, k, { amp: 1.2 }); line(ctx, [a, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + 6], b], 38, C.fur, k, { amp: 1.2 }); blob(ctx, ell(b[0], b[1], 30, 22, 12), C.belly, k + 4, { lw: 6 }); };
    const tail = [[-190, -20], [-280, -90], [L_(-300, -380, u), L_(-200, -60, u)]];
    line(ctx, tail, 50, C.ink, 3300, { amp: 1.4 }); line(ctx, tail, 34, C.fur, 3300, { amp: 1.4 });
    leg([-150, 30], [L_(-170, -330, u), L_(120, 70, u)], 3310);
    blob(ctx, ell(0, 0, L_(210, 255, u), L_(100, 80, u), 26), C.fur, 3320, { ht: (c) => halftone(c, -270, -110, 540, 220, 16, 0.4, C.furD, linY(-90, 100, 0.0, 0.6)) });
    blob(ctx, ell(10, 52, L_(150, 190, u), 34, 18), C.belly, 3325, { lw: 0 });
    for (let i = 0; i < 4; i++) { const x = -110 + i * 60; line(ctx, [[x, -92 + Math.abs(x) * 0.05], [x + 14, -60], [x + 6, -30]], 15, C.furD, 3330 + i * 5); }
    leg([140, 30], [L_(180, 340, u), L_(120, -40, u)], 3350);
    const hx = L_(225, 300, u), hy = L_(-62, -80, u);
    ear(ctx, hx - 50, hy - 62, -0.3, 3360, 0.9); ear(ctx, hx + 30, hy - 70, 0.25, 3370, 0.9);
    blob(ctx, ell(hx, hy, 92, 82, 20), C.fur, 3380);
    blob(ctx, ell(hx + 40, hy + 30, 50, 34, 14), C.belly, 3385, { lw: 5 });
    eyes(ctx, [[hx - 10, hy - 18], [hx + 50, hy - 18]], 'wide', 3390, 0.8);
    blob(ctx, [[hx + 64, hy + 14], [hx + 86, hy + 14], [hx + 76, hy + 28]], C.pink, 3395, { lw: 4, amp: 0.8 });
    whiskers(ctx, hx + 80, hy + 34, 1, 80, 3398);
    ctx.restore();
  }
  // frontal portrait. o: eyes, earRot
  function catFace(ctx, cx, cy, s, o, t) {
    const er = o.earRot || 0, br = 1 + 0.012 * Math.sin(t * 2.4);
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.lineJoin = 'round';
    blob(ctx, [[-300, 430], [-250, 250], [-120, 190], [120, 190], [250, 250], [300, 430], [0, 470]], C.fur, 3500, { ht: (c) => halftone(c, -320, 180, 640, 300, 18, 0.4, C.furD, linY(200, 440, 0.05, 0.6)) });
    blob(ctx, [[-110, 200], [110, 200], [70, 360], [0, 400], [-70, 360]], C.belly, 3510);
    ctx.save(); ctx.scale(1, br);
    ear(ctx, -165, -150, -0.32 + er, 3520, 1.55); ear(ctx, 165, -150, 0.32 - er, 3530, 1.55);
    blob(ctx, ell(0, 0, 250, 205, 28), C.fur, 3540, { ht: (c) => halftone(c, -260, -215, 520, 430, 18, 0.4, C.furD, (x, y) => clamp((Math.abs(x) - 120) / 140) * 0.55) });
    [-1, 0, 1].forEach((i) => line(ctx, [[i * 44, -196], [i * 36, -130]], 14, C.furD, 3550 + i));
    [-1, 1].forEach((sd) => line(ctx, [[sd * 244, -20], [sd * 200, -10]], 12, C.furD, 3555 + sd));
    blob(ctx, ell(0, 92, 108, 72, 20), C.belly, 3560, { lw: 6 });
    eyes(ctx, [[-98, -24], [98, -24]], o.eyes || 'open', 3570, 1.7);
    blob(ctx, [[-26, 50], [26, 50], [0, 78]], C.pink, 3580, { lw: 5, amp: 0.8 });
    line(ctx, [[-44, 104], [-22, 118], [0, 98], [22, 118], [44, 104]], 6, C.ink, 3585, { amp: 0.8 });
    whiskers(ctx, -100, 96, -1, 170, 3590); whiskers(ctx, 100, 96, 1, 170, 3600);
    ctx.restore(); ctx.restore();
  }
  function mouse(ctx, x, y, s, k, flip, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(flip ? -s : s, s); ctx.lineJoin = 'round';
    line(ctx, [[-56, 10], [-110, -10 + 10 * Math.sin(t * 9)], [-150, 14]], 7, C.ink, k);
    blob(ctx, [[-62, 22], [-50, -22], [10, -38], [62, 4], [40, 26]], C.mouse, k + 2, { ht: (c) => halftone(c, -70, -40, 140, 70, 12, 0.3, C.mouseD, linY(-30, 26, 0, 0.6)) });
    blob(ctx, ell(10, -36, 22, 22, 12), C.mouse, k + 4); blob(ctx, ell(10, -36, 11, 11, 10), C.pink, k + 5, { lw: 0 });
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(34, -8, 6, 0, TAU); ctx.arc(64, 4, 6, 0, TAU); ctx.fill();
    ctx.restore();
  }
  function battery(ctx, x, y, w, h, lvl, k, horiz) {
    ctx.save(); ctx.translate(x, y); if (horiz) ctx.rotate(Math.PI / 2);
    const col = lvl < 0.34 ? C.red : lvl < 0.7 ? C.yel : '#3fae6a';
    blob(ctx, [[-w * 0.2, -h / 2 - 26], [w * 0.2, -h / 2 - 26], [w * 0.2, -h / 2], [-w * 0.2, -h / 2]], C.ink, k, { amp: 0.8, lw: 5 });
    blob(ctx, [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]], C.paper, k + 4, { amp: 1, lw: 9 });
    const fh = (h - 28) * clamp(lvl);
    if (fh > 1) { ctx.fillStyle = col; ctx.fillRect(-w / 2 + 14, h / 2 - 14 - fh, w - 28, fh); ctx.save(); ctx.beginPath(); ctx.rect(-w / 2 + 14, h / 2 - 14 - fh, w - 28, fh); ctx.clip(); ctx.globalCompositeOperation = 'multiply'; halftone(ctx, -w / 2, -h / 2, w, h, 16, 0.3, C.ink, linY(-h / 2, h / 2, 0.05, 0.45)); ctx.restore(); }
    ctx.restore();
    ctx.save(); ctx.font = F.mono(44); ctx.fillStyle = C.ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(Math.round(clamp(lvl) * 100) + '%', horiz ? x : x, horiz ? y + w / 2 + 44 : y + h / 2 + 50); ctx.restore();
  }
  function zzz(ctx, t, x, y, s = 1) {
    for (let i = 0; i < 3; i++) { const ph = ((t * 0.5 + i / 3) % 1); ctx.save(); ctx.globalAlpha = Math.sin(ph * Math.PI); ctx.translate(x + ph * 90 * s, y - ph * 220 * s); ctx.rotate(-0.15); ctx.font = F.hand((50 + ph * 50) * s); ctx.textAlign = 'center'; ctx.lineWidth = 9 * s; ctx.strokeStyle = C.ink; ctx.lineJoin = 'round'; ctx.strokeText('Z', 0, 0); ctx.fillStyle = C.paper; ctx.fillText('Z', 0, 0); ctx.restore(); }
  }
  function speed(ctx, x, y, n, len, k, dir = 1) { for (let i = 0; i < n; i++) { const yy = y - 120 + i * (240 / (n - 1)); line(ctx, [[x - dir * 60, yy], [x - dir * (60 + len * (0.6 + 0.4 * ((i * 37) % 5) / 5)), yy]], 9, C.ink, k + i, { amp: 1 }); } }
  const bgDots = (ctx, a, b) => { halftone(ctx, 0, 0, W0, H0, 26, 0.3, a, radial(540, 1080, 120, 640, 0.9)); halftone(ctx, 0, 0, W0, H0, 24, 0.75, b, edgeD(300, 0.9)); };

  // ================= SCENES =================
  // 0. mugshot: the sleeping suspect
  function sceneMug(ctx, t) {
    ctx.drawImage(heightChart(), 0, 0);
    const ey = t < P(1, 'almost') - 0.05 ? 'shut' : 'half';
    catCurl(ctx, 575, 1130, 1.25, { eyes: ey, earRot: t > P(1, 'never') ? 0.18 * Math.sin(t * 7) : 0 }, t);
    if (t < P(1, 'almost')) zzz(ctx, t, 420, 860, 1);
    namePlate(ctx, 'SUSPECT: THE CAT', 1520);
    if (t < PS(1) - 0.1) { const np = popIn(t, P(0, '16') - 0.12, 0.45); if (np) putC(ctx, numSpr('16', 300, C.yel, '#c48a12', 'n16'), 250, 520, np.s, -0.04); headline(ctx, t, P(0, 'hours') - 0.1, 'HOURS', 420, 470, 150, { maxW: 600 }); headline(ctx, t, P(0, 'day') - 0.1, 'A DAY', 424, 620, 100, { shadow: C.yel, maxW: 600 }); }
    else if (t < PS(2) - 0.1) { headline(ctx, t, PS(1) - 0.1, 'NEVER FULLY', 80, 440, 130); headline(ctx, t, P(1, 'asleep') - 0.1, 'ASLEEP', 84, 610, 130, { shadow: C.yel }); }
    else { headline(ctx, t, PS(2) - 0.1, 'SO WHY ALL', 80, 440, 130); headline(ctx, t, P(2, 'napping') - 0.1, 'THE NAPPING?', 84, 610, 110, { shadow: C.yel }); }
    if (t >= P(1, 'asleep') - 0.06 && t < PS(2) - 0.1) stamp(ctx, t, P(1, 'asleep') - 0.06, 'BARELY ASLEEP', 80, 560, 1330, -0.1);
    if (t >= PS(2) - 0.1) marker(ctx, t, P(2, 'napping') - 0.05, '?', 240, 880, 860, 0.15);
  }
  // 1. exhibit 01: the hunter
  function sceneHunt(ctx, t) {
    bgDots(ctx, C.yel, '#f4cfdc');
    const tp = P(4, 'pouncing'), u = H.ease.out(seg(t, tp - 0.25, tp + 0.15)) * (1 - H.ease.inOut(seg(t, tp + 0.6, tp + 1.0)));
    const lx = H.ease.inOut(seg(t, tp - 0.2, tp + 0.55)), cx = L_(420, 600, lx), cy = 1250 - Math.sin(lx * Math.PI) * 220;
    const wig = t < tp - 0.25 ? Math.sin(t * 14) * 6 : 0;
    // ground
    line(ctx, [[60, 1390], [540, 1386], [1020, 1392]], 8, C.ink, 4000, { amp: 1 });
    const bp = popIn(t, P(3, 'explosive') - 0.1, 0.4); if (bp && t < tp + 1.2) starburst(ctx, cx, cy - 20, 330, 14, C.yel, 4010, bp.s * (1 - seg(t, tp + 0.9, tp + 1.2)));
    if (u > 0.3) speed(ctx, cx - 260, cy, 5, 220, 4100);
    const mx = t < P(5, 'miss') - 0.15 ? 900 : L_(900, 1300, H.ease.in(seg(t, P(5, 'miss') - 0.15, P(5, 'miss') + 0.35)));
    if (t >= PS(3) + 0.4) mouse(ctx, mx, 1350, 1.1, 4200, false, t);
    if (t > P(5, 'miss') - 0.1 && mx < 1200) speed(ctx, mx - 60, 1340, 3, 120, 4250);
    catPounce(ctx, cx + wig, cy, 0.95, { u }, t);
    const lv = 1 - 0.78 * H.ease.inOut(seg(t, P(4, 'burn') - 0.1, P(4, 'seconds') + 0.3));
    if (t >= P(4, 'burn') - 0.3) battery(ctx, 930, 580, 120, 220, lv, 4300);
    if (t < P(4, 'burn') - 0.2) { headline(ctx, t, PS(3) - 0.1, 'BUILT FOR', 80, 440, 140); headline(ctx, t, P(3, 'bursts') - 0.1, 'BURSTS', 84, 610, 150, { shadow: C.yel }); }
    else { headline(ctx, t, P(4, 'burn') - 0.2, 'ENERGY', 80, 440, 150, { maxW: 700 }); headline(ctx, t, P(4, 'seconds') - 0.1, 'IN SECONDS', 84, 610, 100, { shadow: C.yel, maxW: 700 }); }
    stamp(ctx, t, P(5, 'miss') - 0.06, 'MISSED', 120, 540, 1590, -0.08);
  }
  // 2. exhibit 02: power down between hunts
  function scenePower(ctx, t) {
    halftone(ctx, 0, 0, W0, H0, 24, 0.5, '#c6d2ef', linY(0, H0, 0.9, 0.2));
    const z = 1 + seg(t, PS(6), PE(7)) * 0.05; ctx.save(); ctx.translate(540, 1130); ctx.scale(z, z); ctx.translate(-540, -1130);
    catCurl(ctx, 575, 1130, 1.2, { eyes: 'shut' }, t); zzz(ctx, t, 420, 880, 1); ctx.restore();
    const lv = 0.22 + 0.78 * H.ease.inOut(seg(t, P(6, 'powers'), P(7, 'one') + 0.3));
    battery(ctx, 540, 1440, 100, 520, lv, 4400, true);
    headline(ctx, t, PS(6) - 0.1, 'POWER', 80, 440, 170); headline(ctx, t, P(6, 'down') - 0.1, 'DOWN', 84, 610, 150, { shadow: C.yel });
    pill(ctx, t, P(7, 'save') - 0.1, [['SAVING', false], ['FUEL', true]], 540, 1620, 56);
  }
  // 3. exhibit 03: dawn and dusk (night page)
  function sceneClock(ctx, t) {
    ctx.fillStyle = C.ink; ctx.fillRect(0, 0, W0, H0);
    halftone(ctx, 0, 0, W0, H0, 24, 0.4, '#2c3a78', edgeD(380, 1));
    const cx = 540, cy = 1060, R = 300, A = (h) => (h / 24) * TAU - Math.PI / 2;
    const dp = popIn(t, PS(8) - 0.2, 0.4); if (!dp) return;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(dp.s, dp.s); ctx.translate(-cx, -cy);
    blob(ctx, ell(cx, cy, R, R, 40), C.paper, 4500, { amp: 1.2, lw: 10, stroke: C.paper });
    halftone(ctx, cx - R, cy - R, R * 2, R, 16, 0.3, '#c6d2ef', (x, y) => Math.hypot(x - cx, y - cy) < R - 10 ? 0.55 : 0);
    ctx.strokeStyle = C.ink; for (let h = 0; h < 24; h++) { const a = A(h), big = h % 6 === 0; ctx.lineWidth = big ? 8 : 4; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * (R - 16), cy + Math.sin(a) * (R - 16)); ctx.lineTo(cx + Math.cos(a) * (R - (big ? 60 : 36)), cy + Math.sin(a) * (R - (big ? 60 : 36))); ctx.stroke(); }
    const arc = (h0, h1, t0, col) => { const g = H.ease.out(seg(t, t0, t0 + 0.4)); if (g <= 0) return; ctx.save(); ctx.lineCap = 'round'; ctx.lineWidth = 64; ctx.strokeStyle = C.ink; ctx.beginPath(); ctx.arc(cx, cy, R + 40, A(h0), A(h0 + (h1 - h0) * g)); ctx.stroke(); ctx.lineWidth = 46; ctx.strokeStyle = col; ctx.stroke(); ctx.restore(); if (REC) REC.push(['pop', t0]); };
    arc(4.5, 7.5, P(8, 'dawn') - 0.15, C.yel); arc(16.5, 19.5, P(8, 'dusk') - 0.15, C.pink);
    ctx.font = F.sans(46); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = C.ink;
    if (t > P(8, 'dawn') - 0.1) ctx.fillText('DAWN', cx + 170, cy); if (t > P(8, 'dusk') - 0.1) ctx.fillText('DUSK', cx - 170, cy);
    // sun at noon (bottom), moon at midnight (top)
    blob(ctx, ell(cx, cy + 190, 40, 40, 14), C.yel, 4520, { lw: 6 }); blob(ctx, [[cx - 30, cy - 220], [cx + 10, cy - 236], [cx + 30, cy - 196], [cx + 4, cy - 168], [cx - 26, cy - 186]], '#c6d2ef', 4530, { lw: 6 });
    const ha = A(4 + (t - PS(8)) * 1.6); line(ctx, [[cx, cy], [cx + Math.cos(ha) * (R - 80), cy + Math.sin(ha) * (R - 80)]], 14, C.red, 4540, { amp: 0.6, noBoil: true });
    blob(ctx, ell(cx, cy, 18, 18, 10), C.ink, 4550, { lw: 0, noBoil: true });
    ctx.restore();
    [[220, 1560, 0], [540, 1600, 0.12], [860, 1560, 0.24]].forEach(([x, y, d], i) => { const p = popIn(t, P(9, 'mice') - 0.1 + d, 0.35); if (p) mouse(ctx, x + (t - P(9, 'mice')) * 60, y, 1.1 * p.s, 4600 + i * 20, false, t + i); });
    headline(ctx, t, PS(8) - 0.1, 'DAWN', 80, 440, 170, { color: C.paper, shadow: C.pink }); headline(ctx, t, P(8, 'dusk') - 0.15, '+ DUSK', 84, 610, 150, { color: C.paper, shadow: C.cob });
  }
  // 4. exhibit 04: 5 a.m. zoomies
  function sceneZoom(ctx, t) {
    bgDots(ctx, C.yel, '#f4cfdc');
    const np = popIn(t, P(10, 'yours') - 0.12, 0.45); if (np) { const five = t >= P(10, '5') - 0.1, jl = five ? 1 + 0.12 * Math.exp(-(t - P(10, '5')) * 8) * Math.cos((t - P(10, '5')) * 40) : 1; putC(ctx, five ? numSpr('5:00', 290, C.pink, '#b8326a', 'n5') : numSpr('4:59', 290, C.cob, C.ink, 'n459'), 470, 830, np.s * jl, -0.04); putC(ctx, numSpr('AM', 130, C.yel, '#c48a12', 'nam'), 900, 900, np.s, 0.06); if (five && REC) REC.push(['pop', P(10, '5') - 0.1]); }
    const t0 = P(10, 'yours') - 0.1, g = seg(t, t0, t0 + 1.1), g2 = seg(t, t0 + 1.25, t0 + 2.2);
    if (g > 0 && g < 1) { const x = L_(-350, 1450, g), y = 1280 - Math.abs(Math.sin(g * Math.PI * 3)) * 120; speed(ctx, x - 200, y, 5, 300, 4700); catPounce(ctx, x, y, 0.8, { u: 0.9 }, t); }
    if (g2 > 0 && g2 < 1) { const x = L_(1450, -350, g2), y = 1300 - Math.abs(Math.sin(g2 * Math.PI * 3)) * 120; speed(ctx, x + 200, y, 5, 300, 4750, -1); catPounce(ctx, x, y, 0.8, { u: 0.9, flip: true }, t); }
    headline(ctx, t, PS(10) - 0.1, "THAT'S WHY", 80, 440, 140);
    stamp(ctx, t, P(10, 'wild') - 0.06, 'GOES WILD', 120, 560, 1560, -0.1);
  }
  // 5. exhibit 05: light dozing, senses on
  function sceneDoze(ctx, t) {
    bgDots(ctx, '#c6d2ef', '#f6e09a');
    const tq = P(14, 'squeak'), awake = t > P(14, 'awake') - 0.1;
    const er = t > PS(13) - 0.1 && !awake ? 0.32 * Math.sin((t - PS(13)) * 6) : 0;
    catCurl(ctx, 575, 1210, 1.15, { eyes: awake ? 'wide' : 'shut', earRot: er }, t);
    if (!awake && t < tq) zzz(ctx, t, 330, 1040, 0.8);
    if (t > PS(13) - 0.1) for (let i = 0; i < 3; i++) { const ph = ((t - PS(13)) * 1.2 + i / 3) % 1; ctx.save(); ctx.globalAlpha = 1 - ph; ctx.lineWidth = 9; ctx.strokeStyle = C.cob; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(900, 1300, 60 + ph * 260, Math.PI * 0.95, Math.PI * 1.25); ctx.stroke(); ctx.restore(); }
    if (t > tq - 0.15) { mouse(ctx, 880, 1480, 1.0, 4800, true, t); marker(ctx, t, tq - 0.1, 'SQUEAK!', 84, 760, 1600, 0.06); }
    if (t < PS(13) - 0.1) { const np = popIn(t, P(12, '15') - 0.12, 0.45); if (np) putC(ctx, numSpr('15-30 MIN', 160, C.yel, '#c48a12', 'n1530'), 540, 790, np.s, -0.03); }
    if (t < PS(13) - 0.1) { headline(ctx, t, PS(11) - 0.1, 'LIGHT', 80, 440, 170); headline(ctx, t, P(11, 'dozing') - 0.1, 'DOZING', 84, 610, 150, { shadow: C.yel }); }
    else { headline(ctx, t, PS(13) - 0.1, 'SENSES', 80, 440, 170); headline(ctx, t, P(13, 'switched') - 0.1, 'STILL ON', 84, 610, 150, { shadow: C.yel }); }
    stamp(ctx, t, P(14, 'awake') - 0.06, 'AWAKE', 120, 740, 1180, -0.1);
  }
  // 6. exhibit 06: only a quarter is deep sleep
  function scenePie(ctx, t) {
    halftone(ctx, 0, 0, W0, H0, 24, 0.75, '#c6d2ef', edgeD(320, 0.9));
    const cx = 540, cy = 1060, R = 300, p = popIn(t, PS(15) - 0.2, 0.4); if (!p) return;
    const q = H.ease.back(seg(t, P(15, 'quarter') - 0.1, P(15, 'quarter') + 0.3));
    ctx.save(); ctx.translate(cx, cy); ctx.scale(p.s, p.s);
    const wedge = (a0, a1, off, col, k) => { const am = (a0 + a1) / 2; ctx.save(); ctx.translate(Math.cos(am) * off, Math.sin(am) * off); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R, a0, a1); ctx.closePath(); ctx.fillStyle = col; ctx.fill(); ctx.save(); ctx.clip(); ctx.globalCompositeOperation = 'multiply'; halftone(ctx, -R, -R, R * 2, R * 2, 18, 0.3 + k, col === C.yel ? '#c48a12' : C.ink, radial(0, 0, 40, R, 0.42)); ctx.restore(); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R, a0, a1); ctx.closePath(); ctx.lineWidth = 9; ctx.strokeStyle = C.ink; ctx.lineJoin = 'round'; ctx.stroke(); ctx.restore(); };
    const s0 = -Math.PI / 2;
    if (q <= 0) wedge(0, TAU, 0, C.yel, 0); else { wedge(s0 + TAU * 0.25, s0 + TAU, 0, C.yel, 0); wedge(s0, s0 + TAU * 0.25 * Math.min(1, q), 40 * q, C.cob, 0.4); }
    ctx.font = F.sans(56); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = C.ink; ctx.fillText('DOZING', -110, 90); ctx.font = F.num(80); ctx.fillText('3/4', -110, 10);
    if (q > 0.5) { ctx.fillStyle = C.paper; ctx.font = F.num(76); ctx.fillText('1/4', 150, -170); ctx.font = F.sans(46); ctx.fillText('DEEP', 150, -100); }
    ctx.restore();
    headline(ctx, t, PS(15) - 0.1, 'ONLY 1/4', 80, 440, 170); headline(ctx, t, P(15, 'deep') - 0.1, 'DEEP SLEEP', 84, 610, 120, { shadow: C.cob });
    const np = popIn(t, P(16, '5') - 0.12, 0.45); if (np) putC(ctx, numSpr('5-7 MIN', 150, C.cob, C.ink, 'n57'), 540, 1520, np.s, -0.03);
  }
  // 7. verdict
  function sceneVerdict(ctx, t) {
    const z = 1 + seg(t, PS(17), PE(18)) * 0.06;
    ctx.save(); ctx.translate(540, 1050); ctx.scale(z, z); ctx.translate(-540, -1050);
    ctx.drawImage(heightChart(), 0, 0);
    catFace(ctx, 520, 1060, 0.95, { eyes: t > P(18, 'charging') ? 'open' : 'half' }, t);
    namePlate(ctx, 'SUSPECT: THE CAT', 1560);
    ctx.restore();
    const lv = 0.3 + 0.7 * H.ease.inOut(seg(t, P(18, 'charging') - 0.1, P(18, 'sprint') + 0.2));
    battery(ctx, 950, 1060, 100, 250, lv, 4900);
    if (t < PS(18) - 0.1) { headline(ctx, t, PS(17) - 0.1, 'NOT', 80, 440, 190); headline(ctx, t, P(17, 'lazy') - 0.1, 'LAZY', 84, 610, 150, { shadow: C.yel }); }
    else { headline(ctx, t, PS(18) - 0.1, 'CHARGING', 80, 440, 160); headline(ctx, t, P(18, 'sprint') - 0.1, 'UP', 84, 610, 150, { shadow: C.yel }); }
    stamp(ctx, t, P(17, 'lazy') - 0.06, 'NOT GUILTY', 110, 540, 1340, -0.1);
  }
  // 8. the question
  function sceneQ(ctx, t) {
    bgDots(ctx, C.yel, '#f4cfdc');
    catFace(ctx, 540, 1080, 0.95, { eyes: t > P(19, 'or') - 0.1 ? 'one' : 'shut', earRot: t > P(19, 'waiting') ? 0.12 * Math.sin(t * 8) : 0 }, t);
    headline(ctx, t, PS(19) - 0.1, 'ASLEEP...', 80, 440, 170); headline(ctx, t, P(19, 'or') - 0.1, 'OR WAITING?', 84, 610, 120, { shadow: C.yel });
    pill(ctx, t, P(19, 'now') - 0.1, [['YOUR CAT', false], ['RIGHT NOW?', true]], 540, 1600, 58);
  }

  // ---------------- edit: dot wipes ----------------
  const WIPE = 0.6;
  const SC = [
    { f: sceneMug, chip: ['EXHIBIT 00', 'THE SUSPECT'] },
    { p: 3, f: sceneHunt, chip: ['EXHIBIT 01', 'THE HUNTER'], col: C.ink },
    { p: 6, f: scenePower, chip: ['EXHIBIT 02', 'POWER SAVE'], col: C.cob },
    { p: 8, f: sceneClock, chip: ['EXHIBIT 03', 'THE HOURS'], col: C.pink, dark: true },
    { p: 10, f: sceneZoom, chip: ['EXHIBIT 04', '5 A.M.'], col: C.yel },
    { p: 11, f: sceneDoze, chip: ['EXHIBIT 05', 'THE NAP'], col: C.cob },
    { p: 15, f: scenePie, chip: ['EXHIBIT 06', 'SLEEP FILE'], col: C.ink },
    { p: 17, f: sceneVerdict, chip: ['VERDICT', 'CASE CLOSED'], col: C.red, hard: true },
    { p: 19, f: sceneQ, chip: ['OPEN FILE', 'YOUR CALL'], col: C.pink },
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
    hud(ctx, t, SC[i].chip, !!SC[i].dark);
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
    const squeak = (t, g = 1, p = 0.5) => k.tone(t, { f: [[0, 2200], [0.05, 3200], [0.12, 2600]], dur: 0.14, gain: 0.06 * g, pan: p });
    k.play('shutter', 0.05, { gain: 0.6 });
    for (let x = 0.4; x < P(1, 'almost'); x += 1.6) k.noise(x, { dur: 1.2, color: 'brown', filter: 'lowpass', f: [[0, 250], [0.6, 600], [1.2, 250]], gain: 0.08, a: 0.5, minor: true });
    META.heads.forEach(([, t0, n]) => { for (let i = 0; i < Math.min(n, 6); i++) k.play('pop', t0 + i * 0.045 * Math.max(1, n / 6), { gain: 0.16, f: 560 + i * 70, minor: true }); });
    META.pops.forEach((t0) => k.play('pop', t0, { gain: 0.22, f: 480, minor: true }));
    META.stamps.forEach((t0) => { k.play('stamp', t0, { gain: 0.85 }); k.play('slap', t0 + 0.01, { gain: 0.3 }); });
    SC.forEach((s) => { if (s.cut == null) return; if (s.hard) { k.play('impact', s.cut, { gain: 0.5 }); return; } k.play('whoosh', s.cut - 0.25, { dur: 0.5, gain: 0.35 }); k.play('paper', s.cut, { dur: 0.3, gain: 0.3, minor: true }); pluck(s.cut + 0.2, 392); pluck(s.cut + 0.32, 587); });
    k.play('blip', P(1, 'almost'), { f: 'E5', gain: 0.4 });
    // hunter
    const tp = P(4, 'pouncing');
    for (let x = PS(3) + 0.3; x < tp - 0.3; x += 0.35) k.play('tick', x, { gain: 0.18, minor: true });
    k.play('riser', tp - 0.6, { dur: 0.5, gain: 0.3 }); k.play('jump', tp - 0.2, { gain: 0.35 }); k.play('whoosh', tp - 0.15, { dur: 0.4, gain: 0.5, top: 3600 }); k.play('thud', tp + 0.55, { gain: 0.5 });
    for (let i = 0; i < 8; i++) k.play('blip', P(4, 'burn') + i * 0.22, { f: 1200 - i * 90, gain: 0.25, minor: true });
    squeak(P(5, 'miss') - 0.2); k.play('swish', P(5, 'miss') - 0.1, { gain: 0.4, pan: 0.6 }); k.play('error', P(5, 'miss') + 0.05, { gain: 0.25 });
    // power down
    k.play('powerup', P(6, 'powers') + 0.4, { gain: 0.3 }); k.play('ding', P(7, 'one') + 0.3, { f: 'G5', gain: 0.3 });
    // clock
    for (let x = PS(8); x < PE(9); x += 0.5) k.play('tock', x, { f: 900, gain: 0.15, minor: true });
    k.play('sparkle', P(8, 'dawn'), { n: 5, gain: 0.35 }); k.play('ding', P(8, 'dusk'), { f: 'E5', gain: 0.3 });
    [0, 0.12, 0.24].forEach((d, i) => squeak(P(9, 'mice') + d, 0.7, -0.4 + i * 0.4));
    // 5 a.m. alarm + zoomies
    for (let i = 0; i < 10; i++) k.play('blip', P(10, '5') + i * 0.08, { f: i % 2 ? 'A6' : 'E6', gain: 0.3 });
    k.play('whoosh', P(10, 'yours') - 0.1, { dur: 0.9, gain: 0.45, pan: -0.5 }); k.play('whoosh', P(10, 'yours') + 1.15, { dur: 0.9, gain: 0.45, pan: 0.5 });
    // doze
    for (let x = PS(13); x < P(14, 'squeak') - 0.2; x += 0.5) k.play('swish', x, { dur: 0.12, gain: 0.15, minor: true });
    squeak(P(14, 'squeak') - 0.1, 1.2); squeak(P(14, 'squeak') + 0.08, 1.0);
    // pie
    k.play('ding', P(15, 'quarter'), { f: 'C5', gain: 0.35 }); k.play('ding', P(16, '5'), { f: 'G5', gain: 0.3 });
    // verdict
    k.play('shutter', PS(17), { gain: 0.4 }); k.play('powerup', P(18, 'charging'), { gain: 0.3 });
    ['C5', 'E5', 'G5', 'C6'].forEach((f, i) => k.play('ding', PE(19) + 0.1 + i * 0.09, { f, gain: 0.28 - i * 0.03, pan: (i - 1.5) * 0.2 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); BF = 3; ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W0, H0);
    bgDots(ctx, C.yel, '#f4cfdc'); catFace(ctx, 540, 1180, 0.95, { eyes: 'one' }, 0);
    headline(ctx, 99, 0, 'BARELY', 80, 560, 200); headline(ctx, 99, 0, 'ASLEEP?', 84, 820, 170, { shadow: C.yel });
    ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(PAPER(), 0, 0); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
