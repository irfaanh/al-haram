'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { SignJWT } from 'jose'

const secretKey = process.env.SESSION_SECRET || 'secret_key_change_me_in_prod';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(key)
}

export async function login(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email === 'admin@willowy.in' && password === 'Admin@123') {
        const user = { email, name: 'Admin' };
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const session = await encrypt({ user, expires });

        (await cookies()).set('session', session, {
            expires,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/'
        });

        redirect('/admin')
    }

    return { message: 'Invalid credentials' }
}

export async function logout() {
    (await cookies()).set('session', '', { expires: new Date(0) });
    redirect('/admin/login');
}
