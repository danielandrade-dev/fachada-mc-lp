import type { FAQ } from '../types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
  faqs: FAQ[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos. Estamos aqui para ajudar você a entender melhor como podemos atender suas necessidades.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-xl hover:bg-orange-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <motion.svg
                    className="w-6 h-6 text-orange-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-lg mb-6">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <a
              href="#contato"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-sm hover:shadow-md"
            >
              Fale Conosco
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 