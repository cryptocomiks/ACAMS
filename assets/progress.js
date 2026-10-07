/* CAMS Exam Trainer — learning progress: XP, levels, streaks (with freezes), daily goal and quests,
 * records, badges, spaced repetition (questions and flashcards), lessons read, exam readiness.
 * Works fully offline (localStorage). account.js syncs the same data to Supabase when signed in. */
(function () {
  "use strict";

  var KEYS = {
    stats: "cams.stats.v1",     // { qid: { seen, right, wrong, last } }
    history: "cams.history.v1", // [ { date, mode, score, total, scope } ]
    gam: "cams.gam.v1",         // gamification state, see gam()
    srs: "cams.srs.v1",         // { qid: { box, due, last } }
    cards: "cams.cards.v1",     // { cardId: { box, due, last } }
    learn: "cams.learn.v1",     // { moduleId: firstReadTimestamp }
    study: "cams.study.v1"      // 30-day plan: { examDate, startDate, diag, log: { day: { r: reviews, c: cards } }, updated }
  };
  var SYNCED = [KEYS.stats, KEYS.history, KEYS.gam, KEYS.srs, KEYS.cards, KEYS.learn, KEYS.study];

  // Leitner boxes: days until the next review for each box.
  var INTERVALS = [0, 1, 3, 7, 16, 35];
  var MASTERED_BOX = 4;
  var XP = { right: 10, wrong: 2, reviewRight: 12, testDone: 20, examPass: 50, goal: 30, lesson: 15, card: 1, chest: 50 };
  var GOALS = [10, 20, 30, 50];
  var WEIGHTS = { 1: 0.3, 2: 0.2, 3: 0.3, 4: 0.2 };
  var MAX_FREEZES = 2;

  var listeners = [];

  function load(key, fb) {
    try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : fb; } catch (e) { return fb; }
  }
  function save(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* ignore */ }
    if (SYNCED.indexOf(key) >= 0 && window.CAMSSync) window.CAMSSync.schedule();
  }
  function emit(ev) { listeners.forEach(function (fn) { try { fn(ev); } catch (e) { /* ignore */ } }); }

  function dayKey(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }
  function addDays(d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
  function fromKey(k) { var p = k.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function weekKey(d) {
    d = d || new Date();
    var t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    var dow = t.getUTCDay() || 7;
    t.setUTCDate(t.getUTCDate() + 4 - dow);
    var y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
    var wk = Math.ceil(((t - y0) / 864e5 + 1) / 7);
    return t.getUTCFullYear() + "-W" + (wk < 10 ? "0" : "") + wk;
  }
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function seeded(seed) { var s = seed >>> 0 || 1; return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }

  function gam() {
    var g = load(KEYS.gam, null) || {};
    g.xp = g.xp || 0;
    g.days = g.days || {};          // answers per day
    g.act = g.act || {};            // any activity per day (answers, cards, sprint, lessons)
    g.xpDays = g.xpDays || {};      // XP earned per day
    g.goalDays = g.goalDays || {};
    g.goal = GOALS.indexOf(g.goal) >= 0 ? g.goal : 20;
    g.badges = g.badges || {};
    g.reviews = g.reviews || 0;
    g.quests = g.quests || {};      // { date: { ids: [..], p: {id: n}, done: {id: true}, chest: bool } }
    g.frozen = g.frozen || {};      // { date: true } days covered by a streak freeze
    g.freezeAt = g.freezeAt || 0;   // highest multiple of 7 already rewarded in the current streak
    // Freezes are derived: earned (grow-only) minus days actually covered. Robust across devices.
    if (g.earned == null) g.earned = (g.freezes || 0) + Object.keys(g.frozen).length;
    Object.keys(g.frozen).forEach(function (k) { if (g.days[k] || g.act[k]) delete g.frozen[k]; }); // active elsewhere: no freeze needed
    g.freezes = Math.max(0, Math.min(MAX_FREEZES, g.earned - Object.keys(g.frozen).length));
    g.dailyStarted = g.dailyStarted || {}; // { date: ts } first attempt of the daily challenge has begun
    g.records = g.records || {};    // { key: best value }
    g.daily = g.daily || {};        // { date: { score, total, ms } } first attempt of the daily challenge
    g.counts = g.counts || {};      // { cards, lightning, survival, sprint, chests }
    return g;
  }
  function saveGam(g) { g.updated = Date.now(); save(KEYS.gam, g); }

  // ---------- Levels ----------
  function levelFor(xp) {
    var L = 1;
    while (50 * L * (L + 1) <= xp) L++;
    var base = 50 * (L - 1) * L, next = 50 * L * (L + 1);
    return { level: L, xp: xp, base: base, next: next, pct: Math.round(((xp - base) / (next - base)) * 100) };
  }
  var TITLES = ["Trainee", "Analyst", "Investigator", "Senior Analyst", "Compliance Officer", "MLRO", "Head of FCC", "CAMS Master"];
  function titleFor(level) { return TITLES[Math.min(TITLES.length - 1, Math.floor((level - 1) / 2))]; }

  // ---------- Streak (any activity counts; freezes cover missed days) ----------
  function activeOn(g, k) { return !!(g.days[k] || g.act[k] || g.frozen[k]); }
  function streak(g) {
    g = g || gam();
    var today = new Date();
    var d = activeOn(g, dayKey(today)) ? today : addDays(today, -1);
    var n = 0;
    while (activeOn(g, dayKey(d))) { n++; d = addDays(d, -1); }
    var keys = {};
    Object.keys(g.days).concat(Object.keys(g.act), Object.keys(g.frozen)).forEach(function (k) { keys[k] = 1; });
    var best = 0, run = 0, prev = null;
    Object.keys(keys).sort().forEach(function (k) {
      run = prev && dayKey(addDays(fromKey(prev), 1)) === k ? run + 1 : 1;
      best = Math.max(best, run);
      prev = k;
    });
    return { current: n, best: Math.max(best, n), activeToday: !!(g.days[dayKey(today)] || g.act[dayKey(today)]), freezes: g.freezes };
  }
  // Called on app start: spend freezes to bridge missed days since the last activity.
  function applyFreezes() {
    var g = gam();
    if (!g.freezes) return 0;
    var today = new Date(), y = addDays(today, -1);
    if (activeOn(g, dayKey(y))) return 0;
    var gap = 0, d = y;
    while (!activeOn(g, dayKey(d)) && gap < 60) { gap++; d = addDays(d, -1); }
    if (gap >= 60 || gap > g.freezes) return 0;          // nothing to save, or not enough freezes
    for (var i = 1; i <= gap; i++) g.frozen[dayKey(addDays(today, -i))] = true;
    g.freezes = Math.max(0, g.freezes - gap);
    saveGam(g);
    emit({ type: "freezeUsed", used: gap, left: g.freezes });
    return gap;
  }
  function maybeAwardFreeze(g) {
    var st = streak(g);
    if (!st.current) return;
    var start = dayKey(addDays(new Date(), 1 - st.current));     // first day of the current streak
    if (g.freezeStart !== start) { g.freezeStart = start; g.freezeAt = 0; }
    var mark = Math.floor(st.current / 7) * 7;                    // highest multiple of 7 reached
    if (mark > 0 && mark > g.freezeAt) {
      g.freezeAt = mark;
      if (g.freezes < MAX_FREEZES) {
        g.earned = (g.earned || 0) + 1;
        g.freezes++;
        emit({ type: "freezeEarned", freezes: g.freezes });
      }
    }
  }

  // ---------- XP ----------
  function addXp(g, n) {
    if (!n) return;
    var before = levelFor(g.xp).level;
    g.xp += n;
    var k = dayKey();
    g.xpDays[k] = (g.xpDays[k] || 0) + n;
    var after = levelFor(g.xp).level;
    if (after > before) emit({ type: "level", level: after, title: titleFor(after) });
  }
  function weekXp(g) {
    g = g || gam();
    var wk = weekKey(), sum = 0;
    Object.keys(g.xpDays).forEach(function (k) { if (weekKey(fromKey(k)) === wk) sum += g.xpDays[k]; });
    return sum;
  }
  function markActive(g) {
    var k = dayKey(), was = !!(g.days[k] || g.act[k]);
    g.act[k] = true;
    if (!was) {
      var st = streak(g);
      if (st.current > 1) emit({ type: "streak", days: st.current });
      maybeAwardFreeze(g);
    }
  }

  // ---------- Daily quests ----------
  var QUESTS = [
    { id: "answer", icon: "🎯", text: function (g) { return "Answer " + g.goal + " questions"; }, target: function (g) { return g.goal; }, xp: 30, mode: "sum" },
    { id: "combo", icon: "🔥", text: "Get 5 right in a row", target: 5, xp: 30, mode: "max" },
    { id: "daily", icon: "📅", text: "Complete the daily challenge", target: 1, xp: 40, mode: "sum" },
    { id: "review", icon: "🔁", text: "Answer 10 review questions", target: 10, xp: 30, mode: "sum", needsDue: true },
    { id: "card", icon: "🃏", text: "Flip 15 flashcards", target: 15, xp: 25, mode: "sum", needsCourse: true },
    { id: "lesson", icon: "📖", text: "Read a lesson", target: 1, xp: 25, mode: "sum", needsCourse: true },
    { id: "lightning", icon: "⏳", text: "Finish a Lightning round", target: 1, xp: 30, mode: "sum" },
    { id: "sprint", icon: "🔢", text: "Score 8+ in Numbers sprint", target: 8, xp: 30, mode: "max", needsCourse: true },
    { id: "score", icon: "🎓", text: "Score 80%+ on a test of 10+ questions", target: 1, xp: 40, mode: "max" },
    { id: "survive", icon: "❤️", text: "Reach 10 correct in Survival", target: 10, xp: 30, mode: "max" }
  ];
  var QBY = {};
  QUESTS.forEach(function (q) { QBY[q.id] = q; });
  function questTarget(q, g) { return typeof q.target === "function" ? q.target(g) : q.target; }
  function questText(q, g) { return typeof q.text === "function" ? q.text(g) : q.text; }

  function questCtx(ctx) {
    ctx = ctx || {};
    var course = window.CAMS_COURSE || [];
    if (ctx.hasCourse == null) ctx.hasCourse = course.length > 0;
    if (ctx.due == null) ctx.due = dueIds(window.CAMSApp ? window.CAMSApp.BY_ID : null).length;
    if (ctx.unreadLesson == null) { var rd = load(KEYS.learn, {}); ctx.unreadLesson = course.some(function (m) { return !rd[m.id]; }); }
    if (ctx.hasNumbers == null) ctx.hasNumbers = course.some(function (m) { return (m.numbers || []).length; });
    return ctx;
  }
  function ensureQuests(g, ctx) {
    var k = dayKey(), t = g.quests[k];
    if (!t || !t.ids) {
      ctx = questCtx(ctx);
      var r = seeded(hash("quests" + k));
      var pool = QUESTS.filter(function (q) {
        if (q.id === "answer") return false;
        if (q.needsDue && (ctx.due || 0) < questTarget(q, g)) return false;   // e.g. 10 due questions for the review quest
        if (q.needsCourse && !ctx.hasCourse) return false;
        if (q.id === "lesson" && !ctx.unreadLesson) return false;
        if (q.id === "sprint" && !ctx.hasNumbers) return false;
        return true;
      });
      var ids = ["answer"];
      while (ids.length < 3 && pool.length) ids.push(pool.splice(Math.floor(r() * pool.length), 1)[0].id);
      t = g.quests[k] = { ids: ids, p: {}, done: {}, chest: false };
      // keep only the last 14 days of quest state
      Object.keys(g.quests).sort().slice(0, -14).forEach(function (old) { delete g.quests[old]; });
      return true;
    }
    return false;
  }
  function todayQuests(ctx) {
    var g = gam(), k = dayKey();
    if (ensureQuests(g, ctx)) saveGam(g);
    var t = g.quests[k];
    return t.ids.map(function (id) {
      var q = QBY[id];
      var target = questTarget(q, g);
      var p = Math.min(target, t.p[id] || 0);
      return { id: id, icon: q.icon, text: questText(q, g), target: target, progress: p, done: !!t.done[id], xp: q.xp };
    });
  }
  function questEvent(type, value, g0) {
    var g = g0 || gam(), k = dayKey();
    var created = ensureQuests(g);
    var t = g.quests[k];
    if (t.ids.indexOf(type) < 0) { if (created && !g0) saveGam(g); return; }
    var q = QBY[type];
    var v = value == null ? 1 : value;
    t.p[type] = q.mode === "max" ? Math.max(t.p[type] || 0, v) : (t.p[type] || 0) + v;
    if (!t.done[type] && t.p[type] >= questTarget(q, g)) {
      t.done[type] = true;
      addXp(g, q.xp);
      emit({ type: "quest", quest: { id: type, icon: q.icon, text: questText(q, g), xp: q.xp } });
      if (!t.chest && t.ids.every(function (id) { return t.done[id]; })) {
        t.chest = true;
        g.counts.chests = (g.counts.chests || 0) + 1;
        addXp(g, XP.chest);
        emit({ type: "chest", xp: XP.chest });
      }
    }
    if (!g0) saveGam(g);
  }

  // ---------- Records ----------
  var RECORDS = {
    exam: { label: "Best mock exam", unit: "%" },
    lightning: { label: "Best Lightning round", unit: "/15" },
    survival: { label: "Longest Survival run", unit: "" },
    sprint: { label: "Best Numbers sprint", unit: "" },
    daily: { label: "Best daily challenge", unit: "/10" },
    combo: { label: "Longest combo", unit: "" },
    day: { label: "Most answers in a day", unit: "" }
  };
  var SILENT = { combo: 1, day: 1 };
  function record(key, value, g0) {
    var g = g0 || gam();
    var prev = g.records[key];
    if (value > 0 && (prev == null || value > prev)) {
      g.records[key] = value;
      if (!g0) saveGam(g);
      if (prev != null && !SILENT[key]) emit({ type: "record", key: key, label: RECORDS[key] ? RECORDS[key].label : key, value: value, prev: prev });
      return true;
    }
    return false;
  }

  // ---------- Spaced repetition ----------
  function srsNext(c, ok) {
    var now = Date.now();
    // A miss drops to box 0 (back in 10 minutes); getting it right then climbs 1, 3, 7, 16, 35 days.
    var box = !c ? (ok ? 2 : 0) : (ok ? Math.min(INTERVALS.length - 1, c.box + 1) : 0);
    var due = ok ? now + INTERVALS[box] * 864e5 - 36e5 : now + 10 * 6e4;
    // With an exam date set, nothing is scheduled past the last days before the exam: every item gets one more pass.
    var exam = examTime();
    if (ok && exam && due > exam - 2 * 864e5 && now < exam - 3 * 864e5) due = Math.max(now + 864e5 - 36e5, exam - 2 * 864e5);
    return { box: box, due: due, last: now };
  }
  // ---------- 30-day plan state ----------
  function study() { return load(KEYS.study, {}) || {}; }
  function saveStudy(st) { st.updated = Date.now(); save(KEYS.study, st); }
  function examTime() {
    var e = study().examDate;
    if (!e) return 0;
    var p = e.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2], 9).getTime();
  }
  function studyTick(field, n) {
    var st = study();
    if (!st.examDate) return;
    var k = dayKey();
    st.log = st.log || {};
    st.log[k] = st.log[k] || {};
    st.log[k][field] = (st.log[k][field] || 0) + (n || 1);
    saveStudy(st);
  }
  function srsUpdate(qid, ok) {
    var srs = load(KEYS.srs, {});
    srs[qid] = srsNext(srs[qid], ok);
    save(KEYS.srs, srs);
    return srs[qid];
  }
  function dueIds(validIds) {
    var srs = load(KEYS.srs, {}), now = Date.now();
    return Object.keys(srs).filter(function (id) { return srs[id].due <= now && (!validIds || validIds[id]); })
      .sort(function (a, b) { return srs[a].due - srs[b].due; });
  }
  function masteredCount(validIds) {
    var srs = load(KEYS.srs, {});
    return Object.keys(srs).filter(function (id) { return srs[id].box >= MASTERED_BOX && (!validIds || validIds[id]); }).length;
  }

  // Flashcards: same Leitner schedule, separate store.
  function cardUpdate(cardId, ok) {
    var c = load(KEYS.cards, {});
    var cur = c[cardId];
    var notDue = cur && cur.due > Date.now();
    // Re-practising a card early never promotes it (that would defeat the spacing); forgetting it resets it.
    if (!(notDue && ok)) { c[cardId] = srsNext(cur, ok); save(KEYS.cards, c); }
    studyTick("c");
    var g = gam();
    g.counts.cards = (g.counts.cards || 0) + 1;
    if (!notDue) addXp(g, XP.card);
    markActive(g);
    questEvent("card", 1, g);
    saveGam(g);
    return c[cardId];
  }
  function cardState() { return load(KEYS.cards, {}); }
  // Order a deck: due cards first (oldest due), then new cards, then not-yet-due cards.
  function orderDeck(ids) {
    var c = load(KEYS.cards, {}), now = Date.now();
    var due = [], fresh = [], later = [];
    ids.forEach(function (id) { var s = c[id]; if (!s) fresh.push(id); else if (s.due <= now) due.push(id); else later.push(id); });
    due.sort(function (a, b) { return c[a].due - c[b].due; });
    later.sort(function (a, b) { return c[a].due - c[b].due; });
    return { order: due.concat(fresh, later), due: due.length, fresh: fresh.length };
  }

  // ---------- Lessons ----------
  function lessonRead(id) {
    var l = load(KEYS.learn, {});
    if (l[id]) return false;
    l[id] = Date.now();
    save(KEYS.learn, l);
    var g = gam();
    addXp(g, XP.lesson);
    markActive(g);
    questEvent("lesson", 1, g);
    saveGam(g);
    emit({ type: "lesson", id: id, xp: XP.lesson });
    return true;
  }
  function lessons() { return load(KEYS.learn, {}); }

  // ---------- Badges ----------
  var BADGES = [
    { id: "first_test", icon: "🎬", name: "First steps", desc: "Finish your first test" },
    { id: "q50", icon: "🔥", name: "Warming up", desc: "Answer 50 questions" },
    { id: "q250", icon: "📚", name: "Committed", desc: "Answer 250 questions" },
    { id: "q1000", icon: "🏃", name: "Marathon", desc: "Answer 1,000 questions" },
    { id: "explorer", icon: "🧭", name: "Explorer", desc: "See every question in the bank" },
    { id: "streak3", icon: "✨", name: "On a roll", desc: "3-day streak" },
    { id: "streak7", icon: "📅", name: "One week strong", desc: "7-day streak" },
    { id: "streak30", icon: "🏆", name: "Unstoppable", desc: "30-day streak" },
    { id: "goal5", icon: "🎯", name: "Goal getter", desc: "Hit your daily goal on 5 days" },
    { id: "quests5", icon: "🎁", name: "Quest master", desc: "Complete all daily quests on 5 days" },
    { id: "daily7", icon: "🗓️", name: "Daily devotee", desc: "Complete 7 daily challenges" },
    { id: "exam_pass", icon: "✅", name: "Exam ready", desc: "Pass a mock exam" },
    { id: "exam80", icon: "🎓", name: "Distinction", desc: "Score 80%+ on a mock exam" },
    { id: "perfect", icon: "💎", name: "Flawless", desc: "Score 100% on a test" },
    { id: "hard70", icon: "🧗", name: "Iron mind", desc: "Score 70%+ on a Hard-only test" },
    { id: "combo10", icon: "⚡", name: "Hot streak", desc: "10 correct answers in a row" },
    { id: "lightning12", icon: "⏳", name: "Speed demon", desc: "12+ in a Lightning round" },
    { id: "survivor25", icon: "❤️", name: "Survivor", desc: "25 correct in one Survival run" },
    { id: "sprint15", icon: "🔢", name: "Human calculator", desc: "15+ in a Numbers sprint" },
    { id: "cards100", icon: "🃏", name: "Card shark", desc: "Review 100 flashcards" },
    { id: "bookworm", icon: "📖", name: "Bookworm", desc: "Read every lesson" },
    { id: "review50", icon: "🔁", name: "Reviewer", desc: "Answer 50 review questions" },
    { id: "master50", icon: "🧠", name: "Scholar", desc: "Master 50 questions" },
    { id: "allround", icon: "🌐", name: "All-rounder", desc: "75%+ in every domain (20+ answers each)" },
    { id: "level5", icon: "⭐", name: "Level 5", desc: "Reach level 5" },
    { id: "level10", icon: "🌟", name: "Level 10", desc: "Reach level 10" }
  ];

  function totals(stats) {
    var t = { answers: 0, right: 0, seen: 0 };
    Object.keys(stats).forEach(function (k) { t.answers += stats[k].seen || 0; t.right += stats[k].right || 0; t.seen++; });
    return t;
  }

  function checkBadges(ctx) {
    ctx = ctx || {};
    var g = gam(), stats = load(KEYS.stats, {}), t = totals(stats), st = streak(g);
    var bank = ctx.bank || [];
    var course = window.CAMS_COURSE || [];
    var byDomain = domainAccuracy(bank, stats);
    var have = g.badges, fresh = [];
    var history = load(KEYS.history, []);
    var read = lessons();
    var cond = {
      first_test: history.length > 0,
      q50: t.answers >= 50,
      q250: t.answers >= 250,
      q1000: t.answers >= 1000,
      explorer: bank.length > 0 && bank.every(function (q) { return stats[q.id]; }),
      streak3: st.current >= 3,
      streak7: st.current >= 7,
      streak30: st.current >= 30,
      goal5: Object.keys(g.goalDays).length >= 5,
      quests5: (g.counts.chests || 0) >= 5,
      daily7: Object.keys(g.daily).length >= 7,
      exam_pass: history.some(function (h) { return h.mode === "exam" && h.total >= 10 && h.score / h.total >= 75 / 120; }),
      exam80: history.some(function (h) { return h.mode === "exam" && h.total >= 10 && h.score / h.total >= 0.8; }),
      perfect: history.some(function (h) { return h.total >= 10 && h.score === h.total; }),
      hard70: history.some(function (h) { return /Hard/.test(h.scope || "") && h.total >= 10 && h.score / h.total >= 0.7; }),
      combo10: (g.records.combo || 0) >= 10,
      lightning12: (g.records.lightning || 0) >= 12,
      survivor25: (g.records.survival || 0) >= 25,
      sprint15: (g.records.sprint || 0) >= 15,
      cards100: (g.counts.cards || 0) >= 100,
      bookworm: course.length > 0 && course.every(function (m) { return read[m.id]; }),
      review50: g.reviews >= 50,
      master50: masteredCount() >= 50,
      allround: [1, 2, 3, 4].every(function (d) { var b = byDomain[d]; return b && b.n >= 20 && b.ok / b.n >= 0.75; }),
      level5: levelFor(g.xp).level >= 5,
      level10: levelFor(g.xp).level >= 10
    };
    BADGES.forEach(function (b) {
      if (cond[b.id] && !have[b.id]) { have[b.id] = Date.now(); fresh.push(b); }
    });
    if (fresh.length) {
      saveGam(g);
      fresh.forEach(function (b) { emit({ type: "badge", badge: b }); });
    }
    return fresh;
  }

  // ---------- Events from the quiz ----------
  // opts: { review: bool, combo: current streak of correct answers incl. this one, speedBonus: xp }
  function onAnswer(qid, ok, opts) {
    opts = opts || {};
    var g = gam();
    var k = dayKey();
    markActive(g);
    g.days[k] = (g.days[k] || 0) + 1;
    var gain = opts.noXp ? 0 : ok ? (opts.review ? XP.reviewRight : XP.right) : XP.wrong;
    if (ok && opts.combo >= 3) gain += Math.min(opts.combo - 2, 5) * 2;
    if (ok && opts.speedBonus) gain += opts.speedBonus;
    if (opts.review) { g.reviews++; questEvent("review", 1, g); studyTick("r"); }
    addXp(g, gain);
    questEvent("answer", 1, g);
    if (ok && opts.combo) { questEvent("combo", opts.combo, g); record("combo", opts.combo, g); }
    record("day", g.days[k], g);
    if (g.days[k] >= g.goal && !g.goalDays[k]) {
      g.goalDays[k] = true;
      addXp(g, XP.goal);
      emit({ type: "goal", goal: g.goal, bonus: XP.goal });
    }
    saveGam(g);
    srsUpdate(qid, ok);
    return gain;
  }

  // summary: { mode, score, total, variant }
  function onFinish(summary) {
    var g = gam();
    var answered = summary.answered != null ? summary.answered : summary.total;
    if (!answered || answered < Math.min(5, summary.total || 0)) return 0;   // nothing (or almost nothing) was answered
    var bonus = XP.testDone;
    var pctv = summary.total ? summary.score / summary.total : 0;
    if (summary.mode === "exam" && pctv >= 75 / 120) bonus += XP.examPass;
    addXp(g, bonus);
    if (summary.mode === "exam" && summary.total >= 10) record("exam", Math.round(pctv * 100), g);
    if (summary.mode === "lightning") { g.counts.lightning = (g.counts.lightning || 0) + 1; questEvent("lightning", 1, g); record("lightning", summary.score, g); }
    if (summary.mode === "survival") { questEvent("survive", summary.score, g); record("survival", summary.score, g); }
    if (summary.mode === "daily") record("daily", summary.score, g);
    if (summary.total >= 10 && pctv >= 0.8) questEvent("score", 1, g);
    saveGam(g);
    return bonus;
  }

  function onSprint(score) {
    var g = gam();
    g.counts.sprint = (g.counts.sprint || 0) + 1;
    addXp(g, score * 2);
    markActive(g);
    questEvent("sprint", score, g);
    var rec = record("sprint", score, g);
    saveGam(g);
    return { xp: score * 2, record: rec };
  }

  // Daily challenge: only the first attempt of the day counts.
  function dailyResult(k) { return gam().daily[k || dayKey()] || null; }
  // The first attempt is "used" as soon as it starts: abandoning it and starting again counts as a replay.
  function dailyAttemptUsed(k) { var g = gam(); k = k || dayKey(); return !!(g.daily[k] || g.dailyStarted[k]); }
  function startDaily(k) {
    var g = gam();
    k = k || dayKey();
    if (!g.dailyStarted[k]) { g.dailyStarted[k] = Date.now(); Object.keys(g.dailyStarted).sort().slice(0, -14).forEach(function (o) { delete g.dailyStarted[o]; }); saveGam(g); }
  }
  // Stores the result under the challenge's own day. Returns true only for a same-day first attempt (published to today's board).
  function saveDaily(score, total, ms, k) {
    var g = gam(), today = dayKey();
    k = k || today;
    if (g.daily[k]) return false;
    g.daily[k] = { score: score, total: total, ms: ms, at: Date.now() };
    if (k === today) questEvent("daily", 1, g);
    saveGam(g);
    return k === today;
  }
  // Same 10 questions for everyone on a given day.
  function dailyIds(bank, k) {
    var ids = bank.map(function (q) { return q.id; }).sort();
    var r = seeded(hash("daily" + (k || dayKey())));
    for (var i = ids.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = ids[i]; ids[i] = ids[j]; ids[j] = t; }
    return ids.slice(0, 10);
  }

  function setGoal(n) { var g = gam(); if (GOALS.indexOf(n) >= 0) { g.goal = n; saveGam(g); } }

  // ---------- Analytics ----------
  function domainAccuracy(bank, stats) {
    stats = stats || load(KEYS.stats, {});
    var out = {};
    bank.forEach(function (q) {
      var d = out[q.domain] = out[q.domain] || { n: 0, ok: 0, seen: 0, total: 0 };
      d.total++;
      var s = stats[q.id];
      if (!s) return;
      d.n += s.seen || 0;
      d.ok += s.right || 0;
      d.seen++;
    });
    return out;
  }

  function topicKey(q) { return (q.topic || "").split(/\s[-–:]\s|:\s/)[0].trim(); }
  function topicStats(bank) {
    var stats = load(KEYS.stats, {});
    var topics = {};
    bank.forEach(function (q) {
      var s = stats[q.id];
      if (!s || !q.topic) return;
      var key = topicKey(q);
      var t = topics[key] = topics[key] || { topic: key, n: 0, wrong: 0, ids: [], domain: q.domain };
      t.n += s.seen || 0;
      t.wrong += s.wrong || 0;
      t.ids.push(q.id);
    });
    return Object.keys(topics).map(function (k) { var t = topics[k]; t.acc = t.n ? (t.n - t.wrong) / t.n : 0; return t; });
  }
  function weakTopics(bank, limit) {
    return topicStats(bank).filter(function (t) { return t.wrong > 0; })
      .sort(function (a, b) { return a.acc - b.acc || b.wrong - a.wrong; })
      .slice(0, limit || 6);
  }
  function strongTopics(bank, limit) {
    return topicStats(bank).filter(function (t) { return t.n >= 2 && t.acc >= 0.75; })
      .sort(function (a, b) { return b.acc - a.acc || b.n - a.n; })
      .slice(0, limit || 6);
  }

  function heat(weeks) {
    var g = gam();
    var today = new Date();
    var start = addDays(today, -(weeks * 7 - 1) - today.getDay()); // start on a Sunday
    var cells = [];
    for (var d = start; d <= today; d = addDays(d, 1)) {
      var k = dayKey(d);
      cells.push({ key: k, n: g.days[k] || 0, frozen: !!g.frozen[k], active: !!g.act[k], dow: d.getDay() });
    }
    return { cells: cells, goal: g.goal };
  }
  function lastDays(n) {
    var g = gam(), out = [], today = new Date();
    for (var i = n - 1; i >= 0; i--) {
      var d = addDays(today, -i), k = dayKey(d);
      out.push({ key: k, date: d, answers: g.days[k] || 0, xp: g.xpDays[k] || 0 });
    }
    return out;
  }

  // Exam readiness: blends exam-weighted accuracy, coverage, mastery and recent mock exams.
  function readiness(bank) {
    var stats = load(KEYS.stats, {});
    var acc = domainAccuracy(bank, stats);
    var A = 0, answers = 0, rawW = 0, rawSum = 0;
    [1, 2, 3, 4].forEach(function (d) {
      var b = acc[d] || { n: 0, ok: 0 };
      answers += b.n;
      A += WEIGHTS[d] * ((b.ok + 1) / (b.n + 2));        // Laplace-smoothed accuracy (used for the score)
      if (b.n) { rawW += WEIGHTS[d]; rawSum += WEIGHTS[d] * (b.ok / b.n); }
    });
    var valid = {};
    bank.forEach(function (q) { valid[q.id] = 1; });
    var seen = Object.keys(stats).filter(function (k) { return valid[k]; }).length;
    var C = bank.length ? seen / bank.length : 0;
    var M = bank.length ? masteredCount(valid) / bank.length : 0;
    var exams = load(KEYS.history, []).filter(function (h) { return h.mode === "exam" && h.total >= 10; }).slice(-3);
    var E = exams.length ? exams.reduce(function (s, h) { return s + h.score / h.total; }, 0) / exams.length : A;
    var score = Math.round(100 * Math.min(1, 0.55 * A + 0.15 * C + 0.1 * M + 0.2 * E));
    var predictedPct = 0.6 * A + 0.4 * E;
    var predicted = Math.round(120 * predictedPct);
    return {
      score: answers ? score : 0, accuracy: rawW ? rawSum / rawW : null, coverage: C, mastery: M, examAvg: exams.length ? E : null,
      predicted: answers ? predicted : null, predictedPct: predictedPct, answers: answers,
      confidence: answers < 100 ? "low" : answers < 300 ? "medium" : "high",
      verdict: !answers ? "Start practising" : answers < 60 ? "Early days" : predicted >= 90 ? "On track" : predicted >= 75 ? "Borderline" : "Not yet"
    };
  }

  // ---------- Import / export / merge (used by sync) ----------
  function exportAll() {
    return { v: 2, stats: load(KEYS.stats, {}), history: load(KEYS.history, []), gam: load(KEYS.gam, {}), srs: load(KEYS.srs, {}),
      cards: load(KEYS.cards, {}), learn: load(KEYS.learn, {}), study: load(KEYS.study, {}) };
  }
  function isEmpty(d) {
    return !d || (!Object.keys(d.stats || {}).length && !(d.history || []).length && !(d.gam && d.gam.xp));
  }
  function mergeMap(xa, xb, pick) {
    var r = {};
    xa = xa || {}; xb = xb || {};
    Object.keys(xa).concat(Object.keys(xb)).forEach(function (k) {
      var va = xa[k], vb = xb[k];
      r[k] = va == null ? vb : vb == null ? va : pick(va, vb, k);
    });
    return r;
  }
  function newer(x, y) { return (y.last || 0) > (x.last || 0) ? y : x; }
  function merge(a, b) {
    a = a || {}; b = b || {};
    // A reset on any device wins over older data everywhere.
    var ra = (a.gam && a.gam.resetAt) || 0, rb = (b.gam && b.gam.resetAt) || 0, RESET = Math.max(ra, rb);
    if (ra < RESET) a = { gam: { resetAt: RESET } };
    if (rb < RESET) b = { gam: { resetAt: RESET } };
    var out = { v: 2, history: [], gam: {} };
    out.stats = mergeMap(a.stats, b.stats, function (x, y) { return (y.seen || 0) > (x.seen || 0) ? y : x; });
    var seen = {};
    (a.history || []).concat(b.history || []).forEach(function (h) {
      var key = h.date + "|" + h.mode + "|" + h.score;
      if (!seen[key]) { seen[key] = 1; out.history.push(h); }
    });
    out.history.sort(function (x, y) { return x.date - y.date; });
    out.history = out.history.slice(-100);
    var ga = a.gam || {}, gb = b.gam || {};
    var max = function (x, y) { return Math.max(x || 0, y || 0); };
    var any = function (x, y) { return x || y; };
    var G = out.gam;
    var sumVals = function (o) { var t = 0; Object.keys(o || {}).forEach(function (k) { t += +o[k] || 0; }); return t; };
    G.xpDays = mergeMap(ga.xpDays, gb.xpDays, max);
    var sumG = sumVals(G.xpDays);
    // Keep XP earned on both devices without double-counting the days they share.
    G.xp = Math.max(ga.xp || 0, gb.xp || 0, (ga.xp || 0) + sumG - sumVals(ga.xpDays), (gb.xp || 0) + sumG - sumVals(gb.xpDays));
    G.reviews = max(ga.reviews, gb.reviews);
    G.goal = (gb.updated || 0) > (ga.updated || 0) ? (gb.goal || ga.goal) : (ga.goal || gb.goal);
    var earned = function (x) { return x.earned != null ? x.earned : (x.freezes || 0) + Object.keys(x.frozen || {}).length; };
    G.earned = Math.max(earned(ga), earned(gb));
    var fs = (ga.freezeStart || "") >= (gb.freezeStart || "") ? ga : gb, fo = fs === ga ? gb : ga;
    G.freezeStart = fs.freezeStart;
    G.freezeAt = (fo.freezeStart || "") === (fs.freezeStart || "") ? max(fs.freezeAt, fo.freezeAt) : (fs.freezeAt || 0);
    G.days = mergeMap(ga.days, gb.days, max);
    G.act = mergeMap(ga.act, gb.act, any);
    G.goalDays = mergeMap(ga.goalDays, gb.goalDays, any);
    G.frozen = mergeMap(ga.frozen, gb.frozen, any);
    Object.keys(G.frozen).forEach(function (k) { if (G.days[k] || G.act[k]) delete G.frozen[k]; });   // day was active elsewhere
    G.freezes = Math.max(0, Math.min(MAX_FREEZES, G.earned - Object.keys(G.frozen).length));
    G.badges = mergeMap(ga.badges, gb.badges, function (x, y) { return Math.min(x, y); });
    G.records = mergeMap(ga.records, gb.records, max);
    G.counts = mergeMap(ga.counts, gb.counts, max);
    // First attempt wins: earliest timestamp, else the copy already in the cloud (b).
    G.daily = mergeMap(ga.daily, gb.daily, function (x, y) { return x.at && y.at ? (y.at < x.at ? y : x) : y; });
    G.dailyStarted = mergeMap(ga.dailyStarted, gb.dailyStarted, function (x, y) { return Math.min(x, y); });
    G.quests = mergeMap(ga.quests, gb.quests, function (x, y) {
      var r = { ids: x.ids || y.ids, p: mergeMap(x.p, y.p, max), done: mergeMap(x.done, y.done, any), chest: !!(x.chest || y.chest) };
      return r;
    });
    G.updated = max(ga.updated, gb.updated);
    if (RESET) G.resetAt = RESET;
    out.srs = mergeMap(a.srs, b.srs, newer);
    out.cards = mergeMap(a.cards, b.cards, newer);
    out.learn = mergeMap(a.learn, b.learn, function (x, y) { return Math.min(x, y); });
    // Plan settings: the most recently edited copy wins; daily counters keep the higher value per day.
    var sa = a.study || {}, sb = b.study || {}, sn = (sb.updated || 0) > (sa.updated || 0) ? sb : sa;
    out.study = {};
    Object.keys(sn).forEach(function (k) { if (k !== "log") out.study[k] = sn[k]; });
    out.study.log = mergeMap(sa.log, sb.log, function (x, y) { return mergeMap(x, y, max); });
    if (RESET && (out.study.updated || 0) < RESET) out.study = {};
    return out;
  }
  function importAll(d) {
    try {
      localStorage.setItem(KEYS.stats, JSON.stringify(d.stats || {}));
      localStorage.setItem(KEYS.history, JSON.stringify(d.history || []));
      localStorage.setItem(KEYS.gam, JSON.stringify(d.gam || {}));
      localStorage.setItem(KEYS.srs, JSON.stringify(d.srs || {}));
      localStorage.setItem(KEYS.cards, JSON.stringify(d.cards || {}));
      localStorage.setItem(KEYS.learn, JSON.stringify(d.learn || {}));
      localStorage.setItem(KEYS.study, JSON.stringify(d.study || {}));
    } catch (e) { /* ignore */ }
  }
  function clearAll() {
    SYNCED.forEach(function (k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } });
  }
  // "Reset progress": wipes local data and leaves a marker so other devices drop their older copies on sync.
  function resetAll() {
    clearAll();
    var now = Date.now();
    save(KEYS.gam, { resetAt: now, updated: now });
  }

  window.CAMSProgress = {
    KEYS: KEYS, SYNCED: SYNCED, GOALS: GOALS, BADGES: BADGES, XP: XP, MASTERED_BOX: MASTERED_BOX, RECORDS: RECORDS, WEIGHTS: WEIGHTS,
    on: function (fn) { listeners.push(fn); },
    gam: gam, levelFor: levelFor, titleFor: titleFor, streak: streak, applyFreezes: applyFreezes, dayKey: dayKey, weekKey: weekKey, weekXp: weekXp,
    onAnswer: onAnswer, onFinish: onFinish, onSprint: onSprint, setGoal: setGoal, checkBadges: checkBadges,
    todayQuests: todayQuests, questEvent: questEvent, record: record,
    dailyResult: dailyResult, saveDaily: saveDaily, dailyIds: dailyIds, startDaily: startDaily, dailyAttemptUsed: dailyAttemptUsed,
    cardUpdate: cardUpdate, cardState: cardState, orderDeck: orderDeck, lessonRead: lessonRead, lessons: lessons,
    dueIds: dueIds, masteredCount: masteredCount, domainAccuracy: domainAccuracy, weakTopics: weakTopics, strongTopics: strongTopics,
    topicKey: topicKey, heat: heat, lastDays: lastDays, readiness: readiness, seeded: seeded, hash: hash,
    srs: function () { return load(KEYS.srs, {}); },
    study: study, saveStudy: saveStudy, examTime: examTime,
    exportAll: exportAll, importAll: importAll, merge: merge, isEmpty: isEmpty, clearAll: clearAll, resetAll: resetAll, save: save
  };
})();
