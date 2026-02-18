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
    <footer className="relative bg-black text-gray-300 pt-16 md:pt-28 pb-8 md:pb-16 overflow-hidden">
      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] md:text-[14rem] font-extrabold uppercase text-white/5 select-none pointer-events-none whitespace-nowrap leading-none">
        momentor
      </h1>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
        {/* LOGO + ABOUT (UNCHANGED POSITION) */}
        <div className="md:col-span-1 flex flex-col items-start text-left">
          <Image
            src="/images/log.png"
            alt="Momentor logo"
            width={200}
            height={100}
            className="mb-4 object-contain"
          />

          <p className="text-sm leading-relaxed max-w-xs mt-2">
            Momentor is India’s first education journalism + future-skills
            mentorship platform guiding youth with clarity, skills, and global
            career opportunities.
          </p>
        </div>

        {/* NAV + SOCIAL WRAPPER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:contents">
          {/* NAVIGATION */}
          <div className="md:px-10 text-left">
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#BE5103] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#BE5103] transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-[#BE5103] transition-colors duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#BE5103] transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#BE5103] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="text-left">
            <h4 className="text-white font-semibold mb-5">Social</h4>
            <ul className="space-y-3 text-sm">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        {/* LEGAL */}
        <div className="text-left">
          <h4 className="text-white font-semibold mb-5">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#BE5103] cursor-pointer transition">
              Terms
            </li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">
              Privacy
            </li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">
              Cookies
            </li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-left">
          <h4 className="text-white font-semibold mb-5">Contact Us</h4>
          <p className="text-sm mb-6">
            Have questions? We’re here to guide you. Reach out to our team
            anytime.
          </p>

          <ul className="space-y-4 text-sm text-left">
            <li className="flex items-center gap-3 justify-start">
              <span className="p-2 bg-[#BE5103] text-black rounded-full min-w-[32px] flex items-center justify-center">
                <Phone size={14} />
              </span>
              +91 98765 43210
            </li>

            <li className="flex items-center gap-3 justify-start">
              <span className="p-2 bg-[#BE5103] text-black rounded-full min-w-[32px] flex items-center justify-center">
                <Mail size={14} />
              </span>
              hello@momentor.in
            </li>

            <li className="flex items-start gap-3 justify-start">
              <span className="p-2 bg-[#BE5103] text-black rounded-full mt-1 min-w-[32px] flex items-center justify-center">
                <MapPin size={14} />
              </span>
              <span>
                Hilite Business Park
                <br />
                Palazhi, Calicut
                <br />
                Kerala, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 mt-16 md:mt-20 border-t border-white/10 pt-10 pb-8 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-medium">
            MOMENTOR © 2026 All rights reserved
          </p>

          <div className="flex items-center gap-8 text-gray-400 text-xs md:text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

          <div className="flex items-center gap-6 text-[#BE5103]">
            <Link href="#" className="hover:opacity-70 transition-all transform hover:-translate-y-2">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-all transform hover:-translate-y-2">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-all transform hover:-translate-y-2">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-all transform hover:-translate-y-2">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
