import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek ini untuk memuat tema dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      // Set default ke light jika tidak ada tema tersimpan
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Kita tidak lagi memerlukan useEffect untuk menyuntikkan style transisi global
  // karena View Transitions API akan menanganinya dengan lebih baik.

  const toggleTheme = () => {
    // Cek apakah browser mendukung View Transitions API
    if (!document.startViewTransition) {
      // Fallback untuk browser lama: ganti tema secara langsung
      const newIsDarkMode = !isDarkMode;
      setIsDarkMode(newIsDarkMode);
      if (newIsDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return;
    }

    // Gunakan View Transitions API!
    document.startViewTransition(() => {
      const newIsDarkMode = !isDarkMode;
      setIsDarkMode(newIsDarkMode);
      if (newIsDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-3.5 right-5 z-50 p-2 rounded-full transition-all duration-300",
        "focus:outline-hidden hover:scale-110 active:scale-95",
      )}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={cn(
            "absolute h-6 w-6 text-yellow-400 transition-all duration-500 transform",
            isDarkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          )}
        />
        <Moon
          className={cn(
            "absolute h-6 w-6 text-blue-600 transition-all duration-500 transform",
            isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
          )}
        />
      </div>
    </button>
  );
};