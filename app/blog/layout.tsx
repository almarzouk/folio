import { JetBrains_Mono } from "next/font/google";
import { DefaultLocaleProvider } from "@/components/default-locale-provider";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-blog-mono",
});

export default function BlogRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultLocaleProvider>
      <div className={jetbrains.variable}>{children}</div>
    </DefaultLocaleProvider>
  );
}
