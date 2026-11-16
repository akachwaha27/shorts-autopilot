// ================= Mid-century Cartoon, vertical 1080x1920: "Why does a pinch of salt make sweet things taste sweeter?" =================
// Style: Lemo-Opuscar "Mid-century Cartoon" (STYLE.md grammar). Drawing primitives from its MIT toon.js engine (window.LEMO,
// bundled before this file); every figure, prop, layout and timing here is original. Unattended run: no storyboard step.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":1.97,"text":"Salt makes your dessert sweeter.","words":[["salt",0.25],["makes",0.51],["your",0.82],["dessert",1.08],["sweeter",1.53]]},{"s":2.38,"e":4.51,"text":"You've probably never noticed why.","words":[["youve",2.38],["probably",2.76],["never",3.37],["noticed",3.75],["why",4.28]]},{"s":4.89,"e":6.6,"text":"Bakers sneak it into cookies,","words":[["bakers",4.89],["sneak",5.32],["it",5.67],["into",5.82],["cookies",6.1]]},{"s":6.92,"e":8.15,"text":"caramel and chocolate.","words":[["caramel",6.92],["and",7.37],["chocolate",7.57]]},{"s":8.54,"e":10.58,"text":"So what's salt really doing on your tongue?","words":[["so",8.54],["whats",8.66],["salt",8.96],["really",9.2],["doing",9.56],["on",9.86],["your",9.98],["tongue",10.22]]},{"s":11.09,"e":12.11,"text":"Trick number one.","words":[["trick",11.09],["number",11.45],["one",11.89]]},{"s":12.38,"e":14.2,"text":"Most foods hide a little bitterness,","words":[["most",12.38],["foods",12.62],["hide",12.92],["a",13.17],["little",13.23],["bitterness",13.59]]},{"s":14.62,"e":17.35,"text":"and sodium turns your bitter taste cells down,","words":[["and",14.62],["sodium",14.83],["turns",15.27],["your",15.62],["bitter",15.91],["taste",16.34],["cells",16.7],["down",17.06]]},{"s":17.88,"e":20.22,"text":"like muting the loudest guy in the room.","words":[["like",17.88],["muting",18.17],["the",18.61],["loudest",18.83],["guy",19.34],["in",19.56],["the",19.7],["room",19.92]]},{"s":20.65,"e":23.08,"text":"With bitter quiet, sweet gets the spotlight.","words":[["with",20.65],["bitter",20.92],["quiet",21.33],["sweet",21.66],["gets",22.0],["the",22.27],["spotlight",22.47]]},{"s":23.48,"e":24.57,"text":"Trick number two.","words":[["trick",23.48],["number",23.87],["two",24.33]]},{"s":24.94,"e":29.94,"text":"Scientists found your sweet taste cells have a tiny sugar door","words":[["scientists",24.94],["found",25.9],["your",26.39],["sweet",26.77],["taste",27.25],["cells",27.73],["have",28.21],["a",28.6],["tiny",28.69],["sugar",29.08],["door",29.56]]},{"s":30.01,"e":30.85,"text":"called S G L T one.","words":[["called",30.01],["s",30.4],["g",30.46],["l",30.53],["t",30.59],["one",30.66]]},{"s":31.2,"e":33.3,"text":"It pulls sugar in together with sodium,","words":[["it",31.2],["pulls",31.33],["sugar",31.66],["in",31.98],["together",32.12],["with",32.64],["sodium",32.9]]},{"s":33.88,"e":37.55,"text":"so a little salt may help those cells catch even more sweetness.","words":[["so",33.88],["a",34.02],["little",34.09],["salt",34.51],["may",34.8],["help",35.01],["those",35.29],["cells",35.64],["catch",36.0],["even",36.35],["more",36.63],["sweetness",36.91]]},{"s":37.99,"e":39.31,"text":"And you barely need any.","words":[["and",37.99],["you",38.2],["barely",38.4],["need",38.82],["any",39.1]]},{"s":39.73,"e":42.18,"text":"A pinch is about a sixteenth of a teaspoon,","words":[["a",39.73],["pinch",39.8],["is",40.16],["about",40.31],["a",40.67],["sixteenth",40.74],["of",41.39],["a",41.53],["teaspoon",41.61]]},{"s":42.58,"e":43.98,"text":"around a third of a gram.","words":[["around",42.58],["a",43.03],["third",43.1],["of",43.47],["a",43.62],["gram",43.69]]},{"s":44.45,"e":46.51,"text":"Add too much and it just tastes salty.","words":[["add",44.45],["too",44.66],["much",44.87],["and",45.14],["it",45.35],["just",45.48],["tastes",45.76],["salty",46.17]]},{"s":46.94,"e":48.99,"text":"So when you salt a slice of watermelon,","words":[["so",46.94],["when",47.07],["you",47.34],["salt",47.54],["a",47.8],["slice",47.87],["of",48.2],["watermelon",48.33]]},{"s":49.43,"e":51.71,"text":"are you making it saltier, or sweeter?","words":[["are",49.43],["you",49.66],["making",49.89],["it",50.34],["saltier",50.49],["or",51.02],["sweeter",51.18]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const E = window.LEMO, C = E.PAL;
  const clamp = E.clamp, lerp = E.lerp, seg = E.seg, eo = E.eo, eio = E.eio;
  const back = (t) => E.back(t, 2.2);
  const F = { slab: (s) => `400 ${s}px "Alfa Slab One"`, sans: (s) => `600 ${s}px "Jost"`, script: (s) => `700 ${s}px "Oleo Script"` };
  try { [F.slab(120), F.sans(48), F.script(100)].forEach((f) => document.fonts.load(f, 'AaZz09?!/≈.')); } catch (e) {}
  const tw = (t) => Math.floor(t * 12 + 1e-6) / 12; // on twos
  const pop = (t, t0, d = 0.25) => (t < t0 ? 0 : back(seg(t, t0, t0 + d)));
  const sh = (c, pts, fill, line = 4, seed = 1, o = {}) => E.shape(c, pts, Object.assign({ fill, line, seed }, o));
  const el = (cx, cy, rx, ry, n = 44) => E.ellipse(cx, cy, rx, ry, n);
  const arc = (cx, cy, rx, ry, a0, a1, n = 18) => E.ellipse(cx, cy, rx, ry, n, a0, a1);
  const rr = (x, y, w, h, r) => E.rrect(x, y, w, h, r);
  const txt = (c, s, x, y, o = {}) => E.text(c, s, x, y, Object.assign({ align: 'center', base: 'middle' }, o));
  const scaleAt = (c, x, y, k) => { c.translate(x, y); c.scale(k, k); c.translate(-x, -y); };
  const hsh = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
  const blinkAt = (t, seed) => { const per = 2.7 + (seed % 3) * 0.45, ph = (tw(t) + seed * 0.37) % per; return ph < 0.13 ? 1 : 0; };
  const cache = (() => { const m = {}; return (k, f) => m[k] || (m[k] = f()); })();

  // ---------------- house pieces ----------------
  function ground(c, wall, floor, fy = 1420, seed = 1) {
    E.plane(c, E.rect(0, 0, W0, H0), wall, { grain: 0.2 });
    E.plane(c, E.rect(0, fy, W0, H0 - fy), floor, { grain: 0.3 });
    E.ink(c, [[-20, fy], [W0 + 20, fy]], 4.5, { breaks: 0.25, seed, taper: false });
  }
  function decor(c, t, seed, col = C.white, zone = [80, 1000, 180, 1250]) {
    const R = E.rng(seed);
    for (let i = 0; i < 6; i++) {
      const x = zone[0] + R() * (zone[1] - zone[0]), y = zone[2] + R() * (zone[3] - zone[2]), r = 16 + R() * 18, ph = R() * 6;
      const k = 0.75 + 0.25 * Math.sin(tw(t) * 3 + ph);
      E.sparkle(c, x, y, r * k, { fill: col, alpha: 0.8, rot: tw(t) * 0.6 + ph });
    }
  }
  function popText(c, t, t0, s, x, y, o) { const k = pop(t, t0); if (k <= 0) return; c.save(); scaleAt(c, x, y, k); txt(c, s, x, y, o); c.restore(); }
  function tag(c, t, t0, s, x, y, o = {}) {
    const k = pop(t, t0) * (o.t1 != null ? 1 - seg(t, o.t1, o.t1 + 0.15) : 1); if (k <= 0.01) return;
    const px = o.px || 48, star = o.star !== false;
    const w = E.measure(c, s, F.sans(px)) + px * 1.4 + (star ? px * 0.9 : 0), h = px * 1.7;
    c.save(); scaleAt(c, x, y, k);
    sh(c, rr(x - w / 2, y - h / 2, w, h, h * 0.3), o.bg || C.white, 3.5, o.seed || 9, { grain: 0.15 });
    let tx = x;
    if (star) { E.star(c, x - w / 2 + px * 0.95, y, px * 0.4, { n: 4, inner: 0.3, fill: o.starC || C.coral, line: 0, rot: tw(t) * 1.5 }); tx += px * 0.45; }
    txt(c, s, tx, y + px * 0.05, { font: F.sans(px), fill: C.ink });
    c.restore();
  }
  function medallion(c, x, y, r, n, k = 1) {
    if (k <= 0) return; c.save(); scaleAt(c, x, y, k);
    sh(c, el(x, y, r, r, 48), C.ink, 0, 3, { grain: 0.1 });
    E.ink(c, el(x, y, r * 0.84, r * 0.84, 48), 3, { closed: true, color: C.white, breaks: 0.3, seed: 4 });
    txt(c, String(n), x, y + r * 0.08, { font: F.slab(Math.round(r * 1.05)), fill: C.white, plate: C.coral });
    c.restore();
  }
  function header(c, t, t0, n, title) {
    const u = eo(seg(tw(t), t0 + 0.1, t0 + 0.5)); if (u <= 0) return;
    c.save(); c.translate((1 - u) * -760, 0);
    medallion(c, 165, 330, 84, n, 1);
    E.text(c, `TRICK ${n} OF 2`, 278, 292, { font: F.sans(44), fill: C.ink, track: 6, base: 'middle' });
    E.text(c, title, 278, 374, { font: F.slab(84), fill: C.ink, plate: C.white, base: 'middle', maxW: 760 });
    c.restore();
  }
  function camPush(c, t, t0, t1, k = 0.03, cx = 540, cy = 1000) { scaleAt(c, cx, cy, 1 + k * eio(seg(t, t0, t1))); }

  // ---------------- props ----------------
  function shaker(c, x, y, s, ang, seed = 20) {
    c.save(); c.translate(x, y); c.rotate(ang); c.scale(s, s);
    const body = E.spline([[-60, -40], [60, -40], [70, 60], [66, 150], [-66, 150], [-70, 60]], true, 6);
    sh(c, body, C.teal, 4, seed, { shade: [{ pts: [[22, -50], [90, -50], [90, 170], [30, 170]], color: C.tealD }] });
    sh(c, rr(-58, 34, 116, 58, 10), C.white, 3, seed + 1, { grain: 0.1 });
    E.text(c, 'SALT', 0, 65, { font: F.slab(32), fill: C.ink, align: 'center', base: 'middle' });
    const cap = E.spline([[-64, -36], [-56, -92], [0, -116], [56, -92], [64, -36]], true, 6);
    sh(c, cap, C.chrome, 4, seed + 2, { shade: [{ pts: [[18, -130], [80, -130], [80, -36], [26, -36]], color: C.chromeD, alpha: 0.8 }] });
    c.fillStyle = C.ink; for (const [hx, hy] of [[-22, -84], [0, -96], [22, -84], [-11, -66], [11, -66]]) { c.beginPath(); c.arc(hx, hy, 5, 0, TAU); c.fill(); }
    c.restore();
  }
  const mouthOf = (x, y, s, ang) => [x + Math.sin(ang) * 112 * s, y - Math.cos(ang) * 112 * s];
  // salt grains poured from (mx,my) between t0 and t1, landing on stopY
  function grains(c, t, t0, t1, mx, my, stopY, seed = 1, rate = 16, spread = 34, col = C.white) {
    if (t < t0) return; const R = E.rng(seed), n = Math.floor((t1 - t0) * rate);
    c.save(); c.lineWidth = 2.4; c.strokeStyle = C.ink; c.fillStyle = col;
    for (let i = 0; i < n; i++) {
      const ti = t0 + i / rate + R() * 0.04, vx = (R() - 0.5) * spread * 2.5, sz = 9 + R() * 6, rot = R() * 3, ox = (R() - 0.5) * spread;
      if (t < ti) continue;
      const dl = (-200 + Math.sqrt(40000 + 5200 * Math.max(0, stopY - my))) / 2600;
      let d = t - ti, landed = d >= dl; if (landed) d = dl;
      const y = Math.min(stopY - (landed ? R() * 8 : 0), my + 200 * d + 1300 * d * d), x = mx + ox + vx * d;
      c.save(); c.translate(x, y); c.rotate(rot + (landed ? 0 : d * 7)); c.beginPath(); c.rect(-sz / 2, -sz / 2, sz, sz); c.fill(); c.stroke(); c.restore();
    }
    c.restore();
  }
  function capsule(x0, y0, x1, y1, r, n = 8) {
    const a = Math.atan2(y1 - y0, x1 - x0), out = [];
    for (let i = 0; i <= n; i++) { const q = a - Math.PI / 2 + Math.PI * i / n; out.push([x1 + Math.cos(q) * r, y1 + Math.sin(q) * r]); }
    for (let i = 0; i <= n; i++) { const q = a + Math.PI / 2 + Math.PI * i / n; out.push([x0 + Math.cos(q) * r, y0 + Math.sin(q) * r]); }
    return out;
  }
  // four-finger cartoon glove: stroke every part, then one fill (union), thin separations
  function glove(c, x, y, s, ang, pose = 'open', seed = 40) {
    c.save(); c.translate(x, y); c.rotate(ang); c.scale(s, s);
    const parts = [el(0, 0, 34, 30, 26), rr(-62, -22, 34, 44, 10)];
    if (pose === 'open') { [[-0.5, 62], [-0.17, 70], [0.17, 68], [0.5, 58]].forEach(([a, l]) => parts.push(capsule(16, 0, 16 + Math.cos(a) * l, Math.sin(a) * l, 10))); parts.push(capsule(0, -18, 18, -52, 10)); }
    else if (pose === 'hold') { [[-0.6, 34], [-0.2, 38], [0.2, 37], [0.6, 32]].forEach(([a, l]) => parts.push(capsule(14, 0, 14 + Math.cos(a) * l, Math.sin(a) * l, 11))); parts.push(capsule(0, -16, 30, -40, 10)); }
    else if (pose === 'pinch') { parts.push(capsule(14, -6, 66, -26, 10)); parts.push(capsule(4, -20, 58, -40, 10)); [[0.4, 30], [0.75, 28], [1.1, 24]].forEach(([a, l]) => parts.push(capsule(14, 4, 14 + Math.cos(a) * l, 4 + Math.sin(a) * l, 11))); }
    for (const p of parts) E.ink(c, p, 9, { closed: true, taper: false, wob: 0.15, seed, breaks: 0 });
    const off = E.reg(seed, 0.6);
    c.fillStyle = C.white; for (const p of parts) { E.path(c, E.move(p, off[0], off[1])); c.fill(); }
    c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(-28, -22); c.lineTo(-28, 22); c.stroke();
    c.restore();
  }
  function ik(sx, sy, hx, hy, l1, l2, dir) {
    const d = Math.min(Math.hypot(hx - sx, hy - sy), l1 + l2 - 1), b = Math.atan2(hy - sy, hx - sx);
    const a = Math.acos(clamp((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d), -1, 1));
    return [sx + Math.cos(b + dir * a) * l1, sy + Math.sin(b + dir * a) * l1];
  }
  function sleeve(c, pts, col, seed) { E.ink(c, pts, 50, { taper: false, wob: 0.1, seed }); E.ink(c, pts, 36, { taper: false, wob: 0.05, seed: seed + 1, color: col }); }
  function eyesDot(c, x, y, sep, r, t, seed, look = [0, 0]) {
    const cl = blinkAt(t, seed);
    for (const sx of [-1, 1]) {
      const ex = x + sx * sep + look[0], ey = y + look[1];
      if (cl) E.ink(c, [[ex - r, ey], [ex + r, ey]], 5, { seed: seed + sx });
      else { c.fillStyle = C.ink; c.beginPath(); c.ellipse(ex, ey, r * 0.8, r, 0, 0, TAU); c.fill(); c.fillStyle = C.white; c.beginPath(); c.arc(ex + r * 0.25, ey - r * 0.35, r * 0.28, 0, TAU); c.fill(); }
    }
  }
  function cupcake(c, x, y, s, t, look = [0, 0]) {
    c.save(); c.translate(x, y); c.scale(s, s);
    sh(c, [[-120, -170], [120, -170], [95, 0], [-95, 0]], C.coral, 4.5, 51, { shade: [{ pts: [[-80, -170], [-60, -170], [-50, 0], [-66, 0]], color: C.coralD }, { pts: [[-12, -170], [10, -170], [8, 0], [-10, 0]], color: C.coralD }, { pts: [[60, -170], [82, -170], [66, 0], [50, 0]], color: C.coralD }] });
    const fr = E.spline([[-140, -165], [-150, -215], [-100, -250], [-115, -300], [-50, -330], [-40, -380], [20, -400], [60, -360], [110, -330], [100, -280], [150, -250], [145, -190], [140, -160]], true, 8);
    sh(c, fr, C.pink, 4.5, 52, { shade: [{ pts: [[40, -420], [170, -420], [170, -150], [70, -150]], color: C.pinkD }] });
    E.ink(c, E.spline([[-110, -225], [-40, -245], [40, -240], [115, -220]], false, 8), 4, { seed: 53 });
    E.ink(c, E.spline([[-60, -305], [0, -322], [70, -305]], false, 8), 4, { seed: 54 });
    sh(c, el(18, -425, 34, 32, 26), C.coral, 4, 55); E.ink(c, E.spline([[22, -455], [32, -490], [55, -505]], false, 8), 4.5, { seed: 56 });
    eyesDot(c, 0, -110, 38, 13, t, 5, look);
    E.ink(c, arc(0, -88, 26, 16, 0.25, Math.PI - 0.25), 4.5, { seed: 57 });
    c.restore();
  }
  function cookie(c, x, y, s) {
    const cx = x, cy = y - 92 * s, r = 92 * s;
    sh(c, el(cx, cy, r, r, 40), C.kraftL, 4, 61, { shade: [{ pts: el(cx + r * 0.35, cy + r * 0.35, r * 0.9, r * 0.9, 30), color: C.kraft }] });
    const R = E.rng(62); for (let i = 0; i < 7; i++) { const a = R() * TAU, d = R() * r * 0.68; sh(c, el(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 11 * s, 9 * s, 12), C.brown, 0, 63 + i, { grain: 0 }); }
  }
  function caramel(c, x, y, s) {
    c.save(); c.translate(x, y); c.scale(s, s);
    sh(c, rr(-75, -175, 150, 175, 30), C.kraft, 4, 71, { shade: [{ pts: [[30, -180], [80, -180], [80, 0], [30, 0]], color: C.kraftD }] });
    c.fillStyle = 'rgba(255,250,236,0.5)'; c.fillRect(-55, -150, 14, 110);
    sh(c, rr(-84, -212, 168, 44, 12), C.plum, 4, 72);
    sh(c, E.spline([[-84, -172], [-40, -170], [-36, -140], [-46, -118], [-56, -140], [-62, -168]], true, 6), C.kraftD, 3, 73);
    c.restore();
  }
  function chocolate(c, x, y, s) {
    c.save(); c.translate(x, y); c.scale(s, s);
    sh(c, rr(-78, -215, 156, 215, 14), C.brown, 4, 81, { shade: [{ pts: [[-60, -200], [-8, -200], [-8, -150], [-60, -150]], color: C.brownL }, { pts: [[8, -200], [60, -200], [60, -150], [8, -150]], color: C.brownL }] });
    sh(c, rr(-86, -118, 172, 118, 10), C.mustard, 4, 82, { shade: [{ pts: [[40, -125], [95, -125], [95, 0], [40, 0]], color: C.mustardD }] });
    sh(c, rr(-86, -78, 172, 30, 4), C.white, 0, 83, { grain: 0.1 });
    c.restore();
  }
  function baker(c, x, y, t) { // y = counter line; body held, only eyes/mouth animate here
    const hx = x, hy = y - 560;
    sh(c, [[x - 130, y - 400], [x + 130, y - 400], [x + 160, y + 20], [x - 160, y + 20]], C.white, 4.5, 91, { shade: [{ pts: [[x + 60, y - 420], [x + 180, y - 420], [x + 180, y + 30], [x + 80, y + 30]], color: C.paperD }] });
    sh(c, [[x - 105, y - 250], [x + 105, y - 250], [x + 125, y + 20], [x - 125, y + 20]], C.coral, 4, 92, { shade: [{ pts: [[x + 40, y - 260], [x + 140, y - 260], [x + 140, y + 30], [x + 55, y + 30]], color: C.coralD }] });
    E.ink(c, [[x - 105, y - 250], [x - 130, y - 380]], 4, { seed: 93 }); E.ink(c, [[x + 105, y - 250], [x + 130, y - 380]], 4, { seed: 94 });
    sh(c, rr(x - 26, y - 440, 52, 60, 12), C.skin, 4, 95);
    const head = E.spline([[hx - 70, hy - 90], [hx + 10, hy - 118], [hx + 80, hy - 70], [hx + 92, hy - 10], [hx + 128, hy + 12], [hx + 92, hy + 34], [hx + 70, hy + 92], [hx, hy + 118], [hx - 78, hy + 80], [hx - 98, hy]], true, 8);
    sh(c, head, C.skin, 4.5, 96, { shade: [{ pts: el(hx - 100, hy + 40, 50, 90, 20), color: C.skinD }] });
    sh(c, rr(hx - 92, hy - 130, 184, 50, 10), C.white, 4.5, 97);
    sh(c, E.spline([[hx - 92, hy - 128], [hx - 120, hy - 200], [hx - 70, hy - 270], [hx, hy - 250], [hx + 70, hy - 285], [hx + 125, hy - 210], [hx + 92, hy - 128]], true, 8), C.white, 4.5, 98, { shade: [{ pts: el(hx + 70, hy - 210, 50, 70, 20), color: C.paperD }] });
    eyesDot(c, hx + 22, hy - 18, 30, 11, t, 8, [6, 4]);
    E.ink(c, arc(hx + 30, hy + 44, 30, 18, 0.2, Math.PI - 0.3), 4.5, { seed: 99 });
    c.fillStyle = C.ink; for (let i = 0; i < 2; i++) { c.beginPath(); c.arc(x, y - 330 + i * 46, 7, 0, TAU); c.fill(); }
  }
  function cell(c, x, y, s, col, colD, mood, t, seed) { // taste cell standing on y
    c.save(); c.translate(x, y); c.scale(s, s);
    const body = E.spline([[0, -340], [100, -275], [150, -130], [132, 0], [-132, 0], [-150, -130], [-100, -275]], true, 8);
    sh(c, body, col, 4.5, seed, { shade: [{ pts: [[40, -360], [170, -360], [170, 10], [70, 10]], color: colD }] });
    E.ink(c, E.spline([[0, -338], [-6, -372], [8, -398]], false, 6), 4, { seed: seed + 1 });
    const cl = blinkAt(t, seed);
    for (const sx of [-1, 1]) {
      const ex = sx * 46, ey = -180;
      sh(c, el(ex, ey, 30, 36, 22), C.white, 3.5, seed + 2 + sx, { grain: 0.05 });
      if (cl || mood === 'shh') E.ink(c, [[ex - 26, ey + 4], [ex + 26, ey + 4]], 5, { seed: seed + 5 });
      else { c.fillStyle = C.ink; c.beginPath(); c.arc(ex + 4, ey + 6, 14, 0, TAU); c.fill(); }
      if (mood === 'grumpy') E.ink(c, [[ex - 30 * sx * -1, ey - 58], [ex + 30 * sx * -1, ey - 40]].map(([a, b]) => [a, b]), 6, { seed: seed + 6 + sx });
    }
    if (mood === 'grumpy') E.ink(c, arc(0, -70, 34, 20, Math.PI + 0.35, TAU - 0.35), 5, { seed: seed + 8 });
    else if (mood === 'shh') E.ink(c, [[-30, -88], [30, -88]], 6, { seed: seed + 8 });
    else if (mood === 'joy') { sh(c, arc(0, -105, 44, 40, 0.05, Math.PI - 0.05).concat([[-44, -105]]), C.coralD, 4, seed + 9); }
    else E.ink(c, arc(0, -110, 34, 22, 0.25, Math.PI - 0.25), 5, { seed: seed + 8 });
    c.restore();
  }
  function megaphone(c, x, y, s, ang, seed = 120) {
    c.save(); c.translate(x, y); c.rotate(ang); c.scale(s, s);
    sh(c, [[0, -20], [120, -62], [120, 62], [0, 20]], C.chrome, 4, seed, { shade: [{ pts: [[0, 6], [130, 24], [130, 70], [0, 30]], color: C.chromeD }] });
    sh(c, el(120, 0, 14, 62, 22), C.chromeD, 4, seed + 1);
    sh(c, rr(-34, -14, 36, 28, 8), C.coral, 3.5, seed + 2);
    c.restore();
  }
  function soundArcs(c, x, y, ang, v, t, seed) {
    if (v <= 0.02) return; const f = Math.floor(t * 12) % 2;
    for (let i = 0; i < 3; i++) {
      const r = (50 + i * 48 + f * 8) * (0.5 + 0.5 * v);
      E.ink(c, E.ellipse(x, y, r, r, 14, ang - 0.6, ang + 0.6), 7 * v + 1, { seed: seed + i, alpha: clamp(v * 1.2) });
    }
  }
  function sugarCube(c, x, y, s, rot, seed) { c.save(); c.translate(x, y); c.rotate(rot); sh(c, rr(-36 * s, -36 * s, 72 * s, 72 * s, 12 * s), C.pink, 4, seed, { shade: [{ pts: [[10 * s, -40 * s], [40 * s, -40 * s], [40 * s, 40 * s], [10 * s, 40 * s]], color: C.pinkD }] }); E.sparkle(c, -12 * s, -12 * s, 16 * s, { fill: C.white }); c.restore(); }
  function saltGrain(c, x, y, s, rot, seed) { c.save(); c.translate(x, y); c.rotate(rot); sh(c, rr(-22 * s, -22 * s, 44 * s, 44 * s, 5 * s), C.white, 3.5, seed, { grain: 0.05, shade: [{ pts: [[6 * s, -24 * s], [24 * s, -24 * s], [24 * s, 24 * s], [6 * s, 24 * s]], color: C.tealL, alpha: 0.7 }] }); c.restore(); }
  function spoon(c, x, y, s, t, slices = 0, hi = 0) {
    c.save(); c.translate(x, y); c.scale(s, s);
    sh(c, E.spline([[150, 60], [420, 330], [450, 300], [190, 20]], true, 4), C.chrome, 4.5, 131, { shade: [{ pts: [[300, 200], [460, 330], [470, 300], [320, 170]], color: C.chromeD }] });
    sh(c, el(0, 0, 240, 175, 56), C.chrome, 5, 132, { shade: [{ pts: el(30, 30, 200, 150, 40), color: C.chromeD, alpha: 0.55 }] });
    if (slices > 0) {
      const n = 16;
      if (hi > 0) { c.save(); c.globalAlpha = hi; const p = [[0, 0]]; for (let i = 0; i <= 8; i++) { const a = -Math.PI / 2 + i / 8 * TAU / n; p.push([Math.cos(a) * 205, Math.sin(a) * 150]); } sh(c, p, C.coral, 3.5, 133); c.restore(); }
      for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + i / n * TAU, u = clamp(slices * n - i); if (u <= 0) continue; E.ink(c, [[0, 0], [Math.cos(a) * 205 * u, Math.sin(a) * 150 * u]], 3, { seed: 140 + i, taper: false }); }
      E.ink(c, el(0, 0, 205, 150, 48), 3, { closed: true, seed: 139, breaks: 0.2 });
    }
    c.restore();
  }
  function watermelon(c, x, y, s) { // flat cut face up at y
    c.save(); c.translate(x, y); c.scale(s, s);
    sh(c, arc(0, 0, 400, 400, 0, Math.PI, 40).concat([[-400, 0]]), C.avocadoD, 5, 151);
    sh(c, arc(0, 0, 368, 368, 0, Math.PI, 40).concat([[-368, 0]]), C.avocadoL, 0, 152, { off: [0, 0] });
    sh(c, arc(0, 0, 348, 348, 0, Math.PI, 40).concat([[-348, 0]]), C.white, 0, 153);
    sh(c, arc(0, 0, 322, 322, 0, Math.PI, 40).concat([[-322, 0]]), C.coral, 4, 154, { shade: [{ pts: arc(40, -10, 300, 300, 0.1, 1.3, 20).concat([[40, -10]]), color: C.coralL, alpha: 0.6 }] });
    const R = E.rng(155); c.fillStyle = C.ink;
    for (let i = 0; i < 11; i++) { const a = 0.25 + R() * (Math.PI - 0.5), d = 90 + R() * 190, px = Math.cos(a) * d, py = Math.sin(a) * d; c.save(); c.translate(px, py); c.rotate(a + Math.PI / 2); c.beginPath(); c.ellipse(0, 0, 9, 16, 0, 0, TAU); c.fill(); c.restore(); }
    E.ink(c, [[-400, 0], [400, 0]], 5, { seed: 156, taper: false, breaks: 0.15 });
    c.restore();
  }
  function stampX(c, x, y, r, k) { if (k <= 0) return; c.save(); scaleAt(c, x, y, k); E.ink(c, [[x - r, y - r], [x + r, y + r]], 22, { color: C.coralD, seed: 161, taper: false }); E.ink(c, [[x + r, y - r], [x - r, y + r]], 22, { color: C.coralD, seed: 162, taper: false }); c.restore(); }
  function check(c, x, y, r, k) { if (k <= 0) return; c.save(); scaleAt(c, x, y, k); E.ink(c, [[x - r, y], [x - r * 0.25, y + r * 0.7], [x + r, y - r * 0.8]], 22, { color: C.tealD, seed: 163, taper: false }); c.restore(); }

  // ---------------- scenes ----------------
  // 0 hook: salt on a cupcake
  function sHook(c, t, t0, t1) {
    ground(c, C.mustardL, C.mustard, 1420, 11);
    c.save(); camPush(c, t, t0, t1, 0.035, 540, 1100);
    decor(c, t, 12, C.white, [80, 1000, 560, 1300]);
    const kb = pop(t, P(0, 'sweeter'), 0.3);
    if (kb > 0) { E.rays(c, 540, 1120, 30, 900 * kb, 'rgba(251,246,234,0.55)', { rot: tw(t) * 0.15 }); E.star(c, 540, 1120, 330 * kb, { n: 14, inner: 0.72, fill: C.white, rot: tw(t) * 0.2, seed: 13 }); }
    const ty = 1420;
    sh(c, el(540, ty + 6, 260, 26, 30), 'rgba(160,120,40,0.45)', 0, 14, { off: [0, 0], grain: 0 });
    const look = t > P(0, 'salt') && t < P(0, 'sweeter') + 0.6 ? [8, -6] : t > P(1, 'why') - 0.1 ? [-8, 0] : [0, 0];
    cupcake(c, 540, ty, 1.35, t, look);
    // shaker swings in (anticipation), pours, swings out
    const a0 = P(0, 'salt') - 0.15, inU = eo(seg(tw(t), a0, a0 + 0.35)), outU = eio(seg(tw(t), P(1, 'youve'), P(1, 'youve') + 0.4));
    if (inU > 0 && outU < 1) {
      const shake = Math.sin(tw(t) * 22) * 0.08 * (t > a0 + 0.35 && t < PE(0) ? 1 : 0);
      const sx = lerp(1250, 840, inU) + outU * 500, sy = lerp(380, 660, inU) - outU * 300, ang = lerp(-0.6, -2.35, inU) + shake;
      const [mx, my] = mouthOf(sx, sy, 1.25, ang);
      grains(c, t, a0 + 0.4, PE(0) + 0.1, mx, my, 1420 - 1.35 * 300, 15, 18, 40);
      shaker(c, sx, sy, 1.25, ang, 21);
    }
    c.restore();
    popText(c, t, P(0, 'salt'), 'SALT', 540, 330, { font: F.slab(170), fill: C.ink, plate: C.coral, seed: 16 });
    popText(c, t, P(0, 'sweeter'), '= SWEETER?', 540, 500, { font: F.slab(104), fill: C.ink, plate: C.white, seed: 17 });
    const kq = pop(t, P(1, 'why'), 0.3);
    if (kq > 0) { c.save(); scaleAt(c, 215, 820, kq); sh(c, el(215, 820, 105, 105, 40), C.coral, 4.5, 18); txt(c, '?', 215, 830, { font: F.slab(150), fill: C.white, plate: C.coralD }); c.restore(); }
    tag(c, t, P(1, 'never'), 'never noticed?', 760, 1560, { px: 50, seed: 19 });
  }
  // 1 bakers
  function sBakers(c, t, t0, t1) {
    ground(c, C.blueL, C.blue, 1300, 21);
    c.save(); camPush(c, t, t0, t1, 0.025, 540, 1000);
    decor(c, t, 22, C.white, [60, 1020, 200, 520]);
    baker(c, 540, 1300, t);
    E.plane(c, E.rect(0, 1300, W0, 620), C.kraft, { grain: 0.35 });
    E.plane(c, E.rect(0, 1282, W0, 40), C.kraftL, { grain: 0.2 });
    E.ink(c, [[-20, 1282], [W0 + 20, 1282]], 4.5, { seed: 23, breaks: 0.2, taper: false }); E.ink(c, [[-20, 1322], [W0 + 20, 1322]], 3.5, { seed: 24, breaks: 0.3, taper: false });
    const it = [[230, P(2, 'cookies'), cookie, 'COOKIES', 1440], [540, P(3, 'caramel'), caramel, 'CARAMEL', 1550], [850, P(3, 'chocolate'), chocolate, 'CHOCOLATE', 1440]];
    for (const [x, tb, fn, lab, ly] of it) {
      const k = pop(t, tb - 0.1, 0.3); if (k <= 0) continue;
      c.save(); scaleAt(c, x, 1300, k); fn(c, x, 1300, 1.05); c.restore();
      tag(c, t, tb, lab, x, ly, { px: 44, seed: 25 + x });
    }
    // right hand carries the shaker from item to item, on twos
    const tq = tw(t), targets = [[it[0][1], 230], [it[1][1], 540], [it[2][1], 850]];
    let hx = 760, hy = 1040;
    for (let i = 0; i < targets.length; i++) { const [tb, x] = targets[i], u = eio(seg(tq, tb - 0.35, tb - 0.05)); if (u > 0) { hx = lerp(hx, x + 120, u); hy = lerp(hy, 1000, u); } }
    hy += Math.sin(tq * 26) * 10 * (tq > it[0][1] - 0.05 ? 1 : 0);
    const shs = [665, 905], el1 = ik(shs[0], shs[1], hx, hy, 230, 230, -1);
    const ang = -2.25 + Math.sin(tq * 26) * 0.1;
    const [mx, my] = mouthOf(hx - 10, hy - 30, 0.95, ang);
    grains(c, t, it[0][1] - 0.05, PE(3), mx, my, 1100, 26, 14, 30);
    sleeve(c, [shs, el1, [hx, hy]], C.white, 27);
    shaker(c, hx - 10, hy - 30, 0.95, ang, 28);
    glove(c, hx, hy, 1.0, Math.atan2(hy - el1[1], hx - el1[0]), 'hold', 29);
    const lsh = [415, 905], lh = [430, 1272], el2 = ik(lsh[0], lsh[1], lh[0], lh[1], 230, 230, -1);
    sleeve(c, [lsh, el2, lh], C.white, 30); glove(c, lh[0], lh[1], 1.0, Math.atan2(lh[1] - el2[1], lh[0] - el2[0]), 'open', 31);
    c.restore();
    const kk = pop(t, P(2, 'bakers') - 0.05, 0.3);
    if (kk > 0) { c.save(); scaleAt(c, 540, 300, kk); E.text(c, 'Bakers know!', 540, 300, { font: F.script(118), fill: C.coral, plate: C.ink, align: 'center', base: 'middle', seed: 32 }); c.restore(); }
  }
  // 2 tongue
  function sTongue(c, t, t0, t1) {
    ground(c, C.avocadoL, C.avocado, 1500, 41);
    c.save(); camPush(c, t, t0, t1 + 0.4, 0.06, 540, 1050);
    decor(c, t, 42, C.white, [60, 1020, 520, 1450]);
    const k = pop(t, t0, 0.3);
    c.save(); scaleAt(c, 540, 1050, k);
    const tg = E.spline([[-250, -330], [0, -360], [250, -330], [300, -40], [250, 260], [0, 380], [-250, 260], [-300, -40]], true, 10).map(([x, y]) => [540 + x, 1050 + y]);
    sh(c, tg, C.pink, 5, 43, { shade: [{ pts: el(760, 1150, 140, 300, 30), color: C.pinkD }] });
    E.ink(c, E.spline([[540, 760], [535, 950], [540, 1150], [548, 1300]], false, 8), 5, { seed: 44 });
    const R = E.rng(45);
    for (let i = 0; i < 26; i++) { const a = R() * TAU, d = Math.sqrt(R()), px = 540 + Math.cos(a) * d * 230, py = 1030 + Math.sin(a) * d * 280; if (Math.abs(px - 540) < 26) continue; sh(c, el(px, py, 16, 13, 14), C.pinkD, 2.5, 46 + i, { grain: 0.1, breaks: 0.4 }); }
    c.restore();
    // call-out: a taste bud up close
    const kc = pop(t, P(4, 'tongue') - 0.1, 0.3);
    if (kc > 0) {
      E.ink(c, E.subpath([[640, 930], [760, 760]], kc), 4, { seed: 47 });
      c.save(); scaleAt(c, 800, 660, kc);
      sh(c, el(800, 660, 160, 160, 48), C.white, 5, 48);
      c.save(); E.path(c, el(800, 660, 156, 156, 48)); c.clip();
      cell(c, 735, 790, 0.42, C.plum, C.brown, 'grumpy', t, 49); cell(c, 865, 790, 0.42, C.mustard, C.mustardD, 'happy', t, 50);
      c.restore(); c.restore();
    }
    c.restore();
    popText(c, t, PS(4) + 0.05, "WHAT'S SALT", 540, 300, { font: F.slab(104), fill: C.ink, plate: C.white, seed: 51 });
    popText(c, t, P(4, 'doing'), 'DOING?', 540, 420, { font: F.slab(104), fill: C.ink, plate: C.coral, seed: 52 });
    medallion(c, 540, 1050, 130, 1, pop(t, PS(5), 0.22));
  }
  // 3 trick one: mute the bitter
  function sTrick1(c, t, t0, t1) {
    ground(c, C.kraftL, C.kraft, 1400, 61);
    decor(c, t, 62, C.white, [60, 1020, 470, 900]);
    header(c, t, t0, 1, 'MUTE THE BITTER');
    const tq = tw(t), tDown = P(7, 'down'), tMute = P(8, 'muting'), tSpot = P(9, 'spotlight');
    const vol = 1 - 0.8 * eio(seg(tq, P(7, 'turns'), tDown + 0.1)) - 0.2 * seg(tq, tMute, tMute + 0.3);
    const kb = pop(t, t0 + 0.25, 0.3), ks = pop(t, t0 + 0.4, 0.3);
    const grow = 1 + 0.18 * back(seg(t, tSpot - 0.1, tSpot + 0.25));
    const dim = seg(t, P(9, 'bitter'), P(9, 'quiet'));
    if (kb > 0) {
      c.save(); scaleAt(c, 300, 1400, kb);
      const mood = t > tDown ? 'shh' : 'grumpy';
      cell(c, 300, 1400, 1.0, C.plum, C.brown, mood, t, 63);
      const mAng = -0.35 + 0.9 * eio(seg(tq, tMute, tMute + 0.35));
      megaphone(c, 360, 1300, 1.0, mAng, 64);
      const mx = 360 + Math.cos(mAng) * 135, my = 1300 + Math.sin(mAng) * 135;
      if (t > P(6, 'bitterness') - 0.1) soundArcs(c, mx, my, mAng, vol, t, 65);
      c.restore();
    }
    if (ks > 0) {
      c.save(); scaleAt(c, 780, 1400, ks * grow);
      if (t > tSpot - 0.1) { const kr = back(seg(t, tSpot - 0.1, tSpot + 0.3)); E.star(c, 780, 1220, 250 * kr, { n: 12, inner: 0.7, fill: C.white, rot: tq * 0.3, seed: 66 }); }
      cell(c, 780, 1400, 0.82, C.mustard, C.mustardD, t > tSpot - 0.1 ? 'joy' : 'happy', t, 67);
      c.restore();
    }
    tag(c, t, P(6, 'bitterness'), 'BITTER', 300, 1540, { px: 48, seed: 68, starC: C.plum });
    tag(c, t, P(6, 'bitterness') + 0.15, 'SWEET', 780, 1540, { px: 48, seed: 69, starC: C.mustardD });
    // sodium: the shaker pours on the bitter cell
    const kS = eo(seg(tq, P(7, 'sodium') - 0.3, P(7, 'sodium'))), kO = eio(seg(tq, P(8, 'like'), P(8, 'like') + 0.4));
    if (kS > 0 && kO < 1) {
      const sx = lerp(-200, 220, kS) - kO * 500, sy = 690, ang = lerp(-0.3, 2.2, kS) + Math.sin(tq * 24) * 0.08;
      const [mx, my] = mouthOf(sx, sy, 0.95, ang);
      grains(c, t, P(7, 'sodium'), tDown + 0.2, mx, my, 1400 - 330, 70, 16, 34);
      shaker(c, sx, sy, 0.95, ang, 71);
    }
    tag(c, t, P(7, 'sodium'), 'SODIUM', 250, 520, { px: 48, seed: 72, starC: C.teal, t1: PS(9) });
    // call-out: the bitter volume knob
    const kc = pop(t, P(7, 'turns') - 0.15, 0.3) * (1 - seg(t, PS(9) - 0.1, PS(9) + 0.15));
    if (kc > 0) {
      E.ink(c, E.subpath([[450, 1180], [680, 860]], kc), 4, { seed: 73 });
      c.save(); scaleAt(c, 770, 700, kc);
      sh(c, el(770, 700, 175, 175, 48), C.white, 5, 74);
      for (let i = 0; i <= 10; i++) { const a = Math.PI * 0.75 + i / 10 * Math.PI * 1.5; E.ink(c, [[770 + Math.cos(a) * 112, 680 + Math.sin(a) * 112], [770 + Math.cos(a) * 134, 680 + Math.sin(a) * 134]], i % 5 ? 3 : 6, { seed: 75 + i, taper: false }); }
      sh(c, el(770, 680, 92, 92, 40), C.plum, 4.5, 86, { shade: [{ pts: el(800, 710, 80, 80, 30), color: C.brown, alpha: 0.6 }] });
      const pa = Math.PI * 0.75 + vol * Math.PI * 1.5;
      E.ink(c, [[770, 680], [770 + Math.cos(pa) * 78, 680 + Math.sin(pa) * 78]], 12, { color: C.white, seed: 87, taper: false });
      txt(c, 'BITTER', 770, 822, { font: F.sans(44), fill: C.ink });
      c.restore();
    }
    // spotlight on sweet
    if (dim > 0) {
      c.save(); c.globalAlpha = 0.28 * dim; c.fillStyle = C.ink; c.fillRect(0, 440, W0, H0 - 440); c.restore();
      const ks2 = eo(seg(t, tSpot - 0.25, tSpot + 0.1));
      if (ks2 > 0) { c.save(); c.globalAlpha = 0.42 * ks2; c.fillStyle = C.white; c.beginPath(); c.moveTo(700, 450); c.lineTo(860, 450); c.lineTo(1060, 1440); c.lineTo(500, 1440); c.closePath(); c.fill(); c.restore(); E.sparkle(c, 640, 1000, 34 * ks2, { fill: C.white, rot: tq }); E.sparkle(c, 930, 960, 26 * ks2, { fill: C.white, rot: -tq }); }
    }
    medallion(c, 540, 860, 130, 2, pop(t, PS(10), 0.22));
  }
  // 4 trick two: the sugar door
  function sTrick2(c, t, t0, t1) {
    ground(c, C.blueL, C.blue, 1700, 81);
    decor(c, t, 82, C.white, [60, 1020, 470, 820]);
    const tq = tw(t);
    const up = eo(seg(tq, P(11, 'sweet') - 0.2, P(11, 'sweet') + 0.3)), my0 = lerp(1900, 1000, up);
    // inside of the sweet cell (below its skin)
    const mem = []; for (let i = 0; i <= 24; i++) { const x = -40 + i * 48; mem.push([x, my0 + Math.sin(i * 0.9 + tq * 2) * 10]); }
    E.plane(c, mem.concat([[W0 + 40, H0 + 40], [-40, H0 + 40]]), C.mustard, { grain: 0.3 });
    const band = mem.concat(mem.slice().reverse().map(([x, y]) => [x, y + 64]));
    sh(c, band, C.mustardD, 0, 83, { grain: 0.3 });
    E.ink(c, mem, 5, { seed: 84, breaks: 0.15, taper: false }); E.ink(c, mem.map(([x, y]) => [x, y + 64]), 4, { seed: 85, breaks: 0.2, taper: false });
    // face of the sweet cell
    if (up > 0.5) {
      const fy = my0 + 330;
      for (const sx of [-1, 1]) { const ex = 400 + sx * 80; sh(c, el(ex, fy, 42, 50, 24), C.white, 4, 86 + sx); if (blinkAt(t, 86)) E.ink(c, [[ex - 36, fy + 4], [ex + 36, fy + 4]], 6, { seed: 88 }); else { c.fillStyle = C.ink; c.beginPath(); c.arc(ex + 6, fy - 12, 19, 0, TAU); c.fill(); } }
      const happy = seg(t, P(14, 'catch'), P(14, 'catch') + 0.3);
      if (happy > 0) sh(c, arc(400, fy + 100, 70, 60 * (0.5 + happy * 0.5), 0.05, Math.PI - 0.05).concat([[330, fy + 100]]), C.coralD, 4, 89);
      else E.ink(c, arc(400, fy + 90, 50, 30, 0.25, Math.PI - 0.25), 6, { seed: 90 });
    }
    // the door
    const kd = pop(t, P(11, 'door') - 0.05, 0.3);
    const pairs = [[P(13, 'sugar') - 0.2, 1.2]];
    for (let i = 0; i < 5; i++) pairs.push([P(14, 'salt') + i * 0.6, 0.85]);
    const open = Math.max(...pairs.map(([s, d]) => seg(t, s + d * 0.55, s + d * 0.7) * (1 - seg(t, s + d * 0.95, s + d * 1.1))));
    if (kd > 0) {
      c.save(); scaleAt(c, 540, my0 + 32, kd);
      if (t < P(11, 'door') + 0.4) E.star(c, 540, my0 + 32, 190 * back(seg(t, P(11, 'door'), P(11, 'door') + 0.3)) * (1 - seg(t, P(11, 'door') + 0.3, P(11, 'door') + 0.5)), { n: 10, inner: 0.6, fill: C.white, seed: 91 });
      sh(c, rr(430, my0 - 14, 220, 92, 14), C.avocado, 4.5, 92);
      sh(c, rr(452, my0 + 4, 176, 56, 8), C.mustard, 0, 93, { off: [0, 0], grain: 0.2 });
      const fa = open * 1.35;
      for (const sx of [-1, 1]) {
        c.save(); c.translate(540 + sx * 88, my0 + 32); c.rotate(sx * fa);
        sh(c, rr(sx < 0 ? 0 : -88, -12, 88, 24, 6), C.avocadoL, 4, 94 + sx); c.restore();
      }
      c.restore();
    }
    // sugar + sodium pairs go in together
    pairs.forEach(([s0, d], i) => {
      const u = seg(t, s0, s0 + d); if (u <= 0 || u >= 1) return;
      const meet = eio(seg(u, 0, 0.55)), down = eio(seg(u, 0.55, 1));
      const yA = lerp(560, my0 - 70, meet) + down * 260, fade = 1 - seg(u, 0.85, 1);
      const sx0 = i === 0 ? -80 : 140 + (i % 2) * 60, nx0 = i === 0 ? 1160 : 940 - (i % 2) * 60;
      c.save(); c.globalAlpha = fade;
      sugarCube(c, lerp(sx0, 500, meet), yA, i ? 0.9 : 1.2, u * 3 + i, 95 + i);
      saltGrain(c, lerp(nx0, 590, meet), yA + 10, i ? 0.9 : 1.2, -u * 4 - i, 105 + i);
      c.restore();
    });
    tag(c, t, P(13, 'sugar'), 'SUGAR', 230, 760, { px: 48, seed: 111, starC: C.pinkD, t1: PS(14) });
    tag(c, t, P(13, 'sodium'), 'SODIUM', 850, 760, { px: 48, seed: 112, starC: C.teal, t1: PS(14) });
    // sweetness meter
    const km = pop(t, P(14, 'help') - 0.1, 0.3);
    if (km > 0) {
      c.save(); scaleAt(c, 870, 1350, km);
      sh(c, rr(810, 1150, 120, 380, 28), C.white, 4.5, 113);
      const lv = 0.2 + 0.72 * eio(seg(t, P(14, 'catch') - 0.1, PE(14)));
      sh(c, rr(826, 1514 - 348 * lv, 88, 348 * lv, 20), C.coral, 0, 114, { grain: 0.2 });
      txt(c, 'SWEET', 870, 1110, { font: F.sans(46), fill: C.ink });
      c.restore();
    }
    header(c, t, t0, 2, 'THE SUGAR DOOR');
    tag(c, t, P(11, 'scientists'), 'SCIENTISTS FOUND', 540, 560, { px: 46, seed: 115, t1: PS(12) - 0.1 });
    popText(c, t, P(12, 's'), 'SGLT1', 540, 580, { font: F.slab(132), fill: C.ink, plate: C.coral, seed: 116 });
  }
  // 5 the pinch
  function sPinch(c, t, t0, t1) {
    ground(c, C.pink, C.pinkD, 1700, 121);
    decor(c, t, 122, C.white, [60, 1020, 200, 700]);
    const tq = tw(t);
    c.save(); camPush(c, t, t0, PS(18), 0.03, 540, 1000);
    const ksp = pop(t, PS(16) - 0.1, 0.3);
    const sl = seg(t, P(16, 'sixteenth') - 0.1, P(16, 'sixteenth') + 0.35), hi = seg(t, P(16, 'sixteenth') + 0.3, P(16, 'sixteenth') + 0.5);
    if (ksp > 0) { c.save(); scaleAt(c, 470, 1000, ksp); spoon(c, 470, 1000, 1.0, t, sl, hi); c.restore(); }
    // the pinching hand
    const hIn = eo(seg(tq, t0, t0 + 0.4)), hOut = eio(seg(tq, P(16, 'sixteenth') - 0.3, P(16, 'sixteenth') + 0.1));
    if (hIn > 0 && hOut < 1) {
      const hx = 560 + (1 - hIn) * 600 + hOut * 700, hy = 640 - hOut * 300 + Math.sin(tq * 20) * 5;
      grains(c, t, P(15, 'barely'), P(16, 'teaspoon'), hx + 85, hy - 20, 1000, 123, 7, 18);
      sleeve(c, [[hx + 600, hy - 300], [hx + 260, hy - 120], [hx - 20, hy]], C.coral, 124);
      glove(c, hx, hy, 1.5, 0.35, 'pinch', 125);
    }
    c.restore();
    popText(c, t, P(15, 'barely') - 0.1, 'just a pinch', 540, 310, { font: F.script(112), fill: C.coral, plate: C.ink, seed: 126 });
    popText(c, t, P(16, 'sixteenth'), '1/16 tsp', 540, 1340, { font: F.slab(140), fill: C.ink, plate: C.white, seed: 127 });
    popText(c, t, P(17, 'third'), '≈ 0.3 grams', 540, 1530, { font: F.slab(96), fill: C.ink, plate: C.mustard, seed: 128 });
    // too much: a do / don't split in two colour blocks
    const ws = eio(seg(tq, PS(18) - 0.1, PS(18) + 0.3));
    if (ws > 0) {
      const top = H0 - ws * H0;
      E.plane(c, E.rect(0, top, 540, H0), C.avocadoL, { grain: 0.25 }); E.plane(c, E.rect(540, top, 540, H0), C.coralL, { grain: 0.25 });
      E.ink(c, [[540, top], [540, H0]], 6, { seed: 129, taper: false });
      E.ink(c, [[-10, top], [W0 + 10, top]], 5, { seed: 130, taper: false, breaks: 0.2 });
      if (ws >= 1) {
        txt(c, 'A PINCH', 270, 430, { font: F.slab(78), fill: C.ink, plate: C.white });
        txt(c, 'TOO MUCH', 810, 430, { font: F.slab(78), fill: C.ink, plate: C.white });
        sh(c, el(270, 1180, 220, 50, 30), C.chrome, 4.5, 131); sh(c, arc(270, 1170, 50, 34, Math.PI, TAU).concat([[220, 1170]]), C.white, 3.5, 132);
        const hk = back(seg(t, P(18, 'much') - 0.1, P(18, 'much') + 0.3));
        sh(c, el(810, 1180, 220, 50, 30), C.chrome, 4.5, 133);
        if (hk > 0) sh(c, [[810 - 200 * hk, 1180], [810 - 60 * hk, 1180 - 330 * hk], [810, 1180 - 380 * hk], [810 + 70 * hk, 1180 - 320 * hk], [810 + 200 * hk, 1180]], C.white, 4.5, 134);
        check(c, 270, 870, 90, pop(t, P(18, 'add') + 0.1, 0.25));
        stampX(c, 810, 820, 90, pop(t, P(18, 'salty'), 0.25));
        tag(c, t, P(18, 'add') + 0.15, 'SWEETER', 270, 1420, { px: 48, seed: 135, starC: C.tealD });
        tag(c, t, P(18, 'salty'), 'SALTY!', 810, 1420, { px: 48, seed: 136, starC: C.coralD });
      }
    }
  }
  // 6 watermelon: the loop question
  function sMelon(c, t, t0, t1) {
    ground(c, C.mustardL, C.mustard, 1330, 141);
    decor(c, t, 142, C.white, [60, 1020, 460, 820]);
    const tq = tw(t);
    c.save(); camPush(c, t, t0, PE(20), 0.03, 540, 1000);
    sh(c, el(540, 1330, 380, 30, 30), 'rgba(160,120,40,0.45)', 0, 143, { off: [0, 0], grain: 0 });
    watermelon(c, 540, 930, 1.0);
    const kS = eo(seg(tq, P(19, 'salt') - 0.3, P(19, 'salt'))), kO = eio(seg(tq, PS(20) + 0.2, PS(20) + 0.6));
    if (kS > 0 && kO < 1) {
      const sx = lerp(1250, 860, kS) + kO * 500, sy = 640, ang = lerp(-0.4, -2.3, kS) + Math.sin(tq * 24) * 0.08;
      const [mx, my] = mouthOf(sx, sy, 1.0, ang);
      grains(c, t, P(19, 'salt'), PS(20) + 0.2, mx, my, 925, 144, 18, 50);
      shaker(c, sx, sy, 1.0, ang, 145);
    }
    c.restore();
    if (t < PE(20) + 0.3) popText(c, t, PS(19) + 0.05, 'the watermelon test', 540, 320, { font: F.script(100), fill: C.coral, plate: C.ink, seed: 146 });
    const kw = pop(t, P(20, 'sweeter'), 0.3);
    if (kw > 0) { E.star(c, 540, 1590, 170 * kw, { n: 14, inner: 0.72, fill: C.white, rot: tq * 0.3, seed: 148 }); }
    popText(c, t, P(20, 'saltier'), 'SALTIER?', 540, 1440, { font: F.slab(92), fill: C.ink, plate: C.white, seed: 147 });
    popText(c, t, P(20, 'sweeter'), 'SWEETER?', 540, 1590, { font: F.slab(92), fill: C.ink, plate: C.coral, seed: 149 });
  }

  // ---------------- timeline & transitions ----------------
  const SC = [
    { t0: 0, fn: sHook },
    { t0: PS(2) - 0.12, fn: sBakers, tr: 'wipeL', d: 0.35 },
    { t0: PS(4) - 0.02, fn: sTongue, tr: 'cut' },
    { t0: P(5, 'one'), fn: sTrick1, tr: 'iris', d: 0.45, cx: 540, cy: 1050 },
    { t0: P(10, 'two'), fn: sTrick2, tr: 'iris', d: 0.45, cx: 540, cy: 860 },
    { t0: PS(15) - 0.12, fn: sPinch, tr: 'wipeU', d: 0.35 },
    { t0: PS(19) - 0.12, fn: sMelon, tr: 'iris', d: 0.45, cx: 810, cy: 820 },
  ];
  const sceneAt = (t) => { let k = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].t0) k = i; return k; };
  const lay = (k) => cache('L' + k, () => H.layer(W0, H0));
  function reset(c) { c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; c.filter = 'none'; c.clearRect(0, 0, W0, H0); }
  function drawScene(c, k, t) { reset(c); const s = SC[k], t1 = k + 1 < SC.length ? SC[k + 1].t0 : DURATION; s.fn(c, Math.max(t, s.t0 + 0.01), s.t0, t1); }
  function frame(ctx, t) {
    E.setClock(t);
    const k = sceneAt(t), s = SC[k], A = lay('A');
    drawScene(A.getContext('2d'), k, t);
    if (k > 0 && s.tr !== 'cut' && t < s.t0 + s.d) {
      const B = lay('B'); drawScene(B.getContext('2d'), k - 1, t);
      ctx.drawImage(B, 0, 0);
      const u = eio(seg(t, s.t0, s.t0 + s.d));
      ctx.save(); ctx.beginPath();
      if (s.tr === 'iris') { const r = 120 + u * 2300; ctx.arc(s.cx, s.cy, r, 0, TAU); }
      else if (s.tr === 'wipeL') ctx.rect(W0 - u * W0, 0, u * W0 + 1, H0);
      else ctx.rect(0, H0 - u * H0, W0, u * H0 + 1);
      ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
      if (s.tr === 'iris') E.ink(ctx, el(s.cx, s.cy, 120 + u * 2300, 120 + u * 2300, 64), 8, { closed: true, seed: 7 });
      else if (s.tr === 'wipeL') E.ink(ctx, [[W0 - u * W0, -10], [W0 - u * W0, H0 + 10]], 8, { seed: 8, taper: false });
      else E.ink(ctx, [[-10, H0 - u * H0], [W0 + 10, H0 - u * H0]], 8, { seed: 9, taper: false });
    } else ctx.drawImage(A, 0, 0);
    // closing iris-out onto the slice (stops at a held circle)
    const io = eio(seg(t, PE(20) + 0.3, DURATION - 0.15));
    if (io > 0) {
      const r = lerp(1500, 780, io);
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W0, H0); ctx.arc(540, 1080, r, 0, TAU, true); ctx.fillStyle = C.ink; ctx.fill('evenodd'); ctx.restore();
    }
    E.paperFinish(ctx, W0, H0, 1);
  }
  function explainer(ctx, Wd, Hd, t) { ctx.save(); ctx.scale(Wd / W0, Hd / H0); frame(ctx, t); ctx.restore(); }

  // ---------------- sound: cool-jazz combo + foley by material ----------------
  function scoreSound(k) {
    const BT = 60 / 132, D = DURATION;
    const stops = [[P(7, 'down') - 0.5, P(7, 'down')], [P(11, 'door') - 0.45, P(11, 'door')], [PE(20) + 0.2, D]];
    const muted = (x) => stops.some(([a, b]) => x >= a && x < b);
    const prog = [['G2', 'Bb2', 'D3', 'F2'], ['C3', 'E3', 'G2', 'Bb2'], ['F2', 'A2', 'C3', 'E3'], ['D3', 'C3', 'A2', 'F2']];
    const chords = [['Bb3', 'D4', 'F4', 'A4'], ['Bb3', 'E4', 'G4', 'D5'], ['A3', 'C4', 'E4', 'G4'], ['A3', 'C4', 'F4', 'A4']];
    for (let b = 0, x = 0; x < D - 0.2; b++, x = b * BT) {
      if (muted(x)) continue;
      const bar = Math.floor(b / 4) % 4, n = prog[bar][b % 4];
      k.tone(x, { f: n, type: 'triangle', dur: 0.32, gain: 0.075, minor: true, filter: 'lowpass', f2: 900 });
      const sw = b % 2 ? BT * 0.66 : 0;
      k.noise(x, { dur: BT * 0.9, color: 'pink', filter: 'highpass', f: 5200, gain: 0.012, a: BT * 0.6, minor: true });
      if (b % 2 === 1) k.noise(x, { dur: 0.04, filter: 'bandpass', f: 2300, q: 3, gain: 0.07, minor: true });
      if (b % 4 === 0) chords[bar].forEach((f, j) => k.tone(x + j * 0.012, { f, type: 'sine', dur: 1.4, gain: 0.018, verb: 0.35, minor: true }));
      if (b % 8 === 6) k.tone(x + sw, { f: chords[bar][3], type: 'sine', dur: 0.5, gain: 0.02, verb: 0.3, minor: true });
    }
    k.noise(0, { dur: D, color: 'brown', filter: 'lowpass', f: 400, gain: 0.01, minor: true, a: 0.4, hold: D - 0.8 });
    const shake = (a, b, g = 1) => { for (let x = a; x < b; x += 1 / 12) k.noise(x, { dur: 0.05, filter: 'bandpass', f: 4200, q: 1.5, gain: 0.07 * g, minor: true }); };
    const slide = (t, f0, f1, d = 0.4, g = 1) => k.tone(t, { f: [[0, f0], [d, f1]], type: 'sine', dur: d + 0.05, gain: 0.07 * g });
    const vib = (t, notes, g = 1) => notes.forEach((f, j) => k.tone(t + j * 0.05, { f, type: 'sine', dur: 1.5, gain: 0.04 * g, verb: 0.4 }));
    // transitions
    k.play('paper', SC[1].t0, { dur: 0.35, gain: 0.5 });
    k.play('tock', SC[2].t0, { f: 700, gain: 0.5 });
    k.play('stamp', PS(5), { gain: 0.6 }); k.play('swish', SC[3].t0, { gain: 0.5 }); vib(SC[3].t0 + 0.1, ['F4', 'A4', 'C5']);
    k.play('stamp', PS(10), { gain: 0.6 }); k.play('swish', SC[4].t0, { gain: 0.5 }); vib(SC[4].t0 + 0.1, ['G4', 'Bb4', 'D5']);
    k.play('paper', SC[5].t0, { dur: 0.35, gain: 0.5 }); k.play('swish', SC[6].t0, { gain: 0.5 });
    // hook
    k.play('whoosh', P(0, 'salt') - 0.15, { dur: 0.35, gain: 0.4 }); k.play('stamp', P(0, 'salt'), { gain: 0.45 });
    shake(P(0, 'salt') + 0.25, PE(0), 1);
    k.play('sparkle', P(0, 'sweeter'), { n: 7, gain: 0.5 }); vib(P(0, 'sweeter'), ['C5', 'E5', 'G5', 'B5'], 0.8);
    k.play('pop', P(1, 'why'), { f: 520, gain: 0.5 }); slide(P(1, 'why') + 0.05, 500, 900, 0.25, 0.7); k.play('pop', P(1, 'never'), { f: 700, gain: 0.3 });
    // bakers
    k.play('pop', P(2, 'bakers'), { f: 600, gain: 0.35 });
    [P(2, 'cookies'), P(3, 'caramel'), P(3, 'chocolate')].forEach((x, i) => { k.play('tock', x - 0.05, { f: 500 + i * 120, gain: 0.45 }); k.play('pop', x, { f: 640 + i * 90, gain: 0.3 }); shake(x - 0.05, x + 0.35, 0.8); });
    // tongue
    k.play('pop', SC[2].t0 + 0.05, { f: 380, gain: 0.4 }); k.play('blip', P(4, 'tongue'), { f: 'E5', gain: 0.3, type: 'sine' });
    // trick 1
    k.play('pop', SC[3].t0 + 0.25, { f: 300, gain: 0.35 }); k.play('pop', SC[3].t0 + 0.4, { f: 600, gain: 0.35 });
    k.tone(P(6, 'bitterness'), { f: 'C3', type: 'sawtooth', dur: 0.5, gain: 0.05, filter: 'lowpass', f2: 700 }); k.tone(P(6, 'bitterness') + 0.02, { f: 'F#3', type: 'sawtooth', dur: 0.5, gain: 0.04, filter: 'lowpass', f2: 700 });
    k.play('whoosh', P(7, 'sodium') - 0.3, { dur: 0.3, gain: 0.3 }); shake(P(7, 'sodium'), P(7, 'down') - 0.5, 1);
    for (let x = P(7, 'turns'); x < P(7, 'down'); x += 0.09) k.play('click', x, { f: 1500, gain: 0.25, minor: true });
    k.play('click', P(7, 'down'), { f: 900, gain: 0.7 }); slide(P(7, 'down') + 0.02, 700, 200, 0.35, 0.8);
    k.play('tock', P(8, 'muting'), { f: 400, gain: 0.4 });
    slide(P(9, 'spotlight') - 0.35, 300, 1200, 0.35); k.play('ding', P(9, 'spotlight'), { f: 'G5', gain: 0.3 }); k.play('sparkle', P(9, 'spotlight') + 0.05, { n: 6, gain: 0.4 });
    // trick 2
    k.play('pop', P(11, 'scientists'), { f: 500, gain: 0.3 }); k.play('roller', P(11, 'sweet') - 0.2, { dur: 0.45, gain: 0.35 });
    k.play('click', P(11, 'door'), { f: 1300, gain: 0.6 }); k.play('tock', P(11, 'door') + 0.06, { f: 600, gain: 0.5 }); k.play('sparkle', P(11, 'door') + 0.05, { n: 4, gain: 0.3 });
    k.play('stamp', P(12, 's'), { gain: 0.45 });
    k.play('blip', P(13, 'sugar'), { f: 'E5', type: 'sine', gain: 0.35 }); k.play('blip', P(13, 'sodium'), { f: 'B5', type: 'sine', gain: 0.35 });
    const dOpen = (s, d) => { k.play('tock', s + d * 0.55, { f: 520, gain: 0.35 }); slide(s + d * 0.6, 900, 380, 0.3, 0.5); };
    dOpen(P(13, 'sugar') - 0.2, 1.2); for (let i = 0; i < 5; i++) dOpen(P(14, 'salt') + i * 0.6, 0.85);
    k.play('riser', P(14, 'catch') - 0.1, { dur: PE(14) - P(14, 'catch') + 0.1, gain: 0.3 }); k.play('success', PE(14) - 0.05, { gain: 0.25 });
    // pinch
    k.play('whoosh', SC[5].t0, { dur: 0.4, gain: 0.3 }); for (let x = P(15, 'barely'); x < P(16, 'teaspoon'); x += 0.14) k.play('tick', x, { f: 5200, gain: 0.18, minor: true });
    k.play('ding', P(16, 'sixteenth') + 0.3, { f: 'C6', gain: 0.25 }); for (let i = 0; i < 16; i++) k.play('tick', P(16, 'sixteenth') - 0.1 + i * 0.028, { f: 3000 + i * 120, gain: 0.12, minor: true });
    k.play('stamp', P(17, 'third'), { gain: 0.4 });
    k.play('paper', PS(18) - 0.1, { dur: 0.35, gain: 0.45 }); k.play('pop', P(18, 'add') + 0.1, { f: 700, gain: 0.35 });
    k.noise(P(18, 'much') - 0.1, { dur: 0.45, color: 'pink', filter: 'bandpass', f: 2500, q: 0.8, gain: 0.2 }); k.play('error', P(18, 'salty'), { gain: 0.3 }); k.play('stamp', P(18, 'salty'), { gain: 0.5 });
    // watermelon
    k.play('thud', SC[6].t0 + 0.1, { gain: 0.25 }); shake(P(19, 'salt'), PS(20) + 0.2, 1);
    k.play('pop', P(20, 'saltier'), { f: 420, gain: 0.4 }); k.play('pop', P(20, 'sweeter'), { f: 720, gain: 0.4 }); k.play('sparkle', P(20, 'sweeter') + 0.05, { n: 6, gain: 0.4 });
    vib(PE(20) + 0.25, ['F4', 'A4', 'C5', 'E5'], 1); k.play('swish', PE(20) + 0.3, { gain: 0.3 });
  }
  function thumbnail(ctx, Wd, Hd) { ctx.save(); ctx.scale(Wd / W0, Hd / H0); frame(ctx, 2.6); ctx.restore(); }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
