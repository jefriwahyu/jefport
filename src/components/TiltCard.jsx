import { useRef } from "react";
import { cn } from "@/lib/utils";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

export const TiltCard = ({ children, className, max = 8 }) => {
  const ref = useRef(null);

  const canTilt = () => hasFinePointer() && !prefersReducedMotion();

  const handleEnter = () => {
    if (!canTilt() || !ref.current) return;
    ref.current.style.transition = "transform 0.12s ease-out";
  };

  const handleMove = (e) => {
    if (!canTilt()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;
    el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
      2
    )}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition =
      "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("tilt", className)}
    >
      {children}
      <div className="tilt-glare" aria-hidden="true" />
    </div>
  );
};
