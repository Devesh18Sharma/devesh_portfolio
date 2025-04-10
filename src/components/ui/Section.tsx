'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullHeight?: boolean;
}

export default function Section({ 
  id, 
  className, 
  children,
  fullHeight = false,
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24 scroll-mt-16',
        fullHeight && 'min-h-[calc(100vh-80px)] flex flex-col justify-center',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto px-4 md:px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  align = 'center',
  className 
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  return (
    <div className={cn('mb-12 max-w-3xl', alignmentClasses[align], className)}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
} 