import { motion } from 'motion/react';
import { ChevronRight, Sparkles, Quote, MapPin, Phone, Star } from 'lucide-react';
import { TabId } from '../types';
import { REVIEWS } from '../data';

interface HomeTabProps {
  setActiveTab: (tab: TabId) => void;
}

export function HomeTab({ setActiveTab }: HomeTabProps) {
  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center pt-8">
        {/* Arch background design or ambient radial gradient */}
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(circle_at_top,rgba(242,202,80,0.06),transparent_60%)]" />
        
        {/* Soft background luxury abstract canvas mesh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-background via-transparent to-brand-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} className="animate-pulse" />
                The Authentic Taste of Awadh
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-black leading-tight tracking-tight">
                Experience the <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary drop-shadow">
                  Culinary Splendour
                </span> <br />
                of Lucknow's Elite.
              </h1>

              <p className="font-sans text-base md:text-lg text-brand-on-surface-variant font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Welcome to Lucknowi Rasoi. Every dish is a carefully crafted artifact from the royal court kitchens of the Nawabs. Experience the legendary flavor of real 160-spice Galauti, Dum Biryani, and saffron Rabri.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('location')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-primary-container text-brand-on-primary hover:brightness-110 active:scale-95 transition-all rounded-lg font-bold text-sm tracking-wider uppercase shadow-lg shadow-brand-primary/15 flex items-center justify-center gap-2"
                >
                  Find Our Darbar
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => setActiveTab('menu')}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-surface-high hover:bg-neutral-800 text-white active:scale-95 transition-all rounded-lg font-bold text-sm tracking-wider uppercase border border-brand-outline-variant/30 flex items-center justify-center gap-2"
                >
                  Explore Dastarkhwan
                </button>
              </div>

              {/* Badges / Micro Details */}
              <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <div className="border-r border-brand-outline-variant/30 pr-4">
                  <span className="block font-display text-2xl font-bold text-brand-primary">160+</span>
                  <span className="block text-[10px] text-neutral-400 font-sans uppercase tracking-wider">Secret Spices</span>
                </div>
                <div className="border-r border-brand-outline-variant/30 px-4">
                  <span className="block font-display text-2xl font-bold text-brand-primary">Dum-Pukht</span>
                  <span className="block text-[10px] text-neutral-400 font-sans uppercase tracking-wider">Slow Steam Style</span>
                </div>
                <div className="pl-4">
                  <span className="block font-display text-2xl font-bold text-brand-primary">100%</span>
                  <span className="block text-[10px] text-neutral-400 font-sans uppercase tracking-wider">Awadhi Authenticity</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Media (Diamond frames and royal collage) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center py-6"
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
                
                {/* Visual glowing border background aura */}
                <div className="absolute inset-0 rounded-full bg-brand-primary/5 blur-3xl animate-pulse" />

                {/* Main Diamond Frame (Awadhi Biryani) */}
                <div className="diamond-frame w-56 h-56 md:w-64 md:h-64 z-10 royal-glow shadow-xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQNzbdh6EDJ45s6__jqRU2bNlapMsOMAWcZFaJ7PQ8H1sbo_FQQSao2AF40o6pY5i6F3aCFVx_fNXPPZRuE2RRLszY5QO0MTP28svWeDSDwBhX8m6fLYgfid37o-dkerb1ZYt1RMlILc6LL51ev0_7uFj2ANDFZLFbkWZnmEhz9qPYGf3M9a6wZIaRDenaoAst8hY-HBQmB55xiGfbydxfON56IJJ3zSS-ghtNMN40xtCUjLdW-wiPU8ukcItLQF-tNmRNrHl6bjud"
                    alt="Imperial Lucknowi Dum Biryani cooked slow-steam"
                    referrerPolicy="no-referrer"
                    className="diamond-content w-full h-full object-cover select-none"
                  />
                </div>

                {/* Smaller Accent Diamond Frame 1 (Shahi Rabri) */}
                <div className="absolute -left-12 bottom-0 diamond-frame w-28 h-28 z-20 shadow-lg border border-brand-primary/30">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe7bCdZfaVE03PFu5d9t1x0QPLvz6zvStysL87mHtZu14rmUKojqJV0nPivq15t1ccr-oZ-ecLvva2_lT3aYhbqCu6r7VrLq2lhjiyv__Cfee4jW1gAGT8wdNPQkAB4ys9oKicifBMar6SV4BtSpAH7o41fz-kokHp62W3LjoOSYvufEplpHMlvfttQmOJoO2xSjNw_rSOWV1Wn7VpvRLOkB5bgmetL5urp1IlwkNGCiV4IDi8CuPYBAUBjsEtNX-zfQ69UqNFsWI_"
                    alt="Shahi Rabri dessert sweetened with saffron"
                    referrerPolicy="no-referrer"
                    className="diamond-content w-full h-full object-cover select-none"
                  />
                </div>

                {/* Smaller Accent Diamond Frame 2 (Fine Dining Room) */}
                <div className="absolute -right-8 -top-8 diamond-frame w-32 h-32 z-0 opacity-80 scale-95 border border-brand-primary/20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLzxF_6JWlsgvmnqM_bge2jr5nCve4ero6ZCCi9gtgJ5nCXgiQ81faK5dacDjMSGBopUmgX84Qkng1aAYNtTU6FI5f3NcIPR4mJiERPN6hzVcqSv1T4LN4dPVKfhVpvov-ktFy_HU3Kky7klqrpRCibSHLxoSzJlPy6Zikldg3v9j41OyzDMSvfAP_7QpYNAcyxw6C4hQxn5eBEEQ82mJmDok7owWXGKQGkqLpc8LLI9FcDmRwgcNqtMuBdo-2NtqEU5rApcjevT8P"
                    alt="Regal dining room atmosphere with custom lighting"
                    referrerPolicy="no-referrer"
                    className="diamond-content w-full h-full object-cover select-none"
                  />
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 2. ABOUT US SECTION: The Culinary Heritage */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Images Archway */}
          <div className="relative flex justify-center lg:order-last">
            <div className="w-full max-w-md aspect-3/4 rounded-t-full overflow-hidden border border-brand-primary/20 bg-brand-surface-high shadow-2xl relative royal-glow">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD90vBcwWDFbLQw8v7xuFdj7vtUoGYkXKmdR_GNzmAntd6SrHt1ZX4pKrbIcJil8YlON2VtVlae6zUv7L-Xhhjk9LvS3IMDsjpm0XlvaBioF3sRoA_5DcOuUZU3ujXR0F_zpz5Ejhpw3VsC7MUA8q2zwTTmy0pX-7MrSKzdYrqHwsMyIwVd8ozKmJuPHg7GfSJUlX0pXmYnXujyh21aqSuLXhTQgUOX_QBHS14yADAE6sNhTJNkpDWYulOdV78NQbA8_G5PO1-3ftfG"
                alt="A Grand Archway leading to the Darbar of Lucknowi Rasoi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/70 backdrop-blur-md rounded-xl border border-brand-primary/10 text-center">
                <span className="block font-display text-lg text-brand-primary font-bold">The Royal Entrance</span>
                <span className="block text-xs text-neutral-400 mt-1">Near Vaishnavi Hotel, Bahraich</span>
              </div>
            </div>
          </div>

          {/* About us narrative */}
          <div className="space-y-6">
            <span className="font-display text-sm font-bold uppercase tracking-wider text-brand-primary block">
              The Heritage of Slow Cookery (Dum Pukht)
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl text-white font-black tracking-tight leading-tight">
              A Direct Culinary Lineage to the Court of Awadh
            </h2>

            <p className="font-sans text-neutral-300 leading-relaxed text-sm md:text-base">
              At <strong className="text-brand-primary">Lucknowi Rasoi</strong>, we are committed to keeping the historical methods of Awadhi gastronomy alive. The legendary Nawabs of Lucknow elevated food from a necessity to an art form. Our khansamas practice the slow and mysterious process of <em>Dum-Pukht</em>, letting meat cook in its own juices inside sealed handis (earthenware pots) for over twelve hours.
            </p>

            <p className="font-sans text-neutral-400 leading-relaxed text-sm">
              We sourced our secret combination of spices from multi-generational spice merchants in Chowk and Aminabad. From Lucknow's finest vetiver water, sandalwood dust, rose petals, to carefully aged saffron, we ensure that every morsel carries the genuine aromatic magic that was once served exclusively to Nawab Asaf-ud-Daula.
            </p>

            {/* Quote banner */}
            <div className="relative p-5 bg-brand-surface-high/60 border-l-2 border-brand-primary rounded-r-xl italic text-xs md:text-sm text-brand-on-surface-variant">
              <Quote className="text-brand-primary/20 absolute right-4 top-2 w-10 h-10 -scale-x-100" />
              "Eating is not merely a biological urge here; it is a ritual of slow-tempo delight, high manners, and culinary appreciation that spans centuries."
            </div>
          </div>

        </div>
      </section>


      {/* 3. ROYAL SELECTIONS SPOTLIGHT */}
      <section className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-primary block font-display">Specialties</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">Royal Selections on the Imperial Table</h2>
          <p className="text-xs md:text-sm text-brand-on-surface-variant max-w-xl mx-auto font-sans">
            A small teaser of our signature delicacies. Prepared fresh daily using ancestral recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Galauti Kebab */}
          <div className="bg-brand-surface-low border border-brand-outline-variant/30 rounded-xl overflow-hidden group hover:border-brand-primary/30 transition-all duration-300 shadow-lg">
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_sm1UP0FNj66C3zXVFyBojUqQFyR3H72wT-LkJ29EG9G19kC93MPKvjnULbCXElS43VJHaTaE897AD2nbxth7fyhiLDxrO_U43UHVVJeden6gqaw7SK0IUX0zSjm7hACA_s7JO2WmRZVbuHaYcGEe__N3Ietu95yDReIYQSTbUzQuSdB8Nr0isBMIf3sBsor4sQbt-EWUsrVvUhzi_20hRwHbfLXi7aVtJYLnn9Q8ghWgG9JX2VZImqOMPMRY6-st5G10nv0c-mme"
                alt="Finest grilled minced Galauti Kebabs"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 bg-brand-primary text-brand-on-primary font-bold font-display text-[10px] uppercase rounded">
                Legendary Signature
              </div>
            </div>
            
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-white">Galauti Kebab</h3>
                <span className="font-display text-brand-primary font-bold">₹450</span>
              </div>
              <p className="font-sans text-xs text-neutral-400">
                Crafted from finely minced mutton marinated with raw papaya and 160 traditional secret spices, shallow fried in pure ghee on a tawa. Melts on the tongue!
              </p>
            </div>
          </div>

          {/* Card 2: Lucknowi Dum Biryani */}
          <div className="bg-brand-surface-low border border-brand-outline-variant/30 rounded-xl overflow-hidden group hover:border-brand-primary/30 transition-all duration-300 shadow-lg">
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQNzbdh6EDJ45s6__jqRU2bNlapMsOMAWcZFaJ7PQ8H1sbo_FQQSao2AF40o6pY5i6F3aCFVx_fNXPPZRuE2RRLszY5QO0MTP28svWeDSDwBhX8m6fLYgfid37o-dkerb1ZYt1RMlILc6LL51ev0_7uFj2ANDFZLFbkWZnmEhz9qPYGf3M9a6wZIaRDenaoAst8hY-HBQmB55xiGfbydxfON56IJJ3zSS-ghtNMN40xtCUjLdW-wiPU8ukcItLQF-tNmRNrHl6bjud"
                alt="Sealed Handi style Slow steam Dum Biryani with Saffron"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 bg-brand-primary text-brand-on-primary font-bold font-display text-[10px] uppercase rounded">
                Chef's Pride
              </div>
            </div>
            
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-white">Lucknowi Dum Biryani</h3>
                <span className="font-display text-brand-primary font-bold">₹550</span>
              </div>
              <p className="font-sans text-xs text-neutral-400">
                Fragrant long-grain Basmati rice and premium tender goat meat slow-cooked in a sealed heavy handi with rose extract, saffron, cardamom, and mace threads.
              </p>
            </div>
          </div>

          {/* Card 3: Shahi Tukda */}
          <div className="bg-brand-surface-low border border-brand-outline-variant/30 rounded-xl overflow-hidden group hover:border-brand-primary/30 transition-all duration-300 shadow-lg">
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe7bCdZfaVE03PFu5d9t1x0QPLvz6zvStysL87mHtZu14rmUKojqJV0nPivq15t1ccr-oZ-ecLvva2_lT3aYhbqCu6r7VrLq2lhjiyv__Cfee4jW1gAGT8wdNPQkAB4ys9oKicifBMar6SV4BtSpAH7o41fz-kokHp62W3LjoOSYvufEplpHMlvfttQmOJoO2xSjNw_rSOWV1Wn7VpvRLOkB5bgmetL5urp1IlwkNGCiV4IDi8CuPYBAUBjsEtNX-zfQ69UqNFsWI_"
                alt="Dessert golden fried bread Rabri milk dry fruits"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 bg-brand-primary text-brand-on-primary font-bold font-display text-[10px] uppercase rounded">
                Royal Mithaas
              </div>
            </div>
            
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-white">Shahi Tukda</h3>
                <span className="font-display text-brand-primary font-bold">60/-</span>
              </div>
              <p className="font-sans text-xs text-neutral-400">
                Golden-fried crisp artisan bread segments dunked in thick saffron syrup, generously loaded with double-boiled cream rabri, raw almonds, and premium silver vark sheeting.
              </p>
            </div>
          </div>

        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => setActiveTab('menu')}
            className="text-xs font-bold text-brand-primary uppercase tracking-widest inline-flex items-center gap-1 hover:underline transition-all group"
          >
            View Complete Cuisine Menu
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>


      {/* 4. NAWABI GUEST REVIEWS SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Background visual motif arches */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-primary/[0.01] rounded-full blur-3xl pointer-events-none" />

        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-primary block font-display">Alfaz</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">Echoes of the Royal Feast</h2>
          <p className="text-xs md:text-sm text-brand-on-surface-variant max-w-xl mx-auto font-sans">
            Hear from true food connoisseurs and modern Nawabs who dined under our slow-cooked hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-brand-surface-high border border-brand-outline-variant/15 p-6 rounded-2xl relative shadow-md hover:border-brand-primary/20 transition-all group"
            >
              {/* Stars decoration */}
              <div className="flex gap-1 mb-4 text-brand-primary">
                {[...Array(review.stars)].map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Glowing Quote Icon */}
              <Quote className="absolute right-6 top-6 text-brand-outline-variant/10 w-12 h-12 -scale-x-100 group-hover:text-brand-primary/10 transition-colors" />

              <p className="font-sans text-xs md:text-sm text-neutral-300 italic leading-relaxed mb-6 relative">
                {review.content}
              </p>

              {/* User Bio Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-outline-variant/10">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-primary/30 bg-neutral-800">
                  <img
                    src={review.image}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-medium text-xs text-white uppercase tracking-wider">{review.name}</h4>
                  <span className="text-[10px] text-brand-on-surface-variant">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 5. JOIN US FOR A ROYAL FEAST CALL TO ACTION */}
      <section className="relative max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl bg-brand-surface-low border border-brand-primary/10 overflow-hidden royal-glow py-16 px-6 md:px-12 text-center shadow-2xl">
          
          {/* Decorative Background */}
          <div className="absolute inset-0 block grain-overlay opacity-5" />
          <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-brand-primary/[0.04] rounded-full blur-3xl" />
          <div className="absolute -left-24 -top-24 w-80 h-80 bg-brand-primary/[0.03] rounded-full blur-3xl" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-primary block font-display">Tashreef Laiye</span>
            
            <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight">
              An Exquisite Feast Fit for Nawabs
            </h2>
            
            <p className="font-sans text-xs md:text-sm text-brand-on-surface-variant leading-relaxed">
              We look forward to serving you with peerless Awadhi hospitality. Gather with family, host a private dawat, or celebrate life's moments under the shadow of our slow-cooked masterpieces.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setActiveTab('location')}
                id="cta-find-darbar"
                className="px-10 py-4 bg-gradient-to-r from-brand-primary to-brand-primary-container text-brand-on-primary font-black rounded-lg text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-primary/20"
              >
                Find Us on Map
              </button>
            </div>
            
            <p className="text-[10px] text-neutral-500 font-sans uppercase tracking-[0.15em] pt-2">
              📍 Near Vaishnavi Hotel, Bahraich, Uttar Pradesh • +91-95195-29191
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
