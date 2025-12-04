'use client';

import { FooterSection } from '@/components/home/sections/footer-section';
import { SectionHeader } from '@/components/home/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOBreadcrumb } from '@/components/home/seo-breadcrumb';
import { 
  Wrench, 
  Headphones, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Database,
  RefreshCw,
  AlertCircle,
  FileCheck,
  Server,
  Activity,
  Settings
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function OnderhoudSupportPage() {
  const features = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Regelmatige Updates',
      description: 'Automatische updates van CMS, plugins, frameworks en dependencies. Jouw website blijft up-to-date met de nieuwste features en security patches.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Monitoring',
      description: 'Continue monitoring op security kwetsbaarheden, malware en verdachte activiteit. We voorkomen aanvallen voordat ze schade aanrichten.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backup Beheer',
      description: 'Geautomatiseerde dagelijkse backups met meerdere restore punten. Jouw data is altijd veilig en kan snel worden hersteld bij problemen.',
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Technische Support',
      description: 'Snelle reactietijden op vragen en problemen. Ons team helpt je met technische issues, updates en aanpassingen.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Monitoring',
      description: 'Continue monitoring van performance, uptime en snelheid. We optimaliseren waar nodig om jouw website snel te houden.',
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Content Updates',
      description: 'Hulp bij content updates, nieuwe pagina\'s en kleine aanpassingen. Jouw website blijft actueel zonder dat je technische kennis nodig hebt.',
    },
  ];

  const services = [
    {
      title: 'Security Updates',
      description: 'Regelmatige security patches en updates om kwetsbaarheden te dichten en aanvallen te voorkomen.',
    },
    {
      title: 'Bug Fixes',
      description: 'Snelle oplossing van bugs en technische problemen. Minimale downtime en impact op jouw gebruikers.',
    },
    {
      title: 'Backup & Restore',
      description: 'Geautomatiseerde backups en snelle restore mogelijkheden bij data verlies of problemen.',
    },
    {
      title: 'Performance Optimalisatie',
      description: 'Continue optimalisatie van snelheid, laadtijden en performance voor de beste gebruikerservaring.',
    },
    {
      title: 'Uptime Monitoring',
      description: '24/7 monitoring van beschikbaarheid en snelle response bij downtime of problemen.',
    },
    {
      title: 'Content Beheer',
      description: 'Hulp bij content updates, nieuwe pagina\'s en kleine aanpassingen aan jouw website.',
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
                { name: 'Onderhoud & Support' }
              ]} 
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-16 px-6 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-center text-balance pb-2">
                Onderhoud & Support
              </h1>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl mx-auto text-lg">
                Zorgeloos website onderhoud en technische support. 
                Van security updates tot content wijzigingen - wij zorgen dat jouw website altijd optimaal draait.
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
                Wat biedt ons onderhoudspakket?
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Een website is nooit klaar. Regelmatig onderhoud zorgt voor veiligheid, snelheid en betrouwbaarheid.
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
                Onze Onderhoud & Support Diensten
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Van preventief onderhoud tot incident response - we bieden alle support die je nodig hebt.
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

        {/* Pricing Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Transparante Prijzen
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Kies het onderhoudspakket dat het beste past bij jouw behoeften en budget.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Basis</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€60</span>
                    <span className="text-muted-foreground">/maand</span>
                  </div>
                  <CardDescription className="mt-2">Voor kleine websites</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Maandelijkse updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Security monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Wekelijkse backups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Uptime monitoring</span>
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
                    <span className="text-4xl font-bold">€120</span>
                    <span className="text-muted-foreground">/maand</span>
                  </div>
                  <CardDescription className="mt-2">Voor middelgrote websites</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Wekelijkse updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Proactieve security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dagelijkse backups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Performance optimalisatie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>2 uur content updates/maand</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€240</span>
                    <span className="text-muted-foreground">/maand</span>
                  </div>
                  <CardDescription className="mt-2">Voor grote websites en applicaties</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dagelijkse updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>24/7 security monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Real-time backups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>24/7 support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Dedicated engineer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>5 uur content updates/maand</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                * Alle pakketten zijn maandelijks opzegbaar. Extra uren worden in rekening gebracht tegen €60/uur.
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
        <section className="w-full py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Zorgeloos website onderhoud</CardTitle>
                <CardDescription className="text-lg">
                  Laat experts jouw website onderhouden zodat jij je kunt focussen op jouw core business.
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

