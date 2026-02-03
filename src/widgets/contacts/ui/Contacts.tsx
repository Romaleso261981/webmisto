"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { StructuredData } from "@/app/components/StructuredData";

export default function Contacts() {
  const { t, language } = useI18n();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmisto.com.ua";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    name: "WebMisto",
    description: t.hero.description,
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    image: `${baseUrl}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Львів",
      addressRegion: "Львівська область",
      addressCountry: "UA",
    },
    telephone: "+38 (068) 947 87 23",
    email: "webmisto@gmail.com",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Ukraine",
    },
    sameAs: [],
  };

  return (
    <div
      id="contacts"
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-800 md:p-6"
    >
      <StructuredData data={localBusinessSchema} />
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
