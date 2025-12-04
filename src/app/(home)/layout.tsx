import { Navbar } from '@/components/home/sections/navbar';
import { Metadata } from 'next';
import Script from 'next/script';
import { siteConfig } from '@/lib/home';

export const metadata: Metadata = {
  title: 'TynkTech | Moderne Websites & Webapplicaties Amsterdam | Cloud & Cybersecurity',
  description: 'TynkTech - Specialist in moderne websites, webapplicaties, cloudbeheer en cybersecurity in Amsterdam. ✓ Toekomstbestendige oplossingen ✓ Transparante prijzen ✓ Expert developers. Website laten maken vanaf €75/uur.',
  keywords: [
    'website ontwikkeling',
    'webapplicatie ontwikkeling',
    'webdesign',
    'cloudbeheer',
    'cybersecurity',
    'website laten maken',
    'webapplicatie laten maken',
    'website ontwikkelaar',
    'webdeveloper Nederland',
    'cloud oplossingen',
    'cybersecurity diensten',
    'website onderhoud',
    'webdesign bureau',
    'digitale oplossingen',
    'moderne websites',
    'responsive webdesign',
    'SEO optimalisatie',
    'cloud infrastructuur',
    'security audits',
    'penetration testing',
    'GDPR compliance',
    'website hosting',
    'TynkTech',
  ],
  openGraph: {
    title: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity',
    description: 'TynkTech is een innovatief technologiebedrijf gespecialiseerd in moderne websites, webapplicaties, cloud-oplossingen en cybersecurity. Professioneel webdesign, cloudbeheer en geavanceerde beveiliging.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity',
    description: 'TynkTech is een innovatief technologiebedrijf gespecialiseerd in moderne websites, webapplicaties, cloud-oplossingen en cybersecurity.',
    creator: '@tynktech',
    images: ['/banner.png'],
  },
  alternates: {
    canonical: 'https://tynktech.nl',
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = (siteConfig.url || process.env.NEXT_PUBLIC_APP_URL || 'https://tynktech.nl').replace(/\/$/, '');
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TynkTech',
    alternateName: 'Tynk Technologies V.O.F',
    url: baseUrl,
    logo: `${baseUrl}/kortix-logo.svg`, // TODO: Vervang met TynkTech logo wanneer beschikbaar
    description: 'TynkTech is een innovatief technologiebedrijf gespecialiseerd in het ontwikkelen van moderne websites, webapplicaties en digitale oplossingen op maat voor bedrijven in Amsterdam en heel Nederland.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressRegion: 'Noord-Holland',
      addressCountry: 'NL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-6-12345678',
      contactType: 'customer service',
      email: 'admin@thynktech.nl',
      availableLanguage: ['Dutch', 'English'],
      areaServed: 'NL',
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
      ...(siteConfig.links.instagram ? [siteConfig.links.instagram] : []),
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'TynkTech',
    '@id': baseUrl,
    url: baseUrl,
    telephone: '+31-6-12345678',
    priceRange: '€€',
    image: `${baseUrl}/banner.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressRegion: 'Noord-Holland',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.3676,
      longitude: 4.9041,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    areaServed: {
      '@type': 'City',
      name: 'Amsterdam',
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Nederland',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wat kost een website laten maken bij TynkTech?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De kosten voor website ontwikkeling beginnen vanaf 20 uur. De exacte prijs is afhankelijk van de complexiteit, gewenste functionaliteiten en design. Een standaard website kost gemiddeld tussen de €2.400 en €4.800. Neem contact op voor een vrijblijvende offerte op maat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoe lang duurt het om een website te ontwikkelen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een standaard website wordt binnen 4-6 weken opgeleverd. Complexere webapplicaties of custom oplossingen kunnen 8-12 weken in beslag nemen. De exacte timeline bespreken we tijdens het intakegesprek en hangt af van de scope en jouw beschikbaarheid voor feedback.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bieden jullie ook onderhoud en support na oplevering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, wij bieden uitgebreide onderhoud en support pakketten vanaf €60 per maand. Dit omvat regelmatige updates, bug fixes, security patches, backup beheer en technische ondersteuning. Zo blijft jouw website veilig en up-to-date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Werken jullie internationaal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, TynkTech werkt internationaal. Hoewel ons hoofdkantoor in Amsterdam, Nederland is gevestigd, werken we voor klanten wereldwijd. We bieden remote samenwerking en kunnen waar nodig on-site komen. Ons team is ervaren in het werken met internationale klanten en verschillende tijdzones.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welke technologieën gebruiken jullie voor website ontwikkeling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We werken met moderne frameworks en technologieën zoals React, Next.js, Vue.js, Node.js, en headless CMS systemen zoals Strapi en Sanity. Voor cloud werken we met AWS, Azure en Google Cloud. We kiezen altijd de beste technologie die past bij jouw specifieke behoeften en toekomstplannen.',
        },
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TynkTech',
    url: baseUrl,
    description: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity',
    publisher: {
      '@type': 'Organization',
      name: 'TynkTech',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    // Important pages for sitelinks (Google uses this as a hint)
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Contact',
          url: `${baseUrl}/contact`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfolio',
          url: `${baseUrl}/portfolio`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Enterprise Oplossingen',
          url: `${baseUrl}/enterprise`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'DIY Website Scan',
          url: `${baseUrl}/diy`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Vacatures',
          url: `${baseUrl}/careers`,
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Klantenservice',
          url: `${baseUrl}/contact`,
        },
      ],
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Ontwikkeling',
    provider: {
      '@type': 'Organization',
      name: 'TynkTech',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'TynkTech Diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Ontwikkeling',
            description: 'Moderne websites op maat ontwikkeld met de nieuwste technologieën',
            offers: {
              '@type': 'Offer',
              price: '75',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '75',
                priceCurrency: 'EUR',
                unitCode: 'HUR',
              },
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webapplicatie Ontwikkeling',
            description: 'Custom webapplicaties ontwikkeld op maat',
            offers: {
              '@type': 'Offer',
              price: '95',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '95',
                priceCurrency: 'EUR',
                unitCode: 'HUR',
              },
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webdesign',
            description: 'Professioneel webdesign met focus op gebruikservaring en conversie',
            offers: {
              '@type': 'Offer',
              price: '65',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '65',
                priceCurrency: 'EUR',
                unitCode: 'HUR',
              },
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloudbeheer',
            description: 'Cloud-oplossingen en beheer voor jouw organisatie',
            offers: {
              '@type': 'Offer',
              price: '85',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '85',
                priceCurrency: 'EUR',
                unitCode: 'HUR',
              },
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cybersecurity',
            description: 'Beveiliging & compliance diensten',
            offers: {
              '@type': 'Offer',
              price: '120',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '120',
                priceCurrency: 'EUR',
                unitCode: 'HUR',
              },
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Onderhoud & Support',
            description: 'Onderhoud van bestaande systemen',
            offers: {
              '@type': 'Offer',
              price: '60',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '60',
                priceCurrency: 'EUR',
                unitCode: 'HUR',
              },
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-full relative">
        <div className="block w-px h-full border-l border-border fixed top-0 left-6 z-10"></div>
        <div className="block w-px h-full border-r border-border fixed top-0 right-6 z-10"></div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
