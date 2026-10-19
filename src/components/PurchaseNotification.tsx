import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Download, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PRICE_EUR } from '../data/content';

interface Props {
  language: Language;
}

const NOTIFICATIONS = [
  {
    de: {
      title: 'Kauf bestätigt',
      product: 'Refluxkrankheit verstehen (PDF)',
      time: 'vor 2 Minuten',
      status: 'Sofort-Download per E-Mail gesendet',
      detail: '30-Seiten Ratgeber & Tagebuch',
    },
    pt: {
      title: 'Compra confirmada',
      product: 'Refluxkrankheit verstehen (PDF)',
      time: 'há 2 minutos',
      status: 'Download enviado por e-mail',
      detail: 'Guia 30 páginas + Diário',
    },
  },
  {
    de: {
      title: 'Kauf bestätigt',
      product: 'E-Book Ratgeber (Digitale Ausgabe)',
      time: 'vor 5 Minuten',
      status: 'Bestätigung erfolgreich abgeschlossen',
      detail: 'Zugriff auf allen Geräten freigeschaltet',
    },
    pt: {
      title: 'Compra confirmada',
      product: 'E-Book Guia Prático (PDF)',
      time: 'há 5 minutos',
      status: 'Pagamento aprovado na Hotmart',
      detail: 'Acesso liberado no celular e PC',
    },
  },
  {
    de: {
      title: 'Kauf bestätigt',
      product: 'Refluxkrankheit verstehen',
      time: 'vor 8 Minuten',
      status: 'Symptom-Tagebuch & Auslöser-Liste gesendet',
      detail: 'Sofortiger PDF-Zugriff',
    },
    pt: {
      title: 'Compra confirmada',
      product: 'Refluxkrankheit verstehen',
      time: 'há 8 minutos',
      status: 'Diário de Sintomas e Checklists enviados',
      detail: 'Download liberado na hora',
    },
  },
  {
    de: {
      title: 'Kauf bestätigt',
      product: 'Digitaler Ratgeber (PDF)',
      time: 'vor 14 Minuten',
      status: 'Hotmart Checkout verifiziert',
      detail: `Zahlung über ${PRICE_EUR} € erhalten`,
    },
    pt: {
      title: 'Compra confirmada',
      product: 'Guia Digital em PDF',
      time: 'há 14 minutos',
      status: 'Checkout Hotmart verificado',
      detail: `Valor de ${PRICE_EUR} € aprovado`,
    },
  },
];

export const PurchaseNotification: React.FC<Props> = ({ language }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;

    let cycleTimer: NodeJS.Timeout;
    if (visible) {
      // Stay visible for 5.5 seconds, then hide
      cycleTimer = setTimeout(() => {
        setVisible(false);
      }, 5500);
    } else {
      // Stay hidden for 6 seconds, then show next
      cycleTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 6000);
    }

    return () => clearTimeout(cycleTimer);
  }, [visible, dismissed]);

  const current = NOTIFICATIONS[index][language];

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none sm:bottom-6 sm:left-6 max-w-[340px] w-full">
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="pointer-events-auto bg-[#0f241c]/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-emerald-950/60 border border-emerald-500/30 p-3.5 relative overflow-hidden group hover:border-emerald-400/50 transition-all"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400" />

            <div className="flex items-start gap-3">
              {/* Green checkmark circle with gentle pulse */}
              <div className="relative mt-0.5 shrink-0">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/40 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
              </div>

              {/* Text content - strictly WITHOUT personal names */}
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    {current.title}
                  </span>
                  <span className="text-[11px] text-emerald-200/60 font-medium">
                    • {current.time}
                  </span>
                </div>

                <p className="text-xs font-semibold text-stone-100 mt-1 truncate">
                  {current.product}
                </p>

                <div className="flex items-center gap-1 mt-1 text-[11px] text-stone-300">
                  <Download className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{current.status}</span>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setDismissed(true)}
                className="text-stone-400 hover:text-stone-200 p-1 -mr-1 -mt-1 rounded-lg hover:bg-white/10 transition-colors"
                title="Schließen"
                aria-label="Schließen"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom trust tag */}
            <div className="mt-2.5 pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[10px] text-stone-400">
              <span className="flex items-center gap-1 text-stone-300">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Verifizierte Hotmart-Bestellung</span>
              </span>
              <span className="text-emerald-300 font-bold flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" />
                {PRICE_EUR} €
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
