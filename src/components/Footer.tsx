"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 pt-28 pb-16 overflow-hidden">
      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10rem] md:text-[14rem] font-extrabold uppercase text-white/10 select-none pointer-events-none whitespace-nowrap">
        momentor
      </h1>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* LOGO + ABOUT (UNCHANGED POSITION) */}
        <div className="md:col-span-1">
          <Image
            src="/images/log.png"
            alt="Momentor logo"
            width={210}
            height={110}
            className="mb-0 object-contain"
          />

          <p className="text-sm leading-relaxed max-w-xs mt-2 px-1 text-justify">
            Momentor is India’s first education journalism + future-skills
            mentorship platform guiding youth with clarity, skills, and global
            career opportunities.
          </p>

          <div className="mt-6">
            <h5 className="text-white font-semibold mb-3">Follow Us</h5>
            <div className="flex items-center gap-4 text-[#BE5103]">
              <Instagram
                className="cursor-pointer hover:opacity-70  transition-transform duration-200 ease-out
    hover:-translate-y-2"
              />
              <Facebook
                className="cursor-pointer hover:opacity-70  transition-transform duration-200 ease-out
    hover:-translate-y-2"
              />
              <Twitter
                className="cursor-pointer hover:opacity-70  transition-transform duration-200 ease-out
    hover:-translate-y-2"
              />
              <Linkedin
                className="cursor-pointer hover:opacity-70  transition-transform duration-200 ease-out
    hover:-translate-y-2"
              />
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="px-10">
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
              <Link href="/courses" className="hover:text-[#BE5103] transition">
                Courses
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

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-5">Social</h4>
          <ul className="space-y-3 text-sm">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="text-white font-semibold mb-5">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-5">Contact Us</h4>
          <p className="text-sm mb-6">
            Have questions? We’re here to guide you. Reach out to our team
            anytime.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="p-2 bg-[#BE5103] text-black rounded-full">
                <Phone size={14} />
              </span>
              +91 98765 43210
            </li>

            <li className="flex items-center gap-3">
              <span className="p-2 bg-[#BE5103] text-black rounded-full">
                <Mail size={14} />
              </span>
              hello@momentor.in
            </li>

            <li className="flex items-start gap-3">
              <span className="p-2 bg-[#BE5103] text-black rounded-full mt-1">
                <MapPin size={14} />
              </span>
              Hilite Business Park
              <br />
              Palazhi, Calicut
              <br />
              Kerala, India
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 mt-20 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        © 2026 Momentor — All Rights Reserved.
      </div>
    </footer>
  );
}
