"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { extendedTranslations } from "@/lib/translations";

export default function Terms() {
  const { language } = useLanguage();
  const t = extendedTranslations[language].terms;
  const nav = extendedTranslations[language].nav;
  const home = extendedTranslations[language].home;

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-6 py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-charcoal transition-colors">StillWell</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/" className="transition-all duration-200">{nav.home}</Link>
            <Link href="/about" className="transition-all duration-200">{nav.about}</Link>
            <Link href="/lessons" className="transition-all duration-200">{nav.lessons}</Link>
            <Link href="/blog" className="transition-all duration-200">{nav.blog}</Link>
            <LanguageSwitcher />
          </div>
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button onClick={() => document.getElementById('mobile-menu')?.classList.toggle('translate-x-full')} className="p-2 text-charcoal transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          </div>
        </nav>
        <div id="mobile-menu" className="md:hidden fixed top-0 right-0 h-full w-72 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex flex-col h-full" style={{ backgroundColor: '#ffffff' }}>
            <div className="flex justify-between items-center p-6 border-b border-charcoal/10" style={{ backgroundColor: '#ffffff' }}>
              <span className="text-xl font-serif font-bold text-charcoal">Menu</span>
              <button onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')} className="p-2 text-charcoal transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>
            <div className="flex flex-col gap-2 p-6" style={{ backgroundColor: '#ffffff' }}>
              <Link href="/" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.home}</Link>
              <Link href="/about" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.about}</Link>
              <Link href="/lessons" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.lessons}</Link>
              <Link href="/blog" className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all" onClick={() => document.getElementById('mobile-menu')?.classList.add('translate-x-full')}>{nav.blog}</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-8 break-words">
            {t.title}
          </h1>
          <p className="text-sm text-charcoal/60 mb-12">{t.lastUpdated}</p>

          <div className="space-y-8 text-charcoal/80 leading-relaxed">
            <div className="bg-warmWhite p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                {t.section1Title}
              </h2>
              <p>{t.section1Text}</p>
            </div>

            <div className="bg-warmWhite p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                {t.section2Title}
              </h2>
              <p>{t.section2Text}</p>
            </div>

            <div className="bg-warmWhite p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                {t.section3Title}
              </h2>
              <p>{t.section3Text}</p>
            </div>

            <div className="bg-warmWhite p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                {t.section4Title}
              </h2>
              <p>{t.section4Text}</p>
            </div>

            <div className="bg-warmWhite p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                {t.section5Title}
              </h2>
              <p>{t.section5Text}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <button className="px-8 py-3 bg-sage text-warmWhite rounded-full hover:bg-sage/90 transition-all">
                {nav.backHome}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="text-2xl font-serif font-bold">StillWell</div>
          <p className="text-warmWhite/70">{home.footerTagline}</p>
          <p className="text-sm text-warmWhite/50">{home.footerTeacher}</p>
        </div>
      </footer>
    </main>
  );
}
