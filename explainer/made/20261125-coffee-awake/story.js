// ===== Kawaii Anime, vertical: "Why does coffee wake you up?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || "") + "";
  const TAU = Math.PI * 2;
  const C = {
    plum: '#4e2f33', dark: '#2f1a1f',
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
  const P_ = [{"s":0.25,"e":1.77,"text":"Coffee doesn't give you energy.","words":[["coffee",0.25],["doesnt",0.62],["give",0.98],["you",1.22],["energy",1.41]]},{"s":2.24,"e":4.11,"text":"It hides how tired you already are.","words":[["it",2.24],["hides",2.38],["how",2.71],["tired",2.91],["you",3.24],["already",3.44],["are",3.91]]},{"s":4.53,"e":7.12,"text":"Your brain makes a molecule called adenosine.","words":[["your",4.53],["brain",4.8],["makes",5.15],["a",5.49],["molecule",5.55],["called",6.1],["adenosine",6.51]]},{"s":7.48,"e":8.54,"text":"The longer you're awake,","words":[["the",7.48],["longer",7.65],["youre",7.99],["awake",8.26]]},{"s":8.8,"e":9.72,"text":"the more it piles up,","words":[["the",8.8],["more",8.98],["it",9.21],["piles",9.32],["up",9.61]]},{"s":9.8,"e":11.9,"text":"and when it locks onto your brain cells,","words":[["and",9.8],["when",10.0],["it",10.26],["locks",10.39],["onto",10.72],["your",10.98],["brain",11.25],["cells",11.58]]},{"s":11.96,"e":12.79,"text":"you feel sleepy.","words":[["you",11.96],["feel",12.16],["sleepy",12.41]]},{"s":13.14,"e":16.46,"text":"Caffeine is shaped almost exactly like adenosine.","words":[["caffeine",13.14],["is",13.77],["shaped",13.93],["almost",14.4],["exactly",14.88],["like",15.43],["adenosine",15.75]]},{"s":16.93,"e":18.68,"text":"So it jumps into those docks first,","words":[["so",16.93],["it",17.06],["jumps",17.18],["into",17.49],["those",17.74],["docks",18.06],["first",18.37]]},{"s":18.92,"e":19.79,"text":"and just sits there,","words":[["and",18.92],["just",19.08],["sits",19.3],["there",19.52]]},{"s":20.12,"e":21.49,"text":"blocking the sleepy signal.","words":[["blocking",20.12],["the",20.6],["sleepy",20.78],["signal",21.13]]},{"s":21.88,"e":23.58,"text":"But the adenosine doesn't leave.","words":[["but",21.88],["the",22.07],["adenosine",22.27],["doesnt",22.86],["leave",23.26]]},{"s":24.03,"e":25.53,"text":"It keeps piling up outside.","words":[["it",24.03],["keeps",24.17],["piling",24.51],["up",24.92],["outside",25.05]]},{"s":25.93,"e":28.33,"text":"Five hours later, half the caffeine's gone,","words":[["five",25.93],["hours",26.22],["later",26.57],["half",26.92],["the",27.21],["caffeines",27.42],["gone",28.05]]},{"s":28.64,"e":30.52,"text":"and all that tiredness hits at once.","words":[["and",28.64],["all",28.84],["that",29.03],["tiredness",29.29],["hits",29.87],["at",30.13],["once",30.26]]},{"s":30.98,"e":31.86,"text":"That's the crash.","words":[["thats",30.98],["the",31.32],["crash",31.52]]},{"s":32.18,"e":33.19,"text":"The weirdest part?","words":[["the",32.18],["weirdest",32.39],["part",32.92]]},{"s":33.68,"e":35.37,"text":"Plants didn't make caffeine for us.","words":[["plants",33.68],["didnt",34.04],["make",34.35],["caffeine",34.59],["for",35.07],["us",35.25]]},{"s":35.79,"e":37.26,"text":"It's probably bug poison.","words":[["its",35.79],["probably",36.01],["bug",36.6],["poison",36.82]]},{"s":37.57,"e":39.37,"text":"So, what time is your last coffee?","words":[["so",37.57],["what",37.71],["time",37.99],["is",38.26],["your",38.4],["last",38.68],["coffee",38.95]]}];

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: 0, e: P_[1].e, on: 'FULL FRAME at 0 s: big chibi coffee mug + IT\'S A TRICK; battery 0%, sleepy TIRED cloud hides behind the mug' },
    { id: 'brain', s: P_[2].s, e: P_[4].e, on: 'chibi brain, ADENOSINE nightcap blob, HOURS AWAKE counter, blobs pile up' },
    { id: 'docks', s: P_[5].s, e: P_[6].e, on: 'zoom to brain cell: blobs CLICK into docks, SLEEPY signal' },
    { id: 'twins', s: P_[7].s, e: P_[7].e, on: 'adenosine vs caffeine side by side, silhouettes match, LOOK-ALIKES' },
    { id: 'block', s: P_[8].s, e: P_[12].e, on: 'caffeine jumps into docks FIRST, adenosine bounces, BLOCKED; pull back as adenosine PILES UP outside' },
    { id: 'crash', s: P_[13].s, e: P_[15].e, on: 'dusk: 5 HOURS clock, caffeine bar halves, avalanche of blobs, CRASH!' },
    { id: 'plant', s: P_[16].s, e: P_[18].e, on: 'coffee branch with cherries, beetle bites and gets dizzy, BUG POISON' },
    { id: 'end', s: P_[19].s, e: P_[19].e, on: 'mug again + clock, LAST CUP?, 8 AM / 2 PM / 9 PM, comment' },
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

  // ---------- palette for this film: morning cafe, latte browns, teal, coral ----------
  const CUP = { b: '#7fd1c7', s: '#4fb3a8', rim: '#fffaf4' };
  const COF = { b: '#8a5a3c', s: '#6b4129', foam: '#e9c9a1' };
  const AD = { b: '#cdbcff', s: '#a28ef0', cap: '#6f8de8', capS: '#4f6dcc' };
  const CAF = { b: '#c98b5e', s: '#a26a43', bean: '#6b4129' };
  const BR = { b: '#ffc4d4', s: '#f39ab5', line: '#e0789a' };
  const TH2 = {
    cafe: { base: '#fff0df', dot: '#ffe1c4', acc: '#ffd0c0', kind: 'dots' },
    brain: { base: '#f6e9ff', dot: '#ead8ff', acc: '#ffd6e6', kind: 'clouds' },
    cell: { base: '#e2f6f1', dot: '#c9ece3', acc: '#fff0a6', kind: 'stars' },
    twin: { base: '#fff4dc', dot: '#ffe7b5', acc: '#ffc8d8', kind: 'hearts' },
    sky: { base: '#e5f2ff', dot: '#d1e6fb', acc: '#fff1a0', kind: 'stars' },
    leaf: { base: '#eaf7df', dot: '#d6efc4', acc: '#ffd4c8', kind: 'hearts' },
    end: { base: '#ffeae4', dot: '#ffd9cf', acc: '#fff0a6', kind: 'stars' },
  };

  // ---------- characters ----------
  function face(ctx, x, y, s, o = {}) {
    const ex = 34 * s, er = 26 * s;
    eye(ctx, x - ex, y, er * 0.8, er, o.iris || '#7a4a33', o.eyes || 'normal', -1, o.look || [0, 0]);
    eye(ctx, x + ex, y, er * 0.8, er, o.iris || '#7a4a33', o.eyes || 'normal', 1, o.look || [0, 0]);
    if (o.blush !== false) { blush(ctx, x - ex * 1.55, y + er * 0.95, 16 * s, 9 * s); blush(ctx, x + ex * 1.55, y + er * 0.95, 16 * s, 9 * s); }
    mouth(ctx, x, y + er * 1.25, 12 * s, o.mouth || 'smile');
  }
  // chibi coffee mug
  function mug(ctx, x, y, s, o = {}) {
    const t = o.t || 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // steam wisps
    ctx.save(); ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) {
      const bx = -60 + i * 60, ph = t * 2.2 + i * 1.7;
      ctx.beginPath();
      for (let k = 0; k <= 20; k++) { const u = k / 20, yy = -150 - u * 170, xx = bx + Math.sin(u * 5 + ph) * 18 * u; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); }
      ctx.strokeStyle = C.plum; ctx.lineWidth = 15; ctx.globalAlpha = 0.9; ctx.stroke();
      ctx.strokeStyle = C.white; ctx.lineWidth = 9; ctx.stroke();
    }
    ctx.restore();
    // handle
    const hp = new Path2D(); hp.ellipse(150, 10, 62, 72, 0, 0, TAU); hp.ellipse(150, 10, 32, 42, 0, 0, TAU);
    ctx.save(); ctx.fillStyle = CUP.s; ctx.fill(hp, 'evenodd'); ctx.restore(); ol(ctx, ellP(150, 10, 62, 72), 4.5); ol(ctx, ellP(150, 10, 32, 42), 4);
    // body
    const body = new Path2D(); body.moveTo(-150, -120); body.lineTo(150, -120); body.lineTo(130, 120); body.quadraticCurveTo(126, 150, 96, 150); body.lineTo(-96, 150); body.quadraticCurveTo(-126, 150, -130, 120); body.closePath();
    cel(ctx, body, o.cup || CUP.b, o.cupS || CUP.s, -10, -8, 5);
    // stripe
    ctx.save(); ctx.clip(body); ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.fillRect(-160, 92, 320, 18); ctx.restore();
    // rim + coffee
    cel(ctx, ellP(0, -120, 152, 34), CUP.rim, '#eadfd2', -2, -3, 5);
    cel(ctx, ellP(0, -116, 128, 24), COF.b, COF.s, 0, -4, 3.5);
    ctx.save(); ctx.fillStyle = COF.foam; ctx.fill(heartP(0, -118, 18)); ctx.restore();
    shine(ctx, -110, -60, 10, 34, 0.15, 0.8);
    face(ctx, 0, -10, 1.15, { eyes: o.eyes, mouth: o.mouth, look: o.look, iris: '#3f8f86' });
    ctx.restore();
  }
  // purine-shaped molecule character (hexagon + pentagon fused): adenosine (nightcap) or caffeine (bean, wide eyes)
  function molPaths(s) {
    const hex = [], pen = [];
    for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * TAU / 6; hex.push([-28 * s + Math.cos(a) * 64 * s, Math.sin(a) * 64 * s]); }
    for (let i = 0; i < 5; i++) { const a = Math.PI + i * TAU / 5; pen.push([58 * s + Math.cos(a) * 50 * s, Math.sin(a) * 50 * s]); }
    return [roundPoly(hex, 16 * s), roundPoly(pen, 13 * s)];
  }
  function mol(ctx, x, y, s, kind, o = {}) {
    const t = o.t || 0, k = kind === 'ad' ? AD : CAF;
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(o.sx || 1, o.sy || 1);
    const [h, p] = molPaths(s);
    if (o.ghost) { ctx.save(); ctx.setLineDash([14 * s, 12 * s]); ctx.lineWidth = 6; ctx.strokeStyle = o.ghost; ctx.stroke(h); ctx.stroke(p); ctx.restore(); ctx.restore(); return; }
    union(ctx, [h, p], k.b, 4.5);
    ctx.save(); ctx.beginPath(); ctx.rect(-200, -200, 400, 400); ctx.clip(); ctx.globalAlpha = 0.9; ctx.fillStyle = k.s;
    ctx.save(); ctx.clip(h); ctx.fill(ellP(-28 * s + 30 * s, 34 * s, 70 * s, 40 * s)); ctx.restore();
    ctx.save(); ctx.clip(p); ctx.fill(ellP(58 * s + 20 * s, 30 * s, 50 * s, 30 * s)); ctx.restore();
    ctx.restore();
    shine(ctx, -62 * s, -30 * s, 9 * s, 15 * s, -0.5, 0.85);
    const fx = -28 * s, fy = 4 * s;
    if (kind === 'ad') {
      // nightcap
      ctx.save(); ctx.translate(fx - 4 * s, -46 * s); ctx.rotate(-0.25 + Math.sin(t * 2.4 + (o.ph || 0)) * 0.06);
      const cap = new Path2D(); cap.moveTo(-50 * s, 6 * s); cap.quadraticCurveTo(-10 * s, -70 * s, 70 * s, -50 * s); cap.quadraticCurveTo(20 * s, -30 * s, 46 * s, 6 * s); cap.closePath();
      cel(ctx, cap, AD.cap, AD.capS, -3, -3, 4); cel(ctx, rrP(-56 * s, -2 * s, 108 * s, 20 * s, 10 * s), C.white, C.creamS, -2, -2, 4);
      cel(ctx, ellP(72 * s, -50 * s, 13 * s, 13 * s), C.white, C.creamS, -2, -2, 3.5);
      ctx.restore();
    } else {
      // coffee bean on the pentagon
      ctx.save(); ctx.translate(58 * s, -4 * s); ctx.rotate(0.5);
      cel(ctx, ellP(0, 0, 18 * s, 26 * s), CAF.bean, '#4f2e1c', -2, -2, 3.5);
      ctx.strokeStyle = C.plum; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.moveTo(0, -22 * s); ctx.quadraticCurveTo(-8 * s, 0, 0, 22 * s); ctx.stroke();
      ctx.restore();
    }
    const ex = 22 * s, er = 17 * s, ek = o.eyes || (kind === 'ad' ? 'blink' : 'normal');
    eye(ctx, fx - ex, fy, er * 0.8, er, kind === 'ad' ? '#6a55c9' : '#c25a2a', ek, -1, o.look || [0, 0]);
    eye(ctx, fx + ex, fy, er * 0.8, er, kind === 'ad' ? '#6a55c9' : '#c25a2a', ek, 1, o.look || [0, 0]);
    blush(ctx, fx - ex * 1.7, fy + er * 1.0, 10 * s, 6 * s); blush(ctx, fx + ex * 1.7, fy + er * 1.0, 10 * s, 6 * s);
    mouth(ctx, fx, fy + er * 1.3, 8 * s, o.mouth || (kind === 'ad' ? 'w' : 'smile'));
    ctx.restore();
  }
  // brain character
  function brainP(s) {
    const p = new Path2D();
    [[-120, -20, 90], [-60, -90, 90], [40, -100, 95], [125, -35, 85], [110, 55, 80], [10, 60, 95], [-100, 60, 80]].forEach(([x, y, r]) => { p.moveTo((x + r) * s, y * s); p.arc(x * s, y * s, r * s, 0, TAU); });
    return p;
  }
  function brain(ctx, x, y, s, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(o.sx || 1, o.sy || 1);
    const p = brainP(s);
    union(ctx, [p], BR.b, 5);
    ctx.save(); ctx.clip(p); ctx.fillStyle = BR.s; ctx.fill(ellP(60 * s, 110 * s, 230 * s, 80 * s)); ctx.restore();
    // folds
    ctx.save(); ctx.strokeStyle = BR.line; ctx.lineWidth = 7 * s; ctx.lineCap = 'round';
    [[[-170, -40], [-130, -70], [-150, -110]], [[-40, -170], [-20, -120], [-60, -100]], [[90, -170], [70, -120], [110, -95]], [[200, -10], [160, -20], [170, 40]], [[-180, 70], [-140, 50], [-140, 100]]].forEach((q) => { ctx.beginPath(); ctx.moveTo(q[0][0] * s, q[0][1] * s); ctx.quadraticCurveTo(q[1][0] * s, q[1][1] * s, q[2][0] * s, q[2][1] * s); ctx.stroke(); });
    ctx.restore();
    shine(ctx, -110 * s, -110 * s, 26 * s, 14 * s, -0.6, 0.8);
    face(ctx, 0, 10 * s, s * 1.3, { eyes: o.eyes, mouth: o.mouth, look: o.look, iris: '#c0517c' });
    ctx.restore();
  }
  // cell membrane with receptor docks (cups that fit the molecule's bottom)
  const DOCKX = [270, 540, 810];
  function membrane(ctx, y, t, col = '#ffd9c7', colS = '#f2b39a', glow = -1) {
    ctx.save();
    // inside of the cell
    const band = new Path2D(); band.moveTo(-420, y); for (let x = -420; x <= W + 420; x += 20) band.lineTo(x, y + Math.sin(x * 0.012 + t * 1.2) * 10); band.lineTo(W + 420, HH + 420); band.lineTo(-420, HH + 420); band.closePath();
    cel(ctx, band, col, colS, 0, -14, 5);
    // little heads of the lipid layer
    for (let x = -390; x < W + 400; x += 44) { const yy = y + Math.sin(x * 0.012 + t * 1.2) * 10; ctx.fillStyle = C.white; ctx.fill(ellP(x, yy + 22, 13, 13)); ol(ctx, ellP(x, yy + 22, 13, 13), 2.5); }
    ctx.restore();
    DOCKX.forEach((dx, i) => {
      const yy = y + Math.sin(dx * 0.012 + t * 1.2) * 10;
      const cup = new Path2D(); cup.moveTo(dx - 120, yy - 70); cup.lineTo(dx - 80, yy - 70); cup.quadraticCurveTo(dx - 76, yy - 10, dx, yy - 8); cup.quadraticCurveTo(dx + 76, yy - 10, dx + 80, yy - 70); cup.lineTo(dx + 120, yy - 70); cup.quadraticCurveTo(dx + 116, yy + 60, dx, yy + 62); cup.quadraticCurveTo(dx - 116, yy + 60, dx - 120, yy - 70); cup.closePath();
      cel(ctx, cup, glow === i ? C.butterD : '#8fd9cf', '#56b8ac', -4, -4, 4.5);
    });
  }
  const dockY = (y, dx, t) => y + Math.sin(dx * 0.012 + t * 1.2) * 10 - 52;
  // zzz floating
  function zzz(ctx, x, y, t, s = 1, ph = 0) {
    for (let i = 0; i < 3; i++) { const u = ((t * 0.6 + i / 3 + ph) % 1); ctx.save(); ctx.globalAlpha = Math.min(1, (1 - u) * 2); kText(ctx, 'z', x + u * 60 * s + i * 14 * s, y - u * 120 * s, (34 + i * 12) * s, { fill: AD.b, line: C.white, outer: C.plum, lw: 0.2, shadow: false }); ctx.restore(); }
  }
  function speedLines(ctx, cx, cy, t, n = 26, col = C.plum, r0 = 330) {
    const r = H.rng(5);
    ctx.save(); ctx.strokeStyle = col; ctx.lineCap = 'round';
    for (let i = 0; i < n; i++) { const a = r() * TAU, ph = (t * 3 + r()) % 1, a0 = r0 + r() * 120 + ph * 80, a1 = a0 + 120 + r() * 160; ctx.globalAlpha = 0.25 + 0.3 * r(); ctx.lineWidth = 3 + r() * 6; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * a0, cy + Math.sin(a) * a0); ctx.lineTo(cx + Math.cos(a) * a1, cy + Math.sin(a) * a1); ctx.stroke(); }
    ctx.restore();
  }
  function battery(ctx, x, y, s, pct, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(0.12);
    cel(ctx, rrP(-90, -50, 170, 100, 22), C.white, C.creamS, -4, -4, 5);
    cel(ctx, rrP(82, -20, 22, 40, 8), C.white, C.creamS, -2, -2, 4);
    if (pct > 0) { ctx.fillStyle = C.mintD; ctx.fill(rrP(-76, -36, 142 * pct, 72, 12)); }
    else { ctx.fillStyle = C.red; ctx.globalAlpha = 0.5 + 0.5 * Math.abs(Math.sin(t * 6)); ctx.fill(rrP(-76, -36, 18, 72, 8)); ctx.globalAlpha = 1; }
    kText(ctx, '0%', 0, 24, 66, { fill: C.white, line: C.red, outer: C.plum, ow: 0.1, lw: 0.18 });
    ctx.restore();
  }
  // sleepy purple cloud (the tiredness)
  function tiredCloud(ctx, x, y, s, t, eyes = 'blink') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    union(ctx, [cloudP(0, 0, 1.3)], AD.b, 5);
    ctx.save(); ctx.clip(cloudP(0, 0, 1.3)); ctx.fillStyle = AD.s; ctx.fill(ellP(30, 60, 140, 40)); ctx.restore();
    face(ctx, -10, 0, 0.9, { eyes, mouth: 'o', iris: '#6a55c9' });
    ctx.restore();
  }
  function clockFace(ctx, x, y, r, ang, fill = C.white) {
    cel(ctx, ellP(x, y, r, r), fill, C.creamS, -6, -6, 6);
    for (let i = 0; i < 12; i++) { const a = i * TAU / 12; ctx.fillStyle = C.plum; ctx.fill(ellP(x + Math.cos(a) * r * 0.82, y + Math.sin(a) * r * 0.82, i % 3 ? 6 : 11, i % 3 ? 6 : 11)); }
    ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum;
    ctx.rotate(ang); ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -r * 0.68); ctx.stroke();
    ctx.rotate(-ang + ang / 12); ctx.lineWidth = 18; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -r * 0.42); ctx.stroke();
    ctx.restore(); ctx.fillStyle = C.pinkD; ctx.fill(ellP(x, y, 16, 16)); ol(ctx, ellP(x, y, 16, 16), 4);
  }
  function leaf(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    const p = new Path2D(); p.moveTo(0, 0); p.quadraticCurveTo(70 * s, -60 * s, 200 * s, 0); p.quadraticCurveTo(70 * s, 60 * s, 0, 0); p.closePath();
    cel(ctx, p, '#7fcf86', '#4fa860', -4, -6, 4.5);
    ctx.strokeStyle = '#3f8d4f'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(10 * s, 0); ctx.lineTo(180 * s, 0); ctx.stroke();
    ctx.restore();
  }
  function cherry(ctx, x, y, s) { cel(ctx, ellP(x, y, 34 * s, 30 * s), '#ff6b6b', '#d9434f', -4, -4, 4.5); shine(ctx, x - 12 * s, y - 10 * s, 8 * s, 5 * s, -0.6); }
  function beetle(ctx, x, y, s, t, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.flip || 1), s); ctx.rotate(o.rot || 0);
    ctx.strokeStyle = C.plum; ctx.lineWidth = 7; ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) { const k = Math.sin(t * 14 + i * 2) * (o.walk ? 10 : 0); ctx.beginPath(); ctx.moveTo(-40 + i * 40, 30); ctx.lineTo(-56 + i * 40 + k, 74); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(-96, -30); ctx.quadraticCurveTo(-120, -80, -100, -100); ctx.moveTo(-80, -38); ctx.quadraticCurveTo(-80, -90, -56, -104); ctx.stroke();
    cel(ctx, ellP(15, 0, 82, 56), '#6fb0ff', '#3f84d6', -6, -6, 5);
    ctx.strokeStyle = C.plum; ctx.lineWidth = 4.5; ctx.beginPath(); ctx.moveTo(15, -56); ctx.lineTo(15, 56); ctx.stroke();
    [[-10, -20], [45, 10], [-5, 28], [50, -28]].forEach(([a, b]) => { ctx.fillStyle = '#2f5fa8'; ctx.fill(ellP(a, b, 10, 10)); });
    shine(ctx, -20, -34, 16, 8, -0.4);
    cel(ctx, ellP(-78, 0, 50, 46), '#9fcbff', '#6fa6ea', -4, -4, 5);
    eye(ctx, -96, -6, 12, 15, '#2f5fa8', o.eyes || 'normal', -1, [-0.6, 0]); eye(ctx, -64, -6, 12, 15, '#2f5fa8', o.eyes || 'normal', 1, [-0.6, 0]);
    mouth(ctx, -80, 22, 8, o.mouth || 'smile');
    ctx.restore();
  }
  function stamp(ctx, str, x, y, size, t, t0, col = C.red, rot = -0.12) {
    const p = pop(t, t0, 1.5); if (p.s <= 0) return;
    const sc = 1 + 1.4 * Math.max(0, 1 - (t - t0) / 0.12);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(sc * p.sx, sc * p.sy);
    ctx.font = `700 ${size}px ${FONT}`; const tw = ctx.measureText(str).width + size * 0.8;
    ctx.lineWidth = 12; ctx.strokeStyle = col; ctx.strokeRect(-tw / 2, -size * 0.8, tw, size * 1.15);
    kText(ctx, str, 0, size * 0.18, size, { fill: C.white, line: col, outer: C.plum, ow: 0.08, lw: 0.18 });
    ctx.restore();
  }
  // sleepy-signal wave going down into the cell
  function wave(ctx, x, y0, y1, t, col, prog) {
    if (prog <= 0) return;
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 22; ctx.beginPath();
    const yE = H.lerp(y0, y1, prog);
    for (let y = y0; y <= yE; y += 6) { const xx = x + Math.sin((y - t * 300) * 0.04) * 26; y === y0 ? ctx.moveTo(xx, y) : ctx.lineTo(xx, y); }
    ctx.stroke(); ctx.strokeStyle = col; ctx.lineWidth = 12; ctx.stroke(); ctx.restore();
  }

  // ---------- scenes ----------
  const HOOKT = 'IT\'S A TRICK';
  const scenes = [
    // 0: HOOK. Full frame at t=0: big finished mug + hook words, motion from frame one.
    { s: 0, draw(ctx, t) {
      bgV(ctx, t, TH2.cafe, 11);
      // window with morning sun
      ctx.save(); const win = rrP(170, 600, 740, 560, 60);
      cel(ctx, win, '#ffe9a8', '#ffd47a', 0, -20, 6);
      ctx.save(); ctx.clip(win); ctx.fillStyle = '#ffb88a'; ctx.fill(ellP(540, 1150, 260, 260)); ctx.fillStyle = '#ffd6a3'; ctx.fill(ellP(540, 1150, 190, 190)); ctx.restore();
      ctx.strokeStyle = C.plum; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(540, 600); ctx.lineTo(540, 1160); ctx.moveTo(170, 880); ctx.lineTo(910, 880); ctx.stroke(); ol(ctx, win, 6);
      ctx.restore();
      // table
      cel(ctx, rrP(-40, 1420, W + 80, 600, 30), '#e8b27e', '#c98b58', 0, -16, 6);
      twinkles(ctx, W, HH, t, 3, 10, (x, y) => (x > 150 && x < 930 && y > 560 && y < 1450) || y < 560);
      const hide = t > w(1, 'hides') - 0.15;
      // tiredness peeks from behind the mug
      if (hide) { const u = H.ease.back(H.clamp((t - w(1, 'hides') + 0.15) / 0.45)); tiredCloud(ctx, 800 + (1 - u) * -200, 1120 - u * 40, 0.95, t); zzz(ctx, 900, 980, t, 1); }
      const sq = squash(t, 0, 0.12), bb = bob(t, 0, 10);
      const e0 = w(0, 'energy') - 0.12;
      const eyes = hide ? 'normal' : (t > e0 ? 'shock' : 'star');
      ctx.save(); ctx.translate(500, 1280 + bb); ctx.rotate(Math.sin(t * 2.2) * 0.04); ctx.scale(sq[0], sq[1]);
      mug(ctx, 0, 0, 1.75, { t, eyes, mouth: hide ? 'w' : (t > e0 ? 'O' : 'smile'), look: hide ? [0.8, 0] : [0, 0] });
      ctx.restore();
      if (hide) { sweat(ctx, 300, 960, 1.3); label(ctx, 'TIRED', 860, 1420, 62, t, w(1, 'tired') - 0.12, C.lav); kana(ctx, 'shh!', 250, 860, 70, -0.2, pop(t, w(1, 'hides')).s, C.mint); }
      if (t > e0) { const p = pop(t, e0, 1.3); ctx.save(); ctx.translate(820, 700); ctx.scale(p.sx, p.sy); battery(ctx, 0, 0, 1.2, 0, t); ctx.restore(); kana(ctx, '!?', 230, 720, 100, -0.15, pop(t, e0 + 0.05).s, C.butter); }
      // hook words: full size + full opacity from frame 0
      ctx.save(); ctx.translate(540, 400); ctx.rotate(Math.sin(t * 3) * 0.015);
      kText(ctx, HOOKT, 0, 0, 132, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
      kText(ctx, 'COFFEE', 540, 530, 92, { fill: C.butter, line: COF.b, outer: C.plum, ow: 0.1, lw: 0.17 });
      sparkle(ctx, 120 + Math.sin(t * 3) * 6, 330, 26 + 6 * Math.sin(t * 5), C.butter, 0, 4);
      sparkle(ctx, 960, 470, 22 + 6 * Math.sin(t * 4 + 1), C.white, 0, 4);
    } },

    // 1: the brain makes adenosine, it piles up the longer you're awake
    { s: P_[2].s, draw(ctx, t) {
      bgV(ctx, t, TH2.brain, 21);
      const zoom = 1 + 0.06 * H.clamp((t - P_[2].s) / 5);
      ctx.save(); ctx.translate(540, 1000); ctx.scale(zoom, zoom); ctx.translate(-540, -1000);
      const p0 = P_[3].s - 0.1, n = t > p0 ? Math.min(14, Math.floor((t - p0) / 0.16) + 1) : 0;
      const tired = H.clamp((t - p0) / 2.2);
      const sq = squash(t, P_[2].s + 0.05, 0.25);
      brain(ctx, 540, 960, 1.45, { eyes: tired > 0.7 ? 'blink' : 'normal', mouth: tired > 0.7 ? 'wobble' : 'smile', sx: sq[0], sy: sq[1] });
      if (tired > 0.7) zzz(ctx, 790, 680, t, 1.3);
      // pile of adenosine blobs heaping up at the brain's base
      const r = H.rng(77);
      for (let i = 0; i < n; i++) {
        const row = i < 5 ? 0 : i < 9 ? 1 : i < 12 ? 2 : 3, inRow = [0, 5, 9, 12][row], k = i - inRow, cnt = [5, 4, 3, 2][row];
        const x = 540 + (k - (cnt - 1) / 2) * 190, y = 1500 - row * 105;
        const p = pop(t, p0 + i * 0.16, 1.2); const fall = Math.max(0, 1 - (t - p0 - i * 0.16) / 0.25) * 300;
        mol(ctx, x, y - fall, 0.95, 'ad', { t, sx: p.sx, sy: p.sy, ph: i, rot: (r() - 0.5) * 0.3 });
      }
      ctx.restore();
      // adenosine intro card
      const ap = pop(t, w(2, 'molecule') - 0.15, 1.1);
      if (ap.s > 0 && t < P_[3].s + 0.3) { const k = popOut(t, P_[3].s + 0.1, 0.25); ctx.save(); ctx.translate(820, 640); ctx.scale(ap.sx * k, ap.sy * k); mol(ctx, 0, 0, 1.4, 'ad', { t, eyes: 'happy' }); ctx.restore(); }
      big(ctx, 'ADENOSINE', 540, 420, 128, t, w(2, 'adenosine') - 0.15, { line: AD.s, fill: C.white });
      if (t > P_[3].s - 0.15) {
        const hrs = Math.min(16, Math.max(1, Math.round(1 + 15 * H.clamp((t - P_[3].s) / 2.0))));
        label(ctx, 'HOURS AWAKE', 540, 560, 56, t, P_[3].s - 0.12, C.butter);
        numPop(ctx, String(hrs), 220, 660, 130, t, P_[3].s - 0.1, { line: C.pinkD, rot: -0.1 });
      }
      label(ctx, 'PILING UP!', 820, 1250, 60, t, w(4, 'piles') - 0.12, C.pink);
    } },

    // 2: zoom into a brain cell: adenosine clicks into the docks -> sleepy
    { s: P_[5].s, draw(ctx, t) {
      bgV(ctx, t, TH2.cell, 31);
      const z = 1.25 - 0.25 * H.ease.out(H.clamp((t - P_[5].s) / 0.8));
      ctx.save(); ctx.translate(540, 1150); ctx.scale(z, z); ctx.translate(-540, -1150);
      const my = 1250, sleepy = t > w(6, 'sleepy') - 0.12;
      membrane(ctx, my, t);
      DOCKX.forEach((dx, i) => {
        const t0 = w(5, 'locks') - 0.35 + i * 0.18, u = H.clamp((t - t0) / 0.35);
        const yE = dockY(my, dx, t), y = H.lerp(560, yE, H.ease.in(u)) + (u >= 1 ? 0 : 0);
        const sq = squash(t, t0 + 0.35, 0.25);
        mol(ctx, dx - 15, y, 0.95, 'ad', { t, sx: sq[0], sy: sq[1], ph: i, eyes: sleepy ? 'blink' : 'happy', mouth: sleepy ? 'o' : 'w' });
        impactLines(ctx, dx, yE + 20, 90, t, t0 + 0.35, 8);
        if (sleepy) wave(ctx, dx, my + 70, 1640, t, AD.s, grow(t, w(6, 'sleepy') - 0.12 + i * 0.08, 0.5));
      });
      ctx.restore();
      label(ctx, 'BRAIN CELL', 540, 1560, 60, t, w(5, 'cells') - 0.12, C.peach);
      label(ctx, 'DOCKS', 830, 960, 58, t, w(5, 'onto') - 0.12, C.mint);
      big(ctx, 'CLICK!', 540, 470, 150, t, w(5, 'locks') - 0.12, { line: CUP.s, fill: C.white });
      if (sleepy) { big(ctx, 'SLEEPY', 540, 660, 130, t, w(6, 'sleepy') - 0.12, { line: AD.s, fill: AD.b }); zzz(ctx, 860, 600, t, 1.4); }
    } },

    // 3: caffeine is a look-alike
    { s: P_[7].s, draw(ctx, t) {
      bgV(ctx, t, TH2.twin, 41);
      twinkles(ctx, W, HH, t, 9, 10, (x, y) => y > 800 && y < 1400);
      const ap = pop(t, P_[7].s + 0.02, 1), cp = pop(t, w(7, 'caffeine') + 0.05, 1.3);
      const fl = Math.sin(t * 2) * 10;
      if (ap.s > 0) mol(ctx, 300, 1080 + fl, 2.0, 'ad', { t, sx: ap.sx, sy: ap.sy, eyes: 'blink' });
      if (cp.s > 0) mol(ctx, 790, 1080 - fl, 2.0, 'caf', { t, sx: cp.sx, sy: cp.sy, eyes: t > w(7, 'exactly') - 0.1 ? 'star' : 'normal', look: [-0.6, 0] });
      // ghost outline slides from adenosine onto caffeine: they match
      const g0 = w(7, 'shaped') - 0.12, gu = H.ease.inOut(H.clamp((t - g0) / 1.0));
      if (t > g0 && t < w(7, 'adenosine') + 0.4) mol(ctx, H.lerp(300, 790, gu), 1080 - fl * (gu * 2 - 1), 2.0, 'ad', { ghost: C.pinkD });
      if (t > g0 + 1.0) { const k = pop(t, g0 + 1.0, 1.4); ctx.save(); ctx.translate(545, 1100); ctx.scale(k.sx, k.sy); kText(ctx, '≈', 0, 30, 170, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore(); }
      label(ctx, 'ADENOSINE', 300, 1340, 52, t, P_[7].s + 0.1, C.lav);
      label(ctx, 'CAFFEINE', 790, 1340, 56, t, w(7, 'caffeine') - 0.1, C.peach);
      big(ctx, 'LOOK-ALIKES', 540, 470, 120, t, w(7, 'almost') - 0.15, { line: C.pinkD, fill: C.white });
      label(ctx, 'ALMOST TWINS', 540, 640, 58, t, w(7, 'exactly') - 0.12, C.butter);
    } },

    // 4: caffeine jumps into the docks first; adenosine bounces off; pull back as it piles up outside
    { s: P_[8].s, draw(ctx, t) {
      bgV(ctx, t, TH2.sky, 51);
      const out0 = P_[11].s - 0.1, pull = H.ease.inOut(H.clamp((t - out0) / 1.2));
      const z = 1 - 0.3 * pull;
      ctx.save(); ctx.translate(540, 1500); ctx.scale(z, z); ctx.translate(-540, -1500);
      const my = 1300;
      membrane(ctx, my, t, '#ffe2d0', '#f2b99f');
      const j0 = w(8, 'jumps') - 0.2;
      // caffeine dives in with speed lines
      DOCKX.forEach((dx, i) => {
        const t0 = j0 + i * 0.15, u = H.clamp((t - t0) / 0.3), yE = dockY(my, dx, t);
        if (t < t0) return;
        const x = H.lerp(dx + (i - 1) * 200, dx - 15, H.ease.in(u)), y = H.lerp(500, yE, H.ease.in(u));
        const sq = squash(t, t0 + 0.3, 0.3);
        mol(ctx, x, y, 0.95, 'caf', { t, sx: sq[0], sy: sq[1], eyes: t > w(9, 'sits') - 0.1 ? 'happy' : 'normal', mouth: t > w(9, 'sits') - 0.1 ? 'w' : 'smile' });
        impactLines(ctx, dx, yE + 20, 90, t, t0 + 0.3, 8);
      });
      if (t > j0 && t < j0 + 0.8) speedLines(ctx, 540, 1150, t, 30, C.plum, 380);
      // adenosine arrives and bounces on top; crowd grows after "doesn't leave"
      const a0 = w(9, 'sits') - 0.1;
      const crowd = t > out0 ? Math.min(18, 3 + Math.floor((t - out0) / 0.18)) : 3;
      const r = H.rng(31);
      for (let i = 0; i < crowd; i++) {
        const row = Math.floor(i / 5), k = i % 5;
        const x = 140 + k * 200 + (row % 2) * 100 + (r() - 0.5) * 30, yBase = 1110 - row * 140;
        const t0 = i < 3 ? a0 + i * 0.2 : out0 + (i - 3) * 0.18;
        if (t < t0) continue;
        const u = t - t0, fall = Math.max(0, 1 - u / 0.3);
        const bounce = Math.abs(Math.sin(u * 7)) * Math.exp(-u * 3) * 50;
        const shake = t > w(12, 'piling') - 0.1 ? Math.sin(t * 20 + i) * 3 : 0;
        mol(ctx, x + shake, yBase - fall * 600 - bounce, 0.85, 'ad', { t, ph: i, eyes: i % 3 === 0 ? 'squeeze' : 'blink', mouth: 'wobble', rot: (r() - 0.5) * 0.25 });
        if (i < 3 && u < 1.2) sweat(ctx, x + 70, yBase - 100 - bounce, 0.8);
      }
      if (t > w(12, 'piling') - 0.1) { vein(ctx, 200, 640, 1.6); vein(ctx, 880, 560, 1.4); }
      ctx.restore();
      label(ctx, 'FIRST!', 830, 900, 64, t, w(8, 'first') - 0.12, C.butter, out0);
      if (t < out0) stamp(ctx, 'BLOCKED', 540, 620, 120, t, w(10, 'blocking') - 0.12, C.red);
      if (t > w(10, 'signal') - 0.15 && t < out0) { const p = pop(t, w(10, 'signal') - 0.12, 1.4); ctx.save(); ctx.translate(540, 1560); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, 'NO SLEEPY SIGNAL', C.mint, 1, 50); ctx.restore(); }
      if (t > out0) { big(ctx, 'STILL THERE', 540, 420, 120, t, w(11, 'leave') - 0.15, { line: AD.s, fill: C.white }); }
      label(ctx, 'PILING UP', 540, 560, 64, t, w(12, 'piling') - 0.12, C.pink);
    } },

    // 5: dusk: five hours later, half the caffeine is gone, the crash
    { s: P_[13].s, draw(ctx, t) {
      // muted dusk palette for the drop
      const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#9fb0d6'); g.addColorStop(0.55, '#e8b9b5'); g.addColorStop(1, '#f5d3b8');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
      ctx.save(); ctx.globalAlpha = 0.5; ctx.fillStyle = C.white; const r0 = H.rng(4); for (let i = 0; i < 4; i++) ctx.fill(cloudP(((r0() * 1300 + t * 14) % 1400) - 160, 200 + r0() * 1300, 1.2)); ctx.restore();
      const crash = w(15, 'crash') - 0.12, hits = w(14, 'hits') - 0.15;
      const shk = t > crash && t < crash + 0.4 ? Math.sin(t * 70) * 14 * (1 - (t - crash) / 0.4) : 0;
      ctx.save(); ctx.translate(shk, -shk * 0.5);
      // clock spinning 5 hours
      const c0 = P_[13].s, ang = H.ease.inOut(H.clamp((t - c0) / 1.6)) * TAU * 5;
      const cp = pop(t, c0 + 0.02, 0.9);
      if (t < hits + 0.2) { ctx.save(); ctx.translate(540, 900); ctx.scale(cp.sx, cp.sy); clockFace(ctx, 0, 0, 230, ang); ctx.restore(); if (t > c0 && t < c0 + 1.6) speedLines(ctx, 540, 900, t, 20, C.white, 280); }
      // caffeine bar halves
      const half = t > w(13, 'half') - 0.12;
      if (t < hits + 0.2) {
        const bp = pop(t, w(13, 'later') - 0.1, 1);
        if (bp.s > 0) {
          ctx.save(); ctx.translate(540, 1290); ctx.scale(bp.sx, bp.sy);
          cel(ctx, rrP(-300, -50, 600, 100, 50), C.white, C.creamS, -4, -4, 5);
          const fillW = 572 * (half ? H.lerp(1, 0.5, H.ease.out(H.clamp((t - w(13, 'half') + 0.12) / 0.6))) : 1);
          ctx.fillStyle = CAF.b; ctx.fill(rrP(-286, -36, fillW, 72, 36));
          ctx.restore();
          label(ctx, 'CAFFEINE', 540, 1420, 54, t, w(13, 'later') - 0.05, C.peach);
          if (half) numPop(ctx, '½ GONE', 820, 1180, 90, t, w(13, 'half') - 0.1, { line: CAF.s, rot: 0.1 });
          // two caffeine blobs hop away
          if (t > w(13, 'gone') - 0.3) { const u = t - w(13, 'gone') + 0.3; mol(ctx, 760 + u * 400, 1500 - Math.abs(Math.sin(u * 6)) * 120, 0.8, 'caf', { t, eyes: 'happy' }); }
        }
      }
      if (t < hits) big(ctx, '5 HOURS', 540, 440, 140, t, w(13, 'five') - 0.15, { line: '#6f86c2', fill: C.white });
      // the avalanche
      if (t > hits - 0.3) {
        const sl = t > crash;
        const r = H.rng(12);
        for (let i = 0; i < 16; i++) {
          const t0 = hits - 0.3 + i * 0.05, u = t - t0; if (u < 0) continue;
          const x = 120 + r() * 840, yE = 1080 + r() * 420, y = Math.min(yE, -150 + u * u * 4200);
          mol(ctx, x, y, 0.85, 'ad', { t, ph: i, rot: (r() - 0.5) * 0.6, eyes: 'blink' });
        }
        const bp = pop(t, hits - 0.2, 1);
        ctx.save(); ctx.translate(540, 1560); ctx.scale(bp.sx, bp.sy); ctx.rotate(sl ? 0.18 : 0);
        brain(ctx, 0, 0, 0.9, { eyes: sl ? 'swirl' : 'shock', mouth: sl ? 'wobble' : 'O' });
        ctx.restore();
        if (sl) { zzz(ctx, 760, 1360, t, 1.4); }
        if (t > hits) big(ctx, 'ALL AT ONCE', 540, 620, 96, t, hits, { line: AD.s, fill: C.white });
      }
      if (t > crash) { impactLines(ctx, 540, 860, 240, t, crash, 14, C.plum); const p = pop(t, crash, 1.5); ctx.save(); ctx.translate(540, 900); ctx.rotate(-0.08); ctx.scale(p.sx, p.sy); kText(ctx, 'CRASH!', 0, 0, 200, { fill: C.butter, line: C.red, outer: C.plum, ow: 0.08, lw: 0.17 }); ctx.restore(); }
      ctx.restore();
    } },

    // 6: plants make caffeine as a natural bug poison
    { s: P_[16].s, draw(ctx, t) {
      bgV(ctx, t, TH2.leaf, 61);
      const sway = Math.sin(t * 1.3) * 0.03;
      ctx.save(); ctx.translate(540, 1150); ctx.rotate(sway); ctx.translate(-540, -1150);
      // branch
      ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 40; ctx.beginPath(); ctx.moveTo(-40, 1450); ctx.quadraticCurveTo(500, 1200, 1120, 1000); ctx.stroke(); ctx.strokeStyle = '#a7774f'; ctx.lineWidth = 30; ctx.stroke(); ctx.restore();
      leaf(ctx, 170, 1350, 1.4, -2.2); leaf(ctx, 330, 1290, 1.3, 0.7); leaf(ctx, 620, 1180, 1.5, -2.0); leaf(ctx, 780, 1120, 1.3, 0.5); leaf(ctx, 1000, 1040, 1.2, -1.9);
      [[420, 1280], [470, 1310], [445, 1240], [700, 1200], [745, 1225], [725, 1160]].forEach(([x, y], i) => cherry(ctx, x, y + 20, 1.05));
      ctx.restore();
      // caffeine peeks out of a cherry on "caffeine"
      const cp = pop(t, w(17, 'caffeine') - 0.15, 1.2);
      if (cp.s > 0) mol(ctx, 600, 940 + bob(t, 0, 6), 1.1, 'caf', { t, sx: cp.sx, sy: cp.sy, eyes: t > w(18, 'poison') - 0.1 ? 'happy' : 'normal', look: [0.6, 0] });
      // the beetle walks in, nibbles, gets dizzy
      const b0 = P_[17].s, bite = w(18, 'bug') - 0.15;
      const bx = H.lerp(1250, 850, H.ease.out(H.clamp((t - b0) / 1.6)));
      const dizzy = t > bite + 0.2;
      beetle(ctx, bx + (dizzy ? Math.sin(t * 9) * 12 : 0), 1030, 1.3, t, { walk: t < b0 + 1.6, eyes: dizzy ? 'swirl' : 'normal', mouth: dizzy ? 'wobble' : (t > bite ? 'O' : 'smile'), rot: dizzy ? Math.sin(t * 6) * 0.12 : 0 });
      if (dizzy) { for (let i = 0; i < 3; i++) { const a = t * 4 + i * TAU / 3; sparkle(ctx, bx - 70 + Math.cos(a) * 70, 930 + Math.sin(a) * 18, 16, C.butter, 0, 3); } }
      if (t > bite && t < bite + 0.4) impactLines(ctx, bx - 80, 1080, 60, t, bite, 8);
      big(ctx, 'WEIRDEST PART', 540, 420, 104, t, w(16, 'weirdest') - 0.15, { line: C.mintD, fill: C.white });
      label(ctx, 'NOT FOR US', 540, 570, 60, t, w(17, 'us') - 0.15, C.butter, w(18, 'bug') - 0.3);
      if (t > w(18, 'bug') - 0.3) big(ctx, 'BUG POISON', 540, 600, 118, t, w(18, 'bug') - 0.15, { line: C.red, fill: C.butter });
      label(ctx, 'PROBABLY', 300, 1560, 52, t, w(18, 'probably') - 0.12, C.lav);
    } },

    // 7: loop back: what time is your last coffee?
    { s: P_[19].s, draw(ctx, t) {
      bgV(ctx, t, TH2.end, 71);
      twinkles(ctx, W, HH, t, 23, 10, (x, y) => y > 700 && y < 1500);
      const mp = pop(t, P_[19].s + 0.02, 1);
      ctx.save(); ctx.translate(380, 1250 + bob(t, 0, 8)); ctx.scale(mp.sx, mp.sy); mug(ctx, 0, 0, 1.25, { t, eyes: 'normal', look: [0.7, -0.3], mouth: 'smile', cup: '#ffb3a7', cupS: '#f08f82' }); ctx.restore();
      const cl = pop(t, P_[19].s + 0.15, 1);
      ctx.save(); ctx.translate(800, 980); ctx.scale(cl.sx, cl.sy); clockFace(ctx, 0, 0, 150, t * 2.5); ctx.restore();
      big(ctx, 'LAST CUP?', 540, 420, 140, t, w(19, 'last') - 0.2, { line: C.pinkD, fill: C.white });
      label(ctx, '8 AM', 230, 620, 60, t, w(19, 'time') - 0.12, C.butter);
      label(ctx, '2 PM', 540, 620, 60, t, w(19, 'time') + 0.05, C.mint);
      label(ctx, '9 PM', 850, 620, 60, t, w(19, 'time') + 0.22, C.lav);
      label(ctx, 'COMMENT!', 800, 1300, 58, t, w(19, 'coffee') + 0.1, C.pink);
      qmark(ctx, 920, 800, 100, t, w(19, 'what') - 0.1, 0.5);
    } },
  ];

  const CUTS = scenes.slice(1).map((sc, i) => { const prev = P_.filter((p) => p.e <= sc.s + 0.01).pop(); return { t: (prev.e + sc.s) / 2, shape: i % 2 ? 'heart' : 'star' }; });
  const CUTW = 0.4;

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1].draw(ctx, t); wipe(ctx, W_, H_, (t - (c.t - CUTW / 2)) / CUTW, c.shape, 540, 1100, () => scenes[i].draw(ctx, t)); }
    else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 2.0); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.38, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.38, 3000]], q: 0.9, gain: 0.3, a: 0.07 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    k.play('sparkle', 0.05, { n: 5, gain: 0.4 }); pop_(0.1, 650, 0.6, 0, false);
    k.play('error', w(0, 'energy') - 0.1, { f: 'A3', gain: 0.45 }); pop_(w(0, 'energy') - 0.12, 500, 0.8, 0.4, false);
    k.play('whoosh', w(1, 'hides') - 0.2, { dur: 0.5, gain: 0.35 }); pop_(w(1, 'tired') - 0.1, 700, 0.7, 0.4);
    // brain
    pop_(P_[2].s + 0.05, 600, 0.7, 0, false); big_(w(2, 'adenosine') - 0.12, 'C6');
    for (let i = 0; i < 14; i++) pop_(P_[3].s - 0.1 + i * 0.16, 500 + i * 40, 0.45, ((i % 5) - 2) * 0.25);
    k.play('riser', P_[3].s, { dur: 2.0, gain: 0.25 }); pop_(w(4, 'piles') - 0.1, 800, 0.7, 0.3, false);
    // docks
    k.play('whoosh', P_[5].s - 0.2, { dur: 0.5, gain: 0.3 });
    for (let i = 0; i < 3; i++) { k.play('stamp', w(5, 'locks') + i * 0.18, { gain: 0.3, pan: (i - 1) * 0.4 }); k.play('tick', w(5, 'locks') + i * 0.18, { f: 2400, gain: 0.4 }); }
    pop_(w(5, 'cells') - 0.1, 700, 0.6); k.tone(w(6, 'sleepy') - 0.12, { f: [[0, 'E5'], [0.8, 'A4']], type: 'sine', dur: 0.9, gain: 0.12, a: 0.05, hold: 0.3 });
    // twins
    pop_(P_[7].s + 0.05, 600, 0.6, -0.4); pop_(w(7, 'caffeine') + 0.05, 800, 0.8, 0.4, false);
    k.play('whoosh', w(7, 'shaped') - 0.1, { dur: 1.0, gain: 0.3 }); big_(w(7, 'shaped') + 0.9, 'G6'); pop_(w(7, 'exactly') - 0.1, 900, 0.6);
    // block
    for (let i = 0; i < 3; i++) { k.play('whoosh', w(8, 'jumps') - 0.2 + i * 0.15, { dur: 0.3, gain: 0.25 }); k.play('stamp', w(8, 'jumps') + 0.1 + i * 0.15, { gain: 0.3, pan: (i - 1) * 0.4 }); }
    pop_(w(8, 'first') - 0.1, 900, 0.8, 0.3, false);
    for (let i = 0; i < 3; i++) k.play('jump', w(9, 'sits') + 0.2 + i * 0.2, { gain: 0.35, minor: true });
    k.play('impact', w(10, 'blocking') - 0.12, { gain: 0.6 }); k.play('error', w(10, 'signal') - 0.1, { f: 'G3', gain: 0.35 });
    k.play('whoosh', P_[11].s - 0.1, { dur: 1.2, gain: 0.3 }); pop_(w(11, 'leave') - 0.1, 600, 0.7, 0, false);
    for (let i = 0; i < 15; i++) pop_(P_[11].s - 0.1 + i * 0.18, 450 + i * 30, 0.4, ((i % 5) - 2) * 0.3);
    pop_(w(12, 'piling') - 0.1, 800, 0.7, 0, false);
    // crash
    k.play('riser', P_[13].s, { dur: 1.6, gain: 0.3 }); for (let i = 0; i < 10; i++) k.play('tick', P_[13].s + i * 0.16, { f: 2600, gain: 0.3, minor: true });
    big_(w(13, 'five') - 0.12, 'E6'); k.tone(w(13, 'half') - 0.1, { f: [[0, 'C5'], [0.6, 'C4']], type: 'triangle', dur: 0.6, gain: 0.14, a: 0.02, hold: 0.2 });
    k.play('whoosh', w(14, 'hits') - 0.3, { dur: 0.8, gain: 0.4 }); for (let i = 0; i < 8; i++) pop_(w(14, 'hits') - 0.2 + i * 0.07, 400 + i * 60, 0.45);
    k.play('impact', w(15, 'crash') - 0.12, { gain: 0.9 }); k.play('thud', w(15, 'crash') - 0.05, { f: 90, gain: 0.5 });
    // plant
    pop_(w(16, 'weirdest') - 0.12, 700, 0.8, 0, false); pop_(w(17, 'caffeine') - 0.12, 850, 0.7, -0.3);
    for (let i = 0; i < 6; i++) k.play('tick', P_[17].s + i * 0.25, { f: 1800, gain: 0.25, minor: true });
    k.noise(w(18, 'bug') - 0.15, { dur: 0.08, filter: 'bandpass', f: 1800, q: 1.2, gain: 0.3 });
    k.play('jump', w(18, 'poison') - 0.1, { gain: 0.45 }); big_(w(18, 'bug') - 0.12, 'A5'); pop_(w(18, 'probably') - 0.1, 600, 0.6, -0.4);
    // end
    pop_(P_[19].s + 0.05, 600, 0.7, -0.4); pop_(P_[19].s + 0.2, 750, 0.7, 0.4);
    big_(w(19, 'last') - 0.15, 'C6'); for (let i = 0; i < 3; i++) pop_(w(19, 'time') - 0.1 + i * 0.17, 700 + i * 120, 0.7, (i - 1) * 0.5);
    k.play('success', w(19, 'coffee') + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(19, 'coffee') + 0.1, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
