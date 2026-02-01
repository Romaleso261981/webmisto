"use client";

import Link from "next/link";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { usePathname } from "next/navigation";

const categorySlugs = {
  "e-commerce": "e-commerce",
  corporate: "corporate",
  landing: "landing",
  platform: "platform",
} as const;

export default function Categories() {
  const { t, language } = useI18n();
  const pathname = usePathname();

  const categories = [
    {
      slug: categorySlugs["e-commerce"],
      ...t.categories["e-commerce"],
      icon: "🛒",
    },
    {
      slug: categorySlugs.corporate,
      ...t.categories.corporate,
      icon: "🏢",
    },
    {
      slug: categorySlugs.landing,
      ...t.categories.landing,
      icon: "📄",
    },
    {
      slug: categorySlugs.platform,
      ...t.categories.platform,
      icon: "🎓",
    },
  ];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mb-8 text-center md:mb-12">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t.advantages.title}
        </h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          {t.advantages.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const href = `/${language}/${category.slug}`;
          const isActive = pathname === href;

          return (
            <Link
              key={category.slug}
              href={href}
              className={`group flex flex-col rounded-2xl border p-6 transition-all hover:border-sky-300 hover:shadow-lg ${
                isActive
                  ? "border-sky-500 bg-sky-50 shadow-md"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="mb-4 text-4xl">{category.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {category.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-slate-600">
                {category.description}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-medium text-sky-600">
                  {category.price}
                </span>
                <span className="text-sm text-slate-500 transition-colors group-hover:text-sky-600">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
