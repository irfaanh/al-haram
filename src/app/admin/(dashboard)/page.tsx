import { DollarSign, Video, Image as ImageIcon, BookOpen } from "lucide-react";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    // Fetch real data
    const [
        coursesCount,
        galleryCount,
        recentCourses,
        recentGallery,
        allCourses
    ] = await Promise.all([
        prisma.course.count(),
        prisma.gallery.count(),
        prisma.course.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' }
        }),
        prisma.gallery.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' }
        }),
        prisma.course.findMany({ select: { modules: true } })
    ]);

    // Calculate total modules safely
    // Assuming modules is stored as JSON array in Prisma
    const totalModules = allCourses.reduce((acc, course) => {
        // Check if modules is an array
        if (Array.isArray(course.modules)) {
            return acc + course.modules.length;
        }
        return acc;
    }, 0);

    const stats = [
        { title: "Total Courses", value: coursesCount.toString(), icon: BookOpen, change: "Active Courses" },
        { title: "Total Modules", value: totalModules.toString(), icon: Video, change: "Across all courses" },
        { title: "Gallery Images", value: galleryCount.toString(), icon: ImageIcon, change: "Portfolio Items" },
        // { title: "Revenue", value: "$0.00", icon: DollarSign, change: "Coming Soon" }, 
    ];

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Overview of your platform activity.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/10 transition-colors">
                            <div className="flex flex-row items-center justify-between pb-2">
                                <h3 className="text-sm font-medium text-gray-400">{stat.title}</h3>
                                <Icon className="h-4 w-4 text-gray-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 rounded-xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold mb-4">Recent Courses</h3>
                    <p className="text-sm text-gray-400 mb-4">Latest additions to your course catalog.</p>
                    <div className="space-y-4">
                        {recentCourses.length === 0 ? (
                            <p className="text-sm text-gray-500 italic">No courses added yet.</p>
                        ) : (
                            recentCourses.map((course) => (
                                <div key={course.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-10 w-16 rounded overflow-hidden bg-white/10 shrink-0 border border-white/10">
                                            {course.image ? (
                                                <Image src={course.image} alt={course.title} fill className="object-cover" sizes="64px" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">No Img</div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium leading-none line-clamp-1">{course.title}</p>
                                            <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                                                {Array.isArray(course.modules) ? course.modules.length : 0} Modules
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="font-medium text-sm text-gray-400">
                        {new Date(course.createdAt).toLocaleDateString()}
                    </div> */}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="col-span-3 rounded-xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold mb-4">Latest Gallery Uploads</h3>
                    <div className="space-y-6">
                        {recentGallery.length === 0 ? (
                            <p className="text-sm text-gray-500 italic">No images uploaded yet.</p>
                        ) : (
                            recentGallery.map((item) => (
                                <div key={item.id} className="flex items-start gap-4">
                                    <div className="relative mt-1 h-12 w-12 rounded-lg bg-white/10 overflow-hidden shrink-0 border border-white/10">
                                        {item.image ? (
                                            <Image src={item.image} alt={item.title || 'Gallery Image'} fill className="object-cover" sizes="48px" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">No Img</div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium line-clamp-1">{item.title || "Untitled Image"}</p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {new Date(item.createdAt).toLocaleDateString(undefined, {
                                                month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
