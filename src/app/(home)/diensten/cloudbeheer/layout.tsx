import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloudbeheer | TynkTech – AWS, Azure & Google Cloud Beheer',
  description: 'Professioneel cloudbeheer voor AWS, Azure en Google Cloud. 24/7 monitoring, security, kosten optimalisatie en automatisch scaling. Van €85/uur. Vrijblijvend gesprek.',
  keywords: [
    'cloudbeheer',
    'AWS beheer',
    'Azure beheer',
    'Google Cloud beheer',
    'cloud management',
    'cloud infrastructuur',
    'cloud migratie',
    'DevOps',
    'cloud Amsterdam',
  ],
  openGraph: {
    title: 'Cloudbeheer | TynkTech',
    description: 'Professioneel cloudbeheer voor AWS, Azure en Google Cloud. Van setup tot 24/7 monitoring.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/diensten/cloudbeheer',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Cloudbeheer TynkTech',
      },
    ],
  },
  alternates: {
    canonical: 'https://tynktech.nl/diensten/cloudbeheer',
  },
};

export default function CloudbeheerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

