import HeroFoto from "../components/ui/HeroFoto";

export default function Hero() {
  return (
    <div>
        <div className="hero bg-[#020617] min-h-screen relative overflow-hidden">
        {/* Radial gradient background */}
        <div
            className="absolute inset-0 z-0"
            style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
            }}
        />
        
        {/* Grid pattern subtle */}
        <div className="absolute inset-0 z-0 opacity-10"
            style={{
            backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
            }}
        />
        
        {/* Hero Content */}
        <div className="hero-content relative z-10 flex flex-col lg:flex-row-reverse items-center justify-center pt-16 lg:pt-10 min-h-screen px-6 lg:px-12 gap-8 lg:gap-16">
            
            {/* Foto con iconos orbitando */}
            <div className="w-full lg:w-2/5 h-[500px] lg:h-[600px]">
            <HeroFoto />
            </div>
            
            {/* Texto */}
            <div className="w-full lg:w-3/5 text-center lg:text-left space-y-4">
            <p className="text-blue-400 text-sm lg:text-base tracking-widest uppercase font-semibold">
                Bienvenidos, soy
            </p>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                HEJEMBERT JARAMILLO
            </h1>
            
            <p className="text-2xl lg:text-3xl font-extrabold
                bg-gradient-to-r from-blue-200 via-cyan-500 to-blue-400
                bg-clip-text text-transparent
                bg-[length:300%_300%]
                transition-all duration-500
                hover:bg-[position:100%_50%]
                inline-block">
                 Estudiante de Ingeniera en Sistemas
            </p>
            
            <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 pt-2">
                Desarrollo web, arquitectura de software y soluciones enfocadas en crecimiento.
            </p>
            
            <div className="pt-6">
                <button className="btn bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-300 
                rounded-full px-8 py-3 text-lg font-semibold text-white
                shadow-lg hover:shadow-xl hover:scale-105 
                transition-all duration-300 border-0">
                Mi HdV
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}