import { Code2, ExternalLink, Github, Layers, Rocket, Sparkles } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../utils/iconMap";
import ProjectCard from "./ProjectCard"

export default function TechnologySection({ tech }) {
  return (
    <div className="space-y-6">
      {/* Technology Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-lg`}>
            <FontAwesomeIcon icon={iconMap[tech.icon]}/>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
            <p className="text-gray-400 text-sm">{tech.experience} de experiencia • {tech.category}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
          <Layers className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">{tech.projects.length} proyectos</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {tech.projects.map((project, idx) => (
          <ProjectCard 
            key={idx} 
            project={project} 
            techColor={tech.color}
          />
        ))}
      </div>
    </div>
  );
}