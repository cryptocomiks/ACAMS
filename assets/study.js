/* CAMS Exam Trainer — 30-day plan.
 * Set an exam date, take a 40-question diagnostic, then follow one mission a day:
 * a lesson, a quiz on it, spaced review, flashcards, and mock exams at fixed milestones.
 * The last 8 days switch to mixed practice, most-missed questions and weak domains.
 * The design follows learning research: retrieval practice and spacing first, pretesting on day 1,
 * successive relearning (reviews keep coming back), and mixed practice before the exam. */
(function () {
  "use strict";
  var A = window.CAMSApp, PG = window.CAMSProgress, PL = window.CAMSPlan;
  if (!A || !PG) return;
  var app = document.getElementById("app");
  var esc = A.esc;
  var DAY = 864e5;
  var CONSOLIDATE = 8;      // last days: mixed practice only
  var DIAG_COUNT = 40;

  function load(k, fb) { try { var r = localStorage.getItem(k); return r ? JSON.parse(r) : fb; } catch (e) { return fb; } }
  function parse(d) { var p = d.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function days(a, b) { return Math.round((parse(b) - parse(a)) / DAY); }
  function addDays(d, n) { var x = parse(d); x.setDate(x.getDate() + n); return PG.dayKey(x); }
  function fmt(d) { return parse(d).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }); }
  function today() { return PG.dayKey(); }
  function st() { return PG.study(); }
  function modules() { return (window.CAMS_COURSE || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); }); }
  function startOfToday() { var d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); }

  function setExam(date) {
    var s = st();
    s.examDate = date;
    if (!s.startDate || s.startDate > today()) s.startDate = today();
    PG.saveStudy(s);
  }
  function stop() { var s = st(); PG.saveStudy({ log: s.log || {} }); }
  function recordDiag(items) {
    var s = st(), by = {};
    items.forEach(function (it) { by[it.d] = by[it.d] || { n: 0, ok: 0 }; by[it.d].n++; if (it.ok) by[it.d].ok++; });
    s.diag = { at: Date.now(), n: items.length, ok: items.filter(function (i) { return i.ok; }).length, by: by };
    PG.saveStudy(s);
  }
  function taskDone(id) {
    var s = st();
    if (!s.examDate) return;
    var k = today();
    s.log = s.log || {};
    s.log[k] = s.log[k] || {};
    s.log[k]["t:" + id] = 1;
    PG.saveStudy(s);
  }

  // Mock exams at about 25%, 50% and 75% of the plan, plus one 4 days before the exam.
  function mockDays(s) {
    var total = Math.max(1, days(s.startDate, s.examDate)), out = [];
    [0.25, 0.5, 0.75].forEach(function (f) { var d = Math.round(total * f); if (d >= 2) out.push(addDays(s.startDate, d)); });
    if (total > 6) out.push(addDays(s.examDate, -4));
    out = out.filter(function (d, i) { return out.indexOf(d) === i && d < s.examDate; }).sort();
    // Keep at least 4 days between two mock exams (the last one wins).
    return out.filter(function (d, i) { return i === out.length - 1 || days(d, out[i + 1]) >= 4; });
  }
  function examsSince(day) {
    var t = parse(day).getTime();
    return load("cams.history.v1", []).filter(function (h) { return h.mode === "exam" && h.date >= t; });
  }

  // Domain accuracy: diagnostic blended with everything answered since.
  function domainLevels(s) {
    var stats = load("cams.stats.v1", {}), by = {};
    [1, 2, 3, 4].forEach(function (d) { by[d] = { n: 0, ok: 0 }; });
    Object.keys(stats).forEach(function (id) {
      var q = A.BY_ID[id];
      if (q) { by[q.domain].n += stats[id].seen; by[q.domain].ok += stats[id].right; }
    });
    if (s.diag && s.diag.by) Object.keys(s.diag.by).forEach(function (d) { if (!by[d].n) { by[d].n = s.diag.by[d].n; by[d].ok = s.diag.by[d].ok; } });
    return by;
  }
  function weakest(s) {
    var by = domainLevels(s), best = null;
    [1, 2, 3, 4].forEach(function (d) { var a = by[d].n ? by[d].ok / by[d].n : 0; if (best == null || a < best.a) best = { d: d, a: a }; });
    return best ? best.d : 1;
  }

  // Today's tasks: { id, icon, title, sub, done, action: { session } | { href } }
  function mission() {
    var s = st();
    if (!s.examDate) return null;
    var k = today(), left = days(k, s.examDate), total = Math.max(1, days(s.startDate, s.examDate));
    var log = (s.log || {})[k] || {};
    var g = PG.gam(), answered = g.days[k] || 0;
    var due = PG.dueIds(A.BY_ID).length;
    var learn = load("cams.learn.v1", {});
    var srs = load("cams.srs.v1", {});
    var t0 = startOfToday();
    var tasks = [], phase;
    var t = function (id) { return !!log["t:" + id]; };

    if (left < 0) return { phase: "after", left: left, total: total, tasks: [] };
    if (left === 0) return { phase: "exam", left: 0, total: total, tasks: [] };
    if (!s.diag) {
      phase = "diag";
      tasks.push({ id: "diag", icon: "🧭", title: "Take the diagnostic", sub: DIAG_COUNT + " questions across the 4 domains, about 25 minutes. Free. Guess when you don't know: testing yourself before studying helps you learn.", done: false,
        action: { session: ["practice", { diag: true, count: DIAG_COUNT, domain: "all", source: "fresh", label: "Diagnostic" }] } });
      var m0 = modules()[0];
      if (m0) tasks.push({ id: "lesson:" + m0.id, icon: "📖", title: "Read: " + m0.title, sub: (m0.minutes || 10) + " min · what the exam looks like and how it is scored", done: !!learn[m0.id], action: { href: "#/learn/" + m0.id } });
      return { phase: phase, left: left, total: total, tasks: tasks };
    }

    tasks.push({ id: "review", icon: "🔁", title: "Smart review", sub: due ? due + " question" + (due > 1 ? "s" : "") + " due: the ones you are about to forget" : "Nothing due right now", done: !due || t("review") || (log.r || 0) >= 20,
      action: { session: ["review", { domain: "all", source: "review", planTask: "review" }] } });

    var mocks = mockDays(s), pendingMock = mocks.filter(function (d) { return d <= k && !examsSince(d).length; })[0];
    if (pendingMock || mocks.indexOf(k) >= 0) {
      var doneMock = mocks.indexOf(k) >= 0 && examsSince(k).length > 0;
      tasks.push({ id: "mock", icon: "⏱", title: "Mock exam" + (pendingMock && pendingMock < k ? " (catch-up)" : ""), sub: "30 questions under exam timing. Tomorrow, train on what you missed.", done: doneMock,
        action: { session: ["exam", { domain: "all", source: "fresh", planTask: "mock" }] } });
    }

    if (left === 1) {
      phase = "final";
      tasks.push({ id: "missed", icon: "🎯", title: "Last look at your most missed", sub: "20 questions, no pressure", done: t("missed"), action: { href: "#/mistakes" } });
      tasks.push({ id: "cards", icon: "🃏", title: "15 flashcards on the key numbers", sub: "Thresholds, deadlines, percentages", done: (log.c || 0) >= 15, action: { href: "#/cards/all" } });
      tasks.push({ id: "rest", icon: "😴", title: "Stop early and sleep well", sub: "Sleep consolidates what you learnt. No cramming tonight.", done: false, action: null });
    } else if (left <= CONSOLIDATE) {
      phase = "consolidate";
      var wd = weakest(s);
      tasks.push({ id: "weak", icon: "🎯", title: "Weakest domain: D" + wd, sub: "20 mixed questions on " + A.DOMAINS[wd].name, done: t("weak"),
        action: { session: ["practice", { domain: String(wd), source: "fresh", count: 20, planTask: "weak" }] } });
      tasks.push({ id: "missed", icon: "❌", title: "Your most-missed questions", sub: "Re-answer the top 20 until they stick", done: t("missed"), action: { href: "#/mistakes" } });
      tasks.push({ id: "mixed", icon: "🔀", title: "Mixed practice", sub: "30 questions from all domains, weighted like the exam", done: t("mixed"),
        action: { session: ["practice", { domain: "all", source: "fresh", planTask: "mixed" }] } });
    } else {
      phase = "learn";
      var mods = modules(), learnLeft = Math.max(1, left - CONSOLIDATE);
      var readToday = mods.filter(function (m) { return learn[m.id] && learn[m.id] >= t0; });
      var unread = mods.filter(function (m) { return !learn[m.id]; });
      var perDay = Math.min(3, Math.ceil((unread.length + readToday.length) / learnLeft));
      var todays = readToday.concat(unread).slice(0, Math.max(perDay, readToday.length));
      if (!todays.length) {
        // Course finished early: mixed practice on the bank.
        tasks.push({ id: "mixed", icon: "🔀", title: "Mixed practice", sub: "Course done: 30 mixed questions", done: t("mixed"),
          action: { session: ["practice", { domain: "all", source: "fresh", planTask: "mixed" }] } });
      }
      todays.forEach(function (m) {
        tasks.push({ id: "lesson:" + m.id, icon: m.icon || "📖", title: "Read: " + m.title, sub: (m.minutes || 14) + " min · skim it, then test yourself", done: !!learn[m.id], action: { href: "#/learn/" + m.id } });
        var ids = (m.questionIds || []).filter(function (id) { return A.BY_ID[id]; });
        if (ids.length >= 5) {
          var doneQ = t("quiz:" + m.id) || ids.filter(function (id) { return srs[id] && srs[id].last >= t0; }).length >= Math.min(12, ids.length);
          tasks.push({ id: "quiz:" + m.id, icon: "✍️", title: "Quiz: " + m.title, sub: "15 questions on this lesson, right after reading it", done: doneQ,
            action: { session: ["practice", { ids: ids, count: 15, label: m.title, planTask: "quiz:" + m.id }] } });
        }
      });
      tasks.push({ id: "cards", icon: "🃏", title: "10 flashcards", sub: "Recall first, then flip", done: (log.c || 0) >= 10, action: { href: "#/cards/" + (todays[0] ? todays[0].id : "all") } });
    }
    var unseen = A.BANK.length - Object.keys(load("cams.stats.v1", {})).filter(function (id) { return A.BY_ID[id]; }).length;
    var target = Math.max(20, Math.min(60, Math.ceil(unseen / Math.max(1, left - 2))));
    if (phase !== "final") tasks.push({ id: "answers", icon: "📈", title: "Answer " + target + " questions today", sub: answered + " / " + target + " so far (all modes count)", done: answered >= target,
      action: { session: ["practice", { domain: "all", source: "fresh" }] } });
    return { phase: phase, left: left, total: total, tasks: tasks };
  }

  var PHASES = {
    diag: ["Day 1: diagnostic", "Find out where you stand. The plan adapts to it."],
    learn: ["Learn", "One or two lessons a day, each followed by a quiz. Reviews bring back what you missed."],
    consolidate: ["Consolidate", "No new lessons: mixed practice, weakest domain, most-missed questions."],
    final: ["Final day", "Light review only, then rest."],
    exam: ["Exam day", "Good luck. Read every stem twice: FIRST, BEST, MOST."],
    after: ["Exam passed?", "Set a new date if you are retaking it."]
  };

  function bar(p) { return '<div class="xpbar"><div style="width:' + Math.max(0, Math.min(100, p)) + '%"></div></div>'; }

  function render() {
    A.setView("page");
    A.setTopbar(A.homeChips());
    var s = st(), html = '<div class="page-head fade-in"><h1>Your 30-day plan.</h1><p class="muted">One mission a day, built on how memory works: test yourself, space it out, fix your mistakes.</p></div>';
    if (!s.examDate) {
      var def = addDays(today(), 30);
      html += '<div class="card st-setup fade-in"><div class="st-ic" aria-hidden="true">🗓</div><h2>When is your exam?</h2>' +
        '<p class="muted">We build a day-by-day plan up to that date: a diagnostic, a lesson and quiz each day, spaced reviews, mock exams at milestones and a final week of mixed practice.</p>' +
        '<div class="st-date"><input type="date" id="stDate" value="' + def + '" min="' + addDays(today(), 3) + '"><button class="btn primary lg" id="stGo">Build my plan</button></div>' +
        '<button class="link-btn small" id="stNoDate">No date yet? Plan for 30 days from today</button></div>';
      html += scienceHtml();
      app.innerHTML = html;
      document.getElementById("stGo").onclick = function () { var v = document.getElementById("stDate").value; if (v && v > today()) { setExam(v); render(); } };
      document.getElementById("stNoDate").onclick = function () { setExam(def); render(); };
      window.scrollTo(0, 0);
      return;
    }
    var m = mission(), ph = PHASES[m.phase];
    var dayN = Math.min(m.total, Math.max(1, days(s.startDate, today()) + 1));
    var rd = PG.readiness(A.BANK);
    html += '<div class="card st-top fade-in"><div class="st-count"><b>' + (m.left > 0 ? m.left : m.left === 0 ? "🎯" : "✓") + "</b><span>" + (m.left > 0 ? "day" + (m.left > 1 ? "s" : "") + " to go" : m.left === 0 ? "today" : "done") + "</span></div>" +
      '<div class="st-meta"><div class="dlabel">' + esc(ph[0]) + (m.left >= 0 ? " · Day " + dayN + " of " + m.total : "") + "</div><h3>Exam on " + fmt(s.examDate) + "</h3>" +
      '<p class="muted small">' + esc(ph[1]) + "</p>" + bar(dayN / m.total * 100) + "</div>" +
      '<div class="st-ready"><b>' + (rd.predicted != null ? rd.predicted + "<small>/120</small>" : "–") + "</b><span>predicted score · pass 75</span></div></div>";

    if (m.tasks.length) {
      var done = m.tasks.filter(function (x) { return x.done; }).length, real = m.tasks.filter(function (x) { return x.action; }).length;
      html += '<div class="card st-mission"><div class="qhead" style="margin:0 0 6px"><h2 style="margin:0">Today\'s mission</h2><span class="tag ' + (done >= real ? "good" : "blue") + '">' + Math.min(done, real) + " / " + real + " done</span></div>" +
        m.tasks.map(function (x, i) {
          var act = !x.action ? "" : x.done ? '<span class="st-ok">✓</span>' : x.action.href ? '<a class="btn sm primary" href="' + x.action.href + '">Go</a>' : '<button class="btn sm primary" data-task="' + i + '">Start</button>';
          return '<div class="st-task' + (x.done ? " done" : "") + '"><span class="st-ti" aria-hidden="true">' + x.icon + '</span><span class="st-tb"><b>' + esc(x.title) + "</b><span>" + esc(x.sub) + "</span></span>" + act + "</div>";
        }).join("") +
        (done >= real && real ? '<p class="st-cheer">🎉 Mission complete. Anything more today is a bonus, and tomorrow\'s reviews are already scheduled.</p>' : "") + "</div>";
    }

    if (s.diag) {
      var by = domainLevels(s);
      html += '<div class="dgrid2" style="margin-top:20px"><div class="card"><div class="dlabel">Where you stand</div>' +
        '<p class="muted small" style="margin:4px 0 12px">Diagnostic: ' + s.diag.ok + "/" + s.diag.n + " · domains below blend it with everything you answered since.</p>" +
        [1, 2, 3, 4].map(function (d) {
          var b = by[d], p = b.n ? Math.round(b.ok / b.n * 100) : 0;
          return '<div class="st-dom"><span>D' + d + " · " + esc(A.DOMAINS[d].short) + "</span><b>" + (b.n ? p + "%" : "–") + "</b>" + bar(p) + "</div>";
        }).join("") + "</div>" + roadmapHtml(s, m) + "</div>";
    } else {
      html += '<div style="margin-top:20px">' + roadmapHtml(s, m) + "</div>";
    }
    html += scienceHtml();
    html += '<div class="st-foot"><label class="small muted">Exam date <input type="date" id="stChange" value="' + s.examDate + '" min="' + addDays(today(), 1) + '"></label>' +
      '<button class="link-btn small" id="stStop">Stop the plan</button></div>';
    app.innerHTML = html;

    Array.prototype.forEach.call(app.querySelectorAll("[data-task]"), function (b) {
      b.onclick = function () { var x = m.tasks[+b.getAttribute("data-task")]; if (x && x.action && x.action.session) A.startSession(x.action.session[0], x.action.session[1]); };
    });
    document.getElementById("stChange").onchange = function () { var v = this.value; if (v && v > today()) { setExam(v); render(); } };
    document.getElementById("stStop").onclick = function () { if (confirm("Stop the plan? Your progress and reviews are kept.")) { stop(); render(); } };
    window.scrollTo(0, 0);
  }

  function roadmapHtml(s, m) {
    var total = m.total, mocks = mockDays(s), consolidateFrom = addDays(s.examDate, -CONSOLIDATE);
    var rows = [
      [s.startDate, "🧭", "Diagnostic", s.diag ? "done" : ""],
      [addDays(s.startDate, 1), "📖", "Lessons + quizzes, about " + Math.ceil(modules().length / Math.max(1, total - CONSOLIDATE - 1)) + " a day", ""]
    ];
    mocks.forEach(function (d) { rows.push([d, "⏱", "Mock exam", examsSince(d).length ? "done" : ""]); });
    rows.push([consolidateFrom, "🔀", "Mixed practice, weakest domain, most missed", ""]);
    rows.push([addDays(s.examDate, -1), "😴", "Light review and sleep", ""]);
    rows.push([s.examDate, "🎯", "Exam day", ""]);
    rows.sort(function (a, b) { return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0; });
    var k = today();
    return '<div class="card"><div class="dlabel">Roadmap</div><div class="st-road">' + rows.map(function (r) {
      return '<div class="st-step' + (r[3] ? " done" : r[0] < k ? " past" : r[0] === k ? " now" : "") + '"><span class="st-sd">' + fmt(r[0]) + '</span><span>' + r[1] + " " + esc(r[2]) + (r[3] ? " ✓" : "") + "</span></div>";
    }).join("") + "</div></div>";
  }

  function scienceHtml() {
    var items = [
      ["Test yourself, don't reread.", "Practice testing and spaced practice are the two techniques rated most useful in a review of ten study methods; rereading and highlighting rated low.", "https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html"],
      ["Space it out.", "The best gap between reviews grows with how long you must remember. Your reviews are timed to land before the exam.", "https://pubmed.ncbi.nlm.nih.gov/19076480/"],
      ["Guess first, then learn.", "Trying to answer before studying, even wrongly, improves what you learn next. That is why day 1 is a diagnostic.", "https://learninglab.uchicago.edu/Pre-Testing_files/RichlandKornellKao.pdf"],
      ["Get it right again, on different days.", "Recalling an answer correctly in several spaced sessions beats getting it right several times in one sitting.", "https://journals.sagepub.com/doi/full/10.1177/09637214221100484"]
    ];
    return '<div class="card st-science"><div class="dlabel">Why this plan works</div><div class="st-sci">' + items.map(function (i) {
      return '<div><b>' + esc(i[0]) + "</b><span>" + esc(i[1]) + ' <a href="' + i[2] + '" target="_blank" rel="noopener">Study</a></span></div>';
    }).join("") + "</div></div>";
  }

  // Home: the plan's summary for today, or an invitation to start one.
  function homeCard() {
    var s = st();
    if (!s.examDate) {
      return '<div class="st-home fade-in"><a class="card st-invite" href="#/plan"><span class="st-ic" aria-hidden="true">🗓</span><span><b>Pass CAMS in 30 days</b>' +
        '<span class="muted small">Free diagnostic, then one mission a day built on learning science.</span></span><span class="mt-go" aria-hidden="true">›</span></a></div>';
    }
    var m = mission();
    if (!m) return "";
    var real = m.tasks.filter(function (x) { return x.action; }), done = real.filter(function (x) { return x.done; }).length;
    var next = real.filter(function (x) { return !x.done; })[0];
    return '<div class="st-home fade-in"><a class="card st-invite" href="#/plan"><span class="st-ic" aria-hidden="true">🗓</span><span><b>' +
      (m.left > 0 ? m.left + " day" + (m.left > 1 ? "s" : "") + " to your exam · " + done + "/" + real.length + " done today" : m.left === 0 ? "Exam day. You've got this." : "Plan finished") + "</b>" +
      '<span class="muted small">' + (next ? "Next: " + esc(next.title) : real.length ? "Mission complete for today 🎉" : esc(PHASES[m.phase][1])) + '</span></span><span class="mt-go" aria-hidden="true">›</span></a></div>';
  }

  window.CAMSStudy = { mission: mission, recordDiag: recordDiag, taskDone: taskDone, homeCard: homeCard, setExam: setExam };
  A.route("plan", render);
})();
