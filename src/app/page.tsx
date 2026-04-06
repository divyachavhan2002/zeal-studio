import HeroSlider from "@/components/home/HeroSlider";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <div className="page-transition">
      <HeroSlider />
      <FeaturedWork />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
}
