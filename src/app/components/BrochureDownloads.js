'use client';

import { Download, FileText } from 'lucide-react';

export const brochures = [
  {
    title: 'Blue Royale Brochure',
    description: 'Dollar-based plan details with international and local coverage.',
    href: '/brochures/Blue-Royale-Brochure.pdf',
    filename: 'Blue-Royale-Brochure.pdf',
    featured: true,
  },
  {
    title: 'Select Plan Brochure',
    description: 'Peso-based plan details for practical and flexible protection.',
    href: '/brochures/Select-Brochure.pdf',
    filename: 'Select-Brochure.pdf',
    featured: false,
  },
];

export default function BrochureDownloads({ compact = false, className = '' }) {
  if (compact) {
    return (
      <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
        {brochures.map((brochure) => (
          <a
            key={brochure.title}
            href={brochure.href}
            download={brochure.filename}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:bg-primary hover:text-white"
          >
            <Download size={18} />
            {brochure.title}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid gap-4 md:grid-cols-2">
        {brochures.map((brochure) => (
          <a
            key={brochure.title}
            href={brochure.href}
            download={brochure.filename}
            className={`group rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${
              brochure.featured
                ? 'border-primary/30 bg-white'
                : 'border-slate-200 bg-slate-50/70'
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="text-primary" size={18} />
                <span className="font-semibold text-primary">{brochure.title}</span>
              </div>
              <Download
                className="text-primary transition group-hover:translate-y-0.5"
                size={18}
              />
            </div>
            <p className="text-sm text-slate-600">{brochure.description}</p>
            <p className="mt-3 text-xs font-medium text-primary/80">PDF Download</p>
          </a>
        ))}
      </div>
    </div>
  );
}
