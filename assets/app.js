(function () {
  "use strict";

  // ---------- Config ----------
  var QUESTIONS_PER_TEST = 30;
  var SECONDS_PER_QUESTION = 105; // real exam: 120 questions in 210 minutes
  var PASS_RATE = 75 / 120; // 62.5%
  var DOMAINS = {
    1: { name: "Risks & Methods of Financial Crime", short: "Risks & Methods", weight: 0.30 },
    2: { name: "Global AFC Frameworks, Governance & Regulations", short: "Frameworks & Regulations", weight: 0.20 },
    3: { name: "Building an AFC Compliance Program", short: "Compliance Program", weight: 0.30 },
    4: { name: "Tools & Technologies to Fight Financial Crime", short: "Tools & Technologies", weight: 0.20 }
  };
  var LETTERS = "ABCDEFGH";
  var KEYS = { session: "cams.session.v1", history: "cams.history.v1", stats: "cams.stats.v1", prefs: "cams.prefs.v1" };

  var BANK = (window.CAMS_QUESTIONS || []).filter(function (q) {
    return q && q.id && Array.isArray(q.options) && Array.isArray(q.answer) && DOMAINS[q.domain];
  });
  var BY_ID = {};
  BANK.forEach(function (q) { BY_ID[q.id] = q; });

  var app = document.getElementById("app");
  var topbarRight = document.getElementById("topbarRight");
  var session = null;
  var timerHandle = null;
  var reviewFilter = "all";

  // ---------- Storage (fails silently) ----------
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  }
  function remove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }

  // ---------- Utils ----------
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
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var s = a.slice().sort().join(","), t = b.slice().sort().join(",");
    return s === t;
  }
  function isMulti(q) { return q.answer.length > 1; }
  function isCorrect(item) { return sameSet(item.selected, BY_ID[item.qid].answer); }
  function isAnswered(item) {
    var q = BY_ID[item.qid];
    return isMulti(q) ? item.selected.length === q.answer.length : item.selected.length > 0;
  }

  // ---------- Question selection ----------
  function pickQuestions(opts) {
    var stats = load(KEYS.stats, {});
    var pool = BANK.slice();
    if (opts.domain !== "all") pool = pool.filter(function (q) { return String(q.domain) === String(opts.domain); });
    if (opts.source === "hy") pool = pool.filter(function (q) { return q.hy; });
    if (opts.source === "mistakes") {
      pool = pool.filter(function (q) { var s = stats[q.id]; return s && s.wrong > 0 && s.last === false; });
    }

    // Priority: least-seen first, then random. Keeps tests varied across attempts.
    function ranked(list) {
      return shuffle(list).sort(function (a, b) {
        var sa = stats[a.id] ? stats[a.id].seen : 0;
        var sb = stats[b.id] ? stats[b.id].seen : 0;
        return sa - sb;
      });
    }

    var n = Math.min(QUESTIONS_PER_TEST, pool.length);
    var chosen = [];
    if (opts.domain === "all" && opts.source !== "mistakes") {
      // Mirror the exam blueprint weights (30/20/30/20).
      var quotas = {};
      var assigned = 0;
      Object.keys(DOMAINS).forEach(function (d) {
        quotas[d] = Math.round(n * DOMAINS[d].weight);
        assigned += quotas[d];
      });
      quotas[1] += n - assigned;
      Object.keys(DOMAINS).forEach(function (d) {
        var sub = ranked(pool.filter(function (q) { return String(q.domain) === d; }));
        chosen = chosen.concat(sub.slice(0, quotas[d]));
      });
      if (chosen.length < n) {
        var ids = chosen.map(function (q) { return q.id; });
        var rest = ranked(pool.filter(function (q) { return ids.indexOf(q.id) < 0; }));
        chosen = chosen.concat(rest.slice(0, n - chosen.length));
      }
    } else {
      chosen = ranked(pool).slice(0, n);
    }
    return shuffle(chosen);
  }

  function startSession(mode, opts) {
    var qs = pickQuestions(opts);
    if (!qs.length) {
      alert(opts.source === "mistakes"
        ? "No missed questions to review yet for this selection. Take a test first!"
        : "No questions available for this selection.");
      return;
    }
    session = {
      mode: mode,
      opts: opts,
      startedAt: Date.now(),
      endsAt: mode === "exam" ? Date.now() + qs.length * SECONDS_PER_QUESTION * 1000 : null,
      current: 0,
      finished: false,
      items: qs.map(function (q) {
        return { qid: q.id, order: shuffle(range(q.options.length)), selected: [], submitted: false, flagged: false };
      })
    };
    persist();
    renderQuiz();
  }

  function persist() {
    if (session && !session.finished) save(KEYS.session, session);
    else remove(KEYS.session);
  }

  function restoreSession() {
    var s = load(KEYS.session, null);
    if (!s || s.finished || !Array.isArray(s.items)) return null;
    if (!s.items.every(function (it) { return BY_ID[it.qid]; })) return null;
    return s;
  }

  // ---------- Topbar / timer ----------
  function setTopbar(html) { topbarRight.innerHTML = html || ""; }

  function stopTimer() {
    if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
  }
  function startTimer() {
    stopTimer();
    tick();
    timerHandle = setInterval(tick, 1000);
  }
  function tick() {
    var el = document.getElementById("timer");
    if (!session || session.mode !== "exam" || session.finished) { stopTimer(); return; }
    var left = (session.endsAt - Date.now()) / 1000;
    if (el) {
      el.textContent = "⏱ " + fmtTime(left);
      el.classList.toggle("low", left < 300);
    }
    if (left <= 0) {
      stopTimer();
      alert("Time is up! Your exam will now be submitted.");
      finish();
    }
  }

  // ---------- Home ----------
  function renderHome() {
    stopTimer();
    session = null;
    setTopbar("");
    var prefs = load(KEYS.prefs, { domain: "all", source: "fresh" });
    var resume = restoreSession();
    var history = load(KEYS.history, []);
    var stats = load(KEYS.stats, {});
    var seenCount = Object.keys(stats).filter(function (k) { return BY_ID[k]; }).length;
    var mistakes = Object.keys(stats).filter(function (k) { return BY_ID[k] && stats[k].last === false; }).length;
    var hyCount = BANK.filter(function (q) { return q.hy; }).length;

    var html = "";
    if (resume) {
      var answered = resume.items.filter(isAnswered).length;
      html += '<div class="banner"><div><b>Test in progress</b> — ' +
        (resume.mode === "exam" ? "Mock exam" : "Practice") + ", " + answered + "/" + resume.items.length +
        ' answered.</div><div style="display:flex;gap:8px"><button class="btn sm" id="discard">Discard</button>' +
        '<button class="btn primary sm" id="resume">Resume</button></div></div>';
    }

    html += '<section class="hero"><h1>Prepare for the CAMS exam</h1>' +
      '<p class="muted">Exam-style questions built on the CAMS 7th edition blueprint (Anti-Financial Crime scope). Each test draws ' +
      QUESTIONS_PER_TEST + " questions from a bank of " + BANK.length + ", weighted like the real exam, favouring questions you have not seen yet.</p>" +
      '<div class="facts">' +
      '<div class="fact"><b>120</b><span>questions on the real exam</span></div>' +
      '<div class="fact"><b>3h30</b><span>≈ 1 min 45 s per question</span></div>' +
      '<div class="fact"><b>75/120</b><span>to pass (≈ 62.5%)</span></div>' +
      '<div class="fact"><b>4</b><span>domains · 30/20/30/20 %</span></div>' +
      "</div></section>";

    html += '<div class="card" style="margin-bottom:16px"><h3>Test settings</h3><div class="options-row">' +
      '<div class="field"><label for="domain">Domain</label><select id="domain">' +
      '<option value="all">All domains (exam weighting)</option>' +
      Object.keys(DOMAINS).map(function (d) {
        var c = BANK.filter(function (q) { return String(q.domain) === d; }).length;
        return '<option value="' + d + '">Domain ' + d + " — " + esc(DOMAINS[d].short) + " (" + c + ")</option>";
      }).join("") + "</select></div>" +
      '<div class="field"><label for="source">Questions</label><select id="source">' +
      '<option value="fresh">Unseen first (recommended)</option>' +
      '<option value="hy">Most frequently tested topics only (' + hyCount + ")</option>" +
      '<option value="mistakes">My mistakes (' + mistakes + ")</option>" +
      "</select></div></div></div>";

    html += '<div class="modes">' +
      '<div class="card mode"><span class="tag blue">Practice</span><h2>Practice mode</h2>' +
      "<ul><li>" + QUESTIONS_PER_TEST + " questions, no time limit</li><li>Correct answer + explanation right after each question</li><li>Ideal to learn and memorise</li></ul>" +
      '<button class="btn primary" id="startPractice">Start practice</button></div>' +
      '<div class="card mode"><span class="tag">Mock exam</span><h2>Mock exam mode</h2>' +
      "<ul><li>" + QUESTIONS_PER_TEST + " questions, " + Math.ceil(QUESTIONS_PER_TEST * SECONDS_PER_QUESTION / 60) + " min timer (real exam pace)</li><li>Flag questions, navigate freely</li><li>Score, domain breakdown and all answers at the very end</li></ul>" +
      '<button class="btn primary" id="startExam">Start mock exam</button></div>' +
      "</div>";

    html += '<div class="card" style="margin-top:16px"><div class="qhead" style="margin:0 0 8px"><h3 style="margin:0">Your progress</h3>' +
      (history.length ? '<button class="btn sm danger" id="reset">Reset progress</button>' : "") + "</div>" +
      '<p class="muted small" style="margin-top:0">' + seenCount + " / " + BANK.length + " questions seen · " + mistakes + " to review</p>";
    if (history.length) {
      html += '<table><thead><tr><th>Date</th><th>Mode</th><th class="hide-sm">Scope</th><th class="num">Score</th><th class="num">Result</th></tr></thead><tbody>' +
        history.slice(-10).reverse().map(function (h) {
          var p = pct(h.score, h.total);
          return "<tr><td>" + new Date(h.date).toLocaleDateString(undefined, { day: "2-digit", month: "short" }) + " " +
            new Date(h.date).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + "</td>" +
            "<td>" + (h.mode === "exam" ? "Mock exam" : "Practice") + "</td>" +
            '<td class="hide-sm">' + esc(h.scope || "All") + "</td>" +
            '<td class="num">' + h.score + "/" + h.total + " (" + p + "%)</td>" +
            '<td class="num"><span class="tag ' + (h.score / h.total >= PASS_RATE ? "good" : "bad") + '">' +
            (h.score / h.total >= PASS_RATE ? "Pass" : "Fail") + "</span></td></tr>";
        }).join("") + "</tbody></table>";
    } else {
      html += '<p class="muted small" style="margin:0">No tests taken yet.</p>';
    }
    html += "</div>";

    app.innerHTML = html;

    var domainSel = document.getElementById("domain");
    var sourceSel = document.getElementById("source");
    domainSel.value = prefs.domain || "all";
    sourceSel.value = prefs.source || "fresh";
    function opts() {
      var o = { domain: domainSel.value, source: sourceSel.value };
      save(KEYS.prefs, o);
      return o;
    }
    domainSel.onchange = opts;
    sourceSel.onchange = opts;
    function confirmOverwrite() {
      return !resume || confirm("Starting a new test will discard the test in progress. Continue?");
    }
    document.getElementById("startPractice").onclick = function () { if (confirmOverwrite()) startSession("practice", opts()); };
    document.getElementById("startExam").onclick = function () { if (confirmOverwrite()) startSession("exam", opts()); };
    if (resume) {
      document.getElementById("resume").onclick = function () { session = resume; renderQuiz(); };
      document.getElementById("discard").onclick = function () { remove(KEYS.session); renderHome(); };
    }
    var reset = document.getElementById("reset");
    if (reset) reset.onclick = function () {
      if (confirm("Erase your test history and question statistics?")) {
        remove(KEYS.history); remove(KEYS.stats); renderHome();
      }
    };
    window.scrollTo(0, 0);
  }

  // ---------- Quiz ----------
  function renderQuiz() {
    var s = session;
    var item = s.items[s.current];
    var q = BY_ID[item.qid];
    var total = s.items.length;
    var practice = s.mode === "practice";
    var revealed = practice && item.submitted;
    var multi = isMulti(q);

    if (practice) {
      var done = s.items.filter(function (it) { return it.submitted; });
      var right = done.filter(isCorrect).length;
      setTopbar('<span class="tag blue">Practice</span><span class="small muted">Score ' + right + "/" + done.length + "</span>");
    } else {
      setTopbar('<span class="tag">Mock exam</span><span class="timer" id="timer"></span>');
      startTimer();
    }

    var answeredCount = s.items.filter(practice ? function (it) { return it.submitted; } : isAnswered).length;
    var html = '<div class="card">' +
      '<div class="qhead"><div><b>Question ' + (s.current + 1) + "</b> <span class=\"muted\">of " + total + "</span></div>" +
      '<div style="display:flex;gap:6px;flex-wrap:wrap"><span class="tag blue">Domain ' + q.domain + "</span>" +
      (practice && q.topic ? '<span class="tag">' + esc(q.topic) + "</span>" : "") +
      (practice && q.hy ? '<span class="tag hy">Frequently tested</span>' : "") + "</div></div>" +
      '<div class="progress"><div style="width:' + pct(answeredCount, total) + '%"></div></div>' +
      '<div class="qtext">' + esc(q.q) + "</div>" +
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
      var correctLetters = item.order.map(function (orig, i) { return q.answer.indexOf(orig) >= 0 ? LETTERS[i] : null; })
        .filter(Boolean).join(", ");
      html += '<div class="explain ' + (ok ? "good" : "bad") + '"><div class="verdict">' +
        (ok ? "✓ Correct" : "✗ Incorrect — correct answer: " + correctLetters) + "</div>" + esc(q.explanation) + "</div>";
    }

    html += '<div class="actions">';
    html += '<button class="btn" id="prev"' + (s.current === 0 ? " disabled" : "") + ">← Previous</button>";
    html += '<div class="right">';
    if (practice) {
      if (!item.submitted) {
        html += '<button class="btn primary" id="submit"' + (isAnswered(item) ? "" : " disabled") + ">Check answer</button>";
      } else if (s.current < total - 1) {
        html += '<button class="btn primary" id="next">Next question →</button>';
      } else {
        html += '<button class="btn primary" id="finish">See results</button>';
      }
    } else {
      html += '<button class="btn" id="flag">' + (item.flagged ? "⚑ Unflag" : "⚐ Flag") + "</button>";
      if (s.current < total - 1) html += '<button class="btn primary" id="next">Next →</button>';
      else html += '<button class="btn primary" id="finish">Submit exam</button>';
    }
    html += "</div></div></div>";

    // Navigator
    html += '<div class="card" style="margin-top:16px"><div class="qhead" style="margin:0"><h3 style="margin:0">Navigator</h3>' +
      '<div style="display:flex;gap:8px"><button class="btn sm" id="quit">Quit</button>' +
      (practice ? "" : '<button class="btn sm primary" id="finish2">Submit exam</button>') + "</div></div>" +
      '<div class="navgrid">' + s.items.map(function (it, i) {
        var c = [];
        if (practice) {
          if (it.submitted) c.push("answered");
        } else if (isAnswered(it)) c.push("answered");
        if (it.flagged) c.push("flagged");
        if (i === s.current) c.push("current");
        var style = "";
        if (practice && it.submitted) {
          style = isCorrect(it)
            ? ' style="background:var(--good-soft);border-color:var(--good);color:var(--good)"'
            : ' style="background:var(--bad-soft);border-color:var(--bad);color:var(--bad)"';
        }
        return '<button data-go="' + i + '" class="' + c.join(" ") + '"' + style + ">" + (i + 1) + "</button>";
      }).join("") + "</div>" +
      '<div class="legend">' +
      (practice
        ? '<span><i style="background:var(--good-soft);border:1px solid var(--good)"></i>Correct</span><span><i style="background:var(--bad-soft);border:1px solid var(--bad)"></i>Incorrect</span>'
        : '<span><i style="background:var(--primary-soft);border:1px solid var(--primary)"></i>Answered</span><span><i style="background:var(--warn)"></i>Flagged</span>') +
      "</div></div>";

    app.innerHTML = html;
    bindQuiz(q, item);
    if (!practice) tick();
  }

  function bindQuiz(q, item) {
    var s = session;
    var multi = isMulti(q);
    Array.prototype.forEach.call(document.querySelectorAll(".opt"), function (btn) {
      btn.onclick = function () {
        var orig = Number(btn.getAttribute("data-orig"));
        var idx = item.selected.indexOf(orig);
        if (multi) {
          if (idx >= 0) item.selected.splice(idx, 1);
          else if (item.selected.length < q.answer.length) item.selected.push(orig);
          else { item.selected.shift(); item.selected.push(orig); }
        } else {
          item.selected = [orig];
        }
        persist();
        renderQuiz();
      };
    });
    function on(id, fn) { var el = document.getElementById(id); if (el) el.onclick = fn; }
    on("prev", function () { go(s.current - 1); });
    on("next", function () { go(s.current + 1); });
    on("submit", function () {
      item.submitted = true;
      recordStat(item);
      persist();
      renderQuiz();
      var ex = document.querySelector(".explain");
      if (ex && ex.scrollIntoView) ex.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    on("flag", function () { item.flagged = !item.flagged; persist(); renderQuiz(); });
    on("finish", confirmFinish);
    on("finish2", confirmFinish);
    on("quit", function () {
      if (confirm("Leave this test? You can resume it later from the home page.")) { stopTimer(); renderHome(); }
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-go]"), function (b) {
      b.onclick = function () { go(Number(b.getAttribute("data-go"))); };
    });
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
    if (s.mode === "practice") {
      var pending = s.items.filter(function (it) { return !it.submitted; }).length;
      if (pending && !confirm(pending + " question(s) not checked yet. They will count as incorrect. Finish anyway?")) return;
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

  function recordStat(item) {
    var stats = load(KEYS.stats, {});
    var st = stats[item.qid] || { seen: 0, right: 0, wrong: 0 };
    var ok = isCorrect(item);
    st.seen += 1;
    if (ok) st.right += 1; else st.wrong += 1;
    st.last = ok;
    stats[item.qid] = st;
    save(KEYS.stats, stats);
  }

  function finish() {
    var s = session;
    stopTimer();
    s.items.forEach(function (it) {
      if (s.mode === "exam" || !it.submitted) recordStat(it);
    });
    s.finished = true;
    s.finishedAt = Date.now();
    var score = s.items.filter(isCorrect).length;
    var history = load(KEYS.history, []);
    history.push({
      date: s.finishedAt,
      mode: s.mode,
      score: score,
      total: s.items.length,
      scope: (s.opts.domain === "all" ? "All" : "D" + s.opts.domain) +
        (s.opts.source === "hy" ? " · HY" : s.opts.source === "mistakes" ? " · Mistakes" : "")
    });
    save(KEYS.history, history.slice(-50));
    remove(KEYS.session);
    reviewFilter = "all";
    renderResults();
  }

  // ---------- Results ----------
  function ring(p, pass) {
    var r = 50, c = 2 * Math.PI * r;
    var color = pass ? "var(--good)" : "var(--bad)";
    return '<svg class="ring" viewBox="0 0 120 120" role="img" aria-label="Score ' + p + '%">' +
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="var(--surface-2)" stroke-width="12"/>' +
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="12" stroke-linecap="round"' +
      ' stroke-dasharray="' + (c * p / 100) + " " + c + '" transform="rotate(-90 60 60)"/>' +
      '<text x="60" y="68" text-anchor="middle">' + p + "%</text></svg>";
  }

  function renderResults() {
    var s = session;
    setTopbar('<span class="tag">' + (s.mode === "exam" ? "Mock exam" : "Practice") + " · results</span>");
    var total = s.items.length;
    var score = s.items.filter(isCorrect).length;
    var p = pct(score, total);
    var pass = score / total >= PASS_RATE;
    var elapsed = Math.round(((s.finishedAt || Date.now()) - s.startedAt) / 1000);

    var byDomain = {};
    s.items.forEach(function (it) {
      var d = BY_ID[it.qid].domain;
      byDomain[d] = byDomain[d] || { n: 0, ok: 0 };
      byDomain[d].n += 1;
      if (isCorrect(it)) byDomain[d].ok += 1;
    });

    var html = '<div class="card"><div class="score">' + ring(p, pass) + "<div>" +
      '<h1 style="margin-bottom:4px">' + (pass ? "Pass 🎉" : "Not yet — keep going") + "</h1>" +
      '<p class="muted" style="margin:0">' + score + " / " + total + " correct · pass mark ≈ " + Math.round(PASS_RATE * 100) +
      "% (75/120) · time " + fmtTime(elapsed) + "</p>" +
      '<p class="muted small" style="margin:6px 0 0">Aim for 80%+ consistently in mock exams before booking the real one.</p>' +
      "</div></div>" +
      '<h3 style="margin-top:20px">By domain</h3><div class="bars">' +
      Object.keys(DOMAINS).filter(function (d) { return byDomain[d]; }).map(function (d) {
        var b = byDomain[d], dp = pct(b.ok, b.n);
        return '<div class="bar-row"><div><span>D' + d + " · " + esc(DOMAINS[d].name) + '</span><div class="bar"><div style="width:' + dp +
          "%;background:" + (dp / 100 >= PASS_RATE ? "var(--good)" : "var(--bad)") + '"></div></div></div>' +
          '<div class="num" style="text-align:right">' + b.ok + "/" + b.n + "</div></div>";
      }).join("") + "</div>" +
      '<div class="actions"><button class="btn" id="home">Home</button><div class="right">' +
      '<button class="btn primary" id="again">New ' + (s.mode === "exam" ? "mock exam" : "practice test") + "</button></div></div></div>";

    var wrongCount = total - score;
    html += '<div class="card" style="margin-top:16px"><div class="qhead"><h2 style="margin:0">Answer review</h2>' +
      '<div style="display:flex;gap:6px"><button class="btn sm' + (reviewFilter === "all" ? " primary" : "") + '" data-filter="all">All (' + total + ")</button>" +
      '<button class="btn sm' + (reviewFilter === "wrong" ? " primary" : "") + '" data-filter="wrong">Incorrect (' + wrongCount + ")</button></div></div>";

    var list = s.items.map(function (it, i) { return { it: it, i: i }; })
      .filter(function (x) { return reviewFilter === "all" || !isCorrect(x.it); });
    if (!list.length) html += '<p class="muted">Nothing to show — perfect score!</p>';
    list.forEach(function (x) {
      var it = x.it, q = BY_ID[it.qid], ok = isCorrect(it);
      html += '<div class="review-item"><div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">' +
        "<b>Q" + (x.i + 1) + "</b>" +
        '<span class="tag ' + (ok ? "good" : "bad") + '">' + (ok ? "Correct" : isAnswered(it) ? "Incorrect" : "Unanswered") + "</span>" +
        '<span class="tag blue">Domain ' + q.domain + "</span>" +
        (q.topic ? '<span class="tag">' + esc(q.topic) + "</span>" : "") +
        (q.hy ? '<span class="tag hy">Frequently tested</span>' : "") +
        (it.flagged ? '<span class="tag">⚑ Flagged</span>' : "") + "</div>" +
        '<div class="qtext">' + esc(q.q) + "</div>";
      it.order.forEach(function (orig, i) {
        var sel = it.selected.indexOf(orig) >= 0, good = q.answer.indexOf(orig) >= 0;
        var cls = "opt";
        if (good && sel) cls += " correct";
        else if (good) cls += " correct missed";
        else if (sel) cls += " wrong";
        html += '<button class="' + cls + '" disabled><span class="letter">' + LETTERS[i] + "</span><span>" + esc(q.options[orig]) +
          (sel ? ' <span class="muted small">— your answer</span>' : "") + "</span></button>";
      });
      html += '<div class="explain ' + (ok ? "good" : "bad") + '">' + esc(q.explanation) + "</div></div>";
    });
    html += "</div>";

    app.innerHTML = html;
    document.getElementById("home").onclick = renderHome;
    document.getElementById("again").onclick = function () { startSession(s.mode, s.opts); };
    Array.prototype.forEach.call(document.querySelectorAll("[data-filter]"), function (b) {
      b.onclick = function () { reviewFilter = b.getAttribute("data-filter"); renderResults(); };
    });
    window.scrollTo(0, 0);
  }

  // ---------- Keyboard shortcuts ----------
  document.addEventListener("keydown", function (e) {
    if (!session || session.finished || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    var k = e.key.toUpperCase();
    var i = LETTERS.indexOf(k);
    var opts = document.querySelectorAll(".opt:not([disabled])");
    if (i >= 0 && k.length === 1 && opts[i]) { opts[i].click(); return; }
    if (e.key === "Enter") {
      var btn = document.getElementById("submit") || document.getElementById("next");
      if (btn && !btn.disabled) btn.click();
    } else if (e.key === "ArrowRight") {
      var n = document.getElementById("next");
      if (n && session.mode === "exam") n.click();
    } else if (e.key === "ArrowLeft") {
      var p = document.getElementById("prev");
      if (p && !p.disabled) p.click();
    }
  });

  document.getElementById("brand").onclick = function (e) {
    e.preventDefault();
    if (session && !session.finished) {
      if (!confirm("Leave this test? You can resume it later from the home page.")) return;
    }
    renderHome();
  };

  if (!BANK.length) {
    app.innerHTML = '<div class="card"><h2>No questions loaded</h2><p class="muted">The question files in /data could not be loaded.</p></div>';
  } else {
    renderHome();
  }
})();
