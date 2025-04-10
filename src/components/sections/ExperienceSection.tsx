'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Section, { SectionTitle } from '@/components/ui/Section';
import { experiences, education } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <Section id="experience" className="bg-gray-50 dark:bg-gray-900">
      <SectionTitle 
        title="My Experience" 
        subtitle="My professional journey and educational background"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
        <VerticalTimeline lineColor="#ccd6f6" className="custom-timeline">
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              date={experience.period}
              dateClassName="text-gray-700 dark:text-gray-300"
              iconStyle={{ 
                background: '#1e40af', 
                color: '#fff',
                boxShadow: '0 0 0 4px #dbeafe, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)'
              }}
              contentStyle={{
                background: 'rgb(255, 255, 255)',
                color: '#333',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
              icon={
                <div className="flex h-full w-full items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-600 dark:text-blue-400 font-medium mt-1">
                {experience.company}
              </h4>
              <p className="text-gray-500 text-sm mt-1">{experience.location}</p>
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="inline-block px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold mb-6">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution + index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold">{edu.institution}</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
              <div className="mt-2 flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span>{edu.period}</span>
                <span>{edu.location}</span>
              </div>
              {edu.gpa && (
                <div className="mt-2 text-sm font-medium">
                  GPA/Score: <span className="text-green-600 dark:text-green-400">{edu.gpa}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
} 