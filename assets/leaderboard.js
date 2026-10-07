/* CAMS Exam Trainer — Ranks tab: personal scoreboard + weekly / daily-challenge / all-time leaderboards (Supabase).
 * Joining is opt-in: nothing is published until the user picks a public name and joins. They can leave at any time.
 * Only that name and scores are stored on the board. supabase/leaderboard.sql adds server-side checks. */
(function () {
  "use strict";
  var A = window.CAMSApp, PG = window.CAMSProgress, FX = window.CAMSFX;
  if (!A || !PG) return;
  var esc = A.esc;
  var app = document.getElementById("app");
  var tab = "week";
  var timer = null, lastSync = 0, missing = false;
  var TABLE_MISSING = /42P01|PGRST205|relation .*leaderboard|leaderboard.*(does not exist|not find)/i;
  // Profile columns (title, LinkedIn, photo) come from supabase/profile.sql; without them the board works as before.
  var COLS_MISSING = /42703|PGRST204|column .*(title|linkedin|avatar_url)|(title|linkedin|avatar_url).*column/i;
  var noProfileCols = false;
  var AV_RE = /^https:\/\/[a-z0-9]+\.supabase\.co\/storage\/v1\/object\/public\/avatars\//;
  var IN_RE = /^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/in\/[A-Za-z0-9_%-]{2,100}\/?$/;

  var PL = window.CAMSPlan || null;
  function premium() { return !PL || PL.premium(); }

  // Rival bots: clearly labelled practice opponents that keep the board lively while few people play.
  // Their scores follow the viewer's own level (a few just above, a few just below), and they make room
  // as real players join: they only fill the board up to MIN_ROWS.
  var MIN_ROWS = 8;
  var BOT_NAMES = ["Ada", "Basel", "Cleo", "Dara", "Egmont", "Fitz", "Gaia", "Hugo", "Iris", "Jules", "Kira", "Leo"];
  var BOT_MULT = [1.55, 1.28, 1.1, 0.94, 0.8, 0.64, 0.48, 0.33];
  function rivals(tab, realCount, mine) {
    var n = Math.max(0, MIN_ROWS - realCount);
    if (!n) return [];
    var r = PG.seeded(PG.hash("rivals" + tab + (tab === "daily" ? PG.dayKey() : PG.weekKey())));
    var names = BOT_NAMES.slice();
    for (var i = names.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = names[i]; names[i] = names[j]; names[j] = t; }
    var out = [];
    for (var k = 0; k < n; k++) {
      var m = BOT_MULT[k % BOT_MULT.length] * (0.92 + r() * 0.16);
      var row = { user_id: "bot-" + k, bot: true, name: names[k % names.length] };
      if (tab === "week") row.xp_week = Math.max(20, Math.round(Math.max(mine.week, 220) * m / 5) * 5);
      else if (tab === "all") row.xp_total = Math.max(50, Math.round(Math.max(mine.total, 600) * m / 10) * 10);
      else { row.daily_score = Math.max(3, Math.min(10, Math.round((mine.daily != null ? mine.daily : 7) * m))); row.daily_ms = Math.round(55000 + r() * 150000); }
      var xp = row.xp_total || Math.max(mine.total, 600) * m;
      row.level = PG.levelFor(xp).level;
      row.streak = Math.max(0, Math.round((mine.streak || 3) * m));
      out.push(row);
    }
    return out;
  }
  function sortRows(rows) {
    return rows.sort(function (a, b) {
      if (tab === "week") return (b.xp_week || 0) - (a.xp_week || 0);
      if (tab === "all") return (b.xp_total || 0) - (a.xp_total || 0);
      return (b.daily_score || 0) - (a.daily_score || 0) || (a.daily_ms || 0) - (b.daily_ms || 0);
    });
  }
  function mine() {
    var g = PG.gam(), d = PG.dailyResult();
    return { week: PG.weekXp(g), total: g.xp, streak: PG.streak(g).current, daily: d ? d.score : null };
  }

  function acct() { return window.CAMSAccount || { enabled: false, user: function () { return null; } }; }
  function client() { return acct().client ? acct().client() : null; }
  function $(id) { return document.getElementById(id); }
  function meta() { var u = acct().user(); return (u && u.user_metadata) || {}; }
  function joined() { return meta().lb_join === true; }
  function publicName() { return String(meta().display_name || "").trim().slice(0, 40); }

  function row() {
    var g = PG.gam(), st = PG.streak(g), u = acct().user();
    var r = {
      user_id: u.id,
      name: publicName() || "Player",
      visible: true,
      week: PG.weekKey(),
      xp_week: Math.min(200000, PG.weekXp(g)),
      xp_total: Math.min(10000000, g.xp),
      streak: Math.min(5000, st.current),
      level: PG.levelFor(g.xp).level
    };
    var d = PG.dailyResult();
    if (d) { r.daily_date = PG.dayKey(); r.daily_score = d.score; r.daily_ms = Math.round(d.ms); }
    var pf = acct().profile ? acct().profile() : null;
    if (pf && !noProfileCols) { r.title = pf.title || null; r.linkedin = pf.linkedin || null; r.avatar_url = pf.avatar || null; }
    return r;
  }
  function isMissing(e) { return TABLE_MISSING.test(((e && (e.message || "")) || "") + " " + ((e && e.code) || "")); }

  // Publishes this user's row. Does nothing unless they joined.
  function sync() {
    var c = client(), u = acct().user();
    if (!c || !u || !joined() || !premium()) return Promise.resolve();   // only Premium members are published
    lastSync = Date.now();
    var up = function () { return c.from("leaderboard").upsert(row()).then(function (res) { if (res && res.error) throw res.error; missing = false; }); };
    return up().catch(function (e) {
      if (!noProfileCols && COLS_MISSING.test((e && e.message) + " " + (e && e.code))) { noProfileCols = true; return up(); }
      throw e;
    }).catch(function (e) { if (isMissing(e)) missing = true; });
  }
  function schedule() {
    if (!joined()) return;
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

  function joinHtml() {
    var name = publicName();
    return '<div class="card lb-join fade-in"><div class="lbj-icon" aria-hidden="true">🏆</div><div class="lbj-body">' +
      "<h2>Join the leaderboard" + (premium() ? "" : ' <span class="tag">👑 Premium</span>') + "</h2>" +
      '<p class="muted small">Compete on weekly XP and the daily challenge. Other signed-in users will see the name you choose below, your XP, level, streak and daily score. Nothing else (no email). You can leave at any time.</p>' +
      '<form id="lbJoinForm" class="lbj-form" novalidate><label class="fld"><span>Public name</span><input id="lbName" type="text" maxlength="40" autocomplete="nickname" placeholder="e.g. Alex, AML-Ninja" value="' + esc(name) + '"></label>' +
      '<button class="btn primary" type="submit" id="lbJoin">Join</button></form><div class="m-msg" id="lbMsg" role="status"></div></div></div>';
  }
  function memberHtml() {
    return '<p class="small muted lb-member">You appear as <b id="lbMe"></b>. <button class="link-btn small" id="lbRename" type="button">Change name</button> · ' +
      '<button class="link-btn small" id="lbLeave" type="button">Leave the leaderboard</button></p>';
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
      html += '<div class="card lb-empty fade-in"><div style="font-size:48px">🏆</div><h2>Join the leaderboard</h2><p class="muted">Create a free account to compete on weekly XP and the daily challenge. Joining is optional, and only the public name you choose is shown.</p>' +
        '<div class="actions" style="justify-content:center"><button class="btn primary" id="lbSignup">Create account</button><button class="btn" id="lbSignin">Sign in</button></div></div>' +
        '<div class="card lb-card fade-in" id="lbBody"></div>';
      app.innerHTML = html;
      tab = "week";
      drawBoard($("lbBody"), [], null);
      $("lbSignup").onclick = function () { acct().open("signup"); };
      $("lbSignin").onclick = function () { acct().open("signin"); };
      FX.countUp(app);
      return;
    }
    var member = joined();
    if (!member && !missing) html += joinHtml();
    html += '<div class="lb-tabs fade-in"><div class="seg" role="tablist">' +
      [["week", "This week"], ["daily", "Today's challenge"], ["all", "All time"]].map(function (t) {
        return '<button type="button" role="tab" data-tab="' + t[0] + '" aria-pressed="' + (tab === t[0]) + '" aria-selected="' + (tab === t[0]) + '">' + t[1] + "</button>";
      }).join("") + '</div><div class="lb-reset muted small" id="lbReset"></div></div>' +
      '<div class="card lb-card" id="lbBody"><p class="muted">Loading…</p></div>' +
      (member ? memberHtml() : "");
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
    bindMembership(member);
    if (member) sync().then(load); else { hideOwnRow(); load(); }
  }

  function setName(name) {
    return acct().setMeta({ display_name: name });
  }
  function bindMembership(member) {
    var form = $("lbJoinForm");
    if (form) form.onsubmit = function (e) {
      e.preventDefault();
      var name = $("lbName").value.trim().replace(/\s+/g, " ").slice(0, 40), m = $("lbMsg"), b = $("lbJoin");
      if (name.length < 2) { m.textContent = "Choose a public name (2 characters or more)."; m.className = "m-msg err"; return; }
      if (/@/.test(name)) { m.textContent = "Please don't use an email address as your public name."; m.className = "m-msg err"; return; }
      if (!premium()) { PL.paywall("ranks"); return; }
      b.disabled = true;
      acct().setMeta({ display_name: name, lb_join: true }).then(function () {
        A.toast('<span class="ti">🏆</span><div><b>You joined the leaderboard</b><span>As ' + esc(name) + ". Good luck!</span></div>");
        render();
      }, function () { b.disabled = false; m.textContent = "Could not join. Check your connection and try again."; m.className = "m-msg err"; });
    };
    if (!member) return;
    $("lbMe").textContent = publicName() || "Player";
    $("lbRename").onclick = function () {
      var name = prompt("Your public name on the leaderboard:", publicName());
      if (name == null) return;
      name = name.trim().replace(/\s+/g, " ").slice(0, 40);
      if (name.length < 2 || /@/.test(name)) { alert("Use 2 to 40 characters, and not an email address."); return; }
      setName(name).then(render, function () { alert("Could not save the name. Try again."); });
    };
    $("lbLeave").onclick = function () {
      if (!confirm("Leave the leaderboard? Your name and scores will be hidden from other players. Your progress is kept.")) return;
      acct().setMeta({ lb_join: false }).then(function () { return hideOwnRow(); }).then(render, function () { alert("Could not leave right now. Try again."); });
    };
  }
  // Makes sure a user who is not a member is not listed (e.g. left on another device).
  function hideOwnRow() {
    var c = client(), u = acct().user();
    if (!c || !u) return Promise.resolve();
    return c.from("leaderboard").update({ visible: false }).eq("user_id", u.id).eq("visible", true)
      .then(function () {}, function () {});
  }

  function load() {
    var c = client(), u = acct().user(), body = $("lbBody");
    if (!c || !body) return;
    var query = function () {
      var q = c.from("leaderboard").select("user_id,name,xp_week,xp_total,streak,level,daily_score,daily_ms,daily_date,week,visible" + (noProfileCols ? "" : ",title,linkedin,avatar_url")).eq("visible", true);
      if (tab === "week") q = q.eq("week", PG.weekKey()).order("xp_week", { ascending: false });
      else if (tab === "daily") q = q.eq("daily_date", PG.dayKey()).order("daily_score", { ascending: false }).order("daily_ms", { ascending: true });
      else q = q.order("xp_total", { ascending: false });
      return q.limit(50).then(function (res) {
        if (res.error && !noProfileCols && COLS_MISSING.test(res.error.message + " " + res.error.code)) { noProfileCols = true; return query(); }
        return res;
      });
    };
    query().then(function (res) {
      if (res.error) throw res.error;
      if (!$("lbBody")) return;
      drawBoard(body, res.data || [], u);
    }).catch(function (e) {
      if (!$("lbBody")) return;
      if (isMissing(e)) {
        var wasMissing = missing;
        missing = true;
        if (!wasMissing && $("lbJoinForm")) return render();   // hide the join form: nothing to join yet
        drawBoard(body, [], u);
      } else body.innerHTML = '<p class="muted" style="text-align:center">Could not load the leaderboard. Check your connection and try again.</p>';
    });
  }

  function valOf(r) {
    return tab === "week" ? (r.xp_week || 0).toLocaleString() + " XP" : tab === "daily" ? r.daily_score + "/10 · " + A.fmtTime((r.daily_ms || 0) / 1000) : (r.xp_total || 0).toLocaleString() + " XP";
  }
  // Real rows + the viewer (shown even before joining, as "You") + rival bots, ranked together.
  function drawBoard(body, real, u) {
    var meId = u ? u.id : "me-local", m = mine();
    var rows = real.slice(), me = rows.filter(function (r) { return r.user_id === meId; })[0];
    if (!me && (tab !== "daily" || m.daily != null)) {
      var pf = acct().profile ? acct().profile() : null;
      me = { user_id: meId, you: true, name: "You", xp_week: m.week, xp_total: m.total, streak: m.streak, level: PG.levelFor(m.total).level,
        title: pf && pf.title, avatar_url: pf && pf.avatar };
      if (m.daily != null) { var d = PG.dailyResult(); me.daily_score = d.score; me.daily_ms = d.ms; }
      rows.push(me);
    }
    var realCount = rows.filter(function (r) { return !r.you; }).length;
    rows = sortRows(rows.concat(rivals(tab, realCount, m)));
    var podium = rows.slice(0, 3);
    function nm(r) { return (r.name || "Player") + (r.user_id === meId && !r.you ? " (you)" : ""); }
    var html = '<div class="podium">' + [1, 0, 2].map(function (i) {
      var r = podium[i];
      if (!r) return '<div class="pod empty"></div>';
      return '<div class="pod p' + (i + 1) + (r.user_id === meId ? " me" : "") + (r.bot ? " bot" : "") + '"><div class="medal">' + ["🥇", "🥈", "🥉"][i] + '</div><div class="pav">' + (r.bot ? "🤖" : esc((r.name || "?").charAt(0).toUpperCase())) +
        '</div><div class="pname"></div><div class="pval">' + esc(valOf(r)) + '</div><div class="pstand">' + (i + 1) + "</div></div>";
    }).join("") + "</div>" +
      '<ol class="lb-list">' + rows.map(function (r, i) {
        return '<li class="' + (r.user_id === meId ? "me" : "") + (r.bot ? " bot" : "") + '"><span class="rk">' + (i + 1) + '</span><span class="av">' + (r.bot ? "🤖" : esc((r.name || "?").charAt(0).toUpperCase())) + '</span><span class="nm"></span>' +
          '<span class="meta">' + (r.bot ? "Rival bot" : "Lv " + (r.level || 1) + (r.streak ? " · 🔥 " + r.streak : "")) + '</span><span class="vl">' + esc(valOf(r)) + "</span></li>";
      }).join("") + "</ol>";
    if (rows.some(function (r) { return r.bot; })) html += '<p class="muted small lb-botnote">🤖 Rival bots are practice opponents that adapt to your level. They step aside as more players join.</p>';
    if (me && me.you) html += '<p class="muted small" style="text-align:center">' + (u ? (premium() ? "Join above to appear on the public board." : "You are shown here privately. Premium members compete on the public board.") : "Create a free account to save your progress.") + "</p>";
    if (tab === "daily" && !PG.dailyAttemptUsed()) html += '<div style="text-align:center;margin-top:12px"><button class="btn primary" id="lbPlay">Play today\'s challenge</button></div>';
    body.innerHTML = html;
    var lp = $("lbPlay"); if (lp) lp.onclick = function () { A.startSession("daily", { domain: "all" }); };
    // Names are user-provided: set them as text, never as HTML.
    var order = [1, 0, 2].filter(function (i) { return podium[i]; });
    Array.prototype.forEach.call(body.querySelectorAll(".pod:not(.empty) .pname"), function (el, k) { el.textContent = nm(podium[order[k]]); });
    Array.prototype.forEach.call(body.querySelectorAll(".lb-list .nm"), function (el, k) {
      var r = rows[k];
      el.textContent = nm(r);
      if (r.bot) return;
      if (r.linkedin && IN_RE.test(r.linkedin)) {
        var a = document.createElement("a");
        a.className = "lb-in"; a.href = r.linkedin; a.target = "_blank"; a.rel = "noopener nofollow"; a.textContent = "in";
        a.setAttribute("aria-label", "LinkedIn profile"); el.appendChild(a);
      }
      if (r.title) { var t = document.createElement("small"); t.textContent = String(r.title).slice(0, 60); el.appendChild(t); }
    });
    // Profile photos: only from this project's public avatars bucket.
    var setAv = function (el, r) {
      if (!r || r.bot || !r.avatar_url || !AV_RE.test(r.avatar_url)) return;
      var img = document.createElement("img"); img.alt = ""; img.referrerPolicy = "no-referrer"; img.src = r.avatar_url;
      el.textContent = ""; el.appendChild(img);
    };
    Array.prototype.forEach.call(body.querySelectorAll(".lb-list .av"), function (el, k) { setAv(el, rows[k]); });
    Array.prototype.forEach.call(body.querySelectorAll(".pod:not(.empty) .pav"), function (el, k) { setAv(el, podium[order[k]]); });
  }

  A.route("ranks", render);
})();
