"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Muhammad Shafeeque Al Ahsani",
    role: "Chief Executive Officer (CEO)",
    image: "/images/shafeeq.jpg",
  },
  {
    name: "Mr. Thwahir Nizami",
    role: "Chief Operation Officer (COO)",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Muhammed Ashique Nizami",
    role: "Principal & Sharia Head",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Muhammed Saeed Al Ahsani",
    role: "Vice Principal",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Muhammed Ashique Al Ahsani",
    role: "Mudarris",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Muhammed Saniyy Al Ahsani",
    role: "Mudarris",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Ajmal Ahmed Al Ahsani",
    role: "Academic Developers",
    image: "/images/twahir.jpg",
  },
  {
    name: "Mr. Muhammed Nadeer Al Adani",
    role: "Academic Developers",
    image: "/images/twahir.jpg",
  },
];

export default function TeamSlider() {
  const row1 = teamMembers.slice(0, 3);
  const row2 = teamMembers.slice(3, 6);
  const row3 = teamMembers.slice(6);

  return (
    <div className="relative overflow-hidden">
      {/* Leadership Row (3 Members) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-12 mb-12 md:mb-16 px-2 md:px-4">
        {row1.map((member, i) => (
          <div key={i} className="group text-center min-w-0">
            <div className="relative w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 mx-auto mb-2 md:mb-8 rounded-full overflow-hidden 
                         border-2 md:border-4 border-gray-100 group-hover:border-[#33744D] 
                         transition-all duration-500 group-hover:scale-105 shadow-xl">
              <Image
                src={member.image}
                fill
                className="object-cover transition-transform duration-700"
                alt={member.name}
              />
            </div>
            <h4 className="text-[10px] sm:text-base md:text-2xl font-bold mb-0.5 md:mb-2 uppercase group-hover:text-[#33744D] transition px-1">
              {member.name}
            </h4>
            <p className="text-[8px] sm:text-xs md:text-base text-[#33744D] font-medium uppercase tracking-wider">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Faculty Row 1 (3 Members) */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12 px-4 mb-10 md:mb-12 max-w-5xl mx-auto">
        {row2.map((member, i) => (
          <div key={i} className="group text-center min-w-0">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 mx-auto mb-3 md:mb-6 rounded-full overflow-hidden 
                         border-[1px] md:border-2 border-gray-100 group-hover:border-[#33744D] 
                         transition-all duration-300 group-hover:scale-105 shadow-md">
              <Image
                src={member.image}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                alt={member.name}
              />
            </div>
            <h4 className="text-[10px] sm:text-xs md:text-lg font-semibold uppercase mb-0.5 md:mb-1 group-hover:text-[#33744D] transition px-1">
              {member.name}
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-500 uppercase">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Faculty Row 2 (2 Members) */}
      <div className="grid grid-cols-2 gap-4 sm:gap-12 md:gap-20 px-4 max-w-2xl mx-auto">
        {row3.map((member, i) => (
          <div key={i} className="group text-center min-w-0">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 mx-auto mb-3 md:mb-6 rounded-full overflow-hidden 
                         border-[1px] md:border-2 border-gray-100 group-hover:border-[#33744D] 
                         transition-all duration-300 group-hover:scale-105 shadow-md">
              <Image
                src={member.image}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                alt={member.name}
              />
            </div>
            <h4 className="text-[10px] sm:text-xs md:text-lg font-semibold uppercase mb-0.5 md:mb-1 group-hover:text-[#33744D] transition px-1">
              {member.name}
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-500 uppercase">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
