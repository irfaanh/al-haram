import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

interface GalleryItem {
  id: string;
  image: string;
  title: string | null;
}

export default async function GalleryPage() {
  const gallery = (await prisma.gallery.findMany({
    orderBy: { createdAt: "desc" },
  })) as unknown as GalleryItem[];

  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0 overflow-hidden">
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
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
          Moments of{" "}
          <span className="text-[#BE5103] italic font-serif">
            Global Success
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Explore our student journeys, visa success stories, university
          partnerships, and unforgettable milestones.
        </p>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-12 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/3]"
            >
              <Image
                src={item.image}
                alt={item.title || "Gallery Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium truncate">
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
