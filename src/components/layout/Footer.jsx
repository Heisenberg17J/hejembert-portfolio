import { Github, Linkedin, Instagram, ArrowUp, Heart, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Heisenberg17J", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hejembert-jaramillo-a59006320/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/hejembert/", label: "Instagram" },
  ];

  return (
    <footer className="bg-code-bg border-t border-code-bgTertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col items-center space-y-5 sm:space-y-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-code-green" />
            <span className="font-mono text-code-textMuted text-xs sm:text-sm">
              <span className="code-keyword">export default</span> <span className="code-function">footer</span>;
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-code-bgSecondary border border-code-bgTertiary p-2 sm:p-2.5 rounded hover:border-code-textMuted transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-code-textMuted group-hover:text-code-text transition-colors" />
                </a>
              );
            })}
          </div>

          <div className="w-full max-w-md border-t border-code-bgTertiary"></div>

          <div className="flex flex-col sm:flex-row items-center gap-2 text-code-textMuted text-[10px] sm:text-xs font-mono">
            <span>© {currentYear} <span className="code-string">"Hejembert Jaramillo"</span></span>
            <span className="hidden sm:inline text-code-textDim">|</span>
            <div className="flex items-center gap-1">
              <span className="code-keyword">const</span> <span className="code-attr">built</span> = <span className="code-string">"love"</span>
              <Heart className="w-3 h-3 text-code-pink fill-code-pink animate-pulse" />
            </div>
          </div>

          <div className="text-code-textDim text-[10px] sm:text-xs font-mono">
            <span className="code-comment">// Gracias por visitar mi portafolio</span>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-code-bgSecondary border border-code-bgTertiary text-code-textMuted p-2 sm:p-2.5 rounded hover:border-code-green hover:text-code-green transition-all duration-200 z-40"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      )}
    </footer>
  );
}
