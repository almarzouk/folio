"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n-provider";

type Tech = {
  name: string;
  color: string; // tailwind text/bg color hex via inline style
  letter: string;
};

const techs: Tech[] = [
  { name: "Laravel", color: "#FF2D20", letter: "L" },
  { name: "PHP", color: "#777BB4", letter: "P" },
  { name: "MySQL", color: "#00758F", letter: "M" },
  { name: "Next.js", color: "#0F172A", letter: "N" },
  { name: "React", color: "#06B6D4", letter: "R" },
  { name: "Vue.js", color: "#42B883", letter: "V" },
  { name: "React Native", color: "#61DAFB", letter: "R" },
  { name: "Tailwind", color: "#0EA5E9", letter: "T" },
  { name: "Node.js", color: "#16A34A", letter: "N" },
  { name: "Vercel", color: "#111827", letter: "V" },
];

const labels = {
  de: { title: "Mein", accent: "Stack", subtitle: "Tools, mit denen ich täglich liefere" },
  en: { title: "My", accent: "stack", subtitle: "Tools I ship with every day" },
};

export default function TechStack() {
  const { locale } = useI18n();
  const t = labels[locale] ?? labels.en;
  const loop = [...techs, ...techs];

  return (
    <section
      aria-label="Tech stack"
      className="relative overflow-hidden border-y border-border/60 bg-secondary/25 py-12"
    >
      <div className="mx-auto mb-6 max-w-6xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-tight sm:text-2xl"
        >
          {t.title} <span className="text-primary">{t.accent}</span>
        </motion.h2>
        <p className="mt-1 text-sm text-muted-foreground">{t.subtitle}</p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-3 px-4">
          {loop.map((tech, i) => (
            <span key={`${tech.name}-${i}`} className="tech-chip shrink-0">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold text-white"
                style={{ background: tech.color }}
                aria-hidden
              >
                {tech.letter}
              </span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
