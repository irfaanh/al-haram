import Footer from "@/components/Footer";

export default function GCRPPage() {
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
            Global Career Readiness <br />
            <span className="italic font-serif text-[#BE5103]">
              Program (GCRP)
            </span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto font-semibold">
        <p className="text-gray-400 leading-relaxed mb-10 ">
          The Global Career Readiness Program (GCRP) is designed to prepare
          students and professionals for international career opportunities by
          developing essential workplace skills, communication confidence, and
          cultural adaptability. The program focuses on practical learning,
          real-world scenarios, and industry-aligned training to help
          participants succeed in global work environments.
        </p>

        {/* LEARNING AREAS */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#BE5103]">
          Key Learning Areas
        </h2>

        <ul className="space-y-3 text-gray-300 mb-12">
          <li>• Professional Communication Skills</li>
          <li>• Resume Building and Interview Preparation</li>
          <li>• Workplace Etiquette and Cultural Awareness</li>
          <li>• Leadership and Team Collaboration</li>
          <li>• Problem-Solving and Critical Thinking</li>
          <li>• Career Planning and Goal Setting</li>
        </ul>

        {/* BENEFITS */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#BE5103]">
          Program Benefits
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>• Improved confidence in professional environments</li>
          <li>• Enhanced employability skills</li>
          <li>• Exposure to global workplace standards</li>
          <li>• Hands-on activities and practice sessions</li>
          <li>• Certification upon completion</li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
