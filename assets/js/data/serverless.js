window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.serverless = {
  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  path: 'serverless.html',
  title: { ar: 'دوال سيرفرليس', en: 'Serverless functions', es: 'Funciones serverless', fr: 'Fonctions serverless', de: 'Serverless-Funktionen' },
  blurb: {
    ar: 'شغّل كود باك إند صغير من غير سيرفر. ادفع بس لما الكود يشتغل فعلًا.',
    en: 'Run small backend code without a server. You pay only when the code actually runs.',
    es: 'Ejecuta pequeños códigos de backend sin servidor. Solo pagas cuando el código se ejecuta.',
    fr: 'Exécutez de petits bouts de backend sans serveur. Vous ne payez que lorsque le code tourne.',
    de: 'Führe kleine Backend-Codes ohne Server aus. Du zahlst nur, wenn der Code wirklich läuft.',
  },
  entries: [
    {
      name: 'Cloudflare Workers',
      url: 'https://workers.cloudflare.com',
      free: { ar: '١٠٠٬٠٠٠ طلب في اليوم مجانًا، وطلبات الملفات الثابتة غير محدودة', en: '100,000 requests per day free, and static asset requests are unlimited', es: '100.000 solicitudes al día gratis, y las de archivos estáticos son ilimitadas', fr: '100 000 requêtes par jour gratuites, et les requêtes de fichiers statiques sont illimitées', de: '100.000 Anfragen pro Tag kostenlos, Anfragen für statische Dateien unbegrenzt' },
      paid: { ar: 'الخطة المدفوعة ٥ دولار/شهر وتشمل ١٠ مليون طلب', en: 'Paid plan at $5/mo includes 10M requests', es: 'El plan de pago de $5/mes incluye 10M de solicitudes', fr: 'L’offre payante à 5 $/mois inclut 10 M de requêtes', de: 'Der 5-$-Tarif pro Monat umfasst 10 Mio. Anfragen' },
      note: { ar: 'بيشتغل على شبكة عالمية فبيستجيب بسرعة من أي مكان.', en: 'Runs on a global network, so responses are fast everywhere.', es: 'Funciona en una red global, así que responde rápido en todas partes.', fr: 'Fonctionne sur un réseau mondial, donc des réponses rapides partout.', de: 'Läuft auf einem globalen Netzwerk, daher überall schnelle Antworten.' },
      source: 'https://developers.cloudflare.com/workers/platform/pricing/',
    },
    {
      name: 'AWS Lambda',
      url: 'https://aws.amazon.com/lambda/',
      free: { ar: 'مليون طلب + ٤٠٠٬٠٠٠ جيجا-ثانية كل شهر، مجاني دايمًا', en: '1M requests plus 400,000 GB-seconds every month, always free', es: '1M de solicitudes más 400.000 GB-segundos cada mes, siempre gratis', fr: '1 M de requêtes plus 400 000 Go-secondes chaque mois, toujours gratuit', de: '1 Mio. Anfragen plus 400.000 GB-Sekunden jeden Monat, dauerhaft kostenlos' },
      paid: { ar: '٠٫٢٠ دولار لكل مليون طلب بعد المجاني + حساب مدة التشغيل', en: '$0.20 per 1M requests beyond the free tier, plus duration pricing', es: '$0,20 por 1M de solicitudes tras el nivel gratis, más precio por duración', fr: '0,20 $ par million de requêtes au-delà du gratuit, plus la durée', de: '0,20 $ pro 1 Mio. Anfragen über dem Gratis-Kontingent, plus Laufzeitpreise' },
      note: { ar: 'الأكثر نضجًا وانتشارًا، لكن إعداد AWS أعقد من بدائله.', en: 'The most mature option, but AWS setup is more complex than the alternatives.', es: 'La opción más madura, pero la configuración de AWS es más compleja.', fr: 'L’option la plus mature, mais la configuration AWS est plus complexe.', de: 'Die ausgereifteste Option, aber die AWS-Einrichtung ist komplexer.' },
      source: 'https://aws.amazon.com/lambda/pricing/',
    },
    {
      name: 'Vercel Functions',
      url: 'https://vercel.com',
      free: { ar: 'موجودة ضمن خطة Hobby المجانية (في حدود الـ ٥ جيجا باندويدث)', en: 'Included in the free Hobby plan (within its 5 GB bandwidth)', es: 'Incluidas en el plan Hobby gratis (dentro de sus 5 GB de ancho de banda)', fr: 'Incluses dans l’offre Hobby gratuite (dans ses 5 Go de bande passante)', de: 'Im kostenlosen Hobby-Tarif enthalten (innerhalb seiner 5 GB Bandbreite)' },
      paid: { ar: 'ضمن خطة Pro من ٢٠ دولار/شهر', en: 'Included in Pro from $20/mo', es: 'Incluidas en Pro desde $20/mes', fr: 'Incluses dans Pro dès 20 $/mois', de: 'In Pro ab 20 $/Monat enthalten' },
      note: { ar: 'بدون أي إعداد مع Next.js؛ راقب الـ cold starts والباندويدث.', en: 'Zero-config with Next.js; watch cold starts and bandwidth.', es: 'Sin configuración con Next.js; vigila los cold starts y el ancho de banda.', fr: 'Zéro configuration avec Next.js ; surveillez les cold starts et la bande passante.', de: 'Null Konfiguration mit Next.js; achte auf Cold Starts und Bandbreite.' },
      source: 'https://vercel.com/docs/limits',
    },
  ],
};
