import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { CircleCheck, BookOpen, Heart, Users, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn More - Al Haram Institute",
  description:
    "Discover the three pillars of Al Haram Institute: Integrated Knowledge, Character Development, and Leadership Training. Unlock your potential with our values-based education.",
};

export default function LearnMorePage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Header />
      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/librarybanner.jpg"
          alt="Unlock Your Future"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Card */}
        <div
          className="relative z-10 bg-[#33744D]/10 backdrop-blur-xl border border-white/20 
                     rounded-[2rem] px-8 py-8 md:px-12 md:py-10 shadow-2xl"
        >
          <h1 className="text-3xl md:text-5xl font-light text-white">
            <span className="italic font-serif text-[#33744D]">Al Haram Institute</span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-24 md:space-y-32">
          {/* Pillar 1: Integrated Knowledge */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-last md:order-first">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full border border-[#33744D]/20 bg-[#33744D]/5">
                <span className="flex h-2 w-2 rounded-full bg-[#33744D]" />
                <p className="text-[10px] md:text-xs tracking-[0.2em] text-[#33744D] font-bold uppercase">Pillar One</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black flex items-center gap-4">
                Integrated Knowledge
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify md:text-left">
                At Al Haram Institute, we provide a balanced curriculum that seamlessly integrates authentic Islamic teachings with modern academic excellence. We believe that true education nourishes both the soul and the mind, preparing students to excel in their studies while remaining deeply rooted in their values.
              </p>
            </div>
            <div className="order-first md:order-last relative h-64 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/islamicknowlwdge.jpg"
                alt="Integrated Knowledge"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Pillar 2: Character Development */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative h-64 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/lifeskill.jpg"
                alt="Character Development"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full border border-[#33744D]/20 bg-[#33744D]/5">
                <span className="flex h-2 w-2 rounded-full bg-[#33744D]" />
                <p className="text-[10px] md:text-xs tracking-[0.2em] text-[#33744D] font-bold uppercase">Pillar Two</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black flex items-center gap-4">
                Character & Ethics
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify md:text-left">
                Character building is at the heart of everything we do. We focus on developing moral integrity, discipline, and strong ethical values in our students. Through personalized mentorship, we guide them to become responsible individuals who lead with compassion and integrity.
              </p>
            </div>
          </div>

          {/* Pillar 3: Leadership Training */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-last md:order-first">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full border border-[#33744D]/20 bg-[#33744D]/5">
                <span className="flex h-2 w-2 rounded-full bg-[#33744D]" />
                <p className="text-[10px] md:text-xs tracking-[0.2em] text-[#33744D] font-bold uppercase">Pillar Three</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black flex items-center gap-4">
                Leadership & Life Skills
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify md:text-left">
                We empower students with the essential life skills and leadership qualities needed to succeed in a rapidly changing world. From communication skills to critical thinking, we provide the tools and confidence required for our students to become the leaders of tomorrow.
              </p>
            </div>
            <div className="order-first md:order-last relative h-64 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/career.webp"
                alt="Leadership Training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-32 pt-20 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#33744D]">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg text-justify md:text-left">
                Our vision is to build a generation that is confident, knowledgeable, and deeply aware of their moral purpose. We aim to transform the educational journey into a path of discovery where students develop the expertise and character needed to contribute positively to the global community.
              </p>
              <ul className="space-y-6">
                {[
                  "Discover purpose through a blend of values and knowledge.",
                  "Redefine success with character and ethical excellence.",
                  "Build a trusted ecosystem for holistic student development."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700">
                    <span className="text-[#33744D] mt-1 bg-[#33744D]/5 p-1 rounded-full border border-[#33744D]/10">
                      <CircleCheck size={20} />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#33744D]">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg text-justify md:text-left">
                We exist to provide a safe, disciplined, and nurturing environment where every student can thrive. By combining rigorous academic training with authentic mentors and spiritual guidance, we help individuals achieve meaningful outcomes in both their education and their personal lives.
              </p>
              <ul className="space-y-6">
                {[
                  "Provide clarity through authentic Islamic and modern guidance.",
                  "Equip students with future-ready skills and moral confidence.",
                  "Create pathways for leadership and lifelong ethical success."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700">
                    <span className="text-[#33744D] mt-1 bg-[#33744D]/5 p-1 rounded-full border border-[#33744D]/10">
                      <CircleCheck size={20} />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center text-center bg-[#33744D]/5 p-8 md:p-16 rounded-[3rem] border border-[#33744D]/10">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl text-lg">
            Join Al Haram Institute today and experience a transformative education that balances modern learning with timeless values.
          </p>
          <Link
            href="#"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#33744D] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#2a5f3f] transition-all transform hover:scale-105 shadow-xl hover:shadow-[#33744D]/25"
          >
            Apply Now
            <ArrowUpRight size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
