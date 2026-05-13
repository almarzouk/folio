"use client";

import Link from "next/link";
import { Home, Mail } from "lucide-react";

type PostNav = { slug: string; title: string };

export function BlogIdeShell({
  activeFile,
  posts,
  children,
}: {
  activeFile: string;
  posts: PostNav[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] [font-family:var(--font-blog-mono),ui-monospace,monospace] text-[13px] leading-relaxed antialiased">
      <header className="sticky top-0 z-20 flex h-10 shrink-0 items-center gap-2 border-b border-[#30363d] bg-[#161b22] px-2 text-[12px]">
        <div className="flex gap-1.5 px-2">
          <span className="size-2.5 rounded-full bg-[#ff5f56]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="hidden text-[#8b949e] sm:inline">~/portfolio</span>
        <span className="hidden text-[#484f58] sm:inline">/</span>
        <span className="hidden text-[#8b949e] sm:inline">blog</span>
        <span className="text-[#484f58]">/</span>
        <span className="font-medium text-[#58a6ff]">{activeFile}</span>
        <nav className="ml-auto flex items-center gap-3 pr-1">
          <Link
            href="/de"
            className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[#58a6ff] hover:bg-[#30363d]/80 hover:no-underline"
          >
            <Home className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">Start</span>
          </Link>
          <Link
            href="/de#contact"
            className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[#58a6ff] hover:bg-[#30363d]/80"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">Kontakt</span>
          </Link>
        </nav>
      </header>

      <div className="flex min-h-[calc(100dvh-2.5rem)] flex-col md:flex-row">
        <aside className="shrink-0 border-[#30363d] bg-[#010409] py-3 md:w-60 md:border-r">
          <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wide text-[#8b949e]">
            Explorer
          </div>
          <div className="space-y-0.5 px-1">
            <Link
              href="/blog"
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-left hover:bg-[#21262d] ${
                activeFile === "index.md"
                  ? "bg-[#21262d] text-[#f0f6fc] ring-1 ring-[#388bfd]/40"
                  : "text-[#c9d1d9]"
              }`}
            >
              <span className="text-[#8b949e]">#</span>
              index.md
            </Link>
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-left hover:bg-[#21262d] ${
                  activeFile === `${p.slug}.md`
                    ? "bg-[#21262d] text-[#f0f6fc] ring-1 ring-[#388bfd]/40"
                    : "text-[#c9d1d9]"
                }`}
              >
                <span className="text-[#8b949e]">#</span>
                <span className="truncate">{p.slug}.md</span>
              </Link>
            ))}
          </div>
        </aside>

        <div className="min-h-[50vh] min-w-0 flex-1 bg-[#0d1117]">{children}</div>
      </div>
    </div>
  );
}
