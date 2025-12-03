'use client';

import { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ContactModal } from '@/components/home/contact-modal';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const STORAGE_KEY = 'welcome-popup-dismissed';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the popup
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors flex items-center justify-center group"
                aria-label="Sluiten"
              >
                <X className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Side - Left */}
                <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                    alt="TynkTech - Professioneel Team"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>

                {/* Content Side - Right */}
                <div className="p-8 md:p-10 flex flex-col justify-between h-[400px] md:h-[500px]">
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-medium text-primary">Welkom bij TynkTech</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        Laten we samen jouw digitale toekomst bouwen
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Wij zijn gespecialiseerd in moderne websites, webapplicaties en digitale oplossingen op maat. 
                        Plan een vrijblijvend gesprek en ontdek hoe we jouw bedrijf kunnen helpen groeien.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Moderne technologieën en best practices
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Oplossingen op maat voor jouw bedrijf
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Transparante communicatie en snelle levering
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <ContactModal>
                      <Button 
                        size="lg" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium shadow-lg"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Maak een Afspraak
                      </Button>
                    </ContactModal>
                    
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="dont-show-again"
                        checked={dontShowAgain}
                        onCheckedChange={(checked) => setDontShowAgain(checked === true)}
                      />
                      <Label
                        htmlFor="dont-show-again"
                        className="text-sm text-muted-foreground cursor-pointer font-normal"
                      >
                        Deze popup niet meer tonen
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

