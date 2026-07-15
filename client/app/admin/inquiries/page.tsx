"use client";

import { useState, useEffect } from "react";

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mocking API fetch since we haven't implemented the GET endpoint yet
    // Normally: fetch('/api/inquiries', { headers: { Authorization: ... }})
    setTimeout(() => {
      setInquiries([
        {
          _id: "1",
          name: "John Doe",
          email: "john@example.com",
          service: "music",
          message: "Looking for audio engineering services.",
          isRead: false,
          createdAt: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-8">
        Inquiries
      </h1>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-background">
              <th className="p-4 text-sm font-medium text-muted-foreground">
                Name
              </th>
              <th className="p-4 text-sm font-medium text-muted-foreground">
                Email
              </th>
              <th className="p-4 text-sm font-medium text-muted-foreground">
                Service
              </th>
              <th className="p-4 text-sm font-medium text-muted-foreground">
                Date
              </th>
              <th className="p-4 text-sm font-medium text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-muted-foreground"
                >
                  Loading inquiries...
                </td>
              </tr>
            ) : inquiries.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-muted-foreground"
                >
                  No inquiries found.
                </td>
              </tr>
            ) : (
              inquiries.map((inq) => (
                <tr
                  key={inq._id}
                  className="border-b border-border hover:bg-background transition-colors"
                >
                  <td className="p-4 text-sm text-foreground">{inq.name}</td>
                  <td className="p-4 text-sm text-foreground">{inq.email}</td>
                  <td className="p-4 text-sm text-foreground capitalize">
                    {inq.service}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {new Date(inq.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${inq.isRead ? "bg-green-500/10 text-green-500" : "bg-primary/10 text-primary"}`}
                    >
                      {inq.isRead ? "Read" : "New"}
                    </span>
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
