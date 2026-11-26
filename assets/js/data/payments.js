window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.payments = {
  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
  path: 'payments.html',
  title: { ar: 'الدفع والفوترة', en: 'Payments and billing', es: 'Pagos y facturación', fr: 'Paiements et facturation', de: 'Zahlungen und Abrechnung' },
  blurb: {
    ar: 'لما تبيع حاجة من موقعك. دي خدمات بتاخد نسبة من كل عملية، مش اشتراك شهري.',
    en: 'For when you sell something from your site. These take a cut per transaction rather than a monthly subscription.',
    es: 'Para cuando vendes algo desde tu sitio. Estas cobran una parte por transacción en vez de suscripción mensual.',
    fr: 'Pour vendre depuis votre site. Ces services prennent une part par transaction plutôt qu’un abonnement mensuel.',
    de: 'Wenn du etwas über deine Seite verkaufst. Diese Anbieter nehmen einen Anteil pro Transaktion statt eines Monatsabos.',
  },
  entries: [
    {
      name: 'Stripe',
      url: 'https://stripe.com',
      free: { ar: 'مفيش رسوم تسجيل ولا اشتراك شهري ولا رسوم مخفية؛ بتدفع بس على كل عملية', en: 'No setup, monthly, or hidden fees; you only pay per transaction', es: 'Sin cuotas de alta, mensuales ni ocultas; solo pagas por transacción', fr: 'Pas de frais d’installation, mensuels ou cachés ; vous ne payez que par transaction', de: 'Keine Einrichtungs-, Monats- oder versteckten Gebühren; du zahlst nur pro Transaktion' },
      paid: { ar: '٢٫٩٪ + ٣٠ سنت لكل عملية كارت أونلاين ناجحة (أسعار أمريكا)', en: '2.9% + 30¢ per successful online card charge (US rates)', es: '2,9% + 30¢ por cobro con tarjeta online exitoso (tarifas de EE. UU.)', fr: '2,9 % + 0,30 $ par paiement par carte en ligne réussi (tarifs US)', de: '2,9 % + 0,30 $ pro erfolgreicher Online-Kartenzahlung (US-Preise)' },
      note: { ar: 'الاختيار الافتراضي للمطورين؛ النسب بتختلف من بلد لبلد. Stripe لسه مش متاح للتجار في السعودية ولا مصر (الإمارات متاحة)؛ شوف stripe.com/global.', en: 'The developer default; local rates differ by country. Stripe is not yet open to merchants in Saudi Arabia or Egypt (the UAE is supported); check stripe.com/global.', es: 'La opción por defecto para desarrolladores; las tarifas varían por país. Stripe aún no está abierto a comercios en Arabia Saudí ni Egipto (EAU sí); consulta stripe.com/global.', fr: 'Le choix par défaut des développeurs ; les tarifs varient selon le pays. Stripe n’est pas encore ouvert aux marchands d’Arabie saoudite ni d’Égypte (les Émirats le sont) ; voir stripe.com/global.', de: 'Die Standardwahl für Entwickler; Preise unterscheiden sich je nach Land. Stripe ist für Händler in Saudi-Arabien und Ägypten noch nicht verfügbar (VAE schon); siehe stripe.com/global.' },
      source: 'https://stripe.com/global',
    },
    {
      name: 'Lemon Squeezy',
      url: 'https://www.lemonsqueezy.com',
      free: { ar: 'مغلق للتسجيلات الجديدة من ١٦ نوفمبر ٢٠٢٦ — متبدأش مشروع جديد عليه', en: 'Closed to new sign-ups since 16 November 2026, do not start a new project on it', es: 'Cerrado a nuevos registros desde el 16 de noviembre de 2026; no empieces un proyecto nuevo con él', fr: 'Fermé aux nouvelles inscriptions depuis le 16 novembre 2026, n’y démarrez pas de nouveau projet', de: 'Seit 16. November 2026 für Neuanmeldungen geschlossen, starte kein neues Projekt damit' },
      paid: { ar: '٥٪ + ٥٠ سنت من كل عملية بيع، وبيوقف معالجة المدفوعات ٣١ مارس ٢٠٢٧', en: '5% + 50¢ per sale, and it stops processing payments on 31 March 2027', es: '5% + 50¢ por venta, y deja de procesar pagos el 31 de marzo de 2027', fr: '5 % + 0,50 $ par vente, et arrête les paiements le 31 mars 2027', de: '5 % + 0,50 $ pro Verkauf, Zahlungsabwicklung endet am 31. März 2027' },
      note: { ar: 'الشركة بتقفل الخدمة (بقت جزء من Stripe Managed Payments)؛ المستخدمين الحاليين لازم ينقلوا قبل مارس ٢٠٢٧. كان بيدعم السعودية ومصر.', en: 'The service is winding down (folding into Stripe Managed Payments); existing sellers must migrate before March 2027. It did support Saudi Arabia and Egypt.', es: 'El servicio está cerrando (se integra en Stripe Managed Payments); los vendedores actuales deben migrar antes de marzo de 2027. Sí admitía Arabia Saudí y Egipto.', fr: 'Le service ferme (intégré à Stripe Managed Payments) ; les vendeurs actuels doivent migrer avant mars 2027. Il prenait en charge l’Arabie saoudite et l’Égypte.', de: 'Der Dienst wird eingestellt (geht in Stripe Managed Payments auf); bestehende Händler müssen bis März 2027 umziehen. Saudi-Arabien und Ägypten waren unterstützt.' },
      source: 'https://www.lemonsqueezy.com/blog/saying-goodbye-to-lemon-squeezy',
    },
    {
      name: 'PayPal',
      url: 'https://www.paypal.com',
      free: { ar: 'مفيش اشتراك شهري مطلوب؛ بتدفع على كل عملية', en: 'No monthly subscription required; you pay per transaction', es: 'Sin suscripción mensual obligatoria; pagas por transacción', fr: 'Pas d’abonnement mensuel obligatoire ; vous payez par transaction', de: 'Kein Monatsabo nötig; du zahlst pro Transaktion' },
      paid: { ar: '٣٫٤٩٪ + ٤٩ سنت لكل عملية شراء أونلاين (أمريكا)', en: '3.49% + $0.49 per US online checkout transaction', es: '3,49% + $0,49 por transacción de pago online en EE. UU.', fr: '3,49 % + 0,49 $ par transaction de paiement en ligne aux États-Unis', de: '3,49 % + 0,49 $ pro Online-Checkout-Transaktion in den USA' },
      note: { ar: 'الناس بتثق فيه كمشترين؛ رسومه أعلى من Stripe للكروت. شغال في السعودية (إرسال واستقبال وسحب) ومصر (الاتفاقية الرسمية بتغطي استقبال الفلوس)؛ النسب بتختلف حسب البلد والعملة ونوع العملية.', en: 'Buyers trust it; card fees run higher than Stripe. Works in Saudi Arabia (send, receive, withdraw) and Egypt (receiving is covered by PayPal’s official agreement); fees vary by country, currency and transaction type.', es: 'Los compradores confían en él; las comisiones por tarjeta son más altas que en Stripe. Funciona en Arabia Saudí (enviar, recibir, retirar) y Egipto (recibir está cubierto por el acuerdo oficial); las tarifas varían por país, moneda y tipo de transacción.', fr: 'Les acheteurs lui font confiance ; les frais carte dépassent ceux de Stripe. Fonctionne en Arabie saoudite (envoi, réception, retrait) et en Égypte (réception couverte par l’accord officiel) ; les frais varient selon le pays, la devise et le type de transaction.', de: 'Käufer vertrauen es; die Kartengebühren liegen über denen von Stripe. Funktioniert in Saudi-Arabien (senden, empfangen, abheben) und Ägypten (Empfang laut offizieller Vereinbarung abgedeckt); Gebühren variieren nach Land, Währung und Transaktionsart.' },
      source: 'https://www.paypal.com/us/business/fees',
    },
  ],
};
