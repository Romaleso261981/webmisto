import { I18nProvider } from "@/shared/lib/i18n/I18nProvider";
import { Language } from "@/shared/lib/i18n/translations";

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
