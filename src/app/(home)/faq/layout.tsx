import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen (FAQ) | TynkTech – Antwoorden op Jouw Vragen',
  description: 'Vind snel antwoorden op veelgestelde vragen over website ontwikkeling, webapplicaties, cloudbeheer, cybersecurity en onze diensten. TynkTech FAQ.',
  openGraph: {
    title: 'Veelgestelde Vragen | TynkTech',
    description: 'Vind snel antwoorden op veelgestelde vragen over onze diensten en werkwijze.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/faq',
    siteName: 'TynkTech',
  },
  alternates: {
    canonical: 'https://tynktech.nl/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

