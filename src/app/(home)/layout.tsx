import { Navbar } from '@/components/home/sections/navbar';
import { Metadata } from 'next';

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
  return (
    <>
      <StructuredData />
      <div className="w-full relative">
        <div className="block w-px h-full border-l border-border fixed top-0 left-6 z-10"></div>
        <div className="block w-px h-full border-r border-border fixed top-0 right-6 z-10"></div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
