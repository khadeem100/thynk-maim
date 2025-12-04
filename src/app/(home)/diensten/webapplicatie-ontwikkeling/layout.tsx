import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webapplicatie Ontwikkeling | TynkTech – Custom Webapplicaties op Maat',
  description: 'Krachtige, schaalbare webapplicaties op maat voor jouw bedrijf. Custom development, API integraties, workflow automatisering. Van €4.800 tot €19.200+. Vrijblijvend gesprek.',
  keywords: [
    'webapplicatie ontwikkeling',
    'webapplicatie laten maken',
    'custom webapplicatie',
    'webapp ontwikkelaar',
    'webapplicatie Amsterdam',
    'custom software',
    'webapp development',
    'API ontwikkeling',
    'SaaS ontwikkeling',
  ],
  openGraph: {
    title: 'Webapplicatie Ontwikkeling | TynkTech',
    description: 'Krachtige, schaalbare webapplicaties op maat die jouw bedrijfsprocessen automatiseren en optimaliseren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/diensten/webapplicatie-ontwikkeling',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Webapplicatie Ontwikkeling TynkTech',
      },
    ],
  },
  alternates: {
    canonical: 'https://tynktech.nl/diensten/webapplicatie-ontwikkeling',
  },
};

export default function WebapplicatieOntwikkelingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

