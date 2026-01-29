"use client";

import { useLeadForm } from "../model/useLeadForm";

interface LeadFormProps {
  hook: ReturnType<typeof useLeadForm>;
}

export default function LeadForm({ hook }: LeadFormProps) {
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
        Отримайте безкоштовну консультацію по вашому проєкту
      </h2>
      <p className="mt-3 text-sm text-slate-600 md:text-base">
        Залиште контакти — ми проаналізуємо вашу ідею або поточний сайт,
        підкажемо оптимальний формат та орієнтовний бюджет розробки.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Ім&apos;я
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Як до вас звертатись?"
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
            Телефон або Telegram
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+38 (0__) ___ __ __"
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
            Ніша / послуга
          </label>
          <input
            type="text"
            name="niche"
            value={formData.niche}
            onChange={handleInputChange}
            placeholder="Наприклад: салон краси, онлайн-курс, клініка тощо"
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
            Орієнтовний бюджет на розробку
          </label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            placeholder="Наприклад: $500–$2000"
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
          {isSubmitting ? "Відправляється..." : "Відправити заявку"}
        </button>

        <p className="text-[11px] text-slate-500">
          Натискаючи кнопку, ви погоджуєтесь на обробку персональних
          даних. Ми не передаємо ваші контакти третім особам.
        </p>
      </form>
    </div>
  );
}
