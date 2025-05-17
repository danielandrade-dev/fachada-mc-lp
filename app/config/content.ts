import { Testimonial, FAQ } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    company: "Edifício Comercial XYZ",
    content: "Excelente serviço! A equipe da Fachadas MC realizou um trabalho impecável na limpeza da nossa fachada. Profissionais muito competentes e atenciosos.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "Shopping Center ABC",
    content: "Contratamos a Fachadas MC para a manutenção periódica do nosso shopping e estamos muito satisfeitos com o resultado. Pontualidade e qualidade no atendimento.",
    rating: 5,
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    company: "Condomínio Residencial",
    content: "Serviço de primeira qualidade! A limpeza da fachada do nosso condomínio ficou perfeita. Recomendo fortemente!",
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Qual a frequência recomendada para limpeza de fachadas?",
    answer: "A frequência ideal varia de acordo com o tipo de edificação e localização. Em geral, recomendamos limpeza a cada 6 meses para manter a aparência e preservar o material.",
    category: "Serviços"
  },
  {
    id: 2,
    question: "Vocês trabalham com seguro?",
    answer: "Sim, todos os nossos serviços são cobertos por seguro de responsabilidade civil, garantindo tranquilidade e segurança para nossos clientes.",
    category: "Segurança"
  },
  {
    id: 3,
    question: "Quais tipos de fachadas vocês atendem?",
    answer: "Atendemos diversos tipos de fachadas, incluindo vidro, concreto, granito, mármore, cerâmica e outros materiais. Realizamos uma avaliação prévia para determinar o melhor método de limpeza.",
    category: "Serviços"
  },
  {
    id: 4,
    question: "Como é feito o orçamento?",
    answer: "O orçamento é realizado após uma visita técnica, onde avaliamos as condições da fachada, tipo de material, altura do prédio e outros fatores relevantes para determinar o melhor método e custo.",
    category: "Orçamento"
  },
  {
    id: 5,
    question: "Vocês trabalham em finais de semana?",
    answer: "Sim, realizamos serviços em finais de semana e feriados, especialmente em locais com grande circulação de pessoas durante a semana.",
    category: "Horários"
  },
]; 