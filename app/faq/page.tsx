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
      <header className="px-3 xs:px-4 sm:px-6 py-3 sm:py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif font-bold text-charcoal transition-colors">
            StillWell
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/" className="transition-all duration-200">{nav.home}</Link>
            <Link href="/about" className="transition-all duration-200">{nav.about}</Link>
            <Link href="/lessons" className="transition-all duration-200">{nav.lessons}</Link>
            <Link href="/blog" className="transition-all duration-200">{nav.blog}</Link>
            <LanguageSwitcher />
          </div>

          <div className="flex md:hidden items-center gap-2 xs:gap-3 sm:gap-4">
            <LanguageSwitcher />
            <button onClick={() => document.getElementById('mobile-menu')?.classList.toggle('translate-x-full')} className="p-1.5 sm:p-2 text-charcoal transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </nav>

        <div id="mobile-menu" className="md:hidden fixed top-0 right-0 h-full w-64 xs:w-72 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50 bg-white">
          <div className="flex flex-col h-full bg-white">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-charcoal/10 bg-white">
              <span className="text-lg sm:text-xl font-serif font-bold text-charcoal">Menu</span>
              <button onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')} className="p-2 text-charcoal transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 p-4 sm:p-6 bg-white">
              <Link href="/" className="text-base sm:text-lg font-medium text-charcoal px-3 sm:px-4 py-3 rounded-lg transition-all min-h-[44px] flex items-center" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.home}</Link>
              <Link href="/about" className="text-base sm:text-lg font-medium text-charcoal px-3 sm:px-4 py-3 rounded-lg transition-all min-h-[44px] flex items-center" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.about}</Link>
              <Link href="/lessons" className="text-base sm:text-lg font-medium text-charcoal px-3 sm:px-4 py-3 rounded-lg transition-all min-h-[44px] flex items-center" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.lessons}</Link>
              <Link href="/blog" className="text-base sm:text-lg font-medium text-charcoal px-3 sm:px-4 py-3 rounded-lg transition-all min-h-[44px] flex items-center" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.blog}</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-warmWhite via-cream to-sage/5">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Decorative Element */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-sage via-terracotta to-sage rounded-full"></div>
          </div>
          
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
              <span className="text-2xl xs:text-3xl sm:text-4xl">❓</span>
            </div>
          </div>
          
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-charcoal leading-tight break-words px-2">
            {t.title}
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed break-words px-2">
            {t.subtitle}
          </p>
          
          {/* Decorative Element */}
          <div className="flex justify-center mt-3 sm:mt-4">
            <div className="w-16 sm:w-24 h-0.5 bg-sage/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-warmWhite rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border-2 border-charcoal/10 hover:border-sage/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 md:py-6 flex items-start justify-between gap-2 xs:gap-3 sm:gap-4 text-left hover:bg-sage/5 transition-colors duration-200"
                >
                  <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 flex-1">
                    <span className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-sage">{index + 1}</span>
                    </span>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-serif font-bold text-charcoal leading-snug break-words flex-1 pt-0.5 sm:pt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    className={`flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-sage transition-transform duration-300 mt-1 sm:mt-2 ${
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
                  <div className="px-4 xs:px-5 sm:px-6 md:px-8 pb-3 xs:pb-4 sm:pb-5 md:pb-6 pt-1 sm:pt-2">
                    <div className="pl-0 sm:pl-12 md:pl-14 border-t border-charcoal/10 pt-3 sm:pt-4 md:pt-5">
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed break-words">
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
