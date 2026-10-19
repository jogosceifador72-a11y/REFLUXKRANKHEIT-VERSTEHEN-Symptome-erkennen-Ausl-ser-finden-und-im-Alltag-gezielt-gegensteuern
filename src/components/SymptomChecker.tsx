import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  BookCheck,
} from 'lucide-react';
import { HOTMART_CHECKOUT_URL, PRICE_EUR, CONTENT } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const SymptomChecker: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].interactiveChecker;
  const [selectedIds, setSelectedIds] = useState<string[]>(['heartburn', 'acid']);

  const toggleSymptom = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedSymptoms = content.symptoms.filter((s) => selectedIds.includes(s.id));

  return (
    <section id="selbsttest" className="py-24 bg-gradient-to-b from-[#071912] via-[#0d2a1f] to-[#081812] border-t border-emerald-500/20 relative overflow-hidden text-stone-100">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
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

        {/* Interactive Symptom Selector Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f281e]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-emerald-500/40 shadow-2xl shadow-black/50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
            {content.symptoms.map((symptom) => {
              const isSelected = selectedIds.includes(symptom.id);
              return (
                <button
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`p-4 rounded-2xl text-left border text-sm font-semibold transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#153a2c] border-emerald-400 text-white shadow-md ring-2 ring-emerald-400/20'
                      : 'bg-[#0a1e15]/80 border-emerald-500/25 text-stone-300 hover:bg-[#0f2d20]'
                  }`}
                >
                  <span className="leading-snug">{symptom.label}</span>
                  <div
                    className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                      isSelected
                        ? 'bg-emerald-400 border-emerald-400 text-stone-950 font-black'
                        : 'border-emerald-500/40 bg-stone-900/60'
                    }`}
                  >
                    {isSelected && <CheckCircle className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Result Area */}
          <AnimatePresence mode="wait">
            {selectedSymptoms.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-gradient-to-br from-[#061e15] to-[#0d3324] text-white rounded-2xl p-6 sm:p-8 space-y-6 border border-emerald-500/40 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#081a12] rounded-xl border border-emerald-500/40 shrink-0">
                    <Sparkles className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif-title text-emerald-100">
                      {content.resultTitle}
                    </h3>
                    <p className="text-stone-300 text-sm mt-1">
                      {content.resultText}
                    </p>
                  </div>
                </div>

                {/* Chapter Mapping for chosen items */}
                <div className="bg-[#051710]/80 rounded-xl p-4 sm:p-5 border border-emerald-500/30 space-y-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 block">
                    {language === 'de' ? 'Ihre passende Kapitel-Zuordnung:' : 'Capítulos correspondentes no e-book:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedSymptoms.map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center gap-2.5 text-xs sm:text-sm bg-[#092218] px-3.5 py-2.5 rounded-lg border border-emerald-500/30"
                      >
                        <BookCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <span className="font-semibold text-white block">{s.label}</span>
                          <span className="text-emerald-300 text-[11px]">{s.chapter}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA inside test */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-emerald-200/70 text-xs text-center sm:text-left">
                    <span>{language === 'de' ? 'Inklusive Symptom-Tagebuch & Auslöser-Matrix' : 'Inclui Diário de Sintomas & Tabela de Gatilhos'}</span>
                  </div>
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-stone-950 font-bold text-sm shadow-lg transition-all hover:scale-105"
                  >
                    <span>{language === 'de' ? `Ratgeber für ${PRICE_EUR} € sichern` : `Garantir Guia por ${PRICE_EUR} €`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8 text-stone-400 flex items-center justify-center gap-2 text-sm"
              >
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                <span>{content.emptyHint}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
