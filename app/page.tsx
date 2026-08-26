import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { RecognitionSection } from '../components/RecognitionSection';
import { portfolio } from '../data/portfolio';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-0">
        <HeroSection portfolio={portfolio} />
        <AboutSection portfolio={portfolio} />
        <ExperienceSection portfolio={portfolio} />
        <ProjectsSection projects={portfolio.projects} />
        <RecognitionSection portfolio={portfolio} />
        <ContactSection portfolio={portfolio} />
      </div>
    </main>
  );
}
