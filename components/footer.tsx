"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Code2, MapPin } from "lucide-react";
import { useI18n } from "@/components/i18n-provider";
import { withLocale } from "@/lib/i18n/paths";

export default function Footer() {
  const { locale, messages: m } = useI18n();
  const home = withLocale(locale, "/");

  const navigation = [
    { name: m.nav.home, href: `${home}#hero` },
    { name: m.nav.about, href: `${home}#about` },
    { name: m.nav.skills, href: `${home}#skills` },
    { name: m.nav.projects, href: `${home}#projects` },
    { name: m.nav.blog, href: "/blog" },
    { name: m.nav.contact, href: `${home}#contact` },
  ];

  const social = [
    { name: "GitHub", href: "https://github.com/almarzouk", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/almarzouk",
      icon: Linkedin,
    },
    { name: "E-Mail", href: "mailto:jumaa.almarzouk@gmail.com", icon: Mail },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      <div className="section-rule absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 lg:py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg btn-primary shadow-sm">
                  <span className="text-sm font-bold text-white">JA</span>
                </div>
                <span className="text-lg font-bold text-primary">
                  Jumaa Almarzouk
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {m.footer.tagline}
              </p>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                Haselünne, Germany
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {m.footer.navTitle}
              </h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {m.footer.contactTitle}
              </h3>
              <div className="space-y-3">
                <Link
                  href="mailto:jumaa.almarzouk@gmail.com"
                  className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  jumaa.almarzouk@gmail.com
                </Link>
                <div className="flex flex-wrap gap-2">
                  {social.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="rounded-xl border border-border bg-background p-2.5 transition-colors hover:border-primary/45 hover:bg-primary/[0.06] hover:text-primary"
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:justify-start">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Jumaa Almarzouk
            </p>
            <span className="hidden text-muted-foreground/40 sm:inline">•</span>
            <Link
              href="/impressum"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {m.footer.impressum}
            </Link>
            <span className="text-muted-foreground/40">•</span>
            <Link
              href="/datenschutz"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {m.footer.privacy}
            </Link>
          </div>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {m.footer.builtWith}{" "}
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
            <Code2 className="h-3.5 w-3.5 text-primary" />
            <span className="font-semibold text-primary">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
