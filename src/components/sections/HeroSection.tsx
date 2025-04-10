'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import * as THREE from 'three';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    
    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x4A90E2,
      transparent: true,
      opacity: 0.6,
    });
    
    // Create point mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // Animation loop
    const clock = new THREE.Clock();
    
    function animate() {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate particles
      particlesMesh.rotation.x = elapsedTime * 0.05;
      particlesMesh.rotation.y = elapsedTime * 0.03;
      
      // Mouse interaction
      particlesMesh.rotation.x += mouseY * 0.03;
      particlesMesh.rotation.y += mouseX * 0.03;
      
      // Render
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      {/* Three.js container (absolute positioned) */}
      <div 
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto md:ml-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
              Hello, I'm{' '}
              <span className="text-gradient font-extrabold">
                {personalInfo.name}
              </span>
            </h1>
          </motion.div>
          
          <motion.h2
            className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {personalInfo.tagline}
          </motion.h2>
          
          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4 md:flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" asChild>
              <Link href="#projects">Explore My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-12 flex gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.2
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
} 