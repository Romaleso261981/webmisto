"use client";

import Link from "next/link";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export default function Advantages() {
  const { t, language } = useI18n();

  return (
    <section
      id="services"
      className="border-y border-slate-200 bg-white py-14 md:py-16"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
        <div>
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            {t.advantages.title}
          </h2>
          <p className="mb-6 text-sm text-slate-600 md:text-base">
            {t.advantages.description}
          </p>
          <ul className="space-y-4 text-sm text-slate-800">
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                01
              </span>
              <div>
                <p className="font-medium">{t.advantages.items.architecture.title}</p>
                <p className="text-xs text-slate-500 md:text-sm">
                  {t.advantages.items.architecture.description}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                02
              </span>
              <div>
                <p className="font-medium">{t.advantages.items.conversion.title}</p>
                <p className="text-xs text-slate-500 md:text-sm">
                  {t.advantages.items.conversion.description}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                03
              </span>
              <div>
                <p className="font-medium">{t.advantages.items.stack.title}</p>
                <p className="text-xs text-slate-500 md:text-sm">
                  {t.advantages.items.stack.description}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                04
              </span>
              <div>
                <p className="font-medium">{t.advantages.items.pricing.title}</p>
                <p className="text-xs text-slate-500 md:text-sm">
                  {t.advantages.items.pricing.description}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="grid gap-4 text-sm md:grid-cols-2">
          <Link
            href={`/${language}/corporate`}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-sky-300 hover:shadow-md"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {t.advantages.solutions.corporate.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-sky-600">
              {t.advantages.solutions.corporate.title}
            </p>
            <p className="mt-2 text-xs text-slate-600">
              {t.advantages.solutions.corporate.description}
            </p>
          </Link>
          <Link
            href={`/${language}/e-commerce`}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-sky-300 hover:shadow-md"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {t.advantages.solutions.shop.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-sky-600">
              {t.advantages.solutions.shop.title}
            </p>
            <p className="mt-2 text-xs text-slate-600">
              {t.advantages.solutions.shop.description}
            </p>
          </Link>
          <Link
            href={`/${language}/platform`}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-sky-300 hover:shadow-md"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {t.advantages.solutions.platform.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-sky-600">
              {t.advantages.solutions.platform.title}
            </p>
            <p className="mt-2 text-xs text-slate-600">
              {t.advantages.solutions.platform.description}
            </p>
          </Link>
          <Link
            href={`/${language}/landing`}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-sky-300 hover:shadow-md"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {t.advantages.solutions.additional.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-sky-600">
              {t.advantages.solutions.additional.title}
            </p>
            <p className="mt-2 text-xs text-slate-600">
              {t.advantages.solutions.additional.description}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
