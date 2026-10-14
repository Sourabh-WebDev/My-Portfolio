'use client';

import { motion } from 'framer-motion';
import { AnimatedBackgroundScene } from '../3d/AnimatedBackground';
import { DeveloperIllustration } from '../Illustrations';
import { ParallaxOrbs, ParallaxLayer, SectionAtmosphere } from '../ParallaxOrbs';

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
      data-cursor="Scroll to explore"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedBackgroundScene />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/20 to-background pointer-events-none" />

      {/* Parallax ambient orbs */}
      <ParallaxOrbs orbs={[
        { size: 500, top: '20%', left: '-5%', color: '#50d4ff', speed: 0.04, blur: 160, opacity: 0.055 },
        { size: 380, top: '70%', left: '85%', color: '#a78bfa', speed: 0.14, blur: 120, opacity: 0.055 },
        { size: 260, top: '50%', left: '40%', color: '#f472b6', speed: 0.38, blur: 100, opacity: 0.04 },
      ]} />
      <SectionAtmosphere number="01" />

      {/* Split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center py-12">

        {/* ── Left: text with subtle upward parallax ── */}
        <ParallaxLayer speed={0.15} className="z-10">
          <div>
            <motion.p
              className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Full-Stack · React · Node.js · AI
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="gradient-text">Creative</span>
              <br />
              <span className="text-foreground">Developer</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Full Stack Developer with 5+ years of experience building modern, scalable,
              and high-performance web applications with React.js, Next.js, Node.js, and TypeScript.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
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

            {/* Stats row */}
            <motion.div
              className="mt-12 flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { value: '5+', label: 'Years Exp.' },
                { value: '20+', label: 'Projects' },
                { value: '10+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </ParallaxLayer>

        {/* ── Right: illustration — hidden on mobile to keep it clean ── */}
        <ParallaxLayer speed={0.70} className="hidden lg:block">
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-75" />
            <div className="relative w-full max-w-125 aspect-520/480">
              <DeveloperIllustration />
            </div>
          </motion.div>
        </ParallaxLayer>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-xs tracking-widest uppercase mb-1">Scroll</p>
        <p className="text-xl">↓</p>
      </motion.div>
    </section>
  );
}
