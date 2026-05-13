import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "@/components/google-analytics";
import { LangHtml } from "@/components/lang-html";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jumaa-portfolio.vercel.app"),
  title: {
    default: "Jumaa Almarzouk | Fullstack-Webentwickler",
    template: "%s",
  },
  description:
    "Portfolio von Jumaa Almarzouk — Fullstack-Webentwickler (React, Next.js, WordPress). Standort: Haselünne, Deutschland.",
  keywords: [
    "Fullstack Entwickler",
    "Webentwickler",
    "React",
    "Next.js",
    "WordPress",
    "Stellensuche",
    "Festanstellung",
    "Haselünne",
    "Deutschland",
  ],
  authors: [{ name: "Jumaa Almarzouk" }],
  creator: "Jumaa Almarzouk",
  publisher: "Jumaa Almarzouk",
  alternates: {
    canonical: "/de",
    languages: { de: "/de", en: "/en", "x-default": "/de" },
  },
  openGraph: {
    siteName: "Jumaa Almarzouk",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Jumaa Almarzouk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LangHtml />
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
