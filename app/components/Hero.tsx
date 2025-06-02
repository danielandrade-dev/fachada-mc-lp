'use client';

import Image from 'next/image';

interface HeroProps {
  description: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export default function Hero({ description, contact }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/patterns/pattern.svg')] opacity-10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-transparent" />
        <div className="absolute inset-0">
          <Image
            src="/servicos/Limpeza-de-fachada-em-Joinville.jpg"
            alt="Limpeza de fachada em Joinville"
            fill
            className="object-cover opacity-20 scale-x-[-1]"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 md:mb-12">
            <span className="inline-block px-4 md:px-6 py-1.5 md:py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4 md:mb-8">
              Transformando Projetos em Realidade
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-8 leading-tight">
              Limpeza de Fachadas <br />Alta Qualidade em SP
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-12 leading-relaxed max-w-3xl mx-auto">
              {description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
            <a
              href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-orange-600 text-white px-6 md:px-8 py-2.5 md:py-4 rounded-full hover:bg-orange-700 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium text-sm md:text-base"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Fale Conosco
            </a>
            <a
              href="#servicos"
              className="group bg-white text-orange-600 px-6 md:px-8 py-2.5 md:py-4 rounded-full hover:bg-orange-50 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium border border-orange-200 text-sm md:text-base"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 