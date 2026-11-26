window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.analytics = {
  icon: '📊',
  path: 'analytics.html',
  title: { ar: 'تحليلات الزيارات', en: 'Web analytics', es: 'Analítica web', fr: 'Analyse d’audience', de: 'Web-Analytics' },
  blurb: {
    ar: 'اعرف مين بيزور موقعك ومنين. البدائل الحديثة بتحترم الخصوصية ومن غير كوكيز.',
    en: 'Know who visits your site and from where. The modern options respect privacy and skip cookies.',
    es: 'Sabe quién visita tu sitio y desde dónde. Las opciones modernas respetan la privacidad y evitan cookies.',
    fr: 'Sachez qui visite votre site et d’où. Les options modernes respectent la vie privée et évitent les cookies.',
    de: 'Erfahre, wer deine Seite besucht und woher. Die modernen Optionen respektieren Privatsphäre und verzichten auf Cookies.',
  },
  entries: [
    {
      name: 'Cloudflare Web Analytics',
      url: 'https://www.cloudflare.com/web-analytics/',
      free: { ar: 'مجاني تمامًا وبيحترم الخصوصية ومن غير كوكيز', en: 'Completely free, privacy-first, no cookies', es: 'Totalmente gratis, enfocado en privacidad, sin cookies', fr: 'Entièrement gratuit, axé vie privée, sans cookies', de: 'Komplett kostenlos, datenschutzorientiert, ohne Cookies' },
      paid: { ar: 'مفيش خطة مدفوعة — مجاني بالكامل', en: 'No paid plan — fully free', es: 'Sin plan de pago — totalmente gratis', fr: 'Pas d’offre payante — entièrement gratuit', de: 'Kein Bezahltarif — vollständig kostenlos' },
      note: { ar: 'بيشتغل حتى لو موقعك مش على Cloudflare، بمجرد إضافة سطر JavaScript.', en: 'Works even if your site is not on Cloudflare, via one JavaScript snippet.', es: 'Funciona aunque tu sitio no esté en Cloudflare, con una línea de JavaScript.', fr: 'Fonctionne même si votre site n’est pas sur Cloudflare, via un extrait JavaScript.', de: 'Funktioniert auch ohne Cloudflare-Hosting, über ein JavaScript-Snippet.' },
      source: 'https://developers.cloudflare.com/web-analytics/',
    },
    {
      name: 'Umami',
      url: 'https://umami.is',
      free: { ar: 'خطة Hobby بصفر دولار: ١٠٠ ألف حدث شهريًا وموقع واحد؛ والاستضافة الذاتية مجانية مفتوحة المصدر', en: 'Hobby at $0: 100K events/mo and 1 website; self-hosting is free and open source', es: 'Hobby a $0: 100K eventos/mes y 1 sitio web; el autoalojamiento es gratis y open source', fr: 'Hobby à 0 $ : 100 000 événements/mois et 1 site ; l’auto-hébergement est gratuit et open source', de: 'Hobby für 0 $: 100.000 Events/Monat und 1 Website; Selbst-Hosting ist kostenlos und Open Source' },
      paid: { ar: 'Pro من ٢٠ دولار/شهر (مليون حدث و٢٠ موقع)', en: 'Pro from $20/mo (1M events, 20 sites)', es: 'Pro desde $20/mes (1M de eventos, 20 sitios)', fr: 'Pro dès 20 $/mois (1 M d’événements, 20 sites)', de: 'Pro ab 20 $/Monat (1 Mio. Events, 20 Websites)' },
      source: 'https://umami.is/pricing',
    },
    {
      name: 'Plausible',
      url: 'https://plausible.io',
      free: { ar: 'مفيش خطة مجانية؛ تجربة ٣٠ يوم من غير بطاقة', en: 'No free plan; a 30-day trial with no card', es: 'Sin plan gratis; prueba de 30 días sin tarjeta', fr: 'Pas d’offre gratuite ; essai de 30 jours sans carte', de: 'Kein Gratis-Tarif; 30-tägiger Test ohne Karte' },
      paid: { ar: 'Starter من ٩ دولار/شهر (لحد ١٠ آلاف مشاهدة صفحة)', en: 'Starter from $9/mo (up to 10k pageviews)', es: 'Starter desde $9/mes (hasta 10k páginas vistas)', fr: 'Starter dès 9 $/mois (jusqu’à 10 000 pages vues)', de: 'Starter ab 9 $/Monat (bis zu 10.000 Seitenaufrufe)' },
      note: { ar: 'مدفوع من الأول لكن بسيط وخفيف وبيحترم الخصوصية.', en: 'Paid from day one, but simple, lightweight and privacy-friendly.', es: 'De pago desde el día uno, pero simple, ligero y respetuoso con la privacidad.', fr: 'Payant dès le départ, mais simple, léger et respectueux de la vie privée.', de: 'Von Anfang an kostenpflichtig, aber einfach, leichtgewichtig und datenschutzfreundlich.' },
      source: 'https://plausible.io/pricing',
    },
  ],
};
