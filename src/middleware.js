import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const hasSearchParams = search.includes("q=") || search.includes("category=");
  const isPageNavigation = request.headers.get("sec-fetch-dest") === "document";

  // On a full page navigation to the homepage, if search params exist,
  // redirect to the clean URL before the page is ever rendered.
  if (pathname === "/" && hasSearchParams && isPageNavigation) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Only run this middleware on requests to the homepage.
export const config = {
  matcher: "/",
};