import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const GLYPHS = "01{}[]();<>=+-*/#$&|!?:;,.abcdef0123456789".split("");
const FONT_SIZE = 13;
const FONT = `${FONT_SIZE}px "JetBrains Mono", ui-monospace, monospace`;

/**
 * Code-rain backdrop that lives INSIDE the whoami box. Faint code glyphs
 * fall in a loop on a transparent canvas (very dim so the real content
 * stays readable). Visibility is driven purely by CSS: the layer fades
 * in while the cable node is inside the box
 * ([data-cable-item].cable-lit) and fades out when it leaves.
 * The rain pauses when the tab is hidden or the box is off-screen.
 */
export const WhoamiCodeBg = () => {
  const canvasRef = useRef(null);
  const reduceMotion =
    typeof window !== "undefined" && prefersReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let drops = [];
    let rafId = 0;
    let inView = true;
    let visible = !document.hidden;
    let disposed = false;
    let last = performance.now();

    const seed = () => {
      const cols = Math.max(8, Math.floor(canvas.width / FONT_SIZE));
      drops = Array.from({ length: cols }, () => ({
        y: Math.random() * (canvas.height / FONT_SIZE),
        speed: 3 + Math.random() * 7, // rows per second
        a: 0.05 + Math.random() * 0.09,
      }));
    };

    const frame = (now) => {
      if (disposed || !inView || !visible) {
        rafId = 0;
        return;
      }
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const w = canvas.width;
      const h = canvas.height;
      // Fade previous trails toward transparent (no bg color matching
      // needed — the panel background shows through untouched).
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.font = FONT;
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        ctx.fillStyle = `rgba(0, 255, 65, ${d.a})`;
        ctx.fillText(
          GLYPHS[(Math.random() * GLYPHS.length) | 0],
          i * FONT_SIZE,
          d.y * FONT_SIZE
        );
        d.y += d.speed * dt;
        if (d.y * FONT_SIZE > h + FONT_SIZE) {
          d.y = -Math.random() * 6;
          d.speed = 3 + Math.random() * 7;
        }
      }
      rafId = requestAnimationFrame(frame);
    };

    const kick = () => {
      if (!rafId && !disposed && inView && visible) {
        last = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    };

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = w;
      canvas.height = h;
      seed();
      kick();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const panel = canvas.closest("[data-cable-item]");
    let io = null;
    if (panel && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        kick();
      });
      io.observe(panel);
    }
    const onVis = () => {
      visible = !document.hidden;
      kick();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;
  return <canvas ref={canvasRef} className="block h-full w-full" />;
};
