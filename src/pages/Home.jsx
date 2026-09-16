import { useEffect, useState } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "@/lib/motion";
import { onScrollLockChange } from "@/lib/scrollLock";
import { LanguageProvider } from "@/lib/i18n";
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
import { Janis } from "../components/Janis";
import { ScrollCable } from "../components/ScrollCable";
import { DustField } from "../components/DustField";

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

  // Lenis smooth scroll (wheel only; skipped on touch-reduced setups).
  // Kept snappy (short duration) so it never feels laggy behind the wheel.
  useEffect(() => {
    if (booting || prefersReducedMotion()) return;
    const lenis = new Lenis({ duration: 0.7, smoothWheel: true });
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -84, duration: 1.2 });
    };
    document.addEventListener("click", onClick);
    // Pause Lenis while a modal holds the scroll lock so the wheel
    // scrolls the modal instead of the page behind it.
    const offLock = onScrollLockChange((locked) => {
      if (locked) lenis.stop();
      else lenis.start();
    });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      offLock();
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
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

  const reduceMotion =
    typeof window !== "undefined" && prefersReducedMotion();

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {booting && <BootSequence onDone={finishBoot} />}
      {/* Scroll FX layers (behind content, non-interactive).
          Cable SVG hides itself on mobile via CSS; triggers still run. */}
      {!reduceMotion && <DustField />}
      {!reduceMotion && <ScrollCable />}
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
      <Janis />
    </div>
    </LanguageProvider>
  );
};
