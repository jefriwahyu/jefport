import { useEffect, useState, lazy, Suspense } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { prefersReducedMotion, shouldUseHeavyEffects } from "@/lib/motion";
import { useLang, content } from "@/lib/i18n";
import { HudPanel } from "./HudPanel";

const HeroWire = lazy(() => import("./Hero3D"));

const roles = [
  "Backend Developer",
  "Full-Stack Developer",
  "Software Engineer",
];

function useTypewriter(words, typeSpeed = 65, deleteSpeed = 32, pause = 1700) {
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
  const [show3D] = useState(() => shouldUseHeavyEffects());
  const { lang } = useLang();
  const t = content[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Static grid backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-terminal-grid" />
      </div>

      {/* Low-poly wireframe, desktop only, lazy-loaded */}
      {show3D && (
        <Suspense fallback={null}>
          <HeroWire />
        </Suspense>
      )}

      {/* Scanlines — hero only */}
      <div className="scanlines" aria-hidden="true" />

      <div className="container max-w-3xl mx-auto relative z-10">
        {/* Avatar HUD assembly */}
        <div className="flex justify-center mb-10">
          <div className="relative flex items-center gap-4 md:gap-8">
            {/* Left readout */}
            <div className="hidden sm:flex flex-col items-end gap-1 font-mono text-[11px] leading-tight text-muted-foreground" aria-hidden="true">
              <span className="text-primary">id: jefri</span>
              <span>clr: #00ff41</span>
              <span>scan: 001</span>
            </div>

            <div className="relative group">
              {/* Glow halo */}
              <div className="absolute -inset-6 rounded-full bg-primary/20 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" aria-hidden="true" />
              {/* Counter-rotating dashed orbit */}
              <svg
                className="absolute -inset-3.5 w-[calc(100%+28px)] h-[calc(100%+28px)] animate-spin-rev text-primary/50"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
                <circle cx="50" cy="2" r="2.5" fill="currentColor" stroke="none" />
              </svg>
              {/* Photo with scan ring + theme treatment */}
              <div className="scan-ring relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-card border border-primary/40 overflow-hidden">
                <img
                  src="/fotoprofil.png"
                  alt="Foto profil Jefri Wahyudiana Putra"
                  className="w-full h-full object-cover saturate-[.85] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-primary/30 pointer-events-none" aria-hidden="true" />
              </div>
              {/* Status chip */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-bold px-2.5 py-1 rounded-sm bg-background border border-primary/60 text-primary shadow-[0_0_16px_-4px_hsl(var(--primary)/0.7)]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-blink" aria-hidden="true" />
                ID VERIFIED
              </div>
            </div>

            {/* Right readout */}
            <div className="hidden sm:flex flex-col gap-1 font-mono text-[11px] leading-tight text-muted-foreground" aria-hidden="true">
              <span className="text-primary">sts: online</span>
            </div>
          </div>
        </div>

        <p className="text-center font-mono text-xs text-muted-foreground mb-4">
          {t.greeting}
        </p>

        <HudPanel>
          <div id="hero-terminal" className="term-panel overflow-hidden">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/60">
              <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">jefri@jefport: ~</span>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-8 font-mono">
              <p className="text-sm md:text-base text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
                Jefri Wahyudiana Putra
              </h1>

              <p className="text-sm md:text-base text-muted-foreground mt-5">
                <span className="text-primary">$</span> cat role.txt
              </p>
              <p className="text-lg md:text-2xl font-bold text-primary text-glow mt-1 min-h-[2rem] md:min-h-[2.5rem]">
                {typed}
                <span className="inline-block w-[10px] h-[1.2em] ml-1 -mb-1 bg-primary animate-blink" aria-hidden="true" />
              </p>

              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mt-4 font-sans">
                {t.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a href="#projects" className="term-btn">
                  [ {t.ctaProjects} ]
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/resume/CV_Jefri_Wahyudiana_Putra.pdf" className="term-btn-ghost">
                  <Download className="w-4 h-4" />
                  [ {t.ctaCv} ]
                </a>
                <a href="#contact" className="term-btn-ghost">
                  <Mail className="w-4 h-4" />
                  [ {t.ctaContact} ]
                </a>
              </div>
            </div>
          </div>
        </HudPanel>

        <p className="text-center font-mono text-xs text-muted-foreground mt-8">
          <span className="text-primary">▸</span> {t.scrollHint}
          <span className="animate-blink">_</span>
        </p>
      </div>
    </section>
  );
};
