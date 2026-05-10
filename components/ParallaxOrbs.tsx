'use client';

import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

interface OrbConfig {
    size: number;
    top: string;
    left: string;
    color: string;
    speed: number;
    blur: number;
    opacity: number;
}

const DEFAULT_ORBS: OrbConfig[] = [
    { size: 560, top: '-5%', left: '-6%', color: '#50d4ff', speed: 0.04, blur: 160, opacity: 0.05 },
    { size: 360, top: '62%', left: '88%', color: '#a78bfa', speed: 0.18, blur: 110, opacity: 0.06 },
    { size: 210, top: '35%', left: '52%', color: '#f472b6', speed: 0.42, blur: 90, opacity: 0.045 },
    { size: 145, top: '82%', left: '18%', color: '#50d4ff', speed: 0.65, blur: 70, opacity: 0.055 },
];

interface ParallaxOrbProps {
    orb: OrbConfig;
}

function ParallaxOrb({ orb }: ParallaxOrbProps) {
    const { ref, value } = useParallax({ speed: orb.speed, smooth: true });

    return (
        <motion.div
            ref={ref}
            aria-hidden="true"
            className="absolute pointer-events-none rounded-full will-change-transform"
            style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: orb.left,
                background: orb.color,
                filter: `blur(${orb.blur}px)`,
                opacity: orb.opacity,
                y: value,
                translateX: '-50%',
                translateY: '-50%',
            }}
        />
    );
}

interface ParallaxOrbsProps {
    orbs?: OrbConfig[];
}

export function ParallaxOrbs({ orbs = DEFAULT_ORBS }: ParallaxOrbsProps) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {orbs.map((orb, i) => (
                <ParallaxOrb key={i} orb={orb} />
            ))}
        </div>
    );
}

/* ── ParallaxLayer ─────────────────────────────────────────── */

interface ParallaxLayerProps {
    children: React.ReactNode;
    speed?: number;
    axis?: 'x' | 'y';
    className?: string;
}

export function ParallaxLayer({
    children,
    speed = 0.3,
    axis = 'y',
    className = '',
}: ParallaxLayerProps) {
    const { ref, value } = useParallax({ speed, axis });

    return (
        <motion.div
            ref={ref}
            className={`will-change-transform ${className}`}
            style={axis === 'y' ? { y: value } : { x: value }}
        >
            {children}
        </motion.div>
    );
}

/* ── SectionAtmosphere ─────────────────────────────────────────
   Lucy-style multi-depth decorative layer.
   Drop inside any section with position:relative overflow:hidden.
─────────────────────────────────────────────────────────────── */

function Ring({ size, top, left, color, opacity, speed }: {
    size: number; top: string; left: string;
    color: string; opacity: number; speed: number;
}) {
    const { ref, value } = useParallax({ speed, smooth: true });
    return (
        <motion.div
            ref={ref}
            className="absolute pointer-events-none"
            style={{ top, left, width: size, height: size, y: value, translateX: '-50%', translateY: '-50%' }}
            aria-hidden="true"
        >
            <svg viewBox="0 0 100 100" width="100%" height="100%">
                <circle cx="50" cy="50" r="48" fill="none" stroke={color} strokeWidth="0.6" opacity={opacity} />
            </svg>
        </motion.div>
    );
}

function Cross({ size, top, left, color, opacity, speed, rotate = 0 }: {
    size: number; top: string; left: string;
    color: string; opacity: number; speed: number; rotate?: number;
}) {
    const { ref, value } = useParallax({ speed, smooth: true });
    return (
        <motion.div
            ref={ref}
            className="absolute pointer-events-none"
            style={{ top, left, width: size, height: size, y: value, rotate, translateX: '-50%', translateY: '-50%' }}
            aria-hidden="true"
        >
            <svg viewBox="0 0 24 24" width="100%" height="100%">
                <line x1="12" y1="1" x2="12" y2="23" stroke={color} strokeWidth="1.5" opacity={opacity} />
                <line x1="1" y1="12" x2="23" y2="12" stroke={color} strokeWidth="1.5" opacity={opacity} />
            </svg>
        </motion.div>
    );
}

function FloatDot({ size, top, left, color, opacity, speed }: {
    size: number; top: string; left: string;
    color: string; opacity: number; speed: number;
}) {
    const { ref, value } = useParallax({ speed, smooth: true });
    return (
        <motion.div
            ref={ref}
            className="absolute pointer-events-none rounded-full"
            style={{ top, left, width: size, height: size, background: color, opacity, y: value, translateX: '-50%', translateY: '-50%' }}
            aria-hidden="true"
        />
    );
}

function Watermark({ number, flip }: { number: string; flip: boolean }) {
    const { ref, value } = useParallax({ speed: 0.05, smooth: true });
    return (
        <motion.div
            ref={ref}
            className="absolute pointer-events-none select-none"
            style={{ [flip ? 'left' : 'right']: '-2%', bottom: '-2%', y: value }}
            aria-hidden="true"
        >
            <span
                className="font-black leading-none text-foreground"
                style={{ fontSize: 'clamp(7rem, 20vw, 17rem)', opacity: 0.028, letterSpacing: '-0.05em' }}
            >
                {number}
            </span>
        </motion.div>
    );
}

interface SectionAtmosphereProps {
    /** Two-digit section counter, e.g. "01" */
    number?: string;
    /** Mirror horizontal layout */
    flip?: boolean;
}

/**
 * Adds Skrollex/Lucy-style multi-depth parallax atmosphere to a section.
 * Layers: giant watermark (speed 0.05) → rings (0.07–0.13) → crosses (0.2–0.38) → dots (0.45–0.6).
 */
export function SectionAtmosphere({ number, flip = false }: SectionAtmosphereProps) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Layer 1 – watermark (barely moves = very far) */}
            {number && <Watermark number={number} flip={flip} />}

            {/* Layer 2 – large wireframe rings (slow = deep background) */}
            <Ring size={420} top={flip ? '72%' : '18%'} left={flip ? '8%' : '90%'} color="#50d4ff" opacity={0.09} speed={0.07} />
            <Ring size={240} top={flip ? '12%' : '78%'} left={flip ? '88%' : '10%'} color="#a78bfa" opacity={0.08} speed={0.13} />

            {/* Layer 3 – cross marks (mid depth) */}
            <Cross size={34} top="28%" left={flip ? '80%' : '20%'} color="#50d4ff" opacity={0.22} speed={0.20} />
            <Cross size={22} top="62%" left={flip ? '18%' : '78%'} color="#a78bfa" opacity={0.18} speed={0.30} rotate={45} />
            <Cross size={16} top="46%" left="52%" color="#f472b6" opacity={0.14} speed={0.38} />

            {/* Layer 4 – small dots (fastest = nearest viewer) */}
            <FloatDot size={6} top="18%" left="62%" color="#50d4ff" opacity={0.40} speed={0.45} />
            <FloatDot size={4} top="52%" left="33%" color="#a78bfa" opacity={0.35} speed={0.55} />
            <FloatDot size={8} top="82%" left="72%" color="#f472b6" opacity={0.32} speed={0.60} />
        </div>
    );
}

