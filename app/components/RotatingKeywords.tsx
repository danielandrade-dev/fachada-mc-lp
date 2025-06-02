'use client';

const keywords = [
    { text: 'Limpeza de Fachada', href: '#servicos' },
    { text: 'Limpeza de Vidros', href: '#servicos-pele-vidro' },
    { text: 'Limpeza de ACM', href: '#servicos-acm' },
    { text: 'Ancoragem', href: '#servicos-ancoragem' },
    { text: 'Linha de Vida', href: '#servicos-ancoragem' }
];

export default function RotatingKeywords() {
    return (
        <div className="w-full bg-orange-500 py-4 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-3">
                    {keywords.map((keyword, index) => (
                        <a
                            key={`${keyword.text}-${index}`}
                            href={keyword.href}
                            className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-3 py-1 hover:text-orange-100 transition-colors cursor-pointer"
                        >
                            {keyword.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
} 