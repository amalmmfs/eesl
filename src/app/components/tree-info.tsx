"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IntroContent() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container px-4 py-16 md:py-24 mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center w-full h-full group"
          >
            <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full opacity-20 blur-3xl group-hover:bg-blue-200 transition-colors duration-500"></div>
            <div className="relative w-full aspect-square max-w-[500px] hover:scale-105 transition-transform duration-500">
              <Image
                src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735674103/EESL/Intro%20Content.png"
                alt="EESL"
                fill
                className="object-contain rounded-2xl brightness-100 contrast-75 hover:contrast-100 transition-all duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text Content - Now Second */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-black to-gray-900 bg-clip-text text-transparent">
              Welcome to EESL
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-black text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-justify hover:text-gray-800 transition-colors duration-300"
            >
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
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
