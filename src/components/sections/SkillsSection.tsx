'use client';

import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/ui/Section';
import { skills } from '@/lib/data';

export default function SkillsSection() {
  return (
    <Section id="skills">
      <SectionTitle 
        title="My Skills" 
        subtitle="A comprehensive showcase of my technical expertise and proficiencies"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gradient">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-16 p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-4">My Development Approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400">Clean Code</h4>
            <p className="text-gray-700 dark:text-gray-300">
              I write maintainable, scalable code following best practices and design patterns.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400">Responsive Design</h4>
            <p className="text-gray-700 dark:text-gray-300">
              All my projects are fully responsive, ensuring perfect display across all devices.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400">Performance Focused</h4>
            <p className="text-gray-700 dark:text-gray-300">
              I optimize for speed and efficiency, creating lightning-fast applications.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

interface SkillBadgeProps {
  skill: string;
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium">
      {skill}
    </span>
  );
} 