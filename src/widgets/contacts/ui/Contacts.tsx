"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export default function Contacts() {
  const { t } = useI18n();

  return (
    <div
      id="contacts"
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-800 md:p-6"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          {t.contacts.title}
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-900">
          {t.contacts.company}
        </p>
        <p className="mt-1 text-xs text-slate-600">
          {t.contacts.location}
        </p>
      </div>
      <div className="grid gap-3 text-xs text-slate-600">
        <div>
          <p className="text-slate-500">{t.contacts.phone}</p>
          <p className="font-medium text-slate-900">+38 (068) 947 87 23</p>
        </div>
        <div>
          <p className="text-slate-500">{t.contacts.email}</p>
          <p className="font-medium text-slate-900">
            webmisto@gmail.com
          </p>
        </div>
        <div>
          <p className="text-slate-500">{t.contacts.schedule}</p>
          <p className="font-medium text-slate-900">
            Пн–Пт: 9:00–19:00
          </p>
        </div>
      </div>
      <div className="grid gap-2 text-xs text-slate-600">
        <p className="text-slate-500">{t.contacts.services.title}</p>
        {t.contacts.services.items.map((item, index) => (
          <p key={index}>• {item}</p>
        ))}
      </div>
    </div>
  );
}
