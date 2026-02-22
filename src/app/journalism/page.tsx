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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function JournalismPage() {
  const sections = [
    {
      id: 1,
      title: "Career Reality Stories",
      icon: <Search className="w-5 h-5 text-[#BE5103]" />,
      items: [
        "Why students fail",
        "Where youth get stuck",
        "Misguided decisions",
        "Real case studies from Kerala youth",
      ],
    },
    {
      id: 2,
      title: "Industry Investigations",
      icon: <Info className="w-5 h-5 text-[#BE5103]" />,
      items: [
        "What employers really want",
        "Job market gaps",
        "Hidden opportunities",
        "Outdated curriculum issues",
      ],
    },
    {
      id: 3,
      title: "Future of Work",
      icon: <TrendingUp className="w-5 h-5 text-[#BE5103]" />,
      items: [
        "AI & automation impact",
        "Future skills",
        "Global job trends",
        "New economy opportunities",
      ],
    },
    {
      id: 4,
      title: "International Exposure Content",
      icon: <Globe className="w-5 h-5 text-[#BE5103]" />,
      items: ["Global culture", "Work ethics and expectations"],
    },
    {
      id: 5,
      title: "The Student Awareness Series",
      icon: <Users className="w-5 h-5 text-[#BE5103]" />,
      items: [
        "The mistakes students commonly make",
        "How lack of awareness destroys careers",
        "What colleges never teach",
        "How youth can reinvent their future",
      ],
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#BE5103]/30">
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 md:px-0 py-16 md:py-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/teams.jpg')" }}
        />

        {/* Dark Overlay (same intensity as reference) */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl pt-10">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#BE5103]/40 bg-[#BE5103]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#BE5103] font-semibold">
              EDUCATION JOURNALISM
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            Momentor Education{" "}
            <span className="italic font-serif text-[#BE5103]">Journalism</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300 font-medium tracking-wide">
            INDIA's First Career & Education Truth Platform
          </p>
        </div>
      </section>

      {/* ================= PURPOSE SECTION ================= */}
      <section id="content" className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Heading */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
            <span className="w-16 md:w-32 h-px bg-gradient-to-l from-white to-white/10" />

            <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#BE5103] uppercase font-bold">
              OUR CORE MISSION
            </p>

            <span className="w-16 md:w-32 h-px bg-gradient-to-r from-white to-white/10" />
          </div>

          {/* Quote Text */}
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight">
            The purpose is clear: <br />
            Students deserve the{" "}
            <span className="text-white">truth</span> about{" "}
            <span className="text-[#BE5103] italic font-serif font-normal">
              careers, jobs, and the future.
            </span>
          </p>
        </div>
      </section>

      {/* ================= WHAT WE COVER SECTION ================= */}
      <section className="py-16 md:py-20 px-6 relative bg-gradient-to-b from-black via-[#080808] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl mx-auto md:mx-0">
              <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight text-center md:text-left">
                What We{" "}
                <span className="text-[#BE5103] italic font-serif font-normal">Cover</span>
              </h2>

              <p className="text-gray-400 text-sm md:text-lg text-center md:text-left max-w-2xl">
                We investigate careers, industries, and education systems to
                reveal the realities students must understand before making life
                decisions.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
                5 Major Verticals
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`
        group relative flex flex-col
        bg-white/[0.03] border border-white/5
        p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl
        hover:bg-white/[0.05] hover:border-[#BE5103]/40
        hover:shadow-[0_20px_40px_rgba(190,81,3,0.2)]
        transition-all duration-500 hover:-translate-y-2 overflow-hidden

        lg:col-span-2

        ${section.id === 4 ? "lg:col-start-2" : ""}
        ${section.id === 5 ? "lg:col-start-4" : ""}
      `}
              >
                {/* Decorative Number */}
                <span className="absolute top-8 right-10 text-4xl md:text-5xl font-extrabold text-white/5 group-hover:text-[#BE5103]/20 transition-colors">
                  0{section.id}
                </span>

                <div className="mb-6 bg-[#BE5103]/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {section.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-5 tracking-tight group-hover:text-[#BE5103] transition-colors">
                  {section.title}
                </h3>

                <ul className="space-y-3.5 flex-grow">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-gray-400 group/item"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#BE5103]/40 mt-1 shrink-0 group-hover/item:text-[#BE5103] transition-colors" />
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors font-medium">
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
      <section className="py-16 md:py-20 px-6 bg-black relative overflow-hidden">
        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="inline-block px-4 py-1 mb-6 rounded-md bg-[#BE5103]/10 text-[#BE5103] text-m font-bold tracking-[0.2em] uppercase">
              Editorial Standards
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">
              Our Journalism <br />
              <span className="text-[#BE5103] italic font-serif">Style</span>
            </h2>

            <div className="grid gap-4">
              {[
                {
                  title: "Bold",
                  desc: "Fearless reporting on career and education realities.",
                },
                {
                  title: "Honest",
                  desc: "No sugarcoating. No hiding facts.",
                },
                {
                  title: "Data-driven",
                  desc: "Research and evidence guide every story.",
                },
                {
                  title: "Story-based",
                  desc: "Human experiences behind statistics.",
                },
                {
                  title: "Student-focused",
                  desc: "Youth always comes first.",
                },
              ].map((style, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#BE5103]/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#BE5103]/5 flex items-center justify-center text-[#BE5103] font-bold group-hover:bg-[#BE5103] group-hover:text-white transition-all duration-300">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold group-hover:text-[#BE5103] transition-colors">
                      {style.title}
                    </h4>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-widest text-[10px] mt-1">
                      {style.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 group">
            {/* Decorative frames */}
            <div className="absolute -top-4 -right-4 w-64 h-64 border-t-2 border-r-2 border-[#BE5103]/30 rounded-tr-[3rem] -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            <div className="absolute -bottom-4 -left-4 w-64 h-64 border-b-2 border-l-2 border-[#BE5103]/30 rounded-bl-[3rem] -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/graduation.jpg"
                alt="Journalism Style"
                fill
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="w-12 h-1 bg-[#BE5103] mb-8" />
                <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-white">
                  We don't sugarcoat. We don't hide. We tell the{" "}
                  <span className="text-[#BE5103]">truth</span> that builds
                  careers."
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
