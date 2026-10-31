import Script from "next/script";
import { getGoogleAdsId, getGoogleAnalyticsId } from "./googleAds";

export function GoogleAdsTag() {
  const adsId = getGoogleAdsId();
  const analyticsId = getGoogleAnalyticsId();

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${analyticsId}');
          gtag('config', '${adsId}');
        `}
      </Script>
    </>
  );
}
