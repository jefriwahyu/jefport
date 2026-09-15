/**
 * Feeds cursor position into --mx/--my CSS vars for the spotlight overlay.
 * Direct DOM writes only (no re-renders), pre-gated for fine pointers.
 */
export const handleSpotMove = (e) => {
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;
  const el = e.currentTarget;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
};
