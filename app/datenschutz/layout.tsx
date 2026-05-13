import { DefaultLocaleProvider } from "@/components/default-locale-provider";

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLocaleProvider>{children}</DefaultLocaleProvider>;
}
