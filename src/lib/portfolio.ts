export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  imageAlt: string;
  images?: string[];
  link?: string;
  tags: string[];
  technologies: string[];
  client?: {
    name: string;
    industry: string;
    location: string;
  };
  timeline: {
    startDate: string;
    endDate: string;
    milestones: {
      date: string;
      title: string;
      description: string;
    }[];
  };
  results?: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  challenges?: string[];
  solutions?: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Frangancao.nl',
    description: 'Moderne website voor Frangancao met focus op gebruiksvriendelijkheid en professionele uitstraling.',
    fullDescription: 'Een volledig op maat gemaakte website voor Frangancao, ontwikkeld met de nieuwste webtechnologieën. De website combineert een moderne, professionele uitstraling met optimale gebruiksvriendelijkheid en performance. We hebben speciale aandacht besteed aan responsive design, zodat de website perfect werkt op alle apparaten.',
    category: 'Website',
    image: 'https://image.thum.io/get/width/1200/crop/600/noanimate/fullpage/https://frangancao.nl',
    imageAlt: 'Frangancao.nl website screenshot',
    images: [
      'https://image.thum.io/get/width/1200/crop/600/noanimate/fullpage/https://frangancao.nl',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    ],
    link: 'https://frangancao.nl',
    tags: ['Webdesign', 'Next.js', 'Responsive'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    client: {
      name: 'Frangancao',
      industry: 'Retail',
      location: 'Nederland',
    },
    timeline: {
      startDate: '2024-01-15',
      endDate: '2024-03-20',
      milestones: [
        {
          date: '2024-01-15',
          title: 'Project Kick-off',
          description: 'Eerste meeting met de klant om requirements en wensen te bespreken.',
        },
        {
          date: '2024-02-01',
          title: 'Design Fase',
          description: 'Wireframes en mockups ontwikkeld en goedgekeurd door de klant.',
        },
        {
          date: '2024-02-20',
          title: 'Development Start',
          description: 'Begin van de development fase met focus op core functionaliteiten.',
        },
        {
          date: '2024-03-10',
          title: 'Testing & Optimalisatie',
          description: 'Uitgebreide testing en performance optimalisatie.',
        },
        {
          date: '2024-03-20',
          title: 'Launch',
          description: 'Website succesvol gelanceerd en live gezet.',
        },
      ],
    },
    results: [
      {
        metric: 'Page Load Time',
        value: '0.8s',
        description: 'Snelle laadtijd voor optimale gebruikerservaring',
      },
      {
        metric: 'Mobile Score',
        value: '98/100',
        description: 'Uitstekende mobile performance score',
      },
      {
        metric: 'Conversie',
        value: '+45%',
        description: 'Toename in conversie na lancering',
      },
    ],
    testimonial: {
      quote: 'TynkTech heeft een prachtige website voor ons ontwikkeld die perfect aansluit bij onze visie. Het team was professioneel, communicatief en heeft ons door het hele proces begeleid.',
      author: 'Jan de Vries',
      role: 'Eigenaar',
      company: 'Frangancao',
    },
    challenges: [
      'Complexe productcatalogus met veel variaties',
      'Vereiste voor snelle laadtijden',
      'Integratie met bestaande systemen',
    ],
    solutions: [
      'Geoptimaliseerde database structuur voor snelle queries',
      'Implementatie van Next.js voor server-side rendering',
      'API integraties met bestaande backend systemen',
    ],
  },
  {
    id: '2',
    title: 'Moderne E-commerce Platform',
    description: 'Volledig op maat gemaakte webshop met geavanceerde productcatalogus en betalingsintegratie.',
    fullDescription: 'Een geavanceerd e-commerce platform ontwikkeld met focus op schaalbaarheid en gebruikerservaring. Het platform ondersteunt duizenden producten, meerdere betalingsmethoden en geavanceerde zoek- en filterfunctionaliteiten.',
    category: 'Webapplicatie',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'E-commerce platform screenshot',
    images: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    ],
    tags: ['React', 'Next.js', 'E-commerce'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    client: {
      name: 'Retail Company',
      industry: 'E-commerce',
      location: 'Nederland',
    },
    timeline: {
      startDate: '2023-11-01',
      endDate: '2024-02-15',
      milestones: [
        {
          date: '2023-11-01',
          title: 'Project Start',
          description: 'Kick-off meeting en requirements analyse.',
        },
        {
          date: '2023-11-20',
          title: 'Architectuur Design',
          description: 'System architectuur en database design voltooid.',
        },
        {
          date: '2023-12-15',
          title: 'Core Development',
          description: 'Ontwikkeling van core e-commerce functionaliteiten.',
        },
        {
          date: '2024-01-20',
          title: 'Payment Integration',
          description: 'Integratie van betalingssystemen en testing.',
        },
        {
          date: '2024-02-15',
          title: 'Launch',
          description: 'Platform succesvol gelanceerd.',
        },
      ],
    },
    results: [
      {
        metric: 'Orders per Dag',
        value: '500+',
        description: 'Gemiddeld aantal orders per dag',
      },
      {
        metric: 'Checkout Conversie',
        value: '3.2%',
        description: 'Hoge conversie rate bij checkout',
      },
      {
        metric: 'Uptime',
        value: '99.9%',
        description: 'Uitstekende beschikbaarheid',
      },
    ],
    testimonial: {
      quote: 'Het nieuwe e-commerce platform heeft onze online verkoop aanzienlijk verhoogd. De gebruikerservaring is uitstekend en het systeem is zeer betrouwbaar.',
      author: 'Maria van der Berg',
      role: 'CEO',
      company: 'Retail Company',
    },
  },
  {
    id: '3',
    title: 'Corporate Website Redesign',
    description: 'Complete redesign van een corporate website met focus op gebruikservaring en conversie.',
    fullDescription: 'Een volledige redesign van een corporate website met moderne design principes en focus op conversie optimalisatie. De nieuwe website biedt een verbeterde gebruikerservaring en betere SEO prestaties.',
    category: 'Website',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Corporate website screenshot',
    images: [
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    ],
    tags: ['Webdesign', 'SEO', 'Performance'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Contentful'],
    client: {
      name: 'Corporate Client',
      industry: 'Consulting',
      location: 'Nederland',
    },
    timeline: {
      startDate: '2024-02-01',
      endDate: '2024-04-10',
      milestones: [
        {
          date: '2024-02-01',
          title: 'Discovery Phase',
          description: 'Analyse van huidige website en identificatie van verbeterpunten.',
        },
        {
          date: '2024-02-20',
          title: 'Design Concept',
          description: 'Nieuwe design concepten ontwikkeld en gepresenteerd.',
        },
        {
          date: '2024-03-15',
          title: 'Development',
          description: 'Ontwikkeling van nieuwe website met moderne technologieën.',
        },
        {
          date: '2024-04-01',
          title: 'Content Migration',
          description: 'Migratie van bestaande content naar nieuwe platform.',
        },
        {
          date: '2024-04-10',
          title: 'Launch',
          description: 'Nieuwe website succesvol gelanceerd.',
        },
      ],
    },
    results: [
      {
        metric: 'Bounce Rate',
        value: '-35%',
        description: 'Significante daling in bounce rate',
      },
      {
        metric: 'Page Views',
        value: '+120%',
        description: 'Toename in paginaweergaven',
      },
      {
        metric: 'Lead Generatie',
        value: '+80%',
        description: 'Meer leads gegenereerd via website',
      },
    ],
  },
  {
    id: '4',
    title: 'Cloud Infrastructuur Setup',
    description: 'Migratie naar cloud met volledige automatisering en monitoring voor optimale performance.',
    fullDescription: 'Complete migratie van on-premise infrastructuur naar cloud met focus op schaalbaarheid, beveiliging en kostenoptimalisatie. Implementatie van CI/CD pipelines en monitoring systemen.',
    category: 'Cloud',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Cloud infrastructure dashboard',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    ],
    tags: ['AWS', 'DevOps', 'Kubernetes'],
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'Prometheus'],
    client: {
      name: 'Tech Company',
      industry: 'Technology',
      location: 'Nederland',
    },
    timeline: {
      startDate: '2023-09-01',
      endDate: '2023-12-20',
      milestones: [
        {
          date: '2023-09-01',
          title: 'Assessment',
          description: 'Analyse van huidige infrastructuur en cloud strategie.',
        },
        {
          date: '2023-09-25',
          title: 'Architectuur Design',
          description: 'Cloud architectuur ontworpen en goedgekeurd.',
        },
        {
          date: '2023-10-20',
          title: 'Infrastructure Setup',
          description: 'Cloud infrastructuur opgezet met Infrastructure as Code.',
        },
        {
          date: '2023-11-15',
          title: 'Migration',
          description: 'Migratie van applicaties naar cloud omgeving.',
        },
        {
          date: '2023-12-20',
          title: 'Go-Live',
          description: 'Cloud infrastructuur succesvol in productie.',
        },
      ],
    },
    results: [
      {
        metric: 'Kostenbesparing',
        value: '-40%',
        description: 'Reductie in infrastructuur kosten',
      },
      {
        metric: 'Deployment Time',
        value: '-70%',
        description: 'Snellere deployment tijden',
      },
      {
        metric: 'Uptime',
        value: '99.95%',
        description: 'Verbeterde beschikbaarheid',
      },
    ],
    testimonial: {
      quote: 'De migratie naar de cloud heeft onze operationele efficiëntie aanzienlijk verbeterd. Het team van TynkTech heeft een uitstekende job gedaan.',
      author: 'Peter Jansen',
      role: 'CTO',
      company: 'Tech Company',
    },
  },
  {
    id: '5',
    title: 'Security Audit & Hardening',
    description: 'Uitgebreide security audit en implementatie van best practices voor maximale beveiliging.',
    fullDescription: 'Complete security audit van bestaande systemen gevolgd door implementatie van security best practices. Inclusief penetration testing, vulnerability assessments en security hardening.',
    category: 'Cybersecurity',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Security dashboard',
    images: [
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    ],
    tags: ['Penetration Testing', 'Compliance', 'GDPR'],
    technologies: ['OWASP', 'Burp Suite', 'Nessus', 'WAF', 'SIEM', 'MFA'],
    client: {
      name: 'Financial Services',
      industry: 'Finance',
      location: 'Nederland',
    },
    timeline: {
      startDate: '2024-01-10',
      endDate: '2024-03-30',
      milestones: [
        {
          date: '2024-01-10',
          title: 'Security Assessment',
          description: 'Uitgebreide security assessment van alle systemen.',
        },
        {
          date: '2024-01-30',
          title: 'Penetration Testing',
          description: 'Penetration testing uitgevoerd en rapportage.',
        },
        {
          date: '2024-02-20',
          title: 'Remediation Plan',
          description: 'Security verbeteringen geïdentificeerd en plan opgesteld.',
        },
        {
          date: '2024-03-10',
          title: 'Implementation',
          description: 'Implementatie van security maatregelen.',
        },
        {
          date: '2024-03-30',
          title: 'Final Audit',
          description: 'Finale security audit en certificering.',
        },
      ],
    },
    results: [
      {
        metric: 'Vulnerabilities',
        value: '-95%',
        description: 'Reductie in geïdentificeerde kwetsbaarheden',
      },
      {
        metric: 'Security Score',
        value: 'A+',
        description: 'Uitstekende security rating',
      },
      {
        metric: 'Compliance',
        value: '100%',
        description: 'Volledige compliance met GDPR',
      },
    ],
    testimonial: {
      quote: 'De security audit heeft ons geholpen om kritieke kwetsbaarheden te identificeren en te verhelpen. We voelen ons nu veel veiliger.',
      author: 'Lisa de Wit',
      role: 'Security Officer',
      company: 'Financial Services',
    },
  },
];

export const categories = ['Alles', 'Website', 'Webapplicatie', 'Cloud', 'Cybersecurity'];

export function getPortfolioItem(id: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.id === id);
}

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  if (category === 'Alles') {
    return portfolioItems;
  }
  return portfolioItems.filter((item) => item.category === category);
}

