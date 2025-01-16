"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Carousel } from "./carousel";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { ChevronDown } from "lucide-react";
import { images } from "../data/images";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const particlesConfig: ISourceOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.2,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outMode: "out",
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen items-center py-20">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Electrochemical Energy Storage Laboratory
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                Welcome to EESL at TCG CREST, pioneering advanced research in
                <span className="text-primary">
                  {" "}
                  electrochemical energy storage solutions
                </span>
                .
              </p>
            </div>
            <div className="space-y-4 text-gray-300 text-justify">
              <p>
                Our research focuses on developing next-generation energy
                storage technologies, with particular emphasis on solid-state
                batteries and advanced characterization techniques.
              </p>
              <p>
                We collaborate with leading institutions worldwide to address
                critical challenges in energy storage and contribute to a
                sustainable future.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/research"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Research
              </Link>
              <Link
                href="/publications"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                View Publications
              </Link>
            </div>
          </motion.div>

          {/* Image Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden">
              <Carousel images={images.map((img) => img.url)} />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={scrollToContent}
      >
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
}
