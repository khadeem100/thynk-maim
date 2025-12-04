'use client';

import { FooterSection } from '@/components/home/sections/footer-section';
import { SectionHeader } from '@/components/home/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOBreadcrumb } from '@/components/home/seo-breadcrumb';
import { 
  Code, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Layers,
  Server,
  FileCode,
  Rocket,
  Workflow,
  Cpu,
  Network,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function WebapplicatieOntwikkelingPage() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Custom Development',
      description: 'Volledig op maat gemaakte webapplicaties die precies aansluiten bij jouw bedrijfsprocessen en workflows. Geen standaard oplossingen, maar maatwerk.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Schaalbare Architectuur',
      description: 'Gebouwd met schaalbaarheid in gedachten. Jouw applicatie groeit mee met jouw bedrijf zonder performance problemen of technische schuld.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Gebruikersbeheer & Authenticatie',
      description: 'Robuuste gebruikersbeheer systemen met rollen, rechten en geavanceerde authenticatie opties zoals 2FA, SSO en OAuth integraties.',
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Workflow Automatisering',
      description: 'Automatiseer complexe bedrijfsprocessen en workflows. Bespaar tijd en verhoog efficiëntie met slimme automatiseringen.',
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'API Integraties',
      description: 'Naadloze integratie met bestaande systemen, externe API\'s en services. We verbinden jouw applicatie met alle tools die je nodig hebt.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level beveiliging met encryptie, secure coding practices, regelmatige security audits en compliance met GDPR en andere standaarden.',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Requirements Analyse',
      description: 'Uitgebreide analyse van jouw behoeften, bestaande systemen en workflows. We documenteren alle requirements en maken een technisch ontwerp.',
      duration: '2-3 weken',
    },
    {
      step: 2,
      title: 'Architectuur & Design',
      description: 'We ontwerpen de applicatie architectuur, database structuur en gebruikersinterfaces. Wireframes, mockups en technische specificaties.',
      duration: '3-4 weken',
    },
    {
      step: 3,
      title: 'Development Sprint',
      description: 'Agile development met wekelijkse sprints. Regelmatige demo\'s en feedback momenten. Je ziet de voortgang in real-time.',
      duration: '6-10 weken',
    },
    {
      step: 4,
      title: 'Testing & QA',
      description: 'Uitgebreide testing: unit tests, integration tests, security tests en user acceptance testing. We zorgen voor bug-free code.',
      duration: '2-3 weken',
    },
    {
      step: 5,
      title: 'Deployment & Training',
      description: 'Staged deployment naar productie, monitoring setup en uitgebreide training voor jouw team. Volledige documentatie en support.',
      duration: '1-2 weken',
    },
  ];

  const technologies = [
    { name: 'Node.js', description: 'Server-side JavaScript voor snelle en schaalbare backends' },
    { name: 'Python', description: 'Krachtige backend development met Django en FastAPI' },
    { name: 'React', description: 'Moderne frontend voor interactieve gebruikerservaringen' },
    { name: 'TypeScript', description: 'Type-safe development voor betrouwbare applicaties' },
    { name: 'PostgreSQL', description: 'Robuuste relationele database voor complexe data' },
    { name: 'MongoDB', description: 'NoSQL database voor flexibele data structuren' },
    { name: 'Redis', description: 'High-performance caching en session management' },
    { name: 'Docker', description: 'Containerization voor consistente deployments' },
  ];

  const useCases = [
    {
      title: 'CRM Systemen',
      description: 'Custom CRM oplossingen voor klantbeheer, sales tracking en customer service.',
    },
    {
      title: 'Project Management Tools',
      description: 'Project management applicaties met task tracking, team collaboration en reporting.',
    },
    {
      title: 'E-commerce Platforms',
      description: 'Volledige e-commerce oplossingen met product management, checkout en payment integraties.',
    },
    {
      title: 'Data Analytics Dashboards',
      description: 'Real-time dashboards voor data visualisatie, reporting en business intelligence.',
    },
    {
      title: 'SaaS Applicaties',
      description: 'Multi-tenant SaaS oplossingen met subscription management en billing.',
    },
    {
      title: 'API Backends',
      description: 'RESTful en GraphQL API\'s voor mobile apps, frontends en externe integraties.',
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
                { name: 'Webapplicatie Ontwikkeling' }
              ]} 
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-16 px-6 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-center text-balance pb-2">
                Webapplicatie Ontwikkeling
              </h1>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl mx-auto text-lg">
                Krachtige, schaalbare webapplicaties op maat die jouw bedrijfsprocessen automatiseren en optimaliseren. 
                Van complexe workflows tot real-time dashboards - wij bouwen applicaties die resultaat opleveren.
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
                Waarom kiezen voor custom webapplicaties?
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Standaard software past niet altijd. Met een custom webapplicatie krijg je precies wat je nodig hebt.
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

        {/* Use Cases Section */}
        <section className="w-full py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Veelvoorkomende Use Cases
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                We hebben ervaring met verschillende soorten webapplicaties voor diverse industrieën.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{useCase.description}</CardDescription>
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
                Ons Ontwikkelingsproces
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Een gestructureerde, agile aanpak die zorgt voor transparantie en kwaliteit.
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
        <section className="w-full py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Onze Technologie Stack
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                We gebruiken bewezen, moderne technologieën voor robuuste en schaalbare applicaties.
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
                  <Card className="h-full text-center hover:border-primary transition-colors">
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
                Webapplicaties zijn complexer dan websites. Prijzen variëren sterk op basis van functionaliteit.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Basis</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€4.800</span>
                    <span className="text-muted-foreground"> - €9.600</span>
                  </div>
                  <CardDescription className="mt-2">Eenvoudige applicaties met basis functionaliteit</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Basis CRUD functionaliteit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Gebruikersbeheer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dashboard & Reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>8-12 weken ontwikkeling</span>
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
                    <span className="text-4xl font-bold">€9.600</span>
                    <span className="text-muted-foreground"> - €19.200</span>
                  </div>
                  <CardDescription className="mt-2">Complexe applicaties met geavanceerde features</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Geavanceerde workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>API integraties</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Real-time features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>12-16 weken ontwikkeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€19.200+</span>
                  </div>
                  <CardDescription className="mt-2">Enterprise oplossingen met volledige customisatie</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Multi-tenant architectuur</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Microservices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>High availability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dedicated team</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>16+ weken ontwikkeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                * Prijzen zijn indicatief. Exacte prijs hangt af van complexiteit, features en integraties.
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
                <CardTitle className="text-3xl mb-4">Klaar voor jouw custom applicatie?</CardTitle>
                <CardDescription className="text-lg">
                  Laten we samen bespreken hoe we jouw bedrijfsprocessen kunnen optimaliseren met een custom webapplicatie.
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

