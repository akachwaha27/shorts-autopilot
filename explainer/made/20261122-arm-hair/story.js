// ===== Pictogram Motion (Lemo-Opuscar style, re-laid out for 1080x1920): "Why does your arm hair stay short?" =====
// Grid pattern of discs + motifs in five tones of one hue with whole rows sliding, geometric round-capped pictograms,
// 900-weight grotesk titles sliding out of masks, mono HUD with a tick bar. Drawing code written for this film
// (technique learned from the Lemo-Opuscar pictogram-motion engine, MIT); story, palette, motifs and pictograms are ours.
(function () {
  const W = 1080, HH = 1920, CELL = 180, TAU = Math.PI * 2;
  const P_ = [{"s":0.25,"e":2.18,"text":"Why does your arm hair stop growing,","words":[["why",0.25],["does",0.45],["your",0.72],["arm",0.98],["hair",1.18],["stop",1.45],["growing",1.71]]},{"s":2.64,"e":4.91,"text":"but your head hair keeps going for years?","words":[["but",2.64],["your",2.85],["head",3.12],["hair",3.4],["keeps",3.67],["going",4.02],["for",4.36],["years",4.57]]},{"s":5.36,"e":8.23,"text":"Every hair grows from a tiny pocket in your skin","words":[["every",5.36],["hair",5.73],["grows",6.02],["from",6.39],["a",6.69],["tiny",6.76],["pocket",7.05],["in",7.5],["your",7.64],["skin",7.94]]},{"s":8.44,"e":9.46,"text":"called a follicle.","words":[["called",8.44],["a",8.85],["follicle",8.92]]},{"s":9.83,"e":11.97,"text":"And every follicle runs on a loop.","words":[["and",9.83],["every",10.07],["follicle",10.47],["runs",11.1],["on",11.42],["a",11.58],["loop",11.65]]},{"s":12.45,"e":14.25,"text":"Grow. Stop. Rest. Fall out.","words":[["grow",12.45],["stop",12.83],["rest",13.21],["fall",13.58],["out",13.96]]},{"s":14.67,"e":16.92,"text":"Then a new hair starts in the same spot.","words":[["then",14.67],["a",14.96],["new",15.03],["hair",15.25],["starts",15.54],["in",15.97],["the",16.12],["same",16.34],["spot",16.63]]},{"s":17.36,"e":19.94,"text":"The trick is how long the growing part lasts.","words":[["the",17.36],["trick",17.58],["is",17.93],["how",18.08],["long",18.29],["the",18.58],["growing",18.79],["part",19.29],["lasts",19.58]]},{"s":20.3,"e":22.92,"text":"On your head, it can run two to seven years.","words":[["on",20.3],["your",20.46],["head",20.78],["it",21.1],["can",21.25],["run",21.49],["two",21.73],["to",21.97],["seven",22.13],["years",22.52]]},{"s":23.32,"e":24.9,"text":"At about a centimeter a month,","words":[["at",23.32],["about",23.45],["a",23.78],["centimeter",23.84],["a",24.5],["month",24.57]]},{"s":25.3,"e":27.23,"text":"that's long enough to reach your waist.","words":[["thats",25.3],["long",25.61],["enough",25.86],["to",26.23],["reach",26.36],["your",26.67],["waist",26.92]]},{"s":27.59,"e":30.06,"text":"On your arms, it lasts just a few months.","words":[["on",27.59],["your",27.75],["arms",28.06],["it",28.38],["lasts",28.54],["just",28.94],["a",29.26],["few",29.34],["months",29.58]]},{"s":30.41,"e":31.86,"text":"So the hair hits its limit,","words":[["so",30.41],["the",30.55],["hair",30.76],["hits",31.03],["its",31.31],["limit",31.51]]},{"s":32.3,"e":34.56,"text":"and falls out before it ever gets long.","words":[["and",32.3],["falls",32.52],["out",32.88],["before",33.1],["it",33.54],["ever",33.68],["gets",33.98],["long",34.27]]},{"s":34.96,"e":36.58,"text":"Arm hair doesn't grow slower.","words":[["arm",34.96],["hair",35.17],["doesnt",35.45],["grow",35.87],["slower",36.15]]},{"s":36.96,"e":38.46,"text":"It just quits way sooner.","words":[["it",36.96],["just",37.11],["quits",37.41],["way",37.79],["sooner",38.01]]},{"s":38.83,"e":40.98,"text":"Your eyebrows have a short timer too.","words":[["your",38.83],["eyebrows",39.12],["have",39.69],["a",39.98],["short",40.05],["timer",40.41],["too",40.77]]},{"s":41.45,"e":43.87,"text":"So if your arm hair had a seven year timer,","words":[["so",41.45],["if",41.6],["your",41.75],["arm",42.04],["hair",42.26],["had",42.55],["a",42.77],["seven",42.85],["year",43.21],["timer",43.51]]},{"s":44.33,"e":45.86,"text":"how long would you let it grow?","words":[["how",44.33],["long",44.52],["would",44.78],["you",45.09],["let",45.28],["it",45.47],["grow",45.6]]}];
  const BEATS = [
    { id: 'hook-arm', s: P_[0].s, e: P_[0].e, on: 'arm pictogram, short hairs; ARM HAIR / STOPS' },
    { id: 'hook-head', s: P_[1].s, e: P_[1].e, on: 'head with hair growing long; HEAD HAIR / KEEPS GOING' },
    { id: 'follicle', s: P_[2].s, e: P_[3].e, on: 'skin cross-section in the stage disc, pocket, bulb; FOLLICLE' },
    { id: 'loop', s: P_[4].s, e: P_[6].e, on: 'loop ring of 4 stations GROW STOP REST FALL, new hair sprouts' },
    { id: 'timer', s: P_[7].s, e: P_[7].e, on: 'stopwatch; HOW LONG? / ANAGEN' },
    { id: 'head-years', s: P_[8].s, e: P_[10].e, on: 'figure, hair grows to waist; 2-7 YEARS, 1 CM / MONTH, WAIST' },
    { id: 'arm-months', s: P_[11].s, e: P_[13].e, on: 'arm hairs grow to LIMIT line then fall; FEW MONTHS' },
    { id: 'split', s: P_[14].s, e: P_[15].e, on: 'split screen ARM vs HEAD bars at same speed; arm quits; SAME SPEED / QUITS SOONER' },
    { id: 'brows', s: P_[16].s, e: P_[16].e, on: 'face with eyebrows + timer; EYEBROWS / SHORT TIMER TOO' },
    { id: 'end', s: P_[17].s, e: P_[18].e, on: 'arm with very long hairs; 7-YEAR TIMER? HOW LONG WOULD YOU GROW IT' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + '0123456789–≈·/?';

  // ---------- maths ----------
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const E = {
    o3: (t) => 1 - Math.pow(1 - clamp(t), 3),
    io3: (t) => (t = clamp(t), t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    oExp: (t) => (t = clamp(t), t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    iExp: (t) => (t = clamp(t), t <= 0 ? 0 : Math.pow(2, 10 * t - 10)),
    ioExp: (t) => (t = clamp(t), t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2),
    oBack: (t, s = 1.7) => (t = clamp(t) - 1, t * t * ((s + 1) * t + s) + 1),
  };
  const ap = (t, t0, d = 0.35) => clamp((t - t0) / d);
  const rng = (seed) => { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };

  // ---------- colour: five hues + a dark neutral, five tones each (t0 darkest -> t4 lightest). Names are ours. ----------
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const toHex = (c) => '#' + c.map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hex(a), B = hex(b); return toHex(A.map((v, i) => lerp(v, B[i], t))); };
  const rgba = (h, a) => { const c = hex(h); return `rgba(${c[0]},${c[1]},${c[2]},${a})`; };
  const CREAM = '#fbf6ec', INK = '#1a1220';
  const PAL = {
    cobalt: { t: ['#16275e', '#1e3478', '#2b4597', '#4a63ad', '#7088c6'], fg: CREAM, hair: '#f3b42a', light: false },
    plum: { t: ['#3e1840', '#552256', '#6e2f6e', '#8c4b8b', '#ab70a9'], fg: CREAM, hair: '#f3b42a', light: false },
    peach: { t: ['#d9785a', '#e58c6c', '#f0a283', '#f5b99f', '#f9d0bd'], fg: '#2a1410', hair: '#552256', light: true },
    teal: { t: ['#005a57', '#00706b', '#0a8a82', '#33a299', '#66bab2'], fg: CREAM, hair: '#f3b42a', light: false },
    saffron: { t: ['#d68a00', '#e69e0c', '#f3b42a', '#f7c658', '#fad78a'], fg: '#261800', hair: '#552256', light: true },
    ink: { t: ['#0d0f17', '#151824', '#1e2232', '#2a2f44', '#3b4159'], fg: CREAM, hair: '#f3b42a', light: false },
  };
  for (const k in PAL) { const P = PAL[k]; P.key = k; P.base = P.t[2]; P.far = mix(P.fg, P.t[2], 0.42); P.disc = P.light ? P.t[4] : P.t[3]; }
  PAL.ink.disc = PAL.ink.t[4];

  // ---------- canvas helpers ----------
  const canvas = (w_, h_) => { const c = document.createElement('canvas'); c.width = w_; c.height = h_; return c; };
  const disc = (ctx, x, y, r, col) => { if (r <= 0) return; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); };
  const seg = (ctx, a, b, lw, col) => { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); };
  const ring = (ctx, x, y, r, lw, col, a0 = 0, a1 = TAU) => { if (r <= 0) return; ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, r, a0, a1); ctx.stroke(); };
  const rrect = (ctx, x, y, w_, h_, r, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(x, y, w_, h_, Math.min(r, Math.abs(w_) / 2, Math.abs(h_) / 2)); ctx.fill(); };

  // ---------- grid pattern (our motif library: geometry + hair strands, timers, waves) ----------
  function motif(ctx, kind, x, y, s, c, r) {
    const [a, b, cc] = c;
    ctx.save(); ctx.beginPath(); ctx.rect(x, y, s, s); ctx.clip();
    ctx.fillStyle = a; ctx.fillRect(x, y, s, s);
    const upright = kind >= 6;
    ctx.translate(x + s / 2, y + s / 2); if (!upright) ctx.rotate(Math.floor(r() * 4) * Math.PI / 2); ctx.translate(-s / 2, -s / 2);
    switch (kind) {
      case 0: disc(ctx, 0, 0, s, b); break;
      case 1: disc(ctx, s / 2, s, s / 2, b); break;
      case 2: disc(ctx, s / 2, s / 2, s / 2, b); disc(ctx, s * 0.62, s * 0.4, s * 0.13, cc); break;
      case 3: for (let i = 5; i >= 1; i--) disc(ctx, 0, s, (s * i) / 5, i % 2 ? b : a); break;
      case 4: disc(ctx, 0, s / 2, s / 2, b); disc(ctx, s, s / 2, s / 2, cc); break;
      case 5: { const k = s / 6; for (let j = 0; j < 6; j++) for (let i = 0; i < 6; i++) if ((i + j) % 2 === 0) { ctx.fillStyle = b; ctx.fillRect(i * k + k * 0.18, j * k + k * 0.18, k * 0.64, k * 0.64); } break; }
      case 6: for (let i = 0; i < 3; i++) { const xx = s * (0.28 + i * 0.22); seg(ctx, [xx, s * 0.18], [xx, s * 0.68], s * 0.07, i % 2 ? cc : b); disc(ctx, xx, s * 0.74, s * 0.08, i % 2 ? cc : b); } break; // hair strands
      case 7: ring(ctx, s / 2, s * 0.54, s * 0.3, s * 0.07, b); seg(ctx, [s / 2, s * 0.54], [s / 2, s * 0.34], s * 0.06, cc); seg(ctx, [s * 0.44, s * 0.13], [s * 0.56, s * 0.13], s * 0.07, b); break; // timer
      case 8: for (let i = 0; i < 3; i++) { ctx.strokeStyle = i % 2 ? cc : b; ctx.lineWidth = s * 0.07; ctx.lineCap = 'round'; ctx.beginPath(); for (let k = 0; k <= 20; k++) { const xx = s * (0.12 + k * 0.038), yy = s * (0.3 + i * 0.2) + Math.sin(k * 0.6) * s * 0.06; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); } break; // waves
      case 9: { const k = s / 5; for (let j = 0; j < 5; j++) for (let i = 0; i < 5; i++) disc(ctx, k * (i + 0.5), k * (j + 0.5), k * 0.2, (i + j) % 2 ? b : cc); break; }
    }
    ctx.restore();
  }
  const LIB = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 1, 2];
  const patCache = new Map();
  function pattern(pk, seed, spread = 1, density = 0.5) {
    const key = pk + '|' + seed + '|' + spread + '|' + density;
    if (patCache.has(key)) { const v = patCache.get(key); patCache.delete(key); patCache.set(key, v); return v; }
    if (patCache.size > 12) patCache.delete(patCache.keys().next().value);
    const S = CELL, P = PAL[pk], T = P.t.map((c) => mix(P.base, c, spread));
    const cols = Math.ceil(W / S) + 3, rows = Math.ceil(HH / S) + 1;
    const cv = canvas(cols * S, rows * S), ctx = cv.getContext('2d'), r = rng(seed * 7919 + 13);
    ctx.fillStyle = T[1]; ctx.fillRect(0, 0, cv.width, cv.height);
    for (let j = -1; j < rows; j++) for (let i = -1; i < cols; i++) {
      const k = r(), cx = i * S, cy = j * S;
      if (k < 0.34) disc(ctx, cx + S, cy + S, S, T[Math.floor(r() * 4)]);
      else if (k < 0.5) { disc(ctx, cx + S, cy + S, S, T[3]); disc(ctx, cx + S, cy + S, S * 0.5, T[0]); }
    }
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      if (r() > density) continue;
      const pick = () => T[Math.floor(r() * 5)];
      let a = pick(), b = pick(); while (b === a) b = pick();
      let cc = pick(); while (cc === b) cc = pick();
      motif(ctx, LIB[Math.floor(r() * LIB.length)], i * S, j * S, S, [a, b, cc], r);
    }
    patCache.set(key, cv); return cv;
  }
  function drawPattern(ctx, pat, offs, x0 = 0, x1 = W) {
    const S = CELL, rows = Math.ceil(HH / S);
    ctx.save(); ctx.beginPath(); ctx.rect(x0, 0, x1 - x0, HH); ctx.clip();
    for (let j = 0; j < rows; j++) {
      let dx = offs ? offs(j) : 0; dx = ((dx % S) + S) % S - S;
      ctx.drawImage(pat, 0, j * S, pat.width, S, dx + x0 - (x0 % S), j * S, pat.width, S + 0.5);
    }
    ctx.restore();
  }
  // background: low-contrast pattern rows drifting in alternating directions (+ optional quarter-cell beat jumps)
  function bg(ctx, P, t, s0, seed, o = {}) {
    const pat = pattern(P.key, seed, o.spread ?? 0.42, o.density ?? 0.5);
    const jumps = o.jumps || [];
    drawPattern(ctx, pat, (j) => {
      let d = (j % 2 ? 1 : -1) * (t - s0) * 16;
      jumps.forEach((tj, k) => { d += (j % 2 ? 1 : -1) * (CELL / 4) * E.oExp(ap(t, tj, 0.25)); });
      if (o.stopAt) d = (j % 2 ? 1 : -1) * (Math.min(t, o.stopAt(j)) - s0) * 16;
      return d;
    }, o.x0, o.x1);
  }
  // the stage: a big sun disc in a neighbouring tone, crossed by one faint light sweep
  function stage(ctx, P, t, cx = 540, cy = 860, r = 380, t0 = -9) {
    const k = E.oExp(ap(t, t0, 0.45)), rr = r * k;
    if (rr <= 1) return;
    // arrives as bands sliding into register from alternating sides
    const n = 6, bh = (2 * r) / n;
    for (let i = 0; i < n; i++) {
      const p = E.oExp(ap(t, t0 + i * 0.03, 0.4)), dx = (1 - p) * 700 * (i % 2 ? 1 : -1);
      ctx.save(); ctx.beginPath(); ctx.rect(0, cy - r + i * bh - 0.5, W, bh + 1); ctx.clip();
      disc(ctx, cx + dx, cy, r, P.disc); ctx.restore();
    }
    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.clip();
    const sx = cx - r + ((t * 0.18) % 1) * r * 3 - r * 0.5;
    const g = ctx.createLinearGradient(sx - 160, 0, sx + 160, 0);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,0.10)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(cx - r, cy - r, 2 * r, 2 * r); ctx.restore();
  }

  // ---------- type ----------
  const F = { en: (wt, px) => `${wt} ${px}px "Inter Tight"`, mono: (px) => `500 ${px}px "DM Mono"` };
  function maskText(ctx, text, x, y, font, col, pin, pout = 0, align = 'center', ls = '0px') {
    if (pin <= 0 || pout >= 1) return 0;
    ctx.save(); ctx.font = font; ctx.letterSpacing = ls; ctx.textAlign = align; ctx.textBaseline = 'alphabetic';
    const m = ctx.measureText(text), asc = m.actualBoundingBoxAscent, desc = m.actualBoundingBoxDescent, h = asc + desc, wd = m.width + 40;
    const x0 = align === 'center' ? x - wd / 2 : align === 'right' ? x - wd : x - 20;
    ctx.beginPath(); ctx.rect(x0, y - asc - 8, wd, h + 16); ctx.clip();
    const dy = (1 - E.oExp(pin)) * (h + 20) - E.iExp(pout) * (h + 20);
    ctx.fillStyle = col; ctx.fillText(text, x, y + dy); ctx.restore(); return m.width;
  }
  function fitPx(ctx, text, wt, maxW, maxPx, ls = -0.02) {
    ctx.save(); ctx.font = F.en(wt, 100); ctx.letterSpacing = (ls * 100) + 'px'; const m = ctx.measureText(text).width; ctx.restore();
    return Math.min(maxPx, Math.floor((maxW / m) * 100));
  }
  // title column: big 900 title, heavy second line, mono tag chip. items = [{k:'big'|'sub'|'tag', s, t0, t1}]
  function titles(ctx, t, P, items, o = {}) {
    const yb = o.y ?? 1420, col = o.col || P.fg;
    for (const it of items) {
      const pin = ap(t, it.t0, 0.4), pout = it.t1 != null ? ap(t, it.t1, 0.22) : 0;
      if (pin <= 0 || pout >= 1) continue;
      if (it.k === 'big') {
        const px = fitPx(ctx, it.s, 900, o.maxW || 980, it.px || 200);
        maskText(ctx, it.s, o.x ?? 540, it.y ?? yb, F.en(900, px), it.col || col, pin, pout, o.align || 'center', (-0.02 * px) + 'px');
      } else if (it.k === 'sub') {
        const px = fitPx(ctx, it.s, 800, o.maxW || 980, it.px || 72);
        maskText(ctx, it.s, o.x ?? 540, it.y ?? yb + 96, F.en(800, px), it.col || col, pin, pout, o.align || 'center', '0px');
      } else if (it.k === 'tag') {
        ctx.save(); ctx.font = F.mono(44); ctx.letterSpacing = '4px';
        const tw = ctx.measureText(it.s).width + 56, y = it.y ?? yb + 170, x = (o.x ?? 540) - (o.align === 'left' ? 0 : tw / 2);
        const p = E.oExp(pin), q = 1 - E.iExp(pout);
        ctx.beginPath(); ctx.rect(x - 4, y - 40, tw + 8, 80); ctx.clip();
        ctx.translate(0, (1 - p * q) * 80);
        rrect(ctx, x, y - 34, tw, 68, 34, it.bg || (P.light ? INK : P.t[0]));
        ctx.fillStyle = it.fg || (P.light ? CREAM : P.fg); ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(it.s, x + 28, y + 2);
        ctx.restore();
      }
    }
  }
  // HUD: mono corner text + a progress bar of N ticks
  const NT = 10;
  function hud(ctx, P, idx, t, s0, right) {
    const col = P.fg, p = ap(t, s0, 0.5);
    ctx.save(); ctx.font = F.mono(44); ctx.letterSpacing = '6px'; ctx.fillStyle = col; ctx.textBaseline = 'alphabetic';
    const L = 'HAIR LAB'; ctx.textAlign = 'left'; ctx.fillText(L.slice(0, Math.ceil(L.length * p)), 60, 214);
    const R = right || (String(idx).padStart(2, '0') + ' / ' + NT); ctx.textAlign = 'right'; ctx.fillText(R.slice(0, Math.ceil(R.length * p)), 1020, 214);
    const x0 = 60, x1 = 1020, gap = 10, tw = (x1 - x0 - gap * (NT - 1)) / NT;
    for (let i = 0; i < NT; i++) {
      const cur = i === idx - 1, done = i < idx - 1;
      ctx.fillStyle = rgba(col, cur ? 1 : done ? 0.55 : 0.2);
      const h = cur ? 14 : 6; ctx.fillRect(x0 + i * (tw + gap), 248 - h / 2, tw, h);
    }
    ctx.restore();
  }

  // ---------- pictograms (round-capped bars, discs, capsules; at most two tones) ----------
  // forearm + fist, hairs on the top edge. hairLen(i, x) -> px; fall(i) -> 0..1
  function arm(ctx, cx, cy, L, col, far, hairCol, n, hairLen, fall, o = {}) {
    const th = o.th || 120, x0 = cx - L / 2, x1 = cx + L / 2 - 90;
    seg(ctx, [x0, cy], [x1, cy], th, col);                          // forearm capsule
    disc(ctx, x1 + 40, cy + 6, 78, col);                            // fist
    seg(ctx, [x1 + 20, cy - 58], [x1 + 70, cy - 70], 34, far);      // thumb, far tone
    rrect(ctx, x0 - 70, cy - th / 2 - 8, 90, th + 16, 26, far);     // sleeve cuff
    for (let i = 0; i < n; i++) {
      const hx = x0 + 70 + (i + 0.5) * ((x1 - x0 - 80) / n), base = cy - th / 2 + 6;
      const len = hairLen(i, hx); if (len <= 2) continue;
      const lean = 0.42 + (o.wave ? 0 : 0), f = fall ? fall(i) : 0;
      ctx.save(); ctx.globalAlpha = 1 - clamp((f - 0.6) / 0.4);
      ctx.translate(hx + f * 40, base + E.iExp(f) * 420 * (f > 0 ? 1 : 0)); ctx.rotate(f * 1.6);
      if (o.wave) {
        ctx.strokeStyle = hairCol; ctx.lineWidth = o.hw || 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0);
        const steps = 24; for (let k = 1; k <= steps; k++) { const u = k / steps, l = u * len; ctx.lineTo(Math.sin(lean) * l + Math.sin(u * 7 + i + o.wave) * 18 * u, -Math.cos(lean) * l); }
        ctx.stroke();
      } else seg(ctx, [0, 0], [Math.sin(lean) * len, -Math.cos(lean) * len], o.hw || 14, hairCol);
      ctx.restore();
    }
  }
  // standing figure, front view, faceless; hair behind the head grows to hairY
  function figure(ctx, cx, top, col, far, hairCol, hairY) {
    const hr = 78, hy = top + hr;
    if (hairY > hy - hr * 0.4) rrect(ctx, cx - hr * 1.12, hy - hr * 0.6, hr * 2.24, hairY - (hy - hr * 0.6), hr * 0.9, hairCol); // long hair
    seg(ctx, [cx - 60, hy + 150], [cx - 150, hy + 360], 40, far); seg(ctx, [cx + 60, hy + 150], [cx + 150, hy + 360], 40, far); // arms, far tone
    rrect(ctx, cx - 72, hy + 105, 144, 330, 60, col);              // torso
    seg(ctx, [cx - 40, hy + 420], [cx - 52, hy + 580], 46, col); seg(ctx, [cx + 40, hy + 420], [cx + 52, hy + 580], 46, col); // legs
    disc(ctx, cx, hy, hr, col);                                     // head
    ctx.save(); ctx.beginPath(); ctx.arc(cx, hy, hr + 12, Math.PI * 1.02, Math.PI * 1.98); ctx.closePath(); ctx.fillStyle = hairCol; ctx.fill(); ctx.restore(); // hair cap
  }
  function stopwatch(ctx, cx, cy, r, col, acc, a) {
    seg(ctx, [cx - r * 0.18, cy - r - r * 0.32], [cx + r * 0.18, cy - r - r * 0.32], r * 0.18, col);
    seg(ctx, [cx, cy - r - r * 0.3], [cx, cy - r], r * 0.12, col);
    seg(ctx, [cx + r * 0.72, cy - r * 0.86], [cx + r * 0.86, cy - r * 1.0], r * 0.12, col);
    ring(ctx, cx, cy, r, r * 0.16, col);
    if (a > 0) { ctx.fillStyle = acc; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r * 0.8, -Math.PI / 2, -Math.PI / 2 + a); ctx.closePath(); ctx.fill(); }
    seg(ctx, [cx, cy], [cx + Math.sin(a) * r * 0.74, cy - Math.cos(a) * r * 0.74], r * 0.1, col);
    disc(ctx, cx, cy, r * 0.11, col);
  }
  const moon = (ctx, x, y, r, col) => { ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.clip(); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.arc(x + r * 0.5, y - r * 0.3, r * 0.86, 0, TAU); ctx.fillStyle = col; ctx.fill('evenodd'); ctx.restore(); };
  function arrow(ctx, x, y, len, dir, lw, col) { // dir: -1 up, 1 down
    seg(ctx, [x, y - dir * len / 2], [x, y + dir * len / 2], lw, col);
    seg(ctx, [x, y + dir * len / 2], [x - len * 0.3, y + dir * len * 0.2], lw, col);
    seg(ctx, [x, y + dir * len / 2], [x + len * 0.3, y + dir * len * 0.2], lw, col);
  }
  function label(ctx, s, x, y, col, p = 1, px = 44, align = 'center') {
    if (p <= 0) return; ctx.save(); ctx.font = F.mono(px); ctx.letterSpacing = '5px'; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'alphabetic';
    ctx.fillText(s.slice(0, Math.ceil(s.length * clamp(p))), x, y); ctx.restore();
  }
  function dashed(ctx, x0, x1, y, col, p = 1, lw = 8) {
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.setLineDash([2, 26]); ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(lerp(x0, x1, clamp(p)), y); ctx.stroke(); ctx.restore();
  }

  // ---------- scenes ----------
  const S0 = (i) => P_[i].s;
  const scenes = [
    // 1 — hook, arm: short hairs, then they stop
    { s: 0, P: 'cobalt', draw(ctx, t) {
      const P = PAL.cobalt; bg(ctx, P, t, 0, 11); stage(ctx, P, t, 540, 860, 380, 0.05);
      const g = (i) => { const cap = 52 + (i % 3) * 8; return Math.min(cap, cap * E.o3(ap(t, 0.15 + i * 0.03, 1.3))); };
      arm(ctx, 540, 900, 820, P.fg, P.far, P.hair, 11, g, null);
      if (t > w(0, 'stop') - 0.1) { dashed(ctx, 200, 880, 760, P.hair, ap(t, w(0, 'stop') - 0.1, 0.3)); label(ctx, 'STOP', 540, 700, P.fg, ap(t, w(0, 'stop') - 0.1, 0.25), 52); }
      titles(ctx, t, P, [{ k: 'big', s: 'ARM HAIR', t0: w(0, 'arm') - 0.12 }, { k: 'sub', s: 'STOPS GROWING', t0: w(0, 'stop') - 0.12 }]);
      hud(ctx, P, 1, t, 0);
    } },
    // 2 — hook, head: hair keeps going
    { s: S0(1), P: 'plum', draw(ctx, t) {
      const P = PAL.plum, s0 = S0(1); bg(ctx, P, t, s0, 22); stage(ctx, P, t, 540, 860, 380, -9);
      const hy = lerp(560, 1150, E.o3(ap(t, w(1, 'keeps') - 0.1, 1.4)));
      figure(ctx, 540, 520, P.fg, P.far, P.hair, hy);
      titles(ctx, t, P, [{ k: 'big', s: 'HEAD HAIR', t0: w(1, 'head') - 0.12 }, { k: 'sub', s: 'KEEPS GOING FOR YEARS', t0: w(1, 'keeps') - 0.12 }]);
      hud(ctx, P, 2, t, s0);
    } },
    // 3 — the follicle: a skin cross-section inside the stage disc
    { s: S0(2), P: 'peach', draw(ctx, t) {
      const P = PAL.peach, s0 = S0(2); bg(ctx, P, t, s0, 33); stage(ctx, P, t, 540, 860, 380, -9);
      const cx = 540, cy = 860, r = 380, sy = 720;
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.clip();
      const bands = [[sy, P.t[3]], [sy + 120, P.t[2]], [sy + 300, P.t[1]]];
      bands.forEach(([y, c], i) => { const p = E.oExp(ap(t, s0 + 0.05 + i * 0.06, 0.4)); ctx.fillStyle = c; ctx.fillRect(cx - r + (1 - p) * 800 * (i % 2 ? 1 : -1), y, 2 * r, 800); });
      const pk = E.oExp(ap(t, w(2, 'pocket') - 0.15, 0.5)), depth = 380 * pk;
      if (pk > 0) { seg(ctx, [cx, sy - 4], [cx, sy + depth], 120, P.t[0]); disc(ctx, cx, sy + depth, 86 * pk, '#552256'); }
      const hl = 60 + 260 * E.o3(ap(t, w(2, 'grows') - 0.1, 2.2));
      seg(ctx, [cx, sy + depth - 10], [cx, sy - hl], 30, '#552256');
      ctx.restore();
      if (pk > 0.5) { seg(ctx, [cx + 120, sy + 320], [cx + 250, sy + 420], 8, P.fg); label(ctx, 'BULB', cx + 260, sy + 480, P.fg, ap(t, w(2, 'pocket') + 0.2, 0.3), 44, 'left'); }
      label(ctx, 'SKIN', 200, sy - 24, P.fg, ap(t, w(2, 'skin') - 0.1, 0.3), 44, 'left');
      titles(ctx, t, P, [{ k: 'big', s: 'TINY POCKET', t0: w(2, 'tiny') - 0.12, t1: w(3, 'called') - 0.15 }, { k: 'big', s: 'FOLLICLE', t0: w(3, 'follicle') - 0.12 },
        { k: 'sub', s: 'IN YOUR SKIN', t0: w(2, 'skin') - 0.12 }]);
      hud(ctx, P, 3, t, s0);
    } },
    // 4 — the loop: GROW, STOP, REST, FALL OUT, then a new hair
    { s: S0(4), P: 'teal', draw(ctx, t) {
      const P = PAL.teal, s0 = S0(4); bg(ctx, P, t, s0, 44, { jumps: [w(5, 'grow'), w(5, 'stop'), w(5, 'rest'), w(5, 'fall')] }); stage(ctx, P, t, 540, 860, 380, -9);
      const cx = 540, cy = 860, R = 300, keys = [w(5, 'grow'), w(5, 'stop'), w(5, 'rest'), w(5, 'fall'), w(6, 'new')];
      const ring_p = E.o3(ap(t, w(4, 'every') - 0.1, 1.4));
      ring(ctx, cx, cy, R, 16, rgba(P.fg, 0.35), -Math.PI / 2, -Math.PI / 2 + TAU * ring_p);
      let st = -1; keys.forEach((k, i) => { if (t >= k - 0.1) st = i; });
      const ang = (i) => -Math.PI / 2 + i * Math.PI / 2;
      if (st >= 0) { const prog = st >= 4 ? 4 : st + E.oExp(ap(t, keys[st] - 0.1, 0.25)) - 1 + 1; ring(ctx, cx, cy, R, 22, P.hair, -Math.PI / 2, -Math.PI / 2 + Math.min(prog, 4) * Math.PI / 2 * (st >= 4 ? 1 : 1) - (st >= 4 ? 0 : 0)); }
      const names = ['GROW', 'STOP', 'REST', 'FALL'];
      for (let i = 0; i < 4; i++) {
        const x = cx + Math.cos(ang(i)) * R, y = cy + Math.sin(ang(i)) * R, on = st === i, pa = E.oBack(ap(t, w(4, 'follicle') - 0.1 + i * 0.25, 0.4));
        if (pa <= 0) continue;
        ctx.save(); ctx.translate(x, y); ctx.scale(pa * (on ? 1.15 : 1), pa * (on ? 1.15 : 1));
        disc(ctx, 0, 0, 74, on ? P.hair : P.t[0]);
        const ic = on ? INK : P.fg;
        if (i === 0) arrow(ctx, 0, 0, 70, -1, 16, ic);
        if (i === 1) { ring(ctx, 0, 0, 34, 12, ic); seg(ctx, [-20, 0], [20, 0], 14, ic); }
        if (i === 2) moon(ctx, 0, 0, 36, ic);
        if (i === 3) arrow(ctx, 0, 0, 70, 1, 16, ic);
        ctx.restore();
      }
      // centre: one follicle showing the state
      const by = cy + 120; seg(ctx, [cx, by - 40], [cx, by + 40], 56, P.t[0]); disc(ctx, cx, by + 40, 40, '#552256');
      let hl = 0, drop = 0, alpha = 1;
      const g0 = w(5, 'grow') - 0.1;
      if (t >= g0 && t < keys[3] - 0.1) hl = 190 * E.o3(ap(t, g0, 0.5));
      if (t >= keys[2] - 0.1 && t < keys[3] - 0.1) alpha = 0.55;
      if (t >= keys[3] - 0.1 && t < keys[4] - 0.1) { hl = 190; drop = E.iExp(ap(t, keys[3] - 0.1, 0.6)); alpha = 1 - drop; }
      if (t >= keys[4] - 0.1) hl = 190 * E.o3(ap(t, keys[4] - 0.1, 1.2));
      if (hl > 2) { ctx.save(); ctx.globalAlpha = alpha; seg(ctx, [cx, by + 30 + drop * 260], [cx, by + 30 - hl + drop * 260], 22, '#552256'); ctx.restore(); }
      if (t > keys[4] - 0.1) label(ctx, 'NEW', cx + 70, by - 120, P.fg, ap(t, keys[4] - 0.1, 0.3), 44, 'left');
      const L = (s, k0, k1) => ({ k: 'big', s, t0: k0 - 0.1, t1: k1 != null ? k1 - 0.12 : undefined, px: 210 });
      titles(ctx, t, P, [L('THE LOOP', w(4, 'loop'), keys[0]), L('GROW.', keys[0], keys[1]), L('STOP.', keys[1], keys[2]), L('REST.', keys[2], keys[3]), L('FALL OUT.', keys[3], keys[4]), L('AND AGAIN', keys[4]),
        { k: 'sub', s: 'SAME SPOT', t0: w(6, 'same') - 0.12 }]);
      hud(ctx, P, 4, t, s0);
    } },
    // 5 — the trick: how long the growing part lasts
    { s: S0(7), P: 'saffron', draw(ctx, t) {
      const P = PAL.saffron, s0 = S0(7); bg(ctx, P, t, s0, 55); stage(ctx, P, t, 540, 860, 380, -9);
      const a = TAU * 0.9 * E.io3(ap(t, w(7, 'how') - 0.1, 2.2));
      stopwatch(ctx, 540, 890, 250, P.fg, '#552256', a);
      titles(ctx, t, P, [{ k: 'big', s: 'HOW LONG?', t0: w(7, 'how') - 0.12 }, { k: 'sub', s: 'DOES THE GROWING LAST', t0: w(7, 'growing') - 0.12 },
        { k: 'tag', s: 'ANAGEN PHASE', t0: w(7, 'lasts') - 0.1 }]);
      hud(ctx, P, 5, t, s0);
    } },
    // 6 — head: two to seven years, about a centimeter a month, long enough to reach your waist
    { s: S0(8), P: 'plum', draw(ctx, t) {
      const P = PAL.plum, s0 = S0(8); bg(ctx, P, t, s0, 66, { jumps: [w(8, 'seven'), w(10, 'waist')] }); stage(ctx, P, t, 540, 860, 380, -9);
      const top = 470, waistY = 1010;
      const hy = lerp(560, waistY, E.io3(ap(t, w(8, 'run') - 0.1, w(10, 'waist') - w(8, 'run'))));
      // ruler on the left, ticks per "month"
      const rp = ap(t, w(9, 'centimeter') - 0.15, 0.5);
      if (rp > 0) { seg(ctx, [250, 560], [250, lerp(560, 1100, E.oExp(rp))], 10, P.fg); for (let i = 0; i <= 12; i++) { const y = 560 + i * 45; if (y < lerp(560, 1100, E.oExp(rp))) seg(ctx, [250, y], [i % 3 ? 280 : 300, y], 8, P.fg); } }
      figure(ctx, 540, top, P.fg, P.far, P.hair, hy);
      if (t > w(10, 'reach') - 0.15) { dashed(ctx, 330, 900, waistY, P.fg, ap(t, w(10, 'reach') - 0.15, 0.35), 9); label(ctx, 'WAIST', 900, waistY - 26, P.fg, ap(t, w(10, 'waist') - 0.12, 0.3), 44, 'right'); }
      const nTo = ap(t, w(8, 'two') - 0.1, 0.01) > 0 ? (t > w(8, 'seven') - 0.1 ? '2–7' : '2') : '';
      titles(ctx, t, P, [
        { k: 'big', s: nTo + (t > w(8, 'years') - 0.1 ? ' YEARS' : ''), t0: w(8, 'two') - 0.1, px: 220 },
        { k: 'sub', s: 'ON YOUR HEAD', t0: w(8, 'head') - 0.12, t1: w(9, 'centimeter') - 0.2 },
        { k: 'sub', s: '≈ 1 CM A MONTH', t0: w(9, 'centimeter') - 0.12, t1: w(10, 'reach') - 0.2 },
        { k: 'sub', s: 'WAIST-LONG HAIR', t0: w(10, 'reach') - 0.12 },
      ]);
      hud(ctx, P, 6, t, s0);
    } },
    // 7 — arms: a few months, hits the limit, falls out
    { s: S0(11), P: 'cobalt', draw(ctx, t) {
      const P = PAL.cobalt, s0 = S0(11); bg(ctx, P, t, s0, 77, { jumps: [w(12, 'limit')] }); stage(ctx, P, t, 540, 860, 380, -9);
      const lim = 120, fallT = w(13, 'falls') - 0.15, reg = w(13, 'long') + 0.2;
      const g = (i) => { const grown = lim * E.o3(ap(t, s0 + 0.1 + i * 0.05, w(12, 'limit') - s0 - 0.1)); return t > reg ? Math.max(grown * (t < fallT + 1.2 ? 1 : 0), 26 * E.o3(ap(t, reg + i * 0.04, 0.6))) : grown; };
      const fl = (i) => (t > reg ? 0 : ap(t, fallT + ((i * 7) % 11) * 0.06, 0.8));
      arm(ctx, 540, 940, 820, P.fg, P.far, P.hair, 11, g, fl);
      const ly = 940 - 60 - lim * Math.cos(0.42) - 10;
      if (t > w(12, 'hits') - 0.15) { dashed(ctx, 180, 900, ly, P.fg, ap(t, w(12, 'hits') - 0.15, 0.35), 9); label(ctx, 'LIMIT', 540, ly - 34, P.fg, ap(t, w(12, 'limit') - 0.12, 0.3), 48); }
      titles(ctx, t, P, [{ k: 'big', s: 'ON YOUR ARMS', t0: w(11, 'arms') - 0.12, t1: w(11, 'few') - 0.15 }, { k: 'big', s: 'FEW MONTHS', t0: w(11, 'few') - 0.1, px: 210 },
        { k: 'sub', s: 'THEN IT FALLS OUT', t0: w(13, 'falls') - 0.12 }, { k: 'tag', s: 'LIMIT REACHED', t0: w(12, 'limit') - 0.1 }]);
      hud(ctx, P, 7, t, s0);
    } },
    // 8 — split screen along x = 540: same speed, arm quits sooner
    { s: S0(14), P: 'teal', draw(ctx, t) {
      const s0 = S0(14), A = PAL.cobalt, B = PAL.plum, P = PAL.teal;
      const dropA = E.oExp(ap(t, s0 - 0.1, 0.45)), riseB = E.oExp(ap(t, s0 - 0.04, 0.45));
      ctx.save(); ctx.translate(0, -(1 - dropA) * HH); bg(ctx, A, t, s0, 88, { x0: 0, x1: 540 }); ctx.restore();
      ctx.save(); ctx.translate(0, (1 - riseB) * HH); bg(ctx, B, t, s0, 99, { x0: 540, x1: 1080 }); ctx.restore();
      ctx.fillStyle = CREAM; ctx.fillRect(536, 300, 8, 1060);
      const base = 1240, g0 = s0 - 0.1, rate = 200, quit = w(15, 'quits') - 0.1;
      const hA = Math.max(0, (Math.min(t, quit) - g0)) * rate, hB = Math.min(860, Math.max(0, (t - g0)) * rate);
      const fA = ap(t, quit + 0.2, 0.55);
      for (const [x, P2, h, f, nm] of [[270, A, hA, fA, 'ARM'], [810, B, hB, 0, 'HEAD']]) {
        disc(ctx, x, base + 120, 230, P2.disc);
        seg(ctx, [x, base], [x, base + 90], 70, P2.t[0]); disc(ctx, x, base + 90, 50, P2.t[0]);
        if (h > 2) { ctx.save(); ctx.globalAlpha = 1 - clamp((f - 0.5) / 0.5); ctx.translate(f * 60, E.iExp(f) * 500); seg(ctx, [x, base + 60], [x, base + 60 - h], 30, P2.hair); ctx.restore(); }
        label(ctx, nm, x, 350, P2.fg, ap(t, s0, 0.3), 52);
        if (t > w(14, 'grow') - 0.1) label(ctx, 'SAME RATE', x, 420, P2.fg, ap(t, w(14, 'grow') - 0.1, 0.3), 44);
      }
      if (t > quit) label(ctx, 'QUIT', 270, base - hA - 40, A.fg, ap(t, quit, 0.25), 48);
      ctx.save(); ctx.fillStyle = INK; ctx.globalAlpha = 0.0; ctx.restore();
      titles(ctx, t, P, [{ k: 'big', s: 'SAME SPEED', t0: w(14, 'slower') - 0.12, t1: quit - 0.05, y: 1520 }, { k: 'big', s: 'QUITS SOONER', t0: quit, y: 1520 }], { col: CREAM });
      hud(ctx, P, 8, t, s0);
    } },
    // 9 — eyebrows: a short timer too
    { s: S0(16), P: 'saffron', draw(ctx, t) {
      const P = PAL.saffron, s0 = S0(16); bg(ctx, P, t, s0, 111); stage(ctx, P, t, 540, 860, 380, -9);
      const cx = 540, cy = 880, fg = P.fg;
      disc(ctx, cx, cy, 250, mix(P.disc, '#ffffff', 0.25));
      disc(ctx, cx - 95, cy - 10, 26, fg); disc(ctx, cx + 95, cy - 10, 26, fg);
      const bp = E.oExp(ap(t, w(16, 'eyebrows') - 0.15, 0.45)), lift = Math.sin(clamp((t - w(16, 'eyebrows')) * 2.5) * Math.PI) * 18;
      if (bp > 0) { const ww = 70 * bp; seg(ctx, [cx - 95 - ww, cy - 90 - lift], [cx - 95 + ww, cy - 100 - lift], 30, '#552256'); seg(ctx, [cx + 95 - ww, cy - 100 - lift], [cx + 95 + ww, cy - 90 - lift], 30, '#552256'); }
      seg(ctx, [cx - 50, cy + 110], [cx + 50, cy + 110], 18, fg);
      const tp = E.oBack(ap(t, w(16, 'timer') - 0.12, 0.4));
      if (tp > 0) { ctx.save(); ctx.translate(cx + 250, cy - 230); ctx.scale(tp, tp); disc(ctx, 0, 0, 110, INK); stopwatch(ctx, 0, 6, 60, CREAM, P.base, TAU * 0.25 * E.io3(ap(t, w(16, 'timer'), 1.2))); ctx.restore(); }
      titles(ctx, t, P, [{ k: 'big', s: 'EYEBROWS', t0: w(16, 'eyebrows') - 0.12 }, { k: 'sub', s: 'SHORT TIMER TOO', t0: w(16, 'short') - 0.12 }]);
      hud(ctx, P, 9, t, s0);
    } },
    // 10 — end: a seven-year timer on your arm? one question, rows stop one by one
    { s: S0(17), P: 'ink', draw(ctx, t) {
      const P = PAL.ink, s0 = S0(17), endT = P_[18].e;
      bg(ctx, P, t, s0, 122, { spread: 0.7, stopAt: (j) => endT - 0.2 + (j % 6) * 0.1 }); stage(ctx, P, t, 540, 860, 380, -9);
      const grow = E.io3(ap(t, w(17, 'seven') - 0.15, 2.4));
      const g = (i) => 50 + (300 + (i % 3) * 40) * grow;
      arm(ctx, 540, 1000, 820, CREAM, mix(CREAM, P.base, 0.42), P.hair, 9, g, null, { wave: t * 0.8, hw: 16 });
      titles(ctx, t, P, [{ k: 'big', s: '7-YEAR TIMER?', t0: w(17, 'seven') - 0.12, t1: w(18, 'how') - 0.15 }, { k: 'big', s: 'HOW LONG?', t0: w(18, 'how') - 0.1, px: 220, col: P.hair },
        { k: 'sub', s: 'WOULD YOU LET IT GROW', t0: w(18, 'let') - 0.12 }, { k: 'tag', s: 'TELL ME IN THE COMMENTS', t0: w(18, 'grow') + 0.1, bg: P.hair, fg: INK }]);
      hud(ctx, P, 10, t, s0);
    } },
  ];

  // ---------- grid transitions (sliding rows, dropping columns, tile flip), rotated ----------
  const KINDS = ['rows', 'cols', 'tiles'];
  const CUTS = scenes.slice(1).map((sc, i) => ({ t: sc.s - 0.08, kind: KINDS[i % 3] }));
  const TW = 0.36;
  function trans(ctx, kind, p, drawB) {
    if (kind === 'rows') {
      const n = Math.ceil(HH / CELL);
      for (let j = 0; j < n; j++) { const q = E.ioExp(clamp(p * 1.5 - j * 0.045)); if (q <= 0) continue; ctx.save(); ctx.beginPath(); ctx.rect(0, j * CELL, W, CELL + 1); ctx.clip(); ctx.translate((1 - q) * W * (j % 2 ? 1 : -1), 0); drawB(); ctx.restore(); }
    } else if (kind === 'cols') {
      const n = W / CELL;
      for (let i = 0; i < n; i++) { const q = E.ioExp(clamp(p * 1.4 - i * 0.07)); if (q <= 0) continue; ctx.save(); ctx.beginPath(); ctx.rect(i * CELL, 0, CELL + 1, HH); ctx.clip(); ctx.translate(0, -(1 - q) * HH); drawB(); ctx.restore(); }
    } else {
      ctx.save(); ctx.beginPath(); let any = false;
      for (let j = 0; j < Math.ceil(HH / CELL); j++) for (let i = 0; i < W / CELL; i++) {
        const q = E.ioExp(clamp(p * 1.6 - (i + j) * 0.035)); if (q <= 0) continue; any = true;
        ctx.rect(i * CELL, j * CELL + CELL / 2 - (CELL / 2) * q, CELL + 1, CELL * q + 1);
      }
      if (any) { ctx.clip(); drawB(); } ctx.restore();
    }
  }
  function explainer(ctx, W_, H_, t) {
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - TW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + TW / 2) { scenes[i - 1].draw(ctx, t); trans(ctx, c.kind, (t - (c.t - TW / 2)) / TW, () => scenes[i].draw(ctx, t)); }
    else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) {
    const P = PAL.cobalt; bg(ctx, P, 3, 0, 11, { spread: 0.8 }); stage(ctx, P, 3, 540, 760, 380, -9);
    arm(ctx, 540, 800, 820, P.fg, P.far, P.hair, 11, (i) => 56 + (i % 3) * 8, null);
    dashed(ctx, 200, 880, 660, P.hair, 1);
    ctx.save(); ctx.font = F.en(900, 210); ctx.letterSpacing = '-4px'; ctx.textAlign = 'center'; ctx.fillStyle = CREAM; ctx.fillText('WHY SO', 540, 1380); ctx.fillStyle = P.hair; ctx.fillText('SHORT?', 540, 1580); ctx.restore();
  }

  // ---------- score: percussion spine, an accent on every shot onset, foley by chapter ----------
  function scoreSound(k) {
    const kick = (at, g = 0.6) => k.play('thud', at, { f: 95, gain: g });
    const hat = (at) => k.play('tick', at, { gain: 0.35, minor: true });
    CUTS.forEach((c) => { kick(c.t, 0.55); k.play('swish', c.t - 0.12, { dur: 0.22, gain: 0.5 }); for (let i = 0; i < 4; i++) k.play('click', c.t - 0.1 + i * 0.05, { f: 1600 + i * 200, gain: 0.35, minor: true }); });
    const titleHit = (at, g = 0.45) => { k.play('stamp', at, { gain: g }); };
    // hook
    kick(0.05, 0.7); for (let i = 0; i < 11; i++) k.play('pop', 0.15 + i * 0.03 + 0.2, { f: 900 + i * 40, gain: 0.2, minor: true });
    titleHit(w(0, 'arm') - 0.12); k.play('error', w(0, 'stop') - 0.1, { f: 'A3', gain: 0.18 }); kick(w(0, 'stop') - 0.1, 0.5);
    titleHit(w(1, 'head') - 0.12); k.play('riser', w(1, 'keeps') - 0.1, { dur: 1.3, gain: 0.25 });
    // follicle
    for (let i = 0; i < 3; i++) k.play('tock', S0(2) + 0.05 + i * 0.06, { f: 500 + i * 120, gain: 0.3, minor: true });
    k.play('whoosh', w(2, 'pocket') - 0.15, { dur: 0.5, gain: 0.3 }); titleHit(w(2, 'tiny') - 0.12); titleHit(w(3, 'follicle') - 0.12, 0.55); k.play('ding', w(3, 'follicle'), { f: 'E6', gain: 0.25 });
    // loop: pace ladder, one hit per station
    k.play('swish', w(4, 'loop') - 0.15, { dur: 0.5, gain: 0.35 });
    [['grow', 'C6'], ['stop', 'D6'], ['rest', 'E6'], ['fall', 'G6']].forEach(([wd, f]) => { kick(w(5, wd) - 0.1, 0.55); k.play('blip', w(5, wd) - 0.1, { f, gain: 0.8 }); hat(w(5, wd) + 0.1); });
    k.play('whoosh', w(5, 'fall') - 0.05, { dur: 0.5, gain: 0.3 }); k.play('pop', w(6, 'new') - 0.1, { f: 800, gain: 0.6 }); k.play('sparkle', w(6, 'new'), { n: 4, gain: 0.35 });
    // timer
    for (let at = w(7, 'how') - 0.1; at < P_[7].e + 0.2; at += 0.25) k.play('tick', at, { gain: 0.4, minor: true });
    titleHit(w(7, 'how') - 0.12); k.play('select', w(7, 'lasts') - 0.1, { gain: 0.3 });
    // head years: count-up slam
    k.play('count', w(8, 'two') - 0.1, { gain: 0.4 }); kick(w(8, 'two') - 0.1); k.play('count', w(8, 'seven') - 0.1, { gain: 0.4 }); kick(w(8, 'seven') - 0.1, 0.7);
    k.play('impact', w(8, 'years') - 0.1, { gain: 0.35 });
    for (let i = 0; i < 12; i++) k.play('tick', w(9, 'centimeter') - 0.15 + i * 0.04, { gain: 0.3, minor: true });
    k.play('riser', w(10, 'long') - 0.1, { dur: 1.2, gain: 0.25 }); k.play('success', w(10, 'waist') - 0.05, { f: 'C6', gain: 0.35 });
    // arms
    titleHit(w(11, 'arms') - 0.12); kick(w(11, 'few') - 0.1, 0.6); k.play('buzz', w(12, 'limit') - 0.12, { dur: 0.25, f: 160, gain: 0.25 });
    for (let i = 0; i < 11; i++) k.play('pop', w(13, 'falls') - 0.15 + ((i * 7) % 11) * 0.06 + 0.3, { f: 500 - i * 15, gain: 0.25, minor: true });
    // split
    k.play('whoosh', S0(14) - 0.1, { dur: 0.45, gain: 0.35 }); titleHit(w(14, 'slower') - 0.12);
    kick(w(15, 'quits') - 0.1, 0.7); k.play('error', w(15, 'quits') - 0.1, { f: 'E3', gain: 0.2 }); titleHit(w(15, 'quits') - 0.05, 0.55);
    // brows
    k.play('pop', w(16, 'eyebrows') - 0.15, { f: 700, gain: 0.6 }); k.play('jump', w(16, 'eyebrows'), { gain: 0.3 }); k.play('ding', w(16, 'timer') - 0.1, { f: 'G6', gain: 0.25 });
    // end
    k.play('riser', w(17, 'seven') - 0.15, { dur: 1.4, gain: 0.3 }); titleHit(w(17, 'seven') - 0.12);
    kick(w(18, 'how') - 0.1, 0.75); titleHit(w(18, 'how') - 0.1, 0.6); k.play('success', w(18, 'grow') + 0.1, { f: 'C6', gain: 0.4 });
    for (let j = 0; j < 6; j++) k.play('tock', P_[18].e - 0.2 + j * 0.1, { f: 900 - j * 60, gain: 0.3, minor: true });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
