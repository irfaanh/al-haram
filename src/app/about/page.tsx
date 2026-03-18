import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { GraduationCap, Users, ShieldCheck, BookOpen, CircleCheck, Target, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";
import TeamSlider from "@/components/TeamSlider";

export const metadata: Metadata = {
  title: "About Us - AL HARAM Institute",
  description: "Learn about AL HARAM Institute, an educational institute focused on developing knowledge, moral character, and leadership by integrating Islamic values with modern education.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* HEADER */}
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-4 md:px-0 py-16 md:py-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/studentss.jpg"
          alt="About AL HARAM Institute"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#33744D]/40 bg-[#33744D]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-white font-semibold">
              WHO ARE WE
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-white">
            About <span className="italic font-serif text-[#33744D]">Us</span>
          </h1>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight px-4 text-black">
          Nurturing Minds with <br />
          <span className="text-[#33744D] italic font-serif font-normal">Knowledge & Values</span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed px-6">
          AL HARAM Institute is dedicated to providing an integrated educational
          experience that combines authentic Islamic learning with modern academic
          development.
        </p>
        <Link href="/contact">
          <button
            className="
    mt-10 px-8 py-3.5 rounded-full
    bg-[#33744D] text-white text-sm md:text-base font-bold
    hover:bg-[#33744D]/90
    hover:shadow-[0_10px_30px_rgba(51,116,77,0.3)]
    transition-all duration-300 
    hover:-translate-y-1.5
    cursor-pointer
  "
          >
            Contact Us →
          </button>
        </Link>
      </section>

      {/* ================= IMAGE CARD ================= */}
      <section className="flex justify-center px-6">
        <div className="relative w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl">
          <Image
            src="/images/aboutimage.jpg"
            alt="Students at Al Haram Institute"
            width={1200}
            height={600}
            className="object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
            {/* Mission Pillar 1 */}
            <div className="group transition-all duration-500 hover:-translate-y-3 bg-[#33744D]/5 border border-[#33744D]/10 p-8 rounded-[2rem]">
              <div className="w-12 h-12 bg-[#33744D]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#33744D] group-hover:text-white transition-all">
                <BookOpen size={24} className="text-[#33744D] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Integrated Learning</h3>
              <p className="text-sm text-gray-500">
                A balanced curriculum blending Islamic values with modern academic excellence.
              </p>
            </div>

            {/* Mission Pillar 2 */}
            <div className="group transition-all duration-500 hover:-translate-y-3 bg-[#33744D]/5 border border-[#33744D]/10 p-8 rounded-[2rem]">
              <div className="w-12 h-12 bg-[#33744D]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#33744D] group-hover:text-white transition-all">
                <Target size={24} className="text-[#33744D] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Character Building</h3>
              <p className="text-sm text-gray-500">
                Focus on developing moral character, ethics, and strong discipline in every student.
              </p>
            </div>

            {/* Mission Pillar 3 */}
            <div className="group transition-all duration-500 hover:-translate-y-3 bg-[#33744D]/5 border border-[#33744D]/10 p-8 rounded-[2rem]">
              <div className="w-12 h-12 bg-[#33744D]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#33744D] group-hover:text-white transition-all">
                <Users size={24} className="text-[#33744D] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Leadership Growth</h3>
              <p className="text-sm text-gray-500">
                Preparing the next generation of leaders with life skills and global awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="py-12 md:py-20 px-6 bg-white text-black">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-[#33744D] to-[#33744D]/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#33744D] uppercase font-bold text-center">
            OUR TEAM
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-[#33744D] to-[#33744D]/15" />
        </div>

        <div className="max-w-6xl mx-auto">
          <TeamSlider />
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
          {/* ================= OUR MISSION ================= */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image Side */}
            <div className="md:order-last px-2 md:px-0">
              <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/support.jpg"
                  alt="Mission of Al Haram Institute"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="md:order-first">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full border border-[#33744D]/20 bg-[#33744D]/5">
                <span className="flex h-2 w-2 rounded-full bg-[#33744D]" />
                <p className="text-[10px] md:text-xs tracking-[0.2em] text-[#33744D] font-bold uppercase">Our Purpose</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#33744D] mb-8">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-relaxed mb-10 text-sm md:text-lg">
                Our mission is to nourish the hearts and minds of students through an integrated educational path. We aim to bridge the gap between spiritual growth and intellectual development, ensuring our students are prepared for both the challenges of the modern world and the fulfillment of their moral responsibilities.
              </p>

              <ul className="space-y-5">
                {[
                  "Developing strong moral character and ethical values.",
                  "Integrating authentic Islamic teachings with modern education.",
                  "Nurturing leadership, discipline, and essential life skills.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 group">
                    <span className="text-[#33744D] mt-1 bg-[#33744D]/10 p-1.5 rounded-lg group-hover:bg-[#33744D] group-hover:text-white transition-all">
                      <CircleCheck size={18} />
                    </span>
                    <span className="max-w-md font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= OUR VISION ================= */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image Side */}
            <div className="order-first px-2 md:px-0">
              <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/ourvision.jpg"
                  alt="Vision of Al Haram Institute"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="order-last">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full border border-[#33744D]/20 bg-[#33744D]/5">
                <span className="flex h-2 w-2 rounded-full bg-[#33744D]" />
                <p className="text-[10px] md:text-xs tracking-[0.2em] text-[#33744D] font-bold uppercase">Our Future</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#33744D] mb-8">
                Our Vision
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-lg">
                We envision AL HARAM Institute as a leading center of excellence where students discover their full potential as knowledgeable, ethical, and responsible individuals. Our goal is to shape future leaders who are deeply rooted in their values and equipped with the wisdom and expertise to contribute positively to society.
              </p>

              <ul className="space-y-5">
                {[
                  "Building a generation of confident and globally competitive students.",
                  "Being the most trusted institute for value-based modern education.",
                  "Developing individuals with purpose, discipline, and integrity.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 group">
                    <span className="text-[#33744D] mt-1 bg-[#33744D]/10 p-1.5 rounded-lg group-hover:bg-[#33744D] group-hover:text-white transition-all">
                      <CircleCheck size={18} />
                    </span>
                    <span className="max-w-md font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      


      {/* ================= CORE VALUES ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Our Core <span className="text-[#33744D] italic font-serif">Pillars</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Academic Excellence",
              desc: "Structured modern curriculum designed for intellectual growth."
            },
            {
              icon: Heart,
              title: "Moral Integrity",
              desc: "Nurturing ethical values and authentic Islamic character."
            },
            {
              icon: ShieldCheck,
              title: "Discipline",
              desc: "A safe and respectful environment focused on focused learning."
            },
            {
              icon: Users,
              title: "Leadership",
              desc: "Developing confidence and responsibility in every student."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#33744D] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <item.icon className="w-8 h-8 text-[#33744D] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2 text-black">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] bg-[#33744D] p-8 md:p-20 flex flex-col items-center text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-2xl md:text-5xl font-light max-w-3xl mb-8 relative z-10 leading-tight">
              Begin your journey of knowledge and <span className="italic font-serif opacity-90">spiritual growth</span> today
            </h3>
            <Link href="/contact">
              <button
                className="
    px-10 py-4 rounded-full
    bg-white text-[#33744D] text-sm md:text-base font-bold
    hover:bg-gray-100
    transition-all duration-300
    hover:-translate-y-1.5 shadow-lg
    cursor-pointer relative z-10
  "
              >
                Inquire About Admissions
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
