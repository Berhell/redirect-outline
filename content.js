function redirect() {
  const currentUrl = window.location.href;
  const articleUrl = `https://outline.com/${currentUrl}`;
  window.open(articleUrl, "_blank").focus();
}

redirect();
