"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Tag,
  Search,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import postsData from "@/data/blog/posts.json";
import { BlogIdeShell } from "@/components/blog/blog-ide-shell";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(postsData.map((post) => post.category))
  );

  const filteredPosts = postsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const navPosts = postsData.map((p) => ({ slug: p.slug, title: p.title }));

  return (
    <BlogIdeShell activeFile="index.md" posts={navPosts}>
      <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6e7681]" />
            <Input
              type="text"
              placeholder="Artikel suchen…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-[#30363d] bg-[#0d1117] pl-10 font-mono text-[13px] text-[#c9d1d9] placeholder:text-[#6e7681] focus-visible:ring-[#388bfd]"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Button
              type="button"
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={
                selectedCategory === null
                  ? "btn-primary h-8 border-0 text-[12px]"
                  : "h-8 border-[#30363d] bg-transparent text-[12px] text-[#c9d1d9] hover:bg-[#21262d]"
              }
            >
              Alle
            </Button>
            {categories.map((category) => (
              <Button
                type="button"
                key={category}
                variant={
                  selectedCategory === category ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "btn-primary h-8 border-0 text-[12px]"
                    : "h-8 border-[#30363d] bg-transparent text-[12px] text-[#c9d1d9] hover:bg-[#21262d]"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {filteredPosts.length === 0 ? (
          <p className="py-12 text-center text-[#8b949e]">
            Keine Artikel gefunden.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22] transition-all hover:border-[#388bfd]/50 hover:shadow-[0_0_0_1px_rgba(56,139,253,0.25)]">
                  <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#0d1117] px-3 py-2 text-[11px] text-[#8b949e]">
                    <FileText className="h-3.5 w-3.5 text-[#388bfd]" />
                    <span className="truncate font-mono text-[#58a6ff]">
                      {post.slug}.md
                    </span>
                    <ChevronRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] text-[#8b949e]">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("de-DE", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <span className="text-[#484f58]">·</span>
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                    <h2 className="mb-2 text-base font-semibold leading-snug text-[#f0f6fc] group-hover:text-[#58a6ff]">
                      {post.title}
                    </h2>
                    <p className="mb-3 line-clamp-3 flex-1 text-[12px] leading-relaxed text-[#8b949e]">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded border border-[#30363d] bg-[#0d1117] px-2 py-0.5 text-[10px] text-[#79c0ff]"
                        >
                          <Tag className="h-2.5 w-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </BlogIdeShell>
  );
}
