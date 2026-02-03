"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { Header } from "@/widgets/header/ui";
import { Footer } from "@/widgets/footer/ui";
import LeadFormSection from "@/features/lead-form/ui/LeadFormSection";
import { Certificates } from "@/widgets/certificates/ui";
import { StructuredData } from "@/app/components/StructuredData";
import Link from "next/link";

export function ContextualPage() {
  const { t, language } = useI18n();
  const categoryData = t.categories.contextual;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: language === "uk" ? "Головна" : language === "ru" ? "Главная" : "Home",
        item: `${baseUrl}/${language}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.header.nav.advertising,
        item: `${baseUrl}/${language}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryData.title,
        item: `${baseUrl}/${language}/contextual`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-600">
          <Link
            href={`/${language}`}
            className="transition-colors hover:text-sky-600"
          >
            {language === "uk" ? "Головна" : language === "ru" ? "Главная" : "Home"}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/${language}`}
            className="transition-colors hover:text-sky-600"
          >
            {t.header.nav.advertising}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{categoryData.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            {categoryData.title}
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-base text-slate-600 md:text-lg">
            {categoryData.description}
          </p>
          <p className="mx-auto max-w-2xl text-sm text-slate-500 md:text-base">
            {categoryData.subtitle}
          </p>
        </div>

        {/* Tasks Section */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="mb-2 text-xl font-semibold text-slate-900 md:text-2xl">
            {categoryData.tasks.title}
          </h2>
          <p className="mb-8 text-sm text-slate-600 md:text-base">
            {categoryData.tasks.subtitle}
          </p>
          <div className="relative py-4">
            {/* Horizontal line */}
            <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-sky-200" />
            {/* Tasks with circles */}
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
              {categoryData.tasks.items.map((task, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Circle */}
                  <div className="relative z-10 mb-4 h-8 w-8 shrink-0 rounded-full bg-sky-500 md:h-10 md:w-10" />
                  {/* Task text */}
                  <p className="text-center text-sm leading-relaxed text-slate-700 md:text-base">
                    {task}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="mb-6 text-xl font-semibold md:text-2xl">
            {categoryData.benefits.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {categoryData.benefits.items.map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-linear-to-br from-sky-50 to-white p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {categoryData.howItWorks.title}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            {categoryData.howItWorks.description}
          </p>
        </section>

        {/* Certificates Section */}
        <Certificates />

        {/* CTA Section */}
        <section className="mb-12 rounded-2xl bg-linear-to-br from-sky-500 to-sky-600 p-8 text-center text-white shadow-xl">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            {t.categories.ctaTitle}
          </h2>
          <p className="mb-6 text-sky-50">{t.categories.ctaDescription}</p>
          <a
            href="#lead-form"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-600 transition hover:bg-slate-50"
          >
            {categoryData.cta}
          </a>
        </section>

        {/* Form Section */}
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}
