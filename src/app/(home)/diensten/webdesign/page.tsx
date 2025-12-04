'use client';

import { FooterSection } from '@/components/home/sections/footer-section';
import { SectionHeader } from '@/components/home/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOBreadcrumb } from '@/components/home/seo-breadcrumb';
import { 
  Palette, 
  Eye, 
  MousePointerClick, 
  TrendingUp, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Layers,
  Sparkles,
  Target,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function WebdesignPage() {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visueel Aantrekkelijk',
      description: 'Modern, professioneel design dat jouw merk versterkt en vertrouwen wekt bij bezoekers. We creëren visueel indrukwekkende designs die opvallen.',
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: 'Gebruiksvriendelijk (UX)',
      description: 'Intuïtieve navigatie en gebruikerservaring. Bezoekers vinden snel wat ze zoeken en voeren acties moeiteloos uit. Minder frustratie, meer conversie.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'Perfect op alle apparaten - desktop, tablet en mobiel. Jouw design ziet er op elk schermformaat perfect uit en werkt naadloos.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Conversie Geoptimaliseerd',
      description: 'Design dat is geoptimaliseerd voor conversie. Strategische plaatsing van call-to-actions, duidelijke hiërarchie en persuasieve elementen.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Merk Identiteit',
      description: 'Design dat perfect aansluit bij jouw merkidentiteit. Consistente branding, kleuren, typografie en visuele stijl die jouw merk versterkt.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Moderne Trends',
      description: 'Up-to-date met de nieuwste design trends zonder modieus te zijn. We creëren tijdloze designs die jarenlang relevant blijven.',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Merk Analyse',
      description: 'We analyseren jouw merk, doelgroep en concurrentie. We begrijpen jouw visie en vertalen dit naar een design strategie.',
      duration: '1 week',
    },
    {
      step: 2,
      title: 'Wireframes & Sitemap',
      description: 'We maken een sitemap en wireframes die de structuur en functionaliteit van jouw website definiëren. Focus op gebruikerservaring.',
      duration: '1-2 weken',
    },
    {
      step: 3,
      title: 'Visual Design',
      description: 'We creëren visuele designs met kleuren, typografie, iconografie en layout. Je krijgt meerdere concepten om uit te kiezen.',
      duration: '2-3 weken',
    },
    {
      step: 4,
      title: 'Refinement & Feedback',
      description: 'We verfijnen het design op basis van jouw feedback. Iteraties totdat het perfect is en volledig aansluit bij jouw visie.',
      duration: '1-2 weken',
    },
    {
      step: 5,
      title: 'Design System & Handoff',
      description: 'We leveren een compleet design system met style guide, component library en alle assets. Klaar voor development.',
      duration: '1 week',
    },
  ];

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Gebruikersinterface en gebruikerservaring design voor optimale interactie en conversie.',
    },
    {
      title: 'Brand Identity',
      description: 'Visuele identiteit ontwikkeling inclusief logo, kleurenpalet en typografie.',
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first design dat perfect werkt op alle apparaten en schermformaten.',
    },
    {
      title: 'Prototyping',
      description: 'Interactieve prototypes voor testing en validatie voordat we gaan ontwikkelen.',
    },
    {
      title: 'Design Systems',
      description: 'Complete design systems met component libraries voor consistente implementatie.',
    },
    {
      title: 'Redesign',
      description: 'Modernisering van bestaande websites met verbeterde UX en moderne design trends.',
    },
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
                { name: 'Webdesign' }
              ]} 
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-16 px-6 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-center text-balance pb-2">
                Webdesign
              </h1>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl mx-auto text-lg">
                Professioneel webdesign dat jouw merk versterkt en bezoekers omzet in klanten. 
                Van visueel aantrekkelijk tot conversie geoptimaliseerd - wij creëren designs die resultaat opleveren.
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
                Wat maakt ons webdesign bijzonder?
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                We combineren esthetiek met functionaliteit voor designs die niet alleen mooi zijn, maar ook werken.
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

        {/* Services Section */}
        <section className="w-full py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Onze Design Diensten
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Van concept tot implementatie - we bieden alle design diensten die je nodig hebt.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Ons Design Proces
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Een gestructureerde aanpak die zorgt voor designs die perfect aansluiten bij jouw visie.
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

        {/* Pricing Section */}
        <section className="w-full py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Transparante Prijzen
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Design prijzen variëren op basis van scope, complexiteit en aantal pagina's.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Basis Design</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€1.950</span>
                    <span className="text-muted-foreground"> - €3.900</span>
                  </div>
                  <CardDescription className="mt-2">Voor kleine websites en startups</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>5-10 pagina designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Responsive wireframes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>2 design concepten</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>2 revisierondes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>3-4 weken</span>
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
                    <span className="text-4xl font-bold">€3.900</span>
                    <span className="text-muted-foreground"> - €7.800</span>
                  </div>
                  <CardDescription className="mt-2">Voor middelgrote websites en bedrijven</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>10-20 pagina designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>UX research & testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>3 design concepten</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Onbeperkt revisies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Design system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>4-6 weken</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€7.800+</span>
                  </div>
                  <CardDescription className="mt-2">Voor grote projecten en complexe designs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Onbeperkt pagina's</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Volledige UX strategie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>User testing & research</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Complete design system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dedicated designer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>6-8+ weken</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                * Prijzen zijn indicatief. Exacte prijs hangt af van aantal pagina's en complexiteit.
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
                <CardTitle className="text-3xl mb-4">Klaar voor jouw perfecte design?</CardTitle>
                <CardDescription className="text-lg">
                  Laten we samen een design creëren dat jouw merk versterkt en bezoekers omzet in klanten.
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

