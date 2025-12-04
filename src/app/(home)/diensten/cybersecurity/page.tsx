'use client';

import { FooterSection } from '@/components/home/sections/footer-section';
import { SectionHeader } from '@/components/home/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOBreadcrumb } from '@/components/home/seo-breadcrumb';
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  FileCheck,
  Network,
  Bug,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function CybersecurityPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Audits',
      description: 'Uitgebreide security audits van jouw systemen, applicaties en infrastructuur. We identificeren kwetsbaarheden voordat hackers dat doen.',
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: 'Penetration Testing',
      description: 'Ethical hacking en penetration testing om de beveiliging van jouw systemen te testen. We denken als hackers om je te beschermen.',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Encryptie & Data Protection',
      description: 'Implementatie van encryptie, secure data storage en data protection maatregelen. Jouw data is veilig, ook bij datalekken.',
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'GDPR Compliance',
      description: 'GDPR compliance checks, privacy impact assessments en implementatie van privacy-by-design. Voldoe aan alle privacy wetgeving.',
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Network Security',
      description: 'Firewall configuratie, network segmentation, intrusion detection en prevention. Jouw netwerk is beschermd tegen aanvallen.',
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Access Control',
      description: 'Identity & Access Management, multi-factor authenticatie, role-based access control. Alleen geautoriseerde gebruikers krijgen toegang.',
    },
  ];

  const services = [
    {
      title: 'Security Audits',
      description: 'Uitgebreide audits van applicaties, netwerken en infrastructuur om kwetsbaarheden te identificeren.',
    },
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking om de beveiliging te testen en kwetsbaarheden te vinden voordat hackers dat doen.',
    },
    {
      title: 'Vulnerability Scanning',
      description: 'Geautomatiseerde scans om bekende kwetsbaarheden en security issues te detecteren.',
    },
    {
      title: 'GDPR Compliance',
      description: 'Privacy impact assessments, compliance checks en implementatie van privacy maatregelen.',
    },
    {
      title: 'Security Training',
      description: 'Security awareness training voor jouw team om phishing en andere aanvallen te voorkomen.',
    },
    {
      title: 'Incident Response',
      description: 'Voorbereiding op security incidents met response plannen en 24/7 support bij incidenten.',
    },
  ];

  const compliance = [
    { name: 'GDPR', description: 'Algemene Verordening Gegevensbescherming compliance' },
    { name: 'ISO 27001', description: 'Information Security Management System certificering' },
    { name: 'NEN 7510', description: 'Informatiebeveiliging in de zorg' },
    { name: 'SOC 2', description: 'Security, availability en confidentiality controls' },
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
                { name: 'Cybersecurity' }
              ]} 
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-16 px-6 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-center text-balance pb-2">
                Cybersecurity
              </h1>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl mx-auto text-lg">
                Bescherm jouw bedrijf tegen cyberaanvallen en datalekken. 
                Van security audits tot GDPR compliance - wij zorgen dat jouw data en systemen veilig zijn.
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
                Waarom is cybersecurity belangrijk?
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Cyberaanvallen worden steeds geavanceerder. Bescherm jouw bedrijf met professionele security diensten.
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
                Onze Cybersecurity Diensten
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Van preventie tot incident response - we bieden alle security diensten die je nodig hebt.
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

        {/* Compliance Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-2">
                Compliance & Certificering
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                We helpen je voldoen aan alle relevante security en privacy standaarden.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {compliance.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full text-center hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {item.description}
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
                Security diensten worden op maat aangeboden op basis van jouw specifieke behoeften.
              </p>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Security Audit</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€120</span>
                    <span className="text-muted-foreground">/uur</span>
                  </div>
                  <CardDescription className="mt-2">Eénmalige security assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Security scan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Vulnerability assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Rapportage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Aanbevelingen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Penetration Test</CardTitle>
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">Populair</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€120</span>
                    <span className="text-muted-foreground">/uur</span>
                  </div>
                  <CardDescription className="mt-2">Ethical hacking en penetration testing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Black box testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>White box testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Social engineering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Gedetailleerd rapport</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Remediation support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">GDPR Compliance</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€120</span>
                    <span className="text-muted-foreground">/uur</span>
                  </div>
                  <CardDescription className="mt-2">Privacy compliance en GDPR implementatie</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Privacy impact assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Data mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Privacy policies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Compliance implementatie</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                * Prijzen zijn per uur. Exacte kosten hangen af van scope en complexiteit. Neem contact op voor een offerte.
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
                <CardTitle className="text-3xl mb-4">Bescherm jouw bedrijf tegen cyberaanvallen</CardTitle>
                <CardDescription className="text-lg">
                  Laat security experts jouw systemen beveiligen en voldoen aan alle compliance eisen.
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

