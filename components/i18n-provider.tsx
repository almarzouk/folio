"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";

type I18nContextValue = {
  locale: Locale;
  messages: Messages;
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  const value = React.useMemo(() => ({ locale, messages }), [locale, messages]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
