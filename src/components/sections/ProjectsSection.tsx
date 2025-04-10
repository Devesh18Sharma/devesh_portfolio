'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/ui/Section';
import TiltCard from '@/components/ui/TiltCard';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'featured' | string;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // Extract unique tech stacks for filter buttons
  const uniqueTechs = Array.from(
    new Set(
      projects.flatMap((project) => project.techStack).filter(Boolean)
    )
  ).slice(0, 5); // Limit to top 5 technologies
  
  // Filter projects by active filter
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.techStack.includes(activeFilter);
  });
  
  return (
    <Section id="projects" className="bg-gray-50 dark:bg-gray-900">
      <SectionTitle 
        title="My Projects" 
        subtitle="Explore my recent work and the technologies I've used"
      />
      
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <FilterButton
          active={activeFilter === 'all'}
          onClick={() => setActiveFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton
          active={activeFilter === 'featured'}
          onClick={() => setActiveFilter('featured')}
        >
          Featured
        </FilterButton>
        {uniqueTechs.map((tech) => (
          <FilterButton
            key={tech}
            active={activeFilter === tech}
            onClick={() => setActiveFilter(tech)}
          >
            {tech}
          </FilterButton>
        ))}
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard>
              <div className="h-56 relative">
                <Image
                  src={project.imageUrl || '/images/projects/placeholder.jpg'}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs py-1 px-2 rounded-full font-medium">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {project.githubRepo && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No projects match the selected filter. Try another category.
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setActiveFilter('all')}
          >
            Show All Projects
          </Button>
        </div>
      )}
    </Section>
  );
}

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function FilterButton({ children, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-md text-sm font-medium transition-colors',
        active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      )}
    >
      {children}
    </button>
  );
} 