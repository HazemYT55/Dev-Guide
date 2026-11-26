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
      note: { ar: 'الاختيار الافتراضي للمطورين؛ النسب بتختلف من بلد لبلد.', en: 'The developer default; local rates differ by country.', es: 'La opción por defecto para desarrolladores; las tarifas locales varían por país.', fr: 'Le choix par défaut des développeurs ; les tarifs varient selon le pays.', de: 'Die Standardwahl für Entwickler; lokale Preise unterscheiden sich je nach Land.' },
      source: 'https://stripe.com/pricing',
    },
    {
      name: 'Lemon Squeezy',
      url: 'https://www.lemonsqueezy.com',
      free: { ar: 'صفر دولار/شهر وكل المميزات متاحة؛ تقدر تبدأ من غير كارت', en: '$0/month with every feature included; you can start without a card', es: '$0/mes con todas las funciones incluidas; puedes empezar sin tarjeta', fr: '0 $/mois avec toutes les fonctions incluses ; démarrage sans carte', de: '0 $/Monat mit allen Funktionen; Start ohne Karte möglich' },
      paid: { ar: '٥٪ + ٥٠ سنت من كل عملية بيع', en: '5% + 50¢ per sale', es: '5% + 50¢ por venta', fr: '5 % + 0,50 $ par vente', de: '5 % + 0,50 $ pro Verkauf' },
      note: { ar: 'مبني لبيع المنتجات الرقمية والسوفتوير؛ نسبته أعلى لكن مفيش التزام شهري.', en: 'Built for selling digital products and software; a higher cut but no monthly commitment.', es: 'Hecho para vender productos digitales y software; mayor comisión pero sin compromiso mensual.', fr: 'Conçu pour vendre des produits numériques et des logiciels ; commission plus élevée mais sans engagement mensuel.', de: 'Gebaut für den Verkauf digitaler Produkte und Software; höherer Anteil, aber keine monatliche Bindung.' },
      source: 'https://www.lemonsqueezy.com/pricing',
    },
    {
      name: 'PayPal',
      url: 'https://www.paypal.com',
      free: { ar: 'مفيش اشتراك شهري مطلوب؛ بتدفع على كل عملية', en: 'No monthly subscription required; you pay per transaction', es: 'Sin suscripción mensual obligatoria; pagas por transacción', fr: 'Pas d’abonnement mensuel obligatoire ; vous payez par transaction', de: 'Kein Monatsabo nötig; du zahlst pro Transaktion' },
      paid: { ar: '٣٫٤٩٪ + ٤٩ سنت لكل عملية شراء أونلاين (أمريكا)', en: '3.49% + $0.49 per US online checkout transaction', es: '3,49% + $0,49 por transacción de pago online en EE. UU.', fr: '3,49 % + 0,49 $ par transaction de paiement en ligne aux États-Unis', de: '3,49 % + 0,49 $ pro Online-Checkout-Transaktion in den USA' },
      note: { ar: 'الناس بتثق فيه كمشترين؛ رسومه أعلى من Stripe للكروت.', en: 'Buyers trust it; card fees run higher than Stripe.', es: 'Los compradores confían en él; las comisiones por tarjeta son más altas que en Stripe.', fr: 'Les acheteurs lui font confiance ; les frais carte dépassent ceux de Stripe.', de: 'Käufer vertrauen es; die Kartengebühren liegen über denen von Stripe.' },
      source: 'https://www.paypal.com/us/business/fees',
    },
  ],
};
