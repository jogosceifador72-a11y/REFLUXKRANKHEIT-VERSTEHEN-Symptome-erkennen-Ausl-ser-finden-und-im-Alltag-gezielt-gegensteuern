import React from 'react';
import {
  Instagram,
  Facebook,
  Youtube,
  Share2,
  ExternalLink,
  ShieldCheck,
  Heart,
  Video,
  AtSign,
} from 'lucide-react';
import { SOCIAL_LINKS, CONTENT, HOTMART_CHECKOUT_URL, PRICE_EUR } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
}

// Custom icons or styled wrappers for TikTok, Kwai, Threads, etc.
export const Footer: React.FC<Props> = ({ language }) => {
  const content = CONTENT[language].footer;

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'facebook-page':
        return <Share2 className="w-5 h-5" />;
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      case 'tiktok':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
          </svg>
        );
      case 'threads':
        return <AtSign className="w-5 h-5" />;
      case 'kwai':
        return <Video className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getButtonStyling = (type: string) => {
    switch (type) {
      case 'instagram':
        return 'from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-pink-500/20';
      case 'facebook':
        return 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue-500/20';
      case 'facebook-page':
        return 'from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-indigo-500/20';
      case 'youtube':
        return 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-red-500/20';
      case 'tiktok':
        return 'from-stone-900 to-black hover:from-stone-800 hover:to-stone-900 text-white shadow-stone-800/20';
      case 'threads':
        return 'from-stone-800 to-stone-950 hover:from-black hover:to-stone-900 text-white shadow-stone-900/20';
      case 'kwai':
        return 'from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-orange-500/20';
      default:
        return 'from-stone-700 to-stone-800 text-white';
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Card */}
        <div className="bg-stone-800/80 rounded-3xl p-8 sm:p-10 border border-stone-700/80 mb-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
                Karin Zeit • Autorin & Content Creator
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-title tracking-tight">
                {content.connectTitle}
              </h3>
              <p className="text-stone-400 mt-2 text-sm sm:text-base leading-relaxed">
                {content.aboutKarinText}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-stone-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
              >
                <span>{language === 'de' ? `E-Book sichern (${PRICE_EUR} €)` : `Garantir E-Book (${PRICE_EUR} €)`}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Social Contact Buttons Grid */}
          <div className="mt-8 pt-8 border-t border-stone-700/60">
            <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-4">
              {content.connectSub}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {SOCIAL_LINKS.map((social) => {
                const gradient = getButtonStyling(social.type);
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r ${gradient} shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm shrink-0">
                        {getSocialIcon(social.type)}
                      </div>
                      <div className="min-w-0 text-left">
                        <div className="font-bold text-sm leading-tight truncate">
                          {social.name}
                        </div>
                        <div className="text-[11px] text-white/80 truncate">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="bg-stone-800/40 rounded-2xl p-6 border border-stone-800 text-xs text-stone-400 leading-relaxed space-y-2 mb-10">
          <div className="flex items-center gap-2 text-stone-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{content.disclaimerTitle}</span>
          </div>
          <p>{content.disclaimerText}</p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 pt-6 border-t border-stone-800/80">
          <div className="flex items-center gap-1.5">
            <span>{content.copyright}</span>
          </div>

          <div className="flex items-center gap-2 text-stone-400">
            <span>Entwickelt mit</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>für mehr Lebensqualität & Gesundheit</span>
          </div>

          <div className="text-stone-400">
            {content.privacyNote}
          </div>
        </div>
      </div>
    </footer>
  );
};
