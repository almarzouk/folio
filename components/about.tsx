"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Code2,
  GraduationCap,
  Languages,
  MapPin,
  Calendar,
} from "lucide-react";
import { useI18n } from "@/components/i18n-provider";

const highlightIcons = [Code2, Briefcase, GraduationCap, Languages];
const highlightStyles = [
  { color: "text-violet-500", bg: "bg-violet-500/10" },
  { color: "text-blue-500", bg: "bg-blue-500/10" },
  { color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

export default function About() {
  const { messages: m } = useI18n();
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-secondary/25" />
      <div className="section-rule absolute left-0 right-0 top-0" />
      <div className="section-rule absolute bottom-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
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
              {m.about.title}{" "}
              <span className="text-primary">{m.about.titleAccent}</span>
            </h2>
            <div
              className="mx-auto h-1 w-16 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
            />
          </motion.div>

          <div className="space-y-14" ref={containerRef}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="glass-card space-y-4 rounded-2xl border border-border p-7"
            >
              <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {m.about.locationLine}
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {m.about.bio1}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {m.about.bio2}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {m.about.facts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {m.about.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Code2;
                const style = highlightStyles[index] ?? highlightStyles[0];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1] as [
                        number,
                        number,
                        number,
                        number,
                      ],
                    }}
                    className="glass-card card-hover flex gap-4 rounded-2xl border border-border p-5"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.bg}`}
                    >
                      <Icon className={`h-5 w-5 ${style.color}`} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mb-8 text-center text-2xl font-bold"
              >
                {m.about.timelineTitle}{" "}
                <span className="text-primary">
                  {m.about.timelineTitleAccent}
                </span>
              </motion.h3>

              <div className="relative">
                <div className="absolute bottom-0 left-4 top-0 w-px bg-primary/35 sm:left-5" />

                <div className="space-y-5">
                  {m.about.timeline.map((item, index) => (
                    <motion.div
                      key={`${item.period}-${item.role}`}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.55,
                        delay: 0.28 + index * 0.09,
                        ease: [0.16, 1, 0.3, 1] as [
                          number,
                          number,
                          number,
                          number,
                        ],
                      }}
                      className="relative pl-12 sm:pl-14"
                    >
                      <div
                        className={`absolute left-2.5 top-3.5 h-3.5 w-3.5 rounded-full border-2 border-primary sm:left-3.5 ${
                          item.current ? "bg-primary" : "bg-background"
                        }`}
                      >
                        {item.current && (
                          <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-35" />
                        )}
                      </div>

                      <div className="glass-card card-hover rounded-2xl border border-border p-5">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                            <Calendar className="h-3 w-3" />
                            {item.period}
                          </span>
                          {item.current && (
                            <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              ● {m.about.currentLabel}
                            </span>
                          )}
                        </div>
                        <h4 className="mb-1 text-base font-semibold">{item.role}</h4>
                        <p className="mb-2 text-sm font-medium text-primary/85">
                          {item.company}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
