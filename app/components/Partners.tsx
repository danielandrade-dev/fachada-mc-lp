import { Partner } from '../types';

interface PartnersProps {
  partners: Partner[];
}

export default function Partners({ partners }: PartnersProps) {
  return (
    <section className="bg-primary-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-primary-700 max-w-2xl mx-auto">
            Trabalhamos com as melhores empresas do mercado para garantir a qualidade dos nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto max-h-24 object-contain"
                />
                {partner.description && (
                  <p className="mt-4 text-sm text-primary-700 text-center">
                    {partner.description}
                  </p>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 