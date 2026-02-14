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
  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "asc" },
  }) as unknown as Course[];

  return (
    <main className="bg-black text-white px-0"> {/* Removed Main px padding if any */}
      {/* ================= HERO ================= */}
      <section className="py-24 md:py-32 px-6 text-center">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-16">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#BE5103] uppercase font-bold">
            OUR COURSES
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>

        <h1 className="text-3xl md:text-5xl font-light mb-6">
          Comprehensive{" "}
          <span className="italic font-serif text-[#BE5103]">
            Global Readiness Courses
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Our specialized courses — Global Student Readiness, Global Career
          Readiness, and Global Holistic Readiness Training — are designed to
          equip students with academic discipline, professional competence, and
          ethical global standards. Each program builds the foundation for
          confident international education and long-term career success.
        </p>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="pb-20 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {courses.map((course, index) => {
            const isEven = index % 2 === 0;
            const modules = course.modules as unknown as { title: string; description: string }[];

            return (
              <div key={course.id} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Text Section */}
                <div className={`${isEven ? 'order-first' : 'order-last md:order-last'}`}>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left">
                    {course.title}
                  </h3>
                  {course.description && (
                    <p className="text-gray-400 mb-6 text-sm">{course.description}</p>
                  )}

                  <div className="space-y-4 text-gray-400">
                    {Array.isArray(modules) && modules.map((mod, idx) => (
                      <details key={idx} className="group border-b border-white/10 pb-4">
                        <summary className="cursor-pointer text-[#BE5103] font-semibold list-none flex items-center justify-between">
                          <span>{mod.title}</span>
                          <span className="transform group-open:rotate-180 transition-transform text-white/50 text-xs">▼</span>
                        </summary>
                        <p className="mt-2 text-sm">{mod.description}</p>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Image Section */}
                <div className={`rounded-3xl overflow-hidden border border-white/10 ${isEven ? 'order-last' : 'order-first md:order-first'}`}>
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

