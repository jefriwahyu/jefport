import { useRef } from "react";
import { cn } from "@/lib/utils";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

export const Magnetic = ({ children, strength = 0.32, className }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      data-magnetic="true"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "inline-block transition-transform duration-200 ease-out will-change-transform",
        className
      )}
    >
      {children}
    </span>
  );
};
