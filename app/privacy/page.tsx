"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { extendedTranslations } from "@/lib/translations";

export default function Privacy() {
  const { language } = useLanguage();
  const t = extendedTranslations[language].privacy;
  const nav = extendedTranslations[language].nav;
  const home = extendedTranslations[language].home;

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-3 xs:px-4 sm:px-6 py-3 sm:py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif font-bold text-charcoal transition-colors">StillWell</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/" className="transition-all duration-200">{nav.home}</Link>
            <Link href="/about" className="transition-all duration-200">{nav.about}</Link>
            <Link href="/lessons" className="transition-all duration-200">{nav.lessons}</Link>
            <Link href="/blog" className="transition-all duration-200">{nav.blog}</Link>
            <LanguageSwitcher />
          </div>
          <div className="flex md:hidden items-center gap-2 xs:gap-3 sm:gap-4">
            <LanguageSwitcher />
            <button onClick={() => document.getElementById('mobile-menu')?.classList.toggle('translate-x-full')} className="p-1.5 sm:p-2 text-charcoal transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          </div>
        </nav>
        <div id="mobile-menu" className="md:hidden fixed top-0 right-0 h-full w-64 xs:w-72 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex flex-col h-full" style={{ backgroundColor: '#ffffff' }}>
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-charcoal/10" style={{ backgroundColor: '#ffffff' }}>
              <span className="text-lg sm:text-xl font-serif font-bold text-charcoal">Menu</span>
              <button onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')} className="p-2 text-charcoal transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 p-4 sm:p-6" style={{ backgroundColor: '#ffffff' }}>
              <Link href="/" className="text-base sm:text-lg font-medium text-charcoal px-3 sm:px-4 py-3 rounded-lg transition-all min-h-[44px] flex items-center" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.home}</Link>
              <Link href="/about" className="text-base sm:text-lg font-medium text-charcoal px-3 sm:px-4 py-3 rounded-lg transition-all min-h-[44px] flex items-center" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.about}</Link>
              <Link href="/lessons" className="text-base sm:text-lg font-medium text-charcoal px-3 sm:px-4 py-3 rounded-lg transition-all min-h-[44px] flex items-center" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.lessons}</Link>
              <Link href="/blog" className="text-base sm:text-lg font-medium text-charcoal px-3 sm:px-4 py-3 rounded-lg transition-all min-h-[44px] flex items-center" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.blog}</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="px-3 xs:px-4 sm:px-6 py-10 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 sm:mb-8 break-words">
            {t.title}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal/60 mb-8 sm:mb-12">{t.lastUpdated}</p>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-charcoal/80 leading-relaxed">
            <div className="bg-warmWhite p-4 xs:p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4 break-words">
                {t.section1Title}
              </h2>
              <p className="text-sm xs:text-base break-words">{t.section1Text}</p>
            </div>

            <div className="bg-warmWhite p-4 xs:p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4 break-words">
                {t.section2Title}
              </h2>
              <p className="mb-3 sm:mb-4 text-sm xs:text-base break-words">{t.section2Text}</p>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 text-sm xs:text-base">
                <li className="break-words">{t.section2Item1}</li>
                <li className="break-words">{t.section2Item2}</li>
                <li className="break-words">{t.section2Item3}</li>
              </ul>
            </div>

            <div className="bg-warmWhite p-4 xs:p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4 break-words">
                {t.section3Title}
              </h2>
              <p className="text-sm xs:text-base break-words">{t.section3Text}</p>
            </div>

            <div className="bg-warmWhite p-4 xs:p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4 break-words">
                {t.section4Title}
              </h2>
              <p className="text-sm xs:text-base break-words">{t.section4Text}</p>
            </div>

            <div className="bg-warmWhite p-4 xs:p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4 break-words">
                {t.section5Title}
              </h2>
              <p className="text-sm xs:text-base break-words">{t.section5Text}</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/">
              <button className="px-6 sm:px-8 py-3 bg-sage text-warmWhite rounded-full hover:bg-sage/90 transition-all text-sm sm:text-base">
                {nav.backHome}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="text-xl sm:text-2xl font-serif font-bold">StillWell</div>
          <p className="text-sm sm:text-base text-warmWhite/70 break-words px-2">{home.footerTagline}</p>
          <p className="text-xs sm:text-sm text-warmWhite/50 break-words px-2">{home.footerTeacher}</p>
        </div>
      </footer>
    </main>
  );
}
