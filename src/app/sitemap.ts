import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site";

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

  // Root page (will redirect to /uk)
  routes.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  });

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
