import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/widgets/header/ui";
import { Footer } from "@/widgets/footer/ui";
import { blogPosts, getPost } from "@/shared/content/blog";

const BLOG_LANG = "uk";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ lang: BLOG_LANG, slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (lang !== BLOG_LANG || !post) return {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site";
  const url = `${baseUrl}/uk/blog/${post.slug}`;
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      locale: "uk_UA",
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (lang !== BLOG_LANG || !post) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.webzona.site";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    inLanguage: "uk-UA",
    mainEntityOfPage: `${baseUrl}/uk/blog/${post.slug}`,
    author: { "@type": "Organization", name: "webzona" },
    publisher: { "@type": "Organization", name: "webzona" },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <nav className="text-sm text-slate-500">
          <Link href="/uk" className="hover:text-sky-600">Головна</Link>
          {" / "}
          <Link href="/uk/blog" className="hover:text-sky-600">Блог</Link>
        </nav>
        <p className="mt-6 text-sm text-slate-500">{post.dateLabel}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{post.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{post.intro}</p>
        <div className="mt-10 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-slate-700 md:text-base">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-base">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-sky-600 p-6 text-white md:p-8">
          <p className="text-lg font-semibold">{post.cta.text}</p>
          <Link
            href={`/uk${post.cta.path}`}
            className="mt-4 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50"
          >
            {post.cta.linkLabel}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
