import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        const activeItem = navItems.find(
          (item) => item.href === `#${currentSection}`
        );
        if (activeItem) setActiveSection(activeItem.name);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary via-pink-500 to-amber-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 border",
              isScrolled
                ? "bg-background/75 backdrop-blur-xl border-border/70 shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.3)]"
                : "bg-transparent border-transparent"
            )}
          >
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group shrink-0">
              <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-violet-600 to-pink-500 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-primary/30 group-hover:rotate-6 group-hover:scale-105 transition-transform">
                J
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background" />
              </span>
              <span className="font-display font-bold text-lg tracking-tight leading-none">
                Jef<span className="text-gradient">Port</span>
                <span className="block text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-muted-foreground">
                  Portfolio
                </span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-card/60 backdrop-blur-xl border border-border/60">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 lg:px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full whitespace-nowrap",
                    activeSection === item.name
                      ? "text-primary-foreground bg-primary shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-primary/40 transition-all"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="relative w-5 h-5 block">
                  <Menu
                    size={20}
                    className={cn(
                      "absolute inset-0 transition-all duration-300",
                      isMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0"
                    )}
                  />
                  <X
                    size={20}
                    className={cn(
                      "absolute inset-0 transition-all duration-300",
                      isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 scale-50"
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[55] md:hidden transition-all duration-500",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-pink-500/10 pointer-events-none" />
        <div className="absolute top-24 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-24 right-10 w-52 h-52 bg-pink-500/15 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="relative h-full flex flex-col items-center justify-center gap-2 px-8">
          {navItems.map((item, key) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "w-full max-w-xs text-center font-display text-2xl font-bold py-4 rounded-2xl transition-all duration-500 border",
                "hover:scale-[1.03] active:scale-95",
                activeSection === item.name
                  ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/30"
                  : "bg-card/70 backdrop-blur text-foreground border-border/60",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
              style={{ transitionDelay: isMenuOpen ? `${key * 70}ms` : "0ms" }}
            >
              <span className="text-xs font-sans font-medium opacity-60 block tracking-[0.25em] mb-1">
                0{key + 1}
              </span>
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="cosmic-button mt-4 w-full max-w-xs"
          >
            Let's Talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
