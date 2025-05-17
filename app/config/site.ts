import { Contact, SocialLinks, WorkingHours } from '../types';

interface SiteConfig {
  name: string;
  description: string;
  hero: {
    title: string;
    description: string;
  };
  url: string;
  ogImage: string;
  contact: Contact;
  workingHours: WorkingHours[];
  links: SocialLinks;
}

export const siteConfig: SiteConfig = {
  name: 'Fachadas MC',
  description:
    'Especialistas em limpeza de fachadas, oferecendo soluções completas para preservar e valorizar seu patrimônio.',
  hero: {
    title: 'Limpeza de Fachadas Alta Qualidade em SP',
    description:
      'Uma década de excelência em limpeza de fachadas',
  },
  url: 'https://fachadasmc.com.br',
  ogImage: '/servicos/LOGO_MC_INVERSO.svg',
  links: {
    facebook: 'https://facebook.com/fachadasmc',
    instagram: 'https://instagram.com/fachadasmc',
    youtube: 'https://youtube.com/fachadasmc',
  },
  contact: {
    phone: '(11) 96091-3933',
    email: 'contato@fachadasmc.com.br',
    address: 'Pirituba - São Paulo, SP',
    workingHours: 'Segunda a Sexta: 8h às 18h'
  },
  workingHours: [
    {
      days: 'Segunda a Sexta',
      hours: '8h às 18h',
    },
    {
      days: 'Sábado',
      hours: '8h às 12h',
    },
    {
      days: 'Domingo',
      hours: 'Fechado',
    },
  ],
}; 