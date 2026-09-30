/* CAMS Exam Trainer — Ranks tab: personal scoreboard + weekly / daily-challenge / all-time leaderboards (Supabase).
 * The leaderboard only shows a display name and scores. Users can hide themselves. */
(function () {
  "use strict";
  var A = window.CAMSApp, PG = window.CAMSProgress, FX = window.CAMSFX;
  if (!A || !PG) return;
  var esc = A.esc;
  var app = document.getElementById("app");
  var tab = "week";
  var timer = null, lastSync = 0;
  var TABLE_MISSING = /42P01|PGRST205|relation .*leaderboard|leaderboard.*(does not exist|not find)/i;

  function acct() { return window.CAMSAccount || { enabled: false, user: function () { return null; } }; }
  function client() { return acct().client ? acct().client() : null; }
  function $(id) { return document.getElementById(id); }

  function row() {
    var g = PG.gam(), st = PG.streak(g), u = acct().user();
    var r = {
      user_id: u.id,
      name: (acct().name ? acct().name() : "Player").slice(0, 40) || "Player",
      week: PG.weekKey(),
      xp_week: Math.min(200000, PG.weekXp(g)),
      xp_total: Math.min(10000000, g.xp),
      streak: Math.min(5000, st.current),
      level: PG.levelFor(g.xp).level,
      updated_at: new Date().toISOString()
    };
    var d = PG.dailyResult();
    if (d) { r.daily_date = PG.dayKey(); r.daily_score = d.score; r.daily_ms = Math.round(d.ms); }
    return r;
  }

  function sync() {
    var c = client(), u = acct().user();
    if (!c || !u) return Promise.resolve();
    lastSync = Date.now();
    return c.from("leaderboard").upsert(row()).then(function (res) { return res && res.error ? Promise.reject(res.error) : res; }).catch(function () { /* table may not exist yet */ });
  }
  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(sync, Date.now() - lastSync > 20000 ? 800 : 5000);
  }
  window.CAMSLeaderboard = { sync: sync, schedule: schedule };

  function msToWeekEnd() {
    var n = new Date(), d = n.getDay() || 7;
    var end = new Date(n.getFullYear(), n.getMonth(), n.getDate() + (8 - d));
    return end - n;
  }
  function fmtLong(ms) {
    var s = Math.max(0, Math.floor(ms / 1000)), d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60);
    return (d ? d + "d " : "") + h + "h " + (m < 10 ? "0" : "") + m + "m";
  }

  function scoreboardHtml() {
    var g = PG.gam(), st = PG.streak(g), lv = PG.levelFor(g.xp), R = PG.RECORDS;
    var d = PG.dailyResult();
    return '<div class="card scoreboard fade-in"><div class="dlabel">Your scoreboard</div><div class="sb-grid">' +
      '<div class="sb"><b data-count="' + PG.weekXp(g) + '">0</b><span>XP this week</span></div>' +
      '<div class="sb"><b data-count="' + g.xp + '">0</b><span>XP all time · Lv ' + lv.level + "</span></div>" +
      '<div class="sb"><b>🔥 ' + st.current + "</b><span>day streak · best " + st.best + "</span></div>" +
      '<div class="sb"><b>' + (d ? d.score + "/" + d.total : "–") + "</b><span>today's challenge</span></div></div>" +
      '<div class="records">' + ["exam", "lightning", "survival", "sprint", "daily", "combo"].map(function (k) {
        var v = g.records[k];
        return '<div class="recd' + (v != null ? " has" : "") + '"><b>' + (v != null ? v + R[k].unit : "–") + "</b><span>" + R[k].label + "</span></div>";
      }).join("") + "</div></div>";
  }

  function render() {
    A.setView("page");
    A.setTopbar(A.homeChips());
    var u = acct().user();
    var html = '<div class="page-head fade-in"><h1>Ranks.</h1><p class="muted">Push yourself. The weekly board resets every Monday.</p></div>' + scoreboardHtml();
    if (!acct().enabled) {
      html += '<div class="card lb-empty"><h2>Leaderboards need accounts</h2><p class="muted">Accounts are not enabled on this site yet.</p></div>';
      app.innerHTML = html; FX.countUp(app); return;
    }
    if (!u) {
      html += '<div class="card lb-empty fade-in"><div style="font-size:48px">🏆</div><h2>Join the leaderboard</h2><p class="muted">Create a free account to compete on weekly XP and the daily challenge. Only your display name is shown.</p>' +
        '<div class="actions" style="justify-content:center"><button class="btn primary" id="lbSignup">Create account</button><button class="btn" id="lbSignin">Sign in</button></div></div>';
      app.innerHTML = html;
      $("lbSignup").onclick = function () { acct().open("signup"); };
      $("lbSignin").onclick = function () { acct().open("signin"); };
      FX.countUp(app);
      return;
    }
    html += '<div class="lb-tabs fade-in"><div class="seg" role="tablist">' +
      [["week", "This week"], ["daily", "Today's challenge"], ["all", "All time"]].map(function (t) {
        return '<button type="button" role="tab" data-tab="' + t[0] + '" aria-pressed="' + (tab === t[0]) + '" aria-selected="' + (tab === t[0]) + '">' + t[1] + "</button>";
      }).join("") + '</div><div class="lb-reset muted small" id="lbReset"></div></div>' +
      '<div class="card lb-card" id="lbBody"><p class="muted">Loading…</p></div>' +
      '<p class="small muted" style="text-align:center"><label class="lb-vis"><input type="checkbox" id="lbVisible" checked> Show me on the leaderboard</label></p>';
    app.innerHTML = html;
    FX.countUp(app);
    Array.prototype.forEach.call(document.querySelectorAll("[data-tab]"), function (b) {
      b.onclick = function () { tab = b.getAttribute("data-tab"); render(); };
    });
    var reset = $("lbReset");
    function upd() {
      reset.textContent = tab === "week" ? "Resets in " + fmtLong(msToWeekEnd()) : tab === "daily" ? "New challenge in " + fmtLong(new Date(new Date().setHours(24, 0, 0, 0)) - new Date()) : "";
    }
    upd();
    A.addViewTimer(setInterval(upd, 30000));
    sync().then(load);
  }

  function load() {
    var c = client(), u = acct().user(), body = $("lbBody");
    if (!c || !body) return;
    var q = c.from("leaderboard").select("user_id,name,xp_week,xp_total,streak,level,daily_score,daily_ms,daily_date,week,visible");
    if (tab === "week") q = q.eq("week", PG.weekKey()).order("xp_week", { ascending: false });
    else if (tab === "daily") q = q.eq("daily_date", PG.dayKey()).order("daily_score", { ascending: false }).order("daily_ms", { ascending: true });
    else q = q.order("xp_total", { ascending: false });
    q.limit(50).then(function (res) {
      if (res.error) throw res.error;
      var rows = (res.data || []).filter(function (r) { return r.visible !== false || r.user_id === u.id; });
      var me = rows.filter(function (r) { return r.user_id === u.id; })[0];
      var vis = $("lbVisible");
      if (vis) {
        vis.checked = !me || me.visible !== false;
        vis.onchange = function () { c.from("leaderboard").update({ visible: vis.checked }).eq("user_id", u.id).then(load); };
      }
      if (!rows.length) {
        body.innerHTML = '<p class="muted" style="text-align:center;margin:18px 0">' + (tab === "daily" ? "Nobody has played today's challenge yet. Be the first!" : "No scores yet this week. Answer a few questions to get on the board!") + "</p>" +
          (tab === "daily" && !PG.dailyResult() ? '<div style="text-align:center"><button class="btn primary" id="lbPlay">Play today\'s challenge</button></div>' : "");
        var lp = $("lbPlay"); if (lp) lp.onclick = function () { A.startSession("daily", { domain: "all" }); };
        return;
      }
      function val(r) {
        return tab === "week" ? (r.xp_week || 0).toLocaleString() + " XP" : tab === "daily" ? r.daily_score + "/10 · " + A.fmtTime((r.daily_ms || 0) / 1000) : (r.xp_total || 0).toLocaleString() + " XP";
      }
      var podium = rows.slice(0, 3);
      var html = '<div class="podium">' + [1, 0, 2].map(function (i) {
        var r = podium[i];
        if (!r) return '<div class="pod empty"></div>';
        return '<div class="pod p' + (i + 1) + (r.user_id === u.id ? " me" : "") + '"><div class="medal">' + ["🥇", "🥈", "🥉"][i] + '</div><div class="pav">' + esc((r.name || "?").charAt(0).toUpperCase()) +
          '</div><div class="pname"></div><div class="pval">' + esc(val(r)) + '</div><div class="pstand">' + (i + 1) + "</div></div>";
      }).join("") + "</div>" +
        '<ol class="lb-list">' + rows.map(function (r, i) {
          return '<li class="' + (r.user_id === u.id ? "me" : "") + '"><span class="rk">' + (i + 1) + '</span><span class="av">' + esc((r.name || "?").charAt(0).toUpperCase()) + '</span><span class="nm"></span>' +
            '<span class="meta">Lv ' + (r.level || 1) + (r.streak ? " · 🔥 " + r.streak : "") + '</span><span class="vl">' + esc(val(r)) + "</span></li>";
        }).join("") + "</ol>";
      if (!me) html += '<p class="muted small" style="text-align:center;margin-top:12px">' + (tab === "daily" ? "Play today's challenge to appear here." : "You are not in the top 50 yet. Keep going!") + "</p>";
      body.innerHTML = html;
      // Names are user-provided: set them as text, never as HTML.
      var pn = body.querySelectorAll(".pod:not(.empty) .pname");
      var order = [1, 0, 2].filter(function (i) { return podium[i]; });
      Array.prototype.forEach.call(pn, function (el, k) { el.textContent = podium[order[k]].name || "Player"; });
      Array.prototype.forEach.call(body.querySelectorAll(".lb-list .nm"), function (el, k) { el.textContent = (rows[k].name || "Player") + (rows[k].user_id === u.id ? " (you)" : ""); });
    }).catch(function (e) {
      var msg = (e && (e.message || e.code)) || "";
      body.innerHTML = TABLE_MISSING.test(msg + " " + (e && e.code))
        ? '<p class="muted" style="text-align:center">The leaderboard is not set up yet. (Site owner: run <code>supabase/leaderboard.sql</code> in Supabase.)</p>'
        : '<p class="muted" style="text-align:center">Could not load the leaderboard. Check your connection and try again.</p>';
    });
  }

  A.route("ranks", render);
})();
