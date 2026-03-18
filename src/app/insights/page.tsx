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
    title: "Student Guidance",
    icon: <Search className="w-5 h-5" />,
    items: [
      "Common student challenges",
      "Guidance for better choices",
      "Building the right mindset",
    ],
  },
  {
    id: 2,
    title: "Holistic Education",
    icon: <Info className="w-5 h-5" />,
    items: [
      "Balanced learning approach",
      "Academic and moral growth",
      "Practical learning methods",
    ],
  },
  {
    id: 3,
    title: "Skills for Life",
    icon: <TrendingUp className="w-5 h-5" />,
    items: [
      "Communication skills",
      "Leadership development",
      "Discipline and focus",
    ],
  },
  {
    id: 4,
    title: "Global Understanding",
    icon: <Globe className="w-5 h-5" />,
    items: [
      "Understanding cultures",
      "Ethics in modern society",
      "Global awareness skill",
    ],
  },
  {
    id: 5,
    title: "Character Development",
    icon: <Users className="w-5 h-5" />,
    items: [
      "Islamic values and morals",
      "What education should teach",
      "Responsible individuals",
    ],
  },
];

  const institutionalPrograms = [
    {
      title: "Makhdoomi Syllabus",
      category: "Islamic Excellence",
      description: "A structured Islamic curriculum combining deep religious knowledge with analytical thinking and scientific perspective.",
      image: "/images/makdoobi.jpg",
    },
    {
      title: "Genius Program",
      category: "Life Mastery",
      description: "Cultivating discipline, emotional intelligence, and real-world life skills for confident individuals.",
      image: "/images/lifeskillimg.jpg",
    },
    {
      title: "Abacus Program",
      category: "Cognitive Training",
      description: "Sharpening mental speed, focus, and problem-solving through advanced brain development techniques.",
      image: "/images/abacusimg.jpg",
    },
    {
      title: "AI & Robotics",
      category: "Innovation",
      description: "Empowering students with practical exposure to artificial intelligence, automation, and emerging technologies.",
      image: "/images/airobo.jpg",
    },
    {
      title: "Creative Horizons",
      category: "Art Fest",
      description: "A celebration of creativity, imagination, and artistic expression.",
      image: "/images/artfest.jpg",
    },
    
    {
      title: "Convisio",
      category: "Intellectual Hub",
      description: "A platform for collective thinking, research, and intellectual exploration.",
      image: "/images/technologylab.jpg",
    },
    {
      title: "Language Proficiency Programs",
      category: "Language Mastery",
      description: "Building fluency, articulation, and confident expression in a multilingual environment.",
      image: "/images/library.jpg",
    },
    {
      title: "Community Build-Up",
      category: "Community",
      description: "Encouraging social responsibility, teamwork, and active community participation.",
      image: "/images/studentss.jpg",
    },
    {
      title: "Creative Team",
      category: "Creativity",
      description: "A collaborative platform where students explore creativity, teamwork, and basic entrepreneurial thinking.",
      image: "/images/charecter.jpg",
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
            AL HARAM <br />
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
      <section className="py-20 md:py-32 px-6 relative bg-white">
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

      {/* ================= SIGNATURE PROGRAMS ================= */}
      <section id="programs" className="py-20 md:py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-black tracking-tight">
              Our Signature <span className="text-[#33744D] italic font-serif font-normal">Programs</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-lg">
              Explore our diverse range of educational initiatives designed to foster excellence in character, cognitive ability, and modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {institutionalPrograms.map((program, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 aspect-[16/10] shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-gray-100 text-[10px] uppercase tracking-widest font-bold text-[#33744D] shadow-sm">
                    {program.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#33744D] transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium line-clamp-3">
                    {program.description}
                  </p>
                  <div className="w-0 group-hover:w-16 h-1 bg-[#33744D] mt-6 transition-all duration-700 delay-200" />
                </div>
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
                <p className="text-2xl md:text-4xl font-light  leading-relaxed text-white">
                  "At AL HARAM, we believe that <span className="text-black">truth</span> is the foundation of growth and character development."
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
