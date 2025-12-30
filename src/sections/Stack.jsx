import { useState } from "react";
import { Code2,  Zap, ExternalLink, Github } from "lucide-react";
import { technologies_data } from "../data/technologies_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../utils/iconMap";



export default function Stack() {
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = technologies_data;
  
  return (
    <section id="stack">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Stack Tecnológico</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Tecnologías que 
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Utilizo en mis proyectos
            </span>
          </h2>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech) => (
            <button 
              key={tech.id}
              onClick={() => setSelectedTech(selectedTech?.id === tech.id ? null : tech)}
              className={`group relative bg-white/5 backdrop-blur-sm border ${tech.borderColor} rounded-2xl p-6 transition-all duration-300 ${tech.hoverBorder} ${
                selectedTech?.id === tech.id ? 'scale-105 border-2 shadow-2xl' : 'hover:scale-105'
              }`}
            >
              {/* Glow effect when selected */}
              {selectedTech?.id === tech.id && (
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 rounded-2xl blur-xl`}></div>
              )}
              
              <div className="relative">
                <div className={`text-5xl text-white mb-4 transition-transform duration-300 ${
                  selectedTech?.id === tech.id ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  <FontAwesomeIcon icon={iconMap[tech.icon]}/>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-1">{tech.name}</h3>
                <p className="text-gray-400 text-xs mb-2">{tech.category}</p>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${tech.color} rounded-full text-white text-xs font-semibold`}>
                  {tech.experience}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Projects Preview */}
        {selectedTech && (
          <div className="animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12">
              
              {/* Header de la tecnología seleccionada */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`text-6xl bg-gradient-to-br ${selectedTech.color} p-4 rounded-2xl`}>
                    <FontAwesomeIcon icon={iconMap[selectedTech.icon]}/>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{selectedTech.name}</h3>
                    <p className="text-gray-400">Proyectos realizados con esta tecnología</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Grid de proyectos */}
              <div className="grid md:grid-cols-2 gap-6">
                {selectedTech.projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:scale-105"
                  >
                    {/* Imagen del proyecto */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      
                      {/* Overlay con iconos */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors">
                          <Github className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Contenido del proyecto */}
                    <div className="p-6">
                      <h4 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((techItem, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer con CTA */}
              <div className="mt-8 text-center">
                <a  href="https://github.com/Heisenberg17J?tab=repositories" target="_blank" className={`bg-gradient-to-r ${selectedTech.color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2`}>
                  <span>Ver Todos los Proyectos</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* CTA cuando no hay selección */}
        {!selectedTech && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-gray-400 animate-bounce">
              <Zap className="w-5 h-5" />
              <p className="text-sm">Haz click en cualquier tecnología para explorar proyectos</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}