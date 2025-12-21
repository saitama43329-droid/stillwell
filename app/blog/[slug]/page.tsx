"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { articleContent } from "@/lib/articleContent";
import { translations } from "@/lib/translations";

export default function ArticlePage() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  const nav = translations[language].nav;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const article = articleContent[language]?.[slug];

  if (!mounted || !article) {
    return null;
  }

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

      {/* Article Hero */}
      <section className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-warmWhite via-cream to-sage/5">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-1.5 sm:gap-2 text-sage font-medium mb-5 sm:mb-6 md:mb-8 hover:gap-2 sm:hover:gap-3 transition-all duration-300 group">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-xs xs:text-sm sm:text-base">{language === 'en' ? 'Back to Articles' : 'Назад к Статьям'}</span>
          </Link>

          {/* Icon */}
          <div className="flex items-center justify-center w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 md:mb-8 mx-auto shadow-lg">
            <span className="text-3xl xs:text-4xl sm:text-5xl">{article.icon}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-charcoal leading-tight text-center mb-4 sm:mb-6 md:mb-8 break-words px-2">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs xs:text-sm sm:text-base text-charcoal/70 mb-5 sm:mb-6 md:mb-8">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
            <div className="w-16 xs:w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-sage via-terracotta to-sage rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 bg-warmWhite">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-sm sm:prose-base lg:prose-lg prose-charcoal max-w-none">
            {article.content.map((section, index) => (
              <div key={index} className="mb-5 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                {section.heading && (
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-3 sm:mb-4 md:mb-6 break-words">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-xs xs:text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed mb-3 sm:mb-4 md:mb-6 break-words">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2 xs:space-y-3 sm:space-y-4 my-4 sm:my-6 md:my-8">
                    {section.list.map((item, lIndex) => (
                      <li key={lIndex} className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                        <span className="flex-shrink-0 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 bg-sage/20 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-xs xs:text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed break-words flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sage/10 via-terracotta/10 to-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sage rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-terracotta rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-sage to-transparent rounded-full"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal leading-tight break-words px-2">
            {language === 'en' ? 'Ready to Start Learning?' : 'Готовы Начать Обучение?'}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed break-words px-2">
            {language === 'en' ? 'Join us for personalized English lessons designed for your success' : 'Присоединяйтесь к нам для персонализированных уроков английского'}
          </p>
          
          <div className="pt-4">
            <Link href="/start-journey">
              <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-terracotta to-terracotta/90 text-warmWhite rounded-full text-base sm:text-lg md:text-xl font-semibold hover:from-terracotta/90 hover:to-terracotta transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 active:scale-95 border-2 border-terracotta/20">
                <span className="relative z-10">{language === 'en' ? 'Book Your First Lesson' : 'Забронировать Первый Урок'}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="text-2xl font-serif font-bold">StillWell</div>
          <p className="text-warmWhite/70 text-sm sm:text-base">{language === 'en' ? 'Master English with calm confidence' : 'Овладейте английским со спокойной уверенностью'}</p>
          <p className="text-xs sm:text-sm text-warmWhite/50">{language === 'en' ? 'Taught by Ksenia Volchemateva' : 'Преподаватель: Ксения Волчематева'}</p>
        </div>
      </footer>
    </main>
  );
}
