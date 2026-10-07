/* CAMS Exam Trainer — "Most missed": every question you got wrong, ranked by how often you miss it.
 * One click trains on the worst ones. Rows open to show the right answer, but retrieval comes first:
 * the main action is always to re-answer, not to re-read. */
(function () {
  "use strict";
  var A = window.CAMSApp;
  if (!A) return;
  var app = document.getElementById("app");
  var esc = A.esc;
  var LETTERS = "ABCDEFGH";
  var view = { domain: "all", show: "open", tab: "mine" };   // show: open = still missed last time, all = ever missed

  function stats() { try { return JSON.parse(localStorage.getItem("cams.stats.v1")) || {}; } catch (e) { return {}; } }

  // Every question missed at least once, worst first: most misses, then lowest accuracy, then still-missed first.
  function missed() {
    var st = stats();
    return Object.keys(st).filter(function (id) { return A.BY_ID[id] && st[id].wrong > 0; }).map(function (id) {
      var s = st[id], q = A.BY_ID[id];
      return { q: q, wrong: s.wrong, right: s.right, seen: s.seen, open: s.last === false, acc: Math.round(s.right / Math.max(1, s.seen) * 100) };
    }).sort(function (a, b) { return b.wrong - a.wrong || a.acc - b.acc || (b.open - a.open); });
  }
  function count() { return missed().filter(function (m) { return m.open; }).length; }

  function seg(name, items, cur) {
    return '<div class="seg" role="group" data-mseg="' + name + '">' + items.map(function (it) {
      return '<button type="button" data-val="' + it[0] + '" aria-pressed="' + (String(it[0]) === String(cur)) + '">' + esc(it[1]) +
        (it[2] != null ? '<span class="count">' + it[2] + "</span>" : "") + "</button>";
    }).join("") + "</div>";
  }

  function render() {
    A.setView("page");
    A.setTopbar(A.homeChips());
    window.scrollTo(0, 0);
    var all = missed();
    var list = all.filter(function (m) { return (view.show === "all" || m.open) && (view.domain === "all" || String(m.q.domain) === view.domain); });
    var open = all.filter(function (m) { return m.open; }).length;
    var html = '<div class="page-head fade-in"><h1>Most missed.</h1><p class="muted">' + (view.tab === "mine" ? "Every question you have got wrong, worst first. Re-answering them is the fastest way to raise your score." : "The questions other learners get wrong most often on their first try. Expect the same traps on exam day.") + "</p></div>" +
      '<div class="mm-tabs">' + seg("tab", [["mine", "🎯 Mine", null], ["community", "👥 Community traps", null]], view.tab) + "</div>";
    if (view.tab === "community") { app.innerHTML = html + '<div id="mmCommunity" class="card mm-list"><p class="muted" style="margin:0 22px">Loading…</p></div>'; bindSegs(); loadCommunity(); return; }
    if (!all.length) {
      html += '<div class="card mm-empty"><div class="mm-big">🎯</div><h3>No mistakes yet.</h3><p class="muted">Answer some questions: anything you miss lands here, ranked by how often you miss it.</p>' +
        '<button class="btn primary" id="mmStart">Start practising</button></div>';
      app.innerHTML = html;
      bindSegs();
      document.getElementById("mmStart").onclick = function () { A.startSession("practice", { domain: "all", source: "fresh" }); };
      return;
    }
    var top = list.slice(0, 20);
    html += '<div class="card mm-hero fade-in"><div class="mm-nums">' +
      '<div><b>' + open + '</b><span>still missed</span></div>' +
      '<div><b>' + (all.length - open) + '</b><span>fixed since</span></div>' +
      '<div><b>' + all.filter(function (m) { return m.wrong >= 2; }).length + '</b><span>missed 2+ times</span></div></div>' +
      '<div class="mm-cta"><button class="btn primary lg" id="mmTop"' + (top.length ? "" : " disabled") + ">" + (top.length ? "🎯 Train on my " + (top.length === 20 ? "top 20" : top.length) + " most missed" : "Nothing to train in this filter") + "</button>" +
      (list.length > 20 ? '<button class="btn" id="mmAll">' + Math.min(list.length - 20, 30) + " more from this list</button>" : "") + "</div>" +
      '<p class="small muted" style="margin:10px 0 0">Get one right and it moves to "fixed"; it still comes back in Smart review until it sticks.</p></div>';
    var dc = function (d) { return all.filter(function (m) { return (view.show === "all" || m.open) && String(m.q.domain) === d; }).length; };
    html += '<div class="settings mm-filters">' +
      '<div class="seg-group"><label>Show</label>' + seg("show", [["open", "Still missed", open], ["all", "Ever missed", all.length]], view.show) + "</div>" +
      '<div class="seg-group"><label>Domain</label>' + seg("domain", [["all", "All", null], ["1", "D1", dc("1")], ["2", "D2", dc("2")], ["3", "D3", dc("3")], ["4", "D4", dc("4")]], view.domain) + "</div></div>";
    html += '<div class="card mm-list">' + (list.length ? list.map(function (m, i) {
      var q = m.q;
      return '<details class="mm-row"><summary><span class="mm-rank">' + (i + 1) + '</span><span class="mm-body"><span class="mm-tags">' +
        '<span class="tag bad">✗ ' + m.wrong + "×</span>" + '<span class="tag">' + m.acc + "% right</span>" +
        (m.open ? '<span class="tag retry">still missed</span>' : '<span class="tag good">fixed last time</span>') +
        '<span class="tag blue">D' + q.domain + "</span>" + (q.topic ? '<span class="tag">' + esc(q.topic) + "</span>" : "") + "</span>" +
        '<span class="mm-q">' + esc(q.q) + '</span></span><span class="mm-chev" aria-hidden="true">›</span></summary>' +
        '<div class="mm-detail"><p class="small muted" style="margin:0 0 8px">Try to recall the answer before reading it.</p>' +
        '<div class="mm-ans">' + q.answer.map(function (k) { return "<div>✓ " + esc(q.options[k]) + "</div>"; }).join("") + "</div>" +
        '<div class="explain good" style="margin-top:10px">' + esc(q.explanation) +
        A.changedHtml(q) + A.sourcesHtml(q) + "</div>" +
        '<button class="btn sm" data-one="' + q.id + '">Re-answer this one</button></div></details>';
    }).join("") : '<p class="muted" style="margin:0">Nothing here for this filter. Nice.</p>') + "</div>";
    app.innerHTML = html;

    function train(ids, label) { if (ids.length) A.startSession("practice", { ids: ids, label: label, planTask: "missed" }); }
    document.getElementById("mmTop").onclick = function () { train(top.map(function (m) { return m.q.id; }), "Most missed"); };
    var ma = document.getElementById("mmAll");
    if (ma) ma.onclick = function () { train(list.slice(20).map(function (m) { return m.q.id; }), "Most missed"); };
    Array.prototype.forEach.call(app.querySelectorAll("[data-one]"), function (b) {
      b.onclick = function () { train([b.getAttribute("data-one")], "Most missed"); };
    });
    bindSegs();
  }
  function bindSegs() {
    Array.prototype.forEach.call(app.querySelectorAll("[data-mseg]"), function (g) {
      var name = g.getAttribute("data-mseg");
      Array.prototype.forEach.call(g.querySelectorAll("button"), function (b) {
        b.onclick = function () { view[name] = b.getAttribute("data-val"); render(); };
      });
    });
  }

  // ---------- Community: first-try results of signed-in learners, aggregated in Supabase ----------
  // Only the first attempt at each question is sent (one row per learner and question, see supabase/community.sql).
  var QKEY = "cams.first.v1", SENTKEY = "cams.firstsent.v1", MIN_N = 5;
  var community = null, communityAt = 0, flushTimer = null, disabled = false;
  function lget(k, fb) { try { var r = localStorage.getItem(k); return r ? JSON.parse(r) : fb; } catch (e) { return fb; } }
  function lset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  function client() { var a = window.CAMSAccount, c = a && a.client && a.client(); return c && typeof c.rpc === "function" ? c : null; }
  function uid() { var a = window.CAMSAccount, u = a && a.user && a.user(); return u && u.id; }
  function firstAnswer(qid, ok) {
    var q = lget(QKEY, []);
    if (q.length >= 500 || q.some(function (x) { return x.q === qid; })) return;
    q.push({ q: qid, ok: !!ok });
    lset(QKEY, q);
    schedule();
  }
  function schedule() { clearTimeout(flushTimer); flushTimer = setTimeout(flush, 4000); }
  function flush() {
    var c = client(), u = uid();
    if (!c || !u || disabled) return;
    backfill(u);
    var q = lget(QKEY, []);
    if (!q.length) return;
    var batch = q.slice(0, 100);
    c.rpc("record_first_answers", { answers: batch }).then(function (r) {
      if (r.error) { if (/function|schema cache|not found/i.test(r.error.message || "")) disabled = true; return; }
      var sent = {};
      batch.forEach(function (x) { sent[x.q] = 1; });
      lset(QKEY, lget(QKEY, []).filter(function (x) { return !sent[x.q]; }));
      if (q.length > 100) schedule();
    }, function () { /* offline: retried on the next answer */ });
  }
  // Once per account: questions answered before signing in whose first result is certain (never right, or never wrong).
  function backfill(u) {
    var done = lget(SENTKEY, {});
    if (done[u]) return;
    done[u] = 1;
    lset(SENTKEY, done);
    var st = stats(), q = lget(QKEY, []), have = {};
    q.forEach(function (x) { have[x.q] = 1; });
    Object.keys(st).forEach(function (id) {
      var s = st[id];
      if (!A.BY_ID[id] || have[id] || q.length >= 500) return;
      if (s.seen === 1 || !s.right || !s.wrong) { q.push({ q: id, ok: s.right > 0 && !s.wrong }); have[id] = 1; }
    });
    lset(QKEY, q);
  }

  function loadCommunity() {
    var box = document.getElementById("mmCommunity");
    var show = function (rows, err) {
      if (!document.getElementById("mmCommunity")) return;
      var st = stats();
      if (err || !rows) {
        box.innerHTML = '<div class="mm-empty" style="padding:10px 22px"><div class="mm-big">👥</div><h3>Community traps are warming up.</h3><p class="muted">They appear once enough learners have answered each question (at least ' + MIN_N + '). Sign in and keep practising: your first tries count, anonymously.</p></div>';
        return;
      }
      rows = rows.filter(function (r) { return A.BY_ID[r.question_id]; });
      if (!rows.length) { show(null, true); return; }
      var top = rows.slice(0, 20).map(function (r) { return r.question_id; });
      box.innerHTML = '<div class="mm-ctop"><button class="btn primary" id="mmComTop">👥 Train on the ' + top.length + " biggest community traps</button>" +
        '<span class="small muted">First-try results of signed-in learners, anonymous. Shown when at least ' + MIN_N + " learners answered.</span></div>" +
        rows.map(function (r, i) {
          var q = A.BY_ID[r.question_id], mine = st[q.id];
          var you = !mine ? '<span class="tag">not seen yet</span>' : mine.last === false ? '<span class="tag bad">you missed it</span>' : '<span class="tag good">you got it</span>';
          return '<details class="mm-row"><summary><span class="mm-rank">' + (i + 1) + '</span><span class="mm-body"><span class="mm-tags">' +
            '<span class="tag bad">' + Math.round(r.miss_rate * 100) + "% miss it</span>" + '<span class="tag">' + r.attempts + " learners</span>" + you +
            '<span class="tag blue">D' + q.domain + '</span></span><span class="mm-q">' + esc(q.q) + '</span></span><span class="mm-chev" aria-hidden="true">›</span></summary>' +
            '<div class="mm-detail"><button class="btn sm primary" data-one="' + q.id + '">Answer it now</button> <span class="small muted">The answer and explanation show after you try.</span></div></details>';
        }).join("");
      document.getElementById("mmComTop").onclick = function () { A.startSession("practice", { ids: top, label: "Community traps" }); };
      Array.prototype.forEach.call(box.querySelectorAll("[data-one]"), function (b) {
        b.onclick = function () { A.startSession("practice", { ids: [b.getAttribute("data-one")], label: "Community traps" }); };
      });
    };
    if (community && Date.now() - communityAt < 6e5) return show(community);
    var tries = 0;
    (function go() {
      var c = client();
      if (!c) { if (++tries < 20) return setTimeout(go, 250); return show(null, true); }
      c.rpc("community_most_missed", { min_n: MIN_N, lim: 50 }).then(function (r) {
        if (r.error) return show(null, true);
        community = r.data || []; communityAt = Date.now();
        show(community);
      }, function () { show(null, true); });
    })();
  }

  window.CAMSMistakes = { missed: missed, count: count, firstAnswer: firstAnswer, flush: flush };
  setTimeout(flush, 5000);   // anything queued while signed out or offline
  A.route("mistakes", render);
})();
