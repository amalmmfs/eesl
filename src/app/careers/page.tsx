"use client";

import { motion } from "framer-motion";
import { careerOpportunities } from "@/app/data/careerOppurtunities";
import { ApplicationForm } from "@/app/components/application-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function CareersPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] w-full bg-white"
      >
        <div className="relative container max-w-6xl mx-auto px-4 h-full flex flex-col justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
            Join Our Team
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Be part of groundbreaking research in energy and environmental
            science
          </p>
        </div>
      </motion.section>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Research Associate Positions */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">
            Research Associate Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerOpportunities.researchAssociatePositions.map(
              (position, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {position.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {position.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-primary mt-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setSelectedPosition(position.role)}
                    variant="ghost"
                    className="text-sm gap-2 group relative overflow-hidden
                  bg-gradient-to-r from-blue-50 to-blue-100
                  hover:from-blue-100 hover:to-blue-200
                  text-blue-600 font-medium px-4 py-2
                  transition-all duration-300 ease-in-out
                  border border-blue-200 hover:border-blue-300
                  shadow-sm hover:shadow-md
                  mt-auto"
                  >
                    Apply Now
                  </Button>
                </motion.div>
              )
            )}
          </div>
        </motion.section>

        {/* PhD Position */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">
            PhD Position
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {careerOpportunities.phdPosition.title}
            </h3>
            {/* <p className="text-gray-600 mb-6 leading-relaxed">
              {careerOpportunities.phdPosition.description}
            </p> */}
            <ul className="space-y-3 mb-8">
              {careerOpportunities.phdPosition.responsibilities.map(
                (resp, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-primary mt-1.5">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                )
              )}
            </ul>
            <Button
              onClick={() =>
                setSelectedPosition(careerOpportunities.phdPosition.role)
              }
              variant="ghost"
              className="text-sm gap-2 group relative overflow-hidden
                  bg-gradient-to-r from-blue-50 to-blue-100
                  hover:from-blue-100 hover:to-blue-200
                  text-blue-600 font-medium px-4 py-2
                  transition-all duration-300 ease-in-out
                  border border-blue-200 hover:border-blue-300
                  shadow-sm hover:shadow-md
                  mt-auto"
            >
              Apply Now
            </Button>
          </div>
        </motion.section>
        {/* Prerequisites Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">
            Further Oppurtunities
          </h2>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8">
            <p className="text-white mb-6 text-lg">
              {careerOpportunities.fellowships.description}
            </p>
            <div className="grid gap-4">
              {careerOpportunities.fellowships.options.map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-4 rounded-lg"
                >
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white font-medium">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Application Instructions */}
        {/* <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
          <p className="text-gray-300">
            {careerOpportunities.applicationInstructions}
          </p>
        </motion.section> */}

        {/* Application Form Modal */}
        {selectedPosition && (
          <ApplicationForm
            role={selectedPosition}
            isOpen={!!selectedPosition}
            onClose={() => setSelectedPosition(null)}
          />
        )}
      </div>
    </main>
  );
}
