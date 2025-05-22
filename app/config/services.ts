import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: "Limpeza de Fachadas",
    description: "Resultados imediatos e duradouros para vidro, concreto, granito e outras superfícies.",
    icon: "building",
    image: "/servicos/hidrojateamento_breezes.jpg",
    features: [
      "Limpeza de Vidros",
      "Remoção de Sujeira e Poluição",
      "Tratamento de Chuva Acida"
    ]
  },
  {
    id: 2,
    title: "Polimento de ACM",
    description: "Recuperamos o Brilho e a Beleza do seu Revestimento.",
    icon: "sparkles",
    image: "/servicos/polimento.jpg",
    features: [
      "Polimento Profissional",
      "Revitalização da Superfície",
    ]
  },
  {
    id: 4,
    title: "Vedação de Vidros",
    description: "Acabe Com As Infiltrações E Garanta A Proteção Da Sua Fachada.",
    icon: "window",
    image: "/servicos/vidro_vedacao.jpg",
    features: [
      "Vedação com Selante PU",
      "Reparos de Infiltrações",
      "Manutenção Preventiva"
    ]
  },
  {
    id: 5,
    title: "Limpeza de Fachadas em Pele de Vidro",
    description: "Limpeza de estruturas em pele de vidro, garantindo transparência e durabilidade.",
    icon: "building",
    image: "/servicos/limpeza_pele_de_vidros.jpg",
    features: [
      "Verificação de Infiltrações",
      "Tratamento de Manchas"
    ]
  },
  {
    id: 6,
    title: "Hidrojateamento de Fachada",
    description: "Removemos Sujidades Persistentes com Eficiência, Sem Danificar Sua Fachada.",
    icon: "water",
    image: "/servicos/hidrojateamento.jpg",
    features: [
      "Limpeza com Equipamento de Alta Pressão",
      "Remoção de Sujidades Persistentes",
      "Aplicação de Produtos Químicos Específicos para Cada Superfície"
    ]
  },
  {
    id: 8,
    title: "Instalação de Ancoragem e Linha de Vida",
    description: "Instalamos Sistemas de Proteção, para Trabalhos em Altura, Garantindo a Segurança da Sua Equipe e Conformidade com as Normas NR-35. Oferecemos Soluções Personalizadas para Cada Tipo de Fachada.",
    icon: "safety",
    image: "/servicos/limpeza_vidros.jpg",
    gallery: [
      {
        image: "/servicos/ancoragem/ancoragem-1.jpg",
        title: "Sistema de Ancoragem Permanente",
        description: "Instalação de linha de vida permanente em aço inox"
      },
      {
        image: "/servicos/ancoragem/ancoragem-4.jpg",
        title: "Postes de Ancoragem",
        description: "Postes fabricados conforme NBR 16325"
      },
      {
        image: "/servicos/ancoragem/ancoragem-2.jpg",
        title: "Teste de Resistência",
        description: "Ensaio de arrancamento estático com laudo"
      },
      {
        image: "/servicos/ancoragem/ancoragem-3.jpg",
        title: "Instalação Profissional",
        description: "Equipe técnica especializada em instalação"
      }
    ],
    features: [
      "Sistema completo de segurança com certificação NR-35",
      "Instalação rápida por equipe especializada",
      "Laudo técnico detalhado com memorial de cálculo",
      "Fabricação de postes conforme NBR 16325",
      "Materiais em aço inox ASTM A351",
      "Suporte técnico 24/7 para sua equipe",
      "Treinamento completo de utilização",
      "Manutenção preventiva mensal",
      "Sistemas permanentes e temporários",
      "Projeto personalizado para sua fachada",
      "ART (Anotação de Responsabilidade Técnica) garantida",
      "Engenharia responsável pelo projeto"
    ]
  }
]; 