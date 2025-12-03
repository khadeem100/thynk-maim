import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Oplossingen | TynkTech – Custom Digitale Oplossingen voor Grote Bedrijven',
  description: 'Enterprise digitale oplossingen op maat van TynkTech. Volledige implementatie, cloud-infrastructuur, cybersecurity en custom development voor grote bedrijven en agencies. Toegewijde account managers en 24/7 ondersteuning.',
  keywords: [
    'enterprise oplossingen',
    'enterprise webapplicaties',
    'enterprise cloud',
    'enterprise cybersecurity',
    'custom development',
    'enterprise implementatie',
    'grote bedrijven',
    'enterprise support',
    'dedicated account manager',
    'enterprise webdesign',
    'enterprise cloudbeheer',
    'enterprise security',
    'multi-tenant architectuur',
    'white-label oplossingen',
    'enterprise integratie',
    'TynkTech enterprise',
  ],
  openGraph: {
    title: 'Enterprise Oplossingen | TynkTech',
    description: 'Enterprise digitale oplossingen op maat van TynkTech. Volledige implementatie, cloud-infrastructuur, cybersecurity en custom development voor grote bedrijven.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/enterprise',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'TynkTech Enterprise Oplossingen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Oplossingen | TynkTech',
    description: 'Enterprise digitale oplossingen op maat van TynkTech voor grote bedrijven en agencies.',
    creator: '@tynktech',
    images: ['/banner.png'],
  },
  alternates: {
    canonical: 'https://tynktech.nl/enterprise',
  },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

