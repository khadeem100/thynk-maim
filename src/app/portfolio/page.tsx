'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Filter, ExternalLink, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { portfolioItems, categories, type PortfolioItem } from '@/lib/portfolio';
import { FlickeringGrid } from '@/components/home/ui/flickering-grid';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Alles');
  const [searchQuery, setSearchQuery] = useState('');
  const tablet = useMediaQuery('(max-width: 1024px)');

  const filteredItems = useMemo(() => {
    let items = selectedCategory === 'Alles' 
      ? portfolioItems 
      : portfolioItems.filter((item) => item.category === selectedCategory);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          item.technologies.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    return items;
  }, [selectedCategory, searchQuery]);

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

          <div className="max-w-7xl w-full mx-auto">
            {/* Header */}
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

              <div className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter mb-4">
                  Ons <span className="text-secondary">Portfolio</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Ontdek onze projecten en zie hoe we bedrijven helpen groeien met moderne technologie
                </p>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Zoek projecten..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Filter className="w-5 h-5 text-muted-foreground" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      'px-6 py-2 rounded-full text-sm font-medium transition-all',
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-background border border-border text-foreground hover:bg-accent/50'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Portfolio Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <PortfolioCard key={item.id} item={item} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  Geen projecten gevonden. Probeer een andere zoekterm of categorie.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <Link href={`/portfolio/${item.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative h-full rounded-2xl border border-border bg-background overflow-hidden hover:border-secondary/40 transition-all duration-300 hover:shadow-xl"
      >
        {/* Image */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm border border-border text-foreground">
              {item.category}
            </span>
          </div>

          {/* Results Badge */}
          {item.results && item.results.length > 0 && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-secondary/90 backdrop-blur-sm text-secondary-foreground">
                <TrendingUp className="w-3 h-3" />
                <span>Resultaten</span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
              >
                {tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground">
                +{item.tags.length - 3}
              </span>
            )}
          </div>

          {/* Client Info */}
          {item.client && (
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{item.client.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(item.timeline.endDate).getFullYear()}</span>
              </div>
            </div>
          )}

          {/* View Link */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all pt-2">
            <span>Bekijk project</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

