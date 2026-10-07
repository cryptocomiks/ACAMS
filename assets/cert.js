/* CAMS Exam Trainer — Exam Readiness Certificate.
 * Earned when: readiness score >= 80, 3 mock exams passed at 75%+, and 300+ answers. Shown to everyone as a goal on the
 * Progress page; the certificate itself (download, print, share) is a Premium perk.
 * It certifies readiness measured on this trainer only. It is NOT an ACAMS certification and says so on its face. */
(function () {
  "use strict";
  var A = window.CAMSApp, PG = window.CAMSProgress, PL = window.CAMSPlan, FX = window.CAMSFX;
  if (!A || !PG) return;
  var KEY = "cams.cert.v1";
  var GOAL = { score: 80, exams: 3, examPct: 75, answers: 300 };
  var app = document.getElementById("app");
  var esc = A.esc;

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  function history() { try { return JSON.parse(localStorage.getItem("cams.history.v1")) || []; } catch (e) { return []; } }

  function status() {
    var rd = PG.readiness(A.BANK);
    var passed = history().filter(function (h) { return h.mode === "exam" && h.total >= 30 && h.score / h.total * 100 >= GOAL.examPct; });
    var items = [
      { label: "Exam readiness score of " + GOAL.score + "+", value: rd.score, target: GOAL.score, unit: "/100" },
      { label: GOAL.exams + " mock exams passed at " + GOAL.examPct + "%+", value: passed.length, target: GOAL.exams, unit: "" },
      { label: GOAL.answers + " questions answered", value: rd.answers, target: GOAL.answers, unit: "" }
    ];
    items.forEach(function (i) { i.done = i.value >= i.target; });
    var earned = items.every(function (i) { return i.done; });
    var c = load();
    if (earned && !c.earnedAt) {
      c.earnedAt = Date.now(); c.score = rd.score;
      c.examAvg = Math.round(passed.slice(-3).reduce(function (s, h) { return s + h.score / h.total; }, 0) / Math.min(3, passed.length) * 100);
      save(c);
    }
    return { items: items, earned: earned || !!c.earnedAt, cert: c, rd: rd };
  }

  // Progress-page card: the goal is visible to everyone.
  function cardHtml() {
    var st = status(), premium = !PL || PL.premium();
    return '<div class="card cert-card fade-in"><div class="cert-ic" aria-hidden="true">🎓</div><div class="cert-body">' +
      '<div class="dlabel">Exam Readiness Certificate</div>' +
      "<h3>" + (st.earned ? "You've earned it." : "Earn your readiness certificate") + "</h3>" +
      '<p class="muted small">' + (st.earned ? "Proof that you hit the trainer's readiness bar. Share it, then book the real exam."
        : "Hit all three goals and get a certificate to download and share on LinkedIn.") + "</p>" +
      '<div class="cert-goals">' + st.items.map(function (i) {
        return '<div class="cg' + (i.done ? " done" : "") + '"><div class="cg-h"><span>' + (i.done ? "✅ " : "") + esc(i.label) + "</span><b>" + Math.min(i.value, i.target) + "/" + i.target + "</b></div>" +
          '<div class="xpbar"><div style="width:' + Math.min(100, Math.round(i.value / i.target * 100)) + '%"></div></div></div>';
      }).join("") + "</div>" +
      (st.earned ? (premium ? '<a class="btn primary" href="#/certificate">🎓 View my certificate</a>' : '<button class="btn primary" data-paywall="cert">🎓 Unlock my certificate</button>') : "") +
      "</div></div>";
  }

  function code(name, at) {
    var h = PG.hash((name || "") + "|" + at).toString(36).toUpperCase();
    return "CET-" + h.slice(0, 4) + "-" + h.slice(4, 8);
  }
  function fmtDate(t) { return new Date(t).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }

  function render() {
    var st = status();
    A.setView("page");
    A.setTopbar(A.homeChips());
    if (!st.earned) { location.replace("#/progress"); return; }
    if (PL && !PL.premium()) { location.replace("#/progress"); setTimeout(function () { PL.paywall("cert"); }, 300); return; }
    var acct = window.CAMSAccount, c = st.cert;
    var name = c.name || (acct && acct.user() && acct.user().user_metadata && acct.user().user_metadata.display_name) || "";
    app.innerHTML = '<div class="page-head fade-in"><h1>Your certificate.</h1><p class="muted">Type your name as you want it to appear, then download or share it.</p></div>' +
      '<div class="cert-tools"><label class="fld"><span>Full name</span><input id="certName" maxlength="60" value="' + esc(name) + '" placeholder="Your full name"></label>' +
      '<div class="cert-actions"><button class="btn primary" id="certPng">Download image</button><button class="btn" id="certPrint">Print / PDF</button>' +
      '<a class="btn" id="certLi" target="_blank" rel="noopener">Share on LinkedIn</a></div></div>' +
      '<div class="cert-frame"><canvas id="certCanvas" width="1600" height="1130" aria-label="Exam readiness certificate"></canvas></div>' +
      '<p class="small muted" style="text-align:center;max-width:680px;margin:14px auto 0">This certificate attests a readiness level measured by CAMS Exam Trainer. It is not issued by ACAMS and is not a CAMS certification.</p>';
    var inp = document.getElementById("certName"), cv = document.getElementById("certCanvas");
    function draw() {
      var n = inp.value.trim().slice(0, 60);
      c.name = n; save(c);
      paint(cv, n, c);
      document.getElementById("certLi").href = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(location.origin + location.pathname);
    }
    inp.oninput = draw;
    draw();
    document.getElementById("certPng").onclick = function () {
      var a = document.createElement("a");
      a.download = "CAMS-readiness-certificate.png";
      a.href = cv.toDataURL("image/png");
      document.body.appendChild(a); a.click(); a.remove();
    };
    document.getElementById("certPrint").onclick = function () { window.print(); };
    if (!c.celebrated && FX) { c.celebrated = true; save(c); FX.celebrate("🎓", "Readiness certified", "You hit the bar. Now go book the real exam!", "🏆"); }
    window.scrollTo(0, 0);
  }

  function paint(cv, name, c) {
    var x = cv.getContext("2d"), W = cv.width, H = cv.height;
    var g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, "#fbfaf6"); g.addColorStop(1, "#f1eee4");
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    // frame
    x.strokeStyle = "#b8963e"; x.lineWidth = 10; x.strokeRect(40, 40, W - 80, H - 80);
    x.strokeStyle = "#d9c48a"; x.lineWidth = 2; x.strokeRect(62, 62, W - 124, H - 124);
    // brand
    var bg = x.createLinearGradient(W / 2 - 40, 120, W / 2 + 40, 200); bg.addColorStop(0, "#0a84ff"); bg.addColorStop(1, "#bf5af2");
    x.fillStyle = bg; roundRect(x, W / 2 - 40, 112, 80, 80, 20); x.fill();
    x.fillStyle = "#fff"; x.font = "bold 52px -apple-system, Helvetica, Arial"; x.textAlign = "center"; x.fillText("✓", W / 2, 170);
    x.fillStyle = "#6b6b70"; x.font = "600 26px -apple-system, Helvetica, Arial"; x.fillText("CAMS EXAM TRAINER", W / 2, 245);
    x.fillStyle = "#1d1d1f"; x.font = "bold 74px Georgia, 'Times New Roman', serif"; x.fillText("Certificate of Exam Readiness", W / 2, 345);
    x.fillStyle = "#6b6b70"; x.font = "30px Georgia, serif"; x.fillText("This certifies that", W / 2, 430);
    x.fillStyle = "#1d1d1f"; x.font = "italic bold 84px Georgia, serif"; x.fillText(name || "Your Name", W / 2, 540);
    x.strokeStyle = "#b8963e"; x.lineWidth = 2; x.beginPath(); x.moveTo(W / 2 - 420, 570); x.lineTo(W / 2 + 420, 570); x.stroke();
    var pf = window.CAMSAccount && window.CAMSAccount.profile && window.CAMSAccount.profile(), dy = 0;
    if (pf && pf.title) { x.fillStyle = "#8a6d22"; x.font = "600 28px -apple-system, Helvetica, Arial"; x.fillText(pf.title.toUpperCase(), W / 2, 618); dy = 34; }
    x.fillStyle = "#3a3a3c"; x.font = "30px Georgia, serif";
    x.fillText("has reached the readiness level for the ACAMS CAMS examination (7th edition)", W / 2, 650 + dy);
    x.fillText("on the CAMS Exam Trainer: readiness " + (c.score || 80) + "/100, three mock exams passed (average " + (c.examAvg || 75) + "%).", W / 2, 700 + dy);
    // seal
    x.save(); x.translate(W - 300, H - 300);
    x.fillStyle = "#b8963e"; x.beginPath();
    for (var i = 0; i < 24; i++) { var a = i / 24 * Math.PI * 2, r = i % 2 ? 98 : 110; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
    x.closePath(); x.fill();
    x.fillStyle = "#f6edd3"; x.beginPath(); x.arc(0, 0, 80, 0, Math.PI * 2); x.fill();
    x.fillStyle = "#8a6d22"; x.font = "bold 22px -apple-system, Helvetica, Arial"; x.fillText("READY", 0, -8); x.font = "bold 34px Georgia, serif"; x.fillText((c.score || 80) + "/100", 0, 32);
    x.restore();
    x.textAlign = "left"; x.fillStyle = "#3a3a3c"; x.font = "26px -apple-system, Helvetica, Arial";
    x.fillText("Issued " + fmtDate(c.earnedAt || Date.now()), 140, H - 250);
    x.fillText("Certificate ID  " + code(name, c.earnedAt), 140, H - 205);
    x.fillStyle = "#8e8e93"; x.font = "20px -apple-system, Helvetica, Arial";
    x.fillText("Independent study tool. Not issued by ACAMS; not a CAMS certification.", 140, H - 150);
  }
  function roundRect(x, a, b, w, h, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }

  window.CAMSCert = { status: status, cardHtml: cardHtml, GOAL: GOAL };
  A.route("certificate", render);
})();
