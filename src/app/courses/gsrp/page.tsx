import Footer from "@/components/Footer";

export default function GSRPPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: "url('/images/placement.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Card */}
        <div
          className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 
                  rounded-2xl px-8 py-8 md:px-12 md:py-10 shadow-xl"
        >
          <h1 className="text-3xl md:text-5xl font-light">
            Global Student Readiness <br />
            <span className="italic font-serif text-[#BE5103]">
              Program (GSRP)
            </span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto font-semibold">
        <p className="text-gray-400 leading-relaxed mb-10">
          The Global Soft Skills Readiness Program (GSRP) is designed to
          strengthen essential interpersonal and professional skills required
          for academic, career, and personal success. The program emphasizes
          communication, emotional intelligence, teamwork, and leadership
          development.
        </p>

        {/* LEARNING AREAS */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#BE5103]">
          Key Learning Areas
        </h2>

        <ul className="space-y-3 text-gray-300 mb-12">
          <li>• Communication and Presentation Skills</li>
          <li>• Emotional Intelligence</li>
          <li>• Leadership and Teamwork</li>
          <li>• Time Management and Productivity</li>
          <li>• Confidence Building</li>
          <li>• Conflict Resolution and Adaptability</li>
        </ul>

        {/* BENEFITS */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#BE5103]">
          Program Benefits
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>• Strong interpersonal communication abilities</li>
          <li>• Increased self-confidence</li>
          <li>• Better teamwork and leadership skills</li>
          <li>• Career and academic readiness</li>
          <li>• Program completion certificate</li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
