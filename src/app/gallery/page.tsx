import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const staticGallery = [
  { id: "1", image: "/images/about.jpg", title: "About Our Mission" },
  { id: "2", image: "/images/admission.jpg", title: "Admission Guidance" },
  { id: "3", image: "/images/counseling.jpg", title: "Expert Counseling" },
  { id: "4", image: "/images/europe.jpg", title: "Study in Europe" },
  { id: "5", image: "/images/graduation.jpg", title: "Success Stories" },
  { id: "6", image: "/images/students.jpg", title: "Our Students" },
  { id: "7", image: "/images/support.jpg", title: "Full Support" },
  { id: "8", image: "/images/teams.jpg", title: "Our Expert Team" },
  { id: "9", image: "/images/visa1.jpg", title: "Visa Success" },
];

export default function GalleryPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: "url('/images/placement.jpg')" }}
        />

        {/* Dark Overlay (same intensity as reference) */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border border-[#BE5103]/40 bg-[#BE5103]/10 backdrop-blur-sm">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#BE5103] font-semibold">
              WHAT WE DONE
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
          Explore our student journeys, visa success stories, university
          partnerships, and unforgettable milestones.
        </p>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-12 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {staticGallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/3]"
            >
              <Image
                src={item.image}
                alt={item.title || "Gallery Image"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-white text-lg font-medium">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

