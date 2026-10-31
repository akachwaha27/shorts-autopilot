// ================= Low-Poly Faceted, vertical 1080x1920: "Why do sharks never run out of teeth?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take) ----------
  const BEATS = [
    { s: 0.25, e: 2.73, w: {this: 0.25, shark: 0.53, will: 0.87, lose: 1.15, thirty: 1.42, thousand: 1.84, teeth: 2.39} }, // 0 This shark will lose thirty thousand teeth.
    { s: 3.28, e: 5.16, w: {so: 3.28, why: 3.45, does: 3.71, it: 4.05, never: 4.22, run: 4.65, out: 4.9} }, // 1 So why does it never run out?
    { s: 5.71, e: 7.16, w: {look: 5.71, inside: 6.07, its: 6.62, jaw: 6.89} }, // 2 Look inside its jaw.
    { s: 7.71, e: 8.96, w: {behind: 7.71, the: 8.11, front: 8.3, teeth: 8.63} }, // 3 Behind the front teeth,
    { s: 9.26, e: 11.27, w: {there: 9.26, are: 9.63, rows: 9.85, and: 10.15, rows2: 10.37, of: 10.67, spares: 10.82} }, // 4 there are rows and rows of spares,
    { s: 11.57, e: 14.06, w: {folded: 11.57, back: 12.01, against: 12.3, the: 12.81, inside: 13.03, of: 13.47, the2: 13.62, jaw: 13.84} }, // 5 folded back against the inside of the jaw.
    { s: 14.61, e: 16.82, w: {most: 14.61, sharks: 14.89, carry: 15.32, about: 15.68, fifteen: 16.04, rows: 16.54} }, // 6 Most sharks carry about fifteen rows.
    { s: 17.37, e: 19.15, w: {your: 17.37, teeth: 17.65, are: 17.99, locked: 18.2, into: 18.61, bone: 18.88} }, // 7 Your teeth are locked into bone.
    { s: 19.7, e: 21.6, w: {a: 19.7, sharks: 19.77, teeth: 20.2, sit: 20.55, in: 20.76, soft: 20.9, tissue: 21.18} }, // 8 A shark's teeth sit in soft tissue,
    { s: 21.9, e: 23.37, w: {so: 21.9, they: 22.06, pop: 22.39, out: 22.64, easily: 22.88} }, // 9 so they pop out easily.
    { s: 23.92, e: 25.12, w: {when: 23.92, one: 24.24, snaps: 24.48, off: 24.88} }, // 10 When one snaps off,
    { s: 25.42, e: 27.13, w: {the: 25.42, tooth: 25.64, behind: 25.99, it: 26.42, swings: 26.56, up: 26.98} }, // 11 the tooth behind it swings up,
    { s: 27.43, e: 28.62, w: {and: 27.43, takes: 27.65, its: 28.02, place: 28.24} }, // 12 and takes its place,
    { s: 28.92, e: 30.62, w: {sometimes: 28.92, in: 29.64, just: 29.81, one: 30.13, day: 30.37} }, // 13 sometimes in just one day.
    { s: 31.17, e: 32.88, w: {meanwhile: 31.17, a: 31.84, brand: 31.91, new: 32.28, tooth: 32.51} }, // 14 Meanwhile, a brand new tooth
    { s: 33.18, e: 35.01, w: {starts: 33.18, growing: 33.6, at: 34.09, the: 34.23, very: 34.45, back: 34.73} }, // 15 starts growing at the very back.
    { s: 35.56, e: 37.54, w: {its: 35.56, like: 35.76, a: 36.02, moving: 36.09, staircase: 36.49, of: 37.08, teeth: 37.21} }, // 16 It's like a moving staircase of teeth,
    { s: 37.84, e: 39.35, w: {always: 37.84, rolling: 38.3, forward: 38.82} }, // 17 always rolling forward.
    { s: 39.9, e: 41.33, w: {a: 39.9, great: 39.97, white: 40.29, goes: 40.62, through: 40.88} }, // 18 A great white goes through
    { s: 41.63, e: 43.91, w: {about: 41.63, twenty: 41.98, thousand: 42.39, teeth: 42.94, in: 43.29, its: 43.43, life: 43.63} }, // 19 about twenty thousand teeth in its life.
    { s: 44.46, e: 45.68, w: {and: 44.46, this: 44.67, lemon: 44.96, shark: 45.32} }, // 20 And this lemon shark?
    { s: 46.23, e: 48.48, w: {scientists: 46.23, think: 46.84, more: 47.14, than: 47.38, thirty: 47.63, thousand: 47.99} }, // 21 Scientists think more than thirty thousand.
    { s: 49.03, e: 51.35, w: {so: 49.03, how: 49.19, many: 49.42, teeth: 49.73, have: 50.11, you: 50.42, lost: 50.66, so2: 50.97, far: 51.12} }, // 22 So how many teeth have you lost so far?
  ];
  const P = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes (facet-flip wipes): reef (hook) -> jaw cutaway -> bone vs tissue -> jaw cutaway (conveyor) -> tooth-count pillars -> reef
  const CUT = { jaw: 5.42, bone: 17.08, roll: 23.63, nums: 39.6, end: 48.74 };
  const CUTS = [CUT.jaw, CUT.bone, CUT.roll, CUT.nums, CUT.end];
  const WIPE = 0.55;

  // ---------- tiny 3D pipeline (from the reference) ----------
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const scl = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
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
  const INK = '#13284a', CORAL = '#ff6a5a', SEA = '#c8f0ff', LEMON = '#ffd66b';
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
    ctx.fillStyle = o.shadow || 'rgba(8,20,50,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 6, p[1] + 6) : ctx.moveTo(p[0] + 6, p[1] + 6)); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || '#f4fbff');
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
    const light = H.rgba(H.mix(colA, [255, 255, 255], 0.3)), dark = H.rgba(H.mix(colA, [10, 24, 60], 0.25));
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
  function tri2(ctx, a, b, c, col) { ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  function gem(ctx, x, y, r, c, rot = 0) { // small faceted diamond
    const col = Array.isArray(c) ? c : H.hex(c), L = H.rgba(H.mix(col, [255, 255, 255], 0.35)), D = H.rgba(H.mix(col, [10, 24, 60], 0.25)), M = H.rgba(col);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    tri2(ctx, [0, -r], [r * 0.7, 0], [0, 0], L); tri2(ctx, [0, -r], [-r * 0.7, 0], [0, 0], M); tri2(ctx, [-r * 0.7, 0], [0, r], [0, 0], D); tri2(ctx, [r * 0.7, 0], [0, r], [0, 0], M);
    ctx.restore();
  }
  // a faceted shark tooth: base at (0,0), tip pointing along -y in local space, length len
  const ENAM = [246, 244, 236], ROOT = [222, 204, 170];
  function tooth(ctx, x, y, ang, len, k = 1, alpha = 1, warmTint = 0) {
    if (k <= 0.01 || alpha <= 0.01) return;
    const L = len * k, bw = L * 0.42;
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang + Math.PI / 2); ctx.globalAlpha *= alpha;
    const en = H.mix(ENAM, [255, 214, 160], warmTint);
    // root (the base that sits in the tissue)
    tri2(ctx, [-bw * 1.05, 0], [bw * 1.05, 0], [bw * 0.8, L * 0.16], H.rgba(ROOT));
    tri2(ctx, [-bw * 1.05, 0], [bw * 0.8, L * 0.16], [-bw * 0.8, L * 0.16], H.rgba(H.mix(ROOT, [80, 60, 50], 0.2)));
    // blade: lit left facet, shaded right facet, a centre ridge
    tri2(ctx, [-bw, 0], [0, -L], [0, -L * 0.1], H.rgba(H.mix(en, [255, 255, 255], 0.4)));
    tri2(ctx, [0, -L], [bw, 0], [0, -L * 0.1], H.rgba(H.mix(en, [70, 90, 130], 0.28)));
    tri2(ctx, [-bw, 0], [0, -L * 0.1], [bw, 0], H.rgba(H.mix(en, [70, 90, 130], 0.1)));
    // serration nicks on the edges
    ctx.fillStyle = H.rgba(H.mix(en, [70, 90, 130], 0.45));
    for (let i = 1; i < 6; i++) { const u = i / 6, px = bw * (1 - u), py = -L * u; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + L * 0.02, py + L * 0.035); ctx.lineTo(px - L * 0.01, py + L * 0.04); ctx.fill(); }
    ctx.restore();
  }

  // =================== THE SHARK MESH (lemon shark, snout at x=0, tail at x~4.5) ===================
  const TOP = [204, 172, 104], BELLY = [238, 234, 222], FIN = [178, 146, 86], EYE = [24, 26, 40], MOUTH = [70, 40, 50];
  function makeShark() {
    const tris = [];
    const xs = [0, 0.14, 0.38, 0.75, 1.25, 1.85, 2.45, 2.95, 3.35, 3.65, 3.85];
    const ry = [0.02, 0.2, 0.36, 0.48, 0.54, 0.52, 0.43, 0.31, 0.2, 0.12, 0.08];
    const N = 10, rings = xs.map((x, i) => { const r = []; for (let k = 0; k < N; k++) { const a = k / N * Math.PI * 2, c = Math.cos(a); r.push([x, ry[i] * c * (c < 0 ? 0.78 : 1) - (i < 3 ? 0.04 * (3 - i) : 0), ry[i] * 0.82 * Math.sin(a)]); } return r; });
    for (let i = 0; i < xs.length - 1; i++) for (let k = 0; k < N; k++) {
      const a = rings[i][k], b = rings[i][(k + 1) % N], c = rings[i + 1][k], d = rings[i + 1][(k + 1) % N];
      const center = [(xs[i] + xs[i + 1]) / 2, 0, 0];
      for (const f of [[a, c, b], [b, c, d]]) {
        const cy = (f[0][1] + f[1][1] + f[2][1]) / 3, rr = (ry[i] + ry[i + 1]) / 2;
        tris.push({ p: f, col: cy > -rr * 0.25 ? TOP : (cy > -rr * 0.45 ? H.mix(TOP, BELLY, 0.6) : BELLY), center });
      }
    }
    const fin = (pts, col) => tris.push({ p: pts, col, ds: true });
    fin([[1.45, 0.5, 0], [2.15, 0.45, 0], [2.05, 1.25, 0]], FIN); // first dorsal
    fin([[2.95, 0.29, 0], [3.35, 0.2, 0], [3.38, 0.82, 0]], FIN); // second dorsal: nearly as big (a lemon shark trademark)
    for (const s of [-1, 1]) fin([[1.05, -0.28, s * 0.36], [1.6, -0.3, s * 0.36], [2.05, -0.78, s * 1.15]], H.mix(FIN, BELLY, 0.2)); // pectorals
    fin([[3.25, -0.18, 0], [3.55, -0.12, 0], [3.6, -0.45, 0]], FIN); // anal
    fin([[3.75, 0.08, 0], [4.12, 0.02, 0], [4.62, 1.05, 0]], FIN); // caudal upper lobe
    fin([[3.8, -0.06, 0], [4.12, 0.02, 0], [4.42, -0.62, 0]], H.mix(FIN, TOP, 0.4)); // caudal lower lobe
    for (const s of [-1, 1]) fin([[0.36, 0.15, s * 0.31], [0.47, 0.1, s * 0.33], [0.37, 0.05, s * 0.31]], EYE);
    // mouth: a dark crescent under the snout, a row of small teeth along it
    for (const s of [-1, 1]) {
      fin([[0.16, -0.17, 0], [0.62, -0.33, s * 0.28], [0.5, -0.36, 0]], MOUTH);
      for (let j = 0; j < 5; j++) { const u = (j + 0.5) / 5, x = H.lerp(0.17, 0.6, u), y = H.lerp(-0.18, -0.33, u), z = s * 0.28 * u; fin([[x - 0.035, y - 0.005, z], [x + 0.035, y - 0.01, z], [x, y - 0.08, z * 0.95]], ENAM); }
    }
    return tris;
  }
  const SHARK = makeShark();
  const SUN3 = norm([0.25, 1, -0.45]), AMB3 = [120, 170, 205], SUNC3 = [255, 250, 236], WATER = [40, 110, 160];
  // pose: { x, y, z, yaw, s, t } ; tail sway is a pure function of t
  function sharkXf(pose) {
    const cy = Math.cos(pose.yaw), sy = Math.sin(pose.yaw);
    return (p) => {
      let [x, y, z] = p;
      const sw = 0.32 * Math.sin(pose.t * 4.2 - x * 1.7) * Math.pow(Math.max(0, x - 0.6) / 3.9, 1.6) + 0.04 * Math.sin(pose.t * 4.2);
      z += sw; x -= 2.1;
      const X = x * cy - z * sy, Z = x * sy + z * cy;
      return [pose.x + X * pose.s, pose.y + y * pose.s, pose.z + Z * pose.s];
    };
  }
  function drawShark(ctx, cam, pose, fog = 0.12) {
    const xf = sharkXf(pose), out = [];
    for (const tri of SHARK) {
      const v = tri.p.map(xf), cen = scl(add3(add3(v[0], v[1]), v[2]), 1 / 3);
      let n = norm(cross(sub(v[1], v[0]), sub(v[2], v[0])));
      const toCam = sub(cam.pos, cen);
      if (tri.ds) { if (dot(n, toCam) < 0) n = scl(n, -1); }
      else { const c = xf(tri.center); if (dot(n, sub(cen, c)) < 0) n = scl(n, -1); if (dot(n, toCam) <= 0) continue; }
      const pp = v.map((p) => cam.proj(p)); if (pp.some((p) => p[2] < 0.2)) continue;
      const lam = Math.max(0, dot(n, SUN3)), kk = 0.32 + 0.8 * lam;
      const tc = pose.gw ? (tri.col === TOP ? [128, 138, 152] : tri.col === FIN ? [104, 114, 130] : tri.col) : tri.col;
      let col = [0, 1, 2].map((i) => Math.min(255, tc[i] * (AMB3[i] / 255 * 0.62 + SUNC3[i] / 255 * kk * 0.55)));
      col = H.mix(col, WATER, fog);
      const bias = tri.col === EYE || tri.col === ENAM ? -0.06 : 0;
      out.push({ pp, col, d: (pp[0][2] + pp[1][2] + pp[2][2]) / 3 + bias * pose.s });
    }
    out.sort((a, b) => b.d - a.d);
    for (const o of out) { const fs = `rgb(${o.col[0] | 0},${o.col[1] | 0},${o.col[2] | 0})`; ctx.fillStyle = fs; ctx.strokeStyle = fs; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(o.pp[0][0], o.pp[0][1]); ctx.lineTo(o.pp[1][0], o.pp[1][1]); ctx.lineTo(o.pp[2][0], o.pp[2][1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    return (p) => cam.proj(xf(p));
  }

  // =================== BACKDROPS (cached faceted mosaics) ===================
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
          col = H.mix(col, [230, 250, 255], gl * 0.3);
          col = col.map((v) => v * (0.93 + r() * 0.12));
          g.fillStyle = H.rgba(col); g.strokeStyle = g.fillStyle; g.lineWidth = 1;
          g.beginPath(); g.moveTo(f[0][0], f[0][1]); g.lineTo(f[1][0], f[1][1]); g.lineTo(f[2][0], f[2][1]); g.closePath(); g.fill(); g.stroke();
        }
      }
      BG[key] = c;
    }
    ctx.drawImage(BG[key], 0, 0);
  }
  let SAND = null;
  function sandFloor(ctx) {
    if (!SAND) {
      const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(313), top = 1620, cs = 110, nx = 11, ny = 4, V = [];
      for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs - 30 + (i > 0 && i < nx ? r.range(-0.35, 0.35) * cs : 0), top + j * 80 + (j > 0 ? r.range(-0.3, 0.3) * 50 : r.range(-30, 30))]); V.push(row); }
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1];
        for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) tri2(g, f[0], f[1], f[2], H.rgba(H.mix([214, 196, 150], [150, 140, 120], j / ny * 0.7 + r() * 0.2).map((v) => v * (0.94 + r() * 0.1))));
      }
      // a few faceted rocks and sea-grass blades
      for (let i = 0; i < 7; i++) { const x = r.range(40, 1040), y = r.range(1610, 1700), s = r.range(30, 70); tri2(g, [x - s, y + s * 0.4], [x, y - s * 0.7], [x + s * 0.2, y + s * 0.4], '#6d7f8c'); tri2(g, [x, y - s * 0.7], [x + s, y + s * 0.4], [x + s * 0.2, y + s * 0.4], '#4e5d6e'); }
      SAND = c;
    }
    ctx.drawImage(SAND, 0, 0);
  }
  function rays(ctx, t) {
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 5; i++) {
      const x = 120 + i * 220 + Math.sin(t * 0.4 + i * 1.7) * 60, w = 70 + 30 * Math.sin(i * 2.1);
      ctx.fillStyle = `rgba(190,240,255,${0.07 + 0.03 * Math.sin(t * 0.7 + i)})`;
      ctx.beginPath(); ctx.moveTo(x - w * 0.5, 0); ctx.lineTo(x + w * 0.5, 0); ctx.lineTo(x + w * 2.2 + 160, 1500); ctx.lineTo(x + 160 - w * 0.6, 1500); ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }
  function bubbles(ctx, t, n, alpha, seed = 12) {
    if (alpha <= 0.01) return;
    const r = H.rng(seed);
    ctx.save(); ctx.globalAlpha = alpha;
    for (let i = 0; i < n; i++) {
      const x0 = r() * W, sp = r.range(60, 140), ph0 = r() * 6.28, size = r.range(6, 15), y0 = r() * (HH + 200);
      const y = HH + 100 - ((y0 + t * sp) % (HH + 200)), x = x0 + Math.sin(t * 1.3 + ph0) * 18;
      gem(ctx, x, y, size, [196, 238, 255], ph0);
    }
    ctx.restore();
  }
  // teeth slowly sinking through the water, pure function of t
  function sinkingTeeth(ctx, t, n, alpha, x0, x1, seed = 31) {
    if (alpha <= 0.01) return;
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x = r.range(x0, x1), sp = r.range(70, 130), off = r() * 1800, rot = r() * 6.28, rs = r.range(-1.2, 1.2);
      const y = 300 + ((off + t * sp) % 1400);
      tooth(ctx, x + Math.sin(t * 1.5 + rot) * 20, y, rot + t * rs, r.range(40, 64), 1, alpha * 0.9 * H.smooth(1700, 1500, y));
    }
  }
  function seaScene(ctx, t, key) {
    backdrop(ctx, key, [92, 196, 222], [10, 40, 92], [420, 120]);
    rays(ctx, t);
    sandFloor(ctx);
  }

  // =================== REEF: HOOK + END ===================
  const CAM_REEF = makeCamYaw([0, 0, -12], 0, 0, 1500, W, HH);
  function hookPose(t) { return { x: H.lerp(2.4, 0.3, EO(t, 0, 5.4)), y: 0.4 + 0.12 * Math.sin(t * 1.1), z: H.lerp(1.5, -1.5, EO(t, 0, 5.4)), yaw: 0.55 - 0.15 * EI(t, 0, 5.4), s: 1.5, t }; }
  function header(ctx, t) {
    const k = EO(t, 2.75, 3.15); if (k <= 0 || t > CUT.end + WIPE) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 214, 'WHY SHARKS NEVER RUN OUT OF TEETH', { font: FONT(40), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  function bigNumber(ctx, x, y, str, px, k, fill = '#fff') {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.font = FONT(px); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(8,20,50,0.5)'; ctx.fillText(str, 8, 8); ctx.lineJoin = 'round'; ctx.lineWidth = px * 0.11; ctx.strokeStyle = INK; ctx.strokeText(str, 0, 0); ctx.fillStyle = fill; ctx.fillText(str, 0, 0);
    ctx.restore();
  }
  const fmt = (n) => n.toLocaleString('en-US');
  function sceneHook(ctx, t) {
    seaScene(ctx, t, 'reef');
    bubbles(ctx, t, 26, 0.7, 12);
    const sp = drawShark(ctx, CAM_REEF, hookPose(t));
    sinkingTeeth(ctx, t, 9, EO(t, P(0, 'lose') - 0.2, P(0, 'lose') + 0.5), 140, 940, 31);
    // "This shark": tag pinned to the lemon shark
    const kS = win(t, P(0, 'shark') - 0.15, P(1, 'so') - 0.3);
    if (kS > 0.01) {
      const fin = sp([1.9, 1.15, 0]), a = [fin[0] - 120, fin[1] - 250];
      lpArrow(ctx, [a[0] + 40, a[1] + 40], [a[0] + 10, fin[1] - 90], [fin[0] - 20, fin[1] - 20], EI(t, P(0, 'shark') - 0.15, P(0, 'shark') + 0.25), [255, 255, 255], 16);
      lpTag(ctx, H.clamp(a[0], 240, 840), a[1], 'lemon shark', { k: kS, font: FONT(56), bg: LEMON });
    }
    // 30,000 counter on "thirty thousand", TEETH on "teeth"
    const kC = BK(t, P(0, 'thirty') - 0.15, 0.35) * (1 - EI(t, CUT.jaw - 0.35, CUT.jaw));
    const v = Math.round(30000 * EO(t, P(0, 'thirty') - 0.15, P(0, 'thousand') + 0.3) / 100) * 100;
    bigNumber(ctx, 540, 1430, fmt(v), 190, kC);
    lpTag(ctx, 540, 1560, 'TEETH LOST', { k: BK(t, P(0, 'teeth') - 0.12) * (1 - EI(t, P(1, 'never') - 0.3, P(1, 'never'))), font: FONT(64), bg: '#fff' });
    const kN = BK(t, P(1, 'never') - 0.12);
    if (kN > 0.01) {
      lpTag(ctx, 540, 1565, 'NEVER RUNS OUT?', { k: kN, font: FONT(72), bg: CORAL, col: '#fff' });
    }
  }
  function sceneEnd(ctx, t) {
    seaScene(ctx, t, 'reef');
    bubbles(ctx, t, 26, 0.7, 21);
    const tt = t - CUT.end;
    drawShark(ctx, CAM_REEF, { x: H.lerp(-1.6, 0.6, EO(tt, 0, 3.4)), y: 1.4 + 0.1 * Math.sin(t * 1.1), z: 1.5, yaw: -2.6 + 0.2 * EI(tt, 0, 3.4), s: 1.4, t });
    sinkingTeeth(ctx, t, 7, EO(t, CUT.end, CUT.end + 0.6), 160, 920, 44);
    const kq = win(t, P(22, 'how') - 0.1, 99);
    if (kq > 0.01) {
      lpTag(ctx, 540, 1250, 'How many teeth', { k: kq, font: FONT(80), bg: INK, col: '#fff' });
      lpTag(ctx, 540, 1400, 'have YOU lost?', { k: BK(t, P(22, 'you') - 0.12), font: FONT(92), h: 160, bg: CORAL, col: '#fff' });
      lpTag(ctx, 540, 1550, 'tell me below', { k: BK(t, P(22, 'far') - 0.05), font: FONT(54), bg: SEA });
    }
  }

  // =================== JAW CUTAWAY (cross-section through a lower jaw) ===================
  const JC = [540, 1130], RX = 300, RY = 255, TRX = 318, TRY = 272;
  const TH0 = -100 * Math.PI / 180, DTH = 33 * Math.PI / 180;
  // a tooth at path position u (0 = the working front tooth, 1..5 = spares folded back, <0 = falling out)
  function toothPose(u) {
    const th = TH0 + u * DTH, bx = Math.cos(th) * TRX, by = Math.sin(th) * TRY;
    const fold = H.clamp(u, 0, 1.5) * 0.85 + H.clamp(-u, 0, 1) * -0.35; // spares lie down toward the inside of the jaw
    const len = 200 * (1 - 0.1 * H.clamp(u, 0, 6));
    return { x: bx, y: by, ang: th + fold, len, th };
  }
  let JAWL = null;
  function jawLayer() {
    if (JAWL) return JAWL;
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(77), N = 22;
    g.translate(JC[0], JC[1]);
    // cartilage core: faceted fan
    const pts = []; for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2; pts.push([Math.cos(a) * RX * r.range(0.93, 1.0), Math.sin(a) * RY * r.range(0.93, 1.0)]); }
    for (let i = 0; i < N; i++) { const a = pts[i], b = pts[(i + 1) % N], m = [(a[0] + b[0]) * 0.33, (a[1] + b[1]) * 0.33], lit = 0.5 + 0.5 * Math.cos(i / N * Math.PI * 2 + 2.3); tri2(g, a, b, m, H.rgba(H.mix([196, 206, 220], [246, 240, 226], lit))); tri2(g, [0, 0], a, m, H.rgba(H.mix([180, 192, 212], [236, 230, 220], lit * 0.9))); tri2(g, [0, 0], m, b, H.rgba(H.mix([172, 184, 206], [226, 222, 214], lit * 0.8))); }
    // soft tissue (gum) band hugging the top and the inside of the jaw
    const A0 = TH0 - DTH * 1.4, A1 = TH0 + DTH * 6.2, M = 26;
    for (let i = 0; i < M; i++) {
      const a0 = H.lerp(A0, A1, i / M), a1 = H.lerp(A0, A1, (i + 1) / M);
      const p = (a, s) => [Math.cos(a) * (RX + s), Math.sin(a) * (RY + s)];
      const thick = (a) => 26 + 18 * Math.sin((a - A0) / (A1 - A0) * Math.PI);
      const o0 = p(a0, thick(a0)), o1 = p(a1, thick(a1)), i0 = p(a0, -14), i1 = p(a1, -14);
      const sh = 0.9 + r() * 0.14;
      tri2(g, o0, o1, i0, H.rgba([236 * sh, 128 * sh, 140 * sh])); tri2(g, o1, i1, i0, H.rgba([212 * sh, 106 * sh, 124 * sh]));
    }
    return (JAWL = c);
  }
  function jawBase(ctx, t, key, view) {
    backdrop(ctx, key, [16, 52, 104], [60, 150, 196], [540, 1100]);
    ctx.save(); ctx.translate(view.x, view.y); ctx.scale(view.s, view.s); ctx.translate(-JC[0], -JC[1]);
    ctx.save(); ctx.globalAlpha = 0.3; ctx.fillStyle = '#081a3a'; ctx.beginPath(); ctx.ellipse(JC[0] + 16, JC[1] + 24, RX + 40, RY + 40, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    ctx.drawImage(jawLayer(), 0, 0);
    ctx.restore();
  }
  // screen position of a jaw-local point
  const jawScr = (view, x, y) => [view.x + (x) * view.s, view.y + (y) * view.s];
  function drawTeeth(ctx, t, view, list) {
    ctx.save(); ctx.translate(view.x, view.y); ctx.scale(view.s, view.s);
    // back to front so the working tooth sits on top
    list.slice().sort((a, b) => b.u - a.u).forEach((q) => {
      const tp = toothPose(q.u);
      tooth(ctx, tp.x + (q.dx || 0), tp.y + (q.dy || 0), tp.ang + (q.dr || 0), tp.len, q.k ?? 1, q.a ?? 1, q.warm || 0);
    });
    ctx.restore();
  }
  function jawView(t) {
    const zin = EO(t, CUT.jaw, P(2, 'jaw') + 0.3), up = EI(t, P(6, 'most') - 0.2, P(6, 'carry'));
    return { x: 540, y: H.lerp(1130, 1020, up), s: H.lerp(0.78, 1.0, zin) * H.lerp(1, 0.84, up) };
  }
  function sceneJaw(ctx, t) {
    const view = jawView(t);
    jawBase(ctx, t, 'jaw', view);
    bubbles(ctx, t, 12, 0.35, 5);
    // the front tooth is there from the start; the spares pop in on "rows and rows"
    const list = [{ u: 0, k: BK(t, CUT.jaw + 0.15, 0.35) }];
    const fold0 = EI(t, P(5, 'folded') - 0.15, P(5, 'back') + 0.2);
    for (let i = 1; i <= 5; i++) {
      const t0 = H.lerp(P(4, 'rows') - 0.15, P(4, 'spares'), (i - 1) / 4);
      list.push({ u: i, k: BK(t, t0, 0.3), dr: -(1 - fold0) * 0.5 * Math.min(1, i) });
    }
    // glow on the spares
    const kSp = win(t, P(4, 'spares') - 0.12, P(6, 'most') - 0.3);
    if (kSp > 0.01) {
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.45 * kSp;
      const c = jawScr(view, 300, 120); const g = ctx.createRadialGradient(c[0], c[1], 20, c[0], c[1], 380); g.addColorStop(0, 'rgba(120,230,255,0.8)'); g.addColorStop(1, 'rgba(120,230,255,0)'); ctx.fillStyle = g; ctx.fillRect(c[0] - 400, c[1] - 400, 800, 800); ctx.restore();
    }
    drawTeeth(ctx, t, view, list);
    // labels
    lpTag(ctx, 540, 420, 'INSIDE THE JAW', { k: win(t, P(2, 'inside') - 0.12, P(3, 'front') - 0.3), font: FONT(76), bg: SEA });
    const ft = toothPose(0), tip = jawScr(view, ft.x + Math.cos(ft.ang) * ft.len, ft.y + Math.sin(ft.ang) * ft.len);
    const kF = win(t, P(3, 'front') - 0.12, P(6, 'most') - 0.3);
    if (kF > 0.01) {
      lpArrow(ctx, [tip[0] - 190, tip[1] - 90], [tip[0] - 120, tip[1] - 120], [tip[0] - 24, tip[1] - 8], EI(t, P(3, 'front') - 0.12, P(3, 'front') + 0.25), [255, 255, 255], 16);
      lpTag(ctx, Math.max(230, tip[0] - 250), tip[1] - 160, 'front tooth', { k: kF, font: FONT(56), bg: '#fff' });
    }
    const sp3 = toothPose(2.5), spP = jawScr(view, sp3.x + 70, sp3.y);
    const kS = win(t, P(4, 'spares') - 0.12, P(6, 'most') - 0.3);
    if (kS > 0.01) {
      lpArrow(ctx, [spP[0] + 10, spP[1] - 230], [spP[0] + 70, spP[1] - 140], [spP[0] - 20, spP[1] - 40], EI(t, P(4, 'spares') - 0.12, P(4, 'spares') + 0.25), [255, 255, 255], 18);
      lpTag(ctx, Math.min(W - 190, spP[0] - 10), spP[1] - 290, 'SPARES', { k: kS, font: FONT(76), bg: CORAL, col: '#fff' });
    }
    // "folded back": curved arrow along the inside face
    const kFo = win(t, P(5, 'folded') - 0.12, P(6, 'most') - 0.3);
    if (kFo > 0.01) {
      const q = (u) => { const tp = toothPose(u); return jawScr(view, tp.x * 1.42, tp.y * 1.38); };
      lpArrow(ctx, q(1.1), q(3), q(4.9), EI(t, P(5, 'folded') - 0.12, P(5, 'back') + 0.4), [255, 214, 107], 22);
      lpTag(ctx, 540, 1560, 'folded back inside', { k: win(t, P(5, 'inside') - 0.15, P(6, 'most') - 0.3), font: FONT(58), bg: LEMON });
    }
    // about 15 rows: a counter + a strip of 15 tooth icons
    const kR = EO(t, P(6, 'carry') - 0.2, P(6, 'carry'));
    if (kR > 0.01 && t < CUT.bone) {
      const n = Math.round(15 * EO(t, P(6, 'carry') - 0.1, P(6, 'fifteen') + 0.1));
      for (let i = 0; i < 15; i++) { const k = BK(t, H.lerp(P(6, 'carry') - 0.1, P(6, 'fifteen') + 0.05, i / 14), 0.25); tooth(ctx, 120 + i * 60, 1640, -Math.PI / 2, 74, k, 1, i === 14 ? 0.5 * BK(t, P(6, 'fifteen')) : 0); }
      bigNumber(ctx, 540, 1520, '~' + Math.max(1, n), 170, BK(t, P(6, 'carry') - 0.15, 0.35));
      lpTag(ctx, 540, 400, 'ROWS OF TEETH', { k: BK(t, P(6, 'rows') - 0.12), font: FONT(76), bg: SEA });
    }
  }

  // =================== BONE vs SOFT TISSUE ===================
  function boneBlock(ctx, x0, y0, x1, y1, seed) {
    const r = H.rng(seed), cs = 70;
    for (let y = y0; y < y1; y += cs) for (let x = x0; x < x1; x += cs) {
      const a = [x, y], b = [Math.min(x1, x + cs), y], c = [x, Math.min(y1, y + cs)], d = [Math.min(x1, x + cs), Math.min(y1, y + cs)];
      const base = H.mix([220, 214, 200], [168, 160, 150], (y - y0) / (y1 - y0) * 0.7);
      tri2(ctx, a, b, c, H.rgba(base.map((v) => v * (0.92 + r() * 0.12)))); tri2(ctx, b, d, c, H.rgba(base.map((v) => v * (0.86 + r() * 0.12))));
    }
    // spongy pores
    for (let i = 0; i < 26; i++) gem(ctx, r.range(x0 + 20, x1 - 20), r.range(y0 + 30, y1 - 20), r.range(6, 13), [140, 130, 124], r() * 3);
  }
  function humanTooth(ctx, x, gumY, k) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, gumY); ctx.scale(k, k);
    // two long roots reaching deep into the bone
    tri2(ctx, [-70, 0], [-20, 0], [-46, 250], H.rgba(ROOT)); tri2(ctx, [20, 0], [70, 0], [44, 250], H.rgba(H.mix(ROOT, [80, 60, 50], 0.18)));
    tri2(ctx, [-20, 0], [20, 0], [0, 80], H.rgba(H.mix(ROOT, [80, 60, 50], 0.1)));
    // crown (molar-ish)
    const C = [[-95, 0], [-100, -110], [-55, -170], [0, -150], [55, -170], [100, -110], [95, 0]];
    for (let i = 0; i < C.length - 1; i++) tri2(ctx, [0, -60], C[i], C[i + 1], H.rgba(H.mix([250, 250, 246], [170, 186, 210], (i % 3) * 0.16 + (i > 2 ? 0.12 : 0))));
    ctx.restore();
  }
  function sceneBone(ctx, t) {
    backdrop(ctx, 'bone', [20, 46, 100], [80, 160, 200], [540, 400]);
    // ---- top: YOU, tooth locked into bone
    const kTop = EO(t, CUT.bone, CUT.bone + 0.5);
    ctx.save(); ctx.globalAlpha = kTop;
    boneBlock(ctx, 120, 760, 960, 1040, 9);
    tri2(ctx, [120, 720], [960, 720], [960, 770], '#e98a96'); tri2(ctx, [120, 720], [960, 770], [120, 770], '#d4707e');
    ctx.restore();
    humanTooth(ctx, 540, 740, BK(t, P(7, 'your') - 0.12, 0.35));
    lpTag(ctx, 210, 420, 'YOU', { k: BK(t, P(7, 'your') - 0.12), font: FONT(80), bg: '#fff' });
    const kB = BK(t, P(7, 'bone') - 0.12);
    lpTag(ctx, 800, 950, 'BONE', { k: kB, font: FONT(64), bg: INK, col: '#fff' });
    hexBadge(ctx, 860, 520, BK(t, P(7, 'locked') - 0.1), true, 52);
    lpTag(ctx, 700, 420, 'LOCKED IN', { k: BK(t, P(7, 'locked') - 0.12), font: FONT(60), bg: SEA });
    // divider
    tri2(ctx, [0, 1100], [W, 1080], [W, 1112], 'rgba(255,255,255,0.5)'); tri2(ctx, [0, 1100], [W, 1112], [0, 1126], 'rgba(255,255,255,0.3)');
    // ---- bottom: SHARK, tooth sitting in soft tissue
    const kS = BK(t, P(8, 'sharks') - 0.15, 0.35);
    if (kS > 0.01) {
      const r = H.rng(12);
      ctx.save(); ctx.translate(540, 1480); ctx.scale(kS, kS);
      const M = 14; for (let i = 0; i < M; i++) { const a0 = Math.PI + i / M * Math.PI, a1 = Math.PI + (i + 1) / M * Math.PI, wob = Math.sin(t * 3 + i) * 4; tri2(ctx, [0, 60], [Math.cos(a0) * 420, Math.sin(a0) * 120 + wob], [Math.cos(a1) * 420, Math.sin(a1) * 120 + wob], H.rgba([236 * (0.88 + r() * 0.14), 124, 138])); }
      tri2(ctx, [-420, 0], [420, 0], [420, 90], '#c86478'); tri2(ctx, [-420, 0], [420, 90], [-420, 90], '#b85a6e');
      ctx.restore();
      // the tooth: wobbles on "pop", then pops out and tumbles away
      const pt = ph(t, P(9, 'pop') - 0.05, P(9, 'pop') + 0.9), wob = Math.sin(t * 40) * 0.07 * EO(t, P(9, 'so') - 0.1, P(9, 'pop'));
      const lift = pt > 0 ? H.ease.out(pt) : 0;
      tooth(ctx, 540 + lift * 260, 1388 - lift * 420 + pt * pt * 160, -Math.PI / 2 + wob + lift * 2.4, 230, kS, 1 - ph(t, P(9, 'easily'), P(9, 'easily') + 0.5));
      if (pt > 0 && pt < 0.6) { for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, d = 40 + pt * 220; ctx.save(); ctx.globalAlpha = 1 - pt / 0.6; gem(ctx, 540 + Math.cos(a) * d, 1388 + Math.sin(a) * d * 0.6, 14, [255, 230, 160], a); ctx.restore(); } }
    }
    lpTag(ctx, 210, 1220, 'SHARK', { k: BK(t, P(8, 'sharks') - 0.12), font: FONT(80), bg: LEMON });
    lpTag(ctx, 540, 1600, 'SOFT TISSUE', { k: BK(t, P(8, 'soft') - 0.12) * (1 - ph(t, P(9, 'pop') - 0.2, P(9, 'pop'))), font: FONT(64), bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 1600, 'POP!', { k: BK(t, P(9, 'pop') - 0.1), font: FONT(96), h: 160, bg: CORAL, col: '#fff' });
  }

  // =================== JAW CUTAWAY 2: the conveyor ===================
  // shift: how far the whole tooth series has rolled forward
  function rollShift(t) {
    return EI(t, P(11, 'swings') - 0.15, P(12, 'place') + 0.1) + 1.5 * EI(t, P(16, 'moving') - 0.15, P(17, 'forward') + 0.3);
  }
  function sceneRoll(ctx, t) {
    const view = { x: 540, y: 1100, s: 0.94 + 0.03 * EI(t, CUT.roll, CUT.nums) };
    jawBase(ctx, t, 'roll', view);
    bubbles(ctx, t, 12, 0.35, 8);
    const sh = rollShift(t), list = [];
    // tooth 0: the worn front tooth snaps off on "snaps" and tumbles away
    const sn = ph(t, P(10, 'snaps') - 0.05, P(10, 'snaps') + 1.4), jig = Math.sin(t * 38) * 0.06 * EO(t, P(10, 'when') - 0.1, P(10, 'snaps'));
    if (sn < 1) list.push({ u: 0, dx: -sn * 420, dy: -sn * 260 + sn * sn * 380, dr: jig - sn * 3.2, a: 1 - H.smooth(0.6, 1, sn) });
    for (let i = 1; i <= 9; i++) {
      const u = i - sh;
      if (u > 6.3) continue;
      let k = H.smooth(6.2, 5.2, u), a = 1, dx = 0, dy = 0, dr = 0;
      if (i === 6) k = EO(t, P(14, 'brand') - 0.12, P(15, 'growing') + 0.4) * H.smooth(6.2, 5.0, u);
      if (u < -0.3) { const f = H.clamp((-0.3 - u) / 0.9); dx = -f * 300; dy = f * f * 500; dr = -f * 2.4; a = 1 - f; } // old teeth drop away during the roll
      list.push({ u, k, a, dx, dy, dr, warm: i === 1 ? 0.35 * win(t, P(11, 'swings') - 0.1, P(14, 'meanwhile') - 0.3) : 0 });
    }
    // glow on the new tooth bud at the back
    const kN = win(t, P(14, 'brand') - 0.12, P(16, 'its') - 0.3);
    if (kN > 0.01) { const b = toothPose(5); const c = jawScr(view, b.x, b.y); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.5 * kN; const g = ctx.createRadialGradient(c[0], c[1], 10, c[0], c[1], 220); g.addColorStop(0, 'rgba(255,220,120,0.9)'); g.addColorStop(1, 'rgba(255,220,120,0)'); ctx.fillStyle = g; ctx.fillRect(c[0] - 240, c[1] - 240, 480, 480); ctx.restore(); }
    drawTeeth(ctx, t, view, list);
    // labels
    lpTag(ctx, 540, 400, 'SNAP!', { k: win(t, P(10, 'snaps') - 0.1, P(11, 'tooth') - 0.3), font: FONT(110), h: 170, bg: CORAL, col: '#fff' });
    const kU = win(t, P(11, 'swings') - 0.12, P(13, 'sometimes') - 0.3);
    if (kU > 0.01) {
      const q = (u) => { const tp = toothPose(u); return jawScr(view, tp.x * 1.5, tp.y * 1.42); };
      lpArrow(ctx, q(1.3), q(0.75), q(0.05), EI(t, P(11, 'swings') - 0.12, P(11, 'up') + 0.2), [255, 214, 107], 24);
      lpTag(ctx, 540, 400, 'SWINGS UP', { k: kU, font: FONT(96), bg: LEMON });
    }
    const kD = win(t, P(13, 'just') - 0.12, P(14, 'meanwhile') - 0.3);
    if (kD > 0.01) { bigNumber(ctx, 540, 1600, '1 DAY', 160, BK(t, P(13, 'one') - 0.12, 0.35)); lpTag(ctx, 540, 400, 'as fast as', { k: kD, font: FONT(76), bg: SEA }); }
    if (kN > 0.01) {
      const b = toothPose(5), c = jawScr(view, b.x, b.y);
      lpArrow(ctx, [c[0] + 170, c[1] + 160], [c[0] + 190, c[1] + 90], [c[0] + 60, c[1] + 30], EI(t, P(14, 'new') - 0.12, P(14, 'tooth') + 0.2), [255, 255, 255], 18);
      lpTag(ctx, Math.min(W - 220, c[0] + 170), c[1] + 215, 'NEW TOOTH', { k: kN, font: FONT(66), bg: LEMON });
      lpTag(ctx, 540, 400, 'growing at the back', { k: win(t, P(15, 'growing') - 0.12, P(16, 'its') - 0.3), font: FONT(64), bg: '#fff' });
    }
    // moving staircase: rotating chevron arrows around the jaw + label
    const kM = EO(t, P(16, 'moving') - 0.12, P(16, 'moving') + 0.3) * (1 - EI(t, CUT.nums - 0.3, CUT.nums));
    if (kM > 0.01) {
      const q = (u) => { const tp = toothPose(u); return jawScr(view, tp.x * 1.48, tp.y * 1.42); };
      const flow = (t * 0.8) % 1;
      for (let j = 0; j < 4; j++) { const u0 = 5 - (j + flow) * 1.3; if (u0 < -0.6) continue; ctx.save(); ctx.globalAlpha = kM * H.smooth(-0.6, 0.2, u0); lpArrow(ctx, q(u0 + 0.5), q(u0 + 0.25), q(u0), 1, [255, 214, 107], 22); ctx.restore(); }
      lpTag(ctx, 540, 400, 'TOOTH CONVEYOR', { k: BK(t, P(16, 'staircase') - 0.12) * (1 - EI(t, CUT.nums - 0.3, CUT.nums)), font: FONT(84), bg: LEMON });
      lpTag(ctx, 540, 1600, 'always rolling forward', { k: BK(t, P(17, 'rolling') - 0.12) * (1 - EI(t, CUT.nums - 0.3, CUT.nums)), font: FONT(58), bg: '#fff' });
    }
  }

  // =================== TOOTH-COUNT PILLARS ===================
  function prism(ctx, x, base, w, h, col) {
    const d = w * 0.35, top = base - h;
    const L = H.rgba(H.mix(col, [255, 255, 255], 0.3)), M = H.rgba(col), D = H.rgba(H.mix(col, [10, 24, 60], 0.3));
    tri2(ctx, [x - w / 2, top], [x + w / 2, top], [x - w / 2, base], M);
    tri2(ctx, [x + w / 2, top], [x + w / 2, base], [x - w / 2, base], H.rgba(H.mix(col, [10, 24, 60], 0.12)));
    tri2(ctx, [x + w / 2, top], [x + w / 2 + d, top - d * 0.6], [x + w / 2, base], D);
    tri2(ctx, [x + w / 2 + d, top - d * 0.6], [x + w / 2 + d, base - d * 0.6], [x + w / 2, base], H.rgba(H.mix(col, [10, 24, 60], 0.4)));
    tri2(ctx, [x - w / 2, top], [x - w / 2 + d, top - d * 0.6], [x + w / 2 + d, top - d * 0.6], L);
    tri2(ctx, [x - w / 2, top], [x + w / 2 + d, top - d * 0.6], [x + w / 2, top], L);
  }
  const CAM_NUM = makeCamYaw([0, 0, -12], 0, 0, 1500, W, HH);
  function sceneNums(ctx, t) {
    seaScene(ctx, t, 'nums');
    bubbles(ctx, t, 16, 0.5, 33);
    const pl = 1380, per = 23; // px per 1,000 teeth
    tri2(ctx, [70, pl], [1010, pl], [1060, pl + 110], '#e6f4ff'); tri2(ctx, [70, pl], [1060, pl + 110], [20, pl + 110], '#c6def2');
    tri2(ctx, [20, pl + 110], [1060, pl + 110], [1060, pl + 170], '#88a8cc'); tri2(ctx, [20, pl + 110], [1060, pl + 170], [20, pl + 170], '#7896bc');
    const kG = EO(t, P(19, 'twenty') - 0.15, P(19, 'teeth')), kL = EO(t, P(21, 'more') - 0.15, P(21, 'thousand') + 0.2);
    const hG = 20 * per * kG, hL = 30 * per * kL;
    if (hG > 2) prism(ctx, 320, pl + 40, 230, hG, [150, 164, 186]);
    if (hL > 2) prism(ctx, 740, pl + 40, 230, hL, [222, 184, 96]);
    lpTag(ctx, 320, pl + 140, 'GREAT WHITE', { k: BK(t, P(18, 'great') - 0.12), font: FONT(52), bg: '#fff' });
    lpTag(ctx, 740, pl + 140, 'LEMON SHARK', { k: BK(t, P(20, 'lemon') - 0.12), font: FONT(52), bg: LEMON });
    // the two sharks cruise above their pillars (great white: grey, bigger; same mesh, retinted by fog)
    ctx.save(); ctx.globalAlpha = EO(t, P(18, 'great') - 0.2, P(18, 'white') + 0.2);
    drawShark(ctx, CAM_NUM, { x: -1.75, y: 2.15 - (1 - kG) * 3.4 + 0.08 * Math.sin(t * 1.3), z: 2, yaw: 2.95 + 0.08 * Math.sin(t), s: 0.66, t, gw: true }, 0.1);
    ctx.restore();
    ctx.save(); ctx.globalAlpha = EO(t, P(20, 'this') - 0.2, P(20, 'lemon') + 0.1);
    drawShark(ctx, CAM_NUM, { x: 2.15, y: 4.3 - (1 - kL) * 5.6 + 0.08 * Math.sin(t * 1.3 + 1), z: 2, yaw: 2.95 + 0.08 * Math.sin(t + 1), s: 0.62, t }, 0.05);
    ctx.restore();
    // counters
    if (t > P(19, 'twenty') - 0.15) { const v = Math.round(20000 * kG / 100) * 100; bigNumber(ctx, 320, pl + 40 - hG - 70, fmt(v), 104, BK(t, P(19, 'twenty') - 0.15, 0.35)); }
    if (t > P(21, 'more') - 0.15) { const v = Math.round(30000 * kL / 100) * 100; bigNumber(ctx, 740, pl + 40 - hL - 70, (kL > 0.97 ? '30,000+' : fmt(v)), 104, BK(t, P(21, 'more') - 0.15, 0.35), LEMON); }
    lpTag(ctx, 540, 400, 'TEETH IN A LIFETIME', { k: BK(t, P(19, 'teeth') - 0.12), font: FONT(66), bg: SEA });
    lpTag(ctx, 740, 1606, "scientists' estimate", { k: win(t, P(21, 'scientists') - 0.12, 99), font: FONT(40), bg: '#fff' });
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
    if (t < CUT.jaw) sceneHook(ctx, t);
    else if (t < CUT.bone) sceneJaw(ctx, t);
    else if (t < CUT.roll) sceneBone(ctx, t);
    else if (t < CUT.nums) sceneRoll(ctx, t);
    else if (t < CUT.end) sceneNums(ctx, t);
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
      for (const [f, a] of flashes) { ctx.fillStyle = `rgba(220,248,255,${a * 0.7})`; ctx.beginPath(); ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath(); ctx.fill(); }
    } else scene(ctx, t);
    header(ctx, t);
    ctx.restore();
  }

  // thumbnail still: the conveyor with 3 huge words
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    sceneRoll(ctx, P(15, 'growing') - 0.2);
    lpTag(ctx, 540, 520, 'TOOTH CONVEYOR', { font: FONT(100), h: 180, bg: CORAL, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, underwater bubbles, tooth clicks ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const bub = (t, g = 1, p = 0) => k.tone(t, { f: [[0, 380], [0.07, 980]], type: 'sine', dur: 0.09, gain: 0.07 * g, a: 0.004, pan: p, minor: true });
    const bubbleRun = (t0, t1, n, seed) => { const r = H.rng(seed); for (let i = 0; i < n; i++) bub(H.lerp(t0, t1, r()), r.range(0.5, 1), r.range(-0.6, 0.6)); };
    const water = (t0, t1, g = 1) => { const d = t1 - t0, steps = [220, 340, 280, 400, 260]; steps.forEach((f, i) => { const s = t0 + (d * i) / steps.length, dd = (d / steps.length) * 1.9; k.noise(s, { dur: dd, color: 'brown', filter: 'lowpass', f: [[0, f], [dd, f * 1.3]], q: 0.8, gain: 0.05 * g * Math.sin(((i + 0.5) / steps.length) * Math.PI), a: dd * 0.45, verb: 0.2 }); }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); bubbleRun(t, t + 0.5, 6, t * 10 | 0); };
    const clink = (t, g = 1, p = 0, minor) => { k.play('click', t, { gain: 0.6 * g, pan: p, minor }); glass(t, 'B5', 0.35 * g, p, 0.3, minor); };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    // hook
    water(0, 5.5, 1.2); bubbleRun(0, 5.3, 14, 3);
    glass(0.2, 'D4', 1.1, 0, 1.4); glass(0.2, 'A3', 0.8, 0, 1.4);
    facet(P(0, 'shark') - 0.1, 560, 0.9, -0.2); k.play('swish', P(0, 'shark'), { gain: 0.4 });
    for (let i = 0; i < 6; i++) clink(P(0, 'lose') + i * 0.28, 0.6, (i % 2 ? 0.3 : -0.3), true);
    k.withMinor(() => { for (let i = 0; i < 12; i++) k.play('tick', P(0, 'thirty') + i * 0.06, { f: 1800 + i * 90, gain: 0.5 }); });
    k.play('impact', P(0, 'thousand') + 0.2, { gain: 0.8 }); glass(P(0, 'thousand') + 0.2, 'D5', 1, 0, 1.2);
    facet(P(0, 'teeth') - 0.1, 500, 0.9);
    facet(2.8, 470, 0.9); // header
    k.play('riser', P(1, 'never') - 0.5, { dur: 0.5, gain: 0.45 }); k.play('impact', P(1, 'never') - 0.1, { gain: 0.7 }); glass(P(1, 'out'), 'F#5', 0.8, 0, 1.0);
    // jaw
    wipe(CUT.jaw);
    facet(P(2, 'inside') - 0.12, 560, 1); glass(P(2, 'jaw'), 'A4', 0.8, 0, 1.0);
    clink(CUT.jaw + 0.15, 0.9, -0.2);
    facet(P(3, 'front') - 0.1, 600, 0.9, -0.3);
    for (let i = 0; i < 5; i++) { const t0 = H.lerp(P(4, 'rows') - 0.15, P(4, 'spares'), i / 4); k.play('pop', t0, { gain: 0.45, minor: true, pan: 0.3 }); glass(t0, ['D5', 'F#5', 'A5', 'D6', 'F#6'][i], 0.35, 0.3, 0.4, true); }
    k.play('sparkle', P(4, 'spares') - 0.05, { n: 6, gain: 0.8 }); facet(P(4, 'spares') - 0.1, 520, 1, 0.3);
    k.play('swish', P(5, 'folded') - 0.1, { gain: 0.6 }); k.play('paper', P(5, 'back') - 0.05, { dur: 0.4, gain: 0.4 });
    facet(P(5, 'inside') - 0.12, 480, 0.8, 0, true);
    k.withMinor(() => { for (let i = 0; i < 15; i++) k.play('tick', H.lerp(P(6, 'carry') - 0.1, P(6, 'fifteen') + 0.05, i / 14), { f: 1500 + i * 70, gain: 0.55 }); });
    k.play('impact', P(6, 'fifteen') - 0.08, { gain: 0.8 }); ['D4', 'A4', 'D5'].forEach((n, i) => glass(P(6, 'fifteen') - 0.05 + i * 0.03, n, 1.2 - i * 0.2, (i - 1) * 0.3, 1.3));
    // bone vs tissue
    wipe(CUT.bone);
    facet(P(7, 'your') - 0.12, 560, 1, -0.3); k.play('stamp', P(7, 'locked') - 0.05, { gain: 0.5 }); k.play('success', P(7, 'locked'), { f: 'D5', gain: 0.3 });
    k.play('thud', P(7, 'bone') - 0.08, { f: 120, gain: 0.6 }); facet(P(7, 'bone') - 0.1, 420, 0.9);
    facet(P(8, 'sharks') - 0.12, 600, 1, 0.3); k.play('slap', P(8, 'soft') - 0.05, { gain: 0.35 }); facet(P(8, 'tissue') - 0.1, 480, 0.8, 0, true);
    k.withMinor(() => { for (let i = 0; i < 6; i++) k.play('tock', P(9, 'so') + i * 0.07, { f: 700 + (i % 2) * 120, gain: 0.35 }); });
    k.play('pop', P(9, 'pop') - 0.05, { gain: 1.0 }); k.play('jump', P(9, 'pop'), { gain: 0.25 }); glass(P(9, 'pop'), 'A5', 0.9, 0.2, 0.8);
    // conveyor
    wipe(CUT.roll);
    k.withMinor(() => { for (let i = 0; i < 5; i++) k.play('tock', P(10, 'when') + i * 0.08, { f: 800, gain: 0.35 }); });
    k.play('impact', P(10, 'snaps') - 0.05, { gain: 0.8 }); k.play('slap', P(10, 'snaps') - 0.03, { gain: 0.5 }); k.play('whoosh', P(10, 'off') - 0.1, { dur: 0.9, gain: 0.5 });
    k.play('riser', P(11, 'swings') - 0.35, { dur: 0.6, gain: 0.45 }); k.play('swish', P(11, 'swings') - 0.05, { gain: 0.6 }); facet(P(11, 'up') - 0.08, 600, 1);
    clink(P(12, 'place') - 0.05, 1.1, 0); k.play('success', P(12, 'place'), { f: 'D5', gain: 0.35 });
    k.play('impact', P(13, 'one') - 0.1, { gain: 0.7 }); glass(P(13, 'day'), 'F#5', 1, 0, 1.2);
    k.play('sparkle', P(14, 'brand') - 0.05, { n: 7, gain: 0.8 }); glass(P(14, 'new'), 'A5', 0.7, 0.3);
    k.tone(P(15, 'growing') - 0.1, { f: [[0, 260], [1.4, 520]], type: 'triangle', dur: 1.5, gain: 0.06 }); facet(P(15, 'back') - 0.1, 520, 0.8, 0.3, true);
    k.play('roller', P(16, 'moving') - 0.1, { dur: 3.2, gain: 0.35 });
    for (let i = 0; i < 9; i++) facet(P(16, 'moving') + i * 0.4, 460 + (i % 3) * 60, 0.6, (i % 2 ? 0.3 : -0.3), true);
    facet(P(16, 'staircase') - 0.1, 560, 1); k.play('success', P(17, 'forward'), { f: 'D5', gain: 0.35 });
    // pillars
    wipe(CUT.nums);
    facet(P(18, 'great') - 0.12, 500, 0.9, -0.3); water(CUT.nums, CUT.end, 0.8);
    k.withMinor(() => { for (let i = 0; i < 10; i++) k.play('tick', P(19, 'twenty') + i * 0.07, { f: 1700 + i * 80, gain: 0.5, pan: -0.3 }); });
    k.play('impact', P(19, 'thousand') - 0.05, { gain: 0.8 }); glass(P(19, 'thousand'), 'A4', 1, -0.3, 1.1);
    facet(P(20, 'lemon') - 0.12, 600, 1, 0.3); k.play('swish', P(20, 'lemon'), { gain: 0.4 });
    k.withMinor(() => { for (let i = 0; i < 12; i++) k.play('tick', P(21, 'more') + i * 0.07, { f: 1900 + i * 80, gain: 0.5, pan: 0.3 }); });
    k.play('impact', P(21, 'thousand') + 0.1, { gain: 1.0 }); ['D4', 'A4', 'D5', 'F#5'].forEach((n, i) => glass(P(21, 'thousand') + 0.1 + i * 0.03, n, 1.4 - i * 0.25, (i - 1.5) * 0.25, 1.5));
    // end
    wipe(CUT.end);
    water(CUT.end, D, 1.1); bubbleRun(CUT.end, D, 10, 99);
    facet(P(22, 'how') - 0.1, 470, 1); facet(P(22, 'you') - 0.1, 560, 1);
    ['A4', 'D5'].forEach((n, i) => glass(P(22, 'far') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(22, 'far'), { f: 'D3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
