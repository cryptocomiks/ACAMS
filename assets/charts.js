/* CAMS Exam Trainer — small SVG charts (line, columns, horizontal bars) with hover/focus tooltips
 * and a table view. Single-series charts: one accent hue, a hairline reference (e.g. pass mark),
 * recessive solid grid. No dependencies. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";

  function el(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function div(cls, parent) { var d = document.createElement("div"); d.className = cls; if (parent) parent.appendChild(d); return d; }

  // Shell: title row with a Chart/Table toggle, the plot area, a tooltip and a table twin.
  function shell(host, cfg, draw, rows) {
    host.innerHTML = "";
    host.classList.add("viz");
    var head = div("viz-head", host);
    var t = div("viz-title", head);
    t.textContent = cfg.title || "";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "viz-toggle";
    btn.textContent = "Table";
    btn.setAttribute("aria-pressed", "false");
    head.appendChild(btn);
    if (cfg.subtitle) { var s = div("viz-sub", host); s.textContent = cfg.subtitle; }
    var plot = div("viz-plot", host);
    var tip = div("viz-tip", plot);
    tip.setAttribute("role", "status");
    var table = document.createElement("table");
    table.className = "viz-table";
    table.hidden = true;
    var thead = table.createTHead().insertRow();
    rows.head.forEach(function (h, i) { var th = document.createElement("th"); th.textContent = h; if (i) th.className = "num"; thead.appendChild(th); });
    var tb = table.createTBody();
    rows.body.forEach(function (r) {
      var tr = tb.insertRow();
      r.forEach(function (c, i) { var td = tr.insertCell(); td.textContent = c; if (i) td.className = "num"; });
    });
    host.appendChild(table);
    btn.onclick = function () {
      var on = table.hidden;
      table.hidden = !on;
      plot.hidden = on;
      btn.textContent = on ? "Chart" : "Table";
      btn.setAttribute("aria-pressed", String(on));
    };
    function render() {
      var w = Math.max(260, plot.clientWidth || host.clientWidth || 600);
      var old = plot.querySelector("svg");
      if (old) old.remove();
      draw(plot, w, tip);
    }
    render();
    if (window.ResizeObserver) {
      var last = plot.clientWidth;
      var ro = new ResizeObserver(function () { if (Math.abs(plot.clientWidth - last) > 4) { last = plot.clientWidth; render(); } });
      ro.observe(plot);
    }
  }

  function showTip(tip, x, y, value, label, w) {
    tip.innerHTML = "";
    var b = document.createElement("b"); b.textContent = value; tip.appendChild(b);
    var s = document.createElement("span"); s.textContent = label; tip.appendChild(s);
    tip.style.display = "block";
    var tw = tip.offsetWidth;
    tip.style.left = Math.max(0, Math.min(w - tw, x - tw / 2)) + "px";
    tip.style.top = Math.max(0, y - 58) + "px";
  }
  function hideTip(tip) { tip.style.display = "none"; }

  function niceMax(v) {
    if (v <= 10) return 10;
    var p = Math.pow(10, Math.floor(Math.log10(v))), m = v / p;
    return (m <= 2 ? 2 : m <= 5 ? 5 : 10) * p;
  }

  // ---------- Line (trend over tests) ----------
  function line(host, cfg) {
    var pts = cfg.points || [];
    var fmt = cfg.format || function (v) { return v + "%"; };
    shell(host, cfg, function (plot, W, tip) {
      var H = cfg.height || 220, L = 40, R = 44, T = 14, B = 26;
      var yMax = cfg.yMax || niceMax(Math.max.apply(null, pts.map(function (p) { return p.y; }).concat([1])));
      var svg = el("svg", { viewBox: "0 0 " + W + " " + H, width: W, height: H, role: "img", "aria-label": cfg.title || "Line chart", tabindex: "0", class: "viz-svg" }, plot);
      var iw = W - L - R, ih = H - T - B;
      var X = function (i) { return L + (pts.length < 2 ? iw / 2 : (i / (pts.length - 1)) * iw); };
      var Y = function (v) { return T + ih - (v / yMax) * ih; };
      [0, 0.25, 0.5, 0.75, 1].forEach(function (k) {
        var y = Y(yMax * k);
        el("line", { x1: L, x2: W - R, y1: y, y2: y, class: "viz-grid" }, svg);
        var tx = el("text", { x: L - 8, y: y + 4, class: "viz-axis", "text-anchor": "end" }, svg);
        tx.textContent = fmt(Math.round(yMax * k));
      });
      var ry = null;
      if (cfg.ref) {
        ry = Y(cfg.ref.value);
        el("line", { x1: L, x2: W - R, y1: ry, y2: ry, class: "viz-ref" }, svg);
        var rt = el("text", { x: W - R + 4, y: ry + 4, class: "viz-reflabel" }, svg);
        rt.textContent = cfg.ref.label;
      }
      if (!pts.length) return;
      var d = pts.map(function (p, i) { return (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(p.y).toFixed(1); }).join(" ");
      el("path", { d: d + " L" + X(pts.length - 1) + " " + Y(0) + " L" + X(0) + " " + Y(0) + " Z", class: "viz-area" }, svg);
      el("path", { d: d, class: "viz-line" }, svg);
      var last = pts[pts.length - 1];
      el("circle", { cx: X(pts.length - 1), cy: Y(last.y), r: 5, class: "viz-dot" }, svg);
      // End label above the last point, or below it when it would sit on the reference label.
      var ly = Y(last.y), ey = ly - 8, refY = ry == null ? null : ry + 4;   // text baselines
      if (refY != null && Math.abs(ey - refY) < 18) ey = Math.abs(ly + 20 - refY) >= 18 ? ly + 20 : (ly <= ry ? refY - 18 : refY + 18);
      ey = Math.max(11, Math.min(T + ih + 2, ey));
      var et = el("text", { x: X(pts.length - 1) + 8, y: ey, class: "viz-endlabel" }, svg);
      et.textContent = fmt(last.y);
      // x labels: first and last only
      [0, pts.length - 1].forEach(function (i, k) {
        if (k && pts.length < 2) return;
        var xt = el("text", { x: X(i), y: H - 6, class: "viz-axis", "text-anchor": k ? "end" : "start" }, svg);
        xt.textContent = pts[i].x;
      });
      var cross = el("line", { x1: 0, x2: 0, y1: T, y2: T + ih, class: "viz-cross", visibility: "hidden" }, svg);
      var hov = el("circle", { r: 5, class: "viz-dot", visibility: "hidden" }, svg);
      var cur = pts.length - 1;
      function at(i) {
        cur = Math.max(0, Math.min(pts.length - 1, i));
        var x = X(cur), y = Y(pts[cur].y);
        cross.setAttribute("x1", x); cross.setAttribute("x2", x); cross.setAttribute("visibility", "visible");
        hov.setAttribute("cx", x); hov.setAttribute("cy", y); hov.setAttribute("visibility", "visible");
        showTip(tip, x, y, fmt(pts[cur].y), pts[cur].tip || pts[cur].x, W);
      }
      svg.addEventListener("pointermove", function (e) {
        var r = svg.getBoundingClientRect(), px = (e.clientX - r.left) * (W / r.width);
        var i = pts.length < 2 ? 0 : Math.round(((px - L) / iw) * (pts.length - 1));
        at(i);
      });
      svg.addEventListener("pointerleave", function () { cross.setAttribute("visibility", "hidden"); hov.setAttribute("visibility", "hidden"); hideTip(tip); });
      svg.addEventListener("focus", function () { at(cur); });
      svg.addEventListener("blur", function () { hideTip(tip); cross.setAttribute("visibility", "hidden"); hov.setAttribute("visibility", "hidden"); });
      svg.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { at(cur - 1); e.preventDefault(); }
        if (e.key === "ArrowRight") { at(cur + 1); e.preventDefault(); }
      });
    }, { head: cfg.tableHead || ["Point", "Value"], body: pts.map(function (p) { return [p.tip || p.x, fmt(p.y)]; }) });
  }

  // ---------- Columns (e.g. answers per day vs goal) ----------
  function columns(host, cfg) {
    var bars = cfg.bars || [];
    var fmt = cfg.format || function (v) { return String(v); };
    shell(host, cfg, function (plot, W, tip) {
      var H = cfg.height || 200, L = 34, R = 40, T = 14, B = 26;
      var maxV = Math.max.apply(null, bars.map(function (b) { return b.value; }).concat([cfg.ref ? cfg.ref.value : 0, 1]));
      var yMax = niceMax(maxV);
      var svg = el("svg", { viewBox: "0 0 " + W + " " + H, width: W, height: H, role: "img", "aria-label": cfg.title || "Column chart", class: "viz-svg" }, plot);
      var iw = W - L - R, ih = H - T - B, band = iw / Math.max(1, bars.length), bw = Math.min(24, band - 4);
      var Y = function (v) { return T + ih - (v / yMax) * ih; };
      [0, 0.5, 1].forEach(function (k) {
        var y = Y(yMax * k);
        el("line", { x1: L, x2: W - R, y1: y, y2: y, class: "viz-grid" }, svg);
        var tx = el("text", { x: L - 6, y: y + 4, class: "viz-axis", "text-anchor": "end" }, svg);
        tx.textContent = fmt(Math.round(yMax * k));
      });
      bars.forEach(function (b, i) {
        var x = L + i * band + (band - bw) / 2, y = Y(b.value), h = T + ih - y;
        var g = el("g", { class: "viz-col", tabindex: "0", role: "img", "aria-label": (b.tip || b.label) + ": " + fmt(b.value) }, svg);
        el("rect", { x: L + i * band, y: T, width: band, height: ih, fill: "transparent" }, g);
        if (h > 0.5) {
          var r = Math.min(4, bw / 2, h);
          el("path", { d: "M" + x + " " + (T + ih) + " V" + (y + r) + " Q" + x + " " + y + " " + (x + r) + " " + y + " H" + (x + bw - r) + " Q" + (x + bw) + " " + y + " " + (x + bw) + " " + (y + r) + " V" + (T + ih) + " Z", class: "viz-bar" + (b.hit ? " hit" : "") }, g);
        }
        if (b.showLabel) {
          var lt = el("text", { x: x + bw / 2, y: H - 6, class: "viz-axis", "text-anchor": "middle" }, svg);
          lt.textContent = b.label;
        }
        var show = function () { showTip(tip, x + bw / 2, y, fmt(b.value), b.tip || b.label, W); };
        g.addEventListener("pointerenter", show);
        g.addEventListener("focus", show);
        g.addEventListener("pointerleave", function () { hideTip(tip); });
        g.addEventListener("blur", function () { hideTip(tip); });
      });
      if (cfg.ref) {
        var ry = Y(cfg.ref.value);
        el("line", { x1: L, x2: W - R, y1: ry, y2: ry, class: "viz-ref" }, svg);
        var rt = el("text", { x: W - R + 4, y: ry + 4, class: "viz-reflabel" }, svg);
        rt.textContent = cfg.ref.label;
      }
    }, { head: cfg.tableHead || ["Label", "Value"], body: bars.map(function (b) { return [b.tip || b.label, fmt(b.value)]; }) });
  }

  // ---------- Horizontal bars (domains, topics) ----------
  function hbars(host, cfg) {
    var bars = cfg.bars || [];
    var fmt = cfg.format || function (v) { return v + "%"; };
    shell(host, cfg, function (plot, W, tip) {
      var rowH = 38, T = cfg.ref ? 22 : 6, H = T + bars.length * rowH + 20, labelW = Math.min(W * 0.42, 260), R = 46;
      var max = cfg.max || 100;
      var svg = el("svg", { viewBox: "0 0 " + W + " " + H, width: W, height: H, role: "img", "aria-label": cfg.title || "Bar chart", class: "viz-svg" }, plot);
      var X = function (v) { return labelW + (v / max) * (W - labelW - R); };
      [0, 50, 100].forEach(function (v) {
        var x = X(v * max / 100);
        el("line", { x1: x, x2: x, y1: T, y2: H - 18, class: "viz-grid" }, svg);
        var tx = el("text", { x: x, y: H - 4, class: "viz-axis", "text-anchor": "middle" }, svg);
        tx.textContent = fmt(Math.round(v * max / 100));
      });
      if (cfg.ref) {
        var rx = X(cfg.ref.value);
        el("line", { x1: rx, x2: rx, y1: T - 4, y2: H - 18, class: "viz-ref" }, svg);
        var rt = el("text", { x: rx, y: T - 8, class: "viz-reflabel", "text-anchor": "middle" }, svg);
        rt.textContent = cfg.ref.label;
      }
      bars.forEach(function (b, i) {
        var y = T + i * rowH, cy = y + rowH / 2;
        var g = el("g", { class: "viz-col", tabindex: "0", role: "img", "aria-label": b.label + ": " + (b.valueLabel || fmt(b.value)) }, svg);
        el("rect", { x: 0, y: y, width: W, height: rowH, fill: "transparent" }, g);
        var lt = el("text", { x: 0, y: cy + 4, class: "viz-label" }, g);
        var maxChars = Math.max(6, Math.floor((labelW - 10) / 7));
        var name = b.label.length > maxChars ? b.label.slice(0, maxChars - 1).trim() + "…" : b.label;
        lt.textContent = name;
        var x0 = labelW, x1 = X(Math.max(0, b.value)), h = 14;
        if (x1 - x0 > 0.5) {
          var r = Math.min(4, (x1 - x0) / 2);
          el("path", { d: "M" + x0 + " " + (cy - h / 2) + " H" + (x1 - r) + " Q" + x1 + " " + (cy - h / 2) + " " + x1 + " " + (cy - h / 2 + r) + " V" + (cy + h / 2 - r) + " Q" + x1 + " " + (cy + h / 2) + " " + (x1 - r) + " " + (cy + h / 2) + " H" + x0 + " Z", class: "viz-bar" + (b.dim ? " dim" : "") }, g);
        }
        var vt = el("text", { x: x1 + 6, y: cy + 4, class: "viz-value" }, g);
        vt.textContent = b.valueLabel || fmt(b.value);
        var show = function () { showTip(tip, x1, y + 6, b.valueLabel || fmt(b.value), b.tip || b.label, W); };
        g.addEventListener("pointerenter", show);
        g.addEventListener("focus", show);
        g.addEventListener("pointerleave", function () { hideTip(tip); });
        g.addEventListener("blur", function () { hideTip(tip); });
      });
    }, { head: cfg.tableHead || ["Item", "Value"], body: bars.map(function (b) { return [b.label, b.valueLabel || fmt(b.value)]; }) });
  }

  // ---------- Gauge (semicircle meter, for the readiness hero) ----------
  function gauge(value, opts) {
    opts = opts || {};
    var v = Math.max(0, Math.min(100, value));
    var r = 80, c = Math.PI * r;
    var mark = opts.mark != null ? opts.mark : null;
    var mx = 0, my = 0;
    if (mark != null) { var a = Math.PI * (1 - mark / 100); mx = 100 + Math.cos(a) * r; my = 100 - Math.sin(a) * r; }
    return '<svg class="gauge" viewBox="0 0 200 116" role="img" aria-label="' + (opts.label || "Meter") + ": " + Math.round(v) + '%">' +
      '<defs><linearGradient id="gg" x1="0" x2="1"><stop offset="0" stop-color="#0a84ff"/><stop offset=".55" stop-color="#5e5ce6"/><stop offset="1" stop-color="#bf5af2"/></linearGradient></defs>' +
      '<path d="M20 100 A80 80 0 0 1 180 100" class="gauge-track"/>' +
      '<path d="M20 100 A80 80 0 0 1 180 100" class="gauge-val" stroke="url(#gg)" stroke-dasharray="' + (c * v / 100) + " " + c + '"/>' +
      (mark != null ? '<line x1="' + (100 + (mx - 100) * 0.82) + '" y1="' + (100 + (my - 100) * 0.82) + '" x2="' + (100 + (mx - 100) * 1.12) + '" y2="' + (100 + (my - 100) * 1.12) + '" class="gauge-mark"/>' : "") +
      "</svg>";
  }

  window.CAMSCharts = { line: line, columns: columns, hbars: hbars, gauge: gauge };
})();
