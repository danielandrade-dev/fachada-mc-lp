import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
    try {
        const logosDir = path.join(process.cwd(), 'public', 'logotipos');
        const files = fs.readdirSync(logosDir);

        // Filtra apenas arquivos de imagem
        const logos = files.filter(file =>
            /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
        );

        return NextResponse.json({ logos });
    } catch (error) {
        console.error('Erro ao ler diretório de logotipos:', error);
        return NextResponse.json({ logos: [] });
    }
} 