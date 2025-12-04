'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ContactModal } from '@/components/home/contact-modal';
import { motion } from 'motion/react';

interface CalculatorInputs {
  pages: number;
  features: number;
  integrations: number;
  designComplexity: number;
  timeline: number;
}

export function PricingCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    pages: 5,
    features: 3,
    integrations: 2,
    designComplexity: 3,
    timeline: 6,
  });

  // Base pricing (per hour)
  const hourlyRate = 75;
  
  // Calculate estimated hours
  const calculateHours = (): number => {
    let totalHours = 0;
    
    // Base hours for setup
    totalHours += 8;
    
    // Pages (2-4 hours per page depending on complexity)
    const hoursPerPage = inputs.designComplexity <= 2 ? 2 : inputs.designComplexity <= 4 ? 3 : 4;
    totalHours += inputs.pages * hoursPerPage;
    
    // Features (3-8 hours per feature)
    const hoursPerFeature = inputs.designComplexity <= 2 ? 3 : inputs.designComplexity <= 4 ? 5 : 8;
    totalHours += inputs.features * hoursPerFeature;
    
    // Integrations (4-12 hours per integration)
    const hoursPerIntegration = inputs.designComplexity <= 2 ? 4 : inputs.designComplexity <= 4 ? 8 : 12;
    totalHours += inputs.integrations * hoursPerIntegration;
    
    // Design complexity multiplier
    const complexityMultiplier = inputs.designComplexity <= 2 ? 1 : inputs.designComplexity <= 4 ? 1.2 : 1.5;
    totalHours *= complexityMultiplier;
    
    // Timeline adjustment (rushed = more hours due to overtime)
    if (inputs.timeline <= 2) {
      totalHours *= 1.3; // 30% rush fee
    } else if (inputs.timeline <= 4) {
      totalHours *= 1.15; // 15% rush fee
    }
    
    return Math.ceil(totalHours);
  };

  const estimatedHours = calculateHours();
  const estimatedPrice = estimatedHours * hourlyRate;
  const priceRange = {
    min: Math.floor(estimatedPrice * 0.85),
    max: Math.ceil(estimatedPrice * 1.15),
  };

  const updateInput = (key: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const getTimelineText = (weeks: number): string => {
    if (weeks <= 2) return `${weeks} weken (Spoed)`;
    if (weeks <= 4) return `${weeks} weken (Snel)`;
    if (weeks <= 8) return `${weeks} weken (Normaal)`;
    return `${weeks} weken (Rustig)`;
  };

  const getComplexityText = (level: number): string => {
    if (level <= 2) return 'Eenvoudig';
    if (level <= 4) return 'Gemiddeld';
    return 'Complex';
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Pricing Calculator voor Custom Projecten
        </CardTitle>
        <CardDescription>
          Schat de kosten voor jouw custom website of webapplicatie project
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pages */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="pages">Aantal Pagina's</Label>
            <span className="text-sm font-medium">{inputs.pages}</span>
          </div>
          <Slider
            id="pages"
            min={1}
            max={20}
            step={1}
            value={[inputs.pages]}
            onValueChange={(value) => updateInput('pages', value[0])}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            {inputs.pages === 1 && 'Landingspagina'}
            {inputs.pages > 1 && inputs.pages <= 5 && 'Kleine website'}
            {inputs.pages > 5 && inputs.pages <= 10 && 'Middelgrote website'}
            {inputs.pages > 10 && 'Grote website'}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="features">Aantal Features</Label>
            <span className="text-sm font-medium">{inputs.features}</span>
          </div>
          <Slider
            id="features"
            min={0}
            max={15}
            step={1}
            value={[inputs.features]}
            onValueChange={(value) => updateInput('features', value[0])}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Bijv. contactformulier, zoekfunctie, gebruikersaccounts, etc.
          </p>
        </div>

        {/* Integrations */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="integrations">Aantal Integraties</Label>
            <span className="text-sm font-medium">{inputs.integrations}</span>
          </div>
          <Slider
            id="integrations"
            min={0}
            max={10}
            step={1}
            value={[inputs.integrations]}
            onValueChange={(value) => updateInput('integrations', value[0])}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Bijv. payment gateway, CRM, email service, analytics, etc.
          </p>
        </div>

        {/* Design Complexity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="complexity">Design Complexiteit</Label>
            <span className="text-sm font-medium">{getComplexityText(inputs.designComplexity)}</span>
          </div>
          <Slider
            id="complexity"
            min={1}
            max={5}
            step={1}
            value={[inputs.designComplexity]}
            onValueChange={(value) => updateInput('designComplexity', value[0])}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Eenvoudig = template-based, Complex = volledig custom design
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="timeline">Gewenste Oplevering</Label>
            <span className="text-sm font-medium">{getTimelineText(inputs.timeline)}</span>
          </div>
          <Slider
            id="timeline"
            min={2}
            max={16}
            step={1}
            value={[inputs.timeline]}
            onValueChange={(value) => updateInput('timeline', value[0])}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Kortere deadlines kunnen extra kosten met zich meebrengen
          </p>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border border-primary/20 space-y-4"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Geschatte Kosten</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">€{priceRange.min.toLocaleString('nl-NL')}</span>
              <span className="text-muted-foreground">-</span>
              <span className="text-3xl font-bold">€{priceRange.max.toLocaleString('nl-NL')}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Geschat op basis van {estimatedHours} uur werk × €{hourlyRate}/uur
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Geschatte Uren</p>
              <p className="text-lg font-semibold">{estimatedHours} uur</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Uurtarief</p>
              <p className="text-lg font-semibold">€{hourlyRate}/uur</p>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <p className="text-xs font-medium text-muted-foreground mb-2">Inbegrepen:</p>
            <div className="space-y-1.5">
              {[
                'Responsive design (mobile, tablet, desktop)',
                'SEO basis optimalisatie',
                'Content Management Systeem (CMS)',
                'Basis security & SSL certificaat',
                '1 maand gratis support na oplevering',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <ContactModal>
              <Button size="lg" className="w-full">
                Vraag Vrijblijvende Offerte Aan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </ContactModal>
            <p className="text-xs text-center text-muted-foreground mt-2">
              * Dit is een schatting. De exacte prijs hangt af van jouw specifieke wensen.
            </p>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}

