import React from 'react';
import { BookOpen, Sparkles, ExternalLink, Globe } from 'lucide-react';
import { HOTMART_CHECKOUT_URL, PRICE_EUR, CONTENT } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<Props> = ({ language, onToggleLanguage }) => {
  const content = CONTENT[language];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-[#071d15] to-teal-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-emerald-500/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-medium tracking-tight text-emerald-100">
              {content.announcement}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language toggle pill */}
            <div className="flex items-center bg-stone-900/90 rounded-full p-0.5 border border-emerald-500/30 text-xs">
              <button
                onClick={() => onToggleLanguage('de')}
                className={`px-2.5 py-0.5 rounded-full font-semibold transition-colors ${
                  language === 'de'
                    ? 'bg-emerald-400 text-stone-950 shadow-xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => onToggleLanguage('pt')}
                className={`px-2.5 py-0.5 rounded-full font-semibold transition-colors ${
                  language === 'pt'
                    ? 'bg-emerald-400 text-stone-950 shadow-xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                PT
              </button>
            </div>

            <span className="text-emerald-400/50">•</span>
            <span className="text-emerald-300 font-bold">Nur {PRICE_EUR} €</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-[#081812]/90 backdrop-blur-xl border-b border-emerald-500/20 text-stone-100 transition-all shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo / Book Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-stone-950 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-bold text-white font-serif-title tracking-tight leading-tight">
                Refluxkrankheit verstehen
              </span>
              <span className="block text-[11px] font-medium text-emerald-400 tracking-wider uppercase">
                {language === 'de' ? '30-Seiten PDF Ratgeber' : 'Guia Prático em PDF'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#loesung" className="hover:text-emerald-300 transition-colors">
              {language === 'de' ? 'Was es löst' : 'O que resolve'}
            </a>
            <a href="#inhalt" className="hover:text-emerald-300 transition-colors">
              {language === 'de' ? 'Inhalt' : 'Conteúdo'}
            </a>
            <a href="#fuer-wen" className="hover:text-emerald-300 transition-colors">
              {language === 'de' ? 'Für wen?' : 'Para quem?'}
            </a>
            <a href="#selbsttest" className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-emerald-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'de' ? 'Symptom-Check' : 'Autoavaliação'}
            </a>
            <a href="#faq" className="hover:text-emerald-300 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            {/* Mobile language button */}
            <div className="sm:hidden flex items-center bg-stone-900/90 rounded-lg p-0.5 border border-emerald-500/30 text-xs">
              <button
                onClick={() => onToggleLanguage(language === 'de' ? 'pt' : 'de')}
                className="flex items-center gap-1 px-2 py-1 text-emerald-300 font-bold"
              >
                <Globe className="w-3 h-3 text-emerald-400" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95"
            >
              <span>{language === 'de' ? `Jetzt sichern (${PRICE_EUR} €)` : `Comprar (${PRICE_EUR} €)`}</span>
              <ExternalLink className="w-3.5 h-3.5 hidden sm:inline" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
