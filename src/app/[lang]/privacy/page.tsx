import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/widgets/header/ui";
import { Footer } from "@/widgets/footer/ui";
import { Language } from "@/shared/lib/i18n/translations";
import { privacyPolicy } from "@/shared/content/privacyPolicy";

const languages: Language[] = ["uk", "ru", "en"];

function resolveLanguage(lang: string): Language | null {
  return languages.includes(lang as Language) ? (lang as Language) : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = resolveLanguage(lang);
  if (!language) {
    return {};
  }

  const document = privacyPolicy[language];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site";
  const url = `${baseUrl}/${language}/privacy`;

  return {
    title: { absolute: document.metaTitle },
    description: document.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        "uk-UA": `${baseUrl}/uk/privacy`,
        "ru-RU": `${baseUrl}/ru/privacy`,
        "en-US": `${baseUrl}/en/privacy`,
      },
    },
    openGraph: {
      title: document.metaTitle,
      description: document.metaDescription,
      url,
      locale: language === "uk" ? "uk_UA" : language === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = resolveLanguage(lang);
  if (!language) {
    notFound();
  }

  const document = privacyPolicy[language];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <p className="text-sm text-slate-500">{document.updated}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          {document.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {document.intro}
        </p>
        <div className="mt-10 space-y-8">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-slate-900">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-slate-700 md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
