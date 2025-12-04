'use client';

import { useEffect, useRef, useState } from 'react';

interface RedDotsPatternProps {
  className?: string;
  dotSize?: number;
  gap?: number;
  opacity?: number;
  color?: string;
}

export function RedDotsPattern({
  className = '',
  dotSize = 4,
  gap = 24,
  opacity = 0.3,
  color = 'oklch(0.577 0.245 27.325)', // destructive color
}: RedDotsPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
      
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw dots
      const cols = Math.ceil(rect.width / gap);
      const rows = Math.ceil(rect.height / gap);
      
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap + gap / 2;
          const y = j * gap + gap / 2;
          
          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mounted, dotSize, gap, opacity, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}

