import { Code2, Database, Container, Cpu, Binary, Terminal, GitBranch, Layers } from "lucide-react";

export default function HeroFoto() {
  const techIcons = [
    { Icon: Code2, delay: 0, duration: 20 },
    { Icon: Database, delay: 2.5, duration: 20 },
    { Icon: Cpu, delay: 5, duration: 20 },
    { Icon: Terminal, delay: 7.5, duration: 20 },
    { Icon: GitBranch, delay: 10, duration: 20 },
    { Icon: Layers, delay: 12.5, duration: 20 },
    { Icon: Container, delay: 15, duration: 20 },
    { Icon: Binary, delay: 17.5, duration: 20 }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow effect */}
      <div className="
        absolute 
        top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        w-80 h-80
        rounded-full
        bg-gradient-to-br from-blue-500 to-purple-600
        opacity-20
        blur-3xl
        animate-pulse
        z-0
      "></div>
      
      {/* Órbita de iconos */}
      <div className="absolute top-1/2  -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] z-10">
        {techIcons.map(({ Icon, delay, duration }, index) => (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 w-full h-full"
            style={{
              animation: `orbit ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-xl shadow-lg backdrop-blur-sm border border-blue-400/30 hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Imagen */}
      <div className="relative z-20 group">
        <img
          src="/images/hejembert-foto-profesional.png"
          alt="Hejembert Jaramillo"
          className="relative w-80 h-auto"
        />
      </div>
    </div>
  );
}