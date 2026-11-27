// ===== Kawaii Anime, vertical: "Why does the axolotl never grow up?" =====
(function () {
  // ---------- Kawaii anime: clean warm-brown outlines, one cel-shadow tone, glossy anime eyes; peach hand mascot, aqua bathroom, sepia clinic, lilac evening ----------
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
  const P_ = [{"s":0.25,"e":3.74,"text":"You grew up. This axolotl refuses to, for 15 years.","words":[["you",0.25],["grew",0.52],["up",0.88],["this",1.06],["axolotl",1.41],["refuses",2.04],["to",2.67],["for",2.85],["15",3.11],["years",3.29]]},{"s":4.14,"e":6.0,"text":"Most salamanders hatch in water,","words":[["most",4.14],["salamanders",4.41],["hatch",5.17],["in",5.52],["water",5.65]]},{"s":6.26,"e":8.61,"text":"then lose their gills and crawl onto land.","words":[["then",6.26],["lose",6.54],["their",6.81],["gills",7.16],["and",7.5],["crawl",7.71],["onto",8.06],["land",8.33]]},{"s":9.07,"e":11.71,"text":"But the axolotl keeps its feathery gills,","words":[["but",9.07],["the",9.3],["axolotl",9.54],["keeps",10.08],["its",10.47],["feathery",10.7],["gills",11.32]]},{"s":11.71,"e":13.5,"text":"its tail fin, and its baby face,","words":[["its",11.71],["tail",11.94],["fin",12.23],["and",12.46],["its",12.68],["baby",12.9],["face",13.2]]},{"s":13.58,"e":14.51,"text":"its whole life.","words":[["its",13.58],["whole",13.81],["life",14.2]]},{"s":14.96,"e":16.52,"text":"The reason is a tiny switch.","words":[["the",14.96],["reason",15.18],["is",15.6],["a",15.74],["tiny",15.81],["switch",16.1]]},{"s":16.93,"e":18.95,"text":"Growing up needs thyroid hormone,","words":[["growing",16.93],["up",17.44],["needs",17.58],["thyroid",17.94],["hormone",18.45]]},{"s":19.07,"e":21.9,"text":"and an axolotl's body barely sends that signal.","words":[["and",19.07],["an",19.29],["axolotls",19.44],["body",20.04],["barely",20.33],["sends",20.78],["that",21.15],["signal",21.45]]},{"s":22.34,"e":23.72,"text":"So it just skips adulthood,","words":[["so",22.34],["it",22.46],["just",22.59],["skips",22.84],["adulthood",23.15]]},{"s":23.8,"e":25.5,"text":"and still has babies of its own.","words":[["and",23.8],["still",24.0],["has",24.34],["babies",24.55],["of",24.96],["its",25.09],["own",25.3]]},{"s":25.97,"e":30.36,"text":"In 1865, scientists in Paris got a shock.","words":[["in",25.97],["1865",26.25],["scientists",26.8],["in",28.17],["paris",28.44],["got",29.12],["a",29.53],["shock",29.67]]},{"s":30.76,"e":33.67,"text":"A few of their axolotls suddenly lost their gills,","words":[["a",30.76],["few",30.83],["of",31.04],["their",31.19],["axolotls",31.54],["suddenly",32.11],["lost",32.68],["their",32.96],["gills",33.31]]},{"s":33.8,"e":35.79,"text":"and walked out as land salamanders.","words":[["and",33.8],["walked",34.01],["out",34.42],["as",34.63],["land",34.76],["salamanders",35.04]]},{"s":36.18,"e":37.83,"text":"So the switch was never broken.","words":[["so",36.18],["the",36.31],["switch",36.51],["was",36.91],["never",37.1],["broken",37.43]]},{"s":38.25,"e":40.6,"text":"Would you rather stay a kid forever, or grow up?","words":[["would",38.25],["you",38.57],["rather",38.76],["stay",39.14],["a",39.39],["kid",39.46],["forever",39.65],["or",40.1],["grow",40.22],["up",40.48]]}];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const BEATS = [
    { id: 'hook', s: 0, e: P_[0].e, on: 'FULL FRAME at 0 s: big finished pink axolotl with fluttering gills in a jade lake, FOREVER / A BABY?! text at full size; party hat + 15 YEARS on "15"' },
    { id: 'normal', s: P_[1].s, e: P_[2].e, on: 'pond cross-section: eggs HATCH in water, larva with gills, gills shrink on "lose", it crawls up onto a mossy rock on "land"' },
    { id: 'keeps', s: P_[3].s, e: P_[5].e, on: 'axolotl portrait: FEATHERY GILLS, TAIL FIN, BABY FACE tags with candy arrows, WHOLE LIFE headline' },
    { id: 'switch', s: P_[6].s, e: P_[8].e, on: 'giant GROW UP switch stuck on OFF, chibi thyroid butterfly sends one weak hormone drop that fizzles, SIGNAL bar barely filled' },
    { id: 'skip', s: P_[9].s, e: P_[10].e, on: 'axolotl hops past an ADULTHOOD sign with speed lines, red X stamp; baby axolotls pop around it on "babies"' },
    { id: 'paris', s: P_[11].s, e: P_[13].e, on: 'sepia 1865 Paris greenhouse: chibi scientist in top hat, 1865 + PARIS; shock face; an axolotl in the tank loses its gills, darkens and walks onto a rock: LAND SALAMANDER!' },
    { id: 'broken', s: P_[14].s, e: P_[14].e, on: 'the GROW UP switch flips to ON with sparkles: NOT BROKEN!' },
    { id: 'end', s: P_[15].s, e: P_[15].e, on: 'twilight pond: baby axolotl KID FOREVER? vs land salamander GROW UP?, COMMENT! (loops to hook)' },
  ];
  const DURATION = P_[P_.length - 1].e + 1.0;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter, out) => { let p = pop(t, t0); if (p.s <= 0) return; if (out != null) { const k = popOut(t, out); if (k <= 0) return; p = { s: p.s * k, sx: p.sx * k, sy: p.sy * k }; } ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  function qmark(ctx, x, y, sz, t, t0, ph = 0, txt = '?') {
    const p = pop(t, t0, 1.4); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + ph)); ctx.scale(p.sx, p.sy);
    kText(ctx, txt, 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore();
  }
  const seg = (t, a, b) => H.ease.inOut(H.clamp((t - a) / (b - a)));
  function fitText(ctx, str, x, y, size, maxW, o) {
    ctx.save(); ctx.font = `700 ${size}px ${FONT}`; const mw = ctx.measureText(str).width * 1.12; ctx.restore();
    const k = Math.min(1, maxW / mw); ctx.save(); ctx.translate(x, y); ctx.scale(k, k); kText(ctx, str, 0, 0, size, o); ctx.restore();
  }
  // anime focus lines from the frame edge toward a point
  function speedLines(ctx, cx, cy, t, a = 0.5, n = 34, col = '255,255,255', r0 = 520) {
    const r = H.rng(Math.floor(t * 15) + 5);
    ctx.save(); ctx.fillStyle = `rgba(${col},${a})`;
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * TAU + r() * 0.12, wd = r.range(0.008, 0.02), rr = r0 + r() * 160;
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr);
      ctx.lineTo(cx + Math.cos(ang - wd) * 1800, cy + Math.sin(ang - wd) * 1800); ctx.lineTo(cx + Math.cos(ang + wd) * 1800, cy + Math.sin(ang + wd) * 1800); ctx.fill();
    }
    ctx.restore();
  }
  // horizontal motion lines (hop / dash)
  function dashLines(ctx, x, y, len, t, n = 5, col = C.white, dir = -1) {
    ctx.save(); ctx.lineCap = 'round';
    for (let i = 0; i < n; i++) { const yy = y + (i - n / 2) * 46, ph = ((t * 3 + i * 0.37) % 1); const l = len * (0.5 + 0.5 * Math.sin(i * 2.1 + 1)); const xx = x + dir * (40 + ph * 60);
      ctx.strokeStyle = C.plum; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(xx, yy); ctx.lineTo(xx + dir * l, yy); ctx.stroke();
      ctx.strokeStyle = col; ctx.lineWidth = 8; ctx.stroke(); }
    ctx.restore();
  }

  // ---------- palettes ----------
  const AX = { b: '#ffc9d9', s: '#f3a3bd', gill: '#f27a9e', gillS: '#d85a83', belly: '#ffe3ec' };
  const LARVA = { b: '#c9d79a', s: '#a7b874', gill: '#d98c8c', gillS: '#b86d6d', belly: '#e6edc4' };
  const LANDC = { b: '#6d6a52', s: '#55523e', gill: '#6d6a52', gillS: '#55523e', belly: '#8a8566' };
  const mixC = (a, b, u) => H.rgba(H.mix(a, b, u));

  // ---------- the axolotl (front-facing chibi): o = { t, pal, morph (0 baby .. 1 land form), eyes, mouth, look, hat, sleepy, rot } ----------
  function axo(ctx, x, y, s, o = {}) {
    const t = o.t || 0, m = o.morph || 0, P0 = o.pal || AX, P1 = LANDC;
    const col = (k) => mixC(P0[k], P1[k], m);
    const g = 1 - H.smooth(0, 0.8, m); // gill size
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(s, s);
    const sw = Math.sin(t * 2.2 + (o.ph || 0));
    // tail with soft fin, curling to the right
    const tail = new Path2D();
    tail.moveTo(70, 230); tail.bezierCurveTo(200, 300 + sw * 10, 300, 230 + sw * 30, 330 + sw * 14, 120 + sw * 20);
    tail.bezierCurveTo(300, 200 + sw * 20, 210, 250, 90, 300); tail.closePath();
    const fin = new Path2D();
    fin.moveTo(80, 215); fin.bezierCurveTo(210, 250 + sw * 10, 320, 170 + sw * 30, 360 + sw * 14, 90 + sw * 20);
    fin.bezierCurveTo(340, 240 + sw * 20, 220, 330, 80, 320); fin.closePath();
    ctx.save(); ctx.globalAlpha = 0.75 * (1 - m * 0.8); cel(ctx, fin, col('belly'), col('b'), -4, -4, 3.5); ctx.restore();
    cel(ctx, tail, col('b'), col('s'), -6, -6, 4.5);
    // back legs
    [[-130, 300], [130, 300]].forEach(([lx, ly], i) => { const p = ellP(lx, ly, 46, 34, i ? 0.4 : -0.4); cel(ctx, p, col('b'), col('s'), -4, -4, 4); for (let k = -1; k <= 1; k++) { const tp = ellP(lx + (i ? 1 : -1) * 30 + k * 16, ly + 30, 9, 12); cel(ctx, tp, col('b'), col('s'), -2, -2, 3); } });
    // body
    const body = ellP(0, 190, 150, 155);
    cel(ctx, body, col('b'), col('s'), -12, -12, 5);
    ctx.save(); ctx.clip(body); ctx.fillStyle = col('belly'); ctx.fill(ellP(0, 230, 92, 110)); ctx.restore();
    // land form: yellow blotches
    if (m > 0.3) { ctx.save(); ctx.globalAlpha = H.smooth(0.3, 1, m); ctx.clip(body); const r = H.rng(44); for (let i = 0; i < 9; i++) { ctx.fillStyle = '#e8c35a'; ctx.fill(ellP(r.range(-130, 130), r.range(60, 320), r.range(14, 26), r.range(10, 18), r() * 3)); } ctx.restore(); }
    // front legs (little waving hands)
    const wave = o.wave ? Math.sin(t * 9) * 0.35 : 0;
    [[-160, 140, -1], [160, 140, 1]].forEach(([lx, ly, d]) => { ctx.save(); ctx.translate(lx, ly); ctx.rotate(d * (0.5 + (d > 0 ? wave : 0))); const p = rrP(-22, -10, 44, 90, 22); cel(ctx, p, col('b'), col('s'), -3, -3, 4); for (let k = -1; k <= 1; k++) cel(ctx, ellP(k * 15, 86, 9, 12), col('b'), col('s'), -2, -2, 3); ctx.restore(); });
    // gills: three feathery fronds each side
    if (g > 0.02) {
      [-1, 1].forEach((sd) => {
        [-0.95, -0.45, 0.05].forEach((a0, k) => {
          const fl = Math.sin(t * 4.2 + k * 1.3 + sd) * 0.09;
          const bx = sd * 168, by = -110 + k * 48, L = 125 * g;
          ctx.save(); ctx.translate(bx, by); ctx.rotate(sd > 0 ? a0 + fl : Math.PI - a0 - fl);
          // frond along +x
          const stalk = rrP(0, -11, L, 22, 11);
          for (let f = 0; f < 6; f++) { const fx = 22 + f * (L - 30) / 5, fr = 15 * g; [-1, 1].forEach((ss) => { const p = ellP(fx, ss * 18 * g, fr, 9 * g, ss * 0.5); cel(ctx, p, col('gill'), col('gillS'), -2, -2, 3); }); }
          cel(ctx, stalk, col('gill'), col('gillS'), -3, -3, 3.5);
          ctx.restore();
        });
      });
    }
    // head
    const head = ellP(0, -40, 205, 160);
    cel(ctx, head, col('b'), col('s'), -16, -16, 5.5);
    if (m > 0.3) { ctx.save(); ctx.globalAlpha = H.smooth(0.3, 1, m); ctx.clip(head); const r = H.rng(9); for (let i = 0; i < 6; i++) { ctx.fillStyle = '#e8c35a'; ctx.fill(ellP(r.range(-170, 170), r.range(-170, -110), r.range(14, 24), r.range(10, 16), r() * 3)); } ctx.restore(); }
    shine(ctx, -120, -140, 34, 16, -0.4, 0.75);
    // face
    const ek = o.eyes || ((t % 3.7) > 3.55 ? 'blink' : 'normal');
    eye(ctx, -92, -58, 33, 40, o.iris || '#7a4a9a', ek, -1, o.look || [0, 0]);
    eye(ctx, 92, -58, 33, 40, o.iris || '#7a4a9a', ek, 1, o.look || [0, 0]);
    blush(ctx, -142, 4, 30, 15); blush(ctx, 142, 4, 30, 15);
    const mk = o.mouth || 'axo';
    if (mk === 'axo') { ctx.save(); ctx.strokeStyle = C.dark; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-70, 18); ctx.quadraticCurveTo(0, 62, 70, 18); ctx.stroke(); ctx.restore(); }
    else mouth(ctx, 0, 26, 26, mk);
    // party hat
    if (o.hat > 0) {
      ctx.save(); ctx.translate(30, -190); ctx.rotate(0.22); ctx.scale(o.hat, o.hat);
      const hp = new Path2D(); hp.moveTo(-70, 10); hp.lineTo(0, -170); hp.lineTo(70, 10); hp.quadraticCurveTo(0, 34, -70, 10); hp.closePath();
      cel(ctx, hp, C.lav, C.lavS, -6, -6, 4.5);
      ctx.save(); ctx.clip(hp); ctx.strokeStyle = C.butterD; ctx.lineWidth = 16; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(-90, -10 - i * 44); ctx.lineTo(90, -40 - i * 44); ctx.stroke(); } ctx.restore();
      ol(ctx, hp, 4.5);
      cel(ctx, ellP(0, -172, 22, 22), C.pinkD, '#e05a4b', -3, -3, 4);
      ctx.restore();
    }
    ctx.restore();
  }

  // ---------- backgrounds ----------
  // underwater lake: gradient, light shafts, swaying weeds, pebbles, bubbles
  function lake(ctx, t, pal, seed) {
    const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, pal.top); g.addColorStop(1, pal.bot); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.globalAlpha = 0.18; ctx.fillStyle = C.white;
    for (let i = 0; i < 4; i++) { const x = 120 + i * 280 + Math.sin(t * 0.6 + i) * 30; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 140, 0); ctx.lineTo(x - 120, HH); ctx.lineTo(x - 300, HH); ctx.fill(); }
    ctx.restore();
    const r = H.rng(seed);
    // weeds
    for (let i = 0; i < 9; i++) {
      const x = r.range(-20, W + 20), hgt = r.range(380, 760), wd = r.range(34, 56), ph = r() * TAU, c = i % 3 ? pal.weed : pal.weed2;
      const p = new Path2D(), y0 = HH + 20, sw = (k) => Math.sin(t * 1.4 + ph + k * 2) * 40 * k;
      p.moveTo(x - wd / 2, y0);
      p.bezierCurveTo(x - wd / 2 + sw(0.3), y0 - hgt * 0.35, x - wd / 2 + sw(0.7), y0 - hgt * 0.7, x + sw(1), y0 - hgt);
      p.bezierCurveTo(x + wd / 2 + sw(0.7), y0 - hgt * 0.7, x + wd / 2 + sw(0.3), y0 - hgt * 0.35, x + wd / 2, y0); p.closePath();
      cel(ctx, p, c, H.rgba(H.mix(c, C.plum, 0.18)), -6, 0, 4);
    }
    // pebble floor
    cel(ctx, rrP(-40, 1690, W + 80, 300, 0), pal.floor, H.rgba(H.mix(pal.floor, C.plum, 0.15)), 0, -10, 5);
    for (let i = 0; i < 14; i++) { const x = r.range(0, W), y = r.range(1700, 1900), rr = r.range(18, 36); cel(ctx, ellP(x, y, rr * 1.3, rr), pal.pebble, H.rgba(H.mix(pal.pebble, C.plum, 0.2)), -3, -3, 3.5); }
  }
  function bubbles(ctx, t, seed, n, x0, x1, y0, y1, rise = 60) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const bx = r.range(x0, x1), sp = r.range(0.6, 1.2) * rise, rr = r.range(10, 24), ph = r();
      const y = y1 - (((t * sp) / (y1 - y0) + ph) % 1) * (y1 - y0), x = bx + Math.sin(t * 2 + i) * 12;
      ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fill(ellP(x, y, rr, rr)); ol(ctx, ellP(x, y, rr, rr), 3, 'rgba(74,51,40,0.55)'); shine(ctx, x - rr * 0.35, y - rr * 0.35, rr * 0.28, rr * 0.18, -0.6); ctx.restore();
    }
  }
  const JADE = { top: '#bfeee0', bot: '#6fc7b4', weed: '#8fd18a', weed2: '#5fb88a', floor: '#e9d9b0', pebble: '#cfe3d6' };
  const DUSKP = { top: '#cfc6f2', bot: '#7f8fcf', weed: '#89b7a6', weed2: '#6a9c96', floor: '#c9bfd9', pebble: '#e3dcef' };

  // ---------- props ----------
  function eggs(ctx, x, y, t, t0, hatch) {
    const r = H.rng(71);
    for (let i = 0; i < 7; i++) { const ex = x + r.range(-90, 90), ey = y + r.range(-50, 50), p = pop(t, t0 + i * 0.04).s; if (p <= 0) continue;
      ctx.save(); ctx.translate(ex, ey); ctx.scale(p, p); ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.fill(ellP(0, 0, 30, 30)); ol(ctx, ellP(0, 0, 30, 30), 3);
      if (!(hatch && i < 3)) { ctx.fillStyle = '#4a5a3a'; ctx.fill(ellP(0, 0, 11, 11)); } ctx.restore(); }
  }
  function switchBox(ctx, x, y, s, on, t, jig = 0) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-220, -300, 440, 600, 70), C.cream, C.creamS, -10, -10, 6);
    cel(ctx, rrP(-70, -190, 140, 380, 60), '#cbbfe8', '#a99bd6', 6, 6, 5);
    // labels ON (top) OFF (bottom)
    ctx.font = `700 56px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = on > 0.5 ? C.mintD : H.rgba(C.plum, 0.35); ctx.fillText('ON', 0, -245);
    ctx.fillStyle = on > 0.5 ? H.rgba(C.plum, 0.35) : C.pinkD; ctx.fillText('OFF', 0, 248);
    const ky = H.lerp(110, -110, on) + jig;
    const knob = rrP(-95, ky - 70, 190, 140, 50);
    cel(ctx, knob, on > 0.5 ? C.mint : C.pink, on > 0.5 ? C.mintS : C.pinkS, -8, -8, 5.5);
    shine(ctx, -45, ky - 38, 30, 12, -0.2, 0.8);
    // knob face
    eye(ctx, -36, ky - 4, 13, 16, '#7a4a9a', on > 0.5 ? 'happy' : (t % 2.4 > 2.25 ? 'blink' : 'normal'));
    eye(ctx, 36, ky - 4, 13, 16, '#7a4a9a', on > 0.5 ? 'happy' : (t % 2.4 > 2.25 ? 'blink' : 'normal'));
    mouth(ctx, 0, ky + 30, 13, on > 0.5 ? 'smile' : 'flat');
    ctx.restore();
  }
  // chibi thyroid gland: butterfly-shaped, two lobes
  function thyroid(ctx, x, y, s, t, mood = 'normal') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(Math.sin(t * 2) * 0.04);
    const fl = 1 + Math.sin(t * 6) * 0.04;
    [-1, 1].forEach((d) => { ctx.save(); ctx.scale(d * fl, 1); const p = new Path2D(); p.moveTo(10, -10); p.bezierCurveTo(60, -150, 200, -120, 190, 0); p.bezierCurveTo(185, 110, 70, 150, 10, 40); p.closePath(); cel(ctx, p, '#ffb3a7', '#f08c80', -8, -8, 5); ctx.restore(); });
    cel(ctx, rrP(-40, -30, 80, 70, 30), '#ffb3a7', '#f08c80', -4, -4, 5);
    eye(ctx, -95, -20, 22, 27, '#b04a5a', mood === 'tired' ? 'blink' : 'normal', -1); eye(ctx, 95, -20, 22, 27, '#b04a5a', mood === 'tired' ? 'blink' : 'normal', 1);
    blush(ctx, -120, 30, 22, 11); blush(ctx, 120, 30, 22, 11);
    mouth(ctx, 0, 20, 14, mood === 'tired' ? 'wobble' : 'w');
    ctx.restore();
  }
  function hormoneDrop(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -34); p.bezierCurveTo(10, -14, 24, 2, 24, 16); p.arc(0, 16, 24, 0, Math.PI); p.bezierCurveTo(-24, 2, -10, -14, 0, -34); p.closePath();
    cel(ctx, p, C.lav, C.lavS, -4, -4, 4); shine(ctx, -7, 12, 5, 8, 0.3); ctx.restore();
  }
  function meter(ctx, x, y, fill, t) {
    cel(ctx, rrP(x - 60, y - 260, 120, 520, 60), C.white, C.creamS, -5, -5, 5);
    const hgt = 480 * fill;
    ctx.save(); ctx.clip(rrP(x - 40, y - 240, 80, 480, 40)); cel(ctx, rrP(x - 40, y + 240 - hgt, 80, hgt + 20, 0), C.lav, C.lavS, -6, 0, 0); ctx.restore();
    ol(ctx, rrP(x - 40, y - 240, 80, 480, 40), 4);
  }
  function scientist(ctx, x, y, s, t, eyes = 'normal') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // coat
    const coat = new Path2D(); coat.moveTo(-120, 60); coat.quadraticCurveTo(-140, 260, -130, 330); coat.lineTo(130, 330); coat.quadraticCurveTo(140, 260, 120, 60); coat.quadraticCurveTo(0, 20, -120, 60); coat.closePath();
    cel(ctx, coat, '#5b5e74', '#46485c', -8, -8, 5);
    const shirt = new Path2D(); shirt.moveTo(-40, 50); shirt.lineTo(0, 180); shirt.lineTo(40, 50); shirt.closePath(); cel(ctx, shirt, C.white, C.creamS, -2, -2, 4);
    cel(ctx, heartP(0, 70, 22), '#c45a6a', '#a8475a', -2, -2, 3.5); // bow tie
    // head
    const head = ellP(0, -90, 130, 120); cel(ctx, head, '#ffe0c7', '#f2b88f', -10, -10, 5);
    // side hair + mustache
    cel(ctx, ellP(-122, -70, 26, 40), '#8a8a92', '#6e6e76', -3, -3, 4); cel(ctx, ellP(122, -70, 26, 40), '#8a8a92', '#6e6e76', -3, -3, 4);
    eye(ctx, -48, -96, 24, 30, '#5a7aa0', eyes, -1); eye(ctx, 48, -96, 24, 30, '#5a7aa0', eyes, 1);
    const mu = new Path2D(); mu.moveTo(0, -40); mu.bezierCurveTo(-30, -60, -70, -40, -78, -18); mu.bezierCurveTo(-50, -30, -20, -26, 0, -30); mu.bezierCurveTo(20, -26, 50, -30, 78, -18); mu.bezierCurveTo(70, -40, 30, -60, 0, -40); mu.closePath();
    cel(ctx, mu, '#8a8a92', '#6e6e76', -2, -2, 4);
    if (eyes === 'shock') mouth(ctx, 0, -2, 18, 'O');
    blush(ctx, -88, -50, 18, 9); blush(ctx, 88, -50, 18, 9);
    // top hat
    const bob_ = eyes === 'shock' ? -30 * Math.abs(Math.sin(t * 12)) : 0;
    ctx.save(); ctx.translate(0, bob_);
    cel(ctx, rrP(-150, -205, 300, 34, 17), '#3a3340', '#2a242f', -3, -3, 4.5);
    cel(ctx, rrP(-95, -360, 190, 165, 14), '#3a3340', '#2a242f', -6, -6, 4.5);
    ctx.fillStyle = '#9a5a6a'; ctx.fillRect(-95, -235, 190, 26); ol(ctx, rrP(-95, -360, 190, 165, 14), 4.5);
    ctx.restore();
    ctx.restore();
  }
  function rock(ctx, x, y, s, col = '#a9b3a0', moss = '#8fc27a') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = roundPoly([[-260, 80], [-200, -70], [-60, -130], [120, -110], [240, -30], [270, 80]], 40);
    cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.2)), -12, -12, 5);
    const mo = new Path2D(); mo.moveTo(-200, -60); mo.quadraticCurveTo(-60, -150, 120, -105); mo.quadraticCurveTo(200, -70, 230, -30); mo.quadraticCurveTo(60, -60, -200, -40); mo.closePath();
    cel(ctx, mo, moss, H.rgba(H.mix(moss, C.plum, 0.2)), -3, -3, 4);
    ctx.restore();
  }

  // ---------- scenes ----------
  const sceneT = [0, 3.94, 8.84, 14.74, 22.12, 25.74, 35.99, 38.04];
  const scenes = [
    // 0 HOOK: full finished axolotl + FOREVER / A BABY?! at full size from frame 0
    { s: sceneT[0], draw(ctx, t) {
      lake(ctx, t, JADE, 3);
      speedLines(ctx, 540, 1080, t, 0.22, 30, '255,255,255', 560);
      bubbles(ctx, t, 5, 10, 40, 1040, 600, 1700, 70);
      const n15 = w(0, '15') - 0.15, hat = pop(t, n15, 1.2).s;
      axo(ctx, 540, 1060 + bob(t, 0, 12), 1.45, { t, eyes: t > n15 ? 'happy' : 'normal', mouth: t > n15 ? 'smile' : 'axo', hat, look: [0, -0.2] });
      for (let i = 0; i < 3; i++) sparkle(ctx, [150, 930, 880][i], [700, 760, 1500][i] + bob(t, i, 8), 26 + 7 * Math.sin(t * 4 + i), i % 2 ? C.butter : C.white, 0, 4);
      if (t > w(0, 'refuses') - 0.1 && t < n15) qmark(ctx, 900, 820, 110, t, w(0, 'refuses') - 0.1, 0.5, '!?');
      label(ctx, '15 YEARS OLD', 540, 1600, 66, t, n15, C.butter);
      confetti(ctx, t, n15, 540, 900, 28, 15);
      ctx.save(); ctx.translate(540, 300); ctx.rotate(Math.sin(t * 3) * 0.015);
      kText(ctx, 'FOREVER', 0, 0, 140, { fill: C.white, line: '#3fae94', outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
      ctx.save(); ctx.translate(540, 480); ctx.rotate(-0.04 + Math.sin(t * 4) * 0.02);
      fitText(ctx, 'A BABY?!', 0, 0, 172, 960, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
    } },

    // 1 NORMAL SALAMANDERS: hatch in water, lose gills, crawl onto land
    { s: sceneT[1], draw(ctx, t) {
      // sky + land top, pond below
      const sky = ctx.createLinearGradient(0, 0, 0, 900); sky.addColorStop(0, '#fff3d9'); sky.addColorStop(1, '#ffe2c4'); ctx.fillStyle = sky; ctx.fillRect(0, 0, W, 1000);
      ctx.save(); ctx.globalAlpha = 0.9; ctx.fillStyle = C.white; ctx.fill(cloudP(220 + t * 10, 560, 1.0)); ctx.fill(cloudP(900 - t * 8, 640, 0.8)); ctx.restore();
      cel(ctx, rrP(-40, 820, W + 80, 260, 60), '#b8dd8f', '#93c46d', 0, -10, 5);
      rock(ctx, 760, 900, 1.0, '#bcae96', '#8fc27a');
      const wy = 1040 + Math.sin(t * 2) * 6;
      const water = ctx.createLinearGradient(0, wy, 0, HH); water.addColorStop(0, '#a7e0e8'); water.addColorStop(1, '#5fb3c4');
      ctx.fillStyle = water; ctx.fillRect(0, wy, W, HH - wy);
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.beginPath(); for (let x = 0; x <= W; x += 20) { const yy = wy + Math.sin(x * 0.02 + t * 3) * 8; x ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy); } ctx.stroke(); ctx.restore();
      bubbles(ctx, t, 21, 6, 40, 1040, 1100, 1700, 50);
      const ht = w(1, 'hatch') - 0.15, ls = w(2, 'lose') - 0.15, cr = w(2, 'crawl') - 0.15, ld = w(2, 'land') - 0.15;
      eggs(ctx, 210, 1500, t, P_[1].s - 0.05, t > ht);
      const m = seg(t, ls, w(2, 'gills') + 0.3), mv = seg(t, cr, ld + 0.25);
      const ap = pop(t, ht, 1.0);
      if (ap.s > 0) {
        const x = H.lerp(560, 740, mv), y = H.lerp(1380, 780, mv) - Math.sin(mv * Math.PI) * 80;
        axo(ctx, x, y + (mv < 1 ? bob(t, 1, 8) : 0), 0.62 * ap.s * H.lerp(1, 1.12, mv), { t, pal: LARVA, morph: m, eyes: mv >= 1 ? 'happy' : 'normal', mouth: mv >= 1 ? 'smile' : 'axo', rot: mv > 0 && mv < 1 ? -0.25 : 0, ph: 1 });
        if (mv > 0 && mv < 1) dashLines(ctx, x - 240, y + 40, 120, t, 3, C.white, -1);
      }
      if (t > cr - 0.1) dotted(ctx, bez([560, 1290], [420, 1150], [520, 960], [610, 840]), H.clamp((t - cr) / 0.5), C.butterD, 7, 24, 1);
      big(ctx, 'NORMAL', 540, 300, 130, t, P_[1].s - 0.1, { line: '#c98a5c' });
      label(ctx, 'HATCH', 210, 1640, 60, t, ht, C.sky);
      label(ctx, 'GILLS GONE', 820, 1280, 56, t, w(2, 'gills') - 0.15, C.pink);
      label(ctx, 'LAND!', 820, 620, 64, t, ld, C.mint);
      if (t > ld) for (let i = 0; i < 3; i++) sparkle(ctx, 620 + i * 130, 680 + (i % 2) * 40, 24 * pop(t, ld + i * 0.05).s, C.butter, 0, 4);
    } },

    // 2 THE AXOLOTL KEEPS IT ALL: portrait with tags
    { s: sceneT[2], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#ffe9f0', dot: '#fcd3e0', acc: '#f8c2d4', kind: 'hearts' }, 33);
      const fg = w(3, 'feathery') - 0.15, tl = w(4, 'tail') - 0.15, fc = w(4, 'face') - 0.25, wl = w(5, 'whole') - 0.15;
      const zoom = 1 + seg(t, P_[3].s, P_[5].e) * 0.06;
      ctx.save(); ctx.translate(540, 1080); ctx.scale(zoom, zoom); ctx.translate(-540, -1080);
      axo(ctx, 520, 1040 + bob(t, 0, 10), 1.35, { t, eyes: t > fc ? 'happy' : 'normal', mouth: t > fc ? 'smile' : 'axo', wave: t > wl, ph: 2 });
      ctx.restore();
      if (t > fg) dotted(ctx, bez([250, 700], [200, 760], [150, 820], [140, 880]), H.clamp((t - fg) / 0.4), C.pinkD, 7, 24, 1);
      if (t > tl) dotted(ctx, bez([860, 1580], [920, 1520], [960, 1460], [960, 1400]), H.clamp((t - tl) / 0.4), C.skyD, 7, 24, 1);
      label(ctx, 'FEATHERY GILLS', 340, 650, 56, t, fg, C.pink);
      label(ctx, 'TAIL FIN', 760, 1610, 58, t, tl, C.sky);
      if (t > fc) { label(ctx, 'BABY FACE', 760, 780, 58, t, fc, C.butter); heart(ctx, 860, 880 + bob(t, 1, 6), 34 * pop(t, fc + 0.1).s); }
      big(ctx, t < wl ? 'IT KEEPS' : 'WHOLE LIFE!', 540, 330, t < wl ? 130 : 124, t, t < wl ? P_[3].s - 0.1 : wl, { line: C.pinkD });
      if (t > wl) confetti(ctx, t, wl, 540, 900, 22, 44);
    } },

    // 3 THE SWITCH: thyroid hormone barely sent
    { s: sceneT[3], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#ece8ff', dot: '#dcd5fb', acc: '#cfc6f6', kind: 'stars' }, 41);
      const sw_ = w(6, 'switch') - 0.15, th = w(7, 'thyroid') - 0.15, br = w(8, 'barely') - 0.15, sg = w(8, 'signal') - 0.15;
      const sp = pop(t, P_[6].s, 1.0);
      if (sp.s > 0) { ctx.save(); ctx.translate(560, 880); ctx.scale(sp.sx, sp.sy); switchBox(ctx, 0, 0, 0.95, 0, t, t > sw_ && t < sw_ + 0.6 ? Math.sin(t * 40) * 6 : 0); ctx.restore(); }
      label(ctx, 'GROW UP', 560, 540, 60, t, w(7, 'growing') - 0.15, C.mint);
      // thyroid sends one weak drop
      const tp = pop(t, th, 1.0);
      if (tp.s > 0) { thyroid(ctx, 420, 1450, 0.85 * tp.s, t, t > br ? 'tired' : 'normal'); }
      label(ctx, 'THYROID HORMONE', 540, 1640, 54, t, w(7, 'hormone') - 0.15, C.lav);
      if (t > w(7, 'hormone')) {
        const u = H.clamp((t - w(7, 'hormone')) / 1.6), x = 420 + u * 60, y = H.lerp(1320, 1140, u) + Math.sin(u * 8) * 8, fz = seg(t, br + 0.2, br + 0.7);
        if (fz < 1) hormoneDrop(ctx, x, y, 1.1 * (1 - fz));
        if (fz > 0 && fz < 1) for (let i = 0; i < 5; i++) { const a = i / 5 * TAU; ctx.fillStyle = C.lavS; ctx.fill(ellP(x + Math.cos(a) * 40 * fz, y + Math.sin(a) * 40 * fz, 6, 6)); }
      }
      if (t > br) sweat(ctx, 560, 1330, 1.0);
      // signal meter
      const mp = pop(t, w(8, 'body') - 0.15, 1.0);
      if (mp.s > 0) { ctx.save(); ctx.translate(900, 1300); ctx.scale(mp.sx * 0.8, mp.sy * 0.8); meter(ctx, 0, 0, 0.08 + 0.04 * Math.sin(t * 5), t); ctx.restore(); }
      label(ctx, 'SIGNAL', 900, 1040, 48, t, w(8, 'body') - 0.15, C.butter);
      if (t > br) label(ctx, 'TOO WEAK', 860, 1560, 52, t, br, C.pink);
      big(ctx, t < br ? 'THE SWITCH' : 'BARELY ON', 540, 330, 124, t, t < br ? sw_ : br, { line: C.lavD });
    } },

    // 4 SKIPS ADULTHOOD, still has babies
    { s: sceneT[4], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#e3f6ea', dot: '#cbeed8', acc: '#b9e5c9', kind: 'dots' }, 51);
      const sk = w(9, 'skips') - 0.15, ad = w(9, 'adulthood') - 0.1, bb = w(10, 'babies') - 0.15;
      // signpost
      const sp = pop(t, P_[9].s - 0.05, 1.0);
      if (sp.s > 0) { ctx.save(); ctx.translate(760, 820); ctx.scale(sp.sx, sp.sy); cel(ctx, rrP(-18, 0, 36, 420, 10), '#c98a5c', '#a46a43', -3, -3, 4.5); const board = roundPoly([[-280, -80], [220, -80], [300, 0], [220, 80], [-280, 80]], 20); cel(ctx, board, C.butter, C.butterS, -6, -6, 5); ctx.font = `700 64px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = C.plum; ctx.fillText('ADULTHOOD', -20, 4); ctx.restore(); }
      const xs = pop(t, ad, 1.3);
      if (xs.s > 0) { ctx.save(); ctx.translate(740, 824); ctx.scale(xs.sx, xs.sy); ctx.rotate(-0.1); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 40; ctx.beginPath(); ctx.moveTo(-220, -90); ctx.lineTo(220, 90); ctx.moveTo(220, -90); ctx.lineTo(-220, 90); ctx.stroke(); ctx.strokeStyle = C.red; ctx.lineWidth = 24; ctx.stroke(); ctx.restore(); impactLines(ctx, 740, 824, 240, t, ad, 10, C.red); }
      // axolotl hops past, then settles
      const hp = seg(t, sk, sk + 0.6), hx = H.lerp(300, 380, hp), hy = 1220 - Math.sin(hp * Math.PI) * 160;
      axo(ctx, hx, hy + (hp >= 1 ? bob(t, 0, 8) : 0), 0.9, { t, eyes: t > sk ? 'happy' : 'normal', mouth: t > sk ? 'smile' : 'axo', rot: hp > 0 && hp < 1 ? 0.15 : 0, ph: 3 });
      if (hp > 0 && hp < 1) dashLines(ctx, hx - 280, hy, 150, t, 4, C.white, -1);
      // babies pop around
      if (t > bb - 0.2) [[150, 1520], [330, 1580], [560, 1540], [770, 1590], [940, 1500]].forEach(([bx, by], i) => { const p = pop(t, bb + i * 0.07, 1.2).s; if (p > 0) axo(ctx, bx, by + bob(t, i, 6), 0.27 * p, { t: t + i, eyes: i % 2 ? 'happy' : 'normal', ph: i }); });
      if (t > bb) heart(ctx, 600, 960 + bob(t, 2, 8), 46 * pop(t, bb + 0.2).s);
      big(ctx, t < bb ? 'SKIP!' : 'STILL HAS BABIES', 540, 330, t < bb ? 150 : 96, t, t < bb ? sk : bb, { line: C.mintD });
    } },

    // 5 PARIS 1865: sepia greenhouse, scientist shock, axolotl turns into a land salamander
    { s: sceneT[5], draw(ctx, t) {
      ctx.fillStyle = '#ebdcc4'; ctx.fillRect(0, 0, W, HH);
      // arched greenhouse windows
      for (let i = 0; i < 3; i++) { const x = 70 + i * 330, p = new Path2D(); p.moveTo(x, 1250); p.lineTo(x, 640); p.arc(x + 135, 640, 135, Math.PI, 0); p.lineTo(x + 270, 1250); p.closePath();
        cel(ctx, p, '#cdd8da', '#b4c2c6', -8, -8, 5); ctx.save(); ctx.clip(p); ctx.strokeStyle = '#6b6158'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x + 135, 500); ctx.lineTo(x + 135, 1250); for (let y = 760; y < 1250; y += 160) { ctx.moveTo(x, y); ctx.lineTo(x + 270, y); } ctx.stroke();
        ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.beginPath(); ctx.moveTo(x + 30, 1250); ctx.lineTo(x + 90, 1250); ctx.lineTo(x + 230, 600); ctx.lineTo(x + 170, 600); ctx.fill(); ctx.restore(); }
      // ferns
      [[60, 1300], [1020, 1300]].forEach(([fx, fy], i) => { for (let k = 0; k < 5; k++) { ctx.save(); ctx.translate(fx, fy); ctx.rotate(-1.3 + k * 0.6 + Math.sin(t * 1.5 + k) * 0.04); cel(ctx, ellP(0, -120, 30, 120), '#9cbf86', '#7fa36b', -4, -4, 4); ctx.restore(); } });
      cel(ctx, rrP(-40, 1300, W + 80, 700, 0), '#b9a283', '#9f8869', 0, -12, 5);
      const n65 = w(11, '1865') - 0.15, sc = w(11, 'scientists') - 0.15, pa = w(11, 'paris') - 0.15, sh = w(11, 'shock') - 0.15;
      const lo = w(12, 'lost') - 0.15, wk = w(13, 'walked') - 0.15, ln = w(13, 'land') - 0.15;
      // glass tank on a wooden table
      cel(ctx, rrP(180, 1560, 760, 50, 14), '#a46a43', '#7f4f30', -4, -4, 5);
      const tank = rrP(220, 1110, 680, 460, 18);
      ctx.save(); ctx.fillStyle = 'rgba(200,228,230,0.55)'; ctx.fill(tank); ctx.restore();
      ctx.save(); ctx.clip(tank); ctx.fillStyle = 'rgba(120,180,175,0.55)'; ctx.fillRect(220, 1230 + Math.sin(t * 2) * 4, 680, 340);
      ctx.restore();
      rock(ctx, 760, 1280, 0.62, '#a39a88', '#8fae74');
      // the axolotl in the tank: gills shrink, color darkens, walks up the rock
      const m = seg(t, lo, w(12, 'gills') + 0.4), mv = seg(t, wk, ln + 0.3);
      const ax_ = H.lerp(470, 770, mv), ay = H.lerp(1400, 1120, mv) - Math.sin(mv * Math.PI) * 50;
      const tp = pop(t, P_[11].s - 0.1, 1.0);
      if (tp.s > 0) axo(ctx, ax_, ay + (mv < 0.01 ? bob(t, 0, 6) : 0), 0.46 * tp.s, { t, morph: m, eyes: mv >= 1 ? 'happy' : 'normal', mouth: m > 0.5 ? 'smile' : 'axo', ph: 4 });
      ctx.save(); ol(ctx, tank, 5); ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(250, 1160); ctx.lineTo(250, 1300); ctx.stroke(); ctx.restore();
      if (m > 0.05 && m < 0.95) for (let i = 0; i < 6; i++) sparkle(ctx, 470 + Math.cos(i + t * 3) * 140, 1380 + Math.sin(i * 1.7 + t * 3) * 80, 18, C.butter, 0, 3);
      // scientist peeks in from the left
      const sp = pop(t, sc, 1.0);
      if (sp.s > 0) { ctx.save(); ctx.translate(170, 1130); ctx.scale(sp.sx * 0.95, sp.sy * 0.95); scientist(ctx, 0, 0, 1, t, t > sh && t < lo + 0.3 ? 'shock' : (t > ln ? 'star' : 'normal')); ctx.restore(); }
      if (t > sh && t < lo) { speedLines(ctx, 540, 1100, t, 0.35, 30, '74,51,40', 600); qmark(ctx, 320, 640, 130, t, sh, 0, '!?'); }
      // header
      if (t < sh) { numPop(ctx, '1865', 540, 340, 170, t, n65, { line: '#a46a43', fill: '#fff6e8' }); label(ctx, 'PARIS', 540, 520, 64, t, pa, C.butter); }
      else if (t < lo) big(ctx, 'SHOCK!', 540, 340, 150, t, sh, { line: '#a46a43' });
      else if (t < ln) big(ctx, 'GILLS GONE', 540, 340, 120, t, lo, { line: '#a46a43' });
      else { big(ctx, 'LAND', 540, 300, 130, t, ln, { line: '#7f8f5a' }); big(ctx, 'SALAMANDER!', 540, 450, 104, t, ln + 0.1, { line: '#7f8f5a' }); }
    } },

    // 6 THE SWITCH WAS NEVER BROKEN
    { s: sceneT[6], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#fff2d8', dot: '#f9e2b0', acc: '#f5d58f', kind: 'stars' }, 61);
      const fl = w(14, 'switch') - 0.1, nb = w(14, 'broken') - 0.15, on = seg(t, fl, fl + 0.25);
      if (t > fl) speedLines(ctx, 540, 1000, t, 0.4, 32, '255,255,255', 470);
      switchBox(ctx, 540, 1000, 1.15, on, t);
      if (t > fl + 0.2) { impactLines(ctx, 540, 1000 - 130, 200, t, fl + 0.2, 10, C.butterD); for (let i = 0; i < 5; i++) sparkle(ctx, 540 + Math.cos(i * 1.26 + t) * 380, 1000 + Math.sin(i * 1.26 + t) * 420, 30 * pop(t, fl + 0.2 + i * 0.05).s, i % 2 ? C.butter : C.white, 0, 4); }
      axo(ctx, 870, 1530 + bob(t, 0, 6), 0.42, { t, eyes: t > fl ? 'star' : 'normal', mouth: t > fl ? 'smile' : 'axo', ph: 6 });
      big(ctx, t < nb ? 'SO...' : 'NOT BROKEN!', 540, 330, t < nb ? 140 : 120, t, t < nb ? P_[14].s - 0.1 : nb, { line: C.butterD, fill: C.white });
    } },

    // 7 END: kid forever or grow up?
    { s: sceneT[7], draw(ctx, t) {
      lake(ctx, t, DUSKP, 71);
      bubbles(ctx, t, 73, 8, 40, 1040, 700, 1700, 60);
      const kd = w(15, 'kid') - 0.15, gu = w(15, 'grow') - 0.15;
      rock(ctx, 800, 1330, 0.75, '#9a9db8', '#7fae9a');
      axo(ctx, 290, 1200 + bob(t, 0, 10), 0.68, { t, eyes: t > kd && t < gu ? 'star' : 'normal', look: t < gu ? [0.6, -0.2] : [0.8, 0], ph: 7, wave: t > kd && t < gu });
      axo(ctx, 800, 1150 + bob(t, 2, 6), 0.55, { t: t + 1, morph: 1, eyes: t > gu ? 'happy' : 'normal', mouth: 'smile', ph: 8 });
      label(ctx, 'KID FOREVER?', 290, 1560, 54, t, kd, C.pink);
      label(ctx, 'GROW UP?', 800, 1560, 54, t, gu, C.mint);
      for (let i = 0; i < 4; i++) sparkle(ctx, 120 + i * 280, 700 + (i % 2) * 90 + bob(t, i, 8), 18 + 6 * Math.sin(t * 4 + i), i % 2 ? C.butter : C.white, 0, 3.5);
      big(ctx, t < gu + 0.3 ? 'YOU PICK' : 'COMMENT!', 540, 330, 140, t, t < gu + 0.3 ? P_[15].s - 0.1 : gu + 0.3, { line: C.lavD, fill: C.white });
      if (t > w(15, 'up') + 0.1) confetti(ctx, t, w(15, 'up') + 0.1, 540, 900, 30, 91);
    } },
  ];

  function bubbleWipe(ctx, u, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), R = 2000 * e * e + 4, p = ellP(cx, cy, R, R);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = '#bfeee0'; ctx.lineWidth = 24; ctx.stroke(p); ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.stroke(p); ctx.restore();
  }
  const SHAPES = ['bubble', 'heart', 'star', 'bubble', 'star', 'heart', 'bubble'];
  const CUTS = scenes.slice(1).map((sc, i) => ({ t: sc.s, shape: SHAPES[i] }));
  const CUTW = 0.4;

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) {
      const u = (t - (c.t - CUTW / 2)) / CUTW;
      scenes[i - 1].draw(ctx, t);
      if (c.shape === 'bubble') bubbleWipe(ctx, u, 540, 1050, () => scenes[i].draw(ctx, t));
      else wipe(ctx, W_, H_, u, c.shape, 540, 1050, () => scenes[i].draw(ctx, t));
    } else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 3.6); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const blub = (at, f = 500, g = 0.14) => k.tone(at, { f: [[0, f], [0.12, f * 1.8]], type: 'sine', dur: 0.14, gain: g, a: 0.005, hold: 0.03, minor: true });
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.38, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.38, 3000]], q: 0.9, gain: 0.28, a: 0.07 }); if (c.shape === 'bubble') for (let i = 0; i < 4; i++) blub(c.t - 0.15 + i * 0.07, 420 + i * 120, 0.16); else k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    k.play('whoosh', 0.02, { dur: 0.9, gain: 0.25 }); pop_(0.06, 650, 0.6, 0, false);
    for (let i = 0; i < 8; i++) blub(0.1 + i * 0.45 + (i % 3) * 0.07, 380 + (i * 97) % 400);
    pop_(w(0, 'refuses') - 0.1, 900, 0.5);
    big_(w(0, '15') - 0.15, 'C6'); k.play('success', w(0, '15') - 0.1, { f: 'C6', gain: 0.4 }); k.play('sparkle', w(0, 'years'), { n: 5, gain: 0.4 });
    // normal salamanders
    big_(P_[1].s - 0.1, 'G5');
    for (let i = 0; i < 7; i++) pop_(P_[1].s - 0.05 + i * 0.04, 600 + i * 60, 0.3, -0.5 + i * 0.1);
    pop_(w(1, 'hatch') - 0.15, 800, 0.6, -0.3, false);
    k.tone(w(2, 'lose') - 0.15, { f: [[0, 700], [0.4, 350]], type: 'triangle', dur: 0.45, gain: 0.15, a: 0.02, hold: 0.2 }); pop_(w(2, 'gills') - 0.15, 700, 0.5, 0.3);
    k.play('swish', w(2, 'crawl') - 0.15, { gain: 0.3 }); for (let i = 0; i < 4; i++) k.play('tick', w(2, 'crawl') - 0.1 + i * 0.12, { f: 1800, gain: 0.2, minor: true });
    big_(w(2, 'land') - 0.15, 'C6'); k.play('sparkle', w(2, 'land'), { n: 4, gain: 0.35 });
    // keeps
    big_(P_[3].s - 0.1, 'E6');
    pop_(w(3, 'feathery') - 0.15, 700, 0.6, -0.4, false); pop_(w(4, 'tail') - 0.15, 800, 0.6, 0.4, false); pop_(w(4, 'face') - 0.25, 900, 0.6, 0.3, false);
    k.play('sparkle', w(4, 'face'), { n: 4, gain: 0.35 });
    k.play('success', w(5, 'whole') - 0.15, { f: 'G5', gain: 0.4 });
    // switch
    big_(w(6, 'switch') - 0.15, 'G5'); k.play('click', w(6, 'switch') - 0.1, { gain: 0.4 }); k.play('click', w(6, 'switch') + 0.15, { gain: 0.3, minor: true });
    pop_(w(7, 'growing') - 0.15, 700, 0.5); pop_(w(7, 'thyroid') - 0.15, 600, 0.6, -0.3, false);
    blub(w(7, 'hormone'), 500, 0.2); k.play('riser', w(7, 'hormone'), { dur: 0.8, gain: 0.15 });
    pop_(w(8, 'body') - 0.15, 800, 0.5, 0.4);
    k.play('error', w(8, 'barely') - 0.15, { f: 'A3', gain: 0.3 }); k.tone(w(8, 'barely') + 0.2, { f: [[0, 600], [0.5, 200]], type: 'sine', dur: 0.5, gain: 0.15, a: 0.01, hold: 0.2 });
    // skip
    k.play('jump', w(9, 'skips') - 0.15, { gain: 0.4 }); k.play('whoosh', w(9, 'skips') - 0.1, { dur: 0.5, gain: 0.25 });
    k.play('stamp', w(9, 'adulthood') - 0.1, { gain: 0.45 });
    for (let i = 0; i < 5; i++) pop_(w(10, 'babies') - 0.15 + i * 0.07, 900 + i * 90, 0.4, -0.6 + i * 0.3);
    k.play('sparkle', w(10, 'babies'), { n: 5, gain: 0.4 });
    // paris
    k.play('paper', P_[11].s - 0.1, { gain: 0.35 }); k.play('stamp', w(11, '1865') - 0.15, { gain: 0.4 });
    pop_(w(11, 'scientists') - 0.15, 600, 0.6, -0.4, false); pop_(w(11, 'paris') - 0.15, 800, 0.5);
    k.play('error', w(11, 'shock') - 0.15, { f: 'C4', gain: 0.3 }); big_(w(11, 'shock') - 0.1, 'A5');
    pop_(w(12, 'axolotls') - 0.2, 700, 0.5);
    k.play('powerup', w(12, 'lost') - 0.15, { gain: 0.3 }); k.play('sparkle', w(12, 'gills') - 0.1, { n: 5, gain: 0.35 });
    for (let i = 0; i < 4; i++) k.play('tick', w(13, 'walked') - 0.1 + i * 0.15, { f: 1600, gain: 0.2, minor: true });
    k.play('success', w(13, 'land') - 0.15, { f: 'C6', gain: 0.45 });
    // broken
    big_(P_[14].s - 0.1, 'E5'); k.play('click', w(14, 'switch') - 0.1, { gain: 0.6 }); k.play('powerup', w(14, 'switch'), { gain: 0.35 });
    k.play('sparkle', w(14, 'switch') + 0.2, { n: 6, gain: 0.45 }); big_(w(14, 'broken') - 0.15, 'G6');
    // end
    big_(P_[15].s - 0.1, 'E6'); pop_(w(15, 'kid') - 0.15, 600, 0.6, -0.4); pop_(w(15, 'grow') - 0.15, 800, 0.6, 0.4);
    k.play('success', w(15, 'up') + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(15, 'up') + 0.1, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
