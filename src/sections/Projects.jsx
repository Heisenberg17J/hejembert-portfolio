import { useState } from "react";
import { Code2, ExternalLink, Github, Layers, Rocket, Sparkles } from "lucide-react";
import { technologies_data } from "../data/technologies_data";
import TechnologySection from "../components/layout/projects/TecnologySection";
import FilterButton from "../components/layout/FilterButton";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos", icon: Layers },
    { id: "Apps", label: "Apps", icon: Code2 },
    { id: "Frontend", label: "Frontend", icon: Sparkles },
    { id: "Frontend & Backend", label: "Full Stack", icon: Rocket }
  ];

  const filteredTechnologies = selectedCategory === "all"
    ? technologies_data
    : technologies_data.filter(tech => tech.category === selectedCategory);

  return (
    <section id="proyectos" className="relative bg-[#020617] py-20 lg:py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proyectos que
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              He Construido
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Una colección de proyectos que demuestran mi experiencia en diferentes
            tecnologías y mi capacidad para resolver problemas.
         </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
              icon={category.icon}
            >
              {category.label}
            </FilterButton>
          ))}
        </div>

        {/* Technologies and Projects */}
        <div className="space-y-16">
          {filteredTechnologies.length > 0 ? (
            filteredTechnologies.map((tech) => (
              <TechnologySection key={tech.id} tech={tech} />
            ))
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4">
                <Layers className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-400 text-lg">No hay proyectos en esta categoría</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}