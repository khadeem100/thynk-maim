'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContactModal } from '@/components/home/contact-modal';
import Link from 'next/link';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  link?: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Moderne E-commerce Platform',
    description: 'Volledig op maat gemaakte webshop met geavanceerde productcatalogus en betalingsintegratie.',
    category: 'Webapplicatie',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'E-commerce platform screenshot',
    tags: ['React', 'Next.js', 'E-commerce'],
  },
  {
    id: '2',
    title: 'Corporate Website Redesign',
    description: 'Complete redesign van een corporate website met focus op gebruikservaring en conversie.',
    category: 'Website',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Corporate website screenshot',
    tags: ['Webdesign', 'SEO', 'Performance'],
  },
  {
    id: '3',
    title: 'Cloud Infrastructuur Setup',
    description: 'Migratie naar cloud met volledige automatisering en monitoring voor optimale performance.',
    category: 'Cloud',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Cloud infrastructure dashboard',
    tags: ['AWS', 'DevOps', 'Kubernetes'],
  },
  {
    id: '4',
    title: 'Security Audit & Hardening',
    description: 'Uitgebreide security audit en implementatie van best practices voor maximale beveiliging.',
    category: 'Cybersecurity',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Security dashboard',
    tags: ['Penetration Testing', 'Compliance', 'GDPR'],
  },
];

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative">
        {/* Main Carousel */}
        <div
          ref={carouselRef}
          className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-lg"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="min-w-full flex-shrink-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-muted/30 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      priority={index === currentIndex}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm border border-border text-foreground">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12 bg-background">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView && index === currentIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>

                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      {item.link && (
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                        >
                          Bekijk project
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-all shadow-lg hover:scale-110"
            aria-label="Vorige project"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-all shadow-lg hover:scale-110"
            aria-label="Volgende project"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
              aria-label={`Ga naar project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-accent/50 transition-all font-medium text-sm group"
        >
          Bekijk volledig portfolio
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <ContactModal calLink="tynktech.nl/consultation">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium text-sm shadow-md">
            Start jouw project
          </button>
        </ContactModal>
      </motion.div>
    </div>
  );
}

