export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const hasFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

export const isMobileViewport = () =>
  typeof window !== "undefined" &&
  (window.innerWidth < 768 ||
    /Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent || ""));

/** Heavy effects (WebGL, custom cursor) only when device & user prefs allow it. */
export const shouldUseHeavyEffects = () =>
  !prefersReducedMotion() && !isMobileViewport();
