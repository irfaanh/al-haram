import { Plus, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CoursesPage() {
    const courses = [
        { title: "Introduction to React", author: "Dr. Smith", status: "Published", students: 120 },
        { title: "Advanced Next.js", author: "Jane Doe", status: "Draft", students: 0 },
        { title: "UI/UX Design Fundamentals", author: "Alex Brown", status: "Published", students: 450 },
        { title: "Backend with Node.js", author: "Chris Green", status: "Archived", students: 85 },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
                    <p className="text-gray-400">Manage your course catalog.</p>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-[#BE5103] px-4 py-2 font-medium text-white hover:bg-[#BE5103]/90 transition-colors">
                    <Plus className="h-4 w-4" />
                    Add Course
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-all hover:border-[#BE5103]/50">
                        <div className="relative aspect-video w-full bg-zinc-800">
                            {/* Placeholder for course thumbnail */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                                <span className="text-sm">Thumbnail</span>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg text-white group-hover:text-[#BE5103] transition-colors">{course.title}</h3>
                                    <p className="text-sm text-gray-400 mt-1">by {course.author}</p>
                                </div>
                                <button className="text-gray-400 hover:text-white">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-4 flex items-center justify-between text-sm">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${course.status === "Published" ? "bg-green-500/20 text-green-400" :
                                        course.status === "Draft" ? "bg-yellow-500/20 text-yellow-400" :
                                            "bg-gray-500/20 text-gray-400"
                                    }`}>
                                    {course.status}
                                </span>
                                <span className="text-gray-400">{course.students} Students</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
