import { PageLoader } from '@/components/PageLoader';
import { CursorEffect } from '@/components/CursorEffect';
import { Navigation } from '@/components/Navigation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { SkillsSection } from '@/components/sections/Skills';
import { ExperienceSection } from '@/components/sections/Experience';
import { InternshipsSection } from '@/components/sections/Internships';
import { ProjectsSection } from '@/components/sections/Projects';
import { CertificationsSection } from '@/components/sections/Certifications';
import { ContactSection } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <PageLoader />
      <CursorEffect />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <InternshipsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
