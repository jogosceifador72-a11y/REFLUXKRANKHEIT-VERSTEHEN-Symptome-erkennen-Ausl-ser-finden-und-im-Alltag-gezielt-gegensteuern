import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  CheckCircle2,
  FileSpreadsheet,
  Stethoscope,
  Pill,
  Sparkles,
  ArrowRight,
  Eye,
} from 'lucide-react';
import { HOTMART_CHECKOUT_URL, CONTENT } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const InsideLook: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].insideSection;
  const [activeTab, setActiveTab] = useState(0);

  const chapterIcons = [
    <BookOpen className="w-5 h-5 text-emerald-400" key="1" />,
    <Eye className="w-5 h-5 text-teal-300" key="2" />,
    <FileSpreadsheet className="w-5 h-5 text-amber-400" key="3" />,
    <Pill className="w-5 h-5 text-sky-400" key="4" />,
    <Stethoscope className="w-5 h-5 text-emerald-300" key="5" />,
  ];

  return (
    <section id="inhalt" className="py-24 bg-gradient-to-b from-[#081812] via-[#0c241c] to-[#081711] border-t border-emerald-500/20 relative overflow-hidden text-stone-100">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

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

        {/* Chapters Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapter Selector List (Left 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3"
          >
            {content.chapters.map((ch, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={ch.num}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#133529] border-emerald-400 text-white shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-400/20'
                      : 'bg-[#0e271e]/70 border-emerald-500/25 hover:bg-[#113125] text-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-stone-950 shadow-sm font-black'
                          : 'bg-[#091a13] text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      <span className="font-bold text-sm">#{ch.num}</span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          {ch.pages}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white truncate">
                        {ch.title}
                      </h4>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-emerald-300 translate-x-1' : 'text-stone-500'
                    }`}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Active Chapter Details Box (Right 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0f281f]/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-emerald-500/40 shadow-2xl shadow-black/50 relative overflow-hidden"
              >
                {/* Header inside preview */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-emerald-500/20">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-[#091a13] rounded-2xl border border-emerald-500/40 shadow-inner">
                      {chapterIcons[activeTab]}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        {language === 'de' ? 'Kapitel' : 'Capítulo'} {content.chapters[activeTab].num} • {content.chapters[activeTab].pages}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-title mt-0.5">
                        {content.chapters[activeTab].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-stone-200 text-base sm:text-lg leading-relaxed mb-8">
                  {content.chapters[activeTab].desc}
                </p>

                {/* Value bullets */}
                <div className="bg-[#091b14]/80 rounded-2xl p-6 border border-emerald-500/30 space-y-3 mb-8 shadow-inner">
                  <h5 className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                    {language === 'de' ? 'Was Sie in diesem Abschnitt lernen:' : 'O que você vai aprender nesta parte:'}
                  </h5>
                  <ul className="space-y-2.5 text-sm sm:text-base text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{language === 'de' ? 'Praxisorientierte Erklärungen ohne komplizierte Fachbegriffe' : 'Explicações práticas sem termos técnicos difíceis'}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{language === 'de' ? 'Sofort umsetzbare Tipps für Ernährung, Schlaf und Alltag' : 'Dicas de aplicação imediata para alimentação, postura e sono'}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{language === 'de' ? 'Checklisten und Fragebogen für optimale Vorbereitung' : 'Checklists e roteiro para consulta médica objetiva'}</span>
                    </li>
                  </ul>
                </div>

                {/* CTA inside chapter box */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-stone-400">
                    {language === 'de' ? 'Alle 30 Seiten im hochauflösenden PDF' : 'Todas as 30 páginas em PDF de alta qualidade'}
                  </span>
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-stone-950 font-bold text-sm shadow-md transition-all hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{language === 'de' ? 'E-Book herunterladen' : 'Baixar E-Book'}</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
