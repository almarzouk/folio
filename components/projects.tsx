"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import {
  portfolioProjects,
  projectCopy,
  type ProjectCategoryKey,
  type PortfolioProject,
} from "@/lib/data/portfolio-projects";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import { cn } from "@/lib/utils";

const CATEGORY_ORDER: (ProjectCategoryKey | "all")[] = [
  "all",
  "nextjs",
  "reactjs",
  "php",
  "static",
  "tailwind",
];

function ImageModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  title,
  labels,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title: string;
  labels: { close: string; prev: string; next: string; image: string };
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 text-white transition-colors hover:text-zinc-300"
        aria-label={labels.close}
      >
        <X className="h-8 w-8" />
      </button>

      <div
        className="relative flex h-full w-full max-h-[90vh] max-w-7xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full">
          <Image
            src={images[currentIndex] ?? ""}
            alt={`${title} — ${labels.image} ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            quality={95}
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label={labels.prev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label={labels.next}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-4 py-2 text-sm text-white">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ImageSlider({
  images,
  title,
  onImageClick,
  labels,
  variant = "grid",
}: {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
  labels: { prev: string; next: string; dot: string };
  variant?: "grid" | "featured";
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-primary/10",
        variant === "featured"
          ? "h-52 min-h-[13rem] w-full lg:h-full lg:min-h-[17rem]"
          : "h-44 sm:h-48"
      )}
    >
      <div
        className="relative h-full w-full cursor-pointer"
        onClick={() => onImageClick(currentIndex)}
      >
        <Image
          src={images[currentIndex] ?? ""}
          alt={`${title} — ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100"
            aria-label={labels.prev}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100"
            aria-label={labels.next}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`${labels.dot} ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function FeaturedPreviewPanel({
  project,
  locale,
  projectsMessages,
  sliderLabels,
  openModal,
}: {
  project: PortfolioProject;
  locale: Locale;
  projectsMessages: Messages["projects"];
  sliderLabels: { prev: string; next: string; dot: string };
  openModal: (images: string[], index: number, title: string) => void;
}) {
  const copy = projectCopy(project, locale);
  return (
    <div className="flex h-full min-h-[280px] flex-col lg:min-h-[360px]">
      <div className="relative min-h-[200px] flex-1 lg:min-h-0">
        <ImageSlider
          variant="featured"
          images={project.images}
          title={copy.title}
          onImageClick={(imgIndex) =>
            openModal(project.images, imgIndex, copy.title)
          }
          labels={sliderLabels}
        />
      </div>
      <div className="shrink-0 space-y-3 border-t border-border bg-muted/30 p-4 sm:p-5">
        <div>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            {projectsMessages.categories[project.categoryKey]}
          </p>
          <h3 className="text-lg font-bold leading-tight sm:text-xl">
            {copy.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {copy.longDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.github !== "#" && (
            <Button variant="outline" size="sm" asChild className="rounded-lg">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {projectsMessages.code}
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
                {projectsMessages.liveDemo}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { locale, messages: m } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategoryKey | "all"
  >("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");

  const modalLabels = useMemo(
    () => ({
      close: m.projects.modalClose,
      prev: m.projects.modalPrev,
      next: m.projects.modalNext,
      image: m.projects.modalImage,
    }),
    [m.projects]
  );

  const sliderLabels = useMemo(
    () => ({
      prev: m.projects.modalPrev,
      next: m.projects.modalNext,
      dot: m.projects.modalDot,
    }),
    [m.projects]
  );

  const openModal = (images: string[], index: number, title: string) => {
    setModalImages(images);
    setModalIndex(index);
    setModalTitle(title);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setModalIndex(
      (prev) => (prev - 1 + modalImages.length) % modalImages.length
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return portfolioProjects;
    return portfolioProjects.filter(
      (p) => p.categoryKey === selectedCategory
    );
  }, [selectedCategory]);

  const featuredProjects = useMemo(
    () => portfolioProjects.filter((p) => p.featured),
    []
  );

  const [activeFeaturedId, setActiveFeaturedId] = useState(
    () => portfolioProjects.find((p) => p.featured)?.id ?? ""
  );

  useEffect(() => {
    if (
      featuredProjects.length > 0 &&
      !featuredProjects.some((p) => p.id === activeFeaturedId)
    ) {
      setActiveFeaturedId(featuredProjects[0].id);
    }
  }, [featuredProjects, activeFeaturedId]);

  const activeFeatured = useMemo(
    () =>
      featuredProjects.find((p) => p.id === activeFeaturedId) ??
      featuredProjects[0],
    [featuredProjects, activeFeaturedId]
  );

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-secondary/25" />
      <div className="section-rule absolute left-0 right-0 top-0" />
      <div className="section-rule absolute bottom-0 left-0 right-0" />

      {modalOpen && (
        <ImageModal
          images={modalImages}
          currentIndex={modalIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
          title={modalTitle}
          labels={modalLabels}
        />
      )}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-6xl" ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="mb-12 text-center sm:mb-14"
          >
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {m.projects.title}{" "}
              <span className="text-primary">{m.projects.titleAccent}</span>
            </h2>
            <div
              className="mx-auto mb-4 h-1 w-16 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
            />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {m.projects.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {CATEGORY_ORDER.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedCategory(key)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === key
                    ? "btn-primary border-transparent text-primary-foreground shadow-md"
                    : "border-border bg-card hover:border-primary/45 hover:text-primary"
                }`}
              >
                {m.projects.categories[key]}
              </button>
            ))}
          </motion.div>

          {selectedCategory === "all" && (
            <div className="mb-14">
              <div className="mb-6 flex flex-wrap items-center gap-3 px-1">
                <LayoutGrid className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <div className="text-lg font-bold">
                  <Star className="mr-2 inline-block h-5 w-5 fill-primary text-primary align-middle" />
                  {m.projects.featured}{" "}
                  <span className="text-primary">
                    {m.projects.featuredAccent}
                  </span>
                </div>
                <p className="w-full text-sm text-muted-foreground lg:ml-auto lg:w-auto">
                  {locale === "de"
                    ? "Projekt wählen — Vorschau & Screenshots rechts."
                    : "Pick a project — preview and screenshots on the right."}
                </p>
              </div>

              <div className="lg:hidden">
                {activeFeatured && (
                  <motion.div
                    key={activeFeatured.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-md"
                  >
                    <FeaturedPreviewPanel
                      project={activeFeatured}
                      locale={locale}
                      projectsMessages={m.projects}
                      sliderLabels={sliderLabels}
                      openModal={openModal}
                    />
                  </motion.div>
                )}
                <div
                  className="mt-4 flex gap-2 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:thin]"
                  role="tablist"
                  aria-label="Featured projects"
                >
                  {featuredProjects.map((p) => {
                    const c = projectCopy(p, locale);
                    const active = p.id === activeFeaturedId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveFeaturedId(p.id)}
                        className={cn(
                          "shrink-0 rounded-xl border px-4 py-2.5 text-left transition-all",
                          active
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-border bg-card hover:border-primary/40"
                        )}
                      >
                        <span className="block font-mono text-[10px] uppercase opacity-70">
                          {p.id}
                        </span>
                        <span className="line-clamp-2 max-w-[10rem] text-sm font-semibold">
                          {c.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="hidden overflow-hidden rounded-2xl border border-border bg-card/80 shadow-xl backdrop-blur-sm lg:grid lg:min-h-[400px] lg:grid-cols-12 lg:gap-0">
                <nav
                  className="col-span-4 flex max-h-[min(70vh,560px)] flex-col gap-1 overflow-y-auto border-b border-border p-3 lg:border-b-0 lg:border-r"
                  aria-label="Featured projects"
                >
                  {featuredProjects.map((p, i) => {
                    const c = projectCopy(p, locale);
                    const active = p.id === activeFeaturedId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActiveFeaturedId(p.id)}
                        className={cn(
                          "rounded-xl px-4 py-3 text-left transition-all",
                          active
                            ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30"
                            : "hover:bg-muted/80"
                        )}
                      >
                        <span className="font-mono text-xs opacity-70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-0.5 block font-semibold leading-snug">
                          {c.title}
                        </span>
                        <span
                          className={cn(
                            "mt-1 block line-clamp-2 text-xs",
                            active ? "text-primary-foreground/85" : "text-muted-foreground"
                          )}
                        >
                          {c.description}
                        </span>
                      </button>
                    );
                  })}
                </nav>
                <div className="col-span-8 min-h-[360px] bg-background/50 p-3 sm:p-4">
                  {activeFeatured && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeatured.id}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.22 }}
                        className="h-full overflow-hidden rounded-xl border border-border bg-card"
                      >
                        <FeaturedPreviewPanel
                          project={activeFeatured}
                          locale={locale}
                          projectsMessages={m.projects}
                          sliderLabels={sliderLabels}
                          openModal={openModal}
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </div>
          )}

          <div>
            {selectedCategory !== "all" && (
              <h3 className="mb-6 text-lg font-bold">
                <span className="text-primary">
                  {m.projects.categories[selectedCategory]}
                </span>{" "}
                {m.projects.categoryProjects}
              </h3>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects
                .filter((p) => selectedCategory !== "all" || !p.featured)
                .map((project, index) => {
                  const copy = projectCopy(project, locale);
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05,
                        ease: [0.16, 1, 0.3, 1] as [
                          number,
                          number,
                          number,
                          number,
                        ],
                      }}
                      className={cn(
                        "group/card relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg",
                        index % 2 === 1 && "md:translate-y-10"
                      )}
                    >
                      <div
                        className="relative aspect-[16/10] cursor-pointer overflow-hidden bg-muted"
                        onClick={() =>
                          openModal(project.images, 0, copy.title)
                        }
                      >
                        <Image
                          src={project.images[0] ?? ""}
                          alt={copy.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-x-0 bottom-0 border-t border-border/60 bg-background/92 p-4 pt-10 backdrop-blur-sm">
                          <p className="text-[10px] font-semibold uppercase tracking-wide text-primary">
                            {m.projects.categories[project.categoryKey]}
                          </p>
                          <h3 className="line-clamp-2 text-base font-bold leading-snug">
                            {copy.title}
                          </h3>
                        </div>
                        <div className="absolute right-3 top-3 flex gap-1.5 opacity-0 transition-opacity group-hover/card:opacity-100">
                          {project.github !== "#" && (
                            <Button
                              size="icon"
                              variant="secondary"
                              className="h-9 w-9 rounded-full border border-border bg-background/90 shadow-md"
                              asChild
                            >
                              <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Github className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                          {project.live !== "#" && (
                            <Button
                              size="icon"
                              className="h-9 w-9 rounded-full btn-primary shadow-md"
                              asChild
                            >
                              <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-4 pt-3">
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {copy.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-primary/15 bg-primary/8 px-2 py-0.5 text-[11px] font-medium text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-14 text-center"
          >
            <p className="mb-5 text-muted-foreground">{m.projects.githubCta}</p>
            <Button asChild size="lg" className="rounded-xl btn-primary px-8 shadow-md">
              <Link
                href="https://github.com/almarzouk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                {m.projects.githubCtaButton}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
