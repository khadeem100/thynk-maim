'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Contact, 
  Briefcase, 
  Building2, 
  Search, 
  HelpCircle, 
  BriefcaseIcon,
  FileText,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

const quickLinks = [
  {
    title: 'Contact',
    description: 'Neem direct contact met ons op voor vragen of een vrijblijvend gesprek',
    href: '/contact',
    icon: Contact,
    color: 'text-primary',
  },
  {
    title: 'Portfolio',
    description: 'Bekijk onze recente projecten en klantcases',
    href: '/portfolio',
    icon: Briefcase,
    color: 'text-secondary',
  },
  {
    title: 'Enterprise Oplossingen',
    description: 'Volledige enterprise digitale oplossingen op maat',
    href: '/enterprise',
    icon: Building2,
    color: 'text-primary',
  },
  {
    title: 'DIY Website Scan',
    description: 'Scan je website gratis en ontvang direct inzicht in verbeterpunten',
    href: '/diy',
    icon: Search,
    color: 'text-secondary',
  },
  {
    title: 'Vacatures',
    description: 'Werken bij TynkTech? Bekijk onze openstaande vacatures',
    href: '/careers',
    icon: BriefcaseIcon,
    color: 'text-primary',
  },
  {
    title: 'Klantenservice',
    description: '24/7 beschikbaar voor al je vragen en ondersteuning',
    href: '/contact',
    icon: HelpCircle,
    color: 'text-secondary',
  },
];

export function QuickLinksSection() {
  return (
    <section className="w-full py-12 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            Direct naar
          </h2>
          <p className="text-muted-foreground">
            Snelle toegang tot onze belangrijkste pagina's
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.href}>
                  <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors ${link.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

