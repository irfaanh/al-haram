"use client";

import { Upload, Trash2, Edit, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

type GalleryItem = {
    id: string;
    title: string | null;
    image: string;
};

export default function GalleryPage() {
    const [images, setImages] = useState<GalleryItem[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTitle, setNewTitle] = useState("");

    const fetchImages = async () => {
        try {
            const res = await fetch("/api/gallery");
            if (res.ok) {
                const data = await res.json();
                setImages(data);
            }
        } catch (error) {
            console.error("Failed to fetch images", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        setIsUploading(true);

        try {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);

            // Upload to Cloudinary via server
            const uploadRes = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!uploadRes.ok) throw new Error("Upload failed");
            const { url } = await uploadRes.json();

            // Save to DB
            const saveRes = await fetch("/api/gallery", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newTitle || file.name, image: url }), // Default title to filename if empty
            });

            if (saveRes.ok) {
                fetchImages();
                setIsModalOpen(false);
                setNewTitle("");
            }
        } catch (error) {
            console.error("Error uploading:", error);
            alert("Failed to upload image");
        } finally {
            setIsUploading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this image?")) return;
        try {
            const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
            if (res.ok) {
                setImages(prev => prev.filter(img => img.id !== id));
            }
        } catch (error) {
            console.error("Failed to delete", error);
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Gallery</h1>
                    <p className="text-gray-400">Manage your gallery images.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 rounded-lg bg-[#BE5103] px-4 py-2 font-medium text-white hover:bg-[#BE5103]/90 transition-colors cursor-pointer"
                >
                    <Upload className="h-4 w-4" />
                    Upload Images
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl w-full max-w-md relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <X className="size-5" />
                        </button>
                        <h2 className="text-xl font-bold mb-4">Upload New Image</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Image Title (Optional)</label>
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#BE5103]"
                                    placeholder="My Awesome Image"
                                />
                            </div>

                            <div className="relative border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center hover:border-[#BE5103]/50 transition-colors">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleUpload}
                                    disabled={isUploading}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                                />
                                <div className="flex flex-col items-center gap-2 text-gray-400">
                                    {isUploading ? (
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#BE5103]"></div>
                                    ) : (
                                        <>
                                            <Upload className="h-8 w-8" />
                                            <span className="text-sm">Click to select file</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {images.map((img) => (
                    <div key={img.id} className="group relative rounded-lg bg-zinc-800 p-2 border border-transparent hover:border-[#BE5103]/50 transition-colors">
                        <div className="relative aspect-square w-full bg-zinc-700 rounded-md overflow-hidden">
                            <Image
                                src={img.image}
                                alt={img.title || "Gallery Image"}
                                fill
                                className="object-cover"
                            />

                            {/* Hover Actions */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    onClick={() => handleDelete(img.id)}
                                    className="p-2 bg-red-500/80 rounded-full hover:bg-red-500 text-white transition-colors cursor-pointer"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                            <span className="truncate max-w-[120px]">{img.title || "Untitled"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
