'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import Profile from './components/Profile';
import Contact from './components/Contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return <Services />;
      case 'profile':
        return <Profile />;
      case 'contact':
        return <Contact />;
      case 'dashboard':
      default:
        return <Dashboard onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}

      <footer className="bg-primary py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center">
            <div className="overflow-hidden rounded-lg border border-white/20 bg-slate-900/70 shadow-sm">
              <Image
                src="/logo.png"
                alt="Pacific Cross logo"
                width={1536}
                height={1152}
                className="h-12 w-20 object-cover object-center"
              />
            </div>
          </div>
          <p className="mb-2">© 2026 Dan Louie P. Decena | Pacific Cross</p>
          <p className="text-sm text-blue-100/80">
            This portfolio is for informational purposes and does not replace official insurance
            documentation.
          </p>
        </div>
      </footer>
    </div>
  );
}
