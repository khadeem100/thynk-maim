import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/home';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (siteConfig.url || process.env.NEXT_PUBLIC_APP_URL || 'https://tynktech.nl').replace(/\/$/, '');
  
  // Get current date for lastmod
  const currentDate = new Date().toISOString();
  
  // Priority levels (0.0 to 1.0)
  // Homepage and main pages: 1.0
  // Important service pages: 0.9
  // Secondary pages: 0.8
  // Documentation: 0.7
  // Other pages: 0.6

  return [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Contact page - High priority
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Portfolio pages
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // DIY Website Scan
    {
      url: `${baseUrl}/diy`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Enterprise page - High priority
    {
      url: `${baseUrl}/enterprise`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Documentation pages
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/introduction`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/self-hosting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/architecture`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/contributing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/license`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // Legal pages
    {
      url: `${baseUrl}/legal`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Careers
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Changelog
    {
      url: `${baseUrl}/changelog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Service pages
    {
      url: `${baseUrl}/diensten/website-ontwikkeling`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/webapplicatie-ontwikkeling`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/webdesign`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/cloudbeheer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/cybersecurity`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/onderhoud-support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}

