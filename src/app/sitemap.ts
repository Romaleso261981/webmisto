import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmisto.com.ua";

const languages = ["uk", "ru", "en"];
const categories = [
  "e-commerce",
  "corporate",
  "landing",
  "platform",
  "contextual",
  "targeting",
  "seo",
  "smm",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Home pages for each language
  languages.forEach((lang) => {
    routes.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });
  });

  // Category pages for each language
  languages.forEach((lang) => {
    categories.forEach((category) => {
      routes.push({
        url: `${baseUrl}/${lang}/${category}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  return routes;
}
