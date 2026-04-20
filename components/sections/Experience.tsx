'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

/**
 * ExperienceSection Component
 *
 * Features:
 * - Timeline-style layout with animation
 * - Slide-in from left animation for cards
 * - Staggered animation timing between items
 * - Interactive hover effects on cards
 * - Animated timeline dots
 *
 * Animation References:
 * - Transform X (slide): https://developer.mozilla.org/en-US/docs/Web/CSS/translate
 * - Staggered Animations: https://www.framer.com/motion/introduction/#animation-orchestration
 * - Viewport Detection: https://www.framer.com/motion/scroll-animations/#viewport
 * - YouTube Reference: https://youtube.com/shorts/mF8Bkx1zDeo?si=nohOAiqpXuEssBIL
 *
 * @component
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl relative pl-8 border-l-2 border-primary"
              whileHover={{ x: 10 }}
            >
              <div className="absolute -left-4 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background" />

              <div className="mb-4">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-primary font-semibold">{exp.company}</p>
                <p className="text-muted-foreground text-sm">{exp.period}</p>
              </div>

              <ul className="space-y-3 mb-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {exp.skills && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
