"use client";

import { Header } from "@/widgets/header/ui";
import { Hero } from "@/widgets/hero/ui";
import { Advantages } from "@/widgets/advantages/ui";
import { Categories } from "@/widgets/categories/ui";
import { Pricing } from "@/widgets/pricing/ui";
import { FAQ } from "@/widgets/faq/ui";
import { WordPressBlock } from "@/widgets/wordpress-block/ui";
import LeadFormSection from "@/features/lead-form/ui/LeadFormSection";
import { Footer } from "@/widgets/footer/ui";
import { DelayedBanner } from "@/widgets/delayed-banner/ui";
import { StructuredData } from "../components/StructuredData";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export default function Home() {
  const { t, language } = useI18n();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmisto.com.ua";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    name: "WebMisto",
    description: t.hero.description,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/icon.svg`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Львів",
      addressRegion: "Львівська область",
      addressCountry: "UA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+38 (068) 947 87 23",
      email: "webmisto@gmail.com",
      availableLanguage: ["Ukrainian", "Russian", "English"],
      areaServed: "UA",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WebMisto",
    url: baseUrl,
    description: t.hero.description,
    inLanguage: language === "uk" ? "uk-UA" : language === "ru" ? "ru-RU" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${language}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "WebMisto",
    },
    areaServed: {
      "@type": "Country",
      name: "Ukraine",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: baseUrl,
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16">
        <Hero />
        <Categories />
        <Advantages />
        <Pricing />
        <FAQ />
        <WordPressBlock />
        <LeadFormSection />
      </main>
      <Footer />
      <DelayedBanner delay={5000} resetOnMount={true} />
    </div>
  );
}
