'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Script from 'next/script';
import { siteConfig } from '@/lib/home';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface SEOBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function SEOBreadcrumb({ items, className = '' }: SEOBreadcrumbProps) {
  const baseUrl = (siteConfig.url || process.env.NEXT_PUBLIC_APP_URL || 'https://tynktech.nl').replace(/\/$/, '');
  
  // Build breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}>
        <ol className="flex items-center space-x-1" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              {index === 0 ? (
                <Link
                  href={item.href || '/'}
                  itemProp="item"
                  className="flex items-center hover:text-foreground transition-colors"
                >
                  <Home className="h-4 w-4 mr-1" />
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : item.href ? (
                <Link
                  href={item.href}
                  itemProp="item"
                  className="hover:text-foreground transition-colors"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <span itemProp="name" className="text-foreground font-medium">
                  {item.name}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />
              {index < items.length - 1 && (
                <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

