// ================= Claymation Set, 9:16 1080x1920: "Why does popcorn pop?" =================
// Short. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Clay stop-motion sets on twos (12 fps): every piece is a baked plasticine lump popped on with squash-and-stretch,
// knocked off the table at the end of its scene; the comb scenes continue on one set while it fills, dries and caps.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  // BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael)
  const PH = [
    {"s": 0.25, "e": 2.97, "text": "Your popcorn explodes at about 4 times,", "words": [["your", 0.25], ["popcorn", 0.59], ["explodes", 1.18], ["at", 1.86], ["about", 2.03], ["4", 2.46], ["times", 2.54]]},
    {"s": 3.27, "e": 4.73, "text": "your car tire's pressure.", "words": [["your", 3.27], ["car", 3.56], ["tires", 3.78], ["pressure", 4.14]]},
    {"s": 5.28, "e": 7.19, "text": "Every kernel hides a bit of water,", "words": [["every", 5.28], ["kernel", 5.63], ["hides", 6.06], ["a", 6.41], ["bit", 6.48], ["of", 6.69], ["water", 6.84]]},
    {"s": 7.49, "e": 8.87, "text": "about 14 percent,", "words": [["about", 7.49], ["14", 7.98], ["percent", 8.18]]},
    {"s": 9.17, "e": 10.52, "text": "packed in soft starch,", "words": [["packed", 9.17], ["in", 9.62], ["soft", 9.77], ["starch", 10.07]]},
    {"s": 10.82, "e": 13.14, "text": "locked inside a hard shell called the hull.", "words": [["locked", 10.82], ["inside", 11.22], ["a", 11.61], ["hard", 11.68], ["shell", 11.94], ["called", 12.28], ["the", 12.67], ["hull", 12.87]]},
    {"s": 13.69, "e": 16.1, "text": "Heat it up, and that water turns to steam.", "words": [["heat", 13.69], ["it", 13.99], ["up", 14.14], ["and", 14.29], ["that", 14.52], ["water", 14.82], ["turns", 15.2], ["to", 15.57], ["steam", 15.73]]},
    {"s": 16.65, "e": 18.16, "text": "But the hull barely leaks,", "words": [["but", 16.65], ["the", 16.87], ["hull", 17.08], ["barely", 17.37], ["leaks", 17.8]]},
    {"s": 18.46, "e": 20.22, "text": "so steam has nowhere to go.", "words": [["so", 18.46], ["steam", 18.63], ["has", 19.05], ["nowhere", 19.3], ["to", 19.89], ["go", 20.05]]},
    {"s": 20.77, "e": 24.84, "text": "Pressure climbs to about 135 pounds per square inch.", "words": [["pressure", 20.77], ["climbs", 21.53], ["to", 22.1], ["about", 22.28], ["135", 22.76], ["pounds", 23.04], ["per", 23.61], ["square", 23.89], ["inch", 24.46]]},
    {"s": 25.39, "e": 28.36, "text": "Then, at around 180 degrees Celsius,", "words": [["then", 25.39], ["at", 25.8], ["around", 26.0], ["180", 26.62], ["degrees", 26.93], ["celsius", 27.65]]},
    {"s": 28.66, "e": 29.7, "text": "the hull cracks.", "words": [["the", 28.66], ["hull", 28.9], ["cracks", 29.22]]},
    {"s": 30.25, "e": 32.68, "text": "The starch blasts out and puffs into foam,", "words": [["the", 30.25], ["starch", 30.46], ["blasts", 30.89], ["out", 31.32], ["and", 31.54], ["puffs", 31.75], ["into", 32.11], ["foam", 32.4]]},
    {"s": 32.98, "e": 34.55, "text": "up to 40 times bigger.", "words": [["up", 32.98], ["to", 33.17], ["40", 33.35], ["times", 33.54], ["bigger", 34.0]]},
    {"s": 35.1, "e": 36.24, "text": "And the pop you hear?", "words": [["and", 35.1], ["the", 35.31], ["pop", 35.53], ["you", 35.74], ["hear", 35.96]]},
    {"s": 36.79, "e": 38.27, "text": "That's not the shell breaking.", "words": [["thats", 36.79], ["not", 37.1], ["the", 37.28], ["shell", 37.47], ["breaking", 37.77]]},
    {"s": 38.82, "e": 40.25, "text": "It's the steam escaping.", "words": [["its", 38.82], ["the", 39.04], ["steam", 39.27], ["escaping", 39.65]]},
    {"s": 40.8, "e": 43.08, "text": "The first bit of starch forms a little leg,", "words": [["the", 40.8], ["first", 41.01], ["bit", 41.34], ["of", 41.54], ["starch", 41.68], ["forms", 42.08], ["a", 42.41], ["little", 42.48], ["leg", 42.88]]},
    {"s": 43.38, "e": 45.12, "text": "flinging the kernel into the air.", "words": [["flinging", 43.38], ["the", 43.9], ["kernel", 44.09], ["into", 44.47], ["the", 44.73], ["air", 44.92]]},
    {"s": 45.67, "e": 48.62, "text": "Those duds in your bowl were too dry to build pressure.", "words": [["those", 45.67], ["duds", 46.0], ["in", 46.27], ["your", 46.41], ["bowl", 46.67], ["were", 46.94], ["too", 47.21], ["dry", 47.41], ["to", 47.61], ["build", 47.75], ["pressure", 48.08]]},
    {"s": 49.17, "e": 51.57, "text": "So, do you eat the ones that didn't explode?", "words": [["so", 49.17], ["do", 49.32], ["you", 49.46], ["eat", 49.68], ["the", 49.9], ["ones", 50.12], ["that", 50.41], ["didnt", 50.7], ["explode", 51.06]]}
  ];
  const BEATS = PH.map((p, i) => ({ id: 'p' + i, s: p.s, e: p.e, text: p.text, w: Object.fromEntries(p.words.slice().reverse()) }));
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const at = (i, w) => T(i, w) - 0.12;
  const PS = (i) => BEATS[i].s, PE = (i) => BEATS[i].e;
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;

  // ---------- clay engine (from the reference: baked lit plasticine sprites) ----------
  const nrm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const LIGHT = nrm([-0.5, -0.66, 0.58]);
  const HALF = nrm([LIGHT[0], LIGHT[1], LIGHT[2] + 1]);
  const SEQ = { pop: [[0.5, 0.42], [1.16, 0.8], [0.9, 1.14], [1.04, 0.97], [1, 1]] };
  const CLX = {};
  const cnz = () => CLX.nz || (CLX.nz = H.makeNoise(8));
  const bake = (key, w, h, o) => {
    if (CLX[key]) return CLX[key];
    const nz = cnz(), R = o.R || 14, pad = Math.ceil(R * 2 + 6), ox = o.ox || 0, oy = o.oy || 0;
    const W2 = Math.ceil(w + pad * 2), H2 = Math.ceil(h + pad * 2);
    const M = H.layer(W2, H2), mc = M.getContext('2d', { willReadFrequently: true });
    mc.translate(pad, pad); mc.fillStyle = '#fff'; mc.strokeStyle = '#fff'; o.draw(mc);
    const ds = 3, sw = Math.ceil(W2 / ds), sh = Math.ceil(H2 / ds);
    const Bs = H.layer(sw, sh), bsc = Bs.getContext('2d'); bsc.filter = `blur(${R / ds}px)`; bsc.drawImage(M, 0, 0, sw, sh);
    const B = H.layer(W2, H2), bc = B.getContext('2d', { willReadFrequently: true }); bc.drawImage(Bs, 0, 0, W2, H2);
    const md = mc.getImageData(0, 0, W2, H2).data, bd = bc.getImageData(0, 0, W2, H2).data;
    const Hh = new Float32Array(W2 * H2), A = new Float32Array(W2 * H2), lump = o.lump ?? 1.2, seed = o.seed || 1;
    for (let y = 0; y < H2; y++) for (let x = 0; x < W2; x++) {
      const i = y * W2 + x, a = bd[i * 4 + 3] / 255, ap = H.clamp((a - 0.42) / 0.58);
      A[i] = ap;
      if (!md[i * 4 + 3]) continue;
      const X = x + ox, Y = y + oy;
      Hh[i] = Math.sqrt(1 - (1 - ap) * (1 - ap)) * R * (o.dome ?? 1.1) + nz.n2(X * 0.025 + seed, Y * 0.025) * lump + nz.n2(X * 0.11 + (o.boil || 0) * 1.7, Y * 0.11 + seed) * 0.35;
    }
    (o.fps || []).forEach((f) => {
      const R2 = f[2], ang = f[3], ca = Math.cos(ang), sa = Math.sin(ang);
      for (let y = Math.max(0, Math.floor(f[1] + pad - R2)); y <= Math.min(H2 - 1, f[1] + pad + R2); y++) for (let x = Math.max(0, Math.floor(f[0] + pad - R2)); x <= Math.min(W2 - 1, f[0] + pad + R2); x++) {
        const dx0 = x - pad - f[0], dy0 = y - pad - f[1], dx = dx0 * ca + dy0 * sa, dy = (-dx0 * sa + dy0 * ca) * 1.45, d = Math.hypot(dx, dy);
        if (d >= R2) continue;
        Hh[y * W2 + x] += Math.sin(d * 1.6 + nz.n2(dx * 0.06 + ang, dy * 0.06) * 2.5) * 0.22 * Math.pow(1 - d / R2, 1.5) * H.smooth(-0.6, 0.4, Math.cos(Math.atan2(dy, dx) - ang * 2));
      }
    });
    (o.marks || []).forEach((m) => {
      const [ax, ay, bx, by] = m.map((v, i) => (i < 4 ? v + pad : v)), vx = bx - ax, vy = by - ay, L2 = vx * vx + vy * vy || 1, dep = m[4] || 1.2;
      for (let y = Math.max(0, Math.floor(Math.min(ay, by) - 9)); y <= Math.min(H2 - 1, Math.max(ay, by) + 9); y++) for (let x = Math.max(0, Math.floor(Math.min(ax, bx) - 9)); x <= Math.min(W2 - 1, Math.max(ax, bx) + 9); x++) {
        const u = H.clamp(((x - ax) * vx + (y - ay) * vy) / L2), d = Math.hypot(x - ax - vx * u, y - ay - vy * u);
        if (d > 8) continue;
        Hh[y * W2 + x] += Math.sin(Math.PI * Math.min(1, u * 1.05 + 0.02)) * (-dep * Math.exp((-d * d) / (o.markW || 3.2)) + 0.4 * dep * Math.exp(-((d - 3.4) ** 2) / 2));
      }
    });
    const out = mc.createImageData(W2, H2), od = out.data, base = H.hex(o.color), sss = o.sss || [1.12, 0.92, 0.85];
    for (let y = 1; y < H2 - 1; y++) for (let x = 1; x < W2 - 1; x++) {
      const i = y * W2 + x, ma = md[i * 4 + 3];
      if (!ma) continue;
      const n = nrm([-(Hh[i + 1] - Hh[i - 1]) * 0.5, -(Hh[i + W2] - Hh[i - W2]) * 0.5, 1]);
      const diff = H.clamp((n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2] + 0.42) / 1.42);
      const spec = Math.pow(Math.max(0, n[0] * HALF[0] + n[1] * HALF[1] + n[2] * HALF[2]), 26) * (o.spec ?? 0.3);
      const k = (0.3 + 0.86 * diff) * (0.72 + 0.28 * Math.min(1, A[i] * 1.4)), sh2 = 1 - diff, k4 = i * 4;
      od[k4] = Math.min(255, base[0] * k * (1 + (sss[0] - 1) * sh2) + spec * 255);
      od[k4 + 1] = Math.min(255, base[1] * k * (1 + (sss[1] - 1) * sh2) + spec * 245);
      od[k4 + 2] = Math.min(255, base[2] * k * (1 + (sss[2] - 1) * sh2) + spec * 230);
      od[k4 + 3] = ma;
    }
    const O = H.layer(W2, H2); O.getContext('2d').putImageData(out, 0, 0); O.pad = pad; O.w = w; O.h = h;
    return (CLX[key] = O);
  };
  const prn = (seed, w, h, n, R) => { const r = H.rng(seed); return Array.from({ length: n }, () => [r.range(w * 0.15, w * 0.85), r.range(h * 0.15, h * 0.85), R * r.range(0.7, 1.2), r() * 50]); };
  const FR = (px) => `700 ${px}px "Fredoka"`;
  const mctx = () => CLX.m || (CLX.m = H.layer(4, 4).getContext('2d'));
  const glyph = (ch, px, col) => {
    const c = mctx(); c.font = FR(px); const w = Math.ceil(c.measureText(ch).width) + 4, h = Math.ceil(px * 1.05);
    return bake('g' + ch + px + col, w, h, { R: Math.max(4, px * 0.075), dome: 1.3, lump: 0.8, seed: ch.charCodeAt(0), color: col, draw: (x) => { x.font = FR(px); x.fillText(ch, 2, px * 0.82); }, fps: px > 60 ? prn(ch.charCodeAt(0) + px, w, h, 1, px * 0.18) : [] });
  };
  const PAL = ['#f2c14e', '#f07b5a', '#f6efe3', '#ef8fb0', '#a8dd8a', '#7fd0e0'];
  const C = { cream: '#f6efe3', yellow: '#f2c14e', coral: '#f07b5a', pink: '#ef8fb0', green: '#a8dd8a', cyan: '#7fd0e0', red: '#d9473b', dkgreen: '#4f9a52', ink: '#2e3760', brick: '#c76b3c', stone: '#d8cfbf', conc: '#b9b1a3', wood: '#8a5a3a', skin: '#e8a77c', smoke: '#cfc8c0', hot: '#f07b3a', flame: '#f6c14e', soot: '#2a140e', blue: '#5fa7d6' };

  // ---------- per-frame state ----------
  let TQ = 0, FRN = 0, X = 0, ctxG = null, REC = null;   // TQ: time on twos; X: exit time of the current scene
  const place = (ctx, spr, x, y, o = {}) => {
    if (!spr || REC) return;
    const ax = o.ax ?? spr.w / 2, ay = o.ay ?? spr.h;
    ctx.save();
    if (o.alpha != null) ctx.globalAlpha = o.alpha;
    if (o.shadow !== false) { const s = o.shadow || {}; ctx.shadowColor = `rgba(40,20,10,${s.a ?? 0.4})`; ctx.shadowBlur = s.blur ?? 10; ctx.shadowOffsetX = s.dx ?? 6; ctx.shadowOffsetY = s.dy ?? 7; }
    ctx.translate(x + ax, y + ay); if (o.rot) ctx.rotate(o.rot); ctx.scale(o.sx ?? 1, o.sy ?? 1); ctx.translate(-ax, -ay);
    ctx.drawImage(spr, -spr.pad, -spr.pad); ctx.restore();
  };
  // stepped life of a piece: pops on (squash & stretch), then leaves by falling / sliding
  const life = (st, en, seed = 0, mode = 'fall') => {
    if (TQ + 1e-6 < st) return null;
    const k = Math.floor((TQ - st) * 12 + 1e-6), e = SEQ.pop[Math.min(4, k >> 1)];
    let sx = e[0], sy = e[1], dx = 0, dy = 0, rot = 0;
    if (en != null && TQ >= en) {
      const d = TQ - en + 1 / 12;
      if (mode === 'fall') { dy = 2400 * d * d; rot = ((((seed * 37) % 10) / 10) - 0.5) * d * 5; }
      else if (mode === 'right') dx = 2600 * d * d;
      else if (mode === 'left') dx = -2600 * d * d;
      else if (mode === 'up') dy = -2400 * d * d;
      if (Math.abs(dy) > 950 || Math.abs(dx) > 1500) return null;
    }
    return { sx, sy, dx, dy, rot };
  };
  const rec = (e) => { if (REC) REC.push(e); };
  const wordW = (str, px) => { const c = mctx(); c.font = FR(px); let w = 0; for (const ch of str) w += c.measureText(ch).width + px * 0.04; return w; };
  // pressed clay letters, one per frame step
  const word = (str, x, y, px, st, en, mode = 'fall', cols = PAL, step = 1 / 24, colOff = 0, hit) => {
    const c = mctx(); c.font = FR(px);
    let cx = x, i = 0;
    if (REC) { rec({ k: 'word', t: st, n: [...str].filter((ch) => ch !== ' ').length, step, x, w: wordW(str, px), px, hit }); if (en != null) rec({ k: 'exit', t: en, mode, x, n: str.length, px }); }
    for (const ch of str) {
      const w = c.measureText(ch).width;
      if (ch !== ' ') {
        const L = life(st + i * step, en == null ? null : en + (mode === 'fall' ? i * (1 / 48) : 0), i + colOff, mode);
        if (L) {
          const jr = H.rng(ch.charCodeAt(0) * 7 + i + colOff);
          const col = typeof cols === 'string' ? cols : cols[(i + colOff) % cols.length];
          place(ctxG, glyph(ch, px, col), cx + L.dx, y - px * 0.82 + L.dy, { sx: L.sx, sy: L.sy, rot: (jr() - 0.5) * 0.14 + L.rot, shadow: { blur: px * 0.09, dx: px * 0.05, dy: px * 0.07, a: 0.45 } });
        }
      }
      cx += w + px * 0.04; i++;
    }
    return cx;
  };
  const wordC = (str, cx, y, px, st, en, mode, cols, step, colOff, hit) => word(str, cx - wordW(str, px) / 2, y, px, st, en, mode, cols, step, colOff, hit);
  // contact AO under anything resting on the table
  const contact = (cx, cy, rx, ry, a = 0.45) => {
    if (REC) return;
    const AO = CLX.ao || (CLX.ao = (() => { const Cv = H.layer(240, 100), c = Cv.getContext('2d'); c.filter = 'blur(10px)'; c.fillStyle = 'rgb(70,20,5)'; c.beginPath(); c.ellipse(120, 50, 90, 22, 0, 0, TAU); c.fill(); return Cv; })());
    ctxG.save(); ctxG.globalAlpha = a; ctxG.drawImage(AO, cx - (rx * 120) / 90, cy - (ry * 50) / 22, (rx * 240) / 90, (ry * 100) / 22); ctxG.restore();
  };
  // a prop: o.mode exit mode, o.seed, o.ct = [rx, ry] contact shadow under its base, o.big / o.hit for the sound
  const obj = (spr, x, y, st, en, o = {}) => {
    if (REC) { rec({ k: 'obj', t: st, x: x + spr.w / 2, w: spr.w, big: o.big, hit: o.hit, minor: o.minor }); if (en != null) rec({ k: 'exit', t: en, mode: o.mode || 'fall', x: x + spr.w / 2, n: 1 }); return null; }
    const L = life(st, en, o.seed || 0, o.mode || 'fall'); if (!L) return null;
    if (o.ct && L.dy < 40 && L.dx === 0) contact(x + spr.w / 2 + L.dx, y + spr.h + (o.ct[2] || 4), o.ct[0] * L.sx, o.ct[1], o.ct[3] ?? 0.5);
    place(ctxG, spr, x + L.dx, y + L.dy, { ...o, sx: (o.sx ?? 1) * L.sx, sy: (o.sy ?? 1) * L.sy, rot: (o.rot || 0) + L.rot });
    return L;
  };
  // rolled clay coil (arrow if head !== false)
  const coil = (key, pts, col, st, en, o = {}) => {
    if (REC) { rec({ k: 'coil', t: st, x: pts[0][0] }); if (en != null) rec({ k: 'exit', t: en, mode: o.mode || 'fall', x: pts[0][0], n: 1 }); return; }
    const L = life(st, en, o.seed || 3, o.mode || 'fall'); if (!L) return;
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; pts.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
    x0 -= 30; y0 -= 30; x1 += 30; y1 += 30;
    const spr = bake('coil' + key, x1 - x0, y1 - y0, { R: 7, dome: 1.3, lump: 0.6, seed: key.length * 7, color: col, draw: (c) => {
      c.translate(-x0, -y0); c.lineCap = 'round'; c.lineJoin = 'round'; c.lineWidth = o.wdt || 16;
      c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke();
      if (o.head !== false) {
        const [ex, ey] = pts[pts.length - 1], [px, py] = pts[pts.length - 2], a = Math.atan2(ey - py, ex - px), hs = (o.wdt || 16) / 16;
        c.beginPath(); c.moveTo(ex + Math.cos(a) * 22 * hs, ey + Math.sin(a) * 22 * hs); c.lineTo(ex + Math.cos(a + 2.3) * 26 * hs, ey + Math.sin(a + 2.3) * 26 * hs); c.lineTo(ex + Math.cos(a - 2.3) * 26 * hs, ey + Math.sin(a - 2.3) * 26 * hs); c.closePath(); c.fill();
      }
    } });
    place(ctxG, spr, x0 + L.dx, y0 + L.dy, { sx: L.sx, sy: L.sy, ax: pts[0][0] - x0, ay: pts[0][1] - y0, rot: L.rot, shadow: { blur: 6, dx: 4, dy: 6, a: 0.4 } });
  };
  const curve = (ax, ay, cx, cy, bx, by, n = 20) => Array.from({ length: n + 1 }, (_, i) => { const u = i / n; return [(1 - u) * (1 - u) * ax + 2 * u * (1 - u) * cx + u * u * bx, (1 - u) * (1 - u) * ay + 2 * u * (1 - u) * cy + u * u * by]; });
  const wiggle = (x, y, h, amp = 12, n = 16) => Array.from({ length: n + 1 }, (_, i) => [x + Math.sin((i / n) * TAU * 1.5) * amp, y - (i / n) * h]);
  // stepped squash pulse when a piece is named: returns [sx, sy]
  const bump = (t0) => { if (TQ < t0 || TQ >= t0 + 0.5) return [1, 1]; const k = Math.floor((TQ - t0) * 12 + 1e-6) >> 1; return [[1.12, 0.86], [0.94, 1.1], [1.04, 0.97], [1, 1]][Math.min(3, k)]; };
  // stepped ease (moves the animator would do in a few exposures)
  const step6 = (t0, dur = 0.5, n = 6) => Math.round(H.ease.inOut(H.clamp((TQ - t0) / dur)) * n) / n;
  const cam = (sc, fx, fy, fn) => { ctxG.save(); ctxG.translate(fx, fy); ctxG.scale(sc, sc); ctxG.translate(-fx, -fy); fn(); ctxG.restore(); };

  // ---------- sprites ----------
  const SP = {
    ball: (col, r, seed = 1, spec = 0.5) => bake('ball' + col + r, r * 2, r * 2, { R: Math.max(4, r * 0.45), dome: 1.3, lump: 0.4, seed, color: col, spec, draw: (c) => { c.beginPath(); c.arc(r, r, r, 0, TAU); c.fill(); } }),
    rect: (key, w, h, col, rad = 10, o = {}) => bake('rect' + key, w, h, { R: o.R || Math.min(12, Math.min(w, h) * 0.35), dome: o.dome ?? 0.9, lump: o.lump ?? 1, seed: o.seed || (w * 3 + h), color: col, sss: o.sss, spec: o.spec, draw: (c) => { c.beginPath(); c.roundRect(0, 0, w, h, rad); c.fill(); }, fps: o.fps ?? prn((o.seed || w) + 3, w, h, 1, Math.min(w, h) * 0.3), marks: o.marks, markW: o.markW }),
    shape: (key, w, h, col, draw, o = {}) => bake('shp' + key, w, h, { R: o.R || 12, dome: o.dome ?? 1.1, lump: o.lump ?? 1, seed: o.seed || key.length * 13, color: col, spec: o.spec, sss: o.sss, boil: o.boil, draw, fps: o.fps ?? prn(key.length * 7 + w, w, h, 1, Math.min(w, h) * 0.25), marks: o.marks, markW: o.markW }),
    flame: (b, s = 1) => SP.shape('flame' + b + s, 70 * s, 110 * s, C.hot, (c) => { const w = 70 * s, h = 110 * s, j = [0, 6, -5][b] * s; c.beginPath(); c.moveTo(w / 2 + j, 0); c.bezierCurveTo(w * 0.95, h * 0.45, w, h * 0.7, w / 2, h); c.bezierCurveTo(0, h * 0.7, w * 0.05, h * 0.45, w / 2 + j, 0); c.fill(); }, { R: 10 * s, lump: 0.8, seed: 300 + b, boil: b, spec: 0.5 }),
    flameIn: (b, s = 1) => SP.shape('flin' + b + s, 40 * s, 62 * s, C.flame, (c) => { const w = 40 * s, h = 62 * s, j = [0, -4, 4][b] * s; c.beginPath(); c.moveTo(w / 2 + j, 0); c.bezierCurveTo(w, h * 0.5, w, h * 0.75, w / 2, h); c.bezierCurveTo(0, h * 0.75, 0, h * 0.5, w / 2 + j, 0); c.fill(); }, { R: 7 * s, lump: 0.5, seed: 310 + b, boil: b, spec: 0.6 }),
    log: (n = 0) => SP.rect('log' + n, 130, 34, C.wood, 16, { seed: 320 + n, marks: [[10, 10, 110, 12, 1.4], [20, 22, 120, 20, 1.2], [8, 17, 60, 17, 1.0]], markW: 5 }),
    puff: (b, col = C.hot, s = 1) => SP.shape('puff' + b + col + s, 64 * s, 48 * s, col, (c) => { const r = H.rng(330 + b); [[20, 28, 18], [36, 20, 20], [48, 30, 15], [30, 34, 14]].forEach(([x, y, rr]) => { c.beginPath(); c.arc(x * s + r.range(-2, 2), y * s, rr * s, 0, TAU); c.fill(); }); }, { R: 9 * s, lump: 0.6, seed: 330 + b, boil: b, fps: [] }),
    xmark: () => SP.shape('xmark', 120, 120, C.red, (c) => { c.lineWidth = 28; c.lineCap = 'round'; c.beginPath(); c.moveTo(16, 16); c.lineTo(104, 104); c.moveTo(104, 16); c.lineTo(16, 104); c.stroke(); }, { R: 10, lump: 0.6, seed: 73, fps: [] }),
    check: () => SP.shape('check', 120, 100, C.dkgreen, (c) => { c.lineWidth = 26; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); c.moveTo(14, 54); c.lineTo(44, 84); c.lineTo(106, 16); c.stroke(); }, { R: 10, lump: 0.6, seed: 74, fps: [] }),
    brick: (col = C.brick, w = 44, h = 22, n = 0) => SP.rect('brick' + col + w + h + n, w, h, col, 5, { R: 6, seed: 340 + n, fps: [] }),
    scroll: () => CLX.scroll || (CLX.scroll = (() => {
      const w = 420, h = 260, Cv = H.layer(w + 80, h + 80), c = Cv.getContext('2d');
      const sheet = SP.rect('sheet', 360, 220, '#efe2c2', 8, { R: 8, dome: 0.5, lump: 0.7, seed: 350, sss: [1.04, 1, 0.96], marks: [[30, 160, 200, 160, 0.8], [30, 185, 250, 185, 0.8], [30, 135, 150, 135, 0.8]] });
      const roll = SP.rect('roll', 34, 260, '#d9b98a', 16, { R: 12, seed: 351 });
      const pc = (s, x, y) => { c.save(); c.shadowColor = 'rgba(40,20,10,0.4)'; c.shadowBlur = 6; c.shadowOffsetX = 3; c.shadowOffsetY = 5; c.drawImage(s, x - s.pad + 40, y - s.pad + 40); c.restore(); };
      pc(sheet, 30, 20); pc(roll, 0, 0); pc(roll, 386, 0);
      Cv.pad = 40; Cv.w = w; Cv.h = h; return Cv;
    })()),
  };
  // composite of several sprites into one cached canvas (so a group pops as one lump)
  const group = (key, w, h, parts) => CLX['grp' + key] || (CLX['grp' + key] = (() => {
    const pad = 40, Cv = H.layer(w + pad * 2, h + pad * 2), c = Cv.getContext('2d');
    parts.forEach(([s, x, y, sh = 0.4]) => { c.save(); if (sh) { c.shadowColor = `rgba(40,20,10,${sh})`; c.shadowBlur = 6; c.shadowOffsetX = 3; c.shadowOffsetY = 5; } c.drawImage(s, x - s.pad + pad, y - s.pad + pad); c.restore(); });
    Cv.pad = pad; Cv.w = w; Cv.h = h; return Cv;
  })());

  // ---------- sets: sculpted wall + table, baked once per scene look ----------
  const SETS = {};
  const set = (key, wall, table, o = {}) => {
    if (REC) return;
    if (!SETS[key]) {
      const Cv = H.layer(W0, H0), c = Cv.getContext('2d'), nz = cnz(), seed = key.length * 31 + (o.seed || 0);
      const [r, g, b] = H.hex(wall); c.fillStyle = H.rgba([r * 0.8, g * 0.8, b * 0.8]); c.fillRect(0, 0, W0, H0);
      const ty = o.ty ?? 1240;
      const wl = bake('wall' + key, W0, ty + 20, { R: 4, dome: 0, lump: 3.2, seed, color: wall, spec: 0.12, draw: (x) => x.fillRect(-30, -30, W0 + 60, ty + 80), fps: prn(seed + 11, W0, ty - 30, 20, 30), markW: 14, marks: (o.wallMarks || (() => { const rr = H.rng(seed + 5); return Array.from({ length: 14 }, () => { const x = rr.range(20, W0), y = rr.range(20, ty - 20), a = rr() * TAU, l = rr.range(50, 110); return [x, y, x + Math.cos(a) * l, y + Math.sin(a) * l, 1.0]; }); })()) });
      c.save(); c.filter = 'blur(1.6px)'; c.drawImage(wl, -wl.pad, -wl.pad); c.restore();
      const lx = o.light ? o.light[0] : 540, ly = o.light ? o.light[1] : 560;
      const gr = c.createRadialGradient(lx, ly, 30, lx + 20, ly + 120, 1300); gr.addColorStop(0, `rgba(255,240,200,${o.glow ?? 0.22})`); gr.addColorStop(1, 'rgba(10,20,30,0.35)');
      c.fillStyle = gr; c.fillRect(0, 0, W0, H0);
      const tab = bake('table' + key, W0 + 80, H0 - ty + 20, { R: 22, dome: 1.0, lump: 2.4, seed: seed + 80, color: table, draw: (x) => { x.beginPath(); x.moveTo(0, 14); for (let X = 0; X <= W0 + 80; X += 20) x.lineTo(X, 6 + nz.n2(X * 0.01, seed) * 8); x.lineTo(W0 + 80, H0 - ty + 40); x.lineTo(0, H0 - ty + 40); x.closePath(); x.fill(); }, fps: prn(seed + 81, W0, 600, 12, 30), marks: o.tableMarks || (() => { const rr = H.rng(seed + 82); return Array.from({ length: 10 }, () => { const x = rr.range(40, W0), y = rr.range(40, 600), a = rr() * TAU, l = rr.range(50, 110); return [x, y, x + Math.cos(a) * l, y + Math.sin(a) * l, 1.2]; }); })(), markW: 16 });
      c.save(); c.shadowColor = 'rgba(40,20,10,0.35)'; c.shadowBlur = 30; c.shadowOffsetY = -10; c.drawImage(tab, -40 - tab.pad, ty - tab.pad); c.restore();
      const g2 = c.createLinearGradient(0, ty + 100, 0, H0); g2.addColorStop(0, 'rgba(60,20,10,0)'); g2.addColorStop(1, 'rgba(60,20,10,0.35)');
      c.fillStyle = g2; c.fillRect(0, ty + 100, W0, H0 - ty);
      SETS[key] = Cv;
    }
    ctxG.drawImage(SETS[key], 0, 0);
  };
  const TOP = 1250; // table top line on the sets (pieces rest here)

  // ---------- lens finish (every frame, as the reference) ----------
  const finish = (ctx) => {
    ctx.save(); ctx.globalCompositeOperation = 'soft-light';
    const gg = ctx.createLinearGradient(0, 0, W0, H0); gg.addColorStop(0, 'rgba(255,220,170,0.5)'); gg.addColorStop(1, 'rgba(40,60,90,0.4)');
    ctx.fillStyle = gg; ctx.fillRect(0, 0, W0, H0); ctx.restore();
    H.vignette(ctx, W0, H0, 0.42, '20,12,8');
    { const f = (H.rng(900 + FRN)() - 0.5) * 0.06; ctx.fillStyle = f > 0 ? `rgba(255,240,220,${f})` : `rgba(0,0,0,${-f})`; ctx.fillRect(0, 0, W0, H0); }
    H.grain(ctx, W0, H0, 0.03, 4 + FRN);
  };


  const SC = [];
  const scene = (s, name, draw) => SC.push({ s, name, draw });
  // ---------- popcorn palette + sprites ----------
  const PC = { hull: '#d98a2b', hullD: '#a85f1c', starch: '#f3e6c4', water: '#7fd0e0', steam: '#e7eef2', fluff: '#fbf3da', butter: '#f2c14e', dud: '#8a5426', bowl: '#d9473b', tire: '#2b2a30' };
  const kpath = (c, x, y, w, h) => { c.beginPath(); c.moveTo(x + w / 2, y + h); c.bezierCurveTo(x + w * 0.85, y + h * 0.88, x + w, y + h * 0.55, x + w, y + h * 0.38); c.bezierCurveTo(x + w, y + h * 0.12, x + w * 0.75, y, x + w / 2, y); c.bezierCurveTo(x + w * 0.25, y, x, y + h * 0.12, x, y + h * 0.38); c.bezierCurveTo(x, y + h * 0.55, x + w * 0.15, y + h * 0.88, x + w / 2, y + h); c.closePath(); c.fill(); };
  const kernelCut = () => group('kcut', 560, 680, [
    [SP.shape('kouter', 560, 680, PC.hull, (c) => kpath(c, 0, 0, 560, 680), { R: 26, lump: 1.4, seed: 601, spec: 0.5, fps: prn(602, 560, 680, 3, 40) }), 0, 0],
    [SP.shape('kinner', 464, 570, PC.starch, (c) => kpath(c, 0, 0, 464, 570), { R: 22, dome: 0.5, lump: 2.2, seed: 603, sss: [1.05, 1, 0.95], fps: prn(604, 464, 570, 4, 36) }), 48, 44, 0.3],
  ]);
  const kernel = (s = 1, col = PC.hull, key = 'a') => SP.shape('kern' + s + col + key, 150 * s, 180 * s, col, (c) => kpath(c, 0, 0, 150 * s, 180 * s), { R: 16 * s, lump: 0.8, seed: 610, spec: 0.6, fps: prn(611, 150 * s, 180 * s, 1, 26 * s) });
  const fluff = () => CLX.fl || (CLX.fl = group('fluff', 720, 660, [
    [SP.shape('fluffm', 720, 660, PC.fluff, (c) => { const r = H.rng(620); [[170, 230, 135], [300, 120, 115], [455, 130, 125], [590, 250, 120], [540, 400, 130], [380, 300, 165], [230, 410, 125], [355, 500, 125], [110, 340, 80], [640, 370, 70], [400, 50, 55], [180, 110, 58]].forEach(([x, y, q]) => { c.beginPath(); c.arc(x + r.range(-6, 6), y + r.range(-6, 6), q, 0, TAU); c.fill(); }); }, { R: 26, lump: 3.2, seed: 620, sss: [1.03, 1, 0.9], fps: prn(621, 720, 660, 6, 40), marks: [[250, 170, 330, 240, 3], [470, 190, 420, 280, 3], [200, 340, 300, 330, 3], [480, 390, 560, 330, 3], [330, 430, 400, 400, 2.6], [130, 260, 210, 280, 2.4], [560, 180, 620, 240, 2.4]], markW: 18 }), 0, 0],
    [SP.shape('fluffh', 150, 90, PC.hull, (c) => { c.beginPath(); c.moveTo(0, 16); c.quadraticCurveTo(75, 110, 150, 12); c.quadraticCurveTo(75, 44, 0, 16); c.fill(); }, { R: 10, lump: 0.7, seed: 622, spec: 0.6, fps: [] }), 285, 570, 0.3],
  ]));
  const miniFluff = (n) => group('mfg' + n, 180, 170, [[SP.shape('mf' + n, 180, 170, PC.fluff, (c) => { const r = H.rng(630 + n); [[50, 70, 46], [105, 48, 44], [138, 92, 40], [86, 118, 46], [90, 80, 40]].forEach(([x, y, q]) => { c.beginPath(); c.arc(x + r.range(-6, 6), y + r.range(-6, 6), q, 0, TAU); c.fill(); }); }, { R: 14, lump: 1.4, seed: 630 + n, sss: [1.03, 1, 0.9], fps: [], marks: [[60, 70, 100, 90, 1.6], [110, 50, 95, 90, 1.6]], markW: 9 }), 0, 0], [SP.ball(PC.hull, 15, 640 + n, 0.5), 76, 136, 0.2]]);
  const tire = () => group('tire', 400, 400, [[SP.ball(PC.tire, 200, 640, 0.25), 0, 0], [SP.ball('#c9c5bd', 88, 641, 0.7), 112, 112, 0.5], [SP.ball('#7d7a78', 26, 642, 0.5), 174, 174, 0.3]]);
  const dropS = (s = 1) => SP.shape('drop' + s, 60 * s, 84 * s, PC.water, (c) => { const w = 60 * s, h = 84 * s; c.beginPath(); c.moveTo(w / 2, 0); c.bezierCurveTo(w * 0.62, h * 0.3, w, h * 0.5, w, h * 0.68); c.arc(w / 2, h * 0.68, w / 2, 0, Math.PI); c.bezierCurveTo(0, h * 0.5, w * 0.38, h * 0.3, w / 2, 0); c.fill(); }, { R: 9 * s, dome: 1.3, lump: 0.4, seed: 730, spec: 0.8, fps: [] });
  const bowl = () => SP.shape('bowl', 800, 340, PC.bowl, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(800, 0); c.bezierCurveTo(780, 240, 620, 340, 400, 340); c.bezierCurveTo(180, 340, 20, 240, 0, 0); c.fill(); }, { R: 26, lump: 1.4, seed: 650, spec: 0.5, fps: prn(651, 800, 340, 3, 40) });
  const objC = (spr, cx, cy, st, en, o) => obj(spr, cx - spr.w / 2, cy - spr.h / 2, st, en, o);
  const at_ = (spr, cx, cy, o = {}) => { if (!REC) place(ctxG, spr, cx - spr.w / 2, cy - spr.h / 2, o); };
  const pshake = (a) => ((FRN % 2) * 2 - 1) * a;

  // ======================= 1. HOOK: pressure of 4 car tires =======================
  scene(0, 'hook', () => {
    set('hook', '#4f9fae', '#d0703f');
    const ex = at(0, 'explodes');
    if (TQ < ex || REC) obj(kernel(1.5), 200, TOP - 270, at(0, 'popcorn'), null, { ct: [90, 10], seed: 1, big: true });
    objC(fluff(), 300, TOP - 225, ex, X, { sx: 0.7, sy: 0.7, seed: 2, hit: 'impact', ax: 360, ay: 330, shadow: { blur: 18, dx: 10, dy: 12, a: 0.4 } });
    wordC('explodes', 540, 340, 130, ex, X, 'fall', C.coral, 1 / 24);
    wordC('4x', 540, 660, 280, at(0, '4'), X, 'fall', [C.yellow, C.coral], 1 / 12, 0, 'slap');
    obj(tire(), 590, TOP - 400, at(1, 'car'), X, { ct: [170, 12], seed: 3, big: true, shadow: { blur: 18, dx: 10, dy: 12, a: 0.4 } });
    wordC('car tire', 540, 1460, 140, at(1, 'car'), X, 'fall', C.cream, 1 / 24);
    wordC('pressure', 540, 1610, 110, at(1, 'pressure'), X, 'fall', C.yellow, 1 / 24);
  });

  // ======================= 2-5. ONE SET: the giant cut-open kernel fills, heats, swells, cracks =======================
  scene(PS(2) - 0.15, 'kernel', () => {
    set('kern', '#3f6f8f', '#b5612f');
    const steam0 = at(6, 'steam'), num = at(9, '135'), crack = at(11, 'cracks');
    const pr = H.clamp((TQ - steam0) / (num - steam0));
    const shk = TQ >= crack ? pshake(14) : TQ >= num ? pshake(7) : 0;
    const bulge = TQ >= crack ? 1.08 : Math.round((1 + 0.1 * pr) * 50) / 50;
    // flames on the table once it heats
    const fl0 = at(6, 'heat');
    [[300, 1.2], [540, 1.5], [780, 1.2]].forEach(([x, s], i) => { const b = (FRN + i) % 3; objC(SP.flame(b, s), x, TOP - 60 * s, fl0 + i / 12, null, { seed: i, minor: true, ax: 35 * s, ay: 110 * s, shadow: { blur: 8, dx: 4, dy: 6, a: 0.3 } }); objC(SP.flameIn(b, s), x, TOP - 42 * s, fl0 + i / 12 + 1 / 12, null, { seed: i, minor: true, shadow: false }); });
    cam(bulge, 540, 720, () => {
      ctxG.save(); ctxG.translate(shk, 0);
      obj(kernelCut(), 260, 390, PS(2), null, { seed: 5, big: true, shadow: { blur: 22, dx: 12, dy: 14, a: 0.42 } });
      // water drop, until it becomes steam
      const dropSc = TQ < steam0 ? 1 : Math.max(0, 1 - Math.floor((TQ - steam0) * 12) / 6);
      if (dropSc > 0) objC(dropS(2.1), 540, 700, at(2, 'water'), null, { seed: 6, sx: dropSc, sy: dropSc, ax: 63, ay: 88, hit: 'pop' });
      // steam puffs multiply and rattle inside
      if (TQ >= steam0) {
        const n = 3 + Math.round(13 * pr), r = H.rng(77);
        for (let i = 0; i < n; i++) {
          const a = r() * TAU, rr = Math.sqrt(r()), px = 540 + Math.cos(a) * rr * 165, py = 650 + Math.sin(a) * rr * 200;
          at_(SP.puff(i % 3, PC.steam, 1.7), px + Math.sin(FRN * 0.9 + i * 2.1) * (6 + 12 * pr), py + Math.cos(FRN * 1.1 + i) * (6 + 12 * pr), { shadow: { blur: 5, dx: 3, dy: 4, a: 0.25 } });
        }
      }
      // hull cracks: jagged dark coil across the top
      coil('crack', [[350, 620], [420, 540], [470, 590], [540, 470], [600, 560], [670, 500], [730, 610]], '#3a2413', crack, null, { head: false, wdt: 20, seed: 9 });
      if (TQ >= crack) for (let i = 0; i < 5; i++) { const d = (TQ - crack) * 12; at_(SP.puff(i % 3, PC.steam, 1.4), 540 + (i - 2) * (60 + d * 22), Math.max(400, 470 - d * 12) + Math.abs(i - 2) * 30, {}); }
      ctxG.restore();
    });
    // labels: one band on the wall, one on the table
    const wEnd = at(4, 'starch') - 0.1, s0 = at(6, 'heat') - 0.1;
    wordC('water', 540, 290, 140, at(2, 'water'), wEnd, 'fall', PC.water, 1 / 24);
    wordC('14%', 540, 1490, 240, at(3, '14'), at(5, 'hull') - 0.15, 'fall', PC.water, 1 / 12, 0, 'slap');
    wordC('soft starch', 540, 290, 130, at(4, 'starch'), s0, 'fall', PC.starch, 1 / 24);
    coil('st', curve(760, 320, 860, 420, 730, 520), C.cream, at(4, 'starch') + 0.15, s0, { seed: 2 });
    wordC('hard hull', 540, 1470, 150, at(5, 'hull'), s0, 'fall', C.yellow, 1 / 24, 0, 'pop');
    coil('hu', curve(230, 1370, 110, 1150, 262, 900), C.yellow, at(5, 'hull') + 0.15, s0, { seed: 3 });
    wordC('steam!', 540, 1490, 190, at(6, 'steam'), PS(7) - 0.05, 'fall', PC.steam, 1 / 24, 0, 'pop');
    // barely leaks
    wordC('barely leaks', 540, 290, 120, at(7, 'barely'), PS(9) - 0.1, 'fall', C.coral, 1 / 24);
    objC(SP.xmark(), 860, 520, at(7, 'leaks'), PS(9) - 0.1, { seed: 4, hit: 'slap', rot: 0.1, shadow: { blur: 10, dx: 6, dy: 8, a: 0.45 } });
    wordC('nowhere to go', 540, 1490, 112, at(8, 'nowhere'), PS(9) - 0.1, 'fall', C.cream, 1 / 24);
    // gauge and counter
    const gx = 225, gy = 1490;
    objC(SP.ball(C.cream, 130, 660, 0.4), gx, gy, PS(9), crack, { seed: 7, big: true });
    if (TQ >= PS(9) + 0.1 && TQ < crack) { const u = H.clamp((TQ - PS(9)) / (num - PS(9))); at_(SP.rect('needle', 16, 110, C.red, 6, { R: 5, seed: 661, fps: [] }), gx, gy - 50, { ax: 8, ay: 105, rot: -2 + Math.round(u * 12) / 12 * 3.2, shadow: { blur: 3, dx: 2, dy: 3, a: 0.4 } }); }
    rec({ k: 'count', t0: PS(9) + 0.1, t1: num });
    const cnt = String(Math.round(135 * H.clamp((TQ - PS(9)) / (num - PS(9)))));
    if (TQ >= PS(9) + 0.1) { const lx = 390; if (REC || TQ < crack) { word(REC ? '135' : cnt, lx, 1540, 210, PS(9) + 0.1, crack, 'fall', C.yellow, 0); word('psi', 775, 1540, 100, at(9, 'pounds'), crack, 'fall', C.cream, 1 / 24); } }
    wordC('180°C', 540, 310, 190, at(10, '180'), null, 'fall', [C.coral, C.yellow], 1 / 12, 0, 'pop');
    wordC('CRACK!', 540, 1500, 190, crack, null, 'fall', C.red, 1 / 24, 0, 'impact');
  });

  // ======================= 6. FOAM: starch blasts out, 40x bigger =======================
  scene(PS(12) - 0.1, 'foam', () => {
    set('foam', '#c8554f', '#e0b45a');
    const g0 = at(12, 'blasts'), g1 = at(12, 'foam');
    const g = 0.22 + 0.78 * (Math.round(H.ease.out(H.clamp((TQ - g0) / (g1 - g0))) * 10) / 10);
    const big = TQ >= at(13, '40') && TQ < at(13, '40') + 0.3 ? 1.06 : 1;
    if (TQ >= g0 || REC) { obj(fluff(), 180, 620, g0, X, { sx: g * big, sy: g * big, ax: 360, ay: 640, seed: 2, big: true, hit: 'pop', shadow: { blur: 22, dx: 12, dy: 14, a: 0.42 } }); }
    contact(540, TOP + 12, 300 * g, 14, 0.5);
    wordC('puffs', 540, 400, 170, at(12, 'puffs'), at(13, '40') - 0.1, 'fall', C.cream, 1 / 24);
    wordC('40x', 540, 480, 300, at(13, '40'), X, 'fall', [C.yellow, C.cream], 1 / 12, 0, 'slap');
    obj(kernel(0.7), 100, TOP - 125, at(13, 'up'), X, { ct: [52, 7], seed: 3 });
    wordC('foam', 540, 1530, 200, at(12, 'foam'), at(13, 'bigger') - 0.1, 'fall', C.cream, 1 / 24);
    wordC('bigger', 540, 1530, 170, at(13, 'bigger'), X, 'fall', C.ink, 1 / 24);
  });

  // ======================= 7. THE POP: not the shell, the steam =======================
  scene(PS(14) - 0.1, 'pop', () => {
    set('pop', '#6d5aa0', '#d0703f');
    wordC('POP!', 540, 470, 300, at(14, 'pop'), PS(16) - 0.1, 'fall', [C.yellow, C.coral, C.cream], 1 / 12, 0, 'impact');
    objC(kernel(3, PC.hull, 'cr'), 540, 900, PS(14), X, { seed: 2, big: true, ax: 225, ay: 540, shadow: { blur: 20, dx: 10, dy: 12, a: 0.42 } });
    coil('crk2', [[420, 850], [480, 780], [530, 830], [590, 730], [650, 810]], '#3a2413', PS(14) + 0.2, X, { head: false, wdt: 16, seed: 5 });
    wordC('shell?', 540, 1500, 170, at(15, 'shell'), PS(16) - 0.1, 'fall', C.cream, 1 / 24);
    objC(SP.xmark(), 860, 1040, at(15, 'not'), PS(16) - 0.1, { seed: 4, hit: 'slap', rot: -0.1, shadow: { blur: 10, dx: 6, dy: 8, a: 0.45 } });
    const s0 = at(16, 'steam');
    if (TQ >= s0) { const d = (TQ - s0) * 12; for (let i = 0; i < 9; i++) { const v = (d + i * 3) % 22; at_(SP.puff(i % 3, PC.steam, 1.5 + (v / 22) * 1.3), 540 + Math.sin(i * 2.4) * (40 + v * 11), 760 - v * 24, { alpha: H.clamp(1.3 - v / 22) }); } }
    rec({ k: 'whoosh', t: s0 });
    wordC('steam!', 540, 1500, 190, s0, X, 'fall', PC.steam, 1 / 24, 0, 'success');
    objC(SP.check(), 860, 1040, at(16, 'escaping'), X, { seed: 6, shadow: { blur: 10, dx: 6, dy: 8, a: 0.45 } });
  });

  // ======================= 8. THE LEG: starch leg flings the kernel =======================
  scene(PS(17) - 0.1, 'leg', () => {
    set('leg', '#4f9a6e', '#c76b3c');
    const leg0 = at(17, 'leg'), fl = at(18, 'flinging'), land = PE(18) + 0.2;
    const u = H.clamp((TQ - fl) / 1.35), py = TQ < fl ? 0 : -1150 * (4 * u * (1 - u)) * 0.95, px = TQ < fl ? 0 : 200 * u;
    const lg = Math.round(H.clamp((TQ - leg0) / 0.4) * 5) / 5, cx = 440 + px, base = TOP - 60 - 90 * lg + py;
    const rot = TQ < fl ? 0 : Math.round((TQ - fl) * 12) * 0.28;
    const sq = TQ >= fl - 0.17 && TQ < fl ? [1.2, 0.72] : [1, 1];
    wordC('first starch', 540, 330, 130, at(17, 'starch'), fl - 0.1, 'fall', C.starch, 1 / 24);
    wordC('leg', 800, 1000, 170, leg0, fl, 'fall', C.yellow, 1 / 24, 0, 'pop');
    coil('arc', curve(440, 1090, 300, 300, 650, 240), C.cream, fl + 0.3, X, { seed: 2 });
    if (TQ < fl) contact(cx, TOP + 10, 160, 12, 0.5);
    if (TQ >= PS(17) && !REC) { { ctxG.save(); ctxG.translate(cx, base); ctxG.rotate(rot); ctxG.scale(sq[0], sq[1]);
      if (lg > 0) at_(SP.shape('legp', 110, 200, PC.fluff, (c) => { c.beginPath(); c.roundRect(0, 0, 110, 200, 52); c.fill(); }, { R: 20, lump: 1.2, seed: 670, sss: [1.04, 1, 0.92] }), 0, 40 + 90 * lg - 90, { sy: lg, ax: 55, ay: 0 });
      at_(kernel(2), 0, -120, { shadow: { blur: 16, dx: 8, dy: 10, a: 0.42 } }); ctxG.restore(); } }
    rec({ k: 'obj', t: PS(17), x: 440, w: 300, big: true }); rec({ k: 'hit', t: fl, hit: 'pop' });
    wordC('fling!', 540, 1500, 200, fl, X, 'fall', [C.yellow, C.coral], 1 / 24);
  });

  // ======================= 9-10. THE BOWL: too dry, and the question =======================
  scene(PS(19) - 0.1, 'bowl', () => {
    set('bowl', '#4f9fae', '#d0703f');
    const sq = at(20, 'eat');
    [[300, 760, 0], [480, 690, 1], [660, 740, 2], [800, 800, 3], [390, 830, 2], [590, 820, 0], [230, 840, 1], [720, 860, 1]].forEach(([x, y, n], i) => objC(miniFluff(n), x, y, PS(19) + i / 24, null, { seed: i, minor: true, shadow: { blur: 8, dx: 4, dy: 6, a: 0.35 } }));
    obj(bowl(), 140, 880, PS(19), null, { ct: [340, 14, 8], seed: 2, big: true, shadow: { blur: 22, dx: 10, dy: 12, a: 0.42 } });
    wordC('duds', 540, 480, 220, at(19, 'duds'), sq - 0.1, 'fall', C.yellow, 1 / 24, 0, 'pop');
    [[330, 1], [540, 0], [750, 2]].forEach(([x, j], i) => obj(kernel(1, PC.dud, 'd'), x - 75, TOP + 50 + j * 8, at(19, 'duds') + i / 6, null, { ct: [62, 7], seed: i, rot: (i - 1) * 0.5, shadow: { blur: 8, dx: 4, dy: 6, a: 0.4 } }));
    wordC('too dry', 540, 1560, 150, at(19, 'dry'), sq - 0.1, 'fall', C.cream, 1 / 24);
    wordC('Do you', 540, 330, 130, at(20, 'do'), null, 'fall', C.cream, 1 / 24);
    wordC('eat them?', 540, 530, 170, sq, null, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'end');
    wordC('?', 540, 1650, 150, T(20, 'explode'), null, 'fall', C.yellow, 1 / 12);
  });

  SC.sort((a, b) => a.s - b.s);
  SC.forEach((s, i) => { s.e = i + 1 < SC.length ? SC[i + 1].s : DURATION + 1; });
  // scenes that continue on the same set skip the knock-off exit (the comb stays, things change on it)
  const KEEP = { kernel: 1, bowl: 1 };

  function explainer(ctx, W, H_, t) {
    ctxG = ctx; TQ = Math.floor(t * 12) / 12; FRN = Math.floor(t * 12);
    let sc = SC[0], idx = 0; SC.forEach((s, i) => { if (TQ + 1e-6 >= s.s) { sc = s; idx = i; } });
    X = KEEP[sc.name] ? 999 : sc.e - 0.45;
    sc.draw();
    finish(ctx);
  }

  // ---------- sound: plasticine on a stop-motion set (events recorded from the scenes themselves) ----------
  const collect = () => {
    if (CLX.events) return CLX.events;
    const keep = [ctxG, TQ, FRN, X], cv = H.layer(W0, H0);
    ctxG = cv.getContext('2d'); REC = [];
    SC.forEach((s) => { TQ = s.e - 1 / 24; FRN = Math.floor(TQ * 12); X = KEEP[s.name] ? 999 : s.e - 0.45; ctxG.save(); try { s.draw(); } catch (e) { console.warn('rec', s.name, e); } ctxG.restore(); });
    const ev = REC; REC = null; [ctxG, TQ, FRN, X] = keep;
    const seen = new Set(), out = [];
    ev.forEach((e) => { if (e.t != null && e.t < 0) return; const key = e.k + '|' + (e.t ?? e.t0).toFixed(3) + '|' + Math.round(e.x || 0) + '|' + (e.mode || ''); if (!seen.has(key)) { seen.add(key); out.push(e); } });
    return (CLX.events = out.sort((a, b) => (a.t ?? a.t0) - (b.t ?? b.t0)));
  };
  function scoreSound(k) {
    const q = (s) => Math.ceil(s * 12 - 1e-6) / 12;
    const pan = (x) => H.clamp(((x || 540) / W0) * 2 - 1, -1, 1) * 0.6;
    const plop = (t, g = 1, f = 170, p = 0, minor = true) => {
      k.tone(t, { f: [[0, f * 1.6], [0.06, f * 0.7]], dur: 0.11, gain: 0.3 * g, pan: p, minor });
      k.noise(t, { dur: 0.05, color: 'brown', filter: 'lowpass', f: 700, gain: 0.28 * g, a: 0.002, pan: p, minor });
      k.noise(t, { dur: 0.04, filter: 'bandpass', f: 520, q: 1.5, gain: 0.1 * g, a: 0.002, pan: p, minor });
    };
    const squelch = (t, g = 1, p = 0, d = 0.14, minor = true) => {
      k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 280], [d, 650]], q: 2, gain: 0.3 * g, a: 0.02, pan: p, minor });
      k.tone(t, { f: [[0, 90], [d, 130]], dur: d, gain: 0.12 * g, pan: p, minor });
    };
    const floor = (t, n, g = 1, minor = true) => { for (let i = 0; i < n; i++) k.noise(t + i * 0.07 + (i % 2) * 0.02, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 260, gain: 0.32 * g * (1 - i * 0.08), a: 0.003, pan: (i % 3 - 1) * 0.3, minor }); };
    const smear = (t, d, g = 1) => { k.noise(t, { dur: d, color: 'brown', filter: 'bandpass', f: [[0, 260], [d, 520]], q: 1.3, gain: 0.28 * g, a: d * 0.3 }); };
    const hit = (h, t, x) => {
      const p = pan(x);
      if (h === 'impact') { k.play('impact', t, { gain: 1.2, pan: p }); plop(t, 1.8, 95, p, false); }
      else if (h === 'slap') { k.play('slap', t, { gain: 0.7, pan: p }); plop(t, 1.3, 100, p, false); k.tone(t + 0.02, { f: 'D3', type: 'triangle', dur: 0.16, gain: 0.2, filter: 'lowpass', f2: 700 }); k.tone(t + 0.18, { f: 'A2', type: 'triangle', dur: 0.3, gain: 0.22, filter: 'lowpass', f2: 600 }); }
      else if (h === 'stamp') { k.play('stamp', t, { gain: 0.6, pan: p }); }
      else if (h === 'success') { k.play('success', t, { f: 'G5', gain: 0.5, pan: p }); }
      else if (h === 'pop') { plop(t, 1.2, 130, p, false); }
      else if (h === 'end') { ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', t + i * 0.08, { f, gain: 0.45 - i * 0.04, pan: (i - 1) * 0.25 })); }
    };
    let lastFloor = -9;
    collect().forEach((e) => {
      if (e.k === 'word') {
        const frames = new Map();
        for (let i = 0; i < e.n; i++) { const t = q(e.t + i * (e.step || 0)); if (!frames.has(t)) frames.set(t, i / Math.max(1, e.n)); }
        const big = e.px >= 120, g = big ? 0.32 : 0.24, f = big ? 170 : 220;
        [...frames].forEach(([t, u]) => plop(t, g, f, pan(e.x + e.w * u)));
        if (e.hit) hit(e.hit, q(e.t), e.x + e.w / 2);
      } else if (e.k === 'obj') {
        const t = q(e.t), p = pan(e.x);
        if (e.big) { plop(t, 1.0, 110, p, false); squelch(t + 1 / 12, 0.6, p); } else plop(t, e.minor ? 0.35 : 0.6, e.minor ? 190 : 150, p);
        if (e.hit) hit(e.hit, t, e.x);
      } else if (e.k === 'coil') { const t = q(e.t); plop(t, 0.5, 140, pan(e.x)); squelch(t + 1 / 12, 0.35, pan(e.x), 0.16); }
      else if (e.k === 'exit') {
        const t = q(e.t);
        if (e.mode === 'fall') { if (t + 0.3 - lastFloor > 0.25) { floor(t + 0.32, 4, 0.55); lastFloor = t + 0.3; } }
        else smear(t, 0.45, 0.8);
      } else if (e.k === 'hit') hit(e.hit, q(e.t), 540);
      else if (e.k === 'whoosh') { k.play('whoosh', q(e.t), { dur: 0.9, gain: 0.6 }); k.play('whoosh', q(e.t) + 1.2, { dur: 0.9, gain: 0.5, top: 3200 }); }
      else if (e.k === 'count') { for (let t = q(e.t0); t < e.t1; t += 2 / 12) plop(t, 0.28, 230, pan(540)); }
    });
    SC.slice(1).forEach((s) => squelch(q(s.s), 0.35, 0, 0.1));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W0; window.VIDEO_H = H0; window.SCENES = SC;
})();
