"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { extendedTranslations } from "@/lib/translations";

export default function ViewLessons() {
  const { language } = useLanguage();
  const t = extendedTranslations[language].viewLessons;
  const nav = extendedTranslations[language].nav;
  const home = extendedTranslations[language].home;
  
  const [activeTab, setActiveTab] = useState("overview");
  const [ctaText, setCtaText] = useState("");
  const [ctaPhraseIndex, setCtaPhraseIndex] = useState(0);
  const [ctaIsDeleting, setCtaIsDeleting] = useState(false);
  const [ctaDelta, setCtaDelta] = useState(150);
  
  const teacherPhone = "79145251745";
  const whatsappMessage = language === 'ru'
    ? "Здравствуйте, Ксения! Я хотел бы узнать больше о ваших уроках английского. Можем обсудить?"
    : "Hello Ksenia! I'd like to learn more about your English lessons. Can we discuss?";

  const ctaPhrases = t.ctaTypingPhrases;

  useEffect(() => {
    const currentPhrase = ctaPhrases[ctaPhraseIndex];

    const handleTyping = () => {
      if (!ctaIsDeleting) {
        if (ctaText.length < currentPhrase.length) {
          setCtaText(currentPhrase.substring(0, ctaText.length + 1));
          setCtaDelta(150 - Math.random() * 50);
        } else {
          setCtaDelta(2000);
          setCtaIsDeleting(true);
        }
      } else {
        if (ctaText.length > 0) {
          setCtaText(currentPhrase.substring(0, ctaText.length - 1));
          setCtaDelta(75);
        } else {
          setCtaIsDeleting(false);
          setCtaPhraseIndex((prev) => (prev + 1) % ctaPhrases.length);
          setCtaDelta(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, ctaDelta);
    return () => clearTimeout(timer);
  }, [ctaText, ctaIsDeleting, ctaPhraseIndex, ctaDelta, ctaPhrases]);

  const testimonials = [
    {
      name: t.testimonial1Name,
      text: t.testimonial1Text,
      rating: 5,
    },
    {
      name: t.testimonial2Name,
      text: t.testimonial2Text,
      rating: 5,
    },
    {
      name: t.testimonial3Name,
      text: t.testimonial3Text,
      rating: 5,
    },
  ];

  const lessonHighlights = [
    {
      icon: "🎨",
      title: t.highlight1Title,
      description: t.highlight1Desc,
    },
    {
      icon: "💬",
      title: t.highlight2Title,
      description: t.highlight2Desc,
    },
    {
      icon: "📱",
      title: t.highlight3Title,
      description: t.highlight3Desc,
    },
    {
      icon: "📚",
      title: t.highlight4Title,
      description: t.highlight4Desc,
    },
    {
      icon: "🎯",
      title: t.highlight5Title,
      description: t.highlight5Desc,
    },
    {
      icon: "🌟",
      title: t.highlight6Title,
      description: t.highlight6Desc,
    },
  ];

  const pricingOptions = [
    {
      title: t.option1Title,
      duration: t.option1Duration,
      description: t.option1Desc,
      features: [t.option1Feature1, t.option1Feature2, t.option1Feature3],
      highlight: t.option1Highlight,
    },
    {
      title: t.option2Title,
      duration: t.option2Duration,
      description: t.option2Desc,
      features: [t.option2Feature1, t.option2Feature2, t.option2Feature3],
      highlight: t.option2Highlight,
    },
    {
      title: t.option3Title,
      duration: t.option3Duration,
      description: t.option3Desc,
      features: [t.option3Feature1, t.option3Feature2, t.option3Feature3],
      highlight: t.option3Highlight,
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

      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-charcoal leading-tight px-2 break-words">
            {t.title}
            <br />
            <span className="text-sage inline-block" style={{ hyphens: 'auto', wordBreak: 'keep-all' }}>{t.titleAccent}</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto break-words px-2">
            {t.subtitle}
          </p>
          <div className="inline-block px-4 sm:px-6 py-2 bg-sage/20 rounded-full text-sage font-medium mt-4 text-sm sm:text-base break-words">
            {t.badge}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-3 xs:px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-6 sm:mb-8 md:mb-12 text-charcoal break-words px-2">
            {t.expectTitle}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {lessonHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-warmWhite p-4 xs:p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl xs:text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-base xs:text-lg sm:text-xl font-serif font-bold text-charcoal mb-2 sm:mb-3 break-words">
                  {item.title}
                </h3>
                <p className="text-sm xs:text-base text-charcoal/70 break-words">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Options */}
      <section className="px-3 xs:px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-warmWhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-3 sm:mb-4 text-charcoal break-words px-2">
            {t.optionsTitle}
          </h2>
          <p className="text-center text-sm xs:text-base sm:text-lg text-charcoal/70 mb-8 sm:mb-12 break-words px-2">
            {t.optionsSubtitle}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {pricingOptions.map((option, idx) => (
              <div
                key={idx}
                className={`bg-cream p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border-2 ${
                  idx === 1
                    ? "border-terracotta sm:transform sm:scale-105"
                    : "border-sage/20"
                }`}
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-block px-3 sm:px-4 py-1 bg-sage/20 rounded-full text-xs sm:text-sm text-sage font-medium mb-3 sm:mb-4 break-words">
                    {option.highlight}
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-serif font-bold text-charcoal mb-2 break-words">
                    {option.title}
                  </h3>
                  <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-sage mb-2 break-words">
                    {option.duration}
                  </p>
                  <p className="text-charcoal/70 text-xs sm:text-sm break-words">
                    {option.description}
                  </p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {option.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs xs:text-sm text-charcoal/70"
                    >
                      <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal/60 mt-6 sm:mt-8 text-xs sm:text-sm break-words px-2">
            {t.pricingNote}
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-3 xs:px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-3 sm:mb-4 text-charcoal break-words px-2">
            {t.storiesTitle}
          </h2>
          <p className="text-center text-sm xs:text-base text-charcoal/70 mb-8 sm:mb-12 break-words px-2">
            {t.storiesSubtitle}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-warmWhite p-4 xs:p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg flex flex-col"
              >
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-terracotta text-base xs:text-lg sm:text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm xs:text-base text-charcoal/80 mb-4 sm:mb-6 italic flex-grow break-words">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-charcoal/10 pt-3 sm:pt-4">
                  <p className="font-bold text-charcoal text-base sm:text-lg break-words">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-3 xs:px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-warmWhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-8 sm:mb-12 md:mb-16 text-charcoal break-words px-2">
            {t.howWorksTitle}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start bg-cream p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-sage/20 rounded-full flex items-center justify-center text-sage font-bold text-base sm:text-lg md:text-xl">
                1
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-xl font-serif font-bold text-charcoal mb-1 sm:mb-2 break-words">
                  {t.step1Title}
                </h3>
                <p className="text-sm xs:text-base text-charcoal/70 break-words">
                  {t.step1Desc}
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start bg-cream p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-sage/20 rounded-full flex items-center justify-center text-sage font-bold text-base sm:text-lg md:text-xl">
                2
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-xl font-serif font-bold text-charcoal mb-1 sm:mb-2 break-words">
                  {t.step2Title}
                </h3>
                <p className="text-sm xs:text-base text-charcoal/70 break-words">
                  {t.step2Desc}
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start bg-cream p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-sage/20 rounded-full flex items-center justify-center text-sage font-bold text-base sm:text-lg md:text-xl">
                3
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-xl font-serif font-bold text-charcoal mb-1 sm:mb-2 break-words">
                  {t.step3Title}
                </h3>
                <p className="text-sm xs:text-base text-charcoal/70 break-words">
                  {t.step3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 xs:px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-sage/10 to-terracotta/10 rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 md:p-12 shadow-2xl text-center space-y-4 sm:space-y-6 md:space-y-8 border-2 border-sage/20">
          <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 mx-auto bg-warmWhite rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl xs:text-3xl sm:text-4xl">👩‍🏫</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal break-words px-2">
            {t.ctaTitle}
          </h2>
          
          {/* Typing Animation */}
          <div className="h-10 sm:h-12 flex items-center justify-center px-2">
            <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif text-terracotta break-words">
              <span>{ctaText}</span>
              <span className="animate-pulse ml-1">|</span>
            </div>
          </div>

          <p className="text-sm xs:text-base sm:text-lg text-charcoal/70 break-words px-2">
            {t.ctaSubtitle}
          </p>

          <a
            href={`https://api.whatsapp.com/send?phone=${teacherPhone}&text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 xs:gap-3 sm:gap-4 px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-4 sm:py-5 md:py-6 bg-[#25D366] text-white rounded-full text-sm xs:text-base sm:text-lg md:text-xl font-medium hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto justify-center max-w-xs sm:max-w-md mx-auto"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="break-words">{t.whatsappButton}</span>
          </a>

          <p className="text-xs sm:text-sm text-charcoal/60 break-words">
            📱 +{teacherPhone}
          </p>
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
