import { Atom, Server, Code2, Layers, PenTool } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/home.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-center">
            BEYOND <br /> EDUCATION
          </h1>
        </div>
      </section>

      {/* ================= ABOUT THE PROJECT ================= */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6 mb-8">
            <span className="w-70 h-px bg-gradient-to-l from-white to-white/15" />
            <p className="text-[11px] tracking-[0.35em] text-white uppercase font-semibold">
              About the project
            </p>
            <span className="w-70 h-px bg-gradient-to-r from-white to-white/15" />
          </div>

          <h2 className="text-center text-3xl md:text-4xl font-light leading-relaxed mb-24">
            GUIDING STUDENTS TOWARD SUCCESSFUL ADMISSION TO TOP-RANKED{" "}
            <span className="text-[#B8860B]">NEW ZEALAND UNIVERSITIES</span>{" "}
            THROUGH EXPERT CONSULTANCY SUPPORT.
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-sm text-gray-300">
            {/* Left */}
            <div className="space-y-6">
              <div>
                <p className="text-[#B8860B] uppercase mb-1">
                  Project Development
                </p>
                <p>[Next.js, React]</p>
              </div>
              <div>
                <p className="text-[#B8860B] uppercase mb-1">
                  Design & Prototyping
                </p>
                <p>[Figma]</p>
              </div>
              <div>
                <p className="text-[#B8860B] uppercase mb-1">Assets Refined</p>
                <p>[Illustrator, Photoshop]</p>
              </div>
            </div>

            {/* Middle */}
            <div className="space-y-4">
              <p className="text-[#B8860B] uppercase">Key Challenges</p>
              <p>
                Presenting detailed admission information in a simple and
                visually engaging website structure.
              </p>
              <p>
                Building trust through a modern interface that highlights
                professionalism and transparency.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <p className="text-[#B8860B] uppercase">The Goal</p>
              <p>
                Create a clean, responsive platform showcasing study
                opportunities and consultancy expertise.
              </p>
              <p>
                Strengthen brand credibility with an informative, accessible,
                and visually consistent web experience.
              </p>
            </div>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center gap-8 mt-24">
            {[Atom, Layers, Code2, Server, PenTool].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70"
              >
                <Icon size={18} strokeWidth={1.2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGN PROCESS ================= */}
      <section className="relative bg-gradient-to-r from-[#7A3300] to-[#BE5103] pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🔹 TOP-CENTER HEADING */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <span className="w-70 h-px bg-gradient-to-l from-white to-white/15" />
            <p className="text-[11px] tracking-[0.35em] text-white uppercase font-semibold">
              Design Process
            </p>
            <span className="w-70 h-px bg-gradient-to-r from-white to-white/15" />
          </div>

          {/* 🔹 MAIN CONTENT */}
          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* LEFT IMAGE */}
            <div className="-mt-100">
              <img
                src="/images/students.png"
                alt="Design process"
                className="rounded-3xl w-full object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                Creative, <br /> impactful, and <br /> user-friendly
              </h2>

              <div className="relative border border-[#B8860B]/40 rounded-full p-10 max-w-md">
                <p className="text-sm text-gray-200">
                  A clear, step-by-step process guided our project—ensuring
                  research-driven insights, strategic planning, creative
                  concepts, and validated visual design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
