'use client';

import { FooterSection } from '@/components/home/sections/footer-section';
import { SectionHeader } from '@/components/home/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOBreadcrumb } from '@/components/home/seo-breadcrumb';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Database,
  Network,
  Lock,
  Activity,
  BarChart3,
  Settings,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function CloudbeheerPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Multi-Cloud Expertise',
      description: 'Ervaring met AWS, Azure en Google Cloud. We helpen je kiezen welke cloud provider het beste past bij jouw behoeften, of we beheren een multi-cloud setup.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automatisering & DevOps',
      description: 'CI/CD pipelines, infrastructure as code, automatische scaling en deployment automatisering. Jouw infrastructuur draait efficiënt en kosteneffectief.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Cloud security best practices, compliance met GDPR, ISO 27001 en andere standaarden. Regelmatige security audits en monitoring.',
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: '24/7 Monitoring',
      description: 'Proactieve monitoring van jouw cloud infrastructuur. We detecteren problemen voordat ze impact hebben en lossen ze snel op.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Kosten Optimalisatie',
      description: 'We analyseren jouw cloud kosten en optimaliseren waar mogelijk. Bespaar tot 30% op cloud kosten zonder performance verlies.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backup & Disaster Recovery',
      description: 'Geautomatiseerde backups, disaster recovery plannen en data replicatie. Jouw data is veilig en altijd beschikbaar.',
    },
  ];

  const services = [
    {
      title: 'Cloud Migratie',
      description: 'Migratie van on-premise naar cloud of tussen cloud providers. Minimale downtime en risico\'s.',
    },
    {
      title: 'Infrastructure Setup',
      description: 'Opzetten van complete cloud infrastructuur: servers, databases, load balancers, CDN en meer.',
    },
    {
      title: 'Kosten Optimalisatie',
      description: 'Analyse en optimalisatie van cloud kosten. Right-sizing, reserved instances en cost monitoring.',
    },
    {
      title: 'Security Hardening',
      description: 'Beveiliging van cloud omgevingen: firewalls, access control, encryption en security policies.',
    },
    {
      title: 'Performance Tuning',
      description: 'Optimalisatie van performance: caching, CDN, database tuning en load balancing.',
    },
    {
      title: 'Compliance & Auditing',
      description: 'GDPR compliance, security audits, compliance reporting en certificering ondersteuning.',
    },
  ];

  const providers = [
    { name: 'Amazon Web Services (AWS)', description: 'Wereldwijd leidende cloud provider met uitgebreide services' },
    { name: 'Microsoft Azure', description: 'Enterprise cloud platform met sterke Microsoft integraties' },
    { name: 'Google Cloud Platform', description: 'Krachtige cloud services met focus op data en AI' },
    { name: 'DigitalOcean', description: 'Developer-friendly cloud voor eenvoudige deployments' },
    { name: 'Vercel', description: 'Optimal cloud platform voor Next.js en React applicaties' },
    { name: 'Netlify', description: 'JAMstack hosting met automatische deployments' },
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
                { name: 'Cloudbeheer' }
              ]} 
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-16 px-6 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-center text-balance pb-2">
                Cloudbeheer
              </h1>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl mx-auto text-lg">
                Professioneel cloudbeheer voor AWS, Azure en Google Cloud. 
                Van setup tot 24/7 monitoring - wij zorgen dat jouw cloud infrastructuur optimaal draait.
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
                Waarom kiezen voor professioneel cloudbeheer?
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Cloud infrastructuur is complex. Laat experts het beheren zodat jij je kunt focussen op jouw core business.
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
                Onze Cloudbeheer Diensten
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Van migratie tot dagelijks beheer - we bieden alle cloudbeheer diensten die je nodig hebt.
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

        {/* Providers Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Cloud Providers
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                We werken met alle grote cloud providers en helpen je de beste keuze te maken.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {providers.map((provider, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full text-center hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{provider.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {provider.description}
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
                Cloudbeheer prijzen variëren op basis van complexiteit en omvang van jouw infrastructuur.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€85</span>
                    <span className="text-muted-foreground">/uur</span>
                  </div>
                  <CardDescription className="mt-2">Voor kleine cloud omgevingen</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Basis monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Maandelijkse reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Backup beheer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Security updates</span>
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
                    <span className="text-4xl font-bold">€85</span>
                    <span className="text-muted-foreground">/uur</span>
                  </div>
                  <CardDescription className="mt-2">Voor middelgrote tot grote omgevingen</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>24/7 monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Wekelijkse reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Proactieve optimalisatie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Security audits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Disaster recovery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€85+</span>
                    <span className="text-muted-foreground">/uur</span>
                  </div>
                  <CardDescription className="mt-2">Voor complexe enterprise omgevingen</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dedicated cloud engineer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dagelijkse monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Multi-cloud beheer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Compliance management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>SLA garanties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                * Prijzen zijn per uur. We bieden ook maandelijkse retainer pakketten. Neem contact op voor een offerte.
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
                <CardTitle className="text-3xl mb-4">Klaar voor professioneel cloudbeheer?</CardTitle>
                <CardDescription className="text-lg">
                  Laat experts jouw cloud infrastructuur beheren zodat jij je kunt focussen op wat echt belangrijk is.
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

