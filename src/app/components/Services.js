'use client';

import { Check, Shield, Globe, BadgeCheck } from 'lucide-react';
import BrochureDownloads from './BrochureDownloads';

export default function Services() {
  const plans = [
    {
      name: 'Select Plan',
      ageRange: '0-100 years old',
      currency: 'Peso-based',
      features: [
        'No cash outlay for in-patient care',
        'Freedom to choose your doctor with reimbursement support',
        'Smart and flexible protection options',
        'Coverage focused within the Philippines',
        'Practical premium choices for growing families',
      ],
      color: 'from-[#0f4f82] to-[#006cb7]',
      featured: false,
    },
    {
      name: 'Blue Royale Plan',
      ageRange: '0-100 years old',
      currency: 'Dollar-based',
      features: [
        'Local and worldwide medical coverage',
        'Full flexibility in choosing doctors and hospitals',
        'Premium-level healthcare access options',
        'Strong protection for frequent travelers',
        'International support for policy services and claims',
      ],
      color: 'from-[#006cb7] to-[#4e9ed0]',
      featured: true,
      badge: 'Featured',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
            Insurance Solutions
          </p>
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Plans You Can Compare</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Choose the medical insurance package that best matches your priorities, from practical
            local protection to premium international healthcare access.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
                plan.featured ? 'border-primary/30' : 'border-slate-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                  {plan.badge}
                </div>
              )}

              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                <h3 className="mb-2 text-3xl font-bold">{plan.name}</h3>
                <p className="text-sm opacity-95">{plan.currency}</p>
                <p className="text-sm opacity-95">Age: {plan.ageRange}</p>
              </div>

              <div className="p-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary/70">
                  Key Features
                </h4>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 flex-shrink-0 text-primary" size={18} />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-accent">
                  Request Plan Walkthrough
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-2xl font-bold text-primary">Why These Plans Work</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <Shield className="mt-1 flex-shrink-0 text-primary" size={22} />
              <div>
                <h4 className="mb-2 font-semibold text-primary">Seamless Experience</h4>
                <p className="text-sm text-slate-600">
                  Practical claim support and cashless access options for qualified facilities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="mt-1 flex-shrink-0 text-primary" size={22} />
              <div>
                <h4 className="mb-2 font-semibold text-primary">Flexible Reach</h4>
                <p className="text-sm text-slate-600">
                  Select is great for local needs while Blue Royale supports broader coverage goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BadgeCheck className="mt-1 flex-shrink-0 text-primary" size={22} />
              <div>
                <h4 className="mb-2 font-semibold text-primary">Advisor Guidance</h4>
                <p className="text-sm text-slate-600">
                  Get clear side-by-side comparisons before deciding on your policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-primary/15 bg-primary/5 p-8">
          <h3 className="mb-2 text-2xl font-bold text-primary">Downloadable Brochures</h3>
          <p className="mb-6 text-slate-600">
            View complete coverage information, benefit tables, and plan notes in PDF format.
          </p>
          <BrochureDownloads />
        </div>
      </div>
    </div>
  );
}
