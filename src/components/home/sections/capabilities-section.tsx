'use client';

import { SectionHeader } from '@/components/home/section-header';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  FileText,
  Image,
  Presentation,
  Globe,
  BarChart3,
  ShoppingCart,
  Users,
  Clock 
} from 'lucide-react';

const capabilities = [
  {
    title: 'Moderne Weboplossingen',
    description: 'Ontwikkeling van snelle, gebruiksvriendelijke en toekomstbestendige websites en webapplicaties met de nieuwste frameworks en design systems.',
    icon: <FileText className="size-6" />,
  },
  {
    title: 'Professioneel Webdesign',
    description: 'Webdesign waarbij gebruikservaring, uitstraling en conversie centraal staan. Wij creëren visueel aantrekkelijke en functionele digitale producten.',
    icon: <Image className="size-6" />,
  },
  {
    title: 'Cloudbeheer op Maat',
    description: 'Volledige ondersteuning bij cloud-oplossingen: van het opzetten tot beheren en optimaliseren van complete cloudomgevingen voor jouw organisatie.',
    icon: <Presentation className="size-6" />,
  },
  {
    title: 'Applicatiebeheer',
    description: 'Onderhoud en beheer van bestaande (dochter)applicaties. Wij zorgen ervoor dat jouw systemen optimaal blijven functioneren.',
    icon: <Globe className="size-6" />,
  },
  {
    title: 'Geavanceerde Cybersecurity',
    description: 'Uitgebreide cybersecurity-expertise: van volledige beveiligingsscans tot het opzetten van complete security-infrastructuren tegen moderne dreigingen.',
    icon: <BarChart3 className="size-6" />,
  },
  {
    title: 'Digitale Oplossingen op Maat',
    description: 'Met TynkTech kies je voor kwaliteit, innovatie en een betrouwbare technologiepartner die met je meedenkt bij elke stap.',
    icon: <ShoppingCart className="size-6" />,
  },
  {
    title: 'Toekomstbestendige Technologie',
    description: 'Wij gebruiken de nieuwste frameworks en design systems om producten te creëren die meegroeien met jouw bedrijf.',
    icon: <Users className="size-6" />,
  },
  {
    title: 'Betrouwbare Partner',
    description: 'TynkTech is jouw betrouwbare technologiepartner die met je meedenkt en kwaliteit en innovatie levert.',
    icon: <Clock className="size-6" />,
  },
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="capabilities"
      className="flex flex-col items-center justify-center w-full relative"
      ref={ref}
    >
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Wat kan TynkTech voor jou betekenen?
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Van moderne websites tot cloudbeheer en cybersecurity – wij bieden complete digitale oplossingen op maat.
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="relative p-6 border-border group hover:bg-accent/5 transition-colors duration-300 [&:not(:nth-child(4n))]:border-r [&:not(:nth-last-child(-n+4))]:border-b"
              >
                {/* Icon */}
                <div className="flex items-center justify-center size-12 bg-secondary/10 rounded-xl mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <div className="text-secondary">
                    {capability.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
