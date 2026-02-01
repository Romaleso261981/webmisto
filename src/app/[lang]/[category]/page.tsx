"use client";

import { use } from "react";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { Header } from "@/widgets/header/ui";
import { Footer } from "@/widgets/footer/ui";
import LeadFormSection from "@/features/lead-form/ui/LeadFormSection";
import Link from "next/link";
import { notFound } from "next/navigation";

const validCategories = ["e-commerce", "corporate", "landing", "platform"] as const;
type CategorySlug = (typeof validCategories)[number];

export default function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}) {
  const { t, language } = useI18n();
  const { category } = use(params);

  if (!validCategories.includes(category as CategorySlug)) {
    notFound();
  }

  const categoryKey = category === "e-commerce" ? "e-commerce" : category;
  const categoryData = t.categories[categoryKey as "e-commerce" | "corporate" | "landing" | "platform"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-600">
          <Link
            href={`/${language}`}
            className="transition-colors hover:text-sky-600"
          >
            {t.header.nav.services}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{categoryData.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
            {categoryData.title}
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
            {categoryData.description}
          </p>
          <div className="mt-6">
            <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              {categoryData.price}
            </span>
          </div>
        </div>

        {/* Features */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="mb-6 text-xl font-semibold md:text-2xl">
            {t.categories.featuresTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {categoryData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4"
              >
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-sky-100 text-center text-xs leading-5 text-sky-700">
                  ✓
                </span>
                <p className="text-sm text-slate-700 md:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 p-8 text-center text-white shadow-xl">
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
