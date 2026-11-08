// ================= Chalkboard Lesson, 16:9 1280x720: "Your taste buds explained in simple words" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
// One long slate, one stretch of board per scene, 1500 world px apart. The camera tracks along it between some boards
// (a chalk leader arrow is drawn on the way) and the felt eraser wipes the board at each new chapter.
// Rendering engine (slate, chalk, tray, eraser, sound scoring) carried over from the Chalkboard Lesson house build.
(function () {
  const W = 1280, HH = 720;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.48, w: {"your": 0.25, "taste": 0.57, "buds": 0.97, "die": 1.29, "every": 1.52, "ten": 1.92, "days": 2.16} },  // Your taste buds die every ten days,
    { id: 'p1', s: 2.78, e: 4.82, w: {"and": 2.78, "nobody": 3.05, "ever": 3.58, "told": 3.93, "you": 4.29, "why": 4.55} },  // and nobody ever told you why.
    { id: 'p2', s: 5.37, e: 7.73, w: {"right": 5.37, "now": 5.76, "thousands": 6.0, "of": 6.71, "tiny": 6.86, "sensors": 7.18} },  // Right now, thousands of tiny sensors
    { id: 'p3', s: 8.03, e: 9.41, w: {"are": 8.03, "tasting": 8.23, "your": 8.68, "own": 8.95, "spit": 9.14} },  // are tasting your own spit.
    { id: 'p4', s: 9.96, e: 11.01, w: {"so": 9.96, "what": 10.12, "are": 10.44, "they": 10.68} },  // So what are they,
    { id: 'p5', s: 11.31, e: 12.43, w: {"how": 11.31, "do": 11.57, "they": 11.74, "work": 12.08} },  // how do they work,
    { id: 'p6', s: 12.73, e: 14.71, w: {"and": 12.73, "what": 12.9, "about": 13.12, "that": 13.41, "tongue": 13.63, "map": 13.97, "from": 14.14, "school": 14.37} },  // and what about that tongue map from school?
    { id: 'p7', s: 15.26, e: 16.50, w: {"lets": 15.26, "start": 15.52, "with": 15.85, "the": 16.11, "map": 16.31} },  // Let's start with the map.
    { id: 'p8', s: 17.05, e: 18.30, w: {"youve": 17.05, "probably": 17.38, "seen": 17.9, "it": 18.17} },  // You've probably seen it.
    { id: 'p9', s: 18.85, e: 19.92, w: {"sweet": 18.85, "on": 19.26, "the": 19.42, "tip": 19.67} },  // Sweet on the tip,
    { id: 'p10', s: 20.22, e: 21.31, w: {"bitter": 20.22, "at": 20.65, "the": 20.8, "back": 21.02} },  // bitter at the back,
    { id: 'p11', s: 21.61, e: 23.41, w: {"sour": 21.61, "and": 21.93, "salty": 22.18, "on": 22.59, "the": 22.75, "sides": 23.0} },  // sour and salty on the sides.
    { id: 'p12', s: 23.96, e: 24.76, w: {"its": 23.96, "a": 24.26, "myth": 24.36} },  // It's a myth.
    { id: 'p13', s: 25.31, e: 26.57, w: {"in": 25.31, "nineteen": 25.48, "oh": 26.15, "one": 26.32} },  // In nineteen oh one,
    { id: 'p14', s: 26.87, e: 29.24, w: {"a": 26.87, "german": 26.94, "scientist": 27.4, "named": 28.09, "david": 28.47, "hanig": 28.85} },  // a German scientist named David Hanig
    { id: 'p15', s: 29.54, e: 32.82, w: {"found": 29.54, "that": 29.88, "some": 30.16, "spots": 30.44, "were": 30.79, "just": 31.07, "a": 31.35, "tiny": 31.42, "bit": 31.7, "more": 31.91, "sensitive": 32.19} },  // found that some spots were just a tiny bit more se
    { id: 'p16', s: 33.37, e: 35.17, w: {"then": 33.37, "in": 33.7, "nineteen": 33.86, "forty": 34.51, "two": 34.92} },  // Then in nineteen forty two,
    { id: 'p17', s: 35.47, e: 36.97, w: {"his": 35.47, "graph": 35.72, "got": 36.13, "redrawn": 36.39} },  // his graph got redrawn,
    { id: 'p18', s: 37.27, e: 38.93, w: {"and": 37.27, "people": 37.46, "read": 37.85, "it": 38.1, "the": 38.23, "wrong": 38.42, "way": 38.74} },  // and people read it the wrong way.
    { id: 'p19', s: 39.48, e: 40.28, w: {"the": 39.48, "truth": 39.78} },  // The truth?
    { id: 'p20', s: 40.83, e: 43.25, w: {"every": 40.83, "part": 41.16, "of": 41.42, "your": 41.55, "tongue": 41.81, "that": 42.2, "has": 42.46, "taste": 42.66, "buds": 42.99} },  // Every part of your tongue that has taste buds
    { id: 'p21', s: 43.55, e: 45.35, w: {"can": 43.55, "taste": 43.79, "all": 44.2, "five": 44.45, "flavors": 44.77} },  // can taste all five flavors.
    { id: 'p22', s: 45.90, e: 47.43, w: {"so": 45.9, "where": 46.04, "are": 46.39, "the": 46.6, "taste": 46.81, "buds": 47.16} },  // So where are the taste buds?
    { id: 'p23', s: 47.98, e: 49.61, w: {"stick": 47.98, "out": 48.29, "your": 48.47, "tongue": 48.71, "in": 49.07, "a": 49.19, "mirror": 49.25} },  // Stick out your tongue in a mirror.
    { id: 'p24', s: 50.16, e: 52.43, w: {"those": 50.16, "little": 50.52, "bumps": 50.97, "are": 51.33, "not": 51.55, "taste": 51.77, "buds": 52.14} },  // Those little bumps are not taste buds.
    { id: 'p25', s: 52.98, e: 54.25, w: {"theyre": 52.98, "called": 53.36, "papillae": 53.74} },  // They're called papillae,
    { id: 'p26', s: 54.55, e: 56.73, w: {"and": 54.55, "most": 54.77, "taste": 55.06, "buds": 55.42, "hide": 55.71, "inside": 56.01, "them": 56.44} },  // and most taste buds hide inside them,
    { id: 'p27', s: 57.03, e: 58.72, w: {"along": 57.03, "the": 57.4, "sides": 57.62, "of": 57.99, "each": 58.14, "bump": 58.43} },  // along the sides of each bump.
    { id: 'p28', s: 59.27, e: 61.59, w: {"an": 59.27, "adult": 59.4, "has": 59.71, "somewhere": 59.9, "between": 60.46, "two": 60.9, "thousand": 61.09} },  // An adult has somewhere between two thousand
    { id: 'p29', s: 61.89, e: 63.56, w: {"and": 61.89, "ten": 62.1, "thousand": 62.32, "taste": 62.91, "buds": 63.27} },  // and ten thousand taste buds.
    { id: 'p30', s: 64.11, e: 66.52, w: {"a": 64.11, "few": 64.19, "even": 64.41, "live": 64.72, "on": 65.02, "the": 65.17, "roof": 65.39, "of": 65.7, "your": 65.85, "mouth": 66.15} },  // A few even live on the roof of your mouth
    { id: 'p31', s: 66.82, e: 68.10, w: {"and": 66.82, "down": 67.03, "in": 67.3, "your": 67.43, "throat": 67.7} },  // and down in your throat.
    { id: 'p32', s: 68.65, e: 70.21, w: {"now": 68.65, "zoom": 68.93, "in": 69.29, "on": 69.48, "one": 69.66, "bud": 69.93} },  // Now zoom in on one bud.
    { id: 'p33', s: 70.76, e: 72.68, w: {"it": 70.76, "looks": 70.91, "a": 71.3, "bit": 71.37, "like": 71.6, "tiny": 71.99, "onion": 72.3} },  // It looks a bit like a tiny onion,
    { id: 'p34', s: 72.98, e: 75.82, w: {"packed": 72.98, "with": 73.39, "fifty": 73.66, "to": 74.0, "one": 74.13, "hundred": 74.33, "taste": 75.15, "cells": 75.48} },  // packed with fifty to one hundred fifty taste cells
    { id: 'p35', s: 76.37, e: 78.17, w: {"at": 76.37, "the": 76.5, "top": 76.69, "theres": 76.89, "a": 77.27, "little": 77.33, "opening": 77.72} },  // At the top there's a little opening,
    { id: 'p36', s: 78.47, e: 79.59, w: {"called": 78.47, "a": 78.89, "taste": 78.96, "pore": 79.31} },  // called a taste pore.
    { id: 'p37', s: 80.14, e: 82.46, w: {"when": 80.14, "you": 80.42, "eat": 80.63, "food": 80.84, "dissolves": 81.13, "in": 81.76, "your": 81.9, "spit": 82.18} },  // When you eat, food dissolves in your spit,
    { id: 'p38', s: 82.76, e: 85.00, w: {"and": 82.76, "those": 82.97, "molecules": 83.32, "slip": 83.95, "into": 84.23, "the": 84.51, "pore": 84.72} },  // and those molecules slip into the pore.
    { id: 'p39', s: 85.55, e: 88.15, w: {"each": 85.55, "taste": 85.86, "cell": 86.26, "has": 86.57, "receptors": 86.81, "on": 87.52, "its": 87.68, "tip": 87.91} },  // Each taste cell has receptors on its tip,
    { id: 'p40', s: 88.45, e: 90.45, w: {"like": 88.45, "locks": 88.72, "waiting": 89.05, "for": 89.51, "the": 89.71, "right": 89.91, "key": 90.25} },  // like locks waiting for the right key.
    { id: 'p41', s: 91.00, e: 92.61, w: {"sugar": 91.0, "fits": 91.38, "the": 91.69, "sweet": 91.92, "lock": 92.3} },  // Sugar fits the sweet lock.
    { id: 'p42', s: 93.16, e: 95.24, w: {"salt": 93.16, "slips": 93.4, "through": 93.7, "its": 94.11, "own": 94.29, "little": 94.47, "channel": 94.82} },  // Salt slips through its own little channel.
    { id: 'p43', s: 95.79, e: 96.82, w: {"when": 95.79, "a": 96.13, "key": 96.22, "fits": 96.48} },  // When a key fits,
    { id: 'p44', s: 97.12, e: 99.22, w: {"the": 97.12, "cell": 97.34, "fires": 97.63, "a": 97.99, "signal": 98.06, "down": 98.5, "nerve": 98.86} },  // the cell fires a signal down a nerve,
    { id: 'p45', s: 99.52, e: 100.94, w: {"and": 99.52, "your": 99.72, "brain": 99.99, "says": 100.33, "sweet": 100.6} },  // and your brain says, sweet!
    { id: 'p46', s: 101.49, e: 103.00, w: {"and": 101.49, "heres": 101.71, "the": 102.07, "clever": 102.28, "part": 102.71} },  // And here's the clever part.
    { id: 'p47', s: 103.55, e: 105.71, w: {"each": 103.55, "of": 103.88, "the": 104.05, "five": 104.3, "tastes": 104.63, "has": 105.13, "a": 105.38, "job": 105.46} },  // Each of the five tastes has a job.
    { id: 'p48', s: 106.26, e: 107.66, w: {"sweet": 106.26, "means": 106.7, "energy": 107.14} },  // Sweet means energy.
    { id: 'p49', s: 108.21, e: 110.72, w: {"salty": 108.21, "means": 108.62, "minerals": 109.02, "your": 109.67, "body": 109.99, "needs": 110.32} },  // Salty means minerals your body needs.
    { id: 'p50', s: 111.27, e: 113.45, w: {"sour": 111.27, "can": 111.61, "mean": 111.86, "unripe": 112.19, "or": 112.7, "spoiled": 112.86} },  // Sour can mean unripe, or spoiled.
    { id: 'p51', s: 114.00, e: 115.27, w: {"bitter": 114.0, "is": 114.47, "a": 114.63, "warning": 114.71} },  // Bitter is a warning,
    { id: 'p52', s: 115.57, e: 117.64, w: {"because": 115.57, "lots": 116.03, "of": 116.3, "poisons": 116.44, "taste": 116.91, "bitter": 117.24} },  // because lots of poisons taste bitter.
    { id: 'p53', s: 118.19, e: 119.76, w: {"and": 118.19, "umami": 118.43, "means": 118.82, "protein": 119.21} },  // And umami means protein.
    { id: 'p54', s: 120.31, e: 122.66, w: {"that": 120.31, "fifth": 120.55, "taste": 120.85, "was": 121.15, "found": 121.33, "in": 121.64, "nineteen": 121.76, "oh": 122.24, "eight": 122.36} },  // That fifth taste was found in nineteen oh eight,
    { id: 'p55', s: 122.96, e: 125.53, w: {"by": 122.96, "a": 123.1, "japanese": 123.18, "chemist": 123.77, "named": 124.28, "kikunae": 124.65, "ikeda": 125.16} },  // by a Japanese chemist named Kikunae Ikeda.
    { id: 'p56', s: 126.08, e: 128.82, w: {"he": 126.08, "wondered": 126.23, "why": 126.84, "seaweed": 127.07, "soup": 127.6, "tasted": 127.91, "so": 128.37, "rich": 128.52} },  // He wondered why seaweed soup tasted so rich,
    { id: 'p57', s: 129.12, e: 131.04, w: {"and": 129.12, "found": 129.32, "the": 129.65, "answer": 129.85, "was": 130.25, "glutamate": 130.45} },  // and found the answer was glutamate.
    { id: 'p58', s: 131.59, e: 133.50, w: {"but": 131.59, "taste": 131.81, "is": 132.18, "only": 132.33, "half": 132.62, "the": 132.91, "story": 133.13} },  // But taste is only half the story.
    { id: 'p59', s: 134.05, e: 136.21, w: {"hold": 134.05, "your": 134.36, "nose": 134.67, "and": 134.98, "eat": 135.21, "a": 135.44, "jelly": 135.52, "bean": 135.9} },  // Hold your nose and eat a jelly bean.
    { id: 'p60', s: 136.76, e: 137.97, w: {"you": 136.76, "can": 136.96, "tell": 137.16, "its": 137.43, "sweet": 137.63} },  // You can tell it's sweet,
    { id: 'p61', s: 138.27, e: 139.78, w: {"but": 138.27, "not": 138.5, "what": 138.72, "flavor": 139.02, "it": 139.48, "is": 139.63} },  // but not what flavor it is.
    { id: 'p62', s: 140.33, e: 142.66, w: {"thats": 140.33, "because": 140.67, "most": 141.15, "of": 141.42, "what": 141.56, "we": 141.84, "call": 141.97, "flavor": 142.25} },  // That's because most of what we call flavor
    { id: 'p63', s: 142.96, e: 144.46, w: {"actually": 142.96, "comes": 143.5, "from": 143.85, "smell": 144.12} },  // actually comes from smell.
    { id: 'p64', s: 145.01, e: 146.92, w: {"and": 145.01, "some": 145.23, "animals": 145.52, "put": 146.04, "us": 146.26, "to": 146.41, "shame": 146.55} },  // And some animals put us to shame.
    { id: 'p65', s: 147.47, e: 151.63, w: {"a": 147.47, "catfish": 147.54, "can": 148.05, "have": 148.27, "up": 148.57, "to": 148.71, "one": 148.86, "hundred": 149.08, "seventy": 149.59, "five": 150.1, "thousand": 150.39, "taste": 150.97, "buds": 151.34} },  // A catfish can have up to one hundred seventy five 
    { id: 'p66', s: 151.93, e: 153.13, w: {"all": 151.93, "over": 152.19, "its": 152.53, "body": 152.79} },  // all over its body.
    { id: 'p67', s: 153.68, e: 155.39, w: {"its": 153.68, "basically": 153.87, "a": 154.44, "swimming": 154.5, "tongue": 155.01} },  // It's basically a swimming tongue.
    { id: 'p68', s: 155.94, e: 157.24, w: {"now": 155.94, "back": 156.17, "to": 156.48, "that": 156.63, "hook": 156.94} },  // Now, back to that hook.
    { id: 'p69', s: 157.79, e: 160.18, w: {"your": 157.79, "taste": 158.07, "cells": 158.42, "work": 158.78, "in": 159.06, "a": 159.2, "wet": 159.27, "rough": 159.48, "place": 159.83} },  // Your taste cells work in a wet, rough place,
    { id: 'p70', s: 160.48, e: 162.41, w: {"getting": 160.48, "scraped": 160.98, "by": 161.48, "crunchy": 161.62, "food": 162.12} },  // getting scraped by crunchy food,
    { id: 'p71', s: 162.71, e: 164.16, w: {"and": 162.71, "burned": 162.95, "by": 163.44, "hot": 163.6, "soup": 163.84} },  // and burned by hot soup.
    { id: 'p72', s: 164.71, e: 166.45, w: {"so": 164.71, "your": 164.87, "body": 165.19, "replaces": 165.5, "them": 166.14} },  // So your body replaces them,
    { id: 'p73', s: 166.75, e: 168.14, w: {"about": 166.75, "every": 167.16, "ten": 167.57, "days": 167.81} },  // about every ten days.
    { id: 'p74', s: 168.69, e: 170.07, w: {"thats": 168.69, "why": 169.02, "a": 169.22, "burned": 169.28, "tongue": 169.68} },  // That's why a burned tongue
    { id: 'p75', s: 170.37, e: 172.31, w: {"feels": 170.37, "normal": 170.81, "again": 171.34, "so": 171.78, "fast": 171.96} },  // feels normal again so fast.
    { id: 'p76', s: 172.86, e: 174.03, w: {"every": 172.86, "bite": 173.23, "you": 173.52, "take": 173.74} },  // Every bite you take,
    { id: 'p77', s: 174.33, e: 176.31, w: {"thousands": 174.33, "of": 174.95, "brand": 175.08, "new": 175.42, "taste": 175.63, "cells": 175.97} },  // thousands of brand new taste cells
    { id: 'p78', s: 176.61, e: 177.73, w: {"are": 176.61, "on": 176.91, "the": 177.12, "job": 177.42} },  // are on the job.
    { id: 'p79', s: 178.28, e: 180.98, w: {"next": 178.28, "time": 178.6, "why": 178.93, "do": 179.18, "some": 179.34, "people": 179.67, "get": 180.16, "carsick": 180.41} },  // Next time, why do some people get carsick,
    { id: 'p80', s: 181.28, e: 183.03, w: {"while": 181.28, "others": 181.62, "feel": 182.02, "totally": 182.29, "fine": 182.76} },  // while others feel totally fine?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;

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



  // ---------- drawings (polylines in board coords, 1280x720) ----------
  const lerp = (a, b, u) => a + (b - a) * u;
  const S = (i) => B[i].s, E = (i) => B[i].e, F = (i, f) => B[i].s + (B[i].e - B[i].s) * f;
  // tongue seen from above: rounded tip at the bottom, wide root at the top, a groove down the middle
  const tongueTop = (x, y, s) => [
    [[x - 0.55 * s, y - 0.75 * s], ...cubic([x - 0.55 * s, y - 0.75 * s], [x - 0.68 * s, y + 0.2 * s], [x - 0.5 * s, y + 0.85 * s], [x, y + 0.88 * s], 30).slice(1),
      ...cubic([x, y + 0.88 * s], [x + 0.5 * s, y + 0.85 * s], [x + 0.68 * s, y + 0.2 * s], [x + 0.55 * s, y - 0.75 * s], 30).slice(1)],
    quad([x - 0.8 * s, y - 0.82 * s], [x, y - 0.6 * s], [x + 0.8 * s, y - 0.82 * s], 24),
    quad([x, y - 0.55 * s], [x + 0.03 * s, y - 0.1 * s], [x, y + 0.35 * s], 16),
  ];
  // speckles on a tongue (seeded)
  const speckles = (x, y, s, n, seed) => { const r = H.rng(seed), o = []; while (o.length < n) { const u = r.range(-0.45, 0.45), v = r.range(-0.6, 0.75); const half = 0.5 * (1 - Math.pow(Math.max(0, v - 0.2) / 0.7, 2)); if (Math.abs(u) < half && Math.abs(u) > 0.04) o.push([x + u * s, y + v * s]); } return o; };
  const face = (x, y, r, mood) => {
    const o = [circ(x, y, r, r * 1.05, -1.4, 4.9)];
    o.push(circ(x - r * 0.35, y - r * 0.2, r * 0.08, r * 0.08), circ(x + r * 0.35, y - r * 0.2, r * 0.08, r * 0.08));
    if (mood === 'tongue') { o.push([[x - r * 0.38, y + r * 0.35], [x + r * 0.38, y + r * 0.35]]); o.push(cubic([x - r * 0.24, y + r * 0.35], [x - r * 0.28, y + r * 0.95], [x + r * 0.28, y + r * 0.95], [x + r * 0.24, y + r * 0.35], 18)); o.push([[x, y + r * 0.42], [x, y + r * 0.66]]); }
    else if (mood === 'yuck') { o.push(quad([x - r * 0.45, y + r * 0.5], [x, y + r * 0.25], [x + r * 0.45, y + r * 0.5], 12)); }
    else o.push(quad([x - r * 0.5, y + r * 0.25], [x, y + r * 0.85], [x + r * 0.5, y + r * 0.25], 14));
    return o;
  };
  const bowl = (x, y, s) => [[[x - s, y], [x + s, y]], cubic([x - s, y], [x - s * 0.9, y + s * 0.85], [x + s * 0.9, y + s * 0.85], [x + s, y], 24)];
  const steam = (x, y, s) => [-1, 0, 1].map((k) => cubic([x + k * s * 0.4, y], [x + k * s * 0.4 - s * 0.25, y - s * 0.4], [x + k * s * 0.4 + s * 0.25, y - s * 0.7], [x + k * s * 0.4, y - s * 1.1], 20));
  // a profile facing left: forehead, bridge, nose tip, lip, chin
  const nose = (x, y, s) => [
    cubic([x + 0.1 * s, y - 1.25 * s], [x - 0.15 * s, y - 1.1 * s], [x - 0.12 * s, y - 0.75 * s], [x - 0.15 * s, y - 0.55 * s], 20),
    cubic([x - 0.15 * s, y - 0.55 * s], [x - 0.3 * s, y - 0.25 * s], [x - 0.68 * s, y + 0.08 * s], [x - 0.55 * s, y + 0.2 * s], 20),
    cubic([x - 0.55 * s, y + 0.2 * s], [x - 0.4 * s, y + 0.32 * s], [x - 0.3 * s, y + 0.24 * s], [x - 0.2 * s, y + 0.28 * s], 14),
    quad([x - 0.2 * s, y + 0.28 * s], [x - 0.4 * s, y + 0.46 * s], [x - 0.26 * s, y + 0.6 * s], 10),
    quad([x - 0.26 * s, y + 0.6 * s], [x - 0.42 * s, y + 0.74 * s], [x - 0.22 * s, y + 0.88 * s], 10),
    cubic([x - 0.22 * s, y + 0.88 * s], [x - 0.35 * s, y + 1.12 * s], [x - 0.18 * s, y + 1.28 * s], [x + 0.1 * s, y + 1.25 * s], 16),
  ];
  // head cut in half, facing left: outline, nasal roof, palate, tongue, throat
  const headCut = (x, y, s) => ({
    out: [cubic([x + 0.9 * s, y + 1.3 * s], [x + 1.2 * s, y - 0.2 * s], [x + 0.8 * s, y - 1.25 * s], [x - 0.05 * s, y - 1.2 * s], 34),
      cubic([x - 0.05 * s, y - 1.2 * s], [x - 0.6 * s, y - 1.15 * s], [x - 0.7 * s, y - 0.6 * s], [x - 0.72 * s, y - 0.3 * s], 22),
      cubic([x - 0.72 * s, y - 0.3 * s], [x - 0.95 * s, y - 0.1 * s], [x - 0.9 * s, y + 0.05 * s], [x - 0.75 * s, y + 0.1 * s], 14),
      cubic([x - 0.75 * s, y + 0.1 * s], [x - 0.8 * s, y + 0.25 * s], [x - 0.75 * s, y + 0.4 * s], [x - 0.68 * s, y + 0.45 * s], 10),
      cubic([x - 0.68 * s, y + 0.55 * s], [x - 0.75 * s, y + 0.75 * s], [x - 0.6 * s, y + 0.95 * s], [x - 0.2 * s, y + 0.95 * s], 16),
      quad([x - 0.2 * s, y + 0.95 * s], [x + 0.05 * s, y + 1.0 * s], [x + 0.15 * s, y + 1.3 * s], 10)],
    palate: quad([x - 0.65 * s, y + 0.3 * s], [x - 0.1 * s, y + 0.15 * s], [x + 0.3 * s, y + 0.35 * s], 20),
    tongue: [cubic([x - 0.62 * s, y + 0.5 * s], [x - 0.3 * s, y + 0.32 * s], [x + 0.2 * s, y + 0.35 * s], [x + 0.32 * s, y + 0.75 * s], 24), quad([x - 0.62 * s, y + 0.5 * s], [x - 0.2 * s, y + 0.75 * s], [x + 0.1 * s, y + 0.95 * s], 16)],
    throat: [[[x + 0.4 * s, y + 0.4 * s], [x + 0.42 * s, y + 1.3 * s]], [[x + 0.62 * s, y + 0.3 * s], [x + 0.64 * s, y + 1.3 * s]]],
  });
  // one bump (papilla) in cut-away: a mushroom with a moat, buds along its walls
  const papilla = (x, y, s) => [
    [[x - 1.6 * s, y], [x - 1.05 * s, y], ...cubic([x - 1.05 * s, y], [x - 0.95 * s, y + 0.5 * s], [x - 0.75 * s, y + 0.55 * s], [x - 0.7 * s, y + 0.1 * s], 14).slice(1),
      ...cubic([x - 0.7 * s, y + 0.1 * s], [x - 0.75 * s, y - 0.6 * s], [x + 0.75 * s, y - 0.6 * s], [x + 0.7 * s, y + 0.1 * s], 26).slice(1),
      ...cubic([x + 0.7 * s, y + 0.1 * s], [x + 0.75 * s, y + 0.55 * s], [x + 0.95 * s, y + 0.5 * s], [x + 1.05 * s, y], 14).slice(1), [x + 1.6 * s, y]],
  ];
  const budSmall = (x, y, s, rot) => xf([circ(x, y, s * 0.32, s * 0.5)][0], 0, 0, rot, x, y);
  // a taste bud: an onion of long cells with a pore on top
  const bud = (x, y, s) => {
    const o = [];
    o.push([...cubic([x - 0.12 * s, y - 1.0 * s], [x - 0.9 * s, y - 0.6 * s], [x - 0.95 * s, y + 0.8 * s], [x, y + 0.95 * s], 30), ...cubic([x, y + 0.95 * s], [x + 0.95 * s, y + 0.8 * s], [x + 0.9 * s, y - 0.6 * s], [x + 0.12 * s, y - 1.0 * s], 30).slice(1)]);
    [-0.62, -0.36, -0.12, 0.12, 0.36, 0.62].forEach((k) => o.push(cubic([x + k * 0.15 * s, y - 0.92 * s], [x + k * 1.05 * s, y - 0.4 * s], [x + k * 1.05 * s, y + 0.4 * s], [x + k * 0.6 * s, y + 0.88 * s], 22)));
    return o;
  };
  const hairs = (x, y, s) => [-0.08, 0, 0.08].map((k) => [[x + k * s, y - 0.92 * s], [x + k * 1.6 * s, y - 1.12 * s]]);
  const lock = (x, y, s) => [rrect(x - s * 0.5, y - s * 0.35, s, s * 0.85, 10), circ(x, y - s * 0.35, s * 0.3, s * 0.38, Math.PI, Math.PI * 2), circ(x, y + s * 0.02, s * 0.09, s * 0.09), [[x, y + s * 0.1], [x, y + s * 0.3]]];
  const key = (x, y, s) => [circ(x - s * 0.5, y, s * 0.2, s * 0.2), [[x - s * 0.3, y], [x + s * 0.5, y]], [[x + s * 0.3, y], [x + s * 0.3, y + s * 0.18]], [[x + s * 0.48, y], [x + s * 0.48, y + s * 0.22]]];
  const hexMol = (x, y, r) => [circ(x, y, r, r, Math.PI / 6, Math.PI / 6 + Math.PI * 2, 6)];
  const brain = (x, y, s) => {
    const o = [];
    const outl = []; for (let i = 0; i <= 80; i++) { const a = Math.PI * 2 * i / 80, w = 1 + 0.06 * Math.sin(a * 9); outl.push([x + Math.cos(a) * s * w, y + Math.sin(a) * s * 0.72 * w]); }
    o.push(outl, quad([x, y - 0.7 * s], [x - 0.08 * s, y], [x + 0.05 * s, y + 0.55 * s], 14));
    o.push(cubic([x - 0.8 * s, y - 0.1 * s], [x - 0.6 * s, y - 0.4 * s], [x - 0.35 * s, y + 0.1 * s], [x - 0.15 * s, y - 0.3 * s], 18), cubic([x + 0.2 * s, y + 0.2 * s], [x + 0.4 * s, y - 0.3 * s], [x + 0.6 * s, y + 0.2 * s], [x + 0.85 * s, y - 0.1 * s], 18));
    o.push(quad([x - 0.6 * s, y + 0.35 * s], [x - 0.4 * s, y + 0.15 * s], [x - 0.2 * s, y + 0.4 * s], 10), quad([x + 0.25 * s, y - 0.45 * s], [x + 0.45 * s, y - 0.3 * s], [x + 0.6 * s, y - 0.5 * s], 10));
    return o;
  };
  const battery = (x, y, s) => [rrect(x - s * 0.6, y - s * 0.3, s * 1.2, s * 0.6, 10), rrect(x + s * 0.6, y - s * 0.12, s * 0.12, s * 0.24, 4), [[x - s * 0.1, y - s * 0.2], [x - s * 0.22, y + s * 0.03], [x + s * 0.08, y - s * 0.03], [x - s * 0.04, y + s * 0.2]]];
  const shaker = (x, y, s) => [[[x - s * 0.35, y + s * 0.6], [x - s * 0.28, y - s * 0.25], [x + s * 0.28, y - s * 0.25], [x + s * 0.35, y + s * 0.6], [x - s * 0.35, y + s * 0.6]], circ(x, y - s * 0.25, s * 0.28, s * 0.28, Math.PI, Math.PI * 2)];
  const lemon = (x, y, s) => { const o = []; for (let i = 0; i <= 60; i++) { const a = Math.PI * 2 * i / 60, c = Math.cos(a); o.push([x + c * s * (1 + 0.12 * Math.pow(Math.abs(c), 8)), y + Math.sin(a) * s * 0.68]); } return [o, circ(x - s * 0.15, y - s * 0.15, s * 0.15, s * 0.08, 3.6, 5.2)]; };
  const bottle = (x, y, s) => [[[x - s * 0.15, y - s * 0.9], [x - s * 0.15, y - s * 0.55], [x - s * 0.45, y - s * 0.3], [x - s * 0.45, y + s * 0.8], [x + s * 0.45, y + s * 0.8], [x + s * 0.45, y - s * 0.3], [x + s * 0.15, y - s * 0.55], [x + s * 0.15, y - s * 0.9], [x - s * 0.15, y - s * 0.9]], [[x - s * 0.22, y - s * 0.9], [x + s * 0.22, y - s * 0.9]]];
  const warnTri = (x, y, s) => [[[x, y - s * 0.6], [x + s * 0.65, y + s * 0.5], [x - s * 0.65, y + s * 0.5], [x, y - s * 0.6]], [[x, y - s * 0.22], [x, y + s * 0.15]]];
  const drumstick = (x, y, s) => [cubic([x - s * 0.1, y + s * 0.2], [x - s * 0.9, y + s * 0.2], [x - s * 0.9, y - s * 0.7], [x - s * 0.1, y - s * 0.55], 24), cubic([x - s * 0.1, y - s * 0.55], [x + s * 0.2, y - s * 0.45], [x + s * 0.2, y + s * 0.1], [x - s * 0.1, y + s * 0.2], 14), [[x + s * 0.12, y - s * 0.22], [x + s * 0.55, y - s * 0.05]], circ(x + s * 0.62, y - s * 0.12, s * 0.09, s * 0.09), circ(x + s * 0.62, y + s * 0.05, s * 0.09, s * 0.09)];
  const kelp = (x, y, s) => [cubic([x, y], [x - s * 0.3, y - s * 0.4], [x + s * 0.3, y - s * 0.7], [x, y - s * 1.1], 24), cubic([x + s * 0.18, y], [x - s * 0.1, y - s * 0.4], [x + s * 0.5, y - s * 0.7], [x + s * 0.2, y - s * 1.05], 24)];
  const bean = (x, y, s) => [[...cubic([x - s, y], [x - s, y - s * 0.75], [x - s * 0.1, y - s * 0.6], [x, y - s * 0.45], 18), ...cubic([x, y - s * 0.45], [x + s * 0.1, y - s * 0.6], [x + s, y - s * 0.75], [x + s, y], 18).slice(1), ...cubic([x + s, y], [x + s, y + s * 0.6], [x - s, y + s * 0.6], [x - s, y], 24).slice(1)]];
  const clip = (x, y, s) => [rrect(x - s * 0.18, y - s * 0.7, s * 0.36, s * 0.9, 6), [[x, y - s * 0.7], [x, y + s * 0.2]], circ(x, y - s * 0.35, s * 0.06, s * 0.06)];
  const catfish = (x, y, s) => [
    [...cubic([x - s, y], [x - s * 0.9, y - s * 0.38], [x - s * 0.2, y - s * 0.42], [x + s * 0.4, y - s * 0.25], 26), ...cubic([x + s * 0.4, y - s * 0.25], [x + s * 0.8, y - s * 0.15], [x + s, y - s * 0.12], [x + s * 1.15, y - s * 0.02], 14).slice(1)],
    [...cubic([x - s, y], [x - s * 0.9, y + s * 0.3], [x - s * 0.2, y + s * 0.32], [x + s * 0.4, y + s * 0.18], 26), ...cubic([x + s * 0.4, y + s * 0.18], [x + s * 0.8, y + s * 0.1], [x + s, y + s * 0.06], [x + s * 1.15, y + s * 0.02], 14).slice(1)],
    [[x + s * 1.15, y], [x + s * 1.5, y - s * 0.35], [x + s * 1.4, y], [x + s * 1.5, y + s * 0.35], [x + s * 1.15, y]],
    quad([x - s * 0.2, y - s * 0.4], [x - s * 0.05, y - s * 0.75], [x + s * 0.12, y - s * 0.34], 12),
    quad([x - s * 0.95, y + s * 0.05], [x - s * 1.4, y + s * 0.15], [x - s * 1.6, y + s * 0.5], 14), quad([x - s * 0.95, y - s * 0.05], [x - s * 1.45, y - s * 0.2], [x - s * 1.65, y - s * 0.05], 14),
    quad([x - s * 0.85, y + s * 0.2], [x - s * 1.0, y + s * 0.5], [x - s * 1.2, y + s * 0.65], 12), quad([x - s * 0.75, y + s * 0.22], [x - s * 0.8, y + s * 0.55], [x - s * 0.95, y + s * 0.72], 12),
    circ(x - s * 0.72, y - s * 0.12, s * 0.05, s * 0.05),
  ];
  const chip = (x, y, s) => [[[x - s, y + s * 0.1], [x - s * 0.5, y - s * 0.6], [x + s * 0.3, y - s * 0.5], [x + s, y - s * 0.2], [x + s * 0.6, y + s * 0.5], [x - s * 0.3, y + s * 0.55], [x - s, y + s * 0.1]]];
  const flame = (x, y, s) => [[[x, y + s * 0.5], ...cubic([x, y + s * 0.5], [x - s * 0.6, y + s * 0.45], [x - s * 0.4, y - s * 0.2], [x, y - s * 0.7], 18).slice(1), ...cubic([x, y - s * 0.7], [x + s * 0.1, y - s * 0.2], [x + s * 0.6, y], [x, y + s * 0.5], 18).slice(1)]];
  const calendar = (x, y, s) => { const o = [rrect(x - s, y - s * 0.8, s * 2, s * 1.6, 10), [[x - s, y - s * 0.45], [x + s, y - s * 0.45]], [[x - s * 0.55, y - s * 0.95], [x - s * 0.55, y - s * 0.7]], [[x + s * 0.55, y - s * 0.95], [x + s * 0.55, y - s * 0.7]]]; return o; };
  const checkMark = (x, y, s) => [[[x - s * 0.5, y], [x - s * 0.15, y + s * 0.4], [x + s * 0.6, y - s * 0.5]]];
  const car = (x, y, s) => [[[x - s, y + s * 0.2], [x - s, y - s * 0.15], [x - s * 0.55, y - s * 0.2], [x - s * 0.3, y - s * 0.55], [x + s * 0.4, y - s * 0.55], [x + s * 0.65, y - s * 0.2], [x + s, y - s * 0.12], [x + s, y + s * 0.2], [x - s, y + s * 0.2]], circ(x - s * 0.55, y + s * 0.22, s * 0.2, s * 0.2), circ(x + s * 0.55, y + s * 0.22, s * 0.2, s * 0.2), [[x - s * 0.25, y - s * 0.5], [x - s * 0.1, y - s * 0.22]], [[x + s * 0.12, y - s * 0.5], [x + s * 0.12, y - s * 0.22]]];
  const wavy = (x, y, w, amp, seed = 0) => { const o = []; for (let i = 0; i <= 30; i++) o.push([x + w * i / 30, y + Math.sin(i * 0.9 + seed) * amp]); return o; };
  const WD = 1500; // world px between boards
  const BXc = (b) => b * WD;
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

  // ---------- the story: one builder per board; only nearby boards are built each frame ----------
  const BOARDS = [];
  const board = (i0, i1, fn) => BOARDS.push({ i0, i1, fn, b: BOARDS.length });
  const chapter = (D, s, a) => D.text(s, 70, 88, 36, 'label', 'acc4', a, a + 0.3, { align: 'left' });

  // ===== chapter 0: hook =====
  board(0, 1, (D, t) => { // taste buds die every ten days
    D.many(tongueTop(330, 385, 270), 'acc2', 7, S(0), T(0, 'buds') + 0.2);
    speckles(330, 385, 270, 34, 5).forEach(([x, y], i) => D.dot(x, y, 5, 'ink', T(0, 'buds') + i * 0.012));
    D.text('taste buds', 330, 110, 60, 'title', 'ink', T(0, 'taste') - 0.1, T(0, 'buds') + 0.25);
    D.many(calendar(870, 270, 150), 'ink', 6, T(0, 'die') - 0.15, T(0, 'every'));
    D.text('10', 870, 360, 150, 'num', 'acc1', T(0, 'ten') - 0.1, T(0, 'ten') + 0.2);
    D.text('days', 870, 450, 60, 'label', 'acc1', T(0, 'days') - 0.1, T(0, 'days') + 0.2);
    D.text('why?', 870, 590, 110, 'title', 'acc2', T(1, 'why') - 0.12, T(1, 'why') + 0.25, { rot: -0.03 });
    D.line([[740, 610], [1000, 600]], 'acc2', 7, T(1, 'why') + 0.25, E(1), { hit: true });
  });
  board(2, 3, (D, t) => { // thousands of tiny sensors tasting spit
    D.many(face(400, 330, 190, 'tongue'), 'ink', 7, S(2), T(2, 'thousands'));
    speckles(400, 488, 80, 14, 9).forEach(([x, y], i) => D.dot(x, y, 4, 'acc2', T(2, 'thousands') + i * 0.03));
    D.text('thousands', 900, 220, 96, 'title', 'acc1', T(2, 'thousands') - 0.1, T(2, 'of'));
    D.text('of tiny sensors', 900, 310, 60, 'label', 'ink', T(2, 'tiny') - 0.1, T(2, 'sensors') + 0.3);
    D.many([[[900, 410], ...circ(900, 500, 50, 50, -0.55, Math.PI + 0.55, 24), [900, 410]]], 'acc4', 6, T(3, 'tasting'), T(3, 'spit'));
    D.line(circ(885, 505, 16, 16, 2.2, 3.6, 8), 'acc4', 4, T(3, 'spit'), T(3, 'spit') + 0.1);
    D.text('spit!', 1040, 525, 72, 'title', 'acc4', T(3, 'spit') - 0.1, T(3, 'spit') + 0.25);
  });
  board(4, 6, (D, t) => { // three questions
    D.text('1. what are they?', 200, 210, 72, 'title', 'ink', S(4) - 0.05, E(4), { align: 'left' });
    D.text('2. how do they work?', 200, 350, 72, 'title', 'acc1', S(5) - 0.05, E(5), { align: 'left' });
    D.text('3. the tongue map?', 200, 490, 72, 'title', 'acc2', T(6, 'tongue') - 0.15, T(6, 'school'), { align: 'left' });
    D.many(tongueTop(1060, 470, 150), 'acc2', 5, T(6, 'map') - 0.1, E(6));
  });
  // ===== chapter 1: the map myth =====
  board(7, 12, (D, t) => { // the classic tongue map, then MYTH
    chapter(D, 'part 1: the tongue map', S(7) - 0.1);
    const X = 640, Y = 380, s = 255;
    D.many(tongueTop(X, Y, s), 'ink', 7, S(7), T(7, 'map') + 0.2);
    D.line([[X - 0.5 * s, Y - 0.35 * s], [X + 0.5 * s, Y - 0.35 * s]], 'ink', 4, S(8), F(8, 0.5));
    D.line([[X - 0.32 * s, Y + 0.45 * s], [X + 0.32 * s, Y + 0.45 * s]], 'ink', 4, F(8, 0.4), E(8));
    D.text('sweet', X, Y + 0.7 * s, 54, 'title', 'acc2', T(9, 'sweet') - 0.1, T(9, 'tip'));
    D.text('bitter', X, Y - 0.52 * s, 54, 'title', 'acc3', T(10, 'bitter') - 0.1, T(10, 'back'));
    D.text('salty', X - 0.75 * s, Y - 0.05 * s, 50, 'title', 'ink', T(11, 'salty') - 0.1, T(11, 'salty') + 0.3, { align: 'right' });
    D.text('sour', X + 0.75 * s, Y - 0.05 * s, 50, 'title', 'acc1', T(11, 'sour') - 0.1, T(11, 'sour') + 0.3, { align: 'left' });
    D.text('salty', X - 0.75 * s, Y + 0.25 * s, 50, 'title', 'ink', T(11, 'sides') - 0.1, T(11, 'sides') + 0.2, { align: 'right' });
    D.text('sour', X + 0.75 * s, Y + 0.25 * s, 50, 'title', 'acc1', T(11, 'sides') - 0.1, T(11, 'sides') + 0.2, { align: 'left' });
    D.line([[X - 260, Y - 220], [X + 270, Y + 230]], 'acc2', 12, T(12, 'myth') - 0.15, T(12, 'myth') + 0.05, { hit: true });
    D.line([[X + 260, Y - 220], [X - 270, Y + 230]], 'acc2', 12, T(12, 'myth') + 0.05, T(12, 'myth') + 0.25);
    D.text('MYTH!', 1080, 200, 110, 'title', 'acc2', T(12, 'myth') - 0.1, T(12, 'myth') + 0.3, { rot: -0.06 });
  });
  board(13, 15, (D, t) => { // 1901, Hänig's tiny differences
    D.text('1901', 260, 200, 130, 'num', 'acc1', T(13, 'nineteen') - 0.1, T(13, 'one') + 0.2);
    D.text('David Hänig', 260, 300, 60, 'label', 'ink', T(14, 'david') - 0.1, T(14, 'hanig') + 0.3);
    D.text('Germany', 260, 370, 46, 'label', 'acc4', T(14, 'german') - 0.1, T(14, 'scientist'));
    const ox = 600, oy = 540;
    D.line([[ox, oy], [ox + 580, oy]], 'ink', 6, S(15), T(15, 'some'));
    D.line([[ox, oy], [ox, oy - 330]], 'ink', 6, T(15, 'found'), T(15, 'that'));
    D.text('tip', ox + 40, oy + 50, 40, 'label', 'ink', T(15, 'some'), T(15, 'spots'), { align: 'left' });
    D.text('back', ox + 560, oy + 50, 40, 'label', 'ink', T(15, 'spots'), T(15, 'were'), { align: 'right' });
    D.line(cubic([ox + 20, oy - 190], [ox + 200, oy - 210], [ox + 380, oy - 175], [ox + 560, oy - 195], 30), 'acc1', 7, T(15, 'spots'), T(15, 'tiny'));
    D.text('tiny bit', ox + 290, oy - 260, 64, 'title', 'acc2', T(15, 'tiny') - 0.1, T(15, 'bit') + 0.2);
    D.text('more sensitive', ox + 290, oy - 90, 46, 'label', 'ink', T(15, 'more') - 0.1, E(15));
  });
  board(16, 18, (D, t) => { // 1942 redraw
    D.text('1942', 260, 200, 130, 'num', 'acc1', T(16, 'nineteen') - 0.1, T(16, 'two') + 0.2);
    D.text('graph redrawn', 260, 300, 56, 'label', 'ink', T(17, 'graph') - 0.1, T(17, 'redrawn') + 0.3);
    const ox = 600, oy = 560;
    D.line([[ox, oy], [ox + 580, oy]], 'ink', 6, S(17), T(17, 'graph'));
    D.line([[ox, oy], [ox, oy - 400]], 'ink', 6, T(17, 'graph'), T(17, 'got'));
    D.line(cubic([ox + 20, oy - 330], [ox + 180, oy - 30], [ox + 360, oy - 380], [ox + 560, oy - 60], 40), 'acc2', 8, T(17, 'redrawn') - 0.1, E(17) + 0.2);
    D.text('people read it', 260, 450, 54, 'label', 'ink', T(18, 'people') - 0.1, T(18, 'it'));
    D.text('WRONG', 260, 545, 96, 'title', 'acc2', T(18, 'wrong') - 0.1, T(18, 'way') + 0.2, { rot: -0.04 });
  });
  board(19, 21, (D, t) => { // the truth: all five everywhere
    D.text('the truth', 640, 120, 70, 'title', 'acc1', S(19) - 0.05, E(19));
    const X = 640, Y = 395, s = 255;
    D.many(tongueTop(X, Y, s), 'ink', 7, S(20), T(20, 'tongue') + 0.3);
    const zones = [[X, Y - 0.45 * s], [X - 0.28 * s, Y + 0.05 * s], [X + 0.28 * s, Y + 0.05 * s], [X, Y + 0.55 * s]];
    const cols = ['acc2', 'acc1', 'ink', 'acc3', 'acc4'];
    zones.forEach(([zx, zy], zi) => cols.forEach((c, k) => { const a = (k - 2) * 0.5, r = 34; D.dot(zx + Math.cos(a * 2.5) * r * (k === 2 ? 0 : 1), zy + Math.sin(a * 2.5) * r * (k === 2 ? 0 : 1), 9, c, T(21, 'all') + zi * 0.12 + k * 0.03); }));
    D.text('all 5', 1080, 300, 110, 'num', 'acc1', T(21, 'all') - 0.1, T(21, 'five') + 0.25);
    D.text('everywhere', 1080, 390, 54, 'label', 'ink', T(21, 'five') + 0.1, E(21));
    ['sweet', 'salty', 'sour', 'bitter', 'umami'].forEach((s2, k) => D.text(s2, 170, 230 + k * 70, 44, 'label', cols[k], T(21, 'flavors') - 0.1 + k * 0.1, T(21, 'flavors') + 0.1 + k * 0.1));
  });
  // ===== chapter 2: where they live =====
  board(22, 24, (D, t) => { // mirror: bumps are not buds
    chapter(D, 'part 2: where taste buds live', S(22) - 0.1);
    D.many([circ(420, 380, 250, 250)], 'acc4', 6, S(22), T(22, 'taste'));
    D.many(face(420, 360, 160, 'tongue'), 'ink', 7, S(23), T(23, 'tongue') + 0.3);
    D.text('mirror', 420, 660 - 30, 44, 'label', 'acc4', T(23, 'mirror') - 0.1, E(23));
    speckles(420, 495, 70, 12, 3).forEach(([x, y], i) => D.dot(x, y, 4, 'acc1', T(24, 'bumps') - 0.1 + i * 0.02));
    D.text('bumps', 950, 260, 90, 'title', 'acc1', T(24, 'bumps') - 0.1, T(24, 'bumps') + 0.3);
    D.text('NOT', 950, 390, 110, 'title', 'acc2', T(24, 'not') - 0.1, T(24, 'not') + 0.2, { rot: -0.03 });
    D.text('taste buds', 950, 480, 66, 'label', 'ink', T(24, 'taste') - 0.1, T(24, 'buds') + 0.2);
    arrow(D, quad([830, 240], [700, 300], [560, 470], 16), 'acc1', 5, T(24, 'bumps'), T(24, 'are'));
  });
  board(25, 27, (D, t) => { // papilla cut-away with buds in its walls
    D.text('papillae', 640, 150, 100, 'title', 'acc1', T(25, 'called') - 0.1, T(25, 'papillae') + 0.4, { rot: -0.015 });
    const X = 640, Y = 470, s = 330;
    D.many(papilla(X, Y, s), 'ink', 7, S(25) - 0.1, T(25, 'papillae') + 0.2);
    [[-0.78, 0.05, -0.15], [-0.8, 0.3, 0.05], [0.78, 0.05, 0.15], [0.8, 0.3, -0.05]].forEach(([u, v, r], i) => D.line(budSmall(X + u * s, Y + v * s, 95, r), 'acc2', 5, T(26, 'hide') - 0.1 + i * 0.12, T(26, 'hide') + 0.15 + i * 0.12));
    D.text('taste buds', 1120, 380, 50, 'label', 'acc2', T(26, 'taste') - 0.1, T(26, 'buds') + 0.3);
    arrow(D, quad([1060, 400], [1000, 450], [920, 480], 12), 'acc2', 5, T(26, 'inside'), T(26, 'them'));
    D.text('in the walls', 1120, 570, 46, 'label', 'ink', T(27, 'sides') - 0.1, T(27, 'bump'));
  });
  board(28, 29, (D, t) => { // 2,000 to 10,000
    D.text('an adult has', 640, 170, 60, 'label', 'ink', S(28), T(28, 'has') + 0.2);
    D.text('2,000', 350, 360, 150, 'num', 'acc1', T(28, 'two') - 0.1, T(28, 'thousand') + 0.3);
    D.text('to', 640, 350, 64, 'label', 'ink', S(29), T(29, 'ten'));
    D.text('10,000', 950, 360, 150, 'num', 'acc3', T(29, 'ten') - 0.1, T(29, 'thousand') + 0.3);
    D.text('taste buds', 640, 520, 84, 'title', 'acc2', T(29, 'taste') - 0.1, T(29, 'buds') + 0.3);
    D.line([[420, 550], [860, 542]], 'acc2', 6, T(29, 'buds') + 0.3, E(29) + 0.2, { hit: true });
  });
  board(30, 31, (D, t) => { // roof of mouth and throat
    const hc = headCut(520, 360, 210);
    D.many(hc.out, 'ink', 6, S(30) - 0.1, T(30, 'live'));
    D.many(hc.tongue, 'acc2', 6, T(30, 'even'), T(30, 'live') + 0.2);
    D.line(hc.palate, 'acc4', 6, T(30, 'roof') - 0.1, T(30, 'mouth'));
    D.many(hc.throat, 'acc3', 6, T(31, 'down') - 0.1, T(31, 'throat'));
    [0.15, 0.35, 0.55].forEach((u, i) => { const p = hc.palate[Math.floor(u * 20)]; D.dot(p[0], p[1] + 12, 7, 'acc1', T(30, 'mouth') + i * 0.06); });
    [0.55, 0.75, 0.95].forEach((v, i) => D.dot(520 + 0.52 * 210, 360 + v * 210, 7, 'acc1', T(31, 'throat') + i * 0.06));
    D.text('roof of mouth', 1000, 260, 54, 'label', 'acc4', T(30, 'roof') - 0.1, T(30, 'mouth') + 0.2);
    D.text('throat', 1000, 470, 54, 'label', 'acc3', T(31, 'throat') - 0.1, T(31, 'throat') + 0.2);
    D.text('= a few buds', 1000, 560, 44, 'label', 'acc1', T(31, 'throat') + 0.2, E(31) + 0.1);
  });
  // ===== chapter 3: inside one bud =====
  board(32, 34, (D, t) => { // the onion of cells
    chapter(D, 'part 3: inside one bud', S(32) - 0.1);
    const parts = bud(450, 400, 230);
    D.line(parts[0], 'ink', 7, T(32, 'zoom') - 0.1, T(32, 'bud') + 0.2);
    D.many(parts.slice(1), 'acc3', 5, T(33, 'tiny') - 0.1, T(33, 'onion') + 0.4);
    D.text('like an onion', 960, 230, 64, 'title', 'acc1', T(33, 'like') - 0.1, T(33, 'onion') + 0.2);
    D.text('50–150', 960, 400, 130, 'num', 'acc3', T(34, 'fifty') - 0.1, T(34, 'hundred') + 0.4);
    D.text('taste cells', 960, 490, 64, 'label', 'ink', T(34, 'taste') - 0.1, T(34, 'cells') + 0.2);
  });
  board(35, 38, (D, t) => { // taste pore + molecules in spit
    const X = 420, Y = 430, s = 200, parts = bud(X, Y, s);
    D.line(parts[0], 'ink', 6, S(35) - 0.15, S(35) + 0.2);
    D.many(parts.slice(1), 'acc3', 4, S(35), F(35, 0.4));
    D.line([[X - 300, Y - 0.98 * s], [X - 0.14 * s, Y - 0.98 * s]], 'ink', 6, F(35, 0.3), F(35, 0.5));
    D.line([[X + 0.14 * s, Y - 0.98 * s], [X + 300, Y - 0.98 * s]], 'ink', 6, F(35, 0.5), F(35, 0.7));
    D.many([circ(X, Y - s * 0.98, 44, 26)], 'acc2', 6, T(36, 'taste') - 0.1, T(36, 'pore'), { hit: true });
    D.text('taste pore', 900, 190, 70, 'title', 'acc2', T(36, 'taste') - 0.1, T(36, 'pore') + 0.3);
    arrow(D, quad([760, 180], [600, 160], [480, 210], 12), 'acc2', 5, T(36, 'pore'), E(36));
    D.text('food + spit', 900, 340, 56, 'label', 'acc4', T(37, 'food') - 0.1, T(37, 'spit') + 0.2);
    for (let k = 0; k < 6; k++) { // molecules drifting down into the pore
      const t0 = T(38, 'molecules') + k * 0.2, u = clamp((t - t0) / 1.6), x = lerp(X - 200 + k * 70, X + (k - 2.5) * 6, eio(u)), y = lerp(Y - s - 140 - (k % 2) * 30, Y - s * 0.8, eio(u));
      if (t > t0) hexMol(x, y, 14).forEach((P) => D.live(P, k % 2 ? 'acc1' : 'acc4', 4, t0, t0 + 0.15, 3800 + k));
    }
    D.text('molecules', 900, 450, 60, 'label', 'acc1', T(38, 'molecules') - 0.1, T(38, 'slip'));
    D.text('slip in!', 900, 540, 72, 'title', 'acc1', T(38, 'slip') - 0.1, T(38, 'pore') + 0.2);
  });
  board(39, 42, (D, t) => { // receptors: locks and keys
    const X = 280, Y = 360;
    D.many([[[X - 50, Y + 150], [X - 50, Y - 80], ...circ(X, Y - 80, 50, 40, Math.PI, Math.PI * 2, 14).slice(1), [X + 50, Y + 150]]], 'acc3', 7, S(39), T(39, 'cell') + 0.3);
    D.text('taste cell', X, Y + 215, 50, 'label', 'acc3', T(39, 'cell') - 0.1, T(39, 'has'));
    D.many(hairs(X, Y - 28, 100), 'acc3', 5, T(39, 'receptors'), T(39, 'tip') + 0.2);
    D.text('receptors', X + 220, Y - 230, 50, 'label', 'ink', T(39, 'receptors') - 0.1, T(39, 'on') + 0.1, { align: 'left' });
    D.many(lock(720, 260, 130), 'ink', 6, T(40, 'locks') - 0.15, T(40, 'waiting'));
    D.many(key(1000, 260, 170), 'acc1', 6, T(40, 'right') - 0.1, T(40, 'key') + 0.2);
    D.text('sweet', 720, 400, 50, 'label', 'acc2', T(41, 'sweet') - 0.1, T(41, 'lock'));
    hexMol(1000, 400, 34).forEach((P) => D.line(P, 'acc2', 5, T(41, 'sugar') - 0.1, T(41, 'sugar') + 0.25));
    D.text('sugar', 1000, 480, 48, 'label', 'acc2', T(41, 'sugar') - 0.05, T(41, 'fits'));
    arrow(D, quad([950, 380], [850, 340], [770, 320], 12), 'acc2', 5, T(41, 'fits'), T(41, 'lock'));
    D.many([[[640, 520], [880, 520]], [[640, 600], [880, 600]]], 'ink', 6, T(42, 'salt') - 0.1, T(42, 'slips'));
    D.text('salt channel', 1040, 575, 46, 'label', 'ink', T(42, 'channel') - 0.1, T(42, 'channel') + 0.3, { align: 'left' });
    if (t > T(42, 'slips')) for (let k = 0; k < 4; k++) { const u = ((t - T(42, 'slips')) * 0.6 + k / 4) % 1; D.dot(lerp(620, 900, u), 560, 9, 'acc4', 0, { inst: true }); }
  });
  board(43, 45, (D, t) => { // signal to brain
    const X = 200, Y = 440;
    D.many([[[X - 40, Y + 150], [X - 40, Y - 60], ...circ(X, Y - 60, 40, 32, Math.PI, Math.PI * 2, 12).slice(1), [X + 40, Y + 150]]], 'acc3', 6, S(43), T(43, 'key'));
    D.many(key(X, Y - 200, 110), 'acc1', 5, T(43, 'key') - 0.1, T(43, 'fits') + 0.2);
    const nerve = cubic([X + 40, Y + 100], [500, Y + 160], [640, 200], [880, 300], 50);
    D.line(nerve, 'acc4', 6, T(44, 'fires') - 0.1, T(44, 'nerve') + 0.2);
    D.text('nerve', 560, 520, 50, 'label', 'acc4', T(44, 'nerve') - 0.1, T(44, 'nerve') + 0.2);
    if (t > T(44, 'signal') && t < E(45) + 0.5) { const u = clamp((t - T(44, 'signal')) / 1.2), p = nerve[Math.min(nerve.length - 1, Math.floor(eio(u) * (nerve.length - 1)))]; D.dot(p[0], p[1], 14, 'acc1', 0, { inst: true }); }
    D.text('zap!', 380, 330, 60, 'title', 'acc1', T(44, 'fires') - 0.1, T(44, 'fires') + 0.2);
    D.many(brain(1020, 300, 160), 'ink', 6, T(45, 'brain') - 0.2, T(45, 'says'));
    D.text('SWEET!', 1020, 530, 110, 'title', 'acc2', T(45, 'sweet') - 0.1, T(45, 'sweet') + 0.25, { rot: -0.04 });
  });
  // ===== chapter 4: five tastes, five jobs =====
  board(46, 47, (D, t) => {
    chapter(D, 'part 4: five tastes, five jobs', S(46) - 0.1);
    D.text('the clever part', 640, 210, 80, 'title', 'acc1', T(46, 'clever') - 0.1, E(46));
    const cols = ['acc2', 'ink', 'acc1', 'acc3', 'acc4'], names = ['sweet', 'salty', 'sour', 'bitter', 'umami'];
    names.forEach((n, k) => { const x = 200 + k * 220, a = T(47, 'five') + k * 0.15; D.line(circ(x, 410, 80, 80), cols[k], 6, a, a + 0.3); D.text(n, x, 425, 44, 'label', cols[k], a + 0.1, a + 0.35); });
    D.text('each has a job', 640, 590, 66, 'title', 'ink', T(47, 'has') - 0.1, T(47, 'job') + 0.2);
  });
  board(48, 50, (D, t) => { // sweet salty sour
    D.text('sweet', 220, 160, 70, 'title', 'acc2', S(48) - 0.05, T(48, 'means'));
    D.many(battery(220, 330, 200), 'acc2', 6, T(48, 'energy') - 0.2, T(48, 'energy') + 0.3);
    D.text('= energy', 220, 480, 56, 'label', 'ink', T(48, 'energy') - 0.1, E(48));
    D.text('salty', 640, 160, 70, 'title', 'ink', S(49) - 0.05, T(49, 'means'));
    D.many(shaker(640, 320, 150), 'ink', 6, T(49, 'minerals') - 0.2, T(49, 'minerals') + 0.3);
    D.text('= minerals', 640, 480, 56, 'label', 'ink', T(49, 'minerals') - 0.1, T(49, 'needs'));
    D.text('sour', 1060, 160, 70, 'title', 'acc1', S(50) - 0.05, T(50, 'can'));
    D.many(lemon(1060, 330, 110), 'acc1', 6, T(50, 'mean') - 0.1, T(50, 'unripe') + 0.2);
    D.text('unripe?', 1060, 480, 56, 'label', 'acc1', T(50, 'unripe') - 0.1, T(50, 'unripe') + 0.3);
    D.text('spoiled?', 1060, 560, 56, 'label', 'acc2', T(50, 'spoiled') - 0.1, T(50, 'spoiled') + 0.3);
  });
  board(51, 52, (D, t) => { // bitter warning
    D.text('bitter', 360, 200, 110, 'title', 'acc3', S(51) - 0.05, T(51, 'is') + 0.1);
    D.many(warnTri(360, 400, 260), 'acc1', 8, T(51, 'warning') - 0.15, T(51, 'warning') + 0.35, { hit: true });
    D.dot(360, 455, 10, 'acc1', T(51, 'warning') + 0.35);
    D.text('= warning', 360, 600, 64, 'label', 'acc1', T(51, 'warning') + 0.1, E(51));
    D.many(bottle(900, 380, 220), 'ink', 6, T(52, 'lots') - 0.1, T(52, 'poisons') + 0.2);
    D.line([[840, 360], [960, 460]], 'acc2', 7, T(52, 'poisons') + 0.1, T(52, 'poisons') + 0.3);
    D.line([[960, 360], [840, 460]], 'acc2', 7, T(52, 'poisons') + 0.3, T(52, 'taste'));
    D.text('poisons', 900, 610, 60, 'label', 'acc2', T(52, 'poisons') - 0.1, T(52, 'taste'));
    D.text('taste bitter', 1110, 200, 46, 'label', 'acc3', T(52, 'bitter') - 0.1, E(52) + 0.1);
  });
  board(53, 55, (D, t) => { // umami + 1908 + Ikeda
    D.text('umami', 300, 200, 110, 'title', 'acc4', T(53, 'umami') - 0.1, T(53, 'umami') + 0.35);
    D.many(drumstick(300, 365, 190), 'acc4', 6, T(53, 'means') - 0.1, T(53, 'protein') + 0.2);
    D.text('= protein', 300, 520, 60, 'label', 'ink', T(53, 'protein') - 0.1, E(53));
    D.text('5th taste', 900, 170, 64, 'label', 'acc1', T(54, 'fifth') - 0.1, T(54, 'taste') + 0.1);
    D.text('1908', 900, 320, 140, 'num', 'acc1', T(54, 'nineteen') - 0.1, T(54, 'eight') + 0.2);
    D.text('Kikunae Ikeda', 900, 440, 64, 'title', 'ink', T(55, 'kikunae') - 0.1, T(55, 'ikeda') + 0.3);
    D.text('chemist, Japan', 900, 520, 46, 'label', 'acc4', T(55, 'japanese') - 0.1, T(55, 'chemist') + 0.2);
  });
  board(56, 57, (D, t) => { // seaweed soup -> glutamate
    D.many(bowl(400, 400, 210), 'ink', 7, S(56), T(56, 'seaweed'));
    D.many(kelp(370, 390, 200), 'acc3', 6, T(56, 'seaweed') - 0.1, T(56, 'soup') + 0.1);
    D.many(steam(400, 300, 110), 'ink', 4, T(56, 'soup'), T(56, 'rich'));
    D.text('seaweed soup', 400, 620, 56, 'label', 'acc3', T(56, 'seaweed') - 0.1, T(56, 'soup') + 0.3);
    D.text('so rich?', 950, 220, 80, 'title', 'acc1', T(56, 'so') - 0.15, T(56, 'rich') + 0.25);
    hexMol(950, 380, 60).forEach((P) => D.line(P, 'acc4', 6, T(57, 'answer') - 0.1, T(57, 'glutamate')));
    D.text('glutamate', 950, 540, 90, 'title', 'acc4', T(57, 'glutamate') - 0.1, T(57, 'glutamate') + 0.4, { rot: -0.02 });
  });
  // ===== chapter 5: smell and the catfish =====
  board(58, 61, (D, t) => { // hold your nose, jelly bean
    chapter(D, 'part 5: the nose knows', S(58) - 0.1);
    D.text('only half the story', 640, 180, 76, 'title', 'acc1', T(58, 'only') - 0.1, T(58, 'story') + 0.2);
    D.many(nose(420, 420, 190), 'ink', 7, S(59), T(59, 'nose') + 0.15);
    D.many(clip(330, 420, 100), 'acc2', 5, T(59, 'nose'), T(59, 'and'));
    D.many(bean(820, 420, 90), 'acc2', 6, T(59, 'jelly') - 0.1, T(59, 'bean') + 0.3);
    D.text('sweet? yes', 1040, 380, 66, 'title', 'acc3', T(60, 'sweet') - 0.1, T(60, 'sweet') + 0.3);
    D.text('flavor? no', 1040, 500, 66, 'title', 'acc2', T(61, 'flavor') - 0.1, T(61, 'is') + 0.1);
  });
  board(62, 63, (D, t) => { // flavor = mostly smell
    D.text('flavor', 300, 300, 110, 'title', 'acc1', T(62, 'flavor') - 0.12, T(62, 'flavor') + 0.3);
    D.text('=', 560, 300, 110, 'title', 'ink', T(63, 'actually') - 0.1, T(63, 'comes'));
    D.text('mostly', 860, 220, 60, 'label', 'ink', T(63, 'comes') - 0.1, T(63, 'from'));
    D.text('SMELL', 860, 340, 130, 'title', 'acc4', T(63, 'smell') - 0.12, T(63, 'smell') + 0.3, { rot: -0.03 });
    D.line([[680, 370], [1050, 358]], 'acc4', 7, T(63, 'smell') + 0.3, E(63) + 0.2, { hit: true });
    D.many(nose(860, 560, 70), 'ink', 4, S(62), F(62, 0.6));
    D.many(bean(300, 480, 60), 'acc2', 5, S(62) + 0.2, F(62, 0.8));
  });
  board(64, 67, (D, t) => { // catfish
    D.text('some animals', 640, 130, 60, 'label', 'ink', T(64, 'some') - 0.1, T(64, 'animals') + 0.3);
    D.many(catfish(600, 320, 250), 'acc4', 7, T(65, 'catfish') - 0.2, T(65, 'have') + 0.5);
    D.text('175,000', 640, 615, 130, 'num', 'acc1', T(65, 'one') - 0.1, T(65, 'thousand') + 0.3);
    D.text('taste buds', 1030, 615, 50, 'label', 'ink', T(65, 'taste') - 0.1, E(65));
    const r = H.rng(44); for (let i = 0; i < 46; i++) { const u = r.range(-0.95, 1.1), v = r.range(-0.22, 0.2); D.dot(600 + u * 250, 320 + v * 250 * (1 - Math.abs(u) * 0.4), 5, 'acc2', T(66, 'all') + i * 0.022); }
    D.text('all over!', 1060, 250, 64, 'title', 'acc2', T(66, 'all') - 0.1, T(66, 'body') + 0.2);
    D.text('a swimming tongue', 640, 225, 52, 'label', 'acc3', T(67, 'swimming') - 0.1, T(67, 'tongue') + 0.3);
  });
  // ===== chapter 6: the ten-day reset =====
  board(68, 71, (D, t) => { // back to the hook: a rough place
    chapter(D, 'part 6: the ten-day reset', S(68) - 0.1);
    D.text('back to the hook', 640, 160, 74, 'title', 'acc1', T(68, 'back') - 0.1, T(68, 'hook') + 0.2);
    const parts = bud(320, 430, 150);
    D.line(parts[0], 'ink', 6, S(69), T(69, 'cells'));
    D.many(parts.slice(1), 'acc3', 4, T(69, 'cells'), T(69, 'work'));
    D.text('wet', 650, 320, 64, 'label', 'acc4', T(69, 'wet') - 0.1, T(69, 'rough'));
    D.text('rough', 650, 400, 64, 'label', 'acc1', T(69, 'rough') - 0.1, T(69, 'place'));
    D.many(chip(900, 360, 90), 'acc1', 6, T(70, 'scraped') - 0.15, T(70, 'crunchy') + 0.2);
    D.text('scraped', 900, 480, 54, 'label', 'acc1', T(70, 'scraped') - 0.1, T(70, 'by'));
    D.many(bowl(1120, 380, 90), 'ink', 5, T(71, 'burned') - 0.15, T(71, 'hot'));
    D.many(steam(1120, 340, 60), 'acc2', 4, T(71, 'hot'), T(71, 'soup') + 0.2);
    D.text('burned', 1120, 480, 54, 'label', 'acc2', T(71, 'burned') - 0.1, T(71, 'by'));
  });
  board(72, 73, (D, t) => { // replaced about every ten days
    const cx = 420, cy = 380, R = 190;
    const ring = circ(cx, cy, R, R, -Math.PI / 2, Math.PI * 1.35, 60);
    D.line(ring, 'acc3', 7, T(72, 'replaces') - 0.2, T(72, 'them') + 0.4);
    D.line(head(ring, 28), 'acc3', 7, T(72, 'them') + 0.4, T(72, 'them') + 0.5);
    D.text('new', cx, cy - R - 30, 50, 'label', 'acc3', T(72, 'replaces'), T(72, 'them'));
    const pos = clamp((t - T(72, 'replaces')) / 2.2);
    if (t > T(72, 'replaces')) { const a = -Math.PI / 2 + pos * Math.PI * 1.85; D.live(budSmall(cx + Math.cos(a) * R, cy + Math.sin(a) * R, 60, 0), 'acc2', 5, T(72, 'replaces'), T(72, 'replaces') + 0.2, 7201); }
    D.text('your body', cx, cy + 20, 50, 'label', 'ink', S(72), T(72, 'body') + 0.2);
    D.text('every', 920, 230, 64, 'label', 'ink', T(73, 'every') - 0.1, T(73, 'ten'));
    D.text('~10', 920, 390, 170, 'num', 'acc1', T(73, 'ten') - 0.1, T(73, 'ten') + 0.25);
    D.text('days', 920, 490, 80, 'title', 'acc1', T(73, 'days') - 0.1, T(73, 'days') + 0.25);
    D.line(circ(920, 360, 190, 170, -2.3, 4.1), 'acc2', 6, T(73, 'days') + 0.25, E(73) + 0.3, { hit: true });
  });
  board(74, 75, (D, t) => { // burned tongue heals fast
    D.many(tongueTop(330, 380, 260), 'acc2', 6, S(74), T(74, 'tongue'));
    D.many(flame(330, 330, 120), 'acc1', 6, T(74, 'burned') - 0.1, T(74, 'burned') + 0.35);
    D.text('ouch!', 330, 108, 54, 'label', 'acc1', T(74, 'burned'), T(74, 'tongue'));
    arrow(D, [[560, 380], [740, 380]], 'ink', 6, T(75, 'feels'), T(75, 'normal'));
    D.many(tongueTop(960, 380, 260), 'acc2', 6, T(75, 'normal') - 0.1, T(75, 'again'));
    D.many(checkMark(960, 360, 120), 'acc3', 9, T(75, 'again'), T(75, 'so') + 0.1, { hit: true });
    D.text('so fast!', 960, 620, 64, 'title', 'acc3', T(75, 'fast') - 0.1, T(75, 'fast') + 0.3);
  });
  board(76, 78, (D, t) => { // takeaway
    const parts = bud(320, 390, 180);
    D.line(parts[0], 'ink', 6, S(76), T(76, 'bite'));
    D.many(parts.slice(1), 'acc3', 5, T(76, 'bite'), E(76));
    D.text('every bite', 860, 190, 70, 'label', 'ink', S(76) - 0.05, T(76, 'take'));
    D.text('brand new', 860, 330, 110, 'title', 'acc3', T(77, 'brand') - 0.12, T(77, 'new') + 0.25, { rot: -0.02 });
    D.text('taste cells', 860, 440, 76, 'title', 'acc1', T(77, 'taste') - 0.1, T(77, 'cells') + 0.25);
    D.text('on the job!', 860, 570, 84, 'title', 'acc2', T(78, 'on') - 0.1, T(78, 'job') + 0.25);
    D.line([[640, 600], [1080, 590]], 'acc2', 7, T(78, 'job') + 0.25, E(78) + 0.2, { hit: true });
  });
  board(79, 80, (D, t) => { // teaser
    D.text('next time:', 220, 130, 60, 'label', 'acc4', S(79) - 0.05, T(79, 'time') + 0.1);
    D.many(car(640, 300, 220), 'acc4', 7, T(79, 'people') - 0.2, T(79, 'carsick') + 0.4);
    D.line(wavy(350, 200, 120, 10), 'acc3', 5, T(79, 'carsick'), T(79, 'carsick') + 0.3);
    D.line(wavy(350, 240, 120, 10, 2), 'acc3', 5, T(79, 'carsick') + 0.15, T(79, 'carsick') + 0.45);
    D.text('Why do some people', 640, 500, 72, 'title', 'ink', T(79, 'why') - 0.1, T(79, 'people') + 0.3);
    D.text('get carsick?', 640, 590, 80, 'title', 'acc2', T(79, 'get') - 0.1, T(79, 'carsick') + 0.4);
    D.text('...and others don\'t', 1010, 180, 48, 'label', 'acc1', T(80, 'others') - 0.1, T(80, 'fine') + 0.2);
  });

  const STARTS = BOARDS.map((b) => S(b.i0));
  // how each board is entered: 'w' = felt eraser, otherwise the camera tracks along the slate
  const WIPE_AT = new Set([7, 13, 22, 28, 32, 46, 53, 58, 64, 68, 79]);
  const gapOf = (n) => { const p = BOARDS[n - 1], q = BOARDS[n]; const a = E(p.i1), b2 = S(q.i0); return { from: n - 1, t0: a, t1: b2 }; };
  const WIPES = [], PANS = [];
  BOARDS.forEach((b, n) => { if (!n) return; (WIPE_AT.has(b.i0) ? WIPES : PANS).push(gapOf(n)); });

  function story(t, all) {
    const items = [];
    const mk = (b) => {
      const ox = BXc(b) - 640, P = (pts) => pts.map(([x, y]) => [x + ox, y]);
      return {
        ox,
        line: (pts, role, w, a, b2, o = {}) => items.push({ k: 'line', pts: P(pts), role, w, a, b: b2, hit: o.hit, inst: o.inst, prog: o.prog, seed: o.seed }),
        text: (s, x, y, size, font, role, a, b2, o = {}) => items.push({ k: 'text', s, x: x + ox, y, size, font, role, a, b: b2, rot: o.rot || 0, align: o.align || 'center', inst: o.inst, prog: o.prog }),
        dot: (x, y, r, role, a, o = {}) => items.push({ k: 'dot', x: x + ox, y, r, role, a: o.inst ? -1 : a, b: o.inst ? 0 : a + 0.05, inst: o.inst }),
        many: (list, role, w, a, b2, o = {}) => list.forEach((pts, i) => { const n = list.length, aa = a + (b2 - a) * i / n, bb = a + (b2 - a) * (i + 1) / n; items.push({ k: 'line', pts: P(pts), role, w, a: aa, b: bb, inst: o.inst, prog: o.prog, hit: o.hit && i === 0 }); }),
        // a moving drawing: geometry changes with t, drawn on over [a,b], fixed seed so the chalk texture doesn't flicker
        live: (pts, role, w, a, b2, seed) => items.push({ k: 'line', pts: P(pts), role, w, a: -1, b: 0, inst: true, prog: win(t, a, b2), seed, la: a, lb: b2 }),
      };
    };
    BOARDS.forEach((bd, n) => {
      const end = E(bd.i1) + 1.6, st = S(bd.i0) - 1.6;
      if (all || (t >= st && t <= end)) bd.fn(mk(bd.b), t);
    });
    PANS.forEach((p) => {
      if (!all && (t < p.t0 - 0.2 || t > p.t1 + 1.6)) return;
      const x0 = BXc(p.from) + 660, x1 = BXc(p.from + 1) - 660, y = 340 + (p.from % 3) * 30;
      const L = cubic([x0, y], [x0 + 60, y - 70], [x1 - 60, y + 70], [x1, y]);
      items.push({ k: 'line', pts: L, role: 'acc1', w: 6, a: p.t0 - 0.05, b: p.t1 - 0.06 });
      items.push({ k: 'line', pts: head(L, 26), role: 'acc1', w: 6, a: p.t1 - 0.06, b: p.t1 });
    });
    return items;
  }
  const tipOf = (items, t, meas) => { let tip = null; for (const it of items) { if (it.inst || it.k === 'dot') continue; const p = win(t, it.a, it.b); if (p > 0 && p < 1) { if (it.k === 'line') { const P = it.pts; tip = P[Math.min(P.length - 1, Math.floor(p * (P.length - 1)))]; } else tip = meas(it, p); } } return tip; };

  // ---------- camera: slow drift inside a board, a few bigger moves ----------
  const CK = [];
  BOARDS.forEach((bd, n) => {
    const nx = BXc(bd.b), a = S(bd.i0), b2 = E(bd.i1), odd = n % 3;
    const z0 = bd.i0 === 25 ? 1.0 : odd === 0 ? 1.0 : odd === 1 ? 1.03 : 1.0, z1 = bd.i0 === 25 ? 1.0 : odd === 0 ? 1.03 : odd === 1 ? 1.0 : 1.02;
    CK.push([a, nx + (odd - 1) * 6, 360 - z0 * 0, z0], [b2, nx - (odd - 1) * 6, 360, z1]);
  });
  const camAt = (t) => {
    const k = CK; if (t <= k[0][0]) return k[0].slice(1);
    for (let i = 0; i < k.length - 1; i++) { const a = k[i], b = k[i + 1]; if (t <= b[0]) { const u = eio((t - a[0]) / Math.max(1e-6, b[0] - a[0])); return [a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u, Math.exp(Math.log(a[3]) + (Math.log(b[3]) - Math.log(a[3])) * u)]; } }
    return k[k.length - 1].slice(1);
  };

  // ---------- rendering (the reference's chalk medium) ----------
  const XC = {};
  let NZ = null;
  const COL = { ink: [240, 242, 236], acc1: [246, 222, 120], acc2: [244, 150, 175], acc3: [205, 250, 190], acc4: [150, 205, 240] };
  const WX0 = -700, WY0 = -300, WWD = 4800, WHT = 1300; // world extent of the slate
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
  const TRAY_Y = 650;

  function renderView(ctx, t, cam, items) {
    const [cx, cy, z] = cam;
    const apply = (c) => { c.translate(W / 2, HH / 2); c.scale(z, z); c.translate(-cx, -cy); };
    const toS = ([x, y]) => [(x - cx) * z + W / 2, (y - cy) * z + HH / 2];
    ctx.save(); apply(ctx); ctx.imageSmoothingEnabled = true;
    const vl = cx - W / 2 / z - 10, vr = cx + W / 2 / z + 10;
    for (let i = Math.floor((vl - WX0) / WWD); i <= Math.floor((vr - WX0) / WWD); i++) { const x = WX0 + i * WWD; if (i % 2) { ctx.save(); ctx.translate(x + WWD, WY0); ctx.scale(-1, 1); ctx.drawImage(XC.slate, 0, 0, WWD, WHT); ctx.restore(); } else ctx.drawImage(XC.slate, x, WY0, WWD, WHT); }
    ctx.fillStyle = XC.toothPat || (XC.toothPat = ctx.createPattern(XC.tooth, 'repeat')); ctx.fillRect(vl, WY0, vr - vl, WHT);
    ctx.restore();
    { const lit = ctx.createRadialGradient(560, 260, 100, 640, 360, 900); lit.addColorStop(0, 'rgba(120,150,130,0.10)'); lit.addColorStop(1, 'rgba(0,10,5,0.35)'); ctx.fillStyle = lit; ctx.fillRect(0, 0, W, HH); }
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
    ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(vl, TRAY_Y - 8, vr - vl, 8);
    for (let x = WX0 + Math.floor((vl - WX0) / 2400) * 2400; x < vr; x += 2400) ctx.drawImage(XC.tray, x, TRAY_Y);
    { const g = ctx.createLinearGradient(0, TRAY_Y + 96, 0, TRAY_Y + 400); g.addColorStop(0, '#2b1c10'); g.addColorStop(1, '#1a120b'); ctx.fillStyle = g; ctx.fillRect(vl, TRAY_Y + 96, vr - vl, 400); }
    { const g = ctx.createLinearGradient(0, -80, 0, 30); g.addColorStop(0, '#5e3a1c'); g.addColorStop(0.7, '#8a5a30'); g.addColorStop(1, '#3e2510'); ctx.fillStyle = g; ctx.fillRect(vl, -300, vr - vl, 330); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(vl, 30, vr - vl, 6); }
    // chalk sticks and the felt eraser resting on the ledge
    (() => { const o = [], cols = [[242, 242, 236], [246, 220, 110], [242, 150, 172], [150, 205, 238]]; for (let k = Math.floor(vl / 760) - 1; k * 760 < vr; k++) { const m = Math.abs(k) % 4; o.push([k * 760 + 200, 42 + (Math.abs(k) * 37) % 50, cols[m], ((Math.abs(k) * 13) % 7 - 3) * 0.02]); } return o; })().forEach(([x, len, col, rot]) => {
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
    for (let i = 0; i < 40; i++) { const x0 = rr.range(0, W), sp = rr.range(8, 22), ph = rr.range(0, 2000); const y = ((ph + t * sp) % 760) - 20, x = x0 + Math.sin(t * 0.8 + i) * 8; ctx.fillStyle = `rgba(240,244,236,${rr.range(0.1, 0.3)})`; ctx.beginPath(); ctx.arc(x, y, rr.range(0.7, 1.6), 0, 7); ctx.fill(); }
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
      const rows = 3, rowH = HH / rows, pos = u * rows, row = Math.min(rows - 1, Math.floor(pos)), f = pos - row, dir = row % 2 ? -1 : 1;
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

  function scoreSound(k) {
    const D = DURATION;
    const knock = (t, g = 1, pan = 0, minor = true) => { k.tone(t, { f: [[0, 150], [0.05, 90]], dur: 0.07, gain: 0.1 * g, pan, minor, verb: 0.12 }); k.noise(t, { dur: 0.025, filter: 'bandpass', f: 900, q: 1.2, gain: 0.15 * g, a: 0.001, pan, minor, verb: 0.12 }); };
    const LV = 0.45;
    const ch = (a, b, g = 1, pan = 0, minor = true) => { const d = Math.max(0.03, b - a); g *= LV; knock(a, g, pan, minor); k.play('stroke', a, { material: 'chalk', dur: d, gain: 0.95 * g, pan, minor }); };
    const write = (s, a, b, g = 0.8, pan = 0) => { const n = s.length, re = /\S+/g; let m; while ((m = re.exec(s))) ch(a + (b - a) * m.index / n, a + (b - a) * (m.index + m[0].length) / n, g, pan, true); };
    const tap = (t, g = 1, pan = 0) => { k.noise(t, { dur: 0.02, filter: 'bandpass', f: 1500, q: 1.4, gain: 0.25 * g, a: 0.001, pan, minor: true }); k.tone(t, { f: 180, dur: 0.035, gain: 0.07 * g, pan, minor: true }); };
    const dust = (t, g = 1, pan = 0) => k.noise(t, { dur: 0.45, color: 'pink', filter: 'bandpass', f: 1400, q: 0.5, gain: 0.05 * g, a: 0.12, pan, minor: true });
    k.bed('room', 0, D, { gain: 0.5 });
    // every timed stroke and word in the story gets its chalk drag (merged when strokes chain closely)
    const all = story(D + 1, true).map((it) => (it.la != null ? { ...it, inst: false, a: it.la, b: it.lb } : it)).filter((it) => !it.inst && it.a >= 0 && !(it.k === 'line' && it.w < 0.1)).sort((a, b) => a.a - b.a);
    let lastEnd = -1;
    for (const it of all) {
      const pan = H.clamp(((it.k === 'line' ? it.pts[0][0] : it.x) % 1500 - 640) / 900, -0.4, 0.4);
      if (it.k === 'text') write(it.s, it.a, it.b, it.size > 100 ? 1.0 : 0.75, pan);
      else if (it.k === 'dot') tap(it.a, 0.9, pan);
      else if (it.hit) { ch(it.a, it.b, 1.4, pan, false); dust(it.b - 0.05, 1.2, pan); }
      else if (it.a > lastEnd - 0.02 || it.b - it.a > 0.12) ch(it.a, it.b, 0.85, pan);
      lastEnd = Math.max(lastEnd, it.b);
    }
    // camera tracking along the slate: a soft air move under the chalk leader
    PANS.forEach((p) => k.play('whoosh', p.t0 - 0.05, { dur: p.t1 - p.t0 + 0.1, gain: 0.45, top: 1600 }));
    // eraser wipes: felt rubbing in four passes, then dust
    WIPES.forEach((w) => { const d = w.t1 - w.t0; for (let r = 0; r < 3; r++) k.play('erase', w.t0 + r * d / 3, { dur: d / 3, gain: 1.2 }); dust(w.t1 - 0.05, 1.5); });
    // key moments
    const P = (n, i, w, dt, o) => k.play(n, T(i, w) + dt, o);
    P('impact', 0, 'ten', -0.05, { gain: 0.55 });
    P('pop', 1, 'why', 0, { f: 620, gain: 0.5 });
    P('sparkle', 2, 'thousands', 0, { n: 6, gain: 0.35 });
    P('pop', 3, 'spit', 0, { f: 500, gain: 0.45 });
    P('ding', 6, 'map', 0, { f: 'E5', gain: 0.3 });
    P('error', 12, 'myth', -0.1, { f: 'F3', gain: 0.55 });
    P('stamp', 12, 'myth', 0.05, { gain: 0.5 });
    P('ding', 13, 'one', 0, { f: 'D6', gain: 0.3 });
    P('ding', 16, 'two', 0, { f: 'D6', gain: 0.3 });
    P('thud', 18, 'wrong', 0, { f: 160, gain: 0.5 });
    P('success', 21, 'five', 0, { f: 'G5', gain: 0.4 });
    P('stamp', 24, 'not', 0, { gain: 0.45 });
    P('ding', 25, 'papillae', 0.2, { f: 'A5', gain: 0.3 });
    P('impact', 29, 'thousand', -0.05, { gain: 0.5 });
    P('pop', 30, 'mouth', 0, { f: 700, gain: 0.4 });
    P('pop', 31, 'throat', 0, { f: 560, gain: 0.4 });
    P('ding', 34, 'cells', 0, { f: 'B5', gain: 0.3 });
    P('pop', 36, 'pore', 0, { f: 760, gain: 0.5 });
    P('swish', 38, 'slip', -0.1, { dur: 0.4, gain: 0.45 });
    P('tock', 41, 'lock', 0, { f: 520, gain: 0.5 });
    P('swish', 44, 'signal', 0, { dur: 1.0, gain: 0.4 });
    P('success', 45, 'sweet', 0, { f: 'A5', gain: 0.45 });
    P('pop', 48, 'energy', 0, { f: 640, gain: 0.4 });
    P('pop', 49, 'minerals', 0, { f: 560, gain: 0.4 });
    P('pop', 50, 'spoiled', 0, { f: 480, gain: 0.4 });
    P('error', 51, 'warning', 0, { f: 'E3', gain: 0.45 });
    P('sparkle', 53, 'umami', 0, { n: 6, gain: 0.35 });
    P('ding', 54, 'eight', 0, { f: 'D6', gain: 0.3 });
    P('sparkle', 57, 'glutamate', 0, { n: 6, gain: 0.4 });
    P('success', 60, 'sweet', 0, { f: 'G5', gain: 0.3 });
    P('thud', 61, 'flavor', 0, { f: 170, gain: 0.4 });
    P('impact', 63, 'smell', -0.05, { gain: 0.55 });
    P('impact', 65, 'thousand', -0.05, { gain: 0.6 });
    P('ding', 65, 'thousand', 0.02, { f: 'C6', gain: 0.3 });
    P('sparkle', 66, 'all', 0, { n: 8, gain: 0.35 });
    P('swish', 70, 'scraped', 0, { dur: 0.3, gain: 0.4 });
    P('impact', 73, 'ten', -0.05, { gain: 0.55 });
    P('success', 75, 'fast', 0, { f: 'A5', gain: 0.4 });
    P('sparkle', 77, 'new', 0, { n: 6, gain: 0.4 });
    P('success', 78, 'job', 0, { f: 'G5', gain: 0.5 });
    P('swish', 79, 'carsick', -0.1, { dur: 0.5, gain: 0.5 });
    k.play('success', B[B.length - 1].e + 0.3, { f: 'D6', gain: 0.4 });
  }

  // the YouTube thumbnail: one still in the style, huge words
  function thumbnail(ctx) {
    if (!NZ) NZ = H.makeNoise(31);
    if (!XC.slate) buildSlate();
    const items = [];
    const L = (list, role, w) => list.forEach((pts) => items.push({ k: 'line', pts, role, w, a: -1, b: 0, inst: true }));
    const Tx = (s, x, y, size, role, rot) => items.push({ k: 'text', s, x, y, size, font: 'title', role, a: -1, b: 0, inst: true, rot, align: 'center' });
    L(tongueTop(275, 375, 290), 'acc2', 10);
    speckles(275, 375, 290, 40, 5).forEach(([x, y]) => items.push({ k: 'dot', x, y, r: 7, role: 'ink', a: -1, b: 0, inst: true }));
    L([[[95, 170], [455, 590]], [[455, 170], [95, 590]]], 'acc2', 14);
    Tx('TONGUE MAP', 860, 240, 120, 'ink', -0.02);
    Tx('MYTH!', 860, 470, 230, 'acc1', -0.03);
    items.push({ k: 'line', pts: [[600, 520], [1120, 505]], role: 'acc2', w: 12, a: -1, b: 0, inst: true });
    renderView(ctx, 999, [640, 360, 1], items);
    H.grain(ctx, 1280, 720, 0.03, 5);
  }


  try { if (document.fonts) ['700 120px "Kalam"', '400 60px "Patrick Hand"'].forEach((f) => document.fonts.load(f, 'AaZz09?!~')); } catch (e) { /* render anyway */ }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
