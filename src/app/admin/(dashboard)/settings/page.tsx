import { Save, User, Lock, Bell, Globe } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-gray-400">Manage your account and preferences.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Sidebar for Settings */}
                <div className="flex flex-col gap-2 relative">
                    <div className="sticky top-4">
                        {["Profile", "Account", "Notifications", "Appearance"].map((item) => (
                            <button
                                key={item}
                                className={`flex items-center gap-2 w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${item === "Profile"
                                        ? "bg-[#BE5103] text-white"
                                        : "text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {item === "Profile" && <User className="h-4 w-4" />}
                                {item === "Account" && <Lock className="h-4 w-4" />}
                                {item === "Notifications" && <Bell className="h-4 w-4" />}
                                {item === "Appearance" && <Globe className="h-4 w-4" />}
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="col-span-2 space-y-6">
                    <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
                        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">First Name</label>
                                    <input
                                        type="text"
                                        className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE5103] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Last Name</label>
                                    <input
                                        type="text"
                                        className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE5103] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email Address</label>
                                <input
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE5103] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="john.doe@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Bio</label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE5103] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>

                            <div className="flex justify-end pt-4">
                                <button className="flex items-center gap-2 rounded-lg bg-[#BE5103] px-4 py-2 font-medium text-white hover:bg-[#BE5103]/90 transition-colors">
                                    <Save className="h-4 w-4" />
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
