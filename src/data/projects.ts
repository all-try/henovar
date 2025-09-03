export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  year: number;
  status: 'Completado' | 'En Desarrollo' | 'Mantenimiento';
  developers: number;
  duration: string;
  client: string;
  category: string;
  technologies: string[];
  features: string[];
  image: string;
  url?: string;
  bgImage: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portafolio",
    shortDescription: "Sitio web para un asesor contable y financiero que ofrece servicios de asesoría tributaria y contable.",
    longDescription: "Sitio web profesional para un asesor contable y financiero que ofrece servicios de asesoría tributaria y contable. Incluye secciones de servicios, formulario de contacto y un diseño moderno optimizado para SEO. La plataforma está diseñada para generar confianza y facilitar el contacto con clientes potenciales que buscan servicios de asesoría financiera y contable.",
    year: 2025,
    status: "Completado",
    developers: 2,
    duration: "3 meses",
    client: "Asesor Financiero",
    category: "Portafolio",
    technologies: ["Astro", "Tailwind", "CSS", "Javascript", "HTML"],
    features: [
      "Formularios de contacto",
      "Botones de acción",
      "Diseño a la medida",
      "Optimización SEO",
      "Seguridad avanzada",
      "Velocidad optimizada",
      "Usabilidad mejorada",
      "Diseño responsive"
    ],
    image: "/img/projects/Asesorias.png",
    url: "https://www.asesoriaschv.com/",
    bgImage: "/img/gradients/abstract-1.webp"
  },
  {
    id: 2,
    title: "Onsite",
    shortDescription: "Página web para una agencia de marketing digital.",
    longDescription: "Página web profesional para una agencia de marketing digital. Presenta servicios, casos de éxito y contacto directo con un enfoque en la generación de clientes potenciales. La plataforma está optimizada para convertir visitantes en leads calificados y mostrar la experiencia de la agencia en marketing digital y estrategias de crecimiento empresarial.",
    year: 2025,
    status: "Completado",
    developers: 2,
    duration: "2 meses",
    client: "Agencia de Marketing",
    category: "Marketing",
    technologies: ["Astro", "Tailwind", "CSS", "Javascript", "HTML"],
    features: [
      "Formularios de contacto",
      "Botones de acción",
      "Diseño a la medida",
      "Optimización SEO",
      "Seguridad avanzada",
      "Velocidad optimizada",
      "Usabilidad mejorada",
      "Generación de leads"
    ],
    image: "/img/projects/Onsite.png",
    bgImage: "/img/gradients/abstract-2.webp"
  },
  {
    id: 3,
    title: "Opsify",
    shortDescription: "Plataforma de productividad todo en uno que permite gestionar tareas, colaborar en equipos y automatizar procesos repetitivos con IA.",
    longDescription: "Plataforma de productividad todo en uno que permite gestionar tareas, colaborar en equipos y automatizar procesos repetitivos con IA. Diseñada para empresas que buscan orden y eficiencia. La plataforma integra herramientas de gestión de proyectos, comunicación en equipo y automatización inteligente para optimizar flujos de trabajo empresariales.",
    year: 2025,
    status: "Completado",
    developers: 3,
    duration: "4 meses",
    client: "Empresa de Productividad",
    category: "Productividad",
    technologies: ["Laravel", "Filament", "Tailwind", "Javascript", "PHP", "HTML"],
    features: [
      "Formularios de contacto",
      "Botones de acción",
      "Diseño a la medida",
      "Optimización SEO",
      "Seguridad avanzada",
      "Velocidad optimizada",
      "Usabilidad mejorada",
      "Automatización con IA"
    ],
    image: "/img/projects/Opsify.png",
    bgImage: "/img/gradients/abstract-3.webp"
  },
  {
    id: 4,
    title: "Pulsara",
    shortDescription: "Herramienta de productividad orientada a usuarios individuales.",
    longDescription: "Herramienta de productividad orientada a usuarios individuales. Facilita la organización personal, gestión de tareas y automatización ligera en la vida diaria. La plataforma está diseñada para ayudar a personas a mantener el control de sus actividades diarias, establecer metas personales y optimizar su tiempo de manera eficiente.",
    year: 2025,
    status: "Completado",
    developers: 2,
    duration: "3 meses",
    client: "Productividad Personal",
    category: "Productividad",
    technologies: ["Astro", "Tailwind", "CSS", "Javascript", "HTML"],
    features: [
      "Formularios de contacto",
      "Botones de acción",
      "Diseño a la medida",
      "Optimización SEO",
      "Seguridad avanzada",
      "Velocidad optimizada",
      "Usabilidad mejorada",
      "Organización personal"
    ],
    image: "/img/projects/Pulsara.png",
    bgImage: "/img/gradients/abstract-4.webp"
  },
  {
    id: 5,
    title: "Task.oi",
    shortDescription: "Landing page para una aplicación de marketing que programa publicaciones, envía mensajes automáticos y realiza seguimiento de rendimiento.",
    longDescription: "Landing page para una aplicación de marketing que programa publicaciones, envía mensajes automáticos y realiza seguimiento de rendimiento mediante automatización inteligente. La plataforma está diseñada para mostrar las capacidades de automatización de marketing y convertir visitantes en usuarios de la aplicación de marketing digital.",
    year: 2025,
    status: "Completado",
    developers: 2,
    duration: "2 meses",
    client: "Aplicación de Marketing",
    category: "Marketing",
    technologies: ["Astro", "Tailwind", "CSS", "Javascript", "HTML"],
    features: [
      "Formularios de contacto",
      "Botones de acción",
      "Diseño a la medida",
      "Optimización SEO",
      "Seguridad avanzada",
      "Velocidad optimizada",
      "Usabilidad mejorada",
      "Automatización inteligente"
    ],
    image: "/img/projects/Taskoi.png",
    bgImage: "/img/gradients/abstract-1.webp"
  },
  {
    id: 6,
    title: "Tokenix",
    shortDescription: "Plataforma blockchain para la creación de tokens criptográficos, implementación de contratos inteligentes y lanzamiento descentralizado de proyectos Web3.",
    longDescription: "Plataforma blockchain para la creación de tokens criptográficos, implementación de contratos inteligentes y lanzamiento descentralizado de proyectos Web3. La plataforma facilita el acceso a tecnologías blockchain para empresas y desarrolladores que buscan crear soluciones descentralizadas y tokenizar sus proyectos de manera segura y eficiente.",
    year: 2025,
    status: "Completado",
    developers: 3,
    duration: "5 meses",
    client: "Plataforma Blockchain",
    category: "Blockchain",
    technologies: ["Laravel", "Filament", "Tailwind", "Javascript", "PHP", "HTML"],
    features: [
      "Formularios de contacto",
      "Botones de acción",
      "Diseño a la medida",
      "Optimización SEO",
      "Seguridad avanzada",
      "Velocidad optimizada",
      "Usabilidad mejorada",
      "Tecnología Web3"
    ],
    image: "/img/projects/Tokenix.png",
    bgImage: "/img/gradients/abstract-2.webp"
  },
  {
    id: 7,
    title: "Flovo",
    shortDescription: "Solución financiera inteligente que simplifica la facturación, gestión de gastos y contabilidad.",
    longDescription: "Solución financiera inteligente que simplifica la facturación, gestión de gastos y contabilidad. Ideal para autónomos, startups y pequeñas empresas. La plataforma integra herramientas financieras esenciales para facilitar la gestión económica y optimizar los procesos contables de manera automatizada y eficiente.",
    year: 2025,
    status: "Completado",
    developers: 3,
    duration: "4 meses",
    client: "Solución Financiera",
    category: "Fintech",
    technologies: ["Laravel", "Filament", "Tailwind", "Javascript", "PHP", "HTML"],
    features: [
      "Formularios de contacto",
      "Botones de acción",
      "Diseño a la medida",
      "Optimización SEO",
      "Seguridad avanzada",
      "Velocidad optimizada",
      "Usabilidad mejorada",
      "Gestión financiera"
    ],
    image: "/img/projects/Flovo.png",
    bgImage: "/img/gradients/abstract-3.webp"
  }
];