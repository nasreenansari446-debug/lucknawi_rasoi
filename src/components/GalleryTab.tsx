import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Camera, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export function GalleryTab() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Photos' },
    { id: 'ambiance', label: 'Royal Ambiance' },
    { id: 'gastronomy', label: 'Gastronomy' },
    { id: 'live', label: 'Live Fire Grill' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((x) => x.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Info */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest font-sans">
          <Camera size={14} />
          Tasveerein — Our Gallery
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          Visual Heritage of Lucknowi Rasoi
        </h1>
        <p className="font-sans text-xs md:text-sm text-brand-on-surface-variant leading-relaxed">
          Embark on a curated photo journey. Glimpse our grand tandoors, clay ovens, royal interiors, and moments of culinary magic captured through the lens.
        </p>
      </section>

      {/* Category filter pills */}
      <section className="flex items-center justify-center gap-2 flex-wrap max-w-md mx-auto px-4">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            id={`filter-gallery-${cat.id}`}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-brand-primary border-brand-primary text-brand-on-primary'
                : 'bg-brand-surface border-brand-outline-variant/20 text-neutral-400 hover:text-white hover:border-brand-outline-variant/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Photo items Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => openLightbox(item)}
                id={`gallery-item-${item.id}`}
                className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-brand-surface-high border border-brand-outline-variant/15 cursor-pointer hover:border-brand-primary/30 transition-all duration-300 shadow-md flex items-center justify-center"
              >
                {/* Hotlinked image asset */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-500 ease-out select-none"
                />

                {/* Hover zoom overlays */}
                <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 space-y-1" />
                
                <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-11 h-11 bg-brand-primary text-brand-on-primary rounded-full flex items-center justify-center shadow-lg transform active:scale-90 select-none">
                    <Eye size={18} />
                  </div>
                </div>

                {/* Subtitle / tag always visible on mobile/desktop bottoms */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-surface-low/80 backdrop-blur-md rounded-xl p-3 border border-brand-outline-variant/10 group-hover:bg-brand-primary group-hover:border-transparent transition-colors duration-200">
                  <span className="block text-[9px] uppercase tracking-widest font-bold text-brand-primary group-hover:text-brand-on-primary/80">
                    {item.subtitle}
                  </span>
                  <span className="block text-xs font-display font-bold text-white group-hover:text-brand-on-primary mt-0.5 truncate uppercase">
                    {item.title}
                  </span>
                </div>

                {/* Chef Special ribbon banner */}
                {item.chefSpecial && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded tracking-wide font-display border border-red-500 flex items-center gap-1">
                    <Sparkles size={8} /> Signature
                  </div>
                )}

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* LIGHTBOX POPUP MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md select-none touch-none justify-between h-screen w-screen">
            
            {/* Top Toolbar */}
            <div className="h-16 flex items-center justify-between px-6 bg-black/40 border-b border-brand-outline-variant/10 z-10 w-full shrink-0">
              <span className="font-display text-sm tracking-wide text-gray-400 font-medium">
                {lightboxIndex + 1} of {GALLERY_ITEMS.length}
              </span>

              <button
                onClick={closeLightbox}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/40 rounded-full transition-colors font-medium cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Middle Carousel Area */}
            <div className="flex-1 flex items-center justify-between relative px-4 w-full h-[60vh]">
              {/* Previous Trigger */}
              <button
                onClick={prevSlide}
                className="p-3 bg-neutral-900/50 hover:bg-neutral-800 text-white rounded-full transition-colors z-20 outline-none absolute left-4 md:left-8 cursor-pointer select-none border border-brand-outline-variant/10"
                aria-label="Prev Slide"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image content wrapper */}
              <div className="max-w-4xl max-h-[70vh] w-full h-full mx-auto flex items-center justify-center p-3 z-10 select-none pointer-events-none">
                <img
                  src={GALLERY_ITEMS[lightboxIndex].image}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain rounded-lg border border-brand-outline-variant/10 shadow-2xl"
                />
              </div>

              {/* Next Trigger */}
              <button
                onClick={nextSlide}
                className="p-3 bg-neutral-900/50 hover:bg-neutral-800 text-white rounded-full transition-colors z-20 outline-none absolute right-4 md:right-8 cursor-pointer select-none border border-brand-outline-variant/10"
                aria-label="Next Slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption Info Card */}
            <div className="p-6 bg-neutral-950/80 border-t border-brand-outline-variant/10 text-center z-10 w-full shrink-0">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary block font-sans">
                {GALLERY_ITEMS[lightboxIndex].subtitle}
              </span>
              <h2 className="font-display font-medium text-lg md:text-xl text-white uppercase mt-1">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h2>
              <p className="text-[11px] text-neutral-400 font-sans mt-1">
                Authentic, hand-crafted gastronomy prepared daily at Lucknowi Rasoi.
              </p>
            </div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
