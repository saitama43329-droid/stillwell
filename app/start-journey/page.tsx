"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { extendedTranslations } from "@/lib/translations";

export default function StartJourney() {
  const { language } = useLanguage();
  const t = extendedTranslations[language].startJourney;
  const nav = extendedTranslations[language].nav;
  const home = extendedTranslations[language].home;
  
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);
  
  const [startText, setStartText] = useState("");
  const [startPhraseIndex, setStartPhraseIndex] = useState(0);
  const [startIsDeleting, setStartIsDeleting] = useState(false);
  const [startDelta, setStartDelta] = useState(150);
  
  const teacherPhone = "79145251745";
  const whatsappMessage = language === 'ru' 
    ? "Здравствуйте! Меня интересуют персональные уроки английского с StillWell. Можем обсудить детали?"
    : "Hello! I'm interested in personal English lessons with StillWell. Can we discuss the details?";

  const phrases = t.typingPhrases;
  const startPhrases = t.ctaTypingPhrases;

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
  }, [text, isDeleting, phraseIndex, delta]);

  useEffect(() => {
    const currentPhrase = startPhrases[startPhraseIndex];

    const handleTyping = () => {
      if (!startIsDeleting) {
        if (startText.length < currentPhrase.length) {
          setStartText(currentPhrase.substring(0, startText.length + 1));
          setStartDelta(150 - Math.random() * 50);
        } else {
          setStartDelta(2000);
          setStartIsDeleting(true);
        }
      } else {
        if (startText.length > 0) {
          setStartText(currentPhrase.substring(0, startText.length - 1));
          setStartDelta(75);
        } else {
          setStartIsDeleting(false);
          setStartPhraseIndex((prev) => (prev + 1) % startPhrases.length);
          setStartDelta(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, startDelta);
    return () => clearTimeout(timer);
  }, [startText, startIsDeleting, startPhraseIndex, startDelta]);

  const steps = [
    {
      number: "01",
      title: t.step1Title,
      description: t.step1Desc,
      icon: "📚",
    },
    {
      number: "02",
      title: t.step2Title,
      description: t.step2Desc,
      icon: "👨‍🏫",
    },
    {
      number: "03",
      title: t.step3Title,
      description: t.step3Desc,
      icon: "🌟",
    },
  ];

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

      {/* Hero Section */}
      <section className="px-3 xs:px-4 sm:px-6 py-10 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-charcoal leading-tight px-1 break-words">
            {t.title}
            <br />
            <span className="text-sage">{t.titleAccent}</span>
          </h1>
          
          {/* Typing Animation */}
          <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center px-2">
            <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-terracotta break-words">
              <span>{text}</span>
              <span className="animate-pulse ml-1">|</span>
            </div>
          </div>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto px-2 break-words">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-3 xs:px-4 sm:px-6 py-6 sm:py-10 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`bg-warmWhite p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl transition-all duration-300 ${
                  hoveredStep === index
                    ? "transform md:-translate-y-2 shadow-xl sm:shadow-2xl"
                    : "shadow-md sm:shadow-lg"
                }`}
              >
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 transform hover:scale-110">
                  {step.icon}
                </div>
                <div className="text-sage/50 text-[10px] xs:text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                  {step.number}
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif font-bold text-charcoal mb-1.5 sm:mb-2 md:mb-3 break-words">
                  {step.title}
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-charcoal/70 break-words leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto bg-warmWhite rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-center space-y-6 sm:space-y-8">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-sage/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">👩‍🏫</span>
            </div>
            <p className="text-lg font-serif text-sage mb-1">{t.yourTeacher}</p>
            <h3 className="text-2xl font-serif font-bold text-charcoal">
              {t.teacherName || 'Ksenia Volchemateva'}
            </h3>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
            {t.readyTitle}
          </h2>
          
          {/* Typing Animation */}
          <div className="h-12 flex items-center justify-center">
            <div className="text-xl md:text-2xl font-serif text-sage">
              <span>{startText}</span>
              <span className="animate-pulse ml-1">|</span>
            </div>
          </div>

          <p className="text-lg text-charcoal/70">
            {t.readySubtitle}
          </p>

          {/* WhatsApp Button */}
          <div className="pt-4">
            <a
              href={`https://api.whatsapp.com/send?phone=${teacherPhone}&text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-[#25D366] text-white rounded-full text-xl font-medium hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>{t.whatsappButton}</span>
            </a>
          </div>

          <div className="pt-6 border-t border-charcoal/10 space-y-2">
            <p className="text-sm text-charcoal/60">
              📱 {t.directLine} +{teacherPhone}
            </p>
            <p className="text-xs text-charcoal/50">
              📍 {home.footerAddress}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 bg-warmWhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-center mb-5 sm:mb-8 md:mb-12 lg:mb-16 text-charcoal break-words px-2">
            {t.experienceTitle}
          </h2>
          <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="bg-cream p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-2 sm:mb-3 md:mb-4">🎯</div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif font-bold text-charcoal mb-1.5 sm:mb-2 md:mb-3 break-words">
                {t.benefit1Title}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-charcoal/70 break-words leading-relaxed">
                {t.benefit1Desc}
              </p>
            </div>

            <div className="bg-cream p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-2 sm:mb-3 md:mb-4">⏰</div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif font-bold text-charcoal mb-1.5 sm:mb-2 md:mb-3 break-words">
                {t.benefit2Title}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-charcoal/70 break-words leading-relaxed">
                {t.benefit2Desc}
              </p>
            </div>

            <div className="bg-cream p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-2 sm:mb-3 md:mb-4">💬</div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif font-bold text-charcoal mb-1.5 sm:mb-2 md:mb-3 break-words">
                {t.benefit3Title}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-charcoal/70 break-words leading-relaxed">
                {t.benefit3Desc}
              </p>
            </div>

            <div className="bg-cream p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-2 sm:mb-3 md:mb-4">📈</div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif font-bold text-charcoal mb-1.5 sm:mb-2 md:mb-3 break-words">
                {t.benefit4Title}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-charcoal/70 break-words leading-relaxed">
                {t.benefit4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12 bg-charcoal text-warmWhite">
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="text-xl sm:text-2xl font-serif font-bold">StillWell</div>
          <p className="text-sm sm:text-base text-warmWhite/70 break-words px-2">
            {home.footerTagline}
          </p>
          <p className="text-xs sm:text-sm text-warmWhite/50 break-words px-2">
            {home.footerTeacher}
          </p>
          <div className="pt-2 sm:pt-3 pb-3 sm:pb-4 border-t border-warmWhite/10 mt-3 sm:mt-4">
            <p className="text-xs text-warmWhite/40 mb-1">{home.addressLabel}</p>
            <p className="text-xs sm:text-sm text-warmWhite/60 break-words px-2">
              {home.footerAddress}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
