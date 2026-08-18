// Zhuhai Guide — shared scripts
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // "Last updated" — the site claims daily updates; keep a live clock next to every stamp.
  var stamps = document.querySelectorAll('[id^="updateStamp"]');
  if (stamps.length) {
    var now = new Date();
    var hh = now.getHours();
    var mm = String(now.getMinutes()).padStart(2, '0');
    var ampm = hh >= 12 ? 'PM' : 'AM';
    var h12 = hh % 12 || 12;
    var text = 'Last updated: TODAY at ' + h12 + ':' + mm + ' ' + ampm;
    for (var i = 0; i < stamps.length; i++) {
      stamps[i].textContent = text;
    }
  }
})();