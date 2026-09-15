import { useEffect, useRef } from "react";
import { prefersReducedMotion, isMobileViewport } from "@/lib/motion";

const GLYPHS = "01{}[]();<>=+-*/#$&|!?:;,.abcdef0123456789".split("");
const FONT = 13;
const MAX_COLS = 120;

/**
 * CodeRain: faint falling code glyphs behind everything — like a program
 * running in the background. Single fixed canvas, DPR 1 on purpose to
 * keep it cheap. Disabled on mobile & reduced motion, paused when the
 * tab is hidden.
 */
export const CodeRain = () => {
  const canvasRef = useRef(null);
  const off =
    typeof window !== "undefined" &&
    (prefersReducedMotion() || isMobileViewport());

  useEffect(() => {
    if (off) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let cols = 0;
    let drops = [];
    let rafId = 0;
    let running = true;
    let last = performance.now();

    const seed = () => {
      cols = Math.min(MAX_COLS, Math.max(24, Math.floor(w / FONT)));
      drops = Array.from({ length: cols }, () => ({
        y: Math.random() * (h / FONT),
        speed: 3 + Math.random() * 7, // rows per second
        a: 0.04 + Math.random() * 0.08,
      }));
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      // Must match the page background so the canvas melts into it.
      ctx.fillStyle = "rgb(10, 10, 10)";
      ctx.fillRect(0, 0, w, h);
      seed();
    };

    const frame = (now) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      // Fade previous frame for short trails.
      ctx.fillStyle = "rgba(10, 10, 10, 0.09)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${FONT}px "JetBrains Mono", ui-monospace, monospace`;
      const x0 = (w - cols * FONT) / 2;
      for (let i = 0; i < cols; i++) {
        const d = drops[i];
        ctx.fillStyle = `rgba(0, 255, 65, ${d.a})`;
        ctx.fillText(
          GLYPHS[(Math.random() * GLYPHS.length) | 0],
          x0 + i * FONT,
          d.y * FONT
        );
        d.y += d.speed * dt;
        if (d.y * FONT > h + FONT) {
          d.y = -Math.random() * 8;
          d.speed = 3 + Math.random() * 7;
        }
      }
      rafId = requestAnimationFrame(frame);
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        last = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    };

    resize();
    rafId = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [off]);

  if (off) return null;
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};
