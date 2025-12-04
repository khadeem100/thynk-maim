import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Ontwikkeling | TynkTech – Moderne Websites op Maat',
  description: 'Professionele website ontwikkeling met moderne technologieën. Responsive design, snelle laadtijden, SEO geoptimaliseerd. Van €2.400 tot €9.600+. Vrijblijvend gesprek.',
  keywords: [
    'website ontwikkeling',
    'website laten maken',
    'website ontwikkelaar',
    'moderne website',
    'responsive website',
    'website Amsterdam',
    'website bouwen',
    'webdesign',
    'Next.js website',
    'React website',
  ],
  openGraph: {
    title: 'Website Ontwikkeling | TynkTech',
    description: 'Moderne, snelle en gebruiksvriendelijke websites die jouw bedrijf online laat groeien.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/diensten/website-ontwikkeling',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Website Ontwikkeling TynkTech',
      },
    ],
  },
  alternates: {
    canonical: 'https://tynktech.nl/diensten/website-ontwikkeling',
  },
};

export default function WebsiteOntwikkelingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

