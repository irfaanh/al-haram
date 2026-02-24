import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

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
    {
      id: "ghrt",
      title: "Global Hospitality & Readiness Training (GHRT)",
      description:
        "Develop industry-ready skills for international hospitality and retail careers through professional communication, customer service excellence, sales training, and real-world global workplace exposure.",
      image: "/images/homee.jpg",
      modules: [
        {
          title: "Customer Service Excellence",
          description:
            "Master guest interaction, service etiquette, complaint handling, and customer satisfaction strategies used in global industries.",
        },
        {
          title: "Professional Communication",
          description:
            "Build confidence in workplace communication, cross-cultural interaction, and professional language for service environments.",
        },
        {
          title: "Sales & Retail Techniques",
          description:
            "Learn product presentation, upselling methods, persuasion skills, and customer engagement techniques.",
        },
        {
          title: "Personality Development & Grooming",
          description:
            "Enhance professional appearance, confidence, body language, and behavior standards required in hospitality careers.",
        },
      ],
    },
  ];

  return (
    <main className="bg-black text-white px-0">
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 py-16 md:py-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#BE5103]/40 bg-[#BE5103]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#BE5103] font-semibold">
              WHAT WE PROVIDE
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Our{" "}
            <span className="italic font-serif text-[#BE5103]">Courses</span>
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight px-4">
          Comprehensive{" "}
          <span className="italic font-serif text-[#BE5103] font-normal">
            Global Readiness
          </span>
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-lg px-6">
          Our specialized courses — GSRP, GCRP, and GHRT — are designed to
          equip students with academic discipline, professional competence, and
          global workplace skills for international success.
        </p>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="pb-20 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {courses.map((course, index) => {
            const isEven = index % 2 === 0;
            const modules = course.modules as {
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
                  <h3 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left tracking-tight">
                    {course.title}
                  </h3>

                  {course.description && (
                    <p className="text-gray-400 mb-6 text-sm">
                      {course.description}
                    </p>
                  )}

                  <div className="space-y-4 text-gray-400">
                    {modules.map((mod, idx) => (
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

                  {/* View Program Button */}
                  <div className="mt-6">
                    <Link href={`/courses/${course.id}`}>
                      <button className="px-8 py-3.5 rounded-full bg-[#BE5103] text-white text-sm md:text-base font-bold hover:bg-[#BE5103]/90 hover:shadow-[0_0_30px_rgba(190,81,3,0.4)] transition-all duration-300 hover:-translate-y-1.5 shadow-lg cursor-pointer">
                        View Program →
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div
                  className={`rounded-3xl overflow-hidden border border-white/10 ${isEven ? "md:order-last" : "md:order-first"
                    } order-first`}
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
              <button className="px-10 py-4 rounded-full bg-[#BE5103] text-white text-sm md:text-base font-bold hover:bg-[#BE5103]/90 hover:shadow-[0_0_40px_rgba(190,81,3,0.5)] transition-all duration-300 hover:-translate-y-2 shadow-2xl cursor-pointer">
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
