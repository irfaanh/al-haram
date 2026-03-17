"use client";

import { Check, Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Header />
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 py-16 md:py-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/contactusimg.jpg"
          alt="Contact Al Haram Institute"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#33744D]/40 bg-[#33744D]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-white font-semibold">
              GET IN TOUCH
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
            Contact <span className="italic font-serif text-[#33744D]">Us</span>
          </h1>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 text-center text-black">
          Connect with <span className="italic font-serif text-[#33744D] font-normal">Our Institute</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center text-sm md:text-lg leading-relaxed px-4">
          We are here to answer your questions and provide more information about our programs. We welcome parents and students to reach out and learn how we can support your educational journey.
        </p>

        <div className="max-w-7xl mx-auto py-12 md:py-20">
          {/* MAIN CARD */}
          <div className="relative bg-white rounded-[2.5rem] p-6 md:p-16 border border-gray-200 shadow-2xl overflow-hidden">
            {/* Soft Glow Effect */}
            <div className="absolute -bottom-32 -left-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#33744D]/5 blur-[100px] rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-20 relative z-10">
              {/* ================= LEFT SIDE ================= */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-black">
                  Start Your <br className="hidden md:block" />{" "}
                  <span className="text-[#33744D] italic font-serif font-normal">
                    Excellence Journey
                  </span>
                </h3>

                <div className="space-y-6 text-gray-600 mb-10 text-sm md:text-base w-full">
                  <div className="flex items-center gap-4 justify-center md:justify-start group">
                    <span className="bg-[#33744D]/10 p-2 rounded-lg text-[#33744D] group-hover:bg-[#33744D] group-hover:text-white transition-all">
                      <Check size={18} />
                    </span>
                    <p className="font-medium">Integrated Islamic & Modern Education</p>
                  </div>

                  <div className="flex items-center gap-4 justify-center md:justify-start group">
                    <span className="bg-[#33744D]/10 p-2 rounded-lg text-[#33744D] group-hover:bg-[#33744D] group-hover:text-white transition-all">
                      <Check size={18} />
                    </span>
                    <p className="font-medium">Experienced Mentors & Scholars</p>
                  </div>
                </div>

                <div className="w-full mb-8 pt-6 border-t border-gray-100">
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-4 text-center md:text-left">
                    Direct Inquiry
                  </p>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:alharam@gmail.com" className="text-[#33744D] font-bold text-xl md:text-2xl hover:underline tracking-tight">
                      alharam@gmail.com
                    </a>
                    <a href="tel:+917025818313" className="text-black font-bold text-lg hover:text-[#33744D] transition-colors">
                      +91 70258 18313
                    </a>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT SIDE (FORM) ================= */}
              <div className="bg-gray-50/50 p-8 md:p-10 rounded-[2rem] border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#33744D] flex items-center justify-center text-white">
                    <Send size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    Send a Message
                  </h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#33744D] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#33744D] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#33744D] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
                    <textarea
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#33744D] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="
    w-full
    bg-[#33744D]
    text-white
    py-4
    rounded-xl
    font-bold
    tracking-wide
    transition-all duration-300
    hover:bg-[#33744D]/90
    hover:shadow-lg
    hover:-translate-y-1
    cursor-pointer
  "
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CONTACT CARDS */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              title: "Call Us",
              desc: "Talk to our admissions office for guidance.",
              link: "tel:+919645467077",
              label: "+91 96454 67077"
            },
            {
              icon: Mail,
              title: "Email Us",
              desc: "Send us your queries anytime.",
              link: "mailto:alharam@gmail.com",
              label: "ialharam@gmail.com"
            },
            {
              icon: MapPin,
              title: "Visit Us",
              desc: "Come visit our campus and meet our team.",
              link: "#",
              label: "Badriya Purayil, Calicut, Kerala"
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:border-[#33744D] transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#33744D]/5 text-[#33744D] group-hover:bg-[#33744D] group-hover:text-white transition-all">
                <card.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-6">
                {card.desc}
              </p>
              <a href={card.link} className="text-[#33744D] font-bold hover:underline">
                {card.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
