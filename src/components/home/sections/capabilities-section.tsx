'use client';

import { SectionHeader } from '@/components/home/section-header';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  FileText,
  Image,
  Presentation,
  Globe,
  BarChart3,
  ShoppingCart,
  Users,
  Clock 
} from 'lucide-react';

const capabilities = [
  {
    title: 'Automate Your CRM',
    description: 'Say goodbye to manual data entry and repetitive tasks. Our AI-powered CRM system learns your business processes and automates everything from lead scoring to customer follow-ups.',
    icon: <FileText className="size-6" />,
  },
  {
    title: 'Build Custom Solutions',
    description: 'Why settle for one-size-fits-all software? Our revolutionary block-builder approach lets you create a custom AI solution tailored to your exact needs.',
    icon: <Image className="size-6" />,
  },
  {
    title: 'Launch Websites Instantly',
    description: 'Our white-labeled AI website builder empowers you to create stunning, conversion-optimized websites without technical expertise.',
    icon: <Presentation className="size-6" />,
  },
  {
    title: 'Streamline Business Operations',
    description: 'Manage every aspect of your business from a single, intelligent platform. Our comprehensive ERP system integrates inventory management, financial tracking, supply chain optimization, and more.',
    icon: <Globe className="size-6" />,
  },
  {
    title: 'Revolutionize Human Resources',
    description: 'Transform how you attract, onboard, and retain talent. Our AI-driven HRM system automates recruitment screening.',
    icon: <BarChart3 className="size-6" />,
  },
  {
    title: 'Scale Without Limits',
    description: 'As your company grows, our white-labeled platform grows with you. Deploy our entire suite of AI solutions to your clients under your own brand.',
    icon: <ShoppingCart className="size-6" />,
  },
  {
    title: 'Integrate AI Strategically',
    description: 'Not ready for a complete overhaul? No problem. Our modular approach means you can start small.',
    icon: <Users className="size-6" />,
  },
  {
    title: 'Specialized B2B Expertise',
    description: 'We are not just another tech company. We are B2B specialists who understand your challenges',
    icon: <Clock className="size-6" />,
  },
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="capabilities"
      className="flex flex-col items-center justify-center w-full relative"
      ref={ref}
    >
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              What Can Thynk Tech Do For You?
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              From content creation to data analysis, Kortix handles the work that takes you hours in just minutes.
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="relative p-6 border-border group hover:bg-accent/5 transition-colors duration-300 [&:not(:nth-child(4n))]:border-r [&:not(:nth-last-child(-n+4))]:border-b"
              >
                {/* Icon */}
                <div className="flex items-center justify-center size-12 bg-secondary/10 rounded-xl mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <div className="text-secondary">
                    {capability.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
