import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onderhoud & Support | TynkTech – Website Onderhoud & Technische Support',
  description: 'Zorgeloos website onderhoud en technische support. Security updates, backups, bug fixes en performance optimalisatie. Van €60/maand. Vrijblijvend gesprek.',
  keywords: [
    'website onderhoud',
    'website support',
    'website maintenance',
    'website updates',
    'website beheer',
    'technische support',
    'website backup',
    'security updates',
    'website monitoring',
  ],
  openGraph: {
    title: 'Onderhoud & Support | TynkTech',
    description: 'Zorgeloos website onderhoud en technische support. Van security updates tot content wijzigingen.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/diensten/onderhoud-support',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Onderhoud & Support TynkTech',
      },
    ],
  },
  alternates: {
    canonical: 'https://tynktech.nl/diensten/onderhoud-support',
  },
};

export default function OnderhoudSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

