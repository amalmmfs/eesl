"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function IntroContent() {
  return (
    <section className="bg-white">
      <div className="container px-4 py-16 md:py-24 mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Welcome to EESL
            </h1>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              The growing popularity of next-generation high-end electronic
              devices and the increasing adoption of electric vehicles (EVs)
              have highlighted a significant challenge in cutting-edge
              lithium-ion battery (LIB) technology. Key performance metrics—such
              as energy density, power density, cycle life, safety, and
              cost—have not yet harmonized to meet the escalating demands of
              electrified transportation and the integration of renewable energy
              into the electricity grid. EESL is dedicated to addressing
              high-priority challenges that pose significant difficulties for
              India and the world in developing advanced and alternative
              versions of lithium-ion batteries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="gap-2"
                onClick={() => window.location.assign("/research")}
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.assign("/publications")}
              >
                View Publications
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative w-full aspect-square max-w-[500px]">
              <Image
                src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735674103/EESL/Intro%20Content.png"
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
