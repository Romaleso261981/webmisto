declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_ID_PATTERN = /^AW-\d+$/;
const LABEL_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

export function getGoogleAdsSendTo(): string | null {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim();

  if (!id || !label || !ADS_ID_PATTERN.test(id) || !LABEL_PATTERN.test(label)) {
    return null;
  }

  return `${id}/${label}`;
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
