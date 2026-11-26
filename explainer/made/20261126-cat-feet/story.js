// ===== Kawaii Anime, vertical: "How does a cat always land on its feet?" =====
(function () {
  // ---------- Kawaii anime: clean warm-brown outlines, one cel-shadow tone, glossy anime eyes; golden-hour sky + cozy living room palette ----------
  window.FONT_SAMPLE = (window.FONT_SAMPLE || "") + "";
  const TAU = Math.PI * 2;
  const C = {
    plum: '#4a3328', dark: '#2b1b14',
    pink: '#ffc7c2', pinkS: '#f3a19a', pinkD: '#ff7f6e',
    mint: '#c9efd9', mintS: '#93d4b0', mintD: '#43b37c',
    butter: '#fff1a8', butterS: '#f3cf6b', butterD: '#ffcf3d',
    lav: '#dcd6ff', lavS: '#b3a8f0', lavD: '#7f72d9',
    sky: '#cbe9fb', skyS: '#93c9ee', skyD: '#3f93d6',
    cream: '#fff6e8', creamS: '#efdcc2',
    peach: '#ffe0c7', peachS: '#f2b88f', brown: '#c98a5c', brownS: '#a46a43',
    red: '#ff5f5f', white: '#ffffff',
  };
  const TH = {};
  const FONT = '"Fredoka"', KANA = '"Fredoka"';
  const q15 = (t) => Math.floor(t * 15 + 1e-6) / 15; // anime "on twos" at 30 fps


  // ---------- paths ----------
  const scaleOf = (ctx) => { const m = ctx.getTransform(); return Math.hypot(m.a, m.b) || 1; };
  const rrP = (x, y, w, h, r) => { const p = new Path2D(); p.roundRect(x, y, w, h, r); return p; };
  const ellP = (x, y, rx, ry, rot = 0) => { const p = new Path2D(); p.ellipse(x, y, rx, ry, rot, 0, TAU); return p; };
  function roundPoly(pts, rad) {
    const p = new Path2D(), n = pts.length, mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const s = mid(pts[n - 1], pts[0]); p.moveTo(s[0], s[1]);
    for (let i = 0; i < n; i++) { const c = pts[i], m = mid(c, pts[(i + 1) % n]); p.arcTo(c[0], c[1], m[0], m[1], rad); }
    p.closePath(); return p;
  }
  const starPts = (cx, cy, R, r, n = 5, rot = -Math.PI / 2) => {
    const out = [];
    for (let i = 0; i < n * 2; i++) { const a = rot + i * Math.PI / n, rr = i % 2 ? r : R; out.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); }
    return out;
  };
  const starP = (cx, cy, R, rot = -Math.PI / 2, ratio = 0.5, n = 5) => roundPoly(starPts(cx, cy, R, R * ratio, n, rot), R * 0.12);
  function heartP(cx, cy, s, rot = 0) {
    const p = new Path2D(), m = new DOMMatrix().translate(cx, cy).rotate(rot * 180 / Math.PI).scale(s, s), q = new Path2D();
    q.moveTo(0, 0.9);
    q.bezierCurveTo(-0.15, 0.75, -1, 0.3, -1, -0.25);
    q.bezierCurveTo(-1, -0.78, -0.35, -0.98, 0, -0.5);
    q.bezierCurveTo(0.35, -0.98, 1, -0.78, 1, -0.25);
    q.bezierCurveTo(1, 0.3, 0.15, 0.75, 0, 0.9);
    q.closePath(); p.addPath(q, m); return p;
  }
  function spark4P(cx, cy, R, rot = 0) {
    const p = new Path2D(), k = R * 0.16, pts = [[0, -R], [R, 0], [0, R], [-R, 0]], cs = [[k, -k], [k, k], [-k, k], [-k, -k]];
    const tr = ([x, y]) => [cx + x * Math.cos(rot) - y * Math.sin(rot), cy + x * Math.sin(rot) + y * Math.cos(rot)];
    const s0 = tr(pts[0]); p.moveTo(s0[0], s0[1]);
    for (let i = 0; i < 4; i++) { const c = tr(cs[i]), e = tr(pts[(i + 1) % 4]); p.quadraticCurveTo(c[0], c[1], e[0], e[1]); }
    p.closePath(); return p;
  }
  function cloudP(cx, cy, s) {
    const p = new Path2D();
    [[-70, 10, 42], [-30, -18, 52], [22, -26, 58], [70, 4, 44], [30, 22, 46], [-22, 24, 44]].forEach(([x, y, r]) => { p.moveTo(cx + (x + r) * s, cy + y * s); p.arc(cx + x * s, cy + y * s, r * s, 0, TAU); });
    return p;
  }

  // ---------- inking ----------
  function ol(ctx, p, w = 4.5, col = C.plum) { ctx.save(); ctx.lineWidth = (w * 1.3) / scaleOf(ctx); ctx.strokeStyle = col; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke(p); ctx.restore(); }
  // flat fill + ONE cel-shadow tone (light from top-left: the base is shifted up-left inside the shape, shade remains bottom-right)
  function cel(ctx, p, base, shade, dx = -8, dy = -8, w = 4.5) {
    ctx.save(); ctx.fillStyle = shade; ctx.fill(p); ctx.clip(p); ctx.translate(dx, dy); ctx.fillStyle = base; ctx.fill(p); ctx.restore();
    if (w) ol(ctx, p, w);
  }
  // union outline: outline every sub-shape, then fill them all (interior seams vanish)
  function union(ctx, paths, fill, w = 4.5) {
    ctx.save(); ctx.lineWidth = (2 * w) / scaleOf(ctx); ctx.strokeStyle = C.plum; ctx.lineJoin = 'round';
    paths.forEach((p) => ctx.stroke(p)); ctx.fillStyle = fill; paths.forEach((p) => ctx.fill(p)); ctx.restore();
  }
  function shine(ctx, x, y, rx, ry, rot = -0.6, a = 0.95) { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill(ellP(x, y, rx, ry, rot)); ctx.restore(); }

  // ---------- motion grammar ----------
  // bouncy pop: 0 -> overshoot -> settle, with squash & stretch
  function pop(t, t0, k = 1) {
    const u = t - t0;
    if (u <= 0) return { s: 0, sx: 0, sy: 0, u };
    const s = 1 - Math.exp(-9 * u) * Math.cos(18 * u), q = Math.exp(-8 * u) * Math.sin(18 * u) * 0.28 * k;
    return { s, sx: s * (1 + q), sy: s * (1 - q), u };
  }
  const popOut = (t, t1, d = 0.2) => 1 - H.clamp((t - t1) / d);
  function squash(t, tl, amp = 0.22) { const u = t - tl; if (u < 0) return [1, 1]; const q = Math.exp(-7 * u) * Math.cos(16 * u) * amp; return [1 + q, 1 - q]; }
  const bob = (t, ph = 0, a = 8) => Math.sin(t * TAU * 0.85 + ph) * a;

  // ---------- lettering: bold rounded type, colored outline, soft drop shadow ----------
  function kText(ctx, str, x, y, size, o = {}) {
    ctx.save();
    ctx.font = `${o.weight || 700} ${size}px ${o.font || FONT}`; ctx.textAlign = o.align || 'center'; ctx.textBaseline = 'alphabetic';
    ctx.lineJoin = 'round'; ctx.miterLimit = 2;
    const lw = size * (o.lw || 0.24);
    if (o.outer) { ctx.strokeStyle = o.outer; ctx.lineWidth = lw + size * (o.ow || 0.13); ctx.strokeText(str, x, y); }
    if (o.shadow !== false) { ctx.shadowColor = o.shadow || 'rgba(78,47,51,0.32)'; ctx.shadowBlur = size * 0.12; ctx.shadowOffsetY = size * 0.07; }
    ctx.strokeStyle = o.line || C.pinkD; ctx.lineWidth = lw; ctx.strokeText(str, x, y);
    ctx.shadowColor = 'transparent'; ctx.fillStyle = o.fill || C.white; ctx.fillText(str, x, y);
    ctx.restore();
  }
  // per-letter bounce-in (each glyph pops on its own, anchored at the baseline)
  function kWord(ctx, str, cx, y, size, t, t0, stg, o = {}) {
    ctx.save(); ctx.font = `${o.weight || 700} ${size}px ${o.font || FONT}`;
    const ws = [...str].map((c) => ctx.measureText(c).width), tot = ws.reduce((a, b) => a + b, 0) + (o.track || 0) * (str.length - 1);
    ctx.restore();
    let x = o.align === 'left' ? cx : cx - tot / 2;
    const fills = o.fills;
    [...str].forEach((c, i) => {
      const w = ws[i]; const p = pop(t, t0 + i * stg, 1.3);
      if (c !== ' ' && p.s > 0) {
        const hop = p.u < 0.25 ? -Math.sin((p.u / 0.25) * Math.PI) * size * 0.18 : 0;
        ctx.save(); ctx.translate(x + w / 2, y + hop); ctx.rotate((o.wob || 0) * Math.sin(t * 6 + i * 1.3)); ctx.scale(Math.min(p.sx, p.s, 1), p.sy);
        kText(ctx, c, 0, 0, size, { ...o, fill: fills ? fills[i % fills.length] : o.fill });
        ctx.restore();
      }
      x += w + (o.track || 0);
    });
    return tot;
  }
  function kana(ctx, str, x, y, size, rot, s, fill) {
    if (s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    kText(ctx, str, 0, 0, size, { font: FONT, weight: 700, fill, line: C.white, outer: C.plum, lw: 0.22 });
    ctx.restore();
  }

  // ---------- anime face parts ----------
  function eye(ctx, x, y, rx, ry, iris, kind = 'normal', side = 1, look = [0, 0]) {
    ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.dark;
    if (kind === 'happy' || kind === 'blink') {
      ctx.beginPath();
      if (kind === 'happy') { ctx.moveTo(-rx * 0.95, ry * 0.18); ctx.quadraticCurveTo(0, -ry * 0.85, rx * 0.95, ry * 0.18); }
      else { ctx.moveTo(-rx * 0.95, -ry * 0.05); ctx.quadraticCurveTo(0, ry * 0.45, rx * 0.95, -ry * 0.05); }
      ctx.lineWidth = rx * 0.32; ctx.stroke();
    } else if (kind === 'squeeze') {
      ctx.beginPath(); ctx.moveTo(-rx * 0.65 * side, -ry * 0.5); ctx.lineTo(rx * 0.6 * side, 0); ctx.lineTo(-rx * 0.65 * side, ry * 0.5);
      ctx.lineWidth = rx * 0.3; ctx.stroke();
    } else if (kind === 'swirl') {
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 5.2; a += 0.15) { const r = rx * 0.95 * a / (Math.PI * 5.2), px = Math.cos(a * side) * r, py = Math.sin(a * side) * r * ry / rx; a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
      ctx.lineWidth = rx * 0.17; ctx.stroke();
    } else if (kind === 'star') {
      const p = starP(0, 0, rx * 1.2, -Math.PI / 2, 0.5);
      ctx.fillStyle = C.butterD; ctx.fill(p); ctx.lineWidth = rx * 0.15; ctx.stroke(p);
      shine(ctx, -rx * 0.22, -rx * 0.28, rx * 0.2, rx * 0.14, -0.5, 1);
    } else if (kind === 'shock') {
      ctx.fillStyle = C.white; ctx.fill(ellP(0, 0, rx * 0.78, ry * 0.82)); ctx.lineWidth = rx * 0.14; ctx.stroke(ellP(0, 0, rx * 0.78, ry * 0.82));
      ctx.fillStyle = C.dark; ctx.fill(ellP(look[0] * rx * 0.2, look[1] * ry * 0.2, rx * 0.17, ry * 0.17));
    } else {
      // glossy anime eye: dark lid shape, gradient iris, big pupil, two white highlight dots, top lash
      const lx = look[0] * rx * 0.16, ly = look[1] * ry * 0.12;
      ctx.fillStyle = C.dark; ctx.fill(ellP(0, 0, rx, ry));
      const g = ctx.createLinearGradient(0, -ry, 0, ry);
      g.addColorStop(0, C.dark); g.addColorStop(0.42, H.rgba(H.mix(iris, C.dark, 0.35))); g.addColorStop(1, H.rgba(H.mix(iris, '#ffffff', 0.45)));
      ctx.fillStyle = g; ctx.fill(ellP(lx, ly + ry * 0.06, rx * 0.8, ry * 0.82));
      ctx.fillStyle = '#28142c'; ctx.fill(ellP(lx, ly + ry * 0.02, rx * 0.42, ry * 0.44));
      ctx.fillStyle = H.rgba(H.mix(iris, '#ffffff', 0.65), 0.9); ctx.fill(ellP(lx, ly + ry * 0.6, rx * 0.46, ry * 0.16));
      ctx.fillStyle = C.white;
      ctx.fill(ellP(lx - rx * 0.3, ly - ry * 0.36, rx * 0.34, ry * 0.28));
      ctx.fill(ellP(lx + rx * 0.34, ly + ry * 0.3, rx * 0.14, ry * 0.12));
      ctx.beginPath(); ctx.ellipse(0, 0, rx * 1.06, ry * 1.04, 0, Math.PI * 1.13, Math.PI * 1.87); ctx.lineWidth = rx * 0.22; ctx.stroke();
    }
    ctx.restore();
  }
  function mouth(ctx, x, y, w, kind = 'smile') {
    ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.dark; ctx.lineWidth = w * 0.26;
    const inner = '#b8456f';
    if (kind === 'w') { ctx.beginPath(); ctx.moveTo(-w, -w * 0.15); ctx.quadraticCurveTo(-w * 0.5, w * 0.75, 0, 0); ctx.quadraticCurveTo(w * 0.5, w * 0.75, w, -w * 0.15); ctx.stroke(); }
    else if (kind === 'flat') { ctx.beginPath(); ctx.moveTo(-w * 0.5, 0); ctx.lineTo(w * 0.5, 0); ctx.stroke(); }
    else if (kind === 'wobble') { ctx.beginPath(); ctx.moveTo(-w, 0); for (let i = 1; i <= 4; i++) ctx.quadraticCurveTo(-w + (i - 0.5) * w / 2, (i % 2 ? -1 : 1) * w * 0.4, -w + i * w / 2, 0); ctx.stroke(); }
    else if (kind === 'o' || kind === 'O') {
      const k = kind === 'O' ? 0.8 : 0.5, p = ellP(0, 0, w * k, w * k * 1.15);
      ctx.fillStyle = inner; ctx.fill(p); ctx.save(); ctx.clip(p); ctx.fillStyle = '#ff8fab'; ctx.fill(ellP(0, w * k * 0.9, w * k * 0.7, w * k * 0.5)); ctx.restore(); ctx.lineWidth = w * 0.22; ctx.stroke(p);
    } else { // open smile with tongue
      const p = new Path2D(); p.moveTo(-w, -w * 0.2); p.quadraticCurveTo(0, w * 1.7, w, -w * 0.2); p.closePath();
      ctx.fillStyle = inner; ctx.fill(p); ctx.save(); ctx.clip(p); ctx.fillStyle = '#ff8fab'; ctx.fill(ellP(0, w * 0.85, w * 0.6, w * 0.42)); ctx.restore(); ctx.lineWidth = w * 0.22; ctx.stroke(p);
    }
    ctx.restore();
  }
  function blush(ctx, x, y, rx, ry) {
    ctx.save(); ctx.fillStyle = 'rgba(255,135,170,0.55)'; ctx.fill(ellP(x, y, rx, ry));
    ctx.strokeStyle = 'rgba(255,95,145,0.85)'; ctx.lineWidth = rx * 0.13; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = -1; i <= 1; i++) { ctx.moveTo(x + i * rx * 0.45 - rx * 0.1, y + ry * 0.35); ctx.lineTo(x + i * rx * 0.45 + rx * 0.1, y - ry * 0.35); }
    ctx.stroke(); ctx.restore();
  }

  // ---------- props / emotes ----------
  function tag(ctx, x, y, label, fill, flip = 1, size = 28) {
    ctx.save(); ctx.translate(x, y); ctx.scale(flip, 1);
    ctx.font = `700 ${size}px ${FONT}`; const w = Math.max(ctx.measureText(label).width + size * 1.1, size * 1.6), h = size * 1.5;
    cel(ctx, rrP(-w / 2, -h / 2, w, h, h / 2), fill, H.rgba(H.mix(fill, C.plum, 0.15)), -3, -3, 3.5);
    ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 2);
    ctx.restore();
  }
  function bubble(ctx, x, y, w, h, tail, s = [1, 1], fill = C.white) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s[0], s[1]);
    const p = rrP(-w / 2, -h / 2, w, h, h * 0.46), tx = tail[0] - x, ty = tail[1] - y;
    const bx = H.clamp(tx * 0.45, -w / 2 + 34, w / 2 - 34), tp = new Path2D();
    tp.moveTo(bx - 24, h / 2 - 8); tp.quadraticCurveTo(bx - 6, (h / 2 + ty) / 2 + 4, tx, ty); tp.quadraticCurveTo(bx + 4, (h / 2 + ty) / 2 - 6, bx + 22, h / 2 - 8); tp.closePath();
    union(ctx, [p, tp], fill);
    ctx.restore();
  }
  function thought(ctx, x, y, s, tail, dots, tq) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    union(ctx, [cloudP(0, 0, 1.05)], C.white);
    const [tx, ty] = [(tail[0] - x) / s, (tail[1] - y) / s];
    union(ctx, [ellP(tx * 0.55, ty * 0.55 + 20, 16, 14)], C.white); union(ctx, [ellP(tx * 0.85, ty * 0.85, 10, 9)], C.white);
    for (let i = 0; i < dots; i++) { ctx.fillStyle = C.plum; ctx.fill(ellP(-34 + i * 34, 4 + Math.sin(tq * 8 + i) * 3, 9, 9)); }
    ctx.restore();
  }
  function sweat(ctx, x, y, s, rot = 0.25) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -30); p.bezierCurveTo(8, -12, 20, 2, 20, 14); p.arc(0, 14, 20, 0, Math.PI); p.bezierCurveTo(-20, 2, -8, -12, 0, -30); p.closePath();
    cel(ctx, p, C.sky, C.skyS, -4, -4, 4); shine(ctx, -6, 12, 4, 7, 0.3);
    ctx.restore();
  }
  function vein(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = C.red; ctx.lineCap = 'round'; ctx.lineWidth = 7;
    for (let i = 0; i < 4; i++) { ctx.save(); ctx.rotate(i * Math.PI / 2 + Math.PI / 4); ctx.beginPath(); ctx.moveTo(-14, -6); ctx.quadraticCurveTo(-6, -6, -6, -14); ctx.translate(0, 0); ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }
  function sparkle(ctx, x, y, R, fill = C.white, rot = 0, w = 3.5) { const p = spark4P(x, y, R, rot); ctx.fillStyle = fill; ctx.fill(p); if (w) ol(ctx, p, w); }
  function heart(ctx, x, y, s, fill = C.pinkD, rot = 0) { cel(ctx, heartP(x, y, s, rot), fill, H.rgba(H.mix(fill, C.plum, 0.25)), -s * 0.12, -s * 0.12, 3.5); shine(ctx, x - s * 0.45, y - s * 0.35, s * 0.18, s * 0.12, -0.6); }
  function impactLines(ctx, x, y, r0, t, t0, n = 8, col = C.plum) {
    const u = (t - t0) / 0.3; if (u < 0 || u > 1) return;
    ctx.save(); ctx.strokeStyle = col; ctx.lineCap = 'round'; ctx.lineWidth = 6; ctx.globalAlpha = 1 - u * 0.6; ctx.beginPath();
    for (let i = 0; i < n; i++) { const a = i / n * TAU + 0.3, a0 = r0 + u * 30, a1 = r0 + 24 + u * 46; ctx.moveTo(x + Math.cos(a) * a0, y + Math.sin(a) * a0); ctx.lineTo(x + Math.cos(a) * a1, y + Math.sin(a) * a1); }
    ctx.stroke(); ctx.restore();
  }
  function confetti(ctx, t, t0, x, y, n, seed, spread = 1) {
    const tau = t - t0; if (tau < 0 || tau > 2.4) return;
    const r = H.rng(seed), cols = [C.pinkD, C.mintD, C.butterD, C.skyD, C.lavD, C.pink];
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (r() - 0.5) * 2.6 * spread, v = r.range(380, 820), rs = r.range(-8, 8), c = cols[i % cols.length], kind = i % 4, sz = r.range(9, 15);
      const px = x + Math.cos(a) * v * tau * 0.8, py = y + Math.sin(a) * v * tau * 0.8 + 520 * tau * tau;
      if (py > 1900) continue;
      ctx.save(); ctx.translate(px, py); ctx.rotate(rs * tau); ctx.scale(1, Math.cos(tau * 9 + i));
      if (kind === 0) { ctx.fillStyle = c; ctx.fill(rrP(-sz * 0.6, -sz * 0.35, sz * 1.2, sz * 0.7, 3)); }
      else if (kind === 1) { ctx.fillStyle = c; ctx.fill(ellP(0, 0, sz * 0.45, sz * 0.45)); }
      else if (kind === 2) { ctx.fillStyle = c; ctx.fill(starP(0, 0, sz * 0.7)); }
      else { ctx.fillStyle = c; ctx.fill(heartP(0, 0, sz * 0.5)); }
      ctx.restore();
    }
  }
  // dotted connector that draws on, chunky rounded arrowhead at the tip
  const bez = (p0, p1, p2, p3, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const u = i / n, v = 1 - u; return [v * v * v * p0[0] + 3 * v * v * u * p1[0] + 3 * v * u * u * p2[0] + u * u * u * p3[0], v * v * v * p0[1] + 3 * v * v * u * p1[1] + 3 * v * u * u * p2[1] + u * u * u * p3[1]]; });
  const arcPts = (cx, cy, r, a0, a1, n = 50) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; });
  function along(pts, d) {
    let acc = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (acc + l >= d) { const u = (d - acc) / l; return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * u, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * u, Math.atan2(pts[i][1] - pts[i - 1][1], pts[i][0] - pts[i - 1][0])]; } acc += l; }
    const a = pts[pts.length - 1], b = pts[pts.length - 2]; return [a[0], a[1], Math.atan2(a[1] - b[1], a[0] - b[0])];
  }
  const plen = (pts) => pts.reduce((s, p, i) => (i ? s + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0), 0);
  function dotted(ctx, pts, prog, col, r = 6, gap = 22, head = 1) {
    if (prog <= 0) return;
    const L = plen(pts) * prog;
    for (let d = 0; d < L - (head ? 16 : 0); d += gap) { const [x, y] = along(pts, d); ctx.fillStyle = col; ctx.fill(ellP(x, y, r, r)); }
    if (head) {
      const [x, y, a] = along(pts, L), s = 20 * head;
      ctx.save(); ctx.translate(x, y); ctx.rotate(a);
      const p = roundPoly([[s * 0.9, 0], [-s * 0.6, -s * 0.85], [-s * 0.6, s * 0.85]], s * 0.25);
      cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.25)), -2, -2, 4); ctx.restore();
    }
  }

  // ---------- backgrounds: soft pastel with simple patterns ----------
  function bg(ctx, W, H_, t, th, seed = 1) {
    ctx.fillStyle = th.base; ctx.fillRect(0, 0, W, H_);
    const r = H.rng(seed);
    // big soft clouds (no outline) drifting
    ctx.save(); ctx.globalAlpha = th.kind === 'clouds' ? 0.95 : 0.7; ctx.fillStyle = C.white;
    const nc = th.kind === 'clouds' ? 6 : 3;
    for (let i = 0; i < nc; i++) { const s = r.range(0.9, 1.6), x = ((r.range(0, W + 300) + t * r.range(8, 16)) % (W + 300)) - 150, y = r.range(60, H_ - 40); ctx.fill(cloudP(x, y, s)); }
    ctx.restore();
    const sx = 66, sy = 48, ox = (t * 12) % (sx * 2), oy = (t * 7) % (sy * 2);
    for (let j = -2; j < H_ / sy + 2; j++) for (let i = -2; i < W / sx + 2; i++) {
      const x = i * sx + (j & 1 ? sx / 2 : 0) + ox, y = j * sy + oy;
      if ((j & 1) && th.kind !== 'dots' && th.kind !== 'clouds') {
        ctx.fillStyle = th.acc;
        if (th.kind === 'stars') ctx.fill(starP(x, y, 10, -Math.PI / 2 + (i + j) * 0.3));
        else ctx.fill(heartP(x, y, 9));
      } else { ctx.fillStyle = th.dot; ctx.fill(ellP(x, y, 8, 8)); }
    }
  }
  function twinkles(ctx, W, H_, t, seed, n = 9, avoid) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x = r.range(40, W - 40), y = r.range(40, H_ - 40), R = r.range(9, 18), ph = r() * TAU, sp = r.range(2.5, 4.5);
      if (avoid && avoid(x, y)) continue;
      const k = Math.max(0, Math.sin(t * sp + ph)); if (k < 0.1) continue;
      sparkle(ctx, x, y, R * (0.4 + 0.6 * k), i % 3 ? C.white : C.butter, 0, 0);
    }
  }
  // star / heart iris wipe with a thick candy rim
  function wipe(ctx, W, H_, u, shape, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), rot = -Math.PI / 2 + u * 0.9;
    const p = shape === 'heart' ? heartP(cx, cy, 1900 * e * e + 4, 0) : starP(cx, cy, 1800 * e * e + 4, rot, 0.52);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.lineJoin = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = shape === 'heart' ? C.pink : C.butter; ctx.lineWidth = 24; ctx.stroke(p);
    ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.globalAlpha = 0.8; ctx.stroke(p); ctx.restore();
  }



  // ---------- format ----------
  const W = 1080, HH = 1920;
  const P_ = [{"s":0.25,"e":5.26,"text":"Your cat can do a flip that baffled scientists in 1894.","words":[["your",0.25],["cat",0.71],["can",1.05],["do",1.39],["a",1.62],["flip",1.73],["that",2.18],["baffled",2.64],["scientists",3.44],["in",4.57],["1894",4.8]]},{"s":5.63,"e":8.48,"text":"Falling upside down, with nothing to push against,","words":[["falling",5.63],["upside",6.12],["down",6.53],["with",6.81],["nothing",7.09],["to",7.57],["push",7.71],["against",7.99]]},{"s":8.75,"e":9.86,"text":"it still turns over.","words":[["it",8.75],["still",8.89],["turns",9.23],["over",9.58]]},{"s":10.24,"e":10.83,"text":"So how?","words":[["so",10.24],["how",10.48]]},{"s":11.32,"e":14.12,"text":"First, its inner ear senses which way is down.","words":[["first",11.32],["its",11.7],["inner",11.94],["ear",12.33],["senses",12.56],["which",13.03],["way",13.42],["is",13.65],["down",13.8]]},{"s":14.5,"e":16.02,"text":"Then it bends in the middle,","words":[["then",14.5],["it",14.78],["bends",14.91],["in",15.26],["the",15.4],["middle",15.6]]},{"s":16.1,"e":17.51,"text":"like two cats glued together.","words":[["like",16.1],["two",16.33],["cats",16.51],["glued",16.74],["together",17.04]]},{"s":17.9,"e":19.17,"text":"It tucks its front legs in,","words":[["it",17.9],["tucks",18.02],["its",18.33],["front",18.51],["legs",18.81],["in",19.05]]},{"s":19.51,"e":21.18,"text":"so the front half spins fast,","words":[["so",19.51],["the",19.66],["front",19.88],["half",20.24],["spins",20.53],["fast",20.89]]},{"s":21.54,"e":23.74,"text":"while the stretched back legs barely turn.","words":[["while",21.54],["the",21.86],["stretched",22.05],["back",22.61],["legs",22.86],["barely",23.11],["turn",23.49]]},{"s":24.14,"e":24.94,"text":"Then it swaps,","words":[["then",24.14],["it",24.43],["swaps",24.58]]},{"s":25.23,"e":26.71,"text":"and the back half catches up.","words":[["and",25.23],["the",25.42],["back",25.62],["half",25.87],["catches",26.13],["up",26.58]]},{"s":27.09,"e":30.15,"text":"A bendy spine and a loose collarbone make it possible,","words":[["a",27.09],["bendy",27.16],["spine",27.51],["and",27.86],["a",28.07],["loose",28.14],["collarbone",28.48],["make",29.18],["it",29.46],["possible",29.6]]},{"s":30.58,"e":31.68,"text":"all in under a second.","words":[["all",30.58],["in",30.78],["under",30.91],["a",31.23],["second",31.3]]},{"s":32.13,"e":34.2,"text":"Kittens master it by about seven weeks.","words":[["kittens",32.13],["master",32.58],["it",32.97],["by",33.1],["about",33.23],["seven",33.55],["weeks",33.87]]},{"s":34.67,"e":37.04,"text":"So, have you ever seen your cat pull off the flip?","words":[["so",34.67],["have",34.8],["you",35.05],["ever",35.23],["seen",35.48],["your",35.73],["cat",35.98],["pull",36.17],["off",36.42],["the",36.61],["flip",36.79]]}];

  const BEATS = [
    { id: 'hook', s: 0, e: P_[0].e, on: 'FULL FRAME at 0 s: big chibi orange tabby falling through a golden-hour sky + THE IMPOSSIBLE FLIP; cat spins on "flip"; 1894 film strip + puzzled scientist' },
    { id: 'upside', s: P_[1].s, e: P_[3].e, on: 'cat (front view) upside down falling, NOTHING TO PUSH ON, flips upright on "turns over", HOW?' },
    { id: 'ear', s: P_[4].s, e: P_[4].e, on: 'big head close-up, inner-ear bubble with a level bubble, DOWN arrow' },
    { id: 'bend', s: P_[5].s, e: P_[6].e, on: 'side view: cat bends into a V, then splits into two half-cats with a glue tube' },
    { id: 'front', s: P_[7].s, e: P_[9].e, on: 'front view: front legs tuck, front half spins fast, stretched back legs barely turn' },
    { id: 'swap', s: P_[10].s, e: P_[11].e, on: 'SWAP: back legs tuck, back half catches up, lands upright' },
    { id: 'body', s: P_[12].s, e: P_[13].e, on: 'x-ray: bendy bead spine wiggles, loose collarbone wobbles, < 1 SECOND stopwatch' },
    { id: 'kitten', s: P_[14].s, e: P_[14].e, on: 'kitten flips onto a cushion, 7 WEEKS calendar' },
    { id: 'end', s: P_[15].s, e: P_[15].e, on: 'cat lands on the sofa, SEEN IT? + comment tag (loops back to the hook)' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter, out) => { let p = pop(t, t0); if (p.s <= 0) return; if (out != null) { const k = popOut(t, out); if (k <= 0) return; p = { s: p.s * k, sx: p.sx * k, sy: p.sy * k }; } ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  function qmark(ctx, x, y, sz, t, t0, ph = 0) {
    const p = pop(t, t0, 1.4); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + ph)); ctx.scale(p.sx, p.sy);
    kText(ctx, '?', 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore();
  }
  const seg = (t, a, b) => H.ease.inOut(H.clamp((t - a) / (b - a)));

  // ---------- palette ----------
  const TAB = { b: '#f7a65a', s: '#d9813a', st: '#c0652a', cr: '#fff3df', crS: '#f0d6b4', iris: '#6cc46a' };
  const GREY = { b: '#b9c2d6', s: '#8f9ab5', st: '#6f7a96', cr: '#f7f7fb', crS: '#dcdfe9', iris: '#5aa9ea' };
  const SEPIA = { b: '#c9a27a', s: '#a7825c', st: '#7d5d40', cr: '#f1e2c8', crS: '#d8c3a0', iris: '#7d5d40' };

  // ---------- backgrounds ----------
  // golden-hour sky; clouds stream upward = the camera falls with the cat
  function skyBg(ctx, t, fall = 1, seed = 1, top = '#8fcdf0', bot = '#ffdcbc') {
    const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, top); g.addColorStop(0.62, '#cfe9f7'); g.addColorStop(1, bot);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.fillStyle = 'rgba(255,240,200,0.55)'; ctx.fill(ellP(880, 1500, 260, 260)); ctx.fillStyle = 'rgba(255,248,225,0.8)'; ctx.fill(ellP(880, 1500, 170, 170)); ctx.restore();
    const r = H.rng(seed);
    for (let i = 0; i < 7; i++) {
      const s = r.range(1.1, 2.2), x = r.range(-60, W + 60), sp = r.range(500, 900) * fall, y0 = r.range(0, HH + 600);
      const y = ((y0 - t * sp) % (HH + 600) + (HH + 600)) % (HH + 600) - 300;
      ctx.save(); ctx.globalAlpha = 0.9; ctx.fillStyle = C.white; ctx.fill(cloudP(x, y, s)); ctx.globalAlpha = 0.45; ctx.fillStyle = '#e3f1fb'; ctx.fill(cloudP(x + 10 * s, y + 18 * s, s * 0.8)); ctx.restore();
    }
    // anime speed streaks
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineCap = 'round';
    for (let i = 0; i < 18; i++) {
      const x = r.range(30, W - 30), len = r.range(120, 320), sp = r.range(1400, 2200) * fall, y0 = r.range(0, HH + 400);
      const y = ((y0 - t * sp) % (HH + 400) + (HH + 400)) % (HH + 400) - 200;
      ctx.lineWidth = r.range(4, 9); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + len * fall); ctx.stroke();
    }
    ctx.restore();
  }
  function paperBg(ctx, t, base, line, seed, kind = 'grid') {
    ctx.fillStyle = base; ctx.fillRect(0, 0, W, HH);
    const r = H.rng(seed);
    ctx.save(); ctx.strokeStyle = line; ctx.fillStyle = line;
    if (kind === 'grid') { ctx.lineWidth = 3; const o = (t * 14) % 80; ctx.beginPath(); for (let x = -80 + o; x < W + 80; x += 80) { ctx.moveTo(x, 0); ctx.lineTo(x, HH); } for (let y = -80 + o; y < HH + 80; y += 80) { ctx.moveTo(0, y); ctx.lineTo(W, y); } ctx.stroke(); }
    else if (kind === 'paws') { for (let j = 0; j < 14; j++) for (let i = 0; i < 6; i++) { const x = i * 200 + (j & 1) * 100 + 40, y = j * 150 + ((t * 18) % 150) - 80; ctx.save(); ctx.translate(x, y); ctx.rotate(0.3 * ((i + j) % 3 - 1)); ctx.fill(pawP(0, 0, 0.32)); ctx.restore(); } }
    else if (kind === 'rays') { ctx.save(); ctx.translate(540, 1000); ctx.rotate(t * 0.15); for (let i = 0; i < 16; i++) { ctx.rotate(TAU / 16); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(1600, -180); ctx.lineTo(1600, 180); ctx.closePath(); if (i % 2) ctx.fill(); } ctx.restore(); }
    ctx.restore();
    twinkles(ctx, W, HH, t, seed + 3, 10, (x, y) => y > 600 && y < 1500 && x > 150 && x < 930);
  }
  function room(ctx, t, seed, wall = '#ffe9d2', stripe = '#ffdcbc') {
    ctx.fillStyle = wall; ctx.fillRect(0, 0, W, HH);
    ctx.fillStyle = stripe; for (let x = 0; x < W; x += 120) ctx.fillRect(x, 0, 60, 1500);
    // window with evening sky
    const win = rrP(600, 260, 380, 520, 40);
    ctx.save(); ctx.clip(win); const g = ctx.createLinearGradient(0, 260, 0, 780); g.addColorStop(0, '#9fd3f2'); g.addColorStop(1, '#ffd2b0'); ctx.fillStyle = g; ctx.fillRect(600, 260, 380, 520);
    ctx.fillStyle = C.white; ctx.fill(cloudP(700 + Math.sin(t * 0.3) * 20, 420, 0.7)); ctx.restore();
    ol(ctx, win, 6); ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(790, 260); ctx.lineTo(790, 780); ctx.moveTo(600, 520); ctx.lineTo(980, 520); ctx.stroke(); ctx.restore();
    // plant
    cel(ctx, rrP(120, 640, 150, 150, 30), '#f3a37b', '#d9805a', -4, -6, 5);
    [[-0.6, 1], [0, 1.15], [0.6, 1]].forEach(([a, k]) => { ctx.save(); ctx.translate(195, 650); ctx.rotate(a + Math.sin(t * 1.4 + a) * 0.04); cel(ctx, ellP(0, -90 * k, 40, 95 * k), '#8fd6a5', '#5fb47f', -4, -4, 5); ctx.restore(); });
    // floor
    cel(ctx, rrP(-40, 1500, W + 80, 500, 0), '#e6b88e', '#cf9b6e', 0, -14, 6);
  }
  function pawP(cx, cy, s) {
    const p = new Path2D();
    p.addPath(ellP(cx, cy + 40 * s, 70 * s, 58 * s));
    [[-72, -30], [-26, -70], [26, -70], [72, -30]].forEach(([x, y]) => p.addPath(ellP(cx + x * s, cy + y * s, 26 * s, 32 * s)));
    return p;
  }
  function pawWipe(ctx, W_, H_, u, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), s = 18 * e * e + 0.01;
    const p = pawP(cx, cy, s);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.lineJoin = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.stroke(p); ctx.strokeStyle = C.pink; ctx.lineWidth = 20; ctx.stroke(p); ctx.restore();
  }

  // ---------- the cat, seen head-on (the spine points at the camera, so a roll is an in-plane rotation) ----------
  function leg(ctx, x0, y0, ang, len, pal, beans) {
    ctx.save(); ctx.translate(x0, y0); ctx.rotate(ang);
    cel(ctx, rrP(-24, -10, 48, len + 10, 24), pal.b, pal.s, -5, -5, 4.5);
    cel(ctx, ellP(0, len, 30, 24), pal.cr, pal.crS, -3, -3, 4.5);
    if (beans) { ctx.fillStyle = '#ff9fb0'; ctx.fill(ellP(0, len + 4, 11, 8)); [-14, 0, 14].forEach((dx) => ctx.fill(ellP(dx, len - 12, 5, 5))); }
    ctx.restore();
  }
  function catHead(ctx, pal, o = {}) {
    const k = o.kitten ? 1.12 : 1;
    ctx.save(); ctx.scale(k, k);
    // ears
    [-1, 1].forEach((sd) => { const e = roundPoly([[sd * 38, -140], [sd * 98, -205 + (o.earDrop || 0) * sd * sd], [sd * 104, -110]], 14); cel(ctx, e, pal.b, pal.s, -4, -4, 4.5); ctx.save(); ctx.clip(e); ctx.fillStyle = '#ffb4b4'; ctx.fill(roundPoly([[sd * 56, -138], [sd * 92, -186], [sd * 94, -122]], 8)); ctx.restore(); });
    const hp = ellP(0, -85, 112, 94);
    cel(ctx, hp, pal.b, pal.s, -7, -7, 5);
    ctx.save(); ctx.clip(hp);
    ctx.fillStyle = pal.st; [-28, 0, 28].forEach((dx, i) => { ctx.fill(roundPoly([[dx - 9, -182], [dx + 9, -182], [dx, -140 + (i === 1 ? 10 : 0)]], 4)); });
    [-1, 1].forEach((sd) => { ctx.fill(roundPoly([[sd * 112, -100], [sd * 112, -84], [sd * 82, -92]], 3)); ctx.fill(roundPoly([[sd * 112, -72], [sd * 112, -58], [sd * 86, -66]], 3)); });
    ctx.fillStyle = pal.cr; ctx.fill(ellP(0, -42, 62, 40));
    ctx.restore();
    eye(ctx, -46, -92, 26, 32, pal.iris, o.eyes || 'normal', -1, o.look || [0, 0]);
    eye(ctx, 46, -92, 26, 32, pal.iris, o.eyes || 'normal', 1, o.look || [0, 0]);
    blush(ctx, -78, -52, 20, 11); blush(ctx, 78, -52, 20, 11);
    ctx.fillStyle = '#ff8fa0'; ctx.fill(roundPoly([[-11, -60], [11, -60], [0, -48]], 4)); ol(ctx, roundPoly([[-11, -60], [11, -60], [0, -48]], 4), 2.5);
    mouth(ctx, 0, -38, 16, o.mouth || 'w');
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 3.5; ctx.lineCap = 'round'; ctx.beginPath();
    [-1, 1].forEach((sd) => { ctx.moveTo(sd * 60, -46); ctx.lineTo(sd * 128, -60); ctx.moveTo(sd * 60, -36); ctx.lineTo(sd * 130, -34); });
    ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  // o: aF, aB (roll of each half), tuckF, tuckB (0 stretched .. 1 tucked), eyes, mouth, look, pal, t, glowF/glowB
  function catFront(ctx, x, y, s, o = {}) {
    const pal = o.pal || TAB, t = o.t || 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.sx || 1), s * (o.sy || 1));
    // back half: hips, back legs, tail (behind)
    ctx.save(); ctx.rotate(o.aB || 0);
    const tb = o.tuckB || 0, Lb = H.lerp(130, 50, tb);
    const tw = Math.sin(t * 5) * 12;
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const tail = new Path2D(); tail.moveTo(30, 110); tail.bezierCurveTo(130, 170, 190 + tw, 90, 150 + tw, 10);
    ctx.strokeStyle = C.plum; ctx.lineWidth = 46; ctx.stroke(tail); ctx.strokeStyle = pal.b; ctx.lineWidth = 34; ctx.stroke(tail);
    ctx.fillStyle = pal.st; ctx.fill(ellP(150 + tw, 18, 18, 14)); ctx.restore();
    [-1, 1].forEach((sd) => leg(ctx, sd * 52, 95, sd * H.lerp(0.45, 0.12, tb), Lb, pal, false));
    if (o.glowB) { ctx.save(); ctx.globalAlpha = o.glowB; ctx.fillStyle = C.butter; ctx.fill(ellP(0, 60, 130, 110)); ctx.restore(); }
    cel(ctx, ellP(0, 62, 104, 84), pal.b, pal.s, -7, -7, 5);
    ctx.save(); ctx.clip(ellP(0, 62, 104, 84)); ctx.fillStyle = pal.st; [-60, 60].forEach((dx) => ctx.fill(ellP(dx, 70, 14, 40, dx > 0 ? -0.3 : 0.3))); ctx.restore();
    ctx.restore();
    // front half: chest, front legs, head
    ctx.save(); ctx.rotate(o.aF || 0);
    const tf = o.tuckF || 0, Lf = H.lerp(125, 38, tf);
    if (o.glowF) { ctx.save(); ctx.globalAlpha = o.glowF; ctx.fillStyle = C.butter; ctx.fill(ellP(0, -30, 160, 200)); ctx.restore(); }
    cel(ctx, ellP(0, 25, 90, 82), pal.b, pal.s, -7, -7, 5);
    ctx.fillStyle = pal.cr; ctx.fill(ellP(0, 40, 52, 54));
    [-1, 1].forEach((sd) => leg(ctx, sd * 44, 62, sd * H.lerp(0.32, -0.55, tf), Lf, pal, (o.aF || 0) > 2 && (o.aF || 0) < 4.3));
    catHead(ctx, pal, o);
    ctx.restore();
    ctx.restore();
  }
  // side view for the anatomy diagrams. o: bend, split, xray, t
  function catSide(ctx, x, y, s, o = {}) {
    const pal = o.pal || TAB, b = o.bend || 0, sp = o.split || 0, t = o.t || 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // back half
    ctx.save(); ctx.translate(-sp, 0); ctx.rotate(b);
    const tail = new Path2D(); tail.moveTo(-150, -10); tail.bezierCurveTo(-230, -30, -250 + Math.sin(t * 4) * 15, -150, -200, -200);
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 40; ctx.stroke(tail); ctx.strokeStyle = pal.b; ctx.lineWidth = 28; ctx.stroke(tail); ctx.restore();
    leg(ctx, -125, 40, 0.08, 105, pal); leg(ctx, -55, 45, -0.05, 100, pal);
    const hp = ellP(-80, 0, 96, 64); cel(ctx, hp, o.xray ? '#cfe6f7' : pal.b, o.xray ? '#a9cce8' : pal.s, -6, -6, 5);
    if (!o.xray) { ctx.save(); ctx.clip(hp); ctx.fillStyle = pal.st; [-120, -80, -40].forEach((dx) => ctx.fill(roundPoly([[dx - 12, -70], [dx + 12, -70], [dx, -20]], 4))); ctx.restore(); }
    ctx.restore();
    // front half
    ctx.save(); ctx.translate(sp, 0); ctx.rotate(-b);
    leg(ctx, 55, 45, 0.05, 100, pal); leg(ctx, 120, 40, -0.08, 105, pal);
    const cp = ellP(75, 0, 96, 62); cel(ctx, cp, o.xray ? '#cfe6f7' : pal.b, o.xray ? '#a9cce8' : pal.s, -6, -6, 5);
    if (!o.xray) { ctx.save(); ctx.clip(cp); ctx.fillStyle = pal.st; [40, 80].forEach((dx) => ctx.fill(roundPoly([[dx - 12, -70], [dx + 12, -70], [dx, -22]], 4))); ctx.fillStyle = pal.cr; ctx.fill(ellP(120, 30, 50, 34)); ctx.restore(); }
    // head (side)
    ctx.save(); ctx.translate(180, -70);
    cel(ctx, roundPoly([[-40, -60], [-20, -130], [20, -62]], 12), pal.b, pal.s, -3, -3, 4.5);
    cel(ctx, ellP(0, 0, 82, 70), pal.b, pal.s, -6, -6, 5);
    ctx.fillStyle = pal.cr; ctx.fill(ellP(48, 26, 40, 28));
    eye(ctx, 26, -8, 20, 26, pal.iris, o.eyes || 'normal', 1, [0.6, 0]);
    ctx.fillStyle = '#ff8fa0'; ctx.fill(ellP(80, 10, 9, 7));
    mouth(ctx, 66, 34, 11, o.mouth || 'w'); blush(ctx, 10, 28, 16, 9);
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }
  function scientist(ctx, x, y, s, t, eyes = 'swirl') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-110, 70, 220, 200, 70), '#5a6b8c', '#44526d', -6, -6, 5);
    ctx.fillStyle = C.white; ctx.fill(roundPoly([[-30, 72], [30, 72], [0, 130]], 6));
    cel(ctx, ellP(0, 0, 92, 96), '#ffe0c7', '#f2b88f', -6, -6, 5);
    cel(ctx, rrP(-70, -170, 140, 120, 14), '#3d3a48', '#2a2833', -5, -5, 5); cel(ctx, rrP(-110, -66, 220, 28, 14), '#3d3a48', '#2a2833', -4, -4, 5);
    eye(ctx, -32, -6, 17, 20, '#7d5d40', eyes, -1); eye(ctx, 32, -6, 17, 20, '#7d5d40', eyes, 1);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.stroke(ellP(-32, -6, 28, 28)); ctx.stroke(ellP(32, -6, 28, 28)); ctx.restore();
    const m = new Path2D(); m.moveTo(0, 30); m.bezierCurveTo(-30, 18, -60, 34, -70, 54); m.bezierCurveTo(-40, 44, -20, 48, 0, 42); m.bezierCurveTo(20, 48, 40, 44, 70, 54); m.bezierCurveTo(60, 34, 30, 18, 0, 30); cel(ctx, m, '#8a5a3c', '#6b4129', -2, -2, 3.5);
    ctx.restore();
  }
  function filmStrip(ctx, x, y, t, prog) {
    ctx.save(); ctx.translate(x, y);
    cel(ctx, rrP(-560, -110, 1120, 220, 18), '#3b2e2a', '#2b211e', 0, -4, 5);
    ctx.fillStyle = '#f1e2c8'; for (let i = -14; i < 14; i++) { ctx.fill(rrP(i * 40 + 8, -100, 22, 16, 4)); ctx.fill(rrP(i * 40 + 8, 84, 22, 16, 4)); }
    for (let i = 0; i < 5; i++) {
      const fx = -440 + i * 220; if (i / 5 > prog) continue;
      ctx.fillStyle = '#e8d5b2'; ctx.fill(rrP(fx - 92, -72, 184, 144, 10)); ol(ctx, rrP(fx - 92, -72, 184, 144, 10), 3);
      const a = Math.PI * (1 - i / 4), aB = Math.PI * (1 - Math.max(0, i - 1.5) / 2.5);
      catFront(ctx, fx, 14, 0.24, { pal: SEPIA, aF: a, aB: Math.max(0, aB), tuckF: i < 3 ? 1 : 0, tuckB: i >= 3 ? 1 : 0, eyes: 'normal', t });
    }
    ctx.restore();
  }
  function stopwatch(ctx, x, y, r, ang) {
    ctx.save(); ctx.translate(x, y);
    cel(ctx, rrP(-26, -r - 46, 52, 40, 10), '#ff9f8a', '#e57d68', -3, -3, 4.5);
    cel(ctx, ellP(0, 0, r, r), C.white, C.creamS, -8, -8, 6);
    ctx.fillStyle = 'rgba(255,127,110,0.35)'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r * 0.86, -Math.PI / 2, -Math.PI / 2 + ang); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 8; ctx.beginPath(); for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; ctx.moveTo(Math.cos(a) * r * 0.78, Math.sin(a) * r * 0.78); ctx.lineTo(Math.cos(a) * r * 0.88, Math.sin(a) * r * 0.88); } ctx.stroke();
    ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(ang - Math.PI / 2) * r * 0.7, Math.sin(ang - Math.PI / 2) * r * 0.7); ctx.stroke();
    ctx.fillStyle = C.plum; ctx.fill(ellP(0, 0, 14, 14));
    ctx.restore();
  }
  function spinArcs(ctx, x, y, r, t, dir = 1, col = C.white, n = 3) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(t * 9 * dir); ctx.lineCap = 'round';
    for (let i = 0; i < n; i++) { ctx.rotate(TAU / n); ctx.strokeStyle = C.plum; ctx.lineWidth = 18; ctx.beginPath(); ctx.arc(0, 0, r, 0, 0.9); ctx.stroke(); ctx.strokeStyle = col; ctx.lineWidth = 10; ctx.stroke(); }
    ctx.restore();
  }
  function fitText(ctx, str, x, y, size, maxW, o) {
    ctx.save(); ctx.font = `700 ${size}px ${FONT}`; const mw = ctx.measureText(str).width * 1.12; ctx.restore();
    const k = Math.min(1, maxW / mw); ctx.save(); ctx.translate(x, y); ctx.scale(k, k); kText(ctx, str, 0, 0, size, o); ctx.restore();
  }
  function arrowDown(ctx, x, y, s, col) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = roundPoly([[-30, -90], [30, -90], [30, 0], [70, 0], [0, 80], [-70, 0], [-30, 0]], 10);
    cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.2)), -4, -4, 5); ctx.restore();
  }

  // ---------- the flip choreography (front view) ----------
  // returns roll angles for a flip that starts upside down (PI) at t0 and is done at t3
  function flipPose(t, t0, t1, t2, t3) {
    const f1 = seg(t, t0, t1), f2 = seg(t, t2, t3);
    const aF = Math.PI * (1 - f1) - 0.18 * Math.sin(Math.PI * f2);
    const aB = Math.PI + 0.32 * f1 - (Math.PI + 0.32) * f2;
    const tuckF = t < t1 ? H.clamp((t - t0 + 0.4) / 0.4) : 1 - H.clamp((t - t1) / 0.35);
    const tuckB = t < t1 ? 0 : H.clamp((t - t1) / 0.35) * (1 - H.clamp((t - t3) / 0.3));
    return { aF, aB, tuckF, tuckB };
  }

  const HOOKT = 'THE IMPOSSIBLE';
  const scenes = [
    // 0: HOOK. Full frame at t=0: big finished cat in midair + hook words; motion from frame one.
    { s: 0, draw(ctx, t) {
      skyBg(ctx, t, 1, 11);
      const f0 = w(0, 'flip') - 0.1, f = seg(t, f0, f0 + 0.75);
      const wob = Math.sin(t * 3.1) * 0.08;
      const surprised = t < f0;
      ctx.save(); ctx.translate(540, 1060 + bob(t, 0, 14));
      if (t > f0 && t < f0 + 0.9) spinArcs(ctx, 0, -40, 330, t, 1, C.butter);
      const ang = TAU * f;
      catFront(ctx, 0, 0, 2.05, { aF: ang + wob, aB: TAU * seg(t, f0 + 0.12, f0 + 0.87) + wob, tuckF: f > 0 && f < 1 ? 1 : 0, tuckB: f > 0.5 && f < 1 ? 1 : 0, eyes: surprised ? 'shock' : (t < w(0, 'baffled') ? 'happy' : 'normal'), mouth: surprised ? 'O' : 'smile', t, look: [0, -0.3] });
      ctx.restore();
      if (surprised) { kana(ctx, '!!', 860, 760, 110, 0.2, 1, C.butter); sweat(ctx, 270, 760, 1.4); }
      if (t > f0 + 0.75) { const p = pop(t, f0 + 0.75); for (let i = 0; i < 4; i++) sparkle(ctx, 540 + Math.cos(i * 1.7) * 360, 1000 + Math.sin(i * 1.7) * 330, 30 * p.s, i % 2 ? C.butter : C.white, 0, 4); }
      // 1894: puzzled scientist + film strip
      const sc = w(0, 'baffled') - 0.15;
      if (t > sc) { const u = H.ease.back(H.clamp((t - sc) / 0.45)); scientist(ctx, -140 + u * 300, 1430, 0.95, t); qmark(ctx, 300, 1230, 110, t, sc + 0.1); qmark(ctx, 380, 1290, 80, t, sc + 0.25, 1); }
      const fs = w(0, 'in') - 0.2;
      if (t > fs) { const u = H.ease.out(H.clamp((t - fs) / 0.4)); ctx.save(); ctx.translate((1 - u) * 1100, 0); filmStrip(ctx, 540, 1540, t, 1); ctx.restore(); }
      numPop(ctx, '1894', 790, 1360, 150, t, w(0, '1894') - 0.12, { line: '#a7825c', fill: '#fff1d6', rot: -0.08 });
      // hook words: full size + full opacity from frame 0
      ctx.save(); ctx.translate(540, 330); ctx.rotate(Math.sin(t * 3) * 0.015);
      fitText(ctx, HOOKT, 0, 0, 120, 980, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
      ctx.save(); ctx.translate(540, 500); ctx.rotate(-0.04 + Math.sin(t * 4) * 0.02);
      kText(ctx, 'CAT FLIP!', 0, 0, 150, { fill: C.butter, line: TAB.s, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
    } },

    // 1: upside down, nothing to push against... still turns over. So how?
    { s: P_[1].s, draw(ctx, t) {
      skyBg(ctx, t, 1.2, 23, '#a6d8f2', '#ffe6cf');
      const t0 = w(2, 'turns') - 0.35, pose = flipPose(t, t0, t0 + 0.35, t0 + 0.4, t0 + 0.8);
      const cz = 1 + 0.05 * H.clamp((t - P_[1].s) / 3);
      ctx.save(); ctx.translate(540, 1080); ctx.scale(cz, cz);
      // dotted 'empty air' ring = nothing to grab
      const nr = pop(t, w(1, 'nothing') - 0.15);
      if (nr.s > 0 && t < t0) { ctx.save(); ctx.setLineDash([22, 26]); ctx.lineDashOffset = -t * 60; ctx.strokeStyle = 'rgba(74,51,40,0.55)'; ctx.lineWidth = 9; ctx.stroke(ellP(0, -10, 400 * nr.s, 420 * nr.s)); ctx.restore(); }
      if (t > t0 && t < t0 + 1) spinArcs(ctx, 0, -20, 320, t, 1, C.butter);
      catFront(ctx, 0, 0, 1.9, { ...pose, eyes: t < t0 ? 'shock' : (t < w(3, 'so') ? 'happy' : 'normal'), mouth: t < t0 ? 'O' : 'smile', t, look: [0, 0.4] });
      ctx.restore();
      if (t < t0) { sweat(ctx, 820, 900, 1.3, -0.3); }
      big(ctx, 'UPSIDE DOWN', 540, 360, 104, t, w(1, 'upside') - 0.15, { line: C.skyD });
      if (t < w(2, 'turns')) label(ctx, 'NOTHING TO PUSH ON', 540, 1580, 60, t, w(1, 'nothing') - 0.12, C.pink);
      if (t > w(2, 'turns') - 0.1) { label(ctx, 'STILL FLIPS!', 540, 1580, 66, t, w(2, 'turns') - 0.1, C.butter); }
      if (t > w(3, 'how') - 0.2) { big(ctx, 'HOW?', 540, 540, 150, t, w(3, 'how') - 0.2, { line: C.pinkD, fill: C.butter }); qmark(ctx, 880, 820, 120, t, w(3, 'how') - 0.1); }
    } },

    // 2: inner ear senses which way is down
    { s: P_[4].s, draw(ctx, t) {
      paperBg(ctx, t, '#e3f5ea', '#cdebd9', 31, 'paws');
      const zoom = H.lerp(1.0, 1.08, H.clamp((t - P_[4].s) / 2.8));
      const tilt = H.lerp(0.5, 0, seg(t, w(4, 'senses') - 0.1, w(4, 'down') - 0.1));
      ctx.save(); ctx.translate(540, 1240); ctx.scale(zoom, zoom); ctx.rotate(tilt);
      catFront(ctx, 0, 0, 2.6, { aF: 0, aB: 0, eyes: t > w(4, 'down') - 0.1 ? 'happy' : 'normal', mouth: 'w', t, look: [0.4, 0.4] });
      // glowing ear
      const eg = pop(t, w(4, 'ear') - 0.15);
      if (eg.s > 0) { ctx.save(); ctx.globalAlpha = 0.5 + 0.3 * Math.sin(t * 8); ctx.fillStyle = C.butter; ctx.fill(ellP(-205, -330, 70 * eg.s, 70 * eg.s)); ctx.restore(); sparkle(ctx, -205, -330, 34 * eg.s, C.white, t, 4); }
      ctx.restore();
      // thought bubble with an inner-ear level
      const bp = pop(t, w(4, 'inner') - 0.15, 1);
      if (bp.s > 0) {
        ctx.save(); ctx.translate(560, 560); ctx.scale(bp.sx, bp.sy);
        union(ctx, [rrP(-330, -170, 660, 340, 150)], C.white);
        // spirit level: bubble slides to centre as the head levels
        cel(ctx, rrP(-230, -50, 460, 100, 50), '#d9f3ff', '#a9dcf5', -4, -4, 5);
        const bx = H.lerp(150, 0, seg(t, w(4, 'senses') - 0.1, w(4, 'down') - 0.1));
        cel(ctx, ellP(bx, 0, 46, 30), C.butter, C.butterS, -3, -3, 4); shine(ctx, bx - 14, -10, 10, 6);
        ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-60, -50); ctx.lineTo(-60, 50); ctx.moveTo(60, -50); ctx.lineTo(60, 50); ctx.stroke();
        ctx.restore();
        label(ctx, 'INNER EAR', 560, 820, 58, t, w(4, 'ear') - 0.12, C.mint);
      }
      big(ctx, 'STEP 1', 540, 280, 96, t, w(4, 'first') - 0.15, { line: C.mintD });
      if (t > w(4, 'down') - 0.15) { const p = pop(t, w(4, 'down') - 0.15); ctx.save(); ctx.translate(940, 1300); ctx.scale(p.sx, p.sy); arrowDown(ctx, 0, 0, 1.1, C.pinkD); ctx.restore(); label(ctx, 'DOWN', 940, 1440, 56, t, w(4, 'down') - 0.1, C.pink); }
    } },

    // 3: it bends in the middle, like two cats glued together
    { s: P_[5].s, draw(ctx, t) {
      paperBg(ctx, t, '#efeaff', '#e1d9ff', 41, 'grid');
      const bend = 0.32 * seg(t, w(5, 'bends') - 0.15, w(5, 'bends') + 0.35);
      const split = 70 * seg(t, w(6, 'two') - 0.15, w(6, 'two') + 0.3) * (1 - seg(t, w(6, 'glued') - 0.1, w(6, 'glued') + 0.25));
      const bb = bob(t, 0, 8);
      catSide(ctx, 540, 1080 + bb, 1.75, { bend, split, t, eyes: t > w(6, 'glued') ? 'happy' : 'normal' });
      // waist marker
      const mp = pop(t, w(5, 'middle') - 0.15);
      if (mp.s > 0) { ctx.save(); ctx.translate(540, 900 + bb); ctx.scale(mp.sx, mp.sy); arrowDown(ctx, 0, 0, 0.8, C.lavD); ctx.restore(); }
      big(ctx, 'BEND!', 540, 330, 130, t, w(5, 'bends') - 0.15, { line: C.lavD });
      if (t > w(6, 'two') - 0.15) { label(ctx, 'FRONT CAT', 800, 1500, 54, t, w(6, 'two') - 0.1, C.butter); label(ctx, 'BACK CAT', 290, 1500, 54, t, w(6, 'cats') - 0.1, C.sky); }
      // glue tube squeezes on "glued"
      const gp = pop(t, w(6, 'glued') - 0.2);
      if (gp.s > 0) {
        ctx.save(); ctx.translate(540, 640); ctx.rotate(0.5 + Math.sin(t * 10) * 0.05); ctx.scale(gp.sx, gp.sy);
        cel(ctx, rrP(-50, -150, 100, 220, 30), C.white, C.creamS, -4, -4, 5); cel(ctx, rrP(-50, -60, 100, 70, 0), C.pinkD, '#e0604f', -3, -3, 4);
        cel(ctx, roundPoly([[-22, 70], [22, 70], [8, 120], [-8, 120]], 6), C.skyS, C.skyD, -2, -2, 4);
        ctx.restore();
        kana(ctx, 'GLUE', 700, 560, 64, 0.15, gp.s, C.pink);
        if (t > w(6, 'glued')) impactLines(ctx, 540, 1000, 60, t, w(6, 'glued'), 10);
      }
    } },

    // 4: tucks front legs, front half spins fast, stretched back legs barely turn
    { s: P_[7].s, draw(ctx, t) {
      skyBg(ctx, t, 0.6, 51, '#b4def3', '#fff0dc');
      const sF = w(8, 'spins') - 0.5, eF = w(8, 'fast') + 0.2;
      const fF = seg(t, sF, eF), fB = seg(t, sF, w(9, 'turn') + 0.2);
      const tuck = seg(t, w(7, 'tucks') - 0.1, w(7, 'tucks') + 0.3);
      const pose = { aF: Math.PI * (1 - fF), aB: Math.PI + 0.3 * fB, tuckF: tuck, tuckB: 0 };
      ctx.save(); ctx.translate(540, 1060);
      if (t > sF && t < eF + 0.3) spinArcs(ctx, 0, -60, 300, t, 1, C.butter);
      catFront(ctx, 0, 0, 1.95, { ...pose, eyes: t > eF ? 'happy' : 'normal', mouth: t > eF ? 'smile' : 'w', t, glowF: t > w(8, 'front') - 0.15 && t < w(9, 'while') ? 0.45 : 0, glowB: t > w(9, 'stretched') - 0.15 ? 0.4 : 0, look: [0, 0.3] });
      ctx.restore();
      big(ctx, 'TUCK', 540, 330, 130, t, w(7, 'tucks') - 0.15, { line: C.pinkD });
      label(ctx, 'FRONT LEGS', 540, 480, 56, t, w(7, 'front') - 0.12, C.pink);
      if (t > w(8, 'spins') - 0.15) numPop(ctx, 'FAST!', 260, 1520, 110, t, w(8, 'fast') - 0.15, { line: C.pinkD, fill: C.butter, rot: -0.12 });
      if (t > w(9, 'stretched') - 0.15) { label(ctx, 'STRETCHED', 790, 1520, 56, t, w(9, 'stretched') - 0.12, C.sky); label(ctx, 'BARELY TURNS', 790, 1610, 50, t, w(9, 'barely') - 0.12, C.lav); }
    } },

    // 5: then it swaps, and the back half catches up
    { s: P_[10].s, draw(ctx, t) {
      skyBg(ctx, t, 0.5, 61, '#a8d6f0', '#ffd9b8');
      const s0 = w(10, 'swaps') - 0.2, c0 = w(11, 'catches') - 0.6, c1 = w(11, 'up') + 0.1;
      const sw = seg(t, s0, s0 + 0.4), fB = seg(t, c0, c1);
      const pose = { aF: -0.18 * Math.sin(Math.PI * fB), aB: (Math.PI + 0.3) * (1 - fB), tuckF: 1 - sw, tuckB: sw * (1 - seg(t, c1, c1 + 0.3)) };
      const land = c1 + 0.05;
      const yy = 1000 + (t > land ? 0 : 0);
      ctx.save(); ctx.translate(540, yy);
      if (t > c0 && t < c1 + 0.2) spinArcs(ctx, 0, 60, 280, t, -1, C.sky);
      catFront(ctx, 0, 0, 1.95, { ...pose, eyes: t > land ? 'star' : 'normal', mouth: t > land ? 'smile' : 'w', t, glowB: t > c0 - 0.1 && t < c1 ? 0.45 : 0 });
      ctx.restore();
      big(ctx, 'SWAP!', 540, 330, 140, t, s0, { line: C.skyD, fill: C.butter });
      if (t > s0) { label(ctx, 'FRONT LEGS OUT', 540, 490, 54, t, s0 + 0.1, C.pink); }
      if (t > c0) { label(ctx, 'BACK HALF CATCHES UP', 540, 1600, 52, t, w(11, 'catches') - 0.12, C.mint); }
      if (t > land) { for (let i = 0; i < 6; i++) sparkle(ctx, 540 + Math.cos(i) * 380, 1000 + Math.sin(i) * 380, 26, i % 2 ? C.butter : C.white, 0, 4); }
    } },

    // 6: bendy spine + loose collarbone, all in under a second
    { s: P_[12].s, draw(ctx, t) {
      paperBg(ctx, t, '#e2f1fb', '#cfe5f5', 71, 'grid');
      const xs = t < w(13, 'all') - 0.2;
      if (xs) {
        const wig = Math.sin(t * 6) * 0.12 * seg(t, w(12, 'bendy') - 0.1, w(12, 'bendy') + 0.3);
        catSide(ctx, 540, 1100, 1.75, { bend: wig, xray: true, t, eyes: 'happy' });
        // bead spine
        ctx.save(); ctx.translate(540, 1100);
        const sp = pop(t, w(12, 'spine') - 0.15);
        for (let i = 0; i < 13; i++) {
          const u = i / 12, x = H.lerp(-300, 300, u), y = -40 + Math.sin(u * Math.PI * 2 + t * 6) * 28 * seg(t, w(12, 'bendy') - 0.1, w(12, 'bendy') + 0.3) - Math.sin(u * Math.PI) * 30;
          const p = pop(t, w(12, 'bendy') - 0.2 + i * 0.03);
          if (p.s > 0) { ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); cel(ctx, rrP(-20, -16, 40, 32, 12), C.white, C.creamS, -2, -2, 4); ctx.restore(); }
        }
        // collarbone: a small floating bone that wobbles
        const cb = pop(t, w(12, 'collarbone') - 0.2, 1.3);
        if (cb.s > 0) {
          ctx.save(); ctx.translate(240 + Math.sin(t * 9) * 14, 20 + Math.cos(t * 7) * 10); ctx.rotate(0.3 + Math.sin(t * 8) * 0.25); ctx.scale(cb.sx, cb.sy);
          union(ctx, [rrP(-60, -11, 120, 22, 11), ellP(-60, -10, 16, 16), ellP(-60, 10, 16, 16), ellP(60, -10, 16, 16), ellP(60, 10, 16, 16)], C.butter);
          ctx.restore();
        }
        ctx.restore();
        label(ctx, 'BENDY SPINE', 360, 760, 58, t, w(12, 'spine') - 0.12, C.sky);
        label(ctx, 'LOOSE COLLARBONE', 600, 1480, 54, t, w(12, 'collarbone') - 0.12, C.butter);
        big(ctx, 'THE SECRET', 540, 330, 116, t, P_[12].s, { line: C.skyD });
      } else {
        const s0 = w(13, 'all') - 0.2;
        const ang = TAU * 0.95 * H.ease.out(H.clamp((t - s0) / 0.9));
        const p = pop(t, s0);
        ctx.save(); ctx.translate(540, 1050); ctx.scale(p.sx, p.sy); stopwatch(ctx, 0, 0, 260, ang); ctx.restore();
        // a tiny cat flips around the watch face
        const f = seg(t, s0 + 0.1, s0 + 0.9);
        catFront(ctx, 850, 1430, 0.6, { aF: Math.PI * (1 - f), aB: Math.PI * (1 - seg(t, s0 + 0.4, s0 + 1.0)), tuckF: f < 1 ? 1 : 0, eyes: 'happy', mouth: 'smile', t });
        big(ctx, '< 1 SECOND', 540, 430, 130, t, w(13, 'under') - 0.15, { line: C.pinkD, fill: C.white });
      }
    } },

    // 7: kittens master it by about seven weeks
    { s: P_[14].s, draw(ctx, t) {
      room(ctx, t, 81);
      // cushion
      cel(ctx, rrP(260, 1430, 560, 150, 70), '#b9a4f2', '#9784d6', -6, -8, 6);
      const f0 = w(14, 'master') - 0.3, f = seg(t, f0, f0 + 0.7), drop = H.ease.in(H.clamp((t - f0 + 0.2) / 0.9));
      const ky = H.lerp(800, 1300, drop), landed = drop >= 1;
      const sq = landed ? squash(t, f0 + 0.7, 0.2) : [1, 1];
      catFront(ctx, 540, ky, 1.15, { pal: GREY, aF: Math.PI * (1 - f), aB: Math.PI * (1 - seg(t, f0 + 0.25, f0 + 0.85)), tuckF: f > 0 && f < 0.8 ? 1 : 0, tuckB: f > 0.4 && f < 1 ? 1 : 0, eyes: landed ? 'star' : 'normal', mouth: landed ? 'smile' : 'O', t, kitten: true, sx: sq[0], sy: sq[1] });
      if (landed) impactLines(ctx, 540, 1470, 120, t, f0 + 0.75, 10);
      big(ctx, 'KITTENS', 540, 330, 120, t, w(14, 'kittens') - 0.15, { line: C.lavD });
      // calendar
      const cp = pop(t, w(14, 'seven') - 0.2);
      if (cp.s > 0) {
        ctx.save(); ctx.translate(260, 760); ctx.rotate(-0.08); ctx.scale(cp.sx, cp.sy);
        cel(ctx, rrP(-150, -140, 300, 290, 30), C.white, C.creamS, -5, -5, 6); cel(ctx, rrP(-150, -140, 300, 80, 30), C.pinkD, '#e0604f', -3, -3, 5);
        kText(ctx, '7', 0, 110, 170, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 });
        ctx.restore();
        label(ctx, 'WEEKS OLD', 260, 1010, 54, t, w(14, 'weeks') - 0.12, C.butter);
      }
    } },

    // 8: loop back: have you ever seen your cat pull off the flip?
    { s: P_[15].s, draw(ctx, t) {
      room(ctx, t, 91, '#fff0dc', '#ffe3c4');
      // sofa
      cel(ctx, rrP(80, 1180, 920, 200, 60), '#7fc7b4', '#5aa894', -6, -8, 6);
      cel(ctx, rrP(60, 1340, 960, 230, 60), '#8fd3c0', '#62b29d', -6, -8, 6);
      const p = pop(t, P_[15].s + 0.02, 1);
      ctx.save(); ctx.translate(540, 1200 + bob(t, 0, 6)); ctx.scale(p.sx, p.sy);
      catFront(ctx, 0, 0, 1.6, { aF: Math.sin(t * 2) * 0.06, aB: 0, eyes: t > w(15, 'seen') ? 'happy' : 'normal', mouth: 'smile', t, look: [0.4, -0.2] });
      ctx.restore();
      big(ctx, 'SEEN IT?', 540, 360, 150, t, w(15, 'seen') - 0.2, { line: C.pinkD, fill: C.white });
      label(ctx, 'YES', 300, 560, 64, t, w(15, 'cat') - 0.12, C.mint);
      label(ctx, 'NOT YET', 770, 560, 64, t, w(15, 'pull') - 0.12, C.lav);
      label(ctx, 'COMMENT!', 540, 1680 - 60, 60, t, w(15, 'flip') + 0.05, C.butter);
      qmark(ctx, 920, 860, 110, t, w(15, 'ever') - 0.1, 0.5);
      heart(ctx, 160, 900 + Math.sin(t * 3) * 10, 40 * pop(t, w(15, 'flip')).s, C.pinkD);
    } },
  ];

  const CUTS = scenes.slice(1).map((sc, i) => { const prev = P_.filter((p) => p.e <= sc.s + 0.01).pop(); return { t: (prev.e + sc.s) / 2, shape: i % 2 ? 'star' : 'paw' }; });
  const CUTW = 0.4;

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) {
      const u = (t - (c.t - CUTW / 2)) / CUTW;
      scenes[i - 1].draw(ctx, t);
      if (c.shape === 'paw') pawWipe(ctx, W_, H_, u, 540, 1050, () => scenes[i].draw(ctx, t));
      else wipe(ctx, W_, H_, u, 'star', 540, 1050, () => scenes[i].draw(ctx, t));
    } else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 0.5); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.38, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.38, 3000]], q: 0.9, gain: 0.3, a: 0.07 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    k.play('whoosh', 0.02, { dur: 1.2, gain: 0.35 }); pop_(0.1, 650, 0.6, 0, false);
    k.play('whoosh', w(0, 'flip') - 0.15, { dur: 0.6, gain: 0.45 }); k.play('sparkle', w(0, 'flip') + 0.65, { n: 6, gain: 0.45 });
    pop_(w(0, 'baffled') - 0.12, 500, 0.7, -0.4, false); pop_(w(0, 'scientists') - 0.05, 800, 0.5, -0.3);
    k.play('whoosh', w(0, 'in') - 0.25, { dur: 0.4, gain: 0.3 }); big_(w(0, '1894') - 0.12, 'C6');
    // upside down
    k.noise(P_[1].s, { dur: 2.6, color: 'pink', filter: 'bandpass', f: 900, q: 0.6, gain: 0.12, a: 0.3 });
    pop_(w(1, 'upside') - 0.12, 600, 0.7, 0, false); k.play('error', w(1, 'nothing') - 0.1, { f: 'A3', gain: 0.35 });
    k.play('whoosh', w(2, 'turns') - 0.35, { dur: 0.5, gain: 0.45 }); k.play('success', w(2, 'over') + 0.05, { f: 'C6', gain: 0.35 });
    big_(w(3, 'how') - 0.15, 'G5');
    // ear
    pop_(w(4, 'first') - 0.12, 700, 0.7, 0, false); k.play('sparkle', w(4, 'ear') - 0.1, { n: 5, gain: 0.4 });
    k.tone(w(4, 'senses') - 0.1, { f: [[0, 'E5'], [0.9, 'C5']], type: 'sine', dur: 1.0, gain: 0.1, a: 0.05, hold: 0.4 });
    big_(w(4, 'down') - 0.12, 'C6');
    // bend + glue
    k.play('jump', w(5, 'bends') - 0.12, { gain: 0.4 }); pop_(w(5, 'middle') - 0.12, 800, 0.6);
    pop_(w(6, 'two') - 0.12, 600, 0.6, -0.4); pop_(w(6, 'cats') - 0.12, 750, 0.6, 0.4);
    k.noise(w(6, 'glued') - 0.15, { dur: 0.25, filter: 'lowpass', f: 900, gain: 0.3 }); k.play('stamp', w(6, 'glued') + 0.05, { gain: 0.35 });
    // front spin
    big_(w(7, 'tucks') - 0.12, 'A5'); pop_(w(7, 'front') - 0.1, 700, 0.6, 0.3);
    k.play('riser', w(8, 'spins') - 0.6, { dur: 0.8, gain: 0.25 }); k.play('whoosh', w(8, 'spins') - 0.4, { dur: 0.6, gain: 0.5 }); pop_(w(8, 'fast') - 0.1, 900, 0.8, -0.3, false);
    pop_(w(9, 'stretched') - 0.1, 500, 0.6, 0.4); k.tone(w(9, 'barely') - 0.1, { f: [[0, 'G4'], [0.6, 'F4']], type: 'triangle', dur: 0.6, gain: 0.1, a: 0.02, hold: 0.2 });
    // swap
    big_(w(10, 'swaps') - 0.2, 'E6'); k.play('whoosh', w(11, 'catches') - 0.6, { dur: 0.7, gain: 0.45 });
    k.play('thud', w(11, 'up') + 0.1, { f: 110, gain: 0.35 }); k.play('success', w(11, 'up') + 0.12, { f: 'E6', gain: 0.4 });
    // body
    pop_(P_[12].s + 0.05, 600, 0.6, 0, false);
    for (let i = 0; i < 6; i++) k.play('tick', w(12, 'bendy') - 0.2 + i * 0.06, { f: 1800 + i * 150, gain: 0.25, minor: true });
    k.play('jump', w(12, 'collarbone') - 0.15, { gain: 0.35 }); pop_(w(12, 'possible') - 0.1, 800, 0.5);
    for (let i = 0; i < 8; i++) k.play('tick', w(13, 'all') - 0.2 + i * 0.11, { f: 2600, gain: 0.3, minor: true });
    big_(w(13, 'under') - 0.12, 'C6');
    // kitten
    pop_(w(14, 'kittens') - 0.12, 900, 0.6, 0, false); k.play('whoosh', w(14, 'master') - 0.3, { dur: 0.6, gain: 0.35 });
    k.play('thud', w(14, 'master') + 0.45, { f: 140, gain: 0.3 }); k.play('sparkle', w(14, 'master') + 0.5, { n: 4, gain: 0.35 });
    big_(w(14, 'seven') - 0.15, 'G6');
    // end
    pop_(P_[15].s + 0.05, 600, 0.7, -0.2); big_(w(15, 'seen') - 0.15, 'C6');
    pop_(w(15, 'cat') - 0.1, 700, 0.6, -0.4); pop_(w(15, 'pull') - 0.1, 850, 0.6, 0.4);
    k.play('success', w(15, 'flip') + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(15, 'flip') + 0.1, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
