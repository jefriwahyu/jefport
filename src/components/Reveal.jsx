import { useEffect, useRef, createElement } from "react";
import { cn } from "@/lib/utils";

export const Reveal = ({
  children,
  delay = 0,
  className,
  as,
  variant = "up",
}) => {
  const ref = useRef(null);
  const Tag = as || "div";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // NOTE: variant "clip" renders a neutral outer wrapper for the
  // IntersectionObserver. The clip-path lives on the INNER element because
  // IO measures the target's *visible* (post-clip) area — an element
  // clipped to zero area would never intersect and never reveal.
  if (variant === "clip") {
    return (
      <div
        ref={ref}
        className={cn(className)}
        style={{ "--reveal-delay": `${delay}ms` }}
      >
        <div className="reveal-clip-inner">{children}</div>
      </div>
    );
  }

  return createElement(
    Tag,
    {
      ref,
      className: cn("reveal", `reveal-${variant}`, className),
      style: { "--reveal-delay": `${delay}ms` },
    },
    children
  );
};
