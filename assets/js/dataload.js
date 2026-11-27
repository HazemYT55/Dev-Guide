// Loads every category data file. Add new categories here only.
// Bump V on every release: data file URLs carry ?v=V so a fresh loader
// always fetches matching data, and a cached loader keeps rendering the
// previous consistent release (GitHub Pages caches assets for ~10 minutes).
(function () {
  var V = '2026-11-27.8';
  var files = ['hosting', 'domains', 'databases', 'email', 'auth', 'serverless', 'monitoring', 'analytics', 'forms', 'courses', 'tools', 'design', 'dns-ssl', 'payments', 'ai', 'fonts', 'baas', 'messaging', 'cms', 'webhosting'];
  files.forEach(function (f) {
    document.write('<script src="assets/js/data/' + f + '.js?v=' + V + '"><\/script>');
  });
})();
