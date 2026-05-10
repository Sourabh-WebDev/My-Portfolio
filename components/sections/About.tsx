'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';
import { AvatarIllustration } from '../Illustrations';
import { ParallaxOrbs, ParallaxLayer, SectionAtmosphere } from '../ParallaxOrbs';

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
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <ParallaxOrbs orbs={[
        { size: 420, top: '10%', left: '-8%', color: '#a78bfa', speed: 0.04, blur: 140, opacity: 0.06 },
        { size: 300, top: '75%', left: '90%', color: '#50d4ff', speed: 0.18, blur: 110, opacity: 0.055 },
        { size: 200, top: '45%', left: '55%', color: '#f472b6', speed: 0.48, blur: 90, opacity: 0.04 },
      ]} />
      <SectionAtmosphere number="02" flip />
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">Who I Am</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Split: illustration left, content right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Left: avatar illustration — hidden on mobile ── */}
          <ParallaxLayer speed={0.65} className="hidden lg:block">
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl scale-75" />
              <div className="relative w-full max-w-95 aspect-400/440">
                <AvatarIllustration />
              </div>
            </motion.div>
          </ParallaxLayer>

          {/* ── Right: bio + highlights ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {resumeData.about.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m driven by the challenge of solving complex problems and creating
                elegant solutions. Whether it&apos;s architecting scalable systems or crafting
                delightful user interfaces, I bring attention to detail and a passion for
                excellence.
              </p>
            </motion.div>

            <div className="space-y-3">
              {resumeData.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect p-4 rounded-lg flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-base">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
