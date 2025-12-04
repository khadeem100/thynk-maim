'use client';

import { FooterSection } from '@/components/home/sections/footer-section';
import { SectionHeader } from '@/components/home/section-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/home/ui/accordion';
import { siteConfig } from '@/lib/home';
import { motion } from 'motion/react';
import { HelpCircle, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FAQPage() {
  const { faqSection } = siteConfig;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full">
        <section className="w-full py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-center text-balance pb-2">
                Veelgestelde Vragen
              </h1>
              <p className="text-muted-foreground text-center text-balance font-medium max-w-2xl mx-auto">
                Vind snel antwoorden op de meest gestelde vragen over onze diensten, prijzen en werkwijze.
              </p>
            </SectionHeader>

            <div className="mt-12">
              <Accordion
                type="single"
                collapsible
                className="w-full border-b-0 grid gap-3"
              >
                {faqSection.faQitems.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AccordionItem
                      value={index.toString()}
                      className="border-0 grid gap-2"
                    >
                      <AccordionTrigger className="border bg-accent border-border rounded-lg px-6 py-4 cursor-pointer no-underline hover:no-underline data-[state=open]:ring data-[state=open]:ring-primary/20 text-left">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-semibold">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 border border-border text-foreground rounded-lg bg-background">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Vraag niet gevonden?
                  </CardTitle>
                  <CardDescription>
                    Neem contact met ons op en we helpen je graag verder met al je vragen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <Link href="/contact">
                        <Mail className="w-4 h-4 mr-2" />
                        Stuur een e-mail
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href="tel:+31612345678">
                        <Phone className="w-4 h-4 mr-2" />
                        Bel ons
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
        <FooterSection />
      </div>
    </main>
  );
}

