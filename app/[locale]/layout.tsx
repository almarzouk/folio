import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/components/i18n-provider";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const messages = getMessages(params.locale as Locale);
  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        de: "/de",
        en: "/en",
        "x-default": "/de",
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: `/${params.locale}`,
      locale: params.locale === "de" ? "de_DE" : "en_US",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const messages = getMessages(locale);
  return (
    <I18nProvider locale={locale} messages={messages}>
      {children}
    </I18nProvider>
  );
}
