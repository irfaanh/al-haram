import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { GraduationCap, Handshake, Zap, BadgeCheck, CircleCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MOMENTOR, India's first education journalism and mentorship platform. Shaping global futures through clarity, mindset, and future-ready skills.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 md:px-0 py-16 md:py-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/teams.jpg')" }}
        />

        {/* Dark Overlay (same intensity as reference) */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#BE5103]/40 bg-[#BE5103]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#BE5103] font-semibold">
              WHO ARE WE
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            About <span className="italic font-serif text-[#BE5103]">Us</span>
          </h1>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold leading-tight px-4">
          Shaping Global <br />
          Futures Through{" "}
          <span className="text-[#BE5103] italic font-serif">Education</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-6">
          India's first education journalism and mentorship platform, bridging the gap between student potential and global excellence.
        </p>
        <Link href="/courses">
          <button
            className="
    mt-10 px-8 py-3.5 rounded-full
    bg-[#BE5103] text-white text-sm md:text-base font-bold
    hover:bg-[#BE5103]/90
    hover:shadow-[0_0_30px_rgba(190,81,3,0.4)]
    transition-all duration-300 
    hover:-translate-y-1.5
    cursor-pointer
  "
          >
            Explore Opportunities →
          </button>
        </Link>
      </section>

      {/* ================= IMAGE CARD ================= */}
      <section className="flex justify-center px-6 hover">
        <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden">
          <Image
            src="/images/teams.jpg"
            alt="Team"
            width={1200}
            height={600}
            className="object-cover w-full h-auto"
          />
        </div>
      </section>
      <section className="bg-black text-white py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
            {/* Stat 1 */}
            <div className="group transition-all duration-500 hover:-translate-y-3 bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] md:bg-transparent md:border-none md:p-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#BE5103] md:text-white group-hover:text-[#BE5103] transition-colors">
                28,000+
              </h2>
              <p className="mt-4 text-sm md:text-lg text-gray-400 font-medium md:font-normal">
                Youth Reached <br />
                across Kerala and beyond
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group transition-all duration-500 hover:-translate-y-3 bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] md:bg-transparent md:border-none md:p-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#BE5103] md:text-white group-hover:text-[#BE5103] transition-colors">
                35,000+
              </h2>
              <p className="mt-4 text-sm md:text-lg text-gray-400 font-medium md:font-normal">
                Hours of Learning Content <br />
                skills, mindset & communication
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group transition-all duration-500 hover:-translate-y-3 bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] md:bg-transparent md:border-none md:p-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#BE5103] md:text-white group-hover:text-[#BE5103] transition-colors">
                120+
              </h2>
              <p className="mt-4 text-sm md:text-lg text-gray-400 font-medium md:font-normal">
                Training & Mentorship Programs <br />
                designed for real employability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="bg-black py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
          {/* ================= OUR VISION ================= */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image Side */}
            <div className="md:order-last px-2 md:px-0">
              <img
                src="/images/missionn.jpg"
                alt="Vision"
                className="rounded-3xl w-full aspect-[4/3] md:aspect-auto object-cover border border-white/5"
              />
            </div>

            {/* Text Side */}
            <div className="md:order-first px-4 md:px-0">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#BE5103] mb-8 text-center md:text-left">
                Our Mission
              </h2>

              <p className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base text-center md:text-left mx-auto md:mx-0 max-w-2xl font-medium md:font-normal">
                Our mission is to empower youth with clarity, mindset, and
                future-ready skills — by exposing the truth about careers,
                building real awareness, and opening global opportunities that
                transform confidence, employability, and purpose. We exist to
                fix the core problem students face today: lack of direction,
                lack of exposure, and lack of understanding about how the world
                of work is changing.
              </p>

              <ul className="space-y-5 text-sm md:text-base flex flex-col items-center md:items-start">
                <li className="flex items-start gap-4 text-gray-300 group">
                  <span className="text-[#BE5103] mt-1 bg-[#BE5103]/10 p-1.5 rounded-lg group-hover:bg-[#BE5103] group-hover:text-black transition-all">
                    <CircleCheck size={18} />
                  </span>
                  <span className="max-w-md">Provide clarity and direction by telling the truth about careers and industries.</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300 group">
                  <span className="text-[#BE5103] mt-1 bg-[#BE5103]/10 p-1.5 rounded-lg group-hover:bg-[#BE5103] group-hover:text-black transition-all">
                    <CircleCheck size={18} />
                  </span>
                  <span className="max-w-md">Equip youth with future skills that make them confident and employable.</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300 group">
                  <span className="text-[#BE5103] mt-1 bg-[#BE5103]/10 p-1.5 rounded-lg group-hover:bg-[#BE5103] group-hover:text-black transition-all">
                    <CircleCheck size={18} />
                  </span>
                  <span className="max-w-md">Create pathways for global exposure, mentorship, and real opportunities.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ================= OUR MISSION ================= */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image Side */}
            <div className="order-first">
              <img
                src="/images/teams.jpg"
                alt="Mission"
                className="rounded-3xl w-full object-cover"
              />
            </div>

            {/* Text Side */}
            <div className="order-last">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#BE5103] mb-6 text-center md:text-left">
                Our Vision
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base text-justify md:text-left">
                Our vision is to build a generation that is confident,
                aspirational, globally competitive, and deeply aware of their
                career possibilities. We aim to reshape the education-to-career
                journey in India — so that every young person knows who they
                are, what they want, and how to succeed in the world of
                tomorrow.
              </p>

              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-green-500 mt-1 min-w-[20px]">
                    <CircleCheck size={20} />
                  </span>
                  Create an India where youth discover careers through awareness
                  — not guesswork.
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-green-500 mt-1 min-w-[20px]">
                    <CircleCheck size={20} />
                  </span>
                  Redefine employability with mindset, skill, exposure, and
                  real-world readiness.
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-green-500 mt-1 min-w-[20px]">
                    <CircleCheck size={20} />
                  </span>
                  Build the world’s most trusted education journalism and
                  future-skills platform.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-20">
        <h2 className="text-2xl md:text-4xl font-light mb-10 md:mb-16 text-center md:text-left">
          Let’s get to know{" "}
          <span className="text-[#BE5103] italic font-serif">each other</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-600/80 to-black h-96 md:h-auto">
            <Image
              src="/images/member1.jpg"
              alt="Team member"
              width={500}
              height={600}
              className="object-cover w-full h-full opacity-60 mix-blend-overlay"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="font-semibold text-xl">Abu Sayeed</p>
              <p className="text-xs text-gray-200">Founder & CEO</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600/80 to-black h-96 md:h-auto">
            <Image
              src="/images/member1.jpg"
              alt="Team member"
              width={500}
              height={600}
              className="object-cover w-full h-full opacity-60 mix-blend-overlay"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="font-semibold text-xl">Abu Sayeed</p>
              <p className="text-xs text-gray-200">Co-Founder & COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH (REF STYLE) ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight text-center md:text-left mb-10">
            <span className="text-white">
              Our mentorship approach <br /> ensures students{" "}
            </span>
            <span className="text-[#BE5103] italic font-serif">
              gain career clarity
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-center py-5 md:py-15">
            {/* LEFT CARD */}
            <div
              className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold mb-3">
                Education Journalism
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We investigate and expose the truth about industries, courses,
                and career paths to provide students with unbiased,
                actionable insights.
              </p>

              <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-500">
                <span>Awareness</span>
                <span>•</span>
                <span>Industry Truth</span>
              </div>
            </div>

            {/* CENTER IMAGE CARD */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto">
              <Image
                src="/images/globe.jpg"
                alt="Global mentorship"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* RIGHT CARD */}
            <div
              className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold mb-3">Future-Skills Training</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Bridging the employability gap by training youth in communication,
                mindset, and practical skills required for global excellence.
              </p>

              <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-500">
                <span>Skill Mastery</span>
                <span>•</span>
                <span>Employability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST CARDS ================= */}
      <section className="bg-black pb-5 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1 */}
          <div
            className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
          >
            <GraduationCap className="w-6 h-6 text-[#BE5103] mb-4" />

            <h4 className="font-semibold mb-2">Expert Mentorship</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Personalized guidance from experienced mentors across various industries.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
          >
            <Handshake className="w-6 h-6 text-[#BE5103] mb-4" />

            <h4 className="font-semibold mb-2">Journalistic Integrity</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Reliable career information built on research, transparency, and trust.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
          >
            <Zap className="w-6 h-6 text-[#BE5103] mb-4" />

            <h4 className="font-semibold mb-2">Skill Acceleration</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fast-track your personal and professional growth with focused training.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
          >
            <BadgeCheck className="w-6 h-6 text-[#BE5103] mb-4" />

            <h4 className="font-semibold mb-2">Free Discovery Session</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Start your journey with a no-obligation call to discover your potential.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-black pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#BE5103] via-[#BE5103]/20 to-black p-8 md:p-16 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-4xl font-light max-w-2xl mb-6 text-center">
              Partner with a reliable mentor who provides solutions for your{" "}
              <span className="text-[#BE5103] italic font-serif">
                career growth
              </span>
            </h3>
            <Link href="/contact">
              <button
                className="
    mt-8 px-6 py-3 rounded-full
    bg-[#BE5103] text-white text-sm font-semibold
    hover:bg-gradient-to-r from-[#7A3300] to-[#BE5103]
    transition-transform duration-200 ease-out
    hover:-translate-y-2
    cursor-pointer
  "
              >
                Book Free Mentorship →
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black py-0 px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-100 text-sm mb-4 font-semibold">
              WHY YOUTH CHOOSE US
            </p>

            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
              A guidance partner for your
              <span className="text-[#BE5103] italic font-serif">
                {" "}
                professional journey
              </span>
            </h2>

            <p className="text-gray-400 max-w-xl leading-relaxed mb-10 text-sm md:text-base">
              We don’t just offer courses — we mentor youth through
              life-changing career decisions. Our focus is long-term success,
              unbiased journalism, and helping students confidently navigate the
              global professional landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div
                className="bg-[#0C0F0E] border border-[#BE5103]/40 rounded-2xl p-5 text-gray-400 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2 text-center"
              >
                Career Clarity
              </div>

              <div
                className="bg-[#0C0F0E] border border-[#BE5103]/40 rounded-2xl p-5 text-gray-400 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2 text-center"
              >
                Unbiased Journalism
              </div>

              <div
                className="bg-[#0C0F0E] border border-[#BE5103]/40 rounded-2xl p-5 text-gray-400 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2 text-center"
              >
                Global Exposure
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / VISUAL */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/images/graduation.jpg"
              alt="Youth achieving success"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
