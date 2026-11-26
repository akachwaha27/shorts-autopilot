// ===== Kawaii Anime, vertical: "How can crows count out loud?" =====
(function () {
  // ---------- Kawaii anime: clean warm-brown outlines, one cel-shadow tone, glossy anime eyes; soft slate-indigo crow, autumn park + pastel lab palette ----------
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
  const P_ = [{"s":0.25,"e":4.37,"text":"Crows count out loud, and they plan every caw before the first one.","words":[["crows",0.25],["count",0.64],["out",1.03],["loud",1.26],["and",1.57],["they",1.8],["plan",2.11],["every",2.42],["caw",2.81],["before",3.05],["the",3.51],["first",3.75],["one",4.13]]},{"s":4.8,"e":8.26,"text":"In Germany, scientists trained three carrion crows","words":[["in",4.8],["germany",4.96],["scientists",5.52],["trained",6.33],["three",6.89],["carrion",7.29],["crows",7.86]]},{"s":8.26,"e":9.69,"text":"to look at a number on a screen","words":[["to",8.26],["look",8.38],["at",8.62],["a",8.73],["number",8.79],["on",9.15],["a",9.27],["screen",9.33]]},{"s":10.16,"e":12.28,"text":"and caw exactly that many times.","words":[["and",10.16],["caw",10.4],["exactly",10.65],["that",11.22],["many",11.55],["times",11.87]]},{"s":12.72,"e":14.82,"text":"Then peck an enter key when they're done.","words":[["then",12.72],["peck",12.99],["an",13.25],["enter",13.38],["key",13.7],["when",13.9],["theyre",14.16],["done",14.55]]},{"s":15.27,"e":16.81,"text":"At first, the crows cheated.","words":[["at",15.27],["first",15.41],["the",15.76],["crows",15.97],["cheated",16.32]]},{"s":17.21,"e":19.46,"text":"They just kept cawing until a snack showed up.","words":[["they",17.21],["just",17.45],["kept",17.69],["cawing",17.94],["until",18.3],["a",18.61],["snack",18.67],["showed",18.97],["up",19.34]]},{"s":19.88,"e":22.04,"text":"So the team made them stop and confirm.","words":[["so",19.88],["the",20.02],["team",20.23],["made",20.51],["them",20.79],["stop",21.07],["and",21.34],["confirm",21.55]]},{"s":22.45,"e":23.71,"text":"Now the wild part.","words":[["now",22.45],["the",22.72],["wild",22.99],["part",23.35]]},{"s":24.0,"e":25.38,"text":"From the very first caw,","words":[["from",24.0],["the",24.29],["very",24.51],["first",24.8],["caw",25.16]]},{"s":25.77,"e":28.08,"text":"a computer could predict how many were coming.","words":[["a",25.77],["computer",25.83],["could",26.32],["predict",26.62],["how",27.05],["many",27.23],["were",27.47],["coming",27.72]]},{"s":28.46,"e":30.62,"text":"The whole count was ready in their heads.","words":[["the",28.46],["whole",28.65],["count",28.98],["was",29.31],["ready",29.51],["in",29.83],["their",29.96],["heads",30.29]]},{"s":30.97,"e":34.06,"text":"Bigger numbers made them pause longer, just like us.","words":[["bigger",30.97],["numbers",31.41],["made",31.93],["them",32.22],["pause",32.52],["longer",32.88],["just",33.33],["like",33.62],["us",33.91]]},{"s":34.44,"e":36.77,"text":"So how high do you think a crow could count?","words":[["so",34.44],["how",34.58],["high",34.79],["do",35.06],["you",35.2],["think",35.4],["a",35.75],["crow",35.81],["could",36.09],["count",36.43]]}];
  const BEATS = [
    { id: 'hook', s: 0, e: P_[0].e, on: 'FULL FRAME at 0 s: big chibi crow on an autumn branch + BIRD GENIUS?!; numbers 1-4 pop as it caws; PLANNED AHEAD' },
    { id: 'lab', s: P_[1].s, e: P_[1].e, on: 'lab: GERMANY tag, three crows pop on a perch, big 3, CARRION CROWS' },
    { id: 'screen', s: P_[2].s, e: P_[4].e, on: 'touchscreen shows green 3, crow caws three times (1,2,3 chips), pecks ENTER, check' },
    { id: 'cheat', s: P_[5].s, e: P_[7].e, on: 'CHEAT!: crow caws nonstop until a mealworm drops; STOP sign, then CONFIRM button' },
    { id: 'predict', s: P_[8].s, e: P_[11].e, on: 'WILD PART: first caw sound wave flies into a laptop that predicts 4; thought cloud with 1 2 3 4 = READY' },
    { id: 'pause', s: P_[12].s, e: P_[12].e, on: 'pause-time bars rise for 1,2,3,4; kid pops next to the crow, LIKE US!' },
    { id: 'end', s: P_[13].s, e: P_[13].e, on: 'dusk branch, crow with 5? 6? 7?, HOW HIGH? + COMMENT! (loops to hook)' },
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
  function fitText(ctx, str, x, y, size, maxW, o) {
    ctx.save(); ctx.font = `700 ${size}px ${FONT}`; const mw = ctx.measureText(str).width * 1.12; ctx.restore();
    const k = Math.min(1, maxW / mw); ctx.save(); ctx.translate(x, y); ctx.scale(k, k); kText(ctx, str, 0, 0, size, o); ctx.restore();
  }
  // beak bumps: open the beak around each caw time
  const cawOpen = (t, times, d = 0.22) => times.reduce((m, c) => { const u = (t - c) / d; return u < 0 || u > 1 ? m : Math.max(m, Math.sin(u * Math.PI)); }, 0);
  const DIG = { 1: '#4f86e0', 2: '#f39a3c', 3: '#4fb36a', 4: '#f07aa8' };

  // ---------- palette: soft slate-indigo crow, warm autumn + pastel lab ----------
  const CR = { b: '#4d5374', s: '#363b57', hi: '#7482b4', iris: '#9db2ee' };
  const BK = { b: '#7b7686', s: '#5d5968' };

  // ---------- the crow (3/4 side view, facing right) ----------
  // o: t, beak (0..1), eyes, look, peck (0..1), tilt, flap, sx, sy, flip, mouth
  function crow(ctx, x, y, s, o = {}) {
    const t = o.t || 0, open = o.beak || 0, fl = o.flip || 1;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * fl * (o.sx || 1), s * (o.sy || 1));
    // tail fan
    const tail = roundPoly([[-95, 20], [-255, 105], [-250, 150], [-210, 172], [-80, 85]], 18);
    cel(ctx, tail, CR.b, CR.s, -5, -5, 5);
    ctx.save(); ctx.clip(tail); ctx.strokeStyle = CR.s; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-110, 60); ctx.lineTo(-235, 128); ctx.moveTo(-105, 75); ctx.lineTo(-215, 160); ctx.stroke(); ctx.restore();
    // legs + toes
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    [-12, 42].forEach((lx) => {
      const pth = new Path2D(); pth.moveTo(lx, 88); pth.lineTo(lx, 158); pth.moveTo(lx - 24, 168); pth.lineTo(lx, 158); pth.lineTo(lx + 30, 166); pth.moveTo(lx, 158); pth.lineTo(lx + 10, 174);
      ctx.strokeStyle = C.plum; ctx.lineWidth = 17; ctx.stroke(pth); ctx.strokeStyle = BK.b; ctx.lineWidth = 9; ctx.stroke(pth);
    });
    ctx.restore();
    // body
    const body = ellP(0, 10, 135, 106, -0.2);
    cel(ctx, body, CR.b, CR.s, -9, -9, 5);
    ctx.save(); ctx.clip(body); ctx.fillStyle = H.rgba(CR.hi, 0.45); ctx.fill(ellP(40, 50, 70, 40, -0.3)); ctx.restore();
    // wing (flaps when o.flap)
    ctx.save(); ctx.translate(-25, 10); ctx.rotate(0.28 - (o.flap || 0) * (0.35 + 0.25 * Math.sin(t * 22)));
    const wing = roundPoly([[-110, 70], [-60, -40], [70, -38], [40, 30]], 34);
    cel(ctx, wing, CR.b, CR.s, -6, -6, 5);
    ctx.save(); ctx.clip(wing); ctx.strokeStyle = CR.s; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i < 3; i++) { ctx.moveTo(-70 + i * 20, 55 - i * 6); ctx.quadraticCurveTo(-20 + i * 25, 0, 40 - i * 10, -5 - i * 8); }
    ctx.stroke(); ctx.restore(); ctx.restore();
    // head group
    ctx.save(); ctx.translate(95, -105); ctx.rotate(o.tilt || 0);
    const pk = o.peck || 0; if (pk) { ctx.translate(pk * 45, pk * 60); ctx.rotate(pk * 0.55); }
    [[-38, -70, -26, -118, -8, -78], [-10, -82, 8, -128, 22, -80], [16, -80, 38, -114, 44, -70]].forEach(([a, b, c, d, e, f]) => cel(ctx, roundPoly([[a, b], [c, d], [e, f]], 8), CR.b, CR.s, -3, -3, 4.5));
    const head = ellP(0, 0, 92, 86);
    cel(ctx, head, CR.b, CR.s, -8, -8, 5);
    ctx.save(); ctx.clip(head); ctx.strokeStyle = H.rgba(CR.hi, 0.7); ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(-6, -2, 70, Math.PI * 1.1, Math.PI * 1.45); ctx.stroke(); ctx.restore();
    eye(ctx, -14, -26, 27, 34, CR.iris, o.eyes || 'normal', -1, o.look || [0.3, 0]);
    eye(ctx, 40, -24, 20, 30, CR.iris, o.eyes || 'normal', 1, o.look || [0.3, 0]);
    blush(ctx, -42, 24, 18, 10);
    // beak: lower jaw swings open, mouth inside, upper beak on top
    ctx.save(); ctx.translate(66, 18); ctx.rotate(open * 0.55);
    if (open > 0.05) { ctx.fillStyle = '#c4577c'; ctx.fill(roundPoly([[0, -20], [92, 0], [0, 6]], 6)); }
    cel(ctx, roundPoly([[-4, -4], [100, 4], [-2, 22]], 8), BK.b, BK.s, -3, -3, 4.5);
    ctx.restore();
    cel(ctx, roundPoly([[60, -20], [178, 12], [64, 22]], 10), BK.b, BK.s, -4, -4, 4.5);
    shine(ctx, 92, -6, 16, 5, 0.25, 0.6);
    ctx.restore();
    ctx.restore();
  }
  // where the beak tip is (for sound waves / numbers)
  const beakTip = (x, y, s) => [x + (95 + 178) * s, y + (-105 + 12) * s];

  // ---------- props ----------
  function branch(ctx, x0, y0, x1, y1, t, leafCol = '#f0a35e', seed = 3) {
    const p = new Path2D(); p.moveTo(x0, y0); p.quadraticCurveTo((x0 + x1) / 2, (y0 + y1) / 2 + 30, x1, y1);
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 64; ctx.stroke(p); ctx.strokeStyle = '#9b6a4a'; ctx.lineWidth = 50; ctx.stroke(p); ctx.strokeStyle = '#b98460'; ctx.lineWidth = 14; ctx.translate(-6, -10); ctx.stroke(p); ctx.restore();
    const r = H.rng(seed);
    for (let i = 0; i < 5; i++) {
      const u = r.range(0.1, 0.95), bx = H.lerp(x0, x1, u), by = H.lerp(y0, y1, u) + 26 * Math.sin(u * Math.PI) - 30, a = r.range(-0.9, 0.9) + Math.sin(t * 1.6 + i) * 0.06;
      ctx.save(); ctx.translate(bx, by); ctx.rotate(a - Math.PI / 2 * (i % 2 ? 1 : -1) * 0.4);
      cel(ctx, ellP(0, -38, 22, 40), i % 2 ? leafCol : H.rgba(H.mix(leafCol, '#e2725b', 0.5)), H.rgba(H.mix(leafCol, C.plum, 0.25)), -3, -3, 4); ctx.restore();
    }
  }
  function autumnBg(ctx, t, seed, top = '#f8c9a4', bot = '#fdebd6', dusk = 0) {
    const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, top); g.addColorStop(1, bot); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.fillStyle = dusk ? 'rgba(255,214,170,0.7)' : 'rgba(255,246,220,0.75)'; ctx.fill(ellP(820, dusk ? 1180 : 560, 150, 150)); ctx.restore();
    const r = H.rng(seed);
    for (let i = 0; i < 4; i++) { const x = ((r.range(0, W + 300) + t * r.range(10, 20)) % (W + 300)) - 150; ctx.save(); ctx.globalAlpha = 0.8; ctx.fillStyle = C.white; ctx.fill(cloudP(x, r.range(200, 900), r.range(0.8, 1.3))); ctx.restore(); }
    // round trees far back + hills
    [[60, 1420, 230, '#e88d5a'], [980, 1380, 260, '#e2725b'], [300, 1560, 200, '#f0b067'], [800, 1580, 210, '#d9a05b']].forEach(([x, y, rr, c], i) => {
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 400); ctx.stroke(); ctx.restore();
      const tp = cloudP(x, y - rr * 0.4, rr / 70), base = dusk ? H.rgba(H.mix(c, '#8a7fb0', 0.35)) : c;
      ctx.save(); ctx.lineWidth = 12; ctx.strokeStyle = C.plum; ctx.lineJoin = 'round'; ctx.stroke(tp); ctx.fillStyle = H.rgba(H.mix(c, C.plum, 0.22)); ctx.fill(tp); ctx.clip(tp); ctx.translate(-12, -12); ctx.fillStyle = base; ctx.fill(tp); ctx.restore();
    });
    cel(ctx, ellP(540, 2050, 900, 330), dusk ? '#b7b38a' : '#c9d79a', dusk ? '#9a976f' : '#aabd7c', 0, -16, 6);
    // drifting leaves
    for (let i = 0; i < 12; i++) {
      const x0 = r.range(0, W), sp = r.range(70, 140), y = ((r.range(0, HH) + t * sp) % (HH + 100)) - 50, x = x0 + Math.sin(t * 1.3 + i) * 40;
      ctx.save(); ctx.translate(x, y); ctx.rotate(t * 1.5 + i); ctx.fillStyle = i % 3 ? '#f0a35e' : '#e2725b'; ctx.fill(ellP(0, 0, 11, 20)); ctx.restore();
    }
  }
  function labBg(ctx, t, base, tile, seed) {
    ctx.fillStyle = base; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.strokeStyle = tile; ctx.lineWidth = 4; ctx.beginPath(); for (let x = 0; x < W; x += 120) { ctx.moveTo(x, 0); ctx.lineTo(x, 1400); } for (let y = 0; y < 1400; y += 120) { ctx.moveTo(0, y); ctx.lineTo(W, y); } ctx.stroke(); ctx.restore();
    cel(ctx, rrP(-40, 1400, W + 80, 600, 0), '#d9c3e8', '#bea6d2', 0, -14, 6);
    twinkles(ctx, W, HH, t, seed, 8, (x, y) => y > 500 && y < 1500);
  }
  function numChip(ctx, x, y, n, sc, sz = 64) {
    if (sc <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc);
    cel(ctx, ellP(0, 0, sz, sz), C.white, C.creamS, -5, -5, 5);
    kText(ctx, String(n), 0, sz * 0.36, sz * 1.1, { fill: DIG[n] || C.lavD, line: C.white, outer: C.plum, lw: 0.12, ow: 0.08, shadow: false });
    ctx.restore();
  }
  function cawBubble(ctx, x, y, sc, rot = 0, txt = 'CAW!') {
    if (sc <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(sc, sc);
    union(ctx, [roundPoly(starPts(0, 0, 105, 72, 9), 16)], C.butter);
    ctx.fillStyle = C.plum; ctx.font = `700 50px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(txt, 0, 4);
    ctx.restore();
  }
  function screenDev(ctx, x, y, s, n, sc = 1) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-30, 150, 60, 90, 10), '#c9c3d9', '#a9a2bd', -3, -3, 5);
    cel(ctx, rrP(-230, -180, 460, 340, 40), C.cream, C.creamS, -8, -8, 6);
    cel(ctx, rrP(-190, -145, 380, 260, 26), '#f2f7ff', '#dbe7f7', -5, -5, 4.5);
    if (n && sc > 0) { ctx.save(); ctx.translate(0, -15); ctx.scale(sc, sc); kText(ctx, String(n), 0, 85, 230, { fill: DIG[n], line: C.white, outer: C.plum, lw: 0.1, ow: 0.06 }); ctx.restore(); }
    ctx.restore();
  }
  function enterBtn(ctx, x, y, s, press = 0, ok = 0) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, ellP(0, 18, 90, 40), '#b7aed0', '#978dad', -3, -3, 5);
    ctx.translate(0, press * 16);
    cel(ctx, ellP(0, 0, 86, 50), ok ? C.mintD : '#ff8f7a', ok ? '#2f9463' : '#e56f5a', -5, -5, 5);
    shine(ctx, -34, -16, 18, 8, -0.3, 0.8);
    ctx.fillStyle = C.white; ctx.font = `700 40px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(ok ? '✓' : 'ENTER', 0, 2);
    ctx.restore();
  }
  function mealworm(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(Math.sin(t * 6) * 0.15);
    for (let i = 4; i >= 0; i--) cel(ctx, ellP(-i * 30, Math.sin(t * 8 + i) * 6, 26, 24), '#f6d59a', '#e2b672', -3, -3, 4);
    eye(ctx, -6, -6, 8, 10, '#7d5d40', 'normal', 1); eye(ctx, 14, -6, 8, 10, '#7d5d40', 'normal', 1); mouth(ctx, 4, 10, 6, 'w');
    ctx.restore();
  }
  function stopSign(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-14, 60, 28, 260, 8), '#c9c3d9', '#a9a2bd', -3, -3, 5);
    const oct = roundPoly(Array.from({ length: 8 }, (_, i) => { const a = Math.PI / 8 + i * Math.PI / 4; return [Math.cos(a) * 150, Math.sin(a) * 150]; }), 18);
    cel(ctx, oct, '#ff7b6b', '#e05a4c', -6, -6, 6);
    kText(ctx, 'STOP', 0, 26, 84, { fill: C.white, line: '#e05a4c', outer: C.plum, lw: 0.12, ow: 0.06, shadow: false });
    ctx.restore();
  }
  function laptop(ctx, x, y, s, t, bars, pred) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, roundPoly([[-250, 150], [250, 150], [290, 210], [-290, 210]], 14), '#cfc8e0', '#ada5c2', -4, -4, 5);
    cel(ctx, rrP(-230, -200, 460, 340, 30), '#e8e3f4', '#cbc3e0', -6, -6, 6);
    cel(ctx, rrP(-200, -172, 400, 284, 20), '#f7fbff', '#e2ecf8', -4, -4, 4);
    // waveform of the first caw
    if (bars > 0) { ctx.save(); ctx.strokeStyle = C.skyD; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); const n = 18; for (let i = 0; i < n * bars; i++) { const xx = -170 + i * 20, hh = 20 + 70 * Math.abs(Math.sin(i * 1.7)) * Math.exp(-i / 9); ctx.moveTo(xx, -40 - hh); ctx.lineTo(xx, -40 + hh); } ctx.stroke(); ctx.restore(); }
    if (pred > 0) { ctx.save(); ctx.translate(0, 75); ctx.scale(pred, pred); ctx.fillStyle = C.plum; ctx.font = `700 46px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText('NEXT: 4 CAWS', 0, 0); ctx.restore(); }
    ctx.restore();
  }
  function kid(ctx, x, y, s, t, eyes = 'normal') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-90, 80, 180, 170, 60), '#8fc7e8', '#6aa9d0', -5, -5, 5);
    cel(ctx, ellP(0, 0, 100, 98), '#ffe0c7', '#f2b88f', -6, -6, 5);
    ctx.save(); const hc = ellP(0, 0, 100, 98); ctx.clip(hc); cel(ctx, ellP(10, -78, 130, 70, 0.1), '#6b4a3a', '#523629', -4, -4, 0); ctx.restore(); ol(ctx, hc, 5);
    eye(ctx, -36, 4, 20, 26, '#7d5d40', eyes, -1, [0.4, -0.4]); eye(ctx, 36, 4, 20, 26, '#7d5d40', eyes, 1, [0.4, -0.4]);
    blush(ctx, -60, 40, 16, 9); blush(ctx, 60, 40, 16, 9); mouth(ctx, 0, 52, 12, 'wobble');
    // finger on chin
    cel(ctx, rrP(40, 70, 34, 70, 17), '#ffe0c7', '#f2b88f', -2, -2, 4);
    ctx.restore();
  }

  const scenes = [
    // 0: HOOK. Full frame at t=0: finished crow on a branch + hook words; motion from frame one.
    { s: 0, draw(ctx, t) {
      autumnBg(ctx, t, 11);
      branch(ctx, -60, 1330, 1000, 1290, t, '#f0a35e', 5);
      const cx = 500, cy = 1170 + bob(t, 0, 6), s = 1.7;
      const caws = [w(0, 'count'), w(0, 'out'), w(0, 'loud'), w(0, 'and')];
      crow(ctx, cx, cy, s, { t, beak: Math.max(cawOpen(t, caws), 0.12 * (1 + Math.sin(t * 5))), eyes: t > w(0, 'plan') - 0.1 && t < w(0, 'before') ? 'happy' : 'normal', look: [0.5, -0.4], tilt: Math.sin(t * 2.4) * 0.05 });
      // numbers 1-4 pop on each caw, in an arc over the crow
      const pos = [[180, 790], [390, 700], [610, 680], [830, 740]];
      caws.forEach((c, i) => { const p = pop(t, c - 0.1, 1.2); numChip(ctx, pos[i][0], pos[i][1] + bob(t, i, 6), i + 1, p.s, 72); });
      if (t > w(0, 'plan') - 0.15) { const p = pop(t, w(0, 'plan') - 0.15); ctx.save(); ctx.globalAlpha = 0.9; dotted(ctx, bez([180, 870], [380, 880], [620, 860], [830, 820]), H.clamp((t - w(0, 'plan') + 0.15) / 0.5), C.lavD, 7, 24, p.s); ctx.restore(); }
      label(ctx, 'PLANNED AHEAD', 540, 1540, 62, t, w(0, 'plan') - 0.12, C.mint);
      if (t > w(0, 'first') - 0.1) for (let i = 0; i < 4; i++) sparkle(ctx, 540 + Math.cos(i * 1.7 + 0.4) * 430, 940 + Math.sin(i * 1.7 + 0.4) * 300, 26 * pop(t, w(0, 'first') - 0.1).s, i % 2 ? C.butter : C.white, 0, 4);
      // hook words: full size + full opacity from frame 0
      ctx.save(); ctx.translate(540, 330); ctx.rotate(Math.sin(t * 3) * 0.015);
      kText(ctx, 'BIRD', 0, 0, 130, { fill: C.white, line: CR.b, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
      ctx.save(); ctx.translate(540, 500); ctx.rotate(-0.04 + Math.sin(t * 4) * 0.02);
      fitText(ctx, 'GENIUS?!', 0, 0, 160, 960, { fill: C.butter, line: '#e2725b', outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
    } },

    // 1: Germany lab, three carrion crows
    { s: 4.58, draw(ctx, t) {
      labBg(ctx, t, '#e3f5ea', '#cdebd9', 21);
      // perch
      ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 44; ctx.beginPath(); ctx.moveTo(80, 1330); ctx.lineTo(1000, 1330); ctx.stroke(); ctx.strokeStyle = '#c9a27a'; ctx.lineWidth = 30; ctx.stroke(); ctx.restore();
      [[130, 1330], [950, 1330]].forEach(([x, y]) => cel(ctx, rrP(x - 20, y, 40, 300, 10), '#c9a27a', '#a7825c', -3, -3, 5));
      const t3 = w(1, 'three') - 0.15;
      [[205, 0], [500, 0.12], [795, 0.24]].forEach(([x, d], i) => {
        const p = pop(t, P_[1].s - 0.2 + d * 2, 1.1); if (p.s <= 0) return;
        crow(ctx, x - 20, 1180, 0.58, { t: t + i, sx: p.sx, sy: p.sy, beak: cawOpen(t, [t3 + d + 0.1]) , eyes: t > w(1, 'crows') ? 'happy' : 'normal', look: [0.3, -0.2], tilt: Math.sin(t * 3 + i) * 0.06 });
      });
      label(ctx, 'GERMANY', 540, 560, 66, t, w(1, 'germany') - 0.12, C.butter);
      big(ctx, 'THE TEST', 540, 330, 120, t, P_[1].s, { line: C.mintD });
      numPop(ctx, '3', 540, 900, 220, t, t3, { line: C.mintD, fill: C.white });
      label(ctx, 'CARRION CROWS', 540, 1540, 62, t, w(1, 'carrion') - 0.12, C.lav);
    } },

    // 2: number on the screen, caw that many times, peck ENTER
    { s: 8.2, draw(ctx, t) {
      labBg(ctx, t, '#eef0ff', '#dde1fb', 31);
      const ns = w(2, 'number') - 0.15;
      screenDev(ctx, 540, 640, 1.25, 3, pop(t, ns, 1.2).s);
      label(ctx, 'SCREEN', 540, 320, 56, t, w(2, 'screen') - 0.12, C.sky);
      const caws = [w(3, 'caw'), w(3, 'that'), w(3, 'times')];
      const pk0 = w(4, 'peck') - 0.1, pk = seg(t, pk0, pk0 + 0.18) * (1 - seg(t, w(4, 'enter') + 0.25, w(4, 'enter') + 0.5));
      const cx = 400, cy = 1360 + bob(t, 0, 5), s = 1.15;
      enterBtn(ctx, 880, 1300, 0.95, pk, t > w(4, 'enter') ? 1 : 0);
      crow(ctx, cx, cy, s, { t, beak: cawOpen(t, caws, 0.26), peck: pk, eyes: t > w(4, 'done') - 0.1 ? 'happy' : 'normal', look: t < w(3, 'and') ? [0.4, -0.8] : [0.6, 0] });
      const [bx, by] = beakTip(cx, cy, s);
      caws.forEach((c, i) => { const k = pop(t, c - 0.08).s * popOut(t, c + 0.45); cawBubble(ctx, bx - 40 + i * 25, by - 170 - i * 20, k * 0.9, -0.12 + i * 0.12); });
      caws.forEach((c, i) => numChip(ctx, 120 + i * 150, 1000, i + 1, pop(t, c - 0.05, 1.2).s, 58));
      if (t > w(4, 'enter') - 0.1) { impactLines(ctx, 880, 1300, 100, t, w(4, 'enter') - 0.05, 10); label(ctx, 'ENTER KEY', 820, 1560, 58, t, w(4, 'enter') - 0.1, C.butter); }
    } },

    // 3: the crows cheated: caw until a snack; then STOP and CONFIRM
    { s: 15.05, draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#fbe3ec', dot: '#f6cbdb', acc: '#f3b8cd', kind: 'hearts' }, 41);
      const c0 = w(6, 'kept'), c1 = w(6, 'up'), sn = w(6, 'snack') - 0.2, st = w(7, 'stop') - 0.15, cf = w(7, 'confirm') - 0.15;
      const spam = []; for (let x = c0; x < c1; x += 0.3) spam.push(x);
      const stopped = t > st;
      const cx = 440, cy = 1250 + bob(t, 0, 6), s = 1.3;
      crow(ctx, cx, cy, s, { t, beak: stopped ? (t > cf ? 0.15 : 0) : cawOpen(t, spam, 0.24), flap: t > c0 && t < c1 ? 1 : 0, eyes: stopped ? (t > cf + 0.3 ? 'normal' : 'shock') : (t > sn + 0.5 ? 'star' : (t < c0 ? 'squeeze' : 'happy')), look: [0.5, -0.3] });
      const [bx, by] = beakTip(cx, cy, s);
      spam.forEach((c, i) => { const k = pop(t, c - 0.05).s * popOut(t, Math.min(c + 0.9, st)); if (k > 0) cawBubble(ctx, bx - 80 + (i % 3) * 90, by - 160 - (i % 4) * 110 - (t - c) * 60, k * 0.75, (i % 2 ? 0.15 : -0.15)); });
      // snack drops from a chute on "snack"
      cel(ctx, rrP(760, 120, 200, 140, 24), '#d6cdea', '#b8aed2', -4, -4, 5);
      if (t > sn && !stopped) { const u = H.ease.in(H.clamp((t - sn) / 0.45)); mealworm(ctx, 880, H.lerp(260, 1050, u), 1.3, t); if (u >= 1) label(ctx, 'SNACK!', 860, 940, 56, t, sn + 0.45, C.butter); }
      big(ctx, 'CHEATERS!', 540, 330, 120, t, w(5, 'cheated') - 0.2, { line: C.pinkD, fill: C.white });
      if (t < st) label(ctx, 'CAW UNTIL SNACK', 540, 1560, 60, t, w(6, 'kept') - 0.1, C.pink);
      if (stopped) {
        const p = pop(t, st, 1.2); ctx.save(); ctx.translate(820, 820); ctx.scale(p.sx, p.sy); stopSign(ctx, 0, 0, 1); ctx.restore();
        sweat(ctx, 300, 900, 1.3);
        const q = pop(t, cf, 1.1); if (q.s > 0) { ctx.save(); ctx.translate(820, 1450); ctx.scale(q.sx, q.sy); enterBtn(ctx, 0, 0, 1, 0, t > cf + 0.4 ? 1 : 0); ctx.restore(); }
        label(ctx, 'CONFIRM', 820, 1580, 56, t, cf + 0.05, C.mint);
      }
    } },

    // 4: the wild part: predict the count from the first caw
    { s: 22.25, draw(ctx, t) {
      ctx.fillStyle = '#dff0fb'; ctx.fillRect(0, 0, W, HH);
      ctx.save(); ctx.fillStyle = '#cbe6f7'; ctx.translate(540, 1000); ctx.rotate(t * 0.15); for (let i = 0; i < 16; i++) { ctx.rotate(TAU / 16); if (i % 2) { ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(1600, -180); ctx.lineTo(1600, 180); ctx.closePath(); ctx.fill(); } } ctx.restore();
      twinkles(ctx, W, HH, t, 53, 10, (x, y) => y > 600 && y < 1500);
      const fc = w(9, 'caw') - 0.1, pr = w(10, 'predict') - 0.15, rd = w(11, 'ready') - 0.2, ph = w(11, 'whole') - 0.15;
      const cx = 250, cy = 1330 + bob(t, 0, 5), s = 1.0;
      laptop(ctx, 790, 1250, 0.92, t, H.clamp((t - fc - 0.4) / 0.6), pop(t, pr).s);
      crow(ctx, cx, cy, s, { t, beak: cawOpen(t, [fc], 0.3), eyes: t > rd ? 'happy' : 'normal', look: [0.6, -0.2] });
      // one caw bubble + a wave that flies into the laptop
      const [bx, by] = beakTip(cx, cy, s);
      cawBubble(ctx, bx - 20, by - 170, pop(t, fc).s * popOut(t, fc + 0.9) * 0.85, -0.1, 'CAW 1');
      if (t > fc + 0.05 && t < fc + 0.9) { const u = H.clamp((t - fc - 0.05) / 0.6); ctx.save(); ctx.strokeStyle = C.skyD; ctx.lineWidth = 10; ctx.lineCap = 'round'; for (let i = 0; i < 3; i++) { ctx.globalAlpha = 1 - u; ctx.beginPath(); ctx.arc(bx + u * 260 + i * 34, by, 30 + i * 22, -0.7, 0.7); ctx.stroke(); } ctx.restore(); }
      big(ctx, 'WILD PART', 540, 330, 118, t, P_[8].s, { line: C.skyD });
      label(ctx, 'FIRST CAW', 300, 1560, 58, t, w(9, 'first') - 0.12, C.butter, pr - 0.1);
      if (t > pr) label(ctx, 'PREDICTED!', 790, 920, 62, t, pr + 0.1, C.mint);
      // thought cloud: the whole count, ready before calling
      const tp = pop(t, ph, 1);
      if (tp.s > 0) {
        ctx.save(); ctx.translate(330, 760); ctx.scale(tp.sx * 0.95, tp.sy * 0.95);
        union(ctx, [cloudP(0, 0, 2.6)], C.white);
        [1, 2, 3, 4].forEach((n, i) => numChip(ctx, -195 + i * 130, 0, n, pop(t, ph + 0.1 + i * 0.08, 1.2).s, 50));
        ctx.restore();
        union(ctx, [ellP(230, 1000, 24, 20)], C.white); union(ctx, [ellP(260, 1060, 14, 12)], C.white);
        label(ctx, 'ALREADY IN ITS HEAD', 540, 570, 54, t, rd, C.lav);
      }
    } },

    // 5: bigger numbers, longer pauses, just like us
    { s: 30.8, draw(ctx, t) {
      labBg(ctx, t, '#fff6d6', '#f6e8b0', 61);
      const b0 = w(12, 'bigger') - 0.15;
      const bx0 = 170, base = 1300;
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(110, base); ctx.lineTo(760, base); ctx.stroke(); ctx.restore();
      [1, 2, 3, 4].forEach((n, i) => {
        const g = H.ease.back(H.clamp((t - b0 - i * 0.28) / 0.4)), hgt = (170 + i * 130) * g;
        if (g > 0) cel(ctx, rrP(bx0 + i * 150 - 50, base - hgt, 100, hgt, 22), DIG[n], H.rgba(H.mix(DIG[n], C.plum, 0.25)), -5, -5, 5);
        numChip(ctx, bx0 + i * 150, base + 80, n, pop(t, b0 + i * 0.28).s, 46);
      });
      label(ctx, 'PAUSE TIME', 430, 760, 60, t, w(12, 'pause') - 0.12, C.pink);
      big(ctx, 'BIGGER = SLOWER', 540, 330, 92, t, b0, { line: '#d79b2a' });
      crow(ctx, 860, 1200, 0.62, { t, flip: -1, eyes: t > w(12, 'like') ? 'happy' : 'normal', look: [-0.4, -0.6] });
      sweat(ctx, 760, 1000, 0.9);
      const kp = pop(t, w(12, 'like') - 0.2, 1.1);
      if (kp.s > 0) { ctx.save(); ctx.translate(900, 1500); ctx.scale(kp.sx * 1.0, kp.sy * 1.0); kid(ctx, 0, 0, 1, t); ctx.restore(); qmark(ctx, 1010, 1330, 90, t, w(12, 'us') - 0.1); }
      label(ctx, 'LIKE US!', 380, 1560, 62, t, w(12, 'us') - 0.12, C.mint);
    } },

    // 6: loop back: how high could a crow count?
    { s: 34.25, draw(ctx, t) {
      autumnBg(ctx, t, 71, '#c9b8e6', '#ffd9bf', 1);
      branch(ctx, 1140, 1360, 60, 1310, t, '#e2725b', 9);
      const cx = 470, cy = 1190 + bob(t, 0, 6), s = 1.6;
      crow(ctx, cx, cy, s, { t, beak: cawOpen(t, [w(13, 'high') - 0.05]), eyes: t > w(13, 'count') ? 'happy' : 'normal', look: [0.5, -0.6], tilt: -0.08 + Math.sin(t * 2) * 0.04 });
      ['5?', '6?', '7?'].forEach((n, i) => { const p = pop(t, w(13, ['think', 'crow', 'could'][i]) - 0.1, 1.2); if (p.s <= 0) return; ctx.save(); ctx.translate(250 + i * 280, 800 - (i % 2) * 70 + bob(t, i, 8)); ctx.scale(p.sx, p.sy); kText(ctx, n, 0, 0, 120, { fill: C.white, line: C.lavD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); });
      big(ctx, 'HOW HIGH?', 540, 360, 140, t, w(13, 'how') - 0.2, { line: C.lavD, fill: C.butter });
      label(ctx, 'COMMENT!', 540, 1580, 62, t, w(13, 'count') + 0.05, C.butter);
    } },
  ];

  const CUTS = scenes.slice(1).map((sc, i) => ({ t: sc.s, shape: i % 2 ? 'star' : 'heart' }));
  const CUTW = 0.4;

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) {
      const u = (t - (c.t - CUTW / 2)) / CUTW;
      scenes[i - 1].draw(ctx, t);
      wipe(ctx, W_, H_, u, c.shape, 540, 1050, () => scenes[i].draw(ctx, t));
    } else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 2.2); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const caw = (at, g = 0.18, minor = true) => k.tone(at, { f: [[0, 820], [0.16, 520]], type: 'triangle', dur: 0.2, gain: g, a: 0.01, hold: 0.06, minor });
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.38, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.38, 3000]], q: 0.9, gain: 0.3, a: 0.07 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    k.play('whoosh', 0.02, { dur: 1.0, gain: 0.3 }); pop_(0.08, 650, 0.6, 0, false);
    [w(0, 'count'), w(0, 'out'), w(0, 'loud'), w(0, 'and')].forEach((c, i) => { caw(c, 0.2, false); pop_(c - 0.08, 600 + i * 120, 0.6, -0.4 + i * 0.27); });
    big_(w(0, 'plan') - 0.12, 'C6'); k.play('sparkle', w(0, 'first') - 0.1, { n: 5, gain: 0.4 });
    // lab
    pop_(P_[1].s + 0.05, 600, 0.6, 0, false); pop_(w(1, 'germany') - 0.1, 750, 0.6);
    [0, 0.12, 0.24].forEach((d, i) => { pop_(w(1, 'three') - 0.15 + d, 500 + i * 150, 0.6, -0.5 + i * 0.5); caw(w(1, 'three') - 0.05 + d, 0.12); });
    big_(w(1, 'three') - 0.12, 'G5'); pop_(w(1, 'carrion') - 0.1, 800, 0.5);
    // screen
    k.tone(w(2, 'number') - 0.15, { f: 'E6', type: 'sine', dur: 0.25, gain: 0.15, a: 0.01, hold: 0.05 }); pop_(w(2, 'screen') - 0.1, 700, 0.5);
    [w(3, 'caw'), w(3, 'that'), w(3, 'times')].forEach((c, i) => { caw(c, 0.2, false); k.play('tick', c, { f: 1800 + i * 300, gain: 0.3, minor: true }); });
    k.play('tick', w(4, 'peck') - 0.05, { f: 1200, gain: 0.4 }); k.play('success', w(4, 'enter'), { f: 'C6', gain: 0.4 });
    // cheat
    k.play('error', w(5, 'cheated') - 0.15, { f: 'A3', gain: 0.35 });
    for (let x = w(6, 'kept'); x < w(6, 'up'); x += 0.3) caw(x, 0.14);
    k.play('whoosh', w(6, 'snack') - 0.2, { dur: 0.45, gain: 0.35 }); k.play('thud', w(6, 'snack') + 0.25, { f: 160, gain: 0.3 }); k.play('sparkle', w(6, 'snack') + 0.3, { n: 4, gain: 0.35 });
    k.play('stamp', w(7, 'stop') - 0.15, { gain: 0.45 }); k.play('success', w(7, 'confirm') + 0.25, { f: 'E6', gain: 0.35 });
    // predict
    pop_(P_[8].s + 0.05, 600, 0.6, 0, false); k.play('riser', w(8, 'wild') - 0.3, { dur: 0.8, gain: 0.2 });
    caw(w(9, 'caw') - 0.1, 0.22, false); k.play('whoosh', w(9, 'caw') + 0.05, { dur: 0.5, gain: 0.3 });
    for (let i = 0; i < 6; i++) k.play('tick', w(10, 'computer') + i * 0.08, { f: 2200, gain: 0.2, minor: true });
    big_(w(10, 'predict') - 0.15, 'C6');
    k.play('jump', w(11, 'whole') - 0.15, { gain: 0.35 }); [0, 1, 2, 3].forEach((i) => pop_(w(11, 'whole') - 0.05 + i * 0.08, 700 + i * 140, 0.5));
    k.play('sparkle', w(11, 'ready') - 0.2, { n: 5, gain: 0.4 });
    // pause
    [0, 1, 2, 3].forEach((i) => k.tone(w(12, 'bigger') - 0.15 + i * 0.28, { f: 440 + i * 110, type: 'sine', dur: 0.25, gain: 0.12, a: 0.01, hold: 0.05, minor: true }));
    pop_(w(12, 'pause') - 0.1, 600, 0.6, 0, false); pop_(w(12, 'like') - 0.2, 800, 0.6, 0.4); k.play('success', w(12, 'us'), { f: 'G5', gain: 0.35 });
    // end
    big_(w(13, 'how') - 0.15, 'E6'); caw(w(13, 'high') - 0.05, 0.18);
    ['think', 'crow', 'could'].forEach((x, i) => pop_(w(13, x) - 0.1, 650 + i * 150, 0.6, -0.4 + i * 0.4));
    k.play('success', w(13, 'count') + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(13, 'count') + 0.1, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
