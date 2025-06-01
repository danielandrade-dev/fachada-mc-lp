'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ClientsSlider() {
    const [logos, setLogos] = useState<string[]>([]);

    useEffect(() => {
        const loadLogos = async () => {
            try {
                const response = await fetch('/api/logos');
                const data = await response.json();
                setLogos(data.logos);
            } catch (error) {
                console.error('Erro ao carregar logotipos:', error);
            }
        };

        loadLogos();
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Empresas que Confiam em Nosso Trabalho</h2>
                    <p className="text-gray-600">
                        Atendemos com excelência empresas de diversos segmentos
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-16 items-center justify-items-center max-w-7xl mx-auto">
                    {logos.map((logo: string, index: number) => {
                        // Calcula tamanhos diferentes para alguns logos para criar variação visual
                        const isLarge = index % 5 === 0;
                        const isMedium = index % 3 === 0;

                        return (
                            <div
                                key={logo}
                                className={`relative w-full transition-opacity duration-300 hover:opacity-80 
                                    ${isLarge ? 'h-[160px] min-w-[240px]' :
                                        isMedium ? 'h-[140px] min-w-[200px]' :
                                            'h-[120px] min-w-[180px]'}`}
                            >
                                <Image
                                    src={`/logotipos/${logo}`}
                                    alt={`Logo do cliente ${index + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 18vw"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 