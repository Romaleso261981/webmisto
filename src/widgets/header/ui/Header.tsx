"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import LanguageSwitcherDropdown from "@/shared/ui/LanguageSwitcher/LanguageSwitcherDropdown";

const categorySlugs = {
  "e-commerce": "e-commerce",
  corporate: "corporate",
  landing: "landing",
  platform: "platform",
} as const;

export default function Header() {
  const { t, language } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      slug: categorySlugs["e-commerce"],
      title: t.categories["e-commerce"].title,
      icon: "🛒",
    },
    {
      slug: categorySlugs.corporate,
      title: t.categories.corporate.title,
      icon: "🏢",
    },
    {
      slug: categorySlugs.landing,
      title: t.categories.landing.title,
      icon: "📄",
    },
    {
      slug: categorySlugs.platform,
      title: t.categories.platform.title,
      icon: "🎓",
    },
  ];

  // Закриваємо dropdown при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href={`/${language}`}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
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
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="flex items-center gap-1 transition-colors hover:text-sky-600"
            >
              {t.header.nav.services}
              <svg
                className={`h-4 w-4 transition-transform ${
                  isServicesDropdownOpen ? "rotate-180" : ""
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

            {isServicesDropdownOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg border border-slate-200 bg-white shadow-lg">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/${language}/${category.slug}`}
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-slate-50 hover:text-sky-600"
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
            <div className="space-y-1">
              <button
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
              >
                <span>{t.header.nav.services}</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isServicesDropdownOpen ? "rotate-180" : ""
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
              {isServicesDropdownOpen && (
                <div className="ml-4 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/${language}/${category.slug}`}
                      onClick={() => {
                        setIsServicesDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-sky-600"
                    >
                      <span>{category.icon}</span>
                      <span>{category.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
