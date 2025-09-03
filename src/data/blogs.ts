export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
  salient?: boolean;
  relatedPosts?: number[];
  cta: {
    text: string;
    action: string;
    service: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Los 7 errores mortales en una web de negocios que ahuyentan ventas",
    slug: "7-errores-mortales-web-negocios-ahuyentan-ventas",
    excerpt: "Estos errores están costándole dinero a tu negocio cada día. Identifícalos y corrígelos antes de que tu competencia te deje atrás definitivamente.",
    author: {
      name: "Santiago Pérez",
      role: "CEO & Fundador",
      company: "Henovar"
    },
    category: "Errores Web",
    date: "2025-08-12",
    readTime: "7 min",
    image: "/img/blog/errores-moratles-web.png",
    tags: ["Errores Web", "Conversiones", "UX", "Ventas"],
    featured: true,
    salient: true,
    relatedPosts: [2, 6, 4],
    cta: {
      text: "Revisa mi web ahora",
      action: "Identifica y corrige los errores que están matando tus ventas",
      service: "auditoria-web"
    }
  },
  {
    id: 2,
    title: "Cómo una web rápida y optimizada puede duplicar tus ventas en 2025",
    slug: "como-web-rapida-optimizada-duplica-ventas",
    excerpt: "La velocidad de tu sitio web puede ser la diferencia entre una venta y un cliente perdido. Descubre cómo optimizar tu web para duplicar tus conversiones y generar más ingresos.",
    author: {
      name: "Kevin Monsalve",
      role: "Director de Operaciones",
      company: "Henovar"
    },
    category: "Optimización Web",
    date: "2025-01-10",
    readTime: "6 min",
    image: "/img/blog/ventas-rapida-optimizada.png",
    tags: ["Velocidad Web", "Optimización", "Conversiones", "Performance"],
    featured: false,
    salient: true,
    relatedPosts: [1, 8, 3],
    cta: {
      text: "Optimiza mi web",
      action: "Acelera tu sitio web y aumenta tus ventas con nuestra optimización profesional",
      service: "optimizacion-web"
    }
  },
  {
    id: 3,
    title: "Tu tienda online conectada a WhatsApp: cómo vender con carrito y cerrar pedidos en un solo clic",
    slug: "tienda-online-conectada-whatsapp-vender-carrito-un-clic",
    excerpt: "¿Tus clientes te escriben por WhatsApp pero se pierden en el proceso de compra? Descubre cómo crear una tienda online que se conecta directamente con WhatsApp para cerrar más ventas de forma automática y profesional.",
    author: {
      name: "Santiago Pérez",
      role: "CEO & Estratega Digital",
      company: "Henovar"
    },
    category: "E-commerce",
    date: "2025-01-18",
    readTime: "12 min",
    image: "/img/blog/whatsapp-ecommerce-integration.png",
    tags: ["WhatsApp Business", "E-commerce", "Automatización", "Conversiones", "Tienda Online"],
    featured: false,
    relatedPosts: [1, 7, 2],
    cta: {
      text: "Quiero mi tienda conectada a WhatsApp",
      action: "Multiplica tus ventas con una tienda que se conecta automáticamente a WhatsApp",
      service: "tienda-whatsapp-integration"
    }
  },
  {
    id: 4,
    title: "Tu web actual es tu peor enemigo: 5 señales de que necesitas una remodelación urgente",
    slug: "tu-web-actual-peor-enemigo-5-senales-remodelacion-urgente",
    excerpt: "¿Tu web está saboteando tu negocio? Descubre las 5 señales inequívocas de que tu sitio web se ha convertido en tu peor enemigo y está ahuyentando clientes potenciales cada día.",
    author: {
      name: "Santiago Pérez",
      role: "CEO & Estratega Digital",
      company: "Henovar"
    },
    category: "Rediseño Web",
    date: "2025-01-15",
    readTime: "8 min",
    image: "/img/blog/enemigo-web-rediseño.png",
    tags: ["Rediseño Web", "UX", "Conversiones", "Optimización"],
    featured: false,
    relatedPosts: [1, 6, 2],
    cta: {
      text: "Evalúa mi web ahora",
      action: "Descubre si tu web está trabajando a tu favor o en tu contra",
      service: "auditoria-web"
    }
  },
  {
    id: 5,
    title: "SEO invisible: cómo tu página web puede estar en Google sin que lo sepas",
    slug: "seo-invisible-pagina-web-google-sin-que-sepas",
    excerpt: "Existe todo un mundo de SEO 'invisible' que puede estar trabajando a tu favor o en tu contra. Descubre los secretos del SEO que Google ve pero tú no, y cómo aprovecharlo para multiplicar tu visibilidad.",
    author: {
      name: "Jean Rodriguez",
      role: "Director Financiero",
      company: "Henovar"
    },
    category: "SEO",
    date: "2025-01-20",
    readTime: "10 min",
    image: "/img/blog/seo-invisible-google.png",
    tags: ["SEO", "Google", "Optimización", "Visibilidad"],
    featured: true,
    relatedPosts: [7, 1, 6],
    cta: {
      text: "Optimiza mi SEO invisible",
      action: "Descubre y optimiza los factores SEO que Google ve pero tú no",
      service: "seo-optimization"
    }
  },
  {
    id: 6,
    title: "Qué es Astro y por qué lo usamos en Henovar para webs rápidas",
    slug: "que-es-astro-por-que-usamos-henovar-webs-rapidas",
    excerpt: "Descubre la tecnología revolucionaria que está transformando el desarrollo web. Astro crea sitios hasta 90% más rápidos que WordPress, mejorando conversiones y rankings en Google.",
    author: {
      name: "Kevin Monsalve",
      role: "Director de Operaciones",
      company: "Henovar"
    },
    category: "Tecnología Web",
    date: "2025-01-22",
    readTime: "8 min",
    image: "/img/blog/astro-framework-velocidad.png",
    tags: ["Astro", "Velocidad Web", "Tecnología", "Performance", "SEO"],
    featured: true,
    relatedPosts: [7, 8],
    cta: {
      text: "Quiero una web con Astro",
      action: "Crea tu sitio web súper rápido con la tecnología más avanzada",
      service: "desarrollo-astro"
    }
  },
  {
    id: 7,
    title: "El rol del SEO en páginas pequeñas y cómo empezar fácil",
    slug: "rol-seo-paginas-pequenas-como-empezar-facil",
    excerpt: "¿Piensas que el SEO es solo para grandes empresas? Te equivocas. Descubre cómo incluso una página pequeña puede dominar su mercado local con SEO bien aplicado y 3 pasos prácticos para empezar hoy.",
    author: {
      name: "Santiago Pérez",
      role: "CEO & Fundador",
      company: "Henovar"
    },
    category: "SEO Local",
    date: "2025-01-24",
    readTime: "10 min",
    image: "/img/blog/seo-paginas-pequenas-local.png",
    tags: ["SEO Local", "Pequeños Negocios", "Google My Business", "Marketing Digital"],
    featured: false,
    relatedPosts: [5, 6],
    cta: {
      text: "Optimiza mi SEO local",
      action: "Domina tu mercado local con SEO estratégico y efectivo",
      service: "seo-local"
    }
  },
  {
    id: 8,
    title: "Astro vs WordPress: qué es mejor para tu negocio en 2025",
    slug: "astro-vs-wordpress-mejor-negocio-2025",
    excerpt: "La comparación definitiva entre Astro y WordPress. Velocidad, seguridad, costos reales y facilidad de uso analizados sin tecnicismos. Descubre cuál es la mejor opción para tu tipo de negocio.",
    author: {
      name: "Santiago Pérez",
      role: "CEO & Estratega Digital",
      company: "Henovar"
    },
    category: "Comparativas",
    date: "2025-01-26",
    readTime: "12 min",
    image: "/img/blog/astro-vs-wordpress-comparacion.png",
    tags: ["Astro", "WordPress", "Comparativa", "Tecnología Web", "Decisiones Empresariales"],
    featured: true,
    relatedPosts: [6, 2],
    cta: {
      text: "Ayúdame a elegir la mejor opción",
      action: "Consulta gratuita para elegir la tecnología perfecta para tu negocio",
      service: "consultoria-tecnologica"
    }
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  if (!slug || typeof slug !== 'string') {
    return undefined;
  }
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured === true);
}

export function getRecentPosts(limit: number = 6): BlogPost[] {
  const validLimit = Math.max(0, Math.min(limit, blogPosts.length));
  return blogPosts.slice(0, validLimit);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function getBlogPostById(id: number): BlogPost | undefined {
  if (!id || typeof id !== 'number') {
    return undefined;
  }
  return blogPosts.find(post => post.id === id);
}

export function getRelatedPosts(currentPostId: number, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostById(currentPostId);
  if (!currentPost || !currentPost.relatedPosts) {
    return [];
  }
  
  const relatedPosts = currentPost.relatedPosts
    .map(id => getBlogPostById(id))
    .filter((post): post is BlogPost => post !== undefined)
    .slice(0, limit);
    
  return relatedPosts;
}