(function () {
  "use strict";

  // ---------- Config ----------
  var QUESTIONS_PER_TEST = 30;
  var SECONDS_PER_QUESTION = 105; // real exam: 120 questions in 210 minutes
  var PASS_RATE = 75 / 120; // 62.5%: the handbook's passing score is 75; ACAMS does not publish the raw-score conversion, so 75 of 120 is our pass line
  var DOMAINS = {
    1: { name: "Risks & Methods of Financial Crime", short: "Risks & Methods", weight: 0.30 },
    2: { name: "Global AFC Frameworks, Governance & Regulations", short: "Frameworks & Regulations", weight: 0.20 },
    3: { name: "Building an AFC Compliance Program", short: "Compliance Program", weight: 0.30 },
    4: { name: "Tools & Technologies to Fight Financial Crime", short: "Tools & Technologies", weight: 0.20 }
  };
  // Game modes. instant = feedback after each answer.
  var MODES = {
    practice: { label: "Practice", icon: "💡", instant: true, n: QUESTIONS_PER_TEST },
    exam: { label: "Mock exam", icon: "⏱", instant: false, n: QUESTIONS_PER_TEST },
    review: { label: "Review", icon: "🔁", instant: true, n: 20 },
    lightning: { label: "Lightning", icon: "⏳", instant: true, n: 15, perQuestion: 30 },
    survival: { label: "Survival", icon: "❤️", instant: true, lives: 3 },
    daily: { label: "Daily challenge", icon: "📅", instant: true, n: 10 }
  };
  var LETTERS = "ABCDEFGH";
  var RETRY_GAP = 3;   // other questions shown before a missed one comes back
  var KEYS = { session: "cams.session.v1", history: "cams.history.v1", stats: "cams.stats.v1", prefs: "cams.prefs.v1" };

  var BANK = (window.CAMS_QUESTIONS || []).filter(function (q) {
    return q && q.id && Array.isArray(q.options) && Array.isArray(q.answer) && DOMAINS[q.domain];
  });
  var BY_ID = {};
  BANK.forEach(function (q) { BY_ID[q.id] = q; });

  var app = document.getElementById("app");
  var topbarRight = document.getElementById("topbarRight");
  var PG = window.CAMSProgress;
  var FX = window.CAMSFX || { play: function () {}, confetti: function () {}, celebrate: function () {}, countUp: function () {}, hourglass: function () { return ""; }, hourglassUpdate: function () {} };
  var CH = window.CAMSCharts;
  var session = null;
  var timerHandle = null, qTimer = null;
  var viewTimers = [];
  var reviewFilter = "all";
  var lastRendered = -1;
  var pendingFocus = null; // selector to refocus after a keyboard-driven re-render
  var routes = {};
  var PL = window.CAMSPlan || null;
  function isPremium() { return !PL || PL.premium(); }

  // ---------- Storage (fails silently) ----------
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    if (PG && PG.SYNCED.indexOf(key) >= 0) return PG.save(key, value);
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  }
  function remove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }

  // ---------- Utils ----------
  function modeLabel(m) { return (MODES[m] || MODES.practice).label; }
  function instant(s) { return (MODES[s.mode] || MODES.practice).instant; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function range(n) { var r = []; for (var i = 0; i < n; i++) r.push(i); return r; }
  function pct(n, d) { return d ? Math.round((n / d) * 100) : 0; }
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return (h ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    return a.slice().sort().join(",") === b.slice().sort().join(",");
  }
  function isMulti(q) { return q.answer.length > 1; }
  function changedHtml(q) {
    if (!q.changed) return "";
    return '<div class="changed"><span class="tag hy">Rule changed recently</span> ' + esc(q.changed) +
      ". ACAMS study materials (July 2025) may still reflect the previous rule.</div>";
  }
  function sourcesHtml(q) {
    var list = Array.isArray(q.source) ? q.source.filter(function (s) { return s && /^https:\/\//.test(s.url); }) : [];
    if (!list.length) return "";
    return '<div class="sources">Source' + (list.length > 1 ? "s" : "") + ": " + list.map(function (s) {
      return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label || s.url) + "</a>";
    }).join(" · ") + "</div>";
  }
  function isCorrect(item) { return sameSet(item.selected, BY_ID[item.qid].answer); }
  function isAnswered(item) {
    var q = BY_ID[item.qid];
    return isMulti(q) ? item.selected.length === q.answer.length : item.selected.length > 0;
  }
  function makeItem(q) { return { qid: q.id, order: shuffle(range(q.options.length)), selected: [], submitted: false, flagged: false }; }
  function msToMidnight() { var n = new Date(), m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1); return m - n; }
  function addViewTimer(h) { viewTimers.push(h); return h; }
  function clearViewTimers() { viewTimers.forEach(function (h) { clearInterval(h); clearTimeout(h); }); viewTimers = []; }
  function $(id) { return document.getElementById(id); }
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }

  // ---------- Question selection ----------
  function ranked(list, stats) {
    return shuffle(list).sort(function (a, b) {
      var sa = stats[a.id] ? stats[a.id].seen : 0;
      var sb = stats[b.id] ? stats[b.id].seen : 0;
      return sa - sb;
    });
  }
  function filteredPool(opts) {
    var stats = load(KEYS.stats, {});
    var pool = BANK.slice();
    if (opts.ids) {
      var set = {};
      opts.ids.forEach(function (id) { set[id] = 1; });
      pool = BANK.filter(function (q) { return set[q.id]; });
    }
    if (opts.domain && opts.domain !== "all") pool = pool.filter(function (q) { return String(q.domain) === String(opts.domain); });
    if (opts.source === "hy") pool = pool.filter(function (q) { return q.hy; });
    if (opts.source === "hard") pool = pool.filter(function (q) { return q.difficulty === "hard"; });
    if (opts.source === "mistakes") pool = pool.filter(function (q) { var s = stats[q.id]; return s && s.wrong > 0 && s.last === false; });
    return pool;
  }
  function pickQuestions(mode, opts) {
    var stats = load(KEYS.stats, {});
    if (mode === "review" || opts.source === "review") {
      var due = PG ? PG.dueIds(BY_ID) : [];
      return shuffle(due.slice(0, Math.min(MODES.review.n, opts.limit || Infinity)).map(function (id) { return BY_ID[id]; }));
    }
    if (mode === "daily") return PG.dailyIds(BANK).map(function (id) { return BY_ID[id]; }).filter(Boolean);
    var pool = filteredPool(opts);
    if (mode === "survival") return ranked(pool, stats);
    var n = Math.min(opts.count || (MODES[mode] || MODES.practice).n, opts.limit || Infinity, pool.length);
    var chosen = [];
    // Practice: up to a quarter of the set are missed questions due again, so mistakes keep coming back until learnt.
    var dueSet = {};
    if (mode === "practice" && PG && !opts.ids && !opts.diag && opts.source !== "mistakes") {
      var inPool = {};
      pool.forEach(function (q) { inPool[q.id] = 1; });
      PG.dueIds(BY_ID).filter(function (id) { return inPool[id] && stats[id] && stats[id].last === false; })
        .slice(0, Math.floor(n / 4)).forEach(function (id) { dueSet[id] = 1; chosen.push(BY_ID[id]); });
      pool = pool.filter(function (q) { return !dueSet[q.id]; });
    }
    var target = n;
    n -= chosen.length;
    if ((!opts.domain || opts.domain === "all") && opts.source !== "mistakes" && (!opts.ids || opts.diag)) {
      // Mirror the exam blueprint weights (30/20/30/20).
      var quotas = {}, assigned = 0;
      Object.keys(DOMAINS).forEach(function (d) { quotas[d] = Math.round(n * DOMAINS[d].weight); assigned += quotas[d]; });
      quotas[1] += n - assigned;
      Object.keys(DOMAINS).forEach(function (d) {
        chosen = chosen.concat(ranked(pool.filter(function (q) { return String(q.domain) === d; }), stats).slice(0, quotas[d]));
      });
      if (chosen.length < target) {
        var ids = chosen.map(function (q) { return q.id; });
        chosen = chosen.concat(ranked(pool.filter(function (q) { return ids.indexOf(q.id) < 0; }), stats).slice(0, target - chosen.length));
      }
    } else {
      chosen = chosen.concat(ranked(pool, stats).slice(0, n));
    }
    var out = shuffle(chosen);
    out.due = dueSet;
    return out;
  }

  // Asks before a new test replaces one in progress. Returns false if the user says no.
  function confirmDiscard(cur, action) {
    if (!cur) return true;
    var msg = action + " will discard your " + modeLabel(cur.mode).toLowerCase() + " in progress.";
    if (cur.mode === "daily" && !cur.replay) msg += " Today's first attempt will then not count on the leaderboard.";
    return confirm(msg + " Continue?");
  }
  function startSession(mode, opts) {
    opts = opts || {};
    // Free plan: some modes are Premium, Practice is capped at the questions left today.
    var free = PL && !PL.premium() && !opts.retry && !opts.diag;   // replaying mistakes and the plan diagnostic are free
    if (free) {
      var gate = PL.check(mode, opts);
      if (gate !== "ok") { PL.paywall(gate); return false; }
      if (mode !== "daily" && mode !== "exam") opts.limit = Math.min(PL.freeLeft(), PL.FREE_DAILY);
    }
    var qs = pickQuestions(mode, opts);
    // A filter with nothing in it (no mistakes yet, etc.) must never block training: fall back to all questions.
    if (!qs.length && mode !== "review" && mode !== "daily" && !opts.ids && (opts.source !== "fresh" || (opts.domain && opts.domain !== "all"))) {
      var why = opts.source === "mistakes" ? "No mistakes to review right now" : "Nothing left for this filter";
      opts = { domain: "all", source: "fresh" };
      qs = pickQuestions(mode, opts);
      if (qs.length) setTimeout(function () { toast('<span class="ti">💡</span><div><b>' + why + '</b><span>Here is a mixed set from the whole bank instead.</span></div>'); }, 400);
    }
    if (!qs.length) {
      if (mode === "review") return startSession("practice", { domain: "all", source: "fresh" });
      alert(mode === "review" ? "Nothing due for review right now."
        : opts.source === "mistakes" ? "No missed questions yet for this selection. Take a test first!"
        : "No questions available for this selection.");
      return false;
    }
    var cur = session && !session.finished ? session : restoreSession();
    if (!confirmDiscard(cur, "Starting a new test")) return false;
    stopTimer(); stopQTimer();
    var m = MODES[mode] || MODES.practice;
    session = {
      mode: mode,
      opts: opts,
      free: !!(free && mode !== "daily" && mode !== "exam"),   // counts against the 15 free questions
      startedAt: Date.now(),
      endsAt: mode === "exam" ? Date.now() + qs.length * SECONDS_PER_QUESTION * 1000 : null,
      current: 0,
      finished: false,
      xp: 0,
      combo: 0,
      bestCombo: 0,
      badgesAtStart: PG ? Object.keys(PG.gam().badges) : [],
      items: []
    };
    if (mode === "survival") {
      session.lives = m.lives;
      session.pool = qs.slice(1).map(function (q) { return q.id; });
      session.items.push(makeItem(qs[0]));
    } else {
      session.items = qs.map(function (q) { var it = makeItem(q); if (qs.due && qs.due[q.id]) it.due = true; return it; });
    }
    if (mode === "daily") {
      session.dailyKey = PG.dayKey();
      // The first attempt is used as soon as it starts: abandoning it and starting again is a replay.
      session.replay = PG.dailyAttemptUsed(session.dailyKey);
      if (!session.replay) PG.startDaily(session.dailyKey);
    }
    if (free && mode === "exam") PL.useExamTrial();
    lastRendered = -1;
    pendingFocus = null;
    persist();
    FX.play("start");
    if (location.hash !== "#/play") location.hash = "/play"; else renderQuiz();
    return true;
  }

  function persist() {
    if (session && !session.finished) save(KEYS.session, session);
    else remove(KEYS.session);
  }
  function restoreSession() {
    var s = load(KEYS.session, null);
    if (!s || s.finished || !Array.isArray(s.items) || !s.items.length) return null;
    if (!s.items.every(function (it) { return BY_ID[it.qid]; })) return null;
    if (s.mode === "daily" && s.dailyKey !== PG.dayKey()) return null; // yesterday's challenge expired
    if (s.mode === "survival") s.pool = (s.pool || []).filter(function (id) { return BY_ID[id]; });
    return s;
  }

  // ---------- Topbar / timers ----------
  function setTopbar(html) { topbarRight.innerHTML = html || ""; }
  function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; } }
  function stopQTimer() { if (qTimer) { clearInterval(qTimer); qTimer = null; } }
  function startTimer() { stopTimer(); tick(); timerHandle = setInterval(tick, 1000); }
  function tick() {
    var el = $("timer");
    if (!session || session.mode !== "exam" || session.finished) { stopTimer(); return; }
    var left = (session.endsAt - Date.now()) / 1000;
    if (el) { el.textContent = "⏱ " + fmtTime(left); el.classList.toggle("low", left < 300); }
    if (left <= 0) { stopTimer(); alert("Time is up! Your exam will now be submitted."); finish(); }
  }
  function premiumChip() {
    if (!PL || PL.premium()) return "";
    var left = PL.freeLeft();
    return '<a class="chip energy-chip' + (left ? "" : " empty") + '" href="#/premium" title="Free plan: ' + left + " of " + PL.FREE_DAILY + ' free questions left today">⚡ ' + left + '<span class="hide-sm"> left today</span></a>';
  }
  function homeChips() {
    if (!PG) return premiumChip();
    var g = PG.gam();
    if (!g.xp) return premiumChip();
    var st = PG.streak(g);
    return premiumChip() + '<span class="chip flame' + (st.activeToday ? " lit" : "") + '" title="Day streak">🔥 ' + st.current + "</span>" +
      (st.freezes ? '<span class="chip hide-sm" title="Streak freezes">❄️ ' + st.freezes + "</span>" : "") +
      '<span class="chip hide-sm" title="Level">Lv ' + PG.levelFor(g.xp).level + "</span>";
  }

  // ---------- Sound toggle ----------
  var SND = {
    on: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5h3l4-3.5v12l-4-3.5H3z" fill="currentColor"/><path d="M13.2 7.2a4 4 0 010 5.6M15.5 5a7 7 0 010 10"/></svg>',
    off: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5h3l4-3.5v12l-4-3.5H3z" fill="currentColor"/><path d="M13.5 7.5l4 5M17.5 7.5l-4 5"/></svg>'
  };
  function renderSoundBtn() {
    var b = $("soundBtn");
    if (!b) return;
    var m = FX.isMuted ? FX.isMuted() : true;
    b.innerHTML = m ? SND.off : SND.on;
    b.setAttribute("aria-label", m ? "Turn sound effects on" : "Turn sound effects off");
    b.setAttribute("aria-pressed", String(!m));
    b.title = m ? "Sound effects off" : "Sound effects on";
  }
  if ($("soundBtn")) $("soundBtn").onclick = function () { FX.setMuted(!FX.isMuted()); renderSoundBtn(); };

  // ---------- Router ----------
  function navigate(path) {
    var h = "#" + path;
    if (location.hash === h) route(); else location.hash = path;
  }
  function currentPath() { return (location.hash || "#/").replace(/^#/, "") || "/"; }
  function route() {
    var path = currentPath();
    var parts = path.split("/").filter(Boolean);
    var name = (parts[0] || "home").split("?")[0];
    clearViewTimers();
    if (name !== "play") {
      // Leaving the quiz: stop its timers. An unfinished test stays resumable from Home.
      // The mock exam clock and the Lightning hourglass keep running in real time, as on a reload.
      stopTimer(); stopQTimer();
      if (session && !session.finished) persist();
      session = null;
    }
    each(".navlink", function (a) {
      var r = a.getAttribute("data-route");
      var active = r === name || (r === "learn" && (name === "cards" || name === "sprint"));
      if (active) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (name === "play") {
      if (!session) session = restoreSession();
      if (session && session.finished) return renderResults();
      if (session) return renderQuiz();
      return location.replace("#/"); // nothing to show: don't leave a #/play entry that traps the Back button
    }
    if (routes[name]) return routes[name](parts.slice(1));
    return renderHome();
  }
  window.addEventListener("hashchange", route);

  // ---------- Home ----------
  function seg(name, items, current) {
    return '<div class="seg" role="group" data-seg="' + name + '">' + items.map(function (it) {
      return '<button type="button" data-val="' + it[0] + '" aria-pressed="' + (String(it[0]) === String(current)) + '">' +
        esc(it[1]) + (it[2] != null ? '<span class="count">' + it[2] + "</span>" : "") + "</button>";
    }).join("") + "</div>";
  }
  function countDomain(d) { return BANK.filter(function (q) { return String(q.domain) === String(d); }).length; }

  function questsHtml(quests) {
    var done = quests.filter(function (q) { return q.done; }).length;
    return '<div class="quests">' + quests.map(function (q) {
      var p = pct(q.progress, q.target);
      return '<div class="quest' + (q.done ? " done" : "") + '"><span class="qi">' + (q.done ? "✅" : q.icon) + '</span><div class="qb"><div class="qt">' + esc(q.text) +
        '<span class="qxp">+' + q.xp + ' XP</span></div><div class="qbar"><div style="width:' + p + '%"></div></div></div><span class="qn">' + q.progress + "/" + q.target + "</span></div>";
    }).join("") + '<div class="chest' + (done === quests.length ? " open" : "") + '"><span>' + (done === quests.length ? "🎁" : "🔒") + "</span>" +
      (done === quests.length ? "Bonus chest opened · +" + PG.XP.chest + " XP" : "Complete all 3 to open the bonus chest (+" + PG.XP.chest + " XP)") + "</div></div>";
  }

  function todayPanel() {
    if (!PG) return "";
    var g = PG.gam(), st = PG.streak(g), today = g.days[PG.dayKey()] || 0;
    var due = PG.dueIds(BY_ID).length;
    var quests = PG.todayQuests({ due: due });
    var daily = PG.dailyResult();
    var started = !daily && PG.dailyAttemptUsed();
    var res = started ? restoreSession() : null;
    var resumable = !!(res && res.mode === "daily" && !res.replay);
    var r = 26, c = 2 * Math.PI * r, k = Math.min(1, today / g.goal);
    return '<section class="today-wrap"><div class="today-grid">' +
      // Streak
      '<div class="tcard streak-card' + (st.activeToday ? " lit" : "") + '"><div class="dlabel">Streak</div>' +
        '<div class="flame-big" aria-hidden="true">🔥</div><div class="dbig"><span data-count="' + st.current + '">' + st.current + "</span> day" + (st.current === 1 ? "" : "s") + "</div>" +
        '<div class="dsub">' + (st.activeToday ? "Streak safe for today. Keep training as long as you like!" : st.current ? "Practise today to keep your streak." : "Answer one question to light it.") + "</div>" +
        '<div class="freeze-row" title="A streak freeze saves your streak if you miss a day. Earn one every 7 days (max 2).">' +
        [0, 1].map(function (i) { return '<span class="fz' + (i < st.freezes ? " on" : "") + '">❄️</span>'; }).join("") + '<span class="dsub">Streak freezes</span></div></div>' +
      // Goal + quests
      '<div class="tcard quests-card"><div class="qhead" style="margin:0 0 10px"><div class="dlabel" style="margin:0">Today\'s quests</div>' +
        '<div class="mini-goal" title="Daily goal: ' + g.goal + ' answers"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="' + r + '" class="mg-track"/><circle cx="32" cy="32" r="' + r + '" class="mg-val" stroke-dasharray="' + (c * k) + " " + c + '" transform="rotate(-90 32 32)"/></svg><span>' + today + "/" + g.goal + "</span></div></div>" +
        questsHtml(quests) + "</div>" +
      // Daily challenge
      '<div class="tcard daily-card"><div class="dlabel">Daily challenge</div><div class="daily-icon" aria-hidden="true">📅</div>' +
        (daily
          ? '<div class="dbig">' + daily.score + "/" + daily.total + '</div><div class="dsub">Done in ' + fmtTime(daily.ms / 1000) + '. Same 10 questions for everyone today.</div><div class="countdown">Next challenge in <b id="dailyCountdown">' + fmtTime(msToMidnight() / 1000) + "</b></div>" +
            '<div class="tc-actions"><button class="btn sm" data-mode="daily">Replay</button><a class="link-btn small" href="#/ranks">Leaderboard</a></div>'
          : resumable
          ? '<div class="dbig">In progress</div><div class="dsub">' + res.items.filter(function (it) { return it.submitted; }).length + " of " + res.items.length + ' answered. Finish it to post your score.</div><div class="countdown">Ends in <b id="dailyCountdown">' + fmtTime(msToMidnight() / 1000) + "</b></div>" +
            '<div class="tc-actions"><button class="btn primary" id="dailyResume">Resume today\'s challenge</button></div>'
          : started
          ? '<div class="dbig">Not finished</div><div class="dsub">Today\'s first attempt was left unfinished, so it can\'t be ranked. You can still replay it for practice.</div><div class="countdown">Next challenge in <b id="dailyCountdown">' + fmtTime(msToMidnight() / 1000) + "</b></div>" +
            '<div class="tc-actions"><button class="btn sm" data-mode="daily">Replay</button></div>'
          : '<div class="dbig">10 questions</div><div class="dsub">The same set for everyone today. Your first attempt counts on the leaderboard.</div><div class="countdown">Ends in <b id="dailyCountdown">' + fmtTime(msToMidnight() / 1000) + "</b></div>" +
            '<div class="tc-actions"><button class="btn primary" data-mode="daily">Play today\'s challenge</button></div>') +
      "</div></div></section>";
  }

  // Themes = course modules and the bank questions they teach. Practice on a theme never runs out:
  // unseen questions come first, then the least seen.
  function themes() {
    var stats = load(KEYS.stats, {});
    return (window.CAMS_COURSE || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); }).map(function (m) {
      var ids = (m.questionIds || []).filter(function (id) { return BY_ID[id]; });
      var seen = 0, n = 0, ok = 0;
      ids.forEach(function (id) { var st = stats[id]; if (st) { seen++; n += st.seen; ok += st.right; } });
      return { id: m.id, icon: m.icon, title: m.title, ids: ids, seen: seen, acc: n ? Math.round(ok / n * 100) : null };
    }).filter(function (t) { return t.ids.length >= 5; });
  }
  function themeChips(list) {
    return '<div class="theme-grid">' + list.map(function (t) {
      return '<button type="button" class="theme-chip" data-theme="' + t.id + '"><span class="th-i" aria-hidden="true">' + t.icon + '</span><span class="th-b"><b>' + esc(t.title) + "</b><span>" +
        t.ids.length + " questions · " + t.seen + " seen" + (t.acc != null ? " · " + t.acc + "%" : "") + '</span></span><span class="th-go" aria-hidden="true">›</span></button>';
    }).join("") + "</div>";
  }
  function bindThemes(root) {
    var all = themes();
    Array.prototype.forEach.call((root || document).querySelectorAll("[data-theme]"), function (b) {
      b.onclick = function () {
        var t = all.filter(function (x) { return x.id === b.getAttribute("data-theme"); })[0];
        if (t) startSession("practice", { domain: "all", source: "topic", ids: t.ids, label: t.title });
      };
    });
  }

  function modeTiles(due, recs) {
    var n = window.CAMS_COURSE ? window.CAMS_COURSE.reduce(function (s, m) { return s + (m.cards || []).length; }, 0) : 0;
    var stats = load(KEYS.stats, {});
    var missedOpen = Object.keys(stats).filter(function (k) { return BY_ID[k] && stats[k].wrong > 0 && stats[k].last === false; }).length;
    var tiles = [
      { mode: "practice", icon: "💡", title: "Practice", sub: "30 questions · answer and explanation right away", cls: "" },
      { mode: "exam", icon: "⏱", title: "Mock exam", sub: "30 questions · 53-min timer · results at the end", cls: "dark", rec: recs.exam != null ? "Best " + recs.exam + "%" : "" },
      { mode: "review", icon: "🔁", title: "Smart review", sub: due ? due + " question" + (due > 1 ? "s" : "") + " due now" : "Nothing due right now", cls: due ? "hot" : "", disabled: !due },
      { href: "#/mistakes", icon: "🎯", title: "Most missed", sub: missedOpen ? missedOpen + " question" + (missedOpen > 1 ? "s" : "") + " you keep missing · train on them" : "Your weak spots, ranked · nothing yet", cls: missedOpen ? "hot" : "" },
      { mode: "lightning", icon: "⏳", title: "Lightning", sub: "15 questions · 30 seconds each · speed bonus", cls: "", rec: recs.lightning != null ? "Best " + recs.lightning + "/15" : "" },
      { mode: "survival", icon: "❤️", title: "Survival", sub: "3 lives. How far can you go?", cls: "", rec: recs.survival != null ? "Best " + recs.survival : "" },
      { mode: "daily", icon: "📅", title: "Daily challenge", sub: "Same 10 questions for everyone today", cls: "", rec: recs.daily != null ? "Best " + recs.daily + "/10" : "" },
      { href: "#/cards/all", icon: "🃏", title: "Flashcards", sub: n ? n + " cards · flip, recall, repeat" : "Coming with the course", cls: "", disabled: !n },
      { href: "#/sprint", icon: "🔢", title: "Numbers sprint", sub: "60 seconds · thresholds, deadlines, percentages", cls: "", rec: recs.sprint != null ? "Best " + recs.sprint : "", disabled: !n }
    ];
    var free = PL && !PL.premium();
    if (free) tiles.forEach(function (t) {
      if (t.mode === "exam") t.lock = PL.examTrialUsed() ? "Premium" : "1 free";
    });
    return '<div class="modes-grid">' + tiles.map(function (t, i) {
      var attr = t.href ? 'href="' + t.href + '"' : 'href="#" data-mode="' + t.mode + '"';
      return "<a " + attr + ' class="mode-tile ' + t.cls + (t.disabled ? " disabled" : "") + '" style="animation-delay:' + (i * 50) + 'ms"' + (t.disabled ? ' aria-disabled="true"' : "") + ">" +
        '<span class="mt-icon" aria-hidden="true">' + t.icon + '</span><span class="mt-title">' + t.title + '</span><span class="mt-sub">' + t.sub + "</span>" +
        (t.lock ? '<span class="mt-lock">' + (t.lock === "Premium" ? "👑 Premium" : "✨ " + t.lock) + "</span>" : t.rec ? '<span class="mt-rec">🏆 ' + t.rec + "</span>" : "") + '<span class="mt-go" aria-hidden="true">›</span></a>';
    }).join("") + "</div>";
  }

  function renderHome() {
    stopTimer(); stopQTimer(); clearViewTimers();
    if (session && session.finished) session = null;
    setTopbar(homeChips());
    var prefs = load(KEYS.prefs, { domain: "all", source: "fresh" });
    var resume = restoreSession();
    var stats = load(KEYS.stats, {});
    var mistakes = Object.keys(stats).filter(function (k) { return BY_ID[k] && stats[k].last === false; }).length;
    var hyCount = BANK.filter(function (q) { return q.hy; }).length;
    var hardCount = BANK.filter(function (q) { return q.difficulty === "hard"; }).length;
    var g = PG ? PG.gam() : { xp: 0, records: {} };
    var due = PG ? PG.dueIds(BY_ID).length : 0;
    var returning = g.xp > 0;
    var prefs0 = { domain: prefs.domain || "all", source: prefs.source || "fresh" };
    setView("home");

    var html = "";
    if (resume) {
      var answered = resume.items.filter(function (it) { return instant(resume) ? it.submitted : isAnswered(it); }).length;
      html += '<div style="padding:0 16px"><div class="banner fade-in"><div><b>' + esc(MODES[resume.mode].icon + " " + modeLabel(resume.mode)) + " in progress.</b> " +
        answered + (resume.mode === "survival" ? " answered" : " of " + resume.items.length + " answered") +
        '.</div><div style="display:flex;gap:8px"><button class="btn sm" id="discard">Discard</button>' +
        '<button class="btn primary sm" id="resume">Resume</button></div></div></div>';
    }

    // Hero
    html += '<section class="hero' + (returning ? " compact" : "") + '">' +
      '<div class="kicker fade-in">' + (returning ? "Welcome back" + (window.CAMSAccount && window.CAMSAccount.user() ? ", " + esc(window.CAMSAccount.name()) : "") : "CAMS Exam Trainer") + "</div>" +
      '<h1 class="fade-in" style="animation-delay:.08s">Pass CAMS.<br><span class="grad-text">With confidence.</span></h1>' +
      '<p class="lede fade-in" style="animation-delay:.16s">' + BANK.length + ' exam-style questions, a full course and daily challenges. Every answer verified at the source.</p>' +
      '<div class="ctas fade-in" style="animation-delay:.24s">' +
      (due ? '<button class="btn primary lg" data-mode="review">Review ' + Math.min(20, due) + " due questions</button>" : '<button class="btn primary lg" data-mode="practice">Start practising</button>') +
      '<a class="link-btn" href="#/learn">Open the course</a></div>' +
      (returning ? "" : videoHtml()) + "</section>";

    if (PL && !PL.premium() && !PL.freeLeft()) {
      var left = 0;
      html += '<div class="free-bar fade-in"><div><b>' + "Daily dose done: " + PL.FREE_DAILY + "/" + PL.FREE_DAILY + " ✓" + '</b><span>' +
        "Your free questions come back tomorrow. The daily challenge is still open, or keep going now with Premium." +
        '</span></div><a class="btn primary sm" href="#/premium">👑 See Premium</a></div>';
    }
    if (window.CAMSStudy) html += window.CAMSStudy.homeCard();
    if (returning) html += todayPanel();

    // Modes
    html += '<section class="section alt"><div class="inner">' +
      '<h2 class="headline reveal">Pick your game.</h2>' +
      '<p class="subhead reveal">Six ways to test yourself, your most-missed questions, plus flashcards and a numbers sprint to lock in the facts.</p>' +
      '<div class="settings reveal">' +
      '<div class="seg-group"><label>Domain</label>' + seg("domain", [["all", "All", null], ["1", "D1", countDomain(1)], ["2", "D2", countDomain(2)], ["3", "D3", countDomain(3)], ["4", "D4", countDomain(4)]], prefs0.domain) + "</div>" +
      '<div class="seg-group"><label>Questions</label>' + seg("source", [["fresh", "Unseen first", null], ["hy", "Most tested", hyCount], ["hard", "Hard only", hardCount], ["mistakes", "My mistakes", mistakes]], prefs0.source) + "</div>" +
      '</div><p class="small muted reveal" style="text-align:center;margin:10px 0 0">Filters apply to Practice, Mock exam, Lightning and Survival.</p>' +
      modeTiles(due, g.records || {}) + "</div></section>";

    var th = themes();
    if (th.length) html += '<section class="section"><div class="inner">' +
      '<h2 class="headline reveal">Train by theme.</h2>' +
      '<p class="subhead reveal">Unlimited: start as many sessions as you like. Unseen questions come first, then the ones you have seen least.</p>' +
      '<div class="reveal">' + themeChips(th) + "</div></div></section>";

    if (!returning) html += todayPanel();

    // Exam facts
    html += '<section class="section"><div class="inner">' +
      '<h2 class="headline reveal">Built like the real exam.</h2>' +
      '<p class="subhead reveal">Same blueprint, same pace. Tests are weighted across the four CAMS 7th edition domains, and the pass line is set at 75 of 120.</p>' +
      '<div class="stats reveal">' +
      '<div class="stat"><b>120</b><span>questions on exam day</span></div>' +
      '<div class="stat"><b>3h30</b><span>about 1 min 45 s each</span></div>' +
      '<div class="stat"><b>75</b><span>passing score · aim for 80%+</span></div>' +
      '<div class="stat"><b>4</b><span>domains, weighted like the exam</span></div>' +
      "</div>" + (returning ? '<div class="video-small reveal">' + videoHtml() + "</div>" : "") +
      '<div style="text-align:center;margin-top:40px" class="reveal"><a class="btn" href="#/progress">See my progress and charts</a></div>' +
      '<p class="small muted reveal" style="text-align:center;max-width:680px;margin:40px auto 0">These are original exam-style questions, not real ACAMS items. Every answer was checked against primary sources (FATF, FinCEN, OFAC, eCFR, Federal Reserve, Wolfsberg, EU and UK law) as of September 2026, and each explanation links to its source.</p>' +
      "</div></section>";

    app.innerHTML = html;

    var current = { domain: prefs0.domain, source: prefs0.source };
    function opts() { save(KEYS.prefs, current); return { domain: current.domain, source: current.source }; }
    each("[data-seg]", function (group) {
      var name = group.getAttribute("data-seg");
      Array.prototype.forEach.call(group.querySelectorAll("button"), function (b) {
        b.onclick = function () {
          current[name] = b.getAttribute("data-val");
          Array.prototype.forEach.call(group.querySelectorAll("button"), function (x) { x.setAttribute("aria-pressed", String(x === b)); });
          opts();
        };
      });
    });
    each("[data-mode]", function (b) {
      b.onclick = function (e) {
        e.preventDefault();
        if (b.classList.contains("disabled")) return;
        var mode = b.getAttribute("data-mode");
        var o = mode === "practice" || mode === "exam" || mode === "lightning" || mode === "survival" ? opts() : { domain: "all" };
        startSession(mode, o);
      };
    });
    each(".mode-tile.disabled[href^='#/']", function (a) { a.onclick = function (e) { e.preventDefault(); }; });
    bindThemes(app);
    if (resume) {
      $("resume").onclick = function () { session = resume; navigate("/play"); };
      $("discard").onclick = function () {
        if (resume.mode === "daily" && !resume.replay && !confirm("Discard today's challenge? Your first attempt will then not count on the leaderboard.")) return;
        remove(KEYS.session); renderHome();
      };
    }
    var dr = $("dailyResume");
    if (dr) dr.onclick = function () { session = restoreSession(); navigate("/play"); };
    var cd = $("dailyCountdown"), midnight = false;
    if (cd) addViewTimer(setInterval(function () {
      var ms = msToMidnight();
      cd.textContent = fmtTime(ms / 1000);
      if (ms < 1500 && !midnight) {
        midnight = true;
        addViewTimer(setTimeout(function () { if (currentPath() === "/") renderHome(); }, 1600));
      }
    }, 1000));
    setupVideo();
    setupReveal();
    FX.countUp(app);
    window.scrollTo(0, 0);
  }

  function videoHtml() {
    return '<div class="video-frame fade-in" style="animation-delay:.32s">' +
      '<video id="heroVideo" src="assets/video/cams-trainer.mp4" poster="assets/video/poster.jpg" autoplay muted loop playsinline preload="metadata" aria-label="15-second overview of CAMS Exam Trainer"></video>' +
      '<button class="video-ctrl play" id="vidPlay" aria-label="Pause video"></button>' +
      '<button class="video-ctrl" id="vidSound" aria-label="Turn sound on"></button></div>';
  }

  var ICONS = {
    play: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M6 4.2v11.6c0 .6.7 1 1.2.7l9.3-5.8c.5-.3.5-1.1 0-1.4L7.2 3.5C6.7 3.2 6 3.6 6 4.2z"/></svg>',
    pause: '<svg viewBox="0 0 20 20" fill="currentColor"><rect x="5" y="4" width="3.4" height="12" rx="1"/><rect x="11.6" y="4" width="3.4" height="12" rx="1"/></svg>'
  };
  function setupVideo() {
    var v = $("heroVideo");
    if (!v) return;
    var play = $("vidPlay"), snd = $("vidSound");
    if (FX.reduced) { v.removeAttribute("autoplay"); v.pause(); }
    function sync() {
      play.innerHTML = v.paused ? ICONS.play : ICONS.pause;
      play.setAttribute("aria-label", v.paused ? "Play video" : "Pause video");
      snd.innerHTML = v.muted ? SND.off : SND.on;
      snd.setAttribute("aria-label", v.muted ? "Turn sound on" : "Turn sound off");
    }
    play.onclick = function () { if (v.paused) v.play(); else v.pause(); };
    snd.onclick = function () { v.muted = !v.muted; if (!v.muted) { v.currentTime = 0; v.play(); } sync(); };
    v.addEventListener("play", sync);
    v.addEventListener("pause", sync);
    v.addEventListener("volumechange", sync);
    sync();
  }
  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { Array.prototype.forEach.call(els, function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    Array.prototype.forEach.call(els, function (e) { io.observe(e); });
  }
  function revealAll() { each(".reveal", function (e) { e.classList.add("in"); }); }

  // ---------- Progress page ----------
  function goalRingSmall(n, goal) {
    var r = 44, c = 2 * Math.PI * r, k = Math.min(1, goal ? n / goal : 0);
    return '<svg class="goal-ring" viewBox="0 0 110 110"><circle cx="55" cy="55" r="' + r + '" fill="none" stroke="rgba(118,118,128,.16)" stroke-width="11"/>' +
      '<circle cx="55" cy="55" r="' + r + '" fill="none" stroke="url(#gr)" stroke-width="11" stroke-linecap="round" stroke-dasharray="' + (c * k) + " " + c + '" transform="rotate(-90 55 55)"/>' +
      '<defs><linearGradient id="gr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a84ff"/><stop offset="1" stop-color="#bf5af2"/></linearGradient></defs>' +
      '<text x="55" y="53" text-anchor="middle" class="gr-n">' + n + '</text><text x="55" y="72" text-anchor="middle" class="gr-d">of ' + goal + "</text></svg>";
  }
  function heatmapHtml() {
    var h = PG.heat(20), goal = h.goal;
    var cols = [], col = [];
    h.cells.forEach(function (c, i) { if (i > 0 && c.dow === 0) { cols.push(col); col = []; } col.push(c); });
    cols.push(col);
    function lvl(c) { var n = c.n; return c.frozen ? "fr" : !n ? (c.active ? 1 : 0) : n < goal / 2 ? 1 : n < goal ? 2 : n < goal * 2 ? 3 : 4; }
    return '<div class="heatmap" role="img" aria-label="Daily activity, last 20 weeks">' + cols.map(function (cl, ci) {
      return '<div class="hcol">' + (ci === 0 ? new Array(cl[0].dow + 1).join('<i class="h-empty"></i>') : "") + cl.map(function (c) {
        return '<i class="l' + lvl(c) + '" title="' + c.key + ": " + (c.frozen ? "streak freeze" : c.n + " answers") + '"></i>';
      }).join("") + "</div>";
    }).join("") + "</div>" +
      '<div class="hlegend">Less <i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i> More · <i class="lfr"></i> streak freeze</div>';
  }

  function renderProgress() {
    if (!PG) return renderHome();
    setView("page");
    setTopbar(homeChips());
    var g = PG.gam(), st = PG.streak(g), lv = PG.levelFor(g.xp);
    var history = load(KEYS.history, []);
    var rd = PG.readiness(BANK);
    var mastered = PG.masteredCount(BY_ID);
    var weekXp = PG.weekXp(g);
    var weak = PG.weakTopics(BANK, 6), strong = PG.strongTopics(BANK, 5);
    var acc = PG.domainAccuracy(BANK);
    var today = g.days[PG.dayKey()] || 0;

    var html = '<div class="page-head fade-in"><h1>Your progress.</h1><p class="muted">Level ' + lv.level + " · " + esc(PG.titleFor(lv.level)) + " · " + g.xp.toLocaleString() + " XP</p></div>";

    // Free plan: the most useful analytics are shown blurred with an unlock button.
    var lockFrom = 0;
    function lockSince(label) {
      if (PL && !PL.premium()) html = html.slice(0, lockFrom) + PL.lockOverlay(html.slice(lockFrom), "stats", label);
    }

    // Readiness hero
    lockFrom = html.length;
    html += '<div class="card readiness fade-in"><div class="rd-gauge">' + CH.gauge(rd.score, { label: "Exam readiness", mark: 62.5 }) +
      '<div class="rd-num"><b data-count="' + rd.score + '">' + rd.score + "</b><span>/100</span></div></div>" +
      '<div class="rd-body"><div class="dlabel">Exam readiness</div><div class="rd-verdict v-' + rd.verdict.toLowerCase().replace(/\s+/g, "-") + '">' + esc(rd.verdict) + "</div>" +
      (rd.predicted != null
        ? '<p class="muted">Predicted score on the real exam: about <b>' + rd.predicted + "/120</b> (pass line 75). Confidence: " + rd.confidence + " (" + rd.answers + " answers so far).</p>"
        : '<p class="muted">Answer a few questions and your readiness score will appear here.</p>') +
      '<div class="rd-parts">' + [["Accuracy (exam-weighted)", rd.accuracy], ["Coverage of the bank", rd.coverage], ["Mastered questions", rd.mastery], ["Mock exam average", rd.examAvg]].map(function (p) {
        var v = p[1] == null ? null : Math.round(p[1] * 100);
        return '<div class="rd-part"><div class="rdp-h"><span>' + p[0] + "</span><b>" + (v == null ? "–" : v + "%") + '</b></div><div class="xpbar"><div style="width:' + (v || 0) + '%"></div></div></div>';
      }).join("") + '</div><p class="small muted" style="margin:12px 0 0">Readiness blends accuracy by domain (weighted 30/20/30/20), how much of the bank you have covered, mastered questions and your last 3 mock exams. Aim for 80+ before booking.</p></div></div>';

    lockSince("Your exam readiness and predicted score");
    if (window.CAMSCert) html += window.CAMSCert.cardHtml();   // the certificate goal is visible to everyone

    // KPI row
    html += '<div class="dash fade-in">' +
      '<div class="dtile"><div class="dlabel">Streak</div><div class="dbig">🔥 <span data-count="' + st.current + '">' + st.current + '</span></div><div class="dsub">best ' + st.best + " · ❄️ " + st.freezes + " freeze" + (st.freezes === 1 ? "" : "s") + "</div></div>" +
      '<div class="dtile goal"><div class="dlabel">Daily goal</div>' + goalRingSmall(today, g.goal) +
        '<div class="seg small-seg" role="group" aria-label="Daily goal">' + PG.GOALS.map(function (n) { return '<button type="button" data-goal="' + n + '" aria-pressed="' + (n === g.goal) + '">' + n + "</button>"; }).join("") + "</div></div>" +
      '<div class="dtile"><div class="dlabel">This week</div><div class="dbig"><span data-count="' + weekXp + '">' + weekXp + '</span><small> XP</small></div><div class="xpbar"><div style="width:' + lv.pct + '%"></div></div><div class="dsub">' + (lv.next - lv.xp) + " XP to level " + (lv.level + 1) + "</div></div>" +
      '<div class="dtile"><div class="dlabel">Mastered</div><div class="dbig"><span data-count="' + mastered + '">' + mastered + "</span><small>/" + BANK.length + '</small></div><div class="xpbar"><div style="width:' + pct(mastered, BANK.length) + '%"></div></div><div class="dsub">right several times, spaced out</div></div>' +
      "</div>";

    // Charts
    lockFrom = html.length;
    html += '<div class="chart-grid">' +
      '<div class="card chart-card" id="chTrend"></div>' +
      '<div class="card chart-card" id="chDays"></div>' +
      '<div class="card chart-card" id="chDomains"></div>' +
      '<div class="card chart-card" id="chTopics"></div></div>';
    lockSince("Score trend, accuracy by domain, weakest topics");

    // Review + weak topics actions
    var due = PG.dueIds(BY_ID).length;
    lockFrom = html.length;
    html += '<div class="dgrid2">' +
      '<div class="card review-card"><div class="dlabel">Smart review</div><div class="dbig">' + due + '<small> due</small></div>' +
        '<p class="muted small">Missed questions come back after 10 minutes. Each time you get one right, it waits longer: 1, 3, 7, 16 then 35 days.</p>' +
        '<button class="btn primary" id="startReview"' + (due ? "" : " disabled") + ">" + (due ? "Review " + Math.min(20, due) + " now" : "All caught up") + "</button></div>" +
      '<div class="card"><div class="dlabel">Work on these</div>' +
        (weak.length ? '<div class="weak">' + weak.map(function (t) {
          return '<div class="wrow"><div><b>' + esc(t.topic) + "</b><span>D" + t.domain + " · " + Math.round(t.acc * 100) + "% correct · " + t.wrong + " miss" + (t.wrong > 1 ? "es" : "") + "</span></div>" +
            '<button class="btn sm" data-topic="' + esc(t.topic) + '">Practise</button></div>';
        }).join("") + "</div>" : '<p class="muted small">Your weakest topics will show up here after a few tests.</p>') +
      "</div></div>";
    lockSince("Smart review and your weakest topics");
    var mOpen = window.CAMSMistakes ? window.CAMSMistakes.count() : 0;
    html += '<a class="card mm-link" href="#/mistakes"><span class="mm-li" aria-hidden="true">🎯</span><span><b>Most missed</b><span class="muted small">' +
      (mOpen ? mOpen + " question" + (mOpen > 1 ? "s" : "") + " you still miss, ranked worst first. Train on them in one click." : "Every question you miss lands here, ranked worst first.") + '</span></span><span class="mt-go" aria-hidden="true">›</span></a>';

    // Records
    var R = PG.RECORDS;
    html += '<div class="card" style="margin-top:20px"><div class="dlabel">Personal records</div><div class="records">' +
      Object.keys(R).map(function (k) {
        var v = g.records[k];
        return '<div class="recd' + (v != null ? " has" : "") + '"><b>' + (v != null ? v + R[k].unit : "–") + "</b><span>" + R[k].label + "</span></div>";
      }).join("") + "</div></div>";

    html += '<div class="card" style="margin-top:20px"><div class="dlabel">Activity · last 20 weeks</div>' + heatmapHtml() + "</div>";

    var got = Object.keys(g.badges).length;
    html += '<div class="card" style="margin-top:20px"><div class="dlabel">Badges · ' + got + " of " + PG.BADGES.length + '</div><div class="badges">' +
      PG.BADGES.map(function (b) {
        var on = !!g.badges[b.id];
        return '<div class="badge' + (on ? " earned" : "") + '" title="' + esc(b.desc) + '"><div class="bi">' + b.icon + "</div><b>" + esc(b.name) + "</b><span>" + esc(b.desc) + "</span></div>";
      }).join("") + "</div></div>";

    html += '<div class="card" style="margin-top:20px"><div class="dlabel">Recent tests</div>';
    if (history.length) {
      html += '<table><thead><tr><th>Date</th><th>Mode</th><th class="hide-sm">Scope</th><th class="num">Score</th></tr></thead><tbody>' +
        history.slice(-12).reverse().map(function (h) {
          return "<tr><td>" + new Date(h.date).toLocaleDateString(undefined, { day: "2-digit", month: "short" }) + " " +
            new Date(h.date).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + "</td><td>" + esc(modeLabel(h.mode)) + "</td>" +
            '<td class="hide-sm">' + esc(h.scope || "All") + '</td><td class="num">' + h.score + "/" + h.total + (h.mode === "survival" ? "" : " · " + pct(h.score, h.total) + "%") + "</td></tr>";
        }).join("") + "</tbody></table>" +
        '<div style="text-align:right;margin-top:12px"><button class="btn sm danger" id="reset">Reset progress</button></div>';
    } else html += '<p class="muted" style="margin:0">No tests yet. Your scores will appear here.</p>';
    html += "</div>";

    app.innerHTML = html;

    // Charts
    var tests = history.filter(function (h) { return h.mode !== "survival" && h.total >= 5; }).slice(-20);
    CH.line($("chTrend"), {
      title: "Test scores", subtitle: tests.length ? "Last " + tests.length + " tests, % correct" : "Finish a test to start your curve",
      yMax: 100, ref: { value: 62.5, label: "Pass" },
      points: tests.map(function (h) {
        var d = new Date(h.date);
        return { x: d.toLocaleDateString(undefined, { day: "numeric", month: "short" }), y: pct(h.score, h.total), tip: modeLabel(h.mode) + " · " + d.toLocaleDateString(undefined, { day: "numeric", month: "short" }) + " · " + h.score + "/" + h.total };
      }),
      tableHead: ["Test", "Score"]
    });
    var days = PG.lastDays(14);
    CH.columns($("chDays"), {
      title: "Answers per day", subtitle: "Last 14 days · line = your daily goal",
      ref: { value: g.goal, label: "Goal" },
      bars: days.map(function (d, i) {
        return { label: d.date.toLocaleDateString(undefined, { weekday: "narrow" }), value: d.answers, hit: d.answers >= g.goal, showLabel: true,
          tip: d.date.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" }) + " · " + d.xp + " XP" };
      }),
      tableHead: ["Day", "Answers"]
    });
    CH.hbars($("chDomains"), {
      title: "Accuracy by domain", subtitle: "Line = pass line (62.5%, i.e. 75 of 120)", ref: { value: 62.5, label: "Pass" },
      bars: [1, 2, 3, 4].map(function (d) {
        var b = acc[d] || { n: 0, ok: 0, seen: 0, total: 0 };
        return { label: "D" + d + " · " + DOMAINS[d].short, value: b.n ? pct(b.ok, b.n) : 0, valueLabel: b.n ? pct(b.ok, b.n) + "%" : "–", dim: !b.n,
          tip: b.seen + "/" + b.total + " questions seen · " + b.n + " answers" };
      }),
      tableHead: ["Domain", "Accuracy"]
    });
    var topicBars = weak.slice(0, 4).map(function (t) { return { label: t.topic, value: Math.round(t.acc * 100), tip: "Weak · " + t.n + " answers" }; })
      .concat(strong.slice(0, 4).map(function (t) { return { label: t.topic, value: Math.round(t.acc * 100), tip: "Strong · " + t.n + " answers" }; }));
    CH.hbars($("chTopics"), {
      title: "Weakest and strongest topics", subtitle: topicBars.length ? "% correct by topic" : "Appears after a few tests",
      ref: { value: 62.5, label: "Pass" }, bars: topicBars, tableHead: ["Topic", "Accuracy"]
    });

    each("[data-goal]", function (b) { b.onclick = function () { PG.setGoal(Number(b.getAttribute("data-goal"))); renderProgress(); }; });
    var rv = $("startReview");
    if (rv) rv.onclick = function () { startSession("review", { domain: "all", source: "review" }); };
    each("[data-topic]", function (b) {
      b.onclick = function () {
        var topic = b.getAttribute("data-topic");
        var ids = BANK.filter(function (q) { return PG.topicKey(q) === topic; }).map(function (q) { return q.id; });
        startSession("practice", { domain: "all", source: "topic", ids: ids, label: topic });
      };
    });
    var reset = $("reset");
    if (reset) reset.onclick = function () {
      if (confirm("Erase all your progress (history, XP, streak, badges, review schedule)?" + (window.CAMSAccount && window.CAMSAccount.user() ? " This also erases it from your account on every device." : ""))) {
        PG.resetAll(); remove(KEYS.session); if (window.CAMSSync) window.CAMSSync.schedule(); renderProgress();
      }
    };
    if (PL) PL.bindLocks(app);
    FX.countUp(app);
    window.scrollTo(0, 0);
  }
  routes.progress = renderProgress;
  routes.premium = function () { if (PL) PL.renderPremium(); else renderHome(); };
  routes.home = renderHome;

  // ---------- Toasts & celebrations ----------
  function toast(html, cls) {
    var box = $("toasts");
    if (!box) { box = document.createElement("div"); box.id = "toasts"; box.setAttribute("aria-live", "polite"); document.body.appendChild(box); }
    var t = document.createElement("div");
    t.className = "toast " + (cls || "");
    t.innerHTML = html;
    box.appendChild(t);
    setTimeout(function () { t.classList.add("out"); }, 3400);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 3900);
  }
  function refreshChips() { if (!session || session.finished) setTopbar(homeChips()); }
  window.CAMSUI = { toast: toast, refresh: function () { if (!session || session.finished) route(); } };
  if (PG) PG.on(function (ev) {
    if (ev.type === "badge") { FX.play("badge"); FX.confetti({ count: 80 }); toast('<span class="ti">' + ev.badge.icon + "</span><div><b>Badge unlocked: " + esc(ev.badge.name) + "</b><span>" + esc(ev.badge.desc) + "</span></div>", "big"); }
    else if (ev.type === "goal") { FX.play("quest"); toast('<span class="ti">🎯</span><div><b>Daily goal reached!</b><span>' + ev.goal + " questions today · +" + ev.bonus + " XP</span></div>", "big"); }
    else if (ev.type === "level") { FX.play("levelup"); FX.celebrate("Level " + ev.level, ev.title, "Keep going. Every level brings you closer to exam day.", "⭐"); }
    else if (ev.type === "streak") toast('<span class="ti">🔥</span><div><b>' + ev.days + "-day streak</b><span>Keep it going tomorrow</span></div>");
    else if (ev.type === "quest") { FX.play("quest"); toast('<span class="ti">' + ev.quest.icon + "</span><div><b>Quest complete</b><span>" + esc(ev.quest.text) + " · +" + ev.quest.xp + " XP</span></div>", "big"); }
    else if (ev.type === "chest") { FX.play("levelup"); FX.celebrate("🎁", "Daily quests complete", "Bonus chest: +" + ev.xp + " XP. New quests tomorrow.", "🎉"); }
    else if (ev.type === "record") { FX.confetti({ count: 90 }); toast('<span class="ti">🏆</span><div><b>New record!</b><span>' + esc(ev.label) + ": " + ev.value + " (was " + ev.prev + ")</span></div>", "big"); }
    else if (ev.type === "freezeUsed") toast('<span class="ti">❄️</span><div><b>Streak saved</b><span>' + ev.used + " streak freeze" + (ev.used > 1 ? "s" : "") + " used for the day" + (ev.used > 1 ? "s" : "") + " you missed.</span></div>", "big");
    else if (ev.type === "freezeEarned") toast('<span class="ti">❄️</span><div><b>Streak freeze earned</b><span>It will protect your streak if you miss a day.</span></div>', "big");
    else if (ev.type === "lesson") toast('<span class="ti">📖</span><div><b>Lesson complete</b><span>+' + ev.xp + " XP</span></div>");
    refreshChips();
  });

  function setView(name) {
    document.body.className = name;
    app.className = name === "home" ? "container wide" : "container";
  }

  // ---------- Quiz ----------
  function livesHtml(s) {
    var max = MODES.survival.lives, out = "";
    for (var i = 0; i < max; i++) out += '<span class="heart' + (i < s.lives ? "" : " lost") + (s.lostAnim && i === s.lives ? " breaking" : "") + '">' + (i < s.lives ? "❤️" : "🤍") + "</span>";
    return '<span class="lives" aria-label="' + s.lives + ' lives left">' + out + "</span>";
  }

  function renderQuiz() {
    var s = session;
    if (s.mode === "exam" && s.endsAt && Date.now() >= s.endsAt) {
      alert("Time is up! Your exam has been submitted.");
      return finish();
    }
    var item = s.items[s.current];
    var q = BY_ID[item.qid];
    var total = s.items.length;
    var practice = instant(s);
    var revealed = practice && item.submitted;
    var multi = isMulti(q);
    var timed = s.mode === "lightning";
    stopQTimer();

    var done = firstTries(s.items).filter(function (it) { return it.submitted; });
    var right = done.filter(isCorrect).length;
    if (s.mode === "exam") {
      setTopbar('<span class="tag">Mock exam</span><span class="timer" id="timer"></span>');
    } else {
      setTopbar('<span class="tag blue">' + esc(MODES[s.mode].icon + " " + modeLabel(s.mode)) + "</span>" +
        (s.mode === "survival" ? livesHtml(s) : "") +
        '<span class="small muted">' + right + "/" + done.length + (s.xp ? ' · <b class="xp-live">+' + s.xp + " XP</b>" : "") + "</span>");
    }

    var answeredCount = s.items.filter(practice ? function (it) { return it.submitted; } : isAnswered).length;
    var animate = lastRendered !== s.current;
    lastRendered = s.current;
    setView("quiz");
    var countLabel = s.mode === "survival" ? "<b>Question " + (s.current + 1) + "</b> · " + right + " correct" : "<b>Question " + (s.current + 1) + "</b> of " + total;
    var html = '<div class="card qcard' + (animate ? " fade-in" : "") + (revealed ? (isCorrect(item) ? " flash-good" : " flash-bad") : "") + '">' +
      (timed && !revealed ? '<div class="hg-wrap">' + FX.hourglass() + '<span class="hg-sec" id="hgSec"></span></div>' : "") +
      '<div class="qhead"><div class="qcount">' + countLabel + "</div>" +
      '<div style="display:flex;gap:6px;flex-wrap:wrap">' + (item.retry ? '<span class="tag retry">🔁 Second chance</span>' : item.due ? '<span class="tag retry">🔁 Missed before</span>' : "") +
      '<span class="tag blue">Domain ' + q.domain + "</span>" +
      (revealed && q.topic ? '<span class="tag">' + esc(q.topic) + "</span>" : "") + // topic only after answering: it can give the answer away

      (practice && q.hy ? '<span class="tag hy">Frequently tested</span>' : "") +
      (q.difficulty === "hard" ? '<span class="tag hard">Hard</span>' : "") + "</div></div>" +
      (s.mode === "survival" ? "" : '<div class="progress"><div style="width:' + pct(answeredCount, total) + '%"></div></div>') +
      '<div class="qtext" id="qtext" tabindex="-1">' + esc(q.q) + "</div>" +
      (multi ? '<div class="hint">Select ' + q.answer.length + " answers.</div>" : "") +
      '<div id="opts">';

    item.order.forEach(function (orig, i) {
      var cls = "opt";
      var sel = item.selected.indexOf(orig) >= 0;
      var good = q.answer.indexOf(orig) >= 0;
      if (revealed) {
        if (good && sel) cls += " correct";
        else if (good) cls += " correct missed";
        else if (sel) cls += " wrong";
      } else if (sel) cls += " selected";
      html += '<button class="' + cls + '" data-orig="' + orig + '"' + (revealed ? " disabled" : "") + ">" +
        '<span class="letter">' + LETTERS[i] + "</span><span>" + esc(q.options[orig]) + "</span></button>";
    });
    html += "</div>";

    if (revealed) {
      var ok = isCorrect(item);
      var correctLetters = item.order.map(function (orig, i) { return q.answer.indexOf(orig) >= 0 ? LETTERS[i] : null; }).filter(Boolean).join(", ");
      if (ok && item.combo >= 3) html += '<div class="combo-pill' + (item.fresh ? " pop" : "") + '">🔥 ' + item.combo + " in a row" + (item.combo >= 5 ? " · on fire!" : "") + "</div>";
      html += '<div class="explain ' + (ok ? "good" : "bad") + '"><div class="verdict">' +
        (item.timedOut && isAnswered(item) ? (ok ? "⌛ Time's up — your selection was submitted: ✓ Correct" : "⌛ Time's up — your selection was submitted. Correct answer: " + correctLetters)
          : item.timedOut ? "⌛ Time's up — correct answer: " + correctLetters : ok ? "✓ Correct" : "✗ Incorrect — correct answer: " + correctLetters) +
        (item.xp ? '<span class="xp-chip' + (item.fresh ? " pop" : "") + '">+' + item.xp + " XP</span>" : "") + "</div>" + retryNote(s, item, ok) + esc(q.explanation) + changedHtml(q) + sourcesHtml(q) + "</div>";
      item.fresh = false;
      s.lostAnim = false;
    }

    var lastQ = s.current >= total - 1;
    var over = s.mode === "survival" && s.lives <= 0;
    html += '<div class="actions">';
    if (s.mode !== "lightning" && s.mode !== "survival") html += '<button class="btn" id="prev"' + (s.current === 0 ? " disabled" : "") + ">← Previous</button>";
    html += '<div class="right">';
    if (practice) {
      if (!item.submitted) html += '<button class="btn primary" id="submit"' + (isAnswered(item) ? "" : " disabled") + ">Check answer</button>";
      else if (s.mode === "survival") html += over ? '<button class="btn primary" id="finish">See results</button>' : '<button class="btn primary" id="next">Next question →</button>';
      else if (!lastQ) html += '<button class="btn primary" id="next">Next question →</button>';
      else html += '<button class="btn primary" id="finish">See results</button>';
    } else {
      html += '<button class="btn" id="flag">' + (item.flagged ? "⚑ Unflag" : "⚐ Flag") + "</button>";
      if (!lastQ) html += '<button class="btn primary" id="next">Next →</button>';
      else html += '<button class="btn primary" id="finish">Submit exam</button>';
    }
    html += "</div></div></div>";

    // Navigator (not for Survival/Lightning, which move forward only)
    if (s.mode !== "survival" && s.mode !== "lightning") {
      html += '<div class="card" style="margin-top:20px"><div class="qhead" style="margin:0"><h3 style="margin:0">Navigator</h3>' +
        '<div style="display:flex;gap:8px"><button class="btn sm" id="quit">Quit</button>' +
        (practice ? "" : '<button class="btn sm primary" id="finish2">Submit exam</button>') + "</div></div>" +
        '<div class="navgrid">' + s.items.map(function (it, i) {
          var c = [];
          if (practice) { if (it.submitted) c.push("answered"); } else if (isAnswered(it)) c.push("answered");
          if (it.flagged) c.push("flagged");
          if (i === s.current) c.push("current");
          if (practice && it.submitted) c.push(isCorrect(it) ? "ok" : "ko");
          if (it.retry) c.push("retry");
          return '<button data-go="' + i + '" class="' + c.join(" ") + '"' + (it.retry ? ' title="Second chance"' : "") + ">" + (it.retry ? "↻" : i + 1) + "</button>";
        }).join("") + "</div>" +
        '<div class="legend">' + (practice
          ? '<span><i style="background:var(--good)"></i>Correct</span><span><i style="background:var(--bad)"></i>Incorrect</span>'
          : '<span><i style="background:var(--blue)"></i>Answered</span><span><i style="background:var(--warn)"></i>Flagged</span>') + "</div></div>";
    } else {
      html += '<div style="text-align:center;margin-top:16px"><button class="btn sm" id="quit">Quit</button></div>';
    }

    app.innerHTML = html;
    bindQuiz(q, item);
    if (pendingFocus) {
      var f = document.querySelector(pendingFocus);
      if (!f || f.disabled) f = $("qtext");
      pendingFocus = null;
      if (f) f.focus({ preventScroll: true });
    }
    if (s.mode === "exam") startTimer();
    if (timed && !item.submitted) startQTimer(item);
  }

  function retryNote(s, item, ok) {
    var t = "";
    if (item.retry) t = ok ? "<b>Fixed on your second try.</b> It stays in Smart review and comes back tomorrow, then at growing intervals, to lock it in."
      : "<b>Still tricky.</b> Read the explanation below carefully: this one comes back in Smart review in 10 minutes.";
    else if (!ok && item.retryAt != null) t = "<b>Second chance coming:</b> this question comes back " + (item.retryAt >= s.items.length - 1 ? "at the end of this set" : "in a few questions") + ", options reshuffled. Read why below.";
    else if (!ok && PG) t = "<b>Added to Smart review:</b> it comes back in 10 minutes, then tomorrow, then at growing intervals.";
    return t ? '<div class="retry-note">🔁 ' + t + "</div>" : "";
  }

  // Lightning: per-question hourglass
  function startQTimer(item) {
    var limit = (isMulti(BY_ID[item.qid]) ? 1.5 : 1) * MODES.lightning.perQuestion * 1000;
    if (!item.endsAt) { item.endsAt = Date.now() + limit; persist(); }
    var hg = document.querySelector(".hourglass"), sec = $("hgSec"), lastSec = null;
    function upd() {
      var left = item.endsAt - Date.now();
      FX.hourglassUpdate(hg, left / limit);
      var sLeft = Math.ceil(Math.max(0, left) / 1000);
      if (sec) sec.textContent = sLeft + "s";
      if (sLeft !== lastSec && sLeft <= 5 && sLeft > 0) FX.play("tick");
      lastSec = sLeft;
      if (left <= 0) {
        stopQTimer();
        item.timedOut = true;
        submitItem(item);
      }
    }
    upd();
    qTimer = setInterval(upd, 100);
  }

  function submitItem(item) {
    var s = session;
    if (item.submitted) return;
    stopQTimer();
    item.submitted = true;
    var ok = isCorrect(item);
    s.combo = ok ? (s.combo || 0) + 1 : 0;
    s.bestCombo = Math.max(s.bestCombo || 0, s.combo);
    item.combo = ok ? s.combo : 0;
    var speed = 0;
    if (ok && s.mode === "lightning" && item.endsAt) speed = Math.floor(Math.max(0, item.endsAt - Date.now()) / 5000);
    if (item.retry) item.xp = 0;   // a second chance is for learning: no stats, XP or free-question cost
    else {
      recordStat(item, { combo: item.combo, speedBonus: speed });
      if (s.free && PL && isAnswered(item)) PL.useFree(1);
      if (!ok) queueRetry(s, item);
    }
    item.fresh = true;
    if (ok) FX.play(item.combo >= 3 ? "combo" : "correct", item.combo); else FX.play("wrong");
    if (s.mode === "survival" && !ok) { s.lives = Math.max(0, s.lives - 1); s.lostAnim = true; if (s.lives <= 0) FX.play("lose"); }
    persist();
    renderQuiz();
    var ex = document.querySelector(".explain");
    if (ex && ex.scrollIntoView) ex.scrollIntoView({ behavior: FX.reduced ? "auto" : "smooth", block: "nearest" });
  }

  // Practice and Review: a missed question comes back once, a few questions later, with its options reshuffled.
  function canRetry(s) { return s.mode === "practice" || s.mode === "review"; }
  function queueRetry(s, item) {
    if (!canRetry(s) || s.items.some(function (it) { return it.retry && it.qid === item.qid; })) return;
    var at = Math.min(s.items.indexOf(item) + 1 + RETRY_GAP, s.items.length);
    var r = makeItem(BY_ID[item.qid]);
    r.retry = true;
    s.items.splice(at, 0, r);
    item.retryAt = at;
  }
  function firstTries(items) { return items.filter(function (it) { return !it.retry; }); }

  // A click with detail 0 comes from the keyboard (Enter/Space or a shortcut): keep focus on that control.
  function kbFocus(e, sel) { if (e && e.detail === 0) pendingFocus = sel; }
  function bindQuiz(q, item) {
    var s = session;
    var multi = isMulti(q);
    each(".opt", function (btn) {
      btn.onclick = function (e) {
        if (item.submitted && instant(s)) return;
        kbFocus(e, '.opt[data-orig="' + btn.getAttribute("data-orig") + '"]');
        var orig = Number(btn.getAttribute("data-orig"));
        var idx = item.selected.indexOf(orig);
        if (multi) {
          if (idx >= 0) item.selected.splice(idx, 1);
          else if (item.selected.length < q.answer.length) item.selected.push(orig);
          else { item.selected.shift(); item.selected.push(orig); }
        } else item.selected = [orig];
        persist();
        // Keep the hourglass running: update selection in place for Lightning.
        if (s.mode === "lightning") {
          each(".opt", function (b) { b.classList.toggle("selected", item.selected.indexOf(Number(b.getAttribute("data-orig"))) >= 0); });
          var sb = $("submit"); if (sb) sb.disabled = !isAnswered(item);
          return;
        }
        renderQuiz();
      };
    });
    function on(id, fn) { var el = $(id); if (el) el.onclick = function (e) { kbFocus(e, "#" + id); fn(e); }; }
    on("prev", function () { go(s.current - 1); });
    on("next", function () {
      if (s.mode === "survival") {
        if (s.free && PL && PL.freeLeft() <= 0) return finish(true);   // free questions used: end the run here
        while (s.pool.length && !BY_ID[s.pool[0]]) s.pool.shift();
        if (!s.pool.length) return finish();
        s.items.push(makeItem(BY_ID[s.pool.shift()]));
      }
      go(s.current + 1);
    });
    on("submit", function () { submitItem(item); });
    on("flag", function () { item.flagged = !item.flagged; persist(); renderQuiz(); });
    on("finish", confirmFinish);
    on("finish2", confirmFinish);
    on("quit", function () {
      if (confirm(s.mode === "lightning" || s.mode === "survival" ? "Quit this run? It will end now and count as finished." : "Leave this test? You can resume it later from the home page.")) {
        stopTimer(); stopQTimer();
        if (s.mode === "lightning" || s.mode === "survival") return finish(true);
        persist(); session = null; navigate("/");
      }
    });
    each("[data-go]", function (b) { b.onclick = function (e) { kbFocus(e, '[data-go="' + b.getAttribute("data-go") + '"]'); go(Number(b.getAttribute("data-go"))); }; });
  }

  function go(i) {
    if (i < 0 || i >= session.items.length) return;
    session.current = i;
    persist();
    renderQuiz();
    window.scrollTo(0, 0);
  }

  function confirmFinish() {
    var s = session;
    if (instant(s)) {
      var pending = firstTries(s.items).filter(function (it) { return !it.submitted; }).length;
      if (pending && s.mode !== "survival" && !confirm(pending + " question(s) not checked yet. Selected answers will be scored as they are; blank ones count as incorrect. Finish anyway?")) return;
    } else {
      var un = s.items.filter(function (it) { return !isAnswered(it); }).length;
      var fl = s.items.filter(function (it) { return it.flagged; }).length;
      var msg = "Submit your exam?";
      if (un) msg += "\n\n" + un + " question(s) unanswered (counted as incorrect).";
      if (fl) msg += "\n" + fl + " question(s) flagged for review.";
      if (!confirm(msg)) return;
    }
    finish();
  }

  function recordStat(item, opts) {
    opts = opts || {};
    var stats = load(KEYS.stats, {});
    var st = stats[item.qid] || { seen: 0, right: 0, wrong: 0 };
    var ok = isCorrect(item);
    if (!st.seen && isAnswered(item) && window.CAMSMistakes) window.CAMSMistakes.firstAnswer(item.qid, ok);   // community stats: first try only
    st.seen += 1;
    if (ok) st.right += 1; else st.wrong += 1;
    st.last = ok;
    stats[item.qid] = st;
    save(KEYS.stats, stats);
    if (PG && session && (isAnswered(item) || item.timedOut)) {
      item.xp = PG.onAnswer(item.qid, ok, { review: session.mode === "review", combo: opts.combo || 0, speedBonus: opts.speedBonus || 0, noXp: !isAnswered(item) });
      session.xp = (session.xp || 0) + item.xp;
    }
    if (PG && session && session.mode !== "exam") PG.checkBadges({ bank: BANK });
  }

  function finish(early) {
    var s = session;
    stopTimer(); stopQTimer();
    if (!s || s.finished) return;
    if (s.mode === "survival") s.items = s.items.filter(function (it) { return it.submitted; });
    s.retries = s.items.filter(function (it) { return it.retry && it.submitted; });
    s.items = firstTries(s.items);
    var answered = s.items.filter(isAnswered).length;
    if (!answered && (early || !s.items.length)) {
      // Quit before answering anything: nothing to score or record.
      remove(KEYS.session);
      session = null;
      toast('<span class="ti">👋</span><div><b>Run ended</b><span>Nothing was answered, so nothing was recorded.</span></div>');
      return location.replace("#/");
    }
    if (answered) s.items.forEach(function (it) {
      if (s.mode === "exam" || (!it.submitted && s.mode !== "survival" && s.mode !== "lightning")) recordStat(it);
    });
    // Unanswered Lightning questions left by quitting count as wrong but give no XP.
    if (s.mode === "lightning") s.items.forEach(function (it) { if (!it.submitted) { it.submitted = true; it.timedOut = true; } });
    s.finished = true;
    s.finishedAt = Date.now();
    var score = s.items.filter(isCorrect).length;
    var total = s.items.length;
    var history = load(KEYS.history, []);
    var o = s.opts || {};
    if (answered) history.push({
      date: s.finishedAt, mode: s.mode, score: score, total: total,
      scope: s.mode === "daily" ? "Daily " + s.dailyKey + (s.replay ? " · replay" : "")
        : (!o.domain || o.domain === "all" ? "All" : "D" + o.domain) +
          (o.source === "hy" ? " · HY" : o.source === "hard" ? " · Hard" : o.source === "mistakes" ? " · Mistakes" : s.mode === "review" ? " · Review" : o.label ? " · " + o.label : "")
    });
    if (answered) save(KEYS.history, history.slice(-100));
    if (PG && answered) {
      if (s.mode === "daily" && !s.replay) {
        s.dailyLate = s.dailyKey !== PG.dayKey(); // started before midnight: saved for its own day, not ranked today
        s.dailySaved = PG.saveDaily(score, total, s.finishedAt - s.startedAt, s.dailyKey);
        if (!s.dailySaved && !s.dailyLate) s.replay = true; // another device already posted today's first attempt
      }
      var recBefore = JSON.parse(JSON.stringify(PG.gam().records || {}));
      s.bonus = PG.onFinish({ mode: s.mode === "daily" && s.replay ? "practice" : s.mode, score: score, total: total, answered: answered });
      s.xp = (s.xp || 0) + s.bonus;
      var recAfter = PG.gam().records || {};
      s.newRecord = ["exam", "lightning", "survival", "daily"].filter(function (k) { return recAfter[k] != null && recAfter[k] !== recBefore[k]; })[0] || null;
      PG.checkBadges({ bank: BANK });
      var now = PG.gam().badges;
      s.newBadges = PG.BADGES.filter(function (b) { return now[b.id] && (s.badgesAtStart || []).indexOf(b.id) < 0; });
      if (window.CAMSLeaderboard && s.dailySaved) window.CAMSLeaderboard.schedule();
    }
    if (o.planTask && answered && window.CAMSStudy) window.CAMSStudy.taskDone(o.planTask);
    if (o.diag && answered && window.CAMSStudy) window.CAMSStudy.recordDiag(s.items.map(function (it) { return { d: BY_ID[it.qid].domain, ok: isCorrect(it) }; }));
    remove(KEYS.session);
    reviewFilter = "all";
    FX.play("end");
    if (score / Math.max(1, total) >= 0.8 && total >= 10) FX.confetti();
    if (location.hash !== "#/play") location.hash = "/play"; else renderResults();
  }

  // ---------- Results ----------
  function ring(p, pass) {
    var r = 50, c = 2 * Math.PI * r;
    var color = pass ? "var(--good)" : "var(--bad)";
    return '<svg class="ring" viewBox="0 0 120 120" role="img" aria-label="Score ' + p + '%">' +
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="rgba(118,118,128,.16)" stroke-width="10"/>' +
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="10" stroke-linecap="round" class="val"' +
      ' stroke-dasharray="' + (c * p / 100) + " " + c + '" transform="rotate(-90 60 60)"/>' +
      '<text x="60" y="68" text-anchor="middle">' + p + "%</text></svg>";
  }

  function rewardsHtml(s) {
    if (!PG) return "";
    var g = PG.gam(), lv = PG.levelFor(g.xp), st = PG.streak(g);
    var quests = PG.todayQuests();
    var html = '<div class="rewards">' +
      '<div class="reward"><b>+<span data-count="' + (s.xp || 0) + '">' + (s.xp || 0) + '</span> XP</b><span>this session</span></div>' +
      '<div class="reward"><b>Level ' + lv.level + '</b><span>' + esc(PG.titleFor(lv.level)) + " · " + lv.pct + '% to next</span><div class="xpbar"><div style="width:' + lv.pct + '%"></div></div></div>' +
      '<div class="reward"><b>🔥 ' + st.current + '</b><span>day streak</span></div>' +
      '<div class="reward"><b>' + (s.bestCombo || 0) + '</b><span>best combo</span></div></div>' +
      '<div class="quests-inline">' + quests.map(function (q) {
        return '<span class="qchip' + (q.done ? " done" : "") + '">' + (q.done ? "✅" : q.icon) + " " + esc(q.text) + " · " + q.progress + "/" + q.target + "</span>";
      }).join("") + "</div>";
    if (window.CAMSAccount && window.CAMSAccount.enabled && !window.CAMSAccount.user()) {
      html += '<div class="save-nudge"><div><b>Keep your streak on every device.</b><span>Create a free account to save your XP, badges and review schedule, and join the leaderboard.</span></div>' +
        '<button class="btn sm primary" id="nudgeSignup">Create account</button></div>';
    }
    if (s.newBadges && s.newBadges.length) {
      html += '<div class="new-badges">' + s.newBadges.map(function (b) {
        return '<div class="badge earned pop"><div class="bi">' + b.icon + "</div><b>" + esc(b.name) + "</b><span>" + esc(b.desc) + "</span></div>";
      }).join("") + "</div>";
    }
    return html;
  }

  function keepGoingHtml(s) {
    // Free plan, questions used up: a friendly "daily dose done" card is the only place Premium is offered.
    if (PL && !PL.premium() && !PL.freeLeft()) {
      return '<div class="keep-going dose-done"><div class="dd-check">✓</div><div><b>Daily dose done: ' + PL.FREE_DAILY + "/" + PL.FREE_DAILY + '</b><span>Nice work. Your free questions come back tomorrow' +
        (PG && !PG.dailyAttemptUsed() ? ", and today's daily challenge is still open." : ".") + ' Want to keep the momentum?</span></div>' +
        '<div class="dd-actions">' + (PG && !PG.dailyAttemptUsed() ? '<button class="btn sm" data-next="daily">📅 Daily challenge</button>' : "") +
        '<button class="btn primary sm" data-paywall="quota">👑 Keep going with Premium</button></div></div>';
    }
    var th = themes();
    // Weakest themes first (unseen count as weak), so the next session targets gaps.
    th.sort(function (a, b) { return (a.acc == null ? -1 : a.acc) - (b.acc == null ? -1 : b.acc) || a.seen - b.seen; });
    return '<div class="keep-going"><div class="dlabel">Keep going: no daily limit</div>' +
      '<div class="kg-modes"><button class="btn sm" data-next="practice">💡 Practice</button><button class="btn sm" data-next="exam">⏱ Mock exam</button>' +
      '<button class="btn sm" data-next="lightning">⏳ Lightning</button><button class="btn sm" data-next="survival">❤️ Survival</button>' +
      (PG && PG.dueIds(BY_ID).length ? '<button class="btn sm" data-next="review">🔁 Smart review</button>' : "") + "</div>" +
      (th.length ? '<p class="small muted" style="margin:14px 0 8px">Or pick a theme (weakest first):</p>' + themeChips(th.slice(0, 6)) : "") + "</div>";
  }

  // Learning loop: what was missed, what the second chances fixed, and a one-click replay of the misses.
  function mistakesHtml(s) {
    var missed = s.items.filter(function (it) { return !isCorrect(it); });
    if (!missed.length) return "";
    var r = s.retries || [], fixed = r.filter(isCorrect).length;
    return '<div class="learn-loop"><div class="ll-ic" aria-hidden="true">🧠</div><div class="ll-body">' +
      "<b>Turn " + (missed.length === 1 ? "this miss" : "these " + missed.length + " misses") + " into points</b>" +
      "<span>" + (r.length ? "Second chances: " + fixed + "/" + r.length + " fixed. " : "") +
      "Missed questions come back in Smart review in 10 minutes, then after 1, 3, 7, 16 and 35 days as you get them right.</span></div>" +
      '<div class="ll-actions"><button class="btn primary sm" id="retryMissed">🔁 Retry my ' + missed.length + " mistake" + (missed.length > 1 ? "s" : "") + " now</button>" +
      '<button class="btn sm" data-filter="wrong">Read the explanations</button><a class="btn sm" href="#/mistakes">🎯 All my most missed</a></div></div>';
  }

  function shareText(s) {
    var sq = s.items.map(function (it) { return isCorrect(it) ? "🟩" : "🟥"; }).join("");
    var score = s.items.filter(isCorrect).length;
    return "CAMS Daily " + s.dailyKey + ": " + score + "/" + s.items.length + " in " + fmtTime((s.finishedAt - s.startedAt) / 1000) + "\n" + sq + "\n" + location.origin + location.pathname;
  }

  function renderResults() {
    var s = session;
    setView("quiz");
    lastRendered = -1;
    setTopbar('<span class="tag">' + esc(modeLabel(s.mode)) + " · results</span>");
    var total = s.items.length;
    var score = s.items.filter(isCorrect).length;
    var p = pct(score, total);
    var pass = score / Math.max(1, total) >= PASS_RATE;
    var elapsed = Math.round(((s.finishedAt || Date.now()) - s.startedAt) / 1000);
    var title, sub;
    if (s.mode === "survival") { title = score + " correct"; sub = "Survival run over after " + total + " questions · best combo " + (s.bestCombo || 0); }
    else if (s.mode === "lightning") { title = score + " / " + total + " in Lightning"; sub = "Speed bonus included in your XP · time " + fmtTime(elapsed); }
    else if (s.mode === "daily") { title = "Daily challenge: " + score + "/" + total; sub = s.replay ? "Replay (your first attempt already counts)" : s.dailyLate ? "Finished after midnight, so it was saved for " + s.dailyKey + " and not ranked on today's board." : "Done in " + fmtTime(elapsed) + ". A new set tomorrow; meanwhile, keep training below as much as you like."; }
    else if (s.mode === "exam") { title = pass ? "You passed." : "Not yet. Keep going."; sub = score + " / " + total + " correct · pass line 62.5% (75 of 120) · time " + fmtTime(elapsed); }
    else { title = p >= 80 ? "Excellent." : pass ? "Good work." : "Keep going."; sub = score + " / " + total + " correct · time " + fmtTime(elapsed); }

    var byDomain = {};
    s.items.forEach(function (it) {
      var d = BY_ID[it.qid].domain;
      byDomain[d] = byDomain[d] || { n: 0, ok: 0 };
      byDomain[d].n += 1;
      if (isCorrect(it)) byDomain[d].ok += 1;
    });

    var html = '<div class="card fade-in"><div class="score">' + ring(p, s.mode === "survival" ? score >= 10 : pass) + "<div>" +
      (s.newRecord ? '<div class="record-flag">🏆 New personal record</div>' : "") +
      '<div class="result-title">' + esc(title) + "</div>" +
      '<p class="muted" style="margin:0">' + esc(sub) + "</p>" +
      (s.mode === "exam" ? '<p class="muted small" style="margin:6px 0 0">Aim for 80%+ consistently in mock exams before booking the real one.</p>' : "") +
      "</div></div>" + (s.opts && s.opts.diag ? '<div class="learn-loop"><div class="ll-ic" aria-hidden="true">🗓</div><div class="ll-body"><b>Diagnostic done. Your 30-day plan is ready.</b><span>It starts with your weakest domains and tells you exactly what to do each day.</span></div><div class="ll-actions"><a class="btn primary sm" href="#/plan">Open my plan</a></div></div>' : "") +
      rewardsHtml(s) + mistakesHtml(s) + keepGoingHtml(s) +
      (s.mode === "daily" && !s.replay && !s.dailyLate ? '<div class="share"><pre id="shareTxt">' + esc(shareText(s)) + '</pre><button class="btn sm" id="copyShare">Copy result</button> <a class="link-btn small" href="#/ranks">See today\'s leaderboard</a></div>' : "") +
      '<h3 style="margin-top:20px">By domain</h3>' + (function (h) { return isPremium() ? h : PL.lockOverlay(h, "stats", "Your score by domain"); })('<div class="bars">' +
      Object.keys(DOMAINS).filter(function (d) { return byDomain[d]; }).map(function (d) {
        var b = byDomain[d], dp = pct(b.ok, b.n);
        return '<div class="bar-row"><div><span>D' + d + " · " + esc(DOMAINS[d].name) + '</span><div class="bar"><div style="width:' + dp +
          "%;background:" + (dp / 100 >= PASS_RATE ? "var(--good)" : "var(--bad)") + '"></div></div></div>' +
          '<div class="num" style="text-align:right">' + b.ok + "/" + b.n + "</div></div>";
      }).join("") + "</div>") +
      '<div class="actions"><button class="btn" id="home">Home</button><div class="right">' +
      '<button class="btn primary" id="again">' + (s.mode === "daily" ? "Replay" : s.mode === "survival" || s.mode === "lightning" ? "Play again" : "New " + modeLabel(s.mode).toLowerCase()) + "</button></div></div></div>";

    var wrongCount = total - score;
    html += '<div class="card" id="answerReview" style="margin-top:20px"><div class="qhead"><h2 style="margin:0">Answer review</h2>' +
      '<div style="display:flex;gap:6px"><button class="btn sm' + (reviewFilter === "all" ? " primary" : "") + '" data-filter="all">All (' + total + ")</button>" +
      '<button class="btn sm' + (reviewFilter === "wrong" ? " primary" : "") + '" data-filter="wrong">Incorrect (' + wrongCount + ")</button></div></div>";
    var list = s.items.map(function (it, i) { return { it: it, i: i }; }).filter(function (x) { return reviewFilter === "all" || !isCorrect(x.it); });
    if (!list.length) html += '<p class="muted">Nothing to show — perfect score!</p>';
    list.forEach(function (x) {
      var it = x.it, q = BY_ID[it.qid], ok = isCorrect(it);
      html += '<div class="review-item"><div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">' +
        "<b>Q" + (x.i + 1) + "</b>" +
        '<span class="tag ' + (ok ? "good" : "bad") + '">' + (ok ? "Correct" : it.timedOut && !isAnswered(it) ? "Time's up" : isAnswered(it) ? "Incorrect" : "Unanswered") + "</span>" +
        '<span class="tag blue">Domain ' + q.domain + "</span>" +
        (q.topic ? '<span class="tag">' + esc(q.topic) + "</span>" : "") +
        (q.hy ? '<span class="tag hy">Frequently tested</span>' : "") +
        (q.difficulty === "hard" ? '<span class="tag hard">Hard</span>' : "") +
        (it.flagged ? '<span class="tag">⚑ Flagged</span>' : "") + "</div>" +
        '<div class="qtext">' + esc(q.q) + "</div>";
      it.order.forEach(function (orig, i) {
        var sel = it.selected.indexOf(orig) >= 0, good = q.answer.indexOf(orig) >= 0;
        var cls = "opt";
        if (good && sel) cls += " correct"; else if (good) cls += " correct missed"; else if (sel) cls += " wrong";
        html += '<button class="' + cls + '" disabled><span class="letter">' + LETTERS[i] + "</span><span>" + esc(q.options[orig]) +
          (sel ? ' <span class="muted small">— your answer</span>' : "") + "</span></button>";
      });
      html += '<div class="explain ' + (ok ? "good" : "bad") + '">' + esc(q.explanation) + changedHtml(q) + sourcesHtml(q) + "</div></div>";
    });
    html += "</div>";

    app.innerHTML = html;
    $("home").onclick = function () { session = null; navigate("/"); };
    var ns = $("nudgeSignup");
    if (ns) ns.onclick = function () { window.CAMSAccount.open("signup"); };
    $("again").onclick = function () { startSession(s.mode, s.opts); };
    var rm = $("retryMissed");
    if (rm) rm.onclick = function () {
      var ids = s.items.filter(function (it) { return !isCorrect(it); }).map(function (it) { return it.qid; });
      startSession("practice", { ids: ids.filter(function (id, i) { return ids.indexOf(id) === i; }), label: "Mistakes", retry: true });
    };
    each("[data-next]", function (b) {
      b.onclick = function () {
        var m = b.getAttribute("data-next"), prefs = load(KEYS.prefs, {});
        startSession(m, m === "review" ? { domain: "all", source: "review" } : m === "daily" ? { domain: "all" } : { domain: prefs.domain || "all", source: prefs.source || "fresh" });
      };
    });
    bindThemes(app);
    if (PL) PL.bindLocks(app);
    if (PL) PL.bindLocks(app);
    var cp = $("copyShare");
    if (cp) cp.onclick = function () {
      var txt = shareText(s);
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () { cp.textContent = "Copied ✓"; }, function () {
        var r = document.createRange(); r.selectNodeContents($("shareTxt")); var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      });
    };
    each("[data-filter]", function (b) {
      b.onclick = function () {
        var jump = !!b.closest(".learn-loop");
        reviewFilter = b.getAttribute("data-filter"); renderResults();
        var t = jump && document.getElementById("answerReview");
        if (t) t.scrollIntoView({ behavior: FX.reduced ? "auto" : "smooth" });
      };
    });
    FX.countUp(app);
    window.scrollTo(0, 0);
  }

  // ---------- Keyboard shortcuts ----------
  document.addEventListener("keydown", function (e) {
    if (!session || session.finished || e.metaKey || e.ctrlKey || e.altKey || e.defaultPrevented) return;
    if (currentPath() !== "/play") return;
    if (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    if (document.querySelector(".modal, .fx-celebrate")) return;   // keys belong to the dialog on top
    var k = e.key.toUpperCase();
    var i = LETTERS.indexOf(k);
    var opts = document.querySelectorAll(".opt:not([disabled])");
    if (i >= 0 && k.length === 1 && opts[i]) { opts[i].click(); return; }
    if (e.key === "Enter") {
      var t = e.target, el = t && t.closest ? t.closest("button, a, [role=button]") : null;
      // Let focused controls work natively. Enter on an option that is already selected confirms it.
      if (el && !(el.classList.contains("opt") && (el.classList.contains("selected") || el.disabled))) return;
      var btn = $("submit") || $("next") || $("finish");
      if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
    } else if (e.key === "ArrowRight") {
      var n = $("next");
      if (n && session.mode === "exam") n.click();
    } else if (e.key === "ArrowLeft") {
      var p = $("prev");
      if (p && !p.disabled) p.click();
    }
  });

  // ---------- Public API for learn.js / leaderboard.js ----------
  window.CAMSApp = {
    BANK: BANK, BY_ID: BY_ID, DOMAINS: DOMAINS, PASS_RATE: PASS_RATE,
    startSession: startSession, navigate: navigate, setView: setView, setTopbar: setTopbar, homeChips: homeChips,
    toast: toast, esc: esc, sourcesHtml: sourcesHtml, changedHtml: changedHtml, pct: pct, fmtTime: fmtTime, shuffle: shuffle, revealAll: revealAll, setupReveal: setupReveal,
    addViewTimer: addViewTimer, route: function (name, fn) { routes[name] = fn; }, rerender: function () { route(); }
  };

  // Plan changes (Premium activated, free quota used up) re-render the page, never an active test.
  if (PL) PL.on(function () { if (!session || session.finished) { if (currentPath() !== "/play") route(); } });

  // ---------- Boot ----------
  renderSoundBtn();
  if (!BANK.length) {
    app.innerHTML = '<div class="card"><h2>No questions loaded</h2><p class="muted">The question files in /data could not be loaded.</p></div>';
  } else {
    if (PG) PG.applyFreezes();
    // Let the scripts loaded after this one (learn, leaderboard, plan…) register their routes first.
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", route);
    else setTimeout(route, 0);
  }
})();
