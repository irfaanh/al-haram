"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Ms. Mehnaz",
    role: "Communication Trainer, Speech Therapist, Audiologist, and Founder of KNACK",
    image: "/images/member1.jpeg",
  },
  {
    name: "Chayanika Indira",
    role: "Public Speaking and Communication Skills Trainer",
    image: "/images/member.jpeg",
  },
];

export default function TeamSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Arrows - Visible only on mobile/small screens */}
      <div className="md:hidden absolute top-[80px] left-0 right-0 z-20 flex justify-between items-center px-4 pointer-events-none">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/60 backdrop-blur-md text-white hover:bg-[#BE5103] hover:border-[#BE5103] transition-all pointer-events-auto shadow-2xl cursor-pointer"
          aria-label="Previous member"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/60 backdrop-blur-md text-white hover:bg-[#BE5103] hover:border-[#BE5103] transition-all pointer-events-auto shadow-2xl cursor-pointer"
          aria-label="Next member"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible pb-16 md:pb-0 snap-x snap-mandatory scrollbar-hide px-4 md:px-0"
        style={{ scrollBehavior: "smooth" }}
      >
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="group text-center min-w-full sm:min-w-[280px] md:min-w-0 snap-center shrink-0"
          >
            <div
              className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden 
                         border-2 border-white/10 group-hover:border-[#BE5103] 
                         transition-all duration-300 group-hover:scale-105"
            >
              <Image
                src={member.image}
                fill
                className="object-cover grayscale-0 group-hover:grayscale transition-all duration-500"
                alt={member.name}
              />
            </div>
            <h4 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-[#BE5103] transition">
              {member.name}
            </h4>
            <p className="text-gray-400 text-xs md:text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
