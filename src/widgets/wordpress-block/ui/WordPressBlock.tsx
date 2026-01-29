"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export default function WordPressBlock() {
  const { t } = useI18n();

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-8 text-center text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">
          {t.wordpress.title}
        </h2>

        <div className="mb-12 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
          {t.wordpress.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Переваги */}
          <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-lg shadow-emerald-50">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-slate-900 md:text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                +
              </span>
              {t.wordpress.advantages.title}
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 md:text-base">
              {t.wordpress.advantages.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-emerald-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Недоліки */}
          <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-lg shadow-red-50">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-slate-900 md:text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-700">
                —
              </span>
              {t.wordpress.disadvantages.title}
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 md:text-base">
              {t.wordpress.disadvantages.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-red-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
