'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 },
    },
};

export function InternshipsSection() {
    return (
        <section id="internships" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="gradient-text">Internships</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {resumeData.internships.map((internship, index) => (
                        <motion.article
                            key={`${internship.company}-${index}`}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            className="glass-effect p-6 rounded-xl border border-primary/20"
                        >
                            <h3 className="text-2xl font-bold mb-1">{internship.title}</h3>
                            <p className="text-primary font-semibold mb-2">{internship.type}</p>
                            <p className="text-foreground/90">{internship.company}</p>
                            <p className="text-muted-foreground">{internship.location}</p>
                            <p className="text-muted-foreground text-sm mt-3">{internship.period}</p>

                            <ul className="space-y-2 mt-4">
                                {internship.description.map((item, i) => (
                                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-1">▸</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
