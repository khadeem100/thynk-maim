'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { FlickeringGrid } from '@/components/home/ui/flickering-grid';
import { useMediaQuery } from '@/hooks/use-media-query';
import { ArrowLeft } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

function LegalContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get tab from URL or default to "terms"
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(
    tabParam === 'terms' || tabParam === 'privacy' ? tabParam : 'terms',
  );

  const tablet = useMediaQuery('(max-width: 1024px)');
  const [mounted, setMounted] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to update URL without refreshing the page
  const updateUrl = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setMounted(true);

    // Update the URL if it doesn't match the active tab
    if (tabParam !== activeTab) {
      updateUrl(activeTab);
    }
  }, [tabParam, activeTab, updateUrl]);

  // Update the URL when the tab changes
  useEffect(() => {
    updateUrl(activeTab);
  }, [activeTab, updateUrl]);

  // Update the active tab when URL changes
  useEffect(() => {
    if (tabParam === 'terms' || tabParam === 'privacy') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // Handle tab change
  const handleTabChange = (tab: 'terms' | 'privacy') => {
    setActiveTab(tab);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <section className="w-full relative overflow-hidden pb-20">
        <div className="relative flex flex-col items-center w-full px-6 pt-10">
          {/* Left side flickering grid with gradient fades - similar to hero section */}
          <div className="absolute left-0 top-0 h-[600px] w-1/3 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background z-10" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/90 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/90 to-transparent z-10" />

            <FlickeringGrid
              className="h-full w-full"
              squareSize={mounted && tablet ? 2 : 2.5}
              gridGap={mounted && tablet ? 2 : 2.5}
              color="var(--secondary)"
              maxOpacity={0.4}
              flickerChance={isScrolling ? 0.01 : 0.03}
            />
          </div>

          {/* Right side flickering grid with gradient fades */}
          <div className="absolute right-0 top-0 h-[600px] w-1/3 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background z-10" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/90 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/90 to-transparent z-10" />

            <FlickeringGrid
              className="h-full w-full"
              squareSize={mounted && tablet ? 2 : 2.5}
              gridGap={mounted && tablet ? 2 : 2.5}
              color="var(--secondary)"
              maxOpacity={0.4}
              flickerChance={isScrolling ? 0.01 : 0.03}
            />
          </div>

          {/* Center content background with rounded bottom */}
          <div className="absolute inset-x-1/4 top-0 h-[600px] -z-20 bg-background rounded-b-xl"></div>

          <div className="max-w-4xl w-full mx-auto">
            <div className="flex items-center justify-center mb-10 relative">
              <Link
                href="/"
                className="absolute left-0 group border border-border/50 bg-background hover:bg-accent/20 hover:border-secondary/40 rounded-full text-sm h-8 px-3 flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                <ArrowLeft size={14} className="text-muted-foreground" />
                <span className="font-medium text-muted-foreground text-xs tracking-wide">
                  Back
                </span>
              </Link>

              <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center">
                Juridische <span className="text-secondary">Informatie</span>
              </h1>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex space-x-4 border-b border-border">
                <button
                  onClick={() => handleTabChange('terms')}
                  className={`pb-2 px-4 ${
                    activeTab === 'terms'
                      ? 'border-b-2 border-secondary font-medium text-secondary'
                      : 'text-muted-foreground hover:text-primary/80 transition-colors'
                  }`}
                >
                  Algemene Voorwaarden
                </button>
                <button
                  onClick={() => handleTabChange('privacy')}
                  className={`pb-2 px-4 ${
                    activeTab === 'privacy'
                      ? 'border-b-2 border-secondary font-medium text-secondary'
                      : 'text-muted-foreground hover:text-primary/80 transition-colors'
                  }`}
                >
                  Privacybeleid
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] p-8 shadow-sm">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {activeTab === 'terms' ? (
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight mb-4">
                      Algemene Voorwaarden
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Algemene Voorwaarden
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
                    </p>

                    <p className="text-muted-foreground text-balance mb-6">
                      LEES DEZE ALGEMENE VOORWAARDEN ("OVEREENKOMST" OF "VOORWAARDEN" OF "SERVICEVOORWAARDEN") 
                      ZORGVULDIG DOOR VOORDAT U DE DIENSTEN GEBRUIKT DIE WORDEN AANGEBODEN DOOR TynkTech 
                      (Tynk Technologies V.O.F., Nederland). DEZE OVEREENKOMST BEVAT DE JURIDISCH BINDENDE 
                      VOORWAARDEN EN BEPALINGEN VOOR UW GEBRUIK VAN DE TYNK TECH WEBSITE EN ALLE GERELATEERDE DIENSTEN.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Definities
                    </h3>
                    <ul className="text-muted-foreground space-y-1 mb-6">
                      <li>
                        "Bedrijf" verwijst naar TynkTech (Tynk Technologies V.O.F., Nederland).
                      </li>
                      <li>
                        "Website" verwijst naar de TynkTech website, inclusief alle gerelateerde
                        functies, inhoud of applicaties die van tijd tot tijd door het Bedrijf worden aangeboden.
                      </li>
                      <li>
                        "Dienst" verwijst naar de TynkTech website en alle gerelateerde
                        diensten die door het Bedrijf worden verleend, inclusief website ontwikkeling,
                        webapplicatie ontwikkeling, cloudbeheer, cybersecurity en ondersteuning.
                      </li>
                      <li>
                        "Gebruiker" verwijst naar elke persoon of entiteit die de Website of Dienst gebruikt.
                      </li>
                      <li>
                        "Inhoud" verwijst naar alle tekst, afbeeldingen, code of ander
                        materiaal dat door Gebruikers wordt geüpload naar of gegenereerd door de Website of Dienst.
                      </li>
                      <li>
                        "Intellectueel Eigendom" verwijst naar alle eigendomsrechten, inclusief maar niet beperkt tot
                        auteursrechten, handelsmerken, patenten, handelsgeheimen en andere eigendomsrechten
                        met betrekking tot de Website, Dienst en alle gerelateerde technologieën.
                      </li>
                      <li>
                        "Voorwaarden" verwijst naar deze voorwaarden die het gebruik van de Website en Dienst regelen.
                      </li>
                      <li>
                        "Licentie" verwijst naar de beperkte toestemmingen die aan Gebruikers worden verleend
                        om de Website en Dienst te gebruiken zoals uiteengezet in deze Voorwaarden.
                      </li>
                      <li>
                        "Vergoedingen" verwijst naar de abonnements- of andere betalingen die
                        door Gebruikers worden gedaan voor toegang tot bepaalde functies of niveaus van de Dienst.
                      </li>
                      <li>
                        "Contactadres" verwijst naar het contactadres van het Bedrijf, specifiek admin@thynktech.nl
                      </li>
                      <li>
                        "Privacybeleid" verwijst naar het document dat beschrijft hoe
                        het Bedrijf gebruikersgegevens verzamelt, gebruikt en beschermt.
                      </li>
                      <li>
                        "Derde Partij" verwijst naar elke persoon of entiteit anders dan het Bedrijf of de Gebruiker.
                      </li>
                    </ul>

                    <h3 className="text-lg font-medium tracking-tight">
                      Aanvaarding van de Voorwaarden
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      De Dienst wordt aangeboden onder voorbehoud van aanvaarding zonder
                      wijziging van al deze Voorwaarden en alle andere
                      operationele regels, beleidsregels en procedures die van tijd tot tijd
                      kunnen worden gepubliceerd in verband met de
                      Diensten door het Bedrijf. Bovendien kunnen sommige diensten
                      die via de Dienst worden aangeboden onderworpen zijn aan aanvullende
                      voorwaarden die van tijd tot tijd door het Bedrijf worden vastgesteld;
                      uw gebruik van dergelijke diensten is onderworpen aan die
                      aanvullende voorwaarden, die door deze verwijzing worden opgenomen
                      in deze Voorwaarden.
                    </p>

                    <p className="text-muted-foreground text-balance mb-6">
                      Het Bedrijf kan, naar eigen goeddunken, weigeren de
                      Dienst aan te bieden aan elke persoon of entiteit en kan zijn
                      toelatingscriteria op elk moment wijzigen. Deze bepaling is nietig
                      waar dit door de wet is verboden en het recht om toegang te krijgen tot de
                      Dienst wordt ingetrokken in dergelijke rechtsgebieden.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Regels en Gedrag
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      Door gebruik te maken van de Dienst, stemt u ermee in dat deze uitsluitend
                      bedoeld is voor het doel van het gebruik van onze diensten voor website ontwikkeling,
                      webapplicatie ontwikkeling, cloudbeheer, cybersecurity en ondersteuning.
                      U erkent en stemt ermee in dat bij gebruik van de Dienst u
                      de noodzakelijke rechten en toestemmingen moet hebben voor alle
                      inhoud of gegevens die u opneemt. U bent uitsluitend
                      verantwoordelijk voor het waarborgen dat uw gebruik van de Dienst
                      legaal is en dat u de noodzakelijke rechten heeft voor alle taken
                      die u uitvoert. Het Bedrijf is niet verantwoordelijk voor enige
                      inhoud die wordt gemaakt of acties die worden ondernomen via de Dienst en
                      wijst alle aansprakelijkheid af voor eventuele problemen die voortvloeien uit de
                      gemaakte inhoud of uitgevoerde acties, inclusief maar niet
                      beperkt tot inbreuk op auteursrechten, illegale inhoud of enige
                      andere juridische aangelegenheden.
                    </p>

                    <p className="text-muted-foreground text-balance mb-4">
                      As a condition of use, you promise not to use the Service
                      for any purpose that is prohibited by the Terms of Use. By
                      way of example, and not as a limitation, you shall not
                      (and shall not permit any third party to) take any action
                      (including making use of the Site, any Assets, or our
                      models or derivatives of our models) that:
                    </p>

                    <ul className="text-muted-foreground space-y-1 mb-6">
                      <li>
                        would constitute a violation of any applicable law,
                        rule, or regulation;
                      </li>
                      <li>
                        infringes upon any intellectual property or other right
                        of any other person or entity;
                      </li>
                      <li>
                        is threatening, abusive, harassing, defamatory,
                        libelous, deceptive, fraudulent, invasive of another's
                        privacy, tortious, obscene, offensive, furthering of
                        self-harm, or profane;
                      </li>
                      <li>creates Assets that exploit or abuse children;</li>
                      <li>
                        generates or disseminates verifiably false information
                        with the purpose of harming others;
                      </li>
                      <li>impersonates or attempts to impersonate others;</li>
                      <li>
                        generates or disseminates personally identifying or
                        identifiable information;
                      </li>
                      <li>
                        creates Assets that imply or promote support of a
                        terrorist organization;
                      </li>
                      <li>
                        creates Assets that condone or promote violence against
                        people based on any protected legal category.
                      </li>
                    </ul>

                    <p className="text-muted-foreground text-balance mb-6">
                      You agree not to use the Service for the purpose of
                      generating illegal or harmful applications or content.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      User Responsibility for Created Content
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      You agree not to create any content or perform any actions
                      that are illegal, infringe on the rights of any third
                      party, or violate any applicable law, regulation, or these
                      Terms of Use. The Company reserves the right to remove any
                      content or disable any action that it deems to be in
                      violation of these Terms of Use, at its sole discretion,
                      and without notice. You are solely responsible for any
                      content you create or actions you perform, and you agree
                      to indemnify and hold harmless the Company from any
                      claims, losses, damages, or expenses arising out of or
                      related to your created content or performed actions.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Proprietary Eigendomsrechten en Verbod op Duplicatie
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      <strong>BELANGRIJK:</strong> Alle software, technologie, code, ontwerpen, documentatie,
                      en andere materialen die deel uitmaken van of worden verstrekt in verband met de Dienst
                      zijn het exclusieve eigendom van TynkTech en zijn beschermd door auteursrecht,
                      handelsmerk en andere intellectuele eigendomsrechten. Niets op deze Website of in de Dienst
                      is open source of vrij beschikbaar.
                    </p>
                    <p className="text-muted-foreground text-balance mb-4">
                      U erkent en stemt ermee in dat:
                    </p>
                    <ul className="text-muted-foreground space-y-1 mb-4">
                      <li>
                        Alle software, code, technologieën, algoritmen, interfaces, ontwerpen en
                        andere componenten van de Dienst zijn proprietary eigendom van TynkTech.
                      </li>
                      <li>
                        U heeft GEEN recht om de software, code of technologie te kopiëren, dupliceren,
                        reproduceren, reverse engineeren, decompileren, disassembleren of op enige andere
                        manier te repliceren.
                      </li>
                      <li>
                        U heeft GEEN recht om de software, code of technologie te verkopen, te verhuren,
                        te leasen, te sublicentiëren, te distribueren of op enige andere manier commercieel
                        te exploiteren.
                      </li>
                      <li>
                        U heeft GEEN recht om afgeleide werken te maken op basis van de software of technologie.
                      </li>
                      <li>
                        Elke ongeautoriseerde duplicatie, distributie of verkoop van onze software of technologie
                        is strikt verboden en kan leiden tot civiele en strafrechtelijke vervolging.
                      </li>
                    </ul>
                    <p className="text-muted-foreground text-balance mb-6">
                      Het Bedrijf behoudt zich alle rechten voor die niet uitdrukkelijk zijn verleend in deze Voorwaarden.
                      Elke schending van deze bepalingen kan leiden tot onmiddellijke beëindiging van uw toegang
                      tot de Dienst en kan leiden tot juridische stappen.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Nauwkeurigheidsdisclaimer
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      The Service is provided for general assistance purposes.
                      The analysis and results generated by the AI are not
                      guaranteed to be error-free and should be thoroughly
                      verified before relying on them. Users assume full
                      responsibility for any content created or actions
                      performed using the Service.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Auteursrecht en Takedown Beleid
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      The Company utilizes artificial intelligence systems to
                      generate content and perform actions. Such generation may
                      unintentionally involve copyrighted material or trademarks
                      held by others. We respect rights holders internationally,
                      and we ask our users to do the same. If you believe your
                      copyright or trademark is being infringed by the Service,
                      neem dan contact met ons op via admin@thynktech.nl en we zullen uw verzoek verwerken en
                      investigate your request and take appropriate actions
                      under the Digital Millennium Copyright Act and other
                      applicable intellectual property laws with respect to any
                      alleged or actual infringement.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Vergoedingen en Betalingen
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      Het Bedrijf kan betaalde Diensten aanbieden. U kunt meer te weten komen
                      over onze prijzen op onze website. U kunt zich aanmelden voor een
                      abonnement, betaalbaar in euro's, dat automatisch
                      wordt verlengd. U kunt op elk moment stoppen met het gebruik van de Dienst en
                      uw abonnement opzeggen via de website
                      of door een e-mail te sturen naar admin@thynktech.nl. Als u uw
                      abonnement opzegt, ontvangt u mogelijk geen restitutie of tegoed
                      voor bedragen die al zijn gefactureerd of betaald. Het
                      Bedrijf behoudt zich het recht voor om zijn prijzen op elk moment te wijzigen.
                      Als u een abonnement heeft, zijn wijzigingen in
                      de prijzen niet van toepassing tot uw volgende verlenging.
                    </p>

                    <p className="text-muted-foreground text-balance mb-6">
                      Tenzij anders vermeld, zijn uw abonnementskosten ("Vergoedingen")
                      exclusief btw, belastingen, heffingen en andere soortgelijke
                      beoordelingen ("Belastingen"). U bent
                      verantwoordelijk voor alle Belastingen die verband houden met uw aankoop
                      en wij kunnen u factureren voor dergelijke Belastingen. U stemt ermee in om tijdig
                      dergelijke Belastingen te betalen en ons documentatie te verstrekken die
                      de betaling aantoont of ander bewijs dat wij redelijkerwijs
                      kunnen vereisen. Als een bedrag van uw Vergoedingen achterstallig is, kunnen wij
                      uw toegang tot de Diensten opschorten nadat wij u
                      schriftelijk op de hoogte hebben gesteld van de achterstallige betaling.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Beëindiging
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      The Company may terminate your access to all or any part
                      of the Service at any time if you fail to comply with
                      these Terms of Use, which may result in the forfeiture and
                      destruction of all information associated with your
                      account. Further, either party may terminate the Services
                      for any reason and at any time upon written notice. If you
                      wish to terminate your account, you may do so by following
                      the instructions on the Service. Any fees paid hereunder
                      are non-refundable. Upon any termination, all rights and
                      licenses granted to you in this Agreement shall
                      immediately terminate, but all provisions hereof which by
                      their nature should survive termination shall survive
                      termination, including, without limitation, warranty
                      disclaimers, indemnity, and limitations of liability.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Geschilbeslechting
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      LEES DEZE SECTIE ZORGVULDIG DOOR, AANGEZIEN DIT UW
                      RECHTEN BEÏNVLOEDT.
                    </p>

                    <p className="text-muted-foreground text-balance mb-4">
                      <strong>Agreement to Arbitrate.</strong> You and the
                      Company agree that any and all disputes, claims, demands,
                      or causes of action ("Claims") that have arisen or may
                      arise between you and us, whether arising out of or
                      relating to these Terms, the Site, or any aspect of the
                      relationship or transactions between us, will be resolved
                      exclusively through final and binding arbitration before a
                      neutral arbitrator, rather than in a court by a judge or
                      jury, in accordance with the terms of this Arbitration
                      Agreement, except that you or we may (but are not required
                      to) assert individual Claims in small claims court if such
                      Claims are within the scope of such court's jurisdiction.
                    </p>

                    <p className="text-muted-foreground text-balance mb-4">
                      <strong>
                        Prohibition of Class and Representative Actions.
                      </strong>{' '}
                      YOU AND WE AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST
                      THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A
                      PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                      REPRESENTATIVE ACTION OR PROCEEDING.
                    </p>

                    <p className="text-muted-foreground text-balance mb-4">
                      <strong>Pre-Arbitration Dispute Resolution.</strong>{' '}
                      Before commencing any arbitration, you agree to provide
                      the Company with a written notice of Claim, and the
                      Company agrees to provide you with a written notice of
                      Claim to the extent reasonably possible based on the
                      availability of your contact information to the Company.
                      The Notice must describe the nature and basis of the Claim
                      in sufficient detail and set forth the specific relief
                      sought.
                    </p>

                    <p className="text-muted-foreground text-balance mb-6">
                      Both parties agree that they will attempt to resolve a
                      Claim through informal negotiation within sixty (60)
                      calendar days from the date the Notice is received. If the
                      Claim is not resolved within sixty (60) calendar days
                      after the Notice is received, you or we may commence an
                      arbitration proceeding.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Toepasselijk Recht
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      Alle geschillen en claims worden beheerst door het Nederlandse recht,
                      zonder verwijzing naar de conflictenrechtregels. Alle geschillen
                      zullen worden voorgelegd aan de bevoegde rechter in Nederland,
                      en u en het Bedrijf stemmen elk onvoorwaardelijk,
                      vrijwillig en onherroepelijk in met de exclusieve
                      persoonlijke jurisdictie en rechtsmacht van die rechtbanken.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Links naar en van Andere Websites
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      You may gain access to other websites via links on the
                      Site. These Terms apply to the Site only and do not apply
                      to other parties' websites. Similarly, you may have come
                      to the Site via a link from another website. The terms of
                      use of other websites do not apply to the Site. The
                      Company assumes no responsibility for any terms of use or
                      material outside of the Site accessed via any link.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Wijziging van de Voorwaarden
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      At its sole discretion, the Company may modify or replace
                      any of the Terms of Use, or change, suspend, or
                      discontinue the Service (including without limitation, the
                      availability of any feature, database, or content) at any
                      time by posting a notice on the Site or by sending you an
                      email. The Company may also impose limits on certain
                      features and services or restrict your access to parts or
                      all of the Service without notice or liability. It is your
                      responsibility to check the Terms of Use periodically for
                      changes. Your continued use of the Service following the
                      posting of any changes to the Terms of Use constitutes
                      acceptance of those changes.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Handelsmerken en Patenten
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      Alle TynkTech logo's, merken en aanduidingen zijn handelsmerken of
                      geregistreerde handelsmerken van het Bedrijf. Alle andere handelsmerken
                      die op deze website worden genoemd zijn eigendom van hun
                      respectieve eigenaren. De handelsmerken en logo's die op
                      deze website worden weergegeven mogen niet worden gebruikt zonder de voorafgaande schriftelijke
                      toestemming van het Bedrijf of hun respectieve eigenaren.
                      Delen, functies en/of functionaliteit van de producten van het Bedrijf
                      kunnen worden beschermd onder de octrooiaanvragen of patenten van het Bedrijf.
                      Alle rechten zijn voorbehouden.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Licentievoorwaarden
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      Onder voorbehoud van uw naleving van deze Overeenkomst, de
                      voorwaarden hierin, en eventuele beperkingen die van toepassing zijn op het
                      Bedrijf of door de wet:
                    </p>
                    <ul className="text-muted-foreground space-y-1 mb-4">
                      <li>
                        U krijgt een niet-exclusieve, beperkte,
                        niet-overdraagbare, niet-onderlicentieerbare, niet-toewijsbare,
                        vrijelijk herroepbare licentie om toegang te krijgen tot en de Dienst te gebruiken
                        voor zakelijk of persoonlijk gebruik, uitsluitend zoals bedoeld door het Bedrijf;
                      </li>
                      <li>
                        U bezit alle resultaten, deliverables en output die u ontvangt als onderdeel van
                        de diensten die door het Bedrijf worden verleend, en
                      </li>
                      <li>
                        Het Bedrijf draagt alle rechten, titel en belang over
                        in en met betrekking tot dergelijke resultaten voor uw persoonlijk of commercieel
                        gebruik, behoudens de proprietary technologieën en methodologieën van het Bedrijf.
                      </li>
                    </ul>
                    <p className="text-muted-foreground text-balance mb-6">
                      Het Bedrijf behoudt zich alle rechten voor die niet uitdrukkelijk
                      zijn verleend onder deze Voorwaarden. Elke persoon moet een
                      uniek account hebben, en u bent verantwoordelijk voor alle activiteiten
                      die worden uitgevoerd op uw account. Een schending of overtreding van een van
                      onze Voorwaarden kan leiden tot onmiddellijke beëindiging van
                      uw recht om onze Dienst te gebruiken.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Vrijwaring
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      You shall defend, indemnify, and hold harmless the
                      Company, its affiliates, and each of its, and its
                      affiliates employees, contractors, directors, suppliers,
                      and representatives from all liabilities, losses, claims,
                      and expenses, including reasonable attorneys' fees, that
                      arise from or relate to (i) your use or misuse of, or
                      access to, the Service, or (ii) your violation of the
                      Terms of Use or any applicable law, contract, policy,
                      regulation, or other obligation. The Company reserves the
                      right to assume the exclusive defense and control of any
                      matter otherwise subject to indemnification by you, in
                      which event you will assist and cooperate with the Company
                      in connection therewith.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Beperking van Aansprakelijkheid
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      IN NO EVENT SHALL THE COMPANY OR ITS DIRECTORS, EMPLOYEES,
                      AGENTS, PARTNERS, SUPPLIERS, OR CONTENT PROVIDERS, BE
                      LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE,
                      OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO THE
                      SERVICE (I) FOR ANY LOST PROFITS, DATA LOSS, COST OF
                      PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL,
                      INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES
                      OF ANY KIND WHATSOVER, OR SUBSTITUTE GOODS OR SERVICES,
                      (II) FOR YOUR RELIANCE ON THE SERVICE, INCLUDING ANY
                      APPLICATIONS CREATED USING THE AI, OR (III) FOR ANY DIRECT
                      DAMAGES IN EXCESS (IN THE AGGREGATE) OF THE FEES PAID BY
                      YOU FOR THE SERVICE OR, IF GREATER, $100. SOME STATES DO
                      NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR
                      CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS AND
                      EXCLUSIONS MAY NOT APPLY TO YOU.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Disclaimer
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      ALL USE OF THE SERVICE AND ANY CONTENT IS UNDERTAKEN
                      ENTIRELY AT YOUR OWN RISK. THE SERVICE (INCLUDING, WITHOUT
                      LIMITATION, DE TYNK TECH WEBSITE EN ALLE INHOUD) WORDT VERSTREKT
                      "AS IS" AND "AS AVAILABLE" AND IS WITHOUT WARRANTY OF ANY
                      KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
                      THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT,
                      MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE, AND
                      ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR
                      USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED.
                      TYNK TECH GARANDEERT NIET DE NAUWKEURIGHEID, VOLLEDIGHEID OF
                      RELIABILITY OF THE AI-GENERATED CONTENT, AND USERS ASSUME
                      FULL RESPONSIBILITY FOR ANY APPLICATIONS CREATED USING THE
                      SERVICE. SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG
                      AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY
                      NOT APPLY TO YOU.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Leeftijdsvereisten
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      By accessing the Services, you confirm that you're at
                      least 18 years old and meet the minimum age of digital
                      consent in your country. If you are not old enough to
                      consent to our Terms of Use in your country, your parent
                      or guardian must agree to this Agreement on your behalf.
                    </p>

                    <p className="text-muted-foreground text-balance mb-6">
                      Please ask your parent or guardian to read these terms
                      with you. If you're a parent or legal guardian, and you
                      allow your teenager to use the Services, then these terms
                      also apply to you and you're responsible for your
                      teenager's activity on the Services. No assurances are
                      made as to the suitability of the Assets for you.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Neem Contact Op
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      Voor vragen met betrekking tot de Dienst kunt u contact met ons opnemen
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
                ) : (
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight mb-4">
                      Privacybeleid
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Privacy
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      Onze toewijding aan privacy en gegevensbescherming komt tot uiting
                      in dit Privacybeleid dat beschrijft hoe we verzamelen
                      en verwerken "persoonsgegevens" die u identificeren,
                      zoals uw naam of e-mailadres. Alle andere informatie
                      behalve dit is "niet-persoonlijke informatie." Als we
                      persoonsgegevens opslaan met niet-persoonlijke informatie, beschouwen we
                      die combinatie als persoonsgegevens.
                    </p>

                    <p className="text-muted-foreground text-balance mb-6">
                      Verwijzingen naar onze "Diensten" bij TynkTech in dit beleid
                      omvatten onze website, apps en andere producten en
                      diensten. Dit beleid is van toepassing op onze Diensten die
                      dit Privacybeleid weergeven of ernaar verwijzen. Diensten van derden
                      waarmee we integreren worden beheerst door hun
                      eigen privacybeleid.
                    </p>

                    <p className="text-muted-foreground text-balance mb-6">
                      TynkTech verzamelt geen biometrische of identificerende
                      informatie zonder uw uitdrukkelijke toestemming. Alle gegevens worden veilig verwerkt
                      en alle gegevens worden verwijderd bij verwijdering van het account, tenzij
                      wettelijk verplicht om deze te bewaren.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Gegevensverzameling
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      We verzamelen informatie over u wanneer:
                    </p>

                    <p className="font-medium mb-2">
                      U deze direct aan ons verstrekt.
                    </p>
                    <p className="text-muted-foreground mb-2">
                      Bijvoorbeeld, we verzamelen:
                    </p>
                    <ul className="text-muted-foreground space-y-1 mb-4">
                      <li>
                        Naam en contactgegevens. We verzamelen gegevens zoals
                        naam en e-mailadres.
                      </li>
                      <li>
                        Betalingsgegevens. Als u een aankoop doet, verzamelen we
                        creditcardnummers, financiële rekeninginformatie en
                        andere betalingsgegevens via onze beveiligde betalingsverwerker.
                      </li>
                      <li>
                        Inhoud en bestanden. We verzamelen en bewaren de documenten,
                        bestanden of andere materialen die u naar ons stuurt in verband
                        met het leveren van onze Diensten, inclusief via e-mail of
                        contactformulieren.
                      </li>
                    </ul>

                    <p className="font-medium mb-2">
                      We verzamelen deze automatisch via onze producten en
                      diensten.
                    </p>
                    <p className="text-muted-foreground mb-2">
                      Bijvoorbeeld, we verzamelen:
                    </p>
                    <ul className="text-muted-foreground space-y-1 mb-4">
                      <li>
                        Identificatoren en apparaatinformatie. Wanneer u onze
                        websites bezoekt, loggen onze webservers uw Internet Protocol
                        (IP) adres en informatie over uw apparaat,
                        inclusief apparaatidentificatoren, apparaattype, besturingssysteem,
                        browser en andere software inclusief type,
                        versie, taal, instellingen en configuratie.
                      </li>
                      <li>
                        Gebruiksgegevens. We loggen uw activiteit op onze website,
                        inclusief de URL van de website waarvan u naar
                        onze site kwam, pagina's die u op onze website bekijkt, hoe lang u
                        op een pagina doorbracht, toegangstijden en andere details over
                        uw gebruik van en acties op onze website.
                      </li>
                    </ul>

                    <p className="font-medium mb-2">
                      Iemand anders vertelt ons informatie over u.
                    </p>
                    <p className="text-muted-foreground mb-2">
                      Bronnen van derden omvatten bijvoorbeeld:
                    </p>
                    <ul className="text-muted-foreground space-y-1 mb-4">
                      <li>
                        Partners van derden. Applicaties en
                        diensten van derden, inclusief sociale netwerken waarmee u ervoor kiest
                        verbinding te maken of te interacteren via onze diensten.
                      </li>
                      <li>
                        Dienstverleners. Derden die gegevens verzamelen of verstrekken
                        in verband met werk dat zij namens ons doen, bijvoorbeeld
                        bedrijven die de locatie van uw apparaat bepalen
                        op basis van het IP-adres.
                      </li>
                    </ul>

                    <h3 className="text-lg font-medium tracking-tight">
                      Gebruik van Gegevens
                    </h3>
                    <p className="text-muted-foreground text-balance mb-2">
                      We gebruiken elke categorie persoonsgegevens over u:
                    </p>
                    <ul className="text-muted-foreground space-y-1 mb-6">
                      <li>Om u onze Diensten te verlenen</li>
                      <li>Om onze Diensten te verbeteren en te ontwikkelen</li>
                      <li>Om met u te communiceren</li>
                      <li>Om klantenondersteuning te bieden</li>
                      <li>Om te voldoen aan wettelijke verplichtingen</li>
                      <li>Om fraude te voorkomen en te detecteren</li>
                    </ul>

                    <h3 className="text-lg font-medium tracking-tight">
                      Delen van Gegevens
                    </h3>
                    <p className="text-muted-foreground text-balance mb-2">
                      We delen informatie over u:
                    </p>
                    <ul className="text-muted-foreground space-y-1 mb-4">
                      <li>
                        Wanneer we uw toestemming hebben gevraagd en ontvangen om deze te delen.
                      </li>
                      <li>
                        Indien nodig, inclusief aan dienstverleners van derden,
                        om Diensten of producten te verwerken of aan u te verlenen, maar
                        alleen als die entiteiten ermee instemmen ten minste hetzelfde
                        niveau van privacybescherming te bieden waartoe wij ons verbinden
                        onder dit Privacybeleid.
                      </li>
                      <li>
                        Om te voldoen aan wetten of om te reageren op rechtmatige verzoeken en
                        juridische processen, met dien verstande dat we u op de hoogte stellen tenzij
                        we juridisch verhinderd zijn dit te doen. We zullen alleen
                        persoonsgegevens vrijgeven als we in goed vertrouwen geloven
                        dat dit juridisch vereist is.
                      </li>
                      <li>
                        Alleen als we redelijkerwijs geloven dat het noodzakelijk is om
                        schade aan de rechten, eigendom of veiligheid van u of
                        anderen te voorkomen.
                      </li>
                      <li>
                        In het geval van een bedrijfsherstructurering of wijziging in
                        onze organisatiestructuur of status aan een opvolger of
                        dochteronderneming.
                      </li>
                    </ul>

                    <p className="text-muted-foreground text-balance mb-4">
                      Houd er rekening mee dat sommige van onze Diensten
                      integraties, verwijzingen of links bevatten naar diensten die worden verstrekt door
                      derden wier privacybeleid verschilt van het onze. Als
                      u persoonsgegevens verstrekt aan een van die derden,
                      of ons toestaat persoonsgegevens met hen te delen, worden die gegevens beheerst door hun privacybeleid.
                    </p>

                    <p className="text-muted-foreground text-balance mb-6">
                      Ten slotte kunnen we niet-persoonlijke informatie delen in
                      overeenstemming met de toepasselijke wetgeving.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Gegevensbescherming
                    </h3>
                    <p className="text-muted-foreground text-balance mb-6">
                      We implementeren fysieke, bedrijfs- en technische beveiligingsmaatregelen
                      om uw persoonsgegevens te beschermen. In het
                      geval van een beveiligingslek zullen we u op de hoogte stellen zodat u
                      passende beschermende maatregelen kunt nemen. We bewaren uw
                      persoonsgegevens alleen zolang als nodig is voor het doel
                      waarvoor we deze hebben verzameld. Daarna vernietigen we deze, tenzij
                      dit door de wet is vereist.
                    </p>

                    <h3 className="text-lg font-medium tracking-tight">
                      Uw Rechten
                    </h3>
                    <p className="text-muted-foreground text-balance mb-4">
                      Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:
                    </p>
                    <ul className="text-muted-foreground space-y-1 mb-6">
                      <li>Het recht om toegang te krijgen tot uw persoonsgegevens</li>
                      <li>Het recht om rectificatie van onjuiste gegevens te verzoeken</li>
                      <li>Het recht om verwijdering van uw gegevens te verzoeken</li>
                      <li>Het recht om bezwaar te maken tegen verwerking</li>
                      <li>Het recht op gegevensoverdraagbaarheid</li>
                      <li>Het recht om toestemming in te trekken</li>
                    </ul>

                    <h3 className="text-lg font-medium tracking-tight">
                      Neem Contact Op
                    </h3>
                    <p className="text-muted-foreground text-balance">
                      U kunt contact met ons opnemen door een e-mail te sturen naar{' '}
                      <a
                        href="mailto:admin@thynktech.nl"
                        className="text-secondary hover:underline"
                      >
                        admin@thynktech.nl
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 text-center pb-10">
              <Link
                href="/"
                className="group inline-flex h-10 items-center justify-center gap-2 text-sm font-medium tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] bg-primary hover:bg-primary/90 transition-all duration-200 w-fit"
              >
                <span>Return to Home</span>
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

// Wrap the LegalContent component with Suspense to handle useSearchParams()
export default function LegalPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <LegalContent />
    </Suspense>
  );
}
