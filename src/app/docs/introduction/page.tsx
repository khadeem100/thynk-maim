'use client';

import * as React from 'react';
import { 
  DocsHeader,
  DocsCard,
  DocsBody,
  DocsImage
} from '@/components/ui/docs-index';
import { useTheme } from 'next-themes';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader } from '@/components/ui/card';
import { ArrowRight, Bot, Lightbulb } from 'lucide-react';

const breadcrumbs = [
  { title: 'Documentation', onClick: () => window.location.href = '/docs' },
  { title: 'Introduction' }
];

export default function IntroductionPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = !mounted
    ? '/thumbnail-light.png'
    : resolvedTheme === 'dark'
      ? '/thumbnail-dark.png'
      : '/thumbnail-light.png';

  return (
    <>
      <DocsHeader
        title="Welkom bij TynkTech"
        subtitle="Documentatie voor onze diensten: Website Ontwikkeling, Webapplicaties, Cloudbeheer & Cybersecurity"
        breadcrumbs={breadcrumbs}
        lastUpdated="Januari 2025"
        showSeparator
        size="lg"
        className="mb-8 sm:mb-12"
      />
    
      <DocsBody className="mb-8">
        <h2 id="overview">Over TynkTech</h2>
        <p className="text-lg mb-6">
          TynkTech is een innovatief technologiebedrijf gespecialiseerd in het ontwikkelen van moderne websites, webapplicaties en digitale oplossingen op maat. We helpen bedrijven wereldwijd met hun digitale transformatie door hoogwaardige technische oplossingen te leveren.
        </p>
        
        <h3 id="onze-diensten" className="mb-4">Onze Diensten</h3>
        <p className="mb-4">
          TynkTech biedt een breed scala aan diensten om jouw digitale behoeften te vervullen:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Website Ontwikkeling</strong> - Moderne, responsive websites ontwikkeld met de nieuwste technologieën</li>
          <li><strong>Webapplicatie Ontwikkeling</strong> - Custom webapplicaties op maat voor jouw specifieke behoeften</li>
          <li><strong>Webdesign</strong> - Professioneel design met focus op gebruikservaring en conversie</li>
          <li><strong>Cloudbeheer</strong> - Cloud-oplossingen en beheer voor AWS, Azure en Google Cloud</li>
          <li><strong>Cybersecurity</strong> - Beveiliging, audits en compliance diensten</li>
          <li><strong>Onderhoud & Support</strong> - Continue ondersteuning en updates voor jouw digitale oplossingen</li>
        </ul>
  
        <h3 id="onze-aanpak" className="mb-4">Onze Aanpak</h3>
        <p className="mb-6">
          Bij TynkTech geloven we in een transparante, collaboratieve aanpak. We werken nauw samen met onze klanten om te begrijpen wat ze nodig hebben en leveren oplossingen die precies passen bij hun doelen. Of je nu een startup bent die net begint of een gevestigd bedrijf dat wil digitaliseren, we hebben de expertise om je te helpen.
        </p>

        <h3 id="technologie-stack" className="mb-4">Onze Technologie Stack</h3>
        <p className="mb-4">We werken met moderne, bewezen technologieën:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Frontend</strong> - React, Next.js, Vue.js, TypeScript voor snelle en interactieve gebruikerservaringen</li>
          <li><strong>Backend</strong> - Node.js, Python, FastAPI voor robuuste en schaalbare server-side oplossingen</li>
          <li><strong>Cloud</strong> - AWS, Azure, Google Cloud voor betrouwbare en schaalbare infrastructuur</li>
          <li><strong>Databases</strong> - PostgreSQL, MongoDB, Supabase voor veilige en efficiënte dataopslag</li>
        </ul>
        
        <h3 id="internationaal-werken" className="mb-4">Internationaal Werken</h3>
        <p className="mb-6">
          TynkTech werkt wereldwijd met klanten. Hoewel ons hoofdkantoor in Amsterdam, Nederland is gevestigd, hebben we ervaring met internationale projecten en kunnen we naadloos samenwerken met teams in verschillende tijdzones. We bieden zowel remote als on-site ondersteuning, afhankelijk van jouw behoeften.
        </p>
      </DocsBody>
      <Separator className="my-6 w-full" />
      <div className='w-full items-center justify-end flex pb-8'>
        <Card onClick={() => window.location.href = '/docs/quick-start'} className="p-2 group rounded-xl w-full lg:w-[400px] hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center gap-2 bg-primary/10 w-12 h-12 rounded-xl">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Self-Hosting Guide</h3>
            </div>
            <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>
      </div>
    </>
  );
} 