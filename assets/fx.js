/* CAMS Exam Trainer — effects: soft synthesized sounds (muted by default), confetti, level-up overlay,
 * count-up numbers and the hourglass timer. Everything respects prefers-reduced-motion. */
(function () {
  "use strict";

  var MUTE_KEY = "cams.sound.v1";
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = null;
  var muted = true;
  try { muted = localStorage.getItem(MUTE_KEY) !== "on"; } catch (e) { /* ignore */ }

  // ---------- Sound ----------
  function ac() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function note(freq, start, dur, opts) {
    var c = ac();
    if (!c) return;
    opts = opts || {};
    var t0 = c.currentTime + (start || 0);
    var o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter();
    o.type = opts.type || "sine";
    o.frequency.setValueAtTime(freq, t0);
    if (opts.glide) o.frequency.exponentialRampToValueAtTime(opts.glide, t0 + dur);
    f.type = "lowpass";
    f.frequency.value = opts.cutoff || 3200;
    var vol = (opts.vol || 0.12);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + (opts.attack || 0.012));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(f); f.connect(g); g.connect(c.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }
  function noise(start, dur, vol, from, to) {
    var c = ac();
    if (!c) return;
    var t0 = c.currentTime + (start || 0);
    var len = Math.floor(c.sampleRate * dur);
    var buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    var src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    src.buffer = buf;
    f.type = "bandpass";
    f.frequency.setValueAtTime(from || 800, t0);
    f.frequency.exponentialRampToValueAtTime(to || 3000, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.05, t0 + dur * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(c.destination);
    src.start(t0);
  }
  var SOUNDS = {
    correct: function () { note(659.25, 0, 0.22); note(880, 0.08, 0.32); },
    wrong: function () { note(220, 0, 0.3, { type: "triangle", glide: 174.6, vol: 0.1, cutoff: 900 }); },
    combo: function (n) {
      var base = 523.25 * Math.pow(2, Math.min(n || 3, 12) / 12);
      note(base, 0, 0.18); note(base * 1.25, 0.06, 0.18); note(base * 1.5, 0.12, 0.3);
    },
    tick: function () { note(1760, 0, 0.05, { vol: 0.05, attack: 0.002 }); },
    flip: function () { noise(0, 0.16, 0.035, 600, 2600); },
    levelup: function () {
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) { note(f, i * 0.09, 0.5, { vol: 0.1 }); });
      noise(0.3, 0.6, 0.02, 3000, 8000);
    },
    badge: function () { note(1318.5, 0, 0.9, { vol: 0.07 }); note(1975.5, 0.02, 0.7, { vol: 0.035 }); },
    quest: function () { note(783.99, 0, 0.2); note(1046.5, 0.1, 0.4); },
    start: function () { note(392, 0, 0.18, { vol: 0.08 }); note(587.33, 0.09, 0.28, { vol: 0.08 }); },
    end: function () { [587.33, 739.99, 880].forEach(function (f, i) { note(f, i * 0.12, 0.45, { vol: 0.09 }); }); },
    lose: function () { note(329.63, 0, 0.25, { type: "triangle", vol: 0.09 }); note(246.94, 0.14, 0.45, { type: "triangle", vol: 0.09 }); }
  };
  function play(name, arg) {
    if (muted || !SOUNDS[name]) return;
    try { SOUNDS[name](arg); } catch (e) { /* ignore */ }
  }
  function setMuted(v) {
    muted = !!v;
    try { localStorage.setItem(MUTE_KEY, muted ? "off" : "on"); } catch (e) { /* ignore */ }
    if (!muted) play("correct");
  }

  // ---------- Confetti ----------
  var COLORS = ["#0a84ff", "#5e5ce6", "#bf5af2", "#30d158", "#ff9f0a", "#ff375f"];
  function confetti(opts) {
    if (reduced) return;
    opts = opts || {};
    var cv = document.createElement("canvas");
    cv.className = "fx-confetti";
    cv.setAttribute("aria-hidden", "true");
    document.body.appendChild(cv);
    var dpr = window.devicePixelRatio || 1;
    var W = window.innerWidth, H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    var c = cv.getContext("2d");
    c.scale(dpr, dpr);
    var n = opts.count || 140, parts = [];
    var ox = opts.x != null ? opts.x : W / 2, oy = opts.y != null ? opts.y : H * 0.35;
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2, sp = 4 + Math.random() * 9;
      parts.push({
        x: ox, y: oy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 6,
        w: 5 + Math.random() * 6, h: 8 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
        col: COLORS[i % COLORS.length], shape: i % 3
      });
    }
    var start = performance.now(), dur = opts.duration || 2200;
    (function frame(now) {
      var t = now - start;
      c.clearRect(0, 0, W, H);
      parts.forEach(function (p) {
        p.vy += 0.28; p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy; p.r += p.vr;
        c.save();
        c.globalAlpha = Math.max(0, 1 - t / dur);
        c.translate(p.x, p.y); c.rotate(p.r);
        c.fillStyle = p.col;
        if (p.shape === 0) c.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        else if (p.shape === 1) { c.beginPath(); c.arc(0, 0, p.w / 2, 0, Math.PI * 2); c.fill(); }
        else { c.beginPath(); c.moveTo(0, -p.h / 2); c.lineTo(p.w / 2, p.h / 2); c.lineTo(-p.w / 2, p.h / 2); c.fill(); }
        c.restore();
      });
      if (t < dur) requestAnimationFrame(frame); else cv.remove();
    })(start);
  }

  // ---------- Level-up / celebration overlay ----------
  function celebrate(big, title, sub, icon) {
    var ov = document.createElement("div");
    ov.className = "fx-celebrate";
    ov.setAttribute("role", "status");
    ov.innerHTML = '<div class="fx-burst"></div><div class="fx-card"><div class="fx-icon">' + (icon || "⭐") + '</div><div class="fx-big"></div><div class="fx-title"></div><div class="fx-sub"></div><div class="fx-tap">Tap to continue</div></div>';
    ov.querySelector(".fx-big").textContent = big;
    ov.querySelector(".fx-title").textContent = title || "";
    ov.querySelector(".fx-sub").textContent = sub || "";
    document.body.appendChild(ov);
    confetti({ count: 180 });
    var close = function () { ov.classList.add("out"); setTimeout(function () { ov.remove(); }, 300); document.removeEventListener("keydown", close); };
    ov.onclick = close;
    setTimeout(function () { document.addEventListener("keydown", close); }, 300);
    setTimeout(close, 3600);
  }

  // ---------- Count-up ----------
  function countUp(root) {
    var els = (root || document).querySelectorAll("[data-count]");
    Array.prototype.forEach.call(els, function (el) {
      var target = parseFloat(el.getAttribute("data-count")) || 0;
      var suffix = el.getAttribute("data-suffix") || "";
      if (reduced || target === 0) { el.textContent = Math.round(target).toLocaleString() + suffix; return; }
      var t0 = performance.now(), dur = 900;
      (function step(now) {
        var k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(target * e).toLocaleString() + suffix;
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }

  // ---------- Hourglass ----------
  // Returns markup; call hourglassUpdate(el, fraction) with fraction of time remaining (1 -> 0).
  var hgId = 0;
  function hourglass() {
    var id = "hg" + (++hgId);
    return '<div class="hourglass" data-hg="' + id + '" aria-hidden="true"><svg viewBox="0 0 60 90">' +
      '<defs><linearGradient id="' + id + 's" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf6b"/><stop offset="1" stop-color="#ff9f0a"/></linearGradient>' +
      '<clipPath id="' + id + 't"><path d="M8 8 H52 C52 28 34 36 31 45 H29 C26 36 8 28 8 8 Z"/></clipPath>' +
      '<clipPath id="' + id + 'b"><path d="M29 45 H31 C34 54 52 62 52 82 H8 C8 62 26 54 29 45 Z"/></clipPath></defs>' +
      '<rect x="4" y="3" width="52" height="5" rx="2.5" class="hg-cap"/><rect x="4" y="82" width="52" height="5" rx="2.5" class="hg-cap"/>' +
      '<path d="M8 8 H52 C52 28 34 36 31 45 C34 54 52 62 52 82 H8 C8 62 26 54 29 45 C26 36 8 28 8 8 Z" class="hg-glass"/>' +
      '<g clip-path="url(#' + id + 't)"><rect class="hg-top" x="0" y="8" width="60" height="37" fill="url(#' + id + 's)"/></g>' +
      '<g clip-path="url(#' + id + 'b)"><rect class="hg-bot" x="0" y="82" width="60" height="0" fill="url(#' + id + 's)"/></g>' +
      '<line class="hg-stream" x1="30" y1="45" x2="30" y2="80" stroke="url(#' + id + 's)" stroke-width="1.6" stroke-dasharray="2 3"/>' +
      "</svg></div>";
  }
  function hourglassUpdate(el, frac) {
    if (!el) return;
    frac = Math.max(0, Math.min(1, frac));
    var top = el.querySelector(".hg-top"), bot = el.querySelector(".hg-bot"), st = el.querySelector(".hg-stream");
    // top sand level drops from y=8 (full) to y=45 (empty)
    var ty = 8 + (1 - frac) * 37;
    top.setAttribute("y", ty.toFixed(2));
    top.setAttribute("height", (45 - ty).toFixed(2));
    var bh = (1 - frac) * 30;
    bot.setAttribute("y", (82 - bh).toFixed(2));
    bot.setAttribute("height", bh.toFixed(2));
    st.style.opacity = frac > 0.002 && frac < 0.998 ? 1 : 0;
    el.classList.toggle("low", frac < 0.2);
  }

  window.CAMSFX = {
    play: play, isMuted: function () { return muted; }, setMuted: setMuted,
    confetti: confetti, celebrate: celebrate, countUp: countUp,
    hourglass: hourglass, hourglassUpdate: hourglassUpdate, reduced: reduced
  };
})();
