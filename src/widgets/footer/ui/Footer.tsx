"use client";

import Link from "next/link";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export default function Footer() {
  const { t, language } = useI18n();

  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          {t.footer.copyright} {new Date().getFullYear()} WebMisto
        </p>
        <div className="flex flex-wrap gap-4">
          {t.footer.links.map((link) => {
            const href = link.path.startsWith("#")
              ? `/${language}${link.path}`
              : `/${language}${link.path ? `/${link.path}` : ""}`;

            return (
              <Link key={link.label} href={href} className="hover:text-sky-600">
                {link.label}
              </Link>
            );
          })}
          <Link href={`/${language}/privacy`} className="underline hover:text-sky-600">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
