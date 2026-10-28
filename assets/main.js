(function () {
  "use strict";
  var btn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("primary-nav");
  if (!btn || !nav) { return; }
  function setOpen(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Close" : "Menu";
  }
  btn.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setOpen(false); } });
  var mq = window.matchMedia("(min-width: 901px)");
  var onChange = function () { if (mq.matches) { setOpen(false); } };
  if (mq.addEventListener) { mq.addEventListener("change", onChange); } else { mq.addListener(onChange); }
})();
