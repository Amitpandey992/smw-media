import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const syneHeading = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMW Media & Entertainment",
  description: "Full-service media, entertainment, branding, and digital communications company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${syneHeading.variable} dark antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background text-foreground flex flex-col font-sans"
      >
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
