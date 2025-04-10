'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section, { SectionTitle } from '@/components/ui/Section';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <Section id="about" className="bg-gray-50 dark:bg-gray-900">
      <SectionTitle 
        title="About Me" 
        subtitle="Get to know me better and what drives my passion for development"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image with 3D effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative h-[600px] rounded-lg overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 scale-105 -z-10" />
          <div className="h-full w-full relative overflow-hidden rounded-lg bg-gray-200">
            <Image
              src="/images/profile.jpeg"
              alt="Devesh Sharma"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </motion.div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">
            Full-Stack Developer with a passion for building innovative web applications
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300">
            {personalInfo.shortBio}
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            Based in {personalInfo.location}, I specialize in full-stack development with a focus on React, Node.js, and modern web technologies. 
            My goal is to create elegant, performant, and user-friendly solutions that deliver exceptional digital experiences.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            With experience across diverse domains including SaaS platforms, e-commerce, and real-time applications, 
            I bring a strategic approach to development that balances technical excellence with business objectives.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">📧</span>
              <span className="font-medium">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">📱</span>
              <span className="font-medium">{personalInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">📍</span>
              <span className="font-medium">{personalInfo.location}</span>
            </div>
          </div>
          
          <div className="pt-4">
            <Button asChild>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
} 