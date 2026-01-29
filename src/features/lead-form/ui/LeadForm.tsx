"use client";

import { useLeadForm } from "../model/useLeadForm";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

interface LeadFormProps {
  hook: ReturnType<typeof useLeadForm>;
}

export default function LeadForm({ hook }: LeadFormProps) {
  const { t } = useI18n();
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
            {t.form.fields.niche.label}
          </label>
          <input
            type="text"
            name="niche"
            value={formData.niche}
            onChange={handleInputChange}
            placeholder={t.form.fields.niche.placeholder}
            className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ${
              errors.niche
                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                : "border-slate-300 ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
            }`}
          />
          {errors.niche && (
            <p className="mt-1 text-xs text-red-600">{errors.niche}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            {t.form.fields.budget.label}
          </label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            placeholder={t.form.fields.budget.placeholder}
            className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ${
              errors.budget
                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                : "border-slate-300 ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
            }`}
          />
          {errors.budget && (
            <p className="mt-1 text-xs text-red-600">{errors.budget}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
        >
          {isSubmitting ? t.form.submitting : t.form.submit}
        </button>

        <p className="text-[11px] text-slate-500">
          {t.form.privacy}
        </p>
      </form>
    </div>
  );
}
