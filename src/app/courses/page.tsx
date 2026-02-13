import Image from "next/image";
import Footer from "@/components/Footer";
import { UserCircle, Quote } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="py-32 px-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-16">
          <span className="w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-xl tracking-[0.35em] text-[#BE5103] uppercase font-bold">
            OUR COURSES
          </p>
          <span className="w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>

        <h1 className="text-4xl md:text-5xl font-light mb-6">
          Comprehensive{" "}
          <span className="italic font-serif text-[#BE5103]">
            Global Readiness Courses
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Our specialized courses — Global Student Readiness, Global Career
          Readiness, and Global Holistic Readiness Training — are designed to
          equip students with academic discipline, professional competence, and
          ethical global standards. Each program builds the foundation for
          confident international education and long-term career success.
        </p>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* ===== GSRP ===== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-semibold mb-4">
                Global Student Readiness Program (GSRP)
              </h3>

              <div className="space-y-4 text-gray-400">
                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Civic & Cultural Readiness
                  </summary>
                  <p className="mt-2 text-sm">
                    Training in civic discipline, legal awareness, cultural
                    sensitivity, and responsible global conduct before
                    departure.
                  </p>
                </details>

                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Independent Living Preparation
                  </summary>
                  <p className="mt-2 text-sm">
                    Housing etiquette, transport systems, safety awareness,
                    daily life management, and behavioral adaptation training.
                  </p>
                </details>

                <details>
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Destination-Specific Preparation
                  </summary>
                  <p className="mt-2 text-sm">
                    Country-focused readiness covering academic systems, work
                    culture norms, legal boundaries, and common international
                    student mistakes.
                  </p>
                </details>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/counseling.jpg"
                alt="GSRP"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>
          </div>

          {/* ===== GCRP ===== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/admission.jpg"
                alt="GCRP"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-semibold mb-4">
                Global Career Readiness Program (GCRP)
              </h3>

              <div className="space-y-4 text-gray-400">
                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Professional Skill Development
                  </summary>
                  <p className="mt-2 text-sm">
                    Structured training in communication, interpersonal skills,
                    networking, public speaking, and ethical persuasion.
                  </p>
                </details>

                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Applied Career Readiness
                  </summary>
                  <p className="mt-2 text-sm">
                    Skill evaluation and readiness assessment before
                    international placement to ensure professional standards.
                  </p>
                </details>

                <details>
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Paid International Internship
                  </summary>
                  <p className="mt-2 text-sm">
                    Real-world global work exposure with mentor-guided
                    performance monitoring in international environments.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* ===== GHRT ===== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-semibold mb-4">
                Global Holistic Readiness Training (GHRT)
              </h3>

              <div className="space-y-4 text-gray-400">
                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Integrated Personal Development
                  </summary>
                  <p className="mt-2 text-sm">
                    Structured development in character building, discipline,
                    accountability, and global responsibility.
                  </p>
                </details>

                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Leadership & Ethical Training
                  </summary>
                  <p className="mt-2 text-sm">
                    Preparation focused on leadership standards, ethical
                    decision-making, and professional integrity in international
                    environments.
                  </p>
                </details>

                <details>
                  <summary className="cursor-pointer text-[#BE5103] font-semibold">
                    Performance-Based Certification
                  </summary>
                  <p className="mt-2 text-sm">
                    Certification awarded based on demonstrated readiness,
                    applied skills, and structured mentor evaluation.
                  </p>
                </details>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/teams.jpg"
                alt="GHRT"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#BE5103] via-[#BE5103]/30 to-black p-20 relative">
          <div className="flex justify-center">
            <h3 className="text-3xl md:text-4xl font-light max-w-2xl text-center">
              Ready to take the next step toward{" "}
              <span className="italic font-serif text-[#BE5103]">
                international success?
              </span>
              <br />
              Let’s plan your global journey together.
            </h3>
          </div>

          <div className="absolute bottom-10 right-10">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#BE5103] text-white text-sm font-semibold hover:-translate-y-2 transition">
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
