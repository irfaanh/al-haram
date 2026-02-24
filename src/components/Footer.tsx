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
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[18vw] md:text-[14rem] font-extrabold uppercase text-white/[0.03] select-none pointer-events-none whitespace-nowrap leading-none transition-all duration-700">
        momentor
      </h1>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6 lg:gap-8">
        {/* LOGO + ABOUT */}
        <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-start text-left">
          <Link href="/" className="mb-6 -ml-5">
            <Image
              src="/images/log.png"
              alt="Momentor logo"
              width={180}
              height={90}
              className="object-contain"
            />
          </Link>

          <p className="text-sm leading-relaxed max-w-xs text-gray-400">
            Momentor is India’s first education journalism + future-skills
            mentorship platform guiding youth with clarity, skills, and global
            career opportunities.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="text-left col-span-1">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-[#BE5103] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#BE5103] transition-colors">About</Link></li>
            <li><Link href="/courses" className="hover:text-[#BE5103] transition-colors">Courses</Link></li>
            <li><Link href="/journalism" className="hover:text-[#BE5103] transition-colors">Journalism</Link></li>
            <li><Link href="/gallery" className="hover:text-[#BE5103] transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[#BE5103] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="text-left col-span-1">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Social</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-[#BE5103] cursor-pointer transition">Twitter</li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">LinkedIn</li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">Facebook</li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">Instagram</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="text-left col-span-1">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-[#BE5103] cursor-pointer transition">Terms</li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">Privacy</li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">Cookies</li>
            <li className="hover:text-[#BE5103] cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div className="text-left flex flex-col items-start col-span-2 md:col-span-2 lg:col-span-1">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
          <p className="text-sm mb-8 text-gray-400 max-w-sm">
            Have questions? We’re here to guide you. Reach out to our team anytime.
          </p>

          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-4 justify-start group cursor-pointer hover:text-white transition-colors">
              <a href="tel:+919876543210" className="flex items-center gap-4">
                <span className="p-2.5 bg-[#BE5103]/10 text-[#BE5103] rounded-full min-w-[36px] flex items-center justify-center group-hover:bg-[#BE5103] group-hover:text-black transition-all">
                  <Phone size={16} />
                </span>
                +91 98765 43210
              </a>
            </li>

            <li className="flex items-center gap-4 justify-start group cursor-pointer hover:text-white transition-colors">
              <a href="mailto:hello@momentor.in" className="flex items-center gap-4 group-hover:text-white transition-colors">
                <span className="p-2.5 bg-[#BE5103]/10 text-[#BE5103] rounded-full min-w-[36px] flex items-center justify-center group-hover:bg-[#BE5103] group-hover:text-black transition-all">
                  <Mail size={16} />
                </span>
                hello@momentor.in
              </a>
            </li>

            <li className="flex items-start gap-4 justify-start group cursor-pointer hover:text-white transition-colors">
              <a
                href="https://google.com/maps/place/HiLITE+Mall/data=!4m2!3m1!1s0x0:0xc17c381f72b87e02?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group-hover:text-white transition-colors"
              >
                <span className="p-2.5 bg-[#BE5103]/10 text-[#BE5103] rounded-full mt-1 min-w-[36px] flex items-center justify-center group-hover:bg-[#BE5103] group-hover:text-black transition-all">
                  <MapPin size={16} />
                </span>
                <span className="text-left">
                  Hilite Business Park, Palazhi
                  <br />
                  Calicut, Kerala, India
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 mt-16 md:mt-20 border-t border-white/10 pt-10 pb-8 px-6 md:px-10 text-center">
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
