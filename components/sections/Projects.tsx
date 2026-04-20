'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, ExternalLink } from 'lucide-react';
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
            <motion.div
              key={project.title}
              variants={index % 2 === 0 ? cardVariantsLeft : cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="glass-effect p-8 rounded-xl group flex flex-col"
            >
              {/* Project banner */}
              <div className="mb-6 h-40 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors relative overflow-hidden">
                {project.nda ? (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <ShieldAlert className="h-10 w-10 text-primary/70" />
                    <p className="text-xs text-muted-foreground px-4">Under NDA — details restricted</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-5xl mb-1">💻</div>
                    <p className="text-xs text-muted-foreground">Live Project</p>
                  </div>
                )}
                {project.nda && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/40">
                    <ShieldAlert className="h-3 w-3" /> NDA
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link ? (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-semibold w-fit"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View Live</span>
                </motion.a>
              ) : (
                <div className="flex items-center gap-2 text-yellow-400/70 text-sm font-medium">
                  <ShieldAlert className="h-4 w-4" />
                  <span>Confidential — Not publicly available</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
