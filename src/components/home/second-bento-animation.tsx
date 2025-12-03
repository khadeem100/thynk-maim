'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Code2, FileCode, Terminal, Zap } from 'lucide-react';

export function SecondBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  const codeLines = [
    { text: 'const website = {', indent: 0, delay: 0 },
    { text: '  framework: "Next.js",', indent: 1, delay: 0.2 },
    { text: '  styling: "Tailwind CSS",', indent: 1, delay: 0.4 },
    { text: '  features: [', indent: 1, delay: 0.6 },
    { text: '    "Responsive Design",', indent: 2, delay: 0.8 },
    { text: '    "SEO Optimized",', indent: 2, delay: 1.0 },
    { text: '    "Fast Performance"', indent: 2, delay: 1.2 },
    { text: '  ]', indent: 1, delay: 1.4 },
    { text: '};', indent: 0, delay: 1.6 },
  ];

  return (
    <div
      ref={ref}
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="w-full max-w-md mx-auto p-6">
        {/* Code Editor */}
        <motion.div
          className="bg-[#1e1e1e] rounded-lg border border-border shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: shouldAnimate ? 1 : 0,
            scale: shouldAnimate ? 1 : 0.9
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Editor Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#252526] border-b border-border/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 flex items-center gap-2 ml-4">
              <FileCode className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">website.tsx</span>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-4 font-mono text-sm">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: shouldAnimate ? 1 : 0,
                  x: shouldAnimate ? 0 : -20,
                }}
                transition={{
                  delay: line.delay,
                  duration: 0.3,
                }}
              >
                <span className="text-muted-foreground/50 text-xs w-6 text-right">
                  {index + 1}
                </span>
                <span
                  className="text-foreground"
                  style={{ marginLeft: `${line.indent * 1.5}rem` }}
                >
                  {line.text}
                </span>
                {shouldAnimate && index === codeLines.length - 1 && (
                  <motion.span
                    className="inline-block w-0.5 h-4 bg-primary ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 right-10"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: shouldAnimate ? 1 : 0,
              scale: shouldAnimate ? 1 : 0,
              rotate: shouldAnimate ? 0 : -180,
            }}
            transition={{ delay: 2, type: 'spring', stiffness: 200 }}
          >
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-10"
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{
              opacity: shouldAnimate ? 1 : 0,
              scale: shouldAnimate ? 1 : 0,
              rotate: shouldAnimate ? 0 : 180,
            }}
            transition={{ delay: 2.2, type: 'spring', stiffness: 200 }}
          >
            <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: shouldAnimate ? 1 : 0,
              scale: shouldAnimate ? 1 : 0,
            }}
            transition={{ delay: 2.4, type: 'spring', stiffness: 200 }}
          >
            <div className="bg-accent p-3 rounded-lg border border-border">
              <Terminal className="w-5 h-5 text-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
