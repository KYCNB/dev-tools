/* DevTools Hub - shared scripts */
(function () {
  "use strict";

  // Auto-update footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  // Copy text to clipboard helper
  window.copyText = function (text, btn) {
    if (!text) return;
    var done = function () {
      if (!btn) return;
      var old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(function () { btn.textContent = old; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  };

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
    done();
  }

  // Generic binding for [data-copy-target] buttons (copies the value of the target element)
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-copy-target]") : null;
    if (!btn) return;
    var target = document.getElementById(btn.getAttribute("data-copy-target"));
    if (target) window.copyText(target.value !== undefined ? target.value : target.textContent, btn);
  });
})();
