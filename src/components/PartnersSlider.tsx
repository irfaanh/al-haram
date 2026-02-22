"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const partners = [
    { logo: "/images/partner1.jpg" },
    { logo: "/images/partner2.jpg" },
    { logo: "/images/partner3.jpg" },
    { logo: "/images/partner4.jpg" },
    { logo: "/images/partner5.jpg" },
    { logo: "/images/partner1.jpg" },
    { logo: "/images/partner2.jpg" },
    { logo: "/images/partner3.jpg" },
    { logo: "/images/partner4.jpg" },
    { logo: "/images/partner5.jpg" },
];

export default function PartnersSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // Scroll by one item width roughly (allowing for gap)
            const scrollTo = scrollLeft + 200;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div className="relative">
            <div
                ref={scrollRef}
                className="max-w-6xl mx-auto flex md:grid md:grid-cols-5 gap-5 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide"
            >
                {partners.map((partner, i) => (
                    <div
                        key={i}
                        className="
              bg-[#111]
              border border-[#BE5103]/40
              rounded-xl
              h-[90px] md:h-[110px]
              min-w-[160px] md:min-w-0
              flex items-center justify-center
              hover:border-[#BE5103]
              hover:-translate-y-1
              hover:shadow-[0_10px_30px_rgba(190,81,3,0.25)]
              transition-all duration-500
              snap-center
            "
                    >
                        <Image
                            src={partner.logo}
                            alt="partner"
                            width={140}
                            height={70}
                            className="object-contain max-h-[60px] w-auto"
                        />
                    </div>
                ))}
            </div>

            {/* Mobile Scroll Indicator Arrow */}
            <div className="flex md:hidden justify-center items-center mt-6">
                <button
                    onClick={scrollRight}
                    className="group flex flex-col items-center gap-2 text-[#BE5103] transition-all"
                    aria-label="Scroll partners"
                >
                    <ArrowRight size={24} strokeWidth={2.5} className="animate-pulse" />
                </button>
            </div>
        </div>
    );
}
