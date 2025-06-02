import React from 'react';
import { FaPiggyBank, FaUserTie, FaHardHat, FaShieldAlt, FaCheck } from 'react-icons/fa';

const items = [
  {
    title: 'INVESTIMENTO',
    icon: <FaPiggyBank size={22} className="mb-1 text-white" aria-hidden="true" />,
    content: [
      'Melhor Custo-Benefício',
      'Economia de Tempo de Serviço',
      'Produtos Profissionais',
      'Consumo de Água Reduzido',
    ],
  },
  {
    title: 'EQUIPE QUALIFICADA',
    icon: <FaUserTie size={22} className="mb-1 text-white" aria-hidden="true" />,
    content: [
      'Profissionais Certificados',
      'Acesso Por Corda Níveis 01, 02 e 03',
      'Operadores de Plataformas Elevatórias',
      'Profissionais NR 35 e NR 18',
    ],
  },
  {
    title: 'SEGURANÇA EPI',
    icon: <FaHardHat size={22} className="mb-1 text-white" aria-hidden="true" />,
    content: [
      'Equipamentos Profissionais com CA',
      'Equipe Uniformizada',
    ],
  },
  {
    title: 'GARANTIAS LEGAIS',
    icon: <FaShieldAlt size={22} className="mb-1 text-white" aria-hidden="true" />,
    content: [
      'Técnico de Segurança do Trabalho',
      'Contrato de Garantia de Satisfação',
      'ARTs Assinadas Por Engenheiro Credenciado Junto ao CREA',
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-white" aria-labelledby="benefits-heading">
      <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
        Por que escolher nossos serviços?
      </h2>
      <p className="text-base md:text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Qualidade, Segurança e Tranquilidade <br />Em cada etapa do serviço prestado.
      </p>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center bg-orange-500 border border-orange-500 rounded-xl p-6 min-h-[220px]"
            tabIndex={0}
            aria-label={item.title}
          >
            <h3 className="text-base font-semibold mb-2 text-white text-center tracking-wide uppercase min-h-[2.5em] flex items-center justify-center">
              {item.title}
            </h3>
            <hr className="border-t border-white w-4/5 mb-3 opacity-60" />
            <ul className="space-y-1 text-center w-full">
              {item.content.map((line, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-white font-normal leading-snug w-full justify-center">
                  <FaCheck className="text-white flex-shrink-0 mt-1" size={14} aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 