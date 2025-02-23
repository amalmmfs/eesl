import HeroSection from "./components/hero-section";
import Container from "./components/layout/container";
import NewsSection from "./components/news";
import IntroContent from "./components/tree-info";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Container>
        <div className="space-y-16 xl:space-y-24 2xl:space-y-32">
          <IntroContent />
          <NewsSection />
        </div>
      </Container>
    </div>
  );
}
