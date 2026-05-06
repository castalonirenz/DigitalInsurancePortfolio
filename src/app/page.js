'use client';

import { useState } from 'react';
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
