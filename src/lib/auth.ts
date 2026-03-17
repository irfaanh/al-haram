import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.SESSION_SECRET || 'secret_key_change_me_in_prod';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1d') // Session expires in 1 day
        .sign(key)
}

export async function decrypt(input: string): Promise<any> {
    try {
        const { payload } = await jwtVerify(input, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {
        return null;
    }
}

export async function login(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    // Hardcoded credentials as requested
    if (email === 'admin@willowy.in' && password === 'Admin@123') {
        const user = { email, name: 'Admin' };

        // Create the session
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const session = await encrypt({ user, expires });

        // Save the session in a cookie
        (await cookies()).set('session', session, { expires, httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' });

        return true;
    }

    return false;
}

export async function logout() {
    // Destroy the session
    (await cookies()).set('session', '', { expires: new Date(0) });
}

export async function getSession() {
    const session = (await cookies()).get('session')?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    if (!session) return;

    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    if (!parsed) return;

    parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
    });
    return res;
}
