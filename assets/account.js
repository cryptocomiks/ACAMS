/* CAMS Exam Trainer — optional accounts (Supabase email + password) and cloud sync of progress.
 * Without a Supabase config the site works exactly the same, with progress kept on this device. */
(function () {
  "use strict";

  var cfg = window.CAMS_CONFIG || {};
  var PG = window.CAMSProgress;
  var slot = document.getElementById("account");
  var OWNER = "cams.owner.v1";
  var SDK = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js";

  var client = null, user = null, syncedFor = null;
  var pushTimer = null, dirty = false, state = "idle"; // idle | syncing | saved | error | offline
  var enabled = !!(cfg.supabaseUrl && cfg.supabaseAnonKey);

  window.CAMSSync = {
    schedule: function () {
      if (!client || !user) return;
      dirty = true;
      clearTimeout(pushTimer);
      pushTimer = setTimeout(push, 1500);
    }
  };
  window.CAMSAccount = {
    enabled: enabled,
    user: function () { return user; },
    open: function (view) { openModal(view || "signup"); }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function getOwner() { try { return localStorage.getItem(OWNER); } catch (e) { return null; } }
  function setOwner(v) { try { if (v) localStorage.setItem(OWNER, v); else localStorage.removeItem(OWNER); } catch (e) { /* ignore */ } }
  function refreshUI() { renderSlot(); if (window.CAMSUI) window.CAMSUI.refresh(); }
  function displayName(u) {
    u = u || user;
    if (!u) return "";
    return (u.user_metadata && u.user_metadata.display_name) || (u.email || "").split("@")[0];
  }

  // ---------- Header slot ----------
  function renderSlot() {
    if (!slot) return;
    if (!enabled) { slot.innerHTML = ""; return; }
    if (user) {
      var n = displayName();
      slot.innerHTML = '<button class="avatar" id="accBtn" aria-label="Account: ' + esc(n) + '" title="' + esc(n) + '">' +
        esc(n.charAt(0).toUpperCase() || "?") + '<i class="sync-dot ' + state + '"></i></button>';
    } else {
      slot.innerHTML = '<button class="btn sm" id="accBtn">Sign in</button>';
    }
    document.getElementById("accBtn").onclick = function () { openModal(user ? "account" : "signin"); };
  }

  // ---------- Modal ----------
  var modal = null;
  function closeModal() {
    if (!modal) return;
    modal.classList.add("out");
    var m = modal;
    modal = null;
    setTimeout(function () { if (m.parentNode) m.parentNode.removeChild(m); }, 250);
    document.removeEventListener("keydown", escClose);
  }
  function escClose(e) { if (e.key === "Escape") closeModal(); }

  function field(id, label, type, extra) {
    return '<label class="fld"><span>' + label + '</span><input id="' + id + '" type="' + type + '" ' + (extra || "") + "></label>";
  }

  function openModal(view) {
    if (!enabled) return;
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal";
      modal.innerHTML = '<div class="modal-back"></div><div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="mTitle"><button class="modal-x" aria-label="Close">×</button><div id="mBody"></div></div>';
      document.body.appendChild(modal);
      modal.querySelector(".modal-back").onclick = closeModal;
      modal.querySelector(".modal-x").onclick = closeModal;
      document.addEventListener("keydown", escClose);
    }
    var body = modal.querySelector("#mBody");
    var html = "";
    if (view === "signin" || view === "signup") {
      var up = view === "signup";
      html = '<div class="m-logo">✓</div><h2 id="mTitle">' + (up ? "Create your account" : "Welcome back") + "</h2>" +
        '<p class="muted small">' + (up ? "Free. Keep your streak, XP, badges and review schedule on every device."
          : "Sign in to sync your progress across devices.") + "</p>" +
        '<div class="seg m-tabs"><button type="button" data-v="signin" aria-pressed="' + !up + '">Sign in</button><button type="button" data-v="signup" aria-pressed="' + up + '">Create account</button></div>' +
        '<form id="mForm" novalidate>' +
        (up ? field("mName", "Display name", "text", 'autocomplete="nickname" maxlength="40" placeholder="Alex"') : "") +
        field("mEmail", "Email", "email", 'autocomplete="email" required placeholder="you@example.com"') +
        field("mPass", "Password", "password", 'autocomplete="' + (up ? "new-password" : "current-password") + '" required minlength="8" placeholder="' + (up ? "At least 8 characters" : "") + '"') +
        '<div class="m-msg" id="mMsg" role="status"></div>' +
        '<button class="btn primary m-submit" type="submit">' + (up ? "Create account" : "Sign in") + "</button></form>" +
        (up ? "" : '<button class="link-btn m-forgot" id="mForgot" type="button">Forgot password?</button>') +
        '<p class="m-foot">No account needed to practise. Without one, progress stays on this device.</p>';
    } else if (view === "forgot") {
      html = '<h2 id="mTitle">Reset your password</h2><p class="muted small">We will email you a link to choose a new password.</p>' +
        '<form id="mForm" novalidate>' + field("mEmail", "Email", "email", 'autocomplete="email" required') +
        '<div class="m-msg" id="mMsg" role="status"></div><button class="btn primary m-submit" type="submit">Send reset link</button></form>' +
        '<button class="link-btn m-forgot" data-v="signin" type="button">Back to sign in</button>';
    } else if (view === "recover") {
      html = '<h2 id="mTitle">Choose a new password</h2><form id="mForm" novalidate>' +
        field("mPass", "New password", "password", 'autocomplete="new-password" required minlength="8"') +
        '<div class="m-msg" id="mMsg" role="status"></div><button class="btn primary m-submit" type="submit">Save password</button></form>';
    } else if (view === "account") {
      var g = PG.gam(), lv = PG.levelFor(g.xp), st = PG.streak(g);
      var stateText = { idle: "Synced", syncing: "Syncing…", saved: "All changes saved", error: "Sync failed, will retry", offline: "Offline, will sync later" }[state] || "Synced";
      html = '<div class="m-avatar">' + esc(displayName().charAt(0).toUpperCase()) + '</div><h2 id="mTitle">' + esc(displayName()) + "</h2>" +
        '<p class="muted small">' + esc(user.email) + "</p>" +
        '<div class="m-stats"><div><b>Lv ' + lv.level + "</b><span>" + esc(PG.titleFor(lv.level)) + "</span></div><div><b>" + g.xp.toLocaleString() +
        "</b><span>XP</span></div><div><b>🔥 " + st.current + "</b><span>streak</span></div><div><b>" + Object.keys(g.badges).length + "</b><span>badges</span></div></div>" +
        '<p class="m-sync"><i class="sync-dot ' + state + '"></i>' + stateText + "</p>" +
        '<form id="mForm" novalidate>' + field("mName", "Display name", "text", 'maxlength="40" value="' + esc(displayName()) + '"') +
        '<div class="m-msg" id="mMsg" role="status"></div><button class="btn m-submit" type="submit">Save name</button></form>' +
        '<button class="btn danger m-out" id="mOut" type="button">Sign out</button>';
    }
    body.innerHTML = html;
    Array.prototype.forEach.call(body.querySelectorAll("[data-v]"), function (b) {
      b.onclick = function () { openModal(b.getAttribute("data-v")); };
    });
    var fg = body.querySelector("#mForgot");
    if (fg) fg.onclick = function () { openModal("forgot"); };
    var out = body.querySelector("#mOut");
    if (out) out.onclick = signOut;
    var form = body.querySelector("#mForm");
    if (form) form.onsubmit = function (e) { e.preventDefault(); submit(view, form); };
    var first = body.querySelector("input");
    if (first && view !== "account") setTimeout(function () { first.focus(); }, 50);
  }

  function msg(text, kind) {
    var el = modal && modal.querySelector("#mMsg");
    if (el) { el.textContent = text; el.className = "m-msg " + (kind || ""); }
  }
  function busy(form, on) {
    var b = form.querySelector(".m-submit");
    if (b) { b.disabled = on; b.classList.toggle("loading", on); }
  }
  function friendly(err) {
    var m = (err && (err.message || err.error_description)) || String(err);
    if (/invalid login credentials/i.test(m)) return "Wrong email or password.";
    if (/email not confirmed/i.test(m)) return "Please confirm your email first. Check your inbox (and spam).";
    if (/already registered|already exists/i.test(m)) return "An account already exists with this email. Try signing in.";
    if (/rate limit/i.test(m)) return "Too many attempts. Please wait a minute and try again.";
    if (/password/i.test(m) && /(6|8|characters|weak)/i.test(m)) return "Password too weak: use at least 8 characters.";
    if (/fetch|network/i.test(m)) return "Network error. Check your connection.";
    return m;
  }

  function submit(view, form) {
    var email = form.querySelector("#mEmail"), pass = form.querySelector("#mPass"), name = form.querySelector("#mName");
    var ev = email && email.value.trim(), pv = pass && pass.value;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ev)) return msg("Enter a valid email address.", "err");
    if (pass && pv.length < 8) return msg("Password must be at least 8 characters.", "err");
    busy(form, true);
    msg("");
    var p;
    var redirect = location.origin + location.pathname;
    if (view === "signup") {
      p = client.auth.signUp({ email: ev, password: pv, options: { data: { display_name: (name && name.value.trim()) || ev.split("@")[0] }, emailRedirectTo: redirect } })
        .then(function (r) {
          if (r.error) throw r.error;
          if (!r.data.session) msg("Almost there! We sent a confirmation link to " + ev + ". Open it, then sign in.", "ok");
          else closeModal();
        });
    } else if (view === "signin") {
      p = client.auth.signInWithPassword({ email: ev, password: pv }).then(function (r) { if (r.error) throw r.error; closeModal(); });
    } else if (view === "forgot") {
      p = client.auth.resetPasswordForEmail(ev, { redirectTo: redirect }).then(function (r) {
        if (r.error) throw r.error;
        msg("If an account exists for " + ev + ", a reset link is on its way.", "ok");
      });
    } else if (view === "recover") {
      p = client.auth.updateUser({ password: pv }).then(function (r) {
        if (r.error) throw r.error;
        msg("Password updated. You are signed in.", "ok");
        setTimeout(closeModal, 1200);
      });
    } else if (view === "account") {
      var nv = (name.value || "").trim().slice(0, 40);
      p = client.auth.updateUser({ data: { display_name: nv } }).then(function (r) {
        if (r.error) throw r.error;
        user = r.data.user;
        renderSlot();
        msg("Saved.", "ok");
      });
    }
    p.catch(function (e) { msg(friendly(e), "err"); }).then(function () { busy(form, false); });
  }

  // ---------- Sync ----------
  function setState(s) {
    state = s;
    var dots = document.querySelectorAll(".sync-dot");
    Array.prototype.forEach.call(dots, function (d) { d.className = "sync-dot " + s; });
  }

  function pull() {
    return client.from("progress").select("data").eq("user_id", user.id).maybeSingle().then(function (r) {
      if (r.error) throw r.error;
      return r.data ? r.data.data : null;
    });
  }

  function push() {
    if (!client || !user) return Promise.resolve();
    if (!navigator.onLine) { setState("offline"); return Promise.resolve(); }
    clearTimeout(pushTimer);
    dirty = false;
    setState("syncing");
    return client.from("progress").upsert({ user_id: user.id, data: PG.exportAll(), updated_at: new Date().toISOString() })
      .then(function (r) {
        if (r.error) throw r.error;
        setState("saved");
      })
      .catch(function () {
        dirty = true;
        setState("error");
        pushTimer = setTimeout(push, 15000);
      });
  }

  function onSignedIn(u) {
    user = u;
    renderSlot();
    if (syncedFor === u.id) return;
    syncedFor = u.id;
    setState("syncing");
    pull().then(function (remote) {
      var owner = getOwner();
      var local = PG.exportAll();
      var data;
      if (owner && owner !== u.id) data = remote || {};          // this device held someone else's progress
      else data = PG.merge(local, remote);                         // anonymous or same user: combine
      PG.importAll(data);
      setOwner(u.id);
      PG.checkBadges({ bank: window.CAMS_QUESTIONS || [] });
      return push();
    }).then(function () {
      refreshUI();
      if (window.CAMSUI) window.CAMSUI.toast('<span class="ti">☁️</span><div><b>Signed in as ' + esc(displayName()) + "</b><span>Your progress is synced</span></div>");
    }).catch(function () { setState("error"); renderSlot(); });
  }

  function signOut() {
    var done = function () {
      client.auth.signOut().then(function () {
        PG.clearAll();
        try { localStorage.removeItem("cams.session.v1"); } catch (e) { /* ignore */ }
        setOwner(null);
        user = null;
        syncedFor = null;
        closeModal();
        refreshUI();
        if (window.CAMSUI) window.CAMSUI.toast('<span class="ti">👋</span><div><b>Signed out</b><span>Your progress is saved in your account</span></div>');
      });
    };
    push().then(done, done);
  }

  function loadSdk() {
    return new Promise(function (resolve, reject) {
      if (window.supabase && window.supabase.createClient) return resolve();
      var s = document.createElement("script");
      s.src = SDK;
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  renderSlot();
  if (!enabled) return;

  loadSdk().then(function () {
    client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    client.auth.onAuthStateChange(function (event, session) {
      if (event === "PASSWORD_RECOVERY") { if (session) user = session.user; openModal("recover"); return; }
      if (session && session.user) {
        // Defer: supabase-js recommends not awaiting other calls inside this callback.
        setTimeout(function () { onSignedIn(session.user); }, 0);
      } else if (event === "SIGNED_OUT") {
        user = null;
        renderSlot();
      }
    });
    window.addEventListener("online", function () { if (dirty) push(); });
    document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden" && dirty) push(); });
  }).catch(function () {
    enabled = false;
    renderSlot();
  });
})();
