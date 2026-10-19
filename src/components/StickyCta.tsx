import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles, ExternalLink } from 'lucide-react';
import { HOTMART_CHECKOUT_URL, PRICE_EUR } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const StickyCta: React.FC<Props> = ({ language }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 600px
      if (window.scrollY > 550) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 right-0 left-0 sm:left-auto sm:right-6 sm:bottom-6 z-40 p-3 sm:p-0 pointer-events-none"
        >
          <div className="pointer-events-auto bg-[#0a2218]/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-emerald-500/40 p-3 sm:px-5 sm:py-3.5 flex items-center justify-between sm:gap-6 max-w-lg mx-auto sm:mx-0 shadow-emerald-950/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-stone-950 flex items-center justify-center shrink-0 font-bold shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0 pr-2">
                <div className="text-xs sm:text-sm font-bold text-stone-100 truncate">
                  Refluxkrankheit verstehen
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span>Nur {PRICE_EUR} €</span>
                  <span className="text-stone-400 line-through text-[10px]">49,00 €</span>
                </div>
              </div>
            </div>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
            >
              <span>{language === 'de' ? 'Jetzt kaufen' : 'Comprar agora'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
