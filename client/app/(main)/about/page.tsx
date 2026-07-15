import AboutHero from "@/components/sections/about/AboutHero";
import AboutStats from "@/components/sections/about/AboutStats";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import OurNetwork from "@/components/sections/about/OurNetwork";

export const metadata = {
  title: "About Us | SMW Media & Entertainment",
  description: "SMW Media & Entertainment Pvt. Ltd. is a full-service media, entertainment, branding and digital communications company.",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16 flex flex-col gap-16 md:gap-24 overflow-hidden">
      <AboutHero />
      <AboutStats />
      <WhyChooseUs />
      <OurNetwork />
    </main>
  );
}
