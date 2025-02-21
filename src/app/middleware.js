// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const authToken = request.cookies.get("auth_token")?.value; // Get token from cookies
  
//   // Define protected paths (folder)
//   const protectedRoutes = ["/dashboard", "/profile", "/settings"]; // Modify as needed

//   if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
//     if (!authToken) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   return NextResponse.next();
// }

// // Apply middleware to specific routes
// export const config = {
//   matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
// };
