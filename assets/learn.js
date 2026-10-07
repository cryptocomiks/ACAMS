/* CAMS Exam Trainer — Learn tab: course modules, lessons, flashcards (spaced repetition) and the Numbers sprint. */
(function () {
  "use strict";
  var A = window.CAMSApp, PG = window.CAMSProgress, FX = window.CAMSFX;
  if (!A) return;
  var esc = A.esc, pct = A.pct;
  var app = document.getElementById("app");
  var DOMAIN_COLORS = { 1: "d1", 2: "d2", 3: "d3", 4: "d4" };
  var learnFilter = { domain: "all", q: "" };
  var token = 0;
  var PL = window.CAMSPlan || null;
  function lessonOpen(id) { return !PL || PL.lessonFree(id); }
  // Starts a new view. The returned check is false once the user has moved on (new view or another page),
  // so pending timeouts, observers and listeners never write into a page they don't own.
  function newView() {
    var t = ++token, h = location.hash;
    return function () { return t === token && location.hash === h; };
  }

  function course() {
    return (window.CAMS_COURSE || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  }
  function byId(id) { return course().filter(function (m) { return m.id === id; })[0]; }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
  function $(id) { return document.getElementById(id); }
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  function stats() { try { return JSON.parse(localStorage.getItem("cams.stats.v1")) || {}; } catch (e) { return {}; } }
  function modStats(m, st) {
    var ids = (m.questionIds || []).filter(function (id) { return A.BY_ID[id]; });
    var n = 0, ok = 0, seen = 0;
    ids.forEach(function (id) { var s = st[id]; if (s) { seen++; n += s.seen; ok += s.right; } });
    return { total: ids.length, seen: seen, acc: n ? Math.round((ok / n) * 100) : null, ids: ids };
  }
  function words(m) {
    var t = 0;
    (m.sections || []).forEach(function (s) {
      (s.p || []).concat(s.list || [], s.tip ? [s.tip] : [], s.remember ? [s.remember] : []).forEach(function (x) { t += String(x).split(/\s+/).length; });
    });
    return t;
  }
  function allCards(mods) {
    var out = [];
    mods.forEach(function (m) { (m.cards || []).forEach(function (c, i) { out.push({ id: m.id + ":" + i, m: m, front: c.front, back: c.back }); }); });
    return out;
  }
  function allNumbers() {
    var out = [];
    course().forEach(function (m) { (m.numbers || []).forEach(function (n, i) { if (n && n.q && n.a && n.wrong && n.wrong.length >= 3) out.push({ id: m.id + ":" + i, m: m, q: n.q, a: n.a, wrong: n.wrong.slice(0, 3) }); }); });
    return out;
  }
  function empty() {
    A.setView("page");
    app.innerHTML = '<div class="page-head fade-in"><h1>Learn.</h1><p class="muted">The course is being prepared. Check back soon.</p></div>';
  }

  // ---------- Course index ----------
  function renderIndex() {
    var mods = course();
    A.setView("page");
    A.setTopbar(A.homeChips());
    if (!mods.length) return empty();
    var read = PG.lessons(), st = stats();
    var readCount = mods.filter(function (m) { return read[m.id]; }).length;
    var cardsN = allCards(mods).length, numsN = allNumbers().length, cheat = byId("m13");
    var hy = [];
    mods.forEach(function (m) { (m.mostTested || []).forEach(function (t) { hy.push({ t: t, m: m }); }); });

    var html = '<div class="page-head fade-in"><h1>Learn.</h1><p class="muted">' + mods.length + " lessons written for the CAMS 7th edition. Read one, then drill it. " +
      readCount + "/" + mods.length + ' read.</p><div class="xpbar big"><div style="width:' + pct(readCount, mods.length) + '%"></div></div></div>' +
      '<div class="learn-drills fade-in">' +
      '<a class="drill" href="#/cards/all"><span class="dr-i">🃏</span><span><b>Flashcards</b><span>' + cardsN + " cards · spaced repetition</span></span></a>" +
      '<a class="drill" href="#/sprint"><span class="dr-i">🔢</span><span><b>Numbers sprint</b><span>' + numsN + " thresholds and deadlines · 60 s</span></span></a>" +
      (cheat ? '<a class="drill" href="#/learn/m13"><span class="dr-i">' + cheat.icon + "</span><span><b>" + esc(cheat.title) + "</b><span>" + esc(cheat.summary || "") + "</span></span></a>" : "") + "</div>" +
      '<div class="learn-tools fade-in"><input id="learnSearch" type="search" placeholder="Search the course (e.g. PEP, 314(b), travel rule)" value="' + esc(learnFilter.q) + '" aria-label="Search the course">' +
      '<div class="seg" role="group" data-lf="domain">' + [["all", "All"], ["1", "D1"], ["2", "D2"], ["3", "D3"], ["4", "D4"]].map(function (d) {
        return '<button type="button" data-val="' + d[0] + '" aria-pressed="' + (learnFilter.domain === d[0]) + '">' + d[1] + "</button>";
      }).join("") + "</div></div>" +
      '<div class="modules" id="modList"></div>';

    html += '<div class="card hy-card"><div class="dlabel">⭐ Most tested across the syllabus</div><ul class="hy-list">' +
      hy.slice(0, 40).map(function (x) { return '<li><a href="#/learn/' + x.m.id + '"><span class="hy-ic">' + x.m.icon + "</span>" + md(x.t) + "</a></li>"; }).join("") + "</ul></div>";
    app.innerHTML = html;

    function list() {
      var q = learnFilter.q.trim().toLowerCase();
      var shown = mods.filter(function (m) {
        if (learnFilter.domain !== "all" && String(m.domain) !== learnFilter.domain) return false;
        if (!q) return true;
        var blob = [m.title, m.summary].concat(m.mostTested || []).concat((m.sections || []).map(function (s) {
          return [s.h].concat(s.p || [], s.list || [], s.tip || "", s.remember || "", s.table ? s.table.rows.map(function (r) { return r.join(" "); }) : []).join(" ");
        })).join(" ").toLowerCase();
        return blob.indexOf(q) >= 0;
      });
      $("modList").innerHTML = shown.length ? shown.map(function (m, i) {
        var ms = modStats(m, st), isRead = !!read[m.id];
        return '<a class="module reveal in ' + (DOMAIN_COLORS[m.domain] || "") + (isRead ? " read" : "") + '" href="#/learn/' + m.id + '" style="animation-delay:' + i * 30 + 'ms">' +
          '<div class="mod-top"><span class="mod-icon" aria-hidden="true">' + m.icon + '</span><span class="tag">' + (m.id === "m00" ? "Exam" : "Domain " + m.domain) + "</span>" +
          (isRead ? '<span class="tag good">✓ Read</span>' : "") + (PL && !PL.premium() ? (lessonOpen(m.id) ? '<span class="tag good">Free</span>' : '<span class="tag">👑 Premium</span>') : "") + "</div>" +
          '<div class="mod-title">' + esc(m.title) + '</div><div class="mod-sum">' + esc(m.summary || "") + "</div>" +
          '<div class="mod-meta"><span>⏱ ' + (m.minutes || Math.max(3, Math.round(words(m) / 200))) + " min</span>" +
          ((m.cards || []).length ? "<span>🃏 " + m.cards.length + "</span>" : "") +
          (ms.total ? "<span>❓ " + ms.seen + "/" + ms.total + (ms.acc != null ? " · " + ms.acc + "%" : "") + "</span>" : "") + "</div>" +
          (ms.total ? '<div class="xpbar"><div style="width:' + pct(ms.seen, ms.total) + '%"></div></div>' : "") + "</a>";
      }).join("") : '<p class="muted">No lesson matches your search.</p>';
    }
    list();
    var inp = $("learnSearch");
    inp.oninput = function () { learnFilter.q = inp.value; list(); };
    each("[data-lf] button", function (b) {
      b.onclick = function () {
        learnFilter.domain = b.getAttribute("data-val");
        each("[data-lf] button", function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        list();
      };
    });
    window.scrollTo(0, 0);
  }

  // ---------- Lesson ----------
  function renderLesson(id) {
    var mods = course(), m = byId(id);
    if (!m) return renderIndex();
    var alive = newView();
    A.setView("page lesson");
    A.setTopbar(A.homeChips());
    var idx = mods.indexOf(m), prev = mods[idx - 1], next = mods[idx + 1];
    var st = stats(), ms = modStats(m, st), read = PG.lessons();
    var html = '<div class="read-progress" aria-hidden="true"><div id="readBar"></div></div>' +
      '<article class="lesson fade-in">' +
      '<a class="back" href="#/learn">‹ All lessons</a>' +
      '<div class="lesson-head ' + (DOMAIN_COLORS[m.domain] || "") + '"><div class="lh-icon" aria-hidden="true">' + m.icon + "</div>" +
      '<div><div class="dlabel">' + (m.id === "m00" ? "Exam essentials" : "Domain " + m.domain + " · " + esc(A.DOMAINS[m.domain].short)) + " · " + (m.minutes || Math.max(3, Math.round(words(m) / 200))) + " min read</div>" +
      "<h1>" + esc(m.title) + '</h1><p class="lede">' + md(m.summary || "") + "</p></div></div>";
    if ((m.mostTested || []).length) {
      html += '<div class="callout most"><div class="co-h">⭐ Most tested in this lesson</div><ul>' + m.mostTested.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("") + "</ul></div>";
    }
    html += '<nav class="toc" aria-label="Lesson sections">' + (m.sections || []).map(function (s, i) { return '<a href="#" data-sec="' + i + '">' + esc(s.h) + "</a>"; }).join("") + "</nav>";
    var open = lessonOpen(m.id);
    (open ? m.sections || [] : (m.sections || []).slice(0, 1)).forEach(function (s, i) {
      html += '<section class="lsec" id="sec' + i + '"><h2>' + esc(s.h) + "</h2>";
      (s.p || []).forEach(function (p) { html += "<p>" + md(p) + "</p>"; });
      if (s.list && s.list.length) html += "<ul>" + s.list.map(function (li) { return "<li>" + md(li) + "</li>"; }).join("") + "</ul>";
      if (s.table && s.table.head) {
        html += '<div class="tbl-wrap"><table class="ltable"><thead><tr>' + s.table.head.map(function (h) { return "<th>" + md(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          (s.table.rows || []).map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      }
      if (s.tip) html += '<div class="callout tip"><div class="co-h">💡 Exam tip</div>' + md(s.tip.replace(/^Exam tip:\s*/i, "")) + "</div>";
      if (s.remember) html += '<div class="callout remember"><div class="co-h">🧠 Remember</div>' + md(s.remember) + "</div>";
      html += "</section>";
    });
    if (!open) html += '<div class="lesson-lock"><div class="ll-fade"></div><div class="card ll-card"><div class="pw-crown" aria-hidden="true">👑</div><h2>Keep reading with Premium</h2>' +
      '<p class="muted">' + ((m.sections || []).length - 1) + " more sections, " + (m.cards || []).length + " flashcards and the numbers sprint for this lesson. Two lessons are free: " +
      '<a href="#/learn/m00">How the CAMS exam works</a> and <a href="#/learn/m01">Money laundering</a>.</p><button class="btn primary" data-paywall="lesson">Unlock the full course</button></div></div>';
    else html += '<div id="lessonEnd"></div>' +
      '<div class="card practice-panel"><div class="dlabel">Lock it in</div><h2>' + (read[m.id] ? "Lesson complete ✓" : "Finish the lesson to earn +" + PG.XP.lesson + " XP") + "</h2>" +
      '<div class="pp-actions">' +
      (ms.total ? '<button class="btn primary" id="lpPractice">Practise ' + Math.min(30, ms.total) + " questions" + (ms.acc != null ? " · " + ms.acc + "% so far" : "") + "</button>" : "") +
      ((m.cards || []).length ? '<a class="btn" href="#/cards/' + m.id + '">🃏 ' + m.cards.length + " flashcards</a>" : "") +
      ((m.numbers || []).length ? '<a class="btn" href="#/sprint/' + m.id + '">🔢 Numbers sprint</a>' : "") +
      (!read[m.id] ? '<button class="btn" id="lpRead">Mark as read</button>' : "") + "</div></div>";
    if ((m.sources || []).length) {
      html += '<div class="lsources"><div class="dlabel">Sources</div><ul>' + m.sources.map(function (s) {
        return /^https:\/\//.test(s.url || "") ? '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label || s.url) + "</a></li>" : "";
      }).join("") + "</ul></div>";
    }
    html += '<div class="lesson-nav">' + (prev ? '<a class="ln prev" href="#/learn/' + prev.id + '"><span>‹ Previous</span><b>' + prev.icon + " " + esc(prev.title) + "</b></a>" : "<span></span>") +
      (next ? '<a class="ln next" href="#/learn/' + next.id + '"><span>Next ›</span><b>' + next.icon + " " + esc(next.title) + "</b></a>" : "<span></span>") + "</div></article>";
    app.innerHTML = html;
    if (PL) PL.bindLocks(app);

    each(".toc a", function (a) {
      a.onclick = function (e) {
        e.preventDefault();
        var t = $("sec" + a.getAttribute("data-sec"));
        if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: FX.reduced ? "auto" : "smooth" });
      };
    });
    var pp = $("lpPractice");
    if (pp) pp.onclick = function () { A.startSession("practice", { domain: "all", source: "topic", ids: ms.ids, label: m.title }); };
    function markRead() {
      if (!alive() || !PG.lessonRead(m.id)) return;
      FX.play("quest"); FX.confetti({ count: 60 });
      var b = $("lpRead"); if (b) b.remove();
      var h = document.querySelector(".practice-panel h2"); if (h) h.textContent = "Lesson complete ✓";
    }
    var rb = $("lpRead");
    if (rb) rb.onclick = markRead;
    var bar = $("readBar");
    function onScroll() {
      if (!alive()) { window.removeEventListener("scroll", onScroll); return; }
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 100) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if ("IntersectionObserver" in window && !read[m.id]) {
      var io = new IntersectionObserver(function (en) {
        if (!alive()) { io.disconnect(); return; }
        en.forEach(function (x) { if (x.isIntersecting) { markRead(); io.disconnect(); } });
      });
      // Must actually spend a moment reading before reaching the end counts.
      A.addViewTimer(setTimeout(function () { var end = $("lessonEnd"); if (alive() && end) io.observe(end); else io.disconnect(); }, 8000));
    }
    window.scrollTo(0, 0);
  }

  // ---------- Flashcards ----------
  function renderCards(which) {
    var mods = course();
    if (!mods.length) return empty();
    var src = which && which !== "all" ? mods.filter(function (m) { return m.id === which; }) : mods;
    var limited = PL && !PL.premium();
    if (limited) {
      if (which && which !== "all" && !lessonOpen(which)) return lockedPage("🃏", "Flashcards for this lesson are Premium", "cards");
      src = src.filter(function (m) { return lessonOpen(m.id); });   // free plan: decks of the free lessons
    }
    var cards = allCards(src);
    if (!cards.length) return renderIndex();
    var map = {};
    cards.forEach(function (c) { map[c.id] = c; });
    var ordered = PG.orderDeck(cards.map(function (c) { return c.id; }));
    var deck = ordered.order.slice(0, 20).map(function (id) { return map[id]; });
    var i = 0, flipped = false, grading = false, results = { good: 0, again: 0, xp: 0 };
    var practiceOnly = !ordered.due && !ordered.fresh;   // nothing scheduled: free practice, schedule unchanged
    var alive = newView();
    A.setView("page cards-view");
    A.setTopbar('<span class="tag blue">🃏 Flashcards</span>');
    var title = which && which !== "all" ? src[0].icon + " " + src[0].title : limited ? "Free lessons (Premium unlocks all decks)" : "All lessons";

    function view() {
      if (i >= deck.length) return done();
      var c = deck[i];
      app.innerHTML = '<div class="cards-page"><a class="back" href="' + (which && which !== "all" ? "#/learn/" + which : "#/learn") + '">‹ Back</a>' +
        '<div class="cards-head"><div><div class="dlabel">Flashcards · ' + esc(title) + '</div><div class="muted small">' + (practiceOnly ? "Nothing due · free practice (schedule unchanged)" : ordered.due + " due · " + ordered.fresh + " new") + " · card " + (i + 1) + " of " + deck.length + "</div></div>" +
        '<div class="cards-score"><span class="good">✓ ' + results.good + '</span><span class="bad">↺ ' + results.again + "</span></div></div>" +
        '<div class="progress"><div style="width:' + pct(i, deck.length) + '%"></div></div>' +
        '<div class="flip-wrap"><button class="flip' + (flipped ? " on" : "") + '" id="flipCard" aria-label="' + (flipped ? "Show the question again" : "Reveal the answer") + '">' +
        '<div class="face front"' + (flipped ? ' aria-hidden="true"' : "") + '><span class="fc-tag">' + c.m.icon + " " + esc(c.m.title) + '</span><div class="fc-text">' + md(c.front) + '</div><span class="fc-hint">Tap or press Space to reveal</span></div>' +
        '<div class="face back"' + (flipped ? "" : ' aria-hidden="true"') + '><span class="fc-tag">Answer</span><div class="fc-text">' + md(c.back) + "</div></div></button></div>" +
        '<div class="sr-only" aria-live="polite" id="cardLive"></div>' +
        '<div class="cards-actions' + (flipped ? " show" : "") + '"><button class="btn again" id="cAgain">↺ Again <kbd>1</kbd></button><button class="btn primary" id="cGood">✓ Got it <kbd>2</kbd></button></div></div>';
      $("flipCard").onclick = flip;
      $("cAgain").onclick = function () { grade(false); };
      $("cGood").onclick = function () { grade(true); };
      swipe($("flipCard"));
    }
    function flip() {
      if (grading || i >= deck.length) return;
      flipped = !flipped;
      FX.play("flip");
      var f = $("flipCard");
      if (f) {
        f.classList.toggle("on", flipped);
        f.setAttribute("aria-label", flipped ? "Show the question again" : "Reveal the answer");
        f.querySelector(".front").setAttribute("aria-hidden", String(flipped));
        f.querySelector(".back").setAttribute("aria-hidden", String(!flipped));
      }
      var live = $("cardLive"); if (live) live.textContent = flipped ? "Answer: " + (f ? f.querySelector(".back .fc-text").textContent : "") : "";
      var a = document.querySelector(".cards-actions"); if (a) a.classList.toggle("show", flipped);
    }
    function grade(ok) {
      if (grading || i >= deck.length) return;
      if (!flipped) return flip();
      grading = true;   // one grade per card, even on a double press
      var st = PG.cardState()[deck[i].id];
      if (!st || st.due <= Date.now()) results.xp += PG.XP.card;   // early re-practice earns nothing
      PG.cardUpdate(deck[i].id, ok);
      if (ok) { results.good++; FX.play("correct"); } else { results.again++; FX.play("wrong"); deck.push(deck[i]); }
      var f = $("flipCard");
      if (f && !FX.reduced) { f.classList.add(ok ? "out-right" : "out-left"); setTimeout(function () { if (alive()) next(); }, 260); } else next();
    }
    function next() { i++; flipped = false; grading = false; view(); }
    function swipe(el) {
      var x0 = null;
      el.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
      el.addEventListener("pointerup", function (e) {
        if (x0 == null) return;
        var dx = e.clientX - x0; x0 = null;
        if (flipped && Math.abs(dx) > 60) { e.preventDefault(); grade(dx > 0); }
      });
    }
    function done() {
      FX.play("end");
      if (results.good >= 10) FX.confetti({ count: 80 });
      app.innerHTML = '<div class="cards-page"><div class="card fade-in" style="text-align:center"><div style="font-size:54px">🃏</div><div class="result-title">Deck done.</div>' +
        '<p class="muted">' + results.good + " known · " + results.again + " to see again · +" + results.xp + " XP</p>" +
        '<p class="small muted">' + (practiceOnly ? "Free practice: your review schedule did not change. " : "") + "Cards you know come back after a few days, then at growing intervals up to 35 days. Missed ones come back in 10 minutes.</p>" +
        '<div class="actions" style="justify-content:center"><a class="btn" href="#/learn">Back to the course</a><button class="btn primary" id="cMore">Another round</button></div></div></div>';
      $("cMore").onclick = function () { renderCards(which); };
    }
    keyHandler = function (e) {
      if (!alive() || i >= deck.length) return;
      var t = e.target, ctl = t && t.closest ? t.closest("a, button, [role=button]") : null;
      if (e.key === " " || e.key === "Enter") {
        if (ctl && ctl.id !== "flipCard") return;   // let focused links and buttons work normally
        e.preventDefault();
        flip();
      }
      else if ((e.key === "1" || e.key === "ArrowLeft") && flipped) grade(false);
      else if ((e.key === "2" || e.key === "ArrowRight") && flipped) grade(true);
    };
    view();
    window.scrollTo(0, 0);
  }

  // ---------- Numbers sprint ----------
  var sprintTimer = null;
  function lockedPage(icon, title, reason) {
    newView();
    A.setView("page");
    A.setTopbar(A.homeChips());
    app.innerHTML = '<div class="sprint-page"><a class="back" href="#/learn">‹ Back</a><div class="card sprint-intro fade-in"><div class="sp-icon">' + icon + "</div><h1>" + esc(title) + "</h1>" +
      '<p class="muted">Premium unlocks every lesson, all flashcards and the 60-second numbers sprint.</p><button class="btn primary lg" data-paywall="' + reason + '">👑 Unlock with Premium</button></div></div>';
    PL.bindLocks(app);
  }
  function renderSprint(which) {
    if (PL && !PL.premium()) return lockedPage("🔢", "Numbers sprint is Premium", "sprint");
    var nums = allNumbers();
    if (which) { var f = nums.filter(function (n) { return n.m.id === which; }); if (f.length >= 4) nums = f; }
    if (!nums.length) return empty();
    A.setView("page sprint-view");
    A.setTopbar('<span class="tag blue">🔢 Numbers sprint</span>');
    var best = (PG.gam().records || {}).sprint;
    var alive = newView();
    app.innerHTML = '<div class="sprint-page"><a class="back" href="#/learn">‹ Back</a><div class="card sprint-intro fade-in"><div class="sp-icon">🔢</div><h1>Numbers sprint</h1>' +
      '<p class="muted">60 seconds. Thresholds, deadlines, percentages and recommendation numbers. As many as you can.</p>' +
      '<div class="sp-best">' + (best != null ? "🏆 Your best: <b>" + best + "</b>" : "No record yet") + " · " + nums.length + " facts in the pool</div>" +
      '<button class="btn primary lg" id="spGo">Start</button></div></div>';
    $("spGo").onclick = function () { countdown(alive, function () { run(nums, alive); }); };
  }
  function countdown(alive, cb) {
    var n = 3;
    function show() {
      if (!alive()) return;
      app.innerHTML = '<div class="sprint-page"><div class="count-big" aria-live="assertive">' + (n || "Go!") + "</div></div>";
      FX.play(n ? "tick" : "start");
      if (n-- > 0) setTimeout(show, 700); else setTimeout(function () { if (alive()) cb(); }, 500);
    }
    show();
  }
  function run(nums, alive) {
    var DUR = 60000, t0 = Date.now(), score = 0, streakN = 0, missed = [], bag = [], cur = null, curOpts = [], locked = false;
    function draw() { if (!bag.length) bag = A.shuffle(nums); return bag.pop(); }
    function view() {
      cur = draw();
      var opts = curOpts = A.shuffle([cur.a].concat(cur.wrong));
      app.innerHTML = '<div class="sprint-page"><div class="sp-top"><div class="sp-time"><div id="spBar"></div></div><div class="sp-stats"><span id="spSec">60</span><span>Score <b id="spScore">' + score + "</b></span>" +
        (streakN >= 3 ? '<span class="combo-mini">🔥 ' + streakN + "</span>" : "") + "</div></div>" +
        '<div class="card sp-q fade-in"><div class="fc-tag">' + cur.m.icon + " " + esc(cur.m.title) + '</div><div class="sp-prompt">' + md(cur.q) + '</div><div class="sp-opts">' +
        opts.map(function (o, k) { return '<button class="sp-opt" data-k="' + k + '"><kbd>' + (k + 1) + "</kbd>" + md(o) + "</button>"; }).join("") + "</div></div></div>";
      each(".sp-opt", function (b, k) { b.onclick = function () { pick(b, opts[Number(b.getAttribute("data-k"))]); }; });
      tickUi();
    }
    function pick(b, val) {
      if (locked) return;
      locked = true;
      var ok = val === cur.a;
      if (ok) { score++; streakN++; FX.play(streakN >= 3 ? "combo" : "correct", streakN); b.classList.add("good"); }
      else {
        streakN = 0; FX.play("wrong"); b.classList.add("bad"); missed.push(cur);
        each(".sp-opt", function (x) { if (curOpts[Number(x.getAttribute("data-k"))] === cur.a) x.classList.add("good"); });
      }
      setTimeout(function () { locked = false; if (alive() && Date.now() - t0 < DUR) view(); }, ok ? 250 : 900);
    }
    function tickUi() {
      var left = Math.max(0, DUR - (Date.now() - t0));
      var bar = $("spBar"), sec = $("spSec"), sc = $("spScore");
      if (bar) bar.style.width = (left / DUR) * 100 + "%";
      if (sec) sec.textContent = Math.ceil(left / 1000) + "s";
      if (sc) sc.textContent = score;
    }
    keyHandler = function (e) {
      if (!alive()) return;
      var k = parseInt(e.key, 10);
      if (k >= 1 && k <= 4) { var b = document.querySelectorAll(".sp-opt")[k - 1]; if (b) b.click(); }
    };
    clearInterval(sprintTimer);
    sprintTimer = setInterval(function () {
      if (!alive()) { clearInterval(sprintTimer); return; }
      tickUi();
      var left = DUR - (Date.now() - t0);
      if (left <= 5000 && left > 0 && Math.ceil(left / 1000) !== tickUi.last) { tickUi.last = Math.ceil(left / 1000); FX.play("tick"); }
      if (left <= 0) { clearInterval(sprintTimer); end(); }
    }, 100);
    A.addViewTimer(sprintTimer);
    view();
    function end() {
      var r = PG.onSprint(score);
      PG.checkBadges({ bank: A.BANK });
      FX.play("end");
      if (r.record) FX.confetti();
      var uniq = [], seen = {};
      missed.forEach(function (m) { if (!seen[m.id]) { seen[m.id] = 1; uniq.push(m); } });
      app.innerHTML = '<div class="sprint-page"><div class="card fade-in" style="text-align:center">' + (r.record ? '<div class="record-flag">🏆 New personal record</div>' : "") +
        '<div class="count-big small">' + score + '</div><div class="result-title">correct in 60 seconds</div><p class="muted">+' + r.xp + " XP</p>" +
        (uniq.length ? '<div class="missed"><div class="dlabel">Review the ones you missed</div>' + uniq.map(function (m) { return '<div class="miss"><span>' + md(m.q) + "</span><b>" + md(m.a) + "</b></div>"; }).join("") + "</div>" : "") +
        '<div class="actions" style="justify-content:center"><a class="btn" href="#/learn">Back to the course</a><button class="btn primary" id="spAgain">Play again</button></div></div></div>';
      $("spAgain").onclick = function () { countdown(alive, function () { run(nums, alive); }); };
    }
  }

  var keyHandler = null;
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey || e.defaultPrevented) return;
    if (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    if (document.querySelector(".modal, .fx-celebrate")) return;
    if (keyHandler) keyHandler(e);
  });

  A.route("learn", function (parts) { keyHandler = null; if (parts[0]) renderLesson(parts[0]); else renderIndex(); });
  A.route("cards", function (parts) { keyHandler = null; renderCards(parts[0] || "all"); });
  A.route("sprint", function (parts) { keyHandler = null; renderSprint(parts[0]); });
})();
