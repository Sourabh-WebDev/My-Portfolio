'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

/**
 * SkillsSection Component
 *
 * Features:
 * - Staggered grid card animations
 * - Hover effects with scale and lift animations
 * - Tag cloud with interactive glow effects
 * - Scroll-triggered entrance animations
 *
 * Animation References:
 * - Hover Animations: https://www.framer.com/motion/gesture-animations/#while-hover
 * - Stagger Children: https://www.framer.com/motion/introduction/#animation-orchestration
 * - Scale Transforms: https://developer.mozilla.org/en-US/docs/Web/CSS/scale
 * - Glow Effects: CSS box-shadow with blur
 *
 * @component
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {resumeData.skills.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              variants={skillCardVariants}
              whileHover="hover"
              className="glass-effect p-6 rounded-xl group"
            >
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.items.map((skill) => (
                  <motion.li
                    key={skill}
                    className="text-muted-foreground flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Tags Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap gap-3 justify-center"
        >
          {resumeData.skills
            .flatMap((cat) => cat.items)
            .slice(0, 20)
            .map((skill) => (
              <motion.div
                key={skill}
                className="px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium"
                whileHover={{
                  borderColor: '#50d4ff',
                  boxShadow: '0 0 20px rgba(80, 212, 255, 0.5)',
                }}
              >
                {skill}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
