'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltOptions?: object;
}

export default function TiltCard({ 
  children, 
  className, 
  tiltOptions,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
        scale: 1.05,
        ...tiltOptions,
      });
    }
    
    return () => {
      if (cardRef.current) {
        // @ts-ignore
        cardRef.current.vanillaTilt?.destroy();
      }
    };
  }, [tiltOptions]);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
} 