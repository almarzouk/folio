import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  User,
  FileCode2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPostingSchema } from "@/components/json-ld";
import { BlogIdeShell } from "@/components/blog/blog-ide-shell";
import postsData from "@/data/blog/posts.json";

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = postsData.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  return {
    title: `${post.title} | Jumaa Almarzouk Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const contentSections = post.content.split("\n\n");

  const relatedPosts = postsData
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const postUrl = `https://jumaa-portfolio.vercel.app/blog/${post.slug}`;
  const navPosts = postsData.map((p) => ({ slug: p.slug, title: p.title }));

  return (
    <>
      <BlogPostingSchema
        title={post.title}
        description={post.excerpt}
        author={post.author}
        datePublished={post.date}
        url={postUrl}
      />
      <BlogIdeShell activeFile={`${post.slug}.md`} posts={navPosts}>
        <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3">
          <Link href="/blog">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-2 font-mono text-[12px] text-[#58a6ff] hover:bg-[#21262d] hover:text-[#79c0ff]"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zu index.md
            </Button>
          </Link>
        </div>

        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <div className="mb-8 border-l-2 border-[#388bfd] pl-5">
            <header className="space-y-4 border-b border-[#30363d] pb-8">
              <span className="inline-flex items-center rounded border border-[#30363d] bg-[#21262d] px-2.5 py-1 text-[11px] font-medium text-[#79c0ff]">
                {post.category}
              </span>
              <h1 className="text-2xl font-semibold leading-tight text-[#f0f6fc] sm:text-3xl">
                {post.title}
              </h1>
              <p className="text-[14px] leading-relaxed text-[#8b949e]">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#8b949e]">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime} Lesezeit
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded border border-[#30363d] bg-[#0d1117] px-2 py-1 text-[11px] text-[#79c0ff]"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="max-w-none space-y-1 pt-8 font-mono text-[13px] leading-relaxed text-[#c9d1d9]">
              {contentSections.map((section, index) => {
                const trimmed = section.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith("# ")) {
                  return (
                    <h1 key={index} className="mb-4 mt-10 text-2xl font-bold">
                      {trimmed.slice(2)}
                    </h1>
                  );
                }
                if (trimmed.startsWith("## ")) {
                  return (
                    <h2 key={index} className="mb-3 mt-9 text-xl font-semibold">
                      {trimmed.slice(3)}
                    </h2>
                  );
                }
                if (trimmed.startsWith("### ")) {
                  return (
                    <h3 key={index} className="mb-2 mt-7 text-lg font-semibold">
                      {trimmed.slice(4)}
                    </h3>
                  );
                }
                if (trimmed.startsWith("#### ")) {
                  return (
                    <h4 key={index} className="mb-2 mt-6 text-base font-semibold">
                      {trimmed.slice(5)}
                    </h4>
                  );
                }

                if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                  return (
                    <p key={index} className="my-4 font-semibold text-[#f0f6fc]">
                      {trimmed.slice(2, -2)}
                    </p>
                  );
                }

                if (trimmed.startsWith("```")) {
                  const inner = trimmed.replace(/^```[a-z]*\n?/i, "").replace(/```$/, "");
                  return (
                    <pre
                      key={index}
                      className="my-4 overflow-x-auto rounded-md border border-[#30363d] bg-[#161b22] p-4 text-[12px]"
                    >
                      <code>{inner.trim()}</code>
                    </pre>
                  );
                }

                if (trimmed.startsWith("- ") || trimmed.match(/^\d+\. /)) {
                  const items = trimmed.split("\n");
                  return (
                    <ul
                      key={index}
                      className="my-4 list-inside list-disc space-y-1.5 text-[#c9d1d9]"
                    >
                      {items.map((item, i) => (
                        <li key={i}>
                          {item.replace(/^[-\d]+\.\s/, "")}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={index} className="my-4 text-[#c9d1d9]">
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-12 border-t border-[#30363d] pt-10">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#8b949e]">
                <FileCode2 className="h-4 w-4 text-[#388bfd]" />
                Ähnliche Artikel
              </h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="rounded-lg border border-[#30363d] bg-[#161b22] p-4 transition-colors hover:border-[#388bfd]/45"
                  >
                    <h3 className="mb-2 line-clamp-2 text-[13px] font-medium text-[#f0f6fc] hover:text-[#58a6ff]">
                      {relatedPost.title}
                    </h3>
                    <p className="line-clamp-2 text-[11px] text-[#8b949e]">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-[#6e7681]">
                      <Clock className="h-3 w-3" />
                      {relatedPost.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12 rounded-lg border border-[#30363d] bg-[#161b22] p-6 text-center">
            <h2 className="mb-2 text-base font-semibold text-[#f0f6fc]">
              Hat Ihnen dieser Artikel geholfen?
            </h2>
            <p className="mb-5 text-[13px] text-[#8b949e]">
              Schreiben Sie mir für Austausch oder eine Rolle in Ihrem Team.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#30363d] bg-transparent font-mono text-[12px] text-[#c9d1d9] hover:bg-[#21262d]"
                >
                  Mehr Artikel
                </Button>
              </Link>
              <Link href="/de#contact">
                <Button
                  size="sm"
                  className="btn-primary font-mono text-[12px]"
                >
                  Kontakt
                </Button>
              </Link>
            </div>
          </section>
        </article>
      </BlogIdeShell>
    </>
  );
}
