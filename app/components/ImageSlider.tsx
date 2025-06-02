'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ImageSliderProps {
    images: {
        src: string;
        alt: string;
    }[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const handleModalPrev = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    const handleModalNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedImageIndex === null) return;
        if (e.key === 'ArrowLeft') handleModalPrev();
        if (e.key === 'ArrowRight') handleModalNext();
        if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    return (
        <>
            <div className="relative w-full max-w-7xl mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_33.33%] min-w-0 pl-4 md:flex-[0_0_25%] cursor-pointer"
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <div className="relative aspect-square rounded-lg overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 33vw, 25vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botões de navegação do slider */}
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
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
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
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
            </div>

            {/* Modal de visualização */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <div className="relative w-full max-w-6xl aspect-[4/3]">
                            <Image
                                src={images[selectedImageIndex].src}
                                alt={images[selectedImageIndex].alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>

                        {/* Botões de navegação do modal */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleModalPrev();
                            }}
                        >
                            <svg
                                className="w-8 h-8 text-white"
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
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleModalNext();
                            }}
                        >
                            <svg
                                className="w-8 h-8 text-white"
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

                        {/* Botão de fechar */}
                        <button
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all"
                            onClick={() => setSelectedImageIndex(null)}
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
} 