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
    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-sage h-full flex items-center justify-center text-center max-w-full overflow-hidden">
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
      <header className="px-6 py-5 md:px-12 lg:px-16 bg-warmWhite/95 backdrop-blur-sm sticky top-0 z-50 border-b border-charcoal/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
            StillWell
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
            <Link href="/about" className="hover:text-sage transition-all duration-200">
              {nav.about}
            </Link>
            <Link href="/lessons" className="hover:text-sage transition-all duration-200">
              {nav.lessons}
            </Link>
            <Link href="/start-journey" className="hover:text-sage transition-all duration-200">
              {nav.contact}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                  menu.classList.toggle('translate-x-full');
                }
              }}
              className="p-2 text-charcoal hover:text-sage transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="p-2 text-charcoal hover:text-sage transition-colors"
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
                className="text-lg font-medium text-charcoal hover:text-sage hover:bg-sage/10 px-4 py-3 rounded-lg transition-all"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('translate-x-full');
                }}
              >
                {nav.about}
              </Link>
              <Link
                href="/lessons"
                className="text-lg font-medium text-charcoal hover:text-sage hover:bg-sage/10 px-4 py-3 rounded-lg transition-all"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('translate-x-full');
                }}
              >
                {nav.lessons}
              </Link>
              <Link
                href="/start-journey"
                className="text-lg font-medium text-charcoal hover:text-sage hover:bg-sage/10 px-4 py-3 rounded-lg transition-all"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('translate-x-full');
                }}
              >
                {nav.contact}
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
      <section className="flex-1 flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-cream to-warmWhite/30">
        <div className="max-w-4xl mx-auto text-center space-y-8 w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-charcoal leading-tight">
            {t.title}
            <br />
            <span className="text-sage">{t.titleAccent}</span>
          </h1>

          <div className="h-20 flex items-center justify-center w-full">
            {mounted && <MainTypingAnimation phrases={t.typingPhrases} />}
          </div>

          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 w-full max-w-md sm:max-w-2xl mx-auto">
            <Link href="/start-journey" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-5 bg-terracotta text-warmWhite rounded-full text-lg font-semibold hover:bg-terracotta/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95">
                {t.startJourney}
              </button>
            </Link>
            <Link href="/view-lessons" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-5 bg-warmWhite border-2 border-charcoal text-charcoal rounded-full text-lg font-semibold hover:bg-charcoal hover:text-warmWhite transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                {t.viewLessons}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 md:py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-charcoal">
            {t.whyTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-sage/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-sage"
                  fill="none"
                  stroke="currentColor"
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
              <h3 className="text-xl font-serif font-bold text-charcoal">
                {t.thoughtfulTitle}
              </h3>
              <p className="text-charcoal/70">
                {t.thoughtfulDesc}
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-terracotta/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-terracotta"
                  fill="none"
                  stroke="currentColor"
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
              <h3 className="text-xl font-serif font-bold text-charcoal">
                {t.calmTitle}
              </h3>
              <p className="text-charcoal/70">
                {t.calmDesc}
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-sage/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-sage"
                  fill="none"
                  stroke="currentColor"
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
              <h3 className="text-xl font-serif font-bold text-charcoal">
                {t.personalTitle}
              </h3>
              <p className="text-charcoal/70">
                {t.personalDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="text-2xl font-serif font-bold">StillWell</div>
          <p className="text-base text-warmWhite/70">
            {t.footerTagline}
          </p>
          <p className="text-sm text-warmWhite/50">
            {t.footerTeacher}
          </p>
          <div className="pt-4 pb-4 border-t border-warmWhite/10 mt-4">
            <p className="text-xs text-warmWhite/40 mb-2">{t.addressLabel}</p>
            <p className="text-sm text-warmWhite/60">
              {t.footerAddress}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs">
            <Link href="/privacy" className="hover:text-sage transition-colors text-warmWhite/50">
              {t.privacyPolicy}
            </Link>
            <span className="text-warmWhite/30">•</span>
            <Link href="/terms" className="hover:text-sage transition-colors text-warmWhite/50">
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
