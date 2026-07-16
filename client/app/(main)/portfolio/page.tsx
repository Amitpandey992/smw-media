import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-(--bg-base)">
      <PortfolioHero />
      <div className="container mx-auto px-4 py-20">
        <PortfolioGrid />
      </div>
    </main>
  );
}
