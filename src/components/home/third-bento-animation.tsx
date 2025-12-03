'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Shield, CheckCircle2, TrendingUp, HeadphonesIcon, Wrench, BarChart3 } from 'lucide-react';

export function ThirdBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
      setActiveService(0);
    }
  }, [isInView]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(interval);
  }, [shouldAnimate]);

  const services = [
    {
      icon: <Wrench className="w-5 h-5" />,
      title: 'Onderhoud',
      description: 'Regelmatige updates en optimalisaties',
      color: 'primary',
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5" />,
      title: 'Support',
      description: '24/7 beschikbaar voor vragen',
      color: 'secondary',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Optimalisatie',
      description: 'Continue verbetering van prestaties',
      color: 'primary',
    },
  ];

  return (
    <div
      ref={ref}
      className="relative flex size-full items-center justify-center h-full overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>

      <div className="w-full max-w-md mx-auto p-6">
        {/* Central Status Indicator */}
        <motion.div
          className="flex flex-col items-center justify-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: shouldAnimate ? 1 : 0,
            scale: shouldAnimate ? 1 : 0,
          }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className="relative"
            animate={{
              scale: shouldAnimate ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="size-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
              <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
            </div>
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-secondary rounded-full"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          <motion.p
            className="text-sm font-semibold mt-4 text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: shouldAnimate ? 1 : 0,
              y: shouldAnimate ? 0 : 10,
            }}
            transition={{ delay: 0.6 }}
          >
            Website Live & Actief
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                activeService === index
                  ? 'bg-primary/10 border-primary/30 shadow-lg scale-105'
                  : 'bg-background border-border'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: shouldAnimate ? 1 : 0,
                x: shouldAnimate ? 0 : -20,
              }}
              transition={{
                delay: 0.8 + index * 0.2,
                duration: 0.4,
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className={`p-2 rounded-lg ${
                    activeService === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                  animate={{
                    rotate: activeService === index ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: activeService === index ? Infinity : 0,
                    repeatDelay: 2,
                  }}
                >
                  {service.icon}
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{service.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                {activeService === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-primary"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-6 p-4 bg-accent/50 rounded-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: shouldAnimate ? 1 : 0,
            y: shouldAnimate ? 0 : 20,
          }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-secondary" />
              <span className="text-xs font-medium">Performance</span>
            </div>
            <span className="text-xs font-bold text-secondary">98%</span>
          </div>
          <div className="w-full bg-background rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: shouldAnimate ? '98%' : 0 }}
              transition={{ delay: 1.7, duration: 1, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
