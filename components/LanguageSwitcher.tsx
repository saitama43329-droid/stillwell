"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 sm:gap-2 bg-warmWhite rounded-full px-2 sm:px-4 py-1.5 sm:py-2 shadow-md">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-sage text-warmWhite'
            : 'text-charcoal/60 hover:text-charcoal'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all ${
          language === 'ru'
            ? 'bg-sage text-warmWhite'
            : 'text-charcoal/60 hover:text-charcoal'
        }`}
      >
        RU
      </button>
    </div>
  );
}
