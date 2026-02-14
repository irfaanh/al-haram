"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Image as ImageIcon, Settings, Menu, X } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Courses", href: "/admin/courses", icon: BookOpen },
        { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            <button
                className="md:hidden fixed top-4 right-4 z-[90] p-2 bg-[#BE5103] text-white rounded-lg shadow-lg"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>

            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside className={`fixed left-0 top-0 z-[60] h-screen w-64 border-r border-white/10 bg-black/95 text-white transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="flex h-full flex-col px-3 py-4 md:px-2">
                    <Link href="/admin" className="mb-8 flex items-center gap-2 px-2" onClick={() => setIsMobileOpen(false)}>
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#BE5103] text-sidebar-primary-foreground">
                            <LayoutDashboard className="size-4" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Admin Panel</span>
                    </Link>

                    <div className="flex flex-1 flex-col gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-white/10 ${isActive ? "bg-[#BE5103] text-white hover:bg-[#BE5103]/90" : "text-gray-400"
                                        }`}
                                >
                                    <Icon className="size-4" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10 px-2">
                        <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                            Return to Site
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
