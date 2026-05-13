"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/components/i18n-provider";
import { withLocale } from "@/lib/i18n/paths";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: 0.08,
    },
  },
};

export default function Hero() {
  const { locale, messages: m } = useI18n();
  const home = withLocale(locale, "/");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10 dot-pattern opacity-50" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />

      <motion.div
        className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-primary/8 blur-3xl"
        animate={{ scale: [1, 1.1, 1], x: [0, -16, 0], y: [0, 14, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="order-2 space-y-7 text-center lg:order-1 lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.07] px-3.5 py-1.5 text-xs font-medium text-primary sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                {m.hero.badge}
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                {m.hero.greeting}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="text-primary">Jumaa</span>
                <br />
                <span className="text-foreground">Almarzouk</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold text-foreground/85 sm:text-2xl md:text-3xl">
                {m.hero.roleLine}{" "}
                <span className="font-bold text-primary">
                  {m.hero.roleHighlight}
                </span>
              </h2>
              <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
                {m.hero.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/[0.07] px-2.5 py-0.5 text-xs font-semibold text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              {m.hero.bio}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="btn-primary group w-full rounded-xl px-6 shadow-md transition-transform hover:scale-[1.02] active:scale-100 sm:w-auto"
              >
                <Link href={`${home}#projects`}>
                  <span className="flex items-center gap-2">
                    {m.hero.ctaProjects}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-xl border-2 px-6 transition-transform hover:scale-[1.02] active:scale-100 sm:w-auto"
              >
                <Link href={`${home}#contact`}>
                  <Mail className="mr-2 h-4 w-4" />
                  {m.hero.ctaContact}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full rounded-xl border-2 px-6 transition-transform hover:scale-[1.02] active:scale-100 sm:w-auto"
              >
                <a href="/cv/Jumaa-Almarzouk-CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  {m.hero.cvDownload}
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-2 pt-1 lg:justify-start"
            >
              {[
                {
                  href: "https://github.com/almarzouk",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/almarzouk",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:jumaa.almarzouk@gmail.com",
                  icon: Mail,
                  label: "E-Mail",
                },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="rounded-xl border border-border bg-card p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
              <span className="inline-flex items-center gap-1.5 pl-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary/70" />
                Haselünne, DE
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 flex justify-center lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-[340px] lg:w-[340px]">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25" />
              <div className="absolute inset-3 rounded-full border border-primary/35" />

              <div className="absolute inset-6 rounded-full bg-primary/[0.08] animate-pulse-glow" />

              <div className="absolute inset-8 overflow-hidden rounded-full border-2 border-primary/40 bg-secondary shadow-xl ring-4 ring-primary/10">
                <Image
                  src="/photo.png"
                  alt="Jumaa Almarzouk"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 -top-2 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-md"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/12">
                  <Zap className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                </span>
                <span className="text-xs font-semibold text-foreground">
                  {m.hero.expBadge}
                </span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-2 -left-2 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-md"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/12">
                  <Rocket className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                </span>
                <span className="text-xs font-semibold text-foreground">
                  {m.hero.projectsBadge}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-primary/35 pt-2">
          <div className="h-2 w-0.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}
