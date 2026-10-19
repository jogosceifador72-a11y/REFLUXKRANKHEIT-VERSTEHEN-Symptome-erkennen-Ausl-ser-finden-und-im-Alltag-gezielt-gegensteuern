import React from 'react';
import { motion } from 'motion/react';
import {
  Check,
  ShieldCheck,
  Lock,
  Download,
  Mail,
  Sparkles,
  ArrowRight,
  Clock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HOTMART_CHECKOUT_URL, PRICE_EUR, OLD_PRICE_EUR, CONTENT } from '../data/content';
import { Language } from '../types';
import coverImage from '../assets/images/ebook-cover.jpg';

interface Props {
  language: Language;
}

export const PricingSection: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].pricing;

  const handleConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="bestellen" className="py-24 bg-gradient-to-b from-[#081812] via-[#0e2a1f] to-[#071711] relative overflow-hidden text-stone-100">
      {/* Dynamic background ambient glowing lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-emerald-500/20 via-teal-400/15 to-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Pricing Master Card with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65 }}
          className="bg-gradient-to-b from-[#091f16] via-[#0c241b] to-[#071811] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-emerald-500/40 relative overflow-hidden shadow-emerald-950/80"
        >
          {/* Subtle top light bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Product summary & image mockup preview (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 sm:w-56 mb-6 group">
                <img
                  src={coverImage}
                  alt="Refluxkrankheit verstehen"
                  className="rounded-xl shadow-2xl border-2 border-emerald-400/40 object-cover w-full group-hover:scale-105 transition-transform duration-300 shadow-emerald-950/70"
                />
                <div className="absolute -bottom-3 -right-3 bg-emerald-400 text-stone-950 px-3 py-1 rounded-lg text-xs font-black shadow-lg">
                  PDF 30 S.
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold font-serif-title text-white mb-2">
                Refluxkrankheit verstehen
              </h4>
              <p className="text-xs text-stone-300 max-w-xs mb-4">
                Symptome erkennen, Auslöser finden und im Alltag gezielt gegensteuern
              </p>

              {/* Delivery info pills */}
              <div className="space-y-2 w-full max-w-xs text-left">
                <div className="flex items-center gap-2.5 bg-[#061811]/90 px-3.5 py-2.5 rounded-xl text-xs text-stone-200 border border-emerald-500/30">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{content.deliveryInfo}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#061811]/90 px-3.5 py-2.5 rounded-xl text-xs text-stone-200 border border-emerald-500/30">
                  <Download className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="truncate">{content.formatInfo}</span>
                </div>
              </div>
            </div>

            {/* Right: What's included + Price + Hotmart CTA (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Price Banner */}
              <div className="bg-[#0f281e]/90 rounded-2xl p-6 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                    {language === 'de' ? 'Komplett-Paket (Einmalzahlung)' : 'Pacote Completo (Pagamento Único)'}
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {content.price}
                    </span>
                    <span className="text-stone-400 line-through text-lg">
                      {content.oldPrice}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-500/25 text-emerald-300 rounded-lg border border-emerald-500/40">
                      -41% Rabatt
                    </span>
                  </div>
                </div>

                <div className="text-right sm:text-right text-xs text-stone-300 flex items-center sm:flex-col sm:items-end gap-2 sm:gap-1">
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{language === 'de' ? 'Sofort-Zugriff' : 'Acesso imediato'}</span>
                  </div>
                  <span className="text-stone-400">{language === 'de' ? 'Kein Abonnement' : 'Sem mensalidades'}</span>
                </div>
              </div>

              {/* What's included list */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 block">
                  {language === 'de' ? 'Das ist alles im Paket enthalten:' : 'Tudo o que está incluído no seu acesso:'}
                </span>
                <div className="space-y-2.5">
                  {content.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-stone-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Order CTA */}
              <div className="pt-2 space-y-3">
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConfetti}
                  className="animate-glow-cta group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-stone-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-5 h-5 text-stone-950 group-hover:rotate-12 transition-transform" />
                  <span>{content.ctaText}</span>
                  <ArrowRight className="w-5 h-5 text-stone-950 group-hover:translate-x-1.5 transition-transform" />
                </a>

                {/* Secure Hotmart badges */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-stone-300 pt-2 text-center">
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{content.guarantee}</span>
                  </div>
                  <span className="hidden sm:inline text-stone-600">•</span>
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>256-Bit SSL Verschlüsselung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
