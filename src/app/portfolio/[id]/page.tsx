'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, MapPin, Building2, CheckCircle2, Quote, TrendingUp, Clock } from 'lucide-react';
import { getPortfolioItem, type PortfolioItem } from '@/lib/portfolio';
import { FlickeringGrid } from '@/components/home/ui/flickering-grid';
import { useMediaQuery } from '@/hooks/use-media-query';
import { ContactModal } from '@/components/home/contact-modal';

export default function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const item = getPortfolioItem(id);
  const tablet = useMediaQuery('(max-width: 1024px)');

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Project niet gevonden</h1>
          <p className="text-muted-foreground mb-8">
            Het project dat je zoekt bestaat niet of is verwijderd.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <section className="w-full relative overflow-hidden pb-20">
        <div className="relative flex flex-col items-center w-full px-6 pt-10">
          {/* Background decoration */}
          <div className="absolute left-0 top-0 h-[600px] w-1/3 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background z-10" />
            <FlickeringGrid
              className="h-full w-full"
              squareSize={tablet ? 2 : 2.5}
              gridGap={tablet ? 2 : 2.5}
              color="var(--secondary)"
              maxOpacity={0.3}
              flickerChance={0.03}
            />
          </div>

          <div className="max-w-6xl w-full mx-auto">
            {/* Header */}
            <div className="flex items-center justify-center mb-10 relative">
              <Link
                href="/portfolio"
                className="absolute left-0 group border border-border/50 bg-background hover:bg-accent/20 hover:border-secondary/40 rounded-full text-sm h-8 px-3 flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                <ArrowLeft size={14} className="text-muted-foreground" />
                <span className="font-medium text-muted-foreground text-xs tracking-wide">
                  Terug naar Portfolio
                </span>
              </Link>
            </div>

            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20 mb-4">
                  {item.category}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                  {item.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  {item.description}
                </p>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                {item.client && (
                  <>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{item.client.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.client.location}</span>
                    </div>
                  </>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {formatDate(item.timeline.startDate)} - {formatDate(item.timeline.endDate)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-md"
                  >
                    <span>Bekijk Live Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <ContactModal calLink="tynktech.nl/consultation">
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-accent/50 transition-all font-medium">
                    Start Jouw Project
                  </button>
                </ContactModal>
              </div>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-border mb-12"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>

            {/* Full Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Over het Project</h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.fullDescription}
              </p>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-xl border border-border bg-background"
              >
                <h3 className="text-xl font-semibold mb-4">Technologieën</h3>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              {item.results && item.results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 rounded-xl border border-border bg-background"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    Resultaten
                  </h3>
                  <div className="space-y-4">
                    {item.results.map((result, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-medium text-foreground">{result.metric}</span>
                          <span className="text-lg font-semibold text-secondary">{result.value}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Challenges & Solutions */}
            {(item.challenges || item.solutions) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {item.challenges && item.challenges.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="p-6 rounded-xl border border-border bg-background"
                  >
                    <h3 className="text-xl font-semibold mb-4">Uitdagingen</h3>
                    <ul className="space-y-3">
                      {item.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-primary">{index + 1}</span>
                          </div>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {item.solutions && item.solutions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="p-6 rounded-xl border border-border bg-background"
                  >
                    <h3 className="text-xl font-semibold mb-4">Oplossingen</h3>
                    <ul className="space-y-3">
                      {item.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            )}

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12 p-6 rounded-xl border border-border bg-background"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Project Timeline
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                
                <div className="space-y-8">
                  {item.timeline.milestones.map((milestone, index) => (
                    <div key={index} className="relative pl-12">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary border-4 border-background flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-secondary">
                            {formatDate(milestone.date)}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold">{milestone.title}</h4>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Additional Images */}
            {item.images && item.images.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-12"
              >
                <h3 className="text-xl font-semibold mb-6">Meer Afbeeldingen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full h-64 rounded-xl overflow-hidden border border-border"
                    >
                      <Image
                        src={image}
                        alt={`${item.title} - Image ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Testimonial */}
            {item.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="p-8 rounded-xl border border-border bg-accent/20 relative overflow-hidden"
              >
                <Quote className="absolute top-4 right-4 w-16 h-16 text-secondary/10" />
                <div className="relative z-10">
                  <p className="text-lg text-foreground mb-6 italic">
                    "{item.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-secondary">
                        {item.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{item.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.testimonial.role} bij {item.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-12 text-center p-8 rounded-xl border border-border bg-background"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Klaar om te starten met jouw project?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Neem contact met ons op en laat zien hoe we jouw bedrijf kunnen helpen groeien.
              </p>
              <ContactModal calLink="tynktech.nl/consultation">
                <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-md">
                  Neem Contact Op
                </button>
              </ContactModal>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

