import DevicesSection from "../../components/home/DevicesSection";
import FaqSection from "../../components/home/FaqSection";
import HeroSection from "../../components/home/Hero";
import PriceSection from "../../components/home/PriceSection";
import Card from "../../components/ui/Card";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Card />
      <DevicesSection />
      <FaqSection />
      <PriceSection />
    </div>
  );
};

export default HomePage;
