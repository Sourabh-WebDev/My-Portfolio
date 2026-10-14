'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Icon3D } from './Icon3D';
import { techIcons } from './Illustrations';

/**
 * Stacked-slides page loader (inspired by structureengineering.com.au).
 *
 * Phases:
 *  1. intro     – a small window (the viewport scaled down) sits over a giant monogram
 *  2. playing   – skill slides drop out of the window one after another
 *  3. expanding – the final name slide grows to fill the screen
 *  4. done      – overlay fades out and unmounts, scrolling is restored
 */

const SLIDES = [
    { skill: 'React.js', label: 'React.js' },
    { skill: 'Next.js', label: 'Next.js' },
    { skill: 'TypeScript', label: 'TypeScript' },
    { skill: 'Node.js', label: 'Node.js' },
    { skill: 'Express.js', label: 'Express.js' },
    { skill: 'MongoDB', label: 'MongoDB' },
    { skill: 'Tailwind CSS', label: 'Tailwind CSS' },
    { skill: 'Artificial Intelligence (AI)', label: 'AI' },
];

const EASE = [0.76, 0, 0.24, 1] as const;
const START_DELAY = 0.45; // s – monogram on screen before the first drop
const STEP = 0.26; // s – gap between slide drops
const DROP = 0.42; // s – duration of a single drop
const HOLD = 0.3; // s – pause on the name slide before expanding
const EXPAND = 0.7; // s – window → full screen

export function PageLoader() {
    const reduceMotion = useReducedMotion();
    const [phase, setPhase] = useState<'intro' | 'playing' | 'expanding' | 'done'>('intro');
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (reduceMotion) {
            setPhase('done');
            return;
        }

        const root = document.documentElement;
        const prevOverflow = root.style.overflow;
        root.style.overflow = 'hidden';

        const expandAt = (START_DELAY + (SLIDES.length - 1) * STEP + DROP + HOLD) * 1000;
        const timers = [
            setTimeout(() => setPhase('playing'), 50),
            setTimeout(() => setPhase('expanding'), expandAt),
            setTimeout(() => {
                setPhase('done');
                root.style.overflow = prevOverflow;
            }, expandAt + EXPAND * 1000 + 150),
        ];

        return () => {
            timers.forEach(clearTimeout);
            root.style.overflow = prevOverflow;
        };
    }, [reduceMotion]);

    const playing = phase === 'playing' || phase === 'expanding';
    const counter = Math.min(current + 1, SLIDES.length);

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-200 bg-background overflow-hidden select-none"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    aria-hidden="true"
                >
                    {/* ── Giant monogram behind the window ── */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <span
                            className="font-black leading-none tracking-[-0.06em] text-transparent"
                            style={{
                                fontSize: 'min(72vh, 62vw)',
                                WebkitTextStroke: '2px rgba(80, 212, 255, 0.28)',
                            }}
                        >
                            SV
                        </span>
                    </motion.div>

                    {/* ── Window: the full viewport scaled down, grows to fill the screen ── */}
                    <div
                        className={`absolute inset-0 overflow-hidden transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
                            phase === 'expanding' ? 'scale-100' : 'scale-[0.5] md:scale-[0.28]'
                        }`}
                        style={{ transitionDuration: `${EXPAND * 1000}ms` }}
                    >
                        {/* Final slide – revealed after every skill has dropped */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background text-center px-6">
                            <p className="text-sm md:text-base font-semibold tracking-[0.4em] uppercase text-primary mb-6">
                                Portfolio
                            </p>
                            <p className="font-black leading-[0.9] tracking-[-0.04em]" style={{ fontSize: 'clamp(3.5rem, 13vw, 14rem)' }}>
                                <span className="gradient-text">Sourabh</span>
                                <br />
                                <span className="text-foreground">Verma</span>
                            </p>
                            <p className="mt-8 text-base md:text-xl tracking-[0.3em] uppercase text-muted-foreground">
                                Full Stack Developer
                            </p>
                        </div>

                        {/* Skill slides – first one on top */}
                        {SLIDES.map(({ skill, label }, i) => {
                            const cfg = techIcons[skill];
                            return (
                                <motion.div
                                    key={skill}
                                    className="absolute inset-0 flex flex-col items-center justify-center gap-10"
                                    style={{
                                        zIndex: SLIDES.length - i,
                                        background: `radial-gradient(110% 85% at 50% 40%, ${cfg.color} 0%, color-mix(in oklab, ${cfg.color} 30%, #050505) 55%, #050505 100%)`,
                                    }}
                                    initial={{ y: 0 }}
                                    animate={playing ? { y: '100%' } : { y: 0 }}
                                    transition={{ duration: DROP, ease: EASE, delay: START_DELAY + i * STEP }}
                                    onAnimationComplete={() => playing && setCurrent(i + 1)}
                                >
                                    <Icon3D
                                        icon={cfg.icon}
                                        color={cfg.color}
                                        glyphColor={cfg.glyph}
                                        size={260}
                                        interactive={false}
                                    />
                                    <p
                                        className="font-black text-white tracking-[-0.03em] leading-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
                                        style={{ fontSize: 'clamp(3rem, 10vw, 10rem)' }}
                                    >
                                        {label}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ── Corner labels ── */}
                    <motion.div
                        className="absolute inset-x-6 md:inset-x-10 bottom-6 md:bottom-8 flex justify-between items-end text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground/70"
                        animate={{ opacity: phase === 'expanding' ? 0 : 1 }}
                        transition={{ duration: 0.25 }}
                    >
                        <span>Sourabh Verma</span>
                        <span className="font-mono tracking-[0.15em]">
                            {String(counter).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
