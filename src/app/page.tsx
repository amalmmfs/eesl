import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroSlider from "./components/Hero-Slider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to EESL
              </h1>
              <p className="text-gray-500 md:text-xl">
                We are dedicated to developing next-generation energy storage
                technologies through innovative research and collaboration.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline">View Publications</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl" />
                <div className="relative h-full flex items-center justify-center">
                  {/* You can add a hero image or animation here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
