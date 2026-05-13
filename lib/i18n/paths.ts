import type { Locale } from "./config";

/** Prefix path with locale segment (home is `/de` or `/en`). */
export function withLocale(locale: Locale, path: string): string {
  if (!path || path === "/") return `/${locale}`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}
