import React from 'react';
import { motion } from 'motion/react';
import { Flame, Moon, UtensilsCrossed, AlertTriangle, ArrowDown } from 'lucide-react';
import { CONTENT } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const PainPoints: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].problemSection;

  const icons = [
    <Flame className="w-6 h-6 text-rose-400" key="flame" />,
    <Moon className="w-6 h-6 text-indigo-400" key="moon" />,
    <UtensilsCrossed className="w-6 h-6 text-amber-400" key="utensils" />,
    <AlertTriangle className="w-6 h-6 text-rose-400" key="alert" />,
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#091a13] via-[#0c2017] to-[#071610] border-y border-emerald-500/20 relative overflow-hidden text-stone-100">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold tracking-wider uppercase mb-3.5 backdrop-blur-md">
            {content.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif-title tracking-tight">
            {content.headline}
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg">
            {content.subline}
          </p>
        </motion.div>

        {/* Pain Points Grid with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#10271e]/85 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-emerald-500/25 hover:border-rose-400/40 shadow-xl shadow-black/40 transition-all relative overflow-hidden group"
            >
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-[#091a13] border border-emerald-500/30 group-hover:scale-110 group-hover:border-rose-400/50 transition-all shrink-0 shadow-md">
                  {icons[index]}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Bridge to Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="#loesung"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200 bg-[#122e23]/90 px-6 py-3 rounded-full border border-emerald-500/40 hover:bg-[#15382b] transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            <span>{language === 'de' ? 'Hier erfahren Sie, wie das E-Book Abhilfe schafft' : 'Veja como este e-book resolve o problema'}</span>
            <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
