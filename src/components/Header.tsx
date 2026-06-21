import { useState } from 'react';
import { TabId } from '../types';
import { Menu, X, Sparkles, MapPin } from 'lucide-react';

interface HeaderProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: TabId; label: string }[] = [
    { id: 'home', label: 'Aamna' }, // Home / Main
    { id: 'menu', label: 'Dastarkhwan' }, // Menu
    { id: 'gallery', label: 'Tasveerein' }, // Gallery
    { id: 'location', label: 'Rasta' }, // Location / Contact
  ];

  const handleNavClick = (id: TabId) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-surface/90 backdrop-blur-md border-b border-brand-outline-variant/20">
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Brand Title */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 bg-brand-surface-high rounded-lg border border-brand-primary/30 group-hover:border-brand-primary/60 transition-all shadow-md">
              <Sparkles className="text-brand-primary w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-0.5 rounded-lg bg-brand-primary/10 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div>
              <span className="font-display text-lg md:text-xl font-bold tracking-wider text-brand-primary block uppercase leading-none">
                LUCKNOWI RASOI
              </span>
              <span className="font-sans text-[10px] text-brand-on-surface-variant font-medium tracking-widest block uppercase mt-0.5">
                The Heritage of Awadh
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                id={`nav-${link.id}`}
                className={`text-sm font-medium tracking-wider uppercase relative py-2 transition-all ${
                  activeTab === link.id
                    ? 'text-brand-primary'
                    : 'text-brand-on-surface-variant hover:text-white'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
                )}
              </button>
            ))}
          </nav>

          {/* Location / Navigation Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('location')}
              id="header-location-btn"
              className="px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-primary-container text-brand-on-primary font-bold text-xs tracking-wider uppercase rounded-md shadow-md active:scale-95 hover:brightness-110 transition-all flex items-center gap-2 border border-brand-outline-variant/30"
            >
              <MapPin size={14} />
              Visit Restorant
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('location')}
              className="p-2 text-brand-primary hover:bg-white/5 rounded-full"
              aria-label="Find Us"
            >
              <MapPin size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-brand-on-surface-variant hover:text-brand-primary transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-surface-low border-b border-brand-outline-variant/20 py-4 px-4 space-y-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                id={`mobile-nav-${link.id}`}
                className={`text-left font-display font-medium text-lg py-2.5 px-4 rounded-lg transition-all ${
                  activeTab === link.id
                    ? 'bg-brand-primary/10 text-brand-primary border-l-4 border-brand-primary pl-3'
                    : 'text-brand-on-surface-variant hover:bg-neutral-800/40 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-brand-outline-variant/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveTab('location');
              }}
              className="w-full py-3 bg-brand-primary text-brand-on-primary font-bold rounded-lg text-sm tracking-wider uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <MapPin size={16} />
              View Location & Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
