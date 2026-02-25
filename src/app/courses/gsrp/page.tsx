import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GSRP - Global Student Readiness Program",
  description: "The Global Student Readiness Program (GSRP) strengthens interpersonal and professional skills for academic, career, and personal success.",
};

export default function GSRPPage() {
  return (
    <main className="bg-black text-white">
      <Header />
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 md:px-0 py-16 md:py-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-bottom opacity-50"
          style={{ backgroundImage: "url('/images/placement.jpg')" }}
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
            Global Student Readiness <br />
            <span className="italic font-serif text-[#BE5103] font-normal">
              Program (GSRP)
            </span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
        <p className="text-gray-400 leading-relaxed mb-16 text-center text-sm md:text-lg max-w-3xl mx-auto font-medium md:font-normal">
          The Global Soft Skills Readiness Program (GSRP) is designed to
          strengthen essential interpersonal and professional skills required
          for academic, career, and personal success. The program emphasizes
          communication, emotional intelligence, teamwork, and leadership
          development.
        </p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* LEARNING AREAS */}
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#BE5103] tracking-tight">
              Key Learning Areas
            </h2>

            <ul className="space-y-5 text-gray-300">
              {[
                "Communication & Presentation Skills",
                "Emotional Intelligence",
                "Leadership & Teamwork",
                "Time Management & Productivity",
                "Confidence Building",
                "Conflict Resolution & Adaptability",
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
                "Strong interpersonal communication abilities",
                "Increased self-confidence",
                "Better teamwork and leadership skills",
                "Career and academic readiness",
                "Program completion certificate",
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
