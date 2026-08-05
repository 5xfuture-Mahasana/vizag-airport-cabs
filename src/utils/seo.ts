/**
 * Centralized SEO / Schema.org module.
 *
 * Single source of truth for Organization, LocalBusiness, WebSite, ContactPoint,
 * and Twitter handle. Every page in the site references these blocks via @id
 * to eliminate duplicate/conflicting JSON-LD.
 *
 * - ORGANIZATION_ID, LOCAL_BUSINESS_ID, WEBSITE_ID are stable URLs used as
 *   schema @id values, so Google treats them as the same entity everywhere.
 * - The other helpers build @graph arrays for specific page types
 *   (home, route, tour, hub).
 */

const SITE_URL = 'https://vizagairportcabs.in';
const LOGO_URL = `${SITE_URL}/favicon.svg`;

export const SITE = {
  url: SITE_URL,
  name: 'Vizag Airport Cabs',
  legalName: 'Roadstar Cabs (Vizag Airport Cabs)',
  tagline: '24/7 Airport Taxi & Outstation Cab Services in Visakhapatnam & Bhogapuram',
  description:
    'Vizag Airport Cabs offers 24/7 airport taxi service in Visakhapatnam & Bhogapuram with affordable fares, professional drivers, and instant Call & WhatsApp booking.',
  logo: LOGO_URL,
  phone: '+91 8985583355',
  phoneRaw: '+918985583355',
  whatsapp: 'https://wa.me/918985583355',
  email: 'bookings@vizagairportcabs.in',
  twitterHandle: '@vizagairportcabs',
  address: {
    streetAddress: 'D.No 32-10-41/7, Near Road No 1, Sheelanagar Post, BHPV Township',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    postalCode: '530012',
    addressCountry: 'IN',
  },
  geo: { latitude: 17.6868, longitude: 83.2185 },
  social: {
    facebook: 'https://www.facebook.com/vizagairportcabs',
    instagram: 'https://www.instagram.com/vizagairportcabs',
    x: 'https://x.com/vizagairportcabs',
    youtube: 'https://www.youtube.com/@vizagairportcabs',
  },
  foundingDate: '2015-01-01',
  priceRange: '₹600 - ₹8500',
  rating: { value: '4.9', count: '1280' },
} as const;

// Stable schema @id values — referenced by every page
export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// ---------------------------------------------------------------------------
// Atomic schema fragments (referenced via @id from each page's @graph)
// ---------------------------------------------------------------------------

