"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-16">
          <span className="w-70 h-px bg-gradient-to-l from-white to-white/15" />
          <p className="text-xl tracking-[0.35em] text-[#BE5103] uppercase font-bold">
            GALLERY
          </p>
          <span className="w-70 h-px bg-gradient-to-r from-white to-white/15" />
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
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
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "/images/graduation.jpg",
            "/images/europe.jpg",
            "/images/globe.jpg",
            "/images/home.jpg",
            "/images/placement.jpg",
            "/images/teams.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <Image
                src={src}
                alt="Gallery Image"
                width={500}
                height={500}
                className="object-cover w-full h-[300px] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
