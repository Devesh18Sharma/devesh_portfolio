'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section, { SectionTitle } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/lib/data';
import axios from 'axios';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    state: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    state: 'idle',
    message: '',
  });
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        state: 'error',
        message: 'Please fill out all fields.',
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        state: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }
    
    try {
      setFormStatus({
        state: 'submitting',
        message: 'Sending your message...',
      });
      
      // Send form data to API
      const response = await axios.post('/api/contact', formData);
      
      if (response.status === 201) {
        setFormStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        state: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.',
      });
    }
  };
  
  return (
    <Section id="contact" className="bg-gray-50 dark:bg-gray-900">
      <SectionTitle 
        title="Get in Touch" 
        subtitle="Let's connect and discuss how we can work together"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium">Phone</h4>
                <a 
                  href={`tel:${personalInfo.mobile}`} 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {personalInfo.mobile}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-4">Find me on</h4>
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
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={formStatus.state === 'submitting'}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={formStatus.state === 'submitting'}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                disabled={formStatus.state === 'submitting'}
              />
            </div>
            
            {formStatus.message && (
              <div
                className={`p-3 rounded-md ${
                  formStatus.state === 'error'
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    : formStatus.state === 'success'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={formStatus.state === 'submitting'}
              >
                {formStatus.state === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
} 