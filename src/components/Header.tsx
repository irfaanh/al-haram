"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-14 flex items-center justify-between bg-black/80 backdrop-blur-md shadow-lg rounded-b-3xl md:rounded-full mt-0 md:mt-2 relative border-b md:border-none border-white/10">
        {/* LOGO (LEFT ONLY) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos.png"
            alt="Logo"
            width={160}
            height={80}
            priority
            className="w-32 md:w-48 h-auto"
          />
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
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:bg-[#BE5103] after:transition-all after:duration-300
  ${isActive
                    ? "text-[#BE5103] after:w-full"
                    : "text-gray-300 hover:text-[#BE5103] after:w-0 hover:after:w-full"
                  }
`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-5 py-4 rounded-xl text-center font-bold text-lg transition-all duration-200 border border-transparent ${isActive
                    ? "bg-[#BE5103]/20 text-[#BE5103] border-[#BE5103]/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
