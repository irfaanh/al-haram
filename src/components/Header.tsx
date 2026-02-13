"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-95 h-14 flex items-center justify-between bg-black backdrop-blur-md  shadow-lg rounded-full mt-2 relative">
        {/* LOGO (LEFT ONLY) */}
        <Link href="/" className="absolute left-6 flex items-center">
          <Image
            src="/images/logos.png"
            alt="Logo"
            width={200}
            height={100}
            priority
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
  ${
    isActive
      ? "text-[#BE5103] after:w-full"
      : "text-brand-grey hover:text-[#BE5103] after:w-0 hover:after:w-full"
  }
`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4"></div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-[2rem] shadow-xl border border-gray-100 p-4 md:hidden flex flex-col gap-2 overflow-hidden animate-fade-in-up">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-5 py-3 rounded-xl text-center font-bold text-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#B8860B]/10 text-[#B8860B]"
                    : "text-brand-grey hover:text-brand-black hover:bg-gray-50"
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
