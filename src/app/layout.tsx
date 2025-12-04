import { ThemeProvider } from '@/components/home/theme-provider';
import { siteConfig } from '@/lib/site';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { PostHogIdentify } from '@/components/posthog-identify';
import { PWARegister } from '@/components/home/pwa-register';
import '@/lib/polyfills'; // Load polyfills early

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: 'black',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description:
    'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity. Innovatief technologiebedrijf gespecialiseerd in het ontwikkelen van moderne websites, webapplicaties en digitale oplossingen op maat. Professioneel webdesign, cloudbeheer en geavanceerde cybersecurity.',
  keywords: [
    'website ontwikkeling',
    'webapplicatie ontwikkeling',
    'webdesign',
    'cloudbeheer',
    'cybersecurity',
    'website laten maken',
    'webapplicatie laten maken',
    'website ontwikkelaar',
    'webdeveloper',
    'cloud oplossingen',
    'cloud beheer',
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
    'webapplicatie ontwikkeling Nederland',
    'cloudbeheer Nederland',
    'cybersecurity Nederland',
    'TynkTech',
    'Tynk Tech',
    'website op maat',
    'webapplicatie op maat',
    'cloud services',
    'security consulting',
    'website beveiliging',
    'webapplicatie beveiliging',
    'cloud security',
    'IT beveiliging',
    'website optimalisatie',
    'web performance',
    'API ontwikkeling',
    'full-stack ontwikkeling',
    'frontend ontwikkeling',
    'backend ontwikkeling',
    'UI/UX design',
    'website redesign',
    'e-commerce ontwikkeling',
    'woocommerce ontwikkeling',
    'shopify ontwikkeling',
    'magento ontwikkeling',
    'wordpress ontwikkeling',
    'react ontwikkeling',
    'next.js ontwikkeling',
    'node.js ontwikkeling',
    'typescript ontwikkeling',
    'javascript ontwikkeling',
    'php ontwikkeling',
    'python ontwikkeling',
    'database ontwikkeling',
    'mobile-first design',
    'progressive web app',
    'single page application',
    'website migratie',
    'cloud migratie',
    'AWS beheer',
    'Azure beheer',
    'Google Cloud beheer',
    'server beheer',
    'server monitoring',
    'backup oplossingen',
    'disaster recovery',
    'website uptime',
    'SSL certificaten',
    'HTTPS implementatie',
    'website snelheid',
    'page speed optimalisatie',
    'core web vitals',
    'website analytics',
    'google analytics',
    'conversie optimalisatie',
    'A/B testing',
    'website testing',
    'accessibility',
    'WCAG compliance',
    'website toegankelijkheid',
  ],
  authors: [{ name: 'Tynk Tech Team', url: 'https://suna.so' }],
  creator:
    'Tynk Tech Team',
  publisher:
    'Tynk Tech Team',
  category: 'Technology',
  applicationName: 'Suna',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity',
    description:
      'TynkTech is een innovatief technologiebedrijf gespecialiseerd in moderne websites, webapplicaties, cloud-oplossingen en cybersecurity. Professioneel webdesign, cloudbeheer en geavanceerde beveiliging voor jouw bedrijf.',
    url: siteConfig.url,
    siteName: 'TynkTech',
    locale: 'nl_NL',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity',
    description:
      'TynkTech is een innovatief technologiebedrijf gespecialiseerd in moderne websites, webapplicaties, cloud-oplossingen en cybersecurity. Professioneel webdesign, cloudbeheer en geavanceerde beveiliging.',
    creator: '@tynktech',
    site: '@tynktech',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity',
      },
    ],
  },
  icons: {
    icon: [{ url: '/favicon.png', sizes: 'any' }],
    shortcut: '/favicon.png',
  },
  // manifest: "/manifest.json",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'nl-NL': siteConfig.url,
      'nl': siteConfig.url,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PCHSN4M2');`}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z9GQMYL46B"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z9GQMYL46B');
          `}
        </Script>
        <Script async src="https://cdn.tolt.io/tolt.js" data-tolt={process.env.NEXT_PUBLIC_TOLT_REFERRAL_ID}></Script>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TynkTech" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCHSN4M2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
            <Toaster />
          </Providers>
          <Analytics />
          <GoogleAnalytics gaId="G-Z9GQMYL46B" />
          <SpeedInsights />
          <PostHogIdentify />
          <PWARegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
