'use client';

import Image from 'next/image';
import { Award, Briefcase, MapPin } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/40 to-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
            About Your Agent
          </p>
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Dan Louie P. Decena</h2>
          <p className="text-xl text-slate-600">
            Personalized medical insurance guidance with a clear and client-focused process.
          </p>
        </div>

        <div className="mb-8 overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm">
          <div className="grid gap-8 p-8 md:grid-cols-3 md:p-10">
            <div className="flex flex-col items-center">
              <div className="relative mb-6 h-64 w-full max-w-xs overflow-hidden rounded-2xl bg-sky-100 shadow-md">
                <Image
                  src="/profile.jpg"
                  alt="Dan Louie P. Decena profile photo"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 320px"
                />
              </div>
              <h3 className="text-center text-2xl font-bold text-primary">Dan Louie P. Decena</h3>
            </div>

            <div className="md:col-span-2">
              <div className="mb-7">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary/70">
                  Professional Title
                </h4>
                <p className="flex items-center gap-2 text-slate-700">
                  <Briefcase className="text-primary" size={18} />
                  Account Executive
                </p>
              </div>

              <div className="mb-7">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary/70">
                  Organization
                </h4>
                <p className="flex items-center gap-2 text-slate-700">
                  <Award className="text-primary" size={18} />
                  Pacific Cross
                </p>
              </div>

              <div className="mb-7">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary/70">
                  Service Area
                </h4>
                <p className="flex items-center gap-2 text-slate-700">
                  <MapPin className="text-primary" size={18} />
                  Philippines
                </p>
              </div>

              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6">
                <p className="text-slate-700">
                  I support clients in selecting medical insurance plans that balance budget,
                  protection goals, and long-term peace of mind. Every recommendation is explained
                  clearly so you can decide with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h4 className="mb-4 text-2xl font-bold text-primary">Expertise</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-slate-700">Medical Insurance Planning</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-slate-700">Family Health Coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-slate-700">Individual Health Plans</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-slate-700">International Coverage Considerations</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h4 className="mb-4 text-2xl font-bold text-primary">Why Work With Me</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-slate-700">Personalized and responsive service</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-slate-700">Transparent plan comparisons</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-slate-700">Reliable follow-through and support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-slate-700">Backed by Pacific Cross expertise</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
