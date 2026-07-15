"use client"

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

interface Portfolio {
  _id: string;
  title: string;
  category: string;
  featured: boolean;
}

export default function AdminPortfolio() {
  const [items, setItems] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setItems(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-foreground">Portfolio Management</h1>
        <Link href="/admin/portfolio/new" className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> Add Project
        </Link>
      </div>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-background">
              <th className="p-4 text-sm font-medium text-muted-foreground">Title</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Category</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Featured</th>
              <th className="p-4 text-sm font-medium text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-muted-foreground">Loading portfolio items...</td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-muted-foreground">No portfolio items found. Click "Add Project" to start.</td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item._id} className="border-b border-border hover:bg-background transition-colors">
                  <td className="p-4 text-sm text-foreground font-medium">{item.title}</td>
                  <td className="p-4 text-sm text-foreground">{item.category}</td>
                  <td className="p-4 text-sm">
                    {item.featured ? (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">Yes</span>
                    ) : (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">No</span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-right">
                    <button className="text-primary hover:underline font-medium text-sm">Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
