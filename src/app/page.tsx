import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Globe,
  ShieldCheck,
  GraduationCap,
  Users,
  Newspaper,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string | null;
  image: string;
  modules: any;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const courses = [
    {
      id: "gcrp",
      title: "Global Career Readiness Program (GCRP)",
      description:
        "Transform into a globally employable professional through structured career skill training and paid international internship exposure with expert mentor guidance.",
      image: "/images/graduation.jpg",
    },
    {
      id: "gsrp",
      title: "Global Student Readiness Program (GSRP)",
      description:
        "Prepare for international education with civic discipline, cultural adaptation, and real-world global behavior training to confidently live and succeed abroad.",
      image: "/images/placement.jpg",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/home.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-4xl pt-10 md:pt-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-light leading-tight mb-6">
            Study Beyond Borders. <br />
            Build a{" "}
            <span className="italic font-serif text-[#BE5103]">
              Global Future
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
            We guide ambitious students toward internationally recognized
            universities with structured preparation, transparent processes, and
            long-term career readiness support.
          </p>

          <Link href="/contact">
            <button className="px-5 py-2.5 md:px-8 md:py-4 rounded-full bg-[#BE5103] hover:bg-gradient-to-r from-[#7A3300] to-[#BE5103] transition hover:-translate-y-1 text-[13px] md:text-base font-medium">
              Book Free Consultation →
            </button>
          </Link>
        </div>
      </section>

      {/* ================= NEWS SCROLL ================= */}
      <section className="bg-[#BE5103] py-6 overflow-hidden relative border-y border-white/10">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-16 px-8">
              {[
                "Admissions Open for 2026 Intake at Top UK Universities",
                "New Scholarship Opportunities Announced for Canadian Colleges",
                "Free Webinar on Visa Processing for USA - Register Now",
                "Exclusive Seminar with Australian University Representatives in Mumbai",
                "Germany Introduces New Post-Study Work Visa Rules for 2026",
              ].map((news, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  <p className="text-white text-sm md:text-base font-medium whitespace-nowrap tracking-wide">
                    {news}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION JOURNALISM ================= */}
      <section className="py-16 md:py-28 px-6 bg-black relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#BE5103] opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group hidden md:block">
            <div className="relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-[#BE5103]/50 transition-colors duration-500">
              <Image
                src="/images/europe.jpg"
                alt="Education Journalism"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Overlay Tag */}
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-[#BE5103] p-6 md:p-8 rounded-2xl shadow-2xl hidden sm:block">
              <p className="text-white font-bold text-2xl md:text-3xl">1st</p>
              <p className="text-white/80 text-xs md:text-sm uppercase tracking-widest">
                In India
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="hidden md:inline-block px-4 py-1.5 mb-6 rounded-full border border-[#BE5103]/30 bg-[#BE5103]/5">
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-[#BE5103] font-bold uppercase">
                India's First Platform
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-8">
              Pioneering{" "}
              <span className="italic font-serif text-[#BE5103]">
                Education Journalism
              </span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              We are more than just a consultancy. Momentor is India's first
              dedicated education journalism platform, bringing truth and
              clarity to the complex world of global careers. We expose industry
              trends, debunk myths, and provide raw, honest insights that help
              students make decisions based on facts, not just marketing.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Unbiased career reporting and industry analysis",
                "Deep-dive guides on global education systems",
                "Mentorship based on real-world professional data",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE5103]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/about">
              <button className="text-[#BE5103] font-semibold flex items-center gap-2 group hover:gap-4 transition-all">
                Read Our Story <span className="text-xl">→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-12 md:py-20 px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#BE5103] uppercase font-bold text-center">
            ABOUT US
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-6 md:mb-8 text-center md:text-left">
              A Trusted Partner in{" "}
              <span className="italic font-serif text-[#BE5103]">
                International Education
              </span>
            </h2>

            {/* CONTENT */}
            <div className="text-left text-sm md:text-base space-y-4 text-gray-300">
              <p>
                We are a dedicated study abroad consultancy committed to helping
                ambitious students access world-class education opportunities.
                From university selection to visa approval, we provide
                structured, transparent, and personalized guidance at every step
                of the journey.
              </p>

              <p>
                Our team works closely with students to understand their
                academic background, career aspirations, and financial
                considerations — ensuring that every application is strategic,
                well-prepared, and aligned with long-term goals.
              </p>

              <p>
                Beyond admissions, we focus on global readiness — preparing
                students for international academic environments, cultural
                transitions, and professional success in competitive global
                markets.
              </p>

              <p>
                With strong university partnerships and a student-first
                approach, we don’t just help you study abroad —
                <span className="text-[#B08D55] font-medium">
                  {" "}
                  we prepare you to succeed abroad.
                </span>
              </p>
            </div>
          </div>

          <div className="order-first md:order-last relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-0">
              <div className="relative h-80 sm:h-96 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden md:translate-y-12 shadow-2xl">
                <Image
                  src="/images/graduation.jpg"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block relative h-48 sm:h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/counseling.jpg"
                  alt="Counseling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-white p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 md:gap-4 z-20 w-max">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-300 relative">
                  <Image
                    src="/images/member.jpg"
                    fill
                    className="object-cover"
                    alt="User"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-300 relative">
                  <Image
                    src="/images/member1.jpg"
                    fill
                    className="object-cover"
                    alt="User"
                  />
                </div>
              </div>
              <div>
                <p className="text-black font-bold text-lg leading-tight">
                  10K+
                </p>
                <p className="text-gray-500 text-xs font-medium">Job Seekers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-12 md:py-20 px-6 bg-[#0f0f0f]">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-5">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#BE5103] uppercase font-bold text-center">
            OUR COURSES
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>
        <div>
          <p className="text-gray-400 text-sm md:text-[16px] leading-relaxed max-w-2xl mx-auto text-center mb-10 md:mb-15">
            Our courses prepare students for international education and global
            careers. We focus on academic excellence and professional readiness.
            Every program builds confidence and competitive advantage. Step
            forward with clarity. Study globally.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
          {courses.slice(0, 3).map((course, i) => (
            <div
              key={course.id}
              className="relative group bg-[#111] rounded-3xl overflow-hidden border border-white/10 
  hover:border-[#BE5103] transition-all duration-500 
  hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(190,81,3,0.25)] flex flex-col"
            >
              {/* Top Image */}
              <div className="h-48 md:h-64 overflow-hidden relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="w-full h-full object-cover 
                     group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col pb-20 md:pb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-[#BE5103] transition">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {course.description}
                </p>
              </div>
              {/* Arrow Button */}
              <div className="absolute bottom-6 right-6">
                <Link href={`/courses/${course.id}`}>
                  <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#BE5103] hover:scale-110 transition duration-300 shadow-lg">
                    <ArrowUpRight size={18} className="md:size-[18px] size-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="max-w-6xl mx-auto mt-10 md:mt-12 flex justify-center md:justify-center">
          <Link href="/courses">
            <button
              className="px-8 py-3 rounded-full border border-[#BE5103] text-[#BE5103] 
                 hover:bg-[#BE5103] hover:text-white
                 transition-all duration-300 hover:-translate-y-2 font-medium"
            >
              View More →
            </button>
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-5">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#BE5103] uppercase font-bold text-center">
            WHY CHOOSE US
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>
        <div>
          <p className="text-gray-400 text-sm md:text-[16px] leading-relaxed max-w-2xl mx-auto text-center mb-10 md:mb-15">
            We combine structured global readiness training with transparent
            consultancy support to ensure every student is fully prepared for
            international success. From ethical guidance and academic compliance
            to professional skill development, our approach goes beyond
            admissions. We focus on discipline, responsibility, and long-term
            career confidence — building not just students, but future global
            professionals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: Newspaper,
              title: "Education Journalism",
              desc: "India's 1st journalism-led platform providing raw, honest, and unbiased career reporting.",
            },
            {
              icon: ShieldCheck,
              title: "Ethical Advocacy",
              desc: "A transparent, student-first approach that prioritizes facts over marketing agendas.",
            },
            {
              icon: Globe,
              title: "Global Readiness",
              desc: "Comprehensive GCRP/GSRP training to build civic, cultural, and professional confidence.",
            },
            {
              icon: GraduationCap,
              title: "Long-term Mentorship",
              desc: "Strategic guidance focused on your growth and success in competitive global markets.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 
                   hover:border-[#BE5103] transition-all duration-500 
                   hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(190,81,3,0.2)]"
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-14 h-14 rounded-full border border-[#BE5103] 
                          flex items-center justify-center text-[#BE5103]"
                >
                  <item.icon size={24} />
                </div>
              </div>

              <h4 className="text-white font-semibold mb-3 text-center">
                {item.title}
              </h4>

              <p className="text-gray-400 text-sm text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="py-12 md:py-20 px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#BE5103] uppercase font-bold text-center">
            OUR TEAM
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>

        <div className="max-w-6xl mx-auto flex md:grid md:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {[
            {
              name: "Dr. Sarah Mitchell",
              role: "Head of International Admissions",
              image: "/images/member.jpg",
            },
            {
              name: "James Anderson",
              role: "Senior Career Consultant",
              image: "/images/member1.jpg",
            },
            {
              name: "Emily Chen",
              role: "Student Success Manager",
              image: "/images/member.jpg", // Reusing for placeholder
            },
            {
              name: "Michael Ross",
              role: "Visa & Immigration Specialist",
              image: "/images/member1.jpg", // Reusing for placeholder
            },
          ].map((member, i) => (
            <div
              key={i}
              className="group text-center min-w-[280px] md:min-w-0 snap-center shrink-0"
            >
              <div
                className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden 
                           border-2 border-white/10 group-hover:border-[#BE5103] 
                           transition-all duration-300 group-hover:scale-105"
              >
                <Image
                  src={member.image}
                  fill
                  className="object-cover grayscale-0 group-hover:grayscale transition-all duration-500"
                  alt={member.name}
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-[#BE5103] transition">
                {member.name}
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUSTED PARTNERS ================= */}
      <section className="py-12 md:py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-light">
            Our{" "}
            <span className="italic font-serif text-[#BE5103]">
              Trusted Partners
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm md:text-[15px] leading-relaxed">
            We collaborate with international academic institutions and global
            industry networks to ensure structured academic and professional
            pathways.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {[
            { logo: "/images/partner1.jpg" },
            { logo: "/images/partner2.jpg" },
            { logo: "/images/partner3.jpg" },
            { logo: "/images/partner4.jpg" },
            { logo: "/images/partner5.jpg" },
            { logo: "/images/partner1.jpg" },
            { logo: "/images/partner2.jpg" },
            { logo: "/images/partner3.jpg" },
            { logo: "/images/partner4.jpg" },
            { logo: "/images/partner5.jpg" },
          ].map((item, i) => (
            <div
              key={i}
              className="
          bg-[#111]
          border border-[#BE5103]/40
          rounded-xl
          h-[90px] md:h-[110px]
          flex items-center justify-center
          hover:border-[#BE5103]
          hover:-translate-y-1
          hover:shadow-[0_10px_30px_rgba(190,81,3,0.25)]
          transition-all duration-500
        "
            >
              <Image
                src={item.logo}
                alt="partner"
                width={140}
                height={70}
                className="object-contain max-h-[60px] w-auto"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
