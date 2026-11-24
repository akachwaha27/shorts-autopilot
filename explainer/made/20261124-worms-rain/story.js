// ================= Claymation Set, 9:16 1080x1920: "Why do earthworms come up when it rains?" =================
// Short. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Clay stop-motion on twos: a plasticine worm on a rainy sidewalk, soil cross-sections, pieces pop on and fall off.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 2.53, "text": "That worm on your sidewalk isn't drowning.", "words": [["that", 0.25], ["worm", 0.52], ["on", 0.79], ["your", 0.92], ["sidewalk", 1.19], ["isnt", 1.73], ["drowning", 1.99]]}, {"s": 2.89, "e": 4.25, "text": "So why did it crawl out?", "words": [["so", 2.89], ["why", 3.04], ["did", 3.27], ["it", 3.49], ["crawl", 3.65], ["out", 4.02]]}, {"s": 4.76, "e": 6.81, "text": "We're told rain floods their tunnels.", "words": [["were", 4.76], ["told", 5.03], ["rain", 5.3], ["floods", 5.58], ["their", 5.99], ["tunnels", 6.33]]}, {"s": 7.15, "e": 8.82, "text": "But a worm doesn't have lungs.", "words": [["but", 7.15], ["a", 7.37], ["worm", 7.44], ["doesnt", 7.73], ["have", 8.16], ["lungs", 8.45]]}, {"s": 9.21, "e": 10.57, "text": "It breathes through its skin,", "words": [["it", 9.21], ["breathes", 9.32], ["through", 9.77], ["its", 10.17], ["skin", 10.34]]}, {"s": 10.94, "e": 12.62, "text": "and that skin has to stay wet.", "words": [["and", 10.94], ["that", 11.16], ["skin", 11.45], ["has", 11.74], ["to", 11.96], ["stay", 12.11], ["wet", 12.4]]}, {"s": 13.08, "e": 15.71, "text": "Scientists have kept worms underwater for days,", "words": [["scientists", 13.08], ["have", 13.74], ["kept", 14.0], ["worms", 14.27], ["underwater", 14.6], ["for", 15.25], ["days", 15.45]]}, {"s": 15.82, "e": 17.53, "text": "and they just keep wiggling.", "words": [["and", 15.82], ["they", 16.05], ["just", 16.34], ["keep", 16.64], ["wiggling", 16.94]]}, {"s": 17.92, "e": 19.11, "text": "So what's going on?", "words": [["so", 17.92], ["whats", 18.09], ["going", 18.52], ["on", 18.94]]}, {"s": 19.56, "e": 21.02, "text": "One idea is drumming.", "words": [["one", 19.56], ["idea", 19.82], ["is", 20.16], ["drumming", 20.34]]}, {"s": 21.28, "e": 23.61, "text": "Raindrops tap the ground like a digging mole,", "words": [["raindrops", 21.28], ["tap", 21.85], ["the", 22.04], ["ground", 22.23], ["like", 22.61], ["a", 22.86], ["digging", 22.92], ["mole", 23.36]]}, {"s": 24.05, "e": 26.46, "text": "and worms escape moles by heading up.", "words": [["and", 24.05], ["worms", 24.29], ["escape", 24.69], ["moles", 25.17], ["by", 25.57], ["heading", 25.73], ["up", 26.3]]}, {"s": 26.89, "e": 28.5, "text": "But lots of experts doubt it.", "words": [["but", 26.89], ["lots", 27.1], ["of", 27.38], ["experts", 27.52], ["doubt", 28.01], ["it", 28.36]]}, {"s": 28.85, "e": 30.63, "text": "The favorite theory is simpler.", "words": [["the", 28.85], ["favorite", 29.06], ["theory", 29.61], ["is", 30.02], ["simpler", 30.15]]}, {"s": 31.08, "e": 34.25, "text": "Underground, a worm squeezes through dirt bit by bit.", "words": [["underground", 31.08], ["a", 31.89], ["worm", 31.97], ["squeezes", 32.26], ["through", 32.85], ["dirt", 33.37], ["bit", 33.66], ["by", 33.88], ["bit", 34.03]]}, {"s": 34.69, "e": 36.81, "text": "On wet ground it slides fast and far,", "words": [["on", 34.69], ["wet", 34.84], ["ground", 35.05], ["it", 35.49], ["slides", 35.64], ["fast", 36.08], ["and", 36.37], ["far", 36.59]]}, {"s": 37.26, "e": 39.83, "text": "to find food, a new home, or a mate.", "words": [["to", 37.26], ["find", 37.47], ["food", 37.88], ["a", 38.29], ["new", 38.39], ["home", 38.7], ["or", 39.11], ["a", 39.32], ["mate", 39.42]]}, {"s": 40.19, "e": 41.98, "text": "Dry ground would dry out its skin,", "words": [["dry", 40.19], ["ground", 40.39], ["would", 40.79], ["dry", 41.12], ["out", 41.32], ["its", 41.52], ["skin", 41.72]]}, {"s": 42.39, "e": 44.32, "text": "so rain is the perfect chance.", "words": [["so", 42.39], ["rain", 42.56], ["is", 42.88], ["the", 43.04], ["perfect", 43.28], ["chance", 43.84]]}, {"s": 44.78, "e": 46.49, "text": "Basically, a worm highway.", "words": [["basically", 44.78], ["a", 45.51], ["worm", 45.59], ["highway", 45.92]]}, {"s": 46.81, "e": 48.3, "text": "So next time you spot one,", "words": [["so", 46.81], ["next", 46.95], ["time", 47.25], ["you", 47.55], ["spot", 47.77], ["one", 48.07]]}, {"s": 48.72, "e": 50.08, "text": "is it escaping a flood,", "words": [["is", 48.72], ["it", 48.87], ["escaping", 49.02], ["a", 49.62], ["flood", 49.7]]}, {"s": 50.33, "e": 51.75, "text": "or going on a road trip?", "words": [["or", 50.33], ["going", 50.48], ["on", 50.88], ["a", 51.04], ["road", 51.11], ["trip", 51.43]]}];
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
  // ---------- story props: worms, soil, rain ----------
  const Z = { worm: '#e8857f', band: '#c9605e', soil: '#7a5236', soilDk: '#4a2f1f', sky: '#8fb8d8', grass: '#6aa84f', water: '#4aa8e0', puddle: '#86bede', pebble: '#a08c78', mole: '#4a3b36', moleP: '#f2a7a0', cloud: '#eef3f5', sun: '#f6c94e', road: '#55585e', leaf: '#5fb257', heart: '#e2454f', case: '#b5713f', o2: '#7fd0e0' };
  const objC = (spr, cx, cy, st, en, o) => obj(spr, cx - spr.w / 2, cy - spr.h / 2, st, en, o);
  const at_ = (spr, cx, cy, o = {}) => { if (!REC) place(ctxG, spr, cx - spr.w / 2, cy - spr.h / 2, o); };
  const fit = (s, px, max = 980) => { const w = wordW(s, px); return w > max ? Math.floor((px * max) / w) : px; };
  const top = (s, st, en, col, px = 150, h, y = 320) => wordC(s, 540, y, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h);
  const bot = (s, st, en, col, px = 130, h, y = 1500) => wordC(s, 540, y, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h);
  const SH = { blur: 18, dx: 9, dy: 11, a: 0.42 };
  const SHs = { blur: 8, dx: 4, dy: 6, a: 0.4 };
  const faceParts = (cx, cy, s, tag) => {
    const e = Math.max(5, Math.round(s * 22)), p = Math.max(3, Math.round(s * 10)), d = s * 30;
    return [[SP.ball('#ffffff', e, 40, 0.6), cx - d - e, cy - e, 0.25], [SP.ball('#ffffff', e, 41, 0.6), cx + d - e, cy - e, 0.25],
      [SP.ball(C.ink, p, 42, 0.8), cx - d - p + s * 5, cy - p + s * 3, 0], [SP.ball(C.ink, p, 43, 0.8), cx + d - p + s * 5, cy - p + s * 3, 0]];
  };
  // an earthworm: a rolled clay rope with segment rings, a saddle band and two eyes at the head (right end)
  const wormS = (len = 560, th = 80, ph = 0, face = true) => {
    const amp = th * 0.42, w = len + th, h = Math.ceil(th + amp * 2 + 10), n = 40;
    const P = Array.from({ length: n + 1 }, (_, i) => { const u = i / n; return [th / 2 + u * len, h / 2 + Math.sin(u * TAU * 1.15 + ph) * amp * (0.5 + 0.5 * u)]; });
    const marks = [];
    for (let i = 2; i < n - 1; i++) {
      const [x0, y0] = P[i - 1], [x1, y1] = P[i + 1], tx = x1 - x0, ty = y1 - y0, l = Math.hypot(tx, ty), nx = -ty / l, ny = tx / l, [x, y] = P[i];
      marks.push([x - nx * th * 0.36, y - ny * th * 0.36, x + nx * th * 0.36, y + ny * th * 0.36, 0.9]);
    }
    const path = (c, a, b) => { c.beginPath(); for (let i = a; i <= b; i++) (i === a ? c.moveTo(P[i][0], P[i][1]) : c.lineTo(P[i][0], P[i][1])); c.stroke(); };
    const k = len + '_' + th + '_' + ph;
    const body = SP.shape('worm' + k, w, h, Z.worm, (c) => { c.lineWidth = th; c.lineCap = 'round'; c.lineJoin = 'round'; path(c, 0, n); }, { R: th * 0.3, dome: 1.25, lump: 0.7, seed: 200 + ph * 10, spec: 0.6, marks, markW: 2.5, fps: [] });
    const band = SP.shape('band' + k, w, h, Z.band, (c) => { c.lineWidth = th * 1.08; c.lineCap = 'butt'; c.lineJoin = 'round'; path(c, Math.round(n * 0.62), Math.round(n * 0.74)); }, { R: th * 0.28, dome: 1.3, lump: 0.6, seed: 210 + ph, spec: 0.5, fps: [] });
    const parts = [[body, 0, 0, 0.3], [band, 0, 0, 0.2]];
    if (face) parts.push(...faceParts(P[n][0] - th * 0.12, P[n][1] - th * 0.12, th / 110, 'w' + th));
    return group('wormg' + k + face, w, h, parts);
  };
  const wig = (len, th, face = true, off = 0) => wormS(len, th, ((FRN + off) % 4) < 2 ? 0 : 1.3, face);
  const drop = (col, s = 1) => SP.shape('drop' + col + s, 56 * s, 76 * s, col, (c) => { const w = 56 * s, h = 76 * s; c.beginPath(); c.moveTo(w / 2, 0); c.bezierCurveTo(w, h * 0.5, w, h, w / 2, h); c.bezierCurveTo(0, h, 0, h * 0.5, w / 2, 0); c.fill(); }, { R: 11 * s, lump: 0.5, seed: 80, spec: 0.7, fps: [] });
  const puddle = (w = 760) => SP.shape('pud' + w, w, 80, Z.puddle, (c) => { c.beginPath(); c.ellipse(w / 2, 40, w / 2, 38, 0, 0, TAU); c.fill(); }, { R: 14, dome: 0.45, lump: 0.6, seed: 220, spec: 0.95, fps: [] });
  const cloud = (s = 1) => SP.shape('cloud' + s, 520 * s, 230 * s, Z.cloud, (c) => { [[110, 150, 85], [230, 100, 110], [370, 125, 95], [450, 165, 65], [260, 175, 70]].forEach(([x, y, r]) => { c.beginPath(); c.arc(x * s, y * s, r * s, 0, TAU); c.fill(); }); }, { R: 22 * s, lump: 1.4, seed: 230, spec: 0.3 });
  const sun = () => SP.shape('sun', 440, 440, Z.sun, (c) => { c.beginPath(); c.arc(220, 220, 120, 0, TAU); c.fill(); c.lineWidth = 34; c.lineCap = 'round'; for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU; c.beginPath(); c.moveTo(220 + Math.cos(a) * 158, 220 + Math.sin(a) * 158); c.lineTo(220 + Math.cos(a) * 205, 220 + Math.sin(a) * 205); c.stroke(); } }, { R: 14, lump: 1, seed: 240, spec: 0.5 });
  const lungs = () => SP.shape('lungs', 340, 300, '#ef8fb0', (c) => { c.beginPath(); c.ellipse(95, 175, 85, 120, -0.15, 0, TAU); c.fill(); c.beginPath(); c.ellipse(245, 175, 85, 120, 0.15, 0, TAU); c.fill(); c.lineWidth = 34; c.lineCap = 'round'; c.beginPath(); c.moveTo(170, 10); c.lineTo(170, 90); c.moveTo(170, 90); c.lineTo(120, 120); c.moveTo(170, 90); c.lineTo(220, 120); c.stroke(); }, { R: 14, lump: 1.1, seed: 250, spec: 0.5 });
  const star = () => SP.shape('star', 420, 400, C.yellow, (c) => { c.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i / 10) * TAU, r = i % 2 ? 90 : 205; c.lineTo(210 + Math.cos(a) * r, 215 + Math.sin(a) * r); } c.closePath(); c.fill(); }, { R: 18, lump: 1, seed: 260, spec: 0.5 });
  const leaf = () => SP.shape('leaf', 200, 150, Z.leaf, (c) => { c.beginPath(); c.moveTo(10, 75); c.quadraticCurveTo(100, -20, 190, 75); c.quadraticCurveTo(100, 170, 10, 75); c.fill(); }, { R: 12, lump: 0.6, seed: 270, spec: 0.5, marks: [[20, 75, 180, 75, 1.4], [70, 75, 110, 40, 1], [110, 75, 150, 45, 1], [70, 75, 110, 110, 1]], markW: 3, fps: [] });
  const heart = () => SP.shape('heart', 150, 140, Z.heart, (c) => { c.beginPath(); c.moveTo(75, 135); c.bezierCurveTo(-20, 70, 10, -5, 75, 35); c.bezierCurveTo(140, -5, 170, 70, 75, 135); c.fill(); }, { R: 12, lump: 0.5, seed: 280, spec: 0.6, fps: [] });
  const house = () => group('house', 220, 210, [
    [SP.rect('hbody', 170, 120, '#f6efe3', 12, { R: 10, seed: 290 }), 25, 90, 0.35],
    [SP.rect('hdoor', 50, 70, C.wood, 20, { R: 8, seed: 291, fps: [] }), 85, 140, 0.25],
    [SP.shape('hroof', 220, 110, C.coral, (c) => { c.beginPath(); c.moveTo(110, 0); c.lineTo(220, 100); c.lineTo(0, 100); c.closePath(); c.fill(); }, { R: 10, seed: 292 }), 0, 0, 0.35]]);
  const suitcase = () => group('case', 180, 160, [
    [SP.shape('chand', 90, 50, C.ink, (c) => { c.lineWidth = 16; c.lineCap = 'round'; c.beginPath(); c.moveTo(14, 46); c.lineTo(14, 12); c.lineTo(76, 12); c.lineTo(76, 46); c.stroke(); }, { R: 5, lump: 0.3, fps: [] }), 45, 0, 0.2],
    [SP.rect('cbody', 180, 120, Z.case, 16, { R: 12, seed: 300, marks: [[20, 60, 160, 60, 1.3]], markW: 5 }), 0, 40, 0.35]]);
  const mole = () => group('mole', 380, 280, [
    [SP.shape('mbody', 330, 240, Z.mole, (c) => { c.beginPath(); c.ellipse(165, 130, 165, 110, 0, 0, TAU); c.fill(); }, { R: 26, lump: 1.6, seed: 310, spec: 0.25 }), 0, 30, 0.35],
    [SP.shape('msnout', 90, 60, Z.moleP, (c) => { c.beginPath(); c.ellipse(45, 30, 45, 26, 0, 0, TAU); c.fill(); }, { R: 10, seed: 311, spec: 0.6, fps: [] }), 290, 120, 0.25],
    [SP.shape('mpaw1', 110, 70, Z.moleP, (c) => { c.beginPath(); c.ellipse(55, 35, 55, 30, 0.3, 0, TAU); c.fill(); }, { R: 10, seed: 312, marks: [[30, 15, 20, 50, 1], [55, 10, 50, 55, 1], [80, 15, 85, 50, 1]], markW: 3, fps: [] }), 230, 200, 0.3],
    [SP.ball(C.ink, 9, 313, 0.9), 262, 100, 0]]);
  const pebbles = (key, x0, y0, x1, y1, n) => group('peb' + key, W0, H0, Array.from({ length: n }, (_, i) => { const r = H.rng(320 + i + key.length * 7), rr = r.int(14, 34); return [SP.ball(['#a08c78', '#8a7562', '#b5a28c'][i % 3], rr, 330 + (i % 3), 0.3), r.range(x0, x1), r.range(y0, y1), 0.3]; }));
  // falling rain, stepped on twos
  const rain = (st, en, x0, x1, y0, y1, n = 18, seed = 1, s = 0.6) => {
    if (REC) { rec({ k: 'rain', t0: st, t1: en == null ? DURATION : Math.min(en, DURATION) }); return; }
    if (TQ < st || (en != null && TQ >= en)) return;
    const r = H.rng(500 + seed);
    for (let i = 0; i < n; i++) { const x = r.range(x0, x1), o = r(), sp = r.range(1300, 1700), y = y0 + ((TQ - st) * sp + o * (y1 - y0)) % (y1 - y0); at_(drop(Z.water, s), x, y, { shadow: { blur: 4, dx: 2, dy: 4, a: 0.3 } }); }
  };
  const peb = (spr) => { if (!REC) place(ctxG, spr, 0, 0, { shadow: false }); };
  const lerpT = (a, b, t0, dur, n = 8) => H.lerp(a, b, step6(t0, dur, n));

  // ---- 0 hook: a worm on a wet sidewalk
  scene(0, 'hook', () => {
    set('hook', '#6f8fa8', '#b9b1a3', { glow: 0.18 });
    rain(0, X, 60, 1020, 120, TOP + 20, 22, 1);
    obj(puddle(820), 130, TOP + 10, 0, X, { seed: 1, minor: true, shadow: false });
    obj(wig(560, 84), 230, TOP - 110, PS(0), X, { seed: 2, big: true, hit: 'pop', shadow: SH, ct: [280, 18] });
    top('SIDEWALK WORM', PS(0), at(0, 'isnt') - 0.05, C.cream, 120);
    top('NOT DROWNING', at(0, 'isnt'), X, C.coral, 130, 'pop');
    wordC('WHY?', 540, 900, 300, at(1, 'why'), X, 'fall', [C.yellow, C.yellow, C.yellow, C.cream], 1 / 16, 0, 'slap');
  });
  // ---- 1 the myth: flooded tunnels
  scene(PS(2) - 0.3, 'myth', () => {
    set('soil', Z.sky, Z.soil, { ty: 640, glow: 0.15 });
    obj(SP.rect('grass1', 1120, 46, Z.grass, 20, { R: 12, seed: 340 }), -20, 600, PS(2) - 0.3, X, { seed: 1, minor: true, shadow: SHs });
    peb(pebbles('a', 40, 760, 1020, 1640, 16));
    const tun = [...curve(540, 640, 760, 900, 520, 1120, 10), ...curve(520, 1120, 300, 1340, 520, 1560, 10).slice(1)];
    coil('tun', tun, Z.soilDk, PS(2) - 0.2, X, { head: false, wdt: 96, seed: 2 });
    obj(wig(220, 52), 400, 1480, PS(2), X, { seed: 3, shadow: SHs });
    rain(at(2, 'rain'), X, 80, 1000, 380, 620, 14, 2);
    const f0 = at(2, 'floods');
    tun.slice().reverse().forEach(([x, y], i) => { if (i % 2 === 0) objC(drop(Z.water, 1.1), x, y, f0 + i / 40, X, { seed: i, minor: true, shadow: false }); });
    top('THE MYTH', at(2, 'told'), at(2, 'floods') - 0.05, C.cream, 140);
    top('FLOODED?', at(2, 'floods'), X, C.cyan, 160, 'pop');
  });
  // ---- 2 no lungs, breathes through wet skin
  scene(PS(3) - 0.3, 'skin', () => {
    set('skin', '#f0c965', '#c98a6a');
    obj(wig(780, 124), 110, TOP - 210, PS(3) - 0.2, X, { seed: 1, big: true, shadow: SH, ct: [400, 20] });
    top('NO LUNGS', at(3, 'doesnt'), PS(4) - 0.05, C.ink, 160);
    const lo = PS(4) - 0.1;
    objC(lungs(), 540, 720, at(3, 'lungs'), lo, { seed: 2, hit: 'pop', shadow: SH });
    objC(SP.xmark(), 540, 720, at(3, 'lungs') + 0.35, lo, { seed: 3, hit: 'slap', sx: 2, sy: 2, ax: 60, ay: 60, shadow: SH });
    top('BREATHES', at(4, 'breathes'), at(5, 'stay') - 0.05, C.cream, 160, 'pop');
    const s0 = at(4, 'skin');
    [[200, 640], [420, 560], [660, 600], [880, 660]].forEach(([x, y], i) => {
      objC(SP.ball(Z.o2, 46, 350 + i, 0.6), x, y, at(4, 'breathes') + i / 12, X, { seed: i, minor: true, shadow: SHs });
      coil('o2a' + i, [[x, y + 60], [x + 4, y + 150], [x, y + 230]], C.cream, s0 + i / 12, X, { wdt: 14, seed: i });
    });
    bot('THROUGH SKIN', s0, X, C.coral, 120, undefined, 1520);
    const wt = at(5, 'wet');
    [[260, 1110], [430, 1150], [600, 1080], [760, 1140], [880, 1100]].forEach(([x, y], i) => objC(drop(Z.water, 0.9), x, y, wt + i / 16, X, { seed: i, minor: true, shadow: SHs }));
    top('STAY WET', at(5, 'stay'), X, C.cyan, 170, 'slap');
  });
  // ---- 3 kept underwater for days
  scene(PS(6) - 0.3, 'tank', () => {
    set('tank', '#3f6d8e', '#caa27a');
    const tx = 170, ty = TOP - 650;
    obj(SP.rect('tankback', 740, 640, '#d6ecf2', 24, { R: 14, dome: 0.5, seed: 360, spec: 0.9 }), tx, ty, PS(6) - 0.3, X, { seed: 1, big: true, shadow: SH, ct: [380, 18] });
    if (TQ >= PS(6) - 0.2) peb(pebbles('t', tx + 40, ty + 540, tx + 680, ty + 590, 22));
    const wy = Math.round(ty + 300 + Math.sin(FRN * 0.7) * 6);
    obj(wig(420, 76), tx + 120, wy, PS(6) - 0.1, X, { seed: 3, shadow: SHs });
    obj(SP.rect('water', 700, 520, Z.water, 18, { R: 10, dome: 0.3, seed: 361, spec: 0.9, fps: [] }), tx + 20, ty + 100, at(6, 'underwater') - 0.1, X, { seed: 4, minor: true, alpha: 0.42, shadow: false });
    if (!REC && TQ >= at(6, 'underwater')) for (let i = 0; i < 5; i++) { const v = ((TQ - at(6, 'underwater')) * 0.9 + i * 0.21) % 1; at_(SP.ball('#ffffff', 10 + (i % 3) * 4, 370 + i, 0.9), tx + 470 + (i % 3) * 30 + Math.sin(i + FRN * 0.6) * 8, ty + 400 - v * 280, { alpha: 0.85, shadow: false }); }
    top('UNDERWATER', at(6, 'underwater'), X, C.cyan, 140, 'pop');
    bot('FOR DAYS', at(6, 'days'), X, C.yellow, 170, 'slap', 1530);
    objC(SP.check(), 860, 520, at(7, 'wiggling'), X, { seed: 5, hit: 'success', sx: 1.4, sy: 1.4, ax: 60, ay: 50, shadow: SH });
  });
  // ---- 4 so what's going on?
  scene(PS(8) - 0.25, 'q', () => {
    set('q', '#b98ad1', '#e8d6b0');
    wordC('?', 540, 1080, 620, at(8, 'whats'), X, 'fall', [C.yellow], 1 / 12, 0, 'slap');
    obj(wig(380, 70), 330, TOP - 70, PS(8) - 0.2, X, { seed: 1, shadow: SH, ct: [190, 14] });
    top('SO WHY?', at(8, 'so'), X, C.cream, 160);
  });
  // ---- 5 idea 1: rain drums like a digging mole
  scene(PS(9) - 0.3, 'drum', () => {
    set('soil2', Z.sky, Z.soil, { ty: 780, glow: 0.15 });
    obj(SP.rect('grass2', 1120, 46, Z.grass, 20, { R: 12, seed: 341 }), -20, 740, PS(9) - 0.3, X, { seed: 1, minor: true, shadow: SHs });
    peb(pebbles('b', 40, 880, 1020, 1640, 12));
    top('IDEA 1: DRUMMING', at(9, 'one'), at(12, 'doubt') - 0.05, C.cream, 120);
    obj(cloud(0.8), 330, 380, at(10, 'raindrops') - 0.15, X, { seed: 2, minor: true, shadow: SH });
    rain(at(10, 'raindrops'), X, 360, 720, 560, 760, 10, 3, 0.55);
    wordC('TAP', 250, 700, 84, at(10, 'tap'), X, 'fall', C.cream, 1 / 24);
    wordC('TAP', 830, 700, 84, at(10, 'tap') + 0.25, X, 'fall', C.cream, 1 / 24);
    const m = at(10, 'mole');
    if (!REC) { const j = TQ >= m && (FRN % 2) ? 6 : 0; obj(mole(), 80 + j, 1260, m, X, { seed: 3, shadow: SH }); } else obj(mole(), 80, 1260, m, X, { seed: 3, big: true, hit: 'pop' });
    wordC('MOLE', 270, 1640, 96, m + 0.1, X, 'fall', C.cream, 1 / 24);
    const up = at(11, 'heading');
    const wy = Math.round(lerpT(1100, 790, up, 0.6, 8));
    obj(wig(300, 60), 600, wy, PS(9), X, { seed: 4, shadow: SHs });
    coil('upar', [[960, 1300], [965, 1150], [960, 1000]], C.yellow, at(11, 'escape'), X, { wdt: 24, seed: 5 });
    wordC('UP!', 900, 1420, 120, at(11, 'up'), X, 'fall', C.yellow, 1 / 24, 0, 'pop');
    top('MAYBE NOT', at(12, 'doubt'), X, C.coral, 150, 'stamp');
  });
  // ---- 6 the favorite theory
  scene(PS(13) - 0.3, 'fav', () => {
    set('fav', '#4f8f7a', '#d8b48a');
    const b = bump(at(13, 'favorite'));
    objC(star(), 540, 820, at(13, 'favorite') - 0.1, X, { seed: 1, big: true, sx: b[0], sy: b[1], shadow: SH });
    top('FAVORITE', at(13, 'favorite'), X, C.yellow, 170, 'pop');
    obj(wig(380, 70), 330, TOP - 70, PS(13) - 0.2, X, { seed: 2, shadow: SH, ct: [190, 14] });
    bot('SIMPLER', at(13, 'simpler'), X, C.cream, 150, undefined, 1520);
  });
  // ---- 7 underground: slow squeeze
  scene(PS(14) - 0.3, 'under', () => {
    set('soil3', Z.sky, '#6b4630', { ty: 560, glow: 0.12 });
    obj(SP.rect('grass3', 1120, 46, Z.grass, 20, { R: 12, seed: 342 }), -20, 520, PS(14) - 0.3, X, { seed: 1, minor: true, shadow: SHs });
    peb(pebbles('c', 30, 640, 1040, 1620, 30));
    top('UNDERGROUND', at(14, 'underground'), X, C.cream, 130);
    const sq = at(14, 'squeezes'), wx = Math.round(lerpT(120, 420, sq, PE(14) - sq + 0.3, 6)), s2 = TQ >= sq && (FRN % 4) < 2;
    obj(wig(360, 66), wx, 1000, PS(14), X, { seed: 2, shadow: SHs, sx: s2 ? 0.92 : 1.04, sy: s2 ? 1.1 : 0.96 });
    bot('SLOW', sq, X, C.coral, 190, 'slap', 1460);
  });
  // ---- 8 wet ground: fast and far, to food, a home, a mate
  scene(PS(15) - 0.3, 'wet', () => {
    set('wet', '#7fc7d9', '#8a6a4a', { glow: 0.2 });
    obj(puddle(420), 80, TOP + 60, PS(15) - 0.3, X, { seed: 1, minor: true, shadow: false });
    obj(puddle(360), 640, TOP + 130, PS(15) - 0.2, X, { seed: 2, minor: true, shadow: false });
    const sl = at(15, 'slides'), wx = Math.round(lerpT(-420, 340, sl, 0.7, 8));
    obj(wig(400, 74), wx, TOP - 30, PS(15) - 0.2, X, { seed: 3, shadow: SH, ct: [200, 14] });
    if (TQ >= sl && TQ < sl + 1.2) [0, 1, 2].forEach((i) => coil('spd' + i, [[wx - 60 - i * 30, TOP + 10 + i * 30], [wx - 240 - i * 30, TOP + 10 + i * 30]], C.cream, sl + i / 12, sl + 1.2, { head: false, wdt: 12, seed: i, mode: 'left' }));
    else if (REC) coil('spd0', [[0, 0], [10, 0]], C.cream, sl, sl + 1.2, { head: false, mode: 'left' });
    top('FAST & FAR', at(15, 'fast'), at(16, 'find') - 0.05, C.yellow, 170, 'pop');
    top('TO FIND', at(16, 'find'), X, C.cream, 140);
    objC(leaf(), 220, 700, at(16, 'food'), X, { seed: 4, hit: 'pop', shadow: SH });
    wordC('FOOD', 220, 900, 84, at(16, 'food'), X, 'fall', C.cream, 1 / 24);
    objC(house(), 540, 690, at(16, 'home'), X, { seed: 5, hit: 'pop', shadow: SH });
    wordC('HOME', 540, 900, 84, at(16, 'home'), X, 'fall', C.cream, 1 / 24);
    objC(heart(), 860, 680, at(16, 'mate'), X, { seed: 6, hit: 'pop', shadow: SH });
    wordC('MATE', 860, 900, 84, at(16, 'mate'), X, 'fall', C.cream, 1 / 24);
  });
  // ---- 9 dry ground dries skin; rain is the chance
  scene(PS(17) - 0.3, 'dry', () => {
    set('dry', '#f2a5a0', '#d9b07a', { glow: 0.3, tableMarks: [[100, 80, 260, 140, 2], [260, 140, 330, 260, 2], [600, 60, 720, 180, 2], [720, 180, 900, 210, 2], [420, 300, 560, 380, 2]] });
    const rn = at(18, 'rain');
    objC(sun(), 540, 720, at(17, 'dry'), X, { seed: 1, big: true, hit: 'pop', shadow: SH });
    const cx = Math.round(lerpT(1500, 540, rn - 0.2, 0.5, 6));
    if (TQ >= rn - 0.2) objC(cloud(1.1), cx, 700, rn - 0.2, X, { seed: 2, shadow: SH });
    else if (REC) objC(cloud(1.1), 540, 700, rn - 0.2, X, { seed: 2, big: true });
    rain(rn + 0.2, X, 300, 780, 820, TOP + 40, 14, 4);
    const b = bump(at(18, 'chance'));
    obj(wig(380, 70), 330, TOP - 70, PS(17) - 0.2, X, { seed: 3, shadow: SH, ct: [190, 14], sx: b[0], sy: b[1] });
    top('DRIES SKIN', at(17, 'dry'), rn - 0.05, C.coral, 150, 'pop');
    top('RAIN = CHANCE', rn, X, C.cyan, 140, 'slap');
  });
  // ---- 10 a worm highway
  scene(PS(19) - 0.3, 'hw', () => {
    set('hw', '#8ec6df', Z.road, { glow: 0.2 });
    for (let i = 0; i < 5; i++) obj(SP.rect('dash' + i, 150, 30, C.yellow, 12, { R: 8, seed: 380 + i, fps: [] }), 30 + i * 220, TOP + 150, PS(19) - 0.3 + i / 24, X, { seed: i, minor: true, shadow: SHs });
    [[TOP - 40, 0, 300], [TOP + 230, 2, 340]].forEach(([y, off, len], i) => { const x = Math.round(-400 + ((TQ - PS(19) + 0.3) * 260 + i * 520) % 1500); obj(wig(len, 62, true, off), x, y, PS(19) - 0.2 + i / 12, X, { seed: i + 6, shadow: SHs }); });
    top('WORM', at(19, 'worm'), X, C.cream, 170);
    wordC('HIGHWAY', 540, 540, 180, at(19, 'highway'), X, 'fall', C.yellow, 1 / 24, 0, 'slap');
  });
  // ---- 11 the question, back on the sidewalk (loops to the hook)
  scene(PS(20) - 0.05, 'end', () => {
    set('hook', '#6f8fa8', '#b9b1a3', { glow: 0.18 });
    rain(PS(20), null, 60, 1020, 120, TOP + 20, 22, 1);
    obj(puddle(820), 130, TOP + 10, PS(20) - 0.05, null, { seed: 1, minor: true, shadow: false });
    obj(wig(560, 84), 230, TOP - 110, PS(20), null, { seed: 2, big: true, shadow: SH, ct: [280, 18] });
    top('FLOOD?', at(21, 'flood'), null, C.cyan, 160, 'pop');
    wordC('OR', 540, 520, 100, at(22, 'or'), null, 'fall', C.cream, 1 / 24);
    wordC('ROAD TRIP?', 540, 720, 150, at(22, 'road'), null, 'fall', C.yellow, 1 / 24, 0, 'end');
    objC(suitcase(), 870, TOP - 110, at(22, 'trip'), null, { seed: 3, hit: 'pop', shadow: SH, ct: [90, 12] });
    bot('COMMENT BELOW', at(22, 'trip') + 0.4, null, C.cream, 100, undefined, 1520);
  });
  const KEEP = { end: 1 };
  SC.forEach((s, i) => { s.e = i + 1 < SC.length ? SC[i + 1].s : DURATION + 1; });
  function explainer(ctx, W, H_, t) {
    ctxG = ctx; TQ = Math.floor(t * 12) / 12; FRN = Math.floor(t * 12);
    let sc = SC[0]; SC.forEach((s) => { if (TQ + 1e-6 >= s.s) sc = s; });
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
