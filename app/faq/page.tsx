"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { faqTranslations } from "@/lib/translations";

export default function FAQ() {
  const { language } = useLanguage();
  const t = faqTranslations[language];
  const nav = faqTranslations[language].nav;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-4 sm:px-6 py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-charcoal transition-colors">
            StillWell
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/" className="transition-all duration-200">{nav.home}</Link>
            <Link href="/about" className="transition-all duration-200">{nav.about}</Link>
            <Link href="/lessons" className="transition-all duration-200">{nav.lessons}</Link>
            <Link href="/blog" className="transition-all duration-200">{nav.blog}</Link>
            <LanguageSwitcher />
          </div>

          <div className="flex md:hidden items-center gap-3 sm:gap-4">
            <LanguageSwitcher />
            <button onClick={() => document.getElementById('mobile-menu')?.classList.toggle('translate-x-full')} className="p-2 text-charcoal transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </nav>

        <div id="mobile-menu" className="md:hidden fixed top-0 right-0 h-full w-72 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50 bg-white">
          <div className="flex flex-col h-full bg-white">
            <div className="flex justify-between items-center p-6 border-b border-charcoal/10 bg-white">
              <span className="text-xl font-serif font-bold text-charcoal">Menu</span>
              <button onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')} className="p-2 text-charcoal transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-6 bg-white">
              <Link href="/" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.home}</Link>
              <Link href="/about" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.about}</Link>
              <Link href="/lessons" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.lessons}</Link>
              <Link href="/blog" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.blog}</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-warmWhite via-cream to-sage/5">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Decorative Element */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-sage via-terracotta to-sage rounded-full"></div>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-3xl flex items-center justify-center shadow-lg">
              <span className="text-3xl sm:text-4xl">❓</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal leading-tight break-words px-2">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed break-words px-2">
            {t.subtitle}
          </p>
          
          {/* Decorative Element */}
          <div className="flex justify-center mt-4">
            <div className="w-24 h-0.5 bg-sage/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-warmWhite rounded-2xl shadow-lg border-2 border-charcoal/10 hover:border-sage/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-start justify-between gap-4 text-left hover:bg-sage/5 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-lg sm:text-xl font-bold text-sage">{index + 1}</span>
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-charcoal leading-snug break-words flex-1 pt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-sage transition-transform duration-300 mt-2 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-2">
                    <div className="pl-0 sm:pl-14 border-t border-charcoal/10 pt-4 sm:pt-5">
                      <p className="text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed break-words">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-warmWhite via-sage/5 to-terracotta/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sage rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-terracotta rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-sage to-transparent rounded-full"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal leading-tight break-words px-2">
            {t.ctaTitle}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed break-words px-2">
            {t.ctaText}
          </p>
          
          <div className="pt-4">
            <Link href="/start-journey">
              <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-terracotta to-terracotta/90 text-warmWhite rounded-full text-base sm:text-lg md:text-xl font-semibold hover:from-terracotta/90 hover:to-terracotta transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 active:scale-95 border-2 border-terracotta/20">
                <span className="relative z-10">{t.ctaButton}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="w-16 h-0.5 bg-sage/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="text-2xl font-serif font-bold">StillWell</div>
          <p className="text-warmWhite/70 text-sm sm:text-base">{t.footerTagline}</p>
          <p className="text-xs sm:text-sm text-warmWhite/50">{t.footerTeacher}</p>
        </div>
      </footer>
    </main>
  );
}
