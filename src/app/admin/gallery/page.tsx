import { Upload, Trash2, Edit } from "lucide-react";

export default function GalleryPage() {
    const images = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        title: `Image ${i + 1}`,
        size: "2MB",
    }));

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Gallery</h1>
                    <p className="text-gray-400">Manage your gallery images.</p>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-[#BE5103] px-4 py-2 font-medium text-white hover:bg-[#BE5103]/90 transition-colors">
                    <Upload className="h-4 w-4" />
                    Upload Images
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {images.map((img) => (
                    <div key={img.id} className="group relative rounded-lg bg-zinc-800 p-2 border border-transparent hover:border-[#BE5103]/50 transition-colors cursor-pointer">
                        <div className="relative aspect-square w-full bg-zinc-700 rounded-md overflow-hidden">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
                                Img
                            </div>

                            {/* Hover Actions */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button className="p-2 bg-red-500/80 rounded-full hover:bg-red-500 text-white transition-colors">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                            <span className="truncate max-w-[80px]">{img.title}</span>
                            <span>{img.size}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
