import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { OurServices } from "@/components/sections/OurServices";

export const metadata = {
  title: "Our Services | SMW Media",
  description:
    "Explore our comprehensive range of specialized verticals in media, entertainment, marketing, and more.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full bg-background min-h-screen">
      <ServicesHero />
      <OurServices />
    </main>
  );
}
