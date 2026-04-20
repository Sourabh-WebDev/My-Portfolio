'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const sections = ['home', 'about', 'skills', 'experience', 'internships', 'projects', 'contact'];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'glass-effect border-b' : 'bg-transparent'
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

        <ul className="hidden md:flex gap-8">
          {sections.map((section) => (
            <motion.li key={section} whileHover={{ scale: 1.1 }}>
              <button
                onClick={() => handleNavigate(section)}
                className={`capitalize transition-colors ${activeSection === section
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
          className="hidden md:inline-flex px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold glow-effect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden px-6 pb-5 pt-2 border-t border-border/50 glass-effect"
        >
          <ul className="flex flex-col gap-1 mb-4">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavigate(section)}
                  className={`w-full text-left px-3 py-2 rounded-md capitalize transition-colors ${activeSection === section
                      ? 'bg-primary/15 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                    }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNavigate('contact')}
            className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold"
          >
            Get In Touch
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
