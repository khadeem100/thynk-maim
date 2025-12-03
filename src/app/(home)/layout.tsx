import { Navbar } from '@/components/home/sections/navbar';
import { Metadata } from 'next';
import Script from 'next/script';
import { siteConfig } from '@/lib/home';

export const metadata: Metadata = {
  title: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity | Website Ontwikkelaar Nederland',
  description: 'TynkTech is een innovatief technologiebedrijf gespecialiseerd in het ontwikkelen van moderne websites, webapplicaties en digitale oplossingen op maat. Professioneel webdesign, cloudbeheer en geavanceerde cybersecurity diensten. Website laten maken vanaf €75/uur.',
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
      ...(siteConfig.links.instagram ? [siteConfig.links.instagram] : []),
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
      <div className="w-full relative">
        <div className="block w-px h-full border-l border-border fixed top-0 left-6 z-10"></div>
        <div className="block w-px h-full border-r border-border fixed top-0 right-6 z-10"></div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
