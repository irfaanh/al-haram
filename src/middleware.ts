import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decrypt, updateSession } from './lib/auth'
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Define protected routes
    const isProtected = path.startsWith('/admin') && !path.startsWith('/admin/login')

    // 1. Decrypt the session from the cookie
    const cookie = (await cookies()).get('session')?.value
    const session = cookie ? await decrypt(cookie) : null

    // 2. Redirect to /login if the user is not authenticated
    if (isProtected && !session?.user) {
        return NextResponse.redirect(new URL('/admin/login', request.nextUrl))
    }

    // 3. Redirect to /admin if the user is authenticated and tries to access login page
    if (path.startsWith('/admin/login') && session?.user) {
        return NextResponse.redirect(new URL('/admin', request.nextUrl))
    }

    // 4. Update session expiry if valid
    if (session?.user && !path.startsWith('/api')) {
        // await updateSession(request); // Optional: rolling session
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
