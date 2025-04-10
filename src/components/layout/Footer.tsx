'use client';

import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import { scrollToElement } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Devesh Sharma</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Full-stack developer passionate about creating modern, responsive, and user-centric web applications.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#skills" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href={personalInfo.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href={personalInfo.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a 
                href={personalInfo.links.leetcode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LeetCode"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.9 2.398 8.432.677 2.534-1.72 3.435-5.187 2.207-7.916a6.986 6.986 0 0 0-.398-.7c-.1-.142-.216-.274-.338-.403L10.36 6.314A1.445 1.445 0 0 0 8.93 6.3a1.45 1.45 0 0 0-.338.42l-3.331 7.633c-.318.73-.381 1.542-.19 2.309.192.766.638 1.448 1.255 1.944.62.496 1.39.777 2.187.784.784.007 1.54-.257 2.14-.744l5.324-5.088c.137-.131.18-.262.28-.398.41-.583.347-1.137.173-1.687a3.692 3.692 0 0 0-.797-1.325c-.47-.47-1.07-.777-1.951-.777-.871 0-1.821.628-2.156.943l-2.605 2.607a1.856 1.856 0 0 1-2.59.009 1.83 1.83 0 0 1-.006-2.583l5.23-5.21.055-.056c.674-.673.818-1.581.726-2.413a2.827 2.827 0 0 0-.686-1.552l-.548-.627c-.144-.168-.378-.41-.69-.412-.084-.084-.253-.168-.417-.17z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Devesh Sharma. All rights reserved.
          </p>
        </div>
        
        {/* Back to top button */}
        <button
          onClick={() => scrollToElement('home')}
          className="fixed bottom-6 right-6 p-2 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300 z-10"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
} 