'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport
 *
 * Uses the Intersection Observer API for efficient scroll detection.
 * Animates elements only when they become visible, improving performance.
 *
 * @param {Object} options - Configuration for IntersectionObserver
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 *
 * @returns {Object} Hook return values
 * @returns {React.RefObject} returns.ref - Ref to attach to target element
 * @returns {boolean} returns.isInView - True when element is visible in viewport
 *
 * References:
 * - Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * - MDN Web Docs: https://mdn.io/IntersectionObserver
 * - Performance Guide: https://web.dev/articles/bfcache#intersection_observer
 *
 * @example
 * const { ref, isInView } = useScrollInView();
 * return (
 *   <div ref={ref}>
 *     {isInView && <motion.div animate={{ opacity: 1 }} />}
 *   </div>
 * );
 */
export function useScrollInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
}
