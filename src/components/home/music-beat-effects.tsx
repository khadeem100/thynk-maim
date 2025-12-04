'use client';

import { useEffect, useRef } from 'react';
import { useMusic } from '@/contexts/music-context';

export function MusicBeatEffects() {
  const { isPlaying, beat } = useMusic();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying || typeof window === 'undefined') {
      // Reset transforms when not playing
      document.body.style.transform = '';
      document.body.style.transition = 'transform 0.5s ease-out';
      document.documentElement.style.setProperty('--beat-intensity', '0');
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;

    const animate = () => {
      const time = Date.now() * 0.001;
      const intensity = beat * 0.8; // Scale intensity
      
      // 3D rotation based on beat and time
      const rotationX = Math.sin(time * 2) * intensity * 1.5;
      const rotationY = Math.cos(time * 1.5) * intensity * 1.5;
      const rotationZ = Math.sin(time * 0.5) * intensity * 0.5;
      
      // Scale effect on beat
      const scale = 1 + intensity * 0.03;
      
      // Subtle translation
      const translateX = Math.sin(time * 1.2) * intensity * 2;
      const translateY = Math.cos(time * 1.8) * intensity * 2;

      // Apply 3D transform to body
      document.body.style.transform = `
        perspective(2000px) 
        rotateX(${rotationX}deg) 
        rotateY(${rotationY}deg) 
        rotateZ(${rotationZ}deg) 
        scale(${scale})
        translateX(${translateX}px)
        translateY(${translateY}px)
      `;
      document.body.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
      document.body.style.transformOrigin = 'center center';
      document.body.style.willChange = 'transform';
      document.body.style.backfaceVisibility = 'hidden';

      // Add background pulse effect
      const pulseIntensity = beat * 0.4;
      document.documentElement.style.setProperty('--beat-intensity', `${pulseIntensity}`);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      document.body.style.transform = '';
      document.body.style.transition = 'transform 0.5s ease-out';
      document.body.style.transformOrigin = '';
      document.body.style.willChange = '';
      document.body.style.backfaceVisibility = '';
      document.documentElement.style.setProperty('--beat-intensity', '0');
    };
  }, [isPlaying, beat]);

  // Add CSS for background effects
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const style = document.createElement('style');
    style.id = 'music-beat-effects';
    style.textContent = `
      body.music-playing {
        position: relative;
        overflow-x: hidden;
      }

      body.music-playing::before {
        content: '';
        position: fixed;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        width: 200%;
        height: 200%;
        background: 
          radial-gradient(circle at 30% 40%, rgba(239, 68, 68, calc(var(--beat-intensity, 0) * 0.3)) 0%, transparent 40%),
          radial-gradient(circle at 70% 60%, rgba(239, 68, 68, calc(var(--beat-intensity, 0) * 0.25)) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(239, 68, 68, calc(var(--beat-intensity, 0) * 0.2)) 0%, transparent 60%);
        pointer-events: none;
        z-index: 9998;
        mix-blend-mode: screen;
        animation: pulse 0.5s ease-in-out infinite, rotate 20s linear infinite;
        transform-origin: center center;
      }

      body.music-playing::after {
        content: '';
        position: fixed;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        width: 200%;
        height: 200%;
        background: 
          radial-gradient(circle at 20% 30%, rgba(239, 68, 68, calc(var(--beat-intensity, 0) * 0.2)) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(239, 68, 68, calc(var(--beat-intensity, 0) * 0.2)) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(239, 68, 68, calc(var(--beat-intensity, 0) * 0.15)) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9997;
        mix-blend-mode: multiply;
        animation: float 4s ease-in-out infinite, rotateReverse 15s linear infinite;
        transform-origin: center center;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: calc(var(--beat-intensity, 0) * 0.6);
          transform: scale(1) rotate(0deg);
        }
        50% {
          opacity: var(--beat-intensity, 0);
          transform: scale(1.2) rotate(180deg);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
        }
        33% {
          transform: translateY(-30px) translateX(20px) rotate(120deg);
        }
        66% {
          transform: translateY(20px) translateX(-20px) rotate(240deg);
        }
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes rotateReverse {
        from {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(0deg);
        }
      }

      /* 3D effect on all elements */
      body.music-playing * {
        transform-style: preserve-3d;
      }

      /* Add subtle parallax effect */
      body.music-playing main {
        transform: translateZ(0);
      }

      /* Smooth transitions when music starts/stops */
      body {
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* Prevent layout shifts */
      body.music-playing {
        overflow-x: hidden;
        overflow-y: auto;
      }

      /* Enhance 3D effect on cards and sections */
      body.music-playing [class*="card"],
      body.music-playing section,
      body.music-playing article {
        transform-style: preserve-3d;
        backface-visibility: hidden;
      }
    `;

    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById('music-beat-effects');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  // Toggle body class based on playing state
  useEffect(() => {
    if (isPlaying) {
      document.body.classList.add('music-playing');
    } else {
      document.body.classList.remove('music-playing');
    }

    return () => {
      document.body.classList.remove('music-playing');
    };
  }, [isPlaying]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
}

