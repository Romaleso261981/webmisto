"use client";

import { useState } from "react";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import LanguageSwitcherDropdown from "@/shared/ui/LanguageSwitcher/LanguageSwitcherDropdown";

export default function Header() {
  const { t } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 text-lg font-bold text-white">
            WM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              WebMisto
            </span>
            <span className="text-xs text-slate-500">
              Веб студія у Львові
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <a href="#services" className="hover:text-sky-600">
            {t.header.nav.services}
          </a>
          <a href="#pricing" className="hover:text-sky-600">
            {t.header.nav.pricing}
          </a>
          <a href="#faq" className="hover:text-sky-600">
            {t.header.nav.faq}
          </a>
          <a href="#contacts" className="hover:text-sky-600">
            {t.header.nav.contacts}
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="w-32">
            <LanguageSwitcherDropdown />
          </div>
          <a
            href="#lead-form"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
          >
            {t.header.cta}
          </a>
        </div>

        {/* Мобільне меню */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Меню"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Мобільне меню dropdown */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            <LanguageSwitcherDropdown />
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {t.header.nav.services}
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {t.header.nav.pricing}
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {t.header.nav.faq}
            </a>
            <a
              href="#contacts"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {t.header.nav.contacts}
            </a>
            <a
              href="#lead-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 block rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
            >
              {t.header.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
