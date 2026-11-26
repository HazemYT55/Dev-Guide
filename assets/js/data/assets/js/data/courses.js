window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.courses = {
  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 9v5"/></svg>',
  path: 'courses.html',
  title: { ar: 'كورسات وتعلّم', en: 'Courses and learning', es: 'Cursos y aprendizaje', fr: 'Cours et apprentissage', de: 'Kurse und Lernen' },
  blurb: {
    ar: 'أين تتعلم البرمجة من الصفر. أول اتنين مجانين تمامًا.',
    en: 'Where to learn programming from zero. The first two are completely free.',
    es: 'Dónde aprender programación desde cero. Los dos primeros son totalmente gratis.',
    fr: 'Où apprendre la programmation à partir de zéro. Les deux premiers sont entièrement gratuits.',
    de: 'Wo du Programmieren von null lernst. Die ersten beiden sind komplett kostenlos.',
  },
  entries: [
    {
      name: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org',
      free: { ar: 'كل حاجة ببلاش: المنهج كامل والشهادات، وممول بالتبرعات', en: 'Everything at $0: the full curriculum and certifications, funded by donations', es: 'Todo a $0: el currículo completo y las certificaciones, financiado por donaciones', fr: 'Tout à 0 $ : le programme complet et les certifications, financé par des dons', de: 'Alles für 0 $: der komplette Lehrplan und Zertifikate, spendenfinanziert' },
      paid: { ar: 'مفيش خطة مدفوعة؛ التبرع الشهري اختياري لدعم الجمعية', en: 'No paid tier; an optional monthly donation supports the charity', es: 'Sin plan de pago; una donación mensual opcional apoya la organización', fr: 'Pas d’offre payante ; un don mensuel optionnel soutient l’association', de: 'Kein kostenpflichtiger Tarif; eine optionale monatliche Spende unterstützt den gemeinnützigen Träger' },
      note: { ar: 'أحسن بداية لو لسه من الصفر؛ بتتعلم على مزاجك وبمشاريع عملية.', en: 'The best first stop from zero; self-paced with hands-on projects.', es: 'La mejor primera parada desde cero; a tu ritmo y con proyectos prácticos.', fr: 'Le meilleur premier arrêt depuis zéro ; à votre rythme, avec des projets concrets.', de: 'Der beste erste Einstieg ab null; im eigenen Tempo mit praktischen Projekten.' },
      source: 'https://www.freecodecamp.org/donate',
    },
    {
      name: 'The Odin Project',
      url: 'https://www.theodinproject.com',
      free: { ar: 'منهج ويب كامل ببلاش، مبني على أحسن المصادر المجانية ومشاريع من عندهم', en: 'Full web-dev curriculum at $0, built from the best free resources plus their own projects', es: 'Currículo completo de desarrollo web a $0, hecho con los mejores recursos gratuitos y proyectos propios', fr: 'Programme complet de développement web à 0 $, construit à partir des meilleures ressources gratuites et de projets maison', de: 'Kompletter Webentwicklungs-Lehrplan für 0 $, aufgebaut aus den besten kostenlosen Quellen plus eigenen Projekten' },
      paid: { ar: 'مفيش خطة مدفوعة', en: 'No paid tier', es: 'Sin plan de pago', fr: 'Pas d’offre payante', de: 'Kein kostenpflichtiger Tarif' },
      note: { ar: 'قراية أكتر وشغل على جهازك؛ مناسب بعد أول خطوات.', en: 'More reading and work on your own machine; fits after the very first steps.', es: 'Más lectura y trabajo en tu propio equipo; encaja tras los primeros pasos.', fr: 'Plus de lecture et de travail sur votre machine ; convient après les tout premiers pas.', de: 'Mehr Lesen und Arbeit auf dem eigenen Rechner; passt nach den allerersten Schritten.' },
      source: 'https://www.theodinproject.com/faq',
    },
    {
      name: 'Codecademy',
      url: 'https://www.codecademy.com',
      free: { ar: 'خطة Basic بصفر دولار "مجانية للأبد" بكورسات محدودة', en: "Basic plan $0, 'always free', with limited courses", es: 'Plan Basic a $0, "gratis siempre", con cursos limitados', fr: 'Offre Basic à 0 $, « gratuite pour toujours », avec des cours limités', de: 'Basic-Tarif für 0 $, "für immer kostenlos", mit begrenzten Kursen' },
      paid: { ar: 'Plus بـ١٤٫٩٩ دولار/شهر بالدفع السنوي أو ٢٩٫٩٩ شهريًا؛ Pro بـ١٩٫٩٩ سنويًا أو ٣٩٫٩٩ شهريًا', en: 'Plus $14.99/mo billed annually or $29.99 monthly; Pro $19.99/mo annually or $39.99 monthly', es: 'Plus $14,99/mes con pago anual o $29,99 mensual; Pro $19,99/mes anual o $39,99 mensual', fr: 'Plus 14,99 $/mois en facturation annuelle ou 29,99 $ mensuel ; Pro 19,99 $/mois annuel ou 39,99 $ mensuel', de: 'Plus 14,99 $/Monat bei jährlicher Zahlung oder 29,99 $ monatlich; Pro 19,99 $/Monat jährlich oder 39,99 $ monatlich' },
      note: { ar: 'تمارين تفاعلية في المتصفح؛ الشهادات والمسارات المهنية في الخطط المدفوعة.', en: 'Interactive exercises in the browser; certificates and career paths sit in paid plans.', es: 'Ejercicios interactivos en el navegador; certificados y rutas de carrera en los planes de pago.', fr: 'Exercices interactifs dans le navigateur ; certificats et parcours pro dans les offres payantes.', de: 'Interaktive Übungen im Browser; Zertifikate und Karrierepfade in den kostenpflichtigen Tarifen.' },
      source: 'https://www.codecademy.com/pricing',
    },
    {
      name: 'MDN Web Docs',
      url: 'https://developer.mozilla.org',
      free: { ar: 'المرجع الرسمي الفعلي لـHTML وCSS وJS، مجاني', en: 'The de facto reference for HTML, CSS and JS, free', es: 'La referencia de facto de HTML, CSS y JS, gratis', fr: 'La référence de fait pour HTML, CSS et JS, gratuite', de: 'Die faktische Referenz für HTML, CSS und JS, kostenlos' },
      paid: { ar: 'مفيش حاجة تشتريها عشان تستخدم المرجع', en: 'Nothing to buy to use the docs', es: 'Nada que comprar para usar la documentación', fr: 'Rien à acheter pour utiliser la documentation', de: 'Nichts zu kaufen, um die Doku zu nutzen' },
      note: { ar: 'مش كورس؛ ده المكان اللي بترجع ليه وإنت بتتعلم.', en: 'Not a course; the place you look things up while learning.', es: 'No es un curso; es donde consultas mientras aprendes.', fr: 'Pas un cours ; c’est là où l’on vérifie en apprenant.', de: 'Kein Kurs; hier schlägst du während des Lernens nach.' },
      source: 'https://developer.mozilla.org/',
    },
  ],
};
