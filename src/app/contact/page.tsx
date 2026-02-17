"use client";

import { Check, Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0 overflow-hidden">
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

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Contact <span className="italic font-serif text-[#BE5103]">Us</span>
          </h1>
        </div>
      </section>
      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-light mb-4 px-4 md:px-45 text-center">
          Let’s Start Your{" "}
          <span className="italic font-serif text-[#BE5103]">
            Study Abroad Journey
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-center text-sm md:text-base">
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
              <div>
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 md:mb-8 text-center md:text-left">
                  Let’s Plan Your <br />{" "}
                  <span className="text-[#BE5103] italic font-serif">
                    Global Education
                  </span>
                </h1>

                <div className="space-y-4 text-gray-300 mb-8 md:mb-10 text-sm md:text-base">
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-[#BE5103]" />
                    <p>We will respond within 12 hours</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-[#BE5103]" />
                    <p>Access to dedicated consultants</p>
                  </div>
                </div>

                <div className="text-gray-400 mb-6 text-center md:text-left">
                  <p className="underline mb-2">hello@momentor.com</p>
                  <p>Want to book a quick call instead?</p>
                </div>

                <button
                  className="
    mt-4 md:mt-8 px-6 py-3 rounded-full
    bg-[#BE5103] text-white text-sm font-semibold
    hover:bg-gradient-to-r from-[#7A3300] to-[#BE5103]
    transition-transform duration-200 ease-out
    hover:-translate-y-2
    w-full md:w-auto
  "
                >
                  Book a free call
                </button>
              </div>

              {/* ================= RIGHT SIDE (FORM) ================= */}
              <div className="space-y-6">
                {/* Services */}
                <div>
                  <p className="mb-3 text-sm text-gray-400 font-semibold">
                    Service
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {[
                      "Consulting",
                      "Visa Support",
                      "University Selection",
                      "Application Help",
                    ].map((item, i) => (
                      <button
                        key={i}
                        className="px-3 md:px-4 py-2 rounded-full border border-[#BE5103]/50 text-xs md:text-sm hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-2"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First name*"
                    className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-[#BE5103] text-sm md:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-[#BE5103] text-sm md:text-base"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-[#BE5103] text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number*"
                    className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-[#BE5103] text-sm md:text-base"
                  />
                </div>

                <textarea
                  placeholder="Your study preferences*"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-2 outline-none focus:border-[#BE5103] text-sm md:text-base"
                />

                {/* Submit */}
                <button
                  className="
    w-full
    bg-[#BE5103]
    text-white
    py-3 md:py-4
    rounded-full
    font-semibold
    transition-all duration-300 ease-out
    hover:bg-gradient-to-r hover:from-[#7A3300] hover:to-[#BE5103]
    hover:-translate-y-3
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
      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-black py-12 md:py-18 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-light mb-10 md:mb-16">
            Our students find countless <br />
            reasons to{" "}
            <span className="text-[#BE5103] italic font-serif">trust us</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* CARD 1 */}
            <div
              className="bg-[#111] border border-[#BE5103]/40 rounded-3xl p-6 md:p-8 hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-3 "
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#BE5103]/20 flex items-center justify-center">
                  <span className="text-[#BE5103] font-bold">AK</span>
                </div>
                <div>
                  <p className="text-white font-medium">Akhil Kumar</p>
                  <p className="text-sm text-gray-400">MS in UK</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                Momentor guided me through university selection, SOP writing,
                and visa processing smoothly. Their support made my dream of
                studying abroad a reality.
              </p>

              <p className="mt-4 text-[#BE5103] text-sm font-medium">
                ★★★★★ 5.0
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="bg-[#111] border border-[#BE5103]/40 rounded-3xl p-6 md:p-8 hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-3 "
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#BE5103]/20 flex items-center justify-center">
                  <span className="text-[#BE5103] font-bold">SR</span>
                </div>
                <div>
                  <p className="text-white font-medium">Sneha R</p>
                  <p className="text-sm text-gray-400">MBA in Canada</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                From counselling to visa approval, everything was transparent
                and well-organised. I highly recommend Momentor to students
                planning to study abroad.
              </p>

              <p className="mt-4 text-[#BE5103] text-sm font-medium">
                ★★★★★ 5.0
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FAQ ================= */}
      <section className="bg-black pb-20 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-light mb-10 md:mb-14">
            Got questions? We’ve got{" "}
            <span className="text-[#BE5103] italic font-serif">answers!</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How do I choose the right university?",
                a: "We evaluate your academic background, career goals, budget, and preferred destination to shortlist universities that best match your profile and long-term ambitions.",
              },
              {
                q: "Do you assist with visa processing?",
                a: "Yes. We provide complete visa guidance including documentation review, financial preparation, mock interviews, and submission support to maximise approval chances.",
              },
              {
                q: "Can you help with scholarships?",
                a: "Absolutely. We identify scholarship opportunities, assist with applications, and help you prepare strong supporting documents to improve your chances of receiving funding.",
              },
              {
                q: "What is the application process timeline?",
                a: "The process usually takes 3–6 months depending on intake and country. We guide you step-by-step from university selection to offer letter and visa approval.",
              },
              {
                q: "Do you provide post-arrival support?",
                a: "Yes, we assist with accommodation guidance, pre-departure briefings, and important information to help you settle comfortably in your new country.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-[#111] border border-[#BE5103]/40 rounded-xl p-6 cursor-pointer hover:border-[#BE5103] transition"
              >
                <summary className="flex justify-between items-center text-white font-medium">
                  {item.q}
                  <span className="text-[#BE5103] group-open:rotate-45 transition">
                    +
                  </span>
                </summary>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
