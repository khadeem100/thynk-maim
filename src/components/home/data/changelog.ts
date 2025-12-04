import { ChangelogData } from "../sections/changelog";

export const changeLogData: ChangelogData[] = [
    {
      version: "v2.0.0",
      date: "15 januari 2025",
      title: "Nieuwe Website & Uitgebreide Diensten",
      description:
        "TynkTech lanceert een volledig vernieuwde website met verbeterde diensten voor website ontwikkeling, webapplicaties, cloudbeheer en cybersecurity. Ontdek onze nieuwe features en verbeteringen.",
      items: [
        "Volledig nieuwe website met moderne design en verbeterde gebruikerservaring",
        "DIY Website Scan tool - Analyseer je website en ontvang direct verbeterpunten",
        "Uitgebreide portfolio sectie met showcase van onze projecten",
        "Verbeterde SEO optimalisatie voor betere vindbaarheid in Google",
        "Nieuwe blog sectie met tips en trends over web development",
        "Enterprise oplossingen pagina voor grote bedrijven",
        "Verbeterde contactformulieren en klantenservice"
      ],
      image: "/banner.png",
      button: {
        url: "/contact",
        text: "Neem contact op",
      },
    },
    {
      version: "v1.5.0",
      date: "10 december 2024",
      title: "Cloudbeheer & Cybersecurity Diensten Uitgebreid",
      description:
        "TynkTech breidt haar diensten uit met geavanceerde cloudbeheer en cybersecurity oplossingen voor bedrijven die hun digitale infrastructuur willen beveiligen en optimaliseren.",
      items: [
        "Nieuwe cloudbeheer diensten voor AWS, Azure en Google Cloud",
        "Cybersecurity audits en penetration testing",
        "GDPR compliance checks en implementatie",
        "24/7 monitoring en support voor cloud infrastructuur",
        "Security awareness training voor teams"
      ],
      button: {
        url: "/contact",
        text: "Meer informatie",
      },
    },
    {
      version: "v1.0.0",
      date: "1 september 2024",
      title: "TynkTech Officieel Gelanceerd",
      description:
        "TynkTech wordt opgericht als innovatief technologiebedrijf gespecialiseerd in moderne websites, webapplicaties en digitale oplossingen op maat voor bedrijven in Amsterdam en heel Nederland.",
      items: [
        "Website ontwikkeling diensten gelanceerd",
        "Webapplicatie ontwikkeling met moderne frameworks",
        "Webdesign en UX/UI services",
        "Onderhoud en support pakketten",
        "Eerste klantenprojecten succesvol afgerond"
      ],
    },
  ];