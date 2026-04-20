import { Navigation } from '@/components/Navigation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { SkillsSection } from '@/components/sections/Skills';
import { ExperienceSection } from '@/components/sections/Experience';
import { ProjectsSection } from '@/components/sections/Projects';
import { ContactSection } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
