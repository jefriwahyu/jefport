import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-8 bg-gradient-to-br from-background via-background/95 to-primary/5 border-primary/20">
      <div className="container mx-auto px-4 relative">
        
        {/* Copyright text centered */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} JefPort. All rights reserved.
          </p>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 right-4 p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
        </button>

      </div>
    </footer>
  );
};