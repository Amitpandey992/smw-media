"use client";

import { useEffect, useState } from "react";
import { Users, Briefcase, Eye, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ inquiries: 0, portfolio: 0, views: 0 });

  useEffect(() => {
    // In a real app, fetch these from /api/dashboard/stats
    setStats({
      inquiries: 12,
      portfolio: 4,
      views: 1250,
    });
  }, []);

  const statCards = [
    { name: "Total Inquiries", value: stats.inquiries, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Portfolio Items", value: stats.portfolio, icon: Briefcase, color: "text-purple-500", bg: "bg-purple-500/10" },
    { name: "Page Views", value: stats.views, icon: Eye, color: "text-green-500", bg: "bg-green-500/10" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-surface p-6 rounded-xl border border-border flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">{stat.name}</p>
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-heading font-bold text-foreground">Recent Activity</h2>
        </div>
        <p className="text-muted-foreground text-sm">Dashboard activity logs will appear here.</p>
      </div>
    </div>
  );
}
