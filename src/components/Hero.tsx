import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Zap,
  CheckCircle,
  Smartphone,
  Tablet,
  Laptop,
  ArrowRight,
  Star,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HOTMART_CHECKOUT_URL, PRICE_EUR, OLD_PRICE_EUR, CONTENT } from '../data/content';
import { Language } from '../types';
import coverImage from '../assets/images/ebook-cover.jpg';

interface Props {
  language: Language;
}

export const Hero: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].hero;

  const handleCtaClick = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#081812] via-[#0d281e] to-[#091a13] pt-12 pb-24 md:pt-18 md:pb-32 text-stone-100">
      {/* Dynamic ambient glowing background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/20 via-teal-400/15 to-amber-400/10 rounded-full blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none animate-orb-2" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-orb-3" />

      {/* Decorative subtle mesh grid pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Offer */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>{content.tag}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]"
            >
              <span className="block font-serif-title bg-gradient-to-r from-emerald-200 via-teal-100 to-amber-200 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl mb-2 drop-shadow-sm">
                {content.titleHighlight}
              </span>
              <span className="font-editorial text-2xl sm:text-3xl md:text-4xl text-emerald-100/90 font-normal italic block">
                {content.titleSuffix}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {content.subtitle}
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 max-w-lg mx-auto lg:mx-0 pt-1"
            >
              {content.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-[#122e22]/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-emerald-500/25 text-xs sm:text-sm text-stone-200 font-medium shadow-xs hover:border-emerald-400/40 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* Price & Primary CTA Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <div className="bg-[#0f281e]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-emerald-500/40 shadow-2xl shadow-emerald-950/80 max-w-xl mx-auto lg:mx-0 relative overflow-hidden">
                {/* Glowing subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-emerald-500/20">
                  <div className="text-center sm:text-left">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                      {language === 'de' ? 'Aktionspreis' : 'Preço promocional'}
                    </span>
                    <div className="flex items-baseline gap-2.5 mt-1 justify-center sm:justify-start">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                        {content.currentPrice}
                      </span>
                      <span className="text-stone-400 line-through text-base sm:text-lg">
                        {content.oldPrice}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 bg-emerald-500/25 text-emerald-300 rounded-md border border-emerald-500/40">
                        {content.savings}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-stone-300 bg-stone-900/60 px-3.5 py-2 rounded-xl border border-emerald-500/30">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{language === 'de' ? 'Sofortige Bereitstellung' : 'Entrega imediata'}</span>
                  </div>
                </div>

                {/* Big Action Button */}
                <div className="pt-5 space-y-3">
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCtaClick}
                    className="animate-glow-cta group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-stone-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/30"
                  >
                    <Sparkles className="w-5 h-5 text-stone-950 group-hover:rotate-12 transition-transform" />
                    <span>{content.ctaButton}</span>
                    <ArrowRight className="w-5 h-5 text-stone-950 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Trust guarantees under CTA */}
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-400 pt-1">
                    <div className="flex items-center gap-1 text-emerald-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{content.guaranteePill}</span>
                    </div>
                    <span className="hidden sm:inline text-stone-600">•</span>
                    <div className="flex items-center gap-1 text-amber-300">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>{language === 'de' ? 'PDF direkt per E-Mail' : 'PDF direto no e-mail'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual 3D Book Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[400px]"
            >
              {/* Soft decorative shadow below book */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/60 blur-2xl rounded-full" />

              {/* High-res 3D mockup image with glowing emerald rim */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-400/40 transform hover:-translate-y-1.5 transition-transform duration-500 group shadow-emerald-950/80">
                <img
                  src={coverImage}
                  alt="Refluxkrankheit verstehen E-Book Cover"
                  className="w-full h-auto object-cover block select-none"
                  loading="eager"
                />

                {/* Glass reflection highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Floating Badge 1: 30 Seiten & Sofortzugriff */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -right-3 sm:-right-6 bg-stone-900/95 text-white px-3.5 py-2 rounded-xl shadow-2xl border border-emerald-500/40 text-xs font-semibold flex items-center gap-2 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>30 Seiten PDF</span>
              </motion.div>

              {/* Floating Badge 2: All devices icon pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -left-3 sm:-left-6 bg-stone-900/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-2xl border border-emerald-500/40 text-xs text-stone-200 font-semibold flex items-center gap-2"
              >
                <div className="flex items-center gap-1 text-emerald-400">
                  <Smartphone className="w-3.5 h-3.5" />
                  <Tablet className="w-3.5 h-3.5" />
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <span>{language === 'de' ? 'Für jedes Gerät' : 'Todos os aparelhos'}</span>
              </motion.div>
            </motion.div>

            {/* Quick spec pills below mockup */}
            <div className="mt-8 flex items-center justify-center gap-4 text-xs text-emerald-200/70">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{language === 'de' ? 'Praxisnah & verständlich' : 'Prático e descomplicado'}</span>
              </span>
              <span>•</span>
              <span>{language === 'de' ? 'Kein Fachchinesisch' : 'Sem jargões médicos'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
