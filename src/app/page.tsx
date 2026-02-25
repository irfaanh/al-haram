import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

import {
  Globe,
  Users,
  Newspaper,
  Search,
  FileText,
  CheckCircle,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Target,
  GraduationCap,
} from "lucide-react";
import TeamSlider from "@/components/TeamSlider";
// import PartnersSlider from "@/components/PartnersSlider";

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
      image: "/images/graduation.webp",
    },
    {
      id: "gsrp",
      title: "Global Student Readiness Program (GSRP)",
      description:
        "Prepare for international education with civic discipline, cultural adaptation, and real-world global behavior training to confidently live and succeed abroad.",
      image: "/images/placement-hero.webp",
    },
    {
      id: "ghrt",
      title: "Global Hospitality & Readiness Training (GHRT)",
      description:
        "Gain practical skills, service confidence, and international exposure to thrive in global hospitality, retail, and customer-focused industries.",
      image: "/images/students-hospitality.webp",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0">
        <Image
          src="/images/home-hero.webp"
          alt="Momentor Home"
          fill
          priority
          className="object-cover object-center opacity-55"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-4xl pt-10 md:pt-20 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold leading-tight mb-6">
            MOMENTOR - <br />
            Where Guidance Meets the{" "}
            <span className="italic font-serif text-[#BE5103]">Future</span>
          </h1>

          <Link href="/learn-more">
            <button
              className="px-8 py-2 md:px-8 md:py-3 rounded-full mb-6 md:mb-13
bg-white/10 backdrop-blur-md 
border border-white/30 
text-white 
hover:bg-white/20 
transition-all duration-300 
hover:-translate-y-1 
text-sm md:text-base font-medium shadow-lg -mt-5 cursor-pointer"
            >
              Learn More
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
                "INDIAS first Education Journalism platform exposing Myths, Mistakes, and Realities",
                "A Future-Skills Training Academy",
                "A Global Internship Gateway",
                "INDIAS’s First Career & Education Truth Platform",
                "A Youth Mentorship Ecosystem",
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
      <section
        id="journalism"
        className="py-20 md:py-32 px-6 bg-black relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#BE5103] opacity-[0.05] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#BE5103] opacity-[0.02] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Image Side */}
          <div className="hidden md:block relative group order-2 md:order-1 px-4 md:px-0">
            <div className="relative h-[300px] sm:h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-[#BE5103]/30 transition-all duration-700 shadow-2xl">
              <Image
                src="/images/europe.webp"
                alt="Education Journalism"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-1 rounded-[1.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform duration-500">
              <div className="bg-[#BE5103] px-6 py-4 rounded-[1.5rem] flex flex-col items-center justify-center min-w-[100px] md:min-w-[110px]">
                <span className="text-white font-bold text-2xl md:text-4xl leading-none">
                  1st
                </span>
                <span className="text-white/90 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-medium mt-1 text-center">
                  In India
                </span>
              </div>
            </div>

            {/* Subtle Glass Card Element */}
            <div className="absolute -top-6 -left-6 hidden lg:block bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl animate-bounce-slow">
              <Newspaper className="text-[#BE5103]" size={32} />
            </div>
          </div>

          {/* Content Side */}
          <div className="relative z-10 order-1 md:order-2 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-[#BE5103]/20 bg-[#BE5103]/5 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#BE5103] animate-ping" />
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-[#BE5103] font-bold uppercase">
                India's First Platform
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
              Pioneering <br />
              <span className="italic font-serif text-[#BE5103] font-normal">
                Education Journalism
              </span>
            </h2>

            <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-12 max-w-xl mx-auto md:mx-0">
              Momentor is India's first dedicated education journalism platform,
              bringing{" "}
              <span className="text-white font-medium italic underline decoration-[#BE5103]/40 underline-offset-4">
                truth and clarity
              </span>{" "}
              to the complex world of global careers. We expose industry trends
              and provide raw, honest insights.
            </p>

            <div className="space-y-6 md:space-y-8 mb-12 text-left">
              {[
                {
                  icon: Search,
                  title: "Unbiased Reporting",
                  desc: "No marketing agendas, just raw reporting.",
                },
                {
                  icon: FileText,
                  title: "Deep-dive Guides",
                  desc: "Complex systems broken down for students.",
                },
                {
                  icon: CheckCircle,
                  title: "Data-driven Mentorship",
                  desc: "Based on real-world professional metrics.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#BE5103] group-hover/item:bg-[#BE5103] group-hover/item:text-white transition-all duration-300">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover/item:text-[#BE5103] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
                  src="/images/graduation.webp"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block relative h-48 sm:h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/counseling.webp"
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-10">
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
                  <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#BE5103] hover:scale-110 transition duration-300 shadow-lg cursor-pointer">
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
                 transition-all duration-300 hover:-translate-y-2 font-medium cursor-pointer"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {/* Card 1 */}
          <div
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
rounded-2xl p-6 
transition-all duration-300 ease-out
hover:-translate-y-2 
hover:shadow-[0_20px_40px_rgba(190,81,3,0.25)]
hover:border-[#BE5103]"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#BE5103]/10 text-[#BE5103] p-2 rounded-lg">
                <BookOpen size={20} />
              </span>
              <h3 className="font-semibold text-white text-lg">
                Industry-Driven Curriculum
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designed with employers and based on real workforce needs to
              ensure practical relevance and strong career readiness.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
rounded-2xl p-6 
transition-all duration-300 ease-out
hover:-translate-y-2 
hover:shadow-[0_20px_40px_rgba(190,81,3,0.25)]
hover:border-[#BE5103]"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#BE5103]/10 text-[#BE5103] p-2 rounded-lg">
                <Users size={20} />
              </span>
              <h3 className="font-semibold text-white text-lg">
                Mentorship That Matters
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We don’t lecture — we mentor, guide, support, and transform
              individuals through personalised attention and real-world insight.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
rounded-2xl p-6 
transition-all duration-300 ease-out
hover:-translate-y-2 
hover:shadow-[0_20px_40px_rgba(190,81,3,0.25)]
hover:border-[#BE5103]"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#BE5103]/10 text-[#BE5103] p-2 rounded-lg">
                <Globe size={20} />
              </span>
              <h3 className="font-semibold text-white text-lg">
                Real Opportunities
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Access to internships, global exposure, and structured career
              pathways that go beyond traditional education.
            </p>
          </div>

          {/* Row for last two cards */}
          <div className="md:col-span-3 flex justify-center gap-6 flex-wrap">
            {/* Card 4 */}
            <div
              className="w-full md:w-[31%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out
hover:-translate-y-2 
hover:shadow-[0_20px_40px_rgba(190,81,3,0.25)]
hover:border-[#BE5103]"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-[#BE5103]/10 text-[#BE5103] p-2 rounded-lg">
                  <BrainCircuit size={20} />
                </span>
                <h3 className="font-semibold text-white text-lg">
                  Training for the Future
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-era readiness, international etiquette, communication
                mastery, and modern workplace competencies.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="w-full md:w-[31%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out
hover:-translate-y-2 
hover:shadow-[0_20px_40px_rgba(190,81,3,0.25)]
hover:border-[#BE5103]"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-[#BE5103]/10 text-[#BE5103] p-2 rounded-lg">
                  <Target size={20} />
                </span>
                <h3 className="font-semibold text-white text-lg">
                  Youth-Focused Approach
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designed specifically for ages 18–30 with flexible, practical,
                hands-on learning experiences.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="mt-20 px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-4xl font-serif italic font-bold text-[#BE5103] mb-12 text-left">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 
                    hover:border-[#BE5103] transition duration-300 
                    hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(190,81,3,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-[#BE5103]" size={26} />
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Future Skills Training
                </h3>
              </div>

              <ul className="space-y-2 text-gray-400 font-semibold text-sm md:text-base">
                <li>• Global student readiness program</li>
                <li>• Communication & Etiquette</li>
                <li>• Sales & Business Development</li>
                <li>• Digital & AI Literacy</li>
                <li>• Workplace Behaviour</li>
                <li>• Leadership & Mindset</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 
                    hover:border-[#BE5103] transition duration-300 
                    hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(190,81,3,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#BE5103]" size={26} />
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Career Mentorship
                </h3>
              </div>

              <p className="text-gray-400 font-semibold text-sm md:text-base leading-relaxed">
                Direction, clarity, and personalised guidance that help youth
                make confident career decisions and long-term plans.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 
                    hover:border-[#BE5103] transition duration-300 
                    hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(190,81,3,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-[#BE5103]" size={26} />
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Global Internship Programs
                </h3>
              </div>

              <p className="text-gray-400 font-semibold text-sm md:text-base leading-relaxed">
                Our flagship programs combine industry readiness with
                international internship opportunities in destinations such as
                Dubai and Vietnam, providing real global exposure.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 
                    hover:border-[#BE5103] transition duration-300 
                    hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(190,81,3,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="text-[#BE5103]" size={26} />
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Youth Awareness & Journalism
                </h3>
              </div>

              <ul className="space-y-2 text-gray-400 font-semibold text-sm md:text-base">
                <li>• Video stories</li>
                <li>• Research-based articles</li>
                <li>• Industry interviews</li>
                <li>• Student case studies</li>
                <li>• Investigation into hidden career challenges</li>
                <li>• Career crisis analysis</li>
              </ul>
            </div>
          </div>
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

        <div className="max-w-6xl mx-auto">
          <TeamSlider />
        </div>
      </section>

      {/* ================= TRUSTED PARTNERS ================= */}
      {/* <section className="py-12 md:py-20 px-6 bg-[#0f0f0f]">
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

        <PartnersSlider />
      </section> */}

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-black py-12 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-white leading-relaxed">
          <h2 className="text-3xl md:text-5xl text-center font-light mb-12 md:mb-20">
            Our students find countless <br />
            reasons to{" "}
            <span className="text-[#BE5103] italic font-serif">trust us</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {/* CARD 1 */}
            <div
              className="bg-[#111] border border-[#BE5103]/30 rounded-[2.5rem] p-8 md:p-10 hover:border-[#BE5103] transition-all duration-300 group
    hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(190,81,3,0.1)] "
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#BE5103]/10 border border-[#BE5103]/20 flex items-center justify-center">
                  <span className="text-[#BE5103] font-bold text-lg">AK</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Akhil Kumar</p>
                  <p className="text-sm text-gray-500">MS in UK</p>
                </div>
              </div>

              <p className="text-gray-400 text-base leading-relaxed italic">
                "Momentor guided me through university selection, SOP writing,
                and visa processing smoothly. Their support made my dream of
                studying abroad a reality."
              </p>

              <div className="mt-8 flex items-center gap-1 text-[#BE5103]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="ml-2 text-white/50 text-sm font-medium">
                  5.0
                </span>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="bg-[#111] border border-[#BE5103]/30 rounded-[2.5rem] p-8 md:p-10 hover:border-[#BE5103] transition-all duration-300 group
    hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(190,81,3,0.1)] "
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#BE5103]/10 border border-[#BE5103]/20 flex items-center justify-center">
                  <span className="text-[#BE5103] font-bold text-lg">SR</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Sneha R</p>
                  <p className="text-sm text-gray-500">MBA in Canada</p>
                </div>
              </div>

              <p className="text-gray-400 text-base leading-relaxed italic">
                "From counselling to visa approval, everything was transparent
                and well-organised. I highly recommend Momentor to students
                planning to study abroad."
              </p>

              <div className="mt-8 flex items-center gap-1 text-[#BE5103]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="ml-2 text-white/50 text-sm font-medium">
                  5.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-black py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-white leading-relaxed">
          <h2 className="text-3xl md:text-5xl text-center font-light mb-12 md:mb-16">
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
                className="group bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 cursor-pointer hover:border-[#BE5103]/50 transition-all duration-300"
              >
                <summary className="flex justify-between items-center text-white font-bold text-lg">
                  {item.q}
                  <span className="text-[#BE5103] group-open:rotate-45 transition-transform duration-300 text-2xl font-light">
                    +
                  </span>
                </summary>

                <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
