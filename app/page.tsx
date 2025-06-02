'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Metrics from './components/Metrics';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';
import BenefitsSection from './components/BenefitsSection';
import RotatingKeywords from './components/RotatingKeywords';
import ClientsSlider from './components/ClientsSlider';
import ImageSlider from './components/ImageSlider';

import { siteConfig } from './config/site';
import { services } from './config/services';
import { metrics } from './config/metrics';
import { about } from './config/about';
import { portfolioImages } from './config/portfolio';

export default function Home() {
  return (
    <main className="relative">
      <Header
        siteName={siteConfig.name}
        contact={siteConfig.contact}
        navigation={[
          { title: 'Início', href: '/' },
          { title: 'Serviços', href: '/#servicos' },
          { title: 'Sobre', href: '/#sobre' },
          { title: 'Contato', href: '/#contato' }
        ]}
      />

      <RotatingKeywords />

      <Hero
        description={siteConfig.hero.description}
        contact={siteConfig.contact}
      />

      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Portfólio
            </h2>
            <p className="text-lg text-gray-600">
              Conheça alguns dos nossos trabalhos realizados
            </p>
          </div>
          <ImageSlider images={portfolioImages} />
        </div>
      </section>

      <BenefitsSection />

      <Services
        title="Nossos Serviços"
        description="Oferecemos soluções completas em limpeza de fachadas"
        services={services}
      />

      <Metrics metrics={metrics} />

      <About
        mission={about.mission}
        vision={about.vision}
        values={about.values}
        image={about.image}
      />

      <ClientsSlider />

      <Contact
        contact={siteConfig.contact}
        title="Entre em Contato"
        description="Estamos Prontos para Atender suas Necessidades em Limpeza de Fachadas"
      />

      <Footer
        siteName={siteConfig.name}
        description={siteConfig.description}
        contact={siteConfig.contact}
        workingHours={siteConfig.workingHours}
      />

      <FloatingCTA phone={siteConfig.contact.phone} />
      <ScrollToTop />
    </main>
  );
}
