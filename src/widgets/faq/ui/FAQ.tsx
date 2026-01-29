"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export default function FAQ() {
  const { t } = useI18n();

  return (
    <section
      id="faq"
      className="border-y border-slate-200 bg-white py-14 md:py-20"
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t.faq.title}
        </h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          {t.faq.description}
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-4 text-sm text-slate-800 md:text-base">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
          <p className="text-sm font-semibold text-slate-900 md:text-base">
            {t.faq.items.cost.question}
          </p>
          <p className="mt-2 text-xs text-slate-600 md:text-sm">
            {t.faq.items.cost.answer}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
          <p className="text-sm font-semibold text-slate-900 md:text-base">
            {t.faq.items.time.question}
          </p>
          <p className="mt-2 text-xs text-slate-600 md:text-sm">
            {t.faq.items.time.answer}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
          <p className="text-sm font-semibold text-slate-900 md:text-base">
            {t.faq.items.difference.question}
          </p>
          <p className="mt-2 text-xs text-slate-600 md:text-sm">
            {t.faq.items.difference.answer}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
          <p className="text-sm font-semibold text-slate-900 md:text-base">
            {t.faq.items.platform.question}
          </p>
          <p className="mt-2 text-xs text-slate-600 md:text-sm">
            {t.faq.items.platform.answer}
          </p>
        </div>
      </div>
    </section>
  );
}
