'use client';

import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteConfig } from '../config/site';

export default function ProjectsPage() {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch('/api/gallery');
                const data = await response.json();
                setImages(data.images);
            } catch (error) {
                console.error('Erro ao buscar imagens:', error);
                setImages([]);
            }
        }

        fetchImages();
    }, []);

    return (
        <main className="min-h-screen">
            <Header
                siteName={siteConfig.name}
                contact={siteConfig.contact}
                navigation={[
                    { title: 'Início', href: '/' },
                    { title: 'Serviços', href: '/#servicos' },
                    { title: 'Projetos', href: '/projetos' },
                    { title: 'Sobre', href: '/#sobre' },
                    { title: 'Contato', href: '/#contato' }
                ]}
            />

            <div className="pt-20">
                <Gallery initialImages={images} />
            </div>

            <Footer
                siteName={siteConfig.name}
                description={siteConfig.description}
                contact={siteConfig.contact}
                workingHours={siteConfig.workingHours}
            />
        </main>
    );
} 