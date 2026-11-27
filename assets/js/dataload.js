// Loads every category data file. Add new categories here only.
// Bump V on every release: data file URLs carry ?v=V so a fresh loader
// always fetches matching data, and a cached loader keeps rendering the
// previous consistent release (GitHub Pages caches assets for ~10 minutes).
// MANIFEST guards the remaining failure mode: a mid-deploy read where the
// new loader is live but a data file still serves the previous release.
// If loaded category counts don't match this release's manifest, the page
// reloads itself once after a short wait, so a visitor never keeps a
// half-old, half-new directory. Update MANIFEST counts on every release.
(function () {
  var V = '2026-11-27.16';
  var files = ["hosting", "domains", "databases", "email", "auth", "serverless", "monitoring", "analytics", "forms", "courses", "tools", "design", "dns-ssl", "payments", "ai", "fonts", "baas", "messaging", "cms", "webhosting"];
  var MANIFEST = {"ai":14,"analytics":16,"auth":12,"baas":11,"cms":10,"courses":13,"databases":20,"design":13,"dns-ssl":10,"domains":16,"email":11,"fonts":11,"forms":11,"hosting":10,"messaging":13,"monitoring":11,"payments":11,"serverless":12,"tools":21,"webhosting":11};
  files.forEach(function (f) {
    document.write('<script src="assets/js/data/' + f + '.js?v=' + V + '"><\/script>');
  });
  var checker = "(function(){try{var M={\"ai\":14,\"analytics\":16,\"auth\":12,\"baas\":11,\"cms\":10,\"courses\":13,\"databases\":20,\"design\":13,\"dns-ssl\":10,\"domains\":16,\"email\":11,\"fonts\":11,\"forms\":11,\"hosting\":10,\"messaging\":13,\"monitoring\":11,\"payments\":11,\"serverless\":12,\"tools\":21,\"webhosting\":11};var D=window.DG_DATA||{};var ok=true;Object.keys(M).forEach(function(k){var e=D[k]&&D[k].entries;if(!e||e.length!==M[k])ok=false;});if(ok){try{sessionStorage.removeItem('dg_reload')}catch(x){}}else{var done=false;try{done=sessionStorage.getItem('dg_reload')}catch(x){}if(!done){try{sessionStorage.setItem('dg_reload','1')}catch(x){}setTimeout(function(){location.reload()},4000);}}}catch(x){}})();";
  document.write('<script>' + checker + '<\/script>');
})();
