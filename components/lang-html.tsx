"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";

/** Syncs `<html lang>` with the active locale route. */
export function LangHtml() {
  const pathname = usePathname();
  useEffect(() => {
    const seg = pathname.split("/").filter(Boolean)[0];
    document.documentElement.lang = isLocale(seg) ? seg : "de";
  }, [pathname]);
  return null;
}
