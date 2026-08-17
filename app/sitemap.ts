import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { getCaseStudyProjects } from "@/lib/data/portfolio-projects";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.portfolio;
  const now = new Date();

  const localeHome = locales.flatMap((locale) => [
    {
      url: `${base}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ]);

  const caseStudies = locales.flatMap((locale) =>
    getCaseStudyProjects().map((p) => ({
      url: `${base}/${locale}/projects/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }))
  );

  const staticPages = [
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  return [...localeHome, ...caseStudies, ...staticPages];
}
