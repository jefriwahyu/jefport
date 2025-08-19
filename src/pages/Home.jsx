import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden text-center">
      {/* Theme Toggle*/}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar Content */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
