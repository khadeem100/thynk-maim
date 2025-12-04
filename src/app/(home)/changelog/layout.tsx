import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog | TynkTech – Updates en Nieuwe Features',
  description: 'Bekijk alle updates, nieuwe features en verbeteringen van TynkTech. Blijf op de hoogte van de laatste ontwikkelingen.',
  openGraph: {
    title: 'Changelog | TynkTech',
    description: 'Bekijk alle updates en nieuwe features van TynkTech.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://tynktech.nl/changelog',
    siteName: 'TynkTech',
  },
  alternates: {
    canonical: 'https://tynktech.nl/changelog',
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

