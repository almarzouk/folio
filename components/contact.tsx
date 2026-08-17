"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  Download,
} from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { SITE } from "@/lib/site";

export default function Contact() {
  const { locale, messages: m } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const autoresponse = `${m.contact.autoresponseThanks}, ${formData.name}!

${m.contact.autoresponseReceived}

${locale === "de" ? "Ihre Nachricht" : "Your message"}:
"${formData.message}"

${m.contact.autoresponseClosing},
${m.contact.autoresponseSignature}

---
Haselünne, Germany
${SITE.email}
${SITE.phoneDisplay}
${SITE.linkedin}
${SITE.github}`;

    try {
      const response = await fetch("https://formspree.io/f/mrbnbbvo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `${m.contact.formSubjectPrefix} ${formData.subject}`,
          _autoresponse: autoresponse,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert(m.contact.formError);
      }
    } catch {
      alert(m.contact.formError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 dot-pattern opacity-35" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
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
              {m.contact.title}{" "}
              <span className="text-primary">{m.contact.titleAccent}</span>
            </h2>
            <div
              className="mx-auto mb-4 h-1 w-16 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
            />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {m.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="space-y-3"
            >
              {[
                {
                  icon: Mail,
                  title: m.contact.email,
                  content: (
                    <Link
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.email}
                    </Link>
                  ),
                },
                {
                  icon: Phone,
                  title: m.contact.phone,
                  content: (
                    <Link
                      href={SITE.phoneHref}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.phoneDisplay}
                    </Link>
                  ),
                },
                {
                  icon: MapPin,
                  title: m.contact.location,
                  content: (
                    <p className="text-sm text-muted-foreground">
                      {SITE.locationLine}
                      <br />
                      Germany
                    </p>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card card-hover flex gap-3 rounded-2xl border border-border p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-sm font-semibold">{item.title}</p>
                    {item.content}
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-2xl border border-border p-4">
                <p className="mb-2 text-sm font-semibold">{m.contact.social}</p>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      href: SITE.github,
                      Icon: Github,
                      label: "GitHub",
                    },
                    {
                      href: SITE.linkedin,
                      Icon: Linkedin,
                      label: "LinkedIn",
                    },
                  ].map(({ href, Icon, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl border border-primary/20 bg-primary/[0.05] p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  <p className="text-sm font-semibold text-primary">
                    {m.contact.availabilityTitle}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {m.contact.availabilityText}
                </p>
                <a
                  href={SITE.cvPath}
                  download
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:underline"
                >
                  <Download className="h-4 w-4" />
                  {m.contact.cvDownload}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.06,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl border border-border p-6 shadow-lg sm:p-8">
                <h3 className="mb-5 text-lg font-bold sm:text-xl">
                  {m.contact.formTitle}
                </h3>
                {isSubmitted ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/12">
                      <CheckCircle2 className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold">
                      {m.contact.successTitle}
                    </h4>
                    <p className="text-muted-foreground">{m.contact.successBody}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          {m.contact.name} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder={m.contact.placeholders.name}
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          {m.contact.emailLabel} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={m.contact.placeholders.email}
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        {m.contact.subject} *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder={m.contact.placeholders.subject}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        {m.contact.message} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={m.contact.placeholders.message}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-xl btn-primary shadow-md"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? m.contact.submitting : m.contact.submit}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      * {m.contact.privacyNote}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
