import Navbar from "@/components/navbar/Navbar";
import HeroSection from "./home/Hero";

export default function Home() {
  return (
    <>
      <div className="mb-24 md:mb-10">
        <Navbar />
      </div>
      <HeroSection/>
    </>
  );
}
