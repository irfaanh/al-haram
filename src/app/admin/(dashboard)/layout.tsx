import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-black text-white selection:bg-[#BE5103] selection:text-white">
            <Sidebar />
            <main className="flex-1 w-full p-4 md:ml-72 md:p-8 pt-20 md:pt-8 min-h-screen">
                {children}
            </main>
        </div>
    );
}
