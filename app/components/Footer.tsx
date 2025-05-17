'use client';

import Image from 'next/image';

interface FooterProps {
  logo?: string;
  siteName: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  workingHours?: {
    days: string;
    hours: string;
  }[];
  socialMedia?: {
    name: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

export default function Footer({
  logo = '/servicos/LOGO_MC_INVERSO.svg',
  siteName,
  description,
  contact,
  workingHours = [],
  socialMedia = [],
}: FooterProps) {
  // Garantir que workingHours seja sempre um array
  const safeWorkingHours = Array.isArray(workingHours) ? workingHours : [];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              {logo && (
                <Image
                  src={logo}
                  alt={siteName}
                  width={170}
                  height={170}
                  className="w-[170px] h-auto"
                />
              )}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {description}
            </p>
            {socialMedia.length > 0 && (
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
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
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
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
                  {contact.email}
                </a>
              </li>
              <li className="text-gray-300 flex items-center gap-3">
                <svg
                  className="w-5 h-5"
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
                {contact.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">
              Horário de Funcionamento
            </h3>
            <ul className="space-y-4">
              {safeWorkingHours.map((schedule, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-gray-300"
                >
                  <span>{schedule.days}</span>
                  <span>{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {siteName}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 