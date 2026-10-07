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
  var view = { domain: "all", show: "open" };   // show: open = still missed last time, all = ever missed

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
    var all = missed();
    var list = all.filter(function (m) { return (view.show === "all" || m.open) && (view.domain === "all" || String(m.q.domain) === view.domain); });
    var open = all.filter(function (m) { return m.open; }).length;
    var html = '<div class="page-head fade-in"><h1>Most missed.</h1><p class="muted">Every question you have got wrong, worst first. Re-answering them is the fastest way to raise your score.</p></div>';
    if (!all.length) {
      html += '<div class="card mm-empty"><div class="mm-big">🎯</div><h3>No mistakes yet.</h3><p class="muted">Answer some questions: anything you miss lands here, ranked by how often you miss it.</p>' +
        '<button class="btn primary" id="mmStart">Start practising</button></div>';
      app.innerHTML = html;
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
    Array.prototype.forEach.call(app.querySelectorAll("[data-mseg]"), function (g) {
      var name = g.getAttribute("data-mseg");
      Array.prototype.forEach.call(g.querySelectorAll("button"), function (b) {
        b.onclick = function () { view[name] = b.getAttribute("data-val"); render(); };
      });
    });
    window.scrollTo(0, 0);
  }

  window.CAMSMistakes = { missed: missed, count: count };
  A.route("mistakes", render);
})();
