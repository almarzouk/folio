import { notFound } from "next/navigation";
import { Fragment } from "react";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BlogPostingSchema } from "@/components/json-ld";

// Import blog posts
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

  // Convert content markdown to HTML-like sections
  const contentSections = post.content.split("\n\n");

  // Get related posts (same category, different slug)
  const relatedPosts = postsData
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const postUrl = `jumaa-portfolio.vercel.app/blog/${post.slug}`;

  return (
    <Fragment>
      <BlogPostingSchema
        title={post.title}
        description={post.excerpt}
        author={post.author}
        datePublished={post.date}
        url={postUrl}
      />
      <Header />
      <div className="min-h-screen pt-20">
        {/* Back Button */}
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <header className="mb-8 pb-8 border-b">
            <div className="space-y-4">
              {/* Category */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg text-muted-foreground">{post.excerpt}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} Lesezeit</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {contentSections.map((section, index) => {
              const trimmed = section.trim();

              // Skip empty sections
              if (!trimmed) return null;

              // Headings
              if (trimmed.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-4xl font-bold mt-12 mb-6">
                    {trimmed.slice(2)}
                  </h1>
                );
              }
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-10 mb-4">
                    {trimmed.slice(3)}
                  </h2>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-3">
                    {trimmed.slice(4)}
                  </h3>
                );
              }
              if (trimmed.startsWith("#### ")) {
                return (
                  <h4 key={index} className="text-xl font-bold mt-6 mb-2">
                    {trimmed.slice(5)}
                  </h4>
                );
              }

              // Bold text
              if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                return (
                  <p key={index} className="font-bold text-lg mt-4">
                    {trimmed.slice(2, -2)}
                  </p>
                );
              }

              // Code blocks
              if (trimmed.startsWith("```")) {
                const code = trimmed.slice(3, -3);
                return (
                  <pre
                    key={index}
                    className="bg-secondary p-4 rounded-lg overflow-x-auto my-4"
                  >
                    <code className="text-sm">{code}</code>
                  </pre>
                );
              }

              // Lists
              if (trimmed.startsWith("- ") || trimmed.match(/^\d+\. /)) {
                const items = trimmed.split("\n");
                return (
                  <ul
                    key={index}
                    className="list-disc list-inside space-y-2 my-4"
                  >
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace(/^[-\d]+\.\s/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Regular paragraphs
              return (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed my-4"
                >
                  {trimmed}
                </p>
              );
            })}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-secondary/30">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6">Ähnliche Artikel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer p-6">
                      <h3 className="font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Hat Ihnen dieser Artikel gefallen?
              </h2>
              <p className="text-muted-foreground mb-6">
                Lassen Sie uns zusammenarbeiten! Kontaktieren Sie mich für Ihr
                nächstes Projekt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button variant="outline">Mehr Artikel lesen</Button>
                </Link>
                <Link href="/#contact">
                  <Button>Kontakt aufnehmen</Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
}
