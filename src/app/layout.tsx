import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://webmisto.com.ua"),
  title: {
    default: "WebMisto - Веб студія у Львові | Розробка сайтів та інтернет-магазинів",
    template: "%s | WebMisto",
  },
  description: "Професійна розробка сайтів, інтернет-магазинів та навчальних платформ у Львові. Сучасні веб-рішення для вашого бізнесу.",
  keywords: [
    "розробка сайтів",
    "інтернет-магазини",
    "веб-студія Львів",
    "створення сайтів",
    "landing page",
    "корпоративні сайти",
    "навчальні платформи",
    "веб-розробка Україна",
  ],
  authors: [{ name: "WebMisto" }],
  creator: "WebMisto",
  publisher: "WebMisto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    alternateLocale: ["ru_RU", "en_US"],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://webmisto.com.ua",
    siteName: "WebMisto",
    title: "WebMisto - Веб студія у Львові | Розробка сайтів та інтернет-магазинів",
    description: "Професійна розробка сайтів, інтернет-магазинів та навчальних платформ у Львові. Сучасні веб-рішення для вашого бізнесу.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebMisto - Веб студія у Львові",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebMisto - Веб студія у Львові",
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
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://webmisto.com.ua"} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
