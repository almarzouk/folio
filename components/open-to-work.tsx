"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Car,
  MapPin,
  Rocket,
  Download,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useI18n } from "@/components/i18n-provider";
import { withLocale } from "@/lib/i18n/paths";
import { SITE } from "@/lib/site";

const icons = [Briefcase, MapPin, Car, Rocket];

export default function OpenToWork() {
  const { locale, messages: m } = useI18n();
  const home = withLocale(locale, "/");

  return (
    <section
      id="open-to-work"
      className="relative overflow-hidden border-y border-border/60 bg-primary/[0.04] py-14 sm:py-16"
    >
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card overflow-hidden rounded-2xl border border-primary/20 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="border-b border-border bg-primary/[0.06] p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                {m.openToWork.badge}
              </span>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {m.openToWork.title}{" "}
                <span className="text-primary">{m.openToWork.titleAccent}</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {m.openToWork.subtitle}
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <Button asChild className="rounded-xl btn-primary shadow-md">
                  <Link href={`${home}#contact`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {m.openToWork.ctaContact}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-xl">
                  <a href={SITE.cvPath} download>
                    <Download className="mr-2 h-4 w-4" />
                    {m.hero.cvDownload}
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
              {m.openToWork.items.map((item, index) => {
                const Icon = icons[index] ?? Briefcase;
                return (
                  <div
                    key={item.title}
                    className="flex gap-3 bg-card p-5 sm:p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
