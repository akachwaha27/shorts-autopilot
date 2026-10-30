// ================= Low-Poly Faceted, vertical 1080x1920: "How do penguins keep their feet from freezing?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take) ----------
  const BEATS = [
    { s: 0.25, e: 2.09, w: {youd: 0.25, lose: 0.54, your: 0.84, toes: 1.13, on: 1.43, this: 1.58, ice: 1.87} }, // 0 You'd lose your toes on this ice.
    { s: 2.64, e: 4.97, w: {emperor: 2.64, penguins: 3.09, stand: 3.61, on: 3.93, it: 4.06, for: 4.19, two: 4.39, months: 4.58} }, // 1 Emperor penguins stand on it for two months.
    { s: 5.52, e: 7.18, w: {the: 5.52, secret: 5.74, is: 6.2, in: 6.35, their: 6.5, legs: 6.88} }, // 2 The secret is in their legs.
    { s: 7.73, e: 9.76, w: {warm: 7.73, blood: 8.01, flowing: 8.36, down: 8.85, to: 9.13, the: 9.27, feet: 9.48} }, // 3 Warm blood flowing down to the feet
    { s: 10.06, e: 13.02, w: {runs: 10.06, right: 10.39, beside: 10.8, cold: 11.29, blood: 11.62, coming: 12.03, back: 12.53, up: 12.85} }, // 4 runs right beside cold blood coming back up.
    { s: 13.57, e: 15.17, w: {so: 13.57, the: 13.73, heat: 13.97, jumps: 14.29, across: 14.69} }, // 5 So the heat jumps across,
    { s: 15.47, e: 17.16, w: {like: 15.47, passing: 15.8, a: 16.36, hot: 16.44, potato: 16.68} }, // 6 like passing a hot potato.
    { s: 17.71, e: 19.79, w: {by: 17.71, the: 17.86, time: 18.08, blood: 18.38, reaches: 18.75, the2: 19.27, toes: 19.5} }, // 7 By the time blood reaches the toes,
    { s: 20.09, e: 21.62, w: {its: 20.09, just: 20.32, above: 20.63, freezing: 21.01} }, // 8 it's just above freezing.
    { s: 22.17, e: 24.91, w: {cold: 22.17, toes: 22.5, lose: 22.82, very: 23.14, little: 23.46, heat: 23.95, to: 24.27, the: 24.43, ice: 24.67} }, // 9 Cold toes lose very little heat to the ice,
    { s: 25.21, e: 27.18, w: {and: 25.21, the: 25.4, warmth: 25.59, goes: 25.97, back: 26.23, into: 26.48, the2: 26.73, body: 26.93} }, // 10 and the warmth goes back into the body.
    { s: 27.73, e: 29.38, w: {feet: 27.73, near: 28.08, zero: 28.43, degrees: 28.77} }, // 11 Feet near zero degrees,
    { s: 29.68, e: 31.01, w: {body: 29.68, near: 29.96, thirtyeight: 30.24} }, // 12 body near thirty-eight.
    { s: 31.56, e: 33.21, w: {if: 31.56, the: 31.74, toes: 32.0, get: 32.34, too: 32.61, cold: 32.87} }, // 13 If the toes get too cold,
    { s: 33.51, e: 35.6, w: {the: 33.51, penguin: 33.74, widens: 34.28, its: 34.75, arteries: 34.98} }, // 14 the penguin widens its arteries,
    { s: 35.9, e: 38.21, w: {and: 35.9, sends: 36.11, down: 36.47, a: 36.76, little: 36.84, more: 37.27, warm: 37.56, blood: 37.85} }, // 15 and sends down a little more warm blood.
    { s: 38.76, e: 39.67, w: {still: 38.76, chilly: 39.17} }, // 16 Still chilly?
    { s: 40.22, e: 42.59, w: {it: 40.22, rocks: 40.37, back: 40.72, on: 41.01, its: 41.16, heels: 41.37, and: 41.73, stiff: 41.95, tail: 42.31} }, // 17 It rocks back on its heels and stiff tail,
    { s: 42.89, e: 44.64, w: {lifting: 42.89, its: 43.42, toes: 43.65, off: 43.95, the: 44.18, ice: 44.41} }, // 18 lifting its toes off the ice,
    { s: 44.94, e: 46.08, w: {and: 44.94, hunches: 45.18, down: 45.75} }, // 19 and hunches down,
    { s: 46.38, e: 48.39, w: {so: 46.38, belly: 46.52, feathers: 46.86, blanket: 47.42, its: 47.91, feet: 48.11} }, // 20 so belly feathers blanket its feet.
    { s: 48.94, e: 51.44, w: {a: 48.94, penguin: 49.02, keeps: 49.55, its: 49.93, feet: 50.15, cold: 50.46, on: 50.76, purpose: 50.91} }, // 21 A penguin keeps its feet cold on purpose.
    { s: 51.99, e: 54.28, w: {so: 51.99, how: 52.13, long: 52.33, would: 52.6, your: 52.94, toes: 53.21, last: 53.47, out: 53.74, there: 53.95} }, // 22 So how long would your toes last out there?
  ];
  const P = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes (facet-flip wipes): ice colony -> leg studio -> temperature pillars -> leg studio (valve) -> pose studio -> colony
  const CUT = { legs: 7.45, nums: 27.45, valve: 31.29, pose: 38.49, end: 48.66 };
  const CUTS = [CUT.legs, CUT.nums, CUT.valve, CUT.pose, CUT.end];
  const WIPE = 0.55;

  // ---------- tiny 3D pipeline (from the reference) ----------
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const scl = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const ICO = (() => {
    const t = (1 + Math.sqrt(5)) / 2;
    const v = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map(norm);
    const f = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];
    return { v, f };
  })();
  // one subdivision: 80 faces, still clearly faceted
  const ICO2 = (() => {
    const v = ICO.v.slice(), f = [], cache = {};
    const mid = (a, b) => { const k = a < b ? a + '_' + b : b + '_' + a; if (cache[k] == null) { cache[k] = v.length; v.push(norm(scl(add3(v[a], v[b]), 0.5))); } return cache[k]; };
    for (const [a, b, c] of ICO.f) { const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a); f.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]); }
    return { v, f };
  })();
  function makeCamYaw(pos, yaw, pitch, f, W_, Hh) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    return { pos, f, proj(p) { const dx = p[0] - pos[0], dy = p[1] - pos[1], dz = p[2] - pos[2]; const x1 = dx * cy - dz * sy, z1 = dx * sy + dz * cy; const y2 = dy * cp + z1 * sp, z2 = -dy * sp + z1 * cp; return [W_ / 2 + (f * x1) / z2, Hh / 2 - (f * y2) / z2, z2]; } };
  }

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const BK = (t, a, d = 0.3) => H.ease.back(ph(t, a, a + d));
  const win = (t, a, b, fi = 0.3, fo = 0.3) => H.ease.back(ph(t, a, a + fi)) * (1 - H.ease.inOut(ph(t, b, b + fo)));
  const INK = '#1d2350', CORAL = '#ff6a5a', ICEC = '#dff1ff', WARM = [255, 96, 80], COLD = [96, 170, 255];
  const FONT = (px) => `700 ${px}px "Space Grotesk"`;
  // cut-corner tag (faceted label), from the reference
  function lpTag(ctx, x, y, text, o = {}) {
    const k = o.k ?? 1; if (k <= 0.01) return;
    ctx.save();
    ctx.font = o.font || FONT(48);
    const fsz = parseInt((ctx.font.match(/(\d+)px/) || [0, 48])[1]);
    const w = ctx.measureText(text).width + fsz * 1.3, h = o.h || Math.round(fsz * 1.75), ch = h * 0.32;
    ctx.translate(x, y); ctx.scale(k, k);
    const pts = [[-w / 2 + ch, -h / 2], [w / 2, -h / 2], [w / 2, h / 2 - ch], [w / 2 - ch, h / 2], [-w / 2, h / 2], [-w / 2, -h / 2 + ch]];
    ctx.fillStyle = o.shadow || 'rgba(20,24,70,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 6, p[1] + 6) : ctx.moveTo(p[0] + 6, p[1] + 6)); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || '#f4f8ff');
    ctx.fillStyle = H.rgba(bg); ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(bg, [255, 255, 255], 0.5)); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(w / 2 - h * 0.6, 0); ctx.lineTo(-w / 2, 0); ctx.lineTo(pts[5][0], pts[5][1]); ctx.closePath(); ctx.fill();
    ctx.fillStyle = o.col || INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 0, 2);
    ctx.restore();
  }
  // faceted ribbon arrow, from the reference
  function lpArrow(ctx, a, c, b, prog, colA, w = 18) {
    if (prog <= 0) return null;
    const q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]];
    const N = 8, pts = []; for (let i = 0; i <= N; i++) pts.push(q(prog * i / N));
    const light = H.rgba(H.mix(colA, [255, 255, 255], 0.3)), dark = H.rgba(H.mix(colA, [20, 24, 70], 0.25));
    const end = pts.length - 1;
    for (let i = 0; i < end; i++) {
      const p0 = pts[i], p1 = pts[i + 1], dx = p1[0] - p0[0], dy = p1[1] - p0[1], L = Math.hypot(dx, dy) || 1;
      const nx = -dy / L * w / 2, ny = dx / L * w / 2, shrink = i === end - 1 ? 0.35 : 0, p1b = [p1[0] - dx * shrink, p1[1] - dy * shrink];
      ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(p0[0] + nx, p0[1] + ny); ctx.lineTo(p1b[0] + nx, p1b[1] + ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
      ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(p0[0] - nx, p0[1] - ny); ctx.lineTo(p1b[0] - nx, p1b[1] - ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
    }
    const e = pts[end], e0 = pts[end - 1], ang = Math.atan2(e[1] - e0[1], e[0] - e0[0]);
    ctx.save(); ctx.translate(e[0], e[1]); ctx.rotate(ang);
    ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-w * 1.4, -w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-w * 1.4, w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.restore(); return q;
  }
  // hex badge (check / cross), from the reference
  function hexBadge(ctx, x, y, k, ok, r = 46) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(0.12);
    ctx.fillStyle = ok ? '#3ccf9a' : '#ff5a4a'; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.moveTo(0, 0); for (let i = 3; i <= 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = r * 0.2; ctx.lineJoin = 'miter'; ctx.beginPath(); const s = r / 24;
    if (ok) { ctx.moveTo(-10 * s, 0); ctx.lineTo(-3 * s, 8 * s); ctx.lineTo(11 * s, -9 * s); } else { ctx.moveTo(-8 * s, -8 * s); ctx.lineTo(8 * s, 8 * s); ctx.moveTo(8 * s, -8 * s); ctx.lineTo(-8 * s, 8 * s); }
    ctx.stroke(); ctx.restore();
  }
  // faceted sun disc (reference recipe)
  function facetDisc(ctx, x, y, r, cA, cB, halo) {
    if (halo) { const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 6); g.addColorStop(0, halo); g.addColorStop(1, 'rgba(255,214,200,0)'); ctx.fillStyle = g; ctx.fillRect(x - r * 6, y - r * 6, r * 12, r * 12); }
    for (let i = 0; i < 14; i++) {
      const a0 = (i / 14) * Math.PI * 2, a1 = ((i + 1) / 14) * Math.PI * 2;
      ctx.fillStyle = H.rgba(H.mix(cA, cB, 0.5 + 0.5 * Math.cos(a0 - 2.3))); ctx.strokeStyle = ctx.fillStyle; ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a0) * r, y + Math.sin(a0) * r); ctx.lineTo(x + Math.cos(a1) * r, y + Math.sin(a1) * r); ctx.closePath(); ctx.fill(); ctx.stroke();
    }
  }
  // drifting faceted snow shards, pure function of t
  function snow(ctx, t, n, alpha, seed = 12) {
    if (alpha <= 0.01) return;
    const r = H.rng(seed);
    ctx.save(); ctx.globalAlpha = alpha;
    for (let i = 0; i < n; i++) {
      const x0 = r() * W, sp = r.range(50, 120), ph0 = r() * 6.28, A = r.range(20, 60), size = r.range(6, 13), y0 = r() * (HH + 200);
      const y = ((y0 + t * sp) % (HH + 200)) - 100, x = x0 + Math.sin(t * 0.9 + ph0) * A - t * 30 % W;
      const xx = ((x % W) + W) % W, rot = t * r.range(-1.5, 1.5) + ph0;
      ctx.save(); ctx.translate(xx, y); ctx.rotate(rot);
      ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.beginPath(); ctx.moveTo(0, -size); ctx.lineTo(size * 0.7, 0); ctx.lineTo(0, 0); ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(200,220,255,0.9)'; ctx.beginPath(); ctx.moveTo(0, -size); ctx.lineTo(-size * 0.7, 0); ctx.lineTo(0, 0); ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(170,196,245,0.9)'; ctx.beginPath(); ctx.moveTo(-size * 0.7, 0); ctx.lineTo(size * 0.7, 0); ctx.lineTo(0, size * 0.8); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
    ctx.restore();
  }

  // =================== THE PENGUIN MESH (emperor, ~1.3 units tall, feet at y=0, facing -z) ===================
  const BLACK = [34, 38, 56], WHITE = [242, 244, 248], YEL = [252, 214, 128], EAR = [250, 168, 52], FOOT = [70, 64, 84], BEAK = [44, 44, 60], BEAKO = [244, 128, 92];
  function makePenguin() {
    const tris = [];
    const push = (p, col, center, part) => tris.push({ p, col, center, part });
    const outN = (f, c) => { let n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0]))); const cen = scl(add3(add3(f[0], f[1]), f[2]), 1 / 3); if (dot(n, sub(cen, c)) < 0) n = scl(n, -1); return [n, cen]; };
    // body: pear-shaped ellipsoid
    const BC = [0, 0.55, 0];
    const bv = ICO2.v.map((v) => { const wid = 1 - 0.2 * v[1]; return [v[0] * 0.33 * wid, 0.55 + v[1] * 0.53, v[2] * 0.29 * wid - (v[1] > 0.4 ? (v[1] - 0.4) * 0.06 : 0)]; });
    for (const [a, b, c] of ICO2.f) {
      const f = [bv[a], bv[b], bv[c]], [n, cen] = outN(f, BC);
      let col = BLACK;
      if (n[2] < -0.28 && Math.abs(n[0]) < 0.82) col = cen[1] > 0.86 ? H.mix(YEL, WHITE, H.clamp((0.98 - cen[1]) * 5)) : WHITE;
      push(f, col, BC, 'body');
    }
    // head
    const HC = [0, 1.13, -0.05];
    const hv = ICO.v.map((v) => [HC[0] + v[0] * 0.17, HC[1] + v[1] * 0.16, HC[2] + v[2] * 0.19]);
    for (const [a, b, c] of ICO.f) {
      const f = [hv[a], hv[b], hv[c]], [n] = outN(f, HC);
      const col = Math.abs(n[0]) > 0.5 && n[1] < 0.35 && n[2] > -0.6 ? EAR : BLACK;
      push(f, col, HC, 'head');
    }
    // beak (square pyramid), lower facets orange like the emperor's mandible stripe
    const bt = [0, 1.07, -0.43], bb = [[-0.045, 1.13, -0.2], [0.045, 1.13, -0.2], [0.045, 1.06, -0.2], [-0.045, 1.06, -0.2]], bc = [0, 1.09, -0.28];
    for (let i = 0; i < 4; i++) push([bt, bb[i], bb[(i + 1) % 4]], i === 2 ? BEAKO : BEAK, bc, 'beak');
    // feet (flat wedges), toes forward
    for (const sx of [-0.12, 0.12]) {
      const tl = [sx - 0.08, 0.004, -0.27], tr = [sx + 0.08, 0.004, -0.27], hl = [sx, 0.004, 0.06], tp = [sx, 0.075, -0.06], fc = [sx, 0.03, -0.1];
      push([tl, tr, tp], FOOT, fc, 'foot'); push([tr, hl, tp], H.mix(FOOT, [0, 0, 0], 0.2), fc, 'foot'); push([hl, tl, tp], H.mix(FOOT, [0, 0, 0], 0.2), fc, 'foot'); push([tl, hl, tr], FOOT, fc, 'foot');
    }
    // stiff tail: wedge pointing back and down
    const ta = [-0.07, 0.2, 0.18], tb = [0.07, 0.2, 0.18], tc = [0, 0.27, 0.2], tt = [0, 0.1, 0.4], tcc = [0, 0.19, 0.26];
    push([ta, tb, tt], BLACK, tcc, 'tail'); push([tb, tc, tt], BLACK, tcc, 'tail'); push([tc, ta, tt], BLACK, tcc, 'tail'); push([ta, tc, tb], BLACK, tcc, 'tail');
    // flippers
    for (const s of [-1, 1]) {
      const sh = [s * 0.3, 0.86, -0.02], tip = [s * 0.37, 0.32, 0.06], fr = [s * 0.35, 0.62, -0.1], bk = [s * 0.32, 0.62, 0.1], fcc = [s * 0.32, 0.6, 0];
      push([sh, fr, tip], BLACK, fcc, 'flip'); push([sh, tip, bk], BLACK, fcc, 'flip'); push([sh, bk, fr], BLACK, fcc, 'flip'); push([fr, bk, tip], WHITE, fcc, 'flip');
    }
    return tris;
  }
  const PENG = makePenguin();
  // pose transform: rock back about the heel line (z = ZH), hunch (squash body down toward the feet)
  const ZH = 0.07;
  function poseXf(p, part, pose) {
    let [x, y, z] = p;
    if (pose.hunch && part !== 'foot') {
      const h = pose.hunch;
      y = y * (1 - 0.16 * h);
      if (part === 'body' && y < 0.32) { const k = (0.32 - y) / 0.32; y = H.lerp(y, 0.012, h * 0.75 * k); z -= h * 0.05 * k; x *= 1 + 0.08 * h * k; }
      if (part === 'tail') y += 0.02 * h;
    }
    if (pose.rock) {
      const a = pose.rock, dz = z - ZH, c = Math.cos(a), s = Math.sin(a);
      [y, z] = [y * c - dz * s, y * s + dz * c + ZH];
    }
    return [x, y, z];
  }

  // =================== ICE COLONY (hook + end) ===================
  const nz = H.makeNoise(57);
  const height = (x, z) => {
    const ridge = H.smooth(26, 70, Math.abs(x - 6 * Math.sin(z * 0.03))) * (10 + 9 * nz.fbm2(x * 0.03 + 9, z * 0.03, 3));
    const far = H.smooth(110, 200, z) * (20 + 10 * nz.n2(x * 0.02, 3));
    return nz.fbm2(x * 0.05, z * 0.05, 4) * 0.9 + Math.max(0, ridge) + far;
  };
  let TERR = null, HERO = null;
  const HERO_POS = [0.5, 0, 38], PSCALE = 3.0;
  function buildColony() {
    const tris = [];
    const CELL = 4.4, X0 = -110, X1 = 120, Z0 = -20, Z1 = 230;
    const nx = Math.round((X1 - X0) / CELL), nzc = Math.round((Z1 - Z0) / CELL);
    const jr = H.rng(5), V = [];
    for (let j = 0; j <= nzc; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = X0 + i * CELL + (i > 0 && i < nx ? jr.range(-0.38, 0.38) * CELL : 0), z = Z0 + j * CELL + (j > 0 && j < nzc ? jr.range(-0.38, 0.38) * CELL : 0); row.push([x, height(x, z), z]); } V.push(row); }
    const tc = (y, slope) => {
      let c = H.mix([238, 244, 252], [214, 228, 248], H.clamp(y / 8));
      if (y > 9) c = H.mix(c, [184, 208, 240], H.smooth(9, 18, y));
      if (slope > 0.5 && y > 4) c = H.mix(c, [96, 100, 128], H.smooth(0.5, 0.75, slope) * 0.8); // dark rock showing through
      return c;
    };
    for (let j = 0; j < nzc; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1];
      const faces = (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]];
      for (const f of faces) {
        let n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0]))); if (n[1] < 0) n = scl(n, -1);
        tris.push({ p: f, col: tc((f[0][1] + f[1][1] + f[2][1]) / 3, 1 - Math.abs(n[1])), terrain: true });
      }
    }
    // the colony: emperor penguins standing on the flat sea ice
    const pr = H.rng(21), spots = [[HERO_POS[0], HERO_POS[2], -0.25, 1]];
    for (let k = 0; k < 400 && spots.length < 34; k++) {
      const x = pr.range(-20, 22), z = pr.range(40, 92);
      if (spots.some(([sx, sz]) => Math.hypot(sx - x, sz - z) < 3.4)) continue;
      spots.push([x, z, pr.range(-0.9, 0.9) + Math.PI * (pr() < 0.25 ? 1 : 0), pr.range(0.9, 1.08)]);
    }
    spots.forEach(([x, z, yaw, s], idx) => {
      const y0 = height(x, z), cy = Math.cos(yaw), sy = Math.sin(yaw), S = PSCALE * s;
      const xf = (p) => [x + (p[0] * cy - p[2] * sy) * S, y0 + p[1] * S, z + (p[0] * sy + p[2] * cy) * S];
      for (const tri of PENG) tris.push({ p: tri.p.map(xf), col: tri.col, center: xf(tri.center), peng: idx === 0 ? 'hero' : true, part: tri.part });
      if (idx === 0) HERO = { x, y: y0, z, S };
    });
    TERR = tris;
  }
  const POLAR = { sky: ['#14235a', '#34539a', '#8fb0e4', '#ffd8c6'], SUN: [255, 238, 224], AMB: [150, 166, 214], FOG: [222, 230, 248], FOG_HI: [196, 206, 240], disc: ['#ffd2b0', '#fff6ea'], halo: 'rgba(255,220,200,0.55)' };
  const SUN_DIR = norm([0.7, 0.45, -0.55]);
  function drawColony(ctx, t, K, glowLegs = 0) {
    if (!TERR) buildColony();
    const M = POLAR;
    const cam = makeCamYaw([K[0], K[1], K[2]], K[3], K[4], 1000, W, HH);
    const sky = ctx.createLinearGradient(0, 0, 0, HH * 0.45);
    M.sky.forEach((c, i) => sky.addColorStop(i / 3, c)); ctx.fillStyle = sky; ctx.fillRect(0, 0, W, HH);
    const R0 = H.rng(77);
    for (let i = 0; i < 120; i++) { const x = R0() * W, y = R0() * 520, a = (1 - y / 520) * R0() * 0.6; ctx.fillStyle = `rgba(255,245,255,${a})`; ctx.fillRect(x, y, 2, 2); }
    const sp = cam.proj([cam.pos[0] + 120, cam.pos[1] + 30, cam.pos[2] + 400]);
    if (sp[2] > 0) facetDisc(ctx, sp[0], sp[1], 62, M.disc[0], M.disc[1], M.halo);
    const out = [];
    for (const tri of TERR) {
      const [a, b, c] = tri.p;
      let n = norm(cross(sub(b, a), sub(c, a)));
      const cen = scl(add3(add3(a, b), c), 1 / 3);
      if (tri.terrain) { if (n[1] < 0) n = scl(n, -1); }
      else if (tri.center) { if (dot(n, sub(cen, tri.center)) < 0) n = scl(n, -1); }
      const toCam = sub(cam.pos, cen);
      if (dot(n, toCam) <= 0) continue;
      const pa = cam.proj(a), pb = cam.proj(b), pc = cam.proj(c);
      if (pa[2] < 0.5 || pb[2] < 0.5 || pc[2] < 0.5) continue;
      const mnx = Math.min(pa[0], pb[0], pc[0]), mxx = Math.max(pa[0], pb[0], pc[0]), mny = Math.min(pa[1], pb[1], pc[1]), mxy = Math.max(pa[1], pb[1], pc[1]);
      if (mxx < -20 || mnx > W + 20 || mxy < -20 || mny > HH + 20) continue;
      const depth = (pa[2] + pb[2] + pc[2]) / 3;
      const lam = Math.max(0, dot(n, SUN_DIR));
      let kk = tri.peng ? 0.3 + 0.75 * lam : lam;
      if (tri.terrain && lam > 0) {
        const e2 = Math.max((pa[0] - pb[0]) ** 2 + (pa[1] - pb[1]) ** 2, (pb[0] - pc[0]) ** 2 + (pb[1] - pc[1]) ** 2, (pc[0] - pa[0]) ** 2 + (pc[1] - pa[1]) ** 2);
        const area2 = Math.abs((pb[0] - pa[0]) * (pc[1] - pa[1]) - (pc[0] - pa[0]) * (pb[1] - pa[1]));
        if (e2 > 3600) kk *= H.lerp(0.3, 1, H.smooth(0.06, 0.2, area2 / e2));
      }
      let col = [0, 1, 2].map(i => tri.col[i] * (M.AMB[i] / 255 * 0.8 + M.SUN[i] / 255 * kk * 0.5));
      if (tri.terrain) col = col.map((v) => Math.min(255, v * 1.05));
      if (tri.peng === 'hero' && tri.part === 'foot' && glowLegs > 0) col = H.mix(col, [255, 120, 90], glowLegs * 0.85);
      const fogK = H.clamp(Math.pow(H.smooth(40, 260, depth), 1.15) * 0.9);
      col = H.mix(col, H.mix(M.FOG, M.FOG_HI, H.clamp(cen[1] / 30)), fogK);
      out.push({ pa, pb, pc, depth, col });
    }
    out.sort((p, q) => q.depth - p.depth);
    ctx.lineJoin = 'round'; ctx.lineWidth = 0.9;
    for (const o of out) { const fs = `rgb(${o.col[0] | 0},${o.col[1] | 0},${o.col[2] | 0})`; ctx.fillStyle = fs; ctx.strokeStyle = fs; ctx.beginPath(); ctx.moveTo(o.pa[0], o.pa[1]); ctx.lineTo(o.pb[0], o.pb[1]); ctx.lineTo(o.pc[0], o.pc[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    return cam;
  }
  function camAt(KF, t) {
    let k = 0; while (k < KF.length - 2 && t > KF[k + 1][0]) k++;
    const A = KF[k], B = KF[k + 1], u = H.ease.inOut(H.clamp((t - A[0]) / (B[0] - A[0])));
    return [1, 2, 3, 4, 5].map((i) => H.lerp(A[i], B[i], u));
  }
  // keyframes [t, x, y, z, yaw, pitch]
  const KF_HOOK = [[0, -4, 16, -6, 0.1, 0.36], [2.6, -2, 10, 12, 0.06, 0.28], [5.4, 0, 5.5, 24, 0.02, 0.2], [CUT.legs + 0.1, 0.5, 3.6, 28.5, 0.0, 0.16]];
  const KF_END = [[CUT.end, 0.5, 5.5, 24, 0.0, 0.2], [DURATION, -3, 17, -6, 0.08, 0.36]];

  function hookTitle(ctx, t) {
    const out = EI(t, 2.3, 2.9);
    if (t > 2.95) return;
    ctx.save(); ctx.globalAlpha = 1 - out; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    const lines = [["You'd lose", P(0, 'youd') - 0.15], ['your toes', P(0, 'your') - 0.1]];
    lines.forEach(([s, t0], i) => {
      const k = BK(t, t0, 0.35); if (k <= 0) return;
      const y = 600 + i * 165 - out * 260;
      ctx.save(); ctx.translate(540, y); ctx.scale(k, k); ctx.font = FONT(140);
      ctx.fillStyle = 'rgba(14,20,60,0.5)'; ctx.fillText(s, 8, 8); ctx.lineJoin = 'round'; ctx.lineWidth = 16; ctx.strokeStyle = INK; ctx.strokeText(s, 0, 0); ctx.fillStyle = i === 1 ? '#ffb0a0' : '#ffffff'; ctx.fillText(s, 0, 0);
      ctx.restore();
    });
    // "on THIS ice": faceted underline + cross badge
    const uw = 460 * EO(t, P(0, 'ice') - 0.15, P(0, 'ice') + 0.25), uy = 600 + 165 + 36 - out * 260;
    ctx.fillStyle = CORAL; ctx.beginPath(); ctx.moveTo(540 - uw / 2, uy); ctx.lineTo(540 + uw * 0.28, uy); ctx.lineTo(540 + uw * 0.22, uy + 16); ctx.lineTo(540 - uw / 2, uy + 16); ctx.fill();
    ctx.fillStyle = '#ffb0a0'; ctx.beginPath(); ctx.moveTo(540 + uw * 0.28, uy); ctx.lineTo(540 + uw / 2, uy); ctx.lineTo(540 + uw * 0.44, uy + 16); ctx.lineTo(540 + uw * 0.22, uy + 16); ctx.fill();
    ctx.restore();
    hexBadge(ctx, 860, 470 - out * 260, BK(t, P(0, 'toes') - 0.1, 0.35) * (1 - out), false, 54);
  }
  function header(ctx, t) {
    const k = EO(t, 2.75, 3.15); if (k <= 0 || t > CUT.end + WIPE) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 214, "WHY PENGUIN FEET DON'T FREEZE", { font: FONT(44), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  function heroLegPt(cam) { return cam.proj([HERO.x, HERO.y + 0.12 * HERO.S, HERO.z - 0.05 * HERO.S]); }
  function sceneHook(ctx, t) {
    const K = camAt(KF_HOOK, t);
    const glow = EO(t, P(2, 'legs') - 0.2, P(2, 'legs') + 0.2);
    const cam = drawColony(ctx, t, K, glow);
    snow(ctx, t, 40, 0.85, 12);
    // emperor tag pinned to the hero penguin
    const head = cam.proj([HERO.x, HERO.y + 1.4 * HERO.S, HERO.z]);
    const kE = win(t, P(1, 'emperor') - 0.15, P(2, 'the') - 0.25);
    if (kE > 0.01) {
      const a = [Math.min(W - 160, head[0] + 250), head[1] - 220], b = [head[0] + 40, head[1] - 20];
      lpArrow(ctx, a, [a[0] + 30, (a[1] + b[1]) / 2], b, EI(t, P(1, 'emperor') - 0.15, P(1, 'penguins') + 0.1), [255, 255, 255], 16);
      lpTag(ctx, Math.max(300, Math.min(W - 300, a[0] - 60)), a[1] - 46, 'emperor penguin', { k: kE, font: FONT(54) });
    }
    // two months on the ice
    const k2 = win(t, P(1, 'two') - 0.15, CUT.legs - 0.2);
    if (k2 > 0.01) {
      ctx.save(); ctx.translate(540, 1420); ctx.scale(k2, k2);
      lpTag(ctx, 0, 0, '2 MONTHS', { font: FONT(124), h: 190, bg: INK, col: '#fff' });
      ctx.restore();
      lpTag(ctx, 540, 1560, 'standing on ice', { k: win(t, P(1, 'months') - 0.1, CUT.legs - 0.2), font: FONT(50), bg: ICEC });
    }
    // x-ray glow on the legs
    if (glow > 0.01) {
      const p = heroLegPt(cam);
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = glow * (0.7 + 0.2 * Math.sin(t * 8));
      const g = ctx.createRadialGradient(p[0], p[1], 10, p[0], p[1], 230); g.addColorStop(0, 'rgba(255,110,80,0.8)'); g.addColorStop(1, 'rgba(255,110,80,0)');
      ctx.fillStyle = g; ctx.fillRect(p[0] - 260, p[1] - 260, 520, 520); ctx.restore();
      const a = [p[0] - 300, p[1] - 330];
      lpArrow(ctx, a, [a[0] - 20, p[1] - 80], [p[0] - 70, p[1] - 10], EI(t, P(2, 'legs') - 0.2, P(2, 'legs') + 0.15), [255, 255, 255], 18);
      lpTag(ctx, Math.max(200, a[0]), a[1] - 50, 'LEGS', { k: BK(t, P(2, 'legs') - 0.15), font: FONT(76), bg: CORAL, col: '#fff' });
    }
    lpTag(ctx, 540, 640, 'the secret?', { k: win(t, P(2, 'secret') - 0.1, CUT.legs - 0.2), font: FONT(64) });
    hookTitle(ctx, t);
  }
  function sceneEnd(ctx, t) {
    const K = camAt(KF_END, t);
    drawColony(ctx, t, K, 0);
    snow(ctx, t, 44, EO(t, CUT.end, CUT.end + 0.6), 21);
    const k1 = win(t, P(21, 'cold') - 0.15, P(22, 'so') - 0.3);
    if (k1 > 0.01) {
      lpTag(ctx, 540, 600, 'COLD FEET', { k: k1, font: FONT(110), h: 180, bg: '#bfe4ff' });
      lpTag(ctx, 540, 790, 'on purpose', { k: win(t, P(21, 'purpose') - 0.1, P(22, 'so') - 0.3), font: FONT(80), bg: CORAL, col: '#fff' });
      hexBadge(ctx, 880, 520, win(t, P(21, 'purpose') - 0.05, P(22, 'so') - 0.3), true, 54);
    }
    const kq = win(t, P(22, 'how') - 0.1, 99);
    if (kq > 0.01) {
      lpTag(ctx, 540, 600, 'How long would', { k: kq, font: FONT(84), bg: INK, col: '#fff' });
      lpTag(ctx, 540, 760, 'YOUR toes last?', { k: BK(t, P(22, 'your') - 0.1), font: FONT(92), h: 160, bg: CORAL, col: '#fff' });
      lpTag(ctx, 540, 1480, 'tell me below', { k: BK(t, P(22, 'there') - 0.05), font: FONT(54), bg: ICEC });
    }
  }

  // =================== STUDIO BACKDROP (cached faceted mosaic) ===================
  const BG = {};
  function backdrop(ctx, key, top, bot, glow) {
    if (!BG[key]) {
      const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 31 + 7), cs = 120, nx = Math.ceil(W / cs) + 1, ny = Math.ceil(HH / cs) + 1, V = [];
      for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.4, 0.4) * cs : 0), j * cs + (j > 0 && j < ny ? r.range(-0.4, 0.4) * cs : 0)]); V.push(row); }
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1];
        for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) {
          const cy = (f[0][1] + f[1][1] + f[2][1]) / 3, cx = (f[0][0] + f[1][0] + f[2][0]) / 3;
          let col = H.mix(top, bot, H.clamp(cy / HH));
          const gl = Math.max(0, 1 - Math.hypot(cx - glow[0], cy - glow[1]) / 900);
          col = H.mix(col, [236, 244, 255], gl * 0.3);
          col = col.map((v) => v * (0.93 + r() * 0.12));
          g.fillStyle = H.rgba(col); g.strokeStyle = g.fillStyle; g.lineWidth = 1;
          g.beginPath(); g.moveTo(f[0][0], f[0][1]); g.lineTo(f[1][0], f[1][1]); g.lineTo(f[2][0], f[2][1]); g.closePath(); g.fill(); g.stroke();
        }
      }
      BG[key] = c;
    }
    ctx.drawImage(BG[key], 0, 0);
  }
  function tri2(ctx, a, b, c, col) { ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  function gem(ctx, x, y, r, c, rot = 0) { // small faceted diamond
    const col = Array.isArray(c) ? c : H.hex(c), L = H.rgba(H.mix(col, [255, 255, 255], 0.35)), D = H.rgba(H.mix(col, [20, 24, 70], 0.25)), M = H.rgba(col);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    tri2(ctx, [0, -r], [r * 0.7, 0], [0, 0], L); tri2(ctx, [0, -r], [-r * 0.7, 0], [0, 0], M); tri2(ctx, [-r * 0.7, 0], [0, r], [0, 0], D); tri2(ctx, [r * 0.7, 0], [0, r], [0, 0], M);
    ctx.restore();
  }

  // =================== LEG STUDIO: the heat exchanger ===================
  // geometry: body at top, two vessels running down, foot on an ice slab
  const ART_X = 452, VEIN_X = 628, TUBE_TOP = 640, TUBE_BOT = 1330;
  const tempAt = (u, exch) => H.lerp(1, H.lerp(1, 0.08, exch), u); // artery temperature 1=warm 0=cold, u=0 top..1 toes
  const veinTemp = (u, exch) => H.lerp(H.lerp(0.05, 0.92, exch), 0.05, u); // vein warms on the way up
  const tcol = (k) => H.mix(COLD, WARM, H.clamp(k));
  function vessel(ctx, x, w, colFn, t, dir, flowK, rate = 1, seed = 1) {
    // faceted two-tone tube in 14 segments, colour per segment
    const N = 14, segH = (TUBE_BOT - TUBE_TOP) / N;
    for (let i = 0; i < N; i++) {
      const y0 = TUBE_TOP + i * segH, y1 = y0 + segH, u = (i + 0.5) / N, c = colFn(u), wob = (i % 2 ? 1 : -1) * 3;
      tri2(ctx, [x - w / 2 + wob, y0], [x, y0], [x - w / 2 - wob, y1], H.rgba(H.mix(c, [255, 255, 255], 0.28)));
      tri2(ctx, [x, y0], [x, y1], [x - w / 2 - wob, y1], H.rgba(H.mix(c, [255, 255, 255], 0.12)));
      tri2(ctx, [x, y0], [x + w / 2 - wob, y0], [x + w / 2 + wob, y1], H.rgba(H.mix(c, [20, 24, 70], 0.22)));
      tri2(ctx, [x, y0], [x + w / 2 + wob, y1], [x, y1], H.rgba(H.mix(c, [20, 24, 70], 0.1)));
    }
    // blood cells: faceted gems flowing (pure function of t)
    if (flowK <= 0.01) return;
    const r = H.rng(seed), n = Math.round(9 * rate);
    ctx.save(); ctx.globalAlpha = flowK;
    for (let i = 0; i < n; i++) {
      const off = r(), sp = 0.16 * (0.85 + r() * 0.3) * (rate > 1 ? 1.3 : 1);
      let u = (off + t * sp) % 1; if (dir < 0) u = 1 - u;
      const y = TUBE_TOP + u * (TUBE_BOT - TUBE_TOP), xx = x + (r() - 0.5) * w * 0.4;
      gem(ctx, xx, y, w * 0.22, H.mix(colFn(u), [255, 255, 255], 0.15), t * 2 + i);
    }
    ctx.restore();
  }
  function bodyBlob(ctx, warmK) {
    // the penguin's belly seen up close: faceted black/white mass across the top
    const r = H.rng(99), pts = [];
    const cx = 540, cy = 470;
    for (let i = 0; i < 18; i++) { const a = Math.PI + i / 17 * Math.PI; pts.push([cx + Math.cos(a) * (420 + r.range(-20, 20)), cy + Math.sin(a) * -1 * (-170) + r.range(-10, 10)]); }
    void pts;
    const rows = [[300, 150, 930], [400, 110, 970], [500, 140, 940], [600, 260, 820], [660, 360, 720]];
    for (let j = 0; j < rows.length - 1; j++) {
      const A = rows[j], B = rows[j + 1], n = 6;
      for (let i = 0; i < n; i++) {
        const ax0 = H.lerp(A[1], A[2], i / n), ax1 = H.lerp(A[1], A[2], (i + 1) / n), bx0 = H.lerp(B[1], B[2], i / n), bx1 = H.lerp(B[1], B[2], (i + 1) / n);
        const side = Math.abs((i + 0.5) / n - 0.5) > 0.36;
        let base = side ? BLACK : WHITE;
        base = H.mix(base, [255, 150, 120], warmK * (side ? 0.15 : 0.35));
        const sh = 0.9 + r() * 0.15;
        tri2(ctx, [ax0, A[0]], [ax1, A[0]], [bx0, B[0]], H.rgba(base.map((v) => v * sh)));
        tri2(ctx, [ax1, A[0]], [bx1, B[0]], [bx0, B[0]], H.rgba(base.map((v) => v * (sh - 0.07))));
      }
    }
  }
  let ICE_SLAB = null;
  function iceSlab(ctx) {
    if (!ICE_SLAB) {
      const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(313), top = 1490, cs = 110, nx = 11, ny = 5, V = [];
      for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs - 30 + (i > 0 && i < nx ? r.range(-0.35, 0.35) * cs : 0), top + j * 90 + (j > 0 ? r.range(-0.3, 0.3) * 60 : r.range(-8, 8))]); V.push(row); }
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1];
        for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) {
          const col = H.mix([232, 244, 255], [150, 190, 236], j / ny + r() * 0.15);
          tri2(g, f[0], f[1], f[2], H.rgba(col.map((v) => v * (0.95 + r() * 0.08))));
        }
      }
      ICE_SLAB = c;
    }
    ctx.drawImage(ICE_SLAB, 0, 0);
  }
  function footShape(ctx, cold) {
    // faceted foot: three toes spread on the ice, heel under the vessels
    const base = H.mix([96, 86, 108], [70, 110, 170], cold * 0.5);
    const toes = [[300, 1500], [540, 1520], [790, 1500]], heel = [540, 1330], ank = [[470, 1340], [610, 1340]];
    toes.forEach((tp, i) => {
      const l = [tp[0] - 70, tp[1] - 40], rr = [tp[0] + 70, tp[1] - 40], root = [H.lerp(heel[0], tp[0], 0.3), 1400];
      tri2(ctx, root, l, tp, H.rgba(H.mix(base, [255, 255, 255], 0.12)));
      tri2(ctx, root, tp, rr, H.rgba(H.mix(base, [20, 24, 70], 0.2)));
      void i;
    });
    tri2(ctx, ank[0], ank[1], [540, 1440], H.rgba(base));
    tri2(ctx, ank[0], [540, 1440], [380, 1430], H.rgba(H.mix(base, [255, 255, 255], 0.08)));
    tri2(ctx, ank[1], [700, 1430], [540, 1440], H.rgba(H.mix(base, [20, 24, 70], 0.15)));
  }
  // heat shard hopping from artery to vein at height y, progress p 0..1
  function heatHop(ctx, y, p, s = 1) {
    if (p <= 0 || p >= 1) return;
    const x = H.lerp(ART_X + 30, VEIN_X - 30, p), yy = y - Math.sin(p * Math.PI) * 60;
    ctx.save(); ctx.globalAlpha = Math.sin(p * Math.PI) * 0.6 + 0.4; gem(ctx, x, yy, 20 * s, [255, 150, 70], p * 4); ctx.restore();
  }
  function potato(ctx, x, y, k, rot) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(k, k);
    const r = H.rng(41), N = 9, pts = []; for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2; pts.push([Math.cos(a) * 62 * r.range(0.85, 1.1), Math.sin(a) * 44 * r.range(0.85, 1.1)]); }
    for (let i = 0; i < N; i++) { const a = pts[i], b = pts[(i + 1) % N], lit = 0.5 + 0.5 * Math.cos(i / N * Math.PI * 2 + 2.2); tri2(ctx, [0, 0], a, b, H.rgba(H.mix([150, 96, 52], [236, 176, 96], lit))); }
    ctx.restore();
    // heat glow
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.5 * k; const g = ctx.createRadialGradient(x, y, 10, x, y, 120); g.addColorStop(0, 'rgba(255,140,60,0.7)'); g.addColorStop(1, 'rgba(255,140,60,0)'); ctx.fillStyle = g; ctx.fillRect(x - 130, y - 130, 260, 260); ctx.restore();
  }
  function sceneLegs(ctx, t) {
    backdrop(ctx, 'legs', [26, 40, 96], [118, 160, 214], [540, 900]);
    iceSlab(ctx);
    const exch = EO(t, P(5, 'heat') - 0.1, P(5, 'across') + 0.6);
    const bodyWarm = EO(t, P(10, 'back') - 0.1, P(10, 'body') + 0.2);
    bodyBlob(ctx, 0.3 + 0.7 * bodyWarm);
    // reveal: vessels grow down on "warm blood", vein on "cold blood"
    const gA = EO(t, CUT.legs + 0.1, P(3, 'feet')), gV = EO(t, P(4, 'cold') - 0.2, P(4, 'up'));
    footShape(ctx, 1 - 0.3 * exch);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, TUBE_TOP + gA * (TUBE_BOT - TUBE_TOP) + 2); ctx.clip();
    vessel(ctx, ART_X, 96, (u) => tcol(tempAt(u, exch)), t, 1, EO(t, P(3, 'flowing') - 0.2, P(3, 'flowing') + 0.3), 1, 3);
    ctx.restore();
    ctx.save(); ctx.beginPath(); const vy = TUBE_BOT - gV * (TUBE_BOT - TUBE_TOP); ctx.rect(0, vy - 2, W, HH); ctx.clip();
    vessel(ctx, VEIN_X, 96, (u) => tcol(veinTemp(u, exch)), t, -1, EO(t, P(4, 'coming') - 0.2, P(4, 'coming') + 0.3), 1, 8);
    ctx.restore();
    // labels
    lpTag(ctx, 210, 820, 'warm', { k: win(t, P(3, 'warm') - 0.12, P(5, 'heat') - 0.3), font: FONT(60), bg: CORAL, col: '#fff' });
    lpArrow(ctx, [210, 900], [200, 1000], [250, 1110], EI(t, P(3, 'down') - 0.15, P(3, 'feet')) * (t < P(5, 'heat') ? 1 : 0), WARM, 18);
    lpTag(ctx, 870, 1180, 'cold', { k: win(t, P(4, 'cold') - 0.12, P(5, 'heat') - 0.3), font: FONT(60), bg: '#bfe4ff' });
    lpArrow(ctx, [870, 1100], [880, 990], [830, 880], EI(t, P(4, 'back') - 0.15, P(4, 'up') + 0.1) * (t < P(5, 'heat') ? 1 : 0), COLD, 18);
    lpTag(ctx, 540, 760, 'side by side', { k: win(t, P(4, 'beside') - 0.12, P(5, 'heat') - 0.3), font: FONT(52) });
    // heat hops across, many heights
    if (t > P(5, 'heat') - 0.15 && t < P(9, 'cold')) {
      const r = H.rng(66);
      for (let i = 0; i < 12; i++) {
        const y = H.lerp(TUBE_TOP + 40, TUBE_BOT - 60, (i + r() * 0.5) / 12), per = 1.4, t0 = P(5, 'heat') - 0.15 + r() * per;
        if (t > t0) heatHop(ctx, y, ((t - t0) % per) / 0.7, 1);
      }
    }
    lpTag(ctx, 540, 560, 'HEAT JUMPS', { k: win(t, P(5, 'heat') - 0.12, P(7, 'by') - 0.3), font: FONT(72), bg: '#ffd9a0' });
    // hot potato tossed back and forth between the vessels
    const kp = win(t, P(6, 'hot') - 0.15, P(7, 'by') - 0.2);
    if (kp > 0.01) {
      const u = (t - (P(6, 'hot') - 0.15)) / 0.55, side = Math.floor(u) % 2, f = u % 1;
      const xa = side ? VEIN_X : ART_X, xb = side ? ART_X : VEIN_X;
      potato(ctx, H.lerp(xa, xb, H.ease.inOut(f)), 1000 - Math.sin(f * Math.PI) * 170, kp, t * 5);
      lpTag(ctx, 540, 1230, 'hot potato!', { k: kp, font: FONT(56), bg: CORAL, col: '#fff' });
    }
    // a pulse rides down to the toes, it arrives cold
    const pu = EI(t, P(7, 'by') - 0.1, P(7, 'toes') + 0.1);
    if (t > P(7, 'by') - 0.1 && t < P(9, 'cold')) {
      const y = TUBE_TOP + pu * (TUBE_BOT - TUBE_TOP + 90);
      const ring = 70 + 10 * Math.sin(t * 9);
      ctx.save(); ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 6; ctx.beginPath(); for (let i = 0; i <= 6; i++) { const a = i / 6 * Math.PI * 2 + 0.3; ctx.lineTo(ART_X + Math.cos(a) * ring, y + Math.sin(a) * ring); } ctx.stroke(); ctx.restore();
      gem(ctx, ART_X, y, 34, tcol(tempAt(Math.min(1, pu), exch)), t * 3);
    }
    // thermometer tag at the toes
    const kT = win(t, P(8, 'just') - 0.12, P(10, 'and') - 0.3);
    if (kT > 0.01) {
      lpTag(ctx, 300, 1180, 'just above', { k: kT, font: FONT(54), bg: '#bfe4ff' });
      lpTag(ctx, 300, 1290, '0°C', { k: BK(t, P(8, 'freezing') - 0.12, 0.35) * (1 - ph(t, P(10, 'and') - 0.3, P(10, 'and'))), font: FONT(130), h: 190, bg: INK, col: '#fff' });
    }
    // tiny heat loss into the ice: small wisps + check badge
    const kL = win(t, P(9, 'cold') - 0.12, P(10, 'and') - 0.2);
    if (kL > 0.01) {
      const r = H.rng(5);
      for (let i = 0; i < 6; i++) { const x = 300 + i * 96, f = ((t * 0.8 + r()) % 1); ctx.save(); ctx.globalAlpha = kL * (1 - f) * 0.7; gem(ctx, x, 1530 + f * 60, 10, [255, 170, 120], f * 5); ctx.restore(); }
      lpTag(ctx, 540, 1640 - 60, 'very little heat lost', { k: BK(t, P(9, 'little') - 0.12), font: FONT(50), bg: '#fff' });
      hexBadge(ctx, 900, 1450, BK(t, P(9, 'little') - 0.05), true, 46);
    }
    // the warmth climbs back up the vein into the body
    const kB = EI(t, P(10, 'warmth') - 0.15, P(10, 'back') + 0.3);
    if (kB > 0 && t < CUT.nums) {
      lpArrow(ctx, [VEIN_X + 140, 1250], [VEIN_X + 190, 900], [VEIN_X + 120, 620], kB, WARM, 26);
      lpTag(ctx, 540, 1000 - 400, 'back to the body', { k: BK(t, P(10, 'body') - 0.15), font: FONT(60), bg: CORAL, col: '#fff' });
    }
    return { exch };
  }

  // =================== TEMPERATURE PILLARS ===================
  function prism(ctx, x, base, w, h, col) {
    const d = w * 0.35, top = base - h;
    const L = H.rgba(H.mix(col, [255, 255, 255], 0.3)), M = H.rgba(col), D = H.rgba(H.mix(col, [20, 24, 70], 0.3));
    // front face as two facets, side face, top face
    tri2(ctx, [x - w / 2, top], [x + w / 2, top], [x - w / 2, base], M);
    tri2(ctx, [x + w / 2, top], [x + w / 2, base], [x - w / 2, base], H.rgba(H.mix(col, [20, 24, 70], 0.12)));
    tri2(ctx, [x + w / 2, top], [x + w / 2 + d, top - d * 0.6], [x + w / 2, base], D);
    tri2(ctx, [x + w / 2 + d, top - d * 0.6], [x + w / 2 + d, base - d * 0.6], [x + w / 2, base], H.rgba(H.mix(col, [20, 24, 70], 0.4)));
    tri2(ctx, [x - w / 2, top], [x - w / 2 + d, top - d * 0.6], [x + w / 2 + d, top - d * 0.6], L);
    tri2(ctx, [x - w / 2, top], [x + w / 2 + d, top - d * 0.6], [x + w / 2, top], L);
  }
  function sceneNums(ctx, t) {
    backdrop(ctx, 'nums', [34, 30, 90], [222, 140, 150], [800, 600]);
    // plateau
    const pl = 1380;
    tri2(ctx, [80, pl], [1000, pl], [1060, pl + 120], '#e8f2ff'); tri2(ctx, [80, pl], [1060, pl + 120], [20, pl + 120], '#c9dcf6');
    tri2(ctx, [20, pl + 120], [1060, pl + 120], [1060, pl + 200], '#8fa6d8'); tri2(ctx, [20, pl + 120], [1060, pl + 200], [20, pl + 200], '#7d93c8');
    const pxPerDeg = 18, h0 = 70;
    const kF = EO(t, P(11, 'feet') - 0.15, P(11, 'zero')), kB = EO(t, P(12, 'body') - 0.15, P(12, 'thirtyeight') + 0.1);
    const hF = h0 * kF, hB = (h0 + 38 * pxPerDeg) * kB;
    if (hF > 2) prism(ctx, 330, pl + 40, 230, hF, COLD);
    if (hB > 2) prism(ctx, 740, pl + 40, 230, hB, WARM);
    lpTag(ctx, 330, pl + 120, 'FEET', { k: BK(t, P(11, 'feet') - 0.12), font: FONT(60), bg: '#fff' });
    lpTag(ctx, 740, pl + 120, 'BODY', { k: BK(t, P(12, 'body') - 0.12), font: FONT(60), bg: '#fff' });
    // counters
    ctx.save(); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    if (t > P(11, 'zero') - 0.15) { const k = BK(t, P(11, 'zero') - 0.15, 0.35); ctx.save(); ctx.translate(330, pl + 40 - hF - 60); ctx.scale(k, k); ctx.font = FONT(140); ctx.fillStyle = 'rgba(14,20,60,0.45)'; ctx.fillText('~0°', 6, 6); ctx.fillStyle = '#dff1ff'; ctx.fillText('~0°', 0, 0); ctx.restore(); }
    if (t > P(12, 'body') - 0.1) { const v = Math.round(38 * kB); const k = BK(t, P(12, 'body') - 0.1, 0.35); ctx.save(); ctx.translate(740, pl + 40 - hB - 60); ctx.scale(k, k); ctx.font = FONT(150); ctx.fillStyle = 'rgba(14,20,60,0.45)'; ctx.fillText(v + '°', 6, 6); ctx.fillStyle = '#fff'; ctx.fillText(v + '°', 0, 0); ctx.restore(); }
    ctx.restore();
  }

  // =================== LEG STUDIO 2: the valve ===================
  function sceneValve(ctx, t) {
    backdrop(ctx, 'valve', [20, 34, 92], [110, 150, 210], [400, 1000]);
    iceSlab(ctx);
    bodyBlob(ctx, 0.5);
    const cold = EO(t, P(13, 'too') - 0.15, P(13, 'cold') + 0.2) * (1 - EO(t, P(15, 'more') - 0.1, P(15, 'blood') + 0.3));
    footShape(ctx, cold);
    // toes frosting over: ice shards on the foot
    if (cold > 0.01) { const r = H.rng(14); ctx.save(); ctx.globalAlpha = cold; for (let i = 0; i < 14; i++) gem(ctx, r.range(250, 830), r.range(1440, 1520), r.range(10, 18), [230, 244, 255], r() * 3); ctx.restore(); }
    const widen = EO(t, P(14, 'widens') - 0.15, P(14, 'arteries') + 0.2);
    const wA = H.lerp(96, 150, widen), more = EO(t, P(15, 'more') - 0.15, P(15, 'warm'));
    vessel(ctx, VEIN_X + 20, 96, (u) => tcol(veinTemp(u, 1)), t, -1, 1, 1, 8);
    vessel(ctx, ART_X - 10, wA, (u) => tcol(H.lerp(tempAt(u, 1), 1, more * 0.35 * u)), t, 1, 1, 1 + more * 0.8, 3);
    lpTag(ctx, 540, 600, 'TOO COLD?', { k: win(t, P(13, 'too') - 0.12, P(14, 'widens') - 0.3), font: FONT(84), bg: '#bfe4ff' });
    // widening arrows on both sides of the artery
    const ka = win(t, P(14, 'widens') - 0.15, P(15, 'more') - 0.3);
    if (ka > 0.01) {
      lpArrow(ctx, [ART_X - 10 - wA / 2 - 20, 1000], [ART_X - wA / 2 - 70, 1000], [ART_X - 10 - wA / 2 - 120, 1000], ka, [255, 255, 255], 18);
      lpArrow(ctx, [ART_X - 10 + wA / 2 + 6, 860], [ART_X + wA / 2 + 40, 860], [ART_X - 10 + wA / 2 + 80, 860], ka, [255, 255, 255], 18);
      lpTag(ctx, 540, 600, 'WIDER ARTERY', { k: ka, font: FONT(76), bg: CORAL, col: '#fff' });
    }
    lpTag(ctx, 540, 600, '+ warm blood', { k: win(t, P(15, 'more') - 0.12, CUT.pose - 0.2), font: FONT(76), bg: CORAL, col: '#fff' });
    hexBadge(ctx, 860, 1420, win(t, P(15, 'warm') - 0.1, CUT.pose - 0.2), true, 50);
  }

  // =================== POSE STUDIO: heels, tail, belly blanket ===================
  let FLOOR = null;
  function buildFloor() {
    const r = H.rng(808), tris = [], cs = 0.55, V = [];
    for (let j = 0; j <= 18; j++) { const row = []; for (let i = 0; i <= 18; i++) row.push([-5.5 + i * cs + (i && i < 18 ? r.range(-0.3, 0.3) * cs : 0), r.range(-0.012, 0.012), -3.4 + j * cs + (j && j < 18 ? r.range(-0.3, 0.3) * cs : 0)]); V.push(row); }
    for (let j = 0; j < 18; j++) for (let i = 0; i < 18; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; for (const f of (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]) tris.push({ p: f, col: H.mix([236, 246, 255], [190, 214, 246], r()) }); }
    FLOOR = tris;
  }
  const PCAM_POS = [-0.26, 0.62, -3.9];
  const PSUN = norm([-0.6, 0.6, -0.55]), PAMB = [150, 160, 210], PSUNC = [255, 240, 228];
  function drawMesh(ctx, cam, tris, xf, floor) {
    const out = [];
    for (const tri of tris) {
      const v = tri.p.map((p) => xf(p, tri.part));
      let n = norm(cross(sub(v[1], v[0]), sub(v[2], v[0])));
      if (floor) { if (n[1] < 0) n = scl(n, -1); }
      else { const c = xf(tri.center, tri.part), cen = scl(add3(add3(v[0], v[1]), v[2]), 1 / 3); if (dot(n, sub(cen, c)) < 0) n = scl(n, -1); if (dot(n, sub(cam.pos, cen)) <= 0) continue; }
      const pp = v.map((p) => cam.proj(p)); if (pp.some((p) => p[2] < 0.1)) continue;
      const lam = Math.max(0, dot(n, PSUN)), kk = floor ? 0.55 + 0.45 * lam : 0.3 + 0.8 * lam;
      const col = [0, 1, 2].map((i) => Math.min(255, tri.col[i] * (PAMB[i] / 255 * 0.65 + PSUNC[i] / 255 * kk * 0.55)));
      out.push({ pp, col, d: (pp[0][2] + pp[1][2] + pp[2][2]) / 3 });
    }
    out.sort((a, b) => b.d - a.d);
    for (const o of out) { const fs = `rgb(${o.col[0] | 0},${o.col[1] | 0},${o.col[2] | 0})`; ctx.fillStyle = fs; ctx.strokeStyle = fs; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(o.pp[0][0], o.pp[0][1]); ctx.lineTo(o.pp[1][0], o.pp[1][1]); ctx.lineTo(o.pp[2][0], o.pp[2][1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  }
  function scenePose(ctx, t) {
    if (!FLOOR) buildFloor();
    backdrop(ctx, 'pose', [30, 44, 110], [170, 196, 236], [700, 700]);
    const yawP = 1.05 + 0.12 * Math.sin((t - CUT.pose) * 0.5); // 3/4 side view, front faces screen-left
    const cam = makeCamYaw(PCAM_POS, 0, 0.0, 3300, W, HH);
    const rock = 0.3 * EI(t, P(17, 'rocks') - 0.1, P(17, 'heels') + 0.1) * (1 - 0.35 * EI(t, P(19, 'hunches') - 0.1, P(19, 'down')));
    const hunch = EI(t, P(19, 'hunches') - 0.12, P(19, 'down') + 0.15);
    const pose = { rock, hunch };
    const cy = Math.cos(yawP), sy = Math.sin(yawP);
    const xf = (p, part) => { const q = poseXf(p, part, pose); return [q[0] * cy - q[2] * sy, q[1], q[0] * sy + q[2] * cy]; };
    drawMesh(ctx, cam, FLOOR, (p) => p, true);
    // shadow
    ctx.save(); ctx.globalAlpha = 0.25; ctx.fillStyle = '#3a4a8a'; const sc = cam.proj([0, 0, 0]); ctx.beginPath(); ctx.ellipse(sc[0], sc[1] + 6, 300, 46, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    drawMesh(ctx, cam, PENG, xf, false);
    const scr = (p, part = 'body') => cam.proj(xf(p, part));
    lpTag(ctx, 540, 380, 'STILL CHILLY?', { k: win(t, P(16, 'still') - 0.12, P(17, 'rocks') - 0.2), font: FONT(84), bg: '#bfe4ff' });
    // heel + tail tags
    const heel = scr([0.12, 0.0, ZH], 'foot'), tail = scr([0, 0.1, 0.4], 'tail'), toe = scr([0.12, 0.004, -0.27], 'foot');
    const kH = win(t, P(17, 'heels') - 0.12, P(19, 'hunches') - 0.3), kTl = win(t, P(17, 'tail') - 0.12, P(19, 'hunches') - 0.3);
    if (kH > 0.01) { lpArrow(ctx, [heel[0] - 190, heel[1] + 150], [heel[0] - 100, heel[1] + 140], [heel[0] - 6, heel[1] + 16], EI(t, P(17, 'heels') - 0.12, P(17, 'heels') + 0.2), [255, 255, 255], 16); lpTag(ctx, Math.max(170, heel[0] - 280), heel[1] + 160, 'heels', { k: kH, font: FONT(60), bg: CORAL, col: '#fff' }); }
    if (kTl > 0.01) { lpArrow(ctx, [tail[0] - 160, tail[1] - 200], [tail[0] - 170, tail[1] - 60], [tail[0] - 14, tail[1] - 6], EI(t, P(17, 'tail') - 0.12, P(17, 'tail') + 0.2), [255, 255, 255], 16); lpTag(ctx, Math.max(170, tail[0] - 170), tail[1] - 250, '+ tail', { k: kTl, font: FONT(60), bg: INK, col: '#fff' }); }
    const kU = win(t, P(18, 'toes') - 0.12, P(19, 'hunches') - 0.3);
    if (kU > 0.01) {
      lpArrow(ctx, [toe[0] + 20, toe[1] + 30], [toe[0] + 60, toe[1] - 40], [toe[0] + 40, toe[1] - 130], kU, [255, 255, 255], 16);
      lpTag(ctx, Math.min(W - 180, toe[0] + 60), toe[1] - 200, 'toes up', { k: kU, font: FONT(60), bg: '#fff' });
    }
    lpTag(ctx, Math.min(W - 190, toe[0] + 40), toe[1] - 90, 'off the ice', { k: win(t, P(18, 'off') - 0.12, P(19, 'hunches') - 0.3), font: FONT(56), bg: ICEC });
    lpTag(ctx, 540, 380, 'HUNCH DOWN', { k: win(t, P(19, 'hunches') - 0.12, P(20, 'belly') - 0.3), font: FONT(84), bg: '#bfe4ff' });
    const kF = win(t, P(20, 'blanket') - 0.15, CUT.end - 0.2);
    if (kF > 0.01) {
      const belly = scr([0, 0.08, -0.3], 'body');
      lpArrow(ctx, [belly[0] - 240, belly[1] - 260], [belly[0] - 260, belly[1] - 60], [belly[0] - 20, belly[1]], EI(t, P(20, 'blanket') - 0.15, P(20, 'blanket') + 0.2), [255, 255, 255], 18);
      lpTag(ctx, 540, 380, 'FEATHER BLANKET', { k: kF, font: FONT(80), bg: CORAL, col: '#fff' });
    }
    lpTag(ctx, 300, 520, 'belly feathers', { k: win(t, P(20, 'belly') - 0.12, P(20, 'blanket') - 0.25), font: FONT(64), bg: '#fff' });
  }

  // =================== composition + facet-flip wipes ===================
  let LAYER = null, MOS = null;
  function mosaic() {
    if (MOS) return MOS;
    const r = H.rng(808), cs = 135, nx = 8, ny = 15, V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.35, 0.35) * cs : 0), j * (HH / ny) + (j > 0 && j < ny ? r.range(-0.35, 0.35) * cs : 0)]); V.push(row); }
    const tr = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; for (const f of (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]) { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; tr.push({ f, cx, cy, d: (cy / HH) * 0.75 + (cx / W) * 0.12 + r() * 0.13 }); } }
    return (MOS = tr);
  }
  function scene(ctx, t) {
    if (t < CUT.legs) sceneHook(ctx, t);
    else if (t < CUT.nums) sceneLegs(ctx, t);
    else if (t < CUT.valve) sceneNums(ctx, t);
    else if (t < CUT.pose) sceneValve(ctx, t);
    else if (t < CUT.end) scenePose(ctx, t);
    else sceneEnd(ctx, t);
  }
  function explainer(ctx, W_, H_, t) {
    ctx.save(); ctx.lineJoin = 'round';
    let wipe = null;
    for (const c of CUTS) if (t >= c && t < c + WIPE) wipe = c;
    if (wipe != null) {
      scene(ctx, wipe - 0.001);
      if (!LAYER) LAYER = H.layer(W, HH);
      const lc = LAYER.getContext('2d'); lc.setTransform(1, 0, 0, 1, 0, 0); lc.clearRect(0, 0, W, HH); scene(lc, t);
      const u = (t - wipe) / WIPE;
      ctx.save(); ctx.beginPath();
      const flashes = [];
      for (const m of mosaic()) {
        const p = H.ease.out(H.clamp((u * 1.35 - m.d) / 0.35)); if (p <= 0) continue;
        const f = m.f.map((q) => [m.cx + (q[0] - m.cx) * p, m.cy + (q[1] - m.cy) * p]);
        ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath();
        if (p < 1) flashes.push([f, 1 - p]);
      }
      ctx.clip(); ctx.drawImage(LAYER, 0, 0); ctx.restore();
      for (const [f, a] of flashes) { ctx.fillStyle = `rgba(236,246,255,${a * 0.7})`; ctx.beginPath(); ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath(); ctx.fill(); }
    } else scene(ctx, t);
    header(ctx, t);
    ctx.restore();
  }

  // thumbnail still: the leg exchanger with 3 huge words
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    sceneLegs(ctx, P(9, 'cold') - 0.3);
    lpTag(ctx, 540, 520, 'FROZEN?', { font: FONT(150), h: 210, bg: CORAL, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, polar wind, icy ticks, blood-flow pulses ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const gust = (t0, t1, g = 1) => { const d = t1 - t0, steps = [260, 420, 610, 470, 300]; steps.forEach((f, i) => { const s = t0 + (d * i) / steps.length, dd = (d / steps.length) * 1.9; k.noise(s, { dur: dd, color: 'pink', filter: 'bandpass', f: [[0, f], [dd, f * 1.25]], q: 1.4, gain: 0.04 * g * Math.sin(((i + 0.5) / steps.length) * Math.PI), a: dd * 0.45, verb: 0.15 }); }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2600 + i * 180, gain: 0.5 }); }); gust(t - 0.1, t + 0.6, 1.2); };
    const pulse = (t, g = 1, p = 0) => k.tone(t, { f: [[0, 90], [0.12, 55]], type: 'sine', dur: 0.18, gain: 0.12 * g, a: 0.005, pan: p, minor: true });
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    // hook
    gust(0, 2.6, 1.3); gust(2.4, 7.4, 1);
    glass(0.2, 'E4', 1.1, 0, 1.4); glass(0.2, 'B3', 0.8, 0, 1.4);
    facet(P(0, 'your') - 0.1, 520, 0.9);
    k.play('error', P(0, 'toes') - 0.05, { f: 'A3', gain: 0.5 });
    k.play('thud', P(0, 'ice') - 0.1, { f: 110, gain: 0.5 });
    k.play('whoosh', 2.35, { dur: 0.7, gain: 0.6 });
    facet(2.8, 470, 0.9); // header
    facet(P(1, 'emperor') - 0.1, 560, 0.9, 0.3); glass(P(1, 'penguins'), 'G#5', 0.6, 0.3);
    k.play('impact', P(1, 'two') - 0.12, { gain: 0.8 }); glass(P(1, 'two') - 0.1, 'E5', 1, 0, 1.2);
    facet(P(1, 'months') - 0.1, 480, 0.8, 0, true);
    facet(P(2, 'secret') - 0.1, 600, 0.8);
    k.play('riser', P(2, 'legs') - 0.6, { dur: 0.6, gain: 0.5 }); k.play('sparkle', P(2, 'legs') - 0.1, { n: 6, gain: 0.9 }); facet(P(2, 'legs') - 0.1, 520, 1);
    // leg studio
    wipe(CUT.legs);
    facet(P(3, 'warm') - 0.12, 560, 1, -0.4); glass(P(3, 'warm'), 'C#5', 0.7, -0.4);
    for (let i = 0; i < 22; i++) pulse(P(3, 'flowing') + i * 0.6, 0.8, -0.3);
    facet(P(4, 'cold') - 0.12, 640, 1, 0.4); glass(P(4, 'cold'), 'G#5', 0.7, 0.4);
    facet(P(4, 'beside') - 0.1, 500, 0.8, 0, true);
    for (let i = 0; i < 14; i++) glass(P(5, 'heat') - 0.1 + i * 0.13, ['E6', 'B5', 'G#5', 'C#6'][i % 4], 0.3, (i % 2 ? 0.3 : -0.3), 0.35, true);
    facet(P(5, 'heat') - 0.12, 560, 1); k.play('swish', P(5, 'jumps') - 0.05, { gain: 0.6 });
    for (let i = 0; i < 3; i++) { k.play('swish', P(6, 'hot') - 0.15 + i * 0.55, { gain: 0.5, minor: true }); k.play('pop', P(6, 'hot') + 0.35 + i * 0.55, { gain: 0.5, minor: true }); }
    facet(P(6, 'potato') - 0.1, 480, 0.9);
    k.play('whoosh', P(7, 'by') - 0.1, { dur: 1.6, gain: 0.5 });
    k.tone(P(7, 'by'), { f: [[0, 520], [1.8, 260]], type: 'triangle', dur: 1.9, gain: 0.07 });
    k.play('impact', P(8, 'freezing') - 0.12, { gain: 0.8 }); glass(P(8, 'freezing') - 0.1, 'B4', 1.1, -0.3, 1.2);
    facet(P(8, 'just') - 0.1, 600, 0.8, -0.3, true);
    facet(P(9, 'little') - 0.1, 540, 0.9); k.play('success', P(9, 'little'), { f: 'E5', gain: 0.35 });
    k.play('riser', P(10, 'warmth') - 0.1, { dur: 1.0, gain: 0.5 }); glass(P(10, 'body') - 0.1, 'E5', 1, 0.3, 1.2); facet(P(10, 'body') - 0.12, 500, 1);
    // pillars
    wipe(CUT.nums);
    facet(P(11, 'feet') - 0.12, 520, 0.9, -0.3);
    k.play('impact', P(11, 'zero') - 0.12, { gain: 0.7 }); glass(P(11, 'zero') - 0.1, 'B4', 1, -0.3, 1.0);
    facet(P(12, 'body') - 0.12, 520, 0.9, 0.3);
    k.withMinor(() => { for (let i = 0; i < 10; i++) k.play('tick', P(12, 'body') + i * 0.055, { f: 1800 + i * 90, gain: 0.5, pan: 0.3 }); });
    k.play('impact', P(12, 'thirtyeight') - 0.05, { gain: 1.0 }); ['E4', 'B4', 'E5', 'G#5'].forEach((n, i) => glass(P(12, 'thirtyeight') - 0.05 + i * 0.03, n, 1.4 - i * 0.25, (i - 1.5) * 0.25, 1.5));
    // valve
    wipe(CUT.valve);
    facet(P(13, 'too') - 0.12, 640, 1); k.play('error', P(13, 'cold') - 0.05, { f: 'G3', gain: 0.5 });
    k.withMinor(() => { for (let i = 0; i < 8; i++) glass(P(13, 'cold') + i * 0.07, ['E6', 'B6', 'G#6'][i % 3], 0.3, (i - 4) * 0.15, 0.3); });
    k.play('riser', P(14, 'widens') - 0.2, { dur: 0.7, gain: 0.5 }); k.play('press', P(14, 'widens') - 0.05, { gain: 0.6 }); facet(P(14, 'arteries') - 0.1, 480, 0.9);
    for (let i = 0; i < 12; i++) pulse(P(15, 'sends') + i * 0.38, 1, -0.2);
    k.play('success', P(15, 'warm') - 0.05, { f: 'E5', gain: 0.4 }); facet(P(15, 'warm') - 0.1, 560, 1);
    // pose
    wipe(CUT.pose);
    facet(P(16, 'still') - 0.12, 600, 0.9); gust(38.6, 40.4, 0.9);
    k.play('swish', P(17, 'rocks') - 0.05, { gain: 0.7 }); k.play('thud', P(17, 'heels') - 0.05, { f: 140, gain: 0.5 });
    facet(P(17, 'heels') - 0.1, 520, 1, -0.3); facet(P(17, 'tail') - 0.1, 460, 1, 0.3); k.play('tock', P(17, 'tail'), { f: 300, gain: 0.5 });
    facet(P(18, 'toes') - 0.1, 600, 0.9, -0.3); glass(P(18, 'off'), 'G#5', 0.7, -0.3);
    k.play('whoosh', P(19, 'hunches') - 0.1, { dur: 0.8, gain: 0.6 }); k.play('thud', P(19, 'down') - 0.05, { f: 100, gain: 0.5 }); facet(P(19, 'hunches') - 0.1, 480, 0.9);
    facet(P(20, 'belly') - 0.1, 560, 0.8, 0, true); k.play('paper', P(20, 'blanket') - 0.1, { dur: 0.5, gain: 0.5 });
    k.play('success', P(20, 'blanket') - 0.05, { f: 'C#5', gain: 0.4 }); facet(P(20, 'blanket') - 0.1, 520, 1);
    // end
    wipe(CUT.end);
    gust(CUT.end + 0.3, D, 1.1);
    k.play('impact', P(21, 'cold') - 0.12, { gain: 0.8 }); ['E4', 'B4', 'E5'].forEach((n, i) => glass(P(21, 'cold') - 0.1 + i * 0.05, n, 1.2, (i - 1) * 0.3, 1.3));
    facet(P(21, 'purpose') - 0.1, 560, 1); k.play('success', P(21, 'purpose'), { f: 'E5', gain: 0.35 });
    facet(P(22, 'how') - 0.1, 470, 1); facet(P(22, 'your') - 0.1, 560, 1);
    ['B4', 'E5'].forEach((n, i) => glass(P(22, 'last') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(22, 'last'), { f: 'E3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
