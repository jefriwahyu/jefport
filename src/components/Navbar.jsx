import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

const navItems = [
  { name: "home", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const current = navItems
        .map((i) => i.href.slice(1))
        .find((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const r = el.getBoundingClientRect();
          return r.top <= 140 && r.bottom >= 140;
        });
      if (current) {
        const item = navItems.find((i) => i.href === `#${current}`);
        if (item) setActive(item.name);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 border-b transition-colors duration-200",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-border"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="container flex items-center justify-between h-16">
          <a href="#hero" className="font-mono text-sm font-bold shrink-0" aria-label="Kembali ke atas">
            <span className="text-primary">jefri@jefport</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="inline-block w-2 h-4 ml-1 -mb-0.5 bg-primary animate-blink" aria-hidden="true" />
          </a>

          <div className="hidden md:flex items-center gap-6 font-mono text-[13px]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors",
                  active === item.name
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active === item.name ? "▸ " : "./"}
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={lang === "id" ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian"}
              className="font-mono text-xs font-bold px-2.5 py-1.5 rounded-sm border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
            >
              <span className={lang === "id" ? "text-primary" : ""}>ID</span>
              <span className="mx-1 opacity-40">|</span>
              <span className={lang === "en" ? "text-primary" : ""}>EN</span>
            </button>
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              online
            </span>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden p-2 text-foreground border border-border rounded-sm"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="container py-3 flex flex-col font-mono text-sm">
              {navItems.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "py-2.5 border-b border-border/50 last:border-0 transition-colors",
                    active === item.name ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <span className="text-primary/50 mr-2">0{i + 1}</span>
                  ./{item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
