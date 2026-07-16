import Link from "next/link";
import { Globe, Mail, Phone, MessageCircle } from "lucide-react";
import { brandInfo, officeLocations } from "@/lib/data/siteContent";

export function Footer() {
  return (
    <footer className="bg-surface py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            {brandInfo.name}
          </h2>
          <p className="text-muted-foreground font-sans max-w-sm mb-4">
            {brandInfo.tagline}
          </p>
          <div className="space-y-1 text-muted-foreground font-sans text-sm">
            <p>Phone: {brandInfo.phones.join(" / ")}</p>
            <p>Email: {brandInfo.email}</p>
            <p>Website: {brandInfo.website}</p>
          </div>
          <div className="flex gap-4 mt-6">
            {[Globe, Mail, Phone, MessageCircle].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {officeLocations.map((office, idx) => (
            <div key={idx}>
              <h3 className="font-heading font-bold text-lg mb-4 text-foreground">{office.type}</h3>
              <address className="text-muted-foreground font-sans not-italic">
                {office.address}
              </address>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SMW Media & Entertainment Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