export const ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: ['Roadstar Cabs', 'Vizag Airport Taxi'],
  url: SITE.url,
  logo: SITE.logo,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: SITE.foundingDate,
  areaServed: [
    { '@type': 'City', name: 'Visakhapatnam' },
    { '@type': 'City', name: 'Vizianagaram' },
    { '@type': 'City', name: 'Srikakulam' },
    { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
    { '@type': 'AdministrativeArea', name: 'Bhogapuram International Airport' },
  ],
  knowsAbout: [
    'Airport Taxi Service',
    'Outstation Cab Booking',
    'Local Car Rental',
    'Visakhapatnam Tourism',
    'Hill Station Transfers',
    'Bhogapuram Airport Transfers',
    'Araku Valley Cabs',
    'Andhra Pradesh Tourism',
  ],
  knowsLanguage: ['en', 'hi', 'te'],
  sameAs: [
    SITE.social.facebook,
    SITE.social.instagram,
    SITE.social.x,
    SITE.social.youtube,
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.phone,
      email: SITE.email,
      availableLanguage: ['English', 'Hindi', 'Telugu'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: SITE.phone,
      url: SITE.whatsapp,
      availableLanguage: ['English', 'Hindi', 'Telugu'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    '@id': `${SITE_URL}/#address`,
    ...SITE.address,
  },
} as const;

export const LOCAL_BUSINESS_SCHEMA = {
  '@type': 'LocalBusiness',
  '@id': LOCAL_BUSINESS_ID,
  name: SITE.name,
  image: SITE.logo,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: SITE.priceRange,
  paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
  currenciesAccepted: 'INR',
  parentOrganization: { '@id': ORG_ID },
  address: { '@id': `${SITE_URL}/#address` },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
} as const;

/** Return a LocalBusiness schema optionally enriched with reviews and/or aggregateRating.
 *  Pages that publish actual Review entities (e.g. the home page) should pass
 *  reviews and includeAggregateRating=true. Route/tour/hub pages should use the
 *  plain LOCAL_BUSINESS_SCHEMA so Google does not flag an aggregateRating
 *  without backing reviews. */
export function buildLocalBusinessWithReviews(opts: {
  reviews?: { name: string; role?: string; content: string; rating: number; date?: string }[];
  includeAggregateRating?: boolean;
}) {
  const { reviews, includeAggregateRating = false } = opts;
  const schema: Record<string, unknown> = { ...LOCAL_BUSINESS_SCHEMA };

  if (reviews && reviews.length > 0) {
    schema.review = buildReviewsFromTestimonials(reviews);
  }

  if (includeAggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: '5',
      worstRating: '1',
    };
  }

  return schema;
}

export const WEBSITE_SCHEMA = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  description: SITE.tagline,
  inLanguage: 'en-IN',
  publisher: { '@id': ORG_ID },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/routes?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
} as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Build absolute canonical URL from a site-relative path. */
export function buildCanonical(path: string): string {
  const cleaned = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleaned}`;
}

/** Common Twitter + OG meta tags. Use inside <Helmet>. */
export function buildCommonMetaTags(canonical: string) {
  return [
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE.name },
    { property: 'og:url', content: canonical },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: SITE.twitterHandle },
    { name: 'twitter:creator', content: SITE.twitterHandle },
  ] as const;
}

/** Build a FAQPage node from a {q, a}[] array. */
export function buildFAQPage(faqs: { q: string; a: string }[], idSuffix = 'faq') {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE.url}${typeof window !== 'undefined' ? window.location.pathname : ''}#${idSuffix}`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/** Standard E-E-A-T review block from a testimonial list. */
export function buildReviewsFromTestimonials(
  testimonials: { name: string; role?: string; content: string; rating: number; date?: string }[]
) {
  return testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name, jobTitle: t.role },
    datePublished: t.date || '2026-05-15',
    reviewBody: t.content,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(t.rating),
      bestRating: '5',
      worstRating: '1',
    },
  }));
}

/** Build a complete @graph for the home page. */
export function buildHomeSchema(opts: {
  testimonials: { name: string; role?: string; content: string; rating: number; date?: string }[];
  faqs: { q: string; a: string }[];
  popularRoutes: { title: string; link: string; price: string }[];
}) {
  const reviews = buildReviewsFromTestimonials(opts.testimonials);
  const localBusiness = buildLocalBusinessWithReviews({ reviews, includeAggregateRating: true });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      WEBSITE_SCHEMA,
      { '@id': ORG_ID, ...ORGANIZATION_SCHEMA },
      localBusiness,
      buildFAQPage(opts.faqs, 'home-faq'),
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#popular-routes`,
        name: 'Popular Vizag Airport Cab Routes',
        itemListElement: opts.popularRoutes.map((r, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: r.title,
          url: `${SITE_URL}${r.link}`,
        })),
      },
    ],
  };
}

