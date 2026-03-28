import { useState, useEffect } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "// Estudiante de Ingeniería en Sistemas";
  const braceOpen = '{';
  const braceClose = '}';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const codeLines = [
    { num: 1, content: "<span className='code-keyword'>import</span> <span className='code-function'>React</span> <span className='code-keyword'>from</span> <span className='code-string'>'react'</span>;" },
    { num: 2, content: "" },
    { num: 3, content: `<span className='code-keyword'>const</span> <span className='code-function'>developer</span> = <span className='code-tag'>${braceOpen}</span>` },
    { num: 4, content: "  <span className='code-attr'>name</span>: <span className='code-string'>'Hejembert Jaramillo'</span>," },
    { num: 5, content: "  <span className='code-attr'>role</span>: <span className='code-string'>'Estudiante de Ingeniería en Sistemas'</span>," },
    { num: 6, content: "  <span className='code-attr'>semester</span>: <span className='code-number'>5</span>," },
    { num: 7, content: "  <span className='code-attr'>focus</span>: [<span className='code-string'>'Desarrollo Web'</span>, <span className='code-string'>'Arquitectura de Software'</span>]," },
    { num: 8, content: `<span className='code-tag'>${braceClose}</span>;` },
  ];

  return (
    <div className="min-h-screen bg-code-bg relative overflow-hidden" data-aos="fade-up">
      <div className="scanline-overlay"></div>
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          
          <div 
            className="w-full lg:w-1/2"
          >
            <div className="bg-code-bgSecondary rounded-lg border border-code-bgTertiary overflow-hidden">
              <div className="bg-code-bgTertiary px-3 sm:px-4 py-2 flex items-center gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-red"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-yellow"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-green"></div>
                <span className="ml-2 sm:ml-4 text-code-textMuted text-xs sm:text-sm font-mono">developer.jsx</span>
              </div>
              <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm lg:text-base overflow-x-auto">
                {codeLines.map((line) => (
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

            <div className="mt-4 sm:mt-6 font-mono text-xs sm:text-sm">
              <span className="text-code-comment">{displayText}</span>
              <span className="text-code-green animate-cursor-blink">|</span>
            </div>
          </div>

          <div 
            className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <div>
              <p className="text-code-comment text-xs sm:text-sm mb-2">
                <span className="code-keyword">class</span> <span className="code-function">Hejembert</span> <span className="code-keyword">extends</span> Developer {"{"}
              </p>
              <div className="pl-3 sm:pl-4 space-y-2">
                <p className="text-code-text text-xs sm:text-sm">
                  <span className="code-keyword">constructor</span><span className="text-code-text">()</span> {"{"}
                </p>
                <div className="pl-6 sm:pl-8 space-y-1">
                  <p className="text-code-text text-xs sm:text-sm"><span className="code-keyword">this</span>.name = <span className="code-string">'Hejembert Jaramillo'</span>;</p>
                  <p className="text-code-text text-xs sm:text-sm"><span className="code-keyword">this</span>.location = <span className="code-string">'Colombia'</span>;</p>
                  <p className="text-code-text text-xs sm:text-sm"><span className="code-keyword">this</span>.skills = [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'Python'</span>];</p>
                </div>
                <p className="text-code-text text-xs sm:text-sm">{"}"}</p>
              </div>
              <p className="text-code-text text-xs sm:text-sm">{"}"}</p>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="https://drive.google.com/file/d/1SKUGvXGIf1XY1iFDVa_cx-Ymf6jDk05C/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-code-blue/20 text-code-blue px-4 sm:px-5 py-2.5 sm:py-3 rounded border border-code-blue/30 hover:bg-code-blue/30 transition-all duration-300 font-mono text-xs sm:text-sm hover:border-code-blue/50"
              >
                <span className="code-keyword">npm</span> run view-cv
              </a>
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-code-green/10 text-code-green px-4 sm:px-5 py-2.5 sm:py-3 rounded border border-code-green/20 hover:bg-code-green/20 transition-all duration-300 font-mono text-xs sm:text-sm hover:border-code-green/40"
              >
                <span className="code-keyword">npm</span> run contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
