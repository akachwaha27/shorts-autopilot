// ================= Kawaii Anime, vertical 1080x1920: "Why does pineapple make your tongue sting?" =================
// Short, 9 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Bromelain (a mix of protein-cutting enzymes) strips the mucus coat, fruit acid (pH 3-4) hits the exposed spots,
// same enzyme as meat tenderizer, heat (70-80 C) denatures it so canned/grilled don't sting, mouth heals in hours.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 3.53, "text": "Pineapple digests your tongue with every bite you take.", "words": [["pineapple", 0.25], ["digests", 0.89], ["your", 1.39], ["tongue", 1.67], ["with", 2.1], ["every", 2.39], ["bite", 2.74], ["you", 3.03], ["take", 3.24]]}, {"s": 4.08, "e": 5.29, "text": "That sting on your tongue,", "words": [["that", 4.08], ["sting", 4.31], ["on", 4.6], ["your", 4.71], ["tongue", 4.94]]}, {"s": 5.59, "e": 6.66, "text": "isn't just sour.", "words": [["isnt", 5.59], ["just", 5.94], ["sour", 6.3]]}, {"s": 7.21, "e": 9.15, "text": "Pineapple is packed with bromelain,", "words": [["pineapple", 7.21], ["is", 7.79], ["packed", 7.92], ["with", 8.31], ["bromelain", 8.57]]}, {"s": 9.45, "e": 11.78, "text": "a mix of enzymes that chop up protein.", "words": [["a", 9.45], ["mix", 9.53], ["of", 9.76], ["enzymes", 9.91], ["that", 10.46], ["chop", 10.77], ["up", 11.08], ["protein", 11.24]]}, {"s": 12.33, "e": 13.21, "text": "And your tongue?", "words": [["and", 12.33], ["your", 12.53], ["tongue", 12.8]]}, {"s": 13.76, "e": 15.04, "text": "It's made of protein.", "words": [["its", 13.76], ["made", 14.0], ["of", 14.32], ["protein", 14.48]]}, {"s": 15.59, "e": 16.69, "text": "So while you're chewing,", "words": [["so", 15.59], ["while", 15.71], ["youre", 16.0], ["chewing", 16.29]]}, {"s": 16.99, "e": 19.16, "text": "bromelain cuts into the slimy coat,", "words": [["bromelain", 16.99], ["cuts", 17.67], ["into", 17.96], ["the", 18.26], ["slimy", 18.49], ["coat", 18.86]]}, {"s": 19.46, "e": 20.75, "text": "that protects your mouth.", "words": [["that", 19.46], ["protects", 19.71], ["your", 20.2], ["mouth", 20.44]]}, {"s": 21.3, "e": 22.52, "text": "Then the fruit's acid,", "words": [["then", 21.3], ["the", 21.59], ["fruits", 21.8], ["acid", 22.23]]}, {"s": 22.82, "e": 24.58, "text": "around pH three to four,", "words": [["around", 22.82], ["ph", 23.38], ["three", 23.56], ["to", 24.03], ["four", 24.21]]}, {"s": 24.88, "e": 26.93, "text": "splashes onto the exposed spots.", "words": [["splashes", 24.88], ["onto", 25.49], ["the", 25.79], ["exposed", 26.02], ["spots", 26.55]]}, {"s": 27.48, "e": 28.47, "text": "That's the sting.", "words": [["thats", 27.48], ["the", 27.86], ["sting", 28.09]]}, {"s": 29.02, "e": 32.42, "text": "Meat tenderizer powders often use the same enzyme,", "words": [["meat", 29.02], ["tenderizer", 29.35], ["powders", 30.16], ["often", 30.72], ["use", 31.13], ["the", 31.37], ["same", 31.61], ["enzyme", 31.94]]}, {"s": 32.72, "e": 33.51, "text": "so yes,", "words": [["so", 32.72], ["yes", 33.04]]}, {"s": 33.81, "e": 35.74, "text": "your tongue is getting tenderized.", "words": [["your", 33.81], ["tongue", 34.08], ["is", 34.48], ["getting", 34.61], ["tenderized", 35.08]]}, {"s": 36.29, "e": 38.31, "text": "But heat changes the enzyme's shape,", "words": [["but", 36.29], ["heat", 36.5], ["changes", 36.78], ["the", 37.27], ["enzymes", 37.47], ["shape", 37.96]]}, {"s": 38.61, "e": 41.07, "text": "at about seventy to eighty degrees Celsius,", "words": [["at", 38.61], ["about", 38.75], ["seventy", 39.09], ["to", 39.57], ["eighty", 39.7], ["degrees", 40.11], ["celsius", 40.59]]}, {"s": 41.37, "e": 42.57, "text": "and it stops working.", "words": [["and", 41.37], ["it", 41.58], ["stops", 41.72], ["working", 42.08]]}, {"s": 43.12, "e": 45.87, "text": "That's why canned or grilled pineapple doesn't bite.", "words": [["thats", 43.12], ["why", 43.45], ["canned", 43.64], ["or", 44.04], ["grilled", 44.17], ["pineapple", 44.63], ["doesnt", 45.21], ["bite", 45.61]]}, {"s": 46.42, "e": 48.24, "text": "Relax, your mouth heals fast,", "words": [["relax", 46.42], ["your", 46.81], ["mouth", 47.13], ["heals", 47.53], ["fast", 47.92]]}, {"s": 48.54, "e": 50.82, "text": "tiny damage can fade within hours.", "words": [["tiny", 48.54], ["damage", 48.86], ["can", 49.35], ["fade", 49.6], ["within", 49.92], ["hours", 50.41]]}, {"s": 51.37, "e": 52.26, "text": "So tell me,", "words": [["so", 51.37], ["tell", 51.59], ["me", 52.04]]}, {"s": 52.56, "e": 55.04, "text": "would you still eat a fruit that digests your tongue?", "words": [["would", 52.56], ["you", 52.85], ["still", 53.02], ["eat", 53.31], ["a", 53.48], ["fruit", 53.54], ["that", 53.83], ["digests", 54.06], ["your", 54.46], ["tongue", 54.69]]}];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ヒリヒリチョキガジもぐ!?~';
  const C = {
    plum: '#5a3659', dark: '#3b2342',
    pink: '#ffbfd2', pinkS: '#f597b7', pinkD: '#ff6f9c',
    mint: '#bff0dc', mintS: '#86d6b9', mintD: '#3fb98e',
    butter: '#fff0a6', butterS: '#f5d06a', butterD: '#ffd84d',
    lav: '#ded2ff', lavS: '#b7a2f2', lavD: '#8f74e6',
    sky: '#c6e7ff', skyS: '#8cc6f2', skyD: '#5aa9ea',
    cream: '#fffaf4', creamS: '#e4d8f6',
    peach: '#ffe2cf', peachS: '#f2b996', brown: '#dca07a', brownS: '#b97b5a',
    red: '#ff6b8a', white: '#ffffff', nori: '#3d5a52', noriS: '#2c443d',
    liver: '#f59a9a', liverS: '#dd7480', bile: '#b6e57a', bileS: '#8cc95a',
  };
  const TH = {
    pink: { base: '#ffe7ef', dot: '#ffd3e1', acc: '#fff3b0', kind: 'dots' },
    mint: { base: '#ddf6ec', dot: '#c4ecdb', acc: '#fff1a0', kind: 'stars' },
    lav: { base: '#efe8ff', dot: '#e0d4ff', acc: '#ffd0e0', kind: 'clouds' },
    butter: { base: '#fff6d8', dot: '#ffeab0', acc: '#ffc4d6', kind: 'hearts' },
    sky: { base: '#e3f3ff', dot: '#cfe8fb', acc: '#ffd6e4', kind: 'stars' },
  };
  const FONT = '"Fredoka"', KANA = '"Zen Maru Gothic","Noto Sans CJK JP","Noto Sans JP",sans-serif';
  const q15 = (t) => Math.floor(t * 15 + 1e-6) / 15; // anime "on twos" at 30 fps

  // ---------- paths ----------
  const scaleOf = (ctx) => { const m = ctx.getTransform(); return Math.hypot(m.a, m.b) || 1; };
  const rrP = (x, y, w, h, r) => { const p = new Path2D(); p.roundRect(x, y, w, h, r); return p; };
  const ellP = (x, y, rx, ry, rot = 0) => { const p = new Path2D(); p.ellipse(x, y, Math.max(rx, 0.01), Math.max(ry, 0.01), rot, 0, TAU); return p; };
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
  const hexP = (cx, cy, r, rot = 0) => roundPoly(Array.from({ length: 6 }, (_, i) => [cx + Math.cos(rot + i * Math.PI / 3) * r, cy + Math.sin(rot + i * Math.PI / 3) * r]), r * 0.25);

  // ---------- inking ----------
  function ol(ctx, p, w = 4.5, col = C.plum) { ctx.save(); ctx.lineWidth = w / scaleOf(ctx); ctx.strokeStyle = col; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke(p); ctx.restore(); }
  function cel(ctx, p, base, shade, dx = -8, dy = -8, w = 4.5) {
    ctx.save(); ctx.fillStyle = shade; ctx.fill(p); ctx.clip(p); ctx.translate(dx, dy); ctx.fillStyle = base; ctx.fill(p); ctx.restore();
    if (w) ol(ctx, p, w);
  }
  function union(ctx, paths, fill, w = 4.5) {
    ctx.save(); ctx.lineWidth = (2 * w) / scaleOf(ctx); ctx.strokeStyle = C.plum; ctx.lineJoin = 'round';
    paths.forEach((p) => ctx.stroke(p)); ctx.fillStyle = fill; paths.forEach((p) => ctx.fill(p)); ctx.restore();
  }
  function shine(ctx, x, y, rx, ry, rot = -0.6, a = 0.95) { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill(ellP(x, y, rx, ry, rot)); ctx.restore(); }
  // a soft tube: plum outline, flat fill, a highlight stripe (pts = polyline)
  function tube(ctx, pts, w, fill, shade, hl = true) {
    if (pts.length < 2) return;
    const path = new Path2D(); path.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) path.lineTo(pts[i][0], pts[i][1]);
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = C.plum; ctx.lineWidth = w + 9; ctx.stroke(path);
    ctx.strokeStyle = shade || fill; ctx.lineWidth = w; ctx.stroke(path);
    ctx.strokeStyle = fill; ctx.lineWidth = w * 0.72; ctx.translate(-w * 0.08, -w * 0.08); ctx.stroke(path);
    if (hl) { ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = Math.max(3, w * 0.12); ctx.translate(-w * 0.14, -w * 0.14); ctx.stroke(path); }
    ctx.restore();
  }
  const partial = (pts, u) => { if (u >= 1) return pts; if (u <= 0) return []; const L = plen(pts) * u, out = [pts[0]]; let acc = 0; for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (acc + l >= L) { const k = (L - acc) / l; out.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k]); return out; } acc += l; out.push(pts[i]); } return out; };

  // ---------- motion grammar ----------
  function pop(t, t0, k = 1) {
    const u = t - t0;
    if (u <= 0) return { s: 0, sx: 0, sy: 0, u };
    const s = 1 - Math.exp(-9 * u) * Math.cos(18 * u), q = Math.exp(-8 * u) * Math.sin(18 * u) * 0.28 * k;
    return { s, sx: s * (1 + q), sy: s * (1 - q), u };
  }
  const popOut = (t, t1, d = 0.2) => 1 - H.clamp((t - t1) / d);
  function squash(t, tl, amp = 0.22) { const u = t - tl; if (u < 0) return [1, 1]; const q = Math.exp(-7 * u) * Math.cos(16 * u) * amp; return [1 + q, 1 - q]; }
  const bob = (t, ph = 0, a = 8) => Math.sin(t * TAU * 0.85 + ph) * a;
  const prog = (t, a, b) => H.clamp((t - a) / (b - a));
  // pop something in at t0 (optionally out at t1) around (x,y)
  function popIn(ctx, t, t0, x, y, fn, k = 1, t1 = null) {
    const p = pop(t, t0, k); if (p.s <= 0) return 0;
    const o = t1 == null ? 1 : popOut(t, t1); if (o <= 0) return 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(p.sx * o, p.sy * o); fn(p); ctx.restore(); return p.s * o;
  }

  // ---------- lettering ----------
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
  function kWord(ctx, str, cx, y, size, t, t0, stg, o = {}) {
    ctx.save(); ctx.font = `${o.weight || 700} ${size}px ${o.font || FONT}`;
    const ws = [...str].map((c) => ctx.measureText(c).width), tot = ws.reduce((a, b) => a + b, 0) + (o.track || 0) * (str.length - 1);
    ctx.restore();
    const out = o.t1 == null ? 1 : popOut(t, o.t1);
    if (out <= 0) return tot;
    let x = o.align === 'left' ? cx : cx - tot / 2;
    const fills = o.fills;
    [...str].forEach((c, i) => {
      const w = ws[i]; const p = pop(t, t0 + i * stg, 1.3);
      if (c !== ' ' && p.s > 0) {
        const hop = p.u < 0.25 ? -Math.sin((p.u / 0.25) * Math.PI) * size * 0.18 : 0;
        ctx.save(); ctx.translate(x + w / 2, y + hop); ctx.rotate((o.wob || 0) * Math.sin(t * 6 + i * 1.3)); ctx.scale(Math.min(p.sx, p.s, 1) * out, p.sy * out);
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
  // a popping label pill
  function tag(ctx, x, y, label, fill, flip = 1, size = 30) {
    ctx.save(); ctx.translate(x, y); ctx.scale(flip, 1);
    ctx.font = `700 ${size}px ${FONT}`; const w = Math.max(ctx.measureText(label).width + size * 1.1, size * 1.6), h = size * 1.5;
    cel(ctx, rrP(-w / 2, -h / 2, w, h, h / 2), fill, H.rgba(H.mix(fill, C.plum, 0.15)), -3, -3, 3.5);
    ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 2);
    ctx.restore();
  }
  const ptag = (ctx, t, t0, x, y, label, fill, size = 32, t1 = null) => popIn(ctx, t, t0, x, y, () => tag(ctx, 0, 0, label, fill, 1, size), 1.2, t1);
  const ptext = (ctx, t, t0, x, y, str, size, o = {}, t1 = null) => popIn(ctx, t, t0, x, y, () => kText(ctx, str, 0, 0, size, o), 1.3, t1);

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
    } else {
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
  // a face that sits on any character or organ (local units, centre between the eyes)
  function face(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const ek = P.eyes || 'normal', look = P.look || [0, 0], iris = P.iris || '#8a6cf0';
    eye(ctx, -34, 0, 22, 29, iris, ek, 1, look); eye(ctx, 34, 0, 22, 29, iris, ek, -1, look);
    if (P.blush !== false) { blush(ctx, -60, 30, 15, 8); blush(ctx, 60, 30, 15, 8); }
    mouth(ctx, 0, 32, 10, P.mouth || 'smile');
    ctx.restore();
  }

  // ---------- emotes / props ----------
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
    if (s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -30); p.bezierCurveTo(8, -12, 20, 2, 20, 14); p.arc(0, 14, 20, 0, Math.PI); p.bezierCurveTo(-20, 2, -8, -12, 0, -30); p.closePath();
    cel(ctx, p, C.sky, C.skyS, -4, -4, 4); shine(ctx, -6, 12, 4, 7, 0.3);
    ctx.restore();
  }
  function drop(ctx, x, y, s, fill = C.sky, shade = C.skyS, w = 4) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -30); p.bezierCurveTo(8, -12, 20, 2, 20, 14); p.arc(0, 14, 20, 0, Math.PI); p.bezierCurveTo(-20, 2, -8, -12, 0, -30); p.closePath();
    cel(ctx, p, fill, shade, -4, -4, w); shine(ctx, -6, 10, 4, 7, 0.3);
    ctx.restore();
  }
  function sparkle(ctx, x, y, R, fill = C.white, rot = 0, w = 3.5) { if (R <= 0) return; const p = spark4P(x, y, R, rot); ctx.fillStyle = fill; ctx.fill(p); if (w) ol(ctx, p, w); }
  function heart(ctx, x, y, s, fill = C.pinkD, rot = 0) { if (s <= 0) return; cel(ctx, heartP(x, y, s, rot), fill, H.rgba(H.mix(fill, C.plum, 0.25)), -s * 0.12, -s * 0.12, 3.5); shine(ctx, x - s * 0.45, y - s * 0.35, s * 0.18, s * 0.12, -0.6); }
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
      if (py > 1960) continue;
      ctx.save(); ctx.translate(px, py); ctx.rotate(rs * tau); ctx.scale(1, Math.cos(tau * 9 + i));
      ctx.fillStyle = c;
      if (kind === 0) ctx.fill(rrP(-sz * 0.6, -sz * 0.35, sz * 1.2, sz * 0.7, 3));
      else if (kind === 1) ctx.fill(ellP(0, 0, sz * 0.45, sz * 0.45));
      else if (kind === 2) ctx.fill(starP(0, 0, sz * 0.7));
      else ctx.fill(heartP(0, 0, sz * 0.5));
      ctx.restore();
    }
  }
  function poof(ctx, x, y, t, t0, R = 50, col = C.white) { // a little puff of cloud when something vanishes
    const u = (t - t0) / 0.45; if (u < 0 || u > 1) return;
    ctx.save(); ctx.globalAlpha = 1 - u;
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU, d = R * (0.3 + u); cel(ctx, ellP(x + Math.cos(a) * d, y + Math.sin(a) * d, R * 0.38 * (1 - u * 0.5), R * 0.38 * (1 - u * 0.5)), col, C.creamS, -3, -3, 3); }
    ctx.restore();
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
  function dotted(ctx, pts, prog_, col, r = 6, gap = 22, head = 1) {
    if (prog_ <= 0) return;
    const L = plen(pts) * prog_;
    for (let d = 0; d < L - (head ? 16 : 0); d += gap) { const [x, y] = along(pts, d); ctx.fillStyle = col; ctx.fill(ellP(x, y, r, r)); }
    if (head) {
      const [x, y, a] = along(pts, L), s = 20 * head;
      ctx.save(); ctx.translate(x, y); ctx.rotate(a);
      const p = roundPoly([[s * 0.9, 0], [-s * 0.6, -s * 0.85], [-s * 0.6, s * 0.85]], s * 0.25);
      cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.25)), -2, -2, 4); ctx.restore();
    }
  }
  // chunky check / cross stamps
  function check(ctx, x, y, s, t, t0) { popIn(ctx, t, t0, x, y, () => { ctx.scale(s, s); cel(ctx, ellP(0, 0, 40, 40), C.mintD, '#2fa078', -5, -5, 5); ctx.strokeStyle = C.white; ctx.lineWidth = 11; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-17, 2); ctx.lineTo(-4, 15); ctx.lineTo(18, -12); ctx.stroke(); }, 1.5); impactLines(ctx, x, y, 54 * s, t, t0, 10, C.mintD); }
  function cross(ctx, x, y, s, t, t0) { popIn(ctx, t, t0, x, y, () => { ctx.rotate(-0.12); ctx.scale(s, s); cel(ctx, ellP(0, 0, 44, 44), C.red, '#e2486c', -5, -5, 5); ctx.strokeStyle = C.white; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-16, -16); ctx.lineTo(16, 16); ctx.moveTo(16, -16); ctx.lineTo(-16, 16); ctx.stroke(); }, 1.6); impactLines(ctx, x, y, 58 * s, t, t0, 10, C.red); }
  function clock(ctx, x, y, R, spin) {
    ctx.save(); ctx.translate(x, y);
    cel(ctx, ellP(0, 0, R, R), C.white, C.creamS, -6, -6, 5);
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; ctx.fillStyle = i % 3 ? C.lavS : C.pinkD; ctx.fill(ellP(Math.cos(a) * R * 0.78, Math.sin(a) * R * 0.78, R * 0.05, R * 0.05)); }
    ctx.lineCap = 'round'; ctx.strokeStyle = C.plum;
    ctx.lineWidth = R * 0.09; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spin / 12 - Math.PI / 2) * R * 0.45, Math.sin(spin / 12 - Math.PI / 2) * R * 0.45); ctx.stroke();
    ctx.lineWidth = R * 0.06; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spin - Math.PI / 2) * R * 0.65, Math.sin(spin - Math.PI / 2) * R * 0.65); ctx.stroke();
    ctx.fillStyle = C.pinkD; ctx.fill(ellP(0, 0, R * 0.08, R * 0.08));
    cel(ctx, rrP(-R * 0.16, -R - R * 0.2, R * 0.32, R * 0.18, 4), C.pink, C.pinkS, -2, -2, 3.5);
    ctx.restore();
  }

  // ---------- characters (local units) ----------
  // the bite: a chibi onigiri. (x,y) = centre, its base sits at y + 72*s
  // background: soft pastel with simple patterns (from the reference)
  function bg(ctx, W, H_, t, th, seed = 1) {
    ctx.fillStyle = th.base; ctx.fillRect(0, 0, W, H_);
    const r = H.rng(seed);
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
  function wipe(ctx, W, H_, u, shape, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), rot = -Math.PI / 2 + u * 0.9;
    const p = shape === 'heart' ? heartP(cx, cy, 3600 * e * e + 4, 0) : starP(cx, cy, 3600 * e * e + 4, rot, 0.52);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.lineJoin = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = shape === 'heart' ? C.pink : C.butter; ctx.lineWidth = 24; ctx.stroke(p);
    ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.globalAlpha = 0.8; ctx.stroke(p); ctx.restore();
  }



  // ======================================== CHARACTERS ========================================

  // ======================================== CHARACTERS ========================================
  const W = W0, HH = H0;
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2, track: 7 });
  function celU(ctx, paths, base, shade, dx = -10, dy = -10, w = 4.5) {
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineWidth = (2 * w) / scaleOf(ctx); ctx.strokeStyle = C.plum;
    paths.forEach((p) => ctx.stroke(p)); ctx.fillStyle = shade; paths.forEach((p) => ctx.fill(p)); ctx.restore();
    const U = new Path2D(); paths.forEach((p) => U.addPath(p));
    ctx.save(); ctx.clip(U); ctx.translate(dx, dy); ctx.fillStyle = base; paths.forEach((p) => ctx.fill(p)); ctx.restore();
    return U;
  }

  // ======================================== CHARACTERS ========================================
  // pineapple: (x,y) = body centre. P.bite opens a toothy chomp mouth 0..1
  function pineapple(ctx, x, y, s, P = {}) {
    const t = P.t || 0, sq = P.sq || [1, 1];
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s * sq[0], s * sq[1]);
    if (P.shadow !== false) { ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 215, 140, 20)); }
    // crown (leaves behind the body)
    for (const [a, l] of [[-0.75, 120], [0.75, 120], [-0.38, 155], [0.38, 155], [0, 180]]) {
      ctx.save(); ctx.translate(0, -165); ctx.rotate(a + Math.sin(t * 3 + a * 4) * 0.035);
      const p = new Path2D(); p.moveTo(-30, 18); p.quadraticCurveTo(-30, -l * 0.55, 0, -l); p.quadraticCurveTo(30, -l * 0.55, 30, 18); p.closePath();
      cel(ctx, p, C.mintD, '#2f9c76', -5, -4); ctx.restore();
    }
    const body = ellP(0, 20, 158, 205);
    cel(ctx, body, C.butterD, C.butterS, -14, -12);
    ctx.save(); ctx.clip(body); ctx.strokeStyle = 'rgba(214,150,50,0.75)'; ctx.lineWidth = 5;
    for (let i = -8; i <= 8; i++) { ctx.beginPath(); ctx.moveTo(-220 + i * 62, -220); ctx.lineTo(220 + i * 62, 260); ctx.stroke(); ctx.beginPath(); ctx.moveTo(220 + i * 62, -220); ctx.lineTo(-220 + i * 62, 260); ctx.stroke(); }
    ctx.restore(); ol(ctx, body);
    shine(ctx, -90, -80, 30, 13, -0.8);
    face(ctx, 0, -40, 1.5, { eyes: P.eyes, mouth: P.bite ? 'flat' : P.mouth, look: P.look, iris: '#d9792a', blush: true });
    if (P.bite) {
      const o = P.bite; ctx.save(); ctx.translate(0, 62);
      const m = rrP(-84, -6, 168, 16 + 78 * o, 24);
      cel(ctx, m, C.plum, C.dark, 0, 0, 4);
      ctx.save(); ctx.clip(m); ctx.fillStyle = C.white;
      for (let i = 0; i < 6; i++) { const tx = -70 + i * 28; const p = new Path2D(); p.moveTo(tx - 13, -6); p.lineTo(tx + 13, -6); p.lineTo(tx, 22); p.closePath(); ctx.fill(p); }
      for (let i = 0; i < 5; i++) { const tx = -56 + i * 28, b = 10 + 78 * o; const p = new Path2D(); p.moveTo(tx - 13, b); p.lineTo(tx + 13, b); p.lineTo(tx, b - 22); p.closePath(); ctx.fill(p); }
      ctx.restore(); ctx.restore();
    }
    ctx.restore();
  }
  // tongue: (x,y) = centre, rounded tip at the bottom. P.spots: raw patches 0..1 (P.flash reddens them), P.band: plaster 0..1
  const TONGUE = (() => { const p = new Path2D(); p.moveTo(-170, -170); p.quadraticCurveTo(0, -210, 170, -170); p.bezierCurveTo(205, 0, 180, 220, 0, 235); p.bezierCurveTo(-180, 220, -205, 0, -170, -170); p.closePath(); return p; })();
  const SPOTS = [[-85, 120, 34], [84, 86, 28], [10, 170, 26], [-110, 30, 22]];
  function tongue(ctx, x, y, s, P = {}) {
    const t = P.t || 0, sq = P.sq || [1, 1], sh = P.shake || 0;
    ctx.save(); ctx.translate(x + Math.sin(t * 57) * sh, y + Math.cos(t * 43) * sh * 0.4); ctx.rotate(P.rot || 0); ctx.scale(s * sq[0], s * sq[1]);
    cel(ctx, TONGUE, C.pink, C.pinkS, -14, -12);
    ctx.save(); ctx.clip(TONGUE);
    const r = H.rng(4); ctx.fillStyle = 'rgba(245,151,183,0.7)';
    for (let i = 0; i < 46; i++) ctx.fill(ellP(r.range(-180, 180), r.range(-180, 225), 7, 7));
    ctx.strokeStyle = C.pinkS; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 62); ctx.lineTo(0, 200); ctx.stroke();
    if (P.spots) SPOTS.forEach(([sx, sy, sr], i) => { const k = H.clamp(P.spots * 4 - i); if (k <= 0) return; cel(ctx, ellP(sx, sy, sr * k, sr * k * 0.8), P.flash ? C.red : '#ff9db4', C.pinkD, -3, -3, 3.5); });
    ctx.restore(); ol(ctx, TONGUE);
    shine(ctx, -112, -120, 30, 12, -0.6);
    face(ctx, 0, -70, 1.4, { eyes: P.eyes, mouth: P.mouth, look: P.look, iris: '#d0567f' });
    if (P.band) { ctx.save(); ctx.translate(92, 88); ctx.rotate(-0.55); ctx.scale(P.band, P.band); cel(ctx, rrP(-72, -26, 144, 52, 24), C.peach, C.peachS, -3, -3, 4); cel(ctx, rrP(-28, -20, 56, 40, 8), '#fff4ea', C.creamS, -2, -2, 3); ctx.restore(); }
    ctx.restore();
  }
  // enzyme: a little jaw-snapping scissor blob; P.melt 0..1 slumps it out of shape (denatured)
  function enzyme(ctx, x, y, s, P = {}) {
    const t = P.t || 0, ph = P.ph || 0, m = P.melt || 0, open = m > 0.05 ? 0.1 * (1 - m) : (P.open != null ? P.open : 0.2 + 0.5 * Math.abs(Math.sin(t * 7 + ph)));
    ctx.save(); ctx.translate(x, y); ctx.scale((P.flip || 1) * s * (1 + 0.3 * m), s * (1 - 0.42 * m)); ctx.rotate(P.rot || 0);
    const col = P.col || [C.mintD, '#2f9c76'];
    const p = new Path2D(); p.arc(0, 0, 60, open, TAU - open); p.lineTo(m * 22, 0); p.closePath();
    cel(ctx, p, col[0], col[1], -7, -6, 4);
    if (m < 0.05) { ctx.fillStyle = C.white; for (const sg of [-1, 1]) for (let i = 0; i < 2; i++) { const a = sg * open, d = 26 + i * 20; const q = new Path2D(); const cx = Math.cos(a) * d, cy = Math.sin(a) * d; q.moveTo(cx - 8, cy); q.lineTo(cx + 8, cy); q.lineTo(cx, cy - sg * 13 * 1); q.closePath(); ctx.fill(q); } }
    eye(ctx, -14, -26, 10.5, 13.5, '#2d6c55', P.eyes || (m > 0.3 ? 'swirl' : 'normal'), 1, [0.3, 0]);
    blush(ctx, -36, -6, 8, 5);
    ctx.restore();
  }
  // protein chain: beads on a string along pts; cuts = parameter points (0..1) where it comes apart with gap g
  function chain(ctx, x0, x1, y, t, n, cuts = [], beadR = 26, seed = 3) {
    const cols = [[C.lav, C.lavS], [C.sky, C.skyS], [C.peach, C.peachS], [C.pink, C.pinkS]];
    for (let i = 0; i < n; i++) {
      const u = i / (n - 1); let dx = 0, dy = 0;
      for (const c of cuts) { if (c.k <= 0) continue; const sg = u < c.u ? -1 : 1; dx += sg * c.k * 26; dy += sg * c.k * 22 * Math.sin(i * 1.7 + seed); }
      const bx = H.lerp(x0, x1, u) + dx, by = y + Math.sin(i * 0.9 + t * 2.5) * 16 + dy;
      if (i < n - 1) { let broken = false; for (const c of cuts) if (c.k > 0.05 && u < c.u && (i + 1) / (n - 1) >= c.u) broken = true;
        if (!broken) { let dx2 = 0, dy2 = 0; const u2 = (i + 1) / (n - 1); for (const c of cuts) { if (c.k <= 0) continue; const sg = u2 < c.u ? -1 : 1; dx2 += sg * c.k * 26; dy2 += sg * c.k * 22 * Math.sin((i + 1) * 1.7 + seed); }
          ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(H.lerp(x0, x1, u2) + dx2, y + Math.sin((i + 1) * 0.9 + t * 2.5) * 16 + dy2); ctx.stroke(); ctx.restore(); } }
      const c = cols[i % 4]; cel(ctx, ellP(bx, by, beadR, beadR), c[0], c[1], -4, -4, 4); shine(ctx, bx - beadR * 0.35, by - beadR * 0.35, beadR * 0.25, beadR * 0.16, -0.6);
    }
  }
  function lemonX(ctx, x, y, s) { // a sour lemon
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(-0.2);
    const a = new Path2D(); a.ellipse(0, 0, 92, 68, 0, 0, TAU); const b = ellP(94, 0, 16, 16), c = ellP(-94, 0, 16, 16);
    celU(ctx, [a, b, c], C.butter, C.butterS, -7, -6); ctx.restore();
    face(ctx, x - 2, y - 4, 0.7, { eyes: 'squeeze', mouth: 'wobble', iris: '#a58a20' });
  }
  function steak(ctx, x, y, s, P = {}) {
    const sq = P.sq || [1, 1], soft = P.soft || 0; ctx.save(); ctx.translate(x, y); ctx.scale(s * sq[0] * (1 + soft * 0.12), s * sq[1] * (1 - soft * 0.18));
    const p = new Path2D(); p.moveTo(-170, -40); p.bezierCurveTo(-150, -130, 40, -150, 130, -100); p.bezierCurveTo(210, -50, 190, 70, 90, 96); p.bezierCurveTo(-30, 130, -190, 90, -170, -40); p.closePath();
    cel(ctx, p, '#e8826f', '#c2604f', -9, -8);
    ctx.save(); ctx.clip(p); ctx.strokeStyle = 'rgba(255,240,226,0.9)'; ctx.lineWidth = 11; ctx.lineCap = 'round';
    for (const [a, b, c, d] of [[-120, -60, 60, -85], [-145, 25, 110, 0]]) { ctx.beginPath(); ctx.moveTo(a, b); ctx.quadraticCurveTo((a + c) / 2, b + 28, c, d); ctx.stroke(); }
    ctx.restore(); ol(ctx, p, 6); face(ctx, 0, -18, 0.92, { eyes: P.eyes, mouth: P.mouth, iris: '#8d3f35' });
    ctx.restore();
  }
  function shaker(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-55, -80, 110, 150, 20), C.cream, C.creamS, -6, -5); cel(ctx, rrP(-60, 58, 120, 42, 10), C.lav, C.lavS, -3, -3);
    ctx.fillStyle = C.plum; for (const dx of [-28, 0, 28]) ctx.fill(ellP(dx, 88, 5, 5));
    cel(ctx, rrP(-44, -48, 88, 70, 10), C.mint, C.mintS, -2, -2, 3.5);
    ctx.restore();
  }
  function flame(ctx, x, y, s, t, ph = 0) {
    ctx.save(); ctx.translate(x, y); const k = 1 + 0.1 * Math.sin(t * 13 + ph); ctx.scale(s, s * k);
    const f = (sc, c, c2) => { const p = new Path2D(); p.moveTo(0, -120 * sc); p.bezierCurveTo(50 * sc, -60 * sc, 76 * sc, -18 * sc, 62 * sc, 26 * sc); p.bezierCurveTo(52 * sc, 62 * sc, -52 * sc, 62 * sc, -62 * sc, 26 * sc); p.bezierCurveTo(-76 * sc, -18 * sc, -30 * sc, -60 * sc, 0, -120 * sc); p.closePath(); cel(ctx, p, c, c2, -4, -3, 4); };
    f(1, '#ff8c6b', '#f0604f'); ctx.translate(0, 14); f(0.55, C.butterD, C.butterS); ctx.restore();
  }
  function thermo(ctx, x, y, s, lvl) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-32, -240, 64, 280, 32), C.white, C.creamS, -4, -3); cel(ctx, ellP(0, 62, 56, 56), C.red, C.pinkD, -6, -5);
    const h = 240 * lvl; ctx.fillStyle = C.red; ctx.fill(rrP(-16, 30 - h, 32, h + 20, 16));
    ctx.strokeStyle = C.plum; ctx.lineWidth = 4; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(14, -200 + i * 46); ctx.lineTo(30, -200 + i * 46); ctx.stroke(); }
    shine(ctx, -18, 50, 10, 16, 0.2); ctx.restore();
  }
  function can(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-105, -120, 210, 240, 22), C.sky, C.skyS, -9, -6);
    cel(ctx, ellP(0, -120, 105, 28), '#eaf4fb', C.skyS, -3, -3); cel(ctx, ellP(0, -120, 74, 17), C.butter, C.butterS, -1, -1, 3.5);
    ctx.fillStyle = C.butterD; cel(ctx, rrP(-105, -46, 210, 92, 2), C.butter, C.butterS, -4, -3, 4);
    cel(ctx, ellP(0, 0, 36, 36), C.butterD, C.butterS, -3, -3, 3.5); ctx.fillStyle = C.butter; ctx.fill(ellP(0, 0, 12, 12)); ol(ctx, ellP(0, 0, 12, 12), 3.5);
    ctx.restore();
  }
  function grillRing(ctx, x, y, s) { // a pineapple ring with char stripes
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const o = new Path2D(); o.arc(0, 0, 110, 0, TAU); o.moveTo(36, 0); o.arc(0, 0, 36, 0, TAU, true);
    ctx.save(); ctx.lineWidth = 9; ctx.strokeStyle = C.plum; ctx.stroke(o); ctx.fillStyle = C.butterD; ctx.fill(o, 'evenodd'); ctx.restore();
    ctx.save(); ctx.clip(o, 'evenodd'); ctx.strokeStyle = '#8a5a3c'; ctx.lineWidth = 15; ctx.lineCap = 'round'; for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(-120, i * 46 - 30); ctx.lineTo(120, i * 46 + 30); ctx.stroke(); } ctx.restore();
    ctx.restore();
  }

  // ======================================== SCENES ========================================
  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });
  const NOTM = (x, y) => y > 480 && y < 1620;

  // 1 HOOK: pineapple digests your tongue with every bite; the sting isn't just sour
  scene(0, null, TH.pink, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, NOTM);
    const dg = T(0, 'digests'), bite = T(0, 'bite'), st = T(1, 'sting'), sour = T(2, 'sour');
    const chomp = (a) => t < a ? 0.7 : Math.abs(Math.cos((t - a) * 7));
    const ten = H.ease.back(prog(t, T(0, 'tongue') - 0.1, T(0, 'tongue') + 0.25));
    pineapple(ctx, 540, 760 + bob(t, 0, 6), 1.2, { t, sq: squash(t, bite, 0.14), bite: t >= dg ? chomp(dg) * 0.9 + 0.1 : 0, eyes: t >= dg ? 'normal' : 'happy', look: [0, 0.5], shadow: false });
    if (ten > 0) tongue(ctx, 540, 2000 - 560 * ten + (t > bite ? Math.sin(t * 14) * 8 : 0), 1.25, { t, eyes: t >= st ? 'swirl' : t >= dg ? 'shock' : 'normal', mouth: t >= st ? 'wobble' : 'O', spots: prog(t, bite, bite + 1.2), flash: t > st, shake: t > st && t < st + 1 ? 7 : 0, look: [0, -0.8] });
    kWord(ctx, 'IT BITES BACK', 540, 340, 106, t, T(0, 'pineapple'), 0.022, { ...HO(C.white, C.pinkD), t1: sour - 0.2 });
    if (t >= st) impactLines(ctx, 540, 1270, 220, t, st, 12, C.pinkD);
    kana(ctx, 'ヒリヒリ', 830, 1160, 76, 0.18, t > st && t < sour ? pop(t, st).s : 0, C.butter);
    if (t >= sour - 0.2) {
      kWord(ctx, 'NOT JUST SOUR', 540, 340, 100, t, sour - 0.2, 0.022, HO(C.butter, C.pinkD));
      popIn(ctx, t, sour - 0.05, 190, 530, () => { lemonX(ctx, 0, 0, 0.9); ctx.save(); ctx.strokeStyle = C.red; ctx.lineCap = 'round'; ctx.lineWidth = 18; ctx.beginPath(); ctx.moveTo(-85, -70); ctx.lineTo(85, 70); ctx.moveTo(85, -70); ctx.lineTo(-85, 70); ctx.stroke(); ctx.restore(); }, 1.3);
    }
  });

  // 2 BROMELAIN: a mix of enzymes that chop up protein
  scene(3, 'star', TH.butter, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 10, NOTM);
    const br = T(3, 'bromelain'), mx = T(4, 'mix'), en = T(4, 'enzymes'), ch = T(4, 'chop'), pr = T(4, 'protein');
    pineapple(ctx, 540, 740 + bob(t, 1, 6), 0.92, { t, eyes: 'star', mouth: 'w', sq: squash(t, br, 0.14), shadow: false });
    kWord(ctx, 'BROMELAIN', 540, 350, 150, t, br, 0.03, HO(C.white, C.mintD));
    // the enzymes pour out of the fruit
    const spots = [[130, 1040], [310, 1060], [770, 1060], [950, 1040], [540, 1085]];
    spots.forEach(([ex, ey], i) => { const t0 = mx + i * 0.12; const p = pop(t, t0, 1.3); if (p.s <= 0) return; const k = H.ease.out(prog(t, t0, t0 + 0.45)); enzyme(ctx, H.lerp(540, ex, k), H.lerp(800, ey, k) + bob(t, i, 7), 1.05 * p.s, { t, ph: i * 1.3, flip: i < 2 ? 1 : -1, col: i % 2 ? [C.lavD, '#6a52c2'] : undefined }); });
    if (t >= en - 0.05) ptag(ctx, t, en, 540, 1210, 'a team of enzymes', C.mint, 56, ch + 0.1);
    const cuts = [{ u: 0.31, k: H.ease.back(prog(t, ch, ch + 0.28)) }, { u: 0.69, k: H.ease.back(prog(t, ch + 0.32, ch + 0.6)) }];
    popIn(ctx, t, ch - 0.25, 0, 0, () => chain(ctx, 80, 1000, 1380, t, 10, cuts, 40), 0.4);
    if (t >= ch) { impactLines(ctx, 340, 1380, 60, t, ch, 8, C.pinkD); impactLines(ctx, 720, 1380, 60, t, ch + 0.32, 8, C.pinkD); kana(ctx, 'チョキ', 540, 1260, 70, -0.08, pop(t, ch).s * popOut(t, pr), C.butter); }
    ptext(ctx, t, pr, 540, 1570, 'CHOPS PROTEIN', 104, HO(C.butter, C.pinkD));
  });

  // 3 YOUR TONGUE? it's made of protein
  scene(5, 'heart', TH.sky, 9, (ctx, t) => {
    twinkles(ctx, W, HH, t, 55, 10, NOTM);
    const tg = T(5, 'tongue'), md = T(6, 'made'), pr = T(6, 'protein');
    const ey = t >= pr ? 'shock' : 'normal';
    tongue(ctx, 540, 1000 + bob(t, 0, 7), 1.6, { t, eyes: ey, mouth: t >= pr ? 'O' : 'smile', sq: squash(t, PS(5), 0.2), look: [0, -0.5] });
    kWord(ctx, 'YOUR TONGUE?', 540, 370, 130, t, tg - 0.2, 0.025, HO(C.white, C.skyD));
    if (t >= pr - 0.05) { const r = H.rng(6); for (let i = 0; i < 18; i++) { const a = i / 18 * TAU, d = 400 + (i % 3) * 22; const bx = 540 + Math.cos(a) * d * 0.92, by = 1040 + Math.sin(a) * d * 1.28, cc = [[C.lav, C.lavS], [C.sky, C.skyS], [C.peach, C.peachS], [C.butter, C.butterS]][i % 4]; const p = pop(t, pr + i * 0.025); if (p.s > 0 && by > 520 && by < 1560) cel(ctx, ellP(bx, by, 28 * p.s, 28 * p.s), cc[0], cc[1], -4, -4, 4); } r(); }
    ptext(ctx, t, pr, 540, 1570, 'PROTEIN!', 170, HO(C.butter, C.pinkD));
    if (t >= pr + 0.1) { sweat(ctx, 850, 640, pop(t, pr + 0.1).s * 1.5, 0.3); }
  });

  // 4 THE SLIMY COAT: a close-up of the surface; enzymes chew through the mucus layer
  const HOLES = [[230, 0], [540, 0.25], [850, 0.5]];
  function surface(ctx, t, cut, opts = {}) { // tissue below y=1130, slimy coat above it, holes where it has been eaten
    const top = 960, lvl = 1160;
    const coat = new Path2D(); coat.moveTo(-20, top); for (let x = -20; x <= 1100; x += 40) coat.lineTo(x, top + Math.sin(x * 0.012 + t * 1.8) * 16); coat.lineTo(1100, lvl + 30); coat.lineTo(-20, lvl + 30); coat.closePath();
    ctx.save(); ctx.fillStyle = 'rgba(150,226,200,0.82)'; ctx.fill(coat); ctx.lineWidth = 6; ctx.strokeStyle = C.mintD; ctx.stroke(coat); ctx.restore();
    const r = H.rng(12); for (let i = 0; i < 12; i++) { const bx = r.range(20, 1060), by = r.range(top + 40, lvl - 40); shine(ctx, bx, by + Math.sin(t * 2 + i) * 6, r.range(10, 20), 7, 0, 0.6); }
    // tissue with little cell domes
    ctx.fillStyle = C.pink; ctx.fillRect(0, lvl, W, 900); ctx.fillStyle = C.pinkS; ctx.fillRect(0, lvl + 250, W, 700);
    for (let i = 0; i < 7; i++) { const cx = 78 + i * 154; cel(ctx, ellP(cx, lvl + 92, 76, 96), C.pink, C.pinkS, -7, -6); ctx.fillStyle = C.pinkD; ctx.fill(ellP(cx, lvl + 100, 16, 16)); }
    // eaten holes
    HOLES.forEach(([hx, off], i) => { const k = cut(i); if (k <= 0) return; ctx.save(); const hw = 130 * k; const p = new Path2D(); p.moveTo(hx - hw, top - 30); p.quadraticCurveTo(hx - hw * 0.8, lvl - 40, hx - hw * 0.4, lvl + 8); p.lineTo(hx + hw * 0.4, lvl + 8); p.quadraticCurveTo(hx + hw * 0.8, lvl - 40, hx + hw, top - 30); p.closePath(); ctx.fillStyle = opts.bgCol || '#ddf6ec'; ctx.fill(p); ctx.restore();
      if (opts.raw) { cel(ctx, ellP(hx, lvl + 6, 110 * k, 26), opts.flash ? C.red : '#ff9db4', C.pinkD, -3, -2, 4); } });
    return { top, lvl };
  }
  scene(7, 'star', TH.mint, 11, (ctx, t) => {
    const ch = T(7, 'chewing'), br = T(8, 'bromelain'), cu = T(8, 'cuts'), sl = T(8, 'slimy'), pt = T(9, 'protects');
    const zoom = H.ease.inOut(prog(t, PS(7) - 0.3, br));
    if (zoom < 1) { ctx.save(); ctx.globalAlpha = 1; tongue(ctx, 540, 1040, 1.3 + zoom * 2.6, { t, eyes: 'squeeze', mouth: 'wobble', spots: 0 }); ctx.restore(); kWord(ctx, 'CHEW CHEW', 540, 370, 130, t, ch - 0.3, 0.025, { ...HO(C.white, C.mintD), t1: br - 0.2 }); kana(ctx, 'もぐもぐ', 540, 1590, 92, -0.05, pop(t, ch).s, C.butter); return; }
    const cut = (i) => H.ease.out(prog(t, cu + i * 0.42, cu + i * 0.42 + 0.7));
    const { top, lvl } = surface(ctx, t, cut);
    HOLES.forEach(([hx], i) => { const t0 = br + i * 0.15, k = cut(i), p = pop(t, t0, 1.3); if (p.s <= 0) return; enzyme(ctx, hx + Math.sin(t * 4 + i) * 12, H.lerp(top - 90, lvl - 100, k) + bob(t, i, 5), 1.15 * p.s, { t, ph: i, col: i === 1 ? [C.lavD, '#6a52c2'] : undefined, rot: Math.PI / 2 * 0.0 }); });
    if (t >= cu) kana(ctx, 'ガジガジ', 540, 690, 90, 0.05, pop(t, cu).s, C.butter);
    kWord(ctx, 'SLIMY COAT', 540, 370, 140, t, sl - 0.05, 0.026, HO(C.white, C.mintD));
    if (t >= sl) ptag(ctx, t, sl, 300, 860, 'mucus', C.mint, 56);
    if (t >= pt) ptag(ctx, t, pt, 540, 1555, 'your mouth\'s shield', C.white, 64);
  });

  // 5 ACID: pH 3-4 lands on the exposed spots -> sting
  scene(10, 'star', TH.lav, 13, (ctx, t) => {
    const ac = T(10, 'acid'), ph = T(11, 'ph'), sp = T(12, 'splashes'), ex = T(12, 'exposed'), st = T(13, 'sting');
    const flash = t >= st;
    surface(ctx, t, () => 1, { raw: true, flash, bgCol: '#efe8ff' });
    // drops rain in on the holes (pure function of t: loop by index)
    if (t >= sp - 0.5) for (let i = 0; i < 12; i++) { const hx = HOLES[i % 3][0] + ((i * 73) % 90) - 45, per = 1.0, u = ((t - (sp - 0.5) + i * 0.27) % per) / per; const y = H.lerp(740, 1150, u * u); if (t - (sp - 0.5) + i * 0.27 < per * 0 || y > 1170) continue; drop(ctx, hx, y, 1.15, C.butter, C.butterS); }
    kWord(ctx, "FRUIT ACID", 540, 340, 134, t, ac - 0.1, 0.03, { ...HO(C.butter, C.lavD), t1: st - 0.15 });
    ptext(ctx, t, ph, 540, 620, 'pH 3-4', 200, HO(C.white, C.lavD), st - 0.15);
    if (t >= ex) HOLES.forEach(([hx], i) => { if (t > ex + i * 0.1) sparkle(ctx, hx, 1090, 34 * pop(t, ex + i * 0.1).s, C.white, t * 2, 3); });
    if (t >= ex) ptag(ctx, t, ex, 540, 1520, 'exposed spots', C.white, 70);
    if (flash) {
      ctx.save(); const k = popOut(t, st + 0.14, 0.2); if (k > 0) { ctx.fillStyle = `rgba(255,255,255,${0.6 * k})`; ctx.fillRect(0, 0, W, HH); } ctx.restore();
      kWord(ctx, 'STING!', 540, 620, 260, t, st - 0.05, 0.03, { ...HO(C.white, C.red), wob: 0.05 });
      HOLES.forEach(([hx], i) => impactLines(ctx, hx, 1150, 120, t, st + i * 0.04, 8, C.red));
    }
  });

  // 6 TENDERIZER: same enzyme in the shaker; your tongue is getting tenderized
  scene(14, 'heart', TH.pink, 15, (ctx, t) => {
    twinkles(ctx, W, HH, t, 77, 10, NOTM);
    const mt = T(14, 'meat'), pw = T(14, 'powders'), sm = T(14, 'same'), yes = T(15, 'yes'), tn = T(16, 'tongue'), td = T(16, 'tenderized');
    const soft = H.clamp((t - pw - 0.3) / 2.2);
    const swap = H.ease.inOut(prog(t, yes, tn));
    // steak travels to one side when the tongue joins
    steak(ctx, H.lerp(540, 300, swap), H.lerp(1250, 1290, swap), H.lerp(1.45, 0.98, swap) , { soft, eyes: 'happy', mouth: 'w', sq: squash(t, mt, 0.14) });
    if (swap > 0) { const k = pop(t, yes + 0.1, 1.2); if (k.s > 0) tongue(ctx, 770, 1220, 1.08 * k.s, { t, eyes: t >= td ? 'swirl' : 'shock', mouth: t >= td ? 'wobble' : 'O', spots: 0.9, shake: t >= td ? 5 : 0, sq: t > td ? [1.14 + Math.sin(t * 9) * 0.03, 0.88] : [1, 1] }); }
    const sw = Math.sin(t * 13) * 0.12, sx = H.lerp(620, 540, swap);
    popIn(ctx, t, pw - 0.1, sx, 720, () => shaker(ctx, 0, 0, 1.28, Math.PI + sw), 1.1);
    if (t >= pw) { const r = H.rng(2); for (let i = 0; i < 26; i++) { const dx = r.range(-90, 90), per = r.range(0.6, 0.95), u = ((t + r.range(0, 1)) % per) / per, py = 850 + u * 400; const k = t >= sm ? 1 : 1; ctx.fillStyle = C.plum; ctx.fill(ellP(sx + dx * (0.5 + u * 1.6) + (swap ? (i % 2 ? -1 : 1) * 110 * swap : 0), py, 6 * k, 6 * k)); } }
    kWord(ctx, 'MEAT TENDERIZER', 540, 340, 100, t, mt - 0.05, 0.016, { ...HO(C.white, C.pinkD), t1: td - 0.15 });
    if (t >= sm - 0.1) ptag(ctx, t, sm, 540, 470, 'same enzyme!', C.butter, 66, td - 0.15);
    if (t >= td - 0.1) kWord(ctx, 'TENDERIZED!', 540, 380, 136, t, td - 0.1, 0.022, { ...HO(C.butter, C.pinkD), wob: 0.03 });
    if (t >= td + 0.1) sweat(ctx, 960, 950, pop(t, td + 0.1).s * 1.5, 0.3);
  });

  // 7 HEAT: thermometer climbs, enzyme loses its shape, stops; canned and grilled don't bite
  scene(17, 'star', TH.butter, 17, (ctx, t) => {
    const ht = T(17, 'heat'), ch = T(17, 'changes'), sv = T(18, 'seventy'), cel_ = T(18, 'degrees'), sp = T(19, 'stops'), cn = T(20, 'canned'), gr = T(20, 'grilled'), bt = T(20, 'bite');
    twinkles(ctx, W, HH, t, 91, 10, NOTM);
    if (t < cn - 0.15) {
      const melt = H.smooth(ch, cel_, t);
      for (let i = 0; i < 3; i++) popIn(ctx, t, ht + i * 0.08, 300 + i * 200, 1340, () => flame(ctx, 0, 0, 1.25, t, i * 2), 1.2);
      enzyme(ctx, 400, 1020 + melt * 56, 2.5, { t, melt, eyes: sp < t ? 'swirl' : undefined, open: t >= sp ? 0.02 : undefined });
      popIn(ctx, t, ht, 860, 960, () => thermo(ctx, 0, 0, 1.45, H.ease.out(prog(t, ht, cel_ + 0.3)) * 0.9), 1.1);
      kWord(ctx, 'HEAT!', 540, 360, 170, t, ht - 0.05, 0.03, { ...HO(C.white, C.red), t1: sv - 0.1 });
      ptext(ctx, t, sv, 500, 420, '70-80°C', 180, HO(C.butter, C.red));
      if (t >= ch) ptag(ctx, t, ch, 400, 700, 'shape: gone', C.white, 54, sp - 0.1);
      if (t >= sp - 0.05) { cross(ctx, 400, 700, 1.7, t, sp - 0.05); ptag(ctx, t, sp, 400, 1540, 'enzyme: off', C.lav, 66); }
    } else {
      popIn(ctx, t, cn - 0.05, 300, 980, () => can(ctx, 0, 0, 1.32), 1.2);
      popIn(ctx, t, gr - 0.05, 770, 980, () => grillRing(ctx, 0, 0, 1.45), 1.2);
      ptag(ctx, t, cn, 300, 1240, 'canned', C.sky, 60); ptag(ctx, t, gr, 770, 1240, 'grilled', C.peach, 60);
      check(ctx, 460, 760, 1.5, t, bt - 0.2); check(ctx, 930, 760, 1.5, t, bt - 0.05);
      kWord(ctx, 'NO BITE', 540, 400, 190, t, bt - 0.3, 0.035, HO(C.white, C.mintD));
      pineapple(ctx, 540, 1500 + bob(t, 0, 5), 0.6, { t, eyes: 'happy', mouth: 'w', shadow: false, sq: squash(t, bt, 0.2) });
    }
  });

  // 8 HEALING: plaster on, clock spins, plaster off, sparkles
  scene(21, 'heart', TH.mint, 19, (ctx, t) => {
    twinkles(ctx, W, HH, t, 101, 12, NOTM);
    const rx = T(21, 'relax'), fs = T(21, 'fast'), ti = T(22, 'tiny'), fd = T(22, 'fade'), hr = T(22, 'hours');
    const heal = H.ease.inOut(prog(t, fd, hr + 0.25));
    tongue(ctx, 540, 1020 + bob(t, 0, 7), 1.45, { t, eyes: t >= hr ? 'star' : t >= ti ? 'normal' : 'blink', mouth: t >= fd ? 'w' : 'smile', spots: (1 - heal) * (t >= ti ? 1 : 0.45), band: t < hr ? pop(t, rx).s : popOut(t, hr, 0.25) , sq: squash(t, hr, 0.18) });
    kWord(ctx, 'HEALS FAST', 540, 370, 150, t, fs - 0.1, 0.03, HO(C.white, C.mintD));
    popIn(ctx, t, ti, 200, 600, () => clock(ctx, 0, 0, 100, (t - ti) * 5), 1.2);
    ptext(ctx, t, hr, 540, 1570, 'WITHIN HOURS', 124, HO(C.butter, C.mintD));
    if (t >= hr) { confetti(ctx, t, hr, 540, 800, 22, 5, 1.2); for (let i = 0; i < 5; i++) sparkle(ctx, 250 + i * 145, 720 + (i % 2) * 560, 36 * pop(t, hr + i * 0.05).s, C.white, t * 1.5, 3.5); }
  });

  // 9 QUESTION: the loop, tongue and pineapple face to face
  scene(23, 'star', TH.pink, 23, (ctx, t) => {
    twinkles(ctx, W, HH, t, 111, 12, NOTM);
    const tl = T(23, 'tell'), w = T(24, 'would'), ea = T(24, 'eat'), dg = T(24, 'digests');
    pineapple(ctx, 300, 940 + bob(t, 0, 6), 0.92, { t, eyes: t >= dg ? 'star' : 'happy', bite: t >= dg ? 0.2 + 0.7 * Math.abs(Math.cos(t * 7)) : 0, mouth: 'w', look: [0.6, 0], shadow: false, sq: squash(t, w, 0.15) });
    tongue(ctx, 790, 960 + bob(t, 2, 6), 0.95, { t, eyes: t >= dg ? 'swirl' : 'shock', mouth: t >= dg ? 'wobble' : 'O', look: [-0.6, 0], spots: t >= dg ? 0.6 : 0, shake: t >= dg ? 5 : 0, sq: squash(t, w, 0.15) });
    kWord(ctx, 'VS', 540, 1010, 130, t, tl, 0.05, HO(C.butter, C.red));
    kWord(ctx, 'WOULD YOU', 540, 300, 134, t, w, 0.025, HO(C.white, C.pinkD));
    kWord(ctx, 'STILL EAT IT?', 540, 450, 134, t, ea - 0.1, 0.022, HO(C.butter, C.pinkD));
    popIn(ctx, t, dg, 540, 1490, () => { cel(ctx, rrP(-400, -80, 800, 160, 70), C.white, C.creamS, -4, -4); ctx.fillStyle = C.plum; ctx.font = `700 60px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('tell me in the comments', 0, 4); }, 1);
  });

  function drawScene(ctx, sc, tq) { ctx.save(); bg(ctx, W, HH, tq, sc.theme, sc.seed); sc.draw(ctx, tq); ctx.restore(); }
  function explainer(ctx, W_, H_, t) {
    const tq = q15(t);
    let cur = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].s) cur = i;
    const s = SC[cur], u = cur > 0 ? (t - s.s) / 0.5 : 1;
    if (u < 1) { drawScene(ctx, SC[cur - 1], tq); wipe(ctx, W, HH, H.clamp(u), s.tr, s.wx, s.wy, () => drawScene(ctx, s, tq)); }
    else drawScene(ctx, s, tq);
  }

  // ======================================== SOUND ========================================
  function scoreSound(k) {
    const vis = (t0) => (Math.floor(t0 * 15 + 1e-6) + 1) / 15;
    const bloop = (t, f = 420, g = 1, o = {}) => { k.tone(t, { f: [[0, f * 0.7], [0.07, f * 1.35]], dur: 0.11, gain: 0.2 * g, pan: o.pan, minor: o.minor }); };
    const bell = (t, f, g = 1, o = {}) => { const hz = k.hz(f); k.tone(t, { f: hz, dur: o.dur || 0.9, gain: 0.09 * g, a: 0.004, verb: 0.35, pan: o.pan, minor: o.minor }); };
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i % 2 ? 0.35 : -0.35), minor }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); };
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };
    const chomp = (t, g = 1) => { k.noise(t, { dur: 0.09, color: 'pink', filter: 'bandpass', f: 900, q: 1, gain: 0.2 * g, minor: true }); k.tone(t, { f: [[0, 240], [0.08, 120]], dur: 0.09, gain: 0.14 * g, minor: true }); };
    const snip = (t) => { k.noise(t, { dur: 0.05, filter: 'bandpass', f: 4200, q: 2, gain: 0.25 }); k.tone(t, { f: [[0, 1400], [0.05, 900]], dur: 0.06, gain: 0.1 }); };
    const fizz = (t, d, g = 1) => k.noise(t, { dur: d, filter: 'bandpass', f: 5200, q: 0.7, gain: 0.08 * g, a: 0.05, minor: true });
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6', 'E6'][i % 9]); });
    // 1
    bloop(vis(T(0, 'pineapple')), 520, 0.8, { minor: true });
    for (let i = 0; i < 12; i++) chomp(T(0, 'digests') + i * (Math.PI / 7), 0.8);
    k.play('thud', vis(T(0, 'bite')), { f: 130, gain: 0.35 });
    k.play('error', vis(T(1, 'sting')), { f: 'A3', gain: 0.4 });
    bloop(vis(T(2, 'sour') - 0.05), 380, 1);
    // 2
    big(vis(T(3, 'bromelain')));
    for (let i = 0; i < 5; i++) bloop(vis(T(4, 'mix') + i * 0.12), 480 + i * 60, 0.5, { minor: true });
    snip(vis(T(4, 'chop'))); snip(vis(T(4, 'chop') + 0.32));
    bell(vis(T(4, 'protein')), 'E5', 0.9);
    // 3
    bloop(vis(T(5, 'tongue') - 0.2), 420, 0.9);
    big(vis(T(6, 'protein')));
    // 4
    for (let i = 0; i < 8; i++) chomp(T(7, 'chewing') + i * 0.14, 0.7);
    bloop(vis(T(8, 'bromelain')), 500, 0.7, { minor: true });
    for (let i = 0; i < 14; i++) snip(T(8, 'cuts') + i * 0.14);
    bloop(vis(T(8, 'slimy')), 300, 0.9); bloop(vis(T(9, 'protects')), 560, 0.7);
    // 5
    bloop(vis(T(10, 'acid') - 0.1), 620, 0.9); bell(vis(T(11, 'ph')), 'G5', 1.1);
    for (let i = 0; i < 10; i++) bloop(T(12, 'splashes') + i * 0.17, 760 - i * 22, 0.4, { minor: true });
    fizz(T(12, 'exposed'), 1.4, 1.4);
    k.play('impact', vis(T(13, 'sting')), { f: 120, gain: 0.45 }); k.play('error', vis(T(13, 'sting')) + 0.05, { f: 'A3', gain: 0.45 });
    // 6
    bloop(vis(T(14, 'meat')), 440, 0.8);
    for (let i = 0; i < 14; i++) k.play('tick', T(14, 'powders') + i * 0.16, { f: 2600, gain: 0.25, minor: true });
    bell(vis(T(14, 'same')), 'E5', 1);
    bloop(vis(T(15, 'yes') + 0.1), 360, 1);
    big(vis(T(16, 'tenderized') - 0.1));
    // 7
    k.play('whoosh', T(17, 'heat') - 0.1, { dur: 0.8, gain: 0.5 }); k.noise(T(17, 'heat'), { dur: 4.5, color: 'brown', filter: 'lowpass', f: 900, gain: 0.1, a: 0.3, minor: true });
    k.tone(T(17, 'changes'), { f: [[0, 520], [1.2, 200]], type: 'triangle', dur: 1.25, gain: 0.08, a: 0.05, hold: 0.8 });
    big(vis(T(18, 'seventy')));
    k.play('error', vis(T(19, 'stops') - 0.05), { f: 'E3', gain: 0.4 });
    bloop(vis(T(20, 'canned') - 0.05), 460, 0.9); bloop(vis(T(20, 'grilled') - 0.05), 560, 0.9);
    k.play('success', T(20, 'bite') - 0.1, { f: 'C6', gain: 0.4 });
    // 8
    bloop(vis(T(21, 'relax')), 460, 0.8, { minor: true }); bell(vis(T(21, 'fast')), 'G5', 0.9);
    for (let i = 0; i < 10; i++) k.play('tock', T(22, 'tiny') + i * 0.12, { f: 1400, gain: 0.2, minor: true });
    { const t = vis(T(22, 'hours')); k.play('impact', t, { f: 110, gain: 0.4 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.012, n, 1.6, { dur: 1.5, pan: (i - 1.5) * 0.3 })); twinkle(t + 0.25, 5, 0.9); }
    // 9
    bloop(vis(T(23, 'tell')), 500, 0.8, { minor: true }); bloop(vis(T(24, 'would')), 460, 0.9);
    for (let i = 0; i < 6; i++) chomp(T(24, 'digests') + i * (Math.PI / 7), 0.7);
    { const t = PE(24) + 0.1; ['G4', 'C5', 'E5', 'G5'].forEach((n, i) => bell(t + i * 0.05, n, 1.2, { dur: 1.2 })); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
  window.thumbnail = (ctx) => { const t = 3; bg(ctx, W, HH, t, TH.pink, 3); pineapple(ctx, 540, 800, 1.3, { t, bite: 0.9, look: [0, 0.5], shadow: false }); tongue(ctx, 540, 1420, 1.2, { t, eyes: 'swirl', mouth: 'wobble', spots: 0.9, flash: true, look: [0, -0.8] }); kText(ctx, 'IT BITES', 540, 300, 170, HO(C.white, C.pinkD)); kText(ctx, 'BACK', 540, 470, 170, HO(C.butter, C.pinkD)); };
})();
