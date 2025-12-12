"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="flex items-center gap-0.5 xs:gap-1 sm:gap-2 rounded-full px-1 xs:px-2 sm:px-4 py-1 xs:py-1.5 sm:py-2 shadow-md"
      style={{ backgroundColor: '#FDFBF7' }}
    >
      <button
        onClick={() => setLanguage('en')}
        className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium transition-all min-w-[28px] min-h-[28px] flex items-center justify-center"
        style={language === 'en' 
          ? { backgroundColor: '#8B9D83', color: '#FDFBF7' }
          : { color: 'rgba(44,44,44,0.6)' }
        }
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium transition-all min-w-[28px] min-h-[28px] flex items-center justify-center"
        style={language === 'ru' 
          ? { backgroundColor: '#8B9D83', color: '#FDFBF7' }
          : { color: 'rgba(44,44,44,0.6)' }
        }
      >
        RU
      </button>
    </div>
  );
}
