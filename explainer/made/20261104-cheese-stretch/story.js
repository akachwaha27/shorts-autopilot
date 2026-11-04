// ================= Claymation Set, 9:16 1080x1920: "Why does melted cheese stretch?" =================
// Short. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Clay stop-motion on twos: pieces pop on, get knocked off the table; ropes of clay are the casein strands.
// knocked off the table at the end of its scene; the comb scenes continue on one set while it fills, dries and caps.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  // BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael)
  const PH = [{"s": 0.25, "e": 2.59, "text": "Your pizza cheese hides a protein net,", "words": [["your", 0.25], ["pizza", 0.55], ["cheese", 0.93], ["hides", 1.38], ["a", 1.76], ["protein", 1.84], ["net", 2.37]]}, {"s": 2.89, "e": 3.93, "text": "you've never seen.", "words": [["youve", 2.89], ["never", 3.26], ["seen", 3.63]]}, {"s": 4.48, "e": 6.17, "text": "Long proteins called casein,", "words": [["long", 4.48], ["proteins", 4.76], ["called", 5.33], ["casein", 5.75]]}, {"s": 6.47, "e": 9.01, "text": "are tied together by tiny calcium bonds,", "words": [["are", 6.47], ["tied", 6.7], ["together", 7.01], ["by", 7.63], ["tiny", 7.78], ["calcium", 8.09], ["bonds", 8.63]]}, {"s": 9.31, "e": 11.31, "text": "with fat and water stuck in the gaps.", "words": [["with", 9.31], ["fat", 9.59], ["and", 9.79], ["water", 10.0], ["stuck", 10.34], ["in", 10.69], ["the", 10.82], ["gaps", 11.03]]}, {"s": 11.86, "e": 13.29, "text": "Cold, that net is stiff.", "words": [["cold", 11.86], ["that", 12.17], ["net", 12.49], ["is", 12.73], ["stiff", 12.89]]}, {"s": 13.84, "e": 15.89, "text": "Warm it up, and the fat melts first,", "words": [["warm", 13.84], ["it", 14.14], ["up", 14.29], ["and", 14.44], ["the", 14.67], ["fat", 14.9], ["melts", 15.13], ["first", 15.51]]}, {"s": 16.19, "e": 17.49, "text": "then the bonds loosen.", "words": [["then", 16.19], ["the", 16.48], ["bonds", 16.69], ["loosen", 17.06]]}, {"s": 18.04, "e": 20.22, "text": "Now the strands slide past each other,", "words": [["now", 18.04], ["the", 18.25], ["strands", 18.46], ["slide", 18.96], ["past", 19.31], ["each", 19.59], ["other", 19.87]]}, {"s": 20.52, "e": 21.69, "text": "without letting go.", "words": [["without", 20.52], ["letting", 21.04], ["go", 21.55]]}, {"s": 22.24, "e": 24.24, "text": "Mozzarella has an extra trick.", "words": [["mozzarella", 22.24], ["has", 23.04], ["an", 23.28], ["extra", 23.44], ["trick", 23.84]]}, {"s": 24.79, "e": 26.96, "text": "Makers dunk the curd in hot water,", "words": [["makers", 24.79], ["dunk", 25.27], ["the", 25.59], ["curd", 25.84], ["in", 26.16], ["hot", 26.32], ["water", 26.56]]}, {"s": 27.26, "e": 29.65, "text": "around 70 to 80 degrees Celsius,", "words": [["around", 27.26], ["70", 27.81], ["to", 28.0], ["80", 28.18], ["degrees", 28.36], ["celsius", 29.01]]}, {"s": 29.95, "e": 31.88, "text": "then pull and fold it like dough,", "words": [["then", 29.95], ["pull", 30.25], ["and", 30.54], ["fold", 30.77], ["it", 31.06], ["like", 31.21], ["dough", 31.51]]}, {"s": 32.18, "e": 34.57, "text": "lining the proteins up in long fibers.", "words": [["lining", 32.18], ["the", 32.64], ["proteins", 32.87], ["up", 33.49], ["in", 33.64], ["long", 33.8], ["fibers", 34.11]]}, {"s": 35.12, "e": 36.6, "text": "Old cheese is different.", "words": [["old", 35.12], ["cheese", 35.34], ["is", 35.79], ["different", 35.93]]}, {"s": 37.15, "e": 39.85, "text": "As it ages, enzymes snip those strands,", "words": [["as", 37.15], ["it", 37.32], ["ages", 37.5], ["enzymes", 37.85], ["snip", 38.46], ["those", 38.81], ["strands", 39.24]]}, {"s": 40.15, "e": 41.91, "text": "so it melts, but it won't stretch.", "words": [["so", 40.15], ["it", 40.29], ["melts", 40.43], ["but", 40.79], ["it", 41.0], ["wont", 41.14], ["stretch", 41.42]]}, {"s": 42.46, "e": 44.22, "text": "Ricotta barely melts at all,", "words": [["ricotta", 42.46], ["barely", 42.99], ["melts", 43.45], ["at", 43.83], ["all", 43.99]]}, {"s": 44.52, "e": 47.1, "text": "its proteins are locked with permanent bonds.", "words": [["its", 44.52], ["proteins", 44.72], ["are", 45.26], ["locked", 45.47], ["with", 45.88], ["permanent", 46.15], ["bonds", 46.76]]}, {"s": 47.65, "e": 49.11, "text": "So a cheese pull is a net,", "words": [["so", 47.65], ["a", 47.8], ["cheese", 47.88], ["pull", 48.34], ["is", 48.65], ["a", 48.8], ["net", 48.88]]}, {"s": 49.41, "e": 50.85, "text": "bending but not breaking.", "words": [["bending", 49.41], ["but", 49.89], ["not", 50.1], ["breaking", 50.3]]}, {"s": 51.4, "e": 53.73, "text": "Which cheese has the best pull on your pizza?", "words": [["which", 51.4], ["cheese", 51.73], ["has", 52.11], ["the", 52.31], ["best", 52.5], ["pull", 52.76], ["on", 53.02], ["your", 53.15], ["pizza", 53.41]]}];
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
  // ---------- cheese palette + sprites ----------
  const CH = { cheese: '#f7d35e', amber: '#d98f26', crust: '#d9a25a', pep: '#c9412f', casein: '#fbf3da', ca: '#7fd0e0', fat: '#ffe27a', water: '#4aa8e0', moz: '#fbf6e8', pot: '#6f7b88', old: '#d9782a', enz: '#79c26a', ric: '#fffaf0', skin: '#e8a77c' };
  const objC = (spr, cx, cy, st, en, o) => obj(spr, cx - spr.w / 2, cy - spr.h / 2, st, en, o);
  const at_ = (spr, cx, cy, o = {}) => { if (!REC) place(ctxG, spr, cx - spr.w / 2, cy - spr.h / 2, o); };
  const hitAt = (t, h) => rec({ k: 'hit', t, hit: h });
  const fit = (s, px, max = 980) => { const w = wordW(s, px); return w > max ? Math.floor((px * max) / w) : px; };
  const fall = (x) => (TQ >= x ? 2400 * (TQ - x + 1 / 12) ** 2 : 0);
  // a rolled clay rope that can move every frame: dark underside, body, soft highlight
  const rope = (pts, col, w = 26) => {
    if (REC || pts.length < 2) return;
    const c = ctxG, path = (dx, dy) => { c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x + dx, y + dy) : c.moveTo(x + dx, y + dy))); c.stroke(); };
    c.save(); c.lineCap = 'round'; c.lineJoin = 'round';
    c.strokeStyle = 'rgba(40,20,10,0.32)'; c.lineWidth = w; path(w * 0.2, w * 0.28);
    c.strokeStyle = H.rgba(H.mix(col, '#3a2413', 0.28)); c.lineWidth = w; path(0, 0);
    c.strokeStyle = col; c.lineWidth = w * 0.74; path(-w * 0.07, -w * 0.09);
    c.strokeStyle = H.rgba(H.mix(col, '#ffffff', 0.6), 0.75); c.lineWidth = w * 0.2; path(-w * 0.18, -w * 0.22);
    c.restore();
  };
  const panel = (st, en) => obj(SP.rect('pnl', 940, 840, CH.amber, 40, { R: 22, dome: 0.6, lump: 2.2, seed: 701 }), 70, 370, st, en, { seed: 5, big: true, shadow: { blur: 22, dx: 12, dy: 14, a: 0.42 } });
  const pizza = () => group('pizza', 860, 260, [
    [SP.shape('pzc', 860, 260, CH.crust, (c) => { c.beginPath(); c.ellipse(430, 130, 430, 130, 0, 0, TAU); c.fill(); }, { R: 24, lump: 1.6, seed: 702 }), 0, 0],
    [SP.shape('pzm', 760, 200, CH.cheese, (c) => { c.beginPath(); c.ellipse(380, 100, 380, 100, 0, 0, TAU); c.fill(); }, { R: 16, dome: 0.6, lump: 2, seed: 703, spec: 0.5 }), 50, 26, 0.25],
    ...[[120, 90], [270, 60], [500, 70], [640, 110], [190, 160], [550, 170]].map(([x, y], i) => [SP.shape('pep' + i, 96, 52, CH.pep, (c) => { c.beginPath(); c.ellipse(48, 26, 48, 26, 0, 0, TAU); c.fill(); }, { R: 10, lump: 0.6, seed: 704 + i, fps: [] }), x, y, 0.3]),
  ]);
  const slice = () => group('slice', 380, 340, [
    [SP.shape('slc', 380, 340, CH.cheese, (c) => { c.beginPath(); c.moveTo(20, 30); c.lineTo(360, 30); c.lineTo(190, 340); c.closePath(); c.fill(); }, { R: 14, dome: 0.7, lump: 1.6, seed: 712, spec: 0.5 }), 0, 0],
    [SP.rect('slcr', 380, 60, CH.crust, 28, { R: 14, seed: 713 }), 0, 0],
    [SP.ball(CH.pep, 48, 714, 0.4), 90, 80, 0.3], [SP.ball(CH.pep, 38, 715, 0.4), 210, 110, 0.3], [SP.ball(CH.pep, 34, 716, 0.4), 150, 190, 0.3],
  ]);
  const padlock = () => group('lock', 200, 250, [
    [SP.shape('lkb', 200, 130, C.ink, (c) => { c.lineWidth = 34; c.lineCap = 'butt'; c.beginPath(); c.arc(100, 110, 62, Math.PI, 0); c.stroke(); }, { R: 9, lump: 0.5, seed: 720, fps: [] }), 0, 0],
    [SP.rect('lkr', 200, 150, C.yellow, 24, { R: 14, seed: 721 }), 0, 100],
    [SP.ball(C.ink, 26, 722, 0.3), 74, 142, 0.2],
  ]);
  const fist = (k) => group('fist' + k, 170, 170, [[SP.ball(CH.skin, 85, 730 + k, 0.35), 0, 0], ...[0, 1, 2].map((i) => [SP.rect('fng' + k + i, 54, 30, '#d99468', 14, { R: 8, seed: 733 + i, fps: [] }), 58, 36 + i * 36, 0.3])]);
  const enzyme = () => group('enz', 190, 150, [
    [SP.shape('enzb', 190, 150, CH.enz, (c) => { c.beginPath(); c.ellipse(66, 75, 62, 56, 0, 0, TAU); c.fill(); c.lineCap = 'round'; c.lineWidth = 24; c.beginPath(); c.moveTo(90, 60); c.lineTo(176, 26); c.moveTo(90, 90); c.lineTo(176, 124); c.stroke(); }, { R: 11, lump: 0.8, seed: 740, spec: 0.5 }), 0, 0],
    [SP.ball('#ffffff', 17, 741, 0.5), 30, 34, 0.2], [SP.ball('#ffffff', 17, 743, 0.5), 66, 34, 0.2], [SP.ball(C.ink, 8, 742, 0.6), 42, 45, 0], [SP.ball(C.ink, 8, 744, 0.6), 78, 45, 0],
  ]);
  const pshake = (a) => ((FRN % 2) * 2 - 1) * a;

  // the cheese net: long wavy strands, each pair tied by calcium
  const NX = 540, NW = 760;
  const yS = (k, x, amp) => 480 + k * 150 + amp * Math.sin(x * 0.012 + k * 1.9) + amp * 0.4 * Math.sin(x * 0.031 + k * 3.1);
  const strand = (k, amp, off, jit = 0, x0 = -NW / 2, x1 = NW / 2) => { const p = []; for (let x = x0; x <= x1 + 0.1; x += 38) p.push([NX + x + off, yS(k, x, amp) + (jit ? Math.sin(FRN * 1.7 + k + x * 0.02) * jit : 0)]); return p; };
  const TIES = [[0, -220, 0], [0, 120, 1], [1, -60, 0], [1, 270, 1], [2, -300, 1], [2, 100, 0], [3, -140, 0], [3, 230, 1]];
  const FATS = [[-120, 555], [120, 705], [-100, 855], [60, 1005]], WATS = [[270, 555], [-300, 705], [300, 855], [-330, 1005]];

  // the pizza and its lifted slice, used by the first and the last scene (same set: the video loops)
  const pullSet = (key, st, en, lift, netM) => {
    set('pull', '#c8554f', '#e0b45a');
    if (REC) { obj(pizza(), 110, 1110, st, en, { seed: 1, big: true }); obj(slice(), 350, 800, st + 0.2, en, { seed: 2 }); return; }
    const dy = en != null ? fall(en) : 0; if (dy > 1400) return;
    ctxG.save(); ctxG.translate(0, dy);
    obj(pizza(), 110, 1110, st, null, { seed: 1, ct: [400, 16, 4], shadow: { blur: 18, dx: 10, dy: 12, a: 0.4 } });
    const sy = Math.round(H.lerp(880, 400, lift) / 6) * 6, by = sy + 330, gy = 1190, n = 7;
    const X0 = (i) => 540 + (i - 3) * 30 * (1 - 0.3 * lift), X1 = (i) => 540 + (i - 3) * 95;
    const ptAt = (i, u) => { const sag = Math.sin(u * Math.PI) * (netM ? 26 * (i - 3) / 3 + Math.sin(FRN * 0.9 + i) * 6 : 34 * Math.sin(i * 1.7 + FRN * 0.5)); return [H.lerp(X0(i), X1(i), u) + sag, H.lerp(by - 40, gy, u)]; };
    for (let i = 0; i < n; i++) rope(Array.from({ length: 15 }, (_, j) => ptAt(i, j / 14)), CH.cheese, netM ? 24 : 18 + (i % 3) * 7);
    if (netM) { for (let r = 1; r <= 3; r++) for (let i = 0; i < n - 1; i++) { const u = r / 4 + (i % 2) * 0.08; rope([ptAt(i, u), ptAt(i + 1, u)], CH.ca, 12); } }
    at_(slice(), 540, sy + 170, { shadow: { blur: 18, dx: 10, dy: 12, a: 0.42 } });
    ctxG.restore();
  };

  // ======================= 1. HOOK: the pull hides a net =======================
  scene(0, 'hook', () => {
    const l0 = at(0, 'pizza'), net = at(0, 'protein');
    pullSet('hook', 0, X, Math.round(H.ease.out(H.clamp((TQ - l0) / 1.6)) * 12) / 12, false);
    wordC('pizza cheese', 540, 270, fit('pizza cheese', 140), at(0, 'pizza'), at(1, 'youve') - 0.1, 'fall', C.yellow, 1 / 24);
    // magnifier: the net inside the strands
    objC(SP.ball('#2e3760', 215, 750, 0.5), 540, 870, net, X, { seed: 3, big: true, hit: 'pop', shadow: { blur: 18, dx: 10, dy: 12, a: 0.42 } });
    objC(SP.ball(CH.amber, 190, 751, 0.25), 540, 870, net + 1 / 12, X, { seed: 3, shadow: false });
    if (!REC && TQ >= net + 1 / 6) { const d = fall(X);
      ctxG.save(); ctxG.translate(0, d); ctxG.beginPath(); ctxG.arc(540, 870, 182, 0, TAU); ctxG.clip();
      for (let k = 0; k < 5; k++) rope(Array.from({ length: 16 }, (_, i) => { const x = 300 + i * 32; return [x, 720 + k * 76 + Math.sin(x * 0.03 + k * 2) * 24]; }), CH.casein, 16);
      for (let k = 0; k < 4; k++) for (let i = 0; i < 3; i++) { const x = 400 + i * 120 + (k % 2) * 60, y0 = 720 + k * 76 + Math.sin(x * 0.03 + k * 2) * 24, y1 = 796 + k * 76 + Math.sin(x * 0.03 + (k + 1) * 2) * 24; rope([[x, y0], [x, y1]], CH.ca, 10); }
      ctxG.restore(); }
    wordC('protein net', 540, 1500, fit('protein net', 170), net, X, 'fall', C.cream, 1 / 24);
    wordC("never seen", 540, 270, fit('never seen', 150), at(1, 'never'), X, 'fall', C.cream, 1 / 24, 0, 'slap');
  });

  // ======================= 2-5. ONE SET: inside the cheese, cold then warm =======================
  scene(PS(2) - 0.15, 'net', () => {
    set('net', '#3f6f8f', '#b5612f');
    const warm = at(6, 'warm'), fat0 = at(6, 'fat'), loose = at(7, 'bonds'), sl0 = at(8, 'strands'), keep = at(9, 'without');
    const cold0 = at(5, 'cold'), stiff = at(5, 'stiff');
    panel(PS(2), X);
    // ice on the table while it is cold, flames when it warms
    [[230, 0], [850, 1]].forEach(([x, i]) => obj(SP.rect('ice' + i, 150, 130, C.cyan, 22, { R: 14, seed: 760 + i, spec: 0.7 }), x - 75, TOP + 40, cold0 + i / 8, warm - 0.1, { seed: i, ct: [70, 8], minor: true }));
    [[250, 1.3], [540, 1.6], [830, 1.3]].forEach(([x, s], i) => { const b = (FRN + i) % 3; objC(SP.flame(b, s), x, TOP + 55, warm + i / 12, X, { seed: i, minor: true, shadow: { blur: 8, dx: 4, dy: 6, a: 0.3 } }); objC(SP.flameIn(b, s), x, TOP + 75, warm + i / 12 + 1 / 12, X, { seed: i, minor: true, shadow: false }); });
    const dyAll = fall(X);
    if (!REC && dyAll < 1400) {
      ctxG.save(); ctxG.translate(0, dyAll);
      const sl = step6(sl0, 1.7, 12), off = (k) => (k % 2 ? -1 : 1) * sl * 78;
      const lo = TQ >= loose, amp = TQ >= warm ? 44 : 30, jit = lo ? 5 : TQ >= cold0 ? 0 : 2;
      const shake = TQ >= stiff && TQ < stiff + 0.3 ? pshake(6) : 0;
      ctxG.translate(shake, 0);
      // fat and water sit in the gaps
      WATS.forEach(([x, y], i) => { if (TQ >= at(4, 'water') + i / 12) at_(SP.ball(CH.water, 34, 770 + i, 0.8), NX + x, y); });
      const m = step6(fat0, 1.1, 6);
      FATS.forEach(([x, y], i) => { if (TQ >= at(4, 'fat') + i / 12) { const g = i % 2 ? 42 : 48; at_(SP.ball(CH.fat, g, 780 + i, 0.6), NX + x, y + m * 34, { sx: 1 + m * 0.45, sy: 1 - m * 0.6, ax: g, ay: g * 2 }); } });
      for (let k = 0; k < 5; k++) if (TQ >= at(2, 'long') + k / 8) rope(strand(k, amp, off(k), jit), CH.casein, 30);
      const b0 = at(3, 'calcium');
      TIES.forEach(([k, x, drops], i) => {
        if (TQ < b0 + i / 12) return;
        const gone = drops && lo;
        const a = [NX + x + off(k), yS(k, x, amp)], b = [NX + x + off(k + 1), yS(k + 1, x, amp)], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
        if (gone) { const d = TQ - loose; const py = my + 1500 * d * d; if (py < 1500) at_(SP.ball(C.cyan, 26, 790 + i, 0.8), mx, py); return; }
        rope([a, b], C.cyan, 13);
        const r = lo ? 22 : 30, pop = TQ < b0 + i / 12 + 2 / 12 ? 1.25 : 1;
        at_(SP.ball(C.cyan, r, 790 + i, 0.8), mx, my, { sx: pop, sy: pop, ax: r, ay: r });
      });
      ctxG.restore();
    }
    if (REC) { TIES.forEach((_, i) => obj(SP.ball(C.cyan, 30, 790 + i, 0.8), 400, 400, at(3, 'calcium') + i / 12, null, { minor: true })); hitAt(loose, 'pop'); }
    // bands of pressed-clay words
    const e4 = PS(5) - 0.1, top = (s, st, en, col, px = 140, h) => wordC(s, 540, 270, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h), bot = (s, st, en, col, px = 140, h) => wordC(s, 540, 1500, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h);
    top('casein', at(2, 'casein'), at(3, 'calcium') - 0.05, C.cream, 170, 'pop');
    bot('long proteins', at(2, 'long'), at(3, 'tied') - 0.05, C.cream, 120);
    top('calcium', at(3, 'calcium'), at(4, 'with') - 0.05, C.cyan, 170, 'pop');
    bot('tiny bonds', at(3, 'bonds'), e4, C.cyan, 130);
    word('fat', 170, 270, 150, at(4, 'fat'), e4, 'fall', CH.fat, 1 / 24, 0, 'pop');
    word('+ water', 440, 270, 130, at(4, 'water'), e4, 'fall', '#9ad4f5', 1 / 24, 0, 'pop');
    top('cold', cold0, warm - 0.1, C.cyan, 180);
    bot('stiff', stiff, warm - 0.1, C.cream, 190, 'slap');
    top('warm', warm, loose - 0.1, C.coral, 180);
    bot('fat melts', at(6, 'fat'), loose - 0.1, CH.fat, 150, 'pop');
    top('bonds loosen', loose, sl0 - 0.05, C.cyan, 130);
    top('strands slide', sl0, keep - 0.05, C.cream, 120);
    coil('sl1', [[210, 1450], [420, 1450]], C.cream, at(8, 'slide'), X, { seed: 2, wdt: 22 });
    coil('sl2', [[870, 1560], [660, 1560]], C.cream, at(8, 'past'), X, { seed: 3, wdt: 22 });
    top("still linked", keep, X, C.yellow, 130, 'success');
    objC(SP.check(), 900, 1450, at(9, 'letting'), X, { seed: 4, shadow: { blur: 10, dx: 6, dy: 8, a: 0.45 } });
  });

  // ======================= 6-7. MOZZARELLA: hot water, pull, fold, fibers =======================
  scene(PS(10) - 0.1, 'moz', () => {
    set('moz', '#4f9a6e', '#c76b3c');
    const dunk = at(11, 'dunk'), pull = at(13, 'pull'), fold = at(13, 'fold'), line = at(14, 'lining');
    const top = (s, st, en, col, px = 140, h) => wordC(s, 540, 270, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h), bot = (s, st, en, col, px = 140, h) => wordC(s, 540, 1520, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h);
    top('mozzarella', PS(10) + 0.1, dunk - 0.1, C.cream, 170, 'pop');
    bot('extra trick', at(10, 'extra'), dunk - 0.1, C.yellow, 140);
    // pot of hot water
    const potUp = dunk - 0.05;
    if (!REC && TQ >= potUp && TQ < pull + 0.5) {
      const d = TQ >= pull ? 2400 * (TQ - pull + 1 / 12) ** 2 : 0;
      ctxG.save(); ctxG.translate(0, d);
      [[300, 1.3], [780, 1.3]].forEach(([x, s], i) => { const b = (FRN + i) % 3; at_(SP.flame(b, s), x, TOP + 30); at_(SP.flameIn(b, s), x, TOP + 50); });
      const r = H.rng(44); for (let i = 0; i < 7; i++) { const v = ((TQ - potUp) * 1.3 + i * 0.37) % 1; at_(SP.puff(i % 3, '#eef3f5', 1.5 + v * 1.2), 300 + r() * 480 + Math.sin(i + FRN * 0.5) * 12, 720 - v * 300, { alpha: H.clamp(1.2 - v) }); }
      ctxG.restore();
    }
    // the curd: big ball, then dunked, then the pull
    if (TQ < pull || REC) {
      const c0 = at(11, 'curd'), y = Math.round((TQ < dunk ? 760 : TQ < c0 ? 760 - 210 * H.clamp((TQ - dunk) / 0.3) : H.lerp(550, 830, H.clamp((TQ - c0) / 0.45))) / 6) * 6;
      objC(SP.ball(CH.moz, 170, 802, 0.55), 540, y, PS(10), pull, { seed: 3, big: true, hit: 'pop', ax: 170, ay: 170, shadow: { blur: 20, dx: 10, dy: 12, a: 0.4 } });
    }
    obj(SP.shape('pot', 760, 460, CH.pot, (c) => { c.beginPath(); c.roundRect(0, 0, 760, 460, [30, 30, 80, 80]); c.fill(); }, { R: 24, lump: 1.3, seed: 800, spec: 0.6 }), 160, 760, potUp, pull, { seed: 2, big: true, shadow: { blur: 20, dx: 10, dy: 12, a: 0.42 } });
    obj(SP.rect('potw', 680, 70, '#5fb6e0', 30, { R: 18, seed: 801, spec: 0.7, fps: [] }), 200, 782, potUp + 1 / 12, pull, { seed: 2, minor: true });
    top('hot water', at(11, 'hot'), at(12, '70') - 0.05, C.cyan, 150);
    bot('curd', at(11, 'curd'), pull - 0.1, C.cream, 170);
    { const st = at(12, '70'), s = (at(12, '80') - st) / 3; wordC('70-80°C', 540, 330, 210, st, pull - 0.05, 'fall', [C.yellow, C.yellow, C.cream, C.coral, C.coral, C.cream, C.cream], s, 0, 'slap'); }
    // pull and fold: one rope between two fists
    const ln = line - 0.1;
    if (TQ >= pull && TQ < ln + 0.45 && !REC) {
      const d = fall(ln), yb = 860, cyc = TQ < fold ? H.clamp((TQ - pull) / (fold - pull)) : 1;
      const dst = Math.round(H.lerp(120, 410, H.ease.out(cyc)) / 8) * 8, sag = 34 + 40 * Math.abs(Math.sin(FRN * 0.33));
      ctxG.save(); ctxG.translate(0, d);
      if (TQ < fold) { [-1, 0, 1].forEach((o) => rope(curve(540 - dst, yb + o * 34, 540, yb + sag + o * 46, 540 + dst, yb + o * 34, 18), CH.moz, 58 - 10 * cyc)); at_(fist(0), 540 - dst - 40, yb); at_(fist(1), 540 + dst + 40, yb, { sx: -1, ax: 85 }); }
      else {
        const u = step6(fold, 0.8, 8), lift = 240 * u;
        [-1, 0, 1].forEach((o) => { rope(curve(130, yb + o * 26, 540, yb + 110 + o * 26, 950, yb + o * 26, 18), CH.moz, 44); rope(curve(130, yb - 30 + o * 26, 540, yb - 30 - lift + o * 26, 950 - 820 * u * 0 , yb - 30 + o * 26, 18), CH.moz, 44); });
        at_(fist(0), 90, yb); at_(fist(1), 990, yb, { sx: -1, ax: 85 });
      }
      ctxG.restore();
    }
    if (REC) { hitAt(pull, 'pop'); hitAt(fold, 'pop'); hitAt(line, 'pop'); }
    top('pull', pull, fold - 0.05, C.cream, 210);
    top('fold', fold, ln, C.yellow, 210);
    bot('like dough', at(13, 'like'), ln, C.cream, 140);
    // inside again: the tangle lines up
    panel(line, X);
    if (TQ >= line && !REC) {
      const a = 1 - step6(line + 0.1, 1.3, 10), d = fall(X); if (d < 1400) {
        ctxG.save(); ctxG.translate(0, d);
        for (let k = 0; k < 6; k++) { const p = []; for (let x = -390; x <= 390; x += 30) p.push([540 + x, 500 + k * 115 + a * 90 * Math.sin(x * 0.019 + k * 2.3) + a * 40 * Math.sin(x * 0.043 + k)]); rope(p, CH.casein, 34); }
        ctxG.restore();
      }
    }
    top('lined up', at(14, 'proteins'), X, C.yellow, 170);
    bot('long fibers', at(14, 'long'), X, C.cream, 150, 'success');
  });

  // ======================= 8. OLD CHEESE: enzymes snip =======================
  scene(PS(15) - 0.1, 'old', () => {
    set('old', '#6d5aa0', '#d0703f');
    const age = at(16, 'as'), enz = at(16, 'enzymes'), snip = at(16, 'snip'), mel = at(17, 'melts');
    const top = (s, st, en, col, px = 140, h) => wordC(s, 540, 270, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h), bot = (s, st, en, col, px = 140, h) => wordC(s, 540, 1500, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h);
    top('old cheese', PS(15), age - 0.05, C.yellow, 150);
    obj(SP.shape('wedge', 840, 720, CH.old, (c) => { c.beginPath(); c.moveTo(0, 720); c.lineTo(840, 720); c.lineTo(840, 60); c.closePath(); c.fill(); c.globalCompositeOperation = 'destination-out'; [[640, 420, 62], [430, 590, 54], [730, 610, 40], [745, 250, 34]].forEach(([x, y, r]) => { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }); c.globalCompositeOperation = 'source-over'; }, { R: 22, lump: 2.4, seed: 810 }), 120, TOP - 560, PS(15), age, { seed: 2, big: true, ct: [380, 14, 8], mode: 'left', shadow: { blur: 20, dx: 10, dy: 12, a: 0.42 } });
    bot('different', at(15, 'different'), age - 0.05, C.cream, 150);
    panel(age, X);
    const cuts = [-230, 70, 260], gap = step6(snip, 0.45, 4) * 34;
    const dm = TQ >= mel ? step6(mel, 0.9, 6) : 0;
    if (!REC && TQ >= age) { const d = fall(X); if (d < 1400) {
      ctxG.save(); ctxG.translate(0, d);
      for (let k = 0; k < 5; k++) {
        const cs = cuts.map((c) => c + ((k * 73) % 90) - 45);
        if (TQ < snip) { rope(strand(k, 40, 0), CH.casein, 30); continue; }
        [-NW / 2, ...cs].forEach((c0, i, A) => { const c1 = A[i + 1] ?? NW / 2; rope(strand(k, 40, (i - 1.5) * gap * 0.7, 0, c0 + (i ? 12 : 0), c1 - 12).map(([x, y], j) => [x, y + dm * (26 + (j % 3) * 8) + dm * 18 * Math.sin(i + k)]), CH.casein, 30); });
      }
      ctxG.restore(); } }
    [[290, 555], [760, 700], [380, 855], [690, 1005]].forEach(([x, y], i) => { const mv = TQ >= snip ? 0 : Math.round(Math.sin(FRN * 0.5 + i) * 6) * 3; objC(enzyme(), x + mv, y, enz + i / 8, mel - 0.05, { seed: i, sx: i % 2 ? -1 : 1, ax: 95, ay: 75, shadow: { blur: 10, dx: 5, dy: 7, a: 0.42 } }); });
    top('aged', at(16, 'ages'), enz - 0.05, C.cream, 180);
    top('enzymes', enz, mel - 0.05, CH.enz, 170, 'pop');
    bot('snip!', snip, mel - 0.05, C.coral, 200, 'slap');
    top('melts', mel, X, C.yellow, 190);
    bot("won't stretch", at(17, 'wont'), X, C.cream, 120);
    objC(SP.xmark(), 860, 1290, at(17, 'wont'), X, { seed: 6, hit: 'slap', shadow: { blur: 10, dx: 6, dy: 8, a: 0.45 } });
  });

  // ======================= 9. RICOTTA: locked =======================
  scene(PS(18) - 0.1, 'ric', () => {
    set('ric', '#4f9fae', '#d0703f');
    const lk0 = at(19, 'its');
    const top = (s, st, en, col, px = 140, h) => wordC(s, 540, 270, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h), bot = (s, st, en, col, px = 140, h) => wordC(s, 540, 1520, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h);
    top('ricotta', PS(18) + 0.05, lk0 - 0.1, C.cream, 190);
    [[300, 1.2], [540, 1.5], [780, 1.2]].forEach(([x, s], i) => { const b = (FRN + i) % 3; objC(SP.flame(b, s), x, TOP + 60, at(18, 'barely') + i / 12, lk0 - 0.1, { seed: i, minor: true, shadow: { blur: 8, dx: 4, dy: 6, a: 0.3 } }); });
    const mound = SP.shape('rmd', 680, 300, CH.ric, (c) => { const r = H.rng(820); for (let i = 0; i < 26; i++) { const a = i / 26, x = 60 + a * 560 + r.range(-20, 20), hh = Math.sin(a * Math.PI) * 190; c.beginPath(); c.arc(x, 270 - r() * hh, r.range(38, 66), 0, TAU); c.fill(); } }, { R: 15, lump: 3.2, seed: 821, sss: [1.03, 1, 0.95] });
    obj(mound, 200, 660, PS(18), lk0 - 0.1, { seed: 3, big: true, shadow: { blur: 16, dx: 8, dy: 10, a: 0.38 } });
    obj(SP.shape('rbowl', 780, 300, '#3a6ea5', (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(780, 0); c.bezierCurveTo(760, 210, 600, 300, 390, 300); c.bezierCurveTo(180, 300, 20, 210, 0, 0); c.fill(); }, { R: 24, lump: 1.3, seed: 822, spec: 0.5 }), 150, 890, PS(18), lk0 - 0.1, { seed: 2, big: true, ct: [320, 12, 6], shadow: { blur: 20, dx: 10, dy: 12, a: 0.42 } });
    bot('barely melts', at(18, 'barely'), lk0 - 0.1, C.yellow, 130);
    panel(lk0, X);
    if (TQ >= lk0 && !REC) { const d = fall(X); if (d < 1400) {
      ctxG.save(); ctxG.translate(0, d);
      const nodes = []; for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) nodes.push([210 + i * 220, 500 + j * 190]);
      nodes.forEach(([x, y], n) => { const i = n % 4, j = n >> 2; if (i < 3) rope([[x, y], [x + 220, y]], C.ink, 26); if (j < 3) rope([[x, y], [x, y + 190]], C.ink, 26); });
      nodes.forEach(([x, y], n) => at_(SP.ball(C.ric || CH.ric, 36, 830 + n, 0.7), x, y));
      ctxG.restore(); } }
    if (REC) hitAt(lk0, 'pop');
    top('locked', at(19, 'locked'), X, C.yellow, 190);
    objC(padlock(), 540, 800, at(19, 'locked'), X, { seed: 4, big: true, hit: 'slap', shadow: { blur: 18, dx: 10, dy: 12, a: 0.45 } });
    bot('permanent bonds', at(19, 'permanent'), X, C.cream, 120);
  });

  // ======================= 10. BACK TO THE PULL: net, then the question =======================
  scene(PS(20) - 0.1, 'pull', () => {
    const qq = at(22, 'which');
    pullSet('end', PS(20), null, 1, TQ >= at(20, 'net') - 0.3 || REC);
    wordC('cheese pull', 540, 270, fit('cheese pull', 150), at(20, 'cheese'), at(20, 'net') - 0.05, 'fall', C.yellow, 1 / 24);
    wordC('a net', 540, 270, 190, at(20, 'net'), qq - 0.1, 'fall', C.cyan, 1 / 24, 0, 'pop');
    wordC('bending', 540, 1500, 170, at(21, 'bending'), at(21, 'not') - 0.05, 'fall', C.cream, 1 / 24);
    wordC('not breaking', 540, 1500, fit('not breaking', 140), at(21, 'not'), qq - 0.1, 'fall', C.yellow, 1 / 24, 0, 'success');
    wordC('Which cheese', 540, 270, fit('Which cheese', 140), qq, null, 'fall', C.cream, 1 / 24);
    wordC('best pull?', 540, 1520, fit('best pull?', 170), at(22, 'best'), null, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'end');
  });

  SC.sort((a, b) => a.s - b.s);
  SC.forEach((s, i) => { s.e = i + 1 < SC.length ? SC[i + 1].s : DURATION + 1; });
  // scenes that continue on the same set skip the knock-off exit (the comb stays, things change on it)
  const KEEP = { pull: 1 };

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
