// ================= Flat-Vector Science, 16:9 1280x720: "Why do some people get carsick and others don't?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael, natural mode).
// Style: flat shapes, no outlines, long drop shadows, pill labels, big rounded Fredoka type, every scene its own
// background, circle wipes / slide pushes / iris cuts between scenes, a slow camera drift in every scene,
// vignette + light grain on every frame. Built from the Flat-Vector Science house example, re-laid out for 16:9.
(function () {
  const W = 1280, HH = 720;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 1.65, w: {"every": 0.25, "time": 0.57, "you": 0.82, "get": 1.01, "carsick": 1.2} },  // Every time you get carsick,
    { id: 'p1', s: 2.14, e: 4.41, w: {"your": 2.14, "brain": 2.4, "thinks": 2.72, "youve": 3.11, "swallowed": 3.44, "poison": 4.02} },  // your brain thinks you've swallowed poison.
    { id: 'p2', s: 4.8, e: 6.19, w: {"and": 4.8, "for": 4.99, "one": 5.18, "in": 5.37, "three": 5.49, "people": 5.81} },  // And for one in three people,
    { id: 'p3', s: 6.61, e: 9.26, w: {"that": 6.61, "alarm": 6.93, "goes": 7.33, "off": 7.65, "on": 7.9, "almost": 8.06, "every": 8.54, "ride": 8.94} },  // that alarm goes off on almost every ride.
    { id: 'p4', s: 9.65, e: 11.96, w: {"so": 9.65, "why": 9.79, "does": 10.0, "the": 10.28, "back": 10.49, "seat": 10.77, "wreck": 11.05, "some": 11.4, "of": 11.68, "us": 11.82} },  // So why does the back seat wreck some of us,
    { id: 'p5', s: 12.42, e: 15.33, w: {"while": 12.42, "others": 12.76, "read": 13.17, "a": 13.44, "whole": 13.5, "book": 13.84, "and": 14.11, "feel": 14.31, "totally": 14.58, "fine": 15.06} },  // while others read a whole book and feel totally fine?
    { id: 'p6', s: 15.82, e: 18.49, w: {"to": 15.82, "find": 15.97, "out": 16.28, "we": 16.5, "need": 16.66, "to2": 16.96, "look": 17.12, "inside": 17.42, "your": 17.88, "head": 18.18} },  // To find out, we need to look inside your head.
    { id: 'p7', s: 18.89, e: 21.8, w: {"you": 18.89, "know": 19.11, "how": 19.4, "youre": 19.62, "moving": 19.98, "using": 20.42, "two": 20.78, "main": 21.0, "systems": 21.29} },  // You know how you're moving using two main systems.
    { id: 'p8', s: 22.24, e: 23.4, w: {"your": 22.24, "eyes": 22.57, "are": 22.9, "one": 23.15} },  // Your eyes are one.
    { id: 'p9', s: 23.69, e: 26.06, w: {"the": 23.69, "other": 23.91, "is": 24.27, "hidden": 24.41, "deep": 24.84, "inside": 25.13, "each": 25.56, "ear": 25.85} },  // The other is hidden deep inside each ear.
    { id: 'p10', s: 26.41, e: 28.03, w: {"its": 26.41, "called": 26.58, "the": 26.93, "vestibular": 27.1, "system": 27.68} },  // It's called the vestibular system,
    { id: 'p11', s: 28.54, e: 31.15, w: {"and": 28.54, "its": 28.76, "basically": 28.99, "a": 29.66, "builtin": 29.73, "motion": 30.25, "sensor": 30.7} },  // and it's basically a built-in motion sensor.
    { id: 'p12', s: 31.62, e: 33.94, w: {"three": 31.62, "tiny": 32.02, "loops": 32.34, "filled": 32.74, "with": 33.22, "fluid": 33.54} },  // Three tiny loops filled with fluid
    { id: 'p13', s: 34.34, e: 35.94, w: {"sense": 34.34, "every": 34.63, "time": 34.93, "your": 35.17, "head": 35.41, "turns": 35.65} },  // sense every time your head turns.
    { id: 'p14', s: 36.37, e: 39.32, w: {"and": 36.37, "two": 36.61, "little": 36.85, "sacs": 37.33, "lined": 37.65, "with": 38.05, "tiny": 38.36, "crystals": 38.68} },  // And two little sacs lined with tiny crystals
    { id: 'p15', s: 39.39, e: 41.61, w: {"feel": 39.39, "you": 39.71, "speed": 39.95, "up": 40.34, "slow": 40.5, "down": 40.82, "and": 41.14, "tip": 41.37} },  // feel you speed up, slow down and tip.
    { id: 'p16', s: 42.06, e: 44.42, w: {"most": 42.06, "of": 42.34, "the": 42.49, "time": 42.7, "your": 42.99, "eyes": 43.27, "and": 43.56, "ears": 43.78, "agree": 44.06} },  // Most of the time your eyes and ears agree.
    { id: 'p17', s: 44.83, e: 47.83, w: {"but": 44.83, "picture": 45.03, "yourself": 45.51, "in": 46.06, "the": 46.19, "back": 46.4, "seat": 46.67, "reading": 46.94, "a": 47.42, "phone": 47.49} },  // But picture yourself in the back seat, reading a phone.
    { id: 'p18', s: 48.21, e: 50.31, w: {"your": 48.21, "eyes": 48.47, "see": 48.74, "a": 48.93, "screen": 49.0, "that": 49.39, "isnt": 49.66, "moving": 49.92} },  // Your eyes see a screen that isn't moving.
    { id: 'p19', s: 50.7, e: 53.4, w: {"your": 50.7, "inner": 50.97, "ear": 51.32, "feels": 51.53, "every": 51.87, "bump": 52.22, "and": 52.5, "every2": 52.7, "curve": 53.05} },  // Your inner ear feels every bump and every curve.
    { id: 'p20', s: 53.79, e: 56.09, w: {"one": 53.79, "says": 54.02, "still": 54.32, "the": 54.71, "other": 54.94, "says2": 55.32, "moving": 55.63} },  // One says still. The other says moving.
    { id: 'p21', s: 56.44, e: 58.65, w: {"scientists": 56.44, "call": 57.11, "this": 57.38, "sensory": 57.65, "conflict": 58.12} },  // Scientists call this sensory conflict,
    { id: 'p22', s: 59.26, e: 62.05, w: {"and": 59.26, "its": 59.45, "the": 59.64, "leading": 59.83, "explanation": 60.28, "for": 60.97, "motion": 61.16, "sickness": 61.55} },  // and it's the leading explanation for motion sickness.
    { id: 'p23', s: 62.51, e: 65.18, w: {"so": 62.51, "why": 62.65, "would": 62.86, "a": 63.2, "mixedup": 63.27, "signal": 63.74, "make": 64.15, "you": 64.43, "feel": 64.63, "sick": 64.9} },  // So why would a mixed-up signal make you feel sick?
    { id: 'p24', s: 65.68, e: 69.12, w: {"one": 65.68, "popular": 65.93, "theory": 66.52, "goes": 67.02, "way": 67.35, "back": 67.61, "to": 67.94, "our": 68.11, "ancestors": 68.36} },  // One popular theory goes way back to our ancestors.
    { id: 'p25', s: 69.51, e: 72.42, w: {"long": 69.51, "ago": 69.78, "if": 69.99, "your": 70.13, "senses": 70.41, "suddenly": 70.82, "stopped": 71.38, "agreeing": 71.86} },  // Long ago, if your senses suddenly stopped agreeing,
    { id: 'p26', s: 72.98, e: 75.67, w: {"a": 72.98, "likely": 73.05, "cause": 73.47, "was": 73.83, "something": 74.04, "toxic": 74.68, "youd": 75.03, "eaten": 75.32} },  // a likely cause was something toxic you'd eaten.
    { id: 'p27', s: 76.04, e: 78.31, w: {"so": 76.04, "the": 76.17, "brain": 76.36, "may": 76.69, "have": 76.88, "learned": 77.14, "a": 77.59, "simple": 77.66, "rule": 78.05} },  // So the brain may have learned a simple rule.
    { id: 'p28', s: 78.75, e: 81.14, w: {"signals": 78.75, "dont": 79.29, "match": 79.59, "empty": 79.98, "the": 80.36, "stomach": 80.6} },  // Signals don't match? Empty the stomach.
    { id: 'p29', s: 81.59, e: 83.68, w: {"researchers": 81.59, "still": 82.36, "debate": 82.71, "this": 83.13, "idea": 83.4} },  // Researchers still debate this idea,
    { id: 'p30', s: 84.25, e: 85.86, w: {"but": 84.25, "it": 84.41, "would": 84.52, "explain": 84.79, "why": 85.17, "a": 85.33, "bumpy": 85.38, "ride": 85.65} },  // but it would explain why a bumpy ride
    { id: 'p31', s: 85.92, e: 88.71, w: {"can": 85.92, "feel": 86.22, "a": 86.62, "lot": 86.72, "like": 87.02, "food": 87.42, "poisoning": 87.82} },  // can feel a lot like food poisoning.
    { id: 'p32', s: 89.09, e: 90.64, w: {"heres": 89.09, "where": 89.41, "it": 89.73, "gets": 89.86, "personal": 90.12} },  // Here's where it gets personal.
    { id: 'p33', s: 91.07, e: 94.25, w: {"in": 91.07, "2015": 91.27, "the": 91.68, "genetics": 91.99, "company": 92.81, "23andme": 93.53} },  // In 2015 the genetics company 23andMe
    { id: 'p34', s: 94.25, e: 97.84, w: {"studied": 94.25, "more": 94.96, "than": 95.37, "eighty": 95.78, "thousand": 96.4, "people": 97.22} },  // studied more than eighty thousand people.
    { id: 'p35', s: 98.24, e: 100.68, w: {"they": 98.24, "found": 98.54, "thirtyfive": 98.92, "spots": 99.68, "in": 100.07, "our": 100.22, "dna": 100.45} },  // They found thirty-five spots in our DNA
    { id: 'p36', s: 101.05, e: 102.53, w: {"linked": 101.05, "to": 101.45, "motion": 101.59, "sickness": 101.99} },  // linked to motion sickness.
    { id: 'p37', s: 102.92, e: 106.34, w: {"and": 102.92, "some": 103.18, "studies": 103.53, "suggest": 104.15, "up": 104.76, "to": 104.94, "seventy": 105.11, "percent": 105.73} },  // And some studies suggest up to seventy percent
    { id: 'p38', s: 106.41, e: 109.11, w: {"of": 106.41, "the": 106.53, "difference": 106.72, "between": 107.33, "people": 107.76, "comes": 108.13, "down": 108.43, "to": 108.68, "genes": 108.8} },  // of the difference between people comes down to genes.
    { id: 'p39', s: 109.53, e: 110.71, w: {"age": 109.53, "matters": 109.81, "too": 110.44} },  // Age matters too.
    { id: 'p40', s: 111.05, e: 114.22, w: {"kids": 111.05, "between": 111.35, "about": 111.88, "seven": 112.26, "and": 112.64, "twelve": 112.86, "get": 113.32, "it": 113.54, "the": 113.69, "most": 113.92} },  // Kids between about seven and twelve get it the most,
    { id: 'p41', s: 114.66, e: 116.97, w: {"and": 114.66, "lots": 114.86, "of": 115.11, "people": 115.24, "grow": 115.62, "out": 115.88, "of2": 116.07, "the": 116.2, "worst": 116.39, "of3": 116.71, "it": 116.84} },  // and lots of people grow out of the worst of it.
    { id: 'p42', s: 117.42, e: 119.58, w: {"women": 117.42, "report": 117.79, "it": 118.24, "more": 118.38, "often": 118.68, "than": 119.06, "men": 119.35} },  // Women report it more often than men,
    { id: 'p43', s: 120.11, e: 122.28, w: {"and": 120.11, "so": 120.34, "do": 120.49, "people": 120.65, "who": 121.11, "get": 121.35, "migraines": 121.58} },  // and so do people who get migraines.
    { id: 'p44', s: 122.67, e: 125.69, w: {"so": 122.67, "if": 122.82, "your": 122.97, "whole": 123.27, "family": 123.65, "turns": 124.1, "green": 124.48, "on": 124.86, "road": 125.01, "trips": 125.31} },  // So if your whole family turns green on road trips,
    { id: 'p45', s: 126.11, e: 128.09, w: {"thats": 126.11, "probably": 126.46, "not": 127.03, "a": 127.24, "coincidence": 127.31} },  // that's probably not a coincidence.
    { id: 'p46', s: 128.54, e: 130.15, w: {"now": 128.54, "for": 128.76, "the": 128.98, "strangest": 129.2, "part": 129.86} },  // Now for the strangest part.
    { id: 'p47', s: 130.53, e: 135.07, w: {"people": 130.53, "who": 130.99, "have": 131.22, "completely": 131.53, "lost": 132.3, "the": 132.6, "motion": 132.83, "sensors": 133.3, "in": 133.84, "their": 133.99, "inner": 134.37, "ears": 134.76} },  // People who have completely lost the motion sensors in their inner ears
    { id: 'p48', s: 135.6, e: 137.39, w: {"basically": 135.6, "dont": 136.12, "get": 136.35, "motion": 136.52, "sick": 136.87, "at": 137.1, "all": 137.21} },  // basically don't get motion sick at all.
    { id: 'p49', s: 137.85, e: 141.01, w: {"no": 137.85, "inner": 138.04, "ear": 138.52, "signal": 138.8, "no2": 139.38, "conflict": 139.57, "no3": 140.34, "alarm": 140.53} },  // No inner ear signal, no conflict, no alarm.
    { id: 'p50', s: 141.46, e: 142.94, w: {"what": 141.46, "you": 141.72, "can": 141.91, "see": 142.1, "matters": 142.29, "too": 142.74} },  // What you can see matters too.
    { id: 'p51', s: 143.33, e: 146.81, w: {"one": 143.33, "study": 143.53, "found": 143.87, "that": 144.2, "passengers": 144.47, "who": 145.14, "couldnt": 145.34, "see": 145.81, "the": 146.01, "road": 146.21, "ahead": 146.48} },  // One study found that passengers who couldn't see the road ahead
    { id: 'p52', s: 147.31, e: 150.05, w: {"were": 147.31, "about": 147.59, "three": 147.94, "times": 148.29, "more": 148.64, "likely": 148.92, "to": 149.35, "feel": 149.49, "sick": 149.77} },  // were about three times more likely to feel sick.
    { id: 'p53', s: 150.5, e: 152.34, w: {"and": 150.5, "the": 150.74, "driver": 150.98, "usually": 151.46, "fine": 152.02} },  // And the driver? Usually fine.
    { id: 'p54', s: 152.69, e: 155.37, w: {"the": 152.69, "driver": 152.9, "knows": 153.32, "every": 153.68, "turn": 154.03, "before": 154.31, "it": 154.73, "happens": 154.87} },  // The driver knows every turn before it happens,
    { id: 'p55', s: 155.77, e: 158.1, w: {"so": 155.77, "the": 155.92, "brain": 156.16, "isnt": 156.54, "caught": 156.86, "by": 157.32, "surprise": 157.48} },  // so the brain isn't caught by surprise.
    { id: 'p56', s: 158.46, e: 162.03, w: {"this": 158.46, "old": 158.83, "alarm": 159.1, "is": 159.56, "now": 159.74, "facing": 160.02, "brand": 160.57, "new": 161.02, "problems": 161.3} },  // This old alarm is now facing brand new problems.
    { id: 'p57', s: 162.51, e: 165.25, w: {"virtual": 162.51, "reality": 163.04, "flips": 163.57, "the": 163.95, "conflict": 164.18, "around": 164.79} },  // Virtual reality flips the conflict around.
    { id: 'p58', s: 165.66, e: 169.32, w: {"your": 165.66, "eyes": 165.98, "see": 166.3, "motion": 166.54, "but": 167.02, "your2": 167.26, "body": 167.57, "sits": 167.89, "perfectly": 168.21, "still": 168.93} },  // Your eyes see motion, but your body sits perfectly still.
    { id: 'p59', s: 169.8, e: 172.02, w: {"and": 169.8, "as": 170.02, "cars": 170.16, "start": 170.44, "driving": 170.8, "themselves": 171.3} },  // And as cars start driving themselves,
    { id: 'p60', s: 172.49, e: 174.06, w: {"everyone": 172.49, "becomes": 172.99, "a": 173.43, "passenger": 173.5} },  // everyone becomes a passenger,
    { id: 'p61', s: 174.52, e: 176.84, w: {"staring": 174.52, "at": 175.03, "screens": 175.17, "instead": 175.68, "of": 176.19, "the": 176.33, "road": 176.55} },  // staring at screens instead of the road.
    { id: 'p62', s: 177.27, e: 179.35, w: {"so": 177.27, "engineers": 177.43, "are": 178.12, "testing": 178.35, "tricks": 178.89} },  // So engineers are testing tricks,
    { id: 'p63', s: 179.69, e: 181.53, w: {"like": 179.69, "lights": 179.93, "that": 180.28, "hint": 180.52, "at": 180.76, "the": 180.88, "next": 181.06, "turn": 181.29} },  // like lights that hint at the next turn,
    { id: 'p64', s: 182.04, e: 184.44, w: {"to": 182.04, "help": 182.2, "your": 182.5, "eyes": 182.81, "and": 183.12, "ears": 183.35, "agree": 183.66, "again": 184.05} },  // to help your eyes and ears agree again.
    { id: 'p65', s: 184.89, e: 187.53, w: {"so": 184.89, "the": 185.04, "next": 185.26, "time": 185.57, "a": 185.87, "car": 185.94, "ride": 186.17, "makes": 186.47, "you": 186.85, "queasy": 187.07} },  // So the next time a car ride makes you queasy,
    { id: 'p66', s: 187.76, e: 190.06, w: {"remember": 187.76, "your": 188.44, "brain": 188.78, "isnt": 189.2, "broken": 189.54} },  // remember, your brain isn't broken.
    { id: 'p67', s: 190.5, e: 193.33, w: {"its": 190.5, "just": 190.69, "protecting": 190.95, "you": 191.59, "from": 191.78, "a": 192.04, "poison": 192.1, "that": 192.49, "isnt": 192.75, "there": 193.01} },  // It's just protecting you from a poison that isn't there.
    { id: 'p68', s: 193.74, e: 195.63, w: {"next": 193.74, "time": 194.04, "what": 194.34, "really": 194.64, "happens": 195.1} },  // Next time, what really happens
    { id: 'p69', s: 195.7, e: 198.15, w: {"if": 195.7, "a": 195.85, "porcupines": 195.93, "quills": 196.69, "get": 197.15, "stuck": 197.38, "in": 197.77, "you": 197.92} },  // if a porcupine's quills get stuck in you?
  ];
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in p' + i); return v; };
  const PS = (i) => BEATS[i].s, PE = (i) => BEATS[i].e;
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', yellow: '#ffd23f', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', sky: '#bfe9ff', teal: '#1fb6a6', green: '#7bd65b', sick: '#9ccf5a', purple: '#7a5cff', pink: '#ff8fb1', brain: '#ff9fb8', skin: '#f3c7a0', skin2: '#c98a5e', white: '#ffffff', grey: '#8b93a8', road: '#4a4f63' };
  const rr = (ctx, x, y, w, h, r) => { r = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 18, col = 'rgba(20,20,60,0.15)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 30, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size, o.weight || 700) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 12);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700);
    ctx.restore();
  };
  // big headline with long shadow, popped by k
  const big = (ctx, s, x, y, size, col, k = 1, sh = 14) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col, 700), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 10, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(-200, -200, W + 400, HH + 400); };
  const ground = (ctx, y, col) => { ctx.fillStyle = col; ctx.fillRect(-200, y, W + 400, HH - y + 200); };
  const hills = (ctx, y0, cols, off = 0) => cols.forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(-200, HH + 200); for (let x = -200; x <= W + 200; x += 20) ctx.lineTo(x, y0 + i * 50 + Math.sin((x + off * (i + 1)) * 0.005 + i * 2) * 34 + Math.sin((x + off) * 0.013 + i) * 12); ctx.lineTo(W + 200, HH + 200); ctx.closePath(); ctx.fill(); });
  const check = (ctx, x, y, s, col = PAL.green, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); longShadow(ctx, (c) => circle(ctx, 0, 0, 30, c || col), 8); ctx.strokeStyle = PAL.white; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-13, 1); ctx.lineTo(-3, 11); ctx.lineTo(14, -10); ctx.stroke(); ctx.restore(); };
  const cross = (ctx, x, y, s, col = PAL.red, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); longShadow(ctx, (c) => circle(ctx, 0, 0, 30, c || col), 8); ctx.strokeStyle = PAL.white; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-11, -11); ctx.lineTo(11, 11); ctx.moveTo(11, -11); ctx.lineTo(-11, 11); ctx.stroke(); ctx.restore(); };

  // a flat cartoon face; sick 0..1 turns the skin green and the smile wavy
  const face = (ctx, x, y, r, sick = 0, o = {}) => {
    ctx.save(); ctx.translate(x, y);
    const skin = H.rgba(H.mix(o.skin || PAL.skin, '#a6d36a', sick));
    if (o.hair !== false) { ctx.fillStyle = o.hairCol || '#3b2a20'; ctx.beginPath(); ctx.arc(0, -r * 0.12, r * 1.04, Math.PI * 1.02, Math.PI * 1.98); ctx.fill(); }
    circle(ctx, 0, 0, r, skin);
    if (o.hair !== false) { ctx.fillStyle = o.hairCol || '#3b2a20'; ctx.beginPath(); ctx.ellipse(-r * 0.2, -r * 0.78, r * 0.75, r * 0.32, -0.2, 0, Math.PI * 2); ctx.fill(); }
    const ey = -r * 0.12, ex = r * 0.36;
    if (sick > 0.5) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = r * 0.09; ctx.lineCap = 'round'; [-1, 1].forEach((sg) => { ctx.beginPath(); ctx.arc(sg * ex, ey + r * 0.04, r * 0.11, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke(); }); }
    else { circle(ctx, -ex, ey, r * 0.1, PAL.ink); circle(ctx, ex, ey, r * 0.1, PAL.ink); }
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = r * 0.08; ctx.lineCap = 'round'; ctx.beginPath();
    if (sick > 0.5) { for (let i = 0; i <= 8; i++) { const u = i / 8; ctx.lineTo(-r * 0.32 + u * r * 0.64, r * 0.42 + Math.sin(u * Math.PI * 3) * r * 0.06); } }
    else ctx.arc(0, r * 0.18, r * 0.32, Math.PI * 0.2, Math.PI * 0.8);
    ctx.stroke();
    if (sick < 0.5) { ctx.fillStyle = 'rgba(255,120,120,0.35)'; circle(ctx, -r * 0.55, r * 0.2, r * 0.13, 'rgba(255,120,120,0.35)'); circle(ctx, r * 0.55, r * 0.2, r * 0.13, 'rgba(255,120,120,0.35)'); }
    if (sick > 0.7) { ctx.fillStyle = PAL.blue; ctx.beginPath(); ctx.moveTo(r * 0.78, -r * 0.5); ctx.quadraticCurveTo(r * 0.95, -r * 0.2, r * 0.78, -r * 0.12); ctx.quadraticCurveTo(r * 0.62, -r * 0.2, r * 0.78, -r * 0.5); ctx.fill(); }
    ctx.restore();
  };
  // person: face + rounded body
  const person = (ctx, x, y, s, col, sick = 0, o = {}) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = col; rr(ctx, -34, -10, 68, 80, 30); ctx.fill(); face(ctx, 0, -40, 32, sick, o); ctx.restore(); };
  // side-view car facing right. faces: array of sick values for the windows (front, back)
  const car = (ctx, x, y, s, col, t, o = {}) => {
    ctx.save(); ctx.translate(x, y + (o.bounce || 0)); ctx.rotate(o.tilt || 0); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -170, -70, 340, 80, 30); ctx.fill(); ctx.beginPath(); ctx.moveTo(-110, -66); ctx.lineTo(-80, -140); ctx.lineTo(70, -140); ctx.lineTo(120, -66); ctx.closePath(); ctx.fill(); }, 14);
    ctx.fillStyle = '#cdeeff'; ctx.beginPath(); ctx.moveTo(-92, -72); ctx.lineTo(-70, -126); ctx.lineTo(-10, -126); ctx.lineTo(-10, -72); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(6, -72); ctx.lineTo(6, -126); ctx.lineTo(62, -126); ctx.lineTo(100, -72); ctx.closePath(); ctx.fill();
    const fs = o.faces || [];
    ctx.save(); ctx.beginPath(); ctx.moveTo(-92, -72); ctx.lineTo(-70, -126); ctx.lineTo(-10, -126); ctx.lineTo(-10, -72); ctx.closePath(); ctx.moveTo(6, -72); ctx.lineTo(6, -126); ctx.lineTo(62, -126); ctx.lineTo(100, -72); ctx.closePath(); ctx.clip();
    if (fs[1] != null) face(ctx, -48, -88, 26, fs[1], { hairCol: o.hair1 || '#7a3e1d' });
    if (fs[0] != null) face(ctx, 44, -88, 26, fs[0], { hairCol: '#2b2b44' });
    ctx.restore();
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(-170, -40, 340, 8);
    circle(ctx, 162, -40, 10, PAL.yellow);
    [-100, 100].forEach((wx) => { circle(ctx, wx, 12, 36, PAL.ink); circle(ctx, wx, 12, 16, '#c7cbd6'); ctx.save(); ctx.translate(wx, 12); ctx.rotate(t * 9); ctx.fillStyle = PAL.ink; ctx.fillRect(-3, -14, 6, 28); ctx.restore(); });
    ctx.restore();
  };
  const road = (ctx, y, t, speed = 300, col = PAL.road) => { ctx.fillStyle = col; ctx.fillRect(-200, y, W + 400, 70); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 6; ctx.setLineDash([40, 40]); ctx.lineDashOffset = t * speed; ctx.beginPath(); ctx.moveTo(-200, y + 35); ctx.lineTo(W + 200, y + 35); ctx.stroke(); ctx.setLineDash([]); };
  // brain (side view blob with folds)
  const brain = (ctx, x, y, s, col = PAL.brain, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; ctx.beginPath(); ctx.ellipse(0, 0, 110, 80, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(40, 60, 45, 30, 0.3, 0, Math.PI * 2); ctx.fill(); }, o.sh ?? 14);
    ctx.strokeStyle = H.rgba(H.mix(col, '#7a2a4a', 0.35)); ctx.lineWidth = 7; ctx.lineCap = 'round';
    [[-70, -30, 30, 0.2, 2.6], [-20, -45, 34, 3.4, 5.8], [40, -25, 32, 0.4, 2.9], [-50, 25, 30, 3.6, 6.0], [20, 25, 28, 0.2, 2.6], [75, 15, 22, 3.3, 5.6]].forEach(([a, b, r, s0, s1]) => { ctx.beginPath(); ctx.arc(a, b, r, s0, s1); ctx.stroke(); });
    ctx.restore();
  };
  const eye = (ctx, x, y, s, lx = 0, ly = 0, blink = 0) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; ctx.beginPath(); ctx.moveTo(-100, 0); ctx.quadraticCurveTo(0, -90 * (1 - blink), 100, 0); ctx.quadraticCurveTo(0, 90 * (1 - blink), -100, 0); ctx.fill(); }, 12);
    ctx.save(); ctx.beginPath(); ctx.moveTo(-100, 0); ctx.quadraticCurveTo(0, -90 * (1 - blink), 100, 0); ctx.quadraticCurveTo(0, 90 * (1 - blink), -100, 0); ctx.clip();
    circle(ctx, lx * 30, ly * 20, 40, PAL.teal); circle(ctx, lx * 30, ly * 20, 20, PAL.ink); circle(ctx, lx * 30 + 12, ly * 20 - 12, 8, PAL.white); ctx.restore();
    ctx.restore();
  };
  // inner ear: three loops (semicircular canals) + vestibule with two sacs + cochlea snail. o.slosh animates fluid dots
  const innerEar = (ctx, x, y, s, t, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const loops = [[-20, -70, 60, PAL.orange], [-70, -10, 55, PAL.purple], [10, -20, 50, PAL.teal]];
    const la = o.loopA ?? 1;
    ctx.lineCap = 'round';
    ctx.save(); ctx.globalAlpha = la;
    ctx.lineWidth = 20; ctx.strokeStyle = 'rgba(20,20,60,0.15)';
    loops.forEach(([cx, cy, r], i) => { ctx.beginPath(); if (i === 2) ctx.ellipse(cx + 12, cy + 12, r * 1.1, r * 0.55, -0.3, 0, Math.PI * 2); else ctx.arc(cx + 12, cy + 12, r, 0, Math.PI * 2); ctx.stroke(); });
    loops.forEach(([cx, cy, r, c], i) => { ctx.strokeStyle = c; ctx.lineWidth = 20; ctx.beginPath(); if (i === 2) ctx.ellipse(cx, cy, r * 1.1, r * 0.55, -0.3, 0, Math.PI * 2); else ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke(); });
    if (o.slosh) loops.forEach(([cx, cy, r], i) => { for (let j = 0; j < 3; j++) { const a = o.slosh * (i % 2 ? -1 : 1) * 2.2 + j * 2.1 + i; const px = i === 2 ? cx + Math.cos(a) * r * 1.1 * Math.cos(-0.3) - Math.sin(a) * r * 0.55 * Math.sin(-0.3) : cx + Math.cos(a) * r; const py = i === 2 ? cy + Math.cos(a) * r * 1.1 * Math.sin(-0.3) + Math.sin(a) * r * 0.55 * Math.cos(-0.3) : cy + Math.sin(a) * r; circle(ctx, px, py, 6, PAL.white); } });
    ctx.restore();
    // vestibule
    ctx.save(); ctx.globalAlpha = o.sacA ?? 1;
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#f0b37e'; ctx.beginPath(); ctx.ellipse(10, 40, 70, 46, 0.2, 0, Math.PI * 2); ctx.fill(); }, 10);
    circle(ctx, -14, 36, 20, '#ffe08a'); circle(ctx, 34, 48, 18, '#ffe08a');
    for (let i = 0; i < 5; i++) { circle(ctx, -24 + i * 5, 30 + (i % 2) * 6, 3, PAL.white); circle(ctx, 26 + i * 4, 44 + (i % 2) * 5, 3, PAL.white); }
    ctx.restore();
    // cochlea (hearing part, faded)
    ctx.save(); ctx.globalAlpha = o.cochA ?? 0.55; ctx.strokeStyle = '#c99ad6'; ctx.lineWidth = 18; ctx.beginPath(); for (let i = 0; i <= 60; i++) { const a = i / 60 * Math.PI * 4.2, r = 52 - i * 0.7; ctx.lineTo(110 + Math.cos(a) * r, 90 + Math.sin(a) * r * 0.85); } ctx.stroke(); ctx.restore();
    ctx.restore();
  };
  const phone = (ctx, x, y, s, scr = '#6ad0ff') => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ink; rr(ctx, -40, -75, 80, 150, 14); ctx.fill(); }, 8); ctx.fillStyle = scr; rr(ctx, -32, -62, 64, 120, 6); ctx.fill(); ctx.fillStyle = PAL.white; for (let i = 0; i < 4; i++) { rr(ctx, -24, -50 + i * 26, 48 - (i % 2) * 16, 12, 6); ctx.fill(); } ctx.restore(); };
  const bell = (ctx, x, y, s, t, ring = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(t * 40) * 0.25 * ring); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.yellow; ctx.beginPath(); ctx.moveTo(-60, 40); ctx.quadraticCurveTo(-55, -60, 0, -62); ctx.quadraticCurveTo(55, -60, 60, 40); ctx.lineTo(72, 52); ctx.lineTo(-72, 52); ctx.closePath(); ctx.fill(); circle(ctx, 0, 62, 16, c || PAL.orange); }, 12); ctx.restore();
    if (ring > 0.01) { ctx.save(); ctx.strokeStyle = PAL.red; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.globalAlpha = ring; [-1, 1].forEach((sg) => { for (let i = 0; i < 2; i++) { ctx.beginPath(); ctx.arc(x, y, s * (95 + i * 30 + (t * 60 % 20)), sg > 0 ? -0.6 : Math.PI - 0.6 + 0.0, sg > 0 ? 0.6 : Math.PI + 0.6); ctx.stroke(); } }); ctx.restore(); } };
  const bottle = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || '#5fbf3f'; rr(ctx, -50, -40, 100, 130, 24); ctx.fill(); rr(ctx, -20, -90, 40, 60, 8); ctx.fill(); ctx.fillStyle = c || '#7a4a2d'; rr(ctx, -26, -110, 52, 26, 8); ctx.fill(); }, 12); ctx.fillStyle = PAL.cream; rr(ctx, -40, -5, 80, 60, 10); ctx.fill(); ctx.strokeStyle = PAL.red; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-16, 10); ctx.lineTo(16, 40); ctx.moveTo(16, 10); ctx.lineTo(-16, 40); ctx.stroke(); ctx.restore(); };
  const dna = (ctx, x, y, len, t, hiN = 0, hiCol = PAL.yellow, o = {}) => {
    const n = o.n || 36, amp = o.amp || 60;
    for (let i = 0; i < n; i++) { const u = i / (n - 1), px = x - len / 2 + u * len, a = u * Math.PI * 6 + t * 1.2, y1 = y + Math.sin(a) * amp, y2 = y - Math.sin(a) * amp;
      const front = Math.cos(a) > 0; ctx.strokeStyle = i < hiN ? hiCol : 'rgba(255,255,255,0.5)'; ctx.lineWidth = i < hiN ? 8 : 5; ctx.beginPath(); ctx.moveTo(px, y1); ctx.lineTo(px, y2); ctx.stroke();
      circle(ctx, px, y1, front ? 11 : 8, front ? PAL.pink : '#c76b8c'); circle(ctx, px, y2, front ? 8 : 11, front ? '#3d8fd6' : PAL.blue); }
  };
  // chapter label in the top-left corner during a chapter
  let CH = [];
  const chapterTag = (ctx, t) => { let c = null, last = null; for (const x of CH) { if (t >= x.t - 0.4) last = x; if (t >= x.t + 2.4) c = x; } if (!c || last !== c) return; const k = EO(t, c.t + 2.4, c.t + 2.9); ctx.save(); ctx.globalAlpha = k; pill(ctx, `${c.n} · ${c.title}`, 30 + measure(ctx, `${c.n} · ${c.title}`, 20) / 2 + 14, 34, { size: 20, bg: PAL.ink, col: PAL.cream, sh: 6 }); ctx.restore(); };
  // a chapter-card scene: solid colour field, big number disc, title
  const chapterCard = (n, title, bg, fg, t0, sub) => (ctx, t) => {
    sky(ctx, bg, H.rgba(H.mix(bg, '#000000', 0.18)));
    const sr = H.rng(n * 11); ctx.save(); ctx.globalAlpha = 0.18; for (let i = 0; i < 14; i++) { const x = sr() * W, y = sr() * HH, r = 20 + sr() * 70; circle(ctx, x + Math.sin(t * 0.6 + i) * 10, y, r, PAL.white); } ctx.restore();
    const k = pop(t, t0);
    ctx.save(); ctx.translate(W / 2, 250); ctx.scale(k, k); longShadow(ctx, (c) => circle(ctx, 0, 0, 80, c || PAL.cream), 18); text(ctx, String(n), 0, 6, 96, bg, 700); ctx.restore();
    big(ctx, title, W / 2, 430, 84, fg, pop(t, t0 + 0.2), 16);
    if (sub) pill(ctx, sub, W / 2, 540, { k: pop(t, t0 + 0.5), size: 30, bg: PAL.ink, col: PAL.cream });
  };
  // ---------- scenes: each draws its own background. from = first phrase index (cut lands in the pause before it) ----------
  const SC = [];
  const add = (from, tr, draw, sfx, cam) => SC.push({ from, tr, draw, sfx, cam });
  const bubble = (ctx, x, y, w, h, tx, ty, k, col = PAL.white) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -w / 2, -h / 2, w, h, 40); ctx.fill(); ctx.beginPath(); ctx.moveTo(-30, h / 2 - 10); ctx.lineTo((tx - x) / k, (ty - y) / k); ctx.lineTo(10, h / 2 - 10); ctx.closePath(); ctx.fill(); }, 12); ctx.restore(); };

  // S1 hook: a car on a winding country road; the back-seat kid turns green; the brain's thought: POISON?!
  add(0, 'cut', (ctx, t) => {
    sky(ctx, '#8fd8ff', '#dff4ff');
    circle(ctx, 1120, 110, 60, '#ffe066');
    hills(ctx, 400, ['#9fe08a', '#7cc96a', '#5fb35a'], t * 60);
    road(ctx, 600, t, 420);
    const sick = EO(t, T(0, 'carsick'), T(0, 'carsick') + 0.8);
    const bounce = Math.sin(t * 11) * 4 + Math.sin(t * 3.1) * 6;
    car(ctx, 520, 610, 1.15, PAL.red, t, { faces: [0, sick], bounce, tilt: Math.sin(t * 2.3) * 0.03 });
    big(ctx, 'CARSICK', 340, 130, 92, PAL.ink, pop(t, T(0, 'carsick') - 0.1) * bump(t, T(0, 'carsick')));
    const bk = pop(t, T(1, 'brain') - 0.15);
    bubble(ctx, 960, 250, 420, 300, 640, 470, bk);
    if (bk > 0.01) { ctx.save(); ctx.translate(960, 250); ctx.scale(bk, bk); brain(ctx, -80, -10, 0.75, PAL.brain, { sh: 8 }); const bo = pop(t, T(1, 'poison') - 0.15); if (bo > 0.01) { ctx.save(); ctx.translate(110, 10); ctx.scale(bo, bo); bottle(ctx, 0, 0, 0.75); ctx.restore(); } ctx.restore(); }
    pill(ctx, 'POISON?!', 960, 450, { k: pop(t, T(1, 'poison') - 0.05) * bump(t, T(1, 'poison') + 0.1), bg: PAL.green, col: PAL.ink, size: 44 });
  }, (k) => {
    k.play('whoosh', 0.05, { dur: 0.5, gain: 0.5 });
    k.play('pop', T(0, 'carsick') - 0.1, { f: 520, gain: 0.9 }); k.play('buzz', T(0, 'carsick') + 0.2, { f: 110, dur: 0.4, gain: 0.25, minor: true });
    k.play('pop', T(1, 'brain') - 0.15, { f: 700, gain: 0.6, minor: true });
    k.play('impact', T(1, 'poison'), { gain: 0.6 }); k.play('error', T(1, 'poison') + 0.05, { f: 'A3', gain: 0.35 });
  });

  // S2: one in three people; the alarm bell rings over the green one
  add(2, 'circle', (ctx, t) => {
    sky(ctx, '#ffe7b0', '#ffc27a');
    ground(ctx, 560, '#f2a65a');
    const gp = EO(t, T(2, 'people') - 0.2, T(2, 'people') + 0.4);
    [[360, PAL.blue, 0], [640, PAL.teal, 0], [920, PAL.purple, gp]].forEach(([x, c, s], i) => { const k = pop(t, PS(2) - 0.2 + i * 0.12); if (k > 0.01) { ctx.save(); ctx.translate(x, 470); ctx.scale(k, k); longShadow(ctx, () => {}, 0); person(ctx, 0, 0, 2.1, c, s, { hairCol: ['#3b2a20', '#e0a030', '#2b2b44'][i] }); ctx.restore(); } });
    pill(ctx, '1 IN 3', 640, 120, { k: pop(t, T(2, 'one') - 0.1) * bump(t, T(2, 'three')), bg: PAL.ink, col: PAL.cream, size: 70, h: 120 });
    const rk = EO(t, T(3, 'alarm') - 0.1, T(3, 'alarm') + 0.2);
    if (rk > 0.01) bell(ctx, 1110, 260, 0.75 * pop(t, T(3, 'alarm') - 0.15), t, rk * (0.4 + 0.6 * Math.abs(Math.sin(t * 2))));
    pill(ctx, 'ALMOST EVERY RIDE', 640, 660, { k: pop(t, T(3, 'every') - 0.1), bg: PAL.red, col: PAL.white, size: 36 });
  }, (k) => {
    [0, 1, 2].forEach((i) => k.play('pop', PS(2) - 0.2 + i * 0.12, { f: 500 + i * 80, gain: 0.6, minor: true }));
    k.play('stamp', T(2, 'three'), { gain: 0.5 }); k.play('buzz', T(2, 'people'), { f: 98, dur: 0.3, gain: 0.3, minor: true });
    for (let i = 0; i < 10; i++) k.play('tick', T(3, 'alarm') + i * 0.07, { f: 4200, gain: 0.35, minor: true });
    k.play('pop', T(3, 'every') - 0.1, { f: 640, gain: 0.7 });
  });

  // S3: why the back seat wrecks some of us while others read a book and feel fine
  add(4, 'slide', (ctx, t) => {
    sky(ctx, '#ffb3b3', '#ff8a8a'); ctx.fillStyle = '#9fe6d9'; ctx.fillRect(W / 2, -200, W, HH + 400);
    ctx.fillStyle = '#e46a6a'; ctx.fillRect(-200, 560, W / 2 + 200, 400); ctx.fillStyle = '#5cc7b5'; ctx.fillRect(W / 2, 560, W, 400);
    // left: green kid in a seat
    const sk = EO(t, T(4, 'wreck') - 0.2, T(4, 'wreck') + 0.5);
    ctx.fillStyle = '#6b4a9a'; rr(ctx, 170, 330, 300, 260, 40); ctx.fill(); rr(ctx, 210, 250, 220, 120, 30); ctx.fill();
    person(ctx, 320, 450, 2.0, PAL.blue, sk, { hairCol: '#7a3e1d' });
    // right: kid reading a book, calm
    ctx.fillStyle = '#2d8b7d'; rr(ctx, 810, 330, 300, 260, 40); ctx.fill(); rr(ctx, 850, 250, 220, 120, 30); ctx.fill();
    person(ctx, 960, 450, 2.0, PAL.orange, 0, { hairCol: '#2b2b44' });
    const bk = pop(t, T(5, 'read') - 0.1); if (bk > 0.01) { ctx.save(); ctx.translate(960, 530); ctx.scale(bk, bk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.yellow; rr(ctx, -90, -50, 85, 100, 8); ctx.fill(); rr(ctx, 5, -50, 85, 100, 8); ctx.fill(); }, 8); ctx.fillStyle = PAL.white; for (let i = 0; i < 4; i++) { ctx.fillRect(-78, -34 + i * 20, 60, 6); ctx.fillRect(18, -34 + i * 20, 60, 6); } ctx.restore(); }
    big(ctx, 'WHY?', W / 2, 110, 100, PAL.cream, pop(t, T(4, 'why') - 0.1), 14);
    pill(ctx, 'BACK SEAT = MISERY', 320, 650, { k: pop(t, T(4, 'wreck') - 0.1), bg: PAL.ink, col: PAL.cream, size: 30 });
    pill(ctx, 'TOTALLY FINE', 960, 650, { k: pop(t, T(5, 'fine') - 0.15), bg: PAL.white, col: '#1e7d6e', size: 34 });
    check(ctx, 1120, 260, 1.1, PAL.green, pop(t, T(5, 'fine') - 0.05));
  }, (k) => {
    k.play('pop', T(4, 'why') - 0.1, { f: 560, gain: 0.9 }); k.play('buzz', T(4, 'wreck'), { f: 92, dur: 0.35, gain: 0.3 });
    k.play('pop', T(4, 'wreck') - 0.1, { f: 620, gain: 0.6, minor: true });
    k.play('paper', T(5, 'read') - 0.1, { dur: 0.5, gain: 0.7 }); k.play('ding', T(5, 'fine'), { f: 'E6', gain: 0.35 });
  });

  // S4: into your head (camera dives toward the ear)
  add(6, 'circle', (ctx, t) => {
    sky(ctx, '#2b3a7a', '#4a5fb5');
    const sr = H.rng(5); for (let i = 0; i < 30; i++) circle(ctx, sr() * W, sr() * HH, 2 + sr() * 3, 'rgba(255,255,255,0.35)');
    // big head profile facing left
    ctx.save(); ctx.translate(700, 400);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.skin; ctx.beginPath(); ctx.ellipse(0, 0, 230, 260, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.moveTo(-200, -40); ctx.quadraticCurveTo(-290, 10, -215, 70); ctx.closePath(); ctx.fill(); ctx.fillRect(-60, 180, 150, 220); }, 20);
    ctx.fillStyle = '#3b2a20'; ctx.beginPath(); ctx.ellipse(40, -150, 230, 140, 0.15, Math.PI, Math.PI * 2.1); ctx.fill();
    circle(ctx, -130, -30, 14, PAL.ink);
    ctx.fillStyle = PAL.skin2; ctx.beginPath(); ctx.ellipse(70, 10, 42, 62, 0.1, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#a86a44'; ctx.beginPath(); ctx.ellipse(66, 14, 18, 30, 0.1, 0, Math.PI * 2); ctx.fill();
    // glow from inside the ear as we dive
    const g = EO(t, T(6, 'inside') - 0.3, T(6, 'head'));
    if (g > 0) { ctx.globalAlpha = g; const gr = ctx.createRadialGradient(66, 14, 4, 66, 14, 120); gr.addColorStop(0, '#fff6c8'); gr.addColorStop(1, 'rgba(255,246,200,0)'); ctx.fillStyle = gr; ctx.fillRect(-60, -110, 260, 260); }
    ctx.restore();
    pill(ctx, "LET'S LOOK INSIDE", 330, 120, { k: pop(t, T(6, 'look') - 0.1), bg: PAL.yellow, col: PAL.ink, size: 34 });
  }, (k) => { k.play('pop', T(6, 'look') - 0.1, { f: 600, gain: 0.7 }); k.play('riser', T(6, 'inside') - 0.3, { dur: 1.2, gain: 0.5 }); },
  (t) => { const z = 1 + 2.4 * H.ease.in(ph(t, T(6, 'inside') - 0.4, PE(6) + 0.35)); return { z, cx: 766, cy: 414 }; });

  // ===== Chapter 1: two sensors =====
  add(7, 'iris', chapterCard(1, 'TWO SENSORS', PAL.blue, PAL.cream, PS(7) - 0.1, 'how you know you are moving'), (k) => { k.play('impact', PS(7) - 0.1, { gain: 0.5 }); k.play('pop', T(7, 'two') - 0.1, { f: 520, gain: 0.8 }); k.play('pop', PS(7) + 0.4, { f: 700, gain: 0.5, minor: true }); });

  // S6: sensor 1 the eyes, sensor 2 hidden deep in each ear
  add(8, 'circle', (ctx, t) => {
    sky(ctx, '#e8f6ff', '#c4e6ff');
    ctx.fillStyle = '#ffe3ef'; ctx.fillRect(W / 2, -200, W, HH + 400);
    const ek = pop(t, T(8, 'eyes') - 0.15); if (ek > 0.01) { ctx.save(); ctx.translate(320, 350); ctx.scale(ek, ek); eye(ctx, 0, 0, 1.4, Math.sin(t * 1.3) * 0.6, 0, t % 3.2 > 3.05 ? 0.9 : 0); ctx.restore(); }
    pill(ctx, '1 · EYES', 320, 560, { k: pop(t, T(8, 'eyes') - 0.05), bg: PAL.teal, col: PAL.white, size: 40 });
    // head + ear cutaway on the right
    ctx.save(); ctx.translate(960, 360);
    ctx.fillStyle = PAL.skin; ctx.beginPath(); ctx.ellipse(0, 0, 170, 200, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#3b2a20'; ctx.beginPath(); ctx.ellipse(20, -110, 175, 110, 0.1, Math.PI, Math.PI * 2.1); ctx.fill();
    ctx.fillStyle = PAL.skin2; ctx.beginPath(); ctx.ellipse(40, 10, 32, 48, 0.1, 0, Math.PI * 2); ctx.fill();
    const ck = EO(t, T(9, 'hidden') - 0.2, T(9, 'deep') + 0.2);
    if (ck > 0.01) { ctx.save(); longShadow(ctx, (c) => circle(ctx, -20, 10, 130 * ck, c || '#5a2340'), 10); ctx.beginPath(); ctx.arc(-20, 10, 130 * ck, 0, Math.PI * 2); ctx.clip(); innerEar(ctx, -30, 0, 0.8, t, { cochA: 0.5 }); ctx.restore();
      ctx.strokeStyle = PAL.cream; ctx.lineWidth = 6; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.moveTo(40, 10); ctx.lineTo(70, 10); ctx.stroke(); ctx.setLineDash([]); }
    ctx.restore();
    pill(ctx, '2 · INNER EAR', 960, 620, { k: pop(t, T(9, 'ear') - 0.1), bg: PAL.purple, col: PAL.white, size: 40 });
    pill(ctx, 'hidden deep inside', 960, 110, { k: pop(t, T(9, 'hidden') - 0.1), size: 28, weight: 600 });
  }, (k) => { k.play('pop', T(8, 'eyes') - 0.15, { f: 600, gain: 0.8 }); k.play('riser', T(9, 'hidden') - 0.2, { dur: 0.6, gain: 0.4 }); k.play('ding', T(9, 'deep') + 0.1, { f: 'A5', gain: 0.3 }); k.play('pop', T(9, 'ear') - 0.1, { f: 700, gain: 0.8 }); });

  // S7: the vestibular system = a built-in motion sensor
  add(10, 'slide', (ctx, t) => {
    sky(ctx, '#3a2a6b', '#6a4fb0');
    const sr = H.rng(9); for (let i = 0; i < 26; i++) circle(ctx, sr() * W, sr() * HH, 3 + sr() * 4, 'rgba(255,255,255,0.18)');
    const ek = EO(t, PS(10) - 0.3, PS(10) + 0.4);
    ctx.save(); ctx.translate(560, 420); ctx.scale(0.8 + 0.2 * ek, 0.8 + 0.2 * ek); innerEar(ctx, 0, 0, 2.0, t, { cochA: 0.35, slosh: t * 0.6 }); ctx.restore();
    big(ctx, 'VESTIBULAR SYSTEM', W / 2, 90, 66, PAL.cream, pop(t, T(10, 'vestibular') - 0.1), 12);
    const mk = pop(t, T(11, 'motion') - 0.15);
    if (mk > 0.01) { ctx.save(); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.globalAlpha = mk; for (let i = 0; i < 3; i++) { const r = 250 + i * 34 + (t * 50 % 34); ctx.beginPath(); ctx.arc(560, 420, r, -0.5, 0.5); ctx.stroke(); ctx.beginPath(); ctx.arc(560, 420, r, Math.PI - 0.5, Math.PI + 0.5); ctx.stroke(); } ctx.restore(); }
    pill(ctx, 'BUILT-IN MOTION SENSOR', 1010, 600, { k: mk * bump(t, T(11, 'sensor')), bg: PAL.yellow, col: PAL.ink, size: 32 });
    pill(ctx, 'one in each ear', 1060, 250, { k: pop(t, T(10, 'system') + 0.2), size: 26, weight: 600 });
  }, (k) => { k.play('whoosh', T(10, 'vestibular') - 0.3, { dur: 0.4, gain: 0.5 }); k.play('pop', T(10, 'vestibular') - 0.1, { f: 520, gain: 0.8 }); k.play('pop', T(10, 'system') + 0.2, { f: 900, gain: 0.4, minor: true }); k.play('sparkle', T(11, 'motion') - 0.1, { n: 5, gain: 0.5 }); k.play('pop', T(11, 'motion') - 0.15, { f: 640, gain: 0.8 }); });

  // S8: three loops of fluid sense head turns (fluid sloshes as the head turns)
  add(12, 'circle', (ctx, t) => {
    sky(ctx, '#fff3df', '#ffe0b8');
    const turn = Math.sin(H.clamp(t - T(13, 'sense') + 0.2, 0, 99) * 3.2) * EO(t, T(13, 'sense') - 0.2, T(13, 'sense') + 0.3);
    const lk = [0, 1, 2].map((i) => pop(t, T(12, 'three') - 0.1 + i * 0.15));
    ctx.save(); ctx.translate(430, 400); ctx.scale(2.3, 2.3);
    innerEar(ctx, 0, 0, 1, t, { sacA: 0.2, cochA: 0.12, loopA: Math.min(1, lk[2] + 0.15), slosh: turn * 1.3 + (t > T(12, 'fluid') - 0.2 ? Math.sin(t * 1.4) * 0.15 : 0) });
    ctx.restore();
    pill(ctx, '3 LOOPS', 430, 90, { k: pop(t, T(12, 'loops') - 0.1), bg: PAL.orange, col: PAL.white, size: 44 });
    pill(ctx, 'filled with fluid', 430, 660, { k: pop(t, T(12, 'fluid') - 0.1), bg: PAL.blue, col: PAL.white, size: 30 });
    // right: a head that turns
    const hk = pop(t, T(13, 'sense') - 0.2);
    if (hk > 0.01) { ctx.save(); ctx.translate(1000, 360); ctx.scale(hk, hk); ctx.rotate(turn * 0.45); longShadow(ctx, (c) => circle(ctx, 0, 0, 110, c || PAL.skin), 14); ctx.fillStyle = '#3b2a20'; ctx.beginPath(); ctx.arc(0, -10, 114, Math.PI * 1.05, Math.PI * 1.95); ctx.fill(); circle(ctx, -38 + turn * 30, 0, 12, PAL.ink); circle(ctx, 38 + turn * 30, 0, 12, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(turn * 30, 30, 30, 0.3, Math.PI - 0.3); ctx.stroke(); ctx.restore();
      ctx.save(); ctx.globalAlpha = hk; ctx.strokeStyle = PAL.purple; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(1000, 360, 160, Math.PI * 1.2, Math.PI * 1.8); ctx.stroke(); ctx.restore(); arrow(ctx, 1080, 225, 1110, 250, PAL.purple, 9, hk); }
    pill(ctx, 'HEAD TURNS', 1000, 560, { k: pop(t, T(13, 'turns') - 0.15), bg: PAL.purple, col: PAL.white, size: 40 });
  }, (k) => { [0, 1, 2].forEach((i) => k.play('pop', T(12, 'three') - 0.1 + i * 0.15, { f: 500 + i * 120, gain: 0.7, minor: i > 0 })); k.noise(T(12, 'fluid') - 0.2, { dur: 1.2, color: 'brown', filter: 'lowpass', f: [[0, 300], [0.6, 900], [1.2, 400]], gain: 0.18, a: 0.3 }); k.play('swish', T(13, 'sense'), { gain: 0.5 }); k.play('swish', T(13, 'sense') + 1.0, { gain: 0.4, minor: true }); k.play('pop', T(13, 'turns') - 0.15, { f: 640, gain: 0.8 }); });

  // S9: two sacs with tiny crystals feel speed up, slow down and tip
  add(14, 'slide', (ctx, t) => {
    sky(ctx, '#dff7ef', '#bfeedd');
    const sp = T(15, 'speed'), sl = T(15, 'slow'), tp = T(15, 'tip');
    const shift = -40 * EO(t, sp - 0.15, sp + 0.25) + 80 * EO(t, sl - 0.15, sl + 0.2) - 40 * EO(t, tp - 0.4, tp - 0.1);
    const tilt = 0.22 * EO(t, tp - 0.15, tp + 0.3);
    ctx.save(); ctx.translate(520, 430); ctx.rotate(tilt);
    // sac cross-section: base, hair cells, gel, crystals
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#f0b37e'; rr(ctx, -330, 40, 660, 110, 40); ctx.fill(); }, 14);
    const hk = EO(t, PS(14) - 0.2, PS(14) + 0.5);
    for (let i = 0; i < 11; i++) { const x = -270 + i * 54; ctx.strokeStyle = '#8a5cff'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x, 40); ctx.quadraticCurveTo(x, -10, x + shift * 0.5, -50 * hk); ctx.stroke(); circle(ctx, x, 70, 16, '#ffd0a8'); }
    const gk = EO(t, T(14, 'lined') - 0.2, T(14, 'lined') + 0.3);
    if (gk > 0.01) { ctx.globalAlpha = gk; ctx.fillStyle = 'rgba(255,255,255,0.8)'; rr(ctx, -310 + shift, -110, 620, 70, 30); ctx.fill(); ctx.globalAlpha = 1; }
    const ck = EO(t, T(14, 'crystals') - 0.3, T(14, 'crystals') + 0.3), cr = H.rng(4);
    for (let i = 0; i < 26; i++) { const x = -290 + cr() * 580 + shift, y = -130 - cr() * 30, s = 12 + cr() * 10; if (i / 26 > ck) continue; ctx.save(); ctx.translate(x, y); ctx.rotate(cr() * 3); ctx.fillStyle = i % 3 ? '#ffe08a' : '#ffd23f'; ctx.fillRect(-s / 2, -s / 2, s, s * 1.4); ctx.restore(); }
    ctx.restore();
    pill(ctx, '2 LITTLE SACS', 520, 90, { k: pop(t, T(14, 'sacs') - 0.15), bg: PAL.ink, col: PAL.cream, size: 40 });
    pill(ctx, 'TINY CRYSTALS', 300, 200, { k: pop(t, T(14, 'crystals') - 0.1), bg: PAL.yellow, col: PAL.ink, size: 32 });
    // right column of motions
    [['SPEED UP', sp, PAL.green], ['SLOW DOWN', sl, PAL.red], ['TIP', tp, PAL.blue]].forEach(([s, tt, c], i) => pill(ctx, s, 1080, 230 + i * 120, { k: pop(t, tt - 0.12) * bump(t, tt), bg: c, col: PAL.white, size: 34 }));
  }, (k) => { k.play('pop', T(14, 'sacs') - 0.15, { f: 560, gain: 0.8 }); for (let i = 0; i < 8; i++) k.play('tick', T(14, 'crystals') - 0.3 + i * 0.06, { f: 5000 + i * 200, gain: 0.4, minor: true }); k.play('sparkle', T(14, 'crystals'), { n: 5, gain: 0.5 });
    [['speed', 'swish'], ['slow', 'thud'], ['tip', 'swish']].forEach(([w, s], i) => { k.play('pop', T(15, w) - 0.12, { f: 600 + i * 90, gain: 0.7 }); k.play(s, T(15, w), { gain: 0.45, f: 140, minor: true }); }); });

  // S10: most of the time eyes and ears agree
  add(16, 'circle', (ctx, t) => {
    sky(ctx, '#c9f2c7', '#9fe0a0');
    const k1 = pop(t, T(16, 'eyes') - 0.15), k2 = pop(t, T(16, 'ears') - 0.15);
    if (k1 > 0.01) { ctx.save(); ctx.translate(330, 330); ctx.scale(k1, k1); eye(ctx, 0, 0, 1.2, 0.4, 0); ctx.restore(); }
    if (k2 > 0.01) { ctx.save(); ctx.translate(930, 330); ctx.scale(k2, k2); innerEar(ctx, -20, -30, 1.3, t, { cochA: 0.3 }); ctx.restore(); }
    const ak = pop(t, T(16, 'agree') - 0.15);
    big(ctx, '=', W / 2, 330, 140, PAL.ink, ak, 12);
    check(ctx, 330, 520, 1.3, PAL.green, ak); check(ctx, 930, 520, 1.3, PAL.green, pop(t, T(16, 'agree') - 0.05));
    pill(ctx, 'THEY AGREE', W / 2, 640, { k: ak * bump(t, T(16, 'agree')), bg: PAL.ink, col: PAL.cream, size: 40 });
  }, (k) => { k.play('pop', T(16, 'eyes') - 0.15, { f: 600, gain: 0.7 }); k.play('pop', T(16, 'ears') - 0.15, { f: 720, gain: 0.7 }); ['C5', 'E5', 'G5'].forEach((n, i) => k.play('ding', T(16, 'agree') + i * 0.05, { f: n, gain: 0.3 })); });

  // S11: back seat, reading a phone. Eyes: still screen. Inner ear: every bump and curve.
  add(17, 'slide', (ctx, t) => {
    const b1 = T(19, 'bump'), cv = T(19, 'curve');
    const bump1 = Math.max(0, Math.sin(ph(t, b1 - 0.05, b1 + 0.35) * Math.PI)) * -18;
    const tilt = 0.07 * Math.sin(ph(t, cv - 0.1, cv + 1.0) * Math.PI);
    const jig = Math.sin(t * 13) * 2;
    sky(ctx, '#5a4a8a', '#3d3266');
    // window with scrolling scenery
    ctx.save(); ctx.translate(0, bump1 + jig); ctx.rotate(tilt);
    ctx.save(); rr(ctx, 120, 90, 640, 330, 50); ctx.clip();
    ctx.fillStyle = '#9ad8ff'; ctx.fillRect(120, 90, 640, 330); const off = t * 380;
    ctx.fillStyle = '#7cc96a'; ctx.beginPath(); ctx.moveTo(120, 420); for (let x = 120; x <= 760; x += 10) ctx.lineTo(x, 330 + Math.sin((x + off) * 0.01) * 30); ctx.lineTo(760, 420); ctx.fill();
    for (let i = 0; i < 6; i++) { const x = 120 + ((i * 160 - off * 1.6) % 960 + 960) % 960; ctx.fillStyle = '#3f8f4a'; circle(ctx, x, 310, 40, '#3f8f4a'); ctx.fillStyle = '#7b4a2d'; ctx.fillRect(x - 8, 330, 16, 60); }
    ctx.restore();
    ctx.strokeStyle = '#2a2250'; ctx.lineWidth = 22; rr(ctx, 120, 90, 640, 330, 50); ctx.stroke();
    // seat + kid
    ctx.fillStyle = '#e46a6a'; rr(ctx, 360, 300, 560, 460, 60); ctx.fill();
    const sick = EO(t, T(19, 'feels') - 0.3, cv + 0.6);
    person(ctx, 640, 520, 2.4, PAL.teal, sick, { hairCol: '#7a3e1d' });
    phone(ctx, 640, 640, 1.0);
    ctx.restore();
    // labels
    pill(ctx, 'BACK SEAT', 1100, 100, { k: pop(t, T(17, 'back') - 0.1), bg: PAL.yellow, col: PAL.ink, size: 32 });
    const ek = pop(t, T(18, 'eyes') - 0.1);
    if (ek > 0.01) { ctx.save(); ctx.translate(1080, 250); ctx.scale(ek * 0.45, ek * 0.45); eye(ctx, 0, 0, 1, 0, 0.8); ctx.restore(); }
    pill(ctx, 'EYES: SCREEN IS STILL', 1060, 340, { k: pop(t, T(18, 'screen') - 0.1), bg: PAL.teal, col: PAL.white, size: 26 });
    const ik = pop(t, T(19, 'inner') - 0.1);
    if (ik > 0.01) { ctx.save(); ctx.translate(1060, 470); ctx.scale(ik * 0.6, ik * 0.6); innerEar(ctx, 0, 0, 1, t, { cochA: 0.2, slosh: Math.sin(t * 4) * 0.4 }); ctx.restore(); }
    pill(ctx, 'EARS: BUMP! CURVE!', 1060, 600, { k: pop(t, b1 - 0.1) * bump(t, cv), bg: PAL.orange, col: PAL.white, size: 26 });
  }, (k) => { k.noise(PS(17) - 0.4, { dur: PE(19) - PS(17) + 1, color: 'brown', filter: 'lowpass', f: 220, gain: 0.08, a: 0.5 }); k.play('pop', T(17, 'back') - 0.1, { f: 560, gain: 0.7 });
    k.play('pop', T(18, 'eyes') - 0.1, { f: 680, gain: 0.5, minor: true }); k.play('pop', T(18, 'screen') - 0.1, { f: 760, gain: 0.7 }); k.play('pop', T(19, 'inner') - 0.1, { f: 620, gain: 0.5, minor: true }); k.play('thud', T(19, 'bump'), { f: 90, gain: 0.8 }); k.play('swish', T(19, 'curve') - 0.1, { gain: 0.6 }); });

  // S12: one says still, the other says moving
  add(20, 'cut', (ctx, t) => {
    sky(ctx, '#3fa9f5', '#2a86d1'); ctx.fillStyle = '#ffd23f'; ctx.beginPath(); ctx.moveTo(W / 2 + 60, -200); ctx.lineTo(W + 200, -200); ctx.lineTo(W + 200, HH + 200); ctx.lineTo(W / 2 - 60, HH + 200); ctx.closePath(); ctx.fill();
    eye(ctx, 300, 420, 1.2, 0, 0); ctx.save(); ctx.translate(980, 430); ctx.rotate(Math.sin(t * 9) * 0.06 * EO(t, T(20, 'moving') - 0.2, T(20, 'moving'))); innerEar(ctx, -20, -30, 1.5, t, { cochA: 0.3, slosh: t * 2 }); ctx.restore();
    const sk = pop(t, T(20, 'still') - 0.15); bubble(ctx, 330, 160, 330, 140, 300, 300, sk); if (sk > 0.01) { ctx.save(); ctx.translate(330, 160); ctx.scale(sk, sk); text(ctx, 'STILL.', 0, 4, 70, PAL.blue); ctx.restore(); }
    const mk = pop(t, T(20, 'moving') - 0.15); bubble(ctx, 960, 160, 380, 140, 960, 300, mk); if (mk > 0.01) { ctx.save(); ctx.translate(960, 160); ctx.scale(mk, mk); ctx.rotate(Math.sin(t * 20) * 0.04); text(ctx, 'MOVING!', 0, 4, 70, PAL.orange); ctx.restore(); }
  }, (k) => { k.play('impact', PS(20) - 0.3, { gain: 0.4 }); k.play('pop', T(20, 'still') - 0.15, { f: 480, gain: 0.9 }); k.play('pop', T(20, 'moving') - 0.15, { f: 820, gain: 0.9 }); k.play('buzz', T(20, 'moving'), { f: 120, dur: 0.4, gain: 0.3 }); });

  // S13: the brain gets both signals: sensory conflict, the leading explanation
  add(21, 'circle', (ctx, t) => {
    sky(ctx, '#2b1d4d', '#4b2f7a');
    const ak = EO(t, PS(21) - 0.2, T(21, 'conflict'));
    arrow(ctx, 60, 420, H.lerp(60, 470, ak), 420, PAL.blue, 26, 1); arrow(ctx, 1220, 420, H.lerp(1220, 810, ak), 420, PAL.orange, 26, 1);
    pill(ctx, 'STILL', 180, 360, { k: ak > 0.05 ? 1 : 0, bg: PAL.blue, col: PAL.white, size: 28 }); pill(ctx, 'MOVING', 1100, 360, { k: ak > 0.05 ? 1 : 0, bg: PAL.orange, col: PAL.white, size: 28 });
    const shake = t > T(21, 'conflict') ? Math.sin(t * 30) * 4 * (1 - ph(t, T(21, 'conflict'), T(21, 'conflict') + 1.5)) : 0;
    brain(ctx, 640 + shake, 420, 1.3);
    if (t > T(21, 'conflict') - 0.1) { const u = ph(t, T(21, 'conflict') - 0.1, T(21, 'conflict') + 0.6); ctx.save(); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.globalAlpha = 1 - u * 0.6; for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2, r = 170 + u * 70; ctx.beginPath(); ctx.moveTo(640 + Math.cos(a) * r, 420 + Math.sin(a) * r * 0.8); ctx.lineTo(640 + Math.cos(a) * (r + 40), 420 + Math.sin(a) * (r + 40) * 0.8); ctx.stroke(); } ctx.restore(); }
    big(ctx, 'SENSORY CONFLICT', W / 2, 110, 76, PAL.yellow, pop(t, T(21, 'sensory') - 0.15) * bump(t, T(21, 'conflict')), 12);
    pill(ctx, 'THE LEADING EXPLANATION', W / 2, 650, { k: pop(t, T(22, 'leading') - 0.1), bg: PAL.cream, col: PAL.ink, size: 32 });
  }, (k) => { k.play('riser', PS(21) - 0.2, { dur: T(21, 'conflict') - PS(21) + 0.2, gain: 0.5 }); k.play('impact', T(21, 'conflict'), { gain: 0.9 }); k.play('pop', T(21, 'sensory') - 0.15, { f: 520, gain: 0.8 }); k.play('pop', T(22, 'leading') - 0.1, { f: 700, gain: 0.7 }); k.play('ding', T(22, 'sickness'), { f: 'A5', gain: 0.25, minor: true }); });
  // ===== Chapter 2: the poison alarm =====
  add(23, 'iris', chapterCard(2, 'THE POISON ALARM', PAL.green, PAL.ink, PS(23) - 0.1, 'why would a mix-up make you sick?'), (k) => { k.play('impact', PS(23) - 0.1, { gain: 0.5 }); k.play('pop', PS(23) + 0.1, { f: 520, gain: 0.8 }); k.play('pop', PS(23) + 0.4, { f: 700, gain: 0.5, minor: true }); });

  // S15: long ago, senses stop agreeing after eating something toxic
  const berries = (ctx, x, y, s, glow, t) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || '#2f8a4a'; ctx.beginPath(); ctx.arc(-60, 0, 80, 0, Math.PI * 2); ctx.arc(40, -30, 90, 0, Math.PI * 2); ctx.arc(100, 30, 70, 0, Math.PI * 2); ctx.fill(); }, 14);
    const br = H.rng(12); for (let i = 0; i < 16; i++) { const bx = -110 + br() * 240, by = -70 + br() * 120; if (glow > 0.01) circle(ctx, bx, by, 20 + glow * 8 * (1 + Math.sin(t * 6 + i) * 0.3), `rgba(220,120,255,${0.35 * glow})`); circle(ctx, bx, by, 13, H.rgba(H.mix('#d23a5a', '#8a3aff', glow))); } ctx.restore(); };
  add(24, 'circle', (ctx, t) => {
    sky(ctx, '#ffd9a0', '#ffb070');
    circle(ctx, 200, 170, 70, '#fff0b0');
    hills(ctx, 430, ['#c9a46a', '#a8834f'], 0);
    ground(ctx, 560, '#8a6a3f');
    // simple trees
    [[1020, 300], [1180, 330], [80, 330]].forEach(([x, y]) => { ctx.fillStyle = '#6b4a2d'; ctx.fillRect(x - 12, y, 24, 260); longShadow(ctx, (c) => circle(ctx, x, y, 80, c || '#3f8f4a'), 12); });
    const glow = EO(t, T(26, 'toxic') - 0.3, T(26, 'toxic') + 0.4);
    berries(ctx, 820, 470, 1.0, glow, t);
    const sick = EO(t, T(25, 'suddenly') - 0.1, T(25, 'agreeing') + 0.3);
    // an ancestor in a simple tunic, holding berries
    ctx.save(); ctx.translate(470, 520); ctx.rotate(Math.sin(t * 3) * 0.08 * sick); person(ctx, 0, 0, 2.3, '#e8d2a0', sick, { hairCol: '#2a1a10' }); ctx.restore();
    if (sick > 0.01) { ctx.save(); ctx.globalAlpha = sick; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineCap = 'round'; for (let i = 0; i < 3; i++) { const a = t * 4 + i * 2.1; ctx.beginPath(); ctx.arc(470, 300, 60 + i * 6, a, a + 1.2); ctx.stroke(); } ctx.restore(); }
    pill(ctx, 'OUR ANCESTORS', W / 2, 80, { k: pop(t, T(24, 'ancestors') - 0.15), bg: PAL.ink, col: PAL.cream, size: 40 });
    pill(ctx, 'LONG AGO', 200, 300, { k: pop(t, T(25, 'long') - 0.1), bg: PAL.cream, col: PAL.ink, size: 30 });
    pill(ctx, "SENSES DON'T AGREE", 470, 640, { k: pop(t, T(25, 'stopped') - 0.1), bg: PAL.orange, col: PAL.white, size: 30 });
    pill(ctx, 'SOMETHING TOXIC', 860, 230, { k: pop(t, T(26, 'toxic') - 0.1) * bump(t, T(26, 'eaten')), bg: PAL.purple, col: PAL.white, size: 34 });
  }, (k) => { k.play('pop', T(24, 'ancestors') - 0.15, { f: 520, gain: 0.8 }); k.play('pop', T(25, 'long') - 0.1, { f: 700, gain: 0.5, minor: true }); k.play('riser', T(25, 'suddenly') - 0.1, { dur: 1.0, gain: 0.4 }); k.play('pop', T(25, 'stopped') - 0.1, { f: 620, gain: 0.7 }); k.play('sparkle', T(26, 'toxic') - 0.2, { n: 5, gain: 0.5 }); k.play('pop', T(26, 'toxic') - 0.1, { f: 480, gain: 0.8 }); k.play('error', T(26, 'eaten'), { f: 'A3', gain: 0.25, minor: true }); }, (t) => ({ z: 1.02 + 0.06 * ph(t, PS(24), PE(26)), cx: 640, cy: 400, r: 0.04 * Math.sin(t * 2.4) * EO(t, T(25, 'suddenly'), T(25, 'agreeing')) * (1 - ph(t, T(26, 'a') , T(26, 'toxic'))) }));

  // S16: a simple rule: signals don't match? empty the stomach
  add(27, 'slide', (ctx, t) => {
    sky(ctx, '#fff6e6', '#ffe6cc');
    brain(ctx, 270, 360, 1.15);
    const ck = pop(t, T(27, 'rule') - 0.2);
    if (ck > 0.01) { ctx.save(); ctx.translate(820, 360); ctx.scale(ck, ck); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, -330, -230, 660, 460, 36); ctx.fill(); }, 16); ctx.fillStyle = PAL.red; rr(ctx, -330, -230, 660, 70, 36); ctx.fill(); ctx.fillRect(-330, -190, 660, 30); text(ctx, "BRAIN'S RULE", 0, -192, 36, PAL.white); ctx.restore(); }
    if (ck > 0.5) {
      const l1 = pop(t, T(28, 'signals') - 0.15), l2 = pop(t, T(28, 'empty') - 0.15);
      if (l1 > 0.01) { ctx.save(); ctx.translate(820, 250); ctx.scale(l1, l1); text(ctx, "SIGNALS DON'T MATCH?", 0, 0, 44, PAL.ink); ctx.restore(); }
      arrow(ctx, 820, 290, 820, 360, PAL.ink, 10, EO(t, T(28, 'match'), T(28, 'empty')));
      if (l2 > 0.01) { ctx.save(); ctx.translate(820, 420); ctx.scale(l2, l2); text(ctx, 'EMPTY THE STOMACH', 0, 0, 48, PAL.red); ctx.restore();
        // stomach icon with an up arrow
        ctx.save(); ctx.translate(820, 510); ctx.scale(l2 * 0.5, l2 * 0.5); ctx.fillStyle = PAL.pink; ctx.beginPath(); ctx.ellipse(0, 0, 90, 60, -0.4, 0, Math.PI * 2); ctx.fill(); ctx.fillRect(40, -90, 30, 60); ctx.restore(); arrow(ctx, 900, 540, 900, 470, PAL.red, 8, l2); }
    }
    pill(ctx, 'IF . . . THEN', 270, 560, { k: pop(t, T(27, 'simple') - 0.1), bg: PAL.ink, col: PAL.cream, size: 30 });
  }, (k) => { k.play('paper', T(27, 'rule') - 0.25, { dur: 0.5, gain: 0.8 }); k.play('pop', T(27, 'simple') - 0.1, { f: 620, gain: 0.6, minor: true }); k.play('pop', T(28, 'signals') - 0.15, { f: 560, gain: 0.8 }); k.play('stamp', T(28, 'empty') - 0.05, { gain: 0.5 }); });

  // S17: researchers still debate it, but a bumpy ride can feel a lot like food poisoning
  add(29, 'circle', (ctx, t) => {
    sky(ctx, '#d9ecff', '#b9d8ff');
    const sk = pop(t, T(29, 'debate') - 0.15);
    if (sk > 0.01) { ctx.save(); ctx.translate(640, 150); ctx.rotate(-0.06); ctx.scale(sk, sk); ctx.strokeStyle = PAL.red; ctx.lineWidth = 8; rr(ctx, -260, -55, 520, 110, 20); ctx.stroke(); text(ctx, 'STILL DEBATED', 0, 4, 64, PAL.red); ctx.restore(); }
    pill(ctx, 'a theory, not a fact', 640, 250, { k: pop(t, T(29, 'idea') - 0.1), size: 26, weight: 600 });
    const ck = pop(t, T(30, 'bumpy') - 0.2);
    if (ck > 0.01) { ctx.save(); ctx.translate(330, 500); ctx.scale(ck * 0.85, ck * 0.85); car(ctx, 0, 40, 1, PAL.blue, t, { faces: [0, 1], bounce: Math.sin(t * 12) * 5 }); ctx.restore(); }
    big(ctx, '≈', 640, 470, 130, PAL.ink, pop(t, T(31, 'feel') - 0.1), 10);
    const fk = pop(t, T(31, 'food') - 0.15);
    if (fk > 0.01) { ctx.save(); ctx.translate(950, 470); ctx.scale(fk, fk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; ctx.beginPath(); ctx.ellipse(0, 40, 170, 50, 0, 0, Math.PI * 2); ctx.fill(); }, 10); ctx.fillStyle = '#9ccf5a'; ctx.beginPath(); ctx.ellipse(0, 20, 90, 40, 0, Math.PI, Math.PI * 2); ctx.fill(); for (let i = 0; i < 3; i++) { ctx.strokeStyle = '#7fae3f'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); const x = -40 + i * 40; ctx.moveTo(x, -20); ctx.bezierCurveTo(x - 15, -45 - Math.sin(t * 3 + i) * 5, x + 15, -60, x, -90); ctx.stroke(); } ctx.restore(); }
    pill(ctx, 'BUMPY RIDE', 330, 650, { k: pop(t, T(30, 'ride') - 0.1), bg: PAL.blue, col: PAL.white, size: 30 });
    pill(ctx, 'FOOD POISONING', 950, 650, { k: pop(t, T(31, 'poisoning') - 0.15), bg: PAL.green, col: PAL.ink, size: 30 });
  }, (k) => { k.play('stamp', T(29, 'debate') - 0.1, { gain: 0.6 }); k.play('pop', T(29, 'idea') - 0.1, { f: 800, gain: 0.4, minor: true }); k.play('thud', T(30, 'bumpy'), { f: 100, gain: 0.5 }); k.play('pop', T(30, 'ride') - 0.1, { f: 600, gain: 0.6 }); k.play('pop', T(31, 'feel') - 0.1, { f: 500, gain: 0.5, minor: true }); k.play('pop', T(31, 'food') - 0.15, { f: 700, gain: 0.8 }); k.play('buzz', T(31, 'poisoning'), { f: 98, dur: 0.3, gain: 0.25, minor: true }); });

  // ===== Chapter 3: why you, and not your friend =====
  add(32, 'iris', chapterCard(3, 'WHY YOU?', PAL.orange, PAL.cream, PS(32) - 0.1, 'and not your friend'), (k) => { k.play('impact', PS(32) - 0.1, { gain: 0.5 }); k.play('pop', PS(32) + 0.1, { f: 520, gain: 0.8 }); k.play('pop', PS(32) + 0.4, { f: 700, gain: 0.5, minor: true }); });

  // S19: in 2015 a genetics company studied more than 80,000 people
  add(33, 'circle', (ctx, t) => {
    sky(ctx, '#203a5c', '#2d5a8a');
    pill(ctx, '2015', 200, 90, { k: pop(t, T(33, '2015') - 0.15), bg: PAL.yellow, col: PAL.ink, size: 44 });
    pill(ctx, 'a genetics company: 23andMe', 640, 90, { k: pop(t, T(33, 'company') - 0.1), bg: PAL.cream, col: PAL.ink, size: 28, weight: 600 });
    // grid of little people filling up as the count rises
    const t0 = T(34, 'studied') - 0.1, t1 = T(34, 'people'); const u = EO(t, t0, t1);
    const cols = 32, rows = 9, n = Math.floor(u * cols * rows);
    for (let i = 0; i < n; i++) { const c = i % cols, r = Math.floor(i / cols), x = 130 + c * 33, y = 210 + r * 40; const col = ['#6ad0ff', '#ffd23f', '#ff8fb1', '#7bd65b'][(c * 7 + r * 3) % 4]; circle(ctx, x, y - 8, 7, col); ctx.fillStyle = col; rr(ctx, x - 8, y, 16, 16, 6); ctx.fill(); }
    const cur = Math.round(80000 * EO(t, T(34, 'eighty') - 0.1, T(34, 'people')) / 1000) * 1000;
    if (t > T(34, 'eighty') - 0.2) pill(ctx, `${cur.toLocaleString('en-US')}+ PEOPLE`, 640, 620, { k: pop(t, T(34, 'eighty') - 0.2) * bump(t, T(34, 'people')), bg: cur >= 80000 ? PAL.orange : PAL.cream, col: cur >= 80000 ? PAL.white : PAL.ink, size: 64, h: 110 });
  }, (k) => { k.play('pop', T(33, '2015') - 0.15, { f: 560, gain: 0.8 }); k.play('pop', T(33, 'company') - 0.1, { f: 720, gain: 0.5, minor: true }); for (let f = Math.ceil((T(34, 'eighty') - 0.1) * 12); f < T(34, 'people') * 12; f++) k.play('count', f / 12, { gain: 0.7, minor: true }); k.play('impact', T(34, 'people'), { gain: 0.8 }); k.play('ding', T(34, 'people') + 0.05, { f: 'C6', gain: 0.3 }); });

  // S20: 35 spots in our DNA linked to motion sickness
  add(35, 'slide', (ctx, t) => {
    sky(ctx, '#1d1d3a', '#33336b');
    dna(ctx, 640, 360, 1180, t, 0, PAL.yellow, { n: 44, amp: 80 });
    const t0 = T(35, 'thirtyfive') - 0.15, t1 = T(35, 'dna'); const n = Math.round(35 * EO(t, t0, t1));
    const fr = H.rng(21); const idx = []; while (idx.length < 35) { const v = Math.floor(fr() * 44); if (!idx.includes(v)) idx.push(v); }
    for (let i = 0; i < 12 && i < Math.ceil(n / 3); i++) { const j = idx[i], u = j / 43, px = 50 + u * 1180, a = u * Math.PI * 6 + t * 1.2; const py = 360 + Math.sin(a) * 80; const k = pop(t, t0 + i * 0.11); ctx.save(); ctx.translate(px, py); ctx.scale(k, k); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -60); ctx.stroke(); ctx.fillStyle = PAL.yellow; ctx.beginPath(); ctx.moveTo(0, -60); ctx.lineTo(30, -50); ctx.lineTo(0, -40); ctx.fill(); circle(ctx, 0, 0, 12, PAL.yellow); ctx.restore(); }
    if (t > t0 - 0.1) pill(ctx, `${n} SPOTS`, 640, 100, { k: pop(t, t0 - 0.1) * bump(t, t1), bg: n >= 35 ? PAL.yellow : PAL.cream, col: PAL.ink, size: 60, h: 106 });
    pill(ctx, 'LINKED TO MOTION SICKNESS', 640, 630, { k: pop(t, T(36, 'linked') - 0.1), bg: PAL.green, col: PAL.ink, size: 32 });
  }, (k) => { for (let i = 0; i < 12; i++) k.play('pop', T(35, 'thirtyfive') - 0.15 + i * 0.11, { f: 700 + i * 40, gain: 0.35, minor: true }); for (let f = Math.ceil((T(35, 'thirtyfive') - 0.15) * 12); f < T(35, 'dna') * 12; f++) k.play('tick', f / 12, { f: 3200, gain: 0.5, minor: true }); k.play('stamp', T(35, 'dna'), { gain: 0.5 }); k.play('pop', T(36, 'linked') - 0.1, { f: 600, gain: 0.8 }); }, (t) => ({ z: 1.05 - 0.05 * ph(t, PS(35), PE(36)), cx: 640 + 60 * Math.sin(t * 0.3), cy: 360 }));

  // S21: up to 70% of the difference between people comes down to genes
  add(37, 'circle', (ctx, t) => {
    sky(ctx, '#fff1d6', '#ffd9a8');
    const t0 = T(37, 'seventy') - 0.3, t1 = T(37, 'percent'); const u = EO(t, t0, t1) * 0.7;
    const cx = 420, cy = 380, R = 210;
    const dk = pop(t, T(37, 'studies') - 0.2);
    if (dk > 0.01) { ctx.save(); ctx.translate(cx, cy); ctx.scale(dk, dk); longShadow(ctx, (c) => circle(ctx, 0, 0, R, c || '#e3d4bd'), 16);
      if (u > 0) { ctx.fillStyle = PAL.purple; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R, -Math.PI / 2, -Math.PI / 2 + u * Math.PI * 2); ctx.closePath(); ctx.fill(); }
      circle(ctx, 0, 0, R * 0.55, PAL.cream); text(ctx, `${Math.round(u * 100)}%`, 0, 6, 92, PAL.purple); ctx.restore(); }
    pill(ctx, 'UP TO', 420, 110, { k: pop(t, T(37, 'up') - 0.1), bg: PAL.ink, col: PAL.cream, size: 34 });
    const gk = pop(t, T(38, 'genes') - 0.15);
    if (gk > 0.01) { ctx.save(); ctx.translate(950, 300); ctx.scale(gk, gk); ctx.rotate(0.3); ctx.save(); ctx.beginPath(); ctx.rect(-200, -120, 400, 240); ctx.clip(); dna(ctx, 0, 0, 300, t, 0, PAL.yellow, { n: 14, amp: 45 }); ctx.restore(); ctx.restore(); }
    pill(ctx, 'COMES DOWN TO GENES', 950, 470, { k: gk * bump(t, T(38, 'genes')), bg: PAL.purple, col: PAL.white, size: 34 });
    pill(ctx, 'of the difference between people', 950, 560, { k: pop(t, T(38, 'difference') - 0.1), size: 26, weight: 600 });
  }, (k) => { k.play('pop', T(37, 'up') - 0.1, { f: 560, gain: 0.7 }); k.play('riser', T(37, 'seventy') - 0.3, { dur: 0.7, gain: 0.4 }); k.play('impact', T(37, 'percent'), { gain: 0.7 }); k.play('pop', T(38, 'difference') - 0.1, { f: 800, gain: 0.4, minor: true }); k.play('pop', T(38, 'genes') - 0.15, { f: 620, gain: 0.8 }); k.play('ding', T(38, 'genes'), { f: 'A5', gain: 0.3 }); });

  // S22: age: kids 7-12 get it the most; many grow out of it
  add(39, 'slide', (ctx, t) => {
    sky(ctx, '#e6f7ff', '#c8ecff');
    const x0 = 150, x1 = 1150, y0 = 600, yh = 380, age = (a) => x0 + (a / 70) * (x1 - x0);
    const f = (a) => (a < 10 ? H.smooth(0, 9.5, a) : 1 - 0.75 * H.smooth(10, 35, a) + 0.12 * H.smooth(50, 70, a));
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0 - yh - 20); ctx.lineTo(x0, y0); ctx.lineTo(x1 + 20, y0); ctx.stroke();
    [0, 10, 20, 30, 40, 50, 60, 70].forEach((a) => text(ctx, String(a), age(a), y0 + 30, 24, PAL.ink, 600));
    text(ctx, 'AGE', x1 + 50, y0, 26, PAL.ink, 700);
    const band = pop(t, T(40, 'seven') - 0.15);
    if (band > 0.01) { ctx.save(); ctx.globalAlpha = 0.35 * band; ctx.fillStyle = PAL.orange; ctx.fillRect(age(7), y0 - yh - 10, age(12) - age(7), yh + 10); ctx.restore(); }
    const dp = EO(t, T(39, 'age') - 0.1, T(39, 'too') + 0.6);
    ctx.save(); ctx.strokeStyle = PAL.purple; ctx.lineWidth = 12; ctx.lineJoin = 'round'; ctx.beginPath(); for (let a = 0; a <= 70 * dp; a += 0.5) { const x = age(a), y = y0 - f(a) * yh * 0.95; a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); ctx.restore();
    pill(ctx, 'AGE 7–12 = PEAK', age(9.5) + 140, 130, { k: pop(t, T(40, 'twelve') - 0.1) * bump(t, T(40, 'most')), bg: PAL.orange, col: PAL.white, size: 36 });
    const gk = EO(t, T(41, 'grow') - 0.2, T(41, 'worst'));
    arrow(ctx, age(16), y0 - f(16) * yh * 0.95 - 40, age(30), y0 - f(30) * yh * 0.95 - 40, PAL.green, 12, gk);
    pill(ctx, 'MANY GROW OUT OF IT', age(40), 330, { k: pop(t, T(41, 'grow') - 0.1), bg: PAL.green, col: PAL.ink, size: 30 });
  }, (k) => { k.play('pop', T(39, 'age') - 0.1, { f: 560, gain: 0.6 }); k.play('riser', T(39, 'age'), { dur: 1.0, gain: 0.3 }); k.play('pop', T(40, 'twelve') - 0.1, { f: 680, gain: 0.8 }); k.play('ding', T(40, 'most'), { f: 'E6', gain: 0.3 }); k.play('swish', T(41, 'grow') - 0.2, { gain: 0.5 }); k.play('pop', T(41, 'grow') - 0.1, { f: 600, gain: 0.6 }); });

  // S23: women report it more often than men, and so do people with migraines
  add(42, 'circle', (ctx, t) => {
    sky(ctx, '#ffe3ef', '#ffc7dc');
    const lk = pop(t, T(42, 'women') - 0.15), rk = pop(t, T(43, 'migraines') - 0.2);
    if (lk > 0.01) { ctx.save(); ctx.translate(350, 340); ctx.scale(lk, lk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, -250, -220, 500, 440, 40); ctx.fill(); }, 16);
      person(ctx, -90, 40, 2.0, PAL.pink, 0.8, { hairCol: '#7a3e1d' }); ctx.fillStyle = '#7a3e1d'; rr(ctx, -160, -60, 30, 90, 14); ctx.fill(); rr(ctx, -50, -60, 30, 90, 14); ctx.fill(); person(ctx, 100, 40, 2.0, PAL.blue, 0.2, { hairCol: '#2b2b44' });
      text(ctx, '>', 5, 40, 90, PAL.ink); ctx.restore(); }
    pill(ctx, 'WOMEN REPORT IT MORE', 350, 620, { k: pop(t, T(42, 'often') - 0.1), bg: PAL.pink, col: PAL.ink, size: 30 });
    if (rk > 0.01) { ctx.save(); ctx.translate(930, 340); ctx.scale(rk, rk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, -250, -220, 500, 440, 40); ctx.fill(); }, 16);
      person(ctx, 0, 60, 2.2, PAL.purple, 0.8, { hairCol: '#2b2b44' }); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 10; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-40, -150); ctx.lineTo(-10, -120); ctx.lineTo(-30, -100); ctx.lineTo(10, -70); ctx.stroke(); ctx.beginPath(); ctx.moveTo(60, -160); ctx.lineTo(80, -130); ctx.lineTo(60, -115); ctx.lineTo(90, -90); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'PEOPLE WITH MIGRAINES', 930, 620, { k: pop(t, T(43, 'migraines') - 0.1), bg: PAL.purple, col: PAL.white, size: 30 });
  }, (k) => { k.play('pop', T(42, 'women') - 0.15, { f: 600, gain: 0.8 }); k.play('pop', T(42, 'often') - 0.1, { f: 760, gain: 0.5, minor: true }); k.play('pop', T(43, 'migraines') - 0.2, { f: 520, gain: 0.8 }); k.play('buzz', T(43, 'migraines') + 0.1, { f: 140, dur: 0.25, gain: 0.25, minor: true }); });

  // S24: the whole family turns green on road trips: probably not a coincidence
  add(44, 'slide', (ctx, t) => {
    sky(ctx, '#9fdcff', '#e8f7ff');
    hills(ctx, 360, ['#b8e6a0', '#8fd07a'], t * 40);
    road(ctx, 560, t, 380);
    const gr = EO(t, T(44, 'green') - 0.3, T(44, 'green') + 0.4);
    const x = H.lerp(-300, 560, EO(t, PS(44) - 0.4, T(44, 'family') + 0.3));
    // roof luggage
    ctx.save(); ctx.translate(x, 570 + Math.sin(t * 11) * 4); ctx.fillStyle = '#b07a4a'; rr(ctx, -90, -190, 170, 46, 10); ctx.fill(); ctx.fillStyle = '#d99a5a'; rr(ctx, -60, -220, 90, 34, 8); ctx.fill(); ctx.restore();
    car(ctx, x, 570, 1.1, PAL.yellow, t, { faces: [gr, gr], bounce: Math.sin(t * 11) * 4 });
    pill(ctx, 'ROAD TRIP', 1000, 140, { k: pop(t, T(44, 'road') - 0.1), bg: PAL.cream, col: PAL.ink, size: 32 });
    pill(ctx, 'WHOLE FAMILY GREEN?', 1000, 230, { k: pop(t, T(44, 'green') - 0.1), bg: PAL.green, col: PAL.ink, size: 30 });
    big(ctx, 'NOT A COINCIDENCE', W / 2, 90, 64, PAL.ink, pop(t, T(45, 'coincidence') - 0.15) * bump(t, T(45, 'coincidence') + 0.1), 12);
  }, (k) => { k.play('whoosh', PS(44) - 0.4, { dur: 0.8, gain: 0.5 }); k.play('pop', T(44, 'road') - 0.1, { f: 560, gain: 0.6 }); k.play('pop', T(44, 'green') - 0.1, { f: 700, gain: 0.8 }); k.play('impact', T(45, 'coincidence'), { gain: 0.7 }); });
  // ===== Chapter 4: the weird exceptions =====
  add(46, 'iris', chapterCard(4, 'THE WEIRD EXCEPTIONS', PAL.purple, PAL.cream, PS(46) - 0.1, 'the strangest part'), (k) => { k.play('impact', PS(46) - 0.1, { gain: 0.5 }); k.play('pop', PS(46) + 0.1, { f: 520, gain: 0.8 }); k.play('pop', PS(46) + 0.4, { f: 700, gain: 0.5, minor: true }); });

  // S26: no working motion sensors -> no motion sickness. No signal, no conflict, no alarm.
  add(47, 'circle', (ctx, t) => {
    sky(ctx, '#e9e4ff', '#cfc4ff');
    const lost = EO(t, T(47, 'lost') - 0.2, T(47, 'lost') + 0.4);
    ctx.save(); ctx.translate(330, 260); ctx.globalAlpha = 1 - 0.65 * lost; innerEar(ctx, 0, 0, 1.25, t, { cochA: 0.25 }); ctx.restore();
    cross(ctx, 360, 270, 2.0, PAL.red, pop(t, T(47, 'lost') - 0.1));
    pill(ctx, 'NO WORKING MOTION SENSORS', 340, 470, { k: pop(t, T(47, 'sensors') - 0.15), bg: PAL.ink, col: PAL.cream, size: 26 });
    const hk = pop(t, T(48, 'dont') - 0.2);
    if (hk > 0.01) { ctx.save(); ctx.translate(930, 260); ctx.scale(hk, hk); longShadow(ctx, () => {}, 0); person(ctx, 0, 60, 2.3, PAL.teal, 0, { hairCol: '#2b2b44' }); ctx.restore(); }
    pill(ctx, 'NO MOTION SICKNESS', 930, 470, { k: pop(t, T(48, 'sick') - 0.15) * bump(t, T(48, 'all')), bg: PAL.green, col: PAL.ink, size: 30 });
    [['NO SIGNAL', T(49, 'signal')], ['NO CONFLICT', T(49, 'conflict')], ['NO ALARM', T(49, 'alarm')]].forEach(([s, tt], i) => { pill(ctx, s, 250 + i * 390, 620, { k: pop(t, tt - 0.15) * bump(t, tt), bg: [PAL.blue, PAL.orange, PAL.red][i], col: PAL.white, size: 32 }); if (i < 2) arrow(ctx, 380 + i * 390, 620, 450 + i * 390, 620, PAL.ink, 8, EO(t, tt, tt + 0.3)); });
  }, (k) => { k.play('error', T(47, 'lost'), { f: 'A3', gain: 0.35 }); k.play('pop', T(47, 'sensors') - 0.15, { f: 560, gain: 0.7 }); k.play('pop', T(48, 'dont') - 0.2, { f: 700, gain: 0.6, minor: true }); k.play('ding', T(48, 'sick'), { f: 'E6', gain: 0.35 }); ['signal', 'conflict', 'alarm'].forEach((w, i) => k.play('pop', T(49, w) - 0.15, { f: 500 + i * 120, gain: 0.85 })); k.play('stamp', T(49, 'alarm') + 0.05, { gain: 0.4 }); });

  // S27: passengers who couldn't see the road ahead: about 3x more likely to feel sick
  const view = (ctx, x, y, open, t, sick, col) => {
    ctx.save(); ctx.translate(x, y);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#2a2250'; rr(ctx, -230, -210, 460, 300, 40); ctx.fill(); }, 14);
    ctx.save(); rr(ctx, -210, -190, 420, 260, 30); ctx.clip();
    if (open) { ctx.fillStyle = '#9ad8ff'; ctx.fillRect(-210, -190, 420, 260); ctx.fillStyle = '#7cc96a'; ctx.fillRect(-210, -40, 420, 120); ctx.fillStyle = PAL.road; ctx.beginPath(); ctx.moveTo(-10, -40); ctx.lineTo(10, -40); ctx.lineTo(130, 70); ctx.lineTo(-130, 70); ctx.closePath(); ctx.fill(); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 5; ctx.setLineDash([14, 16]); ctx.lineDashOffset = -t * 60; ctx.beginPath(); ctx.moveTo(0, -40); ctx.lineTo(0, 70); ctx.stroke(); ctx.setLineDash([]); }
    else { ctx.fillStyle = '#7a5a9a'; ctx.fillRect(-210, -190, 420, 260); ctx.fillStyle = '#6a4a8a'; rr(ctx, -150, -150, 300, 230, 30); ctx.fill(); }
    ctx.restore();
    person(ctx, 0, 210, 1.6, col, sick, { hairCol: '#3b2a20' });
    ctx.restore();
  };
  add(50, 'slide', (ctx, t) => {
    sky(ctx, '#fff3df', '#ffe0b8');
    const sk = EO(t, T(52, 'sick') - 0.4, T(52, 'sick') + 0.3);
    view(ctx, 340, 345, true, t, 0, PAL.teal); view(ctx, 940, 345, false, t, sk, PAL.orange);
    pill(ctx, 'SEES THE ROAD', 340, 64, { k: pop(t, T(50, 'see') - 0.1), bg: PAL.teal, col: PAL.white, size: 30 });
    pill(ctx, "CAN'T SEE THE ROAD", 940, 64, { k: pop(t, T(51, 'couldnt') - 0.1), bg: PAL.ink, col: PAL.cream, size: 30 });
    const tk = pop(t, T(52, 'three') - 0.15);
    if (tk > 0.01) { ctx.save(); ctx.translate(1150, 450); ctx.rotate(0.12); ctx.scale(tk * bump(t, T(52, 'times')), tk * bump(t, T(52, 'times'))); longShadow(ctx, (c) => circle(ctx, 0, 0, 90, c || PAL.red), 14); text(ctx, '3×', 0, 6, 86, PAL.white); ctx.restore(); }
    pill(ctx, 'MORE LIKELY TO FEEL SICK', 640, 660, { k: pop(t, T(52, 'likely') - 0.1), bg: PAL.red, col: PAL.white, size: 30 });
  }, (k) => { k.play('pop', T(50, 'see') - 0.1, { f: 600, gain: 0.7 }); k.play('pop', T(51, 'couldnt') - 0.1, { f: 480, gain: 0.7 }); k.play('impact', T(52, 'three'), { gain: 0.8 }); k.play('stamp', T(52, 'times'), { gain: 0.5 }); k.play('pop', T(52, 'likely') - 0.1, { f: 700, gain: 0.6 }); });

  // S28: the driver knows every turn before it happens
  add(53, 'circle', (ctx, t) => {
    sky(ctx, '#9fdcff', '#e6f7ff');
    // road in perspective, bending right after "turn"
    const bend = EO(t, T(54, 'happens') - 0.2, T(55, 'surprise'));
    ctx.fillStyle = '#7cc96a'; ctx.fillRect(-200, 300, W + 400, 500);
    ctx.fillStyle = PAL.road; ctx.beginPath(); ctx.moveTo(360, 760); ctx.bezierCurveTo(520, 520, 600 + bend * 120, 400, 620 + bend * 360, 300); ctx.lineTo(680 + bend * 360, 300); ctx.bezierCurveTo(680 + bend * 120, 400, 820, 520, 1000, 760); ctx.closePath(); ctx.fill();
    // dashboard + wheel
    ctx.fillStyle = '#2a2250'; ctx.fillRect(-200, 560, W + 400, 300);
    const steer = 0.6 * EO(t, T(54, 'turn') - 0.3, T(54, 'turn') + 0.3) * (1 - 0.6 * ph(t, T(55, 'surprise'), T(55, 'surprise') + 1));
    ctx.save(); ctx.translate(640, 640); ctx.rotate(steer); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 30; ctx.beginPath(); ctx.arc(0, 0, 150, 0, Math.PI * 2); ctx.stroke(); ctx.fillStyle = PAL.ink; ctx.fillRect(-150, -12, 300, 24); circle(ctx, 0, 0, 40, '#444a66'); ctx.restore();
    // hands
    circle(ctx, 640 + Math.cos(Math.PI + steer) * 150, 640 + Math.sin(Math.PI + steer) * 150, 26, PAL.skin); circle(ctx, 640 + Math.cos(steer) * 150, 640 + Math.sin(steer) * 150, 26, PAL.skin);
    // thought bubble: the turn arrow, before the road bends
    const bk = pop(t, T(54, 'knows') - 0.15);
    bubble(ctx, 1030, 180, 300, 200, 820, 380, bk);
    if (bk > 0.01) { ctx.save(); ctx.translate(1030, 180); ctx.scale(bk, bk); ctx.strokeStyle = PAL.orange; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-60, 60); ctx.lineTo(-60, -10); ctx.quadraticCurveTo(-60, -40, -20, -40); ctx.lineTo(30, -40); ctx.stroke(); ctx.fillStyle = PAL.orange; ctx.beginPath(); ctx.moveTo(70, -40); ctx.lineTo(25, -75); ctx.lineTo(25, -5); ctx.closePath(); ctx.fill(); ctx.restore(); }
    pill(ctx, 'THE DRIVER?', 230, 90, { k: pop(t, T(53, 'driver') - 0.15), bg: PAL.ink, col: PAL.cream, size: 34 });
    pill(ctx, 'USUALLY FINE', 230, 180, { k: pop(t, T(53, 'fine') - 0.15), bg: PAL.green, col: PAL.ink, size: 34 });
    pill(ctx, 'KNOWS EVERY TURN', 1030, 320, { k: pop(t, T(54, 'turn') - 0.15), bg: PAL.orange, col: PAL.white, size: 28 });
    pill(ctx, 'NO SURPRISE', 230, 270, { k: pop(t, T(55, 'surprise') - 0.15), bg: PAL.yellow, col: PAL.ink, size: 34 });
  }, (k) => { k.play('pop', T(53, 'driver') - 0.15, { f: 560, gain: 0.8 }); k.play('ding', T(53, 'fine'), { f: 'E6', gain: 0.3 }); k.play('pop', T(54, 'knows') - 0.15, { f: 700, gain: 0.6, minor: true }); k.play('swish', T(54, 'turn') - 0.2, { gain: 0.5 }); k.play('pop', T(54, 'turn') - 0.15, { f: 640, gain: 0.7 }); k.play('pop', T(55, 'surprise') - 0.15, { f: 760, gain: 0.8 }); });

  // ===== Chapter 5: new problems =====
  add(56, 'iris', chapterCard(5, 'NEW PROBLEMS', PAL.teal, PAL.cream, PS(56) - 0.1, 'an old alarm in a new world'), (k) => { k.play('impact', PS(56) - 0.1, { gain: 0.5 }); k.play('pop', PS(56) + 0.1, { f: 520, gain: 0.8 }); k.play('pop', PS(56) + 0.4, { f: 700, gain: 0.5, minor: true }); });

  // S30: virtual reality flips the conflict: eyes see motion, body sits still
  add(57, 'circle', (ctx, t) => {
    sky(ctx, '#1d1d3a', '#2e2e5c');
    // the virtual roller coaster the eyes see
    ctx.save(); rr(ctx, 560, 80, 660, 420, 30); ctx.clip(); const g = ctx.createLinearGradient(0, 80, 0, 500); g.addColorStop(0, '#ff9a4a'); g.addColorStop(1, '#ffd98a'); ctx.fillStyle = g; ctx.fillRect(560, 80, 660, 420);
    const off = t * 260; ctx.strokeStyle = '#d23a5a'; ctx.lineWidth = 12; ctx.beginPath(); for (let x = 540; x <= 1240; x += 8) ctx.lineTo(x, 320 + Math.sin((x + off) * 0.012) * 110); ctx.stroke(); ctx.lineWidth = 5; for (let x = 560 - (off % 40); x <= 1240; x += 40) { const y = 320 + Math.sin((x + off) * 0.012) * 110; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, 520); ctx.stroke(); }
    const cy = 320 + Math.sin((890 + off) * 0.012) * 110; ctx.fillStyle = PAL.blue; rr(ctx, 860, cy - 40, 70, 36, 10); ctx.fill(); ctx.restore();
    ctx.strokeStyle = PAL.cream; ctx.lineWidth = 8; rr(ctx, 560, 80, 660, 420, 30); ctx.stroke();
    // person on a chair with a headset
    ctx.fillStyle = '#6b4a9a'; rr(ctx, 170, 420, 260, 60, 20); ctx.fill(); ctx.fillRect(200, 480, 20, 120); ctx.fillRect(380, 480, 20, 120);
    person(ctx, 300, 400, 2.2, PAL.orange, EO(t, T(58, 'still') - 0.4, T(58, 'still') + 0.3) * 0.8, { hairCol: '#2b2b44' });
    const vk = pop(t, T(57, 'virtual') - 0.2); if (vk > 0.01) { ctx.save(); ctx.translate(300, 300); ctx.scale(vk, vk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ink; rr(ctx, -80, -28, 160, 56, 20); ctx.fill(); }, 8); ctx.fillStyle = PAL.blue; rr(ctx, -66, -16, 56, 32, 10); ctx.fill(); rr(ctx, 10, -16, 56, 32, 10); ctx.fill(); ctx.restore(); }
    big(ctx, 'VIRTUAL REALITY', 300, 110, 50, PAL.cream, pop(t, T(57, 'virtual') - 0.1), 10);
    pill(ctx, 'FLIPPED!', 300, 190, { k: pop(t, T(57, 'flips') - 0.1) * bump(t, T(57, 'flips')), bg: PAL.yellow, col: PAL.ink, size: 32 });
    pill(ctx, 'EYES: MOTION', 890, 570, { k: pop(t, T(58, 'motion') - 0.15), bg: PAL.orange, col: PAL.white, size: 32 });
    pill(ctx, 'BODY: STILL', 300, 660, { k: pop(t, T(58, 'still') - 0.15), bg: PAL.blue, col: PAL.white, size: 32 });
  }, (k) => { k.play('pop', T(57, 'virtual') - 0.2, { f: 560, gain: 0.8 }); k.play('glitch', T(57, 'flips') - 0.1, { gain: 0.4 }); k.play('pop', T(57, 'flips') - 0.1, { f: 700, gain: 0.6 }); k.play('whoosh', T(58, 'motion') - 0.3, { dur: 0.5, gain: 0.5 }); k.play('pop', T(58, 'motion') - 0.15, { f: 640, gain: 0.7 }); k.play('pop', T(58, 'still') - 0.15, { f: 480, gain: 0.7 }); });

  // S31: self-driving cars: everyone becomes a passenger staring at screens
  add(59, 'slide', (ctx, t) => {
    sky(ctx, '#b8c6ff', '#e6ebff');
    // city blocks
    const off = t * 80; for (let i = 0; i < 9; i++) { const x = ((i * 190 - off) % 1710 + 1710) % 1710 - 200, h = 160 + (i * 73 % 200); ctx.fillStyle = ['#8f9ad8', '#7a86c8', '#a2acec'][i % 3]; ctx.fillRect(x, 520 - h, 150, h); ctx.fillStyle = 'rgba(255,255,255,0.5)'; for (let r = 0; r < h / 40 - 1; r++) for (let c = 0; c < 3; c++) ctx.fillRect(x + 18 + c * 44, 520 - h + 20 + r * 40, 24, 20); }
    road(ctx, 560, t, 360);
    const sc = EO(t, T(61, 'screens') - 0.2, T(61, 'road'));
    const ck = EO(t, PS(59) - 0.4, T(59, 'driving'));
    car(ctx, H.lerp(-260, 640, ck), 570, 1.2, PAL.teal, t, { faces: [sc * 0.5, sc * 0.7], bounce: Math.sin(t * 9) * 3, hair1: '#e0a030' });
    // sensor dome on the roof
    const sx = H.lerp(-260, 640, ck); ctx.save(); ctx.translate(sx, 570 + Math.sin(t * 9) * 3); ctx.scale(1.2, 1.2); ctx.fillStyle = PAL.ink; rr(ctx, -20, -162, 40, 22, 8); ctx.fill(); circle(ctx, 0, -164, 12, t % 0.6 < 0.3 ? PAL.red : '#ff9a9a'); ctx.restore();
    if (sc > 0.01) { phone(ctx, sx + 52 * 1.2, 570 - 70 * 1.2, 0.3 * sc); phone(ctx, sx - 40 * 1.2, 570 - 70 * 1.2, 0.3 * sc); }
    pill(ctx, 'SELF-DRIVING', 220, 90, { k: pop(t, T(59, 'driving') - 0.15), bg: PAL.ink, col: PAL.cream, size: 34 });
    pill(ctx, 'EVERYONE = PASSENGER', 640, 90, { k: pop(t, T(60, 'passenger') - 0.15) * bump(t, T(60, 'passenger')), bg: PAL.yellow, col: PAL.ink, size: 34 });
    pill(ctx, 'SCREENS, NOT THE ROAD', 1040, 200, { k: pop(t, T(61, 'screens') - 0.1), bg: PAL.red, col: PAL.white, size: 28 });
  }, (k) => { k.play('whoosh', PS(59) - 0.4, { dur: 0.9, gain: 0.5 }); k.play('pop', T(59, 'driving') - 0.15, { f: 560, gain: 0.7 }); k.play('pop', T(60, 'passenger') - 0.15, { f: 680, gain: 0.8 }); k.play('pop', T(61, 'screens') - 0.1, { f: 760, gain: 0.7 }); k.play('blip', T(61, 'screens'), { gain: 0.3, minor: true }); });

  // S32: engineers testing lights that hint at the next turn, so eyes and ears agree again
  add(62, 'circle', (ctx, t) => {
    sky(ctx, '#20304f', '#2e4870');
    const bend = EO(t, T(63, 'turn') - 0.4, T(64, 'help'));
    // windshield view
    ctx.save(); rr(ctx, 140, 60, 1000, 360, 40); ctx.clip(); ctx.fillStyle = '#9ad8ff'; ctx.fillRect(140, 60, 1000, 360); ctx.fillStyle = '#7cc96a'; ctx.fillRect(140, 260, 1000, 200);
    ctx.fillStyle = PAL.road; ctx.beginPath(); ctx.moveTo(400, 420); ctx.bezierCurveTo(560, 330, 600 - bend * 60, 290, 640 - bend * 260, 262); ctx.lineTo(680 - bend * 260, 262); ctx.bezierCurveTo(700 - bend * 60, 290, 760, 330, 900, 420); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.fillStyle = '#151d33'; ctx.fillRect(-200, 420, W + 400, 400);
    // light strip on the dash: a pulse flowing left, toward the coming turn
    const lk = EO(t, T(63, 'lights') - 0.15, T(63, 'lights') + 0.3);
    for (let i = 0; i < 24; i++) { const x = 180 + i * 40, u = ((i / 24) + t * 1.2) % 1, on = lk * (0.25 + 0.75 * Math.pow(1 - u, 4)) * (t > T(63, 'hint') - 0.1 ? 1 : 0.4); ctx.fillStyle = `rgba(255,200,80,${on})`; rr(ctx, x, 452, 30, 16, 8); ctx.fill(); if (on > 0.5) circle(ctx, x + 15, 460, 24, `rgba(255,200,80,${on * 0.2})`); }
    arrow(ctx, 760, 520, 480, 520, PAL.yellow, 12, EO(t, T(63, 'hint') - 0.1, T(63, 'turn')));
    pill(ctx, 'ENGINEERS ARE TESTING', 640, 110, { k: pop(t, T(62, 'testing') - 0.15), bg: PAL.ink, col: PAL.cream, size: 30 });
    pill(ctx, 'LIGHTS THAT HINT THE NEXT TURN', 640, 600, { k: pop(t, T(63, 'lights') - 0.1), bg: PAL.yellow, col: PAL.ink, size: 28 });
    const ak = pop(t, T(64, 'agree') - 0.2);
    if (ak > 0.01) { ctx.save(); ctx.translate(1060, 300); ctx.scale(ak, ak); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -150, -90, 300, 180, 30); ctx.fill(); }, 12); eye(ctx, -70, -20, 0.35, 0, 0); innerEar(ctx, 60, -30, 0.4, t, { cochA: 0.2 }); text(ctx, 'AGREE AGAIN', 0, 60, 30, '#1e7d6e'); ctx.restore(); check(ctx, 1190, 220, 0.9, PAL.green, pop(t, T(64, 'again') - 0.1)); }
  }, (k) => { k.play('pop', T(62, 'testing') - 0.15, { f: 560, gain: 0.7 }); k.play('neon', T(63, 'lights') - 0.15, { gain: 0.3 }); k.play('pop', T(63, 'lights') - 0.1, { f: 700, gain: 0.6 }); k.play('swish', T(63, 'turn') - 0.3, { gain: 0.4 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => k.play('ding', T(64, 'agree') + i * 0.05, { f: n, gain: 0.28 })); });

  // S33: your brain isn't broken, it's protecting you from a poison that isn't there
  add(65, 'iris', (ctx, t) => {
    sky(ctx, '#ffd98a', '#ff9a4a');
    const sr = H.rng(31); ctx.save(); ctx.globalAlpha = 0.2; for (let i = 0; i < 12; i++) circle(ctx, sr() * W, sr() * HH, 30 + sr() * 60, PAL.white); ctx.restore();
    const qk = EO(t, T(65, 'queasy') - 0.2, T(65, 'queasy') + 0.3);
    brain(ctx, 640, 380, 1.4, H.rgba(H.mix(PAL.brain, '#b8e08a', qk * (1 - ph(t, T(66, 'broken'), T(66, 'broken') + 0.6)))));
    const shk = pop(t, T(67, 'protecting') - 0.2);
    if (shk > 0.01) { ctx.save(); ctx.translate(960, 400); ctx.scale(shk, shk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.blue; ctx.beginPath(); ctx.moveTo(0, -120); ctx.lineTo(100, -80); ctx.quadraticCurveTo(100, 60, 0, 120); ctx.quadraticCurveTo(-100, 60, -100, -80); ctx.closePath(); ctx.fill(); }, 14); ctx.strokeStyle = PAL.white; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-40, 0); ctx.lineTo(-8, 34); ctx.lineTo(46, -30); ctx.stroke(); ctx.restore(); }
    // the ghost poison bottle: appears dashed, then vanishes
    const gk = EO(t, T(67, 'poison') - 0.2, T(67, 'poison') + 0.2) * (1 - EO(t, T(67, 'there') - 0.1, T(67, 'there') + 0.5));
    if (gk > 0.01) { ctx.save(); ctx.globalAlpha = gk * 0.75; bottle(ctx, 300, 420, 1.1); ctx.restore(); cross(ctx, 300, 420, 1.4, PAL.red, gk); }
    pill(ctx, 'NOT BROKEN', 640, 110, { k: pop(t, T(66, 'broken') - 0.15) * bump(t, T(66, 'broken')), bg: PAL.ink, col: PAL.cream, size: 44 });
    pill(ctx, 'JUST PROTECTING YOU', 960, 600, { k: pop(t, T(67, 'protecting') - 0.1), bg: PAL.blue, col: PAL.white, size: 30 });
    pill(ctx, "A POISON THAT ISN'T THERE", 330, 600, { k: pop(t, T(67, 'poison') - 0.1), bg: PAL.green, col: PAL.ink, size: 26 });
  }, (k) => { k.play('pop', T(66, 'broken') - 0.15, { f: 560, gain: 0.8 }); k.play('powerup', T(67, 'protecting') - 0.2, { gain: 0.3 }); k.play('pop', T(67, 'poison') - 0.1, { f: 680, gain: 0.6 }); k.play('sparkle', T(67, 'there'), { n: 6, gain: 0.5 }); k.play('success', T(67, 'there') + 0.2, { f: 'C6', gain: 0.35 }); });

  // S34: teaser: what happens if a porcupine's quills get stuck in you?
  const porcupine = (ctx, x, y, s, t) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const qr = H.rng(44); for (let i = 0; i < 46; i++) { const a = Math.PI * (1.05 + qr() * 0.95), L = 90 + qr() * 60, bx = Math.cos(a) * 120, by = Math.sin(a) * 70 - 10; ctx.strokeStyle = i % 2 ? '#f5ecd8' : '#5a3d2a'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(bx * 0.6, by * 0.6); ctx.lineTo(bx + Math.cos(a) * L * 0.6, by + Math.sin(a) * L * 0.6); ctx.stroke(); }
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#7a5236'; ctx.beginPath(); ctx.ellipse(0, 0, 150, 85, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(150, 20, 60, 48, 0.2, 0, Math.PI * 2); ctx.fill(); }, 12);
    ctx.fillStyle = '#b08060'; ctx.beginPath(); ctx.ellipse(175, 30, 34, 28, 0.2, 0, Math.PI * 2); ctx.fill(); circle(ctx, 205, 32, 9, PAL.ink); circle(ctx, 160, 8, 8, PAL.ink); circle(ctx, 163, 5, 3, PAL.white);
    ctx.fillStyle = '#5a3d2a'; [-80, -20, 50, 100].forEach((lx) => { rr(ctx, lx - 12, 60, 24, 40, 10); ctx.fill(); });
    ctx.restore(); };
  add(68, 'circle', (ctx, t) => {
    sky(ctx, '#2f6b4f', '#1f4a36');
    ground(ctx, 560, '#3f8a5f');
    porcupine(ctx, 560, 470, 1.25 * pop(t, T(68, 'what') - 0.2), t);
    pill(ctx, 'NEXT TIME', 230, 90, { k: pop(t, T(68, 'next') - 0.15), bg: PAL.yellow, col: PAL.ink, size: 36 });
    big(ctx, 'PORCUPINE QUILLS?', W / 2, 640, 70, PAL.cream, pop(t, T(69, 'quills') - 0.15), 12);
    const qk = pop(t, T(69, 'stuck') - 0.15); if (qk > 0.01) { ctx.save(); ctx.translate(1000, 230); ctx.scale(qk, qk); longShadow(ctx, (c) => circle(ctx, 0, 0, 80, c || PAL.cream), 12); text(ctx, '?', 0, 8, 110, PAL.red); ctx.restore(); }
  }, (k) => { k.play('whoosh', T(68, 'next') - 0.4, { dur: 0.5, gain: 0.5 }); k.play('pop', T(68, 'next') - 0.15, { f: 560, gain: 0.8 }); k.play('pop', T(68, 'what') - 0.2, { f: 480, gain: 0.6 }); k.play('impact', T(69, 'quills'), { gain: 0.6 }); k.play('pop', T(69, 'stuck') - 0.15, { f: 760, gain: 0.8 }); k.play('ding', DURATION - 0.6, { f: 'C6', gain: 0.3 }); });

  // ---------- timeline ----------
  SC.forEach((s, i) => { s.cut = i === 0 ? 0 : Math.min(PS(s.from) - 0.15, (PE(s.from - 1) + PS(s.from)) / 2); });
  SC.forEach((s, i) => { s.end = i < SC.length - 1 ? SC[i + 1].cut : DURATION; });
  CH = [[7, 1, 'TWO SENSORS'], [23, 2, 'THE POISON ALARM'], [32, 3, 'WHY YOU?'], [46, 4, 'THE WEIRD EXCEPTIONS'], [56, 5, 'NEW PROBLEMS']].map(([p, n, title]) => ({ t: SC.find((s) => s.from === p).cut, n, title }));
  const TRD = { circle: 0.5, slide: 0.45, iris: 0.7, cut: 0 };

  function drawScene(ctx, s, t) {
    ctx.save();
    const u = ph(t, s.cut, s.end);
    const c = s.cam ? s.cam(t) : { z: 1 + 0.045 * u, cx: 640 + 20 * Math.sin(s.from), cy: 360 };
    ctx.translate(c.cx, c.cy); ctx.scale(c.z, c.z); if (c.r) ctx.rotate(c.r); ctx.translate(-c.cx, -c.cy);
    s.draw(ctx, t);
    ctx.restore();
  }
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < SC.length - 1 && t >= SC[i + 1].cut - (TRD[SC[i + 1].tr] || 0) / 2) i++;
    const cur = SC[i], next = SC[i + 1];
    const d = next ? TRD[next.tr] || 0 : 0;
    if (next && d > 0 && t >= next.cut - d / 2) {
      const u = ph(t, next.cut - d / 2, next.cut + d / 2), e = H.ease.inOut(u);
      if (next.tr === 'circle') {
        drawScene(ctx, cur, t);
        ctx.save(); ctx.beginPath(); ctx.arc(640, 360, e * 760, 0, Math.PI * 2); ctx.clip(); drawScene(ctx, next, t); ctx.restore();
        if (e > 0 && e < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 16; ctx.beginPath(); ctx.arc(640, 360, e * 760, 0, Math.PI * 2); ctx.stroke(); }
      } else if (next.tr === 'slide') {
        ctx.save(); ctx.translate(-W * e, 0); drawScene(ctx, cur, t); ctx.restore();
        ctx.save(); ctx.translate(W * (1 - e), 0); drawScene(ctx, next, t); ctx.restore();
        ctx.fillStyle = PAL.cream; ctx.fillRect(W * (1 - e) - 8, 0, 16, HH);
      } else { // iris: close on the current scene, open on the next
        if (u < 0.5) { const r = 760 * (1 - H.ease.inOut(u * 2)); ctx.fillStyle = PAL.ink; ctx.fillRect(0, 0, W, HH); ctx.save(); ctx.beginPath(); ctx.arc(640, 360, r, 0, Math.PI * 2); ctx.clip(); drawScene(ctx, cur, t); ctx.restore(); }
        else { const r = 760 * H.ease.inOut((u - 0.5) * 2); ctx.fillStyle = PAL.ink; ctx.fillRect(0, 0, W, HH); ctx.save(); ctx.beginPath(); ctx.arc(640, 360, r, 0, Math.PI * 2); ctx.clip(); drawScene(ctx, next, t); ctx.restore(); }
      }
    } else {
      drawScene(ctx, cur, t);
      if (cur.tr === 'cut' && i > 0 && t < cur.cut + 0.12) { ctx.fillStyle = `rgba(255,255,255,${0.7 * (1 - ph(t, cur.cut, cur.cut + 0.12))})`; ctx.fillRect(0, 0, W, HH); }
    }
    chapterTag(ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), dd = id.data, gr = H.rng(3); for (let j = 0; j < dd.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; dd[j] = dd[j + 1] = dd[j + 2] = v; dd[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound: pops, whooshes, ticks and dings; every scene adds its own hits ----------
  function scoreSound(k) {
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 96, gain: 0.22, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    SC.forEach((s, i) => {
      if (i > 0) {
        if (s.tr === 'circle') { k.play('whoosh', s.cut - 0.3, { dur: 0.6, gain: 0.8, top: 2400 }); k.play('tock', s.cut + 0.2, { f: 420, gain: 0.4, minor: true }); }
        else if (s.tr === 'slide') { k.play('swish', s.cut - 0.2, { gain: 0.7 }); }
        else if (s.tr === 'iris') { k.play('whoosh', s.cut - 0.35, { dur: 0.7, gain: 0.7, top: 1600 }); }
        else k.play('thud', s.cut, { f: 110, gain: 0.5 });
      }
      if (s.sfx) s.sfx(k);
    });
  }

  // ---------- the YouTube thumbnail: one still in the style, huge words ----------
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    sky(ctx, '#8fd8ff', '#dff4ff');
    hills(ctx, 430, ['#9fe08a', '#7cc96a'], 0);
    road(ctx, 610, 0, 0);
    car(ctx, 880, 620, 1.35, PAL.red, 0.3, { faces: [0, 1] });
    ctx.save(); ctx.translate(1070, 175); longShadow(ctx, (c) => circle(ctx, 0, 0, 130, c || PAL.white), 14); brain(ctx, -30, 0, 0.6, PAL.brain, { sh: 6 }); bottle(ctx, 70, 10, 0.5); ctx.restore();
    ctx.save(); ctx.translate(30, 0);
    longShadow(ctx, (c) => text(ctx, 'POISON', 0, 150, 160, c || PAL.ink, 700, 'left'), 18);
    longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; rr(ctx, 0, 250, 600, 150, 75); ctx.fill(); } else { ctx.fillStyle = PAL.green; rr(ctx, 0, 250, 600, 150, 75); ctx.fill(); } }, 16);
    text(ctx, 'ALARM?', 300, 330, 110, PAL.ink, 700);
    ctx.restore();
    H.vignette(ctx, W, HH, 0.16, '40,20,60');
    ctx.restore();
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
