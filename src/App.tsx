import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TabId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeTab } from './components/HomeTab';
import { MenuTab } from './components/MenuTab';
import { GalleryTab } from './components/GalleryTab';
import { LocationTab } from './components/LocationTab';
import { Sparkles, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab setActiveTab={setActiveTab} />;
      case 'menu':
        return <MenuTab setActiveTab={setActiveTab} />;
      case 'gallery':
        return <GalleryTab />;
      case 'location':
        return <LocationTab />;
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-on-background flex flex-col font-sans overflow-x-hidden selection:bg-brand-primary/30 selection:text-white">
      {/* Implements subtle texture overlay across the royal workspace */}
      <div className="fixed inset-0 grain-overlay pointer-events-none z-50 opacity-[0.04]" />

      {/* Royal Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Primary Dynamic Screen Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
        
        {/* Soft background light splash */}
        <div className="absolute top-12 left-1/4 -translate-x-1/2 w-80 h-80 bg-brand-primary/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            id={`tab-content-${activeTab}`}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Action Button (FAB) for fast mobile location map */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('location')}
          id="fab-location"
          className="p-4 bg-brand-primary text-brand-on-primary rounded-full shadow-lg shadow-brand-primary/30 flex items-center justify-center border border-brand-outline-variant/30 font-bold"
          aria-label="Find Location"
        >
          <MapPin size={20} />
        </motion.button>
      </div>

      {/* Royal Footer component */}
      <Footer
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

