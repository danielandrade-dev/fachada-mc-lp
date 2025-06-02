export interface PortfolioImage {
    src: string;
    alt: string;
}

// Lista de imagens do portfólio - será substituída pelos endereços fornecidos
export const portfolioImages: PortfolioImage[] = [
    {
        src: '/galeria/1.jpg',
        alt: 'Descrição da Imagem 1'
    }, {
        src: '/galeria/2.jpg',
        alt: 'Descrição da Imagem 2'
    }, {
        src: '/galeria/3.jpg',
        alt: 'Descrição da Imagem 3'
    }, {
        src: '/galeria/4.jpg',
        alt: 'Descrição da Imagem 4'
    }, {
        src: '/galeria/5.jpg',
        alt: 'Descrição da Imagem 5'
    },
    // Adicione mais imagens aqui
]; 