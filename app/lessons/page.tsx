"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { extendedTranslations } from "@/lib/translations";

export default function Lessons() {
  const { language } = useLanguage();
  const t = extendedTranslations[language].lessons;
  const nav = extendedTranslations[language].nav;
  const home = extendedTranslations[language].home;
  
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  const levels = [
    {
      id: "beginner",
      title: t.level1Title,
      subtitle: t.level1Subtitle,
      description: t.level1Desc,
      features: [
        t.level1Feature1,
        t.level1Feature2,
        t.level1Feature3,
        t.level1Feature4,
      ],
      icon: "🌱",
    },
    {
      id: "intermediate",
      title: t.level2Title,
      subtitle: t.level2Subtitle,
      description: t.level2Desc,
      features: [
        t.level2Feature1,
        t.level2Feature2,
        t.level2Feature3,
        t.level2Feature4,
      ],
      icon: "🌿",
    },
    {
      id: "advanced",
      title: t.level3Title,
      subtitle: t.level3Subtitle,
      description: t.level3Desc,
      features: [
        t.level3Feature1,
        t.level3Feature2,
        t.level3Feature3,
        t.level3Feature4,
      ],
      icon: "🌳",
    },
  ];

  const lessonTypes = [
    {
      title: t.format1Title,
      description: t.format1Desc,
      duration: t.format1Duration,
      icon: "💬",
      color: "bg-sage/10 border-sage/30",
    },
    {
      title: t.format2Title,
      description: t.format2Desc,
      duration: t.format2Duration,
      icon: "📖",
      color: "bg-terracotta/10 border-terracotta/30",
    },
    {
      title: t.format3Title,
      description: t.format3Desc,
      duration: t.format3Duration,
      icon: "🎤",
      color: "bg-sage/10 border-sage/30",
    },
    {
      title: t.format4Title,
      description: t.format4Desc,
      duration: t.format4Duration,
      icon: "✍️",
      color: "bg-terracotta/10 border-terracotta/30",
    },
  ];

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-6 py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-charcoal transition-colors">StillWell</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/" className="transition-all duration-200">{nav.home}</Link>
            <Link href="/about" className="transition-all duration-200">{nav.about}</Link>
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

      {/* Levels Section */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-charcoal">
            {t.chooseLevelTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level) => (
              <div
                key={level.id}
                onMouseEnter={() => setActiveLevel(level.id)}
                onMouseLeave={() => setActiveLevel(null)}
                className={`bg-warmWhite p-8 rounded-3xl shadow-lg transition-all duration-300 cursor-pointer ${
                  activeLevel === level.id
                    ? "transform -translate-y-2 shadow-2xl"
                    : ""
                }`}
              >
                <div className="text-6xl mb-4">{level.icon}</div>
                <h3 className="text-3xl font-serif font-bold text-charcoal mb-2">
                  {level.title}
                </h3>
                <p className="text-sage font-medium mb-4">{level.subtitle}</p>
                <p className="text-charcoal/70 mb-6">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-charcoal/70"
                    >
                      <span className="text-sage mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Types */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-warmWhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-8 sm:mb-12 text-charcoal break-words">
            {t.formatsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {lessonTypes.map((lesson, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border-2 ${lesson.color} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="text-4xl sm:text-5xl">{lesson.icon}</div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-2 break-words">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-sage font-medium mb-3 break-words">
                      {lesson.duration}
                    </p>
                    <p className="text-sm sm:text-base text-charcoal/70 break-words">{lesson.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-charcoal">
            {t.howWorksTitle}
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  {t.step1Title}
                </h3>
                <p className="text-charcoal/70">
                  {t.step1Desc}
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  {t.step2Title}
                </h3>
                <p className="text-charcoal/70">
                  {t.step2Desc}
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  {t.step3Title}
                </h3>
                <p className="text-charcoal/70">
                  {t.step3Desc}
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  {t.step4Title}
                </h3>
                <p className="text-charcoal/70">
                  {t.step4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-warmWhite">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-charcoal/70">
            {t.ctaText}
          </p>
          <Link href="/start-journey">
            <button className="px-12 py-5 bg-terracotta text-warmWhite rounded-full text-xl font-medium hover:bg-terracotta/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t.ctaButton}
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
