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
    title: 'fragancao.nl',
    description: 'Moderne website voor fragancao met focus op gebruiksvriendelijkheid en professionele uitstraling.',
    fullDescription: 'Een volledig op maat gemaakte website voor fragancao, ontwikkeld met de nieuwste webtechnologieën. De website combineert een moderne, professionele uitstraling met optimale gebruiksvriendelijkheid en performance. We hebben speciale aandacht besteed aan responsive design, zodat de website perfect werkt op alle apparaten.',
    category: 'Website',
    image: 'https://image.thum.io/get/width/1200/crop/600/noanimate/fullpage/https://fragancao.nl',
    imageAlt: 'fragancao.nl homepage met innovatieve scent experience',
    images: [
      'https://image.thum.io/get/width/1200/crop/600/noanimate/fullpage/https://fragancao.nl',
      'https://image.thum.io/get/width/1200/crop/600/noanimate/fullpage/https://fragancao.nl',
    ],
    link: 'https://fragancao.nl',
    tags: ['Webdesign', 'Next.js', 'Responsive'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    client: {
      name: 'fragancao',
      industry: 'Retail',
      location: 'Nederland',
    },
    timeline: {
      startDate: '2025-11-10',
      endDate: '2025-11-20',
      milestones: [
        {
          date: '2025-11-10',
          title: 'Project Kick-off',
          description: 'Eerste meeting met de klant om requirements en wensen te bespreken.',
        },
        {
          date: '2025-11-11',
          title: 'Design Fase',
          description: 'Wireframes en mockups ontwikkeld en goedgekeurd door de klant.',
        },
        {
          date: '2025-11-12',
          title: 'Development Start',
          description: 'Begin van de development fase met focus op core functionaliteiten.',
        },
        {
          date: '2025-11-18',
          title: 'Testing & Optimalisatie',
          description: 'Uitgebreide testing en performance optimalisatie.',
        },
        {
          date: '2025-11-20',
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
      quote: 'Mijn ervaring met Tynk Tech is zeer positief. De developers hebben mijn idee goed weten te vertalen in een website vorm. Na twee keer feedback was de website zo goed als af . de developers werken snel en adequaat hebben verstand van zaken. al met al is mijn ervaring zeer positief en zou ik ze zeker aanraden aan een ieder',
      author: 'Jake Colin',
      role: 'Eigenaar',
      company: 'fragancao',
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

