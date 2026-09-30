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
  var lastRendered = -1;

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
    lastRendered = -1;
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

    var prefs0 = { domain: prefs.domain || "all", source: prefs.source || "fresh" };
    var mins = Math.ceil(QUESTIONS_PER_TEST * SECONDS_PER_QUESTION / 60);
    setView("home");

    function seg(name, items, current) {
      return '<div class="seg" role="group" data-seg="' + name + '">' + items.map(function (it) {
        return '<button type="button" data-val="' + it[0] + '" aria-pressed="' + (String(it[0]) === String(current)) + '">' +
          esc(it[1]) + (it[2] != null ? '<span class="count">' + it[2] + "</span>" : "") + "</button>";
      }).join("") + "</div>";
    }
    function countDomain(d) { return BANK.filter(function (q) { return String(q.domain) === String(d); }).length; }

    var html = "";
    if (resume) {
      var answered = resume.items.filter(isAnswered).length;
      html += '<div style="padding:0 16px"><div class="banner fade-in"><div><b>Test in progress.</b> ' +
        (resume.mode === "exam" ? "Mock exam" : "Practice") + " · " + answered + " of " + resume.items.length +
        ' answered.</div><div style="display:flex;gap:8px"><button class="btn sm" id="discard">Discard</button>' +
        '<button class="btn primary sm" id="resume">Resume</button></div></div></div>';
    }

    // Hero
    html += '<section class="hero">' +
      '<div class="kicker fade-in">CAMS Exam Trainer</div>' +
      '<h1 class="fade-in" style="animation-delay:.08s">Pass CAMS.<br><span class="grad-text">With confidence.</span></h1>' +
      '<p class="lede fade-in" style="animation-delay:.16s">' + BANK.length + ' exam-style questions. Every answer verified at the source.</p>' +
      '<div class="ctas fade-in" style="animation-delay:.24s">' +
      '<button class="btn primary lg" data-start="practice">Start practising</button>' +
      '<button class="link-btn" data-start="exam">Take a mock exam</button></div>' +
      '<div class="video-frame fade-in" style="animation-delay:.32s">' +
      '<video id="heroVideo" src="assets/video/cams-trainer.mp4" poster="assets/video/poster.jpg" autoplay muted loop playsinline preload="metadata" aria-label="15-second overview of CAMS Exam Trainer"></video>' +
      '<button class="video-ctrl play" id="vidPlay" aria-label="Pause video"></button>' +
      '<button class="video-ctrl" id="vidSound" aria-label="Turn sound on"></button>' +
      "</div></section>";

    // Stats
    html += '<section class="section"><div class="inner">' +
      '<h2 class="headline reveal">Built like the real exam.</h2>' +
      '<p class="subhead reveal">Same blueprint, same pace, same pass mark. Tests are weighted across the four CAMS 7th edition domains.</p>' +
      '<div class="stats reveal">' +
      '<div class="stat"><b>120</b><span>questions on exam day</span></div>' +
      '<div class="stat"><b>3h30</b><span>about 1 min 45 s each</span></div>' +
      '<div class="stat"><b>75</b><span>correct answers to pass</span></div>' +
      '<div class="stat"><b>4</b><span>domains, weighted like the exam</span></div>' +
      "</div></div></section>";

    // Modes
    html += '<section class="section alt"><div class="inner">' +
      '<h2 class="headline reveal">Two ways to train.</h2>' +
      '<p class="subhead reveal">' + QUESTIONS_PER_TEST + ' questions per test. Learn as you go, or sit it like the real thing.</p>' +
      '<div class="settings reveal">' +
      '<div class="seg-group"><label>Domain</label>' + seg("domain", [["all", "All", null], ["1", "D1", countDomain(1)], ["2", "D2", countDomain(2)], ["3", "D3", countDomain(3)], ["4", "D4", countDomain(4)]], prefs0.domain) + "</div>" +
      '<div class="seg-group"><label>Questions</label>' + seg("source", [["fresh", "Unseen first", null], ["hy", "Most tested", hyCount], ["mistakes", "My mistakes", mistakes]], prefs0.source) + "</div>" +
      "</div>" +
      '<div class="tiles">' +
      '<div class="tile reveal"><div class="glyph">💡</div><div class="eyebrow" style="color:var(--blue)">Practice</div>' +
      "<h2>Learn every answer.</h2>" +
      '<p class="sub">The correct answer and a sourced explanation appear the moment you answer.</p>' +
      "<ul><li>No time limit</li><li>Instant feedback on the same page</li><li>Links to FATF, FinCEN, OFAC and more</li></ul>" +
      '<div class="tile-cta"><button class="btn primary" data-start="practice">Start practice</button></div></div>' +
      '<div class="tile dark reveal"><div class="glow"></div><div class="glyph">⏱</div><div class="eyebrow" style="color:#bf5af2">Mock exam</div>' +
      "<h2>Sit it for real.</h2>" +
      '<p class="sub">A ' + mins + '-minute timer at exam pace. Results and every answer at the very end.</p>' +
      "<ul><li>Flag and revisit questions</li><li>Score by domain</li><li>Full review with explanations</li></ul>" +
      '<div class="tile-cta"><button class="btn light" data-start="exam">Start mock exam</button></div></div>' +
      "</div></div></section>";

    // Progress + provenance
    html += '<section class="section"><div class="inner">' +
      '<h2 class="headline reveal">Your progress.</h2>' +
      '<p class="subhead reveal">' + seenCount + " of " + BANK.length + " questions seen · " + mistakes + " to review</p>" +
      '<div class="card reveal" style="margin-top:40px">';
    if (history.length) {
      html += '<table><thead><tr><th>Date</th><th>Mode</th><th class="hide-sm">Scope</th><th class="num">Score</th><th class="num">Result</th></tr></thead><tbody>' +
        history.slice(-10).reverse().map(function (h) {
          var p = pct(h.score, h.total);
          var ok = h.score / h.total >= PASS_RATE;
          return "<tr><td>" + new Date(h.date).toLocaleDateString(undefined, { day: "2-digit", month: "short" }) + " " +
            new Date(h.date).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + "</td>" +
            "<td>" + (h.mode === "exam" ? "Mock exam" : "Practice") + "</td>" +
            '<td class="hide-sm">' + esc(h.scope || "All") + "</td>" +
            '<td class="num">' + h.score + "/" + h.total + " · " + p + "%</td>" +
            '<td class="num"><span class="tag ' + (ok ? "good" : "bad") + '">' + (ok ? "Pass" : "Fail") + "</span></td></tr>";
        }).join("") + "</tbody></table>" +
        '<div style="text-align:right;margin-top:12px"><button class="btn sm danger" id="reset">Reset progress</button></div>';
    } else {
      html += '<p class="muted" style="margin:0;text-align:center">No tests yet. Your scores will appear here.</p>';
    }
    html += "</div>" +
      '<p class="small muted reveal" style="text-align:center;max-width:680px;margin:40px auto 0">These are original exam-style questions, not real ACAMS items. Every answer was checked against primary sources (FATF, FinCEN, OFAC, eCFR, Federal Reserve, Wolfsberg, EU and UK law) as of September 2026, and each explanation links to its source.</p>' +
      "</div></section>";

    app.innerHTML = html;

    var current = { domain: prefs0.domain, source: prefs0.source };
    function opts() { save(KEYS.prefs, current); return { domain: current.domain, source: current.source }; }
    Array.prototype.forEach.call(document.querySelectorAll("[data-seg]"), function (group) {
      var name = group.getAttribute("data-seg");
      Array.prototype.forEach.call(group.querySelectorAll("button"), function (b) {
        b.onclick = function () {
          current[name] = b.getAttribute("data-val");
          Array.prototype.forEach.call(group.querySelectorAll("button"), function (x) { x.setAttribute("aria-pressed", String(x === b)); });
          opts();
        };
      });
    });
    function confirmOverwrite() {
      return !resume || confirm("Starting a new test will discard the test in progress. Continue?");
    }
    Array.prototype.forEach.call(document.querySelectorAll("[data-start]"), function (b) {
      b.onclick = function () { if (confirmOverwrite()) startSession(b.getAttribute("data-start"), opts()); };
    });
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
    setupVideo();
    setupReveal();
    window.scrollTo(0, 0);
  }

  var ICONS = {
    play: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M6 4.2v11.6c0 .6.7 1 1.2.7l9.3-5.8c.5-.3.5-1.1 0-1.4L7.2 3.5C6.7 3.2 6 3.6 6 4.2z"/></svg>',
    pause: '<svg viewBox="0 0 20 20" fill="currentColor"><rect x="5" y="4" width="3.4" height="12" rx="1"/><rect x="11.6" y="4" width="3.4" height="12" rx="1"/></svg>',
    muted: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5h3l4-3.5v12l-4-3.5H3z" fill="currentColor"/><path d="M13.5 7.5l4 5M17.5 7.5l-4 5"/></svg>',
    sound: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5h3l4-3.5v12l-4-3.5H3z" fill="currentColor"/><path d="M13.2 7.2a4 4 0 010 5.6M15.5 5a7 7 0 010 10"/></svg>'
  };

  function setupVideo() {
    var v = document.getElementById("heroVideo");
    if (!v) return;
    var play = document.getElementById("vidPlay"), snd = document.getElementById("vidSound");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { v.removeAttribute("autoplay"); v.pause(); }
    function sync() {
      play.innerHTML = v.paused ? ICONS.play : ICONS.pause;
      play.setAttribute("aria-label", v.paused ? "Play video" : "Pause video");
      snd.innerHTML = v.muted ? ICONS.muted : ICONS.sound;
      snd.setAttribute("aria-label", v.muted ? "Turn sound on" : "Turn sound off");
    }
    play.onclick = function () { if (v.paused) v.play(); else v.pause(); };
    snd.onclick = function () {
      v.muted = !v.muted;
      if (!v.muted) { v.currentTime = 0; v.play(); }
      sync();
    };
    v.addEventListener("play", sync);
    v.addEventListener("pause", sync);
    v.addEventListener("volumechange", sync);
    sync();
  }

  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    Array.prototype.forEach.call(els, function (e) { io.observe(e); });
  }

  function setView(name) {
    document.body.className = name;
    app.className = name === "home" ? "container wide" : "container";
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
    var animate = lastRendered !== s.current;
    lastRendered = s.current;
    setView("quiz");
    var html = '<div class="card' + (animate ? " fade-in" : "") + '">' +
      '<div class="qhead"><div class="qcount"><b>Question ' + (s.current + 1) + "</b> of " + total + "</div>" +
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
        (ok ? "✓ Correct" : "✗ Incorrect — correct answer: " + correctLetters) + "</div>" + esc(q.explanation) + sourcesHtml(q) + "</div>";
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
    html += '<div class="card" style="margin-top:20px"><div class="qhead" style="margin:0"><h3 style="margin:0">Navigator</h3>' +
      '<div style="display:flex;gap:8px"><button class="btn sm" id="quit">Quit</button>' +
      (practice ? "" : '<button class="btn sm primary" id="finish2">Submit exam</button>') + "</div></div>" +
      '<div class="navgrid">' + s.items.map(function (it, i) {
        var c = [];
        if (practice) {
          if (it.submitted) c.push("answered");
        } else if (isAnswered(it)) c.push("answered");
        if (it.flagged) c.push("flagged");
        if (i === s.current) c.push("current");
        if (practice && it.submitted) c.push(isCorrect(it) ? "ok" : "ko");
        return '<button data-go="' + i + '" class="' + c.join(" ") + '">' + (i + 1) + "</button>";
      }).join("") + "</div>" +
      '<div class="legend">' +
      (practice
        ? '<span><i style="background:var(--good)"></i>Correct</span><span><i style="background:var(--bad)"></i>Incorrect</span>'
        : '<span><i style="background:var(--blue)"></i>Answered</span><span><i style="background:var(--warn)"></i>Flagged</span>') +
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
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="rgba(118,118,128,.16)" stroke-width="10"/>' +
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="10" stroke-linecap="round" class="val"' +
      ' stroke-dasharray="' + (c * p / 100) + " " + c + '" transform="rotate(-90 60 60)"/>' +
      '<text x="60" y="68" text-anchor="middle">' + p + "%</text></svg>";
  }

  function renderResults() {
    var s = session;
    setView("quiz");
    lastRendered = -1;
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

    var html = '<div class="card fade-in"><div class="score">' + ring(p, pass) + "<div>" +
      '<div class="result-title">' + (pass ? "You passed." : "Not yet. Keep going.") + "</div>" +
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
    html += '<div class="card" style="margin-top:20px"><div class="qhead"><h2 style="margin:0">Answer review</h2>' +
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
      html += '<div class="explain ' + (ok ? "good" : "bad") + '">' + esc(q.explanation) + sourcesHtml(q) + "</div></div>";
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
