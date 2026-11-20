// ===== Kawaii Anime, vertical: "Why can't cats taste sweet?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'もぐもぐガーンキラにゃーあまいペロ';
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
    kText(ctx, str, 0, 0, size, { font: KANA, weight: 900, fill, line: C.white, outer: C.plum, lw: 0.22 });
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


  const W = 1080, HH = 1920;
  const P_ = [{"s":0.25,"e":1.67,"text":"Your cat can't taste sugar,","words":[["your",0.25],["cat",0.52],["cant",0.72],["taste",0.99],["sugar",1.33]]},{"s":2.07,"e":3.9,"text":"and one broken gene is why.","words":[["and",2.07],["one",2.33],["broken",2.59],["gene",3.11],["is",3.46],["why",3.64]]},{"s":4.36,"e":6.01,"text":"Put a sweet treat in front of one,","words":[["put",4.36],["a",4.55],["sweet",4.61],["treat",4.93],["in",5.25],["front",5.37],["of",5.69],["one",5.82]]},{"s":6.37,"e":8.85,"text":"and to the cat, it tastes like nothing.","words":[["and",6.37],["to",6.62],["the",6.78],["cat",7.03],["it",7.28],["tastes",7.44],["like",7.94],["nothing",8.27]]},{"s":9.2,"e":12.19,"text":"To taste sweet, your tongue needs a tiny lock,","words":[["to",9.2],["taste",9.36],["sweet",9.78],["your",10.19],["tongue",10.53],["needs",11.02],["a",11.44],["tiny",11.52],["lock",11.86]]},{"s":12.72,"e":14.98,"text":"built from two parts that work as a pair.","words":[["built",12.72],["from",13.07],["two",13.35],["parts",13.57],["that",13.92],["work",14.2],["as",14.48],["a",14.63],["pair",14.7]]},{"s":15.37,"e":18.87,"text":"In 2005, scientists looked inside cat DNA,","words":[["in",15.37],["2005",15.57],["scientists",15.98],["looked",17.02],["inside",17.63],["cat",18.25],["dna",18.56]]},{"s":18.87,"e":22.17,"text":"and found one of those parts was broken.","words":[["and",18.87],["found",19.18],["one",19.69],["of",20.0],["those",20.21],["parts",20.72],["was",21.24],["broken",21.55]]},{"s":22.54,"e":25.82,"text":"The gene for it is missing 247 letters,","words":[["the",22.54],["gene",22.86],["for",23.28],["it",23.6],["is",23.81],["missing",24.02],["247",24.76],["letters",25.08]]},{"s":25.96,"e":28.25,"text":"so the lock never gets built.","words":[["so",25.96],["the",26.16],["lock",26.46],["never",26.86],["gets",27.35],["built",27.75]]},{"s":28.62,"e":30.01,"text":"No lock, no sweet.","words":[["no",28.62],["lock",28.84],["no",29.26],["sweet",29.48]]},{"s":30.3,"e":32.01,"text":"And it's not just house cats.","words":[["and",30.3],["its",30.53],["not",30.76],["just",31.0],["house",31.31],["cats",31.7]]},{"s":32.46,"e":34.24,"text":"Lions, tigers and cheetahs","words":[["lions",32.46],["tigers",32.86],["and",33.35],["cheetahs",33.59]]},{"s":34.41,"e":36.08,"text":"carry the same broken gene.","words":[["carry",34.41],["the",34.79],["same",35.01],["broken",35.32],["gene",35.77]]},{"s":36.43,"e":37.97,"text":"Which honestly makes sense.","words":[["which",36.43],["honestly",36.76],["makes",37.3],["sense",37.63]]},{"s":38.3,"e":40.17,"text":"Cats eat almost nothing but meat,","words":[["cats",38.3],["eat",38.58],["almost",38.78],["nothing",39.2],["but",39.68],["meat",39.89]]},{"s":40.6,"e":42.42,"text":"and meat has barely any sugar.","words":[["and",40.6],["meat",40.83],["has",41.13],["barely",41.36],["any",41.81],["sugar",42.04]]},{"s":42.86,"e":45.23,"text":"So losing sweet cost them nothing at all.","words":[["so",42.86],["losing",43.0],["sweet",43.43],["cost",43.79],["them",44.08],["nothing",44.37],["at",44.87],["all",45.02]]},{"s":45.7,"e":48.26,"text":"So if your cat keeps stealing your ice cream,","words":[["so",45.7],["if",45.84],["your",45.99],["cat",46.27],["keeps",46.48],["stealing",46.84],["your",47.41],["ice",47.69],["cream",47.91]]},{"s":48.65,"e":50.35,"text":"what do you think it's really after?","words":[["what",48.65],["do",48.89],["you",49.02],["think",49.2],["its",49.5],["really",49.68],["after",50.05]]}];

  // ---------- timing ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e }, { id: 'treat', s: P_[2].s, e: P_[3].e }, { id: 'lock', s: P_[4].s, e: P_[5].e },
    { id: 'dna', s: P_[6].s, e: P_[7].e }, { id: 'missing', s: P_[8].s, e: P_[10].e }, { id: 'bigcats', s: P_[11].s, e: P_[13].e },
    { id: 'meat', s: P_[14].s, e: P_[17].e }, { id: 'end', s: P_[18].s, e: P_[19].e },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const CUTS = BEATS.slice(1).map((b, i) => ({ t: (BEATS[i].e + b.s) / 2, shape: i % 3 === 1 ? 'heart' : 'star' }));
  const CUTW = 0.5;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));
  function stampLike(ctx, str, x, y, size, t, t0, rot = -0.08) {
    const p = pop(t, t0, 1.6); if (p.s <= 0) return; const k = 1 + 0.4 * Math.exp(-14 * p.u);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(p.sx * k, p.sy * k);
    ctx.font = `700 ${size}px ${FONT}`; const tw = ctx.measureText(str).width + size;
    cel(ctx, rrP(-tw / 2, -size * 0.85, tw, size * 1.5, size * 0.4), C.white, '#ffe0ea', -5, -5, 0);
    ctx.lineWidth = 12; ctx.strokeStyle = C.red; ctx.stroke(rrP(-tw / 2, -size * 0.85, tw, size * 1.5, size * 0.4));
    ctx.fillStyle = C.red; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(str, 0, -size * 0.08);
    ctx.restore();
  }
  function bigX(ctx, x, y, s, prog) {
    if (prog <= 0) return; ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round';
    [[-1, -1, 1, 1], [1, -1, -1, 1]].forEach(([a, b, c, d], i) => { const u = H.clamp(prog * 2 - i); if (u <= 0) return; ctx.beginPath(); ctx.moveTo(a * s, b * s); ctx.lineTo(H.lerp(a, c, u) * s, H.lerp(b, d, u) * s); ctx.lineWidth = 58; ctx.strokeStyle = C.plum; ctx.stroke(); ctx.lineWidth = 40; ctx.strokeStyle = C.red; ctx.stroke(); });
    ctx.restore();
  }

  // ---------- palette for this film ----------
  const FUR = {
    house: { b: '#ffc58a', s: '#eb9a5c', st: '#e0874a', iris: '#5fae6e' },
    lion: { b: '#f5c66e', s: '#d9a24a', mane: '#c97a3a', maneS: '#a65c28', iris: '#b5782a' },
    tiger: { b: '#ff9f4a', s: '#e07a28', st: '#4a2b3a', iris: '#8a9a3a' },
    cheetah: { b: '#ffd88a', s: '#e6b45c', spot: '#4a2b3a', iris: '#b58a2a' },
  };
  const SUGAR = { b: '#ffffff', s: '#dfe6f5' };

  // ---------- cast ----------
  // Mochi the chibi cat (and the big cats). (x,y) = bottom centre of the body. P: kind, eyes, mouth, look, tongue, headOnly
  function cat(ctx, x, y, s, P = {}) {
    const F = FUR[P.kind || 'house'];
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (!P.headOnly) {
      // tail
      const tw = Math.sin((P.tt || 0) * 3) * 0.25;
      ctx.save(); ctx.translate(95, -40); ctx.rotate(tw); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 50; ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(90, -10, 80, -120); ctx.stroke(); ctx.strokeStyle = F.b; ctx.lineWidth = 36; ctx.stroke(); ctx.restore();
      // body
      const body = ellP(0, -95, 115, 100); cel(ctx, body, F.b, F.s, -8, -8, 5);
      ctx.save(); ctx.clip(body); ctx.fillStyle = C.cream; ctx.fill(ellP(0, -70, 60, 70)); if (F.st && P.kind === 'tiger') { ctx.strokeStyle = F.st; ctx.lineWidth = 12; ctx.lineCap = 'round'; for (const sd of [-1, 1]) for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(sd * 115, -150 + i * 40); ctx.lineTo(sd * 70, -140 + i * 40); ctx.stroke(); } } ctx.restore();
      // paws
      for (const sd of [-1, 1]) { cel(ctx, ellP(sd * 45, -10, 38, 26), F.b, F.s, -3, -3, 4.5); ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.moveTo(sd * 45 - 8, -22); ctx.lineTo(sd * 45 - 8, -8); ctx.moveTo(sd * 45 + 8, -22); ctx.lineTo(sd * 45 + 8, -8); ctx.stroke(); ctx.restore(); }
    }
    ctx.translate(0, -230);
    // mane (lion)
    if (P.kind === 'lion') { const r = H.rng(5), ps = []; for (let i = 0; i < 14; i++) { const a = i / 14 * TAU; ps.push(ellP(Math.cos(a) * 140, Math.sin(a) * 120 + 10, 60, 55)); } union(ctx, ps, F.mane, 5); ctx.save(); ctx.fillStyle = F.maneS; ps.forEach((p, i) => { if (i > 3 && i < 11) { } }); ctx.restore(); }
    // ears
    for (const sd of [-1, 1]) { const ear = roundPoly([[sd * 60, -95], [sd * 150, -170], [sd * 140, -40]], 18); cel(ctx, ear, F.b, F.s, -4, -4, 5); ctx.save(); ctx.fillStyle = C.pink; ctx.fill(roundPoly([[sd * 85, -90], [sd * 135, -140], [sd * 130, -65]], 10)); ctx.restore(); }
    // head
    const head = ellP(0, 0, 165, 135);
    cel(ctx, head, F.b, F.s, -10, -10, 0);
    ctx.save(); ctx.clip(head);
    if (P.kind === 'tiger' || P.kind === 'house') { ctx.strokeStyle = F.st; ctx.lineCap = 'round'; ctx.lineWidth = P.kind === 'tiger' ? 14 : 10; ctx.beginPath(); ctx.moveTo(-30, -135); ctx.lineTo(-20, -95); ctx.moveTo(0, -140); ctx.lineTo(0, -92); ctx.moveTo(30, -135); ctx.lineTo(20, -95); if (P.kind === 'tiger') { for (const sd of [-1, 1]) { ctx.moveTo(sd * 165, -20); ctx.lineTo(sd * 115, -10); ctx.moveTo(sd * 165, 20); ctx.lineTo(sd * 120, 25); } } ctx.stroke(); }
    if (P.kind === 'cheetah') { const r = H.rng(77); ctx.fillStyle = F.spot; for (let i = 0; i < 16; i++) { const a = r() * TAU, d = r.range(95, 160); ctx.fill(ellP(Math.cos(a) * d, Math.sin(a) * d * 0.8 - 20, r.range(6, 11), r.range(6, 10))); } }
    ctx.fillStyle = C.cream; ctx.fill(ellP(0, 70, 90, 60));
    ctx.restore();
    ol(ctx, head, 5);
    if (P.kind === 'cheetah') { ctx.save(); ctx.strokeStyle = F.spot; ctx.lineWidth = 7; ctx.lineCap = 'round'; for (const sd of [-1, 1]) { ctx.beginPath(); ctx.moveTo(sd * 72, 18); ctx.quadraticCurveTo(sd * 70, 55, sd * 40, 75); ctx.stroke(); } ctx.restore(); }
    // face
    const ek = P.eyes || 'normal';
    eye(ctx, -70, -5, 30, 38, F.iris, ek, -1, P.look || [0, 0]); eye(ctx, 70, -5, 30, 38, F.iris, ek, 1, P.look || [0, 0]);
    blush(ctx, -112, 48, 22, 11); blush(ctx, 112, 48, 22, 11);
    // nose + mouth
    ctx.save(); ctx.fillStyle = '#ff8fab'; ctx.fill(roundPoly([[-14, 34], [14, 34], [0, 50]], 5)); ol(ctx, roundPoly([[-14, 34], [14, 34], [0, 50]], 5), 3); ctx.restore();
    const mk = P.mouth || 'w';
    if (mk === 'w') mouth(ctx, 0, 58, 13, 'w'); else mouth(ctx, 0, 66, 13, mk);
    if (P.tongue) { ctx.save(); const tp = new Path2D(); tp.roundRect(-14, 64, 28, 30 * P.tongue, 14); cel(ctx, tp, '#ff8fab', '#f26c92', -2, -2, 3.5); ctx.restore(); }
    // whiskers
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath();
    for (const sd of [-1, 1]) for (let i = -1; i <= 1; i++) { ctx.moveTo(sd * 120, 40 + i * 16); ctx.lineTo(sd * 200, 32 + i * 26); }
    ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  // a sugar cube with a face
  function sugar(ctx, x, y, s, rot = 0, eyes = 'happy') {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const top = roundPoly([[-50, -40], [10, -62], [60, -42], [0, -20]], 8), front = roundPoly([[-50, -40], [0, -20], [0, 50], [-50, 30]], 8), side = roundPoly([[0, -20], [60, -42], [60, 28], [0, 50]], 8);
    cel(ctx, side, '#e8eefa', SUGAR.s, 0, 0, 4.5); cel(ctx, front, SUGAR.b, '#f2f5fc', 0, 0, 4.5); cel(ctx, top, SUGAR.b, SUGAR.b, 0, 0, 4.5);
    const r = H.rng(3); ctx.fillStyle = '#d6def0'; for (let i = 0; i < 9; i++) ctx.fill(ellP(r.range(-44, 50), r.range(-30, 40), 3, 3));
    eye(ctx, -34, 8, 6, 8, '#8f74e6', eyes, -1); eye(ctx, -14, 12, 6, 8, '#8f74e6', eyes, 1); mouth(ctx, -24, 26, 4, 'w');
    ctx.restore();
  }
  function cupcake(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const cup = roundPoly([[-90, -10], [90, -10], [65, 110], [-65, 110]], 12); cel(ctx, cup, C.sky, C.skyS, -5, -5, 5);
    ctx.save(); ctx.clip(cup); ctx.strokeStyle = C.skyS; ctx.lineWidth = 6; for (let i = -4; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(i * 22, -10); ctx.lineTo(i * 16, 110); ctx.stroke(); } ctx.restore();
    union(ctx, [ellP(0, -40, 105, 50), ellP(0, -85, 75, 45), ellP(0, -120, 42, 32)], C.pink, 5);
    ctx.save(); ctx.fillStyle = C.pinkS; ctx.fill(ellP(40, -30, 50, 18)); ctx.restore();
    const r = H.rng(8), cols = [C.butterD, C.mintD, C.skyD, C.lavD]; for (let i = 0; i < 12; i++) { ctx.save(); ctx.translate(r.range(-80, 80), r.range(-110, -30)); ctx.rotate(r() * 3); ctx.fillStyle = cols[i % 4]; ctx.fill(rrP(-8, -3, 16, 6, 3)); ctx.restore(); }
    cel(ctx, ellP(0, -160, 22, 22), C.red, '#d94a6a', -3, -3, 4.5); shine(ctx, -7, -167, 6, 4);
    shine(ctx, -50, -60, 18, 9, -0.4, 0.85);
    ctx.restore();
  }
  // the sweet "lock": two halves (one per receptor part) and a shackle. split 0..1 pulls them apart; ghostL draws the left half as a dashed ghost
  function sweetLock(ctx, x, y, s, P = {}) {
    const sp = P.split || 0, gl = P.ghostL || 0, open = P.open || 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // shackle
    ctx.save(); ctx.translate(0, -open * 50); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 62; ctx.beginPath(); ctx.moveTo(-110, -60); ctx.lineTo(-110, -150); ctx.arc(0, -150, 110, Math.PI, 0); ctx.lineTo(110, -60 + open * 40); ctx.stroke(); ctx.strokeStyle = '#c9d6ea'; ctx.lineWidth = 44; ctx.stroke(); ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(0, -150, 110, Math.PI * 1.15, Math.PI * 1.5); ctx.stroke(); ctx.restore();
    // halves
    const halfL = new Path2D(); halfL.roundRect(-190, -80, 190, 260, [50, 0, 0, 50]);
    const halfR = new Path2D(); halfR.roundRect(0, -80, 190, 260, [0, 50, 50, 0]);
    ctx.save(); ctx.translate(-sp * 120, sp * 30); ctx.rotate(-sp * 0.15);
    if (gl > 0) { ctx.save(); ctx.globalAlpha = 1 - gl; cel(ctx, halfL, C.pink, C.pinkS, -8, -8, 5); ctx.restore(); ctx.save(); ctx.globalAlpha = gl; ctx.setLineDash([22, 16]); ol(ctx, halfL, 5, C.plum); ctx.restore(); }
    else cel(ctx, halfL, C.pink, C.pinkS, -8, -8, 5);
    if (gl < 0.5) { ctx.save(); ctx.font = `700 52px ${FONT}`; ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.fillText('1', -95, 150); ctx.restore(); }
    ctx.restore();
    ctx.save(); ctx.translate(sp * 120, sp * 30); ctx.rotate(sp * 0.15);
    cel(ctx, halfR, C.mint, C.mintS, -8, -8, 5);
    ctx.save(); ctx.font = `700 52px ${FONT}`; ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.fillText('2', 95, 150); ctx.restore();
    ctx.restore();
    // keyhole (only when whole)
    if (sp < 0.1 && gl < 0.5) { ctx.save(); ctx.fillStyle = C.plum; ctx.fill(ellP(0, 20, 30, 30)); ctx.fill(roundPoly([[-18, 30], [18, 30], [26, 110], [-26, 110]], 6)); ctx.restore(); }
    // face across the seam
    const fk = P.face || 'normal';
    if (gl < 0.5 && sp < 0.1) { eye(ctx, -80, -20, 16, 21, '#5a74b8', fk, -1); eye(ctx, 80, -20, 16, 21, '#5a74b8', fk, 1); blush(ctx, -120, 20, 16, 8); blush(ctx, 120, 20, 16, 8); }
    shine(ctx, -150, -50, 22, 10, -0.5, 0.8);
    ctx.restore();
  }
  // a big kawaii tongue with taste-bud bumps
  function tongue(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(-260, -200); p.quadraticCurveTo(0, -290, 260, -200); p.bezierCurveTo(290, 100, 200, 330, 0, 340); p.bezierCurveTo(-200, 330, -290, 100, -260, -200); p.closePath();
    cel(ctx, p, '#ffa3bb', '#f27a9c', -10, -10, 6);
    ctx.save(); ctx.clip(p); ctx.strokeStyle = '#f27a9c'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, -200); ctx.lineTo(0, 180); ctx.stroke();
    const r = H.rng(21); ctx.fillStyle = '#ffc2d2'; for (let i = 0; i < 40; i++) ctx.fill(ellP(r.range(-230, 230), r.range(-180, 300), 9, 9)); ctx.restore();
    ctx.restore();
  }
  // DNA double helix, vertical, scrolling. broken: index of a rung group that is snapped (-1 = none)
  const BASE = { A: C.pinkD, T: C.mintD, G: C.butterD, C: C.skyD };
  const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
  function helix(ctx, cx, y0, y1, amp, t, scroll, brokenY, brk) {
    const r = H.rng(44), seq = Array.from({ length: 80 }, () => 'ATGC'[r.int(0, 3)]);
    const step = 46, off = (scroll % step);
    for (let k = -1; k * step < y1 - y0 + step; k++) {
      const y = y0 + k * step + off, idx = ((k - Math.floor(scroll / step)) % 80 + 80) % 80, ph = (y - y0) * 0.012 + scroll * 0.012;
      if (y < y0 || y > y1) continue;
      const xa = cx + Math.sin(ph) * amp, xb = cx - Math.sin(ph) * amp, front = Math.cos(ph) > 0;
      const gone = brk > 0 && Math.abs(y - brokenY) < 70;
      if (gone) continue;
      const b = seq[idx];
      ctx.save(); ctx.lineCap = 'round'; ctx.lineWidth = 22; ctx.strokeStyle = C.plum; ctx.beginPath(); ctx.moveTo(xa, y); ctx.lineTo(xb, y); ctx.stroke();
      ctx.lineWidth = 13; ctx.strokeStyle = BASE[b]; ctx.beginPath(); ctx.moveTo(xa, y); ctx.lineTo(cx, y); ctx.stroke(); ctx.strokeStyle = BASE[PAIR[b]]; ctx.beginPath(); ctx.moveTo(cx, y); ctx.lineTo(xb, y); ctx.stroke(); ctx.restore();
    }
    // backbones
    for (const sg of [1, -1]) {
      ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      const segs = brk > 0 ? [[y0, brokenY - 70], [brokenY + 70, y1]] : [[y0, y1]];
      segs.forEach(([a, b], si) => {
        ctx.beginPath(); for (let y = a; y <= b; y += 6) { const ph = (y - y0) * 0.012 + scroll * 0.012, x = cx + sg * Math.sin(ph) * amp; y === a ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
        ctx.lineWidth = 34; ctx.strokeStyle = C.plum; ctx.stroke(); ctx.lineWidth = 22; ctx.strokeStyle = sg > 0 ? C.lav : C.pink; ctx.stroke();
      });
      ctx.restore();
    }
  }
  // a row of letter tiles with a gap
  function tiles(ctx, cx, y, gapW, t, t0, seed) {
    const r = H.rng(seed), n = 7, tw = 92, gap = 14;
    const total = n * (tw + gap) - gap + gapW;
    let x = cx - total / 2;
    for (let i = 0; i < n; i++) {
      const L = 'ATGC'[r.int(0, 3)], q = pop(t, t0 + i * 0.05, 1.1);
      if (q.s > 0) { ctx.save(); ctx.translate(x + tw / 2, y); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-tw / 2, -tw / 2, tw, tw, 22), C.white, C.creamS, -4, -4, 4.5); kText(ctx, L, 0, 22, 64, { line: BASE[L], fill: C.white, lw: 0.2, shadow: false }); ctx.restore(); }
      x += tw + gap; if (i === 2) x += gapW;
    }
    return cx - total / 2 + 3 * (tw + gap);
  }
  // simple big-cat-friendly meat: a cartoon drumstick-free steak
  function steak(ctx, x, y, s, rot = 0) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(-130, -30); p.bezierCurveTo(-140, -110, -20, -120, 40, -90); p.bezierCurveTo(120, -60, 150, 20, 110, 70); p.bezierCurveTo(60, 120, -60, 110, -110, 60); p.bezierCurveTo(-140, 30, -125, 0, -130, -30); p.closePath();
    cel(ctx, p, '#ff8a8a', '#e0646e', -8, -8, 5);
    ctx.save(); ctx.clip(p); ctx.strokeStyle = C.cream; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-100, -40); ctx.quadraticCurveTo(-20, -10, 40, -60); ctx.moveTo(-60, 50); ctx.quadraticCurveTo(10, 20, 80, 40); ctx.stroke(); ctx.restore();
    cel(ctx, ellP(55, 5, 26, 22), C.cream, C.creamS, -3, -3, 4.5);
    shine(ctx, -70, -60, 22, 9, -0.4, 0.8);
    ctx.restore();
  }
  function iceCream(ctx, x, y, s, lick = 0) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const cone = roundPoly([[-80, 0], [80, 0], [0, 220]], 14); cel(ctx, cone, C.butterS, '#d9a84a', -5, -5, 5);
    ctx.save(); ctx.clip(cone); ctx.strokeStyle = '#d9a84a'; ctx.lineWidth = 6; for (let i = -4; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(i * 40 - 80, 0); ctx.lineTo(i * 40 + 80, 220); ctx.moveTo(i * 40 + 80, 0); ctx.lineTo(i * 40 - 80, 220); ctx.stroke(); } ctx.restore();
    union(ctx, [ellP(0, -50, 100, 80), ellP(-60, -5, 45, 30), ellP(60, -5, 45, 30), ellP(0, 0, 50, 30)], C.cream, 5);
    ctx.save(); ctx.fillStyle = C.creamS; ctx.fill(ellP(40, -20, 45, 20)); ctx.restore();
    if (lick > 0) { ctx.save(); ctx.fillStyle = C.creamS; ctx.fill(ellP(-60, -60, 40 * lick, 22 * lick, -0.4)); ctx.restore(); }
    cel(ctx, ellP(0, -138, 20, 20), C.red, '#d94a6a', -3, -3, 4.5);
    shine(ctx, -50, -85, 22, 10, -0.4, 0.85);
    ctx.restore();
  }
  function magnifier(ctx, x, y, s, inner) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.save(); ctx.translate(120, 120); ctx.rotate(-Math.PI / 4); cel(ctx, rrP(-28, 0, 56, 200, 26), C.lavD, '#6f55c4', -4, -4, 5); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.arc(0, 0, 150, 0, TAU); ctx.clip(); ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fillRect(-160, -160, 320, 320); if (inner) inner(); ctx.restore();
    ctx.lineWidth = 36; ctx.strokeStyle = C.plum; ctx.beginPath(); ctx.arc(0, 0, 150, 0, TAU); ctx.stroke(); ctx.lineWidth = 24; ctx.strokeStyle = C.lav; ctx.stroke();
    shine(ctx, -80, -80, 30, 12, -0.8, 0.9);
    ctx.restore();
  }

  // ---------- scenes ----------
  const scenes = [
    function hook(ctx, t) {
      bgV(ctx, t, TH.pink, 81);
      const sugarIn = pop(t, w(0, 'sugar') - 0.15, 1.2), geneOn = t >= w(1, 'broken') - 0.12;
      const sq = squash(t, w(0, 'cant'), 0.15);
      // cat sniffs a sugar cube, unimpressed
      ctx.save(); ctx.translate(540, 1640); ctx.scale(sq[0], sq[1]); cat(ctx, 0, 0, 1.7, { eyes: t > w(0, 'taste') - 0.1 ? 'blink' : 'normal', mouth: t > w(0, 'taste') - 0.1 ? 'flat' : 'w', look: [0.6, 0.6], tt: t }); ctx.restore();
      if (sugarIn.s > 0) { ctx.save(); ctx.translate(880, 1580 + bob(t, 1, 6)); ctx.scale(sugarIn.sx, sugarIn.sy); sugar(ctx, 0, 0, 1.5, 0.05, 'normal'); ctx.restore(); }
      big(ctx, 'NO SUGAR', 540, 330, 150, t, w(0, 'cant') - 0.12, { line: C.pinkD, fill: C.white });
      big(ctx, 'TASTE!', 540, 490, 150, t, w(0, 'taste') - 0.12, { line: C.pinkD, fill: C.butter });
      if (t > w(0, 'sugar')) { const q = pop(t, w(0, 'sugar'), 1.2); kana(ctx, '…?', 260, 760, 90, -0.1, q.s * (geneOn ? 0 : 1), C.white); }
      if (geneOn) {
        // a tiny DNA ladder with a crack slides in on "broken gene"
        const g = grow(t, w(1, 'broken') - 0.12, 0.35);
        ctx.save(); ctx.translate(540, 0); ctx.globalAlpha = g; ctx.translate((1 - g) * 600, 0);
        cel(ctx, rrP(-400, 590, 800, 200, 60), C.white, C.creamS, -6, -6, 5);
        ctx.restore();
        ctx.save(); ctx.translate((1 - g) * 600, 0); ctx.beginPath(); ctx.rect(140, 590, 800, 200); ctx.clip(); helixH(ctx, 540, 690, 330, 52, t); ctx.restore();
        bigX(ctx, 540, 690, 70, grow(t, w(1, 'gene') - 0.1, 0.3));
        numPop(ctx, '1 BROKEN GENE', 540, 920, 100, t, w(1, 'gene') - 0.12, { line: C.lavD, fill: C.butter });
        if (t >= w(1, 'why') - 0.12) { const q = pop(t, w(1, 'why') - 0.12, 1.3); if (q.s > 0) { ctx.save(); ctx.translate(170, 1150); ctx.scale(q.sx, q.sy); bubble(ctx, 0, 0, 230, 140, [120, 140]); kText(ctx, 'WHY?', 0, 26, 70, { line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); } }
      }
      twinkles(ctx, W, HH, t, 5, 8, (x, y) => y > 250 && y < 1700);
    },
    function treat(ctx, t) {
      bgV(ctx, t, TH.butter, 82);
      const cq = pop(t, w(2, 'sweet') - 0.15, 1.2);
      const bite = t >= w(3, 'tastes') - 0.12, nothing = t >= w(3, 'nothing') - 0.12;
      cat(ctx, 380, 1600, 1.9, { eyes: nothing ? 'blink' : bite ? 'happy' : 'normal', mouth: nothing ? 'flat' : bite ? 'o' : 'w', look: [0.7, 0.5], tt: t });
      if (cq.s > 0) { ctx.save(); ctx.translate(800, 1450); ctx.scale(cq.sx * 1.5, cq.sy * 1.5); cupcake(ctx, 0, 0, 1); ctx.restore(); }
      big(ctx, 'SWEET', 540, 330, 160, t, w(2, 'sweet') - 0.12, { line: C.pinkD, fill: C.pink });
      big(ctx, 'TREAT', 540, 500, 160, t, w(2, 'treat') - 0.12, { line: C.pinkD, fill: C.white });
      if (bite) {
        const q = pop(t, w(3, 'tastes') - 0.12, 1.2); kana(ctx, 'もぐもぐ', 760, 1080, 74, 0.1, q.s * (nothing ? 0 : 1), C.butter);
      }
      if (nothing) {
        const q = pop(t, w(3, 'nothing') - 0.12, 1.1);
        if (q.s > 0) { ctx.save(); ctx.translate(330, 790); ctx.scale(q.sx, q.sy); thought(ctx, 0, 0, 1.9, [40, 230], 3, t); ctx.restore(); }
        stampLike(ctx, 'NOTHING', 760, 640, 92, t, w(3, 'nothing') - 0.05, 0.08);
        sweat(ctx, 640, 960, 1.3);
      }
    },
    function lock(ctx, t) {
      bgV(ctx, t, TH.mint, 83);
      const tq = pop(t, w(4, 'tongue') - 0.15, 1.0);
      if (tq.s > 0) { ctx.save(); ctx.translate(540, 1500); ctx.scale(tq.sx, tq.sy); tongue(ctx, 0, 0, 1.2); ctx.restore(); }
      const lk = pop(t, w(4, 'lock') - 0.15, 1.2);
      const join = grow(t, w(5, 'pair') - 0.2, 0.25), split = t < w(5, 'two') - 0.12 ? 0 : 1 - join;
      if (lk.s > 0) { ctx.save(); ctx.translate(540, 1030); ctx.scale(lk.sx, lk.sy); sweetLock(ctx, 0, 0, 1.1, { split, face: join > 0.9 ? 'happy' : 'normal' }); ctx.restore(); }
      big(ctx, 'SWEET', 540, 300, 140, t, w(4, 'sweet') - 0.12, { line: C.mintD, fill: C.pink });
      big(ctx, 'LOCK', 540, 450, 150, t, w(4, 'lock') - 0.12, { line: C.mintD, fill: C.white });
      if (t >= w(5, 'two') - 0.12) { label(ctx, 'part 1', 230, 680, 56, t, w(5, 'two') - 0.12, C.pink); label(ctx, 'part 2', 850, 680, 56, t, w(5, 'parts') - 0.12, C.mint); }
      if (join > 0.5) { numPop(ctx, 'A PAIR!', 540, 1560, 110, t, w(5, 'pair') - 0.1, { line: C.pinkD, fill: C.butter }); heart(ctx, 860, 860, 40, C.pinkD, 0.2); impactLines(ctx, 540, 1030, 240, t, w(5, 'pair') - 0.05, 10, C.mintD); }
      // sugar key hovering, ready to unlock
      if (t >= w(4, 'lock')) sugar(ctx, 150, 1180 + bob(t, 0, 10), 1.1, -0.15, 'happy');
    },
    function dna(ctx, t) {
      bgV(ctx, t, TH.lav, 84);
      const brk = t >= w(7, 'broken') - 0.12 ? 1 : 0;
      const scroll = brk ? (w(7, 'broken') - 0.12 - BEATS[3].s) * 160 : (t - BEATS[3].s) * 160;
      helix(ctx, 540, 640, 1660, 170, t, scroll, 1170, brk);
      // the cat peeks through a magnifier
      const mq = pop(t, w(6, 'looked') - 0.15, 1.2);
      if (mq.s > 0) { ctx.save(); ctx.translate(840, 1420); ctx.scale(mq.sx, mq.sy); magnifier(ctx, 0, 0, 0.9, () => cat(ctx, 0, 290, 0.75, { headOnly: true, eyes: brk ? 'shock' : 'normal', mouth: brk ? 'O' : 'w', look: [-0.6, -0.4] })); ctx.restore(); }
      big(ctx, '2005', 540, 330, 190, t, w(6, '2005') - 0.12, { line: C.lavD, fill: C.butter });
      label(ctx, 'cat DNA', 540, 520, 64, t, w(6, 'dna') - 0.12, C.white);
      if (brk) {
        impactLines(ctx, 540, 1170, 120, t, w(7, 'broken') - 0.12, 10, C.red);
        stampLike(ctx, 'BROKEN!', 360, 1170, 96, t, w(7, 'broken') - 0.05, -0.12);
        const q = pop(t, w(7, 'broken'), 1.2); kana(ctx, 'ガーン', 820, 860, 80, 0.12, q.s, C.butter);
      }
    },
    function missing(ctx, t) {
      bgV(ctx, t, TH.pink, 85);
      const nl = t >= P_[9].s - 0.1, nn = t >= P_[10].s - 0.1;
      if (!nl) {
        big(ctx, 'MISSING', 540, 330, 150, t, w(8, 'missing') - 0.12, { line: C.red, fill: C.white });
        const gw = 260 * grow(t, w(8, 'missing') - 0.12, 0.4);
        const gx = tiles(ctx, 540, 820, gw, t, BEATS[4].s, 9);
        if (gw > 10) { ctx.save(); ctx.setLineDash([18, 12]); ctx.lineWidth = 6; ctx.strokeStyle = C.red; ctx.strokeRect(gx - 4, 820 - 52, gw - 6, 104); ctx.restore(); }
        numPop(ctx, '247', 540, 1180, 230, t, w(8, '247') - 0.12, { line: C.red, fill: C.butter });
        label(ctx, 'letters', 540, 1340, 72, t, w(8, 'letters') - 0.12, C.white);
        dotted(ctx, [[540, 1060], [540, 960], [gx + gw / 2 - 4, 890]], grow(t, w(8, '247'), 0.35), C.red, 8, 24, 1.1);
      } else {
        const gl = grow(t, w(9, 'never') - 0.12, 0.4);
        sweetLock(ctx, 540, 1080, 1.25, { ghostL: gl, face: 'normal' });
        // sugar key tries the lock and bounces off
        const t0 = w(9, 'built') - 0.1, u = t - t0;
        let sx = 170, sy = 1200, rot = -0.15;
        if (u > 0) { const k = H.clamp(u / 0.35); sx = H.lerp(170, 430, H.ease.in(k)); if (u > 0.35) { const v = u - 0.35; sx = 430 - v * 500; sy = 1200 - v * 900 + v * v * 1500; rot = -0.15 - v * 8; } }
        if (sy < 1900) sugar(ctx, sx, sy, 1.1, rot, u > 0.35 ? 'swirl' : 'happy');
        if (u > 0.35) impactLines(ctx, 430, 1200, 30, t, t0 + 0.35, 8);
        big(ctx, 'NEVER', 540, 330, 150, t, w(9, 'never') - 0.12, { line: C.lavD, fill: C.white });
        big(ctx, 'BUILT', 540, 490, 150, t, w(9, 'built') - 0.12, { line: C.lavD, fill: C.butter });
        if (nn) {
          ctx.save(); ctx.fillStyle = 'rgba(255,231,239,0.6)'; ctx.fillRect(0, 1460, W, 260); ctx.restore();
          big(ctx, 'NO LOCK', 540, 1560, 110, t, w(10, 'lock') - 0.12, { line: C.red, fill: C.white });
          big(ctx, 'NO SWEET', 540, 1690 - 50, 110, t, w(10, 'sweet') - 0.12, { line: C.red, fill: C.butter });
        }
      }
    },
    function bigcats(ctx, t) {
      bgV(ctx, t, TH.butter, 86);
      big(ctx, 'NOT JUST', 540, 300, 130, t, w(11, 'not') - 0.12, { line: C.pinkD, fill: C.white });
      big(ctx, 'HOUSE CATS', 540, 440, 120, t, w(11, 'house') - 0.12, { line: C.pinkD, fill: C.butter });
      const house = pop(t, BEATS[5].s, 1.1), out = t >= w(12, 'lions') - 0.2;
      if (!out && house.s > 0) { ctx.save(); ctx.translate(540, 1500); ctx.scale(house.sx, house.sy); cat(ctx, 0, 0, 2.0, { eyes: 'happy', tt: t }); ctx.restore(); }
      const list = [['lion', 'lions', 290, 770, 'lion'], ['tiger', 'tigers', 790, 990, 'tiger'], ['cheetah', 'cheetahs', 290, 1220, 'cheetah']];
      if (out) list.forEach(([k, word, x, y, nm], i) => {
        const q = pop(t, w(12, word) - 0.12, 1.2); if (q.s <= 0) return;
        const same = t >= w(13, 'broken') - 0.12;
        ctx.save(); ctx.translate(x, y + bob(t, i, 6)); ctx.scale(q.sx, q.sy); cat(ctx, 0, 230 * 1.15, 1.15, { kind: k, headOnly: true, eyes: same ? 'blink' : 'normal', mouth: same ? 'flat' : 'w' }); ctx.restore();
        label(ctx, nm, x, y + 205, 52, t, w(12, word) - 0.1, C.white);
      });
      if (t >= w(13, 'same') - 0.12) {
        const g = grow(t, w(13, 'same') - 0.12, 0.3);
        ctx.save(); ctx.globalAlpha = g; cel(ctx, rrP(110, 1500, 860, 130, 60), C.white, C.creamS, -6, -6, 5); ctx.restore();
        helixH2(ctx, 540, 1565, 360, 36, t, g);
        bigX(ctx, 540, 1565, 46, grow(t, w(13, 'broken') - 0.1, 0.3));
        numPop(ctx, 'SAME GENE', 790, 1340, 84, t, w(13, 'gene') - 0.12, { line: C.lavD, fill: C.butter, rot: -0.06 });
      }
    },
    function meat(ctx, t) {
      bgV(ctx, t, TH.mint, 87);
      const p15 = t >= P_[15].s - 0.1, p16 = t >= P_[16].s - 0.1, p17 = t >= P_[17].s - 0.1;
      cat(ctx, 330, 1640, 1.7, { eyes: p15 && !p17 ? 'happy' : p17 ? 'star' : 'normal', mouth: p15 ? 'smile' : 'w', look: [0.6, 0.3], tt: t });
      if (!p15) { big(ctx, 'MAKES', 540, 330, 150, t, w(14, 'makes') - 0.12, { line: C.mintD, fill: C.white }); big(ctx, 'SENSE', 540, 490, 150, t, w(14, 'sense') - 0.12, { line: C.mintD, fill: C.butter }); const q = pop(t, w(14, 'honestly'), 1.2); kana(ctx, 'なるほど', 780, 900, 70, 0.1, q.s, C.white); }
      else if (!p17) {
        big(ctx, 'MEAT', 540, 330, 170, t, w(15, 'meat') - 0.12, { line: C.pinkD, fill: C.white });
        const sq = pop(t, w(15, 'meat') - 0.12, 1.2); if (sq.s > 0) { ctx.save(); ctx.translate(790, 1230); ctx.scale(sq.sx, sq.sy); steak(ctx, 0, 0, 1.3, -0.1); ctx.restore(); }
        if (p16) {
          // sugar meter reading almost empty
          const g = grow(t, w(16, 'barely') - 0.12, 0.5);
          cel(ctx, rrP(140, 620, 800, 120, 60), C.white, C.creamS, -6, -6, 5);
          ctx.save(); ctx.clip(rrP(152, 632, 776, 96, 48)); ctx.fillStyle = C.pinkD; ctx.fillRect(152, 632, 776 * H.lerp(0.6, 0.03, g), 96); ctx.restore();
          label(ctx, 'sugar', 540, 820, 60, t, w(16, 'sugar') - 0.12, C.white);
          numPop(ctx, '≈ 0', 870, 950, 130, t, w(16, 'sugar') - 0.12, { line: C.skyD, fill: C.butter });
        }
      } else {
        big(ctx, 'COST:', 540, 330, 140, t, w(17, 'cost') - 0.12, { line: C.lavD, fill: C.white });
        big(ctx, 'NOTHING', 540, 490, 150, t, w(17, 'nothing') - 0.12, { line: C.lavD, fill: C.butter });
        steak(ctx, 790, 1230, 1.3, -0.1); heart(ctx, 900, 1000, 44, C.pinkD, 0.2);
        // a ghost cupcake waves goodbye, and nobody minds
        const g = grow(t, w(17, 'losing') - 0.12, 0.6); ctx.save(); ctx.globalAlpha = 1 - g * 0.85; ctx.translate(820, 820 - g * 120); cupcake(ctx, 0, 0, 0.6); ctx.restore();
        confetti(ctx, t, w(17, 'nothing') - 0.05, 540, 900, 40, 3);
      }
    },
    function end(ctx, t) {
      bgV(ctx, t, TH.pink, 88);
      const ic = pop(t, w(18, 'ice') - 0.15, 1.2), lick = t >= w(18, 'stealing') - 0.1;
      const lk = lick ? (Math.floor((t - w(18, 'stealing')) * 15 / 4) % 2) : 0;
      cat(ctx, 380, 1640, 1.8, { eyes: lick ? 'happy' : 'normal', mouth: 'w', tongue: lk ? 1 : 0, look: [0.7, 0], tt: t });
      if (ic.s > 0) { ctx.save(); ctx.translate(800, 1080); ctx.rotate(-0.15); ctx.scale(ic.sx * 1.4, ic.sy * 1.4); iceCream(ctx, 0, 0, 1, lick ? H.clamp((t - w(18, 'stealing')) / 1.5) : 0); ctx.restore(); }
      if (lick) { const q = pop(t, w(18, 'stealing'), 1.2); kana(ctx, 'ペロペロ', 620, 900, 70, 0.1, q.s, C.butter); }
      if (t < P_[19].s - 0.1) { big(ctx, 'STEALS', 540, 320, 140, t, w(18, 'stealing') - 0.12, { line: C.pinkD, fill: C.white }); big(ctx, 'ICE CREAM?', 540, 480, 130, t, w(18, 'ice') - 0.12, { line: C.pinkD, fill: C.butter }); }
      else { big(ctx, "WHAT'S IT", 540, 320, 140, t, w(19, 'what') - 0.12, { line: C.lavD, fill: C.white }); big(ctx, 'AFTER?', 540, 480, 150, t, w(19, 'after') - 0.12, { line: C.lavD, fill: C.butter }); }
      const q = pop(t, w(19, 'after') + 0.25, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(540, 640); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-400, -70, 800, 130, 65), C.white, C.creamS, -6, -6, 6); ctx.font = `700 60px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me in the comments!', 0, 16); ctx.restore(); }
    },
  ];
  // small horizontal DNA ladders (hook and big-cats beats)
  function helixH(ctx, cx, cy, half, amp, t) {
    for (let x = cx - half; x <= cx + half; x += 40) { const ph = x * 0.02 + t * 2, ya = cy + Math.sin(ph) * amp, yb = cy - Math.sin(ph) * amp; if (Math.abs(x - cx) < 40) continue; ctx.save(); ctx.lineCap = 'round'; ctx.lineWidth = 16; ctx.strokeStyle = C.plum; ctx.beginPath(); ctx.moveTo(x, ya); ctx.lineTo(x, yb); ctx.stroke(); ctx.lineWidth = 9; ctx.strokeStyle = [C.pinkD, C.mintD, C.butterD, C.skyD][Math.abs(Math.round(x / 40)) % 4]; ctx.stroke(); ctx.restore(); }
    for (const sg of [1, -1]) for (const [a, b] of [[cx - half, cx - 40], [cx + 40, cx + half]]) { ctx.save(); ctx.lineCap = 'round'; ctx.beginPath(); for (let x = a; x <= b; x += 6) { const y = cy + sg * Math.sin(x * 0.02 + t * 2) * amp; x === a ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.lineWidth = 24; ctx.strokeStyle = C.plum; ctx.stroke(); ctx.lineWidth = 14; ctx.strokeStyle = sg > 0 ? C.lav : C.pink; ctx.stroke(); ctx.restore(); }
  }
  function helixH2(ctx, cx, cy, half, amp, t, g) { if (g <= 0) return; ctx.save(); ctx.globalAlpha = g; helixH(ctx, cx, cy, half, amp, t); ctx.restore(); }

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1](ctx, t); wipe(ctx, W_, H_, (t - (c.t - CUTW / 2)) / CUTW, c.shape, 540, 900, () => scenes[i](ctx, t)); }
    else scenes[i](ctx, t);
  }
  function thumbnail(ctx, W_, H_) { scenes[0](ctx, 3.8); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    pop_(w(0, 'cant') - 0.12, 600, 0.8, 0, false); pop_(w(0, 'taste') - 0.12, 700); pop_(w(0, 'sugar') - 0.15, 1100, 0.7, 0.3);
    k.play('swish', w(1, 'broken') - 0.2, { gain: 0.4 }); k.play('error', w(1, 'gene') - 0.1, { f: 'A3', gain: 0.25 }); big_(w(1, 'gene') - 0.05, 'G5'); pop_(w(1, 'why') - 0.12, 900, 0.8, 0, false);
    // treat
    pop_(w(2, 'sweet') - 0.15, 800, 0.8, 0, false); pop_(w(2, 'treat') - 0.12, 700);
    for (let i = 0; i < 4; i++) pop_(w(3, 'tastes') - 0.1 + i * 0.13, 300 + (i % 2) * 80, 0.5);
    k.play('stamp', w(3, 'nothing') - 0.05, { gain: 0.5 }); k.play('error', w(3, 'nothing') + 0.1, { f: 'C4', gain: 0.2 });
    // lock
    pop_(w(4, 'sweet') - 0.12, 800, 0.8, 0, false); k.play('slap', w(4, 'tongue') - 0.15, { gain: 0.4 }); big_(w(4, 'lock') - 0.1, 'E6');
    k.play('swish', w(5, 'two') - 0.15, { gain: 0.35 }); pop_(w(5, 'two') - 0.12, 700); pop_(w(5, 'parts') - 0.12, 850);
    k.play('tock', w(5, 'pair') - 0.05, { f: 1200, gain: 0.8 }); k.play('success', w(5, 'pair'), { f: 'C6', gain: 0.4 });
    // dna
    big_(w(6, '2005') - 0.1, 'C6'); k.play('riser', BEATS[3].s, { dur: 1.2, gain: 0.25 }); pop_(w(6, 'looked') - 0.15, 700); pop_(w(6, 'dna') - 0.12, 900, 0.7, 0, false);
    for (let i = 0; i < 10; i++) k.play('tick', w(6, 'dna') + 0.2 + i * 0.12, { minor: true, gain: 0.4 });
    k.play('impact', w(7, 'broken') - 0.12, { gain: 0.55 }); k.play('stamp', w(7, 'broken') - 0.05, { gain: 0.5 }); k.play('error', w(7, 'broken') + 0.15, { f: 'A3', gain: 0.25 });
    // missing
    for (let i = 0; i < 7; i++) pop_(BEATS[4].s + i * 0.05, 900 + i * 60, 0.4);
    k.play('erase', w(8, 'missing') - 0.12, { dur: 0.4, gain: 0.5 }); big_(w(8, '247') - 0.1, 'A5'); pop_(w(8, 'letters') - 0.12, 800);
    k.play('stroke', w(9, 'never') - 0.12, { material: 'marker', dur: 0.4, gain: 0.4, minor: true });
    k.play('swish', w(9, 'built') - 0.1, { gain: 0.35 }); k.play('tock', w(9, 'built') + 0.25, { f: 900, gain: 0.7 }); k.play('hurt', w(9, 'built') + 0.27, { gain: 0.3 });
    k.play('error', w(10, 'lock') - 0.1, { f: 'C4', gain: 0.28 }); k.play('stamp', w(10, 'sweet') - 0.1, { gain: 0.45 });
    // big cats
    pop_(w(11, 'not') - 0.12, 700, 0.8, 0, false); pop_(w(11, 'house') - 0.12, 800);
    k.play('thud', w(12, 'lions') - 0.12, { f: 110, gain: 0.5 }); pop_(w(12, 'lions') - 0.12, 500, 0.8, -0.4, false);
    k.play('thud', w(12, 'tigers') - 0.12, { f: 120, gain: 0.5 }); pop_(w(12, 'tigers') - 0.12, 600, 0.8, 0.4, false);
    k.play('thud', w(12, 'cheetahs') - 0.12, { f: 130, gain: 0.5 }); pop_(w(12, 'cheetahs') - 0.12, 700, 0.8, -0.4, false);
    k.play('swish', w(13, 'same') - 0.15, { gain: 0.35 }); k.play('error', w(13, 'broken') - 0.1, { f: 'A3', gain: 0.22 }); big_(w(13, 'gene') - 0.1, 'G5');
    // meat
    pop_(w(14, 'makes') - 0.12, 700, 0.8, 0, false); k.play('ding', w(14, 'sense') - 0.1, { f: 'E6', gain: 0.3 });
    big_(w(15, 'meat') - 0.1, 'C6'); k.play('slap', w(15, 'meat') - 0.1, { gain: 0.4 });
    k.play('riser', w(16, 'barely') - 0.12, { dur: 0.5, gain: 0.2 }); k.play('error', w(16, 'sugar') - 0.1, { f: 'C5', gain: 0.18 }); pop_(w(16, 'sugar') - 0.12, 900);
    k.play('swish', w(17, 'losing') - 0.12, { gain: 0.3 }); pop_(w(17, 'cost') - 0.12, 700, 0.8, 0, false); k.play('success', w(17, 'nothing') - 0.1, { f: 'C6', gain: 0.45 }); k.play('sparkle', w(17, 'nothing'), { n: 6, gain: 0.5 });
    // end
    pop_(w(18, 'ice') - 0.15, 800, 0.8, 0, false); pop_(w(18, 'stealing') - 0.12, 700);
    for (let n = 0; ; n++) { const at = w(18, 'stealing') + n * 8 / 15; if (at > DURATION - 0.3) break; k.play('pop', at, { f: 400, gain: 0.35, minor: true }); }
    pop_(w(19, 'what') - 0.12, 700, 0.8, 0, false); big_(w(19, 'after') - 0.1, 'A5');
    k.play('success', w(19, 'after') + 0.25, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(19, 'after') + 0.25, { n: 8, gain: 0.7 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
