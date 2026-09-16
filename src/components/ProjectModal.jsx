import { useEffect, useRef, useState } from "react";
import { X, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/motion";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";
import { HudPanel } from "./HudPanel";

const AUTOPLAY_MS = 3000;

// Fake UI bars so dummy slides read like real feature screenshots.
const BARS = ["92%", "78%", "85%", "64%"];

/**
 * Dummy feature preview: a stylized terminal screen. Pure CSS —
 * shown only for projects that don't have real screenshots yet.
 */
const DummySlide = ({ projectName, index, total }) => (
  <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-background select-none">
    <div className="absolute inset-0 bg-terminal-grid opacity-70" aria-hidden="true" />
    <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 py-2 border-b border-border bg-secondary/80">
      <span className="w-2 h-2 rounded-full bg-border" aria-hidden="true" />
      <span className="w-2 h-2 rounded-full bg-border" aria-hidden="true" />
      <span className="w-2 h-2 rounded-full bg-primary/70" aria-hidden="true" />
      <span className="ml-2 font-mono text-[11px] text-muted-foreground truncate">
        {projectName}preview-{index + 1}.png
      </span>
    </div>
    <div className="absolute inset-0 flex flex-col justify-center gap-2 px-6 pt-8">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">$</span> render feature_{index + 1}
      </p>
      {BARS.map((w, i) => (
        <div key={i} className="h-1.5 bg-secondary overflow-hidden">
          <div
            className="h-full bg-primary/50"
            style={{ width: i === index % BARS.length ? "100%" : w }}
          />
        </div>
      ))}
      <p className="font-mono text-[11px] text-primary/80">[ {index + 1} / {total} ]</p>
    </div>
    <span className="absolute top-9 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/40" aria-hidden="true" />
    <span className="absolute top-9 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/40" aria-hidden="true" />
    <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/40" aria-hidden="true" />
    <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/40" aria-hidden="true" />
  </div>
);

/**
 * Real screenshot slide for projects that ship photos
 * (e.g. public/projects/proflow/). The frame trims a few percent off
 * every edge (scale crop) so uneven photo corners are cut away and all
 * slides look uniform, whatever the source size is.
 */
const RealSlide = ({ src, index, total, projectName }) => {
  const file = src.split("/").pop();
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border bg-background select-none flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-secondary/80 shrink-0">
        <span className="w-2 h-2 rounded-full bg-border" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-border" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-primary/70" aria-hidden="true" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground truncate">
          {file}
        </span>
        <span className="ml-auto font-mono text-[11px] text-primary/80 shrink-0">
          [ {index + 1} / {total} ]
        </span>
      </div>
      <div className="relative flex-1 min-h-0 overflow-hidden bg-secondary/30">
        <img
          src={src}
          alt={`${projectName} feature preview ${index + 1} of ${total}`}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover scale-[1.04]"
        />
        {/* Inner frame: crisp edge + gentle top shade for depth */}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/50" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-10 pointer-events-none bg-gradient-to-b from-black/25 to-transparent" aria-hidden="true" />
      </div>
    </div>
  );
};
/**
 * Jarvis-style project detail modal: HUD brackets, scanline sweep,
 * typed title, feature list, and an auto-playing gallery that pauses
 * while the cursor is over it.
 */
