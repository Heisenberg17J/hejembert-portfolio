import { Code2, ExternalLink, Github, Layers, Rocket, Sparkles } from "lucide-react";

export default function ProjectCard({ project, techColor }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative p-4 space-y-3">
        <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h4>
        
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech, idx) => (
            <span 
              key={idx}
              className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${techColor} bg-opacity-10 border border-white/10 text-white`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-1">
          {project.viewProject &&
          <a href={project.viewProject} target="_blank" className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-1.5">
            <ExternalLink className="w-3.5 h-3.5" />
            Ver Proyecto
          </a>
          }
          {project.gitHub &&
              <a href={project.gitHub} className="bg-white/5 border border-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300" target="_blank">
                <Github className="w-3.5 h-3.5" />
              </a>
          }
        </div>
      </div>
    </div>
  );
}