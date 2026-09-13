import { useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Preloader } from "../components/Preloader";
import { CustomCursor } from "../components/CustomCursor";

export const Home = () => {
  const [loading, setLoading] = useState(() => !prefersReducedMotion());

  // Buttery smooth scrolling (Lenis + GSAP ticker), started after preloader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Route all in-page anchors through Lenis for cinematic glides
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -84, duration: 1.5 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <CustomCursor />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar Content */}
      <Navbar />
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};
