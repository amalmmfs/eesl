"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ResearchPage() {
  useEffect(() => {
    document.title = "Research Areas | EESL";
  }, []);
  return (
    <div className="w-full bg-white border-b">
      <div className="container px-4 py-16 md:py-24 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="space-y-4 text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
              Research Areas
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our diverse research initiatives in energy storage and
              battery technology
            </p>
          </div>
          <Tabs defaultValue="characterization" className="space-y-12">
            <div className="relative">
              <TabsList className="sticky top-0 z-10">
                {/* TODO Add suitable styles here and improve the UI */}
                {[
                  {
                    value: "characterization",
                    label: "Advanced Characterizations",
                  },
                  { value: "solid-electrolyte", label: "Solid Electrolyte" },
                  { value: "non-aqueous", label: "Non-Aqueous Electrolyte" },
                  { value: "solid-state", label: "Solid State Batteries" },
                  { value: "anode-free", label: "Anode Free Batteries" },
                  { value: "computation", label: "Advanced Computation" },
                  { value: "na-ion", label: "Na-ion Battery" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 
      text-gray-700 hover:text-blue-600 hover:bg-blue-50/80
      data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 
      data-[state=active]:shadow-sm"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="mt-16 mb-12">
              <TabsContent value="characterization" className="space-y-4">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="bg-gray-100 mt-4">
                    <CardTitle className="text-2xl text-gray-900">
                      Advanced Characterizations Method for Battery Analysis
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      In-situ and operando techniques for comprehensive
                      understanding
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <p className="text-gray-700 leading-relaxed">
                        The growing demand for energy storage necessitates
                        significant improvements in current battery electrode
                        materials, as well as the development of advanced
                        electrode materials.
                      </p>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">
                          Key Insights:
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Structural evolution analysis",
                            "Redox mechanism studies",
                            "SEI formation investigation",
                            "Side reaction monitoring",
                            "Li-ion transport properties",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="h-2 w-2 rounded-full bg-blue-600" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-md bg-white">
                      <Image
                        src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735588896/EESL/Research%20Page/Advanced%20Characterizations%20method%20for%20Battery%20Analysis.png"
                        alt="Battery characterization illustration"
                        fill
                        className="object-contain p-4 transition-transform duration-300 hover:scale-105" // Changed from object-cover to object-contain and added padding
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="solid-electrolyte" className="space-y-4">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="bg-gray-100 p-6">
                    <CardTitle className="text-2xl text-gray-900">
                      Structure Diffusion Relationship in Solid Electrolyte
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Advancing solid electrolyte technology for safer batteries
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                    <motion.div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        Solid electrolytes represent a breakthrough in
                        addressing key challenges of conventional lithium-ion
                        batteries, including safety concerns and energy density
                        limitations.
                      </p>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">
                          Research Focus Areas:
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Ion occupancies and migration paths",
                            "Dimensionalities and carrier types",
                            "Point defects and ion-doping sites",
                            "Interfacial structures",
                            "Structure-property relationships",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="h-2 w-2 rounded-full bg-blue-600" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735589231/EESL/Research%20Page/Structure%20Diffusion%20relationship%20in%20Solid%20Electrolyte.png"
                        alt="Solid electrolyte structure"
                        fill
                        className="object-contain p-4 transition-transform duration-300 hover:scale-105" // Changed from object-cover to object-contain and added padding
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="non-aqueous" className="space-y-4">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="bg-gray-100 p-6">
                    <CardTitle className="text-2xl text-gray-900">
                      Non-Aqueous Electrolyte for Advanced Batteries
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Next-generation electrolytes for enhanced performance and
                      safety
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                    <motion.div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        Meeting the demands of automotive and grid applications
                        requires batteries that excel in power, durability,
                        safety, environmental friendliness, and
                        cost-effectiveness.
                      </p>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">
                          Research Objectives:
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Development of non-aqueous electrolytes",
                            "Battery power and durability enhancement",
                            "Advanced safety features implementation",
                            "Environmentally sustainable solutions",
                            "Cost-effective scaling strategies",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="h-2 w-2 rounded-full bg-blue-600" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735588896/EESL/Research%20Page/Non-Aqueous%20Electrolyte%20for%20advanced%20Batteries.png"
                        alt="Non-aqueous electrolyte systems"
                        fill
                        className="object-contain p-4 transition-transform duration-300 hover:scale-105" // Changed from object-cover to object-contain and added padding
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="solid-state" className="space-y-4">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="bg-gray-100 p-6">
                    <CardTitle className="text-2xl text-gray-900">
                      All-Solid-State Batteries (ASSBs)
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Revolutionizing energy storage with interface innovations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                    <motion.div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        ASSBs represent the future of safe, high-energy battery
                        technology. Our research focuses on overcoming interface
                        challenges to unlock their full potential.
                      </p>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">
                          Interface Solutions:
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Physical contact optimization",
                            "Grain boundary engineering",
                            "Chemical stability enhancement",
                            "Resistance reduction strategies",
                            "Interface modification techniques",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="h-2 w-2 rounded-full bg-blue-600" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735588895/EESL/Research%20Page/Solid%20State%20Batteries.png"
                        alt="Solid-state battery interfaces"
                        fill
                        className="object-contain p-4 transition-transform duration-300 hover:scale-105" // Changed from object-cover to object-contain and added padding
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="anode-free" className="space-y-4">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="bg-gray-100 p-6">
                    <CardTitle className="text-2xl text-gray-900">
                      Anode Free (Metal) Batteries
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Advanced solutions for dendrite control and high energy
                      density
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                    <motion.div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        Our research tackles the critical challenge of dendrite
                        growth in metal anode batteries, focusing on maximizing
                        energy density while maintaining long-term stability.
                      </p>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">
                          Key Parameters:
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Exchange current density optimization",
                            "Transfer coefficient analysis",
                            "Li+ transfer number studies",
                            "Diffusion coefficient measurement",
                            "Bulk conductivity enhancement",
                            "Surface diffusion control",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="h-2 w-2 rounded-full bg-blue-600" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735588896/EESL/Research%20Page/Anode%20Free%20Metal%20Batteries.png"
                        alt="Anode-free battery systems"
                        fill
                        className="object-contain p-4 transition-transform duration-300 hover:scale-105" // Changed from object-cover to object-contain and added padding
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="computation" className="space-y-4">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="bg-gray-100 p-6">
                    <CardTitle className="text-2xl text-gray-900">
                      Advanced Computation
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Accelerating material discovery through computational
                      innovation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                    <motion.div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        We leverage cutting-edge computational methods and
                        machine learning to revolutionize battery material
                        development and optimization processes.
                      </p>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">
                          Research Methods:
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "First-principles calculations",
                            "Machine learning force fields",
                            "Property prediction algorithms",
                            "Large-scale simulations",
                            "Material screening automation",
                            "Performance optimization models",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="h-2 w-2 rounded-full bg-blue-600" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735588895/EESL/Research%20Page/Advanced%20Computation.png"
                        alt="Computational methods visualization"
                        fill
                        className="object-contain p-4 transition-transform duration-300 hover:scale-105" // Changed from object-cover to object-contain and added padding
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="na-ion" className="space-y-4">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="bg-gray-100 p-6">
                    <CardTitle className="text-2xl text-gray-900">
                      Na-ion Battery Technology
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Sustainable and cost-effective energy storage solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                    <motion.div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        Our Na-ion battery research focuses on developing
                        high-performance, sustainable alternatives to
                        lithium-ion batteries using Earth-abundant materials.
                      </p>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">
                          Development Areas:
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Mn-based cathode materials",
                            "Structural optimization",
                            "Performance enhancement",
                            "Novel material compositions",
                            "Scalable manufacturing processes",
                            "Lifecycle assessment",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="h-2 w-2 rounded-full bg-blue-600" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735588896/EESL/Research%20Page/Na%20ion%20Battery.png"
                        alt="Na-ion battery systems"
                        fill
                        className="object-contain p-4 transition-transform duration-300 hover:scale-105" // Changed from object-cover to object-contain and added padding
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
