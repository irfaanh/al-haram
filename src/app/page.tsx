import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

import { Globe, ShieldCheck, GraduationCap, Users } from "lucide-react";

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
      id: "1",
      title: "MBA",
      description:
        "Accelerate your career with a global MBA. Gain leadership skills and international business insights.",
      image: "/images/graduation.jpg",
    },
    {
      id: "2",
      title: "MS",
      description:
        "Specialize in your field with a Master of Science. Access cutting-edge research and global opportunities.",
      image: "/images/placement.jpg",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/home.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl pt-20">
          <h1 className="text-4xl md:text-7xl font-light leading-tight mb-6">
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

          <button className="px-8 py-4 rounded-full bg-[#BE5103] hover:bg-gradient-to-r from-[#7A3300] to-[#BE5103] transition hover:-translate-y-1 text-sm md:text-base font-medium">
            Book Free Consultation →
          </button>
        </div>
      </section>

      {/* ================= NEWS SCROLL ================= */}
      <section className="bg-[#BE5103] py-6 overflow-hidden relative border-y border-white/10">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-16 px-8">
              {[
                "Admissions Open for 2025 Intake at Top UK Universities",
                "New Scholarship Opportunities Announced for Canadian Colleges",
                "Free Webinar on Visa Processing for USA - Register Now",
                "Exclusive Seminar with Australian University Representatives in Mumbai",
                "Germany Introduces New Post-Study Work Visa Rules for 2025",
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

      {/* ================= ABOUT US ================= */}
      <section className="py-20 md:py-32 px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#BE5103] uppercase font-bold text-center">
            ABOUT US
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-light mb-6 md:mb-8 text-center md:text-left">
              A Trusted Partner in{" "}
              <span className="italic font-serif text-[#BE5103]">
                International Education
              </span>
            </h2>

            {/* CONTENT */}
            <div className="text-justify text-sm md:text-base space-y-4 text-gray-300">
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

          <div className="order-first md:order-last">
            <Image
              src="/images/counseling.jpg"
              alt="Counselling"
              width={600}
              height={500}
              className="rounded-3xl border border-white/10 w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-20 md:py-32 px-6 bg-[#0f0f0f]">
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
              className="group bg-[#111] rounded-3xl overflow-hidden border border-white/10 
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
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-[#BE5103] transition">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {course.description}
                </p>
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

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 md:py-32 px-6">
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
              icon: Globe,
              title: "Global Network",
              desc: "Partnerships with internationally recognized universities.",
            },
            {
              icon: ShieldCheck,
              title: "Transparent Process",
              desc: "Clear communication and ethical consultancy support.",
            },
            {
              icon: GraduationCap,
              title: "Expert Guidance",
              desc: "Experienced counsellors with proven success records.",
            },
            {
              icon: Users,
              title: "Personalized Support",
              desc: "One-on-one mentoring tailored to individual goals.",
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

      {/* ================= TRUSTED PARTNERS ================= */}
      <section className="py-20 md:py-32 px-6 bg-[#0f0f0f]">
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

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {[
            { name: "University of Oxford", logo: "/globe.svg" },
            { name: "Harvard University", logo: "/globe.svg" },
            { name: "Stanford University", logo: "/globe.svg" },
            { name: "University of Cambridge", logo: "/globe.svg" },
            { name: "MIT", logo: "/globe.svg" },
            { name: "Imperial College London", logo: "/globe.svg" },
            { name: "ETH Zurich", logo: "/globe.svg" },
            { name: "University of Toronto", logo: "/globe.svg" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 text-center
                 hover:border-[#BE5103] hover:-translate-y-2
                 hover:shadow-[0_15px_40px_rgba(190,81,3,0.2)]
                 transition-all duration-500 flex flex-col items-center h-full"
            >
              <div className="flex justify-center mb-5">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#BE5103]
                        flex items-center justify-center text-[#BE5103] overflow-hidden relative"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="object-contain" // Simple style for the logo
                  />
                </div>
              </div>

              <h4 className="text-white font-medium text-xs md:text-sm leading-relaxed">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
