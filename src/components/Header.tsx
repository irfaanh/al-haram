"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-16 md:h-14 flex items-center justify-between bg-[#33744D] backdrop-blur-md shadow-lg rounded-b-2xl md:rounded-full mt-0 md:mt-2 relative border-b md:border-none border-white/10">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <p className="text-white text-2xl font-bold tracking-tight">Al HARAM</p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative px-5 py-2 text-sm font-semibold transition-all duration-300
                  after:content-[''] after:absolute after:left-5 after:right-5 after:-bottom-1
                  after:h-[2px] after:bg-white after:transition-all after:duration-300
                  ${isActive
                    ? "text-white after:w-auto"
                    : "text-gray-100/80 hover:text-white after:w-0 hover:after:w-auto"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-[#33744D] backdrop-blur-2xl z-[9998] md:hidden px-6 pt-10 pb-20 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-5 duration-500 overflow-y-auto">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 rounded-2xl text-left font-bold text-xl transition-all duration-300 border border-transparent ${isActive
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-100 hover:bg-white/5 active:scale-[0.98]"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-10 border-t border-white/10 flex flex-col items-center gap-6">
            <p className="text-gray-200/50 text-[10px] uppercase tracking-[0.4em] font-bold">Connect with us</p>
            <div className="flex gap-8 text-gray-100">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white font-bold underline underline-offset-8">Contact Us</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
