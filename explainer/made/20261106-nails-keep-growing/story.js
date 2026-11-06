// ================= Chalkboard Lesson, vertical 1080x1920: "Why do your nails keep growing when your arms stopped?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
// One long slate: seven stretches of board, the camera tracks along some and the felt eraser wipes for others.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.11, w: {"your": 0.25, "nails": 0.55, "never": 0.92, "stop": 1.29, "growing": 1.59} },  // Your nails never stop growing,
    { id: 'p1', s: 2.41, e: 4.28, w: {"but": 2.41, "your": 2.62, "arms": 2.91, "stopped": 3.2, "years": 3.7, "ago": 4.06} },  // but your arms stopped years ago.
    { id: 'p2', s: 4.83, e: 6.57, w: {"so": 4.83, "why": 4.99, "does": 5.24, "one": 5.57, "keep": 5.82, "going": 6.16} },  // So why does one keep going?
    { id: 'p3', s: 7.12, e: 8.57, w: {"it": 7.12, "starts": 7.26, "with": 7.68, "your": 7.95, "bones": 8.23} },  // It starts with your bones.
    { id: 'p4', s: 9.12, e: 10.82, w: {"near": 9.12, "each": 9.43, "end": 9.74, "of": 9.97, "a": 10.12, "long": 10.2, "bone": 10.51} },  // Near each end of a long bone
    { id: 'p5', s: 11.12, e: 13.17, w: {"sits": 11.12, "a": 11.37, "soft": 11.44, "strip": 11.7, "called": 12.02, "a": 12.4, "growth": 12.47, "plate": 12.85} },  // sits a soft strip called a growth plate.
    { id: 'p6', s: 13.72, e: 15.18, w: {"it": 13.72, "keeps": 13.87, "adding": 14.23, "new": 14.67, "bone": 14.89} },  // It keeps adding new bone,
    { id: 'p7', s: 15.48, e: 17.01, w: {"so": 15.48, "your": 15.64, "arms": 15.96, "get": 16.29, "longer": 16.53} },  // so your arms get longer.
    { id: 'p8', s: 17.56, e: 18.98, w: {"but": 17.56, "by": 17.8, "your": 17.95, "late": 18.27, "teens": 18.59} },  // But by your late teens,
    { id: 'p9', s: 19.28, e: 21.21, w: {"that": 19.28, "strip": 19.59, "turns": 19.98, "to": 20.36, "solid": 20.52, "bone": 20.9} },  // that strip turns to solid bone.
    { id: 'p10', s: 21.76, e: 22.88, w: {"the": 21.76, "plate": 22.0, "closes": 22.4} },  // The plate closes,
    { id: 'p11', s: 23.18, e: 24.78, w: {"and": 23.18, "your": 23.4, "arms": 23.69, "stop": 23.98, "for": 24.27, "good": 24.49} },  // and your arms stop for good.
    { id: 'p12', s: 25.33, e: 26.71, w: {"nails": 25.33, "work": 25.67, "differently": 25.95} },  // Nails work differently.
    { id: 'p13', s: 27.26, e: 29.80, w: {"under": 27.26, "your": 27.63, "cuticle": 27.93, "hides": 28.45, "the": 28.82, "nail": 29.05, "matrix": 29.35} },  // Under your cuticle hides the nail matrix,
    { id: 'p14', s: 30.10, e: 32.41, w: {"a": 30.1, "tiny": 30.17, "factory": 30.48, "that": 31.02, "never": 31.33, "shuts": 31.72, "down": 32.1} },  // a tiny factory that never shuts down.
    { id: 'p15', s: 32.96, e: 34.56, w: {"it": 32.96, "keeps": 33.11, "making": 33.49, "new": 33.95, "cells": 34.18} },  // It keeps making new cells,
    { id: 'p16', s: 34.86, e: 36.60, w: {"pushing": 34.86, "the": 35.33, "older": 35.53, "ones": 35.86, "forward": 36.13} },  // pushing the older ones forward.
    { id: 'p17', s: 37.15, e: 38.78, w: {"those": 37.15, "cells": 37.52, "harden": 37.89, "and": 38.33, "die": 38.56} },  // Those cells harden and die,
    { id: 'p18', s: 39.08, e: 40.87, w: {"which": 39.08, "is": 39.4, "why": 39.53, "clipping": 39.72, "doesnt": 40.23, "hurt": 40.62} },  // which is why clipping doesn't hurt.
    { id: 'p19', s: 41.42, e: 44.29, w: {"fingernails": 41.42, "grow": 42.17, "about": 42.45, "three": 42.79, "millimeters": 43.13, "a": 43.88, "month": 43.95} },  // Fingernails grow about three millimeters a month,
    { id: 'p20', s: 44.59, e: 47.03, w: {"so": 44.59, "a": 44.73, "whole": 44.8, "new": 45.15, "nail": 45.36, "takes": 45.64, "around": 45.98, "six": 46.4, "months": 46.61} },  // so a whole new nail takes around six months.
    { id: 'p21', s: 47.58, e: 49.02, w: {"so": 47.58, "which": 47.74, "grows": 48.14, "faster": 48.54} },  // So which grows faster:
    { id: 'p22', s: 49.32, e: 51.29, w: {"your": 49.32, "fingernails": 49.59, "or": 50.34, "your": 50.47, "toenails": 50.74} },  // your fingernails, or your toenails?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  // scene changes sit in the pauses between phrases
  const gap = (i) => [B[i - 1].e, B[i].s];
  const PANS = [{ i: 3, from: 0 }, { i: 12, from: 2 }, { i: 19, from: 4 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));
  const WIPES = [{ i: 8, from: 1 }, { i: 17, from: 3 }, { i: 21, from: 5 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));

  // ---------- geometry (from the reference) ----------
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const win = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const seg = (pts, step = 2.5) => { const out = []; for (let i = 0; i < pts.length - 1; i++) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1]; const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step)); for (let j = 0; j < n; j++) out.push([x0 + (x1 - x0) * j / n, y0 + (y1 - y0) * j / n]); } out.push(pts[pts.length - 1]); return out; };
  const normals = (P) => P.map((p, i) => { const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)]; const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; return [-dy / d, dx / d]; });
  const wob = (pts, nz, seed, amp = 1.5, freq = 0.012) => { const N = normals(pts); let L = 0; return pts.map((p, i) => { if (i) L += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]); const o = nz.n2(L * freq + seed * 1.37, seed * 0.71) * amp + nz.n2(L * freq * 6 + seed, seed + 3.3) * amp * 0.25; return [p[0] + N[i][0] * o, p[1] + N[i][1] * o]; }); };
  const circ = (x, y, rx, ry, a0 = 0, a1 = Math.PI * 2, n = 0) => { n = n || Math.max(12, Math.ceil(Math.abs(a1 - a0) * Math.max(rx, ry) / 6)); const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry]); } return o; };
  const quad = (p0, p1, p2, n = 30) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * p0[0] + 2 * m * t * p1[0] + t * t * p2[0], m * m * p0[1] + 2 * m * t * p1[1] + t * t * p2[1]]); } return o; };
  const cubic = (p0, p1, p2, p3, n = 40) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * m * p0[0] + 3 * m * m * t * p1[0] + 3 * m * t * t * p2[0] + t * t * t * p3[0], m * m * m * p0[1] + 3 * m * m * t * p1[1] + 3 * m * t * t * p2[1] + t * t * t * p3[1]]); } return o; };
  const rrect = (x, y, w, h, r) => { const o = [[x + r, y], [x + w - r, y]]; o.push(...circ(x + w - r, y + r, r, r, -Math.PI / 2, 0, 5).slice(1)); o.push([x + w, y + h - r]); o.push(...circ(x + w - r, y + h - r, r, r, 0, Math.PI / 2, 5).slice(1)); o.push([x + r, y + h]); o.push(...circ(x + r, y + h - r, r, r, Math.PI / 2, Math.PI, 5).slice(1)); o.push([x, y + r]); o.push(...circ(x + r, y + r, r, r, Math.PI, Math.PI * 1.5, 5).slice(1)); o.push([x + r + 6, y - 1]); return o; };
  const head = (P, len = 20, spread = 0.5) => { const a = P[P.length - 1], b = P[Math.max(0, P.length - 4)], an = Math.atan2(a[1] - b[1], a[0] - b[0]); return [[a[0] - Math.cos(an - spread) * len, a[1] - Math.sin(an - spread) * len], a, [a[0] - Math.cos(an + spread) * len, a[1] - Math.sin(an + spread) * len]]; };
  const xf = (P, dx, dy, rot = 0, px = 0, py = 0) => P.map(([x, y]) => { const c = Math.cos(rot), s = Math.sin(rot), ux = x - px, uy = y - py; return [px + ux * c - uy * s + dx, py + ux * s + uy * c + dy]; });
  const fmt = (n) => String(Math.round(n));


  // ---------- shapes ----------
  const foot = (x, y, s) => {
    const p = (a, b) => [x + a * s, y + b * s];
    return [
      cubic(p(-70, -230), p(-62, -130), p(-90, -60), p(-105, 0), 24),
      cubic(p(-105, 0), p(-118, 50), p(-92, 92), p(-40, 92), 16),
      quad(p(-40, 92), p(120, 112), p(290, 92), 20),
      cubic(p(290, 92), p(340, 90), p(340, 36), p(295, 32), 12),
      cubic(p(295, 32), p(190, 20), p(95, -10), p(55, -70), 20),
      quad(p(55, -70), p(35, -130), p(45, -230), 14),
      quad(p(240, 34), p(250, 62), p(240, 92), 6), quad(p(195, 26), p(205, 60), p(198, 96), 6),
    ];
  };
  const brain = (x, y, r) => {
    const o = [], n = 90; for (let i = 0; i <= n; i++) { const a = i / n * Math.PI * 2, q = r * (1 + 0.075 * Math.sin(a * 9)); o.push([x + Math.cos(a) * q * 1.08, y + Math.sin(a) * q * 0.8]); }
    return [o, cubic([x - r * 0.65, y - r * 0.1], [x - r * 0.3, y - r * 0.55], [x - r * 0.1, y + r * 0.25], [x + r * 0.2, y - r * 0.2], 20), cubic([x + r * 0.2, y - r * 0.2], [x + r * 0.42, y - r * 0.5], [x + r * 0.45, y + r * 0.2], [x + r * 0.75, y], 14), cubic([x - r * 0.5, y + r * 0.35], [x - r * 0.2, y + r * 0.15], [x, y + r * 0.6], [x + r * 0.35, y + r * 0.35], 14)];
  };
  const cross = (x, y, r) => [[[x - r, y - r], [x + r, y + r]], [[x + r, y - r], [x - r, y + r]]];
  const star = (x, y, r) => { const o = []; for (let i = 0; i < 4; i++) { const a = i * Math.PI / 4; o.push([[x - Math.cos(a) * r, y - Math.sin(a) * r], [x + Math.cos(a) * r, y + Math.sin(a) * r]]); } return o; };
  const hand = (x, y, s) => { const p = (a, b) => [x + a * s, y + b * s]; const o = [rrect(x - 85 * s, y - 20 * s, 170 * s, 190 * s, 34 * s)]; [-66, -22, 22, 66].forEach((a, i) => { const h = [95, 125, 118, 88][i]; o.push(rrect(x + (a - 20) * s, y - (20 + h) * s, 40 * s, (h + 8) * s, 18 * s)); }); o.push(quad(p(-85, 80), p(-155, 20), p(-150, -40), 10), quad(p(-150, -40), p(-115, -30), p(-85, 20), 8)); return o; };

  // ---------- story ----------
  const BXc = (b) => b * 1500; // board centre x in the world
  const FONT = { title: '700 KPX "Kalam"', label: '400 KPX "Patrick Hand"', num: '700 KPX "Kalam"' };
  const fontOf = (it) => FONT[it.font].replace('KPX', (it.size * (it.font === 'label' ? 1.08 : 1)).toFixed(1) + 'px');
  let MC = null; const MCACHE = {};
  const measure = (s, font, size) => {
    const f = FONT[font].replace('KPX', (size * (font === 'label' ? 1.08 : 1)).toFixed(1) + 'px'), key = f + '|' + s;
    if (MCACHE[key] != null) return MCACHE[key];
    if (!MC) MC = document.createElement('canvas').getContext('2d');
    MC.font = f; const w = MC.measureText(s).width;
    if (document.fonts && document.fonts.check(f)) MCACHE[key] = w;
    return w;
  };
  const arrow = (D, pts, role, w, a, b) => { D.line(pts, role, w, a, b); D.line(head(pts, 26), role, w, b, b + 0.08); };

  const lerp = (a, b, u) => a + (b - a) * u;
  // side view of a fingertip pointing right; (x,y) = origin, s = scale, ext = how far the nail's free edge pokes past the tip
  const fingerOutline = (x, y, s) => { const p = (a, b) => [x + a * s, y + b * s]; return [[p(-430, -70), p(160, -70), ...circ(x + 160 * s, y + 10 * s, 80 * s, 80 * s, -Math.PI / 2, Math.PI / 2, 24).slice(1), p(-430, 90)]]; };
  const nailPlate = (x, y, s, ext) => { const p = (a, b) => [x + a * s, y + b * s]; const e = 215 + ext; return [quad(p(-70, -90), p(90, -106), p(e, -76), 24), [p(-70, -71), p(e, -63)], [p(e, -76), p(e, -63)]]; };
  const cuticle = (x, y, s) => { const p = (a, b) => [x + a * s, y + b * s]; return [quad(p(-118, -70), p(-92, -98), p(-62, -92), 10)]; };
  const matrixAt = (x, y, s) => [x - 120 * s, y - 48 * s];
  // long bone lying flat: knobbly ends, a shaft, from x0 to x1 at height y
  const boneShape = (x0, x1, y) => [
    [...circ(x0 + 95, y - 52, 70, 64, -0.35, -Math.PI * 1.05, 18), ...circ(x0 + 95, y + 52, 70, 64, Math.PI * 1.05, 0.35, 18)],
    [...circ(x1 - 95, y - 52, 70, 64, Math.PI + 0.35, Math.PI * 2.05, 18), ...circ(x1 - 95, y + 52, 70, 64, -0.05, Math.PI - 0.35, 18)],
    [[x0 + 155, y - 34], [x1 - 155, y - 34]], [[x0 + 155, y + 34], [x1 - 155, y + 34]],
  ];
  const plateLines = (x, y) => [quad([x - 12, y - 92], [x + 6, y], [x - 12, y + 92], 12), quad([x + 12, y - 92], [x + 30, y], [x + 12, y + 92], 12)];
  const hatch = (x, y) => { const o = []; for (let i = -4; i <= 4; i++) o.push([[x - 8, y + i * 20 - 8], [x + 26, y + i * 20 + 8]]); return o; };
  const armShape = (x0, x1, y) => [rrect(x0, y - 55, x1 - x0, 110, 50), circ(x1 + 62, y, 70, 62)];
  const factory = (x, y) => [[[x - 150, y + 90], [x - 150, y - 20], [x - 75, y - 70], [x - 75, y - 20], [x, y - 70], [x, y - 20], [x + 75, y - 70], [x + 75, y - 20], [x + 110, y - 20], [x + 110, y - 170], [x + 150, y - 170], [x + 150, y + 90], [x - 150, y + 90]], rrect(x - 110, y + 10, 50, 46, 6), rrect(x - 25, y + 10, 50, 46, 6)];
  const scissors = (x, y, open) => { const a = open * 0.5; const bl = (sgn) => { const c = Math.cos(a * sgn), s2 = Math.sin(a * sgn); const P = [[170, 0], [-10, 0], [-90, -6 * sgn]]; return P.map(([px, py]) => [x + px * c - py * s2, y + px * s2 + py * c]); }; const lp = (sgn) => { const c = Math.cos(a * sgn), s2 = Math.sin(a * sgn), cx = 220, cy = 30 * sgn; return circ(x + cx * c - cy * s2, y + cx * s2 + cy * c, 42, 34); }; return [bl(1), bl(-1), lp(1), lp(-1)]; };
  const ruler = (x0, x1, y) => { const o = [rrect(x0, y - 80, x1 - x0, 160, 10)]; for (let i = 0, x = x0 + 40; x < x1 - 20; i++, x += 40) o.push([[x, y - 80], [x, y - 80 + (i % 5 === 0 ? 70 : 38)]]); return o; };
  const page = (x, y) => [rrect(x - 55, y - 60, 110, 120, 10), [[x - 55, y - 28], [x + 55, y - 28]]];
  const check = (x, y, r) => [[[x - r, y], [x - r * 0.3, y + r * 0.7], [x + r, y - r * 0.8]]];

  function story(t) {
    const items = [];
    const mk = (b) => {
      const ox = BXc(b) - 540, P = (pts) => pts.map(([x, y]) => [x + ox, y]);
      return {
        ox,
        line: (pts, role, w, a, b2, o = {}) => items.push({ k: 'line', pts: P(pts), role, w, a, b: b2, hit: o.hit, inst: o.inst, prog: o.prog, seed: o.seed }),
        text: (s, x, y, size, font, role, a, b2, o = {}) => items.push({ k: 'text', s, x: x + ox, y, size, font, role, a, b: b2, rot: o.rot || 0, align: o.align || 'center', inst: o.inst, prog: o.prog }),
        dot: (x, y, r, role, a, o = {}) => items.push({ k: 'dot', x: x + ox, y, r, role, a: o.inst ? -1 : a, b: o.inst ? 0 : a + 0.05, inst: o.inst }),
        many: (list, role, w, a, b2, o = {}) => list.forEach((pts, i) => { const n = list.length, aa = a + (b2 - a) * i / n, bb = a + (b2 - a) * (i + 1) / n; items.push({ k: 'line', pts: P(pts), role, w, a: aa, b: bb, inst: o.inst, prog: o.prog, hit: o.hit && i === 0 }); }),
        live: (pts, role, w, a, b2, seed) => items.push({ k: 'line', pts: P(pts), role, w, a: -1, b: 0, inst: true, prog: win(t, a, b2), seed, la: a, lb: b2 }),
      };
    };
    const flow = (D, P, role, r, t0, t1, n = 5, speed = 0.5) => {
      if (t < t0 || t > t1) return;
      for (let i = 0; i < n; i++) { const u = ((t - t0) * speed + i / n) % 1; const q = P[Math.min(P.length - 1, Math.floor(u * P.length))]; D.dot(q[0], q[1], r, role, 0, { inst: true }); }
    };
    // ===== board 0: the hook =====
    {
      const D = mk(0);
      D.text('nails', 540, 270, 150, 'title', 'ink', T(0, 'nails') - 0.15, T(0, 'nails') + 0.25, { rot: -0.015 });
      const fx = 560, fy = 560, fs = 1.2;
      D.many(fingerOutline(fx, fy, fs), 'ink', 7, T(0, 'nails') - 0.1, T(0, 'never'));
      D.many(cuticle(fx, fy, fs), 'ink', 6, T(0, 'never'), T(0, 'never') + 0.1);
      const ext = 10 + 90 * eio(win(t, T(0, 'never'), B[2].e));
      nailPlate(fx, fy, fs, ext).forEach((P, i) => D.live(P, 'acc4', 7, T(0, 'nails'), T(0, 'never') + 0.1, 11 + i));
      D.text('never stop', 340, 850, 112, 'title', 'acc3', T(0, 'never') - 0.1, T(0, 'growing') + 0.2, { rot: -0.02 });
      const ax = fx + (215 + ext) * fs; arrow(D, [[ax - 130, 470], [ax + 10, 470]], 'acc3', 6, T(0, 'growing') - 0.1, T(0, 'growing') + 0.2);
      D.many(armShape(110, 760, 1210), 'ink', 7, T(1, 'arms') - 0.15, T(1, 'arms') + 0.3);
      D.text('arms', 300, 1440, 120, 'title', 'ink', T(1, 'arms') - 0.05, T(1, 'arms') + 0.25);
      D.line([[960, 1080], [960, 1340]], 'acc2', 14, T(1, 'stopped') - 0.15, T(1, 'stopped') + 0.1, { hit: true });
      D.text('stopped', 700, 1440, 112, 'title', 'acc2', T(1, 'stopped') - 0.1, T(1, 'stopped') + 0.3, { rot: -0.02 });
      D.text('years ago', 700, 1560, 72, 'label', 'ink', T(1, 'years') - 0.05, T(1, 'ago') + 0.15);
      D.text('why?', 850, 1000, 150, 'title', 'acc1', T(2, 'why') - 0.15, T(2, 'why') + 0.3, { rot: 0.05 });
      D.line(circ(850, 960, 170, 105, -2.2, 4.2), 'acc1', 7, T(2, 'keep') - 0.1, T(2, 'going') + 0.2);
    }
    // ===== board 1: growth plates make bones longer =====
    {
      const D = mk(1);
      D.text('your bones', 540, 270, 140, 'title', 'ink', T(3, 'your') - 0.1, T(3, 'bones') + 0.3, { rot: -0.015 });
      const g = eio(win(t, T(6, 'adding'), T(7, 'longer') + 0.4)), x0 = lerp(200, 70, g), x1 = lerp(880, 1010, g), by = 760;
      boneShape(x0, x1, by).forEach((P, i) => D.live(P, 'ink', 8, T(4, 'long') - 0.15 + i * 0.12, T(4, 'bone') + 0.15 + i * 0.12, 21 + i));
      arrow(D, [[270, 460], [270, 610]], 'acc1', 6, T(4, 'end') - 0.1, T(4, 'end') + 0.15);
      arrow(D, [[810, 460], [810, 610]], 'acc1', 6, T(4, 'end'), T(4, 'end') + 0.2);
      D.text('each end', 540, 470, 84, 'label', 'acc1', T(4, 'near') - 0.05, T(4, 'end') + 0.2);
      // the soft strips sit between each knob and the shaft; they ride outward as the bone grows
      [x0 + 150, x1 - 180].forEach((px, j) => plateLines(px, by).forEach((P, i) => D.live(P, 'acc2', 7, T(5, 'strip') - 0.1 + j * 0.15, T(5, 'strip') + 0.25 + j * 0.15, 31 + j * 2 + i)));
      D.text('growth plate', 540, 1070, 132, 'title', 'acc2', T(5, 'growth') - 0.1, T(5, 'plate') + 0.3, { rot: -0.02 });
      D.text('soft strip', 540, 1210, 84, 'label', 'ink', T(5, 'soft') - 0.05, T(5, 'strip') + 0.25);
      D.text('+ new bone', 540, 1380, 120, 'title', 'acc3', T(6, 'adding') - 0.1, T(6, 'bone') + 0.25);
      if (t > T(6, 'adding')) { const rr = H.rng(4); for (let i = 0; i < 10; i++) { const side = i % 2, bx = side ? x1 - 205 - rr.range(0, 20) : x0 + 205 + rr.range(0, 20); D.dot(bx, by + rr.range(-26, 26), 7, 'acc3', T(6, 'adding') + i * 0.08); } }
      arrow(D, [[395, 1535], [120, 1535]], 'acc3', 7, T(7, 'longer') - 0.15, T(7, 'longer') + 0.15);
      arrow(D, [[685, 1535], [960, 1535]], 'acc3', 7, T(7, 'longer') - 0.15, T(7, 'longer') + 0.15);
      D.text('longer', 540, 1565, 92, 'title', 'acc3', T(7, 'longer') - 0.1, T(7, 'longer') + 0.3);
    }
    // ===== board 2: the plate closes =====
    {
      const D = mk(2);
      D.text('late teens', 540, 270, 140, 'title', 'acc1', T(8, 'late') - 0.15, T(8, 'teens') + 0.3, { rot: -0.02 });
      const by = 700, x0 = 70, x1 = 1010;
      D.many(boneShape(x0, x1, by), 'ink', 8, B[8].s - 0.05, B[8].s + 0.5);
      [x0 + 150, x1 - 180].forEach((px, j) => {
        D.many(plateLines(px, by), 'acc2', 7, B[8].s + 0.3, B[8].s + 0.6);
        D.many(hatch(px, by), 'ink', 6, T(9, 'turns') - 0.1 + j * 0.4, T(9, 'bone') + j * 0.15);
      });
      D.text('solid bone', 540, 980, 110, 'title', 'ink', T(9, 'solid') - 0.1, T(9, 'bone') + 0.3);
      D.line(circ(x0 + 165, by, 85, 140), 'acc2', 7, T(10, 'closes') - 0.15, T(10, 'closes') + 0.2, { hit: true });
      D.line(circ(x1 - 165, by, 85, 140), 'acc2', 7, T(10, 'closes'), T(10, 'closes') + 0.3);
      D.text('CLOSED', 540, 1220, 180, 'title', 'acc2', T(10, 'plate') - 0.05, T(10, 'closes') + 0.3, { rot: -0.03 });
      D.text('arms:', 330, 1450, 104, 'label', 'ink', T(11, 'arms') - 0.1, T(11, 'arms') + 0.2);
      D.text('done', 650, 1460, 150, 'title', 'acc1', T(11, 'stop') - 0.1, T(11, 'stop') + 0.3, { rot: -0.03 });
      D.line([[520, 1510], [800, 1500]], 'acc1', 8, T(11, 'good') - 0.05, T(11, 'good') + 0.2, { hit: true });
    }
    // ===== board 3: the nail matrix, a factory that never stops =====
    const fx = 620, fy = 760, fs = 1.5;
    const ext3 = 30 + 30 * eio(win(t, T(15, 'making'), T(16, 'forward') + 0.4));
    {
      const D = mk(3);
      D.text('nails are different', 540, 260, 96, 'title', 'ink', T(12, 'nails') - 0.1, T(12, 'differently') + 0.35, { rot: -0.015 });
      D.many(fingerOutline(fx, fy, fs), 'ink', 7, T(13, 'under') - 0.1, T(13, 'your') + 0.2);
      nailPlate(fx, fy, fs, ext3).forEach((P, i) => D.live(P, 'acc4', 7, T(13, 'your'), T(13, 'cuticle'), 51 + i));
      D.many(cuticle(fx, fy, fs), 'acc1', 8, T(13, 'cuticle') - 0.1, T(13, 'cuticle') + 0.2);
      D.text('cuticle', 300, 470, 84, 'label', 'acc1', T(13, 'cuticle') - 0.05, T(13, 'cuticle') + 0.3);
      arrow(D, [[370, 495], [470, 590]], 'acc1', 5, T(13, 'cuticle'), T(13, 'cuticle') + 0.25);
      const [mx, my] = matrixAt(fx, fy, fs);
      D.line(circ(mx, my, 68, 26), 'acc3', 8, T(13, 'nail') - 0.15, T(13, 'matrix') + 0.15, { hit: true });
      D.text('nail matrix', 770, 1010, 112, 'title', 'acc3', T(13, 'nail') - 0.1, T(13, 'matrix') + 0.3, { rot: -0.02 });
      arrow(D, [[620, 930], [mx + 30, my + 36]], 'acc3', 5, T(13, 'matrix'), T(13, 'matrix') + 0.25);
      D.many(factory(240, 1300), 'acc3', 6, T(14, 'tiny') - 0.1, T(14, 'factory') + 0.4);
      for (let i = 0; i < 4; i++) { const st = T(14, 'factory') + 0.3; if (t > st) { const u = ((t - st) * 0.5 + i / 4) % 1; D.line(circ(370 + u * 60, 1100 - u * 160, 16 + u * 24, 14 + u * 18), 'ink', 4, 0, 0, { inst: true, seed: 140 + i }); } }
      D.text('never', 720, 1250, 120, 'title', 'acc1', T(14, 'never') - 0.1, T(14, 'never') + 0.25);
      D.text('shuts down', 720, 1380, 90, 'label', 'ink', T(14, 'shuts') - 0.05, T(14, 'down') + 0.2);
      // new cells leave the matrix and ride the nail toward the tip
      const tipX = fx + (215 + ext3) * fs, NP = seg([[mx + 30, my], [fx - 60 * fs, fy - 82 * fs], [tipX - 10, fy - 78 * fs]], 10);
      flow(D, NP, 'acc1', 13, T(15, 'new') - 0.1, B[17].s, 7, 0.4);
      D.text('new cells', 340, 1560, 104, 'title', 'acc1', T(15, 'new') - 0.1, T(15, 'cells') + 0.3);
      D.text('pushed', 790, 1530, 96, 'label', 'acc4', T(16, 'pushing') - 0.05, T(16, 'pushing') + 0.3);
      arrow(D, [[640, 1600], [960, 1600]], 'acc4', 7, T(16, 'forward') - 0.15, T(16, 'forward') + 0.2);
    }
    // ===== board 4: cells harden and die, so clipping doesn't hurt =====
    {
      const D = mk(4);
      D.text('harden', 330, 280, 128, 'title', 'acc4', T(17, 'harden') - 0.1, T(17, 'harden') + 0.3, { rot: -0.02 });
      D.text('& die', 780, 280, 128, 'title', 'acc2', T(17, 'and') - 0.05, T(17, 'die') + 0.25, { rot: -0.02 });
      const u = eio(win(t, T(17, 'harden'), T(17, 'die') + 0.2));
      for (let i = 0; i < 5; i++) {
        const cx = 160 + i * 190, cy = 620;
        D.live(circ(cx, cy, lerp(72, 92, u), lerp(72, 24, u), 0, Math.PI * 2, 40), i < 5 ? 'acc3' : 'ink', 7, B[17].s - 0.1 + i * 0.06, B[17].s + 0.3 + i * 0.06, 160 + i);
        if (u < 0.5) D.dot(cx, cy, 10, 'acc3', B[17].s + i * 0.06);
      }
      D.text('dead keratin', 540, 840, 100, 'label', 'acc2', T(17, 'die') - 0.05, T(17, 'die') + 0.4);
      const sx = 400, sy = 1330, ss = 1.0;
      D.many(fingerOutline(sx, sy, ss), 'ink', 6, B[17].s, B[17].s + 0.5);
      const cutT = T(18, 'clipping') + 0.15, cut = t > cutT;
      nailPlate(sx, sy, ss, cut ? 0 : 120).forEach((P, i) => D.line(P, 'acc4', 6, B[17].s + 0.3, B[17].s + 0.7, { seed: 170 + i + (cut ? 5 : 0) }));
      D.many(cuticle(sx, sy, ss), 'ink', 5, B[17].s + 0.5, B[17].s + 0.7);
      if (cut) { const fall = eio(win(t, cutT, cutT + 0.6)); const tx = sx + 215 * ss, ty = sy - 76 * ss + fall * 220; D.line([[tx + 10, ty], [tx + 125, ty + 10 + fall * 20], [tx + 125, ty + 24 + fall * 20], [tx + 10, ty + 14]], 'acc4', 6, 0, 0, { inst: true, seed: 177 }); }
      const op = t < T(18, 'clipping') ? 1 : 1 - eio(win(t, T(18, 'clipping'), cutT));
      if (t > T(18, 'which') - 0.1) scissors(sx + 305 * ss, sy - 68 * ss, op).forEach((P, i) => D.line(P, 'ink', 7, 0, 0, { inst: true, seed: 180 + i }));
      D.text('clip!', 860, 1130, 100, 'title', 'acc1', T(18, 'clipping') - 0.1, T(18, 'clipping') + 0.25, { rot: 0.04 });
      D.text('no pain', 470, 1580, 120, 'title', 'acc3', T(18, 'doesnt') - 0.1, T(18, 'hurt') + 0.25, { rot: -0.02 });
      D.many(check(800, 1555, 50), 'acc3', 10, T(18, 'hurt'), T(18, 'hurt') + 0.2, { hit: true });
    }
    // ===== board 5: the numbers =====
    {
      const D = mk(5);
      D.text('fingernails', 540, 270, 120, 'title', 'ink', T(19, 'fingernails') - 0.15, T(19, 'grow') + 0.1);
      D.many(ruler(140, 940, 560), 'ink', 6, T(19, 'grow') - 0.1, T(19, 'about') + 0.2);
      D.line([[180, 670], [180, 700], [300, 700], [300, 670]], 'acc1', 8, T(19, 'three') - 0.1, T(19, 'millimeters') + 0.1, { hit: true });
      D.text('~3 mm', 540, 920, 190, 'num', 'acc1', T(19, 'three') - 0.15, T(19, 'millimeters') + 0.2, { rot: -0.02 });
      D.text('a month', 540, 1050, 96, 'label', 'ink', T(19, 'month') - 0.1, T(19, 'month') + 0.3);
      D.text('whole new nail', 540, 1200, 92, 'label', 'acc4', T(20, 'whole') - 0.1, T(20, 'nail') + 0.2);
      for (let i = 0; i < 6; i++) { const a = T(20, 'takes') + i * 0.17; D.many(page(190 + i * 140, 1350), 'acc3', 6, a, a + 0.15); D.text(String(i + 1), 190 + i * 140, 1390, 52, 'num', 'acc3', a + 0.08, a + 0.16); }
      D.text('≈ 6 months', 540, 1570, 140, 'num', 'acc1', T(20, 'six') - 0.15, T(20, 'months') + 0.3, { rot: -0.02 });
    }
    // ===== board 6: the loop-back question =====
    {
      const D = mk(6);
      D.text('which grows', 540, 290, 128, 'title', 'ink', T(21, 'which') - 0.1, T(21, 'grows') + 0.2);
      D.text('faster?', 540, 450, 150, 'title', 'acc1', T(21, 'faster') - 0.15, T(21, 'faster') + 0.3, { rot: -0.02 });
      const F = T(22, 'fingernails'), TO = T(22, 'toenails');
      D.many(hand(270, 900, 1.25), 'acc3', 6, F - 0.15, F + 0.35);
      D.text('fingernails', 280, 1230, 88, 'title', 'acc3', F - 0.1, F + 0.4);
      D.text('or', 540, 1000, 96, 'label', 'ink', T(22, 'or') - 0.1, T(22, 'or') + 0.15);
      D.many(foot(720, 960, 0.9), 'acc4', 6, TO - 0.15, TO + 0.35);
      D.text('toenails', 800, 1230, 88, 'title', 'acc4', TO - 0.1, TO + 0.35);
      D.text('tell me below!', 540, 1450, 112, 'title', 'acc1', B[22].e - 0.05, B[22].e + 0.4, { rot: -0.02 });
      D.line(circ(540, 1410, 400, 100, -2.0, 4.4), 'acc1', 7, B[22].e + 0.1, B[22].e + 0.5, { hit: true });
    }
    // ===== chalk leader arrows drawn while the camera tracks to the next board =====
    PANS.forEach((p) => {
      const x0 = BXc(p.from) + 560, x1 = BXc(p.from + 1) - 560, y = 960 + (p.from % 4 === 0 ? -40 : 60);
      const L = cubic([x0, y], [x0 + 120, y - 110], [x1 - 120, y + 110], [x1, y]);
      items.push({ k: 'line', pts: L, role: 'acc1', w: 6, a: p.t0 - 0.05, b: p.t1 - 0.1 });
      items.push({ k: 'line', pts: head(L, 26), role: 'acc1', w: 6, a: p.t1 - 0.1, b: p.t1 });
    });
    return items;
  }
  const tipOf = (items, t, meas) => { let tip = null; for (const it of items) { if (it.inst || it.k === 'dot') continue; const p = win(t, it.a, it.b); if (p > 0 && p < 1) { if (it.k === 'line') { const P = it.pts; tip = P[Math.min(P.length - 1, Math.floor(p * (P.length - 1)))]; } else tip = meas(it, p); } } return tip; };

  // ---------- camera: [t, local x, local y, zoom, board] ----------
  const CK = [
    [0, 540, 960, 1.04, 0], [6.57, 540, 960, 1.0, 0],
    [7.12, 540, 960, 1.0, 1], [17.01, 540, 960, 1.03, 1],
    [17.56, 540, 960, 1.04, 2], [24.78, 540, 960, 1.0, 2],
    [25.33, 540, 960, 1.0, 3], [36.6, 540, 960, 1.04, 3],
    [37.15, 540, 960, 1.04, 4], [40.87, 540, 960, 1.0, 4],
    [41.42, 540, 960, 1.0, 5], [47.03, 540, 960, 1.03, 5],
    [47.58, 540, 960, 1.04, 6], [60, 540, 960, 1.0, 6],
  ].map(([t, x, y, z, b]) => [t, BXc(b) - 540 + x, y, z]);
  const camAt = (t) => {
    const k = CK; if (t <= k[0][0]) return k[0].slice(1);
    for (let i = 0; i < k.length - 1; i++) { const a = k[i], b = k[i + 1]; if (t <= b[0]) { const u = eio((t - a[0]) / Math.max(1e-6, b[0] - a[0])); return [a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u, Math.exp(Math.log(a[3]) + (Math.log(b[3]) - Math.log(a[3])) * u)]; } }
    return k[k.length - 1].slice(1);
  };
  // ---------- rendering (the reference's chalk medium) ----------
  const XC = {};
  let NZ = null;
  const COL = { ink: [240, 242, 236], acc1: [246, 222, 120], acc2: [244, 150, 175], acc3: [205, 250, 190], acc4: [150, 205, 240] };
  const WX0 = -700, WY0 = -300, WWD = 13400, WHT = 2700; // world extent of the slate
  function buildSlate() {
    const sc2 = 0.5, SW = WWD * sc2, SH = WHT * sc2, sl = H.layer(SW, SH), sc = sl.getContext('2d');
    const base = H.layer(SW / 2, SH / 2), bc = base.getContext('2d'); H.paper(bc, SW / 2, SH / 2, '#2c4639', 17, 0.05);
    const rr = H.rng(12);
    { const gl = H.layer(SW / 2, SH / 2), gc = gl.getContext('2d'); gc.fillStyle = gc.strokeStyle = '#e8eee6'; gc.font = '400 14px "Kalam"';
      const ghosts = ['photosynthesis', '6CO2 + 6H2O', 'Homework p. 112', 'x² + y² = r²', 'Ch. 7  fractions', '3/4 = 0.75', 'E = mc²', 'due Friday', 'spelling test', 'H2O', '12 × 12 = 144', 'Monday', 'π ≈ 3.14', 'nouns / verbs'];
      for (let i = 0; i < 46; i++) gc.fillText(ghosts[i % ghosts.length], rr.range(0, SW / 2 - 60), rr.range(10, SH / 2 - 10));
      gc.lineWidth = 2; for (let i = 0; i < 14; i++) { gc.beginPath(); gc.arc(rr.range(0, SW / 2), rr.range(0, SH / 2), rr.range(10, 28), 0, 7); gc.stroke(); }
      bc.save(); bc.filter = 'blur(1px)'; bc.globalAlpha = 0.08; bc.drawImage(gl, 0, 0); bc.restore(); }
    const sm = H.layer(SW / 2, SH / 2), smc = sm.getContext('2d'); smc.lineCap = 'round';
    for (let i = 0; i < 420; i++) { const x = rr.range(0, SW / 2), y = rr.range(0, SH / 2), R = rr.range(18, 50), a0 = rr.range(0, 6.28); smc.strokeStyle = `rgba(215,228,215,${rr.range(0.035, 0.075)})`; smc.lineWidth = rr.range(12, 24); smc.beginPath(); smc.ellipse(x, y, R, R * rr.range(0.3, 0.7), rr.range(-0.4, 0.4), a0, a0 + rr.range(1.5, 3.5)); smc.stroke(); }
    for (let i = 0; i < 160; i++) { const x = rr.range(0, SW / 2), y = rr.range(0, SH / 2); smc.strokeStyle = `rgba(215,228,215,${rr.range(0.03, 0.05)})`; smc.lineWidth = rr.range(15, 22); smc.beginPath(); smc.moveTo(x, y); smc.lineTo(x + rr.range(45, 110), y + rr.range(-6, 6)); smc.stroke(); }
    bc.filter = 'blur(2px)'; bc.drawImage(sm, 0, 0); bc.filter = 'none';
    sc.imageSmoothingEnabled = true; sc.drawImage(base, 0, 0, SW, SH);
    sc.lineCap = 'round';
    for (let i = 0; i < 3200; i++) { const x = rr.range(0, SW), y = rr.range(0, SH); sc.strokeStyle = `rgba(220,230,220,${rr.range(0.01, 0.025)})`; sc.lineWidth = rr.range(0.5, 1); sc.beginPath(); sc.moveTo(x, y); sc.quadraticCurveTo(x + 20, y + rr.range(-3, 3), x + rr.range(30, 70), y + rr.range(-4, 4)); sc.stroke(); }
    XC.slate = sl;
    // settled dust + felt streaks at full resolution are laid per frame as a tiled overlay
    const TS = 256, tile = H.layer(TS, TS), tc = tile.getContext('2d'), img = tc.createImageData(TS, TS), d = img.data, r2 = H.rng(21);
    const coarse = new Float32Array(64 * 64); for (let i = 0; i < coarse.length; i++) coarse[i] = r2() - 0.5;
    for (let y = 0, p = 0; y < TS; y++) for (let x = 0; x < TS; x++, p++) { const v = (r2() - 0.5) * 0.9 + coarse[((y >> 2) & 63) * 64 + ((x >> 2) & 63)] * 0.7 + coarse[((y >> 1) & 63) * 64 + ((x * 3 >> 3) & 63)] * 0.4; const i = p * 4, on = v > 0 ? 255 : 0; d[i] = on; d[i + 1] = on; d[i + 2] = on; d[i + 3] = Math.min(255, Math.abs(v) * 24); }
    tc.putImageData(img, 0, 0);
    for (let i = 0; i < 260; i++) { tc.fillStyle = `rgba(235,240,232,${r2.range(0.04, 0.2)})`; tc.fillRect(r2.range(0, TS), r2.range(0, TS), r2.range(0.8, 1.8), r2.range(0.8, 1.8)); }
    XC.tooth = tile;
    // oak ledge (chalk tray) with grain, dust drift and specks
    const TW = 2400, TH = 96, tr = H.layer(TW, TH), tq = tr.getContext('2d'), r4 = H.rng(55);
    const tg2 = tq.createLinearGradient(0, 0, 0, TH); tg2.addColorStop(0, '#9a6a3c'); tg2.addColorStop(0.35, '#7a4f2a'); tg2.addColorStop(0.36, '#5e3a1c'); tg2.addColorStop(1, '#3e2510');
    tq.fillStyle = tg2; tq.fillRect(0, 0, TW, TH);
    for (let i = 0; i < 90; i++) { const o = r4() * TH, dark = r4.chance(0.6), fq = r4.range(0.002, 0.008), amp = r4.range(0.5, 2.5), ph = r4.range(0, 6); tq.strokeStyle = dark ? `rgba(50,28,10,${r4.range(0.12, 0.35)})` : `rgba(210,160,100,${r4.range(0.06, 0.16)})`; tq.lineWidth = r4.range(0.6, 2); tq.beginPath(); for (let x = 0; x <= TW; x += 20) { const y = o + Math.sin(x * fq + ph) * amp + NZ.n2(x * 0.004, i) * 2; x ? tq.lineTo(x, y) : tq.moveTo(x, y); } tq.stroke(); }
    tq.fillStyle = 'rgba(255,230,190,0.28)'; tq.fillRect(0, 33, TW, 1.5);
    const dg = tq.createLinearGradient(0, 0, 0, 32); dg.addColorStop(0, 'rgba(235,235,225,0.34)'); dg.addColorStop(1, 'rgba(235,235,225,0.07)'); tq.fillStyle = dg; tq.fillRect(0, 0, TW, 32);
    for (let i = 0; i < 14; i++) { const x = r4.range(0, TW), g3 = tq.createRadialGradient(x, 15, 2, x, 15, 70); g3.addColorStop(0, 'rgba(240,240,230,0.22)'); g3.addColorStop(1, 'rgba(240,240,230,0)'); tq.fillStyle = g3; tq.fillRect(x - 70, 0, 140, 32); }
    for (let i = 0; i < 2600; i++) { tq.fillStyle = `rgba(245,245,238,${r4.range(0.1, 0.5)})`; tq.fillRect(r4.range(0, TW), Math.pow(r4(), 1.6) * 30, r4.range(0.8, 2.2), r4.range(0.8, 1.6)); }
    XC.tray = tr;
  }
  const TRAY_Y = 1690;

  function renderView(ctx, t, cam, items) {
    const [cx, cy, z] = cam;
    const apply = (c) => { c.translate(W / 2, HH / 2); c.scale(z, z); c.translate(-cx, -cy); };
    const toS = ([x, y]) => [(x - cx) * z + W / 2, (y - cy) * z + HH / 2];
    ctx.save(); apply(ctx); ctx.imageSmoothingEnabled = true;
    ctx.drawImage(XC.slate, WX0, WY0, WWD, WHT);
    ctx.fillStyle = XC.toothPat || (XC.toothPat = ctx.createPattern(XC.tooth, 'repeat')); ctx.fillRect(WX0, WY0, WWD, WHT);
    ctx.restore();
    { const lit = ctx.createRadialGradient(470, 700, 140, 540, 960, 1300); lit.addColorStop(0, 'rgba(120,150,130,0.10)'); lit.addColorStop(1, 'rgba(0,10,5,0.35)'); ctx.fillStyle = lit; ctx.fillRect(0, 0, W, HH); }
    // ---- chalk ----
    const CL = XC.CL || (XC.CL = H.layer(W, HH)), c = CL.getContext('2d', { willReadFrequently: true });
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, W, HH); c.lineCap = 'round'; c.lineJoin = 'round';
    const nz = NZ;
    const chalk = (P, rgb, w, seed, prog) => {
      if (prog < 1) P = P.slice(0, Math.max(2, Math.ceil(P.length * prog)));
      const rr = H.rng(seed), N = normals(P);
      for (let k = 0; k < 4; k++) {
        const off = (k / 3 - 0.5) * w * 0.7 + rr.range(-0.5, 0.5), a = 0.9 * rr.range(0.75, 1);
        c.lineWidth = w * rr.range(0.5, 0.72);
        for (let i = 0; i < P.length - 1; i += 6) {
          c.strokeStyle = H.rgba(rgb, Math.min(1, a * (0.7 + 0.3 * nz.n2(i * 0.04 + k, seed * 0.17))));
          c.beginPath();
          for (let j = i; j <= Math.min(P.length - 1, i + 6); j++) { const x = P[j][0] + N[j][0] * off, y = P[j][1] + N[j][1] * off; j === i ? c.moveTo(x, y) : c.lineTo(x, y); }
          c.stroke();
        }
      }
    };
    const meas = (it, p) => { const w = measure(it.s, it.font, it.size), x0 = it.align === 'center' ? it.x - w / 2 : it.x; const w2 = measure(it.s.slice(0, Math.ceil(it.s.length * p)), it.font, it.size); return [x0 + w2, it.y - it.size * 0.3]; };
    const vx0 = cx - W / 2 / z - 300, vx1 = cx + W / 2 / z + 300; // cull far-away boards
    c.save(); apply(c);
    for (const it of items) {
      const p = it.inst ? (it.prog == null ? 1 : it.prog) : win(t, it.a, it.b);
      if (p <= 0) continue;
      const ix = it.k === 'line' ? it.pts[0][0] : it.x; if (ix < vx0 - 600 || ix > vx1 + 600) continue;
      const rgb = COL[it.role];
      if (it.k === 'line') {
        if (it.w < 0.1) continue;
        const seed = it.seed != null ? it.seed : ((it.pts[0][0] * 13 + it.pts[0][1] * 7) | 0) + 3;
        chalk(wob(seg(it.pts, 2.5), nz, Math.abs(seed) % 89, it.inst ? 0.5 : 1.3), rgb, it.w * 1.45, Math.abs(seed), p);
      } else if (it.k === 'dot') {
        c.fillStyle = H.rgba(rgb, 0.9); c.beginPath(); c.arc(it.x, it.y, it.r * 1.1, 0, 7); c.fill();
      } else {
        c.save(); c.font = fontOf(it);
        const wAll = c.measureText(it.s).width, x0 = it.align === 'center' ? it.x - wAll / 2 : it.x;
        c.translate(x0, it.y); c.rotate(it.rot || 0);
        const rr = H.rng((it.s.length * 31 + (Math.abs(it.x) | 0)) % 991), n = Math.ceil(it.s.length * p);
        let px = 0;
        for (let i = 0; i < n; i++) {
          const ch = it.s[i], w = c.measureText(ch).width;
          c.fillStyle = H.rgba(rgb, 0.95 * rr.range(0.8, 1));
          c.save(); c.translate(px, rr.range(-1.5, 1.5)); c.rotate(rr.range(-0.04, 0.04)); c.fillText(ch, 0, 0);
          if (it.font === 'num') { c.fillStyle = H.rgba(H.mix(rgb, [255, 255, 255], 0.4), 0.85); c.fillText(ch, 0.8, -0.6); } // numbers pressed harder: a second pass of chalk
          c.restore();
          px += w;
        }
        c.restore();
      }
    }
    c.restore();
    // grain anchored to the board: chalk only catches the slate's high points
    {
      const id = c.getImageData(0, 0, W, HH), d = id.data, iz = 1 / z;
      for (let i = 0, p = 0; i < d.length; i += 4, p++) {
        const a = d[i + 3] / 255; if (!a) continue;
        const x = p % W, y = (p / W) | 0;
        const wx = ((x - W / 2) * iz + cx) * 1.1 | 0, wy = ((y - HH / 2) * iz + cy) * 1.1 | 0;
        let h = Math.imul(wx, 374761393) + Math.imul(wy, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); h = ((h ^ (h >>> 16)) >>> 0) / 4294967296;
        const h2 = nz.n2(wx * 0.18, wy * 0.18) * 0.5 + 0.5;
        const g = h * 0.5 + h2 * 0.5;
        d[i + 3] = 255 * Math.min(1, a * 1.15) * H.clamp((g - (1 - a) * 0.95 - 0.06) * 3.0);
      }
      c.putImageData(id, 0, 0);
    }
    ctx.save(); ctx.filter = 'blur(4px)'; ctx.globalAlpha = 0.22; ctx.drawImage(CL, 0, 0); ctx.restore();
    ctx.drawImage(CL, 0, 0);
    // ---- oak frame top, chalk tray and the wall below ----
    ctx.save(); apply(ctx);
    ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(WX0, TRAY_Y - 8, WWD, 8);
    for (let x = WX0; x < WX0 + WWD; x += 2400) ctx.drawImage(XC.tray, x, TRAY_Y);
    { const g = ctx.createLinearGradient(0, TRAY_Y + 96, 0, TRAY_Y + 400); g.addColorStop(0, '#2b1c10'); g.addColorStop(1, '#1a120b'); ctx.fillStyle = g; ctx.fillRect(WX0, TRAY_Y + 96, WWD, 400); }
    { const g = ctx.createLinearGradient(0, -80, 0, 30); g.addColorStop(0, '#5e3a1c'); g.addColorStop(0.7, '#8a5a30'); g.addColorStop(1, '#3e2510'); ctx.fillStyle = g; ctx.fillRect(WX0, -300, WWD, 330); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(WX0, 30, WWD, 6); }
    // chalk sticks and the felt eraser resting on the ledge
    [[200, 92, [242, 242, 236], -0.03], [1640, 48, [246, 220, 110], 0.05], [3260, 60, [242, 150, 172], -0.02], [4700, 40, [150, 205, 238], 0.08], [6250, 70, [242, 242, 236], 0.04], [7700, 50, [246, 220, 110], -0.05], [9150, 56, [242, 150, 172], 0.03]].forEach(([x, len, col, rot]) => {
      ctx.save(); ctx.translate(x, TRAY_Y + 12); ctx.rotate(rot);
      ctx.fillStyle = 'rgba(30,15,5,0.35)'; ctx.beginPath(); ctx.ellipse(len / 2 + 3, 8, len / 2 + 2, 4, 0, 0, 7); ctx.fill();
      const g2 = ctx.createLinearGradient(0, -8, 0, 8); g2.addColorStop(0, H.rgba(H.mix(col, '#ffffff', 0.5))); g2.addColorStop(0.4, H.rgba(col)); g2.addColorStop(1, H.rgba(H.mix(col, '#000000', 0.35)));
      ctx.fillStyle = g2; ctx.beginPath(); ctx.roundRect(0, -8, len, 16, 7); ctx.fill();
      ctx.fillStyle = H.rgba(H.mix(col, '#ffffff', 0.3)); ctx.beginPath(); ctx.ellipse(len - 2, 0, 3, 8, 0, 0, 7); ctx.fill();
      ctx.restore();
    });
    ctx.restore();
    // ---- air dust, vignette, chalk stick ----
    const rr = H.rng(90);
    for (let i = 0; i < 90; i++) { const x0 = rr.range(0, W), sp = rr.range(8, 22), ph = rr.range(0, 2000); const y = ((ph + t * sp) % 1960) - 20, x = x0 + Math.sin(t * 0.8 + i) * 8; ctx.fillStyle = `rgba(240,244,236,${rr.range(0.1, 0.3)})`; ctx.beginPath(); ctx.arc(x, y, rr.range(0.7, 1.6), 0, 7); ctx.fill(); }
    H.vignette(ctx, W, HH, 0.35, '0,8,4');
    const tp = tipOf(items, t, meas);
    if (tp) {
      const [tx, ty2] = toS(tp), ang = 0.8;
      for (let i = 0; i < 26; i++) { const r3 = H.rng(Math.floor(t * 30) * 100 + i); ctx.fillStyle = `rgba(240,244,236,${r3.range(0.15, 0.5)})`; ctx.fillRect(tx + r3.range(-14, 14), ty2 + r3.range(0, 34), r3.range(1, 2.4), r3.range(1, 2.4)); }
      ctx.save();
      ctx.save(); ctx.filter = 'blur(6px)'; ctx.fillStyle = 'rgba(0,10,5,0.4)'; ctx.translate(tx + 18, ty2 + 22); ctx.rotate(ang); ctx.fillRect(4, -9, 104, 18); ctx.restore();
      ctx.translate(tx, ty2); ctx.rotate(ang);
      const g2 = ctx.createLinearGradient(0, -10, 0, 10); g2.addColorStop(0, '#ffffff'); g2.addColorStop(0.45, '#ecece4'); g2.addColorStop(1, '#a9aaa2');
      ctx.fillStyle = g2; ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(8, -10); ctx.lineTo(112, -10); ctx.lineTo(112, 10); ctx.lineTo(8, 10); ctx.lineTo(0, 5); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
  }

  // felt eraser crossing the screen in a zigzag; the new board shows behind it
  function drawEraser(ctx, x, y, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.save(); ctx.filter = 'blur(10px)'; ctx.fillStyle = 'rgba(0,10,5,0.45)'; ctx.fillRect(-150, -40, 320, 110); ctx.restore();
    const eg = ctx.createLinearGradient(0, -60, 0, 10); eg.addColorStop(0, '#c48a52'); eg.addColorStop(1, '#8a5a30');
    ctx.fillStyle = eg; ctx.beginPath(); ctx.roundRect(-170, -60, 340, 76, 10); ctx.fill();
    ctx.strokeStyle = 'rgba(60,34,14,0.35)'; ctx.lineWidth = 2; for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.moveTo(-160, -50 + i * 7); ctx.lineTo(160, -52 + i * 7); ctx.stroke(); }
    ctx.fillStyle = '#5c5c5c'; ctx.fillRect(-166, 12, 332, 34);
    ctx.fillStyle = 'rgba(240,240,235,0.6)'; ctx.fillRect(-166, 30, 332, 16);
    ctx.restore();
  }

  function explainer(ctx, Wd, Hd, t) {
    if (!NZ) NZ = H.makeNoise(31);
    if (!XC.slate) buildSlate();
    const items = story(t);
    const wp = WIPES.find((w) => t > w.t0 && t < w.t1);
    if (!wp) renderView(ctx, t, camAt(t), items);
    else {
      const u = (t - wp.t0) / (wp.t1 - wp.t0);
      renderView(ctx, t, camAt(wp.t0), items);
      const NL = XC.NL || (XC.NL = H.layer(W, HH)), nc = NL.getContext('2d');
      nc.setTransform(1, 0, 0, 1, 0, 0); nc.globalAlpha = 1; nc.filter = 'none'; nc.clearRect(0, 0, W, HH);
      renderView(nc, t, camAt(wp.t1), items);
      // zigzag passes: 4 rows, each crossing the full width; the cleared area grows behind the felt
      const rows = 4, rowH = HH / rows, pos = u * rows, row = Math.min(rows - 1, Math.floor(pos)), f = pos - row, dir = row % 2 ? -1 : 1;
      const ex = dir > 0 ? -200 + f * (W + 400) : W + 200 - f * (W + 400), ey = row * rowH + rowH * 0.5;
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, row * rowH);
      const x0 = dir > 0 ? 0 : ex, x1 = dir > 0 ? ex : W; ctx.rect(x0, row * rowH, Math.max(0, x1 - x0), rowH);
      ctx.clip(); ctx.drawImage(NL, 0, 0);
      // a cloudy smear left by the felt, fading
      ctx.globalAlpha = 0.16 * (1 - u); ctx.filter = 'blur(30px)'; ctx.fillStyle = 'rgb(205,220,205)';
      for (let r = 0; r <= row; r++) ctx.fillRect(0, r * rowH + rowH * 0.25, W, rowH * 0.5);
      ctx.restore();
      drawEraser(ctx, ex, ey, dir * 0.08 + Math.sin(t * 40) * 0.02);
    }
    H.grain(ctx, Wd, Hd, 0.03, 5 + (Math.floor(t * 12) % 4));
  }

  // ---------- sound: chalk on slate, scored straight from the story's own strokes ----------
  function scoreSound(k) {
    const D = DURATION;
    const knock = (t, g = 1, pan = 0, minor = true) => { k.tone(t, { f: [[0, 150], [0.05, 90]], dur: 0.07, gain: 0.1 * g, pan, minor, verb: 0.12 }); k.noise(t, { dur: 0.025, filter: 'bandpass', f: 900, q: 1.2, gain: 0.15 * g, a: 0.001, pan, minor, verb: 0.12 }); };
    const LV = 0.45;
    const ch = (a, b, g = 1, pan = 0, minor = true) => { const d = Math.max(0.03, b - a); g *= LV; knock(a, g, pan, minor); k.play('stroke', a, { material: 'chalk', dur: d, gain: 0.95 * g, pan, minor }); };
    const write = (s, a, b, g = 0.8, pan = 0) => { const n = s.length, re = /\S+/g; let m; while ((m = re.exec(s))) ch(a + (b - a) * m.index / n, a + (b - a) * (m.index + m[0].length) / n, g, pan, true); };
    const tap = (t, g = 1, pan = 0) => { k.noise(t, { dur: 0.02, filter: 'bandpass', f: 1500, q: 1.4, gain: 0.25 * g, a: 0.001, pan, minor: true }); k.tone(t, { f: 180, dur: 0.035, gain: 0.07 * g, pan, minor: true }); };
    const dust = (t, g = 1, pan = 0) => k.noise(t, { dur: 0.45, color: 'pink', filter: 'bandpass', f: 1400, q: 0.5, gain: 0.05 * g, a: 0.12, pan, minor: true });
    k.bed('room', 0, D, { gain: 0.5 });
    const all = story(D + 1).map((it) => (it.la != null ? { ...it, inst: false, a: it.la, b: it.lb } : it)).filter((it) => !it.inst && it.a >= 0 && !(it.k === 'line' && it.w < 0.1)).sort((a, b) => a.a - b.a);
    let lastEnd = -1;
    for (const it of all) {
      const pan = H.clamp(((it.k === 'line' ? it.pts[0][0] : it.x) % 1500 - 540) / 900, -0.4, 0.4);
      if (it.k === 'text') write(it.s, it.a, it.b, it.size > 100 ? 1.0 : 0.75, pan);
      else if (it.k === 'dot') tap(it.a, 0.9, pan);
      else if (it.hit) { ch(it.a, it.b, 1.4, pan, false); dust(it.b - 0.05, 1.2, pan); }
      else if (it.a > lastEnd - 0.02 || it.b - it.a > 0.12) ch(it.a, it.b, 0.85, pan);
      lastEnd = Math.max(lastEnd, it.b);
    }
    PANS.forEach((p) => k.play('whoosh', p.t0 - 0.05, { dur: p.t1 - p.t0 + 0.1, gain: 0.45, top: 1600 }));
    WIPES.forEach((w) => { const d = w.t1 - w.t0; for (let r = 0; r < 4; r++) k.play('erase', w.t0 + r * d / 4, { dur: d / 4, gain: 1.2 }); dust(w.t1 - 0.05, 1.5); });
    // key moments
    k.play('pop', T(0, 'nails'), { f: 560, gain: 0.45 });
    k.play('riser', T(0, 'never'), { dur: 0.9, gain: 0.35 });
    k.play('thud', T(1, 'stopped') - 0.05, { f: 150, gain: 0.55 }); k.play('impact', T(1, 'stopped'), { gain: 0.5 });
    k.play('ding', T(2, 'why'), { f: 'E5', gain: 0.35 });
    k.play('pop', T(3, 'bones'), { f: 520, gain: 0.4 });
    k.play('sparkle', T(5, 'growth') - 0.1, { n: 6, gain: 0.4 }); k.play('ding', T(5, 'plate'), { f: 'G5', gain: 0.3 });
    for (let i = 0; i < 10; i++) k.play('pop', T(6, 'adding') + i * 0.08, { f: 600 + i * 30, gain: 0.2, minor: true });
    k.play('riser', T(6, 'new'), { dur: T(7, 'longer') - T(6, 'new'), gain: 0.3 });
    k.play('success', T(7, 'longer') + 0.1, { f: 'C6', gain: 0.35 });
    k.play('ding', T(8, 'late'), { f: 'A5', gain: 0.25 });
    k.play('thud', T(9, 'solid'), { f: 160, gain: 0.4 });
    k.play('impact', T(10, 'closes') - 0.05, { gain: 0.55 }); k.play('stamp', T(10, 'closes'), { gain: 0.55 });
    k.play('thud', T(11, 'stop'), { f: 120, gain: 0.5 });
    k.play('swish', T(12, 'nails') - 0.05, { dur: 0.4, gain: 0.4 });
    k.play('ding', T(13, 'cuticle'), { f: 'E6', gain: 0.25 });
    k.play('sparkle', T(13, 'matrix') - 0.1, { n: 7, gain: 0.45 });
    for (let i = 0; i < 6; i++) k.play('tock', T(14, 'factory') + 0.3 + i * 0.32, { f: 520, gain: 0.25, minor: true });
    for (let i = 0; i < 9; i++) k.play('pop', T(15, 'new') + i * 0.36, { f: 640 + (i % 3) * 80, gain: 0.2, minor: true });
    k.play('whoosh', T(16, 'forward') - 0.15, { dur: 0.5, gain: 0.35 });
    k.play('thud', T(17, 'harden'), { f: 200, gain: 0.35 });
    k.play('error', T(17, 'die'), { gain: 0.35 });
    k.play('click', T(18, 'clipping') + 0.12, { gain: 1.2 }); k.play('tick', T(18, 'clipping') + 0.14, { f: 3000, gain: 1.0 });
    k.play('success', T(18, 'hurt') + 0.05, { f: 'G5', gain: 0.4 });
    for (let i = 0; i < 3; i++) k.play('count', T(19, 'three') + i * 0.12, { gain: 0.6 });
    k.play('impact', T(19, 'millimeters') - 0.1, { gain: 0.45 }); k.play('ding', T(19, 'millimeters'), { f: 'C6', gain: 0.3 });
    for (let i = 0; i < 6; i++) k.play('paper', T(20, 'takes') + i * 0.17, { dur: 0.12, gain: 0.5, minor: true });
    k.play('stamp', T(20, 'six'), { gain: 0.5 });
    k.play('pop', T(21, 'which') - 0.05, { f: 700, gain: 0.5 });
    k.play('ding', T(22, 'fingernails'), { f: 'C6', gain: 0.3 }); k.play('ding', T(22, 'toenails'), { f: 'G6', gain: 0.3 });
    k.play('success', B[22].e + 0.25, { f: 'D6', gain: 0.45 });
  }

  // fonts used by this style (loaded with the shell's other fonts before the first frame)
  try { if (document.fonts) ['700 120px "Kalam"', '400 60px "Patrick Hand"'].forEach((f) => document.fonts.load(f, 'AaZz09?!~')); } catch (e) { /* render anyway */ }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
