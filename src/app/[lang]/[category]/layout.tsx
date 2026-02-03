import { Language, translations } from "@/shared/lib/i18n/translations";
import type { Metadata } from "next";

const validCategories = ["e-commerce", "corporate", "landing", "platform", "contextual", "targeting", "seo", "smm"] as const;
type CategorySlug = (typeof validCategories)[number];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}): Promise<Metadata> {
  const { lang, category } = await params;
  const validLang: Language = ["uk", "ru", "en"].includes(lang) ? (lang as Language) : "uk";
  
  if (!validCategories.includes(category as CategorySlug)) {
    return {};
  }

  const t = translations[validLang];
  const categoryKey = category === "e-commerce" ? "e-commerce" : category;
  const categoryData = t.categories[categoryKey as keyof typeof t.categories];

  if (!categoryData || typeof categoryData !== "object" || !("title" in categoryData)) {
    return {};
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmisto.com.ua";
  const url = `${baseUrl}/${validLang}/${category}`;
  const title = `${categoryData.title} | WebMisto`;
  const description = "description" in categoryData ? categoryData.description : "";

  return {
    title,
    description,
    keywords: [
      categoryData.title,
      "веб-розробка",
      "веб-студія Львів",
      validLang === "uk" ? "розробка сайтів" : validLang === "ru" ? "разработка сайтов" : "website development",
    ],
    openGraph: {
      title,
      description,
      url,
      locale: validLang === "uk" ? "uk_UA" : validLang === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: {
        "uk-UA": `${baseUrl}/uk/${category}`,
        "ru-RU": `${baseUrl}/ru/${category}`,
        "en-US": `${baseUrl}/en/${category}`,
      },
    },
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
