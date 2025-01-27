import HeroSection from "./components/hero-section";
import NewsSection from "./components/news";
import IntroContent from "./components/tree-info";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <IntroContent />
      <NewsSection />
    </div>
  );
}
