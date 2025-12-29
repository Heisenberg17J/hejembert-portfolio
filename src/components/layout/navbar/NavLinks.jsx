const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "acerca", label: "Acerca de Mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function NavLinks({ activeSection, onNavigate, isMobile = false }) {
  const baseClasses = isMobile
    ? "block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300"
    : "px-4 py-2 rounded-lg font-medium transition-all duration-300";

  const activeClasses = isMobile
    ? "bg-blue-500/20 text-blue-400 border-l-4 border-blue-400"
    : "bg-blue-500/20 text-blue-400";

  const inactiveClasses = isMobile
    ? "text-gray-300 hover:text-white hover:bg-white/10"
    : "text-gray-300 hover:text-white hover:bg-white/5";

  return (
    <>
      {NAV_ITEMS.map((item) => (
        <li key={item.id} className={isMobile ? "mb-2" : ""}>
          <button
            onClick={() => onNavigate(item.id)}
            className={`${baseClasses} ${
              activeSection === item.id ? activeClasses : inactiveClasses
            }`}
            aria-label={`Navegar a ${item.label}`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </>
  );
}

// Exportar también el array para usarlo en otros lugares
export { NAV_ITEMS };