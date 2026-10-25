// ================= Low-Poly Faceted, vertical 1080x1920: "Why do leaves turn orange in fall?" =================
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take) ----------
  const BEATS = [
    { s: 0.25, e: 2.2, w: {why: 0.25, do: 0.47, leaves: 0.61, turn: 1.05, orange: 1.33, in: 1.77, fall: 1.91} }, // Why do leaves turn orange in fall?
    { s: 2.75, e: 3.78, w: {heres: 2.75, the: 3.15, twist: 3.38} }, // Here's the twist:
    { s: 4.08, e: 5.81, w: {the: 4.08, orange: 4.28, was: 4.68, there: 4.88, all: 5.21, summer: 5.41} }, // the orange was there all summer.
    { s: 6.36, e: 8.54, w: {a: 6.36, leaf: 6.43, is: 6.69, packed: 6.82, with: 7.22, green: 7.48, chlorophyll: 7.81} }, // A leaf is packed with green chlorophyll,
    { s: 8.84, e: 11.11, w: {the: 8.84, pigment: 9.03, that: 9.47, turns: 9.72, sunlight: 10.04, into: 10.54, sugar: 10.8} }, // the pigment that turns sunlight into sugar.
    { s: 11.66, e: 14.38, w: {but: 11.66, its: 11.86, also: 12.07, holding: 12.34, yellow: 12.82, and: 13.22, orange: 13.43, pigments: 13.83} }, // But it's also holding yellow and orange pigments,
    { s: 14.68, e: 15.94, w: {called: 14.68, carotenoids: 15.12} }, // called carotenoids.
    { s: 16.49, e: 18.49, w: {all: 16.49, summer: 16.69, the: 17.09, green: 17.29, drowns: 17.63, them: 18.02, out: 18.29} }, // All summer, the green drowns them out.
    { s: 19.04, e: 20.43, w: {then: 19.04, the: 19.29, nights: 19.48, get: 19.86, longer: 20.05} }, // Then the nights get longer,
    { s: 20.73, e: 22.46, w: {and: 20.73, the: 20.93, tree: 21.13, shuts: 21.4, leaf: 21.93, down: 22.2} }, // and the tree shuts the leaf down.
    { s: 23.01, e: 24.75, w: {it: 23.01, stops: 23.16, making: 23.52, chlorophyll: 23.95} }, // It stops making chlorophyll,
    { s: 25.05, e: 26.82, w: {and: 25.05, breaks: 25.26, the: 25.69, old: 25.9, green: 26.11, apart: 26.47} }, // and breaks the old green apart.
    { s: 27.37, e: 30.73, w: {scientists: 27.37, think: 28.03, it: 28.36, pulls: 28.49, back: 28.82, about: 29.09, half: 29.41, the: 29.68, leafs: 29.88, nitrogen: 30.2} }, // Scientists think it pulls back about half the leaf's nitrogen,
    { s: 31.03, e: 32.28, w: {saving: 31.03, it: 31.47, for: 31.62, spring: 31.84} }, // saving it for spring.
    { s: 32.83, e: 34.02, w: {with: 32.83, the: 33.13, green: 33.35, gone: 33.72} }, // With the green gone,
    { s: 34.32, e: 36.0, w: {the: 34.32, hidden: 34.51, orange: 34.88, shows: 35.25, through: 35.57} }, // the hidden orange shows through.
    { s: 36.55, e: 37.45, w: {and: 36.55, the: 36.82, reds: 37.09} }, // And the reds?
    { s: 38.0, e: 39.23, w: {those: 38.0, are: 38.38, brand: 38.61, new: 39.0} }, // Those are brand new.
    { s: 39.78, e: 41.96, w: {trapped: 39.78, sugars: 40.25, turn: 40.66, into: 40.94, red: 41.21, pigments: 41.41} }, // Trapped sugars turn into red pigments,
    { s: 42.26, e: 45.04, w: {right: 42.26, before: 42.62, a: 43.06, corklike: 43.14, seal: 43.72, forms: 44.02, at: 44.38, the: 44.53, stem: 44.75} }, // right before a cork-like seal forms at the stem,
    { s: 45.34, e: 46.59, w: {and: 45.34, the: 45.58, leaf: 45.81, lets: 46.12, go: 46.43} }, // and the leaf lets go.
    { s: 47.14, e: 48.98, w: {so: 47.14, fall: 47.28, doesnt: 47.57, paint: 47.99, the: 48.34, leaves: 48.56} }, // So fall doesn't paint the leaves.
    { s: 49.53, e: 50.97, w: {it: 49.53, peels: 49.68, the: 50.06, green: 50.29, away: 50.66} }, // It peels the green away.
    { s: 51.52, e: 53.77, w: {which: 51.52, tree: 51.81, turns: 52.05, the: 52.35, brightest: 52.52, where: 53.06, you: 53.35, live: 53.53} }, // Which tree turns the brightest where you live?
  ];
  const P = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scene changes (facet-flip wipes): valley -> leaf studio -> night valley -> leaf studio -> golden valley
  const CUT = { leaf1: 6.0, night: 18.72, leaf2: 22.66, end: 46.85 };
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
  const INK = '#2a1f4f', CORAL = '#ff7060';
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
    ctx.fillStyle = o.shadow || 'rgba(40,20,70,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 6, p[1] + 6) : ctx.moveTo(p[0] + 6, p[1] + 6)); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || '#fff6f0');
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
    const light = H.rgba(H.mix(colA, [255, 255, 255], 0.3)), dark = H.rgba(H.mix(colA, [40, 20, 70], 0.25));
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
  // faceted sun / moon disc (reference recipe)
  function facetDisc(ctx, x, y, r, cA, cB, halo) {
    if (halo) { const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 6); g.addColorStop(0, halo); g.addColorStop(1, 'rgba(255,214,160,0)'); ctx.fillStyle = g; ctx.fillRect(x - r * 6, y - r * 6, r * 12, r * 12); }
    for (let i = 0; i < 14; i++) {
      const a0 = (i / 14) * Math.PI * 2, a1 = ((i + 1) / 14) * Math.PI * 2;
      ctx.fillStyle = H.rgba(H.mix(cA, cB, 0.5 + 0.5 * Math.cos(a0 - 2.3))); ctx.strokeStyle = ctx.fillStyle; ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a0) * r, y + Math.sin(a0) * r); ctx.lineTo(x + Math.cos(a1) * r, y + Math.sin(a1) * r); ctx.closePath(); ctx.fill(); ctx.stroke();
    }
  }
  // falling faceted leaves (2D shards), pure function of t
  function fallingLeaves(ctx, t, n, alpha, seed = 12, red = 0.35) {
    if (alpha <= 0.01) return;
    const r = H.rng(seed);
    ctx.save(); ctx.globalAlpha = alpha;
    for (let i = 0; i < n; i++) {
      const x0 = r() * W, sp = r.range(70, 150), ph0 = r() * 6.28, A = r.range(30, 90), size = r.range(16, 30), rs = r.range(-2, 2), y0 = r() * (HH + 200);
      const y = ((y0 + t * sp) % (HH + 200)) - 100, x = x0 + Math.sin(t * 1.3 + ph0) * A, rot = t * rs + ph0;
      const c = r() < red ? [214, 64, 52] : r() < 0.5 ? [246, 150, 48] : [248, 198, 70];
      ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(1, 0.55 + 0.45 * Math.sin(t * 2.2 + ph0));
      ctx.fillStyle = H.rgba(H.mix(c, [255, 255, 255], 0.18)); ctx.beginPath(); ctx.moveTo(0, -size); ctx.lineTo(size * 0.6, 0); ctx.lineTo(0, 0); ctx.closePath(); ctx.fill();
      ctx.fillStyle = H.rgba(H.mix(c, [60, 30, 70], 0.18)); ctx.beginPath(); ctx.moveTo(0, -size); ctx.lineTo(-size * 0.6, 0); ctx.lineTo(0, 0); ctx.closePath(); ctx.fill();
      ctx.fillStyle = H.rgba(H.mix(c, [60, 30, 70], 0.32)); ctx.beginPath(); ctx.moveTo(-size * 0.6, 0); ctx.lineTo(size * 0.6, 0); ctx.lineTo(0, size * 0.8); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
    ctx.restore();
  }

  // =================== VALLEY (hook, night, end) ===================
  const nz = H.makeNoise(31);
  const height = (x, z) => {
    const valley = Math.pow(Math.abs(x - 4 * Math.sin(z * 0.035)) / 55, 1.7) * 22;
    const far = H.smooth(130, 210, z) * 18;
    return nz.fbm2(x * 0.045, z * 0.045, 4) * 7 + valley + far - 3;
  };
  const WATER = -0.6;
  let TERR = null, TREES = null;
  const FALLS = [[246, 136, 40], [250, 196, 58], [222, 66, 48], [238, 104, 40], [252, 168, 52]];
  function buildValley() {
    const tris = [];
    const CELL = 4.4, X0 = -110, X1 = 130, Z0 = -20, Z1 = 230;
    const nx = Math.round((X1 - X0) / CELL), nzc = Math.round((Z1 - Z0) / CELL);
    const jr = H.rng(5), V = [];
    for (let j = 0; j <= nzc; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = X0 + i * CELL + (i > 0 && i < nx ? jr.range(-0.38, 0.38) * CELL : 0), z = Z0 + j * CELL + (j > 0 && j < nzc ? jr.range(-0.38, 0.38) * CELL : 0); row.push([x, height(x, z), z]); } V.push(row); }
    const tc = (y, slope) => {
      let c;
      if (y < WATER + 0.6) c = [214, 196, 150];
      else if (y < 6) c = H.mix([140, 150, 88], [104, 120, 78], H.clamp(y / 6)); // late-season meadow
      else if (y < 14) c = H.mix([104, 120, 78], [110, 112, 120], H.smooth(9, 14, y));
      else if (y < 22) c = [118, 110, 128]; else c = [244, 238, 248];
      if (slope > 0.55 && y > 3 && y < 22) c = H.mix(c, [124, 112, 124], 0.6);
      return c;
    };
    for (let j = 0; j < nzc; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1];
      const faces = (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]];
      for (const f of faces) {
        if (Math.max(f[0][1], f[1][1], f[2][1]) < WATER) { tris.push({ p: f.map(p => [p[0], WATER + nz.n2(p[0] * 0.4, p[2] * 0.4) * 0.35, p[2]]), col: [96, 120, 190], water: true }); continue; }
        let n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0]))); if (n[1] < 0) n = scl(n, -1);
        tris.push({ p: f, col: tc((f[0][1] + f[1][1] + f[2][1]) / 3, 1 - Math.abs(n[1])), terrain: true });
      }
    }
    // trees: deciduous (trunk + faceted crown that changes colour) and a few conifers that stay green
    const tr = H.rng(9), trees = [];
    const cone = (base, r, h, col, rot) => { const vs = [add3(base, [0, h, 0])]; for (let i = 0; i < 5; i++) { const a = rot + i / 5 * Math.PI * 2; vs.push(add3(base, [Math.cos(a) * r, 0, Math.sin(a) * r])); } for (let i = 0; i < 5; i++) tris.push({ p: [vs[0], vs[1 + i], vs[1 + (i + 1) % 5]], col, center: add3(base, [0, h * 0.3, 0]) }); };
    for (let kk = 0, placed = 0; kk < 2400 && placed < 300; kk++) {
      const x = tr.range(-80, 90), z = tr.range(-6, 170), y = height(x, z);
      if (y < 0.6 || y > 12) continue;
      if (nz.fbm2(x * 0.05 + 40, z * 0.05, 2) < -0.12) continue;
      const s = tr.range(1.5, 2.4), rot = tr() * 6;
      if (tr() < 0.22) { const g = H.mix([40, 110, 90], [70, 140, 100], tr()); cone([x, y - 0.2, z], s * 0.75, s * 1.6, g, rot); cone([x, y + s * 0.85, z], s * 0.55, s * 1.4, H.mix(g, [120, 180, 120], 0.25), rot + 0.6); placed++; continue; }
      // trunk: 4-sided prism
      const th = s * 1.5, tw = s * 0.18, vs = [];
      for (let i = 0; i < 4; i++) { const a = rot + i / 4 * Math.PI * 2; vs.push([x + Math.cos(a) * tw, y - 0.2, z + Math.sin(a) * tw]); }
      for (let i = 0; i < 4; i++) { const a = rot + i / 4 * Math.PI * 2; vs.push([x + Math.cos(a) * tw, y + th, z + Math.sin(a) * tw]); }
      for (let i = 0; i < 4; i++) { const j = (i + 1) % 4; tris.push({ p: [vs[i], vs[j], vs[4 + j]], col: [110, 78, 70], center: [x, y + th / 2, z] }, { p: [vs[i], vs[4 + j], vs[4 + i]], col: [110, 78, 70], center: [x, y + th / 2, z] }); }
      const C = [x, y + th + s * 0.9, z], cr = s * 1.25, fall = FALLS[Math.floor(tr() * FALLS.length)], green = H.mix([66, 138, 84], [96, 160, 86], tr()), lag = tr();
      const cv = ICO.v.map((v) => [C[0] + v[0] * cr * tr.range(0.85, 1.15), C[1] + v[1] * cr * 0.85 * tr.range(0.85, 1.15), C[2] + v[2] * cr * tr.range(0.85, 1.15)]);
      const fi = tris.length;
      for (const [a, b, c] of ICO.f) tris.push({ p: [cv[a], cv[b], cv[c]], crown: true, fall: H.mix(fall, FALLS[(a + b) % 5], 0.25), green, lag, center: C });
      trees.push({ C, r: cr, fi });
      placed++;
    }
    TERR = tris; TREES = trees;
  }
  const MODES = {
    dusk: { sky: ['#1b2350', '#4d3f84', '#c06a93', '#ffb08a'], SUN: [255, 226, 190], AMB: [104, 98, 150], FOG: [236, 160, 150], FOG_HI: [180, 140, 190], disc: ['#ffd49a', '#fff4d8'], halo: 'rgba(255,214,160,0.5)', stars: 0.8 },
    night: { sky: ['#070a22', '#141a44', '#28306a', '#45457e'], SUN: [130, 150, 220], AMB: [52, 56, 108], FOG: [58, 62, 120], FOG_HI: [44, 46, 96], disc: ['#dfe4ff', '#ffffff'], halo: 'rgba(200,210,255,0.35)', stars: 1 },
    gold: { sky: ['#3a2a6a', '#8a4f8c', '#f0897a', '#ffd08a'], SUN: [255, 214, 160], AMB: [118, 96, 140], FOG: [248, 176, 140], FOG_HI: [200, 150, 180], disc: ['#ffe0a0', '#fff6dc'], halo: 'rgba(255,220,160,0.6)', stars: 0.25 },
  };
  function drawValley(ctx, t, K, season, mode) {
    if (!TERR) buildValley();
    const M = MODES[mode], SUN_DIR = norm(mode === 'night' ? [-0.6, 0.5, 0.4] : [0.75, 0.55, 0.45]);
    const cam = makeCamYaw([K[0], K[1], K[2]], K[3], K[4], 1000, W, HH);
    const sky = ctx.createLinearGradient(0, 0, 0, HH * 0.42);
    M.sky.forEach((c, i) => sky.addColorStop(i / 3, c)); ctx.fillStyle = sky; ctx.fillRect(0, 0, W, HH);
    const R0 = H.rng(77);
    for (let i = 0; i < 160; i++) { const x = R0() * W, y = R0() * 560, a = (1 - y / 560) * R0() * M.stars; ctx.fillStyle = `rgba(255,240,255,${a})`; const s = R0() < 0.12 ? 3 : 2; ctx.fillRect(x, y, s, s); }
    const sp = cam.proj([cam.pos[0] + (mode === 'night' ? -60 : 40), cam.pos[1] + (mode === 'night' ? 150 : 40), cam.pos[2] + 400]);
    if (sp[2] > 0) facetDisc(ctx, sp[0], sp[1], mode === 'night' ? 58 : 66, M.disc[0], M.disc[1], M.halo);
    const out = [];
    for (const tri of TERR) {
      const [a, b, c] = tri.p;
      let n = norm(cross(sub(b, a), sub(c, a)));
      const cen = scl(add3(add3(a, b), c), 1 / 3);
      if (tri.terrain || tri.water) { if (n[1] < 0) n = scl(n, -1); }
      else if (tri.center) { if (dot(n, sub(cen, tri.center)) < 0) n = scl(n, -1); }
      const toCam = sub(cam.pos, cen);
      if (dot(n, toCam) <= 0) continue;
      const pa = cam.proj(a), pb = cam.proj(b), pc = cam.proj(c);
      if (pa[2] < 0.5 || pb[2] < 0.5 || pc[2] < 0.5) continue;
      const mnx = Math.min(pa[0], pb[0], pc[0]), mxx = Math.max(pa[0], pb[0], pc[0]), mny = Math.min(pa[1], pb[1], pc[1]), mxy = Math.max(pa[1], pb[1], pc[1]);
      if (mxx < -20 || mnx > W + 20 || mxy < -20 || mny > HH + 20) continue;
      const depth = (pa[2] + pb[2] + pc[2]) / 3;
      const base = tri.crown ? H.mix(tri.green, tri.fall, H.clamp(season * 1.25 - tri.lag * 0.25)) : tri.col;
      const lam = Math.max(0, dot(n, SUN_DIR));
      let kk = tri.crown ? 0.35 + 0.75 * lam : lam;
      if (tri.terrain && lam > 0) {
        const e2 = Math.max((pa[0] - pb[0]) ** 2 + (pa[1] - pb[1]) ** 2, (pb[0] - pc[0]) ** 2 + (pb[1] - pc[1]) ** 2, (pc[0] - pa[0]) ** 2 + (pc[1] - pa[1]) ** 2);
        const area2 = Math.abs((pb[0] - pa[0]) * (pc[1] - pa[1]) - (pc[0] - pa[0]) * (pb[1] - pa[1]));
        if (e2 > 3600) kk *= H.lerp(0.15, 1, H.smooth(0.06, 0.2, area2 / e2));
      }
      let col = [0, 1, 2].map(i => base[i] * (M.AMB[i] / 255 * 0.85 + M.SUN[i] / 255 * kk * 0.95));
      if (tri.water) {
        const v = norm(toCam), rf = sub(scl(n, 2 * dot(n, v)), v), spec = Math.pow(Math.max(0, dot(rf, norm([0.5, 0.2, 1]))), 12);
        col = H.mix(H.mix(mode === 'night' ? [40, 44, 100] : [120, 110, 190], mode === 'night' ? [90, 96, 160] : [250, 170, 165], H.clamp(0.45 + n[0] * 4 + n[2] * 2)), mode === 'night' ? [200, 210, 255] : [255, 236, 200], spec);
      }
      const fogK = H.clamp(Math.pow(H.smooth(40, 260, depth), 1.15) * 0.9);
      col = H.mix(col, H.mix(M.FOG, M.FOG_HI, H.clamp(cen[1] / 30)), fogK);
      out.push({ pa, pb, pc, depth, col });
    }
    out.sort((p, q) => q.depth - p.depth);
    ctx.lineJoin = 'round'; ctx.lineWidth = 0.9;
    for (const o of out) { const fs = `rgb(${o.col[0] | 0},${o.col[1] | 0},${o.col[2] | 0})`; ctx.fillStyle = fs; ctx.strokeStyle = fs; ctx.beginPath(); ctx.moveTo(o.pa[0], o.pa[1]); ctx.lineTo(o.pb[0], o.pb[1]); ctx.lineTo(o.pc[0], o.pc[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    return cam;
  }
  // camera path helper: keyframes [t, x, y, z, yaw, pitch]
  function camAt(KF, t) {
    let k = 0; while (k < KF.length - 2 && t > KF[k + 1][0]) k++;
    const A = KF[k], B = KF[k + 1], u = H.ease.inOut(H.clamp((t - A[0]) / (B[0] - A[0])));
    return [1, 2, 3, 4, 5].map((i) => H.lerp(A[i], B[i], u));
  }
  // the tree nearest a screen point for a fixed camera (picked once, cached)
  const PICK = {};
  function pickTree(key, K, sx, sy) {
    if (PICK[key] != null) return TREES[PICK[key]];
    const cam = makeCamYaw([K[0], K[1], K[2]], K[3], K[4], 1000, W, HH);
    let best = 0, bd = 1e18;
    TREES.forEach((tr, i) => { const p = cam.proj(tr.C); if (p[2] < 8) return; const d = (p[0] - sx) ** 2 + (p[1] - sy) ** 2; if (d < bd) { bd = d; best = i; } });
    PICK[key] = best; return TREES[best];
  }

  const KF_HOOK = [[0, 2, 44, -34, 0.0, 0.42], [2.6, 0, 30, -12, 0.04, 0.36], [6.2, -3, 20, 8, 0.08, 0.3]];
  const KF_NIGHT = [[CUT.night, 26, 16, 18, -0.32, 0.26], [CUT.leaf2 + 0.6, 21, 13, 28, -0.3, 0.24]];
  const KF_END = [[CUT.end, -4, 16, 14, 0.06, 0.26], [DURATION, 4, 46, -36, -0.02, 0.42]];

  function sceneHook(ctx, t) {
    const K = camAt(KF_HOOK, t);
    // season rewinds to summer on "the twist", the orange is hidden inside
    const season = 1 - EI(t, P(1, 'twist') - 0.1, P(2, 'orange') - 0.05);
    const cam = drawValley(ctx, t, K, season, 'dusk');
    fallingLeaves(ctx, t, 26, 1 - ph(t, 3.2, 3.9), 12);
    // pinned tree tag: "orange: hidden inside"
    if (t > P(2, 'orange') - 0.2) {
      const tr = pickTree('hook', camAt(KF_HOOK, 5.0), 560, 1180);
      const p = cam.proj([tr.C[0], tr.C[1] + tr.r * 1.3, tr.C[2]]);
      const k = win(t, P(2, 'orange') - 0.15, CUT.leaf1 - 0.2);
      // x-ray lens: the crown's orange facets glow through
      ctx.save(); ctx.globalAlpha = 0.85 * k; ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(p[0], p[1] + 60, 10, p[0], p[1] + 60, 170); g.addColorStop(0, 'rgba(255,150,60,0.75)'); g.addColorStop(1, 'rgba(255,150,60,0)');
      ctx.fillStyle = g; ctx.fillRect(p[0] - 200, p[1] - 140, 400, 400); ctx.restore();
      const a = [p[0] + 210, p[1] - 260], b = [p[0] + 30, p[1] - 30];
      lpArrow(ctx, a, [a[0] + 40, (a[1] + b[1]) / 2], b, EI(t, P(2, 'orange') - 0.15, P(2, 'orange') + 0.35) * (k > 0.02 ? 1 : 0), [255, 246, 240], 18);
      lpTag(ctx, Math.min(W - 230, Math.max(230, p[0] + 140)), a[1] - 50, 'orange: inside', { k, bg: CORAL, col: '#fff', font: FONT(56) });
    }
    lpTag(ctx, 540, 1420, 'ALL SUMMER', { k: win(t, P(2, 'summer') - 0.1, CUT.leaf1 - 0.25), font: FONT(64), bg: '#2a1f4f', col: '#fff' });
    lpTag(ctx, 540, 1250, 'the twist', { k: win(t, P(1, 'twist') - 0.1, P(2, 'orange') - 0.3), font: FONT(54) });
    hookTitle(ctx, t);
  }
  function hookTitle(ctx, t) {
    const sh = EI(t, 2.2, 2.9), a = EO(t, 0.15, 0.55);
    if (t > 2.95) return; // the header takes over
    ctx.save(); ctx.globalAlpha = a * (1 - sh); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    const lines = [['Why do leaves', P(0, 'why') - 0.1], ['turn orange?', P(0, 'turn') - 0.1]];
    lines.forEach(([s, t0], i) => {
      const k = BK(t, t0, 0.35); if (k <= 0) return;
      const size = 132, y = 560 + i * 158 - sh * 260;
      ctx.save(); ctx.translate(540, y); ctx.scale(k, k); ctx.font = FONT(size);
      ctx.fillStyle = 'rgba(30,20,60,0.45)'; ctx.fillText(s, 6, 6); ctx.fillStyle = i === 1 ? '#ffb08a' : '#ffffff'; ctx.fillText(s, 0, 0);
      ctx.restore();
    });
    const uw = 420 * EO(t, P(0, 'orange') - 0.1, P(0, 'orange') + 0.3), uy = 560 + 158 + 34 - sh * 260;
    ctx.fillStyle = CORAL; ctx.beginPath(); ctx.moveTo(540 - uw / 2, uy); ctx.lineTo(540 + uw * 0.28, uy); ctx.lineTo(540 + uw * 0.22, uy + 16); ctx.lineTo(540 - uw / 2, uy + 16); ctx.fill();
    ctx.fillStyle = '#ffb08a'; ctx.beginPath(); ctx.moveTo(540 + uw * 0.28, uy); ctx.lineTo(540 + uw / 2, uy); ctx.lineTo(540 + uw * 0.44, uy + 16); ctx.lineTo(540 + uw * 0.22, uy + 16); ctx.fill();
    ctx.restore();
  }
  function header(ctx, t) {
    const k = EO(t, 2.75, 3.15); if (k <= 0 || t > CUT.end + WIPE) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 214, 'WHY LEAVES TURN ORANGE', { font: FONT(46), bg: '#2a1f4f', col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }

  function sceneNight(ctx, t) {
    const K = camAt(KF_NIGHT, t);
    const cam = drawValley(ctx, t, K, 0.08 + 0.12 * ph(t, 20.7, 22.5), 'night');
    // day/night dial: 24 faceted segments, the night share grows
    const cx = 540, cy = 640, R = 190, nightN = H.lerp(10, 14, EI(t, P(8, 'nights') - 0.1, P(8, 'longer') + 0.3));
    const kd = BK(t, CUT.night + 0.3, 0.4);
    if (kd > 0) {
      ctx.save(); ctx.translate(cx, cy); ctx.scale(kd, kd);
      for (let i = 0; i < 24; i++) {
        const a0 = -Math.PI / 2 + i / 24 * Math.PI * 2, a1 = a0 + Math.PI * 2 / 24;
        const fill = H.clamp(nightN - (i < 12 ? 11 - i : i - 12) * 2 * 0 - (24 - nightN) * 0); void fill;
        // night segments are centred on the bottom (midnight), days on top
        const d = Math.min(Math.abs(i + 0.5 - 12), 24 - Math.abs(i + 0.5 - 12));
        const isNight = d < nightN / 2;
        const c = isNight ? H.mix([40, 46, 110], [70, 78, 150], (i % 2) * 0.5) : H.mix([255, 196, 110], [255, 226, 160], (i % 2) * 0.6);
        ctx.fillStyle = H.rgba(c); ctx.strokeStyle = 'rgba(20,14,50,0.6)'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(Math.cos(a0) * R * 0.45, Math.sin(a0) * R * 0.45); ctx.lineTo(Math.cos(a0) * R, Math.sin(a0) * R); ctx.lineTo(Math.cos(a1) * R, Math.sin(a1) * R); ctx.lineTo(Math.cos(a1) * R * 0.45, Math.sin(a1) * R * 0.45); ctx.closePath(); ctx.fill(); ctx.stroke();
      }
      facetDisc(ctx, 0, 0, R * 0.45, '#141a44', '#2a1f4f');
      ctx.restore();
      facetDisc(ctx, cx + 10, cy - 8, 52 * kd, '#dfe4ff', '#ffffff');
    }
    lpTag(ctx, 540, 900, 'LONGER NIGHTS', { k: win(t, P(8, 'nights') - 0.1, CUT.leaf2 - 0.3), font: FONT(64), bg: '#dfe4ff' });
    // the tree that shuts its leaves down
    if (t > P(9, 'tree') - 0.2) {
      const tr = pickTree('night', camAt(KF_NIGHT, 21.4), 640, 1380);
      const p = cam.proj([tr.C[0], tr.C[1] + tr.r * 1.2, tr.C[2]]);
      const k = win(t, P(9, 'tree') - 0.15, CUT.leaf2 - 0.3);
      ctx.save(); ctx.globalAlpha = k * (0.4 + 0.3 * Math.sin(t * 9)); ctx.strokeStyle = '#ffb08a'; ctx.lineWidth = 6; ctx.beginPath();
      const rr = cam.f * tr.r / p[2] * 1.9; for (let i = 0; i <= 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(p[0] + Math.cos(a) * rr, p[1] + 50 + Math.sin(a) * rr); } ctx.stroke(); ctx.restore();
      lpTag(ctx, Math.min(W - 250, Math.max(250, p[0])), Math.max(1080, p[1] - rr - 70), 'shutdown', { k: BK(t, P(9, 'shuts') - 0.1) * (1 - ph(t, CUT.leaf2 - 0.3, CUT.leaf2)), bg: CORAL, col: '#fff', font: FONT(58) });
    }
  }
  function sceneEnd(ctx, t) {
    const K = camAt(KF_END, t);
    drawValley(ctx, t, K, 1, 'gold');
    fallingLeaves(ctx, t, 34, EO(t, CUT.end, CUT.end + 0.6), 21, 0.4);
    const k1 = win(t, P(21, 'paint') - 0.15, P(22, 'peels') - 0.3);
    lpTag(ctx, 500, 640, 'paint', { k: k1, font: FONT(76), bg: '#fff6f0' });
    hexBadge(ctx, 720, 600, k1, false, 50);
    const k2 = win(t, P(22, 'peels') - 0.1, 99);
    lpTag(ctx, 540, 640, 'green peels away', { k: k2, font: FONT(76), bg: CORAL, col: '#fff', h: 132 });
    lpTag(ctx, 540, 1450, 'Brightest tree near you?', { k: win(t, P(23, 'which') - 0.1, 99), font: FONT(56), bg: '#2a1f4f', col: '#fff' });
  }

  // =================== LEAF STUDIO ===================
  const LEAF_L = 10, LEAF_Y = 4.7; // leaf hangs from its stem: base at y=LEAF_Y, tip at LEAF_Y-L
  let LEAF = null;
  function buildLeaf() {
    const N = 11, cols = [0, 0.5, 1], r = H.rng(404), rows = [];
    const wv = (v) => 0.35 * LEAF_L * Math.pow(Math.sin(Math.PI * Math.pow(v, 0.68)), 0.9);
    for (let i = 0; i <= N; i++) {
      const v = i / N, w = wv(v), row = { L: [], R: [] };
      for (const side of [-1, 1]) for (let k = 0; k < 3; k++) {
        const ser = k === 2 ? 1 + (i % 2 ? 0.07 : -0.05) : 1, jx = k === 1 ? r.range(-0.07, 0.07) : 0, jy = k === 0 ? 0 : r.range(-0.03, 0.03) * (i > 0 && i < N ? 1 : 0);
        const x = side * (cols[k] + jx) * w * ser, vy = H.clamp(v + jy + (k === 2 ? 0.02 : 0) * (i > 0 && i < N ? 1 : 0));
        const p = [x, LEAF_Y - vy * LEAF_L, -Math.abs(x) * 0.24 + nz.n2(x * 0.5, vy * 6) * 0.15];
        (side < 0 ? row.L : row.R).push(p);
      }
      rows.push(row);
    }
    const facets = [];
    for (let i = 0; i < N; i++) for (const s of ['L', 'R']) for (let k = 0; k < 2; k++) {
      const a = rows[i][s][k], b = rows[i][s][k + 1], c = rows[i + 1][s][k], d = rows[i + 1][s][k + 1];
      for (const f of [[a, b, d], [a, d, c]]) {
        const area = Math.abs(cross(sub(f[1], f[0]), sub(f[2], f[0]))[2]); if (area < 0.01) continue;
        const cen = scl(add3(add3(f[0], f[1]), f[2]), 1 / 3), rnd = r();
        const edge = k + (f[0] === a && f[1] === b ? 0.5 : 0); // 0 midrib .. 1.5 edge
        facets.push({ p: f, cen, rnd, edge, row: i,
          green: H.mix([62, 150, 76], [118, 186, 74], r() * 0.8),
          orange: H.mix([250, 198, 56], [244, 128, 36], H.clamp(r() * 0.8 + edge * 0.25)),
          red: H.mix([214, 48, 46], [184, 36, 70], r()),
          redT: rnd < 0.5 + 0.2 * edge / 1.5 ? r.range(0, 0.6) + (1.5 - edge) * 0.25 : null,
          breakT: (1.5 - edge) * 0.42 + Math.abs(i - N * 0.6) * 0.04 + rnd * 0.35 });
      }
    }
    LEAF = { facets, N };
  }
  // studio backdrop: a cached faceted mosaic (jittered triangle grid with a vertical gradient)
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
          col = H.mix(col, [255, 236, 210], gl * 0.35);
          col = col.map((v) => v * (0.93 + r() * 0.12));
          g.fillStyle = H.rgba(col); g.strokeStyle = g.fillStyle; g.lineWidth = 1;
          g.beginPath(); g.moveTo(f[0][0], f[0][1]); g.lineTo(f[1][0], f[1][1]); g.lineTo(f[2][0], f[2][1]); g.closePath(); g.fill(); g.stroke();
        }
      }
      BG[key] = c;
    }
    ctx.drawImage(BG[key], 0, 0);
  }
  // branch + stem (2D two-tone faceted ribbons)
  function branch(ctx) {
    const pts = [[-20, 300], [260, 330], [520, 352], [720, 344], [860, 320]];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], w0 = H.lerp(46, 18, i / 4), w1 = H.lerp(46, 18, (i + 1) / 4);
      ctx.fillStyle = '#8a5a4e'; ctx.beginPath(); ctx.moveTo(a[0], a[1] - w0 / 2); ctx.lineTo(b[0], b[1] - w1 / 2); ctx.lineTo(b[0], b[1]); ctx.lineTo(a[0], a[1]); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#5e3a3a'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(b[0], b[1] + w1 / 2); ctx.lineTo(a[0], a[1] + w0 / 2); ctx.closePath(); ctx.fill();
    }
  }
  const LCAM = makeCamYaw([0, 0, -16], 0, 0, 1600, W, HH); // leaf studio camera (orthographic-ish telephoto)
  const STEM_TOP = [540, 350];
  // xf: { ox, oy, s, yaw, roll } applied about the stem point
  function leafXf(p, xf) {
    let x = p[0], y = p[1] - LEAF_Y, z = p[2];
    const cy = Math.cos(xf.yaw), sy = Math.sin(xf.yaw); [x, z] = [x * cy - z * sy, x * sy + z * cy];
    const cp = Math.cos(xf.pitch || 0), sp = Math.sin(xf.pitch || 0); [y, z] = [y * cp - z * sp, y * sp + z * cp];
    const cr = Math.cos(xf.roll || 0), sr = Math.sin(xf.roll || 0); [x, y] = [x * cr - y * sr, x * sr + y * cr];
    return [x * xf.s + xf.ox, y * xf.s + LEAF_Y + xf.oy, z * xf.s];
  }
  const LSUN = norm([-0.5, 0.55, -0.7]), LAMB = [120, 112, 150], LSUNC = [255, 236, 210];
  // draw one leaf layer. colFn(facet) -> [rgb, alpha, shrink(0..1), offset[2]] or null to skip
  function drawLeafLayer(ctx, xf, colFn) {
    const out = [];
    for (const f of LEAF.facets) {
      const st = colFn(f); if (!st) continue;
      const [base, alpha, shrink, off] = st;
      const v = f.p.map((p) => leafXf(p, xf));
      let n = norm(cross(sub(v[1], v[0]), sub(v[2], v[0]))); if (n[2] > 0) n = scl(n, -1);
      const lam = Math.max(0, dot(n, LSUN));
      let col = [0, 1, 2].map((i) => base[i] * (LAMB[i] / 255 * 0.62 + LSUNC[i] / 255 * (0.25 + 0.8 * lam)));
      let pp = v.map((p) => LCAM.proj(p));
      if (shrink > 0 || off) {
        const mx = (pp[0][0] + pp[1][0] + pp[2][0]) / 3, my = (pp[0][1] + pp[1][1] + pp[2][1]) / 3;
        pp = pp.map((p) => [mx + (p[0] - mx) * (1 - shrink) + (off ? off[0] - mx : 0), my + (p[1] - my) * (1 - shrink) + (off ? off[1] - my : 0), p[2]]);
      }
      out.push({ pp, col, alpha, d: (pp[0][2] + pp[1][2] + pp[2][2]) / 3 });
    }
    out.sort((a, b) => b.d - a.d);
    ctx.lineJoin = 'round';
    for (const o of out) {
      ctx.globalAlpha = o.alpha; const fs = `rgb(${o.col[0] | 0},${o.col[1] | 0},${o.col[2] | 0})`;
      ctx.fillStyle = fs; ctx.strokeStyle = `rgb(${Math.min(255, o.col[0] * 1.12 + 8) | 0},${Math.min(255, o.col[1] * 1.12 + 8) | 0},${Math.min(255, o.col[2] * 1.12 + 8) | 0})`; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(o.pp[0][0], o.pp[0][1]); ctx.lineTo(o.pp[1][0], o.pp[1][1]); ctx.lineTo(o.pp[2][0], o.pp[2][1]); ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  const scr = (p, xf) => LCAM.proj(leafXf(p, xf));
  function stem(ctx, xf, cut) {
    const a = STEM_TOP, b = scr([0, LEAF_Y, 0], xf);
    if (cut) { // stub stays on the branch
      const m = [a[0], a[1] + 40]; ribbon(ctx, a, m, 20, [120, 150, 70]); return;
    }
    ribbon(ctx, a, b, 20, [120, 150, 70]);
  }
  function ribbon(ctx, a, b, w, c) {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L * w / 2, ny = dx / L * w / 2;
    ctx.fillStyle = H.rgba(H.mix(c, [255, 255, 255], 0.2)); ctx.beginPath(); ctx.moveTo(a[0] + nx, a[1] + ny); ctx.lineTo(b[0] + nx, b[1] + ny); ctx.lineTo(b[0], b[1]); ctx.lineTo(a[0], a[1]); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(c, [40, 20, 70], 0.25)); ctx.beginPath(); ctx.moveTo(a[0] - nx, a[1] - ny); ctx.lineTo(b[0] - nx, b[1] - ny); ctx.lineTo(b[0], b[1]); ctx.lineTo(a[0], a[1]); ctx.closePath(); ctx.fill();
  }
  // faceted sugar crystal (2D gem)
  function crystal(ctx, x, y, r, c) {
    const cols = [H.mix(c, [255, 255, 255], 0.45), H.mix(c, [255, 255, 255], 0.15), c, H.mix(c, [60, 30, 70], 0.25), H.mix(c, [60, 30, 70], 0.4), H.mix(c, [255, 255, 255], 0.3)];
    for (let i = 0; i < 6; i++) { const a0 = i / 6 * Math.PI * 2 - Math.PI / 2, a1 = a0 + Math.PI / 3; ctx.fillStyle = H.rgba(cols[i]); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a0) * r, y + Math.sin(a0) * r); ctx.lineTo(x + Math.cos(a1) * r, y + Math.sin(a1) * r); ctx.closePath(); ctx.fill(); }
  }

  function sceneLeaf1(ctx, t) {
    if (!LEAF) buildLeaf();
    backdrop(ctx, 'summer', [96, 170, 200], [190, 226, 196], [240, 420]);
    // sun + sunlight ribbon
    const ks = BK(t, P(4, 'sunlight') - 0.15, 0.35);
    facetDisc(ctx, 170, 470, 70 * Math.max(0.01, ks), '#ffd49a', '#fff4d8', ks > 0.05 ? 'rgba(255,230,170,0.55)' : null);
    branch(ctx);
    // split into two pigment layers (green slides left, orange slides out from behind to the right), then merge back
    const sp = EI(t, P(5, 'holding'), P(5, 'yellow') - 0.05) * (1 - EI(t, P(7, 'green'), P(7, 'drowns') + 0.4));
    const sway = 0.22 * Math.sin(t * 0.7) * (1 - sp);
    const xfG = { ox: -2.75 * sp, oy: 0.9 * sp, s: 1 - 0.4 * sp, yaw: sway, pitch: 0.05, roll: 0 };
    const xfO = { ox: 2.75 * sp, oy: 0.9 * sp, s: 1 - 0.4 * sp, yaw: -0.15 * sp + sway, pitch: 0.05, roll: 0 };
    if (sp < 0.02) stem(ctx, xfG);
    if (sp > 0.001) {
      drawLeafLayer(ctx, xfO, (f) => [f.orange, 1, 0, null]);
    }
    drawLeafLayer(ctx, xfG, (f) => [f.green, 1, 0, null]);
    // sunlight -> leaf, and sugar
    if (t > P(4, 'sunlight') - 0.2 && t < P(5, 'holding') + 0.2) {
      const kf = 1 - ph(t, P(5, 'but'), P(5, 'holding'));
      ctx.save(); ctx.globalAlpha = kf;
      const c = scr([0, LEAF_Y - 4.2, 0], xfG);
      lpArrow(ctx, [230, 540], [300, c[1] - 260], [c[0] - 70, c[1] - 60], EI(t, P(4, 'sunlight') - 0.15, P(4, 'sunlight') + 0.45), [255, 220, 140], 22);
      lpTag(ctx, 250, 640, 'sunlight', { k: BK(t, P(4, 'sunlight') - 0.1), font: FONT(50) });
      const kc = BK(t, P(4, 'sugar') - 0.15, 0.35);
      [[-1.4, -5.4], [1.3, -6.2], [0.2, -7.4], [-0.9, -3.4], [1.6, -4.3]].forEach(([x, y], i) => { const q = scr([x, LEAF_Y + y + 4.7 - 4.7, -0.5], xfG); crystal(ctx, q[0], q[1], 34 * BK(t, P(4, 'sugar') - 0.15 + i * 0.06, 0.35), [255, 236, 190]); });
      lpTag(ctx, 540, 1520, 'SUGAR', { k: kc, font: FONT(72), bg: '#fff6f0' });
      ctx.restore();
    }
    // labels
    {
      const g = scr([0, LEAF_Y - LEAF_L - 0.2, 0], xfG);
      const k0 = BK(t, P(3, 'chlorophyll') - 0.15) * (1 - ph(t, P(4, 'sunlight') - 0.3, P(4, 'sunlight'))) + (t > P(5, 'yellow') ? BK(t, P(5, 'yellow') - 0.1) * (1 - ph(t, P(7, 'green'), P(7, 'green') + 0.3)) : 0);
      lpTag(ctx, H.clamp(g[0], 250, 830), Math.min(1560, g[1] + 70), 'chlorophyll', { k: Math.min(1, k0), font: FONT(sp > 0.5 ? 46 : 60), bg: '#3c9a5a', col: '#fff' });
      if (sp > 0.02) {
        const o = scr([0, LEAF_Y - LEAF_L - 0.2, 0], xfO);
        lpTag(ctx, Math.min(830, o[0]), o[1] + 70, 'yellow + orange', { k: BK(t, P(5, 'yellow') - 0.15) * (1 - ph(t, P(6, 'carotenoids') - 0.3, P(6, 'carotenoids') - 0.1)), font: FONT(46), bg: '#ffb43c' });
        lpTag(ctx, Math.min(830, o[0]), o[1] + 70, 'carotenoids', { k: BK(t, P(6, 'carotenoids') - 0.15) * (1 - ph(t, P(7, 'green'), P(7, 'green') + 0.3)), font: FONT(50), bg: CORAL, col: '#fff' });
      }
      if (t > P(7, 'them') - 0.2) lpTag(ctx, 540, 1560, 'orange hidden', { k: BK(t, P(7, 'them') - 0.15) * (1 - ph(t, CUT.night - 0.2, CUT.night)), font: FONT(58), bg: '#2a1f4f', col: '#fff' });
      lpTag(ctx, 540, 400 + 0 * t, 'leaf', { k: 0 });
    }
  }

  // second studio visit: shutdown -> breakdown -> nitrogen -> orange -> reds -> seal -> fall
  const STEM_PT = [540, 470];
  function sceneLeaf2(ctx, t) {
    if (!LEAF) buildLeaf();
    backdrop(ctx, 'dusk', [64, 52, 120], [236, 160, 150], [800, 1500]);
    const zoom = 1 + 0.7 * EI(t, P(19, 'right'), P(19, 'corklike') - 0.1) * (1 - EI(t, P(20, 'and') - 0.2, P(20, 'leaf') + 0.1));
    ctx.save(); ctx.translate(540, 420); ctx.scale(zoom, zoom); ctx.translate(-540, -420);
    branch(ctx);
    const fallT = P(20, 'leaf') - 0.1, fu = Math.max(0, t - fallT);
    const xf = { ox: Math.sin(fu * 2.2) * 2.2 * H.clamp(fu), oy: -fu * fu * 5.2, s: 1, yaw: 0.2 * Math.sin(t * 0.7) + fu * 2.4, pitch: 0.05 + fu * 0.4, roll: Math.sin(fu * 2.2) * 0.5 };
    stem(ctx, xf, fu > 0);
    // the leaf
    const tOld = P(10, 'stops'), tBreak = P(11, 'breaks') - 0.1, tRed = P(18, 'red') - 0.4;
    const dull = EI(t, tOld, P(10, 'chlorophyll') + 0.5);
    drawLeafLayer(ctx, xf, (f) => {
      let c = f.orange;
      if (f.redT != null) c = H.mix(c, f.red, EO(t, tRed + f.redT, tRed + f.redT + 0.5));
      return [c, 1, 0, null];
    });
    // green layer: dulls, then breaks apart into shards that fly up the stem into the tree
    const stemB = scr([0, LEAF_Y, 0], xf);
    drawLeafLayer(ctx, xf, (f) => {
      const b0 = tBreak + f.breakT, pb = ph(t, b0, b0 + 1.15);
      if (pb >= 1) return null;
      let c = H.mix(f.green, [150, 150, 70], dull * 0.55);
      if (pb <= 0) return [c, 1, 0, null];
      const e = H.ease.inOut(pb), cp = LCAM.proj(leafXf(f.cen, xf));
      const tx = H.lerp(cp[0], STEM_TOP[0], e) + Math.sin(pb * Math.PI) * (cp[0] - 540) * 0.5, ty = H.lerp(cp[1], STEM_TOP[1], e * e);
      c = H.mix(c, [120, 230, 210], pb);
      return [c, 1 - ph(pb, 0.75, 1), 0.25 + 0.55 * e, [tx, ty]];
    });
    // seal: a faceted cork ring at the stem base
    const ksl = EO(t, P(19, 'corklike') - 0.1, P(19, 'seal') + 0.2);
    if (ksl > 0) {
      const sp = fu > 0 ? [STEM_TOP[0], STEM_TOP[1] + 40] : scr([0, LEAF_Y + 0.6, 0], xf);
      const sx = STEM_TOP[0], sy = STEM_TOP[1] + 40;
      for (let i = 0; i < 6; i++) { const w = 58 * ksl, h = 34; const a = i / 6; ctx.fillStyle = H.rgba(H.mix([196, 140, 90], [120, 78, 54], (i % 3) / 2)); ctx.beginPath(); ctx.moveTo(sx - w / 2 + a * w, sy - h / 2); ctx.lineTo(sx - w / 2 + (a + 1 / 6) * w, sy - h / 2); ctx.lineTo(sx - w / 2 + (a + 1 / 6) * w + (i % 2 ? 4 : -4), sy + h / 2); ctx.lineTo(sx - w / 2 + a * w, sy + h / 2); ctx.closePath(); ctx.fill(); }
      void sp;
    }
    // nitrogen tags + number
    const kS = BK(t, P(10, 'stops') - 0.15) * (1 - ph(t, P(11, 'breaks') - 0.2, P(11, 'breaks')));
    lpTag(ctx, 470, 1560, 'chlorophyll', { k: kS, font: FONT(58), bg: '#3c9a5a', col: '#fff' });
    hexBadge(ctx, 760, 1540, kS, false, 48);
    lpTag(ctx, 540, 1560, 'green breaks apart', { k: win(t, P(11, 'breaks') - 0.1, P(12, 'scientists') - 0.3), font: FONT(54) });
    const kN = win(t, P(12, 'half') - 0.15, P(14, 'with') - 0.3);
    if (kN > 0) {
      const pop = t > P(12, 'half') && t < P(12, 'half') + 0.35 ? 1 + 0.18 * Math.sin(ph(t, P(12, 'half'), P(12, 'half') + 0.35) * Math.PI) : 1;
      lpTag(ctx, 540, 930, '~50%', { k: kN * pop, font: FONT(170), h: 230, bg: '#fff6f0' });
      lpTag(ctx, 540, 1110, 'of its nitrogen', { k: win(t, P(12, 'nitrogen') - 0.15, P(14, 'with') - 0.3), font: FONT(56), bg: '#2a1f4f', col: '#fff' });
      lpTag(ctx, 540, 1230, 'saved for spring', { k: win(t, P(13, 'saving') - 0.1, P(14, 'with') - 0.3), font: FONT(54), bg: '#3ccf9a', col: '#fff' });
    }
    const pArr = EI(t, P(12, 'pulls') - 0.1, P(12, 'back') + 0.3) * (1 - ph(t, P(12, 'half') - 0.3, P(12, 'half')));
    if (pArr > 0) lpArrow(ctx, [540, 720], [660, 560], [STEM_TOP[0] + 30, STEM_TOP[1] + 60], pArr, [120, 230, 210], 22);
    // hidden orange shows through
    const kO = win(t, P(15, 'hidden') - 0.15, P(16, 'and') - 0.2);
    lpTag(ctx, 540, 1560, 'there all along', { k: kO, font: FONT(60), bg: CORAL, col: '#fff' });
    if (t > P(15, 'orange') - 0.1 && t < P(15, 'orange') + 1.0) { // sparkle ring
      const u = ph(t, P(15, 'orange') - 0.1, P(15, 'orange') + 1.0); ctx.save(); ctx.globalAlpha = 1 - u; ctx.strokeStyle = '#fff6dc'; ctx.lineWidth = 6; ctx.beginPath();
      const rr = 380 + 220 * u; for (let i = 0; i <= 8; i++) { const a = i / 8 * Math.PI * 2; ctx.lineTo(540 + Math.cos(a) * rr * 0.75, 960 + Math.sin(a) * rr); } ctx.stroke(); ctx.restore();
    }
    // reds: brand new
    const kR = win(t, P(16, 'reds') - 0.15, P(18, 'trapped') - 0.2);
    lpTag(ctx, 540, 1560, 'and the reds?', { k: kR, font: FONT(62), bg: '#d8403a', col: '#fff' });
    const kNew = win(t, P(17, 'brand') - 0.15, P(18, 'trapped') - 0.2);
    lpTag(ctx, 820, 760, 'NEW', { k: kNew, font: FONT(72), bg: '#3ccf9a', col: '#fff' });
    // trapped sugars -> red pigment
    if (t > P(18, 'sugars') - 0.3 && t < P(19, 'right') + 0.3) {
      const kk = 1 - ph(t, P(19, 'right'), P(19, 'right') + 0.3);
      LEAF.facets.filter((f) => f.redT != null && f.rnd < 0.18).forEach((f, i) => {
        const q = LCAM.proj(leafXf(f.cen, xf)), k = BK(t, P(18, 'sugars') - 0.15 + i * 0.04, 0.3) * kk;
        crystal(ctx, q[0], q[1], 26 * k, H.mix([255, 236, 190], [220, 50, 50], EO(t, P(18, 'red') - 0.15, P(18, 'red') + 0.3)));
      });
      lpTag(ctx, 540, 1560, 'sugar → red', { k: BK(t, P(18, 'sugars') - 0.15) * kk, font: FONT(62), bg: '#fff6f0' });
    }
    ctx.restore();
    // seal label (outside the zoom so it stays readable)
    lpTag(ctx, 800, 470, 'cork seal', { k: win(t, P(19, 'seal') - 0.15, P(20, 'leaf') - 0.1), font: FONT(64), bg: '#8a5a4e', col: '#fff' });
    lpTag(ctx, 540, 1460, 'lets go', { k: win(t, P(20, 'lets') - 0.1, CUT.end - 0.1), font: FONT(64), bg: '#fff6f0' });
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
    if (t < CUT.leaf1) sceneHook(ctx, t);
    else if (t < CUT.night) sceneLeaf1(ctx, t);
    else if (t < CUT.leaf2) sceneNight(ctx, t);
    else if (t < CUT.end) sceneLeaf2(ctx, t);
    else sceneEnd(ctx, t);
  }
  function explainer(ctx, W_, H_, t) {
    ctx.save(); ctx.lineJoin = 'round';
    // during a wipe, the old scene stays underneath and the new one flips in facet by facet (top to bottom)
    let wipe = null;
    for (const c of [CUT.leaf1, CUT.night, CUT.leaf2, CUT.end]) if (t >= c && t < c + WIPE) wipe = c;
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
      for (const [f, a] of flashes) { ctx.fillStyle = `rgba(255,236,226,${a * 0.7})`; ctx.beginPath(); ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath(); ctx.fill(); }
    } else scene(ctx, t);
    header(ctx, t);
    ctx.restore();
  }

  // a still for the thumbnail: the half-orange leaf with 3 huge words
  function thumbnail(ctx, W_, H_) {
    if (!LEAF) buildLeaf();
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    backdrop(ctx, 'dusk', [64, 52, 120], [236, 160, 150], [800, 1500]); branch(ctx);
    const xf = { ox: 0, oy: -0.6, s: 1, yaw: 0.25, pitch: 0.05, roll: 0 };
    stem(ctx, xf);
    drawLeafLayer(ctx, xf, (f) => [f.redT != null && f.rnd < 0.3 ? f.red : f.orange, 1, 0, null]);
    drawLeafLayer(ctx, xf, (f) => (f.cen[0] < -0.4 ? [f.green, 1, 0, null] : null));
    lpTag(ctx, 540, 1350, 'HIDING', { font: FONT(150), h: 210, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 1560, 'ALL SUMMER', { font: FONT(110), h: 170, bg: '#2a1f4f', col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, soft gusts, paper-dry leaf ticks ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const gust = (t0, t1, g = 1) => { const d = t1 - t0, steps = [260, 420, 610, 470, 300]; steps.forEach((f, i) => { const s = t0 + (d * i) / steps.length, dd = (d / steps.length) * 1.9; k.noise(s, { dur: dd, color: 'pink', filter: 'bandpass', f: [[0, f], [dd, f * 1.25]], q: 1.4, gain: 0.04 * g * Math.sin(((i + 0.5) / steps.length) * Math.PI), a: dd * 0.45, verb: 0.15 }); }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2600 + i * 180, gain: 0.5 }); }); gust(t - 0.1, t + 0.6, 1.2); };
    const leafTick = (t, g = 1) => k.play('paper', t, { dur: 0.12, gain: 0.5 * g, minor: true });
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    // hook
    glass(0.2, 'A4', 1.1, 0, 1.4); glass(0.2, 'D4', 0.8, 0, 1.4);
    facet(P(0, 'turn') - 0.05, 520, 0.9);
    glass(P(0, 'orange'), 'F#5', 0.8, 0.2, 1.0);
    gust(0.4, 3.0, 1);
    for (let i = 0; i < 8; i++) leafTick(0.4 + i * 0.37, 0.7);
    facet(2.8, 470, 0.9); // header snaps
    // rewind to summer
    k.play('riser', P(1, 'twist') - 0.1, { dur: 0.9, gain: 0.7 });
    k.play('swish', P(1, 'twist') - 0.1, { gain: 0.8 });
    facet(P(1, 'twist') - 0.1, 600, 0.8, 0, true);
    glass(P(2, 'orange') - 0.1, 'C#5', 1, 0.2); facet(P(2, 'orange') - 0.1, 560, 0.9, 0.2);
    facet(P(2, 'summer') - 0.1, 480, 1);
    // leaf studio 1
    wipe(CUT.leaf1);
    facet(P(3, 'chlorophyll') - 0.15, 520, 1, 0.1); glass(P(3, 'green'), 'E5', 0.6);
    k.play('riser', P(4, 'sunlight') - 0.5, { dur: 0.5, gain: 0.5 }); glass(P(4, 'sunlight') - 0.1, 'A5', 0.9, -0.5); facet(P(4, 'sunlight') - 0.1, 600, 0.8, -0.5, true);
    for (let i = 0; i < 5; i++) glass(P(4, 'sugar') - 0.15 + i * 0.06, ['D6', 'F#6', 'A5', 'E6', 'B5'][i], 0.4, (i - 2) * 0.2, 0.5, true);
    facet(P(4, 'sugar') - 0.1, 500, 1);
    k.play('whoosh', P(5, 'holding') - 0.05, { dur: 0.7, gain: 0.8 }); // layers split
    glass(P(5, 'yellow') - 0.1, 'D5', 1, 0.4); facet(P(5, 'yellow') - 0.1, 560, 0.9, 0.4);
    facet(P(6, 'carotenoids') - 0.1, 620, 1, 0.4); glass(P(6, 'carotenoids'), 'A5', 0.8, 0.4);
    k.play('whoosh', P(7, 'green'), { dur: 0.7, gain: 0.7 }); // merge back
    k.play('thud', P(7, 'drowns') + 0.3, { f: 120, gain: 0.45 });
    facet(P(7, 'them') - 0.1, 460, 1);
    // night
    wipe(CUT.night);
    facet(CUT.night + 0.3, 400, 0.8);
    for (let i = 0; i < 4; i++) k.play('tock', P(8, 'nights') + i * 0.2, { f: 300 - i * 20, gain: 0.5, minor: true });
    facet(P(8, 'nights') - 0.1, 520, 1); glass(P(8, 'longer'), 'F#4', 0.9, 0, 1.2);
    facet(P(9, 'shuts') - 0.1, 600, 1, 0.3); k.tone(P(9, 'shuts'), { f: [[0, 440], [0.7, 110]], type: 'triangle', dur: 0.8, gain: 0.1 });
    // leaf studio 2
    wipe(CUT.leaf2);
    facet(P(10, 'stops') - 0.15, 560, 1, -0.1); k.play('error', P(10, 'stops'), { f: 'G3', gain: 0.6, pan: 0.3 });
    // shards break off and fly up the stem
    for (let i = 0; i < 18; i++) { const t = P(11, 'breaks') - 0.1 + i * 0.08; glass(t, ['D6', 'A5', 'F#5', 'E6', 'B5', 'D5'][i % 6], 0.35, Math.sin(i * 1.7) * 0.5, 0.35, true); }
    k.play('whoosh', P(11, 'breaks'), { dur: 1.2, gain: 0.8, top: 3200 });
    facet(P(11, 'breaks') - 0.1, 520, 0.9);
    k.play('riser', P(12, 'pulls') - 0.1, { dur: 0.8, gain: 0.6 });
    k.play('impact', P(12, 'half') - 0.05, { gain: 1.0 }); ['D4', 'A4', 'D5', 'F#5'].forEach((n, i) => glass(P(12, 'half') - 0.05 + i * 0.03, n, 1.5 - i * 0.25, (i - 1.5) * 0.25, 1.5));
    facet(P(12, 'nitrogen') - 0.1, 560, 0.9); facet(P(13, 'saving') - 0.1, 500, 0.9); k.play('success', P(13, 'spring'), { f: 'D5', gain: 0.4 });
    k.play('sparkle', P(15, 'orange') - 0.1, { n: 8, gain: 1.2 }); facet(P(15, 'hidden') - 0.1, 620, 1); glass(P(15, 'orange'), 'A5', 1.1, 0, 1.3);
    facet(P(16, 'reds') - 0.1, 480, 1); facet(P(17, 'brand') - 0.1, 660, 1, 0.5); glass(P(17, 'brand'), 'E6', 0.8, 0.5);
    for (let i = 0; i < 8; i++) glass(P(18, 'sugars') - 0.15 + i * 0.04, ['C6', 'E6', 'G5', 'D6'][i % 4], 0.35, (i - 4) * 0.12, 0.4, true);
    facet(P(18, 'sugars') - 0.1, 540, 0.9);
    glass(P(18, 'red') - 0.1, 'C#5', 1, 0); k.play('riser', P(18, 'red') - 0.5, { dur: 0.6, gain: 0.5 });
    k.play('whoosh', P(19, 'right'), { dur: 0.7, gain: 0.6 }); // zoom to the stem
    k.play('press', P(19, 'seal') - 0.1, { gain: 0.8 }); facet(P(19, 'seal') - 0.1, 400, 1);
    k.play('stamp', P(20, 'leaf') - 0.1, { gain: 0.5 }); // snap
    k.play('paper', P(20, 'leaf'), { dur: 1.0, gain: 0.8 }); k.play('whoosh', P(20, 'lets'), { dur: 0.9, gain: 0.6 }); facet(P(20, 'lets') - 0.1, 520, 0.9);
    // end
    wipe(CUT.end);
    gust(CUT.end + 0.3, D, 1.1);
    for (let i = 0; i < 12; i++) leafTick(CUT.end + 0.5 + i * 0.6, 0.6);
    facet(P(21, 'paint') - 0.15, 520, 1); k.play('error', P(21, 'paint') - 0.1, { f: 'A3', gain: 0.5 });
    k.play('impact', P(22, 'peels') - 0.1, { gain: 0.9 }); ['A4', 'D5', 'F#5'].forEach((n, i) => glass(P(22, 'peels') - 0.1 + i * 0.05, n, 1.3, (i - 1) * 0.3, 1.4));
    facet(P(23, 'which') - 0.1, 470, 1); ['A4', 'D5'].forEach((n, i) => glass(P(23, 'brightest') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(23, 'brightest'), { f: 'D3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
