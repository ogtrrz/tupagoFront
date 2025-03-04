import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  // ✅ Retrieve session token from NextAuth
  const token = await getToken({ req: request });

  // ✅ Define protected paths
  const protectedRoutes = ["/form", "/clientes", "/mensajes"];

  // ✅ If trying to access a protected route without a valid session, redirect to /login
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!token) {
      console.log("🔴 No session found. Redirecting to /login...");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // ✅ Allow request to proceed
  return NextResponse.next();
}

// ✅ Ensure middleware applies only to protected routes
export const config = {
  matcher: ["/form/:path*", "/clientes/:path*", "/mensajes/:path*", "/secure/:path*"],
};
