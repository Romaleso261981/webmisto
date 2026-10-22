declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_ID_PATTERN = /^AW-\d+$/;
const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;
const LABEL_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

/** Literal tag id from the pasted Google tag. Env overrides it when set. */
const PASTED_GOOGLE_ADS_ID = "AW-18512379903";

/** Literal measurement id from the pasted Google Analytics tag. Env overrides it when set. */
const PASTED_GOOGLE_ANALYTICS_ID = "G-CKLMPDZNRL";

export function getGoogleAdsId(): string {
  const fromEnv = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
  if (fromEnv && ADS_ID_PATTERN.test(fromEnv)) {
    return fromEnv;
  }
  return PASTED_GOOGLE_ADS_ID;
}

export function getGoogleAnalyticsId(): string {
  const fromEnv = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim();
  if (fromEnv && GA_ID_PATTERN.test(fromEnv)) {
    return fromEnv;
  }
  return PASTED_GOOGLE_ANALYTICS_ID;
}

export function getGoogleAdsSendTo(): string | null {
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim();
  if (!label || !LABEL_PATTERN.test(label)) {
    return null;
  }
  return `${getGoogleAdsId()}/${label}`;
}

export function trackLeadConversion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const sendTo = getGoogleAdsSendTo();
  window.dataLayer = window.dataLayer || [];

  if (!sendTo || typeof window.gtag !== "function") {
    return false;
  }

  window.gtag("event", "conversion", { send_to: sendTo });
  return true;
}
