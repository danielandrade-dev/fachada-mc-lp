// Tipos para serviços
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  gallery?: GalleryItem[];
  features: string[];
}

// Tipos para formulário de contato
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Tipos para depoimentos
export interface Testimonial {
  id: number | string;
  name: string;
  company: string;
  content: string;
  role?: string;
  avatar?: string;
  rating: number;
}

// Tipos para projetos
export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  client: string;
  location: string;
  date: string;
  services: string[];
}

// Tipos para equipe
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

// Tipos para configurações do site
export interface SiteConfig {
  name: string;
  description: string;
  hero: {
    title: string;
    description: string;
  };
  url: string;
  ogImage: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  links: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

// Tipos para menu
export interface MenuItem {
  id: string;
  title: string;
  href: string;
  children?: MenuItem[];
}

// Tipos para breadcrumbs
export interface Breadcrumb {
  title: string;
  href: string;
}

// Tipos para paginação
export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

// Tipos para filtros
export interface Filter {
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
}

// Tipos para ordenação
export interface Sort {
  field: string;
  direction: 'asc' | 'desc';
}

// Tipos para resultados de busca
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'project' | 'blog';
  url: string;
}

// Tipos para notificações
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

// Tipos para métricas
export interface Metric {
  id: number | string;
  value: string;
  label: string;
}

// Tipos para FAQ
export interface FAQ {
  id: number | string;
  question: string;
  answer: string;
  category: string;
}

// Tipos para galeria
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
}

// Tipos para certificações
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
}

// Tipos para parceiros
export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

// Tipos para eventos
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  tags: string[];
  registrationUrl?: string;
}

// Tipos para blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  categories: string[];
  tags: string[];
}

// Tipos para comentários
export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
  replies?: Comment[];
}

// Tipos para usuário
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// Tipos para configurações de tema
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    container: string;
    section: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface Contact {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface About {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  image: string;
}

export interface WorkingHours {
  days: string;
  hours: string;
}

// Tipos para props dos componentes
export interface HeaderProps {
  siteName: string;
  contact: Contact;
  navigation?: {
    label: string;
    href: string;
  }[];
}

export interface FooterProps {
  siteName: string;
  description: string;
  contact: Contact;
  workingHours: WorkingHours[];
  links: SocialLinks;
}

export interface ServicesProps {
  title: string;
  description: string;
  services: Service[];
}

export interface ContactProps {
  contact: Contact;
  title?: string;
  description?: string;
}

export interface HeroProps {
  title: string;
  description: string;
  contact: Contact;
}

export interface MetricsProps {
  metrics: Metric[];
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export interface FAQProps {
  faqs: FAQ[];
}

export interface AboutProps {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  image: string;
}

export interface GalleryItem {
  image: string;
  title: string;
  description: string;
} 