'use client';

import { FooterSection } from '@/components/home/sections/footer-section';
import { SectionHeader } from '@/components/home/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Metadata } from 'next';
import { BlogPostSkeleton } from '@/components/home/skeleton-loaders';
import { useState, useEffect } from 'react';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'De Toekomst van Website Ontwikkeling: Trends voor 2025',
    description: 'Ontdek de nieuwste trends in website ontwikkeling en hoe deze jouw online aanwezigheid kunnen verbeteren.',
    date: '15 januari 2025',
    readTime: '5 min lezen',
    category: 'Website Ontwikkeling',
    slug: 'toekomst-website-ontwikkeling-2025',
  },
  {
    id: 2,
    title: 'Waarom Cloudbeheer Essentieel is voor Moderne Bedrijven',
    description: 'Leer hoe cloudbeheer jouw bedrijf kan helpen met schaalbaarheid, beveiliging en kostenbesparing.',
    date: '10 januari 2025',
    readTime: '7 min lezen',
    category: 'Cloudbeheer',
    slug: 'waarom-cloudbeheer-essentieel',
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices: Bescherm Jouw Bedrijf',
    description: 'Essentiële cybersecurity tips en best practices om jouw bedrijfsdata te beschermen tegen cyberaanvallen.',
    date: '5 januari 2025',
    readTime: '6 min lezen',
    category: 'Cybersecurity',
    slug: 'cybersecurity-best-practices',
  },
  {
    id: 4,
    title: 'Webapplicaties vs Websites: Wat is het Verschil?',
    description: 'Een uitgebreide gids over het verschil tussen webapplicaties en websites, en wanneer je welke nodig hebt.',
    date: '28 december 2024',
    readTime: '8 min lezen',
    category: 'Webapplicaties',
    slug: 'webapplicaties-vs-websites',
  },
  {
    id: 5,
    title: 'SEO Optimalisatie: Verbeter Jouw Google Rankings',
    description: 'Praktische tips en strategieën om jouw website beter te laten ranken in Google zoekresultaten.',
    date: '20 december 2024',
    readTime: '10 min lezen',
    category: 'SEO',
    slug: 'seo-optimalisatie-tips',
  },
  {
    id: 6,
    title: 'Moderne Webdesign Trends voor 2025',
    description: 'Ontdek de nieuwste webdesign trends die jouw website modern en gebruiksvriendelijk maken.',
    date: '15 december 2024',
    readTime: '6 min lezen',
    category: 'Webdesign',
    slug: 'moderne-webdesign-trends-2025',
  },
];

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full">
        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-center text-balance pb-2">
                Blog & Nieuws
              </h1>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Blijf op de hoogte van de nieuwste trends, tips en inzichten op het gebied van website ontwikkeling, cloudbeheer en cybersecurity.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {isLoading ? (
                <>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <BlogPostSkeleton key={i} />
                  ))}
                </>
              ) : (
                blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full group-hover:bg-primary/10" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Lees meer
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
                ))
              )}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Meer artikelen komen binnenkort beschikbaar. Blijf op de hoogte!
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  Neem contact op voor meer informatie
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <FooterSection />
      </div>
    </main>
  );
}

