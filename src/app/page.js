import Navbar from "@/components/navbar/Navbar";
import HeroSection from "./home/Hero";
import Demo from "./home/Demo";
import VoicesSection from "./home/Voices";
import FeaturesSection from "./home/Features";

export default function Home() {
  return (
    <>
      <div className="mb-24 md:mb-10">
        <Navbar />
      </div>
      <HeroSection/>
      <Demo/>
      <VoicesSection/>
      <FeaturesSection/>
    </>
  );
}
