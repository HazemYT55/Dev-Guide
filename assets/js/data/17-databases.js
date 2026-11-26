window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.databases = {
  icon: '⛁',
  path: 'databases.html',
  title: { ar: 'قواعد البيانات', en: 'Databases', es: 'Bases de datos', fr: 'Bases de données', de: 'Datenbanken' },
  blurb: {
    ar: 'Postgres وNoSQL مستضافة، كلها بخطط مجانية حقيقية تكفي للتعلم والمشاريع الصغيرة.',
    en: 'Hosted Postgres and NoSQL, all with real free tiers big enough for learning and small projects.',
    es: 'Postgres y NoSQL alojados, todos con planes gratuitos reales suficientes para aprender y proyectos pequeños.',
    fr: 'Postgres et NoSQL hébergés, tous avec de vraies offres gratuites suffisantes pour apprendre et pour de petits projets.',
    de: 'Gehostetes Postgres und NoSQL, alle mit echten Gratis-Tarifen, die zum Lernen und für kleine Projekte reichen.',
  },
  entries: [
    {
      name: 'Supabase',
      url: 'https://supabase.com',
      free: { ar: 'Postgres بحجم ٥٠٠ ميجا + تسجيل دخول لحد ٥٠٬٠٠٠ مستخدم شهريًا؛ المشروع بيتوقف بعد أسبوع من عدم الاستخدام', en: '500 MB Postgres plus auth for 50,000 monthly users; free projects pause after one week of inactivity', es: 'Postgres de 500 MB más auth para 50.000 usuarios mensuales; los proyectos gratis se pausan tras una semana sin uso', fr: 'Postgres de 500 Mo plus auth pour 50 000 utilisateurs mensuels ; les projets gratuits se mettent en pause après une semaine d’inactivité', de: '500 MB Postgres plus Auth für 50.000 monatliche Nutzer; Gratis-Projekte pausieren nach einer Woche Inaktivität' },
      paid: { ar: 'Pro من ٢٥ دولار/شهر مع ٨ جيجا مساحة تخزين', en: 'Pro from $25/mo with 8 GB disk', es: 'Pro desde $25/mes con 8 GB de disco', fr: 'Pro dès 25 $/mois avec 8 Go de disque', de: 'Pro ab 25 $/Monat mit 8 GB Speicher' },
      note: { ar: 'باك إند كامل (قاعدة + تسجيل دخول + تخزين ملفات) في خدمة واحدة.', en: 'A full backend (database, auth, file storage) in one service.', es: 'Un backend completo (base de datos, auth, archivos) en un solo servicio.', fr: 'Un backend complet (base, auth, fichiers) en un seul service.', de: 'Ein komplettes Backend (Datenbank, Auth, Dateien) in einem Dienst.' },
      source: 'https://supabase.com/pricing',
    },
    {
      name: 'Neon',
      url: 'https://neon.com',
      free: { ar: 'Postgres سيرفرليس: ١ جيجا تخزين و١٠٠ ساعة CU شهريًا ولحد ١٠٠ مشروع، وبيهبط للصفر وقت الخمول', en: 'Serverless Postgres: 1 GB storage, 100 CU-hours/mo, up to 100 projects, scales to zero when idle', es: 'Postgres serverless: 1 GB de almacenamiento, 100 CU-horas/mes, hasta 100 proyectos, escala a cero en reposo', fr: 'Postgres serverless : 1 Go de stockage, 100 CU-heures/mois, jusqu’à 100 projets, mise à zéro au repos', de: 'Serverless-Postgres: 1 GB Speicher, 100 CU-Stunden/Monat, bis zu 100 Projekte, skaliert im Leerlauf auf null' },
      paid: { ar: 'الدفع حسب الاستخدام: ٠٫١٠٦ دولار لكل ساعة CU + ٠٫٣٥ دولار لكل جيجا/شهر', en: 'Usage-based: $0.106 per CU-hour plus $0.35 per GB-month', es: 'Pago por uso: $0,106 por CU-hora más $0,35 por GB-mes', fr: 'À l’usage : 0,106 $ par CU-heure plus 0,35 $ par Go-mois', de: 'Nach Nutzung: 0,106 $ pro CU-Stunde plus 0,35 $ pro GB-Monat' },
      source: 'https://neon.com/pricing',
    },
    {
      name: 'MongoDB Atlas',
      url: 'https://www.mongodb.com/atlas',
      free: { ar: 'M0 مجاني للأبد: ٥١٢ ميجا تخزين', en: 'M0 free forever: 512 MB storage', es: 'M0 gratis para siempre: 512 MB de almacenamiento', fr: 'M0 gratuit à vie : 512 Mo de stockage', de: 'M0 dauerhaft kostenlos: 512 MB Speicher' },
      paid: { ar: 'الكلاسترات المخصصة من ٠٫٠٨ دولار/ساعة (حوالي ٥٧ دولار/شهر)', en: 'Dedicated clusters from $0.08/hr (about $57/mo)', es: 'Clústeres dedicados desde $0,08/hora (unos $57/mes)', fr: 'Clusters dédiés dès 0,08 $/h (environ 57 $/mois)', de: 'Dedizierte Cluster ab 0,08 $/Std. (ca. 57 $/Monat)' },
      note: { ar: 'قاعدة مستندات (NoSQL) مش SQL؛ مناسبة للبيانات المرنة.', en: 'A document database, not SQL; good for flexible data shapes.', es: 'Base de datos de documentos, no SQL; buena para datos flexibles.', fr: 'Base orientée documents, pas SQL ; idéale pour les données flexibles.', de: 'Eine Dokumentendatenbank, kein SQL; gut für flexible Datenstrukturen.' },
      source: 'https://www.mongodb.com/pricing',
    },
    {
      name: 'Turso',
      url: 'https://turso.tech',
      free: { ar: '١٠٠ قاعدة بيانات، ٥٠٠ مليون صف مقروء و١٠ مليون صف مكتوب شهريًا', en: '100 databases, 500M rows read and 10M rows written per month', es: '100 bases de datos, 500M filas leídas y 10M escritas al mes', fr: '100 bases, 500 M de lignes lues et 10 M écrites par mois', de: '100 Datenbanken, 500 Mio. gelesene und 10 Mio. geschriebene Zeilen pro Monat' },
      paid: { ar: 'Developer من ٤٫٩٩ دولار/شهر', en: 'Developer from $4.99/mo', es: 'Developer desde $4,99/mes', fr: 'Developer dès 4,99 $/mois', de: 'Developer ab 4,99 $/Monat' },
      note: { ar: 'SQLite على الحافة (edge)؛ ممتاز للقراءة الموزعة عالميًا.', en: 'SQLite at the edge; excellent for globally distributed reads.', es: 'SQLite en el edge; excelente para lecturas distribuidas globalmente.', fr: 'SQLite en périphérie (edge) ; excellent pour les lectures distribuées.', de: 'SQLite am Edge; hervorragend für global verteilte Lesezugriffe.' },
      source: 'https://turso.tech/pricing',
    },
    {
      name: 'Firebase Firestore',
      url: 'https://firebase.google.com/products/firestore',
      free: { ar: '١ جيجا تخزين + ٥٠ ألف قراءة و٢٠ ألف كتابة يوميًا من غير بطاقة', en: '1 GiB stored plus 50K reads and 20K writes per day, no card needed', es: '1 GiB almacenado más 50K lecturas y 20K escrituras al día, sin tarjeta', fr: '1 Gio stocké plus 50 000 lectures et 20 000 écritures par jour, sans carte', de: '1 GiB Speicher plus 50.000 Lese- und 20.000 Schreibvorgänge pro Tag, ohne Karte' },
      paid: { ar: 'الدفع حسب الاستخدام (خطة Blaze)', en: 'Pay-as-you-go on the Blaze plan', es: 'Pago por uso en el plan Blaze', fr: 'Paiement à l’usage avec l’offre Blaze', de: 'Nutzungsbasiert im Blaze-Tarif' },
      note: { ar: 'NoSQL لحظي؛ الحصة اليومية المجانية سخية للمشاريع الصغيرة.', en: 'Realtime NoSQL; the free daily quota is generous for small apps.', es: 'NoSQL en tiempo real; la cuota diaria gratis es generosa para apps pequeñas.', fr: 'NoSQL temps réel ; le quota quotidien gratuit est généreux pour les petites applis.', de: 'Echtzeit-NoSQL; das tägliche Gratis-Kontingent ist großzügig für kleine Apps.' },
      source: 'https://firebase.google.com/pricing',
    },
  ],
};
