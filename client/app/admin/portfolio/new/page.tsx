"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewPortfolio() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("featured", String(featured));
    formData.append("image", image);

    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("http://localhost:5000/api/portfolio", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create portfolio item");

      router.push("/admin/portfolio");
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/portfolio" className="p-2 bg-surface border border-border rounded-lg hover:bg-background transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </Link>
        <h1 className="text-3xl font-heading font-bold text-foreground">Add New Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-xl p-8 space-y-6 shadow-2xl">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Project Title</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="e.g. Neon Nights"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Category</label>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
          >
            <option value="">Select a category</option>
            <option value="Music Production">Music Production</option>
            <option value="Film & Ad Production">Film & Ad Production</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Branding & Strategy">Branding & Strategy</option>
            <option value="Event Management">Event Management</option>
            <option value="Photography">Photography</option>
            <option value="Podcast Production">Podcast Production</option>
            <option value="Public Relations">Public Relations</option>
            <option value="Artist Management">Artist Management</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Description (Optional)</label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Describe the project..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground block mb-2">Project Image</label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center bg-background hover:border-primary transition-colors cursor-pointer relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="w-8 h-8 text-muted-foreground mb-3" />
            <p className="text-sm font-medium text-foreground">
              {image ? image.name : "Click to upload an image"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="featured"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary"
          />
          <label htmlFor="featured" className="text-sm font-medium text-foreground select-none cursor-pointer">
            Feature on Home Page
          </label>
        </div>

        <div className="pt-4 border-t border-border flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 font-medium text-foreground bg-background border border-border rounded-lg hover:bg-surface transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            type="submit"
            className="px-6 py-3 font-medium text-white bg-primary rounded-lg flex items-center justify-center min-w-[140px] disabled:opacity-70 transition-opacity"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Save Project"}
          </button>
        </div>
      </form>
    </div>
  );
}
