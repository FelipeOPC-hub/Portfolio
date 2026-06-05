export const personalInfo = {
  name: "Felipe Omar Piña Conesa",
  title: "Técnico Superior en Desarrollo de Software",
  tagline: "Creando Soluciones Digitales Robustas",
  description: "Desarrollador enfocado en código limpio, resolución de problemas y aprendizaje continuo. Apasionado por crear experiencias digitales que combinan diseño excepcional con arquitectura técnica sólida.",
  email: "felipeomarpinaconesa@gmail.com",
  linkedin: "https://www.linkedin.com/in/felipe-omar-pi%C3%B1a-conesa-508b382b5/",
  github: "https://github.com/FelipePinaGit",
  cvUrl: "public/Curriculum Vitae Felipe Piña.pdf"
};

export const aboutMe = {
  image: "/public/yo.jpg",
  paragraphs: [
    "Hola, soy Felipe Piña, técnico superior en Desarrollo de Software con una mentalidad orientada a la resolución práctica de problemas y la entrega de valor constante. Mi enfoque se centra en construir arquitecturas Back-End sólidas utilizando Node.js, Python y SQL, sin perder de vista la agilidad que requiere el mercado actual",
    "Creo en el desarrollo incremental: priorizo el lanzamiento de MVPs funcionales y eficientes que permitan evolucionar a través de actualizaciones y mejoras continuas. Me destaco por mi capacidad de adaptación, utilizando herramientas de vanguardia e IA para optimizar tiempos de depuración y asegurar la calidad del código.",
    "Para mí, la comunicación es clave. Entiendo que el software es un puente entre una necesidad y una solución, por lo que trabajo codo a codo con los interesados para alinear los requerimientos técnicos con los objetivos del negocio"
  ]
};

export const skills = [
  {
    category: "Backend",
    icon: "Server",
    technologies: [
      "Python", 
      "Node.js",
      "Nestjs", 
      "Flask", 
      "Express.js", 
      "Prisma ORM", 
      "Morgan" 
    ]
  },
  {
    category: "Frontend",
    icon: "Code2",
    technologies: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "React",
      "TypeScript"
    ]
  },
  {
    category: "Base de Datos",
    icon: "Database", 
    technologies: [
      "MySQL", 
      "MongoDB",
      "Base de datos relacionales",
      "Bases de datos no relacionales", 
      "Consultas SQL" 
    ]
  },
  {
    category: "Herramientas & Agilidad",
    icon: "Workflow",
    technologies: [
      "Git & GitHub", 
      "Visual Studio Code", 
      "Postman", 
      "Scrum",  
      "XP (Extreme Programming)",
      "Kanban", 
      "Apis externas"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Pizzeria Argento",
    description: "Pizza Argento es una plataforma de delivery con un menú interactivo y pedidos rápidos. Permite a los administradores gestionar el catálogo y los pedidos en tiempo real.",
    image: "/public/pizza.png",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Gaston-comisso/PizzeriaArgento.git"
  },
  {
    id: 2,
    title: "Portal Deportivo",
    description: "Este portal deportivo analiza la Copa América 2024 con estadísticas detalladas y almacena la información del torneo para fácil acceso.",
    image: "/public/copa.png",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Frankk-Castle/CopaAmerica.git"
  },
  {
    id: 3,
    title: "Caso Dengue",
    description: "Esta aplicación gestiona casos de dengue en San Carlos, clasificándolos por tipo (A, B o C) y almacenando la información de forma eficiente. Permite un seguimiento fácil y seguro de los casos para apoyar la toma de decisiones.",
    image: "/public/dengue.png",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Gaston-comisso/Casos-Dengue.git"
  },
  {
    id: 4,
    title: "Gestion De Bodegas",
    description: "Esta aplicación permite gestionar la información de vuelos, reservas y pasajeros, con una interfaz intuitiva y funcionalidades avanzadas de búsqueda y filtrado.",
    image:  "/public/bodega.jpg",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "https://gestiondebodegas.netlify.app/",
    githubUrl: "https://github.com/Gaston-comisso/Gestion-de-bodega-Con-IA.git"
  },
  {
    id: 5,
    title: "Taller Mecanico",
    description: "Este proyecto es una API construida con Flask que permite gestionar la información de clientes, vehículos y reparaciones, diseñada para ser usada como backend para una aplicación web o móvil. La API se conecta a una base de datos MySQL y ofrece endpoints para realizar operaciones CRUD.",
    image:  "/public/taller.png",
    tags: ["Python", "MySQL", "React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Gaston-comisso/taller-mecanico-API.git"
  },
  {
    id: 6,
    title: "E-commerce de Productos de Computación",
    description: "Esta app distribuida en microoservicios que permite registrar clientes, productos y ventas, controlando stock y aplicando descuentos automáticamente.",
    image: "/public/ecomerce.png",
    tags: ["Node.js", "Express", "MySQL", "React", "JavaScript"],
    demoUrl: "https://techmarkert.netlify.app/login",
    githubUrl: "https://github.com/FelipePinaGit/E-commers.git"
  },
  {
    id: 7,
    title: "Gestion de Vuelos Skytract",
    description: "Esta aplicación permite gestionar la información de vuelos, reservas y pasajeros, con una interfaz intuitiva y funcionalidades avanzadas de búsqueda y filtrado.",
    image: "/public/skytract.png",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "https://gestiondevueloskytract.netlify.app/",
    githubUrl: "#"
  },
    {
    id: 8,
    title: "RoomMate AI",
    description: "Esta aplicación permite gestionar la información de vuelos, reservas y pasajeros, con una interfaz intuitiva y funcionalidades avanzadas de búsqueda y filtrado.",
    image: "/public/rommateai.png",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "https://roommateai.netlify.app/",
    githubUrl: "#"
  }
];

export const experience = [
  {
    id: 1,
    type: "education", 
    title: "Técnico Superior en Desarrollo de Software",
    organization: "Instituto de Educación Superior Maipú (IES)",
    period: "2023 - 2026",
    description: "Formación integral en desarrollo web full-stack, bases de datos relacionales y no relacionales, programación orientada a objetos y metodologías ágiles. Proyecto final con mención especial."
  },
  {
    id: 2,
    type: "experience", 
    title: "Desarrollador Full-Stack",
    organization: "Proyecto Personales",
    period: "2024 - Presente",
    description: "Desarrollo de Apps Webs utilizando React y TypeScript para el frontend, y Nestjs o Python con Flask para el backend. Implementación de bases de datos relacionales y no relacionales, integración de APIs externas, enfoque en código limpio, escalabilidad y experiencia de usuario."
  },
  {
    id: 3,
    type: "project", 
    title: "Especialización en Metodologías Ágiles",
    organization: "Proyecto de Título",
    period: "2024-2026",
    description: "Gestión de proyectos bajo marcos de trabajo Scrum, Kanban y XP (Extreme Programming)."
  },
 
];
