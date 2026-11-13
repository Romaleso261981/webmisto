"use client";

import {
  trackCallConversion,
  trackTelegramConversion,
  trackViberConversion,
} from "@/shared/lib/analytics/googleAds";

const PHONE_TEL = "+380689478723";
const TELEGRAM_URL = `https://t.me/${PHONE_TEL}`;
const VIBER_URL = `viber://chat?number=%2B${PHONE_TEL.replace("+", "")}`;

function trackContact(method: "phone" | "telegram" | "viber") {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "contact", { method });
}

const base =
  "flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ring-1 ring-black/5 transition active:scale-95";

export default function MobileContactIcons() {
  return (
    <div
      className="fixed right-4 z-40 flex flex-col gap-3 md:hidden"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={VIBER_URL}
        aria-label="Viber"
        onClick={() => {
          trackContact("viber");
          trackViberConversion();
        }}
        className={`${base} bg-[#7360F2] shadow-[#7360F2]/30`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M11.4 2C9.1 2 4.5 2.5 3.1 6.3c-.6 1.6-.6 3.5-.6 5.6 0 2.5.4 4.6 2.2 6v2.6c0 .6.7.9 1.1.5l2.3-2.3c1 .2 2.1.3 3.3.3h.4c2.3 0 6.9-.5 8.3-4.3.6-1.6.6-3.5.6-5.6s0-4-.6-5.6C18.7 2.5 14.1 2 11.8 2h-.4Zm.2 1.6h.3c2 0 5.8.4 6.9 3.3.5 1.3.5 3 .5 5s0 3.7-.5 5c-1.1 2.9-4.9 3.3-6.9 3.3h-.3c-1.2 0-2.3-.1-3.3-.4l-1.8 1.8v-2.2l-.4-.3C4.5 18 4.1 16.2 4.1 12c0-2 0-3.7.5-5 1.1-2.9 4.9-3.3 6.9-3.3h.1Zm.5 2.4a.5.5 0 0 0 0 1c2.4.1 4.3 2 4.4 4.4a.5.5 0 0 0 1 0c-.1-3-2.4-5.3-5.4-5.4Zm-3.6.6c-.3 0-.6.1-.8.3l-.6.6c-.6.6-.6 1.6 0 2.8.9 1.7 2.1 3.2 3.8 4.4 1 .7 1.9 1.1 2.7 1.1.5 0 .9-.2 1.2-.5l.5-.5c.4-.4.4-1 0-1.4l-1.1-1c-.4-.3-.9-.3-1.3 0l-.5.4c-.2.1-.4.1-.6 0-.8-.5-1.5-1.2-2-2-.1-.2-.1-.4 0-.6l.4-.5c.3-.4.3-.9 0-1.3l-1-1.1c-.2-.3-.5-.4-.7-.4Zm3.7.7a.5.5 0 0 0 0 1c1 .1 1.7.8 1.8 1.8a.5.5 0 0 0 1 0c-.1-1.5-1.3-2.7-2.8-2.8Zm.1 1.7a.5.5 0 0 0-.1 1c.3 0 .4.2.4.4a.5.5 0 0 0 1 0c0-.8-.6-1.4-1.3-1.4Z" />
        </svg>
      </a>
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        onClick={() => {
          trackContact("telegram");
          trackTelegramConversion();
        }}
        className={`${base} bg-[#229ED9] shadow-[#229ED9]/30`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 -translate-x-px" fill="currentColor" aria-hidden="true">
          <path d="M21.2 4.4 2.9 11.5c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.5c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.8-1.6-1.4ZM8.3 14.2l10-6.3c.5-.3.9-.1.6.2l-8.6 7.7-.3 3.6-1.7-5.2Z" />
        </svg>
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Phone"
        onClick={() => {
          trackContact("phone");
          trackCallConversion();
        }}
        className={`${base} bg-sky-500 shadow-sky-500/30`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </div>
  );
}
