'use client';

import * as React from 'react';
import { 
  DocsHeader,
  DocsCard,
  DocsBody,
  DocsBullets,
  DocsBulletItem,
  DocsImage,
} from '@/components/ui/docs-index';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Ripple } from '@/components/ui/ripple';
import { Icon } from 'lucide-react';

const breadcrumbs = [
  { title: 'Docs', onClick: () => window.location.href = '/docs' },
  { title: 'License' }
];

export default function LicensePage() {
  return (
    <>
      <DocsHeader
        title="Licentie & Voorwaarden"
        description="Informatie over onze licentie, algemene voorwaarden en gebruiksvoorwaarden"
        breadcrumbs={breadcrumbs}
        lastUpdated="Januari 2025"
        showSeparator
        size="lg"
        className="mb-8 sm:mb-12"
      />
      <DocsBody className="w-full h-[40vh] px-8 py-16 relative overflow-hidden rounded-3xl flex items-center justify-center border bg-background mb-12">
        <h1 className="text-xl tracking-tight text-foreground text-center">
            <span className="font-semibold text-3xl">TynkTech levert maatwerk digitale oplossingen. Alle projecten worden ontwikkeld volgens onze algemene voorwaarden en service level agreements.</span>
        </h1> 
        <Ripple/>
      </DocsBody>
      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="overview">Overzicht</h2>
          <p className="text-lg mb-6">
            TynkTech werkt volgens duidelijke licentie- en servicevoorwaarden. Alle projecten worden uitgevoerd met transparante afspraken over eigendom, onderhoud en support. 
            We bieden flexibele licentie-opties afhankelijk van jouw specifieke behoeften en projectvereisten.
          </p>
        </DocsBody>

        <Alert className="mb-8">
          <AlertDescription>
            The Apache 2.0 License is approved by the Open Source Initiative (OSI) and is compatible with the GPL version 3.
          </AlertDescription>
        </Alert>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="permissions">What You Can Do</h2>
          <p className="text-lg mb-6">
            Under the Apache License 2.0, you are granted extensive permissions:
          </p>
        </DocsBody>
        <DocsBullets variant="check" spacing="default" className="mb-8">
          <DocsBulletItem
            title="Project Eigendom"
            description="Jij behoudt volledig eigendom van alle code en assets die we voor jou ontwikkelen"
          />
          <DocsBulletItem
            title="Flexibele Licenties"
            description="We bieden verschillende licentie-opties afhankelijk van jouw specifieke behoeften"
          />
          <DocsBulletItem
            title="Source Code Toegang"
            description="Volledige toegang tot alle source code en documentatie van jouw project"
          />
          <DocsBulletItem
            title="Aanpassingen"
            description="Je kunt altijd aanpassingen maken of andere developers inschakelen voor wijzigingen"
          />
          <DocsBulletItem
            title="Hergebruik"
            description="Gebruik jouw oplossing voor alle doeleinden zonder beperkingen"
          />
          <DocsBulletItem
            title="Transparantie"
            description="Duidelijke afspraken over eigendom, licenties en gebruiksvoorwaarden in contracten"
          />
        </DocsBullets>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="conditions">Conditions</h2>
          <p className="text-lg mb-6">
            When using Suna under the Apache License 2.0, you must:
          </p>
        </DocsBody>
        <DocsBullets variant="default" spacing="default" className="mb-8">
          <DocsBulletItem
            title="Contractuele Afspraken"
            description="Alle projecten worden uitgevoerd volgens duidelijke service level agreements"
          />
          <DocsBulletItem
            title="Intellectueel Eigendom"
            description="Eigendomsrechten worden duidelijk vastgelegd in projectcontracten"
          />
          <DocsBulletItem
            title="Support & Onderhoud"
            description="Afspraken over onderhoud, updates en support worden contractueel vastgelegd"
          />
          <DocsBulletItem
            title="Vertrouwelijkheid"
            description="NDA's en vertrouwelijkheidsclausules beschermen jouw bedrijfsgegevens"
          />
        </DocsBullets>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="limitations">Limitations</h2>
          <p className="text-lg mb-6">
            The Apache License 2.0 has the following limitations:
          </p>
        </DocsBody>
        <DocsBullets variant="default" spacing="default" className="mb-8">
          <DocsBulletItem
            title="Service Level Agreements"
            description="Duidelijke SLA's voor uptime, response tijden en support beschikbaarheid"
          />
          <DocsBulletItem
            title="Warranty & Support"
            description="Gegarandeerde support en warranty periodes zoals overeengekomen in projectcontracten"
          />
          <DocsBulletItem
            title="Liability"
            description="Aansprakelijkheid wordt duidelijk vastgelegd volgens Nederlandse wetgeving"
          />
        </DocsBullets>

        <Alert className="mb-8">
          <AlertDescription>
            <strong>Belangrijk:</strong> Alle licentie- en servicevoorwaarden worden individueel besproken en vastgelegd in projectcontracten. 
            Neem contact met ons op voor meer informatie over specifieke licentie-opties voor jouw project.
          </AlertDescription>
        </Alert>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="faq">Frequently Asked Questions</h2>
        </DocsBody>
        
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-semibold mb-2">Wie is eigenaar van de code die jullie ontwikkelen?</h3>
            <p className="text-muted-foreground">
              Jij behoudt volledig eigendom van alle code en assets die we voor jou ontwikkelen. Dit wordt contractueel vastgelegd.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-semibold mb-2">Kan ik andere developers inschakelen voor wijzigingen?</h3>
            <p className="text-muted-foreground">
              Ja, je hebt volledige vrijheid om andere developers in te schakelen. We zorgen voor duidelijke documentatie en overdracht.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-semibold mb-2">Wat gebeurt er na oplevering van een project?</h3>
            <p className="text-muted-foreground">
              Na oplevering krijg je volledige toegang tot alle code en documentatie. We bieden optionele onderhouds- en supportpakketten.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-semibold mb-2">Hoe werken jullie met internationale klanten?</h3>
            <p className="text-muted-foreground">
              We werken wereldwijd en kunnen contracten opstellen volgens lokale wetgeving. Neem contact op om te bespreken wat het beste past bij jouw situatie.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="resources">Resources</h2>
          <p className="text-lg mb-6">
            Meer informatie over onze diensten en voorwaarden:
          </p>
        </DocsBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DocsCard
            title="Algemene Voorwaarden"
            description="Bekijk onze algemene voorwaarden en servicevoorwaarden"
            clickable
            actions={[
              { 
                label: 'Bekijk Voorwaarden', 
                variant: 'default',
                onClick: () => window.location.href = '/legal?tab=terms'
              }
            ]}
          />
          <DocsCard
            title="Neem Contact Op"
            description="Vragen over licenties of contracten? Neem contact met ons op"
            clickable
            actions={[
              { 
                label: 'Contact', 
                variant: 'default',
                onClick: () => window.location.href = '/contact'
              }
            ]}
          />
        </div>
      </section>
    </>
  );
} 