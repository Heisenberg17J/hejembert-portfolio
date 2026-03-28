import { useState } from "react";
import { technologies_data } from "../data/technologies_data";
import { services_data } from "../data/services_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../utils/iconMap";

export default function About() {
  const [selectedTech, setSelectedTech] = useState(null);
  const technologies = technologies_data;
  const services = services_data;
  const braceOpen = '{';
  const braceClose = '}';

  const serviceLines = [
    { num: 1, content: "<span className='code-comment'>// Servicios que brindo</span>" },
    { num: 2, content: "<span className='code-keyword'>const</span> <span className='code-function'>services</span> = [" },
    ...services.map((service, i) => ({
      num: 3 + i,
      content: `  <span className='code-tag'>${braceOpen}</span>
    <span className='code-attr'>name</span>: <span className='code-string'>'${service.title}'</span>,
    <span className='code-attr'>description</span>: <span className='code-string'>'${service.description}'</span>
  <span className='code-tag'>${braceClose}</span>${i < services.length - 1 ? ',' : ''}`
    })),
    { num: 3 + services.length, content: "]; // Fin de servicios" }
  ];

  const techLines = [
    { num: 1, content: "<span className='code-comment'>// Tecnologías que domino</span>" },
    { num: 2, content: `<span className='code-keyword'>import</span> <span className='code-tag'>${braceOpen}</span>` },
    ...technologies.map((tech, i) => ({
      num: 3 + i,
      content: `  ${tech.name}${i < technologies.length - 1 ? ',' : ''}`
    })),
    { num: 3 + technologies.length, content: `<span className='code-tag'>${braceClose}</span> <span className='code-keyword'>from</span> <span className='code-string'>'./skills'</span>;` }
  ];

  return (
    <section id="acerca" className="bg-code-bgSecondary py-16 sm:py-20 lg:py-32" data-aos="fade-up">
      <div className="scanline-overlay"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-code-bg border border-code-bgTertiary rounded px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm mb-4">
            <span className="code-keyword">class</span> <span className="code-function">About</span> <span className="code-keyword">extends</span> Component {"{"}
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono text-code-text mt-4">
            <span className="code-comment">// </span>Sobre Mí
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          <div 
            className="bg-code-bg rounded-lg border border-code-bgTertiary overflow-hidden flex flex-col"
          >
            <div className="bg-code-bgTertiary px-3 sm:px-4 py-2 border-b border-code-bgTertiary flex items-center gap-2 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-code-red"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-code-yellow"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-code-green"></div>
              <span className="text-code-textMuted text-xs sm:text-sm font-mono ml-2">about-me.jsx</span>
            </div>
            <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              {serviceLines.map((line) => (
                <div key={line.num} className="flex hover:bg-white/[0.02] transition-colors min-w-0">
                  <span className="line-number w-6 sm:w-8 shrink-0">{line.num}</span>
                  <span 
                    className="text-code-text break-words whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: line.content }}
                  ></span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="bg-code-bg rounded-lg border border-code-bgTertiary overflow-hidden flex flex-col"
          >
            <div className="bg-code-bgTertiary px-3 sm:px-4 py-2 border-b border-code-bgTertiary flex items-center gap-2 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-code-red"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-code-yellow"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-code-green"></div>
              <span className="text-code-textMuted text-xs sm:text-sm font-mono ml-2">skills.js</span>
            </div>
            <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              {techLines.map((line) => (
                <div key={line.num} className="flex hover:bg-white/[0.02] transition-colors min-w-0">
                  <span className="line-number w-6 sm:w-8 shrink-0">{line.num}</span>
                  <span 
                    className="text-code-text break-words whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: line.content }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block bg-code-bg border border-code-bgTertiary rounded px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm">
              <span className="code-keyword">function</span> <span className="code-function">renderStack</span>() {"{"}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {technologies.map((tech) => (
              <button 
                key={tech.id}
                onClick={() => setSelectedTech(selectedTech?.id === tech.id ? null : tech)}
                className={`group relative bg-code-bg border ${
                  selectedTech?.id === tech.id 
                    ? 'border-code-blue' 
                    : 'border-code-bgTertiary hover:border-code-textMuted'
                } rounded-lg p-2 sm:p-3 lg:p-4 transition-all duration-300 text-left`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-base sm:text-xl lg:text-2xl text-code-blue">
                    <FontAwesomeIcon icon={iconMap[tech.icon]}/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-code-text font-mono text-xs sm:text-sm font-bold truncate">{tech.name}</h3>
                    <p className="text-code-textMuted text-[10px] sm:text-xs hidden sm:block">{tech.category}</p>
                  </div>
                </div>
                {selectedTech?.id === tech.id && (
                  <div className="absolute top-0 right-0 w-2 h-2 bg-code-blue rounded-bl"></div>
                )}
              </button>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <div className="inline-block font-mono text-xs sm:text-sm text-code-textMuted">
              {"} // Fin de renderStack"}
            </div>
          </div>
        </div>

        {selectedTech && (
          <div className="animate-fadeIn">
            <div className="bg-code-bg border border-code-blue/50 rounded-lg overflow-hidden">
              <div className="bg-code-bgTertiary px-3 sm:px-4 py-2 border-b border-code-bgTertiary flex items-center justify-between">
                <span className="text-code-textMuted text-xs sm:text-sm font-mono">
                  {selectedTech.name} // Proyectos con esta tecnología
                </span>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-code-textMuted hover:text-code-text transition-colors p-1"
                >
                  <span className="font-mono text-lg">×</span>
                </button>
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedTech.projects.map((project, index) => (
                    <div
                      key={index}
                      className="group bg-code-bgSecondary border border-code-bgTertiary rounded-lg overflow-hidden hover:border-code-textMuted transition-all duration-300"
                    >
                      <div className="relative h-24 sm:h-32 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-code-bg to-transparent"></div>
                      </div>
                      <div className="p-3 sm:p-4">
                        <h4 className="text-code-text font-mono text-xs sm:text-sm font-bold mb-1 group-hover:text-code-blue transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-code-textMuted text-[10px] sm:text-xs mb-2 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((techItem, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-1.5 sm:px-2 py-0.5 bg-code-bgTertiary text-code-textMuted text-[10px] sm:text-xs rounded font-mono"
                            >
                              {techItem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-6 sm:mt-8">
          <div className="inline-block font-mono text-xs sm:text-sm text-code-textMuted">
            {"} // Fin de About Component"}
          </div>
        </div>
      </div>
    </section>
  );
}
