import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export const Counter = ({ end, suffix = "", duration = 1600 }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(end);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let rafId;
    const run = () => {
      const startedAt = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - startedAt) / duration);
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        setValue(Math.round(end * eased));
        if (p < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
};
