'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  beat: number; // Beat intensity 0-1
  setBeat: (beat: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [beat, setBeat] = useState(0);

  // Simulate beat detection with timing
  useEffect(() => {
    if (!isPlaying) {
      setBeat(0);
      return;
    }

    let animationFrame: number;
    let lastBeat = Date.now();
    const beatInterval = 500; // Approximate beat interval in ms (120 BPM = 500ms)
    let beatTimeout: NodeJS.Timeout;

    const triggerBeat = () => {
      // Strong beat
      setBeat(1);
      
      // Fade out beat
      beatTimeout = setTimeout(() => {
        setBeat(0.5);
      }, 50);
      
      setTimeout(() => {
        setBeat(0.2);
      }, 150);
      
      setTimeout(() => {
        setBeat(0);
      }, 300);
    };

    const animate = () => {
      const now = Date.now();
      const timeSinceLastBeat = now - lastBeat;

      if (timeSinceLastBeat >= beatInterval) {
        triggerBeat();
        lastBeat = now;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // Start with initial beat
    triggerBeat();
    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (beatTimeout) {
        clearTimeout(beatTimeout);
      }
    };
  }, [isPlaying]);

  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying, beat, setBeat }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}

