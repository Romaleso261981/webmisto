"use client";

import Image from "next/image";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

interface Certificate {
  name: string;
  image: string;
  url: string;
}

export function Certificates() {
  const { t } = useI18n();

  const certificates: Certificate[] = [
    {
      name: "Clutch",
      image: "/certificates/clutch.png",
      url: "https://clutch.co/profile/netpeak",
    },
    {
      name: "The Drum",
      image: "/certificates/drum.png",
      url: "https://www.recommendedagencies.com/netpeak",
    },
    {
      name: "UpCity",
      image: "/certificates/upcity.png",
      url: "https://upcity.com/profiles/netpeak-digital-agency-uk/wilmington-de",
    },
    {
      name: "GoodFirms",
      image: "/certificates/goodfirms.png",
      url: "https://www.goodfirms.co/company/netpeak",
    },
    {
      name: "Google Partner",
      image: "/certificates/google-partner.avif",
      url: "https://www.google.com/partners/agency?id=6877175886",
    },
    {
      name: "Meta Marketing Partner",
      image: "/certificates/meta.png",
      url: "https://www.facebook.com/business/partner-directory/search?solution_type=campaign_management&ref=fmp_about_find_partner_hero_cta&id=2691029654458899&section=overview",
    },
    {
      name: "Amazon Ads",
      image: "/certificates/amazon-ads.avif",
      url: "https://advertising.amazon.com/partners/directory/details/amzn1.ads1.ma1.7zm014d9erg7zafu6os4zvt17/Netpeak?sref_=user",
    },
    {
      name: "TikTok",
      image: "/certificates/tiktok.avif",
      url: "https://effie.org.ua/winners/",
    },
    {
      name: "Effie",
      image: "/certificates/effie.png",
      url: "https://effie.org.ua/winners/",
    },
    {
      name: "IAB",
      image: "/certificates/iab.png",
      url: "https://iab.com.ua/iab-ukrayina-publikuye-rejtyng-dydzhytal-agentsij-ta-kompanij-shho-nadayut-poslugy-u-sferi-dydzhytal-za-2023-rik/",
    },
    {
      name: "Google Marketing Platform",
      image: "/certificates/google-marketing.png",
      url: "https://enterprisemarketingportal.google/find-a-partner/netpeak-ua?partnerNameFilters=netpeak",
    },
    {
      name: "Google Cloud Partner",
      image: "/certificates/google-cloud.png",
      url: "https://cloud.google.com/find-a-partner/partner/netpeak",
    },
  ];

  return (
    <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
      <h2 className="mb-6 text-center text-xl font-semibold md:text-2xl">
        {t.certificates?.title || "Сертифікати"}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
        {certificates.map((cert) => (
          <a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-sky-300 hover:shadow-md"
          >
            <Image
              src={cert.image}
              alt={cert.name}
              width={120}
              height={120}
              className="h-auto w-full max-w-[120px] object-contain transition-transform group-hover:scale-105"
              unoptimized
            />
          </a>
        ))}
      </div>
    </section>
  );
}
