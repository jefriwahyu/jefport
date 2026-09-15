import { cn } from "@/lib/utils";

/**
 * Static HUD corner brackets (top-left, top-right, bottom-left, bottom-right).
 * Purely decorative, no animation — the "interface" accent.
 */
export const HudPanel = ({ children, className, bracketClassName, ...rest }) => {
  const corner = "absolute w-3.5 h-3.5 border-primary/70 pointer-events-none";
  return (
    <div className={cn("relative", className)} {...rest}>
      <span className={cn(corner, "top-0 left-0 border-t-2 border-l-2", bracketClassName)} aria-hidden="true" />
      <span className={cn(corner, "top-0 right-0 border-t-2 border-r-2", bracketClassName)} aria-hidden="true" />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2", bracketClassName)} aria-hidden="true" />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2", bracketClassName)} aria-hidden="true" />
      {children}
    </div>
  );
};
