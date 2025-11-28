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
      <header className="px-6 py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-charcoal transition-colors">
            StillWell
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/" className="transition-all duration-200">{nav.home}</Link>
            <Link href="/about" className="transition-all duration-200">{nav.about}</Link>
            <Link href="/lessons" className="transition-all duration-200">{nav.lessons}</Link>
            <LanguageSwitcher />
          </div>

          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button onClick={() => document.getElementById('mobile-menu')?.classList.toggle('translate-x-full')} className="p-2 text-charcoal transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
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
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-sage/5 to-cream">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-charcoal leading-tight break-words">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-warmWhite rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-sage/10 hover:border-sage/30">
                <div className="p-8 space-y-4">
                  <div className="text-4xl mb-4">{post.icon}</div>
                  <h2 className="text-2xl font-serif font-bold text-charcoal group-transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-4">
                    <span className="text-sm font-medium text-sage">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage/10 via-terracotta/10 to-cream">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal break-words">
            {t.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <Link href="/start-journey">
            <button className="px-10 sm:px-12 py-4 sm:py-5 bg-terracotta text-warmWhite rounded-full text-lg sm:text-xl font-semibold hover:bg-terracotta/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 active:scale-95">
              {t.ctaButton}
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="text-2xl font-serif font-bold">StillWell</div>
          <p className="text-warmWhite/70">{t.footerTagline}</p>
          <p className="text-sm text-warmWhite/50">{t.footerTeacher}</p>
        </div>
      </footer>
    </main>
  );
}
