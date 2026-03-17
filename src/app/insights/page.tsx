"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Search,
  Info,
  TrendingUp,
  Globe,
  Users,
  CheckCircle,
} from "lucide-react";

export default function JournalismPage() {
  const sections = [
    {
      id: 1,
      title: "Career Reality Stories",
      icon: <Search className="w-5 h-5" />,
      items: [
        "Why students fail",
        "Where youth get stuck",
        "Misguided decisions",
      ],
    },
    {
      id: 2,
      title: "Educational Insights",
      icon: <Info className="w-5 h-5" />,
      items: [
        "What employers really want",
        "Job market gaps",
        "Hidden opportunities",
      ],
    },
    {
      id: 3,
      title: "Future of Work",
      icon: <TrendingUp className="w-5 h-5" />,
      items: [
        "AI & automation impact",
        "Future skills",
        "Global job trends",
      ],
    },
    {
      id: 4,
      title: "International Exposure Content",
      icon: <Globe className="w-5 h-5" />,
      items: ["Global culture", "Work ethics and expectations"],
    },
    {
      id: 5,
      title: "The awareness Series",
      icon: <Users className="w-5 h-5" />,
      items: [
        "The mistakes commonly make",
        "What colleges never teach",
        "How youth can reinvent future",
      ],
    },
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 md:px-0 py-16 md:py-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/about-hero.webp"
          alt="Al Haram Insights"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl pt-10">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#33744D]/40 bg-[#33744D]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-white font-semibold uppercase">
              Educational Insights
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
            Al Haram <br />
            <span className="italic font-serif text-[#33744D]">Educational Insights</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-200 font-medium tracking-wide">
            Promoting Truth and Values in Career & Education
          </p>
        </div>
      </section>

      {/* ================= PURPOSE SECTION ================= */}
      <section id="content" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
            <span className="w-12 h-px bg-gray-200" />
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#33744D] uppercase font-bold">
              Our Perspective
            </p>
            <span className="w-12 h-px bg-gray-200" />
          </div>

          {/* Quote Text */}
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-black max-w-5xl mx-auto">
            Truth in education <br />
            leads to <span className="text-[#33744D] italic font-serif font-normal">clarity in values & careers</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-xl leading-relaxed pt-6">
            We provide insights that move beyond brochures, revealing the realities students and parents must understand to make informed decisions for a purposeful future.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE COVER SECTION ================= */}
      <section className="py-20 md:py-32 px-6 relative bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight text-black">
                Areas of <span className="text-[#33744D] italic font-serif font-normal">Focus</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto md:mx-0">
                We analyze careers, industries, and education systems through the lens of moral integrity and practical excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`
        group relative flex flex-col
        bg-white border border-gray-100
        p-8 md:p-12 rounded-[2.5rem] shadow-lg
        hover:border-[#33744D]/20
        hover:shadow-2xl
        transition-all duration-500 hover:-translate-y-2 overflow-hidden
        lg:col-span-2
        ${section.id === 4 ? "lg:col-start-2" : ""}
        ${section.id === 5 ? "lg:col-start-4" : ""}
      `}
              >
                {/* Decorative Number */}
                <span className="absolute top-8 right-10 text-4xl md:text-5xl font-extrabold text-gray-50 group-hover:text-[#33744D]/5 transition-colors">
                  0{section.id}
                </span>

                <div className="mb-8 bg-[#33744D]/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#33744D] group-hover:text-white transition-all duration-500 shadow-sm">
                  <div className="group-hover:text-white text-[#33744D]">
                    {section.icon}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-black group-hover:text-[#33744D] transition-colors">
                  {section.title}
                </h3>

                <ul className="space-y-4 flex-grow">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-gray-600 group/item"
                    >
                      <CheckCircle className="w-4 h-4 text-[#33744D]/30 mt-1 shrink-0 group-hover/item:text-[#33744D] transition-colors" />
                      <span className="text-sm md:text-base leading-relaxed group-hover/item:text-black transition-colors font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STYLE SECTION ================= */}
      <section className="py-20 md:py-40 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="inline-block px-4 py-2 mb-8 rounded-full bg-[#33744D]/5 border border-[#33744D]/10 text-[#33744D] text-xs font-bold tracking-[0.2em] uppercase">
              Editorial Standards
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight leading-tight text-black">
              Insight <br />
              <span className="text-[#33744D] italic font-serif">Standards</span>
            </h2>

            <div className="grid gap-6">
              {[
                {
                  title: "Evidence-Based",
                  desc: "Fearless reporting on career and education realities backed by facts.",
                },
                {
                  title: "Unbiased & Ethical",
                  desc: "Commitment to absolute honesty without compromise.",
                },
                {
                  title: "Value-Centered",
                  desc: "Integrating moral principles with academic and career success.",
                },
              ].map((style, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-6 p-8 rounded-[2rem] border border-gray-100 bg-white hover:bg-gray-50 hover:border-[#33744D]/20 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#33744D]/5 flex items-center justify-center text-[#33744D] font-bold group-hover:bg-[#33744D] group-hover:text-white transition-all duration-300">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black">
                      {style.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mt-1">
                      {style.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 group">
            <div className="relative aspect-square md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl">
              <Image
                src="/images/graimg.jpg"
                alt="Insight Style"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="w-16 h-1 bg-[#33744D] mb-8" />
                <p className="text-2xl md:text-4xl font-light italic leading-relaxed text-white">
                  "At Al Haram, we believe that <span className="text-[#33744D]">truth</span> is the foundation of growth and character development."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
