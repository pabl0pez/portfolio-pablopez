// Datos de TUS proyectos reales
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  status: 'Completed' | 'In Progress';
  role: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem?: string;
  solution?: string;
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: 'snugplace',
    title: 'SnugPlace',
    shortDescription:
      'Clon de Airbnb enfocado en la creación y reserva de alojamientos con una interfaz moderna, clara y funcional.',
    fullDescription:
      'SnugPlace es una aplicación web inspirada en Airbnb que permite a los usuarios explorar y gestionar alojamientos, ver detalles, realizar reservas y gestionar publicaciones. El proyecto se desarrolló con un enfoque en experiencia de usuario, componentes reutilizables y una arquitectura escalable.',
    duration: '3 months',
    status: 'Completed',
    role: 'Fullstack Developer',
    image: '/images/projects/snugplace/1.webp',
    technologies: [
      'JAVA',
      'Spring Boot',
      'TypeScript',
      'Angular',
      'MariaDB'
    ],
    features: [
      'Listado de alojamientos con información detallada',
      'Vista individual de cada alojamiento',
      'Navegación por rutas dinámicas',
      'Diseño responsive',
      'Componentes reutilizables'
    ],
    problem:
      'Quería replicar el flujo y la experiencia de una plataforma real de reservas para fortalecer mis habilidades en React.',
    solution:
      'Desarrollé una aplicación modular que simula el comportamiento de un sistema de reservas, priorizando claridad visual y organización del código.',
    challenges: [
      'Estructurar una aplicación con múltiples vistas',
      'Manejar rutas dinámicas en React',
      'Diseñar una interfaz clara y atractiva'
    ],
    learnings: [
      'Buenas prácticas en React con TypeScript',
      'Organización de proyectos frontend escalables',
      'Importancia de la experiencia de usuario'
    ]
  },
  {
    id: 'colabedu',
    title: 'ColabEdu',
    shortDescription:
      'Plataforma educativa colaborativa basada en estructuras de datos personalizadas.',
    fullDescription:
      'ColabEdu es un proyecto académico que modela una red social educativa donde los estudiantes pueden conectarse, compartir contenidos y solicitar ayuda. El sistema fue desarrollado utilizando exclusivamente estructuras de datos implementadas desde cero.',
    duration: '1 mes',
    status: 'Completed',
    role: 'Desarrollador Full Stack (Académico)',
    image: '/images/projects/colabedu.jpg',
    technologies: [
      'Java',
      'JavaFX',
      'MySQL',
      'Git'
    ],
    features: [
      'Conexiones entre estudiantes mediante grafo no dirigido',
      'Gestión de contenidos usando árbol binario de búsqueda',
      'Sistema de solicitudes de ayuda con cola de prioridad',
      'Historial de interacciones con listas enlazadas',
      'Interfaz gráfica interactiva'
    ],
    problem:
      'La asignatura exigía la creación de un sistema funcional sin usar estructuras de datos nativas del lenguaje.',
    solution:
      'Diseñé una aplicación con arquitectura clara que integra estructuras de datos personalizadas y una interfaz gráfica usable.',
    challenges: [
      'Implementar estructuras de datos desde cero',
      'Visualizar relaciones complejas entre usuarios',
      'Mantener el código organizado y entendible'
    ],
    learnings: [
      'Implementación práctica de estructuras de datos',
      'Diseño de aplicaciones académicas escalables',
      'Separación de lógica, datos e interfaz'
    ]
  },
  {
    id: 'electrocolombiano',
    title: 'Electrocolombiano',
    shortDescription:
      'Proyecto web enfocado en la visualización y promoción de productos electrónicos.',
    fullDescription:
      'Electrocolombiano es un proyecto web desarrollado como práctica de frontend, enfocado en la presentación de productos electrónicos mediante una interfaz limpia, moderna y responsive.',
    duration: '2 semanas',
    status: 'Completed',
    role: 'Frontend Developer',
    image: '/images/projects/electrocolombiano.jpg',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Git'
    ],
    features: [
      'Listado de productos electrónicos',
      'Diseño responsive',
      'Interfaz clara y estructurada',
      'Organización visual por categorías',
      'Navegación sencilla'
    ],
    problem:
      'Necesitaba un proyecto práctico para reforzar mis bases en desarrollo web frontend.',
    solution:
      'Construí una página web funcional enfocada en estructura, estilos y experiencia visual.',
    challenges: [
      'Diseñar una estructura visual atractiva',
      'Mantener consistencia en estilos',
      'Adaptar el diseño a diferentes pantallas'
    ],
    learnings: [
      'Fundamentos sólidos de HTML, CSS y JavaScript',
      'Diseño responsive',
      'Buenas prácticas de maquetación web'
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (count: number = 3): Project[] => {
  return projects.slice(0, count);
};