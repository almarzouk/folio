"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/i18n-provider";
import { withLocale } from "@/lib/i18n/paths";
import { LocaleSwitcher } from "@/components/locale-switcher";

export default function Header() {
  const { locale, messages: m } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navigation = useMemo(
    () => [
      { name: m.nav.home, href: `${withLocale(locale, "/")}#hero` },
      { name: m.nav.about, href: `${withLocale(locale, "/")}#about` },
      { name: m.nav.skills, href: `${withLocale(locale, "/")}#skills` },
      { name: m.nav.projects, href: `${withLocale(locale, "/")}#projects` },
      { name: m.nav.blog, href: "/blog" },
      { name: m.nav.contact, href: `${withLocale(locale, "/")}#contact` },
    ],
    [locale, m.nav]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={withLocale(locale, "/")}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl btn-primary shadow-sm transition-shadow group-hover:shadow-md">
            <span className="text-sm font-bold text-white">JA</span>
          </div>
          <span className="hidden text-sm font-semibold text-foreground/80 transition-colors group-hover:text-foreground sm:block">
            Jumaa Almarzouk
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {navigation.map((item) => {
            const sectionId = item.href.split("#")[1] ?? "";
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="-z-10 absolute inset-0 rounded-lg border border-primary/15 bg-primary/[0.07]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-lg btn-primary shadow-sm">
            <Link href={`${withLocale(locale, "/")}#contact`}>
              {m.nav.ctaContact}
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <LocaleSwitcher className="scale-90" />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.12 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-40 overflow-hidden md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-5">
              <div className="flex flex-col gap-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center rounded-xl border border-transparent px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:border-primary/20 hover:bg-primary/[0.06] hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: navigation.length * 0.04 + 0.04,
                    duration: 0.25,
                  }}
                  className="pt-3"
                >
                  <Button
                    asChild
                    className="w-full rounded-xl btn-primary shadow-md"
                    size="lg"
                  >
                    <Link
                      href={`${withLocale(locale, "/")}#contact`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {m.nav.ctaContact}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
