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
