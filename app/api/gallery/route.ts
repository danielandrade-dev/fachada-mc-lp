import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
    try {
        const files = await fs.readdir(path.join(process.cwd(), 'public/galeria'));
        const images = files.filter(file =>
            file.toLowerCase().endsWith('.jpg') ||
            file.toLowerCase().endsWith('.jpeg') ||
            file.toLowerCase().endsWith('.png') ||
            file.toLowerCase().endsWith('.webp')
        );

        return NextResponse.json({ images });
    } catch (error) {
        console.error('Erro ao ler diretório de imagens:', error);
        return NextResponse.json({ images: [] });
    }
} 