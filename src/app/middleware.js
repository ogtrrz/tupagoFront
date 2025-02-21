import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware is running");

  // ✅ Log the request path for debugging
  console.log("Requested Path:", request.nextUrl.pathname);

  // ✅ Get cookies manually from headers (Edge runtime limitation)
  const cookieHeader = request.headers.get("cookie") || "";
  const authToken = cookieHeader
    .split("; ")
    .find((c) => c.startsWith("auth_token="))
    ?.split("=")[1];

  // ✅ Define protected paths
  const protectedRoutes = ["/form", "/clientes", "/mensajes"];

  // ✅ Check if the request matches a protected route
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    console.log("Protected route accessed:", request.nextUrl.pathname);

    // ✅ Redirect to /login if no auth token is found
    if (!authToken) {
      console.log("No auth token found. Redirecting to /login...");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    console.log("User is authenticated.");
  }

  console.log("Middleware finished execution");
  return NextResponse.next();
}

// ✅ Fix matcher paths to ensure correct middleware execution
export const config = {
  matcher: ["/form/:path*", "/clientes/:path*", "/mensajes/:path*"],
};
