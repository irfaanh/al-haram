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
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#33744D] text-gray-200 pt-16 md:pt-28 pb-8 md:pb-16 overflow-hidden">
      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[18vw] md:text-[14rem] font-extrabold uppercase text-white/[0.03] select-none pointer-events-none whitespace-nowrap leading-none transition-all duration-700">
        al haram
      </h1>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-8">
        {/* LOGO + ABOUT */}
        <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-start text-left">
          <Link href="/" className="mb-2">
            <p className="text-white font-semibold uppercase tracking-widest text-xs">Al Haram Institute</p>
          </Link>

          <p className="text-sm leading-relaxed max-w-xs text-gray-200 mt-5">
            Al Haram Institute is a values-based educational center dedicated to nurturing knowledge, character, and leadership by integrating Islamic teachings with contemporary learning.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="text-left col-span-1">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
            <li><Link href="/insights" className="hover:text-black transition-colors">Insights</Link></li>
            <li><Link href="/gallery" className="hover:text-black transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="text-left col-span-1">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Social</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="https://www.instagram.com/al_haram_institute/" target="_blank" className="hover:text-black transition-colors">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@ALHARAM_INSTITUTE" target="_blank" className="hover:text-black transition-colors">
                YouTube
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/people/AL-Haram-Iipie/pfbid02jtfbhZK8fxjdpixngKP9FfQu6wRNnnCD4deXyAEW8njDr3CdDRpJg9o4ygdyjtp6l/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" className="hover:text-black transition-colors">
                Facebook
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div className="text-left flex flex-col items-start col-span-2 md:col-span-2 lg:col-span-1">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
          <p className="text-sm mb-8 text-gray-300 max-w-sm">
            Have questions? We’re here to guide you. Reach out to our team anytime.
          </p>

          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-4 justify-start group cursor-pointer hover:text-white transition-colors">
              <a href="tel:+917025818313" className="flex items-center gap-4">
                <span className="p-2.5 text-white rounded-full min-w-[36px] flex items-center justify-center group-hover:bg-white hover:text-black  transition-all">
                  <Phone size={16} />
                </span>
                +91 70258 18313
              </a>
            </li>

            <li className="flex items-center gap-4 justify-start group cursor-pointer hover:text-white transition-colors">
              <a href="mailto:alharam@gmail.com" className="flex items-center gap-4 group-hover:text-white transition-colors">
                <span className="p-2.5 text-white rounded-full min-w-[36px] flex items-center justify-center group-hover:bg-white hover:text-black  transition-all">
                  <Mail size={16} />
                </span>
                alharam@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-4 justify-start group cursor-pointer hover:text-white transition-colors">
              <a
                href="https://google.com/maps/place/HiLITE+Mall/data=!4m2!3m1!1s0x0:0xc17c381f72b87e02?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group-hover:text-white transition-colors"
              >
                <span className="p-2.5 text-white rounded-full mt-1 min-w-[36px] flex items-center justify-center group-hover:bg-white hover:text-black transition-all">
                  <MapPin size={16} />
                </span>
                <span className="text-left">
                  Badriya Purayil, Koodathai
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
          <p className="text-gray-200 text-xs md:text-sm uppercase tracking-widest font-medium">
            AL HARAM © 2026 All rights reserved
          </p>

          <div className="flex items-center gap-8 text-gray-300 text-xs md:text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

          <div className="flex items-center gap-6 text-white">
            <Link href="https://www.instagram.com/al_haram_institute/" className="hover:opacity-70 transition-all transform hover:-translate-y-2">
              <Instagram size={20} />
            </Link>
            <Link href="https://www.youtube.com/@ALHARAM_INSTITUTE" className="hover:opacity-70 transition-all transform hover:-translate-y-2">
              <Youtube size={20} />
            </Link>

            <Link href="https://www.facebook.com/people/AL-Haram-Iipie/pfbid02jtfbhZK8fxjdpixngKP9FfQu6wRNnnCD4deXyAEW8njDr3CdDRpJg9o4ygdyjtp6l/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" className="hover:opacity-70 transition-all transform hover:-translate-y-2">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
