window.DG_DATA = window.DG_DATA || {};
window.DG_DATA['dns-ssl'] = {
  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  path: 'dns-ssl.html',
  title: { ar: 'DNS وشهادات SSL', en: 'DNS and SSL', es: 'DNS y SSL', fr: 'DNS et SSL', de: 'DNS und SSL' },
  blurb: {
    ar: 'DNS بيوصّل الدومين بموقعك، وشهادة SSL بتخلي الرابط HTTPS. الاتنين ممكن يكونوا مجانين تمامًا.',
    en: 'DNS connects your domain to your site, and an SSL certificate makes the link HTTPS. Both can be completely free.',
    es: 'El DNS conecta tu dominio con tu sitio, y un certificado SSL hace que el enlace sea HTTPS. Ambos pueden ser totalmente gratis.',
    fr: 'Le DNS relie votre domaine à votre site, et un certificat SSL rend le lien HTTPS. Les deux peuvent être entièrement gratuits.',
    de: 'DNS verbindet deine Domain mit deiner Seite, und ein SSL-Zertifikat macht den Link zu HTTPS. Beides kann komplett kostenlos sein.',
  },
  entries: [
    {
      name: 'Cloudflare DNS',
      url: 'https://www.cloudflare.com/application-services/products/dns/',
      free: { ar: 'DNS مجاني في كل الخطط، ومعاه API كامل مجاني', en: 'Authoritative DNS free on every plan, with a full free API', es: 'DNS autoritativo gratis en todos los planes, con API completa gratis', fr: 'DNS faisant autorité gratuit sur toutes les offres, avec une API complète gratuite', de: 'Autoritatives DNS in jedem Tarif kostenlos, mit kompletter Gratis-API' },
      paid: { ar: 'مميزات DNS متقدمة في خطط Business وEnterprise', en: 'Advanced DNS features live on Business and Enterprise plans', es: 'Las funciones avanzadas de DNS están en los planes Business y Enterprise', fr: 'Les fonctions DNS avancées sont sur les offres Business et Enterprise', de: 'Erweiterte DNS-Funktionen gibt es in den Business- und Enterprise-Tarifen' },
      note: { ar: 'بيشتغل طبيعي مع Cloudflare Registrar وPages.', en: 'Pairs naturally with Cloudflare Registrar and Pages.', es: 'Combina de forma natural con Cloudflare Registrar y Pages.', fr: 'Se combine naturellement avec Cloudflare Registrar et Pages.', de: 'Passt natürlich zu Cloudflare Registrar und Pages.' },
      source: 'https://www.cloudflare.com/application-services/products/dns/',
    },
    {
      name: 'deSEC',
      url: 'https://desec.io',
      free: { ar: 'استضافة DNS مجانية للكل، مفتوحة المصدر وممولة بالتبرعات', en: 'DNS hosting free for everyone, open-source based and donation-funded', es: 'Alojamiento DNS gratis para todos, basado en código abierto y financiado por donaciones', fr: 'Hébergement DNS gratuit pour tous, basé sur l’open source et financé par des dons', de: 'DNS-Hosting für alle kostenlos, auf Open-Source-Basis und spendenfinanziert' },
      paid: { ar: 'مفيش خطة مدفوعة', en: 'No paid tier', es: 'Sin plan de pago', fr: 'Pas d’offre payante', de: 'Kein kostenpflichtiger Tarif' },
      note: { ar: 'اختيار كويس لو عايز DNSSEC وAPI من غير مزوّد كبير.', en: 'A good fit if you want DNSSEC and an API without a big vendor.', es: 'Buena opción si quieres DNSSEC y API sin un gran proveedor.', fr: 'Un bon choix pour DNSSEC et une API sans grand fournisseur.', de: 'Eine gute Wahl für DNSSEC und API ohne großen Anbieter.' },
      source: 'https://desec.io/',
    },
    {
      name: "Let's Encrypt",
      url: 'https://letsencrypt.org',
      free: { ar: 'شهادات TLS/SSL مجانية وأوتوماتيك من مؤسسة غير ربحية', en: 'Free, automated TLS/SSL certificates from a nonprofit', es: 'Certificados TLS/SSL gratis y automatizados de una organización sin ánimo de lucro', fr: 'Certificats TLS/SSL gratuits et automatisés par une organisation à but non lucratif', de: 'Kostenlose, automatisierte TLS/SSL-Zertifikate von einer gemeinnützigen Organisation' },
      paid: { ar: 'مفيش خطة مدفوعة', en: 'No paid tier', es: 'Sin plan de pago', fr: 'Pas d’offre payante', de: 'Kein kostenpflichtiger Tarif' },
      note: { ar: 'معظم الاستضافات بتطلعلك الشهادة أوتوماتيك من غير ما تعمل حاجة.', en: 'Most hosts issue these for you automatically, nothing to do.', es: 'La mayoría de los hostings los emiten automáticamente, sin que hagas nada.', fr: 'La plupart des hébergeurs les émettent automatiquement pour vous.', de: 'Die meisten Hoster stellen sie automatisch für dich aus.' },
      source: 'https://letsencrypt.org/',
    },
    {
      name: 'ZeroSSL',
      url: 'https://zerossl.com',
      free: { ar: 'الخطة المجانية: ٣ شهادات مدة كل واحدة ٩٠ يوم', en: 'Free plan: 3 certificates of 90 days each', es: 'Plan gratis: 3 certificados de 90 días cada uno', fr: 'Offre gratuite : 3 certificats de 90 jours chacun', de: 'Gratis-Tarif: 3 Zertifikate à 90 Tage' },
      paid: { ar: 'Basic بـ١٤٫٩٩ دولار/شهر بعدد غير محدود من شهادات الـ٩٠ يوم؛ Premium بـ٦٨٫٩٩ دولار/شهر', en: 'Basic $14.99/mo with unlimited 90-day certificates; Premium $68.99/mo', es: 'Basic $14,99/mes con certificados de 90 días ilimitados; Premium $68,99/mes', fr: 'Basic 14,99 $/mois avec certificats 90 jours illimités ; Premium 68,99 $/mois', de: 'Basic 14,99 $/Monat mit unbegrenzten 90-Tage-Zertifikaten; Premium 68,99 $/Monat' },
      note: { ar: 'بديل لـLet\'s Encrypt بواجهة سهلة؛ المجاني محدود بثلاث شهادات.', en: "An alternative to Let's Encrypt with a dashboard; the free plan caps at three certificates.", es: "Alternativa a Let's Encrypt con panel; el plan gratis se limita a tres certificados.", fr: "Une alternative à Let's Encrypt avec tableau de bord ; l’offre gratuite plafonne à trois certificats.", de: "Eine Alternative zu Let's Encrypt mit Dashboard; der Gratis-Tarif ist auf drei Zertifikate begrenzt." },
      source: 'https://zerossl.com/pricing/',
    },
  ],
};
