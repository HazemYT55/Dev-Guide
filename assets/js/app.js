// Dev-Guide renderer: language switch, home grid, category pages. No build step, no dependencies.
(function () {
  var DATA = window.DG_DATA || {};
  var I18N = window.DG_I18N;
  var LANGS = window.DG_LANGS;

  function getLang() {
    var fromUrl = null;
    try { fromUrl = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (fromUrl && I18N[fromUrl]) return fromUrl;
    var saved = null;
    try { saved = localStorage.getItem('dg-lang'); } catch (e) {}
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.language || 'en').slice(0, 2);
    return I18N[nav] ? nav : 'en';
  }

  var lang = getLang();

  function t(obj) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || '';
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderLangBar() {
    var bar = document.getElementById('langs');
    if (!bar) return;
    bar.innerHTML = '';
    LANGS.forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = l.label;
      b.setAttribute('aria-pressed', l.code === lang ? 'true' : 'false');
      b.addEventListener('click', function () {
        try { localStorage.setItem('dg-lang', l.code); } catch (e) {}
        lang = l.code;
        apply();
      });
      bar.appendChild(b);
    });
  }

  function renderHome() {
    var root = document.getElementById('content');
    var ui = I18N[lang];
    var html = '<section class="hero"><h1>' + esc(ui.homeTitle) + '</h1><p>' + esc(ui.tagline) + '</p>' +
      '<span class="updated">' + esc(ui.updated) + '</span></section>' +
      '<h2 class="section-title">' + esc(ui.categoriesTitle) + '</h2><div class="cat-grid">';
    Object.keys(DATA).forEach(function (id) {
      var c = DATA[id];
      html += '<a class="cat-card" href="' + esc(c.path) + '"><div class="icon">' + esc(c.icon) + '</div>' +
        '<h3>' + esc(t(c.title)) + '</h3><p>' + esc(t(c.blurb)) + '</p></a>';
    });
    html += '</div>';
    root.innerHTML = html;
  }

  function renderCategory(id) {
    var root = document.getElementById('content');
    var ui = I18N[lang];
    var c = DATA[id];
    if (!c) { renderHome(); return; }
    var html = '<a class="back-link" href="index.html">' + esc(ui.backHome) + '</a>' +
      '<section class="hero"><h1>' + esc(c.icon) + ' ' + esc(t(c.title)) + '</h1><p>' + esc(t(c.blurb)) + '</p>' +
      '<span class="updated">' + esc(ui.updated) + '</span></section>';
    c.entries.forEach(function (e) {
      html += '<article class="entry"><div class="entry-head"><h3>' + esc(e.name) + '</h3>' +
        '<a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(ui.visit) + ' ↗</a></div><dl class="kv">' +
        '<dt>' + esc(ui.freeLabel) + '</dt><dd>' + esc(t(e.free)) + '</dd>' +
        '<dt>' + esc(ui.paidLabel) + '</dt><dd>' + esc(t(e.paid)) + '</dd></dl>';
      if (e.note) html += '<div class="note">' + esc(t(e.note)) + '</div>';
      html += '<div class="src">' + esc(ui.source) + ': <a href="' + esc(e.source) + '" target="_blank" rel="noopener">' + esc(e.source) + '</a></div></article>';
    });
    root.innerHTML = html;
    document.title = t(c.title) + ' · Dev-Guide';
  }

  function apply() {
    var ui = I18N[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = ui.dir;
    renderLangBar();
    var page = document.body.getAttribute('data-page');
    if (page === 'home') renderHome(); else renderCategory(page);
    var brand = document.getElementById('brand');
    if (brand) brand.innerHTML = 'Dev<span>-Guide</span>';
    var foot = document.getElementById('disclaimer');
    if (foot) foot.textContent = ui.disclaimer;
  }

  apply();
})();
