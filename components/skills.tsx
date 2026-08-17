"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Sparkles,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useI18n } from "@/components/i18n-provider";

type SkillLevel = "production" | "daily" | "familiar";
type Skill = { name: string; level: SkillLevel };

const levelStyles: Record<
  SkillLevel,
  { badge: string; dot: string }
> = {
  production: {
    badge: "border-primary/30 bg-primary/10 text-primary",
    dot: "bg-primary",
  },
  daily: {
    badge: "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    dot: "bg-cyan-500",
  },
  familiar: {
    badge: "border-border bg-secondary/60 text-muted-foreground",
    dot: "bg-muted-foreground/50",
  },
};

const skillBlocks = [
  {
    key: "backend" as const,
    icon: Server,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    border: "border-blue-500/20",
    skills: [
      { name: "Laravel", level: "production" },
      { name: "PHP 8+", level: "production" },
      { name: "REST APIs", level: "production" },
      { name: "Eloquent / MVC", level: "production" },
      { name: "Node.js", level: "daily" },
    ] as Skill[],
  },
  {
    key: "databases" as const,
    icon: Database,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: [
      { name: "MySQL", level: "production" },
      { name: "Migrations", level: "production" },
      { name: "Relations", level: "production" },
    ] as Skill[],
  },
  {
    key: "frontend" as const,
    icon: Code2,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    border: "border-violet-500/20",
    skills: [
      { name: "JavaScript (ES6+)", level: "production" },
      { name: "React", level: "production" },
      { name: "Next.js", level: "production" },
      { name: "Vue.js", level: "daily" },
      { name: "Blade", level: "production" },
      { name: "Tailwind CSS", level: "production" },
    ] as Skill[],
  },
  {
    key: "cmsDevops" as const,
    icon: Wrench,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: [
      { name: "Git & GitHub", level: "production" },
      { name: "Composer", level: "production" },
      { name: "npm", level: "production" },
      { name: "Vercel", level: "daily" },
    ] as Skill[],
  },
  {
    key: "design" as const,
    icon: Sparkles,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    border: "border-pink-500/20",
    skills: [
      { name: "Clean Code", level: "production" },
      { name: "Performance", level: "daily" },
      { name: "Responsive Design", level: "production" },
    ] as Skill[],
  },
  {
    key: "mobile" as const,
    icon: Smartphone,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    skills: [
      { name: "React Native", level: "daily" },
      { name: "Mobile-First", level: "production" },
    ] as Skill[],
  },
];

export default function Skills() {
  const { messages: m } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 dot-pattern opacity-35" />
      <div className="aurora-blob -z-10 left-[-10%] top-[10%] h-72 w-72 bg-primary/15" />
      <div
        className="aurora-blob -z-10 right-[-8%] bottom-[5%] h-80 w-80 bg-cyan-500/12"
        style={{ animationDelay: "3s" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-5xl" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center sm:mb-14"
          >
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {m.skills.title}{" "}
              <span className="text-primary">{m.skills.titleAccent}</span>
            </h2>
            <div
              className="mx-auto mb-4 h-1 w-16 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
            />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {m.skills.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillBlocks.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`glass-card card-hover group rounded-2xl border p-5 ${category.border}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.bgColor} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h3 className="text-base font-bold">
                    {m.skills.categories[category.key]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.06 + i * 0.03 + 0.1,
                      }}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${levelStyles[skill.level].badge}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${levelStyles[skill.level].dot}`}
                      />
                      {skill.name}
                      <span className="opacity-60">
                        · {m.skills.levels[skill.level]}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card mt-9 rounded-2xl border border-border p-7"
          >
            <h3 className="mb-4 text-center text-lg font-bold">
              {m.skills.extrasTitle}{" "}
              <span className="text-primary">{m.skills.extrasTitleAccent}</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {m.skills.extras.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
