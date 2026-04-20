'use client';

import { motion } from 'framer-motion';
import { AnimatedBackgroundScene } from '../3d/AnimatedBackground';

/**
 * HeroSection Component
 *
 * Features:
 * - 3D animated background using React Three Fiber
 * - Staggered text animations on page load
 * - Smooth scroll-to-section navigation
 *
 * Animation References:
 * - Framer Motion Animations: https://www.framer.com/motion/animation/
 * - Motion Values & Transitions: https://www.framer.com/motion/introduction/#animation-orchestration
 * - Gesture Animations: https://www.framer.com/motion/gesture-animations/
 *
 * @component
 * @example
 * return <HeroSection />
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedBackgroundScene />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Creative Developer</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building immersive digital experiences with cutting-edge technologies.
          Full-stack developer passionate about 3D web, performance, and design.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm">Scroll to explore</p>
          <p className="text-2xl mt-2">↓</p>
        </motion.div>
      </div>
    </section>
  );
}
