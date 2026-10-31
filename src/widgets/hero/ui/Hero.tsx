"use client";

import { useState } from "react";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

const PHONE_DISPLAY = "+38 (068) 947 87 23";
const PHONE_TEL = "+380689478723";

export default function Hero() {
  const { t } = useI18n();
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section className="grid gap-10 pb-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center md:pb-24">
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-700">
          {t.hero.badge}
        </p>
        <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
          {t.hero.title}{" "}
          <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </h1>
        <p className="mb-6 max-w-xl text-sm text-slate-600 md:text-base">
          {t.hero.description}
        </p>

        <div className="mb-6 flex flex-col gap-3 text-xs text-slate-600 md:flex-row md:items-center md:text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
              30+
            </span>
            <span>{t.hero.stats.projects}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs text-sky-700">
              UX
            </span>
            <span>{t.hero.stats.ux}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
          >
            {t.hero.cta.order}
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-sky-500/60 hover:text-sky-700"
          >
            {t.hero.cta.viewPricing}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => setShowPhone(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-sky-500/60 hover:text-sky-700"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {showPhone ? PHONE_DISPLAY : t.hero.cta.call}
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          {t.hero.note}
        </p>
      </div>

      <div className="relative">
        <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-sky-200 via-cyan-100 to-transparent blur-3xl" />
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-sky-100 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {t.hero.analytics.title}
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {t.hero.analytics.subtitle}
              </p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              {t.hero.analytics.leads}
            </span>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-slate-500">{t.hero.analytics.investment}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                $1 200
              </p>
              <p className="mt-1 text-[11px] text-emerald-600">
                {t.hero.analytics.investmentNote}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-slate-500">{t.hero.analytics.projects}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                486
              </p>
              <p className="mt-1 text-[11px] text-emerald-600">
                {t.hero.analytics.projectsNote}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-slate-500">{t.hero.analytics.speed}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                4.3%
              </p>
              <p className="mt-1 text-[11px] text-sky-700">
                {t.hero.analytics.speedNote}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3">
            <p className="text-xs text-slate-600">
              {t.hero.analytics.testimonial}
            </p>
            <p className="mt-2 text-xs font-medium text-slate-500">
              {t.hero.analytics.testimonialAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
