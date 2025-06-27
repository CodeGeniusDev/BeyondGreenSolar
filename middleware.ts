import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { IS_PAYMENT_DONE } from './config/site';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Skip if payment is done or if we're already on the offline page
  if (IS_PAYMENT_DONE || request.nextUrl.pathname === '/offline') {
    return NextResponse.next();
  }

  // Redirect to offline page if payment is not done
  return NextResponse.redirect(new URL('/offline', request.url));
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
