import { NextResponse } from "next/server";

export function middleware(request) {
  // ✅ Get cookies manually from headers (Edge runtime limitation)
  // console.log("Middleware 5");

  const cookieHeader = request.headers.get("cookie");
  const authToken = cookieHeader
    ?.split("; ")
    .find((c) => c.startsWith("auth_token="))
    ?.split("=")[1];

  // ✅ Define protected paths
  const protectedRoutes = ["/form", "/clientes", "/mensajes"];

  // ✅ If trying to access a protected route without token, redirect to /login
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    // console.log("Middleware 15");
    if (!authToken) {
      // console.log("Middleware 16");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  // console.log("Middleware 21");
  return NextResponse.next();
}

// ✅ Ensure middleware applies only to protected routes
export const config = {
  matcher: ["/form/:path*", "/clientes/:path*", "/mensajes/:path*"],
};
