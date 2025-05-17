'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Contact } from '../types';

interface HeaderProps {
  logo?: string;
  siteName: string;
  contact: Contact;
  navigation: {
    title: string;
    href: string;
  }[];
}

export default function Header({ logo = '/servicos/LOGO_MC_INVERSO.svg', siteName, navigation = [
  { title: 'Home', href: '/' },
  { title: 'Serviços', href: '#servicos' },
  { title: 'Sobre', href: '#sobre' },
  { title: 'Contato', href: '#contato' }
] }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 shadow-sm backdrop-blur-sm'
          : 'bg-gray-900/95'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logo && (
              <Image
                src={logo}
                alt={siteName}
                width={170}
                height={170}
                className="w-[170px] h-auto"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="https://wa.me/5511960913933"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium"
            >
              Fale Conosco
            </Link>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Atendimento Online</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-orange-500 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fale Conosco
              </Link>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Atendimento Online</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}