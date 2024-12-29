import HeroSlider from "./components/hero-section";
import IntroContent from "./components/intro-content";
import NewsSection from "./components/news";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <IntroContent />
      <NewsSection />
    </div>
  );
}
