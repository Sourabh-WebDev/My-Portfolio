'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Built with <span className="text-primary">React</span>,{' '}
            <span className="text-primary">Next.js</span>,{' '}
            <span className="text-primary">Three.js</span>, and{' '}
            <span className="text-primary">Framer Motion</span>
          </p>
          <p className="text-muted-foreground">
            &copy; {currentYear} Sourabh Verma. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
