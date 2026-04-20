'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'glass-effect border-b' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Sourabh
        </motion.div>

        <ul className="flex gap-8">
          {sections.map((section) => (
            <motion.li key={section} whileHover={{ scale: 1.1 }}>
              <button
                onClick={() => handleNavigate(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section}
              </button>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold glow-effect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </div>
    </motion.nav>
  );
}
