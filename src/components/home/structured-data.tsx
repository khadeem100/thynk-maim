'use client';

import { siteConfig } from '@/lib/home';

export function StructuredData() {
  const baseUrl = (siteConfig.url || process.env.NEXT_PUBLIC_APP_URL || 'https://tynktech.nl').replace(/\/$/, '');
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TynkTech',
    alternateName: 'Tynk Technologies V.O.F',
    url: baseUrl,
    logo: `${baseUrl}/kortix-logo.svg`,
    description: 'TynkTech is een innovatief technologiebedrijf gespecialiseerd in het ontwikkelen van moderne websites, webapplicaties en digitale oplossingen op maat.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@tynktech.ai',
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Enterprise',
        item: `${baseUrl}/enterprise`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

