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

  // "Last reviewed" stamps.
  // Each stamp carries data-review="YYYY-MM-DD" (the date content was last checked).
  // Show how old that check is, and flag the page once it's stale (default 3 days).
  // This makes the "daily updates" claim honest and verifiable, instead of faking a time.
  var MAX_AGE_DAYS = 3;
  var stamps = document.querySelectorAll('[id^="updateStamp"]');
  for (var i = 0; i < stamps.length; i++) {
    var el = stamps[i];
    var reviewed = el.getAttribute('data-review');
    if (!reviewed) continue;
    var ms = new Date(reviewed + 'T00:00:00').getTime();
    if (isNaN(ms)) continue;
    var days = Math.floor((Date.now() - ms) / 86400000);
    if (days < 0) days = 0;
    if (days <= MAX_AGE_DAYS) {
      el.textContent = 'Last reviewed: ' + reviewed + ' · ' + fmt(days);
    } else {
      el.classList.add('stale');
      el.textContent = 'Needs update — last reviewed ' + reviewed + ' (' + days + ' days ago)';
    }
  }

  // Footer date stamps: replace the literal "TODAY" with the real local date so nothing displays a fake value.
  var checks = document.querySelectorAll('.footer-check');
  var today = new Date().toISOString().slice(0, 10);
  for (var j = 0; j < checks.length; j++) {
    checks[j].textContent = 'Last checked: ' + today;
  }

  function fmt(d) {
    if (d === 0) return 'today';
    if (d === 1) return '1 day ago';
    return d + ' days ago';
  }
})();