'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface GalleryProps {
    initialImages: string[];
}

export default function Gallery({ initialImages }: GalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handlePrevImage = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLoading(true);
        setSelectedImageIndex(prev =>
            prev !== null ? (prev - 1 + initialImages.length) % initialImages.length : null
        );
    }, [initialImages.length]);

    const handleNextImage = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLoading(true);
        setSelectedImageIndex(prev =>
            prev !== null ? (prev + 1) % initialImages.length : null
        );
    }, [initialImages.length]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (selectedImageIndex === null) return;

        if (e.key === 'ArrowLeft') {
            setIsLoading(true);
            setSelectedImageIndex((prev) =>
                prev !== null ? (prev - 1 + initialImages.length) % initialImages.length : null
            );
        } else if (e.key === 'ArrowRight') {
            setIsLoading(true);
            setSelectedImageIndex((prev) =>
                prev !== null ? (prev + 1) % initialImages.length : null
            );
        } else if (e.key === 'Escape') {
            setSelectedImageIndex(null);
        }
    }, [initialImages.length]);

    useEffect(() => {
        if (selectedImageIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedImageIndex, handleKeyDown]);

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Galeria de Projetos</h2>
                    <p className="text-gray-600 text-lg">
                        Conheça alguns dos nossos trabalhos realizados com excelência e dedicação
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {initialImages.map((image, index) => (
                        <div
                            key={image}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                            onClick={() => {
                                setIsLoading(true);
                                setSelectedImageIndex(index);
                            }}
                        >
                            <div className="aspect-square relative bg-white">
                                <Image
                                    src={`/galeria/${image}`}
                                    alt={`Projeto ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Ver Projeto
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para visualização ampliada */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    {/* Botão Anterior */}
                    <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-4 transition-all hover:scale-110"
                        aria-label="Imagem anterior"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {/* Imagem */}
                    <div className="relative w-full max-w-5xl h-[85vh] px-16">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                            </div>
                        )}
                        <Image
                            src={`/galeria/${initialImages[selectedImageIndex]}`}
                            alt={`Projeto ${selectedImageIndex + 1}`}
                            fill
                            className="object-contain transition-opacity duration-300"
                            quality={100}
                            onLoadingComplete={() => setIsLoading(false)}
                            priority
                        />

                        {/* Contador de imagens */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-6 py-3 rounded-full font-medium tracking-wide">
                            {selectedImageIndex + 1} / {initialImages.length}
                        </div>
                    </div>

                    {/* Botão Próximo */}
                    <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-4 transition-all hover:scale-110"
                        aria-label="Próxima imagem"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                    {/* Botão Fechar */}
                    <button
                        className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors hover:scale-110 transform"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
} 