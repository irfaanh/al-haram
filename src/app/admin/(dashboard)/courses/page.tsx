"use client";

import { Plus, MoreHorizontal, X, Upload, Trash2, Edit } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

type Module = {
    title: string;
    description: string;
};

type Course = {
    id: string;
    title: string;
    description: string | null;
    image: string;
    modules: Module[];
};

export default function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    // Form State
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<{
        title: string;
        description: string;
        image: string;
        modules: Module[];
    }>({
        title: "",
        description: "",
        image: "",
        modules: [],
    });

    const fetchCourses = async () => {
        try {
            const res = await fetch("/api/courses");
            if (res.ok) {
                const data = await res.json();
                setCourses(data);
            }
        } catch (error) {
            console.error("Failed to fetch courses", error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            image: "",
            modules: [],
        });
        setEditingId(null);
        setIsModalOpen(false);
    };

    const handleEdit = (course: Course) => {
        setFormData({
            title: course.title,
            description: course.description || "",
            image: course.image,
            modules: course.modules || [],
        });
        setEditingId(course.id);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this course?")) return;
        try {
            const res = await fetch(`/api/courses/${id}`, { method: "DELETE" });
            if (res.ok) fetchCourses();
        } catch (error) {
            console.error("Failed to delete", error);
        }
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const method = editingId ? "PUT" : "POST";
            const url = editingId ? `/api/courses/${editingId}` : "/api/courses";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                fetchCourses();
                resetForm();
            }
        } catch (error) {
            console.error("Failed to save", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        setIsUploading(true);
        try {
            const file = e.target.files[0];
            const data = new FormData();
            data.append("file", file);

            const res = await fetch("/api/upload", { method: "POST", body: data });
            if (res.ok) {
                const { url } = await res.json();
                setFormData(prev => ({ ...prev, image: url }));
            }
        } catch (error) {
            console.error("Upload failed", error);
        } finally {
            setIsUploading(false);
        }
    };

    const addModule = () => {
        setFormData(prev => ({
            ...prev,
            modules: [...prev.modules, { title: "", description: "" }]
        }));
    };

    const updateModule = (index: number, key: keyof Module, value: string) => {
        const updated = [...formData.modules];
        updated[index][key] = value;
        setFormData(prev => ({ ...prev, modules: updated }));
    };

    const removeModule = (index: number) => {
        setFormData(prev => ({
            ...prev,
            modules: formData.modules.filter((_, i) => i !== index)
        }));
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Header ... */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
                    <p className="text-gray-400">Manage your course catalog.</p>
                </div>
                <button
                    onClick={() => { resetForm(); setIsModalOpen(true); }}
                    className="flex items-center gap-2 rounded-lg bg-[#BE5103] px-4 py-2 font-medium text-white hover:bg-[#BE5103]/90 transition-colors cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Course
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-zinc-900 border border-white/10 rounded-xl w-full max-w-6xl relative flex flex-col md:flex-row max-h-[90vh] overflow-hidden">

                        {/* Form Section */}
                        <div className="flex-1 flex flex-col border-r border-white/10">
                            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-zinc-900 rounded-t-xl z-10">
                                <h2 className="text-xl font-bold">{editingId ? "Edit Course" : "New Course"}</h2>
                                <button onClick={resetForm} className="text-gray-400 hover:text-white cursor-pointer">
                                    <X className="size-5" />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto flex-1">
                                <form id="course-form" onSubmit={handleSubmit} className="space-y-6">

                                    {/* ... Basic Info & Image Upload (Keep existing inputs) ... */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                                            <input
                                                required
                                                value={formData.title}
                                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white focus:border-[#BE5103] focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-1">Description (Intro)</label>
                                            <textarea
                                                value={formData.description}
                                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white focus:border-[#BE5103] focus:outline-none min-h-[80px]"
                                            />
                                        </div>

                                        {/* Image Upload */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-1">Cover Image</label>
                                            <div className="flex items-center gap-4">
                                                {formData.image ? (
                                                    <div className="flex items-center gap-4">
                                                        <div className="relative size-20 rounded-lg overflow-hidden border border-zinc-700">
                                                            <Image src={formData.image} alt="Preview" fill className="object-cover" />
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData(prev => ({ ...prev, image: "" }))}
                                                            className="px-3 py-1.5 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-md text-sm transition-colors border border-red-500/20 cursor-pointer"
                                                        >
                                                            Remove Image
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="relative">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleImageUpload}
                                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                            disabled={isUploading}
                                                        />
                                                        <button type="button" className={`px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm hover:bg-zinc-700 ${isUploading ? 'opacity-50' : ''} cursor-pointer`}>
                                                            {isUploading ? "Uploading..." : "Upload Image"}
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modules */}
                                    <div className="space-y-4 border-t border-white/10 pt-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold">Modules / Sections</h3>
                                            <button type="button" onClick={addModule} className="text-xs bg-[#BE5103]/20 text-[#BE5103] px-2 py-1 rounded hover:bg-[#BE5103]/30 cursor-pointer">
                                                + Add Module
                                            </button>
                                        </div>
                                        {formData.modules.map((mod, idx) => (
                                            <div key={idx} className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/50 space-y-3 relative group">
                                                <button
                                                    type="button"
                                                    onClick={() => removeModule(idx)}
                                                    className="absolute top-2 right-2 text-zinc-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                                >
                                                    <Trash2 className="size-4" />
                                                </button>
                                                <input
                                                    placeholder="Module Title (e.g. Civic Readiness)"
                                                    value={mod.title}
                                                    onChange={e => updateModule(idx, 'title', e.target.value)}
                                                    className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm focus:border-[#BE5103] focus:outline-none"
                                                />
                                                <textarea
                                                    placeholder="Module Description"
                                                    value={mod.description}
                                                    onChange={e => updateModule(idx, 'description', e.target.value)}
                                                    className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm focus:border-[#BE5103] focus:outline-none min-h-[60px]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </form>
                            </div>

                            <div className="p-4 border-t border-white/10 flex justify-end gap-2 bg-zinc-900 rounded-b-xl md:rounded-bl-xl md:rounded-br-none">
                                <button onClick={resetForm} className="px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer" disabled={isLoading}>Cancel</button>
                                <button
                                    form="course-form"
                                    type="submit"
                                    disabled={isLoading || isUploading}
                                    className="px-4 py-2 bg-[#BE5103] rounded-md text-sm font-medium hover:bg-[#BE5103]/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        editingId ? "Update Course" : "Create Course"
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Preview Section */}
                        <div className="hidden md:flex flex-1 flex-col bg-black/50 overflow-hidden relative">
                            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/50 backdrop-blur-sm">
                                <h2 className="text-xl font-bold text-gray-400">Live Preview</h2>
                                <button onClick={resetForm} className="text-gray-400 hover:text-white">
                                    <X className="size-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8">
                                <div className="grid gap-10 items-center">
                                    {/* Preview Content */}
                                    <div>
                                        <h3 className="text-3xl font-semibold mb-4 text-left">
                                            {formData.title || "Course Title"}
                                        </h3>
                                        <p className="text-gray-400 mb-6 text-sm whitespace-pre-wrap">
                                            {formData.description || "Course description will appear here..."}
                                        </p>

                                        <div className="space-y-4 text-gray-400">
                                            {formData.modules.length > 0 ? formData.modules.map((mod, idx) => (
                                                <details key={idx} open className="group border-b border-white/10 pb-4">
                                                    <summary className="cursor-pointer text-[#BE5103] font-semibold list-none flex items-center justify-between">
                                                        <span>{mod.title || "Module Title"}</span>
                                                        <span className="transform group-open:rotate-180 transition-transform text-white/50 text-xs">▼</span>
                                                    </summary>
                                                    <p className="mt-2 text-sm whitespace-pre-wrap">{mod.description || "Module description..."}</p>
                                                </details>
                                            )) : (
                                                <p className="text-sm italic opacity-50">Add modules to see them here.</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Preview Image */}
                                    <div className="rounded-3xl overflow-hidden border border-white/10 w-full aspect-[4/3] relative bg-zinc-800">
                                        {formData.image ? (
                                            <Image src={formData.image} alt="Preview" fill className="object-cover" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                                                Cover Image Preview
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}


            {/* List */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <div key={course.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-all hover:border-[#BE5103]/50">
                        <div className="relative aspect-video w-full bg-zinc-800">
                            {course.image ? (
                                <Image src={course.image} alt={course.title} fill className="object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                                    <span className="text-sm">No Image</span>
                                </div>
                            )}
                        </div>

                        <div className="p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg text-white group-hover:text-[#BE5103] transition-colors">{course.title}</h3>
                                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">{course.description}</p>
                                </div>
                                <div className="flex gap-1">
                                    <button onClick={() => handleEdit(course)} className="p-1 hover:text-[#BE5103] text-gray-400 cursor-pointer">
                                        <Edit className="size-4" />
                                    </button>
                                    <button onClick={() => handleDelete(course.id)} className="p-1 hover:text-red-500 text-gray-400 cursor-pointer">
                                        <Trash2 className="size-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between text-sm">
                                <span className="text-gray-500 text-xs">{course.modules?.length || 0} Modules</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
