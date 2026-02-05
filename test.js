console.log("Accessibility Script Loaded");

$(document).ready(function () {
  const currentHost = window.location.hostname.replace(/^www\./, '');
  const warningText = " (this link will open in a new tab)";

  // Select all HTTP/HTTPS links excluding mailto, tel, and anchors
  $('a[href^="http://"], a[href^="https://"]').each(function () {
    const $link = $(this);
    const linkHost = this.hostname ? this.hostname.replace(/^www\./, '') : '';

    // Skip internal links or invalid hosts
    if (!linkHost || linkHost === currentHost) return;

    // Get visible text or fallback from image alt
    let linkText = $link.text().trim();
    if (!linkText) {
      const imgAlt = $link.find('img').attr('alt');
      linkText = imgAlt ? imgAlt.trim() : "this link";
    }

    // Preserve existing aria-label if present
    const currentAriaLabel = $link.attr('aria-label');
    const newLabel = currentAriaLabel
      ? `${currentAriaLabel}${warningText}`
      : `${linkText}${warningText}`;

    // Apply attributes
    $link.attr({
      'aria-label': newLabel,
      'title': newLabel, // optional visual tooltip
      'target': '_blank',
      'rel': 'noopener noreferrer nofollow'
    });

    // Optional: add visual indicator class
    $link.addClass('external-link');
  });
});