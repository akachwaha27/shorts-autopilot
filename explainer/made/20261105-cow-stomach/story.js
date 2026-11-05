// ================= Kawaii Anime, vertical 1080x1920: "Why do cows burp up their lunch?" =================
// Short, 12 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// One stomach, four compartments (MSU P2503): rumen up to 40 gal, honeycomb reticulum sorts, omasum absorbs water, abomasum true stomach with acid.
// Ruminating about 1/3 of the day (MSU; Purdue 35-40%). Methane 250-500 L/day burped (Science Learning Hub).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 2.37, "text": "Cows burp up their lunch on purpose,", "words": [["cows", 0.25], ["burp", 0.54], ["up", 0.84], ["their", 0.98], ["lunch", 1.35], ["on", 1.71], ["purpose", 1.86]]}, {"s": 2.67, "e": 4.02, "text": "and you'd never guess why.", "words": [["and", 2.67], ["youd", 2.87], ["never", 3.14], ["guess", 3.48], ["why", 3.82]]}, {"s": 4.57, "e": 6.6, "text": "Grass is really hard to digest.", "words": [["grass", 4.57], ["is", 4.98], ["really", 5.14], ["hard", 5.63], ["to", 5.95], ["digest", 6.11]]}, {"s": 7.15, "e": 8.99, "text": "Its walls are made of cellulose,", "words": [["its", 7.15], ["walls", 7.36], ["are", 7.72], ["made", 7.93], ["of", 8.21], ["cellulose", 8.36]]}, {"s": 9.29, "e": 11.3, "text": "and cows can't break that down alone.", "words": [["and", 9.29], ["cows", 9.5], ["cant", 9.78], ["break", 10.05], ["that", 10.4], ["down", 10.68], ["alone", 10.95]]}, {"s": 11.85, "e": 13.77, "text": "So one stomach has four rooms.", "words": [["so", 11.85], ["one", 12.01], ["stomach", 12.25], ["has", 12.81], ["four", 13.05], ["rooms", 13.37]]}, {"s": 14.32, "e": 15.65, "text": "Room one is the rumen,", "words": [["room", 14.32], ["one", 14.63], ["is", 14.86], ["the", 15.02], ["rumen", 15.25]]}, {"s": 15.95, "e": 18.11, "text": "a vat holding up to forty gallons.", "words": [["a", 15.95], ["vat", 16.03], ["holding", 16.27], ["up", 16.83], ["to", 16.99], ["forty", 17.15], ["gallons", 17.55]]}, {"s": 18.66, "e": 20.52, "text": "It's packed with tiny microbes,", "words": [["its", 18.66], ["packed", 18.88], ["with", 19.33], ["tiny", 19.63], ["microbes", 19.93]]}, {"s": 20.82, "e": 22.23, "text": "and they ferment the grass.", "words": [["and", 20.82], ["they", 21.01], ["ferment", 21.27], ["the", 21.72], ["grass", 21.91]]}, {"s": 22.78, "e": 25.22, "text": "Room two, the honeycomb, sorts the pieces.", "words": [["room", 22.78], ["two", 23.08], ["the", 23.3], ["honeycomb", 23.52], ["sorts", 24.19], ["the", 24.56], ["pieces", 24.78]]}, {"s": 25.77, "e": 27.58, "text": "Big chunks go back up her throat,", "words": [["big", 25.77], ["chunks", 25.98], ["go", 26.4], ["back", 26.54], ["up", 26.81], ["her", 26.95], ["throat", 27.16]]}, {"s": 27.88, "e": 29.64, "text": "as a soggy ball called cud.", "words": [["as", 27.88], ["a", 28.05], ["soggy", 28.13], ["ball", 28.55], ["called", 28.88], ["cud", 29.39]]}, {"s": 30.19, "e": 31.43, "text": "She chews it again,", "words": [["she", 30.19], ["chews", 30.44], ["it", 30.85], ["again", 31.01]]}, {"s": 31.73, "e": 33.34, "text": "for about eight hours a day.", "words": [["for", 31.73], ["about", 31.95], ["eight", 32.31], ["hours", 32.68], ["a", 33.05], ["day", 33.12]]}, {"s": 33.89, "e": 35.91, "text": "Fine mush slides into room three,", "words": [["fine", 33.89], ["mush", 34.19], ["slides", 34.49], ["into", 34.94], ["room", 35.24], ["three", 35.54]]}, {"s": 36.21, "e": 37.73, "text": "where water gets squeezed out.", "words": [["where", 36.21], ["water", 36.51], ["gets", 36.82], ["squeezed", 37.06], ["out", 37.54]]}, {"s": 38.28, "e": 40.17, "text": "Room four is the true stomach,", "words": [["room", 38.28], ["four", 38.59], ["is", 38.91], ["the", 39.06], ["true", 39.3], ["stomach", 39.61]]}, {"s": 40.47, "e": 42.19, "text": "full of acid, like yours.", "words": [["full", 40.47], ["of", 40.83], ["acid", 41.01], ["like", 41.37], ["yours", 41.73]]}, {"s": 42.74, "e": 44.57, "text": "All that fermenting makes gas,", "words": [["all", 42.74], ["that", 42.95], ["fermenting", 43.25], ["makes", 43.98], ["gas", 44.35]]}, {"s": 44.87, "e": 47.14, "text": "hundreds of litres of methane a day,", "words": [["hundreds", 44.87], ["of", 45.49], ["litres", 45.65], ["of", 46.12], ["methane", 46.28], ["a", 46.83], ["day", 46.91]]}, {"s": 47.44, "e": 48.57, "text": "and she burps it out.", "words": [["and", 47.44], ["she", 47.65], ["burps", 47.86], ["it", 48.22], ["out", 48.36]]}, {"s": 49.12, "e": 50.95, "text": "So, would you chew your lunch twice?", "words": [["so", 49.12], ["would", 49.25], ["you", 49.58], ["chew", 49.78], ["your", 50.04], ["lunch", 50.3], ["twice", 50.63]]}];
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
  // ======================================== THIS STORY ========================================
  const W = W0, HH = H0;
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2, track: 7 });
  const NOTM = (x, y) => y > 420 && y < 1620;
  const G = { g: '#a8e06a', gS: '#7cc24a', gD: '#57a336', mush: '#c9d98a', mushS: '#a4b866' };

  // little meadow strip used by outdoor scenes
  function meadow(ctx, y) {
    ctx.fillStyle = C.mintS; ctx.fill(ellP(540, y + 420, 1100, 460));
    ctx.fillStyle = C.mint; ctx.fill(ellP(380, y + 470, 1000, 450));
    const r = H.rng(5);
    ctx.save(); ctx.strokeStyle = C.mintD; ctx.lineWidth = 7; ctx.lineCap = 'round';
    for (let i = 0; i < 22; i++) { const x = r.range(30, 1050), yy = y + r.range(50, 320), h = r.range(18, 34); ctx.beginPath(); ctx.moveTo(x, yy); ctx.quadraticCurveTo(x - 6, yy - h / 2, x - 10, yy - h); ctx.moveTo(x, yy); ctx.quadraticCurveTo(x + 6, yy - h / 2, x + 10, yy - h); ctx.stroke(); }
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
  // chibi cow, front view. (x,y) = face centre. P: eyes, mouth, look, sq, chew (-1..1 jaw slide), body
  function cow(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); if (P.sq) ctx.scale(P.sq[0], P.sq[1]); if (P.tilt) ctx.rotate(P.tilt);
    if (P.body !== false) {
      ctx.fillStyle = 'rgba(90,54,89,0.14)'; ctx.fill(ellP(0, 400, 200, 26));
      for (const sd of [-1, 1]) cel(ctx, rrP(sd * 92 - 38, 290, 76, 110, 30), C.cream, C.creamS, -5, -5);
      cel(ctx, rrP(-160, 130, 320, 220, 100), C.cream, C.creamS, -10, -10);
      ctx.save(); ctx.clip(rrP(-160, 130, 320, 220, 100)); ctx.fillStyle = C.plum; ctx.fill(ellP(-120, 230, 62, 52)); ctx.fill(ellP(110, 300, 72, 50)); ctx.restore();
      for (const sd of [-1, 1]) { ctx.fillStyle = C.plum; ctx.fill(rrP(sd * 92 - 38, 372, 76, 30, 12)); }
    }
    for (const sd of [-1, 1]) {
      cel(ctx, roundPoly([[sd * 112, -130], [sd * 136, -226], [sd * 176, -118]], 12), C.butter, C.butterS, -4, -4);
      ctx.save(); ctx.translate(sd * 210, -40); ctx.rotate(sd * 0.3); cel(ctx, ellP(0, 0, 68, 36), C.cream, C.creamS, -4, -4); ctx.fillStyle = C.pink; ctx.fill(ellP(sd * 6, 2, 42, 18)); ctx.restore();
    }
    const head = ellP(0, 10, 190, 170);
    cel(ctx, head, C.cream, C.creamS, -9, -9);
    ctx.save(); ctx.clip(head); ctx.fillStyle = C.plum; ctx.fill(ellP(-130, -80, 92, 78)); ctx.fill(ellP(150, 40, 70, 96)); ctx.restore();
    ol(ctx, head, 5);
    eye(ctx, -72, -22, 40, 54, '#8a6cf0', P.eyes || 'normal', 1, P.look || [0, 0]); eye(ctx, 72, -22, 40, 54, '#8a6cf0', P.eyes || 'normal', -1, P.look || [0, 0]);
    const cx = (P.chew || 0) * 24;
    const muz = ellP(cx * 0.6, 92, 128, 80);
    cel(ctx, muz, C.pink, C.pinkS, -6, -6);
    ctx.fillStyle = C.plum; ctx.fill(ellP(cx * 0.6 - 44, 70, 13, 16)); ctx.fill(ellP(cx * 0.6 + 44, 70, 13, 16));
    blush(ctx, -128, 38, 26, 14); blush(ctx, 128, 38, 26, 14);
    mouth(ctx, cx, 122, 20, P.mouth || 'smile');
    ctx.restore();
  }
  // side-view cutaway cow, facing left. (x,y) = belly centre. P.rooms: 0..4 how many rooms are shown, P.glow: index, P.fn(ctx): extras inside
  const ROOM = [[105, 25, 170, 112, C.mint, C.mintS], [-122, -50, 56, 50, C.butter, C.butterS], [-150, 56, 56, 50, C.lav, C.lavS], [-46, 98, 92, 44, C.pink, C.pinkS]];
  function cowSide(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.fillStyle = 'rgba(90,54,89,0.14)'; ctx.fill(ellP(0, 268, 340, 26));
    for (const lx of [-220, -130, 140, 230]) { cel(ctx, rrP(lx - 34, 120, 68, 148, 26), C.cream, C.creamS, -5, -5); ctx.fillStyle = C.plum; ctx.fill(rrP(lx - 34, 240, 68, 28, 10)); }
    tube(ctx, [[292, -60], [336, -30], [344, 70]], 16, C.cream, C.creamS, false);
    ctx.fillStyle = C.plum; ctx.fill(ellP(344, 84, 18, 26));
    const body = rrP(-300, -150, 600, 310, 130);
    cel(ctx, body, C.cream, C.creamS, -10, -10);
    ctx.save(); ctx.clip(body); ctx.fillStyle = C.plum; ctx.fill(ellP(230, -110, 92, 70)); ctx.fill(ellP(-250, 110, 80, 56)); ctx.fill(ellP(10, -160, 70, 36)); ctx.restore();
    ol(ctx, body, 5);
    // neck & head
    cel(ctx, roundPoly([[-300, -120], [-430, -240], [-470, -130], [-290, 60]], 40), C.cream, C.creamS, -6, -6);
    ctx.save(); ctx.translate(-500, -230);
    cel(ctx, roundPoly([[28, -128], [46, -196], [72, -112]], 8), C.butter, C.butterS, -3, -3);
    ctx.save(); ctx.translate(112, -70); ctx.rotate(0.3); cel(ctx, ellP(0, 0, 58, 28), C.cream, C.creamS, -3, -3); ctx.fillStyle = C.pink; ctx.fill(ellP(4, 2, 36, 14)); ctx.restore();
    cel(ctx, ellP(0, 0, 138, 124), C.cream, C.creamS, -6, -6);
    cel(ctx, ellP(-84, 50, 82, 62), C.pink, C.pinkS, -4, -4);
    ctx.fillStyle = C.plum; ctx.fill(ellP(-118, 30, 10, 13));
    eye(ctx, -10, -36, 34, 46, '#8a6cf0', P.eyes || 'normal', 1, P.look || [-0.4, 0]);
    blush(ctx, 44, 16, 22, 12);
    mouth(ctx, -92, 80, 15, P.mouth || 'smile');
    ctx.restore();
    // gut
    if (P.rooms) {
      const n = P.rooms;
      tube(ctx, [[-440, -130], [-395, -120], [-250, -100], [-135, -72]], 26, C.peach, C.peachS, false);
      ROOM.forEach((R, i) => {
        if (i >= n) return;
        const k = P.pops ? P.pops[i] : 1; if (k <= 0) return;
        ctx.save(); ctx.translate(R[0], R[1]); ctx.scale(k, k);
        const hl = P.glow === i;
        cel(ctx, ellP(0, 0, R[2], R[3]), R[4], R[5], -6, -6, hl ? 9 : 5);
        ctx.restore();
      });
      if (P.labels) ROOM.forEach((R, i) => {
        const k = P.pops ? P.pops[i] : 1; if (k <= 0) return;
        ctx.save(); ctx.translate(R[0], R[1]); ctx.scale(k, k);
        ctx.fillStyle = C.plum; ctx.font = `700 ${i === 0 ? 96 : 60}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(i + 1), 0, 4);
        ctx.restore();
      });
    }
    if (P.fn) P.fn(ctx);
    ctx.restore();
  }
  // grass blades tuft
  function grass(ctx, x, y, s, sw = 0) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    [[-90, -210, -0.34], [-40, -300, -0.14], [14, -350, 0.04], [62, -270, 0.2], [108, -190, 0.38]].forEach(([bx, h, a], i) => {
      const lean = a * 180 + sw * (i + 1) * 3;
      const p = new Path2D(); p.moveTo(bx - 26, 0); p.quadraticCurveTo(bx - 20 + lean * 0.4, h * 0.55, bx + lean, h); p.quadraticCurveTo(bx + 24 + lean * 0.4, h * 0.55, bx + 26, 0); p.closePath();
      cel(ctx, p, G.g, G.gS, -5, -3);
    });
    ctx.restore();
  }
  // green cud ball with grass flecks
  function cud(ctx, x, y, r, P = {}) {
    if (r <= 0) return;
    cel(ctx, ellP(x, y, r, r * 0.94), G.g, G.gS, -r * 0.1, -r * 0.1, 5);
    const q = H.rng(9);
    ctx.save(); ctx.strokeStyle = G.gD; ctx.lineCap = 'round'; ctx.lineWidth = Math.max(3, r * 0.08);
    for (let i = 0; i < 8; i++) { const a = q() * TAU, d = q() * r * 0.68, b = q() * TAU; const px = x + Math.cos(a) * d, py = y + Math.sin(a) * d; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + Math.cos(b) * r * 0.2, py + Math.sin(b) * r * 0.2); ctx.stroke(); }
    ctx.restore();
    shine(ctx, x - r * 0.38, y - r * 0.42, r * 0.2, r * 0.12);
    if (P.face) face(ctx, x, y - r * 0.05, r / 110, { eyes: P.eyes, mouth: P.mouth, iris: '#3fb98e' });
  }
  function bubbleB(ctx, x, y, r) { if (r <= 0) return; ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.55)'; const p = ellP(x, y, r, r); ctx.fill(p); ol(ctx, p, 3.5); shine(ctx, x - r * 0.35, y - r * 0.38, r * 0.2, r * 0.13); ctx.restore(); }
  // rising bubbles, pure function of t
  function bubbles(ctx, t, n, seed, x0, x1, yBot, yTop, rMin, rMax, start = -1e9) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x = r.range(x0, x1), sp = r.range(0.35, 0.6), ph = r(), R = r.range(rMin, rMax);
      if (t < start + i * 0.08) continue;
      const u = (t * sp + ph) % 1;
      bubbleB(ctx, x + Math.sin(u * 12 + i) * 16, H.lerp(yBot, yTop, u), R * (0.6 + 0.4 * u));
    }
  }
  // cute microbes
  function microbe(ctx, x, y, s, kind, tq, ph, munch) {
    ctx.save(); ctx.translate(x, y + bob(tq, ph, 12)); ctx.rotate(Math.sin(tq * 2 + ph) * 0.1); ctx.scale(s, s);
    const f = [C.pink, C.lav, C.butter, C.sky, C.peach][kind % 5], fS = [C.pinkS, C.lavS, C.butterS, C.skyS, C.peachS][kind % 5];
    if (kind % 3 === 0) { cel(ctx, rrP(-120, -66, 240, 132, 66), f, fS, -6, -6); ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.lineCap = 'round'; for (let i = 0; i < 5; i++) { const px = -96 + i * 48; ctx.beginPath(); ctx.moveTo(px, 64); ctx.quadraticCurveTo(px + Math.sin(tq * 10 + i) * 14, 88, px, 106); ctx.stroke(); } ctx.restore(); }
    else if (kind % 3 === 1) { cel(ctx, ellP(0, 0, 96, 92), f, fS, -6, -6); }
    else { cel(ctx, roundPoly(starPts(0, 0, 118, 88, 9), 16), f, fS, -6, -6); }
    face(ctx, 0, -6, 0.72, { eyes: munch ? 'happy' : 'normal', mouth: munch ? (Math.floor(tq * 7 + ph) % 2 ? 'O' : 'w') : 'smile' });
    ctx.restore();
  }
  function hexNet(ctx, cx, cy, w, h, r0) {
    ctx.save(); ctx.lineWidth = 12; ctx.strokeStyle = C.butterS; ctx.lineJoin = 'round';
    const dx = r0 * 1.74, dy = r0 * 1.5;
    ctx.save(); ctx.beginPath(); ctx.rect(cx - w / 2, cy - h / 2, w, h); ctx.clip();
    for (let j = -1; j <= h / dy + 1; j++) for (let i = -1; i <= w / dx + 1; i++) { const x = cx - w / 2 + i * dx + (j & 1 ? dx / 2 : 0), y = cy - h / 2 + j * dy; const p = hexP(x, y, r0, Math.PI / 6); ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.fill(p); ctx.stroke(p); }
    ctx.restore();
    ol(ctx, rrP(cx - w / 2, cy - h / 2, w, h, 24), 7); ctx.restore();
  }
  // a pill reading "ROOM n"
  const roomTag = (ctx, t, t0, n, fill) => ptag(ctx, t, t0, 540, 250, `ROOM ${n}`, fill, 62);

  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });

  // 1 HOOK
  scene(0, null, TH.sky, 3, (ctx, t) => {
    meadow(ctx, 1120); twinkles(ctx, W, HH, t, 21, 8, NOTM);
    const b = T(0, 'burp'), l = T(0, 'lunch'), pu = T(0, 'purpose'), g = T(1, 'guess'), wh = T(1, 'why');
    const up = prog(t, b, b + 0.8), pp = pop(t, 0.05);
    kWord(ctx, 'COWS BURP', 540, 300, 136, t, 0.15, 0.03, HO(C.white, C.pinkD));
    kWord(ctx, 'UP LUNCH!', 540, 455, 136, t, l, 0.03, HO(C.butter, C.pinkD));
    const open = t >= b && t < b + 1.0;
    cow(ctx, 540, 900, 1.35 * pp.s, { eyes: t >= wh ? 'star' : open ? 'squeeze' : 'normal', mouth: open ? 'O' : 'w', sq: squash(t, b), chew: t > b + 1.1 && t < wh ? Math.sin(t * 9) : 0 });
    if (t >= b) {
      const y = H.lerp(1060, 620, H.ease.out(up)), x = H.lerp(540, 900, H.ease.out(up));
      if (up < 1 || true) cud(ctx, x, y - bob(t, 0, 8) * up, 74 * pop(t, b).s);
      impactLines(ctx, 540, 1060, 100, t, b, 10);
      ptext(ctx, t, b + 0.05, 190, 590, 'BURP!', 96, HO(C.white, C.lavD));
    }
    ptag(ctx, t, pu, 540, 1480, 'ON PURPOSE!', C.butter, 72);
    if (t >= g) ptext(ctx, t, wh, 540, 1635, 'BUT WHY?!', 120, { ...HO(C.white, C.pinkD), wob: 0 });
  });

  // 2 GRASS IS TOUGH
  scene(2, 'star', TH.mint, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 8, NOTM);
    const gr = T(2, 'grass'), ha = T(2, 'hard'), wa = T(3, 'walls'), ce = T(3, 'cellulose'), co = T(4, 'cows'), br = T(4, 'break');
    if (t < wa) {
      kWord(ctx, 'GRASS', 540, 330, 180, t, gr, 0.04, HO(C.white, C.mintD));
      popIn(ctx, t, PS(2) - 0.2, 540, 1160, () => grass(ctx, 0, 0, 1.9, Math.sin(t * 2.6)), 1);
      ptag(ctx, t, ha, 540, 1350, 'HARD TO DIGEST', C.white, 76);
      return;
    }
    kWord(ctx, 'CELLULOSE', 540, 320, 142, t, ce, 0.03, HO(C.butter, C.mintD));
    const p = pop(t, wa);
    // magnified cell walls: green cells with thick pale walls
    ctx.save(); ctx.translate(540, 780); ctx.scale(p.sx, p.sy);
    const lens = ellP(0, 0, 360, 360);
    ctx.save(); ctx.clip(lens); ctx.fillStyle = C.butter; ctx.fillRect(-380, -380, 760, 760);
    const cw = 158, chh = 86;
    for (let j = -3; j <= 3; j++) for (let i = -3; i <= 3; i++) {
      const x = i * (cw + 18) + (j & 1 ? (cw + 18) / 2 : 0), y = j * (chh + 18);
      const cp = rrP(x - cw / 2, y - chh / 2, cw, chh, 26);
      cel(ctx, cp, G.g, G.gS, -4, -4, 3.5);
      ctx.fillStyle = G.gD; ctx.fill(ellP(x + 18, y + 4, 15, 15));
    }
    ctx.restore();
    ol(ctx, lens, 14); ctx.save(); ctx.strokeStyle = C.lavD; ctx.lineWidth = 8; ctx.stroke(ellP(0, 0, 372, 372)); ctx.restore();
    ctx.save(); ctx.translate(262, 262); ctx.rotate(-Math.PI / 4); cel(ctx, rrP(-38, 0, 76, 200, 34), C.lavD, C.lavS, -4, -4); ctx.restore();
    ctx.restore();
    if (t >= ce) { // arrow to a wall
      popIn(ctx, t, ce + 0.05, 790, 480, () => tag(ctx, 0, 0, 'tough walls', C.white, 1, 52), 1.2);
    }
    if (t >= co) {
      popIn(ctx, t, co, 300, 1370, () => cow(ctx, 0, 0, 0.72, { eyes: t >= br ? 'swirl' : 'normal', mouth: t >= br ? 'wobble' : 'flat', body: false }));
      sweat(ctx, 130, 1250, 1.2 * pop(t, br).s);
      cross(ctx, 620, 1370, 1.6, t, br);
      ptext(ctx, t, br, 780, 1540, 'ALONE', 100, HO(C.white, C.pinkD));
      ptext(ctx, t, br, 330, 1570, "CAN'T!", 110, HO(C.butter, C.pinkD));
    }
  });

  // 3 ONE STOMACH, FOUR ROOMS
  scene(5, 'heart', TH.lav, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 8, NOTM);
    const on = T(5, 'one'), fo = T(5, 'four'), ro = T(5, 'rooms');
    kWord(ctx, '1 STOMACH', 540, 330, 136, t, on, 0.03, HO(C.white, C.lavD));
    const pops = [0, 1, 2, 3].map((i) => pop(t, fo + i * 0.14).s);
    cowSide(ctx, 680, 950, 0.88 * pop(t, PS(5) - 0.3).s, { rooms: 4, pops, labels: true });
    ptext(ctx, t, ro, 540, 1480, '4 ROOMS', 170, HO(C.butter, C.pinkD));
  }, 600, 950);

  // 4 RUMEN: 40 GALLONS
  scene(6, 'star', TH.sky, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 8, NOTM);
    const ru = T(6, 'rumen'), va = T(7, 'vat'), fr = T(7, 'forty'), ga = T(7, 'gallons');
    roomTag(ctx, t, PS(6), 1, C.mint);
    kWord(ctx, 'RUMEN', 540, 430, 170, t, ru, 0.04, HO(C.white, C.mintD));
    const fill = H.ease.inOut(prog(t, va, fr + 0.5)), p = pop(t, PS(6) - 0.2);
    ctx.save(); ctx.translate(540, 930); ctx.scale(p.sx, p.sy);
    const S = ellP(0, 0, 410, 370);
    cel(ctx, S, C.cream, C.creamS, -8, -8, 7);
    ctx.save(); ctx.clip(S);
    const top = H.lerp(380, -290, fill);
    const wv = new Path2D(); wv.moveTo(-430, 400); wv.lineTo(-430, top);
    for (let x = -430; x <= 430; x += 40) wv.lineTo(x, top + Math.sin(x * 0.02 + t * 5) * 12);
    wv.lineTo(430, 400); wv.closePath();
    ctx.fillStyle = G.mush; ctx.fill(wv); ctx.strokeStyle = G.mushS; ctx.lineWidth = 7; ctx.stroke(wv);
    if (fill > 0.1) bubbles(ctx, t, 10, 19, -340, 340, 360, Math.max(top + 30, -260), 10, 24);
    ctx.restore();
    ol(ctx, S, 7);
    ctx.restore();
    face(ctx, 540, 790, 1.7 * p.s, { eyes: fill > 0.9 ? 'star' : 'normal', mouth: 'smile', iris: '#3fb98e' });
    if (t >= fr) {
      popIn(ctx, t, fr, 540, 1190, () => { const q = squash(t, fr + 0.35, 0.14); ctx.scale(q[0], q[1]); kText(ctx, String(Math.round(H.ease.out(prog(t, fr, fr + 0.35)) * 40)), 0, 0, 230, HO(C.butter, C.pinkD)); });
      ptag(ctx, t, T(7, 'up'), 240, 1360, 'up to', C.white, 56);
      ptext(ctx, t, ga, 540, 1500, 'GALLONS', 140, HO(C.white, C.skyD));
    } else ptag(ctx, t, T(7, 'up'), 240, 1360, 'up to', C.white, 56);
  }, 540, 950);

  // 5 MICROBES FERMENT
  scene(8, 'heart', TH.mint, 17, (ctx, t) => {
    ctx.fillStyle = G.mush; ctx.fillRect(0, 0, W, HH); // inside the vat
    ctx.fillStyle = 'rgba(255,255,255,0.14)'; for (let i = 0; i < 6; i++) ctx.fill(ellP((i * 230 + 80) % 1100, 180 + i * 300, 190, 90));
    bubbles(ctx, t, 18, 23, 40, 1040, 1860, 60, 12, 30);
    const mi = T(8, 'microbes'), fe = T(9, 'ferment'), g = T(9, 'grass');
    kWord(ctx, 'MICROBES', 540, 340, 150, t, mi, 0.03, HO(C.white, C.mintD));
    const pts = [[240, 700, 1.05, 0], [800, 640, 1.0, 1], [540, 930, 1.25, 2], [230, 1200, 1.0, 4], [830, 1160, 1.1, 3]];
    const chew = t >= fe;
    // grass bits being eaten
    const r = H.rng(31), left = 1 - prog(t, fe, fe + 1.3) * 0.75;
    ctx.save(); ctx.lineCap = 'round';
    for (let i = 0; i < 26; i++) { const x = r.range(70, 1010), y = r.range(490, 1390), a = r() * TAU, l = r.range(38, 74) * left; ctx.strokeStyle = C.plum; ctx.lineWidth = 19; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a + t * 0.3) * l, y + Math.sin(a + t * 0.3) * l); ctx.stroke(); ctx.strokeStyle = G.g; ctx.lineWidth = 11; ctx.stroke(); }
    ctx.restore();
    pts.forEach(([x, y, s, k], i) => { const p = pop(t, mi + i * 0.09); if (p.s > 0) microbe(ctx, x, y, s * p.s, k, t, i * 1.3, chew); });
    if (t >= fe) kWord(ctx, 'FERMENT!', 540, 1530, 148, t, fe, 0.03, HO(C.butter, C.pinkD));
  });

  // 6 HONEYCOMB SORTS
  scene(10, 'star', TH.butter, 29, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 8, NOTM);
    const ho = T(10, 'honeycomb'), so = T(10, 'sorts');
    roomTag(ctx, t, PS(10), 2, C.butter);
    kWord(ctx, 'HONEYCOMB', 540, 430, 140, t, ho, 0.025, HO(C.white, C.butterS));
    const p = pop(t, ho);
    if (p.s > 0) { ctx.save(); ctx.translate(540, 900); ctx.scale(p.sx, p.sy); ctx.translate(-540, -900); hexNet(ctx, 540, 900, 900, 170, 54); ctx.restore(); }
    if (t >= so) {
      const P = 1.0;
      for (let i = 0; i < 5; i++) { // small pieces fall through
        const u = ((t - so) / P + i / 5) % 1, x = 170 + i * 62;
        cud(ctx, x, H.lerp(560, 1290, u), 21);
      }
      for (let i = 0; i < 2; i++) { // big chunks bounce off
        const u = ((t - so) / 1.1 + i * 0.5) % 1, x = 700 + i * 170;
        const y = 770 - 230 * Math.abs(Math.cos(u * Math.PI));
        cud(ctx, x, y, 66);
      }
      ptag(ctx, t, so + 0.1, 310, 1360, 'small: onward', C.white, 50);
      ptag(ctx, t, so + 0.25, 780, 1100, 'big: back up', C.white, 50);
      popIn(ctx, t, so + 0.25, 780, 1000, () => { ctx.scale(1.4, 1.4); const q = roundPoly([[0, -30], [28, 16], [-28, 16]], 6); cel(ctx, q, C.pinkD, C.pinkS, -2, -2, 4); }, 1);
    }
  }, 540, 900);

  // 7 CUD UP THE THROAT
  scene(11, 'heart', TH.pink, 37, (ctx, t) => {
    twinkles(ctx, W, HH, t, 101, 8, NOTM);
    const bi = T(11, 'big'), ba = T(11, 'back'), th = T(11, 'throat'), so = T(12, 'soggy'), cu = T(12, 'cud');
    kWord(ctx, 'BACK UP!', 540, 330, 160, t, bi, 0.03, HO(C.white, C.pinkD));
    const prs = H.ease.inOut(prog(t, ba, so));
    // throat path in cowSide's units
    const path = [[-135, -72], [-250, -100], [-395, -120], [-500, -160], [-540, -176]];
    cowSide(ctx, 680, 1010, 0.88, {
      rooms: 2, eyes: t >= cu ? 'star' : 'normal', mouth: t >= so ? 'O' : 'smile', fn: (c) => {
        const L = plen(path); const [x, y] = along(path, Math.min(L, L * prs));
        dotted(c, path, prs, C.pinkD, 6, 22, 0);
        cud(c, x, y, 44 + 6 * Math.sin(t * 12));
      },
    });
    if (t >= cu) { ptext(ctx, t, cu, 540, 1500, 'CUD', 240, HO(C.butter, C.mintD)); sparkle(ctx, 790, 1360, 50 * pop(t, cu).s, C.butter, t); sparkle(ctx, 270, 1400, 36 * pop(t, cu + 0.1).s, C.white, -t); }
    else if (t >= so) ptag(ctx, t, so, 540, 1450, 'a soggy ball', C.white, 72);
    else if (t >= th) ptag(ctx, t, th, 540, 1450, 'up the throat', C.white, 72);
  }, 640, 900);

  // 8 CHEW 8 HOURS
  scene(13, 'star', TH.sky, 41, (ctx, t) => {
    twinkles(ctx, W, HH, t, 121, 8, NOTM);
    const ch = T(13, 'chews'), ei = T(14, 'eight'), da = T(14, 'day');
    const j = Math.sin(t * 13);
    cow(ctx, 540, 720, 1.5 * pop(t, PS(13) - 0.2).s, { body: false, chew: j, eyes: t > da ? 'happy' : 'normal', mouth: Math.abs(j) > 0.4 ? 'w' : 'flat' });
    ptext(ctx, t, ch, 180, 420, 'CHEW', 88, HO(C.white, C.skyD));
    ptext(ctx, t, ch + 0.25, 900, 420, 'CHEW', 88, HO(C.butter, C.skyD));
    if (t >= ei) {
      popIn(ctx, t, ei, 540, 1320, () => { kText(ctx, '8 HOURS', 0, 0, 180, HO(C.butter, C.pinkD)); });
      popIn(ctx, t, ei, 170, 1110, () => clock(ctx, 0, 0, 90, (t - ei) * 22));
      ptext(ctx, t, da, 540, 1480, 'A DAY', 130, HO(C.white, C.skyD));
    }
  });

  // 9 ROOM 3: SQUEEZE
  scene(15, 'heart', TH.lav, 47, (ctx, t) => {
    twinkles(ctx, W, HH, t, 141, 8, NOTM);
    const fi = T(15, 'fine'), wa = T(16, 'water'), sq = T(16, 'squeezed');
    roomTag(ctx, t, PS(15), 3, C.lav);
    kWord(ctx, 'MUSH SLIDES IN', 540, 430, 100, t, fi, 0.02, HO(C.white, C.lavD));
    const press = t >= sq ? 0.5 + 0.5 * Math.sin((t - sq) * 9) : 0;
    const p = pop(t, PS(15) - 0.2), by = 900;
    // folded pages of room three
    ctx.save(); ctx.translate(540, by); ctx.scale(p.sx, p.sy);
    const gap = H.lerp(58, 40, press), n = 6;
    for (let i = 0; i < n; i++) { const y = (i - (n - 1) / 2) * gap; cel(ctx, rrP(-310, y - 40, 620, 80, 38), i % 2 ? C.lav : C.pink, i % 2 ? C.lavS : C.pinkS, -4, -4, 5); }
    ctx.restore();
    face(ctx, 540, by - 8, 1.25 * p.s, { eyes: t >= sq ? 'squeeze' : 'normal', mouth: t >= sq ? 'wobble' : 'smile' });
    cud(ctx, 150, H.lerp(620, by - 40, H.ease.inOut(prog(t, fi, fi + 1.1))), 58 * (1 - prog(t, fi + 1.1, fi + 1.6)));
    if (t >= wa) {
      for (let i = 0; i < 9; i++) { const u = ((t - wa) * 1.5 + i * 0.137) % 1, x = 270 + i * 68; drop(ctx, x, H.lerp(1090, 1370, u), 0.95 * (1 - u * 0.3)); }
      ctx.fillStyle = C.sky; ctx.fill(ellP(540, 1395, 390 * pop(t, wa).s, 34)); ol(ctx, ellP(540, 1395, 390 * pop(t, wa).s, 34), 5);
      ptext(ctx, t, sq, 540, 1560, 'SQUEEZE!', 148, HO(C.white, C.skyD));
      ptag(ctx, t, wa, 860, 1240, 'water', C.white, 54);
    }
  }, 540, 900);

  // 10 ROOM 4: ACID
  scene(17, 'star', TH.butter, 53, (ctx, t) => {
    twinkles(ctx, W, HH, t, 161, 8, NOTM);
    const tr = T(17, 'true'), ac = T(18, 'acid'), li = T(18, 'like');
    roomTag(ctx, t, PS(17), 4, C.pink);
    kWord(ctx, 'TRUE STOMACH', 540, 430, 116, t, tr, 0.025, HO(C.white, C.pinkD));
    const p = pop(t, PS(17) - 0.15);
    ctx.save(); ctx.translate(t >= li ? 380 : 540, 890); ctx.scale(p.sx * (t >= li ? 0.82 : 1), p.sy * (t >= li ? 0.82 : 1));
    const S = new Path2D(); S.moveTo(-250, -240); S.bezierCurveTo(-90, -310, 60, -120, 260, -180); S.bezierCurveTo(390, -210, 400, 40, 290, 140); S.bezierCurveTo(170, 260, -130, 310, -260, 190); S.bezierCurveTo(-340, 110, -340, -210, -250, -240); S.closePath();
    cel(ctx, S, C.pink, C.pinkS, -8, -8, 7);
    ctx.save(); ctx.clip(S);
    if (t >= ac) { const lv = H.lerp(320, 100, H.ease.out(prog(t, ac, ac + 0.7))), wv = new Path2D(); wv.moveTo(-420, 400); wv.lineTo(-420, lv); for (let x = -420; x <= 420; x += 36) wv.lineTo(x, lv + Math.sin(x * 0.03 + t * 6) * 10); wv.lineTo(420, 400); wv.closePath(); ctx.fillStyle = C.bile || G.g; ctx.fill(wv); ctx.strokeStyle = C.bileS; ctx.lineWidth = 6; ctx.stroke(wv); bubbles(ctx, t, 8, 37, -240, 280, 290, lv + 30, 10, 22); }
    ctx.restore();
    ctx.restore();
    const fx = t >= li ? 372 : 540;
    face(ctx, fx, 810, (t >= li ? 1.25 : 1.55) * p.s, { eyes: t >= ac ? 'shock' : 'normal', mouth: t >= ac ? 'o' : 'smile' });
    if (t >= li) {
      popIn(ctx, t, li, 800, 760, () => kid(ctx, 0, 0, 0.82, { eyes: 'happy', mouth: 'smile' }));
      ptext(ctx, t, li, 800, 1120, 'SAME!', 86, HO(C.butter, C.pinkD));
    }
    ptext(ctx, t, ac, 540, 1420, 'ACID', 210, HO(C.bile || C.butter, C.mintD));
  }, 540, 900);

  // 11 METHANE BURP
  scene(19, 'heart', TH.mint, 59, (ctx, t) => {
    twinkles(ctx, W, HH, t, 181, 8, NOTM);
    const ga = T(19, 'gas'), hu = T(20, 'hundreds'), li = T(20, 'litres'), me = T(20, 'methane'), bu = T(21, 'burps');
    if (t < bu) {
      kWord(ctx, 'GAS!', 540, 340, 190, t, ga, 0.05, HO(C.white, C.mintD));
      cowSide(ctx, 680, 1000, 0.88, { rooms: 4, pops: [1, 1, 1, 1], eyes: 'normal', mouth: 'flat', fn: (c) => {
        if (t >= PS(19)) {
          bubbles(c, t, 10, 41, -40, 230, 110, -70, 14, 30, PS(19));
        }
      }});
      if (t >= hu) popIn(ctx, t, hu, 540, 1440, () => kText(ctx, '100s OF LITRES', 0, 0, 110, HO(C.butter, C.pinkD)));
      if (t >= me) ptext(ctx, t, me, 540, 1570, 'OF METHANE A DAY', 76, HO(C.white, C.mintD));
    } else {
      const k = H.ease.out(prog(t, bu, bu + 0.5));
      cow(ctx, 540, 1040, 1.05, { eyes: 'squeeze', mouth: 'O', sq: squash(t, bu, 0.3), body: true });
      ctx.save(); ctx.translate(540, 660); ctx.scale(k, k); union(ctx, [cloudP(0, 0, 4.4)], C.white, 6); ctx.restore();
      kWord(ctx, 'BUUURP!', 540, 700, 168, t, bu, 0.02, HO(C.butter, C.pinkD));
      impactLines(ctx, 540, 660, 400, t, bu, 14);
    }
  }, 640, 1000);

  // 12 THE QUESTION
  scene(22, 'star', TH.pink, 67, (ctx, t) => {
    meadow(ctx, 1160); twinkles(ctx, W, HH, t, 201, 10, NOTM);
    const tw = T(22, 'twice'), wo = T(22, 'would');
    kWord(ctx, 'WOULD YOU', 540, 310, 136, t, wo, 0.025, HO(C.white, C.pinkD));
    kWord(ctx, 'CHEW IT TWICE?', 540, 450, 108, t, wo + 0.5, 0.02, HO(C.butter, C.pinkD));
    cow(ctx, 340, 940, 0.92, { chew: Math.sin(t * 13), eyes: 'normal', mouth: 'w' });
    kid(ctx, 800, 880, 0.9, { eyes: t >= tw ? 'shock' : 'normal', mouth: t >= tw ? 'o' : 'smile', look: [-0.6, 0] });
    kana(ctx, '?', 950, 660, 120, 0.15, pop(t, tw).s, C.butter);
    if (t >= tw) popIn(ctx, t, tw, 540, 1510, () => { cel(ctx, rrP(-440, -80, 880, 160, 70), C.white, C.creamS, -4, -4); ctx.fillStyle = C.plum; ctx.font = `700 76px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('YES OR NO?', 0, 4); });
    if (t >= tw) heart(ctx, 900, 1480, 40 * pop(t, tw + 0.2).s);
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
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i - n / 2) * 0.2, minor }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); };
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };
    const burp = (t, d = 0.35, g = 1) => { k.tone(t, { f: [[0, 130], [d * 0.5, 95], [d, 70]], type: 'sawtooth', dur: d, gain: 0.1 * g, a: 0.01 }); k.tone(t, { f: [[0, 66], [d, 48]], type: 'triangle', dur: d, gain: 0.16 * g, a: 0.01 }); };
    const chew = (t) => k.noise(t, { dur: 0.05, filter: 'bandpass', f: 900, q: 1.1, gain: 0.1, minor: true });
    const blub = (t, f = 500) => k.tone(t, { f: [[0, f], [0.09, f * 1.8]], dur: 0.1, gain: 0.07, minor: true });
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6', 'E6', 'G6'][i % 10]); });
    // 1
    burp(vis(T(0, 'burp')), 0.4); bloop(vis(T(0, 'lunch')), 460, 0.8, { minor: true });
    bell(vis(T(0, 'purpose')), 'E5', 0.9); k.play('error', vis(T(1, 'why')), { f: 'A3', gain: 0.3 });
    // 2
    bloop(vis(T(2, 'grass')), 400, 0.8); bloop(vis(T(2, 'hard')), 300, 0.7, { minor: true });
    big(vis(T(3, 'cellulose'))); k.play('error', vis(T(4, 'break')), { f: 'E3', gain: 0.35 });
    // 3
    bloop(vis(T(5, 'one')), 440, 0.9);
    [0, 1, 2, 3].forEach((i) => bloop(vis(T(5, 'four') + i * 0.14), 380 + i * 110, 0.9));
    big(vis(T(5, 'rooms')));
    // 4
    bloop(vis(T(6, 'rumen')), 420, 0.9);
    for (let i = 0; i < 10; i++) blub(T(7, 'vat') + i * 0.17, 300 + i * 30);
    { const t = vis(T(7, 'forty')); k.play('impact', t, { f: 110, gain: 0.4 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.012, n, 1.5, { dur: 1.3 })); twinkle(t + 0.2, 4, 1, false); }
    // 5
    for (let i = 0; i < 5; i++) bloop(vis(T(8, 'microbes') + i * 0.09), 620 + i * 60, 0.6, { minor: true });
    for (let i = 0; i < 12; i++) chew(T(9, 'ferment') + i * 0.13);
    bell(vis(T(9, 'ferment')), 'G5', 1);
    // 6
    bloop(vis(T(10, 'honeycomb')), 480, 0.9);
    for (let i = 0; i < 7; i++) k.play('tock', T(10, 'sorts') + i * 0.2, { f: 1200, gain: 0.18, minor: true });
    // 7
    k.tone(T(11, 'back'), { f: [[0, 180], [1.3, 620]], type: 'triangle', dur: 1.35, gain: 0.08, a: 0.05 });
    burp(vis(T(12, 'soggy')), 0.28, 0.8); big(vis(T(12, 'cud')));
    // 8
    for (let i = 0; i < 12; i++) chew(T(13, 'chews') + i * 0.24);
    { const t = vis(T(14, 'eight')); k.play('impact', t, { f: 120, gain: 0.4 }); ['C5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.012, n, 1.4, { dur: 1.2 })); }
    for (let i = 0; i < 8; i++) k.play('tock', T(14, 'eight') + i * 0.12, { f: 1400, gain: 0.18, minor: true });
    // 9
    k.play('swish', T(15, 'fine'), { dur: 0.6, gain: 0.45, minor: true });
    for (let i = 0; i < 9; i++) blub(T(16, 'water') + i * 0.13, 700 - i * 25);
    bloop(vis(T(16, 'squeezed')), 340, 1);
    // 10
    bloop(vis(T(17, 'true')), 460, 0.9);
    k.play('stamp', vis(T(18, 'acid')), { gain: 0.45 }); for (let i = 0; i < 6; i++) blub(T(18, 'acid') + i * 0.11, 560);
    bell(vis(T(18, 'like')), 'C6', 0.8);
    // 11
    for (let i = 0; i < 10; i++) blub(T(19, 'fermenting') + i * 0.19, 340 + (i % 3) * 90);
    big(vis(T(20, 'hundreds'))); bloop(vis(T(20, 'methane')), 500, 0.7, { minor: true });
    burp(vis(T(21, 'burps')), 0.7, 1.5); k.play('whoosh', vis(T(21, 'burps')), { dur: 0.4, gain: 0.45 });
    // 12
    bloop(vis(T(22, 'would')), 500, 0.8, { minor: true });
    { const t = vis(T(22, 'twice')); bloop(t, 620, 1); ['G4', 'C5', 'E5', 'G5'].forEach((n, i) => bell(t + 0.15 + i * 0.05, n, 1.2, { dur: 1.2 })); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
