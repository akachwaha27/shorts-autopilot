// ================= Low-Poly Faceted, vertical 1080x1920: "What's really inside a camel's hump?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take) ----------
  const BEATS = [
    { s: 0.25, e: 3.54, w: {a: 0.25, camels: 0.35, hump: 0.97, hides: 1.38, up: 1.9, to: 2.1, n35: 2.31, kilos: 2.51, of: 3.03, fat: 3.23} }, // 0 A camel's hump hides up to 35 kilos of fat,
    { s: 4.05, e: 5.33, w: {not: 4.05, a: 4.31, drop: 4.39, of: 4.73, water: 4.9} }, // 1 not a drop of water.
    { s: 5.77, e: 7.3, w: {heres: 5.77, why: 6.15, you: 6.38, never: 6.61, knew: 6.99} }, // 2 Here's why you never knew.
    { s: 7.65, e: 9.17, w: {fat: 7.65, is: 7.88, food: 8.03, in: 8.33, a: 8.49, backpack: 8.56} }, // 3 Fat is food in a backpack.
    { s: 9.52, e: 10.59, w: {when: 9.52, theres: 9.71, nothing: 10.01, to: 10.35, eat: 10.44} }, // 4 When there's nothing to eat,
    { s: 11.08, e: 13.39, w: {the: 11.08, camel: 11.32, burns: 11.72, that: 12.12, fat: 12.43, for: 12.67, energy: 12.91} }, // 5 the camel burns that fat for energy,
    { s: 13.7, e: 15.6, w: {and: 13.7, the: 13.9, hump: 14.09, shrinks: 14.35, and2: 14.81, flops: 15.01, over: 15.34} }, // 6 and the hump shrinks and flops over.
    { s: 15.95, e: 17.42, w: {with: 15.95, all: 16.22, the: 16.42, fat: 16.62, in: 16.82, one: 16.95, lump: 17.15} }, // 7 With all the fat in one lump,
    { s: 17.91, e: 20.29, w: {the: 17.91, rest: 18.13, of: 18.43, the2: 18.58, body: 18.8, stays: 19.1, lean: 19.47, and: 19.77, cool: 19.99} }, // 8 the rest of the body stays lean and cool.
    { s: 20.67, e: 22.27, w: {okay: 20.67, so: 20.99, wheres: 21.15, the: 21.63, water: 21.87} }, // 9 Okay, so where's the water?
    { s: 22.81, e: 24.48, w: {its: 22.81, spread: 22.99, through: 23.35, the: 23.77, whole: 23.95, body: 24.24} }, // 10 It's spread through the whole body.
    { s: 24.93, e: 27.65, w: {a: 24.93, camel: 25.0, can: 25.35, lose: 25.56, a2: 25.84, quarter: 25.91, of: 26.39, its: 26.53, weight: 26.74, in: 27.16, water: 27.3} }, // 11 A camel can lose a quarter of its weight in water
    { s: 27.96, e: 28.88, w: {and: 27.96, keep: 28.16, walking: 28.42} }, // 12 and keep walking.
    { s: 29.29, e: 31.94, w: {its: 29.29, oval: 29.53, blood: 29.85, cells: 30.25, keep: 30.65, sliding: 30.97, along: 31.54} }, // 13 Its oval blood cells keep sliding along
    { s: 32.08, e: 33.68, w: {even: 32.08, as: 32.37, its: 32.51, blood: 32.73, thickens: 33.1} }, // 14 even as its blood thickens.
    { s: 34.03, e: 35.18, w: {then: 34.03, it: 34.32, finds: 34.46, a: 34.82, well: 34.89} }, // 15 Then it finds a well,
    { s: 35.64, e: 37.68, w: {and: 35.64, drinks: 35.85, around: 36.27, a: 36.69, hundred: 36.76, litres: 37.26} }, // 16 and drinks around a hundred litres
    { s: 37.78, e: 38.54, w: {in: 37.78, about: 37.87, ten: 38.09, minutes: 38.23} }, // 17 in about ten minutes.
    { s: 38.97, e: 41.53, w: {those: 38.97, blood: 39.33, cells: 39.68, swell: 40.04, to: 40.39, twice: 40.54, their: 40.89, size: 41.25} }, // 18 Those blood cells swell to twice their size
    { s: 41.72, e: 42.62, w: {without: 41.72, bursting: 42.14} }, // 19 without bursting.
    { s: 43.1, e: 44.19, w: {so: 43.1, if: 43.25, you: 43.39, had: 43.61, a: 43.83, hump: 43.9} }, // 20 So if you had a hump,
    { s: 44.52, e: 46.1, w: {what: 44.52, would: 44.78, you: 45.11, store: 45.31, in: 45.64, yours: 45.77} }, // 21 what would you store in yours?
  ];
  const P = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in ' + i); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes: dawn hook -> day (fat = fuel, shrink + flop) -> noon (one lump, cool) -> dusk (water everywhere, -25%) -> blood vessel (oval cells)
  //         -> well (100 L in 10 min) -> vessel (cells swell 2x) -> dawn (the question)
  const CUT = { fuel: BEATS[3].s - 0.3, cool: BEATS[7].s - 0.3, water: BEATS[9].s - 0.3, blood: BEATS[13].s - 0.35, well: BEATS[15].s - 0.3, swell: BEATS[18].s - 0.35, end: BEATS[20].s - 0.3 };
  const CUTS = [CUT.fuel, CUT.cool, CUT.water, CUT.blood, CUT.well, CUT.swell, CUT.end];
  const WIPE = 0.5;
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const BK = (t, a, d = 0.3) => H.ease.back(ph(t, a, a + d));
  const win = (t, a, b, fi = 0.3, fo = 0.3) => H.ease.back(ph(t, a, a + fi)) * (1 - H.ease.inOut(ph(t, b, b + fo)));
  const INK = '#2a1f4f', CORAL = '#e8603c', PEACH = '#ffb08a', MINT = '#3ccf9a';
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
    ctx.fillStyle = ok ? MINT : '#ff5a4a'; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.moveTo(0, 0); for (let i = 3; i <= 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = r * 0.2; ctx.lineJoin = 'miter'; ctx.beginPath(); const s = r / 24;
    if (ok) { ctx.moveTo(-10 * s, 0); ctx.lineTo(-3 * s, 8 * s); ctx.lineTo(11 * s, -9 * s); } else { ctx.moveTo(-8 * s, -8 * s); ctx.lineTo(8 * s, 8 * s); ctx.moveTo(8 * s, -8 * s); ctx.lineTo(-8 * s, 8 * s); }
    ctx.stroke(); ctx.restore();
  }
  function tri2(ctx, a, b, c, col) { ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  function gem(ctx, x, y, r, c, rot = 0) { // small faceted diamond
    const col = Array.isArray(c) ? c : H.hex(c), L = H.rgba(H.mix(col, [255, 255, 255], 0.35)), D = H.rgba(H.mix(col, [40, 20, 70], 0.25)), M = H.rgba(col);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    tri2(ctx, [0, -r], [r * 0.7, 0], [0, 0], L); tri2(ctx, [0, -r], [-r * 0.7, 0], [0, 0], M); tri2(ctx, [-r * 0.7, 0], [0, r], [0, 0], D); tri2(ctx, [r * 0.7, 0], [0, r], [0, 0], M);
    ctx.restore();
  }
  function hexKnob(ctx, x, y, r, col, glow = 0) {
    if (glow > 0.01) { const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 3.2); g.addColorStop(0, `rgba(255,240,200,${0.7 * glow})`); g.addColorStop(1, 'rgba(255,240,200,0)'); ctx.fillStyle = g; ctx.fillRect(x - r * 3.4, y - r * 3.4, r * 6.8, r * 6.8); }
    for (let i = 0; i < 6; i++) { const a0 = i / 6 * Math.PI * 2 + 0.3, a1 = (i + 1) / 6 * Math.PI * 2 + 0.3; tri2(ctx, [x, y], [x + Math.cos(a0) * r, y + Math.sin(a0) * r], [x + Math.cos(a1) * r, y + Math.sin(a1) * r], H.rgba(H.mix(col, [255, 255, 255], 0.15 + 0.3 * Math.cos(a0 + 2.2)))); }
  }
  function bigNumber(ctx, x, y, str, px, k, fill = '#fff') {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.font = FONT(px); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(30,20,60,0.5)'; ctx.fillText(str, 8, 8); ctx.lineJoin = 'round'; ctx.lineWidth = px * 0.11; ctx.strokeStyle = INK; ctx.strokeText(str, 0, 0); ctx.fillStyle = fill; ctx.fillText(str, 0, 0);
    ctx.restore();
  }

  // =================== THE CAMEL (2D faceted dromedary, local units: feet on y=0, hump top ~ -900) ===================
  const SAND = [214, 160, 98], SAND_L = [244, 204, 146], SAND_D = [156, 104, 58], HOOF = [96, 66, 46];
  const FAT = [255, 214, 96], FAT_L = [255, 240, 170], WATER = [70, 170, 240];
  const LIGHT = -2.2;
  const shadeA = (a) => 0.5 + 0.5 * Math.cos(a - LIGHT);
  const BODY_RX = 235, BODY_RY = 108, BC = [0, -560];
  const CBODY = (() => {
    const r = H.rng(77), N = 16, out = [], inner = [];
    const pt = (a, k) => { let rx = BODY_RX, ry = BODY_RY; if (Math.sin(a) > 0) ry *= 0.9; return [Math.cos(a) * rx * k, Math.sin(a) * ry * k]; };
    for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2; out.push(pt(a, 1 + r.range(-0.04, 0.04))); inner.push(pt(a + Math.PI / N, 0.55 + r.range(-0.05, 0.05))); }
    const tris = [];
    for (let i = 0; i < N; i++) { const j = (i + 1) % N; tris.push([out[i], out[j], inner[i]], [out[j], inner[j], inner[i]], [inner[i], inner[j], [0, 0]]); }
    return tris.map((f) => { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; return { f, a: Math.atan2(cy, cx), d: Math.hypot(cx, cy), j: 0.93 + r() * 0.12 }; });
  })();
  const HJ = (() => { const r = H.rng(91), a = []; for (let i = 0; i < 40; i++) a.push(0.92 + r() * 0.14); return a; })();
  function seg(ctx, a, b, w0, w1, col, dark = 0) {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
    const p = [[a[0] + nx * w0, a[1] + ny * w0], [b[0] + nx * w1, b[1] + ny * w1], [b[0] - nx * w1, b[1] - ny * w1], [a[0] - nx * w0, a[1] - ny * w0]];
    const lit = H.mix(H.mix(col, [255, 255, 255], 0.16), [60, 30, 20], dark), shd = H.mix(col, [70, 36, 20], 0.24 + dark);
    tri2(ctx, a, p[0], p[1], H.rgba(lit)); tri2(ctx, a, p[1], b, H.rgba(lit));
    tri2(ctx, a, b, p[2], H.rgba(shd)); tri2(ctx, a, p[2], p[3], H.rgba(shd));
  }
  const bodyTopY = (x) => BC[1] - BODY_RY * Math.sqrt(Math.max(0, 1 - (x / BODY_RX) * (x / BODY_RX)));
  // hump outline points: base from x=-140..+95, height by o.hump, lean by o.flop
  function humpPts(o) {
    const hh = 250 * (o.hump ?? 1), fl = H.ease.inOut(o.flop || 0), N = 10, out = [], inner = [];
    for (let i = 0; i <= N; i++) {
      const u = i / N, x0 = H.lerp(-150, 100, u), by = bodyTopY(x0) + 14, bump = Math.pow(Math.sin(Math.PI * u), 0.9);
      const hgt = hh * bump * (1 - 0.25 * fl);
      const x = x0 - fl * 150 * bump * bump, y = by - hgt + fl * 40 * bump * bump * (u < 0.5 ? 1 : 0.4);
      out.push([x, y]); inner.push([H.lerp(x0, x, 0.5), H.lerp(by, y, 0.5)]);
    }
    return { out, inner, base: [H.lerp(-150, 100, 0.5) - 25, bodyTopY(-25) + 14] };
  }
  function legGeo(o, which) { // which: 0 front-near, 1 front-far, 2 back-near, 3 back-far
    const front = which < 2, hipX = front ? 160 : -170, ph0 = [0, Math.PI, Math.PI, 0][which] + (front ? 0 : 0.4);
    const w = o.walk;
    let fx = hipX + (front ? 14 : -6), lift = 0;
    if (w != null) { const a = w * Math.PI * 2 + ph0; fx += Math.sin(a) * 70; lift = Math.max(0, Math.cos(a)) * 46; }
    const hip = [hipX, -520], foot = [fx, -lift], knee = [H.lerp(hip[0], foot[0], 0.5) + (front ? 16 : -22) + lift * 0.3, H.lerp(hip[1], foot[1], 0.48)];
    return { hip, knee, foot };
  }
  function drawLeg(ctx, o, which, dark) {
    const g = legGeo(o, which), wcol = H.mix(SAND, [255, 255, 255], 0);
    seg(ctx, g.hip, g.knee, 42, 27, wcol, dark); seg(ctx, g.knee, g.foot, 25, 19, wcol, dark);
    hexKnob(ctx, g.knee[0], g.knee[1], 24, H.mix(SAND_D, [60, 30, 20], dark));
    const f = g.foot, c = H.mix(HOOF, [40, 20, 10], dark);
    tri2(ctx, [f[0] - 30, f[1] - 18], [f[0] + 38, f[1] - 14], [f[0] + 42, f[1] + 2], H.rgba(H.mix(c, [255, 255, 255], 0.15)));
    tri2(ctx, [f[0] - 30, f[1] - 18], [f[0] + 42, f[1] + 2], [f[0] - 32, f[1] + 2], H.rgba(c));
    return g;
  }
  // o: { x, y, s, walk, hump, flop, fatX (x-ray of hump), water, head (0 up, 1 drinking), dir (+1 facing right), alpha }
  function drawCamel(ctx, o) {
    const s = o.s || 1, dir = o.dir || 1;
    ctx.save(); ctx.translate(o.x, o.y + (o.walk != null ? -Math.abs(Math.sin(o.walk * Math.PI * 2)) * 8 : 0)); ctx.scale(s * dir, s);
    const map = (p) => [o.x + p[0] * s * dir, o.y + p[1] * s];
    // far legs
    drawLeg(ctx, o, 1, 0.22); drawLeg(ctx, o, 3, 0.22);
    // tail
    seg(ctx, [-228, -590], [-262, -420], 16, 9, SAND_D, 0.1);
    tri2(ctx, [-275, -440], [-250, -440], [-268, -380], H.rgba(H.mix(SAND_D, [60, 30, 20], 0.3)));
    // neck + head (behind body front)
    const hd = H.ease.inOut(o.head || 0);
    const N0 = [190, -600], lerp2 = (a, b, u) => [H.lerp(a[0], b[0], u), H.lerp(a[1], b[1], u)];
    const c1 = lerp2([330, -590], [330, -520], hd), c2 = lerp2([350, -800], [450, -330], hd), Hd = lerp2([420, -860], [470, -150], hd);
    const NS = 10, np = [];
    for (let i = 0; i <= NS; i++) { const u = i / NS, a = 1 - u; np.push([a * a * a * N0[0] + 3 * a * a * u * c1[0] + 3 * a * u * u * c2[0] + u * u * u * Hd[0], a * a * a * N0[1] + 3 * a * a * u * c1[1] + 3 * a * u * u * c2[1] + u * u * u * Hd[1]]); }
    for (let i = 0; i < NS; i++) seg(ctx, np[i], np[i + 1], H.lerp(70, 36, i / NS), H.lerp(70, 36, (i + 1) / NS), H.mix(SAND, SAND_L, 0.15 + 0.15 * (i % 2)), 0);
    // head: elongated faceted wedge, snout pointing along angle ha
    const ha = H.lerp(-0.12, 1.25, hd);
    ctx.save(); ctx.translate(Hd[0], Hd[1]); ctx.rotate(ha);
    const HP = { sk: [-30, -36], top: [40, -40], nose: [128, -14], chin: [118, 26], jaw: [20, 34], back: [-40, 10] };
    tri2(ctx, HP.sk, HP.top, HP.back, H.rgba(SAND_L)); tri2(ctx, HP.top, HP.nose, HP.jaw, H.rgba(H.mix(SAND, SAND_L, 0.55)));
    tri2(ctx, HP.top, HP.jaw, HP.back, H.rgba(SAND)); tri2(ctx, HP.nose, HP.chin, HP.jaw, H.rgba(SAND_D));
    tri2(ctx, HP.back, HP.jaw, [-20, 40], H.rgba(H.mix(SAND, SAND_D, 0.5)));
    tri2(ctx, [-26, -34], [-6, -36], [-30, -70], H.rgba(SAND_D)); // ear
    tri2(ctx, [104, -12], [124, -10], [112, -2], 'rgba(60,34,20,0.8)'); // nostril
    tri2(ctx, [96, 16], [124, 18], [104, 26], 'rgba(90,50,30,0.7)'); // lip line
    gem(ctx, 26, -18, 11, [40, 26, 20]); gem(ctx, 23, -21, 3.5, [255, 255, 255]);
    tri2(ctx, [8, -28], [44, -30], [30, -24], H.rgba(SAND_D)); // brow
    ctx.restore();
    // near legs
    drawLeg(ctx, o, 2, 0); drawLeg(ctx, o, 0, 0);
    // body
    for (const b of CBODY) {
      const sh = shadeA(b.a) * (0.55 + 0.45 * H.clamp(b.d / 120));
      let col = H.mix(SAND_D, SAND_L, H.clamp(sh * 0.9 + 0.05)); col = col.map((v) => Math.min(255, v * b.j));
      tri2(ctx, [BC[0] + b.f[0][0], BC[1] + b.f[0][1]], [BC[0] + b.f[1][0], BC[1] + b.f[1][1]], [BC[0] + b.f[2][0], BC[1] + b.f[2][1]], H.rgba(col));
    }
    // hump
    const hp = humpPts(o), fx = o.fatX || 0;
    for (let i = 0; i < hp.out.length - 1; i++) {
      const a = Math.atan2(hp.out[i][1] - hp.base[1], hp.out[i][0] - hp.base[0]);
      let c1c = H.mix(SAND_D, SAND_L, H.clamp(shadeA(a) * 0.95 + 0.05)).map((v) => Math.min(255, v * HJ[i]));
      let c2c = H.mix(SAND_D, SAND_L, H.clamp(shadeA(a) * 0.7 + 0.12)).map((v) => Math.min(255, v * HJ[i + 12]));
      if (fx > 0) { c1c = H.mix(c1c, H.mix(FAT, FAT_L, (i % 3) * 0.3), fx * 0.92); c2c = H.mix(c2c, H.mix(FAT, FAT_L, ((i + 1) % 3) * 0.3), fx * 0.92); }
      tri2(ctx, hp.out[i], hp.out[i + 1], hp.inner[i], H.rgba(c1c)); tri2(ctx, hp.out[i + 1], hp.inner[i + 1], hp.inner[i], H.rgba(c2c));
      let c3 = H.mix(SAND, SAND_L, 0.3 + 0.2 * (i % 2)); if (fx > 0) c3 = H.mix(c3, H.mix(FAT, FAT_L, 0.5 + 0.2 * (i % 2)), fx * 0.92);
      tri2(ctx, hp.inner[i], hp.inner[i + 1], hp.base, H.rgba(c3));
    }
    if (fx > 0.05) { // fat cells: little gems inside the hump
      const r = H.rng(5);
      for (let i = 0; i < 16; i++) { const u = r.range(0.15, 0.85), v = r.range(0.2, 0.75), oi = Math.round(u * 10), p0 = hp.out[oi]; const x = H.lerp(hp.base[0], p0[0], v), y = H.lerp(hp.base[1], p0[1], v); ctx.globalAlpha = fx; gem(ctx, x, y, 12, [255, 248, 210], r() * 3); ctx.globalAlpha = 1; }
    }
    // water spread through the body (blue gems)
    const wa = o.water || 0;
    if (wa > 0.01) {
      const r = H.rng(13);
      ctx.save(); ctx.globalAlpha = wa;
      for (let i = 0; i < 46; i++) { const a = r() * Math.PI * 2, d = Math.sqrt(r()) * 0.85; gem(ctx, BC[0] + Math.cos(a) * BODY_RX * d, BC[1] + Math.sin(a) * BODY_RY * d, r.range(9, 15), H.mix(WATER, [200, 240, 255], r() * 0.5), r() * 3); }
      for (const w of [0, 1, 2, 3]) { const g = legGeo(o, w); for (let k = 1; k < 5; k++) { const p = [H.lerp(g.hip[0], g.foot[0], k / 5), H.lerp(g.hip[1], g.foot[1], k / 5)]; gem(ctx, p[0], p[1], 9, WATER, k); } }
      for (let k = 1; k < 9; k++) { const p = np[k]; gem(ctx, p[0], p[1], 11, H.mix(WATER, [200, 240, 255], (k % 2) * 0.4), k); }
      ctx.restore();
    }
    ctx.restore();
    return { map, hump: map([hp.out[5][0], hp.out[5][1]]), head: map(Hd), body: map(BC) };
  }
  const BG = {};
  function mosaicLayer(key, top, bot, glow, glowCol, y1 = HH, cs = 120) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 31 + 7), nx = Math.ceil(W / cs) + 1, ny = Math.ceil(HH / cs) + 1, V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.4, 0.4) * cs : 0), j * cs + (j > 0 && j < ny ? r.range(-0.4, 0.4) * cs : 0)]); V.push(row); }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1];
      for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) {
        const cy = (f[0][1] + f[1][1] + f[2][1]) / 3, cx = (f[0][0] + f[1][0] + f[2][0]) / 3;
        let col = H.mix(top, bot, H.clamp(cy / y1));
        const gl = Math.max(0, 1 - Math.hypot(cx - glow[0], cy - glow[1]) / 700);
        col = H.mix(col, glowCol, gl * 0.45);
        col = col.map((v) => v * (0.94 + r() * 0.1));
        tri2(g, f[0], f[1], f[2], H.rgba(col));
      }
    }
    return (BG[key] = c);
  }
  function stars(ctx, n, ymax, seed, a0 = 0.8) { const R0 = H.rng(seed); for (let i = 0; i < n; i++) { const x = R0() * W, y = R0() * ymax, a = (1 - y / ymax) * R0() * a0; ctx.fillStyle = `rgba(255,240,255,${a})`; const s = R0() < 0.15 ? 4 : 2; ctx.fillRect(x, y, s, s); } }
  function facetSun(ctx, x, y, r, c0, c1, halo) {
    const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 6); g.addColorStop(0, halo); g.addColorStop(1, 'rgba(255,214,160,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    for (let i = 0; i < 14; i++) { const a0 = (i / 14) * Math.PI * 2, a1 = ((i + 1) / 14) * Math.PI * 2; tri2(ctx, [x, y], [x + Math.cos(a0) * r, y + Math.sin(a0) * r], [x + Math.cos(a1) * r, y + Math.sin(a1) * r], H.rgba(H.mix(c0, c1, 0.5 + 0.5 * Math.cos(a0 - 2.3)))); }
  }
  // distant faceted ridge line + lagoon water (cached per palette)
  // =================== DESERT (faceted dunes with depth fog, cached per palette) ===================
  function duneLayer(key, pal) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 17 + 5), nz = H.makeNoise(key.length * 3 + 1);
    const rows = [1120, 1210, 1320, 1450, 1600, 1780, 1990];
    for (let j = 0; j < rows.length; j++) {
      const depth = 1 - j / (rows.length - 1), base = rows[j], cs = 80 + j * 40, pts = [];
      for (let x = -cs; x <= W + cs * 2; x += cs) pts.push([x + r.range(-0.3, 0.3) * cs, base - Math.max(0, nz.n2(x * 0.003 + j * 7, j * 1.7)) * (90 + j * 40) - 20]);
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1], m = [(a[0] + b[0]) / 2 + r.range(-20, 20), HH + 40];
        const slope = (b[1] - a[1]) / (b[0] - a[0]);
        let lit = H.mix(pal.sandD, pal.sandL, H.clamp(0.55 - slope * 1.6 + r.range(-0.08, 0.08)));
        let shd = H.mix(pal.sandD, pal.sand, 0.35 + r() * 0.2);
        const fog = depth * 0.62; lit = H.mix(lit, pal.fog, fog); shd = H.mix(shd, pal.fog, fog);
        tri2(g, a, b, m, H.rgba(lit)); tri2(g, a, m, [a[0], HH + 40], H.rgba(shd));
      }
    }
    return (BG[key] = c);
  }
  const PAL = {
    dawn: { top: [40, 44, 96], bot: [255, 170, 120], sunX: 760, sunY: 1030, glow: [255, 220, 170], sand: [214, 140, 96], sandL: [250, 196, 140], sandD: [130, 80, 80], fog: [250, 170, 140] },
    day: { top: [70, 140, 220], bot: [255, 226, 180], sunX: 940, sunY: 380, glow: [255, 248, 220], sand: [232, 180, 110], sandL: [255, 226, 160], sandD: [190, 126, 70], fog: [250, 220, 190] },
    noon: { top: [255, 150, 70], bot: [255, 236, 170], sunX: 540, sunY: 520, glow: [255, 255, 220], sand: [240, 170, 90], sandL: [255, 220, 140], sandD: [200, 110, 56], fog: [255, 210, 150] },
    dusk: { top: [34, 30, 84], bot: [170, 110, 170], sunX: 260, sunY: 1060, glow: [255, 190, 200], sand: [170, 110, 130], sandL: [220, 150, 160], sandD: [90, 60, 100], fog: [170, 120, 170] },
  };
  function desert(ctx, t, key) {
    const pal = PAL[key];
    ctx.drawImage(mosaicLayer(key + 'sky', pal.top, pal.bot, [pal.sunX, pal.sunY + 300], pal.glow, 1150), 0, 0);
    if (key === 'dusk' || key === 'dawn') stars(ctx, 70, 520, 31 + key.length, 0.8);
    facetSun(ctx, pal.sunX, pal.sunY, key === 'noon' ? 120 : 82, H.mix(pal.glow, [255, 200, 120], 0.3), [255, 252, 236], key === 'noon' ? 'rgba(255,250,210,0.6)' : 'rgba(255,220,170,0.45)');
    ctx.drawImage(duneLayer(key + 'dune', pal), 0, 0);
  }
  function shadow(ctx, x, y, w) { ctx.fillStyle = 'rgba(80,40,30,0.28)'; ctx.beginPath(); ctx.ellipse(x, y + 6, w, 26, 0, 0, Math.PI * 2); ctx.fill(); }
  function header(ctx, t) {
    const k = EO(t, P(2, 'heres') - 0.1, P(2, 'heres') + 0.3); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 222, "WHAT'S IN A CAMEL'S HUMP?", { font: FONT(44), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  const SH = 1600; // ground line for camels

  // ---- A: hook, dawn ----
  function sceneHook(ctx, t) {
    desert(ctx, t, 'dawn');
    const o = { x: 400, y: SH, s: 0.9, hump: 1, fatX: EI(t, P(0, 'hump') - 0.1, P(0, 'fat') + 0.1) };
    shadow(ctx, 440, SH, 330); const c = drawCamel(ctx, o);
    const out1 = 1 - EI(t, P(1, 'not') - 0.15, P(1, 'not') + 0.1);
    bigNumber(ctx, 540, 520, '35 KG', 190, BK(t, P(0, 'n35') - 0.12) * out1, '#ffe27a');
    lpTag(ctx, 540, 650, 'OF FAT', { k: BK(t, P(0, 'fat') - 0.12) * out1, font: FONT(100), h: 160, bg: '#fff3dc' });
    if (out1 > 0.01) lpArrow(ctx, [700, 720], [700, 820], [c.hump[0] + 60, c.hump[1] - 10], EI(t, P(0, 'fat') - 0.1, P(0, 'fat') + 0.35) * out1, [255, 226, 122], 22);
    // not a drop of water
    const kd = BK(t, P(1, 'drop') - 0.12);
    if (kd > 0.01) {
      ctx.save(); ctx.translate(540, 470); ctx.scale(kd, kd);
      const R = 110; tri2(ctx, [0, -R * 1.5], [R * 0.85, 0], [0, 0], H.rgba([150, 220, 255])); tri2(ctx, [0, -R * 1.5], [-R * 0.85, 0], [0, 0], H.rgba(WATER));
      tri2(ctx, [-R * 0.85, 0], [0, R * 0.9], [0, 0], H.rgba([40, 110, 190])); tri2(ctx, [R * 0.85, 0], [0, R * 0.9], [0, 0], H.rgba([60, 150, 220]));
      ctx.restore();
      hexBadge(ctx, 650, 540, BK(t, P(1, 'water') - 0.12), false, 60);
      lpTag(ctx, 540, 680, 'NO WATER', { k: BK(t, P(1, 'water') - 0.12), font: FONT(96), h: 150, bg: CORAL, col: '#fff' });
    }
  }
  // ---- B: fat is fuel, day; the hump shrinks and flops ----
  function sceneFuel(ctx, t) {
    desert(ctx, t, 'day');
    const tB = P(3, 'fat') - 0.1;
    const shrink = EI(t, P(6, 'shrinks') - 0.1, P(6, 'flops') - 0.05), flop = EI(t, P(6, 'flops') - 0.1, P(6, 'over') + 0.2);
    const walk = (t - tB) * 0.9;
    const o = { x: 400, y: SH, s: 0.9, walk, hump: 1 - 0.3 * shrink, flop, fatX: 1 - 0.35 * EI(t, P(5, 'burns') - 0.1, P(5, 'energy') + 0.3) };
    shadow(ctx, 440, SH, 330); const c = drawCamel(ctx, o);
    // food in a backpack
    const k1o = 1 - EI(t, P(4, 'when') - 0.2, P(4, 'when') + 0.1);
    lpTag(ctx, 540, 470, 'FAT = FOOD', { k: BK(t, P(3, 'food') - 0.12) * k1o, font: FONT(110), h: 170, bg: '#ffe27a' });
    lpTag(ctx, 540, 650, 'BACKPACK', { k: BK(t, P(3, 'backpack') - 0.12) * k1o, font: FONT(84), bg: '#fff3dc' });
    // nothing to eat: a bare twig with a cross
    const k2 = BK(t, P(4, 'nothing') - 0.12) * (1 - EI(t, P(5, 'burns') - 0.2, P(5, 'burns') + 0.1));
    lpTag(ctx, 540, 500, 'NOTHING TO EAT', { k: k2, font: FONT(92), h: 150, bg: INK, col: '#fff' });
    hexBadge(ctx, 880, 400, k2, false, 54);
    // burn: gems fly from hump down into the body and legs
    const kb = ph(t, P(5, 'burns') - 0.1, P(6, 'and') + 0.2);
    if (kb > 0 && kb < 1) {
      const r = H.rng(3);
      for (let i = 0; i < 14; i++) { const d0 = r() * 0.5, u = H.clamp((kb - d0) / 0.5); if (u <= 0 || u >= 1) continue; const tx = 300 + r() * 350, ty = 1200 + r() * 300; const x = H.lerp(c.hump[0], tx, u), y = H.lerp(c.hump[1], ty, u) - Math.sin(u * Math.PI) * 120; ctx.globalAlpha = 1 - u * 0.6; gem(ctx, x, y, 16, FAT, u * 6); ctx.globalAlpha = 1; }
    }
    const k3 = BK(t, P(5, 'energy') - 0.12) * (1 - EI(t, P(6, 'shrinks') - 0.3, P(6, 'shrinks')));
    lpTag(ctx, 540, 480, 'FAT → ENERGY', { k: k3, font: FONT(104), h: 170, bg: '#ffe27a' });
    lpTag(ctx, 540, 480, 'SHRINKS', { k: BK(t, P(6, 'shrinks') - 0.12), font: FONT(104), h: 160, bg: '#fff3dc' });
    lpTag(ctx, 540, 650, '& FLOPS', { k: BK(t, P(6, 'flops') - 0.12), font: FONT(104), h: 160, bg: CORAL, col: '#fff' });
  }
  // ---- C: one lump keeps the body lean and cool, noon ----
  function sceneCool(ctx, t) {
    desert(ctx, t, 'noon');
    const o = { x: 400, y: SH, s: 0.9, hump: 1, fatX: EI(t, P(7, 'fat') - 0.15, P(7, 'fat') + 0.2) };
    shadow(ctx, 440, SH, 330); const c = drawCamel(ctx, o);
    lpTag(ctx, 540, 400, 'ONE LUMP', { k: BK(t, P(7, 'one') - 0.12), font: FONT(116), h: 170, bg: '#ffe27a' });
    if (t > P(7, 'one') - 0.1) lpArrow(ctx, [600, 500], [640, 640], [c.hump[0] + 30, c.hump[1] - 20], EI(t, P(7, 'one') - 0.1, P(7, 'lump') + 0.2), [255, 226, 122], 20);
    // heat leaves the lean body: red ribbon arrows out of the belly and flank
    const kh = EI(t, P(8, 'lean') - 0.15, P(8, 'cool') + 0.3);
    const B = c.body;
    [[[B[0] - 120, B[1] + 60], [B[0] - 260, B[1] + 160], [B[0] - 330, B[1] + 60]], [[B[0] + 60, B[1] + 90], [B[0] + 80, B[1] + 250], [B[0] + 230, B[1] + 260]], [[B[0] - 20, B[1] + 100], [B[0] - 60, B[1] + 260], [B[0] - 20, B[1] + 330]]].forEach((a, i) => lpArrow(ctx, a[0], a[1], a[2], H.clamp(kh * 1.3 - i * 0.15), [255, 110, 70], 18));
    lpTag(ctx, 380, 580, 'LEAN', { k: BK(t, P(8, 'lean') - 0.12), font: FONT(96), h: 150, bg: '#fff3dc' });
    lpTag(ctx, 720, 580, '+ COOL', { k: BK(t, P(8, 'cool') - 0.12), font: FONT(96), h: 150, bg: '#7fd8ff' });
  }
  // ---- D: the water is in the whole body; it can lose a quarter of its weight, dusk ----
  function weightBar(ctx, x, y, w, h, frac, k) {
    if (k <= 0.01) return;
    ctx.save(); ctx.globalAlpha = k;
    tri2(ctx, [x, y], [x + w, y], [x, y + h], 'rgba(30,20,60,0.6)'); tri2(ctx, [x + w, y], [x + w, y + h], [x, y + h], 'rgba(30,20,60,0.6)');
    const fw = w * frac; tri2(ctx, [x, y], [x + fw, y], [x, y + h], H.rgba([120, 200, 255])); tri2(ctx, [x + fw, y], [x + fw, y + h], [x, y + h], H.rgba(WATER));
    if (frac < 1) { tri2(ctx, [x + fw, y], [x + w, y], [x + fw, y + h], 'rgba(255,110,90,0.55)'); tri2(ctx, [x + w, y], [x + w, y + h], [x + fw, y + h], 'rgba(220,80,70,0.55)'); }
    ctx.restore();
  }
  function sceneWater(ctx, t) {
    desert(ctx, t, 'dusk');
    const walkOn = t > P(12, 'keep') - 0.2;
    const o = { x: 400, y: SH, s: 0.9, hump: 1, water: EI(t, P(10, 'spread') - 0.1, P(10, 'body') + 0.2) * (1 - 0.35 * EI(t, P(11, 'lose') - 0.1, P(11, 'water') + 0.2)), walk: walkOn ? (t - P(12, 'keep')) * 1.0 : null };
    shadow(ctx, 440, SH, 330); drawCamel(ctx, o);
    const k0 = BK(t, P(9, 'water') - 0.12) * (1 - EI(t, P(10, 'spread') - 0.2, P(10, 'spread') + 0.05));
    lpTag(ctx, 540, 480, "WHERE'S THE WATER?", { k: k0, font: FONT(84), h: 150, bg: '#7fd8ff' });
    const k1 = BK(t, P(10, 'whole') - 0.12) * (1 - EI(t, P(11, 'a') - 0.2, P(11, 'a') + 0.05));
    lpTag(ctx, 540, 480, 'EVERYWHERE', { k: k1, font: FONT(116), h: 170, bg: '#7fd8ff' });
    const k2 = BK(t, P(11, 'quarter') - 0.12);
    bigNumber(ctx, 540, 500, '-25%', 190, k2, '#ff9a7a');
    lpTag(ctx, 540, 600, 'OF ITS WEIGHT', { k: BK(t, P(11, 'weight') - 0.12) * (1 - EI(t, P(12, 'walking') - 0.25, P(12, 'walking') - 0.1)), font: FONT(72), bg: '#fff3dc' });
    weightBar(ctx, 190, 680, 700, 56, 1 - 0.25 * EI(t, P(11, 'quarter') - 0.1, P(11, 'water') + 0.3), BK(t, P(11, 'quarter') - 0.12));
    lpTag(ctx, 540, 600, 'STILL WALKING', { k: BK(t, P(12, 'walking') - 0.12), font: FONT(80), bg: MINT, col: '#fff' });
  }
  // ---- E/F: inside a blood vessel ----
  function vesselBG(ctx, key, top, bot) {
    ctx.drawImage(mosaicLayer(key, top, bot, [540, 1000], [255, 160, 150], 1920, 110), 0, 0);
  }
  function vesselWalls(ctx, y0, y1, col) {
    const r = H.rng(44);
    for (const [ya, yb] of [[y0 - 90, y0], [y1, y1 + 90]]) for (let x = -60; x < W + 60; x += 120) { const j = r.range(-14, 14); tri2(ctx, [x, ya + j], [x + 120, ya], [x, yb], H.rgba(H.mix(col, [255, 255, 255], 0.18 + r() * 0.1))); tri2(ctx, [x + 120, ya], [x + 120, yb], [x, yb], H.rgba(H.mix(col, [60, 10, 20], 0.15 + r() * 0.1))); }
  }
  function cell(ctx, x, y, rx, ry, col, rot = 0) { // faceted oval red blood cell
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    const N = 10;
    for (let i = 0; i < N; i++) { const a0 = i / N * Math.PI * 2, a1 = (i + 1) / N * Math.PI * 2; tri2(ctx, [0, 0], [Math.cos(a0) * rx, Math.sin(a0) * ry], [Math.cos(a1) * rx, Math.sin(a1) * ry], H.rgba(H.mix(col, [255, 255, 255], 0.12 + 0.28 * Math.max(0, Math.cos(a0 + 2.2))))); }
    for (let i = 0; i < N; i++) { const a0 = i / N * Math.PI * 2, a1 = (i + 1) / N * Math.PI * 2; tri2(ctx, [0, 0], [Math.cos(a0) * rx * 0.5, Math.sin(a0) * ry * 0.5], [Math.cos(a1) * rx * 0.5, Math.sin(a1) * ry * 0.5], H.rgba(H.mix(col, [90, 10, 20], 0.2 + 0.15 * Math.max(0, Math.cos(a0 - 1))))); }
    ctx.restore();
  }
  function flow(ctx, t, y0, y1, n, speed, scale, col, seed, extra = 0) {
    const r = H.rng(seed), span = W + 300;
    for (let i = 0; i < n + extra; i++) {
      const lane = r(), off = r() * span, ph0 = r() * 6, isX = i >= n;
      const x = ((off + t * speed) % span) - 150, y = H.lerp(y0 + 70, y1 - 70, lane) + Math.sin(t * 2 + ph0) * 12;
      ctx.save(); if (isX) ctx.globalAlpha = H.clamp(extra - (i - n)); cell(ctx, x, y, 66 * scale, 40 * scale, col, Math.sin(t + ph0) * 0.2); ctx.restore();
    }
  }
  function sceneBlood(ctx, t) {
    const thick = EI(t, P(14, 'blood') - 0.1, P(14, 'thickens') + 0.4);
    vesselBG(ctx, 'vessel', [70, 14, 40], [150, 40, 60]);
    const y0 = 1050, y1 = 1520;
    ctx.fillStyle = H.rgba(H.mix([240, 150, 140], [170, 60, 70], thick)); ctx.fillRect(0, y0, W, y1 - y0);
    flow(ctx, t, y0, y1, 9, 260 - 90 * thick, 1, [220, 50, 60], 7, thick * 7);
    vesselWalls(ctx, y0, y1, [200, 90, 110]);
    lpTag(ctx, 540, 470, 'OVAL', { k: BK(t, P(13, 'oval') - 0.12), font: FONT(120), h: 180, bg: '#fff3dc' });
    lpTag(ctx, 540, 640, 'BLOOD CELLS', { k: BK(t, P(13, 'cells') - 0.12), font: FONT(84), bg: CORAL, col: '#fff' });
    if (t > P(13, 'sliding') - 0.2) lpArrow(ctx, [180, 900], [540, 840], [900, 960], EI(t, P(13, 'sliding') - 0.1, P(13, 'along') + 0.2), [255, 236, 210], 22);
    const kt = BK(t, P(14, 'thickens') - 0.12);
    lpTag(ctx, 540, 800, 'THICK BLOOD', { k: kt, font: FONT(80), bg: INK, col: '#fff' });
    hexBadge(ctx, 880, 780, BK(t, P(14, 'thickens') + 0.15), true, 50);
  }
  // ---- G: the well, drinking 100 litres in 10 minutes ----
  function well(ctx, x, y, k) {
    // faceted stone trough full of water
    const w = 380, h = 130, r = H.rng(9);
    for (let i = 0; i < 6; i++) { const xa = x + i * w / 6, xb = xa + w / 6; tri2(ctx, [xa, y - h], [xb, y - h], [xa, y], H.rgba(H.mix([150, 130, 120], [200, 180, 160], r()))); tri2(ctx, [xb, y - h], [xb, y], [xa, y], H.rgba(H.mix([110, 90, 90], [150, 130, 120], r()))); }
    const lvl = 1 - 0.6 * k;
    for (let i = 0; i < 5; i++) { const xa = x + 14 + i * (w - 28) / 5, xb = xa + (w - 28) / 5, yt = y - h + 10 + (1 - lvl) * 60; tri2(ctx, [xa, yt], [xb, yt], [xa, yt + 20], H.rgba(H.mix([120, 210, 255], [200, 240, 255], (i % 2) * 0.5))); tri2(ctx, [xb, yt], [xb, yt + 20], [xa, yt + 20], H.rgba(WATER)); }
  }
  function tank(ctx, x, y, w, h, frac, k) {
    if (k <= 0.01) return;
    ctx.save(); ctx.globalAlpha = k;
    tri2(ctx, [x, y], [x + w, y], [x, y + h], 'rgba(30,20,60,0.55)'); tri2(ctx, [x + w, y], [x + w, y + h], [x, y + h], 'rgba(30,20,60,0.55)');
    const fy = y + h * (1 - frac); tri2(ctx, [x, fy], [x + w, fy], [x, y + h], H.rgba([120, 210, 255])); tri2(ctx, [x + w, fy], [x + w, y + h], [x, y + h], H.rgba(WATER));
    ctx.restore();
  }
  function sceneWell(ctx, t) {
    desert(ctx, t, 'day');
    const drink = EI(t, P(16, 'drinks') - 0.3, P(16, 'drinks') + 0.4);
    const fill = EI(t, P(16, 'hundred') - 0.1, P(17, 'minutes') + 0.3);
    const o = { x: 300, y: SH, s: 0.85, hump: 0.7 + 0.3 * fill, water: 0.2 + 0.8 * fill, head: drink, walk: t < P(15, 'well') ? (t - CUT.well) * 0.9 : null };
    shadow(ctx, 340, SH, 330);
    well(ctx, 640, SH - 10, fill);
    drawCamel(ctx, o);
    lpTag(ctx, 540, 480, 'A WELL!', { k: BK(t, P(15, 'well') - 0.12) * (1 - EI(t, P(16, 'drinks') - 0.2, P(16, 'drinks') + 0.05)), font: FONT(116), h: 170, bg: '#7fd8ff' });
    const kn = BK(t, P(16, 'hundred') - 0.15);
    const n = Math.round(100 * EO(t, P(16, 'hundred') - 0.15, P(16, 'litres') + 0.1));
    bigNumber(ctx, 540, 560, n + ' L', 210, kn, '#bfe9ff');
    lpTag(ctx, 540, 680, 'IN 10 MINUTES', { k: BK(t, P(17, 'ten') - 0.12), font: FONT(84), bg: '#ffe27a' });
  }
  // ---- H: cells swell to twice their size without bursting ----
  function sceneSwell(ctx, t) {
    vesselBG(ctx, 'vessel2', [120, 30, 60], [240, 120, 120]);
    const y0 = 1060, y1 = 1580;
    ctx.fillStyle = H.rgba([250, 180, 170]); ctx.fillRect(0, y0, W, y1 - y0);
    // water gems flood in
    const r = H.rng(66);
    for (let i = 0; i < 18; i++) { const x = ((r() * (W + 200) + t * 320) % (W + 200)) - 100, y = H.lerp(y0 + 40, y1 - 40, r()); gem(ctx, x, y, 12, H.mix(WATER, [200, 240, 255], r() * 0.5), t * 2 + i); }
    const sw = 1 + EI(t, P(18, 'swell') - 0.1, P(18, 'twice') + 0.25);
    flow(ctx, t, y0, y1, 3, 90, 1, [210, 60, 70], 21);
    const pulse = 1 + 0.03 * Math.sin(t * 8) * (t > P(19, 'bursting') ? 1 : 0);
    cell(ctx, 540, 1320, 66 * sw * 1.35 * pulse, 40 * sw * 1.35 * pulse, [230, 60, 70], 0.05);
    vesselWalls(ctx, y0, y1, [210, 100, 120]);
    bigNumber(ctx, 540, 560, '2×', 220, BK(t, P(18, 'twice') - 0.12), '#ffd0c8');
    lpTag(ctx, 540, 660, 'BIGGER', { k: BK(t, P(18, 'size') - 0.12), font: FONT(84), bg: '#fff3dc' });
    hexBadge(ctx, 860, 840, BK(t, P(19, 'bursting') - 0.12), true, 58);
    lpTag(ctx, 540, 840, 'NO POP', { k: BK(t, P(19, 'without') - 0.12), font: FONT(110), h: 170, bg: MINT, col: '#fff' });
  }
  // ---- I: the question, dawn ----
  function sceneEnd(ctx, t) {
    desert(ctx, t, 'dawn');
    const o = { x: 400, y: SH, s: 0.9, hump: 1, fatX: 0 };
    shadow(ctx, 440, SH, 330); const c = drawCamel(ctx, o);
    const kq = BK(t, P(20, 'hump') - 0.12);
    if (kq > 0.01) { ctx.save(); ctx.translate(c.hump[0], c.hump[1] + 110); ctx.scale(kq, kq); ctx.font = FONT(170); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineWidth = 16; ctx.strokeStyle = INK; ctx.strokeText('?', 0, 0); ctx.fillStyle = '#fff'; ctx.fillText('?', 0, 0); ctx.restore(); }
    lpTag(ctx, 540, 390, 'YOUR HUMP:', { k: BK(t, P(20, 'had') - 0.12), font: FONT(100), h: 160, bg: '#fff3dc' });
    lpTag(ctx, 540, 550, "WHAT'S INSIDE?", { k: BK(t, P(21, 'store') - 0.12), font: FONT(100), h: 160, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 690, 'TELL ME ↓', { k: BK(t, P(21, 'yours') - 0.05), font: FONT(64), bg: INK, col: '#fff' });
  }
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
    if (t < CUT.fuel) sceneHook(ctx, t);
    else if (t < CUT.cool) sceneFuel(ctx, t);
    else if (t < CUT.water) sceneCool(ctx, t);
    else if (t < CUT.blood) sceneWater(ctx, t);
    else if (t < CUT.well) sceneBlood(ctx, t);
    else if (t < CUT.swell) sceneWell(ctx, t);
    else if (t < CUT.end) sceneSwell(ctx, t);
    else sceneEnd(ctx, t);
  }
  function explainer(ctx, W_, H_, t) {
    ctx.save(); ctx.lineJoin = 'round';
    let wipe = null;
    for (const c of CUTS) if (t >= c && t < c + WIPE) wipe = c;
    if (wipe != null) {
      scene(ctx, wipe - 0.001);
      if (!LAYER) LAYER = H.layer(W, HH);
      const lc = LAYER.getContext('2d'); lc.setTransform(1, 0, 0, 1, 0, 0); lc.clearRect(0, 0, W, HH); lc.lineJoin = 'round'; scene(lc, t);
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
      for (const [f, a] of flashes) { ctx.fillStyle = `rgba(255,226,190,${a * 0.7})`; ctx.beginPath(); ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath(); ctx.fill(); }
    } else scene(ctx, t);
    header(ctx, t);
    ctx.restore();
  }
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    desert(ctx, 0, 'dawn');
    shadow(ctx, 440, SH, 330); drawCamel(ctx, { x: 400, y: SH, s: 0.9, hump: 1, fatX: 1 });
    lpTag(ctx, 540, 420, 'NOT WATER', { font: FONT(120), h: 190, bg: CORAL, col: '#fff' });
    bigNumber(ctx, 540, 700, '35 KG FAT', 150, 1, '#ffe27a');
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, desert wind, sand steps, blood-flow whoosh ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g = 1, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const wind = (t0, t1, seed) => { const r = H.rng(seed); for (let t = t0; t < t1; t += r.range(0.9, 1.5)) k.noise(t, { dur: 1.2, color: 'pink', filter: 'bandpass', f: r.range(300, 600), q: 0.8, gain: 0.03, a: 0.5, pan: r.range(-0.6, 0.6), minor: true }); };
    const steps = (t0, t1, rate) => { for (let t = t0; t < t1; t += 1 / rate) k.noise(t, { dur: 0.12, color: 'brown', filter: 'lowpass', f: 700, gain: 0.08, a: 0.005, minor: true }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const ribbon = (t, p = 0) => k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.06, a: 0.25, pan: p, minor: true });
    const pulse = (t0, t1) => { for (let t = t0; t < t1; t += 0.8) { k.play('thud', t, { f: 70, gain: 0.3, minor: true }); k.play('thud', t + 0.22, { f: 60, gain: 0.2, minor: true }); } };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 92, gain: 0.22, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    // A
    wind(0, CUT.fuel, 3); glass(0.2, 'D4', 1.1, 0, 1.4);
    k.play('impact', P(0, 'n35') - 0.08, { gain: 0.8 }); glass(P(0, 'n35'), 'A4', 1, 0, 1.1);
    facet(P(0, 'fat') - 0.12, 560); ribbon(P(0, 'fat') - 0.1, 0.3); k.play('sparkle', P(0, 'fat'), { n: 4, gain: 0.4 });
    k.tone(P(1, 'drop') - 0.12, { f: [[0, 700], [0.12, 1300]], type: 'sine', dur: 0.15, gain: 0.08 });
    k.play('error', P(1, 'water') - 0.05, { f: 'G3', gain: 0.5 }); facet(P(1, 'water') - 0.12, 470);
    facet(P(2, 'heres') - 0.1, 470, 0.8);
    // B
    wipe(CUT.fuel); wind(CUT.fuel, CUT.cool, 9); steps(P(3, 'fat'), CUT.cool, 1.8);
    facet(P(3, 'food') - 0.12, 600); k.play('pop', P(3, 'backpack') - 0.1, { gain: 0.6, minor: true });
    facet(P(4, 'nothing') - 0.12, 470); k.play('error', P(4, 'eat') - 0.05, { f: 'F3', gain: 0.35 });
    k.play('riser', P(5, 'burns') - 0.2, { dur: 1.2, gain: 0.3 }); k.play('sparkle', P(5, 'burns'), { n: 6, gain: 0.4 });
    k.play('impact', P(5, 'energy') - 0.08, { gain: 0.6 }); glass(P(5, 'energy'), 'D5', 0.9, 0, 0.9);
    k.tone(P(6, 'shrinks') - 0.1, { f: [[0, 600], [0.6, 260]], type: 'triangle', dur: 0.65, gain: 0.06 });
    k.play('thud', P(6, 'flops') - 0.05, { f: 120, gain: 0.5 }); facet(P(6, 'flops') - 0.12, 520);
    // C
    wipe(CUT.cool); wind(CUT.cool, CUT.water, 15);
    facet(P(7, 'one') - 0.12, 600); ribbon(P(7, 'one') - 0.1, 0.2); glass(P(7, 'lump'), 'A4', 0.8, 0, 0.8);
    ribbon(P(8, 'lean') - 0.15, -0.4); ribbon(P(8, 'lean'), 0.4); facet(P(8, 'lean') - 0.12, 520);
    k.play('success', P(8, 'cool') - 0.05, { f: 'D5', gain: 0.4 }); facet(P(8, 'cool') - 0.12, 640);
    // D
    wipe(CUT.water); wind(CUT.water, CUT.blood, 21);
    facet(P(9, 'water') - 0.12, 560);
    for (let i = 0; i < 10; i++) k.tone(P(10, 'spread') + i * 0.12, { f: [[0, 500 + i * 40], [0.1, 900 + i * 40]], type: 'sine', dur: 0.12, gain: 0.04, minor: true });
    k.play('impact', P(11, 'quarter') - 0.08, { gain: 0.8 }); glass(P(11, 'quarter'), 'F#4', 1, 0, 1.0);
    k.tone(P(11, 'weight'), { f: [[0, 500], [1.2, 300]], type: 'triangle', dur: 1.2, gain: 0.05 });
    steps(P(12, 'keep'), CUT.blood, 2); k.play('success', P(12, 'walking'), { f: 'A4', gain: 0.4 });
    // E
    wipe(CUT.blood); k.tone(CUT.blood + 0.1, { f: 'D2', type: 'sine', dur: CUT.well - CUT.blood, gain: 0.05, a: 0.8 }); pulse(CUT.blood + 0.3, CUT.well - 0.3);
    facet(P(13, 'oval') - 0.12, 600); k.play('pop', P(13, 'cells') - 0.1, { gain: 0.6, minor: true });
    k.noise(P(13, 'sliding') - 0.1, { dur: 1.2, color: 'pink', filter: 'bandpass', f: [[0, 400], [1.2, 1100]], q: 1.4, gain: 0.06, a: 0.3 });
    k.tone(P(14, 'thickens') - 0.1, { f: [[0, 300], [0.8, 150]], type: 'triangle', dur: 0.8, gain: 0.06 }); k.play('success', P(14, 'thickens') + 0.15, { f: 'D5', gain: 0.35 });
    // F
    wipe(CUT.well); wind(CUT.well, CUT.swell, 27); steps(CUT.well, P(15, 'well'), 1.8);
    facet(P(15, 'well') - 0.12, 600); glass(P(15, 'well'), 'F#5', 0.7, 0.3, 0.8);
    for (let t = P(16, 'drinks'); t < CUT.swell - 0.2; t += 0.38) k.tone(t, { f: [[0, 260], [0.1, 420]], type: 'sine', dur: 0.12, gain: 0.04, minor: true });
    k.play('riser', P(16, 'hundred') - 0.6, { dur: 0.8, gain: 0.3 });
    k.play('impact', P(16, 'hundred') - 0.1, { gain: 1.0 }); ['D4', 'A4', 'D5', 'F#5'].forEach((n, i) => glass(P(16, 'litres') + i * 0.03, n, 1.1 - i * 0.2, (i - 1.5) * 0.25, 1.3));
    facet(P(17, 'ten') - 0.12, 640); k.play('click', P(17, 'minutes'), { gain: 0.6 });
    // G
    wipe(CUT.swell); pulse(CUT.swell + 0.2, CUT.end - 0.3);
    k.tone(P(18, 'swell') - 0.1, { f: [[0, 200], [0.9, 500]], type: 'triangle', dur: 0.9, gain: 0.07 });
    k.play('impact', P(18, 'twice') - 0.08, { gain: 0.8 }); glass(P(18, 'twice'), 'A4', 1, 0, 1);
    facet(P(18, 'size') - 0.12, 520);
    k.play('success', P(19, 'bursting') - 0.05, { f: 'D5', gain: 0.5 }); facet(P(19, 'without') - 0.12, 600);
    // H
    wipe(CUT.end); wind(CUT.end, D, 33);
    facet(P(20, 'had') - 0.12, 470); k.play('pop', P(20, 'hump') - 0.1, { gain: 0.7 });
    facet(P(21, 'store') - 0.12, 600); ['A4', 'D5'].forEach((n, i) => glass(P(21, 'yours') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(21, 'yours'), { f: 'D3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
