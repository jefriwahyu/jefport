import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const enabled =
    typeof window !== "undefined" &&
    hasFinePointer() &&
    !prefersReducedMotion();

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let targetScale = 1;
    let rafId;

    const place = (el, x, y, s) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${s})`;
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      place(dot, mx, my, 1);
      const interactive = e.target?.closest?.(
        "a, button, [data-magnetic], input, textarea"
      );
      targetScale = interactive ? 1.9 : 1;
      ring.classList.toggle("cursor-ring-active", !!interactive);
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      scale += (targetScale - scale) * 0.18;
      place(ring, rx, ry, scale);
      rafId = requestAnimationFrame(loop);
    };

    place(dot, mx, my, 1);
    place(ring, rx, ry, 1);
    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};
