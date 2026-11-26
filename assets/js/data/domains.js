window.DG_DATA = window.DG_DATA || {};
window.DG_DATA.domains = {
  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg>',
  path: 'domains.html',
  title: { ar: 'الدومينات', en: 'Domain names', es: 'Dominios', fr: 'Noms de domaine', de: 'Domains' },
  blurb: {
    ar: 'الدومينات المسجلة عادة ليها رسوم تسجيل أو تجديد سنوية. العناوين المجانية بتكون ساب دومين من المزوّد، وفي عروض مشروطة بدومين مجاني. المقارنة الحقيقية في سعر التجديد، مش سعر أول سنة.',
    en: 'Registered domains usually have a yearly registration or renewal cost. Free addresses are provider subdomains, with some conditional free-domain offers. The honest comparison is the renewal price, not the first-year teaser.',
    es: 'Los dominios registrados suelen tener un coste anual de registro o renovación. Las direcciones gratuitas son subdominios del proveedor y existen ofertas condicionadas de dominio gratis. La comparación honesta es el precio de renovación, no la oferta del primer año.',
    fr: 'Les domaines enregistrés ont généralement un coût annuel d’enregistrement ou de renouvellement. Les adresses gratuites sont des sous-domaines du fournisseur et certaines offres conditionnelles incluent un domaine gratuit. La comparaison honnête porte sur le prix de renouvellement, pas sur l’offre de première année.',
    de: 'Registrierte Domains haben in der Regel eine jährliche Registrierungs- oder Verlängerungsgebühr. Kostenlose Adressen sind Subdomains des Anbieters, und es gibt konditionierte Gratis-Domain-Angebote. Der ehrliche Vergleich ist der Verlängerungspreis, nicht der Lockpreis des ersten Jahres.',
  },
  entries: [
    {
      name: 'Cloudflare Registrar',
      url: 'https://www.cloudflare.com/products/registrar/',
      free: { ar: 'مفيش مجاني — الدومينات ليها تكلفة دايمًا', en: 'No free tier — domains always cost money', es: 'Sin plan gratis — los dominios siempre cuestan', fr: 'Pas d’offre gratuite — les domaines coûtent toujours', de: 'Kein Gratis-Tarif — Domains kosten immer Geld' },
      paid: { ar: 'دومين .com بحوالي ١١٫١٧ دولار/سنة بالتكلفة، والتجديد بنفس السعر', en: '.com around $11.17/yr at cost, renewals at the same price', es: '.com alrededor de $11,17/año al costo, renovaciones al mismo precio', fr: '.com environ 11,17 $/an au prix coûtant, renouvellements au même prix', de: '.com etwa 11,17 $/Jahr zum Selbstkostenpreis, Verlängerung zum gleichen Preis' },
      note: { ar: 'بدون هامش ربح خالص وحماية WHOIS مجانية؛ أرخص اختيار على المدى الطويل.', en: 'Zero markup and free WHOIS privacy; cheapest over the years.', es: 'Sin margen y privacidad WHOIS gratis; el más barato a largo plazo.', fr: 'Aucune marge et confidentialité WHOIS gratuite ; le moins cher sur la durée.', de: 'Ohne Aufschlag und mit gratis WHOIS-Privacy; auf Jahre am günstigsten.' },
      source: 'https://developers.cloudflare.com/registrar/',
    },
    {
      name: 'Porkbun',
      url: 'https://porkbun.com',
      free: { ar: 'مفيش مجاني — الدومينات ليها تكلفة دايمًا', en: 'No free tier — domains always cost money', es: 'Sin plan gratis — los dominios siempre cuestan', fr: 'Pas d’offre gratuite — les domaines coûtent toujours', de: 'Kein Gratis-Tarif — Domains kosten immer Geld' },
      paid: { ar: 'دومين .com بـ١١٫٨١ دولار/سنة تسجيل وتجديد بنفس السعر، حماية WHOIS شاملة', en: '.com at $11.81/yr to register and renew at the same price, WHOIS privacy included', es: '.com a $11,81/año registro y renovación al mismo precio, privacidad WHOIS incluida', fr: '.com à 11,81 $/an, enregistrement et renouvellement au même prix, confidentialité WHOIS incluse', de: '.com für 11,81 $/Jahr, Registrierung und Verlängerung zum gleichen Preis, WHOIS-Privacy inklusive' },
      note: { ar: 'نفس السعر كل سنة من غير مفاجآت؛ أسعارهم معلنة بوضوح.', en: 'Same price every year, no surprises; their price list is public.', es: 'Mismo precio cada año, sin sorpresas; su lista de precios es pública.', fr: 'Même prix chaque année, sans surprise ; leur grille tarifaire est publique.', de: 'Jedes Jahr der gleiche Preis, keine Überraschungen; ihre Preisliste ist öffentlich.' },
      source: 'https://porkbun.com/about',
    },
    {
      name: 'Namecheap',
      url: 'https://www.namecheap.com',
      free: { ar: 'مفيش مجاني — الدومينات ليها تكلفة دايمًا', en: 'No free tier — domains always cost money', es: 'Sin plan gratis — los dominios siempre cuestan', fr: 'Pas d’offre gratuite — les domaines coûtent toujours', de: 'Kein Gratis-Tarif — Domains kosten immer Geld' },
      paid: { ar: 'دومين .com من ٦٫٤٨ دولار أول سنة (للعملاء الجدد)، التجديد ١٩٫٩٨ دولار/سنة + ٠٫٢٠ دولار رسوم ICANN', en: '.com from $6.48 first year (new customers), renewal $19.98/yr plus $0.20 ICANN fee', es: '.com desde $6,48 el primer año (clientes nuevos), renovación $19,98/año más $0,20 de ICANN', fr: '.com dès 6,48 $ la première année (nouveaux clients), renouvellement 19,98 $/an plus 0,20 $ ICANN', de: '.com ab 6,48 $ im ersten Jahr (Neukunden), Verlängerung 19,98 $/Jahr plus 0,20 $ ICANN-Gebühr' },
      note: { ar: 'سعر أول سنة رخيص لكن التجديد غالي؛ شوف سعر التجديد قبل ما تشتري.', en: 'Cheap intro, pricey renewal; check the renewal before buying.', es: 'Barato el primer año, cara la renovación; revisa la renovación antes de comprar.', fr: 'Première année bon marché, renouvellement coûteux ; vérifiez le renouvellement avant d’acheter.', de: 'Günstiges Einstiegsjahr, teure Verlängerung; prüfe den Verlängerungspreis vor dem Kauf.' },
      source: 'https://www.namecheap.com/domains/registration/gtld/com/',
    },
  ],
};
