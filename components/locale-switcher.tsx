"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const active: Locale =
    pathname === "/en" || pathname.startsWith("/en/")
      ? "en"
      : pathname === "/de" || pathname.startsWith("/de/")
        ? "de"
        : "de";

  const switchTo = (next: Locale) => {
    if (next === active) return;
    if (
      pathname.startsWith("/blog") ||
      pathname.startsWith("/impressum") ||
      pathname.startsWith("/datenschutz")
    ) {
      router.push(`/${next}`);
      return;
    }
    let rest = pathname.replace(/^\/(de|en)/, "") || "/";
    if (!rest.startsWith("/")) rest = `/${rest}`;
    if (rest === "/") router.push(`/${next}`);
    else router.push(`/${next}${rest}`);
  };

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border/80 bg-muted/40 p-0.5 text-xs font-medium",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors min-w-[2.25rem]",
            active === loc
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
