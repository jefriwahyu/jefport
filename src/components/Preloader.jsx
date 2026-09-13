import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Preloader = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const loadedRef = useRef(false);
  const doneRef = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const start = performance.now();
    const MAX_WAIT = 3200;

    const markLoaded = () => {
      loadedRef.current = true;
    };
    if (document.readyState === "complete") {
      loadedRef.current = true;
    } else {
      window.addEventListener("load", markLoaded);
    }

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setProgress(100);
      setLeaving(true);
      setTimeout(() => onDoneRef.current?.(), 700);
    };

    let rafId;
    const step = (now) => {
      if (now - start > MAX_WAIT) loadedRef.current = true;
      const goal = loadedRef.current ? 100 : 82;
      setProgress((p) => {
        const next = p + (goal - p) * 0.075;
        if (loadedRef.current && next >= 99.4) {
          finish();
          return 100;
        }
        return next;
      });
      if (!doneRef.current) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("load", markLoaded);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
        leaving ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[480px] h-[280px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary via-violet-600 to-pink-500 flex items-center justify-center text-white font-display font-bold text-3xl shadow-2xl shadow-primary/40 animate-pulse-subtle">
          J
        </div>
        <div className="mt-6 font-display font-bold text-xl tracking-tight">
          Jef<span className="text-gradient">Port</span>
        </div>
        <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
          Crafting experience
        </div>

        <div className="mt-8 w-56 h-1 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary via-pink-500 to-amber-400 transition-[width] duration-150"
            style={{ width: `${Math.floor(progress)}%` }}
          />
        </div>
        <div className="mt-3 font-display text-sm font-bold text-primary tabular-nums">
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  );
};
