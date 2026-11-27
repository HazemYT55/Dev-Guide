// Dev-Guide renderer: language switch, collapsible home categories, collapsible services. No build step, no dependencies.
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

  function expandAll() {
    return /[?&]expand=1/.test(location.search);
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

  // One service as a collapsible strip (shared by home and category pages).
  var PLAN_CHIP = { free: 'chip-free', trial: 'chip-trial', paid: 'chip-paid', oss: 'chip-oss', student: 'chip-student' };
  function planChip(e, ui) {
    var plan = e.plan || 'free';
    var label = plan === 'trial' ? ui.trialLabel : plan === 'paid' ? ui.paidOnlyLabel : plan === 'oss' ? ui.ossLabel : plan === 'student' ? ui.studentLabel : ui.freeLabel;
    return '<span class="chip ' + (PLAN_CHIP[plan] || 'chip-free') + '">' + esc(label) + '</span>';
  }

  function serviceHtml(e, ui, open) {
    var html = '<article class="entry svc" data-open="' + (open ? '1' : '0') + '">' +
      '<button type="button" class="strip" aria-expanded="' + (open ? 'true' : 'false') + '">' +
      '<span class="strip-name">' + esc(e.name) + '</span>' + planChip(e, ui);
    if (e.warn) html += '<span class="chip chip-warn">⚠</span>';
    html += '<span class="chevron">▾</span></button>';
    if (e.warn) html += '<p class="warnline">' + esc(t(e.warn)) + '</p>';
    html += '<div class="entry-body"' + (open ? '' : ' hidden') + '>' +
      '<p class="rowline">' + planChip(e, ui) + ' ' + esc(t(e.free)) + '</p>' +
      '<p class="rowline"><span class="chip chip-paid">' + esc(ui.paidLabel) + '</span> ' + esc(t(e.paid)) + '</p>';
    if (e.note) html += '<div class="note">' + esc(t(e.note)) + '</div>';
    html += '<div class="entry-foot"><span class="src">' + esc(ui.source) + ': <a href="' + esc(e.source) + '" target="_blank" rel="noopener">' + esc(e.source) + '</a></span>' +
      '<a class="visit-btn" href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(ui.visit) + ' ↗</a></div>' +
      '</div></article>';
    return html;
  }

  // Toggle behavior for every strip on the page (event delegation).
  function bindToggles(root) {
    root.addEventListener('click', function (ev) {
      var btn = ev.target.closest('.strip');
      if (!btn || !root.contains(btn)) return;
      var entry = btn.closest('.entry');
      var body = entry.querySelector('.entry-body');
      if (!body) return;
      var open = entry.getAttribute('data-open') === '1';
      entry.setAttribute('data-open', open ? '0' : '1');
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      body.hidden = open;
    });
  }

  function setOpen(entry, open) {
    entry.setAttribute('data-open', open ? '1' : '0');
    var btn = entry.querySelector('.strip');
    var body = entry.querySelector('.entry-body');
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (body) body.hidden = !open;
  }

  function bindSearch(box, root, ui, scopeSelector, onQuery) {
    if (!box) return;
    box.addEventListener('input', function () {
      var q = box.value.trim().toLowerCase();
      var any = false;
      root.querySelectorAll(scopeSelector).forEach(function (card) {
        var hit = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
        card.style.display = hit ? '' : 'none';
        if (hit) any = true;
        if (onQuery) onQuery(card, q, hit);
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

  function renderHome() {
    var root = document.getElementById('content');
    var ui = I18N[lang];
    var open = expandAll();
    var total = 0;
    Object.keys(DATA).forEach(function (id) { total += DATA[id].entries.length; });
    var html = '<section class="hero"><h1>' + esc(ui.homeTitle) + '</h1><p>' + esc(ui.tagline) + '</p>' +
      '<div class="hero-meta"><span class="pill">' + total + ' ' + esc(ui.services) + '</span>' +
      '<span class="updated">' + esc(ui.updated) + '</span></div></section>' +
      '<input class="search" id="dg-search" type="search" placeholder="' + esc(ui.searchPlaceholder) + '" aria-label="' + esc(ui.searchPlaceholder) + '">' +
      '<div class="entry-list cat-list">';
    Object.keys(DATA).forEach(function (id) {
      var c = DATA[id];
      html += '<article class="entry cat" data-open="' + (open ? '1' : '0') + '">' +
        '<button type="button" class="strip" aria-expanded="' + (open ? 'true' : 'false') + '">' +
        '<span class="h-icon">' + c.icon + '</span>' +
        '<span class="strip-name">' + esc(t(c.title)) + '</span>' +
        '<span class="chip cat-count">' + c.entries.length + '</span>' +
        '<span class="chevron">▾</span></button>' +
        '<div class="entry-body"' + (open ? '' : ' hidden') + '>' +
        '<p class="cat-blurb">' + esc(t(c.blurb)) + '</p>' +
        '<div class="entry-list svc-list">';
      c.entries.forEach(function (e) { html += serviceHtml(e, ui, false); });
      html += '</div></div></article>';
    });
    html += '</div>';
    root.innerHTML = html;
    bindToggles(root);
    bindSearch(document.getElementById('dg-search'), root, ui, '.entry.cat', function (card, q, hit) {
      if (q && hit) setOpen(card, true);
      if (!q) setOpen(card, false);
      card.querySelectorAll('.entry.svc').forEach(function (s) { s.style.display = ''; });
      if (q && hit) {
        var anySvc = false;
        card.querySelectorAll('.entry.svc').forEach(function (s) {
          var sh = s.textContent.toLowerCase().indexOf(q) !== -1 || card.querySelector('.strip-name').textContent.toLowerCase().indexOf(q) !== -1;
          s.style.display = sh ? '' : 'none';
          if (sh) anySvc = true;
        });
      }
    });
  }

  function renderCategory(id) {
    var root = document.getElementById('content');
    var ui = I18N[lang];
    var c = DATA[id];
    if (!c) { renderHome(); return; }
    var open = expandAll();
    var html = '<a class="back-link" href="index.html">' + esc(ui.backHome) + '</a>' +
      '<section class="hero"><h1><span class="h-icon">' + c.icon + '</span> ' + esc(t(c.title)) + '</h1><p>' + esc(t(c.blurb)) + '</p>' +
      '<div class="hero-meta"><span class="pill">' + c.entries.length + ' ' + esc(ui.services) + '</span>' +
      '<span class="updated">' + esc(ui.updated) + '</span></div></section>' +
      '<input class="search" id="dg-search" type="search" placeholder="' + esc(ui.searchPlaceholder) + '" aria-label="' + esc(ui.searchPlaceholder) + '">' +
      '<div class="entry-list">';
    c.entries.forEach(function (e) { html += serviceHtml(e, ui, open); });
    html += '</div>';
    root.innerHTML = html;
    document.title = t(c.title) + ' · Dev-Guide';
    bindToggles(root);
    bindSearch(document.getElementById('dg-search'), root, ui, '.entry.svc');
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
