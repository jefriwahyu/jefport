import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const LINES = [
  "$ whoami",
  "> jefri — backend dev",
  "$ uptime --career",
  "> e-voting: 3.458 voters",
  "> tests: 214 passed",
  "> status: shipping",
];
const TICK_MS = 50;
const CHARS_PER_TICK = 2;
const DONE_PAUSE_MS = 2600;
const FONT = '12px "JetBrains Mono", ui-monospace, monospace';
const LINE_H = 20;
const PAD_X = 16;
const PAD_Y = 26;

/**
 * Running-code backdrop that lives INSIDE the whoami box. Types out
 * terminal lines in a loop on a transparent canvas (drawn very faint so
 * the real content stays readable). Visibility is driven purely by CSS:
 * the layer fades in while the cable node is inside the box
 * ([data-cable-item].cable-lit) and fades out when it leaves.
 * Typing pauses when the tab is hidden or the box is off-screen.
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

    let lineIdx = 0;
    let charIdx = 0;
    let waiting = false;
    let inView = true;
    let visible = !document.hidden;
    let disposed = false;
    let timer = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.font = FONT;
      ctx.fillStyle = "rgba(0, 255, 65, 0.10)";
      for (let i = 0; i < lineIdx; i++) {
        ctx.fillText(LINES[i], PAD_X, PAD_Y + i * LINE_H);
      }
      if (lineIdx < LINES.length) {
        ctx.fillText(
          LINES[lineIdx].slice(0, charIdx),
          PAD_X,
          PAD_Y + lineIdx * LINE_H
        );
      }
    };

    const tick = () => {
      if (disposed || waiting || !inView || !visible) return;
      charIdx += CHARS_PER_TICK;
      if (charIdx >= LINES[lineIdx].length) {
        lineIdx += 1;
        charIdx = 0;
        if (
          lineIdx >= LINES.length ||
          PAD_Y + lineIdx * LINE_H > canvas.height - 8
        ) {
          waiting = true;
          draw();
          setTimeout(() => {
            if (disposed) return;
            lineIdx = 0;
            charIdx = 0;
            waiting = false;
            draw();
          }, DONE_PAUSE_MS);
          return;
        }
      }
      draw();
    };

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = w;
      canvas.height = h;
      lineIdx = 0;
      charIdx = 0;
      waiting = false;
      draw();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    timer = setInterval(tick, TICK_MS);

    const panel = canvas.closest("[data-cable-item]");
    let io = null;
    if (panel && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
      });
      io.observe(panel);
    }
    const onVis = () => {
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      disposed = true;
      clearInterval(timer);
      ro.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;
  return <canvas ref={canvasRef} className="block h-full w-full" />;
};
