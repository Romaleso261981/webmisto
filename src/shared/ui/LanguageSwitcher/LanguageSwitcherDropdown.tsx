"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { Language } from "@/shared/lib/i18n/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "uk", label: "УКР", flag: "🇺🇦" },
  { code: "ru", label: "РУС", flag: "🇷🇺" },
  { code: "en", label: "ENG", flag: "🇬🇧" },
];

export default function LanguageSwitcherDropdown() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm text-slate-700 transition-colors hover:text-sky-600"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="font-medium">{currentLanguage.label}</span>
        <svg
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border border-slate-200 bg-white shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`
                flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors first:rounded-t-lg last:rounded-b-lg
                ${
                  language === lang.code
                    ? "bg-sky-50 text-sky-600 font-medium"
                    : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                }
              `}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <svg
                  className="ml-auto h-4 w-4 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
