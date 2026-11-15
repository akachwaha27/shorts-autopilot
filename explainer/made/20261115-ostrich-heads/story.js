// ================= 1930s Rubber Hose Cartoon, vertical 1080x1920: "Why don't ostriches really bury their heads in sand?" =================
// Style: Lemo-Opuscar "1930s Rubber Hose Cartoon" (STYLE.md grammar; own drawing code, no demo assets). Unattended run: no storyboard step.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":2.65,"text":"Ostriches never bury their heads in sand,","words":[["ostriches",0.25],["never",0.89],["bury",1.24],["their",1.52],["heads",1.87],["in",2.23],["sand",2.37]]},{"s":2.8,"e":4.66,"text":"but you've seen it happen. Why?","words":[["but",2.8],["youve",3.04],["seen",3.45],["it",3.77],["happen",3.93],["why",4.42]]},{"s":5.12,"e":7.66,"text":"Blame a Roman writer, Pliny the Elder,","words":[["blame",5.12],["a",5.54],["roman",5.63],["writer",6.05],["pliny",6.56],["the",6.98],["elder",7.24]]},{"s":8.0,"e":9.63,"text":"nearly two thousand years ago.","words":[["nearly",8.0],["two",8.39],["thousand",8.59],["years",9.11],["ago",9.43]]},{"s":10.0,"e":12.81,"text":"He wrote that ostriches hide their heads in bushes","words":[["he",10.0],["wrote",10.13],["that",10.46],["ostriches",10.73],["hide",11.33],["their",11.6],["heads",11.94],["in",12.27],["bushes",12.4]]},{"s":13.2,"e":14.79,"text":"and think nobody can see them.","words":[["and",13.2],["think",13.39],["nobody",13.73],["can",14.12],["see",14.32],["them",14.52]]},{"s":15.16,"e":16.81,"text":"Here's what's really going on.","words":[["heres",15.16],["whats",15.52],["really",15.88],["going",16.31],["on",16.67]]},{"s":17.26,"e":19.61,"text":"Ostriches dig a shallow hole in the ground","words":[["ostriches",17.26],["dig",17.86],["a",18.06],["shallow",18.13],["hole",18.6],["in",18.87],["the",19.0],["ground",19.2]]},{"s":20.09,"e":22.05,"text":"and lay their giant eggs inside.","words":[["and",20.09],["lay",20.31],["their",20.54],["giant",20.92],["eggs",21.29],["inside",21.6]]},{"s":22.4,"e":25.03,"text":"Several times a day, mom and dad dip their heads down","words":[["several",22.4],["times",22.84],["a",23.15],["day",23.22],["mom",23.4],["and",23.59],["dad",23.78],["dip",23.97],["their",24.16],["heads",24.47],["down",24.78]]},{"s":25.14,"e":27.68,"text":"and roll each egg with their beak.","words":[["and",25.14],["roll",25.42],["each",25.8],["egg",26.18],["with",26.46],["their",26.83],["beak",27.3]]},{"s":28.1,"e":30.07,"text":"From far away, the head vanishes.","words":[["from",28.1],["far",28.4],["away",28.63],["the",28.94],["head",29.16],["vanishes",29.47]]},{"s":30.5,"e":32.86,"text":"And if danger's close and they can't get away,","words":[["and",30.5],["if",30.7],["dangers",30.84],["close",31.31],["and",31.65],["they",31.85],["cant",32.12],["get",32.39],["away",32.59]]},{"s":33.32,"e":35.84,"text":"they flop flat, neck stretched along the dirt,","words":[["they",33.32],["flop",33.59],["flat",33.87],["neck",34.14],["stretched",34.41],["along",35.02],["the",35.36],["dirt",35.57]]},{"s":36.3,"e":37.8,"text":"like a big lumpy bush.","words":[["like",36.3],["a",36.66],["big",36.74],["lumpy",37.01],["bush",37.45]]},{"s":38.15,"e":39.89,"text":"But mostly? They just run.","words":[["but",38.15],["mostly",38.41],["they",38.93],["just",39.28],["run",39.63]]},{"s":40.26,"e":42.11,"text":"Up to seventy kilometers an hour,","words":[["up",40.26],["to",40.4],["seventy",40.53],["kilometers",41.01],["an",41.7],["hour",41.84]]},{"s":42.55,"e":44.61,"text":"the fastest bird on two legs.","words":[["the",42.55],["fastest",42.82],["bird",43.44],["on",43.8],["two",43.98],["legs",44.25]]},{"s":45.04,"e":47.59,"text":"So next time an ostrich looks like it's hiding,","words":[["so",45.04],["next",45.18],["time",45.46],["an",45.73],["ostrich",45.87],["looks",46.35],["like",46.7],["its",46.97],["hiding",47.18]]},{"s":47.99,"e":49.19,"text":"what's it really doing?","words":[["whats",47.99],["it",48.33],["really",48.46],["doing",48.86]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const clamp = H.clamp, back = H.ease.back, eo = H.ease.out, eio = H.ease.inOut, lerp = H.lerp;
  const seg = (t, a, b) => clamp((t - a) / (b - a));
  const L2 = (a, b, k) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];
  // warm paper greys: 6 background steps + character white and ink
  const G = { ink: '#0e0d0c', white: '#faf7ef', g1: '#d8d2c5', g2: '#bfb8aa', g3: '#a59e90', g4: '#8b8477', g5: '#6f695e', g6: '#544f47', dark: '#252320' };
  const F = { title: (s) => `400 ${s}px "Shrikhand"`, caps: (s) => `400 ${s}px "Limelight"`, card: (s) => `400 ${s}px "IM Fell English SC"` };
  try { [F.title(120), F.caps(80), F.card(48)].forEach((f) => document.fonts.load(f, 'AaZz09?!,.')); } catch (e) {}
  const GY = 1360; // ground line
  const LW = 6;
  const cache = (() => { const m = {}; return (k, f) => m[k] || (m[k] = f()); })();
  const hash = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
  const vnoise = (x) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return lerp(hash(i), hash(i + 1), u); };
  const BPM_BEAT = 0.5; // 120 bpm, one beat = 12 frames at 24 fps
  const breathe = (tq) => Math.cos(TAU * tq / BPM_BEAT);

  // ---------------- ink primitives (line boil: 3 drawings cycling at 12 fps) ----------------
  let BOIL = 0;
  const bj = (p, k) => { const a = 1.5, h1 = hash(p[0] * 0.031 + p[1] * 0.017 + k * 3.7 + BOIL * 19.3), h2 = hash(p[0] * 0.023 - p[1] * 0.029 + k * 5.1 + BOIL * 7.9); return [p[0] + (h1 - 0.5) * 2 * a, p[1] + (h2 - 0.5) * 2 * a]; };
  function smoothClosed(c, pts) {
    const n = pts.length; c.moveTo((pts[n - 1][0] + pts[0][0]) / 2, (pts[n - 1][1] + pts[0][1]) / 2);
    for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n]; c.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); }
    c.closePath();
  }
  function smoothOpen(c, pts) {
    c.moveTo(pts[0][0], pts[0][1]);
    if (pts.length === 2) { c.lineTo(pts[1][0], pts[1][1]); return; }
    for (let i = 1; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1]; const m = i === pts.length - 2 ? b : [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; c.quadraticCurveTo(a[0], a[1], m[0], m[1]); }
  }
  const ellP = (cx, cy, rx, ry, n = 30, f) => { const p = []; for (let i = 0; i < n; i++) { const a = i / n * TAU, k = f ? f(a) : 1; p.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]); } return p; };
  function blob(c, pts, fill, lw = LW, boil = true) {
    const q = boil ? pts.map((p, i) => bj(p, i)) : pts;
    c.beginPath(); smoothClosed(c, q); c.fillStyle = fill; c.fill();
    if (lw) { c.lineJoin = 'round'; c.lineWidth = lw; c.strokeStyle = G.ink; c.stroke(); }
  }
  function tube(c, pts, w, fill, lw = LW) {
    const q = pts.map((p, i) => bj(p, i + 40));
    c.lineCap = 'round'; c.lineJoin = 'round';
    c.beginPath(); smoothOpen(c, q); c.strokeStyle = G.ink; c.lineWidth = w + lw * 2; c.stroke();
    c.beginPath(); smoothOpen(c, q); c.strokeStyle = fill; c.lineWidth = w; c.stroke();
  }
  const bez = (a, cp, b, n = 12) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, u = 1 - t; o.push([u * u * a[0] + 2 * u * t * cp[0] + t * t * b[0], u * u * a[1] + 2 * u * t * cp[1] + t * t * b[1]]); } return o; };
  function pieEye(c, x, y, rx, ry, lx = 0, ly = 0, blink = 0, lid = G.white) {
    const e = ellP(x, y, rx, ry, 22);
    c.save(); blob(c, e, G.white, LW * 0.8);
    c.beginPath(); smoothClosed(c, e.map((p, i) => bj(p, i))); c.clip();
    const px = x + lx * rx * 0.3, py = y + ly * ry * 0.22 + ry * 0.12, prx = rx * 0.64, pry = ry * 0.74;
    c.beginPath(); c.ellipse(px, py, prx, pry, 0, 0, TAU); c.fillStyle = G.ink; c.fill();
    c.beginPath(); c.ellipse(px, py, prx, pry, 0, 0, TAU); c.clip();
    c.beginPath(); c.moveTo(px, py); c.arc(px, py, prx * 1.3, -1.25, -0.72); c.closePath(); c.fillStyle = G.white; c.fill();
    c.restore();
    if (blink > 0) {
      c.save(); c.beginPath(); smoothClosed(c, e); c.clip();
      c.fillStyle = lid; c.fillRect(x - rx * 1.2, y - ry * 1.2, rx * 2.4, ry * 2.4 * blink);
      c.beginPath(); c.moveTo(x - rx * 1.2, y - ry * 1.2 + ry * 2.4 * blink); c.lineTo(x + rx * 1.2, y - ry * 1.2 + ry * 2.4 * blink); c.lineWidth = LW * 0.8; c.strokeStyle = G.ink; c.stroke();
      c.restore();
    }
  }
  function glove(c, x, y, r, ang) {
    c.save(); c.translate(x, y); c.rotate(ang);
    const parts = [[0, 0, r], [r * 0.85, -r * 0.55, r * 0.42], [r * 1.02, 0, r * 0.44], [r * 0.85, r * 0.55, r * 0.42], [-r * 0.1, -r * 0.92, r * 0.38]];
    const cuff = [[-r * 1.45, -r * 0.75], [-r * 0.65, -r * 0.6], [-r * 0.65, r * 0.6], [-r * 1.45, r * 0.75]];
    c.lineJoin = 'round';
    c.beginPath(); parts.forEach(([a, b, rr]) => { c.moveTo(a + rr, b); c.arc(a, b, rr, 0, TAU); }); c.moveTo(...cuff[0]); cuff.forEach((p) => c.lineTo(...p)); c.closePath();
    c.lineWidth = LW * 2; c.strokeStyle = G.ink; c.stroke(); c.fillStyle = G.white; c.fill();
    c.lineWidth = LW * 0.5; c.beginPath(); c.moveTo(-r * 1.05, -r * 0.62); c.lineTo(-r * 1.05, r * 0.62); c.stroke();
    for (let i = -1; i <= 1; i++) { c.beginPath(); c.moveTo(-r * 0.35, i * r * 0.28); c.lineTo(r * 0.25, i * r * 0.32); c.stroke(); }
    c.restore();
  }
  function shoe(c, x, y) {
    blob(c, ellP(x, y, 50, 26, 20), G.ink, LW);
    c.beginPath(); c.ellipse(x + 20, y - 9, 11, 6, -0.3, 0, TAU); c.fillStyle = G.white; c.fill();
  }

  // ---------------- the ostrich (the whole bird is the body; rubber-hose legs, gloved wings, pie eyes) ----------------
  function ostrich(c, o) {
    const tq = o.tq, b = (o.br || 0) * (o.amp || 1), flat = o.flat || 0, hd = o.hd || 0, sand = o.sand || 0, crouch = o.crouch || 0;
    const sgn = o.flip ? -1 : 1;
    c.save(); c.translate(o.x, o.y); c.scale(sgn * o.s, o.s); if (o.rot) c.rotate(o.rot);
    const st = 1 + 0.055 * b;
    const sy = st * (1 - 0.22 * crouch), sx = (2 - st) * (1 + 0.12 * crouch);
    const bcy = lerp(-300 * (1 - 0.28 * crouch) + (o.bob || 0), -100, flat);
    const BC = [o.bodyDx || 0, bcy];
    const rx = 150 * (1 + 0.28 * flat) * sx, ry = 102 * (1 - 0.38 * flat) * sy;
    const body = o.sex === 'f' ? G.g5 : G.dark;
    // legs
    const hips = [[BC[0] - 40, BC[1] + ry * 0.55], [BC[0] + 40, BC[1] + ry * 0.55]];
    let feet = o.feet || [[-55, 0], [55, 0]];
    if (o.run) feet = [0, 1].map((i) => { const a = o.runPh + i * Math.PI; return [BC[0] + 10 + Math.cos(a) * 105, Math.min(0, -55 + Math.sin(a) * 70)]; });
    if (flat > 0) feet = feet.map((f, i) => [lerp(f[0], i ? 80 : -95, flat), f[1]]);
    [0, 1].forEach((i) => {
      const h = hips[i], f = feet[i], mid = [(h[0] + f[0]) / 2 + (o.run ? -20 : (i ? 22 : -22)), (h[1] + f[1]) / 2];
      tube(c, [h, mid, [f[0], f[1] - 18]], 22, G.g1);
      shoe(c, f[0] + 22, f[1] - 22);
    });
    // tail plume
    const tw = Math.sin(tq * TAU * 2) * 0.15 * (o.wag || 0);
    c.save(); c.translate(BC[0] - rx * 0.92, BC[1] - ry * 0.3); c.rotate(-0.3 + tw);
    blob(c, ellP(-30, -20, 36, 28, 16, (a) => 1 + 0.1 * Math.abs(Math.sin(a * 3))), G.white);
    blob(c, ellP(-52, 12, 30, 24, 16, (a) => 1 + 0.1 * Math.abs(Math.sin(a * 3))), G.white);
    blob(c, ellP(-10, 18, 26, 22, 14), G.white);
    c.restore();
    // body: scalloped feather hem
    const bp = ellP(BC[0], BC[1], rx, ry, 40, (a) => (Math.sin(a) > 0.1 ? 1 + 0.06 * Math.abs(Math.sin(a * 7)) : 1));
    blob(c, bp, body);
    c.save(); c.beginPath(); smoothClosed(c, bp.map((p, i) => bj(p, i))); c.clip();
    c.beginPath(); c.ellipse(BC[0] - rx * 0.32, BC[1] - ry * 0.42, rx * 0.62, ry * 0.4, -0.2, 0, TAU); c.fillStyle = o.sex === 'f' ? G.g4 : G.g6; c.fill();
    c.restore();
    // neck + head
    const NB = [BC[0] + rx * 0.7, BC[1] - ry * 0.5];
    const up = [NB[0] + 60, NB[1] - 250], down = L2([rx + 130, -48], [rx + 110, 50], sand), fl = [rx + 290, -40];
    let HP = L2(L2(up, down, clamp(hd)), fl, flat);
    if (o.hpOff) HP = [HP[0] + o.hpOff[0], HP[1] + o.hpOff[1]];
    if (o.shake) HP = [HP[0] + Math.sin(tq * TAU * 3) * 34 * o.shake, HP[1]];
    let CP = L2(L2([NB[0] + 95, NB[1] - 110], [NB[0] + 170, NB[1] - 190], clamp(hd)), [(NB[0] + fl[0]) / 2, -44], flat);
    // wing arm (behind the neck)
    if (flat < 0.5) {
      const sh = [BC[0] + rx * 0.15, BC[1] - ry * 0.05];
      let gp = o.arm === 'up' ? [BC[0] + rx * 0.35, BC[1] - ry - 110] : o.arm === 'out' ? [BC[0] + rx + 70, BC[1] - ry * 0.6] : o.arm === 'back' ? [BC[0] - rx * 0.3, BC[1] - ry - 60] : [BC[0] + rx * 0.62, BC[1] + ry * 0.55];
      if (o.arm === 'up') gp = [gp[0] + Math.sin(tq * TAU * 2) * 18, gp[1]];
      tube(c, [sh, [(sh[0] + gp[0]) / 2 + 30, (sh[1] + gp[1]) / 2 + 10], gp], 16, G.g1);
      blob(c, ellP(sh[0], sh[1], 44, 30, 16, (a) => 1 + 0.12 * Math.abs(Math.sin(a * 4))), G.white);
      glove(c, gp[0], gp[1], 22, o.arm === 'up' ? -1.4 : o.arm === 'out' ? 0 : 0.9);
    }
    tube(c, bez(NB, CP, HP, 12), 30, G.g1);
    const ha = lerp(0, 1.3, clamp(hd)) * (1 - flat) + (o.headTilt || 0);
    c.save(); c.translate(HP[0], HP[1]); c.rotate(ha);
    // beak
    const op = o.beakOpen || 0;
    blob(c, [[30, -10], [100, 4], [98, 10], [34, 8]], G.g2, LW * 0.9);
    c.save(); c.translate(34, 8); c.rotate(op * 0.5); blob(c, [[-4, 0], [60, 2], [-2, 14]], G.g2, LW * 0.9); c.restore();
    blob(c, ellP(0, 0, 52, 44, 24), G.white);
    // head tuft
    c.lineWidth = LW * 0.8; c.strokeStyle = G.ink; c.lineCap = 'round';
    [[-14, -40, -24, -70], [0, -42, 4, -76], [12, -40, 26, -66]].forEach(([a, b2, cc, d]) => { c.beginPath(); c.moveTo(a, b2); c.quadraticCurveTo((a + cc) / 2 - 8, (b2 + d) / 2, cc, d); c.stroke(); });
    const lk = o.look || [0.4, 0];
    pieEye(c, -8, -10, 19, 25, lk[0], lk[1], o.blink || 0);
    pieEye(c, 22, -12, 19, 25, lk[0], lk[1], o.blink || 0);
    if (o.brow) {
      c.lineWidth = LW * 0.9; c.strokeStyle = G.ink;
      const w = o.brow === 'worried' ? 1 : -1; // worried: inner ends (near the beak, the middle of the pair) raised
      c.beginPath(); c.moveTo(-22, -40 + 6 * w); c.lineTo(2, -42 - 6 * w); c.stroke();
      c.beginPath(); c.moveTo(12, -44 - 6 * w); c.lineTo(36, -42 + 6 * w); c.stroke();
    }
    c.restore();
    c.restore();
    const wpt = (p) => [o.x + sgn * o.s * p[0], o.y + o.s * p[1]];
    return { hp: wpt(HP), bc: wpt(BC), feet: feet.map(wpt) };
  }

  // ---------------- props ----------------
  function egg(c, x, y, s, rot, br = 0) {
    c.save(); c.translate(x, y); c.rotate(rot); c.scale(s * (1 - 0.03 * br), s * (1 + 0.03 * br));
    const e = ellP(0, 0, 50, 62, 28, (a) => 1 + 0.08 * Math.sin(a) * -1);
    blob(c, e, G.white);
    c.save(); c.beginPath(); smoothClosed(c, e); c.clip(); c.beginPath(); c.ellipse(22, 20, 44, 58, 0, 0, TAU); c.fillStyle = G.g1; c.fill(); c.restore();
    c.beginPath(); smoothClosed(c, e.map((p, i) => bj(p, i))); c.lineWidth = LW; c.strokeStyle = G.ink; c.stroke();
    // little speckles mark the turn
    c.fillStyle = G.g4; [[-18, -24, 5], [8, -34, 4], [-4, 10, 6], [16, 30, 4]].forEach(([a, b, r]) => { c.beginPath(); c.arc(a, b, r, 0, TAU); c.fill(); });
    c.restore();
  }
  function bush(c, x, y, s, br, eyes, tq) {
    c.save(); c.translate(x, y); c.scale(s * (1 - 0.05 * br), s * (1 + 0.05 * br));
    const lobes = [[-110, 10, 80], [-40, -60, 95], [60, -50, 90], [120, 20, 75], [0, 30, 110]];
    c.beginPath(); lobes.forEach(([a, b, r]) => { const pts = ellP(a, b, r, r * 0.9, 20).map((p, i) => bj(p, i)); smoothClosed(c, pts); });
    c.lineWidth = LW * 2; c.strokeStyle = G.ink; c.stroke(); c.fillStyle = G.g6; c.fill();
    c.strokeStyle = G.g4; c.lineWidth = 4; c.lineCap = 'round';
    for (let i = 0; i < 14; i++) { const r = H.rng(i + 5), a = r.range(-150, 150), b = r.range(-110, 60); c.beginPath(); c.moveTo(a, b); c.quadraticCurveTo(a + 10, b - 14, a + 22, b - 6); c.stroke(); }
    if (eyes) { pieEye(c, -18, -10, 20, 26, eyes[0], eyes[1], eyes[2] || 0, G.g6); pieEye(c, 16, -12, 20, 26, eyes[0], eyes[1], eyes[2] || 0, G.g6); }
    c.restore();
  }
  function mound(c, x, y, s, hole) {
    c.save(); c.translate(x, y); c.scale(s, s);
    if (hole) blob(c, ellP(0, 6, 70, 18, 20), G.dark, LW * 0.8);
    blob(c, [[-150, 8], [-110, -26], [-70, -40], [-40, -12], [-30, 14], [-150, 22]], G.g2, LW * 0.9);
    blob(c, [[30, 14], [44, -16], [80, -38], [120, -24], [160, 8], [160, 22]], G.g2, LW * 0.9);
    blob(c, [[-60, 16], [-40, -2], [40, -2], [60, 16], [0, 26]], G.g2, LW * 0.9);
    c.fillStyle = G.g4; for (let i = 0; i < 9; i++) { const r = H.rng(i + 30); c.beginPath(); c.arc(r.range(-130, 130), r.range(-20, 12), 3, 0, TAU); c.fill(); }
    c.restore();
  }
  function puffs(c, x, y, t, t0, n, seed, spread = 180, dir = 0, size = 1) {
    const age = t - t0; if (age < 0 || age > 0.9) return;
    const k = eo(age / 0.9);
    for (let i = 0; i < n; i++) {
      const r = H.rng(seed * 31 + i), ang = dir + r.range(-1.2, 1.2) - Math.PI / 2, d = r.range(0.4, 1) * spread * k;
      const px = x + Math.cos(ang) * d * 1.3, py = y + Math.sin(ang) * d * 0.7, rr = r.range(18, 40) * size * (0.6 + k * 0.8) * (1 - Math.max(0, (age - 0.6) / 0.3));
      if (rr > 2) blob(c, ellP(px, py, rr, rr * 0.85, 14, (a) => 1 + 0.12 * Math.sin(a * 5 + i)), G.g1, LW * 0.7);
    }
  }
  function sweat(c, x, y, tq, i) {
    const ph = (tq * 2 + i * 0.37) % 1;
    c.save(); c.translate(x + i * 40, y + ph * 60); c.globalAlpha = 1;
    blob(c, [[0, -24], [12, 0], [0, 12], [-12, 0]], G.white, LW * 0.7); c.restore();
  }
  function grass(c, x, y, s, br, seed) {
    c.save(); c.translate(x, y); c.scale(s, s * (1 + 0.05 * br));
    const r = H.rng(seed);
    for (let i = 0; i < 9; i++) {
      const bx = r.range(-90, 90), h = r.range(220, 380), lean = r.range(-60, 60);
      blob(c, [[bx - 16, 0], [bx + lean * 0.5 - 6, -h * 0.55], [bx + lean, -h], [bx + lean * 0.5 + 8, -h * 0.5], [bx + 16, 0]], i % 2 ? G.g5 : G.g6, LW * 0.8);
    }
    c.restore();
  }

  // ---------------- lettering ----------------
  let TQ = 0;
  function title(c, str, x, y, size, t, t0, t1 = 1e9, o = {}) {
    if (t < t0 || t >= t1) return;
    const p = seg(t, t0, t0 + 0.25), sc = 0.2 + 0.8 * back(p);
    c.save(); c.translate(x, y); c.scale(sc, sc); if (o.rot) c.rotate(o.rot);
    c.font = F.title(size); c.textBaseline = 'alphabetic'; c.lineJoin = 'round';
    const chars = [...str], ws = chars.map((ch) => c.measureText(ch).width), tot = ws.reduce((a, b) => a + b, 0);
    let cx = -tot / 2;
    chars.forEach((ch, i) => {
      const hop = o.still ? 0 : -Math.max(0, Math.sin(TAU * TQ * 2 - i * 0.7)) * size * 0.07;
      const lx = cx, ly = hop;
      c.fillStyle = G.ink; c.fillText(ch, lx + size * 0.06, ly + size * 0.07);
      c.lineWidth = size * 0.16; c.strokeStyle = G.ink; c.strokeText(ch, lx, ly);
      c.fillStyle = o.fill || G.white; c.fillText(ch, lx, ly);
      cx += ws[i];
    });
    c.restore();
  }
  function caps(c, str, x, y, size, t, t0, t1 = 1e9) {
    if (t < t0 || t >= t1) return;
    const sc = t - t0 < 0.084 ? 1.12 : 1;
    c.save(); c.translate(x, y); c.scale(sc, sc);
    c.font = F.caps(size); c.textAlign = 'center'; c.lineJoin = 'round';
    c.fillStyle = G.ink; c.fillText(str, size * 0.05, size * 0.06);
    c.lineWidth = size * 0.14; c.strokeStyle = G.ink; c.strokeText(str, 0, 0);
    c.fillStyle = G.white; c.fillText(str, 0, 0);
    c.restore();
  }
  function card(c, str, x, y, size, t, t0, t1 = 1e9) {
    if (t < t0 || t >= t1) return;
    const sc = t - t0 < 0.084 ? 1.12 : 1;
    c.save(); c.translate(x, y); c.scale(sc, sc);
    c.font = F.card(size); const w = c.measureText(str).width + size * 1.6, h = size * 1.75;
    c.fillStyle = '#141210'; c.fillRect(-w / 2, -h / 2, w, h);
    c.strokeStyle = G.white; c.lineWidth = 3; c.strokeRect(-w / 2 + 8, -h / 2 + 8, w - 16, h - 16);
    c.lineWidth = 1.5; c.strokeRect(-w / 2 + 15, -h / 2 + 15, w - 30, h - 30);
    [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([a, b]) => { const cx = a * (w / 2 - 15), cy = b * (h / 2 - 15); c.beginPath(); c.arc(cx, cy, 7, 0, TAU); c.fillStyle = '#141210'; c.fill(); c.lineWidth = 2; c.stroke(); c.beginPath(); c.arc(cx, cy, 2.5, 0, TAU); c.fillStyle = G.white; c.fill(); });
    c.fillStyle = G.white; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(str, 0, 2);
    c.restore();
  }

  // ---------------- painted backgrounds (cached, never boil) ----------------
  function wash(c, x, y, w, h, base, seed, k = 0.05) {
    c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip();
    c.fillStyle = base; c.fillRect(x, y, w, h);
    const r = H.rng(seed);
    for (let i = 0; i < 40; i++) {
      const bx = x + r() * w, by = y + r() * h, rr = r.range(80, 260), light = r() > 0.5;
      const g = c.createRadialGradient(bx, by, 0, bx, by, rr); g.addColorStop(0, light ? `rgba(255,252,240,${k})` : `rgba(20,18,14,${k})`); g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g; c.fillRect(bx - rr, by - rr, rr * 2, rr * 2);
    }
    c.restore();
  }
  function finishPaint(c, seed) {
    const r = H.rng(seed);
    for (let i = 0; i < 9000; i++) { const s = r.range(1, 2.6); c.fillStyle = r() > 0.5 ? 'rgba(255,250,236,0.07)' : 'rgba(20,18,14,0.07)'; c.fillRect(r() * W0, r() * H0, s, s); }
    const vg = c.createRadialGradient(W0 / 2, H0 / 2, 600, W0 / 2, H0 / 2, 1250); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.28)'); c.fillStyle = vg; c.fillRect(0, 0, W0, H0);
  }
  const outlineFill = (c, pts, fill, lw = 3) => { c.beginPath(); smoothClosed(c, pts); c.fillStyle = fill; c.fill(); c.lineWidth = lw; c.strokeStyle = G.g6; c.stroke(); };
  function paintDesert(c, gy, seed, opt = {}) {
    wash(c, 0, 0, W0, gy, G.g2, seed);
    if (!opt.noSun) { c.beginPath(); c.arc(810, 470, 120, 0, TAU); c.fillStyle = G.g1; c.fill(); c.lineWidth = 3; c.strokeStyle = G.g5; c.stroke(); }
    [[230, 560, 1], [700, 760, 0.8]].forEach(([x, y, s]) => outlineFill(c, ellP(x, y, 150 * s, 50 * s, 26, (a) => 1 + 0.18 * Math.abs(Math.sin(a * 3.5))), G.g1));
    const dune = []; dune.push([-50, gy + 40]); for (let x = -50; x <= W0 + 50; x += 90) dune.push([x, gy - 90 - 60 * Math.sin(x * 0.006 + seed) - 30 * Math.sin(x * 0.017)]); dune.push([W0 + 50, gy + 40]);
    c.beginPath(); c.moveTo(dune[0][0], dune[0][1]); dune.forEach((p) => c.lineTo(p[0], p[1])); c.closePath(); c.fillStyle = G.g3; c.fill(); c.lineWidth = 3; c.strokeStyle = G.g6; c.stroke();
    // acacia on the dune line
    if (!opt.noTree) { const tx = opt.treeX || 140, ty = gy - 120; c.lineWidth = 3; c.strokeStyle = G.g6; c.fillStyle = G.g5; c.beginPath(); c.moveTo(tx - 8, ty + 60); c.lineTo(tx - 4, ty - 40); c.lineTo(tx + 4, ty - 40); c.lineTo(tx + 8, ty + 60); c.fill(); c.stroke(); outlineFill(c, ellP(tx, ty - 60, 110, 30, 22, (a) => 1 + 0.12 * Math.abs(Math.sin(a * 4))), G.g5); }
    wash(c, 0, gy - 10, W0, H0 - gy + 10, G.g4, seed + 9, 0.06);
    c.beginPath(); c.moveTo(0, gy - 10); c.lineTo(W0, gy - 10); c.lineWidth = 3; c.strokeStyle = G.g6; c.stroke();
    const r = H.rng(seed + 3); c.strokeStyle = G.g5; c.lineWidth = 3; c.lineCap = 'round';
    for (let i = 0; i < 26; i++) { const x = r() * W0, y = gy + 30 + r() * (H0 - gy - 60), w = r.range(30, 80); c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + w / 2, y - 8, x + w, y); c.stroke(); }
    c.fillStyle = G.g3; for (let i = 0; i < 14; i++) { const x = r() * W0, y = gy + 40 + r() * (H0 - gy - 80); c.beginPath(); c.ellipse(x, y, r.range(8, 18), r.range(5, 9), 0, 0, TAU); c.fill(); c.stroke(); }
  }
  const BG = {
    desert: () => { const L = H.layer(W0, H0), c = L.getContext('2d'); paintDesert(c, GY, 1); finishPaint(c, 1); return L; },
    desert2: () => { const L = H.layer(W0, H0), c = L.getContext('2d'); paintDesert(c, GY, 4, { treeX: 930 }); finishPaint(c, 2); return L; },
    nest: () => { const L = H.layer(W0, H0), c = L.getContext('2d'); paintDesert(c, 1280, 7, { noSun: true, treeX: 980 }); finishPaint(c, 3); return L; },
    danger: () => { const L = H.layer(W0, H0), c = L.getContext('2d'); paintDesert(c, GY, 2, { noSun: true, noTree: true }); c.fillStyle = 'rgba(20,18,14,0.3)'; c.fillRect(0, 0, W0, H0); finishPaint(c, 4); return L; },
    far: () => { const L = H.layer(W0, H0), c = L.getContext('2d'); paintDesert(c, 1150, 11, { treeX: 760 }); finishPaint(c, 5); return L; },
    rome: () => {
      const L = H.layer(W0, H0), c = L.getContext('2d');
      wash(c, 0, 0, W0, 1400, G.g3, 21);
      c.fillStyle = G.g4; c.fillRect(0, 230, W0, 90); c.strokeStyle = G.g6; c.lineWidth = 4;
      c.beginPath(); for (let x = 0; x < W0; x += 60) { c.moveTo(x, 300); c.lineTo(x, 250); c.lineTo(x + 40, 250); c.lineTo(x + 40, 285); c.lineTo(x + 20, 285); c.lineTo(x + 20, 270); } c.stroke();
      c.strokeRect(-5, 230, W0 + 10, 90);
      [100, 980].forEach((cx) => { c.fillStyle = G.g2; c.fillRect(cx - 70, 320, 140, 1080); c.strokeRect(cx - 70, 320, 140, 1080); c.fillRect(cx - 95, 320, 190, 50); c.strokeRect(cx - 95, 320, 190, 50); c.lineWidth = 3; for (let k = -2; k <= 2; k++) { c.beginPath(); c.moveTo(cx + k * 24, 380); c.lineTo(cx + k * 24, 1390); c.stroke(); } c.lineWidth = 4; });
      // checker floor
      const fy = 1400; for (let row = 0; row < 8; row++) { const y0 = fy + row * 70, h = 70; for (let col = -2; col < 14; col++) { const x0 = col * 100 - (row % 2) * 0; c.fillStyle = (row + col) % 2 ? G.g4 : G.g5; c.fillRect(x0, y0, 100, h); } }
      c.beginPath(); c.moveTo(0, fy); c.lineTo(W0, fy); c.stroke();
      finishPaint(c, 6); return L;
    },
    run: () => {
      const L = H.layer(W0 * 2, H0), c = L.getContext('2d');
      wash(c, 0, 0, W0 * 2, GY, G.g2, 33);
      const dune = []; for (let x = 0; x <= W0 * 2; x += 60) dune.push([x, GY - 100 - 50 * Math.sin(x * TAU / 1080) - 25 * Math.sin(x * TAU * 3 / 1080)]);
      c.beginPath(); c.moveTo(0, GY); dune.forEach((p) => c.lineTo(p[0], p[1])); c.lineTo(W0 * 2, GY); c.closePath(); c.fillStyle = G.g3; c.fill(); c.lineWidth = 3; c.strokeStyle = G.g6; c.stroke();
      [300, 1000, 1620].forEach((tx) => { const ty = GY - 150; c.fillStyle = G.g5; c.fillRect(tx - 7, ty - 40, 14, 110); c.strokeRect(tx - 7, ty - 40, 14, 110); outlineFill(c, ellP(tx, ty - 60, 120, 32, 22, (a) => 1 + 0.12 * Math.abs(Math.sin(a * 4))), G.g5); });
      wash(c, 0, GY - 10, W0 * 2, H0 - GY + 10, G.g4, 34, 0.06);
      c.strokeStyle = G.g5; c.lineWidth = 3; const r = H.rng(35);
      for (let i = 0; i < 40; i++) { const x = r() * W0 * 2, y = GY + 30 + r() * 500, w = r.range(40, 90); c.beginPath(); c.moveTo(x, y); c.lineTo(x + w, y); c.stroke(); }
      return L;
    },
    binoc: () => { const L = H.layer(W0, H0), c = L.getContext('2d'); c.fillStyle = '#0b0a09'; c.fillRect(0, 0, W0, H0); c.globalCompositeOperation = 'destination-out'; [[365, 1040], [715, 1040]].forEach(([x, y]) => { c.beginPath(); c.arc(x, y, 330, 0, TAU); c.fill(); }); c.globalCompositeOperation = 'source-over'; c.lineWidth = 10; c.strokeStyle = G.ink; return L; },
  };
  const bg = (c, k) => c.drawImage(cache(k, BG[k]), 0, 0);

  // ---------------- scenes ----------------
  const SC = [];
  const scene = (t0, fn, o = {}) => SC.push(Object.assign({ t0, fn }, o));
  const withCam = (c, cx, cy, z, fn) => { c.save(); c.translate(cx, cy); c.scale(z, z); c.translate(-cx, -cy); fn(); c.restore(); };
  const clipAbove = (c, y, fn) => { c.save(); c.beginPath(); c.rect(-2000, -2000, 5000, y + 2000); c.clip(); fn(); c.restore(); };

  // 0. hook: the myth pose, then NEVER
  scene(0, (c, t, tq) => {
    const tn = P(0, 'never'), ts = P(1, 'seen'), tw = P(1, 'why'), X = 300, s = 1.05;
    let hd = 1, crouch = 0, shake = 0, arm = 'up', brow = null, look = [0.5, -0.1];
    if (tq >= tn - 0.25 && tq < tn) crouch = seg(tq, tn - 0.25, tn);
    if (tq >= tn) hd = 1 - back(seg(tq, tn, tn + 0.25));
    if (tq >= tn + 0.35 && tq < tn + 1.5) { shake = 1; arm = 'out'; }
    else if (tq >= tn + 0.25) arm = 'rest';
    if (tq >= ts - 0.15 && tq < tw - 0.1) { hd = eio(seg(tq, ts - 0.15, ts + 0.1)); arm = 'up'; }
    if (tq >= tw - 0.1) { hd = 1 - back(seg(tq, tw - 0.1, tw + 0.15)); arm = 'out'; brow = 'worried'; look = [-0.6, -0.5]; }
    const z = 1 + 0.06 * eio(seg(t, 0, 5));
    withCam(c, 540, 1150, z, () => {
      bg(c, 'desert');
      const mx = X + s * 260;
      if (hd < 0.5) mound(c, mx, GY + 6, 1, true);
      clipAbove(c, GY + 4, () => ostrich(c, { x: X, y: GY, s, tq, br: breathe(tq), hd, sand: 1, crouch, shake, arm, brow, look, wag: hd > 0.7 ? 1 : 0.3, rot: hd > 0.8 ? 0.035 * Math.sin(tq * TAU * 2) : 0 }));
      if (hd >= 0.5) mound(c, mx, GY + 6, 1, false);
      puffs(c, mx, GY - 10, tq, tn, 7, 1); puffs(c, mx, GY - 10, tq, ts, 6, 2, 140); puffs(c, mx, GY - 10, tq, tw - 0.1, 7, 3);
      if (tq >= tw) title(c, '?', mx + 60, 900 - 10 * breathe(tq), 170, t, tw + 0.1);
    });
    title(c, 'HEAD IN', 540, 310, 120, t, 0.25, ts - 0.2);
    title(c, 'THE SAND?', 540, 450, 120, t, 0.45, ts - 0.2);
    if (t >= tn && t < ts - 0.2) { const k = eo(seg(t, tn, tn + 0.15)); c.save(); c.lineCap = 'round'; c.strokeStyle = G.ink; c.lineWidth = 30; c.beginPath(); c.moveTo(150, 450); c.lineTo(150 + 780 * k, 250); c.stroke(); c.strokeStyle = G.white; c.lineWidth = 14; c.stroke(); c.restore(); }
    title(c, 'NEVER!', 540, 1590, 170, t, tn + 0.05, ts - 0.2, { rot: -0.06 });
    title(c, "YOU'VE SEEN IT", 540, 380, 104, t, P(1, 'youve'), tw);
    title(c, 'WHY?', 540, 450, 200, t, tw);
  });

  // 1. the Roman writer: a living quill writes on a scroll
  scene(PS(2), (c, t, tq) => {
    const t0 = PS(2), tr = P(2, 'roman'), tp = P(2, 'pliny'), t2 = P(3, 'two');
    bg(c, 'rome');
    const br = breathe(tq), open = eio(seg(tq, t0, t0 + 0.6));
    // scroll
    const sx = 540, top = 560, h = 100 + 620 * open;
    c.save(); c.translate(sx, top); c.scale(1, 1 + 0.02 * br);
    blob(c, [[-330, 0], [330, 0], [330, h], [-330, h]], G.white, LW, true);
    c.strokeStyle = G.g3; c.lineWidth = 4; for (let y = 60; y < h - 30; y += 70) { c.beginPath(); c.moveTo(-280, y); c.lineTo(280, y); c.stroke(); }
    tube(c, [[-370, 0], [370, 0]], 46, G.g4); tube(c, [[-370, h], [370, h]], 46, G.g4);
    c.restore();
    // what the quill writes
    caps(c, 'PLINY', 540, top + 210, 120, t, tp);
    caps(c, 'THE ELDER', 540, top + 340, 92, t, P(2, 'elder'));
    // writing squiggles under the name
    const wr = seg(tq, P(2, 'elder') + 0.3, PE(3));
    if (wr > 0) { c.save(); c.strokeStyle = G.ink; c.lineWidth = 6; c.lineCap = 'round'; for (let ln = 0; ln < 3; ln++) { const k = clamp(wr * 3 - ln); if (k <= 0) continue; c.beginPath(); for (let x = 0; x <= 480 * k; x += 8) { const y = top + 430 + ln * 70 + Math.sin(x * 0.12 + ln) * 10; x === 0 ? c.moveTo(300 + x, y) : c.lineTo(300 + x, y); } c.stroke(); } c.restore(); }
    // the quill character
    const wx = tq < tp ? 820 : tq < P(2, 'elder') + 0.3 ? lerp(380, 700, seg(tq, tp, P(2, 'elder') + 0.3)) : 300 + 480 * clamp(wr * 3 % 1) , wy = tq < tp ? 1150 : top + (tq < P(2, 'elder') + 0.3 ? 300 : 440 + Math.floor(clamp(wr * 3, 0, 2.99)) * 70);
    const hop = Math.abs(Math.sin(TAU * tq)) * 16;
    c.save(); c.translate(wx, wy - hop); c.rotate(0.55 + 0.08 * br); c.scale(0.62, 0.62);
    blob(c, [[0, 0], [16, -60], [10, -260], [-30, -300], [-60, -200], [-40, -80]], G.white);
    c.strokeStyle = G.ink; c.lineWidth = 5; c.beginPath(); c.moveTo(4, -10); c.quadraticCurveTo(-20, -150, -32, -290); c.stroke();
    blob(c, [[-4, 0], [6, 0], [1, 30]], G.ink, 3);
    pieEye(c, -22, -170, 16, 21, 0.5, 0.3, (tq % 2.3) < 0.12 ? 1 : 0); pieEye(c, 4, -172, 16, 21, 0.5, 0.3, (tq % 2.3) < 0.12 ? 1 : 0);
    c.restore();
    card(c, 'A ROMAN WRITER', 540, 400, 52, t, tr);
    title(c, '2,000', 540, 1520, 210, t, t2);
    caps(c, 'YEARS AGO', 540, 1640 - 20, 80, t, P(3, 'years'));
  });

  // 2. his claim: the head in a bush
  scene(PS(4), (c, t, tq) => {
    const t0 = PS(4), th = P(4, 'hide'), tb = P(4, 'bushes'), tt = P(5, 'think'), tn = P(5, 'nobody');
    bg(c, 'desert2');
    const X = 340, s = 1.15, br = breathe(tq);
    let hd = 0, hpOff = [0, 0];
    const R = ostrich(c, { x: X, y: GY, s, tq, br, hd, hpOff: [40, 40], arm: tq > tn ? 'back' : 'rest', wag: tq > tt ? 1 : 0, look: [0.5, 0.3] });
    const bs = tq < tb ? 0 : back(seg(tq, tb, tb + 0.25));
    if (bs > 0) bush(c, R.hp[0] + 20, R.hp[1] + 30, 1.1 * bs, br, tq >= tt ? [tq > tn ? -0.5 : 0.6, 0.2, (tq % 1.7) < 0.1 ? 1 : 0] : null, tq);
    puffs(c, R.hp[0], R.hp[1], tq, tb, 6, 9, 160, 0, 0.8);
    card(c, '"IT HIDES ITS HEAD"', 540, 330, 56, t, th);
    title(c, 'INVISIBLE?', 540, 1590, 130, t, tn);
    if (tq >= tt) { c.save(); for (let i = 0; i < 3; i++) { const a = tq * 2 + i * 2.1; const px = R.hp[0] + Math.cos(a) * 230, py = R.hp[1] + Math.sin(a) * 120; c.translate(0, 0); blob(c, ellP(px, py, 12, 12, 8, (q) => (Math.floor(q / (TAU / 8)) % 2 ? 0.45 : 1)), G.white, 3); } c.restore(); }
  });

  // 3. title card rolls down like a window shade
  scene(PS(6), (c, t, tq) => {
    const t0 = PS(6), t1 = PS(7);
    c.fillStyle = '#0b0a09'; c.fillRect(0, 0, W0, H0);
    const dn = eio(seg(t, t0, t0 + 0.35)), upk = eio(seg(t, t1 - 0.28, t1)), hgt = 1500 * dn * (1 - upk);
    c.save(); c.beginPath(); c.rect(60, 210, 960, hgt); c.clip();
    wash(c, 60, 210, 960, 1500, G.g5, 77, 0.07);
    c.strokeStyle = G.white; c.lineWidth = 5; c.strokeRect(100, 250, 880, 1420); c.lineWidth = 2; c.strokeRect(118, 268, 844, 1384);
    caps(c, "HERE'S WHAT'S", 540, 760, 84, t, t0);
    title(c, 'REALLY', 540, 960, 170, t, P(6, 'really'));
    title(c, 'GOING ON', 540, 1160, 150, t, P(6, 'going'));
    c.restore();
    tube(c, [[40, 210 + hgt], [1040, 210 + hgt]], 40, G.g4);
    c.fillStyle = G.white; c.beginPath(); c.arc(540, 240 + hgt, 14, 0, TAU); c.fill(); c.lineWidth = 5; c.strokeStyle = G.ink; c.stroke();
  }, { cutKind: 'shade' });

  // 4. the nest is a shallow hole in the ground
  scene(PS(7), (c, t, tq) => {
    const t0 = PS(7), td = P(7, 'dig'), th = P(7, 'hole'), ts = P(7, 'shallow'), tg = P(8, 'giant'), te = P(8, 'eggs');
    const z = 1 + 0.08 * eio(seg(t, P(7, 'ground'), PE(8)));
    const GN = 1280, hx = 680;
    withCam(c, hx, GN, z, () => {
      bg(c, 'nest');
      const hr = eo(seg(tq, td, th + 0.4));
      if (hr > 0) { blob(c, ellP(hx, GN + 30, 230 * hr, 56 * hr, 28), G.g6, LW); c.save(); c.beginPath(); c.ellipse(hx, GN + 30, 230 * hr, 56 * hr, 0, 0, TAU); c.clip(); c.fillStyle = G.dark; c.beginPath(); c.ellipse(hx, GN + 46, 220 * hr, 44 * hr, 0, 0, TAU); c.fill(); c.restore(); }
      const digging = tq >= td && tq < th + 0.5;
      const kick = digging ? Math.max(0, Math.sin(tq * TAU * 4)) : 0;
      const R = ostrich(c, { x: 310, y: GN, s: 1.0, tq, br: breathe(tq), sex: 'f', feet: [[-55 - 60 * kick, -50 * kick], [55, 0]], hd: digging ? 0.55 : tq >= te ? 0.35 : 0, look: [0.6, 0.6], arm: tq >= tg ? 'out' : 'rest' });
      if (digging) for (let i = 0; i < 6; i++) { const r = H.rng(Math.floor(tq * 12) * 7 + i), age = r(); const px = 210 - age * 260, py = GN - 40 - Math.sin(age * Math.PI) * 160; blob(c, ellP(px, py, 12, 9, 8), G.g2, 3); }
      [0, 1, 2].forEach((i) => {
        const tdrop = te + i * 0.16; if (tq < tdrop - 0.3) return;
        const k = seg(tq, tdrop - 0.3, tdrop), y = lerp(GN - 700, GN + 8, k * k), sq = tq > tdrop && tq < tdrop + 0.17 ? 0.85 : 1;
        c.save(); c.translate(hx - 120 + i * 120, y); c.scale(1 / sq, sq); egg(c, 0, -50, 1.0, (i - 1) * 0.25, breathe(tq)); c.restore();
      });
      if (hr > 0) { c.save(); c.beginPath(); c.rect(hx - 300, GN + 30, 600, 100); c.clip(); blob(c, ellP(hx, GN + 30, 232 * hr, 58 * hr, 28), G.g4, LW); c.restore(); }
    });
    card(c, 'A SHALLOW HOLE', 540, 1560, 54, t, ts);
    title(c, 'GIANT', 540, 340, 150, t, tg);
    title(c, 'EGGS', 540, 500, 150, t, te);
  });

  // 5. mom and dad turn the eggs
  scene(PS(9), (c, t, tq) => {
    const t0 = PS(9), tm = P(9, 'mom'), tdd = P(9, 'dad'), tdip = P(9, 'dip'), tr = P(10, 'roll'), teg = P(10, 'egg'), tbk = P(10, 'beak');
    bg(c, 'nest');
    const GN = 1450, br = breathe(tq);
    blob(c, ellP(540, GN - 40, 300, 70, 28), G.dark, LW);
    const nudges = [tr, teg, tbk];
    const rot = (i) => nudges.reduce((a, n, k) => a + (k % 3 === i % 3 || true ? eio(seg(tq, n, n + 0.3)) * (i % 2 ? -0.8 : 0.8) : 0), 0);
    const mHd = tq < tdip ? 0 : eio(seg(tq, tdip, tdip + 0.3)) * (1 - 0.3 * Math.max(0, Math.sin((tq - tdip) * TAU)));
    const dHd = tq < tdip + 0.3 ? 0 : eio(seg(tq, tdip + 0.3, tdip + 0.6)) * (1 - 0.3 * Math.max(0, Math.sin((tq - tdip) * TAU + 2)));
    ostrich(c, { x: 210, y: GN + 30, s: 0.95, tq, br, sex: 'f', hd: mHd, look: [0.5, 0.7], arm: tq >= tm && tq < tdip ? 'up' : 'rest', blink: (tq % 2.9) < 0.1 ? 1 : 0 });
    ostrich(c, { x: 870, y: GN + 30, s: 0.95, tq, br, flip: true, hd: dHd, look: [0.5, 0.7], arm: tq >= tdd && tq < tdip + 0.3 ? 'up' : 'rest' });
    [0, 1, 2].forEach((i) => egg(c, 420 + i * 120, GN - 70 + (i === 1 ? -10 : 0), 1.0, rot(i) + (i - 1) * 0.2, br));
    c.save(); c.beginPath(); c.rect(200, GN - 40, 700, 120); c.clip(); blob(c, ellP(540, GN - 40, 302, 72, 28), G.g4, LW); c.restore();
    nudges.forEach((n, k) => puffs(c, 540 + (k - 1) * 120, GN - 120, tq, n, 4, 50 + k, 90, 0, 0.6));
    title(c, 'SEVERAL TIMES', 540, 330, 112, t, P(9, 'several'));
    title(c, 'A DAY', 540, 470, 112, t, P(9, 'day'));
    card(c, 'MOM', 230, 700, 56, t, tm); card(c, 'DAD', 850, 700, 56, t, tdd);
    caps(c, 'ROLL!', 540, 1700 - 80, 96, t, tr);
    // a breathing alarm clock that spins through the day
    const cx = 540, cy = 640;
    if (t >= P(9, 'times')) {
      c.save(); c.translate(cx, cy); c.scale(1 - 0.05 * br, 1 + 0.05 * br);
      blob(c, ellP(0, 0, 80, 80, 26), G.white); c.strokeStyle = G.ink; c.lineWidth = 6; c.lineCap = 'round';
      const a = (tq - P(9, 'times')) * TAU * 1.5; c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.sin(a) * 55, -Math.cos(a) * 55); c.stroke(); c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.sin(a / 12) * 35, -Math.cos(a / 12) * 35); c.stroke();
      [-1, 1].forEach((sd) => blob(c, ellP(sd * 60, -70, 26, 20, 14), G.g2)); c.restore();
    }
  });

  // 6. from far away the head vanishes (binoculars)
  scene(PS(11), (c, t, tq) => {
    const th = P(11, 'head'), tv = P(11, 'vanishes');
    bg(c, 'far');
    const hd = tq < th ? 0 : eio(seg(tq, th, th + 0.3));
    const X = 500, GF = 1150, s = 0.42;
    ostrich(c, { x: X, y: GF + 50, s, tq, br: breathe(tq), hd, look: [0.6, 0.5] });
    // a low ridge in front hides the lowered head
    blob(c, [[300, GF + 70], [420, GF + 28], [560, GF + 18], [700, GF + 30], [820, GF + 72], [820, GF + 150], [300, GF + 150]], G.g4, 3, false);
    c.fillStyle = G.g4; c.fillRect(0, GF + 80, W0, 400);
    c.drawImage(cache('binoc', BG.binoc), 0, 0);
    c.lineWidth = 10; c.strokeStyle = G.ink; [[365, 1040], [715, 1040]].forEach(([x, y]) => { c.beginPath(); c.arc(x, y, 330, 0, TAU); c.stroke(); });
    card(c, 'FROM FAR AWAY', 540, 380, 56, t, P(11, 'far'));
    title(c, 'GONE?!', 540, 1560, 150, t, tv);
  });

  // 7. danger: flop flat and become a lumpy bush
  scene(PS(12), (c, t, tq) => {
    const td = P(12, 'dangers'), tc = P(12, 'cant'), tf = P(13, 'flop'), tfl = P(13, 'flat'), tn = P(13, 'neck'), tl = P(14, 'lumpy'), tb = P(14, 'bush');
    const z = 1 + 0.1 * eio(seg(t, tf - 0.2, tf + 0.3));
    withCam(c, 420, GY, z, () => {
      bg(c, 'danger');
      const br = breathe(tq);
      grass(c, 110, GY + 60, 1.2, br, 4);
      // eyes in the grass
      if (tq >= td && tq < tb + 0.5) { const lx = tq < tf ? 0.7 : Math.sin(tq * TAU) * 0.8, bl = (tq % 1.3) < 0.1 ? 1 : 0; pieEye(c, 70, GY - 130, 20, 26, lx, 0, bl, G.g6); pieEye(c, 108, GY - 132, 20, 26, lx, 0, bl, G.g6); pieEye(c, 190, GY - 60, 16, 21, lx, 0.3, bl, G.g6); pieEye(c, 220, GY - 62, 16, 21, lx, 0.3, bl, G.g6); }
      grass(c, 1010, GY + 60, 0.8, br, 9);
      let flat = 0, crouch = 0;
      if (tq >= tf - 0.3 && tq < tf) crouch = seg(tq, tf - 0.3, tf);
      if (tq >= tf) flat = Math.min(1, eo(seg(tq, tf, tfl)) * (1 + 0.12 * Math.exp(-(tq - tfl) * 8) * Math.cos((tq - tfl) * 30)));
      const scared = tq >= td && tq < tf;
      const look = tq < tc ? [-0.7, 0] : tq < tf ? [Math.sin(tq * TAU * 2) > 0 ? -0.8 : 0.8, 0] : [-0.8, 0.2];
      const R = ostrich(c, { x: 330, y: GY, s: 1.0, tq, br: scared ? 0.4 * Math.sin(tq * TAU * 6) : br, amp: scared ? 1.5 : 1, flat: clamp(flat, 0, 1.1), crouch, look, brow: scared ? 'worried' : null, arm: scared ? 'up' : 'rest' });
      if (scared) [0, 1].forEach((i) => sweat(c, R.hp[0] - 60, R.hp[1] - 80, tq, i));
      puffs(c, R.bc[0], GY - 10, tq, tfl, 8, 70, 240);
      // the flat bird sprouts leaves: a lumpy bush
      const lk = back(seg(tq, tl, tl + 0.3));
      if (lk > 0) for (let i = 0; i < 6; i++) { const px = R.bc[0] - 170 + i * 68, py = R.bc[1] - 72 - (i % 2) * 18; blob(c, ellP(px, py, 30 * lk, 40 * lk, 12, (a) => 1 + 0.15 * Math.sin(a * 3)), G.g5, LW * 0.8); }
    });
    title(c, 'DANGER!', 540, 360, 150, t, td, tf);
    card(c, 'NECK FLAT ON THE DIRT', 540, 1580, 50, t, tn);
    title(c, 'LUMPY', 540, 340, 150, t, tl);
    title(c, 'BUSH', 540, 500, 150, t, tb);
  });

  // 8. but mostly they run: trucking pan
  scene(PS(15), (c, t, tq) => {
    const tm = P(15, 'mostly'), tr = P(15, 'run'), t7 = P(16, 'seventy'), tf = P(17, 'fastest');
    const runK = seg(t, tr - 0.1, tr + 0.4), speed = 2600;
    const off = t < tr - 0.1 ? 0 : (eo(runK) * 0.2 + Math.max(0, t - (tr + 0.4))) * speed + eio(runK) * 0.3 * speed * 0.4;
    const L = cache('run', BG.run), ox = -(off % (W0)) ;
    c.drawImage(L, ox, 0); c.drawImage(L, ox + W0 * 2, 0);
    finishPaintLive(c);
    const running = tq >= tr;
    const ant = tq >= tr - 0.35 && tq < tr ? seg(tq, tr - 0.35, tr) : 0;
    const br = breathe(tq);
    // speed lines and dust
    if (running) { const r = H.rng(Math.floor(tq * 12)); c.strokeStyle = G.ink; c.lineWidth = 6; c.lineCap = 'round'; for (let i = 0; i < 9; i++) { const y = 900 + r() * 520, x = r.range(-60, 260), w = r.range(120, 300); c.beginPath(); c.moveTo(x, y); c.lineTo(x + w, y); c.stroke(); } for (let i = 0; i < 4; i++) { const age = ((tq * 3 + i / 4) % 1), px = 300 - age * 420, rr = 20 + age * 50; blob(c, ellP(px, GY - 20 - age * 40, rr, rr * 0.8, 12), G.g1, LW * 0.7); } }
    const R = ostrich(c, { x: running ? 500 : 470, y: GY, s: 1.1, tq, br: running ? 0 : br, run: running, runPh: tq * TAU * 3, bob: running ? -Math.abs(Math.sin(tq * TAU * 3)) * 26 : 0, crouch: ant, rot: running ? 0.12 : 0, look: running ? [0.9, 0] : [-0.4, -0.4], arm: running ? 'back' : 'out', hpOff: running ? [40, 60] : [0, 0], headTilt: running ? 0.15 : 0 });
    if (!running && tq >= tm) title(c, '?', R.hp[0] + 20, R.hp[1] - 120, 150, t, tm);
    title(c, 'BUT MOSTLY...', 540, 360, 120, t, PS(15), tr);
    title(c, 'RUN!', 540, 380, 200, t, tr, t7);
    title(c, '70 KM/H', 540, 380, 180, t, t7, tf);
    caps(c, '(43 MPH)', 540, 520, 84, t, P(16, 'hour'), tf);
    title(c, 'FASTEST', 540, 360, 160, t, tf);
    caps(c, 'BIRD ON TWO LEGS', 540, 500, 72, t, P(17, 'bird'));
  });
  function finishPaintLive(c) { const vg = c.createRadialGradient(W0 / 2, H0 / 2, 600, W0 / 2, H0 / 2, 1250); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.28)'); c.fillStyle = vg; c.fillRect(0, 0, W0, H0); }

  // 9. loop back: head down again, the question
  scene(PS(18), (c, t, tq) => {
    const t0 = PS(18), thd = P(18, 'hiding'), tw = P(19, 'whats');
    const X = 300, s = 1.05, mx = X + s * 260;
    const hd = tq < thd - 0.2 ? 0 : eio(seg(tq, thd - 0.2, thd + 0.1));
    bg(c, 'desert');
    if (hd < 0.5) mound(c, mx, GY + 6, 1, true);
    clipAbove(c, GY + 4, () => ostrich(c, { x: X, y: GY, s, tq, br: breathe(tq), hd, sand: 0.6, arm: hd > 0.5 ? 'up' : 'rest', wag: hd > 0.5 ? 1 : 0, look: [0.6, 0.4], rot: hd > 0.8 ? 0.03 * Math.sin(tq * TAU * 2) : 0 }));
    if (hd >= 0.5) mound(c, mx, GY + 6, 1, false);
    if (hd >= 0.5) egg(c, mx + 180, GY - 50, 0.8, 0.3 + 0.2 * Math.sin(tq * TAU), breathe(tq));
    puffs(c, mx, GY - 10, tq, thd, 6, 91);
    title(c, 'HIDING?', 540, 400, 150, t, P(18, 'looks'), tw);
    title(c, "WHAT'S IT", 540, 330, 130, t, tw);
    title(c, 'REALLY DOING?', 540, 480, 120, t, P(19, 'really'));
    // iris closes in on the bird at the end
    const ir = seg(t, PE(19) + 0.2, DURATION - 0.05);
    if (ir > 0) { const R = lerp(1300, 360, eio(ir)); c.save(); c.beginPath(); c.rect(0, 0, W0, H0); c.arc(mx - 60, GY - 200, R, 0, TAU); c.fillStyle = '#0b0a09'; c.fill('evenodd'); c.restore(); }
  });

  // ---------------- composite: film gate + damage ----------------
  const CUTS = SC.map((s) => s.t0).slice(1);
  function sceneAt(t) { let k = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].t0) k = i; return k; }
  function frame(ctx, t, clean) {
    const f = Math.floor(t * 24 + 1e-6), tq = Math.floor(t * 12 + 1e-6) / 12;
    BOIL = Math.floor(t * 12 + 1e-6) % 3; TQ = tq;
    const L = cache('scene', () => H.layer(W0, H0)), c = L.getContext('2d');
    c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; c.filter = 'none';
    c.fillStyle = G.g3; c.fillRect(0, 0, W0, H0);
    const k = sceneAt(t); SC[k].fn(c, t, tq);
    // gate
    const gx = 22, gy = 22, gw = W0 - 44, gh = H0 - 44, gr = 40;
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W0, H0);
    const cutJump = CUTS.some((ct) => t >= ct && t < ct + 2 / 24) ? 7 : 0;
    const wx = clean ? 0 : (vnoise(t * 1.3) - 0.5) * 2.4 + (hash(f * 7.1) > 0.985 ? (hash(f) - 0.5) * 5 : 0);
    const wy = clean ? 0 : (vnoise(t * 1.1 + 40) - 0.5) * 2.6 + (hash(f * 3.3) > 0.985 ? (hash(f + 9) - 0.5) * 6 : 0) + cutJump;
    ctx.save();
    ctx.beginPath(); rrect(ctx, gx, gy, gw, gh, gr); ctx.clip();
    ctx.filter = 'blur(0.55px) contrast(1.13)'; ctx.drawImage(L, wx, wy); ctx.filter = 'none';
    if (!clean) {
      const fl = (hash(f * 1.618) - 0.5) * 0.08 + (vnoise(t * 3) - 0.5) * 0.04;
      ctx.fillStyle = fl > 0 ? `rgba(255,252,240,${fl})` : `rgba(0,0,0,${-fl})`; ctx.fillRect(gx, gy, gw, gh);
      const sg = Math.floor(t * 2.3);
      for (let i = 0; i < 3; i++) {
        if (hash(sg * 13.7 + i * 3.1) < 0.45) continue;
        const sx = gx + hash(sg * 5.3 + i) * gw + Math.sin(t * 7 + i) * 6, light = hash(sg + i * 9) > 0.4;
        ctx.strokeStyle = light ? 'rgba(245,242,230,.5)' : 'rgba(10,10,8,.45)'; ctx.lineWidth = 0.9 + hash(sg * 2 + i) * 1.6;
        const y0 = hash(sg * 3 + i) * gh * 0.5; ctx.beginPath(); ctx.moveTo(sx, y0); ctx.lineTo(sx + (hash(f + i) - 0.5) * 3, y0 + gh * (0.4 + hash(sg + i * 5) * 0.6)); ctx.stroke();
      }
      const nd = 3 + Math.floor(hash(f * 2.7) * 6);
      for (let i = 0; i < nd; i++) { const dx = gx + hash(f * 11.1 + i * 1.7) * gw, dy = gy + hash(f * 17.3 + i * 2.9) * gh, r = 1 + hash(f + i * 4.4) * 3.4, dark = hash(f * 1.3 + i) > 0.35; ctx.fillStyle = dark ? 'rgba(12,11,10,.75)' : 'rgba(250,248,240,.7)'; ctx.beginPath(); ctx.ellipse(dx, dy, r * (1 + hash(i + f) * 1.5), r, hash(i * 3 + f) * 3, 0, TAU); ctx.fill(); }
      if (hash(Math.floor(t * 1.5) * 9.9) > 0.82) { const s0 = Math.floor(t * 1.5), hx = gx + hash(s0 * 2.2) * gw, hy = gy + hash(s0 * 4.4) * gh; ctx.strokeStyle = 'rgba(15,14,12,.6)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(hx, hy); for (let i = 1; i <= 8; i++) ctx.lineTo(hx + i * 8 + Math.sin(i * 1.3 + s0) * 9, hy + Math.sin(i * 0.9 + s0 * 2) * 11 + i * 3); ctx.stroke(); }
    }
    const vg = ctx.createRadialGradient(540, 960, 520, 540, 960, 1150); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(0.7, 'rgba(0,0,0,.16)'); vg.addColorStop(1, 'rgba(0,0,0,.55)'); ctx.fillStyle = vg; ctx.fillRect(gx, gy, gw, gh);
    ctx.strokeStyle = 'rgba(0,0,0,.55)'; ctx.lineWidth = 16; ctx.filter = 'blur(6px)'; ctx.beginPath(); rrect(ctx, gx, gy, gw, gh, gr); ctx.stroke(); ctx.filter = 'none';
    ctx.restore();
  }
  function rrect(c, x, y, w, h, r) { c.moveTo(x + r, y); c.lineTo(x + w - r, y); c.quadraticCurveTo(x + w, y, x + w, y + r); c.lineTo(x + w, y + h - r); c.quadraticCurveTo(x + w, y + h, x + w - r, y + h); c.lineTo(x + r, y + h); c.quadraticCurveTo(x, y + h, x, y + h - r); c.lineTo(x, y + r); c.quadraticCurveTo(x, y, x + r, y); c.closePath(); }
  function explainer(ctx, Wd, Hd, t) { ctx.save(); ctx.scale(Wd / W0, Hd / H0); frame(ctx, t, false); ctx.restore(); }

  // ---------------- sound: hot-dance-band foley, Mickey-moused ----------------
  function scoreSound(k) {
    const wood = (t, g = 1, f = 900, p = 0) => k.play('tock', t, { f, gain: 0.3 * g, pan: p });
    const slide = (t, f0, f1, d = 0.5, g = 1) => k.tone(t, { f: [[0, f0], [d, f1]], type: 'sine', dur: d + 0.05, gain: 0.09 * g });
    const boing = (t, g = 1) => { k.tone(t, { f: [[0, 180], [0.08, 420], [0.3, 260]], type: 'triangle', dur: 0.4, gain: 0.12 * g }); k.tone(t, { f: [[0, 360], [0.08, 840], [0.3, 520]], type: 'sine', dur: 0.3, gain: 0.04 * g }); };
    const cym = (t, g = 1) => k.noise(t, { dur: 0.9, filter: 'highpass', f: 5000, gain: 0.12 * g, verb: 0.3 });
    const razz = (t, g = 1) => k.tone(t, { f: [[0, 120], [0.35, 70]], type: 'sawtooth', dur: 0.45, gain: 0.08 * g, filter: 'lowpass', f2: 900 });
    const plunk = (t, f, g = 1) => k.tone(t, { f, type: 'triangle', dur: 0.22, gain: 0.05 * g, minor: true });
    // oom-pah band bed (tuba on 1 & 3, banjo chord on 2 & 4), with stops before gags
    const roots = [['F2', ['A3', 'C4', 'F4']], ['C3', ['G3', 'C4', 'E4']], ['F2', ['A3', 'C4', 'F4']], ['C3', ['Bb3', 'C4', 'E4']]];
    const stops = [[P(13, 'flop') - 0.4, P(13, 'flat') + 0.1], [PS(6) - 0.05, PS(6) + 0.3], [PE(19) + 0.1, DURATION]];
    for (let bt = 0, i = 0; bt < DURATION - 0.3; bt += 0.5, i++) {
      if (stops.some(([a, b]) => bt >= a && bt < b)) continue;
      const [r, ch] = roots[Math.floor(i / 4) % 4];
      if (i % 2 === 0) k.tone(bt, { f: r, type: 'triangle', dur: 0.3, gain: 0.07, minor: true });
      else ch.forEach((n, j) => plunk(bt + j * 0.008, n, 0.8));
    }
    k.noise(0, { dur: DURATION, color: 'pink', filter: 'highpass', f: 3000, gain: 0.012, minor: true, a: 0.3, hold: DURATION - 0.6 });
    // cuts
    SC.slice(1).forEach((s) => { wood(s.t0, 0.8); });
    // 0 hook
    k.play('tick', 0.05, { gain: 0.3 });
    for (let x = 0.3; x < P(0, 'never') - 0.25; x += 0.25) wood(x, 0.4, 700 + (x * 10 % 2) * 200);
    slide(P(0, 'never') - 0.25, 300, 1400, 0.25); k.play('pop', P(0, 'never'), { f: 420, gain: 0.6 }); cym(P(0, 'never') + 0.05, 0.8);
    for (let i = 0; i < 6; i++) wood(P(0, 'never') + 0.4 + i * 0.18, 0.5, i % 2 ? 1100 : 800, i % 2 ? 0.4 : -0.4);
    slide(P(1, 'seen') - 0.15, 1200, 300, 0.25); k.play('thud', P(1, 'seen') + 0.1, { gain: 0.4 });
    k.play('pop', P(1, 'why'), { f: 520, gain: 0.5 }); boing(P(1, 'why') + 0.05);
    // 1 Rome
    k.play('paper', PS(2), { dur: 0.6, gain: 0.5 }); k.play('ding', P(2, 'pliny'), { f: 'C6', gain: 0.25 });
    for (let x = P(2, 'elder') + 0.3; x < PE(3); x += 0.16) k.play('stroke', x, { gain: 0.25, minor: true });
    k.play('stamp', P(3, 'two'), { gain: 0.6 });
    // 2 bush
    k.play('swish', P(4, 'hide'), { gain: 0.4 }); boing(P(4, 'bushes')); k.play('paper', P(4, 'bushes'), { dur: 0.3, gain: 0.4 });
    k.play('sparkle', P(5, 'nobody'), { n: 6, gain: 0.4 }); razz(PE(5) - 0.2, 0.8);
    // 3 shade
    k.play('roller', PS(6), { dur: 0.35, gain: 0.5 }); cym(P(6, 'really'), 0.6); k.play('roller', PS(7) - 0.28, { dur: 0.28, gain: 0.4 });
    // 4 nest
    for (let x = P(7, 'dig'); x < P(7, 'hole') + 0.5; x += 0.125) k.noise(x, { dur: 0.08, color: 'brown', filter: 'bandpass', f: 600, q: 1, gain: 0.25 });
    [0, 1, 2].forEach((i) => { const td = P(8, 'eggs') + i * 0.16; slide(td - 0.3, 1400 - i * 150, 500 - i * 50, 0.28, 0.6); k.play('pop', td, { f: 300 + i * 60, gain: 0.5 }); });
    // 5 eggs
    k.play('bell', P(9, 'several'), { gain: 0.25 }); for (let x = P(9, 'times'); x < PE(10); x += 0.25) k.play('tick', x, { gain: 0.14, minor: true });
    k.play('blip', P(9, 'mom'), { f: 'E5', gain: 0.4 }); k.play('blip', P(9, 'dad'), { f: 'C5', gain: 0.4 });
    [P(10, 'roll'), P(10, 'egg'), P(10, 'beak')].forEach((n, i) => { wood(n, 0.7, 600 + i * 120); k.tone(n + 0.05, { f: [[0, 300], [0.25, 200]], type: 'triangle', dur: 0.3, gain: 0.06 }); });
    // 6 far
    k.play('click', PS(11), { gain: 0.4 }); slide(P(11, 'head'), 900, 250, 0.35); k.play('pop', P(11, 'vanishes'), { f: 700, gain: 0.4 }); razz(P(11, 'vanishes') + 0.2, 0.5);
    // 7 danger
    k.play('error', P(12, 'dangers'), { gain: 0.3 }); for (let x = P(12, 'dangers'); x < P(13, 'flop') - 0.4; x += 0.09) k.noise(x, { dur: 0.06, filter: 'bandpass', f: 1800, q: 2, gain: 0.08, minor: true });
    slide(P(13, 'flop') - 0.3, 1500, 200, 0.3); k.play('impact', P(13, 'flat'), { gain: 0.6 });
    k.play('sparkle', P(14, 'lumpy'), { n: 5, gain: 0.3 }); boing(P(14, 'bush'), 0.8);
    // 8 run
    wood(P(15, 'mostly'), 0.6); slide(P(15, 'run') - 0.35, 300, 1300, 0.3); k.play('whoosh', P(15, 'run'), { dur: 0.6, gain: 0.5 });
    for (let x = P(15, 'run'); x < PS(18) - 0.1; x += 1 / 6) wood(x, 0.35, (Math.round(x * 6) % 2) ? 1000 : 750, (Math.round(x * 6) % 2) ? 0.3 : -0.3);
    cym(P(16, 'seventy'), 0.7); k.play('stamp', P(16, 'seventy'), { gain: 0.5 }); k.play('success', P(17, 'fastest'), { gain: 0.3 });
    // 9 loop
    slide(P(18, 'hiding') - 0.2, 1100, 300, 0.3); k.play('thud', P(18, 'hiding') + 0.1, { gain: 0.35 });
    k.play('pop', P(19, 'whats'), { f: 500, gain: 0.4 }); boing(P(19, 'doing'));
    ['C5', 'E5', 'G5', 'C6'].forEach((f, i) => k.play('ding', PE(19) + 0.25 + i * 0.1, { f, gain: 0.22 }));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0); TQ = 0.25; frame(ctx, 2.0, true); ctx.restore();
  }
  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
