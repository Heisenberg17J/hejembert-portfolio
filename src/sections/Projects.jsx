import { useState } from "react";
import { technologies_data } from "../data/technologies_data";
import { ExternalLink, Github, ChevronRight, Folder, Smartphone, Palette, Zap } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../utils/iconMap";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);

  const categories = [
    { id: "all", label: "src/", icon: Folder },
    { id: "Apps", label: "apps/", icon: Smartphone },
    { id: "Frontend", label: "frontend/", icon: Palette },
    { id: "Frontend & Backend", label: "fullstack/", icon: Zap }
  ];

  const filteredTechnologies = selectedCategory === "all"
    ? technologies_data
    : technologies_data.filter(tech => tech.category === selectedCategory);

  return (
    <section id="proyectos" className="bg-code-bg py-16 sm:py-20 lg:py-32" data-aos="fade-up">
      <div className="scanline-overlay"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-code-bgSecondary border border-code-bgTertiary rounded px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm mb-4">
            <span className="code-keyword">const</span> <span className="code-function">projectsDir</span> = <span className="code-string">'./projects'</span>;
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono text-code-text mt-4">
            <span className="code-comment">// </span>Explorador de Proyectos
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          <div 
            className="lg:w-1/4"
          >
            <div className="bg-code-bgSecondary border border-code-bgTertiary rounded-lg overflow-hidden">
              <div className="bg-code-bgTertiary px-3 sm:px-4 py-2 border-b border-code-bgTertiary flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-code-red"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-code-yellow"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-code-green"></div>
                <span className="text-code-textMuted text-xs sm:text-sm font-mono ml-2">explorer</span>
              </div>
              <div className="p-2">
                <div className="text-code-textMuted text-xs font-mono px-2 py-1 mb-2">
                  PROJECTS
                </div>
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded font-mono text-xs sm:text-sm transition-all duration-200 ${
                        isActive 
                          ? 'bg-code-blue/20 text-code-blue border-l-2 border-code-blue' 
                          : 'text-code-textMuted hover:text-code-text hover:bg-code-bgTertiary'
                      }`}
                    >
                      <Icon className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 sm:mt-4 bg-code-bgSecondary border border-code-bgTertiary rounded-lg p-3 sm:p-4 font-mono text-xs">
              <div className="text-code-textMuted mb-2">
                <span className="code-comment">// Click en proyecto para detalles</span>
              </div>
              <div className="space-y-1 text-code-textMuted">
                <div><span className="code-number">{filteredTechnologies.length}</span> <span className="code-string">proyectos</span></div>
              </div>
            </div>
          </div>

          <div 
            className="lg:w-3/4"
          >
            <div className="bg-code-bgSecondary border border-code-bgTertiary rounded-lg overflow-hidden">
              <div className="bg-code-bgTertiary px-3 sm:px-4 py-2 flex items-center justify-between border-b border-code-bgTertiary">
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 text-code-textMuted" />
                  <span className="text-code-textMuted text-xs sm:text-sm font-mono">
                    projects/{selectedCategory === 'all' ? 'src' : selectedCategory.toLowerCase().replace(' & ', '-')}
                  </span>
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-red"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-yellow"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-green"></div>
                </div>
              </div>
              
              <div className="p-3 sm:p-4">
                {filteredTechnologies.length > 0 ? (
                  <div className="grid gap-3 sm:gap-4">
                    {filteredTechnologies.map((tech) => {
                      const isExpanded = expandedProject === tech.id;
                      return (
                        <div
                          key={tech.id}
                          className={`border rounded-lg transition-all duration-300 ${
                            isExpanded 
                              ? 'border-code-blue bg-code-bg' 
                              : 'border-code-bgTertiary hover:border-code-textMuted'
                          }`}
                        >
                          <button
                            onClick={() => setExpandedProject(isExpanded ? null : tech.id)}
                            className="w-full flex items-center gap-2 sm:gap-3 p-3 sm:p-4 text-left"
                          >
                            <div className="text-base sm:text-xl lg:text-2xl text-code-blue">
                              <FontAwesomeIcon icon={iconMap[tech.icon]}/>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-code-text font-mono font-bold text-xs sm:text-sm lg:text-base truncate">{tech.name}</h3>
                              <p className="text-code-textMuted text-[10px] sm:text-xs lg:text-sm">{tech.category}</p>
                            </div>
                            <div className="text-code-textMuted">
                              <ChevronRight className={`w-4 sm:w-5 h-4 sm:h-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="border-t border-code-bgTertiary p-3 sm:p-4 animate-fadeIn">
                              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                                {tech.projects.map((project, index) => (
                                  <div
                                    key={index}
                                    className="group bg-code-bg border border-code-bgTertiary rounded-lg overflow-hidden hover:border-code-blue/50 transition-all duration-300"
                                  >
                                    <div className="relative h-24 sm:h-28 lg:h-32 overflow-hidden">
                                      <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-code-bg to-transparent"></div>
                                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {project.demo && (
                                          <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-code-bg/80 p-1.5 sm:p-2 rounded hover:bg-code-blue/20 transition-colors"
                                          >
                                            <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 text-code-text" />
                                          </a>
                                        )}
                                        {project.github && (
                                          <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-code-bg/80 p-1.5 sm:p-2 rounded hover:bg-code-bgTertiary transition-colors"
                                          >
                                            <Github className="w-3 sm:w-4 h-3 sm:h-4 text-code-text" />
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                    <div className="p-2 sm:p-3">
                                      <h4 className="text-code-text font-mono text-xs sm:text-sm font-bold mb-1">
                                        {project.title}
                                      </h4>
                                      <p className="text-code-textMuted text-[10px] sm:text-xs mb-2 line-clamp-2">
                                        {project.description}
                                      </p>
                                      <div className="flex flex-wrap gap-1">
                                        {project.tech.slice(0, 3).map((techItem, techIndex) => (
                                          <span
                                            key={techIndex}
                                            className="px-1.5 sm:px-2 py-0.5 bg-code-bgTertiary text-code-blue text-[10px] sm:text-xs rounded font-mono"
                                          >
                                            {techItem}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-2 text-code-textMuted text-xs font-mono">
                                <span className="code-comment">// Fin de {tech.name}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 sm:py-12">
                    <div className="text-code-textMuted font-mono text-xs sm:text-sm">
                      <span className="code-comment">// No hay archivos en esta carpeta</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
