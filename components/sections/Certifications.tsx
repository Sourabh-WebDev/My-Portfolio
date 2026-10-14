'use client';

import { motion } from 'framer-motion';
import { Award, BadgeCheck, Trophy, ExternalLink } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';
import { Icon3D } from '../Icon3D';
import { ParallaxOrbs, ParallaxLayer, SectionAtmosphere } from '../ParallaxOrbs';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut' },
    },
};

const categoryConfig = {
    certification: {
        icon: BadgeCheck,
        color: '#50d4ff',
        face: '#0ea5e9',
        bg: 'bg-primary/10',
        border: 'border-primary/30',
        iconColor: 'text-primary',
        label: 'Certification',
    },
    achievement: {
        icon: Trophy,
        color: '#a78bfa',
        face: '#8b5cf6',
        bg: 'bg-accent/10',
        border: 'border-accent/30',
        iconColor: 'text-accent',
        label: 'Achievement',
    },
    award: {
        icon: Award,
        color: '#f472b6',
        face: '#ec4899',
        bg: 'bg-[#f472b6]/10',
        border: 'border-[#f472b6]/30',
        iconColor: 'text-[#f472b6]',
        label: 'Award',
    },
};

export function CertificationsSection() {
    const certs = resumeData.certifications;
    const certifications = certs.filter((c) => c.category === 'certification');
    const achievements = certs.filter((c) => c.category !== 'certification');

    return (
        <section id="certifications" className="py-20 px-6 bg-card/30 relative overflow-hidden">
            <ParallaxOrbs
                orbs={[
                    { size: 520, top: '-8%', left: '-6%', color: '#50d4ff', speed: 0.05, blur: 150, opacity: 0.06 },
                    { size: 300, top: '75%', left: '88%', color: '#a78bfa', speed: 0.20, blur: 110, opacity: 0.06 },
                    { size: 185, top: '45%', left: '50%', color: '#f472b6', speed: 0.52, blur: 90, opacity: 0.04 },
                ]}
            />
            <SectionAtmosphere number="07" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                        Credentials & Milestones
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="gradient-text">Certifications</span>
                        <br />
                        <span className="text-foreground text-4xl md:text-5xl">&amp; Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                {/* Stats bar */}
                <ParallaxLayer speed={0.1}>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { value: `${certifications.length}`, label: 'Certifications', color: 'text-primary', border: 'border-primary/30' },
                            { value: `${achievements.filter((a) => a.category === 'achievement').length}`, label: 'Achievements', color: 'text-accent', border: 'border-accent/30' },
                            { value: `${achievements.filter((a) => a.category === 'award').length}`, label: 'Awards', color: 'text-[#f472b6]', border: 'border-[#f472b6]/30' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className={`glass-effect rounded-xl p-4 sm:p-6 text-center border ${stat.border}`}
                            >
                                <p className={`text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </ParallaxLayer>

                {/* Certifications grid */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h3 className="text-xl font-semibold text-muted-foreground mb-6 flex items-center gap-2">
                        <Icon3D icon={BadgeCheck} color={categoryConfig.certification.face} size={30} interactive={false} />
                        Certifications
                    </h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5"
                    >
                        {certifications.map((cert) => {
                            const cfg = categoryConfig[cert.category];
                            return (
                                <motion.div
                                    key={cert.title}
                                    variants={cardVariants}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    className={`glass-effect p-6 rounded-xl border ${cfg.border} group flex gap-4 items-start`}
                                >
                                    <Icon3D icon={cfg.icon} color={cfg.face} size={46} />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h4 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors">
                                                {cert.title}
                                            </h4>
                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                                                    aria-label={`View certificate: ${cert.title}`}
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            )}
                                        </div>
                                        {cert.issuer && <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>}
                                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.iconColor} border ${cfg.border}`}>
                                                {cfg.label}
                                            </span>
                                            {cert.date && <span className="text-xs text-muted-foreground">{cert.date}</span>}
                                            {cert.credentialId && (
                                                <span className="text-xs text-muted-foreground/60 font-mono truncate">
                                                    ID: {cert.credentialId}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Achievements & Awards grid */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold text-muted-foreground mb-6 flex items-center gap-2">
                        <Icon3D icon={Trophy} color={categoryConfig.achievement.face} size={30} interactive={false} />
                        Achievements &amp; Awards
                    </h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    >
                        {achievements.map((cert) => {
                            const cfg = categoryConfig[cert.category];
                            return (
                                <motion.div
                                    key={cert.title}
                                    variants={cardVariants}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    className={`glass-effect p-6 rounded-xl border ${cfg.border} group text-center flex flex-col items-center gap-3`}
                                >
                                    <Icon3D icon={cfg.icon} color={cfg.face} size={60} shape="circle" />
                                    <div>
                                        <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h4>
                                        {cert.issuer && <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>}
                                        <span className="inline-block text-xs font-medium mt-2 px-2 py-0.5 rounded-full border"
                                            style={{ color: cfg.color, borderColor: `${cfg.color}40`, background: `${cfg.color}10` }}>
                                            {cert.date ?? cfg.label}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
