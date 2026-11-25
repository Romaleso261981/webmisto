import { MetadataRoute } from "next";
import { blogPosts } from "@/shared/content/blog";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site";

const languages = ["uk", "ru"];
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

  // Кореневу адресу не додаємо: вона робить редирект на /uk, а в sitemap мають бути лише кінцеві сторінки.

  // Home pages for each language
  languages.forEach((lang) => {
    routes.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });
    routes.push({
      url: `${baseUrl}/${lang}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
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

  // Блог (лише українською)
  routes.push({
    url: `${baseUrl}/uk/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  });
  blogPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/uk/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return routes;
}
