import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, HeartPulse } from 'lucide-react';
import { CONTENT } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const AudienceFilter: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].audienceSection;

  return (
    <section id="fuer-wen" className="py-24 bg-gradient-to-b from-[#081711] via-[#0b241c] to-[#071912] border-t border-emerald-500/20 relative overflow-hidden text-stone-100">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
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

        {/* 2 Comparison Cards with Scroll InView */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Für Sie (Luminous Emerald Accent) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-3xl p-8 sm:p-10 bg-[#0e2c21]/90 backdrop-blur-xl border-2 border-emerald-400/50 shadow-2xl shadow-emerald-950/70 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-6 opacity-15">
              <HeartPulse className="w-28 h-28 text-emerald-400" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Empfohlen</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-serif-title mb-6">
                {content.forYouTitle}
              </h3>

              <ul className="space-y-4">
                {content.forYouItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-stone-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm font-black">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-stone-200 text-sm sm:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-500/30 text-xs text-emerald-300 font-medium">
              ✓ {language === 'de' ? 'Ideal für sofortige Umsetzung im Alltag' : 'Ideal para aplicar agora mesmo no dia a dia'}
            </div>
          </motion.div>

          {/* Card 2: Nicht für Sie (Subtle Dark Slate Accent) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-3xl p-8 sm:p-10 bg-[#12241d]/75 backdrop-blur-xl border border-stone-700/60 shadow-xl shadow-black/40 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <ShieldAlert className="w-28 h-28 text-stone-400" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 text-xs font-bold uppercase tracking-wider mb-6">
                <X className="w-4 h-4 text-stone-400" />
                <span>Ehrliche Abgrenzung</span>
              </div>

              <h3 className="text-2xl font-bold text-stone-200 font-serif-title mb-6">
                {content.notForYouTitle}
              </h3>

              <ul className="space-y-4">
                {content.notForYouItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-stone-800 border border-stone-600 text-stone-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-stone-300 text-sm sm:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-700/50 text-xs text-stone-400 font-medium">
              ℹ {language === 'de' ? 'Transparenz steht bei uns an erster Stelle' : 'Priorizamos a total clareza e honestidade'}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
