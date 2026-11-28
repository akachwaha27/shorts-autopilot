// ===== Kawaii Anime, vertical: "How did a water bear survive 10 days in space?" =====
(function () {
  // ---------- Kawaii anime: clean warm-brown outlines, one cel-shadow tone, glossy anime eyes; periwinkle space, macro moss forest drying to tan, lilac cell lens, mint lab ----------
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
  const P_ = [{"s":0.25,"e":2.42,"text":"You'd pass out in 15 seconds in space.","words":[["youd",0.25],["pass",0.55],["out",0.85],["in",1.07],["15",1.22],["seconds",1.37],["in",1.9],["space",2.05]]},{"s":2.88,"e":4.69,"text":"How did this animal last 10 days?","words":[["how",2.88],["did",3.09],["this",3.3],["animal",3.58],["last",4.0],["10",4.27],["days",4.41]]},{"s":5.13,"e":7.21,"text":"Meet the tardigrade, or water bear,","words":[["meet",5.13],["the",5.43],["tardigrade",5.65],["or",6.4],["water",6.55],["bear",6.92]]},{"s":7.48,"e":10.17,"text":"half a millimeter long, with eight chubby legs.","words":[["half",7.48],["a",7.77],["millimeter",7.84],["long",8.54],["with",8.83],["eight",9.11],["chubby",9.46],["legs",9.89]]},{"s":10.53,"e":12.18,"text":"When its home dries out,","words":[["when",10.53],["its",10.88],["home",11.14],["dries",11.49],["out",11.92]]},{"s":12.25,"e":13.25,"text":"it pulls in its legs,","words":[["it",12.25],["pulls",12.38],["in",12.69],["its",12.81],["legs",13.0]]},{"s":13.63,"e":15.43,"text":"squeezes out almost all its water,","words":[["squeezes",13.63],["out",14.15],["almost",14.34],["all",14.72],["its",14.92],["water",15.11]]},{"s":15.69,"e":18.2,"text":"and curls into a tiny ball called a tun.","words":[["and",15.69],["curls",15.93],["into",16.34],["a",16.66],["tiny",16.74],["ball",17.07],["called",17.39],["a",17.88],["tun",17.96]]},{"s":18.67,"e":21.51,"text":"Inside, special proteins set like glass,","words":[["inside",18.67],["special",19.19],["proteins",19.79],["set",20.48],["like",20.73],["glass",21.08]]},{"s":21.87,"e":23.35,"text":"holding every cell in place,","words":[["holding",21.87],["every",22.32],["cell",22.64],["in",22.9],["place",23.03]]},{"s":23.66,"e":24.98,"text":"and its body switches off.","words":[["and",23.66],["its",23.85],["body",24.04],["switches",24.29],["off",24.79]]},{"s":25.44,"e":29.72,"text":"In 2007, scientists flew dried tardigrades into orbit.","words":[["in",25.44],["2007",25.63],["scientists",26.01],["flew",26.96],["dried",27.34],["tardigrades",27.82],["into",28.86],["orbit",29.24]]},{"s":30.18,"e":32.18,"text":"Back on Earth, they added water,","words":[["back",30.18],["on",30.5],["earth",30.66],["they",31.06],["added",31.38],["water",31.78]]},{"s":32.4,"e":34.06,"text":"and most woke up within half an hour.","words":[["and",32.4],["most",32.57],["woke",32.8],["up",33.03],["within",33.15],["half",33.49],["an",33.72],["hour",33.83]]},{"s":34.48,"e":37.51,"text":"They can take a thousand times more radiation than you.","words":[["they",34.48],["can",34.75],["take",34.96],["a",35.22],["thousand",35.29],["times",35.83],["more",36.16],["radiation",36.43],["than",37.04],["you",37.31]]},{"s":37.95,"e":39.64,"text":"So how long would you last up there?","words":[["so",37.95],["how",38.07],["long",38.25],["would",38.49],["you",38.79],["last",38.97],["up",39.21],["there",39.34]]}];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const BEATS = [
    { id: 'hook', s: 0, e: P_[1].e, on: 'FULL FRAME at 0 s: big finished peach water bear floating in pastel periwinkle space over Earth, NO SPACESUIT?! at full size; YOU: 15 SEC tag on "15", IT: 10 DAYS! on "10"' },
    { id: 'meet', s: P_[2].s, e: P_[3].e, on: 'mossy macro forest with dew: water bear walks on a moss stem; TARDIGRADE / WATER BEAR headline, 0.5 mm ruler on "half", 8 LEGS tag with arrows on "eight"' },
    { id: 'dry', s: P_[4].s, e: P_[7].e, on: 'same moss dries to tan, sun pops; legs pull in, water squeezes out (WATER meter drains), body curls into a wrinkly barrel: TUN!' },
    { id: 'glass', s: P_[8].s, e: P_[10].e, on: 'magnifier into the tun: cute cells, protein squiggles set into glass with shine (LIKE GLASS), LOCKED tag, cells fall asleep: SWITCHED OFF' },
    { id: 'orbit', s: P_[11].s, e: P_[11].e, on: 'pastel space: 2007, capsule with a tray of dried tuns circles Earth on a dotted orbit, INTO ORBIT' },
    { id: 'wake', s: P_[12].s, e: P_[13].e, on: 'lab petri dish: a pipette drop lands on the tun, it swells back into a happy water bear; WAKE UP! and 30 MIN clock tag' },
    { id: 'rad', s: P_[14].s, e: P_[14].e, on: 'pastel radiation sign, sweating chibi kid (YOU) vs proud water bear, 1000x number on "thousand"' },
    { id: 'end', s: P_[15].s, e: P_[15].e, on: 'back in space with the floating water bear waving: HOW LONG? then COMMENT! (loops to hook)' },
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
  const mixC = (a, b, u) => H.rgba(H.mix(a, b, u));

  // ---------- the water bear (3/4 side view, facing right) ----------
  // o = { t, tun (0 walking .. 1 dry barrel), walk, eyes, mouth, look, iris, pal, rot, wave, ph }
  const WB = { b: '#ffe1cc', s: '#f2b896', fold: '#e29d7a', belly: '#fff0e3', claw: '#6b4a3a' };
  const TUN = { b: '#dcb98b', s: '#bf9767', fold: '#a37a4d', belly: '#ead1a8', claw: '#6b4a3a' };
  function tardi(ctx, x, y, s, o = {}) {
    const t = o.t || 0, k = o.tun || 0, P0 = o.pal || WB;
    const colA = (key) => H.mix(P0[key], TUN[key], H.smooth(0.25, 1, k)), col = (key) => H.rgba(colA(key));
    const L = H.lerp(300, 175, H.smooth(0.3, 1, k)), R = H.lerp(160, 168, k);
    const legLen = 98 * (1 - H.smooth(0, 0.55, k));
    const walk = (o.walk || 0) * (1 - k);
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(s * (o.flip || 1), s);
    const legXs = [-0.72, -0.27, 0.18, 0.6];
    const drawLeg = (lx, ly, i, far) => {
      if (legLen < 4) return;
      const sw = Math.sin(t * 9 + i * 1.6 + (far ? Math.PI : 0)) * 0.32 * walk + (o.paddle ? Math.sin(t * 3 + i) * 0.25 : 0);
      ctx.save(); ctx.translate(lx, ly); ctx.rotate(sw);
      const p = rrP(-27, -20, 54, legLen + 20, 27);
      cel(ctx, p, far ? col('s') : col('b'), far ? H.rgba(H.mix(colA('s'), C.plum, 0.12)) : col('s'), -4, -4, 4);
      // little claws
      ctx.strokeStyle = col('claw'); ctx.lineCap = 'round'; ctx.lineWidth = 6;
      for (let c = -1; c <= 1; c++) { ctx.beginPath(); ctx.moveTo(c * 13, legLen - 2); ctx.quadraticCurveTo(c * 16 + 10, legLen + 16, c * 16 + 18, legLen + 10); ctx.stroke(); }
      ctx.restore();
    };
    // far legs (darker, behind)
    legXs.forEach((f, i) => drawLeg(f * L + 26, R * 0.62, i, true));
    // body
    const body = ellP(0, 0, L, R);
    cel(ctx, body, col('b'), col('s'), -16, -16, 5.5);
    ctx.save(); ctx.clip(body);
    ctx.fillStyle = col('belly'); ctx.globalAlpha = 0.85; ctx.fill(ellP(L * 0.1, R * 0.62, L * 0.85, R * 0.42)); ctx.globalAlpha = 1;
    // segment folds across the back
    ctx.strokeStyle = col('fold'); ctx.lineCap = 'round'; ctx.lineWidth = 6;
    [-0.62, -0.3, 0.02].forEach((f) => { ctx.beginPath(); ctx.moveTo(f * L - 10, -R * 1.0); ctx.quadraticCurveTo(f * L + 26, 0, f * L - 6, R * 0.55); ctx.stroke(); });
    // little skin bumps
    const r = H.rng(17); ctx.fillStyle = H.rgba(H.mix(colA('b'), '#ffffff', 0.55), 0.8);
    for (let i = 0; i < 12; i++) ctx.fill(ellP(r.range(-L * 0.8, L * 0.3), r.range(-R * 0.8, -R * 0.2), r.range(6, 11), r.range(5, 8)));
    // tun wrinkles
    if (k > 0.35) {
      ctx.globalAlpha = H.smooth(0.35, 1, k); ctx.strokeStyle = col('fold'); ctx.lineWidth = 7;
      for (let i = 0; i < 7; i++) { const yy = -R * 0.85 + i * R * 0.28; ctx.beginPath(); ctx.moveTo(-L * 0.9, yy + 10); ctx.quadraticCurveTo(0, yy - 22 + (i % 2) * 14, L * 0.9, yy + 8); ctx.stroke(); }
      ctx.globalAlpha = 1;
    }
    ctx.restore();
    shine(ctx, -L * 0.45, -R * 0.62, 46, 18, -0.25, 0.7);
    // near legs
    legXs.forEach((f, i) => drawLeg(f * L, R * 0.72, i + 4, false));
    // face (front right of the body)
    const fx = L * 0.5 * H.lerp(1, 0.55, k), ek = o.eyes || ((t + (o.ph || 0)) % 3.9 > 3.75 ? 'blink' : 'normal');
    const lk = o.look || [0.3, 0];
    eye(ctx, fx - 46, -R * 0.2, 31, 39, o.iris || '#3f9a7a', ek, -1, lk);
    eye(ctx, fx + 42, -R * 0.17, 28, 36, o.iris || '#3f9a7a', ek, 1, lk);
    blush(ctx, fx - 70, R * 0.18, 26, 13); blush(ctx, fx + 60, R * 0.2, 22, 12);
    const mk = o.mouth || 'tube';
    if (mk === 'tube') { const mp = ellP(fx + 4, R * 0.3, 15, 13); ctx.fillStyle = '#b8456f'; ctx.fill(mp); ol(ctx, mp, 4.5); ctx.save(); ctx.strokeStyle = col('s'); ctx.lineWidth = 6; ctx.stroke(ellP(fx + 4, R * 0.3, 24, 21)); ctx.restore(); ol(ctx, ellP(fx + 4, R * 0.3, 27, 24), 3); }
    else mouth(ctx, fx + 4, R * 0.28, 20, mk);
    ctx.restore();
  }

  // ---------- chibi kid ("you") ----------
  function kid(ctx, x, y, s, t, ex = 'normal') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-110, 150, 220, 230, 90), '#9fd3f5', '#73b4e3', -8, -8, 5);
    const head = ellP(0, 0, 165, 150);
    cel(ctx, head, '#ffe0c7', '#f2b88f', -12, -12, 5.5);
    const hair = new Path2D(); hair.moveTo(-168, 10); hair.bezierCurveTo(-180, -170, 170, -190, 168, 10); hair.bezierCurveTo(120, -70, 60, -40, 20, -80); hair.bezierCurveTo(-10, -30, -80, -50, -110, -60); hair.bezierCurveTo(-130, -30, -150, -10, -168, 10); hair.closePath();
    cel(ctx, hair, '#6b4a3a', '#4a3328', -8, -8, 5);
    eye(ctx, -58, 30, 30, 38, '#4a7fc9', ex, -1, [0, 0]); eye(ctx, 58, 30, 30, 38, '#4a7fc9', ex, 1, [0, 0]);
    blush(ctx, -100, 80, 24, 12); blush(ctx, 100, 80, 24, 12);
    mouth(ctx, 0, 100, 22, ex === 'shock' || ex === 'swirl' ? 'wobble' : 'smile');
    ctx.restore();
  }

  // ---------- backgrounds ----------
  function stars(ctx, t, seed, n = 40) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) { const x = r.range(20, W - 20), y = r.range(20, HH * 0.8), R = r.range(5, 14), ph = r() * TAU; const k = 0.55 + 0.45 * Math.sin(t * r.range(1.5, 3.5) + ph); if (R > 10) sparkle(ctx, x, y, R * k, i % 4 ? C.white : C.butter, 0, 0); else { ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fill(ellP(x, y, R * 0.35 * k + 1.5, R * 0.35 * k + 1.5)); } }
  }
  function space(ctx, t, seed, pal = { top: '#6c74b8', bot: '#c3b4e6' }) {
    const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, pal.top); g.addColorStop(1, pal.bot); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    // soft pastel nebula puffs (flat, no glow)
    ctx.save(); ctx.globalAlpha = 0.22; ctx.fillStyle = '#f6d6ef'; ctx.fill(cloudP(250 + Math.sin(t * 0.3) * 20, 640, 2.6)); ctx.fillStyle = '#d6e9fb'; ctx.fill(cloudP(860, 1150, 2.2)); ctx.restore();
    stars(ctx, t, seed);
  }
  function earth(ctx, cx, cy, R, t) {
    const e = ellP(cx, cy, R, R);
    cel(ctx, e, '#8fd0f2', '#5fa9d8', -30, -30, 6);
    ctx.save(); ctx.clip(e);
    const r = H.rng(5), sp = t * 6;
    for (let i = 0; i < 7; i++) { const a = r.range(0, TAU), d = r.range(0, R * 0.85), lx = cx + Math.cos(a) * d + sp, ly = cy + Math.sin(a) * d; cel(ctx, roundPoly([[lx - 120, ly], [lx - 30, ly - 90], [lx + 110, ly - 40], [lx + 90, ly + 70], [lx - 40, ly + 90]], 40), '#a8dc8a', '#7fbf6a', -6, -6, 4); }
    ctx.globalAlpha = 0.9; ctx.fillStyle = C.white; for (let i = 0; i < 5; i++) ctx.fill(cloudP(cx + r.range(-R, R) - sp * 0.5, cy + r.range(-R, R * 0.2), r.range(0.7, 1.2)));
    ctx.restore();
    ol(ctx, e, 6);
  }
  // macro moss forest; d = dryness 0..1
  function moss(ctx, t, d, seed) {
    const sky = ctx.createLinearGradient(0, 0, 0, HH);
    sky.addColorStop(0, mixC('#d9f3e6', '#fff0c4', d)); sky.addColorStop(1, mixC('#a9dcc0', '#f2d39a', d));
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, HH);
    const r = H.rng(seed);
    const g1 = mixC('#7fcf8f', '#cfb27a', d), g1s = mixC('#5fae74', '#b0915c', d), g2 = mixC('#a6e09a', '#e0c88f', d), g2s = mixC('#82c47b', '#c4a970', d);
    // background fronds (pale)
    for (let i = 0; i < 7; i++) {
      const x = r.range(-40, W + 40), hgt = r.range(700, 1200), ph = r() * TAU;
      ctx.save(); ctx.globalAlpha = 0.45; ctx.translate(x, HH + 40); ctx.rotate(Math.sin(t * 0.8 + ph) * 0.03);
      const st = rrP(-12, -hgt, 24, hgt, 12); cel(ctx, st, g2, g2s, -3, 0, 0);
      for (let j = 0; j < 9; j++) { const yy = -hgt + j * hgt / 10, sd = j % 2 ? 1 : -1; cel(ctx, ellP(sd * 52, yy, 62, 20, sd * -0.5), g2, g2s, -3, -3, 0); }
      ctx.restore();
    }
    // dew drops (shrink as it dries)
    for (let i = 0; i < 6; i++) { const x = r.range(80, W - 80), y = r.range(560, 1500), rr = r.range(20, 36) * (1 - d); if (rr < 2) continue; ctx.save(); ctx.fillStyle = 'rgba(220,245,255,0.75)'; ctx.fill(ellP(x, y, rr, rr * 1.1)); ol(ctx, ellP(x, y, rr, rr * 1.1), 3.5); shine(ctx, x - rr * 0.35, y - rr * 0.4, rr * 0.3, rr * 0.2, -0.6); ctx.restore(); }
    // the moss stem the bear walks on
    const stem = new Path2D(); stem.moveTo(-60, 1330); stem.bezierCurveTo(300, 1250, 700, 1290, W + 60, 1210); stem.lineTo(W + 60, 1290); stem.bezierCurveTo(700, 1370, 300, 1330, -60, 1410); stem.closePath();
    cel(ctx, stem, g1, g1s, 0, -10, 5);
    // foreground leaflets
    for (let i = 0; i < 12; i++) { const x = -40 + i * 100, y = 1700 + (i % 3) * 40, ph = i * 1.3; ctx.save(); ctx.translate(x, y); ctx.rotate(-0.4 + (i % 2) * 0.8 + Math.sin(t * 1.2 + ph) * 0.04); cel(ctx, ellP(0, -120, 46, 150), g1, g1s, -6, -6, 4.5); ctx.restore(); }
    cel(ctx, rrP(-40, 1760, W + 80, 220, 0), g1s, g1s, 0, 0, 0);
  }
  function sun(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(t * 0.4);
    for (let i = 0; i < 10; i++) { ctx.save(); ctx.rotate(i * TAU / 10); cel(ctx, rrP(-16, -190, 32, 70, 16), C.butterD, C.butterS, -3, -3, 4); ctx.restore(); }
    ctx.rotate(-t * 0.4);
    cel(ctx, ellP(0, 0, 120, 120), C.butter, C.butterS, -10, -10, 5);
    eye(ctx, -40, -10, 14, 18, '#c98a5c', 'happy', -1); eye(ctx, 40, -10, 14, 18, '#c98a5c', 'happy', 1); blush(ctx, -66, 26, 16, 8); blush(ctx, 66, 26, 16, 8); mouth(ctx, 0, 30, 14, 'smile');
    ctx.restore();
  }
  function waterMeter(ctx, x, y, lvl, t) {
    const box = rrP(x - 60, y - 230, 120, 460, 60);
    cel(ctx, box, C.white, C.creamS, -6, -6, 5);
    ctx.save(); ctx.clip(box); const top = y + 230 - 460 * lvl; ctx.fillStyle = C.skyS; ctx.beginPath(); ctx.moveTo(x - 70, y + 240); ctx.lineTo(x - 70, top); for (let xx = x - 70; xx <= x + 70; xx += 10) ctx.lineTo(xx, top + Math.sin(xx * 0.1 + t * 6) * 6); ctx.lineTo(x + 70, y + 240); ctx.fill(); ctx.restore();
    ol(ctx, box, 5);
    sweat(ctx, x, y - 300, 1.3, 0);
  }
  function drops(ctx, t, t0, cx, cy, n, seed) {
    const u = t - t0; if (u < 0 || u > 1.4) return;
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) { const a = r.range(-Math.PI * 0.95, -Math.PI * 0.05), v = r.range(380, 620), x = cx + Math.cos(a) * v * u, y = cy + Math.sin(a) * v * u + 700 * u * u; ctx.save(); ctx.globalAlpha = 1 - H.clamp((u - 1) / 0.4); sweat(ctx, x, y, 0.9, a + Math.PI / 2); ctx.restore(); }
  }
  function cellBlob(ctx, x, y, R, t, ph, asleep, col) {
    const wob = asleep ? 0 : Math.sin(t * 3 + ph) * 0.04;
    ctx.save(); ctx.translate(x, y); ctx.scale(1 + wob, 1 - wob);
    cel(ctx, ellP(0, 0, R, R * 0.92), col, H.rgba(H.mix(col, C.plum, 0.15)), -8, -8, 4.5);
    eye(ctx, -R * 0.3, -R * 0.05, R * 0.15, R * 0.19, '#7f72d9', asleep ? 'blink' : 'normal', -1);
    eye(ctx, R * 0.3, -R * 0.05, R * 0.15, R * 0.19, '#7f72d9', asleep ? 'blink' : 'normal', 1);
    mouth(ctx, 0, R * 0.3, R * 0.1, asleep ? 'flat' : 'w');
    ctx.restore();
  }
  function capsule(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(Math.sin(t * 0.8) * 0.06);
    cel(ctx, rrP(-40, 110, 80, 60, 10), '#c9c3d9', '#a39bb8', -3, -3, 4);
    const sph = ellP(0, 0, 130, 130); cel(ctx, sph, '#eef0f6', '#c4c8da', -14, -14, 5.5);
    ctx.save(); ctx.clip(sph); ctx.strokeStyle = '#b0b5c9'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-140, -40); ctx.quadraticCurveTo(0, -10, 140, -40); ctx.moveTo(-140, 50); ctx.quadraticCurveTo(0, 80, 140, 50); ctx.stroke(); ctx.restore();
    cel(ctx, ellP(-40, -55, 30, 30), C.sky, C.skyS, -3, -3, 4); shine(ctx, -48, -64, 10, 6);
    // experiment tray with dried tuns
    const tray = rrP(60, -40, 150, 90, 12); cel(ctx, tray, C.butter, C.butterS, -4, -4, 4.5);
    for (let i = 0; i < 3; i++) cel(ctx, ellP(90 + i * 45, 6, 16, 12), TUN.b, TUN.s, -2, -2, 3);
    ctx.restore();
  }
  function clock(ctx, x, y, R, t, frac) {
    cel(ctx, ellP(x, y, R, R), C.white, C.creamS, -6, -6, 5);
    ctx.save(); ctx.translate(x, y); ctx.fillStyle = H.rgba(C.mintS, 0.9); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R * 0.82, -Math.PI / 2, -Math.PI / 2 + TAU * frac); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -R * 0.6); ctx.stroke(); ctx.save(); ctx.rotate(TAU * frac); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -R * 0.75); ctx.stroke(); ctx.restore(); ctx.fillStyle = C.plum; ctx.fill(ellP(0, 0, 10, 10)); ctx.restore();
  }
  function radSign(ctx, x, y, R, t) {
    cel(ctx, ellP(x, y, R, R), C.butter, C.butterS, -8, -8, 5);
    ctx.save(); ctx.translate(x, y); ctx.rotate(t * 0.5); ctx.fillStyle = C.plum;
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(0, 0, R * 0.78, i * TAU / 3 - Math.PI / 6 - Math.PI / 2, i * TAU / 3 + Math.PI / 6 - Math.PI / 2); ctx.arc(0, 0, R * 0.22, i * TAU / 3 + Math.PI / 6 - Math.PI / 2, i * TAU / 3 - Math.PI / 6 - Math.PI / 2, true); ctx.closePath(); ctx.fill(); }
    ctx.fill(ellP(0, 0, R * 0.13, R * 0.13)); ctx.restore();
  }

  // ---------- scenes ----------
  const sceneT = [0, P_[2].s - 0.2, P_[8].s - 0.25, P_[11].s - 0.25, P_[12].s - 0.25, P_[14].s - 0.25, P_[15].s - 0.25];
  const scenes = [
    // 0 HOOK: finished water bear floating in space at t = 0
    { s: sceneT[0], draw(ctx, t) {
      space(ctx, t, 3);
      earth(ctx, 540, 2420, 980, t);
      speedLines(ctx, 540, 1050, t, 0.13, 28, '255,255,255', 600);
      const n15 = w(0, '15') - 0.15, n10 = w(1, '10') - 0.15;
      tardi(ctx, 540, 1040 + bob(t, 0, 16), 1.42, { t, paddle: 1, rot: Math.sin(t * 1.1) * 0.06, eyes: t > n10 ? 'star' : 'normal', mouth: t > n10 ? 'smile' : 'tube', look: [0.4, -0.3] });
      for (let i = 0; i < 4; i++) sparkle(ctx, [130, 950, 900, 170][i], [720, 700, 1360, 1380][i] + bob(t, i, 8), 26 + 7 * Math.sin(t * 4 + i), i % 2 ? C.butter : C.white, 0, 4);
      label(ctx, 'YOU: 15 SEC', 290, 1560, 58, t, n15, C.pink);
      label(ctx, 'IT: 10 DAYS!', 790, 1560, 62, t, n10, C.mint);
      if (t > n10) { impactLines(ctx, 790, 1560, 190, t, n10, 10, C.butterD); confetti(ctx, t, n10, 540, 1000, 26, 15); }
      if (t > w(1, 'how') - 0.1 && t < n10) qmark(ctx, 900, 860, 110, t, w(1, 'how') - 0.1, 0.5, '?!');
      ctx.save(); ctx.translate(540, 330); ctx.rotate(-0.03 + Math.sin(t * 3) * 0.015);
      kText(ctx, 'NO', 0, 0, 150, { fill: C.white, line: C.lavD, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
      ctx.save(); ctx.translate(540, 500); ctx.rotate(0.02 + Math.sin(t * 4) * 0.015);
      fitText(ctx, 'SPACESUIT?!', 0, 0, 160, 980, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
    } },

    // 1 MEET + DRY: moss forest, walking bear, dries out into a tun (continuous)
    { s: sceneT[1], draw(ctx, t) {
      const dr = w(4, 'dries') - 0.15, pl = w(5, 'pulls') - 0.15, sq = w(6, 'squeezes') - 0.15, cu = w(7, 'curls') - 0.15, tn = w(7, 'tun') - 0.15;
      const d = seg(t, dr, dr + 1.2);
      moss(ctx, t, d, 11);
      if (t > dr) { const sp = pop(t, dr, 1.0); ctx.save(); ctx.translate(900, 700); ctx.scale(sp.sx * 0.8, sp.sy * 0.8); sun(ctx, 0, 0, 1, t); ctx.restore(); }
      // walking bear on the stem, stops when it dries
      const legIn = seg(t, pl, pl + 0.6) * 0.45, ball = seg(t, cu, tn + 0.2) * 0.55, k = legIn + ball;
      const wx = H.lerp(380, 520, H.clamp((t - sceneT[1]) / (dr - sceneT[1])));
      const sqz = t > sq && t < sq + 1.5 ? squash(t, sq, 0.18) : [1, 1];
      const ey = t > tn ? 'blink' : (t > sq ? 'squeeze' : (t > dr ? 'shock' : 'normal'));
      ctx.save(); ctx.translate(wx, 1150 + H.lerp(0, 50, k)); ctx.scale(sqz[0], sqz[1]);
      tardi(ctx, 0, 0, 1.12, { t, tun: k, walk: t < dr ? 1 : 0, eyes: ey, mouth: t > tn ? 'flat' : (t > dr ? 'o' : 'tube'), ph: 1 });
      ctx.restore();
      if (t > dr && t < sq) sweat(ctx, wx + 230, 950, 1.0);
      drops(ctx, t, sq, wx, 1080, 9, 31);
      if (t > tn) { impactLines(ctx, wx, 1180, 260, t, tn, 12, C.brown); for (let i = 0; i < 3; i++) kana(ctx, 'z', wx + 220 + i * 50, 960 - i * 60 - ((t * 30) % 30), 50 + i * 12, 0.2, pop(t, tn + 0.3 + i * 0.15).s, C.lav); }
      // meet labels
      const ruler = pop(t, w(3, 'half') - 0.15).s * popOut(t, P_[4].s);
      if (ruler > 0) { ctx.save(); ctx.translate(wx, 1480); ctx.scale(ruler, ruler); cel(ctx, rrP(-330, -26, 660, 52, 12), C.butter, C.butterS, -3, -3, 4); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); for (let i = 0; i <= 10; i++) { ctx.moveTo(-310 + i * 62, -26); ctx.lineTo(-310 + i * 62, i % 5 ? -6 : 6); } ctx.stroke(); ctx.restore(); }
      if (t < P_[4].s) numPop(ctx, '0.5 mm', wx, 1610, 110, t, w(3, 'millimeter') - 0.15, { line: C.mintD });
      if (t < P_[4].s) {
        const lg = w(3, 'eight') - 0.15;
        if (t > lg) { dotted(ctx, bez([880, 900], [940, 980], [900, 1160], [760, 1260]), H.clamp((t - lg) / 0.4), C.pinkD, 7, 24, 1); }
        label(ctx, '8 LEGS', 870, 840, 62, t, lg, C.pink, P_[4].s);
        if (t > w(3, 'chubby') - 0.1) heart(ctx, wx + 330, 980 + bob(t, 1, 6), 34 * pop(t, w(3, 'chubby') - 0.1).s);
      }
      // dry labels
      if (t > sq - 0.05) { const mp = pop(t, sq - 0.05, 1.0); ctx.save(); ctx.translate(960, 1000); ctx.scale(mp.sx * 0.62, mp.sy * 0.62); waterMeter(ctx, 0, 0, H.lerp(1, 0.04, seg(t, sq, w(6, 'water') + 0.4)), t); ctx.restore(); label(ctx, 'WATER', 960, 1210, 44, t, sq, C.sky); }
      if (t > pl && t < sq) label(ctx, 'LEGS IN', 300, 880, 56, t, pl, C.butter, sq);
      label(ctx, 'TINY BALL', 300, 880, 56, t, w(7, 'ball') - 0.15, C.peach);
      // headline
      if (t < w(2, 'water') - 0.15) big(ctx, 'TARDIGRADE', 540, 330, 118, t, w(2, 'tardigrade') - 0.15, { line: C.mintD });
      else if (t < dr) big(ctx, 'WATER BEAR', 540, 330, 120, t, w(2, 'water') - 0.15, { line: C.skyD });
      else if (t < tn) big(ctx, 'DRY OUT!', 540, 330, 140, t, dr, { line: C.brown });
      else big(ctx, 'TUN!', 540, 340, 190, t, tn, { line: C.brown, fill: C.butter });
    } },

    // 2 GLASS: cells inside the tun set like glass, then switch off
    { s: sceneT[2], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#ece8ff', dot: '#ddd6fb', acc: '#cfc6f6', kind: 'stars' }, 41);
      const pr = w(8, 'proteins') - 0.15, gl = w(8, 'glass') - 0.15, ce = w(9, 'cell') - 0.15, of = w(10, 'switches') - 0.15;
      const cx = 540, cy = 1060, LR = 430, lens = ellP(cx, cy, LR, LR);
      const zp = pop(t, sceneT[2], 0.8);
      ctx.save(); ctx.translate(cx, cy); ctx.scale(zp.sx, zp.sy); ctx.translate(-cx, -cy);
      ctx.save(); ctx.fillStyle = '#fff3e6'; ctx.fill(lens); ctx.clip(lens);
      const cols = [C.pink, C.mint, C.butter, C.sky, C.lav, C.peach, C.pink];
      const pos = [[-200, -200], [40, -250], [250, -120], [-260, 40], [10, 0], [250, 140], [-140, 240], [110, 260]];
      // protein squiggles (move, then freeze when the glass sets)
      if (t > pr) { const r = H.rng(81), tf = Math.min(t, gl); for (let i = 0; i < 16; i++) { const px = cx + r.range(-360, 360) + Math.sin(tf * 2 + i) * 30, py = cy + r.range(-360, 360) + Math.cos(tf * 1.7 + i) * 30, a = pop(t, pr + i * 0.03).s; if (a <= 0) continue; ctx.save(); ctx.translate(px, py); ctx.rotate(i + tf * (i % 2 ? 1 : -1)); ctx.scale(a, a); ctx.strokeStyle = C.plum; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-30, 0); ctx.bezierCurveTo(-15, -22, 0, 22, 15, 0); ctx.quadraticCurveTo(22, -10, 30, 0); ctx.stroke(); ctx.strokeStyle = i % 2 ? C.mintD : C.lavD; ctx.lineWidth = 9; ctx.stroke(); ctx.restore(); } }
      pos.forEach(([dx, dy], i) => cellBlob(ctx, cx + dx, cy + dy + (t < gl ? Math.sin(t * 2 + i) * 8 : 0), 100, t, i, t > of + i * 0.04, cols[i % cols.length]));
      // glass sets
      const g = seg(t, gl, gl + 0.5);
      if (g > 0) { ctx.save(); ctx.globalAlpha = 0.42 * g; ctx.fillStyle = '#bfe6f5'; ctx.fill(lens); ctx.globalAlpha = 0.75 * g; ctx.fillStyle = C.white; for (let i = 0; i < 3; i++) { const sx = cx - 380 + i * 260 + (1 - g) * -200; ctx.beginPath(); ctx.moveTo(sx, cy - 450); ctx.lineTo(sx + 70 + i * 20, cy - 450); ctx.lineTo(sx - 230 + i * 20, cy + 450); ctx.lineTo(sx - 300, cy + 450); ctx.fill(); } ctx.restore(); }
      ctx.restore();
      ctx.save(); ctx.lineWidth = 34; ctx.strokeStyle = C.plum; ctx.stroke(lens); ctx.lineWidth = 22; ctx.strokeStyle = C.lav; ctx.stroke(lens); ctx.restore();
      // magnifier handle
      ctx.save(); ctx.translate(cx + LR * 0.72, cy + LR * 0.72); ctx.rotate(-Math.PI / 4); cel(ctx, rrP(-40, 20, 80, 230, 30), C.pinkD, '#e05a4b', -5, -5, 5); ctx.restore();
      ctx.restore();
      if (g > 0.6) for (let i = 0; i < 5; i++) sparkle(ctx, cx + Math.cos(i * 1.3) * 470, cy + Math.sin(i * 1.3) * 470, 30 * pop(t, gl + 0.3 + i * 0.05).s, i % 2 ? C.white : C.butter, 0, 4);
      label(ctx, 'PROTEINS', 260, 1610, 56, t, pr, C.mint, ce);
      label(ctx, 'LOCKED IN PLACE', 540, 1620, 56, t, ce, C.sky, of - 0.05);
      if (t > of) { label(ctx, 'OFF', 540, 1620, 72, t, of, C.pink); for (let i = 0; i < 3; i++) kana(ctx, 'z', 820 + i * 55, 700 - i * 60 - ((t * 30) % 30), 54 + i * 12, 0.2, pop(t, of + 0.2 + i * 0.15).s, C.lav); }
      if (t < gl) big(ctx, 'INSIDE...', 540, 330, 130, t, P_[8].s - 0.1, { line: C.lavD });
      else if (t < of) big(ctx, 'LIKE GLASS', 540, 330, 124, t, gl, { line: C.skyD });
      else big(ctx, 'SWITCHED OFF', 540, 330, 108, t, of, { line: C.lavD });
    } },

    // 3 ORBIT 2007
    { s: sceneT[3], draw(ctx, t) {
      space(ctx, t, 23, { top: '#5f6aa8', bot: '#b9b0e3' });
      earth(ctx, 540, 1150, 330, t);
      const n07 = w(11, '2007') - 0.15, dr = w(11, 'dried') - 0.15, ob = w(11, 'orbit') - 0.15;
      const orbit = arcPts(540, 1150, 500, -Math.PI * 0.95, Math.PI * 1.05, 90);
      dotted(ctx, orbit, H.clamp((t - sceneT[3]) / 1.2) * (t > ob ? 1 : 0.55) + (t > ob ? 0 : 0), C.white, 6, 26, 0);
      const a = -Math.PI * 0.8 + (t - sceneT[3]) * 0.55, cxp = 540 + Math.cos(a) * 500, cyp = 1150 + Math.sin(a) * 500;
      capsule(ctx, cxp, cyp, 0.9, t);
      if (t > dr) { const zp = pop(t, dr, 1.0); ctx.save(); ctx.translate(800, 1640); ctx.scale(zp.sx, zp.sy); union(ctx, [rrP(-230, -95, 460, 190, 60)], C.white, 5); for (let i = 0; i < 3; i++) tardi(ctx, -140 + i * 140, -10, 0.24, { t: t + i, tun: 1, eyes: 'blink', mouth: 'flat' }); ctx.restore(); kana(ctx, 'z', 1010, 1500 - ((t * 30) % 30), 50, 0.2, pop(t, dr + 0.3).s, C.lav); }
      label(ctx, 'DRIED', 250, 1640, 56, t, dr, C.peach);
      if (t > ob) label(ctx, 'INTO ORBIT', 540, 560, 64, t, ob, C.sky);
      numPop(ctx, '2007', 540, 380, 190, t, n07, { line: C.lavD, fill: C.white });
    } },

    // 4 WAKE: drop of water on the tun in a petri dish
    { s: sceneT[4], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#e3f6ea', dot: '#cbeed8', acc: '#b9e5c9', kind: 'dots' }, 51);
      const ad = w(12, 'added') - 0.15, wk = w(13, 'woke') - 0.15, hf = w(13, 'half') - 0.15;
      cel(ctx, rrP(-40, 1420, W + 80, 600, 0), '#e8d3b5', '#d2b994', 0, -12, 5);
      // petri dish
      const dish = ellP(540, 1300, 420, 150);
      cel(ctx, ellP(540, 1330, 440, 160), '#e6f3f6', '#c6dfe5', -6, -6, 5);
      ctx.save(); ctx.fillStyle = 'rgba(190,232,245,0.6)'; ctx.fill(dish); ctx.restore(); ol(ctx, dish, 4);
      // water spreads in the dish after the drop
      const sp = seg(t, ad + 0.35, ad + 0.9); if (sp > 0) { ctx.save(); ctx.fillStyle = 'rgba(120,200,235,0.45)'; ctx.fill(ellP(540, 1300, 380 * sp, 130 * sp)); ctx.restore(); }
      // pipette + drop
      const pp = pop(t, sceneT[4], 0.9).s;
      ctx.save(); ctx.translate(540, 520 - (1 - pp) * 300); cel(ctx, rrP(-34, -260, 68, 260, 30), C.white, C.creamS, -4, -4, 5); cel(ctx, rrP(-50, -360, 100, 120, 40), C.pinkD, '#e05a4b', -5, -5, 5); const tip = new Path2D(); tip.moveTo(-34, 0); tip.lineTo(34, 0); tip.lineTo(8, 110); tip.lineTo(-8, 110); tip.closePath(); cel(ctx, tip, C.white, C.creamS, -3, -3, 4.5); ctx.restore();
      const fu = H.clamp((t - ad) / 0.4); if (fu > 0 && fu < 1) sweat(ctx, 540, H.lerp(660, 1180, fu * fu), 1.3, 0);
      if (t > ad + 0.4 && t < ad + 1.0) impactLines(ctx, 540, 1230, 90, t, ad + 0.4, 10, C.skyD);
      // tun swells back into a bear
      const k = 1 - seg(t, wk - 0.2, wk + 0.6);
      tardi(ctx, 540, 1220 + bob(t, 0, k < 0.1 ? 6 : 0), 0.88 * H.lerp(1, 0.75, k), { t, tun: k, walk: k < 0.05 ? 0.6 : 0, eyes: k > 0.5 ? 'blink' : (t > wk + 0.6 ? 'happy' : 'normal'), mouth: k > 0.5 ? 'flat' : 'smile', ph: 2 });
      if (t > wk + 0.3) { speedLines(ctx, 540, 1150, t, 0.18, 26, '255,255,255', 420); for (let i = 0; i < 5; i++) sparkle(ctx, 540 + Math.cos(i * 1.26 + t) * 380, 1120 + Math.sin(i * 1.26 + t) * 260, 28 * pop(t, wk + 0.3 + i * 0.05).s, i % 2 ? C.butter : C.white, 0, 4); }
      if (t > hf) { const cp = pop(t, hf, 1.0); ctx.save(); ctx.translate(250, 840); ctx.scale(cp.sx, cp.sy); clock(ctx, 0, 0, 100, t, 0.5 * seg(t, hf, hf + 0.6)); ctx.restore(); }
      label(ctx, '30 MIN', 250, 1000, 62, t, hf, C.butter);
      if (t < wk) big(ctx, 'ADD WATER', 540, 330, 128, t, P_[12].s - 0.1, { line: C.skyD });
      else big(ctx, 'WAKE UP!', 540, 330, 140, t, wk, { line: C.mintD, fill: C.butter });
    } },

    // 5 RADIATION 1000x
    { s: sceneT[5], draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#fff2d8', dot: '#f9e2b0', acc: '#f5d58f', kind: 'stars' }, 61);
      const ra = w(14, 'radiation') - 0.15, th = w(14, 'thousand') - 0.15, yo = w(14, 'you') - 0.15;
      const rp = pop(t, sceneT[5], 1.0); ctx.save(); ctx.translate(540, 720); ctx.scale(rp.sx, rp.sy); radSign(ctx, 0, 0, 120, t); ctx.restore();
      if (t > ra) { ctx.save(); ctx.strokeStyle = C.butterD; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.setLineDash([24, 26]); ctx.lineDashOffset = -t * 120; for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(540 + i * 40, 860); ctx.lineTo(540 + i * 190, 1150); ctx.stroke(); } ctx.restore(); }
      kid(ctx, 260, 1230 + bob(t, 0, 4), 0.85, t, t > yo ? 'swirl' : 'shock');
      if (t > ra) { sweat(ctx, 420, 1070, 1.0); vein(ctx, 140, 1060, 1.0); }
      tardi(ctx, 790, 1300 + bob(t, 1, 8), 0.72, { t, eyes: t > th ? 'star' : 'normal', mouth: 'smile', ph: 3 });
      label(ctx, 'YOU', 260, 1600, 60, t, yo, C.pink);
      label(ctx, 'WATER BEAR', 790, 1600, 56, t, th + 0.3, C.mint);
      if (t > th) { speedLines(ctx, 540, 1000, t, 0.25, 30, '255,255,255', 360); numPop(ctx, '1000x', 540, 560, 210, t, th, { line: C.pinkD, fill: C.butter }); }
      else big(ctx, 'RADIATION', 540, 330, 128, t, ra, { line: C.butterD });
      if (t > th) big(ctx, 'TOUGHER', 540, 300, 110, t, th + 0.15, { line: C.mintD });
    } },

    // 6 END: back in space, how long would you last?
    { s: sceneT[6], draw(ctx, t) {
      space(ctx, t, 71, { top: '#6c74b8', bot: '#d4c3ec' });
      earth(ctx, 540, 2420, 980, t);
      const hl = w(15, 'how') - 0.15, th_ = w(15, 'there') - 0.05;
      tardi(ctx, 560, 1040 + bob(t, 0, 14), 1.2, { t, paddle: 1, rot: Math.sin(t * 1.1) * 0.06, eyes: t > th_ ? 'happy' : 'normal', mouth: 'smile', look: [-0.5, 0], ph: 4 });
      qmark(ctx, 180, 820, 120, t, hl + 0.2, 0.3); qmark(ctx, 920, 760, 100, t, hl + 0.35, 1.2);
      label(ctx, 'YOU: ? SEC', 300, 1560, 58, t, w(15, 'you') - 0.15, C.pink);
      label(ctx, 'IT: 10 DAYS', 790, 1560, 58, t, w(15, 'last') - 0.15, C.mint);
      big(ctx, t < th_ ? 'HOW LONG?' : 'COMMENT!', 540, 330, 140, t, t < th_ ? hl : th_, { line: C.lavD, fill: C.white });
      if (t > th_ + 0.1) confetti(ctx, t, th_ + 0.1, 540, 900, 30, 91);
    } },
  ];

  function bubbleWipe(ctx, u, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), R = 2000 * e * e + 4, p = ellP(cx, cy, R, R);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = '#cfe9fb'; ctx.lineWidth = 24; ctx.stroke(p); ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.stroke(p); ctx.restore();
  }
  const SHAPES = ['bubble', 'star', 'star', 'bubble', 'heart', 'star'];
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
  function thumbnail(ctx) { scenes[0].draw(ctx, 4.5); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const blub = (at, f = 500, g = 0.14) => k.tone(at, { f: [[0, f], [0.12, f * 1.8]], type: 'sine', dur: 0.14, gain: g, a: 0.005, hold: 0.03, minor: true });
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.38, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.38, 3000]], q: 0.9, gain: 0.28, a: 0.07 }); if (c.shape === 'bubble') for (let i = 0; i < 4; i++) blub(c.t - 0.15 + i * 0.07, 420 + i * 120, 0.16); else k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    k.play('whoosh', 0.02, { dur: 0.9, gain: 0.25 }); pop_(0.06, 650, 0.6, 0, false); k.play('sparkle', 0.1, { n: 4, gain: 0.3 });
    pop_(w(0, '15') - 0.15, 600, 0.7, -0.4, false); k.play('tick', w(0, '15'), { f: 1500, gain: 0.25, minor: true }); k.play('tick', w(0, '15') + 0.3, { f: 1500, gain: 0.2, minor: true });
    big_(w(1, '10') - 0.15, 'C6'); k.play('success', w(1, '10') - 0.1, { f: 'C6', gain: 0.4 });
    // meet
    big_(w(2, 'tardigrade') - 0.15, 'G5'); pop_(w(2, 'water') - 0.15, 800, 0.6, 0, false);
    for (let i = 0; i < 6; i++) k.play('tick', sceneT[1] + 0.2 + i * 0.35, { f: 1200 + (i % 2) * 300, gain: 0.15, minor: true });
    k.play('swish', w(3, 'half') - 0.15, { gain: 0.25 }); pop_(w(3, 'millimeter') - 0.15, 900, 0.6, 0, false);
    pop_(w(3, 'eight') - 0.15, 700, 0.6, 0.4, false); pop_(w(3, 'chubby') - 0.1, 1000, 0.4, 0.4);
    // dry
    k.play('error', w(4, 'dries') - 0.15, { f: 'A3', gain: 0.25 }); big_(w(4, 'dries') - 0.1, 'E5');
    k.play('swish', w(5, 'pulls') - 0.15, { gain: 0.3 }); for (let i = 0; i < 4; i++) pop_(w(5, 'pulls') - 0.1 + i * 0.08, 500 + i * 80, 0.35);
    k.tone(w(6, 'squeezes') - 0.15, { f: [[0, 600], [1.2, 180]], type: 'triangle', dur: 1.3, gain: 0.14, a: 0.03, hold: 0.8 });
    for (let i = 0; i < 6; i++) blub(w(6, 'squeezes') + i * 0.12, 700 - i * 50, 0.15);
    k.play('stamp', w(7, 'tun') - 0.15, { gain: 0.45 }); big_(w(7, 'tun') - 0.1, 'C5');
    // glass
    big_(P_[8].s - 0.1, 'G5'); for (let i = 0; i < 5; i++) pop_(w(8, 'proteins') - 0.15 + i * 0.06, 800 + i * 70, 0.3, -0.5 + i * 0.25);
    k.play('ding', w(8, 'glass') - 0.15, { f: 'E7', gain: 0.3 }); k.play('sparkle', w(8, 'glass'), { n: 6, gain: 0.45 });
    k.play('click', w(9, 'place') - 0.15, { gain: 0.45 });
    k.play('click', w(10, 'switches') - 0.15, { gain: 0.6 }); k.tone(w(10, 'switches') - 0.1, { f: [[0, 520], [0.6, 120]], type: 'sine', dur: 0.6, gain: 0.18, a: 0.01, hold: 0.3 });
    // orbit
    k.play('stamp', w(11, '2007') - 0.15, { gain: 0.4 }); big_(w(11, '2007') - 0.1, 'G5');
    k.play('riser', w(11, 'flew') - 0.2, { dur: 1.0, gain: 0.15 }); pop_(w(11, 'dried') - 0.15, 700, 0.6, 0.4, false);
    k.play('whoosh', w(11, 'orbit') - 0.2, { dur: 0.6, gain: 0.25 }); k.play('success', w(11, 'orbit') - 0.1, { f: 'E6', gain: 0.35 });
    // wake
    big_(P_[12].s - 0.1, 'C6'); blub(w(12, 'added') + 0.25, 400, 0.25); blub(w(12, 'added') + 0.33, 700, 0.2);
    k.play('powerup', w(13, 'woke') - 0.2, { gain: 0.35 }); k.play('sparkle', w(13, 'woke') + 0.3, { n: 6, gain: 0.45 });
    pop_(w(13, 'half') - 0.15, 800, 0.6, -0.4, false); for (let i = 0; i < 4; i++) k.play('tick', w(13, 'half') + i * 0.15, { f: 1700, gain: 0.18, minor: true });
    // radiation
    big_(P_[14].s - 0.1, 'A5'); k.play('error', w(14, 'radiation') - 0.15, { f: 'C4', gain: 0.25 });
    k.play('stamp', w(14, 'thousand') - 0.15, { gain: 0.5 }); k.play('success', w(14, 'thousand') - 0.1, { f: 'G6', gain: 0.45 });
    pop_(w(14, 'you') - 0.15, 600, 0.6, -0.4, false);
    // end
    big_(P_[15].s - 0.1, 'E6'); pop_(w(15, 'you') - 0.15, 600, 0.5, -0.4); pop_(w(15, 'last') - 0.15, 800, 0.5, 0.4);
    k.play('success', w(15, 'there') + 0.05, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(15, 'there') + 0.1, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
