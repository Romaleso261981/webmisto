import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLanguages = ["uk", "ru", "en"];
const defaultLanguage = "uk";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Пропускаємо статичні файли та API роути
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Перевіряємо, чи вже є мова в URL
  const pathnameHasLanguage = supportedLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  // Якщо це кореневий шлях або шлях без мови
  if (!pathnameHasLanguage) {
    // Визначаємо мову з Accept-Language заголовка
    const acceptLanguage = request.headers.get("accept-language");
    let detectedLanguage = defaultLanguage;

    if (acceptLanguage) {
      // Простий парсинг Accept-Language
      const languages = acceptLanguage
        .split(",")
        .map((lang) => lang.split(";")[0].trim().toLowerCase());

      // Перевіряємо підтримувані мови
      for (const lang of languages) {
        if (lang.startsWith("uk") || lang.startsWith("uk-")) {
          detectedLanguage = "uk";
          break;
        } else if (lang.startsWith("ru") || lang.startsWith("ru-")) {
          detectedLanguage = "ru";
          break;
        } else if (lang.startsWith("en") || lang.startsWith("en-")) {
          detectedLanguage = "en";
          break;
        }
      }
    }

    // Робимо редирект на URL з мовою
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${detectedLanguage}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
