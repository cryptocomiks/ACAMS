/* CAMS Exam Trainer — plans: Free (no account needed) and Premium (Stripe).
 * Free: 15 questions a day to use in ANY mode (try everything first), plus the daily challenge, one full Mock exam,
 *       one Numbers sprint a day and 2 lessons; advanced stats are shown blurred. Premium is only offered once the
 *       15 questions are used (or from the Premium tab). Premium: everything, unlimited.
 * Premium status comes from the `entitlements` table (written only by the Stripe webhook, see supabase/stripe.md).
 * Note: this is a static site, so limits are enforced in the browser; the paid value is the full experience. */
(function () {
  "use strict";
  var cfg = window.CAMS_CONFIG || {};
  var stripe = cfg.stripe || {};
  var FREE_DAILY = 15;
  var FREE_LESSONS = ["m00", "m01"];
  var KEY_FREE = "cams.free.v1", KEY_ENT = "cams.plan.v1", KEY_PENDING = "cams.checkout.v1";
  var listeners = [];

  var PLANS = [
    { id: "monthly", name: "Monthly", price: "9.99", per: "/ month", monthly: 9.99, note: "Cancel anytime" },
    { id: "quarterly", name: "3 months", price: "24.99", per: "/ 3 months", monthly: 8.33, note: "Billed every 3 months, cancel anytime", save: 17 },
    { id: "pass6", name: "Exam Pass · 6 months", price: "39.99", per: "one-time", monthly: 6.67, note: "One payment, no renewal: covers a full prep", save: 33, best: true },
    { id: "annual", name: "Annual", price: "59.99", per: "/ year", monthly: 5.0, note: "Billed yearly, cancel anytime", save: 50 }
  ];
  var BENEFITS = [
    ["♾️", "Unlimited questions", "All 510 verified questions, every day, by theme or mixed"],
    ["⏱", "Mock exams", "Timed 30-question exams that mirror the real blueprint"],
    ["🔁", "Smart review", "Spaced repetition brings back exactly what you forget"],
    ["📈", "Exam readiness & analytics", "Predicted score, weak topics, trends by domain"],
    ["⏳", "Lightning & Survival", "The fun modes that make you come back"],
    ["📚", "Full course", "13 lessons, flashcards and the numbers sprint"],
    ["🏆", "Leaderboards", "Weekly and daily rankings"],
    ["🎓", "Readiness certificate", "Reach the bar and get a certificate to share on LinkedIn"],
    ["☁️", "Sync on all devices", "Phone, tablet and computer"]
  ];

  function load(k, fb) { try { var r = localStorage.getItem(k); return r ? JSON.parse(r) : fb; } catch (e) { return fb; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function today() { var d = new Date(), m = d.getMonth() + 1, day = d.getDate(); return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day; }
  function acct() { return window.CAMSAccount || { enabled: false, user: function () { return null; } }; }
  function emit() { listeners.forEach(function (f) { try { f(); } catch (e) { /* ignore */ } }); }

  // ---------- Premium status ----------
  function entitlement() {
    var e = load(KEY_ENT, null), u = acct().user();
    if (!e || !u || e.user_id !== u.id) return null;
    return e;
  }
  function premium() {
    var e = entitlement();
    return !!(e && /^(active|trialing|paid)$/.test(e.status || "") && (!e.until || new Date(e.until).getTime() > Date.now()));
  }
  // Called by account.js after sign-in (row from the entitlements table, or null).
  function setEntitlement(uid, row) {
    var before = premium();
    if (row) save(KEY_ENT, { user_id: uid, plan: row.plan, status: row.status, until: row.current_period_end, portal: !!row.stripe_customer_id });
    else save(KEY_ENT, { user_id: uid, plan: null, status: "none", until: null });
    if (premium() !== before) emit();
  }
  function refresh() {
    var c = acct().client && acct().client(), u = acct().user();
    if (!c || !u) return Promise.resolve(false);
    return c.from("entitlements").select("plan,status,current_period_end,stripe_customer_id").eq("user_id", u.id).maybeSingle()
      .then(function (r) { if (r.error) throw r.error; setEntitlement(u.id, r.data); return premium(); })
      .catch(function () { return premium(); });
  }

  // ---------- Free quota ----------
  function freeState() {
    var s = load(KEY_FREE, {});
    if (s.day !== today()) { s.day = today(); s.used = 0; }
    s.used = s.used || 0;
    return s;
  }
  function freeLeft() { return premium() ? Infinity : Math.max(0, FREE_DAILY - freeState().used); }
  function useFree(n) {
    if (premium()) return;
    var s = freeState(); s.used += n || 1; save(KEY_FREE, s);
    var left = FREE_DAILY - s.used;
    if (left === 3 && window.CAMSUI) window.CAMSUI.toast('<span class="ti">⚡</span><div><b>3 free questions left today</b><span>Make them count!</span></div>');
  }
  function sprintUsedToday() { return freeState().sprint === today(); }
  function useSprint() { var s = freeState(); s.sprint = today(); save(KEY_FREE, s); }
  function examTrialUsed() { return !!load(KEY_FREE, {}).examTrial; }
  function useExamTrial() { var s = freeState(); s.examTrial = Date.now(); save(KEY_FREE, s); }

  // What a free user may do. Returns "ok", or the paywall reason.
  function check(mode, opts) {
    if (premium()) return "ok";
    if (mode === "daily") return "ok";
    if (mode === "exam") return examTrialUsed() ? "exam" : "ok";   // one full Mock exam to try the real thing
    return freeLeft() > 0 ? "ok" : "quota";                          // every other mode uses the daily questions
  }
  function lessonFree(id) { return premium() || FREE_LESSONS.indexOf(id) >= 0; }

  // ---------- Checkout ----------
  function checkoutUrl(planId) {
    var link = stripe[planId], u = acct().user();
    if (!link || !u) return null;
    return link + (link.indexOf("?") < 0 ? "?" : "&") + "client_reference_id=" + encodeURIComponent(u.id) +
      (u.email ? "&prefilled_email=" + encodeURIComponent(u.email) : "");
  }
  function buy(planId) {
    if (!stripe[planId]) { alert("Payments open very soon. Thanks for your interest!"); return; }
    if (!acct().enabled) return;
    if (!acct().user()) {
      // Premium is attached to an account: sign up first, then we continue to checkout.
      try { sessionStorage.setItem(KEY_PENDING, planId); } catch (e) { /* ignore */ }
      closePaywall();
      acct().open("signup");
      return;
    }
    location.href = checkoutUrl(planId);
  }
  // After sign-in: resume a checkout the user had started.
  function resumeCheckout() {
    var p = null;
    try { p = sessionStorage.getItem(KEY_PENDING); sessionStorage.removeItem(KEY_PENDING); } catch (e) { /* ignore */ }
    if (p && acct().user() && !premium() && stripe[p]) location.href = checkoutUrl(p);
  }

  // ---------- UI pieces ----------
  var REASONS = {
    quota: ["Daily dose done: 15/15 ✓", "Great session. Your 15 free questions come back tomorrow, or keep the momentum going now with Premium."],
    exam: ["Your free Mock exam is used", "Premium gives you unlimited timed Mock exams, the best way to know you're ready."],
    review: ["Smart review is Premium", "Spaced repetition brings back the questions you got wrong, just before you forget them."],
    lightning: ["Lightning is Premium", "15 questions, 30 seconds each, speed bonus. Addictive."],
    survival: ["Survival is Premium", "3 lives. How far can you go?"],
    filters: ["Filters are Premium", "Train on the most tested topics, hard questions only, or your own mistakes."],
    stats: ["Unlock your full analytics", "See your predicted exam score, weak topics and progress by domain."],
    lesson: ["This lesson is Premium", "The full course: 13 lessons written for the CAMS 7th edition, with flashcards."],
    cards: ["Flashcards are Premium", "Hundreds of cards with spaced repetition. Two lessons' decks are free."],
    sprint: ["Today's free sprint is done", "Premium gives you unlimited 60-second sprints on thresholds, deadlines and percentages."],
    ranks: ["Leaderboards are Premium", "Compete every week and on the daily challenge."],
    cert: ["Your certificate is ready 🎓", "You hit the readiness bar. Premium unlocks your certificate to download, print and share on LinkedIn."],
    upgrade: ["Go Premium", "Everything you need to pass CAMS, unlimited."]
  };
  function plansHtml(compact) {
    return '<div class="plans' + (compact ? " compact" : "") + '">' + PLANS.map(function (p) {
      return '<div class="plan' + (p.best ? " best" : "") + '">' + (p.best ? '<div class="plan-badge">Most popular</div>' : "") +
        '<div class="plan-name">' + esc(p.name) + "</div>" +
        '<div class="plan-price">€' + p.price + '<span>' + esc(p.per) + "</span></div>" +
        '<div class="plan-month">' + (p.id === "monthly" ? "&nbsp;" : "€" + p.monthly.toFixed(2) + " / month" + (p.save ? ' <b class="plan-save">−' + p.save + "%</b>" : "")) + "</div>" +
        '<button class="btn ' + (p.best ? "primary" : "") + ' plan-cta" data-buy="' + p.id + '">' + (p.id === "pass6" ? "Get the Exam Pass" : "Choose") + "</button>" +
        '<div class="plan-note">' + esc(p.note) + "</div></div>";
    }).join("") + "</div>";
  }
  function benefitsHtml(n) {
    return '<ul class="perks">' + BENEFITS.slice(0, n || BENEFITS.length).map(function (b) {
      return '<li><span class="pk-i">' + b[0] + "</span><div><b>" + esc(b[1]) + "</b><span>" + esc(b[2]) + "</span></div></li>";
    }).join("") + "</ul>";
  }
  function bindBuy(root) {
    Array.prototype.forEach.call(root.querySelectorAll("[data-buy]"), function (b) { b.onclick = function () { buy(b.getAttribute("data-buy")); }; });
  }

  var pw = null;
  function closePaywall() {
    if (!pw) return;
    var m = pw; pw = null;
    m.classList.add("out");
    setTimeout(function () { if (m.parentNode) m.parentNode.removeChild(m); }, 250);
    document.removeEventListener("keydown", escKey);
  }
  function escKey(e) { if (e.key === "Escape") closePaywall(); }
  function paywall(reason) {
    closePaywall();
    var r = REASONS[reason] || REASONS.upgrade;
    pw = document.createElement("div");
    pw.className = "modal paywall";
    pw.innerHTML = '<div class="modal-back"></div><div class="modal-card wide" role="dialog" aria-modal="true" aria-labelledby="pwTitle"><button class="modal-x" aria-label="Close">×</button>' +
      '<div class="pw-crown" aria-hidden="true">👑</div><h2 id="pwTitle">' + esc(r[0]) + '</h2><p class="muted">' + esc(r[1]) + "</p>" +
      plansHtml(true) + benefitsHtml(6) +
      (reason === "quota" ? '<p class="small muted pw-free">Free plan: 15 questions a day in any mode + the daily challenge. Your streak, XP and progress are kept.</p>' : "") +
      '<p class="small muted pw-free"><a href="#/premium" id="pwMore">Compare Free and Premium</a> · Secure payment by Stripe</p></div>';
    document.body.appendChild(pw);
    pw.querySelector(".modal-back").onclick = closePaywall;
    pw.querySelector(".modal-x").onclick = closePaywall;
    pw.querySelector("#pwMore").onclick = closePaywall;
    document.addEventListener("keydown", escKey);
    bindBuy(pw);
  }
  // Blurred block with an unlock button (for free users).
  function lockOverlay(html, reason, label) {
    return '<div class="locked-wrap"><div class="locked-blur" aria-hidden="true" inert>' + html + '</div><div class="locked-cta"><span>🔒</span><b>' +
      esc(label || "Premium") + '</b><button class="btn primary sm" data-paywall="' + (reason || "stats") + '">Unlock with Premium</button></div></div>';
  }
  function bindLocks(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll("[data-paywall]"), function (b) {
      b.onclick = function (e) { e.preventDefault(); paywall(b.getAttribute("data-paywall")); };
    });
  }

  // ---------- Premium page ----------
  function renderPremium() {
    var A = window.CAMSApp;
    var app = document.getElementById("app");
    A.setView("page");
    A.setTopbar(A.homeChips());
    var isP = premium(), e = entitlement();
    var status = /status=success/.test(location.hash);
    var html = '<div class="page-head fade-in premium-head"><div class="pw-crown big" aria-hidden="true">👑</div><h1>' + (isP ? "You're Premium." : "Pass CAMS faster.") + "</h1>" +
      '<p class="muted">' + (isP ? "Thanks for your support. Everything is unlocked." : "Unlimited practice, mock exams and analytics, for less than the price of one coffee a week.") + "</p></div>";
    if (status && !isP) html += '<div class="card fade-in" id="payWait" style="text-align:center"><b>Payment received, activating Premium…</b><p class="muted small">This takes a few seconds.</p></div>';
    if (isP) {
      html += '<div class="card fade-in" style="text-align:center"><p>Plan: <b>' + esc(e.plan === "lifetime" ? "Lifetime" : (PLANS.filter(function (p) { return p.id === e.plan; })[0] || {}).name || e.plan || "Premium") + "</b>" +
        (e.until ? " · " + (e.plan === "pass6" ? "valid until " : "renews or ends on ") + new Date(e.until).toLocaleDateString() : "") + "</p>" +
        (stripe.portal ? '<a class="btn" href="' + esc(stripe.portal) + '" target="_blank" rel="noopener">Manage subscription and invoices</a>' : "") + "</div>";
    } else {
      html += plansHtml(false);
      html += '<div class="card fade-in compare"><table><thead><tr><th></th><th>Free</th><th>Premium</th></tr></thead><tbody>' + [
        ["Questions", "15 a day, any mode", "Unlimited (510)"], ["Daily challenge", "✓", "✓"], ["Answers and sourced explanations", "✓", "✓"],
        ["Practice, Lightning, Survival, Smart review, by theme", "Within the 15 a day", "Unlimited"], ["Mock exams (timed, 30 questions)", "1 free", "Unlimited"],
        ["Numbers sprint", "1 a day", "Unlimited"], ["Exam readiness and predicted score", "Blurred", "✓"], ["Weak topics and charts", "Blurred", "✓"],
        ["Course lessons", "2 of 13", "All 13 + flashcards + sprint"], ["Leaderboards", "View", "Compete"], ["Exam readiness certificate", "Track the goals", "Download and share"], ["Sync across devices", "With a free account", "✓"]
      ].map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td><b>" + r[2] + "</b></td></tr>"; }).join("") + "</tbody></table></div>";
      html += '<div class="card fade-in">' + benefitsHtml() + "</div>";
      html += '<div class="card fade-in faq"><div class="dlabel">Questions</div>' + [
        ["Do I need an account?", "Not for the free plan. Premium is attached to a free account so it works on all your devices."],
        ["Can I cancel?", "Yes, monthly, 3-month and annual plans can be cancelled anytime from the subscription portal; you keep Premium until the end of the paid period. The Exam Pass is a single payment and never renews."],
        ["Is the content official ACAMS material?", "No. These are original exam-style questions and lessons, each checked against official sources (FATF, FinCEN, OFAC, EU and UK law). This site is independent from ACAMS."],
        ["How do I pay?", "By card through Stripe. We never see your card details."]
      ].map(function (q) { return "<details><summary>" + q[0] + "</summary><p>" + q[1] + "</p></details>"; }).join("") + "</div>";
    }
    app.innerHTML = html;
    bindBuy(app);
    window.scrollTo(0, 0);
    if (status && !isP) {
      var tries = 0;
      (function poll() {
        refresh().then(function (ok) {
          if (ok) { if (window.CAMSFX) window.CAMSFX.celebrate("👑", "Welcome to Premium", "Everything is unlocked. Good luck with CAMS!", "🎉"); location.replace("#/premium"); renderPremium(); }
          else if (++tries < 15 && document.getElementById("payWait")) setTimeout(poll, 2000);
          else if (document.getElementById("payWait")) document.getElementById("payWait").innerHTML = "<b>Still activating.</b><p class='muted small'>Refresh in a minute. If Premium does not appear, contact us with your payment email.</p>";
        });
      })();
    }
  }

  window.CAMSPlan = {
    FREE_DAILY: FREE_DAILY, FREE_LESSONS: FREE_LESSONS, PLANS: PLANS,
    premium: premium, entitlement: entitlement, refresh: refresh, setEntitlement: setEntitlement,
    freeLeft: freeLeft, useFree: useFree, examTrialUsed: examTrialUsed, useExamTrial: useExamTrial,
    sprintUsedToday: sprintUsedToday, useSprint: useSprint,
    check: check, lessonFree: lessonFree, paywall: paywall, closePaywall: closePaywall,
    lockOverlay: lockOverlay, bindLocks: bindLocks, buy: buy, resumeCheckout: resumeCheckout,
    hasPayments: function () { return !!(stripe.monthly || stripe.quarterly || stripe.pass6 || stripe.annual); },
    on: function (f) { listeners.push(f); },
    renderPremium: renderPremium
  };
})();
