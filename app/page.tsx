'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Metrics from './components/Metrics';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';
import BenefitsSection from './components/BenefitsSection';

import { siteConfig } from './config/site';
import { services } from './config/services';
import { metrics } from './config/metrics';
import { about } from './config/about';
import { testimonials, faqs } from './config/content';

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
        description="Oferecemos soluções completas em limpeza e manutenção de fachadas"
        services={services} 
      />

      <Metrics metrics={metrics} />

      <Testimonials testimonials={testimonials} />

      <About
        title={about.title}
        description={about.description}
        mission={about.mission}
        vision={about.vision}
        values={about.values}
        image={about.image}
      />

      <FAQ faqs={faqs} />

      <Contact 
        contact={siteConfig.contact}
        title="Entre em Contato"
        description="Estamos prontos para atender suas necessidades em limpeza e manutenção de fachadas"
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
