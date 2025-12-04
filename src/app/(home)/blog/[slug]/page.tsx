import { FooterSection } from '@/components/home/sections/footer-section';
import { BlogPostContent } from '@/components/home/blog-post-content';
import { notFound } from 'next/navigation';

// Blog posts data - In production, this would come from a CMS or MDX files
const blogPosts: Record<string, {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  content: string;
  author?: string;
  image?: string;
}> = {
  'toekomst-website-ontwikkeling-2025': {
    id: 1,
    title: 'De Toekomst van Website Ontwikkeling: Trends voor 2025',
    description: 'Ontdek de nieuwste trends in website ontwikkeling en hoe deze jouw online aanwezigheid kunnen verbeteren.',
    date: '15 januari 2025',
    readTime: '5 min lezen',
    category: 'Website Ontwikkeling',
    slug: 'toekomst-website-ontwikkeling-2025',
    content: `# De Toekomst van Website Ontwikkeling: Trends voor 2025

De wereld van website ontwikkeling evolueert snel. In 2025 zien we verschillende belangrijke trends die de manier waarop we websites bouwen en gebruiken zullen veranderen.

## 1. AI-Gedreven Development

Artificiële Intelligentie wordt steeds belangrijker in het ontwikkelingsproces. Van code generatie tot automatische optimalisatie, AI helpt developers om sneller en efficiënter te werken.

## 2. Progressive Web Apps (PWA)

PWA's combineren het beste van web en native apps. Ze bieden offline functionaliteit, push notifications en een app-achtige ervaring zonder app store downloads.

## 3. Headless CMS Architectuur

Meer bedrijven kiezen voor headless CMS oplossingen die flexibiliteit en schaalbaarheid bieden. Dit maakt het mogelijk om content op meerdere platforms te gebruiken.

## 4. Performance First

Website snelheid blijft cruciaal. Core Web Vitals worden steeds belangrijker voor SEO rankings en gebruikerservaring.

## 5. Enhanced Security

Met toenemende cyberdreigingen wordt security een prioriteit. HTTPS, content security policies en regelmatige security audits zijn essentieel.

## Conclusie

De toekomst van website ontwikkeling is spannend. Door deze trends te omarmen, kunnen bedrijven moderne, snelle en veilige websites bouwen die gebruikers verwachten.

Wil je meer weten over hoe TynkTech jou kan helpen met moderne website ontwikkeling? [Neem contact met ons op](/contact).`,
    author: 'TynkTech Team',
  },
  'waarom-cloudbeheer-essentieel': {
    id: 2,
    title: 'Waarom Cloudbeheer Essentieel is voor Moderne Bedrijven',
    description: 'Leer hoe cloudbeheer jouw bedrijf kan helpen met schaalbaarheid, beveiliging en kostenbesparing.',
    date: '10 januari 2025',
    readTime: '7 min lezen',
    category: 'Cloudbeheer',
    slug: 'waarom-cloudbeheer-essentieel',
    content: `# Waarom Cloudbeheer Essentieel is voor Moderne Bedrijven

Cloudbeheer is niet langer een optie, maar een noodzaak voor moderne bedrijven. Hier zijn de belangrijkste redenen waarom.

## Schaalbaarheid

Cloud infrastructuur kan eenvoudig worden opgeschaald wanneer je bedrijf groeit. Geen dure hardware investeringen meer nodig.

## Kostenbesparing

Pay-as-you-go modellen betekenen dat je alleen betaalt voor wat je gebruikt. Dit kan aanzienlijke kostenbesparingen opleveren.

## Beveiliging

Cloud providers investeren zwaar in security. Dit betekent vaak betere beveiliging dan wat je zelf kunt realiseren.

## Flexibiliteit

Werken vanaf elke locatie, op elk apparaat. Cloudbeheer maakt remote werken eenvoudig en efficiënt.

## Disaster Recovery

Automatische backups en disaster recovery oplossingen zorgen ervoor dat je data veilig is, zelfs bij onvoorziene gebeurtenissen.

Wil je meer weten over onze cloudbeheer diensten? [Bekijk onze cloudbeheer pagina](/diensten/cloudbeheer).`,
    author: 'TynkTech Team',
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full">
        <article className="w-full py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <BlogPostContent post={post} />
          </div>
        </article>
        <FooterSection />
      </div>
    </main>
  );
}

