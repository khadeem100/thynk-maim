/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Users, CheckCircle2 } from 'lucide-react';

export function FirstBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 500);
    } else {
      setShouldAnimate(false);
      setCurrentStep(0);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, [shouldAnimate]);

  const conversationSteps = [
    {
      user: 'Wij willen een moderne website voor ons bedrijf.',
      response: 'Uitstekend! Laten we beginnen met het bespreken van jullie wensen en doelen.',
    },
    {
      user: 'We hebben behoefte aan een webshop met betalingsintegratie.',
      response: 'Perfect! We kunnen een volledig op maat gemaakte e-commerce oplossing ontwikkelen.',
    },
    {
      user: 'Hoe lang duurt het ontwikkelproces?',
      response: 'We bespreken de details en maken een plan dat perfect aansluit bij jullie bedrijf.',
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-full p-4 flex flex-col items-center justify-center gap-4"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      
      {/* Meeting/Conversation Animation */}
      <div className="max-w-md mx-auto w-full flex flex-col gap-3">
        {/* User Message */}
        <motion.div
          className="flex items-end justify-end gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: shouldAnimate ? 1 : 0,
            y: shouldAnimate ? 0 : 20
          }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.div
            className="max-w-[280px] bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg"
            key={currentStep}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm font-medium">
              {conversationSteps[currentStep].user}
            </p>
          </motion.div>
          <motion.div
            className="flex items-center bg-background rounded-full size-10 flex-shrink-0 border-2 border-primary shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: shouldAnimate ? 1 : 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <Users className="w-5 h-5 text-primary m-auto" />
          </motion.div>
        </motion.div>

        {/* TynkTech Response */}
        <motion.div
          className="flex items-start gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: shouldAnimate ? 1 : 0,
            y: shouldAnimate ? 0 : 20
          }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.div
            className="flex items-center bg-background rounded-full size-10 flex-shrink-0 justify-center shadow-lg border-2 border-secondary"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: shouldAnimate ? 1 : 0,
              rotate: shouldAnimate ? 0 : -180
            }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
          >
            <img 
              src="/kortix-symbol.svg" 
              alt="TynkTech" 
              className="size-5 dark:invert"
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="max-w-[280px] bg-accent border border-border p-3 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">
                  {conversationSteps[currentStep].response}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Progress Indicators */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldAnimate ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep
                  ? 'bg-primary'
                  : index < currentStep
                  ? 'bg-primary/50'
                  : 'bg-border'
              }`}
              animate={{
                scale: index === currentStep ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                repeat: index === currentStep ? Infinity : 0,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
