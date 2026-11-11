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
import { StructuredData } from "../components/StructuredData";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { CONTACT_EMAIL } from "@/shared/config/contacts";

export default function Home() {
  const { t, language } = useI18n();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    name: "webzona",
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
      email: CONTACT_EMAIL,
      availableLanguage: ["Ukrainian", "Russian", "English"],
      areaServed: "UA",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "webzona",
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
      name: "webzona",
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
      <main className="mx-auto flex max-w-6xl flex-col px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16">
        <div className="order-1">
          <Hero />
        </div>
        <div className="order-2 lg:order-8">
          <LeadFormSection className="max-lg:pb-8 max-lg:pt-0" />
        </div>
        <div className="order-3 lg:order-2">
          <Categories />
        </div>
        <div className="order-4 lg:order-3">
          <Advantages />
        </div>
        <div className="order-5 lg:order-4">
          <Pricing />
        </div>
        <div className="order-6 lg:order-5">
          <FAQ />
        </div>
        <div className="order-7 lg:order-6">
          <WordPressBlock />
        </div>
      </main>
      <Footer />
    </div>
  );
}
