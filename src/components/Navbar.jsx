import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-500",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-border/50"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between relative">
          {/* Logo with enhanced styling */}
          <a
            className="text-xl font-bold text-primary flex items-center group"
            href="#hero"
          >
            <span className="relative z-10 overflow-hidden">
              <span className="text-glow text-foreground transition-all duration-300 group-hover:scale-110 inline-block">
                Jef
              </span>
              <span className="relative">
                Port
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </span>
          </a>

          {/* Desktop nav with enhanced effects - Now centered */}
          <div className="hidden md:flex items-center space-x-1 px-6 py-2 border-border/30 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  "hover:text-primary hover:scale-105",
                  activeSection === item.name
                    ? "text-primary bg-primary/10 shadow-lg"
                    : "text-foreground/80"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Active indicator */}
                {activeSection === item.name && (
                  <span className="absolute inset-0 bg-primary/5 rounded-full animate-pulse"></span>
                )}
                {/* Hover effect */}
                <span className="absolute inset-0 bg-primary/5 rounded-full scale-0 transition-transform duration-300 hover:scale-100"></span>
              </a>
            ))}
          </div>

          {/* Mobile controls (menu button + theme toggle) */}
          <div className="mr-13">
            {/* Enhanced mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={cn(
                "md:hidden p-2 text-foreground z-[70] relative",
                "rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm",
                "transition-all duration-300 hover:bg-background/40 hover:scale-110",
                isMenuOpen && "bg-background/60"
              )}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  )}
                />
                <X
                  size={24}
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Completely separate from navbar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100vh",
            width: "100vw",
          }}
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>

          {/* Close button inside menu */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 z-20 p-2 text-foreground rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm transition-all duration-300 hover:bg-background/40 hover:scale-110"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Menu content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "text-2xl font-medium transition-all duration-500 relative group",
                    "text-foreground/80 hover:text-primary hover:scale-110",
                    "transform translate-y-0 opacity-100"
                  )}
                  style={{
                    animationDelay: `${key * 100}ms`,
                    animation: "slideInUp 0.5s ease-out forwards",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 transition-transform duration-300 group-hover:scale-110 -z-10"></span>
                </a>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      )}
    </>
  );
};
