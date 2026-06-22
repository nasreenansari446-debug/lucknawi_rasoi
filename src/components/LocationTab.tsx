import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquareHeart, Star, HelpCircle, ShieldCheck } from 'lucide-react';

interface Feedback {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}

export function LocationTab() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [success, setSuccess] = useState(false);

  // Load guest logs from local persistent storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('lucknowi_guestbook');
    if (saved) {
      try {
        setFeedbackList(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Default initial comments to make it gorgeous on first render
      const initialLogs: Feedback[] = [
        {
          id: 'log1',
          name: 'Nawab Jafar',
          message: 'The Nihari Gosht left me speechless. Tastes exactly like the one our elder khansamas cooked during our family gatherings. Subhanallah!',
          rating: 5,
          date: 'Yesterday',
        },
        {
          id: 'log2',
          name: 'Riya Gupta',
          message: 'So beautiful! Fast, neat, and highly aromatic food. The Kheer serves in authentic earthenware. Recommended for everyone visiting Bahraich.',
          rating: 4,
          date: '3 days ago',
        }
      ];
      setFeedbackList(initialLogs);
      localStorage.setItem('lucknowi_guestbook', JSON.stringify(initialLogs));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newFeedback: Feedback = {
      id: 'feb_' + Date.now(),
      name,
      message,
      rating,
      date: 'Just now',
    };

    const updated = [newFeedback, ...feedbackList];
    setFeedbackList(updated);
    localStorage.setItem('lucknowi_guestbook', JSON.stringify(updated));

    setName('');
    setMessage('');
    setRating(5);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3500);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Tab Header banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest font-sans">
          <MapPin size={14} />
          Rasta — Locate Us
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          Visit the Heart of Awadh
        </h1>
        <p className="font-sans text-xs md:text-sm text-brand-on-surface-variant leading-relaxed">
          Conveniently located near Vaishnavi Hotel, Bahraich. Drop by to experience authentic slow-cooked Nawabi delicacies or contact our hosts directly.
        </p>
      </section>

      {/* Main Info Columns */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Side: Handcrafted Interactive Vector Map of Lucknow Landmarks & Lucknowi Rasoi */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-brand-surface-low border border-brand-outline-variant/15 rounded-2xl p-4 md:p-6 shadow-xl relative overflow-hidden royal-glow">
            
            <div className="flex items-center justify-between mb-4 border-b border-brand-outline-variant/10 pb-3">
              <div>
                <h3 className="font-display font-medium text-white text-base">
                  Interactive Heritage Citadel Chart
                </h3>
                <p className="text-[10px] text-neutral-400 font-sans uppercase mt-0.5">
                  Our exact location relative to iconic landmarks of Bahraich
                </p>
              </div>
              <span className="text-[11px] px-2 py-0.5 bg-brand-primary/20 text-brand-primary border border-brand-primary/20 font-bold rounded">
                Lucknow Road
              </span>
            </div>

            {/* Vector SVG Map Container */}
           <img src="location.png" height="113px" width="220.92px"></img>

            <p className="text-xs text-brand-on-surface-variant leading-relaxed mt-4 flex items-start gap-2">
              <span className="text-brand-primary mt-1 shrink-0">•</span>
              <span>
                <strong>Directions:</strong> If coming from Tikoni Bagh Chauraha, proceed southwest on Lucknow Road. We are located near Vaishnavi Hotel, on the left-hand side. Dedicated customer parking is available at our entrance.
              </span>
            </p>

          </div>
        </div>

        {/* Right Side: Contact Cards & Open Hours Info */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Royal Address Card */}
          <div className="bg-brand-surface-low border border-brand-outline-variant/15 rounded-2xl p-6 shadow-md relative">
            <h3 className="font-display font-medium text-white text-lg tracking-wide border-b border-brand-outline-variant/10 pb-3 mb-4">
              Visiting Details
            </h3>

            <div className="space-y-4 text-sm font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">Our Address</h4>
                  <p className="text-xs text-brand-on-surface-variant mt-0.5 leading-relaxed">
                    Lucknow Road, Near Vaishnavi Hotel, Nanpara Bypass, Bahraich, UP 271801, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-brand-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">Direct Direct Dial</h4>
                  <p className="text-xs text-brand-on-surface-variant mt-0.5">
                    For catering & private gourmet inquiries:
                  </p>
                  <a href="tel:+919519529191" className="text-white hover:text-brand-primary transition-colors hover:underline text-xs font-bold block mt-1">
                    +91-95195-29191
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-brand-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">Host Email</h4>
                  <a href="mailto:bahraich@lucknowirasoi.in" className="text-xs text-brand-on-surface-variant hover:text-brand-primary transition-colors block mt-0.5">
                    bahraich@lucknowirasoi.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="text-brand-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">Serving Hours</h4>
                  <p className="text-xs text-brand-on-surface-variant mt-1">
                    <span className="font-semibold text-white block">Abpahar (Lunch):</span> 12:00 PM – 4:00 PM
                  </p>
                  <p className="text-xs text-brand-on-surface-variant mt-1.5">
                    <span className="font-semibold text-white block">Isha (Dinner):</span> 7:00 PM – 11:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GUESTBOOK WRITER SECTION: Nawabi Guest register */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Guest message submission card */}
          <div className="bg-brand-surface-high border border-brand-outline-variant/15 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquareHeart className="text-brand-primary" size={20} />
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                Sign the Royal Guestbook
              </h3>
            </div>
            
            <p className="text-xs text-brand-on-surface-variant leading-relaxed">
              If your palates were pleased, please leave a kind note about Lucknowi Rasoi for future guests. We cherish the feedback of each visitor.
            </p>

            <form onSubmit={handleSubmit} id="feedback-form" className="space-y-4">
              <div>
                <label htmlFor="guestbook-name" className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wide">
                  Your Name / Title
                </label>
                <input
                  type="text"
                  id="guestbook-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Nawab Shah Al-Hassan"
                  className="w-full bg-brand-surface-low border border-brand-outline-variant/30 text-white rounded-lg py-2.5 px-4 text-xs focus:outline-none focus:border-brand-primary placeholder:text-neutral-500 transition-all font-sans"
                />
              </div>

              <div>
                <label htmlFor="rating" className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wide">
                  Palate Rating
                </label>
                <div className="flex gap-2 text-brand-primary">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      type="button"
                      key={stars}
                      onClick={() => setRating(stars)}
                      className="p-1 hover:scale-110 active:scale-95 transition-transform"
                    >
                      <Star size={20} fill={rating >= stars ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                  <span className="text-[11px] font-bold text-neutral-400 self-center ml-2 leading-none">
                    ({rating} of 5 Shahi Stars)
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="guestbook-message" className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wide">
                  Your Words of Experience
                </label>
                <textarea
                  id="guestbook-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="The Biryani was fragrant, kebabs dissolved instantly..."
                  className="w-full bg-brand-surface-low border border-brand-outline-variant/30 text-white rounded-lg py-2.5 px-4 text-xs focus:outline-none focus:border-brand-primary placeholder:text-neutral-500 transition-all resize-none font-sans"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-brand-primary to-brand-primary-container text-brand-on-primary font-bold text-xs uppercase tracking-wider rounded-md shadow-md active:scale-95 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={12} />
                  Post in Register
                </button>
              </div>
            </form>

            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs rounded-lg flex items-center gap-2"
              >
                <ShieldCheck size={16} />
                Shahi shukriya! Your kind feedback has been successfully registered in the guestbook.
              </motion.div>
            )}
          </div>

          {/* Guest message log render */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-white text-lg tracking-wide flex items-center gap-2">
              Recent Guest Register Posts
            </h3>

            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
              {feedbackList.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-brand-surface-low rounded-xl border border-brand-outline-variant/15 space-y-2 text-xs hover:border-brand-primary/10 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white uppercase tracking-wider">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-sans italic">{item.date}</span>
                    </div>
                    <div className="flex text-brand-primary">
                      {[...Array(item.rating)].map((_, idx) => (
                        <Star key={idx} size={11} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-300 leading-relaxed italic">
                    "{item.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
