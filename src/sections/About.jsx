import { Briefcase, Code2, Lightbulb, Target, TrendingUp, Users, Zap } from "lucide-react";
import Stack from "./Stack";
import { services_data } from "../data/services_data";

export default function About() {
  const services = services_data;

  return (
    <section id="acerca" className="relative bg-[#020617] py-20 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Acerca de Mí</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Convierto Ideas en
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sistemas Funcionales
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Estudiante de ingenieria en sistemas, actualmente quinto semestre.
            Con experiencia en creación de aplicaciones y desarrollo web.
          </p>
        </div>

        {/* Stats Grid 
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        */}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Left: About Me */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-blue-400 mb-4">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Mi Enfoque</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
              Soluciones enfocadas en resultados, no solo código
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Con un año de experiencia en desarrollo de software,
                he colaborado con pequeñas y medianas empresas del sector gastronómico
                y comercial, ayudándolas a convertir sus ideas en productos funcionales
                y escalables.
              </p>
              
              <p>
                Ya sea que necesites construir una web desde cero, escalar tu infraestructura 
                actual, o agregar nuevas funcionalidades a tu producto, puedo ayudarte a 
                lograrlo de manera eficiente y con calidad.
              </p>
            </div>
          </div>

          {/* Right: Services Grid */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-purple-400 mb-4">
              <Lightbulb className="w-5 h-5" />
              <span className="font-semibold">¿Qué Puedo Hacer Por Ti?</span>
            </div>
            
            <div className="grid gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-br ${service.gradient} p-3 rounded-lg shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Work Process */}
        <div className="relative">
          <Stack/>
        </div>

      </div>
    </section>
  );
}