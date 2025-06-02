'use client';

import Image from 'next/image';

export default function ClientsSlider() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Empresas que Confiam em Nosso Trabalho</h2>
                    <p className="text-gray-600">
                        Atendemos com excelência empresas de diversos segmentos
                    </p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto h-[500px]">
                    <Image
                        src="/servicos/clientes.jpg"
                        alt="Logotipos dos nossos clientes"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        priority
                    />
                </div>
            </div>
        </section>
    );
} 