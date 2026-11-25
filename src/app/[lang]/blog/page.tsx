import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/widgets/header/ui";
import { Footer } from "@/widgets/footer/ui";
import { blogPosts } from "@/shared/content/blog";

// Блог поки що лише українською.
const BLOG_LANG = "uk";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== BLOG_LANG) return {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site";
  const title = "Блог про створення сайтів і просування бізнесу | webzona";
  const description =
    "Корисні статті про створення сайтів, ціни на розробку, види сайтів і просування бізнесу в інтернеті від веб-студії webzona.";
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${baseUrl}/uk/blog` },
    openGraph: { title, description, url: `${baseUrl}/uk/blog`, locale: "uk_UA", type: "website" },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== BLOG_LANG) notFound();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Блог webzona</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Пояснюємо простими словами, як створити сайт, скільки це коштує і як отримувати з нього клієнтів.
        </p>
        <div className="mt-10 space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm text-slate-500">{post.dateLabel}</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">
                <Link href={`/uk/blog/${post.slug}`} className="hover:text-sky-600">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{post.intro}</p>
              <Link
                href={`/uk/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-sky-600 hover:underline"
              >
                Читати статтю →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
