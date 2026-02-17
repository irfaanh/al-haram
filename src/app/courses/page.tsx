import Image from "next/image";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
// I'll create a client component for the details/accordion interaction because "details" element works without JS but if I want custom behavior...
// Actually standard <details> works fine with SSR.

interface Course {
  id: string;
  title: string;
  description: string | null;
  image: string;
  modules: any;
}

export const dynamic = "force-dynamic";

export default async function CoursesPage() {
  const courses = [
    {
      id: "gsrp",
      title: "Global Student Readiness Program (GSRP)",
      description:
        "Designed to equip students with academic discipline, ethical global standards, and cultural adaptability for international education.",
      image: "/images/graduation.jpg",
      modules: [
        {
          title: "Academic Integrity & Standards",
          description:
            "Understanding plagiarism, citations, and global academic expectations.",
        },
        {
          title: "Cultural Intelligence & Adaptation",
          description:
            "Navigating new cultural environments and social norms effectively.",
        },
        {
          title: "Time Management & Self-Discipline",
          description:
            "Structuring study schedules and balancing academic life abroad.",
        },
        {
          title: "Effective Communication",
          description:
            "Developing cross-cultural communication skills for academic success.",
        },
      ],
    },
    {
      id: "gcrp",
      title: "Global Career Readiness Program (GCRP)",
      description:
        "Focused on professional competence, resume building, and long-term career success in the global job market.",
      image: "/images/placement.jpg",
      modules: [
        {
          title: "Global Resume & Cover Letter Building",
          description:
            "Crafting resumes that meet international industry standards.",
        },
        {
          title: "Interview Mastery & Personal Branding",
          description:
            "Preparing for behavioral and technical interviews with confidence.",
        },
        {
          title: "Networking Strategies",
          description:
            "Building professional connections and leveraging LinkedIn effectively.",
        },
        {
          title: "Workplace Ethics & Professionalism",
          description:
            "Understanding global workplace culture and professional conduct.",
        },
      ],
    },
  ];

  return (
    <main className="bg-black text-white px-0">
      {" "}
      {/* Removed Main px padding if any */}
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        />

        {/* Dark Overlay (same intensity as reference) */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#BE5103]/40 bg-[#BE5103]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#BE5103] font-semibold">
              WHAT WE PROVIDE
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our{" "}
            <span className="italic font-serif text-[#BE5103]">Courses</span>
          </h1>
        </div>
      </section>
      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-light mb-6">
          Comprehensive{" "}
          <span className="italic font-serif text-[#BE5103]">
            Global Readiness Courses
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Our specialized courses — Global Student Readiness Program (GSRP) and
          Global Career Readiness Program (GCRP) — are designed to equip
          students with academic discipline, professional competence, and
          ethical global standards. Each program builds the foundation for
          confident international education and long-term career success.
        </p>
      </section>
      {/* ================= PROGRAMS ================= */}
      <section className="pb-20 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {courses.map((course, index) => {
            const isEven = index % 2 === 0;
            const modules = course.modules as unknown as {
              title: string;
              description: string;
            }[];

            return (
              <div
                key={course.id}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Text Section */}
                <div
                  className={`${isEven ? "md:order-first" : "md:order-last"} order-last`}
                >
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left">
                    {course.title}
                  </h3>
                  {course.description && (
                    <p className="text-gray-400 mb-6 text-sm">
                      {course.description}
                    </p>
                  )}

                  <div className="space-y-4 text-gray-400">
                    {Array.isArray(modules) &&
                      modules.map((mod, idx) => (
                        <details
                          key={idx}
                          className="group border-b border-white/10 pb-4"
                        >
                          <summary className="cursor-pointer text-[#BE5103] font-semibold list-none flex items-center justify-between">
                            <span>{mod.title}</span>
                            <span className="transform group-open:rotate-180 transition-transform text-white/50 text-xs">
                              ▼
                            </span>
                          </summary>
                          <p className="mt-2 text-sm">{mod.description}</p>
                        </details>
                      ))}
                  </div>
                </div>

                {/* Image Section */}
                <div
                  className={`rounded-3xl overflow-hidden border border-white/10 ${isEven ? "md:order-last" : "md:order-first"} order-first`}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="pb-20 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#BE5103] via-[#BE5103]/30 to-black p-10 md:p-20 relative">
          <div className="flex justify-center">
            <h3 className="text-2xl md:text-4xl font-light max-w-2xl text-center">
              Ready to take the next step toward{" "}
              <span className="italic font-serif text-[#BE5103]">
                international success?
              </span>
              <br />
              Let’s plan your global journey together.
            </h3>
          </div>

          <div className="mt-8 flex justify-center md:absolute md:bottom-10 md:right-10 md:mt-0">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#BE5103] text-white text-sm font-semibold hover:-translate-y-2 transition shadow-lg">
                Contact Our Team →
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
