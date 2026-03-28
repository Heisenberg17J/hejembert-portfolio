import { useState, useEffect } from "react";
import { Menu, X, Code2, FileText, Folder, Mail } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { id: "inicio", label: "inicio.jsx", icon: Code2 },
    { id: "acerca", label: "acerca.jsx", icon: FileText },
    { id: "proyectos", label: "proyectos/", icon: Folder },
    { id: "contacto", label: "contact.sh", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["inicio", "acerca", "proyectos", "contacto"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-code-bg/95 backdrop-blur-md border-b border-code-bgTertiary" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-code-blue/30 rounded blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-code-bgSecondary border border-code-bgTertiary p-1.5 rounded">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-code-green" />
                </div>
              </div>
              <span className="text-code-text font-mono text-xs sm:text-sm font-bold hidden sm:block">
                <span className="code-keyword">const</span> <span className="code-function">portfolio</span> = <span className="code-tag">{"{"}</span>
              </span>
            </button>

            <div className="hidden md:flex items-center bg-code-bgSecondary rounded-lg border border-code-bgTertiary p-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-2.5 lg:px-3 py-1.5 rounded font-mono text-xs lg:text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-code-bgTertiary text-code-blue"
                        : "text-code-textMuted hover:text-code-text hover:bg-code-bgTertiary/50"
                    }`}
                  >
                    <Icon className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                    <span className="hidden lg:inline">{item.label}</span>
                    {isActive && <span className="w-1 h-1 bg-code-blue rounded-full"></span>}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-code-textMuted hover:text-code-text p-2 hover:bg-code-bgSecondary rounded-lg transition-all"
              aria-label="Abrir menú"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        <div 
          className="h-px bg-gradient-to-r from-code-green via-code-blue to-code-purple transition-transform duration-300"
          style={{
            transform: `scaleX(${scrolled ? 1 : 0})`,
            transformOrigin: "left"
          }}
        />
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-code-bg/95 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-0 right-0 w-full max-w-xs sm:w-80 h-full bg-code-bgSecondary border-l border-code-bgTertiary">
            <div className="p-4 border-b border-code-bgTertiary flex items-center justify-between">
              <span className="text-code-textMuted font-mono text-sm">menu.jsx</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-code-textMuted hover:text-code-text p-2 hover:bg-code-bgTertiary rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded font-mono text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-code-blue/20 text-code-blue border-l-2 border-code-blue"
                        : "text-code-textMuted hover:text-code-text hover:bg-code-bgTertiary"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
