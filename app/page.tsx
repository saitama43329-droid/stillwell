"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

function StartJourneyTyping({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.substring(0, text.length + 1));
          setDelta(150 - Math.random() * 50);
        } else {
          setDelta(2000);
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.substring(0, text.length - 1));
          setDelta(75);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setDelta(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, delta, phrases]);

  return (
    <>
      {text}
      <span className="animate-pulse">|</span>
    </>
  );
}

function MainTypingAnimation({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.substring(0, text.length + 1));
          setDelta(150 - Math.random() * 50);
        } else {
          setDelta(2000);
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.substring(0, text.length - 1));
          setDelta(75);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setDelta(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, delta, phrases]);

  return (
    <div 
      className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl font-serif h-full flex items-center justify-center text-center max-w-full overflow-hidden px-1"
      style={{ color: '#8B9D83' }}
    >
      <span className="truncate">{text}</span>
      <span className="animate-pulse ml-1 flex-shrink-0">|</span>
    </div>
  );
}

function ViewLessonsTyping({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.substring(0, text.length + 1));
          setDelta(150 - Math.random() * 50);
        } else {
          setDelta(2000);
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.substring(0, text.length - 1));
          setDelta(75);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setDelta(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, delta, phrases]);

  return (
    <>
      {text}
      <span className="animate-pulse">|</span>
    </>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].home;
  const nav = translations[language].nav;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-3 xs:px-4 sm:px-6 py-3 sm:py-5 md:px-12 lg:px-16 backdrop-blur-sm sticky top-0 z-50" style={{ backgroundColor: 'rgba(253,251,247,0.95)', borderBottom: '1px solid rgba(44,44,44,0.1)' }}>
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif font-bold" style={{ color: '#2C2C2C' }}>
            StillWell
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: '#2C2C2C' }}>
            <Link href="/about" className="transition-all duration-200">
              {nav.about}
            </Link>
            <Link href="/lessons" className="transition-all duration-200">
              {nav.lessons}
            </Link>
            <Link href="/blog" className="transition-all duration-200">
              {nav.blog}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex md:hidden items-center gap-2 xs:gap-3 sm:gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                  menu.classList.toggle('translate-x-full');
                }
              }}
              className="p-1.5 sm:p-2 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              style={{ color: '#2C2C2C' }}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Slide-out Menu */}
        <div
          id="mobile-menu"
          className="md:hidden fixed top-0 right-0 h-full w-72 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50"
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className="flex flex-col h-full" style={{ backgroundColor: '#ffffff' }}>
            <div className="flex justify-between items-center p-6 border-b border-charcoal/10" style={{ backgroundColor: '#ffffff' }}>
              <span className="text-xl font-serif font-bold text-charcoal">Menu</span>
              <button
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) {
                    menu.classList.add('translate-x-full');
                  }
                }}
                className="p-2 text-charcoal transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-6" style={{ backgroundColor: '#ffffff' }}>
              <Link
                href="/about"
                className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('translate-x-full');
                }}
              >
                {nav.about}
              </Link>
              <Link
                href="/lessons"
                className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('translate-x-full');
                }}
              >
                {nav.lessons}
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium text-charcoal px-4 py-3 rounded-lg transition-all"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('translate-x-full');
                }}
              >
                {nav.blog}
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
          id="mobile-overlay"
          className="md:hidden fixed inset-0 bg-charcoal/50 opacity-0 pointer-events-none transition-opacity duration-300"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('translate-x-full');
          }}
        />
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-3 xs:px-4 sm:px-6 py-10 sm:py-16 md:py-24" style={{ background: 'linear-gradient(to bottom, #F5F1E8, rgba(253,251,247,0.3))' }}>
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-8 w-full">
          {/* Logo */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              src="/logoicon.png" 
              alt="StillWell Logo" 
              className="w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight px-1 sm:px-2" style={{ color: '#2C2C2C' }}>
            {t.title}
            <br />
            <span className="inline-block" style={{ color: '#8B9D83', hyphens: 'auto', wordBreak: 'keep-all' }}>{t.titleAccent}</span>
          </h1>

          <div className="h-14 sm:h-20 flex items-center justify-center w-full px-2">
            {mounted && <MainTypingAnimation phrases={t.typingPhrases} />}
          </div>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2" style={{ color: 'rgba(44,44,44,0.7)' }}>
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-8 w-full max-w-sm sm:max-w-2xl mx-auto px-2">
            <Link href="/start-journey" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 rounded-full text-sm xs:text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95" style={{ backgroundColor: '#C97D60', color: '#FDFBF7' }}>
                {t.startJourney}
              </button>
            </Link>
            <Link href="/view-lessons" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 border-2 rounded-full text-sm xs:text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95" style={{ backgroundColor: '#FDFBF7', borderColor: '#2C2C2C', color: '#2C2C2C' }}>
                {t.viewLessons}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-3 xs:px-4 sm:px-6 py-10 sm:py-16 md:py-24" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-8 sm:mb-12 md:mb-16 break-words px-2" style={{ color: '#2C2C2C' }}>
            {t.whyTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="text-center space-y-3 sm:space-y-4 px-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139,157,131,0.2)' }}>
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="#8B9D83"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold break-words" style={{ color: '#2C2C2C' }}>
                {t.thoughtfulTitle}
              </h3>
              <p className="text-xs sm:text-sm md:text-base break-words" style={{ color: 'rgba(44,44,44,0.7)' }}>
                {t.thoughtfulDesc}
              </p>
            </div>

            <div className="text-center space-y-3 sm:space-y-4 px-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,125,96,0.2)' }}>
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="#C97D60"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold break-words" style={{ color: '#2C2C2C' }}>
                {t.calmTitle}
              </h3>
              <p className="text-xs sm:text-sm md:text-base break-words" style={{ color: 'rgba(44,44,44,0.7)' }}>
                {t.calmDesc}
              </p>
            </div>

            <div className="text-center space-y-3 sm:space-y-4 px-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139,157,131,0.2)' }}>
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="#8B9D83"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold break-words" style={{ color: '#2C2C2C' }}>
                {t.personalTitle}
              </h3>
              <p className="text-xs sm:text-sm md:text-base break-words" style={{ color: 'rgba(44,44,44,0.7)' }}>
                {t.personalDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-cream to-warmWhite border-t border-charcoal/10">
        <div className="max-w-2xl mx-auto">
          {/* Decorative top line */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-sage via-terracotta to-sage rounded-full"></div>
          </div>

          {/* FAQ Card */}
          <Link href="/faq" className="group block">
            <div className="bg-warmWhite rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-charcoal/10 hover:border-sage/40 transform hover:-translate-y-2 active:scale-98">
              <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6">
                {/* Icon */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl sm:text-6xl md:text-7xl">❓</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal group-hover:text-sage transition-colors break-words leading-tight">
                  {language === 'en' ? 'Frequently Asked Questions' : 'Часто Задаваемые Вопросы'}
                </h3>
                
                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-charcoal/75 break-words leading-relaxed max-w-xl">
                  {language === 'en' 
                    ? 'Find answers to common questions about our English lessons, teaching methods, and scheduling' 
                    : 'Найдите ответы на распространённые вопросы о наших уроках английского, методах обучения и расписании'}
                </p>
                
                {/* CTA Button */}
                <div className="pt-4 sm:pt-6">
                  <div className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-sage to-sage/90 text-warmWhite rounded-full text-base sm:text-lg font-semibold group-hover:from-sage/90 group-hover:to-sage transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                    <span>{language === 'en' ? 'View All Questions' : 'Посмотреть Все Вопросы'}</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="pt-6 sm:pt-8 border-t border-charcoal/10 w-full">
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-bold text-sage">12+</div>
                      <div className="text-xs sm:text-sm text-charcoal/60 break-words">
                        {language === 'en' ? 'Questions' : 'Вопросов'}
                      </div>
                    </div>
                    <div className="w-px bg-charcoal/10"></div>
                    <div className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-bold text-terracotta">100%</div>
                      <div className="text-xs sm:text-sm text-charcoal/60 break-words">
                        {language === 'en' ? 'Answered' : 'Отвечено'}
                      </div>
                    </div>
                    <div className="w-px bg-charcoal/10"></div>
                    <div className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-bold text-sage">24/7</div>
                      <div className="text-xs sm:text-sm text-charcoal/60 break-words">
                        {language === 'en' ? 'Available' : 'Доступно'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Decorative bottom line */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <div className="w-16 sm:w-20 h-0.5 bg-sage/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12" style={{ backgroundColor: '#2C2C2C', color: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="text-xl sm:text-2xl font-serif font-bold">StillWell</div>
          <p className="text-sm sm:text-base" style={{ color: 'rgba(253,251,247,0.7)' }}>
            {t.footerTagline}
          </p>
          <p className="text-xs sm:text-sm" style={{ color: 'rgba(253,251,247,0.5)' }}>
            {t.footerTeacher}
          </p>
          <div className="pt-3 sm:pt-4 pb-3 sm:pb-4 mt-3 sm:mt-4" style={{ borderTop: '1px solid rgba(253,251,247,0.1)' }}>
            <p className="text-xs mb-2" style={{ color: 'rgba(253,251,247,0.4)' }}>{t.addressLabel}</p>
            <p className="text-xs sm:text-sm px-2" style={{ color: 'rgba(253,251,247,0.6)' }}>
              {t.footerAddress}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 pt-2 text-xs px-2">
            <Link href="/privacy" className="transition-colors break-words text-center" style={{ color: 'rgba(253,251,247,0.5)' }}>
              {t.privacyPolicy}
            </Link>
            <span className="hidden sm:inline" style={{ color: 'rgba(253,251,247,0.3)' }}>•</span>
            <Link href="/terms" className="transition-colors break-words text-center" style={{ color: 'rgba(253,251,247,0.5)' }}>
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
