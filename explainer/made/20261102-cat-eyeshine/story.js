// Flat-Vector Science, vertical 1080x1920: "Why do cats' eyes glow in the dark?"
(function () {
  const W = 1080, HH = 1920;
  // BEATS: one row per voiceover phrase, copied from phrases.json (s, e, word times)
  const BEATS = [{"s": 0.25, "e": 1.6, "text": "Cat eyes never glow,", "w": {"glow": 1.26, "never": 0.84, "eyes": 0.5, "cat": 0.25}}, {"s": 1.9, "e": 4.88, "text": "that shine is your own flashlight bouncing back at you.", "w": {"you": 4.68, "at": 4.55, "back": 4.28, "bouncing": 3.75, "flashlight": 3.09, "own": 2.89, "your": 2.63, "is": 2.5, "shine": 2.16, "that": 1.9}}, {"s": 5.43, "e": 7.06, "text": "Light comes in through the pupil,", "w": {"pupil": 6.76, "the": 6.58, "through": 6.15, "in": 6.03, "comes": 5.73, "light": 5.43}}, {"s": 7.36, "e": 9.55, "text": "and hits the retina at the back of the eye.", "w": {"eye": 9.35, "the": 7.82, "of": 9.02, "back": 8.75, "at": 8.42, "retina": 8.02, "hits": 7.56, "and": 7.36}}, {"s": 10.1, "e": 11.42, "text": "Tiny cells catch it,", "w": {"it": 11.25, "catch": 10.84, "cells": 10.43, "tiny": 10.1}}, {"s": 11.72, "e": 13.32, "text": "and send a picture to the brain.", "w": {"brain": 13.0, "the": 12.81, "to": 12.68, "picture": 12.23, "a": 12.17, "send": 11.91, "and": 11.72}}, {"s": 13.87, "e": 14.85, "text": "But in your eye,", "w": {"eye": 14.61, "your": 14.28, "in": 14.12, "but": 13.87}}, {"s": 15.15, "e": 16.95, "text": "some light slips right past them,", "w": {"them": 16.68, "past": 16.41, "right": 16.08, "slips": 15.75, "light": 15.42, "some": 15.15}}, {"s": 17.25, "e": 18.17, "text": "and it's gone.", "w": {"gone": 17.8, "its": 17.52, "and": 17.25}}, {"s": 18.72, "e": 20.41, "text": "A cat gets a second chance.", "w": {"chance": 19.93, "second": 19.44, "a": 18.72, "gets": 19.04, "cat": 18.8}}, {"s": 20.96, "e": 23.26, "text": "Behind its retina sits a shiny layer,", "w": {"layer": 22.88, "shiny": 22.5, "a": 22.42, "sits": 22.11, "retina": 21.65, "its": 21.42, "behind": 20.96}}, {"s": 23.56, "e": 25.13, "text": "called the tapetum lucidum.", "w": {"lucidum": 24.65, "tapetum": 24.18, "the": 23.97, "called": 23.56}}, {"s": 25.68, "e": 26.97, "text": "It works like a mirror,", "w": {"mirror": 26.54, "a": 26.47, "like": 26.18, "works": 25.82, "it": 25.68}}, {"s": 27.27, "e": 29.52, "text": "bouncing missed light back through the retina.", "w": {"retina": 29.17, "the": 29.0, "through": 28.59, "back": 28.36, "light": 28.07, "missed": 27.73, "bouncing": 27.27}}, {"s": 30.07, "e": 32.9, "text": "So a cat needs just one-sixth of the light you do.", "w": {"do": 32.75, "you": 32.52, "light": 32.15, "the": 31.93, "of": 31.78, "onesixth": 31.18, "just": 30.89, "needs": 30.51, "cat": 30.29, "a": 30.22, "so": 30.07}}, {"s": 33.45, "e": 34.91, "text": "Whatever still isn't caught,", "w": {"caught": 34.53, "isnt": 34.27, "still": 33.96, "whatever": 33.45}}, {"s": 35.21, "e": 36.58, "text": "shoots back out of the eye.", "w": {"eye": 36.38, "the": 36.19, "of": 36.06, "out": 35.86, "back": 35.6, "shoots": 35.21}}, {"s": 37.13, "e": 38.14, "text": "That's the shine,", "w": {"shine": 37.75, "the": 37.52, "thats": 37.13}}, {"s": 38.44, "e": 39.81, "text": "often green or yellow.", "w": {"yellow": 39.36, "or": 39.2, "green": 38.82, "often": 38.44}}, {"s": 40.36, "e": 41.43, "text": "No light at all?", "w": {"all": 41.16, "at": 40.99, "light": 40.54, "no": 40.36}}, {"s": 41.98, "e": 43.78, "text": "No shine, and no sight either.", "w": {"either": 43.31, "sight": 42.92, "no": 41.98, "and": 42.53, "shine": 42.14}}, {"s": 44.33, "e": 46.51, "text": "Ever caught your cat's eyes shining at night?", "w": {"night": 46.21, "at": 46.09, "shining": 45.66, "eyes": 45.42, "cats": 45.18, "your": 44.94, "caught": 44.57, "ever": 44.33}}, {"s": 47.06, "e": 48.16, "text": "What color were they?", "w": {"they": 47.9, "were": 47.64, "color": 47.32, "what": 47.06}}];
  const P = (i) => BEATS[i], T = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const ORDER = [['hook', 0], ['eye', P(2).s - 0.25], ['cells', P(4).s - 0.25], ['human', P(6).s - 0.25], ['second', P(9).s - 0.25], ['mirror', P(12).s - 0.25], ['number', P(14).s - 0.25], ['shine', P(15).s - 0.25], ['dark', P(19).s - 0.25], ['end', P(21).s - 0.25]];
  const WIPE = 0.5;
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', teal: '#1fb6a6', yellow: '#ffd23f', green: '#7dff6b', pink: '#ff8fa3', rose: '#e8607a', purple: '#6c4bd8', silver: '#dff3ff', white: '#ffffff', fur: '#2b2b4a', fur2: '#3a3a5e' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 56, padX = size * 0.7, h = size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink); ctx.restore();
  };
  const headline = (ctx, s, x, y, size, col, k = 1) => { if (k <= 0.01) return; const light = col === PAL.ink; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), 14, light ? 'rgba(120,60,20,0.07)' : 'rgba(10,10,40,0.2)'); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const stars = (ctx, t, seed = 3, n = 46, maxY = 900) => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const x = r() * W, y = r() * maxY, s = 2 + r() * 4; circle(ctx, x, y, s, `rgba(255,245,220,${0.35 + 0.6 * Math.abs(Math.sin(t * 1.5 + i))})`); } };
  const glowDisc = (ctx, x, y, r, rgb, a = 0.5) => { const g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, `rgba(${rgb},${a})`); g.addColorStop(1, `rgba(${rgb},0)`); ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); };

  // flat cat head. shine 0..1 lights the eyes; lid 0..1 opens them
  const catHead = (ctx, x, y, s, o = {}) => {
    const eye = o.eye || PAL.green, shine = o.shine ?? 1, rgb = H.hex(eye).join(',');
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const body = (c) => {
      ctx.fillStyle = c || o.fur || PAL.fur;
      ctx.beginPath(); ctx.moveTo(-190, -70); ctx.lineTo(-170, -270); ctx.lineTo(-40, -170); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(190, -70); ctx.lineTo(170, -270); ctx.lineTo(40, -170); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.ellipse(0, 0, 230, 195, 0, 0, Math.PI * 2); ctx.fill();
    };
    if (o.noShadow) body(null); else longShadow(ctx, body, 26, 'rgba(0,0,20,0.35)');
    ctx.fillStyle = PAL.rose; ctx.beginPath(); ctx.moveTo(-160, -120); ctx.lineTo(-155, -215); ctx.lineTo(-85, -160); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(160, -120); ctx.lineTo(155, -215); ctx.lineTo(85, -160); ctx.closePath(); ctx.fill();
    [-1, 1].forEach((d) => {
      if (shine > 0.02) glowDisc(ctx, d * 90, -30, 170, rgb, 0.55 * shine);
      ctx.fillStyle = shine > 0.02 ? H.rgba(H.mix('#11112a', eye, shine)) : '#11112a';
      ctx.beginPath(); ctx.ellipse(d * 90, -30, 62, 50, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#0c0c20'; ctx.beginPath(); ctx.ellipse(d * 90, -30, 11 + 24 * shine, 44, 0, 0, Math.PI * 2); ctx.fill();
      if (shine > 0.1) circle(ctx, d * 90 + 20, -50, 11, `rgba(255,255,255,${shine})`);
    });
    ctx.fillStyle = PAL.pink; ctx.beginPath(); ctx.moveTo(-18, 48); ctx.lineTo(18, 48); ctx.lineTo(0, 70); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.55)'; ctx.lineWidth = 6; ctx.lineCap = 'round';
    [-1, 1].forEach((d) => [[-14, -28], [8, 0], [30, 30]].forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(d * 70, 70 + a * 0.3); ctx.lineTo(d * 225, 70 + b); ctx.stroke(); }));
    ctx.restore();
  };
  // side-on cross-section of an eye, front (pupil) on the left, back (retina) on the right
  const eyeball = (ctx, cx, cy, r, o = {}) => {
    longShadow(ctx, (c) => { circle(ctx, cx, cy, r, c || PAL.white); }, 30, 'rgba(10,10,40,0.28)');
    circle(ctx, cx, cy, r - 16, '#d8f1ff');
    // retina: thick arc on the back wall
    const retk = o.retina ?? 1;
    ctx.save(); ctx.lineCap = 'round';
    if (o.tapetum > 0) { ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 34; ctx.beginPath(); const a = 1.05 * H.ease.out(o.tapetum); ctx.arc(cx, cy, r - 22, -a, a); ctx.stroke(); ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(cx, cy, r - 22, -a * 0.6, -a * 0.1); ctx.stroke(); }
    ctx.strokeStyle = PAL.rose; ctx.lineWidth = 26; ctx.beginPath(); ctx.arc(cx, cy, r - (o.tapetum > 0 ? 54 : 30), -1.05 * retk, 1.05 * retk); ctx.stroke();
    ctx.restore();
    // iris + lens at the front
    const fx = cx - r + 24;
    ctx.fillStyle = PAL.teal; rr(ctx, fx - 14, cy - r * 0.62, 34, r * 0.42, 14); ctx.fill(); rr(ctx, fx - 14, cy + r * 0.2, 34, r * 0.42, 14); ctx.fill();
    ctx.fillStyle = 'rgba(120,200,255,0.75)'; ctx.beginPath(); ctx.ellipse(fx + 54, cy, 30, r * 0.26, 0, 0, Math.PI * 2); ctx.fill();
  };
  const dots = (ctx, n, fn, col, r = 15) => { for (let i = 0; i < n; i++) { const p = fn(i); if (!p) continue; ctx.globalAlpha = p[2] ?? 1; circle(ctx, p[0], p[1], r, col); ctx.globalAlpha = 1; } };
  const beam = (ctx, x0, y0, x1, y1, wdt, col, prog = 1) => { if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog); ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke(); ctx.restore(); };
  // zoomed-in retina: a band of rod cells, then the wall behind them
  const RODX = 470;
  const rods = (ctx, t, lit) => { for (let i = 0; i < 7; i++) { const y = 560 + i * 118; const on = lit ? lit(i) : 0; longShadow(ctx, (c) => { ctx.fillStyle = c || H.rgba(H.mix('#e8607a', '#ffe066', on)); rr(ctx, RODX - 80, y - 40, 180, 80, 40); ctx.fill(); }, 12, 'rgba(10,10,40,0.2)'); circle(ctx, RODX + 60, y, 16, on > 0.5 ? PAL.orange : '#a83d55'); if (on > 0.1) glowDisc(ctx, RODX + 10, y, 130, '255,224,102', 0.5 * on); } };
  const flashlight = (ctx, x, y, a, s, on = 1) => { ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s); if (on > 0) { ctx.fillStyle = `rgba(255,240,170,${0.2 * on})`; ctx.beginPath(); ctx.moveTo(95, -42); ctx.lineTo(1500, -300); ctx.lineTo(1500, 300); ctx.lineTo(95, 42); ctx.closePath(); ctx.fill(); } ctx.fillStyle = '#555a7a'; rr(ctx, -110, -30, 150, 60, 14); ctx.fill(); ctx.fillStyle = '#80869f'; ctx.beginPath(); ctx.moveTo(40, -30); ctx.lineTo(100, -50); ctx.lineTo(100, 50); ctx.lineTo(40, 30); ctx.closePath(); ctx.fill(); ctx.fillStyle = PAL.yellow; rr(ctx, 96, -46, 14, 92, 6); ctx.fill(); ctx.restore(); };

  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#141238', '#2c2468'); stars(ctx, t, 5);
    circle(ctx, 960, 230, 66, '#fff1b8'); circle(ctx, 935, 218, 60, '#1b1846');
    ctx.fillStyle = '#1a1745'; ctx.fillRect(0, 1320, W, 700);
    ctx.fillStyle = '#25205a'; for (let i = 0; i < 9; i++) { rr(ctx, i * 124 - 10, 1160, 104, 200, 18); ctx.fill(); }
    const on = EO(t, T(1, 'flashlight') - 0.15, T(1, 'flashlight') + 0.1);
    const eyeOn = Math.max(0.12, on);
    catHead(ctx, 540, 960, 1.35, { shine: eyeOn, eye: PAL.green });
    flashlight(ctx, 120, 1560, -1.0, 1.25, on);
    headline(ctx, 'CAT EYES', 540, 330, 130, PAL.cream, pop(t, 0.2));
    const nk = pop(t, T(0, 'never') - 0.1);
    pill(ctx, 'NEVER GLOW', 540, 500, { k: nk * bump(t, T(0, 'glow')), bg: PAL.red, col: PAL.white, size: 82 });
    pill(ctx, 'IT’S YOUR LIGHT', 620, 1400, { k: pop(t, T(1, 'bouncing') - 0.1), bg: PAL.yellow, size: 64 });
  };
  S.eye = (ctx, t) => {
    sky(ctx, '#bfe9ff', '#7fc8f8');
    ctx.fillStyle = '#5faee6'; ctx.beginPath(); ctx.moveTo(0, 1500); for (let x = 0; x <= W; x += 30) ctx.lineTo(x, 1480 + Math.sin(x * 0.008) * 34); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.fill();
    const cx = 590, cy = 960, r = 400, zoom = 1 + 0.03 * EI(t, P(2).s, P(3).e);
    ctx.save(); ctx.translate(cx, cy); ctx.scale(zoom, zoom); ctx.translate(-cx, -cy);
    eyeball(ctx, cx, cy, r, { retina: EO(t, T(3, 'retina') - 0.2, T(3, 'retina') + 0.2) * 1 + 0.001 });
    const prog = EO(t, T(2, 'light') - 0.1, T(3, 'hits') + 0.15);
    beam(ctx, -40, cy, cx + r - 46, cy, 44, 'rgba(255,214,70,0.85)', prog);
    const hit = pop(t, T(3, 'hits'));
    if (hit > 0) glowDisc(ctx, cx + r - 40, cy, 200, '255,220,90', 0.7 * hit);
    ctx.restore();
    headline(ctx, 'INSIDE AN EYE', 540, 300, 104, PAL.ink, pop(t, P(2).s - 0.15));
    pill(ctx, 'PUPIL', 240, 650, { k: pop(t, T(2, 'pupil') - 0.15), bg: PAL.teal, col: PAL.white, size: 62 });
    pill(ctx, 'RETINA', 760, 1490, { k: pop(t, T(3, 'retina') - 0.15), bg: PAL.rose, col: PAL.white, size: 66 });
  };
  S.cells = (ctx, t) => {
    sky(ctx, '#ffd9b3', '#ff9e7a');
    const st = P(4).s;
    // rods across the screen, photons fall in
    for (let i = 0; i < 7; i++) { const x = 130 + i * 136, on = EO(t, st + 0.1 + i * 0.1, st + 0.3 + i * 0.1); longShadow(ctx, (c) => { ctx.fillStyle = c || H.rgba(H.mix('#e8607a', '#ffe066', on)); rr(ctx, x - 42, 620, 84, 300, 40); ctx.fill(); }, 14); if (on > 0.1) glowDisc(ctx, x, 720, 120, '255,224,102', 0.5 * on);
      const u = ph(t, st - 0.3 + i * 0.1, st + 0.2 + i * 0.1); if (u > 0 && u < 1) circle(ctx, x, 380 + u * 280, 18, PAL.yellow); }
    headline(ctx, 'TINY CELLS', 540, 300, 120, PAL.ink, pop(t, T(4, 'tiny') - 0.1));
    pill(ctx, 'CATCH THE LIGHT', 540, 450, { k: pop(t, T(4, 'catch') - 0.1), bg: PAL.yellow, size: 60 });
    // signal to the brain, which shows a little picture
    const sendT = T(5, 'send'), pr = EI(t, sendT - 0.15, T(5, 'brain'));
    for (let i = 0; i < 6; i++) { const u = (pr * 1.2 - i * 0.04); if (pr > 0 && u > 0 && u < 1) { const yy = H.lerp(930, 1290, u); circle(ctx, 540 + Math.sin(u * 9 + i) * 26, yy, 14, PAL.orange); } }
    const bk = pop(t, T(5, 'picture') - 0.2);
    if (bk > 0.01) { ctx.save(); ctx.translate(540, 1420); ctx.scale(bk * bump(t, T(5, 'brain')), bk * bump(t, T(5, 'brain')));
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.pink; [[-90, -20, 110], [40, -50, 120], [110, 40, 90], [-40, 60, 100]].forEach(([x, y, r]) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); }); }, 20);
      ctx.fillStyle = PAL.cream; rr(ctx, -95, -80, 200, 150, 18); ctx.fill();
      ctx.fillStyle = '#6f7591'; ctx.beginPath(); ctx.ellipse(10, 15, 58, 34, 0, 0, Math.PI * 2); ctx.fill(); circle(ctx, 62, -6, 22, '#6f7591'); circle(ctx, 60, -28, 13, '#6f7591'); circle(ctx, 76, -8, 4, PAL.ink); ctx.restore(); }
    pill(ctx, 'BRAIN', 830, 1250, { k: pop(t, T(5, 'brain') - 0.15), bg: PAL.purple, col: PAL.white, size: 58 });
  };
  // zoom scene shared by human/cat: rod column left, wall right
  const passers = (ctx, t, st, count, fn) => { for (let i = 0; i < count; i++) { const u = (t - st - i * 0.32); fn(i, u); } };
  S.human = (ctx, t) => {
    sky(ctx, '#ffe3c4', '#ffc38a');
    ctx.fillStyle = '#3a2746'; ctx.fillRect(800, 0, 300, HH);
    const st = T(7, 'some') - 0.15;
    rods(ctx, t, (i) => 0.2);
    passers(ctx, t, st, 9, (i, u) => { const y = 560 + (i * 3 % 7) * 118 + 59 - 59; if (u < 0) return; const x = -20 + u * 900; if (x > 860) return; const a = x > 800 ? 1 - (x - 800) / 60 : 1; ctx.globalAlpha = a; circle(ctx, x, y + 59 * (i % 2 ? 1 : -1) * 0.5, 24, '#ff7a1e'); ctx.globalAlpha = 1; });
    headline(ctx, 'YOUR EYE', 400, 300, 120, PAL.ink, pop(t, T(6, 'your') - 0.15));
    pill(ctx, 'SLIPS PAST', 470, 1420, { k: pop(t, T(7, 'slips') - 0.15), bg: PAL.orange, col: PAL.white, size: 70 });
    pill(ctx, 'GONE!', 760, 1570, { k: pop(t, T(8, 'gone') - 0.15) * bump(t, T(8, 'gone')), bg: PAL.ink, col: PAL.cream, size: 86 });
    text(ctx, 'dark', 930, 450, 46, PAL.cream, 600); text(ctx, 'back wall', 930, 505, 46, PAL.cream, 600);
  };
  S.second = (ctx, t) => {
    sky(ctx, '#2b1f7a', '#6c4bd8');
    const cx = 590, cy = 1000, r = 400;
    eyeball(ctx, cx, cy, r, { tapetum: EO(t, T(10, 'shiny') - 0.2, T(10, 'layer') + 0.1) });
    const bb = EO(t, T(11, 'called') - 0.1, T(11, 'tapetum')); beam(ctx, -40, cy, cx + r - 40, cy, 36, 'rgba(255,214,70,0.85)', EO(t, T(10, 'behind') - 0.1, T(10, 'shiny'))); beam(ctx, cx + r - 40, cy, cx + r - 200, cy - 110, 26, 'rgba(255,240,150,0.95)', bb); const sh = ph(t, T(10, 'layer'), T(11, 'lucidum') + 0.4); if (sh > 0) glowDisc(ctx, cx + r - 30, cy, 280, '255,214,70', 0.55 * Math.sin(sh * Math.PI));
    headline(ctx, 'SECOND', 540, 290, 124, PAL.yellow, pop(t, T(9, 'second') - 0.15));
    headline(ctx, 'CHANCE', 540, 420, 124, PAL.yellow, pop(t, T(9, 'chance') - 0.2));
    pill(ctx, 'SHINY LAYER', 560, 590, { k: pop(t, T(10, 'shiny') - 0.1), bg: PAL.yellow, size: 64 });
    pill(ctx, 'TAPETUM LUCIDUM', 540, 1520, { k: pop(t, T(11, 'tapetum') - 0.15), bg: PAL.cream, size: 74 });
  };
  S.mirror = (ctx, t) => {
    sky(ctx, '#0f7f8c', '#1fb6a6');
    // mirror wall with glints
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.silver; rr(ctx, 800, 460, 110, 1040, 40); ctx.fill(); }, 16, 'rgba(0,30,40,0.3)');
    ctx.fillStyle = PAL.yellow; rr(ctx, 800, 460, 34, 1040, 17); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.9)'; for (let i = 0; i < 3; i++) { const y = 560 + ((t * 300 + i * 340) % 840); ctx.save(); ctx.translate(865, y); ctx.rotate(0.5); ctx.fillRect(-26, -8, 52, 16); ctx.restore(); }
    const st = T(12, 'mirror') - 0.3;
    const caught = (i) => { const u = t - st - i * 0.42; return u > 1.22 ? EO(t, st + i * 0.42 + 1.22, st + i * 0.42 + 1.5) : 0; };
    rods(ctx, t, (i) => caught(i));
    for (let i = 0; i < 7; i++) { const u = t - st - i * 0.42; if (u < 0 || u > 1.22) continue; const y = 560 + i * 118; const x = u < 0.7 ? -20 + u * (780 / 0.7) : 760 - (u - 0.7) * (240 / 0.52); circle(ctx, x, y + 40, 24, '#fff27a'); }
    const hitK = ph(t, st + 0.6, st + 0.9); if (hitK > 0 && hitK < 1) glowDisc(ctx, 800, 960, 300, '255,255,200', 0.5 * Math.sin(hitK * Math.PI));
    headline(ctx, 'LIKE A MIRROR', 540, 300, 112, PAL.cream, pop(t, T(12, 'mirror') - 0.2));
    pill(ctx, 'BOUNCES BACK', 500, 440, { k: pop(t, T(13, 'bouncing') - 0.15), bg: PAL.yellow, size: 60 });
    pill(ctx, 'CAUGHT ON TRY 2', 460, 1560, { k: pop(t, T(13, 'through') - 0.1), bg: PAL.cream, size: 60 });
  };
  const bulb = (ctx, x, y, s, on) => { ctx.save(); ctx.translate(x, y); ctx.scale(s * on, s * on); if (on > 0.5) glowDisc(ctx, 0, -10, 120, '255,224,102', 0.55); circle(ctx, 0, -14, 46, PAL.yellow); ctx.fillStyle = '#6f7591'; rr(ctx, -22, 26, 44, 34, 8); ctx.fill(); ctx.restore(); };
  S.number = (ctx, t) => {
    sky(ctx, '#ffefb8', '#ffcf5c');
    const nk = pop(t, T(14, 'onesixth') - 0.15) * bump(t, T(14, 'onesixth'));
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 620); ctx.scale(nk, nk); longShadow(ctx, (c) => text(ctx, '1/6', 0, 0, 300, c || PAL.orange), 30, 'rgba(120,60,0,0.25)'); ctx.restore(); }
    headline(ctx, 'THE LIGHT', 540, 830, 104, PAL.ink, pop(t, T(14, 'light') - 0.15));
    const yk = pop(t, T(14, 'you') - 0.6);
    pill(ctx, 'YOU', 170, 1090, { k: pop(t, T(14, 'cat') - 0.1), bg: PAL.blue, col: PAL.white, size: 62 });
    for (let i = 0; i < 6; i++) { const col = i < 3 ? 350 + i * 130 : 350 + (i - 3) * 130; const row = i < 3 ? 1035 : 1170; bulb(ctx, col, row, 1, H.ease.back(ph(t, T(14, 'cat') + i * 0.09, T(14, 'cat') + 0.25 + i * 0.09))); }
    pill(ctx, 'CAT', 170, 1420, { k: pop(t, T(14, 'needs') - 0.1), bg: PAL.ink, col: PAL.cream, size: 62 });
    bulb(ctx, 350, 1410, 1, H.ease.back(ph(t, T(14, 'onesixth') - 0.1, T(14, 'onesixth') + 0.2)));
    catHead(ctx, 720, 1450, 0.62, { shine: 1, eye: PAL.green, noShadow: true });
  };
  S.shine = (ctx, t) => {
    const a = ph(t, P(17).s - 0.3, P(17).s - 0.05);
    if (a < 1) {
      sky(ctx, '#1b2a5c', '#27407f');
      const cx = 490, cy = 960, r = 400;
      eyeball(ctx, cx, cy, r, { tapetum: 1 });
      const st = T(15, 'whatever') - 0.1;
      const pr = EO(t, st, T(15, 'caught'));
      beam(ctx, -40, cy - 120, cx + r - 40, cy - 120, 30, 'rgba(255,214,70,0.7)', pr);
      const out = EO(t, T(16, 'shoots') - 0.15, T(16, 'eye'));
      beam(ctx, cx + r - 40, cy + 120, -40, cy + 120, 40, PAL.green, out);
      headline(ctx, 'NOT CAUGHT?', 540, 310, 112, PAL.cream, pop(t, T(15, 'whatever') - 0.1));
      pill(ctx, 'BACK OUT!', 540, 1490, { k: pop(t, T(16, 'shoots') - 0.1), bg: PAL.green, size: 72 });
    }
    if (a > 0) { ctx.save(); ctx.globalAlpha = a;
      sky(ctx, '#0f0d2e', '#1e1a55'); stars(ctx, t, 8);
      const cc = T(18, 'yellow') - 0.05, col = t >= cc ? PAL.yellow : PAL.green;
      const s = 1.5 + 0.08 * EI(t, P(17).s, P(18).e);
      catHead(ctx, 540, 960, s, { eye: col, shine: 1 });
      headline(ctx, 'THE SHINE', 540, 330, 130, PAL.cream, pop(t, T(17, 'shine') - 0.1));
      pill(ctx, 'GREEN', 300, 1460, { k: pop(t, T(18, 'green') - 0.15), bg: PAL.green, size: 76 });
      pill(ctx, 'YELLOW', 770, 1460, { k: pop(t, T(18, 'yellow') - 0.15), bg: PAL.yellow, size: 76 });
      ctx.restore(); }
  };
  S.dark = (ctx, t) => {
    ctx.fillStyle = '#05050f'; ctx.fillRect(0, 0, W, HH);
    const fade = 1 - EO(t, T(20, 'no') - 0.2, T(20, 'shine'));
    catHead(ctx, 540, 960, 1.35, { fur: '#0e0e20', eye: PAL.green, shine: fade * 0.9, noShadow: true });
    headline(ctx, 'NO LIGHT?', 540, 340, 140, PAL.cream, pop(t, T(19, 'light') - 0.2));
    pill(ctx, 'NO SHINE', 300, 1420, { k: pop(t, T(20, 'shine') - 0.15), bg: PAL.cream, size: 66 });
    pill(ctx, 'NO SIGHT', 770, 1420, { k: pop(t, T(20, 'sight') - 0.15), bg: PAL.red, col: PAL.white, size: 66 });
  };
  S.end = (ctx, t) => {
    sky(ctx, '#141238', '#3a2f8c'); stars(ctx, t, 12);
    ctx.fillStyle = '#25205a'; for (let i = 0; i < 9; i++) { rr(ctx, i * 124 - 10, 1120, 104, 340, 18); ctx.fill(); }
    ctx.fillStyle = '#1a1745'; ctx.fillRect(0, 1400, W, 600);
    const on = EO(t, T(21, 'shining') - 0.2, T(21, 'shining') + 0.1);
    catHead(ctx, 300, 900, 0.95, { eye: PAL.green, shine: 0.15 + 0.85 * on });
    catHead(ctx, 780, 1010, 0.95, { eye: PAL.yellow, shine: 0.15 + 0.85 * on, fur: '#4a3a68' });
    headline(ctx, 'EVER SEEN THIS', 540, 340, 100, PAL.cream, pop(t, T(21, 'ever') - 0.15));
    const q = pop(t, T(22, 'color') - 0.2) * bump(t, T(22, 'color'));
    pill(ctx, 'WHAT COLOR?', 540, 1470, { k: q, bg: PAL.yellow, size: 92 });
  };

  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] - WIPE / 2) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    if (next && t >= next[1] - WIPE / 2) {
      const u = H.ease.inOut(ph(t, next[1] - WIPE / 2, next[1] + WIPE / 2));
      if (u < 1) S[cur[0]](ctx, t);
      ctx.save(); ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.clip(); S[next[0]](ctx, t); ctx.restore();
      if (u > 0 && u < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.stroke(); }
    } else S[cur[0]](ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.3, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']] });
    ORDER.slice(1).forEach(([, c]) => { k.play('whoosh', c - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', c + 0.2, { f: 420, gain: 0.5 }); });
    popAt(0.2, 560, 0.9, 0, false); popAt(T(0, 'never') - 0.1, 480, 0.9, 0, false); k.play('thud', T(0, 'glow'), { f: 130, gain: 0.5 });
    k.play('tock', T(1, 'flashlight') - 0.15, { f: 1400, gain: 0.7 }); k.play('sparkle', T(1, 'flashlight'), { n: 6, gain: 0.7 }); popAt(T(1, 'bouncing') - 0.1, 700, 0.8, 0.3, false);
    popAt(T(2, 'pupil') - 0.15, 620, 0.8, -0.4, false); k.play('riser', T(2, 'light') - 0.1, { dur: 1.6, gain: 0.4 }); k.play('ding', T(3, 'hits'), { f: 'A5', gain: 0.3 }); popAt(T(3, 'retina') - 0.15, 700, 0.8, 0.3, false);
    for (let i = 0; i < 7; i++) k.play('tick', P(4).s + 0.1 + i * 0.1, { f: 3000 + i * 260, gain: 0.7, minor: true });
    popAt(T(4, 'catch') - 0.1, 800, 0.7); k.play('riser', T(5, 'send') - 0.15, { dur: 0.9, gain: 0.4 }); k.play('ding', T(5, 'brain'), { f: 'E6', gain: 0.35 }); popAt(T(5, 'picture') - 0.2, 760, 0.7);
    popAt(T(6, 'your') - 0.15, 560, 0.8, 0, false); popAt(T(7, 'slips') - 0.15, 700, 0.7); k.play('swish', T(7, 'some'), { gain: 0.6 }); k.play('error', T(8, 'gone'), { f: 'A3', gain: 0.45 }); 
    k.play('impact', T(9, 'second'), { gain: 0.7 }); popAt(T(10, 'shiny') - 0.1, 800, 0.8, 0, false); k.play('sparkle', T(10, 'layer'), { n: 8, gain: 0.8 }); popAt(T(11, 'tapetum') - 0.15, 620, 0.9, 0, false);
    k.play('ding', T(12, 'mirror'), { f: 'C6', gain: 0.35 }); for (let i = 0; i < 7; i++) k.play('tick', T(12, 'mirror') - 0.3 + i * 0.42 + 1.22, { f: 2800 + i * 200, gain: 0.7, minor: true }); popAt(T(13, 'bouncing') - 0.15, 760, 0.7); popAt(T(13, 'through') - 0.1, 900, 0.7);
    for (let i = 0; i < 6; i++) popAt(T(14, 'cat') + i * 0.09, 700 + i * 50, 0.6); k.play('impact', T(14, 'onesixth'), { gain: 1.1 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => k.play('ding', T(14, 'onesixth') + i * 0.03, { f: n, gain: 0.34 - i * 0.05 }));
    k.play('riser', T(16, 'shoots') - 0.2, { dur: 0.6, gain: 0.5 }); popAt(T(16, 'shoots') - 0.1, 800, 0.8, 0, false); k.play('sparkle', T(17, 'shine') - 0.05, { n: 8, gain: 0.8 }); popAt(T(18, 'green') - 0.15, 700, 0.8, -0.4, false); popAt(T(18, 'yellow') - 0.15, 860, 0.8, 0.4, false);
    k.play('thud', T(20, 'no'), { f: 110, gain: 0.5 }); popAt(T(19, 'light') - 0.2, 480, 0.8); popAt(T(20, 'shine') - 0.15, 520, 0.7, -0.4); popAt(T(20, 'sight') - 0.15, 440, 0.7, 0.4);
    k.play('sparkle', T(21, 'shining') - 0.1, { n: 8, gain: 0.7 }); popAt(T(22, 'color') - 0.2, 760, 0.9, 0, false); k.play('success', T(22, 'color') + 0.3, { f: 'C6', gain: 0.4 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
