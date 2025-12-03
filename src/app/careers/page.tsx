'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Briefcase, Users, TrendingUp, Heart, Zap, CheckCircle2 } from 'lucide-react';
import { ContactModal } from '@/components/home/contact-modal';
import { FlickeringGrid } from '@/components/home/ui/flickering-grid';
import { useMediaQuery } from '@/hooks/use-media-query';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Ontwikkeling',
    location: 'Remote / Amsterdam',
    type: 'Full-time',
    description: 'We zoeken een ervaren frontend developer die gepassioneerd is over moderne webtechnologieën en gebruikerservaring.',
    requirements: [
      'Minimaal 5 jaar ervaring met React/Next.js',
      'Ervaring met TypeScript',
      'Kennis van moderne CSS frameworks (Tailwind)',
      'Ervaring met responsive design',
      'Goede communicatieve vaardigheden',
    ],
  },
  {
    id: '2',
    title: 'Cloud Engineer',
    department: 'Infrastructuur',
    location: 'Remote / Nederland',
    type: 'Full-time',
    description: 'Als Cloud Engineer help je onze klanten met het opzetten en beheren van cloud infrastructuur.',
    requirements: [
      'Ervaring met AWS, Azure of GCP',
      'Kennis van Kubernetes en Docker',
      'Ervaring met Infrastructure as Code (Terraform)',
      'DevOps best practices',
      'Probleemoplossend vermogen',
    ],
  },
  {
    id: '3',
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote / Nederland',
    type: 'Full-time',
    description: 'Help organisaties beschermen tegen cyberdreigingen en implementeer best practices voor informatiebeveiliging.',
    requirements: [
      'Ervaring met security audits en penetration testing',
      'Kennis van compliance frameworks (ISO 27001, GDPR)',
      'Ervaring met security tools en monitoring',
      'Certificeringen (CISSP, CEH, of vergelijkbaar)',
      'Sterke analytische vaardigheden',
    ],
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Flexibel werken',
    description: 'Remote werken en flexibele uren',
  },
  {
    icon: TrendingUp,
    title: 'Groeimogelijkheden',
    description: 'Professionele ontwikkeling en training',
  },
  {
    icon: Users,
    title: 'Team cultuur',
    description: 'Samenwerken met getalenteerde collega\'s',
  },
  {
    icon: Zap,
    title: 'Moderne tools',
    description: 'Werken met de nieuwste technologieën',
  },
];

export default function CareersPage() {
  const tablet = useMediaQuery('(max-width: 1024px)');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

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

          <div className="max-w-6xl w-full mx-auto">
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

              <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center">
                Vacatures bij <span className="text-secondary">TynkTech</span>
              </h1>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-16">
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                Word onderdeel van een innovatief team dat moderne technologieën ontwikkelt
                en bedrijven helpt groeien.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border bg-background hover:bg-accent/20 transition-all"
                >
                  <benefit.icon className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Job Openings */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                Openstaande Vacatures
              </h2>
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 rounded-xl border border-border bg-background hover:border-secondary/40 transition-all cursor-pointer"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{job.description}</p>
                      </div>
                      <ContactModal
                        calLink="tynktech.nl/consultation"
                        title="Solliciteer"
                        description="Plan een gesprek om te solliciteren voor deze functie"
                      >
                        <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium text-sm whitespace-nowrap">
                          Solliciteer
                        </button>
                      </ContactModal>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Work With Us */}
            <div className="mb-16 p-8 rounded-xl border border-border bg-accent/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                Waarom werken bij TynkTech?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Innovatieve projecten</h3>
                      <p className="text-sm text-muted-foreground">
                        Werk aan uitdagende projecten met de nieuwste technologieën en best practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Competitief salaris</h3>
                      <p className="text-sm text-muted-foreground">
                        Marktconform salaris met ruimte voor groei en ontwikkeling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Work-life balance</h3>
                      <p className="text-sm text-muted-foreground">
                        Flexibele werktijden en mogelijkheid tot remote werken.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Team events</h3>
                      <p className="text-sm text-muted-foreground">
                        Regelmatige teamuitjes en gezellige activiteiten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center p-8 rounded-xl border border-border bg-background">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Geen passende vacature gevonden?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We zijn altijd op zoek naar getalenteerde mensen. Neem contact met ons op
                en wie weet kunnen we samenwerken!
              </p>
              <ContactModal calLink="tynktech.nl/consultation">
                <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium">
                  Neem contact op
                </button>
              </ContactModal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

