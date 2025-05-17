'use client';

import { Metric } from '../types';

interface MetricsProps {
  metrics: Metric[];
}

export default function Metrics({ metrics }: MetricsProps) {
  return (
    <section className="py-16 bg-orange-500">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {metric.value}
                {metric.id === 'satisfaction' && '%'}
              </div>
              <div className="text-orange-100">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 