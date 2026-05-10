'use client';

import { useRef } from 'react';
import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface ParallaxOptions {
    /**
     * Speed multiplier relative to scroll.
     * 0 = no movement, 0.5 = half speed (slow/background), 1.5 = faster than scroll
     * Negative = moves opposite to scroll direction
     */
    speed?: number;
    /** Axis to apply parallax on ('y' default, 'x' for horizontal drift) */
    axis?: 'x' | 'y';
    /** Pixel range the element travels across the section viewport [from, to] */
    range?: [number, number];
    /** Whether to apply a spring for extra smoothness */
    smooth?: boolean;
}

interface ParallaxResult {
    ref: React.RefObject<HTMLDivElement | null>;
    value: MotionValue<number>;
}

export function useParallax({
    speed = 0.4,
    axis = 'y',
    range,
    smooth = true,
}: ParallaxOptions = {}): ParallaxResult {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const defaultRange: [number, number] = axis === 'y'
        ? [speed * 250, speed * -250]
        : [speed * -120, speed * 120];

    const raw = useTransform(scrollYProgress, [0, 1], range ?? defaultRange);

    const value = useSpring(raw, {
        stiffness: smooth ? 60 : 200,
        damping: smooth ? 20 : 40,
        mass: 0.8,
    });

    return { ref, value };
}
