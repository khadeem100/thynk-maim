import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Nieuws | TynkTech – Tips, Trends en Inzichten',
  description: 'Blijf op de hoogte van de nieuwste trends, tips en inzichten op het gebied van website ontwikkeling, cloudbeheer en cybersecurity. Expert artikelen van TynkTech.',
  openGraph: {
    title: 'Blog & Nieuws | TynkTech',
    description: 'Blijf op de hoogte van de nieuwste trends en tips op het gebied van website ontwikkeling en cybersecurity.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/blog',
    siteName: 'TynkTech',
  },
  alternates: {
    canonical: 'https://tynktech.nl/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

