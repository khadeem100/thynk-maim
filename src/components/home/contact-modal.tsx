'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useTheme } from 'next-themes';
import { Check, Calendar } from 'lucide-react';

interface ContactModalProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  calLink?: string;
  namespace?: string;
  title?: string;
  description?: string;
  benefits?: string[];
}

export function ContactModal({ 
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  calLink = 'tynktech.nl/consultation', // Cal.com link
  namespace = 'contact-modal',
  title = 'Plan een gesprek met TynkTech',
  description = 'Plan een vrijblijvend gesprek met ons team om te bespreken hoe we jouw bedrijf kunnen helpen met moderne digitale oplossingen.',
  benefits = [
    'Gratis consultatie',
    'Oplossing op maat',
    'Transparante prijzen',
    'Snelle reactietijd',
  ],
}: ContactModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  // Use controlled or internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = controlledOnOpenChange || setInternalOpen;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal('ui', { hideEventTypeDetails: true, layout: 'month_view' });
    })();
  }, [namespace]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 border-none max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw] rounded-xl overflow-hidden">
        <DialogTitle className="sr-only">
          {title}
        </DialogTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[700px] lg:h-[800px]">
          {/* Info Panel */}
          <div className="p-6 lg:p-8 flex flex-col bg-white dark:bg-black relative h-full overflow-y-auto border-r border-gray-200 dark:border-gray-800">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 flex-shrink-0">
                <Image
                  src="/kortix-logo.svg"
                  alt="TynkTech Logo"
                  width={80}
                  height={28}
                  className="h-7 w-auto"
                />
              </div>

              <div className="mb-6 flex-shrink-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-xs font-medium text-primary">Gratis Consultatie</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-3 text-foreground">
                  {title}
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex-1">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Wat je krijgt</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-6 flex-shrink-0">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Vrijblijvend Gesprek</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    30 minuten consultatie • Geen verplichtingen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Panel */}
          <div className="bg-white dark:bg-[#171717] h-full overflow-hidden">
            <div className="h-full overflow-auto">
              <Cal
                namespace={namespace}
                calLink={calLink}
                style={{ width: '100%', height: '100%' }}
                config={{
                  layout: 'month_view',
                  hideEventTypeDetails: 'false',
                }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

