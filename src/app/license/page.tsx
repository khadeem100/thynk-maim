'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function LicensePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <section className="w-full relative overflow-hidden pb-20">
        <div className="relative flex flex-col items-center w-full px-6 pt-10">
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex items-center justify-center mb-10 relative">
              <Link
                href="/"
                className="absolute left-0 group border border-border/50 bg-background hover:bg-accent/20 hover:border-secondary/40 rounded-full text-sm h-8 px-3 flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                <ArrowLeft size={14} className="text-muted-foreground" />
                <span className="font-medium text-muted-foreground text-xs tracking-wide">
                  Terug
                </span>
              </Link>

              <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center">
                Licentie <span className="text-secondary">Informatie</span>
              </h1>
            </div>

            <div className="rounded-xl border border-border bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] p-8 shadow-sm">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <h2 className="text-2xl font-medium tracking-tight mb-4">
                  Proprietary Licentie
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
                </p>

                <Alert className="mb-6 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
                  <AlertDescription className="text-red-900 dark:text-red-100">
                    <strong>BELANGRIJK:</strong> Alle software, technologie, code en materialen van TynkTech zijn 
                    proprietary eigendom en zijn NIET open source. Duplicatie, distributie of verkoop is strikt verboden.
                  </AlertDescription>
                </Alert>

                <h3 className="text-lg font-medium tracking-tight">
                  Eigendomsrechten
                </h3>
                <p className="text-muted-foreground text-balance mb-4">
                  Alle software, technologie, code, ontwerpen, documentatie, algoritmen, interfaces,
                  en andere materialen die deel uitmaken van of worden verstrekt in verband met de TynkTech
                  diensten zijn het exclusieve eigendom van TynkTech (Tynk Technologies V.O.F.) en zijn
                  beschermd door auteursrecht, handelsmerk, patent en andere intellectuele eigendomsrechten.
                </p>
                <p className="text-muted-foreground text-balance mb-6">
                  Niets op deze website of in onze diensten is open source, vrij beschikbaar, of vrijgegeven
                  onder enige open source licentie. Alle rechten zijn voorbehouden.
                </p>

                <h3 className="text-lg font-medium tracking-tight">
                  Verboden Handelingen
                </h3>
                <p className="text-muted-foreground text-balance mb-4">
                  Het is u ten strengste verboden om:
                </p>
                <ul className="text-muted-foreground space-y-1 mb-4">
                  <li>
                    De software, code, technologie of materialen te kopiëren, dupliceren, reproduceren,
                    reverse engineeren, decompileren, disassembleren of op enige andere manier te repliceren.
                  </li>
                  <li>
                    De software, code of technologie te verkopen, te verhuren, te leasen, te sublicentiëren,
                    te distribueren, te publiceren of op enige andere manier commercieel te exploiteren.
                  </li>
                  <li>
                    Afgeleide werken te maken op basis van onze software of technologie.
                  </li>
                  <li>
                    De software of technologie te gebruiken om concurrerende producten of diensten te ontwikkelen.
                  </li>
                  <li>
                    Onze intellectuele eigendomsrechten te schenden of te omzeilen.
                  </li>
                  <li>
                    Onze handelsmerken, logo's of andere merktekens te gebruiken zonder schriftelijke toestemming.
                  </li>
                </ul>
                <p className="text-muted-foreground text-balance mb-6">
                  Elke schending van deze bepalingen kan leiden tot civiele en strafrechtelijke vervolging,
                  inclusief maar niet beperkt tot schadevergoeding, gerechtelijke kosten en andere remedies
                  die beschikbaar zijn onder de toepasselijke wetgeving.
                </p>

                <h3 className="text-lg font-medium tracking-tight">
                  Beperkte Gebruikslicentie
                </h3>
                <p className="text-muted-foreground text-balance mb-4">
                  Onder voorbehoud van uw naleving van onze Algemene Voorwaarden, verleent TynkTech u een
                  beperkte, niet-exclusieve, niet-overdraagbare, niet-onderlicentieerbare licentie om:
                </p>
                <ul className="text-muted-foreground space-y-1 mb-4">
                  <li>
                    Toegang te krijgen tot en gebruik te maken van onze diensten zoals bedoeld door TynkTech.
                  </li>
                  <li>
                    De resultaten en deliverables te gebruiken die u ontvangt als onderdeel van de diensten
                    die door TynkTech worden verleend, voor uw persoonlijk of commercieel gebruik.
                  </li>
                </ul>
                <p className="text-muted-foreground text-balance mb-6">
                  Deze licentie is persoonlijk, niet-overdraagbaar en kan door TynkTech op elk moment worden
                  beëindigd zonder voorafgaande kennisgeving in geval van schending van deze voorwaarden.
                </p>

                <h3 className="text-lg font-medium tracking-tight">
                  Handhaving
                </h3>
                <p className="text-muted-foreground text-balance mb-6">
                  TynkTech behoudt zich het recht voor om alle beschikbare juridische remedies te gebruiken
                  om zijn intellectuele eigendomsrechten te handhaven, inclusief maar niet beperkt tot het
                  indienen van rechtszaken, het verzoeken om voorlopige maatregelen, en het verzoeken om
                  schadevergoeding voor alle schendingen van deze licentie.
                </p>

                <h3 className="text-lg font-medium tracking-tight">
                  Geen Garanties
                </h3>
                <p className="text-muted-foreground text-balance mb-6">
                  De software en technologie worden verstrekt "ZOALS ZE ZIJN" zonder garanties van welke aard dan ook,
                  expliciet of impliciet, inclusief maar niet beperkt tot garanties van verkoopbaarheid,
                  geschiktheid voor een bepaald doel, of niet-inbreuk. TynkTech aanvaardt geen aansprakelijkheid
                  voor enige schade die voortvloeit uit het gebruik of het onvermogen om de software of technologie te gebruiken.
                </p>

                <h3 className="text-lg font-medium tracking-tight">
                  Toepasselijk Recht
                </h3>
                <p className="text-muted-foreground text-balance mb-6">
                  Deze licentie wordt beheerst door en geïnterpreteerd in overeenstemming met het Nederlandse recht.
                  Alle geschillen met betrekking tot deze licentie zullen worden voorgelegd aan de bevoegde
                  rechter in Nederland.
                </p>

                <h3 className="text-lg font-medium tracking-tight">
                  Neem Contact Op
                </h3>
                <p className="text-muted-foreground text-balance">
                  Voor vragen over deze licentie of voor toestemming voor specifiek gebruik, kunt u contact met ons opnemen
                  door een e-mail te sturen naar{' '}
                  <a
                    href="mailto:admin@thynktech.nl"
                    className="text-secondary hover:underline"
                  >
                    admin@thynktech.nl
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 text-center pb-10">
              <Link
                href="/"
                className="group inline-flex h-10 items-center justify-center gap-2 text-sm font-medium tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] bg-primary hover:bg-primary/90 transition-all duration-200 w-fit"
              >
                <span>Terug naar Home</span>
                <span className="inline-flex items-center justify-center size-5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-200">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

