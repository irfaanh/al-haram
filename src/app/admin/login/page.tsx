'use client'

import { useActionState } from 'react'
import { login } from './actions'
import { ArrowRight, Loader2 } from 'lucide-react'

const initialState = {
    message: '',
}

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(login, initialState)

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#BE5103] to-[#9a4200] mb-6 shadow-lg shadow-orange-900/20">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Please sign in to your admin account
                    </p>
                </div>

                <form action={formAction} className="mt-8 space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1 block w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:border-[#BE5103] focus:ring-1 focus:ring-[#BE5103] sm:text-sm transition-colors outline-none"
                                placeholder="admin@willowy.in"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1 block w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:border-[#BE5103] focus:ring-1 focus:ring-[#BE5103] sm:text-sm transition-colors outline-none"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {state?.message && (
                        <div className="text-sm text-red-500 text-center bg-red-500/10 p-2 rounded-lg border border-red-500/20">
                            {state.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isPending}
                        className="group relative flex w-full justify-center rounded-lg bg-[#BE5103] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#BE5103]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BE5103] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {isPending ? (
                            <Loader2 className="animate-spin h-5 w-5 text-white" />
                        ) : (
                            <span className="flex items-center gap-2">
                                Sign in
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}
