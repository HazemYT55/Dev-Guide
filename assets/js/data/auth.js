window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.auth = {
  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  path: 'auth.html',
  title: { ar: 'تسجيل الدخول والمستخدمين', en: 'Auth and users', es: 'Autenticación y usuarios', fr: 'Authentification et utilisateurs', de: 'Auth und Nutzer' },
  blurb: {
    ar: 'تسجيل دخول بالإيميل وبالسوشيال من غير ما تبنيه بنفسك. الحد المهم هنا هو عدد المستخدمين النشطين شهريًا (MAU).',
    en: 'Email and social sign-in without building it yourself. The limit that matters is monthly active users (MAU).',
    es: 'Inicio de sesión con email y redes sociales sin construirlo tú. El límite que importa son los usuarios activos mensuales (MAU).',
    fr: 'Connexion par e-mail et réseaux sociaux sans la coder. La limite qui compte est le nombre d’utilisateurs actifs mensuels (MAU).',
    de: 'E-Mail- und Social-Login ohne Eigenbau. Das Limit, das zählt, sind die monatlich aktiven Nutzer (MAU).',
  },
  entries: [
    {
      name: 'Clerk',
      url: 'https://clerk.com',
      free: { ar: '٥٠٬٠٠٠ مستخدم نشط شهريًا (MRU) من غير بطاقة', en: '50,000 monthly retained users (MRU), no card required', es: '50.000 usuarios retenidos mensuales (MRU), sin tarjeta', fr: '50 000 utilisateurs retenus mensuels (MRU), sans carte', de: '50.000 monatlich zurückkehrende Nutzer (MRU), ohne Karte' },
      paid: { ar: 'Pro من ٢٥ دولار/شهر', en: 'Pro from $25/mo', es: 'Pro desde $25/mes', fr: 'Pro dès 25 $/mois', de: 'Pro ab 25 $/Monat' },
      note: { ar: 'مكونات واجهة جاهزة؛ أسرع طريقة تضيف بيها تسجيل دخول كامل.', en: 'Drop-in UI components; the fastest way to add complete sign-in.', es: 'Componentes de UI listos; la forma más rápida de añadir inicio de sesión completo.', fr: 'Composants d’interface prêts à l’emploi ; la façon la plus rapide d’ajouter une connexion complète.', de: 'Fertige UI-Komponenten; der schnellste Weg zu einem kompletten Login.' },
      source: 'https://clerk.com/pricing',
    },
    {
      name: 'Auth0',
      url: 'https://auth0.com',
      free: { ar: 'لحد ٢٥٬٠٠٠ مستخدم نشط شهريًا', en: 'Up to 25,000 monthly active users', es: 'Hasta 25.000 usuarios activos mensuales', fr: 'Jusqu’à 25 000 utilisateurs actifs mensuels', de: 'Bis zu 25.000 monatlich aktive Nutzer' },
      paid: { ar: 'Essentials من ٣٥ دولار/شهر (للأفراد B2C)', en: 'Essentials from $35/mo (B2C)', es: 'Essentials desde $35/mes (B2C)', fr: 'Essentials dès 35 $/mois (B2C)', de: 'Essentials ab 35 $/Monat (B2C)' },
      note: { ar: 'قوي ومعروف مؤسسيًا، لكن الأسعار بتطلع بسرعة مع نمو المستخدمين.', en: 'Powerful and enterprise-proven, but pricing climbs fast as users grow.', es: 'Potente y probado en empresas, pero el precio sube rápido al crecer.', fr: 'Puissant et éprouvé en entreprise, mais les prix grimpent vite avec la croissance.', de: 'Leistungsstark und enterprise-erprobt, aber die Preise steigen schnell mit dem Wachstum.' },
      source: 'https://www.auth0.com/pricing',
    },
    {
      name: 'Supabase Auth',
      url: 'https://supabase.com/auth',
      free: { ar: '٥٠٬٠٠٠ مستخدم نشط شهريًا على الخطة المجانية', en: '50,000 monthly active users on the free plan', es: '50.000 usuarios activos mensuales en el plan gratis', fr: '50 000 utilisateurs actifs mensuels avec l’offre gratuite', de: '50.000 monatlich aktive Nutzer im Gratis-Tarif' },
      paid: { ar: 'ضمن خطة Supabase Pro من ٢٥ دولار/شهر (١٠٠٬٠٠٠ مستخدم)', en: 'Included in Supabase Pro from $25/mo (100,000 MAU)', es: 'Incluido en Supabase Pro desde $25/mes (100.000 MAU)', fr: 'Inclus dans Supabase Pro dès 25 $/mois (100 000 MAU)', de: 'In Supabase Pro ab 25 $/Monat enthalten (100.000 MAU)' },
      note: { ar: 'الاختيار الطبيعي لو قاعدة بياناتك Supabase أصلًا.', en: 'The natural pick if your database is already Supabase.', es: 'La opción natural si tu base de datos ya es Supabase.', fr: 'Le choix naturel si votre base est déjà Supabase.', de: 'Die natürliche Wahl, wenn deine Datenbank ohnehin Supabase ist.' },
      source: 'https://supabase.com/pricing',
    },
    {
      name: 'Firebase Auth',
      url: 'https://firebase.google.com/products/auth',
      free: { ar: '٥٠ ألف مستخدم نشط شهريًا (خطة Spark) من غير بطاقة', en: '50K monthly active users on the Spark plan, no card needed', es: '50K usuarios activos mensuales en el plan Spark, sin tarjeta', fr: '50 000 utilisateurs actifs mensuels avec l’offre Spark, sans carte', de: '50.000 monatlich aktive Nutzer im Spark-Tarif, ohne Karte' },
      paid: { ar: 'تسعير Identity Platform بعد الحصة المجانية', en: 'Identity Platform pricing beyond the free quota', es: 'Precios de Identity Platform tras la cuota gratis', fr: 'Tarification Identity Platform au-delà du quota gratuit', de: 'Identity-Platform-Preise jenseits des Gratis-Kontingents' },
      note: { ar: 'تسجيل بالإيميل والسوشيال سخي مجانًا؛ تسجيل الهاتف بيتسعر لكل رسالة SMS.', en: 'Email and social sign-in are generous on free; phone auth is billed per SMS.', es: 'Email y redes sociales son generosos gratis; el login por teléfono se cobra por SMS.', fr: 'E-mail et réseaux sociaux sont généreux en gratuit ; la connexion par téléphone est facturée par SMS.', de: 'E-Mail- und Social-Login sind großzügig kostenlos; Telefon-Auth wird pro SMS abgerechnet.' },
      source: 'https://firebase.google.com/pricing',
    },
  ],
};
