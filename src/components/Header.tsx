"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Journalism", href: "/journalism" },
    { name: "About Us", href: "/about" },
    {
      name: "Courses",
      href: "/courses",
      subItems: [
        { name: "Global Student Readiness (GSRP)", href: "/courses/gsrp" },
        { name: "Global Career Readiness (GCRP)", href: "/courses/gcrp" },
        { name: "Global Hospitality & Readiness Training (GHRT)", href: "/courses/ghrt" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-16 md:h-14 flex items-center justify-between bg-black/80 backdrop-blur-md shadow-lg rounded-b-2xl md:rounded-full mt-0 md:mt-2 relative border-b md:border-none border-white/10">
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
            const hasSubItems = item.subItems && item.subItems.length > 0;

            if (hasSubItems) {
              return (
                <div
                  key={item.name}
                  className="relative group py-2"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`
                      relative px-5 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1
                      after:content-[''] after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:bg-[#BE5103] after:transition-all after:duration-300
                      ${isActive
                        ? "text-[#BE5103] after:w-full"
                        : "text-gray-300 group-hover:text-[#BE5103] after:w-0 group-hover:after:w-full"
                      }
                    `}
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isCoursesOpen ? "rotate-180" : ""}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={`
                      absolute top-full left-1/2 -translate-x-1/2 w-72 pt-4
                      transition-all duration-300 ease-out z-[10000]
                      ${isCoursesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                    `}
                  >
                    <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-3 flex flex-col gap-1">
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

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
        <div className="fixed inset-0 top-16 bg-black/95 backdrop-blur-2xl z-[9998] md:hidden px-6 pt-10 pb-20 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-5 duration-500 overflow-y-auto">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <div key={item.name} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Link
                      href={item.href}
                      onClick={() => !hasSubItems && setIsOpen(false)}
                      className={`flex-1 px-6 py-4 rounded-2xl text-left font-bold text-xl transition-all duration-300 border border-transparent ${isActive
                        ? "bg-[#BE5103] text-white shadow-[0_10px_30px_rgba(190,81,3,0.3)]"
                        : "text-gray-100 hover:bg-white/5 active:scale-[0.98]"
                        }`}
                    >
                      {item.name}
                    </Link>
                    {hasSubItems && (
                      <button
                        onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
                        className="p-4 rounded-2xl bg-white/5 text-gray-300"
                      >
                        <ChevronDown size={24} className={`transition-transform duration-300 ${isMobileSubOpen ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>

                  {hasSubItems && isMobileSubOpen && (
                    <div className="grid grid-cols-1 gap-2 mt-1 px-2 border-l-2 border-[#BE5103]/20 ml-6 animate-in fade-in slide-in-from-left-2 duration-300">
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="px-6 py-3.5 text-[15px] font-semibold text-gray-400 hover:text-[#BE5103] active:text-[#BE5103] transition-colors"
                        >
                          → {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-auto pt-10 border-t border-white/10 flex flex-col items-center gap-6">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold">Connect with us</p>
            <div className="flex gap-8 text-gray-300">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[#BE5103] font-bold underline underline-offset-8">Contact Us</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
