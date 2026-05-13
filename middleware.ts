import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  // Legal & blog stay without locale prefix
  if (
    pathname.startsWith("/impressum") ||
    pathname.startsWith("/datenschutz") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/og-image")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const first = pathname.split("/")[1];
  if (first && !isLocale(first)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest)$).*)"],
};
