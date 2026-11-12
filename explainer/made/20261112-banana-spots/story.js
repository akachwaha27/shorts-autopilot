// ================= Kawaii Anime, vertical 1080x1920: "Why do bananas get brown spots?" =================
// Short, 7 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Ethylene ripening hormone; chlorophyll breaks down, starch -> sugars; polyphenol oxidase polymerises phenols into brown pigment (Science ABC);
// sugars ~1.3% -> ~17% of the fruit (Alimentarium, plantain/ripe fruit); spots glow with blue halos under UV from chlorophyll breakdown products near dying cells (phys.org 2009, Krautler/Turro).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 2.39, "text": "Why does a banana get brown spots?", "words": [["why", 0.25], ["does", 0.49], ["a", 0.8], ["banana", 0.88], ["get", 1.36], ["brown", 1.6], ["spots", 1.99]]}, {"s": 2.83, "e": 4.61, "text": "You'd never guess it's on purpose.", "words": [["youd", 2.83], ["never", 3.11], ["guess", 3.45], ["its", 3.79], ["on", 4.0], ["purpose", 4.13]]}, {"s": 4.99, "e": 7.14, "text": "It starts with a gas called ethylene.", "words": [["it", 4.99], ["starts", 5.14], ["with", 5.57], ["a", 5.85], ["gas", 5.92], ["called", 6.14], ["ethylene", 6.57]]}, {"s": 7.5, "e": 9.24, "text": "The banana makes it all by itself,", "words": [["the", 7.5], ["banana", 7.7], ["makes", 8.08], ["it", 8.4], ["all", 8.53], ["by", 8.73], ["itself", 8.86]]}, {"s": 9.79, "e": 12.13, "text": "and it flips ripening on like a switch.", "words": [["and", 9.79], ["it", 10.02], ["flips", 10.17], ["ripening", 10.55], ["on", 11.15], ["like", 11.3], ["a", 11.6], ["switch", 11.68]]}, {"s": 12.57, "e": 15.55, "text": "First, the green chlorophyll in the peel breaks down,", "words": [["first", 12.57], ["the", 12.92], ["green", 13.13], ["chlorophyll", 13.47], ["in", 14.24], ["the", 14.38], ["peel", 14.58], ["breaks", 14.86], ["down", 15.28]]}, {"s": 16.14, "e": 18.6, "text": "so the yellow underneath finally shows.", "words": [["so", 16.14], ["the", 16.29], ["yellow", 16.52], ["underneath", 16.96], ["finally", 17.71], ["shows", 18.23]]}, {"s": 19.06, "e": 21.11, "text": "Inside, starch turns into sugar.", "words": [["inside", 19.06], ["starch", 19.53], ["turns", 20.01], ["into", 20.4], ["sugar", 20.72]]}, {"s": 21.56, "e": 25.33, "text": "Sugar can climb from about 1 percent to around 17.", "words": [["sugar", 21.56], ["can", 22.03], ["climb", 22.32], ["from", 22.79], ["about", 23.16], ["1", 23.64], ["percent", 23.73], ["to", 24.39], ["around", 24.58], ["17", 25.14]]}, {"s": 25.8, "e": 27.59, "text": "Then the peel starts getting old.", "words": [["then", 25.8], ["the", 26.07], ["peel", 26.27], ["starts", 26.53], ["getting", 26.93], ["old", 27.39]]}, {"s": 27.99, "e": 30.66, "text": "Little clusters of cells shut down on schedule,", "words": [["little", 27.99], ["clusters", 28.4], ["of", 28.94], ["cells", 29.08], ["shut", 29.42], ["down", 29.7], ["on", 29.97], ["schedule", 30.11]]}, {"s": 31.19, "e": 34.06, "text": "and an enzyme called polyphenol oxidase", "words": [["and", 31.19], ["an", 31.44], ["enzyme", 31.61], ["called", 32.11], ["polyphenol", 32.62], ["oxidase", 33.46]]}, {"s": 34.35, "e": 37.06, "text": "links chemicals in the peel into brown pigment.", "words": [["links", 34.35], ["chemicals", 34.69], ["in", 35.32], ["the", 35.46], ["peel", 35.67], ["into", 35.94], ["brown", 36.22], ["pigment", 36.57]]}, {"s": 37.46, "e": 38.48, "text": "That's your spot.", "words": [["thats", 37.46], ["your", 37.85], ["spot", 38.17]]}, {"s": 38.77, "e": 40.25, "text": "And here's the wild part.", "words": [["and", 38.77], ["heres", 39.01], ["the", 39.4], ["wild", 39.63], ["part", 39.94]]}, {"s": 40.68, "e": 42.12, "text": "Under ultraviolet light,", "words": [["under", 40.68], ["ultraviolet", 41.03], ["light", 41.78]]}, {"s": 42.62, "e": 44.97, "text": "each spot glows with a bright blue ring,", "words": [["each", 42.62], ["spot", 42.92], ["glows", 43.21], ["with", 43.58], ["a", 43.87], ["bright", 43.94], ["blue", 44.39], ["ring", 44.68]]}, {"s": 45.41, "e": 47.39, "text": "from leftover bits of chlorophyll.", "words": [["from", 45.41], ["leftover", 45.69], ["bits", 46.23], ["of", 46.51], ["chlorophyll", 46.64]]}, {"s": 47.85, "e": 50.66, "text": "So more spots usually means a sweeter banana.", "words": [["so", 47.85], ["more", 48.01], ["spots", 48.31], ["usually", 48.69], ["means", 49.22], ["a", 49.6], ["sweeter", 49.67], ["banana", 50.2]]}, {"s": 51.02, "e": 52.0, "text": "Which one do you grab:", "words": [["which", 51.02], ["one", 51.31], ["do", 51.48], ["you", 51.6], ["grab", 51.77]]}, {"s": 52.38, "e": 54.56, "text": "green, yellow, or totally spotty?", "words": [["green", 52.38], ["yellow", 52.8], ["or", 53.3], ["totally", 53.47], ["spotty", 54.05]]}];
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
    ctx.save(); ctx.globalAlpha = th.noCloud ? 0 : th.kind === 'clouds' ? 0.95 : 0.7; ctx.fillStyle = C.white;
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

  const W = W0, HH = H0;
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2, track: 7 });
  function zzz(ctx, x, y, t, t0) { for (let i = 0; i < 3; i++) { const u = ((t - t0) * 0.6 + i / 3) % 1; if (t < t0) return; ctx.save(); ctx.globalAlpha = Math.sin(u * Math.PI); kText(ctx, 'Z', x + u * 120 + i * 10, y - u * 220, 60 + i * 18, HO(C.white, C.lavD)); ctx.restore(); } }
  function pill(ctx, w, label, fill, size) { cel(ctx, rrP(-w / 2, -62, w, 124, 62), fill, H.rgba(H.mix(fill, C.plum, 0.18)), -5, -5, 5); ctx.fillStyle = C.plum; ctx.font = `700 ${size}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 4); }

  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });
  const NOTM = (x, y) => y > 420 && y < 1620;
  TH.uv = { base: '#2b2145', dot: '#3a2d5c', acc: '#5d4a96', kind: 'stars', noCloud: true };

  // ---------- this story's props ----------
  const BN = { g: '#a6dc6e', gS: '#74b850', y: '#ffd84d', yS: '#efb93a', spot: '#8a5236', spotS: '#6a3a24', stem: '#8f7a3e' };
  const BL = 620, BW = 150, BB = 170;
  const bq = (u) => { const v = 1 - u; return [v * v * (-BL / 2) + 2 * v * u * 0 + u * u * (BL / 2), v * v * (-BB / 2) + 2 * v * u * BB + u * u * (-BB / 2)]; };
  const bt = (u) => { const dx = 2 * (1 - u) * (BL / 2) + 2 * u * (BL / 2), dy = 2 * (1 - u) * (BB + BB / 2) + 2 * u * (-BB / 2 - BB); const l = Math.hypot(dx, dy); return [dx / l, dy / l]; };
  const bw = (u) => BW * (0.16 + 0.84 * Math.pow(Math.sin(Math.PI * u), 0.6));
  const bpt = (u, v) => { const [x, y] = bq(u), [tx, ty] = bt(u), w = bw(u); return [x - ty * v * w, y + tx * v * w]; };
  const BODY = (() => { const p = new Path2D(), N = 48; for (let i = 0; i <= N; i++) { const [x, y] = bpt(i / N, -0.5); i ? p.lineTo(x, y) : p.moveTo(x, y); } for (let i = N; i >= 0; i--) { const [x, y] = bpt(i / N, 0.5); p.lineTo(x, y); } p.closePath(); return p; })();
  const SPOTS = (() => { const r = H.rng(77), out = []; for (let i = 0; i < 16; i++) out.push({ u: r.range(0.14, 0.86), v: r.range(-0.3, 0.3), r: r.range(12, 24), k: r.range(0.6, 1), seed: i }); return out.filter((s) => !(Math.abs(s.u - 0.5) < 0.13 && s.v < 0.2)); })();
  // a chibi banana. (x,y) = centre, P.ripe 0 green .. 1 yellow, P.spots: [0..1 per spot] or a number, P.glow, P.tint, P.face
  function banana(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); if (P.sq) ctx.scale(P.sq[0], P.sq[1]); if (P.rot) ctx.rotate(P.rot);
    ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, BB * 0.55 + 70, BL * 0.42, 22));
    const r = H.clamp(P.ripe == null ? 1 : P.ripe), base = H.rgba(H.mix(BN.g, BN.y, r)), sh = H.rgba(H.mix(BN.gS, BN.yS, r));
    // stem + tip
    { const [x1, y1] = bq(1), [tx, ty] = bt(1); ctx.save(); ctx.translate(x1, y1); ctx.rotate(Math.atan2(ty, tx)); cel(ctx, rrP(-10, -16, 62, 32, 10), H.rgba(H.mix('#86b956', BN.stem, r)), '#5f6a2c', -3, -3, 5); ctx.restore(); }
    { const [x0, y0] = bq(0); cel(ctx, ellP(x0 - 6, y0 - 4, 15, 13), '#5b3a2a', '#3e271c', -2, -2, 4); }
    cel(ctx, BODY, base, sh, -9, -9, 6);
    ctx.save(); ctx.clip(BODY);
    ctx.strokeStyle = 'rgba(255,255,255,0.55)'; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 3; i <= 40; i++) { const [px, py] = bpt(i / 44, -0.3); i === 3 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); } ctx.stroke();
    ctx.strokeStyle = H.rgba(H.mix(BN.gS, BN.yS, r), 0.9); ctx.lineWidth = 5; ctx.beginPath(); for (let i = 2; i <= 42; i++) { const [px, py] = bpt(i / 44, 0.18); i === 2 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); } ctx.stroke();
    const sp = P.spots || 0;
    SPOTS.forEach((o, i) => {
      const k = Array.isArray(sp) ? sp[i] || 0 : H.clamp(sp * SPOTS.length - i); if (k <= 0) return;
      const [px, py] = bpt(o.u, o.v), [tx, ty] = bt(o.u), a = Math.atan2(ty, tx);
      cel(ctx, ellP(px, py, o.r * k, o.r * 0.78 * k, a + o.seed), BN.spot, BN.spotS, -2, -2, 0);
      if (P.glow) { const g = P.glow * (0.75 + 0.25 * Math.sin(t * 5 + i)); ctx.save(); ctx.globalAlpha = H.clamp(g); ctx.shadowColor = '#5ff4ff'; ctx.shadowBlur = 26; ctx.strokeStyle = '#8ff7ff'; ctx.lineWidth = 7; ctx.stroke(ellP(px, py, o.r * k + 9, o.r * 0.78 * k + 9, a + o.seed)); ctx.restore(); }
    });
    if (P.tint) { ctx.fillStyle = `rgba(110,70,210,${0.4 * P.tint})`; ctx.fill(BODY); }
    ctx.restore();
    ol(ctx, BODY, 6);
    if (P.face !== false) face(ctx, 0, 30, 1.0, { eyes: P.eyes || 'normal', mouth: P.mouth || 'smile', look: P.look || [0, 0] });
    ctx.restore();
  }
  function ethylene(ctx, x, y, s, rot = 0) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const Hs = [[-58, -30], [-58, 30], [58, -30], [58, 30]];
    ctx.strokeStyle = C.plum; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath();
    Hs.forEach(([hx, hy]) => { ctx.moveTo(hx < 0 ? -26 : 26, 0); ctx.lineTo(hx, hy); }); ctx.moveTo(-20, -8); ctx.lineTo(20, -8); ctx.moveTo(-20, 8); ctx.lineTo(20, 8); ctx.stroke();
    Hs.forEach(([hx, hy]) => { cel(ctx, ellP(hx, hy, 15, 15), C.white, C.creamS, -2, -2, 4); shine(ctx, hx - 5, hy - 5, 4, 3); });
    for (const sx of [-26, 26]) { cel(ctx, ellP(sx, 0, 25, 25), C.lavD, '#6f55c8', -3, -3, 5); shine(ctx, sx - 8, -8, 7, 4); }
    ctx.restore();
  }
  function toggle(ctx, x, y, on, s = 1) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const fill = H.rgba(H.mix('#e4d8f6', C.mintD, on)); cel(ctx, rrP(-160, -72, 320, 144, 72), fill, H.rgba(H.mix('#c9b8ea', '#2fa078', on)), -5, -5, 6);
    ctx.fillStyle = C.white; ctx.font = `700 54px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.globalAlpha = on; ctx.fillText('ON', -62, 4); ctx.globalAlpha = 1 - on; ctx.fillStyle = C.plum; ctx.fillText('OFF', 62, 4); ctx.globalAlpha = 1;
    const kx = H.lerp(-86, 86, on); cel(ctx, ellP(kx, 0, 58, 58), C.white, C.creamS, -5, -5, 6); shine(ctx, kx - 18, -18, 14, 9);
    ctx.restore();
  }
  function hexChainItem(ctx, x, y, s) { if (s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(s, s); cel(ctx, hexP(0, 0, 50, Math.PI / 6), '#fff3d6', '#ecd6a6', -4, -4, 5); ctx.fillStyle = C.plum; ctx.fill(ellP(-14, -4, 5, 6)); ctx.fill(ellP(14, -4, 5, 6)); ctx.restore(); }
  function cube(ctx, x, y, s, rot = 0) { if (s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); cel(ctx, rrP(-40, -40, 80, 80, 16), C.white, C.creamS, -5, -5, 5); ctx.fillStyle = 'rgba(200,180,230,0.6)'; [[-16, -14], [12, -6], [-6, 14], [16, 16]].forEach(([a, b]) => ctx.fill(ellP(a, b, 4, 4))); shine(ctx, -18, -20, 10, 6); ctx.restore(); }
  function slice(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y + bob(t, 0.5, 5)); ctx.scale(s, s);
    cel(ctx, ellP(0, 0, 130, 118), '#fff4cf', '#edd79d', -8, -8, 6);
    ctx.strokeStyle = '#efdca8'; ctx.lineWidth = 6; ctx.stroke(ellP(0, 0, 96, 86));
    for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + i * TAU / 3; ctx.fillStyle = '#9b7a4a'; ctx.fill(ellP(Math.cos(a) * 20, 52 + Math.sin(a) * 12, 5, 5)); }
    face(ctx, 0, -14, 0.9, { eyes: 'happy', mouth: 'w' });
    ctx.restore();
  }
  // peel cell. st: dead 0..1, brown 0..1, beads 0..1, link 0..1, eyes, mouth
  const CW = 160, CHh = 135, GX0 = 112, GY0 = 640, GAP = 14;
  const cellXY = (c, r) => [GX0 + c * (CW + GAP) + CW / 2, GY0 + r * (CHh + GAP) + CHh / 2];
  const CLUSTER = [[2, 2], [1, 3], [2, 3], [3, 3], [2, 4], [1, 2], [3, 4]];
  const isCl = (c, r) => CLUSTER.findIndex(([a, b]) => a === c && b === r);
  function cell(ctx, x, y, s, st, t) {
    if (s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const base = H.mix(H.mix('#ffe27a', '#e2c38c', st.dead || 0), BN.spot, st.brown || 0), shd = H.mix(H.mix('#f2c64e', '#c9a46c', st.dead || 0), BN.spotS, st.brown || 0);
    cel(ctx, rrP(-CW / 2, -CHh / 2, CW, CHh, 34), H.rgba(base), H.rgba(shd), -5, -5, 5);
    if (st.beads > 0) {
      const B = [[-44, 30], [-12, 40], [20, 30], [48, 38]];
      if (st.link > 0) { ctx.save(); ctx.strokeStyle = H.rgba(H.mix(C.mintD, '#5a3220', st.brown || 0)); ctx.lineWidth = 7; ctx.lineCap = 'round'; const pts = partial(B, st.link); ctx.beginPath(); pts.forEach(([a, b], i) => (i ? ctx.lineTo(a, b) : ctx.moveTo(a, b))); ctx.stroke(); ctx.restore(); }
      B.forEach(([a, b], i) => { const k = H.clamp(st.beads * 4 - i); if (k > 0) cel(ctx, ellP(a, b, 11 * k, 11 * k), H.rgba(H.mix(C.mint, '#7a4a2e', st.brown || 0)), H.rgba(H.mix(C.mintS, '#5a3220', st.brown || 0)), -2, -2, 3); });
    }
    const ek = st.eyes || 'normal';
    ctx.save(); ctx.translate(0, -18); ctx.scale(0.5, 0.5);
    eye(ctx, -40, 0, 18, 24, '#8a6cf0', ek, 1); eye(ctx, 40, 0, 18, 24, '#8a6cf0', ek, -1);
    if ((st.brown || 0) < 0.5) { blush(ctx, -70, 26, 13, 7); blush(ctx, 70, 26, 13, 7); }
    mouth(ctx, 0, 30, 9, st.mouth || 'smile');
    ctx.restore();
    ctx.restore();
  }
  function ppo(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y + bob(t, 2, 8)); ctx.scale(s, s);
    for (const sd of [-1, 1]) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(sd * 84, 10); ctx.lineTo(sd * 130, -24 - (P.wave && sd > 0 ? Math.sin(t * 10) * 26 : 0)); ctx.stroke(); ctx.restore(); cel(ctx, ellP(sd * 134, -28 - (P.wave && sd > 0 ? Math.sin(t * 10) * 26 : 0), 18, 18), C.lav, C.lavS, -2, -2, 4); }
    union(ctx, [ellP(0, 0, 100, 88), ellP(-58, -70, 26, 30), ellP(58, -70, 26, 30)], C.lavS, 5);
    cel(ctx, ellP(0, 4, 92, 80), C.lav, C.lavS, -7, -7, 0);
    face(ctx, 0, 6, 0.95, { eyes: P.eyes || 'happy', mouth: P.mouth || 'w' });
    ctx.restore();
  }
  function uvLamp(ctx, x, y, on, t) {
    ctx.save(); ctx.translate(x, y);
    if (on > 0) { ctx.save(); ctx.globalAlpha = 0.28 * on; const g = ctx.createLinearGradient(0, 0, 0, 760); g.addColorStop(0, '#b38cff'); g.addColorStop(1, 'rgba(179,140,255,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(-300, 30); ctx.lineTo(300, 30); ctx.lineTo(500, 760); ctx.lineTo(-500, 760); ctx.closePath(); ctx.fill(); ctx.restore(); }
    cel(ctx, rrP(-340, -40, 680, 56, 22), '#cfc4ea', '#a99bd2', -4, -4, 6);
    ctx.save(); if (on > 0) { ctx.shadowColor = '#b48cff'; ctx.shadowBlur = 50 * on; } cel(ctx, rrP(-300, 14, 600, 40, 20), H.rgba(H.mix('#8e7fb8', '#e2d2ff', on)), H.rgba(H.mix('#6c5f99', '#b79cff', on)), -3, -3, 5); ctx.restore();
    ctx.restore();
  }
  const sweetHearts = (ctx, x, y, n, t, t0) => { for (let i = 0; i < n; i++) { const p = pop(t, t0 + i * 0.1, 1.3).s; heart(ctx, x + (i - (n - 1) / 2) * 62, y + Math.sin(t * 4 + i) * 4, 26 * p); } };

  // 1 HOOK: why does a banana get brown spots? on purpose?!
  scene(0, null, TH.butter, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, NOTM);
    const ba = T(0, 'banana'), br = T(0, 'brown'), sp = T(0, 'spots'), ne = T(1, 'never'), pu = T(1, 'purpose');
    const spk = SPOTS.map((_, i) => pop(t, br + i * 0.06, 1.4).s);
    const shake = t > pu ? Math.sin(t * 60) * 7 * Math.exp(-(t - pu) * 4) : 0;
    const p = pop(t, 0.02);
    banana(ctx, 540 + shake, 930, 1.35 * p.s, t, { ripe: 1, spots: spk, eyes: t > pu ? 'shock' : 'normal', mouth: t > pu ? 'O' : t > ne ? 'o' : 'smile', look: [0, 0.3], sq: squash(t, br, 0.12) });
    kWord(ctx, 'WHY THE', 540, 300, 110, t, 0.15, 0.03, { ...HO(C.white, C.pinkD) });
    kWord(ctx, 'BROWN SPOTS?', 540, 440, 118, t, br, 0.025, { ...HO(C.butter, BN.spot), wob: 0.02 });
    if (t >= pu - 0.05) { ptext(ctx, t, pu, 540, 1430, 'ON PURPOSE?!', 120, HO(C.white, C.lavD)); kana(ctx, '!?', 920, 700, 150, 0.15, pop(t, pu).s, C.butter); impactLines(ctx, 540, 930, 470, t, pu); }
    if (t >= sp) dotted(ctx, bez([200, 1320], [120, 1240], [130, 1110], [230, 1010]), H.clamp((t - sp) * 3), C.pinkD);
  });

  // 2 ETHYLENE: a gas the banana makes itself, flips ripening on
  scene(2, 'star', TH.mint, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 9, NOTM);
    const ga = T(2, 'gas'), et = T(2, 'ethylene'), mk = T(3, 'makes'), it = T(3, 'itself'), fl = T(4, 'flips'), ri = T(4, 'ripening'), sw = T(4, 'switch');
    const bs = pop(t, PS(2) - 0.3);
    const on = H.ease.out(H.clamp((t - sw) / 0.25));
    const by = t < fl ? 1080 : H.lerp(1080, 960, H.ease.inOut(H.clamp((t - fl) / 0.5)));
    banana(ctx, 540, by, 1.1 * bs.s, t, { ripe: 0.12 + 0.25 * on, eyes: t > sw ? 'star' : t > mk ? 'happy' : 'normal', mouth: t > mk ? 'w' : 'smile', sq: squash(t, sw, 0.14) });
    // gas puffs rise off the banana
    if (t >= ga) for (let i = 0; i < 14; i++) {
      const t0 = ga + i * 0.42; if (t < t0) continue;
      const u = (t - t0) / 3.2; if (u > 1) continue;
      const r = H.rng(500 + i), x0 = 540 + r.range(-280, 280), yy = H.lerp(by - 60, 560, u), xx = x0 + Math.sin(u * 6 + i) * 40;
      ctx.save(); ctx.globalAlpha = H.clamp((1 - u) * 3) * H.clamp(u * 8); ethylene(ctx, xx, yy, 0.8 * pop(t, t0, 1.2).s, Math.sin(t * 2 + i) * 0.4); ctx.restore();
    }
    kWord(ctx, 'ETHYLENE', 540, 300, 150, t, et - 0.1, 0.03, { ...HO(C.white, C.mintD), t1: ri - 0.12 });
    ptag(ctx, t, ga, 540, 430, 'a gas!', C.white, 50, ri - 0.12);
    if (t >= mk && t < fl + 0.4) popIn(ctx, t, it, 540, 1420, () => tag(ctx, 0, 0, 'homemade', C.butter, 1, 58), 1.2, fl + 0.2);
    if (t >= ri - 0.05) kWord(ctx, 'RIPENING', 540, 300, 150, t, ri, 0.03, HO(C.butter, C.pinkD));
    if (t >= fl) { popIn(ctx, t, fl, 540, 1440, () => toggle(ctx, 0, 0, on, 1.1)); impactLines(ctx, 540, 1440, 200, t, sw, 10, C.mintD); }
    if (t > sw + 0.1) confetti(ctx, t, sw + 0.1, 540, 1340, 30, 9);
  });

  // 3 CHLOROPHYLL breaks down, the yellow underneath shows
  scene(5, 'heart', TH.sky, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 51, 10, NOTM);
    const ch = T(5, 'chlorophyll'), pe = T(5, 'peel'), bk = T(5, 'breaks'), ye = T(6, 'yellow'), un = T(6, 'underneath'), sh = T(6, 'shows');
    const rp = H.ease.inOut(H.clamp((t - bk) / (sh - bk + 0.2)));
    banana(ctx, 540, 960, 1.35 * pop(t, PS(5) - 0.3).s, t, { ripe: rp, eyes: t > sh ? 'happy' : 'normal', mouth: t > sh ? 'w' : 'o', look: [0, 0.2] });
    // little chlorophyll buddies on the peel; they poof away one by one
    const CL = [[0.2, -0.1], [0.32, 0.2], [0.42, -0.25], [0.6, -0.22], [0.68, 0.2], [0.8, -0.05]];
    CL.forEach(([u, v], i) => {
      const [lx, ly] = bpt(u, v), x = 540 + lx * 1.35, y = 960 + ly * 1.35, gone = bk + i * 0.22;
      if (t < gone) popIn(ctx, t, ch + i * 0.07, x, y, () => { cel(ctx, ellP(0, 0, 30, 30), C.mintD, '#2fa078', -3, -3, 4); ctx.fillStyle = C.dark; ctx.fill(ellP(-9, -3, 4, 6)); ctx.fill(ellP(9, -3, 4, 6)); }, 1.3);
      else poof(ctx, x, y, t, gone, 46, '#d8f5c8');
    });
    kWord(ctx, 'CHLOROPHYLL', 540, 300, 118, t, ch, 0.02, { ...HO(C.white, C.mintD), t1: ye - 0.12 });
    ptag(ctx, t, pe, 540, 430, 'the green stuff', C.white, 50, ye - 0.12);
    if (t >= bk - 0.05 && t < ye) ptext(ctx, t, bk, 540, 1430, 'BREAKS DOWN', 110, HO(C.white, C.skyD), ye - 0.12);
    if (t >= ye - 0.05) kWord(ctx, 'YELLOW!', 540, 300, 170, t, ye, 0.03, HO(C.butter, C.pinkD));
    if (t >= un) ptag(ctx, t, un, 540, 1430, 'it was hiding underneath', C.white, 52);
    if (t > sh) { sparkle(ctx, 880, 760, 46 * pop(t, sh).s, C.white, 0, 4); sparkle(ctx, 190, 1180, 36 * pop(t, sh + 0.1).s, C.butter, 0, 4); sparkle(ctx, 850, 1180, 30 * pop(t, sh + 0.2).s, C.white, 0, 4); }
  });

  // 4 INSIDE: starch turns into sugar, ~1% -> ~17%
  scene(7, 'star', TH.pink, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 9, NOTM);
    const ins = T(7, 'inside'), st = T(7, 'starch'), tu = T(7, 'turns'), su = T(7, 'sugar'), s2 = T(8, 'sugar'), n1 = T(8, '1'), pc = T(8, 'percent'), n17 = T(8, '17');
    popIn(ctx, t, ins - 0.1, 540, 560, () => slice(ctx, 0, 0, 0.95, t));
    kWord(ctx, 'STARCH', 540, 300, 150, t, st, 0.03, { ...HO(C.white, '#c9a25c'), t1: su - 0.12 });
    if (t >= su - 0.05) kWord(ctx, 'SUGAR!', 540, 300, 170, t, su, 0.03, HO(C.white, C.pinkD));
    for (let i = 0; i < 6; i++) {
      const x = 540 + (i - 2.5) * 140, tsplit = tu + i * 0.1, split = H.clamp((t - tsplit) / 0.25);
      if (i < 5 && split < 1 && t >= st) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.globalAlpha = 1 - split; ctx.beginPath(); ctx.moveTo(x + 44, 840); ctx.lineTo(x + 96, 840); ctx.stroke(); ctx.restore(); }
      if (split < 1) hexChainItem(ctx, x, 840, pop(t, st + i * 0.05, 1.2).s * (1 - split));
      if (t >= tsplit + 0.1) { cube(ctx, x, 840 - Math.abs(Math.sin((t - tsplit) * 5)) * 18 * Math.exp(-(t - tsplit) * 1.5), pop(t, tsplit + 0.1, 1.4).s * 0.95, Math.sin(t * 3 + i) * 0.12); if (t < tsplit + 0.6) sparkle(ctx, x + 40, 790, 22 * pop(t, tsplit + 0.15).s, C.butter, 0, 3); }
    }
    // sugar meter
    if (t >= s2 - 0.1) {
      const k = pop(t, s2 - 0.1).s, lvl = t < n1 ? 0 : t < n17 ? 1 : H.lerp(1, 17, H.ease.out(H.clamp((t - n17) / 0.6)));
      ctx.save(); ctx.translate(540, 1170); ctx.scale(k, k);
      cel(ctx, rrP(-420, -50, 840, 100, 50), C.white, C.creamS, -5, -5, 6);
      const fw = 820 * lvl / 20; if (fw > 0) { ctx.save(); ctx.clip(rrP(-410, -40, 820, 80, 40)); cel(ctx, rrP(-410, -40, Math.max(fw, 40), 80, 40), C.pinkD, '#e2487a', -3, -5, 0); ctx.restore(); }
      ol(ctx, rrP(-420, -50, 840, 100, 50), 6);
      ctx.restore();
      ptag(ctx, t, s2, 220, 1060, 'SUGAR', C.butter, 50);
      if (t >= n1 - 0.05 && t < n17) popIn(ctx, t, n1, 540, 1440, () => kText(ctx, '~1%', 0, 0, 170, HO(C.white, C.skyD)), 1.2, n17 - 0.1);
      if (t >= n17 - 0.05) popIn(ctx, t, n17, 540, 1440, () => { const q = squash(t, n17 + 0.6, 0.14); ctx.scale(q[0], q[1]); kText(ctx, '~' + Math.round(lvl) + '%', 0, 0, 200, HO(C.butter, C.pinkD)); });
      if (t > n17 + 0.6) confetti(ctx, t, n17 + 0.6, 540, 1300, 26, 13);
    }
  });

  // 5 THE PEEL GETS OLD: clusters of cells shut down, an enzyme links chemicals into brown pigment = your spot
  scene(9, 'heart', TH.lav, 17, (ctx, t) => {
    twinkles(ctx, W, HH, t, 71, 8, (x, y) => y > 560 && y < 1540);
    const pe = T(9, 'peel'), ol_ = T(9, 'old'), li = T(10, 'little'), cl = T(10, 'clusters'), sd = T(10, 'shut'), sc_ = T(10, 'schedule');
    const en = T(11, 'enzyme'), po = T(11, 'polyphenol'), lk = T(12, 'links'), chm = T(12, 'chemicals'), brn = T(12, 'brown'), pg = T(12, 'pigment');
    const th = T(13, 'thats'), spt = T(13, 'spot');
    const z = H.ease.inOut(H.clamp((t - th) / 0.7));
    // zoom out: the grid shrinks into one spot on a banana
    if (z > 0) banana(ctx, 540, 1000, 1.3 * pop(t, th).s, t, { ripe: 1, spots: SPOTS.map((_, i) => pop(t, spt + i * 0.03, 1.3).s), eyes: 'happy', mouth: 'w' });
    ctx.save(); ctx.globalAlpha = 1 - z; ctx.translate(540, 1080); ctx.scale(1 - z * 0.9, 1 - z * 0.9); ctx.translate(-540, -1080);
    for (let r = 0; r < 6; r++) for (let c = 0; c < 5; c++) {
      const [x, y] = cellXY(c, r), ci = isCl(c, r), s = pop(t, PS(9) - 0.4 + (r * 5 + c) * 0.02, 1.2).s;
      const st = { dead: 0, brown: 0, beads: 0, link: 0, eyes: t > ol_ ? 'normal' : 'normal', mouth: t > ol_ ? 'flat' : 'smile' };
      if (ci >= 0) {
        st.dead = H.clamp((t - sd - ci * 0.06) / 0.3); if (st.dead > 0.5) { st.eyes = 'blink'; st.mouth = 'flat'; }
        st.beads = H.clamp((t - chm - ci * 0.05) / 0.4); st.link = H.clamp((t - lk - 0.4 - ci * 0.12) / 0.6); st.brown = H.clamp((t - brn - ci * 0.05) / 0.5);
      }
      const wob = ci >= 0 && t > cl && t < sd ? Math.sin(t * 16 + ci) * 0.04 : 0;
      ctx.save(); ctx.translate(x, y); ctx.rotate(wob); cell(ctx, 0, 0, s, st, t); ctx.restore();
    }
    // the cluster outline
    if (t >= cl && t < en) { ctx.save(); ctx.setLineDash([20, 16]); ctx.lineDashOffset = -t * 60; const [ax, ay] = cellXY(1, 2), p = rrP(ax - CW / 2 - 18, ay - CHh / 2 - 18, 3 * CW + 2 * GAP + 36, 3 * CHh + 2 * GAP + 36, 46); ctx.globalAlpha *= H.clamp((t - cl) * 4); ol(ctx, p, 8, C.pinkD); ctx.restore(); }
    if (t >= sd + 0.3 && t < en) for (const [c, r] of [[2, 2], [3, 4]]) { const [x, y] = cellXY(c, r); zzz(ctx, x + 40, y - 30, t, sd + 0.3); }
    // the enzyme visits each cluster cell
    if (t >= en - 0.1 && z < 1) {
      const [x0, y0] = cellXY(CLUSTER[0][0], CLUSTER[0][1]);
      let ex, ey;
      if (t < lk) { const u = H.ease.out(H.clamp((t - en) / 0.6)); ex = H.lerp(-200, x0 + 60, u); ey = H.lerp(y0 - 200, y0 - 60, u); }
      else { const u = H.clamp((t - lk) / (pg - lk + 0.3)) * (CLUSTER.length - 1), i = Math.min(Math.floor(u), CLUSTER.length - 2), f = H.ease.inOut(u - i); const [a, b] = cellXY(...CLUSTER[i]), [c2, d] = cellXY(...CLUSTER[i + 1]); ex = H.lerp(a, c2, f) + 60; ey = H.lerp(b, d, f) - 60 - Math.sin(f * Math.PI) * 50; }
      if (t > pg + 0.3) { const u = H.clamp((t - pg - 0.3) / 0.5); ex = H.lerp(ex, 1300, H.ease.in(u)); }
      ppo(ctx, ex, ey, 0.75, t, { wave: t > lk, eyes: t > brn ? 'star' : 'happy' });
    }
    ctx.restore();
    // headings
    kWord(ctx, 'PEEL CELLS', 540, 300, 130, t, pe, 0.025, { ...HO(C.white, C.lavD), t1: sd - 0.12 });
    ptag(ctx, t, ol_, 540, 430, 'getting old...', C.white, 50, sd - 0.12);
    if (t >= sd - 0.05 && t < en) { kWord(ctx, 'SHUT DOWN', 540, 300, 140, t, sd, 0.025, { ...HO(C.white, C.pinkD), t1: en - 0.12 }); ptag(ctx, t, sc_, 460, 440, 'on schedule', C.white, 50, en - 0.12); popIn(ctx, t, sc_, 850, 440, () => clock(ctx, 0, 0, 70, (t - sc_) * 8), 1, en - 0.12); }
    if (t >= en - 0.05 && t < brn) { kWord(ctx, 'AN ENZYME', 540, 300, 140, t, en, 0.025, { ...HO(C.white, C.lavD), t1: brn - 0.12 }); ptag(ctx, t, po, 540, 440, 'polyphenol oxidase', C.butter, 50, brn - 0.12); }
    if (t >= lk && t < brn) ptag(ctx, t, chm, 540, 1600, 'links chemicals', C.white, 48, brn - 0.12);
    if (t >= brn - 0.05 && t < th) kWord(ctx, 'BROWN!', 540, 300, 170, t, brn, 0.03, { ...HO(C.butter, BN.spot), t1: th - 0.1 });
    if (t >= th - 0.05) { kWord(ctx, "THAT'S YOUR", 540, 300, 118, t, th, 0.02, HO(C.white, C.lavD)); kWord(ctx, 'SPOT!', 540, 1440, 170, t, spt, 0.03, HO(C.butter, BN.spot)); }
  });

  // 6 THE WILD PART: under UV light each spot glows with a blue ring (chlorophyll leftovers)
  scene(14, 'star', TH.uv, 23, (ctx, t) => {
    const wi = T(14, 'wild'), uv = T(15, 'ultraviolet'), li = T(15, 'light'), gl = T(16, 'glows'), bl = T(16, 'blue'), ri = T(16, 'ring'), lo = T(17, 'leftover'), chl = T(17, 'chlorophyll');
    const on = H.clamp((t - li) / 0.2) * (t > li + 0.25 ? 1 : (Math.sin((t - li) * 60) > 0 ? 1 : 0.3));
    twinkles(ctx, W, HH, t, 81, 14, NOTM);
    if (on > 0) { ctx.fillStyle = `rgba(20,8,48,${0.45 * on})`; ctx.fillRect(0, 0, W, HH); }
    if (t >= uv - 0.1) popIn(ctx, t, uv, 540, 560, () => uvLamp(ctx, 0, 0, on, t));
    const g = H.ease.out(H.clamp((t - gl) / 0.6));
    banana(ctx, 540, 1100, 1.3 * pop(t, PS(14) - 0.3).s, t, { ripe: 1, spots: 1, tint: on, glow: g, eyes: t > gl ? 'star' : t > wi ? 'shock' : 'normal', mouth: t > gl ? 'O' : t > wi ? 'o' : 'smile', look: [0, -0.5] });
    if (t >= lo) { const r = H.rng(9); for (let i = 0; i < 18; i++) { const o = SPOTS[i % SPOTS.length], [px, py] = bpt(o.u, o.v), a = r() * TAU + t * r.range(0.6, 1.4), d = 40 + 20 * Math.sin(t * 2 + i); const x = 540 + px * 1.3 + Math.cos(a) * d, y = 1100 + py * 1.3 + Math.sin(a) * d; const k = pop(t, lo + i * 0.04).s; ctx.save(); ctx.shadowColor = '#5ff4ff'; ctx.shadowBlur = 18; ctx.fillStyle = '#c4fbff'; ctx.fill(ellP(x, y, 8 * k, 8 * k)); ctx.restore(); } }
    kWord(ctx, 'WILD PART', 540, 300, 150, t, wi, 0.03, { ...HO(C.white, C.pinkD), t1: uv - 0.12 });
    if (t >= uv - 0.05 && t < bl) kWord(ctx, 'UV LIGHT', 540, 300, 160, t, uv, 0.03, { ...HO(C.white, C.lavD), t1: bl - 0.12 });
    if (t >= bl - 0.05) { kWord(ctx, 'BLUE RINGS!', 540, 300, 140, t, bl, 0.025, HO(C.white, '#3ab6d6')); }
    if (t > gl) kana(ctx, 'キラ', 920, 820, 80, -0.1, pop(t, gl + 0.1).s, '#bff8ff');
    if (t >= ri && t < lo) ptag(ctx, t, ri, 540, 1440, 'around every spot', C.white, 52, lo - 0.12);
    if (t >= lo - 0.05) ptag(ctx, t, lo, 540, 1440, 'leftover chlorophyll', '#c6f6ff', 52);
  });

  // 7 MORE SPOTS = SWEETER, and the question: green, yellow or spotty?
  scene(18, 'heart', TH.butter, 29, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 9, NOTM);
    const mo = T(18, 'more'), sp = T(18, 'spots'), sw = T(18, 'sweeter'), wh = T(19, 'which'), gr = T(20, 'green'), ye = T(20, 'yellow'), sy = T(20, 'spotty');
    const B = [[200, 0, 0, gr, 1], [540, 1, 0, ye, 2], [880, 1, 1, sy, 4]];
    B.forEach(([x, ripe, spots, tw, n], i) => {
      const s = pop(t, PS(18) - 0.3 + i * 0.12).s, sel = t > tw ? squash(t, tw, 0.18) : [1, 1];
      banana(ctx, x, 900, 0.5 * s, t, { ripe, spots: spots ? SPOTS.map((_, j) => pop(t, sp + j * 0.04, 1.3).s) : 0, eyes: i === 2 && t > sw ? 'star' : 'happy', mouth: 'w', rot: -0.5, sq: sel });
      if (t >= sw) sweetHearts(ctx, x, 640, n, t, sw + i * 0.15);
    });
    kWord(ctx, 'MORE SPOTS', 540, 300, 130, t, mo, 0.025, { ...HO(C.butter, BN.spot), t1: wh - 0.12 });
    if (t >= sw - 0.05 && t < wh) ptext(ctx, t, sw, 540, 1420, 'SWEETER!', 150, HO(C.white, C.pinkD), wh - 0.12);
    if (t >= sw && t < wh) dotted(ctx, bez([230, 1180], [420, 1260], [660, 1260], [850, 1180]), H.clamp((t - sw) * 2.5), C.pinkD);
    if (t >= wh - 0.05) {
      kWord(ctx, 'WHICH ONE', 540, 300, 140, t, wh, 0.025, HO(C.white, C.pinkD));
      kWord(ctx, 'DO YOU GRAB?', 540, 440, 104, t, wh + 0.3, 0.02, HO(C.butter, C.pinkD));
      [[gr, 'GREEN?', C.mint, 1210], [ye, 'YELLOW?', C.butter, 1360], [sy, 'SPOTTY?', C.peach, 1510]].forEach(([t0, label, fill, y], i) => popIn(ctx, t, t0, 540, y, () => { ctx.rotate((i - 1) * 0.02); pill(ctx, 560, label, fill, 76); }, 1.3));
    }
    if (t > sy + 0.3) heart(ctx, 900, 1510, 40 * pop(t, sy + 0.3).s);
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
    const puff = (t, g = 1) => { k.noise(t, { dur: 0.18, color: 'pink', filter: 'bandpass', f: [[0, 600], [0.18, 1800]], q: 1, gain: 0.08 * g, minor: true }); };
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6'][i % 8]); });
    // 1 hook
    bloop(vis(0.02), 380, 0.8);
    big(vis(T(0, 'brown')));
    for (let i = 0; i < SPOTS.length; i++) k.play('pop', T(0, 'brown') + i * 0.06, { f: 500 + i * 30, gain: 0.35, minor: true });
    k.play('error', vis(T(1, 'purpose')), { f: 'A3', gain: 0.35 });
    // 2 ethylene
    for (let i = 0; i < 14; i++) puff(T(2, 'gas') + i * 0.42, 0.9);
    bell(vis(T(2, 'ethylene') - 0.1), 'E5', 1);
    bloop(vis(T(3, 'itself')), 560, 0.9);
    bloop(vis(T(4, 'flips')), 420, 0.8, { minor: true });
    k.play('click', vis(T(4, 'switch')), { gain: 1 }); k.play('success', vis(T(4, 'switch')) + 0.05, { f: 'C6', gain: 0.4 });
    // 3 chlorophyll
    for (let i = 0; i < 6; i++) bloop(T(5, 'chlorophyll') + i * 0.07, 600 + i * 40, 0.6, { minor: true });
    for (let i = 0; i < 6; i++) { k.play('pop', T(5, 'breaks') + i * 0.22, { f: 300, gain: 0.4, minor: true }); puff(T(5, 'breaks') + i * 0.22); }
    k.play('riser', T(5, 'breaks'), { dur: T(6, 'yellow') - T(5, 'breaks'), gain: 0.35 });
    big(vis(T(6, 'yellow')));
    twinkle(T(6, 'shows'), 5, 0.9);
    // 4 starch -> sugar
    bloop(vis(T(7, 'inside') - 0.1), 460, 0.8);
    for (let i = 0; i < 6; i++) k.play('tock', T(7, 'starch') + i * 0.05, { f: 700 + i * 50, gain: 0.25, minor: true });
    for (let i = 0; i < 6; i++) { k.play('pop', T(7, 'turns') + i * 0.1 + 0.1, { f: 700 + i * 60, gain: 0.45 }); k.play('sparkle', T(7, 'turns') + i * 0.1 + 0.15, { n: 2, gain: 0.5, minor: true }); }
    bell(vis(T(7, 'sugar')), 'G5', 1.1);
    bloop(vis(T(8, '1')), 500, 0.9);
    for (let i = 0; i < 10; i++) k.play('count', T(8, '17') + i * 0.06, { gain: 0.5, minor: true });
    { const t = vis(T(8, '17') + 0.6); k.play('impact', t, { f: 110, gain: 0.4 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.012, n, 1.4, { dur: 1.3 })); }
    // 5 cells
    for (let i = 0; i < 30; i += 3) k.play('pop', PS(9) - 0.4 + i * 0.02, { f: 500 + i * 15, gain: 0.25, minor: true });
    k.tone(T(9, 'old'), { f: [[0, 440], [0.6, 300]], type: 'triangle', dur: 0.65, gain: 0.06, a: 0.05 });
    k.play('swish', T(10, 'clusters'), { gain: 0.4 });
    k.tone(T(10, 'shut'), { f: [[0, 520], [0.7, 200]], type: 'triangle', dur: 0.75, gain: 0.08, a: 0.02 });
    for (let i = 0; i < 6; i++) k.play('tock', T(10, 'schedule') + i * 0.13, { f: 1400, gain: 0.2, minor: true });
    k.play('whoosh', T(11, 'enzyme') - 0.1, { dur: 0.5, gain: 0.45 }); bloop(vis(T(11, 'polyphenol')), 520, 0.9);
    for (let i = 0; i < 7; i++) k.play('blip', T(12, 'links') + 0.4 + i * 0.12, { f: 'A5', gain: 0.4, minor: true });
    k.play('stamp', vis(T(12, 'brown')), { gain: 0.45 });
    k.play('whoosh', T(13, 'thats'), { dur: 0.6, gain: 0.4 }); big(vis(T(13, 'spot')));
    // 6 UV
    k.play('buzz', vis(T(14, 'wild')), { gain: 0.15, dur: 0.2 });
    k.play('neon', vis(T(15, 'light')), { dur: 0.3, gain: 0.5 }); k.tone(T(15, 'light') + 0.25, { f: 120, type: 'sawtooth', dur: 1.2, gain: 0.025, a: 0.1, hold: 0.8, filter: 'lowpass', f2: 600, minor: true });
    k.play('riser', T(16, 'glows') - 0.3, { dur: 0.5, gain: 0.3 }); k.play('sparkle', vis(T(16, 'glows')), { n: 8, gain: 0.9 });
    big(vis(T(16, 'blue')));
    twinkle(T(17, 'leftover'), 6, 0.8);
    // 7 sweeter + question
    for (let i = 0; i < 3; i++) bloop(PS(18) - 0.3 + i * 0.12, 420 + i * 80, 0.7, { minor: true });
    for (let i = 0; i < SPOTS.length; i += 2) k.play('pop', T(18, 'spots') + i * 0.04, { f: 600, gain: 0.25, minor: true });
    k.play('success', vis(T(18, 'sweeter')), { f: 'C6', gain: 0.4 });
    bloop(vis(T(19, 'which')), 500, 0.8, { minor: true });
    [['green', 480], ['yellow', 560], ['spotty', 640]].forEach(([w, fq]) => bloop(vis(T(20, w)), fq, 1));
    { const t = PE(20) + 0.1; ['G4', 'C5', 'E5', 'G5'].forEach((n, i) => bell(t + i * 0.05, n, 1.2, { dur: 1.2 })); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
