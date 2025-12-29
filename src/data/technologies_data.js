
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
            description: "un prototipo del clasico juego de pacman pero multijugador ofline, con 4 niveles un poco diferentes al pacman original",
            tech: ["Java"],
            image: "/images/projects/pacman.png",
            gitHub: "https://github.com/Heisenberg17J/PacMan-multiplayer",
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
        experience: "1 años",
        projects: [

        ]
    },
    {
        id: "javascript",
        name: "JavaScript",
        icon: "js",
        color: "from-yellow-500 to-orange-500",
        borderColor: "border-yellow-500/30",
        hoverBorder: "hover:border-yellow-500",
        category: "Frontend & Backend",
        experience: "2 años",
        projects: [
        {
            title: "Matriz Solver",
            description: "Es un proyecto de Álgebra Lineal para obtener conocimientos de javascript, librerías y frameworks.",
            tech: ["Javascript", "HTML", "Bulma"],
            image: "/images/projects/matriz.png",
            gitHub: "https://github.com/Heisenberg17J/matrices-Hejembert",
            viewProject: "https://matrices-hejembert.vercel.app/"

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
        category: "Frontend",
        experience: "6 meses",
        projects: [
        {
            title: "Sitio web de comidas",
            description: "Sitio web de e-commerce para comidas artesanales",
            tech: ["React", "Supabase", "Tailwind"],
            image: "/images/projects/pagina-comidas.png",
            viewProject: "https://artesanalcocina.netlify.app/"
        }
        ]
    }
];