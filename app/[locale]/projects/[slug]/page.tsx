import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  Target,
  Lightbulb,
  User,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import {
  getProjectById,
  getCaseStudyProjects,
  projectCopy,
} from "@/lib/data/portfolio-projects";
import { withLocale } from "@/lib/i18n/paths";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCaseStudyProjects().map((p) => ({ locale, slug: p.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) return {};
  const project = getProjectById(params.slug);
  if (!project?.hasCaseStudy) return {};
  const copy = projectCopy(project, params.locale as Locale);
  const m = getMessages(params.locale as Locale);
  return {
    title: `${copy.title} | ${m.projects.caseStudyLabel}`,
    description: copy.longDescription,
    alternates: {
      canonical: `/${params.locale}/projects/${params.slug}`,
      languages: {
        de: `/de/projects/${params.slug}`,
        en: `/en/projects/${params.slug}`,
      },
    },
  };
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const project = getProjectById(params.slug);
  if (!project?.hasCaseStudy) notFound();

  const m = getMessages(locale);
  const copy = projectCopy(project, locale);
  const cs = copy.caseStudy;
  if (!cs) notFound();

  const home = withLocale(locale, "/");

  return (
    <main className="min-h-screen">
      <Header />
      <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-28">
        <Link
          href={`${home}#projects`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {m.projects.backToProjects}
        </Link>

        <header className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
            {m.projects.caseStudyLabel} ·{" "}
            {m.projects.categories[project.categoryKey]}
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {copy.longDescription}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.github !== "#" && (
              <Button variant="outline" size="sm" asChild className="rounded-lg">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {m.projects.code}
                </Link>
              </Button>
            )}
            {project.docs && (
              <Button variant="outline" size="sm" asChild className="rounded-lg">
                <Link
                  href={project.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {m.projects.apiDocs}
                </Link>
              </Button>
            )}
            {project.live !== "#" && (
              <Button size="sm" asChild className="rounded-lg btn-primary">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {m.projects.liveDemo}
                </Link>
              </Button>
            )}
          </div>
        </header>

        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
          <Image
            src={project.images[0] ?? ""}
            alt={copy.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="space-y-8">
          <section className="glass-card rounded-2xl border border-border p-6 sm:p-8">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <Target className="h-5 w-5 text-primary" />
              {m.projects.caseStudyProblem}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{cs.problem}</p>
          </section>

          <section className="glass-card rounded-2xl border border-border p-6 sm:p-8">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <Lightbulb className="h-5 w-5 text-primary" />
              {m.projects.caseStudySolution}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{cs.solution}</p>
          </section>

          <section className="glass-card rounded-2xl border border-border p-6 sm:p-8">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <User className="h-5 w-5 text-primary" />
              {m.projects.caseStudyRole}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{cs.role}</p>
          </section>

          <div className="grid gap-6 sm:grid-cols-2">
            <section className="glass-card rounded-2xl border border-border p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                {m.projects.caseStudyHighlights}
              </h2>
              <ul className="space-y-2.5">
                {cs.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card rounded-2xl border border-border p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                {m.projects.caseStudyChallenges}
              </h2>
              <ul className="space-y-2.5">
                {cs.challenges.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {project.images.length > 1 && (
          <div className="mt-12">
            <h2 className="mb-4 text-lg font-bold">{m.projects.caseStudyGallery}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.images.slice(1, 7).map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted"
                >
                  <Image
                    src={src}
                    alt={`${copy.title} — ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
      <Footer />
    </main>
  );
}
