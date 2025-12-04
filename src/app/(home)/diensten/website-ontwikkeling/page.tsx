'use client';

import { FooterSection } from '@/components/home/sections/footer-section';
import { SectionHeader } from '@/components/home/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOBreadcrumb } from '@/components/home/seo-breadcrumb';
import { RedDotsPattern } from '@/components/home/ui/red-dots-pattern';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Zap, 
  Shield, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Layers,
  Palette,
  Database,
  Server,
  FileCode,
  Rocket
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function WebsiteOntwikkelingPage() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'Websites die perfect werken op alle apparaten - desktop, tablet en mobiel. We zorgen ervoor dat jouw website er op elk schermformaat perfect uitziet.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Snelle Laadtijden',
      description: 'Geoptimaliseerde performance met snelle laadtijden. We gebruiken moderne technieken zoals code splitting, lazy loading en image optimization.',
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'SEO Geoptimaliseerd',
      description: 'Vanaf het begin gebouwd met SEO best practices. Jouw website wordt beter gevonden in Google en andere zoekmachines.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Beveiligd & Veilig',
      description: 'SSL certificaten, regelmatige security updates en best practices voor webbeveiliging. Jouw data en die van jouw bezoekers is veilig.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Moderne Technologie',
      description: 'Gebouwd met de nieuwste frameworks zoals React, Next.js en Vue.js. Schone, onderhoudbare code die meegroeit met jouw bedrijf.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'CMS Integratie',
      description: 'Integratie met headless CMS systemen zoals Strapi, Sanity of WordPress. Jij behoudt volledige controle over jouw content.',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Intake & Analyse',
      description: 'We bespreken jouw wensen, doelen en doelgroep. We analyseren jouw concurrentie en maken een strategisch plan.',
      duration: '1-2 weken',
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'We maken wireframes en designs die perfect aansluiten bij jouw merk. Je krijgt meerdere concepten om uit te kiezen.',
      duration: '2-3 weken',
    },
    {
      step: 3,
      title: 'Development',
      description: 'Onze developers bouwen jouw website met moderne technologieën. Regelmatige updates en feedback momenten.',
      duration: '3-4 weken',
    },
    {
      step: 4,
      title: 'Testing & Optimalisatie',
      description: 'Uitgebreide tests op verschillende apparaten en browsers. Performance optimalisatie en SEO fine-tuning.',
      duration: '1 week',
    },
    {
      step: 5,
      title: 'Launch & Training',
      description: 'We zetten jouw website live en geven training over het beheer. Je krijgt toegang tot alle documentatie en support.',
      duration: '1 week',
    },
  ];

  const technologies = [
    { name: 'React', description: 'Moderne JavaScript library voor interactieve interfaces' },
    { name: 'Next.js', description: 'React framework met server-side rendering en optimalisaties' },
    { name: 'Vue.js', description: 'Progressieve JavaScript framework voor gebruikersinterfaces' },
    { name: 'TypeScript', description: 'Type-safe JavaScript voor betrouwbaardere code' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework voor snelle styling' },
    { name: 'Strapi', description: 'Headless CMS voor flexibele content management' },
    { name: 'Sanity', description: 'Real-time content platform met live preview' },
    { name: 'WordPress', description: 'Bewezen CMS platform met uitgebreide plugin ecosystem' },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full">
        <section className="w-full py-8 px-6 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <SEOBreadcrumb 
              items={[
                { name: 'Home', href: '/' },
                { name: 'Diensten', href: '/#pricing' },
                { name: 'Website Ontwikkeling' }
              ]} 
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-16 px-6 bg-gradient-to-b from-background to-muted/20 relative">
          <RedDotsPattern dotSize={3} gap={32} opacity={0.15} />
          <div className="max-w-6xl mx-auto relative z-10">
            <SectionHeader>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-center text-balance pb-2">
                Website Ontwikkeling
              </h1>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl mx-auto text-lg">
                Moderne, snelle en gebruiksvriendelijke websites die jouw bedrijf online laat groeien. 
                Van concept tot launch - wij zorgen voor een website die perfect past bij jouw doelen.
              </p>
            </SectionHeader>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Vrijblijvend Gesprek
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">
                  Bekijk Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Wat maakt onze websites bijzonder?
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                We bouwen websites die niet alleen mooi zijn, maar ook resultaat opleveren.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Ons Ontwikkelingsproces
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Van eerste gesprek tot live website - een gestructureerde aanpak die resultaat oplevert.
              </p>
            </SectionHeader>

            <div className="mt-12 space-y-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Moderne Technologieën
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                We werken met de nieuwste en beste tools voor optimale resultaten.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full text-center hover:border-destructive transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{tech.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {tech.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Transparante Prijzen
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Geen verborgen kosten, geen verrassingen. Duidelijke prijzen voor duidelijke resultaten.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€2.400</span>
                    <span className="text-muted-foreground"> - €4.800</span>
                  </div>
                  <CardDescription className="mt-2">Perfect voor kleine bedrijven en startups</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>5-10 pagina's</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>SEO basis optimalisatie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Contactformulier</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>4-6 weken ontwikkeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Professional</CardTitle>
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">Populair</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€4.800</span>
                    <span className="text-muted-foreground"> - €9.600</span>
                  </div>
                  <CardDescription className="mt-2">Ideaal voor groeiende bedrijven</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>10-20 pagina's</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Custom design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>CMS integratie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Geavanceerde SEO</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>E-commerce basis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>6-8 weken ontwikkeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€9.600+</span>
                  </div>
                  <CardDescription className="mt-2">Voor grote organisaties met complexe behoeften</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Onbeperkt aantal pagina's</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Volledig custom oplossing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Multi-language support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>API integraties</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dedicated project manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>8-12+ weken ontwikkeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                * Prijzen zijn indicatief. Exacte prijs hangt af van specifieke wensen en complexiteit.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Vraag een Offerte Aan
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Klaar om te starten?</CardTitle>
                <CardDescription className="text-lg">
                  Laten we samen jouw perfecte website bouwen. Neem contact op voor een vrijblijvend gesprek.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Neem Contact Op
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/portfolio">
                      Bekijk Onze Projecten
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <FooterSection />
      </div>
    </main>
  );
}

