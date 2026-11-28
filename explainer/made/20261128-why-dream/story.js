// ===== Kawaii Anime, vertical: "Why do we dream?" =====
(function () {
  // ---------- Kawaii anime: clean warm-brown outlines, one cel-shadow tone, glossy anime eyes; moonlit lavender bedroom, lilac close-up, mint brain room, peach dream sky with a giant cat, butter lab, sky-blue ward, cream memory jar ----------
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

  const W = 1080, HH = 1920;
  // ======================= WHY DO WE DREAM: characters & props =======================
  const P_ = [{"s":0.25,"e":2.96,"text":"Your brain makes two hours of movies every night.","words":[["your",0.25],["brain",0.52],["makes",0.86],["two",1.2],["hours",1.4],["of",1.74],["movies",1.88],["every",2.29],["night",2.63]]},{"s":3.41,"e":5.21,"text":"So why does it even bother?","words":[["so",3.41],["why",3.58],["does",3.84],["it",4.18],["even",4.35],["bother",4.69]]},{"s":5.68,"e":8.39,"text":"Most vivid dreams happen in REM sleep,","words":[["most",5.68],["vivid",6.03],["dreams",6.47],["happen",6.99],["in",7.51],["rem",7.69],["sleep",7.95]]},{"s":8.96,"e":11.54,"text":"when your eyes dart around under your eyelids.","words":[["when",8.96],["your",9.23],["eyes",9.5],["dart",9.77],["around",10.04],["under",10.45],["your",10.79],["eyelids",11.06]]},{"s":11.91,"e":14.06,"text":"Your brain's emotion center fires up,","words":[["your",11.91],["brains",12.19],["emotion",12.62],["center",13.12],["fires",13.55],["up",13.91]]},{"s":14.54,"e":16.97,"text":"while the part that checks logic goes quiet.","words":[["while",14.54],["the",14.87],["part",15.08],["that",15.35],["checks",15.62],["logic",16.02],["goes",16.36],["quiet",16.63]]},{"s":17.43,"e":21.33,"text":"That's why riding a giant cat to school feels totally normal.","words":[["thats",17.43],["why",17.82],["riding",18.06],["a",18.54],["giant",18.62],["cat",19.02],["to",19.26],["school",19.42],["feels",19.89],["totally",20.29],["normal",20.85]]},{"s":21.69,"e":22.95,"text":"Now the weird part.","words":[["now",21.69],["the",21.94],["weird",22.19],["part",22.61]]},{"s":23.34,"e":28.18,"text":"In 2000, Harvard scientists had people play Tetris for three days.","words":[["in",23.34],["2000",23.52],["harvard",23.88],["scientists",24.51],["had",25.4],["people",25.67],["play",26.21],["tetris",26.57],["for",27.11],["three",27.38],["days",27.83]]},{"s":28.56,"e":31.62,"text":"At night, most saw falling blocks as they drifted off.","words":[["at",28.56],["night",28.7],["most",29.06],["saw",29.34],["falling",29.55],["blocks",30.05],["as",30.48],["they",30.62],["drifted",30.91],["off",31.41]]},{"s":32.06,"e":33.97,"text":"Even some patients with amnesia,","words":[["even",32.06],["some",32.34],["patients",32.62],["with",33.19],["amnesia",33.47]]},{"s":34.42,"e":36.21,"text":"who couldn't remember playing at all.","words":[["who",34.42],["couldnt",34.59],["remember",35.01],["playing",35.49],["at",35.91],["all",36.03]]},{"s":36.6,"e":39.63,"text":"Scientists think sleep may replay your day to save it.","words":[["scientists",36.6],["think",37.29],["sleep",37.63],["may",37.98],["replay",38.18],["your",38.59],["day",38.87],["to",39.08],["save",39.21],["it",39.49]]},{"s":39.98,"e":42.3,"text":"So what did your brain replay last night?","words":[["so",39.98],["what",40.12],["did",40.4],["your",40.61],["brain",40.89],["replay",41.25],["last",41.67],["night",41.95]]}];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word + ' in ' + i); return f[1]; };
  const SK = { b: '#ffe3cf', s: '#f4bc98' };

  // anime kid head; o = { eyes, mouth, iris, hc, hs, cap, glasses, look, ph }
  function face(ctx, x, y, s, t, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(s, s);
    const hc = o.hc || '#3f4a82', hs = o.hs || '#2c3460';
    // back hair
    cel(ctx, ellP(0, -10, 172, 160), hc, hs, -8, -8, 5);
    const head = ellP(0, 10, 152, 140);
    cel(ctx, head, SK.b, SK.s, -12, -12, 5.5);
    // spiky anime bangs
    const bang = new Path2D();
    bang.moveTo(-160, 30); bang.bezierCurveTo(-182, -178, 182, -178, 160, 30);
    [[128, -30], [98, 8], [62, -52], [24, 0], [-14, -62], [-52, -2], [-92, -52], [-124, 4]].forEach(([a, b]) => bang.lineTo(a, b));
    bang.closePath();
    cel(ctx, bang, hc, hs, -6, -8, 5);
    shine(ctx, -70, -100, 40, 12, -0.4, 0.55);
    if (o.ahoge !== false) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 15; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(10, -138); ctx.quadraticCurveTo(40, -210, 80, -190); ctx.stroke(); ctx.strokeStyle = hc; ctx.lineWidth = 8; ctx.stroke(); ctx.restore(); }
    const ek = o.eyes || ((t + (o.ph || 0)) % 4.1 > 3.95 ? 'blink' : 'normal');
    eye(ctx, -56, 40, 30, 40, o.iris || '#7a5cd6', ek, -1, o.look || [0, 0]);
    eye(ctx, 56, 40, 30, 40, o.iris || '#7a5cd6', ek, 1, o.look || [0, 0]);
    if (o.glasses) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.stroke(ellP(-56, 40, 46, 46)); ctx.stroke(ellP(56, 40, 46, 46)); ctx.beginPath(); ctx.moveTo(-10, 36); ctx.lineTo(10, 36); ctx.stroke(); ctx.restore(); }
    blush(ctx, -96, 92, 24, 12); blush(ctx, 96, 92, 24, 12);
    mouth(ctx, 0, 104, 18, o.mouth || 'w');
    if (o.cap) { // floppy night cap
      const cp = new Path2D(); cp.moveTo(-150, -60); cp.bezierCurveTo(-120, -230, 120, -250, 230, -150); cp.bezierCurveTo(250, -60, 230, 10, 210, 40); cp.bezierCurveTo(170, -50, 120, -90, 150, -70); cp.bezierCurveTo(60, -120, -60, -110, -150, -60); cp.closePath();
      cel(ctx, cp, o.capC || C.lav, o.capS || C.lavS, -6, -8, 5);
      ctx.fillStyle = C.butter; [[-60, -150], [40, -175], [140, -140]].forEach(([a, b]) => ctx.fill(starP(a, b, 14)));
      cel(ctx, rrP(-165, -95, 330, 52, 26), C.white, C.creamS, -3, -3, 4.5);
      cel(ctx, ellP(222, 52, 34, 34), C.white, C.creamS, -4, -4, 4.5);
    }
    ctx.restore();
  }
  // bed seen from the foot, tilted 3/4; sleeper on the pillow
  function bed(ctx, x, y, s, t, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-420, -330, 840, 420, 70), o.wood || '#e2a7c0', o.woodS || '#c987a4', -10, -10, 5.5);
    ctx.save(); ctx.fillStyle = H.rgba(o.woodS || '#c987a4', 0.6); [-250, 0, 250].forEach((xx) => ctx.fill(heartP(xx, -230, 26))); ctx.restore();
    cel(ctx, rrP(-440, 40, 880, 560, 60), '#fff6e8', C.creamS, -8, -8, 5);
    cel(ctx, ellP(0, -40, 270, 120), C.white, '#e8e2f5', -10, -10, 5);
    face(ctx, 0, -80, 0.86, t, { eyes: o.eyes || 'blink', mouth: o.mouth || 'w', cap: o.cap !== false, hc: o.hc, hs: o.hs, capC: o.capC, capS: o.capS, glasses: o.glasses, ahoge: false });
    const br = Math.sin(t * 1.7) * 7;
    const bl = new Path2D(); bl.moveTo(-450, 120 + br); bl.bezierCurveTo(-200, 80 + br, 200, 80 + br, 450, 120 + br); bl.lineTo(470, 600); bl.lineTo(-470, 600); bl.closePath();
    cel(ctx, bl, o.blanket || '#b9d3fb', o.blanketS || '#8fb3ee', -10, -14, 5.5);
    ctx.save(); ctx.clip(bl); const r = H.rng(5); ctx.fillStyle = C.white;
    for (let i = 0; i < 14; i++) ctx.fill(starP(r.range(-420, 420), r.range(170, 560), r.range(12, 20), r() * 3));
    ctx.fillStyle = H.rgba(C.white, 0.8); ctx.fill(rrP(-470, 100 + br, 940, 46, 20));
    ctx.restore(); ol(ctx, bl, 5.5);
    ctx.restore();
  }
  // big dream cloud with a clipped mini scene inside
  function dreamCloud(ctx, cx, cy, s, tail, inside, fill = C.white) {
    const p = cloudP(cx, cy, s);
    union(ctx, [p], fill, 9);
    ctx.save(); ctx.clip(p); inside(); ctx.restore();
    if (tail) { union(ctx, [ellP(tail[0], tail[1], 34, 28)], fill, 5); union(ctx, [ellP(tail[2], tail[3], 20, 17)], fill, 5); }
  }
  // giant cat (faces right), running; o = { run, eyes }
  function cat(ctx, x, y, s, t, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const run = o.run == null ? 1 : o.run, CB = '#ffe2b8', CS = '#f2bd84', ST = '#f0a35e';
    // tail
    const tw = Math.sin(t * 5) * 30 * run;
    const tp = new Path2D(); tp.moveTo(-230, -20); tp.bezierCurveTo(-360, -40, -380 + tw, -200, -300 + tw, -260);
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 64; ctx.stroke(tp); ctx.strokeStyle = CB; ctx.lineWidth = 46; ctx.stroke(tp); ctx.restore();
    const leg = (lx, i, far) => { const a = Math.sin(t * 12 + i * 1.7) * 0.55 * run; ctx.save(); ctx.translate(lx, 70); ctx.rotate(a); cel(ctx, rrP(-30, -10, 60, 140, 30), far ? CS : CB, far ? '#d99f66' : CS, -4, -4, 5); ctx.fillStyle = C.white; ctx.fill(ellP(0, 124, 26, 14)); ctx.restore(); };
    leg(-150, 0, true); leg(130, 2, true);
    const body = ellP(0, 0, 260, 135);
    cel(ctx, body, CB, CS, -16, -16, 5.5);
    ctx.save(); ctx.clip(body); ctx.fillStyle = ST; [-150, -70, 10].forEach((sx) => { const sp = new Path2D(); sp.moveTo(sx - 20, -140); sp.quadraticCurveTo(sx + 25, -80, sx - 5, -40); sp.quadraticCurveTo(sx + 5, -90, sx + 25, -140); sp.closePath(); ctx.fill(sp); }); ctx.fillStyle = '#fff5e6'; ctx.fill(ellP(30, 95, 200, 60)); ctx.restore();
    leg(-110, 1, false); leg(170, 3, false);
    // head
    ctx.save(); ctx.translate(240, -110); ctx.rotate(Math.sin(t * 6) * 0.04 * run);
    [[-1, -90], [1, 70]].forEach(([d, ex]) => { const ear = roundPoly([[ex - 55, -70], [ex + 5, -190], [ex + 60, -60]], 18); cel(ctx, ear, CB, CS, -5, -5, 5); ctx.fillStyle = C.pink; ctx.fill(roundPoly([[ex - 28, -78], [ex + 5, -150], [ex + 34, -72]], 10)); });
    const hd = ellP(0, 0, 140, 120); cel(ctx, hd, CB, CS, -12, -12, 5.5);
    ctx.save(); ctx.clip(hd); ctx.fillStyle = ST; [-40, 0, 40].forEach((sx) => ctx.fill(rrP(sx - 9, -130, 18, 50, 9))); ctx.restore();
    eye(ctx, -50, 0, 30, 38, '#4fb06b', o.eyes || 'normal', -1, [0.5, 0]); eye(ctx, 52, 0, 28, 36, '#4fb06b', o.eyes || 'normal', 1, [0.5, 0]);
    blush(ctx, -82, 48, 20, 10); blush(ctx, 88, 48, 20, 10);
    ctx.fillStyle = C.pinkD; ctx.fill(roundPoly([[-12, 36], [12, 36], [0, 48]], 4)); mouth(ctx, 0, 58, 14, 'w');
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.lineCap = 'round'; [-1, 1].forEach((d) => { for (let k = 0; k < 2; k++) { ctx.beginPath(); ctx.moveTo(d * 70, 50 + k * 14); ctx.lineTo(d * 150, 40 + k * 24); ctx.stroke(); } }); ctx.restore();
    ctx.restore();
    ctx.restore();
  }
  function rider(ctx, x, y, s, t, o = {}) { // kid in pajamas riding the cat
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cat(ctx, 0, 0, 1, t, o);
    ctx.save(); ctx.translate(-20, -150);
    const arm = (d) => { ctx.save(); ctx.translate(d * 70, -40); ctx.rotate(d * (-2.3 + Math.sin(t * 8 + d) * 0.15)); cel(ctx, rrP(-24, -10, 48, 130, 24), '#c9b8ff', '#a594ec', -4, -4, 5); cel(ctx, ellP(0, 128, 26, 26), SK.b, SK.s, -3, -3, 4.5); ctx.restore(); };
    arm(-1);
    const tor = rrP(-95, -90, 190, 170, 70); cel(ctx, tor, '#c9b8ff', '#a594ec', -8, -8, 5);
    ctx.save(); ctx.clip(tor); ctx.fillStyle = C.butter; [[-40, -30], [30, 10], [-10, 50]].forEach(([a, b]) => ctx.fill(starP(a, b, 14))); ctx.restore();
    arm(1);
    face(ctx, 0, -220, 0.72, t, { eyes: o.kidEyes || 'happy', mouth: 'smile', ahoge: true });
    ctx.restore();
    ctx.restore();
  }
  // cute brain; o = { emo 0..1, logic 1 awake .. 0 asleep, eyes, mouth }
  const BRAIN = [[-150, -40, 120], [-40, -115, 130], [95, -95, 125], [175, 10, 105], [45, 45, 135], [-110, 65, 112]];
  function brain(ctx, x, y, s, t, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const ps = BRAIN.map(([a, b, r]) => ellP(a, b, r, r * 0.92));
    union(ctx, ps, '#ffbfd4', 5.5);
    ctx.save(); const all = new Path2D(); ps.forEach((p) => all.addPath(p)); ctx.clip(all);
    ctx.fillStyle = '#f497b6'; ctx.fill(ellP(60, 150, 320, 110));
    ctx.strokeStyle = '#e07aa0'; ctx.lineWidth = 7; ctx.lineCap = 'round';
    [[-210, -60, -120, -100, -90, -20], [-80, -180, -10, -120, -60, -60], [60, -170, 140, -130, 110, -50], [140, 40, 200, -10, 220, 70], [-170, 60, -100, 20, -60, 110]].forEach(([a, b, c, d, e, f]) => { ctx.beginPath(); ctx.moveTo(a, b); ctx.quadraticCurveTo(c, d, e, f); ctx.stroke(); });
    // logic lobe (front = left) dims when asleep
    const lg = o.logic == null ? 1 : o.logic;
    if (lg < 1) { ctx.fillStyle = `rgba(92,96,170,${0.42 * (1 - lg)})`; ctx.fill(ellP(-150, -40, 125, 116)); ctx.fill(ellP(-110, 60, 90, 70)); }
    ctx.restore();
    shine(ctx, -60, -190, 50, 16, -0.2, 0.75);
    // emotion center: a little heart that thumps
    const em = o.emo || 0;
    if (em > 0) { const th = 1 + Math.max(0, Math.sin(t * 9)) * 0.18 * em; ctx.save(); ctx.translate(70, 20); ctx.scale(th, th); heart(ctx, 0, 0, 46 * (0.6 + 0.4 * em), C.pinkD); ctx.restore();
      ctx.save(); ctx.strokeStyle = C.butterD; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.globalAlpha = em; for (let i = 0; i < 8; i++) { const a = i / 8 * TAU + t * 0.8, r0 = 72 + Math.sin(t * 9) * 6; ctx.beginPath(); ctx.moveTo(70 + Math.cos(a) * r0, 20 + Math.sin(a) * r0); ctx.lineTo(70 + Math.cos(a) * (r0 + 30), 20 + Math.sin(a) * (r0 + 30)); ctx.stroke(); } ctx.restore(); }
    // logic lobe nightcap when asleep
    if (lg < 0.5) { ctx.save(); ctx.translate(-170, -140); ctx.rotate(-0.35); const cp = new Path2D(); cp.moveTo(-90, 20); cp.quadraticCurveTo(-40, -120, 90, -120); cp.quadraticCurveTo(40, -60, 90, 20); cp.closePath(); cel(ctx, cp, C.lav, C.lavS, -4, -6, 5); cel(ctx, rrP(-100, 0, 200, 40, 20), C.white, C.creamS, -3, -3, 4.5); cel(ctx, ellP(95, -118, 24, 24), C.white, C.creamS, -3, -3, 4); ctx.restore();
      eye(ctx, -190, -30, 18, 22, '#7a5cd6', 'blink', -1); eye(ctx, -120, -30, 18, 22, '#7a5cd6', 'blink', 1); }
    else if (o.logicFace) { eye(ctx, -190, -30, 18, 22, '#7a5cd6', 'normal', -1, [-0.4, 0]); eye(ctx, -120, -30, 18, 22, '#7a5cd6', 'normal', 1, [-0.4, 0]); }
    if (o.face !== false) { eye(ctx, 10, 80, 26, 32, '#7a5cd6', o.eyes || 'happy', -1); eye(ctx, 120, 80, 26, 32, '#7a5cd6', o.eyes || 'happy', 1); mouth(ctx, 65, 132, 16, o.mouth || 'w'); blush(ctx, -20, 120, 20, 10); blush(ctx, 150, 120, 20, 10); }
    ctx.restore();
  }
  // generic falling-block pieces
  const PIECES = { L: [[0, 0], [0, 1], [0, 2], [1, 2]], T: [[0, 0], [1, 0], [2, 0], [1, 1]], S: [[1, 0], [2, 0], [0, 1], [1, 1]], I: [[0, 0], [0, 1], [0, 2], [0, 3]], O: [[0, 0], [1, 0], [0, 1], [1, 1]] };
  const PCOL = [[C.pink, C.pinkS], [C.mint, C.mintS], [C.butter, C.butterS], [C.sky, C.skyS], [C.lav, C.lavS]];
  function piece(ctx, x, y, cell, kind, ci, rot = 0) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    const cs = PIECES[kind], [b, s] = PCOL[ci % PCOL.length];
    cs.forEach(([i, j]) => { const p = rrP((i - 1) * cell, (j - 1.5) * cell, cell - 4, cell - 4, cell * 0.22); cel(ctx, p, b, s, -cell * 0.08, -cell * 0.08, 4); shine(ctx, (i - 1) * cell + cell * 0.3, (j - 1.5) * cell + cell * 0.28, cell * 0.14, cell * 0.08, -0.5, 0.8); });
    ctx.restore();
  }
  function rainBlocks(ctx, x0, x1, y0, y1, t, seed, n = 10, cell = 40) {
    const r = H.rng(seed), K = Object.keys(PIECES);
    for (let i = 0; i < n; i++) {
      const x = r.range(x0, x1), sp = r.range(110, 190), ph = r() * 10, kind = r.pick(K), ci = r.int(0, 4), rot = r.int(0, 3) * Math.PI / 2;
      const span = y1 - y0 + cell * 6, y = y0 - cell * 3 + ((ph * sp + q15(t) * sp) % span);
      piece(ctx, x, y, cell, kind, ci, rot);
    }
  }
  function gameConsole(ctx, x, y, s, t, rot = 0) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-170, -250, 340, 500, 60), C.lav, C.lavS, -10, -10, 5.5);
    const scr = rrP(-125, -205, 250, 240, 24); cel(ctx, scr, '#e9f7ef', '#cdebd9', -4, -4, 5);
    ctx.save(); ctx.clip(scr); rainBlocks(ctx, -100, 100, -205, 35, t * 1.4, 33, 5, 30); ctx.restore();
    cel(ctx, rrP(-110, 90, 80, 26, 8), C.plum, C.dark, 0, 0, 0); cel(ctx, rrP(-83, 63, 26, 80, 8), C.plum, C.dark, 0, 0, 0);
    cel(ctx, ellP(70, 90, 26, 26), C.pinkD, '#e05a4b', -3, -3, 4.5); cel(ctx, ellP(120, 60, 26, 26), C.butterD, C.butterS, -3, -3, 4.5);
    ctx.restore();
  }
  function bodyKid(ctx, x, y, s, t, o = {}) { // sitting kid holding a console
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-130, 60, 260, 260, 100), o.shirt || C.mint, o.shirtS || C.mintS, -8, -8, 5);
    face(ctx, 0, -110, 0.9, t, o);
    if (o.console) gameConsole(ctx, 0, 200, 0.55, t, Math.sin(t * 3) * 0.04);
    ctx.restore();
  }
  function scientist(ctx, x, y, s, t, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-130, 60, 260, 280, 100), C.white, '#dfe6ef', -8, -8, 5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(0, 70); ctx.lineTo(0, 320); ctx.stroke(); ctx.restore();
    face(ctx, 0, -110, 0.9, t, { hc: '#b9b2d9', hs: '#958cc0', glasses: true, iris: '#3f93d6', mouth: o.mouth || 'smile', eyes: o.eyes, ahoge: false });
    // clipboard
    ctx.save(); ctx.translate(120, 200); ctx.rotate(0.15); cel(ctx, rrP(-70, -90, 140, 180, 14), '#e2b48a', '#c99367', -4, -4, 5); cel(ctx, rrP(-55, -70, 110, 150, 8), C.white, C.cream, -2, -2, 4); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(-38, -40 + i * 32); ctx.lineTo(38, -40 + i * 32); ctx.stroke(); } ctx.restore();
    ctx.restore();
  }
  // ---------- scene backgrounds ----------
  function nightRoom(ctx, t, o = {}) {
    const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, o.top || '#545a9e'); g.addColorStop(1, o.bot || '#9d8fd0'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    // wallpaper dots
    ctx.fillStyle = 'rgba(255,255,255,0.08)'; for (let j = 0; j < 30; j++) for (let i = 0; i < 12; i++) ctx.fill(ellP(i * 96 + (j & 1) * 48, j * 70, 7, 7));
    // window with moon
    const wx = o.wx == null ? 810 : o.wx, wy = 520;
    cel(ctx, rrP(wx - 190, wy - 230, 380, 420, 40), '#f7e6ff', '#d9c6f0', -6, -6, 5);
    const pane = rrP(wx - 160, wy - 200, 320, 360, 26); ctx.fillStyle = '#2f3473'; ctx.fill(pane);
    ctx.save(); ctx.clip(pane); const r = H.rng(9); for (let i = 0; i < 12; i++) { const k = 0.5 + 0.5 * Math.sin(t * 2.4 + i * 1.7); sparkle(ctx, wx + r.range(-150, 150), wy + r.range(-190, 150), 7 + 6 * k, C.butter, 0, 0); }
    const moon = new Path2D(); moon.arc(wx + 40, wy - 70, 80, 0, TAU); ctx.fillStyle = C.butter; ctx.fill(moon); ctx.fillStyle = '#2f3473'; ctx.fill(ellP(wx + 75, wy - 100, 70, 70)); ctx.restore();
    ol(ctx, pane, 5); ctx.save(); ctx.strokeStyle = '#d9c6f0'; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(wx, wy - 200); ctx.lineTo(wx, wy + 160); ctx.moveTo(wx - 160, wy - 20); ctx.lineTo(wx + 160, wy - 20); ctx.stroke(); ctx.restore();
    // floor
    cel(ctx, rrP(-40, 1480, W + 80, 520, 0), o.floor || '#c79bb7', o.floorS || '#a97b9a', 0, -14, 5);
  }
  function softBg(ctx, t, base, dot, acc, kind, seed) { bg(ctx, W, HH, t, { base, dot, acc, kind }, seed); }
  function headline(ctx, s, t, t0, line, fill = C.white, y = 330, size = 132) { fitTextPop(ctx, s, 540, y, size, 980, t, t0, { line, fill }); }
  function fitTextPop(ctx, str, x, y, size, maxW, t, t0, o) {
    ctx.save(); ctx.font = `700 ${size}px ${FONT}`; const mw = ctx.measureText(str).width * 1.18 + str.length * size * 0.05; ctx.restore();
    const k = Math.min(1, maxW / mw);
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); big(ctx, str, 0, 0, size, t, t0, o); ctx.restore();
  }
  function filmStrip(ctx, x, y, wd, h, t, speed, icons) {
    ctx.save(); ctx.translate(x, y);
    const p = rrP(-wd / 2, -h / 2, wd, h, 16); cel(ctx, p, '#4a3a5e', '#3a2c4c', 0, 0, 5);
    ctx.save(); ctx.clip(p);
    const fw = h * 1.1, off = ((t * speed) % fw + fw) % fw;
    for (let i = -2; i < wd / fw + 3; i++) {
      const fx = -wd / 2 + i * fw - off;
      ctx.fillStyle = C.cream; for (let k = 0; k < 3; k++) { ctx.fill(rrP(fx + 8 + k * fw / 3, -h / 2 + 6, fw / 3 - 16, h * 0.1, 3)); ctx.fill(rrP(fx + 8 + k * fw / 3, h / 2 - 6 - h * 0.1, fw / 3 - 16, h * 0.1, 3)); }
      const fr = rrP(fx + 10, -h * 0.3, fw - 20, h * 0.6, 8); const n_ = icons.length, ic = icons[(((i + Math.floor((t * speed) / fw)) % n_) + n_) % n_];
      ctx.fillStyle = ic.bg; ctx.fill(fr); ctx.save(); ctx.clip(fr); ic.draw(ctx, fx + fw / 2, 0, h * 0.6); ctx.restore(); ol(ctx, fr, 3);
    }
    ctx.restore(); ctx.restore();
  }
  const ICONS = [
    { bg: C.sky, draw: (c, x, y, s) => { c.fillStyle = C.butterD; c.fill(ellP(x, y, s * 0.28, s * 0.28)); } },
    { bg: C.peach, draw: (c, x, y, s) => { c.fillStyle = C.pinkD; c.fill(roundPoly([[x - s * 0.35, y + s * 0.3], [x - s * 0.35, y - s * 0.05], [x, y - s * 0.35], [x + s * 0.35, y - s * 0.05], [x + s * 0.35, y + s * 0.3]], 4)); } },
    { bg: C.mint, draw: (c, x, y, s) => piece(c, x, y + s * 0.05, s * 0.2, 'T', 4) },
    { bg: C.lav, draw: (c, x, y, s) => { c.fillStyle = '#ffe2b8'; c.fill(ellP(x, y + s * 0.05, s * 0.3, s * 0.24)); c.fill(roundPoly([[x - s * 0.3, y - s * 0.05], [x - s * 0.22, y - s * 0.38], [x - s * 0.05, y - s * 0.15]], 3)); c.fill(roundPoly([[x + s * 0.3, y - s * 0.05], [x + s * 0.22, y - s * 0.38], [x + s * 0.05, y - s * 0.15]], 3)); } },
  ];
  function dreamSky(ctx, cx, cy, t, wd, h) { const g = ctx.createLinearGradient(0, cy - h / 2, 0, cy + h / 2); g.addColorStop(0, '#ffd6e7'); g.addColorStop(1, '#ffeec9'); ctx.fillStyle = g; ctx.fillRect(cx - wd / 2, cy - h / 2, wd, h); }
  function school(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-180, -160, 360, 260, 18), '#ffd0b8', '#f0ad8e', -6, -6, 5);
    cel(ctx, roundPoly([[-210, -150], [0, -300], [210, -150]], 14), C.pinkD, '#e05a4b', -5, -5, 5);
    cel(ctx, ellP(0, -190, 40, 40), C.white, C.cream, -3, -3, 4.5); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(0, -190); ctx.lineTo(0, -215); ctx.moveTo(0, -190); ctx.lineTo(18, -190); ctx.stroke();
    [-110, 110].forEach((xx) => cel(ctx, rrP(xx - 40, -110, 80, 70, 10), C.sky, C.skyS, -3, -3, 4.5));
    cel(ctx, rrP(-45, -10, 90, 110, 30), '#a46a43', '#7f4f30', -3, -3, 4.5);
    ctx.restore();
  }

  // ---------- scenes ----------
  const sceneT = [0, P_[2].s, P_[4].s, P_[6].s, P_[7].s, P_[9].s, P_[10].s, P_[12].s, P_[13].s];
  const BEATS = [
    { id: 'hook', s: 0, e: P_[1].e, on: 'FULL FRAME at 0 s: moonlit bedroom, sleeping anime kid in a night cap, huge dream cloud above showing the kid riding a giant cat, BRAIN CINEMA?! at full size; 2 HRS tag on "two", film strip on "movies", WHY BOTHER? on "why"' },
    { id: 'rem', s: P_[2].s, e: P_[3].e, on: 'lilac close-up of the sleeping face: REM SLEEP on "REM", eyeballs bulge and dart under closed lids with arrows on "dart"' },
    { id: 'brain', s: P_[4].s, e: P_[5].e, on: 'mint room: cute brain character, heart emotion center thumps EMOTION: ON on "emotion"; front logic lobe dims and puts on a night cap, LOGIC: OFF on "logic"' },
    { id: 'cat', s: P_[6].s, e: P_[6].e, on: 'pastel dream sky: kid rides a giant running cat past clouds to a school, speed lines; TOTALLY NORMAL on "totally"' },
    { id: 'tetris', s: P_[7].s, e: P_[8].e, on: 'WEIRD PART with sweat, then butter lab: 2000 on "2000", HARVARD tag, scientist with clipboard, player with a block-game console on "Tetris", 3 DAYS calendar' },
    { id: 'blocks', s: P_[9].s, e: P_[9].e, on: 'night room: player asleep, dream cloud raining falling blocks; FALLING BLOCKS on "falling", MOST PLAYERS tag' },
    { id: 'amnesia', s: P_[10].s, e: P_[11].e, on: 'pale blue: patient asleep with block dream; AMNESIA on "amnesia"; memory bubble with crossed-out console and ? on "remember"; STILL SAW THEM!' },
    { id: 'replay', s: P_[12].s, e: P_[12].e, on: 'cream: brain character watching the day replay on a film strip into a memory jar; REPLAY on "replay", jar lid + SAVED! on "save"' },
    { id: 'end', s: P_[13].s, e: P_[13].e, on: 'bedroom again, kid asleep with a ? dream cloud: LAST NIGHT? then COMMENT! (loops to the hook)' },
  ];
  const DURATION = P_[P_.length - 1].e + 1.0;

  const scenes = [
    // 0 HOOK — complete at t = 0
    { s: 0, draw(ctx, t) {
      const z = 1 + t * 0.008; ctx.save(); ctx.translate(540, 1100); ctx.scale(z, z); ctx.translate(-540, -1100);
      nightRoom(ctx, t, {});
      // lamp
      cel(ctx, rrP(60, 1340, 140, 160, 20), '#ffd0b8', '#f0ad8e', -5, -5, 5); cel(ctx, roundPoly([[40, 1340], [80, 1220], [180, 1220], [220, 1340]], 14), C.butter, C.butterS, -5, -5, 5);
      bed(ctx, 540, 1430, 1.0, t, {});
      kana(ctx, 'Z', 790, 1200 - ((t * 40) % 60), 70, 0.2, 1, C.lav); kana(ctx, 'z', 860, 1110 - ((t * 40 + 30) % 60), 50, 0.3, 1, C.lav);
      const bobY = Math.sin(t * 1.4) * 10;
      dreamCloud(ctx, 540, 790 + bobY, 3.9, [470, 1180, 500, 1260], () => {
        dreamSky(ctx, 540, 790, t, 1000, 700);
        ctx.fillStyle = C.white; ctx.fill(cloudP(250 - ((t * 60) % 300), 640, 0.7)); ctx.fill(cloudP(820 - ((t * 60) % 300), 700, 0.55));
        speedLines(ctx, 900, 800, t, 0.35, 22, '255,255,255', 280);
        rider(ctx, 520, 900 + bobY + Math.abs(Math.sin(t * 6)) * -14, 0.78, t, {});
      });
      ctx.restore();
      const tw = w(0, 'two') - 0.15, mv = w(0, 'movies') - 0.15, why = w(1, 'why') - 0.15;
      if (t > mv) filmStrip(ctx, 540, 1560, 1200, 120, t, 160, ICONS);
      label(ctx, '2 HRS', 900, 470, 64, t, tw, C.butter, P_[2].s - 0.3);
      if (t < why) { ctx.save(); const sw = Math.sin(t * 3) * 0.02; ctx.translate(540, 300); ctx.rotate(sw); kText(ctx, 'BRAIN CINEMA?!', 0, 0, 120, { line: C.lavD, fill: C.butter, outer: C.plum, ow: 0.1, lw: 0.17 }); ctx.restore(); }
      else { headline(ctx, 'WHY BOTHER?', t, why, C.pinkD, C.white, 300, 132); qmark(ctx, 150, 560, 110, t, why + 0.25, 0.2); }
    } },

    // 1 REM: close-up face, eyes dart under lids
    { s: sceneT[1], draw(ctx, t) {
      softBg(ctx, t, '#ece3ff', '#dcd0fb', '#cfc0f7', 'stars', 11);
      const rem = w(2, 'rem') - 0.15, dart = w(3, 'dart') - 0.15, lid = w(3, 'eyelids') - 0.15;
      const z = 1 + H.ease.inOut(H.clamp((t - sceneT[1]) / 5.8)) * 0.12;
      ctx.save(); ctx.translate(540, 1120); ctx.scale(z, z);
      cel(ctx, ellP(0, 260, 520, 220), C.white, '#e8e2f5', -10, -10, 5);
      face(ctx, 0, 40, 2.6, t, { eyes: 'blink', mouth: 'w', cap: true, ahoge: false });
      // eyeball bulges under the lids
      if (t > dart - 0.4) { const dx = Math.sin(q15(t) * 14) * 26 * H.clamp((t - dart + 0.4) / 0.3);
        [-1, 1].forEach((d) => { ctx.save(); ctx.globalAlpha = 0.45; ctx.fillStyle = SK.s; ctx.fill(ellP(d * 146 + dx, 85, 50, 30)); ctx.restore(); shine(ctx, d * 146 + dx - 14, 70, 14, 7, -0.3, 0.8); }); }
      ctx.restore();
      if (t > dart) { const k = Math.sin(q15(t) * 14);
        dotted(ctx, [[330, 760], [180, 760]], 1, C.lavD, 8, 26, 1.2); dotted(ctx, [[750, 760], [900, 760]], 1, C.lavD, 8, 26, 1.2);
        speedLines(ctx, 540, 1100, t, 0.18, 26, '255,255,255', 520); label(ctx, 'EYES DART!', 540, 1640 - 40 + k * 0, 64, t, dart, C.butter); }
      if (t > lid) label(ctx, 'UNDER THE LIDS', 540, 610, 50, t, lid, C.pink);
      if (t > rem) { headline(ctx, 'REM SLEEP', t, rem, C.lavD, C.white, 330, 150); label(ctx, 'Rapid Eye Movement', 540, 460, 46, t, rem + 0.3, C.white); }
      else headline(ctx, 'VIVID DREAMS', t, sceneT[1] + 0.05, C.pinkD, C.butter, 330, 130);
    } },

    // 2 BRAIN: emotion on, logic off
    { s: sceneT[2], draw(ctx, t) {
      softBg(ctx, t, '#e4f7ec', '#cdeedb', '#b9e5c9', 'hearts', 21);
      const emo = w(4, 'emotion') - 0.15, fire = w(4, 'fires') - 0.15, lg = w(5, 'logic') - 0.15, qu = w(5, 'quiet') - 0.15;
      const eOn = H.clamp((t - fire) / 0.3), lOff = 1 - H.clamp((t - qu) / 0.4);
      const bp = squash(t, fire, 0.12);
      ctx.save(); ctx.translate(540, 1080 + bob(t, 0, 10)); ctx.scale(bp[0], bp[1]); brain(ctx, 0, 0, 1.75, t, { emo: t > emo ? Math.max(0.35, eOn) : 0, logic: lOff, logicFace: t < qu, eyes: t > fire ? 'happy' : 'normal', mouth: t > fire ? 'smile' : 'w' }); ctx.restore();
      if (t > emo) { dotted(ctx, bez([820, 1460], [860, 1380], [760, 1280], [700, 1170]), H.clamp((t - emo) / 0.4), C.pinkD, 7, 24, 1); label(ctx, 'EMOTION: ON', 790, 1530, 62, t, emo, C.pink); }
      if (t > lg) { dotted(ctx, bez([280, 640], [220, 720], [240, 800], [260, 880]), H.clamp((t - lg) / 0.4), C.lavD, 7, 24, 1); label(ctx, 'LOGIC: OFF', 300, 580, 62, t, lg, C.lav); }
      if (t > qu) kana(ctx, 'Z', 120, 820 - ((t * 40) % 60), 70, -0.2, pop(t, qu).s, C.lav);
      headline(ctx, 'YOUR DREAMING BRAIN', t, sceneT[2] + 0.05, C.mintD, C.white, 300, 110);
    } },

    // 3 CAT RIDE: dream logic
    { s: sceneT[3], draw(ctx, t) {
      const u = t - sceneT[3];
      const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#ffc9de'); g.addColorStop(0.6, '#ffe4c4'); g.addColorStop(1, '#ffd9a8'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
      ctx.fillStyle = C.white; for (let i = 0; i < 5; i++) { const x = ((i * 300 - u * 220) % 1500 + 1500) % 1500 - 200; ctx.fill(cloudP(x, 560 + (i % 3) * 140, 0.9 + (i % 2) * 0.4)); }
      // rolling pastel hills scroll left (camera tracks the cat)
      [['#c4ecd3', '#9fd9b5', 1450, 0.5], ['#a9e0bf', '#86c9a0', 1560, 0.9]].forEach(([b, s_, yy, sp]) => { const hp = new Path2D(); hp.moveTo(-20, HH); for (let x = -20; x <= W + 20; x += 20) hp.lineTo(x, yy + Math.sin((x + u * 400 * sp) * 0.006) * 50); hp.lineTo(W + 20, HH); hp.closePath(); cel(ctx, hp, b, s_, 0, -10, 5); });
      const sc = w(6, 'school') - 0.15, tot = w(6, 'totally') - 0.15, ct = w(6, 'cat') - 0.15;
      if (t > sc) { const sx = H.lerp(1300, 860, H.ease.out(H.clamp((t - sc) / 0.6))); school(ctx, sx, 1420, 0.95); }
      speedLines(ctx, 900, 1150, t, 0.3, 30, '255,255,255', 400);
      rider(ctx, 430, 1230 + Math.abs(Math.sin(t * 6)) * -24, 1.05, t, { kidEyes: t > tot ? 'star' : 'happy' });
      if (t > ct) for (let i = 0; i < 4; i++) sparkle(ctx, 200 + i * 170, 760 + (i % 2) * 60, 26 * pop(t, ct + i * 0.06).s, i % 2 ? C.butter : C.white, t, 4);
      if (t > tot) { label(ctx, 'TOTALLY NORMAL!', 540, 1690 - 60, 62, t, tot, C.mint); confetti(ctx, t, tot, 540, 900, 24, 31); }
      headline(ctx, 'DREAM LOGIC', t, sceneT[3] + 0.05, C.pinkD, C.butter, 330, 140);
    } },

    // 4 WEIRD PART -> Harvard, 2000, Tetris
    { s: sceneT[4], draw(ctx, t) {
      const lab = P_[8].s - 0.15;
      if (t < lab) {
        softBg(ctx, t, '#fff0dc', '#fbe0bb', '#f6d39c', 'stars', 41);
        brain(ctx, 540, 1100, 1.5, t, { emo: 0, logic: 1, eyes: 'shock', mouth: 'O', logicFace: false });
        sweat(ctx, 900, 820, 1.4); sweat(ctx, 190, 900, 1.1, -0.3);
        impactLines(ctx, 540, 1100, 420, t, sceneT[4] + 0.05, 12, C.plum);
        headline(ctx, 'NOW THE WEIRD PART', t, sceneT[4] + 0.02, C.pinkD, C.white, 360, 110);
        return;
      }
      softBg(ctx, t, '#fff6d6', '#fbeab0', '#f6dc8a', 'dots', 43);
      const n2 = w(8, '2000') - 0.15, hv = w(8, 'harvard') - 0.15, te = w(8, 'tetris') - 0.15, dy = w(8, 'three') - 0.15;
      cel(ctx, rrP(-40, 1440, W + 80, 600, 0), '#e8cfae', '#d2b48c', 0, -12, 5);
      cel(ctx, rrP(80, 1360, 920, 90, 20), '#c98a5c', '#a46a43', -5, -5, 5);
      scientist(ctx, 260, 1060, 0.95, t, { mouth: 'smile' });
      bodyKid(ctx, 760, 1080, 0.95, t, { hc: '#e98a5a', hs: '#c86b40', iris: '#3f9a7a', console: t > te, eyes: t > te ? 'normal' : 'happy', mouth: 'smile', look: [0, 0.8], shirt: C.sky, shirtS: C.skyS });
      label(ctx, 'HARVARD', 260, 1560, 58, t, hv, C.pink);
      if (t > te) { label(ctx, 'TETRIS', 760, 1560, 58, t, te + 0.1, C.mint); for (let i = 0; i < 3; i++) sparkle(ctx, 620 + i * 140, 1200 - (i % 2) * 60, 24 * pop(t, te + i * 0.06).s, C.butter, 0, 3.5); }
      if (t > dy) { const cp = pop(t, dy); ctx.save(); ctx.translate(880, 660); ctx.scale(cp.sx, cp.sy); ctx.rotate(0.08); cel(ctx, rrP(-110, -100, 220, 200, 24), C.white, C.cream, -5, -5, 5); cel(ctx, rrP(-110, -100, 220, 60, 24), C.pinkD, '#e05a4b', -4, -4, 5); kText(ctx, '3', 0, 85, 120, { line: C.pinkD, fill: C.white, shadow: false, lw: 0.12 }); ctx.restore(); label(ctx, 'DAYS', 880, 810, 50, t, dy + 0.1, C.butter); }
      numPop(ctx, '2000', 540, 360, 200, t, n2, { line: C.butterD, fill: C.white });
    } },

    // 5 FALLING BLOCKS dream
    { s: sceneT[5], draw(ctx, t) {
      nightRoom(ctx, t, { top: '#4a4f92', bot: '#8a7fc4', floor: '#b48fb0', floorS: '#97738f', wx: 200 });
      const ms = w(9, 'most') - 0.15, fa = w(9, 'falling') - 0.15, dr = w(9, 'drifted') - 0.15;
      bed(ctx, 540, 1470, 0.95, t, { hc: '#e98a5a', hs: '#c86b40', blanket: '#ffd0b8', blanketS: '#f0ad8e', capC: C.mint, capS: C.mintS });
      dreamCloud(ctx, 560, 820, 3.7, [500, 1200, 530, 1280], () => {
        const g = ctx.createLinearGradient(0, 500, 0, 1100); g.addColorStop(0, '#d9ecff'); g.addColorStop(1, '#efe4ff'); ctx.fillStyle = g; ctx.fillRect(100, 450, 900, 750);
        rainBlocks(ctx, 200, 900, 520, 1100, t * (t > fa ? 1.6 : 0.9), 77, 12, 52);
      });
      if (t > dr) { kana(ctx, 'Z', 840, 1240 - ((t * 40) % 60), 70, 0.2, pop(t, dr).s, C.lav); kana(ctx, 'z', 900, 1160 - ((t * 40 + 30) % 60), 50, 0.3, pop(t, dr + 0.1).s, C.lav); }
      label(ctx, 'MOST PLAYERS', 300, 1630, 56, t, ms, C.butter);
      headline(ctx, t > fa ? 'FALLING BLOCKS' : 'AT NIGHT...', t, t > fa ? fa : sceneT[5] + 0.03, C.skyD, C.white, 320, 130);
    } },

    // 6 AMNESIA
    { s: sceneT[6], draw(ctx, t) {
      softBg(ctx, t, '#dff0fb', '#c9e5f7', '#b6dbf3', 'dots', 61);
      const am = w(10, 'amnesia') - 0.15, rm = w(11, 'remember') - 0.15, al = w(11, 'all') - 0.15;
      bed(ctx, 540, 1480, 0.9, t, { hc: '#b9b2d9', hs: '#958cc0', glasses: true, wood: '#a8d8c4', woodS: '#84bfa6', blanket: '#e6dcff', blanketS: '#c6b8f2', capC: C.sky, capS: C.skyS });
      dreamCloud(ctx, 700, 960, 2.4, [620, 1230, 600, 1290], () => { ctx.fillStyle = '#efe4ff'; ctx.fillRect(400, 700, 600, 500); rainBlocks(ctx, 520, 880, 760, 1160, t * 1.4, 91, 7, 40); });
      if (t > rm) { const bp = pop(t, rm); ctx.save(); ctx.translate(290, 760); ctx.scale(bp.sx, bp.sy); union(ctx, [cloudP(0, 0, 1.5)], C.white, 5); gameConsole(ctx, 0, 0, 0.36, t); ctx.strokeStyle = C.red; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-90, -100); ctx.lineTo(90, 100); ctx.moveTo(90, -100); ctx.lineTo(-90, 100); ctx.stroke(); ctx.restore(); qmark(ctx, 150, 560, 110, t, rm + 0.2, 0.4); qmark(ctx, 430, 560, 90, t, rm + 0.3, 1.4); }
      if (t > al) label(ctx, 'STILL SAW THEM!', 700, 640, 58, t, al, C.butter);
      headline(ctx, t > am ? 'AMNESIA' : 'EVEN THEM', t, t > am ? am : sceneT[6] + 0.03, C.skyD, C.white, 330, 150);
    } },

    // 7 REPLAY -> SAVE
    { s: sceneT[7], draw(ctx, t) {
      softBg(ctx, t, '#fff4e4', '#fbe6c8', '#f6d8ab', 'stars', 71);
      const sc_ = sceneT[7] + 0.05, rp = w(12, 'replay') - 0.15, sv = w(12, 'save') - 0.15;
      label(ctx, 'SCIENTISTS THINK...', 540, 470, 50, t, sc_, C.white);
      filmStrip(ctx, 540, 1480, 1300, 150, t, t > rp ? -260 : 60, ICONS);
      brain(ctx, 360, 1030, 1.05, t, { emo: 0.4, logic: 0.7, eyes: 'normal', mouth: 'smile', face: true });
      // memory jar
      const jx = 820, jy = 1050, jar = rrP(jx - 130, jy - 150, 260, 300, 60);
      ctx.save(); ctx.fillStyle = 'rgba(203,233,251,0.7)'; ctx.fill(jar); ctx.restore();
      ctx.save(); ctx.clip(jar); const fill = H.clamp((t - rp) / 1.4); for (let i = 0; i < Math.floor(fill * 6); i++) ICONS[i % 4].draw(ctx, jx - 60 + (i % 3) * 60, jy + 110 - Math.floor(i / 3) * 80, 140); ctx.restore();
      ol(ctx, jar, 5); shine(ctx, jx - 80, jy - 80, 14, 50, 0, 0.7);
      const lid = H.ease.out(H.clamp((t - sv) / 0.35)); cel(ctx, rrP(jx - 150, jy - 190 - (1 - lid) * 120, 300, 54, 20), C.pinkD, '#e05a4b', -4, -4, 5);
      if (t > rp) { dotted(ctx, bez([500, 1000], [600, 900], [680, 900], [700, 960]), H.clamp((t - rp) / 0.5), C.lavD, 7, 24, 1); dotted(ctx, arcPts(360, 740, 70, -0.3, Math.PI * 1.6, 40), 1, C.lavD, 8, 22, 1.1); }
      if (t > sv) { label(ctx, 'SAVED!', jx, 820, 62, t, sv + 0.15, C.mint); for (let i = 0; i < 5; i++) sparkle(ctx, jx + Math.cos(i * 1.26) * 200, jy + Math.sin(i * 1.26) * 200, 26 * pop(t, sv + 0.2 + i * 0.05).s, i % 2 ? C.butter : C.white, 0, 4); }
      headline(ctx, t > sv ? 'REPLAY = SAVE' : 'REPLAY', t, t > sv ? sv : rp, C.lavD, C.butter, 320, 140);
    } },

    // 8 END: loops to the hook
    { s: sceneT[8], draw(ctx, t) {
      nightRoom(ctx, t, { top: '#5a5aa4', bot: '#a596d6', wx: 820 });
      const lt = w(13, 'last') - 0.15, nt = w(13, 'night') + 0.1, wh = w(13, 'what') - 0.15;
      bed(ctx, 540, 1430, 1.0, t, { eyes: t > nt ? 'happy' : 'blink', mouth: 'smile' });
      dreamCloud(ctx, 540, 800, 3.6, [470, 1180, 500, 1260], () => { dreamSky(ctx, 540, 800, t, 1000, 700); filmStrip(ctx, 540, 830, 1100, 170, t, -140, ICONS); });
      qmark(ctx, 170, 600, 120, t, wh + 0.1, 0.3); qmark(ctx, 920, 560, 100, t, wh + 0.25, 1.2);
      headline(ctx, t > nt ? 'COMMENT!' : (t > lt ? 'LAST NIGHT?' : 'YOUR DREAM?'), t, t > nt ? nt : (t > lt ? lt : wh), C.lavD, C.butter, 320, 140);
      if (t > nt + 0.05) confetti(ctx, t, nt + 0.05, 540, 900, 30, 93);
    } },
  ];

  function bubbleWipe(ctx, u, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), R = 2000 * e * e + 4, p = ellP(cx, cy, R, R);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = C.lav; ctx.lineWidth = 24; ctx.stroke(p); ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.stroke(p); ctx.restore();
  }
  const SHAPES = ['bubble', 'heart', 'star', 'bubble', 'star', 'bubble', 'heart', 'star'];
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
  function thumbnail(ctx) { scenes[0].draw(ctx, 1.0); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.38, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.38, 3000]], q: 0.9, gain: 0.26, a: 0.07 }); k.play('sparkle', c.t, { n: 4, gain: 0.3 }); });
    // hook
    k.play('whoosh', 0.02, { dur: 0.8, gain: 0.22 }); pop_(0.05, 650, 0.6, 0, false); k.play('sparkle', 0.08, { n: 5, gain: 0.3 });
    pop_(w(0, 'two') - 0.15, 800, 0.7, 0.4, false); k.play('swish', w(0, 'movies') - 0.15, { gain: 0.25 });
    for (let i = 0; i < 6; i++) k.play('tick', w(0, 'movies') + i * 0.12, { f: 1400, gain: 0.12, minor: true });
    big_(w(1, 'why') - 0.15, 'G5');
    // rem
    big_(w(2, 'rem') - 0.15, 'E6'); for (let i = 0; i < 6; i++) k.play('swish', w(3, 'dart') - 0.15 + i * 0.22, { gain: 0.12, minor: true });
    pop_(w(3, 'eyelids') - 0.15, 700, 0.5, -0.3, false);
    // brain
    big_(P_[4].s - 0.1, 'C6'); k.play('powerup', w(4, 'fires') - 0.2, { gain: 0.3 }); for (let i = 0; i < 4; i++) k.tone(w(4, 'fires') + i * 0.5, { f: 90, type: 'sine', dur: 0.18, gain: 0.25, a: 0.005, hold: 0.04, minor: true });
    pop_(w(5, 'logic') - 0.15, 600, 0.6, -0.4, false); k.tone(w(5, 'quiet') - 0.1, { f: [[0, 520], [0.6, 140]], type: 'sine', dur: 0.6, gain: 0.16, a: 0.01, hold: 0.3 });
    // cat
    k.play('whoosh', P_[6].s - 0.1, { dur: 0.7, gain: 0.25 }); k.play('sparkle', w(6, 'cat') - 0.1, { n: 5, gain: 0.35 }); pop_(w(6, 'school') - 0.15, 900, 0.5, 0.4, false);
    k.play('success', w(6, 'totally') - 0.1, { f: 'C6', gain: 0.4 });
    // weird + lab
    k.play('error', P_[7].s - 0.05, { f: 'A3', gain: 0.25 }); pop_(P_[7].s, 500, 0.6, 0, false);
    k.play('stamp', w(8, '2000') - 0.15, { gain: 0.45 }); big_(w(8, '2000') - 0.1, 'G5'); pop_(w(8, 'harvard') - 0.15, 700, 0.6, -0.4, false);
    k.play('powerup', w(8, 'tetris') - 0.2, { gain: 0.3 }); pop_(w(8, 'three') - 0.15, 900, 0.6, 0.4, false);
    // blocks
    big_(w(9, 'falling') - 0.15, 'E6'); for (let i = 0; i < 6; i++) k.play('tick', w(9, 'falling') + i * 0.25, { f: 900 + (i % 3) * 200, gain: 0.15, minor: true });
    pop_(w(9, 'most') - 0.15, 700, 0.5, -0.4, false);
    // amnesia
    big_(w(10, 'amnesia') - 0.15, 'A5'); k.play('error', w(11, 'remember') - 0.15, { f: 'C4', gain: 0.25 }); k.play('success', w(11, 'all') - 0.1, { f: 'E6', gain: 0.35 });
    // replay
    k.play('riser', w(12, 'replay') - 0.3, { dur: 0.6, gain: 0.15 }); big_(w(12, 'replay') - 0.1, 'G5'); k.play('click', w(12, 'save') + 0.1, { gain: 0.55 }); k.play('sparkle', w(12, 'save') + 0.2, { n: 6, gain: 0.4 });
    // end
    big_(P_[13].s - 0.1, 'E6'); k.play('success', w(13, 'night') + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(13, 'night') + 0.15, { n: 8, gain: 0.55 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
