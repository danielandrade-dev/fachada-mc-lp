import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'ISO 9001:2015',
    issuer: 'Bureau Veritas',
    date: '2023-12',
    image: '/certifications/iso-9001.jpg',
    url: 'https://www.iso.org/iso-9001-quality-management.html',
  },
  {
    id: 'cert-2',
    title: 'ISO 14001:2015',
    issuer: 'Bureau Veritas',
    date: '2023-12',
    image: '/certifications/iso-14001.jpg',
    url: 'https://www.iso.org/iso-14001-environmental-management.html',
  },
  {
    id: 'cert-3',
    title: 'OHSAS 18001:2007',
    issuer: 'Bureau Veritas',
    date: '2023-12',
    image: '/certifications/ohsas-18001.jpg',
    url: 'https://www.iso.org/iso-45001-occupational-health-and-safety.html',
  },
  {
    id: 'cert-4',
    title: 'Selo de Excelência',
    issuer: 'Associação Brasileira de Limpeza',
    date: '2023-11',
    image: '/certifications/selo-excelencia.jpg',
  },
  {
    id: 'cert-5',
    title: 'Certificação em Segurança do Trabalho',
    issuer: 'SENAI',
    date: '2023-10',
    image: '/certifications/seguranca-trabalho.jpg',
  },
  {
    id: 'cert-6',
    title: 'Certificação em Gestão Ambiental',
    issuer: 'SENAI',
    date: '2023-09',
    image: '/certifications/gestao-ambiental.jpg',
  },
]; 