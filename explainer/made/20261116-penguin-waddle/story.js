// ================= Data Storytelling, vertical 1080x1920: "Why do penguins waddle?" =================
// Style: Lemo-Opuscar "Data Storytelling" (STYLE.md grammar: one sheet of cream paper, a red-blue pencil drawing every
// mark, pinned handwritten notes, sonified marks). Drawing primitives from its MIT engine (window.LEMO, bundled before
// this file); camera, pencil, paper, layout, figures and timings here are original. Unattended run: no storyboard step.
// Facts: Griffin & Kram, Nature 2000 (emperor penguins on a force plate, up to 80% energy recovery vs ~65% in human
// walking); Pinshow et al. 1977 (walking penguins spend about twice the energy of other animals their weight).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s":0.25,"e":2.01,"text":"Penguins waddle on purpose,","words":[["penguins",0.25],["waddle",0.86],["on",1.32],["purpose",1.47]]},{"s":2.43,"e":4.69,"text":"and you'd never guess the 80 percent reason.","words":[["and",2.43],["youd",2.62],["never",2.88],["guess",3.2],["the",3.53],["80",3.72],["percent",3.85],["reason",4.3]]},{"s":5.1,"e":7.65,"text":"It looks clumsy, but that wobble is a trick.","words":[["it",5.1],["looks",5.25],["clumsy",5.63],["but",6.08],["that",6.3],["wobble",6.6],["is",7.05],["a",7.2],["trick",7.28]]},{"s":8.09,"e":9.74,"text":"The problem is their legs.","words":[["the",8.09],["problem",8.32],["is",8.88],["their",9.03],["legs",9.43]]},{"s":10.11,"e":11.05,"text":"They're super short,","words":[["theyre",10.11],["super",10.46],["short",10.75]]},{"s":11.35,"e":13.27,"text":"so every step is quick and tiny,","words":[["so",11.35],["every",11.5],["step",11.88],["is",12.19],["quick",12.34],["and",12.73],["tiny",12.96]]},{"s":13.65,"e":15.63,"text":"and quick steps burn fuel fast.","words":[["and",13.65],["quick",13.88],["steps",14.28],["burn",14.68],["fuel",14.99],["fast",15.31]]},{"s":15.97,"e":18.82,"text":"Back in the seventies, scientists found","words":[["back",15.97],["in",16.32],["the",16.49],["seventies",16.75],["scientists",17.53],["found",18.39]]},{"s":18.88,"e":20.99,"text":"walking penguins use about twice the energy","words":[["walking",18.88],["penguins",19.28],["use",19.74],["about",19.91],["twice",20.19],["the",20.48],["energy",20.65]]},{"s":21.08,"e":23.05,"text":"of other animals their weight.","words":[["of",21.08],["other",21.24],["animals",21.63],["their",22.18],["weight",22.58]]},{"s":23.48,"e":26.66,"text":"Then in 2000, researchers walked emperor penguins","words":[["then",23.48],["in",23.79],["2000",23.94],["researchers",24.24],["walked",25.07],["emperor",25.53],["penguins",26.06]]},{"s":26.72,"e":29.6,"text":"across a plate that measures every push.","words":[["across",26.72],["a",27.25],["plate",27.33],["that",27.77],["measures",28.12],["every",28.81],["push",29.25]]},{"s":29.96,"e":32.12,"text":"The waddle turned out to be a pendulum.","words":[["the",29.96],["waddle",30.17],["turned",30.59],["out",31.0],["to",31.21],["be",31.35],["a",31.49],["pendulum",31.56]]},{"s":32.52,"e":35.31,"text":"Each lean to the side lifts the body a little,","words":[["each",32.52],["lean",32.83],["to",33.14],["the",33.29],["side",33.53],["lifts",33.84],["the",34.22],["body",34.46],["a",34.77],["little",34.84]]},{"s":35.87,"e":38.77,"text":"then the swing back turns that lift into the next step.","words":[["then",35.87],["the",36.13],["swing",36.33],["back",36.66],["turns",36.93],["that",37.25],["lift",37.52],["into",37.78],["the",38.05],["next",38.24],["step",38.51]]},{"s":39.2,"e":43.42,"text":"That way penguins win back up to 80 percent of the energy in each stride.","words":[["that",39.2],["way",39.49],["penguins",39.71],["win",40.29],["back",40.51],["up",40.8],["to",40.95],["80",41.09],["percent",41.24],["of",41.75],["the",41.89],["energy",42.11],["in",42.55],["each",42.69],["stride",42.99]]},{"s":43.83,"e":45.92,"text":"You only get back about 65.","words":[["you",43.83],["only",44.13],["get",44.53],["back",44.83],["about",45.23],["65",45.72]]},{"s":46.38,"e":47.35,"text":"Without the wobble,","words":[["without",46.38],["the",46.81],["wobble",46.99]]},{"s":47.72,"e":50.1,"text":"their muscles would have to make up the difference.","words":[["their",47.72],["muscles",48.01],["would",48.4],["have",48.69],["to",48.91],["make",49.03],["up",49.25],["the",49.37],["difference",49.53]]},{"s":50.55,"e":52.78,"text":"So next time a penguin waddles past,","words":[["so",50.55],["next",50.7],["time",51.01],["a",51.31],["penguin",51.39],["waddles",51.93],["past",52.47]]},{"s":53.16,"e":55.46,"text":"is it clumsy, or kind of brilliant?","words":[["is",53.16],["it",53.33],["clumsy",53.5],["or",54.01],["kind",54.18],["of",54.52],["brilliant",54.69]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const E = window.LEMO, C = E.P;
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, u) => a + (b - a) * u;
  const seg = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
  const eo = (u) => 1 - Math.pow(1 - u, 3);
  const hsh = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
  const ACC = '#E39B3A';                       // the one accent (beak, feet): not data
  const REC = '#4393C3', MUS = '#B2182B';      // waffle: energy won back / energy muscles must pay
  const SERIF = (s) => `500 ${s}px Newsreader`, MONO = (s) => `500 ${s}px "IBM Plex Mono"`;
  try { [SERIF(76), MONO(30), '700 40px Caveat'].forEach((f) => document.fonts.load(f, 'AaZz09%?·×')); } catch (e) {}

  // ---------- smooth path helper (Catmull-Rom) ----------
  function cr(pts, closed = true, n = 8) {
    const out = [], L = pts.length, get = (i) => pts[closed ? (i + L) % L : clamp(i, 0, L - 1)];
    const last = closed ? L : L - 1;
    for (let i = 0; i < last; i++) {
      const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
      for (let k = 0; k < n; k++) {
        const u = k / n, u2 = u * u, u3 = u2 * u;
        out.push([0, 1].map((d) => 0.5 * (2 * p1[d] + (-p0[d] + p2[d]) * u + (2 * p0[d] - 5 * p1[d] + 4 * p2[d] - p3[d]) * u2 + (-p0[d] + 3 * p1[d] - 3 * p2[d] + p3[d]) * u3)));
      }
    }
    out.push(closed ? out[0] : pts[L - 1]);
    return out;
  }
  // ---------- penguin (front view, feet centre at origin, 470 units tall) ----------
  const PG = {
    outline: cr([[0, -470], [62, -460], [104, -425], [114, -372], [106, -320], [132, -250], [165, -150], [176, -70], [160, -25], [110, -6], [40, 0], [-40, 0], [-110, -6], [-160, -25], [-176, -70], [-165, -150], [-132, -250], [-106, -320], [-114, -372], [-104, -425], [-62, -460]]),
    belly: cr([[0, -352], [52, -338], [92, -268], [118, -160], [116, -72], [88, -30], [0, -16], [-88, -30], [-116, -72], [-118, -160], [-92, -268], [-52, -338]]),
    flipL: cr([[-150, -262], [-196, -190], [-222, -100], [-206, -62], [-178, -110], [-165, -190]], true, 6),
    flipR: cr([[150, -262], [196, -190], [222, -100], [206, -62], [178, -110], [165, -190]], true, 6),
    earL: cr([[-96, -380], [-70, -372], [-62, -340], [-84, -322], [-100, -345]], true, 5),
    earR: cr([[96, -380], [70, -372], [62, -340], [84, -322], [100, -345]], true, 5),
    beak: [[-17, -372], [17, -372], [0, -336], [-17, -372]],
    footL: cr([[-24, -8], [-62, -10], [-104, 2], [-82, 12], [-30, 10]], true, 5),
    footR: cr([[24, -8], [62, -10], [104, 2], [82, 12], [30, 10]], true, 5),
  };
  const tf = (pts, x, y, s, a) => { const c = Math.cos(a), sn = Math.sin(a); return pts.map(([px, py]) => [x + (px * c - py * sn) * s, y + (px * sn + py * c) * s]); };
  function fillPath(g, pts) { g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]); g.closePath(); }
  // prog 0..1: outline -> belly -> flippers -> face/feet -> graphite back
  function penguin(g, x, y, s, rock, prog, seed = 1) {
    if (prog <= 0) return;
    const T = (p) => tf(p, x, y, s, rock), w = 2.4;
    const out = T(PG.outline), bel = T(PG.belly);
    const hk = seg(prog, 0.8, 1);
    if (hk > 0) {                                                    // graphite hatching on the dark back
      g.save(); g.globalAlpha *= hk;
      fillPath(g, out); g.clip(); fillPath(g, bel); g.rect(x - 2000, y - 2000, 4000, 4000); g.clip('evenodd');
      g.strokeStyle = C.graphite; g.lineWidth = 2.2 * s;
      const top = y - 480 * s, bot = y + 20 * s;
      for (let i = 0, k = x - 260 * s; k < x + 260 * s; k += 7 * s, i++) {
        g.globalAlpha = hk * (0.55 + 0.35 * hsh(i + seed));
        g.beginPath(); g.moveTo(k - 60 * s, bot); g.lineTo(k + 160 * s, top); g.stroke();
      }
      g.restore();
    }
    E.pencilStroke(g, out, { width: w * s * 1.4, progress: seg(prog, 0, 0.45), seed: seed, passes: 2, wobble: 0.35, color: C.ink });
    E.pencilStroke(g, bel, { width: w * s, progress: seg(prog, 0.45, 0.6), seed: seed + 1, passes: 1, wobble: 0.3, color: C.ink });
    [PG.flipL, PG.flipR].forEach((f, i) => { const pp = T(f), k = seg(prog, 0.6, 0.72); if (k > 0) { g.save(); g.globalAlpha *= k * 0.9; fillPath(g, pp); g.fillStyle = C.graphite; g.fill(); g.restore(); } E.pencilStroke(g, pp, { width: w * s, progress: k, seed: seed + 2 + i, passes: 1 }); });
    const fk = seg(prog, 0.72, 0.8);
    if (fk > 0) {
      g.save(); g.globalAlpha *= fk;
      [PG.earL, PG.earR].forEach((p) => { fillPath(g, T(p)); g.fillStyle = '#F2C14E'; g.fill(); });
      [PG.footL, PG.footR, PG.beak].forEach((p) => { fillPath(g, T(p)); g.fillStyle = ACC; g.fill(); g.lineWidth = 1.6 * s; g.strokeStyle = C.ink; g.stroke(); });
      [[-38, -398], [38, -398]].forEach(([ex, ey]) => { const [px, py] = T([[ex, ey]])[0]; g.beginPath(); g.arc(px, py, 8 * s, 0, TAU); g.fillStyle = C.ink; g.fill(); g.beginPath(); g.arc(px + 2.5 * s, py - 2.5 * s, 2.6 * s, 0, TAU); g.fillStyle = '#fff'; g.fill(); });
      g.restore();
    }
  }
  const rockA = (t, t0, amp = 0.12, f = 1.3) => (t < t0 ? 0 : amp * Math.sin(TAU * f * (t - t0)) * seg(t, t0, t0 + 0.4));

  // ---------- world layout (one tall sheet) ----------
  const A = { px: 0, py: 380, s: 1.4, titleY: -700 };
  const B = { y1: 1720, y2: 1990, x0: -380 };
  const Cc = { base: 3800, unit: 400, top: 3200, xl: [-250, -50], xr: [50, 250] };
  const D = { plateY: 5320, pen: 0.72, chartY: 6000 };
  const Ew = { y0: 6960, cell: 42, xl: -470, xr: 50 };

  // ---------- acts: everything the pencil draws (timing + world path), used for drawing and for the pencil tip ----------
  const ACTS = [];
  const act = (o) => { if (o.type === 'taps') { o.t0 = o.times[0]; o.t1 = o.times[o.times.length - 1]; } ACTS.push(o); return o; };
  const textPts = (text, x, y, size, align = 'left') => { const w = text.length * size * 0.42, l = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x; return [[l, y - size * 0.3], [l + w, y - size * 0.3]]; };
  const T = (o) => act(Object.assign({ type: 'text', color: C.blue, size: 44 }, o, { pts: textPts(o.text, o.x, o.y, o.size || 44, o.align) }));
  const S = (o) => act(Object.assign({ type: 'stroke', color: C.ink, width: 2.2 }, o));
  const arrowPts = (a, b, h = 18) => { const ang = Math.atan2(b[1] - a[1], b[0] - a[0]); return [a, b, [b[0] - h * Math.cos(ang - 0.5), b[1] - h * Math.sin(ang - 0.5)], b, [b[0] - h * Math.cos(ang + 0.5), b[1] - h * Math.sin(ang + 0.5)]]; };

  // A: the object before the axis
  act({ type: 'penguin', draw: false, t0: 0.2, t1: 2.0, pts: tf(PG.outline, A.px, A.py, A.s, 0) });
  T({ text: '80%?', x: 230, y: 40, size: 92, color: C.red, t0: P(1, '80') - 0.05, t1: P(1, 'reason') });
  S({ pts: E.ringPath(300, 10, 92, 3), color: C.red, width: 3, t0: P(1, 'reason'), t1: PE(1) + 0.1 });
  T({ text: 'side-to-side sway', x: -380, y: 545, size: 44, t0: P(2, 'clumsy'), t1: P(2, 'clumsy') + 0.5 });
  const SWAY = []; for (let i = 0; i < 20; i++) { const tt = P(2, 'wobble') + i * 0.045; SWAY.push({ t: tt, x: -380 + i * 40 }); }
  act({ type: 'taps', pts: SWAY.map((d) => [d.x, 640]), times: SWAY.map((d) => d.t) });
  T({ text: 'a trick?', x: 250, y: -150, size: 60, color: C.red, t0: P(2, 'trick') - 0.1, t1: PE(2) + 0.3 });
  // legs close-up
  S({ pts: E.ringPath(0, 372, 150, 5), color: C.red, width: 3.2, t0: P(3, 'legs') - 0.1, t1: P(3, 'legs') + 0.4 });
  S({ pts: [[230, 330], [230, 400], [222, 400], [238, 400], [230, 400], [230, 330], [222, 330], [238, 330]], color: C.red, width: 2.6, t0: P(4, 'super'), t1: P(4, 'short') });
  T({ text: 'short!', x: 252, y: 380, size: 54, color: C.red, t0: P(4, 'short'), t1: PE(4) + 0.1 });
  // B: step strip
  T({ text: 'long legs', x: B.x0, y: B.y1 - 70, size: 50, t0: PS(5) - 0.05, t1: P(5, 'step') });
  const LONG = [0, 1, 2, 3, 4].map((i) => ({ x: B.x0 + i * 190, t: P(5, 'step') + i * 0.11 }));
  act({ type: 'taps', pts: LONG.map((d) => [d.x, B.y1]), times: LONG.map((d) => d.t) });
  T({ text: 'penguin', x: B.x0, y: B.y2 - 70, size: 50, color: C.red, t0: P(5, 'is'), t1: P(5, 'quick') });
  const SHORT = []; for (let i = 0; i < 11; i++) SHORT.push({ x: B.x0 + i * 76, t: P(5, 'quick') + i * 0.058 });
  act({ type: 'taps', pts: SHORT.map((d) => [d.x, B.y2]), times: SHORT.map((d) => d.t) });
  S({ pts: arrowPts([B.x0, 2100], [B.x0 + 780, 2100]), color: C.inkSoft, width: 1.8, t0: P(5, 'tiny') + 0.1, t1: PE(5) + 0.2 });
  T({ text: 'quick steps = fast muscles', x: B.x0, y: 2260, size: 54, color: C.red, t0: P(6, 'quick'), t1: P(6, 'burn') });
  T({ text: '= more fuel burned', x: B.x0, y: 2345, size: 54, color: C.red, t0: P(6, 'fuel') - 0.1, t1: PE(6) + 0.2 });
  // C: bar chart, frame break
  S({ pts: [[-360, Cc.base], [360, Cc.base]], width: 2.6, t0: P(7, 'back'), t1: P(7, 'seventies') });
  T({ text: '1977 study', x: -360, y: 2950, size: 56, t0: P(7, 'seventies'), t1: P(7, 'scientists') });
  S({ pts: [[-360, Cc.base], [-360, Cc.top - 10]], width: 2.2, t0: P(8, 'energy') - 0.1, t1: P(8, 'energy') + 0.3 });
  T({ text: 'same body weight', x: Cc.xl[0] - 40, y: 3960, size: 46, t0: P(9, 'weight') - 0.1, t1: PE(9) + 0.3 });
  S({ pts: E.ringPath(150, Cc.base - 2 * Cc.unit - 60, 70, 9), color: C.red, width: 3, t0: P(9, 'their') - 0.15, t1: P(9, 'weight') - 0.15 });
  // D: force plate, pendulum, energy curves
  const PLATE = [[-400, D.plateY], [380, D.plateY], [420, D.plateY + 60], [-360, D.plateY + 60], [-400, D.plateY]];
  S({ pts: PLATE, width: 2.6, t0: P(10, 'researchers'), t1: P(10, 'walked') });
  T({ text: '5 emperor penguins', x: -400, y: 4740, size: 52, t0: P(10, 'emperor') - 0.05, t1: PE(10) });
  act({ type: 'penguinD', draw: false, t0: P(10, 'walked'), t1: P(10, 'emperor') - 0.1, pts: tf(PG.outline, -300, D.plateY, D.pen, 0) });
  const TRACE = (k) => { const out = []; for (let i = 0; i <= 80; i++) { const u = i / 80, x = -300 + u * 640; let v; if (k === 0) v = Math.sin(TAU * 2 * u) * 22; else if (k === 1) v = (((u * 4) % 1) - 0.5) * 30; else v = -Math.abs(Math.sin(TAU * 2 * u)) * 30 + 10 * Math.sin(TAU * 8 * u); out.push([x, 5480 + k * 90 + v]); } return out; };
  const TR_T = [P(11, 'measures'), P(11, 'every'), P(11, 'push')];
  ['side', 'fore-aft', 'up'].forEach((n, k) => S({ pts: TRACE(k), color: C.ink, width: 2, t0: TR_T[k] - 0.05, t1: TR_T[k] + 0.5, label: n, ly: 5480 + k * 90 }));
  const PIV = [0, D.plateY], COM = 230 * D.pen;
  S({ pts: (() => { const o = []; for (let i = 0; i <= 30; i++) { const a = -0.42 + 0.84 * i / 30; o.push([Math.sin(a) * (COM + 40), D.plateY - Math.cos(a) * (COM + 40)]); } return o; })(), color: C.red, width: 2.2, t0: P(12, 'out'), t1: P(12, 'pendulum') - 0.05, dash: true });
  T({ text: 'pendulum!', x: 70, y: D.plateY - COM - 110, size: 58, color: C.red, t0: P(12, 'pendulum') - 0.05, t1: PE(12) + 0.2 });
  const CH = { x0: -400, x1: 400, y: D.chartY, amp: 120 };
  const curve = (k) => { const o = []; for (let i = 0; i <= 120; i++) { const u = i / 120, s2 = Math.pow(Math.sin(TAU * u), 2); o.push([lerp(CH.x0, CH.x1, u), CH.y + 80 - CH.amp * (k ? 1 - s2 : s2)]); } return o; };
  S({ pts: [[CH.x0, CH.y + 160], [CH.x1, CH.y + 160]], width: 2, color: C.inkSoft, t0: PS(13) - 0.3, t1: P(13, 'lean') });
  T({ text: 'height (energy stored)', x: CH.x0, y: CH.y - 120, size: 46, t0: P(13, 'lean'), t1: P(13, 'side') });
  S({ pts: curve(0), color: C.blue, width: 3, t0: P(13, 'side'), t1: P(13, 'little') });
  S({ pts: E.ringPath(lerp(CH.x0, CH.x1, 0.25), CH.y - 40, 34, 2), color: C.blue, width: 2.4, t0: P(13, 'little') - 0.05, t1: PE(13) + 0.1 });
  T({ text: 'speed', x: 150, y: CH.y - 120, size: 46, color: C.red, t0: P(14, 'swing'), t1: P(14, 'back') });
  S({ pts: curve(1), color: C.red, width: 3, t0: P(14, 'turns'), t1: P(14, 'next') - 0.1 });
  S({ pts: arrowPts([lerp(CH.x0, CH.x1, 0.25) + 30, CH.y - 50], [lerp(CH.x0, CH.x1, 0.5) - 20, CH.y - 50]), color: C.red, width: 2.4, t0: P(14, 'next') - 0.1, t1: P(14, 'step') + 0.1 });
  T({ text: 'next step', x: lerp(CH.x0, CH.x1, 0.5) + 10, y: CH.y - 30, size: 44, color: C.red, t0: P(14, 'step'), t1: PE(14) + 0.3 });
  // E: waffles
  const cellXY = (side, i) => { const col = i % 10, row = Math.floor(i / 10), x0 = side ? Ew.xr : Ew.xl; return [x0 + col * Ew.cell + Ew.cell / 2, Ew.y0 + (9 - row) * Ew.cell + Ew.cell / 2]; };
  const WL = []; for (let i = 0; i < 80; i++) WL.push(P(15, '80') + i * 0.012);
  const WR = []; for (let i = 0; i < 65; i++) WR.push(P(16, '65') - 0.05 + i * 0.012);
  act({ type: 'taps', pts: [0, 9, 19, 29, 39, 49, 59, 69, 79].map((i) => cellXY(0, i)), times: [0, 9, 19, 29, 39, 49, 59, 69, 79].map((i) => WL[i]) });
  T({ text: 'penguin (up to)', x: Ew.xl, y: 7450, size: 46, color: C.red, t0: P(15, 'penguins') - 0.1, t1: P(15, 'win') });
  T({ text: 'you', x: Ew.xr, y: 7450, size: 46, t0: P(16, 'you') - 0.05, t1: P(16, 'only') });
  act({ type: 'taps', pts: [0, 9, 19, 29, 39, 49, 59, 64].map((i) => cellXY(1, i)), times: [0, 9, 19, 29, 39, 49, 59, 64].map((i) => WR[i]) });
  const MORPH0 = P(17, 'wobble');
  T({ text: 'no wobble: muscles pay it all', x: Ew.xl, y: 7700, size: 54, color: C.red, t0: P(18, 'muscles') - 0.1, t1: P(18, 'difference') + 0.3 });
  // G: the headline revised + the empty cells for the viewer
  const TITLE = 'Penguins: bad walkers?';
  let TW = null;
  const titleGeo = () => { const tw = TW || 800, l = -tw / 2, pre = TW ? TW_PRE : 330; return { l, tw, x0: l + pre, x1: l + tw }; };
  let TW_PRE = 330;
  S({ pts: () => { const g = titleGeo(); return [[g.x0 - 6, A.titleY - 22], [g.x1 + 8, A.titleY - 28]]; }, color: C.red, width: 4.2, t0: P(20, 'clumsy') - 0.25, t1: P(20, 'clumsy') + 0.1 });
  T({ text: 'clumsy', x: -420, y: -520, size: 70, color: C.red, t0: P(20, 'clumsy'), t1: P(20, 'or') });
  T({ text: 'brilliant?', x: 60, y: -520, size: 70, color: C.red, t0: P(20, 'brilliant') - 0.05, t1: PE(20) + 0.1 });
  const CELLS = [[-372, -470, -292, -390, P(20, 'or') - 0.05], [170, -470, 250, -390, PE(20) + 0.05]];

  const ptsOf = (a) => (typeof a.pts === 'function' ? a.pts() : a.pts);
  // pencil tip in world coords at time t, + lift and lead (0 blue, 1 red)
  const PACTS = ACTS.slice().sort((a, b) => a.t0 - b.t0 || 0);
  function tipAt(a, t) {
    const pts = ptsOf(a);
    if (a.type === 'taps') {
      const ts = a.times; let i = 0; while (i < ts.length - 1 && ts[i + 1] <= t) i++;
      if (i >= ts.length - 1) return { p: pts[pts.length - 1], lift: 0.05 };
      const u = seg(t, ts[i], ts[i + 1]); return { p: [lerp(pts[i][0], pts[i + 1][0], u), lerp(pts[i][1], pts[i + 1][1], u)], lift: 0.25 * Math.sin(Math.PI * u) };
    }
    const R = E.resample(pts, 4), L = R.total * seg(t, a.t0, a.t1); let j = 0; while (j < R.len.length - 1 && R.len[j] < L) j++;
    return { p: R.pts[j], lift: 0 };
  }
  const leadOf = (a) => (a.color === C.red ? 1 : 0);
  function pencilState(t) {
    let prev = null, next = null;
    for (const a of PACTS) { if (a.t0 <= t && t <= a.t1) return Object.assign(tipAt(a, t), { flip: leadOf(a) }); if (a.t1 < t) { if (!prev || a.t1 > prev.t1) prev = a; } else if (!next || a.t0 < next.t0) next = a; }
    if (!prev) { const s = tipAt(next, next.t0); return { p: [s.p[0] + 120, s.p[1] + 120], lift: 1, flip: leadOf(next) }; }
    const pe = tipAt(prev, prev.t1).p;
    if (!next) return { p: [pe[0] + 60, pe[1] + 40], lift: clamp((t - prev.t1) / 0.5) * 0.9, flip: leadOf(prev) };
    const ns = tipAt(next, next.t0).p, gap = next.t0 - prev.t1, u = eio(seg(t, prev.t1, next.t0));
    const lift = Math.min(1, gap * 0.8) * Math.sin(Math.PI * u) + 0.05;
    return { p: [lerp(pe[0], ns[0], u), lerp(pe[1], ns[1], u)], lift, flip: lerp(leadOf(prev), leadOf(next), eio(seg(t, next.t0 - 0.35, next.t0 - 0.05))) };
  }

  // ---------- camera ----------
  // [t, x, y, zoom, roll]; eased between consecutive keys
  const CK = [
    [0, 0, -40, 1, 0], [PE(1), 0, -20, 1.02, 0], [P(2, 'clumsy'), 0, 40, 0.98, 0], [PE(2), 0, 80, 0.98, 0],
    [P(3, 'problem'), 0, 80, 0.98, 0], [P(3, 'legs') - 0.05, 50, 330, 1.8, 0], [PE(4), 70, 335, 1.85, 0],
    [PS(5) + 0.15, 0, 1880, 1, 0], [PE(6) + 0.15, 0, 1950, 1, 0],
    [P(7, 'seventies'), 0, 3380, 1, 0], [P(8, 'twice') - 0.05, 0, 3420, 1, 0], [P(8, 'twice') + 0.45, 0, 3300, 0.95, -0.02], [PE(9), 0, 3360, 0.97, 0],
    [P(10, '2000') + 0.1, 0, 5050, 1, 0], [P(11, 'measures') - 0.2, 0, 5150, 1, 0], [PE(11), 0, 5180, 1, 0],
    [P(12, 'waddle') + 0.3, 0, 5230, 2.0, 0], [PE(12) + 0.1, 0, 5235, 2.02, 0],
    [P(13, 'lean') - 0.2, 0, 5800, 1, 0], [PE(14), 0, 5830, 1, 0],
    [PS(15) + 0.2, 0, 7180, 1, 0], [PE(16), 0, 7200, 1, 0], [PE(18) + 0.1, 0, 7230, 1, 0],
    [P(19, 'penguin'), 0, 3300, 0.24, 0], [P(19, 'past') - 0.05, 0, 3300, 0.24, 0], [P(20, 'is') + 0.05, 0, -400, 1.0, 0], [DURATION, 0, -390, 1.02, 0],
  ];
  function camAt(t) {
    let i = 0; while (i < CK.length - 2 && CK[i + 1][0] <= t) i++;
    const a = CK[i], b = CK[i + 1], u = eio(seg(t, a[0], b[0]));
    let zoom;
    if (Math.abs(a[3] - b[3]) > 0.3) zoom = Math.exp(lerp(Math.log(a[3]), Math.log(b[3]), u)); else zoom = lerp(a[3], b[3], u);
    const c = { x: lerp(a[1], b[1], u), y: lerp(a[2], b[2], u), zoom, roll: lerp(a[4], b[4], u), sx: 0, sy: 0 };
    // jolt when the penguin bar breaks the frame
    const jt = t - (P(8, 'twice') + 0.28); if (jt > 0 && jt < 0.6) { const d = Math.exp(-jt * 7); c.sx = Math.sin(jt * 70) * 14 * d; c.sy = Math.cos(jt * 55) * 10 * d; c.zoom *= 1 + 0.05 * d; }
    // slow drift keeps the sheet alive
    c.x += Math.sin(t * 0.37) * 6; c.y += Math.cos(t * 0.29) * 5;
    return c;
  }
  let BASE = null;
  function applyCam(g, c) { g.setTransform(BASE); g.translate(W0 / 2 + c.sx, H0 / 2 + c.sy); g.rotate(c.roll); g.scale(c.zoom, c.zoom); g.translate(-c.x, -c.y); }
  function w2s(c, x, y) { const dx = (x - c.x) * c.zoom, dy = (y - c.y) * c.zoom, cs = Math.cos(c.roll), sn = Math.sin(c.roll); return [W0 / 2 + c.sx + dx * cs - dy * sn, H0 / 2 + c.sy + dx * sn + dy * cs]; }

  // ---------- paper ----------
  let PAPER = null;
  function paperTile() {
    if (PAPER) return PAPER;
    const S2 = 512, c = document.createElement('canvas'); c.width = c.height = S2; const g = c.getContext('2d'), R = H.rng(7);
    g.fillStyle = C.paper; g.fillRect(0, 0, S2, S2);
    const id = g.getImageData(0, 0, S2, S2), d = id.data;
    for (let y = 0; y < S2; y++) for (let x = 0; x < S2; x++) { const u = x / S2 * 8, v = y / S2 * 8, lo = Math.sin(u * 0.785 + Math.sin(v * 0.785) * 1.3) * 0.5 + Math.sin(v * 1.57 + 1.3) * 0.3, n = (R() - 0.5) * 5 + lo * 2.2, i = (y * S2 + x) * 4; d[i] += n; d[i + 1] += n; d[i + 2] += n * 0.9; }
    g.putImageData(id, 0, 0);
    for (let k = 0; k < 900; k++) { const x = R() * S2, y = R() * S2, a = R() * TAU, l = 3 + R() * 14; g.strokeStyle = R() < 0.5 ? 'rgba(120,100,70,.07)' : 'rgba(255,255,255,.35)'; g.lineWidth = 0.6 + R() * 0.6; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); }
    return (PAPER = c);
  }
  function viewRect(c, pad = 80) { const hw = (W0 / 2 + pad) / c.zoom, hh = (H0 / 2 + pad) / c.zoom, r = Math.hypot(hw, hh); return [c.x - r, c.y - r, c.x + r, c.y + r]; }
  function drawPaper(g, c) {
    g.setTransform(BASE); g.fillStyle = C.paper; g.fillRect(0, 0, W0, H0);
    applyCam(g, c);
    const [x0, y0, x1, y1] = viewRect(c);
    g.fillStyle = g.createPattern(paperTile(), 'repeat'); g.fillRect(x0, y0, x1 - x0, y1 - y0);
    const step = c.zoom < 0.5 ? 96 : 32, r = 1.5 / Math.sqrt(c.zoom);
    g.fillStyle = C.dotgrid;
    for (let x = Math.floor(x0 / step) * step; x < x1; x += step) for (let y = Math.floor(y0 / step) * step; y < y1; y += step) g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }

  // ---------- the red-blue pencil (screen space, enters from lower right) ----------
  function drawPencil(g, tip, lift, flip, alpha = 1) {
    if (alpha <= 0) return;
    const ang = 0.62, s = 1 + lift * 0.3, red = flip > 0.5, cA = red ? C.red : C.blue, cB = red ? C.blue : C.red;
    const body = (q, sil) => {
      const Lg = 18, Lw = 62, Wd = 26, len = 1500;
      if (sil) { q.fillStyle = sil; q.beginPath(); q.moveTo(0, 0); q.lineTo(Lg + Lw, -Wd / 2); q.lineTo(len, -Wd / 2); q.lineTo(len, Wd / 2); q.lineTo(Lg + Lw, Wd / 2); q.closePath(); q.fill(); return; }
      q.fillStyle = cA; q.fillRect(Lg + Lw - 2, -Wd / 2, len * 0.45, Wd); q.fillStyle = cB; q.fillRect(Lg + Lw - 2 + len * 0.45, -Wd / 2, len, Wd);
      q.fillStyle = 'rgba(255,255,255,.2)'; q.fillRect(Lg + Lw - 2, -Wd / 2 + 3, len * 2, 6); q.fillStyle = 'rgba(0,0,0,.18)'; q.fillRect(Lg + Lw - 2, Wd / 2 - 7, len * 2, 7);
      q.fillStyle = C.wood; q.beginPath(); q.moveTo(Lg * 0.9, -3.4); q.lineTo(Lg + Lw, -Wd / 2); for (let i = 0; i <= 6; i++) q.lineTo(Lg + Lw + (i % 2 ? 5 : 0), -Wd / 2 + Wd * i / 6); q.lineTo(Lg * 0.9, 3.4); q.closePath(); q.fill();
      q.fillStyle = 'rgba(150,110,60,.28)'; q.beginPath(); q.moveTo(Lg * 0.9, 1); q.lineTo(Lg + Lw, Wd / 2 - 3); q.lineTo(Lg + Lw, Wd / 2); q.lineTo(Lg * 0.9, 3.4); q.fill();
      q.fillStyle = red ? '#8E2232' : '#274E75'; q.beginPath(); q.moveTo(0, 0); q.lineTo(Lg, -3.8); q.lineTo(Lg, 3.8); q.closePath(); q.fill();
    };
    g.save(); g.setTransform(BASE); g.globalAlpha = alpha;
    const sh = 4 + lift * 60;
    g.save(); g.translate(tip[0] + sh * 0.8, tip[1] + sh * 1.1); g.rotate(ang); g.scale(s, s); g.filter = `blur(${(2 + lift * 12).toFixed(1)}px)`; g.globalAlpha = alpha * (0.22 - lift * 0.08); body(g, 'rgba(70,50,30,1)'); g.restore();
    g.translate(tip[0], tip[1]); g.rotate(ang); g.scale(s * 1.25, s * 1.25); body(g, null);
    g.restore();
  }

  // ---------- one frame ----------
  function frame(g, t) {
    const cam = camAt(t);
    drawPaper(g, cam);
    if (!TW && document.fonts && document.fonts.check(SERIF(76))) { g.save(); g.font = SERIF(76); TW = g.measureText(TITLE).width; TW_PRE = g.measureText('Penguins: ').width; g.restore(); }
    applyCam(g, cam);
    const z = cam.zoom;

    // ---- A: headline + penguin + sway strip
    E.setType(g, TITLE, 0, A.titleY, { size: 76, font: 'Newsreader', weight: 500, color: C.ink, align: 'center', progress: seg(t, 0.25, 1.3) });
    E.setType(g, 'how a penguin walks', 0, A.titleY + 56, { size: 28, font: 'IBM Plex Mono', weight: 500, color: C.inkSoft, align: 'center', progress: seg(t, 1.0, 1.8), track: 2 });
    const rA = rockA(t, P(2, 'clumsy'), 0.13, 1.25);
    penguin(g, A.px, A.py, A.s, rA, seg(t, 0.2, 2.0) * 0.8 + seg(t, 2.0, 2.4) * 0.2, 1);
    if (t > P(2, 'clumsy') - 0.2) {
      const k = seg(t, P(2, 'clumsy') - 0.2, P(2, 'clumsy') + 0.2);
      g.save(); g.globalAlpha *= k; E.inkLine(g, [[-390, 640], [390, 640]], { color: C.rule, width: 1.5 }); g.restore();
    }
    SWAY.forEach((d, i) => { const ph = TAU * 1.25 * (d.t - P(2, 'clumsy')); const v = Math.sin(ph); E.dataDot(g, d.x, 640 - v * 46, 9, E.valueColor(v, { center: 0, half: 1.2 }), { fresh: t - d.t, ripple: i % 3 === 0 ? 1 : 0 }); });
    if (t > SWAY[19].t) { const pts = SWAY.map((d) => [d.x, 640 - Math.sin(TAU * 1.25 * (d.t - P(2, 'clumsy'))) * 46]); g.save(); g.globalAlpha *= 0.5 * seg(t, SWAY[19].t, SWAY[19].t + 0.3); E.inkLine(g, pts, { width: 1.6 }); g.restore(); }

    // ---- B: step strip
    if (t > PS(5) - 1) {
      E.setType(g, 'short legs, quick steps', B.x0, 1480, { size: 60, font: 'Newsreader', weight: 500, color: C.ink, progress: seg(t, PS(5) - 0.1, PS(5) + 0.7) });
      g.save(); g.globalAlpha *= seg(t, PS(5), PS(5) + 0.3); E.inkLine(g, [[B.x0 - 10, B.y1], [B.x0 + 790, B.y1]], { color: C.rule, width: 1.5 }); E.inkLine(g, [[B.x0 - 10, B.y2], [B.x0 + 790, B.y2]], { color: C.rule, width: 1.5 }); g.restore();
      LONG.forEach((d) => E.dataDot(g, d.x, B.y1, 22, E.valueColor(0.2, { center: 0, half: 1 }), { fresh: t - d.t }));
      SHORT.forEach((d, i) => E.dataDot(g, d.x, B.y2, 14, E.valueColor(0.85, { center: 0, half: 1 }), { fresh: t - d.t, ripple: i % 2 ? 0 : 1 }));
      E.setType(g, 'time', B.x0 + 800, 2108, { size: 26, font: 'IBM Plex Mono', weight: 500, color: C.inkSoft, align: 'left', progress: seg(t, PE(5), PE(5) + 0.3) });
    }

    // ---- C: energy bar chart with the frame break
    if (t > PS(7) - 1) {
      const fk = seg(t, P(7, 'back'), P(7, 'back') + 0.4);
      g.save(); g.globalAlpha *= fk * 0.9;
      E.setType(g, 'energy to walk the same distance', -360, 2840, { size: 44, font: 'Newsreader', weight: 500, color: C.ink, progress: seg(t, P(7, 'back'), P(7, 'found')) });
      const broke = t > P(8, 'twice') + 0.28;
      g.strokeStyle = C.rule; g.lineWidth = 2; g.setLineDash([10, 8]);
      g.beginPath(); g.moveTo(-360, Cc.top); if (broke) { g.lineTo(Cc.xr[0] - 14, Cc.top); g.moveTo(Cc.xr[1] + 14, Cc.top); } g.lineTo(360, Cc.top); g.lineTo(360, Cc.base); g.stroke(); g.setLineDash([]);
      E.inkLine(g, [[-370, Cc.base - Cc.unit], [-350, Cc.base - Cc.unit]], { color: C.inkSoft, width: 2 });
      g.restore();
      E.setType(g, '1×', -378, Cc.base - Cc.unit + 10, { size: 30, font: 'IBM Plex Mono', weight: 500, color: C.inkSoft, align: 'right', progress: seg(t, P(8, 'energy'), P(8, 'energy') + 0.3) });
      // penguin bar: rises to 1x on "walking", ratchets to 2x on "twice" and tears the frame
      const r1 = eo(seg(t, P(8, 'walking'), P(8, 'about'))), steps = 6, rk = seg(t, P(8, 'twice') - 0.05, P(8, 'twice') + 0.4);
      const st = Math.floor(rk * steps), fr = rk * steps - st, r2 = rk >= 1 ? 1 : (st + eo(clamp(fr * 2.2))) / steps;
      const hv = r1 + r2;  // in units of 1x
      if (hv > 0.001) {
        const y = Cc.base - hv * Cc.unit, bar = [[Cc.xr[0], Cc.base], [Cc.xr[0], y], [Cc.xr[1], y], [Cc.xr[1], Cc.base]];
        E.inkShape(g, bar, { fill: E.valueColor(1 + hv * 0.5, { center: 1, half: 1 }), hatch: 0.35, seed: 5 });
        if (t > P(8, 'twice') + 0.28) {                                  // torn scar where the bar pierced the frame
          const R = H.rng(11), jag = []; for (let i = 0; i <= 10; i++) jag.push([Cc.xr[0] - 14 + i * ((Cc.xr[1] - Cc.xr[0] + 28) / 10), Cc.top + (i % 2 ? -9 : 7) * (0.6 + R() * 0.6)]);
          E.pencilStroke(g, jag, { width: 1.6, color: C.ink, passes: 1, seed: 4 });
        }
        E.setType(g, hv > 1.98 ? '2×' : hv.toFixed(1) + '×', (Cc.xr[0] + Cc.xr[1]) / 2, y - 26, { size: 46, font: 'IBM Plex Mono', weight: 500, color: C.ink, align: 'center' });
      }
      E.setType(g, 'penguin', (Cc.xr[0] + Cc.xr[1]) / 2, Cc.base + 50, { size: 34, font: 'IBM Plex Mono', weight: 500, color: C.ink, align: 'center', progress: seg(t, P(8, 'penguins'), P(8, 'penguins') + 0.4) });
      const ho = eo(seg(t, P(9, 'other'), P(9, 'animals') + 0.2));
      if (ho > 0.001) {
        const y = Cc.base - ho * Cc.unit, bar = [[Cc.xl[0], Cc.base], [Cc.xl[0], y], [Cc.xl[1], y], [Cc.xl[1], Cc.base]];
        E.inkShape(g, bar, { fill: E.valueColor(1, { center: 1, half: 1 }), hatch: 0.35, seed: 6 });
        E.setType(g, '1×', (Cc.xl[0] + Cc.xl[1]) / 2, y - 26, { size: 46, font: 'IBM Plex Mono', weight: 500, color: C.ink, align: 'center', progress: seg(t, P(9, 'animals'), P(9, 'animals') + 0.3) });
      }
      E.setType(g, 'other animals', (Cc.xl[0] + Cc.xl[1]) / 2, Cc.base + 50, { size: 34, font: 'IBM Plex Mono', weight: 500, color: C.ink, align: 'center', progress: seg(t, P(9, 'other'), P(9, 'animals')) });
    }

    // ---- D: force plate, walking penguin, traces, pendulum, energy curves
    if (t > PS(10) - 1) {
      E.setType(g, 'the force plate, 2000', -400, 4650, { size: 60, font: 'Newsreader', weight: 500, color: C.ink, progress: seg(t, P(10, 'then'), P(10, 'researchers')) });
      const pk = seg(t, P(10, 'walked') - 0.05, P(10, 'emperor') - 0.1);
      const wx = lerp(-300, 0, eio(seg(t, P(10, 'penguins'), P(11, 'push') + 0.2)));
      const walking = t > P(10, 'penguins') && t < P(11, 'push') + 0.2;
      const pend = t > P(12, 'waddle') - 0.2;
      const rD = walking ? 0.12 * Math.sin(TAU * 1.7 * (t - P(10, 'penguins'))) : pend ? rockA(t, P(12, 'waddle') - 0.2, 0.17, 0.9) : 0;
      const bob = walking ? Math.abs(Math.sin(TAU * 1.7 * (t - P(10, 'penguins')))) * 6 : 0;
      // plate side hatching
      g.save(); g.globalAlpha *= seg(t, P(10, 'walked'), P(10, 'walked') + 0.5) * 0.5; fillPath(g, PLATE); g.fillStyle = '#E6DFD2'; g.fill(); g.restore();
      penguin(g, wx, D.plateY - bob, D.pen, rD, pk, 3);
      // pendulum: stick + bob riding the rock
      if (pend) {
        const sk = seg(t, P(12, 'turned'), P(12, 'out'));
        const tip = [wx + Math.sin(rD) * COM, D.plateY - Math.cos(rD) * COM];
        E.pencilStroke(g, [[wx, D.plateY], [lerp(wx, tip[0], sk), lerp(D.plateY, tip[1], sk)]], { color: C.red, width: 4, passes: 1, seed: 8 });
        E.dataDot(g, wx, D.plateY, 7, C.ink, { fresh: 9 });
        if (sk > 0.9) E.dataDot(g, tip[0], tip[1], 18, MUS, { fresh: t - P(12, 'out') - 0.1 });
      }
      // trace labels
      ['side', 'fore-aft', 'up'].forEach((n, k) => E.setType(g, n, -320, 5486 + k * 90, { size: 28, font: 'IBM Plex Mono', weight: 500, color: C.inkSoft, align: 'right', progress: seg(t, TR_T[k] - 0.1, TR_T[k] + 0.2) }));
      // chart frame + moving cursor once both curves exist
      if (t > P(14, 'next')) {
        const u = ((t - P(14, 'next')) * 0.35) % 1, cx = lerp(CH.x0, CH.x1, u), s2 = Math.pow(Math.sin(TAU * u), 2);
        g.save(); g.globalAlpha *= seg(t, P(14, 'next'), P(14, 'next') + 0.3); g.strokeStyle = C.inkSoft; g.lineWidth = 1.2; g.setLineDash([6, 6]); g.beginPath(); g.moveTo(cx, CH.y - 70); g.lineTo(cx, CH.y + 160); g.stroke(); g.setLineDash([]);
        E.dataDot(g, cx, CH.y + 80 - CH.amp * s2, 10, C.blue, { fresh: 9 }); E.dataDot(g, cx, CH.y + 80 - CH.amp * (1 - s2), 10, C.red, { fresh: 9 }); g.restore();
      }
    }

    // ---- E/F: waffles
    if (t > PS(15) - 1) {
      E.setType(g, 'energy won back each stride', Ew.xl, 6840, { size: 56, font: 'Newsreader', weight: 500, color: C.ink, progress: seg(t, PS(15), P(15, 'win')) });
      const ek = seg(t, PS(15) - 0.2, PS(15) + 0.4);
      for (let side = 0; side < 2; side++) for (let i = 0; i < 100; i++) {
        const [cx, cy] = cellXY(side, i), h = Ew.cell - 6;
        const lt = side ? WR[i] : WL[i];
        g.save(); g.globalAlpha *= ek * 0.8; g.strokeStyle = C.rule; g.lineWidth = 1.4; g.strokeRect(cx - h / 2, cy - h / 2, h, h); g.restore();
        if (lt != null && t >= lt) {
          const pop = t - lt < 0.18 ? 1 + 0.35 * Math.sin(Math.PI * (t - lt) / 0.18) : 1;
          let col = REC;
          if (!side && t > MORPH0) { const mu = eo(seg(t, MORPH0 + (79 - i) * 0.02, MORPH0 + (79 - i) * 0.02 + 0.25)); col = `rgb(${H.mix(REC, MUS, mu).map((v) => v | 0).join(',')})`; }
          const hh = h * pop;
          g.fillStyle = col; g.beginPath(); g.roundRect(cx - hh / 2, cy - hh / 2, hh, hh, 4); g.fill(); g.lineWidth = 1.2; g.strokeStyle = C.ink; g.stroke();
        }
      }
      const nL = Math.round(80 * seg(t, P(15, '80'), WL[79])), nR = Math.round(65 * seg(t, WR[0], WR[64]));
      if (t > P(15, '80') - 0.05) E.setType(g, nL + '%', Ew.xl, 7600, { size: 116, font: 'IBM Plex Mono', weight: 500, color: t > MORPH0 + 1 ? MUS : C.ink });
      if (t > WR[0] - 0.05) E.setType(g, '~' + nR + '%', Ew.xr, 7600, { size: 116, font: 'IBM Plex Mono', weight: 500, color: C.ink });
    }

    // ---- G: the viewer's empty cells
    CELLS.forEach(([x0, y0, x1, y1, tc]) => { if (t > tc) E.dashedCell(g, x0, y0, x1, y1, { progress: seg(t, tc, tc + 0.4), color: C.red, width: 2.6 }); });

    // ---- every pencil act (strokes, rings, handwriting)
    for (const a of ACTS) {
      if (t < a.t0 || a.draw === false || a.type === 'taps' || a.type === 'penguin' || a.type === 'penguinD') continue;
      const pr = seg(t, a.t0, a.t1);
      if (a.type === 'text') E.handText(g, a.text, a.x, a.y, { size: a.size, color: a.color, progress: pr, weight: 700, align: a.align || 'left', zoom: z });
      else if (a.dash) { g.save(); g.setLineDash([10, 9]); E.inkLine(g, ptsOf(a).slice(0, Math.max(2, Math.ceil(ptsOf(a).length * pr))), { color: a.color, width: a.width }); g.restore(); }
      else E.pencilStroke(g, ptsOf(a), { color: a.color, width: a.width, progress: pr, seed: (a.t0 * 10) | 0, passes: 2, wobble: 0.4 });
    }

    // ---- the pencil, then its exit
    const ps = pencilState(t), tipS = w2s(cam, ps.p[0], ps.p[1]);
    const ex = eio(seg(t, PE(20) + 0.35, DURATION - 0.1));
    const tip = [lerp(tipS[0], 1300, ex), lerp(tipS[1], 2150, ex)];
    const inA = eo(seg(t, 0, 0.25));
    drawPencil(g, [lerp(1250, tip[0], inA), lerp(2050, tip[1], inA)], ps.lift + 0.5 * (1 - inA) + 0.4 * ex, ps.flip, 1);
  }
  function explainer(ctx, Wd, Hd, t) { ctx.save(); ctx.scale(Wd / W0, Hd / H0); BASE = ctx.getTransform(); frame(ctx, t); ctx.restore(); }
  function thumbnail(ctx, Wd, Hd) { explainer(ctx, Wd, Hd, 4.6); }

  // ---------- sound: sonified marks + graphite/paper foley + a soft pentatonic bed ----------
  function scoreSound(k) {
    const D2 = DURATION, BT = 60 / 100;
    const PENT = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5', 'A5'];
    const plonk = (x, v, g = 1) => { const f = SOUND.hz(PENT[clamp(Math.round(v * 9), 0, 9)]); k.tone(x, { f, type: 'sine', dur: 0.35, gain: 0.07 * g }); k.tone(x, { f: f * 2.01, type: 'sine', dur: 0.12, gain: 0.02 * g * (0.5 + v) }); };
    const silences = [[P(8, 'twice') - 0.45, P(8, 'twice') + 0.25], [P(12, 'pendulum') - 0.5, P(12, 'pendulum')], [PE(19), P(20, 'clumsy')]];
    const quiet = (x) => silences.some(([a, b]) => x >= a && x < b);
    const chords = [['A3', 'C4', 'E4'], ['F3', 'A3', 'C4'], ['C3', 'G3', 'E4'], ['G3', 'B3', 'D4']];
    for (let b = 0, x = 0; x < D2 - 0.3; b++, x = b * BT) {
      if (quiet(x)) continue;
      if (b % 4 === 0) chords[(b / 4) % 4].forEach((n) => k.tone(x, { f: n, type: 'sawtooth', dur: BT * 4.2, gain: 0.012, a: 0.6, filter: 'lowpass', f2: 700, detune: 7, minor: true, verb: 0.3 }));
      if (b % 2 === 0) k.tone(x, { f: [[0, 90], [0.12, 45]], type: 'sine', dur: 0.2, gain: 0.05, minor: true });
      k.noise(x + BT / 2, { dur: 0.04, filter: 'highpass', f: 6500, gain: 0.02, minor: true });
    }
    // pencil foley for every act
    for (const a of ACTS) {
      if (a.type === 'taps') { a.times.forEach((x, i) => k.play('tick', x, { f: 3400, gain: 0.25, minor: true })); continue; }
      const d = Math.max(0.12, a.t1 - a.t0);
      k.play('stroke', a.t0, { dur: d, material: 'pencil', gain: a.type === 'text' ? 0.55 : 0.75 });
    }
    // hook
    k.play('paper', 0.05, { dur: 0.4, gain: 0.5 });
    k.play('ding', P(1, '80'), { f: 'E5', gain: 0.35 });
    // sway: pitch follows the sway value
    SWAY.forEach((d) => plonk(d.t, 0.5 + 0.45 * Math.sin(TAU * 1.25 * (d.t - P(2, 'clumsy'))), 0.8));
    k.play('whoosh', P(3, 'legs') - 0.4, { dur: 0.4, gain: 0.35 }); k.play('tock', P(3, 'legs'), { f: 600, gain: 0.4 });
    k.play('whoosh', PS(5) - 0.15, { dur: 0.45, gain: 0.3 });
    LONG.forEach((d) => plonk(d.t, 0.2, 1.1)); SHORT.forEach((d) => plonk(d.t, 0.75, 0.7));
    k.play('error', P(6, 'fuel'), { gain: 0.15 });
    // bars: ratchet then puncture
    k.play('whoosh', PS(7) - 0.2, { dur: 0.5, gain: 0.3 });
    for (let i = 0; i < 6; i++) k.play('click', P(8, 'twice') - 0.05 + i * (0.45 / 6), { f: 1200 + i * 120, gain: 0.5 });
    k.play('paper', P(8, 'twice') + 0.28, { dur: 0.18, gain: 0.9 }); k.play('thud', P(8, 'twice') + 0.28, { gain: 0.45 });
    k.tone(P(8, 'twice') + 0.3, { f: 'E5', type: 'sine', dur: 0.9, gain: 0.05, verb: 0.4 });
    k.tone(P(9, 'animals'), { f: 'E4', type: 'sine', dur: 0.7, gain: 0.05, verb: 0.3 });
    // force plate
    k.play('whoosh', PS(10) - 0.1, { dur: 0.6, gain: 0.3 });
    for (let x = P(10, 'penguins'); x < P(11, 'push') + 0.2; x += 1 / 3.4) k.play('tock', x, { f: 300, gain: 0.25, minor: true });
    // pendulum swing: two soft glides
    for (let i = 0; i < 2; i++) k.tone(P(12, 'pendulum') + i * 0.55, { f: [[0, 330], [0.27, 440], [0.55, 330]], type: 'sine', dur: 0.55, gain: 0.05 });
    k.play('whoosh', PS(13) - 0.4, { dur: 0.45, gain: 0.25 });
    k.play('ding', P(14, 'step'), { f: 'G5', gain: 0.25 });
    // waffles: one plonk per row
    k.play('whoosh', PS(15) - 0.1, { dur: 0.5, gain: 0.3 });
    for (let r = 0; r < 8; r++) plonk(WL[r * 10], r / 9, 0.7);
    for (let r = 0; r < 7; r++) plonk(WR[Math.min(64, r * 10)], r / 9, 0.6);
    k.play('ding', WL[79] + 0.05, { f: 'A5', gain: 0.25 });
    // morph to muscle work: paper sweep + falling tone
    k.play('erase', MORPH0, { dur: 1.6, gain: 0.35 });
    k.tone(MORPH0 + 0.2, { f: [[0, 440], [1.4, 220]], type: 'triangle', dur: 1.5, gain: 0.04, filter: 'lowpass', f2: 1200 });
    // pull back over the whole sheet, then the revised headline
    k.play('whoosh', PS(19), { dur: 1.0, gain: 0.35, top: 1800 });
    k.play('whoosh', P(19, 'past'), { dur: 0.7, gain: 0.3 });
    k.play('erase', P(20, 'clumsy') - 0.25, { dur: 0.35, gain: 0.5 });
    k.play('tock', PE(20) + 0.05, { f: 700, gain: 0.35 });
  }

  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
