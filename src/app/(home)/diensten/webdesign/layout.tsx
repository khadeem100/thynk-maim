import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webdesign | TynkTech – Professioneel Webdesign & UX Design',
  description: 'Professioneel webdesign dat jouw merk versterkt en bezoekers omzet in klanten. UI/UX design, responsive design, conversie optimalisatie. Van €1.950 tot €7.800+.',
  keywords: [
    'webdesign',
    'webdesign bureau',
    'UX design',
    'UI design',
    'webdesign Amsterdam',
    'website design',
    'responsive design',
    'conversie optimalisatie',
    'merk identiteit',
  ],
  openGraph: {
    title: 'Webdesign | TynkTech',
    description: 'Professioneel webdesign dat jouw merk versterkt en bezoekers omzet in klanten.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/diensten/webdesign',
    siteName: 'TynkTech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Webdesign TynkTech',
      },
    ],
  },
  alternates: {
    canonical: 'https://tynktech.nl/diensten/webdesign',
  },
};

export default function WebdesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

