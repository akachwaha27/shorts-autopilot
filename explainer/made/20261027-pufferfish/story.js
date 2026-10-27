// ================= Kawaii Anime, vertical 1080x1920: "What happens when a pufferfish puffs up?" =================
// Short (50 s), 7 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A chibi pufferfish acts it out: the gulp, the accordion stomach, no ribs, tight skin, spines, too big to swallow.
// Scene changes: star / heart iris wipes; continuous push-ins inside the gulp and balloon beats. Everything on twos.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":3.22,"text":"A pufferfish stomach stretches 100 times bigger,","words":[["a",0.25],["pufferfish",0.32],["stomach",1.05],["stretches",1.55],["100",2.21],["times",2.42],["bigger",2.79]]},
    {"s":3.52,"e":5.28,"text":"and you'd never guess why it has to.","words":[["and",3.52],["youd",3.72],["never",3.98],["guess",4.3],["why",4.63],["it",4.83],["has",4.96],["to",5.15]]},
    {"s":5.83,"e":7.67,"text":"When a hungry fish gets close,","words":[["when",5.83],["a",6.14],["hungry",6.22],["fish",6.68],["gets",6.98],["close",7.29]]},
    {"s":7.97,"e":10.17,"text":"the pufferfish opens its mouth wide","words":[["the",7.97],["pufferfish",8.19],["opens",8.93],["its",9.29],["mouth",9.51],["wide",9.88]]},
    {"s":10.47,"e":11.99,"text":"and gulps seawater, fast.","words":[["and",10.47],["gulps",10.7],["seawater",11.08],["fast",11.69]]},
    {"s":12.54,"e":13.67,"text":"Gulp after gulp,","words":[["gulp",12.54],["after",12.89],["gulp",13.32]]},
    {"s":13.97,"e":15.93,"text":"it pumps the water into its stomach.","words":[["it",13.97],["pumps",14.11],["the",14.44],["water",14.65],["into",14.98],["its",15.25],["stomach",15.45]]},
    {"s":16.48,"e":18.82,"text":"That stomach is folded like an accordion,","words":[["that",16.48],["stomach",16.75],["is",17.23],["folded",17.37],["like",17.79],["an",18.06],["accordion",18.2]]},
    {"s":19.12,"e":21.45,"text":"so it unfolds and keeps on stretching.","words":[["so",19.12],["it",19.27],["unfolds",19.42],["and",19.95],["keeps",20.17],["on",20.55],["stretching",20.7]]},
    {"s":22.0,"e":23.97,"text":"There are almost no ribs in the way,","words":[["there",22.0],["are",22.35],["almost",22.56],["no",22.98],["ribs",23.13],["in",23.41],["the",23.55],["way",23.76]]},
    {"s":24.27,"e":26.06,"text":"so the whole body balloons out.","words":[["so",24.27],["the",24.41],["whole",24.63],["body",24.99],["balloons",25.27],["out",25.85]]},
    {"s":26.61,"e":28.26,"text":"Its stretchy skin pulls tight,","words":[["its",26.61],["stretchy",26.81],["skin",27.34],["pulls",27.6],["tight",27.93]]},
    {"s":28.56,"e":30.51,"text":"and little spines pop up all over.","words":[["and",28.56],["little",28.78],["spines",29.21],["pop",29.64],["up",29.86],["all",30.0],["over",30.22]]},
    {"s":31.06,"e":33.11,"text":"Now it's about three times its size,","words":[["now",31.06],["its",31.28],["about",31.5],["three",31.86],["times",32.23],["its",32.6],["size",32.82]]},
    {"s":33.41,"e":34.46,"text":"a spiky ball","words":[["a",33.41],["spiky",33.52],["ball",34.04]]},
    {"s":34.76,"e":36.25,"text":"way too big to swallow.","words":[["way",34.76],["too",35.01],["big",35.26],["to",35.5],["swallow",35.67]]},
    {"s":36.8,"e":38.48,"text":"But puffing up is hard work.","words":[["but",36.8],["puffing",37.03],["up",37.56],["is",37.71],["hard",37.87],["work",38.17]]},
    {"s":39.03,"e":41.16,"text":"It can take hours to catch its breath,","words":[["it",39.03],["can",39.17],["take",39.38],["hours",39.67],["to",40.02],["catch",40.16],["its",40.52],["breath",40.73]]},
    {"s":41.46,"e":43.19,"text":"so it only puffs when it has to.","words":[["so",41.46],["it",41.6],["only",41.75],["puffs",42.04],["when",42.4],["it",42.68],["has",42.83],["to",43.05]]},
    {"s":43.74,"e":45.43,"text":"Then it spits the water back out.","words":[["then",43.74],["it",44.0],["spits",44.13],["the",44.46],["water",44.65],["back",44.98],["out",45.24]]},
    {"s":45.98,"e":47.47,"text":"So if you were a pufferfish,","words":[["so",45.98],["if",46.12],["you",46.25],["were",46.45],["a",46.72],["pufferfish",46.79]]},
    {"s":47.77,"e":48.99,"text":"what would make you puff?","words":[["what",47.77],["would",48.01],["make",48.32],["you",48.56],["puff",48.74]]}
  ];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ごくごくガーンぷくーぷしゅーキラキラ';
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

  // ---------- sound events, registered next to the visuals they belong to ----------

  // ======================================== CHARACTERS ========================================
  const W = W0, HH = H0;
  // the pufferfish, side view facing right. (x,y) = body centre. P.puff 0..1 (deflated fish -> ball), P.spines 0..1,
  // P.xray 0..1 (see-through body with stomach + backbone), P.stom 0..1 (stomach fill), P.mouth 'lips'|'O'|'pant'|'smile'
  function puffer(ctx, x, y, s, P = {}) {
    const puff = H.clamp(P.puff || 0), sp = H.clamp(P.spines == null ? puff : P.spines), t = P.t || 0;
    const rx = H.lerp(175, 255, puff), ry = H.lerp(118, 250, puff);
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (P.shadow !== false) { ctx.fillStyle = 'rgba(90,54,89,0.12)'; ctx.fill(ellP(0, ry + 70, rx * 0.8, 20)); }
    ctx.translate(0, -(P.lift || 0)); ctx.rotate(P.tilt || 0);
    const sq = P.sq || [1, 1]; ctx.scale(sq[0], sq[1]);
    // tail fan (gets swallowed by the body as it puffs)
    const tk = H.lerp(1, 0.55, puff);
    ctx.save(); ctx.translate(-rx + 26, 0); ctx.rotate(Math.sin(t * 7) * 0.18 * (1 - puff * 0.7));
    cel(ctx, roundPoly([[10, 0], [-100 * tk, -78 * tk], [-72 * tk, 0], [-100 * tk, 78 * tk]], 18 * tk), C.peach, C.peachS, -5, -5);
    ctx.restore();
    // dorsal + anal fins
    for (const sd of [-1, 1]) cel(ctx, roundPoly([[-rx * 0.15, sd * ry * 0.9], [-rx * 0.55, sd * (ry * 0.95 + 46 * tk)], [-rx * 0.6, sd * ry * 0.7]], 10), C.peach, C.peachS, -3, -3);
    // spines: behind the body, each one pops on its own
    const N = 34;
    for (let i = 0; i < N; i++) {
      const a = i / N * TAU + 0.09;
      const da = Math.atan2(Math.sin(a), Math.cos(a)); if (Math.abs(da) < 0.32) continue; // keep the mouth clear
      const k = H.clamp(sp * 1.7 - ((i * 7) % N) / N * 0.7); if (k <= 0) continue;
      const ex = Math.cos(a) * rx, ey = Math.sin(a) * ry, nx0 = Math.cos(a) / rx, ny0 = Math.sin(a) / ry, nl = Math.hypot(nx0, ny0), nx = nx0 / nl, ny = ny0 / nl;
      const L = 58 * H.ease.back(k), bw = 15;
      cel(ctx, roundPoly([[ex - ny * bw - nx * 10, ey + nx * bw - ny * 10], [ex + nx * L, ey + ny * L], [ex + ny * bw - nx * 10, ey - nx * bw - ny * 10]], 5), C.cream, C.creamS, -2, -2, 4);
    }
    // body
    const body = ellP(0, 0, rx, ry);
    cel(ctx, body, C.butter, C.butterS, -14, -14, 0);
    ctx.save(); ctx.clip(body);
    ctx.fillStyle = '#fffaf0'; ctx.fill(ellP(rx * 0.05, ry * 0.78, rx * 1.05, ry * 0.62));
    const r = H.rng(77);
    ctx.fillStyle = 'rgba(220,160,122,0.75)';
    for (let i = 0; i < 16; i++) { const u = r.range(-0.85, 0.55), v = r.range(-0.85, -0.12); ctx.fill(ellP(u * rx, v * ry, 11 + r() * 7, 10 + r() * 6)); }
    if (P.xray > 0) {
      const xa = P.xray;
      ctx.fillStyle = `rgba(222,238,255,${0.82 * xa})`; ctx.fillRect(-rx - 10, -ry - 10, rx * 2 + 20, ry * 2 + 20);
      ctx.globalAlpha = xa;
      // backbone: rounded beads along the back. No rib cage.
      for (let i = 0; i < 9; i++) { const u = -0.78 + i * 0.16; cel(ctx, rrP(u * rx - 13, -ry * 0.5 - 10 - Math.sin((u + 0.8) * 2) * ry * 0.08, 26, 20, 8), C.white, C.creamS, -2, -2, 3.5); }
      // gullet + stomach
      const sr = H.lerp(48, Math.min(rx, ry) * 0.8, H.clamp(P.stom || 0)), scx = -rx * 0.08, scy = ry * 0.16;
      tube(ctx, [[rx * 0.86, ry * 0.08], [rx * 0.5, ry * 0.04], [scx + sr * 0.7, scy - sr * 0.2]], 30, C.pink, C.pinkS, true);
      const st = ellP(scx, scy, sr * 1.08, sr);
      cel(ctx, st, C.pink, C.pinkS, -6, -6, 5);
      ctx.save(); ctx.clip(st); const lvl = scy + sr - sr * 2 * H.clamp((P.stom || 0) * 0.9 + 0.1);
      ctx.fillStyle = H.rgba(C.skyD, 0.65); ctx.beginPath(); ctx.moveTo(scx - sr * 1.2, lvl);
      for (let xx = -1.2; xx <= 1.21; xx += 0.1) ctx.lineTo(scx + xx * sr, lvl + Math.sin(xx * 6 + t * 6) * 6);
      ctx.lineTo(scx + sr * 1.2, scy + sr + 10); ctx.lineTo(scx - sr * 1.2, scy + sr + 10); ctx.closePath(); ctx.fill(); ctx.restore();
      shine(ctx, scx - sr * 0.45, scy - sr * 0.45, sr * 0.2, sr * 0.1, -0.7);
      ctx.globalAlpha = 1;
    }
    ctx.restore();
    ol(ctx, body, 5);
    // stretched-tight skin: a big glossy highlight + stretch marks
    if (puff > 0.5) { const g = (puff - 0.5) * 2; shine(ctx, -rx * 0.45, -ry * 0.58, rx * 0.22 * g, ry * 0.09 * g, -0.6, 0.85); shine(ctx, -rx * 0.12, -ry * 0.76, 10 * g, 10 * g, 0, 0.85); }
    if (P.tight > 0) { ctx.save(); ctx.globalAlpha = P.tight; ctx.strokeStyle = C.white; ctx.lineWidth = 7; ctx.lineCap = 'round'; for (const a of [-2.4, -0.8, 2.2, 1.0]) { ctx.beginPath(); ctx.arc(0, 0, Math.min(rx, ry) + 40, a - 0.18, a + 0.18); ctx.stroke(); } ctx.restore(); }
    // pectoral fin
    ctx.save(); ctx.translate(rx * 0.18, ry * 0.12); ctx.rotate(0.25 + Math.sin(t * 9) * 0.3); cel(ctx, roundPoly([[8, -6], [-62, -34], [-50, 4], [-62, 36], [8, 8]], 10), C.peach, C.peachS, -3, -3, 4); ctx.restore();
    // face
    const ek = P.eyes || 'normal';
    eye(ctx, rx * 0.44, -ry * 0.2 - 6, 42, 54, '#3fb98e', ek, -1, P.look || [0.3, 0]);
    if (P.blush !== false) blush(ctx, rx * 0.5, ry * 0.2 + 22, 22, 12);
    const mx = rx * 0.93, my = ry * 0.1 + 8, mk = P.mouth || 'lips';
    if (mk === 'O' || mk === 'pant') {
      const o = mk === 'O' ? 1 : 0.55 + 0.25 * Math.sin(t * 14);
      const p = ellP(mx, my, 22 * o + 8, 26 * o + 6);
      ctx.fillStyle = '#b8456f'; ctx.fill(p); ol(ctx, p, 5); ctx.save(); ctx.clip(p); ctx.fillStyle = '#ff8fab'; ctx.fill(ellP(mx, my + 20 * o, 16, 10)); ctx.restore();
    } else if (mk === 'spit') {
      cel(ctx, ellP(mx + 6, my, 20, 13), C.pinkD, '#e2527f', -2, -2, 4);
    } else {
      cel(ctx, ellP(mx + 4, my - 9, 17, 10), C.pinkD, '#e2527f', -2, -2, 4); cel(ctx, ellP(mx + 4, my + 9, 17, 10), C.pinkD, '#e2527f', -2, -2, 4);
    }
    ctx.restore();
  }
  // the hungry fish: a long lavender fish facing LEFT. P.open 0..1 (jaw), P.eyes
  function hunter(ctx, x, y, s, P = {}) {
    const t = P.t || 0, op = H.clamp(P.open || 0);
    ctx.save(); ctx.translate(x, y); ctx.scale(-s, s); ctx.rotate(P.tilt || 0);
    const rx = 250, ry = 118;
    ctx.save(); ctx.translate(-rx + 30, 0); ctx.rotate(Math.sin(t * 6) * 0.2);
    cel(ctx, roundPoly([[10, 0], [-130, -110], [-90, 0], [-130, 110]], 22), C.lav, C.lavS, -6, -6); ctx.restore();
    cel(ctx, roundPoly([[-40, -ry * 0.92], [-120, -ry - 80], [60, -ry * 0.9]], 14), C.lavS, C.lavD, -4, -4);
    // jaw: the body is drawn in two halves so the mouth can hinge open at the front
    const ja = op * 0.42;
    const upper = new Path2D(); upper.ellipse(0, 0, rx, ry, 0, Math.PI, TAU); upper.lineTo(rx * 0.3, 0); upper.closePath();
    const lower = new Path2D(); lower.ellipse(0, 0, rx, ry, 0, 0, Math.PI); lower.lineTo(rx * 0.3, 0); lower.closePath();
    if (op > 0.02) { ctx.fillStyle = '#7a3b6b'; ctx.fill(roundPoly([[rx * 0.25, 0], [rx + 20, -ry * 0.75 * op], [rx + 20, ry * 0.75 * op]], 20)); }
    ctx.save(); ctx.translate(rx * 0.25, 0); ctx.rotate(-ja); ctx.translate(-rx * 0.25, 0);
    cel(ctx, upper, C.lav, C.lavS, -12, -12);
    if (op > 0.05) for (let i = 0; i < 4; i++) { const tx = rx * 0.45 + i * 40; cel(ctx, roundPoly([[tx - 14, -1], [tx + 14, -1], [tx, 26]], 4), C.white, C.creamS, -1, -1, 3.5); }
    ctx.restore();
    ctx.save(); ctx.translate(rx * 0.25, 0); ctx.rotate(ja * 0.6); ctx.translate(-rx * 0.25, 0);
    cel(ctx, lower, '#efe6ff', C.lavS, -10, -8);
    if (op > 0.05) for (let i = 0; i < 3; i++) { const tx = rx * 0.5 + i * 40; cel(ctx, roundPoly([[tx - 13, 1], [tx + 13, 1], [tx, -22]], 4), C.white, C.creamS, -1, -1, 3.5); }
    ctx.restore();
    ctx.save(); ctx.translate(rx * 0.25, 0); ctx.rotate(-ja); ctx.translate(-rx * 0.25, 0);
    const ek = P.eyes || 'normal';
    eye(ctx, rx * 0.5, -ry * 0.42, 30, 38, '#8f74e6', ek, -1, P.look || [0.4, 0.2]);
    if (ek === 'normal') { ctx.save(); ctx.strokeStyle = C.dark; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(rx * 0.32, -ry * 0.86); ctx.lineTo(rx * 0.66, -ry * 0.7); ctx.stroke(); ctx.restore(); }
    ctx.restore();
    ctx.save(); ctx.translate(-30, ry * 0.25); ctx.rotate(0.4 + Math.sin(t * 8) * 0.3); cel(ctx, ellP(-24, 0, 40, 18), C.lavS, C.lavD, -3, -3, 4); ctx.restore();
    ctx.restore();
  }
  // a big standalone stomach: k = 0 folded like an accordion, 1 = stretched round and full of water
  function sac(ctx, cx, cy, k, t, s = 1) {
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
    const rx = H.lerp(150, 360, k), ry = H.lerp(330, 360, k), amp = (1 - k) * 46, folds = 9;
    const pts = [];
    for (let i = 0; i < 180; i++) {
      const a = i / 180 * TAU, c = Math.cos(a), sn = Math.sin(a);
      const tri = Math.abs(((sn * folds * 0.5 + 100) % 1) - 0.5) * 2; // zigzag down the sides
      const bump = amp * (tri - 0.5) * Math.abs(c);
      pts.push([c * (rx + bump), sn * ry]);
    }
    const p = new Path2D(); pts.forEach(([x, y], i) => (i ? p.lineTo(x, y) : p.moveTo(x, y))); p.closePath();
    cel(ctx, p, C.pink, C.pinkS, -14, -14, 6);
    ctx.save(); ctx.clip(p);
    const lvl = ry - 2 * ry * (0.12 + 0.8 * k);
    ctx.fillStyle = H.rgba(C.skyD, 0.6); ctx.beginPath(); ctx.moveTo(-rx - 80, lvl);
    for (let x = -rx - 80; x <= rx + 80; x += 20) ctx.lineTo(x, lvl + Math.sin(x * 0.03 + t * 5) * 10);
    ctx.lineTo(rx + 80, ry + 10); ctx.lineTo(-rx - 80, ry + 10); ctx.closePath(); ctx.fill();
    // fold creases
    if (k < 0.95) { ctx.strokeStyle = H.rgba(C.plum, 0.55 * (1 - k)); ctx.lineWidth = 5; ctx.lineCap = 'round'; for (let i = 1; i < folds; i++) { const yy = -ry + (2 * ry * i) / folds; ctx.beginPath(); ctx.moveTo(-rx * 0.75, yy); ctx.quadraticCurveTo(0, yy + 16, rx * 0.75, yy); ctx.stroke(); } }
    ctx.restore();
    shine(ctx, -rx * 0.5, -ry * 0.55, rx * 0.16, ry * 0.07, -0.7);
    // gullet stub on top
    tube(ctx, [[rx * 0.35, -ry * 0.92], [rx * 0.45, -ry - 90]], 54, C.pink, C.pinkS, true);
    ctx.restore();
  }
  function bubbles(ctx, t, seed, n = 14, x0 = 0, x1 = 1080) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const bx = r.range(x0, x1), sp = r.range(60, 140), R = r.range(10, 26), ph = r() * 3000;
      const y = HH + 60 - ((t * sp + ph) % (HH + 140)), x = bx + Math.sin(t * 2 + i) * 16;
      ctx.save(); ctx.globalAlpha = 0.85; ctx.strokeStyle = 'rgba(255,255,255,0.95)'; ctx.lineWidth = 5; ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.beginPath(); ctx.arc(x, y, R, 0, TAU); ctx.fill(); ctx.stroke(); shine(ctx, x - R * 0.35, y - R * 0.35, R * 0.22, R * 0.14, -0.6, 0.9); ctx.restore();
    }
  }
  function weeds(ctx, t, seed) {
    const r = H.rng(seed);
    for (let i = 0; i < 6; i++) {
      const x = [60, 170, 900, 1010, 300, 780][i], h = r.range(220, 380), col = i % 2 ? [C.mint, C.mintS] : [C.mintS, C.mintD];
      const pts = []; for (let j = 0; j <= 10; j++) { const u = j / 10; pts.push([x + Math.sin(t * 1.6 + u * 3 + i) * 26 * u, HH + 20 - u * h]); }
      tube(ctx, pts, 34, col[0], col[1], true);
    }
    ctx.fillStyle = '#ffe8c4'; ctx.fill(ellP(540, HH + 40, 760, 120)); ol(ctx, ellP(540, HH + 40, 760, 120), 5);
  }
  const OCEAN = { base: '#dff1ff', dot: '#c8e6fb', acc: '#fff3b0', kind: 'dots' };
  const HEAD_Y = 400; // headline baseline (safe below the top 150 px)
  const head = (ctx, t, t0, str, size = 112, o = {}, t1 = null, y = HEAD_Y) => ptext(ctx, t, t0, 540, y, str, size, o, t1);
  const num = { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 };

  // ======================================== SCENES ========================================
  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });

  // 1 HOOK: the stomach inside grows, 100x
  scene(0, null, OCEAN, 3, (ctx, t) => {
    bubbles(ctx, t, 11, 12);
    twinkles(ctx, W, HH, t, 21, 12, (x, y) => y > 600 && y < 1500);
    const g0 = T(0, 'stretch'), g1 = T(0, 'bigger') + 0.5, gu = H.ease.inOut(prog(t, g0, g1));
    const shock = t >= g0 && t < T(1, 'never');
    puffer(ctx, 540, 1060, 1.25, { t, xray: H.ease.out(prog(t, 0.15, 0.6)), stom: 0.08 + 0.92 * gu, puff: 0.32 * gu, spines: 0, eyes: shock ? 'shock' : t > T(1, 'guess') ? 'normal' : 'normal', look: [0.2, -0.5], mouth: shock ? 'O' : 'lips', lift: bob(t, 0, 10), sq: squash(t, g1, 0.12) });
    // label + arrow to the stomach
    if (t >= T(0, 'stomach')) { ptag(ctx, t, T(0, 'stomach'), 260, 1540, 'stomach', C.pink, 52); dotted(ctx, bez([300, 1490], [320, 1400], [420, 1330], [470, 1270]), H.ease.out(prog(t, T(0, 'stomach'), T(0, 'stomach') + 0.35)), C.pinkD, 7, 24); }
    // counter 1x -> 100x
    if (t >= g0 - 0.05) {
      const v = Math.max(1, Math.round(100 * Math.pow(prog(t, g0, T(0, '100')), 1.6)));
      const hit = t >= T(0, '100'), p = hit ? pop(t, T(0, '100'), 1.6) : pop(t, g0 - 0.05);
      ctx.save(); ctx.translate(540, 470); ctx.scale(p.sx, p.sy); kText(ctx, v + '×', 0, 0, hit ? 250 : 200, hit ? { fill: C.pinkD, line: C.white, outer: C.plum, ow: 0.07, lw: 0.13 } : num); ctx.restore();
      if (hit) { impactLines(ctx, 540, 390, 200, t, T(0, '100'), 14, C.pinkD); ptext(ctx, t, T(0, 'bigger'), 540, 610, 'bigger!', 80, { fill: C.white, line: C.skyD }); }
    }
    if (t >= T(1, 'never')) sweat(ctx, 800, 820, pop(t, T(1, 'never')).s * 1.6, 0.3);
    for (const [tt, x, y, sz] of [[T(1, 'guess'), 860, 760, 150], [T(1, 'why'), 960, 650, 100]]) { const p = pop(t, tt, 1.4); if (p.s <= 0) continue; ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + x)); ctx.scale(p.sx, p.sy); kText(ctx, '?', 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore(); }
    head(ctx, t, T(1, 'why'), 'WHY?', 130, { fill: C.white, line: C.skyD, outer: C.plum, ow: 0.08, lw: 0.2 }, null, 1590);
  });

  // 2 DANGER -> GULP -> PUMP (one continuous shot; the camera pushes in for the pump)
  scene(2, 'star', OCEAN, 5, (ctx, t) => {
    bubbles(ctx, t, 31, 12);
    weeds(ctx, t, 4);
    const z0 = PS(5) - 0.55, zu = H.ease.inOut(prog(t, z0, z0 + 0.55)), Z = H.lerp(1, 1.5, zu);
    const PX = 340, PY = 1040;
    ctx.save(); ctx.translate(PX + (540 - PX) * zu, PY + (1080 - PY) * zu); ctx.scale(Z, Z); ctx.translate(-PX, -PY);
    // the hungry fish swims in
    const h0 = T(2, 'hungry') - 0.1, hu = H.ease.out(prog(t, h0, h0 + 0.7));
    if (t >= h0) {
      const chomp = t > h0 + 0.7 && t < T(4, 'gulps') ? Math.max(0, Math.sin((t - h0) * 7)) : 0;
      hunter(ctx, H.lerp(1500, 820, hu), 760 + bob(t, 1, 12), 0.85, { t, open: chomp * 0.8, eyes: 'normal' });
    }
    // water drops streaming into the open mouth
    const mOpen = T(3, 'mouth'), gulp = T(4, 'gulps');
    if (t >= gulp) for (let i = 0; i < 12; i++) { const u = ((t - gulp) * 1.6 + i / 12) % 1; if (t - gulp < i / 12 / 1.6) continue; const sx = 720 + (i % 3) * 60, sy = 960 + (i % 4) * 50 - 80; if (t > PS(5) + 2.2) break; drop(ctx, H.lerp(sx, PX + 200, H.ease.in(u)), H.lerp(sy, PY + 20, H.ease.in(u)), (1 - u * 0.6) * 0.9, C.sky, C.skyS, 3.5); }
    const gulps = [T(5, 'gulp'), PH[5].words[2][1] - 0.08, T(6, 'pumps'), T(6, 'water'), T(6, 'stomach') - 0.3];
    let lastG = -9; gulps.forEach((g) => { if (t >= g) lastG = g; });
    const fill = H.clamp(gulps.filter((g) => t >= g + 0.3).length / gulps.length);
    const scared = t >= T(2, 'close') && t < mOpen;
    puffer(ctx, PX, PY, 1.0, { t, xray: H.ease.out(prog(t, z0, z0 + 0.5)), stom: 0.1 + 0.55 * fill, puff: 0.18 * fill, spines: 0, eyes: scared ? 'shock' : t >= mOpen ? (t - lastG < 0.25 ? 'squeeze' : 'normal') : 'normal', look: [0.7, -0.2], mouth: t >= mOpen ? 'O' : 'lips', sq: t - lastG < 0.4 ? squash(t, lastG, 0.12) : [1, 1], lift: bob(t, 0, 8) });
    // each gulp: a drop rides the gullet down into the stomach
    gulps.forEach((g) => { const u = prog(t, g, g + 0.45); if (u <= 0 || u >= 1) return; const pts = [[PX + 165, PY + 20], [PX + 90, PY + 16], [PX + 10, PY + 25]]; const [dx, dy] = along(pts, plen(pts) * u); drop(ctx, dx, dy, 0.75, C.skyD, C.skyS, 3.5); });
    ctx.restore();
    // screen-space labels
    ptag(ctx, t, T(2, 'hungry'), 760, 560, 'hungry fish', C.lav, 50, z0);
    if (t >= T(2, 'close') && t < mOpen + 0.2) { const pe = pop(t, T(2, 'close'), 1.5); ctx.save(); ctx.translate(200, 820); ctx.rotate(-0.15 + 0.06 * Math.sin(t * 20)); ctx.scale(pe.sx, pe.sy); kText(ctx, '!?', 0, 0, 120, { fill: C.red, line: C.white, outer: C.plum, lw: 0.2 }); ctx.restore(); }
    head(ctx, t, T(3, 'mouth'), 'open wide!', 100, { fill: C.white, line: C.pinkD }, T(4, 'gulps') - 0.1);
    head(ctx, t, T(4, 'gulps'), 'GULP!', 140, { fill: C.sky, line: C.skyD, outer: C.plum, ow: 0.08, lw: 0.2 }, z0 - 0.1);
    ptag(ctx, t, T(4, 'seawater'), 540, 1560, 'seawater', C.sky, 54, z0);
    if (t >= T(4, 'fast')) kana(ctx, 'ごくごく', 820, 600, 72, 0.15, pop(t, T(4, 'fast')).s * popOut(t, z0), C.sky);
    if (t >= z0 + 0.4) { const n = gulps.filter((g) => t >= g).length; if (n > 0) { const p = pop(t, lastG, 1.6); ctx.save(); ctx.translate(540, HEAD_Y); ctx.scale(p.sx * 0.15 + 0.85, p.sy * 0.15 + 0.85); kText(ctx, 'gulp ×' + n, 0, 0, 120, num); ctx.restore(); } }
    ptag(ctx, t, T(6, 'stomach'), 540, 1600, 'into the stomach', C.pink, 52);
  }, 340, 1000);

  // 3 THE ACCORDION STOMACH
  scene(7, 'heart', TH.lav, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 12, (x, y) => y > 500 && y < 1500 && Math.abs(x - 540) < 420);
    const k0 = T(8, 'unfolds'), k = H.ease.inOut(prog(t, k0, T(8, 'stretching') + 0.7));
    const wob = t < k0 && t > T(7, 'folded') ? 1 + 0.05 * Math.sin((t - T(7, 'folded')) * 10) : 1;
    ctx.save(); ctx.translate(540, 1040); ctx.scale(1 / wob, wob); ctx.translate(-540, -1040);
    const ps = pop(t, PS(7) - 0.2);
    sac(ctx, 540, 1040, k, t, Math.max(0.01, ps.s) * 1.0);
    ctx.restore();
    // pleat arrows while folded, outward arrows while stretching
    if (t >= T(7, 'folded') && t < k0 + 0.1) { ptag(ctx, t, T(7, 'folded'), 200, 1600, 'folded', C.butter, 56, k0); }
    head(ctx, t, T(7, 'accordion'), 'accordion!', 116, { fill: C.white, line: C.lavD, outer: C.plum, ow: 0.08, lw: 0.2 }, k0 - 0.05);
    if (t >= k0) {
      for (const sd of [-1, 1]) dotted(ctx, [[540 + sd * 170, 1040], [540 + sd * 470, 1040]], H.ease.out(prog(t, k0, k0 + 0.5)) * (1 - prog(t, T(8, 'stretching') + 0.5, T(8, 'stretching') + 0.8)), C.lavD, 8, 28, 1.4);
      const v = Math.max(1, Math.round(100 * Math.pow(k, 1.4))), done = k >= 0.999;
      const p = done ? pop(t, T(8, 'stretching') + 0.7, 1.5) : pop(t, k0);
      ctx.save(); ctx.translate(540, HEAD_Y + 20); ctx.scale(p.sx, p.sy); kText(ctx, v + '×', 0, 0, 220, done ? { fill: C.pinkD, line: C.white, outer: C.plum, ow: 0.07, lw: 0.13 } : num); ctx.restore();
      if (done) impactLines(ctx, 540, HEAD_Y - 60, 220, t, T(8, 'stretching') + 0.7, 14, C.pinkD);
      ptag(ctx, t, T(8, 'stretching'), 540, 1610, 'stretch!', C.pink, 56);
      if (t >= T(8, 'stretching')) kana(ctx, 'ぷくー', 880, 700, 64, 0.16, pop(t, T(8, 'stretching')).s, C.pink);
    }
  });

  // 4 NO RIBS -> BALLOON -> TIGHT SKIN -> SPINES (one shot, slow push-in)
  scene(9, 'star', TH.butter, 9, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 12, (x, y) => y > 560 && y < 1560);
    const s0 = PS(9) - 0.5, Z = 1 + 0.07 * H.ease.inOut(prog(t, s0, PE(12)));
    ctx.save(); ctx.translate(540, 1060); ctx.scale(Z, Z); ctx.translate(-540, -1060);
    const b0 = T(10, 'whole'), b1 = T(10, 'out') + 0.2, bu = H.ease.out(prog(t, b0, b1));
    const sk0 = PS(11) - 0.1, su = H.ease.inOut(prog(t, sk0, T(11, 'tight')));
    const puff = 0.15 + 0.6 * bu + 0.25 * su, xr = 1 - prog(t, sk0, sk0 + 0.4);
    const spT = T(12, 'spines') - 0.1, spines = prog(t, spT, T(12, 'over') + 0.2);
    puffer(ctx, 540, 1060, 1.2, { t, puff, xray: xr, stom: 0.6 + 0.4 * bu, spines, tight: t >= T(11, 'tight') ? 1 - prog(t, T(11, 'tight') + 0.5, T(11, 'tight') + 0.9) : 0, eyes: t >= spT ? 'happy' : t >= T(9, 'no') && t < b0 ? 'normal' : 'normal', look: [0, -0.4], mouth: t > b0 && t < b1 ? 'O' : 'lips', sq: squash(t, b1, 0.14), lift: bob(t, 0, 8) });
    // ghost rib cage, then crossed out
    const r0 = T(9, 'there') + 0.15, rf = 1 - prog(t, T(9, 'ribs') + 0.5, T(9, 'ribs') + 0.9);
    if (t >= r0 && rf > 0) {
      ctx.save(); ctx.globalAlpha = rf * pop(t, r0).s; ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 12; ctx.setLineDash([22, 18]);
      for (let i = 0; i < 5; i++) { const x = 400 + i * 52; ctx.beginPath(); ctx.moveTo(x, 900); ctx.quadraticCurveTo(x - 60, 1050, x + 10, 1190); ctx.stroke(); }
      ctx.restore();
    }
    ctx.restore();
    if (t >= T(9, 'no') && t < T(10, 'whole') - 0.1) cross(ctx, 540, 640, 2.2, t, T(9, 'no'));
    head(ctx, t, T(9, 'ribs'), 'no ribs!', 116, { fill: C.white, line: C.red, outer: C.plum, ow: 0.08, lw: 0.2 }, b0 - 0.1);
    head(ctx, t, T(10, 'balloons'), 'balloons out!', 104, { fill: C.white, line: C.butterS, outer: C.plum, ow: 0.08, lw: 0.2 }, PS(11) - 0.1);
    if (t >= T(10, 'balloons')) kana(ctx, 'ぷくー', 860, 640, 64, 0.16, pop(t, T(10, 'balloons')).s * popOut(t, PS(11)), C.pink);
    ptag(ctx, t, T(11, 'skin'), 540, 1620, 'stretchy skin', C.peach, 54, spT - 0.1);
    head(ctx, t, T(12, 'spines'), 'spines!', 130, { fill: C.cream, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2 });
    if (t >= T(12, 'pop')) for (let i = 0; i < 5; i++) sparkle(ctx, [190, 900, 230, 870, 540][i], [820, 860, 1330, 1300, 1500][i], (16 + 8 * Math.sin(t * 8 + i)) * pop(t, T(12, 'pop') + i * 0.08).s, i % 2 ? C.white : C.butter, 0, 3.5);
  });

  // 5 THREE TIMES ITS SIZE: too big to swallow
  scene(13, 'heart', OCEAN, 13, (ctx, t) => {
    bubbles(ctx, t, 41, 10);
    weeds(ctx, t, 8);
    // ghost of the normal-size fish
    ctx.save(); ctx.globalAlpha = 0.55; ctx.setLineDash([18, 14]); ctx.strokeStyle = C.plum; ctx.lineWidth = 7;
    ctx.beginPath(); ctx.ellipse(165, 1290, 175 * 0.6, 118 * 0.7, 0, 0, TAU); ctx.stroke(); ctx.restore();
    ptag(ctx, t, PS(13) - 0.2, 165, 1430, 'normal', C.white, 44);
    const hb = T(15, 'big'), hit = t >= hb;
    const hx = t < T(15, 'way') - 0.3 ? 1500 : hit ? H.lerp(880, 1500, H.ease.in(prog(t, hb + 0.6, hb + 1.3))) : H.lerp(1500, 880, H.ease.out(prog(t, T(15, 'way') - 0.3, hb)));
    const bonk = hit && t < hb + 0.35;
    puffer(ctx, 620, 1000, 1.0, { t, puff: 1, spines: 1, eyes: bonk ? 'squeeze' : 'normal', look: [0.6, 0], mouth: 'lips', sq: hit ? squash(t, hb, 0.18) : squash(t, PS(13) - 0.1, 0.18), lift: bob(t, 0, 8), tilt: bonk ? -0.06 : 0 });
    if (t >= T(15, 'way') - 0.3) hunter(ctx, hx, 960 + bob(t, 2, 10), 0.8, { t, open: hit ? 0 : H.clamp((t - (T(15, 'way') - 0.3)) * 2.5), eyes: hit ? 'swirl' : 'normal', tilt: bonk ? 0.12 : 0 });
    if (hit) impactLines(ctx, 830, 960, 80, t, hb, 12, C.red);
    dotted(ctx, bez([250, 1220], [290, 1150], [320, 1120], [350, 1100]), H.ease.out(prog(t, T(13, 'three'), T(13, 'three') + 0.3)), C.pinkD, 7, 22);
    // 3x
    const p3 = pop(t, T(13, 'three'), 1.6), o3 = popOut(t, T(15, 'way') - 0.2);
    if (p3.s > 0 && o3 > 0) { ctx.save(); ctx.translate(540, 470); ctx.scale(p3.sx * o3, p3.sy * o3); kText(ctx, '3×', 0, 0, 280, { fill: C.pinkD, line: C.white, outer: C.plum, ow: 0.07, lw: 0.13 }); ctx.restore(); impactLines(ctx, 540, 380, 180, t, T(13, 'three'), 14, C.pinkD); }
    ptext(ctx, t, T(13, 'size'), 540, 590, 'its size', 76, { fill: C.white, line: C.skyD }, T(15, 'way') - 0.2);
    ptag(ctx, t, T(14, 'spiky'), 560, 1600, 'spiky ball', C.butter, 56);
    head(ctx, t, hb, 'too big!', 140, { fill: C.white, line: C.red, outer: C.plum, ow: 0.08, lw: 0.2 });
    if (hit) { cross(ctx, 900, 640, 1.6, t, T(15, 'swallow')); kana(ctx, 'ガーン', 820, 1300, 64, -0.12, pop(t, hb + 0.1).s, C.lav); }
  });

  // 6 HARD WORK -> SPIT IT OUT
  scene(16, 'star', TH.pink, 15, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 10, (x, y) => y > 560 && y < 1560);
    bubbles(ctx, t, 51, 6);
    const sp0 = T(19, 'spits'), du = H.ease.inOut(prog(t, sp0, sp0 + 1.3));
    const tired = t >= T(16, 'hard') && t < sp0;
    puffer(ctx, H.lerp(540, 380, du), 1040, 1.1, { t, puff: 1 - du, spines: 1 - du * 1.2, eyes: t >= sp0 + 1.3 ? 'happy' : tired ? 'squeeze' : 'normal', mouth: t >= sp0 && t < sp0 + 1.3 ? 'spit' : tired ? 'pant' : 'lips', lift: bob(t, 0, tired ? 4 : 8), sq: t >= sp0 + 1.3 ? squash(t, sp0 + 1.3, 0.2) : [1 + 0.03 * Math.sin(t * 7), 1 - 0.03 * Math.sin(t * 7)] });
    if (tired) { const sd = prog(t, T(16, 'hard'), T(16, 'hard') + 0.6); sweat(ctx, 330, 760 + sd * 30, pop(t, T(16, 'hard')).s * 1.5, -0.3); sweat(ctx, 760, 740 + sd * 24, pop(t, T(16, 'hard') + 0.1).s * 1.2, 0.35); }
    head(ctx, t, T(16, 'hard'), 'hard work!', 116, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2 }, T(17, 'hours') - 0.1);
    // a clock spins through hours
    const c0 = T(17, 'hours');
    if (t >= c0 && t < sp0) { popIn(ctx, t, c0, 540, 470, () => clock(ctx, 0, 0, 120, (t - c0) * 9), 1.3, sp0 - 0.25); ptext(ctx, t, c0 + 0.05, 820, 520, 'hours', 84, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08 }, sp0 - 0.25); }
    ptag(ctx, t, T(18, 'only'), 540, 1620, 'only in danger', C.butter, 54, sp0 - 0.1);
    // the water jet
    if (t >= sp0 && t < sp0 + 1.8) for (let i = 0; i < 16; i++) { const u = ((t - sp0) * 1.8 + i / 16); if (u > 2.2 || t - sp0 < i / 16 / 1.8) continue; const uu = u % 1.0; const mx = H.lerp(540, 380, du) + H.lerp(255, 175, 1 - du) * 1.1; drop(ctx, mx + uu * 520, 1060 - Math.sin(uu * Math.PI) * 180 + uu * 120, 0.9 - uu * 0.4, C.sky, C.skyS, 3.5); }
    if (t >= sp0) { kana(ctx, 'ぷしゅー', 760, 700, 70, 0.14, pop(t, sp0).s, C.sky); head(ctx, t, T(19, 'water'), 'spit it out!', 104, { fill: C.white, line: C.skyD, outer: C.plum, ow: 0.08, lw: 0.2 }); }
  });

  // 7 THE QUESTION (loops back to the hook)
  scene(20, 'heart', TH.mint, 17, (ctx, t) => {
    bubbles(ctx, t, 61, 10);
    twinkles(ctx, W, HH, t, 71, 12, (x, y) => y > 600 && y < 1500);
    const pf = T(21, 'puff'), pu = H.ease.out(prog(t, pf, pf + 0.3));
    puffer(ctx, 540, 1080, 1.25, { t, puff: pu, spines: pu, eyes: t >= pf ? 'star' : 'normal', look: [0, 0], mouth: t >= pf ? 'lips' : 'lips', sq: t >= pf ? squash(t, pf + 0.3, 0.22) : [1, 1], lift: bob(t, 0, 10) });
    kWord(ctx, 'What makes', 540, 380, 104, t, T(21, 'what'), 0.03, { fill: C.white, line: C.mintD, track: 2 });
    kWord(ctx, 'YOU puff?', 540, 540, 140, t, T(21, 'you') - 0.05, 0.035, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2, track: 3 });
    if (t >= T(20, 'you')) { const p = pop(t, T(20, 'you'), 1.4); ctx.save(); ctx.translate(880, 760); ctx.rotate(0.14 * Math.sin(t * 9)); ctx.scale(p.sx, p.sy); kText(ctx, '?', 0, 0, 150, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore(); }
    if (t >= pf) { impactLines(ctx, 540, 1080, 360, t, pf + 0.1, 14, C.pinkD); confetti(ctx, t, pf + 0.1, 540, 900, 50, 9, 1.2); ptag(ctx, t, pf + 0.3, 540, 1620, 'comment below!', C.pink, 52); }
  });

  // ======================================== PLAYBACK ========================================
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
    const bloop = (t, f = 420, g = 1, o = {}) => { k.tone(t, { f: [[0, f * 0.7], [0.07, f * 1.35]], dur: 0.11, gain: 0.2 * g, pan: o.pan, minor: o.minor }); k.noise(t, { dur: 0.012, filter: 'bandpass', f: 1600, q: 1.2, gain: 0.05 * g, pan: o.pan, minor: o.minor }); };
    const boing = (t, g = 1, o = {}) => { k.tone(t, { f: [[0, 150], [0.05, 290], [0.12, 190], [0.2, 250], [0.3, 210], [0.4, 225]], type: 'triangle', dur: 0.45, gain: 0.22 * g, pan: o.pan, minor: o.minor }); k.tone(t, { f: [[0, 75], [0.06, 140], [0.3, 110]], dur: 0.3, gain: 0.2 * g, minor: o.minor }); };
    const pyon = (t, g = 1, o = {}) => { k.tone(t, { f: [[0, 330], [0.15, 860]], type: 'triangle', dur: 0.19, gain: 0.1 * g, a: 0.005, pan: o.pan, minor: o.minor }); k.tone(t, { f: [[0, 165], [0.15, 430]], dur: 0.19, gain: 0.12 * g, pan: o.pan, minor: o.minor }); };
    const bell = (t, f, g = 1, o = {}) => { const hz = k.hz(f); k.tone(t, { f: hz, dur: o.dur || 0.9, gain: 0.09 * g, a: 0.004, verb: 0.35, pan: o.pan, minor: o.minor }); k.tone(t, { f: hz * 2, dur: 0.3, gain: 0.025 * g, a: 0.003, verb: 0.3, pan: o.pan, minor: o.minor }); };
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i % 2 ? 0.35 : -0.35), minor }); };
    const nom = (t, g = 1, pan = 0.3) => { k.tone(t, { f: [[0, 280], [0.09, 170]], dur: 0.12, gain: 0.22 * g, pan, minor: true }); k.noise(t, { dur: 0.05, color: 'pink', filter: 'lowpass', f: 900, gain: 0.08 * g, pan, minor: true }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 300], [d, 1800]], q: 0.8, gain: 0.14, a: d * 0.7 }); twinkle(t + d * 0.75, 3, 0.8, false); };
    const aww = (t) => { k.tone(t, { f: [[0, 'E4'], [0.3, 'D#4']], type: 'triangle', dur: 0.32, gain: 0.07, a: 0.03, hold: 0.15 }); k.tone(t + 0.3, { f: [[0, 'C4'], [0.5, 'A3']], type: 'triangle', dur: 0.55, gain: 0.07, a: 0.03, hold: 0.2 }); };
    const fizz = (t, d = 0.8, g = 1) => { const r = H.rng(Math.floor(t * 100)); for (let x = 0; x < d; x += 0.03 + r() * 0.05) k.noise(t + x, { dur: 0.02, filter: 'highpass', f: 3000 + r() * 2000, gain: 0.06 * g * r(), minor: true, pan: r() * 1.2 - 0.6 }); };
    const squish = (t, g = 1) => { k.tone(t, { f: [[0, 220], [0.12, 120]], type: 'triangle', dur: 0.16, gain: 0.16 * g, minor: true }); k.noise(t, { dur: 0.12, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.12, 260]], q: 2, gain: 0.12 * g, minor: true }); };
    const slurp = (t, d = 0.4) => k.tone(t, { f: [[0, 300], [d, 700]], type: 'sine', dur: d, gain: 0.08, a: d * 0.4, minor: true });
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };

    const gulpS = (t, g = 1) => { k.tone(t, { f: [[0, 190], [0.14, 90]], type: 'sine', dur: 0.2, gain: 0.3 * g }); k.noise(t, { dur: 0.1, color: 'brown', filter: 'lowpass', f: 600, gain: 0.25 * g }); };
    // transitions
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6'][i % 7]); });
    // 1 hook
    bloop(vis(0.15), 420, 0.6, { minor: true });
    bloop(vis(T(0, 'stomach')), 520, 0.9);
    for (let i = 0; i < 10; i++) k.play('tock', T(0, 'stretch') + i * 0.065, { f: 900 + i * 60, gain: 0.3, minor: true });
    big(vis(T(0, '100'))); slurp(T(0, 'stretch'), 0.6);
    k.tone(vis(T(1, 'never')), { f: [[0, 520], [0.5, 260]], dur: 0.5, gain: 0.04, a: 0.05, minor: true });
    bloop(vis(T(1, 'guess')), 360, 1.1); bloop(vis(T(1, 'why')), 470, 0.9);
    // 2 danger, gulp, pump
    k.play('whoosh', T(2, 'hungry') - 0.1, { dur: 0.6, gain: 0.6 }); bloop(vis(T(2, 'hungry')), 300, 0.7, { minor: true });
    for (let i = 0; i < 4; i++) nom(T(2, 'hungry') + 0.8 + i * 0.9, 0.6, 0.5);
    k.play('thud', vis(T(2, 'close')), { f: 120, gain: 0.5 }); aww(vis(T(2, 'close')) + 0.05);
    bloop(vis(T(3, 'mouth')), 380, 1); slurp(T(3, 'wide'), 0.4);
    fizz(T(4, 'gulps'), 1.4, 1.2); bloop(vis(T(4, 'gulps')), 260, 1.2); bloop(vis(T(4, 'seawater')), 560, 0.7, { minor: true });
    k.play('swish', T(4, 'fast'), { gain: 0.6 });
    [T(5, 'gulp'), PH[5].words[2][1] - 0.08, T(6, 'pumps'), T(6, 'water'), T(6, 'stomach') - 0.3].forEach((g, i) => { gulpS(vis(g), 0.9 + i * 0.05); k.play('tock', vis(g), { f: 700 + i * 80, gain: 0.3, minor: true }); });
    k.noise(PS(5) - 0.55, { dur: 0.55, color: 'pink', filter: 'lowpass', f: [[0, 400], [0.55, 1200]], gain: 0.1, a: 0.3, minor: true }); // push-in
    bloop(vis(T(6, 'stomach')), 600, 0.8);
    // 3 accordion
    bloop(vis(PS(7) - 0.2), 400, 0.9);
    for (let i = 0; i < 6; i++) squish(T(7, 'folded') + i * 0.12, 0.7);
    bloop(vis(T(7, 'accordion')), 620, 1);
    { const a = T(8, 'unfolds'), b = T(8, 'stretching') + 0.7; k.tone(a, { f: [[0, 160], [b - a, 520]], type: 'triangle', dur: b - a, gain: 0.12, a: (b - a) * 0.8 }); for (let x = a; x < b; x += 0.1) k.play('tock', x, { f: 800 + (x - a) * 500, gain: 0.25, minor: true }); big(vis(b)); }
    // 4 ribs, balloon, skin, spines
    bloop(vis(T(9, 'there') + 0.15), 340, 0.6, { minor: true });
    { const t = vis(T(9, 'no')); k.play('thud', t, { f: 120, gain: 0.55 }); bloop(t, 300, 0.9); }
    { const a = T(10, 'whole'), b = T(10, 'out') + 0.2; k.tone(a, { f: [[0, 120], [b - a, 380]], type: 'triangle', dur: b - a + 0.1, gain: 0.16, a: (b - a) * 0.7 }); boing(vis(b), 1); }
    k.noise(PS(11), { dur: 0.6, filter: 'bandpass', f: [[0, 500], [0.6, 1500]], q: 3, gain: 0.08, a: 0.4, minor: true }); // skin stretching
    k.play('ding', vis(T(11, 'tight')), { f: 'E6', gain: 0.3 });
    for (let i = 0; i < 9; i++) k.play('pop', T(12, 'spines') - 0.1 + i * 0.13, { f: 620 + i * 40, gain: 0.45, minor: true });
    bloop(vis(T(12, 'spines')), 700, 1); twinkle(vis(T(12, 'pop')), 5, 0.9);
    // 5 three times
    boing(vis(PS(13) - 0.1), 0.8);
    big(vis(T(13, 'three'))); bloop(vis(T(13, 'size')), 520, 0.7, { minor: true });
    bloop(vis(T(14, 'spiky')), 640, 0.8);
    k.play('whoosh', T(15, 'way') - 0.3, { dur: 0.5, gain: 0.6 });
    { const t = vis(T(15, 'big')); k.play('impact', t, { gain: 0.6 }); boing(t + 0.05, 1.1); bloop(t, 300, 1); }
    aww(vis(T(15, 'swallow')));
    // 6 hard work, spit
    for (let x = T(16, 'hard'); x < T(19, 'spits'); x += 0.6) k.noise(x, { dur: 0.25, color: 'pink', filter: 'bandpass', f: 900, q: 1, gain: 0.07, a: 0.1, minor: true }); // panting
    bloop(vis(T(16, 'hard')), 330, 0.9);
    { const c0 = T(17, 'hours'); bloop(vis(c0), 500, 1); for (let i = 0; i < 16; i++) k.play('tick', c0 + i * 0.12, { gain: 0.5, minor: true }); k.play('bell', c0 + 1.9, { f: 'A6', gain: 0.25 }); }
    bloop(vis(T(18, 'only')), 600, 0.8);
    { const t = T(19, 'spits'); k.noise(t, { dur: 1.3, color: 'pink', filter: 'bandpass', f: [[0, 2600], [1.3, 500]], q: 0.9, gain: 0.25, a: 0.05 }); k.tone(t, { f: [[0, 520], [1.3, 140]], type: 'triangle', dur: 1.3, gain: 0.08, a: 0.05 }); fizz(t, 1.2, 1); bloop(vis(t + 1.3), 460, 0.9); }
    // 7 question
    bloop(vis(T(20, 'you')), 420, 1);
    bloop(vis(T(21, 'what')), 520, 0.8, { minor: true }); bloop(vis(T(21, 'you')), 620, 0.9, { minor: true });
    { const t = vis(T(21, 'puff')); boing(t, 1.3); k.play('impact', t, { gain: 0.5 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + 0.1 + i * 0.05, n, 1.4, { dur: 1.2 })); twinkle(t + 0.3, 5, 0.9, false); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
