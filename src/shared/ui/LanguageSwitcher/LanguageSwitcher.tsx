"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { Language } from "@/shared/lib/i18n/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "uk", label: "УКР", flag: "🇺🇦" },
  { code: "ru", label: "РУС", flag: "🇷🇺" },
  { code: "en", label: "ENG", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors
            ${
              language === lang.code
                ? "bg-sky-500 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }
          `}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="text-sm">{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
