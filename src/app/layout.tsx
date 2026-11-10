import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleAdsTag } from "@/shared/lib/analytics/GoogleAdsTag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site"),
  title: {
    default: "webzona — веб-студія, працюємо по всій країні",
    template: "%s | webzona",
  },
  description: "Професійна розробка сайтів, інтернет-магазинів та навчальних платформ. webzona — веб-студія, працюємо по всій країні.",
  keywords: [
    "розробка сайтів",
    "інтернет-магазини",
    "веб-студія",
    "створення сайтів",
    "landing page",
    "корпоративні сайти",
    "навчальні платформи",
    "веб-розробка Україна",
  ],
  authors: [{ name: "webzona" }],
  creator: "webzona",
  publisher: "webzona",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    alternateLocale: ["ru_RU", "en_US"],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site",
    siteName: "webzona",
    title: "webzona — веб-студія, працюємо по всій країні",
    description: "Професійна розробка сайтів, інтернет-магазинів та навчальних платформ. webzona — веб-студія, працюємо по всій країні.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "webzona — веб-студія",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "webzona — веб-студія",
    description: "Професійна розробка сайтів, інтернет-магазинів та навчальних платформ",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "OBZZDX9-lpQTJicdiKAjgaJoJczptyRbgGkoJuYexpQ",
  },
  alternates: {
    canonical: "/",
    languages: {
      "uk-UA": "/uk",
      "ru-RU": "/ru",
      "en-US": "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAdsTag />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "zazzjvjgtm");`}
        </Script>
      </body>
    </html>
  );
}
