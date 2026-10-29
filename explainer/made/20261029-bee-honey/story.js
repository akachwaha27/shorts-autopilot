// ================= Claymation Set, 9:16 1080x1920: "How do bees turn nectar into honey?" =================
// Short (~51 s). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Clay stop-motion sets on twos (12 fps): every piece is a baked plasticine lump popped on with squash-and-stretch,
// knocked off the table at the end of its scene; the comb scenes continue on one set while it fills, dries and caps.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s": 0.25, "e": 2.5, "text": "Your honey was once 80 percent water,", "words": [["your", 0.25], ["honey", 0.55], ["was", 0.92], ["once", 1.15], ["80", 1.45], ["percent", 1.6], ["water", 2.12]]},
    {"s": 2.8, "e": 4.8, "text": "and you'd never guess how bees dried it.", "words": [["and", 2.8], ["youd", 2.99], ["never", 3.25], ["guess", 3.57], ["how", 3.9], ["bees", 4.09], ["dried", 4.35], ["it", 4.68]]},
    {"s": 5.35, "e": 6.63, "text": "It starts with nectar,", "words": [["it", 5.35], ["starts", 5.5], ["with", 5.92], ["nectar", 6.2]]},
    {"s": 6.93, "e": 8.34, "text": "sugary flower juice.", "words": [["sugary", 6.93], ["flower", 7.43], ["juice", 7.92]]},
    {"s": 8.89, "e": 11.02, "text": "A bee sips it into a second stomach,", "words": [["a", 8.89], ["bee", 8.96], ["sips", 9.19], ["it", 9.5], ["into", 9.65], ["a", 9.95], ["second", 10.03], ["stomach", 10.48]]},
    {"s": 11.32, "e": 12.55, "text": "called the honey stomach.", "words": [["called", 11.32], ["the", 11.67], ["honey", 11.84], ["stomach", 12.14]]},
    {"s": 13.1, "e": 14.27, "text": "Enzymes from her spit,", "words": [["enzymes", 13.1], ["from", 13.55], ["her", 13.81], ["spit", 14.01]]},
    {"s": 14.57, "e": 17.07, "text": "start chopping the sugar into smaller sugars.", "words": [["start", 14.57], ["chopping", 14.9], ["the", 15.42], ["sugar", 15.62], ["into", 15.95], ["smaller", 16.21], ["sugars", 16.68]]},
    {"s": 17.62, "e": 18.68, "text": "Back at the hive,", "words": [["back", 17.62], ["at", 17.95], ["the", 18.11], ["hive", 18.36]]},
    {"s": 18.98, "e": 20.61, "text": "she spits it mouth to mouth,", "words": [["she", 18.98], ["spits", 19.21], ["it", 19.58], ["mouth", 19.72], ["to", 20.09], ["mouth", 20.24]]},
    {"s": 20.91, "e": 21.97, "text": "to a house bee,", "words": [["to", 20.91], ["a", 21.1], ["house", 21.2], ["bee", 21.68]]},
    {"s": 22.27, "e": 24.41, "text": "who chews on it for up to 20 minutes.", "words": [["who", 22.27], ["chews", 22.5], ["on", 22.88], ["it", 23.03], ["for", 23.18], ["up", 23.41], ["to", 23.57], ["20", 23.72], ["minutes", 23.87]]},
    {"s": 24.96, "e": 26.61, "text": "Then it goes into a wax cell.", "words": [["then", 24.96], ["it", 25.26], ["goes", 25.41], ["into", 25.71], ["a", 26.01], ["wax", 26.08], ["cell", 26.31]]},
    {"s": 27.16, "e": 28.56, "text": "But it's still way too runny.", "words": [["but", 27.16], ["its", 27.35], ["still", 27.54], ["way", 27.86], ["too", 28.05], ["runny", 28.24]]},
    {"s": 29.11, "e": 31.06, "text": "So the bees fan it with their wings,", "words": [["so", 29.11], ["the", 29.25], ["bees", 29.46], ["fan", 29.74], ["it", 29.94], ["with", 30.08], ["their", 30.36], ["wings", 30.71]]},
    {"s": 31.36, "e": 32.69, "text": "blowing the water away,", "words": [["blowing", 31.36], ["the", 31.85], ["water", 32.06], ["away", 32.41]]},
    {"s": 32.99, "e": 35.6, "text": "until it's only about 18 percent water.", "words": [["until", 32.99], ["its", 33.41], ["only", 33.67], ["about", 34.0], ["18", 34.42], ["percent", 34.59], ["water", 35.18]]},
    {"s": 36.15, "e": 37.18, "text": "That's so thick,", "words": [["thats", 36.15], ["so", 36.58], ["thick", 36.75]]},
    {"s": 37.48, "e": 38.79, "text": "germs can't grow in it.", "words": [["germs", 37.48], ["cant", 37.86], ["grow", 38.17], ["in", 38.48], ["it", 38.63]]},
    {"s": 39.34, "e": 40.56, "text": "Then they cap each cell,", "words": [["then", 39.34], ["they", 39.59], ["cap", 39.85], ["each", 40.05], ["cell", 40.3]]},
    {"s": 40.86, "e": 41.68, "text": "with wax.", "words": [["with", 40.86], ["wax", 41.33]]},
    {"s": 42.23, "e": 44.66, "text": "One bee makes just a twelfth of a teaspoon,", "words": [["one", 42.23], ["bee", 42.44], ["makes", 42.66], ["just", 43.01], ["a", 43.3], ["twelfth", 43.37], ["of", 43.87], ["a", 44.01], ["teaspoon", 44.08]]},
    {"s": 44.96, "e": 46.14, "text": "in her whole life.", "words": [["in", 44.96], ["her", 45.12], ["whole", 45.38], ["life", 45.8]]},
    {"s": 46.69, "e": 48.58, "text": "So, is your honey flower juice,", "words": [["so", 46.69], ["is", 46.85], ["your", 47.01], ["honey", 47.32], ["flower", 47.71], ["juice", 48.18]]},
    {"s": 48.88, "e": 49.8, "text": "or bee spit?", "words": [["or", 48.88], ["bee", 49.08], ["spit", 49.39]]}
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
  // ---------- honey palette + sprites for this story ----------
  const HC = { honey: '#e39a2b', runny: '#f3c35a', deep: '#c9741a', nectar: '#f3d77a', wax: '#f2c14e', lid: '#f6e3a6', water: '#7fd0e0', bodyY: '#f2c14e', dark: '#3a2a22', wing: '#d8eef2', petal: '#ef8fb0', germ: '#7fbf4f', leaf: '#6fae5a' };
  const hexPath = (c, cx, cy, r) => { c.beginPath(); for (let i = 0; i < 6; i++) { const a = -Math.PI / 2 + (i / 6) * TAU; const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.closePath(); };
  const HX = {
    // wax ring cell, honey fill, wax lid. pointy-top hexagons, box = 2r x 2r
    ring: (r, col = HC.wax) => SP.shape('hring' + r + col, r * 2, r * 2, col, (c) => { c.lineWidth = r * 0.2; c.lineJoin = 'round'; hexPath(c, r, r, r * 0.9); c.stroke(); }, { R: Math.max(6, r * 0.08), lump: 0.8, seed: 700 + r, fps: [] }),
    fill: (r, col) => SP.shape('hfill' + r + col, r * 2, r * 2, col, (c) => { hexPath(c, r, r, r * 0.8); c.fill(); }, { R: Math.max(8, r * 0.18), dome: 0.7, lump: 0.6, seed: 710 + r, spec: 0.75 }),
    lid: (r) => SP.shape('hlid' + r, r * 2, r * 2, HC.lid, (c) => { hexPath(c, r, r, r * 0.84); c.fill(); }, { R: Math.max(8, r * 0.14), dome: 0.6, lump: 1.2, seed: 720 + r, sss: [1.05, 1, 0.95], fps: prn(721 + r, r * 2, r * 2, 2, r * 0.3) }),
  };
  const drop = (col, s = 1, key = '') => SP.shape('drop' + col + s + key, 60 * s, 84 * s, col, (c) => { const w = 60 * s, h = 84 * s; c.beginPath(); c.moveTo(w / 2, 0); c.bezierCurveTo(w * 0.62, h * 0.3, w, h * 0.5, w, h * 0.68); c.arc(w / 2, h * 0.68, w / 2, 0, Math.PI); c.bezierCurveTo(0, h * 0.5, w * 0.38, h * 0.3, w / 2, 0); c.fill(); }, { R: 9 * s, dome: 1.3, lump: 0.4, seed: 730, spec: 0.8, fps: [] });
  // the bee, facing left. s = scale, f = wing pose (0 down, 1 up)
  const bee = (s = 1, f = 0) => group('bee' + s + f, 300 * s, 240 * s, [
    [SP.shape('wingB' + s + f, 150 * s, 110 * s, HC.wing, (c) => { c.beginPath(); c.ellipse(75 * s, 55 * s, 70 * s, 40 * s, f ? -1.0 : -0.35, 0, TAU); c.fill(); }, { R: 10 * s, dome: 0.6, lump: 0.4, seed: 740 + f, spec: 0.8, sss: [1, 1, 1.05], fps: [] }), 140 * s, (f ? -10 : 10) * s, 0.25],
    [SP.shape('body' + s, 210 * s, 140 * s, HC.bodyY, (c) => { c.beginPath(); c.ellipse(105 * s, 70 * s, 105 * s, 70 * s, 0, 0, TAU); c.fill(); }, { R: 22 * s, lump: 1.0, seed: 742, fps: prn(743, 210 * s, 140 * s, 2, 18 * s) }), 80 * s, 80 * s],
    [SP.shape('stripes' + s, 210 * s, 140 * s, HC.dark, (c) => { c.save(); c.beginPath(); c.ellipse(105 * s, 70 * s, 103 * s, 68 * s, 0, 0, TAU); c.clip(); [[62, 26], [112, 26], [160, 24]].forEach(([x, w]) => c.fillRect(x * s, 0, w * s, 140 * s)); c.restore(); }, { R: 8 * s, dome: 0.6, lump: 0.6, seed: 744, fps: [] }), 80 * s, 80 * s, 0.2],
    [SP.shape('sting' + s, 40 * s, 30 * s, HC.dark, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(40 * s, 15 * s); c.lineTo(0, 30 * s); c.fill(); }, { R: 5 * s, lump: 0.3, seed: 745, fps: [] }), 280 * s, 135 * s],
    [SP.ball(HC.dark, Math.round(58 * s), 746, 0.4), 20 * s, 92 * s],
    [SP.ball(C.cream, Math.round(19 * s), 747, 0.6), 34 * s, 118 * s, 0.2],
    [SP.ball('#151018', Math.round(10 * s), 748, 0.9), 36 * s, 128 * s, 0.1],
    [SP.shape('ant' + s, 90 * s, 100 * s, HC.dark, (c) => { c.lineWidth = 9 * s; c.lineCap = 'round'; c.beginPath(); c.moveTo(70 * s, 100 * s); c.quadraticCurveTo(40 * s, 30 * s, 10 * s, 20 * s); c.moveTo(85 * s, 98 * s); c.quadraticCurveTo(70 * s, 30 * s, 45 * s, 8 * s); c.stroke(); }, { R: 5 * s, lump: 0.3, seed: 749, fps: [] }), 0, 10 * s],
    [SP.shape('wingF' + s + f, 150 * s, 110 * s, HC.wing, (c) => { c.beginPath(); c.ellipse(75 * s, 55 * s, 72 * s, 42 * s, f ? -1.2 : -0.55, 0, TAU); c.fill(); }, { R: 10 * s, dome: 0.6, lump: 0.4, seed: 750 + f, spec: 0.8, sss: [1, 1, 1.05], fps: [] }), 100 * s, (f ? -30 : 0) * s, 0.3],
  ]);
  const flower = (s = 1) => group('flower' + s, 420 * s, 420 * s, [
    ...Array.from({ length: 6 }, (_, i) => { const a = (i / 6) * TAU - Math.PI / 2; return [SP.shape('petal' + s + i, 170 * s, 170 * s, i % 2 ? HC.petal : '#f4a3c0', (c) => { c.beginPath(); c.ellipse(85 * s, 85 * s, 82 * s, 62 * s, a, 0, TAU); c.fill(); }, { R: 16 * s, lump: 0.9, seed: 760 + i }), 210 * s + Math.cos(a) * 120 * s - 85 * s, 210 * s + Math.sin(a) * 120 * s - 85 * s, 0.3]; }),
    [SP.ball('#f2a93a', Math.round(82 * s), 767, 0.4), 128 * s, 128 * s],
  ]);
  const jar = () => group('jar', 340, 420, [
    [SP.rect('jarbody', 300, 330, HC.honey, 60, { R: 26, seed: 770, spec: 0.7 }), 20, 80],
    [SP.rect('jarlid', 340, 70, '#b9773d', 18, { R: 14, seed: 771 }), 0, 30],
    [SP.rect('jarlabel', 200, 120, C.cream, 16, { R: 10, dome: 0.6, seed: 772, sss: [1.04, 1, 1] }), 70, 200],
  ]);
  const germ = (n) => SP.shape('germ' + n, 130, 130, HC.germ, (c) => { const r = H.rng(780 + n); c.beginPath(); for (let i = 0; i <= 24; i++) { const a = (i / 24) * TAU, rr = (i % 2 ? 48 : 62) + r.range(-4, 4); i ? c.lineTo(65 + Math.cos(a) * rr, 65 + Math.sin(a) * rr) : c.moveTo(65 + Math.cos(a) * rr, 65 + Math.sin(a) * rr); } c.closePath(); c.fill(); }, { R: 12, lump: 1.2, seed: 780 + n });
  const enzyme = (n) => SP.shape('enz' + n, 110, 110, C.green, (c) => { c.beginPath(); c.moveTo(55, 55); c.arc(55, 55, 52, 0.55, TAU - 0.55); c.closePath(); c.fill(); }, { R: 12, lump: 0.7, seed: 790 + n });
  const spoon = () => SP.shape('spoon', 820, 200, '#c9c5bd', (c) => { c.beginPath(); c.ellipse(130, 100, 128, 92, 0, 0, TAU); c.fill(); c.beginPath(); c.moveTo(240, 80); c.lineTo(810, 70); c.lineTo(810, 112); c.lineTo(240, 122); c.fill(); }, { R: 16, lump: 0.6, seed: 795, spec: 0.8, sss: [1.03, 1, 1.02] });
  const clock = () => SP.ball(C.cream, 110, 796, 0.4);
  const flap = () => FRN % 2;
  const objC = (spr, cx, cy, st, en, o) => obj(spr, cx - spr.w / 2, cy - spr.h / 2, st, en, o);
  const at2 = (i, w) => at(i, w);
  // comb layout (3-2-3 pointy hexes) standing on the table
  const COMB = (() => { const r = 120, dx = 208, out = []; [[1110, [332, 540, 748]], [930, [436, 644]], [750, [332, 540, 748]]].forEach(([y, xs]) => xs.forEach((x) => out.push([x, y]))); return { r, cells: [[332, 1110], [540, 1110], [748, 1110], [436, 930], [644, 930], [332, 750], [540, 750], [748, 750]] }; })();
  const comb = (st, en, fillCol, fillSt, lidSt) => {
    COMB.cells.forEach(([x, y], i) => {
      objC(HX.ring(COMB.r), x, y, st + i / 24, en, { seed: i, minor: true, shadow: { blur: 8, dx: 5, dy: 6, a: 0.4 } });
      if (fillCol && fillSt != null) objC(HX.fill(COMB.r, fillCol), x, y, (Array.isArray(fillSt) ? fillSt[i] : fillSt + i / 24), en, { seed: i, minor: true, shadow: { blur: 4, dx: 2, dy: 3, a: 0.3 } });
      if (lidSt != null) objC(HX.lid(COMB.r), x, y, lidSt + i / 12, en, { seed: i, shadow: { blur: 6, dx: 3, dy: 5, a: 0.4 } });
    });
  };
  // a moving piece (no pop): drawn at an exact position
  const at_ = (spr, x, y, o = {}) => { if (!REC) place(ctxG, spr, x - spr.w / 2, y - spr.h / 2, o); };

  // ======================= 1. HOOK: your honey was once 80% water =======================
  scene(0, 'hook', () => {
    set('hook', '#4f9fae', '#d0703f');
    obj(jar(), 370, TOP - 420, at(0, 'honey'), X, { ct: [150, 12], seed: 1 });
    wordC('80%', 540, 470, 260, at(0, '80'), X, 'fall', [C.yellow, C.coral, C.yellow], 1 / 12, 0, 'impact');
    wordC('water', 540, 640, 130, at(0, 'water'), X, 'fall', HC.water, 1 / 24);
    [[300, 760], [790, 790], [250, 980], [830, 1010], [540, 720]].forEach(([x, y], i) => objC(drop(HC.water, 1), x, y, at(0, 'water') + 0.1 + i / 12, X, { seed: i, minor: true }));
    const by = 900 + (FRN % 4 < 2 ? 0 : 8);
    if (TQ >= at(1, 'bees')) objC(bee(0.9, flap()), 820, by, at(1, 'bees'), X, { seed: 2, sx: -1 });
    wordC('dried how?', 540, 1500, 120, at(1, 'dried'), X, 'fall', PAL, 1 / 24, 0, 'pop');
  });

  // ======================= 2. NECTAR: sugary flower juice =======================
  scene(PS(2) - 0.15, 'flower', () => {
    set('garden', '#6fae8f', '#b8743f', { seed: 2 });
    coil('stem', [[540, TOP + 10], [530, 1000], [545, 800]], HC.leaf, PS(2) - 0.1, X, { head: false, wdt: 36 });
    objC(SP.shape('leafL', 200, 100, HC.leaf, (c) => { c.beginPath(); c.ellipse(100, 50, 98, 40, -0.3, 0, TAU); c.fill(); }, { R: 12, seed: 801 }), 440, 1080, PS(2), X, { seed: 1, minor: true });
    objC(flower(1), 540, 680, at(2, 'nectar') - 0.15, X, { big: true, seed: 2, shadow: { blur: 18, dx: 10, dy: 12, a: 0.4 } });
    wordC('nectar', 540, 370, 140, at(2, 'nectar'), X, 'fall', [C.yellow, C.coral], 1 / 24);
    [[500, 670], [580, 660], [540, 720]].forEach(([x, y], i) => objC(drop(HC.nectar, 0.9), x, y, at(3, 'juice') + i / 12, X, { seed: i, minor: true }));
    wordC('sugar', 540, 1450, 120, at(3, 'sugary'), X, 'fall', C.yellow, 1 / 24);
    wordC('+ water', 540, 1600, 110, at(3, 'juice'), X, 'fall', HC.water, 1 / 24);
  });

  // ======================= 3. HONEY STOMACH: sipped into a second stomach =======================
  scene(PS(4) - 0.15, 'stomach', () => {
    set('bee', '#e0a85a', '#c0703f', { seed: 3 });
    const z = 1 + 0.12 * step6(at(5, 'honey'), 0.8, 6);
    cam(z, 620, 820, () => {
      objC(flower(0.55), 150, 820, PS(4) - 0.1, X, { seed: 1 });
      const bL = obj(bee(1.8, flap()), 330, 600 + (FRN % 4 < 2 ? 0 : 6), at(4, 'bee'), X, { seed: 2, big: true });
      // nectar drop travels from the flower into the bee's mouth
      const u = step6(at(4, 'sips'), 0.7, 6);
      if (TQ >= at(4, 'sips') && TQ < at(4, 'stomach')) at_(drop(HC.nectar, 0.8), H.lerp(160, 380, u), H.lerp(800, 840, u));
      // the honey stomach: a window on the body with nectar inside
      objC(SP.shape('stwin', 170, 120, C.cream, (c) => { c.beginPath(); c.ellipse(85, 60, 84, 58, 0, 0, TAU); c.fill(); }, { R: 14, dome: 0.8, seed: 810, sss: [1.04, 1, 1] }), 700, 905, at(4, 'stomach'), X, { seed: 3, hit: 'pop' });
      const fill = step6(at(4, 'stomach') + 0.2, 0.8, 4);
      if (fill > 0) objC(SP.ball(HC.nectar, 40 + Math.round(fill * 4) * 4, 811, 0.8), 700, 915, at(4, 'stomach') + 0.2, X, { seed: 4, minor: true, shadow: { blur: 4, dx: 2, dy: 3, a: 0.3 } });
    });
    wordC('2nd stomach', 540, 400, 120, at(4, 'second'), at(5, 'honey') - 0.2, 'fall', PAL, 1 / 24);
    wordC('honey', 540, 360, 150, at(5, 'honey'), X, 'fall', [C.yellow, HC.honey], 1 / 24);
    wordC('stomach', 540, 520, 130, at(5, 'stomach'), X, 'fall', C.cream, 1 / 24);
    coil('starrow', curve(840, 1400, 880, 1200, 740, 1010), C.cream, at(5, 'stomach'), X, { wdt: 16 });
  });

  // ======================= 4. ENZYMES: chopping the sugar =======================
  scene(PS(6) - 0.15, 'enzymes', () => {
    set('belly', '#e98fa9', '#c0603f', { seed: 4 });
    objC(SP.rect('pool', 900, 120, HC.nectar, 50, { R: 22, seed: 820, spec: 0.7 }), 540, TOP - 30, PS(6) - 0.1, X, { seed: 1 });
    const chop = at(7, 'smaller');
    const sh = TQ >= at(7, 'chopping') && TQ < chop ? ((FRN % 2) * 2 - 1) * 8 : 0;
    objC(SP.rect('bigsugar', 320, 320, C.cream, 30, { R: 20, seed: 821, sss: [1.04, 1, 1], fps: prn(822, 320, 320, 3, 30) }), 540 + sh, 950, PS(6), chop, { seed: 2, big: true });
    [[200, 700], [880, 720], [180, 1060], [900, 1080]].forEach(([x, y], i) => objC(enzyme(i), x, y, at(6, 'enzymes') + i / 12, X, { seed: i, rot: [0.3, Math.PI - 0.3, -0.4, Math.PI + 0.4][i], minor: true }));
    wordC('enzymes', 540, 400, 150, at(6, 'enzymes'), X, 'fall', [C.green, '#7fd06a'], 1 / 24);
    [[400, 830, C.cream], [680, 830, C.yellow], [400, 1070, C.yellow], [680, 1070, C.cream]].forEach(([x, y, col], i) => objC(SP.rect('small' + col, 150, 150, col, 22, { R: 14, seed: 823 + i }), x, y, chop + i / 24, X, { seed: i, hit: i ? null : 'stamp' }));
    wordC('big sugar', 540, 1500, 110, at(7, 'sugar'), chop - 0.1, 'fall', C.cream, 1 / 24);
    wordC('small sugars', 540, 1500, 110, chop + 0.1, X, 'fall', [C.cream, C.yellow], 1 / 24);
  });

  // ======================= 5. HIVE: mouth to mouth, chewed 20 minutes =======================
  scene(PS(8) - 0.15, 'hive', () => {
    set('hive', '#d4922e', '#8a5a3a', { seed: 5 });
    for (let i = 0; i < 6; i++) if (!REC) place(ctxG, HX.ring(80, '#e9b04a'), -40 + i * 190, 170 + (i % 2) * 60, { shadow: { blur: 6, dx: 3, dy: 5, a: 0.35 } });
    const bob = FRN % 4 < 2 ? 0 : 6;
    obj(bee(1.15, flap()), 30, 700 + bob, PS(8), X, { seed: 1, sx: -1, big: true });
    obj(bee(1.15, flap() ^ 1), 705, 700 - bob, at(10, 'house'), X, { seed: 2, big: true });
    wordC('the hive', 540, 470, 140, at(8, 'hive'), PS(11) - 0.1, 'fall', [C.cream, C.yellow], 1 / 24);
    // the drop passes across at "mouth to mouth"
    const a0 = at(9, 'mouth'), u = step6(a0, 0.9, 6);
    if (TQ >= a0) at_(drop(HC.nectar, 0.9), H.lerp(470, 640, TQ >= at(10, 'house') ? 1 : u), 870 + (TQ >= at(11, 'chews') ? ((FRN >> 1) % 2) * -14 : 0));
    wordC('mouth to mouth', 540, 1440, 96, at(9, 'mouth'), PS(11) - 0.1, 'fall', C.coral, 1 / 24);
    wordC('house bee', 790, 640, 70, at(10, 'house'), X, 'fall', C.cream, 1 / 24);
    // a clay clock ticks round as she chews
    objC(clock(), 540, 440, at(11, 'chews'), X, { seed: 3, ct: null });
    const turn = Math.floor(H.clamp((TQ - at(11, 'chews')) / 2.4) * 8) / 8;
    if (TQ >= at(11, 'chews') + 1 / 6) at_(SP.rect('hand', 18, 90, C.red, 8, { R: 6, seed: 830, fps: [] }), 540, 440, { ax: 9, ay: 90, rot: turn * TAU * 0.8, shadow: { blur: 3, dx: 2, dy: 3, a: 0.4 } });
    wordC('20 min', 540, 1600, 160, at(11, '20'), X, 'fall', [C.yellow, C.yellow, C.coral], 1 / 12, 0, 'impact');
  });

  // ======================= 6. WAX CELL: still way too runny =======================
  scene(PS(12) - 0.15, 'cell', () => {
    set('comb', '#c9822a', '#8a5a3a', { seed: 6 });
    const into = at(12, 'cell');
    comb(PS(12), X, HC.runny, COMB.cells.map((c, i) => (i === 3 ? into + 0.25 : at(13, 'runny') + i / 24)), null);
    const u = H.clamp((TQ - (into - 0.3)) / 0.5); const fy = H.lerp(380, 930, u * u);
    if (TQ >= into - 0.3 && TQ < into + 0.25) at_(drop(HC.runny, 1.2), 436, fy);
    wordC('wax cell', 540, 1480, 130, at(12, 'wax'), X, 'fall', C.cream, 1 / 24);
    const wob = TQ >= at(13, 'runny') ? [0, 6, -6, 3][FRN % 4] : 0;
    wordC('too runny!', 540 + wob, 440, 130, at(13, 'runny'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'slap');
    // runny drips sliding off the comb
    [[332, 1210], [748, 1210]].forEach(([x, y], i) => { const t0 = at(13, 'runny') + 0.3 + i * 0.2; if (TQ >= t0) at_(drop(HC.runny, 0.6), x, y + ((Math.floor((TQ - t0) * 6) % 3) * 12)); });
  });

  // ======================= 7. FAN: wings blow the water away, 80% -> 18% =======================
  scene(PS(14) - 0.15, 'fan', () => {
    set('comb', '#c9822a', '#8a5a3a', { seed: 6 });
    const dry = at(16, '18');
    comb(-1, X, TQ >= dry ? HC.deep : HC.runny, -1, null);
    [[230, 330], [540, 290], [850, 330]].forEach(([x, y], i) => objC(bee(0.9, (FRN + i) % 2), x, y + ((FRN + i) % 2) * 6, at(14, 'bees') + i / 12, X, { seed: i, sx: i === 2 ? 1 : -1 }));
    [0, 1, 2].forEach((i) => coil('wind' + i, wiggle(230 + i * 310, 640, 120, 14, 14).reverse(), C.cream, at(14, 'fan') + i / 12, X, { wdt: 12, seed: i }));
    // water droplets lift off the cells and fly away
    COMB.cells.forEach(([x, y], i) => { const t0 = at(15, 'blowing') + i * 0.12; if (TQ >= t0 && TQ < dry + 0.4) { const k = Math.floor((TQ - t0) * 12); at_(drop(HC.water, 0.55), x + (i % 2 ? 1 : -1) * k * 6, y - 60 - k * 38); } });
    const c0 = at(15, 'blowing'), c1 = dry;
    if (REC) { rec({ k: 'count', t0: c0, t1: c1 }); rec({ k: 'hit', t: dry, hit: 'impact' }); rec({ k: 'whoosh', t: at(14, 'fan') }); }
    if (TQ >= at(14, 'wings')) {
      const n = Math.round(H.lerp(80, 18, Math.pow(H.clamp((TQ - c0) / (c1 - c0)), 0.8)));
      const big = TQ >= dry ? [1.2, 1.1, 1.04, 1][Math.min(3, Math.floor((TQ - dry) * 6))] : 1;
      cam(big, 540, 1520, () => wordC(n + '%', 540, 1620, 230, at(14, 'wings'), X, 'fall', TQ >= dry ? C.yellow : HC.water, 0));
      wordC('water', 540, 1360, 80, at(14, 'wings'), X, 'fall', C.cream, 1 / 24);
    }
  });

  // ======================= 8. GERMS: so thick germs can't grow =======================
  scene(PS(17) - 0.15, 'germs', () => {
    set('germs', '#5d8f6a', '#8a5a3a', { seed: 8 });
    objC(HX.fill(280, HC.deep), 540, 950, PS(17) - 0.1, X, { seed: 1, big: true });
    objC(HX.ring(300), 540, 950, PS(17) - 0.1, X, { seed: 2 });
    wordC('so thick', 540, 420, 150, at(17, 'thick'), X, 'fall', [HC.honey, C.yellow], 1 / 24);
    const gone = at(18, 'grow') + 0.3;
    [[190, 700], [880, 760], [210, 1150], [870, 1180]].forEach(([x, y], i) => { const w = ((FRN + i) % 2) * 6; objC(germ(i), x + w, y, at(18, 'germs') + i / 12, gone, { seed: i }); });
    objC(SP.xmark(), 540, 950, at(18, 'cant'), gone + 0.3, { rot: 0.1, hit: 'slap', big: true, seed: 3 });
    wordC('germs', 540, 1480, 120, at(18, 'germs'), X, 'fall', HC.germ, 1 / 24);
    wordC("can't grow", 540, 1620, 110, at(18, 'cant'), X, 'fall', C.coral, 1 / 24);
  });

  // ======================= 9. CAP: wax lids =======================
  scene(PS(19) - 0.15, 'cap', () => {
    set('comb', '#c9822a', '#8a5a3a', { seed: 6 });
    comb(-1, X, HC.deep, -1, at(19, 'cap'));
    wordC('capped', 540, 440, 150, at(19, 'cap'), X, 'fall', [C.cream, C.yellow], 1 / 24);
    wordC('with wax', 540, 1480, 130, at(20, 'wax'), X, 'fall', HC.lid, 1 / 24, 0, 'success');
  });

  // ======================= 10. ONE BEE'S LIFE: a twelfth of a teaspoon =======================
  scene(PS(21) - 0.15, 'lifetime', () => {
    set('spoon', '#4f9fae', '#d0703f', { seed: 10 });
    obj(spoon(), 130, TOP - 210, PS(21), X, { ct: [380, 14], seed: 1 });
    objC(drop(HC.honey, 0.9), 260, TOP - 130, at(21, 'teaspoon'), X, { seed: 2, hit: 'pop' });
    objC(bee(0.9, flap()), 860, 860 + (FRN % 4 < 2 ? 0 : 6), at(21, 'bee'), X, { seed: 3 });
    wordC('one bee', 540, 380, 110, at(21, 'one'), X, 'fall', C.cream, 1 / 24);
    wordC('1/12', 430, 680, 240, at(21, 'twelfth'), X, 'fall', [C.yellow, C.coral, C.yellow, C.coral], 1 / 12, 0, 'impact');
    wordC('teaspoon', 430, 820, 96, at(21, 'teaspoon'), X, 'fall', C.cream, 1 / 24);
    wordC('per lifetime', 540, 1500, 110, at(22, 'whole'), X, 'fall', [C.yellow, C.cream], 1 / 24);
  });

  // ======================= 11. END: flower juice, or bee spit? =======================
  scene(PS(23) - 0.15, 'end', () => {
    set('hook', '#4f9fae', '#d0703f');
    obj(jar(), 370, TOP - 420, PS(23) - 0.1, null, { ct: [150, 12], seed: 1 });
    objC(flower(0.5), 170, 620, at(23, 'flower'), null, { seed: 2 });
    objC(bee(0.8, flap()), 880, 640 + (FRN % 4 < 2 ? 0 : 6), at(24, 'bee'), null, { seed: 3 });
    wordC('flower juice', 540, 400, 110, at(23, 'flower'), null, 'fall', [C.pink, C.yellow], 1 / 24);
    wordC('or', 540, 1420, 80, at(24, 'or'), null, 'fall', C.cream, 1 / 24);
    wordC('bee spit?', 540, 1590, 140, at(24, 'bee'), null, 'fall', [C.coral, C.yellow], 1 / 24);
    wordC('?', 540, 1150, 120, T(24, 'spit') + 0.3, null, 'fall', C.yellow, 1 / 12, 0, 'end');
  });

  SC.sort((a, b) => a.s - b.s);
  SC.forEach((s, i) => { s.e = i + 1 < SC.length ? SC[i + 1].s : DURATION + 1; });
  // scenes that continue on the same set skip the knock-off exit (the comb stays, things change on it)
  const KEEP = { cell: 1, fan: 1 };

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
    // soft wing buzz while bees are on screen (minor, low, under the voice)
    [[at(1, 'bees'), PS(2) - 0.2], [at(4, 'bee'), PS(6) - 0.2], [PS(8), PS(12) - 0.2], [at(14, 'bees'), PS(17) - 0.2], [at(21, 'bee'), PS(23) - 0.2], [at(24, 'bee'), DURATION - 0.3]].forEach(([a, b]) => {
      for (let t = a; t < b; t += 0.6) k.withMinor(() => { k.tone(t, { f: 228, type: 'sawtooth', dur: 0.62, gain: 0.025, a: 0.08, hold: 0.4, filter: 'lowpass', f2: 900 }); k.tone(t, { f: 231, type: 'sawtooth', dur: 0.62, gain: 0.02, a: 0.08, hold: 0.4, filter: 'lowpass', f2: 900 }); });
    });
    SC.slice(1).forEach((s) => squelch(q(s.s), 0.35, 0, 0.1));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W0; window.VIDEO_H = H0; window.SCENES = SC;
})();