/** Build a complete @graph for a route page. */
export function buildRouteSchema(opts: {
  currentUrl: string;
  pageTitle: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroTitle: string;
  faqs: { q: string; a: string }[];
  fareTable: { type: string; price: string }[];
}) {
  const {
    currentUrl,
    pageTitle,
    description,
    datePublished = '2026-05-01',
    dateModified = '2026-07-29',
    heroImage,
    heroImageAlt,
    heroTitle,
    faqs,
    fareTable,
  } = opts;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@id': WEBSITE_ID, ...WEBSITE_SCHEMA },
      { '@id': ORG_ID, ...ORGANIZATION_SCHEMA },
      LOCAL_BUSINESS_SCHEMA,
      heroImage
        ? {
            '@type': 'ImageObject',
            '@id': `${currentUrl}#primaryimage`,
            url: heroImage,
            contentUrl: heroImage,
            caption: heroImageAlt || heroTitle,
            representativeOfPage: true,
          }
        : null,
      {
        '@type': 'TaxiService',
        '@id': `${currentUrl}#taxiservice`,
        name: heroTitle,
        description,
        provider: { '@id': ORG_ID },
        url: currentUrl,
        image: heroImage,
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Bhogapuram International Airport' },
          { '@type': 'City', name: 'Visakhapatnam' },
          { '@type': 'City', name: 'Vizianagaram' },
          { '@type': 'City', name: 'Srikakulam' },
          { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${heroTitle} - Taxi Services`,
          itemListElement: fareTable.map((fare) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: `${fare.type} - ${heroTitle}`,
            },
            price: fare.price.replace(/[₹,]/g, '').split('/')[0].trim(),
            priceCurrency: 'INR',
          })),
        },
      },
      {
        '@type': 'WebPage',
        '@id': currentUrl,
        url: currentUrl,
        name: pageTitle,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': WEBSITE_ID },
        breadcrumb: { '@id': `${currentUrl}#breadcrumb` },
        primaryImageOfPage: heroImage ? { '@id': `${currentUrl}#primaryimage` } : undefined,
        datePublished,
        dateModified,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${currentUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL + '/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Routes',
            item: SITE_URL + '/routes',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: heroTitle,
            item: currentUrl,
          },
        ],
      },
      buildFAQPage(faqs),
    ].filter(Boolean),
  };
}

/** Build a complete @graph for a tour package page. */
export function buildTourSchema(opts: {
  currentUrl: string;
  pageTitle: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroTitle: string;
  faqs: { q: string; a: string }[];
  placesCovered: { name: string; description: string }[];
  duration: string;
  startingPrice?: string;
}) {
  const {
    currentUrl,
    pageTitle,
    description,
    datePublished = '2026-05-01',
    dateModified = '2026-07-29',
    heroImage,
    heroImageAlt,
    heroTitle,
    faqs,
    placesCovered,
    duration,
    startingPrice,
  } = opts;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@id': WEBSITE_ID, ...WEBSITE_SCHEMA },
      { '@id': ORG_ID, ...ORGANIZATION_SCHEMA },
      LOCAL_BUSINESS_SCHEMA,
      heroImage
        ? {
            '@type': 'ImageObject',
            '@id': `${currentUrl}#primaryimage`,
            url: heroImage,
            contentUrl: heroImage,
            caption: heroImageAlt || heroTitle,
            representativeOfPage: true,
          }
        : null,
      {
        '@type': 'TouristTrip',
        '@id': `${currentUrl}#touristtrip`,
        name: heroTitle,
        description,
        url: currentUrl,
        image: heroImage,
        provider: { '@id': ORG_ID },
        touristType: ['Families', 'Couples', 'Solo Travelers', 'Group Tours'],
        itinerary: {
          '@type': 'ItemList',
          numberOfItems: placesCovered.length,
          itemListElement: placesCovered.map((place, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: place.name,
            description: place.description,
          })),
        },
        offers: startingPrice
          ? {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              lowPrice: startingPrice,
              offerCount: placesCovered.length,
              name: `${heroTitle} - Cab Rental Package`,
            }
          : {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              name: `${heroTitle} - Cab Rental Package`,
            },
        estimatedDuration: duration,
      },
      {
        '@type': 'WebPage',
        '@id': currentUrl,
        url: currentUrl,
        name: pageTitle,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': WEBSITE_ID },
        breadcrumb: { '@id': `${currentUrl}#breadcrumb` },
        datePublished,
        dateModified,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${currentUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
          { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: SITE_URL + '/tour-packages' },
          { '@type': 'ListItem', position: 3, name: heroTitle, item: currentUrl },
        ],
      },
      buildFAQPage(faqs),
    ].filter(Boolean),
  };
}

