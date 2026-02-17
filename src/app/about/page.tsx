import Image from "next/image";
import Header from "@/components/Header";
import { GraduationCap, Handshake, Zap, BadgeCheck } from "lucide-react";
import Footer from "@/components/Footer";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-6 md:px-0 py-20 md:py-0 overflow-hidden">
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

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            About <span className="italic font-serif text-[#BE5103]">Us</span>
          </h1>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
          Shaping Global <br />
          Futures Through{" "}
          <span className="text-[#BE5103] italic font-serif">Education</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          We guide students toward world-class international education through
          expert counselling, transparent processes, and personalized support.
        </p>
        <Link href="/courses">
          <button
            className="
    mt-8 px-6 py-3 rounded-full
    bg-[#BE5103] text-white text-sm font-semibold
    hover:bg-gradient-to-r from-[#7A3300] to-[#BE5103]
    transition-transform duration-200 ease-out
    hover:-translate-y-2
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
            <div className="group transition-all duration-500 hover:-translate-y-3">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                28,000+
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-500">
                Youth Reached <br />
                across Kerala and beyond
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group transition-all duration-500 hover:-translate-y-3">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                35,000+
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-500">
                Hours of Learning Content <br />
                skills, mindset & communication
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group transition-all duration-500 hover:-translate-y-3">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                120+
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-500">
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
            <div className="md:order-last">
              <img
                src="/images/counseling.jpg"
                alt="Vision"
                className="rounded-3xl w-full object-cover"
              />
            </div>

            {/* Text Side */}
            <div className="md:order-first">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#BE5103] mb-6 text-center md:text-left">
                Our Mission
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base text-justify md:text-left">
                Our mission is to empower youth with clarity, mindset, and
                future-ready skills — by exposing the truth about careers,
                building real awareness, and opening global opportunities that
                transform confidence, employability, and purpose. We exist to
                fix the core problem students face today: lack of direction,
                lack of exposure, and lack of understanding about how the world
                of work is changing.
              </p>

              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-green-500 mt-1 min-w-[20px]">
                    <CircleCheck size={20} />
                  </span>
                  Provide clarity and direction by telling the truth about
                  careers and industries.
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-green-500 mt-1 min-w-[20px]">
                    <CircleCheck size={20} />
                  </span>
                  Equip youth with future skills that make them confident and
                  employable.
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <span className="text-green-500 mt-1 min-w-[20px]">
                    <CircleCheck size={20} />
                  </span>
                  Create pathways for global exposure, mentorship, and real
                  opportunities.
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
              Our custom approach <br /> ensures students{" "}
            </span>
            <span className="text-[#BE5103] italic font-serif">
              success abroad
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-center py-5 md:py-15">
            {/* LEFT CARD */}
            <div
              className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold mb-3">
                Study Abroad Counselling
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Personalized counselling to help students choose the right
                country, course, and university based on their academic profile
                and future goals.
              </p>

              <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-500">
                <span>Counselling</span>
                <span>•</span>
                <span>Course Selection</span>
              </div>
            </div>

            {/* CENTER IMAGE CARD */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto">
              <Image
                src="/images/globe.jpg"
                alt="Student counselling"
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
              <h3 className="text-lg font-semibold mb-3">End-to-End Support</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                From applications and SOPs to visa filing and pre-departure
                guidance — we handle the complete study abroad journey.
              </p>

              <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-500">
                <span>Applications</span>
                <span>•</span>
                <span>Visa Support</span>
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

            <h4 className="font-semibold mb-2">Expert Counselling</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Personalized guidance from experienced study abroad advisors.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
          >
            <Handshake className="w-6 h-6 text-[#BE5103] mb-4" />

            <h4 className="font-semibold mb-2">Trusted Partnerships</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Long-term student relationships built on transparency and trust.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
          >
            <Zap className="w-6 h-6 text-[#BE5103] mb-4" />

            <h4 className="font-semibold mb-2">Fast Processing</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Efficient applications, documentation, and visa assistance.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#0C0F0E] border border-white/10 rounded-2xl p-6 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
          >
            <BadgeCheck className="w-6 h-6 text-[#BE5103] mb-4" />

            <h4 className="font-semibold mb-2">Free Consultation</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              No-obligation counselling to help students make informed
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SUCCESSFUL ADMISSIONS ================= */}
      <section className="bg-black py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-16 text-center">
            Explore our winning{" "}
            <span className="text-[#BE5103] italic font-serif">admissions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* LEFT ACCORDION */}
            <div className="space-y-4">
              {[
                "Top University Admissions",
                "High Visa Success Rate",
                "Scholarship Assistance",
                "Country-Specific Expertise",
                "Student Success Stories",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0C0F0E] border border-[#BE5103]/40 rounded-xl p-5 text-sm hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* RIGHT TABLE */}
            <div
              className="bg-[#0C0F0E] border border-[#BE5103]/40 rounded-xl p-6 text-sm hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2 overflow-x-auto"
            >
              <table className="w-full text-left text-gray-400 min-w-[300px]">
                <thead className="text-gray-300">
                  <tr>
                    <th className="pb-3 text-xs md:text-sm">Country</th>
                    <th className="pb-3 text-xs md:text-sm">University</th>
                    <th className="pb-3 text-xs md:text-sm">Intake</th>
                    <th className="pb-3 text-xs md:text-sm">Scholarship</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["UK", "University of Manchester", "Fall", "Yes"],
                    ["Canada", "University of Toronto", "Fall", "Yes"],
                    ["Australia", "Monash University", "Spring", "No"],
                    ["USA", "Arizona State University", "Fall", "Yes"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-[#BE5103]/40 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
                    >
                      {row.map((cell, j) => (
                        <td key={j} className="py-3 text-xs md:text-sm">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="bg-black pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#BE5103] via-[#BE5103]/20 to-black p-8 md:p-16 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-4xl font-light max-w-2xl mb-6 text-center">
              Get a reliable education partner that provides solutions to your{" "}
              <span className="text-[#BE5103] italic font-serif">
                global study goals
              </span>
            </h3>

            <button
              className="
    mt-8 px-6 py-3 rounded-full
    bg-[#BE5103] text-white text-sm font-semibold
    hover:bg-gradient-to-r from-[#7A3300] to-[#BE5103]
    transition-transform duration-200 ease-out
    hover:-translate-y-2
  "
            >
              Book Free Consultation →
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black py-0 px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-100 text-sm mb-4 font-semibold md:px-35">
              WHY STUDENTS CHOOSE US
            </p>

            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
              A guidance partner for your
              <span className="text-[#BE5103] italic font-serif">
                {" "}
                global education journey
              </span>
            </h2>

            <p className="text-gray-400 max-w-xl leading-relaxed mb-10 text-sm md:text-base">
              We don’t just process applications — we mentor students through
              life-changing decisions. Our focus is long-term success,
              transparent advice, and helping students confidently step into
              international education environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div
                className="bg-[#0C0F0E] border border-[#BE5103]/40 rounded-2xl p-5 text-gray-400 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
              >
                Ethical Counselling
              </div>

              <div
                className="bg-[#0C0F0E] border border-[#BE5103]/40 rounded-2xl p-5 text-gray-400 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
              >
                {" "}
                Global University Network
              </div>

              <div
                className="bg-[#0C0F0E] border border-[#BE5103]/40 rounded-2xl p-5 text-gray-400 hover:border-[#BE5103]  transition-transform duration-200 ease-out
    hover:-translate-y-2"
              >
                {" "}
                High Visa Success Rate
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / VISUAL */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/images/graduation.jpg"
              alt="Students succeeding abroad"
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
