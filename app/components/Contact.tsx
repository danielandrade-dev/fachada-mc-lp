'use client';

interface ContactProps {
  title: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    workingHours: string;
  };
}

export default function Contact({
  title,
  description,
  contact,
}: ContactProps) {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              {contact.phone}
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              {contact.email}
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Horário
              </h3>
            </div>
            <p className="text-gray-600">{contact.workingHours}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Área de Atendimento</h3>
              <p className="text-sm text-gray-500">Atendimento na Grande São Paulo e Região Metropolitana</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-base font-medium text-gray-900 mb-3">Outras Regiões</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Osasco',
                  'Guarulhos',
                  'Jundiaí',
                  'Alphaville',
                  'Barueri',
                  'Granja Vianna',
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {city}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 