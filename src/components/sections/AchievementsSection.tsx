'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Section, { SectionTitle } from '@/components/ui/Section';
import { achievements } from '@/lib/data';
import CountUp from 'react-countup';

export default function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <Section id="achievements">
      <SectionTitle 
        title="Leadership & Achievements" 
        subtitle="Key highlights from my professional journey and contributions"
      />
      
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            custom={index}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3 text-gradient">{achievement.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard 
          value={300} 
          label="DSA Problems Solved" 
          isVisible={isInView} 
          suffix="+" 
        />
        <StatCard 
          value={3} 
          label="Open Source Contributions" 
          isVisible={isInView} 
          suffix="+" 
        />
        <StatCard 
          value={5} 
          label="Tech Events Organized" 
          isVisible={isInView} 
          suffix="+" 
        />
        <StatCard 
          value={40} 
          label="Social Media Growth" 
          isVisible={isInView} 
          suffix="%" 
        />
      </div>
    </Section>
  );
}

interface StatCardProps {
  value: number;
  label: string;
  isVisible: boolean;
  suffix?: string;
  prefix?: string;
}

function StatCard({ value, label, isVisible, suffix = '', prefix = '' }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center border border-blue-100 dark:border-blue-800"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {prefix}
        {isVisible ? (
          <CountUp
            end={value}
            duration={2.5}
            separator=","
          />
        ) : (
          '0'
        )}
        {suffix}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 font-medium">{label}</p>
    </motion.div>
  );
} 