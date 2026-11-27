// ===== Kawaii Anime, vertical: "Why do your fingers wrinkle in water?" =====
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
  const P_ = [{"s":0.25,"e":1.62,"text":"Stop blaming the water.","words":[["stop",0.25],["blaming",0.54],["the",1.04],["water",1.26]]},{"s":2.0,"e":4.31,"text":"Your nerves wrinkle your fingers on purpose.","words":[["your",2.0],["nerves",2.25],["wrinkle",2.63],["your",3.06],["fingers",3.31],["on",3.75],["purpose",3.87]]},{"s":4.69,"e":7.6,"text":"For years, people blamed water soaking into the skin.","words":[["for",4.69],["years",4.9],["people",5.23],["blamed",5.64],["water",6.05],["soaking",6.38],["into",6.86],["the",7.13],["skin",7.33]]},{"s":7.94,"e":11.43,"text":"But since the 1930s, doctors noticed something odd.","words":[["but",7.94],["since",8.19],["the",8.61],["1930s",8.86],["doctors",9.27],["noticed",9.85],["something",10.43],["odd",11.18]]},{"s":11.89,"e":13.44,"text":"If a finger's nerves are damaged,","words":[["if",11.89],["a",12.01],["fingers",12.07],["nerves",12.48],["are",12.84],["damaged",13.02]]},{"s":13.78,"e":15.73,"text":"that finger stays perfectly smooth.","words":[["that",13.78],["finger",14.04],["stays",14.43],["perfectly",14.75],["smooth",15.34]]},{"s":16.08,"e":17.86,"text":"So it isn't the water. It's you.","words":[["so",16.08],["it",16.24],["isnt",16.4],["the",16.72],["water",16.97],["its",17.37],["you",17.62]]},{"s":18.33,"e":21.41,"text":"After a long soak, your nervous system squeezes","words":[["after",18.33],["a",18.73],["long",18.81],["soak",19.12],["your",19.44],["nervous",19.76],["system",20.31],["squeezes",20.78]]},{"s":21.48,"e":23.7,"text":"the tiny blood vessels under your fingertips.","words":[["the",21.48],["tiny",21.66],["blood",21.89],["vessels",22.18],["under",22.59],["your",22.88],["fingertips",23.12]]},{"s":24.11,"e":26.95,"text":"The pads shrink, and the skin folds into ridges,","words":[["the",24.11],["pads",24.33],["shrink",24.63],["and",25.08],["the",25.3],["skin",25.53],["folds",25.82],["into",26.2],["ridges",26.5]]},{"s":27.29,"e":28.91,"text":"like the treads on a rain tire.","words":[["like",27.29],["the",27.56],["treads",27.76],["on",28.17],["a",28.3],["rain",28.37],["tire",28.64]]},{"s":29.29,"e":32.62,"text":"In 2013, scientists tested it with marbles.","words":[["in",29.29],["2013",29.48],["scientists",29.87],["tested",30.82],["it",31.39],["with",31.58],["marbles",31.96]]},{"s":33.07,"e":35.92,"text":"With wrinkly fingers, people moved wet marbles","words":[["with",33.07],["wrinkly",33.36],["fingers",33.87],["people",34.39],["moved",34.82],["wet",35.19],["marbles",35.41]]},{"s":35.99,"e":36.88,"text":"twelve percent faster.","words":[["twelve",35.99],["percent",36.27],["faster",36.6]]},{"s":37.31,"e":39.41,"text":"Dry marbles? No difference at all.","words":[["dry",37.31],["marbles",37.54],["no",38.09],["difference",38.24],["at",39.02],["all",39.18]]},{"s":39.85,"e":41.34,"text":"So, are those soggy fingers,","words":[["so",39.85],["are",39.99],["those",40.19],["soggy",40.53],["fingers",40.87]]},{"s":41.62,"e":43.1,"text":"or your built-in rain tires?","words":[["or",41.62],["your",41.75],["builtin",42.02],["rain",42.49],["tires",42.76]]}];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const BEATS = [
    { id: 'hook', s: 0, e: P_[1].e, on: 'FULL FRAME at 0 s: big finished hand mascot with pruney fingertips rising from a bubble bath, SECRET / GRIP?! text; nerve zaps on "nerves", ON PURPOSE tag' },
    { id: 'myth', s: P_[2].s, e: P_[2].e, on: 'fingertip close-up, cute water drops dive into the skin, SOAKING IN? myth tag with question marks' },
    { id: 'doctors', s: P_[3].s, e: P_[3].e, on: 'sepia-pastel 1930s clinic: chibi doctor with round glasses, 1930s pops on the number, !? on "odd"' },
    { id: 'nerve', s: P_[4].s, e: P_[6].e, on: 'two fingers after a soak: left nerve OK = wrinkly, right nerve DAMAGED = SMOOTH!; water drop shrugs NOT ME, IT\'S YOU!' },
    { id: 'squeeze', s: P_[7].s, e: P_[10].e, on: 'fingertip cutaway: brain sends signal, blood vessels squeeze thin, pad shrinks, skin folds into RIDGES, camera slides to a rain tire with matching treads' },
    { id: 'marbles', s: P_[11].s, e: P_[13].e, on: '2013 lab table: wrinkly hand moves wet marbles between bowls, stopwatch, 12% FASTER' },
    { id: 'dry', s: P_[14].s, e: P_[14].e, on: 'dry marbles: two equal stopwatches, = NO DIFFERENCE' },
    { id: 'end', s: P_[15].s, e: P_[16].e, on: 'lilac evening bath: hand mascot, SOGGY? vs RAIN TIRES? choice, COMMENT! (loops to hook)' },
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

  // ---------- palette: warm peach skin, aqua bathroom, lilac evening ----------
  const SK = { b: '#ffd6bd', s: '#f0ad8a', d: '#d9876a', pale: '#f3e2e6', line: '#c9775f' };
  const AQ = { tile: '#d4f1ee', grout: '#b5e2dd', tub: '#ffffff', tubS: '#d8e6f2', water: '#bfe6fb', waterS: '#93cdee' };

  // ---------- the hand mascot (palm toward camera, face on the palm) ----------
  // fingers: [baseX, baseY, width, length, restAngle]
  const FING = [[-108, -70, 74, 205, -0.13], [-36, -92, 78, 245, -0.04], [38, -90, 76, 228, 0.04], [108, -62, 66, 172, 0.14]];
  function fingerP(bx, by, fw, fl, rot) {
    const m = new DOMMatrix().translate(bx, by).rotate(rot * 180 / Math.PI), p = new Path2D();
    p.addPath(rrP(-fw / 2, -fl, fw, fl + 40, fw / 2), m); return p;
  }
  // wavy wrinkle lines inside a fingertip (local finger frame), amount 0..1
  function fingerWrinkles(ctx, bx, by, fw, fl, rot, amt, seed) {
    if (amt <= 0.02) return;
    ctx.save(); ctx.translate(bx, by); ctx.rotate(rot);
    const clip = rrP(-fw / 2, -fl, fw, fl + 40, fw / 2); ctx.clip(clip);
    // pale, slightly shrunken pad
    ctx.fillStyle = H.rgba(SK.pale, 0.55 * amt); ctx.fill(ellP(0, -fl + fw * 0.75, fw * 0.48, fw * 0.8));
    ctx.strokeStyle = H.rgba(SK.line, 0.95 * amt); ctx.lineCap = 'round'; ctx.lineWidth = 4.5;
    const r = H.rng(seed);
    for (let i = 0; i < 5; i++) {
      const y = -fl + fw * 0.35 + i * fw * 0.24, a = (6 + r() * 4) * amt;
      ctx.beginPath(); ctx.moveTo(-fw * 0.36, y);
      for (let k = 1; k <= 4; k++) ctx.quadraticCurveTo(-fw * 0.36 + (k - 0.5) * fw * 0.18, y + (k % 2 ? -a : a), -fw * 0.36 + k * fw * 0.18, y);
      ctx.stroke();
    }
    ctx.restore();
  }
  // o: t, prune (0..1 or [per finger]), wig (0..1), eyes, mouth, look, sx, sy, zap (0..1 nerve lines), hold (marble in fingertips)
  function hand(ctx, x, y, s, o = {}) {
    const t = o.t || 0, wig = o.wig == null ? 1 : o.wig;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.sx || 1), s * (o.sy || 1)); ctx.rotate(o.rot || 0);
    const rots = FING.map((f, i) => f[4] + wig * 0.06 * Math.sin(t * 4.2 + i * 1.1));
    const fps = FING.map((f, i) => fingerP(f[0], f[1], f[2], f[3], rots[i]));
    const thumb = new Path2D(); thumb.addPath(rrP(-38, -150, 76, 190, 38), new DOMMatrix().translate(-150, 70).rotate((-0.95 + wig * 0.08 * Math.sin(t * 3.4)) * 180 / Math.PI));
    const wrist = rrP(-110, 120, 220, 220, 60);
    const palm = rrP(-160, -120, 320, 280, 120);
    const all = [wrist, thumb, ...fps, palm];
    // union outline, then cel fill per part (one shade tone)
    ctx.save(); ctx.lineWidth = 2 * 5.5 / scaleOf(ctx); ctx.strokeStyle = C.plum; ctx.lineJoin = 'round'; all.forEach((p) => ctx.stroke(p)); ctx.restore();
    all.forEach((p) => { ctx.save(); ctx.fillStyle = SK.s; ctx.fill(p); ctx.clip(p); ctx.translate(-10, -10); ctx.fillStyle = SK.b; ctx.fill(p); ctx.restore(); });
    // finger crease hints + nails are on the back, so just knuckle creases
    ctx.save(); ctx.strokeStyle = H.rgba(SK.d, 0.6); ctx.lineWidth = 4; ctx.lineCap = 'round';
    FING.forEach((f, i) => { ctx.save(); ctx.translate(f[0], f[1]); ctx.rotate(rots[i]); ctx.beginPath(); ctx.moveTo(-f[2] * 0.25, -f[3] * 0.42); ctx.lineTo(f[2] * 0.25, -f[3] * 0.42); ctx.stroke(); ctx.restore(); });
    ctx.restore();
    // wrinkles on the tips (thumb too)
    const pr = (i) => Array.isArray(o.prune) ? o.prune[i] : (o.prune || 0);
    FING.forEach((f, i) => fingerWrinkles(ctx, f[0], f[1], f[2], f[3], rots[i], pr(i), 11 + i));
    // nerve zaps: little yellow lightning ticks running up each finger (flat colour, no glow)
    if (o.zap > 0) FING.forEach((f, i) => {
      ctx.save(); ctx.translate(f[0], f[1]); ctx.rotate(rots[i]);
      const u = (t * 2.2 + i * 0.27) % 1, yy = 40 - u * (f[3] - 20);
      ctx.globalAlpha = o.zap; ctx.strokeStyle = C.plum; ctx.lineWidth = 13; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      const z = new Path2D(); z.moveTo(-10, yy + 26); z.lineTo(8, yy + 6); z.lineTo(-6, yy + 2); z.lineTo(10, yy - 22);
      ctx.stroke(z); ctx.strokeStyle = C.butterD; ctx.lineWidth = 7; ctx.stroke(z); ctx.restore();
    });
    // face on the palm
    const look = o.look || [0, 0];
    eye(ctx, -58, 10, 30, 40, '#5aa6d8', o.eyes || 'normal', -1, look);
    eye(ctx, 58, 10, 30, 40, '#5aa6d8', o.eyes || 'normal', 1, look);
    blush(ctx, -96, 66, 22, 12); blush(ctx, 96, 66, 22, 12);
    mouth(ctx, 0, 78, 16, o.mouth || 'w');
    ctx.restore();
  }

  // ---------- props ----------
  function bubbles(ctx, t, seed, n, x0, x1, y0, y1, rise = 30) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const rr = r.range(14, 42), x = r.range(x0, x1) + Math.sin(t * 1.5 + i) * 10, y = y1 - ((r.range(0, y1 - y0) + t * rise * r.range(0.6, 1.4)) % (y1 - y0));
      ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.fill(ellP(x, y, rr, rr)); ctx.strokeStyle = H.rgba(AQ.waterS, 0.9); ctx.lineWidth = 3; ctx.stroke(ellP(x, y, rr, rr));
      shine(ctx, x - rr * 0.35, y - rr * 0.35, rr * 0.25, rr * 0.15, -0.6, 0.9); ctx.restore();
    }
  }
  function foam(ctx, cx, cy, wdt, t, seed) {
    const r = H.rng(seed), ps = [];
    for (let i = 0; i < 9; i++) { const x = cx - wdt / 2 + (i + 0.5) * wdt / 9, rr = r.range(55, 85); ps.push(ellP(x, cy + Math.sin(t * 2 + i) * 6 + r.range(-15, 15), rr, rr * 0.8)); }
    union(ctx, ps, C.white, 5);
    for (let i = 0; i < 5; i++) shine(ctx, cx - wdt / 2 + 60 + i * wdt / 5, cy - 30, 14, 8, -0.4, 0.7);
  }
  function bathroomBg(ctx, t, seed, base = AQ.tile, grout = AQ.grout, dusk = 0, props = true) {
    ctx.fillStyle = base; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.strokeStyle = grout; ctx.lineWidth = 6; ctx.beginPath();
    for (let x = 0; x <= W; x += 135) { ctx.moveTo(x, 0); ctx.lineTo(x, 1300); } for (let y = 0; y <= 1300; y += 135) { ctx.moveTo(0, y); ctx.lineTo(W, y); } ctx.stroke(); ctx.restore();
    if (props) {
    // round window with soft light
    cel(ctx, ellP(170, 260, 120, 120), dusk ? '#e6d4ff' : '#fff6e0', dusk ? '#c9b3f0' : '#f4e2b8', -6, -6, 5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(50, 260); ctx.lineTo(290, 260); ctx.moveTo(170, 140); ctx.lineTo(170, 380); ctx.stroke(); ctx.restore();
    // shelf with shampoo bottles
    cel(ctx, rrP(760, 470, 260, 26, 10), '#f6cfa8', '#e0b088', -3, -3, 4.5);
    [[800, '#ffb3c7', 120], [870, '#b9e5c8', 150], [945, '#cfc6ff', 100]].forEach(([bx, c, hgt]) => { cel(ctx, rrP(bx - 28, 470 - hgt, 56, hgt, 18), c, H.rgba(H.mix(c, C.plum, 0.2)), -4, -4, 4.5); cel(ctx, rrP(bx - 12, 470 - hgt - 26, 24, 30, 6), C.white, C.creamS, -2, -2, 4); });
    }
    twinkles(ctx, W, 1250, t, seed, 7, (x, y) => y > 500);
  }
  function tub(ctx, t, y = 1330) {
    // back rim + water + front wall
    cel(ctx, rrP(-60, y - 60, W + 120, 90, 45), AQ.tub, AQ.tubS, -6, -6, 5.5);
    ctx.fillStyle = AQ.water; ctx.fillRect(-10, y - 20, W + 20, 120);
  }
  function tubFront(ctx, t, y = 1330) {
    const p = rrP(-60, y + 20, W + 120, 760, 120); cel(ctx, p, '#ffd3e2', '#f4b1c8', -10, -12, 5.5);
    ctx.save(); ctx.clip(p); ctx.fillStyle = '#ffe6ef'; for (let j = 0; j < 6; j++) for (let i = -1; i < 10; i++) { const hx = i * 130 + (j % 2 ? 65 : 0) + 20, hy = y + 170 + j * 100; ctx.fill(heartP(hx, hy, 16)); } ctx.restore();
    cel(ctx, rrP(-60, y + 20, W + 120, 60, 30), C.white, AQ.tubS, -4, -4, 5);
    shine(ctx, 120, y + 130, 60, 16, -0.15, 0.8);
    [[200, y + 640], [880, y + 640]].forEach(([fx, fy]) => cel(ctx, ellP(fx, fy, 40, 22), '#f6cfa8', '#e0b088', -2, -2, 4.5));
  }
  function duck(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y + Math.sin(t * 2.6) * 6); ctx.rotate(Math.sin(t * 2.6) * 0.06); ctx.scale(s, s);
    cel(ctx, ellP(0, 0, 70, 46), C.butterD, '#e9a92a', -6, -6, 5);
    cel(ctx, ellP(40, -52, 38, 36), C.butterD, '#e9a92a', -5, -5, 5);
    cel(ctx, roundPoly([[66, -56], [104, -46], [68, -36]], 8), '#ff9a52', '#e57a35', -2, -2, 4);
    eye(ctx, 46, -60, 9, 12, '#7d5d40', 'normal', 1, [0.4, 0]); blush(ctx, 30, -40, 10, 6);
    ctx.restore();
  }
  function drop(ctx, x, y, s, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(s * (o.sx || 1), s * (o.sy || 1));
    const p = new Path2D(); p.moveTo(0, -90); p.bezierCurveTo(26, -44, 62, -6, 62, 30); p.arc(0, 30, 62, 0, Math.PI); p.bezierCurveTo(-62, -6, -26, -44, 0, -90); p.closePath();
    cel(ctx, p, '#a8dcfa', '#6fb9e6', -8, -8, 5); shine(ctx, -24, 12, 10, 20, 0.3);
    eye(ctx, -20, 22, 11, 15, '#2f6fa8', o.eyes || 'normal', -1, o.look || [0, 0]); eye(ctx, 20, 22, 11, 15, '#2f6fa8', o.eyes || 'normal', 1, o.look || [0, 0]);
    mouth(ctx, 0, 52, 8, o.mouth || 'w');
    if (o.shrug) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-58, 40); ctx.lineTo(-96, 6 - o.shrug * 20); ctx.moveTo(58, 40); ctx.lineTo(96, 6 - o.shrug * 20); ctx.stroke(); ctx.strokeStyle = '#6fb9e6'; ctx.lineWidth = 5; ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }
  function doctor(ctx, x, y, s, t, eyes = 'normal') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-120, 90, 240, 260, 70), '#fbf7f0', '#e3d9c8', -6, -6, 5); // white coat
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(0, 100); ctx.lineTo(0, 340); ctx.moveTo(-40, 100); ctx.lineTo(0, 170); ctx.lineTo(40, 100); ctx.stroke(); ctx.restore();
    cel(ctx, rrP(-14, 120, 28, 40, 6), '#a3485c', '#7f3446', -2, -2, 3.5); // bow tie knot
    cel(ctx, ellP(0, 0, 100, 96), '#ffe0c7', '#f2b88f', -6, -6, 5);
    ctx.save(); const hc = ellP(0, 0, 100, 96); ctx.clip(hc); cel(ctx, ellP(-10, -82, 130, 62, -0.1), '#8a8f9c', '#6e7380', -4, -4, 0); ctx.restore(); ol(ctx, ellP(0, 0, 100, 96), 5);
    eye(ctx, -36, 8, 18, 24, '#6a7d55', eyes, -1, [0.3, 0]); eye(ctx, 36, 8, 18, 24, '#6a7d55', eyes, 1, [0.3, 0]);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.stroke(ellP(-36, 8, 30, 30)); ctx.stroke(ellP(36, 8, 30, 30)); ctx.beginPath(); ctx.moveTo(-6, 6); ctx.lineTo(6, 6); ctx.stroke(); ctx.restore();
    cel(ctx, rrP(-55, 46, 110, 18, 9), '#8a8f9c', '#6e7380', -2, -2, 4); // moustache
    mouth(ctx, 0, 76, 10, eyes === 'shock' ? 'o' : 'flat');
    ctx.restore();
  }
  function marble(ctx, x, y, r, col, wet) {
    cel(ctx, ellP(x, y, r, r), col, H.rgba(H.mix(col, C.plum, 0.25)), -r * 0.2, -r * 0.2, 4.5);
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = r * 0.16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, r * 0.55, Math.PI * 0.15, Math.PI * 0.75); ctx.stroke(); ctx.restore();
    shine(ctx, x - r * 0.35, y - r * 0.4, r * 0.22, r * 0.14);
    if (wet) { [[r * 0.75, -r * 0.6], [-r * 0.8, r * 0.3]].forEach(([dx, dy], i) => { ctx.save(); ctx.translate(x + dx, y + dy); const p = new Path2D(); p.moveTo(0, -14); p.bezierCurveTo(5, -5, 10, 0, 10, 5); p.arc(0, 5, 10, 0, Math.PI); p.bezierCurveTo(-10, 0, -5, -5, 0, -14); cel(ctx, p, '#a8dcfa', '#6fb9e6', -2, -2, 3); ctx.restore(); }); }
  }
  function bowl(ctx, x, y, s, col, water) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (water) { ctx.fillStyle = AQ.water; ctx.fill(ellP(0, -10, 150, 30)); }
    const p = new Path2D(); p.moveTo(-170, -10); p.quadraticCurveTo(-160, 150, 0, 150); p.quadraticCurveTo(160, 150, 170, -10); p.closePath();
    cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.2)), -8, -8, 5);
    ctx.restore();
  }
  function stopwatch(ctx, x, y, s, t, run, col = C.mint) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-22, -150, 44, 40, 10), '#c9c3d9', '#a9a2bd', -2, -2, 4.5);
    cel(ctx, ellP(0, 0, 120, 120), col, H.rgba(H.mix(col, C.plum, 0.2)), -8, -8, 5.5);
    cel(ctx, ellP(0, 0, 92, 92), C.white, C.creamS, -4, -4, 4.5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.lineCap = 'round';
    for (let i = 0; i < 12; i++) { const a = i * TAU / 12; ctx.beginPath(); ctx.moveTo(Math.cos(a) * 72, Math.sin(a) * 72); ctx.lineTo(Math.cos(a) * 82, Math.sin(a) * 82); ctx.stroke(); }
    const a = -Math.PI / 2 + run * TAU; ctx.strokeStyle = C.pinkD; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * 66, Math.sin(a) * 66); ctx.stroke();
    ctx.fillStyle = C.plum; ctx.fill(ellP(0, 0, 10, 10)); ctx.restore();
    ctx.restore();
  }
  function tire(ctx, x, y, R, t, spin, eyes = 'happy') {
    ctx.save(); ctx.translate(x, y);
    cel(ctx, ellP(0, 0, R, R), '#5d6178', '#43465a', -10, -10, 5.5);
    ctx.save(); ctx.rotate(spin); ctx.fillStyle = '#43465a'; ctx.strokeStyle = C.plum; ctx.lineWidth = 4;
    for (let i = 0; i < 18; i++) { ctx.save(); ctx.rotate(i * TAU / 18); const p = roundPoly([[R - 4, -14], [R + 22, -8], [R + 22, 8], [R - 4, 14]], 5); ctx.fill(p); ctx.stroke(p); ctx.restore(); }
    ctx.restore();
    cel(ctx, ellP(0, 0, R * 0.55, R * 0.55), '#dfe3ee', '#bcc2d3', -5, -5, 5);
    eye(ctx, -R * 0.2, -R * 0.06, R * 0.09, R * 0.12, '#7f72d9', eyes, -1, [0, 0]); eye(ctx, R * 0.2, -R * 0.06, R * 0.09, R * 0.12, '#7f72d9', eyes, 1, [0, 0]);
    mouth(ctx, 0, R * 0.2, R * 0.07, 'w');
    ctx.restore();
  }
  function brain(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y + bob(t, 1, 5)); ctx.scale(s, s);
    union(ctx, [cloudP(0, 0, 1.1)], '#ffc1d6', 5);
    ctx.save(); ctx.clip(cloudP(0, 0, 1.1)); ctx.strokeStyle = '#e88fb0'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, -60); ctx.quadraticCurveTo(-14, 0, 0, 60); ctx.moveTo(-70, -10); ctx.quadraticCurveTo(-40, -30, -30, 10); ctx.moveTo(70, -10); ctx.quadraticCurveTo(40, -30, 30, 10); ctx.stroke(); ctx.restore();
    eye(ctx, -26, 8, 11, 14, '#b8456f', 'normal', -1, [0.5, 0.4]); eye(ctx, 26, 8, 11, 14, '#b8456f', 'normal', 1, [0.5, 0.4]);
    ctx.restore();
  }

  // ---------- extra wipe: bubble circle ----------
  function bubbleWipe(ctx, u, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), R = 2000 * e * e + 4, p = ellP(cx, cy, R, R);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = AQ.water; ctx.lineWidth = 24; ctx.stroke(p); ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.stroke(p); ctx.restore();
  }

  const sceneT = [0, 4.5, 7.77, 11.65, 18.1, 29.1, 37.1, 39.63];
  const scenes = [
    // 0: HOOK. Full frame at t=0: finished hand mascot with pruney tips, in a bubble bath + SECRET GRIP?!
    { s: sceneT[0], draw(ctx, t) {
      bathroomBg(ctx, t, 3, AQ.tile, AQ.grout, 0, false);
      tub(ctx, t, 1360);
      const cy = 1140 + bob(t, 0, 10), zapT = w(1, 'nerves') - 0.15;
      hand(ctx, 540, cy, 1.55, { t, prune: 1, eyes: t > w(1, 'purpose') - 0.1 ? 'happy' : (t > zapT && t < zapT + 0.9 ? 'star' : 'normal'), mouth: t > w(1, 'purpose') - 0.1 ? 'smile' : 'w', look: [0, -0.3], zap: t > zapT ? 1 - seg(t, w(1, 'purpose'), w(1, 'purpose') + 0.4) * 0.6 : 0, rot: Math.sin(t * 1.7) * 0.03 });
      foam(ctx, 540, 1390, 1250, t, 7);
      tubFront(ctx, t, 1380);
      duck(ctx, 880, 1340, 1.0, t);
      bubbles(ctx, t, 9, 9, 60, 1020, 700, 1350, 60);
      if (t > zapT) impactLines(ctx, 540, 740, 220, t, zapT, 10, C.butterD);
      label(ctx, 'NERVES', 230, 980, 58, t, zapT, C.butter);
      label(ctx, 'ON PURPOSE', 540, 1560, 64, t, w(1, 'purpose') - 0.15, C.mint);
      for (let i = 0; i < 3; i++) sparkle(ctx, [180, 900, 820][i], [560, 640, 880][i] + bob(t, i, 8), 24 + 6 * Math.sin(t * 4 + i), i % 2 ? C.butter : C.white, 0, 4);
      // hook words: full size + full opacity from frame 0
      ctx.save(); ctx.translate(540, 300); ctx.rotate(Math.sin(t * 3) * 0.015);
      kText(ctx, 'SECRET', 0, 0, 132, { fill: C.white, line: C.skyD, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
      ctx.save(); ctx.translate(540, 470); ctx.rotate(-0.04 + Math.sin(t * 4) * 0.02);
      fitText(ctx, 'GRIP?!', 0, 0, 170, 960, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
    } },

    // 1: the myth: water soaking in
    { s: sceneT[1], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#dff3fb', dot: '#c7e8f6', acc: '#b5def2', kind: 'dots' }, 13);
      // giant fingertip from the bottom
      const fx = 540, fy = 1700, zoom = 1 + seg(t, sceneT[1], P_[2].e) * 0.06;
      ctx.save(); ctx.translate(fx, fy); ctx.scale(zoom, zoom);
      const tip = rrP(-260, -900, 520, 1200, 260);
      cel(ctx, tip, SK.b, SK.s, -18, -18, 6);
      ctx.save(); ctx.clip(tip); ctx.strokeStyle = H.rgba(SK.d, 0.35); ctx.lineWidth = 5; for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.ellipse(0, -560, 70 + i * 34, 90 + i * 40, 0, Math.PI * 1.05, Math.PI * 1.95); ctx.stroke(); } ctx.restore();
      ctx.restore();
      // cute drops dive into the skin on "soaking"
      const sk = w(2, 'soaking') - 0.2;
      [[330, 0], [540, 0.12], [750, 0.24]].forEach(([x, d], i) => {
        const u = H.clamp((t - sk - d) / 0.7), yy = H.lerp(560, 920, H.ease.in(u)), k = pop(t, P_[2].s - 0.1 + d).s * (u >= 1 ? 1 - seg(t, sk + d + 0.7, sk + d + 0.9) : 1);
        if (k > 0) drop(ctx, x, yy + bob(t, i, 6), 1.05 * k, { eyes: u > 0.2 ? 'squeeze' : 'happy', mouth: 'smile', rot: u > 0 ? 0 : Math.sin(t * 3 + i) * 0.1 });
        if (u > 0.95) impactLines(ctx, x, 960, 40, t, sk + d + 0.68, 7, AQ.waterS);
      });
      big(ctx, 'THE MYTH', 540, 320, 124, t, P_[2].s - 0.1, { line: C.skyD });
      label(ctx, 'SOAKING IN?', 540, 1480, 66, t, sk, C.sky);
      qmark(ctx, 220, 1260, 120, t, w(2, 'skin') - 0.15, 0); qmark(ctx, 860, 1240, 130, t, w(2, 'skin') - 0.05, 1.5);
    } },

    // 2: 1930s: doctors noticed something odd
    { s: sceneT[2], draw(ctx, t) {
      ctx.fillStyle = '#f4e6cf'; ctx.fillRect(0, 0, W, HH);
      ctx.save(); ctx.fillStyle = '#ead6b6'; for (let x = -40; x < W; x += 90) ctx.fillRect(x + ((t * 6) % 90), 0, 44, 1350); ctx.restore();
      cel(ctx, rrP(-40, 1350, W + 80, 700, 0), '#cdb594', '#b39a78', 0, -14, 6);
      // framed diploma + hanging lamp
      cel(ctx, rrP(700, 520, 260, 200, 14), '#fff8ea', '#e8d9bd', -5, -5, 5); ctx.save(); ctx.strokeStyle = '#b39a78'; ctx.lineWidth = 6; ctx.beginPath(); for (let i = 0; i < 4; i++) { ctx.moveTo(740, 570 + i * 38); ctx.lineTo(920, 570 + i * 38); } ctx.stroke(); ctx.restore();
      const n30 = w(3, '1930s') - 0.15, nd = w(3, 'doctors') - 0.15, od = w(3, 'odd') - 0.15;
      const dp = pop(t, nd, 1.1);
      if (dp.s > 0) { ctx.save(); ctx.translate(380, 1220); ctx.scale(dp.sx * 1.6, dp.sy * 1.6); doctor(ctx, 0, 0, 1, t, t > od ? 'shock' : 'normal'); ctx.restore(); }
      // calendar page with the decade
      const cp = pop(t, P_[3].s - 0.1);
      if (cp.s > 0) { ctx.save(); ctx.translate(800, 1050); ctx.rotate(0.06); ctx.scale(cp.sx, cp.sy); cel(ctx, rrP(-150, -140, 300, 290, 26), C.white, C.creamS, -6, -6, 5); cel(ctx, rrP(-150, -140, 300, 80, 26), '#e2725b', '#c45a45', -4, -4, 5); ctx.restore(); }
      numPop(ctx, '1930s', 800, 1150, 120, t, n30, { line: '#c45a45', fill: C.white, rot: 0.06 });
      big(ctx, 'DOCTORS', 540, 320, 124, t, nd, { line: '#c98a5c' });
      if (t > od) { qmark(ctx, 560, 820, 140, t, od, 0, '!?'); sweat(ctx, 220, 860, 1.2); }
      label(ctx, 'SOMETHING ODD', 540, 1560, 62, t, od, C.butter);
    } },

    // 3: nerve OK = wrinkly, nerve damaged = smooth; it's you, not the water
    { s: sceneT[3], draw(ctx, t) {
      bathroomBg(ctx, t, 23, '#e8f0ff', '#d2def7', 0, false);
      const dm = w(4, 'damaged') - 0.15, sm = w(5, 'smooth') - 0.15, iw = w(6, 'water') - 0.15, iy = w(6, 'its') - 0.1;
      // two big fingers rising
      const drawFinger = (x, prune, broken, t0) => {
        const p = pop(t, t0, 0.9); if (p.s <= 0) return;
        ctx.save(); ctx.translate(x, 1500); ctx.scale(p.sx, p.sy);
        const f = rrP(-120, -760, 240, 900, 120); cel(ctx, f, SK.b, SK.s, -12, -12, 6);
        fingerWrinkles(ctx, 0, 140, 240, 900, 0, prune, broken ? 5 : 4);
        // nerve: a yellow cord up the middle
        ctx.save(); ctx.clip(f); ctx.lineCap = 'round';
        const nv = new Path2D(); nv.moveTo(0, 160); nv.bezierCurveTo(-40, -100, 40, -300, 0, -560);
        ctx.setLineDash([]); ctx.strokeStyle = C.plum; ctx.lineWidth = 22; ctx.stroke(nv); ctx.strokeStyle = C.butterD; ctx.lineWidth = 13; ctx.stroke(nv);
        if (broken) { ctx.fillStyle = SK.b; ctx.fillRect(-60, -320, 120, 70); }
        ctx.restore();
        if (broken) { const k = pop(t, dm).s; if (k > 0) { ctx.save(); ctx.translate(0, -285); ctx.scale(k, k); ctx.strokeStyle = C.plum; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-40, -40); ctx.lineTo(40, 40); ctx.moveTo(40, -40); ctx.lineTo(-40, 40); ctx.stroke(); ctx.strokeStyle = C.red; ctx.lineWidth = 8; ctx.stroke(); ctx.restore(); } }
        ctx.restore();
      };
      const smoothing = seg(t, sm - 0.1, sm + 0.4);
      drawFinger(300, 1, false, P_[4].s - 0.2);
      drawFinger(780, 1 - smoothing, true, P_[4].s - 0.05);
      label(ctx, 'NERVE OK', 300, 620, 54, t, P_[4].s, C.mint);
      label(ctx, 'NERVE DAMAGED', 780, 620, 54, t, dm, C.pink);
      if (t > sm) { for (let i = 0; i < 4; i++) sparkle(ctx, 780 + Math.cos(i * 1.6) * 170, 1000 + Math.sin(i * 1.6) * 200, 26 * pop(t, sm + i * 0.05).s, C.white, 0, 4); }
      big(ctx, t < iw - 0.2 ? 'SMOOTH!' : "IT'S YOU!", 540, 330, 130, t, t < iw - 0.2 ? sm : iy, { line: t < iw - 0.2 ? C.pinkD : C.lavD });
      // water drop shrugs: not me
      const dpp = pop(t, iw, 1.1);
      if (dpp.s > 0) { drop(ctx, 540, 1250 + bob(t, 0, 6), 1.2 * dpp.s, { shrug: seg(t, iw, iw + 0.3), eyes: 'happy', mouth: 'w' }); label(ctx, 'NOT ME!', 540, 1560, 62, t, iw + 0.1, C.sky); }
    } },

    // 4: mechanism. Cutaway fingertip: brain signal -> vessels squeeze -> pad shrinks -> ridges; camera slides to a rain tire
    { s: sceneT[4], draw(ctx, t) {
      ctx.fillStyle = '#fde9ef'; ctx.fillRect(0, 0, W, HH);
      const tr0 = w(10, 'like') - 0.25, cam = seg(t, tr0, tr0 + 0.6);
      ctx.save(); ctx.translate(-cam * 500, 0);
      bg(ctx, W + 400, HH, t, { base: '#fde9ef', dot: '#f9d3df', acc: '#f6c2d3', kind: 'hearts' }, 33);
      const sq = seg(t, w(7, 'squeezes') - 0.15, w(7, 'squeezes') + 0.5), shr = seg(t, w(9, 'shrink') - 0.15, w(9, 'shrink') + 0.4), fold = seg(t, w(9, 'folds') - 0.15, w(9, 'ridges') + 0.3);
      // cutaway dome
      const cx = 540, top = 760 + shr * 40, base = 1560, R = 400 - shr * 18;
      const outer = new Path2D(); outer.moveTo(cx - R, base);
      for (let i = 0; i <= 80; i++) { const a = Math.PI + i / 80 * Math.PI, rr = R + fold * 26 * Math.sin(i / 80 * Math.PI * 14) * Math.sin(i / 80 * Math.PI); outer.lineTo(cx + Math.cos(a) * rr, base - (base - top) * Math.sin(i / 80 * Math.PI) * (rr / R)); }
      outer.closePath();
      cel(ctx, outer, SK.b, SK.s, -14, -14, 6);
      const inner = new Path2D(); inner.moveTo(cx - R + 70, base); inner.ellipse(cx, base, R - 70, (base - top) - 80, 0, Math.PI, 0); inner.closePath();
      cel(ctx, inner, '#ffc2b0', '#f3a08a', -10, -10, 4.5);
      // blood vessels: squeeze thinner
      const vw = H.lerp(44, 16, sq);
      [[cx - 210, base, cx - 150, 1150, cx - 40, 1000], [cx + 200, base, cx + 160, 1180, cx + 50, 1010], [cx, base, cx + 20, 1250, cx - 10, 1020]].forEach(([x0, y0, x1, y1, x2, y2], i) => {
        const p = new Path2D(); p.moveTo(x0, y0); p.quadraticCurveTo(x1, y1, x2, y2);
        ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = vw + 11; ctx.stroke(p); ctx.strokeStyle = '#ff6b7a'; ctx.lineWidth = vw; ctx.stroke(p);
        ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = vw * 0.25; ctx.translate(-vw * 0.18, -vw * 0.1); ctx.stroke(p); ctx.restore();
        // red cells flowing (slower when squeezed)
        for (let k = 0; k < 3; k++) { const u = ((t * (0.5 - sq * 0.35) + k / 3 + i * 0.2) % 1); const px = (1 - u) * (1 - u) * x0 + 2 * (1 - u) * u * x1 + u * u * x2, py = (1 - u) * (1 - u) * y0 + 2 * (1 - u) * u * y1 + u * u * y2; ctx.fillStyle = '#d93b52'; ctx.fill(ellP(px, py, vw * 0.32, vw * 0.24)); }
      });
      // squeeze arrows on "squeezes"
      if (sq > 0 && sq < 1 || (t > w(7, 'squeezes') && t < w(8, 'fingertips'))) [[cx - 300, 1200, 1], [cx + 300, 1200, -1]].forEach(([ax, ay, dir]) => { ctx.save(); ctx.translate(ax + dir * 20 * Math.sin(t * 10), ay); ctx.scale(dir, 1); cel(ctx, roundPoly([[0, -30], [60, 0], [0, 30]], 8), C.butterD, '#e9a92a', -2, -2, 4.5); ctx.restore(); });
      // nerve signal from the brain
      brain(ctx, 200, 640, 0.9, t);
      const ns = w(7, 'nervous') - 0.15;
      if (t > ns) dotted(ctx, bez([280, 700], [420, 760], [480, 820], [520, 960]), H.clamp((t - ns) / 0.5), C.butterD, 7, 24, 1);
      label(ctx, 'NERVOUS SYSTEM', 330, 520, 50, t, ns, C.butter);
      label(ctx, 'BLOOD VESSELS', 540, 1600, 56, t, w(8, 'blood') - 0.15, C.pink, tr0);
      const HEAD = () => big(ctx, fold > 0.3 ? 'RIDGES!' : (shr > 0.3 ? 'SHRINK!' : 'SQUEEZE!'), 540, 330, 128, t, fold > 0.3 ? w(9, 'folds') - 0.1 : (shr > 0.3 ? w(9, 'shrink') - 0.15 : w(7, 'squeezes') - 0.2), { line: '#e2725b' });
      if (fold > 0.5) for (let i = 0; i < 3; i++) sparkle(ctx, cx - 300 + i * 300, 700 + (i % 2) * 40, 22 * pop(t, w(9, 'ridges') - 0.1 + i * 0.06).s, C.white, 0, 4);
      // rain tire waiting off to the right
      const tp = pop(t, tr0, 0.9);
      if (tp.s > 0) {
        tire(ctx, 1290, 1120, 230 * tp.s, t, t * 1.2);
        ctx.save(); ctx.translate(1290, 760); 
        for (let i = 0; i < 7; i++) { const y = ((t * 420 + i * 140) % 700) - 300; ctx.strokeStyle = AQ.waterS; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-220 + i * 70, y); ctx.lineTo(-240 + i * 70, y + 40); ctx.stroke(); }
        ctx.restore();
      }
      ctx.restore();
      HEAD();
      if (cam > 0.5) label(ctx, 'RAIN TIRE', 760, 1480, 62, t, w(10, 'rain') - 0.15, C.sky);
      if (cam > 0.5) label(ctx, 'TREADS', 300, 1480, 58, t, w(10, 'treads') - 0.15, C.mint);
    } },

    // 5: 2013 marble test: wrinkly fingers, wet marbles, 12% faster
    { s: sceneT[5], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#e6f7ec', dot: '#cdeedb', acc: '#bde6cd', kind: 'stars' }, 51);
      cel(ctx, rrP(-40, 1300, W + 80, 700, 0), '#f3d3b0', '#ddb48c', 0, -14, 6);
      const y13 = w(11, '2013') - 0.15, mb = w(11, 'marbles') - 0.15, wr = w(12, 'wrinkly') - 0.15, mv = w(12, 'moved') - 0.15, tw = w(13, 'twelve') - 0.15;
      bowl(ctx, 260, 1260, 1, '#a8dcfa', true); bowl(ctx, 820, 1260, 1, '#ffc7c2', false);
      const cols = ['#ff8f7a', '#7f72d9', '#43b37c', '#ffcf3d', '#3f93d6'];
      // marbles hop from the left bowl to the right one, one after another
      const t0m = Math.max(mb, P_[11].s);
      cols.forEach((c, i) => {
        const st = mv + i * 0.32, u = H.clamp((t - st) / 0.35);
        const ap = pop(t, t0m + i * 0.06, 1.2); if (ap.s <= 0) return;
        const x0 = 200 + (i % 3) * 60, y0 = 1220 - Math.floor(i / 3) * 40, x1 = 760 + (i % 3) * 60, y1 = y0;
        const x = H.lerp(x0, x1, H.ease.inOut(u)), y = H.lerp(y0, y1, u) - Math.sin(u * Math.PI) * 300;
        ctx.save(); ctx.translate(x, y); ctx.scale(ap.s, ap.s); marble(ctx, 0, 0, 44, c, true); ctx.restore();
      });
      // the wrinkly hand helping from above
      const hp = pop(t, wr, 1.0);
      if (hp.s > 0) { const u = ((t - mv) / 0.32) % 1, hx = t > mv && t < mv + 1.6 ? H.lerp(260, 820, Math.sin(u * Math.PI)) : 540; hand(ctx, hx, 700, 0.7 * hp.s, { t, prune: 1, eyes: t > tw ? 'happy' : 'normal', mouth: t > tw ? 'smile' : 'w', rot: Math.PI, look: [0, -0.5] }); }
      stopwatch(ctx, 880, 560, 0.9, t, H.clamp((t - mv) / 2.5) * 0.88);
      numPop(ctx, '2013', 260, 600, 120, t, y13, { line: C.mintD, rot: -0.05 });
      label(ctx, 'WET MARBLES', 540, 1500, 60, t, w(12, 'wet') - 0.15, C.sky);
      big(ctx, t < tw ? 'THE TEST' : 'FASTER!', 540, 330, 124, t, t < tw ? P_[11].s : w(13, 'faster') - 0.15, { line: C.mintD });
      const tp = pop(t, tw, 1.3);
      if (tp.s > 0) { ctx.save(); ctx.translate(540, 1150); ctx.scale(tp.sx, tp.sy); ctx.rotate(-0.05); kText(ctx, '12%', 0, 0, 230, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.15 }); ctx.restore(); confetti(ctx, t, tw, 540, 1000, 26, 77); }
    } },

    // 6: dry marbles: no difference
    { s: sceneT[6], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#fff4d6', dot: '#f8e6b0', acc: '#f3d98e', kind: 'dots' }, 61);
      cel(ctx, rrP(-40, 1300, W + 80, 700, 0), '#f3d3b0', '#ddb48c', 0, -14, 6);
      const df = w(14, 'difference') - 0.15;
      ['#ff8f7a', '#7f72d9', '#43b37c'].forEach((c, i) => { const p = pop(t, P_[14].s - 0.1 + i * 0.07, 1.2); if (p.s > 0) { ctx.save(); ctx.translate(380 + i * 160, 1230 + bob(t, i, 4)); ctx.scale(p.sx, p.sy); marble(ctx, 0, 0, 52, c, false); ctx.restore(); } });
      label(ctx, 'DRY', 540, 1080, 66, t, P_[14].s - 0.05, C.butter);
      stopwatch(ctx, 280, 760, 0.95, t, 0.6, C.mint); stopwatch(ctx, 800, 760, 0.95, t, 0.6, C.pink);
      const ep = pop(t, df, 1.2); if (ep.s > 0) { ctx.save(); ctx.translate(540, 800); ctx.scale(ep.sx, ep.sy); kText(ctx, '=', 0, 40, 200, { fill: C.white, line: C.lavD, outer: C.plum, lw: 0.15 }); ctx.restore(); }
      label(ctx, 'WRINKLY', 280, 560, 46, t, P_[14].s, C.mint); label(ctx, 'SMOOTH', 800, 560, 46, t, P_[14].s + 0.08, C.pink);
      big(ctx, 'NO DIFFERENCE', 540, 330, 100, t, df, { line: C.lavD });
      if (t > df) sweat(ctx, 950, 1150, 1.1);
    } },

    // 7: loop back: soggy fingers, or built-in rain tires?
    { s: sceneT[7], draw(ctx, t) {
      bathroomBg(ctx, t, 71, '#e7defa', '#d3c6f2', 1, false);
      tub(ctx, t, 1360);
      const sg = w(15, 'soggy') - 0.15, rt = w(16, 'rain') - 0.15;
      hand(ctx, 540, 1160 + bob(t, 0, 10), 1.35, { t, prune: 1, eyes: t > rt ? 'star' : 'normal', mouth: t > rt ? 'smile' : 'o', look: t < rt ? [-0.7, -0.4] : [0.7, -0.4] });
      foam(ctx, 540, 1390, 1250, t, 17);
      tubFront(ctx, t, 1380);
      duck(ctx, 170, 1350, 0.9, t + 1);
      bubbles(ctx, t, 19, 8, 60, 1020, 700, 1350, 60);
      // two choices
      const c1 = pop(t, sg, 1.1), c2 = pop(t, rt, 1.1);
      if (c1.s > 0) { ctx.save(); ctx.translate(250, 620); ctx.rotate(-0.06); ctx.scale(c1.sx, c1.sy); drop(ctx, 0, -40, 1.0, { eyes: 'blink', mouth: 'wobble' }); ctx.restore(); label(ctx, 'SOGGY?', 250, 780, 58, t, sg + 0.05, C.sky); }
      if (c2.s > 0) { tire(ctx, 830, 600, 125 * c2.s, t, t * 2); label(ctx, 'RAIN TIRES?', 830, 780, 58, t, rt + 0.05, C.butter); }
      big(ctx, 'YOU DECIDE', 540, 330, 116, t, P_[15].s - 0.1, { line: C.lavD, fill: C.white });
      label(ctx, 'COMMENT!', 540, 1580, 62, t, w(16, 'tires') + 0.05, C.mint);
      if (t > w(16, 'tires')) confetti(ctx, t, w(16, 'tires'), 540, 900, 30, 91);
    } },
  ];

  const SHAPES = ['bubble', 'star', 'heart', 'bubble', 'star', 'bubble', 'heart'];
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
  function thumbnail(ctx) { scenes[0].draw(ctx, 4.1); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const blub = (at, f = 500, g = 0.14) => k.tone(at, { f: [[0, f], [0.12, f * 1.8]], type: 'sine', dur: 0.14, gain: g, a: 0.005, hold: 0.03, minor: true });
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.38, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.38, 3000]], q: 0.9, gain: 0.28, a: 0.07 }); if (c.shape === 'bubble') for (let i = 0; i < 4; i++) blub(c.t - 0.15 + i * 0.07, 420 + i * 120, 0.16); else k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook: bath ambience bubbles from frame one
    k.play('whoosh', 0.02, { dur: 0.9, gain: 0.25 }); pop_(0.06, 650, 0.6, 0, false);
    for (let i = 0; i < 10; i++) blub(0.1 + i * 0.4 + (i % 3) * 0.07, 380 + (i * 97) % 400);
    k.play('buzz', w(1, 'nerves') - 0.15, { gain: 0.25, minor: true });
    k.play('powerup', w(1, 'nerves') - 0.1, { gain: 0.3 });
    pop_(w(1, 'nerves') - 0.12, 800, 0.5);
    big_(w(1, 'purpose') - 0.15, 'C6'); k.play('sparkle', w(1, 'purpose'), { n: 5, gain: 0.4 });
    // myth
    big_(P_[2].s - 0.1, 'G5');
    [0, 0.12, 0.24].forEach((d, i) => { pop_(P_[2].s - 0.1 + d, 600 + i * 120, 0.5, -0.4 + i * 0.4); blub(w(2, 'soaking') - 0.2 + d + 0.68, 300, 0.2); });
    k.play('whoosh', w(2, 'soaking') - 0.2, { dur: 0.6, gain: 0.25 });
    pop_(w(2, 'skin') - 0.15, 900, 0.5, -0.3); pop_(w(2, 'skin') - 0.05, 1000, 0.5, 0.3);
    // doctors
    k.play('paper', P_[3].s - 0.1, { gain: 0.4 }); k.play('stamp', w(3, '1930s') - 0.15, { gain: 0.4 });
    pop_(w(3, 'doctors') - 0.15, 600, 0.6, 0, false); k.play('error', w(3, 'odd') - 0.15, { f: 'C4', gain: 0.25 });
    // nerve
    pop_(P_[4].s - 0.2, 500, 0.5, -0.4); pop_(P_[4].s - 0.05, 650, 0.5, 0.4);
    k.play('error', w(4, 'damaged') - 0.15, { f: 'A3', gain: 0.35 });
    k.play('swish', w(5, 'smooth') - 0.2, { gain: 0.35 }); k.play('sparkle', w(5, 'smooth') - 0.1, { n: 5, gain: 0.4 });
    pop_(w(6, 'water') - 0.15, 700, 0.6, 0, false); big_(w(6, 'its') - 0.1, 'E6');
    // squeeze
    big_(w(7, 'squeezes') - 0.2, 'G5'); k.play('riser', w(7, 'nervous') - 0.2, { dur: 0.5, gain: 0.2 });
    for (let i = 0; i < 5; i++) k.play('tick', w(7, 'nervous') - 0.1 + i * 0.09, { f: 2000, gain: 0.2, minor: true });
    k.tone(w(7, 'squeezes'), { f: [[0, 520], [0.4, 260]], type: 'triangle', dur: 0.45, gain: 0.15, a: 0.02, hold: 0.2 });
    pop_(w(8, 'blood') - 0.15, 700, 0.5);
    big_(w(9, 'shrink') - 0.15, 'D6'); k.play('jump', w(9, 'folds') - 0.1, { gain: 0.3 }); k.play('sparkle', w(9, 'ridges') - 0.1, { n: 5, gain: 0.4 });
    k.play('whoosh', w(10, 'like') - 0.25, { dur: 0.6, gain: 0.3 }); pop_(w(10, 'treads') - 0.15, 800, 0.5); big_(w(10, 'rain') - 0.15, 'C6');
    // marbles
    k.play('stamp', w(11, '2013') - 0.15, { gain: 0.35 }); big_(P_[11].s, 'G5');
    for (let i = 0; i < 5; i++) { const st = w(12, 'moved') - 0.15 + i * 0.32; k.play('tick', st, { f: 2400, gain: 0.25, minor: true }); k.play('click', st + 0.35, { gain: 0.35, minor: true }); }
    pop_(w(12, 'wrinkly') - 0.15, 650, 0.5); pop_(w(12, 'wet') - 0.15, 800, 0.5);
    k.play('success', w(13, 'twelve') - 0.15, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(13, 'twelve'), { n: 7, gain: 0.5 });
    // dry
    [0, 0.07, 0.14].forEach((d, i) => k.play('click', P_[14].s - 0.1 + d, { gain: 0.35, minor: true }));
    k.play('ding', w(14, 'difference') - 0.15, { f: 'A5', gain: 0.3 }); pop_(w(14, 'difference') - 0.15, 600, 0.6, 0, false);
    // end
    big_(P_[15].s - 0.1, 'E6'); pop_(w(15, 'soggy') - 0.15, 600, 0.6, -0.4); pop_(w(16, 'rain') - 0.15, 800, 0.6, 0.4);
    k.play('success', w(16, 'tires') + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(16, 'tires') + 0.1, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
