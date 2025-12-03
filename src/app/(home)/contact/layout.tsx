import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | TynkTech – Neem contact met ons op',
  description: 'Neem contact op met TynkTech voor vragen over onze diensten. Website ontwikkeling, webapplicaties, cloudbeheer en cybersecurity. We helpen je graag verder.',
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

