"use client";

import { Check, Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 py-16 md:py-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact.jpg')" }}
        />

        {/* Dark Overlay (same intensity as reference) */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#BE5103]/40 bg-[#BE5103]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#BE5103] font-semibold">
              GET IN TOUCH
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Contact <span className="italic font-serif text-[#BE5103]">Us</span>
          </h1>
        </div>
      </section>
      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4 px-4 text-center">
          Let’s Start Your{" "}
          <span className="italic font-serif text-[#BE5103]">
            Study Abroad Journey
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-center text-sm md:text-lg leading-relaxed px-4">
          Connect with our expert advisors for personalised guidance on
          university selection, applications, scholarships, and visa support.
          Your global education journey begins with the right advice.
        </p>
        <div className="max-w-7xl mx-auto py-12 md:py-20">
          {/* MAIN CARD */}
          <div className="relative bg-[#111] rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 border border-white/10 overflow-hidden">
            {/* LEFT GLOW EFFECT (Theme Color) */}
            <div className="absolute -bottom-32 -left-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#BE5103] opacity-30 blur-[100px] md:blur-[160px] rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 relative z-10">
              {/* ================= LEFT SIDE ================= */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                  Let’s Plan Your <br className="hidden md:block" />{" "}
                  <span className="text-[#BE5103] italic font-serif">
                    Global Education
                  </span>
                </h1>

                <div className="space-y-4 text-gray-300 mb-10 text-sm md:text-base w-full">
                  <div className="flex items-center gap-4 justify-center md:justify-start group">
                    <span className="bg-[#BE5103]/10 p-1.5 rounded-lg text-[#BE5103]">
                      <Check size={18} />
                    </span>
                    <p>We will respond within 12 hours</p>
                  </div>

                  <div className="flex items-center gap-4 justify-center md:justify-start group">
                    <span className="bg-[#BE5103]/10 p-1.5 rounded-lg text-[#BE5103]">
                      <Check size={18} />
                    </span>
                    <p>Access to dedicated consultants</p>
                  </div>
                </div>

                <div className="text-gray-400 mb-8 w-full">
                  <p className="text-[#BE5103] font-bold mb-2">hello@momentor.in</p>
                  <p className="text-xs uppercase tracking-widest">Want to book a quick call instead?</p>
                </div>

                <button
                  className="
    mt-4 md:mt-8 px-10 py-4 rounded-full
    bg-[#BE5103] text-white text-sm font-bold
    hover:bg-[#BE5103]/90
    hover:shadow-[0_0_30px_rgba(190,81,3,0.4)]
    transition-all duration-300
    hover:-translate-y-2
    w-full md:w-auto
  "
                >
                  Book a Free Call Now
                </button>
              </div>

              {/* ================= RIGHT SIDE (FORM) ================= */}
              <div className="space-y-8 bg-white/[0.02] p-6 md:p-0 rounded-[2rem] border border-white/5 md:border-none">
                <h3 className="text-xl font-bold md:hidden text-center mb-6 text-[#BE5103]">Enquiry Form</h3>
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="First name*"
                      className="w-full bg-transparent border-b border-white/10 pb-3 outline-none focus:border-[#BE5103] text-sm md:text-base transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="w-full bg-transparent border-b border-white/10 pb-3 outline-none focus:border-[#BE5103] text-sm md:text-base transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-transparent border-b border-white/10 pb-3 outline-none focus:border-[#BE5103] text-sm md:text-base transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      placeholder="Phone number*"
                      className="w-full bg-transparent border-b border-white/10 pb-3 outline-none focus:border-[#BE5103] text-sm md:text-base transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    placeholder="Your study preferences*"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 pb-3 outline-none focus:border-[#BE5103] text-sm md:text-base transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  className="
    w-full
    bg-[#BE5103]
    text-white
    py-4
    rounded-full
    font-bold
    tracking-wide
    transition-all duration-300
    hover:bg-[#BE5103]/90
    hover:shadow-[0_0_40px_rgba(190,81,3,0.3)]
    hover:-translate-y-2
    text-sm md:text-base
  "
                >
                  Submit Your Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BOTTOM CONTACT CARDS */}
      <section className="bg-black py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
          {/* CARD 1 */}
          <div
            className="bg-[#111] border border-[#BE5103]/40 p-8 md:p-10 rounded-3xl hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-3 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#BE5103]/10">
              <Phone className="text-[#BE5103] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Call Us</h3>
            <p className="text-gray-400 text-sm">
              Speak directly with our study abroad advisors.
            </p>
            <p className="text-[#BE5103] font-medium mt-4">+91 98765 43210</p>
          </div>

          {/* CARD 2 */}
          <div
            className="bg-[#111] border border-[#BE5103]/40 p-8 md:p-10 rounded-3xl hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-3 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#BE5103]/10">
              <Mail className="text-[#BE5103] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Email Us</h3>
            <p className="text-gray-400 text-sm">
              Send your queries and we’ll respond quickly.
            </p>
            <p className="text-[#BE5103] font-medium mt-4">
              hello@momentor.com
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="bg-[#111] border border-[#BE5103]/40 p-8 md:p-10 rounded-3xl hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-3 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#BE5103]/10">
              <MapPin className="text-[#BE5103] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Visit Our Office
            </h3>
            <p className="text-gray-400 text-sm">
              Meet our experts for personalised counselling.
            </p>
            <p className="text-[#BE5103] font-medium mt-4">
              Hilite business Park,Calicut,Kerala
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
