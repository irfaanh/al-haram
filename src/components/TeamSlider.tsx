"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Muhammad Shafeeq",
    role: "Communication Trainer and Speech Therapist",
    image: "/images/shafeeq.jpg",
  },
  {
    name: "Mr. Twahir",
    role: "Skills Trainer",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Twahir",
    role: "Skills Trainer",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Twahir",
    role: "Skills Trainer",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Twahir",
    role: "Skills Trainer",
    image: "/images/twahir.jpg",
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
    <div className="relative group overflow-hidden">
      <div
        className="grid grid-cols-4 md:flex md:flex-wrap md:justify-center gap-2 sm:gap-4 md:gap-8 px-2 md:px-0"
      >
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="group text-center min-w-0"
          >
            <div
              className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-48 md:h-48 mx-auto mb-2 md:mb-6 rounded-full overflow-hidden 
                         border-[1px] md:border-2 border-gray-200 group-hover:border-[#33744D] 
                         transition-all duration-300 group-hover:scale-105"
            >
              <Image
                src={member.image}
                fill
                className="object-cover grayscale-0 group-hover:grayscale transition-all duration-500"
                alt={member.name}
              />
            </div>
            <h4 className="text-[10px] sm:text-xs md:text-xl font-semibold mb-0.5 md:mb-1 group-hover:text-[#33744D] transition line-clamp-2 px-1">
              {member.name}
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-400 line-clamp-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
