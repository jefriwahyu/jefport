import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { BootSequence } from "../components/BootSequence";
import { Jarvis } from "../components/Jarvis";

const BOOT_KEY = "jefport-booted";

export const Home = () => {
  const [booting, setBooting] = useState(() => {
    if (prefersReducedMotion()) return false;
    try {
      return !sessionStorage.getItem(BOOT_KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    document.body.style.overflow = booting ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [booting]);

  const finishBoot = () => {
    try {
      sessionStorage.setItem(BOOT_KEY, "1");
    } catch {
      /* storage unavailable */
    }
    setBooting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {booting && <BootSequence onDone={finishBoot} />}
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutMe />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <Jarvis />
    </div>
  );
};
