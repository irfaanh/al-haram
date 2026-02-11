import Image from "next/image";
import Footer from "@/components/Footer";
import { UserCircle, Quote } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="py-32 px-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-16">
          <span className="w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-xl tracking-[0.35em] text-[#BE5103] uppercase font-bold">
            SERVICES
          </p>
          <span className="w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>
        <h1 className="text-4xl md:text-5xl font-light mb-4">
          Our <span className="italic font-serif text-[#BE5103]">Services</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We provide end-to-end guidance for students aspiring to study abroad —
          from counselling to campus arrival.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* ===== SERVICE 1 ===== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-light mb-4 text-white text-m font-semibold">
                Study Abroad Counselling
              </h3>

              <div className="space-y-4 text-gray-400">
                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] text-m font-semibold">
                    Country & Course Selection
                  </summary>
                  <p className="mt-2 text-sm">
                    Personalized guidance based on academic profile, budget, and
                    career goals.
                  </p>
                </details>

                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] text-m font-semibold">
                    University Shortlisting
                  </summary>
                  <p className="mt-2 text-sm">
                    Shortlisting top universities across UK, USA, Canada,
                    Australia & Europe.
                  </p>
                </details>

                <details>
                  <summary className="cursor-pointer text-[#BE5103] text-m font-semibold">
                    Career Pathway Planning
                  </summary>
                  <p className="mt-2 text-sm">
                    Helping students align education with long-term career
                    success.
                  </p>
                </details>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/counseling.jpg"
                alt="Counselling"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>
          </div>

          {/* ===== SERVICE 2 ===== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/admission.jpg"
                alt="Admissions"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-light mb-4 text-white text-m font-semibold">
                Admissions & Applications
              </h3>

              <div className="space-y-4 text-gray-400">
                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer  text-[#BE5103] text-m font-semibold">
                    Application Processing
                  </summary>
                  <p className="mt-2 text-sm">
                    Error-free applications with strong documentation.
                  </p>
                </details>

                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] text-m font-semibold">
                    SOP & LOR Assistance
                  </summary>
                  <p className="mt-2 text-sm">
                    Professionally crafted Statements of Purpose & Letters.
                  </p>
                </details>

                <details>
                  <summary className="cursor-pointer text-[#BE5103] text-m font-semibold">
                    Offer Letter Follow-ups
                  </summary>
                  <p className="mt-2 text-sm">
                    Continuous follow-ups to ensure faster responses.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* ===== SERVICE 3 ===== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-light mb-4 text-white text-m font-semibold">
                Visa & Pre-Departure Support
              </h3>

              <div className="space-y-4 text-gray-400">
                <details open className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] text-m font-semibold">
                    Visa Documentation
                  </summary>
                  <p className="mt-2 text-sm">
                    Complete assistance for visa files and financial proof.
                  </p>
                </details>

                <details className="border-b border-white/10 pb-4">
                  <summary className="cursor-pointer text-[#BE5103] text-m font-semibold">
                    Interview Preparation
                  </summary>
                  <p className="mt-2 text-sm">
                    Mock interviews and expert tips for high success rates.
                  </p>
                </details>

                <details>
                  <summary className="cursor-pointer text-[#BE5103] text-m font-semibold">
                    Pre-Departure Briefing
                  </summary>
                  <p className="mt-2 text-sm">
                    Travel, accommodation, and campus life guidance.
                  </p>
                </details>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/visa1.jpg"
                alt="Visa"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#BE5103] via-[#BE5103]/30 to-black p-20 relative">
          {/* CENTERED TEXT */}
          <div className="flex justify-center">
            <h3 className="text-3xl md:text-4xl font-light max-w-2xl text-center">
              Get a reliable education partner that provides solutions to your{" "}
              <span className="italic font-serif text-[#BE5103]">
                global study goals
              </span>
            </h3>
          </div>

          {/* BUTTON — EXACT IMAGE POSITION */}
          <div className="absolute bottom-10 right-10">
            <button
              className="
        px-8 py-4 rounded-full
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
      {/* ================= FEATURED WORK ================= */}
      <section className="bg-black py-0 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Our{" "}
              <span className="italic font-serif text-[#BE5103] font-semibold">
                Featured Work
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-m">
              A curated selection of student success stories, university
              partnerships, and global admission achievements.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "UK & Europe Admissions",
                tags: ["Study Abroad", "Admissions"],
                image: "/images/europe.jpg",
              },
              {
                title: "Canada Student Visa Success",
                tags: ["Visa", "Consulting"],
                image: "/images/vissa.jpg",
              },
              {
                title: "Global University Placements",
                tags: ["Universities", "Counselling"],
                image: "/images/placement.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0C0F0E] border border-white/10 rounded-3xl overflow-hidden hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#BE5103]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-black py-30 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <span className="w-70 h-px bg-gradient-to-l from-white to-white/15" />
            <p className="text-l tracking-[0.35em] text-[#BE5103] uppercase font-bold">
              TESTIMONIALS
            </p>
            <span className="w-70 h-px bg-gradient-to-r from-white to-white/15" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-center mb-24">
            What our{""}{" "}
            <span className="text-[#BE5103] italic font-serif">students</span>{" "}
            say:
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div
              className="bg-[#111] border border-[#BE5103]/40 rounded-3xl p-10 hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <UserCircle size={42} className="text-[#BE5103]" />
                <div>
                  <p className="text-white font-semibold">Ayesha Rahman</p>
                  <p className="text-xs text-gray-400">UK · MSc Data Science</p>
                </div>
              </div>

              <Quote size={28} className="text-[#BE5103]/40 mb-4" />

              <p className="text-gray-300 text-sm leading-relaxed">
                Momentor provided honest counselling and constant support
                throughout my application and visa process. I felt confident at
                every step.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="bg-[#111] border border-[#BE5103]/40 rounded-3xl p-10 hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              {" "}
              <div className="flex items-center gap-4 mb-6">
                <UserCircle size={42} className="text-[#BE5103]" />
                <div>
                  <p className="text-white font-semibold">Rahul Mehta</p>
                  <p className="text-xs text-gray-400">Canada · MBA</p>
                </div>
              </div>
              <Quote size={28} className="text-[#BE5103]/40 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed">
                From university shortlisting to visa approval, the team guided
                me clearly and professionally. Highly recommended for study
                abroad.
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="bg-[#111] border border-[#BE5103]/40 rounded-3xl p-10 hover:border-[#BE5103] transition-transform duration-200 ease-out
    hover:-translate-y-2"
            >
              {" "}
              <div className="flex items-center gap-4 mb-6">
                <UserCircle size={42} className="text-[#BE5103]" />
                <div>
                  <p className="text-white font-semibold">Sara Khan</p>
                  <p className="text-xs text-gray-400">Australia · Bachelors</p>
                </div>
              </div>
              <Quote size={28} className="text-[#BE5103]/40 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed">
                Their transparent process and timely updates made everything
                simple. I’m now studying at my dream university abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
