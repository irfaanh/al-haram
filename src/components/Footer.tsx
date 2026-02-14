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
    <footer className="relative bg-black text-gray-300 pt-20 md:pt-28 pb-10 md:pb-16 overflow-hidden">
      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[18vw] md:text-[14rem] font-extrabold uppercase text-white/5 select-none pointer-events-none whitespace-nowrap leading-none">
        momentor
      </h1>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
        {/* LOGO + ABOUT (UNCHANGED POSITION) */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
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

          <div className="mt-6">
            <h5 className="text-white font-semibold mb-3">Follow Us</h5>
            <div className="flex items-center gap-4 text-[#BE5103] justify-center md:justify-start">
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

        {/* NAV + SOCIAL WRAPPER */}
        <div className="grid grid-cols-2 gap-10 md:contents">
          {/* NAVIGATION */}
          <div className="md:px-10 text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="text-center md:text-left">
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
        <div className="text-center md:text-left">
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
        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold mb-5">Contact Us</h4>
          <p className="text-sm mb-6">
            Have questions? We’re here to guide you. Reach out to our team
            anytime.
          </p>

          <ul className="space-y-4 text-sm inline-block md:block text-left">
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <span className="p-2 bg-[#BE5103] text-black rounded-full min-w-[32px] flex items-center justify-center">
                <Phone size={14} />
              </span>
              +91 98765 43210
            </li>

            <li className="flex items-center gap-3 justify-center md:justify-start">
              <span className="p-2 bg-[#BE5103] text-black rounded-full min-w-[32px] flex items-center justify-center">
                <Mail size={14} />
              </span>
              hello@momentor.in
            </li>

            <li className="flex items-start gap-3 justify-center md:justify-start">
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
      <div className="relative z-10 mt-16 md:mt-20 border-t border-white/10 pt-6 text-center text-xs text-gray-500 px-6">
        © 2026 Momentor — All Rights Reserved.
      </div>
    </footer>
  );
}