/** Build a minimal @graph for hub pages (About, Blog, Contact, Routes, TourPackages). */
export function buildHubSchema(opts: {
  currentUrl: string;
  pageTitle: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  faqs?: { q: string; a: string }[];
  pageType?: 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'Blog';
  collectionItems?: { name: string; url: string; description?: string }[];
  collectionName?: string;
}) {
  const {
    currentUrl,
    pageTitle,
    description,
    datePublished = '2026-04-01',
    dateModified = '2026-07-29',
    faqs,
    pageType = 'WebPage',
    collectionItems,
    collectionName,
  } = opts;

  const collectionItemList = collectionItems && collectionItems.length
    ? {
        '@type': 'ItemList',
        '@id': `${currentUrl}#items`,
        name: collectionName || pageTitle,
        numberOfItems: collectionItems.length,
        itemListElement: collectionItems.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          url: item.url,
          ...(item.description ? { description: item.description } : {}),
        })),
      }
    : null;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@id': WEBSITE_ID, ...WEBSITE_SCHEMA },
      { '@id': ORG_ID, ...ORGANIZATION_SCHEMA },
      LOCAL_BUSINESS_SCHEMA,
      {
        '@type': pageType,
        '@id': currentUrl,
        url: currentUrl,
        name: pageTitle,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': WEBSITE_ID },
        breadcrumb: { '@id': `${currentUrl}#breadcrumb` },
        datePublished,
        dateModified,
        publisher: { '@id': ORG_ID },
        author: { '@id': ORG_ID },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${currentUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
          { '@type': 'ListItem', position: 2, name: pageTitle, item: currentUrl },
        ],
      },
      ...(collectionItemList ? [collectionItemList] : []),
      ...(faqs ? [buildFAQPage(faqs)] : []),
    ],
  };
}

/** Build Person schema for blog author / editorial team. */
export function buildPersonSchema(opts: { name: string; role: string; bio: string; knowsAbout?: string[] } = {
  name: 'Vizag Airport Cabs Editorial Team',
  role: 'Travel & Transportation Writers',
  bio: 'The editorial team at Vizag Airport Cabs writes expert guides on Visakhapatnam tourism, airport transfers, and outstation travel across Andhra Pradesh.',
  knowsAbout: [
    'Visakhapatnam tourism',
    'Andhra Pradesh travel',
    'Airport transfers',
    'Outstation cab booking',
    'Araku Valley travel',
    'Bhogapuram International Airport',
  ],
}) {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#editorial-team`,
    name: opts.name,
    jobTitle: opts.role,
    description: opts.bio,
    knowsAbout: opts.knowsAbout,
    worksFor: { '@id': ORG_ID },
    url: `${SITE_URL}/about`,
  };
}

/**
 * Build a Blog index @graph with Person author and ItemList of BlogPostings.
 */
export function buildBlogIndexSchema(opts: {
  currentUrl: string;
  pageTitle: string;
  description: string;
  posts: { title: string; description: string; url: string; image?: string; date: string; readTime?: string }[];
}) {
  const { currentUrl, pageTitle, description, posts } = opts;

  const person = buildPersonSchema();

  const blogPosts = {
    '@type': 'ItemList',
    '@id': `${currentUrl}#posts`,
    name: 'Blog Posts',
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: p.url,
      description: p.description,
    })),
  };

  const blogPostings = posts.map((p, i) => ({
    '@type': 'BlogPosting',
    '@id': `${currentUrl}#post-${i + 1}`,
    headline: p.title,
    description: p.description,
    image: p.image,
    url: p.url,
    datePublished: p.date,
    author: { '@id': `${SITE_URL}/#editorial-team` },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': currentUrl },
    inLanguage: 'en-IN',
    keywords: ['Vizag', 'Andhra Pradesh', 'Travel'],
    ...(p.readTime ? { timeRequired: p.readTime } : {}),
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@id': WEBSITE_ID, ...WEBSITE_SCHEMA },
      { '@id': ORG_ID, ...ORGANIZATION_SCHEMA },
      LOCAL_BUSINESS_SCHEMA,
      {
        '@type': 'Blog',
        '@id': currentUrl,
        url: currentUrl,
        name: pageTitle,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': WEBSITE_ID },
        breadcrumb: { '@id': `${currentUrl}#breadcrumb` },
        publisher: { '@id': ORG_ID },
        author: { '@id': `${SITE_URL}/#editorial-team` },
      },
      person,
      {
        '@type': 'BreadcrumbList',
        '@id': `${currentUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: currentUrl },
        ],
      },
      blogPosts,
      ...blogPostings,
    ],
  };
}
