import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function IntroContent() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 py-16 md:py-24 mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
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

          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative w-full aspect-square max-w-[500px]">
              <Image
                src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735494259/EESL/i3vdzlo9clr8oog2f1we.png"
                alt="EESL"
                fill
                className="object-contain rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
