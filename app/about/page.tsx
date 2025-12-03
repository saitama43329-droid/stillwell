"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { extendedTranslations } from "@/lib/translations";

function QuoteTypingAnimation({ quotes }: { quotes: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentQuote = quotes[currentIndex];
    
    if (isTyping) {
      if (charIndex < currentQuote.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentQuote.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentQuote.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % quotes.length);
          setIsTyping(true);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, currentIndex, quotes]);

  return (
    <div className="min-h-[120px] sm:min-h-[100px] flex items-center justify-center px-4">
      <p className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal text-center leading-relaxed break-words">
        "{displayText}
        <span className="inline-block w-0.5 h-6 sm:h-7 md:h-8 bg-sage ml-1 animate-pulse align-middle"></span>"
      </p>
    </div>
  );
}

export default function About() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = extendedTranslations[language].about;
  const nav = extendedTranslations[language].nav;
  const home = extendedTranslations[language].home;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-6 py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-charcoal transition-colors">
            StillWell
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/" className="transition-all duration-200">{nav.home}</Link>
            <Link href="/lessons" className="transition-all duration-200">{nav.lessons}</Link>
            <Link href="/blog" className="transition-all duration-200">{nav.blog}</Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button onClick={() => document.getElementById('mobile-menu')?.classList.toggle('translate-x-full')} className="p-2 text-charcoal transition-colors" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </nav>

        {/* Mobile Slide-out Menu */}
        <div id="mobile-menu" className="md:hidden fixed top-0 right-0 h-full w-72 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex flex-col h-full" style={{ backgroundColor: '#ffffff' }}>
            <div className="flex justify-between items-center p-6 border-b border-charcoal/10" style={{ backgroundColor: '#ffffff' }}>
              <span className="text-xl font-serif font-bold text-charcoal">Menu</span>
              <button onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')} className="p-2 text-charcoal transition-colors" aria-label="Close menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-6" style={{ backgroundColor: '#ffffff' }}>
              <Link href="/" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.home}</Link>
              <Link href="/lessons" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.lessons}</Link>
              <Link href="/blog" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.blog}</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal leading-tight">
            {t.title}
            <br />
            <span className="text-sage">{t.titleAccent}</span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="px-6 py-12 bg-gradient-to-br from-sage/5 via-terracotta/5 to-cream">
        <div className="max-w-5xl mx-auto">
          <div className="bg-warmWhite/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-sage/10 p-8 md:p-12">
            {mounted && <QuoteTypingAnimation quotes={t.inspirationalQuotes} />}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Teacher Introduction */}
          <div className="bg-gradient-to-br from-sage/10 to-terracotta/10 p-10 rounded-3xl shadow-xl border-2 border-sage/20">
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-warmWhite rounded-full flex items-center justify-center shadow-lg">
                <span className="text-5xl">👩‍🏫</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-charcoal mb-3">
                {t.meetTeacher}
              </h2>
              <p className="text-2xl font-serif text-sage mb-2">
                {t.teacherName}
              </p>
              <div className="w-20 h-1 bg-terracotta mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
              <p>{t.teacherBio1}</p>
              <p>{t.teacherBio2}</p>
              <p className="text-sage font-medium italic">
                {t.teacherQuote}
              </p>
            </div>
          </div>

          <div className="bg-warmWhite p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
              {t.philosophyTitle}
            </h2>
            <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
              <p>{t.philosophyText1}</p>
              <p>{t.philosophyText2}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-warmWhite p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                {t.thoughtfulGrowthTitle}
              </h3>
              <p className="text-charcoal/70">
                {t.thoughtfulGrowthDesc}
              </p>
            </div>

            <div className="bg-warmWhite p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                {t.personalConnectionTitle}
              </h3>
              <p className="text-charcoal/70">
                {t.personalConnectionDesc}
              </p>
            </div>
          </div>

          <div className="bg-sage/10 p-10 rounded-3xl border-2 border-sage/20">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
              {t.whyStillwellTitle}
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              {t.whyStillwellText}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20 bg-warmWhite">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-charcoal">
            {t.valuesTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-sage/20 rounded-full flex items-center justify-center text-3xl">
                ⚖️
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                {t.balanceTitle}
              </h3>
              <p className="text-charcoal/70">
                {t.balanceDesc}
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-terracotta/20 rounded-full flex items-center justify-center text-3xl">
                💎
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                {t.qualityTitle}
              </h3>
              <p className="text-charcoal/70">
                {t.qualityDesc}
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-sage/20 rounded-full flex items-center justify-center text-3xl">
                🧘
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                {t.mindfulnessTitle}
              </h3>
              <p className="text-charcoal/70">
                {t.mindfulnessDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <Link href="/start-journey">
            <button className="px-12 py-5 bg-terracotta text-warmWhite rounded-full text-xl font-semibold hover:bg-terracotta/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 active:scale-95">
              {home.startJourney}
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="text-2xl font-serif font-bold">StillWell</div>
          <p className="text-warmWhite/70">
            {home.footerTagline}
          </p>
          <p className="text-sm text-warmWhite/50">
            {home.footerTeacher}
          </p>
          <div className="pt-2 pb-4 border-t border-warmWhite/10 mt-4">
            <p className="text-xs text-warmWhite/40 mb-1">{home.addressLabel}</p>
            <p className="text-sm text-warmWhite/60">
              {home.footerAddress}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
