export default function Logo() {
  return (
    <div className="flex items-center space-x-2 group cursor-pointer">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg">
          <img 
            src="/images/logo-hejembert.png" 
            alt="HJCode Logo" 
            className="w-6 h-6"
          />
        </div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        HJCode
      </span>
    </div>
  );
}