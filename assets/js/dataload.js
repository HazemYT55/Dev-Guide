// Loads every category data file. Add new categories here only.
(function () {
  var files = ['hosting', 'domains', 'databases', 'email', 'auth', 'serverless', 'monitoring', 'analytics', 'forms', 'courses', 'tools', 'design', 'dns-ssl', 'payments', 'ai', 'fonts', 'baas'];
  files.forEach(function (f) {
    document.write('<script src="assets/js/data/' + f + '.js"><\/script>');
  });
})();
