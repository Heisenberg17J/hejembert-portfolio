import {X, Github, Linkedin, Instagram } from "lucide-react";
import NavLinks from "./NavLinks";

export default function MobileMenu({ isOpen, onClose, activeSection, onNavigate }) {
  // Cerrar con Escape
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  // Manejar navegación y cerrar menú
  const handleNavigate = (sectionId) => {
    onNavigate(sectionId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay con backdrop blur */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Cerrar menú"
      />

      {/* Menú deslizable */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#020617] border-l border-blue-500/20 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del menú */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Menú
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-2">
            <NavLinks
              activeSection={activeSection}
              onNavigate={handleNavigate}
              isMobile={true}
            />
          </ul>
        </nav>

        {/* Footer del menú con redes sociales */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4">Sígueme en:</p>
          <div className="flex space-x-4">
            <a href="https://github.com/Heisenberg17J"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6"/>
            </a>
            <a
              href="https://www.linkedin.com/in/hejembert-jaramillo-a59006320/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6"/>
            </a>
            <a
              href="https://twitter.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}