import Script from "next/script";
import { getGoogleAdsSendTo } from "./googleAds";

export function GoogleAdsTag() {
  const sendTo = getGoogleAdsSendTo();
  const adsId = sendTo?.split("/")[0];

  if (!adsId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${adsId}');
        `}
      </Script>
    </>
  );
}
