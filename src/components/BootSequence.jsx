import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LINES = [
  "> INITIALIZING SYSTEM ............ OK",
  "> LOADING PROFILE: jefri ......... OK",
  "> MOUNTING /projects ............. OK",
  "> ACCESS GRANTED",
];

/**
 * One-time terminal boot-up. Runs once per tab session
 * (gated via sessionStorage in Home), then fades out.
 */
export const BootSequence = ({ onDone }) => {
  const [lineCount, setLineCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setLeaving(true);
      setTimeout(() => onDoneRef.current?.(), 450);
    };

    if (lineCount >= LINES.length) {
      const t = setTimeout(finish, 450);
      return () => clearTimeout(t);
    }

    const line = LINES[lineCount];
    if (charCount >= line.length) {
      const t = setTimeout(() => {
        setLineCount((c) => c + 1);
        setCharCount(0);
      }, 120);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setCharCount((c) => c + 2), 18);
    return () => clearTimeout(t);
  }, [lineCount, charCount]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        leaving ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="w-full max-w-md px-8 font-mono text-sm md:text-base">
        {LINES.slice(0, lineCount + 1).map((line, i) => (
          <p
            key={i}
            className={cn(
              "whitespace-pre-wrap leading-8",
              i === LINES.length - 1 ? "text-primary text-glow font-bold" : "text-muted-foreground"
            )}
          >
            {i < lineCount ? line : line.slice(0, charCount)}
            {i === lineCount && (
              <span className="inline-block w-[9px] h-[18px] ml-1 -mb-0.5 bg-primary animate-blink" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
};
