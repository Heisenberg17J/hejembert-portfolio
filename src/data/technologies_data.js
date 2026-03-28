export const technologies_data = [
  {
    id: "java",
    name: "Java",
    icon: "java",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    hoverBorder: "hover:border-orange-500",
    category: "Apps",
    experience: "2 años",
    projects: [
      {
        title: "Pac-Man Multijugador",
        description: "Un prototipo del clásico juego de Pac-Man pero multijugador offline, con 4 niveles un poco diferentes al Pac-Man original.",
        tech: ["Java"],
        image: "/images/projects/pacman.png",
        github: "https://github.com/Heisenberg17J/PacMan-multiplayer",
      }
    ]
  },
  {
    id: "python",
    name: "Python",
    icon: "python",
    color: "from-blue-500 to-yellow-500",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500",
    category: "Apps",
    experience: "1 año",
    projects: []
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "js",
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500/30",
    hoverBorder: "hover:border-yellow-500",
    category: "Frontend",
    experience: "2 años",
    projects: [
      {
        title: "Matriz Solver",
        description: "Proyecto de Álgebra Lineal para obtener conocimientos de JavaScript, librerías y frameworks.",
        tech: ["JavaScript", "HTML", "Bulma"],
        image: "/images/projects/matriz.png",
        github: "https://github.com/Heisenberg17J/matrices-Hejembert",
        demo: "https://matrices-hejembert.vercel.app/"
      }
    ]
  },
  {
    id: "react",
    name: "React",
    icon: "react",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-500",
    category: "Frontend & Backend",
    experience: "6 meses",
    projects: [
      {
        title: "Sitio web de comidas",
        description: "Sitio web de e-commerce para comidas artesanales.",
        tech: ["React", "Supabase", "Tailwind"],
        image: "/images/projects/pagina-comidas.png",
        demo: "https://artesanalcocina.pages.dev/"
      },
      {
        title: "Menú interactivo Web",
        description: "Menú interactivo mobile-responsive para restaurante.",
        tech: ["React", "Supabase", "Tailwind"],
        image: "/images/projects/menu-digital.png",
        demo: "https://flordemexico.vercel.app/"
      }
    ]
  }
];
