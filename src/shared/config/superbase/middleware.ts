import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { authRoutes, ELink, publicRoutes, ROUTES } from "@shared/config/routes";

export const updateSession = async (request: NextRequest) => {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
        },
      },
    }
  );

  // refreshing the auth token
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !publicRoutes.includes(request.nextUrl.pathname as ELink)) {
    return NextResponse.redirect(new URL(ROUTES.home, request.url));
  }

  if (user && authRoutes.includes(request.nextUrl.pathname as ELink)) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, request.url));
  }

  return supabaseResponse;
};
