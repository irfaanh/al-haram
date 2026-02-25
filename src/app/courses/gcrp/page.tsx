import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GCRP - Global Career Readiness Program",
  description: "The Global Career Readiness Program (GCRP) prepares students for international career opportunities with essential workplace skills and communication confidence.",
};

export default function GCRPPage() {
  return (
    <main className="bg-black text-white">
      <Header />
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 md:px-0 py-16 md:py-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/placement-hero.webp"
          alt="GCRP Course"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl pt-10 px-4">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#BE5103]/40 bg-[#BE5103]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#BE5103] font-semibold">
              COURSE DETAILS
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Global Career Readiness <br />
            <span className="italic font-serif text-[#BE5103] font-normal">
              Program (GCRP)
            </span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
        <p className="text-gray-400 leading-relaxed mb-16 text-center text-sm md:text-lg max-w-3xl mx-auto font-medium md:font-normal">
          The Global Career Readiness Program (GCRP) is designed to prepare
          students and professionals for international career opportunities by
          developing essential workplace skills, communication confidence, and
          cultural adaptability. The program focuses on practical learning,
          real-world scenarios, and industry-aligned training to help
          participants succeed in global work environments.
        </p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* LEARNING AREAS */}
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#BE5103] tracking-tight">
              Key Learning Areas
            </h2>

            <ul className="space-y-5 text-gray-300">
              {[
                "Professional Communication Skills",
                "Resume Building & Interview Preparation",
                "Workplace Etiquette & Cultural Awareness",
                "Leadership & Team Collaboration",
                "Problem-Solving & Critical Thinking",
                "Career Planning & Goal Setting",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#BE5103] group-hover:scale-150 transition-transform" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BENEFITS */}
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#BE5103] tracking-tight">
              Program Benefits
            </h2>

            <ul className="space-y-5 text-gray-300">
              {[
                "Improved confidence in professional environments",
                "Enhanced employability skills",
                "Exposure to global workplace standards",
                "Hands-on activities and practice sessions",
                "Certification upon completion",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#BE5103] group-hover:scale-150 transition-transform" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