export const ProjectModal = ({ project, detail, ui, onClose, closing = false }) => {
  const slides = project.images ?? null;
  const total = slides ? slides.length : 3;
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [typed, setTyped] = useState("");
  const closeRef = useRef(null);
  const reduceMotion =
    typeof window !== "undefined" && prefersReducedMotion();

  // Typed title reveal (once per open)
  useEffect(() => {
    if (reduceMotion) {
      setTyped(project.title);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(project.title.slice(0, i));
      if (i >= project.title.length) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [project.title, reduceMotion]);

  // Auto-play gallery; pauses on hover
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(
      () => setSlide((s) => (s + 1) % total),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused, reduceMotion, total]);

  // ESC to close + lock body scroll AND pause Lenis so the wheel
  // scrolls the modal instead of the page behind it.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    lockScroll();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      unlockScroll();
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[95] overflow-y-auto modal-overlay${closing ? " modal-overlay-out" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      // Lets the wheel / touch scroll natively inside the modal while
      // Lenis is stopped (checked by Lenis before its own handling).
      data-lenis-prevent
    >
      <div
        className="fixed inset-0 bg-background/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative min-h-full flex items-start md:items-center justify-center p-4 pt-24 pb-8">
      <HudPanel staticBrackets className="relative w-full max-w-5xl">
        <div className={`term-panel modal-in relative overflow-hidden flex flex-col md:max-h-[calc(100vh-7rem)]${closing ? " modal-out" : ""}`}>
          <span className="modal-scanline" aria-hidden="true" />
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/60 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/70" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-muted-foreground truncate">
              <span className="text-primary">$</span> cat {project.name}details.txt
            </span>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={ui.close}
              className="ml-auto p-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="modal-stagger md:overflow-y-auto px-5 py-5 md:px-7">
            <p className="font-mono text-sm font-bold text-primary">
              <span className="text-muted-foreground">./</span>
              {project.name}
            </p>
            <h3 className="font-bold text-xl md:text-2xl leading-snug mt-1 min-h-[2rem]">
              {typed}
              {!reduceMotion && typed.length < project.title.length && (
                <span className="inline-block w-[10px] h-[1.2em] ml-1 -mb-1 bg-primary animate-blink" aria-hidden="true" />
              )}
            </h3>
            <p className="font-mono text-xs text-muted-foreground mt-2">
              <span className="text-primary">{detail.role}</span>
              <span className="mx-2 opacity-40">::</span>
              {detail.year}
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-3">
              <span className="text-primary/70">stack:</span> {project.tags.join(" · ")}
            </p>

            <p className="font-mono text-xs font-bold text-primary mt-6 mb-2">
              [ {ui.overview} ]
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {detail.overview}
            </p>

            <p className="font-mono text-xs font-bold text-primary mt-6 mb-2">
              [ {ui.features} ]
            </p>
            <ul className="space-y-1.5">
              {detail.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 font-mono text-[13px] text-foreground/90">
                  <span className="text-primary font-bold shrink-0">[+]</span>
                  {f}
                </li>
              ))}
            </ul>

            <p className="font-mono text-xs font-bold text-primary mt-6 mb-2">
              [ {ui.gallery} ]
              {!slides && (
                <span className="ml-2 text-[11px] font-normal text-muted-foreground">
                  ({ui.dummy})
                </span>
              )}
            </p>
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="relative"
            >
              <div className="overflow-hidden rounded-sm">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                  {slides
                    ? slides.map((src, i) => (
                        <div key={src} className="min-w-full">
                          <RealSlide
                            src={src}
                            index={i}
                            total={total}
                            projectName={project.name}
                          />
                        </div>
                      ))
                    : Array.from({ length: total }, (_, i) => (
                        <div key={i} className="min-w-full">
                          <DummySlide
                            projectName={project.name}
                            index={i}
                            total={total}
                          />
                        </div>
                      ))}
                </div>
              </div>
              {/* Arrows */}
              <button
                onClick={() => setSlide((s) => (s - 1 + total) % total)}
                aria-label="Sebelumnya"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/80 border border-border text-muted-foreground hover:text-primary hover:border-primary/60 rounded-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSlide((s) => (s + 1) % total)}
                aria-label="Berikutnya"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/80 border border-border text-muted-foreground hover:text-primary hover:border-primary/60 rounded-sm transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Dots (or a counter when there are many slides) */}
              {total > 8 ? (
                <p className="font-mono text-xs text-muted-foreground text-center mt-3">
                  [ {slide + 1} / {total} ]
                </p>
              ) : (
                <div className="flex items-center justify-center gap-2 mt-3">
                  {Array.from({ length: total }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={cn(
                        "h-1.5 rounded-none transition-colors",
                        i === slide ? "w-6 bg-primary" : "w-3 bg-border hover:bg-primary/50"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="term-btn-ghost mt-6 w-full sm:w-auto"
              >
                <Github className="w-4 h-4" />
                [ repo ]
              </a>
            )}
            <p className="font-mono text-[11px] text-muted-foreground/70 mt-6 text-center">
              {ui.hint}
            </p>
          </div>
        </div>
      </HudPanel>
      </div>
    </div>
  );
};
