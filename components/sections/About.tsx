'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

/**
 * AboutSection Component
 *
 * Features:
 * - Scroll-triggered animations using whileInView
 * - Staggered container animations for child elements
 * - Hover effects on highlight cards
 * - Gradient text styling
 *
 * Animation References:
 * - Scroll Animations: https://www.framer.com/motion/scroll-animations/
 * - Staggered Animations: https://www.framer.com/motion/introduction/#animation-orchestration
 * - Viewport Triggers: https://www.framer.com/motion/scroll-animations/#viewport
 *
 * @component
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {resumeData.about.description}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m driven by the challenge of solving complex problems and creating
              elegant solutions. Whether it&apos;s architecting scalable systems or crafting
              delightful user interfaces, I bring attention to detail and a passion for
              excellence.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            {resumeData.about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass-effect p-4 rounded-lg flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-lg">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
