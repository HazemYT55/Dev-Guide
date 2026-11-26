window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.monitoring = {
  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>',
  path: 'monitoring.html',
  title: { ar: 'المراقبة وتتبع الأخطاء', en: 'Monitoring and error tracking', es: 'Monitorización y errores', fr: 'Supervision et suivi d’erreurs', de: 'Monitoring und Fehler-Tracking' },
  blurb: {
    ar: 'اعرف أول ما موقعك يقع أو تطبيقك يرمي خطأ، قبل ما المستخدمين يشتكوا.',
    en: 'Know the moment your site goes down or your app throws, before users complain.',
    es: 'Entérate cuando tu sitio cae o tu app falla, antes de que los usuarios se quejen.',
    fr: 'Sachez quand votre site tombe ou votre appli plante, avant que les utilisateurs ne se plaignent.',
    de: 'Erfahre sofort, wenn deine Seite ausfällt oder deine App Fehler wirft, bevor sich Nutzer beschweren.',
  },
  entries: [
    {
      name: 'UptimeRobot',
      url: 'https://uptimerobot.com',
      free: { ar: '٥٠ مراقب بفحص كل ٥ دقايق', en: '50 monitors with 5-minute checks', es: '50 monitores con chequeos cada 5 minutos', fr: '50 moniteurs avec contrôles toutes les 5 minutes', de: '50 Monitore mit 5-Minuten-Prüfung' },
      paid: { ar: 'Solo من ١٤٤ دولار/سنة (فحص كل ٦٠ ثانية)', en: 'Solo from $144/yr (60-second checks)', es: 'Solo desde $144/año (chequeos cada 60 segundos)', fr: 'Solo dès 144 $/an (contrôles toutes les 60 secondes)', de: 'Solo ab 144 $/Jahr (60-Sekunden-Prüfung)' },
      source: 'https://uptimerobot.com/pricing/',
    },
    {
      name: 'Better Stack',
      url: 'https://betterstack.com',
      free: { ar: '١٠ مراقبين + صفحة حالة (status page) واحدة', en: '10 monitors plus one status page', es: '10 monitores más una página de estado', fr: '10 moniteurs plus une page de statut', de: '10 Monitore plus eine Statusseite' },
      paid: { ar: 'من ٢٩ دولار/شهر للعضو', en: 'From $29 per member/mo', es: 'Desde $29 por miembro/mes', fr: 'Dès 29 $ par membre/mois', de: 'Ab 29 $ pro Mitglied/Monat' },
      note: { ar: 'صفحات الحالة بتاعته شكلها جميل وجاهزة للنشر.', en: 'Its status pages look polished out of the box.', es: 'Sus páginas de estado se ven pulidas desde el inicio.', fr: 'Ses pages de statut sont soignées dès le départ.', de: 'Die Statusseiten sehen sofort professionell aus.' },
      source: 'https://betterstack.com/pricing',
    },
    {
      name: 'Sentry',
      url: 'https://sentry.io',
      free: { ar: 'خطة Developer بصفر دولار: تتبع أخطاء لمستخدم واحد', en: 'Developer plan at $0: error monitoring for one user', es: 'Plan Developer a $0: monitoreo de errores para un usuario', fr: 'Offre Developer à 0 $ : suivi d’erreurs pour un utilisateur', de: 'Developer-Tarif für 0 $: Fehler-Monitoring für einen Nutzer' },
      paid: { ar: 'الدفع حسب حجم الأخطاء مع نموك', en: 'Pay-as-you-grow pricing by error volume', es: 'Pago según volumen de errores al crecer', fr: 'Paiement progressif selon le volume d’erreurs', de: 'Preise wachsen mit dem Fehlervolumen' },
      note: { ar: 'ده لتتبع أخطاء الكود، مش لمراقبة توافر الموقع.', en: 'This tracks code errors, not site uptime.', es: 'Esto rastrea errores de código, no el tiempo activo del sitio.', fr: 'Il suit les erreurs de code, pas la disponibilité du site.', de: 'Es verfolgt Code-Fehler, nicht die Verfügbarkeit der Seite.' },
      source: 'https://sentry.io/pricing/',
    },
  ],
};
