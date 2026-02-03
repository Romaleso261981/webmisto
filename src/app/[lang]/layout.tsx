import { I18nProvider } from "@/shared/lib/i18n/I18nProvider";
import { Language, translations } from "@/shared/lib/i18n/translations";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const validLang: Language = ["uk", "ru", "en"].includes(lang) ? (lang as Language) : "uk";
  const t = translations[validLang];

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmisto.com.ua";
  const url = `${baseUrl}/${validLang}`;

  return {
    title: t.hero.title,
    description: t.hero.description,
    openGraph: {
      title: t.hero.title,
      description: t.hero.description,
      url,
      locale: validLang === "uk" ? "uk_UA" : validLang === "ru" ? "ru_RU" : "en_US",
      alternateLocale: ["uk_UA", "ru_RU", "en_US"],
    },
    alternates: {
      canonical: url,
      languages: {
        "uk-UA": `${baseUrl}/uk`,
        "ru-RU": `${baseUrl}/ru`,
        "en-US": `${baseUrl}/en`,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Валідація мови
  const validLang: Language = ["uk", "ru", "en"].includes(lang) ? (lang as Language) : "uk";

  return <I18nProvider initialLanguage={validLang}>{children}</I18nProvider>;
}
