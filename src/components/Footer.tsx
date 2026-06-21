import { TabId } from '../types';
import { Mail, Phone, MapPin, Sparkles, Clock, Compass } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: TabId) => void;
}

export function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="relative bg-[#0d0d0d] text-brand-on-surface-variant pt-16 pb-8 border-t border-brand-outline-variant/10">
      
      {/* Upper Border Gold Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="text-brand-primary w-5 h-5" />
              <span className="font-display text-lg font-bold tracking-wider text-brand-primary uppercase">
                LUCKNOWI RASOI
              </span>
            </div>
            
            <p className="text-xs font-sans leading-relaxed text-neutral-400">
              Preserving the legacy of traditional slow-cooked delicacies, Awadhi marinades, and royal kebabs. Dine like royal guests in the heart of our culinary citadel.
            </p>
            
            <div className="pt-2 text-[11px] font-sans text-brand-primary/80">
              ✨ Pehle Aap, Hamesha Aap
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-white tracking-wider uppercase text-sm border-b border-brand-outline-variant/10 pb-2">
              Royal Exploration
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'menu', label: 'Awadhi Menu' },
                { id: 'gallery', label: 'Picture Gallery' },
                { id: 'location', label: 'Map & Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveTab(link.id as TabId)}
                    className="hover:text-brand-primary transition-colors hover:translate-x-1 duration-200 block text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-white tracking-wider uppercase text-sm border-b border-brand-outline-variant/10 pb-2">
              Nawabi Contact
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2 text-neutral-400">
                <MapPin size={14} className="shrink-0 mt-0.5 text-brand-primary" />
                <span>
                  Lucknow Road, Near Vaishnavi Hotel, Bahraich, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-primary shrink-0" />
                <a href="tel:+919519529191" className="hover:text-brand-primary transition-colors text-white">
                  +91-95195-29191
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-primary shrink-0" />
                <a href="mailto:bahraich@lucknowirasoi.in" className="hover:text-brand-primary transition-colors text-white">
                  bahraich@lucknowirasoi.in
                </a>
              </li>
            </ul>
          </div>

          {/* Timing & Actions Column */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-white tracking-wider uppercase text-sm border-b border-brand-outline-variant/10 pb-2">
              Darbar Timings
            </h3>
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Clock size={12} className="text-brand-primary" />
                <span className="font-bold text-white">Daily Lunch:</span> 12:00 PM – 4:00 PM
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} className="text-brand-primary" />
                <span className="font-bold text-white">Daily Dinner:</span> 7:00 PM – 11:30 PM
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('menu')}
                className="w-full py-2 bg-transparent hover:bg-brand-primary hover:text-brand-on-primary border border-brand-primary/40 text-brand-primary text-xs font-bold tracking-wider uppercase rounded transition-all duration-300 active:scale-95"
              >
                Explore Specialties
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-brand-outline-variant/10 mb-6" />

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-500 font-sans gap-4">
          <p>© 2026 Lucknowi Rasoi. Crafted to mirror the grandeur of the Nawabs. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-brand-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-brand-primary transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-brand-primary transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
