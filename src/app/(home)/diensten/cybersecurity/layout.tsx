import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity | TynkTech – Security Audits, Penetration Testing & GDPR',
  description: 'Bescherm jouw bedrijf tegen cyberaanvallen. Security audits, penetration testing, GDPR compliance en security training. Van €120/uur. Vrijblijvend gesprek.',
  keywords: [
    'cybersecurity',
    'security audit',
    'penetration testing',
    'GDPR compliance',
    'cybersecurity Amsterdam',
    'security consulting',
    'vulnerability scanning',
    'data protection',
    'security training',
  ],
  openGraph: {
    title: 'Cybersecurity | TynkTech',
    description: 'Bescherm jouw bedrijf tegen cyberaanvallen en datalekken. Van security audits tot GDPR compliance.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/diensten/cybersecurity',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Cybersecurity TynkTech',
      },
    ],
  },
  alternates: {
    canonical: 'https://tynktech.nl/diensten/cybersecurity',
  },
};

export default function CybersecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

