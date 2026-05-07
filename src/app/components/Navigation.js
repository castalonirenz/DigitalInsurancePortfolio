'use client';

import Image from 'next/image';
import { LayoutDashboard, Briefcase, User, Mail, ShieldCheck } from 'lucide-react';

export default function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/15 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => onTabChange('dashboard')}
            className="flex items-center gap-3 text-left"
            aria-label="Go to dashboard"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt="Pacific Cross logo"
                width={1536}
                height={1152}
                className="h-10 w-10 object-cover object-center sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
                priority
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary/70">Pacific Cross</p>
              <h1 className="text-base font-semibold text-primary sm:text-lg">Blue Royale Portfolio</h1>
            </div>
          </button>

          <div className="hidden gap-2 md:flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary lg:flex">
            <ShieldCheck size={14} />
            Trusted Advisory
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 md:hidden">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm transition ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
