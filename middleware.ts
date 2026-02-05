import { type NextRequest, NextResponse } from "next/server"
import { updateSession } from "@/lib/supabase/proxy"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Update session for all requests
  const response = await updateSession(request)

  // Check if this is an admin route
  if (pathname.startsWith("/admin")) {
    // Allow access to admin login page
    if (pathname === "/admin/login") {
      return response
    }

    // For other admin routes, we'll check auth in the layout
    // The middleware just ensures the session is refreshed
  }

  // Add security headers
  const headers = new Headers(response.headers)
  headers.set("X-Frame-Options", "DENY")
  headers.set("X-Content-Type-Options", "nosniff")
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  )

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
    headers,
  })
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
