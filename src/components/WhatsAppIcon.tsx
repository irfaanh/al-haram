"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppIcon = () => {
    return (
        <a
            href="https://wa.me/917025818313"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] group"
            aria-label="Contact us on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></div>
            <MessageCircle size={32} strokeWidth={2} className="relative z-10" />
        </a>
    );
};

export default WhatsAppIcon;
