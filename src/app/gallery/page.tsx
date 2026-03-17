import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery - Al Haram Institute",
  description: "Explore moments from our learning environment, student activities, educational programs, and community events at Al Haram Institute.",
};

const staticGallery = [
  {
    id: "1",
    image: "/images/graduationimg.jpg",
    title: "Learning Environment",
    category: "Campus",
    description: "Our modern classrooms are designed to foster both spiritual and intellectual growth."
  },
  {
    id: "2",
    image: "/images/smroom.jpg",
    title: "Student Activities",
    category: "Events",
    description: "Engaging programs that develop character, leadership, and community values."
  },
  {
    id: "3",
    image: "/images/technologylab.jpg",
    title: "Modern Education",
    category: "Programs",
    description: "Integrating technology and modern academic tools with traditional values."
  },
  {
    id: "4",
    image: "/images/library.jpg",
    title: "Knowledge Hub",
    category: "Library",
    description: "A peaceful space for students to focus on their studies and research."
  },
  {
    id: "5",
    image: "/images/studentss.jpg",
    title: "Community Events",
    category: "Community",
    description: "Building strong social bonds and responsibility through various institute events."
  },
  {
    id: "6",
    image: "/images/support.jpg",
    title: "Mentorship Sessions",
    category: "Guidance",
    description: "Personalized attention from experienced educators to guide student progress."
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/placement-hero.webp"
          alt="Al Haram Institute Gallery"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#33744D]/40 bg-[#33744D]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-white font-semibold uppercase">
              Al Haram Chronicles
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Our <span className="italic font-serif text-[#33744D]">Gallery</span>
          </h1>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-12 md:pb-20 text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight text-black">
          Moments of <br />
          <span className="text-[#33744D] italic font-serif font-normal text-3xl md:text-5xl">
            Education & Values
          </span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed px-6">
          Explore moments from our learning environment, student activities, educational programs, and community events at Al Haram Institute.
        </p>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-12 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {staticGallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.title || "Gallery Image"}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-100 text-[10px] uppercase tracking-widest font-bold text-[#33744D] shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Content Box */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#33744D] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3 font-medium">
                  {item.description}
                </p>

                {/* Decorative bar */}
                <div className="w-0 group-hover:w-16 h-1 bg-[#33744D] mt-6 transition-all duration-700 delay-200" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

