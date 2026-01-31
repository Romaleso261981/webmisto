"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Language, Translations, translations } from "./translations";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ 
  children, 
  initialLanguage = "uk" 
}: { 
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    // Синхронізуємо мову з URL
    const langFromPath = pathname.split("/")[1];
    if (["uk", "ru", "en"].includes(langFromPath)) {
      setLanguageState(langFromPath as Language);
      localStorage.setItem("language", langFromPath);
    } else {
      setLanguageState(initialLanguage);
    }
  }, [pathname, initialLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    
    // Оновлюємо URL з новою мовою
    const currentPath = pathname.replace(/^\/[^/]+/, "");
    router.push(`/${lang}${currentPath}`);
  };

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
