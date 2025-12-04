import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | TynkTech Rotterdam – Neem contact op voor Website & Webapp Ontwikkeling',
  description: 'Neem contact op met TynkTech in Rotterdam. ✓ Gratis consultatie ✓ Website ontwikkeling ✓ Webapplicaties ✓ Cloudbeheer ✓ Cybersecurity. Bel +31 6 12 34 56 78 of mail naar admin@thynktech.nl',
  keywords: [
    'contact TynkTech',
    'neem contact op',
    'TynkTech contact',
    'website ontwikkeling contact',
    'webapplicatie contact',
    'cloudbeheer contact',
    'cybersecurity contact',
  ],
  openGraph: {
    title: 'Contact | TynkTech',
    description: 'Neem contact op met TynkTech voor vragen over onze diensten. We helpen je graag verder.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/contact',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'TynkTech Contact',
      },
    ],
  },
  alternates: {
    canonical: 'https://tynktech.nl/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

