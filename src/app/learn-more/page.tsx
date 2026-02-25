import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { CircleCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn More",
  description: "Discover the three pillars of MOMENTOR: Education Journalism, Expert Mentorship, and Strategic Career Guidance. Unlock your future with our vision and mission.",
};

export default function LearnMorePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/image.png')" }}
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
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto font-medium">
        <div className="space-y-16">
          {/* Pillar 1: Education Journalism */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#BE5103] flex items-center gap-3">
              <span className="bg-[#BE5103]/10 p-2 rounded-xl text-[#BE5103]">01</span>
              Education Journalism
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Momentor is INDIA’S First Education Journalism Platform. We move beyond brochures and marketing
              to expose the raw realities, hidden challenges, and genuine opportunities of today’s
              career landscape. Our reporting provides the truth youth need to make life-changing decisions
              with clarity and awareness.
            </p>
          </div>

          {/* Pillar 2: Expert Mentorship */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#BE5103] flex items-center gap-3">
              <span className="bg-[#BE5103]/10 p-2 rounded-xl text-[#BE5103]">02</span>
              Expert Mentorship
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We bridge the gap between student potential and industry excellence. Through our dedicated
              mentorship ecosystem, young minds gain access to experienced professionals who provide
              personalized guidance, mindset training, and strategic career mapping for the world of tomorrow.
            </p>
          </div>

          {/* Pillar 3: Career Guidance */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#BE5103] flex items-center gap-3">
              <span className="bg-[#BE5103]/10 p-2 rounded-xl text-[#BE5103]">03</span>
              Strategic Career Guidance
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Empowering individuals aged 16–30 with future-ready skills and global employability.
              Our guidance isn't just about finding a job—it's about building a career through
              internship pathways, industry certifications, and a curriculum designed for
              long-term professional success.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#BE5103]">
            Our Vision
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Our vision is to build a generation that is confident, aspirational,
            globally competitive, and deeply aware of their career possibilities.
            We aim to transform the education-to-career journey in India so that
            every young person discovers their potential, understands their
            direction, and develops the skills needed to succeed in a rapidly
            evolving global workforce.
          </p>

          <ul className="space-y-6 text-sm md:text-base mt-10">
            <li className="flex items-start gap-4 text-gray-300">
              <span className="text-green-500 mt-1 bg-green-500/10 p-1 rounded-full">
                <CircleCheck size={20} />
              </span>
              <span>Create an India where youth discover careers through **awareness and truth** — not confusion or marketing guesswork.</span>
            </li>

            <li className="flex items-start gap-4 text-gray-300">
              <span className="text-green-500 mt-1 bg-green-500/10 p-1 rounded-full">
                <CircleCheck size={20} />
              </span>
              <span>Redefine employability by combining **professional mindset**, future-skill development, and real-world exposure.</span>
            </li>

            <li className="flex items-start gap-4 text-gray-300">
              <span className="text-green-500 mt-1 bg-green-500/10 p-1 rounded-full">
                <CircleCheck size={20} />
              </span>
              <span>Build the world’s most trusted **education journalism and future-skills ecosystem** for the next generation.</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#BE5103] pt-20 pb-10">
            Our Mission
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            We exist to solve the core challenges students face today — lack of direction,
            lack of exposure, and lack of understanding about industry changes.
            By combining journalistic truth, one-on-one mentorship, and
            practical training, we help individuals achieve meaningful
            career outcomes both in India and globally.
          </p>

          <ul className="space-y-6 text-sm md:text-base">
            <li className="flex items-start gap-4 text-gray-300">
              <span className="text-green-500 mt-1 bg-green-500/10 p-1 rounded-full">
                <CircleCheck size={20} />
              </span>
              <span>Provide clarity by revealing authentic career pathways and industry realities through journalism.</span>
            </li>

            <li className="flex items-start gap-4 text-gray-300">
              <span className="text-green-500 mt-1 bg-green-500/10 p-1 rounded-full">
                <CircleCheck size={20} />
              </span>
              <span>Equip young individuals with high-level future skills and the confidence to thrive in competitive environments.</span>
            </li>

            <li className="flex items-start gap-4 text-gray-300">
              <span className="text-green-500 mt-1 bg-green-500/10 p-1 rounded-full">
                <CircleCheck size={20} />
              </span>
              <span>Create pathways for global mentorship, professional internships, and real-world success.</span>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
