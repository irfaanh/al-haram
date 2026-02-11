"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 pt-32 pb-16 overflow-hidden">
      <h1
        className="
    absolute bottom-0 left-1/2 -translate-x-1/2
    text-[10rem] md:text-[14rem] lg:text-[16rem]
    font-extrabold uppercase
    text-white/5 select-none pointer-events-none
    whitespace-nowrap
  "
      >
        momentor
      </h1>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* COMPANY INFO */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Momentor logo"
            width={140}
            height={50}
            className="mb-4 object-contain"
          />

          <p className="text-sm leading-relaxed max-w-xs">
            Guiding students toward global education opportunities with expert
            counselling, trusted universities, and end-to-end support.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="px-24">
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-[#BE5103] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#BE5103] transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#BE5103] transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#BE5103] transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#BE5103] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>Study Abroad Counselling</li>
            <li>University Selection</li>
            <li>Visa Assistance</li>
            <li>Application Support</li>
            <li>Pre-Departure Guidance</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full bg-[#BE5103] hover:bg-[#BE5103]/50 transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full bg-[#BE5103] hover:bg-[#BE5103]/50 transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-[#BE5103] hover:bg-[#BE5103]/50 transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full bg-[#BE5103] hover:bg-[#BE5103]/50 transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 mt-20 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} momentor. All rights reserved.
      </div>
    </footer>
  );
}
