"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export default function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="bg-slate-50 py-14 md:py-20">
      <div className="mb-8 text-center md:mb-10">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t.pricing.title}
        </h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          {t.pricing.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            {t.pricing.plans.start.name}
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            {t.pricing.plans.start.price}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {t.pricing.plans.start.description}
          </p>
          <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700">
            {t.pricing.plans.start.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
          <a
            href="#lead-form"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {t.pricing.plans.start.cta}
          </a>
        </div>

        <div className="relative flex flex-col rounded-3xl border border-sky-200 bg-white p-6 shadow-xl shadow-sky-100">
          <div className="absolute -top-3 right-6 rounded-full bg-sky-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            {t.pricing.plans.business.badge}
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-700">
            {t.pricing.plans.business.name}
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            {t.pricing.plans.business.price}
          </p>
          <p className="mt-1 text-xs text-slate-600">
            {t.pricing.plans.business.description}
          </p>
          <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-800">
            {t.pricing.plans.business.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
          <a
            href="#lead-form"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-300 transition hover:bg-sky-600"
          >
            {t.pricing.plans.business.cta}
          </a>
        </div>

        <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            {t.pricing.plans.platform.name}
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            {t.pricing.plans.platform.price}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {t.pricing.plans.platform.description}
          </p>
          <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700">
            {t.pricing.plans.platform.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
          <a
            href="#lead-form"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {t.pricing.plans.platform.cta}
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-4 text-xs text-slate-600 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:text-sm">
        <p>{t.pricing.note}</p>
        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700">
          <p className="font-medium text-slate-900">
            {t.pricing.priceList.title}
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-slate-600 md:text-xs">
            <span>{t.pricing.priceList.landing}</span>
            <span className="text-right text-slate-700">від $320</span>
            <span>{t.pricing.priceList.corporate}</span>
            <span className="text-right text-slate-700">від $450</span>
            <span>{t.pricing.priceList.shop}</span>
            <span className="text-right text-slate-700">від $720</span>
            <span>{t.pricing.priceList.platform}</span>
            <span className="text-right text-slate-700">
              {t.pricing.priceList.individual}
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-500">
            {t.pricing.priceNote}
          </p>
        </div>
      </div>
    </section>
  );
}
