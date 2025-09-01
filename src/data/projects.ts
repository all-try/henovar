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
    title: "Budgetify",
    shortDescription: "Aplicación web completa diseñada para ayudar a usuarios a gestionar sus finanzas personales de manera eficiente.",
    longDescription: "Budgetify es una aplicación web completa diseñada para ayudar a usuarios a gestionar sus finanzas personales de manera eficiente. La plataforma incluye funcionalidades avanzadas como categorización automática de gastos, reportes detallados, alertas de presupuesto, sincronización bancaria y análisis predictivo de gastos futuros. Con una interfaz intuitiva y moderna, permite a los usuarios tomar control total de sus finanzas.",
    year: 2024,
    status: "Completado",
    developers: 4,
    duration: "6 meses",
    client: "StartupTech Solutions",
    category: "Fintech",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Stripe API"],
    features: [
      "Categorización automática de gastos",
      "Reportes y gráficos detallados",
      "Alertas de presupuesto personalizables",
      "Sincronización con cuentas bancarias",
      "Análisis predictivo de gastos",
      "Exportación de datos a Excel/PDF",
      "Modo oscuro y claro",
      "Aplicación móvil responsive"
    ],
    image: "/img/projects/Onsite.png",
    url: "https://budgetify-demo.com",
    bgImage: "/img/gradients/abstract-1.webp"
  },
  {
    id: 2,
    title: "EcoMarket",
    shortDescription: "Plataforma de comercio electrónico especializada en productos ecológicos y sostenibles.",
    longDescription: "EcoMarket es una plataforma de comercio electrónico especializada en productos ecológicos y sostenibles. Incluye un sistema completo de gestión de inventario, procesamiento de pagos, sistema de reseñas, programa de fidelización, calculadora de huella de carbono y marketplace para vendedores independientes. La plataforma promueve el consumo responsable y conecta a consumidores conscientes con productos sostenibles.",
    year: 2024,
    status: "Completado",
    developers: 6,
    duration: "8 meses",
    client: "GreenTech Ventures",
    category: "E-commerce",
    technologies: ["Next.js", "Prisma", "MySQL", "Stripe", "AWS S3", "Redis", "Docker"],
    features: [
      "Catálogo de productos ecológicos",
      "Sistema de pagos integrado",
      "Gestión de inventario avanzada",
      "Programa de fidelización",
      "Calculadora de huella de carbono",
      "Marketplace para vendedores",
      "Sistema de reseñas y calificaciones",
      "Panel de administración completo"
    ],
    image: "/img/projects/Opsify.png",
    url: "https://ecomarket-demo.com",
    bgImage: "/img/gradients/abstract-2.webp"
  },
  {
    id: 3,
    title: "LearnHub",
    shortDescription: "Plataforma educativa online con cursos interactivos, evaluaciones y seguimiento del progreso.",
    longDescription: "LearnHub es una plataforma educativa online completa que ofrece cursos interactivos, evaluaciones automáticas y seguimiento detallado del progreso estudiantil. Incluye herramientas para instructores, sistema de certificaciones, foros de discusión, videoconferencias integradas, gamificación del aprendizaje y análisis de rendimiento. Diseñada para instituciones educativas y empresas que buscan capacitar a su personal.",
    year: 2023,
    status: "Mantenimiento",
    developers: 5,
    duration: "10 meses",
    client: "EduTech Institute",
    category: "Educación",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Socket.io", "FFmpeg", "Moodle API"],
    features: [
      "Cursos interactivos multimedia",
      "Evaluaciones automáticas",
      "Seguimiento de progreso detallado",
      "Sistema de certificaciones",
      "Videoconferencias integradas",
      "Foros de discusión",
      "Gamificación del aprendizaje",
      "Panel para instructores"
    ],
    image: "/img/projects/Pulsara.png",
    url: "https://learnhub-demo.com",
    bgImage: "/img/gradients/abstract-3.webp"
  },
  {
    id: 4,
    title: "HealthTracker Pro",
    shortDescription: "Aplicación de salud y bienestar para el seguimiento integral de métricas de salud.",
    longDescription: "HealthTracker Pro es una aplicación integral de salud y bienestar que permite a los usuarios monitorear sus métricas de salud, establecer objetivos, recibir recordatorios personalizados y conectar con dispositivos wearables. Incluye seguimiento de actividad física, nutrición, sueño, medicamentos, citas médicas y generación de reportes para compartir con profesionales de la salud.",
    year: 2024,
    status: "En Desarrollo",
    developers: 3,
    duration: "7 meses",
    client: "MedTech Solutions",
    category: "Salud",
    technologies: ["React Native", "Node.js", "MongoDB", "HealthKit", "Google Fit", "Firebase"],
    features: [
      "Seguimiento de actividad física",
      "Monitor de nutrición y calorías",
      "Registro de medicamentos",
      "Seguimiento del sueño",
      "Integración con wearables",
      "Recordatorios personalizados",
      "Reportes médicos",
      "Sincronización en la nube"
    ],
    image: "/img/projects/Taskoi.png",
    bgImage: "/img/gradients/abstract-4.webp"
  },
  {
    id: 5,
    title: "TaskFlow Enterprise",
    shortDescription: "Sistema de gestión empresarial con módulos de CRM, facturación y reportes avanzados.",
    longDescription: "TaskFlow Enterprise es un sistema integral de gestión empresarial que incluye módulos de CRM, facturación, gestión de proyectos, recursos humanos, inventario y reportes avanzados. Diseñado para optimizar procesos internos, mejorar la productividad y proporcionar insights valiosos para la toma de decisiones. Incluye dashboard ejecutivo, automatización de workflows y integración con herramientas externas.",
    year: 2023,
    status: "Completado",
    developers: 8,
    duration: "12 meses",
    client: "Corporate Solutions Inc",
    category: "Empresarial",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "SignalR", "Power BI", "Azure"],
    features: [
      "CRM completo con pipeline de ventas",
      "Sistema de facturación automática",
      "Gestión de proyectos y tareas",
      "Módulo de recursos humanos",
      "Control de inventario",
      "Reportes y analytics avanzados",
      "Dashboard ejecutivo",
      "Automatización de workflows"
    ],
    image: "/img/projects/Tokenix.png",
    url: "https://taskflow-demo.com",
    bgImage: "/img/gradients/abstract-1.webp"
  },
  {
    id: 6,
    title: "StreamVibe",
    shortDescription: "Plataforma de streaming de video con contenido bajo demanda y transmisiones en vivo.",
    longDescription: "StreamVibe es una plataforma completa de streaming de video que ofrece contenido bajo demanda y transmisiones en vivo. Incluye sistema de suscripciones, recomendaciones personalizadas basadas en IA, chat en tiempo real, monetización para creadores, analytics detallados y soporte para múltiples calidades de video. Optimizada para alta concurrencia y distribución global de contenido.",
    year: 2024,
    status: "Completado",
    developers: 7,
    duration: "14 meses",
    client: "MediaTech Studios",
    category: "Entretenimiento",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS CloudFront", "FFmpeg", "Redis"],
    features: [
      "Streaming de video HD/4K",
      "Transmisiones en vivo",
      "Recomendaciones con IA",
      "Sistema de suscripciones",
      "Chat en tiempo real",
      "Monetización para creadores",
      "Analytics de visualización",
      "CDN global optimizado"
    ],
    image: "/img/projects/AppLumex.png",
    url: "https://streamvibe-demo.com",
    bgImage: "/img/gradients/abstract-2.webp"
  },
  {
    id: 7,
    title: "SmartHome Hub",
    shortDescription: "Aplicación IoT para control centralizado de dispositivos domésticos inteligentes.",
    longDescription: "SmartHome Hub es una aplicación IoT completa para el control centralizado de dispositivos domésticos inteligentes. Permite automatización basada en horarios y sensores, control por voz, monitoreo de consumo energético, alertas de seguridad, integración con asistentes virtuales y control remoto desde cualquier lugar. Incluye dashboard personalizable y escenarios predefinidos para diferentes situaciones.",
    year: 2023,
    status: "Completado",
    developers: 4,
    duration: "9 meses",
    client: "IoT Innovations Ltd",
    category: "IoT",
    technologies: ["Flutter", "Python", "MQTT", "InfluxDB", "Grafana", "Alexa Skills Kit"],
    features: [
      "Control centralizado de dispositivos",
      "Automatización inteligente",
      "Control por voz",
      "Monitoreo energético",
      "Alertas de seguridad",
      "Integración con Alexa/Google",
      "Dashboard personalizable",
      "Control remoto"
    ],
    image: "/img/projects/Montra.png",
    bgImage: "/img/gradients/abstract-3.webp"
  },
  {
    id: 8,
    title: "CryptoPortfolio",
    shortDescription: "Plataforma de gestión de portafolios de criptomonedas con trading automatizado.",
    longDescription: "CryptoPortfolio es una plataforma avanzada de gestión de portafolios de criptomonedas que incluye trading automatizado, análisis técnico, alertas de precio, seguimiento de P&L, integración con múltiples exchanges, bot de trading personalizable y reportes fiscales. Diseñada para traders e inversores que buscan optimizar sus estrategias de inversión en criptomonedas.",
    year: 2024,
    status: "En Desarrollo",
    developers: 5,
    duration: "8 meses",
    client: "CryptoTech Ventures",
    category: "Fintech",
    technologies: ["React", "Python", "PostgreSQL", "WebSocket", "TradingView", "Binance API"],
    features: [
      "Gestión de portafolios multi-exchange",
      "Trading automatizado con bots",
      "Análisis técnico avanzado",
      "Alertas de precio personalizables",
      "Seguimiento de P&L en tiempo real",
      "Backtesting de estrategias",
      "Reportes fiscales automáticos",
      "Dashboard de trading profesional"
    ],
    image: "/img/projects/Bemine.png",
    bgImage: "/img/gradients/abstract-4.webp"
  },
  {
    id: 9,
    title: "FoodieConnect",
    shortDescription: "Red social gastronómica para compartir recetas, reseñas de restaurantes y experiencias culinarias.",
    longDescription: "FoodieConnect es una red social especializada en gastronomía que permite a los usuarios compartir recetas, escribir reseñas de restaurantes, seguir chefs profesionales, crear listas de deseos culinarios y descubrir nuevas experiencias gastronómicas. Incluye sistema de puntuación, recomendaciones personalizadas, mapa de restaurantes cercanos y funcionalidad de reservas integrada.",
    year: 2023,
    status: "Completado",
    developers: 6,
    duration: "11 meses",
    client: "Culinary Networks",
    category: "Social",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Elasticsearch", "Google Maps API"],
    features: [
      "Compartir recetas con fotos",
      "Reseñas de restaurantes",
      "Seguimiento de chefs y usuarios",
      "Mapa de restaurantes cercanos",
      "Listas de deseos culinarios",
      "Recomendaciones personalizadas",
      "Sistema de reservas",
      "Feed social personalizado"
    ],
    image: "/img/projects/Flovo.png",
    url: "https://foodieconnect-demo.com",
    bgImage: "/img/gradients/abstract-1.webp"
  }
];