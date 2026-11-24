// ===== Kawaii Anime, vertical: "How does a clam eat through wood?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || "") + "";
  const TAU = Math.PI * 2;
  const C = {
    plum: '#5a3659', dark: '#3b2342',
    pink: '#ffbfd2', pinkS: '#f597b7', pinkD: '#ff6f9c',
    mint: '#bff0dc', mintS: '#86d6b9', mintD: '#3fb98e',
    butter: '#fff0a6', butterS: '#f5d06a', butterD: '#ffd84d',
    lav: '#ded2ff', lavS: '#b7a2f2', lavD: '#8f74e6',
    sky: '#c6e7ff', skyS: '#8cc6f2', skyD: '#5aa9ea',
    cream: '#fffaf4', creamS: '#e4d8f6',
    peach: '#ffe2cf', peachS: '#f2b996', brown: '#dca07a', brownS: '#b97b5a',
    red: '#ff6b8a', white: '#ffffff',
  };
  const TH = {
    pink: { base: '#ffe7ef', dot: '#ffd3e1', acc: '#fff3b0', kind: 'dots' },
    mint: { base: '#ddf6ec', dot: '#c4ecdb', acc: '#fff1a0', kind: 'stars' },
    lav: { base: '#efe8ff', dot: '#e0d4ff', acc: '#ffd0e0', kind: 'clouds' },
    butter: { base: '#fff6d8', dot: '#ffeab0', acc: '#ffc4d6', kind: 'hearts' },
  };
  const FONT = '"Fredoka"', KANA = '"Zen Maru Gothic"';
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
    if (o.shadow !== false) { ctx.shadowColor = o.shadow || 'rgba(90,54,89,0.32)'; ctx.shadowBlur = size * 0.12; ctx.shadowOffsetY = size * 0.07; }
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
  const P_ = [{"s":0.25,"e":2.14,"text":"This clam can eat your wooden boat,","words":[["this",0.25],["clam",0.52],["can",0.79],["eat",0.99],["your",1.19],["wooden",1.46],["boat",1.87]]},{"s":2.58,"e":3.88,"text":"and you'd never guess how.","words":[["and",2.58],["youd",2.78],["never",3.04],["guess",3.36],["how",3.69]]},{"s":4.28,"e":5.58,"text":"It's called a shipworm.","words":[["its",4.28],["called",4.49],["a",4.93],["shipworm",5.0]]},{"s":5.94,"e":8.26,"text":"It looks like a worm, but it's really a clam.","words":[["it",5.94],["looks",6.08],["like",6.43],["a",6.71],["worm",6.78],["but",7.06],["its",7.27],["really",7.48],["a",7.91],["clam",7.98]]},{"s":8.65,"e":11.02,"text":"Its shell? Just two tiny plates on its head.","words":[["its",8.65],["shell",8.86],["just",9.21],["two",9.49],["tiny",9.7],["plates",9.98],["on",10.4],["its",10.53],["head",10.74]]},{"s":11.45,"e":13.45,"text":"It grinds them into wood like a rasp","words":[["it",11.45],["grinds",11.59],["them",12.0],["into",12.28],["wood",12.55],["like",12.83],["a",13.1],["rasp",13.17]]},{"s":13.81,"e":15.66,"text":"and tunnels deeper as it grows.","words":[["and",13.81],["tunnels",14.03],["deeper",14.55],["as",14.99],["it",15.14],["grows",15.29]]},{"s":16.12,"e":18.24,"text":"The sawdust goes straight to its stomach.","words":[["the",16.12],["sawdust",16.31],["goes",16.74],["straight",16.99],["to",17.49],["its",17.62],["stomach",17.81]]},{"s":18.65,"e":19.91,"text":"But there's a problem.","words":[["but",18.65],["theres",18.87],["a",19.32],["problem",19.39]]},{"s":20.27,"e":22.31,"text":"Wood is really hard to digest.","words":[["wood",20.27],["is",20.61],["really",20.78],["hard",21.29],["to",21.63],["digest",21.8]]},{"s":22.78,"e":25.18,"text":"So the shipworm keeps helpers in its gills.","words":[["so",22.78],["the",22.92],["shipworm",23.12],["keeps",23.67],["helpers",24.01],["in",24.49],["its",24.63],["gills",24.84]]},{"s":25.56,"e":28.1,"text":"Bacteria that make wood-melting enzymes.","words":[["bacteria",25.56],["that",26.16],["make",26.46],["woodmelting",26.76],["enzymes",27.57]]},{"s":28.47,"e":30.58,"text":"They send those enzymes down to the gut,","words":[["they",28.47],["send",28.73],["those",28.99],["enzymes",29.32],["down",29.79],["to",30.05],["the",30.18],["gut",30.38]]},{"s":31.1,"e":33.3,"text":"and the clam turns timber into food.","words":[["and",31.1],["the",31.33],["clam",31.55],["turns",31.86],["timber",32.24],["into",32.69],["food",33.0]]},{"s":33.69,"e":36.23,"text":"Its tail stays at the hole, breathing seawater.","words":[["its",33.69],["tail",33.89],["stays",34.16],["at",34.49],["the",34.63],["hole",34.83],["breathing",35.1],["seawater",35.7]]},{"s":36.7,"e":39.78,"text":"That's how shipworms chewed through wooden ships for centuries.","words":[["thats",36.7],["how",36.99],["shipworms",37.16],["chewed",37.69],["through",38.03],["wooden",38.44],["ships",38.79],["for",39.08],["centuries",39.25]]},{"s":40.25,"e":42.5,"text":"Sailors called them the termites of the sea.","words":[["sailors",40.25],["called",40.69],["them",41.06],["the",41.31],["termites",41.5],["of",42.0],["the",42.12],["sea",42.31]]},{"s":42.86,"e":45.11,"text":"So which would you rather find in your boat?","words":[["so",42.86],["which",42.99],["would",43.31],["you",43.63],["rather",43.82],["find",44.21],["in",44.47],["your",44.6],["boat",44.86]]},{"s":45.61,"e":47.25,"text":"Termites, or a hungry clam?","words":[["termites",45.61],["or",46.24],["a",46.39],["hungry",46.47],["clam",46.94]]}];

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e, on: 'chibi shipworm pokes out of a little wooden boat, IT EATS BOATS, HOW?!' },
    { id: 'name', s: P_[2].s, e: P_[3].e, on: 'SHIPWORM, worm? X -> CLAM! (two-shell clam icon)' },
    { id: 'shell', s: P_[4].s, e: P_[4].e, on: 'head close-up, big 2, TINY SHELLS on the front' },
    { id: 'rasp', s: P_[5].s, e: P_[6].e, on: 'pull back into a wood block: plates grind, chips fly, RASP, tunnel grows DEEPER' },
    { id: 'stomach', s: P_[7].s, e: P_[9].e, on: 'x-ray body: sawdust flows to STOMACH; BUT... swirl eyes, TOO TOUGH!' },
    { id: 'gills', s: P_[10].s, e: P_[13].e, on: 'GILLS, magnifier: BACTERIA, ENZYMES travel down the GUT, wood -> FOOD!' },
    { id: 'tail', s: P_[14].s, e: P_[14].e, on: 'log cutaway: tail at the HOLE, two tubes, bubbles, SEAWATER' },
    { id: 'ships', s: P_[15].s, e: P_[16].e, on: 'old ship full of holes sinks a bit, CENTURIES, TERMITES OF THE SEA' },
    { id: 'end', s: P_[17].s, e: P_[18].e, on: 'termite VS shipworm, WHICH ONE?, comment question' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter, out) => { let p = pop(t, t0); if (p.s <= 0) return; if (out != null) { const k = popOut(t, out); if (k <= 0) return; p = { s: p.s * k, sx: p.sx * k, sy: p.sy * k }; } ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));
  function qmark(ctx, x, y, sz, t, t0, ph = 0) {
    const p = pop(t, t0, 1.4); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + ph)); ctx.scale(p.sx, p.sy);
    kText(ctx, '?', 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore();
  }
  function arrow(ctx, x0, y0, x1, y1, col, prog) {
    if (prog <= 0) return;
    const pts = [[x0, y0], [H.lerp(x0, x1, 0.5), H.lerp(y0, y1, 0.5)], [x1, y1]];
    dotted(ctx, pts, prog, col, 9, 30, 1.4);
  }
  TH.sky = { base: '#e3f3ff', dot: '#cfe8fb', acc: '#fff1a0', kind: 'stars' };

  // ---------- palette for this film ----------
  const BODY = { b: '#ffe6dc', s: '#f4b9a8', ring: '#eaa592' };
  const PLATE = { b: '#fff0a6', s: '#f5d06a', ridge: '#d9a640' };
  const WOOD = { b: '#e8b27e', s: '#c98b58', grain: '#b0743f', dark: '#7a4a33', tun: '#9a6142' };
  const SEA = { a: '#9fd4f7', b: '#7cc0ef', c: '#5aa9ea' };

  // ---------- characters ----------
  // shipworm: long soft body along pts (tail first, head last), two tiny shell plates on the head
  function worm(ctx, pts, s, P = {}) {
    const bw = 64 * s, n = pts.length, t = P.t || 0;
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    // siphons at the tail
    const ta = Math.atan2(pts[0][1] - pts[1][1], pts[0][0] - pts[1][0]);
    if (P.siphons !== false) {
      for (const sd of [-1, 1]) {
        ctx.save(); ctx.translate(pts[0][0], pts[0][1]); ctx.rotate(ta + sd * 0.32 + Math.sin(t * 3 + sd) * 0.06);
        const tl = 70 * s * (P.siphonLen || 1);
        cel(ctx, rrP(0, -11 * s, tl, 22 * s, 11 * s), BODY.b, BODY.s, -2, -2, 4);
        ctx.fillStyle = C.pinkS; ctx.fill(ellP(tl - 6 * s, 0, 6 * s, 8 * s)); ol(ctx, ellP(tl - 6 * s, 0, 6 * s, 8 * s), 3);
        ctx.restore();
      }
    }
    const path = new Path2D(); path.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < n; i++) path.lineTo(pts[i][0], pts[i][1]);
    ctx.lineWidth = bw + 12; ctx.strokeStyle = C.plum; ctx.stroke(path);
    ctx.lineWidth = bw; ctx.strokeStyle = BODY.s; ctx.stroke(path);
    ctx.save(); ctx.translate(-bw * 0.1, -bw * 0.14); ctx.lineWidth = bw * 0.7; ctx.strokeStyle = BODY.b; ctx.stroke(path); ctx.restore();
    // soft rings
    const L = plen(pts);
    ctx.strokeStyle = BODY.ring; ctx.lineWidth = 3.5;
    for (let d = 40 * s; d < L - 60 * s; d += 38 * s) { const [x, y, a] = along(pts, d); const nx = -Math.sin(a), ny = Math.cos(a); ctx.beginPath(); ctx.moveTo(x + nx * bw * 0.32, y + ny * bw * 0.32); ctx.lineTo(x + nx * bw * 0.44, y + ny * bw * 0.44); ctx.stroke(); }
    if (P.gut) { ctx.strokeStyle = 'rgba(245,151,183,0.9)'; ctx.lineWidth = bw * 0.16; ctx.setLineDash([]); ctx.stroke(path); }
    ctx.restore();
    if (P.inside) P.inside(L);
    // head
    const hx = pts[n - 1][0], hy = pts[n - 1][1], ha = Math.atan2(hy - pts[n - 2][1], hx - pts[n - 2][0]);
    ctx.save(); ctx.translate(hx, hy); ctx.scale(s, s);
    const sq = P.sq || [1, 1]; ctx.scale(sq[0], sq[1]);
    ctx.save(); ctx.rotate(ha);
    cel(ctx, ellP(0, 0, 60, 56), BODY.b, BODY.s, -9, -9);
    const g = P.grind || 0;
    for (const sd of [-1, 1]) {
      ctx.save(); ctx.translate(40, sd * 26); ctx.rotate(sd * (0.55 + g));
      const pl = new Path2D(); pl.ellipse(0, 0, 36, 30, 0, 0, TAU);
      cel(ctx, pl, PLATE.b, PLATE.s, -5, -5, 4.5);
      ctx.save(); ctx.clip(pl); ctx.strokeStyle = PLATE.ridge; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
      for (let r = 10; r <= 34; r += 8) { ctx.beginPath(); ctx.arc(-26, 0, r, -1.2, 1.2); ctx.stroke(); }
      ctx.restore(); shine(ctx, -8, -12, 7, 4, -0.5);
      ctx.restore();
    }
    ctx.restore();
    // face (upright)
    const ek = P.eyes || 'normal', look = P.look || [0.3, 0];
    eye(ctx, -26, -6, 15, 20, '#e8739a', ek, 1, look); eye(ctx, 8, -6, 15, 20, '#e8739a', ek, -1, look);
    blush(ctx, -42, 18, 11, 6); blush(ctx, 20, 18, 11, 6);
    mouth(ctx, -9, 22, 7, P.mouth || 'w');
    ctx.restore();
  }
  // head-led body: head at (hx,hy) facing right, body trailing left with a gentle wave
  function wormPts(hx, hy, s, L, wig, ph, t, n = 26) {
    const out = [];
    for (let i = 0; i <= n; i++) { const u = i / n; out.push([hx - L * s * (1 - u), hy + Math.sin(u * TAU * 0.9 + ph + t * 2) * wig * s * (1 - u * 0.85)]); }
    return out;
  }
  function woodBlock(ctx, x, y, w_, h_, seed = 3, r = 40) {
    const p = rrP(x, y, w_, h_, r);
    cel(ctx, p, WOOD.b, WOOD.s, -10, -10, 5);
    ctx.save(); ctx.clip(p); ctx.strokeStyle = WOOD.grain; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.globalAlpha = 0.55;
    const rr_ = H.rng(seed);
    for (let gy = y + 30; gy < y + h_; gy += 46) { ctx.beginPath(); const ph = rr_() * 6; for (let gx = x; gx <= x + w_; gx += 20) { const yy = gy + Math.sin(gx * 0.012 + ph) * 9; gx === x ? ctx.moveTo(gx, yy) : ctx.lineTo(gx, yy); } ctx.stroke(); }
    for (let k = 0; k < 3; k++) { const kx = x + rr_.range(60, w_ - 60), ky = y + rr_.range(40, h_ - 40); ctx.beginPath(); ctx.ellipse(kx, ky, 26, 12, 0, 0, TAU); ctx.stroke(); }
    ctx.restore();
  }
  function tunnel(ctx, pts, wd) {
    const path = new Path2D(); path.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) path.lineTo(pts[i][0], pts[i][1]);
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = WOOD.dark; ctx.lineWidth = wd + 10; ctx.stroke(path);
    ctx.strokeStyle = WOOD.tun; ctx.lineWidth = wd; ctx.stroke(path);
    ctx.restore();
  }
  function boat(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.tilt || 0); ctx.scale(s, s);
    const masts = P.masts || 1;
    for (let m = 0; m < masts; m++) {
      const mx = masts === 1 ? -20 : -150 + m * 260, mh = masts === 1 ? 400 : 440 - m * 60;
      cel(ctx, rrP(mx - 11, -mh, 22, mh - 40, 10), WOOD.b, WOOD.s, -3, -3, 4);
      cel(ctx, roundPoly([[mx + 22, -mh + 20], [mx + 22, -100], [mx + 230 - m * 30, -100]], 22), m ? C.mint : C.pink, m ? C.mintS : C.pinkS, -6, -6);
      cel(ctx, roundPoly([[mx + 11, -mh - 50], [mx + 11, -mh], [mx + 80, -mh - 25]], 8), C.butter, C.butterS, -2, -2, 3.5);
    }
    const hull = new Path2D();
    hull.moveTo(-330, -50); hull.lineTo(330, -50); hull.quadraticCurveTo(300, 120, 190, 150); hull.lineTo(-190, 150); hull.quadraticCurveTo(-300, 120, -330, -50); hull.closePath();
    cel(ctx, hull, WOOD.b, WOOD.s, -12, -12, 0);
    ctx.save(); ctx.clip(hull); ctx.strokeStyle = WOOD.grain; ctx.lineWidth = 4; ctx.globalAlpha = 0.6;
    for (const py of [0, 50, 100]) { ctx.beginPath(); ctx.moveTo(-340, py); ctx.lineTo(340, py); ctx.stroke(); }
    ctx.globalAlpha = 1;
    (P.holes || []).forEach(([hx, hy, hs]) => { ctx.fillStyle = WOOD.dark; ctx.fill(ellP(hx, hy, 26 * hs, 20 * hs)); });
    ctx.restore();
    ol(ctx, hull, 5);
    (P.bites || []).forEach(([bx, by, br]) => { ctx.save(); ctx.fillStyle = P.biteCol || SEA.a; ctx.fill(ellP(bx, by, br, br * 0.9)); ol(ctx, ellP(bx, by, br, br * 0.9), 4); ctx.restore(); });
    cel(ctx, rrP(-350, -70, 700, 34, 17), WOOD.s, WOOD.grain, -3, -3, 4.5);
    for (const px of masts === 1 ? [-170, 170] : [-210, 0, 210]) { cel(ctx, ellP(px, 4, 24, 24), C.sky, C.skyS, -3, -3, 4); shine(ctx, px - 8, -4, 6, 4, -0.6); }
    ctx.restore();
  }
  function sea(ctx, t, y0, alpha = 1) {
    ctx.save(); ctx.globalAlpha = alpha;
    [[SEA.a, 0, 34], [SEA.b, 70, 26], [SEA.c, 150, 20]].forEach(([c, dy, amp], i) => {
      const p = new Path2D(); p.moveTo(-20, HH + 20);
      for (let x = -20; x <= W + 20; x += 20) p.lineTo(x, y0 + dy + Math.sin(x * 0.012 + t * 2.2 + i * 1.7) * amp);
      p.lineTo(W + 20, HH + 20); p.closePath(); ctx.fillStyle = c; ctx.fill(p);
      if (i === 0) { ctx.globalAlpha = alpha; ol(ctx, p, 4.5, C.skyD); }
    });
    ctx.restore();
  }
  function bact(ctx, x, y, s, t, ph) {
    ctx.save(); ctx.translate(x, y + Math.sin(t * 4 + ph) * 8); ctx.rotate(Math.sin(t * 2 + ph) * 0.2); ctx.scale(s, s);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-42, 0);
    for (let i = 1; i <= 6; i++) ctx.lineTo(-42 - i * 9, Math.sin(t * 12 + i + ph) * 7); ctx.stroke(); ctx.restore();
    cel(ctx, rrP(-44, -26, 88, 52, 26), C.mint, C.mintS, -4, -4, 4);
    shine(ctx, -24, -12, 9, 4, -0.3);
    eye(ctx, -8, -2, 7, 9, '#3fb98e', (Math.floor(t * 1.3 + ph) % 4 === 0) ? 'happy' : 'normal', 1, [0.3, 0]); eye(ctx, 14, -2, 7, 9, '#3fb98e', (Math.floor(t * 1.3 + ph) % 4 === 0) ? 'happy' : 'normal', -1, [0.3, 0]);
    mouth(ctx, 3, 12, 4, 'w');
    ctx.restore();
  }
  function pac(ctx, x, y, r, t, ph = 0, col = C.pinkD) {
    const op = 0.15 + 0.35 * Math.abs(Math.sin(t * 9 + ph));
    const p = new Path2D(); p.moveTo(x, y); p.arc(x, y, r, op, TAU - op); p.closePath();
    cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.25)), -2, -2, 3.5);
    ctx.fillStyle = C.dark; ctx.fill(ellP(x + r * 0.1, y - r * 0.45, r * 0.13, r * 0.16));
  }
  function chunk(ctx, x, y, s, rot = 0, seed = 1) {
    const r = H.rng(seed), pts = [];
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU, rr_ = r.range(0.75, 1.1); pts.push([Math.cos(a) * 30 * rr_, Math.sin(a) * 22 * rr_]); }
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = roundPoly(pts, 6); cel(ctx, p, WOOD.b, WOOD.s, -3, -3, 3.5);
    ctx.strokeStyle = WOOD.grain; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-16, -3); ctx.lineTo(14, 2); ctx.stroke();
    ctx.restore();
  }
  function termite(ctx, x, y, s, P = {}) {
    const t = P.t || 0;
    ctx.save(); ctx.translate(x, y + bob(t, 1, 6)); ctx.scale(s, s);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 9; ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) for (const sd of [-1, 1]) { const lx = -10 + i * 22; ctx.beginPath(); ctx.moveTo(lx, 20); ctx.lineTo(lx + sd * 0 + (i - 1) * 26, 70 + Math.sin(t * 10 + i + sd) * 4); ctx.stroke(); }
    ctx.restore();
    cel(ctx, ellP(-95, 10, 85, 58), '#fff3dc', '#f0d3a2', -9, -9);
    ctx.save(); ctx.strokeStyle = '#e8c48c'; ctx.lineWidth = 4; for (const sx of [-140, -110, -80, -50]) { ctx.beginPath(); ctx.moveTo(sx, -36); ctx.quadraticCurveTo(sx + 8, 10, sx, 56); ctx.stroke(); } ctx.restore();
    cel(ctx, ellP(4, 14, 36, 32), '#fff3dc', '#f0d3a2', -4, -4);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.lineCap = 'round';
    for (const sd of [-1, 1]) { ctx.beginPath(); ctx.moveTo(90 + sd * 14, -46); ctx.quadraticCurveTo(110 + sd * 30, -110, 150 + sd * 22, -112 + Math.sin(t * 5 + sd) * 6); ctx.stroke(); }
    ctx.restore();
    cel(ctx, ellP(90, -4, 58, 52), C.brown, C.brownS, -8, -8);
    shine(ctx, 66, -32, 12, 6, -0.6);
    eye(ctx, 72, -6, 15, 20, '#7a4a33', P.eyes || 'normal', 1, [-0.2, 0]); eye(ctx, 108, -6, 15, 20, '#7a4a33', P.eyes || 'normal', -1, [-0.2, 0]);
    blush(ctx, 58, 20, 10, 6); blush(ctx, 124, 20, 10, 6);
    mouth(ctx, 90, 26, 7, P.mouth || 'w');
    ctx.restore();
  }
  function clamIcon(ctx, x, y, s, open = 0.2) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    for (const sd of [1, -1]) {
      ctx.save(); ctx.rotate(sd * open * -0.5);
      const p = new Path2D(); p.moveTo(-70, 0); p.quadraticCurveTo(-70, sd * -80, 0, sd * -84); p.quadraticCurveTo(70, sd * -80, 70, 0); p.closePath();
      cel(ctx, p, sd > 0 ? C.lav : C.lavS, C.lavS, -5, -5, 4.5);
      ctx.save(); ctx.clip(p); ctx.strokeStyle = C.lavD; ctx.lineWidth = 4; for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(i * 34, sd * -90); ctx.stroke(); } ctx.restore();
      ctx.restore();
    }
    eye(ctx, -18, -30, 9, 12, '#8f74e6', 'happy'); eye(ctx, 18, -30, 9, 12, '#8f74e6', 'happy');
    ctx.restore();
  }
  function stamp(ctx, x, y, sz, t, t0) {
    const p = pop(t, t0, 1.5); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); ctx.lineCap = 'round';
    ctx.strokeStyle = C.plum; ctx.lineWidth = sz * 0.3; ctx.beginPath(); ctx.moveTo(-sz, -sz); ctx.lineTo(sz, sz); ctx.moveTo(sz, -sz); ctx.lineTo(-sz, sz); ctx.stroke();
    ctx.strokeStyle = C.red; ctx.lineWidth = sz * 0.2; ctx.stroke(); ctx.restore();
  }
  function bubbles(ctx, x, y, t, t0, n, seed, h = 400) {
    if (t < t0) return; const r = H.rng(seed);
    for (let i = 0; i < n; i++) { const ph = r(), sp = r.range(0.35, 0.6), u = ((t - t0) * sp + ph) % 1, R = r.range(8, 18); const bx = x + r.range(-40, 40) + Math.sin(t * 3 + i) * 10, by = y - u * h; ctx.save(); ctx.globalAlpha = 1 - u * 0.7; ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.fill(ellP(bx, by, R, R)); ol(ctx, ellP(bx, by, R, R), 3, C.skyD); ctx.restore(); }
  }

  // ---------- scenes ----------
  const scenes = [
    // 0: hook - a little boat, a shipworm munching out of the hull
    { s: 0, draw(ctx, t) {
      bgV(ctx, t, TH.sky, 21);
      twinkles(ctx, W, HH, t, 11, 10, (x, y) => y > 760);
      const wl = 1240, bb = bob(t, 0, 10);
      const eat0 = w(0, 'eat') - 0.15, nb = Math.max(0, Math.min(3, Math.floor((t - eat0) / 0.45) + 1));
      const bites = [[300, -50, 46], [240, -50, 34], [330, 10, 40]].slice(0, t > eat0 ? nb : 0);
      boat(ctx, 540, wl - 60 + bb, 1.25, { bites, biteCol: TH.sky.base, tilt: Math.sin(t * 1.6) * 0.03 });
      // the worm pokes out of the bitten corner
      const pw = pop(t, w(0, 'eat') - 0.2, 1.2);
      if (pw.s > 0) {
        const hx = 540 + 330 * 1.25 + 30, hy = wl - 110 + bb;
        const chew = t > eat0 && t < P_[1].s ? Math.sin(t * 22) * 0.25 : 0;
        ctx.save(); ctx.translate(hx, hy); ctx.scale(pw.s, pw.s); ctx.translate(-hx, -hy);
        worm(ctx, [[hx - 150, hy + 40], [hx - 90, hy + 20], [hx - 40, hy + 4], [hx, hy]], 1.3, { t, siphons: false, grind: chew, eyes: t > w(1, 'how') - 0.1 ? 'normal' : (Math.sin(t * 22) > 0.6 ? 'happy' : 'normal'), mouth: t > eat0 && t < P_[1].s ? 'o' : 'smile', look: [-0.5, -0.4] });
        ctx.restore();
        // flying chips
        if (t > eat0 && t < P_[1].e) { const r = H.rng(5); for (let i = 0; i < 9; i++) { const ph = r(), u = ((t - eat0) * 1.6 + ph) % 1; chunk(ctx, hx + 20 + u * r.range(80, 200), hy - 40 - u * 260 + u * u * 300, 0.6, u * 6, i); } }
      }
      sea(ctx, t, wl, 0.82);
      big(ctx, 'IT EATS', 540, 330, 150, t, w(0, 'eat') - 0.15, { line: C.pinkD, fill: C.white });
      big(ctx, 'BOATS!', 540, 500, 170, t, w(0, 'boat') - 0.15, { line: C.skyD, fill: C.butter });
      big(ctx, 'HOW?!', 540, 700, 150, t, w(1, 'how') - 0.15, { line: C.lavD, fill: C.white });
      qmark(ctx, 150, 640, 120, t, w(1, 'guess') - 0.12, 0);
      qmark(ctx, 930, 660, 100, t, w(1, 'how') - 0.05, 1.7);
    } },

    // 1: the name, and the twist: worm? no, clam
    { s: P_[2].s, draw(ctx, t) {
      bgV(ctx, t, TH.pink, 31);
      twinkles(ctx, W, HH, t, 12, 12, (x, y) => y > 800 && y < 1400);
      const ld = pop(t, P_[2].s + 0.05, 1.0);
      const isClam = t > w(3, 'clam') - 0.12;
      if (ld.s > 0) {
        ctx.save(); ctx.translate(540, 1080); ctx.scale(ld.sx, ld.sy); ctx.translate(-540, -1080);
        worm(ctx, wormPts(820, 1050, 1.25, 640, 70, 0, t), 1.25, { t, eyes: isClam ? 'happy' : (t > w(3, 'worm') - 0.1 && t < w(3, 'but') ? 'normal' : 'normal'), look: [-0.4, 0.2], mouth: isClam ? 'smile' : 'w' });
        ctx.restore();
      }
      big(ctx, 'SHIPWORM', 540, 380, 140, t, w(2, 'shipworm') - 0.15, { line: C.pinkD, fill: C.white });
      label(ctx, 'worm?', 290, 640, 64, t, w(3, 'worm') - 0.12, C.sky);
      stamp(ctx, 290, 640, 60, t, w(3, 'but') - 0.05);
      label(ctx, 'CLAM!', 770, 640, 80, t, w(3, 'clam') - 0.15, C.mint);
      const ci = pop(t, w(3, 'really') - 0.1, 1.2);
      if (ci.s > 0) { ctx.save(); ctx.translate(540, 1480); ctx.scale(ci.sx, ci.sy); clamIcon(ctx, 0, 0, 1.2, 0.15 + Math.max(0, Math.sin(t * 4)) * 0.25); ctx.restore(); }
      if (isClam) { for (let i = 0; i < 4; i++) { const p = pop(t, w(3, 'clam') + i * 0.07); if (p.s > 0) sparkle(ctx, [620, 920, 680, 880][i], [560, 560, 730, 730][i], 26 * p.s, i % 2 ? C.white : C.butterD, 0, 3.5); } }
      confetti(ctx, t, w(3, 'clam'), 770, 640, 24, 7, 0.8);
    } },

    // 2: two tiny shells on the head -> pull back into wood, grind, tunnel deeper
    { s: P_[4].s, draw(ctx, t) {
      bgV(ctx, t, TH.butter, 41);
      const zT = P_[5].s - 0.35, u = H.ease.inOut(H.clamp((t - zT) / 0.7));
      const tip0 = 560, tip = tip0 + 280 * H.ease.inOut(H.clamp((t - w(6, 'tunnels') + 0.1) / (P_[6].e - w(6, 'tunnels'))));
      const by = 1100;
      // wood block slides in
      if (u > 0) {
        ctx.save(); ctx.globalAlpha = u; ctx.translate((1 - u) * 400, 0);
        woodBlock(ctx, -60, 860, 1200, 480, 9, 50);
        tunnel(ctx, [[-80, by], [tip - 10, by]], 104);
        ctx.restore();
      }
      const grinding = t > w(5, 'grinds') - 0.15;
      const g = grinding ? Math.sin(t * 16) * 0.32 : Math.sin(t * 3) * 0.05;
      const hs = H.lerp(2.6, 1.15, u), hx = H.lerp(540, tip, u), hy = H.lerp(1080, by, u);
      const L = H.lerp(260, (tip + 80) / 1.15, u);
      worm(ctx, wormPts(hx, hy, hs, L, H.lerp(30, 8, u), 0.5, t), hs, { t, siphons: u > 0.5, grind: g, eyes: grinding ? 'squeeze' : 'normal', mouth: grinding ? 'w' : 'o', look: [0.6, -0.3] });
      if (grinding) {
        const r = H.rng(8);
        for (let i = 0; i < 10; i++) { const ph = r(), q = ((t - w(5, 'grinds')) * 1.4 + ph) % 1; if (t - w(5, 'grinds') < ph * 0.7) continue; const ang = r.range(-1.2, 1.2); chunk(ctx, tip + 60 + Math.cos(ang) * q * 120 - q * 80, by + Math.sin(ang) * q * 140 - q * 160 + q * q * 260, 0.5, q * 7, i); }
        impactLines(ctx, tip + 70, by, 70, t, w(5, 'wood') - 0.05, 8);
      }
      // close-up labels
      const out = zT;
      { const k2 = popOut(t, zT); if (k2 > 0) { ctx.save(); ctx.translate(540, 560); ctx.scale(k2, k2); ctx.translate(-540, -560); numPop(ctx, '2', 540, 560, 260, t, w(4, 'two') - 0.15, { line: C.pinkD, fill: C.butter }); ctx.restore(); } }
      if (t < out + 0.2) {
        const k = popOut(t, out);
        if (k > 0) {
          ctx.save(); ctx.globalAlpha = k;
          label(ctx, 'TINY SHELLS', 540, 740, 64, t, w(4, 'tiny') - 0.12, C.mint);
          arrow(ctx, 760, 800, 770, 960, C.pinkD, grow(t, w(4, 'plates') - 0.1, 0.3));
          ctx.restore();
          label(ctx, 'SHELL', 250, 1450, 60, t, w(4, 'shell') - 0.12, C.butter, out);
        }
      }
      label(ctx, 'RASP!', 800, 700, 80, t, w(5, 'rasp') - 0.12, C.pink);
      big(ctx, 'GRIND', 540, 470, 150, t, w(5, 'grinds') - 0.1, { line: C.brownS, fill: C.butter });
      if (t > w(6, 'deeper') - 0.12) { arrow(ctx, 260, 1460, 820, 1460, C.pinkD, grow(t, w(6, 'deeper') - 0.12, 0.6)); label(ctx, 'DEEPER', 540, 1560, 64, t, w(6, 'deeper'), C.lav); }
    } },

    // 3: x-ray: sawdust flows to the stomach; but wood is too tough
    { s: P_[7].s, draw(ctx, t) {
      bgV(ctx, t, TH.mint, 51);
      twinkles(ctx, W, HH, t, 14, 8, (x, y) => y > 800 && y < 1300);
      const s = 1.4, pts = wormPts(900, 1050, s, 560, 22, 1.2, t * 0.5);
      const prob = t > w(8, 'problem') - 0.12;
      const stD = plen(pts) * 0.45;
      const tough = t > w(9, 'hard') - 0.12;
      worm(ctx, pts, s, { t, gut: true, eyes: prob ? 'swirl' : 'happy', mouth: prob ? 'wobble' : 'smile', look: [-0.5, 0],
        inside: (L) => {
          const [sx, sy] = along(pts, stD);
          const shake = tough ? Math.sin(t * 30) * 4 : 0;
          cel(ctx, ellP(sx + shake, sy, 72, 34), C.butter, C.butterS, -4, -4, 4);
          // sawdust stream head -> stomach
          const s0 = w(7, 'sawdust') - 0.15;
          if (t > s0) { const n = 14; for (let i = 0; i < n; i++) { const q = ((t - s0) * 0.5 + i / n) % 1; if ((t - s0) * 0.5 < i / n) continue; const d = L - q * (L - stD); const [x, y] = along(pts, d); ctx.fillStyle = WOOD.s; ctx.fill(rrP(x - 6, y - 6, 12, 12, 3)); ol(ctx, rrP(x - 6, y - 6, 12, 12, 3), 2.5); } }
          // wood piling up in the stomach
          const nC = Math.min(5, Math.max(0, Math.floor((t - s0) / 0.6)));
          for (let i = 0; i < nC; i++) chunk(ctx, sx - 40 + i * 20 + shake, sy - 4 + (i % 2) * 8, 0.55, i * 0.7, i + 3);
        } });
      label(ctx, 'SAWDUST', 840, 760, 60, t, w(7, 'sawdust') - 0.12, C.butter);
      { const [sx, sy] = along(pts, stD); arrow(ctx, sx - 120, 1420, sx - 10, sy + 60, C.pinkD, grow(t, w(7, 'stomach') - 0.12, 0.3)); label(ctx, 'STOMACH', sx - 150, 1500, 64, t, w(7, 'stomach') - 0.1, C.pink); }
      if (prob) {
        big(ctx, 'BUT...', 540, 470, 160, t, w(8, 'problem') - 0.15, { line: C.lavD, fill: C.white });
        const hp = along(pts, plen(pts));
        sweat(ctx, hp[0] + 70, hp[1] - 90, 1.3 * Math.min(1, (t - w(8, 'problem') + 0.12) * 5));
        kana(ctx, '!?', hp[0] - 20, hp[1] - 140, 90, -0.15, pop(t, w(8, 'problem')).s, C.butter);
      }
      label(ctx, 'TOO TOUGH!', 540, 650, 72, t, w(9, 'hard') - 0.12, C.red);
    } },

    // 4: gills, bacteria helpers, enzymes down the gut, wood -> food
    { s: P_[10].s, draw(ctx, t) {
      bgV(ctx, t, TH.lav, 61);
      const s = 1.4, pts = wormPts(930, 1180, s, 600, 18, 2.1, t * 0.5);
      const L = plen(pts), gD0 = L * 0.18, gD1 = L * 0.42, stD = L * 0.7;
      const food = t > w(13, 'food') - 0.12, brk = t > w(13, 'timber') - 0.12;
      const e0 = w(12, 'send') - 0.15, e1 = w(12, 'gut') - 0.05;
      worm(ctx, pts, s, { t, gut: true, eyes: food ? 'star' : 'normal', mouth: food ? 'smile' : 'w', look: [-0.6, -0.2],
        inside: () => {
          // frilly gills
          const gp = grow(t, w(10, 'helpers') - 0.6, 0.5);
          if (gp > 0) for (let d = gD0; d < H.lerp(gD0, gD1, gp); d += 16) { const [x, y, a] = along(pts, d); const nx = -Math.sin(a), ny = Math.cos(a); ctx.fillStyle = (Math.floor(d / 16) % 2) ? C.lav : C.lavS; ctx.fill(ellP(x - nx * 12, y - ny * 12, 9, 22, a)); ol(ctx, ellP(x - nx * 12, y - ny * 12, 9, 22, a), 2.5); }
          const [sx, sy] = along(pts, stD);
          cel(ctx, ellP(sx, sy, 72, 34), C.butter, C.butterS, -4, -4, 4);
          if (!brk) for (let i = 0; i < 4; i++) chunk(ctx, sx - 34 + i * 22, sy + (i % 2) * 8 - 4, 0.55, i * 0.7, i + 3);
          else if (!food) { for (let i = 0; i < 9; i++) chunk(ctx, sx - 48 + i * 12, sy + Math.sin(i * 2.1) * 12, 0.28, i, i + 9); }
          else { for (let i = 0; i < 5; i++) { const p = pop(t, w(13, 'food') - 0.12 + i * 0.05); if (p.s > 0) heart(ctx, sx - 44 + i * 22, sy + (i % 2 ? 8 : -6), 12 * p.s, i % 2 ? C.pinkD : C.red); } }
          // enzymes travel gills -> stomach
          if (t > e0 && t < w(13, 'food')) { for (let i = 0; i < 5; i++) { const q = H.clamp((t - e0 - i * 0.18) / (e1 - e0)); if (q <= 0) continue; const [x, y] = along(pts, H.lerp(gD1 - 30, stD - 40 + i * 10, q)); pac(ctx, x, y - 4, 14, t, i); } }
        } });
      // magnifier with bacteria
      const mp = pop(t, w(11, 'bacteria') - 0.3, 0.9);
      const [gx, gy] = along(pts, (gD0 + gD1) / 2);
      if (mp.s > 0) {
        dotted(ctx, [[360, 820], [H.lerp(360, gx, 0.5), H.lerp(820, gy, 0.5)], [gx, gy - 30]], mp.s, C.lavD, 7, 24, 0);
        ctx.save(); ctx.translate(360, 590); ctx.scale(mp.sx, mp.sy);
        const lens = ellP(0, 0, 230, 230);
        ctx.fillStyle = '#f6fffb'; ctx.fill(lens);
        ctx.save(); ctx.clip(lens); ctx.fillStyle = '#e4f8ef'; for (let j = 0; j < 8; j++) for (let i = 0; i < 8; i++) ctx.fill(ellP(-220 + i * 60 + (j % 2) * 30, -220 + j * 60, 6, 6));
        [[-90, -80, 0], [70, -110, 1.3], [-40, 60, 2.2], [110, 40, 3.1]].forEach(([bx, by_, ph], i) => { if (pop(t, w(11, 'bacteria') - 0.15 + i * 0.1).s > 0) bact(ctx, bx, by_, 1.15, t, ph); });
        if (t > w(11, 'enzymes') - 0.15) { for (let i = 0; i < 6; i++) { const q = ((t - w(11, 'enzymes') + 0.15) * 0.8 + i / 6) % 1; pac(ctx, -150 + q * 300, -10 + Math.sin(i * 2) * 140 * (1 - q), 14, t, i); } }
        ctx.restore();
        ol(ctx, lens, 8, C.plum); ctx.lineWidth = 0;
        ctx.save(); ctx.strokeStyle = C.lavS; ctx.lineWidth = 6; ctx.stroke(ellP(0, 0, 222, 222)); ctx.restore();
        ctx.restore();
      }
      label(ctx, 'GILLS', 300, 1430, 64, t, w(10, 'gills') - 0.12, C.lav);
      arrow(ctx, 300, 1380, gx - 30, gy + 50, C.lavD, grow(t, w(10, 'gills') - 0.1, 0.3));
      label(ctx, 'BACTERIA', 780, 400, 62, t, w(11, 'bacteria') - 0.12, C.mint, w(12, 'send') - 0.2);
      label(ctx, 'ENZYMES', 790, 520, 62, t, w(11, 'enzymes') - 0.12, C.pink);
      const [sx, sy] = along(pts, stD);
      label(ctx, 'GUT', sx, 1440, 64, t, w(12, 'gut') - 0.12, C.butter);
      arrow(ctx, sx, 1390, sx, sy + 50, C.pinkD, grow(t, w(12, 'gut') - 0.1, 0.3));
      if (food) { big(ctx, 'FOOD!', 760, 900, 130, t, w(13, 'food') - 0.12, { line: C.pinkD, fill: C.butter }); confetti(ctx, t, w(13, 'food'), sx, sy - 40, 26, 9, 0.9); }
    } },

    // 5: log cutaway: tail at the hole, two tubes in the seawater
    { s: P_[14].s, draw(ctx, t) {
      // underwater
      ctx.fillStyle = '#cfeaff'; ctx.fillRect(0, 0, W, HH);
      bgV(ctx, t, { base: '#d6efff', dot: '#c2e3fb', acc: '#e8f6ff', kind: 'dots' }, 71);
      // light rays
      ctx.save(); ctx.globalAlpha = 0.35; ctx.fillStyle = C.white; for (let i = 0; i < 4; i++) { const x = 140 + i * 260 + Math.sin(t * 0.6 + i) * 30; ctx.beginPath(); ctx.moveTo(x - 30, 0); ctx.lineTo(x + 30, 0); ctx.lineTo(x + 140, 900); ctx.lineTo(x + 40, 900); ctx.closePath(); ctx.fill(); } ctx.restore();
      const lp = pop(t, P_[14].s + 0.05, 0.8);
      ctx.save(); ctx.translate(540, 1200); ctx.scale(lp.sx || 0.001, lp.sy || 0.001); ctx.translate(-540, -1200);
      woodBlock(ctx, 40, 960, 1100, 420, 17, 60);
      const holeX = 240, tunY = 1170;
      tunnel(ctx, [[holeX, 950], [holeX + 20, 1060], [holeX + 90, tunY], [950, tunY]], 100);
      worm(ctx, [[holeX, 975], [holeX + 8, 1030], [holeX + 30, 1090], [holeX + 90, tunY], [500, tunY], [700, tunY], [930, tunY]], 1.15,
        { t, siphonLen: 1.4 + 0.15 * Math.sin(t * 3), eyes: 'happy', mouth: 'smile', grind: Math.sin(t * 10) * 0.2 });
      ctx.restore();
      label(ctx, 'TAIL', 470, 820, 64, t, w(14, 'tail') - 0.12, C.butter);
      arrow(ctx, 400, 820, holeX + 40, 900, C.pinkD, grow(t, w(14, 'tail') - 0.1, 0.3));
      label(ctx, 'HOLE', 760, 960, 60, t, w(14, 'hole') - 0.12, C.lav);
      arrow(ctx, 680, 960, holeX + 60, 960, C.lavD, grow(t, w(14, 'hole') - 0.1, 0.3));
      bubbles(ctx, holeX, 860, t, w(14, 'breathing') - 0.2, 8, 3, 520);
      big(ctx, 'SEAWATER', 540, 470, 130, t, w(14, 'seawater') - 0.15, { line: C.skyD, fill: C.white });
      label(ctx, 'IN & OUT', 540, 630, 60, t, w(14, 'breathing') - 0.1, C.sky);
    } },

    // 6: an old ship riddled with holes, termites of the sea
    { s: P_[15].s, draw(ctx, t) {
      bgV(ctx, t, TH.butter, 81);
      const wl = 1330;
      const sink = H.ease.inOut(H.clamp((t - w(15, 'through') + 0.1) / 1.4));
      const holes = [[-230, 20, 1], [-60, 80, 1.1], [120, 30, 0.9], [250, 90, 1]];
      const nH = t > w(15, 'shipworms') - 0.15 ? Math.min(4, Math.floor((t - w(15, 'shipworms') + 0.15) / 0.3) + 1) : 0;
      const sx = 540, sy = wl - 90 + bob(t, 0, 8) + sink * 60, tilt = -0.04 * sink + Math.sin(t * 1.4) * 0.02, sc = 1.25;
      boat(ctx, sx, sy, sc, { masts: 2, tilt, holes: holes.slice(0, nH) });
      // worms peeking from the holes
      for (let i = 0; i < nH; i++) {
        const [hx, hy] = holes[i], p = pop(t, w(15, 'shipworms') - 0.15 + i * 0.3, 1.2);
        const ca = Math.cos(tilt), sa = Math.sin(tilt), X = sx + (hx * ca - hy * sa) * sc, Y = sy + (hx * sa + hy * ca) * sc;
        if (p.s > 0) { ctx.save(); ctx.translate(X, Y); ctx.scale(p.s * 0.55, p.s * 0.55); worm(ctx, [[-30, 30], [-10, 10], [0, 0]], 1.0, { t, siphons: false, grind: Math.sin(t * 16 + i) * 0.3, eyes: 'happy', mouth: 'o' }); ctx.restore(); }
      }
      if (sink > 0) sweat(ctx, sx + 260, sy - 420, 1.4 * Math.min(1, sink * 3));
      sea(ctx, t, wl, 0.85);
      label(ctx, 'FOR CENTURIES', 540, 760, 64, t, w(15, 'centuries') - 0.15, C.sky, w(16, 'termites') - 0.2);
      big(ctx, 'TERMITES', 540, 380, 150, t, w(16, 'termites') - 0.15, { line: C.brownS, fill: C.butter });
      big(ctx, 'OF THE SEA', 540, 550, 120, t, w(16, 'sea') - 0.2, { line: C.skyD, fill: C.white });
    } },

    // 7: termite vs shipworm, the comment question
    { s: P_[17].s, draw(ctx, t) {
      bgV(ctx, t, TH.pink, 91);
      twinkles(ctx, W, HH, t, 19, 10, (x, y) => y > 700 && y < 1500);
      const tp = pop(t, P_[17].s + 0.05, 1.0), wp = pop(t, P_[17].s + 0.2, 1.0);
      const pick = t > w(18, 'termites') - 0.15;
      if (tp.s > 0) { ctx.save(); ctx.translate(300, 1080); ctx.scale(tp.sx, tp.sy); termite(ctx, 0, 0, 1.45, { t, eyes: t > w(18, 'termites') - 0.1 && t < w(18, 'or') + 0.2 ? 'happy' : 'normal' }); ctx.restore(); }
      if (wp.s > 0) { ctx.save(); ctx.translate(790, 1080); ctx.scale(wp.sx, wp.sy); worm(ctx, wormPts(60, 0, 1.35, 260, 50, 0, t).map(([x, y]) => [-x, y]), 1.35, { t, eyes: t > w(18, 'clam') - 0.15 ? 'happy' : 'normal', look: [-0.6, 0] }); ctx.restore(); }
      const vs = pop(t, w(17, 'which') - 0.1, 1.4);
      if (vs.s > 0) { ctx.save(); ctx.translate(540, 1230); ctx.scale(vs.sx, vs.sy); kText(ctx, 'VS', 0, 0, 130, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore(); }
      big(ctx, 'WHICH ONE', 540, 380, 130, t, w(17, 'which') - 0.15, { line: C.pinkD, fill: C.white });
      big(ctx, 'IN YOUR BOAT?', 540, 540, 100, t, w(17, 'boat') - 0.2, { line: C.skyD, fill: C.butter });
      label(ctx, 'TERMITES', 290, 1420, 60, t, w(18, 'termites') - 0.12, C.butter);
      label(ctx, 'CLAM', 800, 1420, 64, t, w(18, 'clam') - 0.12, C.mint);
      label(ctx, 'COMMENT!', 540, 1580, 56, t, P_[18].e + 0.05, C.lav);
      if (pick) qmark(ctx, 540, 1460, 110, t, w(18, 'or') - 0.1, 0.5);
    } },
  ];

  const CUTS = scenes.slice(1).map((sc, i) => { const prev = P_.filter((p) => p.e <= sc.s + 0.01).pop(); return { t: (prev.e + sc.s) / 2, shape: i % 2 ? 'heart' : 'star' }; });
  const CUTW = 0.5;

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1].draw(ctx, t); wipe(ctx, W_, H_, (t - (c.t - CUTW / 2)) / CUTW, c.shape, 540, 1100, () => scenes[i].draw(ctx, t)); }
    else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 3.6); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const crunch = (at, g = 1, minor = true) => { k.noise(at, { dur: 0.08, filter: 'bandpass', f: 1800, q: 1.2, gain: 0.3 * g, minor }); k.noise(at + 0.05, { dur: 0.06, filter: 'bandpass', f: 2600, q: 1.5, gain: 0.22 * g, minor }); };
    const rasp = (at, d, g = 1) => { for (let x = 0; x < d; x += 0.12) k.noise(at + x, { dur: 0.09, color: 'pink', filter: 'bandpass', f: 1400 + (x * 7 % 1) * 900, q: 1.6, gain: 0.16 * g, a: 0.02, minor: true }); };
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    pop_(0.1, 600, 0.6, 0, false);
    const eat0 = w(0, 'eat') - 0.15;
    for (let i = 0; i < 3; i++) crunch(eat0 + i * 0.45, 1.1, i > 0);
    big_(w(0, 'eat') - 0.12, 'G5'); pop_(w(0, 'boat') - 0.12, 800, 0.8, 0, false);
    pop_(w(1, 'guess') - 0.1, 650, 0.7, -0.4); pop_(w(1, 'how') - 0.15, 500, 0.9, 0, false); pop_(w(1, 'how') - 0.05, 780, 0.6, 0.4);
    // name
    pop_(P_[2].s + 0.05, 600, 0.7); big_(w(2, 'shipworm') - 0.12, 'C6');
    pop_(w(3, 'worm') - 0.1, 700, 0.6, -0.4); k.play('error', w(3, 'but') - 0.05, { f: 'A3', gain: 0.4 });
    pop_(w(3, 'really') - 0.1, 650); k.play('success', w(3, 'clam') - 0.1, { f: 'C6', gain: 0.45 }); k.play('sparkle', w(3, 'clam'), { n: 6, gain: 0.5 });
    // shell + grind
    pop_(w(4, 'shell') - 0.1, 700); big_(w(4, 'two') - 0.12, 'E6'); pop_(w(4, 'tiny') - 0.1, 900, 0.6, 0.3); pop_(w(4, 'plates') - 0.1, 800, 0.5, 0.3);
    k.play('whoosh', P_[5].s - 0.35, { dur: 0.6, gain: 0.4 });
    rasp(w(5, 'grinds') - 0.15, P_[6].e - w(5, 'grinds') + 0.1, 1.1);
    pop_(w(5, 'grinds') - 0.1, 600, 0.8, 0, false); k.play('stamp', w(5, 'wood') - 0.05, { gain: 0.35, pan: 0.3 }); pop_(w(5, 'rasp') - 0.1, 900, 0.8, 0.3, false);
    k.play('riser', w(6, 'tunnels') - 0.1, { dur: 1.2, gain: 0.3 }); pop_(w(6, 'deeper') - 0.05, 700, 0.7, 0, false);
    // stomach
    pop_(w(7, 'sawdust') - 0.1, 800, 0.6, 0.4);
    for (let i = 0; i < 8; i++) k.play('tick', w(7, 'sawdust') + i * 0.22, { f: 3000 + i * 120, gain: 0.3, minor: true });
    big_(w(7, 'stomach') - 0.12, 'A5');
    k.tone(w(8, 'problem') - 0.12, { f: [[0, 'E4'], [0.5, 'A3']], type: 'triangle', dur: 0.6, gain: 0.14, a: 0.02, hold: 0.2 }); pop_(w(8, 'problem') - 0.1, 500, 0.8, 0, false);
    k.play('error', w(9, 'hard') - 0.1, { f: 'G3', gain: 0.45 }); k.play('thud', w(9, 'digest') - 0.05, { f: 120, gain: 0.4 });
    // gills, bacteria, enzymes, food
    pop_(w(10, 'helpers') - 0.1, 700, 0.6, -0.3); pop_(w(10, 'gills') - 0.1, 800, 0.8, -0.3, false);
    for (let i = 0; i < 4; i++) pop_(w(11, 'bacteria') - 0.15 + i * 0.1, 900 + i * 120, 0.6, -0.4);
    big_(w(11, 'bacteria') - 0.12, 'E6');
    for (let i = 0; i < 6; i++) k.play('blip', w(11, 'enzymes') - 0.1 + i * 0.12, { f: ['C6', 'E6', 'G6'][i % 3], type: 'triangle', gain: 0.6, minor: true });
    k.play('whoosh', w(12, 'send') - 0.1, { dur: w(12, 'gut') - w(12, 'send') + 0.2, gain: 0.35 }); pop_(w(12, 'gut') - 0.1, 700, 0.8, 0, false);
    crunch(w(13, 'timber') - 0.1, 1.2, false); crunch(w(13, 'timber'), 0.9);
    k.play('success', w(13, 'food') - 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(13, 'food'), { n: 8, gain: 0.6 });
    // tail
    pop_(P_[14].s + 0.05, 500, 0.7, 0, false);
    pop_(w(14, 'tail') - 0.1, 700, 0.6, -0.4); pop_(w(14, 'hole') - 0.1, 800, 0.6, 0.3);
    for (let i = 0; i < 8; i++) k.tone(w(14, 'breathing') - 0.2 + i * 0.22, { f: [[0, 500 + (i % 3) * 140], [0.08, 1200 + (i % 3) * 200]], dur: 0.09, gain: 0.08, minor: true });
    big_(w(14, 'seawater') - 0.12, 'G6');
    // ships
    for (let i = 0; i < 4; i++) { pop_(w(15, 'shipworms') - 0.15 + i * 0.3, 600 + i * 100, 0.6, (i - 1.5) * 0.3); crunch(w(15, 'shipworms') + i * 0.3, 0.7); }
    k.play('whoosh', w(15, 'through') - 0.1, { dur: 1.2, gain: 0.3, top: 900 }); k.noise(w(15, 'through'), { dur: 1.3, color: 'brown', filter: 'lowpass', f: [[0, 600], [1.3, 200]], gain: 0.25, a: 0.3 });
    pop_(w(15, 'centuries') - 0.12, 700, 0.7, 0, false);
    k.play('impact', w(16, 'termites') - 0.12, { gain: 0.7 }); big_(w(16, 'sea') - 0.15, 'E6');
    // end
    pop_(P_[17].s + 0.05, 600, 0.7, -0.4); pop_(P_[17].s + 0.2, 750, 0.7, 0.4);
    pop_(w(17, 'which') - 0.12, 900, 0.8, 0, false); k.play('stamp', w(17, 'which') - 0.05, { gain: 0.35 }); pop_(w(17, 'boat') - 0.15, 700, 0.6);
    pop_(w(18, 'termites') - 0.1, 650, 0.8, -0.4, false); pop_(w(18, 'clam') - 0.1, 850, 0.8, 0.4, false);
    k.play('success', P_[18].e + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', P_[18].e + 0.1, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
