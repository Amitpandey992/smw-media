import Link from "next/link";
import { Globe, Mail, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            SMW Media & Entertainment
          </h2>
          <p className="text-muted-foreground font-sans max-w-sm">
            Creating Stories • Building Brands • Connecting Audiences. A full-service creative agency.
          </p>
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

        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Bhopal Office</h3>
          <address className="text-muted-foreground font-sans not-italic space-y-2">
            <p>123 Creative Studio</p>
            <p>MP Nagar, Zone 1</p>
            <p>Bhopal, MP 462011</p>
          </address>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Mumbai Office</h3>
          <address className="text-muted-foreground font-sans not-italic space-y-2">
            <p>456 Film City Road</p>
            <p>Goregaon East</p>
            <p>Mumbai, MH 400065</p>
          </address>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SMW Media & Entertainment Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
