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
      '<h2 class="section-title">' + esc(ui.categoriesTitle) + '</h2>' +
      '<input class="search" id="dg-search" type="search" placeholder="' + esc(ui.searchPlaceholder) + '" aria-label="' + esc(ui.searchPlaceholder) + '">' +
      '<div class="cat-grid">';
    Object.keys(DATA).forEach(function (id) {
      var c = DATA[id];
      html += '<a class="cat-card" href="' + esc(c.path) + '"><div class="icon">' + c.icon + '</div>' +
        '<h3>' + esc(t(c.title)) + '</h3><p>' + esc(t(c.blurb)) + '</p></a>';
    });
    html += '</div>';
    root.innerHTML = html;
    var box = document.getElementById('dg-search');
    if (box) box.addEventListener('input', function () {
      var q = box.value.trim().toLowerCase();
      var any = false;
      root.querySelectorAll('.cat-card').forEach(function (card) {
        var hit = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
        card.style.display = hit ? '' : 'none';
        if (hit) any = true;
      });
      var empty = document.getElementById('dg-empty');
      if (!any && !empty) {
        var d = document.createElement('p');
        d.id = 'dg-empty';
        d.className = 'no-results';
        d.textContent = ui.noResults;
        root.querySelector('.cat-grid').appendChild(d);
      } else if (any && empty) empty.remove();
    });
  }

  function renderCategory(id) {
    var root = document.getElementById('content');
    var ui = I18N[lang];
    var c = DATA[id];
    if (!c) { renderHome(); return; }
    var html = '<a class="back-link" href="index.html">' + esc(ui.backHome) + '</a>' +
      '<section class="hero"><h1>' + c.icon + ' ' + esc(t(c.title)) + '</h1><p>' + esc(t(c.blurb)) + '</p>' +
      '<span class="updated">' + esc(ui.updated) + '</span></section>' +
      '<input class="search" id="dg-search" type="search" placeholder="' + esc(ui.searchPlaceholder) + '" aria-label="' + esc(ui.searchPlaceholder) + '">';
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
    var box = document.getElementById('dg-search');
    if (box) box.addEventListener('input', function () {
      var q = box.value.trim().toLowerCase();
      var any = false;
      root.querySelectorAll('.entry').forEach(function (card) {
        var hit = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
        card.style.display = hit ? '' : 'none';
        if (hit) any = true;
      });
      var empty = document.getElementById('dg-empty');
      if (!any && !empty) {
        var d = document.createElement('p');
        d.id = 'dg-empty';
        d.className = 'no-results';
        d.textContent = ui.noResults;
        root.appendChild(d);
      } else if (any && empty) empty.remove();
    });
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
