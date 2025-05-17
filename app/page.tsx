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

import { siteConfig } from './config/site';
import { services } from './config/services';
import { metrics } from './config/metrics';
import { about } from './config/about';

export default function Home() {
  return (
    <main className="relative">
      <Header
        siteName={siteConfig.name}
        contact={siteConfig.contact}
        navigation={[
          { title: 'Início', href: '/' },
          { title: 'Serviços', href: '/servicos' },
          { title: 'Sobre', href: '/sobre' },
          { title: 'Contato', href: '/contato' }
        ]}
      />

      <Hero
        description={siteConfig.hero.description}
        contact={siteConfig.contact}
      />

      <BenefitsSection />

      <Services 
        title="Nossos Serviços"
        description="Oferecemos soluções completas em limpeza de fachadas"
        services={services} 
      />

      <Metrics metrics={metrics} />


      <About
        title={about.title}
        mission={about.mission}
        vision={about.vision}
        values={about.values}
        image={about.image}
      />

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
