// ================= Claymation Set, 9:16 1080x1920: "How do bacteria turn milk into yogurt?" =================
// Short. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Clay stop-motion on twos: pieces pop on and get knocked off the table; clay ropes link the protein net.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 4.83, "text": "Your yogurt is milk that two kinds of bacteria soured in about five hours.", "words": [["your", 0.25], ["yogurt", 0.56], ["is", 1.01], ["milk", 1.17], ["that", 1.47], ["two", 1.78], ["kinds", 2.01], ["of", 2.39], ["bacteria", 2.54], ["soured", 3.15], ["in", 3.61], ["about", 3.76], ["five", 4.14], ["hours", 4.45]]}, {"s": 5.38, "e": 7.02, "text": "First, the milk gets heated,", "words": [["first", 5.38], ["the", 5.75], ["milk", 5.97], ["gets", 6.27], ["heated", 6.57]]}, {"s": 7.32, "e": 9.5, "text": "to around two hundred degrees Fahrenheit.", "words": [["to", 7.32], ["around", 7.44], ["two", 7.81], ["hundred", 8.0], ["degrees", 8.44], ["fahrenheit", 8.87]]}, {"s": 10.05, "e": 11.65, "text": "That changes its proteins,", "words": [["that", 10.05], ["changes", 10.34], ["its", 10.85], ["proteins", 11.07]]}, {"s": 11.95, "e": 13.61, "text": "so they can set together later.", "words": [["so", 11.95], ["they", 12.08], ["can", 12.35], ["set", 12.55], ["together", 12.75], ["later", 13.28]]}, {"s": 14.16, "e": 16.29, "text": "Then it cools to about a hundred and ten,", "words": [["then", 14.16], ["it", 14.42], ["cools", 14.56], ["to", 14.89], ["about", 15.02], ["a", 15.36], ["hundred", 15.42], ["and", 15.89], ["ten", 16.09]]}, {"s": 16.59, "e": 18.85, "text": "and two kinds of bacteria get stirred in.", "words": [["and", 16.59], ["two", 16.79], ["kinds", 17.0], ["of", 17.34], ["bacteria", 17.48], ["get", 18.03], ["stirred", 18.23], ["in", 18.71]]}, {"s": 19.4, "e": 21.56, "text": "One looks like chains of tiny beads,", "words": [["one", 19.4], ["looks", 19.62], ["like", 20.0], ["chains", 20.3], ["of", 20.74], ["tiny", 20.89], ["beads", 21.19]]}, {"s": 21.86, "e": 23.51, "text": "the other like little rods.", "words": [["the", 21.86], ["other", 22.09], ["like", 22.46], ["little", 22.76], ["rods", 23.21]]}, {"s": 24.06, "e": 25.47, "text": "They only want one thing:", "words": [["they", 24.06], ["only", 24.34], ["want", 24.62], ["one", 24.91], ["thing", 25.12]]}, {"s": 25.77, "e": 27.43, "text": "lactose, the sugar in milk.", "words": [["lactose", 25.77], ["the", 26.33], ["sugar", 26.56], ["in", 26.96], ["milk", 27.12]]}, {"s": 27.98, "e": 29.37, "text": "For about five hours,", "words": [["for", 27.98], ["about", 28.23], ["five", 28.64], ["hours", 28.96]]}, {"s": 29.67, "e": 31.73, "text": "they eat it, and make lactic acid.", "words": [["they", 29.67], ["eat", 29.99], ["it", 30.23], ["and", 30.38], ["make", 30.62], ["lactic", 30.94], ["acid", 31.41]]}, {"s": 32.28, "e": 33.93, "text": "Then comes the magic number:", "words": [["then", 32.28], ["comes", 32.56], ["the", 32.92], ["magic", 33.14], ["number", 33.5]]}, {"s": 34.23, "e": 35.37, "text": "four point six.", "words": [["four", 34.23], ["point", 34.61], ["six", 35.09]]}, {"s": 35.92, "e": 38.44, "text": "At that pH, floating proteins clump,", "words": [["at", 35.92], ["that", 36.1], ["ph", 36.44], ["floating", 36.62], ["proteins", 37.31], ["clump", 38.01]]}, {"s": 38.74, "e": 40.47, "text": "into a soft, wobbly net.", "words": [["into", 38.74], ["a", 39.12], ["soft", 39.22], ["wobbly", 39.6], ["net", 40.18]]}, {"s": 41.02, "e": 42.47, "text": "That net traps the liquid,", "words": [["that", 41.02], ["net", 41.29], ["traps", 41.5], ["the", 41.85], ["liquid", 42.06]]}, {"s": 42.77, "e": 44.26, "text": "and thin milk turns thick.", "words": [["and", 42.77], ["thin", 42.98], ["milk", 43.27], ["turns", 43.55], ["thick", 43.9]]}, {"s": 44.81, "e": 47.14, "text": "That tangy taste? That's the acid too.", "words": [["that", 44.81], ["tangy", 45.13], ["taste", 45.53], ["thats", 45.93], ["the", 46.33], ["acid", 46.57], ["too", 46.9]]}, {"s": 47.69, "e": 48.57, "text": "So tell me,", "words": [["so", 47.69], ["tell", 47.91], ["me", 48.35]]}, {"s": 48.87, "e": 51.49, "text": "would you still eat it, knowing bacteria made it?", "words": [["would", 48.87], ["you", 49.21], ["still", 49.41], ["eat", 49.75], ["it", 49.95], ["knowing", 50.08], ["bacteria", 50.55], ["made", 51.09], ["it", 51.36]]}];
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
  const Y = { milk: '#fbf7ec', glass: '#bcd9e6', pot: '#6f7b88', bead: '#f28da8', rod: '#7ccf8a', sugar: '#fffbf0', acid: '#e8483f', prot: '#f2c14e', water: '#4aa8e0', yog: '#fff6df', cup: '#6ab7d8', spoon: '#c9ced4' };
  const objC = (spr, cx, cy, st, en, o) => obj(spr, cx - spr.w / 2, cy - spr.h / 2, st, en, o);
  const at_ = (spr, cx, cy, o = {}) => { if (!REC) place(ctxG, spr, cx - spr.w / 2, cy - spr.h / 2, o); };
  const hitAt = (t, h) => rec({ k: 'hit', t, hit: h });
  const fit = (s, px, max = 980) => { const w = wordW(s, px); return w > max ? Math.floor((px * max) / w) : px; };
  const top = (s, st, en, col, px = 150, h) => wordC(s, 540, 320, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h);
  const bot = (s, st, en, col, px = 130, h, y = 1500) => wordC(s, 540, y, fit(s, px), st, en, 'fall', col, 1 / 24, 0, h);
  const shake = (a) => ((FRN % 2) * 2 - 1) * a;
  const SH = { blur: 18, dx: 9, dy: 11, a: 0.42 };

  // clay faces: white eyes, dark pupils, a rolled smile
  const faceParts = (cx, cy, s, tag) => {
    const e = Math.round(s * 22), p = Math.round(s * 10), d = s * 34;
    return [[SP.ball('#ffffff', e, 40, 0.6), cx - d - e, cy - e, 0.25], [SP.ball('#ffffff', e, 41, 0.6), cx + d - e, cy - e, 0.25],
      [SP.ball(C.ink, p, 42, 0.8), cx - d - p + s * 4, cy - p + s * 3, 0], [SP.ball(C.ink, p, 43, 0.8), cx + d - p + s * 4, cy - p + s * 3, 0],
      [SP.shape('smile' + tag, 60 * s, 30 * s, C.ink, (c) => { c.lineWidth = 9 * s; c.lineCap = 'round'; c.beginPath(); c.arc(30 * s, 0, 22 * s, 0.35, Math.PI - 0.35); c.stroke(); }, { R: 4, lump: 0.2, fps: [] }), cx - 30 * s, cy + 26 * s, 0]];
  };
  // S. thermophilus: oval cells in a chain
  const chainS = (r = 58, n = 5, face = true) => {
    const w = (n - 1) * r * 1.62 + r * 2, h = r * 2 + r * 0.8, ys = (i) => r * 0.4 + Math.sin((i / (n - 1 || 1)) * Math.PI * 2) * r * 0.36, parts = [];
    for (let i = 0; i < n; i++) parts.push([SP.ball(Y.bead, r, 50 + i, 0.5), i * r * 1.62, ys(i), 0.35]);
    const m = n >> 1;
    if (face) parts.push(...faceParts(m * r * 1.62 + r, ys(m) + r - r * 0.12, r / 58, 'c' + r));
    return group('chain' + r + n + face, w, h, parts);
  };
  // L. bulgaricus: a rod
  const rodS = (w = 400, h = 124, face = true) => {
    const parts = [[SP.rect('rod' + w, w, h, Y.rod, h / 2, { R: h * 0.24, seed: 61, spec: 0.5, fps: prn(62, w, h, 2, h * 0.3) }), 0, 0, 0.35]];
    if (face) parts.push(...faceParts(w / 2, h / 2 - 8, h / 124, 'r' + w));
    return group('rodg' + w + h + face, w, h, parts);
  };
  const cube = (i = 0, s = 96) => SP.rect('cube' + s + i, s, s, Y.sugar, s * 0.16, { R: s * 0.16, seed: 70 + i, spec: 0.35, sss: [1.03, 1, 0.94] });
  const drop = (col, s = 1) => SP.shape('drop' + col + s, 56 * s, 76 * s, col, (c) => { const w = 56 * s, h = 76 * s; c.beginPath(); c.moveTo(w / 2, 0); c.bezierCurveTo(w, h * 0.5, w, h, w / 2, h); c.bezierCurveTo(0, h, 0, h * 0.5, w / 2, 0); c.fill(); }, { R: 11 * s, lump: 0.5, seed: 80, spec: 0.7, fps: [] });
  // tall tumbler of milk
  const tumbler = () => group('tumbler', 400, 620, [
    [SP.shape('tumb', 400, 620, Y.glass, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(400, 0); c.lineTo(350, 620); c.lineTo(50, 620); c.closePath(); c.fill(); }, { R: 16, dome: 0.7, seed: 90, spec: 0.8 }), 0, 0, 0.35],
    [SP.shape('tumbm', 330, 530, Y.milk, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(330, 0); c.lineTo(290, 530); c.lineTo(40, 530); c.closePath(); c.fill(); }, { R: 20, dome: 0.8, seed: 91, spec: 0.35 }), 35, 56, 0.2],
  ]);
  const yogCup = (w = 460, h = 400, mound = true, key = 'a') => group('cup' + key, w, h + 170, [
    ...(mound ? [[SP.shape('mound' + key, w * 0.86, 230, Y.yog, (c) => { const W2 = w * 0.86; c.beginPath(); c.moveTo(0, 230); c.bezierCurveTo(W2 * 0.05, 90, W2 * 0.3, 70, W2 * 0.42, 40); c.quadraticCurveTo(W2 * 0.5, 0, W2 * 0.58, 40); c.bezierCurveTo(W2 * 0.7, 70, W2 * 0.95, 90, W2, 230); c.closePath(); c.fill(); }, { R: 26, lump: 2, seed: 95, spec: 0.5, marks: [[60, 150, 200, 120, 1.6], [150, 100, 300, 130, 1.5]], markW: 6 }), w * 0.07, 0, 0.25]] : []),
    [SP.shape('cupb' + key, w, h, Y.cup, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(w, 0); c.lineTo(w * 0.86, h); c.lineTo(w * 0.14, h); c.closePath(); c.fill(); }, { R: 20, seed: 96, spec: 0.5, marks: [[60, 110, w - 70, 110, 1.4]], markW: 5 }), 0, 170, 0.4],
  ]);
  const spoon = () => group('spoon', 110, 520, [
    [SP.rect('sph', 34, 420, Y.spoon, 16, { R: 12, seed: 97, spec: 0.8, fps: [] }), 38, 0, 0.3],
    [SP.shape('spb', 110, 150, Y.spoon, (c) => { c.beginPath(); c.ellipse(55, 75, 55, 75, 0, 0, TAU); c.fill(); }, { R: 16, seed: 98, spec: 0.8, fps: [] }), 0, 380, 0.3],
  ]);
  const potSpr = () => SP.shape('pot', 760, 430, Y.pot, (c) => { c.beginPath(); c.roundRect(0, 0, 760, 430, [30, 30, 80, 80]); c.fill(); }, { R: 24, lump: 1.3, seed: 100, spec: 0.6 });
  const potMilk = () => SP.rect('potm', 680, 74, Y.milk, 30, { R: 18, seed: 101, spec: 0.5, fps: [] });
  const flames = (st, en) => [[290, 1.3], [540, 1.6], [790, 1.3]].forEach(([x, s], i) => { const b = (FRN + i) % 3; objC(SP.flame(b, s), x, TOP + 50, st + i / 12, en, { seed: i, minor: true, shadow: { blur: 8, dx: 4, dy: 6, a: 0.3 } }); objC(SP.flameIn(b, s), x, TOP + 68, st + i / 12 + 1 / 12, en, { seed: i, minor: true, shadow: false }); });
  const steam = (st, en, y0 = 720) => { if (REC || TQ < st || TQ >= en) return; const r = H.rng(44); for (let i = 0; i < 6; i++) { const v = ((TQ - st) * 1.1 + i * 0.37) % 1, x = 290 + r() * 500; at_(SP.puff(i % 3, '#eef3f5', 1.3 + v), x + Math.sin(i + FRN * 0.5) * 10, y0 - v * 240, { alpha: H.clamp(1.2 - v) }); } };

  // the net of proteins: fixed lattice used by two scenes
  const NODES = (() => { const r = H.rng(120), n = []; for (let j = 0; j < 5; j++) for (let i = 0; i < 4; i++) n.push([210 + i * 220 + r.range(-26, 26) + (j % 2) * 40 - 20, 500 + j * 165 + r.range(-22, 22)]); return n; })();
  const LINKS = (() => { const l = []; NODES.forEach((_, i) => { if (i % 4 !== 3) l.push([i, i + 1]); if (i + 4 < NODES.length) l.push([i, i + 4]); }); return l; })();
  const HOLES = [[0, 5], [1, 6], [2, 7], [4, 9], [5, 10], [6, 11], [8, 13], [9, 14], [10, 15], [12, 17], [14, 19]].map(([a, b]) => [(NODES[a][0] + NODES[b][0]) / 2, (NODES[a][1] + NODES[b][1]) / 2]);
  const wob = (fn, t0) => { const a = TQ >= t0 && !REC ? Math.sin(FRN * 1.55) * 0.016 : 0; ctxG.save(); ctxG.translate(540, 830); ctxG.scale(1 + a, 1 - a); ctxG.translate(-540, -830); fn(); ctxG.restore(); };
  const netPieces = (linkSt, en) => {
    LINKS.forEach(([a, b], i) => { const A = NODES[a], B = NODES[b], s = (a * 13 + b) % 2 ? 22 : -22; coil('n' + a + '_' + b, curve(A[0], A[1], (A[0] + B[0]) / 2 + s, (A[1] + B[1]) / 2 - s, B[0], B[1], 8), '#f8e7ad', linkSt + i * (1 / 24), en, { head: false, wdt: 22, seed: i }); });
    NODES.forEach((n, i) => objC(SP.ball(Y.prot, 44, 130 + (i % 4), 0.55), n[0], n[1], linkSt - 0.1, en, { seed: i, minor: true, shadow: { blur: 8, dx: 4, dy: 6, a: 0.4 } }));
  };

  // ---- 0 hook
  scene(0, 'hook', () => {
    set('hook', '#7fc7d9', '#e8b37d');
    top('YOUR YOGURT', PS(0), X, C.cream, 140, 'pop');
    obj(tumbler(), 340, TOP - 560, PS(0), X, { seed: 1, big: true, ct: [240, 22], shadow: SH, hit: 'pop' });
    bot('SOUR MILK', at(0, 'milk'), at(0, 'two') - 0.05, C.yellow, 150, undefined, 1520);
    objC(chainS(44, 4), 210, 760, at(0, 'two'), X, { seed: 2, hit: 'pop', shadow: SH });
    objC(rodS(290, 92), 860, 740, at(0, 'kinds'), X, { seed: 3, hit: 'pop', shadow: SH });
    bot('2 KINDS', at(0, 'two'), at(0, 'soured') - 0.05, C.cream, 150, undefined, 1520);
    bot('5 HOURS', at(0, 'five'), X, C.coral, 170, 'slap', 1520);
  });
  // ---- 1 heat
  scene(PS(1) - 0.3, 'heat', () => {
    set('heat', '#c8553d', '#6a5a52', { glow: 0.3 });
    top('HEAT IT', at(1, 'heated') - 0.3, X, C.yellow, 170, 'pop');
    flames(at(1, 'heated'), X);
    obj(potSpr(), 160, 800, PS(1) - 0.2, X, { seed: 2, big: true, shadow: SH });
    obj(potMilk(), 200, 820, PS(1) - 0.1, X, { seed: 2, minor: true });
    steam(at(1, 'heated'), X, 800);
    wordC('200°F', 540, 590, 230, at(2, 'two'), X, 'fall', [C.cream, C.cream, C.cream, C.coral, C.coral], 1 / 16, 0, 'slap');
  });
  // ---- 2 proteins change
  scene(PS(3) - 0.3, 'change', () => {
    set('change', '#3f6d8e', '#caa27a');
    top('PROTEINS', at(3, 'changes'), X, C.yellow, 160, 'pop');
    const ch = at(3, 'proteins');
    [[250, 640], [810, 620], [280, 1040], [800, 1030]].forEach(([x, y], i) => {
      objC(SP.ball(Y.prot, 120, 140 + i, 0.5), x, y, PS(3) - 0.2 + i / 12, ch + 0.15, { seed: i, mode: 'up', ax: 120, ay: 120, shadow: SH });
      coil('un' + i, wiggle(x - 40 + i * 20, y + 210, 420, 62, 22), '#f8e7ad', ch + 0.15 + i / 12, X, { head: false, wdt: 32, seed: i });
    });
    bot('READY TO SET', at(4, 'set'), X, C.cream, 110, undefined, 1520);
  });
  // ---- 3 cool + bacteria stirred in
  scene(PS(5) - 0.3, 'cool', () => {
    set('cool', '#8ec6df', '#6a5a52');
    wordC('110°F', 540, 520, 220, at(5, 'hundred') - 0.05, at(6, 'two') - 0.05, 'fall', [C.cream, C.cream, C.cream, C.cyan, C.cyan], 1 / 16, 0, 'slap');
    top('COOL DOWN', at(5, 'cools'), at(6, 'two') - 0.05, C.ink, 130);
    top('2 KINDS', at(6, 'two'), X, C.yellow, 170, 'pop');
    const dd = at(6, 'bacteria');
    objC(chainS(44, 4), 350, Math.round(H.lerp(520, 800, step6(at(6, 'get'), 0.5)) / 6) * 6, dd, X, { seed: 2, ax: 88, ay: 66, shadow: SH });
    objC(rodS(290, 92), 740, Math.round(H.lerp(520, 800, step6(at(6, 'stirred') - 0.1, 0.5)) / 6) * 6, dd + 0.1, X, { seed: 3, ax: 145, ay: 46, shadow: SH });
    obj(potSpr(), 160, 800, PS(5) - 0.2, X, { seed: 2, big: true, shadow: SH });
    obj(potMilk(), 200, 820, PS(5) - 0.1, X, { seed: 2, minor: true });
    if (TQ >= at(6, 'stirred')) { const a = Math.sin(FRN * 0.9) * 0.28; obj(spoon(), 480, 400, at(6, 'stirred'), X, { seed: 4, rot: a, ax: 55, ay: 480, shadow: SH, minor: true }); }
    else rec({ k: 'obj', t: at(6, 'stirred'), x: 540, w: 100, minor: true });
  });
  // ---- 4 meet the two
  scene(PS(7) - 0.3, 'meet', () => {
    set('meet', '#f0c965', '#c98a6a');
    const b1 = bump(at(7, 'beads')), b2 = bump(at(8, 'rods'));
    obj(chainS(84, 5), 110, 500, at(7, 'one'), X, { seed: 2, big: true, hit: 'pop', sx: b1[0], sy: b1[1], shadow: SH });
    bot('BEADS', at(7, 'beads'), X, '#c94f76', 150, undefined, 860);
    obj(rodS(760, 200), 160, 950, at(8, 'the'), X, { seed: 3, big: true, hit: 'pop', sx: b2[0], sy: b2[1], shadow: SH, ct: [360, 18] });
    bot('RODS', at(8, 'rods'), X, C.cream, 150, undefined, 1400);
    top('BACTERIA', PS(7), X, C.ink, 150);
  });
  // ---- 5 lactose
  scene(PS(9) - 0.3, 'lactose', () => {
    set('lactose', '#b98ad1', '#e8d6b0');
    top('ONE THING', at(9, 'one'), at(10, 'lactose') - 0.05, C.cream, 150, 'pop');
    top('LACTOSE', at(10, 'lactose'), X, C.yellow, 180, 'slap');
    const pos = [[230, 610], [430, 560], [640, 590], [850, 620], [320, 780], [540, 760], [760, 790]];
    pos.forEach(([x, y], i) => objC(cube(i, 120), x, y, at(10, 'lactose') + i / 24, X, { seed: i, minor: true, rot: (i % 3 - 1) * 0.14, shadow: SH }));
    objC(chainS(56, 4), 290, 1110, PS(9) - 0.1, X, { seed: 2, shadow: SH, ct: [120, 14] });
    objC(rodS(370, 116), 780, 1140, PS(9), X, { seed: 3, shadow: SH, ct: [170, 14] });
    bot('MILK SUGAR', at(10, 'sugar'), X, C.ink, 120, undefined, 1500);
  });
  // ---- 6 five hours of eating
  scene(PS(11) - 0.3, 'eat', () => {
    set('eat', '#4f8f7a', '#d8b48a');
    const off = PS(12) - 0.05;
    top('5 HOURS', at(11, 'five'), off, C.cream, 170, 'slap');
    objC(SP.ball(C.cream, 200, 150, 0.4), 540, 760, PS(11) - 0.2, off, { seed: 1, big: true, ax: 200, ay: 200, shadow: SH });
    if (!REC && TQ >= PS(11) && TQ < off) { const a = (TQ - PS(11)) * 6.3; [[a, 150, C.coral], [a / 12, 100, C.ink]].forEach(([ang, l, col], i) => { ctxG.save(); ctxG.translate(540, 760); ctxG.rotate(ang); const s = SP.rect('hand' + i, 24, l, col, 10, { R: 7, fps: [], seed: 151 + i }); ctxG.drawImage(s, -12 - s.pad, -l - s.pad); ctxG.restore(); }); }
    const eat0 = at(12, 'eat');
    [[160, 900], [320, 880], [520, 900], [700, 880], [900, 900]].forEach(([x, y], i) => objC(cube(i + 7, 100), x, y, PS(11), eat0 + i * 0.32, { seed: i, mode: 'fall', minor: true, shadow: SH }));
    objC(chainS(56, 4), 270, 1130, PS(11) - 0.2, X, { seed: 2, shadow: SH, ct: [120, 14] });
    objC(rodS(370, 116), 790, 1160, PS(11) - 0.2, X, { seed: 3, shadow: SH, ct: [170, 14] });
    const d0 = at(12, 'make');
    [[180, 680], [340, 560], [520, 660], [700, 540], [880, 670], [270, 800], [620, 800], [800, 790], [440, 470], [150, 480], [920, 470]].forEach(([x, y], i) => objC(drop(Y.acid, 1.25), x, y, d0 + i / 16, X, { seed: i, minor: true, shadow: SH }));
    top('LACTIC ACID', at(12, 'lactic'), X, C.cream, 140, 'pop');
    bot('MORE SOUR', at(12, 'acid'), X, C.ink, 110, undefined, 1500);
  });
  // ---- 7 magic number
  scene(PS(13) - 0.3, 'magic', () => {
    set('magic', '#2e3760', '#8a5a3a', { glow: 0.3 });
    top('MAGIC NUMBER', at(13, 'magic'), X, C.yellow, 120);
    const four = at(14, 'four');
    wordC('4.6', 540, 880, 440, four, X, 'fall', [C.coral, C.cream, C.coral], (at(14, 'six') - four) / 2, 0, 'slap');
    // the pH bar: marker slides from milk end to 4.6
    const segs = [C.red, C.coral, C.yellow, C.green, C.cyan];
    segs.forEach((col, i) => obj(SP.rect('ph' + i, 176, 74, col, 22, { R: 14, seed: 160 + i, fps: [] }), 100 + i * 180, 1080, PS(13) + i / 12, X, { seed: i, minor: true, shadow: { blur: 8, dx: 4, dy: 6, a: 0.4 } }));
    const mx = H.lerp(830, 340, step6(PS(13) + 0.2, four - PS(13), 14));
    if (TQ >= PS(13) + 0.1 && !REC && TQ < X + 0.2) at_(SP.shape('phm', 70, 90, C.cream, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(70, 0); c.lineTo(35, 90); c.closePath(); c.fill(); }, { R: 9, seed: 165, fps: [] }), mx, 1020, { shadow: SH });
    bot('SOUR', four, X, C.coral, 90, undefined, 1400);
  });
  // ---- 8 clump + net
  scene(at(15, 'floating') - 0.05, 'net', () => {
    set('net', '#1f5f75', '#b98a5e');
    top('CLUMP!', at(15, 'clump'), at(16, 'wobbly') - 0.05, C.cream, 170, 'stamp');
    top('WOBBLY NET', at(16, 'wobbly'), X, C.yellow, 140, 'pop');
    const cl = at(15, 'clump');
    if (TQ < cl + 0.5 || REC) NODES.forEach((n, i) => {
      const r = H.rng(170 + i), fx = r.range(120, 960), fy = r.range(460, 1200), u = step6(cl - 0.1, 0.5, 6);
      objC(SP.ball(Y.prot, 44, 130 + (i % 4), 0.55), H.lerp(fx + Math.sin(FRN * 0.5 + i) * 10, n[0], u), H.lerp(fy + Math.cos(FRN * 0.4 + i) * 10, n[1], u), at(15, 'floating') - 0.6 + i / 40, cl + 0.5, { seed: i, minor: true, shadow: { blur: 8, dx: 4, dy: 6, a: 0.4 } });
    });
    if (TQ >= cl + 0.5 || REC) wob(() => netPieces(cl + 0.5, X), at(16, 'wobbly'));
  });
  // ---- 9 traps liquid (same net, continuous)
  scene(PS(17) - 0.25, 'trap', () => {
    set('net', '#1f5f75', '#b98a5e');
    top('TRAPS LIQUID', at(17, 'traps'), X, C.cyan, 130, 'pop');
    wob(() => { netPieces(-5, X); HOLES.forEach(([x, y], i) => objC(drop(Y.water, 1), x, y, at(17, 'liquid') - 0.3 + i / 24, X, { seed: i, minor: true, shadow: { blur: 6, dx: 3, dy: 5, a: 0.4 } })); }, -9);
  });
  // ---- 10 thin to thick
  scene(PS(18) + 0.1, 'thick', () => {
    set('thick', '#f2a5a0', '#d8b48a');
    top('THIN', at(18, 'thin'), X, C.cream, 120, undefined);
    const b = bump(at(18, 'thick'));
    obj(yogCup(290, 300, false, 'th'), 90, TOP - 470 + 20, PS(18), X, { seed: 1, shadow: SH, ct: [120, 14] });
    obj(SP.rect('flatm', 240, 46, Y.milk, 20, { R: 14, seed: 180, fps: [] }), 115, TOP - 300 - 5, PS(18) + 1 / 12, X, { seed: 1, minor: true });
    coil('thar', curve(410, 980, 500, 900, 580, 960, 10), C.coral, at(18, 'turns'), X, { wdt: 22 });
    obj(spoon(), 830, 560, at(18, 'thick'), X, { seed: 3, rot: 0.08, ax: 55, ay: 520, shadow: SH, minor: true });
    obj(yogCup(430, 340, true, 'tk'), 590, TOP - 510, at(18, 'thick') - 0.1, X, { seed: 2, big: true, hit: 'pop', sx: b[0], sy: b[1], shadow: SH, ct: [180, 16] });
    bot('THICK', at(18, 'thick'), X, C.ink, 170, 'stamp');
  });
  // ---- 11 tangy
  scene(PS(19) - 0.3, 'tangy', () => {
    set('tangy', '#a8dd8a', '#e8b37d');
    top('TANGY', at(19, 'tangy'), X, C.ink, 190, 'pop');
    const sour = at(19, 'taste'), squint = TQ >= sour;
    const b = bump(sour);
    objC(SP.ball('#ffd86b', 280, 190, 0.45), 540, 860, PS(19) - 0.2, X, { seed: 1, big: true, ax: 280, ay: 280, sx: b[0], sy: b[1], shadow: SH });
    if (!REC && TQ >= PS(19) && TQ < X + 0.1) {
      const jit = squint ? shake(3) : 0;
      if (!squint) { [[-110, 0], [110, 1]].forEach(([dx, i]) => { at_(SP.ball('#ffffff', 44, 191 + i, 0.6), 540 + dx, 800); at_(SP.ball(C.ink, 22, 193 + i, 0.8), 548 + dx, 806, { shadow: false }); }); at_(SP.shape('flatmo', 150, 26, C.ink, (c) => { c.lineWidth = 16; c.lineCap = 'round'; c.beginPath(); c.moveTo(10, 13); c.lineTo(140, 13); c.stroke(); }, { R: 5, lump: 0.2, fps: [] }), 540, 960, { shadow: false }); }
      else {
        [[-110, 'L'], [110, 'R']].forEach(([dx, k]) => at_(SP.shape('sq' + k, 120, 70, C.ink, (c) => { c.lineWidth = 18; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); const f = k === 'L' ? 1 : -1, x0 = f > 0 ? 10 : 110; c.moveTo(x0, 10); c.lineTo(x0 + f * 95, 35); c.lineTo(x0, 60); c.stroke(); }, { R: 5, lump: 0.2, fps: [] }), 540 + dx + jit, 800, { shadow: false }));
        at_(SP.ball(C.ink, 40, 197, 0.7), 540 + jit, 970, { shadow: false, sx: 0.8, sy: 1.1 });
      }
    }
    [[150, 560], [930, 590], [120, 1010], [950, 1040]].forEach(([x, y], i) => objC(drop(Y.acid, 1.3), x, y, at(19, 'acid') + i / 16, X, { seed: i, minor: true, shadow: SH }));
    bot('THE ACID', at(19, 'acid'), X, C.red, 150, 'slap');
  });
  // ---- 12 question (loops to the hook)
  scene(PS(20) - 0.05, 'end', () => {
    set('end', '#7fc7d9', '#e8b37d');
    top('STILL EAT IT?', at(21, 'still'), null, C.cream, 130, 'end');
    obj(spoon(), 760, 620, PS(20) + 0.2, null, { seed: 3, rot: 0.1, ax: 55, ay: 520, shadow: SH, minor: true });
    obj(yogCup(520, 360, true, 'en'), 280, TOP - 530, PS(20), null, { seed: 2, big: true, hit: 'pop', shadow: SH, ct: [220, 18] });
    objC(chainS(44, 4), 190, 620, at(21, 'bacteria'), null, { seed: 4, hit: 'pop', shadow: SH });
    objC(rodS(270, 88), 300, 480, at(21, 'made'), null, { seed: 5, minor: true, shadow: SH });
    bot('TELL ME BELOW', at(21, 'would'), null, C.ink, 100, undefined, 1520);
  });

  SC.forEach((s, i) => { s.e = i + 1 < SC.length ? SC[i + 1].s : DURATION + 1; });
  const KEEP = { end: 1, net: 1 };
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
