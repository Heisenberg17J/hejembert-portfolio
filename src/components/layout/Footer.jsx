import { Github, Linkedin,  Coffee, ArrowUp, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./navbar/Logo";

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
    <>
      <footer className="relative bg-gradient-to-b from-[#020617] to-[#0a0f1e] border-t border-white/10">
        {/* Decorative gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12">
          
          {/* Main Content */}
          <div className="flex flex-col items-center space-y-8">
            
            {/* Logo */}
            <Logo/>

            {/* Description */}
            <p className="text-gray-400 text-center max-w-md text-sm leading-relaxed">
              Transformando ideas en productos digitales. 
              Desarrollo web y arquitectura de software para startups y empresas.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 border border-white/10 p-3 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-full max-w-md border-t border-white/10"></div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} HJCode.</span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center space-x-1">
                <span>Hecho con</span>
                <Coffee className="w-4 h-4 text-white fill-current animate-pulse" />
                <span>por Hejembert Jaramillo</span>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300 z-40 group animate-fadeIn"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </footer>
    </>
  );
}