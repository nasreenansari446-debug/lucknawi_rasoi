import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem, TabId } from '../types';
import { MENU_ITEMS } from '../data';
import { ChefHat, Info, Sparkles, Filter } from 'lucide-react';

interface MenuTabProps {
  setActiveTab: (tab: TabId) => void;
}

type MenuCategory = 'all' | 'kebab' | 'specialty' | 'dessert' | 'beverage';

export function MenuTab({ setActiveTab }: MenuTabProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const categories: { id: MenuCategory; label: string; urdu: string }[] = [
    { id: 'all', label: 'All Delicacies', urdu: 'Kul Darbaar' },
    { id: 'kebab', label: 'Kebabs', urdu: 'Kebab-e-Lazeez' },
    { id: 'specialty', label: 'Specialties', urdu: 'Awadhi Khas' },
    { id: 'dessert', label: 'Mithaas', urdu: 'Meethas' },
    { id: 'beverage', label: 'Beverages', urdu: 'Suroor-e-Khaas' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Menu Header banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest font-sans">
          <ChefHat size={14} />
          Royal Dastarkhwan
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          A Culinary Map of Awadh
        </h1>
        <p className="font-sans text-xs md:text-sm text-brand-on-surface-variant leading-relaxed">
          Explore our centuries-old recipes, slow-fired tandoor specialties, and legendary desserts. Every dish at Lucknowi Rasoi is cooked fresh to order with authentic hand-ground spices.
        </p>
      </section>

      {/* Category selector capsules */}
      <section className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            id={`filter-menu-${cat.id}`}
            className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 relative text-center min-w-[100px] flex flex-col items-center ${
              activeCategory === cat.id
                ? 'bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 border-brand-primary text-brand-primary scale-[1.03] shadow-md-glow'
                : 'bg-brand-surface-high border-brand-outline-variant/15 text-neutral-400 hover:text-white hover:border-brand-outline-variant/40'
            }`}
          >
            <span className="font-sans font-bold text-xs uppercase tracking-wide">{cat.label}</span>
            <span className="text-[9px] text-brand-on-surface-variant italic font-serif font-medium mt-0.5 opacity-80">{cat.urdu}</span>
          </button>
        ))}
      </section>

      {/* Culinary Items Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                key={item.name}
                className="bg-brand-surface-low border border-brand-outline-variant/15 p-5 md:p-6 rounded-2xl flex flex-col sm:flex-row gap-5 items-stretch relative overflow-hidden group hover:border-brand-primary/20 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                
                {/* Image Placeholder or Actual Image */}
                {item.image ? (
                  <div className="w-full sm:w-28 md:w-32 lg:w-36 aspect-video sm:aspect-square rounded-xl overflow-hidden bg-brand-surface-highest shrink-0 border border-brand-outline-variant/20 group-hover:border-brand-primary/20 transition-all relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full sm:w-28 md:w-32 lg:w-36 aspect-video sm:aspect-square rounded-xl bg-gradient-to-tr from-brand-surface-highest to-brand-surface-high border border-brand-outline-variant/10 shrink-0 flex flex-col items-center justify-center p-4 text-center select-none">
                    <ChefHat className="text-brand-primary/30 w-8 h-8 mb-1" />
                    <span className="text-[9px] text-neutral-500 font-sans tracking-wide uppercase">Grilled Classic</span>
                  </div>
                )}

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display font-black text-lg md:text-xl text-white tracking-tight uppercase group-hover:text-brand-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-display text-brand-primary font-bold text-base md:text-lg shrink-0 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    {item.description && (
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Micro Metadata tag */}
                  <div className="flex items-center justify-between text-[11px] font-sans text-neutral-500 border-t border-brand-outline-variant/10 pt-2">
                    <span className="capitalize text-brand-primary/80 font-bold tracking-wider">
                      ★ {item.category === 'kebab' ? 'Tawa Tandoor' : item.category === 'specialty' ? 'Dum Process' : item.category === 'dessert' ? 'Halwai Special' : 'Beverage Serve'}
                    </span>
                    <span className="italic">Lucknowi Recipe</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic empty fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 font-sans text-brand-on-surface-variant">
            No dawat items listed in this category right now. Check back soon!
          </div>
        )}
      </section>


      {/* Saffron banner info */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-6 bg-brand-surface-high border border-brand-primary/10 rounded-2xl flex flex-col md:flex-row items-center gap-6 justify-between text-center md:text-left relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-24 h-24 bg-brand-primary/[0.02] rounded-full blur-xl pointer-events-none" />
          
          <div className="space-y-1 max-w-xl">
            <h4 className="font-display font-medium text-white flex items-center justify-center md:justify-start gap-1.5 text-base">
              <Sparkles className="text-brand-primary" size={14} />
              Spiciness & Dietary Customizations
            </h4>
            <p className="text-xs text-brand-on-surface-variant">
              Every Awadhi food artifact can be tailored for mild or medium spice parameters. Please alert your server about any allergies or customized requests when dining.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('location')}
            className="px-5 py-2.5 bg-transparent border border-brand-primary/40 hover:bg-brand-primary hover:text-brand-on-primary font-bold text-xs rounded transition-all duration-300 tracking-wider uppercase shrink-0"
          >
            Locate Our Restorant
          </button>
        </div>
      </section>

    </div>
  );
}
