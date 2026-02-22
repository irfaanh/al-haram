import Footer from "@/components/Footer";
import { CircleCheck } from "lucide-react";

export default function LearnMorePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/home.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Card */}
        <div
          className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-2xl px-8 py-8 md:px-12 md:py-10 shadow-xl"
        >
          <h1 className="text-3xl md:text-5xl font-light">
            Unlock Your Future with{" "}
            <span className="italic font-serif text-[#BE5103]">Momentor</span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto font-semibold">
        <p className="text-gray-400 leading-relaxed mb-10">
          INDIA’S First Education Journalism Platform dedicated to exposing the
          realities, challenges, and opportunities of today’s
          education-to-career journey.
        </p>

        <p className="text-gray-400 leading-relaxed mb-10">
          India’s Most Relevant Career Mentorship Platform + Next-Gen Future
          Skills Career Academy
        </p>

        <p className="text-gray-400 leading-relaxed mb-10">
          Empowering young minds aged 16–30 with clarity skills, confidence, and
          careers for the world of tomorrow.
          <br />
          Future-skills training • Global internship pathways • Industry-ready
          certifications
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#BE5103]">
          Our Vision
        </h2>

        <p className="text-gray-400 mb-6 leading-relaxed">
          Our vision is to build a generation that is confident, aspirational,
          globally competitive, and deeply aware of their career possibilities.
          We aim to transform the education-to-career journey in India so that
          every young person discovers their potential, understands their
          direction, and develops the skills needed to succeed in the world of
          tomorrow.
        </p>

        <p className="text-gray-400 mb-12 leading-relaxed">
          Through innovation, mentorship, and real-world exposure, Momentor
          envisions a future where every young person — regardless of background
          — has access to the right guidance, opportunities, and tools needed to
          succeed in a rapidly evolving global workforce.
        </p>
        <ul className="space-y-4 text-sm md:text-base">
          <li className="flex items-start gap-3 text-gray-400">
            <span className="text-green-500 mt-1 min-w-[20px]">
              <CircleCheck size={20} />
            </span>
            Create an India where youth discover careers through awareness,
            exploration, and guidance — not confusion or guesswork.
          </li>

          <li className="flex items-start gap-3 text-gray-400">
            <span className="text-green-500 mt-1 min-w-[20px]">
              <CircleCheck size={20} />
            </span>
            Redefine employability by combining mindset, skill development,
            exposure, and real-world readiness.
          </li>

          <li className="flex items-start gap-3 text-gray-400">
            <span className="text-green-500 mt-1 min-w-[20px]">
              <CircleCheck size={20} />
            </span>
            Build the world’s most trusted education journalism and
            future-skills ecosystem for the next generation.
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#BE5103] py-10">
          Our Mission
        </h2>

        <p className="text-gray-400 mb-6 leading-relaxed">
          Our mission is to empower youth with clarity, confidence, and
          future-ready capabilities by bridging the gap between education and
          real-world careers. We strive to expose the truth about industries,
          provide meaningful career awareness, and create access to
          opportunities that transform ambition into achievement. We exist to
          solve the core challenges students face today — lack of direction,
          lack of exposure, and lack of understanding about how the world of
          work is rapidly evolving.
        </p>

        <p className="text-gray-400 leading-relaxed">
          By combining education journalism, career mentorship programs, and
          future-skills training, we are committed to helping individuals
          discover their strengths, build confidence, and achieve meaningful
          career outcomes — both in India and globally.
        </p>
        <ul className="space-y-4 text-sm md:text-base">
          <li className="flex items-start gap-3 text-gray-400">
            <span className="text-green-500 mt-1 min-w-[20px]">
              <CircleCheck size={20} />
            </span>
            Provide clarity and direction by revealing authentic career pathways
            and industry realities.
          </li>

          <li className="flex items-start gap-3 text-gray-400">
            <span className="text-green-500 mt-1 min-w-[20px]">
              <CircleCheck size={20} />
            </span>
            Equip young individuals with future skills, mindset, and confidence
            to thrive in competitive environments.
          </li>

          <li className="flex items-start gap-3 text-gray-400">
            <span className="text-green-500 mt-1 min-w-[20px]">
              <CircleCheck size={20} />
            </span>
            Create pathways for global exposure, mentorship, internships, and
            real career opportunities.
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
