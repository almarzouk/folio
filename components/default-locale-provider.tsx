"use client";

import { I18nProvider } from "@/components/i18n-provider";
import { defaultLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

/** German copy for routes outside `/[locale]` (blog, legal). */
export function DefaultLocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nProvider locale={defaultLocale} messages={getMessages(defaultLocale)}>
      {children}
    </I18nProvider>
  );
}
