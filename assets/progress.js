/* CAMS Exam Trainer — learning progress: XP, levels, streaks, daily goal, badges, spaced repetition.
 * Works fully offline (localStorage). account.js syncs the same data to Supabase when signed in. */
(function () {
  "use strict";

  var KEYS = {
    stats: "cams.stats.v1",     // { qid: { seen, right, wrong, last } }
    history: "cams.history.v1", // [ { date, mode, score, total, scope } ]
    gam: "cams.gam.v1",         // { xp, days: { "YYYY-MM-DD": answers }, goalDays: { date: true }, goal, badges: { id: ts }, reviews, updated }
    srs: "cams.srs.v1"          // { qid: { box, due, last } }
  };
  var SYNCED = [KEYS.stats, KEYS.history, KEYS.gam, KEYS.srs];

  // Leitner boxes: days until the next review for each box.
  var INTERVALS = [0, 1, 3, 7, 16, 35];
  var MASTERED_BOX = 4;
  var XP = { right: 10, wrong: 2, reviewRight: 12, testDone: 20, examPass: 50, goal: 30 };
  var GOALS = [10, 20, 30, 50];

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

  function gam() {
    var g = load(KEYS.gam, null) || {};
    g.xp = g.xp || 0;
    g.days = g.days || {};
    g.goalDays = g.goalDays || {};
    g.goal = GOALS.indexOf(g.goal) >= 0 ? g.goal : 20;
    g.badges = g.badges || {};
    g.reviews = g.reviews || 0;
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

  // ---------- Streak ----------
  function streak(g) {
    g = g || gam();
    var today = new Date();
    var d = g.days[dayKey(today)] ? today : addDays(today, -1);
    var n = 0;
    while (g.days[dayKey(d)]) { n++; d = addDays(d, -1); }
    var best = 0, run = 0;
    Object.keys(g.days).sort().forEach(function (k, i, arr) {
      if (i > 0 && dayKey(addDays(new Date(arr[i - 1] + "T12:00:00"), 1)) === k) run++; else run = 1;
      best = Math.max(best, run);
    });
    return { current: n, best: Math.max(best, n), activeToday: !!g.days[dayKey(today)] };
  }

  // ---------- Spaced repetition ----------
  function srsUpdate(qid, ok) {
    var srs = load(KEYS.srs, {});
    var c = srs[qid];
    var now = Date.now();
    var box;
    if (!c) box = ok ? 2 : 1;
    else box = ok ? Math.min(INTERVALS.length - 1, c.box + 1) : 1;
    // Missed: back in 10 minutes. Right: 1, 3, 7, 16 then 35 days (minus an hour so "tomorrow" means tomorrow).
    var due = ok ? now + INTERVALS[box] * 864e5 - 36e5 : now + 10 * 6e4;
    srs[qid] = { box: box, due: due, last: now };
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
    { id: "exam_pass", icon: "✅", name: "Exam ready", desc: "Pass a mock exam" },
    { id: "exam80", icon: "🎓", name: "Distinction", desc: "Score 80%+ on a mock exam" },
    { id: "perfect", icon: "💎", name: "Flawless", desc: "Score 100% on a test" },
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
    var byDomain = domainAccuracy(bank, stats);
    var have = g.badges, fresh = [];
    var history = load(KEYS.history, []);
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
      exam_pass: history.some(function (h) { return h.mode === "exam" && h.score / h.total >= 75 / 120; }),
      exam80: history.some(function (h) { return h.mode === "exam" && h.score / h.total >= 0.8; }),
      perfect: history.some(function (h) { return h.total >= 10 && h.score === h.total; }),
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
  function addXp(g, n) {
    var before = levelFor(g.xp).level;
    g.xp += n;
    var after = levelFor(g.xp).level;
    if (after > before) emit({ type: "level", level: after, title: titleFor(after) });
  }

  function onAnswer(qid, ok, opts) {
    opts = opts || {};
    var g = gam();
    var k = dayKey();
    var wasActive = !!g.days[k];
    g.days[k] = (g.days[k] || 0) + 1;
    var gain = ok ? (opts.review ? XP.reviewRight : XP.right) : XP.wrong;
    if (opts.review) g.reviews++;
    addXp(g, gain);
    if (g.days[k] >= g.goal && !g.goalDays[k]) {
      g.goalDays[k] = true;
      addXp(g, XP.goal);
      emit({ type: "goal", goal: g.goal, bonus: XP.goal });
    }
    saveGam(g);
    srsUpdate(qid, ok);
    if (!wasActive) {
      var st = streak(g);
      if (st.current > 1) emit({ type: "streak", days: st.current });
    }
    return gain;
  }

  function onFinish(summary) {
    var g = gam();
    var bonus = XP.testDone;
    if (summary.mode === "exam" && summary.score / summary.total >= 75 / 120) bonus += XP.examPass;
    addXp(g, bonus);
    saveGam(g);
    return bonus;
  }

  function setGoal(n) { var g = gam(); if (GOALS.indexOf(n) >= 0) { g.goal = n; saveGam(g); } }

  // ---------- Analytics for the dashboard ----------
  function domainAccuracy(bank, stats) {
    stats = stats || load(KEYS.stats, {});
    var out = {};
    bank.forEach(function (q) {
      var s = stats[q.id];
      if (!s) return;
      var d = out[q.domain] = out[q.domain] || { n: 0, ok: 0, seen: 0, total: 0 };
      d.n += s.seen || 0;
      d.ok += s.right || 0;
      d.seen++;
    });
    bank.forEach(function (q) { var d = out[q.domain] = out[q.domain] || { n: 0, ok: 0, seen: 0, total: 0 }; d.total++; });
    return out;
  }

  function weakTopics(bank, limit) {
    var stats = load(KEYS.stats, {});
    var topics = {};
    bank.forEach(function (q) {
      var s = stats[q.id];
      if (!s || !q.topic) return;
      var key = q.topic.split(/\s[-–:]\s|:\s/)[0].trim();
      var t = topics[key] = topics[key] || { topic: key, n: 0, wrong: 0, ids: [], domain: q.domain };
      t.n += s.seen || 0;
      t.wrong += s.wrong || 0;
      t.ids.push(q.id);
    });
    return Object.keys(topics).map(function (k) { return topics[k]; })
      .filter(function (t) { return t.wrong > 0; })
      .map(function (t) { t.acc = t.n ? (t.n - t.wrong) / t.n : 0; return t; })
      .sort(function (a, b) { return a.acc - b.acc || b.wrong - a.wrong; })
      .slice(0, limit || 6);
  }

  function heat(weeks) {
    var g = gam();
    var today = new Date();
    var start = addDays(today, -(weeks * 7 - 1) - today.getDay()); // start on a Sunday
    var cells = [];
    for (var d = start; d <= today; d = addDays(d, 1)) cells.push({ key: dayKey(d), n: g.days[dayKey(d)] || 0, dow: d.getDay() });
    return { cells: cells, goal: g.goal };
  }

  // ---------- Import / export / merge (used by sync) ----------
  function exportAll() {
    return { v: 1, stats: load(KEYS.stats, {}), history: load(KEYS.history, []), gam: load(KEYS.gam, {}), srs: load(KEYS.srs, {}) };
  }
  function isEmpty(d) {
    return !d || (!Object.keys(d.stats || {}).length && !(d.history || []).length && !(d.gam && d.gam.xp));
  }
  function merge(a, b) {
    a = a || {}; b = b || {};
    var out = { v: 1, stats: {}, history: [], gam: {}, srs: {} };
    var sa = a.stats || {}, sb = b.stats || {};
    Object.keys(sa).concat(Object.keys(sb)).forEach(function (k) {
      var x = sa[k], y = sb[k];
      out.stats[k] = !x ? y : !y ? x : ((y.seen || 0) > (x.seen || 0) ? y : x);
    });
    var seen = {};
    (a.history || []).concat(b.history || []).forEach(function (h) {
      var key = h.date + "|" + h.mode + "|" + h.score;
      if (!seen[key]) { seen[key] = 1; out.history.push(h); }
    });
    out.history.sort(function (x, y) { return x.date - y.date; });
    out.history = out.history.slice(-100);
    var ga = a.gam || {}, gb = b.gam || {};
    out.gam.xp = Math.max(ga.xp || 0, gb.xp || 0);
    out.gam.reviews = Math.max(ga.reviews || 0, gb.reviews || 0);
    out.gam.goal = (gb.updated || 0) > (ga.updated || 0) ? (gb.goal || ga.goal) : (ga.goal || gb.goal);
    ["days", "goalDays", "badges"].forEach(function (f) {
      var r = {}, xa = ga[f] || {}, xb = gb[f] || {};
      Object.keys(xa).concat(Object.keys(xb)).forEach(function (k) {
        var va = xa[k], vb = xb[k];
        if (f === "days") r[k] = Math.max(va || 0, vb || 0);
        else if (f === "badges") r[k] = va && vb ? Math.min(va, vb) : (va || vb);
        else r[k] = va || vb;
      });
      out.gam[f] = r;
    });
    out.gam.updated = Math.max(ga.updated || 0, gb.updated || 0);
    var ra = a.srs || {}, rb = b.srs || {};
    Object.keys(ra).concat(Object.keys(rb)).forEach(function (k) {
      var x = ra[k], y = rb[k];
      out.srs[k] = !x ? y : !y ? x : ((y.last || 0) > (x.last || 0) ? y : x);
    });
    return out;
  }
  function importAll(d) {
    try {
      localStorage.setItem(KEYS.stats, JSON.stringify(d.stats || {}));
      localStorage.setItem(KEYS.history, JSON.stringify(d.history || []));
      localStorage.setItem(KEYS.gam, JSON.stringify(d.gam || {}));
      localStorage.setItem(KEYS.srs, JSON.stringify(d.srs || {}));
    } catch (e) { /* ignore */ }
  }
  function clearAll() {
    SYNCED.forEach(function (k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } });
  }

  window.CAMSProgress = {
    KEYS: KEYS, SYNCED: SYNCED, GOALS: GOALS, BADGES: BADGES, XP: XP, MASTERED_BOX: MASTERED_BOX,
    on: function (fn) { listeners.push(fn); },
    gam: gam, levelFor: levelFor, titleFor: titleFor, streak: streak, dayKey: dayKey,
    onAnswer: onAnswer, onFinish: onFinish, setGoal: setGoal, checkBadges: checkBadges,
    dueIds: dueIds, masteredCount: masteredCount, domainAccuracy: domainAccuracy, weakTopics: weakTopics, heat: heat,
    srs: function () { return load(KEYS.srs, {}); },
    exportAll: exportAll, importAll: importAll, merge: merge, isEmpty: isEmpty, clearAll: clearAll, save: save
  };
})();
