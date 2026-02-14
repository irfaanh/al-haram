"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Image as ImageIcon, Settings, Menu, X, LogOut, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const Sidebar = () => {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Prevent scrolling when sidebar is open on mobile
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileOpen]);

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Courses", href: "/admin/courses", icon: BookOpen },
        { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-900/50 backdrop-blur-md border border-white/10 text-white rounded-lg shadow-lg hover:bg-zinc-800 transition-colors"
                onClick={() => setIsMobileOpen(true)}
            >
                <Menu className="size-6" />
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm md:hidden transition-opacity"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed left-0 top-0 z-[70] h-screen w-72 border-r border-white/10 bg-zinc-950 text-white transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col shadow-2xl md:shadow-none ${isMobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6">
                    <Link href="/admin" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
                        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#BE5103] to-[#9a4200] text-white shadow-lg shadow-orange-900/20">
                            <LayoutDashboard className="size-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight leading-none">Admin Panel</span>
                            <span className="text-xs text-gray-500 font-medium mt-1">Momentor</span>
                        </div>
                    </Link>
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="md:hidden p-1 text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="size-6" />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                    <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Main Menu</p>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all group ${isActive
                                        ? "bg-white/10 text-white shadow-inner"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <Icon className={`size-5 transition-colors ${isActive ? "text-[#BE5103]" : "text-gray-500 group-hover:text-gray-300"}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-white/10 bg-black/20">
                    <Link
                        href="/"
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all group"
                    >
                        <ArrowLeft className="size-5 text-gray-500 group-hover:text-gray-300" />
                        Back to Website
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
