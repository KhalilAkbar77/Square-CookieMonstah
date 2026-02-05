console.log("Accessibility Script Loaded");

(function () {
  if (window.__squareA11yLoaded) return;
  window.__squareA11yLoaded = true;

  document.addEventListener('DOMContentLoaded', function () {

    // Example 1: Announce target=_blank links
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
      if (link.querySelector('.visually-hidden')) return;

      var span = document.createElement('span');
      span.className = 'visually-hidden';
      span.textContent = ' (This link will open in a new tab)';
      link.appendChild(span);
    });

    // Example 2: Ensure buttons have focus
    // document.querySelectorAll('button, [role="button"]').forEach(function (btn) {
    //   btn.setAttribute('tabindex', '0');
    // });

  });
})();