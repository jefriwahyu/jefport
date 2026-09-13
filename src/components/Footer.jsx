import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";
import { Magnetic } from "./Magnetic";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-primary/[0.09] pointer-events-none" />
      <div className="container mx-auto px-4 py-12 relative max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-violet-600 to-pink-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/30">
              J
            </span>
            <div className="text-left">
              <div className="font-display font-bold text-lg leading-none">
                Jef<span className="text-gradient">Port</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                Built with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> in Indonesia
              </div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-1 p-1.5 rounded-full bg-card/60 backdrop-blur border border-border/60">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* Socials + top */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: Github, href: "https://github.com/jefriwahyu", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jefri-wahyudiana-putra-96b8a8194/", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/jefriwahyuu/", label: "Instagram" },
              { icon: Mail, href: "mailto:jefrywahyu63@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-card/70 border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all"
              >
                <s.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
            <Magnetic className="ml-1">
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 transition-all group"
              >
                <ArrowUp className="h-[18px] w-[18px] group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} Jefri Wahyu Putra. All rights reserved.</p>
          <p className="font-medium">React • Tailwind • Vite</p>
        </div>
      </div>
    </footer>
  );
};
