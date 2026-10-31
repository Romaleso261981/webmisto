"use client";

import { useState } from "react";
import Link from "next/link";
import { useLeadForm } from "../model/useLeadForm";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

const PHONE_DISPLAY = "+38 (068) 947 87 23";
const PHONE_TEL = "+380689478723";

interface LeadFormProps {
  hook: ReturnType<typeof useLeadForm>;
}

export default function LeadForm({ hook }: LeadFormProps) {
  const { t, language } = useI18n();
  const [showPhone, setShowPhone] = useState(false);
  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  } = hook;

  return (
    <div>
      <h2 className="text-2xl font-semibold md:text-3xl">
        {t.form.title}
      </h2>
      <p className="mt-3 text-sm text-slate-600 md:text-base">
        {t.form.description}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            {t.form.fields.name.label}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t.form.fields.name.placeholder}
            className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ${
              errors.name
                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                : "border-slate-300 ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            {t.form.fields.phone.label}
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={t.form.fields.phone.placeholder}
            className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ${
              errors.phone
                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                : "border-slate-300 ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            {t.form.fields.details.label}
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            placeholder={t.form.fields.details.placeholder}
            rows={4}
            className="w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
          />
        </div>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isSubmitting ? t.form.submitting : t.form.submit}
          </button>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => setShowPhone(true)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-500/60 hover:text-sky-700 sm:w-auto"
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
            {showPhone ? PHONE_DISPLAY : t.form.call}
          </a>
        </div>

        <p className="text-[11px] text-slate-500">
          {t.form.privacy}{" "}
          <Link href={`/${language}/privacy`} className="underline hover:text-sky-600">
            {t.form.privacyLink}
          </Link>
        </p>
      </form>
    </div>
  );
}
