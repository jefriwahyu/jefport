import { useEffect, useRef } from "react";
import { prefersReducedMotion, isMobileViewport } from "@/lib/motion";

/**
 * Digital dust: tiny square specks drifting slowly, with scroll parallax.
 * Single canvas, fixed behind content. Disabled on mobile & reduced motion.
 */
export const DustField = () => {
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
    let rafId = 0;
    let running = true;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    const N = 70;
    const specks = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const seed = () => {
      specks.length = 0;
      for (let i = 0; i < N; i++) {
        specks.push({
          x: Math.random() * w,
          y: Math.random() * h,
          s: Math.random() < 0.85 ? 1 : 2,
          vx: (Math.random() - 0.5) * 0.12,
          vy: -0.04 - Math.random() * 0.12,
          depth: 0.3 + Math.random() * 0.7,
          a: 0.1 + Math.random() * 0.35,
          green: Math.random() < 0.8,
        });
      }
    };

    const frame = () => {
      if (!running) return;
      const parallax = window.scrollY;
      ctx.clearRect(0, 0, w, h);
      for (const p of specks) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
        let y = (p.y - parallax * 0.12 * p.depth) % (h + 8);
        if (y < -4) y += h + 8;
        ctx.fillStyle = p.green
          ? `rgba(0,255,65,${p.a})`
          : `rgba(230,255,230,${p.a * 0.8})`;
        ctx.fillRect(p.x, y, p.s, p.s);
      }
      rafId = requestAnimationFrame(frame);
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        rafId = requestAnimationFrame(frame);
      }
    };

    resize();
    seed();
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
