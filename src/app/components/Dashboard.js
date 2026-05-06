'use client';

import Image from 'next/image';
import { Heart, Shield, Globe, Users, ArrowRight } from 'lucide-react';
import BrochureDownloads from './BrochureDownloads';

export default function Dashboard({ onTabChange }) {
  const highlights = [
    {
      icon: Heart,
      title: 'Comprehensive Medical Care',
      description: 'Coverage options designed for individuals, families, and long-term health goals.',
    },
    {
      icon: Shield,
      title: 'Protection You Can Trust',
      description: 'Cashless hospital access and reliable policy support when it matters most.',
    },
    {
      icon: Globe,
      title: 'Local and Global Options',
      description: 'Blue Royale supports international coverage while Select protects locally.',
    },
    {
      icon: Users,
      title: 'Guided by a Real Advisor',
      description: 'Work directly with Dan Louie P. Decena for clear and personalized recommendations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-sm md:p-12">
          <div className="absolute -right-14 -top-14 h-44 w-44 rounded-bl-[90px] bg-primary/90"></div>
          <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-tr-[72px] bg-primary/15"></div>

          <div className="relative text-center md:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
              Pacific Cross Insurance Portfolio
            </p>
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              Blue Royale and Select Plan Advisory
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-base text-slate-600 md:mx-0 md:text-lg">
              Discover practical and premium medical protection options tailored to your lifestyle,
              budget, and long-term priorities.
            </p>

            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <button
                onClick={() => onTabChange?.('services')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-accent"
              >
                Explore Plans
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onTabChange?.('contact')}
                className="rounded-xl border border-primary/30 bg-white px-6 py-3 font-semibold text-primary transition hover:bg-primary/5"
              >
                Talk to an Advisor
              </button>
            </div>

            <BrochureDownloads compact />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="text-primary" size={23} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm">
          <div className="grid gap-6 p-8 md:grid-cols-2 md:p-10">
            <div className="order-2 md:order-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
                Your Account Executive
              </p>
              <h3 className="mb-4 text-3xl font-bold text-primary">Dan Louie P. Decena</h3>
              <p className="mb-6 text-slate-600">
                I help families and individuals compare medical insurance options with a clear,
                no-pressure process. You get practical guidance, transparent plan walkthroughs, and
                support from inquiry through application.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-primary">Position:</span> Account Executive
                </p>
                <p>
                  <span className="font-semibold text-primary">Company:</span> Pacific Cross
                </p>
                <p>
                  <span className="font-semibold text-primary">Focus:</span> Blue Royale and Select
                  health protection plans
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative h-72 overflow-hidden rounded-2xl bg-sky-100 md:h-full">
                <Image
                  src="/profile.jpg"
                  alt="Dan Louie P. Decena profile photo"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
