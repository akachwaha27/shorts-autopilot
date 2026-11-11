// ================= Kawaii Anime, vertical 1080x1920: "What is the crusty 'sleep' in your eyes?" =================
// Short, 8 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Rheum = mucus, oil, dirt/dust and dead skin cells; no blinking in sleep so it collects in the corners and dries (Cleveland Clinic);
// 15-20 blinks a minute, 14,400-19,200 a day while awake (Healthline). Tear film: mucus, water, oil.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 2.76, "text": "You wake up with dead skin glued in your eyes.", "words": [["you", 0.25], ["wake", 0.46], ["up", 0.74], ["with", 0.88], ["dead", 1.16], ["skin", 1.44], ["glued", 1.71], ["in", 2.06], ["your", 2.2], ["eyes", 2.48]]}, {"s": 3.2, "e": 3.74, "text": "Why?", "words": [["why", 3.2]]}, {"s": 4.31, "e": 7.22, "text": "All day, your eyes wear a thin film of tears,", "words": [["all", 4.31], ["day", 4.57], ["your", 4.83], ["eyes", 5.17], ["wear", 5.51], ["a", 5.86], ["thin", 5.94], ["film", 6.28], ["of", 6.63], ["tears", 6.8]]}, {"s": 7.59, "e": 10.43, "text": "made of water, sticky mucus and a little oil.", "words": [["made", 7.59], ["of", 7.92], ["water", 8.08], ["sticky", 8.49], ["mucus", 8.97], ["and", 9.38], ["a", 9.62], ["little", 9.7], ["oil", 10.18]]}, {"s": 10.9, "e": 13.28, "text": "Dust and old skin cells get trapped in it.", "words": [["dust", 10.9], ["and", 11.19], ["old", 11.4], ["skin", 11.62], ["cells", 11.91], ["get", 12.27], ["trapped", 12.48], ["in", 12.99], ["it", 13.13]]}, {"s": 13.72, "e": 16.62, "text": "But you blink about 15 to 20 times a minute.", "words": [["but", 13.72], ["you", 13.98], ["blink", 14.23], ["about", 14.66], ["15", 15.09], ["to", 15.26], ["20", 15.43], ["times", 15.6], ["a", 16.02], ["minute", 16.11]]}, {"s": 17.04, "e": 19.35, "text": "That's over 14,000 blinks a day,", "words": [["thats", 17.04], ["over", 17.52], ["14000", 17.9], ["blinks", 18.39], ["a", 18.96], ["day", 19.06]]}, {"s": 19.82, "e": 22.1, "text": "and every blink washes that gunk away.", "words": [["and", 19.82], ["every", 20.04], ["blink", 20.41], ["washes", 20.78], ["that", 21.22], ["gunk", 21.51], ["away", 21.81]]}, {"s": 22.54, "e": 23.7, "text": "Then you fall asleep,", "words": [["then", 22.54], ["you", 22.81], ["fall", 23.02], ["asleep", 23.29]]}, {"s": 23.96, "e": 25.21, "text": "and the blinking stops.", "words": [["and", 23.96], ["the", 24.16], ["blinking", 24.36], ["stops", 24.88]]}, {"s": 25.58, "e": 29.66, "text": "Now the mucus, oil, dust and dead skin have nowhere to go.", "words": [["now", 25.58], ["the", 25.86], ["mucus", 26.14], ["oil", 26.6], ["dust", 26.88], ["and", 27.25], ["dead", 27.53], ["skin", 27.9], ["have", 28.27], ["nowhere", 28.64], ["to", 29.29], ["go", 29.47]]}, {"s": 30.01, "e": 32.23, "text": "They drift into the corners of your eyes,", "words": [["they", 30.01], ["drift", 30.28], ["into", 30.62], ["the", 30.89], ["corners", 31.09], ["of", 31.56], ["your", 31.69], ["eyes", 31.96]]}, {"s": 32.7, "e": 34.48, "text": "and overnight they dry out", "words": [["and", 32.7], ["overnight", 32.95], ["they", 33.67], ["dry", 34.0], ["out", 34.24]]}, {"s": 34.54, "e": 35.81, "text": "into crusty little flakes.", "words": [["into", 34.54], ["crusty", 34.77], ["little", 35.12], ["flakes", 35.46]]}, {"s": 36.25, "e": 37.59, "text": "Doctors call it rheum.", "words": [["doctors", 36.25], ["call", 36.77], ["it", 37.07], ["rheum", 37.22]]}, {"s": 37.89, "e": 40.43, "text": "And a little every morning is totally normal.", "words": [["and", 37.89], ["a", 38.1], ["little", 38.17], ["every", 38.58], ["morning", 38.92], ["is", 39.4], ["totally", 39.54], ["normal", 40.02]]}, {"s": 40.85, "e": 44.25, "text": "Honestly, it's just yesterday's cleanup, waiting for you.", "words": [["honestly", 40.85], ["its", 41.46], ["just", 41.68], ["yesterdays", 41.98], ["cleanup", 42.74], ["waiting", 43.27], ["for", 43.8], ["you", 44.02]]}, {"s": 44.59, "e": 47.83, "text": "So what do you call it: sleep, eye boogers, or crust?", "words": [["so", 44.59], ["what", 44.76], ["do", 45.09], ["you", 45.26], ["call", 45.51], ["it", 45.84], ["sleep", 46.0], ["eye", 46.42], ["boogers", 46.67], ["or", 47.25], ["crust", 47.41]]}];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'キラ!?';
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
  // ---------- this story ----------
  const W = W0, HH = H0;
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2, track: 7 });
  const closeAt = (t, t0, d = 0.27) => { const u = (t - t0) / d; return u <= 0 || u >= 1 ? 0 : Math.sin(u * Math.PI); }; // 0 open .. 1 shut .. 0 open
  const blinks = (t, list, d) => list.reduce((m, b) => Math.max(m, closeAt(t, b, d)), 0);

  // big glossy anime eye, front view. close: 0 open .. 1 shut. Lid in skin tone with a heavy lash on its edge.
  function almond(rx, ry) { const p = new Path2D(); p.moveTo(-rx, 0); p.quadraticCurveTo(0, -2 * ry, rx, 0); p.quadraticCurveTo(0, 2 * ry, -rx, 0); p.closePath(); return p; }
  function heroEye(ctx, x, y, s, close = 0, P = {}) {
    const rx = 300, ry = 190, A = almond(rx, ry), iris = P.iris || '#8a6cf0', look = P.look || [0, 0];
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.save(); ctx.clip(A);
    ctx.fillStyle = C.white; ctx.fillRect(-rx, -ry * 1.2, rx * 2, ry * 2.4);
    ctx.fillStyle = C.creamS; ctx.beginPath(); ctx.rect(-rx, -ry * 1.2, rx * 2, 52); ctx.fill();
    const ix = look[0] * 70, iy = look[1] * 26, R = 158, g = ctx.createLinearGradient(0, iy - R, 0, iy + R);
    g.addColorStop(0, C.dark); g.addColorStop(0.42, H.rgba(H.mix(iris, C.dark, 0.35))); g.addColorStop(1, H.rgba(H.mix(iris, '#ffffff', 0.45)));
    ctx.fillStyle = C.dark; ctx.fill(ellP(ix, iy, R + 8, R + 8));
    ctx.fillStyle = g; ctx.fill(ellP(ix, iy, R, R));
    ctx.fillStyle = '#28142c'; ctx.fill(ellP(ix, iy, 76, 76));
    ctx.fillStyle = H.rgba(H.mix(iris, '#ffffff', 0.65), 0.9); ctx.fill(ellP(ix, iy + 104, 84, 28));
    ctx.fillStyle = C.white; ctx.fill(ellP(ix - 56, iy - 62, 56, 46)); ctx.fill(ellP(ix + 60, iy + 52, 24, 20));
    if (P.wet) { ctx.globalAlpha = P.wet * 0.3; ctx.fillStyle = C.sky; ctx.fillRect(-rx, -ry * 1.2, rx * 2, ry * 2.4); ctx.globalAlpha = 1; shine(ctx, -150, -40, 34, 13, -0.5, P.wet); shine(ctx, 170, 40, 22, 9, -0.5, P.wet); }
    if (P.inside) P.inside(ctx, rx, ry);
    // lid
    const cy = H.lerp(-2 * ry, 2 * ry, H.clamp(close));
    const lid = new Path2D(); lid.moveTo(-rx - 10, 0); lid.quadraticCurveTo(0, cy, rx + 10, 0); lid.lineTo(rx + 10, -ry * 1.3); lid.lineTo(-rx - 10, -ry * 1.3); lid.closePath();
    ctx.fillStyle = P.skin || C.peach; ctx.fill(lid);
    ctx.restore();
    ol(ctx, A, 9);
    ctx.save(); ctx.strokeStyle = C.dark; ctx.lineCap = 'round'; ctx.lineWidth = 22; ctx.beginPath(); ctx.moveTo(-rx, 0); ctx.quadraticCurveTo(0, cy, rx, 0); ctx.stroke();
    // lashes on the outer corner
    ctx.lineWidth = 14; for (const a of [0, 1]) { ctx.beginPath(); ctx.moveTo(rx - 12, -8 - a * 26); ctx.lineTo(rx + 42, -44 - a * 40); ctx.stroke(); }
    ctx.restore();
    ctx.restore();
  }
  // chibi kid: (x,y) = head centre. P.eyes, P.mouth, P.look, P.sq
  function kid(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); if (P.sq) { ctx.scale(P.sq[0], P.sq[1]); } if (P.tilt) ctx.rotate(P.tilt);
    ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 290, 130, 20));
    cel(ctx, rrP(-78, 130, 156, 150, 60), C.mint, C.mintS, -9, -9);
    for (const sd of [-1, 1]) cel(ctx, ellP(sd * 94, 196, 26, 40, sd * -0.25), C.mint, C.mintS, -4, -4);
    union(ctx, [ellP(0, -20, 190, 168), ellP(-150, -70, 56, 70), ellP(150, -70, 56, 70), ellP(-70, -158, 70, 54), ellP(70, -158, 70, 54)], C.lavD, 5);
    cel(ctx, ellP(0, 16, 164, 146), C.peach, C.peachS, -9, -9);
    union(ctx, [ellP(-74, -92, 84, 44, 0.25), ellP(62, -96, 90, 40, -0.2)], C.lavD, 0);
    shine(ctx, -82, -128, 34, 10, -0.2, 0.55);
    eye(ctx, -70, 30, 40, 54, '#8a6cf0', P.eyes || 'normal', 1, P.look || [0, 0]); eye(ctx, 70, 30, 40, 54, '#8a6cf0', P.eyes || 'normal', -1, P.look || [0, 0]);
    blush(ctx, -118, 86, 26, 14); blush(ctx, 118, 86, 26, 14);
    mouth(ctx, 0, 100, 18, P.mouth || 'smile');
    ctx.restore();
  }
  // cute brain mascot
  function brain(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const lobes = [[-130, -40, 92], [-60, -110, 88], [50, -116, 90], [132, -46, 90], [-112, 58, 84], [116, 58, 84], [0, 70, 96], [0, -30, 110]].map(([a, b, r]) => ellP(a, b, r, r * 0.92));
    union(ctx, lobes, C.pink, 6);
    ctx.save(); ctx.strokeStyle = C.pinkS; ctx.lineWidth = 11; ctx.lineCap = 'round';
    for (const [a, b, c, d, e, f] of [[-160, -74, -116, -112, -74, -76], [64, -150, 112, -118, 90, -74], [142, 76, 190, 44, 176, -6], [-182, 28, -144, 66, -104, 34]]) { ctx.beginPath(); ctx.moveTo(a, b); ctx.quadraticCurveTo(c, d, e, f); ctx.stroke(); }
    ctx.restore();
    if (P.vis != null && P.vis > 0) { ctx.save(); ctx.globalAlpha = P.vis; const g = ctx.createRadialGradient(0, 112, 8, 0, 112, 120); g.addColorStop(0, C.butterD); g.addColorStop(1, 'rgba(255,216,77,0)'); ctx.fillStyle = g; ctx.fill(ellP(0, 112, 118, 66)); ctx.restore(); }
    eye(ctx, -58, 0, 32, 42, '#8a6cf0', P.eyes || 'normal', 1, P.look || [0, 0]); eye(ctx, 58, 0, 32, 42, '#8a6cf0', P.eyes || 'normal', -1, P.look || [0, 0]);
    blush(ctx, -104, 44, 20, 11); blush(ctx, 104, 44, 20, 11);
    mouth(ctx, 0, 48, 14, P.mouth || 'smile');
    ctx.restore();
  }
  function speck(ctx, x, y, r, seed) { ctx.save(); ctx.translate(x, y); ctx.rotate(seed); const p = roundPoly(starPts(0, 0, r, r * 0.68, 6, seed), r * 0.25); cel(ctx, p, C.brown, C.brownS, -2, -2, 3.5); ctx.restore(); }
  // a tiny sunny world, for the film-strip frames
  function worldFrame(ctx, x, y, w, h, dark) {
    ctx.save(); const p = rrP(x - w / 2, y - h / 2, w, h, 20); 
    if (dark) { ctx.fillStyle = C.dark; ctx.fill(p); }
    else { ctx.save(); ctx.clip(p); ctx.fillStyle = C.sky; ctx.fillRect(x - w / 2, y - h / 2, w, h); ctx.fillStyle = C.mintS; ctx.fill(ellP(x, y + h * 0.56, w * 0.8, h * 0.42)); ctx.fillStyle = C.mint; ctx.fill(ellP(x - w * 0.3, y + h * 0.6, w * 0.6, h * 0.36)); const q = ellP(x + w * 0.24, y - h * 0.22, h * 0.15, h * 0.15); ctx.fillStyle = C.butterD; ctx.fill(q); ctx.fillStyle = C.white; ctx.fill(cloudP(x - w * 0.2, y - h * 0.2, 0.42 * w / 300)); ctx.restore(); }
    ol(ctx, p, 6); ctx.restore();
  }

  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });
  const NOTM = (x, y) => y > 420 && y < 1620;

  // ---------- this story's props ----------
  TH.night = { base: '#ddd3f7', dot: '#cbbff0', acc: '#fff3b0', kind: 'stars' };
  const CR = { f: '#f6dc8f', s: '#d8b45f' }; // dried crust colour
  // an irregular rounded flake (crust or skin)
  function flakeP(r, seed) { const rr = H.rng(seed); const n = 6; return roundPoly(Array.from({ length: n }, (_, i) => { const a = i / n * TAU + rr.range(-0.25, 0.25); const k = rr.range(0.7, 1.05); return [Math.cos(a) * r * k, Math.sin(a) * r * k * 0.8]; }), r * 0.25); }
  function flake(ctx, x, y, r, seed, col = CR.f, sh = CR.s, rot = 0) { if (r <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot + seed * 0.7); cel(ctx, flakeP(r, seed), col, sh, -r * 0.12, -r * 0.12, 3.5); shine(ctx, -r * 0.3, -r * 0.25, r * 0.18, r * 0.1, -0.5, 0.8); ctx.restore(); }
  const skin = (ctx, x, y, r, seed, rot = 0) => flake(ctx, x, y, r, seed, '#fff1e6', '#efc9b4', rot);
  function goo(ctx, x, y, r, t, col = C.pink, sh = C.pinkS) { if (r <= 0) return; const p = new Path2D(); const n = 9; for (let i = 0; i <= n; i++) { const a = i / n * TAU, k = 1 + Math.sin(a * 3 + t * 3) * 0.08; const px = x + Math.cos(a) * r * k, py = y + Math.sin(a) * r * k * 0.82; i ? p.lineTo(px, py) : p.moveTo(px, py); } p.closePath(); cel(ctx, p, col, sh, -r * 0.12, -r * 0.12, 4); shine(ctx, x - r * 0.35, y - r * 0.3, r * 0.22, r * 0.12, -0.5, 0.9); }
  const oilDrop = (ctx, x, y, s) => drop(ctx, x, y, s, C.butterD, C.butterS);
  // gunk item by kind
  function gunk(ctx, kind, x, y, s, t, seed = 1) {
    if (s <= 0) return;
    if (kind === 'mucus') goo(ctx, x, y, 36 * s, t);
    else if (kind === 'oil') oilDrop(ctx, x, y + 6 * s, 1.25 * s);
    else if (kind === 'dust') speck(ctx, x, y, 26 * s, seed);
    else skin(ctx, x, y, 34 * s, seed);
  }
  // a crust flake with a chibi face
  function crustBuddy(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y + bob(t, 1, 6)); ctx.scale(s, s);
    cel(ctx, flakeP(110, 5), CR.f, CR.s, -14, -14, 6);
    shine(ctx, -46, -40, 22, 11, -0.5, 0.9);
    face(ctx, 0, 6, 1.1, { eyes: P.eyes || 'happy', mouth: P.mouth || 'w' });
    for (const sd of [-1, 1]) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); const wav = sd > 0 && P.wave ? Math.sin(t * 9) * 0.5 : 0; ctx.moveTo(sd * 92, 10); ctx.lineTo(sd * 130, -30 - wav * 40); ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }
  function moon(ctx, x, y, R) { const p = new Path2D(); p.arc(x, y, R, 0, TAU); ctx.save(); ctx.clip(p); cel(ctx, p, C.butter, C.butterS, -8, -8, 0); ctx.fillStyle = TH.night.base; ctx.fill(ellP(x + R * 0.55, y - R * 0.35, R * 0.85, R * 0.85)); ctx.restore(); const q = new Path2D(); q.arc(x, y, R, 0.2, TAU - 1.3, false); }
  function sun(ctx, x, y, R, t) { ctx.save(); ctx.translate(x, y); ctx.rotate(t * 0.4); for (let i = 0; i < 10; i++) { ctx.rotate(TAU / 10); cel(ctx, rrP(R + 10, -12, 46, 24, 12), C.butterD, C.butterS, 0, 0, 4); } ctx.restore(); cel(ctx, ellP(x, y, R, R), C.butterD, C.butterS, -8, -8, 6); face(ctx, x, y + 6, R / 80, { eyes: 'happy', mouth: 'smile' }); }
  function zzz(ctx, x, y, t, t0) { for (let i = 0; i < 3; i++) { const u = ((t - t0) * 0.6 + i / 3) % 1; if (t < t0) return; ctx.save(); ctx.globalAlpha = Math.sin(u * Math.PI); kText(ctx, 'Z', x + u * 120 + i * 10, y - u * 220, 60 + i * 18, HO(C.white, C.lavD)); ctx.restore(); } }
  function pill(ctx, w, label, fill, size) { cel(ctx, rrP(-w / 2, -62, w, 124, 62), fill, H.rgba(H.mix(fill, C.plum, 0.18)), -5, -5, 5); ctx.fillStyle = C.plum; ctx.font = `700 ${size}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 4); }

  // 1 HOOK: dead skin glued in your eyes. Why?
  scene(0, null, TH.pink, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, NOTM);
    const de = T(0, 'dead'), sk = T(0, 'skin'), gl = T(0, 'glued'), ey = T(0, 'eyes'), wh = T(1, 'why');
    const c = 0.32 + 0.05 * Math.sin(t * 2);
    const sc = 1.3, ex = 540, ey0 = 900, inner = ex - 300 * sc, outer = ex + 300 * sc;
    const shake = t > wh ? Math.sin(t * 60) * 6 * Math.exp(-(t - wh) * 4) : 0;
    heroEye(ctx, ex + shake, ey0, sc * pop(t, 0.05).s, t > wh ? 0.05 : c, { look: t > wh ? [0, 0] : [-0.4, 0.2], iris: '#8a6cf0' });
    // crust in the inner corner (and a little at the outer one)
    [[inner + 22, ey0 - 4, 50, 1], [inner + 70, ey0 + 34, 40, 2], [inner + 34, ey0 + 62, 32, 3], [inner + 90, ey0 - 24, 28, 4]].forEach(([x, y, r, s], i) => flake(ctx, x, y, r * pop(t, de + i * 0.12, 1.4).s, s));
    [[outer - 34, ey0 + 12, 28, 6], [outer - 70, ey0 + 34, 22, 7]].forEach(([x, y, r, s], i) => flake(ctx, x, y, r * pop(t, sk + i * 0.1, 1.4).s, s));
    if (t >= gl) dotted(ctx, bez([300, 1280], [180, 1220], [140, 1080], [inner + 30, ey0 + 80]), H.clamp((t - gl) * 3), C.pinkD);
    kWord(ctx, 'DEAD SKIN', 540, 300, 150, t, de, 0.03, { ...HO(C.white, C.pinkD), wob: 0.02 });
    ptext(ctx, t, ey, 600, 1380, 'IN YOUR EYES?!', 104, HO(C.butter, C.lavD));
    if (t >= wh) { kana(ctx, '!?', 900, 560, 150, 0.15, pop(t, wh).s, C.butter); impactLines(ctx, ex, ey0, 430, t, wh); ptext(ctx, t, wh + 0.05, 540, 1530, 'WHY?', 130, HO(C.white, C.pinkD)); }
  });

  // 2 TEAR FILM: water, sticky mucus, a little oil; dust and skin get trapped
  scene(2, 'star', TH.sky, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 9, NOTM);
    const ad = T(2, 'all'), ey = T(2, 'eyes'), fi = T(2, 'film'), wa = T(3, 'water'), st = T(3, 'sticky'), mu = T(3, 'mucus'), oi = T(3, 'oil');
    const du = T(4, 'dust'), sk = T(4, 'skin'), tr = T(4, 'trapped');
    popIn(ctx, t, ad, 900, 520, () => sun(ctx, 0, 0, 62, t), 1, du - 0.2);
    ptag(ctx, t, ad + 0.1, 700, 530, 'ALL DAY', C.white, 48, du - 0.2);
    // the eye surface
    popIn(ctx, t, ey, 540, 1420, () => { cel(ctx, rrP(-450, -90, 900, 200, 40), C.white, C.creamS, -6, -6, 6); kText(ctx, 'YOUR EYE', 0, 30, 84, HO(C.white, C.lavD)); });
    const band = (y, h, i) => { const q = new Path2D(); const x0 = 90, x1 = 990, n = 18; q.moveTo(x0, y + h); q.lineTo(x0, y); for (let k = 1; k <= n; k++) q.lineTo(x0 + (x1 - x0) * k / n, y + Math.sin(k * 0.9 + t * 2.4 + i) * 10); q.lineTo(x1, y + h); q.closePath(); return q; };
    // physical order: mucus on the eye, water, a thin oil coat on top
    const L = [[mu, 'MUCUS', C.pink, C.pinkS, 1130, 190, 100], [wa, 'WATER', C.sky, C.skyS, 830, 300, 120], [oi, 'OIL', C.butterD, C.butterS, 700, 130, 84]];
    if (t >= fi && t < wa + 0.1) { ctx.save(); ctx.setLineDash([22, 18]); ol(ctx, band(700, 620, 0), 6, C.skyD); ctx.restore(); }
    L.forEach(([t0, name, c, cs, y, h, fs], i) => {
      const p = pop(t, t0, 1.2); if (p.s <= 0) return;
      ctx.save(); ctx.translate(540, y + h / 2); ctx.scale(1, p.s); ctx.translate(-540, -(y + h / 2)); cel(ctx, band(y, h, i), c, cs, -4, -8, 6); ctx.restore();
      popIn(ctx, t, t0, 540, y + h / 2 + 30, () => kText(ctx, name, 0, 0, fs, HO(C.white, C.plum)));
    });
    ptag(ctx, t, st, 840, 1255, 'sticky!', C.white, 44);
    kWord(ctx, 'TEAR FILM', 540, 300, 150, t, fi - 0.1, 0.03, { ...HO(C.white, C.skyD), t1: tr - 0.12 });
    // dust and old skin cells fall in and stick
    const items = [['dust', 200, 930, du, 1], ['dust', 880, 1050, du + 0.15, 2], ['dust', 300, 1070, du + 0.3, 3], ['skin', 190, 1240, sk, 4], ['skin', 860, 920, sk + 0.15, 5], ['skin', 760, 1050, sk + 0.3, 6]];
    items.forEach(([k, x, y, t0, s]) => { if (t < t0) return; const u = H.ease.out(H.clamp((t - t0) / 0.5)); const yy = H.lerp(480, y, u) + (u >= 1 ? Math.sin(t * 3 + s) * 3 : 0); gunk(ctx, k, x, yy, 1.6, t, s); });
    if (t >= tr) { kWord(ctx, 'TRAPPED!', 540, 300, 160, t, tr, 0.03, HO(C.butter, C.pinkD)); }
  });

  // 3 BLINKING: 15-20 a minute, 14,000+ a day, each one washes the gunk away
  scene(5, 'heart', TH.mint, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 51, 10, NOTM);
    const bl = T(5, 'blink'), n15 = T(5, '15'), mi = T(5, 'minute'), n14 = T(6, '14000'), bs = T(6, 'blinks'), wa = T(7, 'washes'), aw = T(7, 'away'), ev = T(7, 'every');
    const list = [bl + 0.05]; for (let x = bl + 0.75; x < PE(7) + 1; x += 0.8) list.push(x);
    list.push(wa + 0.05);
    const c = blinks(t, list, 0.3);
    const sc = 1.35, ex = 540, ey0 = 880;
    const sweep = H.ease.inOut(H.clamp((t - wa) / (aw - wa + 0.35)));
    const specks = [['dust', 150, -60, 1], ['skin', 60, 50, 2], ['dust', -40, -80, 3], ['skin', 200, 40, 4], ['dust', -120, 50, 5], ['skin', -10, 0, 6]];
    heroEye(ctx, ex, ey0, sc * pop(t, PS(5) - 0.3).s, c, { iris: '#3fb98e', wet: H.clamp((t - ev) * 2) * 0.8, inside: (cx) => {
      specks.forEach(([k, x, y, s], i) => { const o = H.clamp(1 - (sweep - 0.88) * 10); if (o <= 0) return; const kk = Math.min(1, sweep * (1 + i * 0.05)); gunk(cx, k, H.lerp(x, -265, kk), H.lerp(y, 14, kk) + Math.sin(t * 3 + i) * 3, 0.9 * o, t, s); });
    } });
    impactLines(ctx, ex, ey0, 430, t, bl + 0.05);
    kWord(ctx, 'BLINK!', 540, 300, 170, t, bl, 0.03, { ...HO(C.white, C.mintD), t1: n15 - 0.1 });
    if (t >= n15 - 0.05) popIn(ctx, t, n15, 540, 300, () => kText(ctx, '15-20', 0, 0, 180, HO(C.butter, C.pinkD)), 1.2, wa - 0.12);
    ptag(ctx, t, mi, 540, 440, 'blinks a minute', C.white, 52, wa - 0.12);
    if (t >= n14 - 0.05) {
      const k = H.clamp((t - n14) / 0.8), v = Math.round(H.ease.out(k) * 14000);
      popIn(ctx, t, n14, 540, 1390, () => { const sq = squash(t, n14 + 0.8, 0.14); ctx.scale(sq[0], sq[1]); kText(ctx, v.toLocaleString('en-US') + '+', 0, 0, 200, HO(C.butter, C.pinkD)); });
      ptext(ctx, t, bs, 540, 1530, 'BLINKS A DAY', 96, HO(C.white, C.lavD));
    }
    if (t >= wa) { kWord(ctx, 'WASHED AWAY!', 540, 300, 128, t, wa, 0.02, HO(C.white, C.mintD)); dotted(ctx, bez([330, 1180], [220, 1150], [150, 1060], [150, 960]), H.clamp((t - aw) * 3), C.pinkD); }
  });

  // 4 ASLEEP: the blinking stops
  scene(8, 'star', TH.night, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 14, NOTM);
    const fa = T(8, 'fall'), as = T(8, 'asleep'), bk = T(9, 'blinking'), sp = T(9, 'stops');
    moon(ctx, 860, 520, 80);
    const p = pop(t, PS(8) - 0.3);
    ctx.save(); ctx.translate(540, 1000); ctx.scale(p.sx, p.sy); ctx.translate(-540, -1000);
    cel(ctx, rrP(110, 1050, 860, 470, 60), C.lav, C.lavS, -8, -8, 6); // bed
    cel(ctx, ellP(540, 960, 330, 120), C.white, C.creamS, -8, -8, 6); // pillow
    kid(ctx, 540, 880, 1.05, { eyes: 'blink', mouth: 'flat', sq: [1 + Math.sin(t * 2.2) * 0.01, 1 - Math.sin(t * 2.2) * 0.01] });
    const bl = new Path2D(); bl.moveTo(110, 1120); for (let i = 1; i <= 8; i++) bl.quadraticCurveTo(110 + (i - 0.5) * 107.5, 1090 + (i % 2 ? -18 : 18), 110 + i * 107.5, 1120); bl.lineTo(970, 1480); bl.lineTo(110, 1480); bl.closePath();
    cel(ctx, bl, C.pink, C.pinkS, -8, -8, 6);
    for (let i = 0; i < 5; i++) heart(ctx, 220 + i * 160, 1300 + (i % 2) * 70, 22, C.white);
    ctx.restore();
    zzz(ctx, 760, 760, t, as);
    kWord(ctx, 'ASLEEP...', 540, 300, 150, t, fa, 0.03, { ...HO(C.white, C.lavD), t1: bk - 0.12 });
    if (t >= bk - 0.05) kWord(ctx, 'BLINKS: OFF', 540, 300, 140, t, bk, 0.025, HO(C.butter, C.lavD));
    if (t >= sp) cross(ctx, 540, 1580, 1.0, t, sp);
  });

  // 5 NOWHERE TO GO: gunk drifts into the corners
  scene(10, 'heart', TH.lav, 17, (ctx, t) => {
    twinkles(ctx, W, HH, t, 71, 9, NOTM);
    const mu = T(10, 'mucus'), oi = T(10, 'oil'), du = T(10, 'dust'), sk = T(10, 'skin'), no = T(10, 'nowhere'), dr = T(11, 'drift'), co = T(11, 'corners');
    const sc = 1.35, ex = 540, ey0 = 860, inner = ex - 300 * sc, outer = ex + 300 * sc;
    heroEye(ctx, ex, ey0, sc * pop(t, PS(10) - 0.4).s, 1, {});
    zzz(ctx, 860, 720, t, PS(10));
    if (pop(t, PS(10) - 0.4).s > 0.5) { ctx.save(); ctx.strokeStyle = C.dark; ctx.lineWidth = 12; ctx.lineCap = 'round'; for (let i = 1; i <= 5; i++) { const u = i / 6, x = ex + (-300 + 600 * u) * sc, y = ey0 + 2 * u * (1 - u) * 380 * sc, a = Math.atan2(380 * (1 - 2 * u) * 2, 600) + Math.PI / 2; ctx.beginPath(); ctx.moveTo(x, y + 6); ctx.lineTo(x + Math.cos(a) * 46, y + Math.sin(a) * 46); ctx.stroke(); } ctx.restore(); }
    const items = [['mucus', 'MUCUS', 180, mu, 1, -1], ['oil', 'OIL', 400, oi, 2, -1], ['dust', 'DUST', 610, du, 3, 1], ['skin', 'DEAD SKIN', 860, sk, 4, 1]];
    const mv = H.ease.inOut(H.clamp((t - dr) / 1.3));
    items.forEach(([k, label, x, t0, s, side], i) => {
      const p = pop(t, t0, 1.3); if (p.s <= 0) return;
      const wig = t > no && mv <= 0 ? Math.sin(t * 14 + i) * 8 : 0;
      const tx = side < 0 ? inner + 40 + i * 34 : outer - 40 - (i - 2) * 34, ty = ey0 + 10 + (i % 2) * 30;
      const x2 = H.lerp(x, tx, mv) + wig, y2 = H.lerp(1300, ty, mv) - Math.sin(mv * Math.PI) * 120;
      gunk(ctx, k, x2, y2, p.s * H.lerp(2.0, 1.15, mv), t, s);
      if (mv < 0.05) popIn(ctx, t, t0 + 0.05, x, 1420, () => tag(ctx, 0, 0, label, C.white, 1, 44), 1.2, dr - 0.15);
      if (t > no && mv <= 0) kText(ctx, '?', x + 44, 1220 + Math.sin(t * 6 + i) * 6, 56, HO(C.butter, C.plum));
    });
    kWord(ctx, 'NOWHERE', 540, 260, 140, t, no, 0.03, { ...HO(C.white, C.pinkD), t1: co - 0.12 });
    if (t < co - 0.05) kWord(ctx, 'TO GO!', 540, 400, 120, t, no + 0.25, 0.03, { ...HO(C.butter, C.pinkD), t1: co - 0.12 });
    if (t >= co - 0.05) {
      kWord(ctx, 'THE CORNERS', 540, 300, 130, t, co, 0.025, HO(C.white, C.lavD));
      dotted(ctx, bez([400, 1400], [260, 1380], [170, 1200], [inner + 40, ey0 + 90]), H.clamp((t - co) * 3), C.pinkD);
      dotted(ctx, bez([680, 1400], [820, 1380], [910, 1200], [outer - 40, ey0 + 90]), H.clamp((t - co - 0.1) * 3), C.pinkD);
    }
  });

  // 6 DRY OUT: overnight the goo dries into crusty flakes. Rheum.
  scene(12, 'star', TH.butter, 23, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 8, NOTM);
    const ov = T(12, 'overnight'), dy = T(12, 'dry'), cr = T(13, 'crusty'), fl = T(13, 'flakes'), dc = T(14, 'doctors'), rh = T(14, 'rheum');
    const sc = 2.1, ex = 1040, ey0 = 860, inner = ex - 300 * sc; // inner corner at x=410
    heroEye(ctx, ex, ey0, sc * pop(t, PS(12) - 0.4).s, 0.7, { iris: '#8a6cf0', look: [-0.6, 0] });
    if (t >= ov - 0.05) popIn(ctx, t, ov, 220, 560, () => clock(ctx, 0, 0, 90, (t - ov) * 10), 1, dc - 0.1);
    const dryK = H.clamp((t - dy) / (cr - dy + 0.1)), split = H.ease.out(H.clamp((t - cr) / 0.4));
    const col = H.rgba(H.mix(C.sky, CR.f, dryK)), sh = H.rgba(H.mix(C.skyS, CR.s, dryK));
    const gx = inner + 50, gy = ey0 + 40;
    if (split <= 0) goo(ctx, gx, gy, 130 * pop(t, PS(12) - 0.2).s * (1 - 0.18 * dryK), t * (1 - dryK), col, sh);
    else [[-60, -40, 50, 1], [40, -50, 44, 2], [-30, 50, 46, 3], [60, 40, 38, 4], [0, 0, 34, 5]].forEach(([dx, dy2, r, s]) => flake(ctx, gx + dx * (0.9 + 0.6 * split), gy + dy2 * (0.9 + 0.6 * split), r * 1.4, s));
    // steam puffs while it dries
    if (t >= dy && t < cr + 0.3) for (let i = 0; i < 3; i++) { const u = ((t - dy) * 1.2 + i / 3) % 1; ctx.save(); ctx.globalAlpha = Math.sin(u * Math.PI) * 0.9; ctx.fillStyle = C.white; ctx.fill(cloudP(gx - 40 + i * 40, gy - 120 - u * 200, 0.35 + u * 0.2)); ol(ctx, cloudP(gx - 40 + i * 40, gy - 120 - u * 200, 0.35 + u * 0.2), 3); ctx.restore(); }
    if (t > fl) { sparkle(ctx, gx + 140, gy - 90, 40 * pop(t, fl).s, C.white, 0, 4); sparkle(ctx, gx - 120, gy + 120, 30 * pop(t, fl + 0.1).s, C.butter, 0, 4); }
    kWord(ctx, 'OVERNIGHT', 540, 300, 140, t, ov, 0.025, { ...HO(C.white, C.lavD), t1: dy - 0.12 });
    if (t >= dy - 0.05 && t < cr) kWord(ctx, 'DRYING...', 540, 300, 140, t, dy, 0.025, { ...HO(C.white, C.skyD), t1: cr - 0.12 });
    if (t >= cr - 0.05) kWord(ctx, 'CRUSTY!', 540, 300, 160, t, cr, 0.03, HO(C.butter, C.pinkD));
    ptag(ctx, t, dc, 540, 1245, 'doctors call it', C.white, 52);
    if (t >= rh) { popIn(ctx, t, rh, 540, 1475, () => { const q = squash(t, rh + 0.1, 0.14); ctx.scale(q[0], q[1]); kText(ctx, 'RHEUM', 0, 0, 200, HO(C.butter, C.pinkD)); }); ptag(ctx, t, rh + 0.2, 540, 1615, 'sounds like "room"', C.white, 44); }
  });

  // 7 MORNING: totally normal, yesterday's cleanup
  scene(15, 'heart', TH.mint, 29, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 9, NOTM);
    const mo = T(15, 'morning'), to = T(15, 'totally'), nm = T(15, 'normal'), ye = T(16, 'yesterdays'), cl = T(16, 'cleanup'), wt = T(16, 'waiting');
    popIn(ctx, t, PS(15) - 0.2, 870, 560, () => sun(ctx, 0, 0, 72, t));
    const s = pop(t, PS(15) - 0.3);
    const kx = t >= ye ? H.lerp(540, 380, H.ease.inOut(H.clamp((t - ye) / 0.5))) : 540;
    kid(ctx, kx, 860, 1.2 * s.s, { eyes: t > nm ? 'happy' : 'normal', mouth: t > nm ? 'smile' : 'o', look: [0, 0], sq: squash(t, nm, 0.12) });
    for (const sd of [-1, 1]) flake(ctx, kx + sd * 30 * 1.2, 860 + 44 * 1.2, 12 * s.s, sd > 0 ? 2 : 3);
    kWord(ctx, 'EVERY MORNING', 540, 300, 120, t, mo, 0.02, { ...HO(C.white, C.mintD), t1: ye - 0.12 });
    if (t >= to - 0.05 && t < ye) { kWord(ctx, 'TOTALLY', 540, 1340, 120, t, to, 0.025, { ...HO(C.white, C.lavD), t1: ye - 0.12 }); kWord(ctx, 'NORMAL', 540, 1480, 140, t, nm, 0.025, { ...HO(C.butter, C.mintD), t1: ye - 0.12 }); check(ctx, 900, 1480, 1.0, t, nm + 0.1); }
    if (t >= ye) {
      popIn(ctx, t, cl, 790, 1000, () => crustBuddy(ctx, 0, 0, 1.15, t, { wave: t > wt }));
      kWord(ctx, "YESTERDAY'S", 540, 300, 112, t, ye, 0.02, HO(C.white, C.lavD));
      kWord(ctx, 'CLEANUP', 540, 1420, 150, t, cl, 0.025, HO(C.butter, C.mintD));
      if (t > wt) { heart(ctx, 930, 820, 34 * pop(t, wt).s); kana(ctx, 'キラ', 940, 1200, 70, -0.1, pop(t, wt + 0.1).s, C.butter); }
    }
  });

  // 8 QUESTION: sleep, eye boogers, or crust?
  scene(17, 'star', TH.pink, 37, (ctx, t) => {
    twinkles(ctx, W, HH, t, 111, 10, NOTM);
    const wh = T(17, 'what'), sl = T(17, 'sleep'), bo = T(17, 'eye'), cr = T(17, 'crust');
    kWord(ctx, 'WHAT DO YOU', 540, 270, 112, t, wh, 0.02, HO(C.white, C.pinkD));
    kWord(ctx, 'CALL IT?', 540, 400, 130, t, wh + 0.3, 0.025, HO(C.butter, C.pinkD));
    kid(ctx, 300, 820, 1.15 * pop(t, PS(17) - 0.2).s, { eyes: t > cr ? 'star' : 'normal', mouth: t > cr ? 'smile' : 'o', look: [1, -0.6], tilt: Math.sin(t * 2) * 0.05 });
    thought(ctx, 740, 680, 1.05 * pop(t, PS(17)).s, [520, 780], 3, t);
    crustBuddy(ctx, 830, 1000, 1.0 * pop(t, wh + 0.2).s, t, { eyes: 'normal', mouth: 'o' });
    [[sl, 'SLEEP?', C.sky, 1240], [bo, 'EYE BOOGERS?', C.mint, 1390], [cr, 'CRUST?', C.butter, 1540]].forEach(([t0, label, fill, y], i) => popIn(ctx, t, t0, 540, y, () => { ctx.rotate((i - 1) * 0.02); pill(ctx, label.length > 8 ? 760 : 520, label, fill, 76); }, 1.3));
    if (t > cr + 0.3) heart(ctx, 900, 1240, 40 * pop(t, cr + 0.3).s);
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
    const bell = (t, f, g = 1, o = {}) => { k.tone(t, { f: k.hz(f), dur: o.dur || 0.9, gain: 0.09 * g, a: 0.004, verb: 0.35, pan: o.pan, minor: o.minor }); };
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i - n / 2) * 0.2, minor }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); };
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };
    const squish = (t, g = 1) => { k.tone(t, { f: [[0, 260], [0.12, 520]], type: 'triangle', dur: 0.14, gain: 0.12 * g, minor: true }); k.noise(t, { dur: 0.08, filter: 'lowpass', f: 900, gain: 0.08 * g, minor: true }); };
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6'][i % 8]); });
    // 1 hook
    big(vis(T(0, 'dead')));
    [0, 0.12, 0.24, 0.36].forEach((d) => squish(T(0, 'dead') + d, 0.8));
    bloop(vis(T(0, 'eyes')), 520, 0.8, { minor: true });
    k.play('error', vis(T(1, 'why')), { f: 'A3', gain: 0.35 });
    // 2 tear film
    bloop(vis(T(2, 'all')), 600, 0.7, { minor: true });
    bloop(vis(T(2, 'eyes')), 460, 0.7, { minor: true });
    bell(vis(T(2, 'film')), 'E5', 0.9);
    [['water', 480], ['mucus', 340], ['oil', 640]].forEach(([w, fq]) => bloop(vis(T(3, w)), fq, 1));
    squish(T(3, 'sticky'), 1);
    [0, 0.15, 0.3].forEach((d) => { k.play('blip', T(4, 'dust') + d, { f: 'A5', gain: 0.4, minor: true }); k.play('blip', T(4, 'skin') + d, { f: 'E5', gain: 0.4, minor: true }); });
    k.play('stamp', vis(T(4, 'trapped')), { gain: 0.45 });
    // 3 blinking
    big(vis(T(5, 'blink')));
    for (let x = T(5, 'blink') + 0.75; x < PE(7) + 1; x += 0.8) k.play('swish', x, { dur: 0.18, gain: 0.4, minor: true });
    bell(vis(T(5, '15')), 'G5', 1.1);
    for (let i = 0; i < 12; i++) k.play('count', T(6, '14000') + i * 0.065, { gain: 0.5, minor: true });
    { const t = vis(T(6, '14000') + 0.8); k.play('impact', t, { f: 110, gain: 0.4 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.012, n, 1.4, { dur: 1.3 })); }
    k.play('whoosh', T(7, 'washes'), { dur: 0.5, gain: 0.5 });
    k.play('success', vis(T(7, 'away')), { f: 'C6', gain: 0.35 });
    // 4 asleep
    k.tone(T(8, 'fall'), { f: [[0, 520], [0.9, 260]], type: 'triangle', dur: 0.95, gain: 0.07, a: 0.05, hold: 0.5 });
    twinkle(T(8, 'asleep'), 5, 0.6);
    k.play('error', vis(T(9, 'stops')) + 0.1, { f: 'E3', gain: 0.35 });
    // 5 nowhere to go
    [['mucus', 340], ['oil', 560], ['dust', 460], ['skin', 400]].forEach(([w, fq]) => bloop(vis(T(10, w)), fq, 0.9));
    k.play('buzz', vis(T(10, 'nowhere')), { gain: 0.25 });
    k.play('whoosh', T(11, 'drift'), { dur: 1.2, gain: 0.35 });
    k.play('success', vis(T(11, 'corners')), { f: 'G5', gain: 0.3 });
    // 6 dry out
    for (let i = 0; i < 8; i++) k.play('tock', T(12, 'overnight') + i * 0.12, { f: 1400, gain: 0.2, minor: true });
    k.noise(T(12, 'dry'), { dur: 1.2, filter: 'highpass', f: 3000, gain: 0.05, a: 0.3 });
    k.play('slap', vis(T(13, 'crusty')), { gain: 0.5 }); k.play('paper', vis(T(13, 'crusty')) + 0.05, { gain: 0.4 });
    twinkle(T(13, 'flakes'), 4, 0.8);
    bloop(vis(T(14, 'doctors')), 460, 0.7, { minor: true });
    big(vis(T(14, 'rheum')));
    // 7 morning
    twinkle(T(15, 'morning'), 4, 0.8);
    { const t = vis(T(15, 'normal') + 0.1); k.play('success', t, { f: 'C6', gain: 0.4 }); }
    bloop(vis(T(16, 'cleanup')), 420, 1);
    bloop(vis(T(16, 'waiting')), 560, 0.7, { minor: true });
    // 8 question
    bloop(vis(T(17, 'what')), 500, 0.8, { minor: true });
    [['sleep', 480], ['eye', 560], ['crust', 640]].forEach(([w, fq]) => bloop(vis(T(17, w)), fq, 1));
    { const t = PE(17) + 0.1; ['G4', 'C5', 'E5', 'G5'].forEach((n, i) => bell(t + i * 0.05, n, 1.2, { dur: 1.2 })); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
