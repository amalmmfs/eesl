import HeroSection from "./components/hero-section";
import NewsSection from "./components/news";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NewsSection />
    </div>
  );
}
