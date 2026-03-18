import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

import {
  Globe,
  Users,
  Newspaper,
  Search,
  FileText,
  CheckCircle,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Target,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import TeamSlider from "@/components/TeamSlider";
// import PartnersSlider from "@/components/PartnersSlider";

export default async function Home() {

  return (
    <main className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] h-auto flex items-center justify-center text-center px-6 py-20 md:py-0">
        <Image
          src="/images/qur.jpg"
          alt="AL Haram Home"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl pt-10 md:pt-20 px-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[0.8] mb-6 tracking-tight">
            AL HARAM<br />
            <span className="text-[22px] md:text-4xl font-semibold opacity-90 block mt-2">Institute</span>
            <div className="mt-4">
              <span className="text-[14px] md:text-[20px] italic font-serif text-[#33744D] tracking-normal">Where Knowledge Guides the Future</span>
            </div>
          </h1>

          <Link href="/learn-more">
            <button
              className="px-8 py-2 md:px-8 md:py-3 rounded-full mb-6 md:mb-13
bg-white/10 backdrop-blur-md 
border border-white/30 
text-white 
hover:bg-white/20 
transition-all duration-300 
hover:-translate-y-1 
text-sm md:text-base font-medium shadow-lg -mt-5 cursor-pointer"
            >
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* ================= NEWS SCROLL ================= */}
      <section className="bg-[#33744D] py-6 overflow-hidden relative border-y border-white/10">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-16 px-8">
              {[
                "Integrated Islamic & Modern Education",
                "Qualified Islamic Scholars & Professional Educators",
                "Language Proficiency & Academic Mentoring",
                "AI and Technology Awareness Programs",
                "Leadership & Personality Development Training",
              ].map((news, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  <p className="text-white text-sm md:text-base font-medium whitespace-nowrap tracking-wide">
                    {news}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= Excellence in Education & Values ================= */}
      <section
        id="excellence"
        className="py-20 md:py-32 px-6 bg-white relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#33744D] opacity-[0.05] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white opacity-[0.02] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-10 md:gap-y-0 items-start md:items-center">
          {/* Content Side - Text Part */}
          <div className="relative z-10 order-1 md:order-2 md:col-start-2 md:row-start-1 md:pt-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-[#33744D]/20 bg-[#33744D]/5 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#33744D] animate-ping" />
                <p className="text-[10px] md:text-xs tracking-[0.3em] text-[#33744D] font-bold uppercase">
                  Integrated Professional Education
                </p>
              </div>

              <h2 className="text-3xl text-black sm:text-4xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
                Excellence in <br />
                <span className="italic font-serif text-[#33744D] font-normal">
                  Education & Values
                </span>
              </h2>

              <p className="text-black text-sm md:text-lg leading-relaxed mb-12 max-w-xl mx-auto md:mx-0">
                AL HARAM Institute provides a balanced education that combines{" "}
                <span className="text-black font-medium italic underline decoration-[#33744D]/40 underline-offset-4">
                  authentic Islamic learning
                </span>{" "}
                with modern academic development, helping students grow intellectually,
                spiritually, and professionally.
              </p>

              <div className="space-y-6 md:space-y-8 mb-12 w-full">
                {[
                  {
                    icon: Search,
                    title: "Qualified Scholars & Educators",
                    desc: "Learn under the guidance of experienced Islamic scholars and professional educators.",
                  },
                  {
                    icon: FileText,
                    title: "Language & Academic Development",
                    desc: "Strong focus on language proficiency, academic guidance, and mentoring for students.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Technology & Leadership Training",
                    desc: "Programs include AI awareness, technology exposure, personality and leadership development.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#33744D] group-hover/item:bg-[#33744D] group-hover/item:text-white transition-all duration-300">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-black font-bold text-base md:text-lg mb-1 group-hover/item:text-[#33744D] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative group order-2 md:order-1 md:col-start-1 md:row-start-1 md:row-span-2 px-4 md:px-0">
            <div className="relative h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-[#33744D]/30 transition-all duration-700 shadow-2xl">
              <Image
                src="/images/pioneerimg.jpg"
                alt="Education Insights"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#33744D] via-[#33744D]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-8 bg-[#33744D] backdrop-blur-xl border border-white/10 p-1 rounded-[1.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform duration-500">
              <div className="bg-[#33744D] px-6 py-4 rounded-[1.5rem] flex flex-col items-center justify-center min-w-[100px] md:min-w-[110px]">
                <span className="text-white font-bold text-2xl md:text-4xl leading-none">
                  2026
                </span>
                <span className="text-white/90 text-[8px] md:text-[10px] uppercase tracking-wider font-medium mt-1 text-center whitespace-nowrap px-1">
                  Admissions Open for 8th std
                </span>
              </div>
            </div>

            {/* Subtle Glass Card Element */}
            <div className="absolute -top-6 -left-6 hidden lg:block bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl animate-bounce-slow">
              <Newspaper className="text-[#33744D]" size={32} />
            </div>
          </div>

          {/* Content Side - Button Part */}
          <div className="relative z-10 order-3 md:order-3 md:col-start-2 md:row-start-2 mt-4 md:mt-10 pb-4">
            <div className="flex justify-center md:justify-start">
              <Link
                href="#"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#33744D] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2a5f3f] transition-all transform hover:scale-105 shadow-lg hover:shadow-[#33744D]/25"
              >
                Apply Now
                <ArrowUpRight size={20} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-12 md:py-20 px-6 bg-white">
        {/* <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-[#33744D] to-[#33744D]/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#33744D] uppercase font-bold text-center">
            ABOUT US
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-[#33744D] to-[#33744D]/15" />
        </div> */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl text-black sm:text-3xl md:text-5xl font-light mb-6 md:mb-8 text-center md:text-left">
              Nurturing Knowledge with{" "}
              <span className="italic font-serif text-[#33744D]">
                Character & Leadership
              </span>
            </h2>

            <div className="text-left text-sm md:text-base space-y-4 text-gray-300">
              <p className="text-black">
                AL HARAM Institute is dedicated to providing an integrated educational
                experience that combines authentic Islamic learning with modern academic
                development. Our mission is to nurture students with strong knowledge,
                discipline, and values that prepare them for success in both life and
                career.
              </p>

              <p className="text-black">
                With guidance from qualified Islamic scholars and professional educators,
                we focus on developing language proficiency, intellectual growth, and
                critical thinking skills. Our approach ensures that students receive
                personalized attention and structured academic mentoring.
              </p>

              <p className="text-black">
                In addition to traditional learning, we introduce students to modern
                knowledge areas such as technology awareness, leadership training, and
                personality development, helping them adapt confidently to the evolving
                world.
              </p>

              <p className="text-black">
                Through a safe, disciplined, and value-based environment, we aim to shape
                individuals who are not only academically capable but also morally strong
                and socially responsible.
              </p>
            </div>
          </div>

          <div className="order-first md:order-last relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-0">
              <div className="relative h-80 sm:h-96 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden md:translate-y-12 shadow-2xl">
                <Image
                  src="/images/graduationimg.jpg"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block relative h-48 sm:h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/lensimg.jpg"
                  alt="Counseling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-white p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 md:gap-4 z-20 w-max">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-300 relative">
                  <Image
                    src="/images/studentss.jpg"
                    fill
                    className="object-cover"
                    alt="User"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-300 relative">
                  <Image
                    src="/images/support.jpg"
                    fill
                    className="object-cover"
                    alt="User"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-black font-bold text-sm md:text-base leading-none">
                  Value-Based Education
                </p>
                <p className="text-[10px] text-gray-500 font-medium mt-1">
                  at AL HARAM Institute
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAMPUS FACILITIES ================= */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-5">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-[#33744D] to-[#33744D]/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#33744D] uppercase font-bold text-center">
            CAMPUS FACILITIES
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-[#33744D] to-[#33744D]/15" />
        </div>

        <div>
          <p className="text-gray-500 text-sm md:text-[16px] leading-relaxed max-w-2xl mx-auto text-center mb-10 md:mb-15">
            Our campus provides a supportive learning environment with modern
            facilities designed to enhance education, creativity, and student
            development. From smart classrooms to technology labs, every space is
            built to support academic excellence and personal growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              title: "Smart Classrooms",
              description:
                "Modern classrooms equipped with advanced learning tools to enhance interactive and effective education.",
              image: "/images/smroom.jpg",
            },
            {
              title: "Media & Technology Lab",
              description:
                "Dedicated lab facilities where students can explore technology, digital media, and practical learning experiences.",
              image: "/images/technologylab.jpg",
            },
            {
              title: "Library & Study Hall",
              description:
                "A well-equipped library and peaceful study environment that encourages focused learning and research.",
              image: "/images/library.jpg",
            },
          ].map((facility, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-3xl overflow-hidden border border-gray-200 
        hover:border-[#33744D] transition-all duration-500 
        hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(51,116,77,0.2)] flex flex-col"
            >
              {/* Image */}
              <div className="h-48 md:h-64 overflow-hidden relative">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl text-black font-semibold mb-3 md:mb-4 group-hover:text-[#33744D] transition">
                  {facility.title}
                </h3>

                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-5">
          <span className="w-20 md:w-70 h-px bg-gradient-to-l from-[#33744D] to-[#33744D]/15" />
          <p className="text-lg md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#33744D] uppercase font-bold text-center">
            WHY CHOOSE US
          </p>
          <span className="w-20 md:w-70 h-px bg-gradient-to-r from-[#33744D] to-[#33744D]/15" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {/* Card 1 */}
          <div
            className="group bg-white border border-gray-100
        rounded-2xl p-6 
        transition-all duration-300 ease-out
        hover:-translate-y-2 
        hover:shadow-[0_20px_40px_rgba(51,116,77,0.15)]
        hover:border-[#33744D]"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#33744D]/10 text-[#33744D] p-2 rounded-lg">
                <Users size={20} />
              </span>
              <h3 className="font-semibold text-[#33744D] text-lg">
                Individual Attention
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every student receives personal guidance and mentoring to help them
              understand lessons clearly and grow with confidence.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group bg-white border border-gray-100
        rounded-2xl p-6 
        transition-all duration-300 ease-out
        hover:-translate-y-2 
        hover:shadow-[0_20px_40px_rgba(51,116,77,0.15)]
        hover:border-[#33744D]"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#33744D]/10 text-[#33744D] p-2 rounded-lg">
                <BookOpen size={20} />
              </span>
              <h3 className="font-semibold text-[#33744D] text-lg">
                Experienced Mentors
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our dedicated teachers combine knowledge, experience, and compassion to
              guide students academically, spiritually, and personally.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group bg-white border border-gray-100
        rounded-2xl p-6 
        transition-all duration-300 ease-out
        hover:-translate-y-2 
        hover:shadow-[0_20px_40px_rgba(51,116,77,0.15)]
        hover:border-[#33744D]"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#33744D]/10 text-[#33744D] p-2 rounded-lg">
                <Globe size={20} />
              </span>
              <h3 className="font-semibold text-[#33744D] text-lg">
                Integrated Curriculum
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A balanced program that blends Islamic studies with modern education to
              prepare students for both worldly success and spiritual growth.
            </p>
          </div>

          {/* Row for last two cards */}
          <div className="md:col-span-3 flex justify-center gap-6 flex-wrap">

            {/* Card 4 */}
            <div
              className="w-full md:w-[31%] bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 ease-out
        hover:-translate-y-2 
        hover:shadow-[0_20px_40px_rgba(51,116,77,0.15)]
        hover:border-[#33744D]"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-[#33744D]/10 text-[#33744D] p-2 rounded-lg">
                  <ShieldCheck size={20} />
                </span>
                <h3 className="font-semibold text-[#33744D] text-lg">
                  Safe & Value-Based Environment
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A disciplined and respectful learning atmosphere that nurtures moral
                values, responsibility, and Islamic character.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="w-full md:w-[31%] bg-white/5 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 transition-all duration-300 ease-out
        hover:-translate-y-2 
        hover:shadow-[0_20px_40px_rgba(51,116,77,0.25)]
        hover:border-[#33744D]"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-[#33744D]/10 text-[#33744D] p-2 rounded-lg">
                  <Target size={20} />
                </span>
                <h3 className="font-semibold text-[#33744D] text-lg">
                  Leadership & Personality Development
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Students develop communication skills, leadership qualities, and
                confidence to face life’s challenges with strong character.
              </p>
            </div>

          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="mt-20 px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-4xl font-serif italic font-bold text-[#33744D] mb-12 text-left">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div
              className="bg-white border border-gray-100 rounded-2xl p-8 
              hover:border-[#33744D] transition duration-300 
              hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(51,116,77,0.15)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-[#33744D]" size={26} />
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  Islamic & Academic Education
                </h3>
              </div>

              <ul className="space-y-2 text-gray-500 font-semibold text-sm md:text-base">
                <li>• Quran & Islamic studies</li>
                <li>• Moral and character education</li>
                <li>• Balanced religious and modern learning</li>
                <li>• Discipline and ethical values</li>
                <li>• Knowledge for both deen and dunya</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 
              hover:border-[#33744D] transition duration-300 
              hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(51,116,77,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#33744D]" size={26} />
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  Student Mentorship
                </h3>
              </div>

              <p className="text-gray-500 font-semibold text-sm md:text-base leading-relaxed">
                Our mentors guide students personally in their studies, character
                development, and life decisions to help them grow into responsible
                and confident individuals.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 
              hover:border-[#33744D] transition duration-300 
              hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(51,116,77,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-[#33744D]" size={26} />
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  Skill & Personality Development
                </h3>
              </div>

              <p className="text-gray-500 font-semibold text-sm md:text-base leading-relaxed">
                We focus on building communication skills, leadership qualities,
                discipline, and confidence so students can succeed in education,
                career, and life.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 
              hover:border-[#33744D] transition duration-300 
              hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(51,116,77,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-[#33744D]" size={26} />
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  Value-Based Environment
                </h3>
              </div>

              <ul className="space-y-2 text-gray-500 font-semibold text-sm md:text-base">
                <li>• Safe and respectful campus</li>
                <li>• Islamic values and discipline</li>
                <li>• Character building activities</li>
                <li>• Leadership and teamwork training</li>
                <li>• Positive student community</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      {/* <section className="bg-white py-12 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-white leading-relaxed">
          <h2 className="text-3xl md:text-5xl text-center font-light mb-12 md:mb-20">
            Our students find countless <br />
            reasons to{" "}
            <span className="text-[#BE5103] italic font-serif">trust us</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
           
            <div
              className="bg-[#111] border border-[#BE5103]/30 rounded-[2.5rem] p-8 md:p-10 hover:border-[#BE5103] transition-all duration-300 group
    hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(190,81,3,0.1)] "
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#BE5103]/10 border border-[#BE5103]/20 flex items-center justify-center">
                  <span className="text-[#BE5103] font-bold text-lg">AK</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Akhil Kumar</p>
                  <p className="text-sm text-gray-500">MS in UK</p>
                </div>
              </div>

              <p className="text-gray-400 text-base leading-relaxed italic">
                "Al Haram guided me through career selection, skill building,
                and professional development smoothly. Their support made my dream of
                a global career a reality."
              </p>

              <div className="mt-8 flex items-center gap-1 text-[#BE5103]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="ml-2 text-white/50 text-sm font-medium">
                  5.0
                </span>
              </div>
            </div>

            <div
              className="bg-[#111] border border-[#BE5103]/30 rounded-[2.5rem] p-8 md:p-10 hover:border-[#BE5103] transition-all duration-300 group
    hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(190,81,3,0.1)] "
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#BE5103]/10 border border-[#BE5103]/20 flex items-center justify-center">
                  <span className="text-[#BE5103] font-bold text-lg">SR</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Sneha R</p>
                  <p className="text-sm text-gray-500">MBA in Canada</p>
                </div>
              </div>

              <p className="text-gray-400 text-base leading-relaxed italic">
                "From counselling to career readiness, everything was transparent
                and well-organised. I highly recommend Al Haram to anyone
                planning their professional future."
              </p>

              <div className="mt-8 flex items-center gap-1 text-[#BE5103]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="ml-2 text-white/50 text-sm font-medium">
                  5.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= PROGRAMS & EVENTS ================= */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-20">
            <span className="w-12 md:w-48 h-px bg-gradient-to-l from-[#33744D] to-[#33744D]/15" />
            <p className="text-sm md:text-xl tracking-[0.2em] md:tracking-[0.35em] text-[#33744D] uppercase font-bold text-center">
              PROGRAMS & EVENTS
            </p>
            <span className="w-12 md:w-48 h-px bg-gradient-to-r from-[#33744D] to-[#33744D]/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Life Mastery Development */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 aspect-[16/10] shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/makdoobi.jpg"
                alt="Makhdoomi Syllabus"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-100 text-[9px] uppercase tracking-widest font-bold text-[#33744D] shadow-sm">
                  Islamic Excellence
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-[#33744D] transition-colors duration-300">
                  Makhdoomi Syllabus
                </h3>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium line-clamp-2">
                  A structured Islamic curriculum combining deep religious knowledge with analytical thinking and scientific perspective.
                </p>
                <div className="w-0 group-hover:w-12 h-1 bg-[#33744D] mt-4 transition-all duration-700 delay-200" />
              </div>
            </div>

            {/* Cognitive Intelligence Training */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 aspect-[16/10] shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/abacusimg.jpg"
                alt="Abacus Program"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-100 text-[9px] uppercase tracking-widest font-bold text-[#33744D] shadow-sm">
                  Cognitive Training
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-[#33744D] transition-colors duration-300">
                  Abacus Program
                </h3>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium line-clamp-2">
                  Sharpening mental speed, focus, and problem-solving through advanced brain development techniques.
                </p>
                <div className="w-0 group-hover:w-12 h-1 bg-[#33744D] mt-4 transition-all duration-700 delay-200" />
              </div>
            </div>

            {/* AI & Robotics */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 aspect-[16/10] shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/airobo.jpg"
                alt="AI & Robotics"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-100 text-[9px] uppercase tracking-widest font-bold text-[#33744D] shadow-sm">
                  Innovation
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-[#33744D] transition-colors duration-300">
                  AI & Robotics
                </h3>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium line-clamp-2">
                  Empowering students with practical exposure to artificial intelligence, automation, and emerging technologies.
                </p>
                <div className="w-0 group-hover:w-12 h-1 bg-[#33744D] mt-4 transition-all duration-700 delay-200" />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/insights#programs"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 border-[#33744D] text-[#33744D] font-bold hover:bg-[#33744D] hover:text-white transition-all duration-500 group/btn"
            >
              View More Programs
              <ArrowUpRight size={22} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-white leading-relaxed">

          <h2 className="text-3xl md:text-5xl text-center font-light mb-12 md:mb-16 text-black">
            Got questions? We’ve got{" "}
            <span className="text-[#33744D] italic font-serif">answers!</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What programs does AL HARAM Institute offer?",
                a: "AL HARAM Institute provides a balanced education that combines Islamic studies with modern academic learning, helping students grow spiritually, intellectually, and morally.",
              },
              {
                q: "Who can enroll in the institute?",
                a: "Our programs are designed for students who wish to gain strong Islamic knowledge while also developing essential life skills, character, and leadership qualities.",
              },
              {
                q: "Do students receive individual attention?",
                a: "Yes. We believe every student is unique, so our mentors provide personal guidance, ensuring that each learner receives the attention and support needed for growth.",
              },
              {
                q: "What makes AL HARAM Institute different?",
                a: "Our institute focuses on moral character, discipline, and leadership alongside education. We aim to nurture students who are knowledgeable, responsible, and confident in their faith and future.",
              },
              {
                q: "Does the institute focus on personality development?",
                a: "Absolutely. We help students develop communication skills, leadership qualities, and strong values so they can succeed both in their personal lives and professional journeys.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-[#33744D] border border-white/5 rounded-2xl p-6 md:p-8 cursor-pointer hover:border-[#33744D]/50 transition-all duration-300"
              >
                <summary className="flex justify-between items-center text-white font-bold text-lg">
                  {item.q}
                  <span className="text-white group-open:rotate-45 transition-transform duration-300 text-2xl font-light">
                    +
                  </span>
                </summary>

                <p className="text-gray-200 text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
