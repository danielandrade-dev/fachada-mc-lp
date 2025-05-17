import { ThemeConfig } from '../types';

export const themeConfig: ThemeConfig = {
  colors: {
    primary: '#2563eb', // blue-600
    secondary: '#1e40af', // blue-800
    accent: '#f59e0b', // amber-500
    background: '#ffffff',
    text: '#1f2937', // gray-800
  },
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-roboto)',
  },
  spacing: {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-12 sm:py-16 lg:py-20',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}; 