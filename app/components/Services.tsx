'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { GalleryItem } from '../types';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  gallery?: GalleryItem[];
}

interface ServicesProps {
  title: string;
  description: string;
  services: Service[];
}

function ImageGallery({ items }: { items: GalleryItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-96">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Botões de navegação */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        onClick={scrollPrev}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        onClick={scrollNext}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-all"
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Services({ services }: ServicesProps) {
  const facadeServices = services.filter(service => service.id !== 8);
  const safetyService = services.find(service => service.id === 8);

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Especialistas em Limpeza de Fachadas
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Oferecemos soluções completas e especializadas para limpeza de fachadas, com resultados imediatos e duradouros.
          </p>
        </div>

        {/* Seção de Serviços de Fachada */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Nossos Serviços Especializados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facadeServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Segurança */}
        {safetyService && (
          <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 rounded-3xl p-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-6 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
                  Serviço Complementar
                </span>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {safetyService.title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Segurança e conformidade para sua equipe
                </p>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {safetyService.description}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={safetyService.image}
                      alt={safetyService.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Galeria de Imagens com Slider */}
                  {safetyService.gallery && (
                    <div className="mt-6">
                      <ImageGallery items={safetyService.gallery} />
                    </div>
                  )}
                  
                  {/* Seção de Certificações */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Certificações e Normas
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>NR-35 - Trabalho em Altura</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>NBR 16325 - Postes de Linha de Vida</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>ASTM A351 - Aço Inox</span>
                      </div>
                    </div>
                  </div>

                  {/* Seção de Documentação */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Documentação Técnica Completa
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>ART de Projeto e Instalação</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Laudo de Teste de Qualidade e Conformidade</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Ensaio de Arrancamento Estático com Laudo</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Numeração com Lacres e Documentação Fotográfica</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Seguro de Responsabilidade Técnica</span>
                      </div>
                    </div>
                  </div>

                  {/* Seção de Garantias */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Garantias e Segurança
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Engenharia Responsável pelo Projeto</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Memorial de Cálculo Detalhado</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Certificação NR-35</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                    O que oferecemos:
                  </h4>
                  <div className="grid gap-4">
                    {safetyService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-orange-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">
                              {feature}
                            </h5>
                            <p className="text-gray-600">
                              {getFeatureDescription(feature)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Função auxiliar para adicionar descrições detalhadas para cada feature
function getFeatureDescription(feature: string): string {
  const descriptions: { [key: string]: string } = {
    "Sistema completo de segurança com certificação NR-35": "Sistemas homologados e certificados, seguindo todas as normas de segurança para trabalhos em altura.",
    "Instalação rápida por equipe especializada": "Equipe técnica altamente qualificada para instalação rápida e segura dos sistemas.",
    "Laudo técnico detalhado com memorial de cálculo": "Documentação técnica completa com memorial de cálculo para linha de vida, garantindo a segurança estrutural do sistema.",
    "Fabricação de postes conforme NBR 16325": "Postes de linha de vida fabricados seguindo rigorosamente a norma NBR 16325, garantindo qualidade e segurança.",
    "Materiais em aço inox ASTM A351": "Utilizamos materiais em aço inox de alta qualidade, conforme especificação ASTM A351, para máxima durabilidade e resistência.",
    "Suporte técnico 24/7 para sua equipe": "Assistência técnica permanente, disponível 24 horas por dia, 7 dias por semana.",
    "Treinamento completo de utilização": "Capacitação detalhada da sua equipe para utilização segura dos sistemas de ancoragem.",
    "Manutenção preventiva mensal": "Programa regular de inspeção e manutenção para garantir a segurança contínua dos sistemas.",
    "Sistemas permanentes e temporários": "Soluções adaptáveis para diferentes necessidades, desde instalações fixas até sistemas móveis.",
    "Projeto personalizado para sua fachada": "Desenvolvimento de projeto específico para as características da sua fachada.",
    "ART (Anotação de Responsabilidade Técnica) garantida": "Garantimos a ART para todos os projetos, com engenharia responsável e conformidade legal.",
    "Engenharia responsável pelo projeto": "Projetos desenvolvidos e assinados por engenheiros especializados em segurança do trabalho."
  };
  return descriptions[feature] || "";
} 