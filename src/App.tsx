/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solutions } from './components/Solutions';
import { InsideLook } from './components/InsideLook';
import { AudienceFilter } from './components/AudienceFilter';
import { SymptomChecker } from './components/SymptomChecker';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PurchaseNotification } from './components/PurchaseNotification';
import { StickyCta } from './components/StickyCta';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('de');

  // Scroll Progress Bar for engaging visual feedback
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const handleToggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#081611] text-stone-100 selection:bg-emerald-400 selection:text-stone-950 relative overflow-x-hidden">
      {/* Scroll Progress Indicator Bar at top of viewport */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 origin-left z-50 shadow-md shadow-emerald-400/30"
      />

      {/* Global Alive Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep emerald organic glow orb */}
        <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-emerald-600/12 rounded-full blur-[140px] animate-orb-1" />
        {/* Soothing teal organic glow orb */}
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[130px] animate-orb-2" />
        {/* Warm comforting amber gut-relief glow orb */}
        <div className="absolute top-2/3 -left-32 w-[550px] h-[550px] bg-amber-500/8 rounded-full blur-[120px] animate-orb-3" />
        {/* Bottom botanical wellness aura */}
        <div className="absolute bottom-10 right-1/4 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px] animate-orb-1" />
        {/* Subtle mesh pattern overlay */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-30" />
      </div>

      {/* Navigation & Announcement Bar */}
      <div className="relative z-40">
        <Navbar
          language={language}
          onToggleLanguage={handleToggleLanguage}
        />
      </div>

      {/* Main Sales Page Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section with 3D Mockup & Price */}
        <Hero language={language} />

        {/* Empathy & Problem Statement with Scroll Animations */}
        <PainPoints language={language} />

        {/* The 3 Core Solutions Solved by the Book */}
        <Solutions language={language} />

        {/* Inside the 30 Pages (Table of Contents & Tools) */}
        <InsideLook language={language} />

        {/* For Whom & For Whom Not */}
        <AudienceFilter language={language} />

        {/* Interactive Symptom Self-Test */}
        <SymptomChecker language={language} />

        {/* Pricing & Checkout Stack (28,74 €) */}
        <PricingSection language={language} />

        {/* FAQs */}
        <FaqSection language={language} />
      </main>

      {/* Footer with Contact Buttons (Instagram, FB, Kwai, TikTok, YouTube, Threads) */}
      <div className="relative z-20">
        <Footer language={language} />
      </div>

      {/* Live Purchase Confirmed Toast (Bottom-Left Corner, without names) */}
      <PurchaseNotification language={language} />

      {/* Sticky Quick-Buy bar on scroll */}
      <StickyCta language={language} />
    </div>
  );
}
