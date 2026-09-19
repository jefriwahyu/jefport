import { cn } from "@/lib/utils";

/**
 * Static HUD corner brackets (top-left, top-right, bottom-left, bottom-right).
 * Purely decorative, no animation — the "interface" accent.
 * Pass `staticBrackets` to also disable the group-hover bracket swell,
 * leaving the card hover as the single unified hover effect.
 * Pass `hideOnHover` to instead fade the brackets out while hovered
 * (they return when the cursor leaves).
 */
export const HudPanel = ({ children, className, bracketClassName, staticBrackets = false, hideOnHover = false, ...rest }) => {
  const corner = hideOnHover
    ? "absolute w-3.5 h-3.5 border-primary/40 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
    : staticBrackets
    ? "absolute w-3.5 h-3.5 border-primary/40 pointer-events-none"
    : "absolute w-3.5 h-3.5 border-primary/40 group-hover:border-primary group-hover:w-5 group-hover:h-5 transition-all duration-300 pointer-events-none";
  return (
    <div className={cn("relative group", className)} {...rest}>
      <span className={cn(corner, "top-0 left-0 border-t-2 border-l-2", bracketClassName)} aria-hidden="true" />
      <span className={cn(corner, "top-0 right-0 border-t-2 border-r-2", bracketClassName)} aria-hidden="true" />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2", bracketClassName)} aria-hidden="true" />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2", bracketClassName)} aria-hidden="true" />
      {children}
    </div>
  );
};
