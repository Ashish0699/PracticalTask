import { NextRequest, NextResponse } from "next/server";
import { PAGE_SLUG } from "./app/_libs/constant";
import { cookies } from "next/headers";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|manifest.webmanifest|sw|workbox).*)",
  ],
};
export async function readCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value;
}

export const middleware = async (req: NextRequest) => {
  const authCookie: string | null | undefined = await readCookie(
    "x-session-token"
  );

  const pathname = req.nextUrl.pathname;

  const isPublicPage =
    pathname === PAGE_SLUG.HOME ||
    pathname === PAGE_SLUG.SIGNIN ||
    pathname === PAGE_SLUG.SIGNUP;

  if (authCookie) {
    if (isPublicPage) {
      const url = req.nextUrl.clone();
      url.pathname = PAGE_SLUG.DASHBOARD;
      return NextResponse.redirect(url);
    }
  } else {
    const redirectUrls = [PAGE_SLUG.SIGNIN];

    if (
      redirectUrls.indexOf(pathname as string) === -1 &&
      !pathname.startsWith(PAGE_SLUG.SIGNUP)
    ) {
      const url = req.nextUrl.clone();
      url.pathname = PAGE_SLUG.SIGNIN;
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
};
