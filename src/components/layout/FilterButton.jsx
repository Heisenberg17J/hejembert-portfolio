export default function FilterButton({ active, onClick, children, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
        active
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
          : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-blue-500/30 hover:text-white"
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}