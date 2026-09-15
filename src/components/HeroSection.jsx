import { useEffect, useState, lazy, Suspense } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { prefersReducedMotion, shouldUseHeavyEffects } from "@/lib/motion";
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
        {/* Avatar with slow scan ring */}
        <div className="flex justify-center mb-8">
          <div className="scan-ring w-24 h-24 md:w-28 md:h-28 rounded-full bg-card border border-border overflow-hidden">
            <img
              src="/fotoprofil.png"
              alt="Foto profil Jefri Wahyudiana Putra"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <HudPanel>
          <div className="term-panel overflow-hidden">
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
                <span className="text-muted-foreground font-medium text-lg md:text-2xl"> (Wahyudi)</span>
              </h1>

              <p className="text-sm md:text-base text-muted-foreground mt-5">
                <span className="text-primary">$</span> cat role.txt
              </p>
              <p className="text-lg md:text-2xl font-bold text-primary text-glow mt-1 min-h-[2rem] md:min-h-[2.5rem]">
                {typed}
                <span className="inline-block w-[10px] h-[1.2em] ml-1 -mb-1 bg-primary animate-blink" aria-hidden="true" />
              </p>

              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mt-4 font-sans">
                Fresh graduate D3 Informatika yang membangun sistem back-end yang aman
                dan andal — dari e-voting hingga aplikasi AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a href="#projects" className="term-btn">
                  [ Lihat Projects ]
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/resume/CV_Jefri_Wahyudiana_Putra.pdf" className="term-btn-ghost">
                  <Download className="w-4 h-4" />
                  [ Download CV ]
                </a>
                <a href="#contact" className="term-btn-ghost">
                  <Mail className="w-4 h-4" />
                  [ Hubungi Saya ]
                </a>
              </div>
            </div>
          </div>
        </HudPanel>

        <p className="text-center font-mono text-xs text-muted-foreground mt-8">
          <span className="text-primary">▸</span> scroll untuk menjelajah
          <span className="animate-blink">_</span>
        </p>
      </div>
    </section>
  );
};
