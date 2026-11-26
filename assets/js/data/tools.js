window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.tools = {
  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3"/><path d="M12 15h5"/></svg>',
  path: 'tools.html',
  title: { ar: 'المحررات وأدوات التطوير', en: 'Editors and dev tools', es: 'Editores y herramientas', fr: 'Éditeurs et outils de dev', de: 'Editoren und Dev-Tools' },
  blurb: {
    ar: 'الأدوات اللي هتكتب بيها كود كل يوم. أشهرهم مجاني.',
    en: 'The tools you will write code with every day. The most popular one is free.',
    es: 'Las herramientas con las que escribirás código cada día. La más popular es gratis.',
    fr: 'Les outils avec lesquels vous écrirez du code chaque jour. Le plus populaire est gratuit.',
    de: 'Die Werkzeuge, mit denen du täglich Code schreibst. Das beliebteste ist kostenlos.',
  },
  entries: [
    {
      name: 'VS Code',
      url: 'https://code.visualstudio.com',
      free: { ar: 'محرر مجاني ومفتوح المصدر بكل المميزات', en: 'Free and open-source editor with full features', es: 'Editor gratuito y de código abierto con todas las funciones', fr: 'Éditeur gratuit et open source avec toutes les fonctions', de: 'Kostenloser Open-Source-Editor mit allen Funktionen' },
      paid: { ar: 'مفيش نسخة مدفوعة من المحرر؛ بعض الإضافات وأدوات الذكاء الاصطناعي مدفوعة لوحدها', en: 'No paid edition of the editor; some extensions and AI add-ons are paid separately', es: 'Sin edición de pago del editor; algunas extensiones y complementos de IA se pagan aparte', fr: 'Pas d’édition payante de l’éditeur ; certaines extensions et options IA sont payantes à part', de: 'Keine kostenpflichtige Editor-Edition; manche Erweiterungen und KI-Add-ons kosten extra' },
      note: { ar: 'الاختيار الافتراضي لمعظم المبتدئين؛ مكتبة إضافات ضخمة.', en: 'The default choice for most beginners; huge extension library.', es: 'La opción por defecto para la mayoría; enorme biblioteca de extensiones.', fr: 'Le choix par défaut pour la plupart des débutants ; énorme bibliothèque d’extensions.', de: 'Die Standardwahl für die meisten Einsteiger; riesige Erweiterungsbibliothek.' },
      source: 'https://code.visualstudio.com/',
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io',
      free: { ar: 'خطة مجانية للمشاريع والأكواد العامة', en: 'Free plan for public pens and projects', es: 'Plan gratis para pens y proyectos públicos', fr: 'Offre gratuite pour les pens et projets publics', de: 'Gratis-Tarif für öffentliche Pens und Projekte' },
      paid: { ar: 'PRO من ٨ دولار/شهر', en: 'PRO from $8/month', es: 'PRO desde $8/mes', fr: 'PRO dès 8 $/mois', de: 'PRO ab 8 $/Monat' },
      note: { ar: 'أسرع مكان تجرب فيه HTML وCSS وJS في المتصفح وتشارك رابط.', en: 'The fastest place to try HTML/CSS/JS in the browser and share a link.', es: 'El lugar más rápido para probar HTML/CSS/JS en el navegador y compartir un enlace.', fr: 'L’endroit le plus rapide pour tester HTML/CSS/JS dans le navigateur et partager un lien.', de: 'Der schnellste Ort, um HTML/CSS/JS im Browser zu testen und einen Link zu teilen.' },
      source: 'https://codepen.io/pro',
    },
    {
      name: 'Replit',
      url: 'https://replit.com',
      free: { ar: 'مفيش خطة مجانية دائمة على صفحة الأسعار الحالية', en: 'No permanent free plan on the current pricing page', es: 'Sin plan gratis permanente en la página de precios actual', fr: 'Pas d’offre gratuite permanente sur la page tarifaire actuelle', de: 'Kein dauerhafter Gratis-Tarif auf der aktuellen Preisseite' },
      paid: { ar: 'Core بـ٢٠ دولار/شهر (١٨ بالدفع السنوي)؛ Pro بـ١٠٠ دولار/شهر (٩٠ سنويًا)', en: 'Core $20/mo ($18/mo billed annually); Pro $100/mo ($90/mo annually)', es: 'Core $20/mes ($18/mes con pago anual); Pro $100/mes ($90/mes anual)', fr: 'Core 20 $/mois (18 $/mois en annuel) ; Pro 100 $/mois (90 $/mois en annuel)', de: 'Core 20 $/Monat (18 $/Monat jährlich); Pro 100 $/Monat (90 $/Monat jährlich)' },
      note: { ar: 'خطة Starter المجانية اتشالت؛ دي نقطة مهمة للمبتدئين.', en: 'The old free Starter plan is gone, a real catch for beginners.', es: 'El antiguo plan Starter gratis ya no existe; una traba real para principiantes.', fr: 'L’ancienne offre Starter gratuite a disparu, un vrai piège pour les débutants.', de: 'Der alte kostenlose Starter-Tarif ist weg, ein echter Haken für Einsteiger.' },
      source: 'https://replit.com/pricing',
    },
    {
      name: 'JetBrains IDEs',
      url: 'https://www.jetbrains.com/idea/',
      free: { ar: 'نسخ Community مجانية ومفتوحة المصدر (زي IntelliJ Community وPyCharm Community)', en: 'Community editions free and open source (like IntelliJ Community and PyCharm Community)', es: 'Ediciones Community gratis y de código abierto (como IntelliJ Community y PyCharm Community)', fr: 'Éditions Community gratuites et open source (comme IntelliJ Community et PyCharm Community)', de: 'Community-Editionen kostenlos und Open Source (wie IntelliJ Community und PyCharm Community)' },
      paid: { ar: 'IntelliJ Ultimate بـ١٩٩ دولار أول سنة، ١٥٩ تاني سنة، ١١٩ من تالت سنة (للأفراد، سنوي)', en: 'IntelliJ Ultimate $199 first year, $159 second, $119 from the third (personal, yearly)', es: 'IntelliJ Ultimate $199 el primer año, $159 el segundo, $119 desde el tercero (personal, anual)', fr: 'IntelliJ Ultimate 199 $ la première année, 159 $ la deuxième, 119 $ à partir de la troisième (personnel, annuel)', de: 'IntelliJ Ultimate 199 $ im ersten Jahr, 159 $ im zweiten, 119 $ ab dem dritten (privat, jährlich)' },
      note: { ar: 'في Student Pack مجاني للطلاب من موقعهم.', en: 'A free Student Pack exists on their site for students.', es: 'Existe un Student Pack gratis para estudiantes en su sitio.', fr: 'Un Student Pack gratuit existe sur leur site pour les étudiants.', de: 'Ein kostenloses Student Pack gibt es auf ihrer Website für Studierende.' },
      source: 'https://www.jetbrains.com/idea/buy/',
    },
  ],
};
