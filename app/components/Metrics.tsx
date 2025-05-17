'use client';

import { Metric } from '../types';

interface MetricsProps {
  metrics: Metric[];
}

export default function Metrics({ metrics }: MetricsProps) {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {metric.value}
                {metric.id === 'satisfaction' && '%'}
              </div>
              <div className="text-text/80">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 