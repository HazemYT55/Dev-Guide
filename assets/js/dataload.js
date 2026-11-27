// Loads every category data file. Add new categories here only.
// Bump V on every release: data file URLs carry ?v=V so a fresh loader
// always fetches matching data, and a cached loader keeps rendering the
// previous consistent release (GitHub Pages caches assets for ~10 minutes).
// MANIFEST guards the remaining failure mode: a mid-deploy read where the
// new loader is live but a data file still serves the previous release.
// On mismatch the page reloads itself once after a short wait; if the
// mismatch persists, it shows a clear notice instead of silently
// presenting partial data. Note: this is a mitigation, not a guarantee,
// because stale data can still carry matching counts. Update MANIFEST
// counts on every release.
(function () {
  var V = '2026-11-27.18';
  var files = ["hosting", "domains", "databases", "email", "auth", "serverless", "monitoring", "analytics", "forms", "courses", "tools", "design", "dns-ssl", "payments", "ai", "fonts", "baas", "messaging", "cms", "webhosting"];
  var MANIFEST = {"ai":14,"analytics":15,"auth":12,"baas":11,"cms":10,"courses":15,"databases":20,"design":13,"dns-ssl":10,"domains":16,"email":11,"fonts":11,"forms":11,"hosting":10,"messaging":13,"monitoring":14,"payments":11,"serverless":12,"tools":21,"webhosting":11};
  files.forEach(function (f) {
    document.write('<script src="assets/js/data/' + f + '.js?v=' + V + '"><\/script>');
  });
  var checker = "(function(){try{var M={\"ai\":14,\"analytics\":15,\"auth\":12,\"baas\":11,\"cms\":10,\"courses\":15,\"databases\":20,\"design\":13,\"dns-ssl\":10,\"domains\":16,\"email\":11,\"fonts\":11,\"forms\":11,\"hosting\":10,\"messaging\":13,\"monitoring\":14,\"payments\":11,\"serverless\":12,\"tools\":21,\"webhosting\":11};var D=window.DG_DATA||{};var ok=true;Object.keys(M).forEach(function(k){var e=D[k]&&D[k].entries;if(!e||e.length!==M[k])ok=false;});if(ok){try{sessionStorage.removeItem('dg_reload')}catch(x){}return;}var done=false;try{done=sessionStorage.getItem('dg_reload')}catch(x){}if(!done){try{sessionStorage.setItem('dg_reload','1')}catch(x){}setTimeout(function(){location.reload()},4000);}else{var show=function(){if(document.getElementById('dg-stale'))return;var d=document.createElement('div');d.id='dg-stale';d.setAttribute('style','position:fixed;bottom:12px;left:12px;right:12px;max-width:520px;margin:auto;background:#fff7ed;border:1px solid #f59e0b;color:#92400e;padding:10px 14px;border-radius:10px;font-size:13px;text-align:center;z-index:9999;');d.textContent='Some sections may not have loaded fully. Refresh in a few minutes. | \u0628\u0639\u0636 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0631\u0628\u0645\u0627 \u0644\u0645 \u062a\u0643\u062a\u0645\u0644\u060c \u062d\u062f\u0651\u062b \u0627\u0644\u0635\u0641\u062d\u0629 \u0628\u0639\u062f \u062f\u0642\u0627\u0626\u0642.';document.body.appendChild(d);};if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',show);}else{show();}}}catch(x){}})();";
  document.write('<script>' + checker + '<\/script>');
})();
