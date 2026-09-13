import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark for the premium cosmic look
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const apply = () => {
      const next = !isDarkMode;
      setIsDarkMode(next);
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    };

    if (document.startViewTransition) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative w-10 h-10 rounded-xl flex items-center justify-center",
        "bg-card/70 backdrop-blur-xl border border-border/70",
        "hover:border-primary/50 hover:text-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20",
        "transition-all duration-300 active:scale-90 overflow-hidden group",
        className
      )}
    >
      <span className="absolute inset-0 bg-gradient-to-br from-primary/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative block w-5 h-5">
        <Sun
          className={cn(
            "absolute inset-0 h-5 w-5 text-amber-400 transition-all duration-500",
            isDarkMode ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-5 w-5 text-primary transition-all duration-500",
            isDarkMode ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
      </span>
    </button>
  );
};
