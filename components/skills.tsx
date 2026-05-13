"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Palette,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useI18n } from "@/components/i18n-provider";

const skillBlocks = [
  {
    key: "frontend" as const,
    icon: Code2,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    border: "border-violet-500/20",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    key: "backend" as const,
    icon: Server,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    border: "border-blue-500/20",
    skills: ["Node.js", "PHP", "REST APIs", "Express.js", "Laravel"],
  },
  {
    key: "databases" as const,
    icon: Database,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    key: "cmsDevops" as const,
    icon: Wrench,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: ["WordPress", "Git & GitHub", "Docker", "AWS", "CI/CD"],
  },
  {
    key: "design" as const,
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    border: "border-pink-500/20",
    skills: ["Figma", "Adobe XD", "Responsive Design", "Accessibility"],
  },
  {
    key: "mobile" as const,
    icon: Smartphone,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    skills: [
      "Mobile-First Design",
      "Progressive Web Apps",
      "Cross-Browser Testing",
    ],
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
                      key={skill}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.28,
                        delay: index * 0.06 + i * 0.03 + 0.15,
                      }}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${category.bgColor} ${category.color} ${category.border}`}
                    >
                      {skill}
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
