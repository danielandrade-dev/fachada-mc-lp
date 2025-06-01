'use client';

import { useEffect, useState } from 'react';

const keywords = [
    'Limpeza de Fachada',
    'Limpeza de Vidros',
    'Limpeza de ACM',
    'Ancoragem',
    'Linha de Vida'
];

export default function RotatingKeywords() {
    // Multiplicamos as keywords várias vezes para garantir preenchimento contínuo
    const allKeywords = [...keywords, ...keywords, ...keywords, ...keywords];

    return (
        <div className="w-full bg-orange-500 py-3 mt-20 overflow-hidden">
            <div className="relative flex">
                <div className="animate-scroll flex gap-8 whitespace-nowrap">
                    {allKeywords.map((keyword, index) => (
                        <span
                            key={`${keyword}-${index}`}
                            className="text-white font-bold text-xl md:text-2xl px-4"
                        >
                            {keyword}
                        </span>
                    ))}
                </div>
                <div className="animate-scroll flex gap-8 whitespace-nowrap" aria-hidden="true">
                    {allKeywords.map((keyword, index) => (
                        <span
                            key={`${keyword}-second-${index}`}
                            className="text-white font-bold text-xl md:text-2xl px-4"
                        >
                            {keyword}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
} 