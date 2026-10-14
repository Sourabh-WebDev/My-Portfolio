'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';
import { useState } from 'react';
import { ParallaxOrbs, SectionAtmosphere } from '../ParallaxOrbs';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { Icon3D } from '../Icon3D';
import { FallingStack } from '../FallingStack';

/**
 * ContactSection Component
 *
 * Features:
 * - Contact form with input animations
 * - Social media links with icon animations
 * - Staggered animation for form fields
 * - Hover and focus effects on interactive elements
 * - Email integration ready
 *
 * Animation References:
 * - Form Animations: https://www.framer.com/motion/gesture-animations/
 * - Focus States: https://www.framer.com/motion/animation/#variants
 * - Staggered Form Fields: https://www.framer.com/motion/introduction/#animation-orchestration
 * - Interactive States: https://www.framer.com/motion/gestures/
 *
 * @component
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { label: 'Email', icon: Mail, color: '#0ea5e9', href: `mailto:${resumeData.email}` },
    { label: 'LinkedIn', icon: Linkedin, color: '#0a66c2', href: resumeData.social.linkedin },
    { label: 'GitHub', icon: Github, color: '#8b5cf6', href: resumeData.social.github },
    { label: 'Phone', icon: Phone, color: '#10b981', href: `tel:${resumeData.phone.replace(/\s/g, '')}` },
  ];

  return (
    <section id="contact" data-cursor="Stir the stack" className="py-20 px-6 relative overflow-hidden">
      <ParallaxOrbs orbs={[
        { size: 520, top: '5%', left: '-6%', color: '#a78bfa', speed: 0.05, blur: 145, opacity: 0.065 },
        { size: 300, top: '80%', left: '88%', color: '#50d4ff', speed: 0.20, blur: 105, opacity: 0.06 },
        { size: 180, top: '48%', left: '50%', color: '#f472b6', speed: 0.53, blur: 88, opacity: 0.04 },
      ]} />
      <SectionAtmosphere number="08" flip />
      <FallingStack />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-effect p-5 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">Let&apos;s Connect</h3>
              <p className="text-muted-foreground text-lg">
                I&apos;m always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="glass-effect p-4 rounded-lg flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon3D icon={link.icon} color={link.color} size={42} />
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.label === 'Email' ? resumeData.email : link.label === 'Phone' ? resumeData.phone : `Visit my ${link.label}`}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glass-effect p-5 sm:p-8 rounded-xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-effect"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
