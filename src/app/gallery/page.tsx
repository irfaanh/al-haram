import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual chronicle of global student journeys, success stories, and university milestones at MOMENTOR.",
};

const staticGallery = [
  {
    id: "1",
    image: "/images/graduation.webp",
    title: "Global Success Stories",
    category: "Milestones",
    description: "Celebrating our students who have successfully transitioned to global careers."
  },
  {
    id: "2",
    image: "/images/visa-milestone.webp",
    title: "Visa Approval Milestones",
    category: "Visa Success",
    description: "Consistent success in securing student visas for various international destinations."
  },
  {
    id: "3",
    image: "/images/europe.webp",
    title: "European University Partnerships",
    category: "Partnerships",
    description: "Direct ties with prestigious academic institutions across Europe."
  },
  {
    id: "4",
    image: "/images/counseling.webp",
    title: "Academic Mentorship",
    category: "Journeys",
    description: "Guidance sessions helping students navigate their academic path abroad."
  },
  {
    id: "5",
    image: "/images/students-orientation.webp",
    title: "International Orientation",
    category: "Journeys",
    description: "Preparing students for the cultural and academic shift of studying abroad."
  },
  {
    id: "6",
    image: "/images/admission.webp",
    title: "University Admission Support",
    category: "Partnerships",
    description: "Simplifying the application process for global university admissions."
  },
  {
    id: "7",
    image: "/images/student-support.webp",
    title: "Comprehensive Student Readiness",
    category: "Journeys",
    description: "Full-scale preparation for future-ready skills and global opportunities."
  },
  {
    id: "8",
    image: "/images/team-about.webp",
    title: "Global Expert Panel",
    category: "Partnerships",
    description: "Collaboration with international educators to enhance student outcomes."
  },
  {
    id: "9",
    image: "/images/about-hero.webp",
    title: "Educational Excellence Framework",
    category: "Milestones",
    description: "Our structured approach to future-skills and mentorship platform."
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/placement-hero.webp"
          alt="Gallery Landmarks"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* Dark Overlay (same intensity as reference) */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#BE5103]/40 bg-[#BE5103]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#BE5103] font-semibold">
              GLOBAL MILESTONES
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Gallery
          </h1>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
          Moments of{" "}
          <span className="text-[#BE5103] italic font-serif font-normal">
            Global Success
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-6">
          A visual chronicle of global student journeys, success stories, and university milestones.
        </p>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-12 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {staticGallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[4/5] md:aspect-[4/5]"
            >
              <Image
                src={item.image}
                alt={item.title || "Gallery Image"}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold text-[#BE5103]">
                  {item.category}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#BE5103] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

