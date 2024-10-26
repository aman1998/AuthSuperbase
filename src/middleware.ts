import { type NextRequest } from "next/server";

import { updateSession } from "@shared/config/superbase/middleware";

export const middleware = async (request: NextRequest) => await updateSession(request);

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
