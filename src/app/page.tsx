import HeroSection from "./components/hero-section";
import NewsSection from "./components/news";
import IntroContent from "./components/tree-info";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="space-y-16 xl:space-y-24 2xl:space-y-32">
        <IntroContent />
        <NewsSection />
      </div>
    </div>
  );
}
