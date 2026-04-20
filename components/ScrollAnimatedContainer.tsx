'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollInView } from '@/hooks/useScrollInView';

interface ScrollAnimatedContainerProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}

/**
 * ScrollAnimatedContainer Component
 *
 * Wrapper component that adds scroll-triggered entrance animations to any content.
 * Elements animate in from either left or right based on the `direction` prop.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {'left' | 'right'} props.direction - Animation direction (default: 'left')
 * @param {number} props.delay - Delay in seconds before animation starts (default: 0)
 * @param {string} props.className - Additional CSS classes
 *
 * References:
 * - Framer Motion: https://www.framer.com/motion/
 * - Motion Variants: https://www.framer.com/motion/animation/#variants
 * - Scroll Animations: https://www.framer.com/motion/scroll-animations/
 * - YouTube Reference: https://youtube.com/shorts/mF8Bkx1zDeo?si=nohOAiqpXuEssBIL
 *
 * @example
 * <ScrollAnimatedContainer direction="left" delay={0.2}>
 *   <div>Content that animates in from the left</div>
 * </ScrollAnimatedContainer>
 *
 * @example
 * <ScrollAnimatedContainer direction="right" className="mb-4">
 *   <p>Content that animates in from the right</p>
 * </ScrollAnimatedContainer>
 */
export function ScrollAnimatedContainer({
  children,
  direction = 'left',
  delay = 0,
  className = '',
}: ScrollAnimatedContainerProps) {
  const { ref, isInView } = useScrollInView();

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
