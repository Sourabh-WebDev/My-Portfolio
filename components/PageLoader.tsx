'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Eremia-style page loader.
 *
 * Phases:
 *  1. counting  – giant counter animates 0 → 100 (~1.8 s) with progress bar
 *  2. splitting – two curtain halves slide off screen (top ↑, bottom ↓)
 *  3. done      – component unmounts, site becomes interactive
 */
export function PageLoader() {
    const [count, setCount] = useState(0);
    const [phase, setPhase] = useState<'counting' | 'splitting' | 'done'>('counting');

    useEffect(() => {
        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            // ease-out quad
            const eased = 1 - (1 - t) * (1 - t);
            setCount(Math.floor(eased * 100));

            if (t < 1) {
                requestAnimationFrame(tick);
            } else {
                setCount(100);
                setTimeout(() => setPhase('splitting'), 280);
                setTimeout(() => setPhase('done'), 1100);
            }
        };

        requestAnimationFrame(tick);
    }, []);

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <>
                    {/* ── Top curtain half ── */}
                    <motion.div
                        key="loader-top"
                        className="fixed inset-x-0 top-0 z-[200] bg-background"
                        style={{ height: '50vh' }}
                        animate={phase === 'splitting' ? { y: '-100%' } : { y: 0 }}
                        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.04 }}
                    >
                        {/* Seam accent line */}
                        <span className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
                    </motion.div>

                    {/* ── Bottom curtain half ── */}
                    <motion.div
                        key="loader-bottom"
                        className="fixed inset-x-0 bottom-0 z-[200] bg-background"
                        style={{ height: '50vh' }}
                        animate={phase === 'splitting' ? { y: '100%' } : { y: 0 }}
                        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.04 }}
                    >
                        {/* Seam accent line */}
                        <span className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />

                        {/* Progress bar */}
                        <div className="absolute bottom-8 left-10 right-10">
                            <div className="h-px bg-border/30 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-75"
                                    style={{ width: `${count}%` }}
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
                                    Loading
                                </span>
                                <span className="text-[10px] font-mono text-muted-foreground/50">{count}%</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Centre overlay — sits above both halves ── */}
                    <motion.div
                        key="loader-center"
                        className="fixed inset-0 z-[201] flex items-center justify-center pointer-events-none"
                        animate={
                            phase === 'splitting'
                                ? { opacity: 0, scale: 0.9 }
                                : { opacity: 1, scale: 1 }
                        }
                        transition={{ duration: 0.25 }}
                    >
                        <div className="text-center select-none">
                            {/* Label */}
                            <motion.p
                                className="text-[10px] font-semibold tracking-[0.35em] uppercase text-primary mb-5"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: 0.15 }}
                            >
                                Sourabh Verma
                            </motion.p>

                            {/* Giant counter — scales with viewport */}
                            <p
                                className="font-black leading-none text-foreground"
                                style={{
                                    fontSize: 'clamp(5rem, 18vw, 13rem)',
                                    letterSpacing: '-0.04em',
                                }}
                            >
                                {String(count).padStart(2, '0')}
                            </p>

                            {/* Sub-label */}
                            <motion.p
                                className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.45, delay: 0.35 }}
                            >
                                Front-End Developer
                            </motion.p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
