var d = document;
var w = "https://tally.so/widgets/embed.js";
var loadTallyEmbeds = function () {
  if (typeof Tally !== "undefined") {
    Tally.loadEmbeds();
  } else {
    d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function (el) {
      el.src = el.dataset.tallySrc;
    });
  }
};

if (typeof Tally !== "undefined") {
  loadTallyEmbeds();
} else if (d.querySelector('script[src="' + w + '"]') == null) {
  var s = d.createElement("script");
  s.src = w;
  s.onload = loadTallyEmbeds;
  s.onerror = loadTallyEmbeds;
  d.body.appendChild(s);
}

function showSuccess() {
  document.getElementById("waitlist-form-block").style.display = "none";
  document.getElementById("success-msg").classList.add("show");
}

var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach(function (el) {
  observer.observe(el);
});

window.addEventListener("scroll", function () {
  document.getElementById("navbar").style.boxShadow =
    window.scrollY > 20 ? "0 4px 24px rgba(28,26,23,0.08)" : "none";
});
