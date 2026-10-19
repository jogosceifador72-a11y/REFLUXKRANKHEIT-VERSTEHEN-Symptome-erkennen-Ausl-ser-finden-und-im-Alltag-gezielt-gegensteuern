import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { HOTMART_CHECKOUT_URL, PRICE_EUR, CONTENT } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const FaqSection: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#071711] via-[#0b241c] to-[#071610] border-t border-emerald-500/20 relative overflow-hidden text-stone-100">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-3.5 backdrop-blur-md">
            {content.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif-title tracking-tight">
            {content.headline}
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg">
            {content.subline}
          </p>
        </motion.div>

        {/* FAQ Accordion with Staggered Scroll Animation */}
        <div className="space-y-4">
          {content.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#0f281e]/85 backdrop-blur-xl rounded-2xl border border-emerald-500/30 overflow-hidden shadow-lg transition-all hover:border-emerald-400/50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-emerald-300 transition-colors"
                >
                  <span className="leading-snug">{item.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#081b13] flex items-center justify-center shrink-0 border border-emerald-500/30 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-400 text-stone-950 font-black' : 'text-emerald-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-stone-300 text-sm sm:text-base leading-relaxed border-t border-emerald-500/20 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mini CTA after FAQ with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center bg-[#0d261d]/90 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/40 shadow-xl shadow-black/40"
        >
          <h4 className="text-xl sm:text-2xl font-bold font-serif-title text-white mb-2">
            {language === 'de' ? 'Bereit für den ersten Schritt?' : 'Pronto para dar o primeiro passo?'}
          </h4>
          <p className="text-stone-300 text-sm sm:text-base max-w-md mx-auto mb-6">
            {language === 'de'
              ? `Laden Sie den Ratgeber jetzt für nur ${PRICE_EUR} € herunter und starten Sie noch heute.`
              : `Baixe o guia agora mesmo por apenas ${PRICE_EUR} € e comece hoje.`}
          </p>
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-stone-950 font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <span>{language === 'de' ? `Jetzt für ${PRICE_EUR} € bestellen` : `Comprar por ${PRICE_EUR} €`}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
