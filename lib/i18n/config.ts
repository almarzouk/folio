export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export function isLocale(s: string): s is Locale {
  return locales.includes(s as Locale);
}
