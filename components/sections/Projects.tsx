'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

/**
 * ProjectsSection Component
 *
 * Features:
 * - Alternating directional animations (left/right)
 * - Cards animate in from opposite sides
 * - Staggered grid layout with smooth entrance
 * - Hover effects with lift animation
 * - Animated call-to-action arrows
 *
 * Animation References:
 * - Directional Transforms: https://developer.mozilla.org/en-US/docs/Web/CSS/translate
 * - Conditional Animations: https://www.framer.com/motion/animation/#variants
 * - Stagger Effect: https://www.framer.com/motion/introduction/#animation-orchestration
 * - Infinite Animations: https://www.framer.com/motion/animation/#infinite
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

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {resumeData.projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link || '#'}
              variants={index % 2 === 0 ? cardVariantsLeft : cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="glass-effect p-8 rounded-xl group cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="mb-6 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <div className="text-center">
                  <div className="text-4xl mb-2">💻</div>
                  <p className="text-sm text-muted-foreground">Project Demo</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.div
                className="mt-6 flex items-center gap-2 text-primary font-semibold"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span>View Project</span>
                <span>→</span>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
