"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { blogTranslations } from "@/lib/translations";

export default function Blog() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = blogTranslations[language];
  const nav = blogTranslations[language].nav;

  useEffect(() => {
    setMounted(true);
  }, []);

  const blogPosts = t.posts;

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-3 xs:px-4 sm:px-6 py-3 sm:py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif font-bold text-charcoal transition-colors">
            StillWell
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/" className="transition-all duration-200">{nav.home}</Link>
            <Link href="/about" className="transition-all duration-200">{nav.about}</Link>
            <Link href="/lessons" className="transition-all duration-200">{nav.lessons}</Link>
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
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-warmWhite via-cream to-sage/5">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Decorative Element */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-sage via-terracotta to-sage rounded-full"></div>
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

      {/* Articles Grid */}
      <section className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 sm:gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => {
              const slugs = [
                'start-with-what-you-love',
                'speak-from-day-one',
                'write-a-little-every-day',
                'listen-actively',
                'set-small-clear-goals',
                'find-a-learning-partner',
                'read-out-loud',
                'use-subtitles-wisely',
                'think-in-english',
              ];
              return (
              <Link href={`/blog/${slugs[index]}`} key={index}>
                <article 
                  className="bg-warmWhite rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 overflow-hidden group border-2 border-charcoal/10 hover:border-sage/40 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                >
                <div className="p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col flex-1">
                  {/* Icon with background */}
                  <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl xs:text-3xl sm:text-4xl">{post.icon}</span>
                  </div>
                  
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif font-bold text-charcoal leading-snug break-words group-hover:text-sage transition-colors duration-300 mb-2 sm:mb-3 md:mb-4">
                    {post.title}
                  </h2>
                  
                  <p className="text-xs xs:text-sm sm:text-base text-charcoal/75 leading-relaxed break-words flex-1 mb-3 sm:mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Read time badge */}
                  <div className="pt-2 sm:pt-3 border-t border-charcoal/10 mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-sage bg-sage/10 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full">
                        {post.readTime}
                      </span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sage/60 group-hover:text-sage group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-warmWhite via-sage/5 to-terracotta/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sage rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-terracotta rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
          {/* Decorative top line */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-sage to-transparent rounded-full"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal leading-tight break-words px-2">
            {t.ctaTitle}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed break-words px-2">
            {t.ctaText}
          </p>
          
          {/* Premium CTA Button */}
          <div className="pt-4">
            <Link href="/start-journey">
              <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-terracotta to-terracotta/90 text-warmWhite rounded-full text-base sm:text-lg md:text-xl font-semibold hover:from-terracotta/90 hover:to-terracotta transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 active:scale-95 border-2 border-terracotta/20">
                <span className="relative z-10">{t.ctaButton}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
          
          {/* Decorative bottom line */}
          <div className="flex justify-center mt-8">
            <div className="w-16 h-0.5 bg-sage/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="text-xl sm:text-2xl font-serif font-bold">StillWell</div>
          <p className="text-sm sm:text-base text-warmWhite/70 break-words px-2">{t.footerTagline}</p>
          <p className="text-xs sm:text-sm text-warmWhite/50 break-words px-2">{t.footerTeacher}</p>
        </div>
      </footer>
    </main>
  );
}
