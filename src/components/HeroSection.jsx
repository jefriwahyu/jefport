import { useEffect, useRef, useState, lazy, Suspense } from "react";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Sparkles,
  MapPin,
  Download,
  Code2,
  Rocket,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion, shouldUseHeavyEffects } from "@/lib/motion";
import { Magnetic } from "./Magnetic";
import { Counter } from "./Counter";

const Hero3D = lazy(() => import("./Hero3D"));

const roles = [
  "Web Developer",
  "Frontend Engineer",
  "Backend Developer",
  "Flutter Developer",
];

const techStack = [
  "React",
  "JavaScript",
  "PHP",
  "Flutter",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "MySQL",
  "CodeIgniter",
  "Git",
];

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 8, suffix: "+", label: "Technologies" },
];

function useTypewriter(words, typeSpeed = 75, deleteSpeed = 40, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return;
    }
    const current = words[index % words.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export const HeroSection = () => {
  const typed = useTypewriter(roles);
  const contentRef = useRef(null);
  const [show3D] = useState(() => shouldUseHeavyEffects());

  // Cinematic parallax: content drifts & fades as hero scrolls away
  useEffect(() => {
    if (prefersReducedMotion() || !contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        yPercent: 14,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const socials = [
    { icon: Github, href: "https://github.com/jefriwahyu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jefri-wahyudiana-putra-96b8a8194/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/jefriwahyuu/", label: "Instagram" },
    { icon: Mail, href: "mailto:jefrywahyu63@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 pt-32 pb-20 overflow-hidden"
    >
      {/* Interactive 3D layer (desktop only, lazy-loaded) */}
      {show3D && (
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      )}

      {/* Backdrop decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-primary/20 blur-[130px] rounded-full animate-blob" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-pink-500/15 blur-[110px] rounded-full animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 -right-24 w-[420px] h-[420px] bg-amber-400/10 blur-[120px] rounded-full animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div ref={contentRef} className="container max-w-6xl mx-auto text-center z-10 relative">
        {/* Availability badge */}
        <div className="opacity-0 animate-fade-in inline-flex items-center gap-2.5 pl-2 pr-5 py-1.5 rounded-full glass text-sm mb-8 hover:scale-105 transition-transform">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15">
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-medium text-muted-foreground">
            Available for <span className="text-foreground font-semibold">freelance & full-time</span>
          </span>
        </div>

        {/* Avatar */}
        <div className="opacity-0 animate-fade-in-delay-1 flex justify-center mb-7">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-pink-500 to-amber-400 rounded-full blur-lg opacity-60 group-hover:opacity-90 transition-opacity animate-gradient bg-[length:200%_auto]" />
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-[3px] bg-gradient-to-br from-primary via-pink-500 to-amber-400">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <span className="font-display text-3xl md:text-4xl font-bold text-gradient">JW</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-card border border-border shadow-lg flex items-center justify-center animate-float">
              <Rocket className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        <p className="opacity-0 animate-fade-in-delay-1 flex items-center justify-center gap-2 text-sm md:text-base font-medium text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          Kediri, Indonesia — Hello, I'm
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-5">
          <span className="opacity-0 animate-fade-in-delay-1 block">Jefri Wahyu</span>
          <span className="opacity-0 animate-fade-in-delay-2 block text-gradient pb-2">
            Putra
          </span>
        </h1>

        {/* Typewriter */}
        <div className="opacity-0 animate-fade-in-delay-3 flex items-center justify-center gap-3 h-9 md:h-11 mb-5 font-display text-lg md:text-2xl font-semibold">
          <Code2 className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
          <span className="text-foreground">{typed}</span>
          <span className="w-[3px] h-6 md:h-8 bg-primary rounded-full animate-blink" />
        </div>

        <p className="opacity-0 animate-fade-in-delay-3 text-muted-foreground text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          I craft <span className="text-foreground font-semibold">responsive, fast & delightful</span> web
          and mobile experiences — from idea to production with clean code and
          thoughtful design.
        </p>

        {/* CTA */}
        <div className="opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Magnetic className="w-full sm:w-auto">
            <a href="#projects" className="cosmic-button group w-full sm:w-auto">
              <span className="absolute inset-y-0 left-0 w-1/3 bg-white/25 blur-md -skew-x-12 animate-shine pointer-events-none" />
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
          <div className="flex gap-3 w-full sm:w-auto">
            <Magnetic className="flex-1 sm:flex-none">
              <a href="#contact" className="ghost-button w-full">
                Let's Talk
              </a>
            </Magnetic>
            <Magnetic className="flex-1 sm:flex-none">
              <a
                href="/resume/CV_JefriWP_ENG.pdf"
                className="ghost-button !px-4 w-full"
                aria-label="Download CV"
              >
                <Download className="w-4 h-4" />
                <span className="sm:hidden">CV</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Socials */}
        <div className="opacity-0 animate-fade-in-delay-5 flex justify-center gap-3 mb-14">
          {socials.map((s) => (
            <Magnetic key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_hsl(var(--primary)/0.5)] hover:border-primary/40 transition-all duration-300"
              >
                <s.icon className="w-5 h-5" />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Stats */}
        <div className="opacity-0 animate-fade-in-delay-5 grid grid-cols-3 gap-3 md:gap-6 max-w-xl mx-auto mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-2 py-4 md:py-6 card-hover"
            >
              <div className="font-display text-2xl md:text-4xl font-bold text-gradient">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[11px] md:text-sm text-muted-foreground font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="opacity-0 animate-fade-in-delay-5 relative max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="flex gap-3 w-max animate-marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-card/70 backdrop-blur border border-border/70 text-muted-foreground whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-pink-500" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          Scroll
        </span>
        <span className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};
