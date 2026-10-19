import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Stethoscope,
  ClipboardList,
  Pill,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { HOTMART_CHECKOUT_URL, PRICE_EUR, CONTENT } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const Solutions: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].solutionsSection;

  const icons = [
    <Stethoscope className="w-6 h-6 text-emerald-400" key="stetho" />,
    <ClipboardList className="w-6 h-6 text-teal-300" key="clip" />,
    <Pill className="w-6 h-6 text-amber-400" key="pill" />,
  ];

  return (
    <section id="loesung" className="py-24 bg-gradient-to-b from-[#071610] via-[#0b241b] to-[#081812] relative overflow-hidden text-stone-100">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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

        {/* 3 Pillar Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content.cards.map((card, idx) => (
            <motion.div
              key={card.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#0e271e]/90 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all shadow-xl shadow-black/40 hover:shadow-emerald-950/50 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#091a13] shadow-md border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-400/60 transition-all">
                    {icons[idx]}
                  </div>
                  <span className="font-editorial text-3xl font-bold text-emerald-400/40">
                    {card.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-500/20">
                <div className="flex items-start gap-2.5 text-xs font-semibold text-emerald-300 bg-emerald-500/15 p-3.5 rounded-xl border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{card.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Concrete Result Banner with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#071d15] via-[#0e2b20] to-[#091a13] text-white rounded-3xl p-8 sm:p-11 shadow-2xl border border-emerald-500/40 relative overflow-hidden shadow-emerald-950/60"
        >
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{content.resultBox.title}</span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-stone-100 font-medium leading-relaxed font-serif-title">
                „{content.resultBox.text}“
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto text-center">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-stone-950 font-bold bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95"
              >
                <span>{language === 'de' ? `Für nur ${PRICE_EUR} € starten` : `Começar por apenas ${PRICE_EUR} €`}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="block text-[11px] text-emerald-200/60 mt-2">
                {language === 'de' ? 'Sofortiger PDF-Download nach Zahlung' : 'Download do PDF logo após aprovação'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
